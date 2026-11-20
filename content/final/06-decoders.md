# บทที่ 6 วงจรถอดรหัส (Decoder)

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

รหัส Excess-3 ได้จากการนำเลขฐานสิบ $n$ มาบวก $3$ แล้วเขียนเป็นเลขฐานสอง 4 บิต เช่น เลข $5$ เขียนเป็น $5+3=8=1000$ ตัวอย่างต่อไปนี้ออกแบบวงจรแปลงรหัส BCD-8421 ($A,B,C,D$) เป็น Excess-3 ($W,X,Y,Z$) โดย BCD ที่เป็น $1010$ ถึง $1111$ ไม่มีใช้ จึงเป็น $d$

| เลขฐานสิบ | $A\ B\ C\ D$ (BCD) | $W\ X\ Y\ Z$ (Excess-3) |
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
| $10$ ถึง $15$ | $1010$ ถึง $1111$ | $d\ d\ d\ d$ |

### ตัวอย่างที่ 2  จงออกแบบวงจรแปลงรหัส BCD-8421 เป็น Excess-3 โดยใช้เกต NAND อย่างเดียว (ใช้ Minterm)

$\mathbf{Sol}^{n}$

เขียนตารางความจริงของเลข $0$ ถึง $9$ (ตารางในหัวข้อ 2.2) แล้วทำ K-map ทีละเอาต์พุต ใส่ $1$ และ $d$ ($d$ คือ BCD $10$ ถึง $15$)

เอาต์พุต $W$

$W = \sum m(5,6,7,8,9) + d(10,11,12,13,14,15)$

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
<path d="M187.5,56.5 L268.5,56.5 M277.5,65.5 L277.5,254.5 M268.5,263.5 L187.5,263.5 M178.5,254.5 L178.5,65.5 M178.5,65.5 A9,9 0 0 1 187.5,56.5 M268.5,56.5 A9,9 0 0 1 277.5,65.5 M277.5,254.5 A9,9 0 0 1 268.5,263.5 M187.5,263.5 A9,9 0 0 1 178.5,254.5" stroke="#e8743b" stroke-width="2.6" fill="none"/>
<text x="177" y="67" font-size="14" fill="#e8743b" font-weight="bold">1</text>
<path d="M137,168 L211,168 M220,177 L220,251 M211,260 L137,260 M128,251 L128,177 M128,177 A9,9 0 0 1 137,168 M211,168 A9,9 0 0 1 220,177 M220,251 A9,9 0 0 1 211,260 M137,260 A9,9 0 0 1 128,251" stroke="#3b8be8" stroke-width="2.6" fill="none"/>
<text x="123" y="175" font-size="14" fill="#3b8be8" font-weight="bold">2</text>
<path d="M140.5,117.5 L207.5,117.5 M216.5,126.5 L216.5,193.5 M207.5,202.5 L140.5,202.5 M131.5,193.5 L131.5,126.5 M131.5,126.5 A9,9 0 0 1 140.5,117.5 M207.5,117.5 A9,9 0 0 1 216.5,126.5 M216.5,193.5 A9,9 0 0 1 207.5,202.5 M140.5,202.5 A9,9 0 0 1 131.5,193.5" stroke="#2fae5f" stroke-width="2.6" fill="none"/>
<text x="123" y="121" font-size="14" fill="#2fae5f" font-weight="bold">3</text>
</svg>
</div>

- ลูปสีส้ม (ช่อง $8,9,10,11,12,13,14,15$) : $A=1 \Rightarrow A$
- ลูปสีน้ำเงิน (ช่อง $6,7,14,15$) : $B=1,\ C=1 \Rightarrow BC$
- ลูปสีเขียว (ช่อง $5,7,13,15$) : $B=1,\ D=1 \Rightarrow BD$

$W = A+BC+BD$

เอาต์พุต $X$

$X = \sum m(1,2,3,4,9) + d(10,11,12,13,14,15)$

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
<path d="M66,164.5 L106.5,164.5 M115.5,173.5 L115.5,254.5 M106.5,263.5 L66,263.5 M106.5,164.5 A9,9 0 0 1 115.5,173.5 M115.5,254.5 A9,9 0 0 1 106.5,263.5" stroke="#e8743b" stroke-width="2.6" fill="none"/>
<text x="69" y="175" font-size="14" fill="#e8743b" font-weight="bold">1</text>
<path d="M241.5,164.5 L282,164.5 M282,263.5 L241.5,263.5 M232.5,254.5 L232.5,173.5 M232.5,173.5 A9,9 0 0 1 241.5,164.5 M241.5,263.5 A9,9 0 0 1 232.5,254.5" stroke="#e8743b" stroke-width="2.6" fill="none"/>
<path d="M66,114 L103,114 M112,123 L112,197 M103,206 L66,206 M103,114 A9,9 0 0 1 112,123 M112,197 A9,9 0 0 1 103,206" stroke="#3b8be8" stroke-width="2.6" fill="none"/>
<text x="69" y="121" font-size="14" fill="#3b8be8" font-weight="bold">2</text>
<path d="M245,114 L282,114 M282,206 L245,206 M236,197 L236,123 M236,123 A9,9 0 0 1 245,114 M245,206 A9,9 0 0 1 236,197" stroke="#3b8be8" stroke-width="2.6" fill="none"/>
<path d="M140.5,63.5 L207.5,63.5 M216.5,72.5 L216.5,85.5 M207.5,94.5 L140.5,94.5 M131.5,85.5 L131.5,72.5 M131.5,72.5 A9,9 0 0 1 140.5,63.5 M207.5,63.5 A9,9 0 0 1 216.5,72.5 M216.5,85.5 A9,9 0 0 1 207.5,94.5 M140.5,94.5 A9,9 0 0 1 131.5,85.5" stroke="#2fae5f" stroke-width="2.6" fill="none"/>
<text x="123" y="67" font-size="14" fill="#2fae5f" font-weight="bold">3</text>
</svg>
</div>

- ลูปสีส้ม (ช่อง $2,3,10,11$) : $B=0,\ C=1 \Rightarrow \overline{B}C$
- ลูปสีน้ำเงิน (ช่อง $1,3,9,11$) : $B=0,\ D=1 \Rightarrow \overline{B}D$
- ลูปสีเขียว (ช่อง $4,12$) : $B=1,\ C=0,\ D=0 \Rightarrow B\overline{C}\,\overline{D}$

$X = \overline{B}C+\overline{B}D+B\overline{C}\,\overline{D}$

เอาต์พุต $Y$

$Y = \sum m(0,3,4,7,8) + d(10,11,12,13,14,15)$

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
<text x="255" y="195" text-anchor="middle" font-size="22">d</text>
<text x="115" y="227" text-anchor="end" font-size="11" fill-opacity="0.65">2</text>
<text x="169" y="227" text-anchor="end" font-size="11" fill-opacity="0.65">6</text>
<text x="223" y="227" text-anchor="end" font-size="11" fill-opacity="0.65">14</text>
<text x="201" y="249" text-anchor="middle" font-size="22">d</text>
<text x="277" y="227" text-anchor="end" font-size="11" fill-opacity="0.65">10</text>
<text x="255" y="249" text-anchor="middle" font-size="22">d</text>
<path d="M79.5,56.5 L268.5,56.5 M277.5,65.5 L277.5,92.5 M268.5,101.5 L79.5,101.5 M70.5,92.5 L70.5,65.5 M70.5,65.5 A9,9 0 0 1 79.5,56.5 M268.5,56.5 A9,9 0 0 1 277.5,65.5 M277.5,92.5 A9,9 0 0 1 268.5,101.5 M79.5,101.5 A9,9 0 0 1 70.5,92.5" stroke="#e8743b" stroke-width="2.6" fill="none"/>
<text x="69" y="67" font-size="14" fill="#e8743b" font-weight="bold">1</text>
<path d="M83,168 L265,168 M274,177 L274,197 M265,206 L83,206 M74,197 L74,177 M74,177 A9,9 0 0 1 83,168 M265,168 A9,9 0 0 1 274,177 M274,197 A9,9 0 0 1 265,206 M83,206 A9,9 0 0 1 74,197" stroke="#3b8be8" stroke-width="2.6" fill="none"/>
<text x="69" y="175" font-size="14" fill="#3b8be8" font-weight="bold">2</text>
</svg>
</div>

- ลูปสีส้ม (ช่อง $0,4,8,12$) : $C=0,\ D=0 \Rightarrow \overline{C}\,\overline{D}$
- ลูปสีน้ำเงิน (ช่อง $3,7,11,15$) : $C=1,\ D=1 \Rightarrow CD$

$Y = \overline{C}\,\overline{D}+CD$

เอาต์พุต $Z$

$Z = \sum m(0,2,4,6,8) + d(10,11,12,13,14,15)$

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
<path d="M277.5,52 L277.5,92.5 M268.5,101.5 L79.5,101.5 M70.5,92.5 L70.5,52 M277.5,92.5 A9,9 0 0 1 268.5,101.5 M79.5,101.5 A9,9 0 0 1 70.5,92.5" stroke="#e8743b" stroke-width="2.6" fill="none"/>
<text x="69" y="67" font-size="14" fill="#e8743b" font-weight="bold">1</text>
<path d="M79.5,218.5 L268.5,218.5 M277.5,227.5 L277.5,268 M70.5,268 L70.5,227.5 M70.5,227.5 A9,9 0 0 1 79.5,218.5 M268.5,218.5 A9,9 0 0 1 277.5,227.5" stroke="#e8743b" stroke-width="2.6" fill="none"/>
</svg>
</div>

- ลูปสีส้ม (ช่อง $0,2,4,6,8,10,12,14$) : $D=0 \Rightarrow \overline{D}$

$Z = \overline{D}$

นำสมการมาแปลงให้ใช้ NAND อย่างเดียว ด้วยการคอมพลีเมนต์ 2 ครั้ง แล้วใช้ De Morgan

$$\begin{aligned}
W &= A+BC+BD \\
&= \overline{\overline{A+BC+BD}} && \text{(คอมพลีเมนต์ 2 ครั้ง)} \\
&= \overline{\overline{A}\cdot \overline{BC}\cdot \overline{BD}} && \text{(De Morgan)}
\end{aligned}$$

$$\begin{aligned}
X &= \overline{B}C+\overline{B}D+B\overline{C}\,\overline{D} \\
&= \overline{\overline{\overline{B}C+\overline{B}D+B\overline{C}\,\overline{D}}} && \text{(คอมพลีเมนต์ 2 ครั้ง)} \\
&= \overline{\overline{\overline{B}C}\cdot \overline{\overline{B}D}\cdot \overline{B\overline{C}\,\overline{D}}} && \text{(De Morgan)}
\end{aligned}$$

$$\begin{aligned}
Y &= \overline{C}\,\overline{D}+CD \\
&= \overline{\overline{\overline{C}\,\overline{D}+CD}} && \text{(คอมพลีเมนต์ 2 ครั้ง)} \\
&= \overline{\overline{\overline{C}\,\overline{D}}\cdot \overline{CD}} && \text{(De Morgan)}
\end{aligned}$$

$$Z = \overline{D}$$

