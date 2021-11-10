import { useEffect, useRef } from "react";
import { Svg } from "./styled";

const Cursor = () => {
  const cursor = useRef();

  useEffect(() => {
    let scroll = window.addEventListener("mousemove", (event) => {
      let pointerX = event.pageX;
      let pointerY = event.pageY;
      cursor.current.style = `left: ${pointerX}px; top: ${pointerY}px`;
    });

    return () => {
      scroll.removeEventListener("mousemove");
    };
  }, []);

  return (
    <Svg
      ref={cursor}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/Svg"
    >
      <path
        d="M9.85058 22.4588L6.30409 4.92529L22.4588 12.6082L9.85058 22.4588Z"
        stroke="#2AC7BD"
      />
      <path
        d="M19.1712 13.2731L8.76671 8.07733L11.2911 19.4298L19.1712 13.2731Z"
        fill="#004440"
      />
    </Svg>
  );
};

export default Cursor;
