# บทที่ 8 วงจรนับ (Counter)

---

## 1. วงจรนับเบื้องต้น

### 1.1 วงจรนับและค่ามอดูลัส

วงจรนับเป็นวงจรที่ประยุกต์ใช้งานในการจำของฟลิป-ฟลอป ใช้นับจำนวนในระบบเลขฐานสองที่เรียกว่า **วงจรนับเลขฐานสอง (Binary Counter)**

ในการนับ ใช้การป้อนสัญญาณที่ทำให้เกิดการนับที่อินพุต และค่าของการนับแสดงที่ค่าเอาต์พุตของฟลิป-ฟลอป **จำนวนฟลิป-ฟลอปที่ใช้เท่ากับจำนวนบิตที่ต้องการนับ** เช่น ถ้าต้องการนับเลขฐานสองขนาด 3 บิต ใช้ฟลิป-ฟลอป 3 ตัว

จำนวนค่าที่นับได้ของวงจรนับเรียกว่า **มอดูลัส (Modulus, Mod)** เช่น วงจรนับ 3 บิตนับได้ 8 ค่า คือ $000$ ถึง $111$ จึงมีมอดูลัสเท่ากับ 8 หรือเรียกว่า วงจรนับ Mod 8 ถ้า $n$ คือจำนวนบิต (จำนวนฟลิป-ฟลอป)

$$\text{Mod} = 2^{n}$$

$$\text{ค่าที่นับได้ตั้งแต่ } 0 \text{ ถึง } 2^{n}-1$$

ดังนั้นวงจรนับ Mod 8 นับได้สูงสุดคือ $2^{3}-1 = 7$

ในการใช้งานบางครั้งต้องการนับในรูปของเลขฐานอื่น เช่น เลขฐานสิบที่นับ $0$ ถึง $9$ ในหนึ่งหลัก ก็นำวงจรนับเลขฐานสองมาสร้างเป็นวงจรนับในฐานอื่นได้ แบ่งชนิดของวงจรนับตามลักษณะการทำงานได้ 2 ชนิด คือ

1. ชนิดไม่ได้จังหวะกัน (Asynchronous Counter)
2. ชนิดได้จังหวะกัน (Synchronous Counter)

### ตัวอย่างที่ 1  วงจรนับใช้ฟลิป-ฟลอป 4 ตัว และ 3 ตัว นับได้กี่ค่า สูงสุดเท่าใด และถ้าต้องการนับถึง $100$ ต้องใช้ฟลิป-ฟลอปอย่างน้อยกี่ตัว

$\mathbf{Sol}^{n}$

ใช้ $\text{Mod} = 2^{n}$ และค่าสูงสุด $= 2^{n}-1$

- $n = 4$ : $\text{Mod} = 2^{4} = 16$ ค่าที่นับได้ $0$ ถึง $2^{4}-1 = 15$
- $n = 3$ : $\text{Mod} = 2^{3} = 8$ ค่าที่นับได้ $0$ ถึง $2^{3}-1 = 7$
- ต้องการนับถึง $100$ ต้องมี $2^{n}-1 \ge 100$ : $n = 6$ ได้ $2^{6}-1 = 63$ ไม่พอ, $n = 7$ ได้ $2^{7}-1 = 127$ พอ

$\mathbf{Ans}\quad 4\text{ ตัว: Mod } 16 \text{ (สูงสุด } 15),\ 3\text{ ตัว: Mod } 8 \text{ (สูงสุด } 7),\ \text{นับถึง } 100 \text{ ต้องใช้ } 7 \text{ ตัว}$

## 2. วงจรนับชนิดไม่ได้จังหวะกัน

### 2.1 วงจรนับแบบริบเพิล (Ripple Counter)

วงจรนับชนิดไม่ได้จังหวะกัน (Asynchronous Counter) เป็นวงจรนับที่ฟลิป-ฟลอปแต่ละตัวทำงานไม่พร้อมกัน (ไม่มีการควบคุมการทำงานของฟลิป-ฟลอปด้วยสัญญาณเดียวกัน) ปกติสัญญาณอินพุตป้อนเข้าที่ฟลิป-ฟลอปตัวแรก เมื่อตัวแรกทำงานแล้วจะส่งผลที่เกิดขึ้นไปยังตัวที่สอง และผลที่ตัวที่สองจะส่งไปยังตัวที่สาม เป็นเช่นนี้ไปจนถึงตัวสุดท้าย ผลการทำงานทำให้ค่าเอาต์พุตเพิ่มขึ้นตามจำนวนอินพุตที่ป้อนเข้ามา

บางครั้งเรียกวงจรลักษณะนี้ว่า **Ripple Counter** นับได้ $2^{n}$ ค่า เมื่อ $n$ คือจำนวนฟลิป-ฟลอป

**วงจรนับแบบริบเพิลขนาด 4 บิต** ต่อ JK ฟลิป-ฟลอปให้ $J=K=1$ (สลับสถานะทุกครั้งที่ถูกกระตุ้น) ตัวแรก (D) รับสัญญาณนาฬิกา ตัวต่อ ๆ ไป (C, B, A) รับสัญญาณจาก $Q$ ของตัวก่อนหน้า ฟลิป-ฟลอปทำงานที่ขอบขาลง (วงกลมที่ขา clock) $Q_D=2^{0}$, $Q_C=2^{1}$, $Q_B=2^{2}$, $Q_A=2^{3}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="630" height="194" viewBox="0 0 630 194" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<rect x="80" y="40" width="70" height="90" rx="2"/>
<polyline points="80,76 92,85 80,94"/>
<circle cx="76" cy="85" r="4"/>
<line x1="58" y1="62" x2="80" y2="62"/>
<line x1="58" y1="108" x2="80" y2="108"/>
<line x1="150" y1="62" x2="180" y2="62"/>
<circle cx="115" cy="134" r="4"/>
<line x1="115" y1="138" x2="115" y2="170"/>
<line x1="40" y1="85" x2="72" y2="85"/>
<rect x="210" y="40" width="70" height="90" rx="2"/>
<polyline points="210,76 222,85 210,94"/>
<circle cx="206" cy="85" r="4"/>
<line x1="188" y1="62" x2="210" y2="62"/>
<line x1="188" y1="108" x2="210" y2="108"/>
<line x1="280" y1="62" x2="310" y2="62"/>
<circle cx="245" cy="134" r="4"/>
<line x1="245" y1="138" x2="245" y2="170"/>
<line x1="180" y1="62" x2="180" y2="85"/>
<line x1="180" y1="85" x2="202" y2="85"/>
<rect x="340" y="40" width="70" height="90" rx="2"/>
<polyline points="340,76 352,85 340,94"/>
<circle cx="336" cy="85" r="4"/>
<line x1="318" y1="62" x2="340" y2="62"/>
<line x1="318" y1="108" x2="340" y2="108"/>
<line x1="410" y1="62" x2="440" y2="62"/>
<circle cx="375" cy="134" r="4"/>
<line x1="375" y1="138" x2="375" y2="170"/>
<line x1="310" y1="62" x2="310" y2="85"/>
<line x1="310" y1="85" x2="332" y2="85"/>
<rect x="470" y="40" width="70" height="90" rx="2"/>
<polyline points="470,76 482,85 470,94"/>
<circle cx="466" cy="85" r="4"/>
<line x1="448" y1="62" x2="470" y2="62"/>
<line x1="448" y1="108" x2="470" y2="108"/>
<line x1="540" y1="62" x2="570" y2="62"/>
<circle cx="505" cy="134" r="4"/>
<line x1="505" y1="138" x2="505" y2="170"/>
<line x1="440" y1="62" x2="440" y2="85"/>
<line x1="440" y1="85" x2="462" y2="85"/>
<line x1="570" y1="62" x2="590" y2="62"/>
<line x1="115" y1="170" x2="505" y2="170"/>
<line x1="75" y1="170" x2="115" y2="170"/>
<circle cx="115" cy="170" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="245" cy="170" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="375" cy="170" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="505" cy="170" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="180" cy="62" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="310" cy="62" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="440" cy="62" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="570" cy="62" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="121" y="89" text-anchor="middle" font-size="22">D</text>
<text x="54" y="68" text-anchor="end" font-size="16">1</text>
<text x="88" y="68" text-anchor="start" font-size="14">J</text>
<text x="54" y="114" text-anchor="end" font-size="16">1</text>
<text x="88" y="114" text-anchor="start" font-size="14">K</text>
<text x="142" y="68" text-anchor="end" font-size="16">Q</text>
<text x="36" y="91" text-anchor="end" font-size="16">Clock</text>
<text x="251" y="89" text-anchor="middle" font-size="22">C</text>
<text x="184" y="68" text-anchor="end" font-size="16">1</text>
<text x="218" y="68" text-anchor="start" font-size="14">J</text>
<text x="184" y="114" text-anchor="end" font-size="16">1</text>
<text x="218" y="114" text-anchor="start" font-size="14">K</text>
<text x="272" y="68" text-anchor="end" font-size="16">Q</text>
<text x="381" y="89" text-anchor="middle" font-size="22">B</text>
<text x="314" y="68" text-anchor="end" font-size="16">1</text>
<text x="348" y="68" text-anchor="start" font-size="14">J</text>
<text x="314" y="114" text-anchor="end" font-size="16">1</text>
<text x="348" y="114" text-anchor="start" font-size="14">K</text>
<text x="402" y="68" text-anchor="end" font-size="16">Q</text>
<text x="511" y="89" text-anchor="middle" font-size="22">A</text>
<text x="444" y="68" text-anchor="end" font-size="16">1</text>
<text x="478" y="68" text-anchor="start" font-size="14">J</text>
<text x="444" y="114" text-anchor="end" font-size="16">1</text>
<text x="478" y="114" text-anchor="start" font-size="14">K</text>
<text x="532" y="68" text-anchor="end" font-size="16">Q</text>
<text x="176" y="50" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="10">D</tspan></text>
<text x="306" y="50" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="10">C</tspan></text>
<text x="436" y="50" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="10">B</tspan></text>
<text x="566" y="50" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="10">A</tspan></text>
<text x="71" y="176" text-anchor="end" font-size="16">Reset</text>
</g>
</svg>
</div>

**แบบใช้ T ฟลิป-ฟลอป** ใช้ T ฟลิป-ฟลอปซึ่งสลับสถานะทุกครั้งที่มีสัญญาณนาฬิกา ต่อเรียงกันเช่นเดียวกัน

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="630" height="194" viewBox="0 0 630 194" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<rect x="80" y="40" width="70" height="90" rx="2"/>
<polyline points="80,76 92,85 80,94"/>
<circle cx="76" cy="85" r="4"/>
<line x1="150" y1="62" x2="180" y2="62"/>
<circle cx="115" cy="134" r="4"/>
<line x1="115" y1="138" x2="115" y2="170"/>
<line x1="40" y1="85" x2="72" y2="85"/>
<rect x="210" y="40" width="70" height="90" rx="2"/>
<polyline points="210,76 222,85 210,94"/>
<circle cx="206" cy="85" r="4"/>
<line x1="280" y1="62" x2="310" y2="62"/>
<circle cx="245" cy="134" r="4"/>
<line x1="245" y1="138" x2="245" y2="170"/>
<line x1="180" y1="62" x2="180" y2="85"/>
<line x1="180" y1="85" x2="202" y2="85"/>
<rect x="340" y="40" width="70" height="90" rx="2"/>
<polyline points="340,76 352,85 340,94"/>
<circle cx="336" cy="85" r="4"/>
<line x1="410" y1="62" x2="440" y2="62"/>
<circle cx="375" cy="134" r="4"/>
<line x1="375" y1="138" x2="375" y2="170"/>
<line x1="310" y1="62" x2="310" y2="85"/>
<line x1="310" y1="85" x2="332" y2="85"/>
<rect x="470" y="40" width="70" height="90" rx="2"/>
<polyline points="470,76 482,85 470,94"/>
<circle cx="466" cy="85" r="4"/>
<line x1="540" y1="62" x2="570" y2="62"/>
<circle cx="505" cy="134" r="4"/>
<line x1="505" y1="138" x2="505" y2="170"/>
<line x1="440" y1="62" x2="440" y2="85"/>
<line x1="440" y1="85" x2="462" y2="85"/>
<line x1="570" y1="62" x2="590" y2="62"/>
<line x1="115" y1="170" x2="505" y2="170"/>
<line x1="75" y1="170" x2="115" y2="170"/>
<circle cx="115" cy="170" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="245" cy="170" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="375" cy="170" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="505" cy="170" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="180" cy="62" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="310" cy="62" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="440" cy="62" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="570" cy="62" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="121" y="89" text-anchor="middle" font-size="22">D</text>
<text x="98" y="90" text-anchor="start" font-size="14">T</text>
<text x="142" y="68" text-anchor="end" font-size="16">Q</text>
<text x="36" y="91" text-anchor="end" font-size="16">Clock</text>
<text x="251" y="89" text-anchor="middle" font-size="22">C</text>
<text x="228" y="90" text-anchor="start" font-size="14">T</text>
<text x="272" y="68" text-anchor="end" font-size="16">Q</text>
<text x="381" y="89" text-anchor="middle" font-size="22">B</text>
<text x="358" y="90" text-anchor="start" font-size="14">T</text>
<text x="402" y="68" text-anchor="end" font-size="16">Q</text>
<text x="511" y="89" text-anchor="middle" font-size="22">A</text>
<text x="488" y="90" text-anchor="start" font-size="14">T</text>
<text x="532" y="68" text-anchor="end" font-size="16">Q</text>
<text x="176" y="50" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="10">D</tspan></text>
<text x="306" y="50" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="10">C</tspan></text>
<text x="436" y="50" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="10">B</tspan></text>
<text x="566" y="50" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="10">A</tspan></text>
<text x="71" y="176" text-anchor="end" font-size="16">Reset</text>
</g>
</svg>
</div>

**ตารางการนับ** (พัลส์ที่ 16 กลับเป็น $0000$ และนับต่อไป)

| พัลส์ | $Q_A$ | $Q_B$ | $Q_C$ | $Q_D$ |
|:-:|:-:|:-:|:-:|:-:|
| 0 | 0 | 0 | 0 | 0 |
| 1 | 0 | 0 | 0 | 1 |
| 2 | 0 | 0 | 1 | 0 |
| 3 | 0 | 0 | 1 | 1 |
| 4 | 0 | 1 | 0 | 0 |
| 5 | 0 | 1 | 0 | 1 |
| 6 | 0 | 1 | 1 | 0 |
| 7 | 0 | 1 | 1 | 1 |
| 8 | 1 | 0 | 0 | 0 |
| 9 | 1 | 0 | 0 | 1 |
| 10 | 1 | 0 | 1 | 0 |
| 11 | 1 | 0 | 1 | 1 |
| 12 | 1 | 1 | 0 | 0 |
| 13 | 1 | 1 | 0 | 1 |
| 14 | 1 | 1 | 1 | 0 |
| 15 | 1 | 1 | 1 | 1 |
| 16 | 0 | 0 | 0 | 0 |
| 17 | 0 | 0 | 0 | 1 |

**รูปคลื่น** ฟลิป-ฟลอปแต่ละตัวสลับสถานะเมื่อเอาต์พุตของตัวก่อนหน้าเปลี่ยนจาก $1$ เป็น $0$ (ขอบขาลง) จึงแบ่งความถี่ลงครึ่งหนึ่งทุกตัว

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="806" height="344" viewBox="0 0 806 344" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="102" y1="26" x2="102" y2="338"/>
<line x1="142" y1="26" x2="142" y2="338"/>
<line x1="182" y1="26" x2="182" y2="338"/>
<line x1="222" y1="26" x2="222" y2="338"/>
<line x1="262" y1="26" x2="262" y2="338"/>
<line x1="302" y1="26" x2="302" y2="338"/>
<line x1="342" y1="26" x2="342" y2="338"/>
<line x1="382" y1="26" x2="382" y2="338"/>
<line x1="422" y1="26" x2="422" y2="338"/>
<line x1="462" y1="26" x2="462" y2="338"/>
<line x1="502" y1="26" x2="502" y2="338"/>
<line x1="542" y1="26" x2="542" y2="338"/>
<line x1="582" y1="26" x2="582" y2="338"/>
<line x1="622" y1="26" x2="622" y2="338"/>
<line x1="662" y1="26" x2="662" y2="338"/>
<line x1="702" y1="26" x2="702" y2="338"/>
<line x1="742" y1="26" x2="742" y2="338"/>
</g>
<text x="50" y="63.6" text-anchor="end">Clock</text>
<path d="M62,71.2 L82,71.2 L82,44 L102,44 L102,71.2 L122,71.2 L122,44 L142,44 L142,71.2 L162,71.2 L162,44 L182,44 L182,71.2 L202,71.2 L202,44 L222,44 L222,71.2 L242,71.2 L242,44 L262,44 L262,71.2 L282,71.2 L282,44 L302,44 L302,71.2 L322,71.2 L322,44 L342,44 L342,71.2 L362,71.2 L362,44 L382,44 L382,71.2 L402,71.2 L402,44 L422,44 L422,71.2 L442,71.2 L442,44 L462,44 L462,71.2 L482,71.2 L482,44 L502,44 L502,71.2 L522,71.2 L522,44 L542,44 L542,71.2 L562,71.2 L562,44 L582,44 L582,71.2 L602,71.2 L602,44 L622,44 L622,71.2 L642,71.2 L642,44 L662,44 L662,71.2 L682,71.2 L682,44 L702,44 L702,71.2 L722,71.2 L722,44 L742,44 L742,71.2 L782,71.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">Q<tspan dy="4" font-size="12">D</tspan></text>
<path d="M62,131.2 L102,131.2 L102,104 L142,104 L142,131.2 L182,131.2 L182,104 L222,104 L222,131.2 L262,131.2 L262,104 L302,104 L302,131.2 L342,131.2 L342,104 L382,104 L382,131.2 L422,131.2 L422,104 L462,104 L462,131.2 L502,131.2 L502,104 L542,104 L542,131.2 L582,131.2 L582,104 L622,104 L622,131.2 L662,131.2 L662,104 L702,104 L702,131.2 L742,131.2 L742,104 L782,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">Q<tspan dy="4" font-size="12">C</tspan></text>
<path d="M62,191.2 L142,191.2 L142,164 L222,164 L222,191.2 L302,191.2 L302,164 L382,164 L382,191.2 L462,191.2 L462,164 L542,164 L542,191.2 L622,191.2 L622,164 L702,164 L702,191.2 L782,191.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">Q<tspan dy="4" font-size="12">B</tspan></text>
<path d="M62,251.2 L222,251.2 L222,224 L382,224 L382,251.2 L542,251.2 L542,224 L702,224 L702,251.2 L782,251.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">Q<tspan dy="4" font-size="12">A</tspan></text>
<path d="M62,311.2 L382,311.2 L382,284 L702,284 L702,311.2 L782,311.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
</svg>
</div>

