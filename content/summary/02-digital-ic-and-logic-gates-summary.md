# สรุปบทที่ 2 ไอซีและลอจิกเกต (Digital IC and Logic Gates)

---

## 1. ไอซีและพื้นฐานของลอจิกเกต

### 1.1 สัญญาณอนาล็อกและสัญญาณดิจิทัล

- สัญญาณ **อนาล็อก (Analog)** เป็นสัญญาณที่ต่อเนื่องกันไปเรื่อยๆ
- สัญญาณ **ดิจิทัล (Digital)** แยกความแตกต่างได้เพียง 2 ค่า คือ $1$ (HIGH) กับ $0$ (LOW)

---

### 1.2 ไอซี (Integrated Circuit : IC)

ลอจิกเกตซึ่งเป็นอุปกรณ์พื้นฐานของวงจรดิจิทัลถูกผลิตมาอยู่ในรูปวงจรรวม เรียกว่า **ไอซี** แบ่งตามจำนวนเกตที่บรรจุในไอซีหนึ่งตัวได้ดังนี้

$$
\begin{array}{|l|c|}
\hline
\text{ขนาดของไอซี} & \text{จำนวนเกต} \\
\hline
\text{Small Scale Integration (SSI)} & \le 12 \\
\hline
\text{Medium Scale Integration (MSI)} & 12\text{ ถึง }99 \\
\hline
\text{Large Scale Integration (LSI)} & 100\text{ ถึง }999 \\
\hline
\text{Very Large Scale Integration (VLSI)} & \ge 1000 \\
\hline
\end{array}
$$

---

### 1.3 ไอซี TTL และ CMOS

ไอซีดิจิทัลแบ่งตามโครงสร้างภายในได้ 2 ชนิด

$$
\begin{array}{|l|l|l|}
\hline
 & \text{TTL} & \text{CMOS} \\
\hline
\text{ชื่อเต็ม} & \text{Transistor Transistor Logic} & \text{ทำจาก MOSFET} \\
\hline
\text{ไฟเลี้ยง} & 4.75\text{ ถึง }5.25\ \text{V} & 3\text{ ถึง }15\ \text{V} \\
\hline
\text{กระแส} & \text{ประมาณ }8\text{ ถึง }100\ \text{mA} & - \\
\hline
\text{ความเร็ว} & \text{เร็วกว่า CMOS} & \text{ช้ากว่า TTL} \\
\hline
\text{กำลังไฟฟ้า} & \text{มากกว่า CMOS} & \text{น้อยกว่า TTL} \\
\hline
\end{array}
$$

CMOS มีผลต่อไฟฟ้าสถิตภายนอก ส่วนความแตกต่างอื่นที่ใช้เทียบ TTL กับ CMOS คือ

- **Fan Out** : ความสามารถด้านเอาต์พุตของเกต
- **Noise Margin** : ค่าความแตกต่างของแรงดันระหว่างอินพุตกับเอาต์พุต
- แรงดัน กระแส และอุณหภูมิใช้งาน

---

### 1.4 เครื่องหมายที่ใช้ในสมการลอจิก

สมการลอจิกใช้ตัวอักษร เช่น $A, B, C, Q, Y$ แทนตัวแปร และมีเครื่องหมาย 4 อย่าง

$$
\begin{array}{|c|l|c|}
\hline
\text{เครื่องหมาย} & \text{ความหมาย} & \text{ตัวอย่าง} \\
\hline
= & \text{เท่ากับ} & Y = A+B \\
\hline
+ & \text{OR (ออร์)} & Y = A+B \\
\hline
\cdot & \text{AND (แอนด์)} & Y = A\cdot B \\
\hline
\overline{\phantom{A}} & \text{NOT (นอต) กลับค่า} & Y = \overline{A} \\
\hline
\end{array}
$$

---

### 1.5 ตารางความจริง (Truth Table)

ตารางความจริงแสดงสภาวะการทำงานของลอจิกเกต ประกอบด้วยส่วนอินพุตและส่วนเอาต์พุต อินพุตหนึ่งตัวมี 2 สภาวะคือ $0$ กับ $1$

**สูตร** จำนวนสภาวะ (จำนวนแถว) ของตารางความจริงเมื่อมีอินพุต $n$ ตัว

$$
\text{จำนวนแถว} = 2^{n}
$$

**ตัวอย่าง**

$\mathbf{Sol}^{n}$

อินพุต 2 ตัว ($A,B$) มี $2^{2}=4$ สภาวะ และอินพุต 3 ตัว ($A,B,C$) มี $2^{3}=8$ สภาวะ

$$
\begin{array}{|c|c|c|}
\hline
A & B & Y \\
\hline
0 & 0 & \\
\hline
0 & 1 & \\
\hline
1 & 0 & \\
\hline
1 & 1 & \\
\hline
\end{array}
\qquad
\begin{array}{|c|c|c|c|}
\hline
A & B & C & Y \\
\hline
0 & 0 & 0 & \\
\hline
0 & 0 & 1 & \\
\hline
0 & 1 & 0 & \\
\hline
0 & 1 & 1 & \\
\hline
1 & 0 & 0 & \\
\hline
1 & 0 & 1 & \\
\hline
1 & 1 & 0 & \\
\hline
1 & 1 & 1 & \\
\hline
\end{array}
$$

$\mathbf{Ans}\quad n=2\Rightarrow\mathbf{4}\text{ แถว},\quad n=3\Rightarrow\mathbf{8}\text{ แถว}$

---

### 1.6 ลอจิกเกตและระดับลอจิก

**ลอจิกเกต (Logic Gate)** คืออุปกรณ์พื้นฐานในวงจรดิจิทัล ใช้ระดับแรงดันเป็นตัวแปรทางลอจิก ทั้งอินพุตและเอาต์พุต การกำหนดระดับลอจิกมี 2 แบบ

- **Positive Logic** : แรงดันที่สูงกว่า เช่น $+5\ \text{V}$ เป็นลอจิก $1$ และต่ำกว่าเป็นลอจิก $0$
- **Negative Logic** : แรงดันที่สูงกว่า เช่น $+5\ \text{V}$ เป็นลอจิก $0$ และต่ำกว่าเป็นลอจิก $1$

สวิตช์ปิด (Closed Switch) แทนลอจิก $1$ และสวิตช์เปิด (Open Switch) แทนลอจิก $0$

---

## 2. ลอจิกเกต

ลอจิกเกตเป็นอุปกรณ์พื้นฐานของวงจรดิจิทัล รับอินพุตเป็น $0$ หรือ $1$ แล้วให้เอาต์พุตตามหน้าที่ของเกต ตารางความจริงของเกตที่มี $n$ อินพุตมี $2^{n}$ แถว (เกต 2 อินพุตมี 4 แถว)

### 2.1 Buffer Gate

ให้ระดับสัญญาณเอาต์พุตเหมือนอินพุต

**สมการ**

$$
Y = A
$$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="360" height="120" viewBox="0 0 480 160" font-family="Times New Roman, serif" font-size="16" fill="currentColor">
<g stroke="currentColor" stroke-width="2" fill="none">
<line x1="90" y1="80" x2="170" y2="80"/>
<polygon points="170,30 170,130 230,80"/>
<line x1="230" y1="80" x2="330" y2="80"/></g>
<circle cx="90" cy="80" r="4"/>
<circle cx="330" cy="80" r="4"/><text x="20" y="85">INPUT</text>
<text x="86" y="71">A</text>
<text x="324" y="64">Y</text><text x="344" y="85">OUTPUT</text></svg>
</div>

$$
\begin{array}{|c|c|}
\hline
\text{INPUT} & \text{OUTPUT} \\
\hline
A & Y \\
\hline
0 & 0 \\
\hline
1 & 1 \\
\hline
\end{array}
$$

### 2.2 NOT Gate

ให้ระดับสัญญาณเอาต์พุตตรงข้ามกับอินพุต (เรียกว่า อินเวอร์เตอร์)

**สมการ**

$$
Y = \overline{A}
$$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="360" height="120" viewBox="0 0 480 160" font-family="Times New Roman, serif" font-size="16" fill="currentColor">
<g stroke="currentColor" stroke-width="2" fill="none">
<line x1="90" y1="80" x2="170" y2="80"/>
<polygon points="170,30 170,130 230,80"/>
<circle cx="236" cy="80" r="6"/>
<line x1="242" y1="80" x2="330" y2="80"/></g>
<circle cx="90" cy="80" r="4"/>
<circle cx="330" cy="80" r="4"/><text x="20" y="85">INPUT</text>
<text x="86" y="71">A</text>
<text x="324" y="64">Y</text><text x="344" y="85">OUTPUT</text></svg>
</div>

$$
\begin{array}{|c|c|}
\hline
\text{INPUT} & \text{OUTPUT} \\
\hline
A & Y \\
\hline
0 & 1 \\
\hline
1 & 0 \\
\hline
\end{array}
$$

### 2.3 AND Gate

เอาต์พุตเป็น $1$ ก็ต่อเมื่ออินพุตทุกตัวเป็น $1$

**สมการ**