$Z=\overline{D}$ ใช้ตัวคอมพลีเมนต์ของ $D$ ต่อออกเอาต์พุตได้เลย ไม่ต้องใช้เกต

$\mathbf{Ans}\quad W = \overline{\overline{A}\cdot \overline{BC}\cdot \overline{BD}},\ X = \overline{\overline{\overline{B}C}\cdot \overline{\overline{B}D}\cdot \overline{B\overline{C}\,\overline{D}}},\ Y = \overline{\overline{\overline{C}\,\overline{D}}\cdot \overline{CD}},\ Z = \overline{D}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="640" height="572" viewBox="0 0 640 572" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<line x1="82" y1="52" x2="82" y2="89"/>
<line x1="34" y1="28" x2="34" y2="52"/>
<line x1="160" y1="52" x2="160" y2="292"/>
<line x1="112" y1="28" x2="112" y2="344"/>
<line x1="238" y1="52" x2="238" y2="426"/>
<line x1="190" y1="28" x2="190" y2="478"/>
<line x1="316" y1="52" x2="316" y2="539"/>
<line x1="268" y1="28" x2="268" y2="492"/>
<line x1="82" y1="89" x2="484" y2="89"/>
<line x1="484" y1="89" x2="484" y2="127"/>
<line x1="484" y1="127" x2="494" y2="127"/>
<line x1="112" y1="120" x2="376" y2="120"/>
<line x1="190" y1="134" x2="376" y2="134"/>
<line x1="438" y1="127" x2="464" y2="127"/>
<line x1="464" y1="127" x2="464" y2="141"/>
<line x1="464" y1="141" x2="494" y2="141"/>
<line x1="112" y1="172" x2="376" y2="172"/>
<line x1="268" y1="186" x2="376" y2="186"/>
<line x1="438" y1="179" x2="474" y2="179"/>
<line x1="474" y1="179" x2="474" y2="155"/>
<line x1="474" y1="155" x2="494" y2="155"/>
<line x1="556" y1="141" x2="586" y2="141"/>
<line x1="160" y1="240" x2="376" y2="240"/>
<line x1="190" y1="254" x2="376" y2="254"/>
<line x1="438" y1="247" x2="484" y2="247"/>
<line x1="484" y1="247" x2="484" y2="292"/>
<line x1="484" y1="292" x2="494" y2="292"/>
<line x1="160" y1="292" x2="376" y2="292"/>
<line x1="268" y1="306" x2="376" y2="306"/>
<line x1="438" y1="299" x2="464" y2="299"/>
<line x1="464" y1="299" x2="464" y2="306"/>
<line x1="464" y1="306" x2="494" y2="306"/>
<line x1="112" y1="344" x2="376" y2="344"/>
<line x1="238" y1="358" x2="376" y2="358"/>
<line x1="316" y1="372" x2="376" y2="372"/>
<line x1="438" y1="358" x2="474" y2="358"/>
<line x1="474" y1="358" x2="474" y2="320"/>
<line x1="474" y1="320" x2="494" y2="320"/>
<line x1="556" y1="306" x2="586" y2="306"/>
<line x1="238" y1="426" x2="376" y2="426"/>
<line x1="316" y1="440" x2="376" y2="440"/>
<line x1="438" y1="433" x2="474" y2="433"/>
<line x1="474" y1="433" x2="474" y2="452"/>
<line x1="474" y1="452" x2="484" y2="452"/>
<line x1="190" y1="478" x2="376" y2="478"/>
<line x1="268" y1="492" x2="376" y2="492"/>
<line x1="438" y1="485" x2="464" y2="485"/>
<line x1="464" y1="485" x2="464" y2="466"/>
<line x1="464" y1="466" x2="484" y2="466"/>
<line x1="546" y1="459" x2="576" y2="459"/>
<line x1="316" y1="539" x2="346" y2="539"/>
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
<path d="M376,226 H402 A26,21 0 0 1 402,268 H376 Z"/>
<circle cx="433" cy="247" r="5"/>
<path d="M376,278 H402 A26,21 0 0 1 402,320 H376 Z"/>
<circle cx="433" cy="299" r="5"/>
<path d="M376,330 H402 A26,28 0 0 1 402,386 H376 Z"/>
<circle cx="433" cy="358" r="5"/>
<path d="M494,278 H520 A26,28 0 0 1 520,334 H494 Z"/>
<circle cx="551" cy="306" r="5"/>
<path d="M376,412 H402 A26,21 0 0 1 402,454 H376 Z"/>
<circle cx="433" cy="433" r="5"/>
<path d="M376,464 H402 A26,21 0 0 1 402,506 H376 Z"/>
<circle cx="433" cy="485" r="5"/>
<path d="M484,438 H510 A26,21 0 0 1 510,480 H484 Z"/>
<circle cx="541" cy="459" r="5"/>
<polygon points="41,40 41,64 63,52"/>
<circle cx="68" cy="52" r="5"/>
<polygon points="119,40 119,64 141,52"/>
<circle cx="146" cy="52" r="5"/>
<polygon points="197,40 197,64 219,52"/>
<circle cx="224" cy="52" r="5"/>
<polygon points="275,40 275,64 297,52"/>
<circle cx="302" cy="52" r="5"/>
<circle cx="82" cy="89" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="120" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="134" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="172" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="186" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="160" cy="240" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="254" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="160" cy="292" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="306" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="344" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="358" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316" cy="372" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="426" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316" cy="440" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="478" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="492" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316" cy="539" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="52" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="592" y="147">W</text>
<text x="592" y="312">X</text>
<text x="582" y="465">Y</text>
<text x="352" y="545">Z</text>
<text x="34" y="22" text-anchor="middle">A</text>
<text x="112" y="22" text-anchor="middle">B</text>
<text x="190" y="22" text-anchor="middle">C</text>
<text x="268" y="22" text-anchor="middle">D</text>
</svg>
</div>

### ตัวอย่างที่ 3  จงออกแบบวงจรแปลงรหัส BCD-8421 เป็น Excess-3 โดยใช้เกต NOR อย่างเดียว (ใช้ Maxterm)

$\mathbf{Sol}^{n}$

ใช้ตารางความจริงเดิม แต่ทำ K-map โดยใส่ $0$ และ $d$ แล้วอ่านลูปของ $0$ เป็นผลบวก

เอาต์พุต $W$

$W = \prod M(0,1,2,3,4) \cdot d(10,11,12,13,14,15)$

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
<text x="93" y="195" text-anchor="middle" font-size="22">0</text>
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
<path d="M79.5,56.5 L106.5,56.5 M115.5,65.5 L115.5,254.5 M106.5,263.5 L79.5,263.5 M70.5,254.5 L70.5,65.5 M70.5,65.5 A9,9 0 0 1 79.5,56.5 M106.5,56.5 A9,9 0 0 1 115.5,65.5 M115.5,254.5 A9,9 0 0 1 106.5,263.5 M79.5,263.5 A9,9 0 0 1 70.5,254.5" stroke="#e8743b" stroke-width="2.6" fill="none"/>
<text x="69" y="67" font-size="14" fill="#e8743b" font-weight="bold">1</text>
<path d="M83,60 L157,60 M166,69 L166,89 M157,98 L83,98 M74,89 L74,69 M74,69 A9,9 0 0 1 83,60 M157,60 A9,9 0 0 1 166,69 M166,89 A9,9 0 0 1 157,98 M83,98 A9,9 0 0 1 74,89" stroke="#3b8be8" stroke-width="2.6" fill="none"/>
<text x="79" y="67" font-size="14" fill="#3b8be8" font-weight="bold">2</text>
</svg>
</div>

- ลูปสีส้ม (ช่อง $0,1,2,3$) : $A=0,\ B=0 \Rightarrow (A+B)$
- ลูปสีน้ำเงิน (ช่อง $0,4$) : $A=0,\ C=0,\ D=0 \Rightarrow (A+C+D)$

$W = (A+B)(A+C+D)$

เอาต์พุต $X$

$X = \prod M(0,5,6,7,8) \cdot d(10,11,12,13,14,15)$

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
<text x="255" y="87" text-anchor="middle" font-size="22">0</text>
<text x="115" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">1</text>
<text x="169" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">5</text>
<text x="147" y="141" text-anchor="middle" font-size="22">0</text>
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
<text x="147" y="249" text-anchor="middle" font-size="22">0</text>
<text x="223" y="227" text-anchor="end" font-size="11" fill-opacity="0.65">14</text>
<text x="201" y="249" text-anchor="middle" font-size="22">d</text>
<text x="277" y="227" text-anchor="end" font-size="11" fill-opacity="0.65">10</text>
<text x="255" y="249" text-anchor="middle" font-size="22">d</text>
<path d="M133.5,164.5 L214.5,164.5 M223.5,173.5 L223.5,254.5 M214.5,263.5 L133.5,263.5 M124.5,254.5 L124.5,173.5 M124.5,173.5 A9,9 0 0 1 133.5,164.5 M214.5,164.5 A9,9 0 0 1 223.5,173.5 M223.5,254.5 A9,9 0 0 1 214.5,263.5 M133.5,263.5 A9,9 0 0 1 124.5,254.5" stroke="#e8743b" stroke-width="2.6" fill="none"/>
<text x="123" y="175" font-size="14" fill="#e8743b" font-weight="bold">1</text>
<path d="M137,114 L211,114 M220,123 L220,197 M211,206 L137,206 M128,197 L128,123 M128,123 A9,9 0 0 1 137,114 M211,114 A9,9 0 0 1 220,123 M220,197 A9,9 0 0 1 211,206 M137,206 A9,9 0 0 1 128,197" stroke="#3b8be8" stroke-width="2.6" fill="none"/>
<text x="123" y="121" font-size="14" fill="#3b8be8" font-weight="bold">2</text>
<path d="M66,63.5 L99.5,63.5 M108.5,72.5 L108.5,85.5 M99.5,94.5 L66,94.5 M99.5,63.5 A9,9 0 0 1 108.5,72.5 M108.5,85.5 A9,9 0 0 1 99.5,94.5" stroke="#2fae5f" stroke-width="2.6" fill="none"/>
<text x="69" y="67" font-size="14" fill="#2fae5f" font-weight="bold">3</text>
<path d="M248.5,63.5 L282,63.5 M282,94.5 L248.5,94.5 M239.5,85.5 L239.5,72.5 M239.5,72.5 A9,9 0 0 1 248.5,63.5 M248.5,94.5 A9,9 0 0 1 239.5,85.5" stroke="#2fae5f" stroke-width="2.6" fill="none"/>
</svg>
</div>

- ลูปสีส้ม (ช่อง $6,7,14,15$) : $B=1,\ C=1 \Rightarrow (\overline{B}+\overline{C})$
- ลูปสีน้ำเงิน (ช่อง $5,7,13,15$) : $B=1,\ D=1 \Rightarrow (\overline{B}+\overline{D})$
- ลูปสีเขียว (ช่อง $0,8$) : $B=0,\ C=0,\ D=0 \Rightarrow (B+C+D)$

$X = (\overline{B}+\overline{C})(\overline{B}+\overline{D})(B+C+D)$

เอาต์พุต $Y$

