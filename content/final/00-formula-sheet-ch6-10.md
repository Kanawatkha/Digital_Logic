# สรุปสูตรรวม บทที่ 6–10 (1322201 การออกแบบดิจิทัลลอจิก)

---

## บทที่ 6 วงจรถอดรหัส (Decoder)

### 6.1 LED เจ็ดส่วน (Seven Segment)

LED 7 ส่วนมีหลอด $a$ ถึง $g$ ตามรูป ส่วนที่สว่างเขียนเป็น $1$ ส่วนที่ดับเขียนเป็น $0$

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

### 6.2 วิธีออกแบบวงจรถอดรหัส 4 วิธี

| วิธีออกแบบ | ค่าที่ลงใน K-map | สมการ | เกตที่ใช้ |
|:--|:--|:--|:--|
| AND/OR | Minterm (1) | ผลบวกของผลคูณ (SOP) | AND ชั้นแรก, OR ชั้นสอง |
| NAND อย่างเดียว | Minterm (1) | SOP แล้วแปลง | NAND ทั้งสองชั้น |
| OR/AND | Maxterm (0) | ผลคูณของผลบวก (POS) | OR ชั้นแรก, AND ชั้นสอง |
| NOR อย่างเดียว | Maxterm (0) | POS แล้วแปลง | NOR ทั้งสองชั้น |

**ขั้นตอน** (1) เขียนตารางความจริง รหัสที่ไม่ใช้เป็น $d$ (2) ทำ K-map ของแต่ละ segment (3) ทำลูป อ่านเป็น SOP หรือ POS (4) ถ้าใช้ NAND หรือ NOR อย่างเดียว ให้คอมพลีเมนต์ 2 ครั้งแล้วใช้ De Morgan (5) เขียนวงจร

$$F = T_1 + \cdots + T_n = \overline{\overline{T_1}\cdot\overline{T_2}\cdots\overline{T_n}} \quad \text{(NAND)}$$

$$F = S_1 \cdots S_n = \overline{\overline{S_1} + \overline{S_2} + \cdots + \overline{S_n}} \quad \text{(NOR)}$$

### 6.3 ตารางความจริงของ BCD-8421 ไป LED 7 ส่วน