$$
Y = A \cdot B
$$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="360" height="120" viewBox="0 0 480 160" font-family="Times New Roman, serif" font-size="16" fill="currentColor">
<g stroke="currentColor" stroke-width="2" fill="none">
<line x1="90" y1="55" x2="170" y2="55"/>
<line x1="90" y1="105" x2="170" y2="105"/>
<path d="M170,30 H210 A50,50 0 0 1 210,130 H170 Z"/>
<line x1="260" y1="80" x2="330" y2="80"/></g>
<circle cx="90" cy="55" r="4"/>
<circle cx="90" cy="105" r="4"/>
<circle cx="330" cy="80" r="4"/><text x="20" y="85">INPUT</text>
<text x="86" y="46">A</text>
<text x="86" y="96">B</text>
<text x="324" y="64">Y</text><text x="344" y="85">OUTPUT</text></svg>
</div>

$$
\begin{array}{|c|c|c|}
\hline
\text{INPUT} & & \text{OUTPUT} \\
\hline
A & B & Y \\
\hline
0 & 0 & 0 \\
\hline
0 & 1 & 0 \\
\hline
1 & 0 & 0 \\
\hline
1 & 1 & 1 \\
\hline
\end{array}
$$

### 2.4 OR Gate

เอาต์พุตเป็น $1$ เมื่ออินพุตตัวใดตัวหนึ่งหรือทุกตัวเป็น $1$

**สมการ**

$$
Y = A + B
$$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="360" height="120" viewBox="0 0 480 160" font-family="Times New Roman, serif" font-size="16" fill="currentColor">
<g stroke="currentColor" stroke-width="2" fill="none">
<line x1="90" y1="55" x2="179.4" y2="55"/>
<line x1="90" y1="105" x2="179.4" y2="105"/>
<path d="M170,30 C215,30 245,50 270,80 C245,110 215,130 170,130 Q195,80 170,30 Z"/>
<line x1="270" y1="80" x2="330" y2="80"/></g>
<circle cx="90" cy="55" r="4"/>
<circle cx="90" cy="105" r="4"/>
<circle cx="330" cy="80" r="4"/><text x="20" y="85">INPUT</text>
<text x="86" y="46">A</text>
<text x="86" y="96">B</text>
<text x="324" y="64">Y</text><text x="344" y="85">OUTPUT</text></svg>
</div>

$$
\begin{array}{|c|c|c|}
\hline
\text{INPUT} & & \text{OUTPUT} \\
\hline
A & B & Y \\
\hline
0 & 0 & 0 \\
\hline
0 & 1 & 1 \\
\hline
1 & 0 & 1 \\
\hline
1 & 1 & 1 \\
\hline
\end{array}
$$

### 2.5 NAND Gate

ตรงข้ามกับ AND คือเอาต์พุตเป็น $0$ ก็ต่อเมื่ออินพุตทุกตัวเป็น $1$

**สมการ**

$$
Y = \overline{A \cdot B}
$$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="360" height="120" viewBox="0 0 480 160" font-family="Times New Roman, serif" font-size="16" fill="currentColor">
<g stroke="currentColor" stroke-width="2" fill="none">
<line x1="90" y1="55" x2="170" y2="55"/>
<line x1="90" y1="105" x2="170" y2="105"/>
<path d="M170,30 H210 A50,50 0 0 1 210,130 H170 Z"/>
<circle cx="266" cy="80" r="6"/>
<line x1="272" y1="80" x2="330" y2="80"/></g>
<circle cx="90" cy="55" r="4"/>
<circle cx="90" cy="105" r="4"/>
<circle cx="330" cy="80" r="4"/><text x="20" y="85">INPUT</text>
<text x="86" y="46">A</text>
<text x="86" y="96">B</text>
<text x="324" y="64">Y</text><text x="344" y="85">OUTPUT</text></svg>
</div>

$$
\begin{array}{|c|c|c|}
\hline
\text{INPUT} & & \text{OUTPUT} \\
\hline
A & B & Y \\
\hline
0 & 0 & 1 \\
\hline
0 & 1 & 1 \\
\hline
1 & 0 & 1 \\
\hline
1 & 1 & 0 \\
\hline
\end{array}
$$

### 2.6 NOR Gate

ตรงข้ามกับ OR คือเอาต์พุตเป็น $1$ ก็ต่อเมื่ออินพุตทุกตัวเป็น $0$

**สมการ**

$$
Y = \overline{A + B}
$$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="360" height="120" viewBox="0 0 480 160" font-family="Times New Roman, serif" font-size="16" fill="currentColor">
<g stroke="currentColor" stroke-width="2" fill="none">
<line x1="90" y1="55" x2="179.4" y2="55"/>
<line x1="90" y1="105" x2="179.4" y2="105"/>
<path d="M170,30 C215,30 245,50 270,80 C245,110 215,130 170,130 Q195,80 170,30 Z"/>
<circle cx="276" cy="80" r="6"/>
<line x1="282" y1="80" x2="330" y2="80"/></g>
<circle cx="90" cy="55" r="4"/>
<circle cx="90" cy="105" r="4"/>
<circle cx="330" cy="80" r="4"/><text x="20" y="85">INPUT</text>
<text x="86" y="46">A</text>
<text x="86" y="96">B</text>
<text x="324" y="64">Y</text><text x="344" y="85">OUTPUT</text></svg>
</div>

$$
\begin{array}{|c|c|c|}
\hline
\text{INPUT} & & \text{OUTPUT} \\
\hline
A & B & Y \\
\hline
0 & 0 & 1 \\
\hline
0 & 1 & 0 \\
\hline
1 & 0 & 0 \\
\hline
1 & 1 & 0 \\
\hline
\end{array}
$$

### 2.7 XOR Gate

เอาต์พุตเป็น $1$ ก็ต่อเมื่ออินพุตมีค่าต่างกัน

**สมการ**

$$
Y = A \oplus B
$$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="360" height="120" viewBox="0 0 480 160" font-family="Times New Roman, serif" font-size="16" fill="currentColor">
<g stroke="currentColor" stroke-width="2" fill="none">
<line x1="90" y1="55" x2="167.4" y2="55"/>
<line x1="90" y1="105" x2="167.4" y2="105"/>
<path d="M170,30 C215,30 245,50 270,80 C245,110 215,130 170,130 Q195,80 170,30 Z"/>
<path d="M158,30 Q183,80 158,130"/>
<line x1="270" y1="80" x2="330" y2="80"/></g>
<circle cx="90" cy="55" r="4"/>
<circle cx="90" cy="105" r="4"/>
<circle cx="330" cy="80" r="4"/><text x="20" y="85">INPUT</text>
<text x="86" y="46">A</text>
<text x="86" y="96">B</text>
<text x="324" y="64">Y</text><text x="344" y="85">OUTPUT</text></svg>
</div>

$$
\begin{array}{|c|c|c|}
\hline
\text{INPUT} & & \text{OUTPUT} \\
\hline
A & B & Y \\
\hline
0 & 0 & 0 \\
\hline
0 & 1 & 1 \\
\hline
1 & 0 & 1 \\
\hline
1 & 1 & 0 \\
\hline
\end{array}
$$

### 2.8 XNOR Gate

เอาต์พุตเป็น $1$ ก็ต่อเมื่ออินพุตมีค่าเหมือนกัน (ตรงข้ามกับ XOR)

**สมการ**

$$
Y = \overline{A \oplus B}
$$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="360" height="120" viewBox="0 0 480 160" font-family="Times New Roman, serif" font-size="16" fill="currentColor">
<g stroke="currentColor" stroke-width="2" fill="none">
<line x1="90" y1="55" x2="167.4" y2="55"/>
<line x1="90" y1="105" x2="167.4" y2="105"/>
<path d="M170,30 C215,30 245,50 270,80 C245,110 215,130 170,130 Q195,80 170,30 Z"/>
<path d="M158,30 Q183,80 158,130"/><circle cx="276" cy="80" r="6"/>
<line x1="282" y1="80" x2="330" y2="80"/></g>
<circle cx="90" cy="55" r="4"/>
<circle cx="90" cy="105" r="4"/>
<circle cx="330" cy="80" r="4"/><text x="20" y="85">INPUT</text>
<text x="86" y="46">A</text>
<text x="86" y="96">B</text>
<text x="324" y="64">Y</text><text x="344" y="85">OUTPUT</text></svg>
</div>

$$
\begin{array}{|c|c|c|}
\hline
\text{INPUT} & & \text{OUTPUT} \\
\hline
A & B & Y \\
\hline
0 & 0 & 1 \\
\hline
0 & 1 & 0 \\
\hline
1 & 0 & 0 \\
\hline
1 & 1 & 1 \\
\hline
\end{array}
$$

### 2.9 ตัวอย่างรวม

หาเอาต์พุตของเกตทุกตัวเมื่อ $A = 1,\ B = 0$

$\mathbf{Sol}^{n}$

$$
\begin{aligned}
\text{Buffer} &:\ Y = A = 1 \\
\text{NOT} &:\ Y = \overline{A} = \overline{1} = 0 \\
\text{AND} &:\ Y = 1 \cdot 0 = 0 \\
\text{OR} &:\ Y = 1 + 0 = 1 \\
\text{NAND} &:\ Y = \overline{1 \cdot 0} = \overline{0} = 1 \\
\text{NOR} &:\ Y = \overline{1 + 0} = \overline{1} = 0 \\
\text{XOR} &:\ Y = 1 \oplus 0 = 1 \\
\text{XNOR} &:\ Y = \overline{1 \oplus 0} = \overline{1} = 0
\end{aligned}
$$

