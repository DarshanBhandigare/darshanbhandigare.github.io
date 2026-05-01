import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const ring = ringRef.current;
    if (!cursor || !ring) return undefined;

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;
    let frame = 0;

    const moveCursor = (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
    };

    const animateCursor = () => {
      cursor.style.left = `${mouseX}px`;
      cursor.style.top = `${mouseY}px`;
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      ring.style.left = `${ringX}px`;
      ring.style.top = `${ringY}px`;
      frame = window.requestAnimationFrame(animateCursor);
    };

    const handlePointer = (event) => {
      const interactive = event.target.closest("a, button");
      if (!interactive) return;
      cursor.style.width = "20px";
      cursor.style.height = "20px";
      ring.style.width = "50px";
      ring.style.height = "50px";
    };

    const resetPointer = (event) => {
      const interactive = event.target.closest("a, button");
      if (!interactive) return;
      cursor.style.width = "12px";
      cursor.style.height = "12px";
      ring.style.width = "36px";
      ring.style.height = "36px";
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("pointerover", handlePointer);
    window.addEventListener("pointerout", resetPointer);
    animateCursor();

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("pointerover", handlePointer);
      window.removeEventListener("pointerout", resetPointer);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      <div id="cursor" ref={cursorRef}></div>
      <div id="cursor-ring" ref={ringRef}></div>
    </>
  );
}
