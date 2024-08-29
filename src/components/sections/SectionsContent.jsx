// import React, { useEffect, useRef, useState } from "react";
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
// import "./styles.css";

// gsap.registerPlugin(useGSAP);
// const SectionsContent = () => {
//   const containerRef = useRef(null);
//   const textRef = useRef(null);
//   const buttonRef = useRef(null);
//   const [spans, setSpans] = useState([]);
//   const spanRef = useRef(null);

//   useEffect(() => {
//     const paragraph = textRef.current;
//     const text = paragraph.innerText;
//     const charArray = text.split('');

//     const spanRefs = charArray.map(() => React.createRef());

//     setSpans(charArray.map((char, i) => ({
//       char,
//       ref: spanRefs[i]
//     })));

//     // Console log the value of each span
//     setTimeout(() => {
//       spanRefs.forEach((ref, i) => {
//         console.log(`Span ${i} value:`, ref.current?.textContent);
//       });
//     }, 0);
//   }, []);
//   useGSAP(
//     () => {
//       const text = textRef.current;
//       const container = containerRef.current;
//       const button = buttonRef.current;
//       const span = spanRef.current;
//       // Set initial position
//       // gsap.set(text, { x: "100%" });
//       // Duplicate the content
//       text.innerHTML += text.innerHTML;

//       // Get the width of the content
//       const width = text.offsetWidth / 2;
//       gsap.to(text, {
//         x: -width,
//         duration: 10,
//         ease: "none",
//         repeat: -1,
//         modifiers: {
//           x: gsap.utils.unitize((x) => parseFloat(x) % -width),
//         },
//       });

//       // Add wave motion

//       // // Create the wavy animation
//       gsap.to(text, {
//         y: 20,
//         duration: 3,
//         repeat: -1,
//         yoyo: true,
//         color: "green",
//         ease: "sine.inOut",
//       });
//       // gsap.fromTo(
//       //   span,
//       //   {
//       //     y: 20,
//       //     duration: 3,
//       //     color: "red",
//       //     ease: "sine.inOut",
//       //   },
//       //   {
//       //     y: -20,
//       //     duration: 3,
//       //     yoyo: true,
//       //     repeat: -1,
//       //     color: "blue",
//       //     ease: "sine.inOut",
//       //   }
//       // );

//       // const tl = gsap.timeline({ repeat: -1 });
//       // tl.to(text, {
//       //   x: "-100%",
//       //   duration: 10,
//       //   ease: "none",
//       // });

//       gsap.to(text, {
//         x: "-50%", // Move by half of the content's width
//         duration: 20,
//         repeat: -1,
//         ease: "none",
//         modifiers: {
//           x: gsap.utils.unitize((x) => parseFloat(x) % 50), // Reset position when it reaches -50%
//         },
//       });
//       gsap.fromTo(
//         button,
//         { x: -320, rotation: 360, backgroundColor: "blue" },
//         {
//           x: 320,
//           rotation: 1440,
//           duration: 5,
//           repeat: -1,
//           backgroundColor: "red",
//           yoyo: true,
//           ease: "power1.inOut",
//         }
//       );
//       // Add vertical wave motion
//       // gsap.to(span, {
//       //   rotation: 90,
//       //   duration: 2,
//       //   repeat: 2,
//       //   yoyo: true,
//       //   ease: "sine.inOut",
//       // });
//     },
//     { scope: containerRef }
//   );
//   useEffect(() => {
//     const paragraph = document.querySelector(".wave-paragraph");
//     const text = paragraph.innerText;
//     paragraph.innerHTML = text
//       .split("")
//       .map((char, i) =>`<span ref={spanRef}>${char}</span>`)
//       .join("");
//   }, []);
//   return (
//     <div className="section-container">
//       {/* sections */}
//       <div ref={containerRef} class="wave-container">
//         <div ref={textRef} className="wave-paragraph">
//           This is a paragraph that will move in a wave-like motion continuously.
//         </div>
//       </div>
//       <button ref={buttonRef} className="btn">
//         hihi
//       </button>
//     </div>
//   );
// };

// export default SectionsContent;
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "./styles.css";

gsap.registerPlugin(useGSAP);

const SectionsContent = () => {
  const canvasRef = useRef(null);
  const buttonRef = useRef(null);

  const width = 1100;
  const height = 200; // Reduced height to fit better in the component
  const centerY = height / 2;
  const amplitude = height * 0.1;
  const speed = 50;
  const degrees = 90;

  let charObjs;

  const initScrollText = (ctx, text) => {
    ctx.font = "bold 24px Times New Roman";
    let position = width; // Start from the right edge of the canvas
    return text.split("").map((char) => {
      const charWidth = ctx.measureText(char).width;
      const charObj = {
        char,
        width: charWidth,
        position,
      };
      position += charWidth;
      return charObj;
    });
  };

  const scrollText = (ctx, dt) => {
    ctx.fillStyle = "white";

    // Calculate total text width
    const totalTextWidth = charObjs.reduce((acc, charObj) => acc + charObj.width, 0);

    charObjs.forEach((charObj) => {
      charObj.position -= dt * speed; // Move from right to left

      if (charObj.position + charObj.width < 0) {
        // If the text goes off-screen, reset the position to start again from the right edge
        charObj.position += totalTextWidth;
      }

      const y = Math.sin(charObj.position / degrees) * amplitude - 1;
      ctx.fillText(charObj.char, charObj.position, centerY + y);
    });
  };

  const animate = (ctx) => {
    const dt = 0.016; // Fixed delta time for 60fps (~16ms per frame)
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, width, height);
    scrollText(ctx, dt);
    requestAnimationFrame(() => animate(ctx));
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    charObjs = initScrollText(
      ctx,
      "This is a paragraph that will move in a wave-like motion continuously."
    );

    animate(ctx);

    return () => {
      // Cleanup if needed
    };
  }, []);

  useGSAP(
    () => {
      const button = buttonRef.current;

      // Button animation
      gsap.fromTo(
        button,
        { x: -320, rotation: 360, backgroundColor: "blue" },
        {
          x: 320,
          rotation: 1440,
          duration: 5,
          repeat: -1,
          backgroundColor: "red",
          yoyo: true,
          ease: "power1.inOut",
        }
      );
    },
    { scope: buttonRef }
  );

  return (
    <div className="section-container">
      <div className="wave-container">
        <canvas ref={canvasRef} width={width} height={height} />
      </div>
      <button ref={buttonRef} className="btn">
        hihi
      </button>
    </div>
  );
};

export default SectionsContent;