$\mathbf{Ans}\quad \text{Buffer}=1,\ \text{NOT}=0,\ \text{AND}=0,\ \text{OR}=1,\ \text{NAND}=1,\ \text{NOR}=0,\ \text{XOR}=1,\ \text{XNOR}=0$

---

## 3. การเขียนวงจรลอจิกเกตจากสมการ

### 3.1 จากสมการบูลีนเป็นวงจร

เปลี่ยนสมการเป็นวงจรโดยเริ่มจากส่วนที่อยู่ในสุดก่อน แล้วค่อยต่อออกมาจนถึงเกตสุดท้ายซึ่งเป็นเอาต์พุต $Y$

**หลักการแปลง**

$$
\begin{array}{|c|c|}
\hline
\text{ในสมการ} & \text{เกตที่ใช้} \\
\hline
\overline{A} & \text{NOT} \\
\hline
A \cdot B & \text{AND} \\
\hline
A + B & \text{OR} \\
\hline
\overline{A \cdot B} & \text{NAND} \\
\hline
\overline{A + B} & \text{NOR} \\
\hline
A \oplus B & \text{XOR} \\
\hline
\end{array}
$$

**ขั้นตอน**

1. ตัวแปรที่มีขีดบน ใช้เกต NOT
2. ทำวงเล็บในสุดก่อน แล้วไล่ออกมาทีละชั้น (คูณก่อนบวก)
3. ขีดบนที่คลุมทั้งก้อน ใช้ NAND หรือ NOR
4. ตัวแปรเดียวกันที่ใช้หลายที่ ให้ต่อแยกออกจากเส้นเดียวกัน (จุดต่อ)

**ตัวอย่าง** จงเขียนวงจรจาก $Y = \overline{A+\overline{B}} + C\cdot\overline{AB}$

$\mathbf{Sol}^{n}$

$$
\begin{aligned}
\text{Step 1 (NOT)} &:\ \overline{B} \\
\text{Step 2 (NOR)} &:\ \overline{A+\overline{B}} \\
\text{Step 3 (NAND)} &:\ \overline{AB} \\
\text{Step 4 (AND)} &:\ C\cdot\overline{AB} \\
\text{Step 5 (OR)} &:\ Y = \overline{A+\overline{B}} + C\cdot\overline{AB}
\end{aligned}
$$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="515" height="367" viewBox="0 0 572 408" font-family="Times New Roman, serif" font-size="18" fill="currentColor"><g stroke="currentColor" stroke-width="1.8" fill="none"><line x1="76.0" y1="88.0" x2="170.0" y2="88.0"/>
<line x1="46.0" y1="143.0" x2="296.5" y2="143.0"/>
<line x1="216.0" y1="88.0" x2="258.0" y2="88.0"/>
<line x1="258.0" y1="88.0" x2="258.0" y2="157.0"/>
<line x1="258.0" y1="157.0" x2="296.5" y2="157.0"/>
<line x1="46.0" y1="211.0" x2="170.0" y2="211.0"/>
<line x1="76.0" y1="225.0" x2="170.0" y2="225.0"/>
<line x1="106.0" y1="279.0" x2="290.0" y2="279.0"/>
<line x1="236.0" y1="218.0" x2="270.0" y2="218.0"/>
<line x1="270.0" y1="218.0" x2="270.0" y2="293.0"/>
<line x1="270.0" y1="293.0" x2="290.0" y2="293.0"/>
<line x1="364.0" y1="150.0" x2="386.0" y2="150.0"/>
<line x1="386.0" y1="150.0" x2="386.0" y2="347.0"/>
<line x1="386.0" y1="347.0" x2="424.5" y2="347.0"/>
<line x1="346.0" y1="286.0" x2="398.0" y2="286.0"/>
<line x1="398.0" y1="286.0" x2="398.0" y2="361.0"/>
<line x1="398.0" y1="361.0" x2="424.5" y2="361.0"/>
<line x1="46.0" y1="34.0" x2="46.0" y2="211.0"/>
<circle cx="46" cy="143.0" r="3" fill="currentColor" stroke="none"/>
<line x1="76.0" y1="34.0" x2="76.0" y2="225.0"/>
<circle cx="76" cy="88.0" r="3" fill="currentColor" stroke="none"/>
<line x1="106.0" y1="34.0" x2="106.0" y2="279.0"/>
<polygon points="170,68 170,108 206,88"/>
<circle cx="211" cy="88" r="5"/>
<path d="M290,124 C312,124 338,137.0 354,150 C338,163.0 312,176 290,176 Q304,150 290,124 Z"/>
<circle cx="359" cy="150" r="5"/>
<path d="M170,192 H200 A26,26 0 0 1 200,244 H170 Z"/>
<circle cx="231" cy="218" r="5"/>
<path d="M290,260 H320 A26,26 0 0 1 320,312 H290 Z"/>
<path d="M418,328 C440,328 466,341.0 482,354 C466,367.0 440,380 418,380 Q432,354 418,328 Z"/>
<line x1="482.0" y1="354.0" x2="502.0" y2="354.0"/>
<circle cx="502" cy="354" r="3.5" fill="currentColor" stroke="none"/></g><text x="46" y="24" text-anchor="middle">A</text><text x="76" y="24" text-anchor="middle">B</text><text x="106" y="24" text-anchor="middle">C</text><text x="512" y="359">Y</text></svg>
</div>

---

## 4. การหา Function Output ของเกตทุกตัวจากวงจร

### 4.1 ไล่เอาต์พุตของเกตทีละตัว

ให้ $Y_n$ เป็นเอาต์พุตของเกตหมายเลข $n$ เริ่มจากเกตที่รับอินพุตตรง แล้วแทนค่าต่อไปทีละเกตจนถึงเกตสุดท้าย

**หลักการ** ให้เกตหมายเลข $n$ รับอินพุตจากเอาต์พุต $X$ และ $Z$

$$
\begin{array}{|c|c|}
\hline
\text{เกต} & Y_n \\
\hline
\text{AND} & X \cdot Z \\
\hline
\text{OR} & X + Z \\
\hline
\text{NAND} & \overline{X \cdot Z} \\
\hline
\text{NOR} & \overline{X + Z} \\
\hline
\text{XOR} & X \oplus Z \\
\hline
\text{NOT} & \overline{X} \\
\hline
\end{array}
$$

**ตัวอย่าง** จงหา Function Output ของเกตทุกตัว จากวงจรที่กำหนดให้

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="506" height="466" viewBox="0 0 562 518" font-family="Times New Roman, serif" font-size="18" fill="currentColor"><g stroke="currentColor" stroke-width="1.8" fill="none"><line x1="46.0" y1="109.0" x2="170.0" y2="109.0"/>
<line x1="76.0" y1="123.0" x2="170.0" y2="123.0"/>
<line x1="106.0" y1="200.0" x2="170.0" y2="200.0"/>
<line x1="236.0" y1="116.0" x2="258.0" y2="116.0"/>
<line x1="258.0" y1="116.0" x2="258.0" y2="277.0"/>
<line x1="258.0" y1="277.0" x2="296.5" y2="277.0"/>
<line x1="216.0" y1="200.0" x2="270.0" y2="200.0"/>
<line x1="270.0" y1="200.0" x2="270.0" y2="291.0"/>
<line x1="270.0" y1="291.0" x2="296.5" y2="291.0"/>
<line x1="46.0" y1="367.0" x2="170.0" y2="367.0"/>
<line x1="106.0" y1="381.0" x2="170.0" y2="381.0"/>
<line x1="354.0" y1="284.0" x2="376.0" y2="284.0"/>
<line x1="376.0" y1="284.0" x2="376.0" y2="457.0"/>
<line x1="376.0" y1="457.0" x2="404.5" y2="457.0"/>
<line x1="226.0" y1="374.0" x2="388.0" y2="374.0"/>
<line x1="388.0" y1="374.0" x2="388.0" y2="471.0"/>
<line x1="388.0" y1="471.0" x2="404.5" y2="471.0"/>
<line x1="46.0" y1="34.0" x2="46.0" y2="367.0"/>
<circle cx="46" cy="109.0" r="3" fill="currentColor" stroke="none"/>
<line x1="76.0" y1="34.0" x2="76.0" y2="123.0"/>
<line x1="106.0" y1="34.0" x2="106.0" y2="381.0"/>
<circle cx="106" cy="200.0" r="3" fill="currentColor" stroke="none"/>
<path d="M170,90 H200 A26,26 0 0 1 200,142 H170 Z"/>
<rect x="174" y="64" width="22" height="20" stroke-width="1.4"/>
<circle cx="231" cy="116" r="5"/>
<polygon points="170,180 170,220 206,200"/>
<rect x="174" y="154" width="22" height="20" stroke-width="1.4"/>
<circle cx="211" cy="200" r="5"/>
<path d="M290,258 C312,258 338,271.0 354,284 C338,297.0 312,310 290,310 Q304,284 290,258 Z"/>
<rect x="294" y="232" width="22" height="20" stroke-width="1.4"/>
<path d="M170,348 H200 A26,26 0 0 1 200,400 H170 Z"/>
<rect x="174" y="322" width="22" height="20" stroke-width="1.4"/>
<path d="M398,438 Q412,464 398,490"/><path d="M408,438 C430,438 456,451.0 472,464 C456,477.0 430,490 408,490 Q422,464 408,438 Z"/>
<rect x="412" y="412" width="22" height="20" stroke-width="1.4"/>
<line x1="472.0" y1="464.0" x2="492.0" y2="464.0"/>
<circle cx="492" cy="464" r="3.5" fill="currentColor" stroke="none"/></g><text x="46" y="24" text-anchor="middle">A</text><text x="76" y="24" text-anchor="middle">B</text><text x="106" y="24" text-anchor="middle">C</text><text x="185" y="79" text-anchor="middle" font-size="15">1</text><text x="185" y="169" text-anchor="middle" font-size="15">2</text><text x="305" y="247" text-anchor="middle" font-size="15">3</text><text x="185" y="337" text-anchor="middle" font-size="15">4</text><text x="423" y="427" text-anchor="middle" font-size="15">5</text></svg>
</div>

