import {
  CHAPTER_NUMBERS,
  EXAM_SETS,
  FINAL_CHAPTERS,
  FINAL_EXAM_PROBLEMS,
  TERMS,
  chapterPath,
  finalChapterPath,
  finalExamPath,
} from '@/config/site';

export type SectionId = 'chapters' | 'exam' | 'formulas';

/**
 * A part of the site that the header opens with one tab and that has more than one page: the chapters, the
 * exams and the formula sheets. The site remembers the page last read in each of them (see `placeMemory`).
 */
export type Section = {
  id: SectionId;
  /** The address of the tab in the header. */
  root: string;
  /** The main page of the section: where the tab leads when the section is already open. */
  home: string;
  /** Every page that can be remembered (so a stale address is never gone back to). */
  pages: readonly string[];
};

export const SECTIONS: readonly Section[] = [
  {
    id: 'chapters',
    root: '/chapters',
    home: chapterPath(1),
    pages: [
      ...CHAPTER_NUMBERS.map(chapterPath),
      ...FINAL_CHAPTERS.map((c) => finalChapterPath(c.n)),
    ],
  },
  {
    id: 'exam',
    root: '/exam',
    home: EXAM_SETS[0].to,
    pages: [...EXAM_SETS.map((s) => s.to), ...FINAL_EXAM_PROBLEMS.map((p) => finalExamPath(p.n))],
  },
  {
    id: 'formulas',
    root: '/formulas',
    home: `/formulas/${TERMS[0].id}`,
    pages: TERMS.map((t) => `/formulas/${t.id}`),
  },
];

/** The section that a header tab opens, if it is one of them. */
export const sectionOfRoot = (to: string): Section | undefined =>
  SECTIONS.find((s) => s.root === to);

/** The section that an address is in (the address need not be a page that exists). */
export const sectionOfPath = (pathname: string): Section | undefined =>
  SECTIONS.find((s) => pathname === s.root || pathname.startsWith(`${s.root}/`));