$Y = \prod M(1,2,5,6,9) \cdot d(10,11,12,13,14,15)$

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
<text x="147" y="141" text-anchor="middle" font-size="22">0</text>
<text x="223" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">13</text>
<text x="201" y="141" text-anchor="middle" font-size="22">d</text>
<text x="277" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">9</text>
<text x="255" y="141" text-anchor="middle" font-size="22">0</text>
<text x="115" y="173" text-anchor="end" font-size="11" fill-opacity="0.65">3</text>
<text x="169" y="173" text-anchor="end" font-size="11" fill-opacity="0.65">7</text>
<text x="223" y="173" text-anchor="end" font-size="11" fill-opacity="0.65">15</text>
<text x="201" y="195" text-anchor="middle" font-size="22">d</text>
<text x="277" y="173" text-anchor="end" font-size="11" fill-opacity="0.65">11</text>
<text x="255" y="195" text-anchor="middle" font-size="22">d</text>
<text x="115" y="227" text-anchor="end" font-size="11" fill-opacity="0.65">2</text>
<text x="93" y="249" text-anchor="middle" font-size="22">0</text>
<text x="169" y="227" text-anchor="end" font-size="11" fill-opacity="0.65">6</text>
<text x="147" y="249" text-anchor="middle" font-size="22">0</text>
<text x="223" y="227" text-anchor="end" font-size="11" fill-opacity="0.65">14</text>
<text x="201" y="249" text-anchor="middle" font-size="22">d</text>
<text x="277" y="227" text-anchor="end" font-size="11" fill-opacity="0.65">10</text>
<text x="255" y="249" text-anchor="middle" font-size="22">d</text>
<path d="M79.5,110.5 L268.5,110.5 M277.5,119.5 L277.5,146.5 M268.5,155.5 L79.5,155.5 M70.5,146.5 L70.5,119.5 M70.5,119.5 A9,9 0 0 1 79.5,110.5 M268.5,110.5 A9,9 0 0 1 277.5,119.5 M277.5,146.5 A9,9 0 0 1 268.5,155.5 M79.5,155.5 A9,9 0 0 1 70.5,146.5" stroke="#e8743b" stroke-width="2.6" fill="none"/>
<text x="69" y="121" font-size="14" fill="#e8743b" font-weight="bold">1</text>
<path d="M83,222 L265,222 M274,231 L274,251 M265,260 L83,260 M74,251 L74,231 M74,231 A9,9 0 0 1 83,222 M265,222 A9,9 0 0 1 274,231 M274,251 A9,9 0 0 1 265,260 M83,260 A9,9 0 0 1 74,251" stroke="#3b8be8" stroke-width="2.6" fill="none"/>
<text x="69" y="229" font-size="14" fill="#3b8be8" font-weight="bold">2</text>
</svg>
</div>

- ลูปสีส้ม (ช่อง $1,5,9,13$) : $C=0,\ D=1 \Rightarrow (C+\overline{D})$
- ลูปสีน้ำเงิน (ช่อง $2,6,10,14$) : $C=1,\ D=0 \Rightarrow (\overline{C}+D)$

$Y = (C+\overline{D})(\overline{C}+D)$

เอาต์พุต $Z$

$Z = \prod M(1,3,5,7,9) \cdot d(10,11,12,13,14,15)$

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
</svg>
</div>

- ลูปสีส้ม (ช่อง $1,3,5,7,9,11,13,15$) : $D=1 \Rightarrow \overline{D}$

$Z = \overline{D}$

นำสมการมาแปลงให้ใช้ NOR อย่างเดียว ด้วยการคอมพลีเมนต์ 2 ครั้ง แล้วใช้ De Morgan

$$\begin{aligned}
W &= (A+B)(A+C+D) \\
&= \overline{\overline{(A+B)(A+C+D)}} && \text{(คอมพลีเมนต์ 2 ครั้ง)} \\
&= \overline{\overline{A+B}+\overline{A+C+D}} && \text{(De Morgan)}
\end{aligned}$$

$$\begin{aligned}
X &= (\overline{B}+\overline{C})(\overline{B}+\overline{D})(B+C+D) \\
&= \overline{\overline{(\overline{B}+\overline{C})(\overline{B}+\overline{D})(B+C+D)}} && \text{(คอมพลีเมนต์ 2 ครั้ง)} \\
&= \overline{\overline{\overline{B}+\overline{C}}+\overline{\overline{B}+\overline{D}}+\overline{B+C+D}} && \text{(De Morgan)}
\end{aligned}$$

$$\begin{aligned}
Y &= (C+\overline{D})(\overline{C}+D) \\
&= \overline{\overline{(C+\overline{D})(\overline{C}+D)}} && \text{(คอมพลีเมนต์ 2 ครั้ง)} \\
&= \overline{\overline{C+\overline{D}}+\overline{\overline{C}+D}} && \text{(De Morgan)}
\end{aligned}$$

$$Z = \overline{D}$$

$Z=\overline{D}$ ใช้ตัวคอมพลีเมนต์ของ $D$ ต่อออกเอาต์พุตได้เลย ไม่ต้องใช้เกต

$\mathbf{Ans}\quad W = \overline{\overline{A+B}+\overline{A+C+D}},\ X = \overline{\overline{\overline{B}+\overline{C}}+\overline{\overline{B}+\overline{D}}+\overline{B+C+D}},\ Y = \overline{\overline{C+\overline{D}}+\overline{\overline{C}+D}},\ Z = \overline{D}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="610" height="562" viewBox="0 0 610 562" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<line x1="34" y1="28" x2="34" y2="148"/>
<line x1="114" y1="52" x2="114" y2="282"/>
<line x1="66" y1="28" x2="66" y2="334"/>
<line x1="192" y1="52" x2="192" y2="468"/>
<line x1="144" y1="28" x2="144" y2="416"/>
<line x1="270" y1="52" x2="270" y2="529"/>
<line x1="222" y1="28" x2="222" y2="482"/>
<line x1="34" y1="96" x2="336.2" y2="96"/>
<line x1="66" y1="110" x2="336.2" y2="110"/>
<line x1="400" y1="103" x2="436" y2="103"/>
<line x1="436" y1="103" x2="436" y2="129"/>
<line x1="436" y1="129" x2="452.2" y2="129"/>
<line x1="34" y1="148" x2="335.2" y2="148"/>
<line x1="144" y1="162" x2="337" y2="162"/>
<line x1="222" y1="176" x2="335.2" y2="176"/>
<line x1="400" y1="162" x2="426" y2="162"/>
<line x1="426" y1="162" x2="426" y2="143"/>
<line x1="426" y1="143" x2="452.2" y2="143"/>
<line x1="516" y1="136" x2="546" y2="136"/>
<line x1="114" y1="230" x2="336.2" y2="230"/>
<line x1="192" y1="244" x2="336.2" y2="244"/>
<line x1="400" y1="237" x2="446" y2="237"/>
<line x1="446" y1="237" x2="446" y2="282"/>
<line x1="446" y1="282" x2="461.2" y2="282"/>
<line x1="114" y1="282" x2="336.2" y2="282"/>
<line x1="270" y1="296" x2="336.2" y2="296"/>
<line x1="400" y1="289" x2="426" y2="289"/>
<line x1="426" y1="289" x2="426" y2="296"/>
<line x1="426" y1="296" x2="463" y2="296"/>
<line x1="66" y1="334" x2="335.2" y2="334"/>
<line x1="144" y1="348" x2="337" y2="348"/>
<line x1="222" y1="362" x2="335.2" y2="362"/>
<line x1="400" y1="348" x2="436" y2="348"/>
<line x1="436" y1="348" x2="436" y2="310"/>
<line x1="436" y1="310" x2="461.2" y2="310"/>
<line x1="526" y1="296" x2="556" y2="296"/>
<line x1="144" y1="416" x2="336.2" y2="416"/>
<line x1="270" y1="430" x2="336.2" y2="430"/>
<line x1="400" y1="423" x2="436" y2="423"/>
<line x1="436" y1="423" x2="436" y2="442"/>
<line x1="436" y1="442" x2="452.2" y2="442"/>
<line x1="192" y1="468" x2="336.2" y2="468"/>
<line x1="222" y1="482" x2="336.2" y2="482"/>
<line x1="400" y1="475" x2="426" y2="475"/>
<line x1="426" y1="475" x2="426" y2="456"/>
<line x1="426" y1="456" x2="452.2" y2="456"/>
<line x1="516" y1="449" x2="546" y2="449"/>
<line x1="270" y1="529" x2="300" y2="529"/>
<line x1="66" y1="52" x2="73" y2="52"/>
<line x1="105" y1="52" x2="114" y2="52"/>
<line x1="144" y1="52" x2="151" y2="52"/>
<line x1="183" y1="52" x2="192" y2="52"/>
<line x1="222" y1="52" x2="229" y2="52"/>
<line x1="261" y1="52" x2="270" y2="52"/>
<path d="M330,82 C352,82 378,92.5 390,103 C378,113.5 352,124 330,124 Q344,103 330,82 Z"/>
<circle cx="395" cy="103" r="5"/>
<path d="M330,134 C352,134 378,148 390,162 C378,176 352,190 330,190 Q344,162 330,134 Z"/>
<circle cx="395" cy="162" r="5"/>
<path d="M446,115 C468,115 494,125.5 506,136 C494,146.5 468,157 446,157 Q460,136 446,115 Z"/>
<circle cx="511" cy="136" r="5"/>
<path d="M330,216 C352,216 378,226.5 390,237 C378,247.5 352,258 330,258 Q344,237 330,216 Z"/>
<circle cx="395" cy="237" r="5"/>
<path d="M330,268 C352,268 378,278.5 390,289 C378,299.5 352,310 330,310 Q344,289 330,268 Z"/>
<circle cx="395" cy="289" r="5"/>
<path d="M330,320 C352,320 378,334 390,348 C378,362 352,376 330,376 Q344,348 330,320 Z"/>
<circle cx="395" cy="348" r="5"/>
<path d="M456,268 C478,268 504,282 516,296 C504,310 478,324 456,324 Q470,296 456,268 Z"/>
<circle cx="521" cy="296" r="5"/>
<path d="M330,402 C352,402 378,412.5 390,423 C378,433.5 352,444 330,444 Q344,423 330,402 Z"/>
<circle cx="395" cy="423" r="5"/>
<path d="M330,454 C352,454 378,464.5 390,475 C378,485.5 352,496 330,496 Q344,475 330,454 Z"/>
<circle cx="395" cy="475" r="5"/>
<path d="M446,428 C468,428 494,438.5 506,449 C494,459.5 468,470 446,470 Q460,449 446,428 Z"/>
<circle cx="511" cy="449" r="5"/>
<polygon points="73,40 73,64 95,52"/>
<circle cx="100" cy="52" r="5"/>
<polygon points="151,40 151,64 173,52"/>
<circle cx="178" cy="52" r="5"/>
<polygon points="229,40 229,64 251,52"/>
<circle cx="256" cy="52" r="5"/>
<circle cx="34" cy="96" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="110" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="148" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="162" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="222" cy="176" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="114" cy="230" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="192" cy="244" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="114" cy="282" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="296" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="334" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="348" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="222" cy="362" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="416" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="430" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="192" cy="468" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="222" cy="482" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="529" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="222" cy="52" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="552" y="142">W</text>
<text x="562" y="302">X</text>
<text x="552" y="455">Y</text>
<text x="306" y="535">Z</text>
<text x="34" y="22" text-anchor="middle">A</text>
<text x="66" y="22" text-anchor="middle">B</text>
<text x="144" y="22" text-anchor="middle">C</text>
<text x="222" y="22" text-anchor="middle">D</text>
</svg>
</div>