**ข้อดี** สร้างง่าย เพียงนำฟลิป-ฟลอปมาต่อเรียงกัน

**ข้อเสีย** ต้องนำเวลาทำงานของฟลิป-ฟลอปแต่ละตัวมารวมกัน ทำให้การนับเลขที่มีค่ามาก ๆ ต้องเสียเวลาตามจำนวนบิตที่ต้องการนับ และถ้าใช้สัญญาณที่มีความถี่สูงในการนับ อาจทำให้เกิดความผิดพลาดได้ง่าย ไม่เหมาะที่จะใช้เป็นสัญญาณควบคุมการทำงาน

### ตัวอย่างที่ 2  วงจรนับริบเพิล 4 บิต (ฟลิป-ฟลอปทำงานที่ขอบขาลง) เริ่มต้นที่ $0000$ จงเขียนตารางการนับ และรูปคลื่นของ $Q_D, Q_C, Q_B, Q_A$ เมื่อป้อนพัลส์นาฬิกา 17 พัลส์

$\mathbf{Sol}^{n}$

ฟลิป-ฟลอป D สลับสถานะทุกพัลส์นาฬิกา ส่วนตัวถัดไปสลับเมื่อ $Q$ ของตัวก่อนหน้าเปลี่ยนจาก $1$ เป็น $0$ ดังนั้น

- $Q_D$ สลับทุกพัลส์ : $0,1,0,1,\dots$
- $Q_C$ สลับเมื่อ $Q_D$ ตกจาก $1$ เป็น $0$ คือทุก 2 พัลส์
- $Q_B$ สลับเมื่อ $Q_C$ ตกจาก $1$ เป็น $0$ คือทุก 4 พัลส์
- $Q_A$ สลับเมื่อ $Q_B$ ตกจาก $1$ เป็น $0$ คือทุก 8 พัลส์
- ผลคือค่าฐานสองเพิ่มขึ้นทีละ $1$ ทุกพัลส์ จนถึง $1111$ แล้วพัลส์ที่ 16 ทำให้ทุกตัวตกเป็น $0000$ และนับต่อ

$\mathbf{Ans}\quad \text{ตารางการนับและรูปคลื่นตามด้านล่าง}$

| พัลส์ | $Q_A$ | $Q_B$ | $Q_C$ | $Q_D$ |
|:-:|:-:|:-:|:-:|:-:|
| 0 | 0 | 0 | 0 | 0 |
| 1 | 0 | 0 | 0 | 1 |
| 2 | 0 | 0 | 1 | 0 |
| 3 | 0 | 0 | 1 | 1 |
| 4 | 0 | 1 | 0 | 0 |
| 5 | 0 | 1 | 0 | 1 |
| 6 | 0 | 1 | 1 | 0 |
| 7 | 0 | 1 | 1 | 1 |
| 8 | 1 | 0 | 0 | 0 |
| 9 | 1 | 0 | 0 | 1 |
| 10 | 1 | 0 | 1 | 0 |
| 11 | 1 | 0 | 1 | 1 |
| 12 | 1 | 1 | 0 | 0 |
| 13 | 1 | 1 | 0 | 1 |
| 14 | 1 | 1 | 1 | 0 |
| 15 | 1 | 1 | 1 | 1 |
| 16 | 0 | 0 | 0 | 0 |
| 17 | 0 | 0 | 0 | 1 |

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="806" height="344" viewBox="0 0 806 344" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="102" y1="26" x2="102" y2="338"/>
<line x1="142" y1="26" x2="142" y2="338"/>
<line x1="182" y1="26" x2="182" y2="338"/>
<line x1="222" y1="26" x2="222" y2="338"/>
<line x1="262" y1="26" x2="262" y2="338"/>
<line x1="302" y1="26" x2="302" y2="338"/>
<line x1="342" y1="26" x2="342" y2="338"/>
<line x1="382" y1="26" x2="382" y2="338"/>
<line x1="422" y1="26" x2="422" y2="338"/>
<line x1="462" y1="26" x2="462" y2="338"/>
<line x1="502" y1="26" x2="502" y2="338"/>
<line x1="542" y1="26" x2="542" y2="338"/>
<line x1="582" y1="26" x2="582" y2="338"/>
<line x1="622" y1="26" x2="622" y2="338"/>
<line x1="662" y1="26" x2="662" y2="338"/>
<line x1="702" y1="26" x2="702" y2="338"/>
<line x1="742" y1="26" x2="742" y2="338"/>
</g>
<text x="50" y="63.6" text-anchor="end">Clock</text>
<path d="M62,71.2 L82,71.2 L82,44 L102,44 L102,71.2 L122,71.2 L122,44 L142,44 L142,71.2 L162,71.2 L162,44 L182,44 L182,71.2 L202,71.2 L202,44 L222,44 L222,71.2 L242,71.2 L242,44 L262,44 L262,71.2 L282,71.2 L282,44 L302,44 L302,71.2 L322,71.2 L322,44 L342,44 L342,71.2 L362,71.2 L362,44 L382,44 L382,71.2 L402,71.2 L402,44 L422,44 L422,71.2 L442,71.2 L442,44 L462,44 L462,71.2 L482,71.2 L482,44 L502,44 L502,71.2 L522,71.2 L522,44 L542,44 L542,71.2 L562,71.2 L562,44 L582,44 L582,71.2 L602,71.2 L602,44 L622,44 L622,71.2 L642,71.2 L642,44 L662,44 L662,71.2 L682,71.2 L682,44 L702,44 L702,71.2 L722,71.2 L722,44 L742,44 L742,71.2 L782,71.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">Q<tspan dy="4" font-size="12">D</tspan></text>
<path d="M62,131.2 L102,131.2 L102,104 L142,104 L142,131.2 L182,131.2 L182,104 L222,104 L222,131.2 L262,131.2 L262,104 L302,104 L302,131.2 L342,131.2 L342,104 L382,104 L382,131.2 L422,131.2 L422,104 L462,104 L462,131.2 L502,131.2 L502,104 L542,104 L542,131.2 L582,131.2 L582,104 L622,104 L622,131.2 L662,131.2 L662,104 L702,104 L702,131.2 L742,131.2 L742,104 L782,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">Q<tspan dy="4" font-size="12">C</tspan></text>
<path d="M62,191.2 L142,191.2 L142,164 L222,164 L222,191.2 L302,191.2 L302,164 L382,164 L382,191.2 L462,191.2 L462,164 L542,164 L542,191.2 L622,191.2 L622,164 L702,164 L702,191.2 L782,191.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">Q<tspan dy="4" font-size="12">B</tspan></text>
<path d="M62,251.2 L222,251.2 L222,224 L382,224 L382,251.2 L542,251.2 L542,224 L702,224 L702,251.2 L782,251.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">Q<tspan dy="4" font-size="12">A</tspan></text>
<path d="M62,311.2 L382,311.2 L382,284 L702,284 L702,311.2 L782,311.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
</svg>
</div>

### ตัวอย่างที่ 3  วงจรนับริบเพิล 4 บิต เริ่มต้นที่ $0110$ ป้อนพัลส์นาฬิกา 21 พัลส์ จะนับได้ค่าเท่าใด

$\mathbf{Sol}^{n}$

วงจรนับ 4 บิตเป็น Mod 16 นับครบ 16 พัลส์ก็กลับมาค่าเดิม จึงนับเฉพาะเศษของ 16

- ค่าเริ่มต้น $0110_2 = 6$
- $6 + 21 = 27$
- $27 \bmod 16 = 11$
- $11 = 1011_2$

$\mathbf{Ans}\quad Q_AQ_BQ_CQ_D = 1011$

### 2.2 วงจรนับชนิดมอดูโล (Modulo-M Counter)

ในบางครั้งผู้ออกแบบวงจรนับต้องการนับถึงเลขที่ต้องการ โดยไม่ปล่อยให้นับไปจนถึงค่าสูงสุด ทำได้โดยการล้าง (Clear) ฟลิป-ฟลอปทุกตัวเมื่อนับถึงเลขที่กำหนดไว้แล้ว จึงเริ่มนับใหม่ ฟลิป-ฟลอปทุกตัวที่ใช้ต้องมีขา CLR (Clear)

**ตัวอย่างวงจรนับมอดูโล 10** (วงจรนับแบบ BCD หรือวงจรนับสิบ) การนับเริ่มจาก $0$ ($0000$) ถึง $9$ ($1001$) เมื่อนับถึง $10$ ($1010$) คือ $Q_C$ และ $Q_A = 1$ ทำให้สัญญาณออกของ NAND เกตเป็น $0$ ฟลิป-ฟลอปทุกตัวถูกล้างเป็น $0000$ ทันที ซึ่งเป็นการเริ่มต้นใหม่ต่อไป

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="727" height="304" viewBox="0 0 727 304" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<rect x="80" y="40" width="70" height="90" rx="2"/>
<polyline points="80,76 92,85 80,94"/>
<circle cx="76" cy="85" r="4"/>
<line x1="150" y1="62" x2="180" y2="62"/>
<circle cx="115" cy="134" r="4"/>
<line x1="115" y1="138" x2="115" y2="170"/>
<line x1="40" y1="85" x2="72" y2="85"/>
<rect x="210" y="40" width="70" height="90" rx="2"/>
<polyline points="210,76 222,85 210,94"/>
<circle cx="206" cy="85" r="4"/>
<line x1="280" y1="62" x2="310" y2="62"/>
<circle cx="245" cy="134" r="4"/>
<line x1="245" y1="138" x2="245" y2="170"/>
<line x1="180" y1="62" x2="180" y2="85"/>
<line x1="180" y1="85" x2="202" y2="85"/>
<rect x="340" y="40" width="70" height="90" rx="2"/>
<polyline points="340,76 352,85 340,94"/>
<circle cx="336" cy="85" r="4"/>
<line x1="410" y1="62" x2="440" y2="62"/>
<circle cx="375" cy="134" r="4"/>
<line x1="375" y1="138" x2="375" y2="170"/>
<line x1="310" y1="62" x2="310" y2="85"/>
<line x1="310" y1="85" x2="332" y2="85"/>
<rect x="470" y="40" width="70" height="90" rx="2"/>
<polyline points="470,76 482,85 470,94"/>
<circle cx="466" cy="85" r="4"/>
<line x1="540" y1="62" x2="570" y2="62"/>
<circle cx="505" cy="134" r="4"/>
<line x1="505" y1="138" x2="505" y2="170"/>
<line x1="440" y1="62" x2="440" y2="85"/>
<line x1="440" y1="85" x2="462" y2="85"/>
<line x1="570" y1="62" x2="590" y2="62"/>
<line x1="115" y1="170" x2="505" y2="170"/>
<path d="M595,194 H621 A26,21 0 0 1 621,236 H595 Z"/>
<circle cx="652" cy="215" r="5"/>
<line x1="570" y1="62" x2="570" y2="250"/>
<line x1="570" y1="250" x2="581" y2="250"/>
<line x1="581" y1="250" x2="581" y2="208"/>
<line x1="581" y1="208" x2="595" y2="208"/>
<line x1="310" y1="62" x2="310" y2="264"/>
<line x1="310" y1="264" x2="571" y2="264"/>
<line x1="571" y1="264" x2="571" y2="222"/>
<line x1="571" y1="222" x2="595" y2="222"/>
<line x1="657" y1="215" x2="677" y2="215"/>
<line x1="677" y1="215" x2="677" y2="184"/>
<line x1="677" y1="184" x2="85" y2="184"/>
<line x1="85" y1="184" x2="85" y2="170"/>
<line x1="85" y1="170" x2="115" y2="170"/>
<circle cx="115" cy="170" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="245" cy="170" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="375" cy="170" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="505" cy="170" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="180" cy="62" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="310" cy="62" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="440" cy="62" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="570" cy="62" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="570" cy="62" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="310" cy="62" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="121" y="89" text-anchor="middle" font-size="22">D</text>
<text x="98" y="90" text-anchor="start" font-size="14">T</text>
<text x="142" y="68" text-anchor="end" font-size="16">Q</text>
<text x="36" y="91" text-anchor="end" font-size="16">Clock</text>
<text x="251" y="89" text-anchor="middle" font-size="22">C</text>
<text x="228" y="90" text-anchor="start" font-size="14">T</text>
<text x="272" y="68" text-anchor="end" font-size="16">Q</text>
<text x="381" y="89" text-anchor="middle" font-size="22">B</text>
<text x="358" y="90" text-anchor="start" font-size="14">T</text>
<text x="402" y="68" text-anchor="end" font-size="16">Q</text>
<text x="511" y="89" text-anchor="middle" font-size="22">A</text>
<text x="488" y="90" text-anchor="start" font-size="14">T</text>
<text x="532" y="68" text-anchor="end" font-size="16">Q</text>
<text x="176" y="50" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="10">D</tspan></text>
<text x="306" y="50" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="10">C</tspan></text>
<text x="436" y="50" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="10">B</tspan></text>
<text x="566" y="50" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="10">A</tspan></text>
<text x="681" y="237" text-anchor="start" font-size="14">CLR</text>
</g>
</svg>
</div>

**วิธีออกแบบวงจรนับ Mod $M$ ด้วยการล้าง**

1. เลือกจำนวนฟลิป-ฟลอป $n$ ให้ $2^{n} \ge M$
2. เขียน $M$ เป็นเลขฐานสอง
3. ต่อ $Q$ ของฟลิป-ฟลอปที่เป็น $1$ ในเลข $M$ เข้า NAND เกต (เลข $M$ เป็นเลขที่น้อยที่สุดที่มีบิตเหล่านั้นเป็น $1$ ทั้งหมด จึงตรวจจับได้พอดีที่ $M$)
4. ต่อเอาต์พุตของ NAND เกตเข้าขา CLR ของฟลิป-ฟลอปทุกตัว (CLR ทำงานเมื่อเป็น $0$)

**ตารางการนับของ Mod 10** (ค่า $1010$ เกิดขึ้นเพียงชั่วขณะแล้วถูกล้าง จึงไม่นับเป็นค่าที่นับได้)

| พัลส์ | $Q_A$ | $Q_B$ | $Q_C$ | $Q_D$ |
|:-:|:-:|:-:|:-:|:-:|
| 0 | 0 | 0 | 0 | 0 |
| 1 | 0 | 0 | 0 | 1 |
| 2 | 0 | 0 | 1 | 0 |
| 3 | 0 | 0 | 1 | 1 |
| 4 | 0 | 1 | 0 | 0 |
| 5 | 0 | 1 | 0 | 1 |
| 6 | 0 | 1 | 1 | 0 |
| 7 | 0 | 1 | 1 | 1 |
| 8 | 1 | 0 | 0 | 0 |
| 9 | 1 | 0 | 0 | 1 |
| 10 | 0 | 0 | 0 | 0 |
| 11 | 0 | 0 | 0 | 1 |
| 12 | 0 | 0 | 1 | 0 |

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="710" height="344" viewBox="0 0 710 344" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="110" y1="26" x2="110" y2="338"/>
<line x1="158" y1="26" x2="158" y2="338"/>
<line x1="206" y1="26" x2="206" y2="338"/>
<line x1="254" y1="26" x2="254" y2="338"/>
<line x1="302" y1="26" x2="302" y2="338"/>
<line x1="350" y1="26" x2="350" y2="338"/>
<line x1="398" y1="26" x2="398" y2="338"/>
<line x1="446" y1="26" x2="446" y2="338"/>
<line x1="494" y1="26" x2="494" y2="338"/>
<line x1="542" y1="26" x2="542" y2="338"/>
<line x1="590" y1="26" x2="590" y2="338"/>
<line x1="638" y1="26" x2="638" y2="338"/>
</g>
<text x="50" y="63.6" text-anchor="end">Clock</text>
<path d="M62,71.2 L86,71.2 L86,44 L110,44 L110,71.2 L134,71.2 L134,44 L158,44 L158,71.2 L182,71.2 L182,44 L206,44 L206,71.2 L230,71.2 L230,44 L254,44 L254,71.2 L278,71.2 L278,44 L302,44 L302,71.2 L326,71.2 L326,44 L350,44 L350,71.2 L374,71.2 L374,44 L398,44 L398,71.2 L422,71.2 L422,44 L446,44 L446,71.2 L470,71.2 L470,44 L494,44 L494,71.2 L518,71.2 L518,44 L542,44 L542,71.2 L566,71.2 L566,44 L590,44 L590,71.2 L614,71.2 L614,44 L638,44 L638,71.2 L686,71.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">Q<tspan dy="4" font-size="12">D</tspan></text>
<path d="M62,131.2 L110,131.2 L110,104 L158,104 L158,131.2 L206,131.2 L206,104 L254,104 L254,131.2 L302,131.2 L302,104 L350,104 L350,131.2 L398,131.2 L398,104 L446,104 L446,131.2 L494,131.2 L494,104 L542,104 L542,131.2 L590,131.2 L590,104 L638,104 L638,131.2 L686,131.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">Q<tspan dy="4" font-size="12">C</tspan></text>
<path d="M62,191.2 L158,191.2 L158,164 L254,164 L254,191.2 L350,191.2 L350,164 L446,164 L446,191.2 L638,191.2 L638,164 L686,164" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">Q<tspan dy="4" font-size="12">B</tspan></text>
<path d="M62,251.2 L254,251.2 L254,224 L446,224 L446,251.2 L686,251.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">Q<tspan dy="4" font-size="12">A</tspan></text>
<path d="M62,311.2 L446,311.2 L446,284 L542,284 L542,311.2 L686,311.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
</svg>
</div>

