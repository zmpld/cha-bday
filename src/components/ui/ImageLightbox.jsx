import { useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";

const clamp = (n, min, max) => Math.min(max, Math.max(min, n));

export default function ImageLightbox({ isOpen, src, alt, onClose }) {
  const [zoom, setZoom] = useState(1);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) setZoom(1);
  }, [isOpen]);

  const zoomLabel = useMemo(() => {
    if (zoom <= 1) return "Zoom in";
    if (zoom < 2) return "Zoom more";
    return "Reset zoom";
  }, [zoom]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image preview"
      className="fixed inset-0 z-50"
    >
      <button
        type="button"
        aria-label="Close image preview"
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="absolute inset-0 p-4 sm:p-6 grid place-items-center">
        <div className="w-full max-w-6xl">
          <div className="flex items-center justify-end mb-3 gap-2">
            <button
              type="button"
              className="h-10 px-4 rounded-xl bg-zinc-50/10 ring-1 ring-inset ring-zinc-50/10 hover:bg-zinc-50/15 transition-colors"
              onClick={() => setZoom((z) => (z >= 2 ? 1 : clamp(z + 0.5, 1, 2)))}
            >
              {zoomLabel}
            </button>
            <button
              type="button"
              className="h-10 px-4 rounded-xl bg-zinc-50/10 ring-1 ring-inset ring-zinc-50/10 hover:bg-zinc-50/15 transition-colors"
              onClick={onClose}
            >
              Close
            </button>
          </div>

          <div className="rounded-2xl overflow-hidden ring-1 ring-inset ring-zinc-50/10 bg-zinc-950/40">
            <button
              type="button"
              className="block w-full"
              aria-label="Toggle zoom"
              onClick={() => setZoom((z) => (z === 1 ? 1.5 : z < 2 ? 2 : 1))}
            >
              <img
                src={src}
                alt={alt}
                className="w-full max-h-[80vh] object-contain select-none transition-transform duration-200"
                style={{ transform: `scale(${zoom})` }}
                draggable={false}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

ImageLightbox.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  src: PropTypes.string,
  alt: PropTypes.string,
  onClose: PropTypes.func.isRequired,
};

