import "./skillCard.css";
import React, { useEffect, useRef } from "react";
import FA from "react-fontawesome";
import { SkillProgress } from "./skillProgress";

export const SkillCard = () => {
  const modalRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const backgroundRefs = useRef<Array<HTMLDivElement | null>>([]);

  const numDivs = 20; // Number of background divs

  // Random factors for individual div paths, initial positions, and sizes
  const randomFactors = useRef(
    Array.from({ length: numDivs }, () => Math.random() * 2 - 1),
  );
  const initialPositions = useRef(
    Array.from({ length: numDivs }, () => ({
      x: Math.random() * 800 - 400,
      y: Math.random() * 800 - 400,
    })),
  );
  // New: Random size factors for each div
  const sizeFactors = useRef(
    Array.from({ length: numDivs }, () => 0.5 + Math.random() * 0.5), // Sizes between 50% and 100%
  );

  useEffect(() => {
    // Apply initial spread positions and sizes
    backgroundRefs.current.forEach((ref, index) => {
      const { x, y } = initialPositions.current[index];
      if (ref) {
        const size = sizeFactors.current[index] * 100; // Convert factor to percentage
        ref.style.width = `${size}%`;
        ref.style.height = `${size}%`;
        ref.style.transform =
          `translateZ(calc(var(--i) * -40px)) translateX(${x}px) translateY(${y}px)`;
      }
    });
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!overlayRef.current) return;

    const { clientX, clientY } = e;
    const { left, top, width, height } = overlayRef.current
      .getBoundingClientRect();

    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;

    const xRotate = y * 10; // Increased rotation sensitivity for exaggeration
    const yRotate = x * -10;

    if (modalRef.current) {
      modalRef.current.style.transform =
        `rotateX(${xRotate}deg) rotateY(${yRotate}deg)`;
    }

    backgroundRefs.current.forEach((ref, index) => {
      // Distinct movement paths for each div
      const intensity = (index + 1) * 2; // Increased for exaggerated movement
      const randomFactor = randomFactors.current[index];
      const xMove = x * intensity * randomFactor * 40 +
        initialPositions.current[index].x; // Exaggerated lateral movement
      const yMove = y * intensity * randomFactor * 30 +
        initialPositions.current[index].y; // Exaggerated vertical movement

      if (ref) {
        ref.style.transform =
          `translateZ(calc(var(--i) * -40px)) translateX(${xMove}px) translateY(${yMove}px)`;
      }
    });
  };

  return (
    <section
      className="modal-overlay"
      ref={overlayRef}
      onMouseMove={handleMouseMove}
    >
      <div className="modal-container">
        {[...Array(numDivs)].map((_, i) => (
          <div
            key={i}
            className="background-div"
            aria-hidden="true"
            role="presentation"
            style={{ "--i": i }}
            ref={(el) => (backgroundRefs.current[i] = el)}
          >
          </div>
        ))}
        <div className="modal-card" ref={modalRef}>
          <div
            style={{
              background: "black",
              width: 56,
              height: 56,
              borderRadius: "50%",
            }}
          >
          </div>
          <h2 style={{ margin: 0 }}>React JS</h2>
          <p>
            <strong>4+</strong> Years of experience
          </p>
          <p>
            Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
            cillum sint consectetur cupidatat.
          </p>
        </div>
      </div>
    </section>
  );
};