## 3. วงจรถอดรหัส BCD-8421 เป็น LED 7 ส่วน

### 3.1 ตารางความจริง

อินพุตเป็นรหัส BCD-8421 ของเลข $0$ ถึง $9$ รหัส $1010$ ถึง $1111$ ไม่มีใช้ จึงเป็น $d$ ในทุกเอาต์พุต

| เลข | $A\ B\ C\ D$ | $a$ | $b$ | $c$ | $d$ | $e$ | $f$ | $g$ |
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| 0 | 0 0 0 0 | 1 | 1 | 1 | 1 | 1 | 1 | 0 |
| 1 | 0 0 0 1 | 0 | 1 | 1 | 0 | 0 | 0 | 0 |
| 2 | 0 0 1 0 | 1 | 1 | 0 | 1 | 1 | 0 | 1 |
| 3 | 0 0 1 1 | 1 | 1 | 1 | 1 | 0 | 0 | 1 |
| 4 | 0 1 0 0 | 0 | 1 | 1 | 0 | 0 | 1 | 1 |
| 5 | 0 1 0 1 | 1 | 0 | 1 | 1 | 0 | 1 | 1 |
| 6 | 0 1 1 0 | 1 | 0 | 1 | 1 | 1 | 1 | 1 |
| 7 | 0 1 1 1 | 1 | 1 | 1 | 0 | 0 | 0 | 0 |
| 8 | 1 0 0 0 | 1 | 1 | 1 | 1 | 1 | 1 | 1 |
| 9 | 1 0 0 1 | 1 | 1 | 1 | 1 | 0 | 1 | 1 |
| $d$ | 1 0 1 0 | d | d | d | d | d | d | d |
| $d$ | 1 0 1 1 | d | d | d | d | d | d | d |
| $d$ | 1 1 0 0 | d | d | d | d | d | d | d |
| $d$ | 1 1 0 1 | d | d | d | d | d | d | d |
| $d$ | 1 1 1 0 | d | d | d | d | d | d | d |
| $d$ | 1 1 1 1 | d | d | d | d | d | d | d |

### ตัวอย่างที่ 4  จงหาสมการของ segment $a$ ของวงจรถอดรหัส BCD-8421 เป็น LED 7 ส่วน (ใช้ Minterm)

$\mathbf{Sol}^{n}$

จากตารางความจริง ช่องที่ $a=1$ คือเลข $0,2,3,5,6,7,8,9$ และช่อง $10$ ถึง $15$ เป็น $d$

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

### ตัวอย่างที่ 5  จงหาสมการของ segment $b$ ของวงจรถอดรหัส BCD-8421 เป็น LED 7 ส่วน (ใช้ Minterm)

$\mathbf{Sol}^{n}$

จากตารางความจริง ช่องที่ $b=1$ คือเลข $0,1,2,3,4,7,8,9$ และช่อง $10$ ถึง $15$ เป็น $d$

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

### ตัวอย่างที่ 6  จงหาสมการของ segment $c$ ของวงจรถอดรหัส BCD-8421 เป็น LED 7 ส่วน (ใช้ Minterm)

$\mathbf{Sol}^{n}$

จากตารางความจริง ช่องที่ $c=1$ คือเลข $0,1,3,4,5,6,7,8,9$ และช่อง $10$ ถึง $15$ เป็น $d$

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

### ตัวอย่างที่ 7  จงหาสมการของ segment $d$ ของวงจรถอดรหัส BCD-8421 เป็น LED 7 ส่วน (ใช้ Minterm)

$\mathbf{Sol}^{n}$

จากตารางความจริง ช่องที่ $d=1$ คือเลข $0,2,3,5,6,8,9$ และช่อง $10$ ถึง $15$ เป็น $d$

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

### ตัวอย่างที่ 8  จงหาสมการของ segment $e$ ของวงจรถอดรหัส BCD-8421 เป็น LED 7 ส่วน (ใช้ Minterm)

$\mathbf{Sol}^{n}$

จากตารางความจริง ช่องที่ $e=1$ คือเลข $0,2,6,8$ และช่อง $10$ ถึง $15$ เป็น $d$

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

### ตัวอย่างที่ 9  จงหาสมการของ segment $f$ ของวงจรถอดรหัส BCD-8421 เป็น LED 7 ส่วน (ใช้ Minterm)

$\mathbf{Sol}^{n}$

จากตารางความจริง ช่องที่ $f=1$ คือเลข $0,4,5,6,8,9$ และช่อง $10$ ถึง $15$ เป็น $d$

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

### ตัวอย่างที่ 10  จงหาสมการของ segment $g$ ของวงจรถอดรหัส BCD-8421 เป็น LED 7 ส่วน (ใช้ Minterm)

$\mathbf{Sol}^{n}$

จากตารางความจริง ช่องที่ $g=1$ คือเลข $2,3,4,5,6,8,9$ และช่อง $10$ ถึง $15$ เป็น $d$

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

### ตัวอย่างที่ 11  จงเขียนวงจรถอดรหัส BCD-8421 เป็น LED 7 ส่วน ด้วยเกต AND/OR จากสมการ $a$ ถึง $g$ ที่ได้

$\mathbf{Sol}^{n}$

ต้องมีทั้งตัวปกติและตัวคอมพลีเมนต์ของอินพุต จึงใช้เกต NOT ต่อจากอินพุต แต่ละพจน์ผลคูณใช้ AND เกต แล้วนำทุกพจน์เข้า OR เกต พจน์ที่มีตัวแปรตัวเดียวต่อสายเข้า OR เกตได้เลย ส่วน $c=B+\overline{C}+D$ ใช้ OR เกตตัวเดียว

$\mathbf{Ans}\quad \begin{aligned}a &= A+C+BD+\overline{B}\,\overline{D} \\ b &= \overline{B}+\overline{C}\,\overline{D}+CD \\ c &= B+\overline{C}+D \\ d &= A+\overline{B}\,\overline{D}+\overline{B}C+C\overline{D}+B\overline{C}D \\ e &= \overline{B}\,\overline{D}+C\overline{D} \\ f &= A+B\overline{C}+B\overline{D}+\overline{C}\,\overline{D} \\ g &= B\overline{C}+A\overline{C}+\overline{B}C+C\overline{D}\end{aligned}$

**segment $a$ ถึง $d$**

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="602" height="744" viewBox="0 0 602 744" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<line x1="34" y1="28" x2="34" y2="489"/>
<line x1="114" y1="52" x2="114" y2="572"/>
<line x1="66" y1="28" x2="66" y2="676"/>
<line x1="192" y1="52" x2="192" y2="690"/>
<line x1="144" y1="28" x2="144" y2="624"/>
<line x1="270" y1="52" x2="270" y2="638"/>
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
<circle cx="66" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="222" cy="52" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="544" y="159">a</text>
<text x="534" y="315">b</text>
<text x="534" y="431">c</text>
<text x="554" y="606">d</text>
<text x="34" y="22" text-anchor="middle">A</text>
<text x="66" y="22" text-anchor="middle">B</text>
<text x="144" y="22" text-anchor="middle">C</text>
<text x="222" y="22" text-anchor="middle">D</text>
</svg>
</div>

**segment $e$ ถึง $g$**

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="592" height="622" viewBox="0 0 592 622" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<line x1="34" y1="28" x2="34" y2="464"/>
<line x1="114" y1="52" x2="114" y2="516"/>
<line x1="66" y1="28" x2="66" y2="412"/>
<line x1="192" y1="52" x2="192" y2="478"/>
<line x1="144" y1="28" x2="144" y2="568"/>
<line x1="270" y1="52" x2="270" y2="582"/>
<line x1="222" y1="28" x2="222" y2="52"/>
<line x1="114" y1="96" x2="330" y2="96"/>
<line x1="270" y1="110" x2="330" y2="110"/>
<line x1="382" y1="103" x2="418" y2="103"/>
<line x1="418" y1="103" x2="418" y2="122"/>
<line x1="418" y1="122" x2="434.2" y2="122"/>
<line x1="144" y1="148" x2="330" y2="148"/>
<line x1="270" y1="162" x2="330" y2="162"/>
<line x1="382" y1="155" x2="408" y2="155"/>
<line x1="408" y1="155" x2="408" y2="136"/>
<line x1="408" y1="136" x2="434.2" y2="136"/>
<line x1="488" y1="129" x2="518" y2="129"/>
<line x1="34" y1="209" x2="438" y2="209"/>
<line x1="438" y1="209" x2="438" y2="266"/>
<line x1="438" y1="266" x2="452.5" y2="266"/>
<line x1="66" y1="240" x2="330" y2="240"/>
<line x1="192" y1="254" x2="330" y2="254"/>
<line x1="382" y1="247" x2="418" y2="247"/>
<line x1="418" y1="247" x2="418" y2="280"/>
<line x1="418" y1="280" x2="454.7" y2="280"/>
<line x1="66" y1="292" x2="330" y2="292"/>
<line x1="270" y1="306" x2="330" y2="306"/>
<line x1="382" y1="299" x2="408" y2="299"/>
<line x1="408" y1="299" x2="408" y2="294"/>
<line x1="408" y1="294" x2="454.7" y2="294"/>
<line x1="192" y1="344" x2="330" y2="344"/>
<line x1="270" y1="358" x2="330" y2="358"/>
<line x1="382" y1="351" x2="428" y2="351"/>
<line x1="428" y1="351" x2="428" y2="308"/>
<line x1="428" y1="308" x2="452.5" y2="308"/>
<line x1="508" y1="287" x2="538" y2="287"/>
<line x1="66" y1="412" x2="330" y2="412"/>
<line x1="192" y1="426" x2="330" y2="426"/>
<line x1="382" y1="419" x2="438" y2="419"/>
<line x1="438" y1="419" x2="438" y2="476"/>
<line x1="438" y1="476" x2="452.5" y2="476"/>
<line x1="34" y1="464" x2="330" y2="464"/>
<line x1="192" y1="478" x2="330" y2="478"/>
<line x1="382" y1="471" x2="418" y2="471"/>
<line x1="418" y1="471" x2="418" y2="490"/>
<line x1="418" y1="490" x2="454.7" y2="490"/>
<line x1="114" y1="516" x2="330" y2="516"/>
<line x1="144" y1="530" x2="330" y2="530"/>
<line x1="382" y1="523" x2="408" y2="523"/>
<line x1="408" y1="523" x2="408" y2="504"/>
<line x1="408" y1="504" x2="454.7" y2="504"/>
<line x1="144" y1="568" x2="330" y2="568"/>
<line x1="270" y1="582" x2="330" y2="582"/>
<line x1="382" y1="575" x2="428" y2="575"/>
<line x1="428" y1="575" x2="428" y2="518"/>
<line x1="428" y1="518" x2="452.5" y2="518"/>
<line x1="508" y1="497" x2="538" y2="497"/>
<line x1="66" y1="52" x2="73" y2="52"/>
<line x1="105" y1="52" x2="114" y2="52"/>
<line x1="144" y1="52" x2="151" y2="52"/>
<line x1="183" y1="52" x2="192" y2="52"/>
<line x1="222" y1="52" x2="229" y2="52"/>
<line x1="261" y1="52" x2="270" y2="52"/>
<path d="M330,82 H356 A26,21 0 0 1 356,124 H330 Z"/>
<path d="M330,134 H356 A26,21 0 0 1 356,176 H330 Z"/>
<path d="M428,108 C450,108 476,118.5 488,129 C476,139.5 450,150 428,150 Q442,129 428,108 Z"/>
<path d="M330,226 H356 A26,21 0 0 1 356,268 H330 Z"/>
<path d="M330,278 H356 A26,21 0 0 1 356,320 H330 Z"/>
<path d="M330,330 H356 A26,21 0 0 1 356,372 H330 Z"/>
<path d="M448,252 C470,252 496,269.5 508,287 C496,304.5 470,322 448,322 Q462,287 448,252 Z"/>
<path d="M330,398 H356 A26,21 0 0 1 356,440 H330 Z"/>
<path d="M330,450 H356 A26,21 0 0 1 356,492 H330 Z"/>
<path d="M330,502 H356 A26,21 0 0 1 356,544 H330 Z"/>
<path d="M330,554 H356 A26,21 0 0 1 356,596 H330 Z"/>
<path d="M448,462 C470,462 496,479.5 508,497 C496,514.5 470,532 448,532 Q462,497 448,462 Z"/>
<polygon points="73,40 73,64 95,52"/>
<circle cx="100" cy="52" r="5"/>
<polygon points="151,40 151,64 173,52"/>
<circle cx="178" cy="52" r="5"/>
<polygon points="229,40 229,64 251,52"/>
<circle cx="256" cy="52" r="5"/>
<circle cx="114" cy="96" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="110" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="148" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="162" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="209" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="240" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="192" cy="254" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="292" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="306" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="192" cy="344" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="358" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="412" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="192" cy="426" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="464" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="192" cy="478" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="114" cy="516" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="530" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="568" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="582" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="66" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="144" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="222" cy="52" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="524" y="135">e</text>
<text x="544" y="293">f</text>
<text x="544" y="503">g</text>
<text x="34" y="22" text-anchor="middle">A</text>
<text x="66" y="22" text-anchor="middle">B</text>
<text x="144" y="22" text-anchor="middle">C</text>
<text x="222" y="22" text-anchor="middle">D</text>
</svg>
</div>

