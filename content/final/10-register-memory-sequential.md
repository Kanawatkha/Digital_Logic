# บทที่ 10 รีจิสเตอร์ หน่วยความจำ และวงจรซีเควนเชียล

---

## 1. รีจิสเตอร์ (Register)

### 1.1 รีจิสเตอร์คืออะไร

**รีจิสเตอร์ (Register)** คือวงจรที่ประยุกต์ใช้ฟลิป-ฟลอป (Flip-Flop) หรือวงจรความจำ ใช้สำหรับ **จำหรือเก็บรักษาข้อมูลไบนารี (0 หรือ 1)** โดยฟลิป-ฟลอป 1 ตัวเก็บค่าได้ 1 บิต เมื่อต้องการเก็บข้อมูลใด ก็ใส่ข้อมูลนั้นเข้าที่อินพุตของวงจรรีจิสเตอร์ ข้อมูลนั้นจะถูกนำไปเก็บไว้ (จำ) ที่เอาต์พุตของวงจร

$$\text{รีจิสเตอร์เก็บข้อมูล } n \text{ บิต} \;\Rightarrow\; \text{ใช้ฟลิป-ฟลอป } n \text{ ตัว}$$

ตัวอย่างเช่น รีจิสเตอร์ภายในคอมพิวเตอร์ที่เก็บข้อมูลได้ 16 บิต ต้องใช้ฟลิป-ฟลอป 16 ตัว

**ชนิดของรีจิสเตอร์** แบ่งเป็น 4 กลุ่ม ตามลักษณะการนำข้อมูลเข้าและออกจากรีจิสเตอร์

| กลุ่ม | ชื่อ | ข้อมูลเข้า | ข้อมูลออก |
|:-:|:--|:--|:--|
| 1 | อนุกรมเข้า-อนุกรมออก Serial In-Serial Out (SISO) | อนุกรม (ทีละบิต) | อนุกรม (ทีละบิต) |
| 2 | อนุกรมเข้า-ขนานออก Serial In-Parallel Out (SIPO) | อนุกรม (ทีละบิต) | ขนาน (พร้อมกันทุกบิต) |
| 3 | ขนานเข้า-อนุกรมออก Parallel In-Serial Out (PISO) | ขนาน (พร้อมกันทุกบิต) | อนุกรม (ทีละบิต) |
| 4 | ขนานเข้า-ขนานออก Parallel In-Parallel Out (PIPO) | ขนาน (พร้อมกันทุกบิต) | ขนาน (พร้อมกันทุกบิต) |

### ตัวอย่างที่ 1  รีจิสเตอร์ที่เก็บข้อมูลได้ 8 บิต, 16 บิต และ 32 บิต ต้องใช้ฟลิป-ฟลอปกี่ตัว และถ้ามีฟลิป-ฟลอป 12 ตัว เก็บข้อมูลได้กี่บิต

$\mathbf{Sol}^{n}$

ฟลิป-ฟลอป 1 ตัวเก็บ 1 บิต จึงใช้ฟลิป-ฟลอปเท่ากับจำนวนบิต

- 8 บิต ใช้ 8 ตัว
- 16 บิต ใช้ 16 ตัว
- 32 บิต ใช้ 32 ตัว
- ฟลิป-ฟลอป 12 ตัว เก็บได้ 12 บิต (เก็บค่าได้ $2^{12} = 4096$ ค่า)

$\mathbf{Ans}\quad 8,\ 16,\ 32 \text{ ตัว ; } 12 \text{ ตัวเก็บได้ } 12 \text{ บิต}$

### 1.2 ชิฟรีจิสเตอร์ (Shift Register)

**ชิฟรีจิสเตอร์ (Shift Register)** คือรีจิสเตอร์ที่นำข้อมูลเข้าไปเก็บหรือนำออกมาใช้อย่างอนุกรม (ทีละบิต) โดยอาจนำเข้าหรือออกทางซ้ายหรือทางขวาของรีจิสเตอร์ก็ได้ ทุกครั้งที่มีสัญญาณนาฬิกาเข้ามา ข้อมูลจะเลื่อนไป 1 บิต

- **Shift Right Register** : นำข้อมูลเข้าทางซ้าย ออกทางขวา โดยขยับไปทางขวาเรื่อย ๆ จนหมด
- **Shift Left Register** : นำข้อมูลเข้าทางขวา ออกทางซ้าย โดยขยับไปทางซ้ายเรื่อย ๆ จนหมด