$\mathbf{Sol}^{n}$

$$
\begin{aligned}
Y_1 &= \overline{A \cdot B} \\
Y_2 &= \overline{C} \\
Y_3 &= Y_1 + Y_2 = \overline{A \cdot B} + \overline{C} \\
Y_4 &= A \cdot C \\
Y_5 &= Y_3 \oplus Y_4 = \left(\overline{A \cdot B} + \overline{C}\right) \oplus A \cdot C
\end{aligned}
$$

ถ้าให้ $A=1,\ B=0,\ C=1$ จะได้

$$
\begin{aligned}
Y_1 &= \overline{1 \cdot 0} = 1 \\
Y_2 &= \overline{1} = 0 \\
Y_3 &= 1 + 0 = 1 \\
Y_4 &= 1 \cdot 1 = 1 \\
Y_5 &= 1 \oplus 1 = 0
\end{aligned}
$$

$\mathbf{Ans}\quad Y_5 = \left(\overline{A \cdot B} + \overline{C}\right) \oplus A \cdot C$ และเมื่อ $ABC=101$ ได้ $Y_5 = \mathbf{0}$

---

## 5. SOP และ Minterm

SOP (Sum of Product) คือรูปผลบวกของผลคูณ เทอมที่ตัวแปรครบทุกตัวและคูณกันเรียกว่า **มินเทอม** ใช้แทนด้วย $m_i$ โดย $i$ คือเลขฐาน 10 ของค่าบิตในแถวนั้น

### 5.1 มินเทอมและการหาเลข $m$

อ่านค่าบิตของแต่ละตัวแปรในเทอม แล้วแปลงเป็นเลขฐาน 10

- ตัวแปรปกติ (เช่น $A$) แทนด้วยบิต $1$
- ตัวแปรมีขีดบน (เช่น $\overline{A}$) แทนด้วยบิต $0$

**สูตร** สำหรับ 3 ตัวแปร ($A$ เป็น MSB)

$$
m_i = \text{เทอมที่ } ABC = (i)_2
$$

$$
\begin{array}{|c|c|c|c|c|}
\hline
\text{เลขฐาน 10} & A & B & C & \text{Minterm} \\
\hline
0 & 0 & 0 & 0 & \overline{A}\,\overline{B}\,\overline{C} \\
\hline
1 & 0 & 0 & 1 & \overline{A}\,\overline{B}\,C \\
\hline
2 & 0 & 1 & 0 & \overline{A}\,B\overline{C} \\
\hline
3 & 0 & 1 & 1 & \overline{A}\,BC \\
\hline
4 & 1 & 0 & 0 & A\overline{B}\,\overline{C} \\
\hline
5 & 1 & 0 & 1 & A\overline{B}\,C \\
\hline
6 & 1 & 1 & 0 & AB\overline{C} \\
\hline
7 & 1 & 1 & 1 & ABC \\
\hline
\end{array}
$$

**ตัวอย่าง** จงหาเลขมินเทอมของ $F(A,B,C,D) = \overline{A}\,\overline{B}CD + A\overline{B}\,\overline{C}D + ABC\overline{D}$

$\mathbf{Sol}^{n}$

$$
\begin{aligned}
\overline{A}\,\overline{B}CD &= 0011_2 = 3 &&\Rightarrow m_3 \\
A\overline{B}\,\overline{C}D &= 1001_2 = 9 &&\Rightarrow m_9 \\
ABC\overline{D} &= 1110_2 = 14 &&\Rightarrow m_{14}
\end{aligned}
$$

$\mathbf{Ans}\quad F(A,B,C,D) = m_3 + m_9 + m_{14} = \sum m(3,9,14)$

---

### 5.2 ขยาย SOP ที่ไม่เป็น Canonical

ถ้าเทอมใดขาดตัวแปร $X$ ให้คูณด้วย $(X+\overline{X})$ ซึ่งมีค่าเป็น $1$ แล้วกระจาย จนทุกเทอมมีตัวแปรครบ (เทอมที่ซ้ำกันนับเป็นตัวเดียว เพราะ $m+m=m$)

**สูตร**

$$
T = T\,(X+\overline{X}) = TX + T\overline{X}
$$

**ตัวอย่าง** จงเขียน $f(A,B,C) = A + \overline{B}C$ ให้อยู่ในรูป Canonical SOP

$\mathbf{Sol}^{n}$

$$
\begin{aligned}
f(A,B,C) &= A + \overline{B}C \\
&= A(B+\overline{B})(C+\overline{C}) + (A+\overline{A})\overline{B}C \\
&= ABC + AB\overline{C} + A\overline{B}C + A\overline{B}\,\overline{C} + A\overline{B}C + \overline{A}\,\overline{B}C \\
&= m_7 + m_6 + m_5 + m_4 + m_5 + m_1 \\
&= m_1 + m_4 + m_5 + m_6 + m_7
\end{aligned}
$$

$\mathbf{Ans}\quad f(A,B,C) = \sum m(1,4,5,6,7)$

---

### 5.3 เขียน Σm จากตารางความจริง

เลือกเฉพาะแถวที่ **เอาต์พุตเป็น 1** แล้วนำมินเทอมของแถวเหล่านั้นมาบวกกัน

**สูตร**

$$
F = \sum m(\text{เลขแถวที่ } \text{Output}=1)
$$

**ตัวอย่าง** จงเขียน Canonical SOP จากตารางความจริง

$$
\begin{array}{|c|c|c|c|c|}
\hline
\text{Dec} & A & B & C & F \\
\hline
0 & 0 & 0 & 0 & 0 \\
\hline
1 & 0 & 0 & 1 & 1 \\
\hline
2 & 0 & 1 & 0 & 1 \\
\hline
3 & 0 & 1 & 1 & 0 \\
\hline
4 & 1 & 0 & 0 & 1 \\
\hline
5 & 1 & 0 & 1 & 0 \\
\hline
6 & 1 & 1 & 0 & 0 \\
\hline
7 & 1 & 1 & 1 & 1 \\
\hline
\end{array}
$$

$\mathbf{Sol}^{n}$

$$
\begin{aligned}
\text{Output}=1 &:\ \text{Dec } 1,2,4,7 \\
F &= m_1+m_2+m_4+m_7 = \sum m(1,2,4,7) \\
&= \overline{A}\,\overline{B}\,C+\overline{A}\,B\overline{C}+A\overline{B}\,\overline{C}+ABC
\end{aligned}
$$

$\mathbf{Ans}\quad F(A,B,C) = \sum m(1,2,4,7) = \overline{A}\,\overline{B}\,C+\overline{A}\,B\overline{C}+A\overline{B}\,\overline{C}+ABC$

> หมายเหตุ ถ้าโจทย์เรียงคอลัมน์ในตารางเป็น $C,B,A$ (ตัวแปร $A$ เป็นบิตน้อยสุด) ให้อ่านบิตตามลำดับคอลัมน์ในตาราง แล้วจึงแปลงเป็นเลขฐาน 10

---

### 5.4 ออกแบบวงจรจาก Σm

แต่ละมินเทอมใช้ AND (ตัวแปรที่มีขีดบนผ่าน NOT ก่อน) แล้วนำทุกเทอมมารวมกันด้วย OR

**ตัวอย่าง** จงออกแบบวงจรลอจิกจาก $F(A,B,C) = \sum m(1,2,4,7)$ (ฟังก์ชันจากข้อ 5.3)

$\mathbf{Sol}^{n}$