### ตัวอย่างที่ 12  จงแปลงสมการ $a$ ถึง $g$ ของวงจรถอดรหัส BCD-8421 ให้ใช้เกต NAND อย่างเดียว และเขียนวงจร

$\mathbf{Sol}^{n}$

คอมพลีเมนต์ 2 ครั้ง แล้วกระจายด้วย De Morgan ทีละเอาต์พุต

$$\begin{aligned}
a &= A+C+BD+\overline{B}\,\overline{D} \\
&= \overline{\overline{A+C+BD+\overline{B}\,\overline{D}}} && \text{(คอมพลีเมนต์ 2 ครั้ง)} \\
&= \overline{\overline{A}\cdot \overline{C}\cdot \overline{BD}\cdot \overline{\overline{B}\,\overline{D}}} && \text{(De Morgan)}
\end{aligned}$$

$$\begin{aligned}
b &= \overline{B}+\overline{C}\,\overline{D}+CD \\
&= \overline{\overline{\overline{B}+\overline{C}\,\overline{D}+CD}} && \text{(คอมพลีเมนต์ 2 ครั้ง)} \\
&= \overline{B\cdot \overline{\overline{C}\,\overline{D}}\cdot \overline{CD}} && \text{(De Morgan)}
\end{aligned}$$

$$\begin{aligned}
c &= B+\overline{C}+D \\
&= \overline{\overline{B+\overline{C}+D}} && \text{(คอมพลีเมนต์ 2 ครั้ง)} \\
&= \overline{\overline{B}\cdot C\cdot \overline{D}} && \text{(De Morgan)}
\end{aligned}$$

$$\begin{aligned}
d &= A+\overline{B}\,\overline{D}+\overline{B}C+C\overline{D}+B\overline{C}D \\
&= \overline{\overline{A+\overline{B}\,\overline{D}+\overline{B}C+C\overline{D}+B\overline{C}D}} && \text{(คอมพลีเมนต์ 2 ครั้ง)} \\
&= \overline{\overline{A}\cdot \overline{\overline{B}\,\overline{D}}\cdot \overline{\overline{B}C}\cdot \overline{C\overline{D}}\cdot \overline{B\overline{C}D}} && \text{(De Morgan)}
\end{aligned}$$

$$\begin{aligned}
e &= \overline{B}\,\overline{D}+C\overline{D} \\
&= \overline{\overline{\overline{B}\,\overline{D}+C\overline{D}}} && \text{(คอมพลีเมนต์ 2 ครั้ง)} \\
&= \overline{\overline{\overline{B}\,\overline{D}}\cdot \overline{C\overline{D}}} && \text{(De Morgan)}
\end{aligned}$$

$$\begin{aligned}
f &= A+B\overline{C}+B\overline{D}+\overline{C}\,\overline{D} \\
&= \overline{\overline{A+B\overline{C}+B\overline{D}+\overline{C}\,\overline{D}}} && \text{(คอมพลีเมนต์ 2 ครั้ง)} \\
&= \overline{\overline{A}\cdot \overline{B\overline{C}}\cdot \overline{B\overline{D}}\cdot \overline{\overline{C}\,\overline{D}}} && \text{(De Morgan)}
\end{aligned}$$

$$\begin{aligned}
g &= B\overline{C}+A\overline{C}+\overline{B}C+C\overline{D} \\
&= \overline{\overline{B\overline{C}+A\overline{C}+\overline{B}C+C\overline{D}}} && \text{(คอมพลีเมนต์ 2 ครั้ง)} \\
&= \overline{\overline{B\overline{C}}\cdot \overline{A\overline{C}}\cdot \overline{\overline{B}C}\cdot \overline{C\overline{D}}} && \text{(De Morgan)}
\end{aligned}$$

พจน์ที่มีตัวแปรตัวเดียว เช่น $A$ ต่อ $\overline{A}$ เข้า NAND ชั้นนอกได้เลย และ $c=B+\overline{C}+D$ ได้ NAND เกตตัวเดียวที่รับ $\overline{B}$, $C$ และ $\overline{D}$

$\mathbf{Ans}\quad \begin{aligned}a &= \overline{\overline{A}\cdot \overline{C}\cdot \overline{BD}\cdot \overline{\overline{B}\,\overline{D}}} \\ b &= \overline{B\cdot \overline{\overline{C}\,\overline{D}}\cdot \overline{CD}} \\ c &= \overline{\overline{B}\cdot C\cdot \overline{D}} \\ d &= \overline{\overline{A}\cdot \overline{\overline{B}\,\overline{D}}\cdot \overline{\overline{B}C}\cdot \overline{C\overline{D}}\cdot \overline{B\overline{C}D}} \\ e &= \overline{\overline{\overline{B}\,\overline{D}}\cdot \overline{C\overline{D}}} \\ f &= \overline{\overline{A}\cdot \overline{B\overline{C}}\cdot \overline{B\overline{D}}\cdot \overline{\overline{C}\,\overline{D}}} \\ g &= \overline{\overline{B\overline{C}}\cdot \overline{A\overline{C}}\cdot \overline{\overline{B}C}\cdot \overline{C\overline{D}}}\end{aligned}$

**segment $a$ ถึง $d$**

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="660" height="744" viewBox="0 0 660 744" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<line x1="82" y1="52" x2="82" y2="489"/>
<line x1="34" y1="28" x2="34" y2="52"/>
<line x1="160" y1="52" x2="160" y2="572"/>
<line x1="112" y1="28" x2="112" y2="676"/>
<line x1="238" y1="52" x2="238" y2="690"/>
<line x1="190" y1="28" x2="190" y2="624"/>
<line x1="316" y1="52" x2="316" y2="638"/>
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
<circle cx="34" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="52" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="602" y="159">a</text>
<text x="592" y="315">b</text>
<text x="592" y="431">c</text>
<text x="612" y="606">d</text>
<text x="34" y="22" text-anchor="middle">A</text>
<text x="112" y="22" text-anchor="middle">B</text>
<text x="190" y="22" text-anchor="middle">C</text>
<text x="268" y="22" text-anchor="middle">D</text>
</svg>
</div>

