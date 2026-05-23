// About.tsx
import { useEffect, useRef } from "react";
import ProfilePhoto from "../assets/images/DSC02181.jpg";

const PhotoPlaceholder = () => (
  <div
    style={{
      position: "relative",
      width: "100%",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <svg
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
      viewBox="0 0 220 240"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="pgr" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#EDE0D4" />
          <stop offset="55%" stopColor="#D4C0A8" />
          <stop offset="100%" stopColor="#C0A080" />
        </linearGradient>
      </defs>

      {/* Blob shape with gradient */}
      <path
        d="M110 12 C152 4 194 32 204 76 C214 120 194 166 156 186 C118 206 62 198 36 170 C10 142 8 92 26 54 C44 16 68 20 110 12 Z"
        fill="url(#pgr)"
      />

      {/* Subtle texture circles */}
      <circle cx="80" cy="70" r="50" fill="#D4B898" opacity="0.35" />
      <circle cx="145" cy="150" r="55" fill="#C8A882" opacity="0.25" />
      <circle cx="55" cy="170" r="38" fill="#B89870" opacity="0.2" />

      {/* Person silhouette placeholder */}
      <ellipse cx="110" cy="210" rx="62" ry="36" fill="#C4A882" opacity="0.4" />
      <rect
        x="74"
        y="148"
        width="72"
        height="72"
        rx="8"
        fill="#C4A882"
        opacity="0.3"
      />
      <ellipse cx="110" cy="138" rx="34" ry="38" fill="#DCC0A0" />

      {/* Face details */}
      <ellipse cx="100" cy="132" rx="4" ry="4.5" fill="#5A3820" />
      <ellipse cx="120" cy="132" rx="4" ry="4.5" fill="#5A3820" />
      <path
        d="M104 145 Q110 151 116 145"
        fill="none"
        stroke="#7A4A28"
        strokeWidth="1.4"
        strokeLinecap="round"
      />

      {/* Hair */}
      <path
        d="M82 118 Q110 100 138 118 C134 108 110 102 82 118 Z"
        fill="#3A2010"
        opacity="0.85"
      />
      <path
        d="M80 120 C76 132 78 146 82 154"
        fill="none"
        stroke="#2E1808"
        strokeWidth="9"
        strokeLinecap="round"
        opacity="0.75"
      />
      <path
        d="M140 120 C144 132 142 146 138 154"
        fill="none"
        stroke="#2E1808"
        strokeWidth="9"
        strokeLinecap="round"
        opacity="0.75"
      />

      {/* Body */}
      <path
        d="M82 140 C76 156 74 175 78 195 L88 195 C86 176 86 158 91 144 Z"
        fill="#CCAA8C"
        opacity="0.65"
      />
      <path
        d="M138 140 C144 156 146 175 142 195 L132 195 C134 176 134 158 129 144 Z"
        fill="#CCAA8C"
        opacity="0.65"
      />

      {/* Label */}
      <rect
        x="55"
        y="206"
        width="110"
        height="22"
        rx="11"
        fill="#C4A882"
        opacity="0.35"
      />
      <text
        x="110"
        y="221"
        fontFamily="'Inter', sans-serif"
        fontSize="10"
        fill="#8A6040"
        textAnchor="middle"
        opacity="0.8"
        fontWeight="300"
      ></text>
    </svg>

    {/* Overlay for image to be placed */}
    <img
      src={ProfilePhoto}
      alt="Hui Xin"
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
        display: "block",
        clipPath:
          "polygon(20% 0%, 100% 0%, 100% 80%, 80% 100%, 0% 100%, 0% 20%)",
      }}
    />
  </div>
);

// const RippleAnchor = () => {
//   const canvasRef = useRef<HTMLCanvasElement>(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const ctx = canvas.getContext("2d");
//     if (!ctx) return;

//     const CX = canvas.width / 2;
//     const CY = canvas.height / 2;
//     let t = 0;
//     let raf: number;

//     const rings = [
//       {
//         r: 28,
//         speed: 0.006,
//         dir: 1,
//         dots: 5,
//         color: [184, 92, 56] as [number, number, number],
//         dotR: 2.5,
//       },
//       {
//         r: 52,
//         speed: 0.004,
//         dir: -1,
//         dots: 8,
//         color: [107, 127, 82] as [number, number, number],
//         dotR: 2,
//       },
//       {
//         r: 76,
//         speed: 0.003,
//         dir: 1,
//         dots: 11,
//         color: [184, 92, 56] as [number, number, number],
//         dotR: 1.5,
//       },
//     ];