### ตัวอย่างที่ 4  จงเขียนตารางการนับและรูปคลื่นของวงจรนับ Mod 10 (ล้างเมื่อนับถึง $1010$) เมื่อป้อนพัลส์นาฬิกา 12 พัลส์ เริ่มต้นที่ $0000$

$\mathbf{Sol}^{n}$

นับขึ้นเหมือนวงจรนับริบเพิลทุกประการ จนถึงพัลส์ที่ 10 ซึ่งนับได้ $1010$ ($Q_A = 1$ และ $Q_C = 1$) ทำให้ NAND ส่ง $0$ ไปล้างฟลิป-ฟลอปทุกตัวเป็น $0000$ ทันที

- พัลส์ที่ 1 ถึง 9 : $0001, 0010, \dots, 1001$
- พัลส์ที่ 10 : นับได้ $1010$ แล้วถูกล้างเป็น $0000$
- พัลส์ที่ 11, 12 : $0001, 0010$ (นับต่อจาก $0$)

$\mathbf{Ans}\quad \text{ตารางการนับและรูปคลื่นตามด้านล่าง ลำดับการนับคือ } 0,1,2,\dots,9,0,1,\dots$

| พัลส์ | $Q_A$ | $Q_B$ | $Q_C$ | $Q_D$ |
|:-:|:-:|:-:|:-:|:-:|
| 0 | 0 | 0 | 0 | 0 |
| 1 | 0 | 0 | 0 | 1 |
| 2 | 0 | 0 | 1 | 0 |
| 3 | 0 | 0 | 1 | 1 |
| 4 | 0 | 1 | 0 | 0 |
| 5 | 0 | 1 | 0 | 1 |
| 6 | 0 | 1 | 1 | 0 |
| 7 | 0 | 1 | 1 | 1 |
| 8 | 1 | 0 | 0 | 0 |
| 9 | 1 | 0 | 0 | 1 |
| 10 | 0 | 0 | 0 | 0 |
| 11 | 0 | 0 | 0 | 1 |
| 12 | 0 | 0 | 1 | 0 |

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="710" height="344" viewBox="0 0 710 344" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="110" y1="26" x2="110" y2="338"/>
<line x1="158" y1="26" x2="158" y2="338"/>
<line x1="206" y1="26" x2="206" y2="338"/>
<line x1="254" y1="26" x2="254" y2="338"/>
<line x1="302" y1="26" x2="302" y2="338"/>
<line x1="350" y1="26" x2="350" y2="338"/>
<line x1="398" y1="26" x2="398" y2="338"/>
<line x1="446" y1="26" x2="446" y2="338"/>
<line x1="494" y1="26" x2="494" y2="338"/>
<line x1="542" y1="26" x2="542" y2="338"/>
<line x1="590" y1="26" x2="590" y2="338"/>
<line x1="638" y1="26" x2="638" y2="338"/>
</g>
<text x="50" y="63.6" text-anchor="end">Clock</text>
<path d="M62,71.2 L86,71.2 L86,44 L110,44 L110,71.2 L134,71.2 L134,44 L158,44 L158,71.2 L182,71.2 L182,44 L206,44 L206,71.2 L230,71.2 L230,44 L254,44 L254,71.2 L278,71.2 L278,44 L302,44 L302,71.2 L326,71.2 L326,44 L350,44 L350,71.2 L374,71.2 L374,44 L398,44 L398,71.2 L422,71.2 L422,44 L446,44 L446,71.2 L470,71.2 L470,44 L494,44 L494,71.2 L518,71.2 L518,44 L542,44 L542,71.2 L566,71.2 L566,44 L590,44 L590,71.2 L614,71.2 L614,44 L638,44 L638,71.2 L686,71.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">Q<tspan dy="4" font-size="12">D</tspan></text>
<path d="M62,131.2 L110,131.2 L110,104 L158,104 L158,131.2 L206,131.2 L206,104 L254,104 L254,131.2 L302,131.2 L302,104 L350,104 L350,131.2 L398,131.2 L398,104 L446,104 L446,131.2 L494,131.2 L494,104 L542,104 L542,131.2 L590,131.2 L590,104 L638,104 L638,131.2 L686,131.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">Q<tspan dy="4" font-size="12">C</tspan></text>
<path d="M62,191.2 L158,191.2 L158,164 L254,164 L254,191.2 L350,191.2 L350,164 L446,164 L446,191.2 L638,191.2 L638,164 L686,164" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">Q<tspan dy="4" font-size="12">B</tspan></text>
<path d="M62,251.2 L254,251.2 L254,224 L446,224 L446,251.2 L686,251.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">Q<tspan dy="4" font-size="12">A</tspan></text>
<path d="M62,311.2 L446,311.2 L446,284 L542,284 L542,311.2 L686,311.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
</svg>
</div>

### ตัวอย่างที่ 5  จงออกแบบวงจรนับ Mod 6 (นับ $0$ ถึง $5$) แบบริบเพิล โดยใช้ T ฟลิป-ฟลอปที่ทำงานที่ขอบขาลงและล้างเมื่อนับถึง $6$

$\mathbf{Sol}^{n}$

- ใช้ฟลิป-ฟลอป $n$ ตัว ที่ $2^{n} \ge 6$ ได้ $n = 3$ ตั้งชื่อ C (บิตต่ำสุด), B, A (บิตสูงสุด)
- $6 = 110_2$ มี $1$ ที่ $Q_A$ และ $Q_B$ จึงต่อ $Q_A$ และ $Q_B$ เข้า NAND เกต
- ที่พัลส์ที่ 6 นับได้ $110$ ทำให้ NAND ได้ $0$ ล้างทุกตัวเป็น $000$
- ตรวจ : ไม่มีค่า $000$ ถึง $101$ ที่ $Q_A = Q_B = 1$ พร้อมกัน จึงไม่ถูกล้างก่อนถึง $6$

$\mathbf{Ans}\quad \text{ตามวงจรและตารางต่อไปนี้ ลำดับการนับ } 0,1,2,3,4,5,0,\dots$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="597" height="304" viewBox="0 0 597 304" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<rect x="80" y="40" width="70" height="90" rx="2"/>
<polyline points="80,76 92,85 80,94"/>
<circle cx="76" cy="85" r="4"/>
<line x1="150" y1="62" x2="180" y2="62"/>
<circle cx="115" cy="134" r="4"/>
<line x1="115" y1="138" x2="115" y2="170"/>
<line x1="40" y1="85" x2="72" y2="85"/>
<rect x="210" y="40" width="70" height="90" rx="2"/>
<polyline points="210,76 222,85 210,94"/>
<circle cx="206" cy="85" r="4"/>
<line x1="280" y1="62" x2="310" y2="62"/>
<circle cx="245" cy="134" r="4"/>
<line x1="245" y1="138" x2="245" y2="170"/>
<line x1="180" y1="62" x2="180" y2="85"/>
<line x1="180" y1="85" x2="202" y2="85"/>
<rect x="340" y="40" width="70" height="90" rx="2"/>
<polyline points="340,76 352,85 340,94"/>
<circle cx="336" cy="85" r="4"/>
<line x1="410" y1="62" x2="440" y2="62"/>
<circle cx="375" cy="134" r="4"/>
<line x1="375" y1="138" x2="375" y2="170"/>
<line x1="310" y1="62" x2="310" y2="85"/>
<line x1="310" y1="85" x2="332" y2="85"/>
<line x1="440" y1="62" x2="460" y2="62"/>
<line x1="115" y1="170" x2="375" y2="170"/>
<path d="M465,194 H491 A26,21 0 0 1 491,236 H465 Z"/>
<circle cx="522" cy="215" r="5"/>
<line x1="440" y1="62" x2="440" y2="250"/>
<line x1="440" y1="250" x2="451" y2="250"/>
<line x1="451" y1="250" x2="451" y2="208"/>
<line x1="451" y1="208" x2="465" y2="208"/>
<line x1="310" y1="62" x2="310" y2="264"/>
<line x1="310" y1="264" x2="441" y2="264"/>
<line x1="441" y1="264" x2="441" y2="222"/>
<line x1="441" y1="222" x2="465" y2="222"/>
<line x1="527" y1="215" x2="547" y2="215"/>
<line x1="547" y1="215" x2="547" y2="184"/>
<line x1="547" y1="184" x2="85" y2="184"/>
<line x1="85" y1="184" x2="85" y2="170"/>
<line x1="85" y1="170" x2="115" y2="170"/>
<circle cx="115" cy="170" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="245" cy="170" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="375" cy="170" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="180" cy="62" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="310" cy="62" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="440" cy="62" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="440" cy="62" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="310" cy="62" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="121" y="89" text-anchor="middle" font-size="22">C</text>
<text x="98" y="90" text-anchor="start" font-size="14">T</text>
<text x="142" y="68" text-anchor="end" font-size="16">Q</text>
<text x="36" y="91" text-anchor="end" font-size="16">Clock</text>
<text x="251" y="89" text-anchor="middle" font-size="22">B</text>
<text x="228" y="90" text-anchor="start" font-size="14">T</text>
<text x="272" y="68" text-anchor="end" font-size="16">Q</text>
<text x="381" y="89" text-anchor="middle" font-size="22">A</text>
<text x="358" y="90" text-anchor="start" font-size="14">T</text>
<text x="402" y="68" text-anchor="end" font-size="16">Q</text>
<text x="176" y="50" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="10">C</tspan></text>
<text x="306" y="50" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="10">B</tspan></text>
<text x="436" y="50" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="10">A</tspan></text>
<text x="551" y="237" text-anchor="start" font-size="14">CLR</text>
</g>
</svg>
</div>

| พัลส์ | $Q_A$ | $Q_B$ | $Q_C$ |
|:-:|:-:|:-:|:-:|
| 0 | 0 | 0 | 0 |
| 1 | 0 | 0 | 1 |
| 2 | 0 | 1 | 0 |
| 3 | 0 | 1 | 1 |
| 4 | 1 | 0 | 0 |
| 5 | 1 | 0 | 1 |
| 6 | 0 | 0 | 0 |
| 7 | 0 | 0 | 1 |
| 8 | 0 | 1 | 0 |

## 3. วงจรนับชนิดได้จังหวะกัน

### 3.1 หลักการและวงจรนับขึ้นขนาด 4 บิต

วงจรนับชนิดได้จังหวะกัน (Synchronous Counter) เป็นวงจรนับที่มีการควบคุมการทำงานของฟลิป-ฟลอปทุกตัวในวงจรให้ทำงานพร้อมกัน (ใช้สัญญาณ Clock ตัวเดียวกันเป็นสัญญาณควบคุม) ทำให้ฟลิป-ฟลอปทุกตัวทำงานพร้อมกัน และถ้าฟลิป-ฟลอปแต่ละตัวมีเวลาในการทำงานเท่ากัน เอาต์พุตของการนับจะเปลี่ยนไปพร้อมกัน

**ข้อดี** เวลาในการทำงานของวงจรเท่ากับฟลิป-ฟลอปตัวเดียว หรือตัวที่ใช้เวลามากที่สุด และความผิดพลาดที่อาจเกิดขึ้นน้อยลง

**วงจรนับแบบเข้าจังหวะกันขนาด 4 บิต** (JK ฟลิป-ฟลอป) ทุกตัวรับ Clock เดียวกัน ฟลิป-ฟลอปแต่ละตัวมี $J=K$ ต่อกับผลคูณของบิตที่ต่ำกว่าทั้งหมด จึงสลับสถานะเมื่อบิตที่ต่ำกว่าเป็น $1$ ทั้งหมดเท่านั้น (ตัว D เป็นบิตต่ำสุด $J=K=1$ จึงสลับทุกพัลส์) ป้าย $Q_A$ ถึง $Q_D$ ในรูปคือสายที่ต่อจากเอาต์พุตของฟลิป-ฟลอปตัวนั้น

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="1360" height="258" viewBox="0 0 1360 258" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,24)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<rect x="140" y="20" width="80" height="150" rx="2"/>
<polyline points="140,86 152,95 140,104"/>
<circle cx="136" cy="95" r="4"/>
<line x1="132" y1="95" x2="124" y2="95"/>
<line x1="124" y1="95" x2="124" y2="210"/>
<line x1="70" y1="95" x2="106" y2="95"/>
<line x1="106" y1="95" x2="106" y2="58"/>
<line x1="106" y1="58" x2="140" y2="58"/>
<line x1="106" y1="95" x2="106" y2="132"/>
<line x1="106" y1="132" x2="140" y2="132"/>
<line x1="220" y1="58" x2="260" y2="58"/>
<rect x="430" y="20" width="80" height="150" rx="2"/>
<polyline points="430,86 442,95 430,104"/>
<circle cx="426" cy="95" r="4"/>
<line x1="422" y1="95" x2="414" y2="95"/>
<line x1="414" y1="95" x2="414" y2="210"/>
<line x1="352" y1="95" x2="396" y2="95"/>
<line x1="396" y1="95" x2="396" y2="58"/>
<line x1="396" y1="58" x2="430" y2="58"/>
<line x1="396" y1="95" x2="396" y2="132"/>
<line x1="396" y1="132" x2="430" y2="132"/>
<line x1="510" y1="58" x2="550" y2="58"/>
<rect x="805" y="20" width="80" height="150" rx="2"/>
<polyline points="805,86 817,95 805,104"/>
<circle cx="801" cy="95" r="4"/>
<line x1="797" y1="95" x2="789" y2="95"/>
<line x1="789" y1="95" x2="789" y2="210"/>
<path d="M689,74 H715 A26,21 0 0 1 715,116 H689 Z"/>
<line x1="667" y1="88" x2="689" y2="88"/>
<line x1="667" y1="102" x2="689" y2="102"/>
<line x1="741" y1="95" x2="771" y2="95"/>
<line x1="771" y1="95" x2="771" y2="58"/>
<line x1="771" y1="58" x2="805" y2="58"/>
<line x1="771" y1="95" x2="771" y2="132"/>
<line x1="771" y1="132" x2="805" y2="132"/>
<line x1="885" y1="58" x2="925" y2="58"/>
<rect x="1180" y="20" width="80" height="150" rx="2"/>
<polyline points="1180,86 1192,95 1180,104"/>
<circle cx="1176" cy="95" r="4"/>
<line x1="1172" y1="95" x2="1164" y2="95"/>
<line x1="1164" y1="95" x2="1164" y2="210"/>
<path d="M1064,67 H1090 A26,28 0 0 1 1090,123 H1064 Z"/>
<line x1="1042" y1="81" x2="1064" y2="81"/>
<line x1="1042" y1="95" x2="1064" y2="95"/>
<line x1="1042" y1="109" x2="1064" y2="109"/>
<line x1="1116" y1="95" x2="1146" y2="95"/>
<line x1="1146" y1="95" x2="1146" y2="58"/>
<line x1="1146" y1="58" x2="1180" y2="58"/>
<line x1="1146" y1="95" x2="1146" y2="132"/>
<line x1="1146" y1="132" x2="1180" y2="132"/>
<line x1="1260" y1="58" x2="1300" y2="58"/>
<line x1="84" y1="210" x2="1164" y2="210"/>
<circle cx="124" cy="210" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="106" cy="95" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="414" cy="210" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="396" cy="95" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="789" cy="210" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="771" cy="95" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="1164" cy="210" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="1146" cy="95" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="180" y="103" text-anchor="middle" font-size="26">D</text>
<text x="148" y="64" text-anchor="start" font-size="14">J</text>
<text x="148" y="138" text-anchor="start" font-size="14">K</text>
<text x="66" y="101" text-anchor="end" font-size="16">1</text>
<text x="264" y="64" text-anchor="start" font-size="16">Q<tspan dy="4" font-size="10">D</tspan></text>
<text x="212" y="64" text-anchor="end" font-size="16">Q</text>
<text x="470" y="103" text-anchor="middle" font-size="26">C</text>
<text x="438" y="64" text-anchor="start" font-size="14">J</text>
<text x="438" y="138" text-anchor="start" font-size="14">K</text>
<text x="348" y="101" text-anchor="end" font-size="14">Q<tspan dy="4" font-size="9">D</tspan></text>
<text x="554" y="64" text-anchor="start" font-size="16">Q<tspan dy="4" font-size="10">C</tspan></text>
<text x="502" y="64" text-anchor="end" font-size="16">Q</text>
<text x="845" y="103" text-anchor="middle" font-size="26">B</text>
<text x="813" y="64" text-anchor="start" font-size="14">J</text>
<text x="813" y="138" text-anchor="start" font-size="14">K</text>
<text x="663" y="94" text-anchor="end" font-size="13">Q<tspan dy="4" font-size="9">D</tspan></text>
<text x="663" y="108" text-anchor="end" font-size="13">Q<tspan dy="4" font-size="9">C</tspan></text>
<text x="929" y="64" text-anchor="start" font-size="16">Q<tspan dy="4" font-size="10">B</tspan></text>
<text x="877" y="64" text-anchor="end" font-size="16">Q</text>
<text x="1220" y="103" text-anchor="middle" font-size="26">A</text>
<text x="1188" y="64" text-anchor="start" font-size="14">J</text>
<text x="1188" y="138" text-anchor="start" font-size="14">K</text>
<text x="1038" y="87" text-anchor="end" font-size="13">Q<tspan dy="4" font-size="9">D</tspan></text>
<text x="1038" y="101" text-anchor="end" font-size="13">Q<tspan dy="4" font-size="9">C</tspan></text>
<text x="1038" y="115" text-anchor="end" font-size="13">Q<tspan dy="4" font-size="9">B</tspan></text>
<text x="1304" y="64" text-anchor="start" font-size="16">Q<tspan dy="4" font-size="10">A</tspan></text>
<text x="1252" y="64" text-anchor="end" font-size="16">Q</text>
<text x="80" y="216" text-anchor="end" font-size="16">Clock</text>
</g>
</svg>
</div>