**segment $e$ ถึง $g$**

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="650" height="622" viewBox="0 0 650 622" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<line x1="82" y1="52" x2="82" y2="209"/>
<line x1="34" y1="28" x2="34" y2="464"/>
<line x1="160" y1="52" x2="160" y2="516"/>
<line x1="112" y1="28" x2="112" y2="412"/>
<line x1="238" y1="52" x2="238" y2="478"/>
<line x1="190" y1="28" x2="190" y2="568"/>
<line x1="316" y1="52" x2="316" y2="582"/>
<line x1="268" y1="28" x2="268" y2="52"/>
<line x1="160" y1="96" x2="376" y2="96"/>
<line x1="316" y1="110" x2="376" y2="110"/>
<line x1="438" y1="103" x2="474" y2="103"/>
<line x1="474" y1="103" x2="474" y2="122"/>
<line x1="474" y1="122" x2="484" y2="122"/>
<line x1="190" y1="148" x2="376" y2="148"/>
<line x1="316" y1="162" x2="376" y2="162"/>
<line x1="438" y1="155" x2="464" y2="155"/>
<line x1="464" y1="155" x2="464" y2="136"/>
<line x1="464" y1="136" x2="484" y2="136"/>
<line x1="546" y1="129" x2="576" y2="129"/>
<line x1="82" y1="209" x2="494" y2="209"/>
<line x1="494" y1="209" x2="494" y2="266"/>
<line x1="494" y1="266" x2="504" y2="266"/>
<line x1="112" y1="240" x2="376" y2="240"/>
<line x1="238" y1="254" x2="376" y2="254"/>
<line x1="438" y1="247" x2="474" y2="247"/>
<line x1="474" y1="247" x2="474" y2="280"/>
<line x1="474" y1="280" x2="504" y2="280"/>
<line x1="112" y1="292" x2="376" y2="292"/>
<line x1="316" y1="306" x2="376" y2="306"/>
<line x1="438" y1="299" x2="464" y2="299"/>
<line x1="464" y1="299" x2="464" y2="294"/>
<line x1="464" y1="294" x2="504" y2="294"/>
<line x1="238" y1="344" x2="376" y2="344"/>
<line x1="316" y1="358" x2="376" y2="358"/>
<line x1="438" y1="351" x2="484" y2="351"/>
<line x1="484" y1="351" x2="484" y2="308"/>
<line x1="484" y1="308" x2="504" y2="308"/>
<line x1="566" y1="287" x2="596" y2="287"/>
<line x1="112" y1="412" x2="376" y2="412"/>
<line x1="238" y1="426" x2="376" y2="426"/>
<line x1="438" y1="419" x2="494" y2="419"/>
<line x1="494" y1="419" x2="494" y2="476"/>
<line x1="494" y1="476" x2="504" y2="476"/>
<line x1="34" y1="464" x2="376" y2="464"/>
<line x1="238" y1="478" x2="376" y2="478"/>
<line x1="438" y1="471" x2="474" y2="471"/>
<line x1="474" y1="471" x2="474" y2="490"/>
<line x1="474" y1="490" x2="504" y2="490"/>
<line x1="160" y1="516" x2="376" y2="516"/>
<line x1="190" y1="530" x2="376" y2="530"/>
<line x1="438" y1="523" x2="464" y2="523"/>
<line x1="464" y1="523" x2="464" y2="504"/>
<line x1="464" y1="504" x2="504" y2="504"/>
<line x1="190" y1="568" x2="376" y2="568"/>
<line x1="316" y1="582" x2="376" y2="582"/>
<line x1="438" y1="575" x2="484" y2="575"/>
<line x1="484" y1="575" x2="484" y2="518"/>
<line x1="484" y1="518" x2="504" y2="518"/>
<line x1="566" y1="497" x2="596" y2="497"/>
<line x1="34" y1="52" x2="41" y2="52"/>
<line x1="73" y1="52" x2="82" y2="52"/>
<line x1="112" y1="52" x2="119" y2="52"/>
<line x1="151" y1="52" x2="160" y2="52"/>
<line x1="190" y1="52" x2="197" y2="52"/>
<line x1="229" y1="52" x2="238" y2="52"/>
<line x1="268" y1="52" x2="275" y2="52"/>
<line x1="307" y1="52" x2="316" y2="52"/>
<path d="M376,82 H402 A26,21 0 0 1 402,124 H376 Z"/>
<circle cx="433" cy="103" r="5"/>
<path d="M376,134 H402 A26,21 0 0 1 402,176 H376 Z"/>
<circle cx="433" cy="155" r="5"/>
<path d="M484,108 H510 A26,21 0 0 1 510,150 H484 Z"/>
<circle cx="541" cy="129" r="5"/>
<path d="M376,226 H402 A26,21 0 0 1 402,268 H376 Z"/>
<circle cx="433" cy="247" r="5"/>
<path d="M376,278 H402 A26,21 0 0 1 402,320 H376 Z"/>
<circle cx="433" cy="299" r="5"/>
<path d="M376,330 H402 A26,21 0 0 1 402,372 H376 Z"/>
<circle cx="433" cy="351" r="5"/>
<path d="M504,252 H530 A26,35 0 0 1 530,322 H504 Z"/>
<circle cx="561" cy="287" r="5"/>
<path d="M376,398 H402 A26,21 0 0 1 402,440 H376 Z"/>
<circle cx="433" cy="419" r="5"/>
<path d="M376,450 H402 A26,21 0 0 1 402,492 H376 Z"/>
<circle cx="433" cy="471" r="5"/>
<path d="M376,502 H402 A26,21 0 0 1 402,544 H376 Z"/>
<circle cx="433" cy="523" r="5"/>
<path d="M376,554 H402 A26,21 0 0 1 402,596 H376 Z"/>
<circle cx="433" cy="575" r="5"/>
<path d="M504,462 H530 A26,35 0 0 1 530,532 H504 Z"/>
<circle cx="561" cy="497" r="5"/>
<polygon points="41,40 41,64 63,52"/>
<circle cx="68" cy="52" r="5"/>
<polygon points="119,40 119,64 141,52"/>
<circle cx="146" cy="52" r="5"/>
<polygon points="197,40 197,64 219,52"/>
<circle cx="224" cy="52" r="5"/>
<polygon points="275,40 275,64 297,52"/>
<circle cx="302" cy="52" r="5"/>
<circle cx="160" cy="96" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316" cy="110" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="148" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316" cy="162" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="82" cy="209" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="240" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="254" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="292" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316" cy="306" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="344" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316" cy="358" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="412" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="426" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="464" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="478" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="160" cy="516" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="530" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="568" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316" cy="582" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="52" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="582" y="135">e</text>
<text x="602" y="293">f</text>
<text x="602" y="503">g</text>
<text x="34" y="22" text-anchor="middle">A</text>
<text x="112" y="22" text-anchor="middle">B</text>
<text x="190" y="22" text-anchor="middle">C</text>
<text x="268" y="22" text-anchor="middle">D</text>
</svg>
</div>

## 4. วงจรถอดรหัส Excess-3 เป็น LED 7 ส่วน

### 4.1 ตารางความจริง

อินพุตเป็นรหัส Excess-3 ของเลข $0$ ถึง $9$ คือ $0011$ ถึง $1100$ ส่วน $0000, 0001, 0010, 1101, 1110, 1111$ ไม่มีใช้ จึงเป็น $d$ ตัวอย่างต่อไปนี้ทำด้วย Maxterm จึงใส่ $0$ และ $d$ แล้วอ่านลูปของ $0$ เป็นผลบวก

| เลข | $A\ B\ C\ D$ | $a$ | $b$ | $c$ | $d$ | $e$ | $f$ | $g$ |
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| $d$ | 0 0 0 0 | d | d | d | d | d | d | d |
| $d$ | 0 0 0 1 | d | d | d | d | d | d | d |
| $d$ | 0 0 1 0 | d | d | d | d | d | d | d |
| 0 | 0 0 1 1 | 1 | 1 | 1 | 1 | 1 | 1 | 0 |
| 1 | 0 1 0 0 | 0 | 1 | 1 | 0 | 0 | 0 | 0 |
| 2 | 0 1 0 1 | 1 | 1 | 0 | 1 | 1 | 0 | 1 |
| 3 | 0 1 1 0 | 1 | 1 | 1 | 1 | 0 | 0 | 1 |
| 4 | 0 1 1 1 | 0 | 1 | 1 | 0 | 0 | 1 | 1 |
| 5 | 1 0 0 0 | 1 | 0 | 1 | 1 | 0 | 1 | 1 |
| 6 | 1 0 0 1 | 1 | 0 | 1 | 1 | 1 | 1 | 1 |
| 7 | 1 0 1 0 | 1 | 1 | 1 | 0 | 0 | 0 | 0 |
| 8 | 1 0 1 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 |
| 9 | 1 1 0 0 | 1 | 1 | 1 | 1 | 0 | 1 | 1 |
| $d$ | 1 1 0 1 | d | d | d | d | d | d | d |
| $d$ | 1 1 1 0 | d | d | d | d | d | d | d |
| $d$ | 1 1 1 1 | d | d | d | d | d | d | d |

### ตัวอย่างที่ 13  จงหาสมการของ segment $a$ ของวงจรถอดรหัส Excess-3 เป็น LED 7 ส่วน (ใช้ Maxterm)

$\mathbf{Sol}^{n}$

จากตารางความจริง ช่องที่ $a=0$ คือรหัส $4,7$ และช่อง $0,1,2,13,14,15$ เป็น $d$

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

### ตัวอย่างที่ 14  จงหาสมการของ segment $b$ ของวงจรถอดรหัส Excess-3 เป็น LED 7 ส่วน (ใช้ Maxterm)

$\mathbf{Sol}^{n}$

จากตารางความจริง ช่องที่ $b=0$ คือรหัส $8,9$ และช่อง $0,1,2,13,14,15$ เป็น $d$

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

### ตัวอย่างที่ 15  จงหาสมการของ segment $c$ ของวงจรถอดรหัส Excess-3 เป็น LED 7 ส่วน (ใช้ Maxterm)

$\mathbf{Sol}^{n}$

จากตารางความจริง ช่องที่ $c=0$ คือรหัส $5$ และช่อง $0,1,2,13,14,15$ เป็น $d$

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

### ตัวอย่างที่ 16  จงหาสมการของ segment $d$ ของวงจรถอดรหัส Excess-3 เป็น LED 7 ส่วน (ใช้ Maxterm)

$\mathbf{Sol}^{n}$

จากตารางความจริง ช่องที่ $d=0$ คือรหัส $4,7,10$ และช่อง $0,1,2,13,14,15$ เป็น $d$

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

### ตัวอย่างที่ 17  จงหาสมการของ segment $e$ ของวงจรถอดรหัส Excess-3 เป็น LED 7 ส่วน (ใช้ Maxterm)

$\mathbf{Sol}^{n}$

จากตารางความจริง ช่องที่ $e=0$ คือรหัส $4,6,7,8,10,12$ และช่อง $0,1,2,13,14,15$ เป็น $d$

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

### ตัวอย่างที่ 18  จงหาสมการของ segment $f$ ของวงจรถอดรหัส Excess-3 เป็น LED 7 ส่วน (ใช้ Maxterm)

$\mathbf{Sol}^{n}$

จากตารางความจริง ช่องที่ $f=0$ คือรหัส $4,5,6,10$ และช่อง $0,1,2,13,14,15$ เป็น $d$

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

### ตัวอย่างที่ 19  จงหาสมการของ segment $g$ ของวงจรถอดรหัส Excess-3 เป็น LED 7 ส่วน (ใช้ Maxterm)

$\mathbf{Sol}^{n}$

จากตารางความจริง ช่องที่ $g=0$ คือรหัส $3,4,10$ และช่อง $0,1,2,13,14,15$ เป็น $d$

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

### ตัวอย่างที่ 20  จงเขียนวงจรถอดรหัส Excess-3 เป็น LED 7 ส่วน ด้วยเกต OR/AND จากสมการ $a$ ถึง $g$ ที่ได้

$\mathbf{Sol}^{n}$

แต่ละพจน์ผลบวกใช้ OR เกต แล้วนำทุกพจน์เข้า AND เกต พจน์ที่มีตัวแปรตัวเดียว เช่น $D$ ของ $e$ ต่อสายเข้า AND เกตได้เลย ส่วน $b$ และ $c$ มีพจน์เดียว จึงใช้ OR เกตตัวเดียว

$\mathbf{Ans}\quad \begin{aligned}a &= (A+C+D)(\overline{B}+\overline{C}+\overline{D}) \\ b &= (B+C) \\ c &= (\overline{B}+C+\overline{D}) \\ d &= (A+C+D)(\overline{B}+\overline{C}+\overline{D})(\overline{A}+\overline{C}+D) \\ e &= (D)(\overline{B}+\overline{C}) \\ f &= (A+C)(\overline{C}+D) \\ g &= (A+B)(A+C+D)(\overline{A}+\overline{C}+D)\end{aligned}$

