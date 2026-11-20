# บทที่ 6 วงจรถอดรหัส (Decoder)

@select code รหัสอินพุต | bcd=BCD-8421 | xs3=Excess-3
@select method วิธีออกแบบ | andor=AND/OR (Minterm) | nand=NAND อย่างเดียว (Minterm) | orand=OR/AND (Maxterm) | nor=NOR อย่างเดียว (Maxterm)
@select digit เลือกเลข | 0=0 | 1=1 | 2=2 | 3=3 | 4=4 | 5=5 | 6=6 | 7=7 | 8=8 | 9=9

---

## 1. วงจรถอดรหัสและ LED 7 ส่วน

### 1.1 วงจรถอดรหัส (Decoder)

วงจรถอดรหัส (Decoder) คือวงจรที่เปลี่ยนรหัสทางอินพุตให้เป็นรหัสอื่นตามต้องการ เช่น เปลี่ยนรหัส BCD ให้เป็นสัญญาณที่แสดงเป็นเลขฐานสิบ สร้างได้จากไดโอดต่อแบบเมทริกซ์ หรือจากวงจรเกตแบบคอมบิเนชัน

ในบทนี้ใช้วงจรถอดรหัสขับ LED 7 ส่วน อินพุตเป็นรหัส 4 บิต $A,B,C,D$ ($A$ เป็น MSB) เอาต์พุตมี 7 เส้นคือ $a,b,c,d,e,f,g$ ถ้าเอาต์พุตเป็น $1$ แสดงว่า LED ส่วนนั้นติด

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="470" height="170" viewBox="0 0 470 170" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<rect x="150" y="14" width="130" height="142" rx="3"/>
<rect x="370" y="14" width="76" height="142" rx="3"/>
<line x1="100" y1="36" x2="150" y2="36"/>
<line x1="100" y1="68" x2="150" y2="68"/>
<line x1="100" y1="100" x2="150" y2="100"/>
<line x1="100" y1="132" x2="150" y2="132"/>
<line x1="280" y1="26" x2="370" y2="26"/>
<line x1="280" y1="46" x2="370" y2="46"/>
<line x1="280" y1="66" x2="370" y2="66"/>
<line x1="280" y1="86" x2="370" y2="86"/>
<line x1="280" y1="106" x2="370" y2="106"/>
<line x1="280" y1="126" x2="370" y2="126"/>
<line x1="280" y1="146" x2="370" y2="146"/>
</g>
<text x="92" y="42" text-anchor="end">A</text>
<text x="92" y="74" text-anchor="end">B</text>
<text x="92" y="106" text-anchor="end">C</text>
<text x="92" y="138" text-anchor="end">D</text>
<text x="215" y="76" text-anchor="middle">Decoder</text><text x="215" y="100" text-anchor="middle" font-size="14">(4 bit in, 7 out)</text>
<text x="324" y="22" text-anchor="middle" font-size="15">a</text>
<text x="324" y="42" text-anchor="middle" font-size="15">b</text>
<text x="324" y="62" text-anchor="middle" font-size="15">c</text>
<text x="324" y="82" text-anchor="middle" font-size="15">d</text>
<text x="324" y="102" text-anchor="middle" font-size="15">e</text>
<text x="324" y="122" text-anchor="middle" font-size="15">f</text>
<text x="324" y="142" text-anchor="middle" font-size="15">g</text>
<text x="408" y="82" text-anchor="middle" font-size="15">LED</text><text x="408" y="102" text-anchor="middle" font-size="15">7 ส่วน</text>
</svg>
</div>

**ขั้นตอนการออกแบบวงจรถอดรหัส**

1. เขียนตารางความจริง อินพุต 4 บิต เอาต์พุต $a$ ถึง $g$ รหัสที่ไม่ได้ใช้ใส่ $d$ (don't care คือค่าอะไรก็ได้)
2. แยกทำทีละเอาต์พุต: ใส่ค่าลงแผนผังคาร์โนห์ (K-map) 4 ตัวแปร ใส่ $1$ (Minterm) หรือ $0$ (Maxterm) และ $d$
3. ทำลูปลดรูป ช่อง $d$ จะนำเข้าลูปหรือไม่ก็ได้ แล้วแต่ว่าทำให้ลูปใหญ่ขึ้นหรือไม่
4. อ่านลูปเป็นสมการ แล้วแปลงให้ตรงกับชนิดเกตที่โจทย์กำหนด
5. เขียนวงจร

### 1.2 LED เจ็ดส่วน (Seven Segment)

LED 7 ส่วนมีหลอดแยกกัน 7 ดวง เรียกชื่อ $a$ ถึง $g$ ตามรูป (มีจุด DP เพิ่มอีกหนึ่งจุด) สั่งให้ติดบางดวงเพื่อแสดงเป็นตัวเลข $0$ ถึง $9$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="175" height="232" viewBox="0 0 175 232" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(24,12) scale(2.8)">
<path d="M7,4 L37,4 L33,10 L11,10 Z" fill-opacity="0.18" stroke="currentColor" stroke-width="0.5"/>
<path d="M38,5 L38,35 L32,31 L32,11 Z" fill-opacity="0.18" stroke="currentColor" stroke-width="0.5"/>
<path d="M38,41 L38,71 L32,65 L32,45 Z" fill-opacity="0.18" stroke="currentColor" stroke-width="0.5"/>
<path d="M7,72 L37,72 L33,66 L11,66 Z" fill-opacity="0.18" stroke="currentColor" stroke-width="0.5"/>
<path d="M6,41 L6,71 L12,65 L12,45 Z" fill-opacity="0.18" stroke="currentColor" stroke-width="0.5"/>
<path d="M6,5 L6,35 L12,31 L12,11 Z" fill-opacity="0.18" stroke="currentColor" stroke-width="0.5"/>
<path d="M7,38 L11,34 L33,34 L37,38 L33,42 L11,42 Z" fill-opacity="0.18" stroke="currentColor" stroke-width="0.5"/>
</g>
<text x="86" y="38" text-anchor="middle" font-size="16" font-style="italic">a</text>
<text x="122" y="73" text-anchor="middle" font-size="16" font-style="italic">b</text>
<text x="122" y="174" text-anchor="middle" font-size="16" font-style="italic">c</text>
<text x="86" y="211" text-anchor="middle" font-size="16" font-style="italic">d</text>
<text x="49" y="174" text-anchor="middle" font-size="16" font-style="italic">e</text>
<text x="49" y="73" text-anchor="middle" font-size="16" font-style="italic">f</text>
<text x="86" y="124" text-anchor="middle" font-size="16" font-style="italic">g</text>
<circle cx="152" cy="212" r="6" fill-opacity="0.18" stroke="currentColor" stroke-width="1.2"/>
<text x="152" y="228" text-anchor="middle" font-size="12">DP</text>
</svg>
</div>

| ตัวเลข | LED ที่สว่าง | $a\ b\ c\ d\ e\ f\ g$ |
|:-:|:-:|:-:|
| 0 | a, b, c, d, e, f | 1 1 1 1 1 1 0 |
| 1 | b, c | 0 1 1 0 0 0 0 |
| 2 | a, b, d, e, g | 1 1 0 1 1 0 1 |
| 3 | a, b, c, d, g | 1 1 1 1 0 0 1 |
| 4 | b, c, f, g | 0 1 1 0 0 1 1 |
| 5 | a, c, d, f, g | 1 0 1 1 0 1 1 |
| 6 | a, c, d, e, f, g | 1 0 1 1 1 1 1 |
| 7 | a, b, c | 1 1 1 0 0 0 0 |
| 8 | a, b, c, d, e, f, g | 1 1 1 1 1 1 1 |
| 9 | a, b, c, d, f, g | 1 1 1 1 0 1 1 |

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="632" height="118" viewBox="0 0 632 118" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(10,8) scale(1.1)"><path d="M7,4 L37,4 L33,10 L11,10 Z" fill-opacity="1"/><path d="M38,5 L38,35 L32,31 L32,11 Z" fill-opacity="1"/><path d="M38,41 L38,71 L32,65 L32,45 Z" fill-opacity="1"/><path d="M7,72 L37,72 L33,66 L11,66 Z" fill-opacity="1"/><path d="M6,41 L6,71 L12,65 L12,45 Z" fill-opacity="1"/><path d="M6,5 L6,35 L12,31 L12,11 Z" fill-opacity="1"/><path d="M7,38 L11,34 L33,34 L37,38 L33,42 L11,42 Z" fill-opacity="0.1"/></g>
<text x="34.2" y="108" text-anchor="middle">0</text>
<g transform="translate(72,8) scale(1.1)"><path d="M7,4 L37,4 L33,10 L11,10 Z" fill-opacity="0.1"/><path d="M38,5 L38,35 L32,31 L32,11 Z" fill-opacity="1"/><path d="M38,41 L38,71 L32,65 L32,45 Z" fill-opacity="1"/><path d="M7,72 L37,72 L33,66 L11,66 Z" fill-opacity="0.1"/><path d="M6,41 L6,71 L12,65 L12,45 Z" fill-opacity="0.1"/><path d="M6,5 L6,35 L12,31 L12,11 Z" fill-opacity="0.1"/><path d="M7,38 L11,34 L33,34 L37,38 L33,42 L11,42 Z" fill-opacity="0.1"/></g>
<text x="96.2" y="108" text-anchor="middle">1</text>
<g transform="translate(134,8) scale(1.1)"><path d="M7,4 L37,4 L33,10 L11,10 Z" fill-opacity="1"/><path d="M38,5 L38,35 L32,31 L32,11 Z" fill-opacity="1"/><path d="M38,41 L38,71 L32,65 L32,45 Z" fill-opacity="0.1"/><path d="M7,72 L37,72 L33,66 L11,66 Z" fill-opacity="1"/><path d="M6,41 L6,71 L12,65 L12,45 Z" fill-opacity="1"/><path d="M6,5 L6,35 L12,31 L12,11 Z" fill-opacity="0.1"/><path d="M7,38 L11,34 L33,34 L37,38 L33,42 L11,42 Z" fill-opacity="1"/></g>
<text x="158.2" y="108" text-anchor="middle">2</text>
<g transform="translate(196,8) scale(1.1)"><path d="M7,4 L37,4 L33,10 L11,10 Z" fill-opacity="1"/><path d="M38,5 L38,35 L32,31 L32,11 Z" fill-opacity="1"/><path d="M38,41 L38,71 L32,65 L32,45 Z" fill-opacity="1"/><path d="M7,72 L37,72 L33,66 L11,66 Z" fill-opacity="1"/><path d="M6,41 L6,71 L12,65 L12,45 Z" fill-opacity="0.1"/><path d="M6,5 L6,35 L12,31 L12,11 Z" fill-opacity="0.1"/><path d="M7,38 L11,34 L33,34 L37,38 L33,42 L11,42 Z" fill-opacity="1"/></g>
<text x="220.2" y="108" text-anchor="middle">3</text>
<g transform="translate(258,8) scale(1.1)"><path d="M7,4 L37,4 L33,10 L11,10 Z" fill-opacity="0.1"/><path d="M38,5 L38,35 L32,31 L32,11 Z" fill-opacity="1"/><path d="M38,41 L38,71 L32,65 L32,45 Z" fill-opacity="1"/><path d="M7,72 L37,72 L33,66 L11,66 Z" fill-opacity="0.1"/><path d="M6,41 L6,71 L12,65 L12,45 Z" fill-opacity="0.1"/><path d="M6,5 L6,35 L12,31 L12,11 Z" fill-opacity="1"/><path d="M7,38 L11,34 L33,34 L37,38 L33,42 L11,42 Z" fill-opacity="1"/></g>
<text x="282.2" y="108" text-anchor="middle">4</text>
<g transform="translate(320,8) scale(1.1)"><path d="M7,4 L37,4 L33,10 L11,10 Z" fill-opacity="1"/><path d="M38,5 L38,35 L32,31 L32,11 Z" fill-opacity="0.1"/><path d="M38,41 L38,71 L32,65 L32,45 Z" fill-opacity="1"/><path d="M7,72 L37,72 L33,66 L11,66 Z" fill-opacity="1"/><path d="M6,41 L6,71 L12,65 L12,45 Z" fill-opacity="0.1"/><path d="M6,5 L6,35 L12,31 L12,11 Z" fill-opacity="1"/><path d="M7,38 L11,34 L33,34 L37,38 L33,42 L11,42 Z" fill-opacity="1"/></g>
<text x="344.2" y="108" text-anchor="middle">5</text>
<g transform="translate(382,8) scale(1.1)"><path d="M7,4 L37,4 L33,10 L11,10 Z" fill-opacity="1"/><path d="M38,5 L38,35 L32,31 L32,11 Z" fill-opacity="0.1"/><path d="M38,41 L38,71 L32,65 L32,45 Z" fill-opacity="1"/><path d="M7,72 L37,72 L33,66 L11,66 Z" fill-opacity="1"/><path d="M6,41 L6,71 L12,65 L12,45 Z" fill-opacity="1"/><path d="M6,5 L6,35 L12,31 L12,11 Z" fill-opacity="1"/><path d="M7,38 L11,34 L33,34 L37,38 L33,42 L11,42 Z" fill-opacity="1"/></g>
<text x="406.2" y="108" text-anchor="middle">6</text>
<g transform="translate(444,8) scale(1.1)"><path d="M7,4 L37,4 L33,10 L11,10 Z" fill-opacity="1"/><path d="M38,5 L38,35 L32,31 L32,11 Z" fill-opacity="1"/><path d="M38,41 L38,71 L32,65 L32,45 Z" fill-opacity="1"/><path d="M7,72 L37,72 L33,66 L11,66 Z" fill-opacity="0.1"/><path d="M6,41 L6,71 L12,65 L12,45 Z" fill-opacity="0.1"/><path d="M6,5 L6,35 L12,31 L12,11 Z" fill-opacity="0.1"/><path d="M7,38 L11,34 L33,34 L37,38 L33,42 L11,42 Z" fill-opacity="0.1"/></g>
<text x="468.2" y="108" text-anchor="middle">7</text>
<g transform="translate(506,8) scale(1.1)"><path d="M7,4 L37,4 L33,10 L11,10 Z" fill-opacity="1"/><path d="M38,5 L38,35 L32,31 L32,11 Z" fill-opacity="1"/><path d="M38,41 L38,71 L32,65 L32,45 Z" fill-opacity="1"/><path d="M7,72 L37,72 L33,66 L11,66 Z" fill-opacity="1"/><path d="M6,41 L6,71 L12,65 L12,45 Z" fill-opacity="1"/><path d="M6,5 L6,35 L12,31 L12,11 Z" fill-opacity="1"/><path d="M7,38 L11,34 L33,34 L37,38 L33,42 L11,42 Z" fill-opacity="1"/></g>
<text x="530.2" y="108" text-anchor="middle">8</text>
<g transform="translate(568,8) scale(1.1)"><path d="M7,4 L37,4 L33,10 L11,10 Z" fill-opacity="1"/><path d="M38,5 L38,35 L32,31 L32,11 Z" fill-opacity="1"/><path d="M38,41 L38,71 L32,65 L32,45 Z" fill-opacity="1"/><path d="M7,72 L37,72 L33,66 L11,66 Z" fill-opacity="1"/><path d="M6,41 L6,71 L12,65 L12,45 Z" fill-opacity="0.1"/><path d="M6,5 L6,35 L12,31 L12,11 Z" fill-opacity="1"/><path d="M7,38 L11,34 L33,34 L37,38 L33,42 L11,42 Z" fill-opacity="1"/></g>
<text x="592.2" y="108" text-anchor="middle">9</text>
</svg>
</div>

### ตัวอย่างที่ 1  จงเติมตารางว่า LED ส่วนใดสว่าง เมื่อแสดงตัวเลข $2$ ถึง $7$ (ตัวเลข $0, 1, 8, 9$ ทำไว้แล้วในตาราง)

$\mathbf{Sol}^{n}$

ดูรูปร่างของตัวเลขแต่ละตัว แล้วไล่ดูว่าต้องใช้ส่วนไหน

- เลข $2$ : บน($a$) ขวาบน($b$) ล่าง($d$) ซ้ายล่าง($e$) กลาง($g$)
- เลข $3$ : บน($a$) ขวาบน($b$) ขวาล่าง($c$) ล่าง($d$) กลาง($g$)
- เลข $4$ : ขวาบน($b$) ขวาล่าง($c$) ซ้ายบน($f$) กลาง($g$)
- เลข $5$ : บน($a$) ขวาล่าง($c$) ล่าง($d$) ซ้ายบน($f$) กลาง($g$)
- เลข $6$ : บน($a$) ขวาล่าง($c$) ล่าง($d$) ซ้ายล่าง($e$) ซ้ายบน($f$) กลาง($g$)
- เลข $7$ : บน($a$) ขวาบน($b$) ขวาล่าง($c$)

$\mathbf{Ans}\quad \text{ตารางที่เติมแล้ว}$

| ตัวเลข | LED ที่สว่าง |
|:-:|:-:|
| 2 | a, b, d, e, g |
| 3 | a, b, c, d, g |
| 4 | b, c, f, g |
| 5 | a, c, d, f, g |
| 6 | a, c, d, e, f, g |
| 7 | a, b, c |

## 2. หลักการออกแบบวงจรในทางปฏิบัติ

### 2.1 ใช้เกตให้น้อยที่สุด

การออกแบบวงจรในทางปฏิบัติจะพยายามใช้เกตให้น้อยที่สุด ทั้งจำนวนและชนิดของเกต (ใช้เกตชนิดเดียวได้ก็ใช้ IC น้อยตัว) มี 4 วิธี

| วิธี | เกตที่ใช้ | ค่าที่ลงใน K-map | สมการที่ได้ |
|:-:|:-:|:-:|:-:|
| 1 | AND / OR | Minterm ($1$) | ผลบวกของผลคูณ (SOP) |
| 2 | NAND อย่างเดียว | Minterm ($1$) | SOP แล้วคอมพลีเมนต์ 2 ครั้ง |
| 3 | OR / AND | Maxterm ($0$) | ผลคูณของผลบวก (POS) |
| 4 | NOR อย่างเดียว | Maxterm ($0$) | POS แล้วคอมพลีเมนต์ 2 ครั้ง |

**การอ่านลูปใน K-map**

- ลูปของ $1$ อ่านเป็นผลคูณ: ตัวแปรที่เป็น $1$ ใช้ตัวปกติ ตัวแปรที่เป็น $0$ ใช้ตัวคอมพลีเมนต์ ตัวแปรที่เปลี่ยนค่าในลูปตัดทิ้ง
- ลูปของ $0$ อ่านเป็นผลบวก: ตัวแปรที่เป็น $0$ ใช้ตัวปกติ ตัวแปรที่เป็น $1$ ใช้ตัวคอมพลีเมนต์ ตัวแปรที่เปลี่ยนค่าในลูปตัดทิ้ง
- ลูปต้องมี $1,2,4,8$ หรือ $16$ ช่อง ลูปโอบข้ามขอบแผนผังได้ และ $4$ มุมของแผนผังอยู่ติดกัน

**สูตรแปลงเป็น NAND อย่างเดียว** (จาก SOP $F = T_1 + T_2 + \cdots + T_n$)

$$F = \overline{\overline{F}} = \overline{\overline{T_1}\cdot\overline{T_2}\cdots\overline{T_n}}$$

**สูตรแปลงเป็น NOR อย่างเดียว** (จาก POS $F = S_1 S_2 \cdots S_n$)

$$F = \overline{\overline{F}} = \overline{\overline{S_1}+\overline{S_2}+\cdots+\overline{S_n}}$$

- วิธีทำ: คอมพลีเมนต์สมการ 2 ครั้ง แล้วกระจายคอมพลีเมนต์ชั้นในด้วย De Morgan ให้เหลือเกต NAND (หรือ NOR) ซ้อนกัน 2 ชั้น
- พจน์ที่มีตัวแปรตัวเดียว เช่น $T=A$ จะได้ $\overline{T}=\overline{A}$ ต่อสาย $\overline{A}$ เข้าเกตชั้นนอกได้เลย ไม่ต้องใช้เกตชั้นใน
- เกต NOT ทำได้จาก NAND หรือ NOR โดยต่ออินพุตเข้าด้วยกัน

### 2.2 รหัส Excess-3

รหัส Excess-3 ได้จากการนำเลขฐานสิบ $n$ มาบวก $3$ แล้วเขียนเป็นเลขฐานสอง 4 บิต เช่น เลข $5$ เขียนเป็น $5+3=8=1000$ ส่วนรหัส BCD-8421 คือเลขฐานสองของเลขฐานสิบนั้นโดยตรง วงจรถอดรหัสของบทนี้รับอินพุตเป็นรหัสใดรหัสหนึ่งใน 2 รหัสนี้

| เลขฐานสิบ | BCD-8421 ($A\ B\ C\ D$) | Excess-3 ($A\ B\ C\ D$) |
|:-:|:-:|:-:|
| 0 | 0 0 0 0 | 0 0 1 1 |
| 1 | 0 0 0 1 | 0 1 0 0 |
| 2 | 0 0 1 0 | 0 1 0 1 |
| 3 | 0 0 1 1 | 0 1 1 0 |
| 4 | 0 1 0 0 | 0 1 1 1 |
| 5 | 0 1 0 1 | 1 0 0 0 |
| 6 | 0 1 1 0 | 1 0 0 1 |
| 7 | 0 1 1 1 | 1 0 1 0 |
| 8 | 1 0 0 0 | 1 0 1 1 |
| 9 | 1 0 0 1 | 1 1 0 0 |

รหัสที่ไม่ใช้เป็น $d$ : BCD-8421 ไม่ใช้ $1010$ ถึง $1111$ (6 รหัส) Excess-3 ไม่ใช้ $0000$, $0001$, $0010$, $1101$, $1110$, $1111$ (6 รหัส)

## 3. ออกแบบวงจรถอดรหัสเป็น LED 7 ส่วน

เลือก **รหัสอินพุต** (BCD-8421 หรือ Excess-3) **วิธีออกแบบ** (AND/OR, NAND อย่างเดียว, OR/AND หรือ NOR อย่างเดียว) และ **เลือกเลข** (0 ถึง 9) ด้านล่างนี้ การ์ดที่อยู่ถัดลงไปจะแสดงโจทย์ ตารางความจริง และของเลขที่เลือก : segment ที่ใช้ K-map และสมการของ segment เหล่านั้น และวงจรที่ต่อครบทั้งวงจร (เฉพาะ segment ที่เลขนั้นใช้ ไม่ต้องทำทั้ง $a$ ถึง $g$)

| วิธีออกแบบ | ค่าที่ลงใน K-map | สมการ | เกตที่ใช้ |
|:--|:--|:--|:--|
| AND/OR | Minterm (1) | ผลบวกของผลคูณ | AND ชั้นแรก, OR ชั้นสอง |
| NAND อย่างเดียว | Minterm (1) | ผลบวกของผลคูณ แล้วแปลง | NAND ทั้งสองชั้น |
| OR/AND | Maxterm (0) | ผลคูณของผลบวก | OR ชั้นแรก, AND ชั้นสอง |
| NOR อย่างเดียว | Maxterm (0) | ผลคูณของผลบวก แล้วแปลง | NOR ทั้งสองชั้น |

ในสไลด์ BCD-8421 ทำด้วย Minterm (AND/OR และ NAND) และ Excess-3 ทำด้วย Maxterm (OR/AND และ NOR) ส่วนอีก 4 ตัวเลือกใช้หลักการเดียวกัน (K-map เหมือนกัน เพียงเปลี่ยนไปอ่านลูปของ 0 แทนลูปของ 1 หรือกลับกัน)

@choices

### โจทย์ : BCD-8421 ด้วย AND/OR {code=bcd; method=andor}

**จงออกแบบวงจรถอดรหัสจาก BCD-8421 4 บิต เป็นรหัส Decimal โดยใช้ Gate ชนิด AND/OR แสดงผล LED 7 ส่วน**

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="560" height="190" viewBox="0 0 560 190" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<rect x="170" y="14" width="190" height="160" rx="2"/>
<line x1="110" y1="42" x2="170" y2="42"/>
<line x1="110" y1="78" x2="170" y2="78"/>
<line x1="110" y1="114" x2="170" y2="114"/>
<line x1="110" y1="150" x2="170" y2="150"/>
<line x1="360" y1="30" x2="410" y2="30"/>
<line x1="360" y1="51" x2="410" y2="51"/>
<line x1="360" y1="72" x2="410" y2="72"/>
<line x1="360" y1="93" x2="410" y2="93"/>
<line x1="360" y1="114" x2="410" y2="114"/>
<line x1="360" y1="135" x2="410" y2="135"/>
<line x1="360" y1="156" x2="410" y2="156"/>
<rect x="410" y="14" width="110" height="160" rx="2"/>
</g>
<text x="100" y="48" text-anchor="end">A</text>
<text x="100" y="84" text-anchor="end">B</text>
<text x="100" y="120" text-anchor="end">C</text>
<text x="100" y="156" text-anchor="end">D</text>
<text x="265" y="68" text-anchor="middle">BCD-8421</text><text x="265" y="92" text-anchor="middle">to</text><text x="265" y="116" text-anchor="middle">Decimal</text>
<text x="265" y="156" text-anchor="middle" font-size="15">7 Segment Display</text>
<text x="385" y="26" text-anchor="middle" font-size="14">a</text>
<text x="385" y="47" text-anchor="middle" font-size="14">b</text>
<text x="385" y="68" text-anchor="middle" font-size="14">c</text>
<text x="385" y="89" text-anchor="middle" font-size="14">d</text>
<text x="385" y="110" text-anchor="middle" font-size="14">e</text>
<text x="385" y="131" text-anchor="middle" font-size="14">f</text>
<text x="385" y="152" text-anchor="middle" font-size="14">g</text>
<g transform="translate(438,52) scale(0.9)"><path d="M7,4 L37,4 L33,10 L11,10 Z" fill-opacity="1"/><path d="M38,5 L38,35 L32,31 L32,11 Z" fill-opacity="1"/><path d="M38,41 L38,71 L32,65 L32,45 Z" fill-opacity="1"/><path d="M7,72 L37,72 L33,66 L11,66 Z" fill-opacity="1"/><path d="M6,41 L6,71 L12,65 L12,45 Z" fill-opacity="1"/><path d="M6,5 L6,35 L12,31 L12,11 Z" fill-opacity="1"/><path d="M7,38 L11,34 L33,34 L37,38 L33,42 L11,42 Z" fill-opacity="1"/></g>
</svg>
</div>

**ขั้นตอน** 1) เขียนตารางความจริง ($a$ ถึง $g$ ของเลข $0$ ถึง $9$ ; รหัสที่ไม่ใช้เป็น $d$) 2) เลือกเลขที่ต้องการ ดูว่า LED ส่วนใดสว่าง 3) ทำ K-map ของ segment เหล่านั้น ใส่ $1$ (Minterm) และ $d$ 4) ทำลูป อ่านเป็นสมการผลคูณ แล้วรวมด้วยผลบวก (SOP) 5) ไม่ต้องแปลงสมการ ใช้เกตตามสมการได้เลย 6) เขียนวงจร

โจทย์ในสไลด์ใช้เกต AND/OR และ NAND กับ Minterm : ข้อนี้คือ AND/OR

### โจทย์ : BCD-8421 ด้วย NAND อย่างเดียว {code=bcd; method=nand}

**จงออกแบบวงจรถอดรหัสจาก BCD-8421 4 บิต เป็นรหัส Decimal โดยใช้ Gate ชนิด NAND อย่างเดียว แสดงผล LED 7 ส่วน**

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="560" height="190" viewBox="0 0 560 190" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<rect x="170" y="14" width="190" height="160" rx="2"/>
<line x1="110" y1="42" x2="170" y2="42"/>
<line x1="110" y1="78" x2="170" y2="78"/>
<line x1="110" y1="114" x2="170" y2="114"/>
<line x1="110" y1="150" x2="170" y2="150"/>
<line x1="360" y1="30" x2="410" y2="30"/>
<line x1="360" y1="51" x2="410" y2="51"/>
<line x1="360" y1="72" x2="410" y2="72"/>
<line x1="360" y1="93" x2="410" y2="93"/>
<line x1="360" y1="114" x2="410" y2="114"/>
<line x1="360" y1="135" x2="410" y2="135"/>
<line x1="360" y1="156" x2="410" y2="156"/>
<rect x="410" y="14" width="110" height="160" rx="2"/>
</g>
<text x="100" y="48" text-anchor="end">A</text>
<text x="100" y="84" text-anchor="end">B</text>
<text x="100" y="120" text-anchor="end">C</text>
<text x="100" y="156" text-anchor="end">D</text>
<text x="265" y="68" text-anchor="middle">BCD-8421</text><text x="265" y="92" text-anchor="middle">to</text><text x="265" y="116" text-anchor="middle">Decimal</text>
<text x="265" y="156" text-anchor="middle" font-size="15">7 Segment Display</text>
<text x="385" y="26" text-anchor="middle" font-size="14">a</text>
<text x="385" y="47" text-anchor="middle" font-size="14">b</text>
<text x="385" y="68" text-anchor="middle" font-size="14">c</text>
<text x="385" y="89" text-anchor="middle" font-size="14">d</text>
<text x="385" y="110" text-anchor="middle" font-size="14">e</text>
<text x="385" y="131" text-anchor="middle" font-size="14">f</text>
<text x="385" y="152" text-anchor="middle" font-size="14">g</text>
<g transform="translate(438,52) scale(0.9)"><path d="M7,4 L37,4 L33,10 L11,10 Z" fill-opacity="1"/><path d="M38,5 L38,35 L32,31 L32,11 Z" fill-opacity="1"/><path d="M38,41 L38,71 L32,65 L32,45 Z" fill-opacity="1"/><path d="M7,72 L37,72 L33,66 L11,66 Z" fill-opacity="1"/><path d="M6,41 L6,71 L12,65 L12,45 Z" fill-opacity="1"/><path d="M6,5 L6,35 L12,31 L12,11 Z" fill-opacity="1"/><path d="M7,38 L11,34 L33,34 L37,38 L33,42 L11,42 Z" fill-opacity="1"/></g>
</svg>
</div>

**ขั้นตอน** 1) เขียนตารางความจริง ($a$ ถึง $g$ ของเลข $0$ ถึง $9$ ; รหัสที่ไม่ใช้เป็น $d$) 2) เลือกเลขที่ต้องการ ดูว่า LED ส่วนใดสว่าง 3) ทำ K-map ของ segment เหล่านั้น ใส่ $1$ (Minterm) และ $d$ 4) ทำลูป อ่านเป็นสมการผลคูณ แล้วรวมด้วยผลบวก (SOP) 5) แปลงสมการให้ใช้ NAND อย่างเดียว โดยคอมพลีเมนต์ 2 ครั้งและใช้ De Morgan 6) เขียนวงจร

โจทย์ในสไลด์ใช้เกต AND/OR และ NAND กับ Minterm : ข้อนี้คือ NAND

### โจทย์ : BCD-8421 ด้วย OR/AND {code=bcd; method=orand}

**จงออกแบบวงจรถอดรหัสจาก BCD-8421 4 บิต เป็นรหัส Decimal โดยใช้ Gate ชนิด OR/AND แสดงผล LED 7 ส่วน**

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="560" height="190" viewBox="0 0 560 190" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<rect x="170" y="14" width="190" height="160" rx="2"/>
<line x1="110" y1="42" x2="170" y2="42"/>
<line x1="110" y1="78" x2="170" y2="78"/>
<line x1="110" y1="114" x2="170" y2="114"/>
<line x1="110" y1="150" x2="170" y2="150"/>
<line x1="360" y1="30" x2="410" y2="30"/>
<line x1="360" y1="51" x2="410" y2="51"/>
<line x1="360" y1="72" x2="410" y2="72"/>
<line x1="360" y1="93" x2="410" y2="93"/>
<line x1="360" y1="114" x2="410" y2="114"/>
<line x1="360" y1="135" x2="410" y2="135"/>
<line x1="360" y1="156" x2="410" y2="156"/>
<rect x="410" y="14" width="110" height="160" rx="2"/>
</g>
<text x="100" y="48" text-anchor="end">A</text>
<text x="100" y="84" text-anchor="end">B</text>
<text x="100" y="120" text-anchor="end">C</text>
<text x="100" y="156" text-anchor="end">D</text>
<text x="265" y="68" text-anchor="middle">BCD-8421</text><text x="265" y="92" text-anchor="middle">to</text><text x="265" y="116" text-anchor="middle">Decimal</text>
<text x="265" y="156" text-anchor="middle" font-size="15">7 Segment Display</text>
<text x="385" y="26" text-anchor="middle" font-size="14">a</text>
<text x="385" y="47" text-anchor="middle" font-size="14">b</text>
<text x="385" y="68" text-anchor="middle" font-size="14">c</text>
<text x="385" y="89" text-anchor="middle" font-size="14">d</text>
<text x="385" y="110" text-anchor="middle" font-size="14">e</text>
<text x="385" y="131" text-anchor="middle" font-size="14">f</text>
<text x="385" y="152" text-anchor="middle" font-size="14">g</text>
<g transform="translate(438,52) scale(0.9)"><path d="M7,4 L37,4 L33,10 L11,10 Z" fill-opacity="1"/><path d="M38,5 L38,35 L32,31 L32,11 Z" fill-opacity="1"/><path d="M38,41 L38,71 L32,65 L32,45 Z" fill-opacity="1"/><path d="M7,72 L37,72 L33,66 L11,66 Z" fill-opacity="1"/><path d="M6,41 L6,71 L12,65 L12,45 Z" fill-opacity="1"/><path d="M6,5 L6,35 L12,31 L12,11 Z" fill-opacity="1"/><path d="M7,38 L11,34 L33,34 L37,38 L33,42 L11,42 Z" fill-opacity="1"/></g>
</svg>
</div>

**ขั้นตอน** 1) เขียนตารางความจริง ($a$ ถึง $g$ ของเลข $0$ ถึง $9$ ; รหัสที่ไม่ใช้เป็น $d$) 2) เลือกเลขที่ต้องการ ดูว่า LED ส่วนใดสว่าง 3) ทำ K-map ของ segment เหล่านั้น ใส่ $0$ (Maxterm) และ $d$ 4) ทำลูป อ่านเป็นสมการผลบวก แล้วรวมด้วยผลคูณ (POS) 5) ไม่ต้องแปลงสมการ ใช้เกตตามสมการได้เลย 6) เขียนวงจร

ตัวเลือกนี้ไม่มีในสไลด์ ใช้หลักการเดียวกัน

### โจทย์ : BCD-8421 ด้วย NOR อย่างเดียว {code=bcd; method=nor}

**จงออกแบบวงจรถอดรหัสจาก BCD-8421 4 บิต เป็นรหัส Decimal โดยใช้ Gate ชนิด NOR อย่างเดียว แสดงผล LED 7 ส่วน**

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="560" height="190" viewBox="0 0 560 190" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<rect x="170" y="14" width="190" height="160" rx="2"/>
<line x1="110" y1="42" x2="170" y2="42"/>
<line x1="110" y1="78" x2="170" y2="78"/>
<line x1="110" y1="114" x2="170" y2="114"/>
<line x1="110" y1="150" x2="170" y2="150"/>
<line x1="360" y1="30" x2="410" y2="30"/>
<line x1="360" y1="51" x2="410" y2="51"/>
<line x1="360" y1="72" x2="410" y2="72"/>
<line x1="360" y1="93" x2="410" y2="93"/>
<line x1="360" y1="114" x2="410" y2="114"/>
<line x1="360" y1="135" x2="410" y2="135"/>
<line x1="360" y1="156" x2="410" y2="156"/>
<rect x="410" y="14" width="110" height="160" rx="2"/>
</g>
<text x="100" y="48" text-anchor="end">A</text>
<text x="100" y="84" text-anchor="end">B</text>
<text x="100" y="120" text-anchor="end">C</text>
<text x="100" y="156" text-anchor="end">D</text>
<text x="265" y="68" text-anchor="middle">BCD-8421</text><text x="265" y="92" text-anchor="middle">to</text><text x="265" y="116" text-anchor="middle">Decimal</text>
<text x="265" y="156" text-anchor="middle" font-size="15">7 Segment Display</text>
<text x="385" y="26" text-anchor="middle" font-size="14">a</text>
<text x="385" y="47" text-anchor="middle" font-size="14">b</text>
<text x="385" y="68" text-anchor="middle" font-size="14">c</text>
<text x="385" y="89" text-anchor="middle" font-size="14">d</text>
<text x="385" y="110" text-anchor="middle" font-size="14">e</text>
<text x="385" y="131" text-anchor="middle" font-size="14">f</text>
<text x="385" y="152" text-anchor="middle" font-size="14">g</text>
<g transform="translate(438,52) scale(0.9)"><path d="M7,4 L37,4 L33,10 L11,10 Z" fill-opacity="1"/><path d="M38,5 L38,35 L32,31 L32,11 Z" fill-opacity="1"/><path d="M38,41 L38,71 L32,65 L32,45 Z" fill-opacity="1"/><path d="M7,72 L37,72 L33,66 L11,66 Z" fill-opacity="1"/><path d="M6,41 L6,71 L12,65 L12,45 Z" fill-opacity="1"/><path d="M6,5 L6,35 L12,31 L12,11 Z" fill-opacity="1"/><path d="M7,38 L11,34 L33,34 L37,38 L33,42 L11,42 Z" fill-opacity="1"/></g>
</svg>
</div>

**ขั้นตอน** 1) เขียนตารางความจริง ($a$ ถึง $g$ ของเลข $0$ ถึง $9$ ; รหัสที่ไม่ใช้เป็น $d$) 2) เลือกเลขที่ต้องการ ดูว่า LED ส่วนใดสว่าง 3) ทำ K-map ของ segment เหล่านั้น ใส่ $0$ (Maxterm) และ $d$ 4) ทำลูป อ่านเป็นสมการผลบวก แล้วรวมด้วยผลคูณ (POS) 5) แปลงสมการให้ใช้ NOR อย่างเดียว โดยคอมพลีเมนต์ 2 ครั้งและใช้ De Morgan 6) เขียนวงจร

ตัวเลือกนี้ไม่มีในสไลด์ ใช้หลักการเดียวกัน

### ตารางความจริงของ BCD-8421 ไป LED 7 ส่วน {code=bcd}

อินพุตคือรหัส BCD-8421 4 บิต $A, B, C, D$ ($A$ เป็น MSB) เอาต์พุต $a$ ถึง $g$ เป็น $1$ เมื่อ LED ส่วนนั้นสว่าง คอลัมน์ Decimal คือเลขที่ต้องการแสดง รหัส $1010$ ถึง $1111$ ไม่มีใช้ จึงเป็น $d$ (don't care)

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="610" height="479" viewBox="0 0 610 479" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.4" fill="none">
<rect x="10" y="10" width="590" height="459"/>
<line x1="10" y1="37" x2="600" y2="37"/>
<line x1="194" y1="10" x2="194" y2="469"/>
<line x1="278" y1="10" x2="278" y2="469"/>
<line x1="10" y1="307" x2="600" y2="307" stroke-dasharray="6 4"/>
</g>
<text x="33" y="29.5" text-anchor="middle" font-size="16">A</text>
<text x="79" y="29.5" text-anchor="middle" font-size="16">B</text>
<text x="125" y="29.5" text-anchor="middle" font-size="16">C</text>
<text x="171" y="29.5" text-anchor="middle" font-size="16">D</text>
<text x="236" y="29.5" text-anchor="middle" font-size="16">Decimal</text>
<text x="301" y="29.5" text-anchor="middle" font-size="16" font-style="italic">a</text>
<text x="347" y="29.5" text-anchor="middle" font-size="16" font-style="italic">b</text>
<text x="393" y="29.5" text-anchor="middle" font-size="16" font-style="italic">c</text>
<text x="439" y="29.5" text-anchor="middle" font-size="16" font-style="italic">d</text>
<text x="485" y="29.5" text-anchor="middle" font-size="16" font-style="italic">e</text>
<text x="531" y="29.5" text-anchor="middle" font-size="16" font-style="italic">f</text>
<text x="577" y="29.5" text-anchor="middle" font-size="16" font-style="italic">g</text>
<text x="33" y="56.5" text-anchor="middle" font-size="16">0</text>
<text x="79" y="56.5" text-anchor="middle" font-size="16">0</text>
<text x="125" y="56.5" text-anchor="middle" font-size="16">0</text>
<text x="171" y="56.5" text-anchor="middle" font-size="16">0</text>
<text x="236" y="56.5" text-anchor="middle" font-size="16">0</text>
<text x="301" y="56.5" text-anchor="middle" font-size="16">1</text>
<text x="347" y="56.5" text-anchor="middle" font-size="16">1</text>
<text x="393" y="56.5" text-anchor="middle" font-size="16">1</text>
<text x="439" y="56.5" text-anchor="middle" font-size="16">1</text>
<text x="485" y="56.5" text-anchor="middle" font-size="16">1</text>
<text x="531" y="56.5" text-anchor="middle" font-size="16">1</text>
<text x="577" y="56.5" text-anchor="middle" font-size="16">0</text>
<text x="33" y="83.5" text-anchor="middle" font-size="16">0</text>
<text x="79" y="83.5" text-anchor="middle" font-size="16">0</text>
<text x="125" y="83.5" text-anchor="middle" font-size="16">0</text>
<text x="171" y="83.5" text-anchor="middle" font-size="16">1</text>
<text x="236" y="83.5" text-anchor="middle" font-size="16">1</text>
<text x="301" y="83.5" text-anchor="middle" font-size="16">0</text>
<text x="347" y="83.5" text-anchor="middle" font-size="16">1</text>
<text x="393" y="83.5" text-anchor="middle" font-size="16">1</text>
<text x="439" y="83.5" text-anchor="middle" font-size="16">0</text>
<text x="485" y="83.5" text-anchor="middle" font-size="16">0</text>
<text x="531" y="83.5" text-anchor="middle" font-size="16">0</text>
<text x="577" y="83.5" text-anchor="middle" font-size="16">0</text>
<text x="33" y="110.5" text-anchor="middle" font-size="16">0</text>
<text x="79" y="110.5" text-anchor="middle" font-size="16">0</text>
<text x="125" y="110.5" text-anchor="middle" font-size="16">1</text>
<text x="171" y="110.5" text-anchor="middle" font-size="16">0</text>
<text x="236" y="110.5" text-anchor="middle" font-size="16">2</text>
<text x="301" y="110.5" text-anchor="middle" font-size="16">1</text>
<text x="347" y="110.5" text-anchor="middle" font-size="16">1</text>
<text x="393" y="110.5" text-anchor="middle" font-size="16">0</text>
<text x="439" y="110.5" text-anchor="middle" font-size="16">1</text>
<text x="485" y="110.5" text-anchor="middle" font-size="16">1</text>
<text x="531" y="110.5" text-anchor="middle" font-size="16">0</text>
<text x="577" y="110.5" text-anchor="middle" font-size="16">1</text>
<text x="33" y="137.5" text-anchor="middle" font-size="16">0</text>
<text x="79" y="137.5" text-anchor="middle" font-size="16">0</text>
<text x="125" y="137.5" text-anchor="middle" font-size="16">1</text>
<text x="171" y="137.5" text-anchor="middle" font-size="16">1</text>
<text x="236" y="137.5" text-anchor="middle" font-size="16">3</text>
<text x="301" y="137.5" text-anchor="middle" font-size="16">1</text>
<text x="347" y="137.5" text-anchor="middle" font-size="16">1</text>
<text x="393" y="137.5" text-anchor="middle" font-size="16">1</text>
<text x="439" y="137.5" text-anchor="middle" font-size="16">1</text>
<text x="485" y="137.5" text-anchor="middle" font-size="16">0</text>
<text x="531" y="137.5" text-anchor="middle" font-size="16">0</text>
<text x="577" y="137.5" text-anchor="middle" font-size="16">1</text>
<text x="33" y="164.5" text-anchor="middle" font-size="16">0</text>
<text x="79" y="164.5" text-anchor="middle" font-size="16">1</text>
<text x="125" y="164.5" text-anchor="middle" font-size="16">0</text>
<text x="171" y="164.5" text-anchor="middle" font-size="16">0</text>
<text x="236" y="164.5" text-anchor="middle" font-size="16">4</text>
<text x="301" y="164.5" text-anchor="middle" font-size="16">0</text>
<text x="347" y="164.5" text-anchor="middle" font-size="16">1</text>
<text x="393" y="164.5" text-anchor="middle" font-size="16">1</text>
<text x="439" y="164.5" text-anchor="middle" font-size="16">0</text>
<text x="485" y="164.5" text-anchor="middle" font-size="16">0</text>
<text x="531" y="164.5" text-anchor="middle" font-size="16">1</text>
<text x="577" y="164.5" text-anchor="middle" font-size="16">1</text>
<text x="33" y="191.5" text-anchor="middle" font-size="16">0</text>
<text x="79" y="191.5" text-anchor="middle" font-size="16">1</text>
<text x="125" y="191.5" text-anchor="middle" font-size="16">0</text>
<text x="171" y="191.5" text-anchor="middle" font-size="16">1</text>
<text x="236" y="191.5" text-anchor="middle" font-size="16">5</text>
<text x="301" y="191.5" text-anchor="middle" font-size="16">1</text>
<text x="347" y="191.5" text-anchor="middle" font-size="16">0</text>
<text x="393" y="191.5" text-anchor="middle" font-size="16">1</text>
<text x="439" y="191.5" text-anchor="middle" font-size="16">1</text>
<text x="485" y="191.5" text-anchor="middle" font-size="16">0</text>
<text x="531" y="191.5" text-anchor="middle" font-size="16">1</text>
<text x="577" y="191.5" text-anchor="middle" font-size="16">1</text>
<text x="33" y="218.5" text-anchor="middle" font-size="16">0</text>
<text x="79" y="218.5" text-anchor="middle" font-size="16">1</text>
<text x="125" y="218.5" text-anchor="middle" font-size="16">1</text>
<text x="171" y="218.5" text-anchor="middle" font-size="16">0</text>
<text x="236" y="218.5" text-anchor="middle" font-size="16">6</text>
<text x="301" y="218.5" text-anchor="middle" font-size="16">1</text>
<text x="347" y="218.5" text-anchor="middle" font-size="16">0</text>
<text x="393" y="218.5" text-anchor="middle" font-size="16">1</text>
<text x="439" y="218.5" text-anchor="middle" font-size="16">1</text>
<text x="485" y="218.5" text-anchor="middle" font-size="16">1</text>
<text x="531" y="218.5" text-anchor="middle" font-size="16">1</text>
<text x="577" y="218.5" text-anchor="middle" font-size="16">1</text>
<text x="33" y="245.5" text-anchor="middle" font-size="16">0</text>
<text x="79" y="245.5" text-anchor="middle" font-size="16">1</text>
<text x="125" y="245.5" text-anchor="middle" font-size="16">1</text>
<text x="171" y="245.5" text-anchor="middle" font-size="16">1</text>
<text x="236" y="245.5" text-anchor="middle" font-size="16">7</text>
<text x="301" y="245.5" text-anchor="middle" font-size="16">1</text>
<text x="347" y="245.5" text-anchor="middle" font-size="16">1</text>
<text x="393" y="245.5" text-anchor="middle" font-size="16">1</text>
<text x="439" y="245.5" text-anchor="middle" font-size="16">0</text>
<text x="485" y="245.5" text-anchor="middle" font-size="16">0</text>
<text x="531" y="245.5" text-anchor="middle" font-size="16">0</text>
<text x="577" y="245.5" text-anchor="middle" font-size="16">0</text>
<text x="33" y="272.5" text-anchor="middle" font-size="16">1</text>
<text x="79" y="272.5" text-anchor="middle" font-size="16">0</text>
<text x="125" y="272.5" text-anchor="middle" font-size="16">0</text>
<text x="171" y="272.5" text-anchor="middle" font-size="16">0</text>
<text x="236" y="272.5" text-anchor="middle" font-size="16">8</text>
<text x="301" y="272.5" text-anchor="middle" font-size="16">1</text>
<text x="347" y="272.5" text-anchor="middle" font-size="16">1</text>
<text x="393" y="272.5" text-anchor="middle" font-size="16">1</text>
<text x="439" y="272.5" text-anchor="middle" font-size="16">1</text>
<text x="485" y="272.5" text-anchor="middle" font-size="16">1</text>
<text x="531" y="272.5" text-anchor="middle" font-size="16">1</text>
<text x="577" y="272.5" text-anchor="middle" font-size="16">1</text>
<text x="33" y="299.5" text-anchor="middle" font-size="16">1</text>
<text x="79" y="299.5" text-anchor="middle" font-size="16">0</text>
<text x="125" y="299.5" text-anchor="middle" font-size="16">0</text>
<text x="171" y="299.5" text-anchor="middle" font-size="16">1</text>
<text x="236" y="299.5" text-anchor="middle" font-size="16">9</text>
<text x="301" y="299.5" text-anchor="middle" font-size="16">1</text>
<text x="347" y="299.5" text-anchor="middle" font-size="16">1</text>
<text x="393" y="299.5" text-anchor="middle" font-size="16">1</text>
<text x="439" y="299.5" text-anchor="middle" font-size="16">1</text>
<text x="485" y="299.5" text-anchor="middle" font-size="16">0</text>
<text x="531" y="299.5" text-anchor="middle" font-size="16">1</text>
<text x="577" y="299.5" text-anchor="middle" font-size="16">1</text>
<text x="33" y="326.5" text-anchor="middle" font-size="16">1</text>
<text x="79" y="326.5" text-anchor="middle" font-size="16">0</text>
<text x="125" y="326.5" text-anchor="middle" font-size="16">1</text>
<text x="171" y="326.5" text-anchor="middle" font-size="16">0</text>
<text x="236" y="326.5" text-anchor="middle" font-size="16">d</text>
<text x="301" y="326.5" text-anchor="middle" font-size="16">d</text>
<text x="347" y="326.5" text-anchor="middle" font-size="16">d</text>
<text x="393" y="326.5" text-anchor="middle" font-size="16">d</text>
<text x="439" y="326.5" text-anchor="middle" font-size="16">d</text>
<text x="485" y="326.5" text-anchor="middle" font-size="16">d</text>
<text x="531" y="326.5" text-anchor="middle" font-size="16">d</text>
<text x="577" y="326.5" text-anchor="middle" font-size="16">d</text>
<text x="33" y="353.5" text-anchor="middle" font-size="16">1</text>
<text x="79" y="353.5" text-anchor="middle" font-size="16">0</text>
<text x="125" y="353.5" text-anchor="middle" font-size="16">1</text>
<text x="171" y="353.5" text-anchor="middle" font-size="16">1</text>
<text x="236" y="353.5" text-anchor="middle" font-size="16">d</text>
<text x="301" y="353.5" text-anchor="middle" font-size="16">d</text>
<text x="347" y="353.5" text-anchor="middle" font-size="16">d</text>
<text x="393" y="353.5" text-anchor="middle" font-size="16">d</text>
<text x="439" y="353.5" text-anchor="middle" font-size="16">d</text>
<text x="485" y="353.5" text-anchor="middle" font-size="16">d</text>
<text x="531" y="353.5" text-anchor="middle" font-size="16">d</text>
<text x="577" y="353.5" text-anchor="middle" font-size="16">d</text>
<text x="33" y="380.5" text-anchor="middle" font-size="16">1</text>
<text x="79" y="380.5" text-anchor="middle" font-size="16">1</text>
<text x="125" y="380.5" text-anchor="middle" font-size="16">0</text>
<text x="171" y="380.5" text-anchor="middle" font-size="16">0</text>
<text x="236" y="380.5" text-anchor="middle" font-size="16">d</text>
<text x="301" y="380.5" text-anchor="middle" font-size="16">d</text>
<text x="347" y="380.5" text-anchor="middle" font-size="16">d</text>
<text x="393" y="380.5" text-anchor="middle" font-size="16">d</text>
<text x="439" y="380.5" text-anchor="middle" font-size="16">d</text>
<text x="485" y="380.5" text-anchor="middle" font-size="16">d</text>
<text x="531" y="380.5" text-anchor="middle" font-size="16">d</text>
<text x="577" y="380.5" text-anchor="middle" font-size="16">d</text>
<text x="33" y="407.5" text-anchor="middle" font-size="16">1</text>
<text x="79" y="407.5" text-anchor="middle" font-size="16">1</text>
<text x="125" y="407.5" text-anchor="middle" font-size="16">0</text>
<text x="171" y="407.5" text-anchor="middle" font-size="16">1</text>
<text x="236" y="407.5" text-anchor="middle" font-size="16">d</text>
<text x="301" y="407.5" text-anchor="middle" font-size="16">d</text>
<text x="347" y="407.5" text-anchor="middle" font-size="16">d</text>
<text x="393" y="407.5" text-anchor="middle" font-size="16">d</text>
<text x="439" y="407.5" text-anchor="middle" font-size="16">d</text>
<text x="485" y="407.5" text-anchor="middle" font-size="16">d</text>
<text x="531" y="407.5" text-anchor="middle" font-size="16">d</text>
<text x="577" y="407.5" text-anchor="middle" font-size="16">d</text>
<text x="33" y="434.5" text-anchor="middle" font-size="16">1</text>
<text x="79" y="434.5" text-anchor="middle" font-size="16">1</text>
<text x="125" y="434.5" text-anchor="middle" font-size="16">1</text>
<text x="171" y="434.5" text-anchor="middle" font-size="16">0</text>
<text x="236" y="434.5" text-anchor="middle" font-size="16">d</text>
<text x="301" y="434.5" text-anchor="middle" font-size="16">d</text>
<text x="347" y="434.5" text-anchor="middle" font-size="16">d</text>
<text x="393" y="434.5" text-anchor="middle" font-size="16">d</text>
<text x="439" y="434.5" text-anchor="middle" font-size="16">d</text>
<text x="485" y="434.5" text-anchor="middle" font-size="16">d</text>
<text x="531" y="434.5" text-anchor="middle" font-size="16">d</text>
<text x="577" y="434.5" text-anchor="middle" font-size="16">d</text>
<text x="33" y="461.5" text-anchor="middle" font-size="16">1</text>
<text x="79" y="461.5" text-anchor="middle" font-size="16">1</text>
<text x="125" y="461.5" text-anchor="middle" font-size="16">1</text>
<text x="171" y="461.5" text-anchor="middle" font-size="16">1</text>
<text x="236" y="461.5" text-anchor="middle" font-size="16">d</text>
<text x="301" y="461.5" text-anchor="middle" font-size="16">d</text>
<text x="347" y="461.5" text-anchor="middle" font-size="16">d</text>
<text x="393" y="461.5" text-anchor="middle" font-size="16">d</text>
<text x="439" y="461.5" text-anchor="middle" font-size="16">d</text>
<text x="485" y="461.5" text-anchor="middle" font-size="16">d</text>
<text x="531" y="461.5" text-anchor="middle" font-size="16">d</text>
<text x="577" y="461.5" text-anchor="middle" font-size="16">d</text>
</svg>
</div>

### เลข 0 ใช้ segment อะไรบ้าง (BCD-8421) {code=bcd; digit=0}

เลข $0$ ในรหัส BCD-8421 คือ $ABCD = 0000$ ดูแถวนี้ในตารางความจริง : LED ที่สว่าง ($1$) คือ segment $a, b, c, d, e, f$ ส่วน segment $g$ ดับ ($0$) ดังนั้นเลขนี้ต้องออกแบบเฉพาะ segment $a, b, c, d, e, f$ เท่านั้น

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="74" height="118" viewBox="0 0 74 118" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(10,8) scale(1.1)"><path d="M7,4 L37,4 L33,10 L11,10 Z" fill-opacity="1"/><path d="M38,5 L38,35 L32,31 L32,11 Z" fill-opacity="1"/><path d="M38,41 L38,71 L32,65 L32,45 Z" fill-opacity="1"/><path d="M7,72 L37,72 L33,66 L11,66 Z" fill-opacity="1"/><path d="M6,41 L6,71 L12,65 L12,45 Z" fill-opacity="1"/><path d="M6,5 L6,35 L12,31 L12,11 Z" fill-opacity="1"/><path d="M7,38 L11,34 L33,34 L37,38 L33,42 L11,42 Z" fill-opacity="0.1"/></g>
<text x="34.2" y="108" text-anchor="middle">0</text>
</svg>
</div>

### เลข 1 ใช้ segment อะไรบ้าง (BCD-8421) {code=bcd; digit=1}

เลข $1$ ในรหัส BCD-8421 คือ $ABCD = 0001$ ดูแถวนี้ในตารางความจริง : LED ที่สว่าง ($1$) คือ segment $b, c$ ส่วน segment $a, d, e, f, g$ ดับ ($0$) ดังนั้นเลขนี้ต้องออกแบบเฉพาะ segment $b, c$ เท่านั้น

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="74" height="118" viewBox="0 0 74 118" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(10,8) scale(1.1)"><path d="M7,4 L37,4 L33,10 L11,10 Z" fill-opacity="0.1"/><path d="M38,5 L38,35 L32,31 L32,11 Z" fill-opacity="1"/><path d="M38,41 L38,71 L32,65 L32,45 Z" fill-opacity="1"/><path d="M7,72 L37,72 L33,66 L11,66 Z" fill-opacity="0.1"/><path d="M6,41 L6,71 L12,65 L12,45 Z" fill-opacity="0.1"/><path d="M6,5 L6,35 L12,31 L12,11 Z" fill-opacity="0.1"/><path d="M7,38 L11,34 L33,34 L37,38 L33,42 L11,42 Z" fill-opacity="0.1"/></g>
<text x="34.2" y="108" text-anchor="middle">1</text>
</svg>
</div>

### เลข 2 ใช้ segment อะไรบ้าง (BCD-8421) {code=bcd; digit=2}

เลข $2$ ในรหัส BCD-8421 คือ $ABCD = 0010$ ดูแถวนี้ในตารางความจริง : LED ที่สว่าง ($1$) คือ segment $a, b, d, e, g$ ส่วน segment $c, f$ ดับ ($0$) ดังนั้นเลขนี้ต้องออกแบบเฉพาะ segment $a, b, d, e, g$ เท่านั้น

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="74" height="118" viewBox="0 0 74 118" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(10,8) scale(1.1)"><path d="M7,4 L37,4 L33,10 L11,10 Z" fill-opacity="1"/><path d="M38,5 L38,35 L32,31 L32,11 Z" fill-opacity="1"/><path d="M38,41 L38,71 L32,65 L32,45 Z" fill-opacity="0.1"/><path d="M7,72 L37,72 L33,66 L11,66 Z" fill-opacity="1"/><path d="M6,41 L6,71 L12,65 L12,45 Z" fill-opacity="1"/><path d="M6,5 L6,35 L12,31 L12,11 Z" fill-opacity="0.1"/><path d="M7,38 L11,34 L33,34 L37,38 L33,42 L11,42 Z" fill-opacity="1"/></g>
<text x="34.2" y="108" text-anchor="middle">2</text>
</svg>
</div>

### เลข 3 ใช้ segment อะไรบ้าง (BCD-8421) {code=bcd; digit=3}

เลข $3$ ในรหัส BCD-8421 คือ $ABCD = 0011$ ดูแถวนี้ในตารางความจริง : LED ที่สว่าง ($1$) คือ segment $a, b, c, d, g$ ส่วน segment $e, f$ ดับ ($0$) ดังนั้นเลขนี้ต้องออกแบบเฉพาะ segment $a, b, c, d, g$ เท่านั้น

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="74" height="118" viewBox="0 0 74 118" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(10,8) scale(1.1)"><path d="M7,4 L37,4 L33,10 L11,10 Z" fill-opacity="1"/><path d="M38,5 L38,35 L32,31 L32,11 Z" fill-opacity="1"/><path d="M38,41 L38,71 L32,65 L32,45 Z" fill-opacity="1"/><path d="M7,72 L37,72 L33,66 L11,66 Z" fill-opacity="1"/><path d="M6,41 L6,71 L12,65 L12,45 Z" fill-opacity="0.1"/><path d="M6,5 L6,35 L12,31 L12,11 Z" fill-opacity="0.1"/><path d="M7,38 L11,34 L33,34 L37,38 L33,42 L11,42 Z" fill-opacity="1"/></g>
<text x="34.2" y="108" text-anchor="middle">3</text>
</svg>
</div>

### เลข 4 ใช้ segment อะไรบ้าง (BCD-8421) {code=bcd; digit=4}

เลข $4$ ในรหัส BCD-8421 คือ $ABCD = 0100$ ดูแถวนี้ในตารางความจริง : LED ที่สว่าง ($1$) คือ segment $b, c, f, g$ ส่วน segment $a, d, e$ ดับ ($0$) ดังนั้นเลขนี้ต้องออกแบบเฉพาะ segment $b, c, f, g$ เท่านั้น

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="74" height="118" viewBox="0 0 74 118" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(10,8) scale(1.1)"><path d="M7,4 L37,4 L33,10 L11,10 Z" fill-opacity="0.1"/><path d="M38,5 L38,35 L32,31 L32,11 Z" fill-opacity="1"/><path d="M38,41 L38,71 L32,65 L32,45 Z" fill-opacity="1"/><path d="M7,72 L37,72 L33,66 L11,66 Z" fill-opacity="0.1"/><path d="M6,41 L6,71 L12,65 L12,45 Z" fill-opacity="0.1"/><path d="M6,5 L6,35 L12,31 L12,11 Z" fill-opacity="1"/><path d="M7,38 L11,34 L33,34 L37,38 L33,42 L11,42 Z" fill-opacity="1"/></g>
<text x="34.2" y="108" text-anchor="middle">4</text>
</svg>
</div>

### เลข 5 ใช้ segment อะไรบ้าง (BCD-8421) {code=bcd; digit=5}

เลข $5$ ในรหัส BCD-8421 คือ $ABCD = 0101$ ดูแถวนี้ในตารางความจริง : LED ที่สว่าง ($1$) คือ segment $a, c, d, f, g$ ส่วน segment $b, e$ ดับ ($0$) ดังนั้นเลขนี้ต้องออกแบบเฉพาะ segment $a, c, d, f, g$ เท่านั้น

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="74" height="118" viewBox="0 0 74 118" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(10,8) scale(1.1)"><path d="M7,4 L37,4 L33,10 L11,10 Z" fill-opacity="1"/><path d="M38,5 L38,35 L32,31 L32,11 Z" fill-opacity="0.1"/><path d="M38,41 L38,71 L32,65 L32,45 Z" fill-opacity="1"/><path d="M7,72 L37,72 L33,66 L11,66 Z" fill-opacity="1"/><path d="M6,41 L6,71 L12,65 L12,45 Z" fill-opacity="0.1"/><path d="M6,5 L6,35 L12,31 L12,11 Z" fill-opacity="1"/><path d="M7,38 L11,34 L33,34 L37,38 L33,42 L11,42 Z" fill-opacity="1"/></g>
<text x="34.2" y="108" text-anchor="middle">5</text>
</svg>
</div>

### เลข 6 ใช้ segment อะไรบ้าง (BCD-8421) {code=bcd; digit=6}

เลข $6$ ในรหัส BCD-8421 คือ $ABCD = 0110$ ดูแถวนี้ในตารางความจริง : LED ที่สว่าง ($1$) คือ segment $a, c, d, e, f, g$ ส่วน segment $b$ ดับ ($0$) ดังนั้นเลขนี้ต้องออกแบบเฉพาะ segment $a, c, d, e, f, g$ เท่านั้น

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="74" height="118" viewBox="0 0 74 118" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(10,8) scale(1.1)"><path d="M7,4 L37,4 L33,10 L11,10 Z" fill-opacity="1"/><path d="M38,5 L38,35 L32,31 L32,11 Z" fill-opacity="0.1"/><path d="M38,41 L38,71 L32,65 L32,45 Z" fill-opacity="1"/><path d="M7,72 L37,72 L33,66 L11,66 Z" fill-opacity="1"/><path d="M6,41 L6,71 L12,65 L12,45 Z" fill-opacity="1"/><path d="M6,5 L6,35 L12,31 L12,11 Z" fill-opacity="1"/><path d="M7,38 L11,34 L33,34 L37,38 L33,42 L11,42 Z" fill-opacity="1"/></g>
<text x="34.2" y="108" text-anchor="middle">6</text>
</svg>
</div>

### เลข 7 ใช้ segment อะไรบ้าง (BCD-8421) {code=bcd; digit=7}

เลข $7$ ในรหัส BCD-8421 คือ $ABCD = 0111$ ดูแถวนี้ในตารางความจริง : LED ที่สว่าง ($1$) คือ segment $a, b, c$ ส่วน segment $d, e, f, g$ ดับ ($0$) ดังนั้นเลขนี้ต้องออกแบบเฉพาะ segment $a, b, c$ เท่านั้น

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="74" height="118" viewBox="0 0 74 118" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(10,8) scale(1.1)"><path d="M7,4 L37,4 L33,10 L11,10 Z" fill-opacity="1"/><path d="M38,5 L38,35 L32,31 L32,11 Z" fill-opacity="1"/><path d="M38,41 L38,71 L32,65 L32,45 Z" fill-opacity="1"/><path d="M7,72 L37,72 L33,66 L11,66 Z" fill-opacity="0.1"/><path d="M6,41 L6,71 L12,65 L12,45 Z" fill-opacity="0.1"/><path d="M6,5 L6,35 L12,31 L12,11 Z" fill-opacity="0.1"/><path d="M7,38 L11,34 L33,34 L37,38 L33,42 L11,42 Z" fill-opacity="0.1"/></g>
<text x="34.2" y="108" text-anchor="middle">7</text>
</svg>
</div>

### เลข 8 ใช้ segment อะไรบ้าง (BCD-8421) {code=bcd; digit=8}

เลข $8$ ในรหัส BCD-8421 คือ $ABCD = 1000$ ดูแถวนี้ในตารางความจริง : LED ที่สว่าง ($1$) คือ segment $a, b, c, d, e, f, g$ ครบทั้ง 7 ส่วน ไม่มี segment ที่ดับ ดังนั้นเลขนี้ต้องออกแบบเฉพาะ segment $a, b, c, d, e, f, g$ เท่านั้น

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="74" height="118" viewBox="0 0 74 118" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(10,8) scale(1.1)"><path d="M7,4 L37,4 L33,10 L11,10 Z" fill-opacity="1"/><path d="M38,5 L38,35 L32,31 L32,11 Z" fill-opacity="1"/><path d="M38,41 L38,71 L32,65 L32,45 Z" fill-opacity="1"/><path d="M7,72 L37,72 L33,66 L11,66 Z" fill-opacity="1"/><path d="M6,41 L6,71 L12,65 L12,45 Z" fill-opacity="1"/><path d="M6,5 L6,35 L12,31 L12,11 Z" fill-opacity="1"/><path d="M7,38 L11,34 L33,34 L37,38 L33,42 L11,42 Z" fill-opacity="1"/></g>
<text x="34.2" y="108" text-anchor="middle">8</text>
</svg>
</div>

### เลข 9 ใช้ segment อะไรบ้าง (BCD-8421) {code=bcd; digit=9}

เลข $9$ ในรหัส BCD-8421 คือ $ABCD = 1001$ ดูแถวนี้ในตารางความจริง : LED ที่สว่าง ($1$) คือ segment $a, b, c, d, f, g$ ส่วน segment $e$ ดับ ($0$) ดังนั้นเลขนี้ต้องออกแบบเฉพาะ segment $a, b, c, d, f, g$ เท่านั้น

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="74" height="118" viewBox="0 0 74 118" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(10,8) scale(1.1)"><path d="M7,4 L37,4 L33,10 L11,10 Z" fill-opacity="1"/><path d="M38,5 L38,35 L32,31 L32,11 Z" fill-opacity="1"/><path d="M38,41 L38,71 L32,65 L32,45 Z" fill-opacity="1"/><path d="M7,72 L37,72 L33,66 L11,66 Z" fill-opacity="1"/><path d="M6,41 L6,71 L12,65 L12,45 Z" fill-opacity="0.1"/><path d="M6,5 L6,35 L12,31 L12,11 Z" fill-opacity="1"/><path d="M7,38 L11,34 L33,34 L37,38 L33,42 L11,42 Z" fill-opacity="1"/></g>
<text x="34.2" y="108" text-anchor="middle">9</text>
</svg>
</div>

### หาสมการของ segment a (BCD-8421, Minterm) {code=bcd; method=andor,nand; digit=0,2,3,5,6,7,8,9}

$\mathbf{Sol}^{n}$

จากตารางความจริง ช่องที่ $a = 1$ คือ เลขรหัส $0,2,3,5,6,7,8,9$ และช่องที่เป็น $d$ คือ $10,11,12,13,14,15$

$a = \sum m(0,2,3,5,6,7,8,9) + d(10,11,12,13,14,15)$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="296" height="280" viewBox="0 0 296 280" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.6" fill="none">
<rect x="66" y="52" width="216" height="216"/>
<line x1="120" y1="52" x2="120" y2="268"/>
<line x1="66" y1="106" x2="282" y2="106"/>
<line x1="174" y1="52" x2="174" y2="268"/>
<line x1="66" y1="160" x2="282" y2="160"/>
<line x1="228" y1="52" x2="228" y2="268"/>
<line x1="66" y1="214" x2="282" y2="214"/>
<line x1="8" y1="8" x2="66" y2="52"/>
</g>
<text x="93" y="37" text-anchor="middle">00</text>
<text x="147" y="37" text-anchor="middle">01</text>
<text x="201" y="37" text-anchor="middle">11</text>
<text x="255" y="37" text-anchor="middle">10</text>
<text x="57" y="85" text-anchor="end">00</text>
<text x="57" y="139" text-anchor="end">01</text>
<text x="57" y="193" text-anchor="end">11</text>
<text x="57" y="247" text-anchor="end">10</text>
<text x="60" y="18" text-anchor="end">AB</text><text x="10" y="40">CD</text>
<text x="115" y="65" text-anchor="end" font-size="11" fill-opacity="0.65">0</text>
<text x="93" y="87" text-anchor="middle" font-size="22">1</text>
<text x="169" y="65" text-anchor="end" font-size="11" fill-opacity="0.65">4</text>
<text x="223" y="65" text-anchor="end" font-size="11" fill-opacity="0.65">12</text>
<text x="201" y="87" text-anchor="middle" font-size="22">d</text>
<text x="277" y="65" text-anchor="end" font-size="11" fill-opacity="0.65">8</text>
<text x="255" y="87" text-anchor="middle" font-size="22">1</text>
<text x="115" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">1</text>
<text x="169" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">5</text>
<text x="147" y="141" text-anchor="middle" font-size="22">1</text>
<text x="223" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">13</text>
<text x="201" y="141" text-anchor="middle" font-size="22">d</text>
<text x="277" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">9</text>
<text x="255" y="141" text-anchor="middle" font-size="22">1</text>
<text x="115" y="173" text-anchor="end" font-size="11" fill-opacity="0.65">3</text>
<text x="93" y="195" text-anchor="middle" font-size="22">1</text>
<text x="169" y="173" text-anchor="end" font-size="11" fill-opacity="0.65">7</text>
<text x="147" y="195" text-anchor="middle" font-size="22">1</text>
<text x="223" y="173" text-anchor="end" font-size="11" fill-opacity="0.65">15</text>
<text x="201" y="195" text-anchor="middle" font-size="22">d</text>
<text x="277" y="173" text-anchor="end" font-size="11" fill-opacity="0.65">11</text>
<text x="255" y="195" text-anchor="middle" font-size="22">d</text>
<text x="115" y="227" text-anchor="end" font-size="11" fill-opacity="0.65">2</text>
<text x="93" y="249" text-anchor="middle" font-size="22">1</text>
<text x="169" y="227" text-anchor="end" font-size="11" fill-opacity="0.65">6</text>
<text x="147" y="249" text-anchor="middle" font-size="22">1</text>
<text x="223" y="227" text-anchor="end" font-size="11" fill-opacity="0.65">14</text>
<text x="201" y="249" text-anchor="middle" font-size="22">d</text>
<text x="277" y="227" text-anchor="end" font-size="11" fill-opacity="0.65">10</text>
<text x="255" y="249" text-anchor="middle" font-size="22">d</text>
<path d="M187.5,56.5 L268.5,56.5 M277.5,65.5 L277.5,254.5 M268.5,263.5 L187.5,263.5 M178.5,254.5 L178.5,65.5 M178.5,65.5 A9,9 0 0 1 187.5,56.5 M268.5,56.5 A9,9 0 0 1 277.5,65.5 M277.5,254.5 A9,9 0 0 1 268.5,263.5 M187.5,263.5 A9,9 0 0 1 178.5,254.5" stroke="#e8743b" stroke-width="2.6" fill="none"/>
<text x="177" y="67" font-size="14" fill="#e8743b" font-weight="bold">1</text>
<path d="M83,168 L265,168 M274,177 L274,251 M265,260 L83,260 M74,251 L74,177 M74,177 A9,9 0 0 1 83,168 M265,168 A9,9 0 0 1 274,177 M274,251 A9,9 0 0 1 265,260 M83,260 A9,9 0 0 1 74,251" stroke="#3b8be8" stroke-width="2.6" fill="none"/>
<text x="69" y="175" font-size="14" fill="#3b8be8" font-weight="bold">2</text>
<path d="M140.5,117.5 L207.5,117.5 M216.5,126.5 L216.5,193.5 M207.5,202.5 L140.5,202.5 M131.5,193.5 L131.5,126.5 M131.5,126.5 A9,9 0 0 1 140.5,117.5 M207.5,117.5 A9,9 0 0 1 216.5,126.5 M216.5,193.5 A9,9 0 0 1 207.5,202.5 M140.5,202.5 A9,9 0 0 1 131.5,193.5" stroke="#2fae5f" stroke-width="2.6" fill="none"/>
<text x="123" y="121" font-size="14" fill="#2fae5f" font-weight="bold">3</text>
<path d="M105,52 L105,82 M96,91 L66,91 M105,82 A9,9 0 0 1 96,91" stroke="#a855f7" stroke-width="2.6" fill="none"/>
<text x="69" y="67" font-size="14" fill="#a855f7" font-weight="bold">4</text>
<path d="M282,91 L252,91 M243,82 L243,52 M252,91 A9,9 0 0 1 243,82" stroke="#a855f7" stroke-width="2.6" fill="none"/>
<path d="M66,229 L96,229 M105,238 L105,268 M96,229 A9,9 0 0 1 105,238" stroke="#a855f7" stroke-width="2.6" fill="none"/>
<path d="M252,229 L282,229 M243,268 L243,238 M243,238 A9,9 0 0 1 252,229" stroke="#a855f7" stroke-width="2.6" fill="none"/>
</svg>
</div>

- ลูปสีส้ม (ช่อง $8,9,10,11,12,13,14,15$) : $A=1 \Rightarrow A$
- ลูปสีน้ำเงิน (ช่อง $2,3,6,7,10,11,14,15$) : $C=1 \Rightarrow C$
- ลูปสีเขียว (ช่อง $5,7,13,15$) : $B=1,\ D=1 \Rightarrow BD$
- ลูปสีม่วง (ช่อง $0,2,8,10$) : $B=0,\ D=0 \Rightarrow \overline{B}\,\overline{D}$

$\mathbf{Ans}\quad a = A+C+BD+\overline{B}\,\overline{D}$

### หาสมการของ segment b (BCD-8421, Minterm) {code=bcd; method=andor,nand; digit=0,1,2,3,4,7,8,9}

$\mathbf{Sol}^{n}$

จากตารางความจริง ช่องที่ $b = 1$ คือ เลขรหัส $0,1,2,3,4,7,8,9$ และช่องที่เป็น $d$ คือ $10,11,12,13,14,15$

$b = \sum m(0,1,2,3,4,7,8,9) + d(10,11,12,13,14,15)$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="296" height="280" viewBox="0 0 296 280" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.6" fill="none">
<rect x="66" y="52" width="216" height="216"/>
<line x1="120" y1="52" x2="120" y2="268"/>
<line x1="66" y1="106" x2="282" y2="106"/>
<line x1="174" y1="52" x2="174" y2="268"/>
<line x1="66" y1="160" x2="282" y2="160"/>
<line x1="228" y1="52" x2="228" y2="268"/>
<line x1="66" y1="214" x2="282" y2="214"/>
<line x1="8" y1="8" x2="66" y2="52"/>
</g>
<text x="93" y="37" text-anchor="middle">00</text>
<text x="147" y="37" text-anchor="middle">01</text>
<text x="201" y="37" text-anchor="middle">11</text>
<text x="255" y="37" text-anchor="middle">10</text>
<text x="57" y="85" text-anchor="end">00</text>
<text x="57" y="139" text-anchor="end">01</text>
<text x="57" y="193" text-anchor="end">11</text>
<text x="57" y="247" text-anchor="end">10</text>
<text x="60" y="18" text-anchor="end">AB</text><text x="10" y="40">CD</text>
<text x="115" y="65" text-anchor="end" font-size="11" fill-opacity="0.65">0</text>
<text x="93" y="87" text-anchor="middle" font-size="22">1</text>
<text x="169" y="65" text-anchor="end" font-size="11" fill-opacity="0.65">4</text>
<text x="147" y="87" text-anchor="middle" font-size="22">1</text>
<text x="223" y="65" text-anchor="end" font-size="11" fill-opacity="0.65">12</text>
<text x="201" y="87" text-anchor="middle" font-size="22">d</text>
<text x="277" y="65" text-anchor="end" font-size="11" fill-opacity="0.65">8</text>
<text x="255" y="87" text-anchor="middle" font-size="22">1</text>
<text x="115" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">1</text>
<text x="93" y="141" text-anchor="middle" font-size="22">1</text>
<text x="169" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">5</text>
<text x="223" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">13</text>
<text x="201" y="141" text-anchor="middle" font-size="22">d</text>
<text x="277" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">9</text>
<text x="255" y="141" text-anchor="middle" font-size="22">1</text>
<text x="115" y="173" text-anchor="end" font-size="11" fill-opacity="0.65">3</text>
<text x="93" y="195" text-anchor="middle" font-size="22">1</text>
<text x="169" y="173" text-anchor="end" font-size="11" fill-opacity="0.65">7</text>
<text x="147" y="195" text-anchor="middle" font-size="22">1</text>
<text x="223" y="173" text-anchor="end" font-size="11" fill-opacity="0.65">15</text>
<text x="201" y="195" text-anchor="middle" font-size="22">d</text>
<text x="277" y="173" text-anchor="end" font-size="11" fill-opacity="0.65">11</text>
<text x="255" y="195" text-anchor="middle" font-size="22">d</text>
<text x="115" y="227" text-anchor="end" font-size="11" fill-opacity="0.65">2</text>
<text x="93" y="249" text-anchor="middle" font-size="22">1</text>
<text x="169" y="227" text-anchor="end" font-size="11" fill-opacity="0.65">6</text>
<text x="223" y="227" text-anchor="end" font-size="11" fill-opacity="0.65">14</text>
<text x="201" y="249" text-anchor="middle" font-size="22">d</text>
<text x="277" y="227" text-anchor="end" font-size="11" fill-opacity="0.65">10</text>
<text x="255" y="249" text-anchor="middle" font-size="22">d</text>
<path d="M66,56.5 L106.5,56.5 M115.5,65.5 L115.5,254.5 M106.5,263.5 L66,263.5 M106.5,56.5 A9,9 0 0 1 115.5,65.5 M115.5,254.5 A9,9 0 0 1 106.5,263.5" stroke="#e8743b" stroke-width="2.6" fill="none"/>
<text x="69" y="67" font-size="14" fill="#e8743b" font-weight="bold">1</text>
<path d="M241.5,56.5 L282,56.5 M282,263.5 L241.5,263.5 M232.5,254.5 L232.5,65.5 M232.5,65.5 A9,9 0 0 1 241.5,56.5 M241.5,263.5 A9,9 0 0 1 232.5,254.5" stroke="#e8743b" stroke-width="2.6" fill="none"/>
<path d="M83,60 L265,60 M274,69 L274,89 M265,98 L83,98 M74,89 L74,69 M74,69 A9,9 0 0 1 83,60 M265,60 A9,9 0 0 1 274,69 M274,89 A9,9 0 0 1 265,98 M83,98 A9,9 0 0 1 74,89" stroke="#3b8be8" stroke-width="2.6" fill="none"/>
<text x="79" y="67" font-size="14" fill="#3b8be8" font-weight="bold">2</text>
<path d="M86.5,171.5 L261.5,171.5 M270.5,180.5 L270.5,193.5 M261.5,202.5 L86.5,202.5 M77.5,193.5 L77.5,180.5 M77.5,180.5 A9,9 0 0 1 86.5,171.5 M261.5,171.5 A9,9 0 0 1 270.5,180.5 M270.5,193.5 A9,9 0 0 1 261.5,202.5 M86.5,202.5 A9,9 0 0 1 77.5,193.5" stroke="#2fae5f" stroke-width="2.6" fill="none"/>
<text x="69" y="175" font-size="14" fill="#2fae5f" font-weight="bold">3</text>
</svg>
</div>

- ลูปสีส้ม (ช่อง $0,1,2,3,8,9,10,11$) : $B=0 \Rightarrow \overline{B}$
- ลูปสีน้ำเงิน (ช่อง $0,4,8,12$) : $C=0,\ D=0 \Rightarrow \overline{C}\,\overline{D}$
- ลูปสีเขียว (ช่อง $3,7,11,15$) : $C=1,\ D=1 \Rightarrow CD$

$\mathbf{Ans}\quad b = \overline{B}+\overline{C}\,\overline{D}+CD$

### หาสมการของ segment c (BCD-8421, Minterm) {code=bcd; method=andor,nand; digit=0,1,3,4,5,6,7,8,9}

$\mathbf{Sol}^{n}$

จากตารางความจริง ช่องที่ $c = 1$ คือ เลขรหัส $0,1,3,4,5,6,7,8,9$ และช่องที่เป็น $d$ คือ $10,11,12,13,14,15$

$c = \sum m(0,1,3,4,5,6,7,8,9) + d(10,11,12,13,14,15)$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="296" height="280" viewBox="0 0 296 280" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.6" fill="none">
<rect x="66" y="52" width="216" height="216"/>
<line x1="120" y1="52" x2="120" y2="268"/>
<line x1="66" y1="106" x2="282" y2="106"/>
<line x1="174" y1="52" x2="174" y2="268"/>
<line x1="66" y1="160" x2="282" y2="160"/>
<line x1="228" y1="52" x2="228" y2="268"/>
<line x1="66" y1="214" x2="282" y2="214"/>
<line x1="8" y1="8" x2="66" y2="52"/>
</g>
<text x="93" y="37" text-anchor="middle">00</text>
<text x="147" y="37" text-anchor="middle">01</text>
<text x="201" y="37" text-anchor="middle">11</text>
<text x="255" y="37" text-anchor="middle">10</text>
<text x="57" y="85" text-anchor="end">00</text>
<text x="57" y="139" text-anchor="end">01</text>
<text x="57" y="193" text-anchor="end">11</text>
<text x="57" y="247" text-anchor="end">10</text>
<text x="60" y="18" text-anchor="end">AB</text><text x="10" y="40">CD</text>
<text x="115" y="65" text-anchor="end" font-size="11" fill-opacity="0.65">0</text>
<text x="93" y="87" text-anchor="middle" font-size="22">1</text>
<text x="169" y="65" text-anchor="end" font-size="11" fill-opacity="0.65">4</text>
<text x="147" y="87" text-anchor="middle" font-size="22">1</text>
<text x="223" y="65" text-anchor="end" font-size="11" fill-opacity="0.65">12</text>
<text x="201" y="87" text-anchor="middle" font-size="22">d</text>
<text x="277" y="65" text-anchor="end" font-size="11" fill-opacity="0.65">8</text>
<text x="255" y="87" text-anchor="middle" font-size="22">1</text>
<text x="115" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">1</text>
<text x="93" y="141" text-anchor="middle" font-size="22">1</text>
<text x="169" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">5</text>
<text x="147" y="141" text-anchor="middle" font-size="22">1</text>
<text x="223" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">13</text>
<text x="201" y="141" text-anchor="middle" font-size="22">d</text>
<text x="277" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">9</text>
<text x="255" y="141" text-anchor="middle" font-size="22">1</text>
<text x="115" y="173" text-anchor="end" font-size="11" fill-opacity="0.65">3</text>
<text x="93" y="195" text-anchor="middle" font-size="22">1</text>
<text x="169" y="173" text-anchor="end" font-size="11" fill-opacity="0.65">7</text>
<text x="147" y="195" text-anchor="middle" font-size="22">1</text>
<text x="223" y="173" text-anchor="end" font-size="11" fill-opacity="0.65">15</text>
<text x="201" y="195" text-anchor="middle" font-size="22">d</text>
<text x="277" y="173" text-anchor="end" font-size="11" fill-opacity="0.65">11</text>
<text x="255" y="195" text-anchor="middle" font-size="22">d</text>
<text x="115" y="227" text-anchor="end" font-size="11" fill-opacity="0.65">2</text>
<text x="169" y="227" text-anchor="end" font-size="11" fill-opacity="0.65">6</text>
<text x="147" y="249" text-anchor="middle" font-size="22">1</text>
<text x="223" y="227" text-anchor="end" font-size="11" fill-opacity="0.65">14</text>
<text x="201" y="249" text-anchor="middle" font-size="22">d</text>
<text x="277" y="227" text-anchor="end" font-size="11" fill-opacity="0.65">10</text>
<text x="255" y="249" text-anchor="middle" font-size="22">d</text>
<path d="M133.5,56.5 L214.5,56.5 M223.5,65.5 L223.5,254.5 M214.5,263.5 L133.5,263.5 M124.5,254.5 L124.5,65.5 M124.5,65.5 A9,9 0 0 1 133.5,56.5 M214.5,56.5 A9,9 0 0 1 223.5,65.5 M223.5,254.5 A9,9 0 0 1 214.5,263.5 M133.5,263.5 A9,9 0 0 1 124.5,254.5" stroke="#e8743b" stroke-width="2.6" fill="none"/>
<text x="123" y="67" font-size="14" fill="#e8743b" font-weight="bold">1</text>
<path d="M83,60 L265,60 M274,69 L274,143 M265,152 L83,152 M74,143 L74,69 M74,69 A9,9 0 0 1 83,60 M265,60 A9,9 0 0 1 274,69 M274,143 A9,9 0 0 1 265,152 M83,152 A9,9 0 0 1 74,143" stroke="#3b8be8" stroke-width="2.6" fill="none"/>
<text x="69" y="67" font-size="14" fill="#3b8be8" font-weight="bold">2</text>
<path d="M86.5,117.5 L261.5,117.5 M270.5,126.5 L270.5,193.5 M261.5,202.5 L86.5,202.5 M77.5,193.5 L77.5,126.5 M77.5,126.5 A9,9 0 0 1 86.5,117.5 M261.5,117.5 A9,9 0 0 1 270.5,126.5 M270.5,193.5 A9,9 0 0 1 261.5,202.5 M86.5,202.5 A9,9 0 0 1 77.5,193.5" stroke="#2fae5f" stroke-width="2.6" fill="none"/>
<text x="69" y="121" font-size="14" fill="#2fae5f" font-weight="bold">3</text>
</svg>
</div>

- ลูปสีส้ม (ช่อง $4,5,6,7,12,13,14,15$) : $B=1 \Rightarrow B$
- ลูปสีน้ำเงิน (ช่อง $0,1,4,5,8,9,12,13$) : $C=0 \Rightarrow \overline{C}$
- ลูปสีเขียว (ช่อง $1,3,5,7,9,11,13,15$) : $D=1 \Rightarrow D$

$\mathbf{Ans}\quad c = B+\overline{C}+D$

### หาสมการของ segment d (BCD-8421, Minterm) {code=bcd; method=andor,nand; digit=0,2,3,5,6,8,9}

$\mathbf{Sol}^{n}$

จากตารางความจริง ช่องที่ $d = 1$ คือ เลขรหัส $0,2,3,5,6,8,9$ และช่องที่เป็น $d$ คือ $10,11,12,13,14,15$

$d = \sum m(0,2,3,5,6,8,9) + d(10,11,12,13,14,15)$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="296" height="280" viewBox="0 0 296 280" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.6" fill="none">
<rect x="66" y="52" width="216" height="216"/>
<line x1="120" y1="52" x2="120" y2="268"/>
<line x1="66" y1="106" x2="282" y2="106"/>
<line x1="174" y1="52" x2="174" y2="268"/>
<line x1="66" y1="160" x2="282" y2="160"/>
<line x1="228" y1="52" x2="228" y2="268"/>
<line x1="66" y1="214" x2="282" y2="214"/>
<line x1="8" y1="8" x2="66" y2="52"/>
</g>
<text x="93" y="37" text-anchor="middle">00</text>
<text x="147" y="37" text-anchor="middle">01</text>
<text x="201" y="37" text-anchor="middle">11</text>
<text x="255" y="37" text-anchor="middle">10</text>
<text x="57" y="85" text-anchor="end">00</text>
<text x="57" y="139" text-anchor="end">01</text>
<text x="57" y="193" text-anchor="end">11</text>
<text x="57" y="247" text-anchor="end">10</text>
<text x="60" y="18" text-anchor="end">AB</text><text x="10" y="40">CD</text>
<text x="115" y="65" text-anchor="end" font-size="11" fill-opacity="0.65">0</text>
<text x="93" y="87" text-anchor="middle" font-size="22">1</text>
<text x="169" y="65" text-anchor="end" font-size="11" fill-opacity="0.65">4</text>
<text x="223" y="65" text-anchor="end" font-size="11" fill-opacity="0.65">12</text>
<text x="201" y="87" text-anchor="middle" font-size="22">d</text>
<text x="277" y="65" text-anchor="end" font-size="11" fill-opacity="0.65">8</text>
<text x="255" y="87" text-anchor="middle" font-size="22">1</text>
<text x="115" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">1</text>
<text x="169" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">5</text>
<text x="147" y="141" text-anchor="middle" font-size="22">1</text>
<text x="223" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">13</text>
<text x="201" y="141" text-anchor="middle" font-size="22">d</text>
<text x="277" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">9</text>
<text x="255" y="141" text-anchor="middle" font-size="22">1</text>
<text x="115" y="173" text-anchor="end" font-size="11" fill-opacity="0.65">3</text>
<text x="93" y="195" text-anchor="middle" font-size="22">1</text>
<text x="169" y="173" text-anchor="end" font-size="11" fill-opacity="0.65">7</text>
<text x="223" y="173" text-anchor="end" font-size="11" fill-opacity="0.65">15</text>
<text x="201" y="195" text-anchor="middle" font-size="22">d</text>
<text x="277" y="173" text-anchor="end" font-size="11" fill-opacity="0.65">11</text>
<text x="255" y="195" text-anchor="middle" font-size="22">d</text>
<text x="115" y="227" text-anchor="end" font-size="11" fill-opacity="0.65">2</text>
<text x="93" y="249" text-anchor="middle" font-size="22">1</text>
<text x="169" y="227" text-anchor="end" font-size="11" fill-opacity="0.65">6</text>
<text x="147" y="249" text-anchor="middle" font-size="22">1</text>
<text x="223" y="227" text-anchor="end" font-size="11" fill-opacity="0.65">14</text>
<text x="201" y="249" text-anchor="middle" font-size="22">d</text>
<text x="277" y="227" text-anchor="end" font-size="11" fill-opacity="0.65">10</text>
<text x="255" y="249" text-anchor="middle" font-size="22">d</text>
<path d="M187.5,56.5 L268.5,56.5 M277.5,65.5 L277.5,254.5 M268.5,263.5 L187.5,263.5 M178.5,254.5 L178.5,65.5 M178.5,65.5 A9,9 0 0 1 187.5,56.5 M268.5,56.5 A9,9 0 0 1 277.5,65.5 M277.5,254.5 A9,9 0 0 1 268.5,263.5 M187.5,263.5 A9,9 0 0 1 178.5,254.5" stroke="#e8743b" stroke-width="2.6" fill="none"/>
<text x="177" y="67" font-size="14" fill="#e8743b" font-weight="bold">1</text>
<path d="M112,52 L112,89 M103,98 L66,98 M112,89 A9,9 0 0 1 103,98" stroke="#3b8be8" stroke-width="2.6" fill="none"/>
<text x="69" y="67" font-size="14" fill="#3b8be8" font-weight="bold">2</text>
<path d="M282,98 L245,98 M236,89 L236,52 M245,98 A9,9 0 0 1 236,89" stroke="#3b8be8" stroke-width="2.6" fill="none"/>
<path d="M66,222 L103,222 M112,231 L112,268 M103,222 A9,9 0 0 1 112,231" stroke="#3b8be8" stroke-width="2.6" fill="none"/>
<path d="M245,222 L282,222 M236,268 L236,231 M236,231 A9,9 0 0 1 245,222" stroke="#3b8be8" stroke-width="2.6" fill="none"/>
<path d="M66,171.5 L99.5,171.5 M108.5,180.5 L108.5,247.5 M99.5,256.5 L66,256.5 M99.5,171.5 A9,9 0 0 1 108.5,180.5 M108.5,247.5 A9,9 0 0 1 99.5,256.5" stroke="#2fae5f" stroke-width="2.6" fill="none"/>
<text x="69" y="175" font-size="14" fill="#2fae5f" font-weight="bold">3</text>
<path d="M248.5,171.5 L282,171.5 M282,256.5 L248.5,256.5 M239.5,247.5 L239.5,180.5 M239.5,180.5 A9,9 0 0 1 248.5,171.5 M248.5,256.5 A9,9 0 0 1 239.5,247.5" stroke="#2fae5f" stroke-width="2.6" fill="none"/>
<path d="M90,229 L258,229 M267,238 L267,244 M258,253 L90,253 M81,244 L81,238 M81,238 A9,9 0 0 1 90,229 M258,229 A9,9 0 0 1 267,238 M267,244 A9,9 0 0 1 258,253 M90,253 A9,9 0 0 1 81,244" stroke="#a855f7" stroke-width="2.6" fill="none"/>
<text x="69" y="229" font-size="14" fill="#a855f7" font-weight="bold">4</text>
<path d="M147.5,124.5 L200.5,124.5 M209.5,133.5 L209.5,132.5 M200.5,141.5 L147.5,141.5 M138.5,132.5 L138.5,133.5 M138.5,133.5 A9,9 0 0 1 147.5,124.5 M200.5,124.5 A9,9 0 0 1 209.5,133.5 M209.5,132.5 A9,9 0 0 1 200.5,141.5 M147.5,141.5 A9,9 0 0 1 138.5,132.5" stroke="#d4a017" stroke-width="2.6" fill="none"/>
<text x="123" y="121" font-size="14" fill="#d4a017" font-weight="bold">5</text>
</svg>
</div>

- ลูปสีส้ม (ช่อง $8,9,10,11,12,13,14,15$) : $A=1 \Rightarrow A$
- ลูปสีน้ำเงิน (ช่อง $0,2,8,10$) : $B=0,\ D=0 \Rightarrow \overline{B}\,\overline{D}$
- ลูปสีเขียว (ช่อง $2,3,10,11$) : $B=0,\ C=1 \Rightarrow \overline{B}C$
- ลูปสีม่วง (ช่อง $2,6,10,14$) : $C=1,\ D=0 \Rightarrow C\overline{D}$
- ลูปสีเหลือง (ช่อง $5,13$) : $B=1,\ C=0,\ D=1 \Rightarrow B\overline{C}D$

$\mathbf{Ans}\quad d = A+\overline{B}\,\overline{D}+\overline{B}C+C\overline{D}+B\overline{C}D$

### หาสมการของ segment e (BCD-8421, Minterm) {code=bcd; method=andor,nand; digit=0,2,6,8}

$\mathbf{Sol}^{n}$

จากตารางความจริง ช่องที่ $e = 1$ คือ เลขรหัส $0,2,6,8$ และช่องที่เป็น $d$ คือ $10,11,12,13,14,15$

$e = \sum m(0,2,6,8) + d(10,11,12,13,14,15)$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="296" height="280" viewBox="0 0 296 280" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.6" fill="none">
<rect x="66" y="52" width="216" height="216"/>
<line x1="120" y1="52" x2="120" y2="268"/>
<line x1="66" y1="106" x2="282" y2="106"/>
<line x1="174" y1="52" x2="174" y2="268"/>
<line x1="66" y1="160" x2="282" y2="160"/>
<line x1="228" y1="52" x2="228" y2="268"/>
<line x1="66" y1="214" x2="282" y2="214"/>
<line x1="8" y1="8" x2="66" y2="52"/>
</g>
<text x="93" y="37" text-anchor="middle">00</text>
<text x="147" y="37" text-anchor="middle">01</text>
<text x="201" y="37" text-anchor="middle">11</text>
<text x="255" y="37" text-anchor="middle">10</text>
<text x="57" y="85" text-anchor="end">00</text>
<text x="57" y="139" text-anchor="end">01</text>
<text x="57" y="193" text-anchor="end">11</text>
<text x="57" y="247" text-anchor="end">10</text>
<text x="60" y="18" text-anchor="end">AB</text><text x="10" y="40">CD</text>
<text x="115" y="65" text-anchor="end" font-size="11" fill-opacity="0.65">0</text>
<text x="93" y="87" text-anchor="middle" font-size="22">1</text>
<text x="169" y="65" text-anchor="end" font-size="11" fill-opacity="0.65">4</text>
<text x="223" y="65" text-anchor="end" font-size="11" fill-opacity="0.65">12</text>
<text x="201" y="87" text-anchor="middle" font-size="22">d</text>
<text x="277" y="65" text-anchor="end" font-size="11" fill-opacity="0.65">8</text>
<text x="255" y="87" text-anchor="middle" font-size="22">1</text>
<text x="115" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">1</text>
<text x="169" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">5</text>
<text x="223" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">13</text>
<text x="201" y="141" text-anchor="middle" font-size="22">d</text>
<text x="277" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">9</text>
<text x="115" y="173" text-anchor="end" font-size="11" fill-opacity="0.65">3</text>
<text x="169" y="173" text-anchor="end" font-size="11" fill-opacity="0.65">7</text>
<text x="223" y="173" text-anchor="end" font-size="11" fill-opacity="0.65">15</text>
<text x="201" y="195" text-anchor="middle" font-size="22">d</text>
<text x="277" y="173" text-anchor="end" font-size="11" fill-opacity="0.65">11</text>
<text x="255" y="195" text-anchor="middle" font-size="22">d</text>
<text x="115" y="227" text-anchor="end" font-size="11" fill-opacity="0.65">2</text>
<text x="93" y="249" text-anchor="middle" font-size="22">1</text>
<text x="169" y="227" text-anchor="end" font-size="11" fill-opacity="0.65">6</text>
<text x="147" y="249" text-anchor="middle" font-size="22">1</text>
<text x="223" y="227" text-anchor="end" font-size="11" fill-opacity="0.65">14</text>
<text x="201" y="249" text-anchor="middle" font-size="22">d</text>
<text x="277" y="227" text-anchor="end" font-size="11" fill-opacity="0.65">10</text>
<text x="255" y="249" text-anchor="middle" font-size="22">d</text>
<path d="M115.5,52 L115.5,92.5 M106.5,101.5 L66,101.5 M115.5,92.5 A9,9 0 0 1 106.5,101.5" stroke="#e8743b" stroke-width="2.6" fill="none"/>
<text x="69" y="67" font-size="14" fill="#e8743b" font-weight="bold">1</text>
<path d="M282,101.5 L241.5,101.5 M232.5,92.5 L232.5,52 M241.5,101.5 A9,9 0 0 1 232.5,92.5" stroke="#e8743b" stroke-width="2.6" fill="none"/>
<path d="M66,218.5 L106.5,218.5 M115.5,227.5 L115.5,268 M106.5,218.5 A9,9 0 0 1 115.5,227.5" stroke="#e8743b" stroke-width="2.6" fill="none"/>
<path d="M241.5,218.5 L282,218.5 M232.5,268 L232.5,227.5 M232.5,227.5 A9,9 0 0 1 241.5,218.5" stroke="#e8743b" stroke-width="2.6" fill="none"/>
<path d="M83,222 L265,222 M274,231 L274,251 M265,260 L83,260 M74,251 L74,231 M74,231 A9,9 0 0 1 83,222 M265,222 A9,9 0 0 1 274,231 M274,251 A9,9 0 0 1 265,260 M83,260 A9,9 0 0 1 74,251" stroke="#3b8be8" stroke-width="2.6" fill="none"/>
<text x="69" y="229" font-size="14" fill="#3b8be8" font-weight="bold">2</text>
</svg>
</div>

- ลูปสีส้ม (ช่อง $0,2,8,10$) : $B=0,\ D=0 \Rightarrow \overline{B}\,\overline{D}$
- ลูปสีน้ำเงิน (ช่อง $2,6,10,14$) : $C=1,\ D=0 \Rightarrow C\overline{D}$

$\mathbf{Ans}\quad e = \overline{B}\,\overline{D}+C\overline{D}$

### หาสมการของ segment f (BCD-8421, Minterm) {code=bcd; method=andor,nand; digit=0,4,5,6,8,9}

$\mathbf{Sol}^{n}$

จากตารางความจริง ช่องที่ $f = 1$ คือ เลขรหัส $0,4,5,6,8,9$ และช่องที่เป็น $d$ คือ $10,11,12,13,14,15$

$f = \sum m(0,4,5,6,8,9) + d(10,11,12,13,14,15)$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="296" height="280" viewBox="0 0 296 280" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.6" fill="none">
<rect x="66" y="52" width="216" height="216"/>
<line x1="120" y1="52" x2="120" y2="268"/>
<line x1="66" y1="106" x2="282" y2="106"/>
<line x1="174" y1="52" x2="174" y2="268"/>
<line x1="66" y1="160" x2="282" y2="160"/>
<line x1="228" y1="52" x2="228" y2="268"/>
<line x1="66" y1="214" x2="282" y2="214"/>
<line x1="8" y1="8" x2="66" y2="52"/>
</g>
<text x="93" y="37" text-anchor="middle">00</text>
<text x="147" y="37" text-anchor="middle">01</text>
<text x="201" y="37" text-anchor="middle">11</text>
<text x="255" y="37" text-anchor="middle">10</text>
<text x="57" y="85" text-anchor="end">00</text>
<text x="57" y="139" text-anchor="end">01</text>
<text x="57" y="193" text-anchor="end">11</text>
<text x="57" y="247" text-anchor="end">10</text>
<text x="60" y="18" text-anchor="end">AB</text><text x="10" y="40">CD</text>
<text x="115" y="65" text-anchor="end" font-size="11" fill-opacity="0.65">0</text>
<text x="93" y="87" text-anchor="middle" font-size="22">1</text>
<text x="169" y="65" text-anchor="end" font-size="11" fill-opacity="0.65">4</text>
<text x="147" y="87" text-anchor="middle" font-size="22">1</text>
<text x="223" y="65" text-anchor="end" font-size="11" fill-opacity="0.65">12</text>
<text x="201" y="87" text-anchor="middle" font-size="22">d</text>
<text x="277" y="65" text-anchor="end" font-size="11" fill-opacity="0.65">8</text>
<text x="255" y="87" text-anchor="middle" font-size="22">1</text>
<text x="115" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">1</text>
<text x="169" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">5</text>
<text x="147" y="141" text-anchor="middle" font-size="22">1</text>
<text x="223" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">13</text>
<text x="201" y="141" text-anchor="middle" font-size="22">d</text>
<text x="277" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">9</text>
<text x="255" y="141" text-anchor="middle" font-size="22">1</text>
<text x="115" y="173" text-anchor="end" font-size="11" fill-opacity="0.65">3</text>
<text x="169" y="173" text-anchor="end" font-size="11" fill-opacity="0.65">7</text>
<text x="223" y="173" text-anchor="end" font-size="11" fill-opacity="0.65">15</text>
<text x="201" y="195" text-anchor="middle" font-size="22">d</text>
<text x="277" y="173" text-anchor="end" font-size="11" fill-opacity="0.65">11</text>
<text x="255" y="195" text-anchor="middle" font-size="22">d</text>
<text x="115" y="227" text-anchor="end" font-size="11" fill-opacity="0.65">2</text>
<text x="169" y="227" text-anchor="end" font-size="11" fill-opacity="0.65">6</text>
<text x="147" y="249" text-anchor="middle" font-size="22">1</text>
<text x="223" y="227" text-anchor="end" font-size="11" fill-opacity="0.65">14</text>
<text x="201" y="249" text-anchor="middle" font-size="22">d</text>
<text x="277" y="227" text-anchor="end" font-size="11" fill-opacity="0.65">10</text>
<text x="255" y="249" text-anchor="middle" font-size="22">d</text>
<path d="M187.5,56.5 L268.5,56.5 M277.5,65.5 L277.5,254.5 M268.5,263.5 L187.5,263.5 M178.5,254.5 L178.5,65.5 M178.5,65.5 A9,9 0 0 1 187.5,56.5 M268.5,56.5 A9,9 0 0 1 277.5,65.5 M277.5,254.5 A9,9 0 0 1 268.5,263.5 M187.5,263.5 A9,9 0 0 1 178.5,254.5" stroke="#e8743b" stroke-width="2.6" fill="none"/>
<text x="177" y="67" font-size="14" fill="#e8743b" font-weight="bold">1</text>
<path d="M137,60 L211,60 M220,69 L220,143 M211,152 L137,152 M128,143 L128,69 M128,69 A9,9 0 0 1 137,60 M211,60 A9,9 0 0 1 220,69 M220,143 A9,9 0 0 1 211,152 M137,152 A9,9 0 0 1 128,143" stroke="#3b8be8" stroke-width="2.6" fill="none"/>
<text x="123" y="67" font-size="14" fill="#3b8be8" font-weight="bold">2</text>
<path d="M216.5,52 L216.5,85.5 M207.5,94.5 L140.5,94.5 M131.5,85.5 L131.5,52 M216.5,85.5 A9,9 0 0 1 207.5,94.5 M140.5,94.5 A9,9 0 0 1 131.5,85.5" stroke="#2fae5f" stroke-width="2.6" fill="none"/>
<text x="133" y="67" font-size="14" fill="#2fae5f" font-weight="bold">3</text>
<path d="M140.5,225.5 L207.5,225.5 M216.5,234.5 L216.5,268 M131.5,268 L131.5,234.5 M131.5,234.5 A9,9 0 0 1 140.5,225.5 M207.5,225.5 A9,9 0 0 1 216.5,234.5" stroke="#2fae5f" stroke-width="2.6" fill="none"/>
<path d="M90,67 L258,67 M267,76 L267,82 M258,91 L90,91 M81,82 L81,76 M81,76 A9,9 0 0 1 90,67 M258,67 A9,9 0 0 1 267,76 M267,82 A9,9 0 0 1 258,91 M90,91 A9,9 0 0 1 81,82" stroke="#a855f7" stroke-width="2.6" fill="none"/>
<text x="69" y="67" font-size="14" fill="#a855f7" font-weight="bold">4</text>
</svg>
</div>

- ลูปสีส้ม (ช่อง $8,9,10,11,12,13,14,15$) : $A=1 \Rightarrow A$
- ลูปสีน้ำเงิน (ช่อง $4,5,12,13$) : $B=1,\ C=0 \Rightarrow B\overline{C}$
- ลูปสีเขียว (ช่อง $4,6,12,14$) : $B=1,\ D=0 \Rightarrow B\overline{D}$
- ลูปสีม่วง (ช่อง $0,4,8,12$) : $C=0,\ D=0 \Rightarrow \overline{C}\,\overline{D}$

$\mathbf{Ans}\quad f = A+B\overline{C}+B\overline{D}+\overline{C}\,\overline{D}$

### หาสมการของ segment g (BCD-8421, Minterm) {code=bcd; method=andor,nand; digit=2,3,4,5,6,8,9}

$\mathbf{Sol}^{n}$

จากตารางความจริง ช่องที่ $g = 1$ คือ เลขรหัส $2,3,4,5,6,8,9$ และช่องที่เป็น $d$ คือ $10,11,12,13,14,15$

$g = \sum m(2,3,4,5,6,8,9) + d(10,11,12,13,14,15)$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="296" height="280" viewBox="0 0 296 280" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.6" fill="none">
<rect x="66" y="52" width="216" height="216"/>
<line x1="120" y1="52" x2="120" y2="268"/>
<line x1="66" y1="106" x2="282" y2="106"/>
<line x1="174" y1="52" x2="174" y2="268"/>
<line x1="66" y1="160" x2="282" y2="160"/>
<line x1="228" y1="52" x2="228" y2="268"/>
<line x1="66" y1="214" x2="282" y2="214"/>
<line x1="8" y1="8" x2="66" y2="52"/>
</g>
<text x="93" y="37" text-anchor="middle">00</text>
<text x="147" y="37" text-anchor="middle">01</text>
<text x="201" y="37" text-anchor="middle">11</text>
<text x="255" y="37" text-anchor="middle">10</text>
<text x="57" y="85" text-anchor="end">00</text>
<text x="57" y="139" text-anchor="end">01</text>
<text x="57" y="193" text-anchor="end">11</text>
<text x="57" y="247" text-anchor="end">10</text>
<text x="60" y="18" text-anchor="end">AB</text><text x="10" y="40">CD</text>
<text x="115" y="65" text-anchor="end" font-size="11" fill-opacity="0.65">0</text>
<text x="169" y="65" text-anchor="end" font-size="11" fill-opacity="0.65">4</text>
<text x="147" y="87" text-anchor="middle" font-size="22">1</text>
<text x="223" y="65" text-anchor="end" font-size="11" fill-opacity="0.65">12</text>
<text x="201" y="87" text-anchor="middle" font-size="22">d</text>
<text x="277" y="65" text-anchor="end" font-size="11" fill-opacity="0.65">8</text>
<text x="255" y="87" text-anchor="middle" font-size="22">1</text>
<text x="115" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">1</text>
<text x="169" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">5</text>
<text x="147" y="141" text-anchor="middle" font-size="22">1</text>
<text x="223" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">13</text>
<text x="201" y="141" text-anchor="middle" font-size="22">d</text>
<text x="277" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">9</text>
<text x="255" y="141" text-anchor="middle" font-size="22">1</text>
<text x="115" y="173" text-anchor="end" font-size="11" fill-opacity="0.65">3</text>
<text x="93" y="195" text-anchor="middle" font-size="22">1</text>
<text x="169" y="173" text-anchor="end" font-size="11" fill-opacity="0.65">7</text>
<text x="223" y="173" text-anchor="end" font-size="11" fill-opacity="0.65">15</text>
<text x="201" y="195" text-anchor="middle" font-size="22">d</text>
<text x="277" y="173" text-anchor="end" font-size="11" fill-opacity="0.65">11</text>
<text x="255" y="195" text-anchor="middle" font-size="22">d</text>
<text x="115" y="227" text-anchor="end" font-size="11" fill-opacity="0.65">2</text>
<text x="93" y="249" text-anchor="middle" font-size="22">1</text>
<text x="169" y="227" text-anchor="end" font-size="11" fill-opacity="0.65">6</text>
<text x="147" y="249" text-anchor="middle" font-size="22">1</text>
<text x="223" y="227" text-anchor="end" font-size="11" fill-opacity="0.65">14</text>
<text x="201" y="249" text-anchor="middle" font-size="22">d</text>
<text x="277" y="227" text-anchor="end" font-size="11" fill-opacity="0.65">10</text>
<text x="255" y="249" text-anchor="middle" font-size="22">d</text>
<path d="M133.5,56.5 L214.5,56.5 M223.5,65.5 L223.5,146.5 M214.5,155.5 L133.5,155.5 M124.5,146.5 L124.5,65.5 M124.5,65.5 A9,9 0 0 1 133.5,56.5 M214.5,56.5 A9,9 0 0 1 223.5,65.5 M223.5,146.5 A9,9 0 0 1 214.5,155.5 M133.5,155.5 A9,9 0 0 1 124.5,146.5" stroke="#e8743b" stroke-width="2.6" fill="none"/>
<text x="123" y="67" font-size="14" fill="#e8743b" font-weight="bold">1</text>
<path d="M191,60 L265,60 M274,69 L274,143 M265,152 L191,152 M182,143 L182,69 M182,69 A9,9 0 0 1 191,60 M265,60 A9,9 0 0 1 274,69 M274,143 A9,9 0 0 1 265,152 M191,152 A9,9 0 0 1 182,143" stroke="#3b8be8" stroke-width="2.6" fill="none"/>
<text x="177" y="67" font-size="14" fill="#3b8be8" font-weight="bold">2</text>
<path d="M66,171.5 L99.5,171.5 M108.5,180.5 L108.5,247.5 M99.5,256.5 L66,256.5 M99.5,171.5 A9,9 0 0 1 108.5,180.5 M108.5,247.5 A9,9 0 0 1 99.5,256.5" stroke="#2fae5f" stroke-width="2.6" fill="none"/>
<text x="69" y="175" font-size="14" fill="#2fae5f" font-weight="bold">3</text>
<path d="M248.5,171.5 L282,171.5 M282,256.5 L248.5,256.5 M239.5,247.5 L239.5,180.5 M239.5,180.5 A9,9 0 0 1 248.5,171.5 M248.5,256.5 A9,9 0 0 1 239.5,247.5" stroke="#2fae5f" stroke-width="2.6" fill="none"/>
<path d="M90,229 L258,229 M267,238 L267,244 M258,253 L90,253 M81,244 L81,238 M81,238 A9,9 0 0 1 90,229 M258,229 A9,9 0 0 1 267,238 M267,244 A9,9 0 0 1 258,253 M90,253 A9,9 0 0 1 81,244" stroke="#a855f7" stroke-width="2.6" fill="none"/>
<text x="69" y="229" font-size="14" fill="#a855f7" font-weight="bold">4</text>
</svg>
</div>

- ลูปสีส้ม (ช่อง $4,5,12,13$) : $B=1,\ C=0 \Rightarrow B\overline{C}$
- ลูปสีน้ำเงิน (ช่อง $8,9,12,13$) : $A=1,\ C=0 \Rightarrow A\overline{C}$
- ลูปสีเขียว (ช่อง $2,3,10,11$) : $B=0,\ C=1 \Rightarrow \overline{B}C$
- ลูปสีม่วง (ช่อง $2,6,10,14$) : $C=1,\ D=0 \Rightarrow C\overline{D}$

$\mathbf{Ans}\quad g = B\overline{C}+A\overline{C}+\overline{B}C+C\overline{D}$

### หาสมการของ segment a (BCD-8421, Maxterm) {code=bcd; method=orand,nor; digit=0,2,3,5,6,7,8,9}

$\mathbf{Sol}^{n}$

จากตารางความจริง ช่องที่ $a = 0$ คือ เลขรหัส $1,4$ และช่องที่เป็น $d$ คือ $10,11,12,13,14,15$

$a = \prod M(1,4) \cdot d(10,11,12,13,14,15)$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="296" height="280" viewBox="0 0 296 280" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.6" fill="none">
<rect x="66" y="52" width="216" height="216"/>
<line x1="120" y1="52" x2="120" y2="268"/>
<line x1="66" y1="106" x2="282" y2="106"/>
<line x1="174" y1="52" x2="174" y2="268"/>
<line x1="66" y1="160" x2="282" y2="160"/>
<line x1="228" y1="52" x2="228" y2="268"/>
<line x1="66" y1="214" x2="282" y2="214"/>
<line x1="8" y1="8" x2="66" y2="52"/>
</g>
<text x="93" y="37" text-anchor="middle">00</text>
<text x="147" y="37" text-anchor="middle">01</text>
<text x="201" y="37" text-anchor="middle">11</text>
<text x="255" y="37" text-anchor="middle">10</text>
<text x="57" y="85" text-anchor="end">00</text>
<text x="57" y="139" text-anchor="end">01</text>
<text x="57" y="193" text-anchor="end">11</text>
<text x="57" y="247" text-anchor="end">10</text>
<text x="60" y="18" text-anchor="end">AB</text><text x="10" y="40">CD</text>
<text x="115" y="65" text-anchor="end" font-size="11" fill-opacity="0.65">0</text>
<text x="169" y="65" text-anchor="end" font-size="11" fill-opacity="0.65">4</text>
<text x="147" y="87" text-anchor="middle" font-size="22">0</text>
<text x="223" y="65" text-anchor="end" font-size="11" fill-opacity="0.65">12</text>
<text x="201" y="87" text-anchor="middle" font-size="22">d</text>
<text x="277" y="65" text-anchor="end" font-size="11" fill-opacity="0.65">8</text>
<text x="115" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">1</text>
<text x="93" y="141" text-anchor="middle" font-size="22">0</text>
<text x="169" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">5</text>
<text x="223" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">13</text>
<text x="201" y="141" text-anchor="middle" font-size="22">d</text>
<text x="277" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">9</text>
<text x="115" y="173" text-anchor="end" font-size="11" fill-opacity="0.65">3</text>
<text x="169" y="173" text-anchor="end" font-size="11" fill-opacity="0.65">7</text>
<text x="223" y="173" text-anchor="end" font-size="11" fill-opacity="0.65">15</text>
<text x="201" y="195" text-anchor="middle" font-size="22">d</text>
<text x="277" y="173" text-anchor="end" font-size="11" fill-opacity="0.65">11</text>
<text x="255" y="195" text-anchor="middle" font-size="22">d</text>
<text x="115" y="227" text-anchor="end" font-size="11" fill-opacity="0.65">2</text>
<text x="169" y="227" text-anchor="end" font-size="11" fill-opacity="0.65">6</text>
<text x="223" y="227" text-anchor="end" font-size="11" fill-opacity="0.65">14</text>
<text x="201" y="249" text-anchor="middle" font-size="22">d</text>
<text x="277" y="227" text-anchor="end" font-size="11" fill-opacity="0.65">10</text>
<text x="255" y="249" text-anchor="middle" font-size="22">d</text>
<path d="M79.5,110.5 L106.5,110.5 M115.5,119.5 L115.5,146.5 M106.5,155.5 L79.5,155.5 M70.5,146.5 L70.5,119.5 M70.5,119.5 A9,9 0 0 1 79.5,110.5 M106.5,110.5 A9,9 0 0 1 115.5,119.5 M115.5,146.5 A9,9 0 0 1 106.5,155.5 M79.5,155.5 A9,9 0 0 1 70.5,146.5" stroke="#e8743b" stroke-width="2.6" fill="none"/>
<text x="69" y="121" font-size="14" fill="#e8743b" font-weight="bold">1</text>
<path d="M137,60 L211,60 M220,69 L220,89 M211,98 L137,98 M128,89 L128,69 M128,69 A9,9 0 0 1 137,60 M211,60 A9,9 0 0 1 220,69 M220,89 A9,9 0 0 1 211,98 M137,98 A9,9 0 0 1 128,89" stroke="#3b8be8" stroke-width="2.6" fill="none"/>
<text x="123" y="67" font-size="14" fill="#3b8be8" font-weight="bold">2</text>
</svg>
</div>

- ลูปสีส้ม (ช่อง $1$) : $A=0,\ B=0,\ C=0,\ D=1 \Rightarrow (A+B+C+\overline{D})$
- ลูปสีน้ำเงิน (ช่อง $4,12$) : $B=1,\ C=0,\ D=0 \Rightarrow (\overline{B}+C+D)$

$\mathbf{Ans}\quad a = (A+B+C+\overline{D})(\overline{B}+C+D)$

### หาสมการของ segment b (BCD-8421, Maxterm) {code=bcd; method=orand,nor; digit=0,1,2,3,4,7,8,9}

$\mathbf{Sol}^{n}$

จากตารางความจริง ช่องที่ $b = 0$ คือ เลขรหัส $5,6$ และช่องที่เป็น $d$ คือ $10,11,12,13,14,15$

$b = \prod M(5,6) \cdot d(10,11,12,13,14,15)$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="296" height="280" viewBox="0 0 296 280" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.6" fill="none">
<rect x="66" y="52" width="216" height="216"/>
<line x1="120" y1="52" x2="120" y2="268"/>
<line x1="66" y1="106" x2="282" y2="106"/>
<line x1="174" y1="52" x2="174" y2="268"/>
<line x1="66" y1="160" x2="282" y2="160"/>
<line x1="228" y1="52" x2="228" y2="268"/>
<line x1="66" y1="214" x2="282" y2="214"/>
<line x1="8" y1="8" x2="66" y2="52"/>
</g>
<text x="93" y="37" text-anchor="middle">00</text>
<text x="147" y="37" text-anchor="middle">01</text>
<text x="201" y="37" text-anchor="middle">11</text>
<text x="255" y="37" text-anchor="middle">10</text>
<text x="57" y="85" text-anchor="end">00</text>
<text x="57" y="139" text-anchor="end">01</text>
<text x="57" y="193" text-anchor="end">11</text>
<text x="57" y="247" text-anchor="end">10</text>
<text x="60" y="18" text-anchor="end">AB</text><text x="10" y="40">CD</text>
<text x="115" y="65" text-anchor="end" font-size="11" fill-opacity="0.65">0</text>
<text x="169" y="65" text-anchor="end" font-size="11" fill-opacity="0.65">4</text>
<text x="223" y="65" text-anchor="end" font-size="11" fill-opacity="0.65">12</text>
<text x="201" y="87" text-anchor="middle" font-size="22">d</text>
<text x="277" y="65" text-anchor="end" font-size="11" fill-opacity="0.65">8</text>
<text x="115" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">1</text>
<text x="169" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">5</text>
<text x="147" y="141" text-anchor="middle" font-size="22">0</text>
<text x="223" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">13</text>
<text x="201" y="141" text-anchor="middle" font-size="22">d</text>
<text x="277" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">9</text>
<text x="115" y="173" text-anchor="end" font-size="11" fill-opacity="0.65">3</text>
<text x="169" y="173" text-anchor="end" font-size="11" fill-opacity="0.65">7</text>
<text x="223" y="173" text-anchor="end" font-size="11" fill-opacity="0.65">15</text>
<text x="201" y="195" text-anchor="middle" font-size="22">d</text>
<text x="277" y="173" text-anchor="end" font-size="11" fill-opacity="0.65">11</text>
<text x="255" y="195" text-anchor="middle" font-size="22">d</text>
<text x="115" y="227" text-anchor="end" font-size="11" fill-opacity="0.65">2</text>
<text x="169" y="227" text-anchor="end" font-size="11" fill-opacity="0.65">6</text>
<text x="147" y="249" text-anchor="middle" font-size="22">0</text>
<text x="223" y="227" text-anchor="end" font-size="11" fill-opacity="0.65">14</text>
<text x="201" y="249" text-anchor="middle" font-size="22">d</text>
<text x="277" y="227" text-anchor="end" font-size="11" fill-opacity="0.65">10</text>
<text x="255" y="249" text-anchor="middle" font-size="22">d</text>
<path d="M133.5,110.5 L214.5,110.5 M223.5,119.5 L223.5,146.5 M214.5,155.5 L133.5,155.5 M124.5,146.5 L124.5,119.5 M124.5,119.5 A9,9 0 0 1 133.5,110.5 M214.5,110.5 A9,9 0 0 1 223.5,119.5 M223.5,146.5 A9,9 0 0 1 214.5,155.5 M133.5,155.5 A9,9 0 0 1 124.5,146.5" stroke="#e8743b" stroke-width="2.6" fill="none"/>
<text x="123" y="121" font-size="14" fill="#e8743b" font-weight="bold">1</text>
<path d="M137,222 L211,222 M220,231 L220,251 M211,260 L137,260 M128,251 L128,231 M128,231 A9,9 0 0 1 137,222 M211,222 A9,9 0 0 1 220,231 M220,251 A9,9 0 0 1 211,260 M137,260 A9,9 0 0 1 128,251" stroke="#3b8be8" stroke-width="2.6" fill="none"/>
<text x="123" y="229" font-size="14" fill="#3b8be8" font-weight="bold">2</text>
</svg>
</div>

- ลูปสีส้ม (ช่อง $5,13$) : $B=1,\ C=0,\ D=1 \Rightarrow (\overline{B}+C+\overline{D})$
- ลูปสีน้ำเงิน (ช่อง $6,14$) : $B=1,\ C=1,\ D=0 \Rightarrow (\overline{B}+\overline{C}+D)$

$\mathbf{Ans}\quad b = (\overline{B}+C+\overline{D})(\overline{B}+\overline{C}+D)$

### หาสมการของ segment c (BCD-8421, Maxterm) {code=bcd; method=orand,nor; digit=0,1,3,4,5,6,7,8,9}

$\mathbf{Sol}^{n}$

จากตารางความจริง ช่องที่ $c = 0$ คือ เลขรหัส $2$ และช่องที่เป็น $d$ คือ $10,11,12,13,14,15$

$c = \prod M(2) \cdot d(10,11,12,13,14,15)$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="296" height="280" viewBox="0 0 296 280" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.6" fill="none">
<rect x="66" y="52" width="216" height="216"/>
<line x1="120" y1="52" x2="120" y2="268"/>
<line x1="66" y1="106" x2="282" y2="106"/>
<line x1="174" y1="52" x2="174" y2="268"/>
<line x1="66" y1="160" x2="282" y2="160"/>
<line x1="228" y1="52" x2="228" y2="268"/>
<line x1="66" y1="214" x2="282" y2="214"/>
<line x1="8" y1="8" x2="66" y2="52"/>
</g>
<text x="93" y="37" text-anchor="middle">00</text>
<text x="147" y="37" text-anchor="middle">01</text>
<text x="201" y="37" text-anchor="middle">11</text>
<text x="255" y="37" text-anchor="middle">10</text>
<text x="57" y="85" text-anchor="end">00</text>
<text x="57" y="139" text-anchor="end">01</text>
<text x="57" y="193" text-anchor="end">11</text>
<text x="57" y="247" text-anchor="end">10</text>
<text x="60" y="18" text-anchor="end">AB</text><text x="10" y="40">CD</text>
<text x="115" y="65" text-anchor="end" font-size="11" fill-opacity="0.65">0</text>
<text x="169" y="65" text-anchor="end" font-size="11" fill-opacity="0.65">4</text>
<text x="223" y="65" text-anchor="end" font-size="11" fill-opacity="0.65">12</text>
<text x="201" y="87" text-anchor="middle" font-size="22">d</text>
<text x="277" y="65" text-anchor="end" font-size="11" fill-opacity="0.65">8</text>
<text x="115" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">1</text>
<text x="169" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">5</text>
<text x="223" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">13</text>
<text x="201" y="141" text-anchor="middle" font-size="22">d</text>
<text x="277" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">9</text>
<text x="115" y="173" text-anchor="end" font-size="11" fill-opacity="0.65">3</text>
<text x="169" y="173" text-anchor="end" font-size="11" fill-opacity="0.65">7</text>
<text x="223" y="173" text-anchor="end" font-size="11" fill-opacity="0.65">15</text>
<text x="201" y="195" text-anchor="middle" font-size="22">d</text>
<text x="277" y="173" text-anchor="end" font-size="11" fill-opacity="0.65">11</text>
<text x="255" y="195" text-anchor="middle" font-size="22">d</text>
<text x="115" y="227" text-anchor="end" font-size="11" fill-opacity="0.65">2</text>
<text x="93" y="249" text-anchor="middle" font-size="22">0</text>
<text x="169" y="227" text-anchor="end" font-size="11" fill-opacity="0.65">6</text>
<text x="223" y="227" text-anchor="end" font-size="11" fill-opacity="0.65">14</text>
<text x="201" y="249" text-anchor="middle" font-size="22">d</text>
<text x="277" y="227" text-anchor="end" font-size="11" fill-opacity="0.65">10</text>
<text x="255" y="249" text-anchor="middle" font-size="22">d</text>
<path d="M66,218.5 L106.5,218.5 M115.5,227.5 L115.5,254.5 M106.5,263.5 L66,263.5 M106.5,218.5 A9,9 0 0 1 115.5,227.5 M115.5,254.5 A9,9 0 0 1 106.5,263.5" stroke="#e8743b" stroke-width="2.6" fill="none"/>
<text x="69" y="229" font-size="14" fill="#e8743b" font-weight="bold">1</text>
<path d="M241.5,218.5 L282,218.5 M282,263.5 L241.5,263.5 M232.5,254.5 L232.5,227.5 M232.5,227.5 A9,9 0 0 1 241.5,218.5 M241.5,263.5 A9,9 0 0 1 232.5,254.5" stroke="#e8743b" stroke-width="2.6" fill="none"/>
</svg>
</div>

- ลูปสีส้ม (ช่อง $2,10$) : $B=0,\ C=1,\ D=0 \Rightarrow (B+\overline{C}+D)$

$\mathbf{Ans}\quad c = (B+\overline{C}+D)$

### หาสมการของ segment d (BCD-8421, Maxterm) {code=bcd; method=orand,nor; digit=0,2,3,5,6,8,9}

$\mathbf{Sol}^{n}$

จากตารางความจริง ช่องที่ $d = 0$ คือ เลขรหัส $1,4,7$ และช่องที่เป็น $d$ คือ $10,11,12,13,14,15$

$d = \prod M(1,4,7) \cdot d(10,11,12,13,14,15)$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="296" height="280" viewBox="0 0 296 280" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.6" fill="none">
<rect x="66" y="52" width="216" height="216"/>
<line x1="120" y1="52" x2="120" y2="268"/>
<line x1="66" y1="106" x2="282" y2="106"/>
<line x1="174" y1="52" x2="174" y2="268"/>
<line x1="66" y1="160" x2="282" y2="160"/>
<line x1="228" y1="52" x2="228" y2="268"/>
<line x1="66" y1="214" x2="282" y2="214"/>
<line x1="8" y1="8" x2="66" y2="52"/>
</g>
<text x="93" y="37" text-anchor="middle">00</text>
<text x="147" y="37" text-anchor="middle">01</text>
<text x="201" y="37" text-anchor="middle">11</text>
<text x="255" y="37" text-anchor="middle">10</text>
<text x="57" y="85" text-anchor="end">00</text>
<text x="57" y="139" text-anchor="end">01</text>
<text x="57" y="193" text-anchor="end">11</text>
<text x="57" y="247" text-anchor="end">10</text>
<text x="60" y="18" text-anchor="end">AB</text><text x="10" y="40">CD</text>
<text x="115" y="65" text-anchor="end" font-size="11" fill-opacity="0.65">0</text>
<text x="169" y="65" text-anchor="end" font-size="11" fill-opacity="0.65">4</text>
<text x="147" y="87" text-anchor="middle" font-size="22">0</text>
<text x="223" y="65" text-anchor="end" font-size="11" fill-opacity="0.65">12</text>
<text x="201" y="87" text-anchor="middle" font-size="22">d</text>
<text x="277" y="65" text-anchor="end" font-size="11" fill-opacity="0.65">8</text>
<text x="115" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">1</text>
<text x="93" y="141" text-anchor="middle" font-size="22">0</text>
<text x="169" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">5</text>
<text x="223" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">13</text>
<text x="201" y="141" text-anchor="middle" font-size="22">d</text>
<text x="277" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">9</text>
<text x="115" y="173" text-anchor="end" font-size="11" fill-opacity="0.65">3</text>
<text x="169" y="173" text-anchor="end" font-size="11" fill-opacity="0.65">7</text>
<text x="147" y="195" text-anchor="middle" font-size="22">0</text>
<text x="223" y="173" text-anchor="end" font-size="11" fill-opacity="0.65">15</text>
<text x="201" y="195" text-anchor="middle" font-size="22">d</text>
<text x="277" y="173" text-anchor="end" font-size="11" fill-opacity="0.65">11</text>
<text x="255" y="195" text-anchor="middle" font-size="22">d</text>
<text x="115" y="227" text-anchor="end" font-size="11" fill-opacity="0.65">2</text>
<text x="169" y="227" text-anchor="end" font-size="11" fill-opacity="0.65">6</text>
<text x="223" y="227" text-anchor="end" font-size="11" fill-opacity="0.65">14</text>
<text x="201" y="249" text-anchor="middle" font-size="22">d</text>
<text x="277" y="227" text-anchor="end" font-size="11" fill-opacity="0.65">10</text>
<text x="255" y="249" text-anchor="middle" font-size="22">d</text>
<path d="M79.5,110.5 L106.5,110.5 M115.5,119.5 L115.5,146.5 M106.5,155.5 L79.5,155.5 M70.5,146.5 L70.5,119.5 M70.5,119.5 A9,9 0 0 1 79.5,110.5 M106.5,110.5 A9,9 0 0 1 115.5,119.5 M115.5,146.5 A9,9 0 0 1 106.5,155.5 M79.5,155.5 A9,9 0 0 1 70.5,146.5" stroke="#e8743b" stroke-width="2.6" fill="none"/>
<text x="69" y="121" font-size="14" fill="#e8743b" font-weight="bold">1</text>
<path d="M137,60 L211,60 M220,69 L220,89 M211,98 L137,98 M128,89 L128,69 M128,69 A9,9 0 0 1 137,60 M211,60 A9,9 0 0 1 220,69 M220,89 A9,9 0 0 1 211,98 M137,98 A9,9 0 0 1 128,89" stroke="#3b8be8" stroke-width="2.6" fill="none"/>
<text x="123" y="67" font-size="14" fill="#3b8be8" font-weight="bold">2</text>
<path d="M140.5,171.5 L207.5,171.5 M216.5,180.5 L216.5,193.5 M207.5,202.5 L140.5,202.5 M131.5,193.5 L131.5,180.5 M131.5,180.5 A9,9 0 0 1 140.5,171.5 M207.5,171.5 A9,9 0 0 1 216.5,180.5 M216.5,193.5 A9,9 0 0 1 207.5,202.5 M140.5,202.5 A9,9 0 0 1 131.5,193.5" stroke="#2fae5f" stroke-width="2.6" fill="none"/>
<text x="123" y="175" font-size="14" fill="#2fae5f" font-weight="bold">3</text>
</svg>
</div>

- ลูปสีส้ม (ช่อง $1$) : $A=0,\ B=0,\ C=0,\ D=1 \Rightarrow (A+B+C+\overline{D})$
- ลูปสีน้ำเงิน (ช่อง $4,12$) : $B=1,\ C=0,\ D=0 \Rightarrow (\overline{B}+C+D)$
- ลูปสีเขียว (ช่อง $7,15$) : $B=1,\ C=1,\ D=1 \Rightarrow (\overline{B}+\overline{C}+\overline{D})$

$\mathbf{Ans}\quad d = (A+B+C+\overline{D})(\overline{B}+C+D)(\overline{B}+\overline{C}+\overline{D})$

### หาสมการของ segment e (BCD-8421, Maxterm) {code=bcd; method=orand,nor; digit=0,2,6,8}

$\mathbf{Sol}^{n}$

จากตารางความจริง ช่องที่ $e = 0$ คือ เลขรหัส $1,3,4,5,7,9$ และช่องที่เป็น $d$ คือ $10,11,12,13,14,15$

$e = \prod M(1,3,4,5,7,9) \cdot d(10,11,12,13,14,15)$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="296" height="280" viewBox="0 0 296 280" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.6" fill="none">
<rect x="66" y="52" width="216" height="216"/>
<line x1="120" y1="52" x2="120" y2="268"/>
<line x1="66" y1="106" x2="282" y2="106"/>
<line x1="174" y1="52" x2="174" y2="268"/>
<line x1="66" y1="160" x2="282" y2="160"/>
<line x1="228" y1="52" x2="228" y2="268"/>
<line x1="66" y1="214" x2="282" y2="214"/>
<line x1="8" y1="8" x2="66" y2="52"/>
</g>
<text x="93" y="37" text-anchor="middle">00</text>
<text x="147" y="37" text-anchor="middle">01</text>
<text x="201" y="37" text-anchor="middle">11</text>
<text x="255" y="37" text-anchor="middle">10</text>
<text x="57" y="85" text-anchor="end">00</text>
<text x="57" y="139" text-anchor="end">01</text>
<text x="57" y="193" text-anchor="end">11</text>
<text x="57" y="247" text-anchor="end">10</text>
<text x="60" y="18" text-anchor="end">AB</text><text x="10" y="40">CD</text>
<text x="115" y="65" text-anchor="end" font-size="11" fill-opacity="0.65">0</text>
<text x="169" y="65" text-anchor="end" font-size="11" fill-opacity="0.65">4</text>
<text x="147" y="87" text-anchor="middle" font-size="22">0</text>
<text x="223" y="65" text-anchor="end" font-size="11" fill-opacity="0.65">12</text>
<text x="201" y="87" text-anchor="middle" font-size="22">d</text>
<text x="277" y="65" text-anchor="end" font-size="11" fill-opacity="0.65">8</text>
<text x="115" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">1</text>
<text x="93" y="141" text-anchor="middle" font-size="22">0</text>
<text x="169" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">5</text>
<text x="147" y="141" text-anchor="middle" font-size="22">0</text>
<text x="223" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">13</text>
<text x="201" y="141" text-anchor="middle" font-size="22">d</text>
<text x="277" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">9</text>
<text x="255" y="141" text-anchor="middle" font-size="22">0</text>
<text x="115" y="173" text-anchor="end" font-size="11" fill-opacity="0.65">3</text>
<text x="93" y="195" text-anchor="middle" font-size="22">0</text>
<text x="169" y="173" text-anchor="end" font-size="11" fill-opacity="0.65">7</text>
<text x="147" y="195" text-anchor="middle" font-size="22">0</text>
<text x="223" y="173" text-anchor="end" font-size="11" fill-opacity="0.65">15</text>
<text x="201" y="195" text-anchor="middle" font-size="22">d</text>
<text x="277" y="173" text-anchor="end" font-size="11" fill-opacity="0.65">11</text>
<text x="255" y="195" text-anchor="middle" font-size="22">d</text>
<text x="115" y="227" text-anchor="end" font-size="11" fill-opacity="0.65">2</text>
<text x="169" y="227" text-anchor="end" font-size="11" fill-opacity="0.65">6</text>
<text x="223" y="227" text-anchor="end" font-size="11" fill-opacity="0.65">14</text>
<text x="201" y="249" text-anchor="middle" font-size="22">d</text>
<text x="277" y="227" text-anchor="end" font-size="11" fill-opacity="0.65">10</text>
<text x="255" y="249" text-anchor="middle" font-size="22">d</text>
<path d="M79.5,110.5 L268.5,110.5 M277.5,119.5 L277.5,200.5 M268.5,209.5 L79.5,209.5 M70.5,200.5 L70.5,119.5 M70.5,119.5 A9,9 0 0 1 79.5,110.5 M268.5,110.5 A9,9 0 0 1 277.5,119.5 M277.5,200.5 A9,9 0 0 1 268.5,209.5 M79.5,209.5 A9,9 0 0 1 70.5,200.5" stroke="#e8743b" stroke-width="2.6" fill="none"/>
<text x="69" y="121" font-size="14" fill="#e8743b" font-weight="bold">1</text>
<path d="M137,60 L211,60 M220,69 L220,143 M211,152 L137,152 M128,143 L128,69 M128,69 A9,9 0 0 1 137,60 M211,60 A9,9 0 0 1 220,69 M220,143 A9,9 0 0 1 211,152 M137,152 A9,9 0 0 1 128,143" stroke="#3b8be8" stroke-width="2.6" fill="none"/>
<text x="123" y="67" font-size="14" fill="#3b8be8" font-weight="bold">2</text>
</svg>
</div>

- ลูปสีส้ม (ช่อง $1,3,5,7,9,11,13,15$) : $D=1 \Rightarrow \overline{D}$
- ลูปสีน้ำเงิน (ช่อง $4,5,12,13$) : $B=1,\ C=0 \Rightarrow (\overline{B}+C)$

$\mathbf{Ans}\quad e = (\overline{D})(\overline{B}+C)$

### หาสมการของ segment f (BCD-8421, Maxterm) {code=bcd; method=orand,nor; digit=0,4,5,6,8,9}

$\mathbf{Sol}^{n}$

จากตารางความจริง ช่องที่ $f = 0$ คือ เลขรหัส $1,2,3,7$ และช่องที่เป็น $d$ คือ $10,11,12,13,14,15$

$f = \prod M(1,2,3,7) \cdot d(10,11,12,13,14,15)$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="296" height="280" viewBox="0 0 296 280" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.6" fill="none">
<rect x="66" y="52" width="216" height="216"/>
<line x1="120" y1="52" x2="120" y2="268"/>
<line x1="66" y1="106" x2="282" y2="106"/>
<line x1="174" y1="52" x2="174" y2="268"/>
<line x1="66" y1="160" x2="282" y2="160"/>
<line x1="228" y1="52" x2="228" y2="268"/>
<line x1="66" y1="214" x2="282" y2="214"/>
<line x1="8" y1="8" x2="66" y2="52"/>
</g>
<text x="93" y="37" text-anchor="middle">00</text>
<text x="147" y="37" text-anchor="middle">01</text>
<text x="201" y="37" text-anchor="middle">11</text>
<text x="255" y="37" text-anchor="middle">10</text>
<text x="57" y="85" text-anchor="end">00</text>
<text x="57" y="139" text-anchor="end">01</text>
<text x="57" y="193" text-anchor="end">11</text>
<text x="57" y="247" text-anchor="end">10</text>
<text x="60" y="18" text-anchor="end">AB</text><text x="10" y="40">CD</text>
<text x="115" y="65" text-anchor="end" font-size="11" fill-opacity="0.65">0</text>
<text x="169" y="65" text-anchor="end" font-size="11" fill-opacity="0.65">4</text>
<text x="223" y="65" text-anchor="end" font-size="11" fill-opacity="0.65">12</text>
<text x="201" y="87" text-anchor="middle" font-size="22">d</text>
<text x="277" y="65" text-anchor="end" font-size="11" fill-opacity="0.65">8</text>
<text x="115" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">1</text>
<text x="93" y="141" text-anchor="middle" font-size="22">0</text>
<text x="169" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">5</text>
<text x="223" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">13</text>
<text x="201" y="141" text-anchor="middle" font-size="22">d</text>
<text x="277" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">9</text>
<text x="115" y="173" text-anchor="end" font-size="11" fill-opacity="0.65">3</text>
<text x="93" y="195" text-anchor="middle" font-size="22">0</text>
<text x="169" y="173" text-anchor="end" font-size="11" fill-opacity="0.65">7</text>
<text x="147" y="195" text-anchor="middle" font-size="22">0</text>
<text x="223" y="173" text-anchor="end" font-size="11" fill-opacity="0.65">15</text>
<text x="201" y="195" text-anchor="middle" font-size="22">d</text>
<text x="277" y="173" text-anchor="end" font-size="11" fill-opacity="0.65">11</text>
<text x="255" y="195" text-anchor="middle" font-size="22">d</text>
<text x="115" y="227" text-anchor="end" font-size="11" fill-opacity="0.65">2</text>
<text x="93" y="249" text-anchor="middle" font-size="22">0</text>
<text x="169" y="227" text-anchor="end" font-size="11" fill-opacity="0.65">6</text>
<text x="223" y="227" text-anchor="end" font-size="11" fill-opacity="0.65">14</text>
<text x="201" y="249" text-anchor="middle" font-size="22">d</text>
<text x="277" y="227" text-anchor="end" font-size="11" fill-opacity="0.65">10</text>
<text x="255" y="249" text-anchor="middle" font-size="22">d</text>
<path d="M79.5,110.5 L106.5,110.5 M115.5,119.5 L115.5,200.5 M106.5,209.5 L79.5,209.5 M70.5,200.5 L70.5,119.5 M70.5,119.5 A9,9 0 0 1 79.5,110.5 M106.5,110.5 A9,9 0 0 1 115.5,119.5 M115.5,200.5 A9,9 0 0 1 106.5,209.5 M79.5,209.5 A9,9 0 0 1 70.5,200.5" stroke="#e8743b" stroke-width="2.6" fill="none"/>
<text x="69" y="121" font-size="14" fill="#e8743b" font-weight="bold">1</text>
<path d="M66,168 L103,168 M112,177 L112,251 M103,260 L66,260 M103,168 A9,9 0 0 1 112,177 M112,251 A9,9 0 0 1 103,260" stroke="#3b8be8" stroke-width="2.6" fill="none"/>
<text x="69" y="175" font-size="14" fill="#3b8be8" font-weight="bold">2</text>
<path d="M245,168 L282,168 M282,260 L245,260 M236,251 L236,177 M236,177 A9,9 0 0 1 245,168 M245,260 A9,9 0 0 1 236,251" stroke="#3b8be8" stroke-width="2.6" fill="none"/>
<path d="M86.5,171.5 L261.5,171.5 M270.5,180.5 L270.5,193.5 M261.5,202.5 L86.5,202.5 M77.5,193.5 L77.5,180.5 M77.5,180.5 A9,9 0 0 1 86.5,171.5 M261.5,171.5 A9,9 0 0 1 270.5,180.5 M270.5,193.5 A9,9 0 0 1 261.5,202.5 M86.5,202.5 A9,9 0 0 1 77.5,193.5" stroke="#2fae5f" stroke-width="2.6" fill="none"/>
<text x="79" y="175" font-size="14" fill="#2fae5f" font-weight="bold">3</text>
</svg>
</div>

- ลูปสีส้ม (ช่อง $1,3$) : $A=0,\ B=0,\ D=1 \Rightarrow (A+B+\overline{D})$
- ลูปสีน้ำเงิน (ช่อง $2,3,10,11$) : $B=0,\ C=1 \Rightarrow (B+\overline{C})$
- ลูปสีเขียว (ช่อง $3,7,11,15$) : $C=1,\ D=1 \Rightarrow (\overline{C}+\overline{D})$

$\mathbf{Ans}\quad f = (A+B+\overline{D})(B+\overline{C})(\overline{C}+\overline{D})$

### หาสมการของ segment g (BCD-8421, Maxterm) {code=bcd; method=orand,nor; digit=2,3,4,5,6,8,9}

$\mathbf{Sol}^{n}$

จากตารางความจริง ช่องที่ $g = 0$ คือ เลขรหัส $0,1,7$ และช่องที่เป็น $d$ คือ $10,11,12,13,14,15$

$g = \prod M(0,1,7) \cdot d(10,11,12,13,14,15)$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="296" height="280" viewBox="0 0 296 280" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.6" fill="none">
<rect x="66" y="52" width="216" height="216"/>
<line x1="120" y1="52" x2="120" y2="268"/>
<line x1="66" y1="106" x2="282" y2="106"/>
<line x1="174" y1="52" x2="174" y2="268"/>
<line x1="66" y1="160" x2="282" y2="160"/>
<line x1="228" y1="52" x2="228" y2="268"/>
<line x1="66" y1="214" x2="282" y2="214"/>
<line x1="8" y1="8" x2="66" y2="52"/>
</g>
<text x="93" y="37" text-anchor="middle">00</text>
<text x="147" y="37" text-anchor="middle">01</text>
<text x="201" y="37" text-anchor="middle">11</text>
<text x="255" y="37" text-anchor="middle">10</text>
<text x="57" y="85" text-anchor="end">00</text>
<text x="57" y="139" text-anchor="end">01</text>
<text x="57" y="193" text-anchor="end">11</text>
<text x="57" y="247" text-anchor="end">10</text>
<text x="60" y="18" text-anchor="end">AB</text><text x="10" y="40">CD</text>
<text x="115" y="65" text-anchor="end" font-size="11" fill-opacity="0.65">0</text>
<text x="93" y="87" text-anchor="middle" font-size="22">0</text>
<text x="169" y="65" text-anchor="end" font-size="11" fill-opacity="0.65">4</text>
<text x="223" y="65" text-anchor="end" font-size="11" fill-opacity="0.65">12</text>
<text x="201" y="87" text-anchor="middle" font-size="22">d</text>
<text x="277" y="65" text-anchor="end" font-size="11" fill-opacity="0.65">8</text>
<text x="115" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">1</text>
<text x="93" y="141" text-anchor="middle" font-size="22">0</text>
<text x="169" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">5</text>
<text x="223" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">13</text>
<text x="201" y="141" text-anchor="middle" font-size="22">d</text>
<text x="277" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">9</text>
<text x="115" y="173" text-anchor="end" font-size="11" fill-opacity="0.65">3</text>
<text x="169" y="173" text-anchor="end" font-size="11" fill-opacity="0.65">7</text>
<text x="147" y="195" text-anchor="middle" font-size="22">0</text>
<text x="223" y="173" text-anchor="end" font-size="11" fill-opacity="0.65">15</text>
<text x="201" y="195" text-anchor="middle" font-size="22">d</text>
<text x="277" y="173" text-anchor="end" font-size="11" fill-opacity="0.65">11</text>
<text x="255" y="195" text-anchor="middle" font-size="22">d</text>
<text x="115" y="227" text-anchor="end" font-size="11" fill-opacity="0.65">2</text>
<text x="169" y="227" text-anchor="end" font-size="11" fill-opacity="0.65">6</text>
<text x="223" y="227" text-anchor="end" font-size="11" fill-opacity="0.65">14</text>
<text x="201" y="249" text-anchor="middle" font-size="22">d</text>
<text x="277" y="227" text-anchor="end" font-size="11" fill-opacity="0.65">10</text>
<text x="255" y="249" text-anchor="middle" font-size="22">d</text>
<path d="M79.5,56.5 L106.5,56.5 M115.5,65.5 L115.5,146.5 M106.5,155.5 L79.5,155.5 M70.5,146.5 L70.5,65.5 M70.5,65.5 A9,9 0 0 1 79.5,56.5 M106.5,56.5 A9,9 0 0 1 115.5,65.5 M115.5,146.5 A9,9 0 0 1 106.5,155.5 M79.5,155.5 A9,9 0 0 1 70.5,146.5" stroke="#e8743b" stroke-width="2.6" fill="none"/>
<text x="69" y="67" font-size="14" fill="#e8743b" font-weight="bold">1</text>
<path d="M137,168 L211,168 M220,177 L220,197 M211,206 L137,206 M128,197 L128,177 M128,177 A9,9 0 0 1 137,168 M211,168 A9,9 0 0 1 220,177 M220,197 A9,9 0 0 1 211,206 M137,206 A9,9 0 0 1 128,197" stroke="#3b8be8" stroke-width="2.6" fill="none"/>
<text x="123" y="175" font-size="14" fill="#3b8be8" font-weight="bold">2</text>
</svg>
</div>

- ลูปสีส้ม (ช่อง $0,1$) : $A=0,\ B=0,\ C=0 \Rightarrow (A+B+C)$
- ลูปสีน้ำเงิน (ช่อง $7,15$) : $B=1,\ C=1,\ D=1 \Rightarrow (\overline{B}+\overline{C}+\overline{D})$

$\mathbf{Ans}\quad g = (A+B+C)(\overline{B}+\overline{C}+\overline{D})$

### แปลงสมการ segment a เป็น NAND อย่างเดียว (BCD-8421) {code=bcd; method=nand; digit=0,2,3,5,6,7,8,9}

$\mathbf{Sol}^{n}$

จากสมการผลบวกของผลคูณ ของ K-map แปลงให้ใช้ NAND อย่างเดียว ด้วยการคอมพลีเมนต์ 2 ครั้ง แล้วใช้ De Morgan

$$\begin{aligned}
a &= A+C+BD+\overline{B}\,\overline{D} \\
&= \overline{\overline{A+C+BD+\overline{B}\,\overline{D}}} && \text{(คอมพลีเมนต์ 2 ครั้ง)} \\
&= \overline{\overline{A}\cdot \overline{C}\cdot \overline{BD}\cdot \overline{\overline{B}\,\overline{D}}} && \text{(De Morgan)}
\end{aligned}$$

พจน์ที่มีตัวแปรตัวเดียว (ไม่มีเกตชั้นใน) ต่อตัวแปรที่คอมพลีเมนต์เข้าเกตชั้นนอกได้เลย

$\mathbf{Ans}\quad \begin{aligned}a &= \overline{\overline{A}\cdot \overline{C}\cdot \overline{BD}\cdot \overline{\overline{B}\,\overline{D}}}\end{aligned}$

### แปลงสมการ segment b เป็น NAND อย่างเดียว (BCD-8421) {code=bcd; method=nand; digit=0,1,2,3,4,7,8,9}

$\mathbf{Sol}^{n}$

จากสมการผลบวกของผลคูณ ของ K-map แปลงให้ใช้ NAND อย่างเดียว ด้วยการคอมพลีเมนต์ 2 ครั้ง แล้วใช้ De Morgan

$$\begin{aligned}
b &= \overline{B}+\overline{C}\,\overline{D}+CD \\
&= \overline{\overline{\overline{B}+\overline{C}\,\overline{D}+CD}} && \text{(คอมพลีเมนต์ 2 ครั้ง)} \\
&= \overline{B\cdot \overline{\overline{C}\,\overline{D}}\cdot \overline{CD}} && \text{(De Morgan)}
\end{aligned}$$

พจน์ที่มีตัวแปรตัวเดียว (ไม่มีเกตชั้นใน) ต่อตัวแปรที่คอมพลีเมนต์เข้าเกตชั้นนอกได้เลย

$\mathbf{Ans}\quad \begin{aligned}b &= \overline{B\cdot \overline{\overline{C}\,\overline{D}}\cdot \overline{CD}}\end{aligned}$

### แปลงสมการ segment c เป็น NAND อย่างเดียว (BCD-8421) {code=bcd; method=nand; digit=0,1,3,4,5,6,7,8,9}

$\mathbf{Sol}^{n}$

จากสมการผลบวกของผลคูณ ของ K-map แปลงให้ใช้ NAND อย่างเดียว ด้วยการคอมพลีเมนต์ 2 ครั้ง แล้วใช้ De Morgan

$$\begin{aligned}
c &= B+\overline{C}+D \\
&= \overline{\overline{B+\overline{C}+D}} && \text{(คอมพลีเมนต์ 2 ครั้ง)} \\
&= \overline{\overline{B}\cdot C\cdot \overline{D}} && \text{(De Morgan)}
\end{aligned}$$

พจน์ที่มีตัวแปรตัวเดียว (ไม่มีเกตชั้นใน) ต่อตัวแปรที่คอมพลีเมนต์เข้าเกตชั้นนอกได้เลย

$\mathbf{Ans}\quad \begin{aligned}c &= \overline{\overline{B}\cdot C\cdot \overline{D}}\end{aligned}$

### แปลงสมการ segment d เป็น NAND อย่างเดียว (BCD-8421) {code=bcd; method=nand; digit=0,2,3,5,6,8,9}

$\mathbf{Sol}^{n}$

จากสมการผลบวกของผลคูณ ของ K-map แปลงให้ใช้ NAND อย่างเดียว ด้วยการคอมพลีเมนต์ 2 ครั้ง แล้วใช้ De Morgan

$$\begin{aligned}
d &= A+\overline{B}\,\overline{D}+\overline{B}C+C\overline{D}+B\overline{C}D \\
&= \overline{\overline{A+\overline{B}\,\overline{D}+\overline{B}C+C\overline{D}+B\overline{C}D}} && \text{(คอมพลีเมนต์ 2 ครั้ง)} \\
&= \overline{\overline{A}\cdot \overline{\overline{B}\,\overline{D}}\cdot \overline{\overline{B}C}\cdot \overline{C\overline{D}}\cdot \overline{B\overline{C}D}} && \text{(De Morgan)}
\end{aligned}$$

พจน์ที่มีตัวแปรตัวเดียว (ไม่มีเกตชั้นใน) ต่อตัวแปรที่คอมพลีเมนต์เข้าเกตชั้นนอกได้เลย

$\mathbf{Ans}\quad \begin{aligned}d &= \overline{\overline{A}\cdot \overline{\overline{B}\,\overline{D}}\cdot \overline{\overline{B}C}\cdot \overline{C\overline{D}}\cdot \overline{B\overline{C}D}}\end{aligned}$

### แปลงสมการ segment e เป็น NAND อย่างเดียว (BCD-8421) {code=bcd; method=nand; digit=0,2,6,8}

$\mathbf{Sol}^{n}$

จากสมการผลบวกของผลคูณ ของ K-map แปลงให้ใช้ NAND อย่างเดียว ด้วยการคอมพลีเมนต์ 2 ครั้ง แล้วใช้ De Morgan

$$\begin{aligned}
e &= \overline{B}\,\overline{D}+C\overline{D} \\
&= \overline{\overline{\overline{B}\,\overline{D}+C\overline{D}}} && \text{(คอมพลีเมนต์ 2 ครั้ง)} \\
&= \overline{\overline{\overline{B}\,\overline{D}}\cdot \overline{C\overline{D}}} && \text{(De Morgan)}
\end{aligned}$$

พจน์ที่มีตัวแปรตัวเดียว (ไม่มีเกตชั้นใน) ต่อตัวแปรที่คอมพลีเมนต์เข้าเกตชั้นนอกได้เลย

$\mathbf{Ans}\quad \begin{aligned}e &= \overline{\overline{\overline{B}\,\overline{D}}\cdot \overline{C\overline{D}}}\end{aligned}$

### แปลงสมการ segment f เป็น NAND อย่างเดียว (BCD-8421) {code=bcd; method=nand; digit=0,4,5,6,8,9}

$\mathbf{Sol}^{n}$

จากสมการผลบวกของผลคูณ ของ K-map แปลงให้ใช้ NAND อย่างเดียว ด้วยการคอมพลีเมนต์ 2 ครั้ง แล้วใช้ De Morgan

$$\begin{aligned}
f &= A+B\overline{C}+B\overline{D}+\overline{C}\,\overline{D} \\
&= \overline{\overline{A+B\overline{C}+B\overline{D}+\overline{C}\,\overline{D}}} && \text{(คอมพลีเมนต์ 2 ครั้ง)} \\
&= \overline{\overline{A}\cdot \overline{B\overline{C}}\cdot \overline{B\overline{D}}\cdot \overline{\overline{C}\,\overline{D}}} && \text{(De Morgan)}
\end{aligned}$$

พจน์ที่มีตัวแปรตัวเดียว (ไม่มีเกตชั้นใน) ต่อตัวแปรที่คอมพลีเมนต์เข้าเกตชั้นนอกได้เลย

$\mathbf{Ans}\quad \begin{aligned}f &= \overline{\overline{A}\cdot \overline{B\overline{C}}\cdot \overline{B\overline{D}}\cdot \overline{\overline{C}\,\overline{D}}}\end{aligned}$

### แปลงสมการ segment g เป็น NAND อย่างเดียว (BCD-8421) {code=bcd; method=nand; digit=2,3,4,5,6,8,9}

$\mathbf{Sol}^{n}$

จากสมการผลบวกของผลคูณ ของ K-map แปลงให้ใช้ NAND อย่างเดียว ด้วยการคอมพลีเมนต์ 2 ครั้ง แล้วใช้ De Morgan

$$\begin{aligned}
g &= B\overline{C}+A\overline{C}+\overline{B}C+C\overline{D} \\
&= \overline{\overline{B\overline{C}+A\overline{C}+\overline{B}C+C\overline{D}}} && \text{(คอมพลีเมนต์ 2 ครั้ง)} \\
&= \overline{\overline{B\overline{C}}\cdot \overline{A\overline{C}}\cdot \overline{\overline{B}C}\cdot \overline{C\overline{D}}} && \text{(De Morgan)}
\end{aligned}$$

พจน์ที่มีตัวแปรตัวเดียว (ไม่มีเกตชั้นใน) ต่อตัวแปรที่คอมพลีเมนต์เข้าเกตชั้นนอกได้เลย

$\mathbf{Ans}\quad \begin{aligned}g &= \overline{\overline{B\overline{C}}\cdot \overline{A\overline{C}}\cdot \overline{\overline{B}C}\cdot \overline{C\overline{D}}}\end{aligned}$

### แปลงสมการ segment a เป็น NOR อย่างเดียว (BCD-8421) {code=bcd; method=nor; digit=0,2,3,5,6,7,8,9}

$\mathbf{Sol}^{n}$

จากสมการผลคูณของผลบวก ของ K-map แปลงให้ใช้ NOR อย่างเดียว ด้วยการคอมพลีเมนต์ 2 ครั้ง แล้วใช้ De Morgan

$$\begin{aligned}
a &= (A+B+C+\overline{D})(\overline{B}+C+D) \\
&= \overline{\overline{(A+B+C+\overline{D})(\overline{B}+C+D)}} && \text{(คอมพลีเมนต์ 2 ครั้ง)} \\
&= \overline{\overline{A+B+C+\overline{D}}+\overline{\overline{B}+C+D}} && \text{(De Morgan)}
\end{aligned}$$

พจน์ที่มีตัวแปรตัวเดียวต่อตัวแปรที่คอมพลีเมนต์เข้าเกตชั้นนอกได้เลย และสมการที่มีพจน์เดียวใช้ NOR เกตตัวเดียวแล้วต่อ NOT อีกชั้น

$\mathbf{Ans}\quad \begin{aligned}a &= \overline{\overline{A+B+C+\overline{D}}+\overline{\overline{B}+C+D}}\end{aligned}$

### แปลงสมการ segment b เป็น NOR อย่างเดียว (BCD-8421) {code=bcd; method=nor; digit=0,1,2,3,4,7,8,9}

$\mathbf{Sol}^{n}$

จากสมการผลคูณของผลบวก ของ K-map แปลงให้ใช้ NOR อย่างเดียว ด้วยการคอมพลีเมนต์ 2 ครั้ง แล้วใช้ De Morgan

$$\begin{aligned}
b &= (\overline{B}+C+\overline{D})(\overline{B}+\overline{C}+D) \\
&= \overline{\overline{(\overline{B}+C+\overline{D})(\overline{B}+\overline{C}+D)}} && \text{(คอมพลีเมนต์ 2 ครั้ง)} \\
&= \overline{\overline{\overline{B}+C+\overline{D}}+\overline{\overline{B}+\overline{C}+D}} && \text{(De Morgan)}
\end{aligned}$$

พจน์ที่มีตัวแปรตัวเดียวต่อตัวแปรที่คอมพลีเมนต์เข้าเกตชั้นนอกได้เลย และสมการที่มีพจน์เดียวใช้ NOR เกตตัวเดียวแล้วต่อ NOT อีกชั้น

$\mathbf{Ans}\quad \begin{aligned}b &= \overline{\overline{\overline{B}+C+\overline{D}}+\overline{\overline{B}+\overline{C}+D}}\end{aligned}$

### แปลงสมการ segment c เป็น NOR อย่างเดียว (BCD-8421) {code=bcd; method=nor; digit=0,1,3,4,5,6,7,8,9}

$\mathbf{Sol}^{n}$

จากสมการผลคูณของผลบวก ของ K-map แปลงให้ใช้ NOR อย่างเดียว ด้วยการคอมพลีเมนต์ 2 ครั้ง แล้วใช้ De Morgan

$$\begin{aligned}
c &= (B+\overline{C}+D) \\
&= \overline{\overline{B+\overline{C}+D}} && \text{(คอมพลีเมนต์ 2 ครั้ง: NOR แล้วต่อ NOT)}
\end{aligned}$$

พจน์ที่มีตัวแปรตัวเดียวต่อตัวแปรที่คอมพลีเมนต์เข้าเกตชั้นนอกได้เลย และสมการที่มีพจน์เดียวใช้ NOR เกตตัวเดียวแล้วต่อ NOT อีกชั้น

$\mathbf{Ans}\quad \begin{aligned}c &= \overline{\overline{B+\overline{C}+D}}\end{aligned}$

### แปลงสมการ segment d เป็น NOR อย่างเดียว (BCD-8421) {code=bcd; method=nor; digit=0,2,3,5,6,8,9}

$\mathbf{Sol}^{n}$

จากสมการผลคูณของผลบวก ของ K-map แปลงให้ใช้ NOR อย่างเดียว ด้วยการคอมพลีเมนต์ 2 ครั้ง แล้วใช้ De Morgan

$$\begin{aligned}
d &= (A+B+C+\overline{D})(\overline{B}+C+D)(\overline{B}+\overline{C}+\overline{D}) \\
&= \overline{\overline{(A+B+C+\overline{D})(\overline{B}+C+D)(\overline{B}+\overline{C}+\overline{D})}} && \text{(คอมพลีเมนต์ 2 ครั้ง)} \\
&= \overline{\overline{A+B+C+\overline{D}}+\overline{\overline{B}+C+D}+\overline{\overline{B}+\overline{C}+\overline{D}}} && \text{(De Morgan)}
\end{aligned}$$

พจน์ที่มีตัวแปรตัวเดียวต่อตัวแปรที่คอมพลีเมนต์เข้าเกตชั้นนอกได้เลย และสมการที่มีพจน์เดียวใช้ NOR เกตตัวเดียวแล้วต่อ NOT อีกชั้น

$\mathbf{Ans}\quad \begin{aligned}d &= \overline{\overline{A+B+C+\overline{D}}+\overline{\overline{B}+C+D}+\overline{\overline{B}+\overline{C}+\overline{D}}}\end{aligned}$

### แปลงสมการ segment e เป็น NOR อย่างเดียว (BCD-8421) {code=bcd; method=nor; digit=0,2,6,8}

$\mathbf{Sol}^{n}$

จากสมการผลคูณของผลบวก ของ K-map แปลงให้ใช้ NOR อย่างเดียว ด้วยการคอมพลีเมนต์ 2 ครั้ง แล้วใช้ De Morgan

$$\begin{aligned}
e &= (\overline{D})(\overline{B}+C) \\
&= \overline{\overline{(\overline{D})(\overline{B}+C)}} && \text{(คอมพลีเมนต์ 2 ครั้ง)} \\
&= \overline{D+\overline{\overline{B}+C}} && \text{(De Morgan)}
\end{aligned}$$

พจน์ที่มีตัวแปรตัวเดียวต่อตัวแปรที่คอมพลีเมนต์เข้าเกตชั้นนอกได้เลย และสมการที่มีพจน์เดียวใช้ NOR เกตตัวเดียวแล้วต่อ NOT อีกชั้น

$\mathbf{Ans}\quad \begin{aligned}e &= \overline{D+\overline{\overline{B}+C}}\end{aligned}$

### แปลงสมการ segment f เป็น NOR อย่างเดียว (BCD-8421) {code=bcd; method=nor; digit=0,4,5,6,8,9}

$\mathbf{Sol}^{n}$

จากสมการผลคูณของผลบวก ของ K-map แปลงให้ใช้ NOR อย่างเดียว ด้วยการคอมพลีเมนต์ 2 ครั้ง แล้วใช้ De Morgan

$$\begin{aligned}
f &= (A+B+\overline{D})(B+\overline{C})(\overline{C}+\overline{D}) \\
&= \overline{\overline{(A+B+\overline{D})(B+\overline{C})(\overline{C}+\overline{D})}} && \text{(คอมพลีเมนต์ 2 ครั้ง)} \\
&= \overline{\overline{A+B+\overline{D}}+\overline{B+\overline{C}}+\overline{\overline{C}+\overline{D}}} && \text{(De Morgan)}
\end{aligned}$$

พจน์ที่มีตัวแปรตัวเดียวต่อตัวแปรที่คอมพลีเมนต์เข้าเกตชั้นนอกได้เลย และสมการที่มีพจน์เดียวใช้ NOR เกตตัวเดียวแล้วต่อ NOT อีกชั้น

$\mathbf{Ans}\quad \begin{aligned}f &= \overline{\overline{A+B+\overline{D}}+\overline{B+\overline{C}}+\overline{\overline{C}+\overline{D}}}\end{aligned}$

### แปลงสมการ segment g เป็น NOR อย่างเดียว (BCD-8421) {code=bcd; method=nor; digit=2,3,4,5,6,8,9}

$\mathbf{Sol}^{n}$

จากสมการผลคูณของผลบวก ของ K-map แปลงให้ใช้ NOR อย่างเดียว ด้วยการคอมพลีเมนต์ 2 ครั้ง แล้วใช้ De Morgan

$$\begin{aligned}
g &= (A+B+C)(\overline{B}+\overline{C}+\overline{D}) \\
&= \overline{\overline{(A+B+C)(\overline{B}+\overline{C}+\overline{D})}} && \text{(คอมพลีเมนต์ 2 ครั้ง)} \\
&= \overline{\overline{A+B+C}+\overline{\overline{B}+\overline{C}+\overline{D}}} && \text{(De Morgan)}
\end{aligned}$$

พจน์ที่มีตัวแปรตัวเดียวต่อตัวแปรที่คอมพลีเมนต์เข้าเกตชั้นนอกได้เลย และสมการที่มีพจน์เดียวใช้ NOR เกตตัวเดียวแล้วต่อ NOT อีกชั้น

$\mathbf{Ans}\quad \begin{aligned}g &= \overline{\overline{A+B+C}+\overline{\overline{B}+\overline{C}+\overline{D}}}\end{aligned}$

### วงจรของเลข 0 (BCD-8421, AND/OR) {code=bcd; method=andor; digit=0}

$\mathbf{Sol}^{n}$

เลข $0$ ใช้ segment $a, b, c, d, e, f$ จึงเขียนวงจรเฉพาะ segment เหล่านี้ ต่อเข้าด้วยกันเป็นวงจรเดียว : ต้องมีทั้งตัวปกติและตัวคอมพลีเมนต์ของอินพุต จึงใช้เกต NOT ต่อจากอินพุต แต่ละพจน์ผลคูณใช้ AND เกต แล้วนำทุกพจน์เข้า OR เกต (พจน์ที่มีตัวแปรตัวเดียวต่อเข้า OR เกตได้เลย)

$\mathbf{Ans}\quad \begin{aligned}a &= A+C+BD+\overline{B}\,\overline{D} \\ b &= \overline{B}+\overline{C}\,\overline{D}+CD \\ c &= B+\overline{C}+D \\ d &= A+\overline{B}\,\overline{D}+\overline{B}C+C\overline{D}+B\overline{C}D \\ e &= \overline{B}\,\overline{D}+C\overline{D} \\ f &= A+B\overline{C}+B\overline{D}+\overline{C}\,\overline{D}\end{aligned}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="602" height="1060" viewBox="0 0 602 1060" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<line x1="34" y1="28" x2="34" y2="871"/>
<line x1="114" y1="52" x2="114" y2="758"/>
<line x1="66" y1="28" x2="66" y2="954"/>
<line x1="192" y1="52" x2="192" y2="1006"/>
<line x1="144" y1="28" x2="144" y2="810"/>
<line x1="270" y1="52" x2="270" y2="1020"/>
<line x1="222" y1="28" x2="222" y2="704"/>
<line x1="34" y1="89" x2="438" y2="89"/>
<line x1="438" y1="89" x2="438" y2="132"/>
<line x1="438" y1="132" x2="452.5" y2="132"/>
<line x1="144" y1="113" x2="418" y2="113"/>
<line x1="418" y1="113" x2="418" y2="146"/>
<line x1="418" y1="146" x2="454.7" y2="146"/>
<line x1="66" y1="144" x2="330" y2="144"/>
<line x1="222" y1="158" x2="330" y2="158"/>
<line x1="382" y1="151" x2="408" y2="151"/>
<line x1="408" y1="151" x2="408" y2="160"/>
<line x1="408" y1="160" x2="454.7" y2="160"/>
<line x1="114" y1="196" x2="330" y2="196"/>
<line x1="270" y1="210" x2="330" y2="210"/>
<line x1="382" y1="203" x2="428" y2="203"/>
<line x1="428" y1="203" x2="428" y2="174"/>
<line x1="428" y1="174" x2="452.5" y2="174"/>
<line x1="508" y1="153" x2="538" y2="153"/>
<line x1="114" y1="257" x2="428" y2="257"/>
<line x1="428" y1="257" x2="428" y2="295"/>
<line x1="428" y1="295" x2="443.2" y2="295"/>
<line x1="192" y1="288" x2="330" y2="288"/>
<line x1="270" y1="302" x2="330" y2="302"/>
<line x1="382" y1="295" x2="408" y2="295"/>
<line x1="408" y1="295" x2="408" y2="309"/>
<line x1="408" y1="309" x2="445" y2="309"/>
<line x1="144" y1="340" x2="330" y2="340"/>
<line x1="222" y1="354" x2="330" y2="354"/>
<line x1="382" y1="347" x2="418" y2="347"/>
<line x1="418" y1="347" x2="418" y2="323"/>
<line x1="418" y1="323" x2="443.2" y2="323"/>
<line x1="498" y1="309" x2="528" y2="309"/>
<line x1="66" y1="401" x2="428" y2="401"/>
<line x1="428" y1="401" x2="428" y2="411"/>
<line x1="428" y1="411" x2="443.2" y2="411"/>
<line x1="192" y1="425" x2="445" y2="425"/>
<line x1="222" y1="449" x2="418" y2="449"/>
<line x1="418" y1="449" x2="418" y2="439"/>
<line x1="418" y1="439" x2="443.2" y2="439"/>
<line x1="498" y1="425" x2="528" y2="425"/>
<line x1="34" y1="489" x2="448" y2="489"/>
<line x1="448" y1="489" x2="448" y2="572"/>
<line x1="448" y1="572" x2="461.9" y2="572"/>
<line x1="114" y1="520" x2="330" y2="520"/>
<line x1="270" y1="534" x2="330" y2="534"/>
<line x1="382" y1="527" x2="428" y2="527"/>
<line x1="428" y1="527" x2="428" y2="586"/>
<line x1="428" y1="586" x2="464.2" y2="586"/>
<line x1="114" y1="572" x2="330" y2="572"/>
<line x1="144" y1="586" x2="330" y2="586"/>
<line x1="382" y1="579" x2="408" y2="579"/>
<line x1="408" y1="579" x2="408" y2="600"/>
<line x1="408" y1="600" x2="465" y2="600"/>
<line x1="144" y1="624" x2="330" y2="624"/>
<line x1="270" y1="638" x2="330" y2="638"/>
<line x1="382" y1="631" x2="418" y2="631"/>
<line x1="418" y1="631" x2="418" y2="614"/>
<line x1="418" y1="614" x2="464.2" y2="614"/>
<line x1="66" y1="676" x2="330" y2="676"/>
<line x1="192" y1="690" x2="330" y2="690"/>
<line x1="222" y1="704" x2="330" y2="704"/>
<line x1="382" y1="690" x2="438" y2="690"/>
<line x1="438" y1="690" x2="438" y2="628"/>
<line x1="438" y1="628" x2="461.9" y2="628"/>
<line x1="518" y1="600" x2="548" y2="600"/>
<line x1="114" y1="758" x2="330" y2="758"/>
<line x1="270" y1="772" x2="330" y2="772"/>
<line x1="382" y1="765" x2="418" y2="765"/>
<line x1="418" y1="765" x2="418" y2="784"/>
<line x1="418" y1="784" x2="434.2" y2="784"/>
<line x1="144" y1="810" x2="330" y2="810"/>
<line x1="270" y1="824" x2="330" y2="824"/>
<line x1="382" y1="817" x2="408" y2="817"/>
<line x1="408" y1="817" x2="408" y2="798"/>
<line x1="408" y1="798" x2="434.2" y2="798"/>
<line x1="488" y1="791" x2="518" y2="791"/>
<line x1="34" y1="871" x2="438" y2="871"/>
<line x1="438" y1="871" x2="438" y2="928"/>
<line x1="438" y1="928" x2="452.5" y2="928"/>
<line x1="66" y1="902" x2="330" y2="902"/>
<line x1="192" y1="916" x2="330" y2="916"/>
<line x1="382" y1="909" x2="418" y2="909"/>
<line x1="418" y1="909" x2="418" y2="942"/>
<line x1="418" y1="942" x2="454.7" y2="942"/>
<line x1="66" y1="954" x2="330" y2="954"/>
<line x1="270" y1="968" x2="330" y2="968"/>
<line x1="382" y1="961" x2="408" y2="961"/>
<line x1="408" y1="961" x2="408" y2="956"/>
<line x1="408" y1="956" x2="454.7" y2="956"/>
<line x1="192" y1="1006" x2="330" y2="1006"/>
<line x1="270" y1="1020" x2="330" y2="1020"/>
<line x1="382" y1="1013" x2="428" y2="1013"/>
<line x1="428" y1="1013" x2="428" y2="970"/>
<line x1="428" y1="970" x2="452.5" y2="970"/>
<line x1="508" y1="949" x2="538" y2="949"/>
<line x1="66" y1="52" x2="73" y2="52"/>
<line x1="105" y1="52" x2="114" y2="52"/>
<line x1="144" y1="52" x2="151" y2="52"/>
<line x1="183" y1="52" x2="192" y2="52"/>
<line x1="222" y1="52" x2="229" y2="52"/>
<line x1="261" y1="52" x2="270" y2="52"/>
<path d="M330,130 H356 A26,21 0 0 1 356,172 H330 Z"/>
<path d="M330,182 H356 A26,21 0 0 1 356,224 H330 Z"/>
<path d="M448,118 C470,118 496,135.5 508,153 C496,170.5 470,188 448,188 Q462,153 448,118 Z"/>
<path d="M330,274 H356 A26,21 0 0 1 356,316 H330 Z"/>
<path d="M330,326 H356 A26,21 0 0 1 356,368 H330 Z"/>
<path d="M438,281 C460,281 486,295 498,309 C486,323 460,337 438,337 Q452,309 438,281 Z"/>
<path d="M438,397 C460,397 486,411 498,425 C486,439 460,453 438,453 Q452,425 438,397 Z"/>
<path d="M330,506 H356 A26,21 0 0 1 356,548 H330 Z"/>
<path d="M330,558 H356 A26,21 0 0 1 356,600 H330 Z"/>
<path d="M330,610 H356 A26,21 0 0 1 356,652 H330 Z"/>
<path d="M330,662 H356 A26,28 0 0 1 356,718 H330 Z"/>
<path d="M458,558 C480,558 506,579 518,600 C506,621 480,642 458,642 Q472,600 458,558 Z"/>
<path d="M330,744 H356 A26,21 0 0 1 356,786 H330 Z"/>
<path d="M330,796 H356 A26,21 0 0 1 356,838 H330 Z"/>
<path d="M428,770 C450,770 476,780.5 488,791 C476,801.5 450,812 428,812 Q442,791 428,770 Z"/>
<path d="M330,888 H356 A26,21 0 0 1 356,930 H330 Z"/>
<path d="M330,940 H356 A26,21 0 0 1 356,982 H330 Z"/>
<path d="M330,992 H356 A26,21 0 0 1 356,1034 H330 Z"/>
<path d="M448,914 C470,914 496,931.5 508,949 C496,966.5 470,984 448,984 Q462,949 448,914 Z"/>
<polygon points="73,40 73,64 95,52"/>
<circle cx="100" cy="52" r="5"/>
<polygon points="151,40 151,64 173,52"/>
<circle cx="178" cy="52" r="5"/>
<polygon points="229,40 229,64 251,52"/>
<circle cx="256" cy="52" r="5"/>
<circle cx="34" cy="89" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="113" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="144" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="222" cy="158" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="114" cy="196" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="210" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="114" cy="257" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="192" cy="288" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="302" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="340" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="222" cy="354" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="401" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="192" cy="425" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="222" cy="449" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="489" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="114" cy="520" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="534" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="114" cy="572" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="586" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="624" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="638" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="676" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="192" cy="690" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="222" cy="704" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="114" cy="758" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="772" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="810" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="824" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="871" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="902" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="192" cy="916" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="954" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="968" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="192" cy="1006" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="1020" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="222" cy="52" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="544" y="159">a</text>
<text x="534" y="315">b</text>
<text x="534" y="431">c</text>
<text x="554" y="606">d</text>
<text x="524" y="797">e</text>
<text x="544" y="955">f</text>
<text x="34" y="22" text-anchor="middle">A</text>
<text x="66" y="22" text-anchor="middle">B</text>
<text x="144" y="22" text-anchor="middle">C</text>
<text x="222" y="22" text-anchor="middle">D</text>
</svg>
</div>

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="74" height="118" viewBox="0 0 74 118" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(10,8) scale(1.1)"><path d="M7,4 L37,4 L33,10 L11,10 Z" fill-opacity="1"/><path d="M38,5 L38,35 L32,31 L32,11 Z" fill-opacity="1"/><path d="M38,41 L38,71 L32,65 L32,45 Z" fill-opacity="1"/><path d="M7,72 L37,72 L33,66 L11,66 Z" fill-opacity="1"/><path d="M6,41 L6,71 L12,65 L12,45 Z" fill-opacity="1"/><path d="M6,5 L6,35 L12,31 L12,11 Z" fill-opacity="1"/><path d="M7,38 L11,34 L33,34 L37,38 L33,42 L11,42 Z" fill-opacity="0.1"/></g>
<text x="34.2" y="108" text-anchor="middle">0</text>
</svg>
</div>

### วงจรของเลข 1 (BCD-8421, AND/OR) {code=bcd; method=andor; digit=1}

$\mathbf{Sol}^{n}$

เลข $1$ ใช้ segment $b, c$ จึงเขียนวงจรเฉพาะ segment เหล่านี้ ต่อเข้าด้วยกันเป็นวงจรเดียว : ต้องมีทั้งตัวปกติและตัวคอมพลีเมนต์ของอินพุต จึงใช้เกต NOT ต่อจากอินพุต แต่ละพจน์ผลคูณใช้ AND เกต แล้วนำทุกพจน์เข้า OR เกต (พจน์ที่มีตัวแปรตัวเดียวต่อเข้า OR เกตได้เลย)

$\mathbf{Ans}\quad \begin{aligned}b &= \overline{B}+\overline{C}\,\overline{D}+CD \\ c &= B+\overline{C}+D\end{aligned}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="550" height="314" viewBox="0 0 550 314" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<line x1="82" y1="52" x2="82" y2="89"/>
<line x1="34" y1="28" x2="34" y2="233"/>
<line x1="160" y1="52" x2="160" y2="257"/>
<line x1="112" y1="28" x2="112" y2="172"/>
<line x1="238" y1="52" x2="238" y2="134"/>
<line x1="190" y1="28" x2="190" y2="281"/>
<line x1="82" y1="89" x2="396" y2="89"/>
<line x1="396" y1="89" x2="396" y2="127"/>
<line x1="396" y1="127" x2="411.2" y2="127"/>
<line x1="160" y1="120" x2="298" y2="120"/>
<line x1="238" y1="134" x2="298" y2="134"/>
<line x1="350" y1="127" x2="376" y2="127"/>
<line x1="376" y1="127" x2="376" y2="141"/>
<line x1="376" y1="141" x2="413" y2="141"/>
<line x1="112" y1="172" x2="298" y2="172"/>
<line x1="190" y1="186" x2="298" y2="186"/>
<line x1="350" y1="179" x2="386" y2="179"/>
<line x1="386" y1="179" x2="386" y2="155"/>
<line x1="386" y1="155" x2="411.2" y2="155"/>
<line x1="466" y1="141" x2="496" y2="141"/>
<line x1="34" y1="233" x2="396" y2="233"/>
<line x1="396" y1="233" x2="396" y2="243"/>
<line x1="396" y1="243" x2="411.2" y2="243"/>
<line x1="160" y1="257" x2="413" y2="257"/>
<line x1="190" y1="281" x2="386" y2="281"/>
<line x1="386" y1="281" x2="386" y2="271"/>
<line x1="386" y1="271" x2="411.2" y2="271"/>
<line x1="466" y1="257" x2="496" y2="257"/>
<line x1="34" y1="52" x2="41" y2="52"/>
<line x1="73" y1="52" x2="82" y2="52"/>
<line x1="112" y1="52" x2="119" y2="52"/>
<line x1="151" y1="52" x2="160" y2="52"/>
<line x1="190" y1="52" x2="197" y2="52"/>
<line x1="229" y1="52" x2="238" y2="52"/>
<path d="M298,106 H324 A26,21 0 0 1 324,148 H298 Z"/>
<path d="M298,158 H324 A26,21 0 0 1 324,200 H298 Z"/>
<path d="M406,113 C428,113 454,127 466,141 C454,155 428,169 406,169 Q420,141 406,113 Z"/>
<path d="M406,229 C428,229 454,243 466,257 C454,271 428,285 406,285 Q420,257 406,229 Z"/>
<polygon points="41,40 41,64 63,52"/>
<circle cx="68" cy="52" r="5"/>
<polygon points="119,40 119,64 141,52"/>
<circle cx="146" cy="52" r="5"/>
<polygon points="197,40 197,64 219,52"/>
<circle cx="224" cy="52" r="5"/>
<circle cx="82" cy="89" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="160" cy="120" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="134" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="172" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="186" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="233" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="160" cy="257" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="281" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="52" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="502" y="147">b</text>
<text x="502" y="263">c</text>
<text x="34" y="22" text-anchor="middle">B</text>
<text x="112" y="22" text-anchor="middle">C</text>
<text x="190" y="22" text-anchor="middle">D</text>
</svg>
</div>

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="74" height="118" viewBox="0 0 74 118" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(10,8) scale(1.1)"><path d="M7,4 L37,4 L33,10 L11,10 Z" fill-opacity="0.1"/><path d="M38,5 L38,35 L32,31 L32,11 Z" fill-opacity="1"/><path d="M38,41 L38,71 L32,65 L32,45 Z" fill-opacity="1"/><path d="M7,72 L37,72 L33,66 L11,66 Z" fill-opacity="0.1"/><path d="M6,41 L6,71 L12,65 L12,45 Z" fill-opacity="0.1"/><path d="M6,5 L6,35 L12,31 L12,11 Z" fill-opacity="0.1"/><path d="M7,38 L11,34 L33,34 L37,38 L33,42 L11,42 Z" fill-opacity="0.1"/></g>
<text x="34.2" y="108" text-anchor="middle">1</text>
</svg>
</div>

### วงจรของเลข 2 (BCD-8421, AND/OR) {code=bcd; method=andor; digit=2}

$\mathbf{Sol}^{n}$

เลข $2$ ใช้ segment $a, b, d, e, g$ จึงเขียนวงจรเฉพาะ segment เหล่านี้ ต่อเข้าด้วยกันเป็นวงจรเดียว : ต้องมีทั้งตัวปกติและตัวคอมพลีเมนต์ของอินพุต จึงใช้เกต NOT ต่อจากอินพุต แต่ละพจน์ผลคูณใช้ AND เกต แล้วนำทุกพจน์เข้า OR เกต (พจน์ที่มีตัวแปรตัวเดียวต่อเข้า OR เกตได้เลย)

$\mathbf{Ans}\quad \begin{aligned}a &= A+C+BD+\overline{B}\,\overline{D} \\ b &= \overline{B}+\overline{C}\,\overline{D}+CD \\ d &= A+\overline{B}\,\overline{D}+\overline{B}C+C\overline{D}+B\overline{C}D \\ e &= \overline{B}\,\overline{D}+C\overline{D} \\ g &= B\overline{C}+A\overline{C}+\overline{B}C+C\overline{D}\end{aligned}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="602" height="1000" viewBox="0 0 602 1000" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<line x1="34" y1="28" x2="34" y2="842"/>
<line x1="114" y1="52" x2="114" y2="894"/>
<line x1="66" y1="28" x2="66" y2="790"/>
<line x1="192" y1="52" x2="192" y2="856"/>
<line x1="144" y1="28" x2="144" y2="946"/>
<line x1="270" y1="52" x2="270" y2="960"/>
<line x1="222" y1="28" x2="222" y2="616"/>
<line x1="34" y1="89" x2="438" y2="89"/>
<line x1="438" y1="89" x2="438" y2="132"/>
<line x1="438" y1="132" x2="452.5" y2="132"/>
<line x1="144" y1="113" x2="418" y2="113"/>
<line x1="418" y1="113" x2="418" y2="146"/>
<line x1="418" y1="146" x2="454.7" y2="146"/>
<line x1="66" y1="144" x2="330" y2="144"/>
<line x1="222" y1="158" x2="330" y2="158"/>
<line x1="382" y1="151" x2="408" y2="151"/>
<line x1="408" y1="151" x2="408" y2="160"/>
<line x1="408" y1="160" x2="454.7" y2="160"/>
<line x1="114" y1="196" x2="330" y2="196"/>
<line x1="270" y1="210" x2="330" y2="210"/>
<line x1="382" y1="203" x2="428" y2="203"/>
<line x1="428" y1="203" x2="428" y2="174"/>
<line x1="428" y1="174" x2="452.5" y2="174"/>
<line x1="508" y1="153" x2="538" y2="153"/>
<line x1="114" y1="257" x2="428" y2="257"/>
<line x1="428" y1="257" x2="428" y2="295"/>
<line x1="428" y1="295" x2="443.2" y2="295"/>
<line x1="192" y1="288" x2="330" y2="288"/>
<line x1="270" y1="302" x2="330" y2="302"/>
<line x1="382" y1="295" x2="408" y2="295"/>
<line x1="408" y1="295" x2="408" y2="309"/>
<line x1="408" y1="309" x2="445" y2="309"/>
<line x1="144" y1="340" x2="330" y2="340"/>
<line x1="222" y1="354" x2="330" y2="354"/>
<line x1="382" y1="347" x2="418" y2="347"/>
<line x1="418" y1="347" x2="418" y2="323"/>
<line x1="418" y1="323" x2="443.2" y2="323"/>
<line x1="498" y1="309" x2="528" y2="309"/>
<line x1="34" y1="401" x2="448" y2="401"/>
<line x1="448" y1="401" x2="448" y2="484"/>
<line x1="448" y1="484" x2="461.9" y2="484"/>
<line x1="114" y1="432" x2="330" y2="432"/>
<line x1="270" y1="446" x2="330" y2="446"/>
<line x1="382" y1="439" x2="428" y2="439"/>
<line x1="428" y1="439" x2="428" y2="498"/>
<line x1="428" y1="498" x2="464.2" y2="498"/>
<line x1="114" y1="484" x2="330" y2="484"/>
<line x1="144" y1="498" x2="330" y2="498"/>
<line x1="382" y1="491" x2="408" y2="491"/>
<line x1="408" y1="491" x2="408" y2="512"/>
<line x1="408" y1="512" x2="465" y2="512"/>
<line x1="144" y1="536" x2="330" y2="536"/>
<line x1="270" y1="550" x2="330" y2="550"/>
<line x1="382" y1="543" x2="418" y2="543"/>
<line x1="418" y1="543" x2="418" y2="526"/>
<line x1="418" y1="526" x2="464.2" y2="526"/>
<line x1="66" y1="588" x2="330" y2="588"/>
<line x1="192" y1="602" x2="330" y2="602"/>
<line x1="222" y1="616" x2="330" y2="616"/>
<line x1="382" y1="602" x2="438" y2="602"/>
<line x1="438" y1="602" x2="438" y2="540"/>
<line x1="438" y1="540" x2="461.9" y2="540"/>
<line x1="518" y1="512" x2="548" y2="512"/>
<line x1="114" y1="670" x2="330" y2="670"/>
<line x1="270" y1="684" x2="330" y2="684"/>
<line x1="382" y1="677" x2="418" y2="677"/>
<line x1="418" y1="677" x2="418" y2="696"/>
<line x1="418" y1="696" x2="434.2" y2="696"/>
<line x1="144" y1="722" x2="330" y2="722"/>
<line x1="270" y1="736" x2="330" y2="736"/>
<line x1="382" y1="729" x2="408" y2="729"/>
<line x1="408" y1="729" x2="408" y2="710"/>
<line x1="408" y1="710" x2="434.2" y2="710"/>
<line x1="488" y1="703" x2="518" y2="703"/>
<line x1="66" y1="790" x2="330" y2="790"/>
<line x1="192" y1="804" x2="330" y2="804"/>
<line x1="382" y1="797" x2="438" y2="797"/>
<line x1="438" y1="797" x2="438" y2="854"/>
<line x1="438" y1="854" x2="452.5" y2="854"/>
<line x1="34" y1="842" x2="330" y2="842"/>
<line x1="192" y1="856" x2="330" y2="856"/>
<line x1="382" y1="849" x2="418" y2="849"/>
<line x1="418" y1="849" x2="418" y2="868"/>
<line x1="418" y1="868" x2="454.7" y2="868"/>
<line x1="114" y1="894" x2="330" y2="894"/>
<line x1="144" y1="908" x2="330" y2="908"/>
<line x1="382" y1="901" x2="408" y2="901"/>
<line x1="408" y1="901" x2="408" y2="882"/>
<line x1="408" y1="882" x2="454.7" y2="882"/>
<line x1="144" y1="946" x2="330" y2="946"/>
<line x1="270" y1="960" x2="330" y2="960"/>
<line x1="382" y1="953" x2="428" y2="953"/>
<line x1="428" y1="953" x2="428" y2="896"/>
<line x1="428" y1="896" x2="452.5" y2="896"/>
<line x1="508" y1="875" x2="538" y2="875"/>
<line x1="66" y1="52" x2="73" y2="52"/>
<line x1="105" y1="52" x2="114" y2="52"/>
<line x1="144" y1="52" x2="151" y2="52"/>
<line x1="183" y1="52" x2="192" y2="52"/>
<line x1="222" y1="52" x2="229" y2="52"/>
<line x1="261" y1="52" x2="270" y2="52"/>
<path d="M330,130 H356 A26,21 0 0 1 356,172 H330 Z"/>
<path d="M330,182 H356 A26,21 0 0 1 356,224 H330 Z"/>
<path d="M448,118 C470,118 496,135.5 508,153 C496,170.5 470,188 448,188 Q462,153 448,118 Z"/>
<path d="M330,274 H356 A26,21 0 0 1 356,316 H330 Z"/>
<path d="M330,326 H356 A26,21 0 0 1 356,368 H330 Z"/>
<path d="M438,281 C460,281 486,295 498,309 C486,323 460,337 438,337 Q452,309 438,281 Z"/>
<path d="M330,418 H356 A26,21 0 0 1 356,460 H330 Z"/>
<path d="M330,470 H356 A26,21 0 0 1 356,512 H330 Z"/>
<path d="M330,522 H356 A26,21 0 0 1 356,564 H330 Z"/>
<path d="M330,574 H356 A26,28 0 0 1 356,630 H330 Z"/>
<path d="M458,470 C480,470 506,491 518,512 C506,533 480,554 458,554 Q472,512 458,470 Z"/>
<path d="M330,656 H356 A26,21 0 0 1 356,698 H330 Z"/>
<path d="M330,708 H356 A26,21 0 0 1 356,750 H330 Z"/>
<path d="M428,682 C450,682 476,692.5 488,703 C476,713.5 450,724 428,724 Q442,703 428,682 Z"/>
<path d="M330,776 H356 A26,21 0 0 1 356,818 H330 Z"/>
<path d="M330,828 H356 A26,21 0 0 1 356,870 H330 Z"/>
<path d="M330,880 H356 A26,21 0 0 1 356,922 H330 Z"/>
<path d="M330,932 H356 A26,21 0 0 1 356,974 H330 Z"/>
<path d="M448,840 C470,840 496,857.5 508,875 C496,892.5 470,910 448,910 Q462,875 448,840 Z"/>
<polygon points="73,40 73,64 95,52"/>
<circle cx="100" cy="52" r="5"/>
<polygon points="151,40 151,64 173,52"/>
<circle cx="178" cy="52" r="5"/>
<polygon points="229,40 229,64 251,52"/>
<circle cx="256" cy="52" r="5"/>
<circle cx="34" cy="89" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="113" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="144" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="222" cy="158" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="114" cy="196" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="210" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="114" cy="257" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="192" cy="288" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="302" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="340" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="222" cy="354" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="401" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="114" cy="432" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="446" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="114" cy="484" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="498" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="536" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="550" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="588" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="192" cy="602" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="222" cy="616" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="114" cy="670" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="684" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="722" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="736" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="790" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="192" cy="804" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="842" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="192" cy="856" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="114" cy="894" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="908" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="946" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="960" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="222" cy="52" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="544" y="159">a</text>
<text x="534" y="315">b</text>
<text x="554" y="518">d</text>
<text x="524" y="709">e</text>
<text x="544" y="881">g</text>
<text x="34" y="22" text-anchor="middle">A</text>
<text x="66" y="22" text-anchor="middle">B</text>
<text x="144" y="22" text-anchor="middle">C</text>
<text x="222" y="22" text-anchor="middle">D</text>
</svg>
</div>

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="74" height="118" viewBox="0 0 74 118" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(10,8) scale(1.1)"><path d="M7,4 L37,4 L33,10 L11,10 Z" fill-opacity="1"/><path d="M38,5 L38,35 L32,31 L32,11 Z" fill-opacity="1"/><path d="M38,41 L38,71 L32,65 L32,45 Z" fill-opacity="0.1"/><path d="M7,72 L37,72 L33,66 L11,66 Z" fill-opacity="1"/><path d="M6,41 L6,71 L12,65 L12,45 Z" fill-opacity="1"/><path d="M6,5 L6,35 L12,31 L12,11 Z" fill-opacity="0.1"/><path d="M7,38 L11,34 L33,34 L37,38 L33,42 L11,42 Z" fill-opacity="1"/></g>
<text x="34.2" y="108" text-anchor="middle">2</text>
</svg>
</div>

### วงจรของเลข 3 (BCD-8421, AND/OR) {code=bcd; method=andor; digit=3}

$\mathbf{Sol}^{n}$

เลข $3$ ใช้ segment $a, b, c, d, g$ จึงเขียนวงจรเฉพาะ segment เหล่านี้ ต่อเข้าด้วยกันเป็นวงจรเดียว : ต้องมีทั้งตัวปกติและตัวคอมพลีเมนต์ของอินพุต จึงใช้เกต NOT ต่อจากอินพุต แต่ละพจน์ผลคูณใช้ AND เกต แล้วนำทุกพจน์เข้า OR เกต (พจน์ที่มีตัวแปรตัวเดียวต่อเข้า OR เกตได้เลย)

$\mathbf{Ans}\quad \begin{aligned}a &= A+C+BD+\overline{B}\,\overline{D} \\ b &= \overline{B}+\overline{C}\,\overline{D}+CD \\ c &= B+\overline{C}+D \\ d &= A+\overline{B}\,\overline{D}+\overline{B}C+C\overline{D}+B\overline{C}D \\ g &= B\overline{C}+A\overline{C}+\overline{B}C+C\overline{D}\end{aligned}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="602" height="968" viewBox="0 0 602 968" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<line x1="34" y1="28" x2="34" y2="810"/>
<line x1="114" y1="52" x2="114" y2="862"/>
<line x1="66" y1="28" x2="66" y2="758"/>
<line x1="192" y1="52" x2="192" y2="824"/>
<line x1="144" y1="28" x2="144" y2="914"/>
<line x1="270" y1="52" x2="270" y2="928"/>
<line x1="222" y1="28" x2="222" y2="704"/>
<line x1="34" y1="89" x2="438" y2="89"/>
<line x1="438" y1="89" x2="438" y2="132"/>
<line x1="438" y1="132" x2="452.5" y2="132"/>
<line x1="144" y1="113" x2="418" y2="113"/>
<line x1="418" y1="113" x2="418" y2="146"/>
<line x1="418" y1="146" x2="454.7" y2="146"/>
<line x1="66" y1="144" x2="330" y2="144"/>
<line x1="222" y1="158" x2="330" y2="158"/>
<line x1="382" y1="151" x2="408" y2="151"/>
<line x1="408" y1="151" x2="408" y2="160"/>
<line x1="408" y1="160" x2="454.7" y2="160"/>
<line x1="114" y1="196" x2="330" y2="196"/>
<line x1="270" y1="210" x2="330" y2="210"/>
<line x1="382" y1="203" x2="428" y2="203"/>
<line x1="428" y1="203" x2="428" y2="174"/>
<line x1="428" y1="174" x2="452.5" y2="174"/>
<line x1="508" y1="153" x2="538" y2="153"/>
<line x1="114" y1="257" x2="428" y2="257"/>
<line x1="428" y1="257" x2="428" y2="295"/>
<line x1="428" y1="295" x2="443.2" y2="295"/>
<line x1="192" y1="288" x2="330" y2="288"/>
<line x1="270" y1="302" x2="330" y2="302"/>
<line x1="382" y1="295" x2="408" y2="295"/>
<line x1="408" y1="295" x2="408" y2="309"/>
<line x1="408" y1="309" x2="445" y2="309"/>
<line x1="144" y1="340" x2="330" y2="340"/>
<line x1="222" y1="354" x2="330" y2="354"/>
<line x1="382" y1="347" x2="418" y2="347"/>
<line x1="418" y1="347" x2="418" y2="323"/>
<line x1="418" y1="323" x2="443.2" y2="323"/>
<line x1="498" y1="309" x2="528" y2="309"/>
<line x1="66" y1="401" x2="428" y2="401"/>
<line x1="428" y1="401" x2="428" y2="411"/>
<line x1="428" y1="411" x2="443.2" y2="411"/>
<line x1="192" y1="425" x2="445" y2="425"/>
<line x1="222" y1="449" x2="418" y2="449"/>
<line x1="418" y1="449" x2="418" y2="439"/>
<line x1="418" y1="439" x2="443.2" y2="439"/>
<line x1="498" y1="425" x2="528" y2="425"/>
<line x1="34" y1="489" x2="448" y2="489"/>
<line x1="448" y1="489" x2="448" y2="572"/>
<line x1="448" y1="572" x2="461.9" y2="572"/>
<line x1="114" y1="520" x2="330" y2="520"/>
<line x1="270" y1="534" x2="330" y2="534"/>
<line x1="382" y1="527" x2="428" y2="527"/>
<line x1="428" y1="527" x2="428" y2="586"/>
<line x1="428" y1="586" x2="464.2" y2="586"/>
<line x1="114" y1="572" x2="330" y2="572"/>
<line x1="144" y1="586" x2="330" y2="586"/>
<line x1="382" y1="579" x2="408" y2="579"/>
<line x1="408" y1="579" x2="408" y2="600"/>
<line x1="408" y1="600" x2="465" y2="600"/>
<line x1="144" y1="624" x2="330" y2="624"/>
<line x1="270" y1="638" x2="330" y2="638"/>
<line x1="382" y1="631" x2="418" y2="631"/>
<line x1="418" y1="631" x2="418" y2="614"/>
<line x1="418" y1="614" x2="464.2" y2="614"/>
<line x1="66" y1="676" x2="330" y2="676"/>
<line x1="192" y1="690" x2="330" y2="690"/>
<line x1="222" y1="704" x2="330" y2="704"/>
<line x1="382" y1="690" x2="438" y2="690"/>
<line x1="438" y1="690" x2="438" y2="628"/>
<line x1="438" y1="628" x2="461.9" y2="628"/>
<line x1="518" y1="600" x2="548" y2="600"/>
<line x1="66" y1="758" x2="330" y2="758"/>
<line x1="192" y1="772" x2="330" y2="772"/>
<line x1="382" y1="765" x2="438" y2="765"/>
<line x1="438" y1="765" x2="438" y2="822"/>
<line x1="438" y1="822" x2="452.5" y2="822"/>
<line x1="34" y1="810" x2="330" y2="810"/>
<line x1="192" y1="824" x2="330" y2="824"/>
<line x1="382" y1="817" x2="418" y2="817"/>
<line x1="418" y1="817" x2="418" y2="836"/>
<line x1="418" y1="836" x2="454.7" y2="836"/>
<line x1="114" y1="862" x2="330" y2="862"/>
<line x1="144" y1="876" x2="330" y2="876"/>
<line x1="382" y1="869" x2="408" y2="869"/>
<line x1="408" y1="869" x2="408" y2="850"/>
<line x1="408" y1="850" x2="454.7" y2="850"/>
<line x1="144" y1="914" x2="330" y2="914"/>
<line x1="270" y1="928" x2="330" y2="928"/>
<line x1="382" y1="921" x2="428" y2="921"/>
<line x1="428" y1="921" x2="428" y2="864"/>
<line x1="428" y1="864" x2="452.5" y2="864"/>
<line x1="508" y1="843" x2="538" y2="843"/>
<line x1="66" y1="52" x2="73" y2="52"/>
<line x1="105" y1="52" x2="114" y2="52"/>
<line x1="144" y1="52" x2="151" y2="52"/>
<line x1="183" y1="52" x2="192" y2="52"/>
<line x1="222" y1="52" x2="229" y2="52"/>
<line x1="261" y1="52" x2="270" y2="52"/>
<path d="M330,130 H356 A26,21 0 0 1 356,172 H330 Z"/>
<path d="M330,182 H356 A26,21 0 0 1 356,224 H330 Z"/>
<path d="M448,118 C470,118 496,135.5 508,153 C496,170.5 470,188 448,188 Q462,153 448,118 Z"/>
<path d="M330,274 H356 A26,21 0 0 1 356,316 H330 Z"/>
<path d="M330,326 H356 A26,21 0 0 1 356,368 H330 Z"/>
<path d="M438,281 C460,281 486,295 498,309 C486,323 460,337 438,337 Q452,309 438,281 Z"/>
<path d="M438,397 C460,397 486,411 498,425 C486,439 460,453 438,453 Q452,425 438,397 Z"/>
<path d="M330,506 H356 A26,21 0 0 1 356,548 H330 Z"/>
<path d="M330,558 H356 A26,21 0 0 1 356,600 H330 Z"/>
<path d="M330,610 H356 A26,21 0 0 1 356,652 H330 Z"/>
<path d="M330,662 H356 A26,28 0 0 1 356,718 H330 Z"/>
<path d="M458,558 C480,558 506,579 518,600 C506,621 480,642 458,642 Q472,600 458,558 Z"/>
<path d="M330,744 H356 A26,21 0 0 1 356,786 H330 Z"/>
<path d="M330,796 H356 A26,21 0 0 1 356,838 H330 Z"/>
<path d="M330,848 H356 A26,21 0 0 1 356,890 H330 Z"/>
<path d="M330,900 H356 A26,21 0 0 1 356,942 H330 Z"/>
<path d="M448,808 C470,808 496,825.5 508,843 C496,860.5 470,878 448,878 Q462,843 448,808 Z"/>
<polygon points="73,40 73,64 95,52"/>
<circle cx="100" cy="52" r="5"/>
<polygon points="151,40 151,64 173,52"/>
<circle cx="178" cy="52" r="5"/>
<polygon points="229,40 229,64 251,52"/>
<circle cx="256" cy="52" r="5"/>
<circle cx="34" cy="89" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="113" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="144" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="222" cy="158" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="114" cy="196" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="210" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="114" cy="257" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="192" cy="288" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="302" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="340" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="222" cy="354" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="401" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="192" cy="425" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="222" cy="449" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="489" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="114" cy="520" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="534" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="114" cy="572" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="586" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="624" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="638" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="676" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="192" cy="690" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="222" cy="704" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="758" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="192" cy="772" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="810" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="192" cy="824" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="114" cy="862" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="876" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="914" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="928" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="222" cy="52" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="544" y="159">a</text>
<text x="534" y="315">b</text>
<text x="534" y="431">c</text>
<text x="554" y="606">d</text>
<text x="544" y="849">g</text>
<text x="34" y="22" text-anchor="middle">A</text>
<text x="66" y="22" text-anchor="middle">B</text>
<text x="144" y="22" text-anchor="middle">C</text>
<text x="222" y="22" text-anchor="middle">D</text>
</svg>
</div>

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="74" height="118" viewBox="0 0 74 118" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(10,8) scale(1.1)"><path d="M7,4 L37,4 L33,10 L11,10 Z" fill-opacity="1"/><path d="M38,5 L38,35 L32,31 L32,11 Z" fill-opacity="1"/><path d="M38,41 L38,71 L32,65 L32,45 Z" fill-opacity="1"/><path d="M7,72 L37,72 L33,66 L11,66 Z" fill-opacity="1"/><path d="M6,41 L6,71 L12,65 L12,45 Z" fill-opacity="0.1"/><path d="M6,5 L6,35 L12,31 L12,11 Z" fill-opacity="0.1"/><path d="M7,38 L11,34 L33,34 L37,38 L33,42 L11,42 Z" fill-opacity="1"/></g>
<text x="34.2" y="108" text-anchor="middle">3</text>
</svg>
</div>

### วงจรของเลข 4 (BCD-8421, AND/OR) {code=bcd; method=andor; digit=4}

$\mathbf{Sol}^{n}$

เลข $4$ ใช้ segment $b, c, f, g$ จึงเขียนวงจรเฉพาะ segment เหล่านี้ ต่อเข้าด้วยกันเป็นวงจรเดียว : ต้องมีทั้งตัวปกติและตัวคอมพลีเมนต์ของอินพุต จึงใช้เกต NOT ต่อจากอินพุต แต่ละพจน์ผลคูณใช้ AND เกต แล้วนำทุกพจน์เข้า OR เกต (พจน์ที่มีตัวแปรตัวเดียวต่อเข้า OR เกตได้เลย)

$\mathbf{Ans}\quad \begin{aligned}b &= \overline{B}+\overline{C}\,\overline{D}+CD \\ c &= B+\overline{C}+D \\ f &= A+B\overline{C}+B\overline{D}+\overline{C}\,\overline{D} \\ g &= B\overline{C}+A\overline{C}+\overline{B}C+C\overline{D}\end{aligned}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="592" height="734" viewBox="0 0 592 734" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<line x1="34" y1="28" x2="34" y2="576"/>
<line x1="114" y1="52" x2="114" y2="628"/>
<line x1="66" y1="28" x2="66" y2="524"/>
<line x1="192" y1="52" x2="192" y2="590"/>
<line x1="144" y1="28" x2="144" y2="680"/>
<line x1="270" y1="52" x2="270" y2="694"/>
<line x1="222" y1="28" x2="222" y2="281"/>
<line x1="114" y1="89" x2="428" y2="89"/>
<line x1="428" y1="89" x2="428" y2="127"/>
<line x1="428" y1="127" x2="443.2" y2="127"/>
<line x1="192" y1="120" x2="330" y2="120"/>
<line x1="270" y1="134" x2="330" y2="134"/>
<line x1="382" y1="127" x2="408" y2="127"/>
<line x1="408" y1="127" x2="408" y2="141"/>
<line x1="408" y1="141" x2="445" y2="141"/>
<line x1="144" y1="172" x2="330" y2="172"/>
<line x1="222" y1="186" x2="330" y2="186"/>
<line x1="382" y1="179" x2="418" y2="179"/>
<line x1="418" y1="179" x2="418" y2="155"/>
<line x1="418" y1="155" x2="443.2" y2="155"/>
<line x1="498" y1="141" x2="528" y2="141"/>
<line x1="66" y1="233" x2="428" y2="233"/>
<line x1="428" y1="233" x2="428" y2="243"/>
<line x1="428" y1="243" x2="443.2" y2="243"/>
<line x1="192" y1="257" x2="445" y2="257"/>
<line x1="222" y1="281" x2="418" y2="281"/>
<line x1="418" y1="281" x2="418" y2="271"/>
<line x1="418" y1="271" x2="443.2" y2="271"/>
<line x1="498" y1="257" x2="528" y2="257"/>
<line x1="34" y1="321" x2="438" y2="321"/>
<line x1="438" y1="321" x2="438" y2="378"/>
<line x1="438" y1="378" x2="452.5" y2="378"/>
<line x1="66" y1="352" x2="330" y2="352"/>
<line x1="192" y1="366" x2="330" y2="366"/>
<line x1="382" y1="359" x2="418" y2="359"/>
<line x1="418" y1="359" x2="418" y2="392"/>
<line x1="418" y1="392" x2="454.7" y2="392"/>
<line x1="66" y1="404" x2="330" y2="404"/>
<line x1="270" y1="418" x2="330" y2="418"/>
<line x1="382" y1="411" x2="408" y2="411"/>
<line x1="408" y1="411" x2="408" y2="406"/>
<line x1="408" y1="406" x2="454.7" y2="406"/>
<line x1="192" y1="456" x2="330" y2="456"/>
<line x1="270" y1="470" x2="330" y2="470"/>
<line x1="382" y1="463" x2="428" y2="463"/>
<line x1="428" y1="463" x2="428" y2="420"/>
<line x1="428" y1="420" x2="452.5" y2="420"/>
<line x1="508" y1="399" x2="538" y2="399"/>
<line x1="66" y1="524" x2="330" y2="524"/>
<line x1="192" y1="538" x2="330" y2="538"/>
<line x1="382" y1="531" x2="438" y2="531"/>
<line x1="438" y1="531" x2="438" y2="588"/>
<line x1="438" y1="588" x2="452.5" y2="588"/>
<line x1="34" y1="576" x2="330" y2="576"/>
<line x1="192" y1="590" x2="330" y2="590"/>
<line x1="382" y1="583" x2="418" y2="583"/>
<line x1="418" y1="583" x2="418" y2="602"/>
<line x1="418" y1="602" x2="454.7" y2="602"/>
<line x1="114" y1="628" x2="330" y2="628"/>
<line x1="144" y1="642" x2="330" y2="642"/>
<line x1="382" y1="635" x2="408" y2="635"/>
<line x1="408" y1="635" x2="408" y2="616"/>
<line x1="408" y1="616" x2="454.7" y2="616"/>
<line x1="144" y1="680" x2="330" y2="680"/>
<line x1="270" y1="694" x2="330" y2="694"/>
<line x1="382" y1="687" x2="428" y2="687"/>
<line x1="428" y1="687" x2="428" y2="630"/>
<line x1="428" y1="630" x2="452.5" y2="630"/>
<line x1="508" y1="609" x2="538" y2="609"/>
<line x1="66" y1="52" x2="73" y2="52"/>
<line x1="105" y1="52" x2="114" y2="52"/>
<line x1="144" y1="52" x2="151" y2="52"/>
<line x1="183" y1="52" x2="192" y2="52"/>
<line x1="222" y1="52" x2="229" y2="52"/>
<line x1="261" y1="52" x2="270" y2="52"/>
<path d="M330,106 H356 A26,21 0 0 1 356,148 H330 Z"/>
<path d="M330,158 H356 A26,21 0 0 1 356,200 H330 Z"/>
<path d="M438,113 C460,113 486,127 498,141 C486,155 460,169 438,169 Q452,141 438,113 Z"/>
<path d="M438,229 C460,229 486,243 498,257 C486,271 460,285 438,285 Q452,257 438,229 Z"/>
<path d="M330,338 H356 A26,21 0 0 1 356,380 H330 Z"/>
<path d="M330,390 H356 A26,21 0 0 1 356,432 H330 Z"/>
<path d="M330,442 H356 A26,21 0 0 1 356,484 H330 Z"/>
<path d="M448,364 C470,364 496,381.5 508,399 C496,416.5 470,434 448,434 Q462,399 448,364 Z"/>
<path d="M330,510 H356 A26,21 0 0 1 356,552 H330 Z"/>
<path d="M330,562 H356 A26,21 0 0 1 356,604 H330 Z"/>
<path d="M330,614 H356 A26,21 0 0 1 356,656 H330 Z"/>
<path d="M330,666 H356 A26,21 0 0 1 356,708 H330 Z"/>
<path d="M448,574 C470,574 496,591.5 508,609 C496,626.5 470,644 448,644 Q462,609 448,574 Z"/>
<polygon points="73,40 73,64 95,52"/>
<circle cx="100" cy="52" r="5"/>
<polygon points="151,40 151,64 173,52"/>
<circle cx="178" cy="52" r="5"/>
<polygon points="229,40 229,64 251,52"/>
<circle cx="256" cy="52" r="5"/>
<circle cx="114" cy="89" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="192" cy="120" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="134" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="172" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="222" cy="186" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="233" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="192" cy="257" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="222" cy="281" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="321" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="352" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="192" cy="366" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="404" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="418" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="192" cy="456" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="470" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="524" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="192" cy="538" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="576" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="192" cy="590" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="114" cy="628" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="642" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="680" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="694" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="222" cy="52" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="534" y="147">b</text>
<text x="534" y="263">c</text>
<text x="544" y="405">f</text>
<text x="544" y="615">g</text>
<text x="34" y="22" text-anchor="middle">A</text>
<text x="66" y="22" text-anchor="middle">B</text>
<text x="144" y="22" text-anchor="middle">C</text>
<text x="222" y="22" text-anchor="middle">D</text>
</svg>
</div>

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="74" height="118" viewBox="0 0 74 118" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(10,8) scale(1.1)"><path d="M7,4 L37,4 L33,10 L11,10 Z" fill-opacity="0.1"/><path d="M38,5 L38,35 L32,31 L32,11 Z" fill-opacity="1"/><path d="M38,41 L38,71 L32,65 L32,45 Z" fill-opacity="1"/><path d="M7,72 L37,72 L33,66 L11,66 Z" fill-opacity="0.1"/><path d="M6,41 L6,71 L12,65 L12,45 Z" fill-opacity="0.1"/><path d="M6,5 L6,35 L12,31 L12,11 Z" fill-opacity="1"/><path d="M7,38 L11,34 L33,34 L37,38 L33,42 L11,42 Z" fill-opacity="1"/></g>
<text x="34.2" y="108" text-anchor="middle">4</text>
</svg>
</div>

### วงจรของเลข 5 (BCD-8421, AND/OR) {code=bcd; method=andor; digit=5}

$\mathbf{Sol}^{n}$

เลข $5$ ใช้ segment $a, c, d, f, g$ จึงเขียนวงจรเฉพาะ segment เหล่านี้ ต่อเข้าด้วยกันเป็นวงจรเดียว : ต้องมีทั้งตัวปกติและตัวคอมพลีเมนต์ของอินพุต จึงใช้เกต NOT ต่อจากอินพุต แต่ละพจน์ผลคูณใช้ AND เกต แล้วนำทุกพจน์เข้า OR เกต (พจน์ที่มีตัวแปรตัวเดียวต่อเข้า OR เกตได้เลย)

$\mathbf{Ans}\quad \begin{aligned}a &= A+C+BD+\overline{B}\,\overline{D} \\ c &= B+\overline{C}+D \\ d &= A+\overline{B}\,\overline{D}+\overline{B}C+C\overline{D}+B\overline{C}D \\ f &= A+B\overline{C}+B\overline{D}+\overline{C}\,\overline{D} \\ g &= B\overline{C}+A\overline{C}+\overline{B}C+C\overline{D}\end{aligned}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="602" height="1020" viewBox="0 0 602 1020" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<line x1="34" y1="28" x2="34" y2="862"/>
<line x1="114" y1="52" x2="114" y2="914"/>
<line x1="66" y1="28" x2="66" y2="810"/>
<line x1="192" y1="52" x2="192" y2="876"/>
<line x1="144" y1="28" x2="144" y2="966"/>
<line x1="270" y1="52" x2="270" y2="980"/>
<line x1="222" y1="28" x2="222" y2="560"/>
<line x1="34" y1="89" x2="438" y2="89"/>
<line x1="438" y1="89" x2="438" y2="132"/>
<line x1="438" y1="132" x2="452.5" y2="132"/>
<line x1="144" y1="113" x2="418" y2="113"/>
<line x1="418" y1="113" x2="418" y2="146"/>
<line x1="418" y1="146" x2="454.7" y2="146"/>
<line x1="66" y1="144" x2="330" y2="144"/>
<line x1="222" y1="158" x2="330" y2="158"/>
<line x1="382" y1="151" x2="408" y2="151"/>
<line x1="408" y1="151" x2="408" y2="160"/>
<line x1="408" y1="160" x2="454.7" y2="160"/>
<line x1="114" y1="196" x2="330" y2="196"/>
<line x1="270" y1="210" x2="330" y2="210"/>
<line x1="382" y1="203" x2="428" y2="203"/>
<line x1="428" y1="203" x2="428" y2="174"/>
<line x1="428" y1="174" x2="452.5" y2="174"/>
<line x1="508" y1="153" x2="538" y2="153"/>
<line x1="66" y1="257" x2="428" y2="257"/>
<line x1="428" y1="257" x2="428" y2="267"/>
<line x1="428" y1="267" x2="443.2" y2="267"/>
<line x1="192" y1="281" x2="445" y2="281"/>
<line x1="222" y1="305" x2="418" y2="305"/>
<line x1="418" y1="305" x2="418" y2="295"/>
<line x1="418" y1="295" x2="443.2" y2="295"/>
<line x1="498" y1="281" x2="528" y2="281"/>
<line x1="34" y1="345" x2="448" y2="345"/>
<line x1="448" y1="345" x2="448" y2="428"/>
<line x1="448" y1="428" x2="461.9" y2="428"/>
<line x1="114" y1="376" x2="330" y2="376"/>
<line x1="270" y1="390" x2="330" y2="390"/>
<line x1="382" y1="383" x2="428" y2="383"/>
<line x1="428" y1="383" x2="428" y2="442"/>
<line x1="428" y1="442" x2="464.2" y2="442"/>
<line x1="114" y1="428" x2="330" y2="428"/>
<line x1="144" y1="442" x2="330" y2="442"/>
<line x1="382" y1="435" x2="408" y2="435"/>
<line x1="408" y1="435" x2="408" y2="456"/>
<line x1="408" y1="456" x2="465" y2="456"/>
<line x1="144" y1="480" x2="330" y2="480"/>
<line x1="270" y1="494" x2="330" y2="494"/>
<line x1="382" y1="487" x2="418" y2="487"/>
<line x1="418" y1="487" x2="418" y2="470"/>
<line x1="418" y1="470" x2="464.2" y2="470"/>
<line x1="66" y1="532" x2="330" y2="532"/>
<line x1="192" y1="546" x2="330" y2="546"/>
<line x1="222" y1="560" x2="330" y2="560"/>
<line x1="382" y1="546" x2="438" y2="546"/>
<line x1="438" y1="546" x2="438" y2="484"/>
<line x1="438" y1="484" x2="461.9" y2="484"/>
<line x1="518" y1="456" x2="548" y2="456"/>
<line x1="34" y1="607" x2="438" y2="607"/>
<line x1="438" y1="607" x2="438" y2="664"/>
<line x1="438" y1="664" x2="452.5" y2="664"/>
<line x1="66" y1="638" x2="330" y2="638"/>
<line x1="192" y1="652" x2="330" y2="652"/>
<line x1="382" y1="645" x2="418" y2="645"/>
<line x1="418" y1="645" x2="418" y2="678"/>
<line x1="418" y1="678" x2="454.7" y2="678"/>
<line x1="66" y1="690" x2="330" y2="690"/>
<line x1="270" y1="704" x2="330" y2="704"/>
<line x1="382" y1="697" x2="408" y2="697"/>
<line x1="408" y1="697" x2="408" y2="692"/>
<line x1="408" y1="692" x2="454.7" y2="692"/>
<line x1="192" y1="742" x2="330" y2="742"/>
<line x1="270" y1="756" x2="330" y2="756"/>
<line x1="382" y1="749" x2="428" y2="749"/>
<line x1="428" y1="749" x2="428" y2="706"/>
<line x1="428" y1="706" x2="452.5" y2="706"/>
<line x1="508" y1="685" x2="538" y2="685"/>
<line x1="66" y1="810" x2="330" y2="810"/>
<line x1="192" y1="824" x2="330" y2="824"/>
<line x1="382" y1="817" x2="438" y2="817"/>
<line x1="438" y1="817" x2="438" y2="874"/>
<line x1="438" y1="874" x2="452.5" y2="874"/>
<line x1="34" y1="862" x2="330" y2="862"/>
<line x1="192" y1="876" x2="330" y2="876"/>
<line x1="382" y1="869" x2="418" y2="869"/>
<line x1="418" y1="869" x2="418" y2="888"/>
<line x1="418" y1="888" x2="454.7" y2="888"/>
<line x1="114" y1="914" x2="330" y2="914"/>
<line x1="144" y1="928" x2="330" y2="928"/>
<line x1="382" y1="921" x2="408" y2="921"/>
<line x1="408" y1="921" x2="408" y2="902"/>
<line x1="408" y1="902" x2="454.7" y2="902"/>
<line x1="144" y1="966" x2="330" y2="966"/>
<line x1="270" y1="980" x2="330" y2="980"/>
<line x1="382" y1="973" x2="428" y2="973"/>
<line x1="428" y1="973" x2="428" y2="916"/>
<line x1="428" y1="916" x2="452.5" y2="916"/>
<line x1="508" y1="895" x2="538" y2="895"/>
<line x1="66" y1="52" x2="73" y2="52"/>
<line x1="105" y1="52" x2="114" y2="52"/>
<line x1="144" y1="52" x2="151" y2="52"/>
<line x1="183" y1="52" x2="192" y2="52"/>
<line x1="222" y1="52" x2="229" y2="52"/>
<line x1="261" y1="52" x2="270" y2="52"/>
<path d="M330,130 H356 A26,21 0 0 1 356,172 H330 Z"/>
<path d="M330,182 H356 A26,21 0 0 1 356,224 H330 Z"/>
<path d="M448,118 C470,118 496,135.5 508,153 C496,170.5 470,188 448,188 Q462,153 448,118 Z"/>
<path d="M438,253 C460,253 486,267 498,281 C486,295 460,309 438,309 Q452,281 438,253 Z"/>
<path d="M330,362 H356 A26,21 0 0 1 356,404 H330 Z"/>
<path d="M330,414 H356 A26,21 0 0 1 356,456 H330 Z"/>
<path d="M330,466 H356 A26,21 0 0 1 356,508 H330 Z"/>
<path d="M330,518 H356 A26,28 0 0 1 356,574 H330 Z"/>
<path d="M458,414 C480,414 506,435 518,456 C506,477 480,498 458,498 Q472,456 458,414 Z"/>
<path d="M330,624 H356 A26,21 0 0 1 356,666 H330 Z"/>
<path d="M330,676 H356 A26,21 0 0 1 356,718 H330 Z"/>
<path d="M330,728 H356 A26,21 0 0 1 356,770 H330 Z"/>
<path d="M448,650 C470,650 496,667.5 508,685 C496,702.5 470,720 448,720 Q462,685 448,650 Z"/>
<path d="M330,796 H356 A26,21 0 0 1 356,838 H330 Z"/>
<path d="M330,848 H356 A26,21 0 0 1 356,890 H330 Z"/>
<path d="M330,900 H356 A26,21 0 0 1 356,942 H330 Z"/>
<path d="M330,952 H356 A26,21 0 0 1 356,994 H330 Z"/>
<path d="M448,860 C470,860 496,877.5 508,895 C496,912.5 470,930 448,930 Q462,895 448,860 Z"/>
<polygon points="73,40 73,64 95,52"/>
<circle cx="100" cy="52" r="5"/>
<polygon points="151,40 151,64 173,52"/>
<circle cx="178" cy="52" r="5"/>
<polygon points="229,40 229,64 251,52"/>
<circle cx="256" cy="52" r="5"/>
<circle cx="34" cy="89" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="113" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="144" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="222" cy="158" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="114" cy="196" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="210" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="257" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="192" cy="281" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="222" cy="305" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="345" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="114" cy="376" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="390" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="114" cy="428" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="442" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="480" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="494" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="532" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="192" cy="546" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="222" cy="560" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="607" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="638" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="192" cy="652" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="690" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="704" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="192" cy="742" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="756" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="810" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="192" cy="824" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="862" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="192" cy="876" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="114" cy="914" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="928" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="966" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="980" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="222" cy="52" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="544" y="159">a</text>
<text x="534" y="287">c</text>
<text x="554" y="462">d</text>
<text x="544" y="691">f</text>
<text x="544" y="901">g</text>
<text x="34" y="22" text-anchor="middle">A</text>
<text x="66" y="22" text-anchor="middle">B</text>
<text x="144" y="22" text-anchor="middle">C</text>
<text x="222" y="22" text-anchor="middle">D</text>
</svg>
</div>

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="74" height="118" viewBox="0 0 74 118" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(10,8) scale(1.1)"><path d="M7,4 L37,4 L33,10 L11,10 Z" fill-opacity="1"/><path d="M38,5 L38,35 L32,31 L32,11 Z" fill-opacity="0.1"/><path d="M38,41 L38,71 L32,65 L32,45 Z" fill-opacity="1"/><path d="M7,72 L37,72 L33,66 L11,66 Z" fill-opacity="1"/><path d="M6,41 L6,71 L12,65 L12,45 Z" fill-opacity="0.1"/><path d="M6,5 L6,35 L12,31 L12,11 Z" fill-opacity="1"/><path d="M7,38 L11,34 L33,34 L37,38 L33,42 L11,42 Z" fill-opacity="1"/></g>
<text x="34.2" y="108" text-anchor="middle">5</text>
</svg>
</div>

### วงจรของเลข 6 (BCD-8421, AND/OR) {code=bcd; method=andor; digit=6}

$\mathbf{Sol}^{n}$

เลข $6$ ใช้ segment $a, c, d, e, f, g$ จึงเขียนวงจรเฉพาะ segment เหล่านี้ ต่อเข้าด้วยกันเป็นวงจรเดียว : ต้องมีทั้งตัวปกติและตัวคอมพลีเมนต์ของอินพุต จึงใช้เกต NOT ต่อจากอินพุต แต่ละพจน์ผลคูณใช้ AND เกต แล้วนำทุกพจน์เข้า OR เกต (พจน์ที่มีตัวแปรตัวเดียวต่อเข้า OR เกตได้เลย)

$\mathbf{Ans}\quad \begin{aligned}a &= A+C+BD+\overline{B}\,\overline{D} \\ c &= B+\overline{C}+D \\ d &= A+\overline{B}\,\overline{D}+\overline{B}C+C\overline{D}+B\overline{C}D \\ e &= \overline{B}\,\overline{D}+C\overline{D} \\ f &= A+B\overline{C}+B\overline{D}+\overline{C}\,\overline{D} \\ g &= B\overline{C}+A\overline{C}+\overline{B}C+C\overline{D}\end{aligned}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="602" height="1140" viewBox="0 0 602 1140" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<line x1="34" y1="28" x2="34" y2="982"/>
<line x1="114" y1="52" x2="114" y2="1034"/>
<line x1="66" y1="28" x2="66" y2="930"/>
<line x1="192" y1="52" x2="192" y2="996"/>
<line x1="144" y1="28" x2="144" y2="1086"/>
<line x1="270" y1="52" x2="270" y2="1100"/>
<line x1="222" y1="28" x2="222" y2="560"/>
<line x1="34" y1="89" x2="438" y2="89"/>
<line x1="438" y1="89" x2="438" y2="132"/>
<line x1="438" y1="132" x2="452.5" y2="132"/>
<line x1="144" y1="113" x2="418" y2="113"/>
<line x1="418" y1="113" x2="418" y2="146"/>
<line x1="418" y1="146" x2="454.7" y2="146"/>
<line x1="66" y1="144" x2="330" y2="144"/>
<line x1="222" y1="158" x2="330" y2="158"/>
<line x1="382" y1="151" x2="408" y2="151"/>
<line x1="408" y1="151" x2="408" y2="160"/>
<line x1="408" y1="160" x2="454.7" y2="160"/>
<line x1="114" y1="196" x2="330" y2="196"/>
<line x1="270" y1="210" x2="330" y2="210"/>
<line x1="382" y1="203" x2="428" y2="203"/>
<line x1="428" y1="203" x2="428" y2="174"/>
<line x1="428" y1="174" x2="452.5" y2="174"/>
<line x1="508" y1="153" x2="538" y2="153"/>
<line x1="66" y1="257" x2="428" y2="257"/>
<line x1="428" y1="257" x2="428" y2="267"/>
<line x1="428" y1="267" x2="443.2" y2="267"/>
<line x1="192" y1="281" x2="445" y2="281"/>
<line x1="222" y1="305" x2="418" y2="305"/>
<line x1="418" y1="305" x2="418" y2="295"/>
<line x1="418" y1="295" x2="443.2" y2="295"/>
<line x1="498" y1="281" x2="528" y2="281"/>
<line x1="34" y1="345" x2="448" y2="345"/>
<line x1="448" y1="345" x2="448" y2="428"/>
<line x1="448" y1="428" x2="461.9" y2="428"/>
<line x1="114" y1="376" x2="330" y2="376"/>
<line x1="270" y1="390" x2="330" y2="390"/>
<line x1="382" y1="383" x2="428" y2="383"/>
<line x1="428" y1="383" x2="428" y2="442"/>
<line x1="428" y1="442" x2="464.2" y2="442"/>
<line x1="114" y1="428" x2="330" y2="428"/>
<line x1="144" y1="442" x2="330" y2="442"/>
<line x1="382" y1="435" x2="408" y2="435"/>
<line x1="408" y1="435" x2="408" y2="456"/>
<line x1="408" y1="456" x2="465" y2="456"/>
<line x1="144" y1="480" x2="330" y2="480"/>
<line x1="270" y1="494" x2="330" y2="494"/>
<line x1="382" y1="487" x2="418" y2="487"/>
<line x1="418" y1="487" x2="418" y2="470"/>
<line x1="418" y1="470" x2="464.2" y2="470"/>
<line x1="66" y1="532" x2="330" y2="532"/>
<line x1="192" y1="546" x2="330" y2="546"/>
<line x1="222" y1="560" x2="330" y2="560"/>
<line x1="382" y1="546" x2="438" y2="546"/>
<line x1="438" y1="546" x2="438" y2="484"/>
<line x1="438" y1="484" x2="461.9" y2="484"/>
<line x1="518" y1="456" x2="548" y2="456"/>
<line x1="114" y1="614" x2="330" y2="614"/>
<line x1="270" y1="628" x2="330" y2="628"/>
<line x1="382" y1="621" x2="418" y2="621"/>
<line x1="418" y1="621" x2="418" y2="640"/>
<line x1="418" y1="640" x2="434.2" y2="640"/>
<line x1="144" y1="666" x2="330" y2="666"/>
<line x1="270" y1="680" x2="330" y2="680"/>
<line x1="382" y1="673" x2="408" y2="673"/>
<line x1="408" y1="673" x2="408" y2="654"/>
<line x1="408" y1="654" x2="434.2" y2="654"/>
<line x1="488" y1="647" x2="518" y2="647"/>
<line x1="34" y1="727" x2="438" y2="727"/>
<line x1="438" y1="727" x2="438" y2="784"/>
<line x1="438" y1="784" x2="452.5" y2="784"/>
<line x1="66" y1="758" x2="330" y2="758"/>
<line x1="192" y1="772" x2="330" y2="772"/>
<line x1="382" y1="765" x2="418" y2="765"/>
<line x1="418" y1="765" x2="418" y2="798"/>
<line x1="418" y1="798" x2="454.7" y2="798"/>
<line x1="66" y1="810" x2="330" y2="810"/>
<line x1="270" y1="824" x2="330" y2="824"/>
<line x1="382" y1="817" x2="408" y2="817"/>
<line x1="408" y1="817" x2="408" y2="812"/>
<line x1="408" y1="812" x2="454.7" y2="812"/>
<line x1="192" y1="862" x2="330" y2="862"/>
<line x1="270" y1="876" x2="330" y2="876"/>
<line x1="382" y1="869" x2="428" y2="869"/>
<line x1="428" y1="869" x2="428" y2="826"/>
<line x1="428" y1="826" x2="452.5" y2="826"/>
<line x1="508" y1="805" x2="538" y2="805"/>
<line x1="66" y1="930" x2="330" y2="930"/>
<line x1="192" y1="944" x2="330" y2="944"/>
<line x1="382" y1="937" x2="438" y2="937"/>
<line x1="438" y1="937" x2="438" y2="994"/>
<line x1="438" y1="994" x2="452.5" y2="994"/>
<line x1="34" y1="982" x2="330" y2="982"/>
<line x1="192" y1="996" x2="330" y2="996"/>
<line x1="382" y1="989" x2="418" y2="989"/>
<line x1="418" y1="989" x2="418" y2="1008"/>
<line x1="418" y1="1008" x2="454.7" y2="1008"/>
<line x1="114" y1="1034" x2="330" y2="1034"/>
<line x1="144" y1="1048" x2="330" y2="1048"/>
<line x1="382" y1="1041" x2="408" y2="1041"/>
<line x1="408" y1="1041" x2="408" y2="1022"/>
<line x1="408" y1="1022" x2="454.7" y2="1022"/>
<line x1="144" y1="1086" x2="330" y2="1086"/>
<line x1="270" y1="1100" x2="330" y2="1100"/>
<line x1="382" y1="1093" x2="428" y2="1093"/>
<line x1="428" y1="1093" x2="428" y2="1036"/>
<line x1="428" y1="1036" x2="452.5" y2="1036"/>
<line x1="508" y1="1015" x2="538" y2="1015"/>
<line x1="66" y1="52" x2="73" y2="52"/>
<line x1="105" y1="52" x2="114" y2="52"/>
<line x1="144" y1="52" x2="151" y2="52"/>
<line x1="183" y1="52" x2="192" y2="52"/>
<line x1="222" y1="52" x2="229" y2="52"/>
<line x1="261" y1="52" x2="270" y2="52"/>
<path d="M330,130 H356 A26,21 0 0 1 356,172 H330 Z"/>
<path d="M330,182 H356 A26,21 0 0 1 356,224 H330 Z"/>
<path d="M448,118 C470,118 496,135.5 508,153 C496,170.5 470,188 448,188 Q462,153 448,118 Z"/>
<path d="M438,253 C460,253 486,267 498,281 C486,295 460,309 438,309 Q452,281 438,253 Z"/>
<path d="M330,362 H356 A26,21 0 0 1 356,404 H330 Z"/>
<path d="M330,414 H356 A26,21 0 0 1 356,456 H330 Z"/>
<path d="M330,466 H356 A26,21 0 0 1 356,508 H330 Z"/>
<path d="M330,518 H356 A26,28 0 0 1 356,574 H330 Z"/>
<path d="M458,414 C480,414 506,435 518,456 C506,477 480,498 458,498 Q472,456 458,414 Z"/>
<path d="M330,600 H356 A26,21 0 0 1 356,642 H330 Z"/>
<path d="M330,652 H356 A26,21 0 0 1 356,694 H330 Z"/>
<path d="M428,626 C450,626 476,636.5 488,647 C476,657.5 450,668 428,668 Q442,647 428,626 Z"/>
<path d="M330,744 H356 A26,21 0 0 1 356,786 H330 Z"/>
<path d="M330,796 H356 A26,21 0 0 1 356,838 H330 Z"/>
<path d="M330,848 H356 A26,21 0 0 1 356,890 H330 Z"/>
<path d="M448,770 C470,770 496,787.5 508,805 C496,822.5 470,840 448,840 Q462,805 448,770 Z"/>
<path d="M330,916 H356 A26,21 0 0 1 356,958 H330 Z"/>
<path d="M330,968 H356 A26,21 0 0 1 356,1010 H330 Z"/>
<path d="M330,1020 H356 A26,21 0 0 1 356,1062 H330 Z"/>
<path d="M330,1072 H356 A26,21 0 0 1 356,1114 H330 Z"/>
<path d="M448,980 C470,980 496,997.5 508,1015 C496,1032.5 470,1050 448,1050 Q462,1015 448,980 Z"/>
<polygon points="73,40 73,64 95,52"/>
<circle cx="100" cy="52" r="5"/>
<polygon points="151,40 151,64 173,52"/>
<circle cx="178" cy="52" r="5"/>
<polygon points="229,40 229,64 251,52"/>
<circle cx="256" cy="52" r="5"/>
<circle cx="34" cy="89" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="113" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="144" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="222" cy="158" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="114" cy="196" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="210" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="257" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="192" cy="281" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="222" cy="305" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="345" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="114" cy="376" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="390" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="114" cy="428" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="442" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="480" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="494" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="532" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="192" cy="546" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="222" cy="560" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="114" cy="614" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="628" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="666" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="680" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="727" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="758" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="192" cy="772" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="810" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="824" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="192" cy="862" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="876" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="930" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="192" cy="944" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="982" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="192" cy="996" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="114" cy="1034" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="1048" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="1086" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="1100" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="222" cy="52" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="544" y="159">a</text>
<text x="534" y="287">c</text>
<text x="554" y="462">d</text>
<text x="524" y="653">e</text>
<text x="544" y="811">f</text>
<text x="544" y="1021">g</text>
<text x="34" y="22" text-anchor="middle">A</text>
<text x="66" y="22" text-anchor="middle">B</text>
<text x="144" y="22" text-anchor="middle">C</text>
<text x="222" y="22" text-anchor="middle">D</text>
</svg>
</div>

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="74" height="118" viewBox="0 0 74 118" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(10,8) scale(1.1)"><path d="M7,4 L37,4 L33,10 L11,10 Z" fill-opacity="1"/><path d="M38,5 L38,35 L32,31 L32,11 Z" fill-opacity="0.1"/><path d="M38,41 L38,71 L32,65 L32,45 Z" fill-opacity="1"/><path d="M7,72 L37,72 L33,66 L11,66 Z" fill-opacity="1"/><path d="M6,41 L6,71 L12,65 L12,45 Z" fill-opacity="1"/><path d="M6,5 L6,35 L12,31 L12,11 Z" fill-opacity="1"/><path d="M7,38 L11,34 L33,34 L37,38 L33,42 L11,42 Z" fill-opacity="1"/></g>
<text x="34.2" y="108" text-anchor="middle">6</text>
</svg>
</div>

### วงจรของเลข 7 (BCD-8421, AND/OR) {code=bcd; method=andor; digit=7}

$\mathbf{Sol}^{n}$

เลข $7$ ใช้ segment $a, b, c$ จึงเขียนวงจรเฉพาะ segment เหล่านี้ ต่อเข้าด้วยกันเป็นวงจรเดียว : ต้องมีทั้งตัวปกติและตัวคอมพลีเมนต์ของอินพุต จึงใช้เกต NOT ต่อจากอินพุต แต่ละพจน์ผลคูณใช้ AND เกต แล้วนำทุกพจน์เข้า OR เกต (พจน์ที่มีตัวแปรตัวเดียวต่อเข้า OR เกตได้เลย)

$\mathbf{Ans}\quad \begin{aligned}a &= A+C+BD+\overline{B}\,\overline{D} \\ b &= \overline{B}+\overline{C}\,\overline{D}+CD \\ c &= B+\overline{C}+D\end{aligned}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="592" height="482" viewBox="0 0 592 482" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<line x1="34" y1="28" x2="34" y2="89"/>
<line x1="114" y1="52" x2="114" y2="257"/>
<line x1="66" y1="28" x2="66" y2="401"/>
<line x1="192" y1="52" x2="192" y2="425"/>
<line x1="144" y1="28" x2="144" y2="340"/>
<line x1="270" y1="52" x2="270" y2="302"/>
<line x1="222" y1="28" x2="222" y2="449"/>
<line x1="34" y1="89" x2="438" y2="89"/>
<line x1="438" y1="89" x2="438" y2="132"/>
<line x1="438" y1="132" x2="452.5" y2="132"/>
<line x1="144" y1="113" x2="418" y2="113"/>
<line x1="418" y1="113" x2="418" y2="146"/>
<line x1="418" y1="146" x2="454.7" y2="146"/>
<line x1="66" y1="144" x2="330" y2="144"/>
<line x1="222" y1="158" x2="330" y2="158"/>
<line x1="382" y1="151" x2="408" y2="151"/>
<line x1="408" y1="151" x2="408" y2="160"/>
<line x1="408" y1="160" x2="454.7" y2="160"/>
<line x1="114" y1="196" x2="330" y2="196"/>
<line x1="270" y1="210" x2="330" y2="210"/>
<line x1="382" y1="203" x2="428" y2="203"/>
<line x1="428" y1="203" x2="428" y2="174"/>
<line x1="428" y1="174" x2="452.5" y2="174"/>
<line x1="508" y1="153" x2="538" y2="153"/>
<line x1="114" y1="257" x2="428" y2="257"/>
<line x1="428" y1="257" x2="428" y2="295"/>
<line x1="428" y1="295" x2="443.2" y2="295"/>
<line x1="192" y1="288" x2="330" y2="288"/>
<line x1="270" y1="302" x2="330" y2="302"/>
<line x1="382" y1="295" x2="408" y2="295"/>
<line x1="408" y1="295" x2="408" y2="309"/>
<line x1="408" y1="309" x2="445" y2="309"/>
<line x1="144" y1="340" x2="330" y2="340"/>
<line x1="222" y1="354" x2="330" y2="354"/>
<line x1="382" y1="347" x2="418" y2="347"/>
<line x1="418" y1="347" x2="418" y2="323"/>
<line x1="418" y1="323" x2="443.2" y2="323"/>
<line x1="498" y1="309" x2="528" y2="309"/>
<line x1="66" y1="401" x2="428" y2="401"/>
<line x1="428" y1="401" x2="428" y2="411"/>
<line x1="428" y1="411" x2="443.2" y2="411"/>
<line x1="192" y1="425" x2="445" y2="425"/>
<line x1="222" y1="449" x2="418" y2="449"/>
<line x1="418" y1="449" x2="418" y2="439"/>
<line x1="418" y1="439" x2="443.2" y2="439"/>
<line x1="498" y1="425" x2="528" y2="425"/>
<line x1="66" y1="52" x2="73" y2="52"/>
<line x1="105" y1="52" x2="114" y2="52"/>
<line x1="144" y1="52" x2="151" y2="52"/>
<line x1="183" y1="52" x2="192" y2="52"/>
<line x1="222" y1="52" x2="229" y2="52"/>
<line x1="261" y1="52" x2="270" y2="52"/>
<path d="M330,130 H356 A26,21 0 0 1 356,172 H330 Z"/>
<path d="M330,182 H356 A26,21 0 0 1 356,224 H330 Z"/>
<path d="M448,118 C470,118 496,135.5 508,153 C496,170.5 470,188 448,188 Q462,153 448,118 Z"/>
<path d="M330,274 H356 A26,21 0 0 1 356,316 H330 Z"/>
<path d="M330,326 H356 A26,21 0 0 1 356,368 H330 Z"/>
<path d="M438,281 C460,281 486,295 498,309 C486,323 460,337 438,337 Q452,309 438,281 Z"/>
<path d="M438,397 C460,397 486,411 498,425 C486,439 460,453 438,453 Q452,425 438,397 Z"/>
<polygon points="73,40 73,64 95,52"/>
<circle cx="100" cy="52" r="5"/>
<polygon points="151,40 151,64 173,52"/>
<circle cx="178" cy="52" r="5"/>
<polygon points="229,40 229,64 251,52"/>
<circle cx="256" cy="52" r="5"/>
<circle cx="34" cy="89" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="113" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="144" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="222" cy="158" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="114" cy="196" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="210" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="114" cy="257" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="192" cy="288" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="302" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="340" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="222" cy="354" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="401" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="192" cy="425" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="222" cy="449" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="222" cy="52" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="544" y="159">a</text>
<text x="534" y="315">b</text>
<text x="534" y="431">c</text>
<text x="34" y="22" text-anchor="middle">A</text>
<text x="66" y="22" text-anchor="middle">B</text>
<text x="144" y="22" text-anchor="middle">C</text>
<text x="222" y="22" text-anchor="middle">D</text>
</svg>
</div>

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="74" height="118" viewBox="0 0 74 118" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(10,8) scale(1.1)"><path d="M7,4 L37,4 L33,10 L11,10 Z" fill-opacity="1"/><path d="M38,5 L38,35 L32,31 L32,11 Z" fill-opacity="1"/><path d="M38,41 L38,71 L32,65 L32,45 Z" fill-opacity="1"/><path d="M7,72 L37,72 L33,66 L11,66 Z" fill-opacity="0.1"/><path d="M6,41 L6,71 L12,65 L12,45 Z" fill-opacity="0.1"/><path d="M6,5 L6,35 L12,31 L12,11 Z" fill-opacity="0.1"/><path d="M7,38 L11,34 L33,34 L37,38 L33,42 L11,42 Z" fill-opacity="0.1"/></g>
<text x="34.2" y="108" text-anchor="middle">7</text>
</svg>
</div>

### วงจรของเลข 8 (BCD-8421, AND/OR) {code=bcd; method=andor; digit=8}

$\mathbf{Sol}^{n}$

เลข $8$ ใช้ segment $a, b, c, d, e, f, g$ จึงเขียนวงจรเฉพาะ segment เหล่านี้ ต่อเข้าด้วยกันเป็นวงจรเดียว : ต้องมีทั้งตัวปกติและตัวคอมพลีเมนต์ของอินพุต จึงใช้เกต NOT ต่อจากอินพุต แต่ละพจน์ผลคูณใช้ AND เกต แล้วนำทุกพจน์เข้า OR เกต (พจน์ที่มีตัวแปรตัวเดียวต่อเข้า OR เกตได้เลย)

$\mathbf{Ans}\quad \begin{aligned}a &= A+C+BD+\overline{B}\,\overline{D} \\ b &= \overline{B}+\overline{C}\,\overline{D}+CD \\ c &= B+\overline{C}+D \\ d &= A+\overline{B}\,\overline{D}+\overline{B}C+C\overline{D}+B\overline{C}D \\ e &= \overline{B}\,\overline{D}+C\overline{D} \\ f &= A+B\overline{C}+B\overline{D}+\overline{C}\,\overline{D} \\ g &= B\overline{C}+A\overline{C}+\overline{B}C+C\overline{D}\end{aligned}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="602" height="1284" viewBox="0 0 602 1284" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<line x1="34" y1="28" x2="34" y2="1126"/>
<line x1="114" y1="52" x2="114" y2="1178"/>
<line x1="66" y1="28" x2="66" y2="1074"/>
<line x1="192" y1="52" x2="192" y2="1140"/>
<line x1="144" y1="28" x2="144" y2="1230"/>
<line x1="270" y1="52" x2="270" y2="1244"/>
<line x1="222" y1="28" x2="222" y2="704"/>
<line x1="34" y1="89" x2="438" y2="89"/>
<line x1="438" y1="89" x2="438" y2="132"/>
<line x1="438" y1="132" x2="452.5" y2="132"/>
<line x1="144" y1="113" x2="418" y2="113"/>
<line x1="418" y1="113" x2="418" y2="146"/>
<line x1="418" y1="146" x2="454.7" y2="146"/>
<line x1="66" y1="144" x2="330" y2="144"/>
<line x1="222" y1="158" x2="330" y2="158"/>
<line x1="382" y1="151" x2="408" y2="151"/>
<line x1="408" y1="151" x2="408" y2="160"/>
<line x1="408" y1="160" x2="454.7" y2="160"/>
<line x1="114" y1="196" x2="330" y2="196"/>
<line x1="270" y1="210" x2="330" y2="210"/>
<line x1="382" y1="203" x2="428" y2="203"/>
<line x1="428" y1="203" x2="428" y2="174"/>
<line x1="428" y1="174" x2="452.5" y2="174"/>
<line x1="508" y1="153" x2="538" y2="153"/>
<line x1="114" y1="257" x2="428" y2="257"/>
<line x1="428" y1="257" x2="428" y2="295"/>
<line x1="428" y1="295" x2="443.2" y2="295"/>
<line x1="192" y1="288" x2="330" y2="288"/>
<line x1="270" y1="302" x2="330" y2="302"/>
<line x1="382" y1="295" x2="408" y2="295"/>
<line x1="408" y1="295" x2="408" y2="309"/>
<line x1="408" y1="309" x2="445" y2="309"/>
<line x1="144" y1="340" x2="330" y2="340"/>
<line x1="222" y1="354" x2="330" y2="354"/>
<line x1="382" y1="347" x2="418" y2="347"/>
<line x1="418" y1="347" x2="418" y2="323"/>
<line x1="418" y1="323" x2="443.2" y2="323"/>
<line x1="498" y1="309" x2="528" y2="309"/>
<line x1="66" y1="401" x2="428" y2="401"/>
<line x1="428" y1="401" x2="428" y2="411"/>
<line x1="428" y1="411" x2="443.2" y2="411"/>
<line x1="192" y1="425" x2="445" y2="425"/>
<line x1="222" y1="449" x2="418" y2="449"/>
<line x1="418" y1="449" x2="418" y2="439"/>
<line x1="418" y1="439" x2="443.2" y2="439"/>
<line x1="498" y1="425" x2="528" y2="425"/>
<line x1="34" y1="489" x2="448" y2="489"/>
<line x1="448" y1="489" x2="448" y2="572"/>
<line x1="448" y1="572" x2="461.9" y2="572"/>
<line x1="114" y1="520" x2="330" y2="520"/>
<line x1="270" y1="534" x2="330" y2="534"/>
<line x1="382" y1="527" x2="428" y2="527"/>
<line x1="428" y1="527" x2="428" y2="586"/>
<line x1="428" y1="586" x2="464.2" y2="586"/>
<line x1="114" y1="572" x2="330" y2="572"/>
<line x1="144" y1="586" x2="330" y2="586"/>
<line x1="382" y1="579" x2="408" y2="579"/>
<line x1="408" y1="579" x2="408" y2="600"/>
<line x1="408" y1="600" x2="465" y2="600"/>
<line x1="144" y1="624" x2="330" y2="624"/>
<line x1="270" y1="638" x2="330" y2="638"/>
<line x1="382" y1="631" x2="418" y2="631"/>
<line x1="418" y1="631" x2="418" y2="614"/>
<line x1="418" y1="614" x2="464.2" y2="614"/>
<line x1="66" y1="676" x2="330" y2="676"/>
<line x1="192" y1="690" x2="330" y2="690"/>
<line x1="222" y1="704" x2="330" y2="704"/>
<line x1="382" y1="690" x2="438" y2="690"/>
<line x1="438" y1="690" x2="438" y2="628"/>
<line x1="438" y1="628" x2="461.9" y2="628"/>
<line x1="518" y1="600" x2="548" y2="600"/>
<line x1="114" y1="758" x2="330" y2="758"/>
<line x1="270" y1="772" x2="330" y2="772"/>
<line x1="382" y1="765" x2="418" y2="765"/>
<line x1="418" y1="765" x2="418" y2="784"/>
<line x1="418" y1="784" x2="434.2" y2="784"/>
<line x1="144" y1="810" x2="330" y2="810"/>
<line x1="270" y1="824" x2="330" y2="824"/>
<line x1="382" y1="817" x2="408" y2="817"/>
<line x1="408" y1="817" x2="408" y2="798"/>
<line x1="408" y1="798" x2="434.2" y2="798"/>
<line x1="488" y1="791" x2="518" y2="791"/>
<line x1="34" y1="871" x2="438" y2="871"/>
<line x1="438" y1="871" x2="438" y2="928"/>
<line x1="438" y1="928" x2="452.5" y2="928"/>
<line x1="66" y1="902" x2="330" y2="902"/>
<line x1="192" y1="916" x2="330" y2="916"/>
<line x1="382" y1="909" x2="418" y2="909"/>
<line x1="418" y1="909" x2="418" y2="942"/>
<line x1="418" y1="942" x2="454.7" y2="942"/>
<line x1="66" y1="954" x2="330" y2="954"/>
<line x1="270" y1="968" x2="330" y2="968"/>
<line x1="382" y1="961" x2="408" y2="961"/>
<line x1="408" y1="961" x2="408" y2="956"/>
<line x1="408" y1="956" x2="454.7" y2="956"/>
<line x1="192" y1="1006" x2="330" y2="1006"/>
<line x1="270" y1="1020" x2="330" y2="1020"/>
<line x1="382" y1="1013" x2="428" y2="1013"/>
<line x1="428" y1="1013" x2="428" y2="970"/>
<line x1="428" y1="970" x2="452.5" y2="970"/>
<line x1="508" y1="949" x2="538" y2="949"/>
<line x1="66" y1="1074" x2="330" y2="1074"/>
<line x1="192" y1="1088" x2="330" y2="1088"/>
<line x1="382" y1="1081" x2="438" y2="1081"/>
<line x1="438" y1="1081" x2="438" y2="1138"/>
<line x1="438" y1="1138" x2="452.5" y2="1138"/>
<line x1="34" y1="1126" x2="330" y2="1126"/>
<line x1="192" y1="1140" x2="330" y2="1140"/>
<line x1="382" y1="1133" x2="418" y2="1133"/>
<line x1="418" y1="1133" x2="418" y2="1152"/>
<line x1="418" y1="1152" x2="454.7" y2="1152"/>
<line x1="114" y1="1178" x2="330" y2="1178"/>
<line x1="144" y1="1192" x2="330" y2="1192"/>
<line x1="382" y1="1185" x2="408" y2="1185"/>
<line x1="408" y1="1185" x2="408" y2="1166"/>
<line x1="408" y1="1166" x2="454.7" y2="1166"/>
<line x1="144" y1="1230" x2="330" y2="1230"/>
<line x1="270" y1="1244" x2="330" y2="1244"/>
<line x1="382" y1="1237" x2="428" y2="1237"/>
<line x1="428" y1="1237" x2="428" y2="1180"/>
<line x1="428" y1="1180" x2="452.5" y2="1180"/>
<line x1="508" y1="1159" x2="538" y2="1159"/>
<line x1="66" y1="52" x2="73" y2="52"/>
<line x1="105" y1="52" x2="114" y2="52"/>
<line x1="144" y1="52" x2="151" y2="52"/>
<line x1="183" y1="52" x2="192" y2="52"/>
<line x1="222" y1="52" x2="229" y2="52"/>
<line x1="261" y1="52" x2="270" y2="52"/>
<path d="M330,130 H356 A26,21 0 0 1 356,172 H330 Z"/>
<path d="M330,182 H356 A26,21 0 0 1 356,224 H330 Z"/>
<path d="M448,118 C470,118 496,135.5 508,153 C496,170.5 470,188 448,188 Q462,153 448,118 Z"/>
<path d="M330,274 H356 A26,21 0 0 1 356,316 H330 Z"/>
<path d="M330,326 H356 A26,21 0 0 1 356,368 H330 Z"/>
<path d="M438,281 C460,281 486,295 498,309 C486,323 460,337 438,337 Q452,309 438,281 Z"/>
<path d="M438,397 C460,397 486,411 498,425 C486,439 460,453 438,453 Q452,425 438,397 Z"/>
<path d="M330,506 H356 A26,21 0 0 1 356,548 H330 Z"/>
<path d="M330,558 H356 A26,21 0 0 1 356,600 H330 Z"/>
<path d="M330,610 H356 A26,21 0 0 1 356,652 H330 Z"/>
<path d="M330,662 H356 A26,28 0 0 1 356,718 H330 Z"/>
<path d="M458,558 C480,558 506,579 518,600 C506,621 480,642 458,642 Q472,600 458,558 Z"/>
<path d="M330,744 H356 A26,21 0 0 1 356,786 H330 Z"/>
<path d="M330,796 H356 A26,21 0 0 1 356,838 H330 Z"/>
<path d="M428,770 C450,770 476,780.5 488,791 C476,801.5 450,812 428,812 Q442,791 428,770 Z"/>
<path d="M330,888 H356 A26,21 0 0 1 356,930 H330 Z"/>
<path d="M330,940 H356 A26,21 0 0 1 356,982 H330 Z"/>
<path d="M330,992 H356 A26,21 0 0 1 356,1034 H330 Z"/>
<path d="M448,914 C470,914 496,931.5 508,949 C496,966.5 470,984 448,984 Q462,949 448,914 Z"/>
<path d="M330,1060 H356 A26,21 0 0 1 356,1102 H330 Z"/>
<path d="M330,1112 H356 A26,21 0 0 1 356,1154 H330 Z"/>
<path d="M330,1164 H356 A26,21 0 0 1 356,1206 H330 Z"/>
<path d="M330,1216 H356 A26,21 0 0 1 356,1258 H330 Z"/>
<path d="M448,1124 C470,1124 496,1141.5 508,1159 C496,1176.5 470,1194 448,1194 Q462,1159 448,1124 Z"/>
<polygon points="73,40 73,64 95,52"/>
<circle cx="100" cy="52" r="5"/>
<polygon points="151,40 151,64 173,52"/>
<circle cx="178" cy="52" r="5"/>
<polygon points="229,40 229,64 251,52"/>
<circle cx="256" cy="52" r="5"/>
<circle cx="34" cy="89" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="113" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="144" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="222" cy="158" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="114" cy="196" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="210" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="114" cy="257" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="192" cy="288" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="302" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="340" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="222" cy="354" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="401" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="192" cy="425" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="222" cy="449" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="489" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="114" cy="520" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="534" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="114" cy="572" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="586" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="624" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="638" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="676" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="192" cy="690" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="222" cy="704" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="114" cy="758" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="772" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="810" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="824" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="871" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="902" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="192" cy="916" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="954" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="968" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="192" cy="1006" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="1020" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="1074" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="192" cy="1088" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="1126" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="192" cy="1140" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="114" cy="1178" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="1192" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="1230" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="1244" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="222" cy="52" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="544" y="159">a</text>
<text x="534" y="315">b</text>
<text x="534" y="431">c</text>
<text x="554" y="606">d</text>
<text x="524" y="797">e</text>
<text x="544" y="955">f</text>
<text x="544" y="1165">g</text>
<text x="34" y="22" text-anchor="middle">A</text>
<text x="66" y="22" text-anchor="middle">B</text>
<text x="144" y="22" text-anchor="middle">C</text>
<text x="222" y="22" text-anchor="middle">D</text>
</svg>
</div>

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="74" height="118" viewBox="0 0 74 118" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(10,8) scale(1.1)"><path d="M7,4 L37,4 L33,10 L11,10 Z" fill-opacity="1"/><path d="M38,5 L38,35 L32,31 L32,11 Z" fill-opacity="1"/><path d="M38,41 L38,71 L32,65 L32,45 Z" fill-opacity="1"/><path d="M7,72 L37,72 L33,66 L11,66 Z" fill-opacity="1"/><path d="M6,41 L6,71 L12,65 L12,45 Z" fill-opacity="1"/><path d="M6,5 L6,35 L12,31 L12,11 Z" fill-opacity="1"/><path d="M7,38 L11,34 L33,34 L37,38 L33,42 L11,42 Z" fill-opacity="1"/></g>
<text x="34.2" y="108" text-anchor="middle">8</text>
</svg>
</div>

### วงจรของเลข 9 (BCD-8421, AND/OR) {code=bcd; method=andor; digit=9}

$\mathbf{Sol}^{n}$

เลข $9$ ใช้ segment $a, b, c, d, f, g$ จึงเขียนวงจรเฉพาะ segment เหล่านี้ ต่อเข้าด้วยกันเป็นวงจรเดียว : ต้องมีทั้งตัวปกติและตัวคอมพลีเมนต์ของอินพุต จึงใช้เกต NOT ต่อจากอินพุต แต่ละพจน์ผลคูณใช้ AND เกต แล้วนำทุกพจน์เข้า OR เกต (พจน์ที่มีตัวแปรตัวเดียวต่อเข้า OR เกตได้เลย)

$\mathbf{Ans}\quad \begin{aligned}a &= A+C+BD+\overline{B}\,\overline{D} \\ b &= \overline{B}+\overline{C}\,\overline{D}+CD \\ c &= B+\overline{C}+D \\ d &= A+\overline{B}\,\overline{D}+\overline{B}C+C\overline{D}+B\overline{C}D \\ f &= A+B\overline{C}+B\overline{D}+\overline{C}\,\overline{D} \\ g &= B\overline{C}+A\overline{C}+\overline{B}C+C\overline{D}\end{aligned}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="602" height="1164" viewBox="0 0 602 1164" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<line x1="34" y1="28" x2="34" y2="1006"/>
<line x1="114" y1="52" x2="114" y2="1058"/>
<line x1="66" y1="28" x2="66" y2="954"/>
<line x1="192" y1="52" x2="192" y2="1020"/>
<line x1="144" y1="28" x2="144" y2="1110"/>
<line x1="270" y1="52" x2="270" y2="1124"/>
<line x1="222" y1="28" x2="222" y2="704"/>
<line x1="34" y1="89" x2="438" y2="89"/>
<line x1="438" y1="89" x2="438" y2="132"/>
<line x1="438" y1="132" x2="452.5" y2="132"/>
<line x1="144" y1="113" x2="418" y2="113"/>
<line x1="418" y1="113" x2="418" y2="146"/>
<line x1="418" y1="146" x2="454.7" y2="146"/>
<line x1="66" y1="144" x2="330" y2="144"/>
<line x1="222" y1="158" x2="330" y2="158"/>
<line x1="382" y1="151" x2="408" y2="151"/>
<line x1="408" y1="151" x2="408" y2="160"/>
<line x1="408" y1="160" x2="454.7" y2="160"/>
<line x1="114" y1="196" x2="330" y2="196"/>
<line x1="270" y1="210" x2="330" y2="210"/>
<line x1="382" y1="203" x2="428" y2="203"/>
<line x1="428" y1="203" x2="428" y2="174"/>
<line x1="428" y1="174" x2="452.5" y2="174"/>
<line x1="508" y1="153" x2="538" y2="153"/>
<line x1="114" y1="257" x2="428" y2="257"/>
<line x1="428" y1="257" x2="428" y2="295"/>
<line x1="428" y1="295" x2="443.2" y2="295"/>
<line x1="192" y1="288" x2="330" y2="288"/>
<line x1="270" y1="302" x2="330" y2="302"/>
<line x1="382" y1="295" x2="408" y2="295"/>
<line x1="408" y1="295" x2="408" y2="309"/>
<line x1="408" y1="309" x2="445" y2="309"/>
<line x1="144" y1="340" x2="330" y2="340"/>
<line x1="222" y1="354" x2="330" y2="354"/>
<line x1="382" y1="347" x2="418" y2="347"/>
<line x1="418" y1="347" x2="418" y2="323"/>
<line x1="418" y1="323" x2="443.2" y2="323"/>
<line x1="498" y1="309" x2="528" y2="309"/>
<line x1="66" y1="401" x2="428" y2="401"/>
<line x1="428" y1="401" x2="428" y2="411"/>
<line x1="428" y1="411" x2="443.2" y2="411"/>
<line x1="192" y1="425" x2="445" y2="425"/>
<line x1="222" y1="449" x2="418" y2="449"/>
<line x1="418" y1="449" x2="418" y2="439"/>
<line x1="418" y1="439" x2="443.2" y2="439"/>
<line x1="498" y1="425" x2="528" y2="425"/>
<line x1="34" y1="489" x2="448" y2="489"/>
<line x1="448" y1="489" x2="448" y2="572"/>
<line x1="448" y1="572" x2="461.9" y2="572"/>
<line x1="114" y1="520" x2="330" y2="520"/>
<line x1="270" y1="534" x2="330" y2="534"/>
<line x1="382" y1="527" x2="428" y2="527"/>
<line x1="428" y1="527" x2="428" y2="586"/>
<line x1="428" y1="586" x2="464.2" y2="586"/>
<line x1="114" y1="572" x2="330" y2="572"/>
<line x1="144" y1="586" x2="330" y2="586"/>
<line x1="382" y1="579" x2="408" y2="579"/>
<line x1="408" y1="579" x2="408" y2="600"/>
<line x1="408" y1="600" x2="465" y2="600"/>
<line x1="144" y1="624" x2="330" y2="624"/>
<line x1="270" y1="638" x2="330" y2="638"/>
<line x1="382" y1="631" x2="418" y2="631"/>
<line x1="418" y1="631" x2="418" y2="614"/>
<line x1="418" y1="614" x2="464.2" y2="614"/>
<line x1="66" y1="676" x2="330" y2="676"/>
<line x1="192" y1="690" x2="330" y2="690"/>
<line x1="222" y1="704" x2="330" y2="704"/>
<line x1="382" y1="690" x2="438" y2="690"/>
<line x1="438" y1="690" x2="438" y2="628"/>
<line x1="438" y1="628" x2="461.9" y2="628"/>
<line x1="518" y1="600" x2="548" y2="600"/>
<line x1="34" y1="751" x2="438" y2="751"/>
<line x1="438" y1="751" x2="438" y2="808"/>
<line x1="438" y1="808" x2="452.5" y2="808"/>
<line x1="66" y1="782" x2="330" y2="782"/>
<line x1="192" y1="796" x2="330" y2="796"/>
<line x1="382" y1="789" x2="418" y2="789"/>
<line x1="418" y1="789" x2="418" y2="822"/>
<line x1="418" y1="822" x2="454.7" y2="822"/>
<line x1="66" y1="834" x2="330" y2="834"/>
<line x1="270" y1="848" x2="330" y2="848"/>
<line x1="382" y1="841" x2="408" y2="841"/>
<line x1="408" y1="841" x2="408" y2="836"/>
<line x1="408" y1="836" x2="454.7" y2="836"/>
<line x1="192" y1="886" x2="330" y2="886"/>
<line x1="270" y1="900" x2="330" y2="900"/>
<line x1="382" y1="893" x2="428" y2="893"/>
<line x1="428" y1="893" x2="428" y2="850"/>
<line x1="428" y1="850" x2="452.5" y2="850"/>
<line x1="508" y1="829" x2="538" y2="829"/>
<line x1="66" y1="954" x2="330" y2="954"/>
<line x1="192" y1="968" x2="330" y2="968"/>
<line x1="382" y1="961" x2="438" y2="961"/>
<line x1="438" y1="961" x2="438" y2="1018"/>
<line x1="438" y1="1018" x2="452.5" y2="1018"/>
<line x1="34" y1="1006" x2="330" y2="1006"/>
<line x1="192" y1="1020" x2="330" y2="1020"/>
<line x1="382" y1="1013" x2="418" y2="1013"/>
<line x1="418" y1="1013" x2="418" y2="1032"/>
<line x1="418" y1="1032" x2="454.7" y2="1032"/>
<line x1="114" y1="1058" x2="330" y2="1058"/>
<line x1="144" y1="1072" x2="330" y2="1072"/>
<line x1="382" y1="1065" x2="408" y2="1065"/>
<line x1="408" y1="1065" x2="408" y2="1046"/>
<line x1="408" y1="1046" x2="454.7" y2="1046"/>
<line x1="144" y1="1110" x2="330" y2="1110"/>
<line x1="270" y1="1124" x2="330" y2="1124"/>
<line x1="382" y1="1117" x2="428" y2="1117"/>
<line x1="428" y1="1117" x2="428" y2="1060"/>
<line x1="428" y1="1060" x2="452.5" y2="1060"/>
<line x1="508" y1="1039" x2="538" y2="1039"/>
<line x1="66" y1="52" x2="73" y2="52"/>
<line x1="105" y1="52" x2="114" y2="52"/>
<line x1="144" y1="52" x2="151" y2="52"/>
<line x1="183" y1="52" x2="192" y2="52"/>
<line x1="222" y1="52" x2="229" y2="52"/>
<line x1="261" y1="52" x2="270" y2="52"/>
<path d="M330,130 H356 A26,21 0 0 1 356,172 H330 Z"/>
<path d="M330,182 H356 A26,21 0 0 1 356,224 H330 Z"/>
<path d="M448,118 C470,118 496,135.5 508,153 C496,170.5 470,188 448,188 Q462,153 448,118 Z"/>
<path d="M330,274 H356 A26,21 0 0 1 356,316 H330 Z"/>
<path d="M330,326 H356 A26,21 0 0 1 356,368 H330 Z"/>
<path d="M438,281 C460,281 486,295 498,309 C486,323 460,337 438,337 Q452,309 438,281 Z"/>
<path d="M438,397 C460,397 486,411 498,425 C486,439 460,453 438,453 Q452,425 438,397 Z"/>
<path d="M330,506 H356 A26,21 0 0 1 356,548 H330 Z"/>
<path d="M330,558 H356 A26,21 0 0 1 356,600 H330 Z"/>
<path d="M330,610 H356 A26,21 0 0 1 356,652 H330 Z"/>
<path d="M330,662 H356 A26,28 0 0 1 356,718 H330 Z"/>
<path d="M458,558 C480,558 506,579 518,600 C506,621 480,642 458,642 Q472,600 458,558 Z"/>
<path d="M330,768 H356 A26,21 0 0 1 356,810 H330 Z"/>
<path d="M330,820 H356 A26,21 0 0 1 356,862 H330 Z"/>
<path d="M330,872 H356 A26,21 0 0 1 356,914 H330 Z"/>
<path d="M448,794 C470,794 496,811.5 508,829 C496,846.5 470,864 448,864 Q462,829 448,794 Z"/>
<path d="M330,940 H356 A26,21 0 0 1 356,982 H330 Z"/>
<path d="M330,992 H356 A26,21 0 0 1 356,1034 H330 Z"/>
<path d="M330,1044 H356 A26,21 0 0 1 356,1086 H330 Z"/>
<path d="M330,1096 H356 A26,21 0 0 1 356,1138 H330 Z"/>
<path d="M448,1004 C470,1004 496,1021.5 508,1039 C496,1056.5 470,1074 448,1074 Q462,1039 448,1004 Z"/>
<polygon points="73,40 73,64 95,52"/>
<circle cx="100" cy="52" r="5"/>
<polygon points="151,40 151,64 173,52"/>
<circle cx="178" cy="52" r="5"/>
<polygon points="229,40 229,64 251,52"/>
<circle cx="256" cy="52" r="5"/>
<circle cx="34" cy="89" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="113" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="144" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="222" cy="158" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="114" cy="196" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="210" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="114" cy="257" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="192" cy="288" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="302" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="340" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="222" cy="354" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="401" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="192" cy="425" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="222" cy="449" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="489" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="114" cy="520" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="534" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="114" cy="572" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="586" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="624" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="638" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="676" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="192" cy="690" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="222" cy="704" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="751" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="782" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="192" cy="796" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="834" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="848" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="192" cy="886" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="900" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="954" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="192" cy="968" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="1006" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="192" cy="1020" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="114" cy="1058" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="1072" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="1110" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="1124" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="222" cy="52" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="544" y="159">a</text>
<text x="534" y="315">b</text>
<text x="534" y="431">c</text>
<text x="554" y="606">d</text>
<text x="544" y="835">f</text>
<text x="544" y="1045">g</text>
<text x="34" y="22" text-anchor="middle">A</text>
<text x="66" y="22" text-anchor="middle">B</text>
<text x="144" y="22" text-anchor="middle">C</text>
<text x="222" y="22" text-anchor="middle">D</text>
</svg>
</div>

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="74" height="118" viewBox="0 0 74 118" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(10,8) scale(1.1)"><path d="M7,4 L37,4 L33,10 L11,10 Z" fill-opacity="1"/><path d="M38,5 L38,35 L32,31 L32,11 Z" fill-opacity="1"/><path d="M38,41 L38,71 L32,65 L32,45 Z" fill-opacity="1"/><path d="M7,72 L37,72 L33,66 L11,66 Z" fill-opacity="1"/><path d="M6,41 L6,71 L12,65 L12,45 Z" fill-opacity="0.1"/><path d="M6,5 L6,35 L12,31 L12,11 Z" fill-opacity="1"/><path d="M7,38 L11,34 L33,34 L37,38 L33,42 L11,42 Z" fill-opacity="1"/></g>
<text x="34.2" y="108" text-anchor="middle">9</text>
</svg>
</div>

### วงจรของเลข 0 (BCD-8421, NAND อย่างเดียว) {code=bcd; method=nand; digit=0}

$\mathbf{Sol}^{n}$

เลข $0$ ใช้ segment $a, b, c, d, e, f$ จึงเขียนวงจรเฉพาะ segment เหล่านี้ ต่อเข้าด้วยกันเป็นวงจรเดียว : ใช้ NAND เกตทั้งสองชั้น : แต่ละพจน์ผลคูณเข้า NAND เกตชั้นแรก (พจน์ตัวแปรเดียวใช้ตัวที่คอมพลีเมนต์ต่อตรง) แล้วนำทุกเอาต์พุตเข้า NAND เกตชั้นที่สอง

$\mathbf{Ans}\quad \begin{aligned}a &= \overline{\overline{A}\cdot \overline{C}\cdot \overline{BD}\cdot \overline{\overline{B}\,\overline{D}}} \\ b &= \overline{B\cdot \overline{\overline{C}\,\overline{D}}\cdot \overline{CD}} \\ c &= \overline{\overline{B}\cdot C\cdot \overline{D}} \\ d &= \overline{\overline{A}\cdot \overline{\overline{B}\,\overline{D}}\cdot \overline{\overline{B}C}\cdot \overline{C\overline{D}}\cdot \overline{B\overline{C}D}} \\ e &= \overline{\overline{\overline{B}\,\overline{D}}\cdot \overline{C\overline{D}}} \\ f &= \overline{\overline{A}\cdot \overline{B\overline{C}}\cdot \overline{B\overline{D}}\cdot \overline{\overline{C}\,\overline{D}}}\end{aligned}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="660" height="1060" viewBox="0 0 660 1060" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<line x1="82" y1="52" x2="82" y2="871"/>
<line x1="34" y1="28" x2="34" y2="52"/>
<line x1="160" y1="52" x2="160" y2="758"/>
<line x1="112" y1="28" x2="112" y2="954"/>
<line x1="238" y1="52" x2="238" y2="1006"/>
<line x1="190" y1="28" x2="190" y2="810"/>
<line x1="316" y1="52" x2="316" y2="1020"/>
<line x1="268" y1="28" x2="268" y2="704"/>
<line x1="82" y1="89" x2="494" y2="89"/>
<line x1="494" y1="89" x2="494" y2="132"/>
<line x1="494" y1="132" x2="504" y2="132"/>
<line x1="238" y1="113" x2="474" y2="113"/>
<line x1="474" y1="113" x2="474" y2="146"/>
<line x1="474" y1="146" x2="504" y2="146"/>
<line x1="112" y1="144" x2="376" y2="144"/>
<line x1="268" y1="158" x2="376" y2="158"/>
<line x1="438" y1="151" x2="464" y2="151"/>
<line x1="464" y1="151" x2="464" y2="160"/>
<line x1="464" y1="160" x2="504" y2="160"/>
<line x1="160" y1="196" x2="376" y2="196"/>
<line x1="316" y1="210" x2="376" y2="210"/>
<line x1="438" y1="203" x2="484" y2="203"/>
<line x1="484" y1="203" x2="484" y2="174"/>
<line x1="484" y1="174" x2="504" y2="174"/>
<line x1="566" y1="153" x2="596" y2="153"/>
<line x1="112" y1="257" x2="484" y2="257"/>
<line x1="484" y1="257" x2="484" y2="295"/>
<line x1="484" y1="295" x2="494" y2="295"/>
<line x1="238" y1="288" x2="376" y2="288"/>
<line x1="316" y1="302" x2="376" y2="302"/>
<line x1="438" y1="295" x2="464" y2="295"/>
<line x1="464" y1="295" x2="464" y2="309"/>
<line x1="464" y1="309" x2="494" y2="309"/>
<line x1="190" y1="340" x2="376" y2="340"/>
<line x1="268" y1="354" x2="376" y2="354"/>
<line x1="438" y1="347" x2="474" y2="347"/>
<line x1="474" y1="347" x2="474" y2="323"/>
<line x1="474" y1="323" x2="494" y2="323"/>
<line x1="556" y1="309" x2="586" y2="309"/>
<line x1="160" y1="401" x2="484" y2="401"/>
<line x1="484" y1="401" x2="484" y2="411"/>
<line x1="484" y1="411" x2="494" y2="411"/>
<line x1="190" y1="425" x2="494" y2="425"/>
<line x1="316" y1="449" x2="474" y2="449"/>
<line x1="474" y1="449" x2="474" y2="439"/>
<line x1="474" y1="439" x2="494" y2="439"/>
<line x1="556" y1="425" x2="586" y2="425"/>
<line x1="82" y1="489" x2="504" y2="489"/>
<line x1="504" y1="489" x2="504" y2="572"/>
<line x1="504" y1="572" x2="514" y2="572"/>
<line x1="160" y1="520" x2="376" y2="520"/>
<line x1="316" y1="534" x2="376" y2="534"/>
<line x1="438" y1="527" x2="484" y2="527"/>
<line x1="484" y1="527" x2="484" y2="586"/>
<line x1="484" y1="586" x2="514" y2="586"/>
<line x1="160" y1="572" x2="376" y2="572"/>
<line x1="190" y1="586" x2="376" y2="586"/>
<line x1="438" y1="579" x2="464" y2="579"/>
<line x1="464" y1="579" x2="464" y2="600"/>
<line x1="464" y1="600" x2="514" y2="600"/>
<line x1="190" y1="624" x2="376" y2="624"/>
<line x1="316" y1="638" x2="376" y2="638"/>
<line x1="438" y1="631" x2="474" y2="631"/>
<line x1="474" y1="631" x2="474" y2="614"/>
<line x1="474" y1="614" x2="514" y2="614"/>
<line x1="112" y1="676" x2="376" y2="676"/>
<line x1="238" y1="690" x2="376" y2="690"/>
<line x1="268" y1="704" x2="376" y2="704"/>
<line x1="438" y1="690" x2="494" y2="690"/>
<line x1="494" y1="690" x2="494" y2="628"/>
<line x1="494" y1="628" x2="514" y2="628"/>
<line x1="576" y1="600" x2="606" y2="600"/>
<line x1="160" y1="758" x2="376" y2="758"/>
<line x1="316" y1="772" x2="376" y2="772"/>
<line x1="438" y1="765" x2="474" y2="765"/>
<line x1="474" y1="765" x2="474" y2="784"/>
<line x1="474" y1="784" x2="484" y2="784"/>
<line x1="190" y1="810" x2="376" y2="810"/>
<line x1="316" y1="824" x2="376" y2="824"/>
<line x1="438" y1="817" x2="464" y2="817"/>
<line x1="464" y1="817" x2="464" y2="798"/>
<line x1="464" y1="798" x2="484" y2="798"/>
<line x1="546" y1="791" x2="576" y2="791"/>
<line x1="82" y1="871" x2="494" y2="871"/>
<line x1="494" y1="871" x2="494" y2="928"/>
<line x1="494" y1="928" x2="504" y2="928"/>
<line x1="112" y1="902" x2="376" y2="902"/>
<line x1="238" y1="916" x2="376" y2="916"/>
<line x1="438" y1="909" x2="474" y2="909"/>
<line x1="474" y1="909" x2="474" y2="942"/>
<line x1="474" y1="942" x2="504" y2="942"/>
<line x1="112" y1="954" x2="376" y2="954"/>
<line x1="316" y1="968" x2="376" y2="968"/>
<line x1="438" y1="961" x2="464" y2="961"/>
<line x1="464" y1="961" x2="464" y2="956"/>
<line x1="464" y1="956" x2="504" y2="956"/>
<line x1="238" y1="1006" x2="376" y2="1006"/>
<line x1="316" y1="1020" x2="376" y2="1020"/>
<line x1="438" y1="1013" x2="484" y2="1013"/>
<line x1="484" y1="1013" x2="484" y2="970"/>
<line x1="484" y1="970" x2="504" y2="970"/>
<line x1="566" y1="949" x2="596" y2="949"/>
<line x1="34" y1="52" x2="41" y2="52"/>
<line x1="73" y1="52" x2="82" y2="52"/>
<line x1="112" y1="52" x2="119" y2="52"/>
<line x1="151" y1="52" x2="160" y2="52"/>
<line x1="190" y1="52" x2="197" y2="52"/>
<line x1="229" y1="52" x2="238" y2="52"/>
<line x1="268" y1="52" x2="275" y2="52"/>
<line x1="307" y1="52" x2="316" y2="52"/>
<path d="M376,130 H402 A26,21 0 0 1 402,172 H376 Z"/>
<circle cx="433" cy="151" r="5"/>
<path d="M376,182 H402 A26,21 0 0 1 402,224 H376 Z"/>
<circle cx="433" cy="203" r="5"/>
<path d="M504,118 H530 A26,35 0 0 1 530,188 H504 Z"/>
<circle cx="561" cy="153" r="5"/>
<path d="M376,274 H402 A26,21 0 0 1 402,316 H376 Z"/>
<circle cx="433" cy="295" r="5"/>
<path d="M376,326 H402 A26,21 0 0 1 402,368 H376 Z"/>
<circle cx="433" cy="347" r="5"/>
<path d="M494,281 H520 A26,28 0 0 1 520,337 H494 Z"/>
<circle cx="551" cy="309" r="5"/>
<path d="M494,397 H520 A26,28 0 0 1 520,453 H494 Z"/>
<circle cx="551" cy="425" r="5"/>
<path d="M376,506 H402 A26,21 0 0 1 402,548 H376 Z"/>
<circle cx="433" cy="527" r="5"/>
<path d="M376,558 H402 A26,21 0 0 1 402,600 H376 Z"/>
<circle cx="433" cy="579" r="5"/>
<path d="M376,610 H402 A26,21 0 0 1 402,652 H376 Z"/>
<circle cx="433" cy="631" r="5"/>
<path d="M376,662 H402 A26,28 0 0 1 402,718 H376 Z"/>
<circle cx="433" cy="690" r="5"/>
<path d="M514,558 H540 A26,42 0 0 1 540,642 H514 Z"/>
<circle cx="571" cy="600" r="5"/>
<path d="M376,744 H402 A26,21 0 0 1 402,786 H376 Z"/>
<circle cx="433" cy="765" r="5"/>
<path d="M376,796 H402 A26,21 0 0 1 402,838 H376 Z"/>
<circle cx="433" cy="817" r="5"/>
<path d="M484,770 H510 A26,21 0 0 1 510,812 H484 Z"/>
<circle cx="541" cy="791" r="5"/>
<path d="M376,888 H402 A26,21 0 0 1 402,930 H376 Z"/>
<circle cx="433" cy="909" r="5"/>
<path d="M376,940 H402 A26,21 0 0 1 402,982 H376 Z"/>
<circle cx="433" cy="961" r="5"/>
<path d="M376,992 H402 A26,21 0 0 1 402,1034 H376 Z"/>
<circle cx="433" cy="1013" r="5"/>
<path d="M504,914 H530 A26,35 0 0 1 530,984 H504 Z"/>
<circle cx="561" cy="949" r="5"/>
<polygon points="41,40 41,64 63,52"/>
<circle cx="68" cy="52" r="5"/>
<polygon points="119,40 119,64 141,52"/>
<circle cx="146" cy="52" r="5"/>
<polygon points="197,40 197,64 219,52"/>
<circle cx="224" cy="52" r="5"/>
<polygon points="275,40 275,64 297,52"/>
<circle cx="302" cy="52" r="5"/>
<circle cx="82" cy="89" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="113" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="144" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="158" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="160" cy="196" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316" cy="210" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="257" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="288" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316" cy="302" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="340" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="354" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="160" cy="401" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="425" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316" cy="449" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="82" cy="489" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="160" cy="520" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316" cy="534" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="160" cy="572" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="586" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="624" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316" cy="638" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="676" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="690" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="704" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="160" cy="758" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316" cy="772" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="810" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316" cy="824" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="82" cy="871" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="902" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="916" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="954" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316" cy="968" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="1006" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316" cy="1020" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="52" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="602" y="159">a</text>
<text x="592" y="315">b</text>
<text x="592" y="431">c</text>
<text x="612" y="606">d</text>
<text x="582" y="797">e</text>
<text x="602" y="955">f</text>
<text x="34" y="22" text-anchor="middle">A</text>
<text x="112" y="22" text-anchor="middle">B</text>
<text x="190" y="22" text-anchor="middle">C</text>
<text x="268" y="22" text-anchor="middle">D</text>
</svg>
</div>

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="74" height="118" viewBox="0 0 74 118" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(10,8) scale(1.1)"><path d="M7,4 L37,4 L33,10 L11,10 Z" fill-opacity="1"/><path d="M38,5 L38,35 L32,31 L32,11 Z" fill-opacity="1"/><path d="M38,41 L38,71 L32,65 L32,45 Z" fill-opacity="1"/><path d="M7,72 L37,72 L33,66 L11,66 Z" fill-opacity="1"/><path d="M6,41 L6,71 L12,65 L12,45 Z" fill-opacity="1"/><path d="M6,5 L6,35 L12,31 L12,11 Z" fill-opacity="1"/><path d="M7,38 L11,34 L33,34 L37,38 L33,42 L11,42 Z" fill-opacity="0.1"/></g>
<text x="34.2" y="108" text-anchor="middle">0</text>
</svg>
</div>

### วงจรของเลข 1 (BCD-8421, NAND อย่างเดียว) {code=bcd; method=nand; digit=1}

$\mathbf{Sol}^{n}$

เลข $1$ ใช้ segment $b, c$ จึงเขียนวงจรเฉพาะ segment เหล่านี้ ต่อเข้าด้วยกันเป็นวงจรเดียว : ใช้ NAND เกตทั้งสองชั้น : แต่ละพจน์ผลคูณเข้า NAND เกตชั้นแรก (พจน์ตัวแปรเดียวใช้ตัวที่คอมพลีเมนต์ต่อตรง) แล้วนำทุกเอาต์พุตเข้า NAND เกตชั้นที่สอง

$\mathbf{Ans}\quad \begin{aligned}b &= \overline{B\cdot \overline{\overline{C}\,\overline{D}}\cdot \overline{CD}} \\ c &= \overline{\overline{B}\cdot C\cdot \overline{D}}\end{aligned}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="562" height="314" viewBox="0 0 562 314" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<line x1="82" y1="52" x2="82" y2="233"/>
<line x1="34" y1="28" x2="34" y2="89"/>
<line x1="160" y1="52" x2="160" y2="120"/>
<line x1="112" y1="28" x2="112" y2="257"/>
<line x1="238" y1="52" x2="238" y2="281"/>
<line x1="190" y1="28" x2="190" y2="186"/>
<line x1="34" y1="89" x2="406" y2="89"/>
<line x1="406" y1="89" x2="406" y2="127"/>
<line x1="406" y1="127" x2="416" y2="127"/>
<line x1="160" y1="120" x2="298" y2="120"/>
<line x1="238" y1="134" x2="298" y2="134"/>
<line x1="360" y1="127" x2="386" y2="127"/>
<line x1="386" y1="127" x2="386" y2="141"/>
<line x1="386" y1="141" x2="416" y2="141"/>
<line x1="112" y1="172" x2="298" y2="172"/>
<line x1="190" y1="186" x2="298" y2="186"/>
<line x1="360" y1="179" x2="396" y2="179"/>
<line x1="396" y1="179" x2="396" y2="155"/>
<line x1="396" y1="155" x2="416" y2="155"/>
<line x1="478" y1="141" x2="508" y2="141"/>
<line x1="82" y1="233" x2="406" y2="233"/>
<line x1="406" y1="233" x2="406" y2="243"/>
<line x1="406" y1="243" x2="416" y2="243"/>
<line x1="112" y1="257" x2="416" y2="257"/>
<line x1="238" y1="281" x2="396" y2="281"/>
<line x1="396" y1="281" x2="396" y2="271"/>
<line x1="396" y1="271" x2="416" y2="271"/>
<line x1="478" y1="257" x2="508" y2="257"/>
<line x1="34" y1="52" x2="41" y2="52"/>
<line x1="73" y1="52" x2="82" y2="52"/>
<line x1="112" y1="52" x2="119" y2="52"/>
<line x1="151" y1="52" x2="160" y2="52"/>
<line x1="190" y1="52" x2="197" y2="52"/>
<line x1="229" y1="52" x2="238" y2="52"/>
<path d="M298,106 H324 A26,21 0 0 1 324,148 H298 Z"/>
<circle cx="355" cy="127" r="5"/>
<path d="M298,158 H324 A26,21 0 0 1 324,200 H298 Z"/>
<circle cx="355" cy="179" r="5"/>
<path d="M416,113 H442 A26,28 0 0 1 442,169 H416 Z"/>
<circle cx="473" cy="141" r="5"/>
<path d="M416,229 H442 A26,28 0 0 1 442,285 H416 Z"/>
<circle cx="473" cy="257" r="5"/>
<polygon points="41,40 41,64 63,52"/>
<circle cx="68" cy="52" r="5"/>
<polygon points="119,40 119,64 141,52"/>
<circle cx="146" cy="52" r="5"/>
<polygon points="197,40 197,64 219,52"/>
<circle cx="224" cy="52" r="5"/>
<circle cx="34" cy="89" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="160" cy="120" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="134" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="172" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="186" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="82" cy="233" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="257" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="281" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="52" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="514" y="147">b</text>
<text x="514" y="263">c</text>
<text x="34" y="22" text-anchor="middle">B</text>
<text x="112" y="22" text-anchor="middle">C</text>
<text x="190" y="22" text-anchor="middle">D</text>
</svg>
</div>

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="74" height="118" viewBox="0 0 74 118" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(10,8) scale(1.1)"><path d="M7,4 L37,4 L33,10 L11,10 Z" fill-opacity="0.1"/><path d="M38,5 L38,35 L32,31 L32,11 Z" fill-opacity="1"/><path d="M38,41 L38,71 L32,65 L32,45 Z" fill-opacity="1"/><path d="M7,72 L37,72 L33,66 L11,66 Z" fill-opacity="0.1"/><path d="M6,41 L6,71 L12,65 L12,45 Z" fill-opacity="0.1"/><path d="M6,5 L6,35 L12,31 L12,11 Z" fill-opacity="0.1"/><path d="M7,38 L11,34 L33,34 L37,38 L33,42 L11,42 Z" fill-opacity="0.1"/></g>
<text x="34.2" y="108" text-anchor="middle">1</text>
</svg>
</div>

### วงจรของเลข 2 (BCD-8421, NAND อย่างเดียว) {code=bcd; method=nand; digit=2}

$\mathbf{Sol}^{n}$

เลข $2$ ใช้ segment $a, b, d, e, g$ จึงเขียนวงจรเฉพาะ segment เหล่านี้ ต่อเข้าด้วยกันเป็นวงจรเดียว : ใช้ NAND เกตทั้งสองชั้น : แต่ละพจน์ผลคูณเข้า NAND เกตชั้นแรก (พจน์ตัวแปรเดียวใช้ตัวที่คอมพลีเมนต์ต่อตรง) แล้วนำทุกเอาต์พุตเข้า NAND เกตชั้นที่สอง

$\mathbf{Ans}\quad \begin{aligned}a &= \overline{\overline{A}\cdot \overline{C}\cdot \overline{BD}\cdot \overline{\overline{B}\,\overline{D}}} \\ b &= \overline{B\cdot \overline{\overline{C}\,\overline{D}}\cdot \overline{CD}} \\ d &= \overline{\overline{A}\cdot \overline{\overline{B}\,\overline{D}}\cdot \overline{\overline{B}C}\cdot \overline{C\overline{D}}\cdot \overline{B\overline{C}D}} \\ e &= \overline{\overline{\overline{B}\,\overline{D}}\cdot \overline{C\overline{D}}} \\ g &= \overline{\overline{B\overline{C}}\cdot \overline{A\overline{C}}\cdot \overline{\overline{B}C}\cdot \overline{C\overline{D}}}\end{aligned}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="660" height="1000" viewBox="0 0 660 1000" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<line x1="82" y1="52" x2="82" y2="401"/>
<line x1="34" y1="28" x2="34" y2="842"/>
<line x1="160" y1="52" x2="160" y2="894"/>
<line x1="112" y1="28" x2="112" y2="790"/>
<line x1="238" y1="52" x2="238" y2="856"/>
<line x1="190" y1="28" x2="190" y2="946"/>
<line x1="316" y1="52" x2="316" y2="960"/>
<line x1="268" y1="28" x2="268" y2="616"/>
<line x1="82" y1="89" x2="494" y2="89"/>
<line x1="494" y1="89" x2="494" y2="132"/>
<line x1="494" y1="132" x2="504" y2="132"/>
<line x1="238" y1="113" x2="474" y2="113"/>
<line x1="474" y1="113" x2="474" y2="146"/>
<line x1="474" y1="146" x2="504" y2="146"/>
<line x1="112" y1="144" x2="376" y2="144"/>
<line x1="268" y1="158" x2="376" y2="158"/>
<line x1="438" y1="151" x2="464" y2="151"/>
<line x1="464" y1="151" x2="464" y2="160"/>
<line x1="464" y1="160" x2="504" y2="160"/>
<line x1="160" y1="196" x2="376" y2="196"/>
<line x1="316" y1="210" x2="376" y2="210"/>
<line x1="438" y1="203" x2="484" y2="203"/>
<line x1="484" y1="203" x2="484" y2="174"/>
<line x1="484" y1="174" x2="504" y2="174"/>
<line x1="566" y1="153" x2="596" y2="153"/>
<line x1="112" y1="257" x2="484" y2="257"/>
<line x1="484" y1="257" x2="484" y2="295"/>
<line x1="484" y1="295" x2="494" y2="295"/>
<line x1="238" y1="288" x2="376" y2="288"/>
<line x1="316" y1="302" x2="376" y2="302"/>
<line x1="438" y1="295" x2="464" y2="295"/>
<line x1="464" y1="295" x2="464" y2="309"/>
<line x1="464" y1="309" x2="494" y2="309"/>
<line x1="190" y1="340" x2="376" y2="340"/>
<line x1="268" y1="354" x2="376" y2="354"/>
<line x1="438" y1="347" x2="474" y2="347"/>
<line x1="474" y1="347" x2="474" y2="323"/>
<line x1="474" y1="323" x2="494" y2="323"/>
<line x1="556" y1="309" x2="586" y2="309"/>
<line x1="82" y1="401" x2="504" y2="401"/>
<line x1="504" y1="401" x2="504" y2="484"/>
<line x1="504" y1="484" x2="514" y2="484"/>
<line x1="160" y1="432" x2="376" y2="432"/>
<line x1="316" y1="446" x2="376" y2="446"/>
<line x1="438" y1="439" x2="484" y2="439"/>
<line x1="484" y1="439" x2="484" y2="498"/>
<line x1="484" y1="498" x2="514" y2="498"/>
<line x1="160" y1="484" x2="376" y2="484"/>
<line x1="190" y1="498" x2="376" y2="498"/>
<line x1="438" y1="491" x2="464" y2="491"/>
<line x1="464" y1="491" x2="464" y2="512"/>
<line x1="464" y1="512" x2="514" y2="512"/>
<line x1="190" y1="536" x2="376" y2="536"/>
<line x1="316" y1="550" x2="376" y2="550"/>
<line x1="438" y1="543" x2="474" y2="543"/>
<line x1="474" y1="543" x2="474" y2="526"/>
<line x1="474" y1="526" x2="514" y2="526"/>
<line x1="112" y1="588" x2="376" y2="588"/>
<line x1="238" y1="602" x2="376" y2="602"/>
<line x1="268" y1="616" x2="376" y2="616"/>
<line x1="438" y1="602" x2="494" y2="602"/>
<line x1="494" y1="602" x2="494" y2="540"/>
<line x1="494" y1="540" x2="514" y2="540"/>
<line x1="576" y1="512" x2="606" y2="512"/>
<line x1="160" y1="670" x2="376" y2="670"/>
<line x1="316" y1="684" x2="376" y2="684"/>
<line x1="438" y1="677" x2="474" y2="677"/>
<line x1="474" y1="677" x2="474" y2="696"/>
<line x1="474" y1="696" x2="484" y2="696"/>
<line x1="190" y1="722" x2="376" y2="722"/>
<line x1="316" y1="736" x2="376" y2="736"/>
<line x1="438" y1="729" x2="464" y2="729"/>
<line x1="464" y1="729" x2="464" y2="710"/>
<line x1="464" y1="710" x2="484" y2="710"/>
<line x1="546" y1="703" x2="576" y2="703"/>
<line x1="112" y1="790" x2="376" y2="790"/>
<line x1="238" y1="804" x2="376" y2="804"/>
<line x1="438" y1="797" x2="494" y2="797"/>
<line x1="494" y1="797" x2="494" y2="854"/>
<line x1="494" y1="854" x2="504" y2="854"/>
<line x1="34" y1="842" x2="376" y2="842"/>
<line x1="238" y1="856" x2="376" y2="856"/>
<line x1="438" y1="849" x2="474" y2="849"/>
<line x1="474" y1="849" x2="474" y2="868"/>
<line x1="474" y1="868" x2="504" y2="868"/>
<line x1="160" y1="894" x2="376" y2="894"/>
<line x1="190" y1="908" x2="376" y2="908"/>
<line x1="438" y1="901" x2="464" y2="901"/>
<line x1="464" y1="901" x2="464" y2="882"/>
<line x1="464" y1="882" x2="504" y2="882"/>
<line x1="190" y1="946" x2="376" y2="946"/>
<line x1="316" y1="960" x2="376" y2="960"/>
<line x1="438" y1="953" x2="484" y2="953"/>
<line x1="484" y1="953" x2="484" y2="896"/>
<line x1="484" y1="896" x2="504" y2="896"/>
<line x1="566" y1="875" x2="596" y2="875"/>
<line x1="34" y1="52" x2="41" y2="52"/>
<line x1="73" y1="52" x2="82" y2="52"/>
<line x1="112" y1="52" x2="119" y2="52"/>
<line x1="151" y1="52" x2="160" y2="52"/>
<line x1="190" y1="52" x2="197" y2="52"/>
<line x1="229" y1="52" x2="238" y2="52"/>
<line x1="268" y1="52" x2="275" y2="52"/>
<line x1="307" y1="52" x2="316" y2="52"/>
<path d="M376,130 H402 A26,21 0 0 1 402,172 H376 Z"/>
<circle cx="433" cy="151" r="5"/>
<path d="M376,182 H402 A26,21 0 0 1 402,224 H376 Z"/>
<circle cx="433" cy="203" r="5"/>
<path d="M504,118 H530 A26,35 0 0 1 530,188 H504 Z"/>
<circle cx="561" cy="153" r="5"/>
<path d="M376,274 H402 A26,21 0 0 1 402,316 H376 Z"/>
<circle cx="433" cy="295" r="5"/>
<path d="M376,326 H402 A26,21 0 0 1 402,368 H376 Z"/>
<circle cx="433" cy="347" r="5"/>
<path d="M494,281 H520 A26,28 0 0 1 520,337 H494 Z"/>
<circle cx="551" cy="309" r="5"/>
<path d="M376,418 H402 A26,21 0 0 1 402,460 H376 Z"/>
<circle cx="433" cy="439" r="5"/>
<path d="M376,470 H402 A26,21 0 0 1 402,512 H376 Z"/>
<circle cx="433" cy="491" r="5"/>
<path d="M376,522 H402 A26,21 0 0 1 402,564 H376 Z"/>
<circle cx="433" cy="543" r="5"/>
<path d="M376,574 H402 A26,28 0 0 1 402,630 H376 Z"/>
<circle cx="433" cy="602" r="5"/>
<path d="M514,470 H540 A26,42 0 0 1 540,554 H514 Z"/>
<circle cx="571" cy="512" r="5"/>
<path d="M376,656 H402 A26,21 0 0 1 402,698 H376 Z"/>
<circle cx="433" cy="677" r="5"/>
<path d="M376,708 H402 A26,21 0 0 1 402,750 H376 Z"/>
<circle cx="433" cy="729" r="5"/>
<path d="M484,682 H510 A26,21 0 0 1 510,724 H484 Z"/>
<circle cx="541" cy="703" r="5"/>
<path d="M376,776 H402 A26,21 0 0 1 402,818 H376 Z"/>
<circle cx="433" cy="797" r="5"/>
<path d="M376,828 H402 A26,21 0 0 1 402,870 H376 Z"/>
<circle cx="433" cy="849" r="5"/>
<path d="M376,880 H402 A26,21 0 0 1 402,922 H376 Z"/>
<circle cx="433" cy="901" r="5"/>
<path d="M376,932 H402 A26,21 0 0 1 402,974 H376 Z"/>
<circle cx="433" cy="953" r="5"/>
<path d="M504,840 H530 A26,35 0 0 1 530,910 H504 Z"/>
<circle cx="561" cy="875" r="5"/>
<polygon points="41,40 41,64 63,52"/>
<circle cx="68" cy="52" r="5"/>
<polygon points="119,40 119,64 141,52"/>
<circle cx="146" cy="52" r="5"/>
<polygon points="197,40 197,64 219,52"/>
<circle cx="224" cy="52" r="5"/>
<polygon points="275,40 275,64 297,52"/>
<circle cx="302" cy="52" r="5"/>
<circle cx="82" cy="89" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="113" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="144" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="158" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="160" cy="196" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316" cy="210" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="257" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="288" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316" cy="302" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="340" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="354" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="82" cy="401" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="160" cy="432" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316" cy="446" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="160" cy="484" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="498" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="536" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316" cy="550" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="588" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="602" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="616" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="160" cy="670" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316" cy="684" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="722" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316" cy="736" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="790" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="804" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="842" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="856" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="160" cy="894" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="908" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="946" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316" cy="960" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="52" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="602" y="159">a</text>
<text x="592" y="315">b</text>
<text x="612" y="518">d</text>
<text x="582" y="709">e</text>
<text x="602" y="881">g</text>
<text x="34" y="22" text-anchor="middle">A</text>
<text x="112" y="22" text-anchor="middle">B</text>
<text x="190" y="22" text-anchor="middle">C</text>
<text x="268" y="22" text-anchor="middle">D</text>
</svg>
</div>

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="74" height="118" viewBox="0 0 74 118" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(10,8) scale(1.1)"><path d="M7,4 L37,4 L33,10 L11,10 Z" fill-opacity="1"/><path d="M38,5 L38,35 L32,31 L32,11 Z" fill-opacity="1"/><path d="M38,41 L38,71 L32,65 L32,45 Z" fill-opacity="0.1"/><path d="M7,72 L37,72 L33,66 L11,66 Z" fill-opacity="1"/><path d="M6,41 L6,71 L12,65 L12,45 Z" fill-opacity="1"/><path d="M6,5 L6,35 L12,31 L12,11 Z" fill-opacity="0.1"/><path d="M7,38 L11,34 L33,34 L37,38 L33,42 L11,42 Z" fill-opacity="1"/></g>
<text x="34.2" y="108" text-anchor="middle">2</text>
</svg>
</div>

### วงจรของเลข 3 (BCD-8421, NAND อย่างเดียว) {code=bcd; method=nand; digit=3}

$\mathbf{Sol}^{n}$

เลข $3$ ใช้ segment $a, b, c, d, g$ จึงเขียนวงจรเฉพาะ segment เหล่านี้ ต่อเข้าด้วยกันเป็นวงจรเดียว : ใช้ NAND เกตทั้งสองชั้น : แต่ละพจน์ผลคูณเข้า NAND เกตชั้นแรก (พจน์ตัวแปรเดียวใช้ตัวที่คอมพลีเมนต์ต่อตรง) แล้วนำทุกเอาต์พุตเข้า NAND เกตชั้นที่สอง

$\mathbf{Ans}\quad \begin{aligned}a &= \overline{\overline{A}\cdot \overline{C}\cdot \overline{BD}\cdot \overline{\overline{B}\,\overline{D}}} \\ b &= \overline{B\cdot \overline{\overline{C}\,\overline{D}}\cdot \overline{CD}} \\ c &= \overline{\overline{B}\cdot C\cdot \overline{D}} \\ d &= \overline{\overline{A}\cdot \overline{\overline{B}\,\overline{D}}\cdot \overline{\overline{B}C}\cdot \overline{C\overline{D}}\cdot \overline{B\overline{C}D}} \\ g &= \overline{\overline{B\overline{C}}\cdot \overline{A\overline{C}}\cdot \overline{\overline{B}C}\cdot \overline{C\overline{D}}}\end{aligned}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="660" height="968" viewBox="0 0 660 968" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<line x1="82" y1="52" x2="82" y2="489"/>
<line x1="34" y1="28" x2="34" y2="810"/>
<line x1="160" y1="52" x2="160" y2="862"/>
<line x1="112" y1="28" x2="112" y2="758"/>
<line x1="238" y1="52" x2="238" y2="824"/>
<line x1="190" y1="28" x2="190" y2="914"/>
<line x1="316" y1="52" x2="316" y2="928"/>
<line x1="268" y1="28" x2="268" y2="704"/>
<line x1="82" y1="89" x2="494" y2="89"/>
<line x1="494" y1="89" x2="494" y2="132"/>
<line x1="494" y1="132" x2="504" y2="132"/>
<line x1="238" y1="113" x2="474" y2="113"/>
<line x1="474" y1="113" x2="474" y2="146"/>
<line x1="474" y1="146" x2="504" y2="146"/>
<line x1="112" y1="144" x2="376" y2="144"/>
<line x1="268" y1="158" x2="376" y2="158"/>
<line x1="438" y1="151" x2="464" y2="151"/>
<line x1="464" y1="151" x2="464" y2="160"/>
<line x1="464" y1="160" x2="504" y2="160"/>
<line x1="160" y1="196" x2="376" y2="196"/>
<line x1="316" y1="210" x2="376" y2="210"/>
<line x1="438" y1="203" x2="484" y2="203"/>
<line x1="484" y1="203" x2="484" y2="174"/>
<line x1="484" y1="174" x2="504" y2="174"/>
<line x1="566" y1="153" x2="596" y2="153"/>
<line x1="112" y1="257" x2="484" y2="257"/>
<line x1="484" y1="257" x2="484" y2="295"/>
<line x1="484" y1="295" x2="494" y2="295"/>
<line x1="238" y1="288" x2="376" y2="288"/>
<line x1="316" y1="302" x2="376" y2="302"/>
<line x1="438" y1="295" x2="464" y2="295"/>
<line x1="464" y1="295" x2="464" y2="309"/>
<line x1="464" y1="309" x2="494" y2="309"/>
<line x1="190" y1="340" x2="376" y2="340"/>
<line x1="268" y1="354" x2="376" y2="354"/>
<line x1="438" y1="347" x2="474" y2="347"/>
<line x1="474" y1="347" x2="474" y2="323"/>
<line x1="474" y1="323" x2="494" y2="323"/>
<line x1="556" y1="309" x2="586" y2="309"/>
<line x1="160" y1="401" x2="484" y2="401"/>
<line x1="484" y1="401" x2="484" y2="411"/>
<line x1="484" y1="411" x2="494" y2="411"/>
<line x1="190" y1="425" x2="494" y2="425"/>
<line x1="316" y1="449" x2="474" y2="449"/>
<line x1="474" y1="449" x2="474" y2="439"/>
<line x1="474" y1="439" x2="494" y2="439"/>
<line x1="556" y1="425" x2="586" y2="425"/>
<line x1="82" y1="489" x2="504" y2="489"/>
<line x1="504" y1="489" x2="504" y2="572"/>
<line x1="504" y1="572" x2="514" y2="572"/>
<line x1="160" y1="520" x2="376" y2="520"/>
<line x1="316" y1="534" x2="376" y2="534"/>
<line x1="438" y1="527" x2="484" y2="527"/>
<line x1="484" y1="527" x2="484" y2="586"/>
<line x1="484" y1="586" x2="514" y2="586"/>
<line x1="160" y1="572" x2="376" y2="572"/>
<line x1="190" y1="586" x2="376" y2="586"/>
<line x1="438" y1="579" x2="464" y2="579"/>
<line x1="464" y1="579" x2="464" y2="600"/>
<line x1="464" y1="600" x2="514" y2="600"/>
<line x1="190" y1="624" x2="376" y2="624"/>
<line x1="316" y1="638" x2="376" y2="638"/>
<line x1="438" y1="631" x2="474" y2="631"/>
<line x1="474" y1="631" x2="474" y2="614"/>
<line x1="474" y1="614" x2="514" y2="614"/>
<line x1="112" y1="676" x2="376" y2="676"/>
<line x1="238" y1="690" x2="376" y2="690"/>
<line x1="268" y1="704" x2="376" y2="704"/>
<line x1="438" y1="690" x2="494" y2="690"/>
<line x1="494" y1="690" x2="494" y2="628"/>
<line x1="494" y1="628" x2="514" y2="628"/>
<line x1="576" y1="600" x2="606" y2="600"/>
<line x1="112" y1="758" x2="376" y2="758"/>
<line x1="238" y1="772" x2="376" y2="772"/>
<line x1="438" y1="765" x2="494" y2="765"/>
<line x1="494" y1="765" x2="494" y2="822"/>
<line x1="494" y1="822" x2="504" y2="822"/>
<line x1="34" y1="810" x2="376" y2="810"/>
<line x1="238" y1="824" x2="376" y2="824"/>
<line x1="438" y1="817" x2="474" y2="817"/>
<line x1="474" y1="817" x2="474" y2="836"/>
<line x1="474" y1="836" x2="504" y2="836"/>
<line x1="160" y1="862" x2="376" y2="862"/>
<line x1="190" y1="876" x2="376" y2="876"/>
<line x1="438" y1="869" x2="464" y2="869"/>
<line x1="464" y1="869" x2="464" y2="850"/>
<line x1="464" y1="850" x2="504" y2="850"/>
<line x1="190" y1="914" x2="376" y2="914"/>
<line x1="316" y1="928" x2="376" y2="928"/>
<line x1="438" y1="921" x2="484" y2="921"/>
<line x1="484" y1="921" x2="484" y2="864"/>
<line x1="484" y1="864" x2="504" y2="864"/>
<line x1="566" y1="843" x2="596" y2="843"/>
<line x1="34" y1="52" x2="41" y2="52"/>
<line x1="73" y1="52" x2="82" y2="52"/>
<line x1="112" y1="52" x2="119" y2="52"/>
<line x1="151" y1="52" x2="160" y2="52"/>
<line x1="190" y1="52" x2="197" y2="52"/>
<line x1="229" y1="52" x2="238" y2="52"/>
<line x1="268" y1="52" x2="275" y2="52"/>
<line x1="307" y1="52" x2="316" y2="52"/>
<path d="M376,130 H402 A26,21 0 0 1 402,172 H376 Z"/>
<circle cx="433" cy="151" r="5"/>
<path d="M376,182 H402 A26,21 0 0 1 402,224 H376 Z"/>
<circle cx="433" cy="203" r="5"/>
<path d="M504,118 H530 A26,35 0 0 1 530,188 H504 Z"/>
<circle cx="561" cy="153" r="5"/>
<path d="M376,274 H402 A26,21 0 0 1 402,316 H376 Z"/>
<circle cx="433" cy="295" r="5"/>
<path d="M376,326 H402 A26,21 0 0 1 402,368 H376 Z"/>
<circle cx="433" cy="347" r="5"/>
<path d="M494,281 H520 A26,28 0 0 1 520,337 H494 Z"/>
<circle cx="551" cy="309" r="5"/>
<path d="M494,397 H520 A26,28 0 0 1 520,453 H494 Z"/>
<circle cx="551" cy="425" r="5"/>
<path d="M376,506 H402 A26,21 0 0 1 402,548 H376 Z"/>
<circle cx="433" cy="527" r="5"/>
<path d="M376,558 H402 A26,21 0 0 1 402,600 H376 Z"/>
<circle cx="433" cy="579" r="5"/>
<path d="M376,610 H402 A26,21 0 0 1 402,652 H376 Z"/>
<circle cx="433" cy="631" r="5"/>
<path d="M376,662 H402 A26,28 0 0 1 402,718 H376 Z"/>
<circle cx="433" cy="690" r="5"/>
<path d="M514,558 H540 A26,42 0 0 1 540,642 H514 Z"/>
<circle cx="571" cy="600" r="5"/>
<path d="M376,744 H402 A26,21 0 0 1 402,786 H376 Z"/>
<circle cx="433" cy="765" r="5"/>
<path d="M376,796 H402 A26,21 0 0 1 402,838 H376 Z"/>
<circle cx="433" cy="817" r="5"/>
<path d="M376,848 H402 A26,21 0 0 1 402,890 H376 Z"/>
<circle cx="433" cy="869" r="5"/>
<path d="M376,900 H402 A26,21 0 0 1 402,942 H376 Z"/>
<circle cx="433" cy="921" r="5"/>
<path d="M504,808 H530 A26,35 0 0 1 530,878 H504 Z"/>
<circle cx="561" cy="843" r="5"/>
<polygon points="41,40 41,64 63,52"/>
<circle cx="68" cy="52" r="5"/>
<polygon points="119,40 119,64 141,52"/>
<circle cx="146" cy="52" r="5"/>
<polygon points="197,40 197,64 219,52"/>
<circle cx="224" cy="52" r="5"/>
<polygon points="275,40 275,64 297,52"/>
<circle cx="302" cy="52" r="5"/>
<circle cx="82" cy="89" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="113" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="144" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="158" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="160" cy="196" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316" cy="210" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="257" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="288" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316" cy="302" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="340" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="354" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="160" cy="401" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="425" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316" cy="449" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="82" cy="489" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="160" cy="520" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316" cy="534" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="160" cy="572" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="586" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="624" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316" cy="638" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="676" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="690" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="704" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="758" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="772" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="810" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="824" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="160" cy="862" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="876" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="914" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316" cy="928" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="52" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="602" y="159">a</text>
<text x="592" y="315">b</text>
<text x="592" y="431">c</text>
<text x="612" y="606">d</text>
<text x="602" y="849">g</text>
<text x="34" y="22" text-anchor="middle">A</text>
<text x="112" y="22" text-anchor="middle">B</text>
<text x="190" y="22" text-anchor="middle">C</text>
<text x="268" y="22" text-anchor="middle">D</text>
</svg>
</div>

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="74" height="118" viewBox="0 0 74 118" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(10,8) scale(1.1)"><path d="M7,4 L37,4 L33,10 L11,10 Z" fill-opacity="1"/><path d="M38,5 L38,35 L32,31 L32,11 Z" fill-opacity="1"/><path d="M38,41 L38,71 L32,65 L32,45 Z" fill-opacity="1"/><path d="M7,72 L37,72 L33,66 L11,66 Z" fill-opacity="1"/><path d="M6,41 L6,71 L12,65 L12,45 Z" fill-opacity="0.1"/><path d="M6,5 L6,35 L12,31 L12,11 Z" fill-opacity="0.1"/><path d="M7,38 L11,34 L33,34 L37,38 L33,42 L11,42 Z" fill-opacity="1"/></g>
<text x="34.2" y="108" text-anchor="middle">3</text>
</svg>
</div>

### วงจรของเลข 4 (BCD-8421, NAND อย่างเดียว) {code=bcd; method=nand; digit=4}

$\mathbf{Sol}^{n}$

เลข $4$ ใช้ segment $b, c, f, g$ จึงเขียนวงจรเฉพาะ segment เหล่านี้ ต่อเข้าด้วยกันเป็นวงจรเดียว : ใช้ NAND เกตทั้งสองชั้น : แต่ละพจน์ผลคูณเข้า NAND เกตชั้นแรก (พจน์ตัวแปรเดียวใช้ตัวที่คอมพลีเมนต์ต่อตรง) แล้วนำทุกเอาต์พุตเข้า NAND เกตชั้นที่สอง

$\mathbf{Ans}\quad \begin{aligned}b &= \overline{B\cdot \overline{\overline{C}\,\overline{D}}\cdot \overline{CD}} \\ c &= \overline{\overline{B}\cdot C\cdot \overline{D}} \\ f &= \overline{\overline{A}\cdot \overline{B\overline{C}}\cdot \overline{B\overline{D}}\cdot \overline{\overline{C}\,\overline{D}}} \\ g &= \overline{\overline{B\overline{C}}\cdot \overline{A\overline{C}}\cdot \overline{\overline{B}C}\cdot \overline{C\overline{D}}}\end{aligned}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="650" height="734" viewBox="0 0 650 734" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<line x1="82" y1="52" x2="82" y2="321"/>
<line x1="34" y1="28" x2="34" y2="576"/>
<line x1="160" y1="52" x2="160" y2="628"/>
<line x1="112" y1="28" x2="112" y2="524"/>
<line x1="238" y1="52" x2="238" y2="590"/>
<line x1="190" y1="28" x2="190" y2="680"/>
<line x1="316" y1="52" x2="316" y2="694"/>
<line x1="268" y1="28" x2="268" y2="186"/>
<line x1="112" y1="89" x2="484" y2="89"/>
<line x1="484" y1="89" x2="484" y2="127"/>
<line x1="484" y1="127" x2="494" y2="127"/>
<line x1="238" y1="120" x2="376" y2="120"/>
<line x1="316" y1="134" x2="376" y2="134"/>
<line x1="438" y1="127" x2="464" y2="127"/>
<line x1="464" y1="127" x2="464" y2="141"/>
<line x1="464" y1="141" x2="494" y2="141"/>
<line x1="190" y1="172" x2="376" y2="172"/>
<line x1="268" y1="186" x2="376" y2="186"/>
<line x1="438" y1="179" x2="474" y2="179"/>
<line x1="474" y1="179" x2="474" y2="155"/>
<line x1="474" y1="155" x2="494" y2="155"/>
<line x1="556" y1="141" x2="586" y2="141"/>
<line x1="160" y1="233" x2="484" y2="233"/>
<line x1="484" y1="233" x2="484" y2="243"/>
<line x1="484" y1="243" x2="494" y2="243"/>
<line x1="190" y1="257" x2="494" y2="257"/>
<line x1="316" y1="281" x2="474" y2="281"/>
<line x1="474" y1="281" x2="474" y2="271"/>
<line x1="474" y1="271" x2="494" y2="271"/>
<line x1="556" y1="257" x2="586" y2="257"/>
<line x1="82" y1="321" x2="494" y2="321"/>
<line x1="494" y1="321" x2="494" y2="378"/>
<line x1="494" y1="378" x2="504" y2="378"/>
<line x1="112" y1="352" x2="376" y2="352"/>
<line x1="238" y1="366" x2="376" y2="366"/>
<line x1="438" y1="359" x2="474" y2="359"/>
<line x1="474" y1="359" x2="474" y2="392"/>
<line x1="474" y1="392" x2="504" y2="392"/>
<line x1="112" y1="404" x2="376" y2="404"/>
<line x1="316" y1="418" x2="376" y2="418"/>
<line x1="438" y1="411" x2="464" y2="411"/>
<line x1="464" y1="411" x2="464" y2="406"/>
<line x1="464" y1="406" x2="504" y2="406"/>
<line x1="238" y1="456" x2="376" y2="456"/>
<line x1="316" y1="470" x2="376" y2="470"/>
<line x1="438" y1="463" x2="484" y2="463"/>
<line x1="484" y1="463" x2="484" y2="420"/>
<line x1="484" y1="420" x2="504" y2="420"/>
<line x1="566" y1="399" x2="596" y2="399"/>
<line x1="112" y1="524" x2="376" y2="524"/>
<line x1="238" y1="538" x2="376" y2="538"/>
<line x1="438" y1="531" x2="494" y2="531"/>
<line x1="494" y1="531" x2="494" y2="588"/>
<line x1="494" y1="588" x2="504" y2="588"/>
<line x1="34" y1="576" x2="376" y2="576"/>
<line x1="238" y1="590" x2="376" y2="590"/>
<line x1="438" y1="583" x2="474" y2="583"/>
<line x1="474" y1="583" x2="474" y2="602"/>
<line x1="474" y1="602" x2="504" y2="602"/>
<line x1="160" y1="628" x2="376" y2="628"/>
<line x1="190" y1="642" x2="376" y2="642"/>
<line x1="438" y1="635" x2="464" y2="635"/>
<line x1="464" y1="635" x2="464" y2="616"/>
<line x1="464" y1="616" x2="504" y2="616"/>
<line x1="190" y1="680" x2="376" y2="680"/>
<line x1="316" y1="694" x2="376" y2="694"/>
<line x1="438" y1="687" x2="484" y2="687"/>
<line x1="484" y1="687" x2="484" y2="630"/>
<line x1="484" y1="630" x2="504" y2="630"/>
<line x1="566" y1="609" x2="596" y2="609"/>
<line x1="34" y1="52" x2="41" y2="52"/>
<line x1="73" y1="52" x2="82" y2="52"/>
<line x1="112" y1="52" x2="119" y2="52"/>
<line x1="151" y1="52" x2="160" y2="52"/>
<line x1="190" y1="52" x2="197" y2="52"/>
<line x1="229" y1="52" x2="238" y2="52"/>
<line x1="268" y1="52" x2="275" y2="52"/>
<line x1="307" y1="52" x2="316" y2="52"/>
<path d="M376,106 H402 A26,21 0 0 1 402,148 H376 Z"/>
<circle cx="433" cy="127" r="5"/>
<path d="M376,158 H402 A26,21 0 0 1 402,200 H376 Z"/>
<circle cx="433" cy="179" r="5"/>
<path d="M494,113 H520 A26,28 0 0 1 520,169 H494 Z"/>
<circle cx="551" cy="141" r="5"/>
<path d="M494,229 H520 A26,28 0 0 1 520,285 H494 Z"/>
<circle cx="551" cy="257" r="5"/>
<path d="M376,338 H402 A26,21 0 0 1 402,380 H376 Z"/>
<circle cx="433" cy="359" r="5"/>
<path d="M376,390 H402 A26,21 0 0 1 402,432 H376 Z"/>
<circle cx="433" cy="411" r="5"/>
<path d="M376,442 H402 A26,21 0 0 1 402,484 H376 Z"/>
<circle cx="433" cy="463" r="5"/>
<path d="M504,364 H530 A26,35 0 0 1 530,434 H504 Z"/>
<circle cx="561" cy="399" r="5"/>
<path d="M376,510 H402 A26,21 0 0 1 402,552 H376 Z"/>
<circle cx="433" cy="531" r="5"/>
<path d="M376,562 H402 A26,21 0 0 1 402,604 H376 Z"/>
<circle cx="433" cy="583" r="5"/>
<path d="M376,614 H402 A26,21 0 0 1 402,656 H376 Z"/>
<circle cx="433" cy="635" r="5"/>
<path d="M376,666 H402 A26,21 0 0 1 402,708 H376 Z"/>
<circle cx="433" cy="687" r="5"/>
<path d="M504,574 H530 A26,35 0 0 1 530,644 H504 Z"/>
<circle cx="561" cy="609" r="5"/>
<polygon points="41,40 41,64 63,52"/>
<circle cx="68" cy="52" r="5"/>
<polygon points="119,40 119,64 141,52"/>
<circle cx="146" cy="52" r="5"/>
<polygon points="197,40 197,64 219,52"/>
<circle cx="224" cy="52" r="5"/>
<polygon points="275,40 275,64 297,52"/>
<circle cx="302" cy="52" r="5"/>
<circle cx="112" cy="89" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="120" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316" cy="134" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="172" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="186" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="160" cy="233" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="257" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316" cy="281" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="82" cy="321" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="352" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="366" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="404" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316" cy="418" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="456" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316" cy="470" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="524" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="538" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="576" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="590" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="160" cy="628" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="642" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="680" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316" cy="694" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="52" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="592" y="147">b</text>
<text x="592" y="263">c</text>
<text x="602" y="405">f</text>
<text x="602" y="615">g</text>
<text x="34" y="22" text-anchor="middle">A</text>
<text x="112" y="22" text-anchor="middle">B</text>
<text x="190" y="22" text-anchor="middle">C</text>
<text x="268" y="22" text-anchor="middle">D</text>
</svg>
</div>

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="74" height="118" viewBox="0 0 74 118" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(10,8) scale(1.1)"><path d="M7,4 L37,4 L33,10 L11,10 Z" fill-opacity="0.1"/><path d="M38,5 L38,35 L32,31 L32,11 Z" fill-opacity="1"/><path d="M38,41 L38,71 L32,65 L32,45 Z" fill-opacity="1"/><path d="M7,72 L37,72 L33,66 L11,66 Z" fill-opacity="0.1"/><path d="M6,41 L6,71 L12,65 L12,45 Z" fill-opacity="0.1"/><path d="M6,5 L6,35 L12,31 L12,11 Z" fill-opacity="1"/><path d="M7,38 L11,34 L33,34 L37,38 L33,42 L11,42 Z" fill-opacity="1"/></g>
<text x="34.2" y="108" text-anchor="middle">4</text>
</svg>
</div>

### วงจรของเลข 5 (BCD-8421, NAND อย่างเดียว) {code=bcd; method=nand; digit=5}

$\mathbf{Sol}^{n}$

เลข $5$ ใช้ segment $a, c, d, f, g$ จึงเขียนวงจรเฉพาะ segment เหล่านี้ ต่อเข้าด้วยกันเป็นวงจรเดียว : ใช้ NAND เกตทั้งสองชั้น : แต่ละพจน์ผลคูณเข้า NAND เกตชั้นแรก (พจน์ตัวแปรเดียวใช้ตัวที่คอมพลีเมนต์ต่อตรง) แล้วนำทุกเอาต์พุตเข้า NAND เกตชั้นที่สอง

$\mathbf{Ans}\quad \begin{aligned}a &= \overline{\overline{A}\cdot \overline{C}\cdot \overline{BD}\cdot \overline{\overline{B}\,\overline{D}}} \\ c &= \overline{\overline{B}\cdot C\cdot \overline{D}} \\ d &= \overline{\overline{A}\cdot \overline{\overline{B}\,\overline{D}}\cdot \overline{\overline{B}C}\cdot \overline{C\overline{D}}\cdot \overline{B\overline{C}D}} \\ f &= \overline{\overline{A}\cdot \overline{B\overline{C}}\cdot \overline{B\overline{D}}\cdot \overline{\overline{C}\,\overline{D}}} \\ g &= \overline{\overline{B\overline{C}}\cdot \overline{A\overline{C}}\cdot \overline{\overline{B}C}\cdot \overline{C\overline{D}}}\end{aligned}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="660" height="1020" viewBox="0 0 660 1020" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<line x1="82" y1="52" x2="82" y2="607"/>
<line x1="34" y1="28" x2="34" y2="862"/>
<line x1="160" y1="52" x2="160" y2="914"/>
<line x1="112" y1="28" x2="112" y2="810"/>
<line x1="238" y1="52" x2="238" y2="876"/>
<line x1="190" y1="28" x2="190" y2="966"/>
<line x1="316" y1="52" x2="316" y2="980"/>
<line x1="268" y1="28" x2="268" y2="560"/>
<line x1="82" y1="89" x2="494" y2="89"/>
<line x1="494" y1="89" x2="494" y2="132"/>
<line x1="494" y1="132" x2="504" y2="132"/>
<line x1="238" y1="113" x2="474" y2="113"/>
<line x1="474" y1="113" x2="474" y2="146"/>
<line x1="474" y1="146" x2="504" y2="146"/>
<line x1="112" y1="144" x2="376" y2="144"/>
<line x1="268" y1="158" x2="376" y2="158"/>
<line x1="438" y1="151" x2="464" y2="151"/>
<line x1="464" y1="151" x2="464" y2="160"/>
<line x1="464" y1="160" x2="504" y2="160"/>
<line x1="160" y1="196" x2="376" y2="196"/>
<line x1="316" y1="210" x2="376" y2="210"/>
<line x1="438" y1="203" x2="484" y2="203"/>
<line x1="484" y1="203" x2="484" y2="174"/>
<line x1="484" y1="174" x2="504" y2="174"/>
<line x1="566" y1="153" x2="596" y2="153"/>
<line x1="160" y1="257" x2="484" y2="257"/>
<line x1="484" y1="257" x2="484" y2="267"/>
<line x1="484" y1="267" x2="494" y2="267"/>
<line x1="190" y1="281" x2="494" y2="281"/>
<line x1="316" y1="305" x2="474" y2="305"/>
<line x1="474" y1="305" x2="474" y2="295"/>
<line x1="474" y1="295" x2="494" y2="295"/>
<line x1="556" y1="281" x2="586" y2="281"/>
<line x1="82" y1="345" x2="504" y2="345"/>
<line x1="504" y1="345" x2="504" y2="428"/>
<line x1="504" y1="428" x2="514" y2="428"/>
<line x1="160" y1="376" x2="376" y2="376"/>
<line x1="316" y1="390" x2="376" y2="390"/>
<line x1="438" y1="383" x2="484" y2="383"/>
<line x1="484" y1="383" x2="484" y2="442"/>
<line x1="484" y1="442" x2="514" y2="442"/>
<line x1="160" y1="428" x2="376" y2="428"/>
<line x1="190" y1="442" x2="376" y2="442"/>
<line x1="438" y1="435" x2="464" y2="435"/>
<line x1="464" y1="435" x2="464" y2="456"/>
<line x1="464" y1="456" x2="514" y2="456"/>
<line x1="190" y1="480" x2="376" y2="480"/>
<line x1="316" y1="494" x2="376" y2="494"/>
<line x1="438" y1="487" x2="474" y2="487"/>
<line x1="474" y1="487" x2="474" y2="470"/>
<line x1="474" y1="470" x2="514" y2="470"/>
<line x1="112" y1="532" x2="376" y2="532"/>
<line x1="238" y1="546" x2="376" y2="546"/>
<line x1="268" y1="560" x2="376" y2="560"/>
<line x1="438" y1="546" x2="494" y2="546"/>
<line x1="494" y1="546" x2="494" y2="484"/>
<line x1="494" y1="484" x2="514" y2="484"/>
<line x1="576" y1="456" x2="606" y2="456"/>
<line x1="82" y1="607" x2="494" y2="607"/>
<line x1="494" y1="607" x2="494" y2="664"/>
<line x1="494" y1="664" x2="504" y2="664"/>
<line x1="112" y1="638" x2="376" y2="638"/>
<line x1="238" y1="652" x2="376" y2="652"/>
<line x1="438" y1="645" x2="474" y2="645"/>
<line x1="474" y1="645" x2="474" y2="678"/>
<line x1="474" y1="678" x2="504" y2="678"/>
<line x1="112" y1="690" x2="376" y2="690"/>
<line x1="316" y1="704" x2="376" y2="704"/>
<line x1="438" y1="697" x2="464" y2="697"/>
<line x1="464" y1="697" x2="464" y2="692"/>
<line x1="464" y1="692" x2="504" y2="692"/>
<line x1="238" y1="742" x2="376" y2="742"/>
<line x1="316" y1="756" x2="376" y2="756"/>
<line x1="438" y1="749" x2="484" y2="749"/>
<line x1="484" y1="749" x2="484" y2="706"/>
<line x1="484" y1="706" x2="504" y2="706"/>
<line x1="566" y1="685" x2="596" y2="685"/>
<line x1="112" y1="810" x2="376" y2="810"/>
<line x1="238" y1="824" x2="376" y2="824"/>
<line x1="438" y1="817" x2="494" y2="817"/>
<line x1="494" y1="817" x2="494" y2="874"/>
<line x1="494" y1="874" x2="504" y2="874"/>
<line x1="34" y1="862" x2="376" y2="862"/>
<line x1="238" y1="876" x2="376" y2="876"/>
<line x1="438" y1="869" x2="474" y2="869"/>
<line x1="474" y1="869" x2="474" y2="888"/>
<line x1="474" y1="888" x2="504" y2="888"/>
<line x1="160" y1="914" x2="376" y2="914"/>
<line x1="190" y1="928" x2="376" y2="928"/>
<line x1="438" y1="921" x2="464" y2="921"/>
<line x1="464" y1="921" x2="464" y2="902"/>
<line x1="464" y1="902" x2="504" y2="902"/>
<line x1="190" y1="966" x2="376" y2="966"/>
<line x1="316" y1="980" x2="376" y2="980"/>
<line x1="438" y1="973" x2="484" y2="973"/>
<line x1="484" y1="973" x2="484" y2="916"/>
<line x1="484" y1="916" x2="504" y2="916"/>
<line x1="566" y1="895" x2="596" y2="895"/>
<line x1="34" y1="52" x2="41" y2="52"/>
<line x1="73" y1="52" x2="82" y2="52"/>
<line x1="112" y1="52" x2="119" y2="52"/>
<line x1="151" y1="52" x2="160" y2="52"/>
<line x1="190" y1="52" x2="197" y2="52"/>
<line x1="229" y1="52" x2="238" y2="52"/>
<line x1="268" y1="52" x2="275" y2="52"/>
<line x1="307" y1="52" x2="316" y2="52"/>
<path d="M376,130 H402 A26,21 0 0 1 402,172 H376 Z"/>
<circle cx="433" cy="151" r="5"/>
<path d="M376,182 H402 A26,21 0 0 1 402,224 H376 Z"/>
<circle cx="433" cy="203" r="5"/>
<path d="M504,118 H530 A26,35 0 0 1 530,188 H504 Z"/>
<circle cx="561" cy="153" r="5"/>
<path d="M494,253 H520 A26,28 0 0 1 520,309 H494 Z"/>
<circle cx="551" cy="281" r="5"/>
<path d="M376,362 H402 A26,21 0 0 1 402,404 H376 Z"/>
<circle cx="433" cy="383" r="5"/>
<path d="M376,414 H402 A26,21 0 0 1 402,456 H376 Z"/>
<circle cx="433" cy="435" r="5"/>
<path d="M376,466 H402 A26,21 0 0 1 402,508 H376 Z"/>
<circle cx="433" cy="487" r="5"/>
<path d="M376,518 H402 A26,28 0 0 1 402,574 H376 Z"/>
<circle cx="433" cy="546" r="5"/>
<path d="M514,414 H540 A26,42 0 0 1 540,498 H514 Z"/>
<circle cx="571" cy="456" r="5"/>
<path d="M376,624 H402 A26,21 0 0 1 402,666 H376 Z"/>
<circle cx="433" cy="645" r="5"/>
<path d="M376,676 H402 A26,21 0 0 1 402,718 H376 Z"/>
<circle cx="433" cy="697" r="5"/>
<path d="M376,728 H402 A26,21 0 0 1 402,770 H376 Z"/>
<circle cx="433" cy="749" r="5"/>
<path d="M504,650 H530 A26,35 0 0 1 530,720 H504 Z"/>
<circle cx="561" cy="685" r="5"/>
<path d="M376,796 H402 A26,21 0 0 1 402,838 H376 Z"/>
<circle cx="433" cy="817" r="5"/>
<path d="M376,848 H402 A26,21 0 0 1 402,890 H376 Z"/>
<circle cx="433" cy="869" r="5"/>
<path d="M376,900 H402 A26,21 0 0 1 402,942 H376 Z"/>
<circle cx="433" cy="921" r="5"/>
<path d="M376,952 H402 A26,21 0 0 1 402,994 H376 Z"/>
<circle cx="433" cy="973" r="5"/>
<path d="M504,860 H530 A26,35 0 0 1 530,930 H504 Z"/>
<circle cx="561" cy="895" r="5"/>
<polygon points="41,40 41,64 63,52"/>
<circle cx="68" cy="52" r="5"/>
<polygon points="119,40 119,64 141,52"/>
<circle cx="146" cy="52" r="5"/>
<polygon points="197,40 197,64 219,52"/>
<circle cx="224" cy="52" r="5"/>
<polygon points="275,40 275,64 297,52"/>
<circle cx="302" cy="52" r="5"/>
<circle cx="82" cy="89" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="113" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="144" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="158" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="160" cy="196" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316" cy="210" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="160" cy="257" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="281" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316" cy="305" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="82" cy="345" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="160" cy="376" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316" cy="390" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="160" cy="428" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="442" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="480" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316" cy="494" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="532" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="546" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="560" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="82" cy="607" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="638" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="652" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="690" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316" cy="704" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="742" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316" cy="756" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="810" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="824" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="862" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="876" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="160" cy="914" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="928" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="966" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316" cy="980" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="52" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="602" y="159">a</text>
<text x="592" y="287">c</text>
<text x="612" y="462">d</text>
<text x="602" y="691">f</text>
<text x="602" y="901">g</text>
<text x="34" y="22" text-anchor="middle">A</text>
<text x="112" y="22" text-anchor="middle">B</text>
<text x="190" y="22" text-anchor="middle">C</text>
<text x="268" y="22" text-anchor="middle">D</text>
</svg>
</div>

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="74" height="118" viewBox="0 0 74 118" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(10,8) scale(1.1)"><path d="M7,4 L37,4 L33,10 L11,10 Z" fill-opacity="1"/><path d="M38,5 L38,35 L32,31 L32,11 Z" fill-opacity="0.1"/><path d="M38,41 L38,71 L32,65 L32,45 Z" fill-opacity="1"/><path d="M7,72 L37,72 L33,66 L11,66 Z" fill-opacity="1"/><path d="M6,41 L6,71 L12,65 L12,45 Z" fill-opacity="0.1"/><path d="M6,5 L6,35 L12,31 L12,11 Z" fill-opacity="1"/><path d="M7,38 L11,34 L33,34 L37,38 L33,42 L11,42 Z" fill-opacity="1"/></g>
<text x="34.2" y="108" text-anchor="middle">5</text>
</svg>
</div>

### วงจรของเลข 6 (BCD-8421, NAND อย่างเดียว) {code=bcd; method=nand; digit=6}

$\mathbf{Sol}^{n}$

เลข $6$ ใช้ segment $a, c, d, e, f, g$ จึงเขียนวงจรเฉพาะ segment เหล่านี้ ต่อเข้าด้วยกันเป็นวงจรเดียว : ใช้ NAND เกตทั้งสองชั้น : แต่ละพจน์ผลคูณเข้า NAND เกตชั้นแรก (พจน์ตัวแปรเดียวใช้ตัวที่คอมพลีเมนต์ต่อตรง) แล้วนำทุกเอาต์พุตเข้า NAND เกตชั้นที่สอง

$\mathbf{Ans}\quad \begin{aligned}a &= \overline{\overline{A}\cdot \overline{C}\cdot \overline{BD}\cdot \overline{\overline{B}\,\overline{D}}} \\ c &= \overline{\overline{B}\cdot C\cdot \overline{D}} \\ d &= \overline{\overline{A}\cdot \overline{\overline{B}\,\overline{D}}\cdot \overline{\overline{B}C}\cdot \overline{C\overline{D}}\cdot \overline{B\overline{C}D}} \\ e &= \overline{\overline{\overline{B}\,\overline{D}}\cdot \overline{C\overline{D}}} \\ f &= \overline{\overline{A}\cdot \overline{B\overline{C}}\cdot \overline{B\overline{D}}\cdot \overline{\overline{C}\,\overline{D}}} \\ g &= \overline{\overline{B\overline{C}}\cdot \overline{A\overline{C}}\cdot \overline{\overline{B}C}\cdot \overline{C\overline{D}}}\end{aligned}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="660" height="1140" viewBox="0 0 660 1140" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<line x1="82" y1="52" x2="82" y2="727"/>
<line x1="34" y1="28" x2="34" y2="982"/>
<line x1="160" y1="52" x2="160" y2="1034"/>
<line x1="112" y1="28" x2="112" y2="930"/>
<line x1="238" y1="52" x2="238" y2="996"/>
<line x1="190" y1="28" x2="190" y2="1086"/>
<line x1="316" y1="52" x2="316" y2="1100"/>
<line x1="268" y1="28" x2="268" y2="560"/>
<line x1="82" y1="89" x2="494" y2="89"/>
<line x1="494" y1="89" x2="494" y2="132"/>
<line x1="494" y1="132" x2="504" y2="132"/>
<line x1="238" y1="113" x2="474" y2="113"/>
<line x1="474" y1="113" x2="474" y2="146"/>
<line x1="474" y1="146" x2="504" y2="146"/>
<line x1="112" y1="144" x2="376" y2="144"/>
<line x1="268" y1="158" x2="376" y2="158"/>
<line x1="438" y1="151" x2="464" y2="151"/>
<line x1="464" y1="151" x2="464" y2="160"/>
<line x1="464" y1="160" x2="504" y2="160"/>
<line x1="160" y1="196" x2="376" y2="196"/>
<line x1="316" y1="210" x2="376" y2="210"/>
<line x1="438" y1="203" x2="484" y2="203"/>
<line x1="484" y1="203" x2="484" y2="174"/>
<line x1="484" y1="174" x2="504" y2="174"/>
<line x1="566" y1="153" x2="596" y2="153"/>
<line x1="160" y1="257" x2="484" y2="257"/>
<line x1="484" y1="257" x2="484" y2="267"/>
<line x1="484" y1="267" x2="494" y2="267"/>
<line x1="190" y1="281" x2="494" y2="281"/>
<line x1="316" y1="305" x2="474" y2="305"/>
<line x1="474" y1="305" x2="474" y2="295"/>
<line x1="474" y1="295" x2="494" y2="295"/>
<line x1="556" y1="281" x2="586" y2="281"/>
<line x1="82" y1="345" x2="504" y2="345"/>
<line x1="504" y1="345" x2="504" y2="428"/>
<line x1="504" y1="428" x2="514" y2="428"/>
<line x1="160" y1="376" x2="376" y2="376"/>
<line x1="316" y1="390" x2="376" y2="390"/>
<line x1="438" y1="383" x2="484" y2="383"/>
<line x1="484" y1="383" x2="484" y2="442"/>
<line x1="484" y1="442" x2="514" y2="442"/>
<line x1="160" y1="428" x2="376" y2="428"/>
<line x1="190" y1="442" x2="376" y2="442"/>
<line x1="438" y1="435" x2="464" y2="435"/>
<line x1="464" y1="435" x2="464" y2="456"/>
<line x1="464" y1="456" x2="514" y2="456"/>
<line x1="190" y1="480" x2="376" y2="480"/>
<line x1="316" y1="494" x2="376" y2="494"/>
<line x1="438" y1="487" x2="474" y2="487"/>
<line x1="474" y1="487" x2="474" y2="470"/>
<line x1="474" y1="470" x2="514" y2="470"/>
<line x1="112" y1="532" x2="376" y2="532"/>
<line x1="238" y1="546" x2="376" y2="546"/>
<line x1="268" y1="560" x2="376" y2="560"/>
<line x1="438" y1="546" x2="494" y2="546"/>
<line x1="494" y1="546" x2="494" y2="484"/>
<line x1="494" y1="484" x2="514" y2="484"/>
<line x1="576" y1="456" x2="606" y2="456"/>
<line x1="160" y1="614" x2="376" y2="614"/>
<line x1="316" y1="628" x2="376" y2="628"/>
<line x1="438" y1="621" x2="474" y2="621"/>
<line x1="474" y1="621" x2="474" y2="640"/>
<line x1="474" y1="640" x2="484" y2="640"/>
<line x1="190" y1="666" x2="376" y2="666"/>
<line x1="316" y1="680" x2="376" y2="680"/>
<line x1="438" y1="673" x2="464" y2="673"/>
<line x1="464" y1="673" x2="464" y2="654"/>
<line x1="464" y1="654" x2="484" y2="654"/>
<line x1="546" y1="647" x2="576" y2="647"/>
<line x1="82" y1="727" x2="494" y2="727"/>
<line x1="494" y1="727" x2="494" y2="784"/>
<line x1="494" y1="784" x2="504" y2="784"/>
<line x1="112" y1="758" x2="376" y2="758"/>
<line x1="238" y1="772" x2="376" y2="772"/>
<line x1="438" y1="765" x2="474" y2="765"/>
<line x1="474" y1="765" x2="474" y2="798"/>
<line x1="474" y1="798" x2="504" y2="798"/>
<line x1="112" y1="810" x2="376" y2="810"/>
<line x1="316" y1="824" x2="376" y2="824"/>
<line x1="438" y1="817" x2="464" y2="817"/>
<line x1="464" y1="817" x2="464" y2="812"/>
<line x1="464" y1="812" x2="504" y2="812"/>
<line x1="238" y1="862" x2="376" y2="862"/>
<line x1="316" y1="876" x2="376" y2="876"/>
<line x1="438" y1="869" x2="484" y2="869"/>
<line x1="484" y1="869" x2="484" y2="826"/>
<line x1="484" y1="826" x2="504" y2="826"/>
<line x1="566" y1="805" x2="596" y2="805"/>
<line x1="112" y1="930" x2="376" y2="930"/>
<line x1="238" y1="944" x2="376" y2="944"/>
<line x1="438" y1="937" x2="494" y2="937"/>
<line x1="494" y1="937" x2="494" y2="994"/>
<line x1="494" y1="994" x2="504" y2="994"/>
<line x1="34" y1="982" x2="376" y2="982"/>
<line x1="238" y1="996" x2="376" y2="996"/>
<line x1="438" y1="989" x2="474" y2="989"/>
<line x1="474" y1="989" x2="474" y2="1008"/>
<line x1="474" y1="1008" x2="504" y2="1008"/>
<line x1="160" y1="1034" x2="376" y2="1034"/>
<line x1="190" y1="1048" x2="376" y2="1048"/>
<line x1="438" y1="1041" x2="464" y2="1041"/>
<line x1="464" y1="1041" x2="464" y2="1022"/>
<line x1="464" y1="1022" x2="504" y2="1022"/>
<line x1="190" y1="1086" x2="376" y2="1086"/>
<line x1="316" y1="1100" x2="376" y2="1100"/>
<line x1="438" y1="1093" x2="484" y2="1093"/>
<line x1="484" y1="1093" x2="484" y2="1036"/>
<line x1="484" y1="1036" x2="504" y2="1036"/>
<line x1="566" y1="1015" x2="596" y2="1015"/>
<line x1="34" y1="52" x2="41" y2="52"/>
<line x1="73" y1="52" x2="82" y2="52"/>
<line x1="112" y1="52" x2="119" y2="52"/>
<line x1="151" y1="52" x2="160" y2="52"/>
<line x1="190" y1="52" x2="197" y2="52"/>
<line x1="229" y1="52" x2="238" y2="52"/>
<line x1="268" y1="52" x2="275" y2="52"/>
<line x1="307" y1="52" x2="316" y2="52"/>
<path d="M376,130 H402 A26,21 0 0 1 402,172 H376 Z"/>
<circle cx="433" cy="151" r="5"/>
<path d="M376,182 H402 A26,21 0 0 1 402,224 H376 Z"/>
<circle cx="433" cy="203" r="5"/>
<path d="M504,118 H530 A26,35 0 0 1 530,188 H504 Z"/>
<circle cx="561" cy="153" r="5"/>
<path d="M494,253 H520 A26,28 0 0 1 520,309 H494 Z"/>
<circle cx="551" cy="281" r="5"/>
<path d="M376,362 H402 A26,21 0 0 1 402,404 H376 Z"/>
<circle cx="433" cy="383" r="5"/>
<path d="M376,414 H402 A26,21 0 0 1 402,456 H376 Z"/>
<circle cx="433" cy="435" r="5"/>
<path d="M376,466 H402 A26,21 0 0 1 402,508 H376 Z"/>
<circle cx="433" cy="487" r="5"/>
<path d="M376,518 H402 A26,28 0 0 1 402,574 H376 Z"/>
<circle cx="433" cy="546" r="5"/>
<path d="M514,414 H540 A26,42 0 0 1 540,498 H514 Z"/>
<circle cx="571" cy="456" r="5"/>
<path d="M376,600 H402 A26,21 0 0 1 402,642 H376 Z"/>
<circle cx="433" cy="621" r="5"/>
<path d="M376,652 H402 A26,21 0 0 1 402,694 H376 Z"/>
<circle cx="433" cy="673" r="5"/>
<path d="M484,626 H510 A26,21 0 0 1 510,668 H484 Z"/>
<circle cx="541" cy="647" r="5"/>
<path d="M376,744 H402 A26,21 0 0 1 402,786 H376 Z"/>
<circle cx="433" cy="765" r="5"/>
<path d="M376,796 H402 A26,21 0 0 1 402,838 H376 Z"/>
<circle cx="433" cy="817" r="5"/>
<path d="M376,848 H402 A26,21 0 0 1 402,890 H376 Z"/>
<circle cx="433" cy="869" r="5"/>
<path d="M504,770 H530 A26,35 0 0 1 530,840 H504 Z"/>
<circle cx="561" cy="805" r="5"/>
<path d="M376,916 H402 A26,21 0 0 1 402,958 H376 Z"/>
<circle cx="433" cy="937" r="5"/>
<path d="M376,968 H402 A26,21 0 0 1 402,1010 H376 Z"/>
<circle cx="433" cy="989" r="5"/>
<path d="M376,1020 H402 A26,21 0 0 1 402,1062 H376 Z"/>
<circle cx="433" cy="1041" r="5"/>
<path d="M376,1072 H402 A26,21 0 0 1 402,1114 H376 Z"/>
<circle cx="433" cy="1093" r="5"/>
<path d="M504,980 H530 A26,35 0 0 1 530,1050 H504 Z"/>
<circle cx="561" cy="1015" r="5"/>
<polygon points="41,40 41,64 63,52"/>
<circle cx="68" cy="52" r="5"/>
<polygon points="119,40 119,64 141,52"/>
<circle cx="146" cy="52" r="5"/>
<polygon points="197,40 197,64 219,52"/>
<circle cx="224" cy="52" r="5"/>
<polygon points="275,40 275,64 297,52"/>
<circle cx="302" cy="52" r="5"/>
<circle cx="82" cy="89" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="113" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="144" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="158" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="160" cy="196" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316" cy="210" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="160" cy="257" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="281" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316" cy="305" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="82" cy="345" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="160" cy="376" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316" cy="390" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="160" cy="428" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="442" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="480" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316" cy="494" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="532" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="546" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="560" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="160" cy="614" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316" cy="628" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="666" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316" cy="680" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="82" cy="727" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="758" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="772" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="810" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316" cy="824" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="862" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316" cy="876" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="930" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="944" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="982" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="996" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="160" cy="1034" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="1048" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="1086" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316" cy="1100" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="52" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="602" y="159">a</text>
<text x="592" y="287">c</text>
<text x="612" y="462">d</text>
<text x="582" y="653">e</text>
<text x="602" y="811">f</text>
<text x="602" y="1021">g</text>
<text x="34" y="22" text-anchor="middle">A</text>
<text x="112" y="22" text-anchor="middle">B</text>
<text x="190" y="22" text-anchor="middle">C</text>
<text x="268" y="22" text-anchor="middle">D</text>
</svg>
</div>

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="74" height="118" viewBox="0 0 74 118" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(10,8) scale(1.1)"><path d="M7,4 L37,4 L33,10 L11,10 Z" fill-opacity="1"/><path d="M38,5 L38,35 L32,31 L32,11 Z" fill-opacity="0.1"/><path d="M38,41 L38,71 L32,65 L32,45 Z" fill-opacity="1"/><path d="M7,72 L37,72 L33,66 L11,66 Z" fill-opacity="1"/><path d="M6,41 L6,71 L12,65 L12,45 Z" fill-opacity="1"/><path d="M6,5 L6,35 L12,31 L12,11 Z" fill-opacity="1"/><path d="M7,38 L11,34 L33,34 L37,38 L33,42 L11,42 Z" fill-opacity="1"/></g>
<text x="34.2" y="108" text-anchor="middle">6</text>
</svg>
</div>

### วงจรของเลข 7 (BCD-8421, NAND อย่างเดียว) {code=bcd; method=nand; digit=7}

$\mathbf{Sol}^{n}$

เลข $7$ ใช้ segment $a, b, c$ จึงเขียนวงจรเฉพาะ segment เหล่านี้ ต่อเข้าด้วยกันเป็นวงจรเดียว : ใช้ NAND เกตทั้งสองชั้น : แต่ละพจน์ผลคูณเข้า NAND เกตชั้นแรก (พจน์ตัวแปรเดียวใช้ตัวที่คอมพลีเมนต์ต่อตรง) แล้วนำทุกเอาต์พุตเข้า NAND เกตชั้นที่สอง

$\mathbf{Ans}\quad \begin{aligned}a &= \overline{\overline{A}\cdot \overline{C}\cdot \overline{BD}\cdot \overline{\overline{B}\,\overline{D}}} \\ b &= \overline{B\cdot \overline{\overline{C}\,\overline{D}}\cdot \overline{CD}} \\ c &= \overline{\overline{B}\cdot C\cdot \overline{D}}\end{aligned}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="650" height="482" viewBox="0 0 650 482" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<line x1="82" y1="52" x2="82" y2="89"/>
<line x1="34" y1="28" x2="34" y2="52"/>
<line x1="160" y1="52" x2="160" y2="401"/>
<line x1="112" y1="28" x2="112" y2="257"/>
<line x1="238" y1="52" x2="238" y2="288"/>
<line x1="190" y1="28" x2="190" y2="425"/>
<line x1="316" y1="52" x2="316" y2="449"/>
<line x1="268" y1="28" x2="268" y2="354"/>
<line x1="82" y1="89" x2="494" y2="89"/>
<line x1="494" y1="89" x2="494" y2="132"/>
<line x1="494" y1="132" x2="504" y2="132"/>
<line x1="238" y1="113" x2="474" y2="113"/>
<line x1="474" y1="113" x2="474" y2="146"/>
<line x1="474" y1="146" x2="504" y2="146"/>
<line x1="112" y1="144" x2="376" y2="144"/>
<line x1="268" y1="158" x2="376" y2="158"/>
<line x1="438" y1="151" x2="464" y2="151"/>
<line x1="464" y1="151" x2="464" y2="160"/>
<line x1="464" y1="160" x2="504" y2="160"/>
<line x1="160" y1="196" x2="376" y2="196"/>
<line x1="316" y1="210" x2="376" y2="210"/>
<line x1="438" y1="203" x2="484" y2="203"/>
<line x1="484" y1="203" x2="484" y2="174"/>
<line x1="484" y1="174" x2="504" y2="174"/>
<line x1="566" y1="153" x2="596" y2="153"/>
<line x1="112" y1="257" x2="484" y2="257"/>
<line x1="484" y1="257" x2="484" y2="295"/>
<line x1="484" y1="295" x2="494" y2="295"/>
<line x1="238" y1="288" x2="376" y2="288"/>
<line x1="316" y1="302" x2="376" y2="302"/>
<line x1="438" y1="295" x2="464" y2="295"/>
<line x1="464" y1="295" x2="464" y2="309"/>
<line x1="464" y1="309" x2="494" y2="309"/>
<line x1="190" y1="340" x2="376" y2="340"/>
<line x1="268" y1="354" x2="376" y2="354"/>
<line x1="438" y1="347" x2="474" y2="347"/>
<line x1="474" y1="347" x2="474" y2="323"/>
<line x1="474" y1="323" x2="494" y2="323"/>
<line x1="556" y1="309" x2="586" y2="309"/>
<line x1="160" y1="401" x2="484" y2="401"/>
<line x1="484" y1="401" x2="484" y2="411"/>
<line x1="484" y1="411" x2="494" y2="411"/>
<line x1="190" y1="425" x2="494" y2="425"/>
<line x1="316" y1="449" x2="474" y2="449"/>
<line x1="474" y1="449" x2="474" y2="439"/>
<line x1="474" y1="439" x2="494" y2="439"/>
<line x1="556" y1="425" x2="586" y2="425"/>
<line x1="34" y1="52" x2="41" y2="52"/>
<line x1="73" y1="52" x2="82" y2="52"/>
<line x1="112" y1="52" x2="119" y2="52"/>
<line x1="151" y1="52" x2="160" y2="52"/>
<line x1="190" y1="52" x2="197" y2="52"/>
<line x1="229" y1="52" x2="238" y2="52"/>
<line x1="268" y1="52" x2="275" y2="52"/>
<line x1="307" y1="52" x2="316" y2="52"/>
<path d="M376,130 H402 A26,21 0 0 1 402,172 H376 Z"/>
<circle cx="433" cy="151" r="5"/>
<path d="M376,182 H402 A26,21 0 0 1 402,224 H376 Z"/>
<circle cx="433" cy="203" r="5"/>
<path d="M504,118 H530 A26,35 0 0 1 530,188 H504 Z"/>
<circle cx="561" cy="153" r="5"/>
<path d="M376,274 H402 A26,21 0 0 1 402,316 H376 Z"/>
<circle cx="433" cy="295" r="5"/>
<path d="M376,326 H402 A26,21 0 0 1 402,368 H376 Z"/>
<circle cx="433" cy="347" r="5"/>
<path d="M494,281 H520 A26,28 0 0 1 520,337 H494 Z"/>
<circle cx="551" cy="309" r="5"/>
<path d="M494,397 H520 A26,28 0 0 1 520,453 H494 Z"/>
<circle cx="551" cy="425" r="5"/>
<polygon points="41,40 41,64 63,52"/>
<circle cx="68" cy="52" r="5"/>
<polygon points="119,40 119,64 141,52"/>
<circle cx="146" cy="52" r="5"/>
<polygon points="197,40 197,64 219,52"/>
<circle cx="224" cy="52" r="5"/>
<polygon points="275,40 275,64 297,52"/>
<circle cx="302" cy="52" r="5"/>
<circle cx="82" cy="89" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="113" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="144" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="158" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="160" cy="196" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316" cy="210" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="257" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="288" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316" cy="302" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="340" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="354" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="160" cy="401" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="425" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316" cy="449" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="52" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="602" y="159">a</text>
<text x="592" y="315">b</text>
<text x="592" y="431">c</text>
<text x="34" y="22" text-anchor="middle">A</text>
<text x="112" y="22" text-anchor="middle">B</text>
<text x="190" y="22" text-anchor="middle">C</text>
<text x="268" y="22" text-anchor="middle">D</text>
</svg>
</div>

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="74" height="118" viewBox="0 0 74 118" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(10,8) scale(1.1)"><path d="M7,4 L37,4 L33,10 L11,10 Z" fill-opacity="1"/><path d="M38,5 L38,35 L32,31 L32,11 Z" fill-opacity="1"/><path d="M38,41 L38,71 L32,65 L32,45 Z" fill-opacity="1"/><path d="M7,72 L37,72 L33,66 L11,66 Z" fill-opacity="0.1"/><path d="M6,41 L6,71 L12,65 L12,45 Z" fill-opacity="0.1"/><path d="M6,5 L6,35 L12,31 L12,11 Z" fill-opacity="0.1"/><path d="M7,38 L11,34 L33,34 L37,38 L33,42 L11,42 Z" fill-opacity="0.1"/></g>
<text x="34.2" y="108" text-anchor="middle">7</text>
</svg>
</div>

### วงจรของเลข 8 (BCD-8421, NAND อย่างเดียว) {code=bcd; method=nand; digit=8}

$\mathbf{Sol}^{n}$

เลข $8$ ใช้ segment $a, b, c, d, e, f, g$ จึงเขียนวงจรเฉพาะ segment เหล่านี้ ต่อเข้าด้วยกันเป็นวงจรเดียว : ใช้ NAND เกตทั้งสองชั้น : แต่ละพจน์ผลคูณเข้า NAND เกตชั้นแรก (พจน์ตัวแปรเดียวใช้ตัวที่คอมพลีเมนต์ต่อตรง) แล้วนำทุกเอาต์พุตเข้า NAND เกตชั้นที่สอง

$\mathbf{Ans}\quad \begin{aligned}a &= \overline{\overline{A}\cdot \overline{C}\cdot \overline{BD}\cdot \overline{\overline{B}\,\overline{D}}} \\ b &= \overline{B\cdot \overline{\overline{C}\,\overline{D}}\cdot \overline{CD}} \\ c &= \overline{\overline{B}\cdot C\cdot \overline{D}} \\ d &= \overline{\overline{A}\cdot \overline{\overline{B}\,\overline{D}}\cdot \overline{\overline{B}C}\cdot \overline{C\overline{D}}\cdot \overline{B\overline{C}D}} \\ e &= \overline{\overline{\overline{B}\,\overline{D}}\cdot \overline{C\overline{D}}} \\ f &= \overline{\overline{A}\cdot \overline{B\overline{C}}\cdot \overline{B\overline{D}}\cdot \overline{\overline{C}\,\overline{D}}} \\ g &= \overline{\overline{B\overline{C}}\cdot \overline{A\overline{C}}\cdot \overline{\overline{B}C}\cdot \overline{C\overline{D}}}\end{aligned}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="660" height="1284" viewBox="0 0 660 1284" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<line x1="82" y1="52" x2="82" y2="871"/>
<line x1="34" y1="28" x2="34" y2="1126"/>
<line x1="160" y1="52" x2="160" y2="1178"/>
<line x1="112" y1="28" x2="112" y2="1074"/>
<line x1="238" y1="52" x2="238" y2="1140"/>
<line x1="190" y1="28" x2="190" y2="1230"/>
<line x1="316" y1="52" x2="316" y2="1244"/>
<line x1="268" y1="28" x2="268" y2="704"/>
<line x1="82" y1="89" x2="494" y2="89"/>
<line x1="494" y1="89" x2="494" y2="132"/>
<line x1="494" y1="132" x2="504" y2="132"/>
<line x1="238" y1="113" x2="474" y2="113"/>
<line x1="474" y1="113" x2="474" y2="146"/>
<line x1="474" y1="146" x2="504" y2="146"/>
<line x1="112" y1="144" x2="376" y2="144"/>
<line x1="268" y1="158" x2="376" y2="158"/>
<line x1="438" y1="151" x2="464" y2="151"/>
<line x1="464" y1="151" x2="464" y2="160"/>
<line x1="464" y1="160" x2="504" y2="160"/>
<line x1="160" y1="196" x2="376" y2="196"/>
<line x1="316" y1="210" x2="376" y2="210"/>
<line x1="438" y1="203" x2="484" y2="203"/>
<line x1="484" y1="203" x2="484" y2="174"/>
<line x1="484" y1="174" x2="504" y2="174"/>
<line x1="566" y1="153" x2="596" y2="153"/>
<line x1="112" y1="257" x2="484" y2="257"/>
<line x1="484" y1="257" x2="484" y2="295"/>
<line x1="484" y1="295" x2="494" y2="295"/>
<line x1="238" y1="288" x2="376" y2="288"/>
<line x1="316" y1="302" x2="376" y2="302"/>
<line x1="438" y1="295" x2="464" y2="295"/>
<line x1="464" y1="295" x2="464" y2="309"/>
<line x1="464" y1="309" x2="494" y2="309"/>
<line x1="190" y1="340" x2="376" y2="340"/>
<line x1="268" y1="354" x2="376" y2="354"/>
<line x1="438" y1="347" x2="474" y2="347"/>
<line x1="474" y1="347" x2="474" y2="323"/>
<line x1="474" y1="323" x2="494" y2="323"/>
<line x1="556" y1="309" x2="586" y2="309"/>
<line x1="160" y1="401" x2="484" y2="401"/>
<line x1="484" y1="401" x2="484" y2="411"/>
<line x1="484" y1="411" x2="494" y2="411"/>
<line x1="190" y1="425" x2="494" y2="425"/>
<line x1="316" y1="449" x2="474" y2="449"/>
<line x1="474" y1="449" x2="474" y2="439"/>
<line x1="474" y1="439" x2="494" y2="439"/>
<line x1="556" y1="425" x2="586" y2="425"/>
<line x1="82" y1="489" x2="504" y2="489"/>
<line x1="504" y1="489" x2="504" y2="572"/>
<line x1="504" y1="572" x2="514" y2="572"/>
<line x1="160" y1="520" x2="376" y2="520"/>
<line x1="316" y1="534" x2="376" y2="534"/>
<line x1="438" y1="527" x2="484" y2="527"/>
<line x1="484" y1="527" x2="484" y2="586"/>
<line x1="484" y1="586" x2="514" y2="586"/>
<line x1="160" y1="572" x2="376" y2="572"/>
<line x1="190" y1="586" x2="376" y2="586"/>
<line x1="438" y1="579" x2="464" y2="579"/>
<line x1="464" y1="579" x2="464" y2="600"/>
<line x1="464" y1="600" x2="514" y2="600"/>
<line x1="190" y1="624" x2="376" y2="624"/>
<line x1="316" y1="638" x2="376" y2="638"/>
<line x1="438" y1="631" x2="474" y2="631"/>
<line x1="474" y1="631" x2="474" y2="614"/>
<line x1="474" y1="614" x2="514" y2="614"/>
<line x1="112" y1="676" x2="376" y2="676"/>
<line x1="238" y1="690" x2="376" y2="690"/>
<line x1="268" y1="704" x2="376" y2="704"/>
<line x1="438" y1="690" x2="494" y2="690"/>
<line x1="494" y1="690" x2="494" y2="628"/>
<line x1="494" y1="628" x2="514" y2="628"/>
<line x1="576" y1="600" x2="606" y2="600"/>
<line x1="160" y1="758" x2="376" y2="758"/>
<line x1="316" y1="772" x2="376" y2="772"/>
<line x1="438" y1="765" x2="474" y2="765"/>
<line x1="474" y1="765" x2="474" y2="784"/>
<line x1="474" y1="784" x2="484" y2="784"/>
<line x1="190" y1="810" x2="376" y2="810"/>
<line x1="316" y1="824" x2="376" y2="824"/>
<line x1="438" y1="817" x2="464" y2="817"/>
<line x1="464" y1="817" x2="464" y2="798"/>
<line x1="464" y1="798" x2="484" y2="798"/>
<line x1="546" y1="791" x2="576" y2="791"/>
<line x1="82" y1="871" x2="494" y2="871"/>
<line x1="494" y1="871" x2="494" y2="928"/>
<line x1="494" y1="928" x2="504" y2="928"/>
<line x1="112" y1="902" x2="376" y2="902"/>
<line x1="238" y1="916" x2="376" y2="916"/>
<line x1="438" y1="909" x2="474" y2="909"/>
<line x1="474" y1="909" x2="474" y2="942"/>
<line x1="474" y1="942" x2="504" y2="942"/>
<line x1="112" y1="954" x2="376" y2="954"/>
<line x1="316" y1="968" x2="376" y2="968"/>
<line x1="438" y1="961" x2="464" y2="961"/>
<line x1="464" y1="961" x2="464" y2="956"/>
<line x1="464" y1="956" x2="504" y2="956"/>
<line x1="238" y1="1006" x2="376" y2="1006"/>
<line x1="316" y1="1020" x2="376" y2="1020"/>
<line x1="438" y1="1013" x2="484" y2="1013"/>
<line x1="484" y1="1013" x2="484" y2="970"/>
<line x1="484" y1="970" x2="504" y2="970"/>
<line x1="566" y1="949" x2="596" y2="949"/>
<line x1="112" y1="1074" x2="376" y2="1074"/>
<line x1="238" y1="1088" x2="376" y2="1088"/>
<line x1="438" y1="1081" x2="494" y2="1081"/>
<line x1="494" y1="1081" x2="494" y2="1138"/>
<line x1="494" y1="1138" x2="504" y2="1138"/>
<line x1="34" y1="1126" x2="376" y2="1126"/>
<line x1="238" y1="1140" x2="376" y2="1140"/>
<line x1="438" y1="1133" x2="474" y2="1133"/>
<line x1="474" y1="1133" x2="474" y2="1152"/>
<line x1="474" y1="1152" x2="504" y2="1152"/>
<line x1="160" y1="1178" x2="376" y2="1178"/>
<line x1="190" y1="1192" x2="376" y2="1192"/>
<line x1="438" y1="1185" x2="464" y2="1185"/>
<line x1="464" y1="1185" x2="464" y2="1166"/>
<line x1="464" y1="1166" x2="504" y2="1166"/>
<line x1="190" y1="1230" x2="376" y2="1230"/>
<line x1="316" y1="1244" x2="376" y2="1244"/>
<line x1="438" y1="1237" x2="484" y2="1237"/>
<line x1="484" y1="1237" x2="484" y2="1180"/>
<line x1="484" y1="1180" x2="504" y2="1180"/>
<line x1="566" y1="1159" x2="596" y2="1159"/>
<line x1="34" y1="52" x2="41" y2="52"/>
<line x1="73" y1="52" x2="82" y2="52"/>
<line x1="112" y1="52" x2="119" y2="52"/>
<line x1="151" y1="52" x2="160" y2="52"/>
<line x1="190" y1="52" x2="197" y2="52"/>
<line x1="229" y1="52" x2="238" y2="52"/>
<line x1="268" y1="52" x2="275" y2="52"/>
<line x1="307" y1="52" x2="316" y2="52"/>
<path d="M376,130 H402 A26,21 0 0 1 402,172 H376 Z"/>
<circle cx="433" cy="151" r="5"/>
<path d="M376,182 H402 A26,21 0 0 1 402,224 H376 Z"/>
<circle cx="433" cy="203" r="5"/>
<path d="M504,118 H530 A26,35 0 0 1 530,188 H504 Z"/>
<circle cx="561" cy="153" r="5"/>
<path d="M376,274 H402 A26,21 0 0 1 402,316 H376 Z"/>
<circle cx="433" cy="295" r="5"/>
<path d="M376,326 H402 A26,21 0 0 1 402,368 H376 Z"/>
<circle cx="433" cy="347" r="5"/>
<path d="M494,281 H520 A26,28 0 0 1 520,337 H494 Z"/>
<circle cx="551" cy="309" r="5"/>
<path d="M494,397 H520 A26,28 0 0 1 520,453 H494 Z"/>
<circle cx="551" cy="425" r="5"/>
<path d="M376,506 H402 A26,21 0 0 1 402,548 H376 Z"/>
<circle cx="433" cy="527" r="5"/>
<path d="M376,558 H402 A26,21 0 0 1 402,600 H376 Z"/>
<circle cx="433" cy="579" r="5"/>
<path d="M376,610 H402 A26,21 0 0 1 402,652 H376 Z"/>
<circle cx="433" cy="631" r="5"/>
<path d="M376,662 H402 A26,28 0 0 1 402,718 H376 Z"/>
<circle cx="433" cy="690" r="5"/>
<path d="M514,558 H540 A26,42 0 0 1 540,642 H514 Z"/>
<circle cx="571" cy="600" r="5"/>
<path d="M376,744 H402 A26,21 0 0 1 402,786 H376 Z"/>
<circle cx="433" cy="765" r="5"/>
<path d="M376,796 H402 A26,21 0 0 1 402,838 H376 Z"/>
<circle cx="433" cy="817" r="5"/>
<path d="M484,770 H510 A26,21 0 0 1 510,812 H484 Z"/>
<circle cx="541" cy="791" r="5"/>
<path d="M376,888 H402 A26,21 0 0 1 402,930 H376 Z"/>
<circle cx="433" cy="909" r="5"/>
<path d="M376,940 H402 A26,21 0 0 1 402,982 H376 Z"/>
<circle cx="433" cy="961" r="5"/>
<path d="M376,992 H402 A26,21 0 0 1 402,1034 H376 Z"/>
<circle cx="433" cy="1013" r="5"/>
<path d="M504,914 H530 A26,35 0 0 1 530,984 H504 Z"/>
<circle cx="561" cy="949" r="5"/>
<path d="M376,1060 H402 A26,21 0 0 1 402,1102 H376 Z"/>
<circle cx="433" cy="1081" r="5"/>
<path d="M376,1112 H402 A26,21 0 0 1 402,1154 H376 Z"/>
<circle cx="433" cy="1133" r="5"/>
<path d="M376,1164 H402 A26,21 0 0 1 402,1206 H376 Z"/>
<circle cx="433" cy="1185" r="5"/>
<path d="M376,1216 H402 A26,21 0 0 1 402,1258 H376 Z"/>
<circle cx="433" cy="1237" r="5"/>
<path d="M504,1124 H530 A26,35 0 0 1 530,1194 H504 Z"/>
<circle cx="561" cy="1159" r="5"/>
<polygon points="41,40 41,64 63,52"/>
<circle cx="68" cy="52" r="5"/>
<polygon points="119,40 119,64 141,52"/>
<circle cx="146" cy="52" r="5"/>
<polygon points="197,40 197,64 219,52"/>
<circle cx="224" cy="52" r="5"/>
<polygon points="275,40 275,64 297,52"/>
<circle cx="302" cy="52" r="5"/>
<circle cx="82" cy="89" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="113" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="144" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="158" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="160" cy="196" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316" cy="210" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="257" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="288" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316" cy="302" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="340" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="354" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="160" cy="401" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="425" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316" cy="449" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="82" cy="489" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="160" cy="520" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316" cy="534" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="160" cy="572" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="586" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="624" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316" cy="638" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="676" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="690" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="704" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="160" cy="758" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316" cy="772" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="810" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316" cy="824" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="82" cy="871" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="902" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="916" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="954" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316" cy="968" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="1006" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316" cy="1020" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="1074" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="1088" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="1126" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="1140" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="160" cy="1178" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="1192" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="1230" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316" cy="1244" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="52" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="602" y="159">a</text>
<text x="592" y="315">b</text>
<text x="592" y="431">c</text>
<text x="612" y="606">d</text>
<text x="582" y="797">e</text>
<text x="602" y="955">f</text>
<text x="602" y="1165">g</text>
<text x="34" y="22" text-anchor="middle">A</text>
<text x="112" y="22" text-anchor="middle">B</text>
<text x="190" y="22" text-anchor="middle">C</text>
<text x="268" y="22" text-anchor="middle">D</text>
</svg>
</div>

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="74" height="118" viewBox="0 0 74 118" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(10,8) scale(1.1)"><path d="M7,4 L37,4 L33,10 L11,10 Z" fill-opacity="1"/><path d="M38,5 L38,35 L32,31 L32,11 Z" fill-opacity="1"/><path d="M38,41 L38,71 L32,65 L32,45 Z" fill-opacity="1"/><path d="M7,72 L37,72 L33,66 L11,66 Z" fill-opacity="1"/><path d="M6,41 L6,71 L12,65 L12,45 Z" fill-opacity="1"/><path d="M6,5 L6,35 L12,31 L12,11 Z" fill-opacity="1"/><path d="M7,38 L11,34 L33,34 L37,38 L33,42 L11,42 Z" fill-opacity="1"/></g>
<text x="34.2" y="108" text-anchor="middle">8</text>
</svg>
</div>

### วงจรของเลข 9 (BCD-8421, NAND อย่างเดียว) {code=bcd; method=nand; digit=9}

$\mathbf{Sol}^{n}$

เลข $9$ ใช้ segment $a, b, c, d, f, g$ จึงเขียนวงจรเฉพาะ segment เหล่านี้ ต่อเข้าด้วยกันเป็นวงจรเดียว : ใช้ NAND เกตทั้งสองชั้น : แต่ละพจน์ผลคูณเข้า NAND เกตชั้นแรก (พจน์ตัวแปรเดียวใช้ตัวที่คอมพลีเมนต์ต่อตรง) แล้วนำทุกเอาต์พุตเข้า NAND เกตชั้นที่สอง

$\mathbf{Ans}\quad \begin{aligned}a &= \overline{\overline{A}\cdot \overline{C}\cdot \overline{BD}\cdot \overline{\overline{B}\,\overline{D}}} \\ b &= \overline{B\cdot \overline{\overline{C}\,\overline{D}}\cdot \overline{CD}} \\ c &= \overline{\overline{B}\cdot C\cdot \overline{D}} \\ d &= \overline{\overline{A}\cdot \overline{\overline{B}\,\overline{D}}\cdot \overline{\overline{B}C}\cdot \overline{C\overline{D}}\cdot \overline{B\overline{C}D}} \\ f &= \overline{\overline{A}\cdot \overline{B\overline{C}}\cdot \overline{B\overline{D}}\cdot \overline{\overline{C}\,\overline{D}}} \\ g &= \overline{\overline{B\overline{C}}\cdot \overline{A\overline{C}}\cdot \overline{\overline{B}C}\cdot \overline{C\overline{D}}}\end{aligned}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="660" height="1164" viewBox="0 0 660 1164" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<line x1="82" y1="52" x2="82" y2="751"/>
<line x1="34" y1="28" x2="34" y2="1006"/>
<line x1="160" y1="52" x2="160" y2="1058"/>
<line x1="112" y1="28" x2="112" y2="954"/>
<line x1="238" y1="52" x2="238" y2="1020"/>
<line x1="190" y1="28" x2="190" y2="1110"/>
<line x1="316" y1="52" x2="316" y2="1124"/>
<line x1="268" y1="28" x2="268" y2="704"/>
<line x1="82" y1="89" x2="494" y2="89"/>
<line x1="494" y1="89" x2="494" y2="132"/>
<line x1="494" y1="132" x2="504" y2="132"/>
<line x1="238" y1="113" x2="474" y2="113"/>
<line x1="474" y1="113" x2="474" y2="146"/>
<line x1="474" y1="146" x2="504" y2="146"/>
<line x1="112" y1="144" x2="376" y2="144"/>
<line x1="268" y1="158" x2="376" y2="158"/>
<line x1="438" y1="151" x2="464" y2="151"/>
<line x1="464" y1="151" x2="464" y2="160"/>
<line x1="464" y1="160" x2="504" y2="160"/>
<line x1="160" y1="196" x2="376" y2="196"/>
<line x1="316" y1="210" x2="376" y2="210"/>
<line x1="438" y1="203" x2="484" y2="203"/>
<line x1="484" y1="203" x2="484" y2="174"/>
<line x1="484" y1="174" x2="504" y2="174"/>
<line x1="566" y1="153" x2="596" y2="153"/>
<line x1="112" y1="257" x2="484" y2="257"/>
<line x1="484" y1="257" x2="484" y2="295"/>
<line x1="484" y1="295" x2="494" y2="295"/>
<line x1="238" y1="288" x2="376" y2="288"/>
<line x1="316" y1="302" x2="376" y2="302"/>
<line x1="438" y1="295" x2="464" y2="295"/>
<line x1="464" y1="295" x2="464" y2="309"/>
<line x1="464" y1="309" x2="494" y2="309"/>
<line x1="190" y1="340" x2="376" y2="340"/>
<line x1="268" y1="354" x2="376" y2="354"/>
<line x1="438" y1="347" x2="474" y2="347"/>
<line x1="474" y1="347" x2="474" y2="323"/>
<line x1="474" y1="323" x2="494" y2="323"/>
<line x1="556" y1="309" x2="586" y2="309"/>
<line x1="160" y1="401" x2="484" y2="401"/>
<line x1="484" y1="401" x2="484" y2="411"/>
<line x1="484" y1="411" x2="494" y2="411"/>
<line x1="190" y1="425" x2="494" y2="425"/>
<line x1="316" y1="449" x2="474" y2="449"/>
<line x1="474" y1="449" x2="474" y2="439"/>
<line x1="474" y1="439" x2="494" y2="439"/>
<line x1="556" y1="425" x2="586" y2="425"/>
<line x1="82" y1="489" x2="504" y2="489"/>
<line x1="504" y1="489" x2="504" y2="572"/>
<line x1="504" y1="572" x2="514" y2="572"/>
<line x1="160" y1="520" x2="376" y2="520"/>
<line x1="316" y1="534" x2="376" y2="534"/>
<line x1="438" y1="527" x2="484" y2="527"/>
<line x1="484" y1="527" x2="484" y2="586"/>
<line x1="484" y1="586" x2="514" y2="586"/>
<line x1="160" y1="572" x2="376" y2="572"/>
<line x1="190" y1="586" x2="376" y2="586"/>
<line x1="438" y1="579" x2="464" y2="579"/>
<line x1="464" y1="579" x2="464" y2="600"/>
<line x1="464" y1="600" x2="514" y2="600"/>
<line x1="190" y1="624" x2="376" y2="624"/>
<line x1="316" y1="638" x2="376" y2="638"/>
<line x1="438" y1="631" x2="474" y2="631"/>
<line x1="474" y1="631" x2="474" y2="614"/>
<line x1="474" y1="614" x2="514" y2="614"/>
<line x1="112" y1="676" x2="376" y2="676"/>
<line x1="238" y1="690" x2="376" y2="690"/>
<line x1="268" y1="704" x2="376" y2="704"/>
<line x1="438" y1="690" x2="494" y2="690"/>
<line x1="494" y1="690" x2="494" y2="628"/>
<line x1="494" y1="628" x2="514" y2="628"/>
<line x1="576" y1="600" x2="606" y2="600"/>
<line x1="82" y1="751" x2="494" y2="751"/>
<line x1="494" y1="751" x2="494" y2="808"/>
<line x1="494" y1="808" x2="504" y2="808"/>
<line x1="112" y1="782" x2="376" y2="782"/>
<line x1="238" y1="796" x2="376" y2="796"/>
<line x1="438" y1="789" x2="474" y2="789"/>
<line x1="474" y1="789" x2="474" y2="822"/>
<line x1="474" y1="822" x2="504" y2="822"/>
<line x1="112" y1="834" x2="376" y2="834"/>
<line x1="316" y1="848" x2="376" y2="848"/>
<line x1="438" y1="841" x2="464" y2="841"/>
<line x1="464" y1="841" x2="464" y2="836"/>
<line x1="464" y1="836" x2="504" y2="836"/>
<line x1="238" y1="886" x2="376" y2="886"/>
<line x1="316" y1="900" x2="376" y2="900"/>
<line x1="438" y1="893" x2="484" y2="893"/>
<line x1="484" y1="893" x2="484" y2="850"/>
<line x1="484" y1="850" x2="504" y2="850"/>
<line x1="566" y1="829" x2="596" y2="829"/>
<line x1="112" y1="954" x2="376" y2="954"/>
<line x1="238" y1="968" x2="376" y2="968"/>
<line x1="438" y1="961" x2="494" y2="961"/>
<line x1="494" y1="961" x2="494" y2="1018"/>
<line x1="494" y1="1018" x2="504" y2="1018"/>
<line x1="34" y1="1006" x2="376" y2="1006"/>
<line x1="238" y1="1020" x2="376" y2="1020"/>
<line x1="438" y1="1013" x2="474" y2="1013"/>
<line x1="474" y1="1013" x2="474" y2="1032"/>
<line x1="474" y1="1032" x2="504" y2="1032"/>
<line x1="160" y1="1058" x2="376" y2="1058"/>
<line x1="190" y1="1072" x2="376" y2="1072"/>
<line x1="438" y1="1065" x2="464" y2="1065"/>
<line x1="464" y1="1065" x2="464" y2="1046"/>
<line x1="464" y1="1046" x2="504" y2="1046"/>
<line x1="190" y1="1110" x2="376" y2="1110"/>
<line x1="316" y1="1124" x2="376" y2="1124"/>
<line x1="438" y1="1117" x2="484" y2="1117"/>
<line x1="484" y1="1117" x2="484" y2="1060"/>
<line x1="484" y1="1060" x2="504" y2="1060"/>
<line x1="566" y1="1039" x2="596" y2="1039"/>
<line x1="34" y1="52" x2="41" y2="52"/>
<line x1="73" y1="52" x2="82" y2="52"/>
<line x1="112" y1="52" x2="119" y2="52"/>
<line x1="151" y1="52" x2="160" y2="52"/>
<line x1="190" y1="52" x2="197" y2="52"/>
<line x1="229" y1="52" x2="238" y2="52"/>
<line x1="268" y1="52" x2="275" y2="52"/>
<line x1="307" y1="52" x2="316" y2="52"/>
<path d="M376,130 H402 A26,21 0 0 1 402,172 H376 Z"/>
<circle cx="433" cy="151" r="5"/>
<path d="M376,182 H402 A26,21 0 0 1 402,224 H376 Z"/>
<circle cx="433" cy="203" r="5"/>
<path d="M504,118 H530 A26,35 0 0 1 530,188 H504 Z"/>
<circle cx="561" cy="153" r="5"/>
<path d="M376,274 H402 A26,21 0 0 1 402,316 H376 Z"/>
<circle cx="433" cy="295" r="5"/>
<path d="M376,326 H402 A26,21 0 0 1 402,368 H376 Z"/>
<circle cx="433" cy="347" r="5"/>
<path d="M494,281 H520 A26,28 0 0 1 520,337 H494 Z"/>
<circle cx="551" cy="309" r="5"/>
<path d="M494,397 H520 A26,28 0 0 1 520,453 H494 Z"/>
<circle cx="551" cy="425" r="5"/>
<path d="M376,506 H402 A26,21 0 0 1 402,548 H376 Z"/>
<circle cx="433" cy="527" r="5"/>
<path d="M376,558 H402 A26,21 0 0 1 402,600 H376 Z"/>
<circle cx="433" cy="579" r="5"/>
<path d="M376,610 H402 A26,21 0 0 1 402,652 H376 Z"/>
<circle cx="433" cy="631" r="5"/>
<path d="M376,662 H402 A26,28 0 0 1 402,718 H376 Z"/>
<circle cx="433" cy="690" r="5"/>
<path d="M514,558 H540 A26,42 0 0 1 540,642 H514 Z"/>
<circle cx="571" cy="600" r="5"/>
<path d="M376,768 H402 A26,21 0 0 1 402,810 H376 Z"/>
<circle cx="433" cy="789" r="5"/>
<path d="M376,820 H402 A26,21 0 0 1 402,862 H376 Z"/>
<circle cx="433" cy="841" r="5"/>
<path d="M376,872 H402 A26,21 0 0 1 402,914 H376 Z"/>
<circle cx="433" cy="893" r="5"/>
<path d="M504,794 H530 A26,35 0 0 1 530,864 H504 Z"/>
<circle cx="561" cy="829" r="5"/>
<path d="M376,940 H402 A26,21 0 0 1 402,982 H376 Z"/>
<circle cx="433" cy="961" r="5"/>
<path d="M376,992 H402 A26,21 0 0 1 402,1034 H376 Z"/>
<circle cx="433" cy="1013" r="5"/>
<path d="M376,1044 H402 A26,21 0 0 1 402,1086 H376 Z"/>
<circle cx="433" cy="1065" r="5"/>
<path d="M376,1096 H402 A26,21 0 0 1 402,1138 H376 Z"/>
<circle cx="433" cy="1117" r="5"/>
<path d="M504,1004 H530 A26,35 0 0 1 530,1074 H504 Z"/>
<circle cx="561" cy="1039" r="5"/>
<polygon points="41,40 41,64 63,52"/>
<circle cx="68" cy="52" r="5"/>
<polygon points="119,40 119,64 141,52"/>
<circle cx="146" cy="52" r="5"/>
<polygon points="197,40 197,64 219,52"/>
<circle cx="224" cy="52" r="5"/>
<polygon points="275,40 275,64 297,52"/>
<circle cx="302" cy="52" r="5"/>
<circle cx="82" cy="89" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="113" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="144" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="158" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="160" cy="196" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316" cy="210" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="257" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="288" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316" cy="302" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="340" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="354" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="160" cy="401" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="425" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316" cy="449" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="82" cy="489" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="160" cy="520" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316" cy="534" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="160" cy="572" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="586" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="624" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316" cy="638" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="676" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="690" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="704" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="82" cy="751" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="782" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="796" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="834" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316" cy="848" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="886" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316" cy="900" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="954" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="968" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="1006" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="1020" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="160" cy="1058" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="1072" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="1110" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316" cy="1124" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="52" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="602" y="159">a</text>
<text x="592" y="315">b</text>
<text x="592" y="431">c</text>
<text x="612" y="606">d</text>
<text x="602" y="835">f</text>
<text x="602" y="1045">g</text>
<text x="34" y="22" text-anchor="middle">A</text>
<text x="112" y="22" text-anchor="middle">B</text>
<text x="190" y="22" text-anchor="middle">C</text>
<text x="268" y="22" text-anchor="middle">D</text>
</svg>
</div>

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="74" height="118" viewBox="0 0 74 118" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(10,8) scale(1.1)"><path d="M7,4 L37,4 L33,10 L11,10 Z" fill-opacity="1"/><path d="M38,5 L38,35 L32,31 L32,11 Z" fill-opacity="1"/><path d="M38,41 L38,71 L32,65 L32,45 Z" fill-opacity="1"/><path d="M7,72 L37,72 L33,66 L11,66 Z" fill-opacity="1"/><path d="M6,41 L6,71 L12,65 L12,45 Z" fill-opacity="0.1"/><path d="M6,5 L6,35 L12,31 L12,11 Z" fill-opacity="1"/><path d="M7,38 L11,34 L33,34 L37,38 L33,42 L11,42 Z" fill-opacity="1"/></g>
<text x="34.2" y="108" text-anchor="middle">9</text>
</svg>
</div>

### วงจรของเลข 0 (BCD-8421, OR/AND) {code=bcd; method=orand; digit=0}

$\mathbf{Sol}^{n}$

เลข $0$ ใช้ segment $a, b, c, d, e, f$ จึงเขียนวงจรเฉพาะ segment เหล่านี้ ต่อเข้าด้วยกันเป็นวงจรเดียว : แต่ละพจน์ผลบวกใช้ OR เกต แล้วนำทุกพจน์เข้า AND เกต (พจน์ที่มีตัวแปรตัวเดียวต่อเข้า AND เกตได้เลย)

$\mathbf{Ans}\quad \begin{aligned}a &= (A+B+C+\overline{D})(\overline{B}+C+D) \\ b &= (\overline{B}+C+\overline{D})(\overline{B}+\overline{C}+D) \\ c &= (B+\overline{C}+D) \\ d &= (A+B+C+\overline{D})(\overline{B}+C+D)(\overline{B}+\overline{C}+\overline{D}) \\ e &= (\overline{D})(\overline{B}+C) \\ f &= (A+B+\overline{D})(B+\overline{C})(\overline{C}+\overline{D})\end{aligned}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="582" height="980" viewBox="0 0 582 980" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<line x1="34" y1="28" x2="34" y2="808"/>
<line x1="114" y1="52" x2="114" y2="740"/>
<line x1="66" y1="28" x2="66" y2="874"/>
<line x1="192" y1="52" x2="192" y2="926"/>
<line x1="144" y1="28" x2="144" y2="754"/>
<line x1="270" y1="52" x2="270" y2="940"/>
<line x1="222" y1="28" x2="222" y2="596"/>
<line x1="34" y1="96" x2="334.5" y2="96"/>
<line x1="66" y1="110" x2="336.7" y2="110"/>
<line x1="144" y1="124" x2="336.7" y2="124"/>
<line x1="270" y1="138" x2="334.5" y2="138"/>
<line x1="390" y1="117" x2="416" y2="117"/>
<line x1="416" y1="117" x2="416" y2="143"/>
<line x1="416" y1="143" x2="436" y2="143"/>
<line x1="114" y1="176" x2="335.2" y2="176"/>
<line x1="144" y1="190" x2="337" y2="190"/>
<line x1="222" y1="204" x2="335.2" y2="204"/>
<line x1="390" y1="190" x2="426" y2="190"/>
<line x1="426" y1="190" x2="426" y2="157"/>
<line x1="426" y1="157" x2="436" y2="157"/>
<line x1="488" y1="150" x2="518" y2="150"/>
<line x1="114" y1="258" x2="335.2" y2="258"/>
<line x1="144" y1="272" x2="337" y2="272"/>
<line x1="270" y1="286" x2="335.2" y2="286"/>
<line x1="390" y1="272" x2="426" y2="272"/>
<line x1="426" y1="272" x2="426" y2="298"/>
<line x1="426" y1="298" x2="436" y2="298"/>
<line x1="114" y1="324" x2="335.2" y2="324"/>
<line x1="192" y1="338" x2="337" y2="338"/>
<line x1="222" y1="352" x2="335.2" y2="352"/>
<line x1="390" y1="338" x2="416" y2="338"/>
<line x1="416" y1="338" x2="416" y2="312"/>
<line x1="416" y1="312" x2="436" y2="312"/>
<line x1="488" y1="305" x2="518" y2="305"/>
<line x1="66" y1="406" x2="335.2" y2="406"/>
<line x1="192" y1="420" x2="337" y2="420"/>
<line x1="222" y1="434" x2="335.2" y2="434"/>
<line x1="390" y1="420" x2="420" y2="420"/>
<line x1="34" y1="488" x2="334.5" y2="488"/>
<line x1="66" y1="502" x2="336.7" y2="502"/>
<line x1="144" y1="516" x2="336.7" y2="516"/>
<line x1="270" y1="530" x2="334.5" y2="530"/>
<line x1="390" y1="509" x2="426" y2="509"/>
<line x1="426" y1="509" x2="426" y2="561"/>
<line x1="426" y1="561" x2="446" y2="561"/>
<line x1="114" y1="568" x2="335.2" y2="568"/>
<line x1="144" y1="582" x2="337" y2="582"/>
<line x1="222" y1="596" x2="335.2" y2="596"/>
<line x1="390" y1="582" x2="416" y2="582"/>
<line x1="416" y1="582" x2="416" y2="575"/>
<line x1="416" y1="575" x2="446" y2="575"/>
<line x1="114" y1="634" x2="335.2" y2="634"/>
<line x1="192" y1="648" x2="337" y2="648"/>
<line x1="270" y1="662" x2="335.2" y2="662"/>
<line x1="390" y1="648" x2="436" y2="648"/>
<line x1="436" y1="648" x2="436" y2="589"/>
<line x1="436" y1="589" x2="446" y2="589"/>
<line x1="498" y1="575" x2="528" y2="575"/>
<line x1="270" y1="709" x2="426" y2="709"/>
<line x1="426" y1="709" x2="426" y2="728"/>
<line x1="426" y1="728" x2="436" y2="728"/>
<line x1="114" y1="740" x2="336.2" y2="740"/>
<line x1="144" y1="754" x2="336.2" y2="754"/>
<line x1="390" y1="747" x2="416" y2="747"/>
<line x1="416" y1="747" x2="416" y2="742"/>
<line x1="416" y1="742" x2="436" y2="742"/>
<line x1="488" y1="735" x2="518" y2="735"/>
<line x1="34" y1="808" x2="335.2" y2="808"/>
<line x1="66" y1="822" x2="337" y2="822"/>
<line x1="270" y1="836" x2="335.2" y2="836"/>
<line x1="390" y1="822" x2="426" y2="822"/>
<line x1="426" y1="822" x2="426" y2="860"/>
<line x1="426" y1="860" x2="446" y2="860"/>
<line x1="66" y1="874" x2="336.2" y2="874"/>
<line x1="192" y1="888" x2="336.2" y2="888"/>
<line x1="390" y1="881" x2="416" y2="881"/>
<line x1="416" y1="881" x2="416" y2="874"/>
<line x1="416" y1="874" x2="446" y2="874"/>
<line x1="192" y1="926" x2="336.2" y2="926"/>
<line x1="270" y1="940" x2="336.2" y2="940"/>
<line x1="390" y1="933" x2="436" y2="933"/>
<line x1="436" y1="933" x2="436" y2="888"/>
<line x1="436" y1="888" x2="446" y2="888"/>
<line x1="498" y1="874" x2="528" y2="874"/>
<line x1="66" y1="52" x2="73" y2="52"/>
<line x1="105" y1="52" x2="114" y2="52"/>
<line x1="144" y1="52" x2="151" y2="52"/>
<line x1="183" y1="52" x2="192" y2="52"/>
<line x1="222" y1="52" x2="229" y2="52"/>
<line x1="261" y1="52" x2="270" y2="52"/>
<path d="M330,82 C352,82 378,99.5 390,117 C378,134.5 352,152 330,152 Q344,117 330,82 Z"/>
<path d="M330,162 C352,162 378,176 390,190 C378,204 352,218 330,218 Q344,190 330,162 Z"/>
<path d="M436,129 H462 A26,21 0 0 1 462,171 H436 Z"/>
<path d="M330,244 C352,244 378,258 390,272 C378,286 352,300 330,300 Q344,272 330,244 Z"/>
<path d="M330,310 C352,310 378,324 390,338 C378,352 352,366 330,366 Q344,338 330,310 Z"/>
<path d="M436,284 H462 A26,21 0 0 1 462,326 H436 Z"/>
<path d="M330,392 C352,392 378,406 390,420 C378,434 352,448 330,448 Q344,420 330,392 Z"/>
<path d="M330,474 C352,474 378,491.5 390,509 C378,526.5 352,544 330,544 Q344,509 330,474 Z"/>
<path d="M330,554 C352,554 378,568 390,582 C378,596 352,610 330,610 Q344,582 330,554 Z"/>
<path d="M330,620 C352,620 378,634 390,648 C378,662 352,676 330,676 Q344,648 330,620 Z"/>
<path d="M446,547 H472 A26,28 0 0 1 472,603 H446 Z"/>
<path d="M330,726 C352,726 378,736.5 390,747 C378,757.5 352,768 330,768 Q344,747 330,726 Z"/>
<path d="M436,714 H462 A26,21 0 0 1 462,756 H436 Z"/>
<path d="M330,794 C352,794 378,808 390,822 C378,836 352,850 330,850 Q344,822 330,794 Z"/>
<path d="M330,860 C352,860 378,870.5 390,881 C378,891.5 352,902 330,902 Q344,881 330,860 Z"/>
<path d="M330,912 C352,912 378,922.5 390,933 C378,943.5 352,954 330,954 Q344,933 330,912 Z"/>
<path d="M446,846 H472 A26,28 0 0 1 472,902 H446 Z"/>
<polygon points="73,40 73,64 95,52"/>
<circle cx="100" cy="52" r="5"/>
<polygon points="151,40 151,64 173,52"/>
<circle cx="178" cy="52" r="5"/>
<polygon points="229,40 229,64 251,52"/>
<circle cx="256" cy="52" r="5"/>
<circle cx="34" cy="96" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="110" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="124" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="138" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="114" cy="176" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="190" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="222" cy="204" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="114" cy="258" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="272" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="286" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="114" cy="324" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="192" cy="338" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="222" cy="352" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="406" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="192" cy="420" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="222" cy="434" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="488" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="502" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="516" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="530" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="114" cy="568" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="582" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="222" cy="596" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="114" cy="634" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="192" cy="648" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="662" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="709" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="114" cy="740" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="754" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="808" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="822" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="836" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="874" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="192" cy="888" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="192" cy="926" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="940" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="222" cy="52" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="524" y="156">a</text>
<text x="524" y="311">b</text>
<text x="426" y="426">c</text>
<text x="534" y="581">d</text>
<text x="524" y="741">e</text>
<text x="534" y="880">f</text>
<text x="34" y="22" text-anchor="middle">A</text>
<text x="66" y="22" text-anchor="middle">B</text>
<text x="144" y="22" text-anchor="middle">C</text>
<text x="222" y="22" text-anchor="middle">D</text>
</svg>
</div>

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="74" height="118" viewBox="0 0 74 118" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(10,8) scale(1.1)"><path d="M7,4 L37,4 L33,10 L11,10 Z" fill-opacity="1"/><path d="M38,5 L38,35 L32,31 L32,11 Z" fill-opacity="1"/><path d="M38,41 L38,71 L32,65 L32,45 Z" fill-opacity="1"/><path d="M7,72 L37,72 L33,66 L11,66 Z" fill-opacity="1"/><path d="M6,41 L6,71 L12,65 L12,45 Z" fill-opacity="1"/><path d="M6,5 L6,35 L12,31 L12,11 Z" fill-opacity="1"/><path d="M7,38 L11,34 L33,34 L37,38 L33,42 L11,42 Z" fill-opacity="0.1"/></g>
<text x="34.2" y="108" text-anchor="middle">0</text>
</svg>
</div>

### วงจรของเลข 1 (BCD-8421, OR/AND) {code=bcd; method=orand; digit=1}

$\mathbf{Sol}^{n}$

เลข $1$ ใช้ segment $b, c$ จึงเขียนวงจรเฉพาะ segment เหล่านี้ ต่อเข้าด้วยกันเป็นวงจรเดียว : แต่ละพจน์ผลบวกใช้ OR เกต แล้วนำทุกพจน์เข้า AND เกต (พจน์ที่มีตัวแปรตัวเดียวต่อเข้า AND เกตได้เลย)

$\mathbf{Ans}\quad \begin{aligned}b &= (\overline{B}+C+\overline{D})(\overline{B}+\overline{C}+D) \\ c &= (B+\overline{C}+D)\end{aligned}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="540" height="312" viewBox="0 0 540 312" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<line x1="82" y1="52" x2="82" y2="162"/>
<line x1="34" y1="28" x2="34" y2="244"/>
<line x1="160" y1="52" x2="160" y2="258"/>
<line x1="112" y1="28" x2="112" y2="110"/>
<line x1="238" y1="52" x2="238" y2="124"/>
<line x1="190" y1="28" x2="190" y2="272"/>
<line x1="82" y1="96" x2="303.2" y2="96"/>
<line x1="112" y1="110" x2="305" y2="110"/>
<line x1="238" y1="124" x2="303.2" y2="124"/>
<line x1="358" y1="110" x2="394" y2="110"/>
<line x1="394" y1="110" x2="394" y2="136"/>
<line x1="394" y1="136" x2="404" y2="136"/>
<line x1="82" y1="162" x2="303.2" y2="162"/>
<line x1="160" y1="176" x2="305" y2="176"/>
<line x1="190" y1="190" x2="303.2" y2="190"/>
<line x1="358" y1="176" x2="384" y2="176"/>
<line x1="384" y1="176" x2="384" y2="150"/>
<line x1="384" y1="150" x2="404" y2="150"/>
<line x1="456" y1="143" x2="486" y2="143"/>
<line x1="34" y1="244" x2="303.2" y2="244"/>
<line x1="160" y1="258" x2="305" y2="258"/>
<line x1="190" y1="272" x2="303.2" y2="272"/>
<line x1="358" y1="258" x2="388" y2="258"/>
<line x1="34" y1="52" x2="41" y2="52"/>
<line x1="73" y1="52" x2="82" y2="52"/>
<line x1="112" y1="52" x2="119" y2="52"/>
<line x1="151" y1="52" x2="160" y2="52"/>
<line x1="190" y1="52" x2="197" y2="52"/>
<line x1="229" y1="52" x2="238" y2="52"/>
<path d="M298,82 C320,82 346,96 358,110 C346,124 320,138 298,138 Q312,110 298,82 Z"/>
<path d="M298,148 C320,148 346,162 358,176 C346,190 320,204 298,204 Q312,176 298,148 Z"/>
<path d="M404,122 H430 A26,21 0 0 1 430,164 H404 Z"/>
<path d="M298,230 C320,230 346,244 358,258 C346,272 320,286 298,286 Q312,258 298,230 Z"/>
<polygon points="41,40 41,64 63,52"/>
<circle cx="68" cy="52" r="5"/>
<polygon points="119,40 119,64 141,52"/>
<circle cx="146" cy="52" r="5"/>
<polygon points="197,40 197,64 219,52"/>
<circle cx="224" cy="52" r="5"/>
<circle cx="82" cy="96" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="110" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="124" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="82" cy="162" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="160" cy="176" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="190" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="244" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="160" cy="258" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="272" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="52" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="492" y="149">b</text>
<text x="394" y="264">c</text>
<text x="34" y="22" text-anchor="middle">B</text>
<text x="112" y="22" text-anchor="middle">C</text>
<text x="190" y="22" text-anchor="middle">D</text>
</svg>
</div>

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="74" height="118" viewBox="0 0 74 118" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(10,8) scale(1.1)"><path d="M7,4 L37,4 L33,10 L11,10 Z" fill-opacity="0.1"/><path d="M38,5 L38,35 L32,31 L32,11 Z" fill-opacity="1"/><path d="M38,41 L38,71 L32,65 L32,45 Z" fill-opacity="1"/><path d="M7,72 L37,72 L33,66 L11,66 Z" fill-opacity="0.1"/><path d="M6,41 L6,71 L12,65 L12,45 Z" fill-opacity="0.1"/><path d="M6,5 L6,35 L12,31 L12,11 Z" fill-opacity="0.1"/><path d="M7,38 L11,34 L33,34 L37,38 L33,42 L11,42 Z" fill-opacity="0.1"/></g>
<text x="34.2" y="108" text-anchor="middle">1</text>
</svg>
</div>

### วงจรของเลข 2 (BCD-8421, OR/AND) {code=bcd; method=orand; digit=2}

$\mathbf{Sol}^{n}$

เลข $2$ ใช้ segment $a, b, d, e, g$ จึงเขียนวงจรเฉพาะ segment เหล่านี้ ต่อเข้าด้วยกันเป็นวงจรเดียว : แต่ละพจน์ผลบวกใช้ OR เกต แล้วนำทุกพจน์เข้า AND เกต (พจน์ที่มีตัวแปรตัวเดียวต่อเข้า AND เกตได้เลย)

$\mathbf{Ans}\quad \begin{aligned}a &= (A+B+C+\overline{D})(\overline{B}+C+D) \\ b &= (\overline{B}+C+\overline{D})(\overline{B}+\overline{C}+D) \\ d &= (A+B+C+\overline{D})(\overline{B}+C+D)(\overline{B}+\overline{C}+\overline{D}) \\ e &= (\overline{D})(\overline{B}+C) \\ g &= (A+B+C)(\overline{B}+\overline{C}+\overline{D})\end{aligned}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="582" height="860" viewBox="0 0 582 860" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<line x1="34" y1="28" x2="34" y2="726"/>
<line x1="114" y1="52" x2="114" y2="792"/>
<line x1="66" y1="28" x2="66" y2="740"/>
<line x1="192" y1="52" x2="192" y2="806"/>
<line x1="144" y1="28" x2="144" y2="754"/>
<line x1="270" y1="52" x2="270" y2="820"/>
<line x1="222" y1="28" x2="222" y2="514"/>
<line x1="34" y1="96" x2="334.5" y2="96"/>
<line x1="66" y1="110" x2="336.7" y2="110"/>
<line x1="144" y1="124" x2="336.7" y2="124"/>
<line x1="270" y1="138" x2="334.5" y2="138"/>
<line x1="390" y1="117" x2="416" y2="117"/>
<line x1="416" y1="117" x2="416" y2="143"/>
<line x1="416" y1="143" x2="436" y2="143"/>
<line x1="114" y1="176" x2="335.2" y2="176"/>
<line x1="144" y1="190" x2="337" y2="190"/>
<line x1="222" y1="204" x2="335.2" y2="204"/>
<line x1="390" y1="190" x2="426" y2="190"/>
<line x1="426" y1="190" x2="426" y2="157"/>
<line x1="426" y1="157" x2="436" y2="157"/>
<line x1="488" y1="150" x2="518" y2="150"/>
<line x1="114" y1="258" x2="335.2" y2="258"/>
<line x1="144" y1="272" x2="337" y2="272"/>
<line x1="270" y1="286" x2="335.2" y2="286"/>
<line x1="390" y1="272" x2="426" y2="272"/>
<line x1="426" y1="272" x2="426" y2="298"/>
<line x1="426" y1="298" x2="436" y2="298"/>
<line x1="114" y1="324" x2="335.2" y2="324"/>
<line x1="192" y1="338" x2="337" y2="338"/>
<line x1="222" y1="352" x2="335.2" y2="352"/>
<line x1="390" y1="338" x2="416" y2="338"/>
<line x1="416" y1="338" x2="416" y2="312"/>
<line x1="416" y1="312" x2="436" y2="312"/>
<line x1="488" y1="305" x2="518" y2="305"/>
<line x1="34" y1="406" x2="334.5" y2="406"/>
<line x1="66" y1="420" x2="336.7" y2="420"/>
<line x1="144" y1="434" x2="336.7" y2="434"/>
<line x1="270" y1="448" x2="334.5" y2="448"/>
<line x1="390" y1="427" x2="426" y2="427"/>
<line x1="426" y1="427" x2="426" y2="479"/>
<line x1="426" y1="479" x2="446" y2="479"/>
<line x1="114" y1="486" x2="335.2" y2="486"/>
<line x1="144" y1="500" x2="337" y2="500"/>
<line x1="222" y1="514" x2="335.2" y2="514"/>
<line x1="390" y1="500" x2="416" y2="500"/>
<line x1="416" y1="500" x2="416" y2="493"/>
<line x1="416" y1="493" x2="446" y2="493"/>
<line x1="114" y1="552" x2="335.2" y2="552"/>
<line x1="192" y1="566" x2="337" y2="566"/>
<line x1="270" y1="580" x2="335.2" y2="580"/>
<line x1="390" y1="566" x2="436" y2="566"/>
<line x1="436" y1="566" x2="436" y2="507"/>
<line x1="436" y1="507" x2="446" y2="507"/>
<line x1="498" y1="493" x2="528" y2="493"/>
<line x1="270" y1="627" x2="426" y2="627"/>
<line x1="426" y1="627" x2="426" y2="646"/>
<line x1="426" y1="646" x2="436" y2="646"/>
<line x1="114" y1="658" x2="336.2" y2="658"/>
<line x1="144" y1="672" x2="336.2" y2="672"/>
<line x1="390" y1="665" x2="416" y2="665"/>
<line x1="416" y1="665" x2="416" y2="660"/>
<line x1="416" y1="660" x2="436" y2="660"/>
<line x1="488" y1="653" x2="518" y2="653"/>
<line x1="34" y1="726" x2="335.2" y2="726"/>
<line x1="66" y1="740" x2="337" y2="740"/>
<line x1="144" y1="754" x2="335.2" y2="754"/>
<line x1="390" y1="740" x2="426" y2="740"/>
<line x1="426" y1="740" x2="426" y2="766"/>
<line x1="426" y1="766" x2="436" y2="766"/>
<line x1="114" y1="792" x2="335.2" y2="792"/>
<line x1="192" y1="806" x2="337" y2="806"/>
<line x1="270" y1="820" x2="335.2" y2="820"/>
<line x1="390" y1="806" x2="416" y2="806"/>
<line x1="416" y1="806" x2="416" y2="780"/>
<line x1="416" y1="780" x2="436" y2="780"/>
<line x1="488" y1="773" x2="518" y2="773"/>
<line x1="66" y1="52" x2="73" y2="52"/>
<line x1="105" y1="52" x2="114" y2="52"/>
<line x1="144" y1="52" x2="151" y2="52"/>
<line x1="183" y1="52" x2="192" y2="52"/>
<line x1="222" y1="52" x2="229" y2="52"/>
<line x1="261" y1="52" x2="270" y2="52"/>
<path d="M330,82 C352,82 378,99.5 390,117 C378,134.5 352,152 330,152 Q344,117 330,82 Z"/>
<path d="M330,162 C352,162 378,176 390,190 C378,204 352,218 330,218 Q344,190 330,162 Z"/>
<path d="M436,129 H462 A26,21 0 0 1 462,171 H436 Z"/>
<path d="M330,244 C352,244 378,258 390,272 C378,286 352,300 330,300 Q344,272 330,244 Z"/>
<path d="M330,310 C352,310 378,324 390,338 C378,352 352,366 330,366 Q344,338 330,310 Z"/>
<path d="M436,284 H462 A26,21 0 0 1 462,326 H436 Z"/>
<path d="M330,392 C352,392 378,409.5 390,427 C378,444.5 352,462 330,462 Q344,427 330,392 Z"/>
<path d="M330,472 C352,472 378,486 390,500 C378,514 352,528 330,528 Q344,500 330,472 Z"/>
<path d="M330,538 C352,538 378,552 390,566 C378,580 352,594 330,594 Q344,566 330,538 Z"/>
<path d="M446,465 H472 A26,28 0 0 1 472,521 H446 Z"/>
<path d="M330,644 C352,644 378,654.5 390,665 C378,675.5 352,686 330,686 Q344,665 330,644 Z"/>
<path d="M436,632 H462 A26,21 0 0 1 462,674 H436 Z"/>
<path d="M330,712 C352,712 378,726 390,740 C378,754 352,768 330,768 Q344,740 330,712 Z"/>
<path d="M330,778 C352,778 378,792 390,806 C378,820 352,834 330,834 Q344,806 330,778 Z"/>
<path d="M436,752 H462 A26,21 0 0 1 462,794 H436 Z"/>
<polygon points="73,40 73,64 95,52"/>
<circle cx="100" cy="52" r="5"/>
<polygon points="151,40 151,64 173,52"/>
<circle cx="178" cy="52" r="5"/>
<polygon points="229,40 229,64 251,52"/>
<circle cx="256" cy="52" r="5"/>
<circle cx="34" cy="96" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="110" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="124" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="138" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="114" cy="176" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="190" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="222" cy="204" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="114" cy="258" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="272" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="286" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="114" cy="324" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="192" cy="338" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="222" cy="352" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="406" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="420" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="434" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="448" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="114" cy="486" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="500" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="222" cy="514" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="114" cy="552" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="192" cy="566" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="580" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="627" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="114" cy="658" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="672" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="726" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="740" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="754" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="114" cy="792" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="192" cy="806" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="820" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="222" cy="52" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="524" y="156">a</text>
<text x="524" y="311">b</text>
<text x="534" y="499">d</text>
<text x="524" y="659">e</text>
<text x="524" y="779">g</text>
<text x="34" y="22" text-anchor="middle">A</text>
<text x="66" y="22" text-anchor="middle">B</text>
<text x="144" y="22" text-anchor="middle">C</text>
<text x="222" y="22" text-anchor="middle">D</text>
</svg>
</div>

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="74" height="118" viewBox="0 0 74 118" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(10,8) scale(1.1)"><path d="M7,4 L37,4 L33,10 L11,10 Z" fill-opacity="1"/><path d="M38,5 L38,35 L32,31 L32,11 Z" fill-opacity="1"/><path d="M38,41 L38,71 L32,65 L32,45 Z" fill-opacity="0.1"/><path d="M7,72 L37,72 L33,66 L11,66 Z" fill-opacity="1"/><path d="M6,41 L6,71 L12,65 L12,45 Z" fill-opacity="1"/><path d="M6,5 L6,35 L12,31 L12,11 Z" fill-opacity="0.1"/><path d="M7,38 L11,34 L33,34 L37,38 L33,42 L11,42 Z" fill-opacity="1"/></g>
<text x="34.2" y="108" text-anchor="middle">2</text>
</svg>
</div>

### วงจรของเลข 3 (BCD-8421, OR/AND) {code=bcd; method=orand; digit=3}

$\mathbf{Sol}^{n}$

เลข $3$ ใช้ segment $a, b, c, d, g$ จึงเขียนวงจรเฉพาะ segment เหล่านี้ ต่อเข้าด้วยกันเป็นวงจรเดียว : แต่ละพจน์ผลบวกใช้ OR เกต แล้วนำทุกพจน์เข้า AND เกต (พจน์ที่มีตัวแปรตัวเดียวต่อเข้า AND เกตได้เลย)

$\mathbf{Ans}\quad \begin{aligned}a &= (A+B+C+\overline{D})(\overline{B}+C+D) \\ b &= (\overline{B}+C+\overline{D})(\overline{B}+\overline{C}+D) \\ c &= (B+\overline{C}+D) \\ d &= (A+B+C+\overline{D})(\overline{B}+C+D)(\overline{B}+\overline{C}+\overline{D}) \\ g &= (A+B+C)(\overline{B}+\overline{C}+\overline{D})\end{aligned}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="582" height="850" viewBox="0 0 582 850" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<line x1="34" y1="28" x2="34" y2="716"/>
<line x1="114" y1="52" x2="114" y2="782"/>
<line x1="66" y1="28" x2="66" y2="730"/>
<line x1="192" y1="52" x2="192" y2="796"/>
<line x1="144" y1="28" x2="144" y2="744"/>
<line x1="270" y1="52" x2="270" y2="810"/>
<line x1="222" y1="28" x2="222" y2="596"/>
<line x1="34" y1="96" x2="334.5" y2="96"/>
<line x1="66" y1="110" x2="336.7" y2="110"/>
<line x1="144" y1="124" x2="336.7" y2="124"/>
<line x1="270" y1="138" x2="334.5" y2="138"/>
<line x1="390" y1="117" x2="416" y2="117"/>
<line x1="416" y1="117" x2="416" y2="143"/>
<line x1="416" y1="143" x2="436" y2="143"/>
<line x1="114" y1="176" x2="335.2" y2="176"/>
<line x1="144" y1="190" x2="337" y2="190"/>
<line x1="222" y1="204" x2="335.2" y2="204"/>
<line x1="390" y1="190" x2="426" y2="190"/>
<line x1="426" y1="190" x2="426" y2="157"/>
<line x1="426" y1="157" x2="436" y2="157"/>
<line x1="488" y1="150" x2="518" y2="150"/>
<line x1="114" y1="258" x2="335.2" y2="258"/>
<line x1="144" y1="272" x2="337" y2="272"/>
<line x1="270" y1="286" x2="335.2" y2="286"/>
<line x1="390" y1="272" x2="426" y2="272"/>
<line x1="426" y1="272" x2="426" y2="298"/>
<line x1="426" y1="298" x2="436" y2="298"/>
<line x1="114" y1="324" x2="335.2" y2="324"/>
<line x1="192" y1="338" x2="337" y2="338"/>
<line x1="222" y1="352" x2="335.2" y2="352"/>
<line x1="390" y1="338" x2="416" y2="338"/>
<line x1="416" y1="338" x2="416" y2="312"/>
<line x1="416" y1="312" x2="436" y2="312"/>
<line x1="488" y1="305" x2="518" y2="305"/>
<line x1="66" y1="406" x2="335.2" y2="406"/>
<line x1="192" y1="420" x2="337" y2="420"/>
<line x1="222" y1="434" x2="335.2" y2="434"/>
<line x1="390" y1="420" x2="420" y2="420"/>
<line x1="34" y1="488" x2="334.5" y2="488"/>
<line x1="66" y1="502" x2="336.7" y2="502"/>
<line x1="144" y1="516" x2="336.7" y2="516"/>
<line x1="270" y1="530" x2="334.5" y2="530"/>
<line x1="390" y1="509" x2="426" y2="509"/>
<line x1="426" y1="509" x2="426" y2="561"/>
<line x1="426" y1="561" x2="446" y2="561"/>
<line x1="114" y1="568" x2="335.2" y2="568"/>
<line x1="144" y1="582" x2="337" y2="582"/>
<line x1="222" y1="596" x2="335.2" y2="596"/>
<line x1="390" y1="582" x2="416" y2="582"/>
<line x1="416" y1="582" x2="416" y2="575"/>
<line x1="416" y1="575" x2="446" y2="575"/>
<line x1="114" y1="634" x2="335.2" y2="634"/>
<line x1="192" y1="648" x2="337" y2="648"/>
<line x1="270" y1="662" x2="335.2" y2="662"/>
<line x1="390" y1="648" x2="436" y2="648"/>
<line x1="436" y1="648" x2="436" y2="589"/>
<line x1="436" y1="589" x2="446" y2="589"/>
<line x1="498" y1="575" x2="528" y2="575"/>
<line x1="34" y1="716" x2="335.2" y2="716"/>
<line x1="66" y1="730" x2="337" y2="730"/>
<line x1="144" y1="744" x2="335.2" y2="744"/>
<line x1="390" y1="730" x2="426" y2="730"/>
<line x1="426" y1="730" x2="426" y2="756"/>
<line x1="426" y1="756" x2="436" y2="756"/>
<line x1="114" y1="782" x2="335.2" y2="782"/>
<line x1="192" y1="796" x2="337" y2="796"/>
<line x1="270" y1="810" x2="335.2" y2="810"/>
<line x1="390" y1="796" x2="416" y2="796"/>
<line x1="416" y1="796" x2="416" y2="770"/>
<line x1="416" y1="770" x2="436" y2="770"/>
<line x1="488" y1="763" x2="518" y2="763"/>
<line x1="66" y1="52" x2="73" y2="52"/>
<line x1="105" y1="52" x2="114" y2="52"/>
<line x1="144" y1="52" x2="151" y2="52"/>
<line x1="183" y1="52" x2="192" y2="52"/>
<line x1="222" y1="52" x2="229" y2="52"/>
<line x1="261" y1="52" x2="270" y2="52"/>
<path d="M330,82 C352,82 378,99.5 390,117 C378,134.5 352,152 330,152 Q344,117 330,82 Z"/>
<path d="M330,162 C352,162 378,176 390,190 C378,204 352,218 330,218 Q344,190 330,162 Z"/>
<path d="M436,129 H462 A26,21 0 0 1 462,171 H436 Z"/>
<path d="M330,244 C352,244 378,258 390,272 C378,286 352,300 330,300 Q344,272 330,244 Z"/>
<path d="M330,310 C352,310 378,324 390,338 C378,352 352,366 330,366 Q344,338 330,310 Z"/>
<path d="M436,284 H462 A26,21 0 0 1 462,326 H436 Z"/>
<path d="M330,392 C352,392 378,406 390,420 C378,434 352,448 330,448 Q344,420 330,392 Z"/>
<path d="M330,474 C352,474 378,491.5 390,509 C378,526.5 352,544 330,544 Q344,509 330,474 Z"/>
<path d="M330,554 C352,554 378,568 390,582 C378,596 352,610 330,610 Q344,582 330,554 Z"/>
<path d="M330,620 C352,620 378,634 390,648 C378,662 352,676 330,676 Q344,648 330,620 Z"/>
<path d="M446,547 H472 A26,28 0 0 1 472,603 H446 Z"/>
<path d="M330,702 C352,702 378,716 390,730 C378,744 352,758 330,758 Q344,730 330,702 Z"/>
<path d="M330,768 C352,768 378,782 390,796 C378,810 352,824 330,824 Q344,796 330,768 Z"/>
<path d="M436,742 H462 A26,21 0 0 1 462,784 H436 Z"/>
<polygon points="73,40 73,64 95,52"/>
<circle cx="100" cy="52" r="5"/>
<polygon points="151,40 151,64 173,52"/>
<circle cx="178" cy="52" r="5"/>
<polygon points="229,40 229,64 251,52"/>
<circle cx="256" cy="52" r="5"/>
<circle cx="34" cy="96" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="110" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="124" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="138" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="114" cy="176" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="190" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="222" cy="204" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="114" cy="258" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="272" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="286" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="114" cy="324" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="192" cy="338" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="222" cy="352" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="406" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="192" cy="420" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="222" cy="434" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="488" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="502" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="516" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="530" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="114" cy="568" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="582" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="222" cy="596" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="114" cy="634" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="192" cy="648" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="662" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="716" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="730" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="744" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="114" cy="782" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="192" cy="796" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="810" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="222" cy="52" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="524" y="156">a</text>
<text x="524" y="311">b</text>
<text x="426" y="426">c</text>
<text x="534" y="581">d</text>
<text x="524" y="769">g</text>
<text x="34" y="22" text-anchor="middle">A</text>
<text x="66" y="22" text-anchor="middle">B</text>
<text x="144" y="22" text-anchor="middle">C</text>
<text x="222" y="22" text-anchor="middle">D</text>
</svg>
</div>

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="74" height="118" viewBox="0 0 74 118" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(10,8) scale(1.1)"><path d="M7,4 L37,4 L33,10 L11,10 Z" fill-opacity="1"/><path d="M38,5 L38,35 L32,31 L32,11 Z" fill-opacity="1"/><path d="M38,41 L38,71 L32,65 L32,45 Z" fill-opacity="1"/><path d="M7,72 L37,72 L33,66 L11,66 Z" fill-opacity="1"/><path d="M6,41 L6,71 L12,65 L12,45 Z" fill-opacity="0.1"/><path d="M6,5 L6,35 L12,31 L12,11 Z" fill-opacity="0.1"/><path d="M7,38 L11,34 L33,34 L37,38 L33,42 L11,42 Z" fill-opacity="1"/></g>
<text x="34.2" y="108" text-anchor="middle">3</text>
</svg>
</div>

### วงจรของเลข 4 (BCD-8421, OR/AND) {code=bcd; method=orand; digit=4}

$\mathbf{Sol}^{n}$

เลข $4$ ใช้ segment $b, c, f, g$ จึงเขียนวงจรเฉพาะ segment เหล่านี้ ต่อเข้าด้วยกันเป็นวงจรเดียว : แต่ละพจน์ผลบวกใช้ OR เกต แล้วนำทุกพจน์เข้า AND เกต (พจน์ที่มีตัวแปรตัวเดียวต่อเข้า AND เกตได้เลย)

$\mathbf{Ans}\quad \begin{aligned}b &= (\overline{B}+C+\overline{D})(\overline{B}+\overline{C}+D) \\ c &= (B+\overline{C}+D) \\ f &= (A+B+\overline{D})(B+\overline{C})(\overline{C}+\overline{D}) \\ g &= (A+B+C)(\overline{B}+\overline{C}+\overline{D})\end{aligned}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="582" height="646" viewBox="0 0 582 646" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<line x1="34" y1="28" x2="34" y2="512"/>
<line x1="114" y1="52" x2="114" y2="578"/>
<line x1="66" y1="28" x2="66" y2="526"/>
<line x1="192" y1="52" x2="192" y2="592"/>
<line x1="144" y1="28" x2="144" y2="540"/>
<line x1="270" y1="52" x2="270" y2="606"/>
<line x1="222" y1="28" x2="222" y2="272"/>
<line x1="114" y1="96" x2="335.2" y2="96"/>
<line x1="144" y1="110" x2="337" y2="110"/>
<line x1="270" y1="124" x2="335.2" y2="124"/>
<line x1="390" y1="110" x2="426" y2="110"/>
<line x1="426" y1="110" x2="426" y2="136"/>
<line x1="426" y1="136" x2="436" y2="136"/>
<line x1="114" y1="162" x2="335.2" y2="162"/>
<line x1="192" y1="176" x2="337" y2="176"/>
<line x1="222" y1="190" x2="335.2" y2="190"/>
<line x1="390" y1="176" x2="416" y2="176"/>
<line x1="416" y1="176" x2="416" y2="150"/>
<line x1="416" y1="150" x2="436" y2="150"/>
<line x1="488" y1="143" x2="518" y2="143"/>
<line x1="66" y1="244" x2="335.2" y2="244"/>
<line x1="192" y1="258" x2="337" y2="258"/>
<line x1="222" y1="272" x2="335.2" y2="272"/>
<line x1="390" y1="258" x2="420" y2="258"/>
<line x1="34" y1="326" x2="335.2" y2="326"/>
<line x1="66" y1="340" x2="337" y2="340"/>
<line x1="270" y1="354" x2="335.2" y2="354"/>
<line x1="390" y1="340" x2="426" y2="340"/>
<line x1="426" y1="340" x2="426" y2="378"/>
<line x1="426" y1="378" x2="446" y2="378"/>
<line x1="66" y1="392" x2="336.2" y2="392"/>
<line x1="192" y1="406" x2="336.2" y2="406"/>
<line x1="390" y1="399" x2="416" y2="399"/>
<line x1="416" y1="399" x2="416" y2="392"/>
<line x1="416" y1="392" x2="446" y2="392"/>
<line x1="192" y1="444" x2="336.2" y2="444"/>
<line x1="270" y1="458" x2="336.2" y2="458"/>
<line x1="390" y1="451" x2="436" y2="451"/>
<line x1="436" y1="451" x2="436" y2="406"/>
<line x1="436" y1="406" x2="446" y2="406"/>
<line x1="498" y1="392" x2="528" y2="392"/>
<line x1="34" y1="512" x2="335.2" y2="512"/>
<line x1="66" y1="526" x2="337" y2="526"/>
<line x1="144" y1="540" x2="335.2" y2="540"/>
<line x1="390" y1="526" x2="426" y2="526"/>
<line x1="426" y1="526" x2="426" y2="552"/>
<line x1="426" y1="552" x2="436" y2="552"/>
<line x1="114" y1="578" x2="335.2" y2="578"/>
<line x1="192" y1="592" x2="337" y2="592"/>
<line x1="270" y1="606" x2="335.2" y2="606"/>
<line x1="390" y1="592" x2="416" y2="592"/>
<line x1="416" y1="592" x2="416" y2="566"/>
<line x1="416" y1="566" x2="436" y2="566"/>
<line x1="488" y1="559" x2="518" y2="559"/>
<line x1="66" y1="52" x2="73" y2="52"/>
<line x1="105" y1="52" x2="114" y2="52"/>
<line x1="144" y1="52" x2="151" y2="52"/>
<line x1="183" y1="52" x2="192" y2="52"/>
<line x1="222" y1="52" x2="229" y2="52"/>
<line x1="261" y1="52" x2="270" y2="52"/>
<path d="M330,82 C352,82 378,96 390,110 C378,124 352,138 330,138 Q344,110 330,82 Z"/>
<path d="M330,148 C352,148 378,162 390,176 C378,190 352,204 330,204 Q344,176 330,148 Z"/>
<path d="M436,122 H462 A26,21 0 0 1 462,164 H436 Z"/>
<path d="M330,230 C352,230 378,244 390,258 C378,272 352,286 330,286 Q344,258 330,230 Z"/>
<path d="M330,312 C352,312 378,326 390,340 C378,354 352,368 330,368 Q344,340 330,312 Z"/>
<path d="M330,378 C352,378 378,388.5 390,399 C378,409.5 352,420 330,420 Q344,399 330,378 Z"/>
<path d="M330,430 C352,430 378,440.5 390,451 C378,461.5 352,472 330,472 Q344,451 330,430 Z"/>
<path d="M446,364 H472 A26,28 0 0 1 472,420 H446 Z"/>
<path d="M330,498 C352,498 378,512 390,526 C378,540 352,554 330,554 Q344,526 330,498 Z"/>
<path d="M330,564 C352,564 378,578 390,592 C378,606 352,620 330,620 Q344,592 330,564 Z"/>
<path d="M436,538 H462 A26,21 0 0 1 462,580 H436 Z"/>
<polygon points="73,40 73,64 95,52"/>
<circle cx="100" cy="52" r="5"/>
<polygon points="151,40 151,64 173,52"/>
<circle cx="178" cy="52" r="5"/>
<polygon points="229,40 229,64 251,52"/>
<circle cx="256" cy="52" r="5"/>
<circle cx="114" cy="96" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="110" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="124" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="114" cy="162" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="192" cy="176" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="222" cy="190" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="244" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="192" cy="258" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="222" cy="272" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="326" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="340" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="354" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="392" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="192" cy="406" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="192" cy="444" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="458" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="512" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="526" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="540" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="114" cy="578" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="192" cy="592" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="606" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="222" cy="52" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="524" y="149">b</text>
<text x="426" y="264">c</text>
<text x="534" y="398">f</text>
<text x="524" y="565">g</text>
<text x="34" y="22" text-anchor="middle">A</text>
<text x="66" y="22" text-anchor="middle">B</text>
<text x="144" y="22" text-anchor="middle">C</text>
<text x="222" y="22" text-anchor="middle">D</text>
</svg>
</div>

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="74" height="118" viewBox="0 0 74 118" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(10,8) scale(1.1)"><path d="M7,4 L37,4 L33,10 L11,10 Z" fill-opacity="0.1"/><path d="M38,5 L38,35 L32,31 L32,11 Z" fill-opacity="1"/><path d="M38,41 L38,71 L32,65 L32,45 Z" fill-opacity="1"/><path d="M7,72 L37,72 L33,66 L11,66 Z" fill-opacity="0.1"/><path d="M6,41 L6,71 L12,65 L12,45 Z" fill-opacity="0.1"/><path d="M6,5 L6,35 L12,31 L12,11 Z" fill-opacity="1"/><path d="M7,38 L11,34 L33,34 L37,38 L33,42 L11,42 Z" fill-opacity="1"/></g>
<text x="34.2" y="108" text-anchor="middle">4</text>
</svg>
</div>

### วงจรของเลข 5 (BCD-8421, OR/AND) {code=bcd; method=orand; digit=5}

$\mathbf{Sol}^{n}$

เลข $5$ ใช้ segment $a, c, d, f, g$ จึงเขียนวงจรเฉพาะ segment เหล่านี้ ต่อเข้าด้วยกันเป็นวงจรเดียว : แต่ละพจน์ผลบวกใช้ OR เกต แล้วนำทุกพจน์เข้า AND เกต (พจน์ที่มีตัวแปรตัวเดียวต่อเข้า AND เกตได้เลย)

$\mathbf{Ans}\quad \begin{aligned}a &= (A+B+C+\overline{D})(\overline{B}+C+D) \\ c &= (B+\overline{C}+D) \\ d &= (A+B+C+\overline{D})(\overline{B}+C+D)(\overline{B}+\overline{C}+\overline{D}) \\ f &= (A+B+\overline{D})(B+\overline{C})(\overline{C}+\overline{D}) \\ g &= (A+B+C)(\overline{B}+\overline{C}+\overline{D})\end{aligned}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="582" height="888" viewBox="0 0 582 888" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<line x1="34" y1="28" x2="34" y2="754"/>
<line x1="114" y1="52" x2="114" y2="820"/>
<line x1="66" y1="28" x2="66" y2="768"/>
<line x1="192" y1="52" x2="192" y2="834"/>
<line x1="144" y1="28" x2="144" y2="782"/>
<line x1="270" y1="52" x2="270" y2="848"/>
<line x1="222" y1="28" x2="222" y2="448"/>
<line x1="34" y1="96" x2="334.5" y2="96"/>
<line x1="66" y1="110" x2="336.7" y2="110"/>
<line x1="144" y1="124" x2="336.7" y2="124"/>
<line x1="270" y1="138" x2="334.5" y2="138"/>
<line x1="390" y1="117" x2="416" y2="117"/>
<line x1="416" y1="117" x2="416" y2="143"/>
<line x1="416" y1="143" x2="436" y2="143"/>
<line x1="114" y1="176" x2="335.2" y2="176"/>
<line x1="144" y1="190" x2="337" y2="190"/>
<line x1="222" y1="204" x2="335.2" y2="204"/>
<line x1="390" y1="190" x2="426" y2="190"/>
<line x1="426" y1="190" x2="426" y2="157"/>
<line x1="426" y1="157" x2="436" y2="157"/>
<line x1="488" y1="150" x2="518" y2="150"/>
<line x1="66" y1="258" x2="335.2" y2="258"/>
<line x1="192" y1="272" x2="337" y2="272"/>
<line x1="222" y1="286" x2="335.2" y2="286"/>
<line x1="390" y1="272" x2="420" y2="272"/>
<line x1="34" y1="340" x2="334.5" y2="340"/>
<line x1="66" y1="354" x2="336.7" y2="354"/>
<line x1="144" y1="368" x2="336.7" y2="368"/>
<line x1="270" y1="382" x2="334.5" y2="382"/>
<line x1="390" y1="361" x2="426" y2="361"/>
<line x1="426" y1="361" x2="426" y2="413"/>
<line x1="426" y1="413" x2="446" y2="413"/>
<line x1="114" y1="420" x2="335.2" y2="420"/>
<line x1="144" y1="434" x2="337" y2="434"/>
<line x1="222" y1="448" x2="335.2" y2="448"/>
<line x1="390" y1="434" x2="416" y2="434"/>
<line x1="416" y1="434" x2="416" y2="427"/>
<line x1="416" y1="427" x2="446" y2="427"/>
<line x1="114" y1="486" x2="335.2" y2="486"/>
<line x1="192" y1="500" x2="337" y2="500"/>
<line x1="270" y1="514" x2="335.2" y2="514"/>
<line x1="390" y1="500" x2="436" y2="500"/>
<line x1="436" y1="500" x2="436" y2="441"/>
<line x1="436" y1="441" x2="446" y2="441"/>
<line x1="498" y1="427" x2="528" y2="427"/>
<line x1="34" y1="568" x2="335.2" y2="568"/>
<line x1="66" y1="582" x2="337" y2="582"/>
<line x1="270" y1="596" x2="335.2" y2="596"/>
<line x1="390" y1="582" x2="426" y2="582"/>
<line x1="426" y1="582" x2="426" y2="620"/>
<line x1="426" y1="620" x2="446" y2="620"/>
<line x1="66" y1="634" x2="336.2" y2="634"/>
<line x1="192" y1="648" x2="336.2" y2="648"/>
<line x1="390" y1="641" x2="416" y2="641"/>
<line x1="416" y1="641" x2="416" y2="634"/>
<line x1="416" y1="634" x2="446" y2="634"/>
<line x1="192" y1="686" x2="336.2" y2="686"/>
<line x1="270" y1="700" x2="336.2" y2="700"/>
<line x1="390" y1="693" x2="436" y2="693"/>
<line x1="436" y1="693" x2="436" y2="648"/>
<line x1="436" y1="648" x2="446" y2="648"/>
<line x1="498" y1="634" x2="528" y2="634"/>
<line x1="34" y1="754" x2="335.2" y2="754"/>
<line x1="66" y1="768" x2="337" y2="768"/>
<line x1="144" y1="782" x2="335.2" y2="782"/>
<line x1="390" y1="768" x2="426" y2="768"/>
<line x1="426" y1="768" x2="426" y2="794"/>
<line x1="426" y1="794" x2="436" y2="794"/>
<line x1="114" y1="820" x2="335.2" y2="820"/>
<line x1="192" y1="834" x2="337" y2="834"/>
<line x1="270" y1="848" x2="335.2" y2="848"/>
<line x1="390" y1="834" x2="416" y2="834"/>
<line x1="416" y1="834" x2="416" y2="808"/>
<line x1="416" y1="808" x2="436" y2="808"/>
<line x1="488" y1="801" x2="518" y2="801"/>
<line x1="66" y1="52" x2="73" y2="52"/>
<line x1="105" y1="52" x2="114" y2="52"/>
<line x1="144" y1="52" x2="151" y2="52"/>
<line x1="183" y1="52" x2="192" y2="52"/>
<line x1="222" y1="52" x2="229" y2="52"/>
<line x1="261" y1="52" x2="270" y2="52"/>
<path d="M330,82 C352,82 378,99.5 390,117 C378,134.5 352,152 330,152 Q344,117 330,82 Z"/>
<path d="M330,162 C352,162 378,176 390,190 C378,204 352,218 330,218 Q344,190 330,162 Z"/>
<path d="M436,129 H462 A26,21 0 0 1 462,171 H436 Z"/>
<path d="M330,244 C352,244 378,258 390,272 C378,286 352,300 330,300 Q344,272 330,244 Z"/>
<path d="M330,326 C352,326 378,343.5 390,361 C378,378.5 352,396 330,396 Q344,361 330,326 Z"/>
<path d="M330,406 C352,406 378,420 390,434 C378,448 352,462 330,462 Q344,434 330,406 Z"/>
<path d="M330,472 C352,472 378,486 390,500 C378,514 352,528 330,528 Q344,500 330,472 Z"/>
<path d="M446,399 H472 A26,28 0 0 1 472,455 H446 Z"/>
<path d="M330,554 C352,554 378,568 390,582 C378,596 352,610 330,610 Q344,582 330,554 Z"/>
<path d="M330,620 C352,620 378,630.5 390,641 C378,651.5 352,662 330,662 Q344,641 330,620 Z"/>
<path d="M330,672 C352,672 378,682.5 390,693 C378,703.5 352,714 330,714 Q344,693 330,672 Z"/>
<path d="M446,606 H472 A26,28 0 0 1 472,662 H446 Z"/>
<path d="M330,740 C352,740 378,754 390,768 C378,782 352,796 330,796 Q344,768 330,740 Z"/>
<path d="M330,806 C352,806 378,820 390,834 C378,848 352,862 330,862 Q344,834 330,806 Z"/>
<path d="M436,780 H462 A26,21 0 0 1 462,822 H436 Z"/>
<polygon points="73,40 73,64 95,52"/>
<circle cx="100" cy="52" r="5"/>
<polygon points="151,40 151,64 173,52"/>
<circle cx="178" cy="52" r="5"/>
<polygon points="229,40 229,64 251,52"/>
<circle cx="256" cy="52" r="5"/>
<circle cx="34" cy="96" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="110" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="124" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="138" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="114" cy="176" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="190" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="222" cy="204" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="258" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="192" cy="272" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="222" cy="286" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="340" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="354" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="368" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="382" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="114" cy="420" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="434" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="222" cy="448" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="114" cy="486" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="192" cy="500" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="514" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="568" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="582" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="596" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="634" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="192" cy="648" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="192" cy="686" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="700" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="754" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="768" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="782" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="114" cy="820" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="192" cy="834" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="848" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="222" cy="52" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="524" y="156">a</text>
<text x="426" y="278">c</text>
<text x="534" y="433">d</text>
<text x="534" y="640">f</text>
<text x="524" y="807">g</text>
<text x="34" y="22" text-anchor="middle">A</text>
<text x="66" y="22" text-anchor="middle">B</text>
<text x="144" y="22" text-anchor="middle">C</text>
<text x="222" y="22" text-anchor="middle">D</text>
</svg>
</div>

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="74" height="118" viewBox="0 0 74 118" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(10,8) scale(1.1)"><path d="M7,4 L37,4 L33,10 L11,10 Z" fill-opacity="1"/><path d="M38,5 L38,35 L32,31 L32,11 Z" fill-opacity="0.1"/><path d="M38,41 L38,71 L32,65 L32,45 Z" fill-opacity="1"/><path d="M7,72 L37,72 L33,66 L11,66 Z" fill-opacity="1"/><path d="M6,41 L6,71 L12,65 L12,45 Z" fill-opacity="0.1"/><path d="M6,5 L6,35 L12,31 L12,11 Z" fill-opacity="1"/><path d="M7,38 L11,34 L33,34 L37,38 L33,42 L11,42 Z" fill-opacity="1"/></g>
<text x="34.2" y="108" text-anchor="middle">5</text>
</svg>
</div>

### วงจรของเลข 6 (BCD-8421, OR/AND) {code=bcd; method=orand; digit=6}

$\mathbf{Sol}^{n}$

เลข $6$ ใช้ segment $a, c, d, e, f, g$ จึงเขียนวงจรเฉพาะ segment เหล่านี้ ต่อเข้าด้วยกันเป็นวงจรเดียว : แต่ละพจน์ผลบวกใช้ OR เกต แล้วนำทุกพจน์เข้า AND เกต (พจน์ที่มีตัวแปรตัวเดียวต่อเข้า AND เกตได้เลย)

$\mathbf{Ans}\quad \begin{aligned}a &= (A+B+C+\overline{D})(\overline{B}+C+D) \\ c &= (B+\overline{C}+D) \\ d &= (A+B+C+\overline{D})(\overline{B}+C+D)(\overline{B}+\overline{C}+\overline{D}) \\ e &= (\overline{D})(\overline{B}+C) \\ f &= (A+B+\overline{D})(B+\overline{C})(\overline{C}+\overline{D}) \\ g &= (A+B+C)(\overline{B}+\overline{C}+\overline{D})\end{aligned}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="582" height="980" viewBox="0 0 582 980" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<line x1="34" y1="28" x2="34" y2="846"/>
<line x1="114" y1="52" x2="114" y2="912"/>
<line x1="66" y1="28" x2="66" y2="860"/>
<line x1="192" y1="52" x2="192" y2="926"/>
<line x1="144" y1="28" x2="144" y2="874"/>
<line x1="270" y1="52" x2="270" y2="940"/>
<line x1="222" y1="28" x2="222" y2="448"/>
<line x1="34" y1="96" x2="334.5" y2="96"/>
<line x1="66" y1="110" x2="336.7" y2="110"/>
<line x1="144" y1="124" x2="336.7" y2="124"/>
<line x1="270" y1="138" x2="334.5" y2="138"/>
<line x1="390" y1="117" x2="416" y2="117"/>
<line x1="416" y1="117" x2="416" y2="143"/>
<line x1="416" y1="143" x2="436" y2="143"/>
<line x1="114" y1="176" x2="335.2" y2="176"/>
<line x1="144" y1="190" x2="337" y2="190"/>
<line x1="222" y1="204" x2="335.2" y2="204"/>
<line x1="390" y1="190" x2="426" y2="190"/>
<line x1="426" y1="190" x2="426" y2="157"/>
<line x1="426" y1="157" x2="436" y2="157"/>
<line x1="488" y1="150" x2="518" y2="150"/>
<line x1="66" y1="258" x2="335.2" y2="258"/>
<line x1="192" y1="272" x2="337" y2="272"/>
<line x1="222" y1="286" x2="335.2" y2="286"/>
<line x1="390" y1="272" x2="420" y2="272"/>
<line x1="34" y1="340" x2="334.5" y2="340"/>
<line x1="66" y1="354" x2="336.7" y2="354"/>
<line x1="144" y1="368" x2="336.7" y2="368"/>
<line x1="270" y1="382" x2="334.5" y2="382"/>
<line x1="390" y1="361" x2="426" y2="361"/>
<line x1="426" y1="361" x2="426" y2="413"/>
<line x1="426" y1="413" x2="446" y2="413"/>
<line x1="114" y1="420" x2="335.2" y2="420"/>
<line x1="144" y1="434" x2="337" y2="434"/>
<line x1="222" y1="448" x2="335.2" y2="448"/>
<line x1="390" y1="434" x2="416" y2="434"/>
<line x1="416" y1="434" x2="416" y2="427"/>
<line x1="416" y1="427" x2="446" y2="427"/>
<line x1="114" y1="486" x2="335.2" y2="486"/>
<line x1="192" y1="500" x2="337" y2="500"/>
<line x1="270" y1="514" x2="335.2" y2="514"/>
<line x1="390" y1="500" x2="436" y2="500"/>
<line x1="436" y1="500" x2="436" y2="441"/>
<line x1="436" y1="441" x2="446" y2="441"/>
<line x1="498" y1="427" x2="528" y2="427"/>
<line x1="270" y1="561" x2="426" y2="561"/>
<line x1="426" y1="561" x2="426" y2="580"/>
<line x1="426" y1="580" x2="436" y2="580"/>
<line x1="114" y1="592" x2="336.2" y2="592"/>
<line x1="144" y1="606" x2="336.2" y2="606"/>
<line x1="390" y1="599" x2="416" y2="599"/>
<line x1="416" y1="599" x2="416" y2="594"/>
<line x1="416" y1="594" x2="436" y2="594"/>
<line x1="488" y1="587" x2="518" y2="587"/>
<line x1="34" y1="660" x2="335.2" y2="660"/>
<line x1="66" y1="674" x2="337" y2="674"/>
<line x1="270" y1="688" x2="335.2" y2="688"/>
<line x1="390" y1="674" x2="426" y2="674"/>
<line x1="426" y1="674" x2="426" y2="712"/>
<line x1="426" y1="712" x2="446" y2="712"/>
<line x1="66" y1="726" x2="336.2" y2="726"/>
<line x1="192" y1="740" x2="336.2" y2="740"/>
<line x1="390" y1="733" x2="416" y2="733"/>
<line x1="416" y1="733" x2="416" y2="726"/>
<line x1="416" y1="726" x2="446" y2="726"/>
<line x1="192" y1="778" x2="336.2" y2="778"/>
<line x1="270" y1="792" x2="336.2" y2="792"/>
<line x1="390" y1="785" x2="436" y2="785"/>
<line x1="436" y1="785" x2="436" y2="740"/>
<line x1="436" y1="740" x2="446" y2="740"/>
<line x1="498" y1="726" x2="528" y2="726"/>
<line x1="34" y1="846" x2="335.2" y2="846"/>
<line x1="66" y1="860" x2="337" y2="860"/>
<line x1="144" y1="874" x2="335.2" y2="874"/>
<line x1="390" y1="860" x2="426" y2="860"/>
<line x1="426" y1="860" x2="426" y2="886"/>
<line x1="426" y1="886" x2="436" y2="886"/>
<line x1="114" y1="912" x2="335.2" y2="912"/>
<line x1="192" y1="926" x2="337" y2="926"/>
<line x1="270" y1="940" x2="335.2" y2="940"/>
<line x1="390" y1="926" x2="416" y2="926"/>
<line x1="416" y1="926" x2="416" y2="900"/>
<line x1="416" y1="900" x2="436" y2="900"/>
<line x1="488" y1="893" x2="518" y2="893"/>
<line x1="66" y1="52" x2="73" y2="52"/>
<line x1="105" y1="52" x2="114" y2="52"/>
<line x1="144" y1="52" x2="151" y2="52"/>
<line x1="183" y1="52" x2="192" y2="52"/>
<line x1="222" y1="52" x2="229" y2="52"/>
<line x1="261" y1="52" x2="270" y2="52"/>
<path d="M330,82 C352,82 378,99.5 390,117 C378,134.5 352,152 330,152 Q344,117 330,82 Z"/>
<path d="M330,162 C352,162 378,176 390,190 C378,204 352,218 330,218 Q344,190 330,162 Z"/>
<path d="M436,129 H462 A26,21 0 0 1 462,171 H436 Z"/>
<path d="M330,244 C352,244 378,258 390,272 C378,286 352,300 330,300 Q344,272 330,244 Z"/>
<path d="M330,326 C352,326 378,343.5 390,361 C378,378.5 352,396 330,396 Q344,361 330,326 Z"/>
<path d="M330,406 C352,406 378,420 390,434 C378,448 352,462 330,462 Q344,434 330,406 Z"/>
<path d="M330,472 C352,472 378,486 390,500 C378,514 352,528 330,528 Q344,500 330,472 Z"/>
<path d="M446,399 H472 A26,28 0 0 1 472,455 H446 Z"/>
<path d="M330,578 C352,578 378,588.5 390,599 C378,609.5 352,620 330,620 Q344,599 330,578 Z"/>
<path d="M436,566 H462 A26,21 0 0 1 462,608 H436 Z"/>
<path d="M330,646 C352,646 378,660 390,674 C378,688 352,702 330,702 Q344,674 330,646 Z"/>
<path d="M330,712 C352,712 378,722.5 390,733 C378,743.5 352,754 330,754 Q344,733 330,712 Z"/>
<path d="M330,764 C352,764 378,774.5 390,785 C378,795.5 352,806 330,806 Q344,785 330,764 Z"/>
<path d="M446,698 H472 A26,28 0 0 1 472,754 H446 Z"/>
<path d="M330,832 C352,832 378,846 390,860 C378,874 352,888 330,888 Q344,860 330,832 Z"/>
<path d="M330,898 C352,898 378,912 390,926 C378,940 352,954 330,954 Q344,926 330,898 Z"/>
<path d="M436,872 H462 A26,21 0 0 1 462,914 H436 Z"/>
<polygon points="73,40 73,64 95,52"/>
<circle cx="100" cy="52" r="5"/>
<polygon points="151,40 151,64 173,52"/>
<circle cx="178" cy="52" r="5"/>
<polygon points="229,40 229,64 251,52"/>
<circle cx="256" cy="52" r="5"/>
<circle cx="34" cy="96" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="110" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="124" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="138" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="114" cy="176" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="190" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="222" cy="204" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="258" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="192" cy="272" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="222" cy="286" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="340" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="354" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="368" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="382" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="114" cy="420" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="434" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="222" cy="448" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="114" cy="486" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="192" cy="500" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="514" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="561" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="114" cy="592" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="606" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="660" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="674" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="688" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="726" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="192" cy="740" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="192" cy="778" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="792" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="846" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="860" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="874" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="114" cy="912" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="192" cy="926" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="940" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="222" cy="52" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="524" y="156">a</text>
<text x="426" y="278">c</text>
<text x="534" y="433">d</text>
<text x="524" y="593">e</text>
<text x="534" y="732">f</text>
<text x="524" y="899">g</text>
<text x="34" y="22" text-anchor="middle">A</text>
<text x="66" y="22" text-anchor="middle">B</text>
<text x="144" y="22" text-anchor="middle">C</text>
<text x="222" y="22" text-anchor="middle">D</text>
</svg>
</div>

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="74" height="118" viewBox="0 0 74 118" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(10,8) scale(1.1)"><path d="M7,4 L37,4 L33,10 L11,10 Z" fill-opacity="1"/><path d="M38,5 L38,35 L32,31 L32,11 Z" fill-opacity="0.1"/><path d="M38,41 L38,71 L32,65 L32,45 Z" fill-opacity="1"/><path d="M7,72 L37,72 L33,66 L11,66 Z" fill-opacity="1"/><path d="M6,41 L6,71 L12,65 L12,45 Z" fill-opacity="1"/><path d="M6,5 L6,35 L12,31 L12,11 Z" fill-opacity="1"/><path d="M7,38 L11,34 L33,34 L37,38 L33,42 L11,42 Z" fill-opacity="1"/></g>
<text x="34.2" y="108" text-anchor="middle">6</text>
</svg>
</div>

### วงจรของเลข 7 (BCD-8421, OR/AND) {code=bcd; method=orand; digit=7}

$\mathbf{Sol}^{n}$

เลข $7$ ใช้ segment $a, b, c$ จึงเขียนวงจรเฉพาะ segment เหล่านี้ ต่อเข้าด้วยกันเป็นวงจรเดียว : แต่ละพจน์ผลบวกใช้ OR เกต แล้วนำทุกพจน์เข้า AND เกต (พจน์ที่มีตัวแปรตัวเดียวต่อเข้า AND เกตได้เลย)

$\mathbf{Ans}\quad \begin{aligned}a &= (A+B+C+\overline{D})(\overline{B}+C+D) \\ b &= (\overline{B}+C+\overline{D})(\overline{B}+\overline{C}+D) \\ c &= (B+\overline{C}+D)\end{aligned}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="572" height="474" viewBox="0 0 572 474" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<line x1="34" y1="28" x2="34" y2="96"/>
<line x1="114" y1="52" x2="114" y2="324"/>
<line x1="66" y1="28" x2="66" y2="406"/>
<line x1="192" y1="52" x2="192" y2="420"/>
<line x1="144" y1="28" x2="144" y2="272"/>
<line x1="270" y1="52" x2="270" y2="286"/>
<line x1="222" y1="28" x2="222" y2="434"/>
<line x1="34" y1="96" x2="334.5" y2="96"/>
<line x1="66" y1="110" x2="336.7" y2="110"/>
<line x1="144" y1="124" x2="336.7" y2="124"/>
<line x1="270" y1="138" x2="334.5" y2="138"/>
<line x1="390" y1="117" x2="416" y2="117"/>
<line x1="416" y1="117" x2="416" y2="143"/>
<line x1="416" y1="143" x2="436" y2="143"/>
<line x1="114" y1="176" x2="335.2" y2="176"/>
<line x1="144" y1="190" x2="337" y2="190"/>
<line x1="222" y1="204" x2="335.2" y2="204"/>
<line x1="390" y1="190" x2="426" y2="190"/>
<line x1="426" y1="190" x2="426" y2="157"/>
<line x1="426" y1="157" x2="436" y2="157"/>
<line x1="488" y1="150" x2="518" y2="150"/>
<line x1="114" y1="258" x2="335.2" y2="258"/>
<line x1="144" y1="272" x2="337" y2="272"/>
<line x1="270" y1="286" x2="335.2" y2="286"/>
<line x1="390" y1="272" x2="426" y2="272"/>
<line x1="426" y1="272" x2="426" y2="298"/>
<line x1="426" y1="298" x2="436" y2="298"/>
<line x1="114" y1="324" x2="335.2" y2="324"/>
<line x1="192" y1="338" x2="337" y2="338"/>
<line x1="222" y1="352" x2="335.2" y2="352"/>
<line x1="390" y1="338" x2="416" y2="338"/>
<line x1="416" y1="338" x2="416" y2="312"/>
<line x1="416" y1="312" x2="436" y2="312"/>
<line x1="488" y1="305" x2="518" y2="305"/>
<line x1="66" y1="406" x2="335.2" y2="406"/>
<line x1="192" y1="420" x2="337" y2="420"/>
<line x1="222" y1="434" x2="335.2" y2="434"/>
<line x1="390" y1="420" x2="420" y2="420"/>
<line x1="66" y1="52" x2="73" y2="52"/>
<line x1="105" y1="52" x2="114" y2="52"/>
<line x1="144" y1="52" x2="151" y2="52"/>
<line x1="183" y1="52" x2="192" y2="52"/>
<line x1="222" y1="52" x2="229" y2="52"/>
<line x1="261" y1="52" x2="270" y2="52"/>
<path d="M330,82 C352,82 378,99.5 390,117 C378,134.5 352,152 330,152 Q344,117 330,82 Z"/>
<path d="M330,162 C352,162 378,176 390,190 C378,204 352,218 330,218 Q344,190 330,162 Z"/>
<path d="M436,129 H462 A26,21 0 0 1 462,171 H436 Z"/>
<path d="M330,244 C352,244 378,258 390,272 C378,286 352,300 330,300 Q344,272 330,244 Z"/>
<path d="M330,310 C352,310 378,324 390,338 C378,352 352,366 330,366 Q344,338 330,310 Z"/>
<path d="M436,284 H462 A26,21 0 0 1 462,326 H436 Z"/>
<path d="M330,392 C352,392 378,406 390,420 C378,434 352,448 330,448 Q344,420 330,392 Z"/>
<polygon points="73,40 73,64 95,52"/>
<circle cx="100" cy="52" r="5"/>
<polygon points="151,40 151,64 173,52"/>
<circle cx="178" cy="52" r="5"/>
<polygon points="229,40 229,64 251,52"/>
<circle cx="256" cy="52" r="5"/>
<circle cx="34" cy="96" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="110" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="124" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="138" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="114" cy="176" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="190" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="222" cy="204" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="114" cy="258" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="272" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="286" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="114" cy="324" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="192" cy="338" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="222" cy="352" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="406" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="192" cy="420" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="222" cy="434" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="222" cy="52" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="524" y="156">a</text>
<text x="524" y="311">b</text>
<text x="426" y="426">c</text>
<text x="34" y="22" text-anchor="middle">A</text>
<text x="66" y="22" text-anchor="middle">B</text>
<text x="144" y="22" text-anchor="middle">C</text>
<text x="222" y="22" text-anchor="middle">D</text>
</svg>
</div>

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="74" height="118" viewBox="0 0 74 118" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(10,8) scale(1.1)"><path d="M7,4 L37,4 L33,10 L11,10 Z" fill-opacity="1"/><path d="M38,5 L38,35 L32,31 L32,11 Z" fill-opacity="1"/><path d="M38,41 L38,71 L32,65 L32,45 Z" fill-opacity="1"/><path d="M7,72 L37,72 L33,66 L11,66 Z" fill-opacity="0.1"/><path d="M6,41 L6,71 L12,65 L12,45 Z" fill-opacity="0.1"/><path d="M6,5 L6,35 L12,31 L12,11 Z" fill-opacity="0.1"/><path d="M7,38 L11,34 L33,34 L37,38 L33,42 L11,42 Z" fill-opacity="0.1"/></g>
<text x="34.2" y="108" text-anchor="middle">7</text>
</svg>
</div>

### วงจรของเลข 8 (BCD-8421, OR/AND) {code=bcd; method=orand; digit=8}

$\mathbf{Sol}^{n}$

เลข $8$ ใช้ segment $a, b, c, d, e, f, g$ จึงเขียนวงจรเฉพาะ segment เหล่านี้ ต่อเข้าด้วยกันเป็นวงจรเดียว : แต่ละพจน์ผลบวกใช้ OR เกต แล้วนำทุกพจน์เข้า AND เกต (พจน์ที่มีตัวแปรตัวเดียวต่อเข้า AND เกตได้เลย)

$\mathbf{Ans}\quad \begin{aligned}a &= (A+B+C+\overline{D})(\overline{B}+C+D) \\ b &= (\overline{B}+C+\overline{D})(\overline{B}+\overline{C}+D) \\ c &= (B+\overline{C}+D) \\ d &= (A+B+C+\overline{D})(\overline{B}+C+D)(\overline{B}+\overline{C}+\overline{D}) \\ e &= (\overline{D})(\overline{B}+C) \\ f &= (A+B+\overline{D})(B+\overline{C})(\overline{C}+\overline{D}) \\ g &= (A+B+C)(\overline{B}+\overline{C}+\overline{D})\end{aligned}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="582" height="1128" viewBox="0 0 582 1128" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<line x1="34" y1="28" x2="34" y2="994"/>
<line x1="114" y1="52" x2="114" y2="1060"/>
<line x1="66" y1="28" x2="66" y2="1008"/>
<line x1="192" y1="52" x2="192" y2="1074"/>
<line x1="144" y1="28" x2="144" y2="1022"/>
<line x1="270" y1="52" x2="270" y2="1088"/>
<line x1="222" y1="28" x2="222" y2="596"/>
<line x1="34" y1="96" x2="334.5" y2="96"/>
<line x1="66" y1="110" x2="336.7" y2="110"/>
<line x1="144" y1="124" x2="336.7" y2="124"/>
<line x1="270" y1="138" x2="334.5" y2="138"/>
<line x1="390" y1="117" x2="416" y2="117"/>
<line x1="416" y1="117" x2="416" y2="143"/>
<line x1="416" y1="143" x2="436" y2="143"/>
<line x1="114" y1="176" x2="335.2" y2="176"/>
<line x1="144" y1="190" x2="337" y2="190"/>
<line x1="222" y1="204" x2="335.2" y2="204"/>
<line x1="390" y1="190" x2="426" y2="190"/>
<line x1="426" y1="190" x2="426" y2="157"/>
<line x1="426" y1="157" x2="436" y2="157"/>
<line x1="488" y1="150" x2="518" y2="150"/>
<line x1="114" y1="258" x2="335.2" y2="258"/>
<line x1="144" y1="272" x2="337" y2="272"/>
<line x1="270" y1="286" x2="335.2" y2="286"/>
<line x1="390" y1="272" x2="426" y2="272"/>
<line x1="426" y1="272" x2="426" y2="298"/>
<line x1="426" y1="298" x2="436" y2="298"/>
<line x1="114" y1="324" x2="335.2" y2="324"/>
<line x1="192" y1="338" x2="337" y2="338"/>
<line x1="222" y1="352" x2="335.2" y2="352"/>
<line x1="390" y1="338" x2="416" y2="338"/>
<line x1="416" y1="338" x2="416" y2="312"/>
<line x1="416" y1="312" x2="436" y2="312"/>
<line x1="488" y1="305" x2="518" y2="305"/>
<line x1="66" y1="406" x2="335.2" y2="406"/>
<line x1="192" y1="420" x2="337" y2="420"/>
<line x1="222" y1="434" x2="335.2" y2="434"/>
<line x1="390" y1="420" x2="420" y2="420"/>
<line x1="34" y1="488" x2="334.5" y2="488"/>
<line x1="66" y1="502" x2="336.7" y2="502"/>
<line x1="144" y1="516" x2="336.7" y2="516"/>
<line x1="270" y1="530" x2="334.5" y2="530"/>
<line x1="390" y1="509" x2="426" y2="509"/>
<line x1="426" y1="509" x2="426" y2="561"/>
<line x1="426" y1="561" x2="446" y2="561"/>
<line x1="114" y1="568" x2="335.2" y2="568"/>
<line x1="144" y1="582" x2="337" y2="582"/>
<line x1="222" y1="596" x2="335.2" y2="596"/>
<line x1="390" y1="582" x2="416" y2="582"/>
<line x1="416" y1="582" x2="416" y2="575"/>
<line x1="416" y1="575" x2="446" y2="575"/>
<line x1="114" y1="634" x2="335.2" y2="634"/>
<line x1="192" y1="648" x2="337" y2="648"/>
<line x1="270" y1="662" x2="335.2" y2="662"/>
<line x1="390" y1="648" x2="436" y2="648"/>
<line x1="436" y1="648" x2="436" y2="589"/>
<line x1="436" y1="589" x2="446" y2="589"/>
<line x1="498" y1="575" x2="528" y2="575"/>
<line x1="270" y1="709" x2="426" y2="709"/>
<line x1="426" y1="709" x2="426" y2="728"/>
<line x1="426" y1="728" x2="436" y2="728"/>
<line x1="114" y1="740" x2="336.2" y2="740"/>
<line x1="144" y1="754" x2="336.2" y2="754"/>
<line x1="390" y1="747" x2="416" y2="747"/>
<line x1="416" y1="747" x2="416" y2="742"/>
<line x1="416" y1="742" x2="436" y2="742"/>
<line x1="488" y1="735" x2="518" y2="735"/>
<line x1="34" y1="808" x2="335.2" y2="808"/>
<line x1="66" y1="822" x2="337" y2="822"/>
<line x1="270" y1="836" x2="335.2" y2="836"/>
<line x1="390" y1="822" x2="426" y2="822"/>
<line x1="426" y1="822" x2="426" y2="860"/>
<line x1="426" y1="860" x2="446" y2="860"/>
<line x1="66" y1="874" x2="336.2" y2="874"/>
<line x1="192" y1="888" x2="336.2" y2="888"/>
<line x1="390" y1="881" x2="416" y2="881"/>
<line x1="416" y1="881" x2="416" y2="874"/>
<line x1="416" y1="874" x2="446" y2="874"/>
<line x1="192" y1="926" x2="336.2" y2="926"/>
<line x1="270" y1="940" x2="336.2" y2="940"/>
<line x1="390" y1="933" x2="436" y2="933"/>
<line x1="436" y1="933" x2="436" y2="888"/>
<line x1="436" y1="888" x2="446" y2="888"/>
<line x1="498" y1="874" x2="528" y2="874"/>
<line x1="34" y1="994" x2="335.2" y2="994"/>
<line x1="66" y1="1008" x2="337" y2="1008"/>
<line x1="144" y1="1022" x2="335.2" y2="1022"/>
<line x1="390" y1="1008" x2="426" y2="1008"/>
<line x1="426" y1="1008" x2="426" y2="1034"/>
<line x1="426" y1="1034" x2="436" y2="1034"/>
<line x1="114" y1="1060" x2="335.2" y2="1060"/>
<line x1="192" y1="1074" x2="337" y2="1074"/>
<line x1="270" y1="1088" x2="335.2" y2="1088"/>
<line x1="390" y1="1074" x2="416" y2="1074"/>
<line x1="416" y1="1074" x2="416" y2="1048"/>
<line x1="416" y1="1048" x2="436" y2="1048"/>
<line x1="488" y1="1041" x2="518" y2="1041"/>
<line x1="66" y1="52" x2="73" y2="52"/>
<line x1="105" y1="52" x2="114" y2="52"/>
<line x1="144" y1="52" x2="151" y2="52"/>
<line x1="183" y1="52" x2="192" y2="52"/>
<line x1="222" y1="52" x2="229" y2="52"/>
<line x1="261" y1="52" x2="270" y2="52"/>
<path d="M330,82 C352,82 378,99.5 390,117 C378,134.5 352,152 330,152 Q344,117 330,82 Z"/>
<path d="M330,162 C352,162 378,176 390,190 C378,204 352,218 330,218 Q344,190 330,162 Z"/>
<path d="M436,129 H462 A26,21 0 0 1 462,171 H436 Z"/>
<path d="M330,244 C352,244 378,258 390,272 C378,286 352,300 330,300 Q344,272 330,244 Z"/>
<path d="M330,310 C352,310 378,324 390,338 C378,352 352,366 330,366 Q344,338 330,310 Z"/>
<path d="M436,284 H462 A26,21 0 0 1 462,326 H436 Z"/>
<path d="M330,392 C352,392 378,406 390,420 C378,434 352,448 330,448 Q344,420 330,392 Z"/>
<path d="M330,474 C352,474 378,491.5 390,509 C378,526.5 352,544 330,544 Q344,509 330,474 Z"/>
<path d="M330,554 C352,554 378,568 390,582 C378,596 352,610 330,610 Q344,582 330,554 Z"/>
<path d="M330,620 C352,620 378,634 390,648 C378,662 352,676 330,676 Q344,648 330,620 Z"/>
<path d="M446,547 H472 A26,28 0 0 1 472,603 H446 Z"/>
<path d="M330,726 C352,726 378,736.5 390,747 C378,757.5 352,768 330,768 Q344,747 330,726 Z"/>
<path d="M436,714 H462 A26,21 0 0 1 462,756 H436 Z"/>
<path d="M330,794 C352,794 378,808 390,822 C378,836 352,850 330,850 Q344,822 330,794 Z"/>
<path d="M330,860 C352,860 378,870.5 390,881 C378,891.5 352,902 330,902 Q344,881 330,860 Z"/>
<path d="M330,912 C352,912 378,922.5 390,933 C378,943.5 352,954 330,954 Q344,933 330,912 Z"/>
<path d="M446,846 H472 A26,28 0 0 1 472,902 H446 Z"/>
<path d="M330,980 C352,980 378,994 390,1008 C378,1022 352,1036 330,1036 Q344,1008 330,980 Z"/>
<path d="M330,1046 C352,1046 378,1060 390,1074 C378,1088 352,1102 330,1102 Q344,1074 330,1046 Z"/>
<path d="M436,1020 H462 A26,21 0 0 1 462,1062 H436 Z"/>
<polygon points="73,40 73,64 95,52"/>
<circle cx="100" cy="52" r="5"/>
<polygon points="151,40 151,64 173,52"/>
<circle cx="178" cy="52" r="5"/>
<polygon points="229,40 229,64 251,52"/>
<circle cx="256" cy="52" r="5"/>
<circle cx="34" cy="96" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="110" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="124" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="138" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="114" cy="176" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="190" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="222" cy="204" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="114" cy="258" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="272" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="286" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="114" cy="324" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="192" cy="338" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="222" cy="352" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="406" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="192" cy="420" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="222" cy="434" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="488" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="502" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="516" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="530" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="114" cy="568" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="582" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="222" cy="596" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="114" cy="634" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="192" cy="648" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="662" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="709" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="114" cy="740" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="754" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="808" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="822" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="836" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="874" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="192" cy="888" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="192" cy="926" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="940" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="994" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="1008" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="1022" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="114" cy="1060" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="192" cy="1074" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="1088" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="222" cy="52" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="524" y="156">a</text>
<text x="524" y="311">b</text>
<text x="426" y="426">c</text>
<text x="534" y="581">d</text>
<text x="524" y="741">e</text>
<text x="534" y="880">f</text>
<text x="524" y="1047">g</text>
<text x="34" y="22" text-anchor="middle">A</text>
<text x="66" y="22" text-anchor="middle">B</text>
<text x="144" y="22" text-anchor="middle">C</text>
<text x="222" y="22" text-anchor="middle">D</text>
</svg>
</div>

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="74" height="118" viewBox="0 0 74 118" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(10,8) scale(1.1)"><path d="M7,4 L37,4 L33,10 L11,10 Z" fill-opacity="1"/><path d="M38,5 L38,35 L32,31 L32,11 Z" fill-opacity="1"/><path d="M38,41 L38,71 L32,65 L32,45 Z" fill-opacity="1"/><path d="M7,72 L37,72 L33,66 L11,66 Z" fill-opacity="1"/><path d="M6,41 L6,71 L12,65 L12,45 Z" fill-opacity="1"/><path d="M6,5 L6,35 L12,31 L12,11 Z" fill-opacity="1"/><path d="M7,38 L11,34 L33,34 L37,38 L33,42 L11,42 Z" fill-opacity="1"/></g>
<text x="34.2" y="108" text-anchor="middle">8</text>
</svg>
</div>

### วงจรของเลข 9 (BCD-8421, OR/AND) {code=bcd; method=orand; digit=9}

$\mathbf{Sol}^{n}$

เลข $9$ ใช้ segment $a, b, c, d, f, g$ จึงเขียนวงจรเฉพาะ segment เหล่านี้ ต่อเข้าด้วยกันเป็นวงจรเดียว : แต่ละพจน์ผลบวกใช้ OR เกต แล้วนำทุกพจน์เข้า AND เกต (พจน์ที่มีตัวแปรตัวเดียวต่อเข้า AND เกตได้เลย)

$\mathbf{Ans}\quad \begin{aligned}a &= (A+B+C+\overline{D})(\overline{B}+C+D) \\ b &= (\overline{B}+C+\overline{D})(\overline{B}+\overline{C}+D) \\ c &= (B+\overline{C}+D) \\ d &= (A+B+C+\overline{D})(\overline{B}+C+D)(\overline{B}+\overline{C}+\overline{D}) \\ f &= (A+B+\overline{D})(B+\overline{C})(\overline{C}+\overline{D}) \\ g &= (A+B+C)(\overline{B}+\overline{C}+\overline{D})\end{aligned}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="582" height="1036" viewBox="0 0 582 1036" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<line x1="34" y1="28" x2="34" y2="902"/>
<line x1="114" y1="52" x2="114" y2="968"/>
<line x1="66" y1="28" x2="66" y2="916"/>
<line x1="192" y1="52" x2="192" y2="982"/>
<line x1="144" y1="28" x2="144" y2="930"/>
<line x1="270" y1="52" x2="270" y2="996"/>
<line x1="222" y1="28" x2="222" y2="596"/>
<line x1="34" y1="96" x2="334.5" y2="96"/>
<line x1="66" y1="110" x2="336.7" y2="110"/>
<line x1="144" y1="124" x2="336.7" y2="124"/>
<line x1="270" y1="138" x2="334.5" y2="138"/>
<line x1="390" y1="117" x2="416" y2="117"/>
<line x1="416" y1="117" x2="416" y2="143"/>
<line x1="416" y1="143" x2="436" y2="143"/>
<line x1="114" y1="176" x2="335.2" y2="176"/>
<line x1="144" y1="190" x2="337" y2="190"/>
<line x1="222" y1="204" x2="335.2" y2="204"/>
<line x1="390" y1="190" x2="426" y2="190"/>
<line x1="426" y1="190" x2="426" y2="157"/>
<line x1="426" y1="157" x2="436" y2="157"/>
<line x1="488" y1="150" x2="518" y2="150"/>
<line x1="114" y1="258" x2="335.2" y2="258"/>
<line x1="144" y1="272" x2="337" y2="272"/>
<line x1="270" y1="286" x2="335.2" y2="286"/>
<line x1="390" y1="272" x2="426" y2="272"/>
<line x1="426" y1="272" x2="426" y2="298"/>
<line x1="426" y1="298" x2="436" y2="298"/>
<line x1="114" y1="324" x2="335.2" y2="324"/>
<line x1="192" y1="338" x2="337" y2="338"/>
<line x1="222" y1="352" x2="335.2" y2="352"/>
<line x1="390" y1="338" x2="416" y2="338"/>
<line x1="416" y1="338" x2="416" y2="312"/>
<line x1="416" y1="312" x2="436" y2="312"/>
<line x1="488" y1="305" x2="518" y2="305"/>
<line x1="66" y1="406" x2="335.2" y2="406"/>
<line x1="192" y1="420" x2="337" y2="420"/>
<line x1="222" y1="434" x2="335.2" y2="434"/>
<line x1="390" y1="420" x2="420" y2="420"/>
<line x1="34" y1="488" x2="334.5" y2="488"/>
<line x1="66" y1="502" x2="336.7" y2="502"/>
<line x1="144" y1="516" x2="336.7" y2="516"/>
<line x1="270" y1="530" x2="334.5" y2="530"/>
<line x1="390" y1="509" x2="426" y2="509"/>
<line x1="426" y1="509" x2="426" y2="561"/>
<line x1="426" y1="561" x2="446" y2="561"/>
<line x1="114" y1="568" x2="335.2" y2="568"/>
<line x1="144" y1="582" x2="337" y2="582"/>
<line x1="222" y1="596" x2="335.2" y2="596"/>
<line x1="390" y1="582" x2="416" y2="582"/>
<line x1="416" y1="582" x2="416" y2="575"/>
<line x1="416" y1="575" x2="446" y2="575"/>
<line x1="114" y1="634" x2="335.2" y2="634"/>
<line x1="192" y1="648" x2="337" y2="648"/>
<line x1="270" y1="662" x2="335.2" y2="662"/>
<line x1="390" y1="648" x2="436" y2="648"/>
<line x1="436" y1="648" x2="436" y2="589"/>
<line x1="436" y1="589" x2="446" y2="589"/>
<line x1="498" y1="575" x2="528" y2="575"/>
<line x1="34" y1="716" x2="335.2" y2="716"/>
<line x1="66" y1="730" x2="337" y2="730"/>
<line x1="270" y1="744" x2="335.2" y2="744"/>
<line x1="390" y1="730" x2="426" y2="730"/>
<line x1="426" y1="730" x2="426" y2="768"/>
<line x1="426" y1="768" x2="446" y2="768"/>
<line x1="66" y1="782" x2="336.2" y2="782"/>
<line x1="192" y1="796" x2="336.2" y2="796"/>
<line x1="390" y1="789" x2="416" y2="789"/>
<line x1="416" y1="789" x2="416" y2="782"/>
<line x1="416" y1="782" x2="446" y2="782"/>
<line x1="192" y1="834" x2="336.2" y2="834"/>
<line x1="270" y1="848" x2="336.2" y2="848"/>
<line x1="390" y1="841" x2="436" y2="841"/>
<line x1="436" y1="841" x2="436" y2="796"/>
<line x1="436" y1="796" x2="446" y2="796"/>
<line x1="498" y1="782" x2="528" y2="782"/>
<line x1="34" y1="902" x2="335.2" y2="902"/>
<line x1="66" y1="916" x2="337" y2="916"/>
<line x1="144" y1="930" x2="335.2" y2="930"/>
<line x1="390" y1="916" x2="426" y2="916"/>
<line x1="426" y1="916" x2="426" y2="942"/>
<line x1="426" y1="942" x2="436" y2="942"/>
<line x1="114" y1="968" x2="335.2" y2="968"/>
<line x1="192" y1="982" x2="337" y2="982"/>
<line x1="270" y1="996" x2="335.2" y2="996"/>
<line x1="390" y1="982" x2="416" y2="982"/>
<line x1="416" y1="982" x2="416" y2="956"/>
<line x1="416" y1="956" x2="436" y2="956"/>
<line x1="488" y1="949" x2="518" y2="949"/>
<line x1="66" y1="52" x2="73" y2="52"/>
<line x1="105" y1="52" x2="114" y2="52"/>
<line x1="144" y1="52" x2="151" y2="52"/>
<line x1="183" y1="52" x2="192" y2="52"/>
<line x1="222" y1="52" x2="229" y2="52"/>
<line x1="261" y1="52" x2="270" y2="52"/>
<path d="M330,82 C352,82 378,99.5 390,117 C378,134.5 352,152 330,152 Q344,117 330,82 Z"/>
<path d="M330,162 C352,162 378,176 390,190 C378,204 352,218 330,218 Q344,190 330,162 Z"/>
<path d="M436,129 H462 A26,21 0 0 1 462,171 H436 Z"/>
<path d="M330,244 C352,244 378,258 390,272 C378,286 352,300 330,300 Q344,272 330,244 Z"/>
<path d="M330,310 C352,310 378,324 390,338 C378,352 352,366 330,366 Q344,338 330,310 Z"/>
<path d="M436,284 H462 A26,21 0 0 1 462,326 H436 Z"/>
<path d="M330,392 C352,392 378,406 390,420 C378,434 352,448 330,448 Q344,420 330,392 Z"/>
<path d="M330,474 C352,474 378,491.5 390,509 C378,526.5 352,544 330,544 Q344,509 330,474 Z"/>
<path d="M330,554 C352,554 378,568 390,582 C378,596 352,610 330,610 Q344,582 330,554 Z"/>
<path d="M330,620 C352,620 378,634 390,648 C378,662 352,676 330,676 Q344,648 330,620 Z"/>
<path d="M446,547 H472 A26,28 0 0 1 472,603 H446 Z"/>
<path d="M330,702 C352,702 378,716 390,730 C378,744 352,758 330,758 Q344,730 330,702 Z"/>
<path d="M330,768 C352,768 378,778.5 390,789 C378,799.5 352,810 330,810 Q344,789 330,768 Z"/>
<path d="M330,820 C352,820 378,830.5 390,841 C378,851.5 352,862 330,862 Q344,841 330,820 Z"/>
<path d="M446,754 H472 A26,28 0 0 1 472,810 H446 Z"/>
<path d="M330,888 C352,888 378,902 390,916 C378,930 352,944 330,944 Q344,916 330,888 Z"/>
<path d="M330,954 C352,954 378,968 390,982 C378,996 352,1010 330,1010 Q344,982 330,954 Z"/>
<path d="M436,928 H462 A26,21 0 0 1 462,970 H436 Z"/>
<polygon points="73,40 73,64 95,52"/>
<circle cx="100" cy="52" r="5"/>
<polygon points="151,40 151,64 173,52"/>
<circle cx="178" cy="52" r="5"/>
<polygon points="229,40 229,64 251,52"/>
<circle cx="256" cy="52" r="5"/>
<circle cx="34" cy="96" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="110" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="124" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="138" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="114" cy="176" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="190" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="222" cy="204" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="114" cy="258" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="272" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="286" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="114" cy="324" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="192" cy="338" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="222" cy="352" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="406" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="192" cy="420" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="222" cy="434" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="488" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="502" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="516" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="530" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="114" cy="568" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="582" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="222" cy="596" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="114" cy="634" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="192" cy="648" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="662" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="716" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="730" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="744" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="782" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="192" cy="796" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="192" cy="834" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="848" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="902" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="916" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="930" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="114" cy="968" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="192" cy="982" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="996" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="222" cy="52" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="524" y="156">a</text>
<text x="524" y="311">b</text>
<text x="426" y="426">c</text>
<text x="534" y="581">d</text>
<text x="534" y="788">f</text>
<text x="524" y="955">g</text>
<text x="34" y="22" text-anchor="middle">A</text>
<text x="66" y="22" text-anchor="middle">B</text>
<text x="144" y="22" text-anchor="middle">C</text>
<text x="222" y="22" text-anchor="middle">D</text>
</svg>
</div>

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="74" height="118" viewBox="0 0 74 118" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(10,8) scale(1.1)"><path d="M7,4 L37,4 L33,10 L11,10 Z" fill-opacity="1"/><path d="M38,5 L38,35 L32,31 L32,11 Z" fill-opacity="1"/><path d="M38,41 L38,71 L32,65 L32,45 Z" fill-opacity="1"/><path d="M7,72 L37,72 L33,66 L11,66 Z" fill-opacity="1"/><path d="M6,41 L6,71 L12,65 L12,45 Z" fill-opacity="0.1"/><path d="M6,5 L6,35 L12,31 L12,11 Z" fill-opacity="1"/><path d="M7,38 L11,34 L33,34 L37,38 L33,42 L11,42 Z" fill-opacity="1"/></g>
<text x="34.2" y="108" text-anchor="middle">9</text>
</svg>
</div>

### วงจรของเลข 0 (BCD-8421, NOR อย่างเดียว) {code=bcd; method=nor; digit=0}

$\mathbf{Sol}^{n}$

เลข $0$ ใช้ segment $a, b, c, d, e, f$ จึงเขียนวงจรเฉพาะ segment เหล่านี้ ต่อเข้าด้วยกันเป็นวงจรเดียว : ใช้ NOR เกตทั้งสองชั้น : แต่ละพจน์ผลบวกเข้า NOR เกตชั้นแรก (พจน์ตัวแปรเดียวใช้ตัวที่คอมพลีเมนต์ต่อตรง) แล้วนำทุกเอาต์พุตเข้า NOR เกตชั้นที่สอง

$\mathbf{Ans}\quad \begin{aligned}a &= \overline{\overline{A+B+C+\overline{D}}+\overline{\overline{B}+C+D}} \\ b &= \overline{\overline{\overline{B}+C+\overline{D}}+\overline{\overline{B}+\overline{C}+D}} \\ c &= \overline{\overline{B+\overline{C}+D}} \\ d &= \overline{\overline{A+B+C+\overline{D}}+\overline{\overline{B}+C+D}+\overline{\overline{B}+\overline{C}+\overline{D}}} \\ e &= \overline{D+\overline{\overline{B}+C}} \\ f &= \overline{\overline{A+B+\overline{D}}+\overline{B+\overline{C}}+\overline{\overline{C}+\overline{D}}}\end{aligned}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="610" height="980" viewBox="0 0 610 980" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<line x1="34" y1="28" x2="34" y2="808"/>
<line x1="114" y1="52" x2="114" y2="740"/>
<line x1="66" y1="28" x2="66" y2="874"/>
<line x1="192" y1="52" x2="192" y2="926"/>
<line x1="144" y1="28" x2="144" y2="754"/>
<line x1="270" y1="52" x2="270" y2="940"/>
<line x1="222" y1="28" x2="222" y2="709"/>
<line x1="34" y1="96" x2="334.5" y2="96"/>
<line x1="66" y1="110" x2="336.7" y2="110"/>
<line x1="144" y1="124" x2="336.7" y2="124"/>
<line x1="270" y1="138" x2="334.5" y2="138"/>
<line x1="400" y1="117" x2="426" y2="117"/>
<line x1="426" y1="117" x2="426" y2="143"/>
<line x1="426" y1="143" x2="452.2" y2="143"/>
<line x1="114" y1="176" x2="335.2" y2="176"/>
<line x1="144" y1="190" x2="337" y2="190"/>
<line x1="222" y1="204" x2="335.2" y2="204"/>
<line x1="400" y1="190" x2="436" y2="190"/>
<line x1="436" y1="190" x2="436" y2="157"/>
<line x1="436" y1="157" x2="452.2" y2="157"/>
<line x1="516" y1="150" x2="546" y2="150"/>
<line x1="114" y1="258" x2="335.2" y2="258"/>
<line x1="144" y1="272" x2="337" y2="272"/>
<line x1="270" y1="286" x2="335.2" y2="286"/>
<line x1="400" y1="272" x2="436" y2="272"/>
<line x1="436" y1="272" x2="436" y2="298"/>
<line x1="436" y1="298" x2="452.2" y2="298"/>
<line x1="114" y1="324" x2="335.2" y2="324"/>
<line x1="192" y1="338" x2="337" y2="338"/>
<line x1="222" y1="352" x2="335.2" y2="352"/>
<line x1="400" y1="338" x2="426" y2="338"/>
<line x1="426" y1="338" x2="426" y2="312"/>
<line x1="426" y1="312" x2="452.2" y2="312"/>
<line x1="516" y1="305" x2="546" y2="305"/>
<line x1="66" y1="406" x2="335.2" y2="406"/>
<line x1="192" y1="420" x2="337" y2="420"/>
<line x1="222" y1="434" x2="335.2" y2="434"/>
<line x1="400" y1="420" x2="436" y2="420"/>
<line x1="468" y1="420" x2="498" y2="420"/>
<line x1="34" y1="488" x2="334.5" y2="488"/>
<line x1="66" y1="502" x2="336.7" y2="502"/>
<line x1="144" y1="516" x2="336.7" y2="516"/>
<line x1="270" y1="530" x2="334.5" y2="530"/>
<line x1="400" y1="509" x2="436" y2="509"/>
<line x1="436" y1="509" x2="436" y2="561"/>
<line x1="436" y1="561" x2="461.2" y2="561"/>
<line x1="114" y1="568" x2="335.2" y2="568"/>
<line x1="144" y1="582" x2="337" y2="582"/>
<line x1="222" y1="596" x2="335.2" y2="596"/>
<line x1="400" y1="582" x2="426" y2="582"/>
<line x1="426" y1="582" x2="426" y2="575"/>
<line x1="426" y1="575" x2="463" y2="575"/>
<line x1="114" y1="634" x2="335.2" y2="634"/>
<line x1="192" y1="648" x2="337" y2="648"/>
<line x1="270" y1="662" x2="335.2" y2="662"/>
<line x1="400" y1="648" x2="446" y2="648"/>
<line x1="446" y1="648" x2="446" y2="589"/>
<line x1="446" y1="589" x2="461.2" y2="589"/>
<line x1="526" y1="575" x2="556" y2="575"/>
<line x1="222" y1="709" x2="436" y2="709"/>
<line x1="436" y1="709" x2="436" y2="728"/>
<line x1="436" y1="728" x2="452.2" y2="728"/>
<line x1="114" y1="740" x2="336.2" y2="740"/>
<line x1="144" y1="754" x2="336.2" y2="754"/>
<line x1="400" y1="747" x2="426" y2="747"/>
<line x1="426" y1="747" x2="426" y2="742"/>
<line x1="426" y1="742" x2="452.2" y2="742"/>
<line x1="516" y1="735" x2="546" y2="735"/>
<line x1="34" y1="808" x2="335.2" y2="808"/>
<line x1="66" y1="822" x2="337" y2="822"/>
<line x1="270" y1="836" x2="335.2" y2="836"/>
<line x1="400" y1="822" x2="436" y2="822"/>
<line x1="436" y1="822" x2="436" y2="860"/>
<line x1="436" y1="860" x2="461.2" y2="860"/>
<line x1="66" y1="874" x2="336.2" y2="874"/>
<line x1="192" y1="888" x2="336.2" y2="888"/>
<line x1="400" y1="881" x2="426" y2="881"/>
<line x1="426" y1="881" x2="426" y2="874"/>
<line x1="426" y1="874" x2="463" y2="874"/>
<line x1="192" y1="926" x2="336.2" y2="926"/>
<line x1="270" y1="940" x2="336.2" y2="940"/>
<line x1="400" y1="933" x2="446" y2="933"/>
<line x1="446" y1="933" x2="446" y2="888"/>
<line x1="446" y1="888" x2="461.2" y2="888"/>
<line x1="526" y1="874" x2="556" y2="874"/>
<line x1="66" y1="52" x2="73" y2="52"/>
<line x1="105" y1="52" x2="114" y2="52"/>
<line x1="144" y1="52" x2="151" y2="52"/>
<line x1="183" y1="52" x2="192" y2="52"/>
<line x1="222" y1="52" x2="229" y2="52"/>
<line x1="261" y1="52" x2="270" y2="52"/>
<path d="M330,82 C352,82 378,99.5 390,117 C378,134.5 352,152 330,152 Q344,117 330,82 Z"/>
<circle cx="395" cy="117" r="5"/>
<path d="M330,162 C352,162 378,176 390,190 C378,204 352,218 330,218 Q344,190 330,162 Z"/>
<circle cx="395" cy="190" r="5"/>
<path d="M446,129 C468,129 494,139.5 506,150 C494,160.5 468,171 446,171 Q460,150 446,129 Z"/>
<circle cx="511" cy="150" r="5"/>
<path d="M330,244 C352,244 378,258 390,272 C378,286 352,300 330,300 Q344,272 330,244 Z"/>
<circle cx="395" cy="272" r="5"/>
<path d="M330,310 C352,310 378,324 390,338 C378,352 352,366 330,366 Q344,338 330,310 Z"/>
<circle cx="395" cy="338" r="5"/>
<path d="M446,284 C468,284 494,294.5 506,305 C494,315.5 468,326 446,326 Q460,305 446,284 Z"/>
<circle cx="511" cy="305" r="5"/>
<path d="M330,392 C352,392 378,406 390,420 C378,434 352,448 330,448 Q344,420 330,392 Z"/>
<circle cx="395" cy="420" r="5"/>
<polygon points="436,408 436,432 458,420"/>
<circle cx="463" cy="420" r="5"/>
<path d="M330,474 C352,474 378,491.5 390,509 C378,526.5 352,544 330,544 Q344,509 330,474 Z"/>
<circle cx="395" cy="509" r="5"/>
<path d="M330,554 C352,554 378,568 390,582 C378,596 352,610 330,610 Q344,582 330,554 Z"/>
<circle cx="395" cy="582" r="5"/>
<path d="M330,620 C352,620 378,634 390,648 C378,662 352,676 330,676 Q344,648 330,620 Z"/>
<circle cx="395" cy="648" r="5"/>
<path d="M456,547 C478,547 504,561 516,575 C504,589 478,603 456,603 Q470,575 456,547 Z"/>
<circle cx="521" cy="575" r="5"/>
<path d="M330,726 C352,726 378,736.5 390,747 C378,757.5 352,768 330,768 Q344,747 330,726 Z"/>
<circle cx="395" cy="747" r="5"/>
<path d="M446,714 C468,714 494,724.5 506,735 C494,745.5 468,756 446,756 Q460,735 446,714 Z"/>
<circle cx="511" cy="735" r="5"/>
<path d="M330,794 C352,794 378,808 390,822 C378,836 352,850 330,850 Q344,822 330,794 Z"/>
<circle cx="395" cy="822" r="5"/>
<path d="M330,860 C352,860 378,870.5 390,881 C378,891.5 352,902 330,902 Q344,881 330,860 Z"/>
<circle cx="395" cy="881" r="5"/>
<path d="M330,912 C352,912 378,922.5 390,933 C378,943.5 352,954 330,954 Q344,933 330,912 Z"/>
<circle cx="395" cy="933" r="5"/>
<path d="M456,846 C478,846 504,860 516,874 C504,888 478,902 456,902 Q470,874 456,846 Z"/>
<circle cx="521" cy="874" r="5"/>
<polygon points="73,40 73,64 95,52"/>
<circle cx="100" cy="52" r="5"/>
<polygon points="151,40 151,64 173,52"/>
<circle cx="178" cy="52" r="5"/>
<polygon points="229,40 229,64 251,52"/>
<circle cx="256" cy="52" r="5"/>
<circle cx="34" cy="96" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="110" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="124" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="138" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="114" cy="176" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="190" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="222" cy="204" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="114" cy="258" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="272" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="286" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="114" cy="324" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="192" cy="338" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="222" cy="352" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="406" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="192" cy="420" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="222" cy="434" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="488" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="502" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="516" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="530" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="114" cy="568" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="582" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="222" cy="596" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="114" cy="634" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="192" cy="648" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="662" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="222" cy="709" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="114" cy="740" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="754" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="808" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="822" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="836" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="874" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="192" cy="888" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="192" cy="926" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="940" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="222" cy="52" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="552" y="156">a</text>
<text x="552" y="311">b</text>
<text x="504" y="426">c</text>
<text x="562" y="581">d</text>
<text x="552" y="741">e</text>
<text x="562" y="880">f</text>
<text x="34" y="22" text-anchor="middle">A</text>
<text x="66" y="22" text-anchor="middle">B</text>
<text x="144" y="22" text-anchor="middle">C</text>
<text x="222" y="22" text-anchor="middle">D</text>
</svg>
</div>

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="74" height="118" viewBox="0 0 74 118" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(10,8) scale(1.1)"><path d="M7,4 L37,4 L33,10 L11,10 Z" fill-opacity="1"/><path d="M38,5 L38,35 L32,31 L32,11 Z" fill-opacity="1"/><path d="M38,41 L38,71 L32,65 L32,45 Z" fill-opacity="1"/><path d="M7,72 L37,72 L33,66 L11,66 Z" fill-opacity="1"/><path d="M6,41 L6,71 L12,65 L12,45 Z" fill-opacity="1"/><path d="M6,5 L6,35 L12,31 L12,11 Z" fill-opacity="1"/><path d="M7,38 L11,34 L33,34 L37,38 L33,42 L11,42 Z" fill-opacity="0.1"/></g>
<text x="34.2" y="108" text-anchor="middle">0</text>
</svg>
</div>

### วงจรของเลข 1 (BCD-8421, NOR อย่างเดียว) {code=bcd; method=nor; digit=1}

$\mathbf{Sol}^{n}$

เลข $1$ ใช้ segment $b, c$ จึงเขียนวงจรเฉพาะ segment เหล่านี้ ต่อเข้าด้วยกันเป็นวงจรเดียว : ใช้ NOR เกตทั้งสองชั้น : แต่ละพจน์ผลบวกเข้า NOR เกตชั้นแรก (พจน์ตัวแปรเดียวใช้ตัวที่คอมพลีเมนต์ต่อตรง) แล้วนำทุกเอาต์พุตเข้า NOR เกตชั้นที่สอง

$\mathbf{Ans}\quad \begin{aligned}b &= \overline{\overline{\overline{B}+C+\overline{D}}+\overline{\overline{B}+\overline{C}+D}} \\ c &= \overline{\overline{B+\overline{C}+D}}\end{aligned}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="568" height="312" viewBox="0 0 568 312" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<line x1="82" y1="52" x2="82" y2="162"/>
<line x1="34" y1="28" x2="34" y2="244"/>
<line x1="160" y1="52" x2="160" y2="258"/>
<line x1="112" y1="28" x2="112" y2="110"/>
<line x1="238" y1="52" x2="238" y2="124"/>
<line x1="190" y1="28" x2="190" y2="272"/>
<line x1="82" y1="96" x2="303.2" y2="96"/>
<line x1="112" y1="110" x2="305" y2="110"/>
<line x1="238" y1="124" x2="303.2" y2="124"/>
<line x1="368" y1="110" x2="404" y2="110"/>
<line x1="404" y1="110" x2="404" y2="136"/>
<line x1="404" y1="136" x2="420.2" y2="136"/>
<line x1="82" y1="162" x2="303.2" y2="162"/>
<line x1="160" y1="176" x2="305" y2="176"/>
<line x1="190" y1="190" x2="303.2" y2="190"/>
<line x1="368" y1="176" x2="394" y2="176"/>
<line x1="394" y1="176" x2="394" y2="150"/>
<line x1="394" y1="150" x2="420.2" y2="150"/>
<line x1="484" y1="143" x2="514" y2="143"/>
<line x1="34" y1="244" x2="303.2" y2="244"/>
<line x1="160" y1="258" x2="305" y2="258"/>
<line x1="190" y1="272" x2="303.2" y2="272"/>
<line x1="368" y1="258" x2="404" y2="258"/>
<line x1="436" y1="258" x2="466" y2="258"/>
<line x1="34" y1="52" x2="41" y2="52"/>
<line x1="73" y1="52" x2="82" y2="52"/>
<line x1="112" y1="52" x2="119" y2="52"/>
<line x1="151" y1="52" x2="160" y2="52"/>
<line x1="190" y1="52" x2="197" y2="52"/>
<line x1="229" y1="52" x2="238" y2="52"/>
<path d="M298,82 C320,82 346,96 358,110 C346,124 320,138 298,138 Q312,110 298,82 Z"/>
<circle cx="363" cy="110" r="5"/>
<path d="M298,148 C320,148 346,162 358,176 C346,190 320,204 298,204 Q312,176 298,148 Z"/>
<circle cx="363" cy="176" r="5"/>
<path d="M414,122 C436,122 462,132.5 474,143 C462,153.5 436,164 414,164 Q428,143 414,122 Z"/>
<circle cx="479" cy="143" r="5"/>
<path d="M298,230 C320,230 346,244 358,258 C346,272 320,286 298,286 Q312,258 298,230 Z"/>
<circle cx="363" cy="258" r="5"/>
<polygon points="404,246 404,270 426,258"/>
<circle cx="431" cy="258" r="5"/>
<polygon points="41,40 41,64 63,52"/>
<circle cx="68" cy="52" r="5"/>
<polygon points="119,40 119,64 141,52"/>
<circle cx="146" cy="52" r="5"/>
<polygon points="197,40 197,64 219,52"/>
<circle cx="224" cy="52" r="5"/>
<circle cx="82" cy="96" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="110" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="124" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="82" cy="162" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="160" cy="176" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="190" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="244" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="160" cy="258" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="272" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="52" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="520" y="149">b</text>
<text x="472" y="264">c</text>
<text x="34" y="22" text-anchor="middle">B</text>
<text x="112" y="22" text-anchor="middle">C</text>
<text x="190" y="22" text-anchor="middle">D</text>
</svg>
</div>

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="74" height="118" viewBox="0 0 74 118" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(10,8) scale(1.1)"><path d="M7,4 L37,4 L33,10 L11,10 Z" fill-opacity="0.1"/><path d="M38,5 L38,35 L32,31 L32,11 Z" fill-opacity="1"/><path d="M38,41 L38,71 L32,65 L32,45 Z" fill-opacity="1"/><path d="M7,72 L37,72 L33,66 L11,66 Z" fill-opacity="0.1"/><path d="M6,41 L6,71 L12,65 L12,45 Z" fill-opacity="0.1"/><path d="M6,5 L6,35 L12,31 L12,11 Z" fill-opacity="0.1"/><path d="M7,38 L11,34 L33,34 L37,38 L33,42 L11,42 Z" fill-opacity="0.1"/></g>
<text x="34.2" y="108" text-anchor="middle">1</text>
</svg>
</div>

### วงจรของเลข 2 (BCD-8421, NOR อย่างเดียว) {code=bcd; method=nor; digit=2}

$\mathbf{Sol}^{n}$

เลข $2$ ใช้ segment $a, b, d, e, g$ จึงเขียนวงจรเฉพาะ segment เหล่านี้ ต่อเข้าด้วยกันเป็นวงจรเดียว : ใช้ NOR เกตทั้งสองชั้น : แต่ละพจน์ผลบวกเข้า NOR เกตชั้นแรก (พจน์ตัวแปรเดียวใช้ตัวที่คอมพลีเมนต์ต่อตรง) แล้วนำทุกเอาต์พุตเข้า NOR เกตชั้นที่สอง

$\mathbf{Ans}\quad \begin{aligned}a &= \overline{\overline{A+B+C+\overline{D}}+\overline{\overline{B}+C+D}} \\ b &= \overline{\overline{\overline{B}+C+\overline{D}}+\overline{\overline{B}+\overline{C}+D}} \\ d &= \overline{\overline{A+B+C+\overline{D}}+\overline{\overline{B}+C+D}+\overline{\overline{B}+\overline{C}+\overline{D}}} \\ e &= \overline{D+\overline{\overline{B}+C}} \\ g &= \overline{\overline{A+B+C}+\overline{\overline{B}+\overline{C}+\overline{D}}}\end{aligned}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="610" height="860" viewBox="0 0 610 860" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<line x1="34" y1="28" x2="34" y2="726"/>
<line x1="114" y1="52" x2="114" y2="792"/>
<line x1="66" y1="28" x2="66" y2="740"/>
<line x1="192" y1="52" x2="192" y2="806"/>
<line x1="144" y1="28" x2="144" y2="754"/>
<line x1="270" y1="52" x2="270" y2="820"/>
<line x1="222" y1="28" x2="222" y2="627"/>
<line x1="34" y1="96" x2="334.5" y2="96"/>
<line x1="66" y1="110" x2="336.7" y2="110"/>
<line x1="144" y1="124" x2="336.7" y2="124"/>
<line x1="270" y1="138" x2="334.5" y2="138"/>
<line x1="400" y1="117" x2="426" y2="117"/>
<line x1="426" y1="117" x2="426" y2="143"/>
<line x1="426" y1="143" x2="452.2" y2="143"/>
<line x1="114" y1="176" x2="335.2" y2="176"/>
<line x1="144" y1="190" x2="337" y2="190"/>
<line x1="222" y1="204" x2="335.2" y2="204"/>
<line x1="400" y1="190" x2="436" y2="190"/>
<line x1="436" y1="190" x2="436" y2="157"/>
<line x1="436" y1="157" x2="452.2" y2="157"/>
<line x1="516" y1="150" x2="546" y2="150"/>
<line x1="114" y1="258" x2="335.2" y2="258"/>
<line x1="144" y1="272" x2="337" y2="272"/>
<line x1="270" y1="286" x2="335.2" y2="286"/>
<line x1="400" y1="272" x2="436" y2="272"/>
<line x1="436" y1="272" x2="436" y2="298"/>
<line x1="436" y1="298" x2="452.2" y2="298"/>
<line x1="114" y1="324" x2="335.2" y2="324"/>
<line x1="192" y1="338" x2="337" y2="338"/>
<line x1="222" y1="352" x2="335.2" y2="352"/>
<line x1="400" y1="338" x2="426" y2="338"/>
<line x1="426" y1="338" x2="426" y2="312"/>
<line x1="426" y1="312" x2="452.2" y2="312"/>
<line x1="516" y1="305" x2="546" y2="305"/>
<line x1="34" y1="406" x2="334.5" y2="406"/>
<line x1="66" y1="420" x2="336.7" y2="420"/>
<line x1="144" y1="434" x2="336.7" y2="434"/>
<line x1="270" y1="448" x2="334.5" y2="448"/>
<line x1="400" y1="427" x2="436" y2="427"/>
<line x1="436" y1="427" x2="436" y2="479"/>
<line x1="436" y1="479" x2="461.2" y2="479"/>
<line x1="114" y1="486" x2="335.2" y2="486"/>
<line x1="144" y1="500" x2="337" y2="500"/>
<line x1="222" y1="514" x2="335.2" y2="514"/>
<line x1="400" y1="500" x2="426" y2="500"/>
<line x1="426" y1="500" x2="426" y2="493"/>
<line x1="426" y1="493" x2="463" y2="493"/>
<line x1="114" y1="552" x2="335.2" y2="552"/>
<line x1="192" y1="566" x2="337" y2="566"/>
<line x1="270" y1="580" x2="335.2" y2="580"/>
<line x1="400" y1="566" x2="446" y2="566"/>
<line x1="446" y1="566" x2="446" y2="507"/>
<line x1="446" y1="507" x2="461.2" y2="507"/>
<line x1="526" y1="493" x2="556" y2="493"/>
<line x1="222" y1="627" x2="436" y2="627"/>
<line x1="436" y1="627" x2="436" y2="646"/>
<line x1="436" y1="646" x2="452.2" y2="646"/>
<line x1="114" y1="658" x2="336.2" y2="658"/>
<line x1="144" y1="672" x2="336.2" y2="672"/>
<line x1="400" y1="665" x2="426" y2="665"/>
<line x1="426" y1="665" x2="426" y2="660"/>
<line x1="426" y1="660" x2="452.2" y2="660"/>
<line x1="516" y1="653" x2="546" y2="653"/>
<line x1="34" y1="726" x2="335.2" y2="726"/>
<line x1="66" y1="740" x2="337" y2="740"/>
<line x1="144" y1="754" x2="335.2" y2="754"/>
<line x1="400" y1="740" x2="436" y2="740"/>
<line x1="436" y1="740" x2="436" y2="766"/>
<line x1="436" y1="766" x2="452.2" y2="766"/>
<line x1="114" y1="792" x2="335.2" y2="792"/>
<line x1="192" y1="806" x2="337" y2="806"/>
<line x1="270" y1="820" x2="335.2" y2="820"/>
<line x1="400" y1="806" x2="426" y2="806"/>
<line x1="426" y1="806" x2="426" y2="780"/>
<line x1="426" y1="780" x2="452.2" y2="780"/>
<line x1="516" y1="773" x2="546" y2="773"/>
<line x1="66" y1="52" x2="73" y2="52"/>
<line x1="105" y1="52" x2="114" y2="52"/>
<line x1="144" y1="52" x2="151" y2="52"/>
<line x1="183" y1="52" x2="192" y2="52"/>
<line x1="222" y1="52" x2="229" y2="52"/>
<line x1="261" y1="52" x2="270" y2="52"/>
<path d="M330,82 C352,82 378,99.5 390,117 C378,134.5 352,152 330,152 Q344,117 330,82 Z"/>
<circle cx="395" cy="117" r="5"/>
<path d="M330,162 C352,162 378,176 390,190 C378,204 352,218 330,218 Q344,190 330,162 Z"/>
<circle cx="395" cy="190" r="5"/>
<path d="M446,129 C468,129 494,139.5 506,150 C494,160.5 468,171 446,171 Q460,150 446,129 Z"/>
<circle cx="511" cy="150" r="5"/>
<path d="M330,244 C352,244 378,258 390,272 C378,286 352,300 330,300 Q344,272 330,244 Z"/>
<circle cx="395" cy="272" r="5"/>
<path d="M330,310 C352,310 378,324 390,338 C378,352 352,366 330,366 Q344,338 330,310 Z"/>
<circle cx="395" cy="338" r="5"/>
<path d="M446,284 C468,284 494,294.5 506,305 C494,315.5 468,326 446,326 Q460,305 446,284 Z"/>
<circle cx="511" cy="305" r="5"/>
<path d="M330,392 C352,392 378,409.5 390,427 C378,444.5 352,462 330,462 Q344,427 330,392 Z"/>
<circle cx="395" cy="427" r="5"/>
<path d="M330,472 C352,472 378,486 390,500 C378,514 352,528 330,528 Q344,500 330,472 Z"/>
<circle cx="395" cy="500" r="5"/>
<path d="M330,538 C352,538 378,552 390,566 C378,580 352,594 330,594 Q344,566 330,538 Z"/>
<circle cx="395" cy="566" r="5"/>
<path d="M456,465 C478,465 504,479 516,493 C504,507 478,521 456,521 Q470,493 456,465 Z"/>
<circle cx="521" cy="493" r="5"/>
<path d="M330,644 C352,644 378,654.5 390,665 C378,675.5 352,686 330,686 Q344,665 330,644 Z"/>
<circle cx="395" cy="665" r="5"/>
<path d="M446,632 C468,632 494,642.5 506,653 C494,663.5 468,674 446,674 Q460,653 446,632 Z"/>
<circle cx="511" cy="653" r="5"/>
<path d="M330,712 C352,712 378,726 390,740 C378,754 352,768 330,768 Q344,740 330,712 Z"/>
<circle cx="395" cy="740" r="5"/>
<path d="M330,778 C352,778 378,792 390,806 C378,820 352,834 330,834 Q344,806 330,778 Z"/>
<circle cx="395" cy="806" r="5"/>
<path d="M446,752 C468,752 494,762.5 506,773 C494,783.5 468,794 446,794 Q460,773 446,752 Z"/>
<circle cx="511" cy="773" r="5"/>
<polygon points="73,40 73,64 95,52"/>
<circle cx="100" cy="52" r="5"/>
<polygon points="151,40 151,64 173,52"/>
<circle cx="178" cy="52" r="5"/>
<polygon points="229,40 229,64 251,52"/>
<circle cx="256" cy="52" r="5"/>
<circle cx="34" cy="96" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="110" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="124" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="138" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="114" cy="176" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="190" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="222" cy="204" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="114" cy="258" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="272" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="286" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="114" cy="324" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="192" cy="338" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="222" cy="352" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="406" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="420" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="434" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="448" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="114" cy="486" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="500" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="222" cy="514" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="114" cy="552" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="192" cy="566" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="580" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="222" cy="627" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="114" cy="658" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="672" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="726" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="740" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="754" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="114" cy="792" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="192" cy="806" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="820" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="222" cy="52" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="552" y="156">a</text>
<text x="552" y="311">b</text>
<text x="562" y="499">d</text>
<text x="552" y="659">e</text>
<text x="552" y="779">g</text>
<text x="34" y="22" text-anchor="middle">A</text>
<text x="66" y="22" text-anchor="middle">B</text>
<text x="144" y="22" text-anchor="middle">C</text>
<text x="222" y="22" text-anchor="middle">D</text>
</svg>
</div>

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="74" height="118" viewBox="0 0 74 118" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(10,8) scale(1.1)"><path d="M7,4 L37,4 L33,10 L11,10 Z" fill-opacity="1"/><path d="M38,5 L38,35 L32,31 L32,11 Z" fill-opacity="1"/><path d="M38,41 L38,71 L32,65 L32,45 Z" fill-opacity="0.1"/><path d="M7,72 L37,72 L33,66 L11,66 Z" fill-opacity="1"/><path d="M6,41 L6,71 L12,65 L12,45 Z" fill-opacity="1"/><path d="M6,5 L6,35 L12,31 L12,11 Z" fill-opacity="0.1"/><path d="M7,38 L11,34 L33,34 L37,38 L33,42 L11,42 Z" fill-opacity="1"/></g>
<text x="34.2" y="108" text-anchor="middle">2</text>
</svg>
</div>

### วงจรของเลข 3 (BCD-8421, NOR อย่างเดียว) {code=bcd; method=nor; digit=3}

$\mathbf{Sol}^{n}$

เลข $3$ ใช้ segment $a, b, c, d, g$ จึงเขียนวงจรเฉพาะ segment เหล่านี้ ต่อเข้าด้วยกันเป็นวงจรเดียว : ใช้ NOR เกตทั้งสองชั้น : แต่ละพจน์ผลบวกเข้า NOR เกตชั้นแรก (พจน์ตัวแปรเดียวใช้ตัวที่คอมพลีเมนต์ต่อตรง) แล้วนำทุกเอาต์พุตเข้า NOR เกตชั้นที่สอง

$\mathbf{Ans}\quad \begin{aligned}a &= \overline{\overline{A+B+C+\overline{D}}+\overline{\overline{B}+C+D}} \\ b &= \overline{\overline{\overline{B}+C+\overline{D}}+\overline{\overline{B}+\overline{C}+D}} \\ c &= \overline{\overline{B+\overline{C}+D}} \\ d &= \overline{\overline{A+B+C+\overline{D}}+\overline{\overline{B}+C+D}+\overline{\overline{B}+\overline{C}+\overline{D}}} \\ g &= \overline{\overline{A+B+C}+\overline{\overline{B}+\overline{C}+\overline{D}}}\end{aligned}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="610" height="850" viewBox="0 0 610 850" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<line x1="34" y1="28" x2="34" y2="716"/>
<line x1="114" y1="52" x2="114" y2="782"/>
<line x1="66" y1="28" x2="66" y2="730"/>
<line x1="192" y1="52" x2="192" y2="796"/>
<line x1="144" y1="28" x2="144" y2="744"/>
<line x1="270" y1="52" x2="270" y2="810"/>
<line x1="222" y1="28" x2="222" y2="596"/>
<line x1="34" y1="96" x2="334.5" y2="96"/>
<line x1="66" y1="110" x2="336.7" y2="110"/>
<line x1="144" y1="124" x2="336.7" y2="124"/>
<line x1="270" y1="138" x2="334.5" y2="138"/>
<line x1="400" y1="117" x2="426" y2="117"/>
<line x1="426" y1="117" x2="426" y2="143"/>
<line x1="426" y1="143" x2="452.2" y2="143"/>
<line x1="114" y1="176" x2="335.2" y2="176"/>
<line x1="144" y1="190" x2="337" y2="190"/>
<line x1="222" y1="204" x2="335.2" y2="204"/>
<line x1="400" y1="190" x2="436" y2="190"/>
<line x1="436" y1="190" x2="436" y2="157"/>
<line x1="436" y1="157" x2="452.2" y2="157"/>
<line x1="516" y1="150" x2="546" y2="150"/>
<line x1="114" y1="258" x2="335.2" y2="258"/>
<line x1="144" y1="272" x2="337" y2="272"/>
<line x1="270" y1="286" x2="335.2" y2="286"/>
<line x1="400" y1="272" x2="436" y2="272"/>
<line x1="436" y1="272" x2="436" y2="298"/>
<line x1="436" y1="298" x2="452.2" y2="298"/>
<line x1="114" y1="324" x2="335.2" y2="324"/>
<line x1="192" y1="338" x2="337" y2="338"/>
<line x1="222" y1="352" x2="335.2" y2="352"/>
<line x1="400" y1="338" x2="426" y2="338"/>
<line x1="426" y1="338" x2="426" y2="312"/>
<line x1="426" y1="312" x2="452.2" y2="312"/>
<line x1="516" y1="305" x2="546" y2="305"/>
<line x1="66" y1="406" x2="335.2" y2="406"/>
<line x1="192" y1="420" x2="337" y2="420"/>
<line x1="222" y1="434" x2="335.2" y2="434"/>
<line x1="400" y1="420" x2="436" y2="420"/>
<line x1="468" y1="420" x2="498" y2="420"/>
<line x1="34" y1="488" x2="334.5" y2="488"/>
<line x1="66" y1="502" x2="336.7" y2="502"/>
<line x1="144" y1="516" x2="336.7" y2="516"/>
<line x1="270" y1="530" x2="334.5" y2="530"/>
<line x1="400" y1="509" x2="436" y2="509"/>
<line x1="436" y1="509" x2="436" y2="561"/>
<line x1="436" y1="561" x2="461.2" y2="561"/>
<line x1="114" y1="568" x2="335.2" y2="568"/>
<line x1="144" y1="582" x2="337" y2="582"/>
<line x1="222" y1="596" x2="335.2" y2="596"/>
<line x1="400" y1="582" x2="426" y2="582"/>
<line x1="426" y1="582" x2="426" y2="575"/>
<line x1="426" y1="575" x2="463" y2="575"/>
<line x1="114" y1="634" x2="335.2" y2="634"/>
<line x1="192" y1="648" x2="337" y2="648"/>
<line x1="270" y1="662" x2="335.2" y2="662"/>
<line x1="400" y1="648" x2="446" y2="648"/>
<line x1="446" y1="648" x2="446" y2="589"/>
<line x1="446" y1="589" x2="461.2" y2="589"/>
<line x1="526" y1="575" x2="556" y2="575"/>
<line x1="34" y1="716" x2="335.2" y2="716"/>
<line x1="66" y1="730" x2="337" y2="730"/>
<line x1="144" y1="744" x2="335.2" y2="744"/>
<line x1="400" y1="730" x2="436" y2="730"/>
<line x1="436" y1="730" x2="436" y2="756"/>
<line x1="436" y1="756" x2="452.2" y2="756"/>
<line x1="114" y1="782" x2="335.2" y2="782"/>
<line x1="192" y1="796" x2="337" y2="796"/>
<line x1="270" y1="810" x2="335.2" y2="810"/>
<line x1="400" y1="796" x2="426" y2="796"/>
<line x1="426" y1="796" x2="426" y2="770"/>
<line x1="426" y1="770" x2="452.2" y2="770"/>
<line x1="516" y1="763" x2="546" y2="763"/>
<line x1="66" y1="52" x2="73" y2="52"/>
<line x1="105" y1="52" x2="114" y2="52"/>
<line x1="144" y1="52" x2="151" y2="52"/>
<line x1="183" y1="52" x2="192" y2="52"/>
<line x1="222" y1="52" x2="229" y2="52"/>
<line x1="261" y1="52" x2="270" y2="52"/>
<path d="M330,82 C352,82 378,99.5 390,117 C378,134.5 352,152 330,152 Q344,117 330,82 Z"/>
<circle cx="395" cy="117" r="5"/>
<path d="M330,162 C352,162 378,176 390,190 C378,204 352,218 330,218 Q344,190 330,162 Z"/>
<circle cx="395" cy="190" r="5"/>
<path d="M446,129 C468,129 494,139.5 506,150 C494,160.5 468,171 446,171 Q460,150 446,129 Z"/>
<circle cx="511" cy="150" r="5"/>
<path d="M330,244 C352,244 378,258 390,272 C378,286 352,300 330,300 Q344,272 330,244 Z"/>
<circle cx="395" cy="272" r="5"/>
<path d="M330,310 C352,310 378,324 390,338 C378,352 352,366 330,366 Q344,338 330,310 Z"/>
<circle cx="395" cy="338" r="5"/>
<path d="M446,284 C468,284 494,294.5 506,305 C494,315.5 468,326 446,326 Q460,305 446,284 Z"/>
<circle cx="511" cy="305" r="5"/>
<path d="M330,392 C352,392 378,406 390,420 C378,434 352,448 330,448 Q344,420 330,392 Z"/>
<circle cx="395" cy="420" r="5"/>
<polygon points="436,408 436,432 458,420"/>
<circle cx="463" cy="420" r="5"/>
<path d="M330,474 C352,474 378,491.5 390,509 C378,526.5 352,544 330,544 Q344,509 330,474 Z"/>
<circle cx="395" cy="509" r="5"/>
<path d="M330,554 C352,554 378,568 390,582 C378,596 352,610 330,610 Q344,582 330,554 Z"/>
<circle cx="395" cy="582" r="5"/>
<path d="M330,620 C352,620 378,634 390,648 C378,662 352,676 330,676 Q344,648 330,620 Z"/>
<circle cx="395" cy="648" r="5"/>
<path d="M456,547 C478,547 504,561 516,575 C504,589 478,603 456,603 Q470,575 456,547 Z"/>
<circle cx="521" cy="575" r="5"/>
<path d="M330,702 C352,702 378,716 390,730 C378,744 352,758 330,758 Q344,730 330,702 Z"/>
<circle cx="395" cy="730" r="5"/>
<path d="M330,768 C352,768 378,782 390,796 C378,810 352,824 330,824 Q344,796 330,768 Z"/>
<circle cx="395" cy="796" r="5"/>
<path d="M446,742 C468,742 494,752.5 506,763 C494,773.5 468,784 446,784 Q460,763 446,742 Z"/>
<circle cx="511" cy="763" r="5"/>
<polygon points="73,40 73,64 95,52"/>
<circle cx="100" cy="52" r="5"/>
<polygon points="151,40 151,64 173,52"/>
<circle cx="178" cy="52" r="5"/>
<polygon points="229,40 229,64 251,52"/>
<circle cx="256" cy="52" r="5"/>
<circle cx="34" cy="96" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="110" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="124" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="138" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="114" cy="176" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="190" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="222" cy="204" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="114" cy="258" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="272" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="286" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="114" cy="324" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="192" cy="338" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="222" cy="352" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="406" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="192" cy="420" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="222" cy="434" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="488" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="502" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="516" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="530" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="114" cy="568" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="582" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="222" cy="596" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="114" cy="634" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="192" cy="648" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="662" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="716" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="730" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="744" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="114" cy="782" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="192" cy="796" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="810" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="222" cy="52" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="552" y="156">a</text>
<text x="552" y="311">b</text>
<text x="504" y="426">c</text>
<text x="562" y="581">d</text>
<text x="552" y="769">g</text>
<text x="34" y="22" text-anchor="middle">A</text>
<text x="66" y="22" text-anchor="middle">B</text>
<text x="144" y="22" text-anchor="middle">C</text>
<text x="222" y="22" text-anchor="middle">D</text>
</svg>
</div>

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="74" height="118" viewBox="0 0 74 118" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(10,8) scale(1.1)"><path d="M7,4 L37,4 L33,10 L11,10 Z" fill-opacity="1"/><path d="M38,5 L38,35 L32,31 L32,11 Z" fill-opacity="1"/><path d="M38,41 L38,71 L32,65 L32,45 Z" fill-opacity="1"/><path d="M7,72 L37,72 L33,66 L11,66 Z" fill-opacity="1"/><path d="M6,41 L6,71 L12,65 L12,45 Z" fill-opacity="0.1"/><path d="M6,5 L6,35 L12,31 L12,11 Z" fill-opacity="0.1"/><path d="M7,38 L11,34 L33,34 L37,38 L33,42 L11,42 Z" fill-opacity="1"/></g>
<text x="34.2" y="108" text-anchor="middle">3</text>
</svg>
</div>

### วงจรของเลข 4 (BCD-8421, NOR อย่างเดียว) {code=bcd; method=nor; digit=4}

$\mathbf{Sol}^{n}$

เลข $4$ ใช้ segment $b, c, f, g$ จึงเขียนวงจรเฉพาะ segment เหล่านี้ ต่อเข้าด้วยกันเป็นวงจรเดียว : ใช้ NOR เกตทั้งสองชั้น : แต่ละพจน์ผลบวกเข้า NOR เกตชั้นแรก (พจน์ตัวแปรเดียวใช้ตัวที่คอมพลีเมนต์ต่อตรง) แล้วนำทุกเอาต์พุตเข้า NOR เกตชั้นที่สอง

$\mathbf{Ans}\quad \begin{aligned}b &= \overline{\overline{\overline{B}+C+\overline{D}}+\overline{\overline{B}+\overline{C}+D}} \\ c &= \overline{\overline{B+\overline{C}+D}} \\ f &= \overline{\overline{A+B+\overline{D}}+\overline{B+\overline{C}}+\overline{\overline{C}+\overline{D}}} \\ g &= \overline{\overline{A+B+C}+\overline{\overline{B}+\overline{C}+\overline{D}}}\end{aligned}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="610" height="646" viewBox="0 0 610 646" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<line x1="34" y1="28" x2="34" y2="512"/>
<line x1="114" y1="52" x2="114" y2="578"/>
<line x1="66" y1="28" x2="66" y2="526"/>
<line x1="192" y1="52" x2="192" y2="592"/>
<line x1="144" y1="28" x2="144" y2="540"/>
<line x1="270" y1="52" x2="270" y2="606"/>
<line x1="222" y1="28" x2="222" y2="272"/>
<line x1="114" y1="96" x2="335.2" y2="96"/>
<line x1="144" y1="110" x2="337" y2="110"/>
<line x1="270" y1="124" x2="335.2" y2="124"/>
<line x1="400" y1="110" x2="436" y2="110"/>
<line x1="436" y1="110" x2="436" y2="136"/>
<line x1="436" y1="136" x2="452.2" y2="136"/>
<line x1="114" y1="162" x2="335.2" y2="162"/>
<line x1="192" y1="176" x2="337" y2="176"/>
<line x1="222" y1="190" x2="335.2" y2="190"/>
<line x1="400" y1="176" x2="426" y2="176"/>
<line x1="426" y1="176" x2="426" y2="150"/>
<line x1="426" y1="150" x2="452.2" y2="150"/>
<line x1="516" y1="143" x2="546" y2="143"/>
<line x1="66" y1="244" x2="335.2" y2="244"/>
<line x1="192" y1="258" x2="337" y2="258"/>
<line x1="222" y1="272" x2="335.2" y2="272"/>
<line x1="400" y1="258" x2="436" y2="258"/>
<line x1="468" y1="258" x2="498" y2="258"/>
<line x1="34" y1="326" x2="335.2" y2="326"/>
<line x1="66" y1="340" x2="337" y2="340"/>
<line x1="270" y1="354" x2="335.2" y2="354"/>
<line x1="400" y1="340" x2="436" y2="340"/>
<line x1="436" y1="340" x2="436" y2="378"/>
<line x1="436" y1="378" x2="461.2" y2="378"/>
<line x1="66" y1="392" x2="336.2" y2="392"/>
<line x1="192" y1="406" x2="336.2" y2="406"/>
<line x1="400" y1="399" x2="426" y2="399"/>
<line x1="426" y1="399" x2="426" y2="392"/>
<line x1="426" y1="392" x2="463" y2="392"/>
<line x1="192" y1="444" x2="336.2" y2="444"/>
<line x1="270" y1="458" x2="336.2" y2="458"/>
<line x1="400" y1="451" x2="446" y2="451"/>
<line x1="446" y1="451" x2="446" y2="406"/>
<line x1="446" y1="406" x2="461.2" y2="406"/>
<line x1="526" y1="392" x2="556" y2="392"/>
<line x1="34" y1="512" x2="335.2" y2="512"/>
<line x1="66" y1="526" x2="337" y2="526"/>
<line x1="144" y1="540" x2="335.2" y2="540"/>
<line x1="400" y1="526" x2="436" y2="526"/>
<line x1="436" y1="526" x2="436" y2="552"/>
<line x1="436" y1="552" x2="452.2" y2="552"/>
<line x1="114" y1="578" x2="335.2" y2="578"/>
<line x1="192" y1="592" x2="337" y2="592"/>
<line x1="270" y1="606" x2="335.2" y2="606"/>
<line x1="400" y1="592" x2="426" y2="592"/>
<line x1="426" y1="592" x2="426" y2="566"/>
<line x1="426" y1="566" x2="452.2" y2="566"/>
<line x1="516" y1="559" x2="546" y2="559"/>
<line x1="66" y1="52" x2="73" y2="52"/>
<line x1="105" y1="52" x2="114" y2="52"/>
<line x1="144" y1="52" x2="151" y2="52"/>
<line x1="183" y1="52" x2="192" y2="52"/>
<line x1="222" y1="52" x2="229" y2="52"/>
<line x1="261" y1="52" x2="270" y2="52"/>
<path d="M330,82 C352,82 378,96 390,110 C378,124 352,138 330,138 Q344,110 330,82 Z"/>
<circle cx="395" cy="110" r="5"/>
<path d="M330,148 C352,148 378,162 390,176 C378,190 352,204 330,204 Q344,176 330,148 Z"/>
<circle cx="395" cy="176" r="5"/>
<path d="M446,122 C468,122 494,132.5 506,143 C494,153.5 468,164 446,164 Q460,143 446,122 Z"/>
<circle cx="511" cy="143" r="5"/>
<path d="M330,230 C352,230 378,244 390,258 C378,272 352,286 330,286 Q344,258 330,230 Z"/>
<circle cx="395" cy="258" r="5"/>
<polygon points="436,246 436,270 458,258"/>
<circle cx="463" cy="258" r="5"/>
<path d="M330,312 C352,312 378,326 390,340 C378,354 352,368 330,368 Q344,340 330,312 Z"/>
<circle cx="395" cy="340" r="5"/>
<path d="M330,378 C352,378 378,388.5 390,399 C378,409.5 352,420 330,420 Q344,399 330,378 Z"/>
<circle cx="395" cy="399" r="5"/>
<path d="M330,430 C352,430 378,440.5 390,451 C378,461.5 352,472 330,472 Q344,451 330,430 Z"/>
<circle cx="395" cy="451" r="5"/>
<path d="M456,364 C478,364 504,378 516,392 C504,406 478,420 456,420 Q470,392 456,364 Z"/>
<circle cx="521" cy="392" r="5"/>
<path d="M330,498 C352,498 378,512 390,526 C378,540 352,554 330,554 Q344,526 330,498 Z"/>
<circle cx="395" cy="526" r="5"/>
<path d="M330,564 C352,564 378,578 390,592 C378,606 352,620 330,620 Q344,592 330,564 Z"/>
<circle cx="395" cy="592" r="5"/>
<path d="M446,538 C468,538 494,548.5 506,559 C494,569.5 468,580 446,580 Q460,559 446,538 Z"/>
<circle cx="511" cy="559" r="5"/>
<polygon points="73,40 73,64 95,52"/>
<circle cx="100" cy="52" r="5"/>
<polygon points="151,40 151,64 173,52"/>
<circle cx="178" cy="52" r="5"/>
<polygon points="229,40 229,64 251,52"/>
<circle cx="256" cy="52" r="5"/>
<circle cx="114" cy="96" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="110" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="124" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="114" cy="162" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="192" cy="176" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="222" cy="190" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="244" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="192" cy="258" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="222" cy="272" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="326" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="340" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="354" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="392" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="192" cy="406" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="192" cy="444" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="458" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="512" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="526" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="540" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="114" cy="578" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="192" cy="592" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="606" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="222" cy="52" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="552" y="149">b</text>
<text x="504" y="264">c</text>
<text x="562" y="398">f</text>
<text x="552" y="565">g</text>
<text x="34" y="22" text-anchor="middle">A</text>
<text x="66" y="22" text-anchor="middle">B</text>
<text x="144" y="22" text-anchor="middle">C</text>
<text x="222" y="22" text-anchor="middle">D</text>
</svg>
</div>

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="74" height="118" viewBox="0 0 74 118" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(10,8) scale(1.1)"><path d="M7,4 L37,4 L33,10 L11,10 Z" fill-opacity="0.1"/><path d="M38,5 L38,35 L32,31 L32,11 Z" fill-opacity="1"/><path d="M38,41 L38,71 L32,65 L32,45 Z" fill-opacity="1"/><path d="M7,72 L37,72 L33,66 L11,66 Z" fill-opacity="0.1"/><path d="M6,41 L6,71 L12,65 L12,45 Z" fill-opacity="0.1"/><path d="M6,5 L6,35 L12,31 L12,11 Z" fill-opacity="1"/><path d="M7,38 L11,34 L33,34 L37,38 L33,42 L11,42 Z" fill-opacity="1"/></g>
<text x="34.2" y="108" text-anchor="middle">4</text>
</svg>
</div>

### วงจรของเลข 5 (BCD-8421, NOR อย่างเดียว) {code=bcd; method=nor; digit=5}

$\mathbf{Sol}^{n}$

เลข $5$ ใช้ segment $a, c, d, f, g$ จึงเขียนวงจรเฉพาะ segment เหล่านี้ ต่อเข้าด้วยกันเป็นวงจรเดียว : ใช้ NOR เกตทั้งสองชั้น : แต่ละพจน์ผลบวกเข้า NOR เกตชั้นแรก (พจน์ตัวแปรเดียวใช้ตัวที่คอมพลีเมนต์ต่อตรง) แล้วนำทุกเอาต์พุตเข้า NOR เกตชั้นที่สอง

$\mathbf{Ans}\quad \begin{aligned}a &= \overline{\overline{A+B+C+\overline{D}}+\overline{\overline{B}+C+D}} \\ c &= \overline{\overline{B+\overline{C}+D}} \\ d &= \overline{\overline{A+B+C+\overline{D}}+\overline{\overline{B}+C+D}+\overline{\overline{B}+\overline{C}+\overline{D}}} \\ f &= \overline{\overline{A+B+\overline{D}}+\overline{B+\overline{C}}+\overline{\overline{C}+\overline{D}}} \\ g &= \overline{\overline{A+B+C}+\overline{\overline{B}+\overline{C}+\overline{D}}}\end{aligned}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="610" height="888" viewBox="0 0 610 888" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<line x1="34" y1="28" x2="34" y2="754"/>
<line x1="114" y1="52" x2="114" y2="820"/>
<line x1="66" y1="28" x2="66" y2="768"/>
<line x1="192" y1="52" x2="192" y2="834"/>
<line x1="144" y1="28" x2="144" y2="782"/>
<line x1="270" y1="52" x2="270" y2="848"/>
<line x1="222" y1="28" x2="222" y2="448"/>
<line x1="34" y1="96" x2="334.5" y2="96"/>
<line x1="66" y1="110" x2="336.7" y2="110"/>
<line x1="144" y1="124" x2="336.7" y2="124"/>
<line x1="270" y1="138" x2="334.5" y2="138"/>
<line x1="400" y1="117" x2="426" y2="117"/>
<line x1="426" y1="117" x2="426" y2="143"/>
<line x1="426" y1="143" x2="452.2" y2="143"/>
<line x1="114" y1="176" x2="335.2" y2="176"/>
<line x1="144" y1="190" x2="337" y2="190"/>
<line x1="222" y1="204" x2="335.2" y2="204"/>
<line x1="400" y1="190" x2="436" y2="190"/>
<line x1="436" y1="190" x2="436" y2="157"/>
<line x1="436" y1="157" x2="452.2" y2="157"/>
<line x1="516" y1="150" x2="546" y2="150"/>
<line x1="66" y1="258" x2="335.2" y2="258"/>
<line x1="192" y1="272" x2="337" y2="272"/>
<line x1="222" y1="286" x2="335.2" y2="286"/>
<line x1="400" y1="272" x2="436" y2="272"/>
<line x1="468" y1="272" x2="498" y2="272"/>
<line x1="34" y1="340" x2="334.5" y2="340"/>
<line x1="66" y1="354" x2="336.7" y2="354"/>
<line x1="144" y1="368" x2="336.7" y2="368"/>
<line x1="270" y1="382" x2="334.5" y2="382"/>
<line x1="400" y1="361" x2="436" y2="361"/>
<line x1="436" y1="361" x2="436" y2="413"/>
<line x1="436" y1="413" x2="461.2" y2="413"/>
<line x1="114" y1="420" x2="335.2" y2="420"/>
<line x1="144" y1="434" x2="337" y2="434"/>
<line x1="222" y1="448" x2="335.2" y2="448"/>
<line x1="400" y1="434" x2="426" y2="434"/>
<line x1="426" y1="434" x2="426" y2="427"/>
<line x1="426" y1="427" x2="463" y2="427"/>
<line x1="114" y1="486" x2="335.2" y2="486"/>
<line x1="192" y1="500" x2="337" y2="500"/>
<line x1="270" y1="514" x2="335.2" y2="514"/>
<line x1="400" y1="500" x2="446" y2="500"/>
<line x1="446" y1="500" x2="446" y2="441"/>
<line x1="446" y1="441" x2="461.2" y2="441"/>
<line x1="526" y1="427" x2="556" y2="427"/>
<line x1="34" y1="568" x2="335.2" y2="568"/>
<line x1="66" y1="582" x2="337" y2="582"/>
<line x1="270" y1="596" x2="335.2" y2="596"/>
<line x1="400" y1="582" x2="436" y2="582"/>
<line x1="436" y1="582" x2="436" y2="620"/>
<line x1="436" y1="620" x2="461.2" y2="620"/>
<line x1="66" y1="634" x2="336.2" y2="634"/>
<line x1="192" y1="648" x2="336.2" y2="648"/>
<line x1="400" y1="641" x2="426" y2="641"/>
<line x1="426" y1="641" x2="426" y2="634"/>
<line x1="426" y1="634" x2="463" y2="634"/>
<line x1="192" y1="686" x2="336.2" y2="686"/>
<line x1="270" y1="700" x2="336.2" y2="700"/>
<line x1="400" y1="693" x2="446" y2="693"/>
<line x1="446" y1="693" x2="446" y2="648"/>
<line x1="446" y1="648" x2="461.2" y2="648"/>
<line x1="526" y1="634" x2="556" y2="634"/>
<line x1="34" y1="754" x2="335.2" y2="754"/>
<line x1="66" y1="768" x2="337" y2="768"/>
<line x1="144" y1="782" x2="335.2" y2="782"/>
<line x1="400" y1="768" x2="436" y2="768"/>
<line x1="436" y1="768" x2="436" y2="794"/>
<line x1="436" y1="794" x2="452.2" y2="794"/>
<line x1="114" y1="820" x2="335.2" y2="820"/>
<line x1="192" y1="834" x2="337" y2="834"/>
<line x1="270" y1="848" x2="335.2" y2="848"/>
<line x1="400" y1="834" x2="426" y2="834"/>
<line x1="426" y1="834" x2="426" y2="808"/>
<line x1="426" y1="808" x2="452.2" y2="808"/>
<line x1="516" y1="801" x2="546" y2="801"/>
<line x1="66" y1="52" x2="73" y2="52"/>
<line x1="105" y1="52" x2="114" y2="52"/>
<line x1="144" y1="52" x2="151" y2="52"/>
<line x1="183" y1="52" x2="192" y2="52"/>
<line x1="222" y1="52" x2="229" y2="52"/>
<line x1="261" y1="52" x2="270" y2="52"/>
<path d="M330,82 C352,82 378,99.5 390,117 C378,134.5 352,152 330,152 Q344,117 330,82 Z"/>
<circle cx="395" cy="117" r="5"/>
<path d="M330,162 C352,162 378,176 390,190 C378,204 352,218 330,218 Q344,190 330,162 Z"/>
<circle cx="395" cy="190" r="5"/>
<path d="M446,129 C468,129 494,139.5 506,150 C494,160.5 468,171 446,171 Q460,150 446,129 Z"/>
<circle cx="511" cy="150" r="5"/>
<path d="M330,244 C352,244 378,258 390,272 C378,286 352,300 330,300 Q344,272 330,244 Z"/>
<circle cx="395" cy="272" r="5"/>
<polygon points="436,260 436,284 458,272"/>
<circle cx="463" cy="272" r="5"/>
<path d="M330,326 C352,326 378,343.5 390,361 C378,378.5 352,396 330,396 Q344,361 330,326 Z"/>
<circle cx="395" cy="361" r="5"/>
<path d="M330,406 C352,406 378,420 390,434 C378,448 352,462 330,462 Q344,434 330,406 Z"/>
<circle cx="395" cy="434" r="5"/>
<path d="M330,472 C352,472 378,486 390,500 C378,514 352,528 330,528 Q344,500 330,472 Z"/>
<circle cx="395" cy="500" r="5"/>
<path d="M456,399 C478,399 504,413 516,427 C504,441 478,455 456,455 Q470,427 456,399 Z"/>
<circle cx="521" cy="427" r="5"/>
<path d="M330,554 C352,554 378,568 390,582 C378,596 352,610 330,610 Q344,582 330,554 Z"/>
<circle cx="395" cy="582" r="5"/>
<path d="M330,620 C352,620 378,630.5 390,641 C378,651.5 352,662 330,662 Q344,641 330,620 Z"/>
<circle cx="395" cy="641" r="5"/>
<path d="M330,672 C352,672 378,682.5 390,693 C378,703.5 352,714 330,714 Q344,693 330,672 Z"/>
<circle cx="395" cy="693" r="5"/>
<path d="M456,606 C478,606 504,620 516,634 C504,648 478,662 456,662 Q470,634 456,606 Z"/>
<circle cx="521" cy="634" r="5"/>
<path d="M330,740 C352,740 378,754 390,768 C378,782 352,796 330,796 Q344,768 330,740 Z"/>
<circle cx="395" cy="768" r="5"/>
<path d="M330,806 C352,806 378,820 390,834 C378,848 352,862 330,862 Q344,834 330,806 Z"/>
<circle cx="395" cy="834" r="5"/>
<path d="M446,780 C468,780 494,790.5 506,801 C494,811.5 468,822 446,822 Q460,801 446,780 Z"/>
<circle cx="511" cy="801" r="5"/>
<polygon points="73,40 73,64 95,52"/>
<circle cx="100" cy="52" r="5"/>
<polygon points="151,40 151,64 173,52"/>
<circle cx="178" cy="52" r="5"/>
<polygon points="229,40 229,64 251,52"/>
<circle cx="256" cy="52" r="5"/>
<circle cx="34" cy="96" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="110" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="124" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="138" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="114" cy="176" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="190" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="222" cy="204" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="258" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="192" cy="272" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="222" cy="286" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="340" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="354" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="368" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="382" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="114" cy="420" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="434" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="222" cy="448" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="114" cy="486" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="192" cy="500" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="514" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="568" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="582" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="596" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="634" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="192" cy="648" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="192" cy="686" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="700" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="754" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="768" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="782" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="114" cy="820" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="192" cy="834" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="848" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="222" cy="52" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="552" y="156">a</text>
<text x="504" y="278">c</text>
<text x="562" y="433">d</text>
<text x="562" y="640">f</text>
<text x="552" y="807">g</text>
<text x="34" y="22" text-anchor="middle">A</text>
<text x="66" y="22" text-anchor="middle">B</text>
<text x="144" y="22" text-anchor="middle">C</text>
<text x="222" y="22" text-anchor="middle">D</text>
</svg>
</div>

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="74" height="118" viewBox="0 0 74 118" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(10,8) scale(1.1)"><path d="M7,4 L37,4 L33,10 L11,10 Z" fill-opacity="1"/><path d="M38,5 L38,35 L32,31 L32,11 Z" fill-opacity="0.1"/><path d="M38,41 L38,71 L32,65 L32,45 Z" fill-opacity="1"/><path d="M7,72 L37,72 L33,66 L11,66 Z" fill-opacity="1"/><path d="M6,41 L6,71 L12,65 L12,45 Z" fill-opacity="0.1"/><path d="M6,5 L6,35 L12,31 L12,11 Z" fill-opacity="1"/><path d="M7,38 L11,34 L33,34 L37,38 L33,42 L11,42 Z" fill-opacity="1"/></g>
<text x="34.2" y="108" text-anchor="middle">5</text>
</svg>
</div>

### วงจรของเลข 6 (BCD-8421, NOR อย่างเดียว) {code=bcd; method=nor; digit=6}

$\mathbf{Sol}^{n}$

เลข $6$ ใช้ segment $a, c, d, e, f, g$ จึงเขียนวงจรเฉพาะ segment เหล่านี้ ต่อเข้าด้วยกันเป็นวงจรเดียว : ใช้ NOR เกตทั้งสองชั้น : แต่ละพจน์ผลบวกเข้า NOR เกตชั้นแรก (พจน์ตัวแปรเดียวใช้ตัวที่คอมพลีเมนต์ต่อตรง) แล้วนำทุกเอาต์พุตเข้า NOR เกตชั้นที่สอง

$\mathbf{Ans}\quad \begin{aligned}a &= \overline{\overline{A+B+C+\overline{D}}+\overline{\overline{B}+C+D}} \\ c &= \overline{\overline{B+\overline{C}+D}} \\ d &= \overline{\overline{A+B+C+\overline{D}}+\overline{\overline{B}+C+D}+\overline{\overline{B}+\overline{C}+\overline{D}}} \\ e &= \overline{D+\overline{\overline{B}+C}} \\ f &= \overline{\overline{A+B+\overline{D}}+\overline{B+\overline{C}}+\overline{\overline{C}+\overline{D}}} \\ g &= \overline{\overline{A+B+C}+\overline{\overline{B}+\overline{C}+\overline{D}}}\end{aligned}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="610" height="980" viewBox="0 0 610 980" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<line x1="34" y1="28" x2="34" y2="846"/>
<line x1="114" y1="52" x2="114" y2="912"/>
<line x1="66" y1="28" x2="66" y2="860"/>
<line x1="192" y1="52" x2="192" y2="926"/>
<line x1="144" y1="28" x2="144" y2="874"/>
<line x1="270" y1="52" x2="270" y2="940"/>
<line x1="222" y1="28" x2="222" y2="561"/>
<line x1="34" y1="96" x2="334.5" y2="96"/>
<line x1="66" y1="110" x2="336.7" y2="110"/>
<line x1="144" y1="124" x2="336.7" y2="124"/>
<line x1="270" y1="138" x2="334.5" y2="138"/>
<line x1="400" y1="117" x2="426" y2="117"/>
<line x1="426" y1="117" x2="426" y2="143"/>
<line x1="426" y1="143" x2="452.2" y2="143"/>
<line x1="114" y1="176" x2="335.2" y2="176"/>
<line x1="144" y1="190" x2="337" y2="190"/>
<line x1="222" y1="204" x2="335.2" y2="204"/>
<line x1="400" y1="190" x2="436" y2="190"/>
<line x1="436" y1="190" x2="436" y2="157"/>
<line x1="436" y1="157" x2="452.2" y2="157"/>
<line x1="516" y1="150" x2="546" y2="150"/>
<line x1="66" y1="258" x2="335.2" y2="258"/>
<line x1="192" y1="272" x2="337" y2="272"/>
<line x1="222" y1="286" x2="335.2" y2="286"/>
<line x1="400" y1="272" x2="436" y2="272"/>
<line x1="468" y1="272" x2="498" y2="272"/>
<line x1="34" y1="340" x2="334.5" y2="340"/>
<line x1="66" y1="354" x2="336.7" y2="354"/>
<line x1="144" y1="368" x2="336.7" y2="368"/>
<line x1="270" y1="382" x2="334.5" y2="382"/>
<line x1="400" y1="361" x2="436" y2="361"/>
<line x1="436" y1="361" x2="436" y2="413"/>
<line x1="436" y1="413" x2="461.2" y2="413"/>
<line x1="114" y1="420" x2="335.2" y2="420"/>
<line x1="144" y1="434" x2="337" y2="434"/>
<line x1="222" y1="448" x2="335.2" y2="448"/>
<line x1="400" y1="434" x2="426" y2="434"/>
<line x1="426" y1="434" x2="426" y2="427"/>
<line x1="426" y1="427" x2="463" y2="427"/>
<line x1="114" y1="486" x2="335.2" y2="486"/>
<line x1="192" y1="500" x2="337" y2="500"/>
<line x1="270" y1="514" x2="335.2" y2="514"/>
<line x1="400" y1="500" x2="446" y2="500"/>
<line x1="446" y1="500" x2="446" y2="441"/>
<line x1="446" y1="441" x2="461.2" y2="441"/>
<line x1="526" y1="427" x2="556" y2="427"/>
<line x1="222" y1="561" x2="436" y2="561"/>
<line x1="436" y1="561" x2="436" y2="580"/>
<line x1="436" y1="580" x2="452.2" y2="580"/>
<line x1="114" y1="592" x2="336.2" y2="592"/>
<line x1="144" y1="606" x2="336.2" y2="606"/>
<line x1="400" y1="599" x2="426" y2="599"/>
<line x1="426" y1="599" x2="426" y2="594"/>
<line x1="426" y1="594" x2="452.2" y2="594"/>
<line x1="516" y1="587" x2="546" y2="587"/>
<line x1="34" y1="660" x2="335.2" y2="660"/>
<line x1="66" y1="674" x2="337" y2="674"/>
<line x1="270" y1="688" x2="335.2" y2="688"/>
<line x1="400" y1="674" x2="436" y2="674"/>
<line x1="436" y1="674" x2="436" y2="712"/>
<line x1="436" y1="712" x2="461.2" y2="712"/>
<line x1="66" y1="726" x2="336.2" y2="726"/>
<line x1="192" y1="740" x2="336.2" y2="740"/>
<line x1="400" y1="733" x2="426" y2="733"/>
<line x1="426" y1="733" x2="426" y2="726"/>
<line x1="426" y1="726" x2="463" y2="726"/>
<line x1="192" y1="778" x2="336.2" y2="778"/>
<line x1="270" y1="792" x2="336.2" y2="792"/>
<line x1="400" y1="785" x2="446" y2="785"/>
<line x1="446" y1="785" x2="446" y2="740"/>
<line x1="446" y1="740" x2="461.2" y2="740"/>
<line x1="526" y1="726" x2="556" y2="726"/>
<line x1="34" y1="846" x2="335.2" y2="846"/>
<line x1="66" y1="860" x2="337" y2="860"/>
<line x1="144" y1="874" x2="335.2" y2="874"/>
<line x1="400" y1="860" x2="436" y2="860"/>
<line x1="436" y1="860" x2="436" y2="886"/>
<line x1="436" y1="886" x2="452.2" y2="886"/>
<line x1="114" y1="912" x2="335.2" y2="912"/>
<line x1="192" y1="926" x2="337" y2="926"/>
<line x1="270" y1="940" x2="335.2" y2="940"/>
<line x1="400" y1="926" x2="426" y2="926"/>
<line x1="426" y1="926" x2="426" y2="900"/>
<line x1="426" y1="900" x2="452.2" y2="900"/>
<line x1="516" y1="893" x2="546" y2="893"/>
<line x1="66" y1="52" x2="73" y2="52"/>
<line x1="105" y1="52" x2="114" y2="52"/>
<line x1="144" y1="52" x2="151" y2="52"/>
<line x1="183" y1="52" x2="192" y2="52"/>
<line x1="222" y1="52" x2="229" y2="52"/>
<line x1="261" y1="52" x2="270" y2="52"/>
<path d="M330,82 C352,82 378,99.5 390,117 C378,134.5 352,152 330,152 Q344,117 330,82 Z"/>
<circle cx="395" cy="117" r="5"/>
<path d="M330,162 C352,162 378,176 390,190 C378,204 352,218 330,218 Q344,190 330,162 Z"/>
<circle cx="395" cy="190" r="5"/>
<path d="M446,129 C468,129 494,139.5 506,150 C494,160.5 468,171 446,171 Q460,150 446,129 Z"/>
<circle cx="511" cy="150" r="5"/>
<path d="M330,244 C352,244 378,258 390,272 C378,286 352,300 330,300 Q344,272 330,244 Z"/>
<circle cx="395" cy="272" r="5"/>
<polygon points="436,260 436,284 458,272"/>
<circle cx="463" cy="272" r="5"/>
<path d="M330,326 C352,326 378,343.5 390,361 C378,378.5 352,396 330,396 Q344,361 330,326 Z"/>
<circle cx="395" cy="361" r="5"/>
<path d="M330,406 C352,406 378,420 390,434 C378,448 352,462 330,462 Q344,434 330,406 Z"/>
<circle cx="395" cy="434" r="5"/>
<path d="M330,472 C352,472 378,486 390,500 C378,514 352,528 330,528 Q344,500 330,472 Z"/>
<circle cx="395" cy="500" r="5"/>
<path d="M456,399 C478,399 504,413 516,427 C504,441 478,455 456,455 Q470,427 456,399 Z"/>
<circle cx="521" cy="427" r="5"/>
<path d="M330,578 C352,578 378,588.5 390,599 C378,609.5 352,620 330,620 Q344,599 330,578 Z"/>
<circle cx="395" cy="599" r="5"/>
<path d="M446,566 C468,566 494,576.5 506,587 C494,597.5 468,608 446,608 Q460,587 446,566 Z"/>
<circle cx="511" cy="587" r="5"/>
<path d="M330,646 C352,646 378,660 390,674 C378,688 352,702 330,702 Q344,674 330,646 Z"/>
<circle cx="395" cy="674" r="5"/>
<path d="M330,712 C352,712 378,722.5 390,733 C378,743.5 352,754 330,754 Q344,733 330,712 Z"/>
<circle cx="395" cy="733" r="5"/>
<path d="M330,764 C352,764 378,774.5 390,785 C378,795.5 352,806 330,806 Q344,785 330,764 Z"/>
<circle cx="395" cy="785" r="5"/>
<path d="M456,698 C478,698 504,712 516,726 C504,740 478,754 456,754 Q470,726 456,698 Z"/>
<circle cx="521" cy="726" r="5"/>
<path d="M330,832 C352,832 378,846 390,860 C378,874 352,888 330,888 Q344,860 330,832 Z"/>
<circle cx="395" cy="860" r="5"/>
<path d="M330,898 C352,898 378,912 390,926 C378,940 352,954 330,954 Q344,926 330,898 Z"/>
<circle cx="395" cy="926" r="5"/>
<path d="M446,872 C468,872 494,882.5 506,893 C494,903.5 468,914 446,914 Q460,893 446,872 Z"/>
<circle cx="511" cy="893" r="5"/>
<polygon points="73,40 73,64 95,52"/>
<circle cx="100" cy="52" r="5"/>
<polygon points="151,40 151,64 173,52"/>
<circle cx="178" cy="52" r="5"/>
<polygon points="229,40 229,64 251,52"/>
<circle cx="256" cy="52" r="5"/>
<circle cx="34" cy="96" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="110" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="124" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="138" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="114" cy="176" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="190" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="222" cy="204" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="258" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="192" cy="272" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="222" cy="286" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="340" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="354" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="368" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="382" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="114" cy="420" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="434" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="222" cy="448" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="114" cy="486" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="192" cy="500" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="514" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="222" cy="561" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="114" cy="592" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="606" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="660" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="674" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="688" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="726" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="192" cy="740" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="192" cy="778" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="792" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="846" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="860" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="874" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="114" cy="912" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="192" cy="926" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="940" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="222" cy="52" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="552" y="156">a</text>
<text x="504" y="278">c</text>
<text x="562" y="433">d</text>
<text x="552" y="593">e</text>
<text x="562" y="732">f</text>
<text x="552" y="899">g</text>
<text x="34" y="22" text-anchor="middle">A</text>
<text x="66" y="22" text-anchor="middle">B</text>
<text x="144" y="22" text-anchor="middle">C</text>
<text x="222" y="22" text-anchor="middle">D</text>
</svg>
</div>

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="74" height="118" viewBox="0 0 74 118" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(10,8) scale(1.1)"><path d="M7,4 L37,4 L33,10 L11,10 Z" fill-opacity="1"/><path d="M38,5 L38,35 L32,31 L32,11 Z" fill-opacity="0.1"/><path d="M38,41 L38,71 L32,65 L32,45 Z" fill-opacity="1"/><path d="M7,72 L37,72 L33,66 L11,66 Z" fill-opacity="1"/><path d="M6,41 L6,71 L12,65 L12,45 Z" fill-opacity="1"/><path d="M6,5 L6,35 L12,31 L12,11 Z" fill-opacity="1"/><path d="M7,38 L11,34 L33,34 L37,38 L33,42 L11,42 Z" fill-opacity="1"/></g>
<text x="34.2" y="108" text-anchor="middle">6</text>
</svg>
</div>

### วงจรของเลข 7 (BCD-8421, NOR อย่างเดียว) {code=bcd; method=nor; digit=7}

$\mathbf{Sol}^{n}$

เลข $7$ ใช้ segment $a, b, c$ จึงเขียนวงจรเฉพาะ segment เหล่านี้ ต่อเข้าด้วยกันเป็นวงจรเดียว : ใช้ NOR เกตทั้งสองชั้น : แต่ละพจน์ผลบวกเข้า NOR เกตชั้นแรก (พจน์ตัวแปรเดียวใช้ตัวที่คอมพลีเมนต์ต่อตรง) แล้วนำทุกเอาต์พุตเข้า NOR เกตชั้นที่สอง

$\mathbf{Ans}\quad \begin{aligned}a &= \overline{\overline{A+B+C+\overline{D}}+\overline{\overline{B}+C+D}} \\ b &= \overline{\overline{\overline{B}+C+\overline{D}}+\overline{\overline{B}+\overline{C}+D}} \\ c &= \overline{\overline{B+\overline{C}+D}}\end{aligned}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="600" height="474" viewBox="0 0 600 474" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<line x1="34" y1="28" x2="34" y2="96"/>
<line x1="114" y1="52" x2="114" y2="324"/>
<line x1="66" y1="28" x2="66" y2="406"/>
<line x1="192" y1="52" x2="192" y2="420"/>
<line x1="144" y1="28" x2="144" y2="272"/>
<line x1="270" y1="52" x2="270" y2="286"/>
<line x1="222" y1="28" x2="222" y2="434"/>
<line x1="34" y1="96" x2="334.5" y2="96"/>
<line x1="66" y1="110" x2="336.7" y2="110"/>
<line x1="144" y1="124" x2="336.7" y2="124"/>
<line x1="270" y1="138" x2="334.5" y2="138"/>
<line x1="400" y1="117" x2="426" y2="117"/>
<line x1="426" y1="117" x2="426" y2="143"/>
<line x1="426" y1="143" x2="452.2" y2="143"/>
<line x1="114" y1="176" x2="335.2" y2="176"/>
<line x1="144" y1="190" x2="337" y2="190"/>
<line x1="222" y1="204" x2="335.2" y2="204"/>
<line x1="400" y1="190" x2="436" y2="190"/>
<line x1="436" y1="190" x2="436" y2="157"/>
<line x1="436" y1="157" x2="452.2" y2="157"/>
<line x1="516" y1="150" x2="546" y2="150"/>
<line x1="114" y1="258" x2="335.2" y2="258"/>
<line x1="144" y1="272" x2="337" y2="272"/>
<line x1="270" y1="286" x2="335.2" y2="286"/>
<line x1="400" y1="272" x2="436" y2="272"/>
<line x1="436" y1="272" x2="436" y2="298"/>
<line x1="436" y1="298" x2="452.2" y2="298"/>
<line x1="114" y1="324" x2="335.2" y2="324"/>
<line x1="192" y1="338" x2="337" y2="338"/>
<line x1="222" y1="352" x2="335.2" y2="352"/>
<line x1="400" y1="338" x2="426" y2="338"/>
<line x1="426" y1="338" x2="426" y2="312"/>
<line x1="426" y1="312" x2="452.2" y2="312"/>
<line x1="516" y1="305" x2="546" y2="305"/>
<line x1="66" y1="406" x2="335.2" y2="406"/>
<line x1="192" y1="420" x2="337" y2="420"/>
<line x1="222" y1="434" x2="335.2" y2="434"/>
<line x1="400" y1="420" x2="436" y2="420"/>
<line x1="468" y1="420" x2="498" y2="420"/>
<line x1="66" y1="52" x2="73" y2="52"/>
<line x1="105" y1="52" x2="114" y2="52"/>
<line x1="144" y1="52" x2="151" y2="52"/>
<line x1="183" y1="52" x2="192" y2="52"/>
<line x1="222" y1="52" x2="229" y2="52"/>
<line x1="261" y1="52" x2="270" y2="52"/>
<path d="M330,82 C352,82 378,99.5 390,117 C378,134.5 352,152 330,152 Q344,117 330,82 Z"/>
<circle cx="395" cy="117" r="5"/>
<path d="M330,162 C352,162 378,176 390,190 C378,204 352,218 330,218 Q344,190 330,162 Z"/>
<circle cx="395" cy="190" r="5"/>
<path d="M446,129 C468,129 494,139.5 506,150 C494,160.5 468,171 446,171 Q460,150 446,129 Z"/>
<circle cx="511" cy="150" r="5"/>
<path d="M330,244 C352,244 378,258 390,272 C378,286 352,300 330,300 Q344,272 330,244 Z"/>
<circle cx="395" cy="272" r="5"/>
<path d="M330,310 C352,310 378,324 390,338 C378,352 352,366 330,366 Q344,338 330,310 Z"/>
<circle cx="395" cy="338" r="5"/>
<path d="M446,284 C468,284 494,294.5 506,305 C494,315.5 468,326 446,326 Q460,305 446,284 Z"/>
<circle cx="511" cy="305" r="5"/>
<path d="M330,392 C352,392 378,406 390,420 C378,434 352,448 330,448 Q344,420 330,392 Z"/>
<circle cx="395" cy="420" r="5"/>
<polygon points="436,408 436,432 458,420"/>
<circle cx="463" cy="420" r="5"/>
<polygon points="73,40 73,64 95,52"/>
<circle cx="100" cy="52" r="5"/>
<polygon points="151,40 151,64 173,52"/>
<circle cx="178" cy="52" r="5"/>
<polygon points="229,40 229,64 251,52"/>
<circle cx="256" cy="52" r="5"/>
<circle cx="34" cy="96" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="110" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="124" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="138" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="114" cy="176" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="190" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="222" cy="204" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="114" cy="258" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="272" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="286" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="114" cy="324" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="192" cy="338" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="222" cy="352" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="406" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="192" cy="420" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="222" cy="434" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="222" cy="52" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="552" y="156">a</text>
<text x="552" y="311">b</text>
<text x="504" y="426">c</text>
<text x="34" y="22" text-anchor="middle">A</text>
<text x="66" y="22" text-anchor="middle">B</text>
<text x="144" y="22" text-anchor="middle">C</text>
<text x="222" y="22" text-anchor="middle">D</text>
</svg>
</div>

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="74" height="118" viewBox="0 0 74 118" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(10,8) scale(1.1)"><path d="M7,4 L37,4 L33,10 L11,10 Z" fill-opacity="1"/><path d="M38,5 L38,35 L32,31 L32,11 Z" fill-opacity="1"/><path d="M38,41 L38,71 L32,65 L32,45 Z" fill-opacity="1"/><path d="M7,72 L37,72 L33,66 L11,66 Z" fill-opacity="0.1"/><path d="M6,41 L6,71 L12,65 L12,45 Z" fill-opacity="0.1"/><path d="M6,5 L6,35 L12,31 L12,11 Z" fill-opacity="0.1"/><path d="M7,38 L11,34 L33,34 L37,38 L33,42 L11,42 Z" fill-opacity="0.1"/></g>
<text x="34.2" y="108" text-anchor="middle">7</text>
</svg>
</div>

### วงจรของเลข 8 (BCD-8421, NOR อย่างเดียว) {code=bcd; method=nor; digit=8}

$\mathbf{Sol}^{n}$

เลข $8$ ใช้ segment $a, b, c, d, e, f, g$ จึงเขียนวงจรเฉพาะ segment เหล่านี้ ต่อเข้าด้วยกันเป็นวงจรเดียว : ใช้ NOR เกตทั้งสองชั้น : แต่ละพจน์ผลบวกเข้า NOR เกตชั้นแรก (พจน์ตัวแปรเดียวใช้ตัวที่คอมพลีเมนต์ต่อตรง) แล้วนำทุกเอาต์พุตเข้า NOR เกตชั้นที่สอง

$\mathbf{Ans}\quad \begin{aligned}a &= \overline{\overline{A+B+C+\overline{D}}+\overline{\overline{B}+C+D}} \\ b &= \overline{\overline{\overline{B}+C+\overline{D}}+\overline{\overline{B}+\overline{C}+D}} \\ c &= \overline{\overline{B+\overline{C}+D}} \\ d &= \overline{\overline{A+B+C+\overline{D}}+\overline{\overline{B}+C+D}+\overline{\overline{B}+\overline{C}+\overline{D}}} \\ e &= \overline{D+\overline{\overline{B}+C}} \\ f &= \overline{\overline{A+B+\overline{D}}+\overline{B+\overline{C}}+\overline{\overline{C}+\overline{D}}} \\ g &= \overline{\overline{A+B+C}+\overline{\overline{B}+\overline{C}+\overline{D}}}\end{aligned}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="610" height="1128" viewBox="0 0 610 1128" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<line x1="34" y1="28" x2="34" y2="994"/>
<line x1="114" y1="52" x2="114" y2="1060"/>
<line x1="66" y1="28" x2="66" y2="1008"/>
<line x1="192" y1="52" x2="192" y2="1074"/>
<line x1="144" y1="28" x2="144" y2="1022"/>
<line x1="270" y1="52" x2="270" y2="1088"/>
<line x1="222" y1="28" x2="222" y2="709"/>
<line x1="34" y1="96" x2="334.5" y2="96"/>
<line x1="66" y1="110" x2="336.7" y2="110"/>
<line x1="144" y1="124" x2="336.7" y2="124"/>
<line x1="270" y1="138" x2="334.5" y2="138"/>
<line x1="400" y1="117" x2="426" y2="117"/>
<line x1="426" y1="117" x2="426" y2="143"/>
<line x1="426" y1="143" x2="452.2" y2="143"/>
<line x1="114" y1="176" x2="335.2" y2="176"/>
<line x1="144" y1="190" x2="337" y2="190"/>
<line x1="222" y1="204" x2="335.2" y2="204"/>
<line x1="400" y1="190" x2="436" y2="190"/>
<line x1="436" y1="190" x2="436" y2="157"/>
<line x1="436" y1="157" x2="452.2" y2="157"/>
<line x1="516" y1="150" x2="546" y2="150"/>
<line x1="114" y1="258" x2="335.2" y2="258"/>
<line x1="144" y1="272" x2="337" y2="272"/>
<line x1="270" y1="286" x2="335.2" y2="286"/>
<line x1="400" y1="272" x2="436" y2="272"/>
<line x1="436" y1="272" x2="436" y2="298"/>
<line x1="436" y1="298" x2="452.2" y2="298"/>
<line x1="114" y1="324" x2="335.2" y2="324"/>
<line x1="192" y1="338" x2="337" y2="338"/>
<line x1="222" y1="352" x2="335.2" y2="352"/>
<line x1="400" y1="338" x2="426" y2="338"/>
<line x1="426" y1="338" x2="426" y2="312"/>
<line x1="426" y1="312" x2="452.2" y2="312"/>
<line x1="516" y1="305" x2="546" y2="305"/>
<line x1="66" y1="406" x2="335.2" y2="406"/>
<line x1="192" y1="420" x2="337" y2="420"/>
<line x1="222" y1="434" x2="335.2" y2="434"/>
<line x1="400" y1="420" x2="436" y2="420"/>
<line x1="468" y1="420" x2="498" y2="420"/>
<line x1="34" y1="488" x2="334.5" y2="488"/>
<line x1="66" y1="502" x2="336.7" y2="502"/>
<line x1="144" y1="516" x2="336.7" y2="516"/>
<line x1="270" y1="530" x2="334.5" y2="530"/>
<line x1="400" y1="509" x2="436" y2="509"/>
<line x1="436" y1="509" x2="436" y2="561"/>
<line x1="436" y1="561" x2="461.2" y2="561"/>
<line x1="114" y1="568" x2="335.2" y2="568"/>
<line x1="144" y1="582" x2="337" y2="582"/>
<line x1="222" y1="596" x2="335.2" y2="596"/>
<line x1="400" y1="582" x2="426" y2="582"/>
<line x1="426" y1="582" x2="426" y2="575"/>
<line x1="426" y1="575" x2="463" y2="575"/>
<line x1="114" y1="634" x2="335.2" y2="634"/>
<line x1="192" y1="648" x2="337" y2="648"/>
<line x1="270" y1="662" x2="335.2" y2="662"/>
<line x1="400" y1="648" x2="446" y2="648"/>
<line x1="446" y1="648" x2="446" y2="589"/>
<line x1="446" y1="589" x2="461.2" y2="589"/>
<line x1="526" y1="575" x2="556" y2="575"/>
<line x1="222" y1="709" x2="436" y2="709"/>
<line x1="436" y1="709" x2="436" y2="728"/>
<line x1="436" y1="728" x2="452.2" y2="728"/>
<line x1="114" y1="740" x2="336.2" y2="740"/>
<line x1="144" y1="754" x2="336.2" y2="754"/>
<line x1="400" y1="747" x2="426" y2="747"/>
<line x1="426" y1="747" x2="426" y2="742"/>
<line x1="426" y1="742" x2="452.2" y2="742"/>
<line x1="516" y1="735" x2="546" y2="735"/>
<line x1="34" y1="808" x2="335.2" y2="808"/>
<line x1="66" y1="822" x2="337" y2="822"/>
<line x1="270" y1="836" x2="335.2" y2="836"/>
<line x1="400" y1="822" x2="436" y2="822"/>
<line x1="436" y1="822" x2="436" y2="860"/>
<line x1="436" y1="860" x2="461.2" y2="860"/>
<line x1="66" y1="874" x2="336.2" y2="874"/>
<line x1="192" y1="888" x2="336.2" y2="888"/>
<line x1="400" y1="881" x2="426" y2="881"/>
<line x1="426" y1="881" x2="426" y2="874"/>
<line x1="426" y1="874" x2="463" y2="874"/>
<line x1="192" y1="926" x2="336.2" y2="926"/>
<line x1="270" y1="940" x2="336.2" y2="940"/>
<line x1="400" y1="933" x2="446" y2="933"/>
<line x1="446" y1="933" x2="446" y2="888"/>
<line x1="446" y1="888" x2="461.2" y2="888"/>
<line x1="526" y1="874" x2="556" y2="874"/>
<line x1="34" y1="994" x2="335.2" y2="994"/>
<line x1="66" y1="1008" x2="337" y2="1008"/>
<line x1="144" y1="1022" x2="335.2" y2="1022"/>
<line x1="400" y1="1008" x2="436" y2="1008"/>
<line x1="436" y1="1008" x2="436" y2="1034"/>
<line x1="436" y1="1034" x2="452.2" y2="1034"/>
<line x1="114" y1="1060" x2="335.2" y2="1060"/>
<line x1="192" y1="1074" x2="337" y2="1074"/>
<line x1="270" y1="1088" x2="335.2" y2="1088"/>
<line x1="400" y1="1074" x2="426" y2="1074"/>
<line x1="426" y1="1074" x2="426" y2="1048"/>
<line x1="426" y1="1048" x2="452.2" y2="1048"/>
<line x1="516" y1="1041" x2="546" y2="1041"/>
<line x1="66" y1="52" x2="73" y2="52"/>
<line x1="105" y1="52" x2="114" y2="52"/>
<line x1="144" y1="52" x2="151" y2="52"/>
<line x1="183" y1="52" x2="192" y2="52"/>
<line x1="222" y1="52" x2="229" y2="52"/>
<line x1="261" y1="52" x2="270" y2="52"/>
<path d="M330,82 C352,82 378,99.5 390,117 C378,134.5 352,152 330,152 Q344,117 330,82 Z"/>
<circle cx="395" cy="117" r="5"/>
<path d="M330,162 C352,162 378,176 390,190 C378,204 352,218 330,218 Q344,190 330,162 Z"/>
<circle cx="395" cy="190" r="5"/>
<path d="M446,129 C468,129 494,139.5 506,150 C494,160.5 468,171 446,171 Q460,150 446,129 Z"/>
<circle cx="511" cy="150" r="5"/>
<path d="M330,244 C352,244 378,258 390,272 C378,286 352,300 330,300 Q344,272 330,244 Z"/>
<circle cx="395" cy="272" r="5"/>
<path d="M330,310 C352,310 378,324 390,338 C378,352 352,366 330,366 Q344,338 330,310 Z"/>
<circle cx="395" cy="338" r="5"/>
<path d="M446,284 C468,284 494,294.5 506,305 C494,315.5 468,326 446,326 Q460,305 446,284 Z"/>
<circle cx="511" cy="305" r="5"/>
<path d="M330,392 C352,392 378,406 390,420 C378,434 352,448 330,448 Q344,420 330,392 Z"/>
<circle cx="395" cy="420" r="5"/>
<polygon points="436,408 436,432 458,420"/>
<circle cx="463" cy="420" r="5"/>
<path d="M330,474 C352,474 378,491.5 390,509 C378,526.5 352,544 330,544 Q344,509 330,474 Z"/>
<circle cx="395" cy="509" r="5"/>
<path d="M330,554 C352,554 378,568 390,582 C378,596 352,610 330,610 Q344,582 330,554 Z"/>
<circle cx="395" cy="582" r="5"/>
<path d="M330,620 C352,620 378,634 390,648 C378,662 352,676 330,676 Q344,648 330,620 Z"/>
<circle cx="395" cy="648" r="5"/>
<path d="M456,547 C478,547 504,561 516,575 C504,589 478,603 456,603 Q470,575 456,547 Z"/>
<circle cx="521" cy="575" r="5"/>
<path d="M330,726 C352,726 378,736.5 390,747 C378,757.5 352,768 330,768 Q344,747 330,726 Z"/>
<circle cx="395" cy="747" r="5"/>
<path d="M446,714 C468,714 494,724.5 506,735 C494,745.5 468,756 446,756 Q460,735 446,714 Z"/>
<circle cx="511" cy="735" r="5"/>
<path d="M330,794 C352,794 378,808 390,822 C378,836 352,850 330,850 Q344,822 330,794 Z"/>
<circle cx="395" cy="822" r="5"/>
<path d="M330,860 C352,860 378,870.5 390,881 C378,891.5 352,902 330,902 Q344,881 330,860 Z"/>
<circle cx="395" cy="881" r="5"/>
<path d="M330,912 C352,912 378,922.5 390,933 C378,943.5 352,954 330,954 Q344,933 330,912 Z"/>
<circle cx="395" cy="933" r="5"/>
<path d="M456,846 C478,846 504,860 516,874 C504,888 478,902 456,902 Q470,874 456,846 Z"/>
<circle cx="521" cy="874" r="5"/>
<path d="M330,980 C352,980 378,994 390,1008 C378,1022 352,1036 330,1036 Q344,1008 330,980 Z"/>
<circle cx="395" cy="1008" r="5"/>
<path d="M330,1046 C352,1046 378,1060 390,1074 C378,1088 352,1102 330,1102 Q344,1074 330,1046 Z"/>
<circle cx="395" cy="1074" r="5"/>
<path d="M446,1020 C468,1020 494,1030.5 506,1041 C494,1051.5 468,1062 446,1062 Q460,1041 446,1020 Z"/>
<circle cx="511" cy="1041" r="5"/>
<polygon points="73,40 73,64 95,52"/>
<circle cx="100" cy="52" r="5"/>
<polygon points="151,40 151,64 173,52"/>
<circle cx="178" cy="52" r="5"/>
<polygon points="229,40 229,64 251,52"/>
<circle cx="256" cy="52" r="5"/>
<circle cx="34" cy="96" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="110" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="124" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="138" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="114" cy="176" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="190" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="222" cy="204" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="114" cy="258" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="272" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="286" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="114" cy="324" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="192" cy="338" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="222" cy="352" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="406" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="192" cy="420" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="222" cy="434" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="488" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="502" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="516" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="530" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="114" cy="568" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="582" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="222" cy="596" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="114" cy="634" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="192" cy="648" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="662" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="222" cy="709" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="114" cy="740" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="754" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="808" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="822" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="836" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="874" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="192" cy="888" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="192" cy="926" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="940" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="994" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="1008" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="1022" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="114" cy="1060" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="192" cy="1074" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="1088" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="222" cy="52" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="552" y="156">a</text>
<text x="552" y="311">b</text>
<text x="504" y="426">c</text>
<text x="562" y="581">d</text>
<text x="552" y="741">e</text>
<text x="562" y="880">f</text>
<text x="552" y="1047">g</text>
<text x="34" y="22" text-anchor="middle">A</text>
<text x="66" y="22" text-anchor="middle">B</text>
<text x="144" y="22" text-anchor="middle">C</text>
<text x="222" y="22" text-anchor="middle">D</text>
</svg>
</div>

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="74" height="118" viewBox="0 0 74 118" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(10,8) scale(1.1)"><path d="M7,4 L37,4 L33,10 L11,10 Z" fill-opacity="1"/><path d="M38,5 L38,35 L32,31 L32,11 Z" fill-opacity="1"/><path d="M38,41 L38,71 L32,65 L32,45 Z" fill-opacity="1"/><path d="M7,72 L37,72 L33,66 L11,66 Z" fill-opacity="1"/><path d="M6,41 L6,71 L12,65 L12,45 Z" fill-opacity="1"/><path d="M6,5 L6,35 L12,31 L12,11 Z" fill-opacity="1"/><path d="M7,38 L11,34 L33,34 L37,38 L33,42 L11,42 Z" fill-opacity="1"/></g>
<text x="34.2" y="108" text-anchor="middle">8</text>
</svg>
</div>

### วงจรของเลข 9 (BCD-8421, NOR อย่างเดียว) {code=bcd; method=nor; digit=9}

$\mathbf{Sol}^{n}$

เลข $9$ ใช้ segment $a, b, c, d, f, g$ จึงเขียนวงจรเฉพาะ segment เหล่านี้ ต่อเข้าด้วยกันเป็นวงจรเดียว : ใช้ NOR เกตทั้งสองชั้น : แต่ละพจน์ผลบวกเข้า NOR เกตชั้นแรก (พจน์ตัวแปรเดียวใช้ตัวที่คอมพลีเมนต์ต่อตรง) แล้วนำทุกเอาต์พุตเข้า NOR เกตชั้นที่สอง

$\mathbf{Ans}\quad \begin{aligned}a &= \overline{\overline{A+B+C+\overline{D}}+\overline{\overline{B}+C+D}} \\ b &= \overline{\overline{\overline{B}+C+\overline{D}}+\overline{\overline{B}+\overline{C}+D}} \\ c &= \overline{\overline{B+\overline{C}+D}} \\ d &= \overline{\overline{A+B+C+\overline{D}}+\overline{\overline{B}+C+D}+\overline{\overline{B}+\overline{C}+\overline{D}}} \\ f &= \overline{\overline{A+B+\overline{D}}+\overline{B+\overline{C}}+\overline{\overline{C}+\overline{D}}} \\ g &= \overline{\overline{A+B+C}+\overline{\overline{B}+\overline{C}+\overline{D}}}\end{aligned}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="610" height="1036" viewBox="0 0 610 1036" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<line x1="34" y1="28" x2="34" y2="902"/>
<line x1="114" y1="52" x2="114" y2="968"/>
<line x1="66" y1="28" x2="66" y2="916"/>
<line x1="192" y1="52" x2="192" y2="982"/>
<line x1="144" y1="28" x2="144" y2="930"/>
<line x1="270" y1="52" x2="270" y2="996"/>
<line x1="222" y1="28" x2="222" y2="596"/>
<line x1="34" y1="96" x2="334.5" y2="96"/>
<line x1="66" y1="110" x2="336.7" y2="110"/>
<line x1="144" y1="124" x2="336.7" y2="124"/>
<line x1="270" y1="138" x2="334.5" y2="138"/>
<line x1="400" y1="117" x2="426" y2="117"/>
<line x1="426" y1="117" x2="426" y2="143"/>
<line x1="426" y1="143" x2="452.2" y2="143"/>
<line x1="114" y1="176" x2="335.2" y2="176"/>
<line x1="144" y1="190" x2="337" y2="190"/>
<line x1="222" y1="204" x2="335.2" y2="204"/>
<line x1="400" y1="190" x2="436" y2="190"/>
<line x1="436" y1="190" x2="436" y2="157"/>
<line x1="436" y1="157" x2="452.2" y2="157"/>
<line x1="516" y1="150" x2="546" y2="150"/>
<line x1="114" y1="258" x2="335.2" y2="258"/>
<line x1="144" y1="272" x2="337" y2="272"/>
<line x1="270" y1="286" x2="335.2" y2="286"/>
<line x1="400" y1="272" x2="436" y2="272"/>
<line x1="436" y1="272" x2="436" y2="298"/>
<line x1="436" y1="298" x2="452.2" y2="298"/>
<line x1="114" y1="324" x2="335.2" y2="324"/>
<line x1="192" y1="338" x2="337" y2="338"/>
<line x1="222" y1="352" x2="335.2" y2="352"/>
<line x1="400" y1="338" x2="426" y2="338"/>
<line x1="426" y1="338" x2="426" y2="312"/>
<line x1="426" y1="312" x2="452.2" y2="312"/>
<line x1="516" y1="305" x2="546" y2="305"/>
<line x1="66" y1="406" x2="335.2" y2="406"/>
<line x1="192" y1="420" x2="337" y2="420"/>
<line x1="222" y1="434" x2="335.2" y2="434"/>
<line x1="400" y1="420" x2="436" y2="420"/>
<line x1="468" y1="420" x2="498" y2="420"/>
<line x1="34" y1="488" x2="334.5" y2="488"/>
<line x1="66" y1="502" x2="336.7" y2="502"/>
<line x1="144" y1="516" x2="336.7" y2="516"/>
<line x1="270" y1="530" x2="334.5" y2="530"/>
<line x1="400" y1="509" x2="436" y2="509"/>
<line x1="436" y1="509" x2="436" y2="561"/>
<line x1="436" y1="561" x2="461.2" y2="561"/>
<line x1="114" y1="568" x2="335.2" y2="568"/>
<line x1="144" y1="582" x2="337" y2="582"/>
<line x1="222" y1="596" x2="335.2" y2="596"/>
<line x1="400" y1="582" x2="426" y2="582"/>
<line x1="426" y1="582" x2="426" y2="575"/>
<line x1="426" y1="575" x2="463" y2="575"/>
<line x1="114" y1="634" x2="335.2" y2="634"/>
<line x1="192" y1="648" x2="337" y2="648"/>
<line x1="270" y1="662" x2="335.2" y2="662"/>
<line x1="400" y1="648" x2="446" y2="648"/>
<line x1="446" y1="648" x2="446" y2="589"/>
<line x1="446" y1="589" x2="461.2" y2="589"/>
<line x1="526" y1="575" x2="556" y2="575"/>
<line x1="34" y1="716" x2="335.2" y2="716"/>
<line x1="66" y1="730" x2="337" y2="730"/>
<line x1="270" y1="744" x2="335.2" y2="744"/>
<line x1="400" y1="730" x2="436" y2="730"/>
<line x1="436" y1="730" x2="436" y2="768"/>
<line x1="436" y1="768" x2="461.2" y2="768"/>
<line x1="66" y1="782" x2="336.2" y2="782"/>
<line x1="192" y1="796" x2="336.2" y2="796"/>
<line x1="400" y1="789" x2="426" y2="789"/>
<line x1="426" y1="789" x2="426" y2="782"/>
<line x1="426" y1="782" x2="463" y2="782"/>
<line x1="192" y1="834" x2="336.2" y2="834"/>
<line x1="270" y1="848" x2="336.2" y2="848"/>
<line x1="400" y1="841" x2="446" y2="841"/>
<line x1="446" y1="841" x2="446" y2="796"/>
<line x1="446" y1="796" x2="461.2" y2="796"/>
<line x1="526" y1="782" x2="556" y2="782"/>
<line x1="34" y1="902" x2="335.2" y2="902"/>
<line x1="66" y1="916" x2="337" y2="916"/>
<line x1="144" y1="930" x2="335.2" y2="930"/>
<line x1="400" y1="916" x2="436" y2="916"/>
<line x1="436" y1="916" x2="436" y2="942"/>
<line x1="436" y1="942" x2="452.2" y2="942"/>
<line x1="114" y1="968" x2="335.2" y2="968"/>
<line x1="192" y1="982" x2="337" y2="982"/>
<line x1="270" y1="996" x2="335.2" y2="996"/>
<line x1="400" y1="982" x2="426" y2="982"/>
<line x1="426" y1="982" x2="426" y2="956"/>
<line x1="426" y1="956" x2="452.2" y2="956"/>
<line x1="516" y1="949" x2="546" y2="949"/>
<line x1="66" y1="52" x2="73" y2="52"/>
<line x1="105" y1="52" x2="114" y2="52"/>
<line x1="144" y1="52" x2="151" y2="52"/>
<line x1="183" y1="52" x2="192" y2="52"/>
<line x1="222" y1="52" x2="229" y2="52"/>
<line x1="261" y1="52" x2="270" y2="52"/>
<path d="M330,82 C352,82 378,99.5 390,117 C378,134.5 352,152 330,152 Q344,117 330,82 Z"/>
<circle cx="395" cy="117" r="5"/>
<path d="M330,162 C352,162 378,176 390,190 C378,204 352,218 330,218 Q344,190 330,162 Z"/>
<circle cx="395" cy="190" r="5"/>
<path d="M446,129 C468,129 494,139.5 506,150 C494,160.5 468,171 446,171 Q460,150 446,129 Z"/>
<circle cx="511" cy="150" r="5"/>
<path d="M330,244 C352,244 378,258 390,272 C378,286 352,300 330,300 Q344,272 330,244 Z"/>
<circle cx="395" cy="272" r="5"/>
<path d="M330,310 C352,310 378,324 390,338 C378,352 352,366 330,366 Q344,338 330,310 Z"/>
<circle cx="395" cy="338" r="5"/>
<path d="M446,284 C468,284 494,294.5 506,305 C494,315.5 468,326 446,326 Q460,305 446,284 Z"/>
<circle cx="511" cy="305" r="5"/>
<path d="M330,392 C352,392 378,406 390,420 C378,434 352,448 330,448 Q344,420 330,392 Z"/>
<circle cx="395" cy="420" r="5"/>
<polygon points="436,408 436,432 458,420"/>
<circle cx="463" cy="420" r="5"/>
<path d="M330,474 C352,474 378,491.5 390,509 C378,526.5 352,544 330,544 Q344,509 330,474 Z"/>
<circle cx="395" cy="509" r="5"/>
<path d="M330,554 C352,554 378,568 390,582 C378,596 352,610 330,610 Q344,582 330,554 Z"/>
<circle cx="395" cy="582" r="5"/>
<path d="M330,620 C352,620 378,634 390,648 C378,662 352,676 330,676 Q344,648 330,620 Z"/>
<circle cx="395" cy="648" r="5"/>
<path d="M456,547 C478,547 504,561 516,575 C504,589 478,603 456,603 Q470,575 456,547 Z"/>
<circle cx="521" cy="575" r="5"/>
<path d="M330,702 C352,702 378,716 390,730 C378,744 352,758 330,758 Q344,730 330,702 Z"/>
<circle cx="395" cy="730" r="5"/>
<path d="M330,768 C352,768 378,778.5 390,789 C378,799.5 352,810 330,810 Q344,789 330,768 Z"/>
<circle cx="395" cy="789" r="5"/>
<path d="M330,820 C352,820 378,830.5 390,841 C378,851.5 352,862 330,862 Q344,841 330,820 Z"/>
<circle cx="395" cy="841" r="5"/>
<path d="M456,754 C478,754 504,768 516,782 C504,796 478,810 456,810 Q470,782 456,754 Z"/>
<circle cx="521" cy="782" r="5"/>
<path d="M330,888 C352,888 378,902 390,916 C378,930 352,944 330,944 Q344,916 330,888 Z"/>
<circle cx="395" cy="916" r="5"/>
<path d="M330,954 C352,954 378,968 390,982 C378,996 352,1010 330,1010 Q344,982 330,954 Z"/>
<circle cx="395" cy="982" r="5"/>
<path d="M446,928 C468,928 494,938.5 506,949 C494,959.5 468,970 446,970 Q460,949 446,928 Z"/>
<circle cx="511" cy="949" r="5"/>
<polygon points="73,40 73,64 95,52"/>
<circle cx="100" cy="52" r="5"/>
<polygon points="151,40 151,64 173,52"/>
<circle cx="178" cy="52" r="5"/>
<polygon points="229,40 229,64 251,52"/>
<circle cx="256" cy="52" r="5"/>
<circle cx="34" cy="96" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="110" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="124" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="138" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="114" cy="176" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="190" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="222" cy="204" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="114" cy="258" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="272" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="286" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="114" cy="324" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="192" cy="338" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="222" cy="352" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="406" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="192" cy="420" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="222" cy="434" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="488" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="502" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="516" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="530" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="114" cy="568" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="582" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="222" cy="596" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="114" cy="634" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="192" cy="648" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="662" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="716" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="730" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="744" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="782" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="192" cy="796" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="192" cy="834" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="848" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="902" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="916" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="930" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="114" cy="968" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="192" cy="982" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="996" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="222" cy="52" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="552" y="156">a</text>
<text x="552" y="311">b</text>
<text x="504" y="426">c</text>
<text x="562" y="581">d</text>
<text x="562" y="788">f</text>
<text x="552" y="955">g</text>
<text x="34" y="22" text-anchor="middle">A</text>
<text x="66" y="22" text-anchor="middle">B</text>
<text x="144" y="22" text-anchor="middle">C</text>
<text x="222" y="22" text-anchor="middle">D</text>
</svg>
</div>

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="74" height="118" viewBox="0 0 74 118" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(10,8) scale(1.1)"><path d="M7,4 L37,4 L33,10 L11,10 Z" fill-opacity="1"/><path d="M38,5 L38,35 L32,31 L32,11 Z" fill-opacity="1"/><path d="M38,41 L38,71 L32,65 L32,45 Z" fill-opacity="1"/><path d="M7,72 L37,72 L33,66 L11,66 Z" fill-opacity="1"/><path d="M6,41 L6,71 L12,65 L12,45 Z" fill-opacity="0.1"/><path d="M6,5 L6,35 L12,31 L12,11 Z" fill-opacity="1"/><path d="M7,38 L11,34 L33,34 L37,38 L33,42 L11,42 Z" fill-opacity="1"/></g>
<text x="34.2" y="108" text-anchor="middle">9</text>
</svg>
</div>

### โจทย์ : Excess-3 ด้วย AND/OR {code=xs3; method=andor}

**จงออกแบบวงจรถอดรหัสจาก Excess-3 4 บิต เป็นรหัส Decimal โดยใช้ Gate ชนิด AND/OR แสดงผล LED 7 ส่วน**

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="560" height="190" viewBox="0 0 560 190" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<rect x="170" y="14" width="190" height="160" rx="2"/>
<line x1="110" y1="42" x2="170" y2="42"/>
<line x1="110" y1="78" x2="170" y2="78"/>
<line x1="110" y1="114" x2="170" y2="114"/>
<line x1="110" y1="150" x2="170" y2="150"/>
<line x1="360" y1="30" x2="410" y2="30"/>
<line x1="360" y1="51" x2="410" y2="51"/>
<line x1="360" y1="72" x2="410" y2="72"/>
<line x1="360" y1="93" x2="410" y2="93"/>
<line x1="360" y1="114" x2="410" y2="114"/>
<line x1="360" y1="135" x2="410" y2="135"/>
<line x1="360" y1="156" x2="410" y2="156"/>
<rect x="410" y="14" width="110" height="160" rx="2"/>
</g>
<text x="100" y="48" text-anchor="end">A</text>
<text x="100" y="84" text-anchor="end">B</text>
<text x="100" y="120" text-anchor="end">C</text>
<text x="100" y="156" text-anchor="end">D</text>
<text x="265" y="68" text-anchor="middle">Excess-3</text><text x="265" y="92" text-anchor="middle">to</text><text x="265" y="116" text-anchor="middle">Decimal</text>
<text x="265" y="156" text-anchor="middle" font-size="15">7 Segment Display</text>
<text x="385" y="26" text-anchor="middle" font-size="14">a</text>
<text x="385" y="47" text-anchor="middle" font-size="14">b</text>
<text x="385" y="68" text-anchor="middle" font-size="14">c</text>
<text x="385" y="89" text-anchor="middle" font-size="14">d</text>
<text x="385" y="110" text-anchor="middle" font-size="14">e</text>
<text x="385" y="131" text-anchor="middle" font-size="14">f</text>
<text x="385" y="152" text-anchor="middle" font-size="14">g</text>
<g transform="translate(438,52) scale(0.9)"><path d="M7,4 L37,4 L33,10 L11,10 Z" fill-opacity="1"/><path d="M38,5 L38,35 L32,31 L32,11 Z" fill-opacity="1"/><path d="M38,41 L38,71 L32,65 L32,45 Z" fill-opacity="1"/><path d="M7,72 L37,72 L33,66 L11,66 Z" fill-opacity="1"/><path d="M6,41 L6,71 L12,65 L12,45 Z" fill-opacity="1"/><path d="M6,5 L6,35 L12,31 L12,11 Z" fill-opacity="1"/><path d="M7,38 L11,34 L33,34 L37,38 L33,42 L11,42 Z" fill-opacity="1"/></g>
</svg>
</div>

**ขั้นตอน** 1) เขียนตารางความจริง ($a$ ถึง $g$ ของเลข $0$ ถึง $9$ ; รหัสที่ไม่ใช้เป็น $d$) 2) เลือกเลขที่ต้องการ ดูว่า LED ส่วนใดสว่าง 3) ทำ K-map ของ segment เหล่านั้น ใส่ $1$ (Minterm) และ $d$ 4) ทำลูป อ่านเป็นสมการผลคูณ แล้วรวมด้วยผลบวก (SOP) 5) ไม่ต้องแปลงสมการ ใช้เกตตามสมการได้เลย 6) เขียนวงจร

ตัวเลือกนี้ไม่มีในสไลด์ ใช้หลักการเดียวกัน

### โจทย์ : Excess-3 ด้วย NAND อย่างเดียว {code=xs3; method=nand}

**จงออกแบบวงจรถอดรหัสจาก Excess-3 4 บิต เป็นรหัส Decimal โดยใช้ Gate ชนิด NAND อย่างเดียว แสดงผล LED 7 ส่วน**

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="560" height="190" viewBox="0 0 560 190" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<rect x="170" y="14" width="190" height="160" rx="2"/>
<line x1="110" y1="42" x2="170" y2="42"/>
<line x1="110" y1="78" x2="170" y2="78"/>
<line x1="110" y1="114" x2="170" y2="114"/>
<line x1="110" y1="150" x2="170" y2="150"/>
<line x1="360" y1="30" x2="410" y2="30"/>
<line x1="360" y1="51" x2="410" y2="51"/>
<line x1="360" y1="72" x2="410" y2="72"/>
<line x1="360" y1="93" x2="410" y2="93"/>
<line x1="360" y1="114" x2="410" y2="114"/>
<line x1="360" y1="135" x2="410" y2="135"/>
<line x1="360" y1="156" x2="410" y2="156"/>
<rect x="410" y="14" width="110" height="160" rx="2"/>
</g>
<text x="100" y="48" text-anchor="end">A</text>
<text x="100" y="84" text-anchor="end">B</text>
<text x="100" y="120" text-anchor="end">C</text>
<text x="100" y="156" text-anchor="end">D</text>
<text x="265" y="68" text-anchor="middle">Excess-3</text><text x="265" y="92" text-anchor="middle">to</text><text x="265" y="116" text-anchor="middle">Decimal</text>
<text x="265" y="156" text-anchor="middle" font-size="15">7 Segment Display</text>
<text x="385" y="26" text-anchor="middle" font-size="14">a</text>
<text x="385" y="47" text-anchor="middle" font-size="14">b</text>
<text x="385" y="68" text-anchor="middle" font-size="14">c</text>
<text x="385" y="89" text-anchor="middle" font-size="14">d</text>
<text x="385" y="110" text-anchor="middle" font-size="14">e</text>
<text x="385" y="131" text-anchor="middle" font-size="14">f</text>
<text x="385" y="152" text-anchor="middle" font-size="14">g</text>
<g transform="translate(438,52) scale(0.9)"><path d="M7,4 L37,4 L33,10 L11,10 Z" fill-opacity="1"/><path d="M38,5 L38,35 L32,31 L32,11 Z" fill-opacity="1"/><path d="M38,41 L38,71 L32,65 L32,45 Z" fill-opacity="1"/><path d="M7,72 L37,72 L33,66 L11,66 Z" fill-opacity="1"/><path d="M6,41 L6,71 L12,65 L12,45 Z" fill-opacity="1"/><path d="M6,5 L6,35 L12,31 L12,11 Z" fill-opacity="1"/><path d="M7,38 L11,34 L33,34 L37,38 L33,42 L11,42 Z" fill-opacity="1"/></g>
</svg>
</div>

**ขั้นตอน** 1) เขียนตารางความจริง ($a$ ถึง $g$ ของเลข $0$ ถึง $9$ ; รหัสที่ไม่ใช้เป็น $d$) 2) เลือกเลขที่ต้องการ ดูว่า LED ส่วนใดสว่าง 3) ทำ K-map ของ segment เหล่านั้น ใส่ $1$ (Minterm) และ $d$ 4) ทำลูป อ่านเป็นสมการผลคูณ แล้วรวมด้วยผลบวก (SOP) 5) แปลงสมการให้ใช้ NAND อย่างเดียว โดยคอมพลีเมนต์ 2 ครั้งและใช้ De Morgan 6) เขียนวงจร

ตัวเลือกนี้ไม่มีในสไลด์ ใช้หลักการเดียวกัน

### โจทย์ : Excess-3 ด้วย OR/AND {code=xs3; method=orand}

**จงออกแบบวงจรถอดรหัสจาก Excess-3 4 บิต เป็นรหัส Decimal โดยใช้ Gate ชนิด OR/AND แสดงผล LED 7 ส่วน**

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="560" height="190" viewBox="0 0 560 190" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<rect x="170" y="14" width="190" height="160" rx="2"/>
<line x1="110" y1="42" x2="170" y2="42"/>
<line x1="110" y1="78" x2="170" y2="78"/>
<line x1="110" y1="114" x2="170" y2="114"/>
<line x1="110" y1="150" x2="170" y2="150"/>
<line x1="360" y1="30" x2="410" y2="30"/>
<line x1="360" y1="51" x2="410" y2="51"/>
<line x1="360" y1="72" x2="410" y2="72"/>
<line x1="360" y1="93" x2="410" y2="93"/>
<line x1="360" y1="114" x2="410" y2="114"/>
<line x1="360" y1="135" x2="410" y2="135"/>
<line x1="360" y1="156" x2="410" y2="156"/>
<rect x="410" y="14" width="110" height="160" rx="2"/>
</g>
<text x="100" y="48" text-anchor="end">A</text>
<text x="100" y="84" text-anchor="end">B</text>
<text x="100" y="120" text-anchor="end">C</text>
<text x="100" y="156" text-anchor="end">D</text>
<text x="265" y="68" text-anchor="middle">Excess-3</text><text x="265" y="92" text-anchor="middle">to</text><text x="265" y="116" text-anchor="middle">Decimal</text>
<text x="265" y="156" text-anchor="middle" font-size="15">7 Segment Display</text>
<text x="385" y="26" text-anchor="middle" font-size="14">a</text>
<text x="385" y="47" text-anchor="middle" font-size="14">b</text>
<text x="385" y="68" text-anchor="middle" font-size="14">c</text>
<text x="385" y="89" text-anchor="middle" font-size="14">d</text>
<text x="385" y="110" text-anchor="middle" font-size="14">e</text>
<text x="385" y="131" text-anchor="middle" font-size="14">f</text>
<text x="385" y="152" text-anchor="middle" font-size="14">g</text>
<g transform="translate(438,52) scale(0.9)"><path d="M7,4 L37,4 L33,10 L11,10 Z" fill-opacity="1"/><path d="M38,5 L38,35 L32,31 L32,11 Z" fill-opacity="1"/><path d="M38,41 L38,71 L32,65 L32,45 Z" fill-opacity="1"/><path d="M7,72 L37,72 L33,66 L11,66 Z" fill-opacity="1"/><path d="M6,41 L6,71 L12,65 L12,45 Z" fill-opacity="1"/><path d="M6,5 L6,35 L12,31 L12,11 Z" fill-opacity="1"/><path d="M7,38 L11,34 L33,34 L37,38 L33,42 L11,42 Z" fill-opacity="1"/></g>
</svg>
</div>

**ขั้นตอน** 1) เขียนตารางความจริง ($a$ ถึง $g$ ของเลข $0$ ถึง $9$ ; รหัสที่ไม่ใช้เป็น $d$) 2) เลือกเลขที่ต้องการ ดูว่า LED ส่วนใดสว่าง 3) ทำ K-map ของ segment เหล่านั้น ใส่ $0$ (Maxterm) และ $d$ 4) ทำลูป อ่านเป็นสมการผลบวก แล้วรวมด้วยผลคูณ (POS) 5) ไม่ต้องแปลงสมการ ใช้เกตตามสมการได้เลย 6) เขียนวงจร

โจทย์ในสไลด์ใช้เกต OR/AND และ NOR กับ Maxterm : ข้อนี้คือ OR/AND

### โจทย์ : Excess-3 ด้วย NOR อย่างเดียว {code=xs3; method=nor}

**จงออกแบบวงจรถอดรหัสจาก Excess-3 4 บิต เป็นรหัส Decimal โดยใช้ Gate ชนิด NOR อย่างเดียว แสดงผล LED 7 ส่วน**

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="560" height="190" viewBox="0 0 560 190" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<rect x="170" y="14" width="190" height="160" rx="2"/>
<line x1="110" y1="42" x2="170" y2="42"/>
<line x1="110" y1="78" x2="170" y2="78"/>
<line x1="110" y1="114" x2="170" y2="114"/>
<line x1="110" y1="150" x2="170" y2="150"/>
<line x1="360" y1="30" x2="410" y2="30"/>
<line x1="360" y1="51" x2="410" y2="51"/>
<line x1="360" y1="72" x2="410" y2="72"/>
<line x1="360" y1="93" x2="410" y2="93"/>
<line x1="360" y1="114" x2="410" y2="114"/>
<line x1="360" y1="135" x2="410" y2="135"/>
<line x1="360" y1="156" x2="410" y2="156"/>
<rect x="410" y="14" width="110" height="160" rx="2"/>
</g>
<text x="100" y="48" text-anchor="end">A</text>
<text x="100" y="84" text-anchor="end">B</text>
<text x="100" y="120" text-anchor="end">C</text>
<text x="100" y="156" text-anchor="end">D</text>
<text x="265" y="68" text-anchor="middle">Excess-3</text><text x="265" y="92" text-anchor="middle">to</text><text x="265" y="116" text-anchor="middle">Decimal</text>
<text x="265" y="156" text-anchor="middle" font-size="15">7 Segment Display</text>
<text x="385" y="26" text-anchor="middle" font-size="14">a</text>
<text x="385" y="47" text-anchor="middle" font-size="14">b</text>
<text x="385" y="68" text-anchor="middle" font-size="14">c</text>
<text x="385" y="89" text-anchor="middle" font-size="14">d</text>
<text x="385" y="110" text-anchor="middle" font-size="14">e</text>
<text x="385" y="131" text-anchor="middle" font-size="14">f</text>
<text x="385" y="152" text-anchor="middle" font-size="14">g</text>
<g transform="translate(438,52) scale(0.9)"><path d="M7,4 L37,4 L33,10 L11,10 Z" fill-opacity="1"/><path d="M38,5 L38,35 L32,31 L32,11 Z" fill-opacity="1"/><path d="M38,41 L38,71 L32,65 L32,45 Z" fill-opacity="1"/><path d="M7,72 L37,72 L33,66 L11,66 Z" fill-opacity="1"/><path d="M6,41 L6,71 L12,65 L12,45 Z" fill-opacity="1"/><path d="M6,5 L6,35 L12,31 L12,11 Z" fill-opacity="1"/><path d="M7,38 L11,34 L33,34 L37,38 L33,42 L11,42 Z" fill-opacity="1"/></g>
</svg>
</div>

**ขั้นตอน** 1) เขียนตารางความจริง ($a$ ถึง $g$ ของเลข $0$ ถึง $9$ ; รหัสที่ไม่ใช้เป็น $d$) 2) เลือกเลขที่ต้องการ ดูว่า LED ส่วนใดสว่าง 3) ทำ K-map ของ segment เหล่านั้น ใส่ $0$ (Maxterm) และ $d$ 4) ทำลูป อ่านเป็นสมการผลบวก แล้วรวมด้วยผลคูณ (POS) 5) แปลงสมการให้ใช้ NOR อย่างเดียว โดยคอมพลีเมนต์ 2 ครั้งและใช้ De Morgan 6) เขียนวงจร

โจทย์ในสไลด์ใช้เกต OR/AND และ NOR กับ Maxterm : ข้อนี้คือ NOR

### ตารางความจริงของ Excess-3 ไป LED 7 ส่วน {code=xs3}

อินพุตคือรหัส Excess-3 4 บิต $A, B, C, D$ ($A$ เป็น MSB) เอาต์พุต $a$ ถึง $g$ เป็น $1$ เมื่อ LED ส่วนนั้นสว่าง คอลัมน์ Decimal คือเลขที่ต้องการแสดง รหัส $0000$, $0001$, $0010$, $1101$, $1110$, $1111$ ไม่มีใช้ จึงเป็น $d$ (don't care)

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="610" height="479" viewBox="0 0 610 479" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.4" fill="none">
<rect x="10" y="10" width="590" height="459"/>
<line x1="10" y1="37" x2="600" y2="37"/>
<line x1="194" y1="10" x2="194" y2="469"/>
<line x1="278" y1="10" x2="278" y2="469"/>
<line x1="10" y1="118" x2="600" y2="118" stroke-dasharray="6 4"/>
<line x1="10" y1="388" x2="600" y2="388" stroke-dasharray="6 4"/>
</g>
<text x="33" y="29.5" text-anchor="middle" font-size="16">A</text>
<text x="79" y="29.5" text-anchor="middle" font-size="16">B</text>
<text x="125" y="29.5" text-anchor="middle" font-size="16">C</text>
<text x="171" y="29.5" text-anchor="middle" font-size="16">D</text>
<text x="236" y="29.5" text-anchor="middle" font-size="16">Decimal</text>
<text x="301" y="29.5" text-anchor="middle" font-size="16" font-style="italic">a</text>
<text x="347" y="29.5" text-anchor="middle" font-size="16" font-style="italic">b</text>
<text x="393" y="29.5" text-anchor="middle" font-size="16" font-style="italic">c</text>
<text x="439" y="29.5" text-anchor="middle" font-size="16" font-style="italic">d</text>
<text x="485" y="29.5" text-anchor="middle" font-size="16" font-style="italic">e</text>
<text x="531" y="29.5" text-anchor="middle" font-size="16" font-style="italic">f</text>
<text x="577" y="29.5" text-anchor="middle" font-size="16" font-style="italic">g</text>
<text x="33" y="56.5" text-anchor="middle" font-size="16">0</text>
<text x="79" y="56.5" text-anchor="middle" font-size="16">0</text>
<text x="125" y="56.5" text-anchor="middle" font-size="16">0</text>
<text x="171" y="56.5" text-anchor="middle" font-size="16">0</text>
<text x="236" y="56.5" text-anchor="middle" font-size="16">d</text>
<text x="301" y="56.5" text-anchor="middle" font-size="16">d</text>
<text x="347" y="56.5" text-anchor="middle" font-size="16">d</text>
<text x="393" y="56.5" text-anchor="middle" font-size="16">d</text>
<text x="439" y="56.5" text-anchor="middle" font-size="16">d</text>
<text x="485" y="56.5" text-anchor="middle" font-size="16">d</text>
<text x="531" y="56.5" text-anchor="middle" font-size="16">d</text>
<text x="577" y="56.5" text-anchor="middle" font-size="16">d</text>
<text x="33" y="83.5" text-anchor="middle" font-size="16">0</text>
<text x="79" y="83.5" text-anchor="middle" font-size="16">0</text>
<text x="125" y="83.5" text-anchor="middle" font-size="16">0</text>
<text x="171" y="83.5" text-anchor="middle" font-size="16">1</text>
<text x="236" y="83.5" text-anchor="middle" font-size="16">d</text>
<text x="301" y="83.5" text-anchor="middle" font-size="16">d</text>
<text x="347" y="83.5" text-anchor="middle" font-size="16">d</text>
<text x="393" y="83.5" text-anchor="middle" font-size="16">d</text>
<text x="439" y="83.5" text-anchor="middle" font-size="16">d</text>
<text x="485" y="83.5" text-anchor="middle" font-size="16">d</text>
<text x="531" y="83.5" text-anchor="middle" font-size="16">d</text>
<text x="577" y="83.5" text-anchor="middle" font-size="16">d</text>
<text x="33" y="110.5" text-anchor="middle" font-size="16">0</text>
<text x="79" y="110.5" text-anchor="middle" font-size="16">0</text>
<text x="125" y="110.5" text-anchor="middle" font-size="16">1</text>
<text x="171" y="110.5" text-anchor="middle" font-size="16">0</text>
<text x="236" y="110.5" text-anchor="middle" font-size="16">d</text>
<text x="301" y="110.5" text-anchor="middle" font-size="16">d</text>
<text x="347" y="110.5" text-anchor="middle" font-size="16">d</text>
<text x="393" y="110.5" text-anchor="middle" font-size="16">d</text>
<text x="439" y="110.5" text-anchor="middle" font-size="16">d</text>
<text x="485" y="110.5" text-anchor="middle" font-size="16">d</text>
<text x="531" y="110.5" text-anchor="middle" font-size="16">d</text>
<text x="577" y="110.5" text-anchor="middle" font-size="16">d</text>
<text x="33" y="137.5" text-anchor="middle" font-size="16">0</text>
<text x="79" y="137.5" text-anchor="middle" font-size="16">0</text>
<text x="125" y="137.5" text-anchor="middle" font-size="16">1</text>
<text x="171" y="137.5" text-anchor="middle" font-size="16">1</text>
<text x="236" y="137.5" text-anchor="middle" font-size="16">0</text>
<text x="301" y="137.5" text-anchor="middle" font-size="16">1</text>
<text x="347" y="137.5" text-anchor="middle" font-size="16">1</text>
<text x="393" y="137.5" text-anchor="middle" font-size="16">1</text>
<text x="439" y="137.5" text-anchor="middle" font-size="16">1</text>
<text x="485" y="137.5" text-anchor="middle" font-size="16">1</text>
<text x="531" y="137.5" text-anchor="middle" font-size="16">1</text>
<text x="577" y="137.5" text-anchor="middle" font-size="16">0</text>
<text x="33" y="164.5" text-anchor="middle" font-size="16">0</text>
<text x="79" y="164.5" text-anchor="middle" font-size="16">1</text>
<text x="125" y="164.5" text-anchor="middle" font-size="16">0</text>
<text x="171" y="164.5" text-anchor="middle" font-size="16">0</text>
<text x="236" y="164.5" text-anchor="middle" font-size="16">1</text>
<text x="301" y="164.5" text-anchor="middle" font-size="16">0</text>
<text x="347" y="164.5" text-anchor="middle" font-size="16">1</text>
<text x="393" y="164.5" text-anchor="middle" font-size="16">1</text>
<text x="439" y="164.5" text-anchor="middle" font-size="16">0</text>
<text x="485" y="164.5" text-anchor="middle" font-size="16">0</text>
<text x="531" y="164.5" text-anchor="middle" font-size="16">0</text>
<text x="577" y="164.5" text-anchor="middle" font-size="16">0</text>
<text x="33" y="191.5" text-anchor="middle" font-size="16">0</text>
<text x="79" y="191.5" text-anchor="middle" font-size="16">1</text>
<text x="125" y="191.5" text-anchor="middle" font-size="16">0</text>
<text x="171" y="191.5" text-anchor="middle" font-size="16">1</text>
<text x="236" y="191.5" text-anchor="middle" font-size="16">2</text>
<text x="301" y="191.5" text-anchor="middle" font-size="16">1</text>
<text x="347" y="191.5" text-anchor="middle" font-size="16">1</text>
<text x="393" y="191.5" text-anchor="middle" font-size="16">0</text>
<text x="439" y="191.5" text-anchor="middle" font-size="16">1</text>
<text x="485" y="191.5" text-anchor="middle" font-size="16">1</text>
<text x="531" y="191.5" text-anchor="middle" font-size="16">0</text>
<text x="577" y="191.5" text-anchor="middle" font-size="16">1</text>
<text x="33" y="218.5" text-anchor="middle" font-size="16">0</text>
<text x="79" y="218.5" text-anchor="middle" font-size="16">1</text>
<text x="125" y="218.5" text-anchor="middle" font-size="16">1</text>
<text x="171" y="218.5" text-anchor="middle" font-size="16">0</text>
<text x="236" y="218.5" text-anchor="middle" font-size="16">3</text>
<text x="301" y="218.5" text-anchor="middle" font-size="16">1</text>
<text x="347" y="218.5" text-anchor="middle" font-size="16">1</text>
<text x="393" y="218.5" text-anchor="middle" font-size="16">1</text>
<text x="439" y="218.5" text-anchor="middle" font-size="16">1</text>
<text x="485" y="218.5" text-anchor="middle" font-size="16">0</text>
<text x="531" y="218.5" text-anchor="middle" font-size="16">0</text>
<text x="577" y="218.5" text-anchor="middle" font-size="16">1</text>
<text x="33" y="245.5" text-anchor="middle" font-size="16">0</text>
<text x="79" y="245.5" text-anchor="middle" font-size="16">1</text>
<text x="125" y="245.5" text-anchor="middle" font-size="16">1</text>
<text x="171" y="245.5" text-anchor="middle" font-size="16">1</text>
<text x="236" y="245.5" text-anchor="middle" font-size="16">4</text>
<text x="301" y="245.5" text-anchor="middle" font-size="16">0</text>
<text x="347" y="245.5" text-anchor="middle" font-size="16">1</text>
<text x="393" y="245.5" text-anchor="middle" font-size="16">1</text>
<text x="439" y="245.5" text-anchor="middle" font-size="16">0</text>
<text x="485" y="245.5" text-anchor="middle" font-size="16">0</text>
<text x="531" y="245.5" text-anchor="middle" font-size="16">1</text>
<text x="577" y="245.5" text-anchor="middle" font-size="16">1</text>
<text x="33" y="272.5" text-anchor="middle" font-size="16">1</text>
<text x="79" y="272.5" text-anchor="middle" font-size="16">0</text>
<text x="125" y="272.5" text-anchor="middle" font-size="16">0</text>
<text x="171" y="272.5" text-anchor="middle" font-size="16">0</text>
<text x="236" y="272.5" text-anchor="middle" font-size="16">5</text>
<text x="301" y="272.5" text-anchor="middle" font-size="16">1</text>
<text x="347" y="272.5" text-anchor="middle" font-size="16">0</text>
<text x="393" y="272.5" text-anchor="middle" font-size="16">1</text>
<text x="439" y="272.5" text-anchor="middle" font-size="16">1</text>
<text x="485" y="272.5" text-anchor="middle" font-size="16">0</text>
<text x="531" y="272.5" text-anchor="middle" font-size="16">1</text>
<text x="577" y="272.5" text-anchor="middle" font-size="16">1</text>
<text x="33" y="299.5" text-anchor="middle" font-size="16">1</text>
<text x="79" y="299.5" text-anchor="middle" font-size="16">0</text>
<text x="125" y="299.5" text-anchor="middle" font-size="16">0</text>
<text x="171" y="299.5" text-anchor="middle" font-size="16">1</text>
<text x="236" y="299.5" text-anchor="middle" font-size="16">6</text>
<text x="301" y="299.5" text-anchor="middle" font-size="16">1</text>
<text x="347" y="299.5" text-anchor="middle" font-size="16">0</text>
<text x="393" y="299.5" text-anchor="middle" font-size="16">1</text>
<text x="439" y="299.5" text-anchor="middle" font-size="16">1</text>
<text x="485" y="299.5" text-anchor="middle" font-size="16">1</text>
<text x="531" y="299.5" text-anchor="middle" font-size="16">1</text>
<text x="577" y="299.5" text-anchor="middle" font-size="16">1</text>
<text x="33" y="326.5" text-anchor="middle" font-size="16">1</text>
<text x="79" y="326.5" text-anchor="middle" font-size="16">0</text>
<text x="125" y="326.5" text-anchor="middle" font-size="16">1</text>
<text x="171" y="326.5" text-anchor="middle" font-size="16">0</text>
<text x="236" y="326.5" text-anchor="middle" font-size="16">7</text>
<text x="301" y="326.5" text-anchor="middle" font-size="16">1</text>
<text x="347" y="326.5" text-anchor="middle" font-size="16">1</text>
<text x="393" y="326.5" text-anchor="middle" font-size="16">1</text>
<text x="439" y="326.5" text-anchor="middle" font-size="16">0</text>
<text x="485" y="326.5" text-anchor="middle" font-size="16">0</text>
<text x="531" y="326.5" text-anchor="middle" font-size="16">0</text>
<text x="577" y="326.5" text-anchor="middle" font-size="16">0</text>
<text x="33" y="353.5" text-anchor="middle" font-size="16">1</text>
<text x="79" y="353.5" text-anchor="middle" font-size="16">0</text>
<text x="125" y="353.5" text-anchor="middle" font-size="16">1</text>
<text x="171" y="353.5" text-anchor="middle" font-size="16">1</text>
<text x="236" y="353.5" text-anchor="middle" font-size="16">8</text>
<text x="301" y="353.5" text-anchor="middle" font-size="16">1</text>
<text x="347" y="353.5" text-anchor="middle" font-size="16">1</text>
<text x="393" y="353.5" text-anchor="middle" font-size="16">1</text>
<text x="439" y="353.5" text-anchor="middle" font-size="16">1</text>
<text x="485" y="353.5" text-anchor="middle" font-size="16">1</text>
<text x="531" y="353.5" text-anchor="middle" font-size="16">1</text>
<text x="577" y="353.5" text-anchor="middle" font-size="16">1</text>
<text x="33" y="380.5" text-anchor="middle" font-size="16">1</text>
<text x="79" y="380.5" text-anchor="middle" font-size="16">1</text>
<text x="125" y="380.5" text-anchor="middle" font-size="16">0</text>
<text x="171" y="380.5" text-anchor="middle" font-size="16">0</text>
<text x="236" y="380.5" text-anchor="middle" font-size="16">9</text>
<text x="301" y="380.5" text-anchor="middle" font-size="16">1</text>
<text x="347" y="380.5" text-anchor="middle" font-size="16">1</text>
<text x="393" y="380.5" text-anchor="middle" font-size="16">1</text>
<text x="439" y="380.5" text-anchor="middle" font-size="16">1</text>
<text x="485" y="380.5" text-anchor="middle" font-size="16">0</text>
<text x="531" y="380.5" text-anchor="middle" font-size="16">1</text>
<text x="577" y="380.5" text-anchor="middle" font-size="16">1</text>
<text x="33" y="407.5" text-anchor="middle" font-size="16">1</text>
<text x="79" y="407.5" text-anchor="middle" font-size="16">1</text>
<text x="125" y="407.5" text-anchor="middle" font-size="16">0</text>
<text x="171" y="407.5" text-anchor="middle" font-size="16">1</text>
<text x="236" y="407.5" text-anchor="middle" font-size="16">d</text>
<text x="301" y="407.5" text-anchor="middle" font-size="16">d</text>
<text x="347" y="407.5" text-anchor="middle" font-size="16">d</text>
<text x="393" y="407.5" text-anchor="middle" font-size="16">d</text>
<text x="439" y="407.5" text-anchor="middle" font-size="16">d</text>
<text x="485" y="407.5" text-anchor="middle" font-size="16">d</text>
<text x="531" y="407.5" text-anchor="middle" font-size="16">d</text>
<text x="577" y="407.5" text-anchor="middle" font-size="16">d</text>
<text x="33" y="434.5" text-anchor="middle" font-size="16">1</text>
<text x="79" y="434.5" text-anchor="middle" font-size="16">1</text>
<text x="125" y="434.5" text-anchor="middle" font-size="16">1</text>
<text x="171" y="434.5" text-anchor="middle" font-size="16">0</text>
<text x="236" y="434.5" text-anchor="middle" font-size="16">d</text>
<text x="301" y="434.5" text-anchor="middle" font-size="16">d</text>
<text x="347" y="434.5" text-anchor="middle" font-size="16">d</text>
<text x="393" y="434.5" text-anchor="middle" font-size="16">d</text>
<text x="439" y="434.5" text-anchor="middle" font-size="16">d</text>
<text x="485" y="434.5" text-anchor="middle" font-size="16">d</text>
<text x="531" y="434.5" text-anchor="middle" font-size="16">d</text>
<text x="577" y="434.5" text-anchor="middle" font-size="16">d</text>
<text x="33" y="461.5" text-anchor="middle" font-size="16">1</text>
<text x="79" y="461.5" text-anchor="middle" font-size="16">1</text>
<text x="125" y="461.5" text-anchor="middle" font-size="16">1</text>
<text x="171" y="461.5" text-anchor="middle" font-size="16">1</text>
<text x="236" y="461.5" text-anchor="middle" font-size="16">d</text>
<text x="301" y="461.5" text-anchor="middle" font-size="16">d</text>
<text x="347" y="461.5" text-anchor="middle" font-size="16">d</text>
<text x="393" y="461.5" text-anchor="middle" font-size="16">d</text>
<text x="439" y="461.5" text-anchor="middle" font-size="16">d</text>
<text x="485" y="461.5" text-anchor="middle" font-size="16">d</text>
<text x="531" y="461.5" text-anchor="middle" font-size="16">d</text>
<text x="577" y="461.5" text-anchor="middle" font-size="16">d</text>
</svg>
</div>

### เลข 0 ใช้ segment อะไรบ้าง (Excess-3) {code=xs3; digit=0}

เลข $0$ ในรหัส Excess-3 คือ $ABCD = 0011$ ดูแถวนี้ในตารางความจริง : LED ที่สว่าง ($1$) คือ segment $a, b, c, d, e, f$ ส่วน segment $g$ ดับ ($0$) ดังนั้นเลขนี้ต้องออกแบบเฉพาะ segment $a, b, c, d, e, f$ เท่านั้น

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="74" height="118" viewBox="0 0 74 118" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(10,8) scale(1.1)"><path d="M7,4 L37,4 L33,10 L11,10 Z" fill-opacity="1"/><path d="M38,5 L38,35 L32,31 L32,11 Z" fill-opacity="1"/><path d="M38,41 L38,71 L32,65 L32,45 Z" fill-opacity="1"/><path d="M7,72 L37,72 L33,66 L11,66 Z" fill-opacity="1"/><path d="M6,41 L6,71 L12,65 L12,45 Z" fill-opacity="1"/><path d="M6,5 L6,35 L12,31 L12,11 Z" fill-opacity="1"/><path d="M7,38 L11,34 L33,34 L37,38 L33,42 L11,42 Z" fill-opacity="0.1"/></g>
<text x="34.2" y="108" text-anchor="middle">0</text>
</svg>
</div>

### เลข 1 ใช้ segment อะไรบ้าง (Excess-3) {code=xs3; digit=1}

เลข $1$ ในรหัส Excess-3 คือ $ABCD = 0100$ ดูแถวนี้ในตารางความจริง : LED ที่สว่าง ($1$) คือ segment $b, c$ ส่วน segment $a, d, e, f, g$ ดับ ($0$) ดังนั้นเลขนี้ต้องออกแบบเฉพาะ segment $b, c$ เท่านั้น

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="74" height="118" viewBox="0 0 74 118" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(10,8) scale(1.1)"><path d="M7,4 L37,4 L33,10 L11,10 Z" fill-opacity="0.1"/><path d="M38,5 L38,35 L32,31 L32,11 Z" fill-opacity="1"/><path d="M38,41 L38,71 L32,65 L32,45 Z" fill-opacity="1"/><path d="M7,72 L37,72 L33,66 L11,66 Z" fill-opacity="0.1"/><path d="M6,41 L6,71 L12,65 L12,45 Z" fill-opacity="0.1"/><path d="M6,5 L6,35 L12,31 L12,11 Z" fill-opacity="0.1"/><path d="M7,38 L11,34 L33,34 L37,38 L33,42 L11,42 Z" fill-opacity="0.1"/></g>
<text x="34.2" y="108" text-anchor="middle">1</text>
</svg>
</div>

### เลข 2 ใช้ segment อะไรบ้าง (Excess-3) {code=xs3; digit=2}

เลข $2$ ในรหัส Excess-3 คือ $ABCD = 0101$ ดูแถวนี้ในตารางความจริง : LED ที่สว่าง ($1$) คือ segment $a, b, d, e, g$ ส่วน segment $c, f$ ดับ ($0$) ดังนั้นเลขนี้ต้องออกแบบเฉพาะ segment $a, b, d, e, g$ เท่านั้น

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="74" height="118" viewBox="0 0 74 118" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(10,8) scale(1.1)"><path d="M7,4 L37,4 L33,10 L11,10 Z" fill-opacity="1"/><path d="M38,5 L38,35 L32,31 L32,11 Z" fill-opacity="1"/><path d="M38,41 L38,71 L32,65 L32,45 Z" fill-opacity="0.1"/><path d="M7,72 L37,72 L33,66 L11,66 Z" fill-opacity="1"/><path d="M6,41 L6,71 L12,65 L12,45 Z" fill-opacity="1"/><path d="M6,5 L6,35 L12,31 L12,11 Z" fill-opacity="0.1"/><path d="M7,38 L11,34 L33,34 L37,38 L33,42 L11,42 Z" fill-opacity="1"/></g>
<text x="34.2" y="108" text-anchor="middle">2</text>
</svg>
</div>

### เลข 3 ใช้ segment อะไรบ้าง (Excess-3) {code=xs3; digit=3}

เลข $3$ ในรหัส Excess-3 คือ $ABCD = 0110$ ดูแถวนี้ในตารางความจริง : LED ที่สว่าง ($1$) คือ segment $a, b, c, d, g$ ส่วน segment $e, f$ ดับ ($0$) ดังนั้นเลขนี้ต้องออกแบบเฉพาะ segment $a, b, c, d, g$ เท่านั้น

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="74" height="118" viewBox="0 0 74 118" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(10,8) scale(1.1)"><path d="M7,4 L37,4 L33,10 L11,10 Z" fill-opacity="1"/><path d="M38,5 L38,35 L32,31 L32,11 Z" fill-opacity="1"/><path d="M38,41 L38,71 L32,65 L32,45 Z" fill-opacity="1"/><path d="M7,72 L37,72 L33,66 L11,66 Z" fill-opacity="1"/><path d="M6,41 L6,71 L12,65 L12,45 Z" fill-opacity="0.1"/><path d="M6,5 L6,35 L12,31 L12,11 Z" fill-opacity="0.1"/><path d="M7,38 L11,34 L33,34 L37,38 L33,42 L11,42 Z" fill-opacity="1"/></g>
<text x="34.2" y="108" text-anchor="middle">3</text>
</svg>
</div>

### เลข 4 ใช้ segment อะไรบ้าง (Excess-3) {code=xs3; digit=4}

เลข $4$ ในรหัส Excess-3 คือ $ABCD = 0111$ ดูแถวนี้ในตารางความจริง : LED ที่สว่าง ($1$) คือ segment $b, c, f, g$ ส่วน segment $a, d, e$ ดับ ($0$) ดังนั้นเลขนี้ต้องออกแบบเฉพาะ segment $b, c, f, g$ เท่านั้น

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="74" height="118" viewBox="0 0 74 118" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(10,8) scale(1.1)"><path d="M7,4 L37,4 L33,10 L11,10 Z" fill-opacity="0.1"/><path d="M38,5 L38,35 L32,31 L32,11 Z" fill-opacity="1"/><path d="M38,41 L38,71 L32,65 L32,45 Z" fill-opacity="1"/><path d="M7,72 L37,72 L33,66 L11,66 Z" fill-opacity="0.1"/><path d="M6,41 L6,71 L12,65 L12,45 Z" fill-opacity="0.1"/><path d="M6,5 L6,35 L12,31 L12,11 Z" fill-opacity="1"/><path d="M7,38 L11,34 L33,34 L37,38 L33,42 L11,42 Z" fill-opacity="1"/></g>
<text x="34.2" y="108" text-anchor="middle">4</text>
</svg>
</div>

### เลข 5 ใช้ segment อะไรบ้าง (Excess-3) {code=xs3; digit=5}

เลข $5$ ในรหัส Excess-3 คือ $ABCD = 1000$ ดูแถวนี้ในตารางความจริง : LED ที่สว่าง ($1$) คือ segment $a, c, d, f, g$ ส่วน segment $b, e$ ดับ ($0$) ดังนั้นเลขนี้ต้องออกแบบเฉพาะ segment $a, c, d, f, g$ เท่านั้น

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="74" height="118" viewBox="0 0 74 118" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(10,8) scale(1.1)"><path d="M7,4 L37,4 L33,10 L11,10 Z" fill-opacity="1"/><path d="M38,5 L38,35 L32,31 L32,11 Z" fill-opacity="0.1"/><path d="M38,41 L38,71 L32,65 L32,45 Z" fill-opacity="1"/><path d="M7,72 L37,72 L33,66 L11,66 Z" fill-opacity="1"/><path d="M6,41 L6,71 L12,65 L12,45 Z" fill-opacity="0.1"/><path d="M6,5 L6,35 L12,31 L12,11 Z" fill-opacity="1"/><path d="M7,38 L11,34 L33,34 L37,38 L33,42 L11,42 Z" fill-opacity="1"/></g>
<text x="34.2" y="108" text-anchor="middle">5</text>
</svg>
</div>

### เลข 6 ใช้ segment อะไรบ้าง (Excess-3) {code=xs3; digit=6}

เลข $6$ ในรหัส Excess-3 คือ $ABCD = 1001$ ดูแถวนี้ในตารางความจริง : LED ที่สว่าง ($1$) คือ segment $a, c, d, e, f, g$ ส่วน segment $b$ ดับ ($0$) ดังนั้นเลขนี้ต้องออกแบบเฉพาะ segment $a, c, d, e, f, g$ เท่านั้น

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="74" height="118" viewBox="0 0 74 118" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(10,8) scale(1.1)"><path d="M7,4 L37,4 L33,10 L11,10 Z" fill-opacity="1"/><path d="M38,5 L38,35 L32,31 L32,11 Z" fill-opacity="0.1"/><path d="M38,41 L38,71 L32,65 L32,45 Z" fill-opacity="1"/><path d="M7,72 L37,72 L33,66 L11,66 Z" fill-opacity="1"/><path d="M6,41 L6,71 L12,65 L12,45 Z" fill-opacity="1"/><path d="M6,5 L6,35 L12,31 L12,11 Z" fill-opacity="1"/><path d="M7,38 L11,34 L33,34 L37,38 L33,42 L11,42 Z" fill-opacity="1"/></g>
<text x="34.2" y="108" text-anchor="middle">6</text>
</svg>
</div>

### เลข 7 ใช้ segment อะไรบ้าง (Excess-3) {code=xs3; digit=7}

เลข $7$ ในรหัส Excess-3 คือ $ABCD = 1010$ ดูแถวนี้ในตารางความจริง : LED ที่สว่าง ($1$) คือ segment $a, b, c$ ส่วน segment $d, e, f, g$ ดับ ($0$) ดังนั้นเลขนี้ต้องออกแบบเฉพาะ segment $a, b, c$ เท่านั้น

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="74" height="118" viewBox="0 0 74 118" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(10,8) scale(1.1)"><path d="M7,4 L37,4 L33,10 L11,10 Z" fill-opacity="1"/><path d="M38,5 L38,35 L32,31 L32,11 Z" fill-opacity="1"/><path d="M38,41 L38,71 L32,65 L32,45 Z" fill-opacity="1"/><path d="M7,72 L37,72 L33,66 L11,66 Z" fill-opacity="0.1"/><path d="M6,41 L6,71 L12,65 L12,45 Z" fill-opacity="0.1"/><path d="M6,5 L6,35 L12,31 L12,11 Z" fill-opacity="0.1"/><path d="M7,38 L11,34 L33,34 L37,38 L33,42 L11,42 Z" fill-opacity="0.1"/></g>
<text x="34.2" y="108" text-anchor="middle">7</text>
</svg>
</div>

### เลข 8 ใช้ segment อะไรบ้าง (Excess-3) {code=xs3; digit=8}

เลข $8$ ในรหัส Excess-3 คือ $ABCD = 1011$ ดูแถวนี้ในตารางความจริง : LED ที่สว่าง ($1$) คือ segment $a, b, c, d, e, f, g$ ครบทั้ง 7 ส่วน ไม่มี segment ที่ดับ ดังนั้นเลขนี้ต้องออกแบบเฉพาะ segment $a, b, c, d, e, f, g$ เท่านั้น

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="74" height="118" viewBox="0 0 74 118" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(10,8) scale(1.1)"><path d="M7,4 L37,4 L33,10 L11,10 Z" fill-opacity="1"/><path d="M38,5 L38,35 L32,31 L32,11 Z" fill-opacity="1"/><path d="M38,41 L38,71 L32,65 L32,45 Z" fill-opacity="1"/><path d="M7,72 L37,72 L33,66 L11,66 Z" fill-opacity="1"/><path d="M6,41 L6,71 L12,65 L12,45 Z" fill-opacity="1"/><path d="M6,5 L6,35 L12,31 L12,11 Z" fill-opacity="1"/><path d="M7,38 L11,34 L33,34 L37,38 L33,42 L11,42 Z" fill-opacity="1"/></g>
<text x="34.2" y="108" text-anchor="middle">8</text>
</svg>
</div>

### เลข 9 ใช้ segment อะไรบ้าง (Excess-3) {code=xs3; digit=9}

เลข $9$ ในรหัส Excess-3 คือ $ABCD = 1100$ ดูแถวนี้ในตารางความจริง : LED ที่สว่าง ($1$) คือ segment $a, b, c, d, f, g$ ส่วน segment $e$ ดับ ($0$) ดังนั้นเลขนี้ต้องออกแบบเฉพาะ segment $a, b, c, d, f, g$ เท่านั้น

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="74" height="118" viewBox="0 0 74 118" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(10,8) scale(1.1)"><path d="M7,4 L37,4 L33,10 L11,10 Z" fill-opacity="1"/><path d="M38,5 L38,35 L32,31 L32,11 Z" fill-opacity="1"/><path d="M38,41 L38,71 L32,65 L32,45 Z" fill-opacity="1"/><path d="M7,72 L37,72 L33,66 L11,66 Z" fill-opacity="1"/><path d="M6,41 L6,71 L12,65 L12,45 Z" fill-opacity="0.1"/><path d="M6,5 L6,35 L12,31 L12,11 Z" fill-opacity="1"/><path d="M7,38 L11,34 L33,34 L37,38 L33,42 L11,42 Z" fill-opacity="1"/></g>
<text x="34.2" y="108" text-anchor="middle">9</text>
</svg>
</div>

### หาสมการของ segment a (Excess-3, Minterm) {code=xs3; method=andor,nand; digit=0,2,3,5,6,7,8,9}

$\mathbf{Sol}^{n}$

จากตารางความจริง ช่องที่ $a = 1$ คือ เลขรหัส $3,5,6,8,9,10,11,12$ และช่องที่เป็น $d$ คือ $0,1,2,13,14,15$

$a = \sum m(3,5,6,8,9,10,11,12) + d(0,1,2,13,14,15)$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="296" height="280" viewBox="0 0 296 280" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.6" fill="none">
<rect x="66" y="52" width="216" height="216"/>
<line x1="120" y1="52" x2="120" y2="268"/>
<line x1="66" y1="106" x2="282" y2="106"/>
<line x1="174" y1="52" x2="174" y2="268"/>
<line x1="66" y1="160" x2="282" y2="160"/>
<line x1="228" y1="52" x2="228" y2="268"/>
<line x1="66" y1="214" x2="282" y2="214"/>
<line x1="8" y1="8" x2="66" y2="52"/>
</g>
<text x="93" y="37" text-anchor="middle">00</text>
<text x="147" y="37" text-anchor="middle">01</text>
<text x="201" y="37" text-anchor="middle">11</text>
<text x="255" y="37" text-anchor="middle">10</text>
<text x="57" y="85" text-anchor="end">00</text>
<text x="57" y="139" text-anchor="end">01</text>
<text x="57" y="193" text-anchor="end">11</text>
<text x="57" y="247" text-anchor="end">10</text>
<text x="60" y="18" text-anchor="end">AB</text><text x="10" y="40">CD</text>
<text x="115" y="65" text-anchor="end" font-size="11" fill-opacity="0.65">0</text>
<text x="93" y="87" text-anchor="middle" font-size="22">d</text>
<text x="169" y="65" text-anchor="end" font-size="11" fill-opacity="0.65">4</text>
<text x="223" y="65" text-anchor="end" font-size="11" fill-opacity="0.65">12</text>
<text x="201" y="87" text-anchor="middle" font-size="22">1</text>
<text x="277" y="65" text-anchor="end" font-size="11" fill-opacity="0.65">8</text>
<text x="255" y="87" text-anchor="middle" font-size="22">1</text>
<text x="115" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">1</text>
<text x="93" y="141" text-anchor="middle" font-size="22">d</text>
<text x="169" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">5</text>
<text x="147" y="141" text-anchor="middle" font-size="22">1</text>
<text x="223" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">13</text>
<text x="201" y="141" text-anchor="middle" font-size="22">d</text>
<text x="277" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">9</text>
<text x="255" y="141" text-anchor="middle" font-size="22">1</text>
<text x="115" y="173" text-anchor="end" font-size="11" fill-opacity="0.65">3</text>
<text x="93" y="195" text-anchor="middle" font-size="22">1</text>
<text x="169" y="173" text-anchor="end" font-size="11" fill-opacity="0.65">7</text>
<text x="223" y="173" text-anchor="end" font-size="11" fill-opacity="0.65">15</text>
<text x="201" y="195" text-anchor="middle" font-size="22">d</text>
<text x="277" y="173" text-anchor="end" font-size="11" fill-opacity="0.65">11</text>
<text x="255" y="195" text-anchor="middle" font-size="22">1</text>
<text x="115" y="227" text-anchor="end" font-size="11" fill-opacity="0.65">2</text>
<text x="93" y="249" text-anchor="middle" font-size="22">d</text>
<text x="169" y="227" text-anchor="end" font-size="11" fill-opacity="0.65">6</text>
<text x="147" y="249" text-anchor="middle" font-size="22">1</text>
<text x="223" y="227" text-anchor="end" font-size="11" fill-opacity="0.65">14</text>
<text x="201" y="249" text-anchor="middle" font-size="22">d</text>
<text x="277" y="227" text-anchor="end" font-size="11" fill-opacity="0.65">10</text>
<text x="255" y="249" text-anchor="middle" font-size="22">1</text>
<path d="M66,56.5 L106.5,56.5 M115.5,65.5 L115.5,254.5 M106.5,263.5 L66,263.5 M106.5,56.5 A9,9 0 0 1 115.5,65.5 M115.5,254.5 A9,9 0 0 1 106.5,263.5" stroke="#e8743b" stroke-width="2.6" fill="none"/>
<text x="69" y="67" font-size="14" fill="#e8743b" font-weight="bold">1</text>
<path d="M241.5,56.5 L282,56.5 M282,263.5 L241.5,263.5 M232.5,254.5 L232.5,65.5 M232.5,65.5 A9,9 0 0 1 241.5,56.5 M241.5,263.5 A9,9 0 0 1 232.5,254.5" stroke="#e8743b" stroke-width="2.6" fill="none"/>
<path d="M83,114 L265,114 M274,123 L274,143 M265,152 L83,152 M74,143 L74,123 M74,123 A9,9 0 0 1 83,114 M265,114 A9,9 0 0 1 274,123 M274,143 A9,9 0 0 1 265,152 M83,152 A9,9 0 0 1 74,143" stroke="#3b8be8" stroke-width="2.6" fill="none"/>
<text x="69" y="121" font-size="14" fill="#3b8be8" font-weight="bold">2</text>
<path d="M86.5,225.5 L261.5,225.5 M270.5,234.5 L270.5,247.5 M261.5,256.5 L86.5,256.5 M77.5,247.5 L77.5,234.5 M77.5,234.5 A9,9 0 0 1 86.5,225.5 M261.5,225.5 A9,9 0 0 1 270.5,234.5 M270.5,247.5 A9,9 0 0 1 261.5,256.5 M86.5,256.5 A9,9 0 0 1 77.5,247.5" stroke="#2fae5f" stroke-width="2.6" fill="none"/>
<text x="69" y="229" font-size="14" fill="#2fae5f" font-weight="bold">3</text>
<path d="M198,67 L258,67 M267,76 L267,244 M258,253 L198,253 M189,244 L189,76 M189,76 A9,9 0 0 1 198,67 M258,67 A9,9 0 0 1 267,76 M267,244 A9,9 0 0 1 258,253 M198,253 A9,9 0 0 1 189,244" stroke="#a855f7" stroke-width="2.6" fill="none"/>
<text x="177" y="67" font-size="14" fill="#a855f7" font-weight="bold">4</text>
</svg>
</div>

- ลูปสีส้ม (ช่อง $0,1,2,3,8,9,10,11$) : $B=0 \Rightarrow \overline{B}$
- ลูปสีน้ำเงิน (ช่อง $1,5,9,13$) : $C=0,\ D=1 \Rightarrow \overline{C}D$
- ลูปสีเขียว (ช่อง $2,6,10,14$) : $C=1,\ D=0 \Rightarrow C\overline{D}$
- ลูปสีม่วง (ช่อง $8,9,10,11,12,13,14,15$) : $A=1 \Rightarrow A$

$\mathbf{Ans}\quad a = \overline{B}+\overline{C}D+C\overline{D}+A$

### หาสมการของ segment b (Excess-3, Minterm) {code=xs3; method=andor,nand; digit=0,1,2,3,4,7,8,9}

$\mathbf{Sol}^{n}$

จากตารางความจริง ช่องที่ $b = 1$ คือ เลขรหัส $3,4,5,6,7,10,11,12$ และช่องที่เป็น $d$ คือ $0,1,2,13,14,15$

$b = \sum m(3,4,5,6,7,10,11,12) + d(0,1,2,13,14,15)$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="296" height="280" viewBox="0 0 296 280" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.6" fill="none">
<rect x="66" y="52" width="216" height="216"/>
<line x1="120" y1="52" x2="120" y2="268"/>
<line x1="66" y1="106" x2="282" y2="106"/>
<line x1="174" y1="52" x2="174" y2="268"/>
<line x1="66" y1="160" x2="282" y2="160"/>
<line x1="228" y1="52" x2="228" y2="268"/>
<line x1="66" y1="214" x2="282" y2="214"/>
<line x1="8" y1="8" x2="66" y2="52"/>
</g>
<text x="93" y="37" text-anchor="middle">00</text>
<text x="147" y="37" text-anchor="middle">01</text>
<text x="201" y="37" text-anchor="middle">11</text>
<text x="255" y="37" text-anchor="middle">10</text>
<text x="57" y="85" text-anchor="end">00</text>
<text x="57" y="139" text-anchor="end">01</text>
<text x="57" y="193" text-anchor="end">11</text>
<text x="57" y="247" text-anchor="end">10</text>
<text x="60" y="18" text-anchor="end">AB</text><text x="10" y="40">CD</text>
<text x="115" y="65" text-anchor="end" font-size="11" fill-opacity="0.65">0</text>
<text x="93" y="87" text-anchor="middle" font-size="22">d</text>
<text x="169" y="65" text-anchor="end" font-size="11" fill-opacity="0.65">4</text>
<text x="147" y="87" text-anchor="middle" font-size="22">1</text>
<text x="223" y="65" text-anchor="end" font-size="11" fill-opacity="0.65">12</text>
<text x="201" y="87" text-anchor="middle" font-size="22">1</text>
<text x="277" y="65" text-anchor="end" font-size="11" fill-opacity="0.65">8</text>
<text x="115" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">1</text>
<text x="93" y="141" text-anchor="middle" font-size="22">d</text>
<text x="169" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">5</text>
<text x="147" y="141" text-anchor="middle" font-size="22">1</text>
<text x="223" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">13</text>
<text x="201" y="141" text-anchor="middle" font-size="22">d</text>
<text x="277" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">9</text>
<text x="115" y="173" text-anchor="end" font-size="11" fill-opacity="0.65">3</text>
<text x="93" y="195" text-anchor="middle" font-size="22">1</text>
<text x="169" y="173" text-anchor="end" font-size="11" fill-opacity="0.65">7</text>
<text x="147" y="195" text-anchor="middle" font-size="22">1</text>
<text x="223" y="173" text-anchor="end" font-size="11" fill-opacity="0.65">15</text>
<text x="201" y="195" text-anchor="middle" font-size="22">d</text>
<text x="277" y="173" text-anchor="end" font-size="11" fill-opacity="0.65">11</text>
<text x="255" y="195" text-anchor="middle" font-size="22">1</text>
<text x="115" y="227" text-anchor="end" font-size="11" fill-opacity="0.65">2</text>
<text x="93" y="249" text-anchor="middle" font-size="22">d</text>
<text x="169" y="227" text-anchor="end" font-size="11" fill-opacity="0.65">6</text>
<text x="147" y="249" text-anchor="middle" font-size="22">1</text>
<text x="223" y="227" text-anchor="end" font-size="11" fill-opacity="0.65">14</text>
<text x="201" y="249" text-anchor="middle" font-size="22">d</text>
<text x="277" y="227" text-anchor="end" font-size="11" fill-opacity="0.65">10</text>
<text x="255" y="249" text-anchor="middle" font-size="22">1</text>
<path d="M79.5,164.5 L268.5,164.5 M277.5,173.5 L277.5,254.5 M268.5,263.5 L79.5,263.5 M70.5,254.5 L70.5,173.5 M70.5,173.5 A9,9 0 0 1 79.5,164.5 M268.5,164.5 A9,9 0 0 1 277.5,173.5 M277.5,254.5 A9,9 0 0 1 268.5,263.5 M79.5,263.5 A9,9 0 0 1 70.5,254.5" stroke="#e8743b" stroke-width="2.6" fill="none"/>
<text x="69" y="175" font-size="14" fill="#e8743b" font-weight="bold">1</text>
<path d="M137,60 L211,60 M220,69 L220,251 M211,260 L137,260 M128,251 L128,69 M128,69 A9,9 0 0 1 137,60 M211,60 A9,9 0 0 1 220,69 M220,251 A9,9 0 0 1 211,260 M137,260 A9,9 0 0 1 128,251" stroke="#3b8be8" stroke-width="2.6" fill="none"/>
<text x="123" y="67" font-size="14" fill="#3b8be8" font-weight="bold">2</text>
</svg>
</div>

- ลูปสีส้ม (ช่อง $2,3,6,7,10,11,14,15$) : $C=1 \Rightarrow C$
- ลูปสีน้ำเงิน (ช่อง $4,5,6,7,12,13,14,15$) : $B=1 \Rightarrow B$

$\mathbf{Ans}\quad b = C+B$

### หาสมการของ segment c (Excess-3, Minterm) {code=xs3; method=andor,nand; digit=0,1,3,4,5,6,7,8,9}

$\mathbf{Sol}^{n}$

จากตารางความจริง ช่องที่ $c = 1$ คือ เลขรหัส $3,4,6,7,8,9,10,11,12$ และช่องที่เป็น $d$ คือ $0,1,2,13,14,15$

$c = \sum m(3,4,6,7,8,9,10,11,12) + d(0,1,2,13,14,15)$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="296" height="280" viewBox="0 0 296 280" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.6" fill="none">
<rect x="66" y="52" width="216" height="216"/>
<line x1="120" y1="52" x2="120" y2="268"/>
<line x1="66" y1="106" x2="282" y2="106"/>
<line x1="174" y1="52" x2="174" y2="268"/>
<line x1="66" y1="160" x2="282" y2="160"/>
<line x1="228" y1="52" x2="228" y2="268"/>
<line x1="66" y1="214" x2="282" y2="214"/>
<line x1="8" y1="8" x2="66" y2="52"/>
</g>
<text x="93" y="37" text-anchor="middle">00</text>
<text x="147" y="37" text-anchor="middle">01</text>
<text x="201" y="37" text-anchor="middle">11</text>
<text x="255" y="37" text-anchor="middle">10</text>
<text x="57" y="85" text-anchor="end">00</text>
<text x="57" y="139" text-anchor="end">01</text>
<text x="57" y="193" text-anchor="end">11</text>
<text x="57" y="247" text-anchor="end">10</text>
<text x="60" y="18" text-anchor="end">AB</text><text x="10" y="40">CD</text>
<text x="115" y="65" text-anchor="end" font-size="11" fill-opacity="0.65">0</text>
<text x="93" y="87" text-anchor="middle" font-size="22">d</text>
<text x="169" y="65" text-anchor="end" font-size="11" fill-opacity="0.65">4</text>
<text x="147" y="87" text-anchor="middle" font-size="22">1</text>
<text x="223" y="65" text-anchor="end" font-size="11" fill-opacity="0.65">12</text>
<text x="201" y="87" text-anchor="middle" font-size="22">1</text>
<text x="277" y="65" text-anchor="end" font-size="11" fill-opacity="0.65">8</text>
<text x="255" y="87" text-anchor="middle" font-size="22">1</text>
<text x="115" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">1</text>
<text x="93" y="141" text-anchor="middle" font-size="22">d</text>
<text x="169" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">5</text>
<text x="223" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">13</text>
<text x="201" y="141" text-anchor="middle" font-size="22">d</text>
<text x="277" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">9</text>
<text x="255" y="141" text-anchor="middle" font-size="22">1</text>
<text x="115" y="173" text-anchor="end" font-size="11" fill-opacity="0.65">3</text>
<text x="93" y="195" text-anchor="middle" font-size="22">1</text>
<text x="169" y="173" text-anchor="end" font-size="11" fill-opacity="0.65">7</text>
<text x="147" y="195" text-anchor="middle" font-size="22">1</text>
<text x="223" y="173" text-anchor="end" font-size="11" fill-opacity="0.65">15</text>
<text x="201" y="195" text-anchor="middle" font-size="22">d</text>
<text x="277" y="173" text-anchor="end" font-size="11" fill-opacity="0.65">11</text>
<text x="255" y="195" text-anchor="middle" font-size="22">1</text>
<text x="115" y="227" text-anchor="end" font-size="11" fill-opacity="0.65">2</text>
<text x="93" y="249" text-anchor="middle" font-size="22">d</text>
<text x="169" y="227" text-anchor="end" font-size="11" fill-opacity="0.65">6</text>
<text x="147" y="249" text-anchor="middle" font-size="22">1</text>
<text x="223" y="227" text-anchor="end" font-size="11" fill-opacity="0.65">14</text>
<text x="201" y="249" text-anchor="middle" font-size="22">d</text>
<text x="277" y="227" text-anchor="end" font-size="11" fill-opacity="0.65">10</text>
<text x="255" y="249" text-anchor="middle" font-size="22">1</text>
<path d="M66,56.5 L106.5,56.5 M115.5,65.5 L115.5,254.5 M106.5,263.5 L66,263.5 M106.5,56.5 A9,9 0 0 1 115.5,65.5 M115.5,254.5 A9,9 0 0 1 106.5,263.5" stroke="#e8743b" stroke-width="2.6" fill="none"/>
<text x="69" y="67" font-size="14" fill="#e8743b" font-weight="bold">1</text>
<path d="M241.5,56.5 L282,56.5 M282,263.5 L241.5,263.5 M232.5,254.5 L232.5,65.5 M232.5,65.5 A9,9 0 0 1 241.5,56.5 M241.5,263.5 A9,9 0 0 1 232.5,254.5" stroke="#e8743b" stroke-width="2.6" fill="none"/>
<path d="M274,52 L274,89 M265,98 L83,98 M74,89 L74,52 M274,89 A9,9 0 0 1 265,98 M83,98 A9,9 0 0 1 74,89" stroke="#3b8be8" stroke-width="2.6" fill="none"/>
<text x="79" y="67" font-size="14" fill="#3b8be8" font-weight="bold">2</text>
<path d="M83,222 L265,222 M274,231 L274,268 M74,268 L74,231 M74,231 A9,9 0 0 1 83,222 M265,222 A9,9 0 0 1 274,231" stroke="#3b8be8" stroke-width="2.6" fill="none"/>
<path d="M86.5,171.5 L261.5,171.5 M270.5,180.5 L270.5,247.5 M261.5,256.5 L86.5,256.5 M77.5,247.5 L77.5,180.5 M77.5,180.5 A9,9 0 0 1 86.5,171.5 M261.5,171.5 A9,9 0 0 1 270.5,180.5 M270.5,247.5 A9,9 0 0 1 261.5,256.5 M86.5,256.5 A9,9 0 0 1 77.5,247.5" stroke="#2fae5f" stroke-width="2.6" fill="none"/>
<text x="69" y="175" font-size="14" fill="#2fae5f" font-weight="bold">3</text>
</svg>
</div>

- ลูปสีส้ม (ช่อง $0,1,2,3,8,9,10,11$) : $B=0 \Rightarrow \overline{B}$
- ลูปสีน้ำเงิน (ช่อง $0,2,4,6,8,10,12,14$) : $D=0 \Rightarrow \overline{D}$
- ลูปสีเขียว (ช่อง $2,3,6,7,10,11,14,15$) : $C=1 \Rightarrow C$

$\mathbf{Ans}\quad c = \overline{B}+\overline{D}+C$

### หาสมการของ segment d (Excess-3, Minterm) {code=xs3; method=andor,nand; digit=0,2,3,5,6,8,9}

$\mathbf{Sol}^{n}$

จากตารางความจริง ช่องที่ $d = 1$ คือ เลขรหัส $3,5,6,8,9,11,12$ และช่องที่เป็น $d$ คือ $0,1,2,13,14,15$

$d = \sum m(3,5,6,8,9,11,12) + d(0,1,2,13,14,15)$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="296" height="280" viewBox="0 0 296 280" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.6" fill="none">
<rect x="66" y="52" width="216" height="216"/>
<line x1="120" y1="52" x2="120" y2="268"/>
<line x1="66" y1="106" x2="282" y2="106"/>
<line x1="174" y1="52" x2="174" y2="268"/>
<line x1="66" y1="160" x2="282" y2="160"/>
<line x1="228" y1="52" x2="228" y2="268"/>
<line x1="66" y1="214" x2="282" y2="214"/>
<line x1="8" y1="8" x2="66" y2="52"/>
</g>
<text x="93" y="37" text-anchor="middle">00</text>
<text x="147" y="37" text-anchor="middle">01</text>
<text x="201" y="37" text-anchor="middle">11</text>
<text x="255" y="37" text-anchor="middle">10</text>
<text x="57" y="85" text-anchor="end">00</text>
<text x="57" y="139" text-anchor="end">01</text>
<text x="57" y="193" text-anchor="end">11</text>
<text x="57" y="247" text-anchor="end">10</text>
<text x="60" y="18" text-anchor="end">AB</text><text x="10" y="40">CD</text>
<text x="115" y="65" text-anchor="end" font-size="11" fill-opacity="0.65">0</text>
<text x="93" y="87" text-anchor="middle" font-size="22">d</text>
<text x="169" y="65" text-anchor="end" font-size="11" fill-opacity="0.65">4</text>
<text x="223" y="65" text-anchor="end" font-size="11" fill-opacity="0.65">12</text>
<text x="201" y="87" text-anchor="middle" font-size="22">1</text>
<text x="277" y="65" text-anchor="end" font-size="11" fill-opacity="0.65">8</text>
<text x="255" y="87" text-anchor="middle" font-size="22">1</text>
<text x="115" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">1</text>
<text x="93" y="141" text-anchor="middle" font-size="22">d</text>
<text x="169" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">5</text>
<text x="147" y="141" text-anchor="middle" font-size="22">1</text>
<text x="223" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">13</text>
<text x="201" y="141" text-anchor="middle" font-size="22">d</text>
<text x="277" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">9</text>
<text x="255" y="141" text-anchor="middle" font-size="22">1</text>
<text x="115" y="173" text-anchor="end" font-size="11" fill-opacity="0.65">3</text>
<text x="93" y="195" text-anchor="middle" font-size="22">1</text>
<text x="169" y="173" text-anchor="end" font-size="11" fill-opacity="0.65">7</text>
<text x="223" y="173" text-anchor="end" font-size="11" fill-opacity="0.65">15</text>
<text x="201" y="195" text-anchor="middle" font-size="22">d</text>
<text x="277" y="173" text-anchor="end" font-size="11" fill-opacity="0.65">11</text>
<text x="255" y="195" text-anchor="middle" font-size="22">1</text>
<text x="115" y="227" text-anchor="end" font-size="11" fill-opacity="0.65">2</text>
<text x="93" y="249" text-anchor="middle" font-size="22">d</text>
<text x="169" y="227" text-anchor="end" font-size="11" fill-opacity="0.65">6</text>
<text x="147" y="249" text-anchor="middle" font-size="22">1</text>
<text x="223" y="227" text-anchor="end" font-size="11" fill-opacity="0.65">14</text>
<text x="201" y="249" text-anchor="middle" font-size="22">d</text>
<text x="277" y="227" text-anchor="end" font-size="11" fill-opacity="0.65">10</text>
<path d="M66,110.5 L106.5,110.5 M115.5,119.5 L115.5,200.5 M106.5,209.5 L66,209.5 M106.5,110.5 A9,9 0 0 1 115.5,119.5 M115.5,200.5 A9,9 0 0 1 106.5,209.5" stroke="#e8743b" stroke-width="2.6" fill="none"/>
<text x="69" y="121" font-size="14" fill="#e8743b" font-weight="bold">1</text>
<path d="M241.5,110.5 L282,110.5 M282,209.5 L241.5,209.5 M232.5,200.5 L232.5,119.5 M232.5,119.5 A9,9 0 0 1 241.5,110.5 M241.5,209.5 A9,9 0 0 1 232.5,200.5" stroke="#e8743b" stroke-width="2.6" fill="none"/>
<path d="M83,114 L265,114 M274,123 L274,143 M265,152 L83,152 M74,143 L74,123 M74,123 A9,9 0 0 1 83,114 M265,114 A9,9 0 0 1 274,123 M274,143 A9,9 0 0 1 265,152 M83,152 A9,9 0 0 1 74,143" stroke="#3b8be8" stroke-width="2.6" fill="none"/>
<text x="79" y="121" font-size="14" fill="#3b8be8" font-weight="bold">2</text>
<path d="M86.5,225.5 L153.5,225.5 M162.5,234.5 L162.5,247.5 M153.5,256.5 L86.5,256.5 M77.5,247.5 L77.5,234.5 M77.5,234.5 A9,9 0 0 1 86.5,225.5 M153.5,225.5 A9,9 0 0 1 162.5,234.5 M162.5,247.5 A9,9 0 0 1 153.5,256.5 M86.5,256.5 A9,9 0 0 1 77.5,247.5" stroke="#2fae5f" stroke-width="2.6" fill="none"/>
<text x="69" y="229" font-size="14" fill="#2fae5f" font-weight="bold">3</text>
<path d="M198,67 L258,67 M267,76 L267,136 M258,145 L198,145 M189,136 L189,76 M189,76 A9,9 0 0 1 198,67 M258,67 A9,9 0 0 1 267,76 M267,136 A9,9 0 0 1 258,145 M198,145 A9,9 0 0 1 189,136" stroke="#a855f7" stroke-width="2.6" fill="none"/>
<text x="177" y="67" font-size="14" fill="#a855f7" font-weight="bold">4</text>
</svg>
</div>

- ลูปสีส้ม (ช่อง $1,3,9,11$) : $B=0,\ D=1 \Rightarrow \overline{B}D$
- ลูปสีน้ำเงิน (ช่อง $1,5,9,13$) : $C=0,\ D=1 \Rightarrow \overline{C}D$
- ลูปสีเขียว (ช่อง $2,6$) : $A=0,\ C=1,\ D=0 \Rightarrow \overline{A}C\overline{D}$
- ลูปสีม่วง (ช่อง $8,9,12,13$) : $A=1,\ C=0 \Rightarrow A\overline{C}$

$\mathbf{Ans}\quad d = \overline{B}D+\overline{C}D+\overline{A}C\overline{D}+A\overline{C}$

### หาสมการของ segment e (Excess-3, Minterm) {code=xs3; method=andor,nand; digit=0,2,6,8}

$\mathbf{Sol}^{n}$

จากตารางความจริง ช่องที่ $e = 1$ คือ เลขรหัส $3,5,9,11$ และช่องที่เป็น $d$ คือ $0,1,2,13,14,15$

$e = \sum m(3,5,9,11) + d(0,1,2,13,14,15)$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="296" height="280" viewBox="0 0 296 280" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.6" fill="none">
<rect x="66" y="52" width="216" height="216"/>
<line x1="120" y1="52" x2="120" y2="268"/>
<line x1="66" y1="106" x2="282" y2="106"/>
<line x1="174" y1="52" x2="174" y2="268"/>
<line x1="66" y1="160" x2="282" y2="160"/>
<line x1="228" y1="52" x2="228" y2="268"/>
<line x1="66" y1="214" x2="282" y2="214"/>
<line x1="8" y1="8" x2="66" y2="52"/>
</g>
<text x="93" y="37" text-anchor="middle">00</text>
<text x="147" y="37" text-anchor="middle">01</text>
<text x="201" y="37" text-anchor="middle">11</text>
<text x="255" y="37" text-anchor="middle">10</text>
<text x="57" y="85" text-anchor="end">00</text>
<text x="57" y="139" text-anchor="end">01</text>
<text x="57" y="193" text-anchor="end">11</text>
<text x="57" y="247" text-anchor="end">10</text>
<text x="60" y="18" text-anchor="end">AB</text><text x="10" y="40">CD</text>
<text x="115" y="65" text-anchor="end" font-size="11" fill-opacity="0.65">0</text>
<text x="93" y="87" text-anchor="middle" font-size="22">d</text>
<text x="169" y="65" text-anchor="end" font-size="11" fill-opacity="0.65">4</text>
<text x="223" y="65" text-anchor="end" font-size="11" fill-opacity="0.65">12</text>
<text x="277" y="65" text-anchor="end" font-size="11" fill-opacity="0.65">8</text>
<text x="115" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">1</text>
<text x="93" y="141" text-anchor="middle" font-size="22">d</text>
<text x="169" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">5</text>
<text x="147" y="141" text-anchor="middle" font-size="22">1</text>
<text x="223" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">13</text>
<text x="201" y="141" text-anchor="middle" font-size="22">d</text>
<text x="277" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">9</text>
<text x="255" y="141" text-anchor="middle" font-size="22">1</text>
<text x="115" y="173" text-anchor="end" font-size="11" fill-opacity="0.65">3</text>
<text x="93" y="195" text-anchor="middle" font-size="22">1</text>
<text x="169" y="173" text-anchor="end" font-size="11" fill-opacity="0.65">7</text>
<text x="223" y="173" text-anchor="end" font-size="11" fill-opacity="0.65">15</text>
<text x="201" y="195" text-anchor="middle" font-size="22">d</text>
<text x="277" y="173" text-anchor="end" font-size="11" fill-opacity="0.65">11</text>
<text x="255" y="195" text-anchor="middle" font-size="22">1</text>
<text x="115" y="227" text-anchor="end" font-size="11" fill-opacity="0.65">2</text>
<text x="93" y="249" text-anchor="middle" font-size="22">d</text>
<text x="169" y="227" text-anchor="end" font-size="11" fill-opacity="0.65">6</text>
<text x="223" y="227" text-anchor="end" font-size="11" fill-opacity="0.65">14</text>
<text x="201" y="249" text-anchor="middle" font-size="22">d</text>
<text x="277" y="227" text-anchor="end" font-size="11" fill-opacity="0.65">10</text>
<path d="M66,110.5 L106.5,110.5 M115.5,119.5 L115.5,200.5 M106.5,209.5 L66,209.5 M106.5,110.5 A9,9 0 0 1 115.5,119.5 M115.5,200.5 A9,9 0 0 1 106.5,209.5" stroke="#e8743b" stroke-width="2.6" fill="none"/>
<text x="69" y="121" font-size="14" fill="#e8743b" font-weight="bold">1</text>
<path d="M241.5,110.5 L282,110.5 M282,209.5 L241.5,209.5 M232.5,200.5 L232.5,119.5 M232.5,119.5 A9,9 0 0 1 241.5,110.5 M241.5,209.5 A9,9 0 0 1 232.5,200.5" stroke="#e8743b" stroke-width="2.6" fill="none"/>
<path d="M83,114 L265,114 M274,123 L274,143 M265,152 L83,152 M74,143 L74,123 M74,123 A9,9 0 0 1 83,114 M265,114 A9,9 0 0 1 274,123 M274,143 A9,9 0 0 1 265,152 M83,152 A9,9 0 0 1 74,143" stroke="#3b8be8" stroke-width="2.6" fill="none"/>
<text x="79" y="121" font-size="14" fill="#3b8be8" font-weight="bold">2</text>
</svg>
</div>

- ลูปสีส้ม (ช่อง $1,3,9,11$) : $B=0,\ D=1 \Rightarrow \overline{B}D$
- ลูปสีน้ำเงิน (ช่อง $1,5,9,13$) : $C=0,\ D=1 \Rightarrow \overline{C}D$

$\mathbf{Ans}\quad e = \overline{B}D+\overline{C}D$

### หาสมการของ segment f (Excess-3, Minterm) {code=xs3; method=andor,nand; digit=0,4,5,6,8,9}

$\mathbf{Sol}^{n}$

จากตารางความจริง ช่องที่ $f = 1$ คือ เลขรหัส $3,7,8,9,11,12$ และช่องที่เป็น $d$ คือ $0,1,2,13,14,15$

$f = \sum m(3,7,8,9,11,12) + d(0,1,2,13,14,15)$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="296" height="280" viewBox="0 0 296 280" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.6" fill="none">
<rect x="66" y="52" width="216" height="216"/>
<line x1="120" y1="52" x2="120" y2="268"/>
<line x1="66" y1="106" x2="282" y2="106"/>
<line x1="174" y1="52" x2="174" y2="268"/>
<line x1="66" y1="160" x2="282" y2="160"/>
<line x1="228" y1="52" x2="228" y2="268"/>
<line x1="66" y1="214" x2="282" y2="214"/>
<line x1="8" y1="8" x2="66" y2="52"/>
</g>
<text x="93" y="37" text-anchor="middle">00</text>
<text x="147" y="37" text-anchor="middle">01</text>
<text x="201" y="37" text-anchor="middle">11</text>
<text x="255" y="37" text-anchor="middle">10</text>
<text x="57" y="85" text-anchor="end">00</text>
<text x="57" y="139" text-anchor="end">01</text>
<text x="57" y="193" text-anchor="end">11</text>
<text x="57" y="247" text-anchor="end">10</text>
<text x="60" y="18" text-anchor="end">AB</text><text x="10" y="40">CD</text>
<text x="115" y="65" text-anchor="end" font-size="11" fill-opacity="0.65">0</text>
<text x="93" y="87" text-anchor="middle" font-size="22">d</text>
<text x="169" y="65" text-anchor="end" font-size="11" fill-opacity="0.65">4</text>
<text x="223" y="65" text-anchor="end" font-size="11" fill-opacity="0.65">12</text>
<text x="201" y="87" text-anchor="middle" font-size="22">1</text>
<text x="277" y="65" text-anchor="end" font-size="11" fill-opacity="0.65">8</text>
<text x="255" y="87" text-anchor="middle" font-size="22">1</text>
<text x="115" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">1</text>
<text x="93" y="141" text-anchor="middle" font-size="22">d</text>
<text x="169" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">5</text>
<text x="223" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">13</text>
<text x="201" y="141" text-anchor="middle" font-size="22">d</text>
<text x="277" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">9</text>
<text x="255" y="141" text-anchor="middle" font-size="22">1</text>
<text x="115" y="173" text-anchor="end" font-size="11" fill-opacity="0.65">3</text>
<text x="93" y="195" text-anchor="middle" font-size="22">1</text>
<text x="169" y="173" text-anchor="end" font-size="11" fill-opacity="0.65">7</text>
<text x="147" y="195" text-anchor="middle" font-size="22">1</text>
<text x="223" y="173" text-anchor="end" font-size="11" fill-opacity="0.65">15</text>
<text x="201" y="195" text-anchor="middle" font-size="22">d</text>
<text x="277" y="173" text-anchor="end" font-size="11" fill-opacity="0.65">11</text>
<text x="255" y="195" text-anchor="middle" font-size="22">1</text>
<text x="115" y="227" text-anchor="end" font-size="11" fill-opacity="0.65">2</text>
<text x="93" y="249" text-anchor="middle" font-size="22">d</text>
<text x="169" y="227" text-anchor="end" font-size="11" fill-opacity="0.65">6</text>
<text x="223" y="227" text-anchor="end" font-size="11" fill-opacity="0.65">14</text>
<text x="201" y="249" text-anchor="middle" font-size="22">d</text>
<text x="277" y="227" text-anchor="end" font-size="11" fill-opacity="0.65">10</text>
<path d="M79.5,164.5 L268.5,164.5 M277.5,173.5 L277.5,200.5 M268.5,209.5 L79.5,209.5 M70.5,200.5 L70.5,173.5 M70.5,173.5 A9,9 0 0 1 79.5,164.5 M268.5,164.5 A9,9 0 0 1 277.5,173.5 M277.5,200.5 A9,9 0 0 1 268.5,209.5 M79.5,209.5 A9,9 0 0 1 70.5,200.5" stroke="#e8743b" stroke-width="2.6" fill="none"/>
<text x="69" y="175" font-size="14" fill="#e8743b" font-weight="bold">1</text>
<path d="M191,60 L265,60 M274,69 L274,143 M265,152 L191,152 M182,143 L182,69 M182,69 A9,9 0 0 1 191,60 M265,60 A9,9 0 0 1 274,69 M274,143 A9,9 0 0 1 265,152 M191,152 A9,9 0 0 1 182,143" stroke="#3b8be8" stroke-width="2.6" fill="none"/>
<text x="177" y="67" font-size="14" fill="#3b8be8" font-weight="bold">2</text>
</svg>
</div>

- ลูปสีส้ม (ช่อง $3,7,11,15$) : $C=1,\ D=1 \Rightarrow CD$
- ลูปสีน้ำเงิน (ช่อง $8,9,12,13$) : $A=1,\ C=0 \Rightarrow A\overline{C}$

$\mathbf{Ans}\quad f = CD+A\overline{C}$

### หาสมการของ segment g (Excess-3, Minterm) {code=xs3; method=andor,nand; digit=2,3,4,5,6,8,9}

$\mathbf{Sol}^{n}$

จากตารางความจริง ช่องที่ $g = 1$ คือ เลขรหัส $5,6,7,8,9,11,12$ และช่องที่เป็น $d$ คือ $0,1,2,13,14,15$

$g = \sum m(5,6,7,8,9,11,12) + d(0,1,2,13,14,15)$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="296" height="280" viewBox="0 0 296 280" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.6" fill="none">
<rect x="66" y="52" width="216" height="216"/>
<line x1="120" y1="52" x2="120" y2="268"/>
<line x1="66" y1="106" x2="282" y2="106"/>
<line x1="174" y1="52" x2="174" y2="268"/>
<line x1="66" y1="160" x2="282" y2="160"/>
<line x1="228" y1="52" x2="228" y2="268"/>
<line x1="66" y1="214" x2="282" y2="214"/>
<line x1="8" y1="8" x2="66" y2="52"/>
</g>
<text x="93" y="37" text-anchor="middle">00</text>
<text x="147" y="37" text-anchor="middle">01</text>
<text x="201" y="37" text-anchor="middle">11</text>
<text x="255" y="37" text-anchor="middle">10</text>
<text x="57" y="85" text-anchor="end">00</text>
<text x="57" y="139" text-anchor="end">01</text>
<text x="57" y="193" text-anchor="end">11</text>
<text x="57" y="247" text-anchor="end">10</text>
<text x="60" y="18" text-anchor="end">AB</text><text x="10" y="40">CD</text>
<text x="115" y="65" text-anchor="end" font-size="11" fill-opacity="0.65">0</text>
<text x="93" y="87" text-anchor="middle" font-size="22">d</text>
<text x="169" y="65" text-anchor="end" font-size="11" fill-opacity="0.65">4</text>
<text x="223" y="65" text-anchor="end" font-size="11" fill-opacity="0.65">12</text>
<text x="201" y="87" text-anchor="middle" font-size="22">1</text>
<text x="277" y="65" text-anchor="end" font-size="11" fill-opacity="0.65">8</text>
<text x="255" y="87" text-anchor="middle" font-size="22">1</text>
<text x="115" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">1</text>
<text x="93" y="141" text-anchor="middle" font-size="22">d</text>
<text x="169" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">5</text>
<text x="147" y="141" text-anchor="middle" font-size="22">1</text>
<text x="223" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">13</text>
<text x="201" y="141" text-anchor="middle" font-size="22">d</text>
<text x="277" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">9</text>
<text x="255" y="141" text-anchor="middle" font-size="22">1</text>
<text x="115" y="173" text-anchor="end" font-size="11" fill-opacity="0.65">3</text>
<text x="169" y="173" text-anchor="end" font-size="11" fill-opacity="0.65">7</text>
<text x="147" y="195" text-anchor="middle" font-size="22">1</text>
<text x="223" y="173" text-anchor="end" font-size="11" fill-opacity="0.65">15</text>
<text x="201" y="195" text-anchor="middle" font-size="22">d</text>
<text x="277" y="173" text-anchor="end" font-size="11" fill-opacity="0.65">11</text>
<text x="255" y="195" text-anchor="middle" font-size="22">1</text>
<text x="115" y="227" text-anchor="end" font-size="11" fill-opacity="0.65">2</text>
<text x="93" y="249" text-anchor="middle" font-size="22">d</text>
<text x="169" y="227" text-anchor="end" font-size="11" fill-opacity="0.65">6</text>
<text x="147" y="249" text-anchor="middle" font-size="22">1</text>
<text x="223" y="227" text-anchor="end" font-size="11" fill-opacity="0.65">14</text>
<text x="201" y="249" text-anchor="middle" font-size="22">d</text>
<text x="277" y="227" text-anchor="end" font-size="11" fill-opacity="0.65">10</text>
<path d="M79.5,110.5 L268.5,110.5 M277.5,119.5 L277.5,146.5 M268.5,155.5 L79.5,155.5 M70.5,146.5 L70.5,119.5 M70.5,119.5 A9,9 0 0 1 79.5,110.5 M268.5,110.5 A9,9 0 0 1 277.5,119.5 M277.5,146.5 A9,9 0 0 1 268.5,155.5 M79.5,155.5 A9,9 0 0 1 70.5,146.5" stroke="#e8743b" stroke-width="2.6" fill="none"/>
<text x="69" y="121" font-size="14" fill="#e8743b" font-weight="bold">1</text>
<path d="M137,168 L211,168 M220,177 L220,251 M211,260 L137,260 M128,251 L128,177 M128,177 A9,9 0 0 1 137,168 M211,168 A9,9 0 0 1 220,177 M220,251 A9,9 0 0 1 211,260 M137,260 A9,9 0 0 1 128,251" stroke="#3b8be8" stroke-width="2.6" fill="none"/>
<text x="123" y="175" font-size="14" fill="#3b8be8" font-weight="bold">2</text>
<path d="M194.5,63.5 L261.5,63.5 M270.5,72.5 L270.5,139.5 M261.5,148.5 L194.5,148.5 M185.5,139.5 L185.5,72.5 M185.5,72.5 A9,9 0 0 1 194.5,63.5 M261.5,63.5 A9,9 0 0 1 270.5,72.5 M270.5,139.5 A9,9 0 0 1 261.5,148.5 M194.5,148.5 A9,9 0 0 1 185.5,139.5" stroke="#2fae5f" stroke-width="2.6" fill="none"/>
<text x="177" y="67" font-size="14" fill="#2fae5f" font-weight="bold">3</text>
<path d="M198,121 L258,121 M267,130 L267,190 M258,199 L198,199 M189,190 L189,130 M189,130 A9,9 0 0 1 198,121 M258,121 A9,9 0 0 1 267,130 M267,190 A9,9 0 0 1 258,199 M198,199 A9,9 0 0 1 189,190" stroke="#a855f7" stroke-width="2.6" fill="none"/>
<text x="177" y="121" font-size="14" fill="#a855f7" font-weight="bold">4</text>
</svg>
</div>

- ลูปสีส้ม (ช่อง $1,5,9,13$) : $C=0,\ D=1 \Rightarrow \overline{C}D$
- ลูปสีน้ำเงิน (ช่อง $6,7,14,15$) : $B=1,\ C=1 \Rightarrow BC$
- ลูปสีเขียว (ช่อง $8,9,12,13$) : $A=1,\ C=0 \Rightarrow A\overline{C}$
- ลูปสีม่วง (ช่อง $9,11,13,15$) : $A=1,\ D=1 \Rightarrow AD$

$\mathbf{Ans}\quad g = \overline{C}D+BC+A\overline{C}+AD$

### หาสมการของ segment a (Excess-3, Maxterm) {code=xs3; method=orand,nor; digit=0,2,3,5,6,7,8,9}

$\mathbf{Sol}^{n}$

จากตารางความจริง ช่องที่ $a = 0$ คือ เลขรหัส $4,7$ และช่องที่เป็น $d$ คือ $0,1,2,13,14,15$

$a = \prod M(4,7) \cdot d(0,1,2,13,14,15)$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="296" height="280" viewBox="0 0 296 280" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.6" fill="none">
<rect x="66" y="52" width="216" height="216"/>
<line x1="120" y1="52" x2="120" y2="268"/>
<line x1="66" y1="106" x2="282" y2="106"/>
<line x1="174" y1="52" x2="174" y2="268"/>
<line x1="66" y1="160" x2="282" y2="160"/>
<line x1="228" y1="52" x2="228" y2="268"/>
<line x1="66" y1="214" x2="282" y2="214"/>
<line x1="8" y1="8" x2="66" y2="52"/>
</g>
<text x="93" y="37" text-anchor="middle">00</text>
<text x="147" y="37" text-anchor="middle">01</text>
<text x="201" y="37" text-anchor="middle">11</text>
<text x="255" y="37" text-anchor="middle">10</text>
<text x="57" y="85" text-anchor="end">00</text>
<text x="57" y="139" text-anchor="end">01</text>
<text x="57" y="193" text-anchor="end">11</text>
<text x="57" y="247" text-anchor="end">10</text>
<text x="60" y="18" text-anchor="end">AB</text><text x="10" y="40">CD</text>
<text x="115" y="65" text-anchor="end" font-size="11" fill-opacity="0.65">0</text>
<text x="93" y="87" text-anchor="middle" font-size="22">d</text>
<text x="169" y="65" text-anchor="end" font-size="11" fill-opacity="0.65">4</text>
<text x="147" y="87" text-anchor="middle" font-size="22">0</text>
<text x="223" y="65" text-anchor="end" font-size="11" fill-opacity="0.65">12</text>
<text x="277" y="65" text-anchor="end" font-size="11" fill-opacity="0.65">8</text>
<text x="115" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">1</text>
<text x="93" y="141" text-anchor="middle" font-size="22">d</text>
<text x="169" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">5</text>
<text x="223" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">13</text>
<text x="201" y="141" text-anchor="middle" font-size="22">d</text>
<text x="277" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">9</text>
<text x="115" y="173" text-anchor="end" font-size="11" fill-opacity="0.65">3</text>
<text x="169" y="173" text-anchor="end" font-size="11" fill-opacity="0.65">7</text>
<text x="147" y="195" text-anchor="middle" font-size="22">0</text>
<text x="223" y="173" text-anchor="end" font-size="11" fill-opacity="0.65">15</text>
<text x="201" y="195" text-anchor="middle" font-size="22">d</text>
<text x="277" y="173" text-anchor="end" font-size="11" fill-opacity="0.65">11</text>
<text x="115" y="227" text-anchor="end" font-size="11" fill-opacity="0.65">2</text>
<text x="93" y="249" text-anchor="middle" font-size="22">d</text>
<text x="169" y="227" text-anchor="end" font-size="11" fill-opacity="0.65">6</text>
<text x="223" y="227" text-anchor="end" font-size="11" fill-opacity="0.65">14</text>
<text x="201" y="249" text-anchor="middle" font-size="22">d</text>
<text x="277" y="227" text-anchor="end" font-size="11" fill-opacity="0.65">10</text>
<path d="M79.5,56.5 L160.5,56.5 M169.5,65.5 L169.5,92.5 M160.5,101.5 L79.5,101.5 M70.5,92.5 L70.5,65.5 M70.5,65.5 A9,9 0 0 1 79.5,56.5 M160.5,56.5 A9,9 0 0 1 169.5,65.5 M169.5,92.5 A9,9 0 0 1 160.5,101.5 M79.5,101.5 A9,9 0 0 1 70.5,92.5" stroke="#e8743b" stroke-width="2.6" fill="none"/>
<text x="69" y="67" font-size="14" fill="#e8743b" font-weight="bold">1</text>
<path d="M137,168 L211,168 M220,177 L220,197 M211,206 L137,206 M128,197 L128,177 M128,177 A9,9 0 0 1 137,168 M211,168 A9,9 0 0 1 220,177 M220,197 A9,9 0 0 1 211,206 M137,206 A9,9 0 0 1 128,197" stroke="#3b8be8" stroke-width="2.6" fill="none"/>
<text x="123" y="175" font-size="14" fill="#3b8be8" font-weight="bold">2</text>
</svg>
</div>

- ลูปสีส้ม (ช่อง $0,4$) : $A=0,\ C=0,\ D=0 \Rightarrow (A+C+D)$
- ลูปสีน้ำเงิน (ช่อง $7,15$) : $B=1,\ C=1,\ D=1 \Rightarrow (\overline{B}+\overline{C}+\overline{D})$

$\mathbf{Ans}\quad a = (A+C+D)(\overline{B}+\overline{C}+\overline{D})$

### หาสมการของ segment b (Excess-3, Maxterm) {code=xs3; method=orand,nor; digit=0,1,2,3,4,7,8,9}

$\mathbf{Sol}^{n}$

จากตารางความจริง ช่องที่ $b = 0$ คือ เลขรหัส $8,9$ และช่องที่เป็น $d$ คือ $0,1,2,13,14,15$

$b = \prod M(8,9) \cdot d(0,1,2,13,14,15)$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="296" height="280" viewBox="0 0 296 280" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.6" fill="none">
<rect x="66" y="52" width="216" height="216"/>
<line x1="120" y1="52" x2="120" y2="268"/>
<line x1="66" y1="106" x2="282" y2="106"/>
<line x1="174" y1="52" x2="174" y2="268"/>
<line x1="66" y1="160" x2="282" y2="160"/>
<line x1="228" y1="52" x2="228" y2="268"/>
<line x1="66" y1="214" x2="282" y2="214"/>
<line x1="8" y1="8" x2="66" y2="52"/>
</g>
<text x="93" y="37" text-anchor="middle">00</text>
<text x="147" y="37" text-anchor="middle">01</text>
<text x="201" y="37" text-anchor="middle">11</text>
<text x="255" y="37" text-anchor="middle">10</text>
<text x="57" y="85" text-anchor="end">00</text>
<text x="57" y="139" text-anchor="end">01</text>
<text x="57" y="193" text-anchor="end">11</text>
<text x="57" y="247" text-anchor="end">10</text>
<text x="60" y="18" text-anchor="end">AB</text><text x="10" y="40">CD</text>
<text x="115" y="65" text-anchor="end" font-size="11" fill-opacity="0.65">0</text>
<text x="93" y="87" text-anchor="middle" font-size="22">d</text>
<text x="169" y="65" text-anchor="end" font-size="11" fill-opacity="0.65">4</text>
<text x="223" y="65" text-anchor="end" font-size="11" fill-opacity="0.65">12</text>
<text x="277" y="65" text-anchor="end" font-size="11" fill-opacity="0.65">8</text>
<text x="255" y="87" text-anchor="middle" font-size="22">0</text>
<text x="115" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">1</text>
<text x="93" y="141" text-anchor="middle" font-size="22">d</text>
<text x="169" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">5</text>
<text x="223" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">13</text>
<text x="201" y="141" text-anchor="middle" font-size="22">d</text>
<text x="277" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">9</text>
<text x="255" y="141" text-anchor="middle" font-size="22">0</text>
<text x="115" y="173" text-anchor="end" font-size="11" fill-opacity="0.65">3</text>
<text x="169" y="173" text-anchor="end" font-size="11" fill-opacity="0.65">7</text>
<text x="223" y="173" text-anchor="end" font-size="11" fill-opacity="0.65">15</text>
<text x="201" y="195" text-anchor="middle" font-size="22">d</text>
<text x="277" y="173" text-anchor="end" font-size="11" fill-opacity="0.65">11</text>
<text x="115" y="227" text-anchor="end" font-size="11" fill-opacity="0.65">2</text>
<text x="93" y="249" text-anchor="middle" font-size="22">d</text>
<text x="169" y="227" text-anchor="end" font-size="11" fill-opacity="0.65">6</text>
<text x="223" y="227" text-anchor="end" font-size="11" fill-opacity="0.65">14</text>
<text x="201" y="249" text-anchor="middle" font-size="22">d</text>
<text x="277" y="227" text-anchor="end" font-size="11" fill-opacity="0.65">10</text>
<path d="M66,56.5 L106.5,56.5 M115.5,65.5 L115.5,146.5 M106.5,155.5 L66,155.5 M106.5,56.5 A9,9 0 0 1 115.5,65.5 M115.5,146.5 A9,9 0 0 1 106.5,155.5" stroke="#e8743b" stroke-width="2.6" fill="none"/>
<text x="69" y="67" font-size="14" fill="#e8743b" font-weight="bold">1</text>
<path d="M241.5,56.5 L282,56.5 M282,155.5 L241.5,155.5 M232.5,146.5 L232.5,65.5 M232.5,65.5 A9,9 0 0 1 241.5,56.5 M241.5,155.5 A9,9 0 0 1 232.5,146.5" stroke="#e8743b" stroke-width="2.6" fill="none"/>
</svg>
</div>

- ลูปสีส้ม (ช่อง $0,1,8,9$) : $B=0,\ C=0 \Rightarrow (B+C)$

$\mathbf{Ans}\quad b = (B+C)$

### หาสมการของ segment c (Excess-3, Maxterm) {code=xs3; method=orand,nor; digit=0,1,3,4,5,6,7,8,9}

$\mathbf{Sol}^{n}$

จากตารางความจริง ช่องที่ $c = 0$ คือ เลขรหัส $5$ และช่องที่เป็น $d$ คือ $0,1,2,13,14,15$

$c = \prod M(5) \cdot d(0,1,2,13,14,15)$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="296" height="280" viewBox="0 0 296 280" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.6" fill="none">
<rect x="66" y="52" width="216" height="216"/>
<line x1="120" y1="52" x2="120" y2="268"/>
<line x1="66" y1="106" x2="282" y2="106"/>
<line x1="174" y1="52" x2="174" y2="268"/>
<line x1="66" y1="160" x2="282" y2="160"/>
<line x1="228" y1="52" x2="228" y2="268"/>
<line x1="66" y1="214" x2="282" y2="214"/>
<line x1="8" y1="8" x2="66" y2="52"/>
</g>
<text x="93" y="37" text-anchor="middle">00</text>
<text x="147" y="37" text-anchor="middle">01</text>
<text x="201" y="37" text-anchor="middle">11</text>
<text x="255" y="37" text-anchor="middle">10</text>
<text x="57" y="85" text-anchor="end">00</text>
<text x="57" y="139" text-anchor="end">01</text>
<text x="57" y="193" text-anchor="end">11</text>
<text x="57" y="247" text-anchor="end">10</text>
<text x="60" y="18" text-anchor="end">AB</text><text x="10" y="40">CD</text>
<text x="115" y="65" text-anchor="end" font-size="11" fill-opacity="0.65">0</text>
<text x="93" y="87" text-anchor="middle" font-size="22">d</text>
<text x="169" y="65" text-anchor="end" font-size="11" fill-opacity="0.65">4</text>
<text x="223" y="65" text-anchor="end" font-size="11" fill-opacity="0.65">12</text>
<text x="277" y="65" text-anchor="end" font-size="11" fill-opacity="0.65">8</text>
<text x="115" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">1</text>
<text x="93" y="141" text-anchor="middle" font-size="22">d</text>
<text x="169" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">5</text>
<text x="147" y="141" text-anchor="middle" font-size="22">0</text>
<text x="223" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">13</text>
<text x="201" y="141" text-anchor="middle" font-size="22">d</text>
<text x="277" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">9</text>
<text x="115" y="173" text-anchor="end" font-size="11" fill-opacity="0.65">3</text>
<text x="169" y="173" text-anchor="end" font-size="11" fill-opacity="0.65">7</text>
<text x="223" y="173" text-anchor="end" font-size="11" fill-opacity="0.65">15</text>
<text x="201" y="195" text-anchor="middle" font-size="22">d</text>
<text x="277" y="173" text-anchor="end" font-size="11" fill-opacity="0.65">11</text>
<text x="115" y="227" text-anchor="end" font-size="11" fill-opacity="0.65">2</text>
<text x="93" y="249" text-anchor="middle" font-size="22">d</text>
<text x="169" y="227" text-anchor="end" font-size="11" fill-opacity="0.65">6</text>
<text x="223" y="227" text-anchor="end" font-size="11" fill-opacity="0.65">14</text>
<text x="201" y="249" text-anchor="middle" font-size="22">d</text>
<text x="277" y="227" text-anchor="end" font-size="11" fill-opacity="0.65">10</text>
<path d="M133.5,110.5 L214.5,110.5 M223.5,119.5 L223.5,146.5 M214.5,155.5 L133.5,155.5 M124.5,146.5 L124.5,119.5 M124.5,119.5 A9,9 0 0 1 133.5,110.5 M214.5,110.5 A9,9 0 0 1 223.5,119.5 M223.5,146.5 A9,9 0 0 1 214.5,155.5 M133.5,155.5 A9,9 0 0 1 124.5,146.5" stroke="#e8743b" stroke-width="2.6" fill="none"/>
<text x="123" y="121" font-size="14" fill="#e8743b" font-weight="bold">1</text>
</svg>
</div>

- ลูปสีส้ม (ช่อง $5,13$) : $B=1,\ C=0,\ D=1 \Rightarrow (\overline{B}+C+\overline{D})$

$\mathbf{Ans}\quad c = (\overline{B}+C+\overline{D})$

### หาสมการของ segment d (Excess-3, Maxterm) {code=xs3; method=orand,nor; digit=0,2,3,5,6,8,9}

$\mathbf{Sol}^{n}$

จากตารางความจริง ช่องที่ $d = 0$ คือ เลขรหัส $4,7,10$ และช่องที่เป็น $d$ คือ $0,1,2,13,14,15$

$d = \prod M(4,7,10) \cdot d(0,1,2,13,14,15)$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="296" height="280" viewBox="0 0 296 280" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.6" fill="none">
<rect x="66" y="52" width="216" height="216"/>
<line x1="120" y1="52" x2="120" y2="268"/>
<line x1="66" y1="106" x2="282" y2="106"/>
<line x1="174" y1="52" x2="174" y2="268"/>
<line x1="66" y1="160" x2="282" y2="160"/>
<line x1="228" y1="52" x2="228" y2="268"/>
<line x1="66" y1="214" x2="282" y2="214"/>
<line x1="8" y1="8" x2="66" y2="52"/>
</g>
<text x="93" y="37" text-anchor="middle">00</text>
<text x="147" y="37" text-anchor="middle">01</text>
<text x="201" y="37" text-anchor="middle">11</text>
<text x="255" y="37" text-anchor="middle">10</text>
<text x="57" y="85" text-anchor="end">00</text>
<text x="57" y="139" text-anchor="end">01</text>
<text x="57" y="193" text-anchor="end">11</text>
<text x="57" y="247" text-anchor="end">10</text>
<text x="60" y="18" text-anchor="end">AB</text><text x="10" y="40">CD</text>
<text x="115" y="65" text-anchor="end" font-size="11" fill-opacity="0.65">0</text>
<text x="93" y="87" text-anchor="middle" font-size="22">d</text>
<text x="169" y="65" text-anchor="end" font-size="11" fill-opacity="0.65">4</text>
<text x="147" y="87" text-anchor="middle" font-size="22">0</text>
<text x="223" y="65" text-anchor="end" font-size="11" fill-opacity="0.65">12</text>
<text x="277" y="65" text-anchor="end" font-size="11" fill-opacity="0.65">8</text>
<text x="115" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">1</text>
<text x="93" y="141" text-anchor="middle" font-size="22">d</text>
<text x="169" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">5</text>
<text x="223" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">13</text>
<text x="201" y="141" text-anchor="middle" font-size="22">d</text>
<text x="277" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">9</text>
<text x="115" y="173" text-anchor="end" font-size="11" fill-opacity="0.65">3</text>
<text x="169" y="173" text-anchor="end" font-size="11" fill-opacity="0.65">7</text>
<text x="147" y="195" text-anchor="middle" font-size="22">0</text>
<text x="223" y="173" text-anchor="end" font-size="11" fill-opacity="0.65">15</text>
<text x="201" y="195" text-anchor="middle" font-size="22">d</text>
<text x="277" y="173" text-anchor="end" font-size="11" fill-opacity="0.65">11</text>
<text x="115" y="227" text-anchor="end" font-size="11" fill-opacity="0.65">2</text>
<text x="93" y="249" text-anchor="middle" font-size="22">d</text>
<text x="169" y="227" text-anchor="end" font-size="11" fill-opacity="0.65">6</text>
<text x="223" y="227" text-anchor="end" font-size="11" fill-opacity="0.65">14</text>
<text x="201" y="249" text-anchor="middle" font-size="22">d</text>
<text x="277" y="227" text-anchor="end" font-size="11" fill-opacity="0.65">10</text>
<text x="255" y="249" text-anchor="middle" font-size="22">0</text>
<path d="M79.5,56.5 L160.5,56.5 M169.5,65.5 L169.5,92.5 M160.5,101.5 L79.5,101.5 M70.5,92.5 L70.5,65.5 M70.5,65.5 A9,9 0 0 1 79.5,56.5 M160.5,56.5 A9,9 0 0 1 169.5,65.5 M169.5,92.5 A9,9 0 0 1 160.5,101.5 M79.5,101.5 A9,9 0 0 1 70.5,92.5" stroke="#e8743b" stroke-width="2.6" fill="none"/>
<text x="69" y="67" font-size="14" fill="#e8743b" font-weight="bold">1</text>
<path d="M137,168 L211,168 M220,177 L220,197 M211,206 L137,206 M128,197 L128,177 M128,177 A9,9 0 0 1 137,168 M211,168 A9,9 0 0 1 220,177 M220,197 A9,9 0 0 1 211,206 M137,206 A9,9 0 0 1 128,197" stroke="#3b8be8" stroke-width="2.6" fill="none"/>
<text x="123" y="175" font-size="14" fill="#3b8be8" font-weight="bold">2</text>
<path d="M194.5,225.5 L261.5,225.5 M270.5,234.5 L270.5,247.5 M261.5,256.5 L194.5,256.5 M185.5,247.5 L185.5,234.5 M185.5,234.5 A9,9 0 0 1 194.5,225.5 M261.5,225.5 A9,9 0 0 1 270.5,234.5 M270.5,247.5 A9,9 0 0 1 261.5,256.5 M194.5,256.5 A9,9 0 0 1 185.5,247.5" stroke="#2fae5f" stroke-width="2.6" fill="none"/>
<text x="177" y="229" font-size="14" fill="#2fae5f" font-weight="bold">3</text>
</svg>
</div>

- ลูปสีส้ม (ช่อง $0,4$) : $A=0,\ C=0,\ D=0 \Rightarrow (A+C+D)$
- ลูปสีน้ำเงิน (ช่อง $7,15$) : $B=1,\ C=1,\ D=1 \Rightarrow (\overline{B}+\overline{C}+\overline{D})$
- ลูปสีเขียว (ช่อง $10,14$) : $A=1,\ C=1,\ D=0 \Rightarrow (\overline{A}+\overline{C}+D)$

$\mathbf{Ans}\quad d = (A+C+D)(\overline{B}+\overline{C}+\overline{D})(\overline{A}+\overline{C}+D)$

### หาสมการของ segment e (Excess-3, Maxterm) {code=xs3; method=orand,nor; digit=0,2,6,8}

$\mathbf{Sol}^{n}$

จากตารางความจริง ช่องที่ $e = 0$ คือ เลขรหัส $4,6,7,8,10,12$ และช่องที่เป็น $d$ คือ $0,1,2,13,14,15$

$e = \prod M(4,6,7,8,10,12) \cdot d(0,1,2,13,14,15)$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="296" height="280" viewBox="0 0 296 280" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.6" fill="none">
<rect x="66" y="52" width="216" height="216"/>
<line x1="120" y1="52" x2="120" y2="268"/>
<line x1="66" y1="106" x2="282" y2="106"/>
<line x1="174" y1="52" x2="174" y2="268"/>
<line x1="66" y1="160" x2="282" y2="160"/>
<line x1="228" y1="52" x2="228" y2="268"/>
<line x1="66" y1="214" x2="282" y2="214"/>
<line x1="8" y1="8" x2="66" y2="52"/>
</g>
<text x="93" y="37" text-anchor="middle">00</text>
<text x="147" y="37" text-anchor="middle">01</text>
<text x="201" y="37" text-anchor="middle">11</text>
<text x="255" y="37" text-anchor="middle">10</text>
<text x="57" y="85" text-anchor="end">00</text>
<text x="57" y="139" text-anchor="end">01</text>
<text x="57" y="193" text-anchor="end">11</text>
<text x="57" y="247" text-anchor="end">10</text>
<text x="60" y="18" text-anchor="end">AB</text><text x="10" y="40">CD</text>
<text x="115" y="65" text-anchor="end" font-size="11" fill-opacity="0.65">0</text>
<text x="93" y="87" text-anchor="middle" font-size="22">d</text>
<text x="169" y="65" text-anchor="end" font-size="11" fill-opacity="0.65">4</text>
<text x="147" y="87" text-anchor="middle" font-size="22">0</text>
<text x="223" y="65" text-anchor="end" font-size="11" fill-opacity="0.65">12</text>
<text x="201" y="87" text-anchor="middle" font-size="22">0</text>
<text x="277" y="65" text-anchor="end" font-size="11" fill-opacity="0.65">8</text>
<text x="255" y="87" text-anchor="middle" font-size="22">0</text>
<text x="115" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">1</text>
<text x="93" y="141" text-anchor="middle" font-size="22">d</text>
<text x="169" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">5</text>
<text x="223" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">13</text>
<text x="201" y="141" text-anchor="middle" font-size="22">d</text>
<text x="277" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">9</text>
<text x="115" y="173" text-anchor="end" font-size="11" fill-opacity="0.65">3</text>
<text x="169" y="173" text-anchor="end" font-size="11" fill-opacity="0.65">7</text>
<text x="147" y="195" text-anchor="middle" font-size="22">0</text>
<text x="223" y="173" text-anchor="end" font-size="11" fill-opacity="0.65">15</text>
<text x="201" y="195" text-anchor="middle" font-size="22">d</text>
<text x="277" y="173" text-anchor="end" font-size="11" fill-opacity="0.65">11</text>
<text x="115" y="227" text-anchor="end" font-size="11" fill-opacity="0.65">2</text>
<text x="93" y="249" text-anchor="middle" font-size="22">d</text>
<text x="169" y="227" text-anchor="end" font-size="11" fill-opacity="0.65">6</text>
<text x="147" y="249" text-anchor="middle" font-size="22">0</text>
<text x="223" y="227" text-anchor="end" font-size="11" fill-opacity="0.65">14</text>
<text x="201" y="249" text-anchor="middle" font-size="22">d</text>
<text x="277" y="227" text-anchor="end" font-size="11" fill-opacity="0.65">10</text>
<text x="255" y="249" text-anchor="middle" font-size="22">0</text>
<path d="M277.5,52 L277.5,92.5 M268.5,101.5 L79.5,101.5 M70.5,92.5 L70.5,52 M277.5,92.5 A9,9 0 0 1 268.5,101.5 M79.5,101.5 A9,9 0 0 1 70.5,92.5" stroke="#e8743b" stroke-width="2.6" fill="none"/>
<text x="69" y="67" font-size="14" fill="#e8743b" font-weight="bold">1</text>
<path d="M79.5,218.5 L268.5,218.5 M277.5,227.5 L277.5,268 M70.5,268 L70.5,227.5 M70.5,227.5 A9,9 0 0 1 79.5,218.5 M268.5,218.5 A9,9 0 0 1 277.5,227.5" stroke="#e8743b" stroke-width="2.6" fill="none"/>
<path d="M137,168 L211,168 M220,177 L220,251 M211,260 L137,260 M128,251 L128,177 M128,177 A9,9 0 0 1 137,168 M211,168 A9,9 0 0 1 220,177 M220,251 A9,9 0 0 1 211,260 M137,260 A9,9 0 0 1 128,251" stroke="#3b8be8" stroke-width="2.6" fill="none"/>
<text x="123" y="175" font-size="14" fill="#3b8be8" font-weight="bold">2</text>
</svg>
</div>

- ลูปสีส้ม (ช่อง $0,2,4,6,8,10,12,14$) : $D=0 \Rightarrow D$
- ลูปสีน้ำเงิน (ช่อง $6,7,14,15$) : $B=1,\ C=1 \Rightarrow (\overline{B}+\overline{C})$

$\mathbf{Ans}\quad e = (D)(\overline{B}+\overline{C})$

### หาสมการของ segment f (Excess-3, Maxterm) {code=xs3; method=orand,nor; digit=0,4,5,6,8,9}

$\mathbf{Sol}^{n}$

จากตารางความจริง ช่องที่ $f = 0$ คือ เลขรหัส $4,5,6,10$ และช่องที่เป็น $d$ คือ $0,1,2,13,14,15$

$f = \prod M(4,5,6,10) \cdot d(0,1,2,13,14,15)$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="296" height="280" viewBox="0 0 296 280" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.6" fill="none">
<rect x="66" y="52" width="216" height="216"/>
<line x1="120" y1="52" x2="120" y2="268"/>
<line x1="66" y1="106" x2="282" y2="106"/>
<line x1="174" y1="52" x2="174" y2="268"/>
<line x1="66" y1="160" x2="282" y2="160"/>
<line x1="228" y1="52" x2="228" y2="268"/>
<line x1="66" y1="214" x2="282" y2="214"/>
<line x1="8" y1="8" x2="66" y2="52"/>
</g>
<text x="93" y="37" text-anchor="middle">00</text>
<text x="147" y="37" text-anchor="middle">01</text>
<text x="201" y="37" text-anchor="middle">11</text>
<text x="255" y="37" text-anchor="middle">10</text>
<text x="57" y="85" text-anchor="end">00</text>
<text x="57" y="139" text-anchor="end">01</text>
<text x="57" y="193" text-anchor="end">11</text>
<text x="57" y="247" text-anchor="end">10</text>
<text x="60" y="18" text-anchor="end">AB</text><text x="10" y="40">CD</text>
<text x="115" y="65" text-anchor="end" font-size="11" fill-opacity="0.65">0</text>
<text x="93" y="87" text-anchor="middle" font-size="22">d</text>
<text x="169" y="65" text-anchor="end" font-size="11" fill-opacity="0.65">4</text>
<text x="147" y="87" text-anchor="middle" font-size="22">0</text>
<text x="223" y="65" text-anchor="end" font-size="11" fill-opacity="0.65">12</text>
<text x="277" y="65" text-anchor="end" font-size="11" fill-opacity="0.65">8</text>
<text x="115" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">1</text>
<text x="93" y="141" text-anchor="middle" font-size="22">d</text>
<text x="169" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">5</text>
<text x="147" y="141" text-anchor="middle" font-size="22">0</text>
<text x="223" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">13</text>
<text x="201" y="141" text-anchor="middle" font-size="22">d</text>
<text x="277" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">9</text>
<text x="115" y="173" text-anchor="end" font-size="11" fill-opacity="0.65">3</text>
<text x="169" y="173" text-anchor="end" font-size="11" fill-opacity="0.65">7</text>
<text x="223" y="173" text-anchor="end" font-size="11" fill-opacity="0.65">15</text>
<text x="201" y="195" text-anchor="middle" font-size="22">d</text>
<text x="277" y="173" text-anchor="end" font-size="11" fill-opacity="0.65">11</text>
<text x="115" y="227" text-anchor="end" font-size="11" fill-opacity="0.65">2</text>
<text x="93" y="249" text-anchor="middle" font-size="22">d</text>
<text x="169" y="227" text-anchor="end" font-size="11" fill-opacity="0.65">6</text>
<text x="147" y="249" text-anchor="middle" font-size="22">0</text>
<text x="223" y="227" text-anchor="end" font-size="11" fill-opacity="0.65">14</text>
<text x="201" y="249" text-anchor="middle" font-size="22">d</text>
<text x="277" y="227" text-anchor="end" font-size="11" fill-opacity="0.65">10</text>
<text x="255" y="249" text-anchor="middle" font-size="22">0</text>
<path d="M79.5,56.5 L160.5,56.5 M169.5,65.5 L169.5,146.5 M160.5,155.5 L79.5,155.5 M70.5,146.5 L70.5,65.5 M70.5,65.5 A9,9 0 0 1 79.5,56.5 M160.5,56.5 A9,9 0 0 1 169.5,65.5 M169.5,146.5 A9,9 0 0 1 160.5,155.5 M79.5,155.5 A9,9 0 0 1 70.5,146.5" stroke="#e8743b" stroke-width="2.6" fill="none"/>
<text x="69" y="67" font-size="14" fill="#e8743b" font-weight="bold">1</text>
<path d="M83,222 L265,222 M274,231 L274,251 M265,260 L83,260 M74,251 L74,231 M74,231 A9,9 0 0 1 83,222 M265,222 A9,9 0 0 1 274,231 M274,251 A9,9 0 0 1 265,260 M83,260 A9,9 0 0 1 74,251" stroke="#3b8be8" stroke-width="2.6" fill="none"/>
<text x="69" y="229" font-size="14" fill="#3b8be8" font-weight="bold">2</text>
</svg>
</div>

- ลูปสีส้ม (ช่อง $0,1,4,5$) : $A=0,\ C=0 \Rightarrow (A+C)$
- ลูปสีน้ำเงิน (ช่อง $2,6,10,14$) : $C=1,\ D=0 \Rightarrow (\overline{C}+D)$

$\mathbf{Ans}\quad f = (A+C)(\overline{C}+D)$

### หาสมการของ segment g (Excess-3, Maxterm) {code=xs3; method=orand,nor; digit=2,3,4,5,6,8,9}

$\mathbf{Sol}^{n}$

จากตารางความจริง ช่องที่ $g = 0$ คือ เลขรหัส $3,4,10$ และช่องที่เป็น $d$ คือ $0,1,2,13,14,15$

$g = \prod M(3,4,10) \cdot d(0,1,2,13,14,15)$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="296" height="280" viewBox="0 0 296 280" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.6" fill="none">
<rect x="66" y="52" width="216" height="216"/>
<line x1="120" y1="52" x2="120" y2="268"/>
<line x1="66" y1="106" x2="282" y2="106"/>
<line x1="174" y1="52" x2="174" y2="268"/>
<line x1="66" y1="160" x2="282" y2="160"/>
<line x1="228" y1="52" x2="228" y2="268"/>
<line x1="66" y1="214" x2="282" y2="214"/>
<line x1="8" y1="8" x2="66" y2="52"/>
</g>
<text x="93" y="37" text-anchor="middle">00</text>
<text x="147" y="37" text-anchor="middle">01</text>
<text x="201" y="37" text-anchor="middle">11</text>
<text x="255" y="37" text-anchor="middle">10</text>
<text x="57" y="85" text-anchor="end">00</text>
<text x="57" y="139" text-anchor="end">01</text>
<text x="57" y="193" text-anchor="end">11</text>
<text x="57" y="247" text-anchor="end">10</text>
<text x="60" y="18" text-anchor="end">AB</text><text x="10" y="40">CD</text>
<text x="115" y="65" text-anchor="end" font-size="11" fill-opacity="0.65">0</text>
<text x="93" y="87" text-anchor="middle" font-size="22">d</text>
<text x="169" y="65" text-anchor="end" font-size="11" fill-opacity="0.65">4</text>
<text x="147" y="87" text-anchor="middle" font-size="22">0</text>
<text x="223" y="65" text-anchor="end" font-size="11" fill-opacity="0.65">12</text>
<text x="277" y="65" text-anchor="end" font-size="11" fill-opacity="0.65">8</text>
<text x="115" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">1</text>
<text x="93" y="141" text-anchor="middle" font-size="22">d</text>
<text x="169" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">5</text>
<text x="223" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">13</text>
<text x="201" y="141" text-anchor="middle" font-size="22">d</text>
<text x="277" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">9</text>
<text x="115" y="173" text-anchor="end" font-size="11" fill-opacity="0.65">3</text>
<text x="93" y="195" text-anchor="middle" font-size="22">0</text>
<text x="169" y="173" text-anchor="end" font-size="11" fill-opacity="0.65">7</text>
<text x="223" y="173" text-anchor="end" font-size="11" fill-opacity="0.65">15</text>
<text x="201" y="195" text-anchor="middle" font-size="22">d</text>
<text x="277" y="173" text-anchor="end" font-size="11" fill-opacity="0.65">11</text>
<text x="115" y="227" text-anchor="end" font-size="11" fill-opacity="0.65">2</text>
<text x="93" y="249" text-anchor="middle" font-size="22">d</text>
<text x="169" y="227" text-anchor="end" font-size="11" fill-opacity="0.65">6</text>
<text x="223" y="227" text-anchor="end" font-size="11" fill-opacity="0.65">14</text>
<text x="201" y="249" text-anchor="middle" font-size="22">d</text>
<text x="277" y="227" text-anchor="end" font-size="11" fill-opacity="0.65">10</text>
<text x="255" y="249" text-anchor="middle" font-size="22">0</text>
<path d="M79.5,56.5 L106.5,56.5 M115.5,65.5 L115.5,254.5 M106.5,263.5 L79.5,263.5 M70.5,254.5 L70.5,65.5 M70.5,65.5 A9,9 0 0 1 79.5,56.5 M106.5,56.5 A9,9 0 0 1 115.5,65.5 M115.5,254.5 A9,9 0 0 1 106.5,263.5 M79.5,263.5 A9,9 0 0 1 70.5,254.5" stroke="#e8743b" stroke-width="2.6" fill="none"/>
<text x="69" y="67" font-size="14" fill="#e8743b" font-weight="bold">1</text>
<path d="M83,60 L157,60 M166,69 L166,89 M157,98 L83,98 M74,89 L74,69 M74,69 A9,9 0 0 1 83,60 M157,60 A9,9 0 0 1 166,69 M166,89 A9,9 0 0 1 157,98 M83,98 A9,9 0 0 1 74,89" stroke="#3b8be8" stroke-width="2.6" fill="none"/>
<text x="79" y="67" font-size="14" fill="#3b8be8" font-weight="bold">2</text>
<path d="M194.5,225.5 L261.5,225.5 M270.5,234.5 L270.5,247.5 M261.5,256.5 L194.5,256.5 M185.5,247.5 L185.5,234.5 M185.5,234.5 A9,9 0 0 1 194.5,225.5 M261.5,225.5 A9,9 0 0 1 270.5,234.5 M270.5,247.5 A9,9 0 0 1 261.5,256.5 M194.5,256.5 A9,9 0 0 1 185.5,247.5" stroke="#2fae5f" stroke-width="2.6" fill="none"/>
<text x="177" y="229" font-size="14" fill="#2fae5f" font-weight="bold">3</text>
</svg>
</div>

- ลูปสีส้ม (ช่อง $0,1,2,3$) : $A=0,\ B=0 \Rightarrow (A+B)$
- ลูปสีน้ำเงิน (ช่อง $0,4$) : $A=0,\ C=0,\ D=0 \Rightarrow (A+C+D)$
- ลูปสีเขียว (ช่อง $10,14$) : $A=1,\ C=1,\ D=0 \Rightarrow (\overline{A}+\overline{C}+D)$

$\mathbf{Ans}\quad g = (A+B)(A+C+D)(\overline{A}+\overline{C}+D)$

### แปลงสมการ segment a เป็น NAND อย่างเดียว (Excess-3) {code=xs3; method=nand; digit=0,2,3,5,6,7,8,9}

$\mathbf{Sol}^{n}$

จากสมการผลบวกของผลคูณ ของ K-map แปลงให้ใช้ NAND อย่างเดียว ด้วยการคอมพลีเมนต์ 2 ครั้ง แล้วใช้ De Morgan

$$\begin{aligned}
a &= \overline{B}+\overline{C}D+C\overline{D}+A \\
&= \overline{\overline{\overline{B}+\overline{C}D+C\overline{D}+A}} && \text{(คอมพลีเมนต์ 2 ครั้ง)} \\
&= \overline{B\cdot \overline{\overline{C}D}\cdot \overline{C\overline{D}}\cdot \overline{A}} && \text{(De Morgan)}
\end{aligned}$$

พจน์ที่มีตัวแปรตัวเดียว (ไม่มีเกตชั้นใน) ต่อตัวแปรที่คอมพลีเมนต์เข้าเกตชั้นนอกได้เลย

$\mathbf{Ans}\quad \begin{aligned}a &= \overline{B\cdot \overline{\overline{C}D}\cdot \overline{C\overline{D}}\cdot \overline{A}}\end{aligned}$

### แปลงสมการ segment b เป็น NAND อย่างเดียว (Excess-3) {code=xs3; method=nand; digit=0,1,2,3,4,7,8,9}

$\mathbf{Sol}^{n}$

จากสมการผลบวกของผลคูณ ของ K-map แปลงให้ใช้ NAND อย่างเดียว ด้วยการคอมพลีเมนต์ 2 ครั้ง แล้วใช้ De Morgan

$$\begin{aligned}
b &= C+B \\
&= \overline{\overline{C+B}} && \text{(คอมพลีเมนต์ 2 ครั้ง)} \\
&= \overline{\overline{C}\cdot \overline{B}} && \text{(De Morgan)}
\end{aligned}$$

พจน์ที่มีตัวแปรตัวเดียว (ไม่มีเกตชั้นใน) ต่อตัวแปรที่คอมพลีเมนต์เข้าเกตชั้นนอกได้เลย

$\mathbf{Ans}\quad \begin{aligned}b &= \overline{\overline{C}\cdot \overline{B}}\end{aligned}$

### แปลงสมการ segment c เป็น NAND อย่างเดียว (Excess-3) {code=xs3; method=nand; digit=0,1,3,4,5,6,7,8,9}

$\mathbf{Sol}^{n}$

จากสมการผลบวกของผลคูณ ของ K-map แปลงให้ใช้ NAND อย่างเดียว ด้วยการคอมพลีเมนต์ 2 ครั้ง แล้วใช้ De Morgan

$$\begin{aligned}
c &= \overline{B}+\overline{D}+C \\
&= \overline{\overline{\overline{B}+\overline{D}+C}} && \text{(คอมพลีเมนต์ 2 ครั้ง)} \\
&= \overline{B\cdot D\cdot \overline{C}} && \text{(De Morgan)}
\end{aligned}$$

พจน์ที่มีตัวแปรตัวเดียว (ไม่มีเกตชั้นใน) ต่อตัวแปรที่คอมพลีเมนต์เข้าเกตชั้นนอกได้เลย

$\mathbf{Ans}\quad \begin{aligned}c &= \overline{B\cdot D\cdot \overline{C}}\end{aligned}$

### แปลงสมการ segment d เป็น NAND อย่างเดียว (Excess-3) {code=xs3; method=nand; digit=0,2,3,5,6,8,9}

$\mathbf{Sol}^{n}$

จากสมการผลบวกของผลคูณ ของ K-map แปลงให้ใช้ NAND อย่างเดียว ด้วยการคอมพลีเมนต์ 2 ครั้ง แล้วใช้ De Morgan

$$\begin{aligned}
d &= \overline{B}D+\overline{C}D+\overline{A}C\overline{D}+A\overline{C} \\
&= \overline{\overline{\overline{B}D+\overline{C}D+\overline{A}C\overline{D}+A\overline{C}}} && \text{(คอมพลีเมนต์ 2 ครั้ง)} \\
&= \overline{\overline{\overline{B}D}\cdot \overline{\overline{C}D}\cdot \overline{\overline{A}C\overline{D}}\cdot \overline{A\overline{C}}} && \text{(De Morgan)}
\end{aligned}$$

พจน์ที่มีตัวแปรตัวเดียว (ไม่มีเกตชั้นใน) ต่อตัวแปรที่คอมพลีเมนต์เข้าเกตชั้นนอกได้เลย

$\mathbf{Ans}\quad \begin{aligned}d &= \overline{\overline{\overline{B}D}\cdot \overline{\overline{C}D}\cdot \overline{\overline{A}C\overline{D}}\cdot \overline{A\overline{C}}}\end{aligned}$

### แปลงสมการ segment e เป็น NAND อย่างเดียว (Excess-3) {code=xs3; method=nand; digit=0,2,6,8}

$\mathbf{Sol}^{n}$

จากสมการผลบวกของผลคูณ ของ K-map แปลงให้ใช้ NAND อย่างเดียว ด้วยการคอมพลีเมนต์ 2 ครั้ง แล้วใช้ De Morgan

$$\begin{aligned}
e &= \overline{B}D+\overline{C}D \\
&= \overline{\overline{\overline{B}D+\overline{C}D}} && \text{(คอมพลีเมนต์ 2 ครั้ง)} \\
&= \overline{\overline{\overline{B}D}\cdot \overline{\overline{C}D}} && \text{(De Morgan)}
\end{aligned}$$

พจน์ที่มีตัวแปรตัวเดียว (ไม่มีเกตชั้นใน) ต่อตัวแปรที่คอมพลีเมนต์เข้าเกตชั้นนอกได้เลย

$\mathbf{Ans}\quad \begin{aligned}e &= \overline{\overline{\overline{B}D}\cdot \overline{\overline{C}D}}\end{aligned}$

### แปลงสมการ segment f เป็น NAND อย่างเดียว (Excess-3) {code=xs3; method=nand; digit=0,4,5,6,8,9}

$\mathbf{Sol}^{n}$

จากสมการผลบวกของผลคูณ ของ K-map แปลงให้ใช้ NAND อย่างเดียว ด้วยการคอมพลีเมนต์ 2 ครั้ง แล้วใช้ De Morgan

$$\begin{aligned}
f &= CD+A\overline{C} \\
&= \overline{\overline{CD+A\overline{C}}} && \text{(คอมพลีเมนต์ 2 ครั้ง)} \\
&= \overline{\overline{CD}\cdot \overline{A\overline{C}}} && \text{(De Morgan)}
\end{aligned}$$

พจน์ที่มีตัวแปรตัวเดียว (ไม่มีเกตชั้นใน) ต่อตัวแปรที่คอมพลีเมนต์เข้าเกตชั้นนอกได้เลย

$\mathbf{Ans}\quad \begin{aligned}f &= \overline{\overline{CD}\cdot \overline{A\overline{C}}}\end{aligned}$

### แปลงสมการ segment g เป็น NAND อย่างเดียว (Excess-3) {code=xs3; method=nand; digit=2,3,4,5,6,8,9}

$\mathbf{Sol}^{n}$

จากสมการผลบวกของผลคูณ ของ K-map แปลงให้ใช้ NAND อย่างเดียว ด้วยการคอมพลีเมนต์ 2 ครั้ง แล้วใช้ De Morgan

$$\begin{aligned}
g &= \overline{C}D+BC+A\overline{C}+AD \\
&= \overline{\overline{\overline{C}D+BC+A\overline{C}+AD}} && \text{(คอมพลีเมนต์ 2 ครั้ง)} \\
&= \overline{\overline{\overline{C}D}\cdot \overline{BC}\cdot \overline{A\overline{C}}\cdot \overline{AD}} && \text{(De Morgan)}
\end{aligned}$$

พจน์ที่มีตัวแปรตัวเดียว (ไม่มีเกตชั้นใน) ต่อตัวแปรที่คอมพลีเมนต์เข้าเกตชั้นนอกได้เลย

$\mathbf{Ans}\quad \begin{aligned}g &= \overline{\overline{\overline{C}D}\cdot \overline{BC}\cdot \overline{A\overline{C}}\cdot \overline{AD}}\end{aligned}$

### แปลงสมการ segment a เป็น NOR อย่างเดียว (Excess-3) {code=xs3; method=nor; digit=0,2,3,5,6,7,8,9}

$\mathbf{Sol}^{n}$

จากสมการผลคูณของผลบวก ของ K-map แปลงให้ใช้ NOR อย่างเดียว ด้วยการคอมพลีเมนต์ 2 ครั้ง แล้วใช้ De Morgan

$$\begin{aligned}
a &= (A+C+D)(\overline{B}+\overline{C}+\overline{D}) \\
&= \overline{\overline{(A+C+D)(\overline{B}+\overline{C}+\overline{D})}} && \text{(คอมพลีเมนต์ 2 ครั้ง)} \\
&= \overline{\overline{A+C+D}+\overline{\overline{B}+\overline{C}+\overline{D}}} && \text{(De Morgan)}
\end{aligned}$$

พจน์ที่มีตัวแปรตัวเดียวต่อตัวแปรที่คอมพลีเมนต์เข้าเกตชั้นนอกได้เลย และสมการที่มีพจน์เดียวใช้ NOR เกตตัวเดียวแล้วต่อ NOT อีกชั้น

$\mathbf{Ans}\quad \begin{aligned}a &= \overline{\overline{A+C+D}+\overline{\overline{B}+\overline{C}+\overline{D}}}\end{aligned}$

### แปลงสมการ segment b เป็น NOR อย่างเดียว (Excess-3) {code=xs3; method=nor; digit=0,1,2,3,4,7,8,9}

$\mathbf{Sol}^{n}$

จากสมการผลคูณของผลบวก ของ K-map แปลงให้ใช้ NOR อย่างเดียว ด้วยการคอมพลีเมนต์ 2 ครั้ง แล้วใช้ De Morgan

$$\begin{aligned}
b &= (B+C) \\
&= \overline{\overline{B+C}} && \text{(คอมพลีเมนต์ 2 ครั้ง: NOR แล้วต่อ NOT)}
\end{aligned}$$

พจน์ที่มีตัวแปรตัวเดียวต่อตัวแปรที่คอมพลีเมนต์เข้าเกตชั้นนอกได้เลย และสมการที่มีพจน์เดียวใช้ NOR เกตตัวเดียวแล้วต่อ NOT อีกชั้น

$\mathbf{Ans}\quad \begin{aligned}b &= \overline{\overline{B+C}}\end{aligned}$

### แปลงสมการ segment c เป็น NOR อย่างเดียว (Excess-3) {code=xs3; method=nor; digit=0,1,3,4,5,6,7,8,9}

$\mathbf{Sol}^{n}$

จากสมการผลคูณของผลบวก ของ K-map แปลงให้ใช้ NOR อย่างเดียว ด้วยการคอมพลีเมนต์ 2 ครั้ง แล้วใช้ De Morgan

$$\begin{aligned}
c &= (\overline{B}+C+\overline{D}) \\
&= \overline{\overline{\overline{B}+C+\overline{D}}} && \text{(คอมพลีเมนต์ 2 ครั้ง: NOR แล้วต่อ NOT)}
\end{aligned}$$

พจน์ที่มีตัวแปรตัวเดียวต่อตัวแปรที่คอมพลีเมนต์เข้าเกตชั้นนอกได้เลย และสมการที่มีพจน์เดียวใช้ NOR เกตตัวเดียวแล้วต่อ NOT อีกชั้น

$\mathbf{Ans}\quad \begin{aligned}c &= \overline{\overline{\overline{B}+C+\overline{D}}}\end{aligned}$

### แปลงสมการ segment d เป็น NOR อย่างเดียว (Excess-3) {code=xs3; method=nor; digit=0,2,3,5,6,8,9}

$\mathbf{Sol}^{n}$

จากสมการผลคูณของผลบวก ของ K-map แปลงให้ใช้ NOR อย่างเดียว ด้วยการคอมพลีเมนต์ 2 ครั้ง แล้วใช้ De Morgan

$$\begin{aligned}
d &= (A+C+D)(\overline{B}+\overline{C}+\overline{D})(\overline{A}+\overline{C}+D) \\
&= \overline{\overline{(A+C+D)(\overline{B}+\overline{C}+\overline{D})(\overline{A}+\overline{C}+D)}} && \text{(คอมพลีเมนต์ 2 ครั้ง)} \\
&= \overline{\overline{A+C+D}+\overline{\overline{B}+\overline{C}+\overline{D}}+\overline{\overline{A}+\overline{C}+D}} && \text{(De Morgan)}
\end{aligned}$$

พจน์ที่มีตัวแปรตัวเดียวต่อตัวแปรที่คอมพลีเมนต์เข้าเกตชั้นนอกได้เลย และสมการที่มีพจน์เดียวใช้ NOR เกตตัวเดียวแล้วต่อ NOT อีกชั้น

$\mathbf{Ans}\quad \begin{aligned}d &= \overline{\overline{A+C+D}+\overline{\overline{B}+\overline{C}+\overline{D}}+\overline{\overline{A}+\overline{C}+D}}\end{aligned}$

### แปลงสมการ segment e เป็น NOR อย่างเดียว (Excess-3) {code=xs3; method=nor; digit=0,2,6,8}

$\mathbf{Sol}^{n}$

จากสมการผลคูณของผลบวก ของ K-map แปลงให้ใช้ NOR อย่างเดียว ด้วยการคอมพลีเมนต์ 2 ครั้ง แล้วใช้ De Morgan

$$\begin{aligned}
e &= (D)(\overline{B}+\overline{C}) \\
&= \overline{\overline{(D)(\overline{B}+\overline{C})}} && \text{(คอมพลีเมนต์ 2 ครั้ง)} \\
&= \overline{\overline{D}+\overline{\overline{B}+\overline{C}}} && \text{(De Morgan)}
\end{aligned}$$

พจน์ที่มีตัวแปรตัวเดียวต่อตัวแปรที่คอมพลีเมนต์เข้าเกตชั้นนอกได้เลย และสมการที่มีพจน์เดียวใช้ NOR เกตตัวเดียวแล้วต่อ NOT อีกชั้น

$\mathbf{Ans}\quad \begin{aligned}e &= \overline{\overline{D}+\overline{\overline{B}+\overline{C}}}\end{aligned}$

### แปลงสมการ segment f เป็น NOR อย่างเดียว (Excess-3) {code=xs3; method=nor; digit=0,4,5,6,8,9}

$\mathbf{Sol}^{n}$

จากสมการผลคูณของผลบวก ของ K-map แปลงให้ใช้ NOR อย่างเดียว ด้วยการคอมพลีเมนต์ 2 ครั้ง แล้วใช้ De Morgan

$$\begin{aligned}
f &= (A+C)(\overline{C}+D) \\
&= \overline{\overline{(A+C)(\overline{C}+D)}} && \text{(คอมพลีเมนต์ 2 ครั้ง)} \\
&= \overline{\overline{A+C}+\overline{\overline{C}+D}} && \text{(De Morgan)}
\end{aligned}$$

พจน์ที่มีตัวแปรตัวเดียวต่อตัวแปรที่คอมพลีเมนต์เข้าเกตชั้นนอกได้เลย และสมการที่มีพจน์เดียวใช้ NOR เกตตัวเดียวแล้วต่อ NOT อีกชั้น

$\mathbf{Ans}\quad \begin{aligned}f &= \overline{\overline{A+C}+\overline{\overline{C}+D}}\end{aligned}$

### แปลงสมการ segment g เป็น NOR อย่างเดียว (Excess-3) {code=xs3; method=nor; digit=2,3,4,5,6,8,9}

$\mathbf{Sol}^{n}$

จากสมการผลคูณของผลบวก ของ K-map แปลงให้ใช้ NOR อย่างเดียว ด้วยการคอมพลีเมนต์ 2 ครั้ง แล้วใช้ De Morgan

$$\begin{aligned}
g &= (A+B)(A+C+D)(\overline{A}+\overline{C}+D) \\
&= \overline{\overline{(A+B)(A+C+D)(\overline{A}+\overline{C}+D)}} && \text{(คอมพลีเมนต์ 2 ครั้ง)} \\
&= \overline{\overline{A+B}+\overline{A+C+D}+\overline{\overline{A}+\overline{C}+D}} && \text{(De Morgan)}
\end{aligned}$$

พจน์ที่มีตัวแปรตัวเดียวต่อตัวแปรที่คอมพลีเมนต์เข้าเกตชั้นนอกได้เลย และสมการที่มีพจน์เดียวใช้ NOR เกตตัวเดียวแล้วต่อ NOT อีกชั้น

$\mathbf{Ans}\quad \begin{aligned}g &= \overline{\overline{A+B}+\overline{A+C+D}+\overline{\overline{A}+\overline{C}+D}}\end{aligned}$

### วงจรของเลข 0 (Excess-3, AND/OR) {code=xs3; method=andor; digit=0}

$\mathbf{Sol}^{n}$

เลข $0$ ใช้ segment $a, b, c, d, e, f$ จึงเขียนวงจรเฉพาะ segment เหล่านี้ ต่อเข้าด้วยกันเป็นวงจรเดียว : ต้องมีทั้งตัวปกติและตัวคอมพลีเมนต์ของอินพุต จึงใช้เกต NOT ต่อจากอินพุต แต่ละพจน์ผลคูณใช้ AND เกต แล้วนำทุกพจน์เข้า OR เกต (พจน์ที่มีตัวแปรตัวเดียวต่อเข้า OR เกตได้เลย)

$\mathbf{Ans}\quad \begin{aligned}a &= \overline{B}+\overline{C}D+C\overline{D}+A \\ b &= C+B \\ c &= \overline{B}+\overline{D}+C \\ d &= \overline{B}D+\overline{C}D+\overline{A}C\overline{D}+A\overline{C} \\ e &= \overline{B}D+\overline{C}D \\ f &= CD+A\overline{C}\end{aligned}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="638" height="884" viewBox="0 0 638 884" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<line x1="82" y1="52" x2="82" y2="524"/>
<line x1="34" y1="28" x2="34" y2="830"/>
<line x1="160" y1="52" x2="160" y2="658"/>
<line x1="112" y1="28" x2="112" y2="283"/>
<line x1="238" y1="52" x2="238" y2="844"/>
<line x1="190" y1="28" x2="190" y2="778"/>
<line x1="316" y1="52" x2="316" y2="552"/>
<line x1="268" y1="28" x2="268" y2="792"/>
<line x1="160" y1="89" x2="484" y2="89"/>
<line x1="484" y1="89" x2="484" y2="132"/>
<line x1="484" y1="132" x2="498.5" y2="132"/>
<line x1="238" y1="120" x2="376" y2="120"/>
<line x1="268" y1="134" x2="376" y2="134"/>
<line x1="428" y1="127" x2="464" y2="127"/>
<line x1="464" y1="127" x2="464" y2="146"/>
<line x1="464" y1="146" x2="500.7" y2="146"/>
<line x1="190" y1="172" x2="376" y2="172"/>
<line x1="316" y1="186" x2="376" y2="186"/>
<line x1="428" y1="179" x2="454" y2="179"/>
<line x1="454" y1="179" x2="454" y2="160"/>
<line x1="454" y1="160" x2="500.7" y2="160"/>
<line x1="34" y1="217" x2="474" y2="217"/>
<line x1="474" y1="217" x2="474" y2="174"/>
<line x1="474" y1="174" x2="498.5" y2="174"/>
<line x1="554" y1="153" x2="584" y2="153"/>
<line x1="190" y1="259" x2="464" y2="259"/>
<line x1="464" y1="259" x2="464" y2="264"/>
<line x1="464" y1="264" x2="480.2" y2="264"/>
<line x1="112" y1="283" x2="454" y2="283"/>
<line x1="454" y1="283" x2="454" y2="278"/>
<line x1="454" y1="278" x2="480.2" y2="278"/>
<line x1="534" y1="271" x2="564" y2="271"/>
<line x1="160" y1="325" x2="474" y2="325"/>
<line x1="474" y1="325" x2="474" y2="335"/>
<line x1="474" y1="335" x2="489.2" y2="335"/>
<line x1="316" y1="349" x2="491" y2="349"/>
<line x1="190" y1="373" x2="464" y2="373"/>
<line x1="464" y1="373" x2="464" y2="363"/>
<line x1="464" y1="363" x2="489.2" y2="363"/>
<line x1="544" y1="349" x2="574" y2="349"/>
<line x1="160" y1="420" x2="376" y2="420"/>
<line x1="268" y1="434" x2="376" y2="434"/>
<line x1="428" y1="427" x2="484" y2="427"/>
<line x1="484" y1="427" x2="484" y2="491"/>
<line x1="484" y1="491" x2="498.5" y2="491"/>
<line x1="238" y1="472" x2="376" y2="472"/>
<line x1="268" y1="486" x2="376" y2="486"/>
<line x1="428" y1="479" x2="464" y2="479"/>
<line x1="464" y1="479" x2="464" y2="505"/>
<line x1="464" y1="505" x2="500.7" y2="505"/>
<line x1="82" y1="524" x2="376" y2="524"/>
<line x1="190" y1="538" x2="376" y2="538"/>
<line x1="316" y1="552" x2="376" y2="552"/>
<line x1="428" y1="538" x2="454" y2="538"/>
<line x1="454" y1="538" x2="454" y2="519"/>
<line x1="454" y1="519" x2="500.7" y2="519"/>
<line x1="34" y1="590" x2="376" y2="590"/>
<line x1="238" y1="604" x2="376" y2="604"/>
<line x1="428" y1="597" x2="474" y2="597"/>
<line x1="474" y1="597" x2="474" y2="533"/>
<line x1="474" y1="533" x2="498.5" y2="533"/>
<line x1="554" y1="512" x2="584" y2="512"/>
<line x1="160" y1="658" x2="376" y2="658"/>
<line x1="268" y1="672" x2="376" y2="672"/>
<line x1="428" y1="665" x2="464" y2="665"/>
<line x1="464" y1="665" x2="464" y2="684"/>
<line x1="464" y1="684" x2="480.2" y2="684"/>
<line x1="238" y1="710" x2="376" y2="710"/>
<line x1="268" y1="724" x2="376" y2="724"/>
<line x1="428" y1="717" x2="454" y2="717"/>
<line x1="454" y1="717" x2="454" y2="698"/>
<line x1="454" y1="698" x2="480.2" y2="698"/>
<line x1="534" y1="691" x2="564" y2="691"/>
<line x1="190" y1="778" x2="376" y2="778"/>
<line x1="268" y1="792" x2="376" y2="792"/>
<line x1="428" y1="785" x2="464" y2="785"/>
<line x1="464" y1="785" x2="464" y2="804"/>
<line x1="464" y1="804" x2="480.2" y2="804"/>
<line x1="34" y1="830" x2="376" y2="830"/>
<line x1="238" y1="844" x2="376" y2="844"/>
<line x1="428" y1="837" x2="454" y2="837"/>
<line x1="454" y1="837" x2="454" y2="818"/>
<line x1="454" y1="818" x2="480.2" y2="818"/>
<line x1="534" y1="811" x2="564" y2="811"/>
<line x1="34" y1="52" x2="41" y2="52"/>
<line x1="73" y1="52" x2="82" y2="52"/>
<line x1="112" y1="52" x2="119" y2="52"/>
<line x1="151" y1="52" x2="160" y2="52"/>
<line x1="190" y1="52" x2="197" y2="52"/>
<line x1="229" y1="52" x2="238" y2="52"/>
<line x1="268" y1="52" x2="275" y2="52"/>
<line x1="307" y1="52" x2="316" y2="52"/>
<path d="M376,106 H402 A26,21 0 0 1 402,148 H376 Z"/>
<path d="M376,158 H402 A26,21 0 0 1 402,200 H376 Z"/>
<path d="M494,118 C516,118 542,135.5 554,153 C542,170.5 516,188 494,188 Q508,153 494,118 Z"/>
<path d="M474,250 C496,250 522,260.5 534,271 C522,281.5 496,292 474,292 Q488,271 474,250 Z"/>
<path d="M484,321 C506,321 532,335 544,349 C532,363 506,377 484,377 Q498,349 484,321 Z"/>
<path d="M376,406 H402 A26,21 0 0 1 402,448 H376 Z"/>
<path d="M376,458 H402 A26,21 0 0 1 402,500 H376 Z"/>
<path d="M376,510 H402 A26,28 0 0 1 402,566 H376 Z"/>
<path d="M376,576 H402 A26,21 0 0 1 402,618 H376 Z"/>
<path d="M494,477 C516,477 542,494.5 554,512 C542,529.5 516,547 494,547 Q508,512 494,477 Z"/>
<path d="M376,644 H402 A26,21 0 0 1 402,686 H376 Z"/>
<path d="M376,696 H402 A26,21 0 0 1 402,738 H376 Z"/>
<path d="M474,670 C496,670 522,680.5 534,691 C522,701.5 496,712 474,712 Q488,691 474,670 Z"/>
<path d="M376,764 H402 A26,21 0 0 1 402,806 H376 Z"/>
<path d="M376,816 H402 A26,21 0 0 1 402,858 H376 Z"/>
<path d="M474,790 C496,790 522,800.5 534,811 C522,821.5 496,832 474,832 Q488,811 474,790 Z"/>
<polygon points="41,40 41,64 63,52"/>
<circle cx="68" cy="52" r="5"/>
<polygon points="119,40 119,64 141,52"/>
<circle cx="146" cy="52" r="5"/>
<polygon points="197,40 197,64 219,52"/>
<circle cx="224" cy="52" r="5"/>
<polygon points="275,40 275,64 297,52"/>
<circle cx="302" cy="52" r="5"/>
<circle cx="160" cy="89" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="120" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="134" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="172" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316" cy="186" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="217" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="259" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="283" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="160" cy="325" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316" cy="349" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="373" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="160" cy="420" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="434" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="472" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="486" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="82" cy="524" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="538" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316" cy="552" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="590" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="604" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="160" cy="658" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="672" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="710" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="724" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="778" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="792" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="830" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="844" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="52" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="590" y="159">a</text>
<text x="570" y="277">b</text>
<text x="580" y="355">c</text>
<text x="590" y="518">d</text>
<text x="570" y="697">e</text>
<text x="570" y="817">f</text>
<text x="34" y="22" text-anchor="middle">A</text>
<text x="112" y="22" text-anchor="middle">B</text>
<text x="190" y="22" text-anchor="middle">C</text>
<text x="268" y="22" text-anchor="middle">D</text>
</svg>
</div>

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="74" height="118" viewBox="0 0 74 118" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(10,8) scale(1.1)"><path d="M7,4 L37,4 L33,10 L11,10 Z" fill-opacity="1"/><path d="M38,5 L38,35 L32,31 L32,11 Z" fill-opacity="1"/><path d="M38,41 L38,71 L32,65 L32,45 Z" fill-opacity="1"/><path d="M7,72 L37,72 L33,66 L11,66 Z" fill-opacity="1"/><path d="M6,41 L6,71 L12,65 L12,45 Z" fill-opacity="1"/><path d="M6,5 L6,35 L12,31 L12,11 Z" fill-opacity="1"/><path d="M7,38 L11,34 L33,34 L37,38 L33,42 L11,42 Z" fill-opacity="0.1"/></g>
<text x="34.2" y="108" text-anchor="middle">0</text>
</svg>
</div>

### วงจรของเลข 1 (Excess-3, AND/OR) {code=xs3; method=andor; digit=1}

$\mathbf{Sol}^{n}$

เลข $1$ ใช้ segment $b, c$ จึงเขียนวงจรเฉพาะ segment เหล่านี้ ต่อเข้าด้วยกันเป็นวงจรเดียว : ต้องมีทั้งตัวปกติและตัวคอมพลีเมนต์ของอินพุต จึงใช้เกต NOT ต่อจากอินพุต แต่ละพจน์ผลคูณใช้ AND เกต แล้วนำทุกพจน์เข้า OR เกต (พจน์ที่มีตัวแปรตัวเดียวต่อเข้า OR เกตได้เลย)

$\mathbf{Ans}\quad \begin{aligned}b &= C+B \\ c &= \overline{B}+\overline{D}+C\end{aligned}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="200" height="238" viewBox="0 0 200 238" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<line x1="82" y1="52" x2="82" y2="157"/>
<line x1="34" y1="28" x2="34" y2="115"/>
<line x1="112" y1="28" x2="112" y2="205"/>
<line x1="192" y1="52" x2="192" y2="181"/>
<line x1="144" y1="28" x2="144" y2="52"/>
<line x1="112" y1="91" x2="36" y2="91"/>
<line x1="36" y1="91" x2="36" y2="96"/>
<line x1="36" y1="96" x2="52.2" y2="96"/>
<line x1="34" y1="115" x2="26" y2="115"/>
<line x1="26" y1="115" x2="26" y2="110"/>
<line x1="26" y1="110" x2="52.2" y2="110"/>
<line x1="106" y1="103" x2="136" y2="103"/>
<line x1="82" y1="157" x2="46" y2="157"/>
<line x1="46" y1="157" x2="46" y2="167"/>
<line x1="46" y1="167" x2="61.2" y2="167"/>
<line x1="192" y1="181" x2="63" y2="181"/>
<line x1="112" y1="205" x2="36" y2="205"/>
<line x1="36" y1="205" x2="36" y2="195"/>
<line x1="36" y1="195" x2="61.2" y2="195"/>
<line x1="116" y1="181" x2="146" y2="181"/>
<line x1="34" y1="52" x2="41" y2="52"/>
<line x1="73" y1="52" x2="82" y2="52"/>
<line x1="144" y1="52" x2="151" y2="52"/>
<line x1="183" y1="52" x2="192" y2="52"/>
<path d="M46,82 C68,82 94,92.5 106,103 C94,113.5 68,124 46,124 Q60,103 46,82 Z"/>
<path d="M56,153 C78,153 104,167 116,181 C104,195 78,209 56,209 Q70,181 56,153 Z"/>
<polygon points="41,40 41,64 63,52"/>
<circle cx="68" cy="52" r="5"/>
<polygon points="151,40 151,64 173,52"/>
<circle cx="178" cy="52" r="5"/>
<circle cx="112" cy="91" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="115" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="82" cy="157" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="192" cy="181" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="205" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="52" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="142" y="109">b</text>
<text x="152" y="187">c</text>
<text x="34" y="22" text-anchor="middle">B</text>
<text x="112" y="22" text-anchor="middle">C</text>
<text x="144" y="22" text-anchor="middle">D</text>
</svg>
</div>

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="74" height="118" viewBox="0 0 74 118" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(10,8) scale(1.1)"><path d="M7,4 L37,4 L33,10 L11,10 Z" fill-opacity="0.1"/><path d="M38,5 L38,35 L32,31 L32,11 Z" fill-opacity="1"/><path d="M38,41 L38,71 L32,65 L32,45 Z" fill-opacity="1"/><path d="M7,72 L37,72 L33,66 L11,66 Z" fill-opacity="0.1"/><path d="M6,41 L6,71 L12,65 L12,45 Z" fill-opacity="0.1"/><path d="M6,5 L6,35 L12,31 L12,11 Z" fill-opacity="0.1"/><path d="M7,38 L11,34 L33,34 L37,38 L33,42 L11,42 Z" fill-opacity="0.1"/></g>
<text x="34.2" y="108" text-anchor="middle">1</text>
</svg>
</div>

### วงจรของเลข 2 (Excess-3, AND/OR) {code=xs3; method=andor; digit=2}

$\mathbf{Sol}^{n}$

เลข $2$ ใช้ segment $a, b, d, e, g$ จึงเขียนวงจรเฉพาะ segment เหล่านี้ ต่อเข้าด้วยกันเป็นวงจรเดียว : ต้องมีทั้งตัวปกติและตัวคอมพลีเมนต์ของอินพุต จึงใช้เกต NOT ต่อจากอินพุต แต่ละพจน์ผลคูณใช้ AND เกต แล้วนำทุกพจน์เข้า OR เกต (พจน์ที่มีตัวแปรตัวเดียวต่อเข้า OR เกตได้เลย)

$\mathbf{Ans}\quad \begin{aligned}a &= \overline{B}+\overline{C}D+C\overline{D}+A \\ b &= C+B \\ d &= \overline{B}D+\overline{C}D+\overline{A}C\overline{D}+A\overline{C} \\ e &= \overline{B}D+\overline{C}D \\ g &= \overline{C}D+BC+A\overline{C}+AD\end{aligned}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="638" height="900" viewBox="0 0 638 900" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<line x1="82" y1="52" x2="82" y2="436"/>
<line x1="34" y1="28" x2="34" y2="846"/>
<line x1="160" y1="52" x2="160" y2="570"/>
<line x1="112" y1="28" x2="112" y2="742"/>
<line x1="238" y1="52" x2="238" y2="808"/>
<line x1="190" y1="28" x2="190" y2="756"/>
<line x1="316" y1="52" x2="316" y2="464"/>
<line x1="268" y1="28" x2="268" y2="860"/>
<line x1="160" y1="89" x2="484" y2="89"/>
<line x1="484" y1="89" x2="484" y2="132"/>
<line x1="484" y1="132" x2="498.5" y2="132"/>
<line x1="238" y1="120" x2="376" y2="120"/>
<line x1="268" y1="134" x2="376" y2="134"/>
<line x1="428" y1="127" x2="464" y2="127"/>
<line x1="464" y1="127" x2="464" y2="146"/>
<line x1="464" y1="146" x2="500.7" y2="146"/>
<line x1="190" y1="172" x2="376" y2="172"/>
<line x1="316" y1="186" x2="376" y2="186"/>
<line x1="428" y1="179" x2="454" y2="179"/>
<line x1="454" y1="179" x2="454" y2="160"/>
<line x1="454" y1="160" x2="500.7" y2="160"/>
<line x1="34" y1="217" x2="474" y2="217"/>
<line x1="474" y1="217" x2="474" y2="174"/>
<line x1="474" y1="174" x2="498.5" y2="174"/>
<line x1="554" y1="153" x2="584" y2="153"/>
<line x1="190" y1="259" x2="464" y2="259"/>
<line x1="464" y1="259" x2="464" y2="264"/>
<line x1="464" y1="264" x2="480.2" y2="264"/>
<line x1="112" y1="283" x2="454" y2="283"/>
<line x1="454" y1="283" x2="454" y2="278"/>
<line x1="454" y1="278" x2="480.2" y2="278"/>
<line x1="534" y1="271" x2="564" y2="271"/>
<line x1="160" y1="332" x2="376" y2="332"/>
<line x1="268" y1="346" x2="376" y2="346"/>
<line x1="428" y1="339" x2="484" y2="339"/>
<line x1="484" y1="339" x2="484" y2="403"/>
<line x1="484" y1="403" x2="498.5" y2="403"/>
<line x1="238" y1="384" x2="376" y2="384"/>
<line x1="268" y1="398" x2="376" y2="398"/>
<line x1="428" y1="391" x2="464" y2="391"/>
<line x1="464" y1="391" x2="464" y2="417"/>
<line x1="464" y1="417" x2="500.7" y2="417"/>
<line x1="82" y1="436" x2="376" y2="436"/>
<line x1="190" y1="450" x2="376" y2="450"/>
<line x1="316" y1="464" x2="376" y2="464"/>
<line x1="428" y1="450" x2="454" y2="450"/>
<line x1="454" y1="450" x2="454" y2="431"/>
<line x1="454" y1="431" x2="500.7" y2="431"/>
<line x1="34" y1="502" x2="376" y2="502"/>
<line x1="238" y1="516" x2="376" y2="516"/>
<line x1="428" y1="509" x2="474" y2="509"/>
<line x1="474" y1="509" x2="474" y2="445"/>
<line x1="474" y1="445" x2="498.5" y2="445"/>
<line x1="554" y1="424" x2="584" y2="424"/>
<line x1="160" y1="570" x2="376" y2="570"/>
<line x1="268" y1="584" x2="376" y2="584"/>
<line x1="428" y1="577" x2="464" y2="577"/>
<line x1="464" y1="577" x2="464" y2="596"/>
<line x1="464" y1="596" x2="480.2" y2="596"/>
<line x1="238" y1="622" x2="376" y2="622"/>
<line x1="268" y1="636" x2="376" y2="636"/>
<line x1="428" y1="629" x2="454" y2="629"/>
<line x1="454" y1="629" x2="454" y2="610"/>
<line x1="454" y1="610" x2="480.2" y2="610"/>
<line x1="534" y1="603" x2="564" y2="603"/>
<line x1="238" y1="690" x2="376" y2="690"/>
<line x1="268" y1="704" x2="376" y2="704"/>
<line x1="428" y1="697" x2="484" y2="697"/>
<line x1="484" y1="697" x2="484" y2="754"/>
<line x1="484" y1="754" x2="498.5" y2="754"/>
<line x1="112" y1="742" x2="376" y2="742"/>
<line x1="190" y1="756" x2="376" y2="756"/>
<line x1="428" y1="749" x2="464" y2="749"/>
<line x1="464" y1="749" x2="464" y2="768"/>
<line x1="464" y1="768" x2="500.7" y2="768"/>
<line x1="34" y1="794" x2="376" y2="794"/>
<line x1="238" y1="808" x2="376" y2="808"/>
<line x1="428" y1="801" x2="454" y2="801"/>
<line x1="454" y1="801" x2="454" y2="782"/>
<line x1="454" y1="782" x2="500.7" y2="782"/>
<line x1="34" y1="846" x2="376" y2="846"/>
<line x1="268" y1="860" x2="376" y2="860"/>
<line x1="428" y1="853" x2="474" y2="853"/>
<line x1="474" y1="853" x2="474" y2="796"/>
<line x1="474" y1="796" x2="498.5" y2="796"/>
<line x1="554" y1="775" x2="584" y2="775"/>
<line x1="34" y1="52" x2="41" y2="52"/>
<line x1="73" y1="52" x2="82" y2="52"/>
<line x1="112" y1="52" x2="119" y2="52"/>
<line x1="151" y1="52" x2="160" y2="52"/>
<line x1="190" y1="52" x2="197" y2="52"/>
<line x1="229" y1="52" x2="238" y2="52"/>
<line x1="268" y1="52" x2="275" y2="52"/>
<line x1="307" y1="52" x2="316" y2="52"/>
<path d="M376,106 H402 A26,21 0 0 1 402,148 H376 Z"/>
<path d="M376,158 H402 A26,21 0 0 1 402,200 H376 Z"/>
<path d="M494,118 C516,118 542,135.5 554,153 C542,170.5 516,188 494,188 Q508,153 494,118 Z"/>
<path d="M474,250 C496,250 522,260.5 534,271 C522,281.5 496,292 474,292 Q488,271 474,250 Z"/>
<path d="M376,318 H402 A26,21 0 0 1 402,360 H376 Z"/>
<path d="M376,370 H402 A26,21 0 0 1 402,412 H376 Z"/>
<path d="M376,422 H402 A26,28 0 0 1 402,478 H376 Z"/>
<path d="M376,488 H402 A26,21 0 0 1 402,530 H376 Z"/>
<path d="M494,389 C516,389 542,406.5 554,424 C542,441.5 516,459 494,459 Q508,424 494,389 Z"/>
<path d="M376,556 H402 A26,21 0 0 1 402,598 H376 Z"/>
<path d="M376,608 H402 A26,21 0 0 1 402,650 H376 Z"/>
<path d="M474,582 C496,582 522,592.5 534,603 C522,613.5 496,624 474,624 Q488,603 474,582 Z"/>
<path d="M376,676 H402 A26,21 0 0 1 402,718 H376 Z"/>
<path d="M376,728 H402 A26,21 0 0 1 402,770 H376 Z"/>
<path d="M376,780 H402 A26,21 0 0 1 402,822 H376 Z"/>
<path d="M376,832 H402 A26,21 0 0 1 402,874 H376 Z"/>
<path d="M494,740 C516,740 542,757.5 554,775 C542,792.5 516,810 494,810 Q508,775 494,740 Z"/>
<polygon points="41,40 41,64 63,52"/>
<circle cx="68" cy="52" r="5"/>
<polygon points="119,40 119,64 141,52"/>
<circle cx="146" cy="52" r="5"/>
<polygon points="197,40 197,64 219,52"/>
<circle cx="224" cy="52" r="5"/>
<polygon points="275,40 275,64 297,52"/>
<circle cx="302" cy="52" r="5"/>
<circle cx="160" cy="89" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="120" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="134" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="172" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316" cy="186" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="217" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="259" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="283" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="160" cy="332" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="346" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="384" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="398" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="82" cy="436" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="450" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316" cy="464" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="502" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="516" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="160" cy="570" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="584" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="622" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="636" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="690" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="704" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="742" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="756" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="794" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="808" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="846" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="860" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="52" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="590" y="159">a</text>
<text x="570" y="277">b</text>
<text x="590" y="430">d</text>
<text x="570" y="609">e</text>
<text x="590" y="781">g</text>
<text x="34" y="22" text-anchor="middle">A</text>
<text x="112" y="22" text-anchor="middle">B</text>
<text x="190" y="22" text-anchor="middle">C</text>
<text x="268" y="22" text-anchor="middle">D</text>
</svg>
</div>

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="74" height="118" viewBox="0 0 74 118" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(10,8) scale(1.1)"><path d="M7,4 L37,4 L33,10 L11,10 Z" fill-opacity="1"/><path d="M38,5 L38,35 L32,31 L32,11 Z" fill-opacity="1"/><path d="M38,41 L38,71 L32,65 L32,45 Z" fill-opacity="0.1"/><path d="M7,72 L37,72 L33,66 L11,66 Z" fill-opacity="1"/><path d="M6,41 L6,71 L12,65 L12,45 Z" fill-opacity="1"/><path d="M6,5 L6,35 L12,31 L12,11 Z" fill-opacity="0.1"/><path d="M7,38 L11,34 L33,34 L37,38 L33,42 L11,42 Z" fill-opacity="1"/></g>
<text x="34.2" y="108" text-anchor="middle">2</text>
</svg>
</div>

### วงจรของเลข 3 (Excess-3, AND/OR) {code=xs3; method=andor; digit=3}

$\mathbf{Sol}^{n}$

เลข $3$ ใช้ segment $a, b, c, d, g$ จึงเขียนวงจรเฉพาะ segment เหล่านี้ ต่อเข้าด้วยกันเป็นวงจรเดียว : ต้องมีทั้งตัวปกติและตัวคอมพลีเมนต์ของอินพุต จึงใช้เกต NOT ต่อจากอินพุต แต่ละพจน์ผลคูณใช้ AND เกต แล้วนำทุกพจน์เข้า OR เกต (พจน์ที่มีตัวแปรตัวเดียวต่อเข้า OR เกตได้เลย)

$\mathbf{Ans}\quad \begin{aligned}a &= \overline{B}+\overline{C}D+C\overline{D}+A \\ b &= C+B \\ c &= \overline{B}+\overline{D}+C \\ d &= \overline{B}D+\overline{C}D+\overline{A}C\overline{D}+A\overline{C} \\ g &= \overline{C}D+BC+A\overline{C}+AD\end{aligned}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="638" height="868" viewBox="0 0 638 868" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<line x1="82" y1="52" x2="82" y2="524"/>
<line x1="34" y1="28" x2="34" y2="814"/>
<line x1="160" y1="52" x2="160" y2="420"/>
<line x1="112" y1="28" x2="112" y2="710"/>
<line x1="238" y1="52" x2="238" y2="776"/>
<line x1="190" y1="28" x2="190" y2="724"/>
<line x1="316" y1="52" x2="316" y2="552"/>
<line x1="268" y1="28" x2="268" y2="828"/>
<line x1="160" y1="89" x2="484" y2="89"/>
<line x1="484" y1="89" x2="484" y2="132"/>
<line x1="484" y1="132" x2="498.5" y2="132"/>
<line x1="238" y1="120" x2="376" y2="120"/>
<line x1="268" y1="134" x2="376" y2="134"/>
<line x1="428" y1="127" x2="464" y2="127"/>
<line x1="464" y1="127" x2="464" y2="146"/>
<line x1="464" y1="146" x2="500.7" y2="146"/>
<line x1="190" y1="172" x2="376" y2="172"/>
<line x1="316" y1="186" x2="376" y2="186"/>
<line x1="428" y1="179" x2="454" y2="179"/>
<line x1="454" y1="179" x2="454" y2="160"/>
<line x1="454" y1="160" x2="500.7" y2="160"/>
<line x1="34" y1="217" x2="474" y2="217"/>
<line x1="474" y1="217" x2="474" y2="174"/>
<line x1="474" y1="174" x2="498.5" y2="174"/>
<line x1="554" y1="153" x2="584" y2="153"/>
<line x1="190" y1="259" x2="464" y2="259"/>
<line x1="464" y1="259" x2="464" y2="264"/>
<line x1="464" y1="264" x2="480.2" y2="264"/>
<line x1="112" y1="283" x2="454" y2="283"/>
<line x1="454" y1="283" x2="454" y2="278"/>
<line x1="454" y1="278" x2="480.2" y2="278"/>
<line x1="534" y1="271" x2="564" y2="271"/>
<line x1="160" y1="325" x2="474" y2="325"/>
<line x1="474" y1="325" x2="474" y2="335"/>
<line x1="474" y1="335" x2="489.2" y2="335"/>
<line x1="316" y1="349" x2="491" y2="349"/>
<line x1="190" y1="373" x2="464" y2="373"/>
<line x1="464" y1="373" x2="464" y2="363"/>
<line x1="464" y1="363" x2="489.2" y2="363"/>
<line x1="544" y1="349" x2="574" y2="349"/>
<line x1="160" y1="420" x2="376" y2="420"/>
<line x1="268" y1="434" x2="376" y2="434"/>
<line x1="428" y1="427" x2="484" y2="427"/>
<line x1="484" y1="427" x2="484" y2="491"/>
<line x1="484" y1="491" x2="498.5" y2="491"/>
<line x1="238" y1="472" x2="376" y2="472"/>
<line x1="268" y1="486" x2="376" y2="486"/>
<line x1="428" y1="479" x2="464" y2="479"/>
<line x1="464" y1="479" x2="464" y2="505"/>
<line x1="464" y1="505" x2="500.7" y2="505"/>
<line x1="82" y1="524" x2="376" y2="524"/>
<line x1="190" y1="538" x2="376" y2="538"/>
<line x1="316" y1="552" x2="376" y2="552"/>
<line x1="428" y1="538" x2="454" y2="538"/>
<line x1="454" y1="538" x2="454" y2="519"/>
<line x1="454" y1="519" x2="500.7" y2="519"/>
<line x1="34" y1="590" x2="376" y2="590"/>
<line x1="238" y1="604" x2="376" y2="604"/>
<line x1="428" y1="597" x2="474" y2="597"/>
<line x1="474" y1="597" x2="474" y2="533"/>
<line x1="474" y1="533" x2="498.5" y2="533"/>
<line x1="554" y1="512" x2="584" y2="512"/>
<line x1="238" y1="658" x2="376" y2="658"/>
<line x1="268" y1="672" x2="376" y2="672"/>
<line x1="428" y1="665" x2="484" y2="665"/>
<line x1="484" y1="665" x2="484" y2="722"/>
<line x1="484" y1="722" x2="498.5" y2="722"/>
<line x1="112" y1="710" x2="376" y2="710"/>
<line x1="190" y1="724" x2="376" y2="724"/>
<line x1="428" y1="717" x2="464" y2="717"/>
<line x1="464" y1="717" x2="464" y2="736"/>
<line x1="464" y1="736" x2="500.7" y2="736"/>
<line x1="34" y1="762" x2="376" y2="762"/>
<line x1="238" y1="776" x2="376" y2="776"/>
<line x1="428" y1="769" x2="454" y2="769"/>
<line x1="454" y1="769" x2="454" y2="750"/>
<line x1="454" y1="750" x2="500.7" y2="750"/>
<line x1="34" y1="814" x2="376" y2="814"/>
<line x1="268" y1="828" x2="376" y2="828"/>
<line x1="428" y1="821" x2="474" y2="821"/>
<line x1="474" y1="821" x2="474" y2="764"/>
<line x1="474" y1="764" x2="498.5" y2="764"/>
<line x1="554" y1="743" x2="584" y2="743"/>
<line x1="34" y1="52" x2="41" y2="52"/>
<line x1="73" y1="52" x2="82" y2="52"/>
<line x1="112" y1="52" x2="119" y2="52"/>
<line x1="151" y1="52" x2="160" y2="52"/>
<line x1="190" y1="52" x2="197" y2="52"/>
<line x1="229" y1="52" x2="238" y2="52"/>
<line x1="268" y1="52" x2="275" y2="52"/>
<line x1="307" y1="52" x2="316" y2="52"/>
<path d="M376,106 H402 A26,21 0 0 1 402,148 H376 Z"/>
<path d="M376,158 H402 A26,21 0 0 1 402,200 H376 Z"/>
<path d="M494,118 C516,118 542,135.5 554,153 C542,170.5 516,188 494,188 Q508,153 494,118 Z"/>
<path d="M474,250 C496,250 522,260.5 534,271 C522,281.5 496,292 474,292 Q488,271 474,250 Z"/>
<path d="M484,321 C506,321 532,335 544,349 C532,363 506,377 484,377 Q498,349 484,321 Z"/>
<path d="M376,406 H402 A26,21 0 0 1 402,448 H376 Z"/>
<path d="M376,458 H402 A26,21 0 0 1 402,500 H376 Z"/>
<path d="M376,510 H402 A26,28 0 0 1 402,566 H376 Z"/>
<path d="M376,576 H402 A26,21 0 0 1 402,618 H376 Z"/>
<path d="M494,477 C516,477 542,494.5 554,512 C542,529.5 516,547 494,547 Q508,512 494,477 Z"/>
<path d="M376,644 H402 A26,21 0 0 1 402,686 H376 Z"/>
<path d="M376,696 H402 A26,21 0 0 1 402,738 H376 Z"/>
<path d="M376,748 H402 A26,21 0 0 1 402,790 H376 Z"/>
<path d="M376,800 H402 A26,21 0 0 1 402,842 H376 Z"/>
<path d="M494,708 C516,708 542,725.5 554,743 C542,760.5 516,778 494,778 Q508,743 494,708 Z"/>
<polygon points="41,40 41,64 63,52"/>
<circle cx="68" cy="52" r="5"/>
<polygon points="119,40 119,64 141,52"/>
<circle cx="146" cy="52" r="5"/>
<polygon points="197,40 197,64 219,52"/>
<circle cx="224" cy="52" r="5"/>
<polygon points="275,40 275,64 297,52"/>
<circle cx="302" cy="52" r="5"/>
<circle cx="160" cy="89" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="120" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="134" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="172" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316" cy="186" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="217" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="259" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="283" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="160" cy="325" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316" cy="349" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="373" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="160" cy="420" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="434" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="472" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="486" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="82" cy="524" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="538" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316" cy="552" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="590" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="604" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="658" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="672" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="710" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="724" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="762" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="776" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="814" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="828" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="52" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="590" y="159">a</text>
<text x="570" y="277">b</text>
<text x="580" y="355">c</text>
<text x="590" y="518">d</text>
<text x="590" y="749">g</text>
<text x="34" y="22" text-anchor="middle">A</text>
<text x="112" y="22" text-anchor="middle">B</text>
<text x="190" y="22" text-anchor="middle">C</text>
<text x="268" y="22" text-anchor="middle">D</text>
</svg>
</div>

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="74" height="118" viewBox="0 0 74 118" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(10,8) scale(1.1)"><path d="M7,4 L37,4 L33,10 L11,10 Z" fill-opacity="1"/><path d="M38,5 L38,35 L32,31 L32,11 Z" fill-opacity="1"/><path d="M38,41 L38,71 L32,65 L32,45 Z" fill-opacity="1"/><path d="M7,72 L37,72 L33,66 L11,66 Z" fill-opacity="1"/><path d="M6,41 L6,71 L12,65 L12,45 Z" fill-opacity="0.1"/><path d="M6,5 L6,35 L12,31 L12,11 Z" fill-opacity="0.1"/><path d="M7,38 L11,34 L33,34 L37,38 L33,42 L11,42 Z" fill-opacity="1"/></g>
<text x="34.2" y="108" text-anchor="middle">3</text>
</svg>
</div>

### วงจรของเลข 4 (Excess-3, AND/OR) {code=xs3; method=andor; digit=4}

$\mathbf{Sol}^{n}$

เลข $4$ ใช้ segment $b, c, f, g$ จึงเขียนวงจรเฉพาะ segment เหล่านี้ ต่อเข้าด้วยกันเป็นวงจรเดียว : ต้องมีทั้งตัวปกติและตัวคอมพลีเมนต์ของอินพุต จึงใช้เกต NOT ต่อจากอินพุต แต่ละพจน์ผลคูณใช้ AND เกต แล้วนำทุกพจน์เข้า OR เกต (พจน์ที่มีตัวแปรตัวเดียวต่อเข้า OR เกตได้เลย)

$\mathbf{Ans}\quad \begin{aligned}b &= C+B \\ c &= \overline{B}+\overline{D}+C \\ f &= CD+A\overline{C} \\ g &= \overline{C}D+BC+A\overline{C}+AD\end{aligned}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="592" height="582" viewBox="0 0 592 582" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<line x1="34" y1="28" x2="34" y2="528"/>
<line x1="114" y1="52" x2="114" y2="157"/>
<line x1="66" y1="28" x2="66" y2="424"/>
<line x1="192" y1="52" x2="192" y2="490"/>
<line x1="144" y1="28" x2="144" y2="438"/>
<line x1="270" y1="52" x2="270" y2="181"/>
<line x1="222" y1="28" x2="222" y2="542"/>
<line x1="144" y1="91" x2="418" y2="91"/>
<line x1="418" y1="91" x2="418" y2="96"/>
<line x1="418" y1="96" x2="434.2" y2="96"/>
<line x1="66" y1="115" x2="408" y2="115"/>
<line x1="408" y1="115" x2="408" y2="110"/>
<line x1="408" y1="110" x2="434.2" y2="110"/>
<line x1="488" y1="103" x2="518" y2="103"/>
<line x1="114" y1="157" x2="428" y2="157"/>
<line x1="428" y1="157" x2="428" y2="167"/>
<line x1="428" y1="167" x2="443.2" y2="167"/>
<line x1="270" y1="181" x2="445" y2="181"/>
<line x1="144" y1="205" x2="418" y2="205"/>
<line x1="418" y1="205" x2="418" y2="195"/>
<line x1="418" y1="195" x2="443.2" y2="195"/>
<line x1="498" y1="181" x2="528" y2="181"/>
<line x1="144" y1="252" x2="330" y2="252"/>
<line x1="222" y1="266" x2="330" y2="266"/>
<line x1="382" y1="259" x2="418" y2="259"/>
<line x1="418" y1="259" x2="418" y2="278"/>
<line x1="418" y1="278" x2="434.2" y2="278"/>
<line x1="34" y1="304" x2="330" y2="304"/>
<line x1="192" y1="318" x2="330" y2="318"/>
<line x1="382" y1="311" x2="408" y2="311"/>
<line x1="408" y1="311" x2="408" y2="292"/>
<line x1="408" y1="292" x2="434.2" y2="292"/>
<line x1="488" y1="285" x2="518" y2="285"/>
<line x1="192" y1="372" x2="330" y2="372"/>
<line x1="222" y1="386" x2="330" y2="386"/>
<line x1="382" y1="379" x2="438" y2="379"/>
<line x1="438" y1="379" x2="438" y2="436"/>
<line x1="438" y1="436" x2="452.5" y2="436"/>
<line x1="66" y1="424" x2="330" y2="424"/>
<line x1="144" y1="438" x2="330" y2="438"/>
<line x1="382" y1="431" x2="418" y2="431"/>
<line x1="418" y1="431" x2="418" y2="450"/>
<line x1="418" y1="450" x2="454.7" y2="450"/>
<line x1="34" y1="476" x2="330" y2="476"/>
<line x1="192" y1="490" x2="330" y2="490"/>
<line x1="382" y1="483" x2="408" y2="483"/>
<line x1="408" y1="483" x2="408" y2="464"/>
<line x1="408" y1="464" x2="454.7" y2="464"/>
<line x1="34" y1="528" x2="330" y2="528"/>
<line x1="222" y1="542" x2="330" y2="542"/>
<line x1="382" y1="535" x2="428" y2="535"/>
<line x1="428" y1="535" x2="428" y2="478"/>
<line x1="428" y1="478" x2="452.5" y2="478"/>
<line x1="508" y1="457" x2="538" y2="457"/>
<line x1="66" y1="52" x2="73" y2="52"/>
<line x1="105" y1="52" x2="114" y2="52"/>
<line x1="144" y1="52" x2="151" y2="52"/>
<line x1="183" y1="52" x2="192" y2="52"/>
<line x1="222" y1="52" x2="229" y2="52"/>
<line x1="261" y1="52" x2="270" y2="52"/>
<path d="M428,82 C450,82 476,92.5 488,103 C476,113.5 450,124 428,124 Q442,103 428,82 Z"/>
<path d="M438,153 C460,153 486,167 498,181 C486,195 460,209 438,209 Q452,181 438,153 Z"/>
<path d="M330,238 H356 A26,21 0 0 1 356,280 H330 Z"/>
<path d="M330,290 H356 A26,21 0 0 1 356,332 H330 Z"/>
<path d="M428,264 C450,264 476,274.5 488,285 C476,295.5 450,306 428,306 Q442,285 428,264 Z"/>
<path d="M330,358 H356 A26,21 0 0 1 356,400 H330 Z"/>
<path d="M330,410 H356 A26,21 0 0 1 356,452 H330 Z"/>
<path d="M330,462 H356 A26,21 0 0 1 356,504 H330 Z"/>
<path d="M330,514 H356 A26,21 0 0 1 356,556 H330 Z"/>
<path d="M448,422 C470,422 496,439.5 508,457 C496,474.5 470,492 448,492 Q462,457 448,422 Z"/>
<polygon points="73,40 73,64 95,52"/>
<circle cx="100" cy="52" r="5"/>
<polygon points="151,40 151,64 173,52"/>
<circle cx="178" cy="52" r="5"/>
<polygon points="229,40 229,64 251,52"/>
<circle cx="256" cy="52" r="5"/>
<circle cx="144" cy="91" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="115" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="114" cy="157" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="181" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="205" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="252" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="222" cy="266" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="304" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="192" cy="318" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="192" cy="372" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="222" cy="386" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="424" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="438" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="476" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="192" cy="490" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="528" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="222" cy="542" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="222" cy="52" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="524" y="109">b</text>
<text x="534" y="187">c</text>
<text x="524" y="291">f</text>
<text x="544" y="463">g</text>
<text x="34" y="22" text-anchor="middle">A</text>
<text x="66" y="22" text-anchor="middle">B</text>
<text x="144" y="22" text-anchor="middle">C</text>
<text x="222" y="22" text-anchor="middle">D</text>
</svg>
</div>

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="74" height="118" viewBox="0 0 74 118" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(10,8) scale(1.1)"><path d="M7,4 L37,4 L33,10 L11,10 Z" fill-opacity="0.1"/><path d="M38,5 L38,35 L32,31 L32,11 Z" fill-opacity="1"/><path d="M38,41 L38,71 L32,65 L32,45 Z" fill-opacity="1"/><path d="M7,72 L37,72 L33,66 L11,66 Z" fill-opacity="0.1"/><path d="M6,41 L6,71 L12,65 L12,45 Z" fill-opacity="0.1"/><path d="M6,5 L6,35 L12,31 L12,11 Z" fill-opacity="1"/><path d="M7,38 L11,34 L33,34 L37,38 L33,42 L11,42 Z" fill-opacity="1"/></g>
<text x="34.2" y="108" text-anchor="middle">4</text>
</svg>
</div>

### วงจรของเลข 5 (Excess-3, AND/OR) {code=xs3; method=andor; digit=5}

$\mathbf{Sol}^{n}$

เลข $5$ ใช้ segment $a, c, d, f, g$ จึงเขียนวงจรเฉพาะ segment เหล่านี้ ต่อเข้าด้วยกันเป็นวงจรเดียว : ต้องมีทั้งตัวปกติและตัวคอมพลีเมนต์ของอินพุต จึงใช้เกต NOT ต่อจากอินพุต แต่ละพจน์ผลคูณใช้ AND เกต แล้วนำทุกพจน์เข้า OR เกต (พจน์ที่มีตัวแปรตัวเดียวต่อเข้า OR เกตได้เลย)

$\mathbf{Ans}\quad \begin{aligned}a &= \overline{B}+\overline{C}D+C\overline{D}+A \\ c &= \overline{B}+\overline{D}+C \\ d &= \overline{B}D+\overline{C}D+\overline{A}C\overline{D}+A\overline{C} \\ f &= CD+A\overline{C} \\ g &= \overline{C}D+BC+A\overline{C}+AD\end{aligned}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="638" height="920" viewBox="0 0 638 920" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<line x1="82" y1="52" x2="82" y2="456"/>
<line x1="34" y1="28" x2="34" y2="866"/>
<line x1="160" y1="52" x2="160" y2="352"/>
<line x1="112" y1="28" x2="112" y2="762"/>
<line x1="238" y1="52" x2="238" y2="828"/>
<line x1="190" y1="28" x2="190" y2="776"/>
<line x1="316" y1="52" x2="316" y2="484"/>
<line x1="268" y1="28" x2="268" y2="880"/>
<line x1="160" y1="89" x2="484" y2="89"/>
<line x1="484" y1="89" x2="484" y2="132"/>
<line x1="484" y1="132" x2="498.5" y2="132"/>
<line x1="238" y1="120" x2="376" y2="120"/>
<line x1="268" y1="134" x2="376" y2="134"/>
<line x1="428" y1="127" x2="464" y2="127"/>
<line x1="464" y1="127" x2="464" y2="146"/>
<line x1="464" y1="146" x2="500.7" y2="146"/>
<line x1="190" y1="172" x2="376" y2="172"/>
<line x1="316" y1="186" x2="376" y2="186"/>
<line x1="428" y1="179" x2="454" y2="179"/>
<line x1="454" y1="179" x2="454" y2="160"/>
<line x1="454" y1="160" x2="500.7" y2="160"/>
<line x1="34" y1="217" x2="474" y2="217"/>
<line x1="474" y1="217" x2="474" y2="174"/>
<line x1="474" y1="174" x2="498.5" y2="174"/>
<line x1="554" y1="153" x2="584" y2="153"/>
<line x1="160" y1="257" x2="474" y2="257"/>
<line x1="474" y1="257" x2="474" y2="267"/>
<line x1="474" y1="267" x2="489.2" y2="267"/>
<line x1="316" y1="281" x2="491" y2="281"/>
<line x1="190" y1="305" x2="464" y2="305"/>
<line x1="464" y1="305" x2="464" y2="295"/>
<line x1="464" y1="295" x2="489.2" y2="295"/>
<line x1="544" y1="281" x2="574" y2="281"/>
<line x1="160" y1="352" x2="376" y2="352"/>
<line x1="268" y1="366" x2="376" y2="366"/>
<line x1="428" y1="359" x2="484" y2="359"/>
<line x1="484" y1="359" x2="484" y2="423"/>
<line x1="484" y1="423" x2="498.5" y2="423"/>
<line x1="238" y1="404" x2="376" y2="404"/>
<line x1="268" y1="418" x2="376" y2="418"/>
<line x1="428" y1="411" x2="464" y2="411"/>
<line x1="464" y1="411" x2="464" y2="437"/>
<line x1="464" y1="437" x2="500.7" y2="437"/>
<line x1="82" y1="456" x2="376" y2="456"/>
<line x1="190" y1="470" x2="376" y2="470"/>
<line x1="316" y1="484" x2="376" y2="484"/>
<line x1="428" y1="470" x2="454" y2="470"/>
<line x1="454" y1="470" x2="454" y2="451"/>
<line x1="454" y1="451" x2="500.7" y2="451"/>
<line x1="34" y1="522" x2="376" y2="522"/>
<line x1="238" y1="536" x2="376" y2="536"/>
<line x1="428" y1="529" x2="474" y2="529"/>
<line x1="474" y1="529" x2="474" y2="465"/>
<line x1="474" y1="465" x2="498.5" y2="465"/>
<line x1="554" y1="444" x2="584" y2="444"/>
<line x1="190" y1="590" x2="376" y2="590"/>
<line x1="268" y1="604" x2="376" y2="604"/>
<line x1="428" y1="597" x2="464" y2="597"/>
<line x1="464" y1="597" x2="464" y2="616"/>
<line x1="464" y1="616" x2="480.2" y2="616"/>
<line x1="34" y1="642" x2="376" y2="642"/>
<line x1="238" y1="656" x2="376" y2="656"/>
<line x1="428" y1="649" x2="454" y2="649"/>
<line x1="454" y1="649" x2="454" y2="630"/>
<line x1="454" y1="630" x2="480.2" y2="630"/>
<line x1="534" y1="623" x2="564" y2="623"/>
<line x1="238" y1="710" x2="376" y2="710"/>
<line x1="268" y1="724" x2="376" y2="724"/>
<line x1="428" y1="717" x2="484" y2="717"/>
<line x1="484" y1="717" x2="484" y2="774"/>
<line x1="484" y1="774" x2="498.5" y2="774"/>
<line x1="112" y1="762" x2="376" y2="762"/>
<line x1="190" y1="776" x2="376" y2="776"/>
<line x1="428" y1="769" x2="464" y2="769"/>
<line x1="464" y1="769" x2="464" y2="788"/>
<line x1="464" y1="788" x2="500.7" y2="788"/>
<line x1="34" y1="814" x2="376" y2="814"/>
<line x1="238" y1="828" x2="376" y2="828"/>
<line x1="428" y1="821" x2="454" y2="821"/>
<line x1="454" y1="821" x2="454" y2="802"/>
<line x1="454" y1="802" x2="500.7" y2="802"/>
<line x1="34" y1="866" x2="376" y2="866"/>
<line x1="268" y1="880" x2="376" y2="880"/>
<line x1="428" y1="873" x2="474" y2="873"/>
<line x1="474" y1="873" x2="474" y2="816"/>
<line x1="474" y1="816" x2="498.5" y2="816"/>
<line x1="554" y1="795" x2="584" y2="795"/>
<line x1="34" y1="52" x2="41" y2="52"/>
<line x1="73" y1="52" x2="82" y2="52"/>
<line x1="112" y1="52" x2="119" y2="52"/>
<line x1="151" y1="52" x2="160" y2="52"/>
<line x1="190" y1="52" x2="197" y2="52"/>
<line x1="229" y1="52" x2="238" y2="52"/>
<line x1="268" y1="52" x2="275" y2="52"/>
<line x1="307" y1="52" x2="316" y2="52"/>
<path d="M376,106 H402 A26,21 0 0 1 402,148 H376 Z"/>
<path d="M376,158 H402 A26,21 0 0 1 402,200 H376 Z"/>
<path d="M494,118 C516,118 542,135.5 554,153 C542,170.5 516,188 494,188 Q508,153 494,118 Z"/>
<path d="M484,253 C506,253 532,267 544,281 C532,295 506,309 484,309 Q498,281 484,253 Z"/>
<path d="M376,338 H402 A26,21 0 0 1 402,380 H376 Z"/>
<path d="M376,390 H402 A26,21 0 0 1 402,432 H376 Z"/>
<path d="M376,442 H402 A26,28 0 0 1 402,498 H376 Z"/>
<path d="M376,508 H402 A26,21 0 0 1 402,550 H376 Z"/>
<path d="M494,409 C516,409 542,426.5 554,444 C542,461.5 516,479 494,479 Q508,444 494,409 Z"/>
<path d="M376,576 H402 A26,21 0 0 1 402,618 H376 Z"/>
<path d="M376,628 H402 A26,21 0 0 1 402,670 H376 Z"/>
<path d="M474,602 C496,602 522,612.5 534,623 C522,633.5 496,644 474,644 Q488,623 474,602 Z"/>
<path d="M376,696 H402 A26,21 0 0 1 402,738 H376 Z"/>
<path d="M376,748 H402 A26,21 0 0 1 402,790 H376 Z"/>
<path d="M376,800 H402 A26,21 0 0 1 402,842 H376 Z"/>
<path d="M376,852 H402 A26,21 0 0 1 402,894 H376 Z"/>
<path d="M494,760 C516,760 542,777.5 554,795 C542,812.5 516,830 494,830 Q508,795 494,760 Z"/>
<polygon points="41,40 41,64 63,52"/>
<circle cx="68" cy="52" r="5"/>
<polygon points="119,40 119,64 141,52"/>
<circle cx="146" cy="52" r="5"/>
<polygon points="197,40 197,64 219,52"/>
<circle cx="224" cy="52" r="5"/>
<polygon points="275,40 275,64 297,52"/>
<circle cx="302" cy="52" r="5"/>
<circle cx="160" cy="89" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="120" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="134" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="172" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316" cy="186" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="217" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="160" cy="257" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316" cy="281" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="305" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="160" cy="352" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="366" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="404" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="418" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="82" cy="456" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="470" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316" cy="484" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="522" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="536" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="590" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="604" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="642" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="656" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="710" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="724" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="762" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="776" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="814" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="828" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="866" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="880" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="52" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="590" y="159">a</text>
<text x="580" y="287">c</text>
<text x="590" y="450">d</text>
<text x="570" y="629">f</text>
<text x="590" y="801">g</text>
<text x="34" y="22" text-anchor="middle">A</text>
<text x="112" y="22" text-anchor="middle">B</text>
<text x="190" y="22" text-anchor="middle">C</text>
<text x="268" y="22" text-anchor="middle">D</text>
</svg>
</div>

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="74" height="118" viewBox="0 0 74 118" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(10,8) scale(1.1)"><path d="M7,4 L37,4 L33,10 L11,10 Z" fill-opacity="1"/><path d="M38,5 L38,35 L32,31 L32,11 Z" fill-opacity="0.1"/><path d="M38,41 L38,71 L32,65 L32,45 Z" fill-opacity="1"/><path d="M7,72 L37,72 L33,66 L11,66 Z" fill-opacity="1"/><path d="M6,41 L6,71 L12,65 L12,45 Z" fill-opacity="0.1"/><path d="M6,5 L6,35 L12,31 L12,11 Z" fill-opacity="1"/><path d="M7,38 L11,34 L33,34 L37,38 L33,42 L11,42 Z" fill-opacity="1"/></g>
<text x="34.2" y="108" text-anchor="middle">5</text>
</svg>
</div>

### วงจรของเลข 6 (Excess-3, AND/OR) {code=xs3; method=andor; digit=6}

$\mathbf{Sol}^{n}$

เลข $6$ ใช้ segment $a, c, d, e, f, g$ จึงเขียนวงจรเฉพาะ segment เหล่านี้ ต่อเข้าด้วยกันเป็นวงจรเดียว : ต้องมีทั้งตัวปกติและตัวคอมพลีเมนต์ของอินพุต จึงใช้เกต NOT ต่อจากอินพุต แต่ละพจน์ผลคูณใช้ AND เกต แล้วนำทุกพจน์เข้า OR เกต (พจน์ที่มีตัวแปรตัวเดียวต่อเข้า OR เกตได้เลย)

$\mathbf{Ans}\quad \begin{aligned}a &= \overline{B}+\overline{C}D+C\overline{D}+A \\ c &= \overline{B}+\overline{D}+C \\ d &= \overline{B}D+\overline{C}D+\overline{A}C\overline{D}+A\overline{C} \\ e &= \overline{B}D+\overline{C}D \\ f &= CD+A\overline{C} \\ g &= \overline{C}D+BC+A\overline{C}+AD\end{aligned}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="638" height="1040" viewBox="0 0 638 1040" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<line x1="82" y1="52" x2="82" y2="456"/>
<line x1="34" y1="28" x2="34" y2="986"/>
<line x1="160" y1="52" x2="160" y2="590"/>
<line x1="112" y1="28" x2="112" y2="882"/>
<line x1="238" y1="52" x2="238" y2="948"/>
<line x1="190" y1="28" x2="190" y2="896"/>
<line x1="316" y1="52" x2="316" y2="484"/>
<line x1="268" y1="28" x2="268" y2="1000"/>
<line x1="160" y1="89" x2="484" y2="89"/>
<line x1="484" y1="89" x2="484" y2="132"/>
<line x1="484" y1="132" x2="498.5" y2="132"/>
<line x1="238" y1="120" x2="376" y2="120"/>
<line x1="268" y1="134" x2="376" y2="134"/>
<line x1="428" y1="127" x2="464" y2="127"/>
<line x1="464" y1="127" x2="464" y2="146"/>
<line x1="464" y1="146" x2="500.7" y2="146"/>
<line x1="190" y1="172" x2="376" y2="172"/>
<line x1="316" y1="186" x2="376" y2="186"/>
<line x1="428" y1="179" x2="454" y2="179"/>
<line x1="454" y1="179" x2="454" y2="160"/>
<line x1="454" y1="160" x2="500.7" y2="160"/>
<line x1="34" y1="217" x2="474" y2="217"/>
<line x1="474" y1="217" x2="474" y2="174"/>
<line x1="474" y1="174" x2="498.5" y2="174"/>
<line x1="554" y1="153" x2="584" y2="153"/>
<line x1="160" y1="257" x2="474" y2="257"/>
<line x1="474" y1="257" x2="474" y2="267"/>
<line x1="474" y1="267" x2="489.2" y2="267"/>
<line x1="316" y1="281" x2="491" y2="281"/>
<line x1="190" y1="305" x2="464" y2="305"/>
<line x1="464" y1="305" x2="464" y2="295"/>
<line x1="464" y1="295" x2="489.2" y2="295"/>
<line x1="544" y1="281" x2="574" y2="281"/>
<line x1="160" y1="352" x2="376" y2="352"/>
<line x1="268" y1="366" x2="376" y2="366"/>
<line x1="428" y1="359" x2="484" y2="359"/>
<line x1="484" y1="359" x2="484" y2="423"/>
<line x1="484" y1="423" x2="498.5" y2="423"/>
<line x1="238" y1="404" x2="376" y2="404"/>
<line x1="268" y1="418" x2="376" y2="418"/>
<line x1="428" y1="411" x2="464" y2="411"/>
<line x1="464" y1="411" x2="464" y2="437"/>
<line x1="464" y1="437" x2="500.7" y2="437"/>
<line x1="82" y1="456" x2="376" y2="456"/>
<line x1="190" y1="470" x2="376" y2="470"/>
<line x1="316" y1="484" x2="376" y2="484"/>
<line x1="428" y1="470" x2="454" y2="470"/>
<line x1="454" y1="470" x2="454" y2="451"/>
<line x1="454" y1="451" x2="500.7" y2="451"/>
<line x1="34" y1="522" x2="376" y2="522"/>
<line x1="238" y1="536" x2="376" y2="536"/>
<line x1="428" y1="529" x2="474" y2="529"/>
<line x1="474" y1="529" x2="474" y2="465"/>
<line x1="474" y1="465" x2="498.5" y2="465"/>
<line x1="554" y1="444" x2="584" y2="444"/>
<line x1="160" y1="590" x2="376" y2="590"/>
<line x1="268" y1="604" x2="376" y2="604"/>
<line x1="428" y1="597" x2="464" y2="597"/>
<line x1="464" y1="597" x2="464" y2="616"/>
<line x1="464" y1="616" x2="480.2" y2="616"/>
<line x1="238" y1="642" x2="376" y2="642"/>
<line x1="268" y1="656" x2="376" y2="656"/>
<line x1="428" y1="649" x2="454" y2="649"/>
<line x1="454" y1="649" x2="454" y2="630"/>
<line x1="454" y1="630" x2="480.2" y2="630"/>
<line x1="534" y1="623" x2="564" y2="623"/>
<line x1="190" y1="710" x2="376" y2="710"/>
<line x1="268" y1="724" x2="376" y2="724"/>
<line x1="428" y1="717" x2="464" y2="717"/>
<line x1="464" y1="717" x2="464" y2="736"/>
<line x1="464" y1="736" x2="480.2" y2="736"/>
<line x1="34" y1="762" x2="376" y2="762"/>
<line x1="238" y1="776" x2="376" y2="776"/>
<line x1="428" y1="769" x2="454" y2="769"/>
<line x1="454" y1="769" x2="454" y2="750"/>
<line x1="454" y1="750" x2="480.2" y2="750"/>
<line x1="534" y1="743" x2="564" y2="743"/>
<line x1="238" y1="830" x2="376" y2="830"/>
<line x1="268" y1="844" x2="376" y2="844"/>
<line x1="428" y1="837" x2="484" y2="837"/>
<line x1="484" y1="837" x2="484" y2="894"/>
<line x1="484" y1="894" x2="498.5" y2="894"/>
<line x1="112" y1="882" x2="376" y2="882"/>
<line x1="190" y1="896" x2="376" y2="896"/>
<line x1="428" y1="889" x2="464" y2="889"/>
<line x1="464" y1="889" x2="464" y2="908"/>
<line x1="464" y1="908" x2="500.7" y2="908"/>
<line x1="34" y1="934" x2="376" y2="934"/>
<line x1="238" y1="948" x2="376" y2="948"/>
<line x1="428" y1="941" x2="454" y2="941"/>
<line x1="454" y1="941" x2="454" y2="922"/>
<line x1="454" y1="922" x2="500.7" y2="922"/>
<line x1="34" y1="986" x2="376" y2="986"/>
<line x1="268" y1="1000" x2="376" y2="1000"/>
<line x1="428" y1="993" x2="474" y2="993"/>
<line x1="474" y1="993" x2="474" y2="936"/>
<line x1="474" y1="936" x2="498.5" y2="936"/>
<line x1="554" y1="915" x2="584" y2="915"/>
<line x1="34" y1="52" x2="41" y2="52"/>
<line x1="73" y1="52" x2="82" y2="52"/>
<line x1="112" y1="52" x2="119" y2="52"/>
<line x1="151" y1="52" x2="160" y2="52"/>
<line x1="190" y1="52" x2="197" y2="52"/>
<line x1="229" y1="52" x2="238" y2="52"/>
<line x1="268" y1="52" x2="275" y2="52"/>
<line x1="307" y1="52" x2="316" y2="52"/>
<path d="M376,106 H402 A26,21 0 0 1 402,148 H376 Z"/>
<path d="M376,158 H402 A26,21 0 0 1 402,200 H376 Z"/>
<path d="M494,118 C516,118 542,135.5 554,153 C542,170.5 516,188 494,188 Q508,153 494,118 Z"/>
<path d="M484,253 C506,253 532,267 544,281 C532,295 506,309 484,309 Q498,281 484,253 Z"/>
<path d="M376,338 H402 A26,21 0 0 1 402,380 H376 Z"/>
<path d="M376,390 H402 A26,21 0 0 1 402,432 H376 Z"/>
<path d="M376,442 H402 A26,28 0 0 1 402,498 H376 Z"/>
<path d="M376,508 H402 A26,21 0 0 1 402,550 H376 Z"/>
<path d="M494,409 C516,409 542,426.5 554,444 C542,461.5 516,479 494,479 Q508,444 494,409 Z"/>
<path d="M376,576 H402 A26,21 0 0 1 402,618 H376 Z"/>
<path d="M376,628 H402 A26,21 0 0 1 402,670 H376 Z"/>
<path d="M474,602 C496,602 522,612.5 534,623 C522,633.5 496,644 474,644 Q488,623 474,602 Z"/>
<path d="M376,696 H402 A26,21 0 0 1 402,738 H376 Z"/>
<path d="M376,748 H402 A26,21 0 0 1 402,790 H376 Z"/>
<path d="M474,722 C496,722 522,732.5 534,743 C522,753.5 496,764 474,764 Q488,743 474,722 Z"/>
<path d="M376,816 H402 A26,21 0 0 1 402,858 H376 Z"/>
<path d="M376,868 H402 A26,21 0 0 1 402,910 H376 Z"/>
<path d="M376,920 H402 A26,21 0 0 1 402,962 H376 Z"/>
<path d="M376,972 H402 A26,21 0 0 1 402,1014 H376 Z"/>
<path d="M494,880 C516,880 542,897.5 554,915 C542,932.5 516,950 494,950 Q508,915 494,880 Z"/>
<polygon points="41,40 41,64 63,52"/>
<circle cx="68" cy="52" r="5"/>
<polygon points="119,40 119,64 141,52"/>
<circle cx="146" cy="52" r="5"/>
<polygon points="197,40 197,64 219,52"/>
<circle cx="224" cy="52" r="5"/>
<polygon points="275,40 275,64 297,52"/>
<circle cx="302" cy="52" r="5"/>
<circle cx="160" cy="89" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="120" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="134" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="172" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316" cy="186" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="217" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="160" cy="257" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316" cy="281" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="305" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="160" cy="352" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="366" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="404" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="418" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="82" cy="456" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="470" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316" cy="484" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="522" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="536" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="160" cy="590" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="604" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="642" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="656" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="710" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="724" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="762" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="776" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="830" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="844" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="882" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="896" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="934" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="948" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="986" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="1000" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="52" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="590" y="159">a</text>
<text x="580" y="287">c</text>
<text x="590" y="450">d</text>
<text x="570" y="629">e</text>
<text x="570" y="749">f</text>
<text x="590" y="921">g</text>
<text x="34" y="22" text-anchor="middle">A</text>
<text x="112" y="22" text-anchor="middle">B</text>
<text x="190" y="22" text-anchor="middle">C</text>
<text x="268" y="22" text-anchor="middle">D</text>
</svg>
</div>

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="74" height="118" viewBox="0 0 74 118" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(10,8) scale(1.1)"><path d="M7,4 L37,4 L33,10 L11,10 Z" fill-opacity="1"/><path d="M38,5 L38,35 L32,31 L32,11 Z" fill-opacity="0.1"/><path d="M38,41 L38,71 L32,65 L32,45 Z" fill-opacity="1"/><path d="M7,72 L37,72 L33,66 L11,66 Z" fill-opacity="1"/><path d="M6,41 L6,71 L12,65 L12,45 Z" fill-opacity="1"/><path d="M6,5 L6,35 L12,31 L12,11 Z" fill-opacity="1"/><path d="M7,38 L11,34 L33,34 L37,38 L33,42 L11,42 Z" fill-opacity="1"/></g>
<text x="34.2" y="108" text-anchor="middle">6</text>
</svg>
</div>

### วงจรของเลข 7 (Excess-3, AND/OR) {code=xs3; method=andor; digit=7}

$\mathbf{Sol}^{n}$

เลข $7$ ใช้ segment $a, b, c$ จึงเขียนวงจรเฉพาะ segment เหล่านี้ ต่อเข้าด้วยกันเป็นวงจรเดียว : ต้องมีทั้งตัวปกติและตัวคอมพลีเมนต์ของอินพุต จึงใช้เกต NOT ต่อจากอินพุต แต่ละพจน์ผลคูณใช้ AND เกต แล้วนำทุกพจน์เข้า OR เกต (พจน์ที่มีตัวแปรตัวเดียวต่อเข้า OR เกตได้เลย)

$\mathbf{Ans}\quad \begin{aligned}a &= \overline{B}+\overline{C}D+C\overline{D}+A \\ b &= C+B \\ c &= \overline{B}+\overline{D}+C\end{aligned}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="592" height="406" viewBox="0 0 592 406" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<line x1="34" y1="28" x2="34" y2="217"/>
<line x1="114" y1="52" x2="114" y2="325"/>
<line x1="66" y1="28" x2="66" y2="283"/>
<line x1="192" y1="52" x2="192" y2="120"/>
<line x1="144" y1="28" x2="144" y2="373"/>
<line x1="270" y1="52" x2="270" y2="349"/>
<line x1="222" y1="28" x2="222" y2="134"/>
<line x1="114" y1="89" x2="438" y2="89"/>
<line x1="438" y1="89" x2="438" y2="132"/>
<line x1="438" y1="132" x2="452.5" y2="132"/>
<line x1="192" y1="120" x2="330" y2="120"/>
<line x1="222" y1="134" x2="330" y2="134"/>
<line x1="382" y1="127" x2="418" y2="127"/>
<line x1="418" y1="127" x2="418" y2="146"/>
<line x1="418" y1="146" x2="454.7" y2="146"/>
<line x1="144" y1="172" x2="330" y2="172"/>
<line x1="270" y1="186" x2="330" y2="186"/>
<line x1="382" y1="179" x2="408" y2="179"/>
<line x1="408" y1="179" x2="408" y2="160"/>
<line x1="408" y1="160" x2="454.7" y2="160"/>
<line x1="34" y1="217" x2="428" y2="217"/>
<line x1="428" y1="217" x2="428" y2="174"/>
<line x1="428" y1="174" x2="452.5" y2="174"/>
<line x1="508" y1="153" x2="538" y2="153"/>
<line x1="144" y1="259" x2="418" y2="259"/>
<line x1="418" y1="259" x2="418" y2="264"/>
<line x1="418" y1="264" x2="434.2" y2="264"/>
<line x1="66" y1="283" x2="408" y2="283"/>
<line x1="408" y1="283" x2="408" y2="278"/>
<line x1="408" y1="278" x2="434.2" y2="278"/>
<line x1="488" y1="271" x2="518" y2="271"/>
<line x1="114" y1="325" x2="428" y2="325"/>
<line x1="428" y1="325" x2="428" y2="335"/>
<line x1="428" y1="335" x2="443.2" y2="335"/>
<line x1="270" y1="349" x2="445" y2="349"/>
<line x1="144" y1="373" x2="418" y2="373"/>
<line x1="418" y1="373" x2="418" y2="363"/>
<line x1="418" y1="363" x2="443.2" y2="363"/>
<line x1="498" y1="349" x2="528" y2="349"/>
<line x1="66" y1="52" x2="73" y2="52"/>
<line x1="105" y1="52" x2="114" y2="52"/>
<line x1="144" y1="52" x2="151" y2="52"/>
<line x1="183" y1="52" x2="192" y2="52"/>
<line x1="222" y1="52" x2="229" y2="52"/>
<line x1="261" y1="52" x2="270" y2="52"/>
<path d="M330,106 H356 A26,21 0 0 1 356,148 H330 Z"/>
<path d="M330,158 H356 A26,21 0 0 1 356,200 H330 Z"/>
<path d="M448,118 C470,118 496,135.5 508,153 C496,170.5 470,188 448,188 Q462,153 448,118 Z"/>
<path d="M428,250 C450,250 476,260.5 488,271 C476,281.5 450,292 428,292 Q442,271 428,250 Z"/>
<path d="M438,321 C460,321 486,335 498,349 C486,363 460,377 438,377 Q452,349 438,321 Z"/>
<polygon points="73,40 73,64 95,52"/>
<circle cx="100" cy="52" r="5"/>
<polygon points="151,40 151,64 173,52"/>
<circle cx="178" cy="52" r="5"/>
<polygon points="229,40 229,64 251,52"/>
<circle cx="256" cy="52" r="5"/>
<circle cx="114" cy="89" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="192" cy="120" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="222" cy="134" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="172" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="186" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="217" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="259" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="283" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="114" cy="325" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="349" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="373" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="222" cy="52" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="544" y="159">a</text>
<text x="524" y="277">b</text>
<text x="534" y="355">c</text>
<text x="34" y="22" text-anchor="middle">A</text>
<text x="66" y="22" text-anchor="middle">B</text>
<text x="144" y="22" text-anchor="middle">C</text>
<text x="222" y="22" text-anchor="middle">D</text>
</svg>
</div>

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="74" height="118" viewBox="0 0 74 118" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(10,8) scale(1.1)"><path d="M7,4 L37,4 L33,10 L11,10 Z" fill-opacity="1"/><path d="M38,5 L38,35 L32,31 L32,11 Z" fill-opacity="1"/><path d="M38,41 L38,71 L32,65 L32,45 Z" fill-opacity="1"/><path d="M7,72 L37,72 L33,66 L11,66 Z" fill-opacity="0.1"/><path d="M6,41 L6,71 L12,65 L12,45 Z" fill-opacity="0.1"/><path d="M6,5 L6,35 L12,31 L12,11 Z" fill-opacity="0.1"/><path d="M7,38 L11,34 L33,34 L37,38 L33,42 L11,42 Z" fill-opacity="0.1"/></g>
<text x="34.2" y="108" text-anchor="middle">7</text>
</svg>
</div>

### วงจรของเลข 8 (Excess-3, AND/OR) {code=xs3; method=andor; digit=8}

$\mathbf{Sol}^{n}$

เลข $8$ ใช้ segment $a, b, c, d, e, f, g$ จึงเขียนวงจรเฉพาะ segment เหล่านี้ ต่อเข้าด้วยกันเป็นวงจรเดียว : ต้องมีทั้งตัวปกติและตัวคอมพลีเมนต์ของอินพุต จึงใช้เกต NOT ต่อจากอินพุต แต่ละพจน์ผลคูณใช้ AND เกต แล้วนำทุกพจน์เข้า OR เกต (พจน์ที่มีตัวแปรตัวเดียวต่อเข้า OR เกตได้เลย)

$\mathbf{Ans}\quad \begin{aligned}a &= \overline{B}+\overline{C}D+C\overline{D}+A \\ b &= C+B \\ c &= \overline{B}+\overline{D}+C \\ d &= \overline{B}D+\overline{C}D+\overline{A}C\overline{D}+A\overline{C} \\ e &= \overline{B}D+\overline{C}D \\ f &= CD+A\overline{C} \\ g &= \overline{C}D+BC+A\overline{C}+AD\end{aligned}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="638" height="1108" viewBox="0 0 638 1108" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<line x1="82" y1="52" x2="82" y2="524"/>
<line x1="34" y1="28" x2="34" y2="1054"/>
<line x1="160" y1="52" x2="160" y2="658"/>
<line x1="112" y1="28" x2="112" y2="950"/>
<line x1="238" y1="52" x2="238" y2="1016"/>
<line x1="190" y1="28" x2="190" y2="964"/>
<line x1="316" y1="52" x2="316" y2="552"/>
<line x1="268" y1="28" x2="268" y2="1068"/>
<line x1="160" y1="89" x2="484" y2="89"/>
<line x1="484" y1="89" x2="484" y2="132"/>
<line x1="484" y1="132" x2="498.5" y2="132"/>
<line x1="238" y1="120" x2="376" y2="120"/>
<line x1="268" y1="134" x2="376" y2="134"/>
<line x1="428" y1="127" x2="464" y2="127"/>
<line x1="464" y1="127" x2="464" y2="146"/>
<line x1="464" y1="146" x2="500.7" y2="146"/>
<line x1="190" y1="172" x2="376" y2="172"/>
<line x1="316" y1="186" x2="376" y2="186"/>
<line x1="428" y1="179" x2="454" y2="179"/>
<line x1="454" y1="179" x2="454" y2="160"/>
<line x1="454" y1="160" x2="500.7" y2="160"/>
<line x1="34" y1="217" x2="474" y2="217"/>
<line x1="474" y1="217" x2="474" y2="174"/>
<line x1="474" y1="174" x2="498.5" y2="174"/>
<line x1="554" y1="153" x2="584" y2="153"/>
<line x1="190" y1="259" x2="464" y2="259"/>
<line x1="464" y1="259" x2="464" y2="264"/>
<line x1="464" y1="264" x2="480.2" y2="264"/>
<line x1="112" y1="283" x2="454" y2="283"/>
<line x1="454" y1="283" x2="454" y2="278"/>
<line x1="454" y1="278" x2="480.2" y2="278"/>
<line x1="534" y1="271" x2="564" y2="271"/>
<line x1="160" y1="325" x2="474" y2="325"/>
<line x1="474" y1="325" x2="474" y2="335"/>
<line x1="474" y1="335" x2="489.2" y2="335"/>
<line x1="316" y1="349" x2="491" y2="349"/>
<line x1="190" y1="373" x2="464" y2="373"/>
<line x1="464" y1="373" x2="464" y2="363"/>
<line x1="464" y1="363" x2="489.2" y2="363"/>
<line x1="544" y1="349" x2="574" y2="349"/>
<line x1="160" y1="420" x2="376" y2="420"/>
<line x1="268" y1="434" x2="376" y2="434"/>
<line x1="428" y1="427" x2="484" y2="427"/>
<line x1="484" y1="427" x2="484" y2="491"/>
<line x1="484" y1="491" x2="498.5" y2="491"/>
<line x1="238" y1="472" x2="376" y2="472"/>
<line x1="268" y1="486" x2="376" y2="486"/>
<line x1="428" y1="479" x2="464" y2="479"/>
<line x1="464" y1="479" x2="464" y2="505"/>
<line x1="464" y1="505" x2="500.7" y2="505"/>
<line x1="82" y1="524" x2="376" y2="524"/>
<line x1="190" y1="538" x2="376" y2="538"/>
<line x1="316" y1="552" x2="376" y2="552"/>
<line x1="428" y1="538" x2="454" y2="538"/>
<line x1="454" y1="538" x2="454" y2="519"/>
<line x1="454" y1="519" x2="500.7" y2="519"/>
<line x1="34" y1="590" x2="376" y2="590"/>
<line x1="238" y1="604" x2="376" y2="604"/>
<line x1="428" y1="597" x2="474" y2="597"/>
<line x1="474" y1="597" x2="474" y2="533"/>
<line x1="474" y1="533" x2="498.5" y2="533"/>
<line x1="554" y1="512" x2="584" y2="512"/>
<line x1="160" y1="658" x2="376" y2="658"/>
<line x1="268" y1="672" x2="376" y2="672"/>
<line x1="428" y1="665" x2="464" y2="665"/>
<line x1="464" y1="665" x2="464" y2="684"/>
<line x1="464" y1="684" x2="480.2" y2="684"/>
<line x1="238" y1="710" x2="376" y2="710"/>
<line x1="268" y1="724" x2="376" y2="724"/>
<line x1="428" y1="717" x2="454" y2="717"/>
<line x1="454" y1="717" x2="454" y2="698"/>
<line x1="454" y1="698" x2="480.2" y2="698"/>
<line x1="534" y1="691" x2="564" y2="691"/>
<line x1="190" y1="778" x2="376" y2="778"/>
<line x1="268" y1="792" x2="376" y2="792"/>
<line x1="428" y1="785" x2="464" y2="785"/>
<line x1="464" y1="785" x2="464" y2="804"/>
<line x1="464" y1="804" x2="480.2" y2="804"/>
<line x1="34" y1="830" x2="376" y2="830"/>
<line x1="238" y1="844" x2="376" y2="844"/>
<line x1="428" y1="837" x2="454" y2="837"/>
<line x1="454" y1="837" x2="454" y2="818"/>
<line x1="454" y1="818" x2="480.2" y2="818"/>
<line x1="534" y1="811" x2="564" y2="811"/>
<line x1="238" y1="898" x2="376" y2="898"/>
<line x1="268" y1="912" x2="376" y2="912"/>
<line x1="428" y1="905" x2="484" y2="905"/>
<line x1="484" y1="905" x2="484" y2="962"/>
<line x1="484" y1="962" x2="498.5" y2="962"/>
<line x1="112" y1="950" x2="376" y2="950"/>
<line x1="190" y1="964" x2="376" y2="964"/>
<line x1="428" y1="957" x2="464" y2="957"/>
<line x1="464" y1="957" x2="464" y2="976"/>
<line x1="464" y1="976" x2="500.7" y2="976"/>
<line x1="34" y1="1002" x2="376" y2="1002"/>
<line x1="238" y1="1016" x2="376" y2="1016"/>
<line x1="428" y1="1009" x2="454" y2="1009"/>
<line x1="454" y1="1009" x2="454" y2="990"/>
<line x1="454" y1="990" x2="500.7" y2="990"/>
<line x1="34" y1="1054" x2="376" y2="1054"/>
<line x1="268" y1="1068" x2="376" y2="1068"/>
<line x1="428" y1="1061" x2="474" y2="1061"/>
<line x1="474" y1="1061" x2="474" y2="1004"/>
<line x1="474" y1="1004" x2="498.5" y2="1004"/>
<line x1="554" y1="983" x2="584" y2="983"/>
<line x1="34" y1="52" x2="41" y2="52"/>
<line x1="73" y1="52" x2="82" y2="52"/>
<line x1="112" y1="52" x2="119" y2="52"/>
<line x1="151" y1="52" x2="160" y2="52"/>
<line x1="190" y1="52" x2="197" y2="52"/>
<line x1="229" y1="52" x2="238" y2="52"/>
<line x1="268" y1="52" x2="275" y2="52"/>
<line x1="307" y1="52" x2="316" y2="52"/>
<path d="M376,106 H402 A26,21 0 0 1 402,148 H376 Z"/>
<path d="M376,158 H402 A26,21 0 0 1 402,200 H376 Z"/>
<path d="M494,118 C516,118 542,135.5 554,153 C542,170.5 516,188 494,188 Q508,153 494,118 Z"/>
<path d="M474,250 C496,250 522,260.5 534,271 C522,281.5 496,292 474,292 Q488,271 474,250 Z"/>
<path d="M484,321 C506,321 532,335 544,349 C532,363 506,377 484,377 Q498,349 484,321 Z"/>
<path d="M376,406 H402 A26,21 0 0 1 402,448 H376 Z"/>
<path d="M376,458 H402 A26,21 0 0 1 402,500 H376 Z"/>
<path d="M376,510 H402 A26,28 0 0 1 402,566 H376 Z"/>
<path d="M376,576 H402 A26,21 0 0 1 402,618 H376 Z"/>
<path d="M494,477 C516,477 542,494.5 554,512 C542,529.5 516,547 494,547 Q508,512 494,477 Z"/>
<path d="M376,644 H402 A26,21 0 0 1 402,686 H376 Z"/>
<path d="M376,696 H402 A26,21 0 0 1 402,738 H376 Z"/>
<path d="M474,670 C496,670 522,680.5 534,691 C522,701.5 496,712 474,712 Q488,691 474,670 Z"/>
<path d="M376,764 H402 A26,21 0 0 1 402,806 H376 Z"/>
<path d="M376,816 H402 A26,21 0 0 1 402,858 H376 Z"/>
<path d="M474,790 C496,790 522,800.5 534,811 C522,821.5 496,832 474,832 Q488,811 474,790 Z"/>
<path d="M376,884 H402 A26,21 0 0 1 402,926 H376 Z"/>
<path d="M376,936 H402 A26,21 0 0 1 402,978 H376 Z"/>
<path d="M376,988 H402 A26,21 0 0 1 402,1030 H376 Z"/>
<path d="M376,1040 H402 A26,21 0 0 1 402,1082 H376 Z"/>
<path d="M494,948 C516,948 542,965.5 554,983 C542,1000.5 516,1018 494,1018 Q508,983 494,948 Z"/>
<polygon points="41,40 41,64 63,52"/>
<circle cx="68" cy="52" r="5"/>
<polygon points="119,40 119,64 141,52"/>
<circle cx="146" cy="52" r="5"/>
<polygon points="197,40 197,64 219,52"/>
<circle cx="224" cy="52" r="5"/>
<polygon points="275,40 275,64 297,52"/>
<circle cx="302" cy="52" r="5"/>
<circle cx="160" cy="89" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="120" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="134" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="172" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316" cy="186" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="217" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="259" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="283" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="160" cy="325" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316" cy="349" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="373" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="160" cy="420" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="434" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="472" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="486" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="82" cy="524" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="538" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316" cy="552" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="590" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="604" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="160" cy="658" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="672" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="710" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="724" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="778" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="792" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="830" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="844" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="898" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="912" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="950" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="964" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="1002" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="1016" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="1054" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="1068" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="52" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="590" y="159">a</text>
<text x="570" y="277">b</text>
<text x="580" y="355">c</text>
<text x="590" y="518">d</text>
<text x="570" y="697">e</text>
<text x="570" y="817">f</text>
<text x="590" y="989">g</text>
<text x="34" y="22" text-anchor="middle">A</text>
<text x="112" y="22" text-anchor="middle">B</text>
<text x="190" y="22" text-anchor="middle">C</text>
<text x="268" y="22" text-anchor="middle">D</text>
</svg>
</div>

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="74" height="118" viewBox="0 0 74 118" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(10,8) scale(1.1)"><path d="M7,4 L37,4 L33,10 L11,10 Z" fill-opacity="1"/><path d="M38,5 L38,35 L32,31 L32,11 Z" fill-opacity="1"/><path d="M38,41 L38,71 L32,65 L32,45 Z" fill-opacity="1"/><path d="M7,72 L37,72 L33,66 L11,66 Z" fill-opacity="1"/><path d="M6,41 L6,71 L12,65 L12,45 Z" fill-opacity="1"/><path d="M6,5 L6,35 L12,31 L12,11 Z" fill-opacity="1"/><path d="M7,38 L11,34 L33,34 L37,38 L33,42 L11,42 Z" fill-opacity="1"/></g>
<text x="34.2" y="108" text-anchor="middle">8</text>
</svg>
</div>

### วงจรของเลข 9 (Excess-3, AND/OR) {code=xs3; method=andor; digit=9}

$\mathbf{Sol}^{n}$

เลข $9$ ใช้ segment $a, b, c, d, f, g$ จึงเขียนวงจรเฉพาะ segment เหล่านี้ ต่อเข้าด้วยกันเป็นวงจรเดียว : ต้องมีทั้งตัวปกติและตัวคอมพลีเมนต์ของอินพุต จึงใช้เกต NOT ต่อจากอินพุต แต่ละพจน์ผลคูณใช้ AND เกต แล้วนำทุกพจน์เข้า OR เกต (พจน์ที่มีตัวแปรตัวเดียวต่อเข้า OR เกตได้เลย)

$\mathbf{Ans}\quad \begin{aligned}a &= \overline{B}+\overline{C}D+C\overline{D}+A \\ b &= C+B \\ c &= \overline{B}+\overline{D}+C \\ d &= \overline{B}D+\overline{C}D+\overline{A}C\overline{D}+A\overline{C} \\ f &= CD+A\overline{C} \\ g &= \overline{C}D+BC+A\overline{C}+AD\end{aligned}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="638" height="988" viewBox="0 0 638 988" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<line x1="82" y1="52" x2="82" y2="524"/>
<line x1="34" y1="28" x2="34" y2="934"/>
<line x1="160" y1="52" x2="160" y2="420"/>
<line x1="112" y1="28" x2="112" y2="830"/>
<line x1="238" y1="52" x2="238" y2="896"/>
<line x1="190" y1="28" x2="190" y2="844"/>
<line x1="316" y1="52" x2="316" y2="552"/>
<line x1="268" y1="28" x2="268" y2="948"/>
<line x1="160" y1="89" x2="484" y2="89"/>
<line x1="484" y1="89" x2="484" y2="132"/>
<line x1="484" y1="132" x2="498.5" y2="132"/>
<line x1="238" y1="120" x2="376" y2="120"/>
<line x1="268" y1="134" x2="376" y2="134"/>
<line x1="428" y1="127" x2="464" y2="127"/>
<line x1="464" y1="127" x2="464" y2="146"/>
<line x1="464" y1="146" x2="500.7" y2="146"/>
<line x1="190" y1="172" x2="376" y2="172"/>
<line x1="316" y1="186" x2="376" y2="186"/>
<line x1="428" y1="179" x2="454" y2="179"/>
<line x1="454" y1="179" x2="454" y2="160"/>
<line x1="454" y1="160" x2="500.7" y2="160"/>
<line x1="34" y1="217" x2="474" y2="217"/>
<line x1="474" y1="217" x2="474" y2="174"/>
<line x1="474" y1="174" x2="498.5" y2="174"/>
<line x1="554" y1="153" x2="584" y2="153"/>
<line x1="190" y1="259" x2="464" y2="259"/>
<line x1="464" y1="259" x2="464" y2="264"/>
<line x1="464" y1="264" x2="480.2" y2="264"/>
<line x1="112" y1="283" x2="454" y2="283"/>
<line x1="454" y1="283" x2="454" y2="278"/>
<line x1="454" y1="278" x2="480.2" y2="278"/>
<line x1="534" y1="271" x2="564" y2="271"/>
<line x1="160" y1="325" x2="474" y2="325"/>
<line x1="474" y1="325" x2="474" y2="335"/>
<line x1="474" y1="335" x2="489.2" y2="335"/>
<line x1="316" y1="349" x2="491" y2="349"/>
<line x1="190" y1="373" x2="464" y2="373"/>
<line x1="464" y1="373" x2="464" y2="363"/>
<line x1="464" y1="363" x2="489.2" y2="363"/>
<line x1="544" y1="349" x2="574" y2="349"/>
<line x1="160" y1="420" x2="376" y2="420"/>
<line x1="268" y1="434" x2="376" y2="434"/>
<line x1="428" y1="427" x2="484" y2="427"/>
<line x1="484" y1="427" x2="484" y2="491"/>
<line x1="484" y1="491" x2="498.5" y2="491"/>
<line x1="238" y1="472" x2="376" y2="472"/>
<line x1="268" y1="486" x2="376" y2="486"/>
<line x1="428" y1="479" x2="464" y2="479"/>
<line x1="464" y1="479" x2="464" y2="505"/>
<line x1="464" y1="505" x2="500.7" y2="505"/>
<line x1="82" y1="524" x2="376" y2="524"/>
<line x1="190" y1="538" x2="376" y2="538"/>
<line x1="316" y1="552" x2="376" y2="552"/>
<line x1="428" y1="538" x2="454" y2="538"/>
<line x1="454" y1="538" x2="454" y2="519"/>
<line x1="454" y1="519" x2="500.7" y2="519"/>
<line x1="34" y1="590" x2="376" y2="590"/>
<line x1="238" y1="604" x2="376" y2="604"/>
<line x1="428" y1="597" x2="474" y2="597"/>
<line x1="474" y1="597" x2="474" y2="533"/>
<line x1="474" y1="533" x2="498.5" y2="533"/>
<line x1="554" y1="512" x2="584" y2="512"/>
<line x1="190" y1="658" x2="376" y2="658"/>
<line x1="268" y1="672" x2="376" y2="672"/>
<line x1="428" y1="665" x2="464" y2="665"/>
<line x1="464" y1="665" x2="464" y2="684"/>
<line x1="464" y1="684" x2="480.2" y2="684"/>
<line x1="34" y1="710" x2="376" y2="710"/>
<line x1="238" y1="724" x2="376" y2="724"/>
<line x1="428" y1="717" x2="454" y2="717"/>
<line x1="454" y1="717" x2="454" y2="698"/>
<line x1="454" y1="698" x2="480.2" y2="698"/>
<line x1="534" y1="691" x2="564" y2="691"/>
<line x1="238" y1="778" x2="376" y2="778"/>
<line x1="268" y1="792" x2="376" y2="792"/>
<line x1="428" y1="785" x2="484" y2="785"/>
<line x1="484" y1="785" x2="484" y2="842"/>
<line x1="484" y1="842" x2="498.5" y2="842"/>
<line x1="112" y1="830" x2="376" y2="830"/>
<line x1="190" y1="844" x2="376" y2="844"/>
<line x1="428" y1="837" x2="464" y2="837"/>
<line x1="464" y1="837" x2="464" y2="856"/>
<line x1="464" y1="856" x2="500.7" y2="856"/>
<line x1="34" y1="882" x2="376" y2="882"/>
<line x1="238" y1="896" x2="376" y2="896"/>
<line x1="428" y1="889" x2="454" y2="889"/>
<line x1="454" y1="889" x2="454" y2="870"/>
<line x1="454" y1="870" x2="500.7" y2="870"/>
<line x1="34" y1="934" x2="376" y2="934"/>
<line x1="268" y1="948" x2="376" y2="948"/>
<line x1="428" y1="941" x2="474" y2="941"/>
<line x1="474" y1="941" x2="474" y2="884"/>
<line x1="474" y1="884" x2="498.5" y2="884"/>
<line x1="554" y1="863" x2="584" y2="863"/>
<line x1="34" y1="52" x2="41" y2="52"/>
<line x1="73" y1="52" x2="82" y2="52"/>
<line x1="112" y1="52" x2="119" y2="52"/>
<line x1="151" y1="52" x2="160" y2="52"/>
<line x1="190" y1="52" x2="197" y2="52"/>
<line x1="229" y1="52" x2="238" y2="52"/>
<line x1="268" y1="52" x2="275" y2="52"/>
<line x1="307" y1="52" x2="316" y2="52"/>
<path d="M376,106 H402 A26,21 0 0 1 402,148 H376 Z"/>
<path d="M376,158 H402 A26,21 0 0 1 402,200 H376 Z"/>
<path d="M494,118 C516,118 542,135.5 554,153 C542,170.5 516,188 494,188 Q508,153 494,118 Z"/>
<path d="M474,250 C496,250 522,260.5 534,271 C522,281.5 496,292 474,292 Q488,271 474,250 Z"/>
<path d="M484,321 C506,321 532,335 544,349 C532,363 506,377 484,377 Q498,349 484,321 Z"/>
<path d="M376,406 H402 A26,21 0 0 1 402,448 H376 Z"/>
<path d="M376,458 H402 A26,21 0 0 1 402,500 H376 Z"/>
<path d="M376,510 H402 A26,28 0 0 1 402,566 H376 Z"/>
<path d="M376,576 H402 A26,21 0 0 1 402,618 H376 Z"/>
<path d="M494,477 C516,477 542,494.5 554,512 C542,529.5 516,547 494,547 Q508,512 494,477 Z"/>
<path d="M376,644 H402 A26,21 0 0 1 402,686 H376 Z"/>
<path d="M376,696 H402 A26,21 0 0 1 402,738 H376 Z"/>
<path d="M474,670 C496,670 522,680.5 534,691 C522,701.5 496,712 474,712 Q488,691 474,670 Z"/>
<path d="M376,764 H402 A26,21 0 0 1 402,806 H376 Z"/>
<path d="M376,816 H402 A26,21 0 0 1 402,858 H376 Z"/>
<path d="M376,868 H402 A26,21 0 0 1 402,910 H376 Z"/>
<path d="M376,920 H402 A26,21 0 0 1 402,962 H376 Z"/>
<path d="M494,828 C516,828 542,845.5 554,863 C542,880.5 516,898 494,898 Q508,863 494,828 Z"/>
<polygon points="41,40 41,64 63,52"/>
<circle cx="68" cy="52" r="5"/>
<polygon points="119,40 119,64 141,52"/>
<circle cx="146" cy="52" r="5"/>
<polygon points="197,40 197,64 219,52"/>
<circle cx="224" cy="52" r="5"/>
<polygon points="275,40 275,64 297,52"/>
<circle cx="302" cy="52" r="5"/>
<circle cx="160" cy="89" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="120" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="134" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="172" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316" cy="186" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="217" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="259" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="283" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="160" cy="325" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316" cy="349" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="373" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="160" cy="420" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="434" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="472" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="486" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="82" cy="524" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="538" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316" cy="552" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="590" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="604" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="658" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="672" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="710" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="724" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="778" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="792" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="830" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="844" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="882" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="896" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="934" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="948" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="52" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="590" y="159">a</text>
<text x="570" y="277">b</text>
<text x="580" y="355">c</text>
<text x="590" y="518">d</text>
<text x="570" y="697">f</text>
<text x="590" y="869">g</text>
<text x="34" y="22" text-anchor="middle">A</text>
<text x="112" y="22" text-anchor="middle">B</text>
<text x="190" y="22" text-anchor="middle">C</text>
<text x="268" y="22" text-anchor="middle">D</text>
</svg>
</div>

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="74" height="118" viewBox="0 0 74 118" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(10,8) scale(1.1)"><path d="M7,4 L37,4 L33,10 L11,10 Z" fill-opacity="1"/><path d="M38,5 L38,35 L32,31 L32,11 Z" fill-opacity="1"/><path d="M38,41 L38,71 L32,65 L32,45 Z" fill-opacity="1"/><path d="M7,72 L37,72 L33,66 L11,66 Z" fill-opacity="1"/><path d="M6,41 L6,71 L12,65 L12,45 Z" fill-opacity="0.1"/><path d="M6,5 L6,35 L12,31 L12,11 Z" fill-opacity="1"/><path d="M7,38 L11,34 L33,34 L37,38 L33,42 L11,42 Z" fill-opacity="1"/></g>
<text x="34.2" y="108" text-anchor="middle">9</text>
</svg>
</div>

### วงจรของเลข 0 (Excess-3, NAND อย่างเดียว) {code=xs3; method=nand; digit=0}

$\mathbf{Sol}^{n}$

เลข $0$ ใช้ segment $a, b, c, d, e, f$ จึงเขียนวงจรเฉพาะ segment เหล่านี้ ต่อเข้าด้วยกันเป็นวงจรเดียว : ใช้ NAND เกตทั้งสองชั้น : แต่ละพจน์ผลคูณเข้า NAND เกตชั้นแรก (พจน์ตัวแปรเดียวใช้ตัวที่คอมพลีเมนต์ต่อตรง) แล้วนำทุกเอาต์พุตเข้า NAND เกตชั้นที่สอง

$\mathbf{Ans}\quad \begin{aligned}a &= \overline{B\cdot \overline{\overline{C}D}\cdot \overline{C\overline{D}}\cdot \overline{A}} \\ b &= \overline{\overline{C}\cdot \overline{B}} \\ c &= \overline{B\cdot D\cdot \overline{C}} \\ d &= \overline{\overline{\overline{B}D}\cdot \overline{\overline{C}D}\cdot \overline{\overline{A}C\overline{D}}\cdot \overline{A\overline{C}}} \\ e &= \overline{\overline{\overline{B}D}\cdot \overline{\overline{C}D}} \\ f &= \overline{\overline{CD}\cdot \overline{A\overline{C}}}\end{aligned}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="650" height="884" viewBox="0 0 650 884" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<line x1="82" y1="52" x2="82" y2="524"/>
<line x1="34" y1="28" x2="34" y2="830"/>
<line x1="160" y1="52" x2="160" y2="658"/>
<line x1="112" y1="28" x2="112" y2="325"/>
<line x1="238" y1="52" x2="238" y2="844"/>
<line x1="190" y1="28" x2="190" y2="778"/>
<line x1="316" y1="52" x2="316" y2="552"/>
<line x1="268" y1="28" x2="268" y2="792"/>
<line x1="112" y1="89" x2="494" y2="89"/>
<line x1="494" y1="89" x2="494" y2="132"/>
<line x1="494" y1="132" x2="504" y2="132"/>
<line x1="238" y1="120" x2="376" y2="120"/>
<line x1="268" y1="134" x2="376" y2="134"/>
<line x1="438" y1="127" x2="474" y2="127"/>
<line x1="474" y1="127" x2="474" y2="146"/>
<line x1="474" y1="146" x2="504" y2="146"/>
<line x1="190" y1="172" x2="376" y2="172"/>
<line x1="316" y1="186" x2="376" y2="186"/>
<line x1="438" y1="179" x2="464" y2="179"/>
<line x1="464" y1="179" x2="464" y2="160"/>
<line x1="464" y1="160" x2="504" y2="160"/>
<line x1="82" y1="217" x2="484" y2="217"/>
<line x1="484" y1="217" x2="484" y2="174"/>
<line x1="484" y1="174" x2="504" y2="174"/>
<line x1="566" y1="153" x2="596" y2="153"/>
<line x1="238" y1="259" x2="474" y2="259"/>
<line x1="474" y1="259" x2="474" y2="264"/>
<line x1="474" y1="264" x2="484" y2="264"/>
<line x1="160" y1="283" x2="464" y2="283"/>
<line x1="464" y1="283" x2="464" y2="278"/>
<line x1="464" y1="278" x2="484" y2="278"/>
<line x1="546" y1="271" x2="576" y2="271"/>
<line x1="112" y1="325" x2="484" y2="325"/>
<line x1="484" y1="325" x2="484" y2="335"/>
<line x1="484" y1="335" x2="494" y2="335"/>
<line x1="268" y1="349" x2="494" y2="349"/>
<line x1="238" y1="373" x2="474" y2="373"/>
<line x1="474" y1="373" x2="474" y2="363"/>
<line x1="474" y1="363" x2="494" y2="363"/>
<line x1="556" y1="349" x2="586" y2="349"/>
<line x1="160" y1="420" x2="376" y2="420"/>
<line x1="268" y1="434" x2="376" y2="434"/>
<line x1="438" y1="427" x2="494" y2="427"/>
<line x1="494" y1="427" x2="494" y2="491"/>
<line x1="494" y1="491" x2="504" y2="491"/>
<line x1="238" y1="472" x2="376" y2="472"/>
<line x1="268" y1="486" x2="376" y2="486"/>
<line x1="438" y1="479" x2="474" y2="479"/>
<line x1="474" y1="479" x2="474" y2="505"/>
<line x1="474" y1="505" x2="504" y2="505"/>
<line x1="82" y1="524" x2="376" y2="524"/>
<line x1="190" y1="538" x2="376" y2="538"/>
<line x1="316" y1="552" x2="376" y2="552"/>
<line x1="438" y1="538" x2="464" y2="538"/>
<line x1="464" y1="538" x2="464" y2="519"/>
<line x1="464" y1="519" x2="504" y2="519"/>
<line x1="34" y1="590" x2="376" y2="590"/>
<line x1="238" y1="604" x2="376" y2="604"/>
<line x1="438" y1="597" x2="484" y2="597"/>
<line x1="484" y1="597" x2="484" y2="533"/>
<line x1="484" y1="533" x2="504" y2="533"/>
<line x1="566" y1="512" x2="596" y2="512"/>
<line x1="160" y1="658" x2="376" y2="658"/>
<line x1="268" y1="672" x2="376" y2="672"/>
<line x1="438" y1="665" x2="474" y2="665"/>
<line x1="474" y1="665" x2="474" y2="684"/>
<line x1="474" y1="684" x2="484" y2="684"/>
<line x1="238" y1="710" x2="376" y2="710"/>
<line x1="268" y1="724" x2="376" y2="724"/>
<line x1="438" y1="717" x2="464" y2="717"/>
<line x1="464" y1="717" x2="464" y2="698"/>
<line x1="464" y1="698" x2="484" y2="698"/>
<line x1="546" y1="691" x2="576" y2="691"/>
<line x1="190" y1="778" x2="376" y2="778"/>
<line x1="268" y1="792" x2="376" y2="792"/>
<line x1="438" y1="785" x2="474" y2="785"/>
<line x1="474" y1="785" x2="474" y2="804"/>
<line x1="474" y1="804" x2="484" y2="804"/>
<line x1="34" y1="830" x2="376" y2="830"/>
<line x1="238" y1="844" x2="376" y2="844"/>
<line x1="438" y1="837" x2="464" y2="837"/>
<line x1="464" y1="837" x2="464" y2="818"/>
<line x1="464" y1="818" x2="484" y2="818"/>
<line x1="546" y1="811" x2="576" y2="811"/>
<line x1="34" y1="52" x2="41" y2="52"/>
<line x1="73" y1="52" x2="82" y2="52"/>
<line x1="112" y1="52" x2="119" y2="52"/>
<line x1="151" y1="52" x2="160" y2="52"/>
<line x1="190" y1="52" x2="197" y2="52"/>
<line x1="229" y1="52" x2="238" y2="52"/>
<line x1="268" y1="52" x2="275" y2="52"/>
<line x1="307" y1="52" x2="316" y2="52"/>
<path d="M376,106 H402 A26,21 0 0 1 402,148 H376 Z"/>
<circle cx="433" cy="127" r="5"/>
<path d="M376,158 H402 A26,21 0 0 1 402,200 H376 Z"/>
<circle cx="433" cy="179" r="5"/>
<path d="M504,118 H530 A26,35 0 0 1 530,188 H504 Z"/>
<circle cx="561" cy="153" r="5"/>
<path d="M484,250 H510 A26,21 0 0 1 510,292 H484 Z"/>
<circle cx="541" cy="271" r="5"/>
<path d="M494,321 H520 A26,28 0 0 1 520,377 H494 Z"/>
<circle cx="551" cy="349" r="5"/>
<path d="M376,406 H402 A26,21 0 0 1 402,448 H376 Z"/>
<circle cx="433" cy="427" r="5"/>
<path d="M376,458 H402 A26,21 0 0 1 402,500 H376 Z"/>
<circle cx="433" cy="479" r="5"/>
<path d="M376,510 H402 A26,28 0 0 1 402,566 H376 Z"/>
<circle cx="433" cy="538" r="5"/>
<path d="M376,576 H402 A26,21 0 0 1 402,618 H376 Z"/>
<circle cx="433" cy="597" r="5"/>
<path d="M504,477 H530 A26,35 0 0 1 530,547 H504 Z"/>
<circle cx="561" cy="512" r="5"/>
<path d="M376,644 H402 A26,21 0 0 1 402,686 H376 Z"/>
<circle cx="433" cy="665" r="5"/>
<path d="M376,696 H402 A26,21 0 0 1 402,738 H376 Z"/>
<circle cx="433" cy="717" r="5"/>
<path d="M484,670 H510 A26,21 0 0 1 510,712 H484 Z"/>
<circle cx="541" cy="691" r="5"/>
<path d="M376,764 H402 A26,21 0 0 1 402,806 H376 Z"/>
<circle cx="433" cy="785" r="5"/>
<path d="M376,816 H402 A26,21 0 0 1 402,858 H376 Z"/>
<circle cx="433" cy="837" r="5"/>
<path d="M484,790 H510 A26,21 0 0 1 510,832 H484 Z"/>
<circle cx="541" cy="811" r="5"/>
<polygon points="41,40 41,64 63,52"/>
<circle cx="68" cy="52" r="5"/>
<polygon points="119,40 119,64 141,52"/>
<circle cx="146" cy="52" r="5"/>
<polygon points="197,40 197,64 219,52"/>
<circle cx="224" cy="52" r="5"/>
<polygon points="275,40 275,64 297,52"/>
<circle cx="302" cy="52" r="5"/>
<circle cx="112" cy="89" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="120" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="134" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="172" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316" cy="186" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="82" cy="217" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="259" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="160" cy="283" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="325" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="349" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="373" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="160" cy="420" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="434" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="472" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="486" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="82" cy="524" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="538" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316" cy="552" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="590" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="604" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="160" cy="658" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="672" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="710" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="724" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="778" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="792" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="830" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="844" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="52" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="602" y="159">a</text>
<text x="582" y="277">b</text>
<text x="592" y="355">c</text>
<text x="602" y="518">d</text>
<text x="582" y="697">e</text>
<text x="582" y="817">f</text>
<text x="34" y="22" text-anchor="middle">A</text>
<text x="112" y="22" text-anchor="middle">B</text>
<text x="190" y="22" text-anchor="middle">C</text>
<text x="268" y="22" text-anchor="middle">D</text>
</svg>
</div>

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="74" height="118" viewBox="0 0 74 118" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(10,8) scale(1.1)"><path d="M7,4 L37,4 L33,10 L11,10 Z" fill-opacity="1"/><path d="M38,5 L38,35 L32,31 L32,11 Z" fill-opacity="1"/><path d="M38,41 L38,71 L32,65 L32,45 Z" fill-opacity="1"/><path d="M7,72 L37,72 L33,66 L11,66 Z" fill-opacity="1"/><path d="M6,41 L6,71 L12,65 L12,45 Z" fill-opacity="1"/><path d="M6,5 L6,35 L12,31 L12,11 Z" fill-opacity="1"/><path d="M7,38 L11,34 L33,34 L37,38 L33,42 L11,42 Z" fill-opacity="0.1"/></g>
<text x="34.2" y="108" text-anchor="middle">0</text>
</svg>
</div>

### วงจรของเลข 1 (Excess-3, NAND อย่างเดียว) {code=xs3; method=nand; digit=1}

$\mathbf{Sol}^{n}$

เลข $1$ ใช้ segment $b, c$ จึงเขียนวงจรเฉพาะ segment เหล่านี้ ต่อเข้าด้วยกันเป็นวงจรเดียว : ใช้ NAND เกตทั้งสองชั้น : แต่ละพจน์ผลคูณเข้า NAND เกตชั้นแรก (พจน์ตัวแปรเดียวใช้ตัวที่คอมพลีเมนต์ต่อตรง) แล้วนำทุกเอาต์พุตเข้า NAND เกตชั้นที่สอง

$\mathbf{Ans}\quad \begin{aligned}b &= \overline{\overline{C}\cdot \overline{B}} \\ c &= \overline{B\cdot D\cdot \overline{C}}\end{aligned}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="202" height="238" viewBox="0 0 202 238" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<line x1="82" y1="52" x2="82" y2="115"/>
<line x1="34" y1="28" x2="34" y2="157"/>
<line x1="160" y1="52" x2="160" y2="205"/>
<line x1="112" y1="28" x2="112" y2="52"/>
<line x1="190" y1="28" x2="190" y2="181"/>
<line x1="160" y1="91" x2="36" y2="91"/>
<line x1="36" y1="91" x2="36" y2="96"/>
<line x1="36" y1="96" x2="46" y2="96"/>
<line x1="82" y1="115" x2="26" y2="115"/>
<line x1="26" y1="115" x2="26" y2="110"/>
<line x1="26" y1="110" x2="46" y2="110"/>
<line x1="108" y1="103" x2="138" y2="103"/>
<line x1="34" y1="157" x2="46" y2="157"/>
<line x1="46" y1="157" x2="46" y2="167"/>
<line x1="46" y1="167" x2="56" y2="167"/>
<line x1="190" y1="181" x2="56" y2="181"/>
<line x1="160" y1="205" x2="36" y2="205"/>
<line x1="36" y1="205" x2="36" y2="195"/>
<line x1="36" y1="195" x2="56" y2="195"/>
<line x1="118" y1="181" x2="148" y2="181"/>
<line x1="34" y1="52" x2="41" y2="52"/>
<line x1="73" y1="52" x2="82" y2="52"/>
<line x1="112" y1="52" x2="119" y2="52"/>
<line x1="151" y1="52" x2="160" y2="52"/>
<path d="M46,82 H72 A26,21 0 0 1 72,124 H46 Z"/>
<circle cx="103" cy="103" r="5"/>
<path d="M56,153 H82 A26,28 0 0 1 82,209 H56 Z"/>
<circle cx="113" cy="181" r="5"/>
<polygon points="41,40 41,64 63,52"/>
<circle cx="68" cy="52" r="5"/>
<polygon points="119,40 119,64 141,52"/>
<circle cx="146" cy="52" r="5"/>
<circle cx="160" cy="91" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="82" cy="115" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="157" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="181" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="160" cy="205" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="52" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="144" y="109">b</text>
<text x="154" y="187">c</text>
<text x="34" y="22" text-anchor="middle">B</text>
<text x="112" y="22" text-anchor="middle">C</text>
<text x="190" y="22" text-anchor="middle">D</text>
</svg>
</div>

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="74" height="118" viewBox="0 0 74 118" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(10,8) scale(1.1)"><path d="M7,4 L37,4 L33,10 L11,10 Z" fill-opacity="0.1"/><path d="M38,5 L38,35 L32,31 L32,11 Z" fill-opacity="1"/><path d="M38,41 L38,71 L32,65 L32,45 Z" fill-opacity="1"/><path d="M7,72 L37,72 L33,66 L11,66 Z" fill-opacity="0.1"/><path d="M6,41 L6,71 L12,65 L12,45 Z" fill-opacity="0.1"/><path d="M6,5 L6,35 L12,31 L12,11 Z" fill-opacity="0.1"/><path d="M7,38 L11,34 L33,34 L37,38 L33,42 L11,42 Z" fill-opacity="0.1"/></g>
<text x="34.2" y="108" text-anchor="middle">1</text>
</svg>
</div>

### วงจรของเลข 2 (Excess-3, NAND อย่างเดียว) {code=xs3; method=nand; digit=2}

$\mathbf{Sol}^{n}$

เลข $2$ ใช้ segment $a, b, d, e, g$ จึงเขียนวงจรเฉพาะ segment เหล่านี้ ต่อเข้าด้วยกันเป็นวงจรเดียว : ใช้ NAND เกตทั้งสองชั้น : แต่ละพจน์ผลคูณเข้า NAND เกตชั้นแรก (พจน์ตัวแปรเดียวใช้ตัวที่คอมพลีเมนต์ต่อตรง) แล้วนำทุกเอาต์พุตเข้า NAND เกตชั้นที่สอง

$\mathbf{Ans}\quad \begin{aligned}a &= \overline{B\cdot \overline{\overline{C}D}\cdot \overline{C\overline{D}}\cdot \overline{A}} \\ b &= \overline{\overline{C}\cdot \overline{B}} \\ d &= \overline{\overline{\overline{B}D}\cdot \overline{\overline{C}D}\cdot \overline{\overline{A}C\overline{D}}\cdot \overline{A\overline{C}}} \\ e &= \overline{\overline{\overline{B}D}\cdot \overline{\overline{C}D}} \\ g &= \overline{\overline{\overline{C}D}\cdot \overline{BC}\cdot \overline{A\overline{C}}\cdot \overline{AD}}\end{aligned}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="650" height="900" viewBox="0 0 650 900" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<line x1="82" y1="52" x2="82" y2="436"/>
<line x1="34" y1="28" x2="34" y2="846"/>
<line x1="160" y1="52" x2="160" y2="570"/>
<line x1="112" y1="28" x2="112" y2="742"/>
<line x1="238" y1="52" x2="238" y2="808"/>
<line x1="190" y1="28" x2="190" y2="756"/>
<line x1="316" y1="52" x2="316" y2="464"/>
<line x1="268" y1="28" x2="268" y2="860"/>
<line x1="112" y1="89" x2="494" y2="89"/>
<line x1="494" y1="89" x2="494" y2="132"/>
<line x1="494" y1="132" x2="504" y2="132"/>
<line x1="238" y1="120" x2="376" y2="120"/>
<line x1="268" y1="134" x2="376" y2="134"/>
<line x1="438" y1="127" x2="474" y2="127"/>
<line x1="474" y1="127" x2="474" y2="146"/>
<line x1="474" y1="146" x2="504" y2="146"/>
<line x1="190" y1="172" x2="376" y2="172"/>
<line x1="316" y1="186" x2="376" y2="186"/>
<line x1="438" y1="179" x2="464" y2="179"/>
<line x1="464" y1="179" x2="464" y2="160"/>
<line x1="464" y1="160" x2="504" y2="160"/>
<line x1="82" y1="217" x2="484" y2="217"/>
<line x1="484" y1="217" x2="484" y2="174"/>
<line x1="484" y1="174" x2="504" y2="174"/>
<line x1="566" y1="153" x2="596" y2="153"/>
<line x1="238" y1="259" x2="474" y2="259"/>
<line x1="474" y1="259" x2="474" y2="264"/>
<line x1="474" y1="264" x2="484" y2="264"/>
<line x1="160" y1="283" x2="464" y2="283"/>
<line x1="464" y1="283" x2="464" y2="278"/>
<line x1="464" y1="278" x2="484" y2="278"/>
<line x1="546" y1="271" x2="576" y2="271"/>
<line x1="160" y1="332" x2="376" y2="332"/>
<line x1="268" y1="346" x2="376" y2="346"/>
<line x1="438" y1="339" x2="494" y2="339"/>
<line x1="494" y1="339" x2="494" y2="403"/>
<line x1="494" y1="403" x2="504" y2="403"/>
<line x1="238" y1="384" x2="376" y2="384"/>
<line x1="268" y1="398" x2="376" y2="398"/>
<line x1="438" y1="391" x2="474" y2="391"/>
<line x1="474" y1="391" x2="474" y2="417"/>
<line x1="474" y1="417" x2="504" y2="417"/>
<line x1="82" y1="436" x2="376" y2="436"/>
<line x1="190" y1="450" x2="376" y2="450"/>
<line x1="316" y1="464" x2="376" y2="464"/>
<line x1="438" y1="450" x2="464" y2="450"/>
<line x1="464" y1="450" x2="464" y2="431"/>
<line x1="464" y1="431" x2="504" y2="431"/>
<line x1="34" y1="502" x2="376" y2="502"/>
<line x1="238" y1="516" x2="376" y2="516"/>
<line x1="438" y1="509" x2="484" y2="509"/>
<line x1="484" y1="509" x2="484" y2="445"/>
<line x1="484" y1="445" x2="504" y2="445"/>
<line x1="566" y1="424" x2="596" y2="424"/>
<line x1="160" y1="570" x2="376" y2="570"/>
<line x1="268" y1="584" x2="376" y2="584"/>
<line x1="438" y1="577" x2="474" y2="577"/>
<line x1="474" y1="577" x2="474" y2="596"/>
<line x1="474" y1="596" x2="484" y2="596"/>
<line x1="238" y1="622" x2="376" y2="622"/>
<line x1="268" y1="636" x2="376" y2="636"/>
<line x1="438" y1="629" x2="464" y2="629"/>
<line x1="464" y1="629" x2="464" y2="610"/>
<line x1="464" y1="610" x2="484" y2="610"/>
<line x1="546" y1="603" x2="576" y2="603"/>
<line x1="238" y1="690" x2="376" y2="690"/>
<line x1="268" y1="704" x2="376" y2="704"/>
<line x1="438" y1="697" x2="494" y2="697"/>
<line x1="494" y1="697" x2="494" y2="754"/>
<line x1="494" y1="754" x2="504" y2="754"/>
<line x1="112" y1="742" x2="376" y2="742"/>
<line x1="190" y1="756" x2="376" y2="756"/>
<line x1="438" y1="749" x2="474" y2="749"/>
<line x1="474" y1="749" x2="474" y2="768"/>
<line x1="474" y1="768" x2="504" y2="768"/>
<line x1="34" y1="794" x2="376" y2="794"/>
<line x1="238" y1="808" x2="376" y2="808"/>
<line x1="438" y1="801" x2="464" y2="801"/>
<line x1="464" y1="801" x2="464" y2="782"/>
<line x1="464" y1="782" x2="504" y2="782"/>
<line x1="34" y1="846" x2="376" y2="846"/>
<line x1="268" y1="860" x2="376" y2="860"/>
<line x1="438" y1="853" x2="484" y2="853"/>
<line x1="484" y1="853" x2="484" y2="796"/>
<line x1="484" y1="796" x2="504" y2="796"/>
<line x1="566" y1="775" x2="596" y2="775"/>
<line x1="34" y1="52" x2="41" y2="52"/>
<line x1="73" y1="52" x2="82" y2="52"/>
<line x1="112" y1="52" x2="119" y2="52"/>
<line x1="151" y1="52" x2="160" y2="52"/>
<line x1="190" y1="52" x2="197" y2="52"/>
<line x1="229" y1="52" x2="238" y2="52"/>
<line x1="268" y1="52" x2="275" y2="52"/>
<line x1="307" y1="52" x2="316" y2="52"/>
<path d="M376,106 H402 A26,21 0 0 1 402,148 H376 Z"/>
<circle cx="433" cy="127" r="5"/>
<path d="M376,158 H402 A26,21 0 0 1 402,200 H376 Z"/>
<circle cx="433" cy="179" r="5"/>
<path d="M504,118 H530 A26,35 0 0 1 530,188 H504 Z"/>
<circle cx="561" cy="153" r="5"/>
<path d="M484,250 H510 A26,21 0 0 1 510,292 H484 Z"/>
<circle cx="541" cy="271" r="5"/>
<path d="M376,318 H402 A26,21 0 0 1 402,360 H376 Z"/>
<circle cx="433" cy="339" r="5"/>
<path d="M376,370 H402 A26,21 0 0 1 402,412 H376 Z"/>
<circle cx="433" cy="391" r="5"/>
<path d="M376,422 H402 A26,28 0 0 1 402,478 H376 Z"/>
<circle cx="433" cy="450" r="5"/>
<path d="M376,488 H402 A26,21 0 0 1 402,530 H376 Z"/>
<circle cx="433" cy="509" r="5"/>
<path d="M504,389 H530 A26,35 0 0 1 530,459 H504 Z"/>
<circle cx="561" cy="424" r="5"/>
<path d="M376,556 H402 A26,21 0 0 1 402,598 H376 Z"/>
<circle cx="433" cy="577" r="5"/>
<path d="M376,608 H402 A26,21 0 0 1 402,650 H376 Z"/>
<circle cx="433" cy="629" r="5"/>
<path d="M484,582 H510 A26,21 0 0 1 510,624 H484 Z"/>
<circle cx="541" cy="603" r="5"/>
<path d="M376,676 H402 A26,21 0 0 1 402,718 H376 Z"/>
<circle cx="433" cy="697" r="5"/>
<path d="M376,728 H402 A26,21 0 0 1 402,770 H376 Z"/>
<circle cx="433" cy="749" r="5"/>
<path d="M376,780 H402 A26,21 0 0 1 402,822 H376 Z"/>
<circle cx="433" cy="801" r="5"/>
<path d="M376,832 H402 A26,21 0 0 1 402,874 H376 Z"/>
<circle cx="433" cy="853" r="5"/>
<path d="M504,740 H530 A26,35 0 0 1 530,810 H504 Z"/>
<circle cx="561" cy="775" r="5"/>
<polygon points="41,40 41,64 63,52"/>
<circle cx="68" cy="52" r="5"/>
<polygon points="119,40 119,64 141,52"/>
<circle cx="146" cy="52" r="5"/>
<polygon points="197,40 197,64 219,52"/>
<circle cx="224" cy="52" r="5"/>
<polygon points="275,40 275,64 297,52"/>
<circle cx="302" cy="52" r="5"/>
<circle cx="112" cy="89" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="120" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="134" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="172" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316" cy="186" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="82" cy="217" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="259" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="160" cy="283" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="160" cy="332" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="346" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="384" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="398" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="82" cy="436" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="450" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316" cy="464" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="502" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="516" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="160" cy="570" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="584" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="622" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="636" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="690" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="704" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="742" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="756" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="794" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="808" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="846" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="860" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="52" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="602" y="159">a</text>
<text x="582" y="277">b</text>
<text x="602" y="430">d</text>
<text x="582" y="609">e</text>
<text x="602" y="781">g</text>
<text x="34" y="22" text-anchor="middle">A</text>
<text x="112" y="22" text-anchor="middle">B</text>
<text x="190" y="22" text-anchor="middle">C</text>
<text x="268" y="22" text-anchor="middle">D</text>
</svg>
</div>

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="74" height="118" viewBox="0 0 74 118" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(10,8) scale(1.1)"><path d="M7,4 L37,4 L33,10 L11,10 Z" fill-opacity="1"/><path d="M38,5 L38,35 L32,31 L32,11 Z" fill-opacity="1"/><path d="M38,41 L38,71 L32,65 L32,45 Z" fill-opacity="0.1"/><path d="M7,72 L37,72 L33,66 L11,66 Z" fill-opacity="1"/><path d="M6,41 L6,71 L12,65 L12,45 Z" fill-opacity="1"/><path d="M6,5 L6,35 L12,31 L12,11 Z" fill-opacity="0.1"/><path d="M7,38 L11,34 L33,34 L37,38 L33,42 L11,42 Z" fill-opacity="1"/></g>
<text x="34.2" y="108" text-anchor="middle">2</text>
</svg>
</div>

### วงจรของเลข 3 (Excess-3, NAND อย่างเดียว) {code=xs3; method=nand; digit=3}

$\mathbf{Sol}^{n}$

เลข $3$ ใช้ segment $a, b, c, d, g$ จึงเขียนวงจรเฉพาะ segment เหล่านี้ ต่อเข้าด้วยกันเป็นวงจรเดียว : ใช้ NAND เกตทั้งสองชั้น : แต่ละพจน์ผลคูณเข้า NAND เกตชั้นแรก (พจน์ตัวแปรเดียวใช้ตัวที่คอมพลีเมนต์ต่อตรง) แล้วนำทุกเอาต์พุตเข้า NAND เกตชั้นที่สอง

$\mathbf{Ans}\quad \begin{aligned}a &= \overline{B\cdot \overline{\overline{C}D}\cdot \overline{C\overline{D}}\cdot \overline{A}} \\ b &= \overline{\overline{C}\cdot \overline{B}} \\ c &= \overline{B\cdot D\cdot \overline{C}} \\ d &= \overline{\overline{\overline{B}D}\cdot \overline{\overline{C}D}\cdot \overline{\overline{A}C\overline{D}}\cdot \overline{A\overline{C}}} \\ g &= \overline{\overline{\overline{C}D}\cdot \overline{BC}\cdot \overline{A\overline{C}}\cdot \overline{AD}}\end{aligned}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="650" height="868" viewBox="0 0 650 868" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<line x1="82" y1="52" x2="82" y2="524"/>
<line x1="34" y1="28" x2="34" y2="814"/>
<line x1="160" y1="52" x2="160" y2="420"/>
<line x1="112" y1="28" x2="112" y2="710"/>
<line x1="238" y1="52" x2="238" y2="776"/>
<line x1="190" y1="28" x2="190" y2="724"/>
<line x1="316" y1="52" x2="316" y2="552"/>
<line x1="268" y1="28" x2="268" y2="828"/>
<line x1="112" y1="89" x2="494" y2="89"/>
<line x1="494" y1="89" x2="494" y2="132"/>
<line x1="494" y1="132" x2="504" y2="132"/>
<line x1="238" y1="120" x2="376" y2="120"/>
<line x1="268" y1="134" x2="376" y2="134"/>
<line x1="438" y1="127" x2="474" y2="127"/>
<line x1="474" y1="127" x2="474" y2="146"/>
<line x1="474" y1="146" x2="504" y2="146"/>
<line x1="190" y1="172" x2="376" y2="172"/>
<line x1="316" y1="186" x2="376" y2="186"/>
<line x1="438" y1="179" x2="464" y2="179"/>
<line x1="464" y1="179" x2="464" y2="160"/>
<line x1="464" y1="160" x2="504" y2="160"/>
<line x1="82" y1="217" x2="484" y2="217"/>
<line x1="484" y1="217" x2="484" y2="174"/>
<line x1="484" y1="174" x2="504" y2="174"/>
<line x1="566" y1="153" x2="596" y2="153"/>
<line x1="238" y1="259" x2="474" y2="259"/>
<line x1="474" y1="259" x2="474" y2="264"/>
<line x1="474" y1="264" x2="484" y2="264"/>
<line x1="160" y1="283" x2="464" y2="283"/>
<line x1="464" y1="283" x2="464" y2="278"/>
<line x1="464" y1="278" x2="484" y2="278"/>
<line x1="546" y1="271" x2="576" y2="271"/>
<line x1="112" y1="325" x2="484" y2="325"/>
<line x1="484" y1="325" x2="484" y2="335"/>
<line x1="484" y1="335" x2="494" y2="335"/>
<line x1="268" y1="349" x2="494" y2="349"/>
<line x1="238" y1="373" x2="474" y2="373"/>
<line x1="474" y1="373" x2="474" y2="363"/>
<line x1="474" y1="363" x2="494" y2="363"/>
<line x1="556" y1="349" x2="586" y2="349"/>
<line x1="160" y1="420" x2="376" y2="420"/>
<line x1="268" y1="434" x2="376" y2="434"/>
<line x1="438" y1="427" x2="494" y2="427"/>
<line x1="494" y1="427" x2="494" y2="491"/>
<line x1="494" y1="491" x2="504" y2="491"/>
<line x1="238" y1="472" x2="376" y2="472"/>
<line x1="268" y1="486" x2="376" y2="486"/>
<line x1="438" y1="479" x2="474" y2="479"/>
<line x1="474" y1="479" x2="474" y2="505"/>
<line x1="474" y1="505" x2="504" y2="505"/>
<line x1="82" y1="524" x2="376" y2="524"/>
<line x1="190" y1="538" x2="376" y2="538"/>
<line x1="316" y1="552" x2="376" y2="552"/>
<line x1="438" y1="538" x2="464" y2="538"/>
<line x1="464" y1="538" x2="464" y2="519"/>
<line x1="464" y1="519" x2="504" y2="519"/>
<line x1="34" y1="590" x2="376" y2="590"/>
<line x1="238" y1="604" x2="376" y2="604"/>
<line x1="438" y1="597" x2="484" y2="597"/>
<line x1="484" y1="597" x2="484" y2="533"/>
<line x1="484" y1="533" x2="504" y2="533"/>
<line x1="566" y1="512" x2="596" y2="512"/>
<line x1="238" y1="658" x2="376" y2="658"/>
<line x1="268" y1="672" x2="376" y2="672"/>
<line x1="438" y1="665" x2="494" y2="665"/>
<line x1="494" y1="665" x2="494" y2="722"/>
<line x1="494" y1="722" x2="504" y2="722"/>
<line x1="112" y1="710" x2="376" y2="710"/>
<line x1="190" y1="724" x2="376" y2="724"/>
<line x1="438" y1="717" x2="474" y2="717"/>
<line x1="474" y1="717" x2="474" y2="736"/>
<line x1="474" y1="736" x2="504" y2="736"/>
<line x1="34" y1="762" x2="376" y2="762"/>
<line x1="238" y1="776" x2="376" y2="776"/>
<line x1="438" y1="769" x2="464" y2="769"/>
<line x1="464" y1="769" x2="464" y2="750"/>
<line x1="464" y1="750" x2="504" y2="750"/>
<line x1="34" y1="814" x2="376" y2="814"/>
<line x1="268" y1="828" x2="376" y2="828"/>
<line x1="438" y1="821" x2="484" y2="821"/>
<line x1="484" y1="821" x2="484" y2="764"/>
<line x1="484" y1="764" x2="504" y2="764"/>
<line x1="566" y1="743" x2="596" y2="743"/>
<line x1="34" y1="52" x2="41" y2="52"/>
<line x1="73" y1="52" x2="82" y2="52"/>
<line x1="112" y1="52" x2="119" y2="52"/>
<line x1="151" y1="52" x2="160" y2="52"/>
<line x1="190" y1="52" x2="197" y2="52"/>
<line x1="229" y1="52" x2="238" y2="52"/>
<line x1="268" y1="52" x2="275" y2="52"/>
<line x1="307" y1="52" x2="316" y2="52"/>
<path d="M376,106 H402 A26,21 0 0 1 402,148 H376 Z"/>
<circle cx="433" cy="127" r="5"/>
<path d="M376,158 H402 A26,21 0 0 1 402,200 H376 Z"/>
<circle cx="433" cy="179" r="5"/>
<path d="M504,118 H530 A26,35 0 0 1 530,188 H504 Z"/>
<circle cx="561" cy="153" r="5"/>
<path d="M484,250 H510 A26,21 0 0 1 510,292 H484 Z"/>
<circle cx="541" cy="271" r="5"/>
<path d="M494,321 H520 A26,28 0 0 1 520,377 H494 Z"/>
<circle cx="551" cy="349" r="5"/>
<path d="M376,406 H402 A26,21 0 0 1 402,448 H376 Z"/>
<circle cx="433" cy="427" r="5"/>
<path d="M376,458 H402 A26,21 0 0 1 402,500 H376 Z"/>
<circle cx="433" cy="479" r="5"/>
<path d="M376,510 H402 A26,28 0 0 1 402,566 H376 Z"/>
<circle cx="433" cy="538" r="5"/>
<path d="M376,576 H402 A26,21 0 0 1 402,618 H376 Z"/>
<circle cx="433" cy="597" r="5"/>
<path d="M504,477 H530 A26,35 0 0 1 530,547 H504 Z"/>
<circle cx="561" cy="512" r="5"/>
<path d="M376,644 H402 A26,21 0 0 1 402,686 H376 Z"/>
<circle cx="433" cy="665" r="5"/>
<path d="M376,696 H402 A26,21 0 0 1 402,738 H376 Z"/>
<circle cx="433" cy="717" r="5"/>
<path d="M376,748 H402 A26,21 0 0 1 402,790 H376 Z"/>
<circle cx="433" cy="769" r="5"/>
<path d="M376,800 H402 A26,21 0 0 1 402,842 H376 Z"/>
<circle cx="433" cy="821" r="5"/>
<path d="M504,708 H530 A26,35 0 0 1 530,778 H504 Z"/>
<circle cx="561" cy="743" r="5"/>
<polygon points="41,40 41,64 63,52"/>
<circle cx="68" cy="52" r="5"/>
<polygon points="119,40 119,64 141,52"/>
<circle cx="146" cy="52" r="5"/>
<polygon points="197,40 197,64 219,52"/>
<circle cx="224" cy="52" r="5"/>
<polygon points="275,40 275,64 297,52"/>
<circle cx="302" cy="52" r="5"/>
<circle cx="112" cy="89" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="120" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="134" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="172" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316" cy="186" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="82" cy="217" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="259" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="160" cy="283" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="325" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="349" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="373" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="160" cy="420" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="434" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="472" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="486" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="82" cy="524" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="538" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316" cy="552" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="590" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="604" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="658" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="672" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="710" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="724" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="762" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="776" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="814" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="828" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="52" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="602" y="159">a</text>
<text x="582" y="277">b</text>
<text x="592" y="355">c</text>
<text x="602" y="518">d</text>
<text x="602" y="749">g</text>
<text x="34" y="22" text-anchor="middle">A</text>
<text x="112" y="22" text-anchor="middle">B</text>
<text x="190" y="22" text-anchor="middle">C</text>
<text x="268" y="22" text-anchor="middle">D</text>
</svg>
</div>

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="74" height="118" viewBox="0 0 74 118" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(10,8) scale(1.1)"><path d="M7,4 L37,4 L33,10 L11,10 Z" fill-opacity="1"/><path d="M38,5 L38,35 L32,31 L32,11 Z" fill-opacity="1"/><path d="M38,41 L38,71 L32,65 L32,45 Z" fill-opacity="1"/><path d="M7,72 L37,72 L33,66 L11,66 Z" fill-opacity="1"/><path d="M6,41 L6,71 L12,65 L12,45 Z" fill-opacity="0.1"/><path d="M6,5 L6,35 L12,31 L12,11 Z" fill-opacity="0.1"/><path d="M7,38 L11,34 L33,34 L37,38 L33,42 L11,42 Z" fill-opacity="1"/></g>
<text x="34.2" y="108" text-anchor="middle">3</text>
</svg>
</div>

### วงจรของเลข 4 (Excess-3, NAND อย่างเดียว) {code=xs3; method=nand; digit=4}

$\mathbf{Sol}^{n}$

เลข $4$ ใช้ segment $b, c, f, g$ จึงเขียนวงจรเฉพาะ segment เหล่านี้ ต่อเข้าด้วยกันเป็นวงจรเดียว : ใช้ NAND เกตทั้งสองชั้น : แต่ละพจน์ผลคูณเข้า NAND เกตชั้นแรก (พจน์ตัวแปรเดียวใช้ตัวที่คอมพลีเมนต์ต่อตรง) แล้วนำทุกเอาต์พุตเข้า NAND เกตชั้นที่สอง

$\mathbf{Ans}\quad \begin{aligned}b &= \overline{\overline{C}\cdot \overline{B}} \\ c &= \overline{B\cdot D\cdot \overline{C}} \\ f &= \overline{\overline{CD}\cdot \overline{A\overline{C}}} \\ g &= \overline{\overline{\overline{C}D}\cdot \overline{BC}\cdot \overline{A\overline{C}}\cdot \overline{AD}}\end{aligned}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="558" height="582" viewBox="0 0 558 582" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<line x1="34" y1="28" x2="34" y2="528"/>
<line x1="114" y1="52" x2="114" y2="115"/>
<line x1="66" y1="28" x2="66" y2="424"/>
<line x1="192" y1="52" x2="192" y2="490"/>
<line x1="144" y1="28" x2="144" y2="438"/>
<line x1="222" y1="28" x2="222" y2="542"/>
<line x1="192" y1="91" x2="382" y2="91"/>
<line x1="382" y1="91" x2="382" y2="96"/>
<line x1="382" y1="96" x2="392" y2="96"/>
<line x1="114" y1="115" x2="372" y2="115"/>
<line x1="372" y1="115" x2="372" y2="110"/>
<line x1="372" y1="110" x2="392" y2="110"/>
<line x1="454" y1="103" x2="484" y2="103"/>
<line x1="66" y1="157" x2="392" y2="157"/>
<line x1="392" y1="157" x2="392" y2="167"/>
<line x1="392" y1="167" x2="402" y2="167"/>
<line x1="222" y1="181" x2="402" y2="181"/>
<line x1="192" y1="205" x2="382" y2="205"/>
<line x1="382" y1="205" x2="382" y2="195"/>
<line x1="382" y1="195" x2="402" y2="195"/>
<line x1="464" y1="181" x2="494" y2="181"/>
<line x1="144" y1="252" x2="284" y2="252"/>
<line x1="222" y1="266" x2="284" y2="266"/>
<line x1="346" y1="259" x2="382" y2="259"/>
<line x1="382" y1="259" x2="382" y2="278"/>
<line x1="382" y1="278" x2="392" y2="278"/>
<line x1="34" y1="304" x2="284" y2="304"/>
<line x1="192" y1="318" x2="284" y2="318"/>
<line x1="346" y1="311" x2="372" y2="311"/>
<line x1="372" y1="311" x2="372" y2="292"/>
<line x1="372" y1="292" x2="392" y2="292"/>
<line x1="454" y1="285" x2="484" y2="285"/>
<line x1="192" y1="372" x2="284" y2="372"/>
<line x1="222" y1="386" x2="284" y2="386"/>
<line x1="346" y1="379" x2="402" y2="379"/>
<line x1="402" y1="379" x2="402" y2="436"/>
<line x1="402" y1="436" x2="412" y2="436"/>
<line x1="66" y1="424" x2="284" y2="424"/>
<line x1="144" y1="438" x2="284" y2="438"/>
<line x1="346" y1="431" x2="382" y2="431"/>
<line x1="382" y1="431" x2="382" y2="450"/>
<line x1="382" y1="450" x2="412" y2="450"/>
<line x1="34" y1="476" x2="284" y2="476"/>
<line x1="192" y1="490" x2="284" y2="490"/>
<line x1="346" y1="483" x2="372" y2="483"/>
<line x1="372" y1="483" x2="372" y2="464"/>
<line x1="372" y1="464" x2="412" y2="464"/>
<line x1="34" y1="528" x2="284" y2="528"/>
<line x1="222" y1="542" x2="284" y2="542"/>
<line x1="346" y1="535" x2="392" y2="535"/>
<line x1="392" y1="535" x2="392" y2="478"/>
<line x1="392" y1="478" x2="412" y2="478"/>
<line x1="474" y1="457" x2="504" y2="457"/>
<line x1="66" y1="52" x2="73" y2="52"/>
<line x1="105" y1="52" x2="114" y2="52"/>
<line x1="144" y1="52" x2="151" y2="52"/>
<line x1="183" y1="52" x2="192" y2="52"/>
<path d="M392,82 H418 A26,21 0 0 1 418,124 H392 Z"/>
<circle cx="449" cy="103" r="5"/>
<path d="M402,153 H428 A26,28 0 0 1 428,209 H402 Z"/>
<circle cx="459" cy="181" r="5"/>
<path d="M284,238 H310 A26,21 0 0 1 310,280 H284 Z"/>
<circle cx="341" cy="259" r="5"/>
<path d="M284,290 H310 A26,21 0 0 1 310,332 H284 Z"/>
<circle cx="341" cy="311" r="5"/>
<path d="M392,264 H418 A26,21 0 0 1 418,306 H392 Z"/>
<circle cx="449" cy="285" r="5"/>
<path d="M284,358 H310 A26,21 0 0 1 310,400 H284 Z"/>
<circle cx="341" cy="379" r="5"/>
<path d="M284,410 H310 A26,21 0 0 1 310,452 H284 Z"/>
<circle cx="341" cy="431" r="5"/>
<path d="M284,462 H310 A26,21 0 0 1 310,504 H284 Z"/>
<circle cx="341" cy="483" r="5"/>
<path d="M284,514 H310 A26,21 0 0 1 310,556 H284 Z"/>
<circle cx="341" cy="535" r="5"/>
<path d="M412,422 H438 A26,35 0 0 1 438,492 H412 Z"/>
<circle cx="469" cy="457" r="5"/>
<polygon points="73,40 73,64 95,52"/>
<circle cx="100" cy="52" r="5"/>
<polygon points="151,40 151,64 173,52"/>
<circle cx="178" cy="52" r="5"/>
<circle cx="192" cy="91" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="114" cy="115" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="157" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="222" cy="181" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="192" cy="205" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="252" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="222" cy="266" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="304" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="192" cy="318" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="192" cy="372" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="222" cy="386" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="424" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="438" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="476" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="192" cy="490" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="528" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="222" cy="542" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="52" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="490" y="109">b</text>
<text x="500" y="187">c</text>
<text x="490" y="291">f</text>
<text x="510" y="463">g</text>
<text x="34" y="22" text-anchor="middle">A</text>
<text x="66" y="22" text-anchor="middle">B</text>
<text x="144" y="22" text-anchor="middle">C</text>
<text x="222" y="22" text-anchor="middle">D</text>
</svg>
</div>

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="74" height="118" viewBox="0 0 74 118" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(10,8) scale(1.1)"><path d="M7,4 L37,4 L33,10 L11,10 Z" fill-opacity="0.1"/><path d="M38,5 L38,35 L32,31 L32,11 Z" fill-opacity="1"/><path d="M38,41 L38,71 L32,65 L32,45 Z" fill-opacity="1"/><path d="M7,72 L37,72 L33,66 L11,66 Z" fill-opacity="0.1"/><path d="M6,41 L6,71 L12,65 L12,45 Z" fill-opacity="0.1"/><path d="M6,5 L6,35 L12,31 L12,11 Z" fill-opacity="1"/><path d="M7,38 L11,34 L33,34 L37,38 L33,42 L11,42 Z" fill-opacity="1"/></g>
<text x="34.2" y="108" text-anchor="middle">4</text>
</svg>
</div>

### วงจรของเลข 5 (Excess-3, NAND อย่างเดียว) {code=xs3; method=nand; digit=5}

$\mathbf{Sol}^{n}$

เลข $5$ ใช้ segment $a, c, d, f, g$ จึงเขียนวงจรเฉพาะ segment เหล่านี้ ต่อเข้าด้วยกันเป็นวงจรเดียว : ใช้ NAND เกตทั้งสองชั้น : แต่ละพจน์ผลคูณเข้า NAND เกตชั้นแรก (พจน์ตัวแปรเดียวใช้ตัวที่คอมพลีเมนต์ต่อตรง) แล้วนำทุกเอาต์พุตเข้า NAND เกตชั้นที่สอง

$\mathbf{Ans}\quad \begin{aligned}a &= \overline{B\cdot \overline{\overline{C}D}\cdot \overline{C\overline{D}}\cdot \overline{A}} \\ c &= \overline{B\cdot D\cdot \overline{C}} \\ d &= \overline{\overline{\overline{B}D}\cdot \overline{\overline{C}D}\cdot \overline{\overline{A}C\overline{D}}\cdot \overline{A\overline{C}}} \\ f &= \overline{\overline{CD}\cdot \overline{A\overline{C}}} \\ g &= \overline{\overline{\overline{C}D}\cdot \overline{BC}\cdot \overline{A\overline{C}}\cdot \overline{AD}}\end{aligned}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="650" height="920" viewBox="0 0 650 920" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<line x1="82" y1="52" x2="82" y2="456"/>
<line x1="34" y1="28" x2="34" y2="866"/>
<line x1="160" y1="52" x2="160" y2="352"/>
<line x1="112" y1="28" x2="112" y2="762"/>
<line x1="238" y1="52" x2="238" y2="828"/>
<line x1="190" y1="28" x2="190" y2="776"/>
<line x1="316" y1="52" x2="316" y2="484"/>
<line x1="268" y1="28" x2="268" y2="880"/>
<line x1="112" y1="89" x2="494" y2="89"/>
<line x1="494" y1="89" x2="494" y2="132"/>
<line x1="494" y1="132" x2="504" y2="132"/>
<line x1="238" y1="120" x2="376" y2="120"/>
<line x1="268" y1="134" x2="376" y2="134"/>
<line x1="438" y1="127" x2="474" y2="127"/>
<line x1="474" y1="127" x2="474" y2="146"/>
<line x1="474" y1="146" x2="504" y2="146"/>
<line x1="190" y1="172" x2="376" y2="172"/>
<line x1="316" y1="186" x2="376" y2="186"/>
<line x1="438" y1="179" x2="464" y2="179"/>
<line x1="464" y1="179" x2="464" y2="160"/>
<line x1="464" y1="160" x2="504" y2="160"/>
<line x1="82" y1="217" x2="484" y2="217"/>
<line x1="484" y1="217" x2="484" y2="174"/>
<line x1="484" y1="174" x2="504" y2="174"/>
<line x1="566" y1="153" x2="596" y2="153"/>
<line x1="112" y1="257" x2="484" y2="257"/>
<line x1="484" y1="257" x2="484" y2="267"/>
<line x1="484" y1="267" x2="494" y2="267"/>
<line x1="268" y1="281" x2="494" y2="281"/>
<line x1="238" y1="305" x2="474" y2="305"/>
<line x1="474" y1="305" x2="474" y2="295"/>
<line x1="474" y1="295" x2="494" y2="295"/>
<line x1="556" y1="281" x2="586" y2="281"/>
<line x1="160" y1="352" x2="376" y2="352"/>
<line x1="268" y1="366" x2="376" y2="366"/>
<line x1="438" y1="359" x2="494" y2="359"/>
<line x1="494" y1="359" x2="494" y2="423"/>
<line x1="494" y1="423" x2="504" y2="423"/>
<line x1="238" y1="404" x2="376" y2="404"/>
<line x1="268" y1="418" x2="376" y2="418"/>
<line x1="438" y1="411" x2="474" y2="411"/>
<line x1="474" y1="411" x2="474" y2="437"/>
<line x1="474" y1="437" x2="504" y2="437"/>
<line x1="82" y1="456" x2="376" y2="456"/>
<line x1="190" y1="470" x2="376" y2="470"/>
<line x1="316" y1="484" x2="376" y2="484"/>
<line x1="438" y1="470" x2="464" y2="470"/>
<line x1="464" y1="470" x2="464" y2="451"/>
<line x1="464" y1="451" x2="504" y2="451"/>
<line x1="34" y1="522" x2="376" y2="522"/>
<line x1="238" y1="536" x2="376" y2="536"/>
<line x1="438" y1="529" x2="484" y2="529"/>
<line x1="484" y1="529" x2="484" y2="465"/>
<line x1="484" y1="465" x2="504" y2="465"/>
<line x1="566" y1="444" x2="596" y2="444"/>
<line x1="190" y1="590" x2="376" y2="590"/>
<line x1="268" y1="604" x2="376" y2="604"/>
<line x1="438" y1="597" x2="474" y2="597"/>
<line x1="474" y1="597" x2="474" y2="616"/>
<line x1="474" y1="616" x2="484" y2="616"/>
<line x1="34" y1="642" x2="376" y2="642"/>
<line x1="238" y1="656" x2="376" y2="656"/>
<line x1="438" y1="649" x2="464" y2="649"/>
<line x1="464" y1="649" x2="464" y2="630"/>
<line x1="464" y1="630" x2="484" y2="630"/>
<line x1="546" y1="623" x2="576" y2="623"/>
<line x1="238" y1="710" x2="376" y2="710"/>
<line x1="268" y1="724" x2="376" y2="724"/>
<line x1="438" y1="717" x2="494" y2="717"/>
<line x1="494" y1="717" x2="494" y2="774"/>
<line x1="494" y1="774" x2="504" y2="774"/>
<line x1="112" y1="762" x2="376" y2="762"/>
<line x1="190" y1="776" x2="376" y2="776"/>
<line x1="438" y1="769" x2="474" y2="769"/>
<line x1="474" y1="769" x2="474" y2="788"/>
<line x1="474" y1="788" x2="504" y2="788"/>
<line x1="34" y1="814" x2="376" y2="814"/>
<line x1="238" y1="828" x2="376" y2="828"/>
<line x1="438" y1="821" x2="464" y2="821"/>
<line x1="464" y1="821" x2="464" y2="802"/>
<line x1="464" y1="802" x2="504" y2="802"/>
<line x1="34" y1="866" x2="376" y2="866"/>
<line x1="268" y1="880" x2="376" y2="880"/>
<line x1="438" y1="873" x2="484" y2="873"/>
<line x1="484" y1="873" x2="484" y2="816"/>
<line x1="484" y1="816" x2="504" y2="816"/>
<line x1="566" y1="795" x2="596" y2="795"/>
<line x1="34" y1="52" x2="41" y2="52"/>
<line x1="73" y1="52" x2="82" y2="52"/>
<line x1="112" y1="52" x2="119" y2="52"/>
<line x1="151" y1="52" x2="160" y2="52"/>
<line x1="190" y1="52" x2="197" y2="52"/>
<line x1="229" y1="52" x2="238" y2="52"/>
<line x1="268" y1="52" x2="275" y2="52"/>
<line x1="307" y1="52" x2="316" y2="52"/>
<path d="M376,106 H402 A26,21 0 0 1 402,148 H376 Z"/>
<circle cx="433" cy="127" r="5"/>
<path d="M376,158 H402 A26,21 0 0 1 402,200 H376 Z"/>
<circle cx="433" cy="179" r="5"/>
<path d="M504,118 H530 A26,35 0 0 1 530,188 H504 Z"/>
<circle cx="561" cy="153" r="5"/>
<path d="M494,253 H520 A26,28 0 0 1 520,309 H494 Z"/>
<circle cx="551" cy="281" r="5"/>
<path d="M376,338 H402 A26,21 0 0 1 402,380 H376 Z"/>
<circle cx="433" cy="359" r="5"/>
<path d="M376,390 H402 A26,21 0 0 1 402,432 H376 Z"/>
<circle cx="433" cy="411" r="5"/>
<path d="M376,442 H402 A26,28 0 0 1 402,498 H376 Z"/>
<circle cx="433" cy="470" r="5"/>
<path d="M376,508 H402 A26,21 0 0 1 402,550 H376 Z"/>
<circle cx="433" cy="529" r="5"/>
<path d="M504,409 H530 A26,35 0 0 1 530,479 H504 Z"/>
<circle cx="561" cy="444" r="5"/>
<path d="M376,576 H402 A26,21 0 0 1 402,618 H376 Z"/>
<circle cx="433" cy="597" r="5"/>
<path d="M376,628 H402 A26,21 0 0 1 402,670 H376 Z"/>
<circle cx="433" cy="649" r="5"/>
<path d="M484,602 H510 A26,21 0 0 1 510,644 H484 Z"/>
<circle cx="541" cy="623" r="5"/>
<path d="M376,696 H402 A26,21 0 0 1 402,738 H376 Z"/>
<circle cx="433" cy="717" r="5"/>
<path d="M376,748 H402 A26,21 0 0 1 402,790 H376 Z"/>
<circle cx="433" cy="769" r="5"/>
<path d="M376,800 H402 A26,21 0 0 1 402,842 H376 Z"/>
<circle cx="433" cy="821" r="5"/>
<path d="M376,852 H402 A26,21 0 0 1 402,894 H376 Z"/>
<circle cx="433" cy="873" r="5"/>
<path d="M504,760 H530 A26,35 0 0 1 530,830 H504 Z"/>
<circle cx="561" cy="795" r="5"/>
<polygon points="41,40 41,64 63,52"/>
<circle cx="68" cy="52" r="5"/>
<polygon points="119,40 119,64 141,52"/>
<circle cx="146" cy="52" r="5"/>
<polygon points="197,40 197,64 219,52"/>
<circle cx="224" cy="52" r="5"/>
<polygon points="275,40 275,64 297,52"/>
<circle cx="302" cy="52" r="5"/>
<circle cx="112" cy="89" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="120" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="134" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="172" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316" cy="186" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="82" cy="217" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="257" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="281" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="305" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="160" cy="352" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="366" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="404" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="418" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="82" cy="456" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="470" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316" cy="484" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="522" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="536" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="590" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="604" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="642" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="656" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="710" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="724" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="762" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="776" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="814" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="828" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="866" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="880" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="52" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="602" y="159">a</text>
<text x="592" y="287">c</text>
<text x="602" y="450">d</text>
<text x="582" y="629">f</text>
<text x="602" y="801">g</text>
<text x="34" y="22" text-anchor="middle">A</text>
<text x="112" y="22" text-anchor="middle">B</text>
<text x="190" y="22" text-anchor="middle">C</text>
<text x="268" y="22" text-anchor="middle">D</text>
</svg>
</div>

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="74" height="118" viewBox="0 0 74 118" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(10,8) scale(1.1)"><path d="M7,4 L37,4 L33,10 L11,10 Z" fill-opacity="1"/><path d="M38,5 L38,35 L32,31 L32,11 Z" fill-opacity="0.1"/><path d="M38,41 L38,71 L32,65 L32,45 Z" fill-opacity="1"/><path d="M7,72 L37,72 L33,66 L11,66 Z" fill-opacity="1"/><path d="M6,41 L6,71 L12,65 L12,45 Z" fill-opacity="0.1"/><path d="M6,5 L6,35 L12,31 L12,11 Z" fill-opacity="1"/><path d="M7,38 L11,34 L33,34 L37,38 L33,42 L11,42 Z" fill-opacity="1"/></g>
<text x="34.2" y="108" text-anchor="middle">5</text>
</svg>
</div>

### วงจรของเลข 6 (Excess-3, NAND อย่างเดียว) {code=xs3; method=nand; digit=6}

$\mathbf{Sol}^{n}$

เลข $6$ ใช้ segment $a, c, d, e, f, g$ จึงเขียนวงจรเฉพาะ segment เหล่านี้ ต่อเข้าด้วยกันเป็นวงจรเดียว : ใช้ NAND เกตทั้งสองชั้น : แต่ละพจน์ผลคูณเข้า NAND เกตชั้นแรก (พจน์ตัวแปรเดียวใช้ตัวที่คอมพลีเมนต์ต่อตรง) แล้วนำทุกเอาต์พุตเข้า NAND เกตชั้นที่สอง

$\mathbf{Ans}\quad \begin{aligned}a &= \overline{B\cdot \overline{\overline{C}D}\cdot \overline{C\overline{D}}\cdot \overline{A}} \\ c &= \overline{B\cdot D\cdot \overline{C}} \\ d &= \overline{\overline{\overline{B}D}\cdot \overline{\overline{C}D}\cdot \overline{\overline{A}C\overline{D}}\cdot \overline{A\overline{C}}} \\ e &= \overline{\overline{\overline{B}D}\cdot \overline{\overline{C}D}} \\ f &= \overline{\overline{CD}\cdot \overline{A\overline{C}}} \\ g &= \overline{\overline{\overline{C}D}\cdot \overline{BC}\cdot \overline{A\overline{C}}\cdot \overline{AD}}\end{aligned}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="650" height="1040" viewBox="0 0 650 1040" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<line x1="82" y1="52" x2="82" y2="456"/>
<line x1="34" y1="28" x2="34" y2="986"/>
<line x1="160" y1="52" x2="160" y2="590"/>
<line x1="112" y1="28" x2="112" y2="882"/>
<line x1="238" y1="52" x2="238" y2="948"/>
<line x1="190" y1="28" x2="190" y2="896"/>
<line x1="316" y1="52" x2="316" y2="484"/>
<line x1="268" y1="28" x2="268" y2="1000"/>
<line x1="112" y1="89" x2="494" y2="89"/>
<line x1="494" y1="89" x2="494" y2="132"/>
<line x1="494" y1="132" x2="504" y2="132"/>
<line x1="238" y1="120" x2="376" y2="120"/>
<line x1="268" y1="134" x2="376" y2="134"/>
<line x1="438" y1="127" x2="474" y2="127"/>
<line x1="474" y1="127" x2="474" y2="146"/>
<line x1="474" y1="146" x2="504" y2="146"/>
<line x1="190" y1="172" x2="376" y2="172"/>
<line x1="316" y1="186" x2="376" y2="186"/>
<line x1="438" y1="179" x2="464" y2="179"/>
<line x1="464" y1="179" x2="464" y2="160"/>
<line x1="464" y1="160" x2="504" y2="160"/>
<line x1="82" y1="217" x2="484" y2="217"/>
<line x1="484" y1="217" x2="484" y2="174"/>
<line x1="484" y1="174" x2="504" y2="174"/>
<line x1="566" y1="153" x2="596" y2="153"/>
<line x1="112" y1="257" x2="484" y2="257"/>
<line x1="484" y1="257" x2="484" y2="267"/>
<line x1="484" y1="267" x2="494" y2="267"/>
<line x1="268" y1="281" x2="494" y2="281"/>
<line x1="238" y1="305" x2="474" y2="305"/>
<line x1="474" y1="305" x2="474" y2="295"/>
<line x1="474" y1="295" x2="494" y2="295"/>
<line x1="556" y1="281" x2="586" y2="281"/>
<line x1="160" y1="352" x2="376" y2="352"/>
<line x1="268" y1="366" x2="376" y2="366"/>
<line x1="438" y1="359" x2="494" y2="359"/>
<line x1="494" y1="359" x2="494" y2="423"/>
<line x1="494" y1="423" x2="504" y2="423"/>
<line x1="238" y1="404" x2="376" y2="404"/>
<line x1="268" y1="418" x2="376" y2="418"/>
<line x1="438" y1="411" x2="474" y2="411"/>
<line x1="474" y1="411" x2="474" y2="437"/>
<line x1="474" y1="437" x2="504" y2="437"/>
<line x1="82" y1="456" x2="376" y2="456"/>
<line x1="190" y1="470" x2="376" y2="470"/>
<line x1="316" y1="484" x2="376" y2="484"/>
<line x1="438" y1="470" x2="464" y2="470"/>
<line x1="464" y1="470" x2="464" y2="451"/>
<line x1="464" y1="451" x2="504" y2="451"/>
<line x1="34" y1="522" x2="376" y2="522"/>
<line x1="238" y1="536" x2="376" y2="536"/>
<line x1="438" y1="529" x2="484" y2="529"/>
<line x1="484" y1="529" x2="484" y2="465"/>
<line x1="484" y1="465" x2="504" y2="465"/>
<line x1="566" y1="444" x2="596" y2="444"/>
<line x1="160" y1="590" x2="376" y2="590"/>
<line x1="268" y1="604" x2="376" y2="604"/>
<line x1="438" y1="597" x2="474" y2="597"/>
<line x1="474" y1="597" x2="474" y2="616"/>
<line x1="474" y1="616" x2="484" y2="616"/>
<line x1="238" y1="642" x2="376" y2="642"/>
<line x1="268" y1="656" x2="376" y2="656"/>
<line x1="438" y1="649" x2="464" y2="649"/>
<line x1="464" y1="649" x2="464" y2="630"/>
<line x1="464" y1="630" x2="484" y2="630"/>
<line x1="546" y1="623" x2="576" y2="623"/>
<line x1="190" y1="710" x2="376" y2="710"/>
<line x1="268" y1="724" x2="376" y2="724"/>
<line x1="438" y1="717" x2="474" y2="717"/>
<line x1="474" y1="717" x2="474" y2="736"/>
<line x1="474" y1="736" x2="484" y2="736"/>
<line x1="34" y1="762" x2="376" y2="762"/>
<line x1="238" y1="776" x2="376" y2="776"/>
<line x1="438" y1="769" x2="464" y2="769"/>
<line x1="464" y1="769" x2="464" y2="750"/>
<line x1="464" y1="750" x2="484" y2="750"/>
<line x1="546" y1="743" x2="576" y2="743"/>
<line x1="238" y1="830" x2="376" y2="830"/>
<line x1="268" y1="844" x2="376" y2="844"/>
<line x1="438" y1="837" x2="494" y2="837"/>
<line x1="494" y1="837" x2="494" y2="894"/>
<line x1="494" y1="894" x2="504" y2="894"/>
<line x1="112" y1="882" x2="376" y2="882"/>
<line x1="190" y1="896" x2="376" y2="896"/>
<line x1="438" y1="889" x2="474" y2="889"/>
<line x1="474" y1="889" x2="474" y2="908"/>
<line x1="474" y1="908" x2="504" y2="908"/>
<line x1="34" y1="934" x2="376" y2="934"/>
<line x1="238" y1="948" x2="376" y2="948"/>
<line x1="438" y1="941" x2="464" y2="941"/>
<line x1="464" y1="941" x2="464" y2="922"/>
<line x1="464" y1="922" x2="504" y2="922"/>
<line x1="34" y1="986" x2="376" y2="986"/>
<line x1="268" y1="1000" x2="376" y2="1000"/>
<line x1="438" y1="993" x2="484" y2="993"/>
<line x1="484" y1="993" x2="484" y2="936"/>
<line x1="484" y1="936" x2="504" y2="936"/>
<line x1="566" y1="915" x2="596" y2="915"/>
<line x1="34" y1="52" x2="41" y2="52"/>
<line x1="73" y1="52" x2="82" y2="52"/>
<line x1="112" y1="52" x2="119" y2="52"/>
<line x1="151" y1="52" x2="160" y2="52"/>
<line x1="190" y1="52" x2="197" y2="52"/>
<line x1="229" y1="52" x2="238" y2="52"/>
<line x1="268" y1="52" x2="275" y2="52"/>
<line x1="307" y1="52" x2="316" y2="52"/>
<path d="M376,106 H402 A26,21 0 0 1 402,148 H376 Z"/>
<circle cx="433" cy="127" r="5"/>
<path d="M376,158 H402 A26,21 0 0 1 402,200 H376 Z"/>
<circle cx="433" cy="179" r="5"/>
<path d="M504,118 H530 A26,35 0 0 1 530,188 H504 Z"/>
<circle cx="561" cy="153" r="5"/>
<path d="M494,253 H520 A26,28 0 0 1 520,309 H494 Z"/>
<circle cx="551" cy="281" r="5"/>
<path d="M376,338 H402 A26,21 0 0 1 402,380 H376 Z"/>
<circle cx="433" cy="359" r="5"/>
<path d="M376,390 H402 A26,21 0 0 1 402,432 H376 Z"/>
<circle cx="433" cy="411" r="5"/>
<path d="M376,442 H402 A26,28 0 0 1 402,498 H376 Z"/>
<circle cx="433" cy="470" r="5"/>
<path d="M376,508 H402 A26,21 0 0 1 402,550 H376 Z"/>
<circle cx="433" cy="529" r="5"/>
<path d="M504,409 H530 A26,35 0 0 1 530,479 H504 Z"/>
<circle cx="561" cy="444" r="5"/>
<path d="M376,576 H402 A26,21 0 0 1 402,618 H376 Z"/>
<circle cx="433" cy="597" r="5"/>
<path d="M376,628 H402 A26,21 0 0 1 402,670 H376 Z"/>
<circle cx="433" cy="649" r="5"/>
<path d="M484,602 H510 A26,21 0 0 1 510,644 H484 Z"/>
<circle cx="541" cy="623" r="5"/>
<path d="M376,696 H402 A26,21 0 0 1 402,738 H376 Z"/>
<circle cx="433" cy="717" r="5"/>
<path d="M376,748 H402 A26,21 0 0 1 402,790 H376 Z"/>
<circle cx="433" cy="769" r="5"/>
<path d="M484,722 H510 A26,21 0 0 1 510,764 H484 Z"/>
<circle cx="541" cy="743" r="5"/>
<path d="M376,816 H402 A26,21 0 0 1 402,858 H376 Z"/>
<circle cx="433" cy="837" r="5"/>
<path d="M376,868 H402 A26,21 0 0 1 402,910 H376 Z"/>
<circle cx="433" cy="889" r="5"/>
<path d="M376,920 H402 A26,21 0 0 1 402,962 H376 Z"/>
<circle cx="433" cy="941" r="5"/>
<path d="M376,972 H402 A26,21 0 0 1 402,1014 H376 Z"/>
<circle cx="433" cy="993" r="5"/>
<path d="M504,880 H530 A26,35 0 0 1 530,950 H504 Z"/>
<circle cx="561" cy="915" r="5"/>
<polygon points="41,40 41,64 63,52"/>
<circle cx="68" cy="52" r="5"/>
<polygon points="119,40 119,64 141,52"/>
<circle cx="146" cy="52" r="5"/>
<polygon points="197,40 197,64 219,52"/>
<circle cx="224" cy="52" r="5"/>
<polygon points="275,40 275,64 297,52"/>
<circle cx="302" cy="52" r="5"/>
<circle cx="112" cy="89" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="120" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="134" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="172" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316" cy="186" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="82" cy="217" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="257" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="281" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="305" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="160" cy="352" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="366" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="404" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="418" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="82" cy="456" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="470" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316" cy="484" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="522" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="536" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="160" cy="590" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="604" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="642" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="656" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="710" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="724" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="762" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="776" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="830" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="844" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="882" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="896" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="934" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="948" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="986" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="1000" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="52" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="602" y="159">a</text>
<text x="592" y="287">c</text>
<text x="602" y="450">d</text>
<text x="582" y="629">e</text>
<text x="582" y="749">f</text>
<text x="602" y="921">g</text>
<text x="34" y="22" text-anchor="middle">A</text>
<text x="112" y="22" text-anchor="middle">B</text>
<text x="190" y="22" text-anchor="middle">C</text>
<text x="268" y="22" text-anchor="middle">D</text>
</svg>
</div>

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="74" height="118" viewBox="0 0 74 118" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(10,8) scale(1.1)"><path d="M7,4 L37,4 L33,10 L11,10 Z" fill-opacity="1"/><path d="M38,5 L38,35 L32,31 L32,11 Z" fill-opacity="0.1"/><path d="M38,41 L38,71 L32,65 L32,45 Z" fill-opacity="1"/><path d="M7,72 L37,72 L33,66 L11,66 Z" fill-opacity="1"/><path d="M6,41 L6,71 L12,65 L12,45 Z" fill-opacity="1"/><path d="M6,5 L6,35 L12,31 L12,11 Z" fill-opacity="1"/><path d="M7,38 L11,34 L33,34 L37,38 L33,42 L11,42 Z" fill-opacity="1"/></g>
<text x="34.2" y="108" text-anchor="middle">6</text>
</svg>
</div>

### วงจรของเลข 7 (Excess-3, NAND อย่างเดียว) {code=xs3; method=nand; digit=7}

$\mathbf{Sol}^{n}$

เลข $7$ ใช้ segment $a, b, c$ จึงเขียนวงจรเฉพาะ segment เหล่านี้ ต่อเข้าด้วยกันเป็นวงจรเดียว : ใช้ NAND เกตทั้งสองชั้น : แต่ละพจน์ผลคูณเข้า NAND เกตชั้นแรก (พจน์ตัวแปรเดียวใช้ตัวที่คอมพลีเมนต์ต่อตรง) แล้วนำทุกเอาต์พุตเข้า NAND เกตชั้นที่สอง

$\mathbf{Ans}\quad \begin{aligned}a &= \overline{B\cdot \overline{\overline{C}D}\cdot \overline{C\overline{D}}\cdot \overline{A}} \\ b &= \overline{\overline{C}\cdot \overline{B}} \\ c &= \overline{B\cdot D\cdot \overline{C}}\end{aligned}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="650" height="406" viewBox="0 0 650 406" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<line x1="82" y1="52" x2="82" y2="217"/>
<line x1="34" y1="28" x2="34" y2="52"/>
<line x1="160" y1="52" x2="160" y2="283"/>
<line x1="112" y1="28" x2="112" y2="325"/>
<line x1="238" y1="52" x2="238" y2="373"/>
<line x1="190" y1="28" x2="190" y2="172"/>
<line x1="316" y1="52" x2="316" y2="186"/>
<line x1="268" y1="28" x2="268" y2="349"/>
<line x1="112" y1="89" x2="494" y2="89"/>
<line x1="494" y1="89" x2="494" y2="132"/>
<line x1="494" y1="132" x2="504" y2="132"/>
<line x1="238" y1="120" x2="376" y2="120"/>
<line x1="268" y1="134" x2="376" y2="134"/>
<line x1="438" y1="127" x2="474" y2="127"/>
<line x1="474" y1="127" x2="474" y2="146"/>
<line x1="474" y1="146" x2="504" y2="146"/>
<line x1="190" y1="172" x2="376" y2="172"/>
<line x1="316" y1="186" x2="376" y2="186"/>
<line x1="438" y1="179" x2="464" y2="179"/>
<line x1="464" y1="179" x2="464" y2="160"/>
<line x1="464" y1="160" x2="504" y2="160"/>
<line x1="82" y1="217" x2="484" y2="217"/>
<line x1="484" y1="217" x2="484" y2="174"/>
<line x1="484" y1="174" x2="504" y2="174"/>
<line x1="566" y1="153" x2="596" y2="153"/>
<line x1="238" y1="259" x2="474" y2="259"/>
<line x1="474" y1="259" x2="474" y2="264"/>
<line x1="474" y1="264" x2="484" y2="264"/>
<line x1="160" y1="283" x2="464" y2="283"/>
<line x1="464" y1="283" x2="464" y2="278"/>
<line x1="464" y1="278" x2="484" y2="278"/>
<line x1="546" y1="271" x2="576" y2="271"/>
<line x1="112" y1="325" x2="484" y2="325"/>
<line x1="484" y1="325" x2="484" y2="335"/>
<line x1="484" y1="335" x2="494" y2="335"/>
<line x1="268" y1="349" x2="494" y2="349"/>
<line x1="238" y1="373" x2="474" y2="373"/>
<line x1="474" y1="373" x2="474" y2="363"/>
<line x1="474" y1="363" x2="494" y2="363"/>
<line x1="556" y1="349" x2="586" y2="349"/>
<line x1="34" y1="52" x2="41" y2="52"/>
<line x1="73" y1="52" x2="82" y2="52"/>
<line x1="112" y1="52" x2="119" y2="52"/>
<line x1="151" y1="52" x2="160" y2="52"/>
<line x1="190" y1="52" x2="197" y2="52"/>
<line x1="229" y1="52" x2="238" y2="52"/>
<line x1="268" y1="52" x2="275" y2="52"/>
<line x1="307" y1="52" x2="316" y2="52"/>
<path d="M376,106 H402 A26,21 0 0 1 402,148 H376 Z"/>
<circle cx="433" cy="127" r="5"/>
<path d="M376,158 H402 A26,21 0 0 1 402,200 H376 Z"/>
<circle cx="433" cy="179" r="5"/>
<path d="M504,118 H530 A26,35 0 0 1 530,188 H504 Z"/>
<circle cx="561" cy="153" r="5"/>
<path d="M484,250 H510 A26,21 0 0 1 510,292 H484 Z"/>
<circle cx="541" cy="271" r="5"/>
<path d="M494,321 H520 A26,28 0 0 1 520,377 H494 Z"/>
<circle cx="551" cy="349" r="5"/>
<polygon points="41,40 41,64 63,52"/>
<circle cx="68" cy="52" r="5"/>
<polygon points="119,40 119,64 141,52"/>
<circle cx="146" cy="52" r="5"/>
<polygon points="197,40 197,64 219,52"/>
<circle cx="224" cy="52" r="5"/>
<polygon points="275,40 275,64 297,52"/>
<circle cx="302" cy="52" r="5"/>
<circle cx="112" cy="89" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="120" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="134" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="172" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316" cy="186" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="82" cy="217" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="259" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="160" cy="283" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="325" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="349" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="373" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="52" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="602" y="159">a</text>
<text x="582" y="277">b</text>
<text x="592" y="355">c</text>
<text x="34" y="22" text-anchor="middle">A</text>
<text x="112" y="22" text-anchor="middle">B</text>
<text x="190" y="22" text-anchor="middle">C</text>
<text x="268" y="22" text-anchor="middle">D</text>
</svg>
</div>

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="74" height="118" viewBox="0 0 74 118" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(10,8) scale(1.1)"><path d="M7,4 L37,4 L33,10 L11,10 Z" fill-opacity="1"/><path d="M38,5 L38,35 L32,31 L32,11 Z" fill-opacity="1"/><path d="M38,41 L38,71 L32,65 L32,45 Z" fill-opacity="1"/><path d="M7,72 L37,72 L33,66 L11,66 Z" fill-opacity="0.1"/><path d="M6,41 L6,71 L12,65 L12,45 Z" fill-opacity="0.1"/><path d="M6,5 L6,35 L12,31 L12,11 Z" fill-opacity="0.1"/><path d="M7,38 L11,34 L33,34 L37,38 L33,42 L11,42 Z" fill-opacity="0.1"/></g>
<text x="34.2" y="108" text-anchor="middle">7</text>
</svg>
</div>

### วงจรของเลข 8 (Excess-3, NAND อย่างเดียว) {code=xs3; method=nand; digit=8}

$\mathbf{Sol}^{n}$

เลข $8$ ใช้ segment $a, b, c, d, e, f, g$ จึงเขียนวงจรเฉพาะ segment เหล่านี้ ต่อเข้าด้วยกันเป็นวงจรเดียว : ใช้ NAND เกตทั้งสองชั้น : แต่ละพจน์ผลคูณเข้า NAND เกตชั้นแรก (พจน์ตัวแปรเดียวใช้ตัวที่คอมพลีเมนต์ต่อตรง) แล้วนำทุกเอาต์พุตเข้า NAND เกตชั้นที่สอง

$\mathbf{Ans}\quad \begin{aligned}a &= \overline{B\cdot \overline{\overline{C}D}\cdot \overline{C\overline{D}}\cdot \overline{A}} \\ b &= \overline{\overline{C}\cdot \overline{B}} \\ c &= \overline{B\cdot D\cdot \overline{C}} \\ d &= \overline{\overline{\overline{B}D}\cdot \overline{\overline{C}D}\cdot \overline{\overline{A}C\overline{D}}\cdot \overline{A\overline{C}}} \\ e &= \overline{\overline{\overline{B}D}\cdot \overline{\overline{C}D}} \\ f &= \overline{\overline{CD}\cdot \overline{A\overline{C}}} \\ g &= \overline{\overline{\overline{C}D}\cdot \overline{BC}\cdot \overline{A\overline{C}}\cdot \overline{AD}}\end{aligned}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="650" height="1108" viewBox="0 0 650 1108" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<line x1="82" y1="52" x2="82" y2="524"/>
<line x1="34" y1="28" x2="34" y2="1054"/>
<line x1="160" y1="52" x2="160" y2="658"/>
<line x1="112" y1="28" x2="112" y2="950"/>
<line x1="238" y1="52" x2="238" y2="1016"/>
<line x1="190" y1="28" x2="190" y2="964"/>
<line x1="316" y1="52" x2="316" y2="552"/>
<line x1="268" y1="28" x2="268" y2="1068"/>
<line x1="112" y1="89" x2="494" y2="89"/>
<line x1="494" y1="89" x2="494" y2="132"/>
<line x1="494" y1="132" x2="504" y2="132"/>
<line x1="238" y1="120" x2="376" y2="120"/>
<line x1="268" y1="134" x2="376" y2="134"/>
<line x1="438" y1="127" x2="474" y2="127"/>
<line x1="474" y1="127" x2="474" y2="146"/>
<line x1="474" y1="146" x2="504" y2="146"/>
<line x1="190" y1="172" x2="376" y2="172"/>
<line x1="316" y1="186" x2="376" y2="186"/>
<line x1="438" y1="179" x2="464" y2="179"/>
<line x1="464" y1="179" x2="464" y2="160"/>
<line x1="464" y1="160" x2="504" y2="160"/>
<line x1="82" y1="217" x2="484" y2="217"/>
<line x1="484" y1="217" x2="484" y2="174"/>
<line x1="484" y1="174" x2="504" y2="174"/>
<line x1="566" y1="153" x2="596" y2="153"/>
<line x1="238" y1="259" x2="474" y2="259"/>
<line x1="474" y1="259" x2="474" y2="264"/>
<line x1="474" y1="264" x2="484" y2="264"/>
<line x1="160" y1="283" x2="464" y2="283"/>
<line x1="464" y1="283" x2="464" y2="278"/>
<line x1="464" y1="278" x2="484" y2="278"/>
<line x1="546" y1="271" x2="576" y2="271"/>
<line x1="112" y1="325" x2="484" y2="325"/>
<line x1="484" y1="325" x2="484" y2="335"/>
<line x1="484" y1="335" x2="494" y2="335"/>
<line x1="268" y1="349" x2="494" y2="349"/>
<line x1="238" y1="373" x2="474" y2="373"/>
<line x1="474" y1="373" x2="474" y2="363"/>
<line x1="474" y1="363" x2="494" y2="363"/>
<line x1="556" y1="349" x2="586" y2="349"/>
<line x1="160" y1="420" x2="376" y2="420"/>
<line x1="268" y1="434" x2="376" y2="434"/>
<line x1="438" y1="427" x2="494" y2="427"/>
<line x1="494" y1="427" x2="494" y2="491"/>
<line x1="494" y1="491" x2="504" y2="491"/>
<line x1="238" y1="472" x2="376" y2="472"/>
<line x1="268" y1="486" x2="376" y2="486"/>
<line x1="438" y1="479" x2="474" y2="479"/>
<line x1="474" y1="479" x2="474" y2="505"/>
<line x1="474" y1="505" x2="504" y2="505"/>
<line x1="82" y1="524" x2="376" y2="524"/>
<line x1="190" y1="538" x2="376" y2="538"/>
<line x1="316" y1="552" x2="376" y2="552"/>
<line x1="438" y1="538" x2="464" y2="538"/>
<line x1="464" y1="538" x2="464" y2="519"/>
<line x1="464" y1="519" x2="504" y2="519"/>
<line x1="34" y1="590" x2="376" y2="590"/>
<line x1="238" y1="604" x2="376" y2="604"/>
<line x1="438" y1="597" x2="484" y2="597"/>
<line x1="484" y1="597" x2="484" y2="533"/>
<line x1="484" y1="533" x2="504" y2="533"/>
<line x1="566" y1="512" x2="596" y2="512"/>
<line x1="160" y1="658" x2="376" y2="658"/>
<line x1="268" y1="672" x2="376" y2="672"/>
<line x1="438" y1="665" x2="474" y2="665"/>
<line x1="474" y1="665" x2="474" y2="684"/>
<line x1="474" y1="684" x2="484" y2="684"/>
<line x1="238" y1="710" x2="376" y2="710"/>
<line x1="268" y1="724" x2="376" y2="724"/>
<line x1="438" y1="717" x2="464" y2="717"/>
<line x1="464" y1="717" x2="464" y2="698"/>
<line x1="464" y1="698" x2="484" y2="698"/>
<line x1="546" y1="691" x2="576" y2="691"/>
<line x1="190" y1="778" x2="376" y2="778"/>
<line x1="268" y1="792" x2="376" y2="792"/>
<line x1="438" y1="785" x2="474" y2="785"/>
<line x1="474" y1="785" x2="474" y2="804"/>
<line x1="474" y1="804" x2="484" y2="804"/>
<line x1="34" y1="830" x2="376" y2="830"/>
<line x1="238" y1="844" x2="376" y2="844"/>
<line x1="438" y1="837" x2="464" y2="837"/>
<line x1="464" y1="837" x2="464" y2="818"/>
<line x1="464" y1="818" x2="484" y2="818"/>
<line x1="546" y1="811" x2="576" y2="811"/>
<line x1="238" y1="898" x2="376" y2="898"/>
<line x1="268" y1="912" x2="376" y2="912"/>
<line x1="438" y1="905" x2="494" y2="905"/>
<line x1="494" y1="905" x2="494" y2="962"/>
<line x1="494" y1="962" x2="504" y2="962"/>
<line x1="112" y1="950" x2="376" y2="950"/>
<line x1="190" y1="964" x2="376" y2="964"/>
<line x1="438" y1="957" x2="474" y2="957"/>
<line x1="474" y1="957" x2="474" y2="976"/>
<line x1="474" y1="976" x2="504" y2="976"/>
<line x1="34" y1="1002" x2="376" y2="1002"/>
<line x1="238" y1="1016" x2="376" y2="1016"/>
<line x1="438" y1="1009" x2="464" y2="1009"/>
<line x1="464" y1="1009" x2="464" y2="990"/>
<line x1="464" y1="990" x2="504" y2="990"/>
<line x1="34" y1="1054" x2="376" y2="1054"/>
<line x1="268" y1="1068" x2="376" y2="1068"/>
<line x1="438" y1="1061" x2="484" y2="1061"/>
<line x1="484" y1="1061" x2="484" y2="1004"/>
<line x1="484" y1="1004" x2="504" y2="1004"/>
<line x1="566" y1="983" x2="596" y2="983"/>
<line x1="34" y1="52" x2="41" y2="52"/>
<line x1="73" y1="52" x2="82" y2="52"/>
<line x1="112" y1="52" x2="119" y2="52"/>
<line x1="151" y1="52" x2="160" y2="52"/>
<line x1="190" y1="52" x2="197" y2="52"/>
<line x1="229" y1="52" x2="238" y2="52"/>
<line x1="268" y1="52" x2="275" y2="52"/>
<line x1="307" y1="52" x2="316" y2="52"/>
<path d="M376,106 H402 A26,21 0 0 1 402,148 H376 Z"/>
<circle cx="433" cy="127" r="5"/>
<path d="M376,158 H402 A26,21 0 0 1 402,200 H376 Z"/>
<circle cx="433" cy="179" r="5"/>
<path d="M504,118 H530 A26,35 0 0 1 530,188 H504 Z"/>
<circle cx="561" cy="153" r="5"/>
<path d="M484,250 H510 A26,21 0 0 1 510,292 H484 Z"/>
<circle cx="541" cy="271" r="5"/>
<path d="M494,321 H520 A26,28 0 0 1 520,377 H494 Z"/>
<circle cx="551" cy="349" r="5"/>
<path d="M376,406 H402 A26,21 0 0 1 402,448 H376 Z"/>
<circle cx="433" cy="427" r="5"/>
<path d="M376,458 H402 A26,21 0 0 1 402,500 H376 Z"/>
<circle cx="433" cy="479" r="5"/>
<path d="M376,510 H402 A26,28 0 0 1 402,566 H376 Z"/>
<circle cx="433" cy="538" r="5"/>
<path d="M376,576 H402 A26,21 0 0 1 402,618 H376 Z"/>
<circle cx="433" cy="597" r="5"/>
<path d="M504,477 H530 A26,35 0 0 1 530,547 H504 Z"/>
<circle cx="561" cy="512" r="5"/>
<path d="M376,644 H402 A26,21 0 0 1 402,686 H376 Z"/>
<circle cx="433" cy="665" r="5"/>
<path d="M376,696 H402 A26,21 0 0 1 402,738 H376 Z"/>
<circle cx="433" cy="717" r="5"/>
<path d="M484,670 H510 A26,21 0 0 1 510,712 H484 Z"/>
<circle cx="541" cy="691" r="5"/>
<path d="M376,764 H402 A26,21 0 0 1 402,806 H376 Z"/>
<circle cx="433" cy="785" r="5"/>
<path d="M376,816 H402 A26,21 0 0 1 402,858 H376 Z"/>
<circle cx="433" cy="837" r="5"/>
<path d="M484,790 H510 A26,21 0 0 1 510,832 H484 Z"/>
<circle cx="541" cy="811" r="5"/>
<path d="M376,884 H402 A26,21 0 0 1 402,926 H376 Z"/>
<circle cx="433" cy="905" r="5"/>
<path d="M376,936 H402 A26,21 0 0 1 402,978 H376 Z"/>
<circle cx="433" cy="957" r="5"/>
<path d="M376,988 H402 A26,21 0 0 1 402,1030 H376 Z"/>
<circle cx="433" cy="1009" r="5"/>
<path d="M376,1040 H402 A26,21 0 0 1 402,1082 H376 Z"/>
<circle cx="433" cy="1061" r="5"/>
<path d="M504,948 H530 A26,35 0 0 1 530,1018 H504 Z"/>
<circle cx="561" cy="983" r="5"/>
<polygon points="41,40 41,64 63,52"/>
<circle cx="68" cy="52" r="5"/>
<polygon points="119,40 119,64 141,52"/>
<circle cx="146" cy="52" r="5"/>
<polygon points="197,40 197,64 219,52"/>
<circle cx="224" cy="52" r="5"/>
<polygon points="275,40 275,64 297,52"/>
<circle cx="302" cy="52" r="5"/>
<circle cx="112" cy="89" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="120" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="134" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="172" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316" cy="186" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="82" cy="217" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="259" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="160" cy="283" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="325" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="349" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="373" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="160" cy="420" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="434" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="472" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="486" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="82" cy="524" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="538" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316" cy="552" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="590" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="604" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="160" cy="658" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="672" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="710" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="724" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="778" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="792" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="830" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="844" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="898" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="912" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="950" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="964" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="1002" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="1016" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="1054" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="1068" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="52" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="602" y="159">a</text>
<text x="582" y="277">b</text>
<text x="592" y="355">c</text>
<text x="602" y="518">d</text>
<text x="582" y="697">e</text>
<text x="582" y="817">f</text>
<text x="602" y="989">g</text>
<text x="34" y="22" text-anchor="middle">A</text>
<text x="112" y="22" text-anchor="middle">B</text>
<text x="190" y="22" text-anchor="middle">C</text>
<text x="268" y="22" text-anchor="middle">D</text>
</svg>
</div>

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="74" height="118" viewBox="0 0 74 118" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(10,8) scale(1.1)"><path d="M7,4 L37,4 L33,10 L11,10 Z" fill-opacity="1"/><path d="M38,5 L38,35 L32,31 L32,11 Z" fill-opacity="1"/><path d="M38,41 L38,71 L32,65 L32,45 Z" fill-opacity="1"/><path d="M7,72 L37,72 L33,66 L11,66 Z" fill-opacity="1"/><path d="M6,41 L6,71 L12,65 L12,45 Z" fill-opacity="1"/><path d="M6,5 L6,35 L12,31 L12,11 Z" fill-opacity="1"/><path d="M7,38 L11,34 L33,34 L37,38 L33,42 L11,42 Z" fill-opacity="1"/></g>
<text x="34.2" y="108" text-anchor="middle">8</text>
</svg>
</div>

### วงจรของเลข 9 (Excess-3, NAND อย่างเดียว) {code=xs3; method=nand; digit=9}

$\mathbf{Sol}^{n}$

เลข $9$ ใช้ segment $a, b, c, d, f, g$ จึงเขียนวงจรเฉพาะ segment เหล่านี้ ต่อเข้าด้วยกันเป็นวงจรเดียว : ใช้ NAND เกตทั้งสองชั้น : แต่ละพจน์ผลคูณเข้า NAND เกตชั้นแรก (พจน์ตัวแปรเดียวใช้ตัวที่คอมพลีเมนต์ต่อตรง) แล้วนำทุกเอาต์พุตเข้า NAND เกตชั้นที่สอง

$\mathbf{Ans}\quad \begin{aligned}a &= \overline{B\cdot \overline{\overline{C}D}\cdot \overline{C\overline{D}}\cdot \overline{A}} \\ b &= \overline{\overline{C}\cdot \overline{B}} \\ c &= \overline{B\cdot D\cdot \overline{C}} \\ d &= \overline{\overline{\overline{B}D}\cdot \overline{\overline{C}D}\cdot \overline{\overline{A}C\overline{D}}\cdot \overline{A\overline{C}}} \\ f &= \overline{\overline{CD}\cdot \overline{A\overline{C}}} \\ g &= \overline{\overline{\overline{C}D}\cdot \overline{BC}\cdot \overline{A\overline{C}}\cdot \overline{AD}}\end{aligned}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="650" height="988" viewBox="0 0 650 988" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<line x1="82" y1="52" x2="82" y2="524"/>
<line x1="34" y1="28" x2="34" y2="934"/>
<line x1="160" y1="52" x2="160" y2="420"/>
<line x1="112" y1="28" x2="112" y2="830"/>
<line x1="238" y1="52" x2="238" y2="896"/>
<line x1="190" y1="28" x2="190" y2="844"/>
<line x1="316" y1="52" x2="316" y2="552"/>
<line x1="268" y1="28" x2="268" y2="948"/>
<line x1="112" y1="89" x2="494" y2="89"/>
<line x1="494" y1="89" x2="494" y2="132"/>
<line x1="494" y1="132" x2="504" y2="132"/>
<line x1="238" y1="120" x2="376" y2="120"/>
<line x1="268" y1="134" x2="376" y2="134"/>
<line x1="438" y1="127" x2="474" y2="127"/>
<line x1="474" y1="127" x2="474" y2="146"/>
<line x1="474" y1="146" x2="504" y2="146"/>
<line x1="190" y1="172" x2="376" y2="172"/>
<line x1="316" y1="186" x2="376" y2="186"/>
<line x1="438" y1="179" x2="464" y2="179"/>
<line x1="464" y1="179" x2="464" y2="160"/>
<line x1="464" y1="160" x2="504" y2="160"/>
<line x1="82" y1="217" x2="484" y2="217"/>
<line x1="484" y1="217" x2="484" y2="174"/>
<line x1="484" y1="174" x2="504" y2="174"/>
<line x1="566" y1="153" x2="596" y2="153"/>
<line x1="238" y1="259" x2="474" y2="259"/>
<line x1="474" y1="259" x2="474" y2="264"/>
<line x1="474" y1="264" x2="484" y2="264"/>
<line x1="160" y1="283" x2="464" y2="283"/>
<line x1="464" y1="283" x2="464" y2="278"/>
<line x1="464" y1="278" x2="484" y2="278"/>
<line x1="546" y1="271" x2="576" y2="271"/>
<line x1="112" y1="325" x2="484" y2="325"/>
<line x1="484" y1="325" x2="484" y2="335"/>
<line x1="484" y1="335" x2="494" y2="335"/>
<line x1="268" y1="349" x2="494" y2="349"/>
<line x1="238" y1="373" x2="474" y2="373"/>
<line x1="474" y1="373" x2="474" y2="363"/>
<line x1="474" y1="363" x2="494" y2="363"/>
<line x1="556" y1="349" x2="586" y2="349"/>
<line x1="160" y1="420" x2="376" y2="420"/>
<line x1="268" y1="434" x2="376" y2="434"/>
<line x1="438" y1="427" x2="494" y2="427"/>
<line x1="494" y1="427" x2="494" y2="491"/>
<line x1="494" y1="491" x2="504" y2="491"/>
<line x1="238" y1="472" x2="376" y2="472"/>
<line x1="268" y1="486" x2="376" y2="486"/>
<line x1="438" y1="479" x2="474" y2="479"/>
<line x1="474" y1="479" x2="474" y2="505"/>
<line x1="474" y1="505" x2="504" y2="505"/>
<line x1="82" y1="524" x2="376" y2="524"/>
<line x1="190" y1="538" x2="376" y2="538"/>
<line x1="316" y1="552" x2="376" y2="552"/>
<line x1="438" y1="538" x2="464" y2="538"/>
<line x1="464" y1="538" x2="464" y2="519"/>
<line x1="464" y1="519" x2="504" y2="519"/>
<line x1="34" y1="590" x2="376" y2="590"/>
<line x1="238" y1="604" x2="376" y2="604"/>
<line x1="438" y1="597" x2="484" y2="597"/>
<line x1="484" y1="597" x2="484" y2="533"/>
<line x1="484" y1="533" x2="504" y2="533"/>
<line x1="566" y1="512" x2="596" y2="512"/>
<line x1="190" y1="658" x2="376" y2="658"/>
<line x1="268" y1="672" x2="376" y2="672"/>
<line x1="438" y1="665" x2="474" y2="665"/>
<line x1="474" y1="665" x2="474" y2="684"/>
<line x1="474" y1="684" x2="484" y2="684"/>
<line x1="34" y1="710" x2="376" y2="710"/>
<line x1="238" y1="724" x2="376" y2="724"/>
<line x1="438" y1="717" x2="464" y2="717"/>
<line x1="464" y1="717" x2="464" y2="698"/>
<line x1="464" y1="698" x2="484" y2="698"/>
<line x1="546" y1="691" x2="576" y2="691"/>
<line x1="238" y1="778" x2="376" y2="778"/>
<line x1="268" y1="792" x2="376" y2="792"/>
<line x1="438" y1="785" x2="494" y2="785"/>
<line x1="494" y1="785" x2="494" y2="842"/>
<line x1="494" y1="842" x2="504" y2="842"/>
<line x1="112" y1="830" x2="376" y2="830"/>
<line x1="190" y1="844" x2="376" y2="844"/>
<line x1="438" y1="837" x2="474" y2="837"/>
<line x1="474" y1="837" x2="474" y2="856"/>
<line x1="474" y1="856" x2="504" y2="856"/>
<line x1="34" y1="882" x2="376" y2="882"/>
<line x1="238" y1="896" x2="376" y2="896"/>
<line x1="438" y1="889" x2="464" y2="889"/>
<line x1="464" y1="889" x2="464" y2="870"/>
<line x1="464" y1="870" x2="504" y2="870"/>
<line x1="34" y1="934" x2="376" y2="934"/>
<line x1="268" y1="948" x2="376" y2="948"/>
<line x1="438" y1="941" x2="484" y2="941"/>
<line x1="484" y1="941" x2="484" y2="884"/>
<line x1="484" y1="884" x2="504" y2="884"/>
<line x1="566" y1="863" x2="596" y2="863"/>
<line x1="34" y1="52" x2="41" y2="52"/>
<line x1="73" y1="52" x2="82" y2="52"/>
<line x1="112" y1="52" x2="119" y2="52"/>
<line x1="151" y1="52" x2="160" y2="52"/>
<line x1="190" y1="52" x2="197" y2="52"/>
<line x1="229" y1="52" x2="238" y2="52"/>
<line x1="268" y1="52" x2="275" y2="52"/>
<line x1="307" y1="52" x2="316" y2="52"/>
<path d="M376,106 H402 A26,21 0 0 1 402,148 H376 Z"/>
<circle cx="433" cy="127" r="5"/>
<path d="M376,158 H402 A26,21 0 0 1 402,200 H376 Z"/>
<circle cx="433" cy="179" r="5"/>
<path d="M504,118 H530 A26,35 0 0 1 530,188 H504 Z"/>
<circle cx="561" cy="153" r="5"/>
<path d="M484,250 H510 A26,21 0 0 1 510,292 H484 Z"/>
<circle cx="541" cy="271" r="5"/>
<path d="M494,321 H520 A26,28 0 0 1 520,377 H494 Z"/>
<circle cx="551" cy="349" r="5"/>
<path d="M376,406 H402 A26,21 0 0 1 402,448 H376 Z"/>
<circle cx="433" cy="427" r="5"/>
<path d="M376,458 H402 A26,21 0 0 1 402,500 H376 Z"/>
<circle cx="433" cy="479" r="5"/>
<path d="M376,510 H402 A26,28 0 0 1 402,566 H376 Z"/>
<circle cx="433" cy="538" r="5"/>
<path d="M376,576 H402 A26,21 0 0 1 402,618 H376 Z"/>
<circle cx="433" cy="597" r="5"/>
<path d="M504,477 H530 A26,35 0 0 1 530,547 H504 Z"/>
<circle cx="561" cy="512" r="5"/>
<path d="M376,644 H402 A26,21 0 0 1 402,686 H376 Z"/>
<circle cx="433" cy="665" r="5"/>
<path d="M376,696 H402 A26,21 0 0 1 402,738 H376 Z"/>
<circle cx="433" cy="717" r="5"/>
<path d="M484,670 H510 A26,21 0 0 1 510,712 H484 Z"/>
<circle cx="541" cy="691" r="5"/>
<path d="M376,764 H402 A26,21 0 0 1 402,806 H376 Z"/>
<circle cx="433" cy="785" r="5"/>
<path d="M376,816 H402 A26,21 0 0 1 402,858 H376 Z"/>
<circle cx="433" cy="837" r="5"/>
<path d="M376,868 H402 A26,21 0 0 1 402,910 H376 Z"/>
<circle cx="433" cy="889" r="5"/>
<path d="M376,920 H402 A26,21 0 0 1 402,962 H376 Z"/>
<circle cx="433" cy="941" r="5"/>
<path d="M504,828 H530 A26,35 0 0 1 530,898 H504 Z"/>
<circle cx="561" cy="863" r="5"/>
<polygon points="41,40 41,64 63,52"/>
<circle cx="68" cy="52" r="5"/>
<polygon points="119,40 119,64 141,52"/>
<circle cx="146" cy="52" r="5"/>
<polygon points="197,40 197,64 219,52"/>
<circle cx="224" cy="52" r="5"/>
<polygon points="275,40 275,64 297,52"/>
<circle cx="302" cy="52" r="5"/>
<circle cx="112" cy="89" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="120" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="134" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="172" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316" cy="186" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="82" cy="217" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="259" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="160" cy="283" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="325" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="349" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="373" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="160" cy="420" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="434" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="472" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="486" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="82" cy="524" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="538" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316" cy="552" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="590" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="604" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="658" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="672" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="710" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="724" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="778" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="792" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="830" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="844" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="882" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="896" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="934" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="948" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="52" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="602" y="159">a</text>
<text x="582" y="277">b</text>
<text x="592" y="355">c</text>
<text x="602" y="518">d</text>
<text x="582" y="697">f</text>
<text x="602" y="869">g</text>
<text x="34" y="22" text-anchor="middle">A</text>
<text x="112" y="22" text-anchor="middle">B</text>
<text x="190" y="22" text-anchor="middle">C</text>
<text x="268" y="22" text-anchor="middle">D</text>
</svg>
</div>

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="74" height="118" viewBox="0 0 74 118" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(10,8) scale(1.1)"><path d="M7,4 L37,4 L33,10 L11,10 Z" fill-opacity="1"/><path d="M38,5 L38,35 L32,31 L32,11 Z" fill-opacity="1"/><path d="M38,41 L38,71 L32,65 L32,45 Z" fill-opacity="1"/><path d="M7,72 L37,72 L33,66 L11,66 Z" fill-opacity="1"/><path d="M6,41 L6,71 L12,65 L12,45 Z" fill-opacity="0.1"/><path d="M6,5 L6,35 L12,31 L12,11 Z" fill-opacity="1"/><path d="M7,38 L11,34 L33,34 L37,38 L33,42 L11,42 Z" fill-opacity="1"/></g>
<text x="34.2" y="108" text-anchor="middle">9</text>
</svg>
</div>

### วงจรของเลข 0 (Excess-3, OR/AND) {code=xs3; method=orand; digit=0}

$\mathbf{Sol}^{n}$

เลข $0$ ใช้ segment $a, b, c, d, e, f$ จึงเขียนวงจรเฉพาะ segment เหล่านี้ ต่อเข้าด้วยกันเป็นวงจรเดียว : แต่ละพจน์ผลบวกใช้ OR เกต แล้วนำทุกพจน์เข้า AND เกต (พจน์ที่มีตัวแปรตัวเดียวต่อเข้า AND เกตได้เลย)

$\mathbf{Ans}\quad \begin{aligned}a &= (A+C+D)(\overline{B}+\overline{C}+\overline{D}) \\ b &= (B+C) \\ c &= (\overline{B}+C+\overline{D}) \\ d &= (A+C+D)(\overline{B}+\overline{C}+\overline{D})(\overline{A}+\overline{C}+D) \\ e &= (D)(\overline{B}+\overline{C}) \\ f &= (A+C)(\overline{C}+D)\end{aligned}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="628" height="806" viewBox="0 0 628 806" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<line x1="82" y1="52" x2="82" y2="526"/>
<line x1="34" y1="28" x2="34" y2="700"/>
<line x1="160" y1="52" x2="160" y2="632"/>
<line x1="112" y1="28" x2="112" y2="244"/>
<line x1="238" y1="52" x2="238" y2="752"/>
<line x1="190" y1="28" x2="190" y2="714"/>
<line x1="316" y1="52" x2="316" y2="488"/>
<line x1="268" y1="28" x2="268" y2="766"/>
<line x1="34" y1="96" x2="381.2" y2="96"/>
<line x1="190" y1="110" x2="383" y2="110"/>
<line x1="268" y1="124" x2="381.2" y2="124"/>
<line x1="436" y1="110" x2="472" y2="110"/>
<line x1="472" y1="110" x2="472" y2="136"/>
<line x1="472" y1="136" x2="482" y2="136"/>
<line x1="160" y1="162" x2="381.2" y2="162"/>
<line x1="238" y1="176" x2="383" y2="176"/>
<line x1="316" y1="190" x2="381.2" y2="190"/>
<line x1="436" y1="176" x2="462" y2="176"/>
<line x1="462" y1="176" x2="462" y2="150"/>
<line x1="462" y1="150" x2="482" y2="150"/>
<line x1="534" y1="143" x2="564" y2="143"/>
<line x1="112" y1="244" x2="382.2" y2="244"/>
<line x1="190" y1="258" x2="382.2" y2="258"/>
<line x1="436" y1="251" x2="466" y2="251"/>
<line x1="160" y1="312" x2="381.2" y2="312"/>
<line x1="190" y1="326" x2="383" y2="326"/>
<line x1="316" y1="340" x2="381.2" y2="340"/>
<line x1="436" y1="326" x2="466" y2="326"/>
<line x1="34" y1="394" x2="381.2" y2="394"/>
<line x1="190" y1="408" x2="383" y2="408"/>
<line x1="268" y1="422" x2="381.2" y2="422"/>
<line x1="436" y1="408" x2="482" y2="408"/>
<line x1="482" y1="408" x2="482" y2="460"/>
<line x1="482" y1="460" x2="492" y2="460"/>
<line x1="160" y1="460" x2="381.2" y2="460"/>
<line x1="238" y1="474" x2="383" y2="474"/>
<line x1="316" y1="488" x2="381.2" y2="488"/>
<line x1="436" y1="474" x2="492" y2="474"/>
<line x1="82" y1="526" x2="381.2" y2="526"/>
<line x1="238" y1="540" x2="383" y2="540"/>
<line x1="268" y1="554" x2="381.2" y2="554"/>
<line x1="436" y1="540" x2="472" y2="540"/>
<line x1="472" y1="540" x2="472" y2="488"/>
<line x1="472" y1="488" x2="492" y2="488"/>
<line x1="544" y1="474" x2="574" y2="474"/>
<line x1="268" y1="601" x2="472" y2="601"/>
<line x1="472" y1="601" x2="472" y2="620"/>
<line x1="472" y1="620" x2="482" y2="620"/>
<line x1="160" y1="632" x2="382.2" y2="632"/>
<line x1="238" y1="646" x2="382.2" y2="646"/>
<line x1="436" y1="639" x2="462" y2="639"/>
<line x1="462" y1="639" x2="462" y2="634"/>
<line x1="462" y1="634" x2="482" y2="634"/>
<line x1="534" y1="627" x2="564" y2="627"/>
<line x1="34" y1="700" x2="382.2" y2="700"/>
<line x1="190" y1="714" x2="382.2" y2="714"/>
<line x1="436" y1="707" x2="472" y2="707"/>
<line x1="472" y1="707" x2="472" y2="726"/>
<line x1="472" y1="726" x2="482" y2="726"/>
<line x1="238" y1="752" x2="382.2" y2="752"/>
<line x1="268" y1="766" x2="382.2" y2="766"/>
<line x1="436" y1="759" x2="462" y2="759"/>
<line x1="462" y1="759" x2="462" y2="740"/>
<line x1="462" y1="740" x2="482" y2="740"/>
<line x1="534" y1="733" x2="564" y2="733"/>
<line x1="34" y1="52" x2="41" y2="52"/>
<line x1="73" y1="52" x2="82" y2="52"/>
<line x1="112" y1="52" x2="119" y2="52"/>
<line x1="151" y1="52" x2="160" y2="52"/>
<line x1="190" y1="52" x2="197" y2="52"/>
<line x1="229" y1="52" x2="238" y2="52"/>
<line x1="268" y1="52" x2="275" y2="52"/>
<line x1="307" y1="52" x2="316" y2="52"/>
<path d="M376,82 C398,82 424,96 436,110 C424,124 398,138 376,138 Q390,110 376,82 Z"/>
<path d="M376,148 C398,148 424,162 436,176 C424,190 398,204 376,204 Q390,176 376,148 Z"/>
<path d="M482,122 H508 A26,21 0 0 1 508,164 H482 Z"/>
<path d="M376,230 C398,230 424,240.5 436,251 C424,261.5 398,272 376,272 Q390,251 376,230 Z"/>
<path d="M376,298 C398,298 424,312 436,326 C424,340 398,354 376,354 Q390,326 376,298 Z"/>
<path d="M376,380 C398,380 424,394 436,408 C424,422 398,436 376,436 Q390,408 376,380 Z"/>
<path d="M376,446 C398,446 424,460 436,474 C424,488 398,502 376,502 Q390,474 376,446 Z"/>
<path d="M376,512 C398,512 424,526 436,540 C424,554 398,568 376,568 Q390,540 376,512 Z"/>
<path d="M492,446 H518 A26,28 0 0 1 518,502 H492 Z"/>
<path d="M376,618 C398,618 424,628.5 436,639 C424,649.5 398,660 376,660 Q390,639 376,618 Z"/>
<path d="M482,606 H508 A26,21 0 0 1 508,648 H482 Z"/>
<path d="M376,686 C398,686 424,696.5 436,707 C424,717.5 398,728 376,728 Q390,707 376,686 Z"/>
<path d="M376,738 C398,738 424,748.5 436,759 C424,769.5 398,780 376,780 Q390,759 376,738 Z"/>
<path d="M482,712 H508 A26,21 0 0 1 508,754 H482 Z"/>
<polygon points="41,40 41,64 63,52"/>
<circle cx="68" cy="52" r="5"/>
<polygon points="119,40 119,64 141,52"/>
<circle cx="146" cy="52" r="5"/>
<polygon points="197,40 197,64 219,52"/>
<circle cx="224" cy="52" r="5"/>
<polygon points="275,40 275,64 297,52"/>
<circle cx="302" cy="52" r="5"/>
<circle cx="34" cy="96" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="110" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="124" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="160" cy="162" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="176" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316" cy="190" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="244" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="258" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="160" cy="312" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="326" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316" cy="340" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="394" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="408" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="422" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="160" cy="460" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="474" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316" cy="488" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="82" cy="526" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="540" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="554" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="601" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="160" cy="632" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="646" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="700" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="714" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="752" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="766" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="52" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="570" y="149">a</text>
<text x="472" y="257">b</text>
<text x="472" y="332">c</text>
<text x="580" y="480">d</text>
<text x="570" y="633">e</text>
<text x="570" y="739">f</text>
<text x="34" y="22" text-anchor="middle">A</text>
<text x="112" y="22" text-anchor="middle">B</text>
<text x="190" y="22" text-anchor="middle">C</text>
<text x="268" y="22" text-anchor="middle">D</text>
</svg>
</div>

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="74" height="118" viewBox="0 0 74 118" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(10,8) scale(1.1)"><path d="M7,4 L37,4 L33,10 L11,10 Z" fill-opacity="1"/><path d="M38,5 L38,35 L32,31 L32,11 Z" fill-opacity="1"/><path d="M38,41 L38,71 L32,65 L32,45 Z" fill-opacity="1"/><path d="M7,72 L37,72 L33,66 L11,66 Z" fill-opacity="1"/><path d="M6,41 L6,71 L12,65 L12,45 Z" fill-opacity="1"/><path d="M6,5 L6,35 L12,31 L12,11 Z" fill-opacity="1"/><path d="M7,38 L11,34 L33,34 L37,38 L33,42 L11,42 Z" fill-opacity="0.1"/></g>
<text x="34.2" y="108" text-anchor="middle">0</text>
</svg>
</div>

### วงจรของเลข 1 (Excess-3, OR/AND) {code=xs3; method=orand; digit=1}

$\mathbf{Sol}^{n}$

เลข $1$ ใช้ segment $b, c$ จึงเขียนวงจรเฉพาะ segment เหล่านี้ ต่อเข้าด้วยกันเป็นวงจรเดียว : แต่ละพจน์ผลบวกใช้ OR เกต แล้วนำทุกพจน์เข้า AND เกต (พจน์ที่มีตัวแปรตัวเดียวต่อเข้า AND เกตได้เลย)

$\mathbf{Ans}\quad \begin{aligned}b &= (B+C) \\ c &= (\overline{B}+C+\overline{D})\end{aligned}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="396" height="232" viewBox="0 0 396 232" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<line x1="82" y1="52" x2="82" y2="164"/>
<line x1="34" y1="28" x2="34" y2="96"/>
<line x1="112" y1="28" x2="112" y2="178"/>
<line x1="192" y1="52" x2="192" y2="192"/>
<line x1="144" y1="28" x2="144" y2="52"/>
<line x1="34" y1="96" x2="258.2" y2="96"/>
<line x1="112" y1="110" x2="258.2" y2="110"/>
<line x1="312" y1="103" x2="342" y2="103"/>
<line x1="82" y1="164" x2="257.2" y2="164"/>
<line x1="112" y1="178" x2="259" y2="178"/>
<line x1="192" y1="192" x2="257.2" y2="192"/>
<line x1="312" y1="178" x2="342" y2="178"/>
<line x1="34" y1="52" x2="41" y2="52"/>
<line x1="73" y1="52" x2="82" y2="52"/>
<line x1="144" y1="52" x2="151" y2="52"/>
<line x1="183" y1="52" x2="192" y2="52"/>
<path d="M252,82 C274,82 300,92.5 312,103 C300,113.5 274,124 252,124 Q266,103 252,82 Z"/>
<path d="M252,150 C274,150 300,164 312,178 C300,192 274,206 252,206 Q266,178 252,150 Z"/>
<polygon points="41,40 41,64 63,52"/>
<circle cx="68" cy="52" r="5"/>
<polygon points="151,40 151,64 173,52"/>
<circle cx="178" cy="52" r="5"/>
<circle cx="34" cy="96" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="110" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="82" cy="164" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="178" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="192" cy="192" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="52" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="348" y="109">b</text>
<text x="348" y="184">c</text>
<text x="34" y="22" text-anchor="middle">B</text>
<text x="112" y="22" text-anchor="middle">C</text>
<text x="144" y="22" text-anchor="middle">D</text>
</svg>
</div>

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="74" height="118" viewBox="0 0 74 118" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(10,8) scale(1.1)"><path d="M7,4 L37,4 L33,10 L11,10 Z" fill-opacity="0.1"/><path d="M38,5 L38,35 L32,31 L32,11 Z" fill-opacity="1"/><path d="M38,41 L38,71 L32,65 L32,45 Z" fill-opacity="1"/><path d="M7,72 L37,72 L33,66 L11,66 Z" fill-opacity="0.1"/><path d="M6,41 L6,71 L12,65 L12,45 Z" fill-opacity="0.1"/><path d="M6,5 L6,35 L12,31 L12,11 Z" fill-opacity="0.1"/><path d="M7,38 L11,34 L33,34 L37,38 L33,42 L11,42 Z" fill-opacity="0.1"/></g>
<text x="34.2" y="108" text-anchor="middle">1</text>
</svg>
</div>

### วงจรของเลข 2 (Excess-3, OR/AND) {code=xs3; method=orand; digit=2}

$\mathbf{Sol}^{n}$

เลข $2$ ใช้ segment $a, b, d, e, g$ จึงเขียนวงจรเฉพาะ segment เหล่านี้ ต่อเข้าด้วยกันเป็นวงจรเดียว : แต่ละพจน์ผลบวกใช้ OR เกต แล้วนำทุกพจน์เข้า AND เกต (พจน์ที่มีตัวแปรตัวเดียวต่อเข้า AND เกตได้เลย)

$\mathbf{Ans}\quad \begin{aligned}a &= (A+C+D)(\overline{B}+\overline{C}+\overline{D}) \\ b &= (B+C) \\ d &= (A+C+D)(\overline{B}+\overline{C}+\overline{D})(\overline{A}+\overline{C}+D) \\ e &= (D)(\overline{B}+\overline{C}) \\ g &= (A+B)(A+C+D)(\overline{A}+\overline{C}+D)\end{aligned}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="628" height="804" viewBox="0 0 628 804" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<line x1="82" y1="52" x2="82" y2="736"/>
<line x1="34" y1="28" x2="34" y2="670"/>
<line x1="160" y1="52" x2="160" y2="550"/>
<line x1="112" y1="28" x2="112" y2="632"/>
<line x1="238" y1="52" x2="238" y2="750"/>
<line x1="190" y1="28" x2="190" y2="684"/>
<line x1="316" y1="52" x2="316" y2="406"/>
<line x1="268" y1="28" x2="268" y2="764"/>
<line x1="34" y1="96" x2="381.2" y2="96"/>
<line x1="190" y1="110" x2="383" y2="110"/>
<line x1="268" y1="124" x2="381.2" y2="124"/>
<line x1="436" y1="110" x2="472" y2="110"/>
<line x1="472" y1="110" x2="472" y2="136"/>
<line x1="472" y1="136" x2="482" y2="136"/>
<line x1="160" y1="162" x2="381.2" y2="162"/>
<line x1="238" y1="176" x2="383" y2="176"/>
<line x1="316" y1="190" x2="381.2" y2="190"/>
<line x1="436" y1="176" x2="462" y2="176"/>
<line x1="462" y1="176" x2="462" y2="150"/>
<line x1="462" y1="150" x2="482" y2="150"/>
<line x1="534" y1="143" x2="564" y2="143"/>
<line x1="112" y1="244" x2="382.2" y2="244"/>
<line x1="190" y1="258" x2="382.2" y2="258"/>
<line x1="436" y1="251" x2="466" y2="251"/>
<line x1="34" y1="312" x2="381.2" y2="312"/>
<line x1="190" y1="326" x2="383" y2="326"/>
<line x1="268" y1="340" x2="381.2" y2="340"/>
<line x1="436" y1="326" x2="482" y2="326"/>
<line x1="482" y1="326" x2="482" y2="378"/>
<line x1="482" y1="378" x2="492" y2="378"/>
<line x1="160" y1="378" x2="381.2" y2="378"/>
<line x1="238" y1="392" x2="383" y2="392"/>
<line x1="316" y1="406" x2="381.2" y2="406"/>
<line x1="436" y1="392" x2="492" y2="392"/>
<line x1="82" y1="444" x2="381.2" y2="444"/>
<line x1="238" y1="458" x2="383" y2="458"/>
<line x1="268" y1="472" x2="381.2" y2="472"/>
<line x1="436" y1="458" x2="472" y2="458"/>
<line x1="472" y1="458" x2="472" y2="406"/>
<line x1="472" y1="406" x2="492" y2="406"/>
<line x1="544" y1="392" x2="574" y2="392"/>
<line x1="268" y1="519" x2="472" y2="519"/>
<line x1="472" y1="519" x2="472" y2="538"/>
<line x1="472" y1="538" x2="482" y2="538"/>
<line x1="160" y1="550" x2="382.2" y2="550"/>
<line x1="238" y1="564" x2="382.2" y2="564"/>
<line x1="436" y1="557" x2="462" y2="557"/>
<line x1="462" y1="557" x2="462" y2="552"/>
<line x1="462" y1="552" x2="482" y2="552"/>
<line x1="534" y1="545" x2="564" y2="545"/>
<line x1="34" y1="618" x2="382.2" y2="618"/>
<line x1="112" y1="632" x2="382.2" y2="632"/>
<line x1="436" y1="625" x2="482" y2="625"/>
<line x1="482" y1="625" x2="482" y2="677"/>
<line x1="482" y1="677" x2="492" y2="677"/>
<line x1="34" y1="670" x2="381.2" y2="670"/>
<line x1="190" y1="684" x2="383" y2="684"/>
<line x1="268" y1="698" x2="381.2" y2="698"/>
<line x1="436" y1="684" x2="462" y2="684"/>
<line x1="462" y1="684" x2="462" y2="691"/>
<line x1="462" y1="691" x2="492" y2="691"/>
<line x1="82" y1="736" x2="381.2" y2="736"/>
<line x1="238" y1="750" x2="383" y2="750"/>
<line x1="268" y1="764" x2="381.2" y2="764"/>
<line x1="436" y1="750" x2="472" y2="750"/>
<line x1="472" y1="750" x2="472" y2="705"/>
<line x1="472" y1="705" x2="492" y2="705"/>
<line x1="544" y1="691" x2="574" y2="691"/>
<line x1="34" y1="52" x2="41" y2="52"/>
<line x1="73" y1="52" x2="82" y2="52"/>
<line x1="112" y1="52" x2="119" y2="52"/>
<line x1="151" y1="52" x2="160" y2="52"/>
<line x1="190" y1="52" x2="197" y2="52"/>
<line x1="229" y1="52" x2="238" y2="52"/>
<line x1="268" y1="52" x2="275" y2="52"/>
<line x1="307" y1="52" x2="316" y2="52"/>
<path d="M376,82 C398,82 424,96 436,110 C424,124 398,138 376,138 Q390,110 376,82 Z"/>
<path d="M376,148 C398,148 424,162 436,176 C424,190 398,204 376,204 Q390,176 376,148 Z"/>
<path d="M482,122 H508 A26,21 0 0 1 508,164 H482 Z"/>
<path d="M376,230 C398,230 424,240.5 436,251 C424,261.5 398,272 376,272 Q390,251 376,230 Z"/>
<path d="M376,298 C398,298 424,312 436,326 C424,340 398,354 376,354 Q390,326 376,298 Z"/>
<path d="M376,364 C398,364 424,378 436,392 C424,406 398,420 376,420 Q390,392 376,364 Z"/>
<path d="M376,430 C398,430 424,444 436,458 C424,472 398,486 376,486 Q390,458 376,430 Z"/>
<path d="M492,364 H518 A26,28 0 0 1 518,420 H492 Z"/>
<path d="M376,536 C398,536 424,546.5 436,557 C424,567.5 398,578 376,578 Q390,557 376,536 Z"/>
<path d="M482,524 H508 A26,21 0 0 1 508,566 H482 Z"/>
<path d="M376,604 C398,604 424,614.5 436,625 C424,635.5 398,646 376,646 Q390,625 376,604 Z"/>
<path d="M376,656 C398,656 424,670 436,684 C424,698 398,712 376,712 Q390,684 376,656 Z"/>
<path d="M376,722 C398,722 424,736 436,750 C424,764 398,778 376,778 Q390,750 376,722 Z"/>
<path d="M492,663 H518 A26,28 0 0 1 518,719 H492 Z"/>
<polygon points="41,40 41,64 63,52"/>
<circle cx="68" cy="52" r="5"/>
<polygon points="119,40 119,64 141,52"/>
<circle cx="146" cy="52" r="5"/>
<polygon points="197,40 197,64 219,52"/>
<circle cx="224" cy="52" r="5"/>
<polygon points="275,40 275,64 297,52"/>
<circle cx="302" cy="52" r="5"/>
<circle cx="34" cy="96" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="110" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="124" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="160" cy="162" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="176" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316" cy="190" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="244" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="258" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="312" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="326" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="340" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="160" cy="378" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="392" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316" cy="406" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="82" cy="444" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="458" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="472" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="519" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="160" cy="550" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="564" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="618" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="632" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="670" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="684" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="698" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="82" cy="736" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="750" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="764" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="52" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="570" y="149">a</text>
<text x="472" y="257">b</text>
<text x="580" y="398">d</text>
<text x="570" y="551">e</text>
<text x="580" y="697">g</text>
<text x="34" y="22" text-anchor="middle">A</text>
<text x="112" y="22" text-anchor="middle">B</text>
<text x="190" y="22" text-anchor="middle">C</text>
<text x="268" y="22" text-anchor="middle">D</text>
</svg>
</div>

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="74" height="118" viewBox="0 0 74 118" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(10,8) scale(1.1)"><path d="M7,4 L37,4 L33,10 L11,10 Z" fill-opacity="1"/><path d="M38,5 L38,35 L32,31 L32,11 Z" fill-opacity="1"/><path d="M38,41 L38,71 L32,65 L32,45 Z" fill-opacity="0.1"/><path d="M7,72 L37,72 L33,66 L11,66 Z" fill-opacity="1"/><path d="M6,41 L6,71 L12,65 L12,45 Z" fill-opacity="1"/><path d="M6,5 L6,35 L12,31 L12,11 Z" fill-opacity="0.1"/><path d="M7,38 L11,34 L33,34 L37,38 L33,42 L11,42 Z" fill-opacity="1"/></g>
<text x="34.2" y="108" text-anchor="middle">2</text>
</svg>
</div>

### วงจรของเลข 3 (Excess-3, OR/AND) {code=xs3; method=orand; digit=3}

$\mathbf{Sol}^{n}$

เลข $3$ ใช้ segment $a, b, c, d, g$ จึงเขียนวงจรเฉพาะ segment เหล่านี้ ต่อเข้าด้วยกันเป็นวงจรเดียว : แต่ละพจน์ผลบวกใช้ OR เกต แล้วนำทุกพจน์เข้า AND เกต (พจน์ที่มีตัวแปรตัวเดียวต่อเข้า AND เกตได้เลย)

$\mathbf{Ans}\quad \begin{aligned}a &= (A+C+D)(\overline{B}+\overline{C}+\overline{D}) \\ b &= (B+C) \\ c &= (\overline{B}+C+\overline{D}) \\ d &= (A+C+D)(\overline{B}+\overline{C}+\overline{D})(\overline{A}+\overline{C}+D) \\ g &= (A+B)(A+C+D)(\overline{A}+\overline{C}+D)\end{aligned}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="628" height="794" viewBox="0 0 628 794" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<line x1="82" y1="52" x2="82" y2="726"/>
<line x1="34" y1="28" x2="34" y2="660"/>
<line x1="160" y1="52" x2="160" y2="460"/>
<line x1="112" y1="28" x2="112" y2="622"/>
<line x1="238" y1="52" x2="238" y2="740"/>
<line x1="190" y1="28" x2="190" y2="674"/>
<line x1="316" y1="52" x2="316" y2="488"/>
<line x1="268" y1="28" x2="268" y2="754"/>
<line x1="34" y1="96" x2="381.2" y2="96"/>
<line x1="190" y1="110" x2="383" y2="110"/>
<line x1="268" y1="124" x2="381.2" y2="124"/>
<line x1="436" y1="110" x2="472" y2="110"/>
<line x1="472" y1="110" x2="472" y2="136"/>
<line x1="472" y1="136" x2="482" y2="136"/>
<line x1="160" y1="162" x2="381.2" y2="162"/>
<line x1="238" y1="176" x2="383" y2="176"/>
<line x1="316" y1="190" x2="381.2" y2="190"/>
<line x1="436" y1="176" x2="462" y2="176"/>
<line x1="462" y1="176" x2="462" y2="150"/>
<line x1="462" y1="150" x2="482" y2="150"/>
<line x1="534" y1="143" x2="564" y2="143"/>
<line x1="112" y1="244" x2="382.2" y2="244"/>
<line x1="190" y1="258" x2="382.2" y2="258"/>
<line x1="436" y1="251" x2="466" y2="251"/>
<line x1="160" y1="312" x2="381.2" y2="312"/>
<line x1="190" y1="326" x2="383" y2="326"/>
<line x1="316" y1="340" x2="381.2" y2="340"/>
<line x1="436" y1="326" x2="466" y2="326"/>
<line x1="34" y1="394" x2="381.2" y2="394"/>
<line x1="190" y1="408" x2="383" y2="408"/>
<line x1="268" y1="422" x2="381.2" y2="422"/>
<line x1="436" y1="408" x2="482" y2="408"/>
<line x1="482" y1="408" x2="482" y2="460"/>
<line x1="482" y1="460" x2="492" y2="460"/>
<line x1="160" y1="460" x2="381.2" y2="460"/>
<line x1="238" y1="474" x2="383" y2="474"/>
<line x1="316" y1="488" x2="381.2" y2="488"/>
<line x1="436" y1="474" x2="492" y2="474"/>
<line x1="82" y1="526" x2="381.2" y2="526"/>
<line x1="238" y1="540" x2="383" y2="540"/>
<line x1="268" y1="554" x2="381.2" y2="554"/>
<line x1="436" y1="540" x2="472" y2="540"/>
<line x1="472" y1="540" x2="472" y2="488"/>
<line x1="472" y1="488" x2="492" y2="488"/>
<line x1="544" y1="474" x2="574" y2="474"/>
<line x1="34" y1="608" x2="382.2" y2="608"/>
<line x1="112" y1="622" x2="382.2" y2="622"/>
<line x1="436" y1="615" x2="482" y2="615"/>
<line x1="482" y1="615" x2="482" y2="667"/>
<line x1="482" y1="667" x2="492" y2="667"/>
<line x1="34" y1="660" x2="381.2" y2="660"/>
<line x1="190" y1="674" x2="383" y2="674"/>
<line x1="268" y1="688" x2="381.2" y2="688"/>
<line x1="436" y1="674" x2="462" y2="674"/>
<line x1="462" y1="674" x2="462" y2="681"/>
<line x1="462" y1="681" x2="492" y2="681"/>
<line x1="82" y1="726" x2="381.2" y2="726"/>
<line x1="238" y1="740" x2="383" y2="740"/>
<line x1="268" y1="754" x2="381.2" y2="754"/>
<line x1="436" y1="740" x2="472" y2="740"/>
<line x1="472" y1="740" x2="472" y2="695"/>
<line x1="472" y1="695" x2="492" y2="695"/>
<line x1="544" y1="681" x2="574" y2="681"/>
<line x1="34" y1="52" x2="41" y2="52"/>
<line x1="73" y1="52" x2="82" y2="52"/>
<line x1="112" y1="52" x2="119" y2="52"/>
<line x1="151" y1="52" x2="160" y2="52"/>
<line x1="190" y1="52" x2="197" y2="52"/>
<line x1="229" y1="52" x2="238" y2="52"/>
<line x1="268" y1="52" x2="275" y2="52"/>
<line x1="307" y1="52" x2="316" y2="52"/>
<path d="M376,82 C398,82 424,96 436,110 C424,124 398,138 376,138 Q390,110 376,82 Z"/>
<path d="M376,148 C398,148 424,162 436,176 C424,190 398,204 376,204 Q390,176 376,148 Z"/>
<path d="M482,122 H508 A26,21 0 0 1 508,164 H482 Z"/>
<path d="M376,230 C398,230 424,240.5 436,251 C424,261.5 398,272 376,272 Q390,251 376,230 Z"/>
<path d="M376,298 C398,298 424,312 436,326 C424,340 398,354 376,354 Q390,326 376,298 Z"/>
<path d="M376,380 C398,380 424,394 436,408 C424,422 398,436 376,436 Q390,408 376,380 Z"/>
<path d="M376,446 C398,446 424,460 436,474 C424,488 398,502 376,502 Q390,474 376,446 Z"/>
<path d="M376,512 C398,512 424,526 436,540 C424,554 398,568 376,568 Q390,540 376,512 Z"/>
<path d="M492,446 H518 A26,28 0 0 1 518,502 H492 Z"/>
<path d="M376,594 C398,594 424,604.5 436,615 C424,625.5 398,636 376,636 Q390,615 376,594 Z"/>
<path d="M376,646 C398,646 424,660 436,674 C424,688 398,702 376,702 Q390,674 376,646 Z"/>
<path d="M376,712 C398,712 424,726 436,740 C424,754 398,768 376,768 Q390,740 376,712 Z"/>
<path d="M492,653 H518 A26,28 0 0 1 518,709 H492 Z"/>
<polygon points="41,40 41,64 63,52"/>
<circle cx="68" cy="52" r="5"/>
<polygon points="119,40 119,64 141,52"/>
<circle cx="146" cy="52" r="5"/>
<polygon points="197,40 197,64 219,52"/>
<circle cx="224" cy="52" r="5"/>
<polygon points="275,40 275,64 297,52"/>
<circle cx="302" cy="52" r="5"/>
<circle cx="34" cy="96" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="110" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="124" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="160" cy="162" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="176" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316" cy="190" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="244" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="258" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="160" cy="312" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="326" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316" cy="340" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="394" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="408" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="422" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="160" cy="460" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="474" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316" cy="488" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="82" cy="526" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="540" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="554" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="608" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="622" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="660" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="674" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="688" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="82" cy="726" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="740" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="754" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="52" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="570" y="149">a</text>
<text x="472" y="257">b</text>
<text x="472" y="332">c</text>
<text x="580" y="480">d</text>
<text x="580" y="687">g</text>
<text x="34" y="22" text-anchor="middle">A</text>
<text x="112" y="22" text-anchor="middle">B</text>
<text x="190" y="22" text-anchor="middle">C</text>
<text x="268" y="22" text-anchor="middle">D</text>
</svg>
</div>

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="74" height="118" viewBox="0 0 74 118" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(10,8) scale(1.1)"><path d="M7,4 L37,4 L33,10 L11,10 Z" fill-opacity="1"/><path d="M38,5 L38,35 L32,31 L32,11 Z" fill-opacity="1"/><path d="M38,41 L38,71 L32,65 L32,45 Z" fill-opacity="1"/><path d="M7,72 L37,72 L33,66 L11,66 Z" fill-opacity="1"/><path d="M6,41 L6,71 L12,65 L12,45 Z" fill-opacity="0.1"/><path d="M6,5 L6,35 L12,31 L12,11 Z" fill-opacity="0.1"/><path d="M7,38 L11,34 L33,34 L37,38 L33,42 L11,42 Z" fill-opacity="1"/></g>
<text x="34.2" y="108" text-anchor="middle">3</text>
</svg>
</div>

### วงจรของเลข 4 (Excess-3, OR/AND) {code=xs3; method=orand; digit=4}

$\mathbf{Sol}^{n}$

เลข $4$ ใช้ segment $b, c, f, g$ จึงเขียนวงจรเฉพาะ segment เหล่านี้ ต่อเข้าด้วยกันเป็นวงจรเดียว : แต่ละพจน์ผลบวกใช้ OR เกต แล้วนำทุกพจน์เข้า AND เกต (พจน์ที่มีตัวแปรตัวเดียวต่อเข้า AND เกตได้เลย)

$\mathbf{Ans}\quad \begin{aligned}b &= (B+C) \\ c &= (\overline{B}+C+\overline{D}) \\ f &= (A+C)(\overline{C}+D) \\ g &= (A+B)(A+C+D)(\overline{A}+\overline{C}+D)\end{aligned}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="628" height="552" viewBox="0 0 628 552" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<line x1="82" y1="52" x2="82" y2="484"/>
<line x1="34" y1="28" x2="34" y2="418"/>
<line x1="160" y1="52" x2="160" y2="164"/>
<line x1="112" y1="28" x2="112" y2="380"/>
<line x1="238" y1="52" x2="238" y2="498"/>
<line x1="190" y1="28" x2="190" y2="432"/>
<line x1="316" y1="52" x2="316" y2="192"/>
<line x1="268" y1="28" x2="268" y2="512"/>
<line x1="112" y1="96" x2="382.2" y2="96"/>
<line x1="190" y1="110" x2="382.2" y2="110"/>
<line x1="436" y1="103" x2="466" y2="103"/>
<line x1="160" y1="164" x2="381.2" y2="164"/>
<line x1="190" y1="178" x2="383" y2="178"/>
<line x1="316" y1="192" x2="381.2" y2="192"/>
<line x1="436" y1="178" x2="466" y2="178"/>
<line x1="34" y1="246" x2="382.2" y2="246"/>
<line x1="190" y1="260" x2="382.2" y2="260"/>
<line x1="436" y1="253" x2="472" y2="253"/>
<line x1="472" y1="253" x2="472" y2="272"/>
<line x1="472" y1="272" x2="482" y2="272"/>
<line x1="238" y1="298" x2="382.2" y2="298"/>
<line x1="268" y1="312" x2="382.2" y2="312"/>
<line x1="436" y1="305" x2="462" y2="305"/>
<line x1="462" y1="305" x2="462" y2="286"/>
<line x1="462" y1="286" x2="482" y2="286"/>
<line x1="534" y1="279" x2="564" y2="279"/>
<line x1="34" y1="366" x2="382.2" y2="366"/>
<line x1="112" y1="380" x2="382.2" y2="380"/>
<line x1="436" y1="373" x2="482" y2="373"/>
<line x1="482" y1="373" x2="482" y2="425"/>
<line x1="482" y1="425" x2="492" y2="425"/>
<line x1="34" y1="418" x2="381.2" y2="418"/>
<line x1="190" y1="432" x2="383" y2="432"/>
<line x1="268" y1="446" x2="381.2" y2="446"/>
<line x1="436" y1="432" x2="462" y2="432"/>
<line x1="462" y1="432" x2="462" y2="439"/>
<line x1="462" y1="439" x2="492" y2="439"/>
<line x1="82" y1="484" x2="381.2" y2="484"/>
<line x1="238" y1="498" x2="383" y2="498"/>
<line x1="268" y1="512" x2="381.2" y2="512"/>
<line x1="436" y1="498" x2="472" y2="498"/>
<line x1="472" y1="498" x2="472" y2="453"/>
<line x1="472" y1="453" x2="492" y2="453"/>
<line x1="544" y1="439" x2="574" y2="439"/>
<line x1="34" y1="52" x2="41" y2="52"/>
<line x1="73" y1="52" x2="82" y2="52"/>
<line x1="112" y1="52" x2="119" y2="52"/>
<line x1="151" y1="52" x2="160" y2="52"/>
<line x1="190" y1="52" x2="197" y2="52"/>
<line x1="229" y1="52" x2="238" y2="52"/>
<line x1="268" y1="52" x2="275" y2="52"/>
<line x1="307" y1="52" x2="316" y2="52"/>
<path d="M376,82 C398,82 424,92.5 436,103 C424,113.5 398,124 376,124 Q390,103 376,82 Z"/>
<path d="M376,150 C398,150 424,164 436,178 C424,192 398,206 376,206 Q390,178 376,150 Z"/>
<path d="M376,232 C398,232 424,242.5 436,253 C424,263.5 398,274 376,274 Q390,253 376,232 Z"/>
<path d="M376,284 C398,284 424,294.5 436,305 C424,315.5 398,326 376,326 Q390,305 376,284 Z"/>
<path d="M482,258 H508 A26,21 0 0 1 508,300 H482 Z"/>
<path d="M376,352 C398,352 424,362.5 436,373 C424,383.5 398,394 376,394 Q390,373 376,352 Z"/>
<path d="M376,404 C398,404 424,418 436,432 C424,446 398,460 376,460 Q390,432 376,404 Z"/>
<path d="M376,470 C398,470 424,484 436,498 C424,512 398,526 376,526 Q390,498 376,470 Z"/>
<path d="M492,411 H518 A26,28 0 0 1 518,467 H492 Z"/>
<polygon points="41,40 41,64 63,52"/>
<circle cx="68" cy="52" r="5"/>
<polygon points="119,40 119,64 141,52"/>
<circle cx="146" cy="52" r="5"/>
<polygon points="197,40 197,64 219,52"/>
<circle cx="224" cy="52" r="5"/>
<polygon points="275,40 275,64 297,52"/>
<circle cx="302" cy="52" r="5"/>
<circle cx="112" cy="96" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="110" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="160" cy="164" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="178" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316" cy="192" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="246" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="260" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="298" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="312" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="366" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="380" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="418" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="432" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="446" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="82" cy="484" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="498" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="512" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="52" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="472" y="109">b</text>
<text x="472" y="184">c</text>
<text x="570" y="285">f</text>
<text x="580" y="445">g</text>
<text x="34" y="22" text-anchor="middle">A</text>
<text x="112" y="22" text-anchor="middle">B</text>
<text x="190" y="22" text-anchor="middle">C</text>
<text x="268" y="22" text-anchor="middle">D</text>
</svg>
</div>

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="74" height="118" viewBox="0 0 74 118" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(10,8) scale(1.1)"><path d="M7,4 L37,4 L33,10 L11,10 Z" fill-opacity="0.1"/><path d="M38,5 L38,35 L32,31 L32,11 Z" fill-opacity="1"/><path d="M38,41 L38,71 L32,65 L32,45 Z" fill-opacity="1"/><path d="M7,72 L37,72 L33,66 L11,66 Z" fill-opacity="0.1"/><path d="M6,41 L6,71 L12,65 L12,45 Z" fill-opacity="0.1"/><path d="M6,5 L6,35 L12,31 L12,11 Z" fill-opacity="1"/><path d="M7,38 L11,34 L33,34 L37,38 L33,42 L11,42 Z" fill-opacity="1"/></g>
<text x="34.2" y="108" text-anchor="middle">4</text>
</svg>
</div>

### วงจรของเลข 5 (Excess-3, OR/AND) {code=xs3; method=orand; digit=5}

$\mathbf{Sol}^{n}$

เลข $5$ ใช้ segment $a, c, d, f, g$ จึงเขียนวงจรเฉพาะ segment เหล่านี้ ต่อเข้าด้วยกันเป็นวงจรเดียว : แต่ละพจน์ผลบวกใช้ OR เกต แล้วนำทุกพจน์เข้า AND เกต (พจน์ที่มีตัวแปรตัวเดียวต่อเข้า AND เกตได้เลย)

$\mathbf{Ans}\quad \begin{aligned}a &= (A+C+D)(\overline{B}+\overline{C}+\overline{D}) \\ c &= (\overline{B}+C+\overline{D}) \\ d &= (A+C+D)(\overline{B}+\overline{C}+\overline{D})(\overline{A}+\overline{C}+D) \\ f &= (A+C)(\overline{C}+D) \\ g &= (A+B)(A+C+D)(\overline{A}+\overline{C}+D)\end{aligned}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="628" height="846" viewBox="0 0 628 846" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<line x1="82" y1="52" x2="82" y2="778"/>
<line x1="34" y1="28" x2="34" y2="712"/>
<line x1="160" y1="52" x2="160" y2="392"/>
<line x1="112" y1="28" x2="112" y2="674"/>
<line x1="238" y1="52" x2="238" y2="792"/>
<line x1="190" y1="28" x2="190" y2="726"/>
<line x1="316" y1="52" x2="316" y2="420"/>
<line x1="268" y1="28" x2="268" y2="806"/>
<line x1="34" y1="96" x2="381.2" y2="96"/>
<line x1="190" y1="110" x2="383" y2="110"/>
<line x1="268" y1="124" x2="381.2" y2="124"/>
<line x1="436" y1="110" x2="472" y2="110"/>
<line x1="472" y1="110" x2="472" y2="136"/>
<line x1="472" y1="136" x2="482" y2="136"/>
<line x1="160" y1="162" x2="381.2" y2="162"/>
<line x1="238" y1="176" x2="383" y2="176"/>
<line x1="316" y1="190" x2="381.2" y2="190"/>
<line x1="436" y1="176" x2="462" y2="176"/>
<line x1="462" y1="176" x2="462" y2="150"/>
<line x1="462" y1="150" x2="482" y2="150"/>
<line x1="534" y1="143" x2="564" y2="143"/>
<line x1="160" y1="244" x2="381.2" y2="244"/>
<line x1="190" y1="258" x2="383" y2="258"/>
<line x1="316" y1="272" x2="381.2" y2="272"/>
<line x1="436" y1="258" x2="466" y2="258"/>
<line x1="34" y1="326" x2="381.2" y2="326"/>
<line x1="190" y1="340" x2="383" y2="340"/>
<line x1="268" y1="354" x2="381.2" y2="354"/>
<line x1="436" y1="340" x2="482" y2="340"/>
<line x1="482" y1="340" x2="482" y2="392"/>
<line x1="482" y1="392" x2="492" y2="392"/>
<line x1="160" y1="392" x2="381.2" y2="392"/>
<line x1="238" y1="406" x2="383" y2="406"/>
<line x1="316" y1="420" x2="381.2" y2="420"/>
<line x1="436" y1="406" x2="492" y2="406"/>
<line x1="82" y1="458" x2="381.2" y2="458"/>
<line x1="238" y1="472" x2="383" y2="472"/>
<line x1="268" y1="486" x2="381.2" y2="486"/>
<line x1="436" y1="472" x2="472" y2="472"/>
<line x1="472" y1="472" x2="472" y2="420"/>
<line x1="472" y1="420" x2="492" y2="420"/>
<line x1="544" y1="406" x2="574" y2="406"/>
<line x1="34" y1="540" x2="382.2" y2="540"/>
<line x1="190" y1="554" x2="382.2" y2="554"/>
<line x1="436" y1="547" x2="472" y2="547"/>
<line x1="472" y1="547" x2="472" y2="566"/>
<line x1="472" y1="566" x2="482" y2="566"/>
<line x1="238" y1="592" x2="382.2" y2="592"/>
<line x1="268" y1="606" x2="382.2" y2="606"/>
<line x1="436" y1="599" x2="462" y2="599"/>
<line x1="462" y1="599" x2="462" y2="580"/>
<line x1="462" y1="580" x2="482" y2="580"/>
<line x1="534" y1="573" x2="564" y2="573"/>
<line x1="34" y1="660" x2="382.2" y2="660"/>
<line x1="112" y1="674" x2="382.2" y2="674"/>
<line x1="436" y1="667" x2="482" y2="667"/>
<line x1="482" y1="667" x2="482" y2="719"/>
<line x1="482" y1="719" x2="492" y2="719"/>
<line x1="34" y1="712" x2="381.2" y2="712"/>
<line x1="190" y1="726" x2="383" y2="726"/>
<line x1="268" y1="740" x2="381.2" y2="740"/>
<line x1="436" y1="726" x2="462" y2="726"/>
<line x1="462" y1="726" x2="462" y2="733"/>
<line x1="462" y1="733" x2="492" y2="733"/>
<line x1="82" y1="778" x2="381.2" y2="778"/>
<line x1="238" y1="792" x2="383" y2="792"/>
<line x1="268" y1="806" x2="381.2" y2="806"/>
<line x1="436" y1="792" x2="472" y2="792"/>
<line x1="472" y1="792" x2="472" y2="747"/>
<line x1="472" y1="747" x2="492" y2="747"/>
<line x1="544" y1="733" x2="574" y2="733"/>
<line x1="34" y1="52" x2="41" y2="52"/>
<line x1="73" y1="52" x2="82" y2="52"/>
<line x1="112" y1="52" x2="119" y2="52"/>
<line x1="151" y1="52" x2="160" y2="52"/>
<line x1="190" y1="52" x2="197" y2="52"/>
<line x1="229" y1="52" x2="238" y2="52"/>
<line x1="268" y1="52" x2="275" y2="52"/>
<line x1="307" y1="52" x2="316" y2="52"/>
<path d="M376,82 C398,82 424,96 436,110 C424,124 398,138 376,138 Q390,110 376,82 Z"/>
<path d="M376,148 C398,148 424,162 436,176 C424,190 398,204 376,204 Q390,176 376,148 Z"/>
<path d="M482,122 H508 A26,21 0 0 1 508,164 H482 Z"/>
<path d="M376,230 C398,230 424,244 436,258 C424,272 398,286 376,286 Q390,258 376,230 Z"/>
<path d="M376,312 C398,312 424,326 436,340 C424,354 398,368 376,368 Q390,340 376,312 Z"/>
<path d="M376,378 C398,378 424,392 436,406 C424,420 398,434 376,434 Q390,406 376,378 Z"/>
<path d="M376,444 C398,444 424,458 436,472 C424,486 398,500 376,500 Q390,472 376,444 Z"/>
<path d="M492,378 H518 A26,28 0 0 1 518,434 H492 Z"/>
<path d="M376,526 C398,526 424,536.5 436,547 C424,557.5 398,568 376,568 Q390,547 376,526 Z"/>
<path d="M376,578 C398,578 424,588.5 436,599 C424,609.5 398,620 376,620 Q390,599 376,578 Z"/>
<path d="M482,552 H508 A26,21 0 0 1 508,594 H482 Z"/>
<path d="M376,646 C398,646 424,656.5 436,667 C424,677.5 398,688 376,688 Q390,667 376,646 Z"/>
<path d="M376,698 C398,698 424,712 436,726 C424,740 398,754 376,754 Q390,726 376,698 Z"/>
<path d="M376,764 C398,764 424,778 436,792 C424,806 398,820 376,820 Q390,792 376,764 Z"/>
<path d="M492,705 H518 A26,28 0 0 1 518,761 H492 Z"/>
<polygon points="41,40 41,64 63,52"/>
<circle cx="68" cy="52" r="5"/>
<polygon points="119,40 119,64 141,52"/>
<circle cx="146" cy="52" r="5"/>
<polygon points="197,40 197,64 219,52"/>
<circle cx="224" cy="52" r="5"/>
<polygon points="275,40 275,64 297,52"/>
<circle cx="302" cy="52" r="5"/>
<circle cx="34" cy="96" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="110" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="124" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="160" cy="162" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="176" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316" cy="190" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="160" cy="244" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="258" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316" cy="272" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="326" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="340" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="354" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="160" cy="392" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="406" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316" cy="420" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="82" cy="458" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="472" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="486" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="540" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="554" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="592" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="606" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="660" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="674" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="712" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="726" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="740" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="82" cy="778" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="792" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="806" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="52" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="570" y="149">a</text>
<text x="472" y="264">c</text>
<text x="580" y="412">d</text>
<text x="570" y="579">f</text>
<text x="580" y="739">g</text>
<text x="34" y="22" text-anchor="middle">A</text>
<text x="112" y="22" text-anchor="middle">B</text>
<text x="190" y="22" text-anchor="middle">C</text>
<text x="268" y="22" text-anchor="middle">D</text>
</svg>
</div>

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="74" height="118" viewBox="0 0 74 118" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(10,8) scale(1.1)"><path d="M7,4 L37,4 L33,10 L11,10 Z" fill-opacity="1"/><path d="M38,5 L38,35 L32,31 L32,11 Z" fill-opacity="0.1"/><path d="M38,41 L38,71 L32,65 L32,45 Z" fill-opacity="1"/><path d="M7,72 L37,72 L33,66 L11,66 Z" fill-opacity="1"/><path d="M6,41 L6,71 L12,65 L12,45 Z" fill-opacity="0.1"/><path d="M6,5 L6,35 L12,31 L12,11 Z" fill-opacity="1"/><path d="M7,38 L11,34 L33,34 L37,38 L33,42 L11,42 Z" fill-opacity="1"/></g>
<text x="34.2" y="108" text-anchor="middle">5</text>
</svg>
</div>

### วงจรของเลข 6 (Excess-3, OR/AND) {code=xs3; method=orand; digit=6}

$\mathbf{Sol}^{n}$

เลข $6$ ใช้ segment $a, c, d, e, f, g$ จึงเขียนวงจรเฉพาะ segment เหล่านี้ ต่อเข้าด้วยกันเป็นวงจรเดียว : แต่ละพจน์ผลบวกใช้ OR เกต แล้วนำทุกพจน์เข้า AND เกต (พจน์ที่มีตัวแปรตัวเดียวต่อเข้า AND เกตได้เลย)

$\mathbf{Ans}\quad \begin{aligned}a &= (A+C+D)(\overline{B}+\overline{C}+\overline{D}) \\ c &= (\overline{B}+C+\overline{D}) \\ d &= (A+C+D)(\overline{B}+\overline{C}+\overline{D})(\overline{A}+\overline{C}+D) \\ e &= (D)(\overline{B}+\overline{C}) \\ f &= (A+C)(\overline{C}+D) \\ g &= (A+B)(A+C+D)(\overline{A}+\overline{C}+D)\end{aligned}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="628" height="938" viewBox="0 0 628 938" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<line x1="82" y1="52" x2="82" y2="870"/>
<line x1="34" y1="28" x2="34" y2="804"/>
<line x1="160" y1="52" x2="160" y2="564"/>
<line x1="112" y1="28" x2="112" y2="766"/>
<line x1="238" y1="52" x2="238" y2="884"/>
<line x1="190" y1="28" x2="190" y2="818"/>
<line x1="316" y1="52" x2="316" y2="420"/>
<line x1="268" y1="28" x2="268" y2="898"/>
<line x1="34" y1="96" x2="381.2" y2="96"/>
<line x1="190" y1="110" x2="383" y2="110"/>
<line x1="268" y1="124" x2="381.2" y2="124"/>
<line x1="436" y1="110" x2="472" y2="110"/>
<line x1="472" y1="110" x2="472" y2="136"/>
<line x1="472" y1="136" x2="482" y2="136"/>
<line x1="160" y1="162" x2="381.2" y2="162"/>
<line x1="238" y1="176" x2="383" y2="176"/>
<line x1="316" y1="190" x2="381.2" y2="190"/>
<line x1="436" y1="176" x2="462" y2="176"/>
<line x1="462" y1="176" x2="462" y2="150"/>
<line x1="462" y1="150" x2="482" y2="150"/>
<line x1="534" y1="143" x2="564" y2="143"/>
<line x1="160" y1="244" x2="381.2" y2="244"/>
<line x1="190" y1="258" x2="383" y2="258"/>
<line x1="316" y1="272" x2="381.2" y2="272"/>
<line x1="436" y1="258" x2="466" y2="258"/>
<line x1="34" y1="326" x2="381.2" y2="326"/>
<line x1="190" y1="340" x2="383" y2="340"/>
<line x1="268" y1="354" x2="381.2" y2="354"/>
<line x1="436" y1="340" x2="482" y2="340"/>
<line x1="482" y1="340" x2="482" y2="392"/>
<line x1="482" y1="392" x2="492" y2="392"/>
<line x1="160" y1="392" x2="381.2" y2="392"/>
<line x1="238" y1="406" x2="383" y2="406"/>
<line x1="316" y1="420" x2="381.2" y2="420"/>
<line x1="436" y1="406" x2="492" y2="406"/>
<line x1="82" y1="458" x2="381.2" y2="458"/>
<line x1="238" y1="472" x2="383" y2="472"/>
<line x1="268" y1="486" x2="381.2" y2="486"/>
<line x1="436" y1="472" x2="472" y2="472"/>
<line x1="472" y1="472" x2="472" y2="420"/>
<line x1="472" y1="420" x2="492" y2="420"/>
<line x1="544" y1="406" x2="574" y2="406"/>
<line x1="268" y1="533" x2="472" y2="533"/>
<line x1="472" y1="533" x2="472" y2="552"/>
<line x1="472" y1="552" x2="482" y2="552"/>
<line x1="160" y1="564" x2="382.2" y2="564"/>
<line x1="238" y1="578" x2="382.2" y2="578"/>
<line x1="436" y1="571" x2="462" y2="571"/>
<line x1="462" y1="571" x2="462" y2="566"/>
<line x1="462" y1="566" x2="482" y2="566"/>
<line x1="534" y1="559" x2="564" y2="559"/>
<line x1="34" y1="632" x2="382.2" y2="632"/>
<line x1="190" y1="646" x2="382.2" y2="646"/>
<line x1="436" y1="639" x2="472" y2="639"/>
<line x1="472" y1="639" x2="472" y2="658"/>
<line x1="472" y1="658" x2="482" y2="658"/>
<line x1="238" y1="684" x2="382.2" y2="684"/>
<line x1="268" y1="698" x2="382.2" y2="698"/>
<line x1="436" y1="691" x2="462" y2="691"/>
<line x1="462" y1="691" x2="462" y2="672"/>
<line x1="462" y1="672" x2="482" y2="672"/>
<line x1="534" y1="665" x2="564" y2="665"/>
<line x1="34" y1="752" x2="382.2" y2="752"/>
<line x1="112" y1="766" x2="382.2" y2="766"/>
<line x1="436" y1="759" x2="482" y2="759"/>
<line x1="482" y1="759" x2="482" y2="811"/>
<line x1="482" y1="811" x2="492" y2="811"/>
<line x1="34" y1="804" x2="381.2" y2="804"/>
<line x1="190" y1="818" x2="383" y2="818"/>
<line x1="268" y1="832" x2="381.2" y2="832"/>
<line x1="436" y1="818" x2="462" y2="818"/>
<line x1="462" y1="818" x2="462" y2="825"/>
<line x1="462" y1="825" x2="492" y2="825"/>
<line x1="82" y1="870" x2="381.2" y2="870"/>
<line x1="238" y1="884" x2="383" y2="884"/>
<line x1="268" y1="898" x2="381.2" y2="898"/>
<line x1="436" y1="884" x2="472" y2="884"/>
<line x1="472" y1="884" x2="472" y2="839"/>
<line x1="472" y1="839" x2="492" y2="839"/>
<line x1="544" y1="825" x2="574" y2="825"/>
<line x1="34" y1="52" x2="41" y2="52"/>
<line x1="73" y1="52" x2="82" y2="52"/>
<line x1="112" y1="52" x2="119" y2="52"/>
<line x1="151" y1="52" x2="160" y2="52"/>
<line x1="190" y1="52" x2="197" y2="52"/>
<line x1="229" y1="52" x2="238" y2="52"/>
<line x1="268" y1="52" x2="275" y2="52"/>
<line x1="307" y1="52" x2="316" y2="52"/>
<path d="M376,82 C398,82 424,96 436,110 C424,124 398,138 376,138 Q390,110 376,82 Z"/>
<path d="M376,148 C398,148 424,162 436,176 C424,190 398,204 376,204 Q390,176 376,148 Z"/>
<path d="M482,122 H508 A26,21 0 0 1 508,164 H482 Z"/>
<path d="M376,230 C398,230 424,244 436,258 C424,272 398,286 376,286 Q390,258 376,230 Z"/>
<path d="M376,312 C398,312 424,326 436,340 C424,354 398,368 376,368 Q390,340 376,312 Z"/>
<path d="M376,378 C398,378 424,392 436,406 C424,420 398,434 376,434 Q390,406 376,378 Z"/>
<path d="M376,444 C398,444 424,458 436,472 C424,486 398,500 376,500 Q390,472 376,444 Z"/>
<path d="M492,378 H518 A26,28 0 0 1 518,434 H492 Z"/>
<path d="M376,550 C398,550 424,560.5 436,571 C424,581.5 398,592 376,592 Q390,571 376,550 Z"/>
<path d="M482,538 H508 A26,21 0 0 1 508,580 H482 Z"/>
<path d="M376,618 C398,618 424,628.5 436,639 C424,649.5 398,660 376,660 Q390,639 376,618 Z"/>
<path d="M376,670 C398,670 424,680.5 436,691 C424,701.5 398,712 376,712 Q390,691 376,670 Z"/>
<path d="M482,644 H508 A26,21 0 0 1 508,686 H482 Z"/>
<path d="M376,738 C398,738 424,748.5 436,759 C424,769.5 398,780 376,780 Q390,759 376,738 Z"/>
<path d="M376,790 C398,790 424,804 436,818 C424,832 398,846 376,846 Q390,818 376,790 Z"/>
<path d="M376,856 C398,856 424,870 436,884 C424,898 398,912 376,912 Q390,884 376,856 Z"/>
<path d="M492,797 H518 A26,28 0 0 1 518,853 H492 Z"/>
<polygon points="41,40 41,64 63,52"/>
<circle cx="68" cy="52" r="5"/>
<polygon points="119,40 119,64 141,52"/>
<circle cx="146" cy="52" r="5"/>
<polygon points="197,40 197,64 219,52"/>
<circle cx="224" cy="52" r="5"/>
<polygon points="275,40 275,64 297,52"/>
<circle cx="302" cy="52" r="5"/>
<circle cx="34" cy="96" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="110" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="124" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="160" cy="162" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="176" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316" cy="190" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="160" cy="244" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="258" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316" cy="272" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="326" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="340" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="354" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="160" cy="392" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="406" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316" cy="420" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="82" cy="458" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="472" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="486" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="533" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="160" cy="564" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="578" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="632" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="646" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="684" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="698" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="752" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="766" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="804" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="818" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="832" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="82" cy="870" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="884" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="898" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="52" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="570" y="149">a</text>
<text x="472" y="264">c</text>
<text x="580" y="412">d</text>
<text x="570" y="565">e</text>
<text x="570" y="671">f</text>
<text x="580" y="831">g</text>
<text x="34" y="22" text-anchor="middle">A</text>
<text x="112" y="22" text-anchor="middle">B</text>
<text x="190" y="22" text-anchor="middle">C</text>
<text x="268" y="22" text-anchor="middle">D</text>
</svg>
</div>

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="74" height="118" viewBox="0 0 74 118" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(10,8) scale(1.1)"><path d="M7,4 L37,4 L33,10 L11,10 Z" fill-opacity="1"/><path d="M38,5 L38,35 L32,31 L32,11 Z" fill-opacity="0.1"/><path d="M38,41 L38,71 L32,65 L32,45 Z" fill-opacity="1"/><path d="M7,72 L37,72 L33,66 L11,66 Z" fill-opacity="1"/><path d="M6,41 L6,71 L12,65 L12,45 Z" fill-opacity="1"/><path d="M6,5 L6,35 L12,31 L12,11 Z" fill-opacity="1"/><path d="M7,38 L11,34 L33,34 L37,38 L33,42 L11,42 Z" fill-opacity="1"/></g>
<text x="34.2" y="108" text-anchor="middle">6</text>
</svg>
</div>

### วงจรของเลข 7 (Excess-3, OR/AND) {code=xs3; method=orand; digit=7}

$\mathbf{Sol}^{n}$

เลข $7$ ใช้ segment $a, b, c$ จึงเขียนวงจรเฉพาะ segment เหล่านี้ ต่อเข้าด้วยกันเป็นวงจรเดียว : แต่ละพจน์ผลบวกใช้ OR เกต แล้วนำทุกพจน์เข้า AND เกต (พจน์ที่มีตัวแปรตัวเดียวต่อเข้า AND เกตได้เลย)

$\mathbf{Ans}\quad \begin{aligned}a &= (A+C+D)(\overline{B}+\overline{C}+\overline{D}) \\ b &= (B+C) \\ c &= (\overline{B}+C+\overline{D})\end{aligned}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="572" height="380" viewBox="0 0 572 380" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<line x1="34" y1="28" x2="34" y2="96"/>
<line x1="114" y1="52" x2="114" y2="312"/>
<line x1="66" y1="28" x2="66" y2="244"/>
<line x1="192" y1="52" x2="192" y2="176"/>
<line x1="144" y1="28" x2="144" y2="326"/>
<line x1="270" y1="52" x2="270" y2="340"/>
<line x1="222" y1="28" x2="222" y2="124"/>
<line x1="34" y1="96" x2="335.2" y2="96"/>
<line x1="144" y1="110" x2="337" y2="110"/>
<line x1="222" y1="124" x2="335.2" y2="124"/>
<line x1="390" y1="110" x2="426" y2="110"/>
<line x1="426" y1="110" x2="426" y2="136"/>
<line x1="426" y1="136" x2="436" y2="136"/>
<line x1="114" y1="162" x2="335.2" y2="162"/>
<line x1="192" y1="176" x2="337" y2="176"/>
<line x1="270" y1="190" x2="335.2" y2="190"/>
<line x1="390" y1="176" x2="416" y2="176"/>
<line x1="416" y1="176" x2="416" y2="150"/>
<line x1="416" y1="150" x2="436" y2="150"/>
<line x1="488" y1="143" x2="518" y2="143"/>
<line x1="66" y1="244" x2="336.2" y2="244"/>
<line x1="144" y1="258" x2="336.2" y2="258"/>
<line x1="390" y1="251" x2="420" y2="251"/>
<line x1="114" y1="312" x2="335.2" y2="312"/>
<line x1="144" y1="326" x2="337" y2="326"/>
<line x1="270" y1="340" x2="335.2" y2="340"/>
<line x1="390" y1="326" x2="420" y2="326"/>
<line x1="66" y1="52" x2="73" y2="52"/>
<line x1="105" y1="52" x2="114" y2="52"/>
<line x1="144" y1="52" x2="151" y2="52"/>
<line x1="183" y1="52" x2="192" y2="52"/>
<line x1="222" y1="52" x2="229" y2="52"/>
<line x1="261" y1="52" x2="270" y2="52"/>
<path d="M330,82 C352,82 378,96 390,110 C378,124 352,138 330,138 Q344,110 330,82 Z"/>
<path d="M330,148 C352,148 378,162 390,176 C378,190 352,204 330,204 Q344,176 330,148 Z"/>
<path d="M436,122 H462 A26,21 0 0 1 462,164 H436 Z"/>
<path d="M330,230 C352,230 378,240.5 390,251 C378,261.5 352,272 330,272 Q344,251 330,230 Z"/>
<path d="M330,298 C352,298 378,312 390,326 C378,340 352,354 330,354 Q344,326 330,298 Z"/>
<polygon points="73,40 73,64 95,52"/>
<circle cx="100" cy="52" r="5"/>
<polygon points="151,40 151,64 173,52"/>
<circle cx="178" cy="52" r="5"/>
<polygon points="229,40 229,64 251,52"/>
<circle cx="256" cy="52" r="5"/>
<circle cx="34" cy="96" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="110" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="222" cy="124" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="114" cy="162" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="192" cy="176" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="190" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="244" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="258" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="114" cy="312" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="326" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="340" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="222" cy="52" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="524" y="149">a</text>
<text x="426" y="257">b</text>
<text x="426" y="332">c</text>
<text x="34" y="22" text-anchor="middle">A</text>
<text x="66" y="22" text-anchor="middle">B</text>
<text x="144" y="22" text-anchor="middle">C</text>
<text x="222" y="22" text-anchor="middle">D</text>
</svg>
</div>

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="74" height="118" viewBox="0 0 74 118" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(10,8) scale(1.1)"><path d="M7,4 L37,4 L33,10 L11,10 Z" fill-opacity="1"/><path d="M38,5 L38,35 L32,31 L32,11 Z" fill-opacity="1"/><path d="M38,41 L38,71 L32,65 L32,45 Z" fill-opacity="1"/><path d="M7,72 L37,72 L33,66 L11,66 Z" fill-opacity="0.1"/><path d="M6,41 L6,71 L12,65 L12,45 Z" fill-opacity="0.1"/><path d="M6,5 L6,35 L12,31 L12,11 Z" fill-opacity="0.1"/><path d="M7,38 L11,34 L33,34 L37,38 L33,42 L11,42 Z" fill-opacity="0.1"/></g>
<text x="34.2" y="108" text-anchor="middle">7</text>
</svg>
</div>

### วงจรของเลข 8 (Excess-3, OR/AND) {code=xs3; method=orand; digit=8}

$\mathbf{Sol}^{n}$

เลข $8$ ใช้ segment $a, b, c, d, e, f, g$ จึงเขียนวงจรเฉพาะ segment เหล่านี้ ต่อเข้าด้วยกันเป็นวงจรเดียว : แต่ละพจน์ผลบวกใช้ OR เกต แล้วนำทุกพจน์เข้า AND เกต (พจน์ที่มีตัวแปรตัวเดียวต่อเข้า AND เกตได้เลย)

$\mathbf{Ans}\quad \begin{aligned}a &= (A+C+D)(\overline{B}+\overline{C}+\overline{D}) \\ b &= (B+C) \\ c &= (\overline{B}+C+\overline{D}) \\ d &= (A+C+D)(\overline{B}+\overline{C}+\overline{D})(\overline{A}+\overline{C}+D) \\ e &= (D)(\overline{B}+\overline{C}) \\ f &= (A+C)(\overline{C}+D) \\ g &= (A+B)(A+C+D)(\overline{A}+\overline{C}+D)\end{aligned}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="628" height="1006" viewBox="0 0 628 1006" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<line x1="82" y1="52" x2="82" y2="938"/>
<line x1="34" y1="28" x2="34" y2="872"/>
<line x1="160" y1="52" x2="160" y2="632"/>
<line x1="112" y1="28" x2="112" y2="834"/>
<line x1="238" y1="52" x2="238" y2="952"/>
<line x1="190" y1="28" x2="190" y2="886"/>
<line x1="316" y1="52" x2="316" y2="488"/>
<line x1="268" y1="28" x2="268" y2="966"/>
<line x1="34" y1="96" x2="381.2" y2="96"/>
<line x1="190" y1="110" x2="383" y2="110"/>
<line x1="268" y1="124" x2="381.2" y2="124"/>
<line x1="436" y1="110" x2="472" y2="110"/>
<line x1="472" y1="110" x2="472" y2="136"/>
<line x1="472" y1="136" x2="482" y2="136"/>
<line x1="160" y1="162" x2="381.2" y2="162"/>
<line x1="238" y1="176" x2="383" y2="176"/>
<line x1="316" y1="190" x2="381.2" y2="190"/>
<line x1="436" y1="176" x2="462" y2="176"/>
<line x1="462" y1="176" x2="462" y2="150"/>
<line x1="462" y1="150" x2="482" y2="150"/>
<line x1="534" y1="143" x2="564" y2="143"/>
<line x1="112" y1="244" x2="382.2" y2="244"/>
<line x1="190" y1="258" x2="382.2" y2="258"/>
<line x1="436" y1="251" x2="466" y2="251"/>
<line x1="160" y1="312" x2="381.2" y2="312"/>
<line x1="190" y1="326" x2="383" y2="326"/>
<line x1="316" y1="340" x2="381.2" y2="340"/>
<line x1="436" y1="326" x2="466" y2="326"/>
<line x1="34" y1="394" x2="381.2" y2="394"/>
<line x1="190" y1="408" x2="383" y2="408"/>
<line x1="268" y1="422" x2="381.2" y2="422"/>
<line x1="436" y1="408" x2="482" y2="408"/>
<line x1="482" y1="408" x2="482" y2="460"/>
<line x1="482" y1="460" x2="492" y2="460"/>
<line x1="160" y1="460" x2="381.2" y2="460"/>
<line x1="238" y1="474" x2="383" y2="474"/>
<line x1="316" y1="488" x2="381.2" y2="488"/>
<line x1="436" y1="474" x2="492" y2="474"/>
<line x1="82" y1="526" x2="381.2" y2="526"/>
<line x1="238" y1="540" x2="383" y2="540"/>
<line x1="268" y1="554" x2="381.2" y2="554"/>
<line x1="436" y1="540" x2="472" y2="540"/>
<line x1="472" y1="540" x2="472" y2="488"/>
<line x1="472" y1="488" x2="492" y2="488"/>
<line x1="544" y1="474" x2="574" y2="474"/>
<line x1="268" y1="601" x2="472" y2="601"/>
<line x1="472" y1="601" x2="472" y2="620"/>
<line x1="472" y1="620" x2="482" y2="620"/>
<line x1="160" y1="632" x2="382.2" y2="632"/>
<line x1="238" y1="646" x2="382.2" y2="646"/>
<line x1="436" y1="639" x2="462" y2="639"/>
<line x1="462" y1="639" x2="462" y2="634"/>
<line x1="462" y1="634" x2="482" y2="634"/>
<line x1="534" y1="627" x2="564" y2="627"/>
<line x1="34" y1="700" x2="382.2" y2="700"/>
<line x1="190" y1="714" x2="382.2" y2="714"/>
<line x1="436" y1="707" x2="472" y2="707"/>
<line x1="472" y1="707" x2="472" y2="726"/>
<line x1="472" y1="726" x2="482" y2="726"/>
<line x1="238" y1="752" x2="382.2" y2="752"/>
<line x1="268" y1="766" x2="382.2" y2="766"/>
<line x1="436" y1="759" x2="462" y2="759"/>
<line x1="462" y1="759" x2="462" y2="740"/>
<line x1="462" y1="740" x2="482" y2="740"/>
<line x1="534" y1="733" x2="564" y2="733"/>
<line x1="34" y1="820" x2="382.2" y2="820"/>
<line x1="112" y1="834" x2="382.2" y2="834"/>
<line x1="436" y1="827" x2="482" y2="827"/>
<line x1="482" y1="827" x2="482" y2="879"/>
<line x1="482" y1="879" x2="492" y2="879"/>
<line x1="34" y1="872" x2="381.2" y2="872"/>
<line x1="190" y1="886" x2="383" y2="886"/>
<line x1="268" y1="900" x2="381.2" y2="900"/>
<line x1="436" y1="886" x2="462" y2="886"/>
<line x1="462" y1="886" x2="462" y2="893"/>
<line x1="462" y1="893" x2="492" y2="893"/>
<line x1="82" y1="938" x2="381.2" y2="938"/>
<line x1="238" y1="952" x2="383" y2="952"/>
<line x1="268" y1="966" x2="381.2" y2="966"/>
<line x1="436" y1="952" x2="472" y2="952"/>
<line x1="472" y1="952" x2="472" y2="907"/>
<line x1="472" y1="907" x2="492" y2="907"/>
<line x1="544" y1="893" x2="574" y2="893"/>
<line x1="34" y1="52" x2="41" y2="52"/>
<line x1="73" y1="52" x2="82" y2="52"/>
<line x1="112" y1="52" x2="119" y2="52"/>
<line x1="151" y1="52" x2="160" y2="52"/>
<line x1="190" y1="52" x2="197" y2="52"/>
<line x1="229" y1="52" x2="238" y2="52"/>
<line x1="268" y1="52" x2="275" y2="52"/>
<line x1="307" y1="52" x2="316" y2="52"/>
<path d="M376,82 C398,82 424,96 436,110 C424,124 398,138 376,138 Q390,110 376,82 Z"/>
<path d="M376,148 C398,148 424,162 436,176 C424,190 398,204 376,204 Q390,176 376,148 Z"/>
<path d="M482,122 H508 A26,21 0 0 1 508,164 H482 Z"/>
<path d="M376,230 C398,230 424,240.5 436,251 C424,261.5 398,272 376,272 Q390,251 376,230 Z"/>
<path d="M376,298 C398,298 424,312 436,326 C424,340 398,354 376,354 Q390,326 376,298 Z"/>
<path d="M376,380 C398,380 424,394 436,408 C424,422 398,436 376,436 Q390,408 376,380 Z"/>
<path d="M376,446 C398,446 424,460 436,474 C424,488 398,502 376,502 Q390,474 376,446 Z"/>
<path d="M376,512 C398,512 424,526 436,540 C424,554 398,568 376,568 Q390,540 376,512 Z"/>
<path d="M492,446 H518 A26,28 0 0 1 518,502 H492 Z"/>
<path d="M376,618 C398,618 424,628.5 436,639 C424,649.5 398,660 376,660 Q390,639 376,618 Z"/>
<path d="M482,606 H508 A26,21 0 0 1 508,648 H482 Z"/>
<path d="M376,686 C398,686 424,696.5 436,707 C424,717.5 398,728 376,728 Q390,707 376,686 Z"/>
<path d="M376,738 C398,738 424,748.5 436,759 C424,769.5 398,780 376,780 Q390,759 376,738 Z"/>
<path d="M482,712 H508 A26,21 0 0 1 508,754 H482 Z"/>
<path d="M376,806 C398,806 424,816.5 436,827 C424,837.5 398,848 376,848 Q390,827 376,806 Z"/>
<path d="M376,858 C398,858 424,872 436,886 C424,900 398,914 376,914 Q390,886 376,858 Z"/>
<path d="M376,924 C398,924 424,938 436,952 C424,966 398,980 376,980 Q390,952 376,924 Z"/>
<path d="M492,865 H518 A26,28 0 0 1 518,921 H492 Z"/>
<polygon points="41,40 41,64 63,52"/>
<circle cx="68" cy="52" r="5"/>
<polygon points="119,40 119,64 141,52"/>
<circle cx="146" cy="52" r="5"/>
<polygon points="197,40 197,64 219,52"/>
<circle cx="224" cy="52" r="5"/>
<polygon points="275,40 275,64 297,52"/>
<circle cx="302" cy="52" r="5"/>
<circle cx="34" cy="96" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="110" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="124" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="160" cy="162" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="176" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316" cy="190" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="244" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="258" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="160" cy="312" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="326" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316" cy="340" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="394" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="408" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="422" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="160" cy="460" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="474" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316" cy="488" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="82" cy="526" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="540" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="554" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="601" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="160" cy="632" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="646" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="700" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="714" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="752" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="766" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="820" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="834" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="872" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="886" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="900" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="82" cy="938" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="952" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="966" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="52" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="570" y="149">a</text>
<text x="472" y="257">b</text>
<text x="472" y="332">c</text>
<text x="580" y="480">d</text>
<text x="570" y="633">e</text>
<text x="570" y="739">f</text>
<text x="580" y="899">g</text>
<text x="34" y="22" text-anchor="middle">A</text>
<text x="112" y="22" text-anchor="middle">B</text>
<text x="190" y="22" text-anchor="middle">C</text>
<text x="268" y="22" text-anchor="middle">D</text>
</svg>
</div>

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="74" height="118" viewBox="0 0 74 118" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(10,8) scale(1.1)"><path d="M7,4 L37,4 L33,10 L11,10 Z" fill-opacity="1"/><path d="M38,5 L38,35 L32,31 L32,11 Z" fill-opacity="1"/><path d="M38,41 L38,71 L32,65 L32,45 Z" fill-opacity="1"/><path d="M7,72 L37,72 L33,66 L11,66 Z" fill-opacity="1"/><path d="M6,41 L6,71 L12,65 L12,45 Z" fill-opacity="1"/><path d="M6,5 L6,35 L12,31 L12,11 Z" fill-opacity="1"/><path d="M7,38 L11,34 L33,34 L37,38 L33,42 L11,42 Z" fill-opacity="1"/></g>
<text x="34.2" y="108" text-anchor="middle">8</text>
</svg>
</div>

### วงจรของเลข 9 (Excess-3, OR/AND) {code=xs3; method=orand; digit=9}

$\mathbf{Sol}^{n}$

เลข $9$ ใช้ segment $a, b, c, d, f, g$ จึงเขียนวงจรเฉพาะ segment เหล่านี้ ต่อเข้าด้วยกันเป็นวงจรเดียว : แต่ละพจน์ผลบวกใช้ OR เกต แล้วนำทุกพจน์เข้า AND เกต (พจน์ที่มีตัวแปรตัวเดียวต่อเข้า AND เกตได้เลย)

$\mathbf{Ans}\quad \begin{aligned}a &= (A+C+D)(\overline{B}+\overline{C}+\overline{D}) \\ b &= (B+C) \\ c &= (\overline{B}+C+\overline{D}) \\ d &= (A+C+D)(\overline{B}+\overline{C}+\overline{D})(\overline{A}+\overline{C}+D) \\ f &= (A+C)(\overline{C}+D) \\ g &= (A+B)(A+C+D)(\overline{A}+\overline{C}+D)\end{aligned}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="628" height="914" viewBox="0 0 628 914" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<line x1="82" y1="52" x2="82" y2="846"/>
<line x1="34" y1="28" x2="34" y2="780"/>
<line x1="160" y1="52" x2="160" y2="460"/>
<line x1="112" y1="28" x2="112" y2="742"/>
<line x1="238" y1="52" x2="238" y2="860"/>
<line x1="190" y1="28" x2="190" y2="794"/>
<line x1="316" y1="52" x2="316" y2="488"/>
<line x1="268" y1="28" x2="268" y2="874"/>
<line x1="34" y1="96" x2="381.2" y2="96"/>
<line x1="190" y1="110" x2="383" y2="110"/>
<line x1="268" y1="124" x2="381.2" y2="124"/>
<line x1="436" y1="110" x2="472" y2="110"/>
<line x1="472" y1="110" x2="472" y2="136"/>
<line x1="472" y1="136" x2="482" y2="136"/>
<line x1="160" y1="162" x2="381.2" y2="162"/>
<line x1="238" y1="176" x2="383" y2="176"/>
<line x1="316" y1="190" x2="381.2" y2="190"/>
<line x1="436" y1="176" x2="462" y2="176"/>
<line x1="462" y1="176" x2="462" y2="150"/>
<line x1="462" y1="150" x2="482" y2="150"/>
<line x1="534" y1="143" x2="564" y2="143"/>
<line x1="112" y1="244" x2="382.2" y2="244"/>
<line x1="190" y1="258" x2="382.2" y2="258"/>
<line x1="436" y1="251" x2="466" y2="251"/>
<line x1="160" y1="312" x2="381.2" y2="312"/>
<line x1="190" y1="326" x2="383" y2="326"/>
<line x1="316" y1="340" x2="381.2" y2="340"/>
<line x1="436" y1="326" x2="466" y2="326"/>
<line x1="34" y1="394" x2="381.2" y2="394"/>
<line x1="190" y1="408" x2="383" y2="408"/>
<line x1="268" y1="422" x2="381.2" y2="422"/>
<line x1="436" y1="408" x2="482" y2="408"/>
<line x1="482" y1="408" x2="482" y2="460"/>
<line x1="482" y1="460" x2="492" y2="460"/>
<line x1="160" y1="460" x2="381.2" y2="460"/>
<line x1="238" y1="474" x2="383" y2="474"/>
<line x1="316" y1="488" x2="381.2" y2="488"/>
<line x1="436" y1="474" x2="492" y2="474"/>
<line x1="82" y1="526" x2="381.2" y2="526"/>
<line x1="238" y1="540" x2="383" y2="540"/>
<line x1="268" y1="554" x2="381.2" y2="554"/>
<line x1="436" y1="540" x2="472" y2="540"/>
<line x1="472" y1="540" x2="472" y2="488"/>
<line x1="472" y1="488" x2="492" y2="488"/>
<line x1="544" y1="474" x2="574" y2="474"/>
<line x1="34" y1="608" x2="382.2" y2="608"/>
<line x1="190" y1="622" x2="382.2" y2="622"/>
<line x1="436" y1="615" x2="472" y2="615"/>
<line x1="472" y1="615" x2="472" y2="634"/>
<line x1="472" y1="634" x2="482" y2="634"/>
<line x1="238" y1="660" x2="382.2" y2="660"/>
<line x1="268" y1="674" x2="382.2" y2="674"/>
<line x1="436" y1="667" x2="462" y2="667"/>
<line x1="462" y1="667" x2="462" y2="648"/>
<line x1="462" y1="648" x2="482" y2="648"/>
<line x1="534" y1="641" x2="564" y2="641"/>
<line x1="34" y1="728" x2="382.2" y2="728"/>
<line x1="112" y1="742" x2="382.2" y2="742"/>
<line x1="436" y1="735" x2="482" y2="735"/>
<line x1="482" y1="735" x2="482" y2="787"/>
<line x1="482" y1="787" x2="492" y2="787"/>
<line x1="34" y1="780" x2="381.2" y2="780"/>
<line x1="190" y1="794" x2="383" y2="794"/>
<line x1="268" y1="808" x2="381.2" y2="808"/>
<line x1="436" y1="794" x2="462" y2="794"/>
<line x1="462" y1="794" x2="462" y2="801"/>
<line x1="462" y1="801" x2="492" y2="801"/>
<line x1="82" y1="846" x2="381.2" y2="846"/>
<line x1="238" y1="860" x2="383" y2="860"/>
<line x1="268" y1="874" x2="381.2" y2="874"/>
<line x1="436" y1="860" x2="472" y2="860"/>
<line x1="472" y1="860" x2="472" y2="815"/>
<line x1="472" y1="815" x2="492" y2="815"/>
<line x1="544" y1="801" x2="574" y2="801"/>
<line x1="34" y1="52" x2="41" y2="52"/>
<line x1="73" y1="52" x2="82" y2="52"/>
<line x1="112" y1="52" x2="119" y2="52"/>
<line x1="151" y1="52" x2="160" y2="52"/>
<line x1="190" y1="52" x2="197" y2="52"/>
<line x1="229" y1="52" x2="238" y2="52"/>
<line x1="268" y1="52" x2="275" y2="52"/>
<line x1="307" y1="52" x2="316" y2="52"/>
<path d="M376,82 C398,82 424,96 436,110 C424,124 398,138 376,138 Q390,110 376,82 Z"/>
<path d="M376,148 C398,148 424,162 436,176 C424,190 398,204 376,204 Q390,176 376,148 Z"/>
<path d="M482,122 H508 A26,21 0 0 1 508,164 H482 Z"/>
<path d="M376,230 C398,230 424,240.5 436,251 C424,261.5 398,272 376,272 Q390,251 376,230 Z"/>
<path d="M376,298 C398,298 424,312 436,326 C424,340 398,354 376,354 Q390,326 376,298 Z"/>
<path d="M376,380 C398,380 424,394 436,408 C424,422 398,436 376,436 Q390,408 376,380 Z"/>
<path d="M376,446 C398,446 424,460 436,474 C424,488 398,502 376,502 Q390,474 376,446 Z"/>
<path d="M376,512 C398,512 424,526 436,540 C424,554 398,568 376,568 Q390,540 376,512 Z"/>
<path d="M492,446 H518 A26,28 0 0 1 518,502 H492 Z"/>
<path d="M376,594 C398,594 424,604.5 436,615 C424,625.5 398,636 376,636 Q390,615 376,594 Z"/>
<path d="M376,646 C398,646 424,656.5 436,667 C424,677.5 398,688 376,688 Q390,667 376,646 Z"/>
<path d="M482,620 H508 A26,21 0 0 1 508,662 H482 Z"/>
<path d="M376,714 C398,714 424,724.5 436,735 C424,745.5 398,756 376,756 Q390,735 376,714 Z"/>
<path d="M376,766 C398,766 424,780 436,794 C424,808 398,822 376,822 Q390,794 376,766 Z"/>
<path d="M376,832 C398,832 424,846 436,860 C424,874 398,888 376,888 Q390,860 376,832 Z"/>
<path d="M492,773 H518 A26,28 0 0 1 518,829 H492 Z"/>
<polygon points="41,40 41,64 63,52"/>
<circle cx="68" cy="52" r="5"/>
<polygon points="119,40 119,64 141,52"/>
<circle cx="146" cy="52" r="5"/>
<polygon points="197,40 197,64 219,52"/>
<circle cx="224" cy="52" r="5"/>
<polygon points="275,40 275,64 297,52"/>
<circle cx="302" cy="52" r="5"/>
<circle cx="34" cy="96" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="110" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="124" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="160" cy="162" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="176" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316" cy="190" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="244" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="258" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="160" cy="312" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="326" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316" cy="340" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="394" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="408" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="422" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="160" cy="460" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="474" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316" cy="488" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="82" cy="526" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="540" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="554" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="608" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="622" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="660" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="674" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="728" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="742" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="780" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="794" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="808" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="82" cy="846" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="860" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="874" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="52" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="570" y="149">a</text>
<text x="472" y="257">b</text>
<text x="472" y="332">c</text>
<text x="580" y="480">d</text>
<text x="570" y="647">f</text>
<text x="580" y="807">g</text>
<text x="34" y="22" text-anchor="middle">A</text>
<text x="112" y="22" text-anchor="middle">B</text>
<text x="190" y="22" text-anchor="middle">C</text>
<text x="268" y="22" text-anchor="middle">D</text>
</svg>
</div>

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="74" height="118" viewBox="0 0 74 118" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(10,8) scale(1.1)"><path d="M7,4 L37,4 L33,10 L11,10 Z" fill-opacity="1"/><path d="M38,5 L38,35 L32,31 L32,11 Z" fill-opacity="1"/><path d="M38,41 L38,71 L32,65 L32,45 Z" fill-opacity="1"/><path d="M7,72 L37,72 L33,66 L11,66 Z" fill-opacity="1"/><path d="M6,41 L6,71 L12,65 L12,45 Z" fill-opacity="0.1"/><path d="M6,5 L6,35 L12,31 L12,11 Z" fill-opacity="1"/><path d="M7,38 L11,34 L33,34 L37,38 L33,42 L11,42 Z" fill-opacity="1"/></g>
<text x="34.2" y="108" text-anchor="middle">9</text>
</svg>
</div>

### วงจรของเลข 0 (Excess-3, NOR อย่างเดียว) {code=xs3; method=nor; digit=0}

$\mathbf{Sol}^{n}$

เลข $0$ ใช้ segment $a, b, c, d, e, f$ จึงเขียนวงจรเฉพาะ segment เหล่านี้ ต่อเข้าด้วยกันเป็นวงจรเดียว : ใช้ NOR เกตทั้งสองชั้น : แต่ละพจน์ผลบวกเข้า NOR เกตชั้นแรก (พจน์ตัวแปรเดียวใช้ตัวที่คอมพลีเมนต์ต่อตรง) แล้วนำทุกเอาต์พุตเข้า NOR เกตชั้นที่สอง

$\mathbf{Ans}\quad \begin{aligned}a &= \overline{\overline{A+C+D}+\overline{\overline{B}+\overline{C}+\overline{D}}} \\ b &= \overline{\overline{B+C}} \\ c &= \overline{\overline{\overline{B}+C+\overline{D}}} \\ d &= \overline{\overline{A+C+D}+\overline{\overline{B}+\overline{C}+\overline{D}}+\overline{\overline{A}+\overline{C}+D}} \\ e &= \overline{\overline{D}+\overline{\overline{B}+\overline{C}}} \\ f &= \overline{\overline{A+C}+\overline{\overline{C}+D}}\end{aligned}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="656" height="806" viewBox="0 0 656 806" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<line x1="82" y1="52" x2="82" y2="526"/>
<line x1="34" y1="28" x2="34" y2="700"/>
<line x1="160" y1="52" x2="160" y2="632"/>
<line x1="112" y1="28" x2="112" y2="244"/>
<line x1="238" y1="52" x2="238" y2="752"/>
<line x1="190" y1="28" x2="190" y2="714"/>
<line x1="316" y1="52" x2="316" y2="601"/>
<line x1="268" y1="28" x2="268" y2="766"/>
<line x1="34" y1="96" x2="381.2" y2="96"/>
<line x1="190" y1="110" x2="383" y2="110"/>
<line x1="268" y1="124" x2="381.2" y2="124"/>
<line x1="446" y1="110" x2="482" y2="110"/>
<line x1="482" y1="110" x2="482" y2="136"/>
<line x1="482" y1="136" x2="498.2" y2="136"/>
<line x1="160" y1="162" x2="381.2" y2="162"/>
<line x1="238" y1="176" x2="383" y2="176"/>
<line x1="316" y1="190" x2="381.2" y2="190"/>
<line x1="446" y1="176" x2="472" y2="176"/>
<line x1="472" y1="176" x2="472" y2="150"/>
<line x1="472" y1="150" x2="498.2" y2="150"/>
<line x1="562" y1="143" x2="592" y2="143"/>
<line x1="112" y1="244" x2="382.2" y2="244"/>
<line x1="190" y1="258" x2="382.2" y2="258"/>
<line x1="446" y1="251" x2="482" y2="251"/>
<line x1="514" y1="251" x2="544" y2="251"/>
<line x1="160" y1="312" x2="381.2" y2="312"/>
<line x1="190" y1="326" x2="383" y2="326"/>
<line x1="316" y1="340" x2="381.2" y2="340"/>
<line x1="446" y1="326" x2="482" y2="326"/>
<line x1="514" y1="326" x2="544" y2="326"/>
<line x1="34" y1="394" x2="381.2" y2="394"/>
<line x1="190" y1="408" x2="383" y2="408"/>
<line x1="268" y1="422" x2="381.2" y2="422"/>
<line x1="446" y1="408" x2="492" y2="408"/>
<line x1="492" y1="408" x2="492" y2="460"/>
<line x1="492" y1="460" x2="507.2" y2="460"/>
<line x1="160" y1="460" x2="381.2" y2="460"/>
<line x1="238" y1="474" x2="383" y2="474"/>
<line x1="316" y1="488" x2="381.2" y2="488"/>
<line x1="446" y1="474" x2="509" y2="474"/>
<line x1="82" y1="526" x2="381.2" y2="526"/>
<line x1="238" y1="540" x2="383" y2="540"/>
<line x1="268" y1="554" x2="381.2" y2="554"/>
<line x1="446" y1="540" x2="482" y2="540"/>
<line x1="482" y1="540" x2="482" y2="488"/>
<line x1="482" y1="488" x2="507.2" y2="488"/>
<line x1="572" y1="474" x2="602" y2="474"/>
<line x1="316" y1="601" x2="482" y2="601"/>
<line x1="482" y1="601" x2="482" y2="620"/>
<line x1="482" y1="620" x2="498.2" y2="620"/>
<line x1="160" y1="632" x2="382.2" y2="632"/>
<line x1="238" y1="646" x2="382.2" y2="646"/>
<line x1="446" y1="639" x2="472" y2="639"/>
<line x1="472" y1="639" x2="472" y2="634"/>
<line x1="472" y1="634" x2="498.2" y2="634"/>
<line x1="562" y1="627" x2="592" y2="627"/>
<line x1="34" y1="700" x2="382.2" y2="700"/>
<line x1="190" y1="714" x2="382.2" y2="714"/>
<line x1="446" y1="707" x2="482" y2="707"/>
<line x1="482" y1="707" x2="482" y2="726"/>
<line x1="482" y1="726" x2="498.2" y2="726"/>
<line x1="238" y1="752" x2="382.2" y2="752"/>
<line x1="268" y1="766" x2="382.2" y2="766"/>
<line x1="446" y1="759" x2="472" y2="759"/>
<line x1="472" y1="759" x2="472" y2="740"/>
<line x1="472" y1="740" x2="498.2" y2="740"/>
<line x1="562" y1="733" x2="592" y2="733"/>
<line x1="34" y1="52" x2="41" y2="52"/>
<line x1="73" y1="52" x2="82" y2="52"/>
<line x1="112" y1="52" x2="119" y2="52"/>
<line x1="151" y1="52" x2="160" y2="52"/>
<line x1="190" y1="52" x2="197" y2="52"/>
<line x1="229" y1="52" x2="238" y2="52"/>
<line x1="268" y1="52" x2="275" y2="52"/>
<line x1="307" y1="52" x2="316" y2="52"/>
<path d="M376,82 C398,82 424,96 436,110 C424,124 398,138 376,138 Q390,110 376,82 Z"/>
<circle cx="441" cy="110" r="5"/>
<path d="M376,148 C398,148 424,162 436,176 C424,190 398,204 376,204 Q390,176 376,148 Z"/>
<circle cx="441" cy="176" r="5"/>
<path d="M492,122 C514,122 540,132.5 552,143 C540,153.5 514,164 492,164 Q506,143 492,122 Z"/>
<circle cx="557" cy="143" r="5"/>
<path d="M376,230 C398,230 424,240.5 436,251 C424,261.5 398,272 376,272 Q390,251 376,230 Z"/>
<circle cx="441" cy="251" r="5"/>
<polygon points="482,239 482,263 504,251"/>
<circle cx="509" cy="251" r="5"/>
<path d="M376,298 C398,298 424,312 436,326 C424,340 398,354 376,354 Q390,326 376,298 Z"/>
<circle cx="441" cy="326" r="5"/>
<polygon points="482,314 482,338 504,326"/>
<circle cx="509" cy="326" r="5"/>
<path d="M376,380 C398,380 424,394 436,408 C424,422 398,436 376,436 Q390,408 376,380 Z"/>
<circle cx="441" cy="408" r="5"/>
<path d="M376,446 C398,446 424,460 436,474 C424,488 398,502 376,502 Q390,474 376,446 Z"/>
<circle cx="441" cy="474" r="5"/>
<path d="M376,512 C398,512 424,526 436,540 C424,554 398,568 376,568 Q390,540 376,512 Z"/>
<circle cx="441" cy="540" r="5"/>
<path d="M502,446 C524,446 550,460 562,474 C550,488 524,502 502,502 Q516,474 502,446 Z"/>
<circle cx="567" cy="474" r="5"/>
<path d="M376,618 C398,618 424,628.5 436,639 C424,649.5 398,660 376,660 Q390,639 376,618 Z"/>
<circle cx="441" cy="639" r="5"/>
<path d="M492,606 C514,606 540,616.5 552,627 C540,637.5 514,648 492,648 Q506,627 492,606 Z"/>
<circle cx="557" cy="627" r="5"/>
<path d="M376,686 C398,686 424,696.5 436,707 C424,717.5 398,728 376,728 Q390,707 376,686 Z"/>
<circle cx="441" cy="707" r="5"/>
<path d="M376,738 C398,738 424,748.5 436,759 C424,769.5 398,780 376,780 Q390,759 376,738 Z"/>
<circle cx="441" cy="759" r="5"/>
<path d="M492,712 C514,712 540,722.5 552,733 C540,743.5 514,754 492,754 Q506,733 492,712 Z"/>
<circle cx="557" cy="733" r="5"/>
<polygon points="41,40 41,64 63,52"/>
<circle cx="68" cy="52" r="5"/>
<polygon points="119,40 119,64 141,52"/>
<circle cx="146" cy="52" r="5"/>
<polygon points="197,40 197,64 219,52"/>
<circle cx="224" cy="52" r="5"/>
<polygon points="275,40 275,64 297,52"/>
<circle cx="302" cy="52" r="5"/>
<circle cx="34" cy="96" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="110" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="124" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="160" cy="162" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="176" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316" cy="190" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="244" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="258" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="160" cy="312" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="326" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316" cy="340" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="394" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="408" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="422" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="160" cy="460" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="474" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316" cy="488" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="82" cy="526" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="540" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="554" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316" cy="601" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="160" cy="632" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="646" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="700" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="714" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="752" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="766" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="52" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="598" y="149">a</text>
<text x="550" y="257">b</text>
<text x="550" y="332">c</text>
<text x="608" y="480">d</text>
<text x="598" y="633">e</text>
<text x="598" y="739">f</text>
<text x="34" y="22" text-anchor="middle">A</text>
<text x="112" y="22" text-anchor="middle">B</text>
<text x="190" y="22" text-anchor="middle">C</text>
<text x="268" y="22" text-anchor="middle">D</text>
</svg>
</div>

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="74" height="118" viewBox="0 0 74 118" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(10,8) scale(1.1)"><path d="M7,4 L37,4 L33,10 L11,10 Z" fill-opacity="1"/><path d="M38,5 L38,35 L32,31 L32,11 Z" fill-opacity="1"/><path d="M38,41 L38,71 L32,65 L32,45 Z" fill-opacity="1"/><path d="M7,72 L37,72 L33,66 L11,66 Z" fill-opacity="1"/><path d="M6,41 L6,71 L12,65 L12,45 Z" fill-opacity="1"/><path d="M6,5 L6,35 L12,31 L12,11 Z" fill-opacity="1"/><path d="M7,38 L11,34 L33,34 L37,38 L33,42 L11,42 Z" fill-opacity="0.1"/></g>
<text x="34.2" y="108" text-anchor="middle">0</text>
</svg>
</div>

### วงจรของเลข 1 (Excess-3, NOR อย่างเดียว) {code=xs3; method=nor; digit=1}

$\mathbf{Sol}^{n}$

เลข $1$ ใช้ segment $b, c$ จึงเขียนวงจรเฉพาะ segment เหล่านี้ ต่อเข้าด้วยกันเป็นวงจรเดียว : ใช้ NOR เกตทั้งสองชั้น : แต่ละพจน์ผลบวกเข้า NOR เกตชั้นแรก (พจน์ตัวแปรเดียวใช้ตัวที่คอมพลีเมนต์ต่อตรง) แล้วนำทุกเอาต์พุตเข้า NOR เกตชั้นที่สอง

$\mathbf{Ans}\quad \begin{aligned}b &= \overline{\overline{B+C}} \\ c &= \overline{\overline{\overline{B}+C+\overline{D}}}\end{aligned}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="474" height="232" viewBox="0 0 474 232" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<line x1="82" y1="52" x2="82" y2="164"/>
<line x1="34" y1="28" x2="34" y2="96"/>
<line x1="112" y1="28" x2="112" y2="178"/>
<line x1="192" y1="52" x2="192" y2="192"/>
<line x1="144" y1="28" x2="144" y2="52"/>
<line x1="34" y1="96" x2="258.2" y2="96"/>
<line x1="112" y1="110" x2="258.2" y2="110"/>
<line x1="322" y1="103" x2="358" y2="103"/>
<line x1="390" y1="103" x2="420" y2="103"/>
<line x1="82" y1="164" x2="257.2" y2="164"/>
<line x1="112" y1="178" x2="259" y2="178"/>
<line x1="192" y1="192" x2="257.2" y2="192"/>
<line x1="322" y1="178" x2="358" y2="178"/>
<line x1="390" y1="178" x2="420" y2="178"/>
<line x1="34" y1="52" x2="41" y2="52"/>
<line x1="73" y1="52" x2="82" y2="52"/>
<line x1="144" y1="52" x2="151" y2="52"/>
<line x1="183" y1="52" x2="192" y2="52"/>
<path d="M252,82 C274,82 300,92.5 312,103 C300,113.5 274,124 252,124 Q266,103 252,82 Z"/>
<circle cx="317" cy="103" r="5"/>
<polygon points="358,91 358,115 380,103"/>
<circle cx="385" cy="103" r="5"/>
<path d="M252,150 C274,150 300,164 312,178 C300,192 274,206 252,206 Q266,178 252,150 Z"/>
<circle cx="317" cy="178" r="5"/>
<polygon points="358,166 358,190 380,178"/>
<circle cx="385" cy="178" r="5"/>
<polygon points="41,40 41,64 63,52"/>
<circle cx="68" cy="52" r="5"/>
<polygon points="151,40 151,64 173,52"/>
<circle cx="178" cy="52" r="5"/>
<circle cx="34" cy="96" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="110" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="82" cy="164" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="178" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="192" cy="192" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="52" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="426" y="109">b</text>
<text x="426" y="184">c</text>
<text x="34" y="22" text-anchor="middle">B</text>
<text x="112" y="22" text-anchor="middle">C</text>
<text x="144" y="22" text-anchor="middle">D</text>
</svg>
</div>

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="74" height="118" viewBox="0 0 74 118" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(10,8) scale(1.1)"><path d="M7,4 L37,4 L33,10 L11,10 Z" fill-opacity="0.1"/><path d="M38,5 L38,35 L32,31 L32,11 Z" fill-opacity="1"/><path d="M38,41 L38,71 L32,65 L32,45 Z" fill-opacity="1"/><path d="M7,72 L37,72 L33,66 L11,66 Z" fill-opacity="0.1"/><path d="M6,41 L6,71 L12,65 L12,45 Z" fill-opacity="0.1"/><path d="M6,5 L6,35 L12,31 L12,11 Z" fill-opacity="0.1"/><path d="M7,38 L11,34 L33,34 L37,38 L33,42 L11,42 Z" fill-opacity="0.1"/></g>
<text x="34.2" y="108" text-anchor="middle">1</text>
</svg>
</div>

### วงจรของเลข 2 (Excess-3, NOR อย่างเดียว) {code=xs3; method=nor; digit=2}

$\mathbf{Sol}^{n}$

เลข $2$ ใช้ segment $a, b, d, e, g$ จึงเขียนวงจรเฉพาะ segment เหล่านี้ ต่อเข้าด้วยกันเป็นวงจรเดียว : ใช้ NOR เกตทั้งสองชั้น : แต่ละพจน์ผลบวกเข้า NOR เกตชั้นแรก (พจน์ตัวแปรเดียวใช้ตัวที่คอมพลีเมนต์ต่อตรง) แล้วนำทุกเอาต์พุตเข้า NOR เกตชั้นที่สอง

$\mathbf{Ans}\quad \begin{aligned}a &= \overline{\overline{A+C+D}+\overline{\overline{B}+\overline{C}+\overline{D}}} \\ b &= \overline{\overline{B+C}} \\ d &= \overline{\overline{A+C+D}+\overline{\overline{B}+\overline{C}+\overline{D}}+\overline{\overline{A}+\overline{C}+D}} \\ e &= \overline{\overline{D}+\overline{\overline{B}+\overline{C}}} \\ g &= \overline{\overline{A+B}+\overline{A+C+D}+\overline{\overline{A}+\overline{C}+D}}\end{aligned}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="656" height="804" viewBox="0 0 656 804" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<line x1="82" y1="52" x2="82" y2="736"/>
<line x1="34" y1="28" x2="34" y2="670"/>
<line x1="160" y1="52" x2="160" y2="550"/>
<line x1="112" y1="28" x2="112" y2="632"/>
<line x1="238" y1="52" x2="238" y2="750"/>
<line x1="190" y1="28" x2="190" y2="684"/>
<line x1="316" y1="52" x2="316" y2="519"/>
<line x1="268" y1="28" x2="268" y2="764"/>
<line x1="34" y1="96" x2="381.2" y2="96"/>
<line x1="190" y1="110" x2="383" y2="110"/>
<line x1="268" y1="124" x2="381.2" y2="124"/>
<line x1="446" y1="110" x2="482" y2="110"/>
<line x1="482" y1="110" x2="482" y2="136"/>
<line x1="482" y1="136" x2="498.2" y2="136"/>
<line x1="160" y1="162" x2="381.2" y2="162"/>
<line x1="238" y1="176" x2="383" y2="176"/>
<line x1="316" y1="190" x2="381.2" y2="190"/>
<line x1="446" y1="176" x2="472" y2="176"/>
<line x1="472" y1="176" x2="472" y2="150"/>
<line x1="472" y1="150" x2="498.2" y2="150"/>
<line x1="562" y1="143" x2="592" y2="143"/>
<line x1="112" y1="244" x2="382.2" y2="244"/>
<line x1="190" y1="258" x2="382.2" y2="258"/>
<line x1="446" y1="251" x2="482" y2="251"/>
<line x1="514" y1="251" x2="544" y2="251"/>
<line x1="34" y1="312" x2="381.2" y2="312"/>
<line x1="190" y1="326" x2="383" y2="326"/>
<line x1="268" y1="340" x2="381.2" y2="340"/>
<line x1="446" y1="326" x2="492" y2="326"/>
<line x1="492" y1="326" x2="492" y2="378"/>
<line x1="492" y1="378" x2="507.2" y2="378"/>
<line x1="160" y1="378" x2="381.2" y2="378"/>
<line x1="238" y1="392" x2="383" y2="392"/>
<line x1="316" y1="406" x2="381.2" y2="406"/>
<line x1="446" y1="392" x2="509" y2="392"/>
<line x1="82" y1="444" x2="381.2" y2="444"/>
<line x1="238" y1="458" x2="383" y2="458"/>
<line x1="268" y1="472" x2="381.2" y2="472"/>
<line x1="446" y1="458" x2="482" y2="458"/>
<line x1="482" y1="458" x2="482" y2="406"/>
<line x1="482" y1="406" x2="507.2" y2="406"/>
<line x1="572" y1="392" x2="602" y2="392"/>
<line x1="316" y1="519" x2="482" y2="519"/>
<line x1="482" y1="519" x2="482" y2="538"/>
<line x1="482" y1="538" x2="498.2" y2="538"/>
<line x1="160" y1="550" x2="382.2" y2="550"/>
<line x1="238" y1="564" x2="382.2" y2="564"/>
<line x1="446" y1="557" x2="472" y2="557"/>
<line x1="472" y1="557" x2="472" y2="552"/>
<line x1="472" y1="552" x2="498.2" y2="552"/>
<line x1="562" y1="545" x2="592" y2="545"/>
<line x1="34" y1="618" x2="382.2" y2="618"/>
<line x1="112" y1="632" x2="382.2" y2="632"/>
<line x1="446" y1="625" x2="492" y2="625"/>
<line x1="492" y1="625" x2="492" y2="677"/>
<line x1="492" y1="677" x2="507.2" y2="677"/>
<line x1="34" y1="670" x2="381.2" y2="670"/>
<line x1="190" y1="684" x2="383" y2="684"/>
<line x1="268" y1="698" x2="381.2" y2="698"/>
<line x1="446" y1="684" x2="472" y2="684"/>
<line x1="472" y1="684" x2="472" y2="691"/>
<line x1="472" y1="691" x2="509" y2="691"/>
<line x1="82" y1="736" x2="381.2" y2="736"/>
<line x1="238" y1="750" x2="383" y2="750"/>
<line x1="268" y1="764" x2="381.2" y2="764"/>
<line x1="446" y1="750" x2="482" y2="750"/>
<line x1="482" y1="750" x2="482" y2="705"/>
<line x1="482" y1="705" x2="507.2" y2="705"/>
<line x1="572" y1="691" x2="602" y2="691"/>
<line x1="34" y1="52" x2="41" y2="52"/>
<line x1="73" y1="52" x2="82" y2="52"/>
<line x1="112" y1="52" x2="119" y2="52"/>
<line x1="151" y1="52" x2="160" y2="52"/>
<line x1="190" y1="52" x2="197" y2="52"/>
<line x1="229" y1="52" x2="238" y2="52"/>
<line x1="268" y1="52" x2="275" y2="52"/>
<line x1="307" y1="52" x2="316" y2="52"/>
<path d="M376,82 C398,82 424,96 436,110 C424,124 398,138 376,138 Q390,110 376,82 Z"/>
<circle cx="441" cy="110" r="5"/>
<path d="M376,148 C398,148 424,162 436,176 C424,190 398,204 376,204 Q390,176 376,148 Z"/>
<circle cx="441" cy="176" r="5"/>
<path d="M492,122 C514,122 540,132.5 552,143 C540,153.5 514,164 492,164 Q506,143 492,122 Z"/>
<circle cx="557" cy="143" r="5"/>
<path d="M376,230 C398,230 424,240.5 436,251 C424,261.5 398,272 376,272 Q390,251 376,230 Z"/>
<circle cx="441" cy="251" r="5"/>
<polygon points="482,239 482,263 504,251"/>
<circle cx="509" cy="251" r="5"/>
<path d="M376,298 C398,298 424,312 436,326 C424,340 398,354 376,354 Q390,326 376,298 Z"/>
<circle cx="441" cy="326" r="5"/>
<path d="M376,364 C398,364 424,378 436,392 C424,406 398,420 376,420 Q390,392 376,364 Z"/>
<circle cx="441" cy="392" r="5"/>
<path d="M376,430 C398,430 424,444 436,458 C424,472 398,486 376,486 Q390,458 376,430 Z"/>
<circle cx="441" cy="458" r="5"/>
<path d="M502,364 C524,364 550,378 562,392 C550,406 524,420 502,420 Q516,392 502,364 Z"/>
<circle cx="567" cy="392" r="5"/>
<path d="M376,536 C398,536 424,546.5 436,557 C424,567.5 398,578 376,578 Q390,557 376,536 Z"/>
<circle cx="441" cy="557" r="5"/>
<path d="M492,524 C514,524 540,534.5 552,545 C540,555.5 514,566 492,566 Q506,545 492,524 Z"/>
<circle cx="557" cy="545" r="5"/>
<path d="M376,604 C398,604 424,614.5 436,625 C424,635.5 398,646 376,646 Q390,625 376,604 Z"/>
<circle cx="441" cy="625" r="5"/>
<path d="M376,656 C398,656 424,670 436,684 C424,698 398,712 376,712 Q390,684 376,656 Z"/>
<circle cx="441" cy="684" r="5"/>
<path d="M376,722 C398,722 424,736 436,750 C424,764 398,778 376,778 Q390,750 376,722 Z"/>
<circle cx="441" cy="750" r="5"/>
<path d="M502,663 C524,663 550,677 562,691 C550,705 524,719 502,719 Q516,691 502,663 Z"/>
<circle cx="567" cy="691" r="5"/>
<polygon points="41,40 41,64 63,52"/>
<circle cx="68" cy="52" r="5"/>
<polygon points="119,40 119,64 141,52"/>
<circle cx="146" cy="52" r="5"/>
<polygon points="197,40 197,64 219,52"/>
<circle cx="224" cy="52" r="5"/>
<polygon points="275,40 275,64 297,52"/>
<circle cx="302" cy="52" r="5"/>
<circle cx="34" cy="96" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="110" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="124" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="160" cy="162" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="176" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316" cy="190" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="244" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="258" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="312" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="326" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="340" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="160" cy="378" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="392" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316" cy="406" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="82" cy="444" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="458" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="472" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316" cy="519" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="160" cy="550" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="564" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="618" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="632" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="670" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="684" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="698" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="82" cy="736" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="750" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="764" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="52" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="598" y="149">a</text>
<text x="550" y="257">b</text>
<text x="608" y="398">d</text>
<text x="598" y="551">e</text>
<text x="608" y="697">g</text>
<text x="34" y="22" text-anchor="middle">A</text>
<text x="112" y="22" text-anchor="middle">B</text>
<text x="190" y="22" text-anchor="middle">C</text>
<text x="268" y="22" text-anchor="middle">D</text>
</svg>
</div>

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="74" height="118" viewBox="0 0 74 118" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(10,8) scale(1.1)"><path d="M7,4 L37,4 L33,10 L11,10 Z" fill-opacity="1"/><path d="M38,5 L38,35 L32,31 L32,11 Z" fill-opacity="1"/><path d="M38,41 L38,71 L32,65 L32,45 Z" fill-opacity="0.1"/><path d="M7,72 L37,72 L33,66 L11,66 Z" fill-opacity="1"/><path d="M6,41 L6,71 L12,65 L12,45 Z" fill-opacity="1"/><path d="M6,5 L6,35 L12,31 L12,11 Z" fill-opacity="0.1"/><path d="M7,38 L11,34 L33,34 L37,38 L33,42 L11,42 Z" fill-opacity="1"/></g>
<text x="34.2" y="108" text-anchor="middle">2</text>
</svg>
</div>

### วงจรของเลข 3 (Excess-3, NOR อย่างเดียว) {code=xs3; method=nor; digit=3}

$\mathbf{Sol}^{n}$

เลข $3$ ใช้ segment $a, b, c, d, g$ จึงเขียนวงจรเฉพาะ segment เหล่านี้ ต่อเข้าด้วยกันเป็นวงจรเดียว : ใช้ NOR เกตทั้งสองชั้น : แต่ละพจน์ผลบวกเข้า NOR เกตชั้นแรก (พจน์ตัวแปรเดียวใช้ตัวที่คอมพลีเมนต์ต่อตรง) แล้วนำทุกเอาต์พุตเข้า NOR เกตชั้นที่สอง

$\mathbf{Ans}\quad \begin{aligned}a &= \overline{\overline{A+C+D}+\overline{\overline{B}+\overline{C}+\overline{D}}} \\ b &= \overline{\overline{B+C}} \\ c &= \overline{\overline{\overline{B}+C+\overline{D}}} \\ d &= \overline{\overline{A+C+D}+\overline{\overline{B}+\overline{C}+\overline{D}}+\overline{\overline{A}+\overline{C}+D}} \\ g &= \overline{\overline{A+B}+\overline{A+C+D}+\overline{\overline{A}+\overline{C}+D}}\end{aligned}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="656" height="794" viewBox="0 0 656 794" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<line x1="82" y1="52" x2="82" y2="726"/>
<line x1="34" y1="28" x2="34" y2="660"/>
<line x1="160" y1="52" x2="160" y2="460"/>
<line x1="112" y1="28" x2="112" y2="622"/>
<line x1="238" y1="52" x2="238" y2="740"/>
<line x1="190" y1="28" x2="190" y2="674"/>
<line x1="316" y1="52" x2="316" y2="488"/>
<line x1="268" y1="28" x2="268" y2="754"/>
<line x1="34" y1="96" x2="381.2" y2="96"/>
<line x1="190" y1="110" x2="383" y2="110"/>
<line x1="268" y1="124" x2="381.2" y2="124"/>
<line x1="446" y1="110" x2="482" y2="110"/>
<line x1="482" y1="110" x2="482" y2="136"/>
<line x1="482" y1="136" x2="498.2" y2="136"/>
<line x1="160" y1="162" x2="381.2" y2="162"/>
<line x1="238" y1="176" x2="383" y2="176"/>
<line x1="316" y1="190" x2="381.2" y2="190"/>
<line x1="446" y1="176" x2="472" y2="176"/>
<line x1="472" y1="176" x2="472" y2="150"/>
<line x1="472" y1="150" x2="498.2" y2="150"/>
<line x1="562" y1="143" x2="592" y2="143"/>
<line x1="112" y1="244" x2="382.2" y2="244"/>
<line x1="190" y1="258" x2="382.2" y2="258"/>
<line x1="446" y1="251" x2="482" y2="251"/>
<line x1="514" y1="251" x2="544" y2="251"/>
<line x1="160" y1="312" x2="381.2" y2="312"/>
<line x1="190" y1="326" x2="383" y2="326"/>
<line x1="316" y1="340" x2="381.2" y2="340"/>
<line x1="446" y1="326" x2="482" y2="326"/>
<line x1="514" y1="326" x2="544" y2="326"/>
<line x1="34" y1="394" x2="381.2" y2="394"/>
<line x1="190" y1="408" x2="383" y2="408"/>
<line x1="268" y1="422" x2="381.2" y2="422"/>
<line x1="446" y1="408" x2="492" y2="408"/>
<line x1="492" y1="408" x2="492" y2="460"/>
<line x1="492" y1="460" x2="507.2" y2="460"/>
<line x1="160" y1="460" x2="381.2" y2="460"/>
<line x1="238" y1="474" x2="383" y2="474"/>
<line x1="316" y1="488" x2="381.2" y2="488"/>
<line x1="446" y1="474" x2="509" y2="474"/>
<line x1="82" y1="526" x2="381.2" y2="526"/>
<line x1="238" y1="540" x2="383" y2="540"/>
<line x1="268" y1="554" x2="381.2" y2="554"/>
<line x1="446" y1="540" x2="482" y2="540"/>
<line x1="482" y1="540" x2="482" y2="488"/>
<line x1="482" y1="488" x2="507.2" y2="488"/>
<line x1="572" y1="474" x2="602" y2="474"/>
<line x1="34" y1="608" x2="382.2" y2="608"/>
<line x1="112" y1="622" x2="382.2" y2="622"/>
<line x1="446" y1="615" x2="492" y2="615"/>
<line x1="492" y1="615" x2="492" y2="667"/>
<line x1="492" y1="667" x2="507.2" y2="667"/>
<line x1="34" y1="660" x2="381.2" y2="660"/>
<line x1="190" y1="674" x2="383" y2="674"/>
<line x1="268" y1="688" x2="381.2" y2="688"/>
<line x1="446" y1="674" x2="472" y2="674"/>
<line x1="472" y1="674" x2="472" y2="681"/>
<line x1="472" y1="681" x2="509" y2="681"/>
<line x1="82" y1="726" x2="381.2" y2="726"/>
<line x1="238" y1="740" x2="383" y2="740"/>
<line x1="268" y1="754" x2="381.2" y2="754"/>
<line x1="446" y1="740" x2="482" y2="740"/>
<line x1="482" y1="740" x2="482" y2="695"/>
<line x1="482" y1="695" x2="507.2" y2="695"/>
<line x1="572" y1="681" x2="602" y2="681"/>
<line x1="34" y1="52" x2="41" y2="52"/>
<line x1="73" y1="52" x2="82" y2="52"/>
<line x1="112" y1="52" x2="119" y2="52"/>
<line x1="151" y1="52" x2="160" y2="52"/>
<line x1="190" y1="52" x2="197" y2="52"/>
<line x1="229" y1="52" x2="238" y2="52"/>
<line x1="268" y1="52" x2="275" y2="52"/>
<line x1="307" y1="52" x2="316" y2="52"/>
<path d="M376,82 C398,82 424,96 436,110 C424,124 398,138 376,138 Q390,110 376,82 Z"/>
<circle cx="441" cy="110" r="5"/>
<path d="M376,148 C398,148 424,162 436,176 C424,190 398,204 376,204 Q390,176 376,148 Z"/>
<circle cx="441" cy="176" r="5"/>
<path d="M492,122 C514,122 540,132.5 552,143 C540,153.5 514,164 492,164 Q506,143 492,122 Z"/>
<circle cx="557" cy="143" r="5"/>
<path d="M376,230 C398,230 424,240.5 436,251 C424,261.5 398,272 376,272 Q390,251 376,230 Z"/>
<circle cx="441" cy="251" r="5"/>
<polygon points="482,239 482,263 504,251"/>
<circle cx="509" cy="251" r="5"/>
<path d="M376,298 C398,298 424,312 436,326 C424,340 398,354 376,354 Q390,326 376,298 Z"/>
<circle cx="441" cy="326" r="5"/>
<polygon points="482,314 482,338 504,326"/>
<circle cx="509" cy="326" r="5"/>
<path d="M376,380 C398,380 424,394 436,408 C424,422 398,436 376,436 Q390,408 376,380 Z"/>
<circle cx="441" cy="408" r="5"/>
<path d="M376,446 C398,446 424,460 436,474 C424,488 398,502 376,502 Q390,474 376,446 Z"/>
<circle cx="441" cy="474" r="5"/>
<path d="M376,512 C398,512 424,526 436,540 C424,554 398,568 376,568 Q390,540 376,512 Z"/>
<circle cx="441" cy="540" r="5"/>
<path d="M502,446 C524,446 550,460 562,474 C550,488 524,502 502,502 Q516,474 502,446 Z"/>
<circle cx="567" cy="474" r="5"/>
<path d="M376,594 C398,594 424,604.5 436,615 C424,625.5 398,636 376,636 Q390,615 376,594 Z"/>
<circle cx="441" cy="615" r="5"/>
<path d="M376,646 C398,646 424,660 436,674 C424,688 398,702 376,702 Q390,674 376,646 Z"/>
<circle cx="441" cy="674" r="5"/>
<path d="M376,712 C398,712 424,726 436,740 C424,754 398,768 376,768 Q390,740 376,712 Z"/>
<circle cx="441" cy="740" r="5"/>
<path d="M502,653 C524,653 550,667 562,681 C550,695 524,709 502,709 Q516,681 502,653 Z"/>
<circle cx="567" cy="681" r="5"/>
<polygon points="41,40 41,64 63,52"/>
<circle cx="68" cy="52" r="5"/>
<polygon points="119,40 119,64 141,52"/>
<circle cx="146" cy="52" r="5"/>
<polygon points="197,40 197,64 219,52"/>
<circle cx="224" cy="52" r="5"/>
<polygon points="275,40 275,64 297,52"/>
<circle cx="302" cy="52" r="5"/>
<circle cx="34" cy="96" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="110" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="124" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="160" cy="162" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="176" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316" cy="190" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="244" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="258" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="160" cy="312" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="326" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316" cy="340" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="394" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="408" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="422" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="160" cy="460" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="474" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316" cy="488" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="82" cy="526" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="540" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="554" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="608" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="622" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="660" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="674" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="688" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="82" cy="726" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="740" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="754" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="52" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="598" y="149">a</text>
<text x="550" y="257">b</text>
<text x="550" y="332">c</text>
<text x="608" y="480">d</text>
<text x="608" y="687">g</text>
<text x="34" y="22" text-anchor="middle">A</text>
<text x="112" y="22" text-anchor="middle">B</text>
<text x="190" y="22" text-anchor="middle">C</text>
<text x="268" y="22" text-anchor="middle">D</text>
</svg>
</div>

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="74" height="118" viewBox="0 0 74 118" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(10,8) scale(1.1)"><path d="M7,4 L37,4 L33,10 L11,10 Z" fill-opacity="1"/><path d="M38,5 L38,35 L32,31 L32,11 Z" fill-opacity="1"/><path d="M38,41 L38,71 L32,65 L32,45 Z" fill-opacity="1"/><path d="M7,72 L37,72 L33,66 L11,66 Z" fill-opacity="1"/><path d="M6,41 L6,71 L12,65 L12,45 Z" fill-opacity="0.1"/><path d="M6,5 L6,35 L12,31 L12,11 Z" fill-opacity="0.1"/><path d="M7,38 L11,34 L33,34 L37,38 L33,42 L11,42 Z" fill-opacity="1"/></g>
<text x="34.2" y="108" text-anchor="middle">3</text>
</svg>
</div>

### วงจรของเลข 4 (Excess-3, NOR อย่างเดียว) {code=xs3; method=nor; digit=4}

$\mathbf{Sol}^{n}$

เลข $4$ ใช้ segment $b, c, f, g$ จึงเขียนวงจรเฉพาะ segment เหล่านี้ ต่อเข้าด้วยกันเป็นวงจรเดียว : ใช้ NOR เกตทั้งสองชั้น : แต่ละพจน์ผลบวกเข้า NOR เกตชั้นแรก (พจน์ตัวแปรเดียวใช้ตัวที่คอมพลีเมนต์ต่อตรง) แล้วนำทุกเอาต์พุตเข้า NOR เกตชั้นที่สอง

$\mathbf{Ans}\quad \begin{aligned}b &= \overline{\overline{B+C}} \\ c &= \overline{\overline{\overline{B}+C+\overline{D}}} \\ f &= \overline{\overline{A+C}+\overline{\overline{C}+D}} \\ g &= \overline{\overline{A+B}+\overline{A+C+D}+\overline{\overline{A}+\overline{C}+D}}\end{aligned}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="656" height="552" viewBox="0 0 656 552" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<line x1="82" y1="52" x2="82" y2="484"/>
<line x1="34" y1="28" x2="34" y2="418"/>
<line x1="160" y1="52" x2="160" y2="164"/>
<line x1="112" y1="28" x2="112" y2="380"/>
<line x1="238" y1="52" x2="238" y2="498"/>
<line x1="190" y1="28" x2="190" y2="432"/>
<line x1="316" y1="52" x2="316" y2="192"/>
<line x1="268" y1="28" x2="268" y2="512"/>
<line x1="112" y1="96" x2="382.2" y2="96"/>
<line x1="190" y1="110" x2="382.2" y2="110"/>
<line x1="446" y1="103" x2="482" y2="103"/>
<line x1="514" y1="103" x2="544" y2="103"/>
<line x1="160" y1="164" x2="381.2" y2="164"/>
<line x1="190" y1="178" x2="383" y2="178"/>
<line x1="316" y1="192" x2="381.2" y2="192"/>
<line x1="446" y1="178" x2="482" y2="178"/>
<line x1="514" y1="178" x2="544" y2="178"/>
<line x1="34" y1="246" x2="382.2" y2="246"/>
<line x1="190" y1="260" x2="382.2" y2="260"/>
<line x1="446" y1="253" x2="482" y2="253"/>
<line x1="482" y1="253" x2="482" y2="272"/>
<line x1="482" y1="272" x2="498.2" y2="272"/>
<line x1="238" y1="298" x2="382.2" y2="298"/>
<line x1="268" y1="312" x2="382.2" y2="312"/>
<line x1="446" y1="305" x2="472" y2="305"/>
<line x1="472" y1="305" x2="472" y2="286"/>
<line x1="472" y1="286" x2="498.2" y2="286"/>
<line x1="562" y1="279" x2="592" y2="279"/>
<line x1="34" y1="366" x2="382.2" y2="366"/>
<line x1="112" y1="380" x2="382.2" y2="380"/>
<line x1="446" y1="373" x2="492" y2="373"/>
<line x1="492" y1="373" x2="492" y2="425"/>
<line x1="492" y1="425" x2="507.2" y2="425"/>
<line x1="34" y1="418" x2="381.2" y2="418"/>
<line x1="190" y1="432" x2="383" y2="432"/>
<line x1="268" y1="446" x2="381.2" y2="446"/>
<line x1="446" y1="432" x2="472" y2="432"/>
<line x1="472" y1="432" x2="472" y2="439"/>
<line x1="472" y1="439" x2="509" y2="439"/>
<line x1="82" y1="484" x2="381.2" y2="484"/>
<line x1="238" y1="498" x2="383" y2="498"/>
<line x1="268" y1="512" x2="381.2" y2="512"/>
<line x1="446" y1="498" x2="482" y2="498"/>
<line x1="482" y1="498" x2="482" y2="453"/>
<line x1="482" y1="453" x2="507.2" y2="453"/>
<line x1="572" y1="439" x2="602" y2="439"/>
<line x1="34" y1="52" x2="41" y2="52"/>
<line x1="73" y1="52" x2="82" y2="52"/>
<line x1="112" y1="52" x2="119" y2="52"/>
<line x1="151" y1="52" x2="160" y2="52"/>
<line x1="190" y1="52" x2="197" y2="52"/>
<line x1="229" y1="52" x2="238" y2="52"/>
<line x1="268" y1="52" x2="275" y2="52"/>
<line x1="307" y1="52" x2="316" y2="52"/>
<path d="M376,82 C398,82 424,92.5 436,103 C424,113.5 398,124 376,124 Q390,103 376,82 Z"/>
<circle cx="441" cy="103" r="5"/>
<polygon points="482,91 482,115 504,103"/>
<circle cx="509" cy="103" r="5"/>
<path d="M376,150 C398,150 424,164 436,178 C424,192 398,206 376,206 Q390,178 376,150 Z"/>
<circle cx="441" cy="178" r="5"/>
<polygon points="482,166 482,190 504,178"/>
<circle cx="509" cy="178" r="5"/>
<path d="M376,232 C398,232 424,242.5 436,253 C424,263.5 398,274 376,274 Q390,253 376,232 Z"/>
<circle cx="441" cy="253" r="5"/>
<path d="M376,284 C398,284 424,294.5 436,305 C424,315.5 398,326 376,326 Q390,305 376,284 Z"/>
<circle cx="441" cy="305" r="5"/>
<path d="M492,258 C514,258 540,268.5 552,279 C540,289.5 514,300 492,300 Q506,279 492,258 Z"/>
<circle cx="557" cy="279" r="5"/>
<path d="M376,352 C398,352 424,362.5 436,373 C424,383.5 398,394 376,394 Q390,373 376,352 Z"/>
<circle cx="441" cy="373" r="5"/>
<path d="M376,404 C398,404 424,418 436,432 C424,446 398,460 376,460 Q390,432 376,404 Z"/>
<circle cx="441" cy="432" r="5"/>
<path d="M376,470 C398,470 424,484 436,498 C424,512 398,526 376,526 Q390,498 376,470 Z"/>
<circle cx="441" cy="498" r="5"/>
<path d="M502,411 C524,411 550,425 562,439 C550,453 524,467 502,467 Q516,439 502,411 Z"/>
<circle cx="567" cy="439" r="5"/>
<polygon points="41,40 41,64 63,52"/>
<circle cx="68" cy="52" r="5"/>
<polygon points="119,40 119,64 141,52"/>
<circle cx="146" cy="52" r="5"/>
<polygon points="197,40 197,64 219,52"/>
<circle cx="224" cy="52" r="5"/>
<polygon points="275,40 275,64 297,52"/>
<circle cx="302" cy="52" r="5"/>
<circle cx="112" cy="96" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="110" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="160" cy="164" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="178" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316" cy="192" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="246" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="260" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="298" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="312" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="366" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="380" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="418" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="432" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="446" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="82" cy="484" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="498" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="512" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="52" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="550" y="109">b</text>
<text x="550" y="184">c</text>
<text x="598" y="285">f</text>
<text x="608" y="445">g</text>
<text x="34" y="22" text-anchor="middle">A</text>
<text x="112" y="22" text-anchor="middle">B</text>
<text x="190" y="22" text-anchor="middle">C</text>
<text x="268" y="22" text-anchor="middle">D</text>
</svg>
</div>

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="74" height="118" viewBox="0 0 74 118" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(10,8) scale(1.1)"><path d="M7,4 L37,4 L33,10 L11,10 Z" fill-opacity="0.1"/><path d="M38,5 L38,35 L32,31 L32,11 Z" fill-opacity="1"/><path d="M38,41 L38,71 L32,65 L32,45 Z" fill-opacity="1"/><path d="M7,72 L37,72 L33,66 L11,66 Z" fill-opacity="0.1"/><path d="M6,41 L6,71 L12,65 L12,45 Z" fill-opacity="0.1"/><path d="M6,5 L6,35 L12,31 L12,11 Z" fill-opacity="1"/><path d="M7,38 L11,34 L33,34 L37,38 L33,42 L11,42 Z" fill-opacity="1"/></g>
<text x="34.2" y="108" text-anchor="middle">4</text>
</svg>
</div>

### วงจรของเลข 5 (Excess-3, NOR อย่างเดียว) {code=xs3; method=nor; digit=5}

$\mathbf{Sol}^{n}$

เลข $5$ ใช้ segment $a, c, d, f, g$ จึงเขียนวงจรเฉพาะ segment เหล่านี้ ต่อเข้าด้วยกันเป็นวงจรเดียว : ใช้ NOR เกตทั้งสองชั้น : แต่ละพจน์ผลบวกเข้า NOR เกตชั้นแรก (พจน์ตัวแปรเดียวใช้ตัวที่คอมพลีเมนต์ต่อตรง) แล้วนำทุกเอาต์พุตเข้า NOR เกตชั้นที่สอง

$\mathbf{Ans}\quad \begin{aligned}a &= \overline{\overline{A+C+D}+\overline{\overline{B}+\overline{C}+\overline{D}}} \\ c &= \overline{\overline{\overline{B}+C+\overline{D}}} \\ d &= \overline{\overline{A+C+D}+\overline{\overline{B}+\overline{C}+\overline{D}}+\overline{\overline{A}+\overline{C}+D}} \\ f &= \overline{\overline{A+C}+\overline{\overline{C}+D}} \\ g &= \overline{\overline{A+B}+\overline{A+C+D}+\overline{\overline{A}+\overline{C}+D}}\end{aligned}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="656" height="846" viewBox="0 0 656 846" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<line x1="82" y1="52" x2="82" y2="778"/>
<line x1="34" y1="28" x2="34" y2="712"/>
<line x1="160" y1="52" x2="160" y2="392"/>
<line x1="112" y1="28" x2="112" y2="674"/>
<line x1="238" y1="52" x2="238" y2="792"/>
<line x1="190" y1="28" x2="190" y2="726"/>
<line x1="316" y1="52" x2="316" y2="420"/>
<line x1="268" y1="28" x2="268" y2="806"/>
<line x1="34" y1="96" x2="381.2" y2="96"/>
<line x1="190" y1="110" x2="383" y2="110"/>
<line x1="268" y1="124" x2="381.2" y2="124"/>
<line x1="446" y1="110" x2="482" y2="110"/>
<line x1="482" y1="110" x2="482" y2="136"/>
<line x1="482" y1="136" x2="498.2" y2="136"/>
<line x1="160" y1="162" x2="381.2" y2="162"/>
<line x1="238" y1="176" x2="383" y2="176"/>
<line x1="316" y1="190" x2="381.2" y2="190"/>
<line x1="446" y1="176" x2="472" y2="176"/>
<line x1="472" y1="176" x2="472" y2="150"/>
<line x1="472" y1="150" x2="498.2" y2="150"/>
<line x1="562" y1="143" x2="592" y2="143"/>
<line x1="160" y1="244" x2="381.2" y2="244"/>
<line x1="190" y1="258" x2="383" y2="258"/>
<line x1="316" y1="272" x2="381.2" y2="272"/>
<line x1="446" y1="258" x2="482" y2="258"/>
<line x1="514" y1="258" x2="544" y2="258"/>
<line x1="34" y1="326" x2="381.2" y2="326"/>
<line x1="190" y1="340" x2="383" y2="340"/>
<line x1="268" y1="354" x2="381.2" y2="354"/>
<line x1="446" y1="340" x2="492" y2="340"/>
<line x1="492" y1="340" x2="492" y2="392"/>
<line x1="492" y1="392" x2="507.2" y2="392"/>
<line x1="160" y1="392" x2="381.2" y2="392"/>
<line x1="238" y1="406" x2="383" y2="406"/>
<line x1="316" y1="420" x2="381.2" y2="420"/>
<line x1="446" y1="406" x2="509" y2="406"/>
<line x1="82" y1="458" x2="381.2" y2="458"/>
<line x1="238" y1="472" x2="383" y2="472"/>
<line x1="268" y1="486" x2="381.2" y2="486"/>
<line x1="446" y1="472" x2="482" y2="472"/>
<line x1="482" y1="472" x2="482" y2="420"/>
<line x1="482" y1="420" x2="507.2" y2="420"/>
<line x1="572" y1="406" x2="602" y2="406"/>
<line x1="34" y1="540" x2="382.2" y2="540"/>
<line x1="190" y1="554" x2="382.2" y2="554"/>
<line x1="446" y1="547" x2="482" y2="547"/>
<line x1="482" y1="547" x2="482" y2="566"/>
<line x1="482" y1="566" x2="498.2" y2="566"/>
<line x1="238" y1="592" x2="382.2" y2="592"/>
<line x1="268" y1="606" x2="382.2" y2="606"/>
<line x1="446" y1="599" x2="472" y2="599"/>
<line x1="472" y1="599" x2="472" y2="580"/>
<line x1="472" y1="580" x2="498.2" y2="580"/>
<line x1="562" y1="573" x2="592" y2="573"/>
<line x1="34" y1="660" x2="382.2" y2="660"/>
<line x1="112" y1="674" x2="382.2" y2="674"/>
<line x1="446" y1="667" x2="492" y2="667"/>
<line x1="492" y1="667" x2="492" y2="719"/>
<line x1="492" y1="719" x2="507.2" y2="719"/>
<line x1="34" y1="712" x2="381.2" y2="712"/>
<line x1="190" y1="726" x2="383" y2="726"/>
<line x1="268" y1="740" x2="381.2" y2="740"/>
<line x1="446" y1="726" x2="472" y2="726"/>
<line x1="472" y1="726" x2="472" y2="733"/>
<line x1="472" y1="733" x2="509" y2="733"/>
<line x1="82" y1="778" x2="381.2" y2="778"/>
<line x1="238" y1="792" x2="383" y2="792"/>
<line x1="268" y1="806" x2="381.2" y2="806"/>
<line x1="446" y1="792" x2="482" y2="792"/>
<line x1="482" y1="792" x2="482" y2="747"/>
<line x1="482" y1="747" x2="507.2" y2="747"/>
<line x1="572" y1="733" x2="602" y2="733"/>
<line x1="34" y1="52" x2="41" y2="52"/>
<line x1="73" y1="52" x2="82" y2="52"/>
<line x1="112" y1="52" x2="119" y2="52"/>
<line x1="151" y1="52" x2="160" y2="52"/>
<line x1="190" y1="52" x2="197" y2="52"/>
<line x1="229" y1="52" x2="238" y2="52"/>
<line x1="268" y1="52" x2="275" y2="52"/>
<line x1="307" y1="52" x2="316" y2="52"/>
<path d="M376,82 C398,82 424,96 436,110 C424,124 398,138 376,138 Q390,110 376,82 Z"/>
<circle cx="441" cy="110" r="5"/>
<path d="M376,148 C398,148 424,162 436,176 C424,190 398,204 376,204 Q390,176 376,148 Z"/>
<circle cx="441" cy="176" r="5"/>
<path d="M492,122 C514,122 540,132.5 552,143 C540,153.5 514,164 492,164 Q506,143 492,122 Z"/>
<circle cx="557" cy="143" r="5"/>
<path d="M376,230 C398,230 424,244 436,258 C424,272 398,286 376,286 Q390,258 376,230 Z"/>
<circle cx="441" cy="258" r="5"/>
<polygon points="482,246 482,270 504,258"/>
<circle cx="509" cy="258" r="5"/>
<path d="M376,312 C398,312 424,326 436,340 C424,354 398,368 376,368 Q390,340 376,312 Z"/>
<circle cx="441" cy="340" r="5"/>
<path d="M376,378 C398,378 424,392 436,406 C424,420 398,434 376,434 Q390,406 376,378 Z"/>
<circle cx="441" cy="406" r="5"/>
<path d="M376,444 C398,444 424,458 436,472 C424,486 398,500 376,500 Q390,472 376,444 Z"/>
<circle cx="441" cy="472" r="5"/>
<path d="M502,378 C524,378 550,392 562,406 C550,420 524,434 502,434 Q516,406 502,378 Z"/>
<circle cx="567" cy="406" r="5"/>
<path d="M376,526 C398,526 424,536.5 436,547 C424,557.5 398,568 376,568 Q390,547 376,526 Z"/>
<circle cx="441" cy="547" r="5"/>
<path d="M376,578 C398,578 424,588.5 436,599 C424,609.5 398,620 376,620 Q390,599 376,578 Z"/>
<circle cx="441" cy="599" r="5"/>
<path d="M492,552 C514,552 540,562.5 552,573 C540,583.5 514,594 492,594 Q506,573 492,552 Z"/>
<circle cx="557" cy="573" r="5"/>
<path d="M376,646 C398,646 424,656.5 436,667 C424,677.5 398,688 376,688 Q390,667 376,646 Z"/>
<circle cx="441" cy="667" r="5"/>
<path d="M376,698 C398,698 424,712 436,726 C424,740 398,754 376,754 Q390,726 376,698 Z"/>
<circle cx="441" cy="726" r="5"/>
<path d="M376,764 C398,764 424,778 436,792 C424,806 398,820 376,820 Q390,792 376,764 Z"/>
<circle cx="441" cy="792" r="5"/>
<path d="M502,705 C524,705 550,719 562,733 C550,747 524,761 502,761 Q516,733 502,705 Z"/>
<circle cx="567" cy="733" r="5"/>
<polygon points="41,40 41,64 63,52"/>
<circle cx="68" cy="52" r="5"/>
<polygon points="119,40 119,64 141,52"/>
<circle cx="146" cy="52" r="5"/>
<polygon points="197,40 197,64 219,52"/>
<circle cx="224" cy="52" r="5"/>
<polygon points="275,40 275,64 297,52"/>
<circle cx="302" cy="52" r="5"/>
<circle cx="34" cy="96" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="110" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="124" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="160" cy="162" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="176" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316" cy="190" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="160" cy="244" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="258" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316" cy="272" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="326" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="340" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="354" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="160" cy="392" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="406" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316" cy="420" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="82" cy="458" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="472" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="486" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="540" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="554" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="592" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="606" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="660" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="674" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="712" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="726" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="740" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="82" cy="778" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="792" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="806" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="52" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="598" y="149">a</text>
<text x="550" y="264">c</text>
<text x="608" y="412">d</text>
<text x="598" y="579">f</text>
<text x="608" y="739">g</text>
<text x="34" y="22" text-anchor="middle">A</text>
<text x="112" y="22" text-anchor="middle">B</text>
<text x="190" y="22" text-anchor="middle">C</text>
<text x="268" y="22" text-anchor="middle">D</text>
</svg>
</div>

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="74" height="118" viewBox="0 0 74 118" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(10,8) scale(1.1)"><path d="M7,4 L37,4 L33,10 L11,10 Z" fill-opacity="1"/><path d="M38,5 L38,35 L32,31 L32,11 Z" fill-opacity="0.1"/><path d="M38,41 L38,71 L32,65 L32,45 Z" fill-opacity="1"/><path d="M7,72 L37,72 L33,66 L11,66 Z" fill-opacity="1"/><path d="M6,41 L6,71 L12,65 L12,45 Z" fill-opacity="0.1"/><path d="M6,5 L6,35 L12,31 L12,11 Z" fill-opacity="1"/><path d="M7,38 L11,34 L33,34 L37,38 L33,42 L11,42 Z" fill-opacity="1"/></g>
<text x="34.2" y="108" text-anchor="middle">5</text>
</svg>
</div>

### วงจรของเลข 6 (Excess-3, NOR อย่างเดียว) {code=xs3; method=nor; digit=6}

$\mathbf{Sol}^{n}$

เลข $6$ ใช้ segment $a, c, d, e, f, g$ จึงเขียนวงจรเฉพาะ segment เหล่านี้ ต่อเข้าด้วยกันเป็นวงจรเดียว : ใช้ NOR เกตทั้งสองชั้น : แต่ละพจน์ผลบวกเข้า NOR เกตชั้นแรก (พจน์ตัวแปรเดียวใช้ตัวที่คอมพลีเมนต์ต่อตรง) แล้วนำทุกเอาต์พุตเข้า NOR เกตชั้นที่สอง

$\mathbf{Ans}\quad \begin{aligned}a &= \overline{\overline{A+C+D}+\overline{\overline{B}+\overline{C}+\overline{D}}} \\ c &= \overline{\overline{\overline{B}+C+\overline{D}}} \\ d &= \overline{\overline{A+C+D}+\overline{\overline{B}+\overline{C}+\overline{D}}+\overline{\overline{A}+\overline{C}+D}} \\ e &= \overline{\overline{D}+\overline{\overline{B}+\overline{C}}} \\ f &= \overline{\overline{A+C}+\overline{\overline{C}+D}} \\ g &= \overline{\overline{A+B}+\overline{A+C+D}+\overline{\overline{A}+\overline{C}+D}}\end{aligned}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="656" height="938" viewBox="0 0 656 938" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<line x1="82" y1="52" x2="82" y2="870"/>
<line x1="34" y1="28" x2="34" y2="804"/>
<line x1="160" y1="52" x2="160" y2="564"/>
<line x1="112" y1="28" x2="112" y2="766"/>
<line x1="238" y1="52" x2="238" y2="884"/>
<line x1="190" y1="28" x2="190" y2="818"/>
<line x1="316" y1="52" x2="316" y2="533"/>
<line x1="268" y1="28" x2="268" y2="898"/>
<line x1="34" y1="96" x2="381.2" y2="96"/>
<line x1="190" y1="110" x2="383" y2="110"/>
<line x1="268" y1="124" x2="381.2" y2="124"/>
<line x1="446" y1="110" x2="482" y2="110"/>
<line x1="482" y1="110" x2="482" y2="136"/>
<line x1="482" y1="136" x2="498.2" y2="136"/>
<line x1="160" y1="162" x2="381.2" y2="162"/>
<line x1="238" y1="176" x2="383" y2="176"/>
<line x1="316" y1="190" x2="381.2" y2="190"/>
<line x1="446" y1="176" x2="472" y2="176"/>
<line x1="472" y1="176" x2="472" y2="150"/>
<line x1="472" y1="150" x2="498.2" y2="150"/>
<line x1="562" y1="143" x2="592" y2="143"/>
<line x1="160" y1="244" x2="381.2" y2="244"/>
<line x1="190" y1="258" x2="383" y2="258"/>
<line x1="316" y1="272" x2="381.2" y2="272"/>
<line x1="446" y1="258" x2="482" y2="258"/>
<line x1="514" y1="258" x2="544" y2="258"/>
<line x1="34" y1="326" x2="381.2" y2="326"/>
<line x1="190" y1="340" x2="383" y2="340"/>
<line x1="268" y1="354" x2="381.2" y2="354"/>
<line x1="446" y1="340" x2="492" y2="340"/>
<line x1="492" y1="340" x2="492" y2="392"/>
<line x1="492" y1="392" x2="507.2" y2="392"/>
<line x1="160" y1="392" x2="381.2" y2="392"/>
<line x1="238" y1="406" x2="383" y2="406"/>
<line x1="316" y1="420" x2="381.2" y2="420"/>
<line x1="446" y1="406" x2="509" y2="406"/>
<line x1="82" y1="458" x2="381.2" y2="458"/>
<line x1="238" y1="472" x2="383" y2="472"/>
<line x1="268" y1="486" x2="381.2" y2="486"/>
<line x1="446" y1="472" x2="482" y2="472"/>
<line x1="482" y1="472" x2="482" y2="420"/>
<line x1="482" y1="420" x2="507.2" y2="420"/>
<line x1="572" y1="406" x2="602" y2="406"/>
<line x1="316" y1="533" x2="482" y2="533"/>
<line x1="482" y1="533" x2="482" y2="552"/>
<line x1="482" y1="552" x2="498.2" y2="552"/>
<line x1="160" y1="564" x2="382.2" y2="564"/>
<line x1="238" y1="578" x2="382.2" y2="578"/>
<line x1="446" y1="571" x2="472" y2="571"/>
<line x1="472" y1="571" x2="472" y2="566"/>
<line x1="472" y1="566" x2="498.2" y2="566"/>
<line x1="562" y1="559" x2="592" y2="559"/>
<line x1="34" y1="632" x2="382.2" y2="632"/>
<line x1="190" y1="646" x2="382.2" y2="646"/>
<line x1="446" y1="639" x2="482" y2="639"/>
<line x1="482" y1="639" x2="482" y2="658"/>
<line x1="482" y1="658" x2="498.2" y2="658"/>
<line x1="238" y1="684" x2="382.2" y2="684"/>
<line x1="268" y1="698" x2="382.2" y2="698"/>
<line x1="446" y1="691" x2="472" y2="691"/>
<line x1="472" y1="691" x2="472" y2="672"/>
<line x1="472" y1="672" x2="498.2" y2="672"/>
<line x1="562" y1="665" x2="592" y2="665"/>
<line x1="34" y1="752" x2="382.2" y2="752"/>
<line x1="112" y1="766" x2="382.2" y2="766"/>
<line x1="446" y1="759" x2="492" y2="759"/>
<line x1="492" y1="759" x2="492" y2="811"/>
<line x1="492" y1="811" x2="507.2" y2="811"/>
<line x1="34" y1="804" x2="381.2" y2="804"/>
<line x1="190" y1="818" x2="383" y2="818"/>
<line x1="268" y1="832" x2="381.2" y2="832"/>
<line x1="446" y1="818" x2="472" y2="818"/>
<line x1="472" y1="818" x2="472" y2="825"/>
<line x1="472" y1="825" x2="509" y2="825"/>
<line x1="82" y1="870" x2="381.2" y2="870"/>
<line x1="238" y1="884" x2="383" y2="884"/>
<line x1="268" y1="898" x2="381.2" y2="898"/>
<line x1="446" y1="884" x2="482" y2="884"/>
<line x1="482" y1="884" x2="482" y2="839"/>
<line x1="482" y1="839" x2="507.2" y2="839"/>
<line x1="572" y1="825" x2="602" y2="825"/>
<line x1="34" y1="52" x2="41" y2="52"/>
<line x1="73" y1="52" x2="82" y2="52"/>
<line x1="112" y1="52" x2="119" y2="52"/>
<line x1="151" y1="52" x2="160" y2="52"/>
<line x1="190" y1="52" x2="197" y2="52"/>
<line x1="229" y1="52" x2="238" y2="52"/>
<line x1="268" y1="52" x2="275" y2="52"/>
<line x1="307" y1="52" x2="316" y2="52"/>
<path d="M376,82 C398,82 424,96 436,110 C424,124 398,138 376,138 Q390,110 376,82 Z"/>
<circle cx="441" cy="110" r="5"/>
<path d="M376,148 C398,148 424,162 436,176 C424,190 398,204 376,204 Q390,176 376,148 Z"/>
<circle cx="441" cy="176" r="5"/>
<path d="M492,122 C514,122 540,132.5 552,143 C540,153.5 514,164 492,164 Q506,143 492,122 Z"/>
<circle cx="557" cy="143" r="5"/>
<path d="M376,230 C398,230 424,244 436,258 C424,272 398,286 376,286 Q390,258 376,230 Z"/>
<circle cx="441" cy="258" r="5"/>
<polygon points="482,246 482,270 504,258"/>
<circle cx="509" cy="258" r="5"/>
<path d="M376,312 C398,312 424,326 436,340 C424,354 398,368 376,368 Q390,340 376,312 Z"/>
<circle cx="441" cy="340" r="5"/>
<path d="M376,378 C398,378 424,392 436,406 C424,420 398,434 376,434 Q390,406 376,378 Z"/>
<circle cx="441" cy="406" r="5"/>
<path d="M376,444 C398,444 424,458 436,472 C424,486 398,500 376,500 Q390,472 376,444 Z"/>
<circle cx="441" cy="472" r="5"/>
<path d="M502,378 C524,378 550,392 562,406 C550,420 524,434 502,434 Q516,406 502,378 Z"/>
<circle cx="567" cy="406" r="5"/>
<path d="M376,550 C398,550 424,560.5 436,571 C424,581.5 398,592 376,592 Q390,571 376,550 Z"/>
<circle cx="441" cy="571" r="5"/>
<path d="M492,538 C514,538 540,548.5 552,559 C540,569.5 514,580 492,580 Q506,559 492,538 Z"/>
<circle cx="557" cy="559" r="5"/>
<path d="M376,618 C398,618 424,628.5 436,639 C424,649.5 398,660 376,660 Q390,639 376,618 Z"/>
<circle cx="441" cy="639" r="5"/>
<path d="M376,670 C398,670 424,680.5 436,691 C424,701.5 398,712 376,712 Q390,691 376,670 Z"/>
<circle cx="441" cy="691" r="5"/>
<path d="M492,644 C514,644 540,654.5 552,665 C540,675.5 514,686 492,686 Q506,665 492,644 Z"/>
<circle cx="557" cy="665" r="5"/>
<path d="M376,738 C398,738 424,748.5 436,759 C424,769.5 398,780 376,780 Q390,759 376,738 Z"/>
<circle cx="441" cy="759" r="5"/>
<path d="M376,790 C398,790 424,804 436,818 C424,832 398,846 376,846 Q390,818 376,790 Z"/>
<circle cx="441" cy="818" r="5"/>
<path d="M376,856 C398,856 424,870 436,884 C424,898 398,912 376,912 Q390,884 376,856 Z"/>
<circle cx="441" cy="884" r="5"/>
<path d="M502,797 C524,797 550,811 562,825 C550,839 524,853 502,853 Q516,825 502,797 Z"/>
<circle cx="567" cy="825" r="5"/>
<polygon points="41,40 41,64 63,52"/>
<circle cx="68" cy="52" r="5"/>
<polygon points="119,40 119,64 141,52"/>
<circle cx="146" cy="52" r="5"/>
<polygon points="197,40 197,64 219,52"/>
<circle cx="224" cy="52" r="5"/>
<polygon points="275,40 275,64 297,52"/>
<circle cx="302" cy="52" r="5"/>
<circle cx="34" cy="96" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="110" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="124" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="160" cy="162" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="176" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316" cy="190" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="160" cy="244" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="258" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316" cy="272" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="326" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="340" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="354" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="160" cy="392" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="406" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316" cy="420" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="82" cy="458" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="472" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="486" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316" cy="533" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="160" cy="564" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="578" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="632" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="646" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="684" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="698" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="752" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="766" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="804" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="818" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="832" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="82" cy="870" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="884" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="898" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="52" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="598" y="149">a</text>
<text x="550" y="264">c</text>
<text x="608" y="412">d</text>
<text x="598" y="565">e</text>
<text x="598" y="671">f</text>
<text x="608" y="831">g</text>
<text x="34" y="22" text-anchor="middle">A</text>
<text x="112" y="22" text-anchor="middle">B</text>
<text x="190" y="22" text-anchor="middle">C</text>
<text x="268" y="22" text-anchor="middle">D</text>
</svg>
</div>

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="74" height="118" viewBox="0 0 74 118" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(10,8) scale(1.1)"><path d="M7,4 L37,4 L33,10 L11,10 Z" fill-opacity="1"/><path d="M38,5 L38,35 L32,31 L32,11 Z" fill-opacity="0.1"/><path d="M38,41 L38,71 L32,65 L32,45 Z" fill-opacity="1"/><path d="M7,72 L37,72 L33,66 L11,66 Z" fill-opacity="1"/><path d="M6,41 L6,71 L12,65 L12,45 Z" fill-opacity="1"/><path d="M6,5 L6,35 L12,31 L12,11 Z" fill-opacity="1"/><path d="M7,38 L11,34 L33,34 L37,38 L33,42 L11,42 Z" fill-opacity="1"/></g>
<text x="34.2" y="108" text-anchor="middle">6</text>
</svg>
</div>

### วงจรของเลข 7 (Excess-3, NOR อย่างเดียว) {code=xs3; method=nor; digit=7}

$\mathbf{Sol}^{n}$

เลข $7$ ใช้ segment $a, b, c$ จึงเขียนวงจรเฉพาะ segment เหล่านี้ ต่อเข้าด้วยกันเป็นวงจรเดียว : ใช้ NOR เกตทั้งสองชั้น : แต่ละพจน์ผลบวกเข้า NOR เกตชั้นแรก (พจน์ตัวแปรเดียวใช้ตัวที่คอมพลีเมนต์ต่อตรง) แล้วนำทุกเอาต์พุตเข้า NOR เกตชั้นที่สอง

$\mathbf{Ans}\quad \begin{aligned}a &= \overline{\overline{A+C+D}+\overline{\overline{B}+\overline{C}+\overline{D}}} \\ b &= \overline{\overline{B+C}} \\ c &= \overline{\overline{\overline{B}+C+\overline{D}}}\end{aligned}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="600" height="380" viewBox="0 0 600 380" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<line x1="34" y1="28" x2="34" y2="96"/>
<line x1="114" y1="52" x2="114" y2="312"/>
<line x1="66" y1="28" x2="66" y2="244"/>
<line x1="192" y1="52" x2="192" y2="176"/>
<line x1="144" y1="28" x2="144" y2="326"/>
<line x1="270" y1="52" x2="270" y2="340"/>
<line x1="222" y1="28" x2="222" y2="124"/>
<line x1="34" y1="96" x2="335.2" y2="96"/>
<line x1="144" y1="110" x2="337" y2="110"/>
<line x1="222" y1="124" x2="335.2" y2="124"/>
<line x1="400" y1="110" x2="436" y2="110"/>
<line x1="436" y1="110" x2="436" y2="136"/>
<line x1="436" y1="136" x2="452.2" y2="136"/>
<line x1="114" y1="162" x2="335.2" y2="162"/>
<line x1="192" y1="176" x2="337" y2="176"/>
<line x1="270" y1="190" x2="335.2" y2="190"/>
<line x1="400" y1="176" x2="426" y2="176"/>
<line x1="426" y1="176" x2="426" y2="150"/>
<line x1="426" y1="150" x2="452.2" y2="150"/>
<line x1="516" y1="143" x2="546" y2="143"/>
<line x1="66" y1="244" x2="336.2" y2="244"/>
<line x1="144" y1="258" x2="336.2" y2="258"/>
<line x1="400" y1="251" x2="436" y2="251"/>
<line x1="468" y1="251" x2="498" y2="251"/>
<line x1="114" y1="312" x2="335.2" y2="312"/>
<line x1="144" y1="326" x2="337" y2="326"/>
<line x1="270" y1="340" x2="335.2" y2="340"/>
<line x1="400" y1="326" x2="436" y2="326"/>
<line x1="468" y1="326" x2="498" y2="326"/>
<line x1="66" y1="52" x2="73" y2="52"/>
<line x1="105" y1="52" x2="114" y2="52"/>
<line x1="144" y1="52" x2="151" y2="52"/>
<line x1="183" y1="52" x2="192" y2="52"/>
<line x1="222" y1="52" x2="229" y2="52"/>
<line x1="261" y1="52" x2="270" y2="52"/>
<path d="M330,82 C352,82 378,96 390,110 C378,124 352,138 330,138 Q344,110 330,82 Z"/>
<circle cx="395" cy="110" r="5"/>
<path d="M330,148 C352,148 378,162 390,176 C378,190 352,204 330,204 Q344,176 330,148 Z"/>
<circle cx="395" cy="176" r="5"/>
<path d="M446,122 C468,122 494,132.5 506,143 C494,153.5 468,164 446,164 Q460,143 446,122 Z"/>
<circle cx="511" cy="143" r="5"/>
<path d="M330,230 C352,230 378,240.5 390,251 C378,261.5 352,272 330,272 Q344,251 330,230 Z"/>
<circle cx="395" cy="251" r="5"/>
<polygon points="436,239 436,263 458,251"/>
<circle cx="463" cy="251" r="5"/>
<path d="M330,298 C352,298 378,312 390,326 C378,340 352,354 330,354 Q344,326 330,298 Z"/>
<circle cx="395" cy="326" r="5"/>
<polygon points="436,314 436,338 458,326"/>
<circle cx="463" cy="326" r="5"/>
<polygon points="73,40 73,64 95,52"/>
<circle cx="100" cy="52" r="5"/>
<polygon points="151,40 151,64 173,52"/>
<circle cx="178" cy="52" r="5"/>
<polygon points="229,40 229,64 251,52"/>
<circle cx="256" cy="52" r="5"/>
<circle cx="34" cy="96" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="110" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="222" cy="124" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="114" cy="162" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="192" cy="176" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="190" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="244" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="258" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="114" cy="312" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="326" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="340" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="222" cy="52" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="552" y="149">a</text>
<text x="504" y="257">b</text>
<text x="504" y="332">c</text>
<text x="34" y="22" text-anchor="middle">A</text>
<text x="66" y="22" text-anchor="middle">B</text>
<text x="144" y="22" text-anchor="middle">C</text>
<text x="222" y="22" text-anchor="middle">D</text>
</svg>
</div>

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="74" height="118" viewBox="0 0 74 118" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(10,8) scale(1.1)"><path d="M7,4 L37,4 L33,10 L11,10 Z" fill-opacity="1"/><path d="M38,5 L38,35 L32,31 L32,11 Z" fill-opacity="1"/><path d="M38,41 L38,71 L32,65 L32,45 Z" fill-opacity="1"/><path d="M7,72 L37,72 L33,66 L11,66 Z" fill-opacity="0.1"/><path d="M6,41 L6,71 L12,65 L12,45 Z" fill-opacity="0.1"/><path d="M6,5 L6,35 L12,31 L12,11 Z" fill-opacity="0.1"/><path d="M7,38 L11,34 L33,34 L37,38 L33,42 L11,42 Z" fill-opacity="0.1"/></g>
<text x="34.2" y="108" text-anchor="middle">7</text>
</svg>
</div>

### วงจรของเลข 8 (Excess-3, NOR อย่างเดียว) {code=xs3; method=nor; digit=8}

$\mathbf{Sol}^{n}$

เลข $8$ ใช้ segment $a, b, c, d, e, f, g$ จึงเขียนวงจรเฉพาะ segment เหล่านี้ ต่อเข้าด้วยกันเป็นวงจรเดียว : ใช้ NOR เกตทั้งสองชั้น : แต่ละพจน์ผลบวกเข้า NOR เกตชั้นแรก (พจน์ตัวแปรเดียวใช้ตัวที่คอมพลีเมนต์ต่อตรง) แล้วนำทุกเอาต์พุตเข้า NOR เกตชั้นที่สอง

$\mathbf{Ans}\quad \begin{aligned}a &= \overline{\overline{A+C+D}+\overline{\overline{B}+\overline{C}+\overline{D}}} \\ b &= \overline{\overline{B+C}} \\ c &= \overline{\overline{\overline{B}+C+\overline{D}}} \\ d &= \overline{\overline{A+C+D}+\overline{\overline{B}+\overline{C}+\overline{D}}+\overline{\overline{A}+\overline{C}+D}} \\ e &= \overline{\overline{D}+\overline{\overline{B}+\overline{C}}} \\ f &= \overline{\overline{A+C}+\overline{\overline{C}+D}} \\ g &= \overline{\overline{A+B}+\overline{A+C+D}+\overline{\overline{A}+\overline{C}+D}}\end{aligned}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="656" height="1006" viewBox="0 0 656 1006" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<line x1="82" y1="52" x2="82" y2="938"/>
<line x1="34" y1="28" x2="34" y2="872"/>
<line x1="160" y1="52" x2="160" y2="632"/>
<line x1="112" y1="28" x2="112" y2="834"/>
<line x1="238" y1="52" x2="238" y2="952"/>
<line x1="190" y1="28" x2="190" y2="886"/>
<line x1="316" y1="52" x2="316" y2="601"/>
<line x1="268" y1="28" x2="268" y2="966"/>
<line x1="34" y1="96" x2="381.2" y2="96"/>
<line x1="190" y1="110" x2="383" y2="110"/>
<line x1="268" y1="124" x2="381.2" y2="124"/>
<line x1="446" y1="110" x2="482" y2="110"/>
<line x1="482" y1="110" x2="482" y2="136"/>
<line x1="482" y1="136" x2="498.2" y2="136"/>
<line x1="160" y1="162" x2="381.2" y2="162"/>
<line x1="238" y1="176" x2="383" y2="176"/>
<line x1="316" y1="190" x2="381.2" y2="190"/>
<line x1="446" y1="176" x2="472" y2="176"/>
<line x1="472" y1="176" x2="472" y2="150"/>
<line x1="472" y1="150" x2="498.2" y2="150"/>
<line x1="562" y1="143" x2="592" y2="143"/>
<line x1="112" y1="244" x2="382.2" y2="244"/>
<line x1="190" y1="258" x2="382.2" y2="258"/>
<line x1="446" y1="251" x2="482" y2="251"/>
<line x1="514" y1="251" x2="544" y2="251"/>
<line x1="160" y1="312" x2="381.2" y2="312"/>
<line x1="190" y1="326" x2="383" y2="326"/>
<line x1="316" y1="340" x2="381.2" y2="340"/>
<line x1="446" y1="326" x2="482" y2="326"/>
<line x1="514" y1="326" x2="544" y2="326"/>
<line x1="34" y1="394" x2="381.2" y2="394"/>
<line x1="190" y1="408" x2="383" y2="408"/>
<line x1="268" y1="422" x2="381.2" y2="422"/>
<line x1="446" y1="408" x2="492" y2="408"/>
<line x1="492" y1="408" x2="492" y2="460"/>
<line x1="492" y1="460" x2="507.2" y2="460"/>
<line x1="160" y1="460" x2="381.2" y2="460"/>
<line x1="238" y1="474" x2="383" y2="474"/>
<line x1="316" y1="488" x2="381.2" y2="488"/>
<line x1="446" y1="474" x2="509" y2="474"/>
<line x1="82" y1="526" x2="381.2" y2="526"/>
<line x1="238" y1="540" x2="383" y2="540"/>
<line x1="268" y1="554" x2="381.2" y2="554"/>
<line x1="446" y1="540" x2="482" y2="540"/>
<line x1="482" y1="540" x2="482" y2="488"/>
<line x1="482" y1="488" x2="507.2" y2="488"/>
<line x1="572" y1="474" x2="602" y2="474"/>
<line x1="316" y1="601" x2="482" y2="601"/>
<line x1="482" y1="601" x2="482" y2="620"/>
<line x1="482" y1="620" x2="498.2" y2="620"/>
<line x1="160" y1="632" x2="382.2" y2="632"/>
<line x1="238" y1="646" x2="382.2" y2="646"/>
<line x1="446" y1="639" x2="472" y2="639"/>
<line x1="472" y1="639" x2="472" y2="634"/>
<line x1="472" y1="634" x2="498.2" y2="634"/>
<line x1="562" y1="627" x2="592" y2="627"/>
<line x1="34" y1="700" x2="382.2" y2="700"/>
<line x1="190" y1="714" x2="382.2" y2="714"/>
<line x1="446" y1="707" x2="482" y2="707"/>
<line x1="482" y1="707" x2="482" y2="726"/>
<line x1="482" y1="726" x2="498.2" y2="726"/>
<line x1="238" y1="752" x2="382.2" y2="752"/>
<line x1="268" y1="766" x2="382.2" y2="766"/>
<line x1="446" y1="759" x2="472" y2="759"/>
<line x1="472" y1="759" x2="472" y2="740"/>
<line x1="472" y1="740" x2="498.2" y2="740"/>
<line x1="562" y1="733" x2="592" y2="733"/>
<line x1="34" y1="820" x2="382.2" y2="820"/>
<line x1="112" y1="834" x2="382.2" y2="834"/>
<line x1="446" y1="827" x2="492" y2="827"/>
<line x1="492" y1="827" x2="492" y2="879"/>
<line x1="492" y1="879" x2="507.2" y2="879"/>
<line x1="34" y1="872" x2="381.2" y2="872"/>
<line x1="190" y1="886" x2="383" y2="886"/>
<line x1="268" y1="900" x2="381.2" y2="900"/>
<line x1="446" y1="886" x2="472" y2="886"/>
<line x1="472" y1="886" x2="472" y2="893"/>
<line x1="472" y1="893" x2="509" y2="893"/>
<line x1="82" y1="938" x2="381.2" y2="938"/>
<line x1="238" y1="952" x2="383" y2="952"/>
<line x1="268" y1="966" x2="381.2" y2="966"/>
<line x1="446" y1="952" x2="482" y2="952"/>
<line x1="482" y1="952" x2="482" y2="907"/>
<line x1="482" y1="907" x2="507.2" y2="907"/>
<line x1="572" y1="893" x2="602" y2="893"/>
<line x1="34" y1="52" x2="41" y2="52"/>
<line x1="73" y1="52" x2="82" y2="52"/>
<line x1="112" y1="52" x2="119" y2="52"/>
<line x1="151" y1="52" x2="160" y2="52"/>
<line x1="190" y1="52" x2="197" y2="52"/>
<line x1="229" y1="52" x2="238" y2="52"/>
<line x1="268" y1="52" x2="275" y2="52"/>
<line x1="307" y1="52" x2="316" y2="52"/>
<path d="M376,82 C398,82 424,96 436,110 C424,124 398,138 376,138 Q390,110 376,82 Z"/>
<circle cx="441" cy="110" r="5"/>
<path d="M376,148 C398,148 424,162 436,176 C424,190 398,204 376,204 Q390,176 376,148 Z"/>
<circle cx="441" cy="176" r="5"/>
<path d="M492,122 C514,122 540,132.5 552,143 C540,153.5 514,164 492,164 Q506,143 492,122 Z"/>
<circle cx="557" cy="143" r="5"/>
<path d="M376,230 C398,230 424,240.5 436,251 C424,261.5 398,272 376,272 Q390,251 376,230 Z"/>
<circle cx="441" cy="251" r="5"/>
<polygon points="482,239 482,263 504,251"/>
<circle cx="509" cy="251" r="5"/>
<path d="M376,298 C398,298 424,312 436,326 C424,340 398,354 376,354 Q390,326 376,298 Z"/>
<circle cx="441" cy="326" r="5"/>
<polygon points="482,314 482,338 504,326"/>
<circle cx="509" cy="326" r="5"/>
<path d="M376,380 C398,380 424,394 436,408 C424,422 398,436 376,436 Q390,408 376,380 Z"/>
<circle cx="441" cy="408" r="5"/>
<path d="M376,446 C398,446 424,460 436,474 C424,488 398,502 376,502 Q390,474 376,446 Z"/>
<circle cx="441" cy="474" r="5"/>
<path d="M376,512 C398,512 424,526 436,540 C424,554 398,568 376,568 Q390,540 376,512 Z"/>
<circle cx="441" cy="540" r="5"/>
<path d="M502,446 C524,446 550,460 562,474 C550,488 524,502 502,502 Q516,474 502,446 Z"/>
<circle cx="567" cy="474" r="5"/>
<path d="M376,618 C398,618 424,628.5 436,639 C424,649.5 398,660 376,660 Q390,639 376,618 Z"/>
<circle cx="441" cy="639" r="5"/>
<path d="M492,606 C514,606 540,616.5 552,627 C540,637.5 514,648 492,648 Q506,627 492,606 Z"/>
<circle cx="557" cy="627" r="5"/>
<path d="M376,686 C398,686 424,696.5 436,707 C424,717.5 398,728 376,728 Q390,707 376,686 Z"/>
<circle cx="441" cy="707" r="5"/>
<path d="M376,738 C398,738 424,748.5 436,759 C424,769.5 398,780 376,780 Q390,759 376,738 Z"/>
<circle cx="441" cy="759" r="5"/>
<path d="M492,712 C514,712 540,722.5 552,733 C540,743.5 514,754 492,754 Q506,733 492,712 Z"/>
<circle cx="557" cy="733" r="5"/>
<path d="M376,806 C398,806 424,816.5 436,827 C424,837.5 398,848 376,848 Q390,827 376,806 Z"/>
<circle cx="441" cy="827" r="5"/>
<path d="M376,858 C398,858 424,872 436,886 C424,900 398,914 376,914 Q390,886 376,858 Z"/>
<circle cx="441" cy="886" r="5"/>
<path d="M376,924 C398,924 424,938 436,952 C424,966 398,980 376,980 Q390,952 376,924 Z"/>
<circle cx="441" cy="952" r="5"/>
<path d="M502,865 C524,865 550,879 562,893 C550,907 524,921 502,921 Q516,893 502,865 Z"/>
<circle cx="567" cy="893" r="5"/>
<polygon points="41,40 41,64 63,52"/>
<circle cx="68" cy="52" r="5"/>
<polygon points="119,40 119,64 141,52"/>
<circle cx="146" cy="52" r="5"/>
<polygon points="197,40 197,64 219,52"/>
<circle cx="224" cy="52" r="5"/>
<polygon points="275,40 275,64 297,52"/>
<circle cx="302" cy="52" r="5"/>
<circle cx="34" cy="96" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="110" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="124" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="160" cy="162" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="176" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316" cy="190" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="244" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="258" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="160" cy="312" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="326" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316" cy="340" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="394" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="408" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="422" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="160" cy="460" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="474" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316" cy="488" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="82" cy="526" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="540" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="554" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316" cy="601" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="160" cy="632" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="646" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="700" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="714" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="752" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="766" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="820" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="834" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="872" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="886" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="900" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="82" cy="938" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="952" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="966" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="52" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="598" y="149">a</text>
<text x="550" y="257">b</text>
<text x="550" y="332">c</text>
<text x="608" y="480">d</text>
<text x="598" y="633">e</text>
<text x="598" y="739">f</text>
<text x="608" y="899">g</text>
<text x="34" y="22" text-anchor="middle">A</text>
<text x="112" y="22" text-anchor="middle">B</text>
<text x="190" y="22" text-anchor="middle">C</text>
<text x="268" y="22" text-anchor="middle">D</text>
</svg>
</div>

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="74" height="118" viewBox="0 0 74 118" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(10,8) scale(1.1)"><path d="M7,4 L37,4 L33,10 L11,10 Z" fill-opacity="1"/><path d="M38,5 L38,35 L32,31 L32,11 Z" fill-opacity="1"/><path d="M38,41 L38,71 L32,65 L32,45 Z" fill-opacity="1"/><path d="M7,72 L37,72 L33,66 L11,66 Z" fill-opacity="1"/><path d="M6,41 L6,71 L12,65 L12,45 Z" fill-opacity="1"/><path d="M6,5 L6,35 L12,31 L12,11 Z" fill-opacity="1"/><path d="M7,38 L11,34 L33,34 L37,38 L33,42 L11,42 Z" fill-opacity="1"/></g>
<text x="34.2" y="108" text-anchor="middle">8</text>
</svg>
</div>

### วงจรของเลข 9 (Excess-3, NOR อย่างเดียว) {code=xs3; method=nor; digit=9}

$\mathbf{Sol}^{n}$

เลข $9$ ใช้ segment $a, b, c, d, f, g$ จึงเขียนวงจรเฉพาะ segment เหล่านี้ ต่อเข้าด้วยกันเป็นวงจรเดียว : ใช้ NOR เกตทั้งสองชั้น : แต่ละพจน์ผลบวกเข้า NOR เกตชั้นแรก (พจน์ตัวแปรเดียวใช้ตัวที่คอมพลีเมนต์ต่อตรง) แล้วนำทุกเอาต์พุตเข้า NOR เกตชั้นที่สอง

$\mathbf{Ans}\quad \begin{aligned}a &= \overline{\overline{A+C+D}+\overline{\overline{B}+\overline{C}+\overline{D}}} \\ b &= \overline{\overline{B+C}} \\ c &= \overline{\overline{\overline{B}+C+\overline{D}}} \\ d &= \overline{\overline{A+C+D}+\overline{\overline{B}+\overline{C}+\overline{D}}+\overline{\overline{A}+\overline{C}+D}} \\ f &= \overline{\overline{A+C}+\overline{\overline{C}+D}} \\ g &= \overline{\overline{A+B}+\overline{A+C+D}+\overline{\overline{A}+\overline{C}+D}}\end{aligned}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="656" height="914" viewBox="0 0 656 914" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<line x1="82" y1="52" x2="82" y2="846"/>
<line x1="34" y1="28" x2="34" y2="780"/>
<line x1="160" y1="52" x2="160" y2="460"/>
<line x1="112" y1="28" x2="112" y2="742"/>
<line x1="238" y1="52" x2="238" y2="860"/>
<line x1="190" y1="28" x2="190" y2="794"/>
<line x1="316" y1="52" x2="316" y2="488"/>
<line x1="268" y1="28" x2="268" y2="874"/>
<line x1="34" y1="96" x2="381.2" y2="96"/>
<line x1="190" y1="110" x2="383" y2="110"/>
<line x1="268" y1="124" x2="381.2" y2="124"/>
<line x1="446" y1="110" x2="482" y2="110"/>
<line x1="482" y1="110" x2="482" y2="136"/>
<line x1="482" y1="136" x2="498.2" y2="136"/>
<line x1="160" y1="162" x2="381.2" y2="162"/>
<line x1="238" y1="176" x2="383" y2="176"/>
<line x1="316" y1="190" x2="381.2" y2="190"/>
<line x1="446" y1="176" x2="472" y2="176"/>
<line x1="472" y1="176" x2="472" y2="150"/>
<line x1="472" y1="150" x2="498.2" y2="150"/>
<line x1="562" y1="143" x2="592" y2="143"/>
<line x1="112" y1="244" x2="382.2" y2="244"/>
<line x1="190" y1="258" x2="382.2" y2="258"/>
<line x1="446" y1="251" x2="482" y2="251"/>
<line x1="514" y1="251" x2="544" y2="251"/>
<line x1="160" y1="312" x2="381.2" y2="312"/>
<line x1="190" y1="326" x2="383" y2="326"/>
<line x1="316" y1="340" x2="381.2" y2="340"/>
<line x1="446" y1="326" x2="482" y2="326"/>
<line x1="514" y1="326" x2="544" y2="326"/>
<line x1="34" y1="394" x2="381.2" y2="394"/>
<line x1="190" y1="408" x2="383" y2="408"/>
<line x1="268" y1="422" x2="381.2" y2="422"/>
<line x1="446" y1="408" x2="492" y2="408"/>
<line x1="492" y1="408" x2="492" y2="460"/>
<line x1="492" y1="460" x2="507.2" y2="460"/>
<line x1="160" y1="460" x2="381.2" y2="460"/>
<line x1="238" y1="474" x2="383" y2="474"/>
<line x1="316" y1="488" x2="381.2" y2="488"/>
<line x1="446" y1="474" x2="509" y2="474"/>
<line x1="82" y1="526" x2="381.2" y2="526"/>
<line x1="238" y1="540" x2="383" y2="540"/>
<line x1="268" y1="554" x2="381.2" y2="554"/>
<line x1="446" y1="540" x2="482" y2="540"/>
<line x1="482" y1="540" x2="482" y2="488"/>
<line x1="482" y1="488" x2="507.2" y2="488"/>
<line x1="572" y1="474" x2="602" y2="474"/>
<line x1="34" y1="608" x2="382.2" y2="608"/>
<line x1="190" y1="622" x2="382.2" y2="622"/>
<line x1="446" y1="615" x2="482" y2="615"/>
<line x1="482" y1="615" x2="482" y2="634"/>
<line x1="482" y1="634" x2="498.2" y2="634"/>
<line x1="238" y1="660" x2="382.2" y2="660"/>
<line x1="268" y1="674" x2="382.2" y2="674"/>
<line x1="446" y1="667" x2="472" y2="667"/>
<line x1="472" y1="667" x2="472" y2="648"/>
<line x1="472" y1="648" x2="498.2" y2="648"/>
<line x1="562" y1="641" x2="592" y2="641"/>
<line x1="34" y1="728" x2="382.2" y2="728"/>
<line x1="112" y1="742" x2="382.2" y2="742"/>
<line x1="446" y1="735" x2="492" y2="735"/>
<line x1="492" y1="735" x2="492" y2="787"/>
<line x1="492" y1="787" x2="507.2" y2="787"/>
<line x1="34" y1="780" x2="381.2" y2="780"/>
<line x1="190" y1="794" x2="383" y2="794"/>
<line x1="268" y1="808" x2="381.2" y2="808"/>
<line x1="446" y1="794" x2="472" y2="794"/>
<line x1="472" y1="794" x2="472" y2="801"/>
<line x1="472" y1="801" x2="509" y2="801"/>
<line x1="82" y1="846" x2="381.2" y2="846"/>
<line x1="238" y1="860" x2="383" y2="860"/>
<line x1="268" y1="874" x2="381.2" y2="874"/>
<line x1="446" y1="860" x2="482" y2="860"/>
<line x1="482" y1="860" x2="482" y2="815"/>
<line x1="482" y1="815" x2="507.2" y2="815"/>
<line x1="572" y1="801" x2="602" y2="801"/>
<line x1="34" y1="52" x2="41" y2="52"/>
<line x1="73" y1="52" x2="82" y2="52"/>
<line x1="112" y1="52" x2="119" y2="52"/>
<line x1="151" y1="52" x2="160" y2="52"/>
<line x1="190" y1="52" x2="197" y2="52"/>
<line x1="229" y1="52" x2="238" y2="52"/>
<line x1="268" y1="52" x2="275" y2="52"/>
<line x1="307" y1="52" x2="316" y2="52"/>
<path d="M376,82 C398,82 424,96 436,110 C424,124 398,138 376,138 Q390,110 376,82 Z"/>
<circle cx="441" cy="110" r="5"/>
<path d="M376,148 C398,148 424,162 436,176 C424,190 398,204 376,204 Q390,176 376,148 Z"/>
<circle cx="441" cy="176" r="5"/>
<path d="M492,122 C514,122 540,132.5 552,143 C540,153.5 514,164 492,164 Q506,143 492,122 Z"/>
<circle cx="557" cy="143" r="5"/>
<path d="M376,230 C398,230 424,240.5 436,251 C424,261.5 398,272 376,272 Q390,251 376,230 Z"/>
<circle cx="441" cy="251" r="5"/>
<polygon points="482,239 482,263 504,251"/>
<circle cx="509" cy="251" r="5"/>
<path d="M376,298 C398,298 424,312 436,326 C424,340 398,354 376,354 Q390,326 376,298 Z"/>
<circle cx="441" cy="326" r="5"/>
<polygon points="482,314 482,338 504,326"/>
<circle cx="509" cy="326" r="5"/>
<path d="M376,380 C398,380 424,394 436,408 C424,422 398,436 376,436 Q390,408 376,380 Z"/>
<circle cx="441" cy="408" r="5"/>
<path d="M376,446 C398,446 424,460 436,474 C424,488 398,502 376,502 Q390,474 376,446 Z"/>
<circle cx="441" cy="474" r="5"/>
<path d="M376,512 C398,512 424,526 436,540 C424,554 398,568 376,568 Q390,540 376,512 Z"/>
<circle cx="441" cy="540" r="5"/>
<path d="M502,446 C524,446 550,460 562,474 C550,488 524,502 502,502 Q516,474 502,446 Z"/>
<circle cx="567" cy="474" r="5"/>
<path d="M376,594 C398,594 424,604.5 436,615 C424,625.5 398,636 376,636 Q390,615 376,594 Z"/>
<circle cx="441" cy="615" r="5"/>
<path d="M376,646 C398,646 424,656.5 436,667 C424,677.5 398,688 376,688 Q390,667 376,646 Z"/>
<circle cx="441" cy="667" r="5"/>
<path d="M492,620 C514,620 540,630.5 552,641 C540,651.5 514,662 492,662 Q506,641 492,620 Z"/>
<circle cx="557" cy="641" r="5"/>
<path d="M376,714 C398,714 424,724.5 436,735 C424,745.5 398,756 376,756 Q390,735 376,714 Z"/>
<circle cx="441" cy="735" r="5"/>
<path d="M376,766 C398,766 424,780 436,794 C424,808 398,822 376,822 Q390,794 376,766 Z"/>
<circle cx="441" cy="794" r="5"/>
<path d="M376,832 C398,832 424,846 436,860 C424,874 398,888 376,888 Q390,860 376,832 Z"/>
<circle cx="441" cy="860" r="5"/>
<path d="M502,773 C524,773 550,787 562,801 C550,815 524,829 502,829 Q516,801 502,773 Z"/>
<circle cx="567" cy="801" r="5"/>
<polygon points="41,40 41,64 63,52"/>
<circle cx="68" cy="52" r="5"/>
<polygon points="119,40 119,64 141,52"/>
<circle cx="146" cy="52" r="5"/>
<polygon points="197,40 197,64 219,52"/>
<circle cx="224" cy="52" r="5"/>
<polygon points="275,40 275,64 297,52"/>
<circle cx="302" cy="52" r="5"/>
<circle cx="34" cy="96" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="110" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="124" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="160" cy="162" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="176" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316" cy="190" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="244" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="258" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="160" cy="312" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="326" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316" cy="340" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="394" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="408" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="422" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="160" cy="460" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="474" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316" cy="488" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="82" cy="526" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="540" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="554" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="608" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="622" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="660" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="674" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="728" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="742" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="780" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="794" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="808" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="82" cy="846" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="860" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="874" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="52" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="598" y="149">a</text>
<text x="550" y="257">b</text>
<text x="550" y="332">c</text>
<text x="608" y="480">d</text>
<text x="598" y="647">f</text>
<text x="608" y="807">g</text>
<text x="34" y="22" text-anchor="middle">A</text>
<text x="112" y="22" text-anchor="middle">B</text>
<text x="190" y="22" text-anchor="middle">C</text>
<text x="268" y="22" text-anchor="middle">D</text>
</svg>
</div>

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="74" height="118" viewBox="0 0 74 118" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(10,8) scale(1.1)"><path d="M7,4 L37,4 L33,10 L11,10 Z" fill-opacity="1"/><path d="M38,5 L38,35 L32,31 L32,11 Z" fill-opacity="1"/><path d="M38,41 L38,71 L32,65 L32,45 Z" fill-opacity="1"/><path d="M7,72 L37,72 L33,66 L11,66 Z" fill-opacity="1"/><path d="M6,41 L6,71 L12,65 L12,45 Z" fill-opacity="0.1"/><path d="M6,5 L6,35 L12,31 L12,11 Z" fill-opacity="1"/><path d="M7,38 L11,34 L33,34 L37,38 L33,42 L11,42 Z" fill-opacity="1"/></g>
<text x="34.2" y="108" text-anchor="middle">9</text>
</svg>
</div>

## 4. มัลติเพลกซ์เซอร์และดีมัลติเพลกซ์เซอร์

### 4.1 มัลติเพลกซ์เซอร์ (Multiplexer, MUX)

กรณีที่ต้องการส่งข้อมูลดิจิทัลหลายข้อมูลไปในสายส่งเส้นเดียวกัน ทำได้ด้วยวิธี Multiplex ส่วนการส่งอินพุตชุดเดียวแล้วกระจายออกไปหลายเอาต์พุต ใช้วิธี Demultiplex

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="560" height="190" viewBox="0 0 560 190" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<rect x="90" y="20" width="110" height="120" rx="3"/><rect x="360" y="20" width="110" height="120" rx="3"/>
<line x1="45" y1="45" x2="90" y2="45"/><line x1="470" y1="45" x2="515" y2="45"/>
<line x1="45" y1="80" x2="90" y2="80"/><line x1="470" y1="80" x2="515" y2="80"/>
<line x1="45" y1="115" x2="90" y2="115"/><line x1="470" y1="115" x2="515" y2="115"/>
<line x1="200" y1="80" x2="360" y2="80"/>
<line x1="145" y1="140" x2="145" y2="176"/><line x1="415" y1="140" x2="415" y2="176"/>
</g>
<text x="145" y="86" text-anchor="middle">MUX</text><text x="415" y="86" text-anchor="middle">DEMUX</text>
<text x="280" y="70" text-anchor="middle" font-size="14">1 line</text>
<text x="38" y="51" text-anchor="end">D<tspan dy="4" font-size="12">0</tspan></text>
<text x="38" y="86" text-anchor="end">D<tspan dy="4" font-size="12">1</tspan></text>
<text x="38" y="121" text-anchor="end">D<tspan dy="4" font-size="12">2</tspan></text>
<text x="522" y="51">Y<tspan dy="4" font-size="12">0</tspan></text>
<text x="522" y="86">Y<tspan dy="4" font-size="12">1</tspan></text>
<text x="522" y="121">Y<tspan dy="4" font-size="12">2</tspan></text>
<text x="145" y="188" text-anchor="middle" font-size="14">select</text><text x="415" y="188" text-anchor="middle" font-size="14">select</text>
</svg>
</div>

มัลติเพลกซ์เซอร์ขนาดเข้า 4 ออก 1 (4-to-1 Multiplexer) มีอินพุตข้อมูล $D_0$ ถึง $D_3$ และอินพุตเลือก $S_0, S_1$ ($S_0$ เป็นบิตสูง) ค่าที่ป้อนที่ $S_0S_1$ เลือกว่าจะส่งข้อมูลเส้นไหนออกที่ $Y$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="330" height="250" viewBox="0 0 330 250" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<rect x="100" y="20" width="130" height="170" rx="3"/>
<line x1="55" y1="50" x2="100" y2="50"/>
<line x1="55" y1="86" x2="100" y2="86"/>
<line x1="55" y1="122" x2="100" y2="122"/>
<line x1="55" y1="158" x2="100" y2="158"/>
<line x1="230" y1="105" x2="290" y2="105"/>
<line x1="135" y1="190" x2="135" y2="228"/><line x1="195" y1="190" x2="195" y2="228"/>
</g>
<text x="48" y="56" text-anchor="end">D<tspan dy="4" font-size="12">0</tspan></text>
<text x="48" y="92" text-anchor="end">D<tspan dy="4" font-size="12">1</tspan></text>
<text x="48" y="128" text-anchor="end">D<tspan dy="4" font-size="12">2</tspan></text>
<text x="48" y="164" text-anchor="end">D<tspan dy="4" font-size="12">3</tspan></text>
<text x="298" y="111">Y</text>
<text x="165" y="100" text-anchor="middle">4-to-1</text><text x="165" y="124" text-anchor="middle">MUX</text>
<text x="135" y="246" text-anchor="middle">S<tspan dy="4" font-size="12">0</tspan></text><text x="195" y="246" text-anchor="middle">S<tspan dy="4" font-size="12">1</tspan></text>
</svg>
</div>

| $S_0$ | $S_1$ | $Y$ |
|:-:|:-:|:-:|
| 0 | 0 | $D_0$ |
| 0 | 1 | $D_1$ |
| 1 | 0 | $D_2$ |
| 1 | 1 | $D_3$ |

**ฟังก์ชันลอจิก**

$$Y = D_0\overline{S_0}\,\overline{S_1} + D_1\overline{S_0}S_1 + D_2 S_0\overline{S_1} + D_3 S_0 S_1$$

$$Y = (D_0\overline{S_1} + D_1 S_1)\overline{S_0} + (D_2\overline{S_1} + D_3 S_1)S_0$$

### ตัวอย่างที่ 2  จงเขียนวงจรมัลติเพลกซ์เซอร์ขนาดเข้า 4 ออก 1 จากฟังก์ชันลอจิกของมัน

$\mathbf{Sol}^{n}$

แต่ละพจน์ของ $Y$ เป็นผลคูณของ $D_i$ กับ $S_0$, $S_1$ (หรือตัวคอมพลีเมนต์) จึงใช้ AND เกต 3 อินพุต 4 ตัว แล้วนำเอาต์พุตทั้ง 4 เข้า OR เกต

$\mathbf{Ans}\quad Y = D_0\overline{S_0}\,\overline{S_1} + D_1\overline{S_0}S_1 + D_2 S_0\overline{S_1} + D_3 S_0 S_1$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="610" height="362" viewBox="0 0 610 362" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<line x1="34" y1="28" x2="34" y2="96"/>
<line x1="66" y1="28" x2="66" y2="162"/>
<line x1="98" y1="28" x2="98" y2="228"/>
<line x1="130" y1="28" x2="130" y2="294"/>
<line x1="210" y1="52" x2="210" y2="176"/>
<line x1="162" y1="28" x2="162" y2="308"/>
<line x1="288" y1="52" x2="288" y2="256"/>
<line x1="240" y1="28" x2="240" y2="322"/>
<line x1="34" y1="96" x2="348" y2="96"/>
<line x1="210" y1="110" x2="348" y2="110"/>
<line x1="288" y1="124" x2="348" y2="124"/>
<line x1="400" y1="110" x2="456" y2="110"/>
<line x1="456" y1="110" x2="456" y2="188"/>
<line x1="456" y1="188" x2="470.5" y2="188"/>
<line x1="66" y1="162" x2="348" y2="162"/>
<line x1="210" y1="176" x2="348" y2="176"/>
<line x1="240" y1="190" x2="348" y2="190"/>
<line x1="400" y1="176" x2="436" y2="176"/>
<line x1="436" y1="176" x2="436" y2="202"/>
<line x1="436" y1="202" x2="472.7" y2="202"/>
<line x1="98" y1="228" x2="348" y2="228"/>
<line x1="162" y1="242" x2="348" y2="242"/>
<line x1="288" y1="256" x2="348" y2="256"/>
<line x1="400" y1="242" x2="426" y2="242"/>
<line x1="426" y1="242" x2="426" y2="216"/>
<line x1="426" y1="216" x2="472.7" y2="216"/>
<line x1="130" y1="294" x2="348" y2="294"/>
<line x1="162" y1="308" x2="348" y2="308"/>
<line x1="240" y1="322" x2="348" y2="322"/>
<line x1="400" y1="308" x2="446" y2="308"/>
<line x1="446" y1="308" x2="446" y2="230"/>
<line x1="446" y1="230" x2="470.5" y2="230"/>
<line x1="526" y1="209" x2="556" y2="209"/>
<line x1="162" y1="52" x2="169" y2="52"/>
<line x1="201" y1="52" x2="210" y2="52"/>
<line x1="240" y1="52" x2="247" y2="52"/>
<line x1="279" y1="52" x2="288" y2="52"/>
<path d="M348,82 H374 A26,28 0 0 1 374,138 H348 Z"/>
<path d="M348,148 H374 A26,28 0 0 1 374,204 H348 Z"/>
<path d="M348,214 H374 A26,28 0 0 1 374,270 H348 Z"/>
<path d="M348,280 H374 A26,28 0 0 1 374,336 H348 Z"/>
<path d="M466,174 C488,174 514,191.5 526,209 C514,226.5 488,244 466,244 Q480,209 466,174 Z"/>
<polygon points="169,40 169,64 191,52"/>
<circle cx="196" cy="52" r="5"/>
<polygon points="247,40 247,64 269,52"/>
<circle cx="274" cy="52" r="5"/>
<circle cx="34" cy="96" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="210" cy="110" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="288" cy="124" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="162" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="210" cy="176" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="240" cy="190" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="98" cy="228" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="162" cy="242" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="288" cy="256" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="130" cy="294" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="162" cy="308" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="240" cy="322" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="162" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="240" cy="52" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="562" y="215">Y</text>
<text x="34" y="22" text-anchor="middle">D<tspan dy="4" font-size="12">0</tspan></text>
<text x="66" y="22" text-anchor="middle">D<tspan dy="4" font-size="12">1</tspan></text>
<text x="98" y="22" text-anchor="middle">D<tspan dy="4" font-size="12">2</tspan></text>
<text x="130" y="22" text-anchor="middle">D<tspan dy="4" font-size="12">3</tspan></text>
<text x="162" y="22" text-anchor="middle">S<tspan dy="4" font-size="12">0</tspan></text>
<text x="240" y="22" text-anchor="middle">S<tspan dy="4" font-size="12">1</tspan></text>
</svg>
</div>

### ตัวอย่างที่ 3  มัลติเพลกซ์เซอร์ 4-to-1 มี $D_0D_1D_2D_3 = 0110$ จงหา $Y$ เมื่อ $S_0S_1$ เป็น $00, 01, 10, 11$

$\mathbf{Sol}^{n}$

$S_0S_1$ ชี้ว่าเลือกอินพุตตัวที่เท่าไร (อ่าน $S_0S_1$ เป็นเลขฐานสอง) แล้ว $Y$ เท่ากับอินพุตตัวนั้น

| $S_0$ | $S_1$ | เลือก | $Y$ |
|:-:|:-:|:-:|:-:|
| 0 | 0 | $D_0=0$ | 0 |
| 0 | 1 | $D_1=1$ | 1 |
| 1 | 0 | $D_2=1$ | 1 |
| 1 | 1 | $D_3=0$ | 0 |

$\mathbf{Ans}\quad Y = 0,\ 1,\ 1,\ 0$

### 4.2 ดีมัลติเพลกซ์เซอร์ (Demultiplexer, DEMUX)

ดีมัลติเพลกซ์เซอร์ขนาดเข้า 1 ออก 4 (1-to-4 Demultiplexer) รับข้อมูล $D_0$ เส้นเดียว แล้วส่งไปที่เอาต์พุตเส้นที่ $S_0S_1$ เลือก เอาต์พุตที่ไม่ถูกเลือกเป็น $0$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="330" height="250" viewBox="0 0 330 250" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<rect x="100" y="20" width="130" height="170" rx="3"/>
<line x1="55" y1="105" x2="100" y2="105"/>
<line x1="230" y1="50" x2="290" y2="50"/>
<line x1="230" y1="86" x2="290" y2="86"/>
<line x1="230" y1="122" x2="290" y2="122"/>
<line x1="230" y1="158" x2="290" y2="158"/>
<line x1="135" y1="190" x2="135" y2="228"/><line x1="195" y1="190" x2="195" y2="228"/>
</g>
<text x="48" y="111" text-anchor="end">D<tspan dy="4" font-size="12">0</tspan></text>
<text x="298" y="56">Y<tspan dy="4" font-size="12">0</tspan></text>
<text x="298" y="92">Y<tspan dy="4" font-size="12">1</tspan></text>
<text x="298" y="128">Y<tspan dy="4" font-size="12">2</tspan></text>
<text x="298" y="164">Y<tspan dy="4" font-size="12">3</tspan></text>
<text x="165" y="100" text-anchor="middle">1-to-4</text><text x="165" y="124" text-anchor="middle">DEMUX</text>
<text x="135" y="246" text-anchor="middle">S<tspan dy="4" font-size="12">0</tspan></text><text x="195" y="246" text-anchor="middle">S<tspan dy="4" font-size="12">1</tspan></text>
</svg>
</div>

| $S_0$ | $S_1$ | $Y_0$ | $Y_1$ | $Y_2$ | $Y_3$ |
|:-:|:-:|:-:|:-:|:-:|:-:|
| 0 | 0 | $D_0$ | 0 | 0 | 0 |
| 0 | 1 | 0 | $D_0$ | 0 | 0 |
| 1 | 0 | 0 | 0 | $D_0$ | 0 |
| 1 | 1 | 0 | 0 | 0 | $D_0$ |

**ฟังก์ชันลอจิก**

$$\begin{aligned} Y_0 &= D_0\overline{S_0}\,\overline{S_1} \\ Y_1 &= D_0\overline{S_0}S_1 \\ Y_2 &= D_0 S_0\overline{S_1} \\ Y_3 &= D_0 S_0 S_1 \end{aligned}$$

### ตัวอย่างที่ 4  จงเขียนวงจรดีมัลติเพลกซ์เซอร์ขนาดเข้า 1 ออก 4 จากฟังก์ชันลอจิกของมัน

$\mathbf{Sol}^{n}$

แต่ละเอาต์พุตเป็นผลคูณของ $D_0$ กับ $S_0$, $S_1$ (หรือตัวคอมพลีเมนต์) จึงใช้ AND เกต 3 อินพุต 1 ตัวต่อ 1 เอาต์พุต

$\mathbf{Ans}\quad Y_0 = D_0\overline{S_0}\,\overline{S_1},\ Y_1 = D_0\overline{S_0}S_1,\ Y_2 = D_0 S_0\overline{S_1},\ Y_3 = D_0 S_0 S_1$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="388" height="410" viewBox="0 0 388 410" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<line x1="34" y1="28" x2="34" y2="342"/>
<line x1="114" y1="52" x2="114" y2="192"/>
<line x1="66" y1="28" x2="66" y2="356"/>
<line x1="192" y1="52" x2="192" y2="288"/>
<line x1="144" y1="28" x2="144" y2="370"/>
<line x1="34" y1="96" x2="252" y2="96"/>
<line x1="114" y1="110" x2="252" y2="110"/>
<line x1="192" y1="124" x2="252" y2="124"/>
<line x1="304" y1="110" x2="334" y2="110"/>
<line x1="34" y1="178" x2="252" y2="178"/>
<line x1="114" y1="192" x2="252" y2="192"/>
<line x1="144" y1="206" x2="252" y2="206"/>
<line x1="304" y1="192" x2="334" y2="192"/>
<line x1="34" y1="260" x2="252" y2="260"/>
<line x1="66" y1="274" x2="252" y2="274"/>
<line x1="192" y1="288" x2="252" y2="288"/>
<line x1="304" y1="274" x2="334" y2="274"/>
<line x1="34" y1="342" x2="252" y2="342"/>
<line x1="66" y1="356" x2="252" y2="356"/>
<line x1="144" y1="370" x2="252" y2="370"/>
<line x1="304" y1="356" x2="334" y2="356"/>
<line x1="66" y1="52" x2="73" y2="52"/>
<line x1="105" y1="52" x2="114" y2="52"/>
<line x1="144" y1="52" x2="151" y2="52"/>
<line x1="183" y1="52" x2="192" y2="52"/>
<path d="M252,82 H278 A26,28 0 0 1 278,138 H252 Z"/>
<path d="M252,164 H278 A26,28 0 0 1 278,220 H252 Z"/>
<path d="M252,246 H278 A26,28 0 0 1 278,302 H252 Z"/>
<path d="M252,328 H278 A26,28 0 0 1 278,384 H252 Z"/>
<polygon points="73,40 73,64 95,52"/>
<circle cx="100" cy="52" r="5"/>
<polygon points="151,40 151,64 173,52"/>
<circle cx="178" cy="52" r="5"/>
<circle cx="34" cy="96" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="114" cy="110" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="192" cy="124" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="178" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="114" cy="192" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="206" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="260" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="274" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="192" cy="288" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="342" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="356" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="370" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="52" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="340" y="116">Y<tspan dy="4" font-size="12">0</tspan></text>
<text x="340" y="198">Y<tspan dy="4" font-size="12">1</tspan></text>
<text x="340" y="280">Y<tspan dy="4" font-size="12">2</tspan></text>
<text x="340" y="362">Y<tspan dy="4" font-size="12">3</tspan></text>
<text x="34" y="22" text-anchor="middle">D<tspan dy="4" font-size="12">0</tspan></text>
<text x="66" y="22" text-anchor="middle">S<tspan dy="4" font-size="12">0</tspan></text>
<text x="144" y="22" text-anchor="middle">S<tspan dy="4" font-size="12">1</tspan></text>
</svg>
</div>

### ตัวอย่างที่ 5  ดีมัลติเพลกซ์เซอร์ 1-to-4 มี $S_0S_1 = 10$ จงหา $Y_0Y_1Y_2Y_3$ เมื่อ $D_0 = 1$ และเมื่อ $D_0 = 0$

$\mathbf{Sol}^{n}$

$S_0S_1 = 10$ เลือกเอาต์พุต $Y_2$ ($2\cdot 1 + 0 = 2$) เอาต์พุตที่เหลือเป็น $0$

| $D_0$ | $Y_0$ | $Y_1$ | $Y_2$ | $Y_3$ |
|:-:|:-:|:-:|:-:|:-:|
| 1 | 0 | 0 | 1 | 0 |
| 0 | 0 | 0 | 0 | 0 |

$\mathbf{Ans}\quad D_0=1:\ Y_0Y_1Y_2Y_3 = 0010,\quad D_0=0:\ Y_0Y_1Y_2Y_3 = 0000$

## 5. สรุปสูตรและข้อควรระวังของบท

### 5.1 สูตรที่ต้องใช้

| เรื่อง | สูตร |
|:--|:--|
| NAND อย่างเดียว (SOP) | $F=T_1+\cdots+T_n = \overline{\overline{T_1}\cdot\overline{T_2}\cdots\overline{T_n}}$ |
| NOR อย่างเดียว (POS) | $F=S_1\cdots S_n = \overline{\overline{S_1}+\overline{S_2}+\cdots+\overline{S_n}}$ |
| Excess-3 | $\text{รหัส} = \text{เลขฐานสิบ} + 3$ (เขียนฐานสอง 4 บิต) |
| MUX 4-to-1 | $Y = D_0\overline{S_0}\,\overline{S_1} + D_1\overline{S_0}S_1 + D_2 S_0\overline{S_1} + D_3 S_0 S_1$ |
| DEMUX 1-to-4 | $Y_k = D_0\cdot(S_0S_1=k)$ เช่น $Y_2 = D_0 S_0\overline{S_1}$ |

### 5.2 ข้อควรระวังในการสอบ

- ช่อง $d$ ใช้เข้าลูปได้ตามสะดวกเพื่อให้ลูปใหญ่ขึ้น แต่ช่องที่เป็น $0$ (ในลูปของ $1$) หรือ $1$ (ในลูปของ $0$) ห้ามอยู่ในลูป
- ลูปของ $1$ อ่านเป็นผลคูณ ลูปของ $0$ อ่านเป็นผลบวก อย่าสลับกัน
- NAND อย่างเดียวใช้สมการ SOP (Minterm) NOR อย่างเดียวใช้สมการ POS (Maxterm) แล้วคอมพลีเมนต์ 2 ครั้ง
- ตัวแปรเดี่ยวที่ไม่มีเกตชั้นใน ต้องใช้ตัวคอมพลีเมนต์ต่อเข้าเกตชั้นนอก (เช่น $A$ ใน NAND อย่างเดียวใช้ $\overline{A}$)
- ของ MUX/DEMUX ในสไลด์ $S_0$ เป็นบิตสูง $S_1$ เป็นบิตต่ำ ($S_0S_1 = 10$ เลือก $D_2$ หรือ $Y_2$)
- ตรวจคำตอบด้วยการแทนค่าในตารางความจริงอย่างน้อยหนึ่งแถว