$$
\begin{aligned}
F &= m_1+m_2+m_4+m_7 \\
&= \overline{A}\,\overline{B}\,C+\overline{A}\,B\overline{C}+A\overline{B}\,\overline{C}+ABC
\end{aligned}
$$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="554" height="542" viewBox="0 0 616 602" font-family="Times New Roman, serif" font-size="18" fill="currentColor"><g stroke="currentColor" stroke-width="1.8" fill="none"><line x1="46.0" y1="88.0" x2="170.0" y2="88.0"/>
<line x1="76.0" y1="144.0" x2="170.0" y2="144.0"/>
<line x1="216.0" y1="88.0" x2="248.0" y2="88.0"/>
<line x1="248.0" y1="88.0" x2="248.0" y2="192.0"/>
<line x1="248.0" y1="192.0" x2="328.0" y2="192.0"/>
<line x1="216.0" y1="144.0" x2="260.0" y2="144.0"/>
<line x1="260.0" y1="144.0" x2="260.0" y2="206.0"/>
<line x1="260.0" y1="206.0" x2="328.0" y2="206.0"/>
<line x1="106.0" y1="220.0" x2="328.0" y2="220.0"/>
<line x1="106.0" y1="268.0" x2="170.0" y2="268.0"/>
<line x1="216.0" y1="88.0" x2="272.0" y2="88.0"/>
<line x1="272.0" y1="88.0" x2="272.0" y2="316.0"/>
<line x1="272.0" y1="316.0" x2="328.0" y2="316.0"/>
<line x1="76.0" y1="330.0" x2="328.0" y2="330.0"/>
<line x1="216.0" y1="268.0" x2="284.0" y2="268.0"/>
<line x1="284.0" y1="268.0" x2="284.0" y2="344.0"/>
<line x1="284.0" y1="344.0" x2="328.0" y2="344.0"/>
<line x1="46.0" y1="384.0" x2="328.0" y2="384.0"/>
<line x1="216.0" y1="144.0" x2="296.0" y2="144.0"/>
<line x1="296.0" y1="144.0" x2="296.0" y2="398.0"/>
<line x1="296.0" y1="398.0" x2="328.0" y2="398.0"/>
<line x1="216.0" y1="268.0" x2="308.0" y2="268.0"/>
<line x1="308.0" y1="268.0" x2="308.0" y2="412.0"/>
<line x1="308.0" y1="412.0" x2="328.0" y2="412.0"/>
<line x1="46.0" y1="452.0" x2="170.0" y2="452.0"/>
<line x1="76.0" y1="466.0" x2="170.0" y2="466.0"/>
<line x1="106.0" y1="480.0" x2="170.0" y2="480.0"/>
<line x1="384.0" y1="206.0" x2="406.0" y2="206.0"/>
<line x1="406.0" y1="206.0" x2="406.0" y2="520.0"/>
<line x1="406.0" y1="520.0" x2="466.2" y2="520.0"/>
<line x1="384.0" y1="330.0" x2="418.0" y2="330.0"/>
<line x1="418.0" y1="330.0" x2="418.0" y2="534.0"/>
<line x1="418.0" y1="534.0" x2="468.7" y2="534.0"/>
<line x1="384.0" y1="398.0" x2="430.0" y2="398.0"/>
<line x1="430.0" y1="398.0" x2="430.0" y2="548.0"/>
<line x1="430.0" y1="548.0" x2="468.7" y2="548.0"/>
<line x1="226.0" y1="466.0" x2="442.0" y2="466.0"/>
<line x1="442.0" y1="466.0" x2="442.0" y2="562.0"/>
<line x1="442.0" y1="562.0" x2="466.2" y2="562.0"/>
<circle cx="248.0" cy="88.0" r="3" fill="currentColor" stroke="none"/>
<circle cx="260.0" cy="144.0" r="3" fill="currentColor" stroke="none"/>
<circle cx="284.0" cy="268.0" r="3" fill="currentColor" stroke="none"/>
<line x1="46.0" y1="34.0" x2="46.0" y2="452.0"/>
<circle cx="46" cy="88.0" r="3" fill="currentColor" stroke="none"/>
<circle cx="46" cy="384.0" r="3" fill="currentColor" stroke="none"/>
<line x1="76.0" y1="34.0" x2="76.0" y2="466.0"/>
<circle cx="76" cy="144.0" r="3" fill="currentColor" stroke="none"/>
<circle cx="76" cy="330.0" r="3" fill="currentColor" stroke="none"/>
<line x1="106.0" y1="34.0" x2="106.0" y2="480.0"/>
<circle cx="106" cy="220.0" r="3" fill="currentColor" stroke="none"/>
<circle cx="106" cy="268.0" r="3" fill="currentColor" stroke="none"/>
<polygon points="170,68 170,108 206,88"/>
<circle cx="211" cy="88" r="5"/>
<polygon points="170,124 170,164 206,144"/>
<circle cx="211" cy="144" r="5"/>
<path d="M328,180 H358 A26,26 0 0 1 358,232 H328 Z"/>
<polygon points="170,248 170,288 206,268"/>
<circle cx="211" cy="268" r="5"/>
<path d="M328,304 H358 A26,26 0 0 1 358,356 H328 Z"/>
<path d="M328,372 H358 A26,26 0 0 1 358,424 H328 Z"/>
<path d="M170,440 H200 A26,26 0 0 1 200,492 H170 Z"/>
<path d="M462,508.0 C484,508.0 510,524.5 526,541.0 C510,557.5 484,574.0 462,574.0 Q476,541.0 462,508.0 Z"/>
<line x1="526.0" y1="541.0" x2="546.0" y2="541.0"/>
<circle cx="546" cy="541.0" r="3.5" fill="currentColor" stroke="none"/></g><text x="46" y="24" text-anchor="middle">A</text><text x="76" y="24" text-anchor="middle">B</text><text x="106" y="24" text-anchor="middle">C</text><text x="556" y="546.0">Y</text></svg>
</div>

---

## 6. POS และ Maxterm

POS (Product of Sum) คือรูปผลคูณของผลบวก เทอมที่ตัวแปรครบทุกตัวและบวกกันเรียกว่า **แมกเทอม** ใช้แทนด้วย $M_i$ โดย $i$ คือเลขฐาน 10 ของค่าบิตในแถวนั้น

### 6.1 แมกเทอมและการหาเลข $M$

อ่านค่าบิตของแต่ละตัวแปรในเทอม แล้วแปลงเป็นเลขฐาน 10 โดยกฎกลับกับมินเทอม

- ตัวแปรปกติ (เช่น $A$) แทนด้วยบิต $0$
- ตัวแปรมีขีดบน (เช่น $\overline{A}$) แทนด้วยบิต $1$

**สูตร** สำหรับ 3 ตัวแปร ($A$ เป็น MSB)

$$
M_i = \text{เทอมที่ } ABC = (i)_2 \text{ โดย } 0 \to A,\ 1 \to \overline{A}
$$

$$
\begin{array}{|c|c|c|c|c|}
\hline
\text{เลขฐาน 10} & A & B & C & \text{Maxterm} \\
\hline
0 & 0 & 0 & 0 & A+B+C \\
\hline
1 & 0 & 0 & 1 & A+B+\overline{C} \\
\hline
2 & 0 & 1 & 0 & A+\overline{B}+C \\
\hline
3 & 0 & 1 & 1 & A+\overline{B}+\overline{C} \\
\hline
4 & 1 & 0 & 0 & \overline{A}+B+C \\
\hline
5 & 1 & 0 & 1 & \overline{A}+B+\overline{C} \\
\hline
6 & 1 & 1 & 0 & \overline{A}+\overline{B}+C \\
\hline
7 & 1 & 1 & 1 & \overline{A}+\overline{B}+\overline{C} \\
\hline
\end{array}
$$

**ตัวอย่าง** จงหาเลขแมกเทอมของ $F(A,B,C,D) = (A+B+\overline{C}+D)(\overline{A}+B+C+\overline{D})(\overline{A}+\overline{B}+\overline{C}+D)$

$\mathbf{Sol}^{n}$

$$
\begin{aligned}
A+B+\overline{C}+D &= 0010_2 = 2 &&\Rightarrow M_2 \\
\overline{A}+B+C+\overline{D} &= 1001_2 = 9 &&\Rightarrow M_9 \\
\overline{A}+\overline{B}+\overline{C}+D &= 1110_2 = 14 &&\Rightarrow M_{14}
\end{aligned}
$$

$\mathbf{Ans}\quad F(A,B,C,D) = M_2 \cdot M_9 \cdot M_{14} = \prod M(2,9,14)$

---

### 6.2 ขยาย POS ที่ไม่เป็น Canonical

ถ้าเทอมใดขาดตัวแปร $X$ ให้บวกด้วย $X\overline{X}$ ซึ่งมีค่าเป็น $0$ แล้วแยกเป็นสองวงเล็บ จนทุกเทอมมีตัวแปรครบ

**สูตร**

$$
T = T + X\overline{X} = (T+X)(T+\overline{X})
$$

**ตัวอย่าง** จงเขียน $f(A,B,C) = (A+B)(\overline{A}+C)$ ให้อยู่ในรูป Canonical POS

$\mathbf{Sol}^{n}$

$$
\begin{aligned}
f(A,B,C) &= (A+B)(\overline{A}+C) \\
&= (A+B+C\overline{C})(\overline{A}+C+B\overline{B}) \\
&= (A+B+C)(A+B+\overline{C})(\overline{A}+B+C)(\overline{A}+\overline{B}+C) \\
&= M_0 \cdot M_1 \cdot M_4 \cdot M_6
\end{aligned}
$$

$\mathbf{Ans}\quad f(A,B,C) = \prod M(0,1,4,6)$

---

### 6.3 เขียน ΠM จากตารางความจริง

เลือกเฉพาะแถวที่ **เอาต์พุตเป็น 0** แล้วนำแมกเทอมของแถวเหล่านั้นมาคูณกัน

**สูตร**

$$
F = \prod M(\text{เลขแถวที่ } \text{Output}=0)
$$

**ตัวอย่าง** จงเขียน Canonical POS จากตารางความจริงเดียวกับข้อ 5.3