**segment $a$ ถึง $d$**

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="628" height="594" viewBox="0 0 628 594" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<line x1="82" y1="52" x2="82" y2="526"/>
<line x1="34" y1="28" x2="34" y2="394"/>
<line x1="160" y1="52" x2="160" y2="460"/>
<line x1="112" y1="28" x2="112" y2="244"/>
<line x1="238" y1="52" x2="238" y2="540"/>
<line x1="190" y1="28" x2="190" y2="408"/>
<line x1="316" y1="52" x2="316" y2="488"/>
<line x1="268" y1="28" x2="268" y2="554"/>
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
<circle cx="34" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="52" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="570" y="149">a</text>
<text x="472" y="257">b</text>
<text x="472" y="332">c</text>
<text x="580" y="480">d</text>
<text x="34" y="22" text-anchor="middle">A</text>
<text x="112" y="22" text-anchor="middle">B</text>
<text x="190" y="22" text-anchor="middle">C</text>
<text x="268" y="22" text-anchor="middle">D</text>
</svg>
</div>

**segment $e$ ถึง $g$**

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="582" height="494" viewBox="0 0 582 494" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<line x1="82" y1="52" x2="82" y2="426"/>
<line x1="34" y1="28" x2="34" y2="360"/>
<line x1="160" y1="52" x2="160" y2="120"/>
<line x1="112" y1="28" x2="112" y2="322"/>
<line x1="238" y1="52" x2="238" y2="440"/>
<line x1="190" y1="28" x2="190" y2="374"/>
<line x1="268" y1="28" x2="268" y2="454"/>
<line x1="268" y1="89" x2="426" y2="89"/>
<line x1="426" y1="89" x2="426" y2="108"/>
<line x1="426" y1="108" x2="436" y2="108"/>
<line x1="160" y1="120" x2="336.2" y2="120"/>
<line x1="238" y1="134" x2="336.2" y2="134"/>
<line x1="390" y1="127" x2="416" y2="127"/>
<line x1="416" y1="127" x2="416" y2="122"/>
<line x1="416" y1="122" x2="436" y2="122"/>
<line x1="488" y1="115" x2="518" y2="115"/>
<line x1="34" y1="188" x2="336.2" y2="188"/>
<line x1="190" y1="202" x2="336.2" y2="202"/>
<line x1="390" y1="195" x2="426" y2="195"/>
<line x1="426" y1="195" x2="426" y2="214"/>
<line x1="426" y1="214" x2="436" y2="214"/>
<line x1="238" y1="240" x2="336.2" y2="240"/>
<line x1="268" y1="254" x2="336.2" y2="254"/>
<line x1="390" y1="247" x2="416" y2="247"/>
<line x1="416" y1="247" x2="416" y2="228"/>
<line x1="416" y1="228" x2="436" y2="228"/>
<line x1="488" y1="221" x2="518" y2="221"/>
<line x1="34" y1="308" x2="336.2" y2="308"/>
<line x1="112" y1="322" x2="336.2" y2="322"/>
<line x1="390" y1="315" x2="436" y2="315"/>
<line x1="436" y1="315" x2="436" y2="367"/>
<line x1="436" y1="367" x2="446" y2="367"/>
<line x1="34" y1="360" x2="335.2" y2="360"/>
<line x1="190" y1="374" x2="337" y2="374"/>
<line x1="268" y1="388" x2="335.2" y2="388"/>
<line x1="390" y1="374" x2="416" y2="374"/>
<line x1="416" y1="374" x2="416" y2="381"/>
<line x1="416" y1="381" x2="446" y2="381"/>
<line x1="82" y1="426" x2="335.2" y2="426"/>
<line x1="238" y1="440" x2="337" y2="440"/>
<line x1="268" y1="454" x2="335.2" y2="454"/>
<line x1="390" y1="440" x2="426" y2="440"/>
<line x1="426" y1="440" x2="426" y2="395"/>
<line x1="426" y1="395" x2="446" y2="395"/>
<line x1="498" y1="381" x2="528" y2="381"/>
<line x1="34" y1="52" x2="41" y2="52"/>
<line x1="73" y1="52" x2="82" y2="52"/>
<line x1="112" y1="52" x2="119" y2="52"/>
<line x1="151" y1="52" x2="160" y2="52"/>
<line x1="190" y1="52" x2="197" y2="52"/>
<line x1="229" y1="52" x2="238" y2="52"/>
<path d="M330,106 C352,106 378,116.5 390,127 C378,137.5 352,148 330,148 Q344,127 330,106 Z"/>
<path d="M436,94 H462 A26,21 0 0 1 462,136 H436 Z"/>
<path d="M330,174 C352,174 378,184.5 390,195 C378,205.5 352,216 330,216 Q344,195 330,174 Z"/>
<path d="M330,226 C352,226 378,236.5 390,247 C378,257.5 352,268 330,268 Q344,247 330,226 Z"/>
<path d="M436,200 H462 A26,21 0 0 1 462,242 H436 Z"/>
<path d="M330,294 C352,294 378,304.5 390,315 C378,325.5 352,336 330,336 Q344,315 330,294 Z"/>
<path d="M330,346 C352,346 378,360 390,374 C378,388 352,402 330,402 Q344,374 330,346 Z"/>
<path d="M330,412 C352,412 378,426 390,440 C378,454 352,468 330,468 Q344,440 330,412 Z"/>
<path d="M446,353 H472 A26,28 0 0 1 472,409 H446 Z"/>
<polygon points="41,40 41,64 63,52"/>
<circle cx="68" cy="52" r="5"/>
<polygon points="119,40 119,64 141,52"/>
<circle cx="146" cy="52" r="5"/>
<polygon points="197,40 197,64 219,52"/>
<circle cx="224" cy="52" r="5"/>
<circle cx="268" cy="89" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="160" cy="120" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="134" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="188" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="202" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="240" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="254" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="308" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="322" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="360" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="374" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="388" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="82" cy="426" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="440" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="454" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="52" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="524" y="121">e</text>
<text x="524" y="227">f</text>
<text x="534" y="387">g</text>
<text x="34" y="22" text-anchor="middle">A</text>
<text x="112" y="22" text-anchor="middle">B</text>
<text x="190" y="22" text-anchor="middle">C</text>
<text x="268" y="22" text-anchor="middle">D</text>
</svg>
</div>

### ตัวอย่างที่ 21  จงแปลงสมการ $a$ ถึง $g$ ของวงจรถอดรหัส Excess-3 ให้ใช้เกต NOR อย่างเดียว และเขียนวงจร

$\mathbf{Sol}^{n}$

คอมพลีเมนต์ 2 ครั้ง แล้วกระจายด้วย De Morgan ทีละเอาต์พุต

$$\begin{aligned}
a &= (A+C+D)(\overline{B}+\overline{C}+\overline{D}) \\
&= \overline{\overline{(A+C+D)(\overline{B}+\overline{C}+\overline{D})}} && \text{(คอมพลีเมนต์ 2 ครั้ง)} \\
&= \overline{\overline{A+C+D}+\overline{\overline{B}+\overline{C}+\overline{D}}} && \text{(De Morgan)}
\end{aligned}$$

$$\begin{aligned}
b &= (B+C) \\
&= \overline{\overline{B+C}} && \text{(คอมพลีเมนต์ 2 ครั้ง: NOR แล้วต่อ NOT)}
\end{aligned}$$

$$\begin{aligned}
c &= (\overline{B}+C+\overline{D}) \\
&= \overline{\overline{\overline{B}+C+\overline{D}}} && \text{(คอมพลีเมนต์ 2 ครั้ง: NOR แล้วต่อ NOT)}
\end{aligned}$$

$$\begin{aligned}
d &= (A+C+D)(\overline{B}+\overline{C}+\overline{D})(\overline{A}+\overline{C}+D) \\
&= \overline{\overline{(A+C+D)(\overline{B}+\overline{C}+\overline{D})(\overline{A}+\overline{C}+D)}} && \text{(คอมพลีเมนต์ 2 ครั้ง)} \\
&= \overline{\overline{A+C+D}+\overline{\overline{B}+\overline{C}+\overline{D}}+\overline{\overline{A}+\overline{C}+D}} && \text{(De Morgan)}
\end{aligned}$$

$$\begin{aligned}
e &= (D)(\overline{B}+\overline{C}) \\
&= \overline{\overline{(D)(\overline{B}+\overline{C})}} && \text{(คอมพลีเมนต์ 2 ครั้ง)} \\
&= \overline{\overline{D}+\overline{\overline{B}+\overline{C}}} && \text{(De Morgan)}
\end{aligned}$$

$$\begin{aligned}
f &= (A+C)(\overline{C}+D) \\
&= \overline{\overline{(A+C)(\overline{C}+D)}} && \text{(คอมพลีเมนต์ 2 ครั้ง)} \\
&= \overline{\overline{A+C}+\overline{\overline{C}+D}} && \text{(De Morgan)}
\end{aligned}$$

$$\begin{aligned}
g &= (A+B)(A+C+D)(\overline{A}+\overline{C}+D) \\
&= \overline{\overline{(A+B)(A+C+D)(\overline{A}+\overline{C}+D)}} && \text{(คอมพลีเมนต์ 2 ครั้ง)} \\
&= \overline{\overline{A+B}+\overline{A+C+D}+\overline{\overline{A}+\overline{C}+D}} && \text{(De Morgan)}
\end{aligned}$$

พจน์ที่มีตัวแปรตัวเดียว เช่น $D$ ของ $e$ ต่อ $\overline{D}$ เข้า NOR ชั้นนอกได้เลย ส่วน $b$ และ $c$ มีพจน์เดียว จึงใช้ NOR เกตตัวเดียวแล้วต่อ NOT อีกชั้น

$\mathbf{Ans}\quad \begin{aligned}a &= \overline{\overline{A+C+D}+\overline{\overline{B}+\overline{C}+\overline{D}}} \\ b &= \overline{\overline{B+C}} \\ c &= \overline{\overline{\overline{B}+C+\overline{D}}} \\ d &= \overline{\overline{A+C+D}+\overline{\overline{B}+\overline{C}+\overline{D}}+\overline{\overline{A}+\overline{C}+D}} \\ e &= \overline{\overline{D}+\overline{\overline{B}+\overline{C}}} \\ f &= \overline{\overline{A+C}+\overline{\overline{C}+D}} \\ g &= \overline{\overline{A+B}+\overline{A+C+D}+\overline{\overline{A}+\overline{C}+D}}\end{aligned}$

**segment $a$ ถึง $d$**

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="656" height="594" viewBox="0 0 656 594" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<line x1="82" y1="52" x2="82" y2="526"/>
<line x1="34" y1="28" x2="34" y2="394"/>
<line x1="160" y1="52" x2="160" y2="460"/>
<line x1="112" y1="28" x2="112" y2="244"/>
<line x1="238" y1="52" x2="238" y2="540"/>
<line x1="190" y1="28" x2="190" y2="408"/>
<line x1="316" y1="52" x2="316" y2="488"/>
<line x1="268" y1="28" x2="268" y2="554"/>
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
<circle cx="34" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="52" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="598" y="149">a</text>
<text x="550" y="257">b</text>
<text x="550" y="332">c</text>
<text x="608" y="480">d</text>
<text x="34" y="22" text-anchor="middle">A</text>
<text x="112" y="22" text-anchor="middle">B</text>
<text x="190" y="22" text-anchor="middle">C</text>
<text x="268" y="22" text-anchor="middle">D</text>
</svg>
</div>

