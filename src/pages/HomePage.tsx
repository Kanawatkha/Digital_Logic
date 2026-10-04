import { usePageTitle } from '@/hooks/usePageTitle';
import { HomeDiagram } from '@/features/home-diagram/HomeDiagram';

/** Full width on purpose: the diagram runs past the content column and scrolls sideways. */
export default function HomePage() {
  usePageTitle();
  return (
    <div className="w-full py-8 md:py-12">
      <h1 className="sr-only">Midterm</h1>
      <HomeDiagram />
    </div>
  );
}
