import { useEffect, useRef } from "react";

interface Blob {
  xFrac: number;
  yFrac: number;
  rxFrac: number;
  ryFrac: number;
  peakScroll: number;
  color: string;
  wobble: number;
  phaseOffset: number;
}

const BLOBS: Blob[] = [
  {
    xFrac: -0.02,
    yFrac: -0.02,
    rxFrac: 0.4,
    ryFrac: 0.55,
    peakScroll: 0.1,
    color: "#ddd8ce",
    wobble: 0.07,
    phaseOffset: 2,
  },
  {
    xFrac: 1.02,
    yFrac: 0.7,
    rxFrac: 0.3,
    ryFrac: 0.5,
    peakScroll: 0.1,
    color: "#e8c4b0",
    wobble: 0.06,
    phaseOffset: 5,
  },
  {
    xFrac: 1.02,
    yFrac: 0.95,
    rxFrac: 0.45,
    ryFrac: 0.5,
    peakScroll: 1,
    color: "#e8c4b0",
    wobble: 0.07,
    phaseOffset: 7,
  },
];

const PTS = 48;
const FADE_RANGE = 0.35;

function blobOpacity(peakScroll: number, scrollFrac: number): number {
  const dist = Math.abs(scrollFrac - peakScroll);
  const raw = 1 - dist / FADE_RANGE;
  return Math.max(0, Math.min(1, raw));
}

function drawBlob(
  ctx: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  rx: number,
  ry: number,
  t: number,
  wobble: number,
) {
  const step = (Math.PI * 2) / PTS;
  const verts: [number, number][] = [];
  for (let i = 0; i < PTS; i++) {
    const a = i * step;
    const w =
      1 +
      wobble * 0.55 * Math.sin(2 * a + t) +
      wobble * 0.28 * Math.sin(3 * a - t * 0.8) +
      wobble * 0.17 * Math.sin(5 * a + t * 0.6);
    verts.push([cx + Math.cos(a) * rx * w, cy + Math.sin(a) * ry * w]);
  }
  ctx.beginPath();
  ctx.moveTo(
    (verts[PTS - 1][0] + verts[0][0]) / 2,
    (verts[PTS - 1][1] + verts[0][1]) / 2,
  );
  for (let i = 0; i < PTS; i++) {
    const next = (i + 1) % PTS;
    ctx.quadraticCurveTo(
      verts[i][0],
      verts[i][1],
      (verts[i][0] + verts[next][0]) / 2,
      (verts[i][1] + verts[next][1]) / 2,
    );
  }
  ctx.closePath();
}

export const PageBlobCanvas = (): JSX.Element => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;

    let W = 0,
      H = 0,
      raf: number;
    let scrollFrac = 0;

    const resize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };

    const onScroll = () => {
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      scrollFrac = maxScroll > 0 ? window.scrollY / maxScroll : 0;
    };

    resize();
    onScroll();
    window.addEventListener("resize", resize);
    window.addEventListener("scroll", onScroll, { passive: true });

    const draw = (now: number) => {
      raf = requestAnimationFrame(draw);
      ctx.clearRect(0, 0, W, H);
      const t = now * 0.0001;
      const isMobile = W < 768;

      for (const blob of BLOBS) {
        const opacity = blobOpacity(blob.peakScroll, scrollFrac);
        if (opacity <= 0) continue;

        const cx = blob.xFrac * W;
        const cy = blob.yFrac * H;
        // on mobile use H as the base for rx so blobs stay
        // proportional on narrow viewports instead of going wide
        const rx = blob.rxFrac * (isMobile ? H * 0.7 : W);
        const ry = blob.ryFrac * H;

        const outerAlpha = isMobile ? opacity * 0.15 : opacity * 0.2;
        const innerAlpha = isMobile ? opacity * 0.12 : opacity * 0.18;

        ctx.globalAlpha = outerAlpha;
        drawBlob(ctx, cx, cy, rx, ry, t + blob.phaseOffset, blob.wobble);
        ctx.fillStyle = blob.color;
        ctx.fill();

        ctx.globalAlpha = innerAlpha;
        drawBlob(
          ctx,
          cx,
          cy,
          rx * 0.78,
          ry * 0.78,
          t + blob.phaseOffset + 1.5,
          blob.wobble * 0.85,
        );
        ctx.fillStyle = blob.color;
        ctx.fill();
      }

      ctx.globalAlpha = 1;
    };

    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 1,
      }}
    />
  );
};
