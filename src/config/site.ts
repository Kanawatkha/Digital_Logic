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
  { to: '/lab', label: 'แล็บ' },
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
  labTitle: 'แล็บ',
  labBoard: 'บอร์ดทดลอง NX-4i',
  labHint:
    'ลากจากรูหรือซ็อกเก็ตไปอีกจุดเพื่อต่อสาย ลากที่ว่างเพื่อเลื่อน ล้อเมาส์หรือหยิบสองนิ้วเพื่อซูม ซูมเข้าก่อนเพื่อต่อสาย หรือกด Enter เพื่อต่อสายด้วยคีย์บอร์ด',
  labZoomIn: 'ซูมเข้า',
  labZoomOut: 'ซูมออก',
  labFit: 'พอดีจอ',
  labActual: 'ขนาดจริง 100%',
  labWireColor: 'สีสาย',
  labWireColors: {
    red: 'แดง',
    black: 'ดำ',
    blue: 'น้ำเงิน',
    green: 'เขียว',
    yellow: 'เหลือง',
    orange: 'ส้ม',
    white: 'ขาว',
    purple: 'ม่วง',
  },
  labUndo: 'ย้อนกลับ',
  labRedo: 'ทำซ้ำ',
  labDeleteWire: 'ลบสาย',
  labStraighten: 'ทำสายให้ตรง',
  labArrange: 'จัดสายอัตโนมัติ',
  labPaint: 'จัดสีสายอัตโนมัติ',
  labClear: 'ล้างวงจร',
  labTray: 'ชิป IC',
  labTrayHint: 'ลากไปวางบนเบรดบอร์ด หรือแตะเพื่อวาง',
  labTrayPick: 'เลือกชิป IC',
  labDiagrams: 'ไดอะแกรมขา IC',
  labDiagramsHint: 'แตะหรือชี้ที่ขาหรือเกตเพื่อดูหน้าที่ของมัน',
  labDiagramsOnBoard: 'อยู่บนบอร์ด',
  labDiagramPin: 'ขา',
  labDiagramGate: 'เกต',
  labDiagramInput: 'อินพุต',
  labDiagramOutput: 'เอาต์พุต',
  labDiagramVcc: 'VCC ไฟเลี้ยง +5V',
  labDiagramGnd: 'GND กราวด์ 0V',
  labDiagramInputPins: 'อินพุตขา',
  labDiagramOutputPin: 'เอาต์พุตขา',
  labResults: 'ผลลัพธ์วงจร',
  labResultsHint: 'ตารางความจริง วงจร และสมการ ของวงจรที่ต่อไว้ ตามสายที่ต่อเข้า LED',
  labResultsTabs: 'มุมมองผลลัพธ์',
  labResultsTable: 'ตารางความจริง',
  labResultsCircuit: 'วงจร',
  labResultsEquations: 'สมการ',
  labResultsOutputs: 'LED เอาต์พุต',
  labResultsEmpty:
    'ยังไม่มีสายต่อเข้า LED ต่อสายจากเกต (หรือสวิตช์) ไปที่ซ็อกเก็ต LED บน Logic Monitor แล้วดูผลที่นี่',
  labResultsNoOutputs: 'ไม่ได้เลือก LED ใดเลย เลือกอย่างน้อยหนึ่งตัว',
  labResultsFeedback:
    'วงจรนี้มีลูปป้อนกลับ (เอาต์พุตวนกลับเข้าอินพุต) ผลขึ้นกับสถานะก่อนหน้า จึงไม่สร้างตารางความจริงและสมการ ดูวงจรได้ในแท็บวงจร',
  labResultsShort: 'วงจรลัดวงจร (+5V ต่อกับ GND) ผลที่ได้ใช้ไม่ได้',
  labResultsConflict: 'มีเอาต์พุตชนกันบนสายเดียวกัน ผลอาจไม่ถูกต้อง',
  labResultsUnpowered: 'ไม่มีไฟ ผลจึงอาจไม่ถูกต้อง ชิป',
  labResultsFloating: 'มีอินพุตลอยอยู่ (อ่านเป็น 1)',
  labResultsInput: 'อินพุต',
  labResultsNoInputs: 'ไม่มีสวิตช์เป็นอินพุต มีแถวเดียว',
  labResultsNow: 'แถวที่สวิตช์อยู่ตอนนี้',
  labResultsCopy: 'คัดลอกตาราง',
  labResultsCopied: 'คัดลอกแล้ว',
  labResultsWired: 'ตามที่ต่อ',
  labResultsSimplified: 'ลดรูปแล้ว',
  labResultsNoWired: 'เขียนจากเกตไม่ได้ (ยาวเกินไป)',
  labResultsZoomIn: 'ขยายวงจร',
  labResultsZoomOut: 'ย่อวงจร',
  labResultsFit: 'พอดีหน้าจอ',
  labResultsLegend: 'เส้นสีส้ม = ค่า 1 ตอนนี้ เส้นดำ = ค่า 0',
  labResultsSwitch: 'สวิตช์',
  labResultsGround: 'GND',
  labResultsSupply: '+5V',
  labResultsLoose: 'อินพุตลอย',
  labResultsNoPower: 'ไม่มีไฟ',
  labDeleteChip: 'ลบ',
  labIcNoPower: 'ไม่มีไฟ',
  labIcFloating: 'อินพุตลอย',
  labIcUnstable: 'ไม่นิ่ง',
  labBreadboard: 'เบรดบอร์ด',
  labWarnConflict: 'มีเอาต์พุตสองตัวบนสายเดียวกันให้ค่าต่างกัน',
  labWarnUnpowered: 'ไม่มีไฟ ต่อขา 14 เข้า +5V และขา 7 เข้า GND',
  labWarnFloating: 'อินพุตลอย (อ่านเป็น 1) ที่ขา',
  labWarnUnstable: 'วงจรไม่นิ่ง (ฟีดแบ็กที่ไม่เสถียร)',
  labWarnings: 'คำเตือนของวงจร',
  labKbStatus: 'โหมดคีย์บอร์ด',
  labSummary: 'สรุปวงจร',
  labToolsShow: 'แสดงเครื่องมือ',
  labToolsHide: 'ซ่อนเครื่องมือ',
  labToolbar: 'เครื่องมือสาย',
  labIo: 'สวิตช์และ LED',
  labSwitches: 'สวิตช์',
  labSwitch: 'สวิตช์',
  labLeds: 'LED',
  labLedOn: 'ติด',
  labLedOff: 'ดับ',
  labPtColumn: 'คอลัมน์',
  labPtRow: 'แถว',
  labPtRail: 'รางไฟ',
  labPtRails: { top1: 'บน 1', top2: 'บน 2', bot1: 'ล่าง 1', bot2: 'ล่าง 2' },
  labPtHole: 'รู',
  labPtSupply: 'ไฟ',
  labPtSocket: 'ช่อง',
  labKbOn:
    'โหมดคีย์บอร์ด: ลูกศรเลื่อนตัวชี้ (Shift เลื่อนไกล) Enter เริ่มหรือจบสาย Esc ออก ตัวชี้อยู่ที่',
  labKbOff: 'ออกจากโหมดคีย์บอร์ด',
  labKbStart: 'เริ่มสายจาก',
  labKbAdded: 'ต่อสายแล้ว',
  labKbBusy: 'จุดนี้มีสายหรือขาชิปอยู่แล้ว',
  labKbCancel: 'ยกเลิกสายที่เริ่มไว้',
  labKbSelected: 'เลือก',
  labKbWire: 'สาย',
  labKbChip: 'ชิป',
  labSummaryWires: 'สาย',
  labSummaryChips: 'ชิป',
  labSummaryNone: 'ยังไม่มีสายหรือชิป',
  labShort: 'ลัดวงจร: +5V ต่อกับ GND',
  labUnsupportedSupply: 'ยังไม่รองรับในตัวจำลอง ใช้ได้เฉพาะ +5V และ GND',
} as const;

export function isChapterNumber(value: number): value is ChapterNumber {
  return (CHAPTER_NUMBERS as readonly number[]).includes(value);
}