อินพุต $A, B, C, D$ ($A$ เป็น MSB) เอาต์พุต $a$ ถึง $g$ เป็น $1$ เมื่อ LED สว่าง รหัส $1010$ ถึง $1111$ ไม่ใช้ จึงเป็น $d$ (don't care)

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

### 6.4 ตารางความจริงของ Excess-3 ไป LED 7 ส่วน

Excess-3 คือเลขฐานสิบ $+3$ เขียนเป็นฐานสอง 4 บิต รหัส $0000$, $0001$, $0010$, $1101$, $1110$, $1111$ ไม่ใช้ จึงเป็น $d$

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

## บทที่ 7 ฟลิป-ฟลอป (Flip-Flop)

### 7.1 สถานะของฟลิป-ฟลอป

ฟลิป-ฟลอปมีเอาต์พุต $Q$ และ $\overline{Q}$ ที่มีค่าตรงข้ามกันเสมอ สถานะคือค่าของ $Q$ มี 2 แบบ

| สถานะ | ความหมาย | เขียนเป็น |
|:--|:--|:-:|
| สถานะปัจจุบัน (Present State) | ค่า $Q$ ก่อนป้อนอินพุต | $Q(t)$ |
| สถานะถัดไป (Next State) | ค่า $Q$ หลังป้อนอินพุต | $Q(t+1)$ |

### 7.2 พัลส์ (Pulse) และสัญญาณนาฬิกา (Clock)

**การกระตุ้นด้วยพัลส์ 4 แบบ**

| แบบ | ชื่อ | ทำงานเมื่อ |
|:-:|:--|:--|
| 1 | ขอบสัญญาณบวก (Positive-Edge) | ขอบขาขึ้น $\uparrow$ |
| 2 | ขอบสัญญาณลบ (Negative-Edge) | ขอบขาลง $\downarrow$ |
| 3 | พัลส์บวก (Positive-Pulse) | พัลส์ที่เป็น $1$ |
| 4 | พัลส์ลบ (Negative-Pulse) | พัลส์ที่เป็น $0$ |

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="700" height="176" viewBox="0 0 700 176" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="100" y1="40" x2="100" y2="132"/>
<line x1="165" y1="40" x2="165" y2="132"/>
<line x1="230" y1="40" x2="230" y2="132"/>
<line x1="295" y1="40" x2="295" y2="132"/>
<line x1="360" y1="40" x2="360" y2="132"/>
<line x1="425" y1="40" x2="425" y2="132"/>
</g>
<path d="M70,112 L100,112 L100,60 L165,60 L165,112 L230,112 L230,60 L295,60 L295,112 L360,112 L360,60 L425,60 L425,112 L490,112" stroke="currentColor" stroke-width="2.6" fill="none" stroke-linejoin="miter"/>
<text x="58" y="92" text-anchor="end" font-size="18">Clock</text>
<polygon points="100,77 94,91 106,91" fill="#e8743b"/>
<polygon points="165,95 159,81 171,81" fill="#3b8be8"/>
<polygon points="230,77 224,91 236,91" fill="#e8743b"/>
<polygon points="295,95 289,81 301,81" fill="#3b8be8"/>
<polygon points="360,77 354,91 366,91" fill="#e8743b"/>
<polygon points="425,95 419,81 431,81" fill="#3b8be8"/>
<g stroke="currentColor" stroke-width="1.4" fill="none">
<polyline points="100,50 100,44 165,44 165,50"/>
<polyline points="165,122 165,128 230,128 230,122"/>
</g>
<text x="132.5" y="34" text-anchor="middle" font-size="14">Positive pulse (1)</text>
<text x="197.5" y="148" text-anchor="middle" font-size="14">Negative pulse (0)</text>
<text x="100" y="148" text-anchor="middle" font-size="14" fill="#e8743b">Rising edge</text>
<text x="425" y="148" text-anchor="middle" font-size="14" fill="#3b8be8">Falling edge</text>
<text x="520" y="64" font-size="14" font-family="Mitr, Tahoma, sans-serif" fill="#e8743b">Positive-edge : ขอบขาขึ้น</text>
<text x="520" y="90" font-size="14" font-family="Mitr, Tahoma, sans-serif" fill="#3b8be8">Negative-edge : ขอบขาลง</text>
</svg>
</div>

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="640" height="120" viewBox="0 0 640 120" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="2.2" fill="none">
<path d="M10,80 L50,80 L50,30 L90,30 L90,80 L120,80"/>
<path d="M170,80 L210,80 L210,30 L250,30 L250,80 L280,80"/>
<path d="M330,80 L370,80 L370,30 L410,30 L410,80 L440,80"/>
<path d="M490,30 L530,30 L530,80 L570,80 L570,30 L600,30"/>
</g>
<g fill="currentColor"><polygon points="46,45 50,57 42,57" transform="translate(0,-4)"/>
<polygon points="244,63 240,51 248,51" transform="translate(0,4)"/></g>
<text x="60" y="108" text-anchor="middle" font-size="14">Rising edge</text>
<text x="220" y="108" text-anchor="middle" font-size="14">Falling edge</text>
<text x="380" y="108" text-anchor="middle" font-size="14">Positive pulse</text>
<text x="540" y="108" text-anchor="middle" font-size="14">Negative pulse</text>
</svg>
</div>

- **Clock (CLK, CP)** คือสัญญาณพัลส์ที่ใช้กระตุ้น $Q$ จะเปลี่ยนก็ต่อเมื่อมีสัญญาณนี้มากระตุ้น (ฟลิป-ฟลอปที่ป้อนพัลส์เข้าตรง ๆ เรียกว่าแล็ทช์ Latch)
- สามเหลี่ยมที่ขา CLK ($>$) คือทำงานด้วยขอบ ถ้ามีวงกลมเล็กด้วยคือทำงานที่ขอบขาลง ($\downarrow$)

### 7.3 ฟลิป-ฟลอป 4 ประเภท

| ประเภท | อินพุต | การทำงาน |
|:-:|:-:|:--|
| RS | $R, S$ | $S$ ทำให้ Set ($Q=1$), $R$ ทำให้ Reset ($Q=0$), ห้ามป้อนค่าที่ซ้อนกัน |
| JK | $J, K$ | เหมือน RS แต่ $JK=11$ ทำให้สลับสถานะ |
| D | $D$ | $Q$ ตาม $D$ |
| T | $T$ | $T=1$ สลับสถานะ, $T=0$ คงเดิม |

- **ตารางการทำงาน** บอกว่าป้อนอินพุตเท่านี้แล้ว $Q(t+1)$ เป็นเท่าไร
- **ตารางการกระตุ้น** บอกว่าต้องการให้ $Q(t)$ เปลี่ยนเป็น $Q(t+1)$ ต้องป้อนอินพุตเท่าไร ($x$ คือค่าอะไรก็ได้)

### 7.4 RS ฟลิป-ฟลอปแบบ NOR

$RS=11$ ห้ามใช้ (เครื่องหมาย $?$ คือไม่กำหนดค่า)

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="541" height="193" viewBox="0 0 541 193" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<text x="125" y="26" text-anchor="middle" font-family="Mitr, Tahoma, sans-serif" font-size="21" font-weight="500" fill="#3b8be8">ตารางการกระตุ้น</text>
<g stroke="currentColor" stroke-width="1.4" fill="none">
<rect x="16" y="42" width="218" height="143"/>
<line x1="16" y1="73" x2="234" y2="73"/>
<line x1="142" y1="42" x2="142" y2="185"/>
</g>
<text x="43.2" y="63" text-anchor="middle" font-size="16">Q(t)</text>
<text x="43.2" y="93" text-anchor="middle" font-size="16">0</text>
<text x="43.2" y="120" text-anchor="middle" font-size="16">0</text>
<text x="43.2" y="147" text-anchor="middle" font-size="16">1</text>
<text x="43.2" y="174" text-anchor="middle" font-size="16">1</text>
<text x="106.2" y="63" text-anchor="middle" font-size="16">Q(t+1)</text>
<text x="106.2" y="93" text-anchor="middle" font-size="16">0</text>
<text x="106.2" y="120" text-anchor="middle" font-size="16">1</text>
<text x="106.2" y="147" text-anchor="middle" font-size="16">0</text>
<text x="106.2" y="174" text-anchor="middle" font-size="16">1</text>
<text x="165" y="63" text-anchor="middle" font-size="16">R</text>
<text x="165" y="93" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="165" y="120" text-anchor="middle" font-size="16">0</text>
<text x="165" y="147" text-anchor="middle" font-size="16">1</text>
<text x="165" y="174" text-anchor="middle" font-size="16">0</text>
<text x="211" y="63" text-anchor="middle" font-size="16">S</text>
<text x="211" y="93" text-anchor="middle" font-size="16">0</text>
<text x="211" y="120" text-anchor="middle" font-size="16">1</text>
<text x="211" y="147" text-anchor="middle" font-size="16">0</text>
<text x="211" y="174" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="407.5" y="26" text-anchor="middle" font-family="Mitr, Tahoma, sans-serif" font-size="21" font-weight="500" fill="#e8743b">ตารางการทำงาน</text>
<g stroke="currentColor" stroke-width="1.4" fill="none">
<rect x="290" y="42" width="235" height="143"/>
<line x1="290" y1="73" x2="525" y2="73"/>
<line x1="382" y1="42" x2="382" y2="185"/>
</g>
<text x="313" y="63" text-anchor="middle" font-size="16">R</text>
<text x="313" y="93" text-anchor="middle" font-size="16">0</text>
<text x="313" y="120" text-anchor="middle" font-size="16">0</text>
<text x="313" y="147" text-anchor="middle" font-size="16">1</text>
<text x="313" y="174" text-anchor="middle" font-size="16">1</text>
<text x="359" y="63" text-anchor="middle" font-size="16">S</text>
<text x="359" y="93" text-anchor="middle" font-size="16">0</text>
<text x="359" y="120" text-anchor="middle" font-size="16">1</text>
<text x="359" y="147" text-anchor="middle" font-size="16">0</text>
<text x="359" y="174" text-anchor="middle" font-size="16">1</text>
<text x="417.8" y="63" text-anchor="middle" font-size="16">Q(t+1)</text>
<text x="417.8" y="93" text-anchor="middle" font-size="16">Q(t)</text>
<text x="417.8" y="120" text-anchor="middle" font-size="16">1</text>
<text x="417.8" y="147" text-anchor="middle" font-size="16">0</text>
<text x="417.8" y="174" text-anchor="middle" font-size="16">?</text>
<text x="489.2" y="63" text-anchor="middle" font-size="16">Q(t+1)</text>
<line x1="467.5" y1="49" x2="478.5" y2="49" stroke="currentColor" stroke-width="1.3"/>
<text x="489.2" y="93" text-anchor="middle" font-size="16">Q(t)</text>
<line x1="476" y1="79" x2="487" y2="79" stroke="currentColor" stroke-width="1.3"/>
<text x="489.2" y="120" text-anchor="middle" font-size="16">0</text>
<text x="489.2" y="147" text-anchor="middle" font-size="16">1</text>
<text x="489.2" y="174" text-anchor="middle" font-size="16">?</text>
</svg>
</div>

### 7.5 RS ฟลิป-ฟลอปแบบ NAND

$RS=00$ ห้ามใช้ (ต่างจากแบบ NOR)

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="541" height="193" viewBox="0 0 541 193" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<text x="125" y="26" text-anchor="middle" font-family="Mitr, Tahoma, sans-serif" font-size="21" font-weight="500" fill="#3b8be8">ตารางการกระตุ้น</text>
<g stroke="currentColor" stroke-width="1.4" fill="none">
<rect x="16" y="42" width="218" height="143"/>
<line x1="16" y1="73" x2="234" y2="73"/>
<line x1="142" y1="42" x2="142" y2="185"/>
</g>
<text x="43.2" y="63" text-anchor="middle" font-size="16">Q(t)</text>
<text x="43.2" y="93" text-anchor="middle" font-size="16">0</text>
<text x="43.2" y="120" text-anchor="middle" font-size="16">0</text>
<text x="43.2" y="147" text-anchor="middle" font-size="16">1</text>
<text x="43.2" y="174" text-anchor="middle" font-size="16">1</text>
<text x="106.2" y="63" text-anchor="middle" font-size="16">Q(t+1)</text>
<text x="106.2" y="93" text-anchor="middle" font-size="16">0</text>
<text x="106.2" y="120" text-anchor="middle" font-size="16">1</text>
<text x="106.2" y="147" text-anchor="middle" font-size="16">0</text>
<text x="106.2" y="174" text-anchor="middle" font-size="16">1</text>
<text x="165" y="63" text-anchor="middle" font-size="16">R</text>
<text x="165" y="93" text-anchor="middle" font-size="16">1</text>
<text x="165" y="120" text-anchor="middle" font-size="16">0</text>
<text x="165" y="147" text-anchor="middle" font-size="16">1</text>
<text x="165" y="174" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="211" y="63" text-anchor="middle" font-size="16">S</text>
<text x="211" y="93" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="211" y="120" text-anchor="middle" font-size="16">1</text>
<text x="211" y="147" text-anchor="middle" font-size="16">0</text>
<text x="211" y="174" text-anchor="middle" font-size="16">1</text>
<text x="407.5" y="26" text-anchor="middle" font-family="Mitr, Tahoma, sans-serif" font-size="21" font-weight="500" fill="#e8743b">ตารางการทำงาน</text>
<g stroke="currentColor" stroke-width="1.4" fill="none">
<rect x="290" y="42" width="235" height="143"/>
<line x1="290" y1="73" x2="525" y2="73"/>
<line x1="382" y1="42" x2="382" y2="185"/>
</g>
<text x="313" y="63" text-anchor="middle" font-size="16">R</text>
<text x="313" y="93" text-anchor="middle" font-size="16">0</text>
<text x="313" y="120" text-anchor="middle" font-size="16">0</text>
<text x="313" y="147" text-anchor="middle" font-size="16">1</text>
<text x="313" y="174" text-anchor="middle" font-size="16">1</text>
<text x="359" y="63" text-anchor="middle" font-size="16">S</text>
<text x="359" y="93" text-anchor="middle" font-size="16">0</text>
<text x="359" y="120" text-anchor="middle" font-size="16">1</text>
<text x="359" y="147" text-anchor="middle" font-size="16">0</text>
<text x="359" y="174" text-anchor="middle" font-size="16">1</text>
<text x="417.8" y="63" text-anchor="middle" font-size="16">Q(t+1)</text>
<text x="417.8" y="93" text-anchor="middle" font-size="16">?</text>
<text x="417.8" y="120" text-anchor="middle" font-size="16">1</text>
<text x="417.8" y="147" text-anchor="middle" font-size="16">0</text>
<text x="417.8" y="174" text-anchor="middle" font-size="16">Q(t)</text>
<text x="489.2" y="63" text-anchor="middle" font-size="16">Q(t+1)</text>
<line x1="467.5" y1="49" x2="478.5" y2="49" stroke="currentColor" stroke-width="1.3"/>
<text x="489.2" y="93" text-anchor="middle" font-size="16">?</text>
<text x="489.2" y="120" text-anchor="middle" font-size="16">0</text>
<text x="489.2" y="147" text-anchor="middle" font-size="16">1</text>
<text x="489.2" y="174" text-anchor="middle" font-size="16">Q(t)</text>
<line x1="476" y1="160" x2="487" y2="160" stroke="currentColor" stroke-width="1.3"/>
</svg>
</div>

### 7.6 Clock RS ฟลิป-ฟลอป

ทำงานเหมือน RS แบบ NOR แต่เปลี่ยนสถานะเมื่อมีสัญญาณนาฬิกา CP มากระตุ้นเท่านั้น ($-$ คือไม่มีสัญญาณกระตุ้น) ตารางการกระตุ้นเหมือน RS แบบ NOR

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="313" height="220" viewBox="0 0 313 220" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<text x="156.5" y="26" text-anchor="middle" font-family="Mitr, Tahoma, sans-serif" font-size="21" font-weight="500" fill="#e8743b">ตารางการทำงาน</text>
<g stroke="currentColor" stroke-width="1.4" fill="none">
<rect x="16" y="42" width="281" height="170"/>
<line x1="16" y1="73" x2="297" y2="73"/>
<line x1="154" y1="42" x2="154" y2="212"/>
</g>
<text x="39" y="63" text-anchor="middle" font-size="16">CP</text>
<text x="39" y="93" text-anchor="middle" font-size="16">–</text>
<line x1="39" y1="122" x2="39" y2="109" stroke="currentColor" stroke-width="1.6"/>
<polygon points="39,108 34.5,115 43.5,115" fill="currentColor"/>
<line x1="39" y1="149" x2="39" y2="136" stroke="currentColor" stroke-width="1.6"/>
<polygon points="39,135 34.5,142 43.5,142" fill="currentColor"/>
<line x1="39" y1="176" x2="39" y2="163" stroke="currentColor" stroke-width="1.6"/>
<polygon points="39,162 34.5,169 43.5,169" fill="currentColor"/>
<line x1="39" y1="203" x2="39" y2="190" stroke="currentColor" stroke-width="1.6"/>
<polygon points="39,189 34.5,196 43.5,196" fill="currentColor"/>
<text x="85" y="63" text-anchor="middle" font-size="16">R</text>
<text x="85" y="93" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="85" y="120" text-anchor="middle" font-size="16">0</text>
<text x="85" y="147" text-anchor="middle" font-size="16">0</text>
<text x="85" y="174" text-anchor="middle" font-size="16">1</text>
<text x="85" y="201" text-anchor="middle" font-size="16">1</text>
<text x="131" y="63" text-anchor="middle" font-size="16">S</text>
<text x="131" y="93" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="131" y="120" text-anchor="middle" font-size="16">0</text>
<text x="131" y="147" text-anchor="middle" font-size="16">1</text>
<text x="131" y="174" text-anchor="middle" font-size="16">0</text>
<text x="131" y="201" text-anchor="middle" font-size="16">1</text>
<text x="189.8" y="63" text-anchor="middle" font-size="16">Q(t+1)</text>
<text x="189.8" y="93" text-anchor="middle" font-size="16">Q(t)</text>
<text x="189.8" y="120" text-anchor="middle" font-size="16">Q(t)</text>
<text x="189.8" y="147" text-anchor="middle" font-size="16">1</text>
<text x="189.8" y="174" text-anchor="middle" font-size="16">0</text>
<text x="189.8" y="201" text-anchor="middle" font-size="16">?</text>
<text x="261.2" y="63" text-anchor="middle" font-size="16">Q(t+1)</text>
<line x1="239.5" y1="49" x2="250.5" y2="49" stroke="currentColor" stroke-width="1.3"/>
<text x="261.2" y="93" text-anchor="middle" font-size="16">Q(t)</text>
<line x1="248" y1="79" x2="259" y2="79" stroke="currentColor" stroke-width="1.3"/>
<text x="261.2" y="120" text-anchor="middle" font-size="16">Q(t)</text>
<line x1="248" y1="106" x2="259" y2="106" stroke="currentColor" stroke-width="1.3"/>
<text x="261.2" y="147" text-anchor="middle" font-size="16">0</text>
<text x="261.2" y="174" text-anchor="middle" font-size="16">1</text>
<text x="261.2" y="201" text-anchor="middle" font-size="16">?</text>
</svg>
</div>

**สัญลักษณ์ Clock RS** : วงกลมที่ขา CLK คือขอบขาลง ไม่มีวงกลมคือขอบขาขึ้น ขา PR (คือ PS) และ CLR ทำงานที่ $0$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="560" height="252" viewBox="0 0 560 252" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<rect x="52" y="38" width="80" height="150" rx="2"/>
<line x1="16" y1="76" x2="52" y2="76"/>
<line x1="16" y1="150" x2="52" y2="150"/>
<polyline points="52,104 64,113 52,122"/>
<line x1="16" y1="113" x2="52" y2="113"/>
<circle cx="92" cy="34" r="4"/>
<line x1="92" y1="30" x2="92" y2="12"/>
<circle cx="92" cy="192" r="4"/>
<line x1="92" y1="196" x2="92" y2="214"/>
<line x1="132" y1="76" x2="168" y2="76"/>
<line x1="132" y1="150" x2="168" y2="150"/>
<line x1="115.2" y1="142.4" x2="124" y2="142.4" stroke-width="1.4"/>
<rect x="332" y="38" width="80" height="150" rx="2"/>
<line x1="296" y1="76" x2="332" y2="76"/>
<line x1="296" y1="150" x2="332" y2="150"/>
<polyline points="332,104 344,113 332,122"/>
<circle cx="328" cy="113" r="4"/>
<line x1="296" y1="113" x2="324" y2="113"/>
<circle cx="372" cy="34" r="4"/>
<line x1="372" y1="30" x2="372" y2="12"/>
<circle cx="372" cy="192" r="4"/>
<line x1="372" y1="196" x2="372" y2="214"/>
<line x1="412" y1="76" x2="448" y2="76"/>
<line x1="412" y1="150" x2="448" y2="150"/>
<line x1="395.2" y1="142.4" x2="404" y2="142.4" stroke-width="1.4"/>
</g>
<text x="92" y="122" text-anchor="middle" font-size="26">RS</text>
<text x="60" y="82" text-anchor="start" font-size="14">S</text>
<text x="60" y="156" text-anchor="start" font-size="14">R</text>
<text x="92" y="55" text-anchor="middle" font-size="12">PR</text>
<text x="92" y="180" text-anchor="middle" font-size="12">CLR</text>
<text x="124" y="82" text-anchor="end" font-size="16">Q</text>
<text x="124" y="156" text-anchor="end" font-size="16">Q</text>
<text x="92" y="240" text-anchor="middle" font-family="Mitr, Tahoma, sans-serif" font-size="15">ทำงานที่ขอบขาขึ้น (↑)</text>
<text x="372" y="122" text-anchor="middle" font-size="26">RS</text>
<text x="340" y="82" text-anchor="start" font-size="14">S</text>
<text x="340" y="156" text-anchor="start" font-size="14">R</text>
<text x="372" y="55" text-anchor="middle" font-size="12">PR</text>
<text x="372" y="180" text-anchor="middle" font-size="12">CLR</text>
<text x="404" y="82" text-anchor="end" font-size="16">Q</text>
<text x="404" y="156" text-anchor="end" font-size="16">Q</text>
<text x="372" y="240" text-anchor="middle" font-family="Mitr, Tahoma, sans-serif" font-size="15">ทำงานที่ขอบขาลง (↓)</text>
</g>
</svg>
</div>

### 7.7 JK ฟลิป-ฟลอป

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="541" height="193" viewBox="0 0 541 193" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<text x="125" y="26" text-anchor="middle" font-family="Mitr, Tahoma, sans-serif" font-size="21" font-weight="500" fill="#3b8be8">ตารางการกระตุ้น</text>
<g stroke="currentColor" stroke-width="1.4" fill="none">
<rect x="16" y="42" width="218" height="143"/>
<line x1="16" y1="73" x2="234" y2="73"/>
<line x1="142" y1="42" x2="142" y2="185"/>
</g>
<text x="43.2" y="63" text-anchor="middle" font-size="16">Q(t)</text>
<text x="43.2" y="93" text-anchor="middle" font-size="16">0</text>
<text x="43.2" y="120" text-anchor="middle" font-size="16">0</text>
<text x="43.2" y="147" text-anchor="middle" font-size="16">1</text>
<text x="43.2" y="174" text-anchor="middle" font-size="16">1</text>
<text x="106.2" y="63" text-anchor="middle" font-size="16">Q(t+1)</text>
<text x="106.2" y="93" text-anchor="middle" font-size="16">0</text>
<text x="106.2" y="120" text-anchor="middle" font-size="16">1</text>
<text x="106.2" y="147" text-anchor="middle" font-size="16">0</text>
<text x="106.2" y="174" text-anchor="middle" font-size="16">1</text>
<text x="165" y="63" text-anchor="middle" font-size="16">J</text>
<text x="165" y="93" text-anchor="middle" font-size="16">0</text>
<text x="165" y="120" text-anchor="middle" font-size="16">1</text>
<text x="165" y="147" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="165" y="174" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="211" y="63" text-anchor="middle" font-size="16">K</text>
<text x="211" y="93" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="211" y="120" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="211" y="147" text-anchor="middle" font-size="16">1</text>
<text x="211" y="174" text-anchor="middle" font-size="16">0</text>
<text x="407.5" y="26" text-anchor="middle" font-family="Mitr, Tahoma, sans-serif" font-size="21" font-weight="500" fill="#e8743b">ตารางการทำงาน</text>
<g stroke="currentColor" stroke-width="1.4" fill="none">
<rect x="290" y="42" width="235" height="143"/>
<line x1="290" y1="73" x2="525" y2="73"/>
<line x1="382" y1="42" x2="382" y2="185"/>
</g>
<text x="313" y="63" text-anchor="middle" font-size="16">J</text>
<text x="313" y="93" text-anchor="middle" font-size="16">0</text>
<text x="313" y="120" text-anchor="middle" font-size="16">0</text>
<text x="313" y="147" text-anchor="middle" font-size="16">1</text>
<text x="313" y="174" text-anchor="middle" font-size="16">1</text>
<text x="359" y="63" text-anchor="middle" font-size="16">K</text>
<text x="359" y="93" text-anchor="middle" font-size="16">0</text>
<text x="359" y="120" text-anchor="middle" font-size="16">1</text>
<text x="359" y="147" text-anchor="middle" font-size="16">0</text>
<text x="359" y="174" text-anchor="middle" font-size="16">1</text>
<text x="417.8" y="63" text-anchor="middle" font-size="16">Q(t+1)</text>
<text x="417.8" y="93" text-anchor="middle" font-size="16">Q(t)</text>
<text x="417.8" y="120" text-anchor="middle" font-size="16">0</text>
<text x="417.8" y="147" text-anchor="middle" font-size="16">1</text>
<text x="417.8" y="174" text-anchor="middle" font-size="16">Q(t)</text>
<line x1="404.5" y1="160" x2="415.5" y2="160" stroke="currentColor" stroke-width="1.3"/>
<text x="489.2" y="63" text-anchor="middle" font-size="16">Q(t+1)</text>
<line x1="467.5" y1="49" x2="478.5" y2="49" stroke="currentColor" stroke-width="1.3"/>
<text x="489.2" y="93" text-anchor="middle" font-size="16">Q(t)</text>
<line x1="476" y1="79" x2="487" y2="79" stroke="currentColor" stroke-width="1.3"/>
<text x="489.2" y="120" text-anchor="middle" font-size="16">1</text>
<text x="489.2" y="147" text-anchor="middle" font-size="16">0</text>
<text x="489.2" y="174" text-anchor="middle" font-size="16">Q(t)</text>
</svg>
</div>

**สัญลักษณ์ JK** : วงกลมที่ขา CLK คือขอบขาลง ไม่มีวงกลมคือขอบขาขึ้น ขา PR (คือ PS) และ CLR ทำงานที่ $0$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="560" height="252" viewBox="0 0 560 252" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<rect x="52" y="38" width="80" height="150" rx="2"/>
<line x1="16" y1="76" x2="52" y2="76"/>
<line x1="16" y1="150" x2="52" y2="150"/>
<polyline points="52,104 64,113 52,122"/>
<line x1="16" y1="113" x2="52" y2="113"/>
<circle cx="92" cy="34" r="4"/>
<line x1="92" y1="30" x2="92" y2="12"/>
<circle cx="92" cy="192" r="4"/>
<line x1="92" y1="196" x2="92" y2="214"/>
<line x1="132" y1="76" x2="168" y2="76"/>
<line x1="132" y1="150" x2="168" y2="150"/>
<line x1="115.2" y1="142.4" x2="124" y2="142.4" stroke-width="1.4"/>
<rect x="332" y="38" width="80" height="150" rx="2"/>
<line x1="296" y1="76" x2="332" y2="76"/>
<line x1="296" y1="150" x2="332" y2="150"/>
<polyline points="332,104 344,113 332,122"/>
<circle cx="328" cy="113" r="4"/>
<line x1="296" y1="113" x2="324" y2="113"/>
<circle cx="372" cy="34" r="4"/>
<line x1="372" y1="30" x2="372" y2="12"/>
<circle cx="372" cy="192" r="4"/>
<line x1="372" y1="196" x2="372" y2="214"/>
<line x1="412" y1="76" x2="448" y2="76"/>
<line x1="412" y1="150" x2="448" y2="150"/>
<line x1="395.2" y1="142.4" x2="404" y2="142.4" stroke-width="1.4"/>
</g>
<text x="92" y="122" text-anchor="middle" font-size="26">JK</text>
<text x="60" y="82" text-anchor="start" font-size="14">J</text>
<text x="60" y="156" text-anchor="start" font-size="14">K</text>
<text x="92" y="55" text-anchor="middle" font-size="12">PR</text>
<text x="92" y="180" text-anchor="middle" font-size="12">CLR</text>
<text x="124" y="82" text-anchor="end" font-size="16">Q</text>
<text x="124" y="156" text-anchor="end" font-size="16">Q</text>
<text x="92" y="240" text-anchor="middle" font-family="Mitr, Tahoma, sans-serif" font-size="15">ทำงานที่ขอบขาขึ้น (↑)</text>
<text x="372" y="122" text-anchor="middle" font-size="26">JK</text>
<text x="340" y="82" text-anchor="start" font-size="14">J</text>
<text x="340" y="156" text-anchor="start" font-size="14">K</text>
<text x="372" y="55" text-anchor="middle" font-size="12">PR</text>
<text x="372" y="180" text-anchor="middle" font-size="12">CLR</text>
<text x="404" y="82" text-anchor="end" font-size="16">Q</text>
<text x="404" y="156" text-anchor="end" font-size="16">Q</text>
<text x="372" y="240" text-anchor="middle" font-family="Mitr, Tahoma, sans-serif" font-size="15">ทำงานที่ขอบขาลง (↓)</text>
</g>
</svg>
</div>

### 7.8 D ฟลิป-ฟลอป

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="449" height="193" viewBox="0 0 449 193" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<text x="102" y="26" text-anchor="middle" font-family="Mitr, Tahoma, sans-serif" font-size="21" font-weight="500" fill="#3b8be8">ตารางการกระตุ้น</text>
<g stroke="currentColor" stroke-width="1.4" fill="none">
<rect x="16" y="42" width="172" height="143"/>
<line x1="16" y1="73" x2="188" y2="73"/>
<line x1="142" y1="42" x2="142" y2="185"/>
</g>
<text x="43.2" y="63" text-anchor="middle" font-size="16">Q(t)</text>
<text x="43.2" y="93" text-anchor="middle" font-size="16">0</text>
<text x="43.2" y="120" text-anchor="middle" font-size="16">0</text>
<text x="43.2" y="147" text-anchor="middle" font-size="16">1</text>
<text x="43.2" y="174" text-anchor="middle" font-size="16">1</text>
<text x="106.2" y="63" text-anchor="middle" font-size="16">Q(t+1)</text>
<text x="106.2" y="93" text-anchor="middle" font-size="16">0</text>
<text x="106.2" y="120" text-anchor="middle" font-size="16">1</text>
<text x="106.2" y="147" text-anchor="middle" font-size="16">0</text>
<text x="106.2" y="174" text-anchor="middle" font-size="16">1</text>
<text x="165" y="63" text-anchor="middle" font-size="16">D</text>
<text x="165" y="93" text-anchor="middle" font-size="16">0</text>
<text x="165" y="120" text-anchor="middle" font-size="16">1</text>
<text x="165" y="147" text-anchor="middle" font-size="16">0</text>
<text x="165" y="174" text-anchor="middle" font-size="16">1</text>
<text x="338.5" y="26" text-anchor="middle" font-family="Mitr, Tahoma, sans-serif" font-size="21" font-weight="500" fill="#e8743b">ตารางการทำงาน</text>
<g stroke="currentColor" stroke-width="1.4" fill="none">
<rect x="244" y="42" width="189" height="89"/>
<line x1="244" y1="73" x2="433" y2="73"/>
<line x1="290" y1="42" x2="290" y2="131"/>
</g>
<text x="267" y="63" text-anchor="middle" font-size="16">D</text>
<text x="267" y="93" text-anchor="middle" font-size="16">0</text>
<text x="267" y="120" text-anchor="middle" font-size="16">1</text>
<text x="325.8" y="63" text-anchor="middle" font-size="16">Q(t+1)</text>
<text x="325.8" y="93" text-anchor="middle" font-size="16">0</text>
<text x="325.8" y="120" text-anchor="middle" font-size="16">1</text>
<text x="397.2" y="63" text-anchor="middle" font-size="16">Q(t+1)</text>
<line x1="375.5" y1="49" x2="386.5" y2="49" stroke="currentColor" stroke-width="1.3"/>
<text x="397.2" y="93" text-anchor="middle" font-size="16">1</text>
<text x="397.2" y="120" text-anchor="middle" font-size="16">0</text>
</svg>
</div>

**สัญลักษณ์ D** : วงกลมที่ขา CLK คือขอบขาลง ไม่มีวงกลมคือขอบขาขึ้น ขา PR (คือ PS) และ CLR ทำงานที่ $0$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="560" height="252" viewBox="0 0 560 252" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<rect x="52" y="38" width="80" height="150" rx="2"/>
<line x1="16" y1="76" x2="52" y2="76"/>
<polyline points="52,134 64,143 52,152"/>
<line x1="16" y1="143" x2="52" y2="143"/>
<circle cx="92" cy="34" r="4"/>
<line x1="92" y1="30" x2="92" y2="12"/>
<circle cx="92" cy="192" r="4"/>
<line x1="92" y1="196" x2="92" y2="214"/>
<line x1="132" y1="76" x2="168" y2="76"/>
<line x1="132" y1="150" x2="168" y2="150"/>
<line x1="115.2" y1="142.4" x2="124" y2="142.4" stroke-width="1.4"/>
<rect x="332" y="38" width="80" height="150" rx="2"/>
<line x1="296" y1="76" x2="332" y2="76"/>
<polyline points="332,134 344,143 332,152"/>
<circle cx="328" cy="143" r="4"/>
<line x1="296" y1="143" x2="324" y2="143"/>
<circle cx="372" cy="34" r="4"/>
<line x1="372" y1="30" x2="372" y2="12"/>
<circle cx="372" cy="192" r="4"/>
<line x1="372" y1="196" x2="372" y2="214"/>
<line x1="412" y1="76" x2="448" y2="76"/>
<line x1="412" y1="150" x2="448" y2="150"/>
<line x1="395.2" y1="142.4" x2="404" y2="142.4" stroke-width="1.4"/>
</g>
<text x="92" y="122" text-anchor="middle" font-size="26">D</text>
<text x="60" y="82" text-anchor="start" font-size="14">D</text>
<text x="92" y="55" text-anchor="middle" font-size="12">PR</text>
<text x="92" y="180" text-anchor="middle" font-size="12">CLR</text>
<text x="124" y="82" text-anchor="end" font-size="16">Q</text>
<text x="124" y="156" text-anchor="end" font-size="16">Q</text>
<text x="92" y="240" text-anchor="middle" font-family="Mitr, Tahoma, sans-serif" font-size="15">ทำงานที่ขอบขาขึ้น (↑)</text>
<text x="372" y="122" text-anchor="middle" font-size="26">D</text>
<text x="340" y="82" text-anchor="start" font-size="14">D</text>
<text x="372" y="55" text-anchor="middle" font-size="12">PR</text>
<text x="372" y="180" text-anchor="middle" font-size="12">CLR</text>
<text x="404" y="82" text-anchor="end" font-size="16">Q</text>
<text x="404" y="156" text-anchor="end" font-size="16">Q</text>
<text x="372" y="240" text-anchor="middle" font-family="Mitr, Tahoma, sans-serif" font-size="15">ทำงานที่ขอบขาลง (↓)</text>
</g>
</svg>
</div>

### 7.9 T ฟลิป-ฟลอป

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="449" height="193" viewBox="0 0 449 193" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<text x="102" y="26" text-anchor="middle" font-family="Mitr, Tahoma, sans-serif" font-size="21" font-weight="500" fill="#3b8be8">ตารางการกระตุ้น</text>
<g stroke="currentColor" stroke-width="1.4" fill="none">
<rect x="16" y="42" width="172" height="143"/>
<line x1="16" y1="73" x2="188" y2="73"/>
<line x1="142" y1="42" x2="142" y2="185"/>
</g>
<text x="43.2" y="63" text-anchor="middle" font-size="16">Q(t)</text>
<text x="43.2" y="93" text-anchor="middle" font-size="16">0</text>
<text x="43.2" y="120" text-anchor="middle" font-size="16">0</text>
<text x="43.2" y="147" text-anchor="middle" font-size="16">1</text>
<text x="43.2" y="174" text-anchor="middle" font-size="16">1</text>
<text x="106.2" y="63" text-anchor="middle" font-size="16">Q(t+1)</text>
<text x="106.2" y="93" text-anchor="middle" font-size="16">0</text>
<text x="106.2" y="120" text-anchor="middle" font-size="16">1</text>
<text x="106.2" y="147" text-anchor="middle" font-size="16">0</text>
<text x="106.2" y="174" text-anchor="middle" font-size="16">1</text>
<text x="165" y="63" text-anchor="middle" font-size="16">T</text>
<text x="165" y="93" text-anchor="middle" font-size="16">0</text>
<text x="165" y="120" text-anchor="middle" font-size="16">1</text>
<text x="165" y="147" text-anchor="middle" font-size="16">1</text>
<text x="165" y="174" text-anchor="middle" font-size="16">0</text>
<text x="338.5" y="26" text-anchor="middle" font-family="Mitr, Tahoma, sans-serif" font-size="21" font-weight="500" fill="#e8743b">ตารางการทำงาน</text>
<g stroke="currentColor" stroke-width="1.4" fill="none">
<rect x="244" y="42" width="189" height="89"/>
<line x1="244" y1="73" x2="433" y2="73"/>
<line x1="290" y1="42" x2="290" y2="131"/>
</g>
<text x="267" y="63" text-anchor="middle" font-size="16">T</text>
<text x="267" y="93" text-anchor="middle" font-size="16">0</text>
<text x="267" y="120" text-anchor="middle" font-size="16">1</text>
<text x="325.8" y="63" text-anchor="middle" font-size="16">Q(t+1)</text>
<text x="325.8" y="93" text-anchor="middle" font-size="16">Q(t)</text>
<text x="325.8" y="120" text-anchor="middle" font-size="16">Q(t)</text>
<line x1="312.5" y1="106" x2="323.5" y2="106" stroke="currentColor" stroke-width="1.3"/>
<text x="397.2" y="63" text-anchor="middle" font-size="16">Q(t+1)</text>
<line x1="375.5" y1="49" x2="386.5" y2="49" stroke="currentColor" stroke-width="1.3"/>
<text x="397.2" y="93" text-anchor="middle" font-size="16">Q(t)</text>
<line x1="384" y1="79" x2="395" y2="79" stroke="currentColor" stroke-width="1.3"/>
<text x="397.2" y="120" text-anchor="middle" font-size="16">Q(t)</text>
</svg>
</div>

**สัญลักษณ์ T** : วงกลมที่ขา CLK คือขอบขาลง ไม่มีวงกลมคือขอบขาขึ้น ขา PR (คือ PS) และ CLR ทำงานที่ $0$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="560" height="252" viewBox="0 0 560 252" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<rect x="52" y="38" width="80" height="150" rx="2"/>
<line x1="16" y1="76" x2="52" y2="76"/>
<polyline points="52,134 64,143 52,152"/>
<line x1="16" y1="143" x2="52" y2="143"/>
<circle cx="92" cy="34" r="4"/>
<line x1="92" y1="30" x2="92" y2="12"/>
<circle cx="92" cy="192" r="4"/>
<line x1="92" y1="196" x2="92" y2="214"/>
<line x1="132" y1="76" x2="168" y2="76"/>
<line x1="132" y1="150" x2="168" y2="150"/>
<line x1="115.2" y1="142.4" x2="124" y2="142.4" stroke-width="1.4"/>
<rect x="332" y="38" width="80" height="150" rx="2"/>
<line x1="296" y1="76" x2="332" y2="76"/>
<polyline points="332,134 344,143 332,152"/>
<circle cx="328" cy="143" r="4"/>
<line x1="296" y1="143" x2="324" y2="143"/>
<circle cx="372" cy="34" r="4"/>
<line x1="372" y1="30" x2="372" y2="12"/>
<circle cx="372" cy="192" r="4"/>
<line x1="372" y1="196" x2="372" y2="214"/>
<line x1="412" y1="76" x2="448" y2="76"/>
<line x1="412" y1="150" x2="448" y2="150"/>
<line x1="395.2" y1="142.4" x2="404" y2="142.4" stroke-width="1.4"/>
</g>
<text x="92" y="122" text-anchor="middle" font-size="26">T</text>
<text x="60" y="82" text-anchor="start" font-size="14">T</text>
<text x="92" y="55" text-anchor="middle" font-size="12">PR</text>
<text x="92" y="180" text-anchor="middle" font-size="12">CLR</text>
<text x="124" y="82" text-anchor="end" font-size="16">Q</text>
<text x="124" y="156" text-anchor="end" font-size="16">Q</text>
<text x="92" y="240" text-anchor="middle" font-family="Mitr, Tahoma, sans-serif" font-size="15">ทำงานที่ขอบขาขึ้น (↑)</text>
<text x="372" y="122" text-anchor="middle" font-size="26">T</text>
<text x="340" y="82" text-anchor="start" font-size="14">T</text>
<text x="372" y="55" text-anchor="middle" font-size="12">PR</text>
<text x="372" y="180" text-anchor="middle" font-size="12">CLR</text>
<text x="404" y="82" text-anchor="end" font-size="16">Q</text>
<text x="404" y="156" text-anchor="end" font-size="16">Q</text>
<text x="372" y="240" text-anchor="middle" font-family="Mitr, Tahoma, sans-serif" font-size="15">ทำงานที่ขอบขาลง (↓)</text>
</g>
</svg>
</div>

### 7.10 ขา PRESET และ CLEAR

- ทำงานเมื่อเป็น $0$ (วงกลมเล็กที่ขา) และทำงาน **ทันที** ไม่ต้องรอ CLK ใช้ก่อนอินพุตอื่นทุกตัว
- PRESET $=0$ ได้ $Q=1$ , CLEAR $=0$ ได้ $Q=0$ ถ้าเป็น $0$ ทั้งคู่ได้ $Q=\overline{Q}=1$ ไม่ควรใช้
- ปกติให้ PRESET $=$ CLEAR $=1$ แล้วฟลิป-ฟลอปทำงานตาม CLK (ตัวอย่างคือ JK ใน IC 74LS73 ที่ทำงานที่ขอบขาลง)

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="456" height="301" viewBox="0 0 456 301" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<text x="228" y="26" text-anchor="middle" font-family="Mitr, Tahoma, sans-serif" font-size="21" font-weight="500" fill="#e8743b">ตารางการทำงาน</text>
<g stroke="currentColor" stroke-width="1.4" fill="none">
<rect x="16" y="42" width="424" height="251"/>
<line x1="16" y1="73" x2="440" y2="73"/>
<line x1="345" y1="42" x2="345" y2="293"/>
<line x1="16" y1="154" x2="440" y2="154" stroke-width="0.9" stroke-opacity="0.55"/>
<line x1="16" y1="262" x2="440" y2="262" stroke-width="0.9" stroke-opacity="0.55"/>
</g>
<text x="57" y="63" text-anchor="middle" font-size="16">PRESET</text>
<text x="57" y="93" text-anchor="middle" font-size="16">0</text>
<text x="57" y="120" text-anchor="middle" font-size="16">0</text>
<text x="57" y="147" text-anchor="middle" font-size="16">1</text>
<text x="57" y="174" text-anchor="middle" font-size="16">1</text>
<text x="57" y="201" text-anchor="middle" font-size="16">1</text>
<text x="57" y="228" text-anchor="middle" font-size="16">1</text>
<text x="57" y="255" text-anchor="middle" font-size="16">1</text>
<text x="57" y="282" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="63" text-anchor="middle" font-size="16">CLEAR</text>
<text x="134.5" y="93" text-anchor="middle" font-size="16">0</text>
<text x="134.5" y="120" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="147" text-anchor="middle" font-size="16">0</text>
<text x="134.5" y="174" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="201" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="228" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="255" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="282" text-anchor="middle" font-size="16">1</text>
<text x="212" y="63" text-anchor="middle" font-size="16">CLOCK</text>
<text x="212" y="93" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="212" y="120" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="212" y="147" text-anchor="middle" font-size="16" font-style="italic">x</text>
<line x1="212" y1="163" x2="212" y2="176" stroke="currentColor" stroke-width="1.6"/>
<polygon points="212,177 207.5,170 216.5,170" fill="currentColor"/>
<line x1="212" y1="190" x2="212" y2="203" stroke="currentColor" stroke-width="1.6"/>
<polygon points="212,204 207.5,197 216.5,197" fill="currentColor"/>
<line x1="212" y1="217" x2="212" y2="230" stroke="currentColor" stroke-width="1.6"/>
<polygon points="212,231 207.5,224 216.5,224" fill="currentColor"/>
<line x1="212" y1="244" x2="212" y2="257" stroke="currentColor" stroke-width="1.6"/>
<polygon points="212,258 207.5,251 216.5,251" fill="currentColor"/>
<text x="212" y="282" text-anchor="middle" font-size="16" font-family="Mitr, Tahoma, sans-serif" font-size="14">ไม่มีขอบ</text>
<text x="276" y="63" text-anchor="middle" font-size="16">J</text>
<text x="276" y="93" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="276" y="120" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="276" y="147" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="276" y="174" text-anchor="middle" font-size="16">0</text>
<text x="276" y="201" text-anchor="middle" font-size="16">1</text>
<text x="276" y="228" text-anchor="middle" font-size="16">0</text>
<text x="276" y="255" text-anchor="middle" font-size="16">1</text>
<text x="276" y="282" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="322" y="63" text-anchor="middle" font-size="16">K</text>
<text x="322" y="93" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="322" y="120" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="322" y="147" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="322" y="174" text-anchor="middle" font-size="16">0</text>
<text x="322" y="201" text-anchor="middle" font-size="16">0</text>
<text x="322" y="228" text-anchor="middle" font-size="16">1</text>
<text x="322" y="255" text-anchor="middle" font-size="16">1</text>
<text x="322" y="282" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="368.8" y="63" text-anchor="middle" font-size="16">Q</text>
<text x="368.8" y="93" text-anchor="middle" font-size="16">1</text>
<text x="368.8" y="120" text-anchor="middle" font-size="16">1</text>
<text x="368.8" y="147" text-anchor="middle" font-size="16">0</text>
<text x="368.8" y="174" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<text x="368.8" y="201" text-anchor="middle" font-size="16">1</text>
<text x="368.8" y="228" text-anchor="middle" font-size="16">0</text>
<text x="368.8" y="255" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<line x1="359" y1="241" x2="370" y2="241" stroke="currentColor" stroke-width="1.3"/>
<text x="368.8" y="282" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<text x="416.2" y="63" text-anchor="middle" font-size="16">Q</text>
<line x1="410.5" y1="49" x2="421.5" y2="49" stroke="currentColor" stroke-width="1.3"/>
<text x="416.2" y="93" text-anchor="middle" font-size="16">1</text>
<text x="416.2" y="120" text-anchor="middle" font-size="16">0</text>
<text x="416.2" y="147" text-anchor="middle" font-size="16">1</text>
<text x="416.2" y="174" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<line x1="406.5" y1="160" x2="417.5" y2="160" stroke="currentColor" stroke-width="1.3"/>
<text x="416.2" y="201" text-anchor="middle" font-size="16">0</text>
<text x="416.2" y="228" text-anchor="middle" font-size="16">1</text>
<text x="416.2" y="255" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<text x="416.2" y="282" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<line x1="406.5" y1="268" x2="417.5" y2="268" stroke="currentColor" stroke-width="1.3"/>
</svg>
</div>

### 7.11 สรุปตารางและสมการของบท

| ชนิด | อินพุต | สมการแสดงลักษณะ | การทำงาน |
|:--|:-:|:--|:--|
| RS (NOR) | $R, S$ | $Q(t+1) = S + \overline{R}\,Q(t)$ | $RS=00$ คงเดิม, $01$ Set, $10$ Reset, $11$ ห้ามใช้ |
| RS (NAND) | $R, S$ | $Q(t+1) = \overline{R} + S\,Q(t)$ | $RS=11$ คงเดิม, $01$ Set, $10$ Reset, $00$ ห้ามใช้ |
| JK | $J, K$ | $Q(t+1) = J\,\overline{Q}(t) + \overline{K}\,Q(t)$ | $JK=00$ คงเดิม, $01$ Reset, $10$ Set, $11$ สลับ |
| D | $D$ | $Q(t+1) = D$ | ตาม $D$ |
| T | $T$ | $Q(t+1) = \overline{T}\,Q(t) + T\,\overline{Q}(t)$ | $T=0$ คงเดิม, $T=1$ สลับ |

**ตารางการกระตุ้นรวม** ($x$ คือค่าอะไรก็ได้, อินพุตเรียงตามหัวตาราง)

| $Q(t)$ $\to$ $Q(t+1)$ | RS (NOR) $R, S$ | RS (NAND) $R, S$ | JK $J, K$ | D $D$ | T $T$ |
|:-:|:-:|:-:|:-:|:-:|:-:|
| $0 \to 0$ | $x,\ 0$ | $1,\ x$ | $0,\ x$ | $0$ | $0$ |
| $0 \to 1$ | $0,\ 1$ | $0,\ 1$ | $1,\ x$ | $1$ | $1$ |
| $1 \to 0$ | $1,\ 0$ | $1,\ 0$ | $x,\ 1$ | $0$ | $1$ |
| $1 \to 1$ | $0,\ x$ | $x,\ 1$ | $x,\ 0$ | $1$ | $0$ |

## บทที่ 8 วงจรนับ (Counter)

### 8.1 วงจรนับและมอดูลัส (Mod)

- วงจรนับเลขฐานสองใช้ฟลิป-ฟลอป 1 ตัวต่อ 1 บิต ค่าของการนับคือ $Q$ ของฟลิป-ฟลอป
- **มอดูลัส (Mod)** คือจำนวนค่าที่นับได้ แล้วกลับไปเริ่มใหม่

$$\text{Mod} = 2^{n} \qquad \text{นับได้ } 0 \text{ ถึง } 2^{n}-1$$

$$\text{ต้องการนับ } M \text{ ค่า} \;\Rightarrow\; \text{เลือก } n \text{ ที่ } 2^{n} \ge M$$

| จำนวนฟลิป-ฟลอป $n$ | Mod | ค่าที่นับได้ |
|:-:|:-:|:-:|
| 1 | $2^{1} = 2$ | $0$ ถึง $1$ |
| 2 | $2^{2} = 4$ | $0$ ถึง $3$ |
| 3 | $2^{3} = 8$ | $0$ ถึง $7$ |
| 4 | $2^{4} = 16$ | $0$ ถึง $15$ |
| 5 | $2^{5} = 32$ | $0$ ถึง $31$ |
| 6 | $2^{6} = 64$ | $0$ ถึง $63$ |
| 7 | $2^{7} = 128$ | $0$ ถึง $127$ |
| 8 | $2^{8} = 256$ | $0$ ถึง $255$ |

วงจรนับมี 2 ชนิด คือ **Asynchronous** (ไม่ได้จังหวะกัน) และ **Synchronous** (ได้จังหวะกัน)

### 8.2 Asynchronous Counter (Ripple Counter)

**คืออะไร** วงจรนับที่ฟลิป-ฟลอปแต่ละตัวทำงานไม่พร้อมกัน ตัวแรกรับสัญญาณ Clock ตัวต่อไปรับ $Q$ ของตัวก่อนหน้าเป็น Clock เรียงต่อกันเป็นทอด ๆ

- ใช้ JK ที่ $J=K=1$ หรือ T ฟลิป-ฟลอป (สลับสถานะทุกครั้งที่ถูกกระตุ้น) ทำงานที่ขอบขาลง
- ฟลิป-ฟลอปแต่ละตัวแบ่งความถี่ลงครึ่งหนึ่ง
- **ข้อดี** สร้างง่าย
- **ข้อเสีย** ช้า เพราะต้องรอเวลาของฟลิป-ฟลอปทุกตัวต่อกัน และผิดพลาดง่ายเมื่อความถี่สูง

### 8.3 วงจรนับ Mod M ด้วยการล้าง (Clear)

ต้องการนับ $0$ ถึง $M-1$ โดยไม่ปล่อยให้นับถึงค่าสูงสุด ให้ล้างฟลิป-ฟลอปทุกตัวเมื่อนับถึง $M$

1. เลือก $n$ ให้ $2^{n} \ge M$
2. เขียน $M$ เป็นเลขฐานสอง
3. ต่อ $Q$ ของฟลิป-ฟลอปที่เป็น $1$ ในเลข $M$ เข้า NAND เกต
4. ต่อเอาต์พุตของ NAND เข้าขา CLR (ทำงานเมื่อเป็น $0$) ของฟลิป-ฟลอปทุกตัว

ค่า $M$ เกิดขึ้นเพียงชั่วขณะแล้วถูกล้าง ค่าที่นับได้จริงคือ $0$ ถึง $M-1$

**ตารางการต่อ NAND สำหรับวงจรนับ 4 บิต** ($Q_A$ เป็นบิตสูงสุด $Q_D$ เป็นบิตต่ำสุด)

| Mod $M$ | $M$ ฐานสอง $Q_AQ_BQ_CQ_D$ | ต่อเข้า NAND |
|:-:|:-:|:-:|
| 3 | $0011$ | $Q_C$, $Q_D$ |
| 5 | $0101$ | $Q_B$, $Q_D$ |
| 6 | $0110$ | $Q_B$, $Q_C$ |
| 7 | $0111$ | $Q_B$, $Q_C$, $Q_D$ |
| 9 | $1001$ | $Q_A$, $Q_D$ |
| 10 | $1010$ | $Q_A$, $Q_C$ |
| 11 | $1011$ | $Q_A$, $Q_C$, $Q_D$ |
| 12 | $1100$ | $Q_A$, $Q_B$ |
| 13 | $1101$ | $Q_A$, $Q_B$, $Q_D$ |
| 14 | $1110$ | $Q_A$, $Q_B$, $Q_C$ |
| 15 | $1111$ | $Q_A$, $Q_B$, $Q_C$, $Q_D$ |

ตัวอย่าง Mod 10 (วงจรนับสิบ) ต่อ $Q_A$ และ $Q_C$ เข้า NAND

### 8.4 Synchronous Counter

**คืออะไร** วงจรนับที่ฟลิป-ฟลอปทุกตัวรับสัญญาณ Clock ตัวเดียวกัน จึงทำงานพร้อมกัน ค่าที่อินพุตของแต่ละตัว ($J, K$ หรือ $T$) ที่กำหนดว่าตัวไหนจะเปลี่ยน

- **ข้อดี** เร็วกว่า เพราะเวลาทำงานเท่ากับฟลิป-ฟลอปตัวเดียว และผิดพลาดน้อยกว่า
- **ข้อเสีย** ต้องมีเกตต่อเพิ่มที่อินพุตของฟลิป-ฟลอป

$$\text{ตัวนับขึ้น: ฟลิป-ฟลอปบิตที่ } k \text{ สลับเมื่อบิตที่ต่ำกว่าเป็น } 1 \text{ ทั้งหมด} \quad J_k = K_k = T_k = Q_{k-1}Q_{k-2}\cdots Q_{0}$$

### 8.5 ขั้นตอนออกแบบ Synchronous Counter

1. หาจำนวนฟลิป-ฟลอป $n$ ที่ $2^{n} \ge$ จำนวนสถานะ แล้วเขียนตารางลำดับการนับ
2. เขียนตารางเปลี่ยนสถานะ (สถานะปัจจุบัน $\to$ สถานะถัดไป) แล้วเติมอินพุตของฟลิป-ฟลอปแต่ละตัวจากตารางกระตุ้นของชนิดที่โจทย์กำหนด
3. ลดรูปอินพุตแต่ละตัวด้วย K-map (สถานะที่ไม่ใช้เป็น $x$)
4. นำสมการมาเขียนวงจร (ทุกตัวรับ Clock เดียวกัน)

**ตารางกระตุ้นที่ใช้** (อินพุตเรียงตามหัวตาราง $x$ คือค่าอะไรก็ได้)

| $Q(t) \to Q(t+1)$ | RS (NOR): $R, S$ | JK: $J, K$ | D: $D$ | T: $T$ |
|:-:|:-:|:-:|:-:|:-:|
| $0 \to 0$ | $x,\ 0$ | $0,\ x$ | $0$ | $0$ |
| $0 \to 1$ | $0,\ 1$ | $1,\ x$ | $1$ | $1$ |
| $1 \to 0$ | $1,\ 0$ | $x,\ 1$ | $0$ | $1$ |
| $1 \to 1$ | $0,\ x$ | $x,\ 0$ | $1$ | $0$ |

- ตรวจสถานะที่ไม่ใช้ว่ากลับเข้าลำดับการนับได้ (ใช้ RS ต้องไม่ได้ $R=S=1$)
- ตรวจคำตอบโดยแทนสถานะปัจจุบันลงสมการ ว่าได้สถานะถัดไปตรงตามลำดับ

## บทที่ 9 ภาษา Verilog เบื้องต้น

### 9.1 โครงสร้างของโมดูล

Verilog ใช้ **โมดูล (module)** แทนวงจรหนึ่งวงจร ขึ้นต้นด้วย `module` และจบด้วย `endmodule`

```verilog
module ชื่อโมดูล (port_list);
  input  ...;    // ประกาศพอร์ต
  output ...;
  wire   ...;    // สายภายใน
  ...            // เนื้อวงจร : เกต หรือ assign
endmodule
```

- **Interface** คือ port list (ชื่อพอร์ตในวงเล็บ คั่นด้วย `,`) และการประกาศทิศทาง `input`, `output`, `inout`
- **Body** คือเนื้อวงจร (เกต, `assign`, ...)
- คำสั่งจบด้วย `;` ตัวพิมพ์เล็กใหญ่ต่างกัน
- หมายเหตุ (comment) : `// ...` หนึ่งบรรทัด หรือ `/* ... */` หลายบรรทัด

### 9.2 ค่า สัญญาณ และตัวกระทำ

- ค่าของสัญญาณมี 4 ค่า : `0`, `1`, `x` (ไม่ทราบค่า), `z` (วงจรเปิด)
- `wire` ใช้เป็นสายต่อ (ไม่เก็บค่า) เอาต์พุตของเกตและด้านซ้ายของ `assign` ต้องเป็น `wire`
- เลขคงที่เขียนเป็น `ขนาด'ฐานค่า` เช่น `4'b1010` (ฐานสอง), `8'hFF` (ฐานสิบหก), `4'd5` (ฐานสิบ)

**ตัวกระทำที่ใช้ทีละบิต** `~` (NOT), `&` (AND), `|` (OR), `^` (XOR), `~^` (XNOR)

**ตัวกระทำเงื่อนไข** `เงื่อนไข ? ค่าเมื่อจริง : ค่าเมื่อเท็จ` ใช้เลือกค่า (เป็น MUX)

### 9.3 เขียนแบบ Structural (ต่อเกตพื้นฐาน)

เกตพื้นฐานที่ Verilog มีให้ : `and`, `nand`, `or`, `nor`, `xor`, `xnor`, `not`, `buf` เขียนเป็นชนิดเกต แล้วรายการพอร์ตในวงเล็บ **พอร์ตแรกเป็นเอาต์พุต ที่เหลือเป็นอินพุต**

```verilog
and (Y, A, B);        // Y = A AND B
or  (Y, A, B, C);     // Y = A OR B OR C  (อินพุตกี่ตัวก็ได้)
not (NotC, C);        // NotC = NOT C
```

**วิธีเขียน** (1) ตั้งชื่อสายภายในที่เป็นเอาต์พุตของเกต (2) ประกาศ `wire` ให้สายภายใน (3) เขียนเกตทีละตัว พอร์ตแรกเป็นเอาต์พุต เกตทุกตัวทำงานพร้อมกัน สลับลำดับบรรทัดแล้ววงจรเหมือนเดิม

**ตัวอย่าง** วงจร $Y = AB + \overline{C}D$

```verilog
module Ckt (Y, A, B, C, D);
output Y;
input A, B, C, D;
wire NotC, P, Q;

not (NotC, C);
and (P, A, B);
and (Q, NotC, D);
or (Y, P, Q);
endmodule
```

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="742" height="444" viewBox="0 0 742 444" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<polygon points="200,76 200,100 222,88"/>
<circle cx="227" cy="88" r="5"/>
<line x1="102" y1="88" x2="200" y2="88"/>
<path d="M200,136 H226 A26,33 0 0 1 226,202 H200 Z"/>
<line x1="40" y1="158" x2="200" y2="158"/>
<line x1="71" y1="180" x2="200" y2="180"/>
<line x1="232" y1="88" x2="290.2" y2="88"/>
<line x1="252" y1="169" x2="310.2" y2="169"/>
<path d="M364.2,236 H390.2 A26,33 0 0 1 390.2,302 H364.2 Z"/>
<line x1="290.2" y1="258" x2="364.2" y2="258"/>
<line x1="133" y1="280" x2="364.2" y2="280"/>
<line x1="416.2" y1="269" x2="450.3" y2="269"/>
<path d="M504.3,336 C526.3,336 552.3,352.5 564.3,369 C552.3,385.5 526.3,402 504.3,402 Q518.3,369 504.3,336 Z"/>
<line x1="310.2" y1="358" x2="510.5" y2="358"/>
<line x1="450.3" y1="380" x2="510.5" y2="380"/>
<line x1="564.3" y1="369" x2="590.3" y2="369"/>
<line x1="590.3" y1="369" x2="646.3" y2="369"/>
<line x1="40" y1="36" x2="40" y2="158"/>
<line x1="71" y1="36" x2="71" y2="180"/>
<line x1="102" y1="36" x2="102" y2="88"/>
<line x1="133" y1="36" x2="133" y2="280"/>
<line x1="290.2" y1="88" x2="290.2" y2="258"/>
<line x1="310.2" y1="169" x2="310.2" y2="358"/>
<line x1="450.3" y1="269" x2="450.3" y2="380"/>
<circle cx="102" cy="88" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="40" cy="158" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="180" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="290.2" cy="258" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="133" cy="280" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="310.2" cy="358" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="450.3" cy="380" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="290.2" cy="88" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="310.2" cy="169" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="450.3" cy="269" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="240" y="81" text-anchor="start" font-size="13">NotC</text>
<text x="260" y="162" text-anchor="start" font-size="13">P</text>
<text x="424.2" y="262" text-anchor="start" font-size="13">Q</text>
<text x="654.3" y="375" text-anchor="start">Y</text>
<text x="40" y="28" text-anchor="middle" font-size="16">A</text>
<text x="71" y="28" text-anchor="middle" font-size="16">B</text>
<text x="102" y="28" text-anchor="middle" font-size="16">C</text>
<text x="133" y="28" text-anchor="middle" font-size="16">D</text>
</g>
</svg>
</div>

**ตัวอย่าง** มัลติเพลกซ์เซอร์ 4-to-1 : $Out = In_{(2\,\mathit{Sel1} + \mathit{Sel0})}$

```verilog
module mux_4_to_1 (Out, In0, In1, In2, In3, Sel1, Sel0);
output Out;
input In0, In1, In2, In3, Sel0, Sel1;

wire NotSel0, NotSel1;
wire Y0, Y1, Y2, Y3;

not (NotSel0, Sel0);
not (NotSel1, Sel1);
and (Y0, In0, NotSel1, NotSel0);
and (Y1, In1, NotSel1, Sel0);
and (Y2, In2, Sel1, NotSel0);
and (Y3, In3, Sel1, Sel0);
or (Out, Y0, Y1, Y2, Y3);
endmodule
```

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="1054" height="838" viewBox="0 0 1054 838" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<polygon points="424,76 424,100 446,88"/>
<circle cx="451" cy="88" r="5"/>
<line x1="272" y1="88" x2="424" y2="88"/>
<polygon points="424,138 424,162 446,150"/>
<circle cx="451" cy="150" r="5"/>
<line x1="330" y1="150" x2="424" y2="150"/>
<path d="M424,198 H450 A26,44 0 0 1 450,286 H424 Z"/>
<line x1="214" y1="220" x2="424" y2="220"/>
<line x1="330" y1="242" x2="424" y2="242"/>
<line x1="272" y1="264" x2="424" y2="264"/>
<line x1="456" y1="88" x2="536.2" y2="88"/>
<line x1="456" y1="150" x2="556.2" y2="150"/>
<line x1="476" y1="242" x2="576.2" y2="242"/>
<path d="M630.2,320 H656.2 A26,44 0 0 1 656.2,408 H630.2 Z"/>
<line x1="40" y1="342" x2="630.2" y2="342"/>
<line x1="556.2" y1="364" x2="630.2" y2="364"/>
<line x1="536.2" y1="386" x2="630.2" y2="386"/>
<path d="M630.2,442 H656.2 A26,44 0 0 1 656.2,530 H630.2 Z"/>
<line x1="98" y1="464" x2="630.2" y2="464"/>
<line x1="556.2" y1="486" x2="630.2" y2="486"/>
<line x1="272" y1="508" x2="630.2" y2="508"/>
<path d="M630.2,564 H656.2 A26,44 0 0 1 656.2,652 H630.2 Z"/>
<line x1="156" y1="586" x2="630.2" y2="586"/>
<line x1="330" y1="608" x2="630.2" y2="608"/>
<line x1="536.2" y1="630" x2="630.2" y2="630"/>
<line x1="682.2" y1="364" x2="722.1" y2="364"/>
<line x1="682.2" y1="486" x2="742.1" y2="486"/>
<line x1="682.2" y1="608" x2="762.1" y2="608"/>
<path d="M816.1,686 C838.1,686 864.1,713.5 876.1,741 C864.1,768.5 838.1,796 816.1,796 Q830.1,741 816.1,686 Z"/>
<line x1="722.1" y1="708" x2="820.6" y2="708"/>
<line x1="742.1" y1="730" x2="822.8" y2="730"/>
<line x1="762.1" y1="752" x2="822.8" y2="752"/>
<line x1="576.2" y1="774" x2="820.6" y2="774"/>
<line x1="876.1" y1="741" x2="902.1" y2="741"/>
<line x1="902.1" y1="741" x2="958.1" y2="741"/>
<line x1="40" y1="36" x2="40" y2="342"/>
<line x1="98" y1="36" x2="98" y2="464"/>
<line x1="156" y1="36" x2="156" y2="586"/>
<line x1="214" y1="36" x2="214" y2="220"/>
<line x1="272" y1="36" x2="272" y2="508"/>
<line x1="330" y1="36" x2="330" y2="608"/>
<line x1="536.2" y1="88" x2="536.2" y2="630"/>
<line x1="556.2" y1="150" x2="556.2" y2="486"/>
<line x1="576.2" y1="242" x2="576.2" y2="774"/>
<line x1="722.1" y1="364" x2="722.1" y2="708"/>
<line x1="742.1" y1="486" x2="742.1" y2="730"/>
<line x1="762.1" y1="608" x2="762.1" y2="752"/>
<circle cx="272" cy="88" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="330" cy="150" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="214" cy="220" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="330" cy="242" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="272" cy="264" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="40" cy="342" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="556.2" cy="364" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="536.2" cy="386" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="98" cy="464" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="556.2" cy="486" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="272" cy="508" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="156" cy="586" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="330" cy="608" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="536.2" cy="630" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="722.1" cy="708" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="742.1" cy="730" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="762.1" cy="752" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="576.2" cy="774" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="536.2" cy="88" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="556.2" cy="150" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="576.2" cy="242" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="722.1" cy="364" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="742.1" cy="486" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="762.1" cy="608" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="464" y="81" text-anchor="start" font-size="13">NotSel0</text>
<text x="464" y="143" text-anchor="start" font-size="13">NotSel1</text>
<text x="484" y="235" text-anchor="start" font-size="13">Y<tspan dy="4" font-size="9">3</tspan></text>
<text x="690.2" y="357" text-anchor="start" font-size="13">Y<tspan dy="4" font-size="9">0</tspan></text>
<text x="690.2" y="479" text-anchor="start" font-size="13">Y<tspan dy="4" font-size="9">1</tspan></text>
<text x="690.2" y="601" text-anchor="start" font-size="13">Y<tspan dy="4" font-size="9">2</tspan></text>
<text x="966.1" y="747" text-anchor="start">Out</text>
<text x="40" y="28" text-anchor="middle" font-size="16">In0</text>
<text x="98" y="28" text-anchor="middle" font-size="16">In1</text>
<text x="156" y="28" text-anchor="middle" font-size="16">In2</text>
<text x="214" y="28" text-anchor="middle" font-size="16">In3</text>
<text x="272" y="28" text-anchor="middle" font-size="16">Sel0</text>
<text x="330" y="28" text-anchor="middle" font-size="16">Sel1</text>
</g>
</svg>
</div>

### 9.4 เขียนแบบ Dataflow (assign)

**`assign`** ส่งค่าของนิพจน์ไปยัง `wire` ทางซ้ายมือ เขียนเป็นสมการลอจิกด้วยตัวกระทำ `~ & | ^` ได้เลย คำสั่ง `assign` ทุกคำสั่งทำงานพร้อมกัน

```verilog
assign Y = (A & B) | (~C & D);
```

**ตัวกระทำเงื่อนไข `? :`** ใช้เลือกค่า เช่น `assign Out = Sel ? In1 : In0;` ถ้า $Sel=1$ ได้ $In1$ ถ้า $Sel=0$ ได้ $In0$ (คือ MUX 2-to-1)

**ตัวอย่าง** MUX 2-to-1 : $Out = Sel\,In1 + \overline{Sel}\,In0$

```verilog
module Mux2to1 (Out, In0, In1, Sel);
output Out;
input In0, In1, Sel;

assign Out = Sel ? In1 : In0;
endmodule
```

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="745" height="444" viewBox="0 0 745 444" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<polygon points="223,76 223,100 245,88"/>
<circle cx="250" cy="88" r="5"/>
<line x1="138" y1="88" x2="223" y2="88"/>
<path d="M223,136 H249 A26,33 0 0 1 249,202 H223 Z"/>
<line x1="89" y1="158" x2="223" y2="158"/>
<line x1="138" y1="180" x2="223" y2="180"/>
<line x1="255" y1="88" x2="301" y2="88"/>
<line x1="275" y1="169" x2="321" y2="169"/>
<path d="M375,236 H401 A26,33 0 0 1 401,302 H375 Z"/>
<line x1="40" y1="258" x2="375" y2="258"/>
<line x1="301" y1="280" x2="375" y2="280"/>
<line x1="427" y1="269" x2="453" y2="269"/>
<path d="M507,336 C529,336 555,352.5 567,369 C555,385.5 529,402 507,402 Q521,369 507,336 Z"/>
<line x1="321" y1="358" x2="513.2" y2="358"/>
<line x1="453" y1="380" x2="513.2" y2="380"/>
<line x1="567" y1="369" x2="593" y2="369"/>
<line x1="593" y1="369" x2="649" y2="369"/>
<line x1="40" y1="36" x2="40" y2="258"/>
<line x1="89" y1="36" x2="89" y2="158"/>
<line x1="138" y1="36" x2="138" y2="180"/>
<line x1="301" y1="88" x2="301" y2="280"/>
<line x1="321" y1="169" x2="321" y2="358"/>
<line x1="453" y1="269" x2="453" y2="380"/>
<circle cx="138" cy="88" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="89" cy="158" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="138" cy="180" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="40" cy="258" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="301" cy="280" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="321" cy="358" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="453" cy="380" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="301" cy="88" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="321" cy="169" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="453" cy="269" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="657" y="375" text-anchor="start">Out</text>
<text x="40" y="28" text-anchor="middle" font-size="16">In0</text>
<text x="89" y="28" text-anchor="middle" font-size="16">In1</text>
<text x="138" y="28" text-anchor="middle" font-size="16">Sel</text>
</g>
</svg>
</div>

**ตัวอย่าง** มัลติเพลกซ์เซอร์ 4-to-1 แบบ Dataflow ได้วงจรเดียวกับแบบ Structural ใน 9.3

```verilog
module mux_4_to_1 (Out, In0, In1, In2, In3, Sel1, Sel0);
output Out;
input In0, In1, In2, In3, Sel0, Sel1;

assign Out = (~Sel1 & ~Sel0 & In0) | (~Sel1 & Sel0 & In1)
           | (Sel1 & ~Sel0 & In2) | (Sel1 & Sel0 & In3);
endmodule
```

### 9.5 จากโค้ดเป็นวงจร และจากวงจรเป็นโค้ด

**จากโค้ดเป็นวงจร**

- 1 บรรทัดของเกต = 1 เกต พอร์ตแรกคือเอาต์พุต
- ชื่อสายแต่ละชื่อ = สายหนึ่งเส้นในวงจร
- `assign` : `~` คือ NOT, `&` คือ AND, `|` คือ OR, `^` คือ XOR, `? :` คือ MUX

**จากวงจรเป็นโค้ด**

- ตั้งชื่อเอาต์พุตของเกตทุกตัว แล้วประกาศ `wire`
- เขียนเกตทีละตัว (Structural) หรือเขียนเป็นสมการด้วย `assign` (Dataflow)
- ตรวจด้วยตารางความจริง

## บทที่ 10 รีจิสเตอร์ หน่วยความจำ และวงจรซีเควนเชียล

### 10.1 รีจิสเตอร์ (Register)

**รีจิสเตอร์** คือกลุ่มฟลิป-ฟลอปที่ใช้ **เก็บข้อมูลไบนารี** ฟลิป-ฟลอป 1 ตัวเก็บได้ 1 บิต

$$\text{เก็บข้อมูล } n \text{ บิต} \;\Rightarrow\; \text{ใช้ฟลิป-ฟลอป } n \text{ ตัว}$$

**ชิฟรีจิสเตอร์ (Shift Register)** คือรีจิสเตอร์ที่เลื่อนข้อมูลไปทีละ 1 บิตทุกครั้งที่มีสัญญาณนาฬิกา

- **Shift Right** ข้อมูลเลื่อนจากซ้ายไปขวา
- **Shift Left** ข้อมูลเลื่อนจากขวาไปซ้าย
- **Rotate** เลื่อนแบบวนรอบ บิตที่หลุดออกอีกด้านถูกส่งกลับเข้าอีกด้าน ข้อมูลไม่หาย (Shift ธรรมดาบิตที่หลุดจะทิ้งไป)

### 10.2 รีจิสเตอร์ 4 แบบ

แบ่งตามวิธีนำข้อมูลเข้าและออก **อนุกรม** คือทีละบิต **ขนาน** คือพร้อมกันทุกบิต

| แบบ | ข้อมูลเข้า | ข้อมูลออก | สัญญาณนาฬิกา (เก็บ $n$ บิต) | จุดเด่น |
|:--|:-:|:-:|:--|:--|
| SISO (Serial In-Serial Out) | อนุกรม | อนุกรม | ป้อน $n$ ลูก และอ่านออก $n$ ลูก | ฟลิป-ฟลอปต่อเป็นลูกโซ่ เลื่อนทีละบิต |
| SIPO (Serial In-Parallel Out) | อนุกรม | ขนาน | ป้อน $n$ ลูก แล้วอ่านทุกบิตพร้อมกัน | แปลงอนุกรมเป็นขนาน ใช้ Transfer Pulse ควบคุมเกตที่เอาต์พุต |
| PISO (Parallel In-Serial Out) | ขนาน | อนุกรม | โหลด 1 ลูก แล้วเลื่อนออก $n$ ลูก | แปลงขนานเป็นอนุกรม ใช้ Latch เลือกโหลดหรือเลื่อน |
| PIPO (Parallel In-Parallel Out) | ขนาน | ขนาน | 1 ลูก | ไม่มีการเลื่อน เร็วที่สุด |

**SISO 4 บิต** ต่อ $Q$ ของตัวหนึ่งเข้า $D$ ของตัวถัดไป ทุกตัวรับ Clock เดียวกัน ที่ขอบที่ทำงานทุกตัวรับค่าเดิมพร้อมกัน

$$Q_D(t+1) = \text{ข้อมูลเข้า},\quad Q_C(t+1) = Q_D(t),\quad Q_B(t+1) = Q_C(t),\quad Q_A(t+1) = Q_B(t)$$

- **PISO** ฟลิป-ฟลอปแต่ละตัวมีเกตจาก Latch : Latch $=1$ โหลดข้อมูลขนาน (ค่า $P=1$ ทำให้ Set, $P=0$ ทำให้ Clear) , Latch $=0$ เลื่อนข้อมูลตามสัญญาณนาฬิกา
- **PIPO** ข้อมูลเข้าที่ $P_A, P_B, P_C, P_D$ แล้วสัญญาณนาฬิกา 1 ลูกก็เก็บเข้า $Q_A, Q_B, Q_C, Q_D$ ทั้งหมดพร้อมกัน

### 10.3 ชิฟรีจิสเตอร์ชนิดพิเศษ

| ชนิด | ลักษณะ |
|:--|:--|
| Shift Right / Shift Left | เลื่อนไปทางขวา / ซ้ายทีละบิต บิตที่หลุดทิ้ง และเติมข้อมูลใหม่หรือ $0$ เข้ามาแทน |
| Rotate Right / Rotate Left | เลื่อนแบบวนรอบ บิตที่หลุดวนกลับเข้าอีกด้าน ข้อมูลไม่หาย เลื่อนครบ $n$ ครั้งกลับเป็นค่าเดิม |
| Bidirectional | เลื่อนได้ทั้งสองทิศ เลือกด้วยสัญญาณ Right/Left : $1$ คือขวา, $0$ คือซ้าย |
| Serial Adder (วงจรบวกอนุกรม) | Register A และ B แบบ SISO + Full Adder 1 ตัว + D Flip-Flop เก็บตัวทด บวกทีละบิต เลข $n$ บิตใช้ $n$ ลูกนาฬิกา (ใช้ฮาร์ดแวร์น้อยแต่ช้ากว่าแบบขนาน) |

$$S_i = A_i \oplus B_i \oplus C_i,\qquad C_{i+1} = A_iB_i + A_iC_i + B_iC_i$$

### 10.4 หน่วยความจำ (Memory) คืออะไร

**Memory** คือส่วนของระบบดิจิทัลที่ **เก็บข้อมูลไบนารีจำนวนมาก** ประกอบด้วยอาร์เรย์ของ **เซลล์ (Cell)** ซึ่งแต่ละเซลล์เก็บ 1 บิต

| หน่วย | ขนาด |
|:--|:--|
| บิต (Bit) | 1 บิต |
| นิบเบิล (Nibble) | 4 บิต |
| ไบต์ (Byte) | 8 บิต |
| เวิร์ด (Word) | ตั้งแต่ 1 ไบต์ขึ้นไป |

- **แอดเดรส (Address)** คือตำแหน่งของข้อมูลหนึ่งหน่วยในหน่วยความจำ
- **Write** คือนำข้อมูลไปเก็บที่แอดเดรสที่กำหนด **Read** คือนำข้อมูลที่แอดเดรสนั้นออกมา (ข้อมูลยังอยู่)
- **Address Bus** เลือกตำแหน่ง (ถอดรหัสด้วย Address Decoder) **Data Bus** ส่งข้อมูลเข้าออก (สองทิศทาง) และสัญญาณควบคุม **Read/Write**

$$\text{ขนาด (บิต)} = \text{จำนวนแอดเดรส} \times \text{ความยาวเวิร์ด (บิตต่อแอดเดรส)}$$

$$\text{สายแอดเดรส } n \text{ เส้น} \;\Rightarrow\; \text{เลือกได้ } 2^{n} \text{ ตำแหน่ง}$$

| สายแอดเดรส $n$ | จำนวนตำแหน่ง |
|:-:|:-:|
| 8 | $2^{8} = 256$ |
| 10 | $2^{10} = 1,024$ |
| 16 | $2^{16} = 65,536$ |
| 20 | $2^{20} = 1,048,576$ |
| 32 | $2^{32} = 4,294,967,296$ |

### 10.5 RAM และ ROM

|  | RAM (Random Access Memory) | ROM (Read Only Memory) |
|:--|:--|:--|
| อ่าน / เขียน | อ่านและเขียนได้ขณะใช้งาน | อ่านได้อย่างเดียว |
| เมื่อไม่มีไฟเลี้ยง | ข้อมูลหาย (Volatile) | ข้อมูลยังอยู่ (Nonvolatile) |
| ใช้เก็บ | ข้อมูลและโปรแกรมที่กำลังใช้งาน | ข้อมูลหรือคำสั่งที่ใช้ซ้ำ เช่น ชุดคำสั่งเริ่มทำงาน |

**RAM แบ่งเป็น SRAM และ DRAM** (Volatile ทั้งคู่)

|  | SRAM (Static) | DRAM (Dynamic) |
|:--|:--|:--|
| เก็บข้อมูลด้วย | Flip-Flop | Capacitor |
| รีเฟรซ | ไม่ต้อง | ต้อง (ประจุใหม่เป็นระยะ) |
| ความเร็ว | เร็วกว่ามาก | ช้ากว่า |
| ความจุและราคา | จุน้อยกว่า แพงกว่า | จุมากกว่า ถูกกว่า |
| ใช้เป็น | Cache Memory | Main Memory |

**Cache** คือ Memory เล็กที่เร็ว (สร้างจาก SRAM) เก็บข้อมูลที่ใช้บ่อยจาก Main Memory ที่ใหญ่กว่าแต่ช้ากว่า (DRAM)

**ชนิดของ ROM**

| ชนิด | การเขียนข้อมูล | การลบและโปรแกรมใหม่ |
|:--|:--|:--|
| Mask ROM | ใส่ข้อมูลตอนผลิตที่โรงงาน | เปลี่ยนไม่ได้ |
| PROM (Programmable) | ผู้ใช้เขียนเองด้วยเครื่องมือพิเศษ โดยเผาฟิวส์ | เปลี่ยนไม่ได้ (เผาแล้วเผาอีกไม่ได้) |
| EPROM (Erasable PROM) | ผู้ใช้เขียนได้ | ลบแล้วโปรแกรมใหม่ได้ |
| UV EPROM | เป็น EPROM แบบหนึ่ง | ลบด้วยแสงอัลตราไวโอเลต |
| EEPROM | เป็น EPROM แบบหนึ่ง | ลบด้วยกระแสไฟฟ้า |

### 10.6 การขยาย Memory

นำ Memory หลายตัวมาต่อกันเพื่อเพิ่มความยาวเวิร์ดหรือเพิ่มจำนวนแอดเดรส

| การขยาย | เพิ่มอะไร | วิธีต่อ |
|:--|:--|:--|
| ขยายความยาวเวิร์ด | จำนวนบิตต่อแอดเดรส | ต่อแอดเดรสบัสและ Enable ร่วมกัน ชิปทำงานพร้อมกัน เอาต์พุตของแต่ละชิปเป็นคนละบิตของบัสข้อมูล ไม่เพิ่มสายแอดเดรส |
| ขยายขนาด | จำนวนแอดเดรส | ต่อสายแอดเดรสและบัสข้อมูลร่วมกัน เพิ่มบิตแอดเดรส 1 บิตเลือกชิปด้วย Enable (ชิปหนึ่งรับตรง อีกชิปผ่านอินเวอร์เตอร์) ชิปทำงานทีละตัว |

### 10.7 FIFO และ LIFO

|  | FIFO (First In-First Out) | LIFO (Last In-First Out) |
|:--|:--|:--|
| ลำดับ | เข้าก่อน ออกก่อน (เหมือนคิว) | เข้าหลัง ออกก่อน (เหมือนกองจาน เรียกว่า Stack) |
| ใช้ทำอะไร | เชื่อมระบบสองระบบที่ความเร็วต่างกัน ข้อมูลเข้าด้วยความเร็วหนึ่ง ออกด้วยอีกความเร็วหนึ่ง | เก็บข้อมูลชั่วคราวใน Stack ของไมโครโปรเซสเซอร์ |
| คำสั่ง | นำเข้า / นำออก | PUSH (นำเข้า) / POP (นำออก) |

**RAM Stack** ใช้พื้นที่ของ RAM เป็น Stack มี **Stack Pointer (SP)** ชี้ตำแหน่งบนสุดของ Stack (Top of Stack)

$$\text{PUSH : } SP \leftarrow SP - 2 \quad;\qquad \text{POP : } SP \leftarrow SP + 2 \qquad (\text{เวิร์ด } 16 \text{ บิต})$$

### 10.8 วงจรซีเควนเชียล (Sequential Circuit)

**วงจรซีเควนเชียล** คือวงจรที่ **เอาต์พุตขึ้นกับอินพุตตอนนี้ และอินพุตที่ผ่านมา** โดยเก็บอดีตไว้ใน Memory (เช่น D Flip-Flop) ต่างจากวงจรคอมบิเนชันที่เอาต์พุตขึ้นกับอินพุตตอนนี้อย่างเดียว

| สัญลักษณ์ | ความหมาย |
|:-:|:--|
| $x_1, \dots, x_n$ | อินพุต (Input) |
| $Z_1, \dots, Z_m$ | เอาต์พุต (Output) |
| $y_1, \dots, y_r$ | สถานะปัจจุบัน (Present State) คือเอาต์พุตของ Memory |
| $Y_1, \dots, Y_r$ | สถานะถัดไป (Next State) คืออินพุตของ Memory |

| หัวข้อ | แบบที่ 1 | แบบที่ 2 |
|:--|:--|:--|
| ชนิดของวงจร | Synchronous : Memory ทุกตัวรับ Clock จากภายนอกเหมือนกัน | Asynchronous : มี Memory อย่างน้อยหนึ่งตัวที่ไม่ได้รับ Clock จากภายนอก |
| ลักษณะอินพุต | Level : เป็นระดับสัญญาณ | Pulse : เข้ามาช่วงสั้น ๆ กว้างเท่า Clock |

**วิธีอธิบายคุณสมบัติของวงจร** Truth Table (ใช้กับ Flip-Flop), Timing Diagram (ใช้กับ Counter, Register), State Table, State Diagram และ Flow Table (วงจรอะซิงโครนัส)

### 10.9 State Table และ State Diagram

**State Table** คือตารางที่แถวเป็น Present State (นิยมเรียงแบบ Gray Code) คอลัมน์เป็นค่าอินพุต และในช่องเขียน **Next State / Output**

| Present State $y$ | $x = 0$ : Next State / Output | $x = 1$ : Next State / Output |
|:-:|:-:|:-:|
| $y_a$ | $Y/Z$ | $Y/Z$ |
| $y_b$ | $Y/Z$ | $Y/Z$ |

**State Diagram** คือกราฟที่ **วงกลมคือ State** และ **ลูกศรชี้จาก Present State ไป Next State** ที่ลูกศรเขียนป้าย **Input / Output** (ถ้า Next State เป็น State เดิมให้ลูกศรวนกลับตัวเอง) วงจรที่ไม่มีอินพุตและเอาต์พุต เช่น วงจรนับ เขียนแค่ Present State ไป Next State

**ขั้นตอนวิเคราะห์วงจร** (1) เขียนสมการอินพุตของฟลิป-ฟลอป ($D$) และสมการเอาต์พุต ($Z$) จากวงจร (2) ใช้สมการหา Next State และ Output ของทุกชุด ($y$, $x$) (3) เขียนเป็น State Table (4) เขียน State Diagram

**ข้อควรจำ** ในช่องของ State Table เขียน **Next State / Output** (State ก่อน) แต่ป้ายลูกศรของ State Diagram เป็น **Input / Output** (Input ก่อน)
