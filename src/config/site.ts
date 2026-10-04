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
