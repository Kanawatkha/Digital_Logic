/** Single place for site-wide constants. vite.config.ts reads REPO_NAME too. */
export const REPO_NAME = 'Digital_Logic';
export const SITE_NAME = 'Digital Logic Notes';

export const CHAPTER_NUMBERS = [1, 2, 3, 4, 5] as const;
export type ChapterNumber = (typeof CHAPTER_NUMBERS)[number];

export type NavItem = {
  to: string;
  label: string;
  shortLabel?: string;
};

/** Thai labels shown to students, see UI-SPEC.md section 1. */
export const NAV_ITEMS: readonly NavItem[] = [
  ...CHAPTER_NUMBERS.map((n) => ({
    to: `/chapter/${n}`,
    label: `บทที่ ${n}`,
    shortLabel: `บท ${n}`,
  })),
  { to: '/exam', label: 'ข้อสอบกลางภาค' },
  { to: '/formulas', label: 'สรุปสูตรรวม' },
];

/**
 * The practice exams behind the "ข้อสอบกลางภาค" tab, one file each (worked-solutions/06 to /09). Every
 * file holds the questions with their solutions; the exam pages can hide the solutions.
 */
export const EXAM_SETS = [
  { set: '1', to: '/exam', label: 'ชุดที่ 1', chapter: '06' },
  { set: '2', to: '/exam/2', label: 'ชุดที่ 2', chapter: '07' },
  { set: '3', to: '/exam/3', label: 'ชุดที่ 3', chapter: '08' },
  { set: '4', to: '/exam/4', label: 'ชุดที่ 4', chapter: '09' },
] as const;

export const HOME_ITEM: NavItem = { to: '/', label: 'หน้าหลัก' };

/** Other student-facing strings, see UI-SPEC.md section 1. */
export const UI_TEXT = {
  loading: 'กำลังโหลด...',
  loadError: 'โหลดเนื้อหาไม่สำเร็จ ลองอีกครั้ง',
  retry: 'ลองอีกครั้ง',
  notFound: 'ไม่พบหน้านี้',
  backHome: 'กลับหน้าหลัก',
  menuOpen: 'เมนู',
  menuClose: 'ปิดเมนู',
  comingSoon: 'กำลังจัดทำ',
  updateReady: 'มีเวอร์ชันใหม่ พร้อมใช้งาน',
  updateAction: 'โหลดใหม่',
  solutions: 'แสดงเฉลย',
  offlineReady: 'ใช้งานออฟไลน์ได้แล้ว',
  dismiss: 'ปิด',
  share: 'แชร์เว็บไซต์',
  shareHint: 'สแกน QR หรือคัดลอกลิงก์',
  copyLink: 'คัดลอกลิงก์',
  linkCopied: 'คัดลอกลิงก์แล้ว',
  tocToggle: 'สารบัญ',
} as const;

export function isChapterNumber(value: number): value is ChapterNumber {
  return (CHAPTER_NUMBERS as readonly number[]).includes(value);
}