//     const ripples: { r: number; max: number; alpha: number }[] = [];

//     function spawnRipple() {
//       ripples.push({ r: 0, max: 90, alpha: 0.55 });
//     }

//     spawnRipple();
//     const t1 = setTimeout(spawnRipple, 700);
//     const t2 = setTimeout(spawnRipple, 1100);
//     const interval = setInterval(spawnRipple, 1600);

//     function draw() {
//       if (!ctx || !canvas) return;
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
//       t += 0.016;

//       // Draw expanding ripples
//       for (let i = ripples.length - 1; i >= 0; i--) {
//         const rp = ripples[i];
//         rp.r += 0.7;
//         rp.alpha = (1 - rp.r / rp.max) * 0.3;
//         if (rp.r > rp.max) {
//           ripples.splice(i, 1);
//           continue;
//         }
//         ctx.beginPath();
//         ctx.arc(CX, CY, rp.r, 0, Math.PI * 2);
//         ctx.strokeStyle = `rgba(184, 92, 56, ${rp.alpha})`;
//         ctx.lineWidth = 1.2;
//         ctx.stroke();
//       }

//       // Draw static rings with orbiting dots
//       rings.forEach((ring) => {
//         ctx.beginPath();
//         ctx.arc(CX, CY, ring.r, 0, Math.PI * 2);
//         ctx.strokeStyle = `rgba(${ring.color.join(",")}, 0.12)`;
//         ctx.lineWidth = 0.8;
//         ctx.stroke();

//         for (let d = 0; d < ring.dots; d++) {
//           const angle =
//             (d / ring.dots) * Math.PI * 2 + t * ring.speed * ring.dir * 60;
//           const dx = CX + Math.cos(angle) * ring.r;
//           const dy = CY + Math.sin(angle) * ring.r;
//           ctx.beginPath();
//           ctx.arc(dx, dy, ring.dotR, 0, Math.PI * 2);
//           ctx.fillStyle = `rgba(${ring.color.join(",")}, 0.55)`;
//           ctx.fill();
//         }
//       });

//       // Center dot
//       ctx.beginPath();
//       ctx.arc(CX, CY, 5, 0, Math.PI * 2);
//       ctx.fillStyle = "rgba(184, 92, 56, 0.85)";
//       ctx.fill();
//       ctx.beginPath();
//       ctx.arc(CX, CY, 2.5, 0, Math.PI * 2);
//       ctx.fillStyle = "var(--neutral-warm-white, #fefcf9)";
//       ctx.fill();

//       raf = requestAnimationFrame(draw);
//     }

//     draw();

//     return () => {
//       cancelAnimationFrame(raf);
//       clearInterval(interval);
//       clearTimeout(t1);
//       clearTimeout(t2);
//     };
//   }, []);

//   return (
//     <canvas
//       ref={canvasRef}
//       width={200}
//       height={200}
//       style={{ display: "block" }}
//       aria-hidden="true"
//     />
//   );
// };

