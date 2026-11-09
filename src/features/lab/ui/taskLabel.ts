import { UI_TEXT } from '@/config/site';

/** "01.3" as the student reads it: "หมวด 1 ข้อ 3" (an id of another shape is shown as it is). */
export function taskLabel(id: string): string {
  const m = /^(\d+)\.(\d+)$/.exec(id);
  return m
    ? `${UI_TEXT.labTaskGroup} ${Number(m[1])} ${UI_TEXT.labTaskNumber} ${Number(m[2])}`
    : id;
}