**หมายเหตุ** ในรูปของสไลด์ ป้ายน้ำหนักบิต ($2^{3}$ ถึง $2^{0}$) และชื่อฟลิป-ฟลอปเรียงสลับกับวงจรจริง ตัวที่รับ $J=K=1$ คือบิตต่ำสุด ที่นี่ตั้งชื่อให้ตรงกับวงจรริบเพิลข้างต้น คือ D เป็นบิตต่ำสุด และ A เป็นบิตสูงสุด

$$\text{ฟลิป-ฟลอปบิตที่ } k \text{ สลับสถานะเมื่อบิตที่ต่ำกว่าทุกบิตเป็น } 1: \quad J_k = K_k = Q_{k-1}Q_{k-2}\cdots Q_{0}$$

### 3.2 ขั้นตอนการออกแบบวงจรนับชนิดได้จังหวะกัน

**ขั้นตอนการออกแบบวงจร Synchronous Counter**

1. สร้างตารางค่าการนับเอาต์พุตที่ต้องการ (ลำดับการนับ และจำนวนฟลิป-ฟลอปที่ใช้ $2^{n} \ge$ ค่าสูงสุด $+1$)
2. สร้างตารางความจริงสำหรับค่าอินพุตของฟลิป-ฟลอปทุกตัวจากเอาต์พุตที่กำหนด และตารางการเปลี่ยนแปลง (ตารางกระตุ้น) ของฟลิป-ฟลอป
3. นำตารางความจริงที่ได้มาหาค่าอินพุต (สมการลอจิก) ของฟลิป-ฟลอปทุกตัว โดยใช้พีชคณิตบูลหรือ K-map (สถานะที่ไม่ได้ใช้เป็น $x$)
4. นำสมการที่ได้มาสร้างวงจร

**ตารางกระตุ้นที่ใช้** (ลำดับอินพุตเรียงตามหัวตาราง, $x$ คืออะไรก็ได้)

| $Q(t) \to Q(t+1)$ | RS (NOR): $R, S$ | JK: $J, K$ | D: $D$ | T: $T$ |
|:-:|:-:|:-:|:-:|:-:|
| $0 \to 0$ | $x,\ 0$ | $0,\ x$ | $0$ | $0$ |
| $0 \to 1$ | $0,\ 1$ | $1,\ x$ | $1$ | $1$ |
| $1 \to 0$ | $1,\ 0$ | $x,\ 1$ | $0$ | $1$ |
| $1 \to 1$ | $0,\ x$ | $x,\ 0$ | $1$ | $0$ |

ในตัวอย่างของบทนี้ ตั้งชื่อฟลิป-ฟลอป A, B, C โดย **A เป็นบิตสูงสุด** และสถานะเขียนเป็น $ABC$

### ตัวอย่างที่ 6  จงออกแบบวงจรนับโมดูโล 4 แบบได้จังหวะกัน โดยใช้ JK ฟลิป-ฟลอป

$\mathbf{Sol}^{n}$

**ขั้นที่ 1** วงจรนับโมดูโล 4 นับตั้งแต่ $0$ ถึง $3$ ได้แก่ $00, 01, 10, 11$ มี 4 สถานะ จึงต้องใช้ฟลิป-ฟลอป 2 ตัว (A, B)

**ขั้นที่ 2** เขียนตารางการเปลี่ยนสถานะ (State Transition) โดยดูอินพุตจากตารางกระตุ้นของ JK ($0\to0$ : $J=0,K=x$ ; $0\to1$ : $J=1,K=x$ ; $1\to0$ : $J=x,K=1$ ; $1\to1$ : $J=x,K=0$)

| $A$ | $B$ | $A^+$ | $B^+$ | $J_A$ | $K_A$ | $J_B$ | $K_B$ |
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| 0 | 0 | 0 | 1 | 0 | $x$ | 1 | $x$ |
| 0 | 1 | 1 | 0 | 1 | $x$ | $x$ | 1 |
| 1 | 0 | 1 | 1 | $x$ | 0 | 1 | $x$ |
| 1 | 1 | 0 | 0 | $x$ | 1 | $x$ | 1 |

**ขั้นที่ 3** ลดรูปด้วย K-map ($A$ ตามแนวนอน, $B$ ตามแนวตั้ง)

ลดรูป $J_{A}$

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
<text x="70" y="18" text-anchor="end">Q<tspan dy="4" font-size="12">A</tspan></text><text x="8" y="44">Q<tspan dy="4" font-size="12">B</tspan></text>
<text x="101" y="87" text-anchor="middle" font-size="22">0</text>
<text x="101" y="141" text-anchor="middle" font-size="22">1</text>
<text x="155" y="87" text-anchor="middle" font-size="22">x</text>
<text x="155" y="141" text-anchor="middle" font-size="22">x</text>
<path d="M87.5,110.5 L168.5,110.5 M177.5,119.5 L177.5,146.5 M168.5,155.5 L87.5,155.5 M78.5,146.5 L78.5,119.5 M78.5,119.5 A9,9 0 0 1 87.5,110.5 M168.5,110.5 A9,9 0 0 1 177.5,119.5 M177.5,146.5 A9,9 0 0 1 168.5,155.5 M87.5,155.5 A9,9 0 0 1 78.5,146.5" stroke="#e8743b" stroke-width="2.6" fill="none"/>
<text x="77" y="121" font-size="14" fill="#e8743b" font-weight="bold">1</text>
</svg>
</div>

- ลูปสีส้ม (สถานะ $01,11$) : $Q_B=1 \Rightarrow Q_{B}$

$J_{A} = Q_{B}$

ลดรูป $K_{A}$

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
<text x="70" y="18" text-anchor="end">Q<tspan dy="4" font-size="12">A</tspan></text><text x="8" y="44">Q<tspan dy="4" font-size="12">B</tspan></text>
<text x="101" y="87" text-anchor="middle" font-size="22">x</text>
<text x="101" y="141" text-anchor="middle" font-size="22">x</text>
<text x="155" y="87" text-anchor="middle" font-size="22">0</text>
<text x="155" y="141" text-anchor="middle" font-size="22">1</text>
<path d="M87.5,110.5 L168.5,110.5 M177.5,119.5 L177.5,146.5 M168.5,155.5 L87.5,155.5 M78.5,146.5 L78.5,119.5 M78.5,119.5 A9,9 0 0 1 87.5,110.5 M168.5,110.5 A9,9 0 0 1 177.5,119.5 M177.5,146.5 A9,9 0 0 1 168.5,155.5 M87.5,155.5 A9,9 0 0 1 78.5,146.5" stroke="#e8743b" stroke-width="2.6" fill="none"/>
<text x="77" y="121" font-size="14" fill="#e8743b" font-weight="bold">1</text>
</svg>
</div>

- ลูปสีส้ม (สถานะ $01,11$) : $Q_B=1 \Rightarrow Q_{B}$

$K_{A} = Q_{B}$

ลดรูป $J_{B}$

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
<text x="70" y="18" text-anchor="end">Q<tspan dy="4" font-size="12">A</tspan></text><text x="8" y="44">Q<tspan dy="4" font-size="12">B</tspan></text>
<text x="101" y="87" text-anchor="middle" font-size="22">1</text>
<text x="101" y="141" text-anchor="middle" font-size="22">x</text>
<text x="155" y="87" text-anchor="middle" font-size="22">1</text>
<text x="155" y="141" text-anchor="middle" font-size="22">x</text>
<path d="M87.5,56.5 L168.5,56.5 M177.5,65.5 L177.5,146.5 M168.5,155.5 L87.5,155.5 M78.5,146.5 L78.5,65.5 M78.5,65.5 A9,9 0 0 1 87.5,56.5 M168.5,56.5 A9,9 0 0 1 177.5,65.5 M177.5,146.5 A9,9 0 0 1 168.5,155.5 M87.5,155.5 A9,9 0 0 1 78.5,146.5" stroke="#e8743b" stroke-width="2.6" fill="none"/>
<text x="77" y="67" font-size="14" fill="#e8743b" font-weight="bold">1</text>
</svg>
</div>

- ลูปสีส้ม (สถานะ $00,01,10,11$) : $ \Rightarrow 1$

$J_{B} = 1$

ลดรูป $K_{B}$

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
<text x="70" y="18" text-anchor="end">Q<tspan dy="4" font-size="12">A</tspan></text><text x="8" y="44">Q<tspan dy="4" font-size="12">B</tspan></text>
<text x="101" y="87" text-anchor="middle" font-size="22">x</text>
<text x="101" y="141" text-anchor="middle" font-size="22">1</text>
<text x="155" y="87" text-anchor="middle" font-size="22">x</text>
<text x="155" y="141" text-anchor="middle" font-size="22">1</text>
<path d="M87.5,56.5 L168.5,56.5 M177.5,65.5 L177.5,146.5 M168.5,155.5 L87.5,155.5 M78.5,146.5 L78.5,65.5 M78.5,65.5 A9,9 0 0 1 87.5,56.5 M168.5,56.5 A9,9 0 0 1 177.5,65.5 M177.5,146.5 A9,9 0 0 1 168.5,155.5 M87.5,155.5 A9,9 0 0 1 78.5,146.5" stroke="#e8743b" stroke-width="2.6" fill="none"/>
<text x="77" y="67" font-size="14" fill="#e8743b" font-weight="bold">1</text>
</svg>
</div>

- ลูปสีส้ม (สถานะ $00,01,10,11$) : $ \Rightarrow 1$

$K_{B} = 1$

**ขั้นที่ 4** นำสมการมาสร้างวงจร

$\mathbf{Ans}\quad J_A = K_A = Q_B,\quad J_B = K_B = 1$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="610" height="258" viewBox="0 0 610 258" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,24)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<rect x="140" y="20" width="80" height="150" rx="2"/>
<polyline points="140,86 152,95 140,104"/>
<circle cx="136" cy="95" r="4"/>
<line x1="132" y1="95" x2="124" y2="95"/>
<line x1="124" y1="95" x2="124" y2="210"/>
<line x1="62" y1="95" x2="106" y2="95"/>
<line x1="106" y1="95" x2="106" y2="58"/>
<line x1="106" y1="58" x2="140" y2="58"/>
<line x1="106" y1="95" x2="106" y2="132"/>
<line x1="106" y1="132" x2="140" y2="132"/>
<line x1="220" y1="58" x2="260" y2="58"/>
<rect x="430" y="20" width="80" height="150" rx="2"/>
<polyline points="430,86 442,95 430,104"/>
<circle cx="426" cy="95" r="4"/>
<line x1="422" y1="95" x2="414" y2="95"/>
<line x1="414" y1="95" x2="414" y2="210"/>
<line x1="360" y1="95" x2="396" y2="95"/>
<line x1="396" y1="95" x2="396" y2="58"/>
<line x1="396" y1="58" x2="430" y2="58"/>
<line x1="396" y1="95" x2="396" y2="132"/>
<line x1="396" y1="132" x2="430" y2="132"/>
<line x1="510" y1="58" x2="550" y2="58"/>
<line x1="84" y1="210" x2="414" y2="210"/>
<circle cx="124" cy="210" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="106" cy="95" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="414" cy="210" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="396" cy="95" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="180" y="103" text-anchor="middle" font-size="26">A</text>
<text x="148" y="64" text-anchor="start" font-size="14">J</text>
<text x="148" y="138" text-anchor="start" font-size="14">K</text>
<text x="58" y="101" text-anchor="end" font-size="14">Q<tspan dy="4" font-size="9">B</tspan></text>
<text x="264" y="64" text-anchor="start" font-size="16">Q<tspan dy="4" font-size="10">A</tspan></text>
<text x="212" y="64" text-anchor="end" font-size="16">Q</text>
<text x="470" y="103" text-anchor="middle" font-size="26">B</text>
<text x="438" y="64" text-anchor="start" font-size="14">J</text>
<text x="438" y="138" text-anchor="start" font-size="14">K</text>
<text x="356" y="101" text-anchor="end" font-size="16">1</text>
<text x="554" y="64" text-anchor="start" font-size="16">Q<tspan dy="4" font-size="10">B</tspan></text>
<text x="502" y="64" text-anchor="end" font-size="16">Q</text>
<text x="80" y="216" text-anchor="end" font-size="16">Clock</text>
</g>
</svg>
</div>

### ตัวอย่างที่ 7  จงออกแบบวงจรนับกระโดด จาก $0 \to 3 \to 5 \to 2 \to 1$ และวนกลับมาที่ $0$ ใหม่ โดยใช้ RS ฟลิป-ฟลอป (NOR)

$\mathbf{Sol}^{n}$

**ขั้นที่ 1** ค่าที่สูงสุดคือ $5$ ($101_2$) จึงต้องใช้ฟลิป-ฟลอป 3 ตัว (A, B, C) สถานะ $ABC$ ที่ไม่อยู่ในลำดับ ($100, 110, 111$) ไม่ใช้ จึงเป็น $x$

**ขั้นที่ 2** เขียนตารางการเปลี่ยนสถานะ โดยดูอินพุตจากตารางกระตุ้นของ RS (NOR) ($0\to0$ : $R=x,S=0$ ; $0\to1$ : $R=0,S=1$ ; $1\to0$ : $R=1,S=0$ ; $1\to1$ : $R=0,S=x$)

| $A$ | $B$ | $C$ | $A^+$ | $B^+$ | $C^+$ | $R_A$ | $S_A$ | $R_B$ | $S_B$ | $R_C$ | $S_C$ |
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| 0 | 0 | 0 | 0 | 1 | 1 | $x$ | 0 | 0 | 1 | 0 | 1 |
| 0 | 1 | 1 | 1 | 0 | 1 | 0 | 1 | 1 | 0 | 0 | $x$ |
| 1 | 0 | 1 | 0 | 1 | 0 | 1 | 0 | 0 | 1 | 1 | 0 |
| 0 | 1 | 0 | 0 | 0 | 1 | $x$ | 0 | 1 | 0 | 0 | 1 |
| 0 | 0 | 1 | 0 | 0 | 0 | $x$ | 0 | $x$ | 0 | 1 | 0 |

**ขั้นที่ 3** ลดรูปด้วย K-map ($Q_AQ_B$ ตามแนวนอน, $Q_C$ ตามแนวตั้ง ช่องของสถานะที่ไม่ใช้เป็น $x$)

ลดรูป $R_{A}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="304" height="172" viewBox="0 0 304 172" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.6" fill="none">
<rect x="74" y="52" width="216" height="108"/>
<line x1="128" y1="52" x2="128" y2="160"/>
<line x1="182" y1="52" x2="182" y2="160"/>
<line x1="236" y1="52" x2="236" y2="160"/>
<line x1="74" y1="106" x2="290" y2="106"/>
<line x1="8" y1="8" x2="74" y2="52"/>
</g>
<text x="101" y="37" text-anchor="middle">00</text>
<text x="155" y="37" text-anchor="middle">01</text>
<text x="209" y="37" text-anchor="middle">11</text>
<text x="263" y="37" text-anchor="middle">10</text>
<text x="65" y="85" text-anchor="end">0</text>
<text x="65" y="139" text-anchor="end">1</text>
<text x="70" y="18" text-anchor="end">AB</text><text x="8" y="44">C</text>
<text x="101" y="87" text-anchor="middle" font-size="22">x</text>
<text x="101" y="141" text-anchor="middle" font-size="22">x</text>
<text x="155" y="87" text-anchor="middle" font-size="22">x</text>
<text x="155" y="141" text-anchor="middle" font-size="22">0</text>
<text x="263" y="87" text-anchor="middle" font-size="22">x</text>
<text x="263" y="141" text-anchor="middle" font-size="22">1</text>
<text x="209" y="87" text-anchor="middle" font-size="22">x</text>
<text x="209" y="141" text-anchor="middle" font-size="22">x</text>
<path d="M195.5,56.5 L276.5,56.5 M285.5,65.5 L285.5,146.5 M276.5,155.5 L195.5,155.5 M186.5,146.5 L186.5,65.5 M186.5,65.5 A9,9 0 0 1 195.5,56.5 M276.5,56.5 A9,9 0 0 1 285.5,65.5 M285.5,146.5 A9,9 0 0 1 276.5,155.5 M195.5,155.5 A9,9 0 0 1 186.5,146.5" stroke="#e8743b" stroke-width="2.6" fill="none"/>
<text x="185" y="67" font-size="14" fill="#e8743b" font-weight="bold">1</text>
</svg>
</div>

