import { ScrollArea } from '@/components/content/ScrollArea';

/**
 * Inline SVG figure. The markup is validated at build time (CONTENT-SCHEMA.md section 6) and uses
 * currentColor, so it follows the text color. CSS keeps it inside its container.
 */
export function FigureBlock({ svg }: { svg: string }) {
  return (
    <figure className="py-2 text-ink">
      <ScrollArea
        className="flex justify-center [&_svg]:h-auto [&_svg]:max-w-full"
        html={svg}
        centered
      />
    </figure>
  );
}