$$
\begin{array}{|c|c|c|c|c|}
\hline
\text{Dec} & A & B & C & F \\
\hline
0 & 0 & 0 & 0 & 0 \\
\hline
1 & 0 & 0 & 1 & 1 \\
\hline
2 & 0 & 1 & 0 & 1 \\
\hline
3 & 0 & 1 & 1 & 0 \\
\hline
4 & 1 & 0 & 0 & 1 \\
\hline
5 & 1 & 0 & 1 & 0 \\
\hline
6 & 1 & 1 & 0 & 0 \\
\hline
7 & 1 & 1 & 1 & 1 \\
\hline
\end{array}
$$

$\mathbf{Sol}^{n}$

$$
\begin{aligned}
\text{Output}=0 &:\ \text{Dec } 0,3,5,6 \\
F &= M_0 \cdot M_3 \cdot M_5 \cdot M_6 = \prod M(0,3,5,6) \\
&= (A+B+C)(A+\overline{B}+\overline{C})(\overline{A}+B+\overline{C})(\overline{A}+\overline{B}+C)
\end{aligned}
$$

$\mathbf{Ans}\quad F(A,B,C) = \prod M(0,3,5,6) = (A+B+C)(A+\overline{B}+\overline{C})(\overline{A}+B+\overline{C})(\overline{A}+\overline{B}+C)$

---

### 6.4 ออกแบบวงจรจาก ΠM

แต่ละแมกเทอมใช้ OR (ตัวแปรที่มีขีดบนผ่าน NOT ก่อน) แล้วนำทุกเทอมมาคูณกันด้วย AND

**ตัวอย่าง** จงออกแบบวงจรลอจิกจาก $F(A,B,C) = \prod M(0,3,5,6)$ (ฟังก์ชันเดียวกับข้อ 6.3)

$\mathbf{Sol}^{n}$

$$
\begin{aligned}
F &= M_0 \cdot M_3 \cdot M_5 \cdot M_6 \\
&= (A+B+C)(A+\overline{B}+\overline{C})(\overline{A}+B+\overline{C})(\overline{A}+\overline{B}+C)
\end{aligned}
$$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="568" height="542" viewBox="0 0 631 602" font-family="Times New Roman, serif" font-size="18" fill="currentColor"><g stroke="currentColor" stroke-width="1.8" fill="none"><line x1="46.0" y1="80.0" x2="175.0" y2="80.0"/>
<line x1="76.0" y1="94.0" x2="177.0" y2="94.0"/>
<line x1="106.0" y1="108.0" x2="175.0" y2="108.0"/>
<line x1="76.0" y1="156.0" x2="170.0" y2="156.0"/>
<line x1="106.0" y1="212.0" x2="170.0" y2="212.0"/>
<line x1="46.0" y1="260.0" x2="341.0" y2="260.0"/>
<line x1="216.0" y1="156.0" x2="256.0" y2="156.0"/>
<line x1="256.0" y1="156.0" x2="256.0" y2="274.0"/>
<line x1="256.0" y1="274.0" x2="343.0" y2="274.0"/>
<line x1="216.0" y1="212.0" x2="268.0" y2="212.0"/>
<line x1="268.0" y1="212.0" x2="268.0" y2="288.0"/>
<line x1="268.0" y1="288.0" x2="341.0" y2="288.0"/>
<line x1="46.0" y1="336.0" x2="170.0" y2="336.0"/>
<line x1="216.0" y1="336.0" x2="280.0" y2="336.0"/>
<line x1="280.0" y1="336.0" x2="280.0" y2="384.0"/>
<line x1="280.0" y1="384.0" x2="341.0" y2="384.0"/>
<line x1="76.0" y1="398.0" x2="343.0" y2="398.0"/>
<line x1="216.0" y1="212.0" x2="292.0" y2="212.0"/>
<line x1="292.0" y1="212.0" x2="292.0" y2="412.0"/>
<line x1="292.0" y1="412.0" x2="341.0" y2="412.0"/>
<line x1="216.0" y1="336.0" x2="304.0" y2="336.0"/>
<line x1="304.0" y1="336.0" x2="304.0" y2="452.0"/>
<line x1="304.0" y1="452.0" x2="341.0" y2="452.0"/>
<line x1="216.0" y1="156.0" x2="316.0" y2="156.0"/>
<line x1="316.0" y1="156.0" x2="316.0" y2="466.0"/>
<line x1="316.0" y1="466.0" x2="343.0" y2="466.0"/>
<line x1="106.0" y1="480.0" x2="341.0" y2="480.0"/>
<line x1="234.0" y1="94.0" x2="422.0" y2="94.0"/>
<line x1="422.0" y1="94.0" x2="422.0" y2="520.0"/>
<line x1="422.0" y1="520.0" x2="478.0" y2="520.0"/>
<line x1="400.0" y1="274.0" x2="434.0" y2="274.0"/>
<line x1="434.0" y1="274.0" x2="434.0" y2="534.0"/>
<line x1="434.0" y1="534.0" x2="478.0" y2="534.0"/>
<line x1="400.0" y1="398.0" x2="446.0" y2="398.0"/>
<line x1="446.0" y1="398.0" x2="446.0" y2="548.0"/>
<line x1="446.0" y1="548.0" x2="478.0" y2="548.0"/>
<line x1="400.0" y1="466.0" x2="458.0" y2="466.0"/>
<line x1="458.0" y1="466.0" x2="458.0" y2="562.0"/>
<line x1="458.0" y1="562.0" x2="478.0" y2="562.0"/>
<circle cx="256.0" cy="156.0" r="3" fill="currentColor" stroke="none"/>
<circle cx="268.0" cy="212.0" r="3" fill="currentColor" stroke="none"/>
<circle cx="280.0" cy="336.0" r="3" fill="currentColor" stroke="none"/>
<line x1="46.0" y1="34.0" x2="46.0" y2="336.0"/>
<circle cx="46" cy="80.0" r="3" fill="currentColor" stroke="none"/>
<circle cx="46" cy="260.0" r="3" fill="currentColor" stroke="none"/>
<line x1="76.0" y1="34.0" x2="76.0" y2="398.0"/>
<circle cx="76" cy="94.0" r="3" fill="currentColor" stroke="none"/>
<circle cx="76" cy="156.0" r="3" fill="currentColor" stroke="none"/>
<line x1="106.0" y1="34.0" x2="106.0" y2="480.0"/>
<circle cx="106" cy="108.0" r="3" fill="currentColor" stroke="none"/>
<circle cx="106" cy="212.0" r="3" fill="currentColor" stroke="none"/>
<path d="M170,68 C192,68 218,81.0 234,94 C218,107.0 192,120 170,120 Q184,94 170,68 Z"/>
<polygon points="170,136 170,176 206,156"/>
<circle cx="211" cy="156" r="5"/>
<polygon points="170,192 170,232 206,212"/>
<circle cx="211" cy="212" r="5"/>
<path d="M336,248 C358,248 384,261.0 400,274 C384,287.0 358,300 336,300 Q350,274 336,248 Z"/>
<polygon points="170,316 170,356 206,336"/>
<circle cx="211" cy="336" r="5"/>
<path d="M336,372 C358,372 384,385.0 400,398 C384,411.0 358,424 336,424 Q350,398 336,372 Z"/>
<path d="M336,440 C358,440 384,453.0 400,466 C384,479.0 358,492 336,492 Q350,466 336,440 Z"/>
<path d="M478,508.0 H508 A33.0,33.0 0 0 1 508,574.0 H478 Z"/>
<line x1="541.0" y1="541.0" x2="561.0" y2="541.0"/>
<circle cx="561.0" cy="541.0" r="3.5" fill="currentColor" stroke="none"/></g><text x="46" y="24" text-anchor="middle">A</text><text x="76" y="24" text-anchor="middle">B</text><text x="106" y="24" text-anchor="middle">C</text><text x="571.0" y="546.0">Y</text></svg>
</div>

---

### 6.5 แปลงระหว่าง Σm และ ΠM

ฟังก์ชันเดียวกันเขียนได้ทั้ง $\sum m$ และ $\prod M$ โดยเลขที่ใช้จะเป็นเลขที่เหลือของกันและกัน

**สูตร** ให้มี $n$ ตัวแปร เลขทั้งหมดคือ $0,1,\ldots,2^{n}-1$

$$
\sum m(S) = \prod M(\text{เลขทั้งหมดที่ไม่อยู่ใน } S)
$$

**ตัวอย่าง** จงเขียน $f(A,B,C) = \sum m(1,4,5,6,7)$ (ฟังก์ชันจากข้อ 5.2) ให้อยู่ในรูป $\prod M$

$\mathbf{Sol}^{n}$

$$
\begin{aligned}
\text{เลขทั้งหมด} &= 0,1,2,3,4,5,6,7 \\
\text{เลขใน } \textstyle\sum m &= 1,4,5,6,7 \\
\text{เลขที่เหลือ} &= 0,2,3 \\
f(A,B,C) &= \prod M(0,2,3) \\
&= (A+B+C)(A+\overline{B}+C)(A+\overline{B}+\overline{C})
\end{aligned}
$$

$\mathbf{Ans}\quad \sum m(1,4,5,6,7) = \prod M(0,2,3) = (A+B+C)(A+\overline{B}+C)(A+\overline{B}+\overline{C})$

---

## 7. เวนไดอะแกรม

