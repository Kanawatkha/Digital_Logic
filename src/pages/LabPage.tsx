import { UI_TEXT } from '@/config/site';
import { LabBoard } from '@/features/lab/LabBoard';
import { usePageTitle } from '@/hooks/usePageTitle';

/** Lab: the NX-4i experiment board. */
export default function LabPage() {
  usePageTitle(UI_TEXT.labTitle);
  return (
    <>
      <h1 className="sr-only">{UI_TEXT.labBoard}</h1>
      <LabBoard />
    </>
  );
}
