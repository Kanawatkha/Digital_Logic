import { UI_TEXT } from '@/config/site';
import type { LabLevel } from '@/content/types';

const LEVEL_TEXT: Record<LabLevel, string> = {
  easy: UI_TEXT.labTaskLevelEasy,
  medium: UI_TEXT.labTaskLevelMedium,
  hard: UI_TEXT.labTaskLevelHard,
};

/** The level of a task as a small pill, for the list and for the task. */
export function LevelChip({ level }: { level: LabLevel }) {
  return (
    <span className="type-caption shrink-0 rounded-full bg-surface-card px-2 py-0.5 text-body">
      {LEVEL_TEXT[level]}
    </span>
  );
}