**แบบของรีจิสเตอร์ตามรูป** (a) อนุกรมเข้า เลื่อนขวา อนุกรมออก (b) อนุกรมเข้า เลื่อนซ้าย อนุกรมออก (c) ขนานเข้า-อนุกรมออก (d) อนุกรมเข้า-ขนานออก (e) ขนานเข้า-ขนานออก (f) Rotate right (g) Rotate left

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="480" height="140" viewBox="0 0 480 140" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<rect x="120" y="70" width="192" height="40" rx="0"/>
<line x1="168" y1="70" x2="168" y2="110"/>
<line x1="216" y1="70" x2="216" y2="110"/>
<line x1="264" y1="70" x2="264" y2="110"/>
<line x1="50" y1="90" x2="120" y2="90"/>
<polygon points="120,90 111,94 111,86" fill="currentColor"/>
<line x1="312" y1="90" x2="382" y2="90"/>
<polygon points="382,90 373,94 373,86" fill="currentColor"/>
<line x1="138" y1="90" x2="176" y2="90"/>
<polygon points="176,90 167,94 167,86" fill="currentColor"/>
<line x1="186" y1="90" x2="224" y2="90"/>
<polygon points="224,90 215,94 215,86" fill="currentColor"/>
<line x1="234" y1="90" x2="272" y2="90"/>
<polygon points="272,90 263,94 263,86" fill="currentColor"/>
</g>
<text x="46" y="96" text-anchor="end" font-size="15">Data in</text>
<text x="388" y="96" text-anchor="start" font-size="15">Data out</text>
</g>
</svg>
</div>

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="500" height="140" viewBox="0 0 500 140" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<rect x="120" y="70" width="192" height="40" rx="0"/>
<line x1="168" y1="70" x2="168" y2="110"/>
<line x1="216" y1="70" x2="216" y2="110"/>
<line x1="264" y1="70" x2="264" y2="110"/>
<line x1="382" y1="90" x2="312" y2="90"/>
<polygon points="312,90 321,86 321,94" fill="currentColor"/>
<line x1="120" y1="90" x2="50" y2="90"/>
<polygon points="50,90 59,86 59,94" fill="currentColor"/>
<line x1="198" y1="90" x2="160" y2="90"/>
<polygon points="160,90 169,86 169,94" fill="currentColor"/>
<line x1="246" y1="90" x2="208" y2="90"/>
<polygon points="208,90 217,86 217,94" fill="currentColor"/>
<line x1="294" y1="90" x2="256" y2="90"/>
<polygon points="256,90 265,86 265,94" fill="currentColor"/>
</g>
<text x="46" y="96" text-anchor="end" font-size="15">Data out</text>
<text x="388" y="96" text-anchor="start" font-size="15">Data in</text>
</g>
</svg>
</div>

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="480" height="180" viewBox="0 0 480 180" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,40)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<rect x="120" y="70" width="192" height="40" rx="0"/>
<line x1="168" y1="70" x2="168" y2="110"/>
<line x1="216" y1="70" x2="216" y2="110"/>
<line x1="264" y1="70" x2="264" y2="110"/>
<line x1="144" y1="20" x2="144" y2="70"/>
<polygon points="144,70 140,61 148,61" fill="currentColor"/>
<line x1="192" y1="20" x2="192" y2="70"/>
<polygon points="192,70 188,61 196,61" fill="currentColor"/>
<line x1="240" y1="20" x2="240" y2="70"/>
<polygon points="240,70 236,61 244,61" fill="currentColor"/>
<line x1="288" y1="20" x2="288" y2="70"/>
<polygon points="288,70 284,61 292,61" fill="currentColor"/>
<line x1="138" y1="90" x2="176" y2="90"/>
<polygon points="176,90 167,94 167,86" fill="currentColor"/>
<line x1="186" y1="90" x2="224" y2="90"/>
<polygon points="224,90 215,94 215,86" fill="currentColor"/>
<line x1="234" y1="90" x2="272" y2="90"/>
<polygon points="272,90 263,94 263,86" fill="currentColor"/>
<line x1="312" y1="90" x2="382" y2="90"/>
<polygon points="382,90 373,94 373,86" fill="currentColor"/>
</g>
<text x="216" y="12" text-anchor="middle" font-size="15">Data in (parallel)</text>
<text x="388" y="96" text-anchor="start" font-size="15">Data out</text>
</g>
</svg>
</div>

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="420" height="150" viewBox="0 0 420 150" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<rect x="120" y="70" width="192" height="40" rx="0"/>
<line x1="168" y1="70" x2="168" y2="110"/>
<line x1="216" y1="70" x2="216" y2="110"/>
<line x1="264" y1="70" x2="264" y2="110"/>
<line x1="50" y1="90" x2="120" y2="90"/>
<polygon points="120,90 111,94 111,86" fill="currentColor"/>
<line x1="138" y1="90" x2="176" y2="90"/>
<polygon points="176,90 167,94 167,86" fill="currentColor"/>
<line x1="186" y1="90" x2="224" y2="90"/>
<polygon points="224,90 215,94 215,86" fill="currentColor"/>
<line x1="234" y1="90" x2="272" y2="90"/>
<polygon points="272,90 263,94 263,86" fill="currentColor"/>
<line x1="144" y1="110" x2="144" y2="162"/>
<polygon points="144,162 140,153 148,153" fill="currentColor"/>
<line x1="192" y1="110" x2="192" y2="162"/>
<polygon points="192,162 188,153 196,153" fill="currentColor"/>
<line x1="240" y1="110" x2="240" y2="162"/>
<polygon points="240,162 236,153 244,153" fill="currentColor"/>
<line x1="288" y1="110" x2="288" y2="162"/>
<polygon points="288,162 284,153 292,153" fill="currentColor"/>
</g>
<text x="46" y="96" text-anchor="end" font-size="15">Data in</text>
<text x="216" y="188" text-anchor="middle" font-size="15">Data out (parallel)</text>
</g>
</svg>
</div>

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="420" height="190" viewBox="0 0 420 190" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,40)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<rect x="120" y="70" width="192" height="40" rx="0"/>
<line x1="168" y1="70" x2="168" y2="110"/>
<line x1="216" y1="70" x2="216" y2="110"/>
<line x1="264" y1="70" x2="264" y2="110"/>
<line x1="144" y1="20" x2="144" y2="70"/>
<polygon points="144,70 140,61 148,61" fill="currentColor"/>
<line x1="144" y1="110" x2="144" y2="162"/>
<polygon points="144,162 140,153 148,153" fill="currentColor"/>
<line x1="192" y1="20" x2="192" y2="70"/>
<polygon points="192,70 188,61 196,61" fill="currentColor"/>
<line x1="192" y1="110" x2="192" y2="162"/>
<polygon points="192,162 188,153 196,153" fill="currentColor"/>
<line x1="240" y1="20" x2="240" y2="70"/>
<polygon points="240,70 236,61 244,61" fill="currentColor"/>
<line x1="240" y1="110" x2="240" y2="162"/>
<polygon points="240,162 236,153 244,153" fill="currentColor"/>
<line x1="288" y1="20" x2="288" y2="70"/>
<polygon points="288,70 284,61 292,61" fill="currentColor"/>
<line x1="288" y1="110" x2="288" y2="162"/>
<polygon points="288,162 284,153 292,153" fill="currentColor"/>
</g>
<text x="216" y="12" text-anchor="middle" font-size="15">Data in (parallel)</text>
<text x="216" y="188" text-anchor="middle" font-size="15">Data out (parallel)</text>
</g>
</svg>
</div>

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="430" height="150" viewBox="0 0 430 150" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(10,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<rect x="120" y="70" width="192" height="40" rx="0"/>
<line x1="168" y1="70" x2="168" y2="110"/>
<line x1="216" y1="70" x2="216" y2="110"/>
<line x1="264" y1="70" x2="264" y2="110"/>
<line x1="138" y1="90" x2="176" y2="90"/>
<polygon points="176,90 167,94 167,86" fill="currentColor"/>
<line x1="186" y1="90" x2="224" y2="90"/>
<polygon points="224,90 215,94 215,86" fill="currentColor"/>
<line x1="234" y1="90" x2="272" y2="90"/>
<polygon points="272,90 263,94 263,86" fill="currentColor"/>
<line x1="312" y1="78" x2="326" y2="78"/>
<line x1="326" y1="78" x2="326" y2="36"/>
<line x1="326" y1="36" x2="106" y2="36"/>
<line x1="106" y1="36" x2="106" y2="90"/>
<line x1="106" y1="90" x2="120" y2="90"/>
</g>
</g>
</svg>
</div>

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="430" height="150" viewBox="0 0 430 150" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(10,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<rect x="120" y="70" width="192" height="40" rx="0"/>
<line x1="168" y1="70" x2="168" y2="110"/>
<line x1="216" y1="70" x2="216" y2="110"/>
<line x1="264" y1="70" x2="264" y2="110"/>
<line x1="198" y1="90" x2="160" y2="90"/>
<polygon points="160,90 169,86 169,94" fill="currentColor"/>
<line x1="246" y1="90" x2="208" y2="90"/>
<polygon points="208,90 217,86 217,94" fill="currentColor"/>
<line x1="294" y1="90" x2="256" y2="90"/>
<polygon points="256,90 265,86 265,94" fill="currentColor"/>
<line x1="120" y1="78" x2="106" y2="78"/>
<line x1="106" y1="78" x2="106" y2="36"/>
<line x1="106" y1="36" x2="326" y2="36"/>
<line x1="326" y1="36" x2="326" y2="90"/>
<line x1="326" y1="90" x2="312" y2="90"/>
</g>
</g>
</svg>
</div>

**Rotate** คือการเลื่อนข้อมูลแบบวนรอบ บิตที่หลุดออกอีกด้านถูกส่งกลับเข้าอีกด้านหนึ่งของรีจิสเตอร์ จึงไม่มีข้อมูลหายไป (ต่างจาก Shift ที่บิตหลุดทิ้งและเติม $0$ หรือข้อมูลใหม่เข้ามาแทน)

### 1.3 อนุกรมเข้า-อนุกรมออก (SISO)

**SISO** นำข้อมูลเข้าและออกทีละบิต เรียกว่า **แบบเลื่อนข้อมูล (Shift Register)** มี 2 ชนิด คือ Register เลื่อนขวา (Shift Right Register) เลื่อนข้อมูลจากซ้ายไปขวา และ Register เลื่อนซ้าย (Shift Left Register) เลื่อนข้อมูลจากขวาไปซ้าย เลื่อนทีละบิตทุกครั้งที่มีสัญญาณนาฬิกาเข้ามา

**วงจร Shift Right Register ขนาด 4 บิต** ใช้ D ฟลิป-ฟลอป 4 ตัว (D, C, B, A) ต่อกัน $Q$ ของตัวหนึ่งเข้า $D$ ของตัวถัดไป ใช้ Clock และ Reset ร่วมกัน ข้อมูลเข้าที่ $D$ ของ FF D (ซ้ายสุด) ข้อมูลออกที่ $Q$ ของ FF A (ขวาสุด) ฟลิป-ฟลอปทำงานที่ขอบขาลงของสัญญาณนาฬิกา $Q_D = 2^0$, $Q_C = 2^1$, $Q_B = 2^2$, $Q_A = 2^3$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="964" height="256" viewBox="0 0 964 256" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(90,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<rect x="96" y="60" width="76" height="96" rx="2"/>
<line x1="70" y1="88" x2="96" y2="88"/>
<polyline points="96,119 108,128 96,137"/>
<circle cx="92" cy="128" r="4"/>
<line x1="70" y1="128" x2="88" y2="128"/>
<line x1="172" y1="88" x2="198" y2="88"/>
<circle cx="134" cy="160" r="4"/>
<line x1="134" y1="164" x2="134" y2="178"/>
<rect x="258" y="60" width="76" height="96" rx="2"/>
<line x1="232" y1="88" x2="258" y2="88"/>
<polyline points="258,119 270,128 258,137"/>
<circle cx="254" cy="128" r="4"/>
<line x1="232" y1="128" x2="250" y2="128"/>
<line x1="334" y1="88" x2="360" y2="88"/>
<circle cx="296" cy="160" r="4"/>
<line x1="296" y1="164" x2="296" y2="178"/>
<rect x="420" y="60" width="76" height="96" rx="2"/>
<line x1="394" y1="88" x2="420" y2="88"/>
<polyline points="420,119 432,128 420,137"/>
<circle cx="416" cy="128" r="4"/>
<line x1="394" y1="128" x2="412" y2="128"/>
<line x1="496" y1="88" x2="522" y2="88"/>
<circle cx="458" cy="160" r="4"/>
<line x1="458" y1="164" x2="458" y2="178"/>
<rect x="582" y="60" width="76" height="96" rx="2"/>
<line x1="556" y1="88" x2="582" y2="88"/>
<polyline points="582,119 594,128 582,137"/>
<circle cx="578" cy="128" r="4"/>
<line x1="556" y1="128" x2="574" y2="128"/>
<line x1="658" y1="88" x2="684" y2="88"/>
<circle cx="620" cy="160" r="4"/>
<line x1="620" y1="164" x2="620" y2="178"/>
<line x1="198" y1="88" x2="232" y2="88"/>
<line x1="360" y1="88" x2="394" y2="88"/>
<line x1="522" y1="88" x2="556" y2="88"/>
<line x1="40" y1="226" x2="544" y2="226"/>
<line x1="70" y1="128" x2="58" y2="128"/>
<line x1="58" y1="128" x2="58" y2="226"/>
<line x1="232" y1="128" x2="220" y2="128"/>
<line x1="220" y1="128" x2="220" y2="226"/>
<line x1="394" y1="128" x2="382" y2="128"/>
<line x1="382" y1="128" x2="382" y2="226"/>
<line x1="556" y1="128" x2="544" y2="128"/>
<line x1="544" y1="128" x2="544" y2="226"/>
<line x1="40" y1="200" x2="620" y2="200"/>
<line x1="134" y1="178" x2="134" y2="200"/>
<line x1="296" y1="178" x2="296" y2="200"/>
<line x1="458" y1="178" x2="458" y2="200"/>
<line x1="620" y1="178" x2="620" y2="200"/>
<line x1="30" y1="88" x2="70" y2="88"/>
<line x1="684" y1="88" x2="744" y2="88"/>
<circle cx="58" cy="226" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="220" cy="226" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="382" cy="226" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="544" cy="226" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="134" cy="200" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="296" cy="200" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="458" cy="200" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="620" cy="200" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="138" y="116" text-anchor="middle" font-size="24">D</text>
<text x="103" y="93" text-anchor="start" font-size="14">D</text>
<text x="165" y="93" text-anchor="end" font-size="14">Q</text>
<text x="134" y="150" text-anchor="middle" font-size="10">CLR</text>
<text x="300" y="116" text-anchor="middle" font-size="24">C</text>
<text x="265" y="93" text-anchor="start" font-size="14">D</text>
<text x="327" y="93" text-anchor="end" font-size="14">Q</text>
<text x="296" y="150" text-anchor="middle" font-size="10">CLR</text>
<text x="462" y="116" text-anchor="middle" font-size="24">B</text>
<text x="427" y="93" text-anchor="start" font-size="14">D</text>
<text x="489" y="93" text-anchor="end" font-size="14">Q</text>
<text x="458" y="150" text-anchor="middle" font-size="10">CLR</text>
<text x="624" y="116" text-anchor="middle" font-size="24">A</text>
<text x="589" y="93" text-anchor="start" font-size="14">D</text>
<text x="651" y="93" text-anchor="end" font-size="14">Q</text>
<text x="620" y="150" text-anchor="middle" font-size="10">CLR</text>
<text x="36" y="232" text-anchor="end" font-size="15">Clock</text>
<text x="36" y="206" text-anchor="end" font-size="15">Reset</text>
<text x="26" y="93" text-anchor="end" font-size="14">Data input</text>
<text x="748" y="93" text-anchor="start" font-size="14">Data output</text>
<text x="192" y="74" text-anchor="middle" font-size="14">Q<tspan dy="4" font-size="9">D</tspan></text>
<text x="354" y="74" text-anchor="middle" font-size="14">Q<tspan dy="4" font-size="9">C</tspan></text>
<text x="516" y="74" text-anchor="middle" font-size="14">Q<tspan dy="4" font-size="9">B</tspan></text>
<text x="678" y="74" text-anchor="middle" font-size="14">Q<tspan dy="4" font-size="9">A</tspan></text>
</g>
</svg>
</div>

**ลักษณะการทำงาน** ที่ขอบขาลงแต่ละครั้ง ฟลิป-ฟลอปทุกตัวรับค่า $D$ พร้อมกัน จึงได้ $Q_D \leftarrow$ ข้อมูลเข้า, $Q_C \leftarrow Q_D$, $Q_B \leftarrow Q_C$, $Q_A \leftarrow Q_B$ (ใช้ค่าเดิมก่อนขอบ)

$$Q_D(t+1) = \text{Data in},\quad Q_C(t+1) = Q_D(t),\quad Q_B(t+1) = Q_C(t),\quad Q_A(t+1) = Q_B(t)$$

### ตัวอย่างที่ 2  Shift Right Register 4 บิต เริ่มต้นที่ $0000$ (ล้างด้วย Reset) ป้อนข้อมูลอนุกรม $1, 0, 1, 1$ ทีละบิตตามลำดับ จงหา $Q_DQ_CQ_BQ_A$ หลังสัญญาณนาฬิกาแต่ละครั้ง และรูปคลื่น

$\mathbf{Sol}^{n}$

ที่ขอบขาลงแต่ละครั้ง ข้อมูลเข้าเข้าที่ $Q_D$ และข้อมูลเดิมเลื่อนไปทางขวา 1 ตำแหน่ง ($Q_D \to Q_C \to Q_B \to Q_A$)

- ครั้งที่ 1 : ข้อมูลเข้า $1$ $\Rightarrow Q_DQ_CQ_BQ_A = 1000$
- ครั้งที่ 2 : ข้อมูลเข้า $0$ $\Rightarrow 0100$ (เลื่อน $1$ ไป $Q_C$)
- ครั้งที่ 3 : ข้อมูลเข้า $1$ $\Rightarrow 1010$
- ครั้งที่ 4 : ข้อมูลเข้า $1$ $\Rightarrow 1101$

- หลังครบ 4 ครั้ง ข้อมูลที่เก็บใน $Q_DQ_CQ_BQ_A$ คือ $1101$ บิตที่ป้อนก่อนสุดไปอยู่ไกลสุดที่ $Q_A$ และบิตที่ป้อนทีหลังสุดอยู่ที่ $Q_D$ ดังนั้นอ่านจาก $Q_A$ ไป $Q_D$ ($Q_AQ_BQ_CQ_D$) ได้ $1011$ ตรงกับลำดับที่ป้อน

$\mathbf{Ans}\quad Q_DQ_CQ_BQ_A = 1000,\ 0100,\ 1010,\ 1101 \text{ ; เก็บข้อมูล } 1011 \text{ (อ่านจาก } Q_A \text{ ไป } Q_D)$

| ครั้งที่ (Clock) | ข้อมูลเข้า | $Q_D$ | $Q_C$ | $Q_B$ | $Q_A$ |
|:-:|:-:|:-:|:-:|:-:|:-:|
| 0 | - | 0 | 0 | 0 | 0 |
| 1 | 1 | 1 | 0 | 0 | 0 |
| 2 | 0 | 0 | 1 | 0 | 0 |
| 3 | 1 | 1 | 0 | 1 | 0 |
| 4 | 1 | 1 | 1 | 0 | 1 |

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="400" height="404" viewBox="0 0 400 404" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="138" y1="26" x2="138" y2="398"/>
<line x1="206" y1="26" x2="206" y2="398"/>
<line x1="274" y1="26" x2="274" y2="398"/>
<line x1="342" y1="26" x2="342" y2="398"/>
</g>
<text x="58" y="63.6" text-anchor="end">Clock</text>
<path d="M70,71.2 L104,71.2 L104,44 L138,44 L138,71.2 L172,71.2 L172,44 L206,44 L206,71.2 L240,71.2 L240,44 L274,44 L274,71.2 L308,71.2 L308,44 L342,44 L342,71.2 L376,71.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="58" y="123.6" text-anchor="end">Data in</text>
<path d="M70,104 L151.6,104 L151.6,131.2 L219.6,131.2 L219.6,104 L376,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="58" y="183.6" text-anchor="end">Q<tspan dy="4" font-size="12">D</tspan></text>
<path d="M70,191.2 L138,191.2 L138,164 L206,164 L206,191.2 L274,191.2 L274,164 L376,164" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="58" y="243.6" text-anchor="end">Q<tspan dy="4" font-size="12">C</tspan></text>
<path d="M70,251.2 L206,251.2 L206,224 L274,224 L274,251.2 L342,251.2 L342,224 L376,224" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="58" y="303.6" text-anchor="end">Q<tspan dy="4" font-size="12">B</tspan></text>
<path d="M70,311.2 L274,311.2 L274,284 L342,284 L342,311.2 L376,311.2" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="58" y="363.6" text-anchor="end">Q<tspan dy="4" font-size="12">A</tspan></text>
<path d="M70,371.2 L342,371.2 L342,344 L376,344" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="138" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="206" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="274" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="342" y="18" text-anchor="middle" font-size="14">#4</text>
</svg>
</div>

### ตัวอย่างที่ 3  Shift Right Register 4 บิต เก็บข้อมูล $1101$ ไว้ที่ $Q_DQ_CQ_BQ_A$ (หลังตัวอย่างที่ 2) ถ้าป้อนข้อมูลเข้าเป็น $0$ ตลอด จะต้องป้อนสัญญาณนาฬิกากี่ครั้งจึงอ่านข้อมูล 4 บิตออกครบ และข้อมูลที่ออกที่ $Q_A$ เรียงเป็นอย่างไร

$\mathbf{Sol}^{n}$

ข้อมูลออกทางขวาที่ $Q_A$ ทีละบิต อ่านค่า $Q_A$ ก่อนและหลังการเลื่อนแต่ละครั้ง

- ก่อนเลื่อน : $Q_A = 1$ (บิตแรกที่ออก)
- ครั้งที่ 1 : $0110$ $\Rightarrow Q_A = 0$
- ครั้งที่ 2 : $0011$ $\Rightarrow Q_A = 1$
- ครั้งที่ 3 : $0001$ $\Rightarrow Q_A = 1$
- ครั้งที่ 4 : $0000$ $\Rightarrow$ ข้อมูลหมดจากรีจิสเตอร์แล้ว

- บิตแรกอยู่ที่ $Q_A$ แล้ว จึงอ่านบิตที่ 2, 3, 4 ได้หลังเลื่อน 1, 2, 3 ครั้ง : อ่านข้อมูล 4 บิตครบด้วยสัญญาณนาฬิกา 3 ครั้ง ถ้าต้องการให้ข้อมูลออกจากรีจิสเตอร์จนหมด (กลายเป็น $0000$) ต้องเลื่อน 4 ครั้ง ข้อมูลที่ออกเรียงเป็น $1, 0, 1, 1$ ตรงกับ $1011$ ที่ป้อนเข้ามาตอนแรก ($Q_A$ ออกก่อน)

$\mathbf{Ans}\quad \text{อ่านครบด้วยนาฬิกา 3 ครั้ง (หมดรีจิสเตอร์เมื่อ 4 ครั้ง) ; } Q_A = 1, 0, 1, 1 \text{ (ลำดับเดิมที่ป้อนเข้า)}$

| ครั้งที่ | $Q_D$ | $Q_C$ | $Q_B$ | $Q_A$ |
|:-:|:-:|:-:|:-:|:-:|
| 0 | 1 | 1 | 0 | 1 |
| 1 | 0 | 1 | 1 | 0 |
| 2 | 0 | 0 | 1 | 1 |
| 3 | 0 | 0 | 0 | 1 |
| 4 | 0 | 0 | 0 | 0 |

### 1.4 อนุกรมเข้า-ขนานออก (SIPO)

**SIPO** นำข้อมูลเข้าแบบอนุกรม (ทีละบิต) แต่นำข้อมูลออกไปใช้งานแบบขนาน (พร้อมกันทุกบิต) วงจรเหมือนแบบ SISO ต่างกันที่นำสัญญาณออกจากฟลิป-ฟลอปแต่ละตัว ซึ่งนำข้อมูลไปใช้งานได้พร้อมกัน ในรูปใช้ **Transfer Pulse** ควบคุมเกต AND ที่เอาต์พุต ข้อมูลจึงปรากฏที่ $Q_4$ ถึง $Q_1$ เมื่อ Transfer Pulse เป็น $1$ เท่านั้น

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="894" height="306" viewBox="0 0 894 306" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(110,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<rect x="96" y="110" width="76" height="96" rx="2"/>
<line x1="70" y1="138" x2="96" y2="138"/>
<polyline points="96,169 108,178 96,187"/>
<circle cx="92" cy="178" r="4"/>
<line x1="70" y1="178" x2="88" y2="178"/>
<line x1="172" y1="138" x2="198" y2="138"/>
<circle cx="134" cy="210" r="4"/>
<line x1="134" y1="214" x2="134" y2="228"/>
<rect x="258" y="110" width="76" height="96" rx="2"/>
<line x1="232" y1="138" x2="258" y2="138"/>
<polyline points="258,169 270,178 258,187"/>
<circle cx="254" cy="178" r="4"/>
<line x1="232" y1="178" x2="250" y2="178"/>
<line x1="334" y1="138" x2="360" y2="138"/>
<circle cx="296" cy="210" r="4"/>
<line x1="296" y1="214" x2="296" y2="228"/>
<rect x="420" y="110" width="76" height="96" rx="2"/>
<line x1="394" y1="138" x2="420" y2="138"/>
<polyline points="420,169 432,178 420,187"/>
<circle cx="416" cy="178" r="4"/>
<line x1="394" y1="178" x2="412" y2="178"/>
<line x1="496" y1="138" x2="522" y2="138"/>
<circle cx="458" cy="210" r="4"/>
<line x1="458" y1="214" x2="458" y2="228"/>
<rect x="582" y="110" width="76" height="96" rx="2"/>
<line x1="556" y1="138" x2="582" y2="138"/>
<polyline points="582,169 594,178 582,187"/>
<circle cx="578" cy="178" r="4"/>
<line x1="556" y1="178" x2="574" y2="178"/>
<line x1="658" y1="138" x2="684" y2="138"/>
<circle cx="620" cy="210" r="4"/>
<line x1="620" y1="214" x2="620" y2="228"/>
<line x1="198" y1="138" x2="232" y2="138"/>
<line x1="360" y1="138" x2="394" y2="138"/>
<line x1="522" y1="138" x2="556" y2="138"/>
<line x1="40" y1="276" x2="544" y2="276"/>
<line x1="70" y1="178" x2="58" y2="178"/>
<line x1="58" y1="178" x2="58" y2="276"/>
<line x1="232" y1="178" x2="220" y2="178"/>
<line x1="220" y1="178" x2="220" y2="276"/>
<line x1="394" y1="178" x2="382" y2="178"/>
<line x1="382" y1="178" x2="382" y2="276"/>
<line x1="556" y1="178" x2="544" y2="178"/>
<line x1="544" y1="178" x2="544" y2="276"/>
<line x1="40" y1="250" x2="620" y2="250"/>
<line x1="134" y1="228" x2="134" y2="250"/>
<line x1="296" y1="228" x2="296" y2="250"/>
<line x1="458" y1="228" x2="458" y2="250"/>
<line x1="620" y1="228" x2="620" y2="250"/>
<line x1="30" y1="138" x2="70" y2="138"/>
<path d="M233,42 H259 A26,21 0 0 1 259,84 H233 Z"/>
<line x1="215" y1="138" x2="215" y2="70"/>
<line x1="215" y1="70" x2="233" y2="70"/>
<line x1="225" y1="20" x2="225" y2="56"/>
<line x1="225" y1="56" x2="233" y2="56"/>
<line x1="285" y1="63" x2="307" y2="63"/>
<path d="M395,42 H421 A26,21 0 0 1 421,84 H395 Z"/>
<line x1="377" y1="138" x2="377" y2="70"/>
<line x1="377" y1="70" x2="395" y2="70"/>
<line x1="387" y1="20" x2="387" y2="56"/>
<line x1="387" y1="56" x2="395" y2="56"/>
<line x1="447" y1="63" x2="469" y2="63"/>
<path d="M557,42 H583 A26,21 0 0 1 583,84 H557 Z"/>
<line x1="539" y1="138" x2="539" y2="70"/>
<line x1="539" y1="70" x2="557" y2="70"/>
<line x1="549" y1="20" x2="549" y2="56"/>
<line x1="549" y1="56" x2="557" y2="56"/>
<line x1="609" y1="63" x2="631" y2="63"/>
<line x1="684" y1="138" x2="692" y2="138"/>
<path d="M688,42 H714 A26,21 0 0 1 714,84 H688 Z"/>
<line x1="670" y1="138" x2="670" y2="70"/>
<line x1="670" y1="70" x2="688" y2="70"/>
<line x1="680" y1="20" x2="680" y2="56"/>
<line x1="680" y1="56" x2="688" y2="56"/>
<line x1="740" y1="63" x2="762" y2="63"/>
<line x1="155" y1="20" x2="680" y2="20"/>
<circle cx="215" cy="138" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="377" cy="138" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="539" cy="138" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="58" cy="276" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="220" cy="276" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="382" cy="276" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="544" cy="276" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="134" cy="250" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="296" cy="250" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="458" cy="250" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="620" cy="250" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="215" cy="138" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="225" cy="20" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="377" cy="138" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="387" cy="20" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="539" cy="138" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="549" cy="20" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="670" cy="138" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="680" cy="20" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="138" y="166" text-anchor="middle" font-size="24">D</text>
<text x="103" y="143" text-anchor="start" font-size="14">D</text>
<text x="165" y="143" text-anchor="end" font-size="14">Q</text>
<text x="134" y="200" text-anchor="middle" font-size="10">CLR</text>
<text x="300" y="166" text-anchor="middle" font-size="24">C</text>
<text x="265" y="143" text-anchor="start" font-size="14">D</text>
<text x="327" y="143" text-anchor="end" font-size="14">Q</text>
<text x="296" y="200" text-anchor="middle" font-size="10">CLR</text>
<text x="462" y="166" text-anchor="middle" font-size="24">B</text>
<text x="427" y="143" text-anchor="start" font-size="14">D</text>
<text x="489" y="143" text-anchor="end" font-size="14">Q</text>
<text x="458" y="200" text-anchor="middle" font-size="10">CLR</text>
<text x="624" y="166" text-anchor="middle" font-size="24">A</text>
<text x="589" y="143" text-anchor="start" font-size="14">D</text>
<text x="651" y="143" text-anchor="end" font-size="14">Q</text>
<text x="620" y="200" text-anchor="middle" font-size="10">CLR</text>
<text x="36" y="282" text-anchor="end" font-size="15">Clock</text>
<text x="36" y="256" text-anchor="end" font-size="15">Reset</text>
<text x="26" y="143" text-anchor="end" font-size="14">Serial data input</text>
<text x="311" y="69" text-anchor="start" font-size="15">Q<tspan dy="4" font-size="10">4</tspan></text>
<text x="473" y="69" text-anchor="start" font-size="15">Q<tspan dy="4" font-size="10">3</tspan></text>
<text x="635" y="69" text-anchor="start" font-size="15">Q<tspan dy="4" font-size="10">2</tspan></text>
<text x="766" y="69" text-anchor="start" font-size="15">Q<tspan dy="4" font-size="10">1</tspan></text>
<text x="151" y="26" text-anchor="end" font-size="14">Transfer pulse</text>
</g>
</svg>
</div>

**ใช้งาน** ป้อนข้อมูลอนุกรมครบ $n$ บิต (ใช้ $n$ ลูกสัญญาณนาฬิกา) แล้วจึงให้ Transfer Pulse เป็น $1$ ข้อมูลทุกบิตออกมาพร้อมกัน ในรูป $Q_4 = Q_D$, $Q_3 = Q_C$, $Q_2 = Q_B$, $Q_1 = Q_A$ เมื่อ Transfer Pulse = 1

### ตัวอย่างที่ 4  SIPO 4 บิตตามรูป เริ่มต้นที่ $0000$ ป้อนข้อมูลอนุกรม $1, 0, 1, 1$ ตามลำดับ (ตามตัวอย่างที่ 2) แล้วให้ Transfer Pulse = 1 จงหา $Q_4Q_3Q_2Q_1$ ก่อนและหลัง Transfer Pulse

$\mathbf{Sol}^{n}$

- ข้อมูลเลื่อนเข้าทีละบิต เหมือนตัวอย่างที่ 2 หลังครบ 4 ลูกสัญญาณนาฬิกา $Q_DQ_CQ_BQ_A = 1101$
- ถ้า Transfer Pulse = 0 เกต AND ทุกตัวส่ง $0$ จึงอ่าน $Q_4Q_3Q_2Q_1 = 0000$ (ยังไม่ปล่อยข้อมูลออก)
- เมื่อ Transfer Pulse = 1 เกต AND ส่งค่า $Q$ ออกมา : $Q_4 = Q_D = 1$, $Q_3 = Q_C = 1$, $Q_2 = Q_B = 0$, $Q_1 = Q_A = 1$

- ข้อมูลทุกบิตออกมาพร้อมกัน เป็นการแปลงข้อมูลอนุกรม $1011$ (ป้อนทีละบิต) เป็นข้อมูลขนาน $Q_4Q_3Q_2Q_1 = 1101$

$\mathbf{Ans}\quad \text{ก่อน Transfer: } Q_4Q_3Q_2Q_1 = 0000 \text{ ; หลัง Transfer Pulse = 1: } Q_4Q_3Q_2Q_1 = 1101$

| สภาวะ | $Q_4$ | $Q_3$ | $Q_2$ | $Q_1$ |
|:-:|:-:|:-:|:-:|:-:|
| Transfer Pulse = 0 | 0 | 0 | 0 | 0 |
| Transfer Pulse = 1 | 1 | 1 | 0 | 1 |

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="400" height="404" viewBox="0 0 400 404" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="138" y1="26" x2="138" y2="398"/>
<line x1="206" y1="26" x2="206" y2="398"/>
<line x1="274" y1="26" x2="274" y2="398"/>
<line x1="342" y1="26" x2="342" y2="398"/>
</g>
<text x="58" y="63.6" text-anchor="end">Clock</text>
<path d="M70,71.2 L104,71.2 L104,44 L138,44 L138,71.2 L172,71.2 L172,44 L206,44 L206,71.2 L240,71.2 L240,44 L274,44 L274,71.2 L308,71.2 L308,44 L342,44 L342,71.2 L376,71.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="58" y="123.6" text-anchor="end">Data in</text>
<path d="M70,104 L151.6,104 L151.6,131.2 L219.6,131.2 L219.6,104 L376,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="58" y="183.6" text-anchor="end">Q<tspan dy="4" font-size="12">D</tspan></text>
<path d="M70,191.2 L138,191.2 L138,164 L206,164 L206,191.2 L274,191.2 L274,164 L376,164" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="58" y="243.6" text-anchor="end">Q<tspan dy="4" font-size="12">C</tspan></text>
<path d="M70,251.2 L206,251.2 L206,224 L274,224 L274,251.2 L342,251.2 L342,224 L376,224" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="58" y="303.6" text-anchor="end">Q<tspan dy="4" font-size="12">B</tspan></text>
<path d="M70,311.2 L274,311.2 L274,284 L342,284 L342,311.2 L376,311.2" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="58" y="363.6" text-anchor="end">Q<tspan dy="4" font-size="12">A</tspan></text>
<path d="M70,371.2 L342,371.2 L342,344 L376,344" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="138" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="206" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="274" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="342" y="18" text-anchor="middle" font-size="14">#4</text>
</svg>
</div>

### 1.5 ขนานเข้า-อนุกรมออก (PISO)

**PISO** นำข้อมูลเข้าที่อินพุตป้อนพร้อมกันทุกบิตในเวลาเดียวกัน (แบบขนาน) และส่วนเอาต์พุตออกมาทีละบิต (แบบอนุกรม) มีประโยชน์ในกรณีเปลี่ยนข้อมูลแบบขนานเป็นอนุกรม

**วงจรและการทำงาน** ถ้าป้อน **Latch = 1** ข้อมูลจะเข้าพร้อมกันที่สายข้อมูล $P_A, P_B, P_C, P_D$ โดยสัญญาณที่ออกจาก NAND เกตไปควบคุม Preset (SET) และ Clear (CLR) ของฟลิป-ฟลอปแต่ละตัวโดยตรงตามข้อมูลที่เข้ามา จากนั้นใช้วิธีเดียวกับ SISO โดยให้ **Latch = 0** จะนำข้อมูลในรีจิสเตอร์เลื่อนไปทางขวาทีละบิตตามจำนวนลูกของสัญญาณนาฬิกาที่ป้อนให้วงจร

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="1010" height="366" viewBox="0 0 1010 366" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(100,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<rect x="150" y="170" width="76" height="96" rx="2"/>
<line x1="124" y1="198" x2="150" y2="198"/>
<polyline points="150,229 162,238 150,247"/>
<circle cx="146" cy="238" r="4"/>
<line x1="124" y1="238" x2="142" y2="238"/>
<line x1="226" y1="198" x2="252" y2="198"/>
<circle cx="188" cy="166" r="4"/>
<line x1="188" y1="162" x2="188" y2="148"/>
<circle cx="188" cy="270" r="4"/>
<line x1="188" y1="274" x2="188" y2="288"/>
<rect x="296" y="170" width="76" height="96" rx="2"/>
<line x1="270" y1="198" x2="296" y2="198"/>
<polyline points="296,229 308,238 296,247"/>
<circle cx="292" cy="238" r="4"/>
<line x1="270" y1="238" x2="288" y2="238"/>
<line x1="372" y1="198" x2="398" y2="198"/>
<circle cx="334" cy="166" r="4"/>
<line x1="334" y1="162" x2="334" y2="148"/>
<circle cx="334" cy="270" r="4"/>
<line x1="334" y1="274" x2="334" y2="288"/>
<rect x="442" y="170" width="76" height="96" rx="2"/>
<line x1="416" y1="198" x2="442" y2="198"/>
<polyline points="442,229 454,238 442,247"/>
<circle cx="438" cy="238" r="4"/>
<line x1="416" y1="238" x2="434" y2="238"/>
<line x1="518" y1="198" x2="544" y2="198"/>
<circle cx="480" cy="166" r="4"/>
<line x1="480" y1="162" x2="480" y2="148"/>
<circle cx="480" cy="270" r="4"/>
<line x1="480" y1="274" x2="480" y2="288"/>
<rect x="588" y="170" width="76" height="96" rx="2"/>
<line x1="562" y1="198" x2="588" y2="198"/>
<polyline points="588,229 600,238 588,247"/>
<circle cx="584" cy="238" r="4"/>
<line x1="562" y1="238" x2="580" y2="238"/>
<line x1="664" y1="198" x2="690" y2="198"/>
<circle cx="626" cy="166" r="4"/>
<line x1="626" y1="162" x2="626" y2="148"/>
<circle cx="626" cy="270" r="4"/>
<line x1="626" y1="274" x2="626" y2="288"/>
<line x1="252" y1="198" x2="270" y2="198"/>
<line x1="398" y1="198" x2="416" y2="198"/>
<line x1="544" y1="198" x2="562" y2="198"/>
<line x1="84" y1="198" x2="124" y2="198"/>
<line x1="690" y1="198" x2="740" y2="198"/>
<rect x="144" y="60" width="88" height="58" rx="3"/>
<line x1="118" y1="74" x2="144" y2="74"/>
<line x1="158" y1="24" x2="158" y2="60"/>
<line x1="188" y1="118" x2="188" y2="148"/>
<line x1="232" y1="100" x2="246" y2="100"/>
<line x1="246" y1="100" x2="246" y2="288"/>
<line x1="246" y1="288" x2="188" y2="288"/>
<rect x="290" y="60" width="88" height="58" rx="3"/>
<line x1="264" y1="74" x2="290" y2="74"/>
<line x1="304" y1="24" x2="304" y2="60"/>
<line x1="334" y1="118" x2="334" y2="148"/>
<line x1="378" y1="100" x2="392" y2="100"/>
<line x1="392" y1="100" x2="392" y2="288"/>
<line x1="392" y1="288" x2="334" y2="288"/>
<rect x="436" y="60" width="88" height="58" rx="3"/>
<line x1="410" y1="74" x2="436" y2="74"/>
<line x1="450" y1="24" x2="450" y2="60"/>
<line x1="480" y1="118" x2="480" y2="148"/>
<line x1="524" y1="100" x2="538" y2="100"/>
<line x1="538" y1="100" x2="538" y2="288"/>
<line x1="538" y1="288" x2="480" y2="288"/>
<rect x="582" y="60" width="88" height="58" rx="3"/>
<line x1="556" y1="74" x2="582" y2="74"/>
<line x1="596" y1="24" x2="596" y2="60"/>
<line x1="626" y1="118" x2="626" y2="148"/>
<line x1="670" y1="100" x2="684" y2="100"/>
<line x1="684" y1="100" x2="684" y2="288"/>
<line x1="684" y1="288" x2="626" y2="288"/>
<line x1="118" y1="24" x2="596" y2="24"/>
<line x1="94" y1="336" x2="550" y2="336"/>
<line x1="124" y1="238" x2="112" y2="238"/>
<line x1="112" y1="238" x2="112" y2="336"/>
<line x1="270" y1="238" x2="258" y2="238"/>
<line x1="258" y1="238" x2="258" y2="336"/>
<line x1="416" y1="238" x2="404" y2="238"/>
<line x1="404" y1="238" x2="404" y2="336"/>
<line x1="562" y1="238" x2="550" y2="238"/>
<line x1="550" y1="238" x2="550" y2="336"/>
<circle cx="158" cy="24" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="304" cy="24" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="450" cy="24" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="596" cy="24" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="336" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="258" cy="336" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="404" cy="336" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="550" cy="336" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="192" y="226" text-anchor="middle" font-size="24">D</text>
<text x="157" y="203" text-anchor="start" font-size="14">D</text>
<text x="219" y="203" text-anchor="end" font-size="14">Q</text>
<text x="188" y="184" text-anchor="middle" font-size="10">SET</text>
<text x="188" y="260" text-anchor="middle" font-size="10">CLR</text>
<text x="338" y="226" text-anchor="middle" font-size="24">C</text>
<text x="303" y="203" text-anchor="start" font-size="14">D</text>
<text x="365" y="203" text-anchor="end" font-size="14">Q</text>
<text x="334" y="184" text-anchor="middle" font-size="10">SET</text>
<text x="334" y="260" text-anchor="middle" font-size="10">CLR</text>
<text x="484" y="226" text-anchor="middle" font-size="24">B</text>
<text x="449" y="203" text-anchor="start" font-size="14">D</text>
<text x="511" y="203" text-anchor="end" font-size="14">Q</text>
<text x="480" y="184" text-anchor="middle" font-size="10">SET</text>
<text x="480" y="260" text-anchor="middle" font-size="10">CLR</text>
<text x="630" y="226" text-anchor="middle" font-size="24">A</text>
<text x="595" y="203" text-anchor="start" font-size="14">D</text>
<text x="657" y="203" text-anchor="end" font-size="14">Q</text>
<text x="626" y="184" text-anchor="middle" font-size="10">SET</text>
<text x="626" y="260" text-anchor="middle" font-size="10">CLR</text>
<text x="80" y="203" text-anchor="end" font-size="14">Serial data input</text>
<text x="744" y="203" text-anchor="start" font-size="14">Serial data output</text>
<text x="188" y="84" text-anchor="middle" font-size="14">2 NAND</text>
<text x="188" y="104" text-anchor="middle" font-size="12">SET / CLR</text>
<text x="114" y="79" text-anchor="end" font-size="14">PD</text>
<text x="334" y="84" text-anchor="middle" font-size="14">2 NAND</text>
<text x="334" y="104" text-anchor="middle" font-size="12">SET / CLR</text>
<text x="260" y="79" text-anchor="end" font-size="14">PC</text>
<text x="480" y="84" text-anchor="middle" font-size="14">2 NAND</text>
<text x="480" y="104" text-anchor="middle" font-size="12">SET / CLR</text>
<text x="406" y="79" text-anchor="end" font-size="14">PB</text>
<text x="626" y="84" text-anchor="middle" font-size="14">2 NAND</text>
<text x="626" y="104" text-anchor="middle" font-size="12">SET / CLR</text>
<text x="552" y="79" text-anchor="end" font-size="14">PA</text>
<text x="114" y="30" text-anchor="end" font-size="15">Latch</text>
<text x="90" y="342" text-anchor="end" font-size="15">Clock</text>
</g>
</svg>
</div>

**เกตของแต่ละฟลิป-ฟลอป** (SET และ CLR ทำงานเมื่อเป็น $0$) $\overline{SET} = \overline{P \cdot Latch}$ และ $\overline{CLR} = \overline{\overline{SET} \cdot Latch}$

| Latch | $P$ | $\overline{SET}$ | $\overline{CLR}$ | ผลต่อ $Q$ |
|:-:|:-:|:-:|:-:|:--|
| 0 | x | 1 | 1 | ไม่เปลี่ยน (เลื่อนตามสัญญาณนาฬิกา) |
| 1 | 1 | 0 | 1 | Set : $Q = 1$ |
| 1 | 0 | 1 | 0 | Clear : $Q = 0$ |

### ตัวอย่างที่ 5  PISO 4 บิตตามรูป ป้อนข้อมูลขนาน $P_AP_BP_CP_D = 1011$ แล้วให้ Latch = 1 จากนั้น Latch = 0 และป้อนสัญญาณนาฬิกา 4 ครั้ง (ข้อมูลอนุกรมเข้าเป็น $0, 0, 0, 1$) จงหา $Q_DQ_CQ_BQ_A$ และข้อมูลที่ออกทางอนุกรมที่ $Q_A$

$\mathbf{Sol}^{n}$

- $P_AP_BP_CP_D = 1011$ คือ $P_A = 1$, $P_B = 0$, $P_C = 1$, $P_D = 1$
- Latch = 1 : ฟลิป-ฟลอปแต่ละตัวถูก Set หรือ Clear ตามข้อมูล $P$ ของมัน ได้ $Q_A = 1$, $Q_B = 0$, $Q_C = 1$, $Q_D = 1$ $\Rightarrow Q_DQ_CQ_BQ_A = 1101$
- Latch = 0 : ไม่มีผลต่อ SET/CLR วงจรเลื่อนข้อมูลไปทางขวาตามสัญญาณนาฬิกา (บิตใหม่เข้าที่ $Q_D$)
- ครั้งที่ 1 : ป้อน $0$ $\Rightarrow 0110$ ; ครั้งที่ 2 : ป้อน $0$ $\Rightarrow 0011$ ; ครั้งที่ 3 : ป้อน $0$ $\Rightarrow 0001$ ; ครั้งที่ 4 : ป้อน $1$ $\Rightarrow 1000$

- ข้อมูลออกทางอนุกรมที่ $Q_A$ : ก่อนเลื่อน $Q_A = 1$, หลังครั้งที่ 1 $= 0$, ครั้งที่ 2 $= 1$, ครั้งที่ 3 $= 1$ จึงได้ $1, 0, 1, 1$ ซึ่งตรงกับข้อมูลขนานที่ใส่ไว้ ($P_AP_BP_CP_D = 1011$) แปลงเป็นอนุกรม
- หลังครบ 4 ครั้ง ข้อมูลอนุกรมใหม่ $0, 0, 0, 1$ เลื่อนเข้ามาแทนที่ทั้งหมด ได้ $Q_DQ_CQ_BQ_A = 1000$

$\mathbf{Ans}\quad \text{ข้อมูลออกที่ } Q_A = 1, 0, 1, 1 \text{ ; หลัง 4 ครั้ง } Q_DQ_CQ_BQ_A = 1000$

| สภาวะ | ข้อมูลอนุกรมเข้า | $Q_D$ | $Q_C$ | $Q_B$ | $Q_A$ | ออกที่ $Q_A$ |
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| Latch = 1 | - | 1 | 1 | 0 | 1 | 1 |
| Clock 1 | 0 | 0 | 1 | 1 | 0 | 0 |
| Clock 2 | 0 | 0 | 0 | 1 | 1 | 1 |
| Clock 3 | 0 | 0 | 0 | 0 | 1 | 1 |
| Clock 4 | 1 | 1 | 0 | 0 | 0 | 0 |

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="400" height="404" viewBox="0 0 400 404" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="138" y1="26" x2="138" y2="398"/>
<line x1="206" y1="26" x2="206" y2="398"/>
<line x1="274" y1="26" x2="274" y2="398"/>
<line x1="342" y1="26" x2="342" y2="398"/>
</g>
<text x="58" y="63.6" text-anchor="end">Clock</text>
<path d="M70,71.2 L104,71.2 L104,44 L138,44 L138,71.2 L172,71.2 L172,44 L206,44 L206,71.2 L240,71.2 L240,44 L274,44 L274,71.2 L308,71.2 L308,44 L342,44 L342,71.2 L376,71.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="58" y="123.6" text-anchor="end">Serial in</text>
<path d="M70,131.2 L287.6,131.2 L287.6,104 L376,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="58" y="183.6" text-anchor="end">Q<tspan dy="4" font-size="12">D</tspan></text>
<path d="M70,164 L138,164 L138,191.2 L342,191.2 L342,164 L376,164" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="58" y="243.6" text-anchor="end">Q<tspan dy="4" font-size="12">C</tspan></text>
<path d="M70,224 L206,224 L206,251.2 L376,251.2" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="58" y="303.6" text-anchor="end">Q<tspan dy="4" font-size="12">B</tspan></text>
<path d="M70,311.2 L138,311.2 L138,284 L274,284 L274,311.2 L376,311.2" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="58" y="363.6" text-anchor="end">Q<tspan dy="4" font-size="12">A</tspan></text>
<path d="M70,344 L138,344 L138,371.2 L206,371.2 L206,344 L342,344 L342,371.2 L376,371.2" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="138" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="206" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="274" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="342" y="18" text-anchor="middle" font-size="14">#4</text>
</svg>
</div>

### 1.6 ขนานเข้า-ขนานออก (PIPO)

**PIPO** นำข้อมูลเข้าและออกแบบขนาน ข้อมูลที่นำเข้าเก็บในรีจิสเตอร์ต้องป้อนเข้าที่ $P_A, P_B, P_C, P_D$ เมื่อมีสัญญาณนาฬิกาเข้ามา **1 ลูก** ข้อมูลเหล่านั้นจะถูกเก็บในฟลิป-ฟลอปแต่ละตัวพร้อมกัน และอ่านออกที่ $Q_A, Q_B, Q_C, Q_D$ ได้ทันที

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="850" height="266" viewBox="0 0 850 266" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(60,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<rect x="150" y="70" width="76" height="96" rx="2"/>
<line x1="124" y1="98" x2="150" y2="98"/>
<polyline points="150,129 162,138 150,147"/>
<circle cx="146" cy="138" r="4"/>
<line x1="124" y1="138" x2="142" y2="138"/>
<line x1="226" y1="98" x2="252" y2="98"/>
<circle cx="188" cy="170" r="4"/>
<line x1="188" y1="174" x2="188" y2="188"/>
<rect x="296" y="70" width="76" height="96" rx="2"/>
<line x1="270" y1="98" x2="296" y2="98"/>
<polyline points="296,129 308,138 296,147"/>
<circle cx="292" cy="138" r="4"/>
<line x1="270" y1="138" x2="288" y2="138"/>
<line x1="372" y1="98" x2="398" y2="98"/>
<circle cx="334" cy="170" r="4"/>
<line x1="334" y1="174" x2="334" y2="188"/>
<rect x="442" y="70" width="76" height="96" rx="2"/>
<line x1="416" y1="98" x2="442" y2="98"/>
<polyline points="442,129 454,138 442,147"/>
<circle cx="438" cy="138" r="4"/>
<line x1="416" y1="138" x2="434" y2="138"/>
<line x1="518" y1="98" x2="544" y2="98"/>
<circle cx="480" cy="170" r="4"/>
<line x1="480" y1="174" x2="480" y2="188"/>
<rect x="588" y="70" width="76" height="96" rx="2"/>
<line x1="562" y1="98" x2="588" y2="98"/>
<polyline points="588,129 600,138 588,147"/>
<circle cx="584" cy="138" r="4"/>
<line x1="562" y1="138" x2="580" y2="138"/>
<line x1="664" y1="98" x2="690" y2="98"/>
<circle cx="626" cy="170" r="4"/>
<line x1="626" y1="174" x2="626" y2="188"/>
<line x1="94" y1="98" x2="124" y2="98"/>
<line x1="252" y1="98" x2="276" y2="98"/>
<line x1="240" y1="98" x2="270" y2="98"/>
<line x1="398" y1="98" x2="422" y2="98"/>
<line x1="386" y1="98" x2="416" y2="98"/>
<line x1="544" y1="98" x2="568" y2="98"/>
<line x1="532" y1="98" x2="562" y2="98"/>
<line x1="690" y1="98" x2="714" y2="98"/>
<line x1="94" y1="236" x2="550" y2="236"/>
<line x1="124" y1="138" x2="112" y2="138"/>
<line x1="112" y1="138" x2="112" y2="236"/>
<line x1="270" y1="138" x2="258" y2="138"/>
<line x1="258" y1="138" x2="258" y2="236"/>
<line x1="416" y1="138" x2="404" y2="138"/>
<line x1="404" y1="138" x2="404" y2="236"/>
<line x1="562" y1="138" x2="550" y2="138"/>
<line x1="550" y1="138" x2="550" y2="236"/>
<line x1="94" y1="210" x2="626" y2="210"/>
<line x1="188" y1="188" x2="188" y2="210"/>
<line x1="334" y1="188" x2="334" y2="210"/>
<line x1="480" y1="188" x2="480" y2="210"/>
<line x1="626" y1="188" x2="626" y2="210"/>
<circle cx="112" cy="236" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="258" cy="236" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="404" cy="236" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="550" cy="236" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="188" cy="210" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="334" cy="210" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="480" cy="210" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="626" cy="210" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="192" y="126" text-anchor="middle" font-size="24">D</text>
<text x="157" y="103" text-anchor="start" font-size="14">D</text>
<text x="219" y="103" text-anchor="end" font-size="14">Q</text>
<text x="188" y="160" text-anchor="middle" font-size="10">CLR</text>
<text x="338" y="126" text-anchor="middle" font-size="24">C</text>
<text x="303" y="103" text-anchor="start" font-size="14">D</text>
<text x="365" y="103" text-anchor="end" font-size="14">Q</text>
<text x="334" y="160" text-anchor="middle" font-size="10">CLR</text>
<text x="484" y="126" text-anchor="middle" font-size="24">B</text>
<text x="449" y="103" text-anchor="start" font-size="14">D</text>
<text x="511" y="103" text-anchor="end" font-size="14">Q</text>
<text x="480" y="160" text-anchor="middle" font-size="10">CLR</text>
<text x="630" y="126" text-anchor="middle" font-size="24">A</text>
<text x="595" y="103" text-anchor="start" font-size="14">D</text>
<text x="657" y="103" text-anchor="end" font-size="14">Q</text>
<text x="626" y="160" text-anchor="middle" font-size="10">CLR</text>
<text x="90" y="103" text-anchor="end" font-size="15">PD</text>
<text x="280" y="103" text-anchor="start" font-size="15">Q<tspan dy="4" font-size="10">D</tspan></text>
<text x="236" y="103" text-anchor="end" font-size="15">PC</text>
<text x="426" y="103" text-anchor="start" font-size="15">Q<tspan dy="4" font-size="10">C</tspan></text>
<text x="382" y="103" text-anchor="end" font-size="15">PB</text>
<text x="572" y="103" text-anchor="start" font-size="15">Q<tspan dy="4" font-size="10">B</tspan></text>
<text x="528" y="103" text-anchor="end" font-size="15">PA</text>
<text x="718" y="103" text-anchor="start" font-size="15">Q<tspan dy="4" font-size="10">A</tspan></text>
<text x="90" y="242" text-anchor="end" font-size="15">Clock</text>
<text x="90" y="216" text-anchor="end" font-size="15">Reset</text>
</g>
</svg>
</div>

$$Q_D \leftarrow P_D,\quad Q_C \leftarrow P_C,\quad Q_B \leftarrow P_B,\quad Q_A \leftarrow P_A \quad (\text{พร้อมกัน ใช้สัญญาณนาฬิกา 1 ลูก})$$

### ตัวอย่างที่ 6  PIPO 4 บิต ป้อน $P_DP_CP_BP_A = 0110$ แล้วให้สัญญาณนาฬิกา 1 ลูก จงหา $Q_DQ_CQ_BQ_A$ และเปรียบเทียบจำนวนลูกนาฬิกาที่ใช้กับ SISO ในการเก็บข้อมูล 4 บิต

$\mathbf{Sol}^{n}$

- PIPO เก็บข้อมูลทุกบิตพร้อมกันในสัญญาณนาฬิกา 1 ลูก : $Q_D = P_D = 0$, $Q_C = P_C = 1$, $Q_B = P_B = 1$, $Q_A = P_A = 0$
- SISO ต้องป้อนข้อมูลทีละบิต จึงใช้ 4 ลูกสัญญาณนาฬิกาสำหรับ 4 บิต

$\mathbf{Ans}\quad Q_DQ_CQ_BQ_A = 0110 \text{ ; PIPO ใช้ 1 ลูก, SISO ใช้ 4 ลูก}$

### 1.7 ชิฟรีจิสเตอร์สองทิศทางและ Rotate

**Bidirectional Shift Register** คือรีจิสเตอร์ที่ Shift ได้ทั้งทางขวาและทางซ้าย โดยสร้างวงจรเกตควบคุมการ Shift ว่าจะให้ Shift ทางขวาหรือทางซ้าย

- ถ้าสัญญาณที่ขา **Right/Left = 1** : Shift ทางขวา
- ถ้า **Right/Left = 0** : Shift ทางซ้าย

$$D_{\text{ตัวที่ } i} = (R/\overline{L}) \cdot Q_{\text{ตัวซ้าย}} + \overline{(R/\overline{L})} \cdot Q_{\text{ตัวขวา}}$$

(ฟลิป-ฟลอปแต่ละตัวรับ $D$ จากเกต AND สองตัวที่รวมกันด้วย OR เกต ตัวหนึ่งเลือกเพื่อนทางซ้ายเมื่อ Right/Left = 1 อีกตัวเลือกเพื่อนทางขวาเมื่อ Right/Left = 0 ในรูปแทนด้วยกล่องเลือก 2-to-1)

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="336" viewBox="0 0 1200 336" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(130,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<rect x="220" y="140" width="76" height="96" rx="2"/>
<line x1="194" y1="168" x2="220" y2="168"/>
<polyline points="220,199 232,208 220,217"/>
<circle cx="216" cy="208" r="4"/>
<line x1="194" y1="208" x2="212" y2="208"/>
<line x1="296" y1="168" x2="322" y2="168"/>
<circle cx="258" cy="240" r="4"/>
<line x1="258" y1="244" x2="258" y2="258"/>
<rect x="436" y="140" width="76" height="96" rx="2"/>
<line x1="410" y1="168" x2="436" y2="168"/>
<polyline points="436,199 448,208 436,217"/>
<circle cx="432" cy="208" r="4"/>
<line x1="410" y1="208" x2="428" y2="208"/>
<line x1="512" y1="168" x2="538" y2="168"/>
<circle cx="474" cy="240" r="4"/>
<line x1="474" y1="244" x2="474" y2="258"/>
<rect x="652" y="140" width="76" height="96" rx="2"/>
<line x1="626" y1="168" x2="652" y2="168"/>
<polyline points="652,199 664,208 652,217"/>
<circle cx="648" cy="208" r="4"/>
<line x1="626" y1="208" x2="644" y2="208"/>
<line x1="728" y1="168" x2="754" y2="168"/>
<circle cx="690" cy="240" r="4"/>
<line x1="690" y1="244" x2="690" y2="258"/>
<rect x="868" y="140" width="76" height="96" rx="2"/>
<line x1="842" y1="168" x2="868" y2="168"/>
<polyline points="868,199 880,208 868,217"/>
<circle cx="864" cy="208" r="4"/>
<line x1="842" y1="208" x2="860" y2="208"/>
<line x1="944" y1="168" x2="970" y2="168"/>
<circle cx="906" cy="240" r="4"/>
<line x1="906" y1="244" x2="906" y2="258"/>
<line x1="164" y1="306" x2="830" y2="306"/>
<line x1="194" y1="208" x2="182" y2="208"/>
<line x1="182" y1="208" x2="182" y2="306"/>
<line x1="410" y1="208" x2="398" y2="208"/>
<line x1="398" y1="208" x2="398" y2="306"/>
<line x1="626" y1="208" x2="614" y2="208"/>
<line x1="614" y1="208" x2="614" y2="306"/>
<line x1="842" y1="208" x2="830" y2="208"/>
<line x1="830" y1="208" x2="830" y2="306"/>
<line x1="164" y1="280" x2="906" y2="280"/>
<line x1="258" y1="258" x2="258" y2="280"/>
<line x1="474" y1="258" x2="474" y2="280"/>
<line x1="690" y1="258" x2="690" y2="280"/>
<line x1="906" y1="258" x2="906" y2="280"/>
<rect x="126" y="148" width="50" height="62" rx="3"/>
<line x1="176" y1="168" x2="194" y2="168"/>
<line x1="86" y1="162" x2="126" y2="162"/>
<line x1="538" y1="168" x2="550" y2="168"/>
<line x1="550" y1="168" x2="550" y2="96"/>
<line x1="550" y1="96" x2="104" y2="96"/>
<line x1="104" y1="96" x2="104" y2="196"/>
<line x1="104" y1="196" x2="126" y2="196"/>
<line x1="151" y1="20" x2="151" y2="148"/>
<rect x="342" y="148" width="50" height="62" rx="3"/>
<line x1="392" y1="168" x2="410" y2="168"/>
<line x1="322" y1="168" x2="330" y2="168"/>
<line x1="330" y1="168" x2="330" y2="162"/>
<line x1="330" y1="162" x2="342" y2="162"/>
<line x1="754" y1="168" x2="766" y2="168"/>
<line x1="766" y1="168" x2="766" y2="112"/>
<line x1="766" y1="112" x2="314" y2="112"/>
<line x1="314" y1="112" x2="314" y2="196"/>
<line x1="314" y1="196" x2="342" y2="196"/>
<line x1="367" y1="20" x2="367" y2="148"/>
<rect x="558" y="148" width="50" height="62" rx="3"/>
<line x1="608" y1="168" x2="626" y2="168"/>
<line x1="538" y1="168" x2="546" y2="168"/>
<line x1="546" y1="168" x2="546" y2="162"/>
<line x1="546" y1="162" x2="558" y2="162"/>
<line x1="970" y1="168" x2="982" y2="168"/>
<line x1="982" y1="168" x2="982" y2="96"/>
<line x1="982" y1="96" x2="536" y2="96"/>
<line x1="536" y1="96" x2="536" y2="196"/>
<line x1="536" y1="196" x2="558" y2="196"/>
<line x1="583" y1="20" x2="583" y2="148"/>
<rect x="774" y="148" width="50" height="62" rx="3"/>
<line x1="824" y1="168" x2="842" y2="168"/>
<line x1="754" y1="168" x2="762" y2="168"/>
<line x1="762" y1="168" x2="762" y2="162"/>
<line x1="762" y1="162" x2="774" y2="162"/>
<line x1="774" y1="196" x2="762" y2="196"/>
<line x1="762" y1="196" x2="762" y2="238"/>
<line x1="799" y1="20" x2="799" y2="148"/>
<line x1="91" y1="20" x2="799" y2="20"/>
<line x1="970" y1="168" x2="1010" y2="168"/>
<circle cx="182" cy="306" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="398" cy="306" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="614" cy="306" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="830" cy="306" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="258" cy="280" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="474" cy="280" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="690" cy="280" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="906" cy="280" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="550" cy="168" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="151" cy="20" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="766" cy="168" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="367" cy="20" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="982" cy="168" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="583" cy="20" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="799" cy="20" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="262" y="196" text-anchor="middle" font-size="24">D</text>
<text x="227" y="173" text-anchor="start" font-size="14">D</text>
<text x="289" y="173" text-anchor="end" font-size="14">Q</text>
<text x="258" y="230" text-anchor="middle" font-size="10">CLR</text>
<text x="478" y="196" text-anchor="middle" font-size="24">C</text>
<text x="443" y="173" text-anchor="start" font-size="14">D</text>
<text x="505" y="173" text-anchor="end" font-size="14">Q</text>
<text x="474" y="230" text-anchor="middle" font-size="10">CLR</text>
<text x="694" y="196" text-anchor="middle" font-size="24">B</text>
<text x="659" y="173" text-anchor="start" font-size="14">D</text>
<text x="721" y="173" text-anchor="end" font-size="14">Q</text>
<text x="690" y="230" text-anchor="middle" font-size="10">CLR</text>
<text x="910" y="196" text-anchor="middle" font-size="24">A</text>
<text x="875" y="173" text-anchor="start" font-size="14">D</text>
<text x="937" y="173" text-anchor="end" font-size="14">Q</text>
<text x="906" y="230" text-anchor="middle" font-size="10">CLR</text>
<text x="160" y="312" text-anchor="end" font-size="15">Clock</text>
<text x="160" y="286" text-anchor="end" font-size="15">Reset</text>
<text x="151" y="176" text-anchor="middle" font-size="13">Sel</text>
<text x="151" y="192" text-anchor="middle" font-size="12">2:1</text>
<text x="82" y="167" text-anchor="end" font-size="13">Serial in (right)</text>
<text x="367" y="176" text-anchor="middle" font-size="13">Sel</text>
<text x="367" y="192" text-anchor="middle" font-size="12">2:1</text>
<text x="583" y="176" text-anchor="middle" font-size="13">Sel</text>
<text x="583" y="192" text-anchor="middle" font-size="12">2:1</text>
<text x="799" y="176" text-anchor="middle" font-size="13">Sel</text>
<text x="799" y="192" text-anchor="middle" font-size="12">2:1</text>
<text x="762" y="254" text-anchor="middle" font-size="12">Serial in (left)</text>
<text x="87" y="26" text-anchor="end" font-size="14">Right/Left</text>
<text x="310" y="154" text-anchor="middle" font-size="14">Q<tspan dy="4" font-size="9">D</tspan></text>
<text x="526" y="154" text-anchor="middle" font-size="14">Q<tspan dy="4" font-size="9">C</tspan></text>
<text x="742" y="154" text-anchor="middle" font-size="14">Q<tspan dy="4" font-size="9">B</tspan></text>
<text x="958" y="154" text-anchor="middle" font-size="14">Q<tspan dy="4" font-size="9">A</tspan></text>
</g>
</svg>
</div>

### ตัวอย่างที่ 7  Bidirectional Shift Register 4 บิต เริ่มต้น $Q_DQ_CQ_BQ_A = 1101$ ข้อมูลอนุกรมเข้าเป็น $0$ ตลอด ถ้า Right/Left เป็น $1,1,0,0,0,1,1,0,0$ ในแต่ละสัญญาณนาฬิกา (R = Shift ขวา, L = Shift ซ้าย) จงหา $Q_DQ_CQ_BQ_A$ หลังแต่ละครั้ง

$\mathbf{Sol}^{n}$

- Shift ขวา ($R$) : $Q_D \leftarrow 0$ (ข้อมูลเข้า), $Q_C \leftarrow Q_D$, $Q_B \leftarrow Q_C$, $Q_A \leftarrow Q_B$
- Shift ซ้าย ($L$) : $Q_D \leftarrow Q_C$, $Q_C \leftarrow Q_B$, $Q_B \leftarrow Q_A$, $Q_A \leftarrow 0$
- ทำทีละครั้ง ใช้ค่าก่อนเลื่อนของทุกตัวพร้อมกัน

$\mathbf{Ans}\quad \text{ตามตารางด้านล่าง}$

| ครั้งที่ | ทิศ | $Q_D$ | $Q_C$ | $Q_B$ | $Q_A$ |
|:-:|:-:|:-:|:-:|:-:|:-:|
| 0 | - | 1 | 1 | 0 | 1 |
| 1 | R | 0 | 1 | 1 | 0 |
| 2 | R | 0 | 0 | 1 | 1 |
| 3 | L | 0 | 1 | 1 | 0 |
| 4 | L | 1 | 1 | 0 | 0 |
| 5 | L | 1 | 0 | 0 | 0 |
| 6 | R | 0 | 1 | 0 | 0 |
| 7 | R | 0 | 0 | 1 | 0 |
| 8 | L | 0 | 1 | 0 | 0 |
| 9 | L | 1 | 0 | 0 | 0 |

### ตัวอย่างที่ 8  รีจิสเตอร์ 4 บิตมี $Q_DQ_CQ_BQ_A = 1011$ ทำ Rotate right 4 ครั้ง และ Rotate left 4 ครั้ง จงหาค่าหลังแต่ละครั้ง และตอบว่าหลังกี่ครั้งจึงกลับมาเป็นค่าเดิม

$\mathbf{Sol}^{n}$

- Rotate right : บิตขวาสุด $Q_A$ ส่งกลับไปเข้า $Q_D$ ที่ซ้ายสุด $(Q_D, Q_C, Q_B, Q_A) \leftarrow (Q_A, Q_D, Q_C, Q_B)$
- Rotate left : บิตซ้ายสุด $Q_D$ ส่งกลับไปเข้า $Q_A$ ที่ขวาสุด $(Q_D, Q_C, Q_B, Q_A) \leftarrow (Q_C, Q_B, Q_A, Q_D)$
- รีจิสเตอร์ $n$ บิตกลับมาเป็นค่าเดิมหลัง $n$ ครั้ง ($n = 4$)

$\mathbf{Ans}\quad \text{กลับเป็นค่าเดิมหลัง 4 ครั้ง}$

| ครั้งที่ | Rotate right $Q_DQ_CQ_BQ_A$ | Rotate left $Q_DQ_CQ_BQ_A$ |
|:-:|:-:|:-:|
| 0 | 1011 | 1011 |
| 1 | 1101 | 0111 |
| 2 | 1110 | 1110 |
| 3 | 0111 | 1101 |
| 4 | 1011 | 1011 |

### 1.8 วงจรบวกแบบอนุกรม (Serial Adder)

**วงจรบวกแบบอนุกรม** ประกอบด้วยวงจร Register แบบอนุกรมเข้า-อนุกรมออกเป็น **Register A** และ **Register B** รวมทั้ง **วงจรบวก 1 บิต (Full Adder)** และ **D Flip-Flop** (ใช้เก็บตัวทด) ใช้วงจรบวกตัวเดียวบวกเลขทีละบิต จึงใช้ฮาร์ดแวร์น้อย

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="850" height="280" viewBox="0 0 850 280" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(70,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<rect x="100" y="40" width="44" height="36" rx="0"/>
<rect x="144" y="40" width="44" height="36" rx="0"/>
<rect x="188" y="40" width="44" height="36" rx="0"/>
<rect x="232" y="40" width="44" height="36" rx="0"/>
<rect x="276" y="40" width="44" height="36" rx="0"/>
<rect x="100" y="160" width="44" height="36" rx="0"/>
<rect x="144" y="160" width="44" height="36" rx="0"/>
<rect x="188" y="160" width="44" height="36" rx="0"/>
<rect x="232" y="160" width="44" height="36" rx="0"/>
<rect x="276" y="160" width="44" height="36" rx="0"/>
<rect x="400" y="100" width="100" height="50" rx="3"/>
<line x1="320" y1="58" x2="360" y2="58"/>
<line x1="320" y1="58" x2="360" y2="58"/>
<line x1="360" y1="58" x2="360" y2="114"/>
<line x1="360" y1="114" x2="400" y2="114"/>
<line x1="320" y1="178" x2="350" y2="178"/>
<line x1="350" y1="178" x2="350" y2="136"/>
<line x1="350" y1="136" x2="400" y2="136"/>
<line x1="500" y1="125" x2="540" y2="125"/>
<line x1="540" y1="125" x2="540" y2="20"/>
<line x1="540" y1="20" x2="88" y2="20"/>
<line x1="88" y1="20" x2="88" y2="58"/>
<line x1="88" y1="58" x2="100" y2="58"/>
<rect x="570" y="190" width="70" height="56" rx="3"/>
<line x1="450" y1="150" x2="450" y2="218"/>
<line x1="450" y1="218" x2="570" y2="218"/>
<line x1="640" y1="218" x2="670" y2="218"/>
<line x1="670" y1="218" x2="670" y2="84"/>
<line x1="670" y1="84" x2="440" y2="84"/>
<line x1="440" y1="84" x2="440" y2="100"/>
<line x1="104" y1="256" x2="310" y2="256"/>
</g>
<text x="122" y="64" text-anchor="middle" font-size="15">A<tspan dy="4" font-size="10">4</tspan></text>
<text x="166" y="64" text-anchor="middle" font-size="15">A<tspan dy="4" font-size="10">3</tspan></text>
<text x="210" y="64" text-anchor="middle" font-size="15">A<tspan dy="4" font-size="10">2</tspan></text>
<text x="254" y="64" text-anchor="middle" font-size="15">A<tspan dy="4" font-size="10">1</tspan></text>
<text x="298" y="64" text-anchor="middle" font-size="15">A<tspan dy="4" font-size="10">0</tspan></text>
<text x="92" y="64" text-anchor="end" font-size="15">Register A</text>
<text x="122" y="184" text-anchor="middle" font-size="15">B<tspan dy="4" font-size="10">4</tspan></text>
<text x="166" y="184" text-anchor="middle" font-size="15">B<tspan dy="4" font-size="10">3</tspan></text>
<text x="210" y="184" text-anchor="middle" font-size="15">B<tspan dy="4" font-size="10">2</tspan></text>
<text x="254" y="184" text-anchor="middle" font-size="15">B<tspan dy="4" font-size="10">1</tspan></text>
<text x="298" y="184" text-anchor="middle" font-size="15">B<tspan dy="4" font-size="10">0</tspan></text>
<text x="92" y="184" text-anchor="end" font-size="15">Register B</text>
<text x="450" y="130" text-anchor="middle" font-size="16">Adder</text>
<text x="548" y="124" text-anchor="start" font-size="14">Sum</text>
<text x="605" y="224" text-anchor="middle" font-size="18">D</text>
<text x="520" y="212" text-anchor="middle" font-size="13">Carry</text>
<text x="676" y="150" text-anchor="start" font-size="13">Carry in</text>
<text x="100" y="262" text-anchor="end" font-size="15">Clock</text>
</g>
</svg>
</div>

**ลักษณะการทำงาน**

1. เริ่มต้นล้าง Register A, Register B และ D Flip-Flop ให้เป็น $0$ แล้วนำข้อมูลเข้าใส่ใน Register A และ B
2. ให้สัญญาณนาฬิกา ข้อมูลที่ $A_0$ ของ Register A และ $B_0$ ของ Register B ถูกนำไปบวกกันในวงจรบวก (พร้อมตัวทดจาก D Flip-Flop) ผลลัพธ์ถูกเลื่อนไปเก็บไว้ที่บิต $A_4$ ของ Register A ส่วนตัวทดผ่าน D Flip-Flop เพื่อหน่วงเวลาไว้บวกกับบิตต่อมา
3. เมื่อมีสัญญาณนาฬิกาลูกต่อไป ข้อมูลที่ $A_1$ และ $B_1$ ถูกเลื่อนออกมาเข้าวงจรบวกพร้อมตัวทดจาก D Flip-Flop ผลลัพธ์ถูกเลื่อนไปเก็บที่ Register A ตัวทดเก็บไว้ที่ D Flip-Flop
4. เมื่อเลขทุกบิตถูกบวกเรียบร้อย ผลลัพธ์ถูกเก็บไว้ใน Register A และข้อมูลเดิมใน Register A ถูกล้างทิ้งไป

$$S_i = A_i \oplus B_i \oplus C_i,\qquad C_{i+1} = A_iB_i + A_iC_i + B_iC_i$$

เลข $n$ บิตใช้สัญญาณนาฬิกา $n$ ครั้ง (วงจรบวกแบบขนานใช้เวลา 1 ครั้งแต่ต้องมี Full Adder $n$ ตัว)

### ตัวอย่างที่ 9  Serial Adder 5 บิต Register A $= 10101$ ($A_4A_3A_2A_1A_0$) และ Register B $= 00011$ ($B_4B_3B_2B_1B_0$) เริ่มต้นตัวทด $= 0$ จงหาผลบวกที่เก็บใน Register A หลังสัญญาณนาฬิกาครบ 5 ครั้ง

$\mathbf{Sol}^{n}$

- ผลบวกทีละบิตใช้ Full Adder : $S = A \oplus B \oplus C_{in}$ และตัวทดออก $C_{out} = AB + AC_{in} + BC_{in}$
- ที่สัญญาณนาฬิกาแต่ละครั้ง ใช้บิต $A_0$ และ $B_0$ ที่ปลายขวา (เริ่มจากบิตต่ำสุด) บวกกับตัวทดที่เก็บใน D Flip-Flop แล้วเลื่อนผลบวกเข้า $A_4$ ส่วนตัวทดออกเก็บใน D Flip-Flop ไว้ใช้บิตถัดไป
- ข้อมูลใน Register A และ B เลื่อนไปทางขวา 1 บิตทุกครั้ง บิตถัดไปจึงมาอยู่ที่ $A_0$ และ $B_0$

- ตารางต่อไปนี้แสดงการบวกแต่ละครั้ง (บิตต่ำสุดก่อน)

| ครั้งที่ | $A$ (บิตที่เข้าวงจรบวก) | $B$ (บิตที่เข้าวงจรบวก) | ตัวทดเข้า ($C_{in}$) | ผลบวก ($S$) | ตัวทดออก ($C_{out}$) |
|:-:|:-:|:-:|:-:|:-:|:-:|
| 1 | A0 = 1 | B0 = 1 | 0 | 0 | 1 |
| 2 | A1 = 0 | B1 = 1 | 1 | 0 | 1 |
| 3 | A2 = 1 | B2 = 0 | 1 | 0 | 1 |
| 4 | A3 = 0 | B3 = 0 | 1 | 1 | 0 |
| 5 | A4 = 1 | B4 = 0 | 0 | 1 | 0 |

- ผลบวกแต่ละบิตเลื่อนเข้า $A_4$ ทีละบิต เมื่อครบ 5 ครั้ง บิตแรก ($S_0 = 0$) ไปอยู่ที่ $A_0$ และบิตสุดท้าย ($S_4 = 1$) อยู่ที่ $A_4$ จึงได้ $A_4A_3A_2A_1A_0 = S_4S_3S_2S_1S_0 = 11000$
- ตรวจ : $10101_2 + 00011_2 = 21 + 3 = 24 = 11000_2$ และตัวทดสุดท้าย $= 0$ ไม่มีล้น

$\mathbf{Ans}\quad \text{Register A} = 11000 \ (= 24)$

### 1.9 สรุปรีจิสเตอร์

| ชนิด | ข้อมูลเข้า | ข้อมูลออก | สัญญาณนาฬิกาที่ใช้เก็บ $n$ บิต | ลักษณะเด่น |
|:--|:--|:--|:--|:--|
| SISO | อนุกรม | อนุกรม | $n$ ลูก (ป้อน) และ $n$ ลูก (อ่านออก) | ฟลิป-ฟลอปต่อกันเป็นลูกโซ่ เลื่อนทีละบิต |
| SIPO | อนุกรม | ขนาน | $n$ ลูก แล้วอ่านทุกบิตพร้อมกัน | ต่อเอาต์พุตของทุกตัว (ใช้ Transfer Pulse ควบคุม) |
| PISO | ขนาน | อนุกรม | 1 ลูก (Latch) แล้วเลื่อนออก $n$ ลูก | ใช้ Latch ควบคุม SET/CLR ของแต่ละตัว |
| PIPO | ขนาน | ขนาน | 1 ลูก | ไม่มีการเลื่อน เร็วที่สุด |

| ชนิดพิเศษ | ลักษณะ |
|:--|:--|
| Shift Right / Shift Left | เลื่อนไปทางขวา / ซ้ายทีละบิต บิตที่หลุดทิ้ง เติมข้อมูลใหม่หรือ $0$ |
| Rotate Right / Rotate Left | เลื่อนแบบวนรอบ บิตที่หลุดส่งกลับเข้าอีกด้าน ไม่มีข้อมูลหาย ครบ $n$ ครั้งกลับเป็นค่าเดิม |
| Bidirectional | เลื่อนได้ทั้งสองทิศ เลือกด้วยสัญญาณ Right/Left (1 = ขวา, 0 = ซ้าย) |
| Serial Adder | Register A, B แบบ SISO + Full Adder 1 ตัว + D Flip-Flop เก็บตัวทด บวกทีละบิตใน $n$ ลูกนาฬิกา |

## 2. หน่วยความจำ (Memory)

### 2.1 หน่วยความจำคืออะไร

**Memory (หน่วยความจำ)** เป็นส่วนหนึ่งของระบบดิจิทัลหรือระบบคอมพิวเตอร์ที่ใช้ในการเก็บรักษาข้อมูลทางไบนารีขนาดใหญ่ที่มีจำนวนข้อมูลมาก ในปัจจุบัน Memory ที่ใช้กันคือ Memory ที่สร้างจากสารกึ่งตัวนำ (Semiconductor) ซึ่งมักมีโครงสร้างเป็น **อาร์เรย์ (Array)**

**หน่วยของข้อมูลทางไบนารี**

| หน่วย | ขนาด |
|:--|:--|
| บิต (Bit) | 1 บิต (ค่า 0 หรือ 1) |
| นิบเบิล (Nibble) | 4 บิต |
| ไบต์ (Byte) | 8 บิต |
| เวิร์ด (Word) | ตั้งแต่ 1 ไบต์ไปจนมีขนาดหลายไบต์ |

**เซลล์ (Cell)** คือส่วนที่ใช้เก็บข้อมูล 0 หรือ 1 หนึ่งบิต Memory ประกอบขึ้นจากอาร์เรย์ของเซลล์ รูปด้านล่างแสดงเซลล์ 64 เซลล์ จัดเป็นอาร์เรย์ได้หลายแบบ (a) $8 \times 8$ (b) $16 \times 4$ (c) $64 \times 1$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="420" height="348" viewBox="0 0 420 348" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<rect x="20" y="20" width="18" height="18" rx="0"/>
<rect x="38" y="20" width="18" height="18" rx="0"/>
<rect x="56" y="20" width="18" height="18" rx="0"/>
<rect x="74" y="20" width="18" height="18" rx="0"/>
<rect x="92" y="20" width="18" height="18" rx="0"/>
<rect x="110" y="20" width="18" height="18" rx="0"/>
<rect x="128" y="20" width="18" height="18" rx="0"/>
<rect x="146" y="20" width="18" height="18" rx="0"/>
<rect x="20" y="38" width="18" height="18" rx="0"/>
<rect x="38" y="38" width="18" height="18" rx="0"/>
<rect x="56" y="38" width="18" height="18" rx="0"/>
<rect x="74" y="38" width="18" height="18" rx="0"/>
<rect x="92" y="38" width="18" height="18" rx="0"/>
<rect x="110" y="38" width="18" height="18" rx="0"/>
<rect x="128" y="38" width="18" height="18" rx="0"/>
<rect x="146" y="38" width="18" height="18" rx="0"/>
<rect x="20" y="56" width="18" height="18" rx="0"/>
<rect x="38" y="56" width="18" height="18" rx="0"/>
<rect x="56" y="56" width="18" height="18" rx="0"/>
<rect x="74" y="56" width="18" height="18" rx="0"/>
<rect x="92" y="56" width="18" height="18" rx="0"/>
<rect x="110" y="56" width="18" height="18" rx="0"/>
<rect x="128" y="56" width="18" height="18" rx="0"/>
<rect x="146" y="56" width="18" height="18" rx="0"/>
<rect x="20" y="74" width="18" height="18" rx="0"/>
<rect x="38" y="74" width="18" height="18" rx="0"/>
<rect x="56" y="74" width="18" height="18" rx="0"/>
<rect x="74" y="74" width="18" height="18" rx="0"/>
<rect x="92" y="74" width="18" height="18" rx="0"/>
<rect x="110" y="74" width="18" height="18" rx="0"/>
<rect x="128" y="74" width="18" height="18" rx="0"/>
<rect x="146" y="74" width="18" height="18" rx="0"/>
<rect x="20" y="92" width="18" height="18" rx="0"/>
<rect x="38" y="92" width="18" height="18" rx="0"/>
<rect x="56" y="92" width="18" height="18" rx="0"/>
<rect x="74" y="92" width="18" height="18" rx="0"/>
<rect x="92" y="92" width="18" height="18" rx="0"/>
<rect x="110" y="92" width="18" height="18" rx="0"/>
<rect x="128" y="92" width="18" height="18" rx="0"/>
<rect x="146" y="92" width="18" height="18" rx="0"/>
<rect x="20" y="110" width="18" height="18" rx="0"/>
<rect x="38" y="110" width="18" height="18" rx="0"/>
<rect x="56" y="110" width="18" height="18" rx="0"/>
<rect x="74" y="110" width="18" height="18" rx="0"/>
<rect x="92" y="110" width="18" height="18" rx="0"/>
<rect x="110" y="110" width="18" height="18" rx="0"/>
<rect x="128" y="110" width="18" height="18" rx="0"/>
<rect x="146" y="110" width="18" height="18" rx="0"/>
<rect x="20" y="128" width="18" height="18" rx="0"/>
<rect x="38" y="128" width="18" height="18" rx="0"/>
<rect x="56" y="128" width="18" height="18" rx="0"/>
<rect x="74" y="128" width="18" height="18" rx="0"/>
<rect x="92" y="128" width="18" height="18" rx="0"/>
<rect x="110" y="128" width="18" height="18" rx="0"/>
<rect x="128" y="128" width="18" height="18" rx="0"/>
<rect x="146" y="128" width="18" height="18" rx="0"/>
<rect x="20" y="146" width="18" height="18" rx="0"/>
<rect x="38" y="146" width="18" height="18" rx="0"/>
<rect x="56" y="146" width="18" height="18" rx="0"/>
<rect x="74" y="146" width="18" height="18" rx="0"/>
<rect x="92" y="146" width="18" height="18" rx="0"/>
<rect x="110" y="146" width="18" height="18" rx="0"/>
<rect x="128" y="146" width="18" height="18" rx="0"/>
<rect x="146" y="146" width="18" height="18" rx="0"/>
<rect x="220" y="20" width="18" height="18" rx="0"/>
<rect x="238" y="20" width="18" height="18" rx="0"/>
<rect x="256" y="20" width="18" height="18" rx="0"/>
<rect x="274" y="20" width="18" height="18" rx="0"/>
<rect x="220" y="38" width="18" height="18" rx="0"/>
<rect x="238" y="38" width="18" height="18" rx="0"/>
<rect x="256" y="38" width="18" height="18" rx="0"/>
<rect x="274" y="38" width="18" height="18" rx="0"/>
<rect x="220" y="56" width="18" height="18" rx="0"/>
<rect x="238" y="56" width="18" height="18" rx="0"/>
<rect x="256" y="56" width="18" height="18" rx="0"/>
<rect x="274" y="56" width="18" height="18" rx="0"/>
<rect x="220" y="74" width="18" height="18" rx="0"/>
<rect x="238" y="74" width="18" height="18" rx="0"/>
<rect x="256" y="74" width="18" height="18" rx="0"/>
<rect x="274" y="74" width="18" height="18" rx="0"/>
<rect x="220" y="92" width="18" height="18" rx="0"/>
<rect x="238" y="92" width="18" height="18" rx="0"/>
<rect x="256" y="92" width="18" height="18" rx="0"/>
<rect x="274" y="92" width="18" height="18" rx="0"/>
<rect x="220" y="110" width="18" height="18" rx="0"/>
<rect x="238" y="110" width="18" height="18" rx="0"/>
<rect x="256" y="110" width="18" height="18" rx="0"/>
<rect x="274" y="110" width="18" height="18" rx="0"/>
<rect x="220" y="128" width="18" height="18" rx="0"/>
<rect x="238" y="128" width="18" height="18" rx="0"/>
<rect x="256" y="128" width="18" height="18" rx="0"/>
<rect x="274" y="128" width="18" height="18" rx="0"/>
<rect x="220" y="146" width="18" height="18" rx="0"/>
<rect x="238" y="146" width="18" height="18" rx="0"/>
<rect x="256" y="146" width="18" height="18" rx="0"/>
<rect x="274" y="146" width="18" height="18" rx="0"/>
<rect x="220" y="164" width="18" height="18" rx="0"/>
<rect x="238" y="164" width="18" height="18" rx="0"/>
<rect x="256" y="164" width="18" height="18" rx="0"/>
<rect x="274" y="164" width="18" height="18" rx="0"/>
<rect x="220" y="182" width="18" height="18" rx="0"/>
<rect x="238" y="182" width="18" height="18" rx="0"/>
<rect x="256" y="182" width="18" height="18" rx="0"/>
<rect x="274" y="182" width="18" height="18" rx="0"/>
<rect x="220" y="200" width="18" height="18" rx="0"/>
<rect x="238" y="200" width="18" height="18" rx="0"/>
<rect x="256" y="200" width="18" height="18" rx="0"/>
<rect x="274" y="200" width="18" height="18" rx="0"/>
<rect x="220" y="218" width="18" height="18" rx="0"/>
<rect x="238" y="218" width="18" height="18" rx="0"/>
<rect x="256" y="218" width="18" height="18" rx="0"/>
<rect x="274" y="218" width="18" height="18" rx="0"/>
<rect x="220" y="236" width="18" height="18" rx="0"/>
<rect x="238" y="236" width="18" height="18" rx="0"/>
<rect x="256" y="236" width="18" height="18" rx="0"/>
<rect x="274" y="236" width="18" height="18" rx="0"/>
<rect x="220" y="254" width="18" height="18" rx="0"/>
<rect x="238" y="254" width="18" height="18" rx="0"/>
<rect x="256" y="254" width="18" height="18" rx="0"/>
<rect x="274" y="254" width="18" height="18" rx="0"/>
<rect x="220" y="272" width="18" height="18" rx="0"/>
<rect x="238" y="272" width="18" height="18" rx="0"/>
<rect x="256" y="272" width="18" height="18" rx="0"/>
<rect x="274" y="272" width="18" height="18" rx="0"/>
<rect x="220" y="290" width="18" height="18" rx="0"/>
<rect x="238" y="290" width="18" height="18" rx="0"/>
<rect x="256" y="290" width="18" height="18" rx="0"/>
<rect x="274" y="290" width="18" height="18" rx="0"/>
<rect x="350" y="20" width="18" height="18" rx="0"/>
<rect x="350" y="38" width="18" height="18" rx="0"/>
<rect x="350" y="56" width="18" height="18" rx="0"/>
<rect x="350" y="74" width="18" height="18" rx="0"/>
<rect x="350" y="92" width="18" height="18" rx="0"/>
<rect x="350" y="134" width="18" height="18" rx="0"/>
<rect x="350" y="152" width="18" height="18" rx="0"/>
<rect x="350" y="170" width="18" height="18" rx="0"/>
</g>
<text x="92" y="186" text-anchor="middle" font-size="14">(a) 8 x 8</text>
<text x="256" y="330" text-anchor="middle" font-size="14">(b) 16 x 4</text>
<text x="359" y="126" text-anchor="middle" font-size="16">...</text>
<text x="359" y="234" text-anchor="middle" font-size="14">(c) 64 x 1</text>
</g>
</svg>
</div>

**แอดเดรส (Address)** คือตำแหน่งของข้อมูลหนึ่งหน่วยที่เก็บในอาร์เรย์ของ Memory ตัวอย่าง (a) แอดเดรสของบิตที่ระบายสีคือ แถว 5 คอลัมน์ 4 (b) แอดเดรสของไบต์ที่ระบายสีคือ แถว 3

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="260" height="274" viewBox="0 0 260 274" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.4" fill="none">
<rect x="36" y="14" width="26" height="26"/>
<rect x="62" y="14" width="26" height="26"/>
<rect x="88" y="14" width="26" height="26"/>
<rect x="114" y="14" width="26" height="26"/>
<rect x="140" y="14" width="26" height="26"/>
<rect x="166" y="14" width="26" height="26"/>
<rect x="192" y="14" width="26" height="26"/>
<rect x="218" y="14" width="26" height="26"/>
<rect x="36" y="40" width="26" height="26"/>
<rect x="62" y="40" width="26" height="26"/>
<rect x="88" y="40" width="26" height="26"/>
<rect x="114" y="40" width="26" height="26"/>
<rect x="140" y="40" width="26" height="26"/>
<rect x="166" y="40" width="26" height="26"/>
<rect x="192" y="40" width="26" height="26"/>
<rect x="218" y="40" width="26" height="26"/>
<rect x="36" y="66" width="26" height="26"/>
<rect x="62" y="66" width="26" height="26"/>
<rect x="88" y="66" width="26" height="26"/>
<rect x="114" y="66" width="26" height="26"/>
<rect x="140" y="66" width="26" height="26"/>
<rect x="166" y="66" width="26" height="26"/>
<rect x="192" y="66" width="26" height="26"/>
<rect x="218" y="66" width="26" height="26"/>
<rect x="36" y="92" width="26" height="26"/>
<rect x="62" y="92" width="26" height="26"/>
<rect x="88" y="92" width="26" height="26"/>
<rect x="114" y="92" width="26" height="26"/>
<rect x="140" y="92" width="26" height="26"/>
<rect x="166" y="92" width="26" height="26"/>
<rect x="192" y="92" width="26" height="26"/>
<rect x="218" y="92" width="26" height="26"/>
<rect x="36" y="118" width="26" height="26"/>
<rect x="62" y="118" width="26" height="26"/>
<rect x="88" y="118" width="26" height="26"/>
<rect x="114" y="118" width="26" height="26" fill="currentColor" fill-opacity="0.85"/>
<rect x="140" y="118" width="26" height="26"/>
<rect x="166" y="118" width="26" height="26"/>
<rect x="192" y="118" width="26" height="26"/>
<rect x="218" y="118" width="26" height="26"/>
<rect x="36" y="144" width="26" height="26"/>
<rect x="62" y="144" width="26" height="26"/>
<rect x="88" y="144" width="26" height="26"/>
<rect x="114" y="144" width="26" height="26"/>
<rect x="140" y="144" width="26" height="26"/>
<rect x="166" y="144" width="26" height="26"/>
<rect x="192" y="144" width="26" height="26"/>
<rect x="218" y="144" width="26" height="26"/>
<rect x="36" y="170" width="26" height="26"/>
<rect x="62" y="170" width="26" height="26"/>
<rect x="88" y="170" width="26" height="26"/>
<rect x="114" y="170" width="26" height="26"/>
<rect x="140" y="170" width="26" height="26"/>
<rect x="166" y="170" width="26" height="26"/>
<rect x="192" y="170" width="26" height="26"/>
<rect x="218" y="170" width="26" height="26"/>
<rect x="36" y="196" width="26" height="26"/>
<rect x="62" y="196" width="26" height="26"/>
<rect x="88" y="196" width="26" height="26"/>
<rect x="114" y="196" width="26" height="26"/>
<rect x="140" y="196" width="26" height="26"/>
<rect x="166" y="196" width="26" height="26"/>
<rect x="192" y="196" width="26" height="26"/>
<rect x="218" y="196" width="26" height="26"/>
</g>
<text x="29" y="32" text-anchor="end" font-size="14">1</text>
<text x="29" y="58" text-anchor="end" font-size="14">2</text>
<text x="29" y="84" text-anchor="end" font-size="14">3</text>
<text x="29" y="110" text-anchor="end" font-size="14">4</text>
<text x="29" y="136" text-anchor="end" font-size="14">5</text>
<text x="29" y="162" text-anchor="end" font-size="14">6</text>
<text x="29" y="188" text-anchor="end" font-size="14">7</text>
<text x="29" y="214" text-anchor="end" font-size="14">8</text>
<text x="49" y="240" text-anchor="middle" font-size="14">1</text>
<text x="75" y="240" text-anchor="middle" font-size="14">2</text>
<text x="101" y="240" text-anchor="middle" font-size="14">3</text>
<text x="127" y="240" text-anchor="middle" font-size="14">4</text>
<text x="153" y="240" text-anchor="middle" font-size="14">5</text>
<text x="179" y="240" text-anchor="middle" font-size="14">6</text>
<text x="205" y="240" text-anchor="middle" font-size="14">7</text>
<text x="231" y="240" text-anchor="middle" font-size="14">8</text>
<text x="140" y="268" text-anchor="middle" font-size="14">(a) บิตที่ระบายสี : แถว 5, คอลัมน์ 4</text>
</svg>
</div>

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="260" height="274" viewBox="0 0 260 274" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.4" fill="none">
<rect x="36" y="14" width="26" height="26"/>
<rect x="62" y="14" width="26" height="26"/>
<rect x="88" y="14" width="26" height="26"/>
<rect x="114" y="14" width="26" height="26"/>
<rect x="140" y="14" width="26" height="26"/>
<rect x="166" y="14" width="26" height="26"/>
<rect x="192" y="14" width="26" height="26"/>
<rect x="218" y="14" width="26" height="26"/>
<rect x="36" y="40" width="26" height="26"/>
<rect x="62" y="40" width="26" height="26"/>
<rect x="88" y="40" width="26" height="26"/>
<rect x="114" y="40" width="26" height="26"/>
<rect x="140" y="40" width="26" height="26"/>
<rect x="166" y="40" width="26" height="26"/>
<rect x="192" y="40" width="26" height="26"/>
<rect x="218" y="40" width="26" height="26"/>
<rect x="36" y="66" width="26" height="26" fill="currentColor" fill-opacity="0.85"/>
<rect x="62" y="66" width="26" height="26" fill="currentColor" fill-opacity="0.85"/>
<rect x="88" y="66" width="26" height="26" fill="currentColor" fill-opacity="0.85"/>
<rect x="114" y="66" width="26" height="26" fill="currentColor" fill-opacity="0.85"/>
<rect x="140" y="66" width="26" height="26" fill="currentColor" fill-opacity="0.85"/>
<rect x="166" y="66" width="26" height="26" fill="currentColor" fill-opacity="0.85"/>
<rect x="192" y="66" width="26" height="26" fill="currentColor" fill-opacity="0.85"/>
<rect x="218" y="66" width="26" height="26" fill="currentColor" fill-opacity="0.85"/>
<rect x="36" y="92" width="26" height="26"/>
<rect x="62" y="92" width="26" height="26"/>
<rect x="88" y="92" width="26" height="26"/>
<rect x="114" y="92" width="26" height="26"/>
<rect x="140" y="92" width="26" height="26"/>
<rect x="166" y="92" width="26" height="26"/>
<rect x="192" y="92" width="26" height="26"/>
<rect x="218" y="92" width="26" height="26"/>
<rect x="36" y="118" width="26" height="26"/>
<rect x="62" y="118" width="26" height="26"/>
<rect x="88" y="118" width="26" height="26"/>
<rect x="114" y="118" width="26" height="26"/>
<rect x="140" y="118" width="26" height="26"/>
<rect x="166" y="118" width="26" height="26"/>
<rect x="192" y="118" width="26" height="26"/>
<rect x="218" y="118" width="26" height="26"/>
<rect x="36" y="144" width="26" height="26"/>
<rect x="62" y="144" width="26" height="26"/>
<rect x="88" y="144" width="26" height="26"/>
<rect x="114" y="144" width="26" height="26"/>
<rect x="140" y="144" width="26" height="26"/>
<rect x="166" y="144" width="26" height="26"/>
<rect x="192" y="144" width="26" height="26"/>
<rect x="218" y="144" width="26" height="26"/>
<rect x="36" y="170" width="26" height="26"/>
<rect x="62" y="170" width="26" height="26"/>
<rect x="88" y="170" width="26" height="26"/>
<rect x="114" y="170" width="26" height="26"/>
<rect x="140" y="170" width="26" height="26"/>
<rect x="166" y="170" width="26" height="26"/>
<rect x="192" y="170" width="26" height="26"/>
<rect x="218" y="170" width="26" height="26"/>
<rect x="36" y="196" width="26" height="26"/>
<rect x="62" y="196" width="26" height="26"/>
<rect x="88" y="196" width="26" height="26"/>
<rect x="114" y="196" width="26" height="26"/>
<rect x="140" y="196" width="26" height="26"/>
<rect x="166" y="196" width="26" height="26"/>
<rect x="192" y="196" width="26" height="26"/>
<rect x="218" y="196" width="26" height="26"/>
</g>
<text x="29" y="32" text-anchor="end" font-size="14">1</text>
<text x="29" y="58" text-anchor="end" font-size="14">2</text>
<text x="29" y="84" text-anchor="end" font-size="14">3</text>
<text x="29" y="110" text-anchor="end" font-size="14">4</text>
<text x="29" y="136" text-anchor="end" font-size="14">5</text>
<text x="29" y="162" text-anchor="end" font-size="14">6</text>
<text x="29" y="188" text-anchor="end" font-size="14">7</text>
<text x="29" y="214" text-anchor="end" font-size="14">8</text>
<text x="49" y="240" text-anchor="middle" font-size="14">1</text>
<text x="75" y="240" text-anchor="middle" font-size="14">2</text>
<text x="101" y="240" text-anchor="middle" font-size="14">3</text>
<text x="127" y="240" text-anchor="middle" font-size="14">4</text>
<text x="153" y="240" text-anchor="middle" font-size="14">5</text>
<text x="179" y="240" text-anchor="middle" font-size="14">6</text>
<text x="205" y="240" text-anchor="middle" font-size="14">7</text>
<text x="231" y="240" text-anchor="middle" font-size="14">8</text>
<text x="140" y="268" text-anchor="middle" font-size="14">(b) ไบต์ที่ระบายสี : แถว 3</text>
</svg>
</div>

**ขนาดของ Memory** หมายถึงจำนวนของหน่วยข้อมูลที่เก็บได้ ในรูป $8 \times 8$ ถ้าพิจารณาเป็นบิต Memory ขนาด 64 บิต ถ้าพิจารณาเป็นไบต์จะมี 8 ไบต์

$$\text{ขนาด (บิต)} = \text{จำนวนแอดเดรส} \times \text{จำนวนบิตต่อแอดเดรส (ความยาวเวิร์ด)}$$

### ตัวอย่างที่ 10  Memory อาร์เรย์ $16 \times 4$ (16 แถว แถวละ 4 บิต) และ $64 \times 1$ เก็บข้อมูลได้กี่บิตและกี่ไบต์ มีแอดเดรสกี่แอดเดรส

$\mathbf{Sol}^{n}$

- ขนาดเป็นบิต = จำนวนแถว (แอดเดรส) $\times$ จำนวนบิตต่อแถว
- $16 \times 4 = 64$ บิต : มี 16 แอดเดรส แอดเดรสละ 4 บิต
- $64 \times 1 = 64$ บิต : มี 64 แอดเดรส แอดเดรสละ 1 บิต
- ทั้งสองแบบ $64$ บิต $= 64 \div 8 = 8$ ไบต์ (เซลล์ชุดเดียวกันจัดเป็นอาร์เรย์ได้หลายแบบ จึงต่างกันที่จำนวนแอดเดรสและความยาวเวิร์ด)

$\mathbf{Ans}\quad 16\times4:\ 64 \text{ บิต}=8 \text{ ไบต์},\ 16 \text{ แอดเดรส} \ ;\ 64\times1:\ 64 \text{ บิต}=8 \text{ ไบต์},\ 64 \text{ แอดเดรส}$

### 2.2 การทำงานของ Memory

Memory จดจำข้อมูลได้ จึงต้องนำข้อมูลจากภายนอกใส่เข้าไปใน Memory ได้ และนำข้อมูลที่จำอยู่ออกมาใช้ได้ (โดยข้อมูลที่จำอยู่ยังคงอยู่ใน Memory)

- **การเขียนข้อมูล (Write)** : นำข้อมูลเข้าไปเก็บในแอดเดรสที่กำหนดใน Memory
- **การอ่านข้อมูล (Read)** : นำข้อมูลที่เก็บอยู่ในแอดเดรสที่กำหนดออกมา (ข้อมูลยังอยู่ใน Memory)

**บัสของ Memory**

- **บัสข้อมูล (Data Bus)** : ชุดสายส่งที่ใช้นำข้อมูลเข้าในการเขียน และนำข้อมูลออกในการอ่าน เป็นแบบ **สองทิศทาง** (ข้อมูลเข้าทางไหนและออกทางไหนก็ได้)
- **แอดเดรสบัส (Address Bus)** : สายที่ใช้เลือกตำแหน่งหรือแอดเดรสของ Memory ทั้งในการอ่านและการเขียน ค่าที่เลือกผ่านแอดเดรสบัสถูกถอดรหัสโดยวงจรภายใน Memory ที่เรียกว่า **Address Decoder** เพื่อเลือกแอดเดรสที่ต้องการ
- **สัญญาณควบคุม (Control)** : Read และ Write

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="620" height="260" viewBox="0 0 620 260" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(20,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<rect x="150" y="40" width="100" height="120" rx="2"/>
<rect x="280" y="40" width="190" height="120" rx="2"/>
<line x1="250" y1="62" x2="280" y2="62"/>
<line x1="250" y1="82" x2="280" y2="82"/>
<line x1="250" y1="102" x2="280" y2="102"/>
<line x1="250" y1="122" x2="280" y2="122"/>
<line x1="250" y1="142" x2="280" y2="142"/>
<line x1="60" y1="100" x2="150" y2="100"/>
<polygon points="150,100 141,104 141,96" fill="currentColor"/>
<line x1="470" y1="100" x2="560" y2="100"/>
<polygon points="560,100 551,104 551,96" fill="currentColor"/>
<line x1="560" y1="100" x2="470" y2="100"/>
<polygon points="470,100 479,96 479,104" fill="currentColor"/>
<line x1="340" y1="220" x2="340" y2="160"/>
<polygon points="340,160 344,169 336,169" fill="currentColor"/>
<line x1="420" y1="220" x2="420" y2="160"/>
<polygon points="420,160 424,169 416,169" fill="currentColor"/>
</g>
<text x="200" y="85" text-anchor="middle" font-size="15">Address</text>
<text x="200" y="105" text-anchor="middle" font-size="15">decoder</text>
<text x="375" y="105" text-anchor="middle" font-size="17">Memory array</text>
<text x="100" y="90" text-anchor="middle" font-size="14">Address bus</text>
<text x="515" y="90" text-anchor="middle" font-size="14">Data bus</text>
<text x="340" y="240" text-anchor="middle" font-size="15">Read</text>
<text x="420" y="240" text-anchor="middle" font-size="15">Write</text>
</g>
</svg>
</div>

**จำนวนสายแอดเดรสกับจำนวนตำแหน่ง** ถ้ามีสายแอดเดรส $n$ เส้น เลือกตำแหน่งได้ $2^{n}$ ตำแหน่ง

$$\text{จำนวนตำแหน่ง} = 2^{n}\ ;\qquad n = \log_2(\text{จำนวนตำแหน่ง})$$

- 15 เส้น : $2^{15} = 32{,}768$ ตำแหน่ง
- 16 เส้น : $2^{16} = 65{,}536$ ตำแหน่ง
- ไมโครคอมพิวเตอร์ที่มีแอดเดรสบัส 32 บิต : $2^{32} = 4{,}294{,}967{,}296$ ตำแหน่ง

**ขั้นตอนการเขียน Memory** 1) เก็บแอดเดรสไว้ใน **Address Register** ซึ่งออกมายังแอดเดรสบัส 2) วงจรถอดรหัสแอดเดรสถอดรหัสเพื่อเลือกตำแหน่ง 3) ใส่สัญญาณเขียน (**Write Command**) ทำให้ข้อมูลที่เก็บอยู่ที่ **Data Register** ถูกนำไปเก็บในตำแหน่งที่เลือก

**ขั้นตอนการอ่าน Memory** 1) เก็บแอดเดรสที่ต้องการไว้ใน Address Register ออกมายังแอดเดรสบัส 2) วงจรถอดรหัสแอดเดรสเลือกตำแหน่ง 3) ใส่สัญญาณอ่าน (**Read Command**) ทำให้ข้อมูลที่ตำแหน่งนั้นถูกส่งออกมาที่ Data Register

### ตัวอย่างที่ 11  จงหาจำนวนตำแหน่งของ Memory ที่มีแอดเดรสบัส 10, 12, 20 และ 24 เส้น และจงหาจำนวนสายแอดเดรสที่ต้องใช้สำหรับ Memory ขนาด 64K, 1M และ 4G ตำแหน่ง ($1K = 2^{10}$, $1M = 2^{20}$, $1G = 2^{30}$)

$\mathbf{Sol}^{n}$

- จำนวนตำแหน่ง $= 2^{n}$ : $n = 10 \Rightarrow 1{,}024\ (1K)$ ; $n = 12 \Rightarrow 4{,}096\ (4K)$ ; $n = 20 \Rightarrow 1{,}048{,}576\ (1M)$ ; $n = 24 \Rightarrow 16{,}777{,}216\ (16M)$
- จำนวนสายแอดเดรส $n = \log_2$(จำนวนตำแหน่ง) : $64K = 2^{6} \cdot 2^{10} = 2^{16} \Rightarrow 16$ เส้น ; $1M = 2^{20} \Rightarrow 20$ เส้น ; $4G = 2^{2} \cdot 2^{30} = 2^{32} \Rightarrow 32$ เส้น

$\mathbf{Ans}\quad 1{,}024,\ 4{,}096,\ 1{,}048{,}576,\ 16{,}777{,}216 \text{ ตำแหน่ง} \ ;\ 16,\ 20,\ 32 \text{ เส้น}$

### ตัวอย่างที่ 12  Memory ที่เก็บข้อมูล 8 แอดเดรส แอดเดรสละ 1 ไบต์ มีข้อมูลเดิมตามรูป จงอธิบายขั้นตอนการเขียนข้อมูล $10001101$ ลงแอดเดรส $101$ และขั้นตอนการอ่านข้อมูลจากแอดเดรส $011$ พร้อมหาข้อมูลที่อ่านได้

$\mathbf{Sol}^{n}$

**การเขียน**

1. ใส่แอดเดรส $101_2 = 5$ ใน Address Register ออกไปที่แอดเดรสบัส
2. วงจรถอดรหัสแอดเดรสเลือกแถวที่ 5 และข้อมูล $10001101$ ใน Data Register ผ่านบัสข้อมูลเข้ามา
3. ใส่สัญญาณ Write ข้อมูลถูกเก็บในแถวที่ 5 (ข้อมูลเดิม $00000000$ ถูกแทนที่)

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="724" height="374" viewBox="0 0 724 374" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(10,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<rect x="250" y="60" width="28" height="28"/>
<rect x="278" y="60" width="28" height="28"/>
<rect x="306" y="60" width="28" height="28"/>
<rect x="334" y="60" width="28" height="28"/>
<rect x="362" y="60" width="28" height="28"/>
<rect x="390" y="60" width="28" height="28"/>
<rect x="418" y="60" width="28" height="28"/>
<rect x="446" y="60" width="28" height="28"/>
<line x1="190" y1="74" x2="250" y2="74"/>
<rect x="250" y="88" width="28" height="28"/>
<rect x="278" y="88" width="28" height="28"/>
<rect x="306" y="88" width="28" height="28"/>
<rect x="334" y="88" width="28" height="28"/>
<rect x="362" y="88" width="28" height="28"/>
<rect x="390" y="88" width="28" height="28"/>
<rect x="418" y="88" width="28" height="28"/>
<rect x="446" y="88" width="28" height="28"/>
<line x1="190" y1="102" x2="250" y2="102"/>
<rect x="250" y="116" width="28" height="28"/>
<rect x="278" y="116" width="28" height="28"/>
<rect x="306" y="116" width="28" height="28"/>
<rect x="334" y="116" width="28" height="28"/>
<rect x="362" y="116" width="28" height="28"/>
<rect x="390" y="116" width="28" height="28"/>
<rect x="418" y="116" width="28" height="28"/>
<rect x="446" y="116" width="28" height="28"/>
<line x1="190" y1="130" x2="250" y2="130"/>
<rect x="250" y="144" width="28" height="28"/>
<rect x="278" y="144" width="28" height="28"/>
<rect x="306" y="144" width="28" height="28"/>
<rect x="334" y="144" width="28" height="28"/>
<rect x="362" y="144" width="28" height="28"/>
<rect x="390" y="144" width="28" height="28"/>
<rect x="418" y="144" width="28" height="28"/>
<rect x="446" y="144" width="28" height="28"/>
<line x1="190" y1="158" x2="250" y2="158"/>
<rect x="250" y="172" width="28" height="28"/>
<rect x="278" y="172" width="28" height="28"/>
<rect x="306" y="172" width="28" height="28"/>
<rect x="334" y="172" width="28" height="28"/>
<rect x="362" y="172" width="28" height="28"/>
<rect x="390" y="172" width="28" height="28"/>
<rect x="418" y="172" width="28" height="28"/>
<rect x="446" y="172" width="28" height="28"/>
<line x1="190" y1="186" x2="250" y2="186"/>
<rect x="250" y="200" width="28" height="28" fill="currentColor" fill-opacity="0.82"/>
<rect x="278" y="200" width="28" height="28" fill="currentColor" fill-opacity="0.82"/>
<rect x="306" y="200" width="28" height="28" fill="currentColor" fill-opacity="0.82"/>
<rect x="334" y="200" width="28" height="28" fill="currentColor" fill-opacity="0.82"/>
<rect x="362" y="200" width="28" height="28" fill="currentColor" fill-opacity="0.82"/>
<rect x="390" y="200" width="28" height="28" fill="currentColor" fill-opacity="0.82"/>
<rect x="418" y="200" width="28" height="28" fill="currentColor" fill-opacity="0.82"/>
<rect x="446" y="200" width="28" height="28" fill="currentColor" fill-opacity="0.82"/>
<line x1="190" y1="214" x2="250" y2="214"/>
<rect x="250" y="228" width="28" height="28"/>
<rect x="278" y="228" width="28" height="28"/>
<rect x="306" y="228" width="28" height="28"/>
<rect x="334" y="228" width="28" height="28"/>
<rect x="362" y="228" width="28" height="28"/>
<rect x="390" y="228" width="28" height="28"/>
<rect x="418" y="228" width="28" height="28"/>
<rect x="446" y="228" width="28" height="28"/>
<line x1="190" y1="242" x2="250" y2="242"/>
<rect x="250" y="256" width="28" height="28"/>
<rect x="278" y="256" width="28" height="28"/>
<rect x="306" y="256" width="28" height="28"/>
<rect x="334" y="256" width="28" height="28"/>
<rect x="362" y="256" width="28" height="28"/>
<rect x="390" y="256" width="28" height="28"/>
<rect x="418" y="256" width="28" height="28"/>
<rect x="446" y="256" width="28" height="28"/>
<line x1="190" y1="270" x2="250" y2="270"/>
<rect x="110" y="60" width="80" height="224" rx="2"/>
<rect x="20" y="14" width="100" height="34" rx="2"/>
<line x1="70" y1="48" x2="70" y2="156"/>
<polygon points="70,156 66,147 74,147" fill="currentColor"/>
<line x1="70" y1="156" x2="110" y2="156"/>
<rect x="504" y="14" width="140" height="34" rx="2"/>
<line x1="574" y1="48" x2="574" y2="214"/>
<line x1="574" y1="214" x2="476" y2="214"/>
<polygon points="476,214 485,210 485,218" fill="currentColor"/>
<line x1="334" y1="334" x2="334" y2="286"/>
<polygon points="334,286 338,295 330,295" fill="currentColor"/>
</g>
<text x="264" y="79" text-anchor="middle" font-size="15">1</text>
<text x="292" y="79" text-anchor="middle" font-size="15">1</text>
<text x="320" y="79" text-anchor="middle" font-size="15">0</text>
<text x="348" y="79" text-anchor="middle" font-size="15">0</text>
<text x="376" y="79" text-anchor="middle" font-size="15">0</text>
<text x="404" y="79" text-anchor="middle" font-size="15">0</text>
<text x="432" y="79" text-anchor="middle" font-size="15">1</text>
<text x="460" y="79" text-anchor="middle" font-size="15">0</text>
<text x="180" y="79" text-anchor="middle" font-size="14">0</text>
<text x="264" y="107" text-anchor="middle" font-size="15">1</text>
<text x="292" y="107" text-anchor="middle" font-size="15">0</text>
<text x="320" y="107" text-anchor="middle" font-size="15">1</text>
<text x="348" y="107" text-anchor="middle" font-size="15">0</text>
<text x="376" y="107" text-anchor="middle" font-size="15">0</text>
<text x="404" y="107" text-anchor="middle" font-size="15">0</text>
<text x="432" y="107" text-anchor="middle" font-size="15">1</text>
<text x="460" y="107" text-anchor="middle" font-size="15">1</text>
<text x="180" y="107" text-anchor="middle" font-size="14">1</text>
<text x="264" y="135" text-anchor="middle" font-size="15">0</text>
<text x="292" y="135" text-anchor="middle" font-size="15">1</text>
<text x="320" y="135" text-anchor="middle" font-size="15">1</text>
<text x="348" y="135" text-anchor="middle" font-size="15">0</text>
<text x="376" y="135" text-anchor="middle" font-size="15">1</text>
<text x="404" y="135" text-anchor="middle" font-size="15">0</text>
<text x="432" y="135" text-anchor="middle" font-size="15">1</text>
<text x="460" y="135" text-anchor="middle" font-size="15">0</text>
<text x="180" y="135" text-anchor="middle" font-size="14">2</text>
<text x="264" y="163" text-anchor="middle" font-size="15">1</text>
<text x="292" y="163" text-anchor="middle" font-size="15">1</text>
<text x="320" y="163" text-anchor="middle" font-size="15">0</text>
<text x="348" y="163" text-anchor="middle" font-size="15">0</text>
<text x="376" y="163" text-anchor="middle" font-size="15">0</text>
<text x="404" y="163" text-anchor="middle" font-size="15">0</text>
<text x="432" y="163" text-anchor="middle" font-size="15">0</text>
<text x="460" y="163" text-anchor="middle" font-size="15">1</text>
<text x="180" y="163" text-anchor="middle" font-size="14">3</text>
<text x="264" y="191" text-anchor="middle" font-size="15">1</text>
<text x="292" y="191" text-anchor="middle" font-size="15">1</text>
<text x="320" y="191" text-anchor="middle" font-size="15">1</text>
<text x="348" y="191" text-anchor="middle" font-size="15">0</text>
<text x="376" y="191" text-anchor="middle" font-size="15">1</text>
<text x="404" y="191" text-anchor="middle" font-size="15">0</text>
<text x="432" y="191" text-anchor="middle" font-size="15">0</text>
<text x="460" y="191" text-anchor="middle" font-size="15">0</text>
<text x="180" y="191" text-anchor="middle" font-size="14">4</text>
<text x="264" y="219" text-anchor="middle" font-size="15" fill="#ffffff">1</text>
<text x="292" y="219" text-anchor="middle" font-size="15" fill="#ffffff">0</text>
<text x="320" y="219" text-anchor="middle" font-size="15" fill="#ffffff">0</text>
<text x="348" y="219" text-anchor="middle" font-size="15" fill="#ffffff">0</text>
<text x="376" y="219" text-anchor="middle" font-size="15" fill="#ffffff">1</text>
<text x="404" y="219" text-anchor="middle" font-size="15" fill="#ffffff">1</text>
<text x="432" y="219" text-anchor="middle" font-size="15" fill="#ffffff">0</text>
<text x="460" y="219" text-anchor="middle" font-size="15" fill="#ffffff">1</text>
<text x="180" y="219" text-anchor="middle" font-size="14">5</text>
<text x="264" y="247" text-anchor="middle" font-size="15">0</text>
<text x="292" y="247" text-anchor="middle" font-size="15">1</text>
<text x="320" y="247" text-anchor="middle" font-size="15">1</text>
<text x="348" y="247" text-anchor="middle" font-size="15">1</text>
<text x="376" y="247" text-anchor="middle" font-size="15">0</text>
<text x="404" y="247" text-anchor="middle" font-size="15">0</text>
<text x="432" y="247" text-anchor="middle" font-size="15">1</text>
<text x="460" y="247" text-anchor="middle" font-size="15">0</text>
<text x="180" y="247" text-anchor="middle" font-size="14">6</text>
<text x="264" y="275" text-anchor="middle" font-size="15">1</text>
<text x="292" y="275" text-anchor="middle" font-size="15">0</text>
<text x="320" y="275" text-anchor="middle" font-size="15">0</text>
<text x="348" y="275" text-anchor="middle" font-size="15">0</text>
<text x="376" y="275" text-anchor="middle" font-size="15">0</text>
<text x="404" y="275" text-anchor="middle" font-size="15">0</text>
<text x="432" y="275" text-anchor="middle" font-size="15">0</text>
<text x="460" y="275" text-anchor="middle" font-size="15">0</text>
<text x="180" y="275" text-anchor="middle" font-size="14">7</text>
<text x="150" y="156" text-anchor="middle" font-size="14">Address</text>
<text x="150" y="174" text-anchor="middle" font-size="14">decoder</text>
<text x="362" y="48" text-anchor="middle" font-size="14">Byte-organized memory array</text>
<text x="70" y="38" text-anchor="middle" font-size="16">101</text>
<text x="70" y="8" text-anchor="middle" font-size="13">Address register</text>
<text x="24" y="270" text-anchor="start" font-size="13">1  Address bus</text>
<text x="574" y="38" text-anchor="middle" font-size="16">10001101</text>
<text x="574" y="8" text-anchor="middle" font-size="13">Data register</text>
<text x="584" y="236" text-anchor="start" font-size="13">2  Data bus</text>
<text x="334" y="350" text-anchor="middle" font-size="14">3  Write</text>
</g>
</svg>
</div>

**การอ่าน**

1. ใส่แอดเดรส $011_2 = 3$ ใน Address Register ออกไปที่แอดเดรสบัส
2. ใส่สัญญาณ Read
3. ข้อมูลในแถวที่ 3 ซึ่งเก็บ $11000001$ ถูกส่งออกมาทางบัสข้อมูลไปที่ Data Register (ข้อมูลยังอยู่ใน Memory เหมือนเดิม)

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="724" height="374" viewBox="0 0 724 374" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(10,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<rect x="250" y="60" width="28" height="28"/>
<rect x="278" y="60" width="28" height="28"/>
<rect x="306" y="60" width="28" height="28"/>
<rect x="334" y="60" width="28" height="28"/>
<rect x="362" y="60" width="28" height="28"/>
<rect x="390" y="60" width="28" height="28"/>
<rect x="418" y="60" width="28" height="28"/>
<rect x="446" y="60" width="28" height="28"/>
<line x1="190" y1="74" x2="250" y2="74"/>
<rect x="250" y="88" width="28" height="28"/>
<rect x="278" y="88" width="28" height="28"/>
<rect x="306" y="88" width="28" height="28"/>
<rect x="334" y="88" width="28" height="28"/>
<rect x="362" y="88" width="28" height="28"/>
<rect x="390" y="88" width="28" height="28"/>
<rect x="418" y="88" width="28" height="28"/>
<rect x="446" y="88" width="28" height="28"/>
<line x1="190" y1="102" x2="250" y2="102"/>
<rect x="250" y="116" width="28" height="28"/>
<rect x="278" y="116" width="28" height="28"/>
<rect x="306" y="116" width="28" height="28"/>
<rect x="334" y="116" width="28" height="28"/>
<rect x="362" y="116" width="28" height="28"/>
<rect x="390" y="116" width="28" height="28"/>
<rect x="418" y="116" width="28" height="28"/>
<rect x="446" y="116" width="28" height="28"/>
<line x1="190" y1="130" x2="250" y2="130"/>
<rect x="250" y="144" width="28" height="28" fill="currentColor" fill-opacity="0.82"/>
<rect x="278" y="144" width="28" height="28" fill="currentColor" fill-opacity="0.82"/>
<rect x="306" y="144" width="28" height="28" fill="currentColor" fill-opacity="0.82"/>
<rect x="334" y="144" width="28" height="28" fill="currentColor" fill-opacity="0.82"/>
<rect x="362" y="144" width="28" height="28" fill="currentColor" fill-opacity="0.82"/>
<rect x="390" y="144" width="28" height="28" fill="currentColor" fill-opacity="0.82"/>
<rect x="418" y="144" width="28" height="28" fill="currentColor" fill-opacity="0.82"/>
<rect x="446" y="144" width="28" height="28" fill="currentColor" fill-opacity="0.82"/>
<line x1="190" y1="158" x2="250" y2="158"/>
<rect x="250" y="172" width="28" height="28"/>
<rect x="278" y="172" width="28" height="28"/>
<rect x="306" y="172" width="28" height="28"/>
<rect x="334" y="172" width="28" height="28"/>
<rect x="362" y="172" width="28" height="28"/>
<rect x="390" y="172" width="28" height="28"/>
<rect x="418" y="172" width="28" height="28"/>
<rect x="446" y="172" width="28" height="28"/>
<line x1="190" y1="186" x2="250" y2="186"/>
<rect x="250" y="200" width="28" height="28"/>
<rect x="278" y="200" width="28" height="28"/>
<rect x="306" y="200" width="28" height="28"/>
<rect x="334" y="200" width="28" height="28"/>
<rect x="362" y="200" width="28" height="28"/>
<rect x="390" y="200" width="28" height="28"/>
<rect x="418" y="200" width="28" height="28"/>
<rect x="446" y="200" width="28" height="28"/>
<line x1="190" y1="214" x2="250" y2="214"/>
<rect x="250" y="228" width="28" height="28"/>
<rect x="278" y="228" width="28" height="28"/>
<rect x="306" y="228" width="28" height="28"/>
<rect x="334" y="228" width="28" height="28"/>
<rect x="362" y="228" width="28" height="28"/>
<rect x="390" y="228" width="28" height="28"/>
<rect x="418" y="228" width="28" height="28"/>
<rect x="446" y="228" width="28" height="28"/>
<line x1="190" y1="242" x2="250" y2="242"/>
<rect x="250" y="256" width="28" height="28"/>
<rect x="278" y="256" width="28" height="28"/>
<rect x="306" y="256" width="28" height="28"/>
<rect x="334" y="256" width="28" height="28"/>
<rect x="362" y="256" width="28" height="28"/>
<rect x="390" y="256" width="28" height="28"/>
<rect x="418" y="256" width="28" height="28"/>
<rect x="446" y="256" width="28" height="28"/>
<line x1="190" y1="270" x2="250" y2="270"/>
<rect x="110" y="60" width="80" height="224" rx="2"/>
<rect x="20" y="14" width="100" height="34" rx="2"/>
<line x1="70" y1="48" x2="70" y2="156"/>
<polygon points="70,156 66,147 74,147" fill="currentColor"/>
<line x1="70" y1="156" x2="110" y2="156"/>
<rect x="504" y="14" width="140" height="34" rx="2"/>
<line x1="476" y1="158" x2="574" y2="158"/>
<polygon points="574,158 565,162 565,154" fill="currentColor"/>
<line x1="574" y1="158" x2="574" y2="48"/>
<polygon points="574,48 568,60 580,60" fill="currentColor"/>
<line x1="334" y1="334" x2="334" y2="286"/>
<polygon points="334,286 338,295 330,295" fill="currentColor"/>
</g>
<text x="264" y="79" text-anchor="middle" font-size="15">1</text>
<text x="292" y="79" text-anchor="middle" font-size="15">1</text>
<text x="320" y="79" text-anchor="middle" font-size="15">0</text>
<text x="348" y="79" text-anchor="middle" font-size="15">0</text>
<text x="376" y="79" text-anchor="middle" font-size="15">0</text>
<text x="404" y="79" text-anchor="middle" font-size="15">0</text>
<text x="432" y="79" text-anchor="middle" font-size="15">1</text>
<text x="460" y="79" text-anchor="middle" font-size="15">0</text>
<text x="180" y="79" text-anchor="middle" font-size="14">0</text>
<text x="264" y="107" text-anchor="middle" font-size="15">1</text>
<text x="292" y="107" text-anchor="middle" font-size="15">0</text>
<text x="320" y="107" text-anchor="middle" font-size="15">1</text>
<text x="348" y="107" text-anchor="middle" font-size="15">0</text>
<text x="376" y="107" text-anchor="middle" font-size="15">0</text>
<text x="404" y="107" text-anchor="middle" font-size="15">0</text>
<text x="432" y="107" text-anchor="middle" font-size="15">1</text>
<text x="460" y="107" text-anchor="middle" font-size="15">1</text>
<text x="180" y="107" text-anchor="middle" font-size="14">1</text>
<text x="264" y="135" text-anchor="middle" font-size="15">0</text>
<text x="292" y="135" text-anchor="middle" font-size="15">1</text>
<text x="320" y="135" text-anchor="middle" font-size="15">1</text>
<text x="348" y="135" text-anchor="middle" font-size="15">0</text>
<text x="376" y="135" text-anchor="middle" font-size="15">1</text>
<text x="404" y="135" text-anchor="middle" font-size="15">0</text>
<text x="432" y="135" text-anchor="middle" font-size="15">1</text>
<text x="460" y="135" text-anchor="middle" font-size="15">0</text>
<text x="180" y="135" text-anchor="middle" font-size="14">2</text>
<text x="264" y="163" text-anchor="middle" font-size="15" fill="#ffffff">1</text>
<text x="292" y="163" text-anchor="middle" font-size="15" fill="#ffffff">1</text>
<text x="320" y="163" text-anchor="middle" font-size="15" fill="#ffffff">0</text>
<text x="348" y="163" text-anchor="middle" font-size="15" fill="#ffffff">0</text>
<text x="376" y="163" text-anchor="middle" font-size="15" fill="#ffffff">0</text>
<text x="404" y="163" text-anchor="middle" font-size="15" fill="#ffffff">0</text>
<text x="432" y="163" text-anchor="middle" font-size="15" fill="#ffffff">0</text>
<text x="460" y="163" text-anchor="middle" font-size="15" fill="#ffffff">1</text>
<text x="180" y="163" text-anchor="middle" font-size="14">3</text>
<text x="264" y="191" text-anchor="middle" font-size="15">1</text>
<text x="292" y="191" text-anchor="middle" font-size="15">1</text>
<text x="320" y="191" text-anchor="middle" font-size="15">1</text>
<text x="348" y="191" text-anchor="middle" font-size="15">0</text>
<text x="376" y="191" text-anchor="middle" font-size="15">1</text>
<text x="404" y="191" text-anchor="middle" font-size="15">0</text>
<text x="432" y="191" text-anchor="middle" font-size="15">0</text>
<text x="460" y="191" text-anchor="middle" font-size="15">0</text>
<text x="180" y="191" text-anchor="middle" font-size="14">4</text>
<text x="264" y="219" text-anchor="middle" font-size="15">1</text>
<text x="292" y="219" text-anchor="middle" font-size="15">0</text>
<text x="320" y="219" text-anchor="middle" font-size="15">0</text>
<text x="348" y="219" text-anchor="middle" font-size="15">0</text>
<text x="376" y="219" text-anchor="middle" font-size="15">1</text>
<text x="404" y="219" text-anchor="middle" font-size="15">1</text>
<text x="432" y="219" text-anchor="middle" font-size="15">0</text>
<text x="460" y="219" text-anchor="middle" font-size="15">1</text>
<text x="180" y="219" text-anchor="middle" font-size="14">5</text>
<text x="264" y="247" text-anchor="middle" font-size="15">0</text>
<text x="292" y="247" text-anchor="middle" font-size="15">1</text>
<text x="320" y="247" text-anchor="middle" font-size="15">1</text>
<text x="348" y="247" text-anchor="middle" font-size="15">1</text>
<text x="376" y="247" text-anchor="middle" font-size="15">0</text>
<text x="404" y="247" text-anchor="middle" font-size="15">0</text>
<text x="432" y="247" text-anchor="middle" font-size="15">1</text>
<text x="460" y="247" text-anchor="middle" font-size="15">0</text>
<text x="180" y="247" text-anchor="middle" font-size="14">6</text>
<text x="264" y="275" text-anchor="middle" font-size="15">1</text>
<text x="292" y="275" text-anchor="middle" font-size="15">0</text>
<text x="320" y="275" text-anchor="middle" font-size="15">0</text>
<text x="348" y="275" text-anchor="middle" font-size="15">0</text>
<text x="376" y="275" text-anchor="middle" font-size="15">0</text>
<text x="404" y="275" text-anchor="middle" font-size="15">0</text>
<text x="432" y="275" text-anchor="middle" font-size="15">0</text>
<text x="460" y="275" text-anchor="middle" font-size="15">0</text>
<text x="180" y="275" text-anchor="middle" font-size="14">7</text>
<text x="150" y="156" text-anchor="middle" font-size="14">Address</text>
<text x="150" y="174" text-anchor="middle" font-size="14">decoder</text>
<text x="362" y="48" text-anchor="middle" font-size="14">Byte-organized memory array</text>
<text x="70" y="38" text-anchor="middle" font-size="16">011</text>
<text x="70" y="8" text-anchor="middle" font-size="13">Address register</text>
<text x="24" y="270" text-anchor="start" font-size="13">1  Address bus</text>
<text x="574" y="38" text-anchor="middle" font-size="16">11000001</text>
<text x="574" y="8" text-anchor="middle" font-size="13">Data register</text>
<text x="584" y="180" text-anchor="start" font-size="13">3  Data bus</text>
<text x="334" y="350" text-anchor="middle" font-size="14">2  Read</text>
</g>
</svg>
</div>

$\mathbf{Ans}\quad \text{เขียน: แถว 5 เก็บ } 10001101 \ ;\ \text{อ่านแอดเดรส } 011:\ 11000001$

### 2.3 ชนิดของ Memory

Memory แบบสารกึ่งตัวนำแบ่งได้เป็น 2 ชนิด คือ **RAM** และ **ROM**

**RAM (Random Access Memory)** : เป็น Memory ที่สามารถเลือกตำแหน่งหรือแอดเดรสทุกแอดเดรสได้ในเวลาที่เท่ากัน และเลือกลำดับอย่างไรก็ได้ในการเขียนและอ่าน เราอ่านหรือเขียนก็ได้ในขณะใช้งานระบบ RAM **สูญเสียข้อมูลเมื่อไม่มีกระแสไฟฟ้าเลี้ยงวงจร** จึงเป็น **Memory แบบขึ้นกับแรงดัน (Volatile Memories)**

**ROM (Read Only Memory)** : เป็น Memory ที่เก็บข้อมูลได้อย่างถาวรหรือกึ่งถาวร ขณะใช้งานในระบบอ่านข้อมูลออกจาก ROM ได้ แต่ **ไม่สามารถเขียนข้อมูลเข้าไปได้** (หรือเปลี่ยนได้แต่ต้องใช้เครื่องมือพิเศษ) ROM คงข้อมูลไว้ได้แม้ไม่มีกระแสไฟเลี้ยง จึงเป็น **Memory แบบไม่ขึ้นกับแรงดัน (Nonvolatile Memories)** ใช้เก็บข้อมูลที่ใช้ซ้ำ ๆ ในการประยุกต์ของระบบ เช่น ตาราง ชุดคำสั่งสำหรับการเริ่มทำงานของระบบ

|  | RAM | ROM |
|:--|:--|:--|
| อ่าน / เขียน | อ่านและเขียนได้ขณะใช้งาน | อ่านได้อย่างเดียว (เขียนไม่ได้ หรือต้องใช้เครื่องมือพิเศษ) |
| เมื่อไม่มีไฟเลี้ยง | ข้อมูลหาย (Volatile) | ข้อมูลยังอยู่ (Nonvolatile) |
| ใช้เก็บ | ข้อมูลและโปรแกรมที่กำลังใช้งาน | ข้อมูลหรือคำสั่งที่ใช้ซ้ำ ๆ เช่น ชุดคำสั่งเริ่มทำงานของระบบ |

### 2.4 RAM : SRAM และ DRAM

RAM แบ่งเป็น 2 ชนิด

- **Static RAM (SRAM)** : ใช้ **Flip-Flop** เป็นอุปกรณ์เก็บข้อมูล เก็บข้อมูลไว้ได้ยาวนานตราบเท่าที่มีกระแสไฟฟ้าป้อนให้
- **Dynamic RAM (DRAM)** : ใช้ **Capacitor** (ตัวเก็บประจุ) เก็บข้อมูล แต่เก็บไว้ได้ไม่นาน เพราะ Capacitor คายประจุ จึงต้องประจุใหม่เป็นระยะ เรียกว่าการ **รีเฟรซ (Refresh)** ซึ่งต้องเพิ่มวงจรเข้าไปอีก

- ทั้ง SRAM และ DRAM สูญเสียค่าที่เก็บเมื่อไม่มีไฟเลี้ยง จึงเป็น **Volatile Memories** ทั้งคู่
- การอ่านข้อมูล **SRAM เร็วกว่า DRAM มาก**
- ที่ขนาดทางกายภาพเท่ากัน **DRAM บันทึกข้อมูลได้มากกว่า และราคาถูกกว่า** (วงจรของเซลล์ง่ายกว่า ราคาต่อบิตต่ำ)

|  | SRAM | DRAM |
|:--|:--|:--|
| อุปกรณ์เก็บข้อมูล | Flip-Flop | Capacitor |
| ต้องรีเฟรซ | ไม่ต้อง | ต้อง (ประจุใหม่เป็นระยะ) |
| ความเร็ว | เร็วกว่ามาก | ช้ากว่า |
| ความจุต่อขนาดชิป / ราคาต่อบิต | น้อยกว่า / แพงกว่า | มากกว่า / ถูกกว่า |
| ไฟเลี้ยงหาย | ข้อมูลหาย (Volatile) | ข้อมูลหาย (Volatile) |
| การใช้งานหลัก | Cache Memory | Main Memory |

**ตระกูล RAM (RAM Family)**

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="1014" height="314" viewBox="0 0 1014 314" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<rect x="417" y="14" width="170" height="54" rx="2"/>
<line x1="502" y1="68" x2="502" y2="98"/>
<line x1="502" y1="98" x2="174" y2="98"/>
<line x1="174" y1="98" x2="174" y2="130"/>
<rect x="99" y="130" width="150" height="54" rx="2"/>
<line x1="174" y1="184" x2="174" y2="210"/>
<line x1="174" y1="210" x2="92" y2="210"/>
<line x1="92" y1="210" x2="92" y2="240"/>
<rect x="17" y="240" width="150" height="54" rx="2"/>
<line x1="174" y1="184" x2="174" y2="210"/>
<line x1="174" y1="210" x2="256" y2="210"/>
<line x1="256" y1="210" x2="256" y2="240"/>
<rect x="181" y="240" width="150" height="54" rx="2"/>
<line x1="502" y1="68" x2="502" y2="98"/>
<line x1="502" y1="98" x2="666" y2="98"/>
<line x1="666" y1="98" x2="666" y2="130"/>
<rect x="591" y="130" width="150" height="54" rx="2"/>
<line x1="666" y1="184" x2="666" y2="210"/>
<line x1="666" y1="210" x2="420" y2="210"/>
<line x1="420" y1="210" x2="420" y2="240"/>
<rect x="345" y="240" width="150" height="54" rx="2"/>
<line x1="666" y1="184" x2="666" y2="210"/>
<line x1="666" y1="210" x2="584" y2="210"/>
<line x1="584" y1="210" x2="584" y2="240"/>
<rect x="509" y="240" width="150" height="54" rx="2"/>
<line x1="666" y1="184" x2="666" y2="210"/>
<line x1="666" y1="210" x2="748" y2="210"/>
<line x1="748" y1="210" x2="748" y2="240"/>
<rect x="673" y="240" width="150" height="54" rx="2"/>
<line x1="666" y1="184" x2="666" y2="210"/>
<line x1="666" y1="210" x2="912" y2="210"/>
<line x1="912" y1="210" x2="912" y2="240"/>
<rect x="837" y="240" width="150" height="54" rx="2"/>
</g>
<text x="502" y="38" text-anchor="middle" font-size="14">Random-Access</text>
<text x="502" y="54" text-anchor="middle" font-size="14">Memory (RAM)</text>
<text x="174" y="146" text-anchor="middle" font-size="14">Static RAM</text>
<text x="174" y="162" text-anchor="middle" font-size="14">(SRAM)</text>
<text x="92" y="256" text-anchor="middle" font-size="13">Asynchronous</text>
<text x="92" y="272" text-anchor="middle" font-size="13">SRAM (ASRAM)</text>
<text x="256" y="256" text-anchor="middle" font-size="13">Synchronous Burst</text>
<text x="256" y="272" text-anchor="middle" font-size="13">SRAM (SB SRAM)</text>
<text x="666" y="146" text-anchor="middle" font-size="14">Dynamic RAM</text>
<text x="666" y="162" text-anchor="middle" font-size="14">(DRAM)</text>
<text x="420" y="256" text-anchor="middle" font-size="13">Fast Page Mode</text>
<text x="420" y="272" text-anchor="middle" font-size="13">DRAM (FPM DRAM)</text>
<text x="584" y="256" text-anchor="middle" font-size="13">Extended Data Out</text>
<text x="584" y="272" text-anchor="middle" font-size="13">DRAM (EDO DRAM)</text>
<text x="748" y="256" text-anchor="middle" font-size="13">Burst EDO DRAM</text>
<text x="748" y="272" text-anchor="middle" font-size="13">(BEDO DRAM)</text>
<text x="912" y="256" text-anchor="middle" font-size="13">Synchronous DRAM</text>
<text x="912" y="272" text-anchor="middle" font-size="13">(SDRAM)</text>
</g>
</svg>
</div>

**Static RAM** ใช้ Flip-Flop ในการจำข้อมูล เซลล์จัดเป็น Rows และ Columns : เลือกแถวด้วยสัญญาณ Row Select แล้วข้อมูลของแต่ละบิตผ่านบัฟเฟอร์ข้อมูลเข้า/ออก (Data I/O Buffers and Control)

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="580" height="420" viewBox="0 0 580 420" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(60,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<line x1="50" y1="50" x2="370" y2="50"/>
<rect x="106" y="36" width="28" height="28" rx="2"/>
<rect x="176" y="36" width="28" height="28" rx="2"/>
<rect x="246" y="36" width="28" height="28" rx="2"/>
<rect x="316" y="36" width="28" height="28" rx="2"/>
<line x1="50" y1="100" x2="370" y2="100"/>
<rect x="106" y="86" width="28" height="28" rx="2"/>
<rect x="176" y="86" width="28" height="28" rx="2"/>
<rect x="246" y="86" width="28" height="28" rx="2"/>
<rect x="316" y="86" width="28" height="28" rx="2"/>
<line x1="50" y1="150" x2="370" y2="150"/>
<rect x="106" y="136" width="28" height="28" rx="2"/>
<rect x="176" y="136" width="28" height="28" rx="2"/>
<rect x="246" y="136" width="28" height="28" rx="2"/>
<rect x="316" y="136" width="28" height="28" rx="2"/>
<line x1="50" y1="240" x2="370" y2="240"/>
<rect x="106" y="226" width="28" height="28" rx="2"/>
<rect x="176" y="226" width="28" height="28" rx="2"/>
<rect x="246" y="226" width="28" height="28" rx="2"/>
<rect x="316" y="226" width="28" height="28" rx="2"/>
<line x1="120" y1="30" x2="120" y2="300"/>
<line x1="190" y1="30" x2="190" y2="300"/>
<line x1="260" y1="30" x2="260" y2="300"/>
<line x1="330" y1="30" x2="330" y2="300"/>
<rect x="100" y="300" width="280" height="40" rx="2"/>
<line x1="120" y1="340" x2="120" y2="380"/>
<polygon points="120,380 116,371 124,371" fill="currentColor"/>
<line x1="120" y1="380" x2="120" y2="340"/>
<polygon points="120,340 124,349 116,349" fill="currentColor"/>
<line x1="190" y1="340" x2="190" y2="380"/>
<polygon points="190,380 186,371 194,371" fill="currentColor"/>
<line x1="190" y1="380" x2="190" y2="340"/>
<polygon points="190,340 194,349 186,349" fill="currentColor"/>
<line x1="260" y1="340" x2="260" y2="380"/>
<polygon points="260,380 256,371 264,371" fill="currentColor"/>
<line x1="260" y1="380" x2="260" y2="340"/>
<polygon points="260,340 264,349 256,349" fill="currentColor"/>
<line x1="330" y1="340" x2="330" y2="380"/>
<polygon points="330,380 326,371 334,371" fill="currentColor"/>
<line x1="330" y1="380" x2="330" y2="340"/>
<polygon points="330,340 334,349 326,349" fill="currentColor"/>
<rect x="400" y="20" width="90" height="60" rx="2"/>
<circle cx="120" cy="50" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="50" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="260" cy="50" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="330" cy="50" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="120" cy="100" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="100" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="260" cy="100" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="330" cy="100" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="120" cy="150" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="150" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="260" cy="150" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="330" cy="150" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="120" cy="240" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="240" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="260" cy="240" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="330" cy="240" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="46" y="55" text-anchor="end" font-size="13">Row select 0</text>
<text x="46" y="105" text-anchor="end" font-size="13">Row select 1</text>
<text x="46" y="155" text-anchor="end" font-size="13">Row select 2</text>
<text x="46" y="245" text-anchor="end" font-size="13">Row select n</text>
<text x="215" y="195" text-anchor="middle" font-size="20">. . .</text>
<text x="240" y="316" text-anchor="middle" font-size="13">Data input / output</text>
<text x="240" y="332" text-anchor="middle" font-size="13">buffers and control</text>
<text x="120" y="398" text-anchor="middle" font-size="13">Bit 0</text>
<text x="190" y="398" text-anchor="middle" font-size="13">Bit 1</text>
<text x="260" y="398" text-anchor="middle" font-size="13">Bit 2</text>
<text x="330" y="398" text-anchor="middle" font-size="13">Bit 3</text>
<text x="445" y="44" text-anchor="middle" font-size="13">Memory cell</text>
<text x="445" y="62" text-anchor="middle" font-size="13">(flip-flop)</text>
</g>
</svg>
</div>

**Cache Memory** เป็น Memory ขนาดเล็ก ความเร็วสูง ที่ใช้เก็บคำสั่งหรือข้อมูลที่ใช้บ่อย ๆ ซึ่งนำมาจาก Memory ที่ใหญ่กว่าแต่ช้ากว่า (Main Memory แบบ DRAM) สร้างด้วย SRAM ซึ่งเร็วกว่า DRAM หลายเท่า การใช้ Cache เป็นวิธีปรับปรุงสมรรถนะของระบบได้อย่างคุ้มค่า แทนการใช้ Memory ความเร็วสูงทั้งหมด (L1 cache อยู่ภายในไมโครโปรเซสเซอร์, L2 cache เป็น SRAM ภายนอกควบคุมโดย Cache Controller)

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="730" height="340" viewBox="0 0 730 340" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(10,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<rect x="20" y="30" width="100" height="36" rx="2"/>
<rect x="20" y="110" width="130" height="190" rx="2"/>
<rect x="34" y="244" width="100" height="44" rx="2"/>
<rect x="210" y="210" width="110" height="54" rx="2"/>
<rect x="380" y="210" width="110" height="54" rx="2"/>
<rect x="560" y="120" width="140" height="200" rx="2"/>
<line x1="150" y1="138" x2="560" y2="138"/>
<polygon points="560,138 551,142 551,134" fill="currentColor"/>
<line x1="560" y1="138" x2="150" y2="138"/>
<polygon points="150,138 159,134 159,142" fill="currentColor"/>
<line x1="150" y1="180" x2="560" y2="180"/>
<polygon points="560,180 551,184 551,176" fill="currentColor"/>
<line x1="560" y1="180" x2="150" y2="180"/>
<polygon points="150,180 159,176 159,184" fill="currentColor"/>
<line x1="134" y1="236" x2="210" y2="236"/>
<polygon points="210,236 201,240 201,232" fill="currentColor"/>
<line x1="210" y1="236" x2="134" y2="236"/>
<polygon points="134,236 143,232 143,240" fill="currentColor"/>
<line x1="320" y1="236" x2="380" y2="236"/>
<polygon points="380,236 371,240 371,232" fill="currentColor"/>
<line x1="70" y1="66" x2="70" y2="110"/>
</g>
<text x="70" y="54" text-anchor="middle" font-size="14">Clock (CLK)</text>
<text x="85" y="200" text-anchor="middle" font-size="14">Microprocessor</text>
<text x="84" y="262" text-anchor="middle" font-size="13">L1 cache</text>
<text x="84" y="278" text-anchor="middle" font-size="13">(internal)</text>
<text x="265" y="232" text-anchor="middle" font-size="13">Cache</text>
<text x="265" y="250" text-anchor="middle" font-size="13">controller</text>
<text x="435" y="232" text-anchor="middle" font-size="13">L2 cache</text>
<text x="435" y="250" text-anchor="middle" font-size="13">(SRAM)</text>
<text x="630" y="214" text-anchor="middle" font-size="14">Main memory</text>
<text x="630" y="234" text-anchor="middle" font-size="14">(DRAM)</text>
<text x="380" y="128" text-anchor="middle" font-size="13">Data bus</text>
<text x="380" y="172" text-anchor="middle" font-size="13">Address bus</text>
</g>
</svg>
</div>

### ตัวอย่างที่ 13  จงตอบว่า Memory แต่ละชนิดต่อไปนี้ใช้อุปกรณ์อะไรเก็บข้อมูล ต้องรีเฟรซหรือไม่ และเมื่อไม่มีไฟเลี้ยงข้อมูลยังอยู่หรือไม่ : SRAM, DRAM, Mask ROM

$\mathbf{Sol}^{n}$

- **SRAM** : ใช้ Flip-Flop เก็บ, ไม่ต้องรีเฟรซ, ไม่มีไฟเลี้ยงข้อมูลหาย (Volatile)
- **DRAM** : ใช้ Capacitor เก็บ, ต้องรีเฟรซเพราะประจุรั่ว, ไม่มีไฟเลี้ยงข้อมูลหาย (Volatile)
- **Mask ROM** : เก็บข้อมูลถาวรที่เตรียมไว้ตอนผลิต ไม่ต้องรีเฟรช ไม่มีไฟเลี้ยงข้อมูลยังอยู่ (Nonvolatile)

$\mathbf{Ans}\quad \text{ตามตารางด้านล่าง}$

| Memory | อุปกรณ์เก็บข้อมูล | รีเฟรซ | ไม่มีไฟเลี้ยง |
|:-:|:-:|:-:|:-:|
| SRAM | Flip-Flop | ไม่ต้อง | ข้อมูลหาย (Volatile) |
| DRAM | Capacitor | ต้อง | ข้อมูลหาย (Volatile) |
| Mask ROM | ข้อมูลเตรียมตอนผลิต | ไม่ต้อง | ข้อมูลอยู่ (Nonvolatile) |

### 2.5 ROM และชนิดของ ROM

ROM เก็บข้อมูลได้แบบถาวรหรือกึ่งถาวร อ่านข้อมูลออกมาใช้ได้แต่เปลี่ยนแปลงข้อมูลไม่ได้ (หรือเปลี่ยนได้ต้องใช้เครื่องมือพิเศษ) ใช้เก็บข้อมูลที่ใช้ซ้ำ ๆ รักษาข้อมูลได้แม้ถอดแหล่งจ่ายไฟ จึงเป็น Nonvolatile

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="850" height="204" viewBox="0 0 850 204" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<rect x="335" y="14" width="170" height="54" rx="2"/>
<line x1="420" y1="68" x2="420" y2="98"/>
<line x1="420" y1="98" x2="92" y2="98"/>
<line x1="92" y1="98" x2="92" y2="130"/>
<rect x="17" y="130" width="150" height="54" rx="2"/>
<line x1="420" y1="68" x2="420" y2="98"/>
<line x1="420" y1="98" x2="256" y2="98"/>
<line x1="256" y1="98" x2="256" y2="130"/>
<rect x="181" y="130" width="150" height="54" rx="2"/>
<line x1="420" y1="68" x2="420" y2="98"/>
<line x1="420" y1="98" x2="420" y2="130"/>
<rect x="345" y="130" width="150" height="54" rx="2"/>
<line x1="420" y1="68" x2="420" y2="98"/>
<line x1="420" y1="98" x2="584" y2="98"/>
<line x1="584" y1="98" x2="584" y2="130"/>
<rect x="509" y="130" width="150" height="54" rx="2"/>
<line x1="420" y1="68" x2="420" y2="98"/>
<line x1="420" y1="98" x2="748" y2="98"/>
<line x1="748" y1="98" x2="748" y2="130"/>
<rect x="673" y="130" width="150" height="54" rx="2"/>
</g>
<text x="420" y="38" text-anchor="middle" font-size="14">Read-Only</text>
<text x="420" y="54" text-anchor="middle" font-size="14">Memory (ROM)</text>
<text x="92" y="154" text-anchor="middle" font-size="14">Mask ROM</text>
<text x="256" y="146" text-anchor="middle" font-size="14">Programmable ROM</text>
<text x="256" y="162" text-anchor="middle" font-size="14">(PROM)</text>
<text x="420" y="146" text-anchor="middle" font-size="14">Erasable PROM</text>
<text x="420" y="162" text-anchor="middle" font-size="14">(EPROM)</text>
<text x="584" y="146" text-anchor="middle" font-size="14">Ultraviolet EPROM</text>
<text x="584" y="162" text-anchor="middle" font-size="14">(UV EPROM)</text>
<text x="748" y="146" text-anchor="middle" font-size="14">Electrically Erasable</text>
<text x="748" y="162" text-anchor="middle" font-size="14">PROM (EEPROM)</text>
</g>
</svg>
</div>

| ชนิด | การเก็บและการเขียนข้อมูล | การลบ / โปรแกรมใหม่ |
|:--|:--|:--|
| Mask ROM | ข้อมูลถูกเตรียมในกระบวนการผลิตจากโรงงาน ใช้เก็บฟังก์ชันมาตรฐาน เช่น ตารางเทียบค่า | เมื่อโปรแกรมแล้วเปลี่ยนไม่ได้ |
| PROM (Programmable ROM) | ผู้ใช้กำหนดและเขียนข้อมูลเองด้วยเครื่องมือพิเศษ ใช้ **ฟิวส์** : เผาไหม้ฟิวส์แทนค่าหนึ่ง ปล่อยการเชื่อมต่อไว้แทนอีกค่าหนึ่ง | เมื่อโปรแกรมแล้วเปลี่ยนไม่ได้ (โปรแกรมใหม่ไม่ได้) |
| EPROM (Erasable PROM) | ผู้ใช้เขียนข้อมูลได้ | ลบค่าได้ แล้วโปรแกรมใหม่ได้ โดยลบค่าเดิมก่อน |
| UV EPROM | เป็น EPROM แบบหนึ่ง | ลบด้วยแสง **อัลตราไวโอเลต** ส่องเข้าไปในชิปหลายนาทีหรือเป็นชั่วโมง |
| EEPROM (Electrically Erasable PROM) | เป็น EPROM แบบหนึ่ง | ลบด้วย **กระแสไฟฟ้า** |

### 2.6 การขยาย Memory

Memory ที่ผลิตขายเป็นไอซีนั้น บางครั้งจำเป็นต้อง **ขยาย** เพื่อเพิ่มขนาดความยาวของเวิร์ด (จำนวนบิตต่อแอดเดรส) หรือเพิ่มขนาด (จำนวนแอดเดรส) หรือทั้งสองอย่าง โดยนำ Memory หลายตัวมาประกอบกันและจัดบัสแอดเดรส บัสข้อมูล และบัสควบคุมให้เหมาะสม

| การขยาย | สิ่งที่เพิ่ม | วิธีต่อ |
|:--|:--|:--|
| ขยายความยาวของเวิร์ด (Word length) | จำนวนบิตต่อแอดเดรส | ต่อแอดเดรสบัสและสัญญาณ Enable ร่วมกัน ชิปทุกตัวทำงานพร้อมกัน เอาต์พุตของชิปแต่ละตัวต่อเป็นคนละบิตของบัสข้อมูล |
| ขยายขนาด (Capacity) | จำนวนแอดเดรส | ต่อสายแอดเดรสและบัสข้อมูลร่วมกัน ใช้บิตแอดเดรสเพิ่มอีก 1 บิตเลือกชิปด้วยสัญญาณ Enable (ชิปหนึ่งรับตรง อีกชิปรับผ่านอินเวอร์เตอร์) ชิปทำงานทีละตัว |

**ขยายความยาวของเวิร์ด** : นำ ROM $64K \times 4$ สองตัวต่อกันเป็น $64K \times 8$ แอดเดรสบัส 16 เส้นต่อเข้าชิปทั้งสองตัว ($64K = 2^{16}$) ข้อมูลออกตัวละ 4 บิตรวมเป็น 8 บิต ชิปทั้งสองรับ Enable พร้อมกัน

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="800" height="278" viewBox="0 0 800 278" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(30,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<rect x="150" y="90" width="110" height="90" rx="2"/>
<line x1="180" y1="40" x2="180" y2="90"/>
<line x1="180" y1="78" x2="180" y2="90"/>
<polygon points="180,90 176,81 184,81" fill="currentColor"/>
<line x1="190" y1="180" x2="190" y2="210"/>
<line x1="260" y1="135" x2="284" y2="135"/>
<rect x="330" y="90" width="110" height="90" rx="2"/>
<line x1="360" y1="40" x2="360" y2="90"/>
<line x1="360" y1="78" x2="360" y2="90"/>
<polygon points="360,90 356,81 364,81" fill="currentColor"/>
<line x1="370" y1="180" x2="370" y2="210"/>
<line x1="440" y1="135" x2="464" y2="135"/>
<line x1="90" y1="40" x2="360" y2="40"/>
<line x1="90" y1="210" x2="370" y2="210"/>
<rect x="510" y="90" width="50" height="90" rx="2"/>
<line x1="560" y1="135" x2="610" y2="135"/>
<line x1="284" y1="135" x2="284" y2="242"/>
<line x1="284" y1="242" x2="518" y2="242"/>
<line x1="518" y1="242" x2="518" y2="180"/>
<line x1="464" y1="135" x2="464" y2="250"/>
<line x1="464" y1="250" x2="526" y2="250"/>
<line x1="526" y1="250" x2="526" y2="180"/>
<circle cx="180" cy="40" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="210" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="360" cy="40" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="370" cy="210" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="205" y="112" text-anchor="middle" font-size="14">ROM 1</text>
<text x="205" y="132" text-anchor="middle" font-size="13">64K x 4</text>
<text x="212" y="76" text-anchor="start" font-size="12">16</text>
<text x="272" y="128" text-anchor="middle" font-size="12">4</text>
<text x="385" y="112" text-anchor="middle" font-size="14">ROM 2</text>
<text x="385" y="132" text-anchor="middle" font-size="13">64K x 4</text>
<text x="392" y="76" text-anchor="start" font-size="12">16</text>
<text x="452" y="128" text-anchor="middle" font-size="12">4</text>
<text x="86" y="45" text-anchor="end" font-size="13">Address bus (16 bits)</text>
<text x="86" y="215" text-anchor="end" font-size="13">Enable</text>
<text x="535" y="138" text-anchor="middle" font-size="13">Data</text>
<text x="535" y="154" text-anchor="middle" font-size="13">bus</text>
<text x="614" y="140" text-anchor="start" font-size="15">8 bits</text>
</g>
</svg>
</div>

**ขยายขนาด** : นำ RAM $1M \times 8$ สองตัวมาขยายเป็น $2M \times 8$ ต้องใช้แอดเดรส 21 บิต ($2M = 2^{21}$) : 20 บิตต่ำต่อเข้าชิปทั้งสองตัว บิตที่ 21 เลือกชิป (ต่อเข้า EN ของชิปที่ 1 ตรง ๆ และเข้า EN ของชิปที่ 2 ผ่านอินเวอร์เตอร์) บัสข้อมูล 8 บิตต่อร่วมกัน

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="740" height="360" viewBox="0 0 740 360" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(20,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<rect x="330" y="40" width="130" height="90" rx="2"/>
<rect x="330" y="240" width="130" height="90" rx="2"/>
<line x1="190" y1="118" x2="250" y2="118"/>
<polygon points="250,118 241,122 241,114" fill="currentColor"/>
<line x1="250" y1="118" x2="250" y2="310"/>
<line x1="250" y1="310" x2="300" y2="310"/>
<line x1="300" y1="310" x2="300" y2="290"/>
<line x1="300" y1="290" x2="330" y2="290"/>
<line x1="250" y1="118" x2="300" y2="118"/>
<line x1="300" y1="118" x2="300" y2="90"/>
<line x1="300" y1="90" x2="330" y2="90"/>
<line x1="60" y1="190" x2="280" y2="190"/>
<line x1="280" y1="190" x2="280" y2="152"/>
<line x1="280" y1="152" x2="370" y2="152"/>
<line x1="370" y1="152" x2="370" y2="130"/>
<line x1="280" y1="190" x2="280" y2="200"/>
<polygon points="300,216 300,240 322,228"/>
<circle cx="327" cy="228" r="5"/>
<line x1="280" y1="200" x2="280" y2="228"/>
<line x1="280" y1="228" x2="300" y2="228"/>
<line x1="332" y1="228" x2="370" y2="228"/>
<line x1="370" y1="228" x2="370" y2="240"/>
<line x1="460" y1="85" x2="550" y2="85"/>
<line x1="460" y1="285" x2="550" y2="285"/>
<line x1="520" y1="85" x2="520" y2="285"/>
<line x1="520" y1="185" x2="554" y2="185"/>
<circle cx="250" cy="118" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="280" cy="190" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="520" cy="85" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="520" cy="285" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="395" y="62" text-anchor="middle" font-size="14">Chip 1</text>
<text x="395" y="82" text-anchor="middle" font-size="13">1M x 8</text>
<text x="395" y="262" text-anchor="middle" font-size="14">Chip 2</text>
<text x="395" y="282" text-anchor="middle" font-size="13">1M x 8</text>
<text x="60" y="110" text-anchor="start" font-size="13">Address bus</text>
<text x="60" y="128" text-anchor="start" font-size="12">(shared lines)</text>
<text x="260" y="108" text-anchor="start" font-size="12">A0 ...</text>
<text x="56" y="195" text-anchor="end" font-size="14">A20</text>
<text x="380" y="148" text-anchor="start" font-size="12">EN</text>
<text x="380" y="234" text-anchor="start" font-size="12">EN</text>
<text x="560" y="190" text-anchor="start" font-size="14">Data bus (8 bits)</text>
<text x="60" y="330" text-anchor="start" font-size="14">2M x 8 : 21 address bits</text>
</g>
</svg>
</div>

### ตัวอย่างที่ 14  จงขยาย ROM ขนาด $64K \times 4$ ให้เป็น $64K \times 8$ และ $64K \times 16$ ต้องใช้ชิปกี่ตัว มีสายแอดเดรส สายข้อมูล และขนาดรวมกี่บิต

$\mathbf{Sol}^{n}$

- $64K = 2^{16}$ ตำแหน่ง จึงใช้แอดเดรส 16 เส้นเท่าเดิม (ไม่เพิ่ม เพราะไม่เพิ่มจำนวนตำแหน่ง) ขยายเฉพาะความยาวเวิร์ด
- ชิปแต่ละตัวให้ข้อมูล 4 บิต
- $64K \times 8$ ต้องมีข้อมูล 8 บิต $= 8 \div 4 = 2$ ชิป
- $64K \times 16$ ต้องมีข้อมูล 16 บิต $= 16 \div 4 = 4$ ชิป
- ต่อแอดเดรสบัส 16 เส้นและ Enable เข้าชิปทุกตัวร่วมกัน เอาต์พุต 4 บิตของแต่ละชิปต่อเป็นบิตต่าง ๆ ของบัสข้อมูล (ตรวจด้วยการจำลอง : เขียนและอ่าน 3,000 แอดเดรสสุ่ม ได้ค่าเท่ากับ Memory เดี่ยวขนาดเดียวกัน)

$\mathbf{Ans}\quad 64K\times8:\ 2 \text{ ชิป}, 16 \text{ แอดเดรส}, 8 \text{ ข้อมูล}, 524{,}288 \text{ บิต} \ ;\ 64K\times16:\ 4 \text{ ชิป}, 16 \text{ แอดเดรส}, 16 \text{ ข้อมูล}, 1{,}048{,}576 \text{ บิต}$

| ขนาดที่ต้องการ | ชิป $64K \times 4$ | สายแอดเดรส | สายข้อมูล | บิตรวม |
|:-:|:-:|:-:|:-:|:-:|
| $64K \times 4$ (ตัวเดียว) | 1 | 16 | 4 | 262,144 |
| $64K \times 8$ | 2 | 16 | 8 | 524,288 |
| $64K \times 16$ | 4 | 16 | 16 | 1,048,576 |

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="1160" height="294" viewBox="0 0 1160 294" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(30,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<rect x="150" y="90" width="110" height="90" rx="2"/>
<line x1="180" y1="40" x2="180" y2="90"/>
<line x1="180" y1="78" x2="180" y2="90"/>
<polygon points="180,90 176,81 184,81" fill="currentColor"/>
<line x1="190" y1="180" x2="190" y2="210"/>
<line x1="260" y1="135" x2="284" y2="135"/>
<rect x="330" y="90" width="110" height="90" rx="2"/>
<line x1="360" y1="40" x2="360" y2="90"/>
<line x1="360" y1="78" x2="360" y2="90"/>
<polygon points="360,90 356,81 364,81" fill="currentColor"/>
<line x1="370" y1="180" x2="370" y2="210"/>
<line x1="440" y1="135" x2="464" y2="135"/>
<rect x="510" y="90" width="110" height="90" rx="2"/>
<line x1="540" y1="40" x2="540" y2="90"/>
<line x1="540" y1="78" x2="540" y2="90"/>
<polygon points="540,90 536,81 544,81" fill="currentColor"/>
<line x1="550" y1="180" x2="550" y2="210"/>
<line x1="620" y1="135" x2="644" y2="135"/>
<rect x="690" y="90" width="110" height="90" rx="2"/>
<line x1="720" y1="40" x2="720" y2="90"/>
<line x1="720" y1="78" x2="720" y2="90"/>
<polygon points="720,90 716,81 724,81" fill="currentColor"/>
<line x1="730" y1="180" x2="730" y2="210"/>
<line x1="800" y1="135" x2="824" y2="135"/>
<line x1="90" y1="40" x2="720" y2="40"/>
<line x1="90" y1="210" x2="730" y2="210"/>
<rect x="870" y="90" width="50" height="90" rx="2"/>
<line x1="920" y1="135" x2="970" y2="135"/>
<line x1="284" y1="135" x2="284" y2="242"/>
<line x1="284" y1="242" x2="878" y2="242"/>
<line x1="878" y1="242" x2="878" y2="180"/>
<line x1="464" y1="135" x2="464" y2="250"/>
<line x1="464" y1="250" x2="886" y2="250"/>
<line x1="886" y1="250" x2="886" y2="180"/>
<line x1="644" y1="135" x2="644" y2="258"/>
<line x1="644" y1="258" x2="894" y2="258"/>
<line x1="894" y1="258" x2="894" y2="180"/>
<line x1="824" y1="135" x2="824" y2="266"/>
<line x1="824" y1="266" x2="902" y2="266"/>
<line x1="902" y1="266" x2="902" y2="180"/>
<circle cx="180" cy="40" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="210" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="360" cy="40" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="370" cy="210" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="540" cy="40" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="550" cy="210" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="720" cy="40" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="730" cy="210" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="205" y="112" text-anchor="middle" font-size="14">ROM 1</text>
<text x="205" y="132" text-anchor="middle" font-size="13">64K x 4</text>
<text x="212" y="76" text-anchor="start" font-size="12">16</text>
<text x="272" y="128" text-anchor="middle" font-size="12">4</text>
<text x="385" y="112" text-anchor="middle" font-size="14">ROM 2</text>
<text x="385" y="132" text-anchor="middle" font-size="13">64K x 4</text>
<text x="392" y="76" text-anchor="start" font-size="12">16</text>
<text x="452" y="128" text-anchor="middle" font-size="12">4</text>
<text x="565" y="112" text-anchor="middle" font-size="14">ROM 3</text>
<text x="565" y="132" text-anchor="middle" font-size="13">64K x 4</text>
<text x="572" y="76" text-anchor="start" font-size="12">16</text>
<text x="632" y="128" text-anchor="middle" font-size="12">4</text>
<text x="745" y="112" text-anchor="middle" font-size="14">ROM 4</text>
<text x="745" y="132" text-anchor="middle" font-size="13">64K x 4</text>
<text x="752" y="76" text-anchor="start" font-size="12">16</text>
<text x="812" y="128" text-anchor="middle" font-size="12">4</text>
<text x="86" y="45" text-anchor="end" font-size="13">Address bus (16 bits)</text>
<text x="86" y="215" text-anchor="end" font-size="13">Enable</text>
<text x="895" y="138" text-anchor="middle" font-size="13">Data</text>
<text x="895" y="154" text-anchor="middle" font-size="13">bus</text>
<text x="974" y="140" text-anchor="start" font-size="15">16 bits</text>
</g>
</svg>
</div>

### ตัวอย่างที่ 15  จงขยาย RAM $1M \times 8$ สองตัวให้เป็น $2M \times 8$ และขยาย RAM $512K \times 4$ สองตัวให้เป็น $1M \times 4$ จงหาจำนวนสายแอดเดรสที่ต้องใช้ และช่วงแอดเดรสที่ชิปแต่ละตัวรับผิดชอบ

$\mathbf{Sol}^{n}$

**$2M \times 8$ จาก $1M \times 8$**

- $2M = 2^{21}$ ตำแหน่ง ต้องใช้แอดเดรส 21 เส้น ($A_0$ ถึง $A_{20}$) ชิปแต่ละตัว $1M = 2^{20}$ ตำแหน่ง ใช้ 20 เส้น ($A_0$ ถึง $A_{19}$) ต่อร่วมกัน
- บิต $A_{20}$ เลือกชิป : ชิป 1 รับ $A_{20}$ ตรง ๆ ที่ EN (ทำงานเมื่อ $A_{20} = 1$) ชิป 2 รับผ่านอินเวอร์เตอร์ (ทำงานเมื่อ $A_{20} = 0$)
- ชิป 2 รับแอดเดรส $0$ ถึง $2^{20} - 1 = 1{,}048{,}575$ ; ชิป 1 รับ $2^{20} = 1{,}048{,}576$ ถึง $2^{21} - 1 = 2{,}097{,}151$

**$1M \times 4$ จาก $512K \times 4$**

- $1M = 2^{20}$ ตำแหน่ง ใช้แอดเดรส 20 เส้น ($A_0$ ถึง $A_{19}$) ชิปแต่ละตัว $512K = 2^{19}$ ตำแหน่ง ใช้ 19 เส้น ($A_0$ ถึง $A_{18}$) ต่อร่วมกัน
- บิต $A_{19}$ เลือกชิป (ตรงและผ่านอินเวอร์เตอร์ เช่นเดียวกัน)
- ชิปที่ทำงานเมื่อ $A_{19} = 0$ รับ $0$ ถึง $524{,}287$ ; ชิปที่ทำงานเมื่อ $A_{19} = 1$ รับ $524{,}288$ ถึง $1{,}048{,}575$ (ตรงกับช่วงแอดเดรสของ RAM 1 และ RAM 2 ในรูปสไลด์)
- บัสข้อมูล 4 บิตต่อร่วมกัน ชิปทำงานทีละตัวจึงไม่ชนกัน (ตรวจด้วยการจำลอง : เขียนและอ่านแอดเดรสสุ่ม ได้ค่าเท่ากับ Memory เดี่ยวขนาดเดียวกัน)

$\mathbf{Ans}\quad 2M\times8:\ 21 \text{ เส้น, ชิปละ } 20 \ ;\ 1M\times4:\ 20 \text{ เส้น, ชิปละ } 19$

| การขยาย | สายแอดเดรสรวม | สายต่อร่วม | บิตเลือกชิป | ช่วงแอดเดรส (บิตเลือกชิป = 0) | ช่วงแอดเดรส (บิตเลือกชิป = 1) |
|:-:|:-:|:-:|:-:|:-:|:-:|
| $1M \times 8 \to 2M \times 8$ | 21 | 20 ($A_0$-$A_{19}$) | $A_{20}$ | 0 ถึง 1,048,575 | 1,048,576 ถึง 2,097,151 |
| $512K \times 4 \to 1M \times 4$ | 20 | 19 ($A_0$-$A_{18}$) | $A_{19}$ | 0 ถึง 524,287 | 524,288 ถึง 1,048,575 |

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="740" height="360" viewBox="0 0 740 360" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(20,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<rect x="330" y="40" width="130" height="90" rx="2"/>
<rect x="330" y="240" width="130" height="90" rx="2"/>
<line x1="190" y1="118" x2="250" y2="118"/>
<polygon points="250,118 241,122 241,114" fill="currentColor"/>
<line x1="250" y1="118" x2="250" y2="310"/>
<line x1="250" y1="310" x2="300" y2="310"/>
<line x1="300" y1="310" x2="300" y2="290"/>
<line x1="300" y1="290" x2="330" y2="290"/>
<line x1="250" y1="118" x2="300" y2="118"/>
<line x1="300" y1="118" x2="300" y2="90"/>
<line x1="300" y1="90" x2="330" y2="90"/>
<line x1="60" y1="190" x2="280" y2="190"/>
<line x1="280" y1="190" x2="280" y2="152"/>
<line x1="280" y1="152" x2="370" y2="152"/>
<line x1="370" y1="152" x2="370" y2="130"/>
<line x1="280" y1="190" x2="280" y2="200"/>
<polygon points="300,216 300,240 322,228"/>
<circle cx="327" cy="228" r="5"/>
<line x1="280" y1="200" x2="280" y2="228"/>
<line x1="280" y1="228" x2="300" y2="228"/>
<line x1="332" y1="228" x2="370" y2="228"/>
<line x1="370" y1="228" x2="370" y2="240"/>
<line x1="460" y1="85" x2="550" y2="85"/>
<line x1="460" y1="285" x2="550" y2="285"/>
<line x1="520" y1="85" x2="520" y2="285"/>
<line x1="520" y1="185" x2="554" y2="185"/>
<circle cx="250" cy="118" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="280" cy="190" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="520" cy="85" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="520" cy="285" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="395" y="62" text-anchor="middle" font-size="14">Chip 1</text>
<text x="395" y="82" text-anchor="middle" font-size="13">512K x 4</text>
<text x="395" y="262" text-anchor="middle" font-size="14">Chip 2</text>
<text x="395" y="282" text-anchor="middle" font-size="13">512K x 4</text>
<text x="60" y="110" text-anchor="start" font-size="13">Address bus</text>
<text x="60" y="128" text-anchor="start" font-size="12">(shared lines)</text>
<text x="260" y="108" text-anchor="start" font-size="12">A0 ...</text>
<text x="56" y="195" text-anchor="end" font-size="14">A19</text>
<text x="380" y="148" text-anchor="start" font-size="12">EN</text>
<text x="380" y="234" text-anchor="start" font-size="12">EN</text>
<text x="560" y="190" text-anchor="start" font-size="14">Data bus (4 bits)</text>
<text x="60" y="330" text-anchor="start" font-size="14">1M x 4 : 20 address bits</text>
</g>
</svg>
</div>

### 2.7 Memory ชนิดพิเศษ : FIFO และ LIFO

นอกจาก Memory ชนิดต่าง ๆ ที่กล่าวมา ยังมี Memory พิเศษที่สร้างตามการใช้งาน เช่น **FIFO** และ **LIFO**

**FIFO : First In-First Out** ตามชื่อ ข้อมูลที่นำเข้าไปเก็บก่อนจะถูกนำออกไปใช้ก่อน สร้างจากการนำ Register มาจัดเรียงใหม่ แต่ต่างจาก Register ตรงข้อมูลที่นำเข้า : ใน Register ข้อมูลอยู่ที่ตำแหน่งที่นำเข้าแล้วค่อย ๆ เลื่อนไปอีกด้านหนึ่ง (ข้อมูลอยู่ซ้ายจนกว่าจะถูกข้อมูลใหม่ดันออก) แต่ใน FIFO ข้อมูลที่นำเข้าจะ "ตก" ไปอยู่ ณ ตำแหน่งที่จะนำไปใช้เลย (ด้านเอาต์พุต)

**การประยุกต์ FIFO** ใช้เมื่อระบบ 2 ระบบสื่อสารกันด้วยอัตราความเร็วต่างกัน ข้อมูลส่งเข้า FIFO ด้วยความเร็วหนึ่งและนำออกด้วยอีกความเร็วหนึ่ง

| ข้อมูลเข้า | ข้อมูลออก | ตัวอย่าง |
|:--|:--|:--|
| อัตราไม่สม่ำเสมอ (Irregular-rate) | อัตราคงที่ (Constant-rate) | ข้อมูลเทเลเมทรีที่ไม่สม่ำเสมอเก็บไว้แล้วส่งซ้ำด้วยอัตราคงที่ |
| อัตราต่ำกว่า (Lower-rate) | อัตราสูงกว่า (Higher-rate) | ข้อมูลจากคีย์บอร์ดที่ช้า เก็บแล้วส่งต่อด้วยอัตราเร็วเพื่อประมวลผล |
| อัตราคงที่ (Constant-rate) | เป็นช่วง ๆ (Burst) | เก็บข้อมูลที่เข้าสม่ำเสมอ แล้วส่งออกเป็นช่วง ๆ |
| เป็นช่วง ๆ (Burst) | อัตราคงที่ (Constant-rate) | ข้อมูลที่มาเป็นช่วง ๆ เก็บแล้วจัดให้ออกสม่ำเสมอ |

### ตัวอย่างที่ 16  Shift Register ธรรมดา 4 ตำแหน่ง (ข้อมูลเข้าทางซ้าย ออกทางขวา เริ่มต้นเป็น $X$ คือไม่ทราบค่า) และ FIFO 4 ตำแหน่ง รับข้อมูลเข้า $0, 1, 1, 0$ ตามลำดับ จงเขียนค่าในแต่ละตำแหน่งหลังป้อนข้อมูลแต่ละครั้ง และเปรียบเทียบ

$\mathbf{Sol}^{n}$

**Shift Register ธรรมดา** : ทุกครั้งที่ป้อนข้อมูล ข้อมูลทั้งหมดเลื่อนไปทางขวา 1 ตำแหน่ง ข้อมูลใหม่เข้าที่ตำแหน่งซ้ายสุด ข้อมูลอยู่ทางซ้ายจนกว่าจะถูกข้อมูลใหม่ดันออก ($X$ คือตำแหน่งที่ยังไม่มีข้อมูลที่ถูกต้อง)

| ครั้งที่ | ข้อมูลเข้า | ตำแหน่ง 1 (ซ้าย) | 2 | 3 | ตำแหน่ง 4 (ขวา = ออก) |
|:-:|:-:|:-:|:-:|:-:|:-:|
| 1 | 0 | 0 | X | X | X |
| 2 | 1 | 1 | 0 | X | X |
| 3 | 1 | 1 | 1 | 0 | X |
| 4 | 0 | 0 | 1 | 1 | 0 |

**FIFO** : ข้อมูลที่เข้ามาตกไปทางขวาจนถึงตำแหน่งว่างที่อยู่ใกล้เอาต์พุตที่สุด ($-$ คือตำแหน่งว่าง) ข้อมูลที่เข้าก่อนอยู่ใกล้เอาต์พุตที่สุด จึงออกก่อน

| ครั้งที่ | ข้อมูลเข้า | ตำแหน่ง 1 (ซ้าย) | 2 | 3 | ตำแหน่ง 4 (ขวา = ออก) |
|:-:|:-:|:-:|:-:|:-:|:-:|
| 1 | 0 | - | - | - | 0 |
| 2 | 1 | - | - | 1 | 0 |
| 3 | 1 | - | 1 | 1 | 0 |
| 4 | 0 | 0 | 1 | 1 | 0 |

- หลังป้อนครบ 4 ครั้ง ทั้งสองแบบมีค่าในตำแหน่งเหมือนกัน ($0, 1, 1, 0$) แต่ FIFO มี ข้อมูลตัวแรก ($0$) อยู่ที่เอาต์พุตตั้งแต่ครั้งที่ 1 จึงอ่านออกได้ทันที ส่วน Shift Register ธรรมดาต้องเลื่อนข้อมูลจนถึงตำแหน่งขวาสุดก่อน (หลังครั้งที่ 4)
- ลำดับข้อมูลที่ออกจาก FIFO ตามลำดับที่เข้า (เข้าก่อนออกก่อน) คือ $0, 1, 1, 0$

$\mathbf{Ans}\quad \text{FIFO: ข้อมูลตกไปตำแหน่งเอาต์พุตทันที ; ลำดับออก } 0, 1, 1, 0 \text{ (เข้าก่อนออกก่อน)}$

### ตัวอย่างที่ 17  FIFO ถูกป้อนข้อมูลและอ่านตามลำดับเหตุการณ์ต่อไปนี้ : เข้า 5, เข้า 7, ออก, เข้า 3, ออก, ออก จงหาข้อมูลที่ออกในแต่ละครั้งที่ "ออก"

$\mathbf{Sol}^{n}$

FIFO เข้าก่อนออกก่อน : ข้อมูลออกตามลำดับที่เข้า (เหมือนคิว)

- เข้า $5$ $\Rightarrow$ ในคิว : $5$
- เข้า $7$ $\Rightarrow$ ในคิว : $5, 7$
- ออก $\Rightarrow$ ได้ $5$ (เข้าก่อนสุด) ในคิวเหลือ : $7$
- เข้า $3$ $\Rightarrow$ ในคิว : $7, 3$
- ออก $\Rightarrow$ ได้ $7$ ในคิวเหลือ : $3$
- ออก $\Rightarrow$ ได้ $3$ ในคิวว่าง

$\mathbf{Ans}\quad \text{ข้อมูลที่ออก } 5,\ 7,\ 3 \text{ (ลำดับเดียวกับที่เข้า)}$

**LIFO : Last In-First Out** เป็น Memory ที่ใช้ในระบบคอมพิวเตอร์ รวมทั้งในไมโครโปรเซสเซอร์ ข้อมูลที่นำเข้าไปเก็บ **หลังสุด** จะถูกนำออกมาใช้ **ก่อน** เรียกว่า **Push-down Stack** อาจสร้างจากการนำ Register กี่ตัวก็ได้มาซ้อนกัน Register ตัวบนสุดเรียกว่า **Top of Stack**

**การทำงาน** ข้อมูลที่นำเข้าถูกป้อนแบบขนานไปที่ส่วนบนสุดของ Stack ข้อมูลชุดต่อ ๆ ไปผลักให้ข้อมูลชุดก่อนหน้าต่ำลงไปยัง Register ตัวถัดไป ข้อมูลใหม่จึงอยู่ที่ Register ตัวบนสุดเสมอ และข้อมูลก่อนหน้าถูกผลักให้ลึกลงไปใน Stack (ชื่อ Push-down Stack มาจากลักษณะนี้) การนำข้อมูลเข้าเรียกว่า **PUSH** การนำออกเรียกว่า **POP**

- **PUSH** : ข้อมูลใหม่เข้าที่ Top of Stack ข้อมูลเดิมทั้งหมดถูกผลักลงล่าง 1 ตำแหน่ง
- **POP** : นำข้อมูลที่ Top of Stack ออก ข้อมูลที่เหลือเลื่อนขึ้น 1 ตำแหน่ง ข้อมูลที่เข้าหลังสุดออกก่อน

### ตัวอย่างที่ 18  Register Stack 3 ตำแหน่ง (แต่ละตำแหน่ง 8 บิต) เริ่มต้นว่าง ถูก PUSH ข้อมูล $10010011$, $11110000$, $01010101$ ตามลำดับ แล้ว POP 3 ครั้ง จงแสดงข้อมูลใน Stack หลังแต่ละการกระทำ และลำดับข้อมูลที่ POP ออกมา

$\mathbf{Sol}^{n}$

- PUSH ครั้งที่ 1 : $10010011$ อยู่ที่ Top
- PUSH ครั้งที่ 2 : $11110000$ เข้าที่ Top และ $10010011$ ถูกผลักลงล่าง
- PUSH ครั้งที่ 3 : $01010101$ เข้าที่ Top, $11110000$ ถูกผลักลงเป็นตัวที่ 2, $10010011$ ลงเป็นตัวที่ 3 (Stack เต็ม)
- POP ครั้งที่ 1 : ได้ข้อมูลที่เข้าหลังสุด $01010101$ ($11110000$ ขึ้นมาอยู่ Top)
- POP ครั้งที่ 2 : ได้ $11110000$ ($10010011$ ขึ้นมาอยู่ Top)
- POP ครั้งที่ 3 : ได้ $10010011$ (Stack ว่าง)

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="940" height="212" viewBox="0 0 940 212" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<rect x="40" y="40" width="22" height="22" fill="currentColor" fill-opacity="0.82"/>
<rect x="62" y="40" width="22" height="22" fill="currentColor" fill-opacity="0.82"/>
<rect x="84" y="40" width="22" height="22" fill="currentColor" fill-opacity="0.82"/>
<rect x="106" y="40" width="22" height="22" fill="currentColor" fill-opacity="0.82"/>
<rect x="128" y="40" width="22" height="22" fill="currentColor" fill-opacity="0.82"/>
<rect x="150" y="40" width="22" height="22" fill="currentColor" fill-opacity="0.82"/>
<rect x="172" y="40" width="22" height="22" fill="currentColor" fill-opacity="0.82"/>
<rect x="194" y="40" width="22" height="22" fill="currentColor" fill-opacity="0.82"/>
<line x1="128" y1="62" x2="128" y2="94"/>
<polygon points="128,94 124,85 132,85" fill="currentColor"/>
<line x1="128" y1="94" x2="128" y2="62"/>
<polygon points="128,62 132,71 124,71" fill="currentColor"/>
<rect x="40" y="94" width="22" height="22"/>
<rect x="62" y="94" width="22" height="22"/>
<rect x="84" y="94" width="22" height="22"/>
<rect x="106" y="94" width="22" height="22"/>
<rect x="128" y="94" width="22" height="22"/>
<rect x="150" y="94" width="22" height="22"/>
<rect x="172" y="94" width="22" height="22"/>
<rect x="194" y="94" width="22" height="22"/>
<line x1="128" y1="116" x2="128" y2="148"/>
<polygon points="128,148 124,139 132,139" fill="currentColor"/>
<line x1="128" y1="148" x2="128" y2="116"/>
<polygon points="128,116 132,125 124,125" fill="currentColor"/>
<rect x="40" y="148" width="22" height="22"/>
<rect x="62" y="148" width="22" height="22"/>
<rect x="84" y="148" width="22" height="22"/>
<rect x="106" y="148" width="22" height="22"/>
<rect x="128" y="148" width="22" height="22"/>
<rect x="150" y="148" width="22" height="22"/>
<rect x="172" y="148" width="22" height="22"/>
<rect x="194" y="148" width="22" height="22"/>
<rect x="340" y="40" width="22" height="22" fill="currentColor" fill-opacity="0.82"/>
<rect x="362" y="40" width="22" height="22" fill="currentColor" fill-opacity="0.82"/>
<rect x="384" y="40" width="22" height="22" fill="currentColor" fill-opacity="0.82"/>
<rect x="406" y="40" width="22" height="22" fill="currentColor" fill-opacity="0.82"/>
<rect x="428" y="40" width="22" height="22" fill="currentColor" fill-opacity="0.82"/>
<rect x="450" y="40" width="22" height="22" fill="currentColor" fill-opacity="0.82"/>
<rect x="472" y="40" width="22" height="22" fill="currentColor" fill-opacity="0.82"/>
<rect x="494" y="40" width="22" height="22" fill="currentColor" fill-opacity="0.82"/>
<line x1="428" y1="62" x2="428" y2="94"/>
<polygon points="428,94 424,85 432,85" fill="currentColor"/>
<line x1="428" y1="94" x2="428" y2="62"/>
<polygon points="428,62 432,71 424,71" fill="currentColor"/>
<rect x="340" y="94" width="22" height="22" fill="currentColor" fill-opacity="0.82"/>
<rect x="362" y="94" width="22" height="22" fill="currentColor" fill-opacity="0.82"/>
<rect x="384" y="94" width="22" height="22" fill="currentColor" fill-opacity="0.82"/>
<rect x="406" y="94" width="22" height="22" fill="currentColor" fill-opacity="0.82"/>
<rect x="428" y="94" width="22" height="22" fill="currentColor" fill-opacity="0.82"/>
<rect x="450" y="94" width="22" height="22" fill="currentColor" fill-opacity="0.82"/>
<rect x="472" y="94" width="22" height="22" fill="currentColor" fill-opacity="0.82"/>
<rect x="494" y="94" width="22" height="22" fill="currentColor" fill-opacity="0.82"/>
<line x1="428" y1="116" x2="428" y2="148"/>
<polygon points="428,148 424,139 432,139" fill="currentColor"/>
<line x1="428" y1="148" x2="428" y2="116"/>
<polygon points="428,116 432,125 424,125" fill="currentColor"/>
<rect x="340" y="148" width="22" height="22"/>
<rect x="362" y="148" width="22" height="22"/>
<rect x="384" y="148" width="22" height="22"/>
<rect x="406" y="148" width="22" height="22"/>
<rect x="428" y="148" width="22" height="22"/>
<rect x="450" y="148" width="22" height="22"/>
<rect x="472" y="148" width="22" height="22"/>
<rect x="494" y="148" width="22" height="22"/>
<rect x="640" y="40" width="22" height="22" fill="currentColor" fill-opacity="0.82"/>
<rect x="662" y="40" width="22" height="22" fill="currentColor" fill-opacity="0.82"/>
<rect x="684" y="40" width="22" height="22" fill="currentColor" fill-opacity="0.82"/>
<rect x="706" y="40" width="22" height="22" fill="currentColor" fill-opacity="0.82"/>
<rect x="728" y="40" width="22" height="22" fill="currentColor" fill-opacity="0.82"/>
<rect x="750" y="40" width="22" height="22" fill="currentColor" fill-opacity="0.82"/>
<rect x="772" y="40" width="22" height="22" fill="currentColor" fill-opacity="0.82"/>
<rect x="794" y="40" width="22" height="22" fill="currentColor" fill-opacity="0.82"/>
<line x1="728" y1="62" x2="728" y2="94"/>
<polygon points="728,94 724,85 732,85" fill="currentColor"/>
<line x1="728" y1="94" x2="728" y2="62"/>
<polygon points="728,62 732,71 724,71" fill="currentColor"/>
<rect x="640" y="94" width="22" height="22" fill="currentColor" fill-opacity="0.82"/>
<rect x="662" y="94" width="22" height="22" fill="currentColor" fill-opacity="0.82"/>
<rect x="684" y="94" width="22" height="22" fill="currentColor" fill-opacity="0.82"/>
<rect x="706" y="94" width="22" height="22" fill="currentColor" fill-opacity="0.82"/>
<rect x="728" y="94" width="22" height="22" fill="currentColor" fill-opacity="0.82"/>
<rect x="750" y="94" width="22" height="22" fill="currentColor" fill-opacity="0.82"/>
<rect x="772" y="94" width="22" height="22" fill="currentColor" fill-opacity="0.82"/>
<rect x="794" y="94" width="22" height="22" fill="currentColor" fill-opacity="0.82"/>
<line x1="728" y1="116" x2="728" y2="148"/>
<polygon points="728,148 724,139 732,139" fill="currentColor"/>
<line x1="728" y1="148" x2="728" y2="116"/>
<polygon points="728,116 732,125 724,125" fill="currentColor"/>
<rect x="640" y="148" width="22" height="22" fill="currentColor" fill-opacity="0.82"/>
<rect x="662" y="148" width="22" height="22" fill="currentColor" fill-opacity="0.82"/>
<rect x="684" y="148" width="22" height="22" fill="currentColor" fill-opacity="0.82"/>
<rect x="706" y="148" width="22" height="22" fill="currentColor" fill-opacity="0.82"/>
<rect x="728" y="148" width="22" height="22" fill="currentColor" fill-opacity="0.82"/>
<rect x="750" y="148" width="22" height="22" fill="currentColor" fill-opacity="0.82"/>
<rect x="772" y="148" width="22" height="22" fill="currentColor" fill-opacity="0.82"/>
<rect x="794" y="148" width="22" height="22" fill="currentColor" fill-opacity="0.82"/>
</g>
<text x="128" y="20" text-anchor="middle" font-size="14">PUSH ครั้งที่ 1</text>
<text x="51" y="56" text-anchor="middle" font-size="14" fill="#ffffff">1</text>
<text x="73" y="56" text-anchor="middle" font-size="14" fill="#ffffff">0</text>
<text x="95" y="56" text-anchor="middle" font-size="14" fill="#ffffff">0</text>
<text x="117" y="56" text-anchor="middle" font-size="14" fill="#ffffff">1</text>
<text x="139" y="56" text-anchor="middle" font-size="14" fill="#ffffff">0</text>
<text x="161" y="56" text-anchor="middle" font-size="14" fill="#ffffff">0</text>
<text x="183" y="56" text-anchor="middle" font-size="14" fill="#ffffff">1</text>
<text x="205" y="56" text-anchor="middle" font-size="14" fill="#ffffff">1</text>
<text x="224" y="56" text-anchor="start" font-size="13">Top</text>
<text x="428" y="20" text-anchor="middle" font-size="14">PUSH ครั้งที่ 2</text>
<text x="351" y="56" text-anchor="middle" font-size="14" fill="#ffffff">1</text>
<text x="373" y="56" text-anchor="middle" font-size="14" fill="#ffffff">1</text>
<text x="395" y="56" text-anchor="middle" font-size="14" fill="#ffffff">1</text>
<text x="417" y="56" text-anchor="middle" font-size="14" fill="#ffffff">1</text>
<text x="439" y="56" text-anchor="middle" font-size="14" fill="#ffffff">0</text>
<text x="461" y="56" text-anchor="middle" font-size="14" fill="#ffffff">0</text>
<text x="483" y="56" text-anchor="middle" font-size="14" fill="#ffffff">0</text>
<text x="505" y="56" text-anchor="middle" font-size="14" fill="#ffffff">0</text>
<text x="351" y="110" text-anchor="middle" font-size="14" fill="#ffffff">1</text>
<text x="373" y="110" text-anchor="middle" font-size="14" fill="#ffffff">0</text>
<text x="395" y="110" text-anchor="middle" font-size="14" fill="#ffffff">0</text>
<text x="417" y="110" text-anchor="middle" font-size="14" fill="#ffffff">1</text>
<text x="439" y="110" text-anchor="middle" font-size="14" fill="#ffffff">0</text>
<text x="461" y="110" text-anchor="middle" font-size="14" fill="#ffffff">0</text>
<text x="483" y="110" text-anchor="middle" font-size="14" fill="#ffffff">1</text>
<text x="505" y="110" text-anchor="middle" font-size="14" fill="#ffffff">1</text>
<text x="524" y="56" text-anchor="start" font-size="13">Top</text>
<text x="728" y="20" text-anchor="middle" font-size="14">PUSH ครั้งที่ 3</text>
<text x="651" y="56" text-anchor="middle" font-size="14" fill="#ffffff">0</text>
<text x="673" y="56" text-anchor="middle" font-size="14" fill="#ffffff">1</text>
<text x="695" y="56" text-anchor="middle" font-size="14" fill="#ffffff">0</text>
<text x="717" y="56" text-anchor="middle" font-size="14" fill="#ffffff">1</text>
<text x="739" y="56" text-anchor="middle" font-size="14" fill="#ffffff">0</text>
<text x="761" y="56" text-anchor="middle" font-size="14" fill="#ffffff">1</text>
<text x="783" y="56" text-anchor="middle" font-size="14" fill="#ffffff">0</text>
<text x="805" y="56" text-anchor="middle" font-size="14" fill="#ffffff">1</text>
<text x="651" y="110" text-anchor="middle" font-size="14" fill="#ffffff">1</text>
<text x="673" y="110" text-anchor="middle" font-size="14" fill="#ffffff">1</text>
<text x="695" y="110" text-anchor="middle" font-size="14" fill="#ffffff">1</text>
<text x="717" y="110" text-anchor="middle" font-size="14" fill="#ffffff">1</text>
<text x="739" y="110" text-anchor="middle" font-size="14" fill="#ffffff">0</text>
<text x="761" y="110" text-anchor="middle" font-size="14" fill="#ffffff">0</text>
<text x="783" y="110" text-anchor="middle" font-size="14" fill="#ffffff">0</text>
<text x="805" y="110" text-anchor="middle" font-size="14" fill="#ffffff">0</text>
<text x="651" y="164" text-anchor="middle" font-size="14" fill="#ffffff">1</text>
<text x="673" y="164" text-anchor="middle" font-size="14" fill="#ffffff">0</text>
<text x="695" y="164" text-anchor="middle" font-size="14" fill="#ffffff">0</text>
<text x="717" y="164" text-anchor="middle" font-size="14" fill="#ffffff">1</text>
<text x="739" y="164" text-anchor="middle" font-size="14" fill="#ffffff">0</text>
<text x="761" y="164" text-anchor="middle" font-size="14" fill="#ffffff">0</text>
<text x="783" y="164" text-anchor="middle" font-size="14" fill="#ffffff">1</text>
<text x="805" y="164" text-anchor="middle" font-size="14" fill="#ffffff">1</text>
<text x="824" y="56" text-anchor="start" font-size="13">Top</text>
</g>
</svg>
</div>

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="940" height="212" viewBox="0 0 940 212" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<rect x="40" y="40" width="22" height="22" fill="currentColor" fill-opacity="0.82"/>
<rect x="62" y="40" width="22" height="22" fill="currentColor" fill-opacity="0.82"/>
<rect x="84" y="40" width="22" height="22" fill="currentColor" fill-opacity="0.82"/>
<rect x="106" y="40" width="22" height="22" fill="currentColor" fill-opacity="0.82"/>
<rect x="128" y="40" width="22" height="22" fill="currentColor" fill-opacity="0.82"/>
<rect x="150" y="40" width="22" height="22" fill="currentColor" fill-opacity="0.82"/>
<rect x="172" y="40" width="22" height="22" fill="currentColor" fill-opacity="0.82"/>
<rect x="194" y="40" width="22" height="22" fill="currentColor" fill-opacity="0.82"/>
<line x1="128" y1="62" x2="128" y2="94"/>
<polygon points="128,94 124,85 132,85" fill="currentColor"/>
<line x1="128" y1="94" x2="128" y2="62"/>
<polygon points="128,62 132,71 124,71" fill="currentColor"/>
<rect x="40" y="94" width="22" height="22" fill="currentColor" fill-opacity="0.82"/>
<rect x="62" y="94" width="22" height="22" fill="currentColor" fill-opacity="0.82"/>
<rect x="84" y="94" width="22" height="22" fill="currentColor" fill-opacity="0.82"/>
<rect x="106" y="94" width="22" height="22" fill="currentColor" fill-opacity="0.82"/>
<rect x="128" y="94" width="22" height="22" fill="currentColor" fill-opacity="0.82"/>
<rect x="150" y="94" width="22" height="22" fill="currentColor" fill-opacity="0.82"/>
<rect x="172" y="94" width="22" height="22" fill="currentColor" fill-opacity="0.82"/>
<rect x="194" y="94" width="22" height="22" fill="currentColor" fill-opacity="0.82"/>
<line x1="128" y1="116" x2="128" y2="148"/>
<polygon points="128,148 124,139 132,139" fill="currentColor"/>
<line x1="128" y1="148" x2="128" y2="116"/>
<polygon points="128,116 132,125 124,125" fill="currentColor"/>
<rect x="40" y="148" width="22" height="22"/>
<rect x="62" y="148" width="22" height="22"/>
<rect x="84" y="148" width="22" height="22"/>
<rect x="106" y="148" width="22" height="22"/>
<rect x="128" y="148" width="22" height="22"/>
<rect x="150" y="148" width="22" height="22"/>
<rect x="172" y="148" width="22" height="22"/>
<rect x="194" y="148" width="22" height="22"/>
<rect x="340" y="40" width="22" height="22" fill="currentColor" fill-opacity="0.82"/>
<rect x="362" y="40" width="22" height="22" fill="currentColor" fill-opacity="0.82"/>
<rect x="384" y="40" width="22" height="22" fill="currentColor" fill-opacity="0.82"/>
<rect x="406" y="40" width="22" height="22" fill="currentColor" fill-opacity="0.82"/>
<rect x="428" y="40" width="22" height="22" fill="currentColor" fill-opacity="0.82"/>
<rect x="450" y="40" width="22" height="22" fill="currentColor" fill-opacity="0.82"/>
<rect x="472" y="40" width="22" height="22" fill="currentColor" fill-opacity="0.82"/>
<rect x="494" y="40" width="22" height="22" fill="currentColor" fill-opacity="0.82"/>
<line x1="428" y1="62" x2="428" y2="94"/>
<polygon points="428,94 424,85 432,85" fill="currentColor"/>
<line x1="428" y1="94" x2="428" y2="62"/>
<polygon points="428,62 432,71 424,71" fill="currentColor"/>
<rect x="340" y="94" width="22" height="22"/>
<rect x="362" y="94" width="22" height="22"/>
<rect x="384" y="94" width="22" height="22"/>
<rect x="406" y="94" width="22" height="22"/>
<rect x="428" y="94" width="22" height="22"/>
<rect x="450" y="94" width="22" height="22"/>
<rect x="472" y="94" width="22" height="22"/>
<rect x="494" y="94" width="22" height="22"/>
<line x1="428" y1="116" x2="428" y2="148"/>
<polygon points="428,148 424,139 432,139" fill="currentColor"/>
<line x1="428" y1="148" x2="428" y2="116"/>
<polygon points="428,116 432,125 424,125" fill="currentColor"/>
<rect x="340" y="148" width="22" height="22"/>
<rect x="362" y="148" width="22" height="22"/>
<rect x="384" y="148" width="22" height="22"/>
<rect x="406" y="148" width="22" height="22"/>
<rect x="428" y="148" width="22" height="22"/>
<rect x="450" y="148" width="22" height="22"/>
<rect x="472" y="148" width="22" height="22"/>
<rect x="494" y="148" width="22" height="22"/>
<rect x="640" y="40" width="22" height="22"/>
<rect x="662" y="40" width="22" height="22"/>
<rect x="684" y="40" width="22" height="22"/>
<rect x="706" y="40" width="22" height="22"/>
<rect x="728" y="40" width="22" height="22"/>
<rect x="750" y="40" width="22" height="22"/>
<rect x="772" y="40" width="22" height="22"/>
<rect x="794" y="40" width="22" height="22"/>
<line x1="728" y1="62" x2="728" y2="94"/>
<polygon points="728,94 724,85 732,85" fill="currentColor"/>
<line x1="728" y1="94" x2="728" y2="62"/>
<polygon points="728,62 732,71 724,71" fill="currentColor"/>
<rect x="640" y="94" width="22" height="22"/>
<rect x="662" y="94" width="22" height="22"/>
<rect x="684" y="94" width="22" height="22"/>
<rect x="706" y="94" width="22" height="22"/>
<rect x="728" y="94" width="22" height="22"/>
<rect x="750" y="94" width="22" height="22"/>
<rect x="772" y="94" width="22" height="22"/>
<rect x="794" y="94" width="22" height="22"/>
<line x1="728" y1="116" x2="728" y2="148"/>
<polygon points="728,148 724,139 732,139" fill="currentColor"/>
<line x1="728" y1="148" x2="728" y2="116"/>
<polygon points="728,116 732,125 724,125" fill="currentColor"/>
<rect x="640" y="148" width="22" height="22"/>
<rect x="662" y="148" width="22" height="22"/>
<rect x="684" y="148" width="22" height="22"/>
<rect x="706" y="148" width="22" height="22"/>
<rect x="728" y="148" width="22" height="22"/>
<rect x="750" y="148" width="22" height="22"/>
<rect x="772" y="148" width="22" height="22"/>
<rect x="794" y="148" width="22" height="22"/>
</g>
<text x="128" y="20" text-anchor="middle" font-size="14">POP ครั้งที่ 1</text>
<text x="51" y="56" text-anchor="middle" font-size="14" fill="#ffffff">1</text>
<text x="73" y="56" text-anchor="middle" font-size="14" fill="#ffffff">1</text>
<text x="95" y="56" text-anchor="middle" font-size="14" fill="#ffffff">1</text>
<text x="117" y="56" text-anchor="middle" font-size="14" fill="#ffffff">1</text>
<text x="139" y="56" text-anchor="middle" font-size="14" fill="#ffffff">0</text>
<text x="161" y="56" text-anchor="middle" font-size="14" fill="#ffffff">0</text>
<text x="183" y="56" text-anchor="middle" font-size="14" fill="#ffffff">0</text>
<text x="205" y="56" text-anchor="middle" font-size="14" fill="#ffffff">0</text>
<text x="51" y="110" text-anchor="middle" font-size="14" fill="#ffffff">1</text>
<text x="73" y="110" text-anchor="middle" font-size="14" fill="#ffffff">0</text>
<text x="95" y="110" text-anchor="middle" font-size="14" fill="#ffffff">0</text>
<text x="117" y="110" text-anchor="middle" font-size="14" fill="#ffffff">1</text>
<text x="139" y="110" text-anchor="middle" font-size="14" fill="#ffffff">0</text>
<text x="161" y="110" text-anchor="middle" font-size="14" fill="#ffffff">0</text>
<text x="183" y="110" text-anchor="middle" font-size="14" fill="#ffffff">1</text>
<text x="205" y="110" text-anchor="middle" font-size="14" fill="#ffffff">1</text>
<text x="224" y="56" text-anchor="start" font-size="13">Top</text>
<text x="428" y="20" text-anchor="middle" font-size="14">POP ครั้งที่ 2</text>
<text x="351" y="56" text-anchor="middle" font-size="14" fill="#ffffff">1</text>
<text x="373" y="56" text-anchor="middle" font-size="14" fill="#ffffff">0</text>
<text x="395" y="56" text-anchor="middle" font-size="14" fill="#ffffff">0</text>
<text x="417" y="56" text-anchor="middle" font-size="14" fill="#ffffff">1</text>
<text x="439" y="56" text-anchor="middle" font-size="14" fill="#ffffff">0</text>
<text x="461" y="56" text-anchor="middle" font-size="14" fill="#ffffff">0</text>
<text x="483" y="56" text-anchor="middle" font-size="14" fill="#ffffff">1</text>
<text x="505" y="56" text-anchor="middle" font-size="14" fill="#ffffff">1</text>
<text x="524" y="56" text-anchor="start" font-size="13">Top</text>
<text x="728" y="20" text-anchor="middle" font-size="14">POP ครั้งที่ 3</text>
<text x="824" y="56" text-anchor="start" font-size="13">Top</text>
</g>
</svg>
</div>

$\mathbf{Ans}\quad \text{ลำดับที่ POP ออก: } 01010101,\ 11110000,\ 10010011 \text{ (กลับกับลำดับที่ PUSH)}$

| การกระทำ | Top (ตัวที่ 1) | ตัวที่ 2 | ตัวที่ 3 |
|:-:|:-:|:-:|:-:|
| PUSH 10010011 | 10010011 | - | - |
| PUSH 11110000 | 11110000 | 10010011 | - |
| PUSH 01010101 | 01010101 | 11110000 | 10010011 |
| POP 1 | 11110000 | 10010011 | - |
| POP 2 | 10010011 | - | - |
| POP 3 | - | - | - |

### 2.8 LIFO ในไมโครโปรเซสเซอร์ : RAM Stack

ในไมโครโปรเซสเซอร์ กำหนดพื้นที่ส่วนหนึ่งของ **RAM** มาทำเป็น Stack แทนการใช้ชุดของ Register ต้องมี Register ที่เก็บแอดเดรสของ Memory ในส่วนที่เป็น Stack เรียกว่า **Stack Pointer** ซึ่งเก็บแอดเดรสของ Memory ที่เป็นส่วนบนสุดของ Stack (Top of Stack) ตัวอย่างในสไลด์ใช้ Memory 64Kbyte แอดเดรส 16 บิต ($0000$ ถึง $FFFF$ เลขฐานสิบหก) และเก็บข้อมูลเป็นเวิร์ด 16 บิต (2 ไบต์)

- **PUSH** : ค่าใน Stack Pointer **ลดลง** (ครั้งละ 2 สำหรับเวิร์ด 16 บิต) ให้ชี้ไปตำแหน่งใหม่ แล้วเก็บข้อมูลที่นำเข้าไว้ที่ตำแหน่งนั้นและตำแหน่งถัดขึ้นไป (ที่แอดเดรสสูงกว่าค่า Stack Pointer) Stack จึงเติบโตลงทางแอดเดรสต่ำ
- **POP** : อ่านข้อมูลสุดท้ายที่นำเข้า (ที่ตำแหน่งที่ Stack Pointer ชี้) ออกมา แล้วค่าใน Stack Pointer **เพิ่มขึ้น** (ครั้งละ 2) ไปยังตำแหน่งต่อไปของข้อมูลที่เก็บ

$$\text{PUSH : } SP \leftarrow SP - 2 \quad;\qquad \text{POP : } SP \leftarrow SP + 2$$

### ตัวอย่างที่ 19  Stack Pointer เริ่มต้นที่ $FFEE$ จงแสดงการ PUSH เวิร์ด $0001001000110100$ ($1234_{16}$) ลงใน RAM Stack และการ POP เวิร์ดนั้นออกมา

$\mathbf{Sol}^{n}$

**PUSH**

- Stack Pointer ลดลง 2 : $FFEE - 2 = FFEC$ (เลขฐานสิบหก)
- เวิร์ด $0001001000110100$ แบ่งเป็น 2 ไบต์ : ไบต์ต่ำ $00110100\ (34_{16})$ และไบต์สูง $00010010\ (12_{16})$
- เก็บไบต์ต่ำที่แอดเดรส $FFEC$ (Top of Stack ที่ Stack Pointer ชี้) และไบต์สูงที่แอดเดรส $FFED$ (ตำแหน่งสูงกว่า)

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="482" height="180" viewBox="0 0 482 180" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<rect x="160" y="40" width="24" height="24"/>
<rect x="184" y="40" width="24" height="24"/>
<rect x="208" y="40" width="24" height="24"/>
<rect x="232" y="40" width="24" height="24"/>
<rect x="256" y="40" width="24" height="24"/>
<rect x="280" y="40" width="24" height="24"/>
<rect x="304" y="40" width="24" height="24"/>
<rect x="328" y="40" width="24" height="24"/>
<rect x="160" y="64" width="24" height="24"/>
<rect x="184" y="64" width="24" height="24"/>
<rect x="208" y="64" width="24" height="24"/>
<rect x="232" y="64" width="24" height="24"/>
<rect x="256" y="64" width="24" height="24"/>
<rect x="280" y="64" width="24" height="24"/>
<rect x="304" y="64" width="24" height="24"/>
<rect x="328" y="64" width="24" height="24"/>
<rect x="160" y="88" width="24" height="24" fill="currentColor" fill-opacity="0.82"/>
<rect x="184" y="88" width="24" height="24" fill="currentColor" fill-opacity="0.82"/>
<rect x="208" y="88" width="24" height="24" fill="currentColor" fill-opacity="0.82"/>
<rect x="232" y="88" width="24" height="24" fill="currentColor" fill-opacity="0.82"/>
<rect x="256" y="88" width="24" height="24" fill="currentColor" fill-opacity="0.82"/>
<rect x="280" y="88" width="24" height="24" fill="currentColor" fill-opacity="0.82"/>
<rect x="304" y="88" width="24" height="24" fill="currentColor" fill-opacity="0.82"/>
<rect x="328" y="88" width="24" height="24" fill="currentColor" fill-opacity="0.82"/>
<rect x="160" y="112" width="24" height="24" fill="currentColor" fill-opacity="0.82"/>
<rect x="184" y="112" width="24" height="24" fill="currentColor" fill-opacity="0.82"/>
<rect x="208" y="112" width="24" height="24" fill="currentColor" fill-opacity="0.82"/>
<rect x="232" y="112" width="24" height="24" fill="currentColor" fill-opacity="0.82"/>
<rect x="256" y="112" width="24" height="24" fill="currentColor" fill-opacity="0.82"/>
<rect x="280" y="112" width="24" height="24" fill="currentColor" fill-opacity="0.82"/>
<rect x="304" y="112" width="24" height="24" fill="currentColor" fill-opacity="0.82"/>
<rect x="328" y="112" width="24" height="24" fill="currentColor" fill-opacity="0.82"/>
<rect x="160" y="136" width="24" height="24"/>
<rect x="184" y="136" width="24" height="24"/>
<rect x="208" y="136" width="24" height="24"/>
<rect x="232" y="136" width="24" height="24"/>
<rect x="256" y="136" width="24" height="24"/>
<rect x="280" y="136" width="24" height="24"/>
<rect x="304" y="136" width="24" height="24"/>
<rect x="328" y="136" width="24" height="24"/>
<rect x="18" y="86" width="60" height="28" rx="2"/>
<line x1="78" y1="100" x2="104" y2="100"/>
<polygon points="104,100 95,104 95,96" fill="currentColor"/>
</g>
<text x="256" y="20" text-anchor="middle" font-size="14">หลัง PUSH : Stack Pointer = FFEC</text>
<text x="146" y="57" text-anchor="end" font-size="14">FFEA</text>
<text x="146" y="81" text-anchor="end" font-size="14">FFEB</text>
<text x="146" y="105" text-anchor="end" font-size="14">FFEC</text>
<text x="172" y="105" text-anchor="middle" font-size="14" fill="#ffffff">0</text>
<text x="196" y="105" text-anchor="middle" font-size="14" fill="#ffffff">0</text>
<text x="220" y="105" text-anchor="middle" font-size="14" fill="#ffffff">1</text>
<text x="244" y="105" text-anchor="middle" font-size="14" fill="#ffffff">1</text>
<text x="268" y="105" text-anchor="middle" font-size="14" fill="#ffffff">0</text>
<text x="292" y="105" text-anchor="middle" font-size="14" fill="#ffffff">1</text>
<text x="316" y="105" text-anchor="middle" font-size="14" fill="#ffffff">0</text>
<text x="340" y="105" text-anchor="middle" font-size="14" fill="#ffffff">0</text>
<text x="146" y="129" text-anchor="end" font-size="14">FFED</text>
<text x="172" y="129" text-anchor="middle" font-size="14" fill="#ffffff">0</text>
<text x="196" y="129" text-anchor="middle" font-size="14" fill="#ffffff">0</text>
<text x="220" y="129" text-anchor="middle" font-size="14" fill="#ffffff">0</text>
<text x="244" y="129" text-anchor="middle" font-size="14" fill="#ffffff">1</text>
<text x="268" y="129" text-anchor="middle" font-size="14" fill="#ffffff">0</text>
<text x="292" y="129" text-anchor="middle" font-size="14" fill="#ffffff">0</text>
<text x="316" y="129" text-anchor="middle" font-size="14" fill="#ffffff">1</text>
<text x="340" y="129" text-anchor="middle" font-size="14" fill="#ffffff">0</text>
<text x="146" y="153" text-anchor="end" font-size="14">FFEE</text>
<text x="48" y="105" text-anchor="middle" font-size="14">FFEC</text>
<text x="360" y="105" text-anchor="start" font-size="13">Top of stack</text>
<text x="48" y="78" text-anchor="middle" font-size="12">Stack pointer</text>
</g>
</svg>
</div>

**POP**

- ค่าที่ Stack Pointer ชี้อยู่คือ $FFEC$ อ่านข้อมูล 2 ไบต์ที่ $FFEC$ และ $FFED$ ได้ $00110100$ และ $00010010$ รวมเป็นเวิร์ด $0001001000110100\ (1234_{16})$
- Stack Pointer เพิ่มขึ้น 2 : $FFEC + 2 = FFEE$ (กลับเป็นค่าเริ่มต้น ข้อมูลเดิมยังค้างอยู่ใน RAM แต่ถือว่าอยู่นอก Stack แล้ว)

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="482" height="180" viewBox="0 0 482 180" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<rect x="160" y="40" width="24" height="24"/>
<rect x="184" y="40" width="24" height="24"/>
<rect x="208" y="40" width="24" height="24"/>
<rect x="232" y="40" width="24" height="24"/>
<rect x="256" y="40" width="24" height="24"/>
<rect x="280" y="40" width="24" height="24"/>
<rect x="304" y="40" width="24" height="24"/>
<rect x="328" y="40" width="24" height="24"/>
<rect x="160" y="64" width="24" height="24"/>
<rect x="184" y="64" width="24" height="24"/>
<rect x="208" y="64" width="24" height="24"/>
<rect x="232" y="64" width="24" height="24"/>
<rect x="256" y="64" width="24" height="24"/>
<rect x="280" y="64" width="24" height="24"/>
<rect x="304" y="64" width="24" height="24"/>
<rect x="328" y="64" width="24" height="24"/>
<rect x="160" y="88" width="24" height="24"/>
<rect x="184" y="88" width="24" height="24"/>
<rect x="208" y="88" width="24" height="24"/>
<rect x="232" y="88" width="24" height="24"/>
<rect x="256" y="88" width="24" height="24"/>
<rect x="280" y="88" width="24" height="24"/>
<rect x="304" y="88" width="24" height="24"/>
<rect x="328" y="88" width="24" height="24"/>
<rect x="160" y="112" width="24" height="24"/>
<rect x="184" y="112" width="24" height="24"/>
<rect x="208" y="112" width="24" height="24"/>
<rect x="232" y="112" width="24" height="24"/>
<rect x="256" y="112" width="24" height="24"/>
<rect x="280" y="112" width="24" height="24"/>
<rect x="304" y="112" width="24" height="24"/>
<rect x="328" y="112" width="24" height="24"/>
<rect x="160" y="136" width="24" height="24" fill="currentColor" fill-opacity="0.82"/>
<rect x="184" y="136" width="24" height="24" fill="currentColor" fill-opacity="0.82"/>
<rect x="208" y="136" width="24" height="24" fill="currentColor" fill-opacity="0.82"/>
<rect x="232" y="136" width="24" height="24" fill="currentColor" fill-opacity="0.82"/>
<rect x="256" y="136" width="24" height="24" fill="currentColor" fill-opacity="0.82"/>
<rect x="280" y="136" width="24" height="24" fill="currentColor" fill-opacity="0.82"/>
<rect x="304" y="136" width="24" height="24" fill="currentColor" fill-opacity="0.82"/>
<rect x="328" y="136" width="24" height="24" fill="currentColor" fill-opacity="0.82"/>
<rect x="18" y="134" width="60" height="28" rx="2"/>
<line x1="78" y1="148" x2="104" y2="148"/>
<polygon points="104,148 95,152 95,144" fill="currentColor"/>
</g>
<text x="256" y="20" text-anchor="middle" font-size="14">หลัง POP : Stack Pointer = FFEE</text>
<text x="146" y="57" text-anchor="end" font-size="14">FFEA</text>
<text x="146" y="81" text-anchor="end" font-size="14">FFEB</text>
<text x="146" y="105" text-anchor="end" font-size="14">FFEC</text>
<text x="146" y="129" text-anchor="end" font-size="14">FFED</text>
<text x="146" y="153" text-anchor="end" font-size="14">FFEE</text>
<text x="172" y="153" text-anchor="middle" font-size="14" fill="#ffffff">0</text>
<text x="196" y="153" text-anchor="middle" font-size="14" fill="#ffffff">0</text>
<text x="220" y="153" text-anchor="middle" font-size="14" fill="#ffffff">0</text>
<text x="244" y="153" text-anchor="middle" font-size="14" fill="#ffffff">0</text>
<text x="268" y="153" text-anchor="middle" font-size="14" fill="#ffffff">0</text>
<text x="292" y="153" text-anchor="middle" font-size="14" fill="#ffffff">0</text>
<text x="316" y="153" text-anchor="middle" font-size="14" fill="#ffffff">0</text>
<text x="340" y="153" text-anchor="middle" font-size="14" fill="#ffffff">0</text>
<text x="48" y="153" text-anchor="middle" font-size="14">FFEE</text>
<text x="360" y="153" text-anchor="start" font-size="13">Top of stack</text>
<text x="48" y="126" text-anchor="middle" font-size="12">Stack pointer</text>
</g>
</svg>
</div>

$\mathbf{Ans}\quad \text{PUSH: } SP = FFEC,\ [FFEC] = 34_{16},\ [FFED] = 12_{16} \ ;\ \text{POP: ได้ } 1234_{16},\ SP = FFEE$

### ตัวอย่างที่ 20  Stack Pointer เริ่มต้นที่ $FFEE$ PUSH เวิร์ด $1234_{16}$ แล้ว PUSH เวิร์ด $ABCD_{16}$ จงหาค่า Stack Pointer หลังแต่ละการกระทำ และ POP 2 ครั้งจะได้ข้อมูลอะไรตามลำดับ

$\mathbf{Sol}^{n}$

- PUSH $1234_{16}$ : $SP = FFEE - 2 = FFEC$ เก็บ $34_{16}$ ที่ $FFEC$ และ $12_{16}$ ที่ $FFED$
- PUSH $ABCD_{16}$ : $SP = FFEC - 2 = FFEA$ เก็บ $CD_{16}$ ที่ $FFEA$ และ $AB_{16}$ ที่ $FFEB$
- POP ครั้งที่ 1 : อ่านที่ $FFEA, FFEB$ ได้ $ABCD_{16}$ (เข้าหลังสุด ออกก่อน) $SP = FFEA + 2 = FFEC$
- POP ครั้งที่ 2 : อ่านที่ $FFEC, FFED$ ได้ $1234_{16}$ $SP = FFEC + 2 = FFEE$

$\mathbf{Ans}\quad SP = FFEC,\ FFEA \ ;\ \text{POP ได้ } ABCD_{16}\text{ แล้ว } 1234_{16},\ SP \text{ กลับเป็น } FFEE$

| การกระทำ | Stack Pointer | ข้อมูล |
|:-:|:-:|:-:|
| เริ่มต้น | FFEE | - |
| PUSH 1234 | FFEC | [FFEC] = 34, [FFED] = 12 |
| PUSH ABCD | FFEA | [FFEA] = CD, [FFEB] = AB |
| POP | FFEC | ได้ ABCD |
| POP | FFEE | ได้ 1234 |

### 2.9 สรุปหน่วยความจำ

| หัวข้อ | สาระสำคัญ |
|:--|:--|
| หน่วยข้อมูล | บิต 1 บิต, นิบเบิล 4 บิต, ไบต์ 8 บิต, เวิร์ด 1 ไบต์ขึ้นไป ; เซลล์ = ส่วนที่เก็บ 1 บิต |
| แอดเดรสและขนาด | แอดเดรส = ตำแหน่งของข้อมูลหนึ่งหน่วย ; สายแอดเดรส $n$ เส้น เลือกได้ $2^{n}$ ตำแหน่ง ; ขนาด = จำนวนแอดเดรส $\times$ ความยาวเวิร์ด |
| การทำงาน | Write = นำข้อมูลเข้าไปเก็บในแอดเดรสที่กำหนด ; Read = นำข้อมูลออกมา (ข้อมูลยังอยู่) ; ใช้ Address Bus (เลือกด้วย Address Decoder) + Data Bus (สองทิศทาง) + Read/Write |
| RAM | เลือกแอดเดรสใดก็ได้ในเวลาเท่ากัน อ่านและเขียนได้ ข้อมูลหายเมื่อไม่มีไฟ (Volatile) |
| SRAM / DRAM | SRAM ใช้ Flip-Flop เร็ว ไม่ต้องรีเฟรซ (ใช้เป็น Cache) ; DRAM ใช้ Capacitor ต้องรีเฟรซ ช้ากว่า แต่จุมากและถูกกว่า (ใช้เป็น Main Memory) |
| ROM | อ่านได้อย่างเดียว ข้อมูลอยู่ถาวร (Nonvolatile) : Mask ROM (โรงงาน), PROM (ฟิวส์ ลบไม่ได้), EPROM (ลบแล้วโปรแกรมใหม่) แบบ UV (แสงอัลตราไวโอเลต) และ EEPROM (กระแสไฟฟ้า) |
| การขยาย | ขยายความยาวเวิร์ด : ต่อแอดเดรสร่วมกัน เพิ่มบิตข้อมูล ; ขยายขนาด : เพิ่มบิตแอดเดรส 1 บิตเลือกชิปด้วย Enable |
| FIFO | เข้าก่อนออกก่อน ข้อมูลตกไปอยู่ตำแหน่งเอาต์พุตทันที ใช้เชื่อมระบบที่ความเร็วต่างกัน |
| LIFO | เข้าหลังออกก่อน (Push-down Stack, Top of Stack) PUSH / POP ; ใน RAM ใช้ Stack Pointer (PUSH ลด, POP เพิ่ม) |

### 2.10 ข้อควรระวังในการสอบ

- จำนวนตำแหน่ง $= 2^{n}$ (ไม่ใช่ $n^{2}$) ขนาดบิตรวม = จำนวนตำแหน่ง $\times$ ความยาวเวิร์ด และ $1$ ไบต์ $= 8$ บิต
- RAM กับ ROM : RAM อ่านเขียนได้แต่ Volatile ; ROM อ่านอย่างเดียวแต่ Nonvolatile (SRAM และ DRAM เป็น Volatile ทั้งคู่)
- SRAM = Flip-Flop (เร็ว ไม่ต้องรีเฟรซ), DRAM = Capacitor (ต้องรีเฟรซ จุมากกว่า ถูกกว่า)
- PROM เผาฟิวส์ครั้งเดียว ลบไม่ได้ ; UV EPROM ลบด้วยแสงอัลตราไวโอเลต ; EEPROM ลบด้วยกระแสไฟฟ้า
- ขยายความยาวเวิร์ดไม่เพิ่มสายแอดเดรส ขยายขนาดต้องเพิ่มสายแอดเดรสและใช้ Enable เลือกชิป (ชิปหนึ่งผ่านอินเวอร์เตอร์)
- FIFO = คิว (เข้าก่อนออกก่อน), LIFO = สแตก (เข้าหลังออกก่อน)
- RAM Stack ในสไลด์ PUSH แล้ว Stack Pointer ลดลง และ POP แล้วเพิ่มขึ้น (Stack โตลงทางแอดเดรสต่ำ)

## 3. วงจรซีเควนเชียล (Sequential Circuit)

### 3.1 วงจรซีเควนเชียลคืออะไร

**Sequential Circuit** เป็นวงจรที่ **เอาต์พุตขึ้นอยู่กับอินพุตในขณะนั้น และผลเนื่องจากค่าของอินพุตที่ผ่านมา** โดยเก็บไว้ใน Memory (เช่น D Flip-Flop) ต่างจากวงจรคอมบิเนชันที่เอาต์พุตขึ้นกับอินพุตในขณะนั้นเท่านั้น

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="510" height="230" viewBox="0 0 510 230" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(10,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<rect x="150" y="30" width="160" height="80" rx="2"/>
<rect x="185" y="160" width="90" height="44" rx="2"/>
<line x1="70" y1="50" x2="150" y2="50"/>
<line x1="70" y1="70" x2="150" y2="70"/>
<line x1="310" y1="50" x2="390" y2="50"/>
<line x1="310" y1="70" x2="390" y2="70"/>
<line x1="185" y1="182" x2="120" y2="182"/>
<line x1="120" y1="182" x2="120" y2="98"/>
<line x1="120" y1="98" x2="150" y2="98"/>
<line x1="310" y1="98" x2="340" y2="98"/>
<line x1="340" y1="98" x2="340" y2="182"/>
<line x1="340" y1="182" x2="275" y2="182"/>
</g>
<text x="230" y="62" text-anchor="middle" font-size="17">Combinational</text>
<text x="230" y="86" text-anchor="middle" font-size="17">Circuit</text>
<text x="230" y="188" text-anchor="middle" font-size="17">Memory</text>
<text x="62" y="60" text-anchor="end" font-size="16">Input</text>
<text x="100" y="44" text-anchor="middle" font-size="13">x<tspan dy="4" font-size="9">1</tspan></text>
<text x="100" y="84" text-anchor="middle" font-size="13">xn</text>
<text x="398" y="60" text-anchor="start" font-size="16">Output</text>
<text x="350" y="44" text-anchor="middle" font-size="13">Z<tspan dy="4" font-size="9">1</tspan></text>
<text x="350" y="84" text-anchor="middle" font-size="13">Zm</text>
<text x="104" y="140" text-anchor="end" font-size="14">y1 ... yr</text>
<text x="104" y="156" text-anchor="end" font-size="12">(Present State)</text>
<text x="350" y="140" text-anchor="start" font-size="14">Y1 ... Yr</text>
<text x="350" y="156" text-anchor="start" font-size="12">(Next State)</text>
</g>
</svg>
</div>

| สัญลักษณ์ | ความหมาย |
|:--|:--|
| $x_1, \dots, x_n$ | Input (อินพุต) |
| $Z_1, \dots, Z_m$ | Output (เอาต์พุต) |
| $y_1, \dots, y_r$ | Present State (สถานะปัจจุบัน) คือเอาต์พุตของ Memory |
| $Y_1, \dots, Y_r$ | Next State (สถานะถัดไป) คืออินพุตของ Memory (เมื่อ Memory เป็น D Flip-Flop) |

**วงจร Sequential แบ่งเป็น 2 แบบ**

1. **Synchronous Sequential** : Memory ทุกตัวได้รับสัญญาณ Clock จากภายนอกเหมือนกัน
2. **Asynchronous Sequential** : มี Memory อย่างน้อยหนึ่งตัวที่ไม่ได้รับสัญญาณ Clock จากภายนอก

**ลักษณะสัญญาณอินพุต** ที่จ่ายเข้าวงจรมี 2 แบบ

1. **Level** : เป็นแบบระดับสัญญาณ
2. **Pulse** : เป็นแบบที่เข้ามาในช่วงเวลาสั้น ๆ โดยปกติกำหนดให้มีความกว้างเท่ากับสัญญาณ Clock

**ตัวอย่าง** Input $= 101110$ เขียนเป็น Timing Diagram (กรณี Memory เป็นแบบ Negative-edge หรือแบบ Pulse Triggered) ได้ดังนี้ ค่าของอินพุตถูกใช้ที่ขอบขาลงของ Clock (เส้นประ)

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="456" height="240" viewBox="0 0 456 240" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="2.2" fill="none">
<path d="M80,76 L80,76 L80,50 L108,50 L108,76 L136,76 L136,50 L164,50 L164,76 L192,76 L192,50 L220,50 L220,76 L248,76 L248,50 L276,50 L276,76 L304,76 L304,50 L332,50 L332,76 L360,76 L360,50 L388,50 L388,76 L416,76"/>
<path d="M80,146 L80,120 L136,120 L136,146 L192,146 L192,120 L248,120 L248,120 L304,120 L304,120 L360,120 L360,146 L416,146"/>
<path d="M80,216 L80,216 L80,190 L108,190 L108,216 L192,216 L192,216 L192,190 L220,190 L220,216 L248,216 L248,190 L276,190 L276,216 L304,216 L304,190 L332,190 L332,216 L416,216 L416,216"/>
<line x1="108" y1="50" x2="108" y2="230" stroke-dasharray="4 4" stroke-opacity="0.45" stroke-width="1.2"/>
<line x1="164" y1="50" x2="164" y2="230" stroke-dasharray="4 4" stroke-opacity="0.45" stroke-width="1.2"/>
<line x1="220" y1="50" x2="220" y2="230" stroke-dasharray="4 4" stroke-opacity="0.45" stroke-width="1.2"/>
<line x1="276" y1="50" x2="276" y2="230" stroke-dasharray="4 4" stroke-opacity="0.45" stroke-width="1.2"/>
<line x1="332" y1="50" x2="332" y2="230" stroke-dasharray="4 4" stroke-opacity="0.45" stroke-width="1.2"/>
<line x1="388" y1="50" x2="388" y2="230" stroke-dasharray="4 4" stroke-opacity="0.45" stroke-width="1.2"/>
</g>
<text x="66" y="69" text-anchor="end">Clock</text>
<text x="66" y="139" text-anchor="end">Level</text>
<text x="66" y="209" text-anchor="end">Pulse</text>
<text x="108" y="168" text-anchor="middle" font-size="16">1</text>
<text x="164" y="168" text-anchor="middle" font-size="16">0</text>
<text x="220" y="168" text-anchor="middle" font-size="16">1</text>
<text x="276" y="168" text-anchor="middle" font-size="16">1</text>
<text x="332" y="168" text-anchor="middle" font-size="16">1</text>
<text x="388" y="168" text-anchor="middle" font-size="16">0</text>
</svg>
</div>

กรณี Memory เป็นแบบ Positive-edge ใช้ขอบขาขึ้นของ Clock (เส้นประที่ต้นพัลส์) แทน

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="456" height="240" viewBox="0 0 456 240" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="2.2" fill="none">
<path d="M80,76 L80,76 L80,50 L108,50 L108,76 L136,76 L136,50 L164,50 L164,76 L192,76 L192,50 L220,50 L220,76 L248,76 L248,50 L276,50 L276,76 L304,76 L304,50 L332,50 L332,76 L360,76 L360,50 L388,50 L388,76 L416,76"/>
<path d="M80,146 L80,120 L136,120 L136,146 L192,146 L192,120 L248,120 L248,120 L304,120 L304,120 L360,120 L360,146 L416,146"/>
<path d="M80,216 L80,216 L80,190 L108,190 L108,216 L192,216 L192,216 L192,190 L220,190 L220,216 L248,216 L248,190 L276,190 L276,216 L304,216 L304,190 L332,190 L332,216 L416,216 L416,216"/>
<line x1="80" y1="50" x2="80" y2="230" stroke-dasharray="4 4" stroke-opacity="0.45" stroke-width="1.2"/>
<line x1="136" y1="50" x2="136" y2="230" stroke-dasharray="4 4" stroke-opacity="0.45" stroke-width="1.2"/>
<line x1="192" y1="50" x2="192" y2="230" stroke-dasharray="4 4" stroke-opacity="0.45" stroke-width="1.2"/>
<line x1="248" y1="50" x2="248" y2="230" stroke-dasharray="4 4" stroke-opacity="0.45" stroke-width="1.2"/>
<line x1="304" y1="50" x2="304" y2="230" stroke-dasharray="4 4" stroke-opacity="0.45" stroke-width="1.2"/>
<line x1="360" y1="50" x2="360" y2="230" stroke-dasharray="4 4" stroke-opacity="0.45" stroke-width="1.2"/>
</g>
<text x="66" y="69" text-anchor="end">Clock</text>
<text x="66" y="139" text-anchor="end">Level</text>
<text x="66" y="209" text-anchor="end">Pulse</text>
<text x="108" y="168" text-anchor="middle" font-size="16">1</text>
<text x="164" y="168" text-anchor="middle" font-size="16">0</text>
<text x="220" y="168" text-anchor="middle" font-size="16">1</text>
<text x="276" y="168" text-anchor="middle" font-size="16">1</text>
<text x="332" y="168" text-anchor="middle" font-size="16">1</text>
<text x="388" y="168" text-anchor="middle" font-size="16">0</text>
</svg>
</div>

### 3.2 วิธีอธิบายคุณสมบัติของวงจรซีเควนเชียล

คุณสมบัติของวงจร Sequential อธิบายได้หลายวิธี

| วิธี | ใช้กับ |
|:--|:--|
| 1. Truth Table (ตารางความจริง) | แสดงคุณสมบัติของ IC ระดับ SSI เช่น Flip-Flop |
| 2. Timing Diagram | แสดงคุณสมบัติของ IC ระดับ MSI เช่น Counter, Register |
| 3. State Table | วงจร Sequential ทั่วไป |
| 4. State Diagram | วงจร Sequential ทั่วไป |
| 5. Flow Table | วงจร Sequential (อะซิงโครนัส) |

### 3.3 State Table และ State Diagram

**State Table** มีลักษณะเป็นตารางเหมือน K-Map ด้านหนึ่งเขียนแทนด้วย **Input** อีกด้านหนึ่งเขียนแทนด้วย **Present State** (เรียงลำดับอย่างไรก็ได้ แต่นิยมเรียงแบบ Gray Code) ส่วนค่าในตารางเขียนในรูปฟอร์ม **Next State / Output**

| Present State $y$ | $x = 0$ : Next State / Output | $x = 1$ : Next State / Output |
|:-:|:-:|:-:|
| $y_a$ | $Y/Z$ | $Y/Z$ |
| $y_b$ | $Y/Z$ | $Y/Z$ |

**State Diagram** เป็นกราฟแสดงความสัมพันธ์ระหว่าง Present State กับ Next State เชื่อมโยงเข้าด้วยกันด้วยลูกศร ทิศทางของลูกศรชี้จาก **Present State** ไปยัง **Next State** ที่ลูกศรเขียนกำกับด้วย **Input/Output**

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="510" height="120" viewBox="0 0 510 120" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(40,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<circle cx="90" cy="60" r="24"/>
<circle cx="300" cy="60" r="24"/>
<line x1="114" y1="60" x2="276" y2="60"/>
<polygon points="276,60 266,64.5 266,55.5" fill="currentColor"/>
</g>
<text x="90" y="66" text-anchor="middle" font-size="18">y</text>
<text x="300" y="66" text-anchor="middle" font-size="18">Y</text>
<text x="195" y="77" text-anchor="middle" font-size="15">x/Z</text>
</g>
</svg>
</div>

**Present State และ Next State** อาจเขียนในรูปของตัวเลขหรือตัวอักษรก็ได้ State Table และ State Diagram อธิบายคุณสมบัติของวงจร Sequential ได้เหมือนกัน ต่างกันที่รูปแบบเท่านั้น เปลี่ยนจากรูปแบบหนึ่งไปเป็นอีกรูปแบบหนึ่งได้

**State Diagram (Present State / Next State)** ในกรณีที่ไม่มี Input และ Output (เช่น วงจรนับ) เขียนเฉพาะ Present State กับ Next State : ตัวอย่างวงจรนับ $0 \to 1 \to 2 \to 3 \to 0$

| Present State | Next State |
|:-:|:-:|
| 0 | 1 |
| 1 | 2 |
| 2 | 3 |
| 3 | 0 |

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="460" height="270" viewBox="0 0 460 270" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(40,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<circle cx="80" cy="60" r="24"/>
<circle cx="240" cy="60" r="24"/>
<circle cx="240" cy="200" r="24"/>
<circle cx="80" cy="200" r="24"/>
<line x1="104" y1="60" x2="216" y2="60"/>
<polygon points="216,60 206,64.5 206,55.5" fill="currentColor"/>
<line x1="240" y1="84" x2="240" y2="176"/>
<polygon points="240,176 235.5,166 244.5,166" fill="currentColor"/>
<line x1="216" y1="200" x2="104" y2="200"/>
<polygon points="104,200 114,195.5 114,204.5" fill="currentColor"/>
<line x1="80" y1="176" x2="80" y2="84"/>
<polygon points="80,84 84.5,94 75.5,94" fill="currentColor"/>
</g>
<text x="80" y="66" text-anchor="middle" font-size="18">0</text>
<text x="240" y="66" text-anchor="middle" font-size="18">1</text>
<text x="240" y="206" text-anchor="middle" font-size="18">2</text>
<text x="80" y="206" text-anchor="middle" font-size="18">3</text>
<text x="160" y="77" text-anchor="middle" font-size="15"></text>
<text x="228" y="135" text-anchor="middle" font-size="15"></text>
<text x="160" y="193" text-anchor="middle" font-size="15"></text>
<text x="92" y="135" text-anchor="middle" font-size="15"></text>
</g>
</svg>
</div>

### ตัวอย่างที่ 21  จงเขียน State Diagram จาก State Table ต่อไปนี้ (Input $x$ ; ค่าในตารางคือ Next State / Output)

| Present State | $x = 0$ | $x = 1$ |
|:-:|:-:|:-:|
| A | D/0 | C/1 |
| B | B/1 | A/0 |
| C | C/1 | D/0 |
| D | A/0 | B/1 |

$\mathbf{Sol}^{n}$

- 1 State คือ 1 วงกลม มี 4 วงกลม (A, B, C, D)
- แต่ละช่องของตารางเป็นลูกศรหนึ่งเส้น : ออกจาก Present State (แถว) ไปยัง Next State (ค่าหน้าเครื่องหมาย /) และเขียนกำกับด้วย Input/Output ($x$ ของคอลัมน์ / ค่าหลังเครื่องหมาย /)
- A : $x=0$ ไป D, เอาต์พุต $0$ (ลูกศร $0/0$) ; $x=1$ ไป C, เอาต์พุต $1$ (ลูกศร $1/1$)
- B : $x=0$ ไป B (วนกลับตัวเอง $0/1$) ; $x=1$ ไป A ($1/0$)
- C : $x=0$ ไป C (วนกลับตัวเอง $0/1$) ; $x=1$ ไป D ($1/0$)
- D : $x=0$ ไป A ($0/0$) ; $x=1$ ไป B ($1/1$)

$\mathbf{Ans}\quad \text{State Diagram ตามรูป}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="540" height="310" viewBox="0 0 540 310" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(40,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<circle cx="90" cy="70" r="24"/>
<circle cx="300" cy="70" r="24"/>
<circle cx="90" cy="220" r="24"/>
<circle cx="300" cy="220" r="24"/>
<path d="M104.5,89.1 Q171.8,177.5 277.2,212.5"/>
<polygon points="277.2,212.5 266.3,213.6 269.1,205" fill="currentColor"/>
<line x1="114" y1="70" x2="276" y2="70"/>
<polygon points="276,70 266,74.5 266,65.5" fill="currentColor"/>
<path d="M71.1,234.8 C26.1,248.5 26.1,191.5 71.1,205.2"/>
<polygon points="71.1,205.2 60.2,206.6 62.8,198" fill="currentColor"/>
<line x1="90" y1="196" x2="90" y2="94"/>
<polygon points="90,94 94.5,104 85.5,104" fill="currentColor"/>
<path d="M318.9,55.2 C363.9,41.5 363.9,98.5 318.9,84.8"/>
<polygon points="318.9,84.8 329.8,83.4 327.2,92" fill="currentColor"/>
<line x1="300" y1="94" x2="300" y2="196"/>
<polygon points="300,196 295.5,186 304.5,186" fill="currentColor"/>
<path d="M285.5,200.9 Q218.2,112.5 112.8,77.5"/>
<polygon points="112.8,77.5 123.7,76.4 120.9,85" fill="currentColor"/>
<line x1="276" y1="220" x2="114" y2="220"/>
<polygon points="114,220 124,215.5 124,224.5" fill="currentColor"/>
</g>
<text x="90" y="76" text-anchor="middle" font-size="18">A</text>
<text x="300" y="76" text-anchor="middle" font-size="18">C</text>
<text x="90" y="226" text-anchor="middle" font-size="18">B</text>
<text x="300" y="226" text-anchor="middle" font-size="18">D</text>
<text x="175.5" y="177.3" text-anchor="middle" font-size="15">0/0</text>
<text x="195" y="87" text-anchor="middle" font-size="15">1/1</text>
<text x="20" y="225" text-anchor="end" font-size="15">0/1</text>
<text x="102" y="150" text-anchor="middle" font-size="15">1/0</text>
<text x="370" y="75" text-anchor="start" font-size="15">0/1</text>
<text x="288" y="150" text-anchor="middle" font-size="15">1/0</text>
<text x="214.5" y="122.7" text-anchor="middle" font-size="15">0/0</text>
<text x="195" y="213" text-anchor="middle" font-size="15">1/1</text>
</g>
</svg>
</div>

### ตัวอย่างที่ 22  จาก State Table ของตัวอย่างที่ 21 ป้อนสัญญาณ Input $x = 0110101100$ ให้กับวงจร กำหนด Initial State $y^0 = A$ จงหา Sequence ของ Output และ Final State

$\mathbf{Sol}^{n}$

ไล่ทีละเวลา (เวลา $t = 0$ ถึง $9$) ดู Present State กับ Input ในตาราง แล้วอ่าน Next State/Output Next State ของเวลานี้เป็น Present State ของเวลาถัดไป

| เวลา | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
|:--|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| Input | 0 | 1 | 1 | 0 | 1 | 0 | 1 | 1 | 0 | 0 |
| Present State | A | D | B | A | D | B | B | A | C | C |
| Next State | D | B | A | D | B | B | A | C | C | C |
| Output | 0 | 1 | 0 | 0 | 1 | 1 | 0 | 1 | 1 | 1 |

- Output ที่ได้ เรียงตามเวลา $Z = 0100110111$
- State สุดท้าย (Next State ของเวลา $t = 9$) คือ $C$ (Final State)

$\mathbf{Ans}\quad Z = 0100110111,\quad \text{Final State} = C$

### ตัวอย่างที่ 23  State Table ต่อไปนี้ (Present State, Next State/Output ตาม $x = 0$ และ $x = 1$) ป้อน Input $x = 0, 1, 0, 1, 1, 0, 1, 1, 0$ (เวลา $0$ ถึง $8$) เริ่มต้นที่ State A จงเติมตาราง Present State, Next State และ Output

| Present State | x = 0 : Next / Out | x = 1 : Next / Out |
|:-:|:-:|:-:|
| A | B / 0 | A / 0 |
| B | B / 0 | C / 0 |
| C | D / 0 | A / 0 |
| D | B / 0 | C / 1 |

$\mathbf{Sol}^{n}$

ไล่ทีละเวลา : Present State เริ่มที่ A อ่านแถวของ Present State ตามคอลัมน์ Input แล้วจดค่า Next State/Output Next State กลายเป็น Present State ของเวลาถัดไป

| เวลา | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
|:--|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| Input | 0 | 1 | 0 | 1 | 1 | 0 | 1 | 1 | 0 |
| Present State | A | B | C | D | C | A | B | C | A |
| Next State | B | C | D | C | A | B | C | A | B |
| Output | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 |

- ผลลัพธ์ที่ $t = 3$ ได้ State D ป้อน $x = 1$ ไป State C และเอาต์พุต $1$ (เป็นเอาต์พุต $1$ ตัวเดียวของตาราง)

$\mathbf{Ans}\quad Z = 000100000,\quad \text{Final State} = B$

### ตัวอย่างที่ 24  จาก State Table ต่อไปนี้ จงสร้าง State Diagram

| Present State | x = 0 : Next / Out | x = 1 : Next / Out |
|:-:|:-:|:-:|
| A | A / 0 | B / 0 |
| B | A / 0 | C / 0 |
| C | D / 0 | C / 0 |
| D | A / 0 | E / 0 |
| E | A / 0 | C / 1 |

$\mathbf{Sol}^{n}$

- 5 State จึงมี 5 วงกลม (A, B, C, D, E) ทุกช่องของตารางเป็นลูกศร 1 เส้น (ตารางมี $5 \times 2 = 10$ ช่อง จึงมีลูกศร 10 เส้น)
- A : $0 \to A\ (0/0)$, $1 \to B\ (1/0)$ ; B : $0 \to A\ (0/0)$, $1 \to C\ (1/0)$ ; C : $0 \to D\ (0/0)$, $1 \to C\ (1/0)$
- D : $0 \to A\ (0/0)$, $1 \to E\ (1/0)$ ; E : $0 \to A\ (0/0)$, $1 \to C\ (1/1)$
- ลูกศรที่ชี้ไป A มาจาก A (วนกลับ), B, D, E เมื่อ $x = 0$ ลูกศรที่เอาต์พุตเป็น $1$ มีเส้นเดียวคือ $E \to C$ เมื่อ $x = 1$

$\mathbf{Ans}\quad \text{State Diagram ตามรูป}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="580" height="360" viewBox="0 0 580 360" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(40,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<circle cx="60" cy="160" r="24"/>
<circle cx="200" cy="60" r="24"/>
<circle cx="360" cy="160" r="24"/>
<circle cx="270" cy="280" r="24"/>
<circle cx="110" cy="280" r="24"/>
<path d="M41.1,174.8 C-3.9,188.5 -3.9,131.5 41.1,145.2"/>
<polygon points="41.1,145.2 30.2,146.6 32.8,138" fill="currentColor"/>
<path d="M83.6,155.6 Q153.2,142.5 188.2,80.9"/>
<polygon points="188.2,80.9 187.2,91.8 179.3,87.4" fill="currentColor"/>
<path d="M176.4,64.4 Q106.8,77.5 71.8,139.1"/>
<polygon points="71.8,139.1 72.8,128.2 80.7,132.6" fill="currentColor"/>
<line x1="220.4" y1="72.7" x2="339.6" y2="147.3"/>
<polygon points="339.6,147.3 328.8,145.8 333.6,138.2" fill="currentColor"/>
<line x1="345.6" y1="179.2" x2="284.4" y2="260.8"/>
<polygon points="284.4,260.8 286.8,250.1 294,255.5" fill="currentColor"/>
<path d="M378.9,145.2 C423.9,131.5 423.9,188.5 378.9,174.8"/>
<polygon points="378.9,174.8 389.8,173.4 387.2,182" fill="currentColor"/>
<line x1="249.2" y1="268.1" x2="80.8" y2="171.9"/>
<polygon points="80.8,171.9 91.8,173 87.3,180.8" fill="currentColor"/>
<line x1="246" y1="280" x2="134" y2="280"/>
<polygon points="134,280 144,275.5 144,284.5" fill="currentColor"/>
<line x1="100.8" y1="257.8" x2="69.2" y2="182.2"/>
<polygon points="69.2,182.2 77.2,189.7 68.9,193.1" fill="currentColor"/>
<line x1="131.6" y1="269.6" x2="338.4" y2="170.4"/>
<polygon points="338.4,170.4 331.3,178.8 327.4,170.7" fill="currentColor"/>
</g>
<text x="60" y="166" text-anchor="middle" font-size="18">A</text>
<text x="200" y="66" text-anchor="middle" font-size="18">B</text>
<text x="360" y="166" text-anchor="middle" font-size="18">C</text>
<text x="270" y="286" text-anchor="middle" font-size="18">D</text>
<text x="110" y="286" text-anchor="middle" font-size="18">E</text>
<text x="-10" y="165" text-anchor="end" font-size="15">0/0</text>
<text x="150.4" y="143.5" text-anchor="middle" font-size="15">1/0</text>
<text x="109.6" y="86.5" text-anchor="middle" font-size="15">0/0</text>
<text x="273.6" y="125.2" text-anchor="middle" font-size="15">1/0</text>
<text x="305.4" y="217.8" text-anchor="middle" font-size="15">0/0</text>
<text x="430" y="165" text-anchor="start" font-size="15">1/0</text>
<text x="171" y="214.6" text-anchor="middle" font-size="15">0/0</text>
<text x="190" y="273" text-anchor="middle" font-size="15">1/0</text>
<text x="96.1" y="220.4" text-anchor="middle" font-size="15">0/0</text>
<text x="240.2" y="235.8" text-anchor="middle" font-size="15">1/1</text>
</g>
</svg>
</div>

### ตัวอย่างที่ 25  จาก State Table ต่อไปนี้ (Present State เป็นเลขฐานสอง 2 บิต) จงสร้าง State Diagram

| Present State | $x = 0$ | $x = 1$ |
|:-:|:-:|:-:|
| 00 | 11/0 | 01/0 |
| 01 | 11/0 | 00/0 |
| 10 | 10/0 | 11/1 |
| 11 | 10/0 | 10/1 |

$\mathbf{Sol}^{n}$

- 4 State : 00, 01, 10, 11 มี 4 วงกลม
- $00$ : $x=0 \to 11\ (0/0)$, $x=1 \to 01\ (1/0)$ ; $01$ : $x=0 \to 11\ (0/0)$, $x=1 \to 00\ (1/0)$
- $10$ : $x=0 \to 10\ (0/0)$ (วนกลับตัวเอง), $x=1 \to 11\ (1/1)$ ; $11$ : $x=0 \to 10\ (0/0)$, $x=1 \to 10\ (1/1)$
- $11 \to 10$ มีลูกศรสองเส้น (ทั้ง $x=0$ และ $x=1$) จึงเขียนป้ายเป็น $0/0, 1/1$ บนเส้นเดียวกัน

$\mathbf{Ans}\quad \text{State Diagram ตามรูป}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="560" height="310" viewBox="0 0 560 310" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(40,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<circle cx="80" cy="70" r="24"/>
<circle cx="300" cy="70" r="24"/>
<circle cx="80" cy="230" r="24"/>
<circle cx="300" cy="230" r="24"/>
<line x1="99.4" y1="84.1" x2="280.6" y2="215.9"/>
<polygon points="280.6,215.9 269.9,213.6 275.1,206.4" fill="currentColor"/>
<path d="M102.6,78.2 Q190,110 277.4,78.2"/>
<polygon points="277.4,78.2 269.6,85.8 266.5,77.4" fill="currentColor"/>
<line x1="300" y1="94" x2="300" y2="206"/>
<polygon points="300,206 295.5,196 304.5,196" fill="currentColor"/>
<path d="M277.4,61.8 Q190,30 102.6,61.8"/>
<polygon points="102.6,61.8 110.4,54.2 113.5,62.6" fill="currentColor"/>
<path d="M61.1,244.8 C16.1,258.5 16.1,201.5 61.1,215.2"/>
<polygon points="61.1,215.2 50.2,216.6 52.8,208" fill="currentColor"/>
<path d="M102.6,238.2 Q190,270 277.4,238.2"/>
<polygon points="277.4,238.2 269.6,245.8 266.5,237.4" fill="currentColor"/>
<path d="M277.4,221.8 Q190,190 102.6,221.8"/>
<polygon points="102.6,221.8 110.4,214.2 113.5,222.6" fill="currentColor"/>
</g>
<text x="80" y="76" text-anchor="middle" font-size="18">00</text>
<text x="300" y="76" text-anchor="middle" font-size="18">01</text>
<text x="80" y="236" text-anchor="middle" font-size="18">10</text>
<text x="300" y="236" text-anchor="middle" font-size="18">11</text>
<text x="182.9" y="164.7" text-anchor="middle" font-size="15">0/0</text>
<text x="190" y="109.1" text-anchor="middle" font-size="15">1/0</text>
<text x="288" y="155" text-anchor="middle" font-size="15">0/0</text>
<text x="190" y="40.9" text-anchor="middle" font-size="15">1/0</text>
<text x="10" y="235" text-anchor="end" font-size="15">0/0</text>
<text x="190" y="269.1" text-anchor="middle" font-size="15">1/1</text>
<text x="190" y="200.9" text-anchor="middle" font-size="15">0/0, 1/1</text>
</g>
</svg>
</div>

### ตัวอย่างที่ 26  จาก State Diagram ในรูป (Present State เรียงตาม Gray Code) จงสร้าง State Table และเติมตารางลำดับ เมื่อ Input $x = 0, 1, 0, 1, 1, 1, 0, 0, 1$ เริ่มต้นที่ State $01$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="560" height="310" viewBox="0 0 560 310" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(40,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<circle cx="80" cy="70" r="24"/>
<circle cx="300" cy="70" r="24"/>
<circle cx="80" cy="230" r="24"/>
<circle cx="300" cy="230" r="24"/>
<path d="M61.1,84.8 C16.1,98.5 16.1,41.5 61.1,55.2"/>
<polygon points="61.1,55.2 50.2,56.6 52.8,48" fill="currentColor"/>
<path d="M69.3,91.5 Q40,150 69.3,208.5"/>
<polygon points="69.3,208.5 60.8,201.6 68.8,197.6" fill="currentColor"/>
<path d="M90.7,208.5 Q120,150 90.7,91.5"/>
<polygon points="90.7,91.5 99.2,98.4 91.2,102.4" fill="currentColor"/>
<line x1="104" y1="230" x2="276" y2="230"/>
<polygon points="276,230 266,234.5 266,225.5" fill="currentColor"/>
<line x1="276" y1="70" x2="104" y2="70"/>
<polygon points="104,70 114,65.5 114,74.5" fill="currentColor"/>
<path d="M318.9,55.2 C363.9,41.5 363.9,98.5 318.9,84.8"/>
<polygon points="318.9,84.8 329.8,83.4 327.2,92" fill="currentColor"/>
<line x1="280.6" y1="215.9" x2="99.4" y2="84.1"/>
<polygon points="99.4,84.1 110.1,86.4 104.9,93.6" fill="currentColor"/>
<line x1="300" y1="206" x2="300" y2="94"/>
<polygon points="300,94 304.5,104 295.5,104" fill="currentColor"/>
</g>
<text x="80" y="76" text-anchor="middle" font-size="18">00</text>
<text x="300" y="76" text-anchor="middle" font-size="18">10</text>
<text x="80" y="236" text-anchor="middle" font-size="18">01</text>
<text x="300" y="236" text-anchor="middle" font-size="18">11</text>
<text x="10" y="75" text-anchor="end" font-size="15">0/0</text>
<text x="44.6" y="155" text-anchor="middle" font-size="15">1/0</text>
<text x="115.4" y="155" text-anchor="middle" font-size="15">0/1</text>
<text x="190" y="247" text-anchor="middle" font-size="15">1/0</text>
<text x="190" y="63" text-anchor="middle" font-size="15">0/1</text>
<text x="370" y="75" text-anchor="start" font-size="15">1/0</text>
<text x="197.1" y="145.3" text-anchor="middle" font-size="15">0/1</text>
<text x="312" y="155" text-anchor="middle" font-size="15">1/0</text>
</g>
</svg>
</div>

$\mathbf{Sol}^{n}$

**ส่วนที่ 1 : State Table** อ่านลูกศรทุกเส้นที่ออกจากแต่ละ State : ป้าย $a/b$ บนลูกศร หมายถึง Input $a$, Output $b$ ใส่ในคอลัมน์ $x = a$ ของแถว Present State นั้น ค่าเป็น Next State / Output

- $00$ : $x=0$ วนกลับตัวเอง $(0/0)$ $\Rightarrow 00/0$ ; $x=1$ ไป $01\ (1/0)$ $\Rightarrow 01/0$
- $01$ : $x=0$ ไป $00\ (0/1)$ $\Rightarrow 00/1$ ; $x=1$ ไป $11\ (1/0)$ $\Rightarrow 11/0$
- $10$ : $x=0$ ไป $00\ (0/1)$ $\Rightarrow 00/1$ ; $x=1$ วนกลับตัวเอง $(1/0)$ $\Rightarrow 10/0$
- $11$ : $x=0$ ไป $00\ (0/1)$ $\Rightarrow 00/1$ ; $x=1$ ไป $10\ (1/0)$ $\Rightarrow 10/0$

| Present State (Gray) | $x = 0$ | $x = 1$ |
|:-:|:-:|:-:|
| 00 | 00/0 | 01/0 |
| 01 | 00/1 | 11/0 |
| 11 | 00/1 | 10/0 |
| 10 | 00/1 | 10/0 |

**ส่วนที่ 2 : ตารางลำดับ** เริ่มที่ $01$ ไล่ทีละเวลา

| เวลา | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
|:--|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| Input | 0 | 1 | 0 | 1 | 1 | 1 | 0 | 0 | 1 |
| Present State | 01 | 00 | 01 | 00 | 01 | 11 | 10 | 00 | 00 |
| Next State | 00 | 01 | 00 | 01 | 11 | 10 | 00 | 00 | 01 |
| Output | 1 | 0 | 1 | 0 | 0 | 0 | 1 | 0 | 0 |

$\mathbf{Ans}\quad \text{State Table ตามด้านบน ; Output } Z = 101000100,\ \text{Final State} = 01$

### ตัวอย่างที่ 27  จาก State Diagram ของวงจรที่มีอินพุต $x, y$ และเอาต์พุต $S$ (State คือ $0$ และ $1$) ในรูป จงสร้าง State Table ให้ครบทุกแถว

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="620" height="220" viewBox="0 0 620 220" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(40,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<circle cx="130" cy="110" r="24"/>
<circle cx="340" cy="110" r="24"/>
<path d="M152.4,118.5 Q235,150 317.6,118.5"/>
<polygon points="317.6,118.5 309.8,126.3 306.6,117.9" fill="currentColor"/>
<path d="M317.6,101.5 Q235,70 152.4,101.5"/>
<polygon points="152.4,101.5 160.2,93.7 163.4,102.1" fill="currentColor"/>
<path d="M111.1,124.8 C66.1,138.5 66.1,81.5 111.1,95.2"/>
<polygon points="111.1,95.2 100.2,96.6 102.8,88" fill="currentColor"/>
<path d="M358.9,95.2 C403.9,81.5 403.9,138.5 358.9,124.8"/>
<polygon points="358.9,124.8 369.8,123.4 367.2,132" fill="currentColor"/>
</g>
<text x="130" y="116" text-anchor="middle" font-size="18">0</text>
<text x="340" y="116" text-anchor="middle" font-size="18">1</text>
<text x="235" y="149.3" text-anchor="middle" font-size="15">11/0</text>
<text x="235" y="80.7" text-anchor="middle" font-size="15">00/1</text>
<text x="60" y="115" text-anchor="end" font-size="15">00/0, 01/1, 10/1</text>
<text x="410" y="115" text-anchor="start" font-size="15">01/0, 10/0, 11/1</text>
</g>
</svg>
</div>

$\mathbf{Sol}^{n}$

ลูกศรแต่ละเส้นมีป้าย $xy/S$ : ค่าอินพุต $x, y$ และเอาต์พุต $S$ ลูกศรที่ชี้ไปยัง State ใดคือ Next State $Q(t+1)$ ของ $Q(t)$ นั้น

- จาก $Q = 0$ : $xy = 00 \to 0$ ($S=0$), $01 \to 0$ ($S=1$), $10 \to 0$ ($S=1$) (วนกลับตัวเอง) ; $xy = 11 \to 1$ ($S=0$)
- จาก $Q = 1$ : $xy = 00 \to 0$ ($S=1$) ; $xy = 01 \to 1$ ($S=0$), $10 \to 1$ ($S=0$), $11 \to 1$ ($S=1$) (วนกลับตัวเอง)
- เขียนทุกแถว ($2 \times 4 = 8$ แถว) ได้ตารางด้านล่าง

$\mathbf{Ans}\quad \text{State Table ตามตารางด้านล่าง}$

| $Q(t)$ | $x$ | $y$ | $Q(t+1)$ | $S$ |
|:-:|:-:|:-:|:-:|:-:|
| 0 | 0 | 0 | 0 | 0 |
| 0 | 0 | 1 | 0 | 1 |
| 0 | 1 | 0 | 0 | 1 |
| 0 | 1 | 1 | 1 | 0 |
| 1 | 0 | 0 | 0 | 1 |
| 1 | 0 | 1 | 1 | 0 |
| 1 | 1 | 0 | 1 | 0 |
| 1 | 1 | 1 | 1 | 1 |

สังเกต : $S = Q \oplus x \oplus y$ และ $Q(t+1)$ = ตัวทดของ $Q + x + y$ วงจรนี้คือวงจรบวกแบบอนุกรมในหัวข้อ 1.8 ที่ใช้ State เก็บตัวทด (ตรวจทั้ง 8 แถวแล้ว)

### 3.4 การวิเคราะห์วงจรซีเควนเชียล

**การวิเคราะห์วงจร** คือการเขียนคุณสมบัติของวงจรในรูปของ State Table หรือ State Diagram มีวิธีเขียน 2 วิธี คือ

1. **เขียนจาก Timing Diagram** : กำหนด Sequence ของ Input และ Initial State ขึ้นมา เขียนเป็น Timing Diagram แล้วสร้าง State Table
2. **เขียนจาก K-Map** : เขียน K-Map ของ Next State ($Y$ หรือ $D$) และ Output ($Z$) ก่อน แล้วนำไปสร้าง State Table

**ขั้นตอนทั่วไป** 1) เขียนสมการอินพุตของฟลิป-ฟลอป ($D$) และสมการเอาต์พุต ($Z$) จากวงจร 2) ใช้สมการหา Next State และ Output ของทุกชุด ($y$, $x$) 3) เขียนเป็น State Table 4) เขียน State Diagram (วงกลมแทน State ลูกศรกำกับ Input/Output)

### ตัวอย่างที่ 28  วิเคราะห์วงจร Sequential ที่ประกอบด้วย D Flip-Flop 1 ตัว (ทำงานที่ขอบขาลงของ Clock) มี $D = x\overline{y} + \overline{x}y$ และเอาต์พุต $Z = xy$ ($y$ คือเอาต์พุต $Q$ ของฟลิป-ฟลอป, $x$ คืออินพุต) จงเขียน State Table และ State Diagram

$\mathbf{Sol}^{n}$

**วิธีที่ 1 : เขียนจาก Timing Diagram** กำหนด Sequence ของ Input $x = 01101000$ (แบบ Level) และ Initial State $y^0 = 0$ ที่ขอบขาลงแต่ละครั้ง $Q$ (คือ $y$) รับค่า $D = x \oplus y$ ($x\overline{y} + \overline{x}y$ คือ XOR) ส่วน $Z = xy$ เป็นสมการของเกต AND

| เวลา | $x$ | $y$ (Present State) | $D = x \oplus y$ | $y$ ถัดไป (Next State) | $Z = xy$ |
|:-:|:-:|:-:|:-:|:-:|:-:|
| 0 | 0 | 0 | 0 | 0 | 0 |
| 1 | 1 | 0 | 1 | 1 | 0 |
| 2 | 1 | 1 | 0 | 0 | 1 |
| 3 | 0 | 0 | 0 | 0 | 0 |
| 4 | 1 | 0 | 1 | 1 | 0 |
| 5 | 0 | 1 | 1 | 1 | 0 |
| 6 | 0 | 1 | 1 | 1 | 0 |
| 7 | 0 | 1 | 1 | 1 | 0 |

- อ่านจากตารางเวลาเป็น State Table : ที่ $y=0, x=0$ : $Y=0$, $Z=0$ ; $y=0, x=1$ : $Y=1$, $Z=0$ ; $y=1, x=0$ : $Y=1$, $Z=0$ ; $y=1, x=1$ : $Y=0$, $Z=1$
- กำหนดให้ $A = 0$ และ $B = 1$ (ตั้งชื่อ State แทนค่า $y$)

| Present State $y$ | $x = 0$ : Next/Out | $x = 1$ : Next/Out |
|:-:|:-:|:-:|
| A | A/0 | B/0 |
| B | B/0 | A/1 |

**วิธีที่ 2 : เขียนจาก K-Map** เขียน K-Map ของ $Y = x \oplus y$ และ $Z = xy$ ($x$ ตามแนวนอน, $y$ ตามแนวตั้ง) แล้วนำไปสร้าง State Table โดยรวมช่องของ $Y$ และ $Z$ เป็นช่อง $Y/Z$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="196" height="172" viewBox="0 0 196 172" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.6" fill="none">
<rect x="74" y="52" width="108" height="108"/>
<line x1="128" y1="52" x2="128" y2="160"/>
<line x1="74" y1="106" x2="182" y2="106"/>
<line x1="8" y1="8" x2="74" y2="52"/>
</g>
<text x="101" y="37" text-anchor="middle">0</text>
<text x="155" y="37" text-anchor="middle">1</text>
<text x="65" y="85" text-anchor="end">0</text>
<text x="65" y="139" text-anchor="end">1</text>
<text x="70" y="18" text-anchor="end">x</text><text x="8" y="44">y</text>
<text x="101" y="87" text-anchor="middle" font-size="22">0</text>
<text x="155" y="87" text-anchor="middle" font-size="22">1</text>
<text x="101" y="141" text-anchor="middle" font-size="22">1</text>
<text x="155" y="141" text-anchor="middle" font-size="22">0</text>
</svg>
</div>

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="196" height="172" viewBox="0 0 196 172" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.6" fill="none">
<rect x="74" y="52" width="108" height="108"/>
<line x1="128" y1="52" x2="128" y2="160"/>
<line x1="74" y1="106" x2="182" y2="106"/>
<line x1="8" y1="8" x2="74" y2="52"/>
</g>
<text x="101" y="37" text-anchor="middle">0</text>
<text x="155" y="37" text-anchor="middle">1</text>
<text x="65" y="85" text-anchor="end">0</text>
<text x="65" y="139" text-anchor="end">1</text>
<text x="70" y="18" text-anchor="end">x</text><text x="8" y="44">y</text>
<text x="101" y="87" text-anchor="middle" font-size="22">0</text>
<text x="155" y="87" text-anchor="middle" font-size="22">0</text>
<text x="101" y="141" text-anchor="middle" font-size="22">0</text>
<text x="155" y="141" text-anchor="middle" font-size="22">1</text>
</svg>
</div>

| Present State $y$ | $x = 0$ | $x = 1$ |
|:-:|:-:|:-:|
| 0 | 0/0 | 1/0 |
| 1 | 1/0 | 0/1 |

**State Diagram** (วงกลม A $= 0$, B $= 1$) A: $x=0$ วนกลับ A ($0/0$), $x=1$ ไป B ($1/0$) ; B: $x=0$ วนกลับ B ($0/0$), $x=1$ ไป A ($1/1$)

$\mathbf{Ans}\quad \text{State Table และ State Diagram ตามด้านบน}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="560" height="220" viewBox="0 0 560 220" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(40,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<circle cx="100" cy="100" r="24"/>
<circle cx="320" cy="100" r="24"/>
<path d="M122.6,108.2 Q210,140 297.4,108.2"/>
<polygon points="297.4,108.2 289.6,115.8 286.5,107.4" fill="currentColor"/>
<path d="M297.4,91.8 Q210,60 122.6,91.8"/>
<polygon points="122.6,91.8 130.4,84.2 133.5,92.6" fill="currentColor"/>
<path d="M81.1,114.8 C36.1,128.5 36.1,71.5 81.1,85.2"/>
<polygon points="81.1,85.2 70.2,86.6 72.8,78" fill="currentColor"/>
<path d="M338.9,85.2 C383.9,71.5 383.9,128.5 338.9,114.8"/>
<polygon points="338.9,114.8 349.8,113.4 347.2,122" fill="currentColor"/>
</g>
<text x="100" y="106" text-anchor="middle" font-size="18">A</text>
<text x="320" y="106" text-anchor="middle" font-size="18">B</text>
<text x="210" y="139.1" text-anchor="middle" font-size="15">1/0</text>
<text x="210" y="70.9" text-anchor="middle" font-size="15">1/1</text>
<text x="30" y="105" text-anchor="end" font-size="15">0/0</text>
<text x="390" y="105" text-anchor="start" font-size="15">0/0</text>
</g>
</svg>
</div>

### 3.5 สรุปวงจรซีเควนเชียล

| หัวข้อ | สาระสำคัญ |
|:--|:--|
| นิยาม | เอาต์พุตขึ้นกับอินพุตปัจจุบันและอินพุตที่ผ่านมา (เก็บใน Memory) ประกอบด้วย Combinational Circuit + Memory (Feedback) |
| สถานะ | Present State ($y$) = เอาต์พุตของ Memory ; Next State ($Y$) = อินพุตของ Memory (D Flip-Flop) |
| ชนิด | Synchronous (Memory ทุกตัวรับ Clock ภายนอกเหมือนกัน) / Asynchronous (มี Memory ที่ไม่รับ Clock ภายนอก) |
| อินพุต | Level (ระดับสัญญาณ) / Pulse (กว้างเท่า Clock) |
| State Table | ตารางคล้าย K-Map : แถว = Present State (นิยม Gray Code), คอลัมน์ = Input, ช่อง = Next State / Output |
| State Diagram | วงกลม = State, ลูกศร = จาก Present State ไป Next State ป้าย Input / Output |
| การวิเคราะห์ | เขียนสมการ $D$ และ $Z$ ของวงจร แล้วหา State Table จาก Timing Diagram หรือ K-Map |

### 3.6 ข้อควรระวังในการสอบ

- ใน State Table ค่าในช่องเขียนเป็น **Next State / Output** (ตัวหน้าคือ State ถัดไป ตัวหลังคือเอาต์พุต) ส่วนป้ายบนลูกศรของ State Diagram เป็น **Input / Output** (Input ก่อน)
- ลูกศรของ State Diagram ชี้จาก Present State ไป Next State จำนวนลูกศรที่ออกจากแต่ละ State เท่ากับจำนวนค่าอินพุตที่เป็นไปได้ (ที่ $x$ 1 บิตมี 2 เส้นต่อ State)
- ถ้า Next State เป็น State เดิม ให้วาดลูกศรวนกลับตัวเอง
- ไล่ลำดับในตารางเวลา Next State ของเวลาหนึ่งเป็น Present State ของเวลาถัดไป Final State คือ Next State ของเวลาสุดท้าย
- ถ้าลูกศรหลายเส้นไปจาก State เดียวกันไปยัง State เดียวกัน รวมป้ายเป็นเส้นเดียวได้ (เช่น $0/0, 1/1$)
- State Table ของวงจรที่มีฟลิป-ฟลอปหลายตัว เรียงแถวตาม Gray Code เพื่อให้เทียบกับ K-Map ได้ง่าย