กรอบสี่เหลี่ยมแทนทุกกรณีที่เป็นไปได้ วงกลม $A$ แทนกรณีที่ $A=1$ และพื้นที่ที่แรเงาคือกรณีที่ผลลัพธ์เป็น $1$

### 7.1 NOT, AND, OR

- NOT: $\overline{A}$ คือพื้นที่นอกวงกลม $A$
- AND: $A \cdot B$ คือพื้นที่ที่วงกลม $A$ กับ $B$ ซ้อนกัน
- OR: $A + B$ คือพื้นที่รวมของวงกลม $A$ และ $B$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="639" height="148" viewBox="0 0 710 165" font-family="Times New Roman, serif" fill="currentColor"><g stroke="currentColor" stroke-width="1.5" fill="none"><g transform="translate(10,10)">
<defs><pattern id="b1h1" width="5" height="5" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="5" stroke="currentColor" stroke-width="1"/></pattern></defs>
<g opacity="0.4"><circle cx="55" cy="56" r="30" fill="currentColor" stroke="none"/></g>
<rect width="150" height="118" fill="none"/>
<circle cx="55" cy="56" r="30" fill="none"/>
<text x="55" y="61" text-anchor="middle" font-size="15" fill="currentColor" stroke="none">A</text>
<text x="75.0" y="140" text-anchor="middle" font-size="16" fill="currentColor" stroke="none">A</text>
</g>
<g transform="translate(190,10)">
<defs><pattern id="b2h2" width="5" height="5" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="5" stroke="currentColor" stroke-width="1"/></pattern></defs>
<g opacity="0.4"><path d="M0,0H150V118H0Z M25,56 a30,30 0 1,0 60,0 a30,30 0 1,0 -60,0Z" fill-rule="evenodd" fill="currentColor" stroke="none"/></g>
<rect width="150" height="118" fill="none"/>
<circle cx="55" cy="56" r="30" fill="none"/>
<text x="55" y="61" text-anchor="middle" font-size="15" fill="currentColor" stroke="none">A</text>
<text x="75.0" y="140" text-anchor="middle" font-size="16" fill="currentColor" stroke="none"><tspan text-decoration="overline">A</tspan></text>
</g>
<g transform="translate(370,10)">
<defs><pattern id="b3h3" width="5" height="5" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="5" stroke="currentColor" stroke-width="1"/></pattern><clipPath id="b3c4"><circle cx="55" cy="56" r="30"/></clipPath></defs>
<g opacity="0.4"><g clip-path="url(#b3c4)"><circle cx="90" cy="56" r="30" fill="currentColor" stroke="none"/></g></g>
<rect width="150" height="118" fill="none"/>
<circle cx="55" cy="56" r="30" fill="none"/>
<circle cx="90" cy="56" r="30" fill="none"/>
<text x="41" y="61" text-anchor="middle" font-size="15" fill="currentColor" stroke="none">A</text>
<text x="104" y="61" text-anchor="middle" font-size="15" fill="currentColor" stroke="none">B</text>
<text x="75.0" y="140" text-anchor="middle" font-size="16" fill="currentColor" stroke="none">A · B</text>
</g>
<g transform="translate(550,10)">
<defs><pattern id="b4h5" width="5" height="5" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="5" stroke="currentColor" stroke-width="1"/></pattern></defs>
<g opacity="0.4"><circle cx="55" cy="56" r="30" fill="currentColor" stroke="none"/><circle cx="90" cy="56" r="30" fill="currentColor" stroke="none"/></g>
<rect width="150" height="118" fill="none"/>
<circle cx="55" cy="56" r="30" fill="none"/>
<circle cx="90" cy="56" r="30" fill="none"/>
<text x="41" y="61" text-anchor="middle" font-size="15" fill="currentColor" stroke="none">A</text>
<text x="104" y="61" text-anchor="middle" font-size="15" fill="currentColor" stroke="none">B</text>
<text x="75.0" y="140" text-anchor="middle" font-size="16" fill="currentColor" stroke="none">A + B</text>
</g></g></svg>
</div>

---

### 7.2 พิสูจน์สมการด้วยเวนไดอะแกรม

แรเงาพื้นที่ของสมการทั้งสองฝั่งทีละขั้น ถ้าพื้นที่แรเงาสุดท้ายเหมือนกัน แสดงว่าสมการเท่ากัน

**ตัวอย่างที่ 1** จงพิสูจน์ว่า $A + BC = (A+B)(A+C)$

$\mathbf{Sol}^{n}$

ฝั่งซ้าย $A+BC$ คือรวมพื้นที่ของ $A$ กับส่วนซ้อนกันของ $B$ และ $C$ (OR) ฝั่งขวา $(A+B)(A+C)$ คือส่วนที่ซ้อนกันของ $A+B$ กับ $A+C$ (AND)

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="648" height="346" viewBox="0 0 720 385" font-family="Times New Roman, serif" fill="currentColor"><g stroke="currentColor" stroke-width="1.5" fill="none"><g transform="translate(10,10)">
<defs><pattern id="e1h6" width="5" height="5" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="5" stroke="currentColor" stroke-width="1"/></pattern></defs>
<g opacity="0.4"><circle cx="55" cy="42" r="27" fill="currentColor" stroke="none"/></g>
<rect width="150" height="118" fill="none"/>
<circle cx="55" cy="42" r="27" fill="none"/>
<text x="55" y="47" text-anchor="middle" font-size="15" fill="currentColor" stroke="none">A</text>
<text x="75.0" y="140" text-anchor="middle" font-size="16" fill="currentColor" stroke="none">A</text>
</g>
<g transform="translate(180,10)">
<defs><pattern id="e2h7" width="5" height="5" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="5" stroke="currentColor" stroke-width="1"/></pattern><clipPath id="e2c8"><circle cx="95" cy="42" r="27"/></clipPath></defs>
<g opacity="0.4"><g clip-path="url(#e2c8)"><circle cx="75" cy="76" r="27" fill="currentColor" stroke="none"/></g></g>
<rect width="150" height="118" fill="none"/>
<circle cx="95" cy="42" r="27" fill="none"/>
<circle cx="75" cy="76" r="27" fill="none"/>
<text x="109" y="34" text-anchor="middle" font-size="15" fill="currentColor" stroke="none">B</text>
<text x="75" y="92" text-anchor="middle" font-size="15" fill="currentColor" stroke="none">C</text>
<text x="75.0" y="140" text-anchor="middle" font-size="16" fill="currentColor" stroke="none">B · C</text>
</g>
<line x1="85" y1="166" x2="120" y2="196"/><polyline points="112.4,193.6 120,196 116.4,188.8"/>
<line x1="255" y1="166" x2="220" y2="196"/><polyline points="223.6,188.8 220,196 227.6,193.6"/>
<g transform="translate(95,205)">
<defs><pattern id="e3h9" width="5" height="5" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="5" stroke="currentColor" stroke-width="1"/></pattern><clipPath id="e3c10"><circle cx="95" cy="42" r="27"/></clipPath></defs>
<g opacity="0.4"><circle cx="55" cy="42" r="27" fill="currentColor" stroke="none"/><g clip-path="url(#e3c10)"><circle cx="75" cy="76" r="27" fill="currentColor" stroke="none"/></g></g>
<rect width="150" height="118" fill="none"/>
<circle cx="55" cy="42" r="27" fill="none"/>
<circle cx="95" cy="42" r="27" fill="none"/>
<circle cx="75" cy="76" r="27" fill="none"/>
<text x="41" y="34" text-anchor="middle" font-size="15" fill="currentColor" stroke="none">A</text>
<text x="109" y="34" text-anchor="middle" font-size="15" fill="currentColor" stroke="none">B</text>
<text x="75" y="92" text-anchor="middle" font-size="15" fill="currentColor" stroke="none">C</text>
<text x="75.0" y="140" text-anchor="middle" font-size="16" fill="currentColor" stroke="none">A + B · C</text>
</g>
<line x1="350" y1="5" x2="350" y2="390" stroke-width="3"/>
<g transform="translate(380,10)">
<defs><pattern id="e4h11" width="5" height="5" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="5" stroke="currentColor" stroke-width="1"/></pattern></defs>
<g opacity="0.4"><circle cx="55" cy="42" r="27" fill="currentColor" stroke="none"/><circle cx="95" cy="42" r="27" fill="currentColor" stroke="none"/></g>
<rect width="150" height="118" fill="none"/>
<circle cx="55" cy="42" r="27" fill="none"/>
<circle cx="95" cy="42" r="27" fill="none"/>
<text x="41" y="34" text-anchor="middle" font-size="15" fill="currentColor" stroke="none">A</text>
<text x="109" y="34" text-anchor="middle" font-size="15" fill="currentColor" stroke="none">B</text>
<text x="75.0" y="140" text-anchor="middle" font-size="16" fill="currentColor" stroke="none">A + B</text>
</g>
<g transform="translate(550,10)">
<defs><pattern id="e5h12" width="5" height="5" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="5" stroke="currentColor" stroke-width="1"/></pattern></defs>
<g opacity="0.4"><circle cx="55" cy="42" r="27" fill="currentColor" stroke="none"/><circle cx="75" cy="76" r="27" fill="currentColor" stroke="none"/></g>
<rect width="150" height="118" fill="none"/>
<circle cx="55" cy="42" r="27" fill="none"/>
<circle cx="75" cy="76" r="27" fill="none"/>
<text x="41" y="34" text-anchor="middle" font-size="15" fill="currentColor" stroke="none">A</text>
<text x="75" y="92" text-anchor="middle" font-size="15" fill="currentColor" stroke="none">C</text>
<text x="75.0" y="140" text-anchor="middle" font-size="16" fill="currentColor" stroke="none">A + C</text>
</g>
<line x1="455" y1="166" x2="490" y2="196"/><polyline points="482.4,193.6 490,196 486.4,188.8"/>
<line x1="625" y1="166" x2="590" y2="196"/><polyline points="593.6,188.8 590,196 597.6,193.6"/>
<g transform="translate(465,205)">
<defs><pattern id="e6h13" width="5" height="5" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="5" stroke="currentColor" stroke-width="1"/></pattern><clipPath id="e6c14"><circle cx="55" cy="42" r="27"/><circle cx="95" cy="42" r="27"/></clipPath></defs>
<g opacity="0.4"><g clip-path="url(#e6c14)"><circle cx="55" cy="42" r="27" fill="currentColor" stroke="none"/><circle cx="75" cy="76" r="27" fill="currentColor" stroke="none"/></g></g>
<rect width="150" height="118" fill="none"/>
<circle cx="55" cy="42" r="27" fill="none"/>
<circle cx="95" cy="42" r="27" fill="none"/>
<circle cx="75" cy="76" r="27" fill="none"/>
<text x="41" y="34" text-anchor="middle" font-size="15" fill="currentColor" stroke="none">A</text>
<text x="109" y="34" text-anchor="middle" font-size="15" fill="currentColor" stroke="none">B</text>
<text x="75" y="92" text-anchor="middle" font-size="15" fill="currentColor" stroke="none">C</text>
<text x="75.0" y="140" text-anchor="middle" font-size="16" fill="currentColor" stroke="none">(A + B)(A + C)</text>
</g></g></svg>
</div>