**segment $e$ ถึง $g$**

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="656" height="494" viewBox="0 0 656 494" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<line x1="82" y1="52" x2="82" y2="426"/>
<line x1="34" y1="28" x2="34" y2="360"/>
<line x1="160" y1="52" x2="160" y2="120"/>
<line x1="112" y1="28" x2="112" y2="322"/>
<line x1="238" y1="52" x2="238" y2="440"/>
<line x1="190" y1="28" x2="190" y2="374"/>
<line x1="316" y1="52" x2="316" y2="89"/>
<line x1="268" y1="28" x2="268" y2="454"/>
<line x1="316" y1="89" x2="482" y2="89"/>
<line x1="482" y1="89" x2="482" y2="108"/>
<line x1="482" y1="108" x2="498.2" y2="108"/>
<line x1="160" y1="120" x2="382.2" y2="120"/>
<line x1="238" y1="134" x2="382.2" y2="134"/>
<line x1="446" y1="127" x2="472" y2="127"/>
<line x1="472" y1="127" x2="472" y2="122"/>
<line x1="472" y1="122" x2="498.2" y2="122"/>
<line x1="562" y1="115" x2="592" y2="115"/>
<line x1="34" y1="188" x2="382.2" y2="188"/>
<line x1="190" y1="202" x2="382.2" y2="202"/>
<line x1="446" y1="195" x2="482" y2="195"/>
<line x1="482" y1="195" x2="482" y2="214"/>
<line x1="482" y1="214" x2="498.2" y2="214"/>
<line x1="238" y1="240" x2="382.2" y2="240"/>
<line x1="268" y1="254" x2="382.2" y2="254"/>
<line x1="446" y1="247" x2="472" y2="247"/>
<line x1="472" y1="247" x2="472" y2="228"/>
<line x1="472" y1="228" x2="498.2" y2="228"/>
<line x1="562" y1="221" x2="592" y2="221"/>
<line x1="34" y1="308" x2="382.2" y2="308"/>
<line x1="112" y1="322" x2="382.2" y2="322"/>
<line x1="446" y1="315" x2="492" y2="315"/>
<line x1="492" y1="315" x2="492" y2="367"/>
<line x1="492" y1="367" x2="507.2" y2="367"/>
<line x1="34" y1="360" x2="381.2" y2="360"/>
<line x1="190" y1="374" x2="383" y2="374"/>
<line x1="268" y1="388" x2="381.2" y2="388"/>
<line x1="446" y1="374" x2="472" y2="374"/>
<line x1="472" y1="374" x2="472" y2="381"/>
<line x1="472" y1="381" x2="509" y2="381"/>
<line x1="82" y1="426" x2="381.2" y2="426"/>
<line x1="238" y1="440" x2="383" y2="440"/>
<line x1="268" y1="454" x2="381.2" y2="454"/>
<line x1="446" y1="440" x2="482" y2="440"/>
<line x1="482" y1="440" x2="482" y2="395"/>
<line x1="482" y1="395" x2="507.2" y2="395"/>
<line x1="572" y1="381" x2="602" y2="381"/>
<line x1="34" y1="52" x2="41" y2="52"/>
<line x1="73" y1="52" x2="82" y2="52"/>
<line x1="112" y1="52" x2="119" y2="52"/>
<line x1="151" y1="52" x2="160" y2="52"/>
<line x1="190" y1="52" x2="197" y2="52"/>
<line x1="229" y1="52" x2="238" y2="52"/>
<line x1="268" y1="52" x2="275" y2="52"/>
<line x1="307" y1="52" x2="316" y2="52"/>
<path d="M376,106 C398,106 424,116.5 436,127 C424,137.5 398,148 376,148 Q390,127 376,106 Z"/>
<circle cx="441" cy="127" r="5"/>
<path d="M492,94 C514,94 540,104.5 552,115 C540,125.5 514,136 492,136 Q506,115 492,94 Z"/>
<circle cx="557" cy="115" r="5"/>
<path d="M376,174 C398,174 424,184.5 436,195 C424,205.5 398,216 376,216 Q390,195 376,174 Z"/>
<circle cx="441" cy="195" r="5"/>
<path d="M376,226 C398,226 424,236.5 436,247 C424,257.5 398,268 376,268 Q390,247 376,226 Z"/>
<circle cx="441" cy="247" r="5"/>
<path d="M492,200 C514,200 540,210.5 552,221 C540,231.5 514,242 492,242 Q506,221 492,200 Z"/>
<circle cx="557" cy="221" r="5"/>
<path d="M376,294 C398,294 424,304.5 436,315 C424,325.5 398,336 376,336 Q390,315 376,294 Z"/>
<circle cx="441" cy="315" r="5"/>
<path d="M376,346 C398,346 424,360 436,374 C424,388 398,402 376,402 Q390,374 376,346 Z"/>
<circle cx="441" cy="374" r="5"/>
<path d="M376,412 C398,412 424,426 436,440 C424,454 398,468 376,468 Q390,440 376,412 Z"/>
<circle cx="441" cy="440" r="5"/>
<path d="M502,353 C524,353 550,367 562,381 C550,395 524,409 502,409 Q516,381 502,353 Z"/>
<circle cx="567" cy="381" r="5"/>
<polygon points="41,40 41,64 63,52"/>
<circle cx="68" cy="52" r="5"/>
<polygon points="119,40 119,64 141,52"/>
<circle cx="146" cy="52" r="5"/>
<polygon points="197,40 197,64 219,52"/>
<circle cx="224" cy="52" r="5"/>
<polygon points="275,40 275,64 297,52"/>
<circle cx="302" cy="52" r="5"/>
<circle cx="316" cy="89" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="160" cy="120" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="134" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="188" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="202" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="240" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="254" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="308" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="322" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="360" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="374" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="388" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="82" cy="426" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="238" cy="440" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="454" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="34" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="112" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="190" cy="52" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="268" cy="52" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="598" y="121">e</text>
<text x="598" y="227">f</text>
<text x="608" y="387">g</text>
<text x="34" y="22" text-anchor="middle">A</text>
<text x="112" y="22" text-anchor="middle">B</text>
<text x="190" y="22" text-anchor="middle">C</text>
<text x="268" y="22" text-anchor="middle">D</text>
</svg>
</div>

## 5. มัลติเพลกซ์เซอร์และดีมัลติเพลกซ์เซอร์

### 5.1 มัลติเพลกซ์เซอร์ (Multiplexer, MUX)

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

### ตัวอย่างที่ 22  จงเขียนวงจรมัลติเพลกซ์เซอร์ขนาดเข้า 4 ออก 1 จากฟังก์ชันลอจิกของมัน

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

### ตัวอย่างที่ 23  มัลติเพลกซ์เซอร์ 4-to-1 มี $D_0D_1D_2D_3 = 0110$ จงหา $Y$ เมื่อ $S_0S_1$ เป็น $00, 01, 10, 11$

$\mathbf{Sol}^{n}$

$S_0S_1$ ชี้ว่าเลือกอินพุตตัวที่เท่าไร (อ่าน $S_0S_1$ เป็นเลขฐานสอง) แล้ว $Y$ เท่ากับอินพุตตัวนั้น

| $S_0$ | $S_1$ | เลือก | $Y$ |
|:-:|:-:|:-:|:-:|
| 0 | 0 | $D_0=0$ | 0 |
| 0 | 1 | $D_1=1$ | 1 |
| 1 | 0 | $D_2=1$ | 1 |
| 1 | 1 | $D_3=0$ | 0 |

$\mathbf{Ans}\quad Y = 0,\ 1,\ 1,\ 0$

### 5.2 ดีมัลติเพลกซ์เซอร์ (Demultiplexer, DEMUX)

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

### ตัวอย่างที่ 24  จงเขียนวงจรดีมัลติเพลกซ์เซอร์ขนาดเข้า 1 ออก 4 จากฟังก์ชันลอจิกของมัน

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

### ตัวอย่างที่ 25  ดีมัลติเพลกซ์เซอร์ 1-to-4 มี $S_0S_1 = 10$ จงหา $Y_0Y_1Y_2Y_3$ เมื่อ $D_0 = 1$ และเมื่อ $D_0 = 0$

$\mathbf{Sol}^{n}$

$S_0S_1 = 10$ เลือกเอาต์พุต $Y_2$ ($2\cdot 1 + 0 = 2$) เอาต์พุตที่เหลือเป็น $0$

| $D_0$ | $Y_0$ | $Y_1$ | $Y_2$ | $Y_3$ |
|:-:|:-:|:-:|:-:|:-:|
| 1 | 0 | 0 | 1 | 0 |
| 0 | 0 | 0 | 0 | 0 |

$\mathbf{Ans}\quad D_0=1:\ Y_0Y_1Y_2Y_3 = 0010,\quad D_0=0:\ Y_0Y_1Y_2Y_3 = 0000$

## 6. สรุปสูตรและข้อควรระวังของบท

### 6.1 สูตรที่ต้องใช้

| เรื่อง | สูตร |
|:--|:--|
| NAND อย่างเดียว (SOP) | $F=T_1+\cdots+T_n = \overline{\overline{T_1}\cdot\overline{T_2}\cdots\overline{T_n}}$ |
| NOR อย่างเดียว (POS) | $F=S_1\cdots S_n = \overline{\overline{S_1}+\overline{S_2}+\cdots+\overline{S_n}}$ |
| Excess-3 | $\text{รหัส} = \text{เลขฐานสิบ} + 3$ (เขียนฐานสอง 4 บิต) |
| MUX 4-to-1 | $Y = D_0\overline{S_0}\,\overline{S_1} + D_1\overline{S_0}S_1 + D_2 S_0\overline{S_1} + D_3 S_0 S_1$ |
| DEMUX 1-to-4 | $Y_k = D_0\cdot(S_0S_1=k)$ เช่น $Y_2 = D_0 S_0\overline{S_1}$ |

### 6.2 ข้อควรระวังในการสอบ

- ช่อง $d$ ใช้เข้าลูปได้ตามสะดวกเพื่อให้ลูปใหญ่ขึ้น แต่ช่องที่เป็น $0$ (ในลูปของ $1$) หรือ $1$ (ในลูปของ $0$) ห้ามอยู่ในลูป
- ลูปของ $1$ อ่านเป็นผลคูณ ลูปของ $0$ อ่านเป็นผลบวก อย่าสลับกัน
- NAND อย่างเดียวใช้สมการ SOP (Minterm) NOR อย่างเดียวใช้สมการ POS (Maxterm) แล้วคอมพลีเมนต์ 2 ครั้ง
- ตัวแปรเดี่ยวที่ไม่มีเกตชั้นใน ต้องใช้ตัวคอมพลีเมนต์ต่อเข้าเกตชั้นนอก (เช่น $A$ ใน NAND อย่างเดียวใช้ $\overline{A}$)
- ของ MUX/DEMUX ในสไลด์ $S_0$ เป็นบิตสูง $S_1$ เป็นบิตต่ำ ($S_0S_1 = 10$ เลือก $D_2$ หรือ $Y_2$)
- ตรวจคำตอบด้วยการแทนค่าในตารางความจริงอย่างน้อยหนึ่งแถว