- ลูปสีส้ม (สถานะ $100,101,110,111$) : $Q_A=1 \Rightarrow Q_{A}$

$R_{A} = Q_{A}$

ลดรูป $S_{A}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="304" height="172" viewBox="0 0 304 172" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.6" fill="none">
<rect x="74" y="52" width="216" height="108"/>
<line x1="128" y1="52" x2="128" y2="160"/>
<line x1="182" y1="52" x2="182" y2="160"/>
<line x1="236" y1="52" x2="236" y2="160"/>
<line x1="74" y1="106" x2="290" y2="106"/>
<line x1="8" y1="8" x2="74" y2="52"/>
</g>
<text x="101" y="37" text-anchor="middle">00</text>
<text x="155" y="37" text-anchor="middle">01</text>
<text x="209" y="37" text-anchor="middle">11</text>
<text x="263" y="37" text-anchor="middle">10</text>
<text x="65" y="85" text-anchor="end">0</text>
<text x="65" y="139" text-anchor="end">1</text>
<text x="70" y="18" text-anchor="end">AB</text><text x="8" y="44">C</text>
<text x="101" y="87" text-anchor="middle" font-size="22">0</text>
<text x="101" y="141" text-anchor="middle" font-size="22">0</text>
<text x="155" y="87" text-anchor="middle" font-size="22">0</text>
<text x="155" y="141" text-anchor="middle" font-size="22">1</text>
<text x="263" y="87" text-anchor="middle" font-size="22">x</text>
<text x="263" y="141" text-anchor="middle" font-size="22">0</text>
<text x="209" y="87" text-anchor="middle" font-size="22">x</text>
<text x="209" y="141" text-anchor="middle" font-size="22">x</text>
<path d="M141.5,110.5 L222.5,110.5 M231.5,119.5 L231.5,146.5 M222.5,155.5 L141.5,155.5 M132.5,146.5 L132.5,119.5 M132.5,119.5 A9,9 0 0 1 141.5,110.5 M222.5,110.5 A9,9 0 0 1 231.5,119.5 M231.5,146.5 A9,9 0 0 1 222.5,155.5 M141.5,155.5 A9,9 0 0 1 132.5,146.5" stroke="#e8743b" stroke-width="2.6" fill="none"/>
<text x="131" y="121" font-size="14" fill="#e8743b" font-weight="bold">1</text>
</svg>
</div>

- ลูปสีส้ม (สถานะ $011,111$) : $Q_B=1,\ Q_C=1 \Rightarrow Q_{B}Q_{C}$

$S_{A} = Q_{B}Q_{C}$

ลดรูป $R_{B}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="304" height="172" viewBox="0 0 304 172" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.6" fill="none">
<rect x="74" y="52" width="216" height="108"/>
<line x1="128" y1="52" x2="128" y2="160"/>
<line x1="182" y1="52" x2="182" y2="160"/>
<line x1="236" y1="52" x2="236" y2="160"/>
<line x1="74" y1="106" x2="290" y2="106"/>
<line x1="8" y1="8" x2="74" y2="52"/>
</g>
<text x="101" y="37" text-anchor="middle">00</text>
<text x="155" y="37" text-anchor="middle">01</text>
<text x="209" y="37" text-anchor="middle">11</text>
<text x="263" y="37" text-anchor="middle">10</text>
<text x="65" y="85" text-anchor="end">0</text>
<text x="65" y="139" text-anchor="end">1</text>
<text x="70" y="18" text-anchor="end">AB</text><text x="8" y="44">C</text>
<text x="101" y="87" text-anchor="middle" font-size="22">0</text>
<text x="101" y="141" text-anchor="middle" font-size="22">x</text>
<text x="155" y="87" text-anchor="middle" font-size="22">1</text>
<text x="155" y="141" text-anchor="middle" font-size="22">1</text>
<text x="263" y="87" text-anchor="middle" font-size="22">x</text>
<text x="263" y="141" text-anchor="middle" font-size="22">0</text>
<text x="209" y="87" text-anchor="middle" font-size="22">x</text>
<text x="209" y="141" text-anchor="middle" font-size="22">x</text>
<path d="M141.5,56.5 L222.5,56.5 M231.5,65.5 L231.5,146.5 M222.5,155.5 L141.5,155.5 M132.5,146.5 L132.5,65.5 M132.5,65.5 A9,9 0 0 1 141.5,56.5 M222.5,56.5 A9,9 0 0 1 231.5,65.5 M231.5,146.5 A9,9 0 0 1 222.5,155.5 M141.5,155.5 A9,9 0 0 1 132.5,146.5" stroke="#e8743b" stroke-width="2.6" fill="none"/>
<text x="131" y="67" font-size="14" fill="#e8743b" font-weight="bold">1</text>
</svg>
</div>

- ลูปสีส้ม (สถานะ $010,011,110,111$) : $Q_B=1 \Rightarrow Q_{B}$

$R_{B} = Q_{B}$

ลดรูป $S_{B}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="304" height="172" viewBox="0 0 304 172" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.6" fill="none">
<rect x="74" y="52" width="216" height="108"/>
<line x1="128" y1="52" x2="128" y2="160"/>
<line x1="182" y1="52" x2="182" y2="160"/>
<line x1="236" y1="52" x2="236" y2="160"/>
<line x1="74" y1="106" x2="290" y2="106"/>
<line x1="8" y1="8" x2="74" y2="52"/>
</g>
<text x="101" y="37" text-anchor="middle">00</text>
<text x="155" y="37" text-anchor="middle">01</text>
<text x="209" y="37" text-anchor="middle">11</text>
<text x="263" y="37" text-anchor="middle">10</text>
<text x="65" y="85" text-anchor="end">0</text>
<text x="65" y="139" text-anchor="end">1</text>
<text x="70" y="18" text-anchor="end">AB</text><text x="8" y="44">C</text>
<text x="101" y="87" text-anchor="middle" font-size="22">1</text>
<text x="101" y="141" text-anchor="middle" font-size="22">0</text>
<text x="155" y="87" text-anchor="middle" font-size="22">0</text>
<text x="155" y="141" text-anchor="middle" font-size="22">0</text>
<text x="263" y="87" text-anchor="middle" font-size="22">x</text>
<text x="263" y="141" text-anchor="middle" font-size="22">1</text>
<text x="209" y="87" text-anchor="middle" font-size="22">x</text>
<text x="209" y="141" text-anchor="middle" font-size="22">x</text>
<path d="M195.5,56.5 L276.5,56.5 M285.5,65.5 L285.5,146.5 M276.5,155.5 L195.5,155.5 M186.5,146.5 L186.5,65.5 M186.5,65.5 A9,9 0 0 1 195.5,56.5 M276.5,56.5 A9,9 0 0 1 285.5,65.5 M285.5,146.5 A9,9 0 0 1 276.5,155.5 M195.5,155.5 A9,9 0 0 1 186.5,146.5" stroke="#e8743b" stroke-width="2.6" fill="none"/>
<text x="185" y="67" font-size="14" fill="#e8743b" font-weight="bold">1</text>
<path d="M74,60 L111,60 M120,69 L120,89 M111,98 L74,98 M111,60 A9,9 0 0 1 120,69 M120,89 A9,9 0 0 1 111,98" stroke="#3b8be8" stroke-width="2.6" fill="none"/>
<text x="77" y="67" font-size="14" fill="#3b8be8" font-weight="bold">2</text>
<path d="M253,60 L290,60 M290,98 L253,98 M244,89 L244,69 M244,69 A9,9 0 0 1 253,60 M253,98 A9,9 0 0 1 244,89" stroke="#3b8be8" stroke-width="2.6" fill="none"/>
</svg>
</div>

- ลูปสีส้ม (สถานะ $100,101,110,111$) : $Q_A=1 \Rightarrow Q_{A}$
- ลูปสีน้ำเงิน (สถานะ $000,100$) : $Q_B=0,\ Q_C=0 \Rightarrow \overline{Q_{B}}\overline{Q_{C}}$

$S_{B} = Q_{A} + \overline{Q_{B}}\overline{Q_{C}}$

ลดรูป $R_{C}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="304" height="172" viewBox="0 0 304 172" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.6" fill="none">
<rect x="74" y="52" width="216" height="108"/>
<line x1="128" y1="52" x2="128" y2="160"/>
<line x1="182" y1="52" x2="182" y2="160"/>
<line x1="236" y1="52" x2="236" y2="160"/>
<line x1="74" y1="106" x2="290" y2="106"/>
<line x1="8" y1="8" x2="74" y2="52"/>
</g>
<text x="101" y="37" text-anchor="middle">00</text>
<text x="155" y="37" text-anchor="middle">01</text>
<text x="209" y="37" text-anchor="middle">11</text>
<text x="263" y="37" text-anchor="middle">10</text>
<text x="65" y="85" text-anchor="end">0</text>
<text x="65" y="139" text-anchor="end">1</text>
<text x="70" y="18" text-anchor="end">AB</text><text x="8" y="44">C</text>
<text x="101" y="87" text-anchor="middle" font-size="22">0</text>
<text x="101" y="141" text-anchor="middle" font-size="22">1</text>
<text x="155" y="87" text-anchor="middle" font-size="22">0</text>
<text x="155" y="141" text-anchor="middle" font-size="22">0</text>
<text x="263" y="87" text-anchor="middle" font-size="22">x</text>
<text x="263" y="141" text-anchor="middle" font-size="22">1</text>
<text x="209" y="87" text-anchor="middle" font-size="22">x</text>
<text x="209" y="141" text-anchor="middle" font-size="22">x</text>
<path d="M74,110.5 L114.5,110.5 M123.5,119.5 L123.5,146.5 M114.5,155.5 L74,155.5 M114.5,110.5 A9,9 0 0 1 123.5,119.5 M123.5,146.5 A9,9 0 0 1 114.5,155.5" stroke="#e8743b" stroke-width="2.6" fill="none"/>
<text x="77" y="121" font-size="14" fill="#e8743b" font-weight="bold">1</text>
<path d="M249.5,110.5 L290,110.5 M290,155.5 L249.5,155.5 M240.5,146.5 L240.5,119.5 M240.5,119.5 A9,9 0 0 1 249.5,110.5 M249.5,155.5 A9,9 0 0 1 240.5,146.5" stroke="#e8743b" stroke-width="2.6" fill="none"/>
</svg>
</div>

- ลูปสีส้ม (สถานะ $001,101$) : $Q_B=0,\ Q_C=1 \Rightarrow \overline{Q_{B}}Q_{C}$

$R_{C} = \overline{Q_{B}}Q_{C}$

ลดรูป $S_{C}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="304" height="172" viewBox="0 0 304 172" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.6" fill="none">
<rect x="74" y="52" width="216" height="108"/>
<line x1="128" y1="52" x2="128" y2="160"/>
<line x1="182" y1="52" x2="182" y2="160"/>
<line x1="236" y1="52" x2="236" y2="160"/>
<line x1="74" y1="106" x2="290" y2="106"/>
<line x1="8" y1="8" x2="74" y2="52"/>
</g>
<text x="101" y="37" text-anchor="middle">00</text>
<text x="155" y="37" text-anchor="middle">01</text>
<text x="209" y="37" text-anchor="middle">11</text>
<text x="263" y="37" text-anchor="middle">10</text>
<text x="65" y="85" text-anchor="end">0</text>
<text x="65" y="139" text-anchor="end">1</text>
<text x="70" y="18" text-anchor="end">AB</text><text x="8" y="44">C</text>
<text x="101" y="87" text-anchor="middle" font-size="22">1</text>
<text x="101" y="141" text-anchor="middle" font-size="22">0</text>
<text x="155" y="87" text-anchor="middle" font-size="22">1</text>
<text x="155" y="141" text-anchor="middle" font-size="22">x</text>
<text x="263" y="87" text-anchor="middle" font-size="22">x</text>
<text x="263" y="141" text-anchor="middle" font-size="22">0</text>
<text x="209" y="87" text-anchor="middle" font-size="22">x</text>
<text x="209" y="141" text-anchor="middle" font-size="22">x</text>
<path d="M87.5,56.5 L276.5,56.5 M285.5,65.5 L285.5,92.5 M276.5,101.5 L87.5,101.5 M78.5,92.5 L78.5,65.5 M78.5,65.5 A9,9 0 0 1 87.5,56.5 M276.5,56.5 A9,9 0 0 1 285.5,65.5 M285.5,92.5 A9,9 0 0 1 276.5,101.5 M87.5,101.5 A9,9 0 0 1 78.5,92.5" stroke="#e8743b" stroke-width="2.6" fill="none"/>
<text x="77" y="67" font-size="14" fill="#e8743b" font-weight="bold">1</text>
</svg>
</div>

- ลูปสีส้ม (สถานะ $000,010,100,110$) : $Q_C=0 \Rightarrow \overline{Q_{C}}$

$S_{C} = \overline{Q_{C}}$

**ขั้นที่ 4** นำสมการมาสร้างวงจร

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="1280" height="258" viewBox="0 0 1280 258" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,24)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<rect x="225" y="20" width="80" height="150" rx="2"/>
<polyline points="225,86 237,95 225,104"/>
<circle cx="221" cy="95" r="4"/>
<line x1="217" y1="95" x2="209" y2="95"/>
<line x1="209" y1="95" x2="209" y2="210"/>
<path d="M143,37 H169 A26,21 0 0 1 169,79 H143 Z"/>
<line x1="121" y1="51" x2="143" y2="51"/>
<line x1="121" y1="65" x2="143" y2="65"/>
<line x1="195" y1="58" x2="225" y2="58"/>
<line x1="181" y1="132" x2="225" y2="132"/>
<line x1="305" y1="58" x2="345" y2="58"/>
<rect x="725" y="20" width="80" height="150" rx="2"/>
<polyline points="725,86 737,95 725,104"/>
<circle cx="721" cy="95" r="4"/>
<line x1="717" y1="95" x2="709" y2="95"/>
<line x1="709" y1="95" x2="709" y2="210"/>
<path d="M635,37 C657,37 683,47.5 695,58 C683,68.5 657,79 635,79 Q649,58 635,37 Z"/>
<line x1="611.2" y1="51" x2="641.2" y2="51"/>
<path d="M541.2,72 H567.2 A26,21 0 0 1 567.2,114 H541.2 Z"/>
<line x1="519.2" y1="86" x2="541.2" y2="86"/>
<line x1="508.1" y1="81" x2="515.2" y2="81" stroke-width="1.4"/>
<line x1="519.2" y1="100" x2="541.2" y2="100"/>
<line x1="508.1" y1="95" x2="515.2" y2="95" stroke-width="1.4"/>
<line x1="593.2" y1="93" x2="629.2" y2="93"/>
<line x1="629.2" y1="93" x2="629.2" y2="65"/>
<line x1="629.2" y1="65" x2="641.2" y2="65"/>
<line x1="695" y1="58" x2="725" y2="58"/>
<line x1="681" y1="132" x2="725" y2="132"/>
<line x1="805" y1="58" x2="845" y2="58"/>
<rect x="1100" y="20" width="80" height="150" rx="2"/>
<polyline points="1100,86 1112,95 1100,104"/>
<circle cx="1096" cy="95" r="4"/>
<line x1="1092" y1="95" x2="1084" y2="95"/>
<line x1="1084" y1="95" x2="1084" y2="210"/>
<line x1="1056" y1="58" x2="1100" y2="58"/>
<line x1="1044.3" y1="52.1" x2="1052" y2="52.1" stroke-width="1.4"/>
<path d="M1018,111 H1044 A26,21 0 0 1 1044,153 H1018 Z"/>
<line x1="996" y1="125" x2="1018" y2="125"/>
<line x1="984.9" y1="120" x2="992" y2="120" stroke-width="1.4"/>
<line x1="996" y1="139" x2="1018" y2="139"/>
<line x1="1070" y1="132" x2="1100" y2="132"/>
<line x1="1180" y1="58" x2="1220" y2="58"/>
<line x1="169" y1="210" x2="1084" y2="210"/>
<circle cx="209" cy="210" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="709" cy="210" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="1084" cy="210" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="265" y="103" text-anchor="middle" font-size="26">A</text>
<text x="233" y="64" text-anchor="start" font-size="14">S</text>
<text x="233" y="138" text-anchor="start" font-size="14">R</text>
<text x="117" y="57" text-anchor="end" font-size="13">Q<tspan dy="4" font-size="9">B</tspan></text>
<text x="117" y="71" text-anchor="end" font-size="13">Q<tspan dy="4" font-size="9">C</tspan></text>
<text x="177" y="138" text-anchor="end" font-size="14">Q<tspan dy="4" font-size="9">A</tspan></text>
<text x="349" y="64" text-anchor="start" font-size="16">Q<tspan dy="4" font-size="10">A</tspan></text>
<text x="297" y="64" text-anchor="end" font-size="16">Q</text>
<text x="765" y="103" text-anchor="middle" font-size="26">B</text>
<text x="733" y="64" text-anchor="start" font-size="14">S</text>
<text x="733" y="138" text-anchor="start" font-size="14">R</text>
<text x="607.2" y="57" text-anchor="end" font-size="13">Q<tspan dy="4" font-size="9">A</tspan></text>
<text x="515.2" y="92" text-anchor="end" font-size="13">Q<tspan dy="4" font-size="9">B</tspan></text>
<text x="515.2" y="106" text-anchor="end" font-size="13">Q<tspan dy="4" font-size="9">C</tspan></text>
<text x="677" y="138" text-anchor="end" font-size="14">Q<tspan dy="4" font-size="9">B</tspan></text>
<text x="849" y="64" text-anchor="start" font-size="16">Q<tspan dy="4" font-size="10">B</tspan></text>
<text x="797" y="64" text-anchor="end" font-size="16">Q</text>
<text x="1140" y="103" text-anchor="middle" font-size="26">C</text>
<text x="1108" y="64" text-anchor="start" font-size="14">S</text>
<text x="1108" y="138" text-anchor="start" font-size="14">R</text>
<text x="1052" y="64" text-anchor="end" font-size="14">Q<tspan dy="4" font-size="9">C</tspan></text>
<text x="992" y="131" text-anchor="end" font-size="13">Q<tspan dy="4" font-size="9">B</tspan></text>
<text x="992" y="145" text-anchor="end" font-size="13">Q<tspan dy="4" font-size="9">C</tspan></text>
<text x="1224" y="64" text-anchor="start" font-size="16">Q<tspan dy="4" font-size="10">C</tspan></text>
<text x="1172" y="64" text-anchor="end" font-size="16">Q</text>
<text x="165" y="216" text-anchor="end" font-size="16">Clock</text>
</g>
</svg>
</div>

