import { useEffect, useState, useRef, useCallback } from "react";

export function useBoundingRect() {
  const [rect, setRect] = useState(null);
  const elRef = useRef(null);

  useEffect(() => {
    setRect(elRef.current.getBoundingClientRect());
    const resizeHandler = () => {
      setRect(elRef.current.getBoundingClientRect());
    };
    window.addEventListener("resize", resizeHandler);
    return () => window.removeEventListener("resize", resizeHandler);
  }, []);

  const register = useCallback(
    () => ({
      ref: elRef,
    }),
    []
  );

  return { register, rect };
}