export const About = (): JSX.Element => {
  const sectionRef = useRef<HTMLElement>(null);
  const trailRef = useRef<HTMLCanvasElement>(null);
  const points = useRef<{ x: number; y: number }[]>([]);
  const wanderRef = useRef({ x: 120, y: 120, angle: 0 });

  useEffect(() => {
    const section = sectionRef.current;
    const canvas = trailRef.current;
    if (!section || !canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf: number;

    const resize = () => {
      if (canvas && section) {
        canvas.width = section.offsetWidth;
        canvas.height = section.offsetHeight;
      }
    };
    resize();
    window.addEventListener("resize", resize);

    const onMove = (e: MouseEvent) => {
      if (section) {
        const r = section.getBoundingClientRect();
        wanderRef.current.x = e.clientX - r.left;
        wanderRef.current.y = e.clientY - r.top;
      }
    };
    section.addEventListener("mousemove", onMove);

    const draw = () => {
      if (!canvas || !ctx) return;
      const W = canvas.width;
      const H = canvas.height;
      const w = wanderRef.current;

      // Wandering motion
      w.angle += 0.018;
      w.x += Math.cos(w.angle) * 1.2 + Math.sin(w.angle * 0.4) * 0.6;
      w.y += Math.sin(w.angle * 0.7) * 1.1 + Math.cos(w.angle * 0.3) * 0.5;
      w.x = Math.max(20, Math.min(W - 20, w.x));
      w.y = Math.max(20, Math.min(H - 20, w.y));

      points.current.push({ x: w.x, y: w.y });
      if (points.current.length > 80) points.current.shift();

      ctx.clearRect(0, 0, W, H);

      const pts = points.current;

      // Draw trail segments with gradient fade
      for (let i = 1; i < pts.length; i++) {
        const progress = i / pts.length;
        ctx.beginPath();
        ctx.moveTo(pts[i - 1].x, pts[i - 1].y);
        ctx.lineTo(pts[i].x, pts[i].y);
        ctx.strokeStyle = `rgba(184, 92, 56, ${progress * 0.18})`;
        ctx.lineWidth = progress * 2.2;
        ctx.lineCap = "round";
        ctx.stroke();
      }

      // Soft glow at trail head
      if (pts.length > 0) {
        const head = pts[pts.length - 1];
        const gradient = ctx.createRadialGradient(
          head.x,
          head.y,
          0,
          head.x,
          head.y,
          38,
        );
        gradient.addColorStop(0, "rgba(212, 168, 110, 0.13)");
        gradient.addColorStop(1, "rgba(212, 168, 110, 0)");
        ctx.beginPath();
        ctx.arc(head.x, head.y, 38, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Cursor dot
        ctx.beginPath();
        ctx.arc(head.x, head.y, 4.5, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(176, 112, 64, 0.55)";
        ctx.fill();
        ctx.beginPath();
        ctx.arc(head.x, head.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255, 240, 225, 0.9)";
        ctx.fill();

        // Tiny cursor arrow
        ctx.save();
        ctx.translate(head.x + 5, head.y + 5);
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(0, 9);
        ctx.lineTo(2.5, 6.5);
        ctx.lineTo(4.5, 10);
        ctx.lineTo(6, 9.5);
        ctx.lineTo(4, 6);
        ctx.lineTo(7, 5.5);
        ctx.closePath();
        ctx.fillStyle = "rgba(140, 88, 48, 0.45)";
        ctx.fill();
        ctx.restore();
      }

      raf = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      section.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <section
      id="about"
      className="section section-wrapper"
      ref={sectionRef}
      style={{
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background cursor trail canvas */}
      <canvas
        ref={trailRef}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          zIndex: 0,
        }}
        aria-hidden="true"
      />

      {/* Content container */}
      <div
        className="container"
        style={{
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Top row: Photo + Greeting */}
        <div className="about-top-row">
          <div className="about-photo-wrap">
            <PhotoPlaceholder />
          </div>

          {/* <div className="about-greeting">
            <p className="sec-label"> About Me</p>
            <h2 className="about-hi">
              <em className="about-hi__em">
                Hi there, <br></br>
              </em>
              I'm Hui Xin.
            </h2>
            <p className="about-body">
              I started out as a software developer in the fintech space,
              building mobile and web applications for banking products. Over
              time, I found myself drawn to the decisions behind the
              screens.
            </p>
          </div>
        </div> */}

          <div className="about-greeting">
            <p className="sec-label"> About Me</p>
            <h2 className="about-hi">
              <em className="about-hi__em">Hi there,</em> <br />
              <span className="about-hi__name">I'm Hui Xin.</span>
            </h2>
            <p className="about-body">
              I started out as a software developer in the fintech space,
              building mobile and web applications for banking products. Over
              time, I found myself drawn to the decisions behind the screens.
            </p>
          </div>
        </div>

        {/* Bottom row: Paragraph + Ripple */}
        <div className="about-bottom-row">
          <div className="about-para-wrap">
            <p className="about-body">
              Today, I focus on designing user-centered experiences — drawing on
              my technical background to balance usability with real-world
              constraints.
            </p>
            {/* <p className="about-pull">
              how users feel their way through a system matters just as much as
              how it works.
            </p> */}
          </div>
          {/* 
          <div className="about-ripple-wrap">
            <RippleAnchor />
          </div> */}
        </div>
      </div>
    </section>
  );
};