พื้นที่แรเงาของทั้งสองฝั่งเหมือนกัน

$\mathbf{Ans}\quad A + BC = (A+B)(A+C)$

**ตัวอย่างที่ 2** จงพิสูจน์ว่า $A(B+C) = AB + AC$

$\mathbf{Sol}^{n}$

ฝั่งซ้าย $A(B+C)$ คือส่วนที่ซ้อนกันของ $A$ กับ $B+C$ (AND) ฝั่งขวา $AB+AC$ คือรวมพื้นที่ซ้อนกันของ $A,B$ กับ $A,C$ (OR)

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="648" height="346" viewBox="0 0 720 385" font-family="Times New Roman, serif" fill="currentColor"><g stroke="currentColor" stroke-width="1.5" fill="none"><g transform="translate(10,10)">
<defs><pattern id="f1h15" width="5" height="5" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="5" stroke="currentColor" stroke-width="1"/></pattern></defs>
<g opacity="0.4"><circle cx="55" cy="42" r="27" fill="currentColor" stroke="none"/></g>
<rect width="150" height="118" fill="none"/>
<circle cx="55" cy="42" r="27" fill="none"/>
<text x="55" y="47" text-anchor="middle" font-size="15" fill="currentColor" stroke="none">A</text>
<text x="75.0" y="140" text-anchor="middle" font-size="16" fill="currentColor" stroke="none">A</text>
</g>
<g transform="translate(180,10)">
<defs><pattern id="f2h16" width="5" height="5" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="5" stroke="currentColor" stroke-width="1"/></pattern></defs>
<g opacity="0.4"><circle cx="95" cy="42" r="27" fill="currentColor" stroke="none"/><circle cx="75" cy="76" r="27" fill="currentColor" stroke="none"/></g>
<rect width="150" height="118" fill="none"/>
<circle cx="95" cy="42" r="27" fill="none"/>
<circle cx="75" cy="76" r="27" fill="none"/>
<text x="109" y="34" text-anchor="middle" font-size="15" fill="currentColor" stroke="none">B</text>
<text x="75" y="92" text-anchor="middle" font-size="15" fill="currentColor" stroke="none">C</text>
<text x="75.0" y="140" text-anchor="middle" font-size="16" fill="currentColor" stroke="none">B + C</text>
</g>
<line x1="85" y1="166" x2="120" y2="196"/><polyline points="112.4,193.6 120,196 116.4,188.8"/>
<line x1="255" y1="166" x2="220" y2="196"/><polyline points="223.6,188.8 220,196 227.6,193.6"/>
<g transform="translate(95,205)">
<defs><pattern id="f3h17" width="5" height="5" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="5" stroke="currentColor" stroke-width="1"/></pattern><clipPath id="f3c18"><circle cx="55" cy="42" r="27"/></clipPath></defs>
<g opacity="0.4"><g clip-path="url(#f3c18)"><circle cx="95" cy="42" r="27" fill="currentColor" stroke="none"/><circle cx="75" cy="76" r="27" fill="currentColor" stroke="none"/></g></g>
<rect width="150" height="118" fill="none"/>
<circle cx="55" cy="42" r="27" fill="none"/>
<circle cx="95" cy="42" r="27" fill="none"/>
<circle cx="75" cy="76" r="27" fill="none"/>
<text x="41" y="34" text-anchor="middle" font-size="15" fill="currentColor" stroke="none">A</text>
<text x="109" y="34" text-anchor="middle" font-size="15" fill="currentColor" stroke="none">B</text>
<text x="75" y="92" text-anchor="middle" font-size="15" fill="currentColor" stroke="none">C</text>
<text x="75.0" y="140" text-anchor="middle" font-size="16" fill="currentColor" stroke="none">A(B + C)</text>
</g>
<line x1="350" y1="5" x2="350" y2="390" stroke-width="3"/>
<g transform="translate(380,10)">
<defs><pattern id="f4h19" width="5" height="5" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="5" stroke="currentColor" stroke-width="1"/></pattern><clipPath id="f4c20"><circle cx="55" cy="42" r="27"/></clipPath></defs>
<g opacity="0.4"><g clip-path="url(#f4c20)"><circle cx="95" cy="42" r="27" fill="currentColor" stroke="none"/></g></g>
<rect width="150" height="118" fill="none"/>
<circle cx="55" cy="42" r="27" fill="none"/>
<circle cx="95" cy="42" r="27" fill="none"/>
<text x="41" y="34" text-anchor="middle" font-size="15" fill="currentColor" stroke="none">A</text>
<text x="109" y="34" text-anchor="middle" font-size="15" fill="currentColor" stroke="none">B</text>
<text x="75.0" y="140" text-anchor="middle" font-size="16" fill="currentColor" stroke="none">AB</text>
</g>
<g transform="translate(550,10)">
<defs><pattern id="f5h21" width="5" height="5" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="5" stroke="currentColor" stroke-width="1"/></pattern><clipPath id="f5c22"><circle cx="55" cy="42" r="27"/></clipPath></defs>
<g opacity="0.4"><g clip-path="url(#f5c22)"><circle cx="75" cy="76" r="27" fill="currentColor" stroke="none"/></g></g>
<rect width="150" height="118" fill="none"/>
<circle cx="55" cy="42" r="27" fill="none"/>
<circle cx="75" cy="76" r="27" fill="none"/>
<text x="41" y="34" text-anchor="middle" font-size="15" fill="currentColor" stroke="none">A</text>
<text x="75" y="92" text-anchor="middle" font-size="15" fill="currentColor" stroke="none">C</text>
<text x="75.0" y="140" text-anchor="middle" font-size="16" fill="currentColor" stroke="none">AC</text>
</g>
<line x1="455" y1="166" x2="490" y2="196"/><polyline points="482.4,193.6 490,196 486.4,188.8"/>
<line x1="625" y1="166" x2="590" y2="196"/><polyline points="593.6,188.8 590,196 597.6,193.6"/>
<g transform="translate(465,205)">
<defs><pattern id="f6h23" width="5" height="5" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="5" stroke="currentColor" stroke-width="1"/></pattern><clipPath id="f6c24"><circle cx="55" cy="42" r="27"/></clipPath><clipPath id="f6c25"><circle cx="55" cy="42" r="27"/></clipPath></defs>
<g opacity="0.4"><g clip-path="url(#f6c24)"><circle cx="95" cy="42" r="27" fill="currentColor" stroke="none"/></g><g clip-path="url(#f6c25)"><circle cx="75" cy="76" r="27" fill="currentColor" stroke="none"/></g></g>
<rect width="150" height="118" fill="none"/>
<circle cx="55" cy="42" r="27" fill="none"/>
<circle cx="95" cy="42" r="27" fill="none"/>
<circle cx="75" cy="76" r="27" fill="none"/>
<text x="41" y="34" text-anchor="middle" font-size="15" fill="currentColor" stroke="none">A</text>
<text x="109" y="34" text-anchor="middle" font-size="15" fill="currentColor" stroke="none">B</text>
<text x="75" y="92" text-anchor="middle" font-size="15" fill="currentColor" stroke="none">C</text>
<text x="75.0" y="140" text-anchor="middle" font-size="16" fill="currentColor" stroke="none">AB + AC</text>
</g></g></svg>
</div>

พื้นที่แรเงาของทั้งสองฝั่งเหมือนกัน

$\mathbf{Ans}\quad A(B+C) = AB + AC$

