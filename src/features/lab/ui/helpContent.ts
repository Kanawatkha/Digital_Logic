import type { IconName } from '@/components/ui/Icon';

/** What stands at the start of a row of the help: an icon of the page, a short text, or the dots of the wire colors. */
export type HelpLead = { icon: IconName } | { text: string; dark?: boolean } | { dots: true };

export type HelpTool = { lead: HelpLead; name: string; text: string };
export type HelpToolGroup = { title: string; tools: HelpTool[] };

/** The buttons of the lab page, in the order a student meets them, one short line each. */
export const HELP_TOOLS: HelpToolGroup[] = [
  {
    title: 'สายและวงจร (แถบซ้ายบน)',
    tools: [
      {
        lead: { dots: true },
        name: 'สีสาย',
        text: 'เลือกสีของสายเส้นต่อไป ถ้าเลือกสายอยู่ จะเปลี่ยนสีสายเส้นนั้น',
      },
      {
        lead: { icon: 'undo' },
        name: 'ย้อนกลับ',
        text: 'ยกเลิกการต่อสาย วางชิป หรือลบ ครั้งล่าสุด',
      },
      { lead: { icon: 'redo' }, name: 'ทำซ้ำ', text: 'ทำสิ่งที่เพิ่งย้อนกลับไปอีกครั้ง' },
      {
        lead: { icon: 'wand' },
        name: 'จัดสายอัตโนมัติ',
        text: 'ดัดสายทุกเส้นไม่ให้ทับกันหรือทับชิป',
      },
      {
        lead: { icon: 'palette' },
        name: 'จัดสีสายอัตโนมัติ',
        text: 'ทาสีตามสิ่งที่สายพา: GND ดำ, +5V แดง, สัญญาณอื่นเส้นละสี',
      },
      { lead: { icon: 'straight' }, name: 'ทำสายให้ตรง', text: 'ทำให้สายที่เลือกอยู่เลิกโค้ง' },
      { lead: { icon: 'trash' }, name: 'ลบสาย', text: 'ลบสายหรือชิปที่เลือกอยู่' },
      { lead: { icon: 'reset' }, name: 'ล้างวงจร', text: 'เอาสายและชิปออกทั้งหมด (ย้อนกลับได้)' },
    ],
  },
  {
    title: 'ชิปและแผงต่างๆ',
    tools: [
      {
        lead: { text: '7404', dark: true },
        name: 'ชิป IC',
        text: '7404 NOT, 7408 AND, 7432 OR, 7400 NAND, 7402 NOR ลากไปวางบนเบรดบอร์ด หรือแตะเพื่อวางกลางจอ',
      },
      {
        lead: { icon: 'chip' },
        name: 'ไดอะแกรมขา IC',
        text: 'ดูว่าขาไหนของชิปคือไฟ อินพุต หรือเอาต์พุต',
      },
      {
        lead: { icon: 'table' },
        name: 'ผลลัพธ์วงจร',
        text: 'ตารางความจริง วงจร และสมการของสิ่งที่ต่อไว้ เลือก LED ที่จะดูได้',
      },
      {
        lead: { icon: 'tasks' },
        name: 'โจทย์',
        text: 'โจทย์ฝึกห้าหมวด ดูวิธีทำ (พีชคณิตหรือ K-map) กับเฉลย แล้ววางเฉลยลงบอร์ดได้',
      },
      { lead: { icon: 'help' }, name: 'วิธีใช้และคีย์ลัด', text: 'หน้านี้' },
    ],
  },
  {
    title: 'ทดสอบวงจรและมุมมอง',
    tools: [
      {
        lead: { text: '1–8' },
        name: 'สวิตช์ 1–8',
        text: 'อินพุตของวงจร แตะเพื่อสลับ 0 กับ 1 (ไม่นับเป็นการแก้ที่ย้อนกลับได้)',
      },
      { lead: { text: 'LED' }, name: 'LED 16 ดวง', text: 'เอาต์พุต ติดคือ 1 ดับคือ 0' },
      {
        lead: { icon: 'alert' },
        name: 'คำเตือน',
        text: 'ขึ้นเมื่อวงจรมีปัญหา เช่น +5V ต่อ GND ชิปไม่มีไฟ หรืออินพุตลอย กดเพื่อดูรายการ',
      },
      {
        lead: { icon: 'play' },
        name: 'จับเวลา 15 นาที',
        text: 'เริ่มหรือหยุดจับเวลาสอบ ปุ่มข้างๆ เริ่มใหม่ ตัวเลขเป็นสีแดงในนาทีสุดท้าย',
      },
      {
        lead: { text: '100%' },
        name: 'ซูม',
        text: '− และ + ย่อขยาย กดเลขเพื่อดูขนาดจริง ปุ่มกรอบมุมให้พอดีจอ',
      },
      {
        lead: { icon: 'sliders' },
        name: 'แสดงหรือซ่อนเครื่องมือ',
        text: 'พับแถวเครื่องมือให้กระดานโล่ง (บนมือถือเริ่มต้นพับไว้)',
      },
      { lead: { icon: 'share' }, name: 'แชร์', text: 'ลิงก์และ QR ของเว็บไซต์ (แถบบนสุด)' },
    ],
  },
];

