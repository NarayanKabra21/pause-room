import { useCallback, useEffect, useRef, useState } from "react";
import { X, ZoomIn, ZoomOut, ChevronLeft, ChevronRight, RotateCcw } from "lucide-react";

type LightboxProps = {
  images: { src: string; alt: string }[];
  index: number;
  onClose: () => void;
  onIndexChange: (i: number) => void;
};

export function Lightbox({ images, index, onClose, onIndexChange }: LightboxProps) {
  const [scale, setScale] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const dragRef = useRef<{ x: number; y: number; ox: number; oy: number } | null>(null);

  const reset = useCallback(() => {
    setScale(1);
    setOffset({ x: 0, y: 0 });
  }, []);

  const prev = useCallback(() => {
    onIndexChange((index - 1 + images.length) % images.length);
    reset();
  }, [index, images.length, onIndexChange, reset]);

  const next = useCallback(() => {
    onIndexChange((index + 1) % images.length);
    reset();
  }, [index, images.length, onIndexChange, reset]);

  const zoomIn = () => setScale((s) => Math.min(s + 0.5, 5));
  const zoomOut = () =>
    setScale((s) => {
      const n = Math.max(s - 0.5, 1);
      if (n === 1) setOffset({ x: 0, y: 0 });
      return n;
    });

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "+" || e.key === "=") zoomIn();
      else if (e.key === "-") zoomOut();
      else if (e.key === "0") reset();
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose, prev, next, reset]);

  const onWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const delta = -e.deltaY * 0.002;
    setScale((s) => {
      const n = Math.min(5, Math.max(1, s + delta));
      if (n === 1) setOffset({ x: 0, y: 0 });
      return n;
    });
  };

  const onMouseDown = (e: React.MouseEvent) => {
    if (scale === 1) return;
    dragRef.current = { x: e.clientX, y: e.clientY, ox: offset.x, oy: offset.y };
  };
  const onMouseMove = (e: React.MouseEvent) => {
    if (!dragRef.current) return;
    setOffset({
      x: dragRef.current.ox + (e.clientX - dragRef.current.x),
      y: dragRef.current.oy + (e.clientY - dragRef.current.y),
    });
  };
  const onMouseUp = () => {
    dragRef.current = null;
  };

  const current = images[index];
  if (!current) return null;

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Top bar */}
      <div
        className="absolute top-0 left-0 right-0 flex items-center justify-between px-6 py-4 z-10"
        onClick={(e) => e.stopPropagation()}
      >
        <span className="text-white/70 text-sm tracking-wide">
          {index + 1} / {images.length}
        </span>
        <div className="flex items-center gap-2">
          <button
            onClick={zoomOut}
            aria-label="Zoom out"
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition"
          >
            <ZoomOut className="h-5 w-5" />
          </button>
          <span className="text-white/70 text-sm w-12 text-center">
            {Math.round(scale * 100)}%
          </span>
          <button
            onClick={zoomIn}
            aria-label="Zoom in"
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition"
          >
            <ZoomIn className="h-5 w-5" />
          </button>
          <button
            onClick={reset}
            aria-label="Reset zoom"
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition"
          >
            <RotateCcw className="h-5 w-5" />
          </button>
          <button
            onClick={onClose}
            aria-label="Close"
            className="ml-2 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Prev/Next */}
      {images.length > 1 && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Previous image"
            className="absolute left-4 md:left-8 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Next image"
            className="absolute right-4 md:right-8 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </>
      )}

      {/* Image */}
      <div
        className="relative w-full h-full flex items-center justify-center overflow-hidden select-none"
        onWheel={onWheel}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onClick={(e) => e.stopPropagation()}
        style={{ cursor: scale > 1 ? (dragRef.current ? "grabbing" : "grab") : "zoom-in" }}
      >
        {/\.(mp4|mov)$/i.test(current.src) ? (
          <video
            key={current.src}
            src={current.src}
            autoPlay
            loop
            muted
            playsInline
            controls
            className="max-w-[92vw] max-h-[85vh] object-contain"
          />
        ) : (
          <img
            src={current.src}
            alt={current.alt}
            draggable={false}
            onClick={() => (scale === 1 ? zoomIn() : null)}
            style={{
              transform: `translate(${offset.x}px, ${offset.y}px) scale(${scale})`,
              transition: dragRef.current ? "none" : "transform 200ms ease-out",
            }}
            className="max-w-[92vw] max-h-[85vh] object-contain"
          />
        )}
      </div>
    </div>
  );
}
