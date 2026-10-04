import { PageContainer, PageHeading } from '@/components/layout/PageContainer';
import { ButtonLink } from '@/components/ui/Button';
import { UI_TEXT } from '@/config/site';
import { usePageTitle } from '@/hooks/usePageTitle';

export default function NotFoundPage() {
  usePageTitle(UI_TEXT.notFound);
  return (
    <PageContainer>
      <PageHeading title={UI_TEXT.notFound} />
      <ButtonLink to="/">{UI_TEXT.backHome}</ButtonLink>
    </PageContainer>
  );
}
