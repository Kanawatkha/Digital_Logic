import { useMemo } from 'react';
import { qrMatrix } from '@/lib/qr';

const QUIET_ZONE = 4;

type QrCodeProps = { value: string; label: string; className?: string };

/** QR code as one SVG path: dark modules on white with the 4 module quiet zone readers expect. */
export function QrCode({ value, label, className }: QrCodeProps) {
  const { size, path } = useMemo(() => {
    const matrix = qrMatrix(value);
    const parts: string[] = [];
    matrix.forEach((row, y) =>
      row.forEach((dark, x) => {
        if (dark) parts.push(`M${x + QUIET_ZONE} ${y + QUIET_ZONE}h1v1h-1z`);
      }),
    );
    return { size: matrix.length + QUIET_ZONE * 2, path: parts.join('') };
  }, [value]);

  return (
    <svg
      viewBox={`0 0 ${size} ${size}`}
      role="img"
      aria-label={label}
      shapeRendering="crispEdges"
      className={className}
    >
      <rect width={size} height={size} fill="#ffffff" />
      <path d={path} fill="#141413" />
    </svg>
  );
}