**ตรวจสถานะที่ไม่ใช้** $100$ ไปที่ $011$ ; $110$ ทำให้ฟลิป-ฟลอป B ได้ $R=S=1$ ; $111$ ทำให้ฟลิป-ฟลอป A, B ได้ $R=S=1$ ดังนั้นควรให้วงจรเริ่มที่ $000$ (รีเซ็ต) ทุกครั้งที่เปิดเครื่อง

$\mathbf{Ans}\quad R_A = Q_A,\ S_A = Q_BQ_C,\ R_B = Q_B,\ S_B = Q_A + \overline{Q_B}\,\overline{Q_C},\ R_C = \overline{Q_B}Q_C,\ S_C = \overline{Q_C}$

### ตัวอย่างที่ 8  จงออกแบบวงจรนับ (Counter) โดยใช้ D flip-flop ที่มีลำดับการนับเรียงตามนี้ $0, 1, 2, 4, 6$

$\mathbf{Sol}^{n}$

**ขั้นที่ 1** ค่าสูงสุดคือ $6$ ($110_2$) ใช้ฟลิป-ฟลอป 3 ตัว (A, B, C) สถานะที่ไม่ใช้ ($011, 101, 111$) เป็น $x$

**ขั้นที่ 2** ตารางสถานะ สำหรับ D ฟลิป-ฟลอป $D = Q(t+1)$ (ตารางกระตุ้นของ D) จึงได้ $D_A, D_B, D_C$ เท่ากับ $A^+, B^+, C^+$

| สถานะปัจจุบัน $ABC$ | สถานะถัดไป $A^+B^+C^+$ $(=D_AD_BD_C)$ |
|:-:|:-:|
| 000 | 001 |
| 001 | 010 |
| 010 | 100 |
| 100 | 110 |
| 110 | 000 |
| $011, 101, 111$ | $xxx$ |

**ขั้นที่ 3** ลดรูปด้วย K-map ($Q_AQ_B$ ตามแนวนอน, $Q_C$ ตามแนวตั้ง)

ลดรูป $D_{A}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="304" height="172" viewBox="0 0 304 172" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.6" fill="none">
<rect x="74" y="52" width="216" height="108"/>
<line x1="128" y1="52" x2="128" y2="160"/>
<line x1="182" y1="52" x2="182" y2="160"/>
<line x1="236" y1="52" x2="236" y2="160"/>
<line x1="74" y1="106" x2="290" y2="106"/>
<line x1="8" y1="8" x2="74" y2="52"/>
</g>
<text x="101" y="37" text-anchor="middle">00</text>
<text x="155" y="37" text-anchor="middle">01</text>
<text x="209" y="37" text-anchor="middle">11</text>
<text x="263" y="37" text-anchor="middle">10</text>
<text x="65" y="85" text-anchor="end">0</text>
<text x="65" y="139" text-anchor="end">1</text>
<text x="70" y="18" text-anchor="end">AB</text><text x="8" y="44">C</text>
<text x="101" y="87" text-anchor="middle" font-size="22">0</text>
<text x="101" y="141" text-anchor="middle" font-size="22">0</text>
<text x="155" y="87" text-anchor="middle" font-size="22">1</text>
<text x="155" y="141" text-anchor="middle" font-size="22">x</text>
<text x="263" y="87" text-anchor="middle" font-size="22">1</text>
<text x="263" y="141" text-anchor="middle" font-size="22">x</text>
<text x="209" y="87" text-anchor="middle" font-size="22">0</text>
<text x="209" y="141" text-anchor="middle" font-size="22">x</text>
<path d="M141.5,56.5 L168.5,56.5 M177.5,65.5 L177.5,146.5 M168.5,155.5 L141.5,155.5 M132.5,146.5 L132.5,65.5 M132.5,65.5 A9,9 0 0 1 141.5,56.5 M168.5,56.5 A9,9 0 0 1 177.5,65.5 M177.5,146.5 A9,9 0 0 1 168.5,155.5 M141.5,155.5 A9,9 0 0 1 132.5,146.5" stroke="#e8743b" stroke-width="2.6" fill="none"/>
<text x="131" y="67" font-size="14" fill="#e8743b" font-weight="bold">1</text>
<path d="M253,60 L273,60 M282,69 L282,143 M273,152 L253,152 M244,143 L244,69 M244,69 A9,9 0 0 1 253,60 M273,60 A9,9 0 0 1 282,69 M282,143 A9,9 0 0 1 273,152 M253,152 A9,9 0 0 1 244,143" stroke="#3b8be8" stroke-width="2.6" fill="none"/>
<text x="239" y="67" font-size="14" fill="#3b8be8" font-weight="bold">2</text>
</svg>
</div>

- ลูปสีส้ม (สถานะ $010,011$) : $Q_A=0,\ Q_B=1 \Rightarrow \overline{Q_{A}}Q_{B}$
- ลูปสีน้ำเงิน (สถานะ $100,101$) : $Q_A=1,\ Q_B=0 \Rightarrow Q_{A}\overline{Q_{B}}$

$D_{A} = \overline{Q_{A}}Q_{B} + Q_{A}\overline{Q_{B}}$

ลดรูป $D_{B}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="304" height="172" viewBox="0 0 304 172" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.6" fill="none">
<rect x="74" y="52" width="216" height="108"/>
<line x1="128" y1="52" x2="128" y2="160"/>
<line x1="182" y1="52" x2="182" y2="160"/>
<line x1="236" y1="52" x2="236" y2="160"/>
<line x1="74" y1="106" x2="290" y2="106"/>
<line x1="8" y1="8" x2="74" y2="52"/>
</g>
<text x="101" y="37" text-anchor="middle">00</text>
<text x="155" y="37" text-anchor="middle">01</text>
<text x="209" y="37" text-anchor="middle">11</text>
<text x="263" y="37" text-anchor="middle">10</text>
<text x="65" y="85" text-anchor="end">0</text>
<text x="65" y="139" text-anchor="end">1</text>
<text x="70" y="18" text-anchor="end">AB</text><text x="8" y="44">C</text>
<text x="101" y="87" text-anchor="middle" font-size="22">0</text>
<text x="101" y="141" text-anchor="middle" font-size="22">1</text>
<text x="155" y="87" text-anchor="middle" font-size="22">0</text>
<text x="155" y="141" text-anchor="middle" font-size="22">x</text>
<text x="263" y="87" text-anchor="middle" font-size="22">1</text>
<text x="263" y="141" text-anchor="middle" font-size="22">x</text>
<text x="209" y="87" text-anchor="middle" font-size="22">0</text>
<text x="209" y="141" text-anchor="middle" font-size="22">x</text>
<path d="M249.5,56.5 L276.5,56.5 M285.5,65.5 L285.5,146.5 M276.5,155.5 L249.5,155.5 M240.5,146.5 L240.5,65.5 M240.5,65.5 A9,9 0 0 1 249.5,56.5 M276.5,56.5 A9,9 0 0 1 285.5,65.5 M285.5,146.5 A9,9 0 0 1 276.5,155.5 M249.5,155.5 A9,9 0 0 1 240.5,146.5" stroke="#e8743b" stroke-width="2.6" fill="none"/>
<text x="239" y="67" font-size="14" fill="#e8743b" font-weight="bold">1</text>
<path d="M91,114 L273,114 M282,123 L282,143 M273,152 L91,152 M82,143 L82,123 M82,123 A9,9 0 0 1 91,114 M273,114 A9,9 0 0 1 282,123 M282,143 A9,9 0 0 1 273,152 M91,152 A9,9 0 0 1 82,143" stroke="#3b8be8" stroke-width="2.6" fill="none"/>
<text x="77" y="121" font-size="14" fill="#3b8be8" font-weight="bold">2</text>
</svg>
</div>

- ลูปสีส้ม (สถานะ $100,101$) : $Q_A=1,\ Q_B=0 \Rightarrow Q_{A}\overline{Q_{B}}$
- ลูปสีน้ำเงิน (สถานะ $001,011,101,111$) : $Q_C=1 \Rightarrow Q_{C}$

$D_{B} = Q_{A}\overline{Q_{B}} + Q_{C}$

ลดรูป $D_{C}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="304" height="172" viewBox="0 0 304 172" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.6" fill="none">
<rect x="74" y="52" width="216" height="108"/>
<line x1="128" y1="52" x2="128" y2="160"/>
<line x1="182" y1="52" x2="182" y2="160"/>
<line x1="236" y1="52" x2="236" y2="160"/>
<line x1="74" y1="106" x2="290" y2="106"/>
<line x1="8" y1="8" x2="74" y2="52"/>
</g>
<text x="101" y="37" text-anchor="middle">00</text>
<text x="155" y="37" text-anchor="middle">01</text>
<text x="209" y="37" text-anchor="middle">11</text>
<text x="263" y="37" text-anchor="middle">10</text>
<text x="65" y="85" text-anchor="end">0</text>
<text x="65" y="139" text-anchor="end">1</text>
<text x="70" y="18" text-anchor="end">AB</text><text x="8" y="44">C</text>
<text x="101" y="87" text-anchor="middle" font-size="22">1</text>
<text x="101" y="141" text-anchor="middle" font-size="22">0</text>
<text x="155" y="87" text-anchor="middle" font-size="22">0</text>
<text x="155" y="141" text-anchor="middle" font-size="22">x</text>
<text x="263" y="87" text-anchor="middle" font-size="22">0</text>
<text x="263" y="141" text-anchor="middle" font-size="22">x</text>
<text x="209" y="87" text-anchor="middle" font-size="22">0</text>
<text x="209" y="141" text-anchor="middle" font-size="22">x</text>
<path d="M87.5,56.5 L114.5,56.5 M123.5,65.5 L123.5,92.5 M114.5,101.5 L87.5,101.5 M78.5,92.5 L78.5,65.5 M78.5,65.5 A9,9 0 0 1 87.5,56.5 M114.5,56.5 A9,9 0 0 1 123.5,65.5 M123.5,92.5 A9,9 0 0 1 114.5,101.5 M87.5,101.5 A9,9 0 0 1 78.5,92.5" stroke="#e8743b" stroke-width="2.6" fill="none"/>
<text x="77" y="67" font-size="14" fill="#e8743b" font-weight="bold">1</text>
</svg>
</div>

- ลูปสีส้ม (สถานะ $000$) : $Q_A=0,\ Q_B=0,\ Q_C=0 \Rightarrow \overline{Q_{A}}\overline{Q_{B}}\overline{Q_{C}}$

$D_{C} = \overline{Q_{A}}\overline{Q_{B}}\overline{Q_{C}}$

$D_A = \overline{Q_A}Q_B + Q_A\overline{Q_B} = Q_A \oplus Q_B$ (เอกซ์คลูซีฟออร์)

**หมายเหตุ** K-map ของ $D_B$ ในสไลด์วาดค่าช่อง $000$, $001$ และ $010$ ไม่ตรงกับตารางสถานะ ($D_B$ ของสถานะ $000, 010$ เป็น $0$ และของ $001$ เป็น $1$) ที่นี่ใช้ค่าจากตารางสถานะ สมการ $D_B = Q_A\overline{Q_B} + Q_C$ เหมือนในสไลด์

**ขั้นที่ 4** นำสมการมาสร้างวงจร

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="1280" height="258" viewBox="0 0 1280 258" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,24)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<rect x="225" y="20" width="80" height="150" rx="2"/>
<polyline points="225,116 237,125 225,134"/>
<line x1="225" y1="125" x2="209" y2="125"/>
<line x1="209" y1="125" x2="209" y2="210"/>
<path d="M135,44 C157,44 183,54.5 195,65 C183,75.5 157,86 135,86 Q149,65 135,44 Z"/>
<path d="M127,44 Q141,65 127,86"/>
<line x1="111.2" y1="58" x2="133.2" y2="58"/>
<line x1="111.2" y1="72" x2="133.2" y2="72"/>
<line x1="195" y1="65" x2="225" y2="65"/>
<line x1="305" y1="58" x2="345" y2="58"/>
<rect x="725" y="20" width="80" height="150" rx="2"/>
<polyline points="725,116 737,125 725,134"/>
<line x1="725" y1="125" x2="709" y2="125"/>
<line x1="709" y1="125" x2="709" y2="210"/>
<path d="M635,44 C657,44 683,54.5 695,65 C683,75.5 657,86 635,86 Q649,65 635,44 Z"/>
<path d="M541.2,9 H567.2 A26,21 0 0 1 567.2,51 H541.2 Z"/>
<line x1="519.2" y1="23" x2="541.2" y2="23"/>
<line x1="519.2" y1="37" x2="541.2" y2="37"/>
<line x1="508.1" y1="32" x2="515.2" y2="32" stroke-width="1.4"/>
<line x1="593.2" y1="30" x2="629.2" y2="30"/>
<line x1="629.2" y1="30" x2="629.2" y2="58"/>
<line x1="629.2" y1="58" x2="641.2" y2="58"/>
<line x1="611.2" y1="72" x2="641.2" y2="72"/>
<line x1="695" y1="65" x2="725" y2="65"/>
<line x1="805" y1="58" x2="845" y2="58"/>
<rect x="1100" y="20" width="80" height="150" rx="2"/>
<polyline points="1100,116 1112,125 1100,134"/>
<line x1="1100" y1="125" x2="1084" y2="125"/>
<line x1="1084" y1="125" x2="1084" y2="210"/>
<path d="M1018,37 H1044 A26,28 0 0 1 1044,93 H1018 Z"/>
<line x1="996" y1="51" x2="1018" y2="51"/>
<line x1="984.9" y1="46" x2="992" y2="46" stroke-width="1.4"/>
<line x1="996" y1="65" x2="1018" y2="65"/>
<line x1="984.9" y1="60" x2="992" y2="60" stroke-width="1.4"/>
<line x1="996" y1="79" x2="1018" y2="79"/>
<line x1="984.9" y1="74" x2="992" y2="74" stroke-width="1.4"/>
<line x1="1070" y1="65" x2="1100" y2="65"/>
<line x1="1180" y1="58" x2="1220" y2="58"/>
<line x1="169" y1="210" x2="1084" y2="210"/>
<circle cx="209" cy="210" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="709" cy="210" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="1084" cy="210" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="265" y="103" text-anchor="middle" font-size="26">A</text>
<text x="233" y="71" text-anchor="start" font-size="14">D</text>
<text x="107.2" y="64" text-anchor="end" font-size="13">Q<tspan dy="4" font-size="9">A</tspan></text>
<text x="107.2" y="78" text-anchor="end" font-size="13">Q<tspan dy="4" font-size="9">B</tspan></text>
<text x="349" y="64" text-anchor="start" font-size="16">Q<tspan dy="4" font-size="10">A</tspan></text>
<text x="297" y="64" text-anchor="end" font-size="16">Q</text>
<text x="765" y="103" text-anchor="middle" font-size="26">B</text>
<text x="733" y="71" text-anchor="start" font-size="14">D</text>
<text x="515.2" y="29" text-anchor="end" font-size="13">Q<tspan dy="4" font-size="9">A</tspan></text>
<text x="515.2" y="43" text-anchor="end" font-size="13">Q<tspan dy="4" font-size="9">B</tspan></text>
<text x="607.2" y="78" text-anchor="end" font-size="13">Q<tspan dy="4" font-size="9">C</tspan></text>
<text x="849" y="64" text-anchor="start" font-size="16">Q<tspan dy="4" font-size="10">B</tspan></text>
<text x="797" y="64" text-anchor="end" font-size="16">Q</text>
<text x="1140" y="103" text-anchor="middle" font-size="26">C</text>
<text x="1108" y="71" text-anchor="start" font-size="14">D</text>
<text x="992" y="57" text-anchor="end" font-size="13">Q<tspan dy="4" font-size="9">A</tspan></text>
<text x="992" y="71" text-anchor="end" font-size="13">Q<tspan dy="4" font-size="9">B</tspan></text>
<text x="992" y="85" text-anchor="end" font-size="13">Q<tspan dy="4" font-size="9">C</tspan></text>
<text x="1224" y="64" text-anchor="start" font-size="16">Q<tspan dy="4" font-size="10">C</tspan></text>
<text x="1172" y="64" text-anchor="end" font-size="16">Q</text>
<text x="165" y="216" text-anchor="end" font-size="16">Clock</text>
</g>
</svg>
</div>

**ตรวจสถานะที่ไม่ใช้** $011 \to 110$ ; $101 \to 110$ ; $111 \to 010$ ทุกสถานะกลับเข้าลำดับการนับได้เอง

