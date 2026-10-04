import { PageContainer, PageHeading } from '@/components/layout/PageContainer';
import { usePageTitle } from '@/hooks/usePageTitle';
import { HomeDiagram } from '@/features/home-diagram/HomeDiagram';

export default function HomePage() {
  usePageTitle();
  return (
    <PageContainer>
      <PageHeading
        title="Midterm"
        lead="แตะ Midterm เพื่อเปิดบทที่ 1-5 แล้วเลือกหัวข้อไปเรื่อย ๆ เพื่ออ่านสูตร คำอธิบาย และตัวอย่าง วิชา 1322201 การออกแบบดิจิทัลลอจิก"
      />
      <HomeDiagram />
    </PageContainer>
  );
}
