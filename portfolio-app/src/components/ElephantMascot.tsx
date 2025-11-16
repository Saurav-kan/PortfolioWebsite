"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";

interface Position {
  x: number;
  y: number;
}

interface Velocity {
  x: number;
  y: number;
}

const ElephantMascot = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [originalPosition, setOriginalPosition] = useState<Position>({
    x: 0,
    y: 0,
  });
  const [isThrown, setIsThrown] = useState(false);
  const [velocity, setVelocity] = useState<Velocity>({ x: 0, y: 0 });
  const [isReturning, setIsReturning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [scale, setScale] = useState(1);

  const containerRef = useRef<HTMLDivElement>(null);
  const dragStartRef = useRef<Position>({ x: 0, y: 0 });
  const lastPositionRef = useRef<Position>({ x: 0, y: 0 });
  const lastTimeRef = useRef<number>(0);
  const animationFrameRef = useRef<number | null>(null);
  const returnStartStateRef = useRef<{ pos: Position; rot: number } | null>(
    null
  );
  const settleTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const settledPositionRef = useRef<Position | null>(null);

  // Invisible floor position (from bottom of viewport)
  const getFloorY = () => {
    const containerHeight = 100;
    return window.innerHeight - containerHeight - 20; // 20px padding from bottom
  };

  useEffect(() => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const floorY = getFloorY();
      const x = window.innerWidth - rect.width - 16; // 16px from right
      const y = floorY; // Position on the floor
      setOriginalPosition({ x, y });
      setPosition({ x, y });
    }
    // Empty dependency array means this runs only on mount
  }, []);

  // EFFECT 2: Handles window resizing
  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const floorY = getFloorY();
        const x = window.innerWidth - rect.width - 16;
        const y = floorY;

        // Always update the "home" position
        setOriginalPosition({ x, y });

        // Only snap the elephant to the new home position if it's idle
        if (!isDragging && !isThrown && !isReturning) {
          setPosition({ x, y });
        }
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);

    // This effect re-creates the handleResize function
    // whenever the state changes, so it always has the fresh state.
  }, [isDragging, isThrown, isReturning]);

  // Handle mouse down - start dragging
  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();

      // --- ADD THIS BLOCK ---
      // Interrupt any pending return or settle
      if (settleTimeoutRef.current) {
        clearTimeout(settleTimeoutRef.current);
        settleTimeoutRef.current = null;
      }
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
      // --- END ADD ---

      setIsDragging(true);
      setIsThrown(false);
      setIsReturning(false);
      setVelocity({ x: 0, y: 0 });
      dragStartRef.current = { x: e.clientX, y: e.clientY };
      lastPositionRef.current = { ...position };
      lastTimeRef.current = performance.now();
      setScale(1.1);
    },
    [position] // No new dependencies needed
  );

  // Handle mouse move - update position while dragging
  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging) return;

      const currentTime = performance.now();
      const deltaTime = (currentTime - lastTimeRef.current) / 1000; // Convert to seconds
      lastTimeRef.current = currentTime;

      const deltaX = e.clientX - dragStartRef.current.x;
      const deltaY = e.clientY - dragStartRef.current.y;

      const floorY = getFloorY();
      const newPosition = {
        x: position.x + deltaX,
        y: Math.min(position.y + deltaY, floorY), // Can't go below floor
      };

      setPosition(newPosition);

      // Calculate velocity based on position change
      if (deltaTime > 0) {
        const velX = (newPosition.x - lastPositionRef.current.x) / deltaTime;
        const velY = (newPosition.y - lastPositionRef.current.y) / deltaTime;
        setVelocity({ x: velX, y: velY });
      }

      lastPositionRef.current = newPosition;
      dragStartRef.current = { x: e.clientX, y: e.clientY };

      // Calculate rotation based on movement
      const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotation(angle);
    },
    [isDragging, position]
  );

  // Handle mouse up - calculate throw velocity and start animation
  const handleMouseUp = useCallback(() => {
    if (!isDragging) return;

    setIsDragging(false);
    setScale(1);

    setIsThrown(true);

    const speed = Math.sqrt(velocity.x * velocity.x + velocity.y * velocity.y);

    // If velocity is high, use a scaled version for the "throw"
    if (speed > 100) {
      setVelocity({ x: velocity.x * 0.15, y: velocity.y * 0.15 });
    } else {
      // If velocity is low (a simple "drop"), just set it to zero.
      // Gravity will take over in the physics useEffect.
      setVelocity({ x: 0, y: 0 });
    }

    lastTimeRef.current = performance.now();
  }, [isDragging, velocity]);

  // Global mouse event listeners
  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseup", handleMouseUp);
      };
    }
  }, [isDragging, handleMouseMove, handleMouseUp]);

  // Throw animation with physics
  useEffect(() => {
    if (!isThrown) return;

    const gravity = 800; // pixels per second squared
    const bounceDamping = 0.6;
    const friction = 0.95;
    // Capture initial state when throw starts
    let currentVel = { ...velocity };
    let currentPos = { ...position };
    let currentRot = rotation;

    const animate = (currentTime: number) => {
      if (!isThrown) return;

      const deltaTime = Math.min(
        (currentTime - lastTimeRef.current) / 1000,
        0.02
      ); // Cap at 20ms
      lastTimeRef.current = currentTime;

      // Apply gravity
      currentVel.y += gravity * deltaTime;

      // Apply friction
      currentVel.x *= Math.pow(friction, deltaTime * 60);
      currentVel.y *= Math.pow(friction, deltaTime * 60);

      // Update position
      currentPos.x += currentVel.x * deltaTime;
      currentPos.y += currentVel.y * deltaTime;

      // Bounce off edges
      const containerWidth = 100;
      const containerHeight = 100;
      const floorY = getFloorY();

      if (currentPos.x < 0) {
        currentPos.x = 0;
        currentVel.x = -currentVel.x * bounceDamping;
      } else if (currentPos.x > window.innerWidth - containerWidth) {
        currentPos.x = window.innerWidth - containerWidth;
        currentVel.x = -currentVel.x * bounceDamping;
      }

      if (currentPos.y < 0) {
        currentPos.y = 0;
        currentVel.y = -currentVel.y * bounceDamping;
      } else if (currentPos.y > floorY) {
        // Hit the invisible floor - bounce with damping
        currentPos.y = floorY;
        currentVel.y = -currentVel.y * bounceDamping;
        // Also reduce horizontal velocity on floor impact
        currentVel.x *= 0.9;
      }

      // Update rotation during throw
      currentRot += currentVel.x * 0.05;

      setPosition(currentPos);
      setVelocity(currentVel);
      setRotation(currentRot);

      // Check if velocity is low enough to start return
      // Wait for elephant to settle (very low velocity and at/near floor)
      const speed = Math.sqrt(
        currentVel.x * currentVel.x + currentVel.y * currentVel.y
      );
      const nearFloor = currentPos.y >= floorY - 5; // Within 5px of floor
      const isSettled = speed < 15 && Math.abs(currentVel.y) < 25 && nearFloor;

      if (isSettled) {
        setIsThrown(false);
        // Capture the final settled position (ensure it's on floor)
        const finalPos = { x: currentPos.x, y: floorY };
        // Store in ref to avoid closure issues
        settledPositionRef.current = finalPos;
        setPosition(finalPos);
        setVelocity({ x: 0, y: 0 });

        // Clear any existing timeout
        if (settleTimeoutRef.current) {
          clearTimeout(settleTimeoutRef.current);
        }

        // Small delay to ensure it's fully settled before returning
        settleTimeoutRef.current = setTimeout(() => {
          // Double-check we're still not in a throw state and not already returning
          if (settledPositionRef.current) {
            // Use the stored settled position from ref
            const settledPos = settledPositionRef.current;
            returnStartStateRef.current = {
              pos: { ...settledPos },
              rot: currentRot,
            };
            // Ensure position is at settled position before starting return
            setPosition(settledPos);
            setIsReturning(true);
            settledPositionRef.current = null;
          }
          settleTimeoutRef.current = null;
        }, 300);

        return;
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null; // Good practice
      }
      // if (settleTimeoutRef.current) {
      //   clearTimeout(settleTimeoutRef.current);
      //   settleTimeoutRef.current = null;
      // }
    };
  }, [isThrown, isReturning]);

  // Return animation
  useEffect(() => {
    if (!isReturning || !returnStartStateRef.current) return;

    // Use captured state from ref - this is the position when return started
    const startPos = { ...returnStartStateRef.current.pos };
    const startRot = returnStartStateRef.current.rot;

    // Get current original position (in case it changed)
    const targetPos = { ...originalPosition };
    const distance = Math.sqrt(
      Math.pow(targetPos.x - startPos.x, 2) +
        Math.pow(targetPos.y - startPos.y, 2)
    );

    // Only skip animation if truly at the exact same position (within 0.5px)
    if (distance < 0.5) {
      // Already at original position - no need to animate
      setIsReturning(false);
      setRotation(0);
      setPosition(targetPos);
      returnStartStateRef.current = null;
      return;
    }

    // Constant walking speed (pixels per second)
    const walkingSpeed = 150; // pixels per second
    const duration = (distance / walkingSpeed) * 1000; // Convert to milliseconds
    // Ensure minimum duration to prevent instant teleportation
    const minDuration = 300; // Minimum 300ms
    const finalDuration = Math.max(duration, minDuration);
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      if (!isReturning || !returnStartStateRef.current) return;

      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / finalDuration, 1);

      // Ease-in-out function
      const easeProgress =
        progress < 0.5
          ? 2 * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 2) / 2;

      setPosition({
        x: startPos.x + (targetPos.x - startPos.x) * easeProgress,
        y: startPos.y + (targetPos.y - startPos.y) * easeProgress,
      });

      // Rotate back to 0
      setRotation(startRot * (1 - easeProgress));

      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(animate);
      } else {
        // Animation complete - ensure we're exactly at target
        setIsReturning(false);
        setRotation(0);
        setPosition(targetPos);
        returnStartStateRef.current = null;
      }
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isReturning]);

  return (
    <motion.div
      ref={containerRef}
      className="fixed z-30 cursor-grab active:cursor-grabbing select-none pointer-events-auto"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: `rotate(${rotation}deg) scale(${scale})`,
        transition:
          isDragging || isThrown || isReturning
            ? "none"
            : "transform 0.2s ease",
        willChange:
          isDragging || isThrown || isReturning ? "transform" : "auto",
      }}
      onMouseDown={handleMouseDown}
      whileHover={
        !isDragging && !isThrown && !isReturning ? { scale: 1.05 } : {}
      }
      animate={{
        y: isDragging || isThrown || isReturning ? 0 : [0, -5, 0],
      }}
      transition={{
        y: {
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        },
        rotate: {
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
    >
      <div
        className="neu-flat rounded-full p-2 md:p-3 transition-all duration-200"
        style={{
          animation:
            isDragging || isThrown || isReturning
              ? "none"
              : "idleTilt 3s ease-in-out infinite",
        }}
      >
        <svg
          width="60"
          height="60"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          className="text-neu-text dark:text-[#e2e8f0] md:w-20 md:h-20"
        >
          {/* Elephant Body */}
          <ellipse
            cx="50"
            cy="65"
            rx="25"
            ry="20"
            fill="currentColor"
            opacity="0.8"
          />

          {/* Head */}
          <ellipse
            cx="50"
            cy="40"
            rx="20"
            ry="25"
            fill="currentColor"
            opacity="0.9"
          />

          {/* Trunk */}
          <path
            d="M 50 45 Q 45 55 40 60 Q 38 62 40 64 Q 42 62 45 60 Q 50 55 50 45"
            fill="currentColor"
            opacity="0.8"
          />

          {/* Tusk */}
          <path
            d="M 35 50 L 28 58 L 30 56 L 32 54 L 35 52 Z"
            fill="currentColor"
            opacity="0.9"
          />

          {/* Glasses */}
          <circle
            cx="42"
            cy="38"
            r="6"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            opacity="0.9"
          />
          <circle
            cx="58"
            cy="38"
            r="6"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            opacity="0.9"
          />
          <line
            x1="48"
            y1="38"
            x2="52"
            y2="38"
            stroke="currentColor"
            strokeWidth="1.5"
            opacity="0.9"
          />

          {/* Eyes */}
          <circle cx="42" cy="38" r="2" fill="currentColor" />
          <circle cx="58" cy="38" r="2" fill="currentColor" />

          {/* Laptop Base */}
          <rect
            x="32"
            y="72"
            width="36"
            height="18"
            rx="2"
            fill="currentColor"
            opacity="0.7"
          />

          {/* Laptop Screen */}
          <rect
            x="34"
            y="74"
            width="32"
            height="12"
            rx="1"
            fill="currentColor"
            opacity="0.3"
          />

          {/* Screen Content - Code Lines */}
          <line
            x1="38"
            y1="77"
            x2="58"
            y2="77"
            stroke="currentColor"
            strokeWidth="0.8"
            opacity="0.6"
          />
          <line
            x1="38"
            y1="80"
            x2="54"
            y2="80"
            stroke="currentColor"
            strokeWidth="0.8"
            opacity="0.6"
          />
          <line
            x1="38"
            y1="83"
            x2="60"
            y2="83"
            stroke="currentColor"
            strokeWidth="0.8"
            opacity="0.6"
          />

          {/* Keyboard Keys */}
          <rect
            x="36"
            y="87"
            width="4"
            height="2"
            rx="0.3"
            fill="currentColor"
            opacity="0.5"
          />
          <rect
            x="42"
            y="87"
            width="4"
            height="2"
            rx="0.3"
            fill="currentColor"
            opacity="0.5"
          />
          <rect
            x="48"
            y="87"
            width="4"
            height="2"
            rx="0.3"
            fill="currentColor"
            opacity="0.5"
          />
          <rect
            x="54"
            y="87"
            width="4"
            height="2"
            rx="0.3"
            fill="currentColor"
            opacity="0.5"
          />

          {/* Trunk on keyboard */}
          <ellipse
            cx="44"
            cy="88"
            rx="2.5"
            ry="1.5"
            fill="currentColor"
            opacity="0.7"
          />
        </svg>
      </div>
    </motion.div>
  );
};

export default ElephantMascot;