$\mathbf{Ans}\quad D_A = Q_A \oplus Q_B,\ D_B = Q_A\overline{Q_B} + Q_C,\ D_C = \overline{Q_A}\,\overline{Q_B}\,\overline{Q_C}$

### ตัวอย่างที่ 9  จงออกแบบวงจรนับ (Counter) โดยใช้ T flip-flop ที่มีลำดับการนับเรียงตามนี้ $0, 1, 3, 7, 6, 4$ โดยกำหนดให้สถานะของฟลิป-ฟลอปค่า $010$ และ $101$ เป็น don't care condition

$\mathbf{Sol}^{n}$

**ขั้นที่ 1** ค่าสูงสุดคือ $7$ ใช้ฟลิป-ฟลอป 3 ตัว (A, B, C) สถานะ $010$ และ $101$ เป็น $x$

**ขั้นที่ 2** ตารางสถานะ สำหรับ T ฟลิป-ฟลอป $T = Q(t) \oplus Q(t+1)$ ($T=1$ เมื่อสถานะเปลี่ยน, $T=0$ เมื่อไม่เปลี่ยน)

| $A$ | $B$ | $C$ | $A^+$ | $B^+$ | $C^+$ | $T_A$ | $T_B$ | $T_C$ |
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 1 |
| 0 | 0 | 1 | 0 | 1 | 1 | 0 | 1 | 0 |
| 0 | 1 | 1 | 1 | 1 | 1 | 1 | 0 | 0 |
| 1 | 1 | 1 | 1 | 1 | 0 | 0 | 0 | 1 |
| 1 | 1 | 0 | 1 | 0 | 0 | 0 | 1 | 0 |
| 1 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 |
| $010$ และ $101$ |  |  | $x$ | $x$ | $x$ | $x$ | $x$ | $x$ |

**ขั้นที่ 3** ลดรูปด้วย K-map ($Q_AQ_B$ ตามแนวนอน, $Q_C$ ตามแนวตั้ง)

ลดรูป $T_{A}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="304" height="172" viewBox="0 0 304 172" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.6" fill="none">
<rect x="74" y="52" width="216" height="108"/>
<line x1="128" y1="52" x2="128" y2="160"/>
<line x1="182" y1="52" x2="182" y2="160"/>
<line x1="236" y1="52" x2="236" y2="160"/>
<line x1="74" y1="106" x2="290" y2="106"/>
<line x1="8" y1="8" x2="74" y2="52"/>
</g>
<text x="101" y="37" text-anchor="middle">00</text>
<text x="155" y="37" text-anchor="middle">01</text>
<text x="209" y="37" text-anchor="middle">11</text>
<text x="263" y="37" text-anchor="middle">10</text>
<text x="65" y="85" text-anchor="end">0</text>
<text x="65" y="139" text-anchor="end">1</text>
<text x="70" y="18" text-anchor="end">AB</text><text x="8" y="44">C</text>
<text x="101" y="87" text-anchor="middle" font-size="22">0</text>
<text x="101" y="141" text-anchor="middle" font-size="22">0</text>
<text x="155" y="87" text-anchor="middle" font-size="22">x</text>
<text x="155" y="141" text-anchor="middle" font-size="22">1</text>
<text x="263" y="87" text-anchor="middle" font-size="22">1</text>
<text x="263" y="141" text-anchor="middle" font-size="22">x</text>
<text x="209" y="87" text-anchor="middle" font-size="22">0</text>
<text x="209" y="141" text-anchor="middle" font-size="22">0</text>
<path d="M141.5,56.5 L168.5,56.5 M177.5,65.5 L177.5,146.5 M168.5,155.5 L141.5,155.5 M132.5,146.5 L132.5,65.5 M132.5,65.5 A9,9 0 0 1 141.5,56.5 M168.5,56.5 A9,9 0 0 1 177.5,65.5 M177.5,146.5 A9,9 0 0 1 168.5,155.5 M141.5,155.5 A9,9 0 0 1 132.5,146.5" stroke="#e8743b" stroke-width="2.6" fill="none"/>
<text x="131" y="67" font-size="14" fill="#e8743b" font-weight="bold">1</text>
<path d="M253,60 L273,60 M282,69 L282,143 M273,152 L253,152 M244,143 L244,69 M244,69 A9,9 0 0 1 253,60 M273,60 A9,9 0 0 1 282,69 M282,143 A9,9 0 0 1 273,152 M253,152 A9,9 0 0 1 244,143" stroke="#3b8be8" stroke-width="2.6" fill="none"/>
<text x="239" y="67" font-size="14" fill="#3b8be8" font-weight="bold">2</text>
</svg>
</div>

- ลูปสีส้ม (สถานะ $010,011$) : $Q_A=0,\ Q_B=1 \Rightarrow \overline{Q_{A}}Q_{B}$
- ลูปสีน้ำเงิน (สถานะ $100,101$) : $Q_A=1,\ Q_B=0 \Rightarrow Q_{A}\overline{Q_{B}}$

$T_{A} = \overline{Q_{A}}Q_{B} + Q_{A}\overline{Q_{B}}$

ลดรูป $T_{B}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="304" height="172" viewBox="0 0 304 172" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.6" fill="none">
<rect x="74" y="52" width="216" height="108"/>
<line x1="128" y1="52" x2="128" y2="160"/>
<line x1="182" y1="52" x2="182" y2="160"/>
<line x1="236" y1="52" x2="236" y2="160"/>
<line x1="74" y1="106" x2="290" y2="106"/>
<line x1="8" y1="8" x2="74" y2="52"/>
</g>
<text x="101" y="37" text-anchor="middle">00</text>
<text x="155" y="37" text-anchor="middle">01</text>
<text x="209" y="37" text-anchor="middle">11</text>
<text x="263" y="37" text-anchor="middle">10</text>
<text x="65" y="85" text-anchor="end">0</text>
<text x="65" y="139" text-anchor="end">1</text>
<text x="70" y="18" text-anchor="end">AB</text><text x="8" y="44">C</text>
<text x="101" y="87" text-anchor="middle" font-size="22">0</text>
<text x="101" y="141" text-anchor="middle" font-size="22">1</text>
<text x="155" y="87" text-anchor="middle" font-size="22">x</text>
<text x="155" y="141" text-anchor="middle" font-size="22">0</text>
<text x="263" y="87" text-anchor="middle" font-size="22">0</text>
<text x="263" y="141" text-anchor="middle" font-size="22">x</text>
<text x="209" y="87" text-anchor="middle" font-size="22">1</text>
<text x="209" y="141" text-anchor="middle" font-size="22">0</text>
<path d="M74,110.5 L114.5,110.5 M123.5,119.5 L123.5,146.5 M114.5,155.5 L74,155.5 M114.5,110.5 A9,9 0 0 1 123.5,119.5 M123.5,146.5 A9,9 0 0 1 114.5,155.5" stroke="#e8743b" stroke-width="2.6" fill="none"/>
<text x="77" y="121" font-size="14" fill="#e8743b" font-weight="bold">1</text>
<path d="M249.5,110.5 L290,110.5 M290,155.5 L249.5,155.5 M240.5,146.5 L240.5,119.5 M240.5,119.5 A9,9 0 0 1 249.5,110.5 M249.5,155.5 A9,9 0 0 1 240.5,146.5" stroke="#e8743b" stroke-width="2.6" fill="none"/>
<path d="M145,60 L219,60 M228,69 L228,89 M219,98 L145,98 M136,89 L136,69 M136,69 A9,9 0 0 1 145,60 M219,60 A9,9 0 0 1 228,69 M228,89 A9,9 0 0 1 219,98 M145,98 A9,9 0 0 1 136,89" stroke="#3b8be8" stroke-width="2.6" fill="none"/>
<text x="131" y="67" font-size="14" fill="#3b8be8" font-weight="bold">2</text>
</svg>
</div>

- ลูปสีส้ม (สถานะ $001,101$) : $Q_B=0,\ Q_C=1 \Rightarrow \overline{Q_{B}}Q_{C}$
- ลูปสีน้ำเงิน (สถานะ $010,110$) : $Q_B=1,\ Q_C=0 \Rightarrow Q_{B}\overline{Q_{C}}$

$T_{B} = \overline{Q_{B}}Q_{C} + Q_{B}\overline{Q_{C}}$

ลดรูป $T_{C}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="304" height="172" viewBox="0 0 304 172" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.6" fill="none">
<rect x="74" y="52" width="216" height="108"/>
<line x1="128" y1="52" x2="128" y2="160"/>
<line x1="182" y1="52" x2="182" y2="160"/>
<line x1="236" y1="52" x2="236" y2="160"/>
<line x1="74" y1="106" x2="290" y2="106"/>
<line x1="8" y1="8" x2="74" y2="52"/>
</g>
<text x="101" y="37" text-anchor="middle">00</text>
<text x="155" y="37" text-anchor="middle">01</text>
<text x="209" y="37" text-anchor="middle">11</text>
<text x="263" y="37" text-anchor="middle">10</text>
<text x="65" y="85" text-anchor="end">0</text>
<text x="65" y="139" text-anchor="end">1</text>
<text x="70" y="18" text-anchor="end">AB</text><text x="8" y="44">C</text>
<text x="101" y="87" text-anchor="middle" font-size="22">1</text>
<text x="101" y="141" text-anchor="middle" font-size="22">0</text>
<text x="155" y="87" text-anchor="middle" font-size="22">x</text>
<text x="155" y="141" text-anchor="middle" font-size="22">0</text>
<text x="263" y="87" text-anchor="middle" font-size="22">0</text>
<text x="263" y="141" text-anchor="middle" font-size="22">x</text>
<text x="209" y="87" text-anchor="middle" font-size="22">0</text>
<text x="209" y="141" text-anchor="middle" font-size="22">1</text>
<path d="M87.5,56.5 L168.5,56.5 M177.5,65.5 L177.5,92.5 M168.5,101.5 L87.5,101.5 M78.5,92.5 L78.5,65.5 M78.5,65.5 A9,9 0 0 1 87.5,56.5 M168.5,56.5 A9,9 0 0 1 177.5,65.5 M177.5,92.5 A9,9 0 0 1 168.5,101.5 M87.5,101.5 A9,9 0 0 1 78.5,92.5" stroke="#e8743b" stroke-width="2.6" fill="none"/>
<text x="77" y="67" font-size="14" fill="#e8743b" font-weight="bold">1</text>
<path d="M199,114 L273,114 M282,123 L282,143 M273,152 L199,152 M190,143 L190,123 M190,123 A9,9 0 0 1 199,114 M273,114 A9,9 0 0 1 282,123 M282,143 A9,9 0 0 1 273,152 M199,152 A9,9 0 0 1 190,143" stroke="#3b8be8" stroke-width="2.6" fill="none"/>
<text x="185" y="121" font-size="14" fill="#3b8be8" font-weight="bold">2</text>
</svg>
</div>

- ลูปสีส้ม (สถานะ $000,010$) : $Q_A=0,\ Q_C=0 \Rightarrow \overline{Q_{A}}\overline{Q_{C}}$
- ลูปสีน้ำเงิน (สถานะ $101,111$) : $Q_A=1,\ Q_C=1 \Rightarrow Q_{A}Q_{C}$

$T_{C} = \overline{Q_{A}}\overline{Q_{C}} + Q_{A}Q_{C}$

**ขั้นที่ 4** นำสมการมาสร้างวงจร

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="1530" height="258" viewBox="0 0 1530 258" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,24)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<rect x="350" y="20" width="80" height="150" rx="2"/>
<polyline points="350,116 362,125 350,134"/>
<line x1="350" y1="125" x2="334" y2="125"/>
<line x1="334" y1="125" x2="334" y2="210"/>
<path d="M260,44 C282,44 308,54.5 320,65 C308,75.5 282,86 260,86 Q274,65 260,44 Z"/>
<path d="M166.2,16 H192.2 A26,21 0 0 1 192.2,58 H166.2 Z"/>
<line x1="144.2" y1="30" x2="166.2" y2="30"/>
<line x1="133.1" y1="25" x2="140.2" y2="25" stroke-width="1.4"/>
<line x1="144.2" y1="44" x2="166.2" y2="44"/>
<line x1="218.2" y1="37" x2="254.2" y2="37"/>
<line x1="254.2" y1="37" x2="254.2" y2="58"/>
<line x1="254.2" y1="58" x2="266.2" y2="58"/>
<path d="M166.2,72 H192.2 A26,21 0 0 1 192.2,114 H166.2 Z"/>
<line x1="144.2" y1="86" x2="166.2" y2="86"/>
<line x1="144.2" y1="100" x2="166.2" y2="100"/>
<line x1="133.1" y1="95" x2="140.2" y2="95" stroke-width="1.4"/>
<line x1="218.2" y1="93" x2="250.2" y2="93"/>
<line x1="250.2" y1="93" x2="250.2" y2="72"/>
<line x1="250.2" y1="72" x2="266.2" y2="72"/>
<line x1="320" y1="65" x2="350" y2="65"/>
<line x1="430" y1="58" x2="470" y2="58"/>
<rect x="850" y="20" width="80" height="150" rx="2"/>
<polyline points="850,116 862,125 850,134"/>
<line x1="850" y1="125" x2="834" y2="125"/>
<line x1="834" y1="125" x2="834" y2="210"/>
<path d="M760,44 C782,44 808,54.5 820,65 C808,75.5 782,86 760,86 Q774,65 760,44 Z"/>
<path d="M666.2,16 H692.2 A26,21 0 0 1 692.2,58 H666.2 Z"/>
<line x1="644.2" y1="30" x2="666.2" y2="30"/>
<line x1="633.1" y1="25" x2="640.2" y2="25" stroke-width="1.4"/>
<line x1="644.2" y1="44" x2="666.2" y2="44"/>
<line x1="718.2" y1="37" x2="754.2" y2="37"/>
<line x1="754.2" y1="37" x2="754.2" y2="58"/>
<line x1="754.2" y1="58" x2="766.2" y2="58"/>
<path d="M666.2,72 H692.2 A26,21 0 0 1 692.2,114 H666.2 Z"/>
<line x1="644.2" y1="86" x2="666.2" y2="86"/>
<line x1="644.2" y1="100" x2="666.2" y2="100"/>
<line x1="633.1" y1="95" x2="640.2" y2="95" stroke-width="1.4"/>
<line x1="718.2" y1="93" x2="750.2" y2="93"/>
<line x1="750.2" y1="93" x2="750.2" y2="72"/>
<line x1="750.2" y1="72" x2="766.2" y2="72"/>
<line x1="820" y1="65" x2="850" y2="65"/>
<line x1="930" y1="58" x2="970" y2="58"/>
<rect x="1350" y="20" width="80" height="150" rx="2"/>
<polyline points="1350,116 1362,125 1350,134"/>
<line x1="1350" y1="125" x2="1334" y2="125"/>
<line x1="1334" y1="125" x2="1334" y2="210"/>
<path d="M1260,44 C1282,44 1308,54.5 1320,65 C1308,75.5 1282,86 1260,86 Q1274,65 1260,44 Z"/>
<path d="M1166.2,16 H1192.2 A26,21 0 0 1 1192.2,58 H1166.2 Z"/>
<line x1="1144.2" y1="30" x2="1166.2" y2="30"/>
<line x1="1133.1" y1="25" x2="1140.2" y2="25" stroke-width="1.4"/>
<line x1="1144.2" y1="44" x2="1166.2" y2="44"/>
<line x1="1133.1" y1="39" x2="1140.2" y2="39" stroke-width="1.4"/>
<line x1="1218.2" y1="37" x2="1254.2" y2="37"/>
<line x1="1254.2" y1="37" x2="1254.2" y2="58"/>
<line x1="1254.2" y1="58" x2="1266.2" y2="58"/>
<path d="M1166.2,72 H1192.2 A26,21 0 0 1 1192.2,114 H1166.2 Z"/>
<line x1="1144.2" y1="86" x2="1166.2" y2="86"/>
<line x1="1144.2" y1="100" x2="1166.2" y2="100"/>
<line x1="1218.2" y1="93" x2="1250.2" y2="93"/>
<line x1="1250.2" y1="93" x2="1250.2" y2="72"/>
<line x1="1250.2" y1="72" x2="1266.2" y2="72"/>
<line x1="1320" y1="65" x2="1350" y2="65"/>
<line x1="1430" y1="58" x2="1470" y2="58"/>
<line x1="294" y1="210" x2="1334" y2="210"/>
<circle cx="334" cy="210" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="834" cy="210" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="1334" cy="210" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="390" y="103" text-anchor="middle" font-size="26">A</text>
<text x="358" y="71" text-anchor="start" font-size="14">T</text>
<text x="140.2" y="36" text-anchor="end" font-size="13">Q<tspan dy="4" font-size="9">A</tspan></text>
<text x="140.2" y="50" text-anchor="end" font-size="13">Q<tspan dy="4" font-size="9">B</tspan></text>
<text x="140.2" y="92" text-anchor="end" font-size="13">Q<tspan dy="4" font-size="9">A</tspan></text>
<text x="140.2" y="106" text-anchor="end" font-size="13">Q<tspan dy="4" font-size="9">B</tspan></text>
<text x="474" y="64" text-anchor="start" font-size="16">Q<tspan dy="4" font-size="10">A</tspan></text>
<text x="422" y="64" text-anchor="end" font-size="16">Q</text>
<text x="890" y="103" text-anchor="middle" font-size="26">B</text>
<text x="858" y="71" text-anchor="start" font-size="14">T</text>
<text x="640.2" y="36" text-anchor="end" font-size="13">Q<tspan dy="4" font-size="9">B</tspan></text>
<text x="640.2" y="50" text-anchor="end" font-size="13">Q<tspan dy="4" font-size="9">C</tspan></text>
<text x="640.2" y="92" text-anchor="end" font-size="13">Q<tspan dy="4" font-size="9">B</tspan></text>
<text x="640.2" y="106" text-anchor="end" font-size="13">Q<tspan dy="4" font-size="9">C</tspan></text>
<text x="974" y="64" text-anchor="start" font-size="16">Q<tspan dy="4" font-size="10">B</tspan></text>
<text x="922" y="64" text-anchor="end" font-size="16">Q</text>
<text x="1390" y="103" text-anchor="middle" font-size="26">C</text>
<text x="1358" y="71" text-anchor="start" font-size="14">T</text>
<text x="1140.2" y="36" text-anchor="end" font-size="13">Q<tspan dy="4" font-size="9">A</tspan></text>
<text x="1140.2" y="50" text-anchor="end" font-size="13">Q<tspan dy="4" font-size="9">C</tspan></text>
<text x="1140.2" y="92" text-anchor="end" font-size="13">Q<tspan dy="4" font-size="9">A</tspan></text>
<text x="1140.2" y="106" text-anchor="end" font-size="13">Q<tspan dy="4" font-size="9">C</tspan></text>
<text x="1474" y="64" text-anchor="start" font-size="16">Q<tspan dy="4" font-size="10">C</tspan></text>
<text x="1422" y="64" text-anchor="end" font-size="16">Q</text>
<text x="290" y="216" text-anchor="end" font-size="16">Clock</text>
</g>
</svg>
</div>

