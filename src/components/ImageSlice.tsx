import React, { useEffect, useRef, useState } from 'react';

interface ImageSliceProps {
  sx: number;
  sy: number;
  sw: number;
  sh: number;
  alt: string;
  className?: string;
  containerClassName?: string;
  hoverZoom?: boolean;
}

const FLYER_SRC = '/assets/aistudio/pagina_fly_5513d39e.jpg';
const ORIGINAL_WIDTH = 736;
const ORIGINAL_HEIGHT = 1104;

export const ImageSlice: React.FC<ImageSliceProps> = ({
  sx,
  sy,
  sw,
  sh,
  alt,
  className = '',
  containerClassName = '',
  hoverZoom = false,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [dataUrl, setDataUrl] = useState<string | null>(null);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = FLYER_SRC;

    img.onload = () => {
      if (!isMounted) return;
      try {
        const canvas = document.createElement('canvas');
        canvas.width = sw * 2; // retina 2x
        canvas.height = sh * 2;
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.imageSmoothingEnabled = true;
          ctx.imageSmoothingQuality = 'high';
          ctx.drawImage(img, sx, sy, sw, sh, 0, 0, sw * 2, sh * 2);
          const url = canvas.toDataURL('image/png');
          setDataUrl(url);
        }
      } catch (err) {
        console.warn('Canvas slice fallback', err);
        setHasError(true);
      }
    };

    img.onerror = () => {
      if (isMounted) setHasError(true);
    };

    return () => {
      isMounted = false;
    };
  }, [sx, sy, sw, sh]);

  // CSS exact slice percentages if canvas is loading or as instant fallback
  const widthPct = (ORIGINAL_WIDTH / sw) * 100;
  const leftPct = -(sx / sw) * 100;
  const topPct = -(sy / sh) * 100;

  return (
    <div
      className={`relative overflow-hidden flex items-center justify-center select-none ${containerClassName}`}
      style={{ aspectRatio: `${sw}/${sh}` }}
    >
      {dataUrl ? (
        <img
          src={dataUrl}
          alt={alt}
          className={`w-full h-full object-contain pointer-events-none transition-transform duration-500 ease-out ${
            hoverZoom ? 'group-hover:scale-105' : ''
          } ${className}`}
          loading="eager"
        />
      ) : !hasError ? (
        <div className="relative w-full h-full overflow-hidden">
          <img
            src={FLYER_SRC}
            alt={alt}
            className={`absolute max-w-none pointer-events-none transition-transform duration-500 ease-out ${
              hoverZoom ? 'group-hover:scale-105' : ''
            } ${className}`}
            style={{
              width: `${widthPct}%`,
              left: `${leftPct}%`,
              top: `${topPct}%`,
            }}
          />
        </div>
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center bg-neutral-900 text-neutral-400 p-4 text-center">
          <span className="text-xs uppercase tracking-wider">{alt}</span>
        </div>
      )}
    </div>
  );
};
