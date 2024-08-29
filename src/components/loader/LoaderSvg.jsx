import React, { useRef } from "react";
// import {ReactComponent as  loading} from "../../assets/loader.svg"
import LoadingSVG from "../../assets/loader.svg";
import "./styles.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);
const LoaderSvg = () => {
  const svgRef = useRef(null);
  const spanRef = useRef(null);
  const containerRef = useRef(null);
  useGSAP(() => {
    const tl = gsap.timeline();

    gsap.set(svgRef.current, {
      scale: 5,
      y: "700px",
      x: "-60px",
      duration:3,
      ease:"power1.in",
      transformOrigin: "center center",
    });
    gsap.set(spanRef.current, { opacity: 0 });

    tl.to(svgRef.current, {
      y: 0,
      x: 0,
      rotation:180,
      scale: 1,
      duration: 0.8,
      ease: "power3.in",
    })
      .to(spanRef.current, {
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
      })
      .to(svgRef.current, {
        rotation: 720,
        duration: 1,
        delay:0.5,
        ease: "sine.inOut",
        repeat: -1,
        onRepeat: function () {
          const currentDuration = this.duration();
          if (currentDuration === 1) {
            // this.vars.rotation += 360;
            this.duration(2);
          } else {
            this.duration(1);
            this.vars.rotation = 360;
          }
        },
      });
  }, []);

  return (
    <div className="container" ref={containerRef}>
      <img src={LoadingSVG} alt="loader" ref={svgRef} />
      <span ref={spanRef}>own your future</span>
    </div>
  );
};

export default LoaderSvg;
