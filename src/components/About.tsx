// About.tsx
import { useEffect, useRef } from "react";

// ─────────────────────────────────────────────────
// BlobPhoto — top-left quad cell
// Replace the inner <div> with:
//   <img src="/images/profile.jpg" alt="Hui Xin"
//        style={{ width:"100%", height:"100%", objectFit:"cover" }} />
// ─────────────────────────────────────────────────
const BlobPhoto = () => (
  <div style={{ position: "relative", width: 260, height: 280, flexShrink: 0 }}>
    {/* Inline SVG just to register the clipPath id */}
    <svg
      style={{ position: "absolute", width: 0, height: 0, overflow: "hidden" }}
    >
      <defs>
        <clipPath id="blobPhotoClip" clipPathUnits="objectBoundingBox">
          {/* Organic asymmetric blob — wider at top-right, indented bottom-left */}
          <path
            d="
            M 0.52 0.03
            C 0.74 -0.01  0.98 0.10  0.99 0.30
            C 1.00 0.48   0.87 0.57  0.91 0.74
            C 0.95 0.90   1.01 0.98  0.83 1.01
            C 0.65 1.04   0.50 0.95  0.34 0.98
            C 0.18 1.01   0.01 1.03  0.00 0.82
            C -0.01 0.63  0.11 0.54  0.07 0.37
            C 0.03 0.19  -0.02 0.05  0.19 0.01
            C 0.33 -0.02  0.42 0.05  0.52 0.03 Z
          "
          />
        </clipPath>
      </defs>
    </svg>

    {/* Clipped container */}
    <div
      style={{
        width: "100%",
        height: "100%",
        clipPath: "url(#blobPhotoClip)",
        WebkitClipPath: "url(#blobPhotoClip)",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/*
        ── SWAP THIS BLOCK for your real photo ──────────────────────────
        <img
          src="/images/profile.jpg"
          alt="Hui Xin"
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }}
        />
        ─────────────────────────────────────────────────────────────────
      */}

      {/* Placeholder — warm gradient background + silhouette */}
      <div
        style={{
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(160deg, var(--neutral-light-grey) 0%, #d4c4b0 55%, #c0a888 100%)",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Soft radial highlight — mimics studio lighting */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 70% 60% at 60% 30%, rgba(254,252,249,0.35) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        {/* Silhouette SVG */}
        <svg
          viewBox="0 0 120 170"
          width="110"
          height="155"
          fill="none"
          aria-hidden="true"
          style={{ position: "relative", zIndex: 1 }}
        >
          {/* Head */}
          <ellipse
            cx="60"
            cy="52"
            rx="26"
            ry="30"
            fill="#8a8070"
            opacity="0.3"
          />
          {/* Hair — top blob */}
          <ellipse
            cx="60"
            cy="30"
            rx="28"
            ry="18"
            fill="#6a6058"
            opacity="0.28"
          />
          {/* Shoulders / body */}
          <path
            d="M 14 165 C 14 112 106 112 106 165"
            fill="#8a8070"
            opacity="0.28"
          />
          {/* Neck */}
          <rect
            x="52"
            y="76"
            width="16"
            height="22"
            rx="6"
            fill="#8a8070"
            opacity="0.22"
          />
        </svg>

        {/* "your photo here" label */}
        <span
          style={{
            position: "absolute",
            bottom: 18,
            left: "50%",
            transform: "translateX(-50%)",
            fontFamily: "var(--font-primary)",
            fontSize: "0.7rem",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--neutral-mid-grey)",
            whiteSpace: "nowrap",
            opacity: 0.75,
          }}
        >
          your photo here
        </span>
      </div>
    </div>

    {/* Decorative accent dot — top-right */}
    <div
      style={{
        position: "absolute",
        top: 14,
        right: -4,
        width: 10,
        height: 10,
        borderRadius: "50%",
        background: "var(--primary-warm)",
        opacity: 0.35,
      }}
    />
    {/* Decorative accent dot — bottom-left */}
    <div
      style={{
        position: "absolute",
        bottom: 22,
        left: -6,
        width: 7,
        height: 7,
        borderRadius: "50%",
        background: "var(--secondary-sage)",
        opacity: 0.3,
      }}
    />
  </div>
);

// ─────────────────────────────────────────────────
// RippleAnchor — bottom-right quad cell
// Concentric rings + orbiting dots + pulsing cursor
// ─────────────────────────────────────────────────
const RippleAnchor = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    const CX = 100,
      CY = 100;
    let t = 0;
    let raf: number;

    const rings = [
      {
        r: 28,
        speed: 0.006,
        dir: 1,
        dots: 5,
        color: [184, 92, 56] as [number, number, number],
        dotR: 2.5,
      },
      {
        r: 54,
        speed: 0.004,
        dir: -1,
        dots: 8,
        color: [107, 127, 82] as [number, number, number],
        dotR: 2,
      },
      {
        r: 80,
        speed: 0.0025,
        dir: 1,
        dots: 12,
        color: [184, 92, 56] as [number, number, number],
        dotR: 1.5,
      },
    ];

    const ripples: { r: number; max: number; alpha: number }[] = [];

    function spawnRipple() {
      ripples.push({ r: 0, max: 92, alpha: 0.55 });
    }
    spawnRipple();
    const t1 = setTimeout(spawnRipple, 700);
    const t2 = setTimeout(spawnRipple, 1200);
    const interval = setInterval(spawnRipple, 1700);

    function draw() {
      ctx.clearRect(0, 0, 200, 200);
      t += 0.016;

      // Background glow
      const bg = ctx.createRadialGradient(CX, CY, 0, CX, CY, 88);
      bg.addColorStop(0, `rgba(184,92,56,${0.04 + Math.sin(t * 1.4) * 0.02})`);
      bg.addColorStop(1, "rgba(184,92,56,0)");
      ctx.beginPath();
      ctx.arc(CX, CY, 88, 0, Math.PI * 2);
      ctx.fillStyle = bg;
      ctx.fill();

      // Expanding ripple rings
      for (let i = ripples.length - 1; i >= 0; i--) {
        const rp = ripples[i];
        rp.r += 0.65;
        rp.alpha = (1 - rp.r / rp.max) * 0.28;
        if (rp.r > rp.max) {
          ripples.splice(i, 1);
          continue;
        }
        ctx.beginPath();
        ctx.arc(CX, CY, rp.r, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(184,92,56,${rp.alpha})`;
        ctx.lineWidth = 1.2;
        ctx.stroke();
      }

      // Static rings + orbiting dots
      rings.forEach((ring) => {
        // Ring track
        ctx.beginPath();
        ctx.arc(CX, CY, ring.r, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(${ring.color.join(",")},0.1)`;
        ctx.lineWidth = 0.8;
        ctx.stroke();

        // Orbiting dots
        for (let d = 0; d < ring.dots; d++) {
          const angle =
            (d / ring.dots) * Math.PI * 2 + t * ring.speed * ring.dir * 60;
          const dx = CX + Math.cos(angle) * ring.r;
          const dy = CY + Math.sin(angle) * ring.r;
          ctx.beginPath();
          ctx.arc(dx, dy, ring.dotR, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${ring.color.join(",")},0.5)`;
          ctx.fill();
        }
      });

      // Centre cursor dot — pulsing
      const pulse = 5 + Math.sin(t * 2.2) * 1.8;
      const centreGlow = ctx.createRadialGradient(
        CX,
        CY,
        0,
        CX,
        CY,
        pulse * 2.8,
      );
      centreGlow.addColorStop(0, "rgba(184,92,56,0.45)");
      centreGlow.addColorStop(1, "rgba(184,92,56,0)");
      ctx.beginPath();
      ctx.arc(CX, CY, pulse * 2.8, 0, Math.PI * 2);
      ctx.fillStyle = centreGlow;
      ctx.fill();

      ctx.beginPath();
      ctx.arc(CX, CY, pulse, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(184,92,56,0.82)";
      ctx.fill();

      ctx.beginPath();
      ctx.arc(CX, CY, pulse * 0.42, 0, Math.PI * 2);
      ctx.fillStyle = "var(--neutral-warm-white, #fefcf9)";
      ctx.fill();

      // Cursor arrow
      ctx.save();
      ctx.translate(CX + pulse + 2, CY + pulse + 2);
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(0, 9);
      ctx.lineTo(2.5, 6.5);
      ctx.lineTo(4.5, 10.5);
      ctx.lineTo(6, 10);
      ctx.lineTo(4, 6.5);
      ctx.lineTo(7.5, 6);
      ctx.closePath();
      ctx.fillStyle = "rgba(140,70,36,0.5)";
      ctx.fill();
      ctx.restore();

      raf = requestAnimationFrame(draw);
    }
    draw();

    return () => {
      cancelAnimationFrame(raf);
      clearInterval(interval);
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={200}
      height={200}
      aria-hidden="true"
      style={{ display: "block" }}
    />
  );
};

// ─────────────────────────────────────────────────
// About — main section
// ─────────────────────────────────────────────────
export const About = (): JSX.Element => {
  const sectionRef = useRef<HTMLElement>(null);
  const trailRef = useRef<HTMLCanvasElement>(null);
  const points = useRef<{ x: number; y: number }[]>([]);
  const wanderRef = useRef({ x: 200, y: 160, angle: 0 });

  useEffect(() => {
    const section = sectionRef.current;
    const canvas = trailRef.current;
    if (!section || !canvas) return;

    const ctx = canvas.getContext("2d")!;
    let raf: number;

    // ── Resize canvas to match section ──────────────────────
    const resize = () => {
      canvas.width = section.offsetWidth;
      canvas.height = section.offsetHeight;
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(section);

    // ── Autonomous wander (Lissajous-ish) ────────────────────
    // Also follows mouse when inside section
    const onMove = (e: MouseEvent) => {
      const r = section.getBoundingClientRect();
      wanderRef.current.x = e.clientX - r.left;
      wanderRef.current.y = e.clientY - r.top;
    };
    section.addEventListener("mousemove", onMove);

    let frame = 0;

    const draw = () => {
      const W = canvas.width,
        H = canvas.height;
      const w = wanderRef.current;

      // Autonomous drift — slowly explores the full section
      frame++;
      w.angle += 0.015;
      w.x +=
        Math.cos(w.angle) * 1.1 +
        Math.sin(w.angle * 0.38) * 0.55 +
        Math.sin(frame * 0.007) * 0.4;
      w.y +=
        Math.sin(w.angle * 0.72) * 1.0 +
        Math.cos(w.angle * 0.31) * 0.5 +
        Math.cos(frame * 0.011) * 0.35;

      // Soft clamp with eased bounce off edges
      const pad = 24;
      if (w.x < pad) w.x += (pad - w.x) * 0.06;
      if (w.x > W - pad) w.x -= (w.x - (W - pad)) * 0.06;
      if (w.y < pad) w.y += (pad - w.y) * 0.06;
      if (w.y > H - pad) w.y -= (w.y - (H - pad)) * 0.06;

      points.current.push({ x: w.x, y: w.y });
      if (points.current.length > 90) points.current.shift();

      ctx.clearRect(0, 0, W, H);

      const pts = points.current;

      // Trail line — warm terracotta, fading in
      for (let i = 1; i < pts.length; i++) {
        const progress = i / pts.length;
        ctx.beginPath();
        ctx.moveTo(pts[i - 1].x, pts[i - 1].y);
        ctx.lineTo(pts[i].x, pts[i].y);
        ctx.strokeStyle = `rgba(184,92,56,${progress * 0.11})`;
        ctx.lineWidth = progress * 2.4;
        ctx.lineCap = "round";
        ctx.stroke();
      }

      // Sage-green micro dots along trail — "breadcrumbs"
      for (let i = 4; i < pts.length - 1; i += 4) {
        const progress = i / pts.length;
        if (progress < 0.28) continue;
        ctx.beginPath();
        ctx.arc(pts[i].x, pts[i].y, 1.2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(107,127,82,${progress * 0.16})`;
        ctx.fill();
      }

      // Soft glow at cursor head
      if (pts.length > 0) {
        const head = pts[pts.length - 1];
        const glow = ctx.createRadialGradient(
          head.x,
          head.y,
          0,
          head.x,
          head.y,
          32,
        );
        glow.addColorStop(0, "rgba(184,92,56,0.1)");
        glow.addColorStop(1, "rgba(184,92,56,0)");
        ctx.beginPath();
        ctx.arc(head.x, head.y, 32, 0, Math.PI * 2);
        ctx.fillStyle = glow;
        ctx.fill();

        // Cursor head dot
        ctx.beginPath();
        ctx.arc(head.x, head.y, 4, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(184,92,56,0.42)";
        ctx.fill();
        ctx.beginPath();
        ctx.arc(head.x, head.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(254,252,249,0.88)";
        ctx.fill();

        // Cursor arrow
        ctx.save();
        ctx.translate(head.x + 5, head.y + 5);
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(0, 8.5);
        ctx.lineTo(2.2, 6);
        ctx.lineTo(4, 9.5);
        ctx.lineTo(5.5, 9);
        ctx.lineTo(3.8, 5.8);
        ctx.lineTo(6.5, 5.2);
        ctx.closePath();
        ctx.fillStyle = "rgba(140,70,36,0.38)";
        ctx.fill();
        ctx.restore();
      }

      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      section.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <section
      id="about"
      className="section section-wrapper"
      ref={sectionRef}
      style={{ position: "relative", overflow: "hidden" }}
    >
      {/* ── Cursor trail — full-section background layer ── */}
      <canvas
        ref={trailRef}
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div className="about-quad">
          {/* ── TL: Blob photo ── */}
          <div className="about-quad__photo-wrap">
            <BlobPhoto />
          </div>

          {/* ── TR: Greeting + paragraph 1 ── */}
          <div className="about-quad__greeting">
            <span className="about-quad__hi">hi there,</span>
            <span className="about-quad__name">i'm hui xin.</span>
            <p className="about-quad__body" style={{ marginTop: "1rem" }}>
              I started out as a software developer in the fintech space,
              building mobile and web applications for banking products. Over
              time, I found myself drawn to the decisions{" "}
              <em style={{ fontStyle: "italic", color: "var(--primary-warm)" }}>
                behind
              </em>{" "}
              the screens — how users experience these systems and how small
              design choices impact clarity and trust.
            </p>
          </div>

          {/* ── BL: Paragraph 2 + pull quote ── */}
          <div className="about-quad__origin">
            <p className="about-quad__body">
              Today, I focus on designing user-centered experiences, drawing on
              my technical background to balance usability with real-world
              constraints.
            </p>
            <p
              className="about-quad__body"
              style={{
                marginTop: "1.25rem",
                paddingLeft: "1.1rem",
                borderLeft: "2px solid var(--primary-warm)",
                fontFamily: "var(--font-serif)",
                fontStyle: "italic",
                fontSize: "clamp(0.95rem, 1.6vw, 1.05rem)",
                color: "var(--primary-warm)",
                opacity: "0.n85",
              }}
            >
              how users feel their way through a system matters just as much as
              how it works.
            </p>
          </div>

          {/* ── BR: Ripple anchor ── */}
          <div
            className="about-quad__today"
            style={{
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
            }}
          >
            <RippleAnchor />
          </div>
        </div>
      </div>
    </section>
  );
};