**ตรวจสอบลำดับการนับ** เริ่มที่ $000$ วงจรนับ $000 \to 001 \to 011 \to 111 \to 110 \to 100 \to 000$ ตรงตามที่ต้องการ

**ตรวจสถานะที่ไม่ใช้** $010 \to 101 \to 010 \to \cdots$ สลับกันไปมา ไม่กลับเข้าลำดับการนับ ถ้าเริ่มต้นที่สถานะนี้ต้องรีเซ็ตเป็น $000$

$\mathbf{Ans}\quad T_A = \overline{Q_A}Q_B + Q_A\overline{Q_B},\ T_B = \overline{Q_B}Q_C + Q_B\overline{Q_C},\ T_C = \overline{Q_A}\,\overline{Q_C} + Q_AQ_C$

### ตัวอย่างที่ 10  จงออกแบบวงจรนับขึ้นแบบได้จังหวะกันขนาด 3 บิต ($0$ ถึง $7$) โดยใช้ T ฟลิป-ฟลอป

$\mathbf{Sol}^{n}$

**ขั้นที่ 1** นับ $0$ ถึง $7$ ใช้ฟลิป-ฟลอป 3 ตัว (A, B, C) ไม่มีสถานะที่ไม่ใช้

**ขั้นที่ 2** ตารางสถานะ $T = Q(t) \oplus Q(t+1)$

| $A$ | $B$ | $C$ | $A^+$ | $B^+$ | $C^+$ | $T_A$ | $T_B$ | $T_C$ |
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 1 |
| 0 | 0 | 1 | 0 | 1 | 0 | 0 | 1 | 1 |
| 0 | 1 | 0 | 0 | 1 | 1 | 0 | 0 | 1 |
| 0 | 1 | 1 | 1 | 0 | 0 | 1 | 1 | 1 |
| 1 | 0 | 0 | 1 | 0 | 1 | 0 | 0 | 1 |
| 1 | 0 | 1 | 1 | 1 | 0 | 0 | 1 | 1 |
| 1 | 1 | 0 | 1 | 1 | 1 | 0 | 0 | 1 |
| 1 | 1 | 1 | 0 | 0 | 0 | 1 | 1 | 1 |

**ขั้นที่ 3** ลดรูปด้วย K-map

ลดรูป $T_{A}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="304" height="172" viewBox="0 0 304 172" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.6" fill="none">
<rect x="74" y="52" width="216" height="108"/>
<line x1="128" y1="52" x2="128" y2="160"/>
<line x1="182" y1="52" x2="182" y2="160"/>
<line x1="236" y1="52" x2="236" y2="160"/>
<line x1="74" y1="106" x2="290" y2="106"/>
<line x1="8" y1="8" x2="74" y2="52"/>
</g>
<text x="101" y="37" text-anchor="middle">00</text>
<text x="155" y="37" text-anchor="middle">01</text>
<text x="209" y="37" text-anchor="middle">11</text>
<text x="263" y="37" text-anchor="middle">10</text>
<text x="65" y="85" text-anchor="end">0</text>
<text x="65" y="139" text-anchor="end">1</text>
<text x="70" y="18" text-anchor="end">AB</text><text x="8" y="44">C</text>
<text x="101" y="87" text-anchor="middle" font-size="22">0</text>
<text x="101" y="141" text-anchor="middle" font-size="22">0</text>
<text x="155" y="87" text-anchor="middle" font-size="22">0</text>
<text x="155" y="141" text-anchor="middle" font-size="22">1</text>
<text x="263" y="87" text-anchor="middle" font-size="22">0</text>
<text x="263" y="141" text-anchor="middle" font-size="22">0</text>
<text x="209" y="87" text-anchor="middle" font-size="22">0</text>
<text x="209" y="141" text-anchor="middle" font-size="22">1</text>
<path d="M141.5,110.5 L222.5,110.5 M231.5,119.5 L231.5,146.5 M222.5,155.5 L141.5,155.5 M132.5,146.5 L132.5,119.5 M132.5,119.5 A9,9 0 0 1 141.5,110.5 M222.5,110.5 A9,9 0 0 1 231.5,119.5 M231.5,146.5 A9,9 0 0 1 222.5,155.5 M141.5,155.5 A9,9 0 0 1 132.5,146.5" stroke="#e8743b" stroke-width="2.6" fill="none"/>
<text x="131" y="121" font-size="14" fill="#e8743b" font-weight="bold">1</text>
</svg>
</div>

- ลูปสีส้ม (สถานะ $011,111$) : $Q_B=1,\ Q_C=1 \Rightarrow Q_{B}Q_{C}$

$T_{A} = Q_{B}Q_{C}$

ลดรูป $T_{B}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="304" height="172" viewBox="0 0 304 172" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.6" fill="none">
<rect x="74" y="52" width="216" height="108"/>
<line x1="128" y1="52" x2="128" y2="160"/>
<line x1="182" y1="52" x2="182" y2="160"/>
<line x1="236" y1="52" x2="236" y2="160"/>
<line x1="74" y1="106" x2="290" y2="106"/>
<line x1="8" y1="8" x2="74" y2="52"/>
</g>
<text x="101" y="37" text-anchor="middle">00</text>
<text x="155" y="37" text-anchor="middle">01</text>
<text x="209" y="37" text-anchor="middle">11</text>
<text x="263" y="37" text-anchor="middle">10</text>
<text x="65" y="85" text-anchor="end">0</text>
<text x="65" y="139" text-anchor="end">1</text>
<text x="70" y="18" text-anchor="end">AB</text><text x="8" y="44">C</text>
<text x="101" y="87" text-anchor="middle" font-size="22">0</text>
<text x="101" y="141" text-anchor="middle" font-size="22">1</text>
<text x="155" y="87" text-anchor="middle" font-size="22">0</text>
<text x="155" y="141" text-anchor="middle" font-size="22">1</text>
<text x="263" y="87" text-anchor="middle" font-size="22">0</text>
<text x="263" y="141" text-anchor="middle" font-size="22">1</text>
<text x="209" y="87" text-anchor="middle" font-size="22">0</text>
<text x="209" y="141" text-anchor="middle" font-size="22">1</text>
<path d="M87.5,110.5 L276.5,110.5 M285.5,119.5 L285.5,146.5 M276.5,155.5 L87.5,155.5 M78.5,146.5 L78.5,119.5 M78.5,119.5 A9,9 0 0 1 87.5,110.5 M276.5,110.5 A9,9 0 0 1 285.5,119.5 M285.5,146.5 A9,9 0 0 1 276.5,155.5 M87.5,155.5 A9,9 0 0 1 78.5,146.5" stroke="#e8743b" stroke-width="2.6" fill="none"/>
<text x="77" y="121" font-size="14" fill="#e8743b" font-weight="bold">1</text>
</svg>
</div>

- ลูปสีส้ม (สถานะ $001,011,101,111$) : $Q_C=1 \Rightarrow Q_{C}$

$T_{B} = Q_{C}$

ลดรูป $T_{C}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="304" height="172" viewBox="0 0 304 172" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.6" fill="none">
<rect x="74" y="52" width="216" height="108"/>
<line x1="128" y1="52" x2="128" y2="160"/>
<line x1="182" y1="52" x2="182" y2="160"/>
<line x1="236" y1="52" x2="236" y2="160"/>
<line x1="74" y1="106" x2="290" y2="106"/>
<line x1="8" y1="8" x2="74" y2="52"/>
</g>
<text x="101" y="37" text-anchor="middle">00</text>
<text x="155" y="37" text-anchor="middle">01</text>
<text x="209" y="37" text-anchor="middle">11</text>
<text x="263" y="37" text-anchor="middle">10</text>
<text x="65" y="85" text-anchor="end">0</text>
<text x="65" y="139" text-anchor="end">1</text>
<text x="70" y="18" text-anchor="end">AB</text><text x="8" y="44">C</text>
<text x="101" y="87" text-anchor="middle" font-size="22">1</text>
<text x="101" y="141" text-anchor="middle" font-size="22">1</text>
<text x="155" y="87" text-anchor="middle" font-size="22">1</text>
<text x="155" y="141" text-anchor="middle" font-size="22">1</text>
<text x="263" y="87" text-anchor="middle" font-size="22">1</text>
<text x="263" y="141" text-anchor="middle" font-size="22">1</text>
<text x="209" y="87" text-anchor="middle" font-size="22">1</text>
<text x="209" y="141" text-anchor="middle" font-size="22">1</text>
<path d="M87.5,56.5 L276.5,56.5 M285.5,65.5 L285.5,146.5 M276.5,155.5 L87.5,155.5 M78.5,146.5 L78.5,65.5 M78.5,65.5 A9,9 0 0 1 87.5,56.5 M276.5,56.5 A9,9 0 0 1 285.5,65.5 M285.5,146.5 A9,9 0 0 1 276.5,155.5 M87.5,155.5 A9,9 0 0 1 78.5,146.5" stroke="#e8743b" stroke-width="2.6" fill="none"/>
<text x="77" y="67" font-size="14" fill="#e8743b" font-weight="bold">1</text>
</svg>
</div>

- ลูปสีส้ม (สถานะ $000,001,010,011,100,101,110,111$) : $ \Rightarrow 1$

$T_{C} = 1$

**ขั้นที่ 4** นำสมการมาสร้างวงจร ($T_C = 1$ ต่อ $1$ ตรง ๆ)

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="985" height="258" viewBox="0 0 985 258" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,24)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<rect x="225" y="20" width="80" height="150" rx="2"/>
<polyline points="225,116 237,125 225,134"/>
<line x1="225" y1="125" x2="209" y2="125"/>
<line x1="209" y1="125" x2="209" y2="210"/>
<path d="M143,44 H169 A26,21 0 0 1 169,86 H143 Z"/>
<line x1="121" y1="58" x2="143" y2="58"/>
<line x1="121" y1="72" x2="143" y2="72"/>
<line x1="195" y1="65" x2="225" y2="65"/>
<line x1="305" y1="58" x2="345" y2="58"/>
<rect x="515" y="20" width="80" height="150" rx="2"/>
<polyline points="515,116 527,125 515,134"/>
<line x1="515" y1="125" x2="499" y2="125"/>
<line x1="499" y1="125" x2="499" y2="210"/>
<line x1="471" y1="65" x2="515" y2="65"/>
<line x1="595" y1="58" x2="635" y2="58"/>
<rect x="805" y="20" width="80" height="150" rx="2"/>
<polyline points="805,116 817,125 805,134"/>
<line x1="805" y1="125" x2="789" y2="125"/>
<line x1="789" y1="125" x2="789" y2="210"/>
<line x1="769" y1="65" x2="805" y2="65"/>
<line x1="885" y1="58" x2="925" y2="58"/>
<line x1="169" y1="210" x2="789" y2="210"/>
<circle cx="209" cy="210" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="499" cy="210" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="789" cy="210" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="265" y="103" text-anchor="middle" font-size="26">A</text>
<text x="233" y="71" text-anchor="start" font-size="14">T</text>
<text x="117" y="64" text-anchor="end" font-size="13">Q<tspan dy="4" font-size="9">B</tspan></text>
<text x="117" y="78" text-anchor="end" font-size="13">Q<tspan dy="4" font-size="9">C</tspan></text>
<text x="349" y="64" text-anchor="start" font-size="16">Q<tspan dy="4" font-size="10">A</tspan></text>
<text x="297" y="64" text-anchor="end" font-size="16">Q</text>
<text x="555" y="103" text-anchor="middle" font-size="26">B</text>
<text x="523" y="71" text-anchor="start" font-size="14">T</text>
<text x="467" y="71" text-anchor="end" font-size="14">Q<tspan dy="4" font-size="9">C</tspan></text>
<text x="639" y="64" text-anchor="start" font-size="16">Q<tspan dy="4" font-size="10">B</tspan></text>
<text x="587" y="64" text-anchor="end" font-size="16">Q</text>
<text x="845" y="103" text-anchor="middle" font-size="26">C</text>
<text x="813" y="71" text-anchor="start" font-size="14">T</text>
<text x="765" y="71" text-anchor="end" font-size="16">1</text>
<text x="929" y="64" text-anchor="start" font-size="16">Q<tspan dy="4" font-size="10">C</tspan></text>
<text x="877" y="64" text-anchor="end" font-size="16">Q</text>
<text x="165" y="216" text-anchor="end" font-size="16">Clock</text>
</g>
</svg>
</div>

สังเกตว่า $T_A = Q_BQ_C$, $T_B = Q_C$, $T_C = 1$ เป็นรูปแบบเดียวกับวงจรนับ 4 บิตในหัวข้อ 3.1 คือ ฟลิป-ฟลอปสลับเมื่อบิตที่ต่ำกว่าเป็น $1$ ทั้งหมด

$\mathbf{Ans}\quad T_A = Q_BQ_C,\ T_B = Q_C,\ T_C = 1$

## 4. สรุปบทและข้อควรระวัง

### 4.1 สรุปวงจรนับ

| หัวข้อ | สาระสำคัญ |
|:--|:--|
| จำนวนฟลิป-ฟลอป | เท่ากับจำนวนบิต $n$ : $\text{Mod} = 2^{n}$ นับได้ $0$ ถึง $2^{n}-1$ |
| Asynchronous (Ripple) | ฟลิป-ฟลอปทำงานไม่พร้อมกัน ตัวแรกรับ Clock ตัวต่อไปรับ $Q$ ของตัวก่อนหน้า ($J=K=1$ หรือ T ฟลิป-ฟลอป ทำงานที่ขอบขาลง) สร้างง่ายแต่ช้าและผิดพลาดง่ายที่ความถี่สูง |
| Modulo-M | ต่อ $Q$ ของบิตที่เป็น $1$ ใน $M$ เข้า NAND ส่งไปขา CLR (active low) ของทุกตัว เช่น Mod 10 ใช้ NAND($Q_A$, $Q_C$) |
| Synchronous | ฟลิป-ฟลอปทุกตัวรับ Clock เดียวกัน นับขึ้น: ฟลิป-ฟลอปสลับเมื่อบิตที่ต่ำกว่าเป็น $1$ ทั้งหมด ($J=K$ หรือ $T$ = ผลคูณของบิตที่ต่ำกว่า) |
| ออกแบบ | ตารางลำดับการนับ $\to$ ตารางเปลี่ยนสถานะ + ตารางกระตุ้น $\to$ K-map ($x$ = สถานะที่ไม่ใช้) $\to$ สมการ $\to$ วงจร |

### 4.2 ข้อควรระวังในการสอบ

- จำนวนฟลิป-ฟลอปคือ $n$ ที่ $2^{n} \ge$ จำนวนสถานะ (เช่น นับ $0$ ถึง $5$ มี 6 สถานะ ใช้ 3 ตัว)
- ริบเพิลแบบนับขึ้นใช้ $Q$ ของตัวก่อนหน้าไปกระตุ้นตัวถัดไปเมื่อฟลิป-ฟลอปทำงานที่ขอบขาลง (ถ้าทำงานที่ขอบขาขึ้นต้องใช้ $\overline{Q}$)
- ตัวอย่างของบทนี้ A เป็นบิตสูงสุด แต่ในวงจรริบเพิล FF ตัวแรกที่รับ Clock คือ D ซึ่งเป็นบิตต่ำสุด อ่านตารางการนับให้ตรงตามชื่อ
- การล้างของ Mod $M$ ทำงานทันทีที่ถึงค่า $M$ ดังนั้นค่า $M$ เกิดขึ้นเพียงชั่วขณะ ค่าที่นับได้จริงคือ $0$ ถึง $M-1$
- ในตารางสถานะของการออกแบบ ใช้ตารางกระตุ้นของฟลิป-ฟลอปชนิดที่โจทย์กำหนด และสถานะที่ไม่ใช้เป็น $x$ ทุกอินพุต
- ตรวจสถานะที่ไม่ใช้ว่ากลับเข้าลำดับการนับได้หรือไม่ (RS ต้องไม่ได้ $R=S=1$)
- ตรวจคำตอบโดยแทนค่าสถานะปัจจุบันลงสมการทีละสถานะ ว่าได้สถานะถัดไปตรงตามลำดับ