/** How the board answers a finger or a mouse. */
export const HELP_BOARD: { name: string; text: string }[] = [
  {
    name: 'ต่อสาย',
    text: 'ลากจากรูหรือซ็อกเก็ตไปอีกจุด จุดที่ใกล้ที่สุดจะสว่างขึ้นให้ปล่อย (จุดหนึ่งต่อได้เส้นเดียว)',
  },
  {
    name: 'แก้สาย',
    text: 'แตะสายเพื่อเลือก ลากกลางสายเพื่อดัดโค้ง ลากปลายสายเพื่อย้ายไปจุดอื่น',
  },
  {
    name: 'วางและย้ายชิป',
    text: 'ลากชิปจากถาดไปวางบนเบรดบอร์ด ลากชิปที่วางแล้วเพื่อย้าย ลากออกนอกเบรดบอร์ด (ขึ้นกรอบแดง) เพื่อเอาออก',
  },
  { name: 'สลับสวิตช์', text: 'แตะปุ่มสีแดงของสวิตช์ ที่ซูมเท่าไรก็แตะได้' },
  {
    name: 'เลื่อนและซูม',
    text: 'ลากที่ว่างเพื่อเลื่อน ล้อเมาส์หรือหยิบสองนิ้วเพื่อซูม ซูมเข้าก่อนเมื่อต้องต่อสายที่รูเล็ก',
  },
  {
    name: 'ต่อสายด้วยคีย์บอร์ด',
    text: 'กด Enter ที่กระดาน แล้วใช้ลูกศรเลื่อนตัวชี้ (Shift เลื่อนไกล) Enter เริ่มหรือจบสาย Esc ออก',
  },
  { name: 'บันทึกอัตโนมัติ', text: 'วงจรที่ต่อไว้ถูกเก็บในเบราว์เซอร์ เปิดใหม่ก็ยังอยู่' },
];

export type HelpKeyRow = { keys: string[][]; text: string };
export type HelpKeyGroup = { title: string; rows: HelpKeyRow[] };

/** The shortcuts: each row is the ways to press it (alternatives) and what it does. */
export const HELP_KEYS: HelpKeyGroup[] = [
  {
    title: 'แก้วงจร',
    rows: [
      { keys: [['Ctrl', 'Z']], text: 'ย้อนกลับ' },
      {
        keys: [
          ['Ctrl', 'Shift', 'Z'],
          ['Ctrl', 'Y'],
        ],
        text: 'ทำซ้ำ',
      },
      { keys: [['Delete'], ['Backspace']], text: 'ลบสายหรือชิปที่เลือก' },
      { keys: [['Esc']], text: 'ยกเลิกสายที่ลากอยู่ หรือเลิกเลือก' },
      { keys: [['A']], text: 'จัดสายอัตโนมัติ' },
      { keys: [['1 – 8']], text: 'สลับสวิตช์ 1 ถึง 8' },
    ],
  },
  {
    title: 'เปิดแผง',
    rows: [
      { keys: [['T']], text: 'โจทย์' },
      { keys: [['R']], text: 'ผลลัพธ์วงจร' },
      { keys: [['P']], text: 'ไดอะแกรมขา IC' },
      { keys: [['H'], ['?']], text: 'หน้านี้' },
      { keys: [['Esc']], text: 'ปิดแผงที่เปิดอยู่' },
    ],
  },
  {
    title: 'มุมมองกระดาน (เมื่อโฟกัสอยู่ที่กระดาน)',
    rows: [
      { keys: [['+'], ['-']], text: 'ซูมเข้า ซูมออก' },
      { keys: [['0']], text: 'พอดีจอ' },
      { keys: [['Shift', '0']], text: 'ขนาดจริง 100%' },
      { keys: [['←'], ['→'], ['↑'], ['↓']], text: 'เลื่อนมุมมอง' },
      { keys: [['Enter']], text: 'เริ่มโหมดต่อสายด้วยคีย์บอร์ด' },
    ],
  },
  {
    title: 'ในแผงโจทย์ (เมื่อเปิดข้อใดข้อหนึ่ง)',
    rows: [
      { keys: [['[']], text: 'ข้อก่อนหน้า' },
      { keys: [[']']], text: 'ข้อถัดไป' },
      { keys: [['S']], text: 'แสดงหรือซ่อนเฉลย' },
      { keys: [['←'], ['→']], text: 'สลับแท็บพีชคณิตและ K-map' },
    ],
  },
];
