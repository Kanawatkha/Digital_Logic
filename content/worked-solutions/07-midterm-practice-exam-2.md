# แนวข้อสอบกลางภาค ชุดที่ 2 (Midterm Practice Exam 2)

ข้อสอบมี 5 ข้อใหญ่ รวม 34 คะแนน (ข้อ 1 = 8, ข้อ 2 = 6, ข้อ 3 = 5, ข้อ 4 = 8, ข้อ 5 = 7) ข้อ 4 และข้อ 5 เป็นข้อต่อเนื่อง คำตอบของข้อย่อยก่อนหน้าต้องนำไปใช้ในข้อย่อยถัดไป เฉลยอ้างทฤษฎีบทตามเลขข้อในตารางสรุปบทที่ 3

---

## ข้อ 1 (8 คะแนน)

### ข้อ 1.1  จงแปลงเลข $26.8125_{10}$ เป็นเลขฐาน 2 (ทศนิยม 4 ตำแหน่ง) (2 คะแนน)

$\mathbf{Sol}^{n}$

ส่วนจำนวนเต็ม $26$ หารด้วย $2$ ซ้ำ ส่วนทศนิยม $0.8125$ คูณด้วย $2$ ซ้ำ 4 ครั้ง

$$
\begin{array}{c|r|l}
2 & 26 & 0 \ \ (\text{LSB}) \\
2 & 13 & 1 \\
2 & 6 & 0 \\
2 & 3 & 1 \\
2 & 1 & 1 \ \ (\text{MSB}) \\
 & 0 &
\end{array}
\qquad
\begin{aligned}
0.8125\times2 &= 1.625 &&\Rightarrow 1\ \ (\text{MSB}) \\
0.625\times2 &= 1.25 &&\Rightarrow 1 \\
0.25\times2 &= 0.5 &&\Rightarrow 0 \\
0.5\times2 &= 1 &&\Rightarrow 1
\end{aligned}
$$

เศษอ่านล่างขึ้นบน $\Rightarrow 11010$ และส่วนทศนิยมอ่านบนลงล่าง $\Rightarrow .1101$

$\mathbf{Ans}\quad 26.8125_{10}=\mathbf{(11010.1101)_2}$

---

### ข้อ 1.2  จงแปลงเลขฐาน $1101011001.10110101_2$ ให้อยู่ในรูปฐาน 8 และ ฐาน 16 (2 คะแนน)

$\mathbf{Sol}^{n}$

ฐาน 8 แบ่งกลุ่มละ 3 บิต ส่วนจำนวนเต็มแบ่งจากขวา (เติม 0 ทางซ้าย) และส่วนทศนิยมแบ่งจากซ้าย (เติม 0 ทางขวา)

$$
\begin{array}{cccccccc}
001 & 101 & 011 & 001 & . & 101 & 101 & 010 \\
\downarrow & \downarrow & \downarrow & \downarrow & & \downarrow & \downarrow & \downarrow \\
1 & 5 & 3 & 1 & . & 5 & 5 & 2
\end{array}
$$

ฐาน 16 แบ่งกลุ่มละ 4 บิต ด้วยวิธีเดียวกัน

$$
\begin{array}{cccccc}
0011 & 0101 & 1001 & . & 1011 & 0101 \\
\downarrow & \downarrow & \downarrow & & \downarrow & \downarrow \\
3 & 5 & 9 & . & B & 5
\end{array}
$$

$\mathbf{Ans}\quad 1101011001.10110101_2=\mathbf{(1531.552)_8}=\mathbf{(359.B5)_{16}}$

---

### ข้อ 1.3  จงแปลงเลขฐานสองต่อไปนี้เป็นรหัสเกรย์ $10110101_2$ (1 คะแนน)

$\mathbf{Sol}^{n}$

ดึงบิต MSB ลงมา แล้วบวก (ตัดตัวทด) บิตซ้ายกับบิตขวาที่อยู่ติดกัน

$$
\begin{array}{ccccccccccccccc}
\text{MSB} &  &  &  &  &  &  &  &  &  &  &  &  &  & \text{LSB} \\
1 & + & 0 & + & 1 & + & 1 & + & 0 & + & 1 & + & 0 & + & 1 \\
\downarrow &  & \downarrow &  & \downarrow &  & \downarrow &  & \downarrow &  & \downarrow &  & \downarrow &  & \downarrow \\
1 &  & 1 &  & 1 &  & 0 &  & 1 &  & 1 &  & 1 &  & 1
\end{array}
$$

$\mathbf{Ans}\quad 10110101_2=\mathbf{11101111_{Gray}}$

---

### ข้อ 1.4  จงแปลงเลขฐานสิบ $3920$ เป็นรหัส BCD และรหัสเกินสาม (Excess-3) (1 คะแนน)

$\mathbf{Sol}^{n}$

BCD แปลงทีละหลักฐาน 10 เป็น 4 บิต ส่วน Excess-3 คือ BCD ของแต่ละหลักบวก $0011$

$$
\begin{array}{cccc}
3 & 9 & 2 & 0 \\
\downarrow & \downarrow & \downarrow & \downarrow \\
0011 & 1001 & 0010 & 0000 \\
+0011 & +0011 & +0011 & +0011 \\
\hline
0110 & 1100 & 0101 & 0011
\end{array}
$$

$\mathbf{Ans}\quad 3920=\mathbf{(0011 1001 0010 0000)_{BCD}}=\mathbf{(0110 1100 0101 0011)_{Excess-3}}$

---

### ข้อ 1.5  จงแปลงข้อความ Gate เป็นรหัส ASCII (1 คะแนน)

$\mathbf{Sol}^{n}$

ASCII อ่านจากตาราง คอลัมน์ $B_7B_6B_5$ ต่อด้วยแถว $B_4B_3B_2B_1$

| ตัวอักษร | คอลัมน์ ($B_7B_6B_5$) | แถว ($B_4B_3B_2B_1$) | ASCII 7 บิต |
|:---:|:---:|:---:|:---:|
| G | 100 | 0111 | 1000111 |
| a | 110 | 0001 | 1100001 |
| t | 111 | 0100 | 1110100 |
| e | 110 | 0101 | 1100101 |

$\mathbf{Ans}\quad$ Gate $= \mathbf{1000111 1100001 1110100 1100101}$

---

### ข้อ 1.6  หาค่า $100110_2-11011_2$ โดยใช้วิธี 1's complement (1 คะแนน)

$\mathbf{Sol}^{n}$

เติม 0 ให้ตัวลบมี 6 บิต : $11011\to011011$ แล้ว 1's ของ $011011$ คือ $100100$

$$
\begin{array}{cccccccc}
 & & 1 & 0 & 0 & 1 & 1 & 0 \\
+ & & 1 & 0 & 0 & 1 & 0 & 0 \\
\hline
 & 1 & 0 & 0 & 1 & 0 & 1 & 0 \\
\end{array}
$$

มีตัวทด จึงนำตัวทดไปบวกบิตขวาสุด : $001010+1=001011$ ได้คำตอบเป็นบวก

$\mathbf{Ans}\quad 100110_2-11011_2=\mathbf{+001011_2}$

---

## ข้อ 2 (6 คะแนน)

### ข้อ 2.1  จงลดรูปสมการต่อไปนี้ให้สั้นที่สุด $Y=A\overline{B}+AB\overline{C}+\overline{A}\,\overline{B}$ (2 คะแนน)

$\mathbf{Sol}^{n}$

$$
\begin{aligned}
Y &= A\overline{B}+AB\overline{C}+\overline{A}\,\overline{B} \\
&= A(\overline{B}+B\overline{C})+\overline{A}\,\overline{B} &&\text{ดึง $A$ ออก (กระจาย ข้อ 3(b))} \\
&= A(\overline{B}+\overline{C})+\overline{A}\,\overline{B} &&\text{ข้อ 9(a) $X+\overline{X}Y=X+Y$ โดย $X=\overline{B}$} \\
&= A\overline{B}+A\overline{C}+\overline{A}\,\overline{B} &&\text{กระจาย ข้อ 3(b)} \\
&= \overline{B}(A+\overline{A})+A\overline{C} &&\text{ดึง $\overline{B}$ ออก (กระจาย ข้อ 3(b))} \\
&= \overline{B}\cdot1+A\overline{C} &&\text{ข้อ 8(a) $A+\overline{A}=1$} \\
&= \overline{B}+A\overline{C} &&\text{ข้อ 7(b) $X\cdot1=X$}
\end{aligned}
$$

$\mathbf{Ans}\quad Y=\overline{B}+A\overline{C}$

---

### ข้อ 2.2  จงพิสูจน์ว่า $\overline{A}B+A\overline{B}+AB=A+B$ โดยใช้ทฤษฎีบทพีชคณิตบูลีน และระบุทฤษฎีบทที่ใช้ในแต่ละขั้น (2 คะแนน)

$\mathbf{Sol}^{n}$

พิสูจน์โดยจัดรูปด้านซ้ายให้เท่ากับด้านขวา

$$
\begin{aligned}
\overline{A}B+A\overline{B}+AB &= \overline{A}B+A(\overline{B}+B) &&\text{ดึง $A$ ออก (กระจาย ข้อ 3(b))} \\
&= \overline{A}B+A\cdot1 &&\text{ข้อ 8(a) $B+\overline{B}=1$} \\
&= \overline{A}B+A &&\text{ข้อ 7(b) $X\cdot1=X$} \\
&= A+\overline{A}B &&\text{สลับที่ ข้อ 1(a)} \\
&= A+B &&\text{ข้อ 9(a) $A+\overline{A}B=A+B$}
\end{aligned}
$$

ด้านซ้ายเท่ากับด้านขวา จึงพิสูจน์ได้

$\mathbf{Ans}\quad \overline{A}B+A\overline{B}+AB=A+B\quad\text{(พิสูจน์แล้ว)}$

---

### ข้อ 2.3  จงใช้ทฤษฎีของเดอร์มอร์แกนแปลงสมการ $Y=\overline{\overline{A}B+C\overline{D}}$ ให้ไม่มีเครื่องหมายขีดคลุมเหนือหลายตัวแปร (2 คะแนน)

$\mathbf{Sol}^{n}$

$$
\begin{aligned}
Y &= \overline{\overline{A}B+C\overline{D}} \\
&= \overline{\overline{A}B}\cdot\overline{C\overline{D}} &&\text{เดอร์มอร์แกน ข้อ 10(a) $\overline{X+Y}=\overline{X}\,\overline{Y}$} \\
&= (\overline{\overline{A}}+\overline{B})(\overline{C}+\overline{\overline{D}}) &&\text{เดอร์มอร์แกน ข้อ 10(b) $\overline{XY}=\overline{X}+\overline{Y}$} \\
&= (A+\overline{B})(\overline{C}+D) &&\text{ข้อ 5(b) $\overline{\overline{X}}=X$}
\end{aligned}
$$

$\mathbf{Ans}\quad Y=(A+\overline{B})(\overline{C}+D)$

---

## ข้อ 3 (5 คะแนน)

### ข้อ 3.1  จงวาดลอจิกไดอะแกรมของบูลีนฟังก์ชัน $F=(A+\overline{B})\,\overline{C}+AB$ (2 คะแนน)

$\mathbf{Sol}^{n}$

แยกสมการเป็นเกตทีละชั้น

$$
\begin{aligned}
\text{NOT} &: \overline{B},\ \overline{C} \\
\text{OR} &: (A+\overline{B}) \\
\text{AND} &: (A+\overline{B})\,\overline{C}\quad\text{และ}\quad AB \\
\text{OR} &: F=(A+\overline{B})\,\overline{C}+AB
\end{aligned}
$$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="540" height="324" viewBox="0 0 600 360" font-family="Times New Roman, serif" font-size="20" fill="currentColor">
<g stroke="currentColor" stroke-width="1.8" fill="none"><path d="M90 110L130 130L90 150Z"/>
<circle cx="135" cy="130" r="5"/>
<path d="M90 230L130 250L90 270Z"/>
<circle cx="135" cy="250" r="5"/>
<path d="M210 50Q250 50 270 75.0Q250 100 210 100Q224 75.0 210 50Z"/>
<path d="M330 100H360A25.0 25.0 0 0 1 360 150H330Z"/>
<path d="M210 290H240A25.0 25.0 0 0 1 240 340H210Z"/>
<path d="M450 170Q490 170 510 195.0Q490 220 450 220Q464 195.0 450 170Z"/>
<polyline points="36,62 62,62 210,62.0"/>
<polyline points="140,130 175,130 175,88.0 210,88.0"/>
<polyline points="270,75.0 300,75.0 300,112.0 330,112.0"/>
<polyline points="140,250 285,250 285,138.0 330,138.0"/>
<polyline points="36,62 52,62 52,302.0 210,302.0"/>
<polyline points="36,130 70,130 70,328.0 210,328.0"/>
<polyline points="36,130 60,130 90,130"/>
<polyline points="36,250 60,250 90,250"/>
<polyline points="385.0,125.0 420,125.0 420,182.0 450,182.0"/>
<polyline points="265.0,315.0 435,315.0 435,208.0 450,208.0"/>
<line x1="510" y1="195.0" x2="560" y2="195.0"/></g>
<circle cx="52" cy="62" r="3" fill="currentColor" stroke="none"/><circle cx="60" cy="130" r="3" fill="currentColor" stroke="none"/>
<text x="12" y="68" font-size="20" font-style="italic" text-anchor="start" fill="currentColor" stroke="none">A</text><text x="12" y="136" font-size="20" font-style="italic" text-anchor="start" fill="currentColor" stroke="none">B</text><text x="12" y="256" font-size="20" font-style="italic" text-anchor="start" fill="currentColor" stroke="none">C</text><text x="572" y="201.0" font-size="20" font-style="italic" text-anchor="start" fill="currentColor" stroke="none">F</text>
</svg>
</div>

$\mathbf{Ans}\quad$ วงจรดังรูปด้านบน ($F=(A+\overline{B})\,\overline{C}+AB$)

---

### ข้อ 3.2  จากวงจรที่กำหนดให้ จงหา Function Output ของเกต $G_1$ ถึง $G_4$ ทุกตัว และเขียนตารางความจริงของวงจร (3 คะแนน)

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="468" height="234" viewBox="0 0 520 260" font-family="Times New Roman, serif" font-size="20" fill="currentColor">
<g stroke="currentColor" stroke-width="1.8" fill="none"><line x1="36" y1="42" x2="110" y2="42"/>
<polyline points="36,122 80,122"/>
<polyline points="80,68 80,162 110,162"/>
<polyline points="80,68 110,68"/>
<polyline points="36,232 345,232 345,188 370,188"/>
<polyline points="95,232 95,188 110,188"/>
<path d="M110 30Q150 30 170 55Q150 80 110 80Q124 55 110 30Z"/>
<path d="M102 30Q116 55 102 80"/>
<path d="M110 150H140A25 25 0 0 1 140 200H110Z"/>
<circle cx="170" cy="175" r="5"/>
<polyline points="170,55 210,55 210,107 250,107"/>
<polyline points="175,175 225,175 225,133 250,133"/>
<path d="M250 95Q290 95 310 120Q290 145 250 145Q264 120 250 95Z"/>
<circle cx="315" cy="120" r="5"/>
<polyline points="315,120 340,120 340,162 370,162"/>
<path d="M370 150Q410 150 430 175Q410 200 370 200Q384 175 370 150Z"/>
<line x1="430" y1="175" x2="480" y2="175"/></g>
<circle cx="80" cy="122" r="3" fill="currentColor" stroke="none"/><circle cx="95" cy="232" r="3" fill="currentColor" stroke="none"/>
<text x="14" y="48" font-size="20" font-style="italic" text-anchor="start" fill="currentColor" stroke="none">A</text><text x="14" y="128" font-size="20" font-style="italic" text-anchor="start" fill="currentColor" stroke="none">B</text><text x="14" y="238" font-size="20" font-style="italic" text-anchor="start" fill="currentColor" stroke="none">C</text><text x="492" y="181" font-size="20" font-style="italic" text-anchor="start" fill="currentColor" stroke="none">F</text><text x="142" y="22" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">G1</text><text x="142" y="142" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">G2</text><text x="282" y="87" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">G3</text><text x="400" y="142" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">G4</text>
</svg>
</div>

$\mathbf{Sol}^{n}$

ไล่เอาต์พุตของเกตแต่ละตัวจากอินพุตไปหาเอาต์พุต ($G_4$ คือเอาต์พุต $F$)

$$
\begin{aligned}
G_1 &= A\oplus B \\
G_2 &= \overline{B\cdot C} \\
G_3 &= \overline{G_1+G_2} \\
G_4=F &= G_3+C
\end{aligned}
$$

| $A$ | $B$ | $C$ | $G_1$ | $G_2$ | $G_3$ | $F$ |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| 0 | 0 | 0 | 0 | 1 | 0 | 0 |
| 0 | 0 | 1 | 0 | 1 | 0 | 1 |
| 0 | 1 | 0 | 1 | 1 | 0 | 0 |
| 0 | 1 | 1 | 1 | 0 | 0 | 1 |
| 1 | 0 | 0 | 1 | 1 | 0 | 0 |
| 1 | 0 | 1 | 1 | 1 | 0 | 1 |
| 1 | 1 | 0 | 0 | 1 | 0 | 0 |
| 1 | 1 | 1 | 0 | 0 | 1 | 1 |

$\mathbf{Ans}\quad F=1$ เมื่อ $ABC=001, 011, 101, 111$ และ $F=0$ เมื่อ $ABC=000, 010, 100, 110$

---

## ข้อ 4 จงออกแบบวงจรลอจิกจากไดอะแกรมเวลาต่อไปนี้ ซึ่งมีอินพุต $A$, $B$, $C$, $D$ และเอาต์พุต $Y$ โดยช่วงที่ $Y$ เป็น $X$ คือช่วงที่ไม่สนใจค่า (Don't Care) (8 คะแนน)

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="700" height="336" viewBox="0 0 720 340" font-family="Times New Roman, serif" font-size="20" fill="currentColor">
<g stroke="currentColor" stroke-width="1.8" fill="none"><polyline points="70,60 108,60 108,60 146,60 146,60 184,60 184,60 222,60 222,60 260,60 260,60 298,60 298,60 336,60 336,60 374,60 374,30 412,30 412,30 450,30 450,30 488,30 488,30 526,30 526,30 564,30 564,30 602,30 602,30 640,30 640,30 678,30"/>
<polyline points="70,120 108,120 108,120 146,120 146,120 184,120 184,120 222,120 222,90 260,90 260,90 298,90 298,90 336,90 336,90 374,90 374,120 412,120 412,120 450,120 450,120 488,120 488,120 526,120 526,90 564,90 564,90 602,90 602,90 640,90 640,90 678,90"/>
<polyline points="70,180 108,180 108,180 146,180 146,150 184,150 184,150 222,150 222,180 260,180 260,180 298,180 298,150 336,150 336,150 374,150 374,180 412,180 412,180 450,180 450,150 488,150 488,150 526,150 526,180 564,180 564,180 602,180 602,150 640,150 640,150 678,150"/>
<polyline points="70,240 108,240 108,210 146,210 146,240 184,240 184,210 222,210 222,240 260,240 260,210 298,210 298,240 336,240 336,210 374,210 374,240 412,240 412,210 450,210 450,240 488,240 488,210 526,210 526,240 564,240 564,210 602,210 602,240 640,240 640,210 678,210"/>
<rect x="108" y="280" width="38" height="30" fill="currentColor" fill-opacity="0.14"/>
<line x1="108" y1="280" x2="146" y2="280" stroke-dasharray="4 3"/>
<line x1="108" y1="310" x2="146" y2="310" stroke-dasharray="4 3"/>
<text x="127" y="301" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">X</text>
<polyline points="70,310 108,310"/>
<rect x="298" y="280" width="38" height="30" fill="currentColor" fill-opacity="0.14"/>
<line x1="298" y1="280" x2="336" y2="280" stroke-dasharray="4 3"/>
<line x1="298" y1="310" x2="336" y2="310" stroke-dasharray="4 3"/>
<text x="317" y="301" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">X</text>
<polyline points="146,280 184,280 184,280 222,280 222,280 260,280 260,280 260,310 298,310"/>
<rect x="488" y="280" width="38" height="30" fill="currentColor" fill-opacity="0.14"/>
<line x1="488" y1="280" x2="526" y2="280" stroke-dasharray="4 3"/>
<line x1="488" y1="310" x2="526" y2="310" stroke-dasharray="4 3"/>
<text x="507" y="301" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">X</text>
<polyline points="336,310 374,310 374,310 374,280 412,280 412,280 450,280 450,280 488,280"/>
<polyline points="526,310 564,310 564,310 602,310 602,310 640,310 640,310 678,310"/></g>
<g stroke="currentColor" fill="none"><line x1="70" y1="8" x2="70" y2="318" stroke-dasharray="2 5" stroke-opacity="0.45"/><line x1="108" y1="8" x2="108" y2="318" stroke-dasharray="2 5" stroke-opacity="0.45"/><line x1="146" y1="8" x2="146" y2="318" stroke-dasharray="2 5" stroke-opacity="0.45"/><line x1="184" y1="8" x2="184" y2="318" stroke-dasharray="2 5" stroke-opacity="0.45"/><line x1="222" y1="8" x2="222" y2="318" stroke-dasharray="2 5" stroke-opacity="0.45"/><line x1="260" y1="8" x2="260" y2="318" stroke-dasharray="2 5" stroke-opacity="0.45"/><line x1="298" y1="8" x2="298" y2="318" stroke-dasharray="2 5" stroke-opacity="0.45"/><line x1="336" y1="8" x2="336" y2="318" stroke-dasharray="2 5" stroke-opacity="0.45"/><line x1="374" y1="8" x2="374" y2="318" stroke-dasharray="2 5" stroke-opacity="0.45"/><line x1="412" y1="8" x2="412" y2="318" stroke-dasharray="2 5" stroke-opacity="0.45"/><line x1="450" y1="8" x2="450" y2="318" stroke-dasharray="2 5" stroke-opacity="0.45"/><line x1="488" y1="8" x2="488" y2="318" stroke-dasharray="2 5" stroke-opacity="0.45"/><line x1="526" y1="8" x2="526" y2="318" stroke-dasharray="2 5" stroke-opacity="0.45"/><line x1="564" y1="8" x2="564" y2="318" stroke-dasharray="2 5" stroke-opacity="0.45"/><line x1="602" y1="8" x2="602" y2="318" stroke-dasharray="2 5" stroke-opacity="0.45"/><line x1="640" y1="8" x2="640" y2="318" stroke-dasharray="2 5" stroke-opacity="0.45"/><line x1="678" y1="8" x2="678" y2="318" stroke-dasharray="2 5" stroke-opacity="0.45"/></g>
<text x="44" y="52" font-size="22" font-style="italic" text-anchor="end" fill="currentColor" stroke="none">A</text><text x="44" y="112" font-size="22" font-style="italic" text-anchor="end" fill="currentColor" stroke="none">B</text><text x="44" y="172" font-size="22" font-style="italic" text-anchor="end" fill="currentColor" stroke="none">C</text><text x="44" y="232" font-size="22" font-style="italic" text-anchor="end" fill="currentColor" stroke="none">D</text><text x="44" y="302" font-size="22" font-style="italic" text-anchor="end" fill="currentColor" stroke="none">Y</text>
<text x="700" y="300" font-size="20" font-style="italic" text-anchor="end" fill="currentColor" stroke="none">t</text>
</svg>
</div>

### ข้อ 4.1  จงเขียนตารางความจริงของ $Y$ จากไดอะแกรมเวลา (ให้เติม $0$, $1$ หรือ $X$) (2 คะแนน)

$\mathbf{Sol}^{n}$

อ่านค่า $A$, $B$, $C$, $D$ และ $Y$ ที่แต่ละช่วงเวลาตามลำดับจากซ้ายไปขวา (16 ช่วง คือ $ABCD=0000$ ถึง $1111$)

| $A$ | $B$ | $C$ | $D$ | $Y$ |
|:---:|:---:|:---:|:---:|:---:|
| 0 | 0 | 0 | 0 | 0 |
| 0 | 0 | 0 | 1 | X |
| 0 | 0 | 1 | 0 | 1 |
| 0 | 0 | 1 | 1 | 1 |
| 0 | 1 | 0 | 0 | 1 |
| 0 | 1 | 0 | 1 | 0 |
| 0 | 1 | 1 | 0 | X |
| 0 | 1 | 1 | 1 | 0 |
| 1 | 0 | 0 | 0 | 1 |
| 1 | 0 | 0 | 1 | 1 |
| 1 | 0 | 1 | 0 | 1 |
| 1 | 0 | 1 | 1 | X |
| 1 | 1 | 0 | 0 | 0 |
| 1 | 1 | 0 | 1 | 0 |
| 1 | 1 | 1 | 0 | 0 |
| 1 | 1 | 1 | 1 | 0 |

$\mathbf{Ans}\quad$ ตารางความจริงดังตารางด้านบน

---

### ข้อ 4.2  จากตารางความจริงในข้อ 4.1 จงเขียนฟังก์ชันในรูป $\sum m(\ldots)+\sum d(\ldots)$ (1 คะแนน)

$\mathbf{Sol}^{n}$

แถวที่ $Y=1$ คือมินเทอม $m$ และแถวที่ $Y=X$ คือ Don't Care $d$

$\mathbf{Ans}\quad Y=\sum m(2,3,4,8,9,10)+\sum d(1,6,11)$

---

### ข้อ 4.3  จากฟังก์ชันในข้อ 4.2 จงลดรูปด้วยแผนผังคาร์โนห์ (K-map) โดยใช้เงื่อนไขไม่สนใจให้เป็นประโยชน์ ให้ได้สมการ SOP ที่สั้นที่สุด (2 คะแนน)

$\mathbf{Sol}^{n}$

ใส่ $1$ ที่ช่อง $2,3,4,8,9,10$ ใส่ $X$ ที่ช่อง $1,6,11$ แล้วจับลูปโดยนับ $X$ เป็น $1$ ได้ตามต้องการ

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="299" height="274" viewBox="0 0 340 312" font-family="Times New Roman, serif" font-size="20" fill="currentColor">
<g stroke="currentColor" stroke-width="1.8" fill="none"><rect x="100" y="56" width="232" height="232"/>
<line x1="158" y1="56" x2="158" y2="288"/>
<line x1="216" y1="56" x2="216" y2="288"/>
<line x1="274" y1="56" x2="274" y2="288"/>
<line x1="100" y1="114" x2="332" y2="114"/>
<line x1="100" y1="172" x2="332" y2="172"/>
<line x1="100" y1="230" x2="332" y2="230"/>
<line x1="26" y1="12" x2="100" y2="56"/></g>
<text x="80" y="26" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">AB</text><text x="42" y="50" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">CD</text><text x="129" y="48" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">00</text><text x="187" y="48" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">01</text><text x="245" y="48" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">11</text><text x="303" y="48" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">10</text><text x="90" y="91" font-size="18" text-anchor="end" fill="currentColor" stroke="none">00</text><text x="90" y="149" font-size="18" text-anchor="end" fill="currentColor" stroke="none">01</text><text x="90" y="207" font-size="18" text-anchor="end" fill="currentColor" stroke="none">11</text><text x="90" y="265" font-size="18" text-anchor="end" fill="currentColor" stroke="none">10</text><text x="110" y="77" font-size="11" text-anchor="start" fill="currentColor" fill-opacity="0.6" stroke="none">0</text><text x="129" y="93" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">0</text><text x="168" y="77" font-size="11" text-anchor="start" fill="currentColor" fill-opacity="0.6" stroke="none">4</text><text x="187" y="93" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">1</text><text x="226" y="77" font-size="11" text-anchor="start" fill="currentColor" fill-opacity="0.6" stroke="none">12</text><text x="245" y="93" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">0</text><text x="284" y="77" font-size="11" text-anchor="start" fill="currentColor" fill-opacity="0.6" stroke="none">8</text><text x="303" y="93" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">1</text><text x="110" y="135" font-size="11" text-anchor="start" fill="currentColor" fill-opacity="0.6" stroke="none">1</text><text x="129" y="151" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">X</text><text x="168" y="135" font-size="11" text-anchor="start" fill="currentColor" fill-opacity="0.6" stroke="none">5</text><text x="187" y="151" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">0</text><text x="226" y="135" font-size="11" text-anchor="start" fill="currentColor" fill-opacity="0.6" stroke="none">13</text><text x="245" y="151" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">0</text><text x="284" y="135" font-size="11" text-anchor="start" fill="currentColor" fill-opacity="0.6" stroke="none">9</text><text x="303" y="151" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">1</text><text x="110" y="193" font-size="11" text-anchor="start" fill="currentColor" fill-opacity="0.6" stroke="none">3</text><text x="129" y="209" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">1</text><text x="168" y="193" font-size="11" text-anchor="start" fill="currentColor" fill-opacity="0.6" stroke="none">7</text><text x="187" y="209" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">0</text><text x="226" y="193" font-size="11" text-anchor="start" fill="currentColor" fill-opacity="0.6" stroke="none">15</text><text x="245" y="209" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">0</text><text x="284" y="193" font-size="11" text-anchor="start" fill="currentColor" fill-opacity="0.6" stroke="none">11</text><text x="303" y="209" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">X</text><text x="110" y="251" font-size="11" text-anchor="start" fill="currentColor" fill-opacity="0.6" stroke="none">2</text><text x="129" y="267" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">1</text><text x="168" y="251" font-size="11" text-anchor="start" fill="currentColor" fill-opacity="0.6" stroke="none">6</text><text x="187" y="267" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">X</text><text x="226" y="251" font-size="11" text-anchor="start" fill="currentColor" fill-opacity="0.6" stroke="none">14</text><text x="245" y="267" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">0</text><text x="284" y="251" font-size="11" text-anchor="start" fill="currentColor" fill-opacity="0.6" stroke="none">10</text><text x="303" y="267" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">1</text>
<g><rect x="278" y="60" width="50" height="224" rx="14" stroke="#e8743b" stroke-width="3" fill="none"/>
<rect x="106" y="178" width="46" height="104" rx="14" stroke="#3b8be8" stroke-width="3" fill="none"/>
<rect x="280" y="178" width="46" height="104" rx="14" stroke="#3b8be8" stroke-width="3" fill="none"/>
<rect x="166" y="64" width="42" height="42" rx="14" stroke="#2fae5f" stroke-width="3" fill="none"/>
<rect x="166" y="238" width="42" height="42" rx="14" stroke="#2fae5f" stroke-width="3" fill="none"/></g>
</svg>
</div>

- ลูปสีส้ม (แถว $AB=10$ ทั้งแถว รวมช่อง $8,9,11,10$ โดยใช้ $X$ ที่ช่อง 11) : $A=1,\ B=0$ $\Rightarrow A\overline{B}$
- ลูปสีน้ำเงิน (ช่อง $3,2,11,10$ ที่วนข้ามแถวบนกับแถวล่าง โดยใช้ $X$ ที่ช่อง 11) : $B=0,\ C=1$ $\Rightarrow \overline{B}C$
- ลูปสีเขียว (ช่อง $4,6$ ที่วนข้ามซ้ายขวา โดยใช้ $X$ ที่ช่อง 6) : $A=0,\ B=1,\ D=0$ $\Rightarrow \overline{A}B\overline{D}$

ช่อง $1$ ไม่จำเป็นต้องครอบ เพราะเป็น Don't Care

$\mathbf{Ans}\quad Y=A\overline{B}+\overline{B}C+\overline{A}B\overline{D}$

---

### ข้อ 4.4  จากสมการที่ได้ในข้อ 4.3 จงวาดวงจรลอจิกโดยใช้เกต AND, OR และ NOT (1 คะแนน)

$\mathbf{Sol}^{n}$

สมการ $Y=\overline{A}B\overline{D}+A\overline{B}+\overline{B}C$ ใช้ NOT สำหรับ $\overline{A},\overline{B},\overline{D}$ ใช้ AND 3 ตัวสำหรับ 3 พจน์ และใช้ OR รวมพจน์

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="540" height="324" viewBox="0 0 600 360" font-family="Times New Roman, serif" font-size="20" fill="currentColor">
<g stroke="currentColor" stroke-width="1.8" fill="none"><path d="M90 20L130 40L90 60Z"/>
<circle cx="135" cy="40" r="5"/>
<path d="M90 130L130 150L90 170Z"/>
<circle cx="135" cy="150" r="5"/>
<path d="M90 300L130 320L90 340Z"/>
<circle cx="135" cy="320" r="5"/>
<path d="M240 62H270A33.0 33.0 0 0 1 270 128H240Z"/>
<path d="M240 190H270A25.0 25.0 0 0 1 270 240H240Z"/>
<path d="M240 260H270A25.0 25.0 0 0 1 270 310H240Z"/>
<path d="M400 150Q440 150 460 183.0Q440 216 400 216Q414 183.0 400 150Z"/>
<polyline points="36,40 90,40"/>
<polyline points="36,150 45,150 90,150"/>
<polyline points="36,320 90,320"/>
<polyline points="140,40 170,40 170,74.0 240,74.0"/>
<polyline points="36,150 70,150 70,95.0 240,95.0"/>
<polyline points="140,320 200,320 200,116.0 240,116.0"/>
<polyline points="36,40 55,40 55,202.0 240,202.0"/>
<polyline points="140,150 160,150 160,228.0 240,228.0"/>
<polyline points="140,150 150,150 150,272.0 240,272.0"/>
<polyline points="36,230 62,230 62,298.0 240,298.0"/>
<polyline points="303.0,95.0 350,95.0 350,162.0 400,162.0"/>
<polyline points="295.0,215.0 365,215.0 365,183.0 400,183.0"/>
<polyline points="295.0,285.0 380,285.0 380,204.0 400,204.0"/>
<line x1="460" y1="183.0" x2="510" y2="183.0"/></g>
<circle cx="36" cy="40" r="3" fill="currentColor" stroke="none"/><circle cx="45" cy="150" r="3" fill="currentColor" stroke="none"/><circle cx="150" cy="150" r="3" fill="currentColor" stroke="none"/>
<text x="12" y="46" font-size="20" font-style="italic" text-anchor="start" fill="currentColor" stroke="none">A</text><text x="12" y="156" font-size="20" font-style="italic" text-anchor="start" fill="currentColor" stroke="none">B</text><text x="12" y="236" font-size="20" font-style="italic" text-anchor="start" fill="currentColor" stroke="none">C</text><text x="12" y="326" font-size="20" font-style="italic" text-anchor="start" fill="currentColor" stroke="none">D</text><text x="522" y="189.0" font-size="20" font-style="italic" text-anchor="start" fill="currentColor" stroke="none">Y</text>
</svg>
</div>

$\mathbf{Ans}\quad$ วงจรดังรูปด้านบน

---

### ข้อ 4.5  จากสมการที่ได้ในข้อ 4.3 จงออกแบบวงจรใหม่โดยใช้ **แนนด์เกต (NAND) เท่านั้น** (2 คะแนน)

$\mathbf{Sol}^{n}$

แปลงสมการให้อยู่ในรูปแนนด์ล้วนด้วยการกลับค่า 2 ครั้ง แล้วใช้เดอร์มอร์แกน

$$
\begin{aligned}
Y &= \overline{A}B\overline{D}+A\overline{B}+\overline{B}C \\
&= \overline{\overline{\overline{A}B\overline{D}+A\overline{B}+\overline{B}C}} &&\text{ข้อ 5(b) กลับค่า 2 ครั้ง} \\
&= \overline{\overline{\overline{A}B\overline{D}}\cdot\overline{A\overline{B}}\cdot\overline{\overline{B}C}} &&\text{เดอร์มอร์แกน ข้อ 10(a)}
\end{aligned}
$$

แต่ละพจน์ $\overline{\overline{A}B\overline{D}}$, $\overline{A\overline{B}}$, $\overline{\overline{B}C}$ คือแนนด์เกต และเกตสุดท้ายก็เป็นแนนด์เกต ส่วนตัวกลับค่า $\overline{A},\overline{B},\overline{D}$ ใช้แนนด์เกตที่ต่ออินพุตทั้งสองเข้าด้วยกัน ($\overline{X\cdot X}=\overline{X}$)

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="576" height="333" viewBox="0 0 640 370" font-family="Times New Roman, serif" font-size="20" fill="currentColor">
<g stroke="currentColor" stroke-width="1.8" fill="none"><path d="M100 20H130A25.0 25.0 0 0 1 130 70H100Z"/>
<circle cx="160.0" cy="45.0" r="5"/>
<line x1="90" y1="32.0" x2="100" y2="32.0"/>
<line x1="90" y1="58.0" x2="100" y2="58.0"/>
<line x1="90" y1="32.0" x2="90" y2="58.0"/>
<path d="M100 130H130A25.0 25.0 0 0 1 130 180H100Z"/>
<circle cx="160.0" cy="155.0" r="5"/>
<line x1="90" y1="142.0" x2="100" y2="142.0"/>
<line x1="90" y1="168.0" x2="100" y2="168.0"/>
<line x1="90" y1="142.0" x2="90" y2="168.0"/>
<path d="M100 300H130A25.0 25.0 0 0 1 130 350H100Z"/>
<circle cx="160.0" cy="325.0" r="5"/>
<line x1="90" y1="312.0" x2="100" y2="312.0"/>
<line x1="90" y1="338.0" x2="100" y2="338.0"/>
<line x1="90" y1="312.0" x2="90" y2="338.0"/>
<path d="M260 62H290A33.0 33.0 0 0 1 290 128H260Z"/>
<circle cx="328.0" cy="95.0" r="5"/>
<path d="M260 190H290A25.0 25.0 0 0 1 290 240H260Z"/>
<circle cx="320.0" cy="215.0" r="5"/>
<path d="M260 260H290A25.0 25.0 0 0 1 290 310H260Z"/>
<circle cx="320.0" cy="285.0" r="5"/>
<path d="M430 150H460A33.0 33.0 0 0 1 460 216H430Z"/>
<circle cx="498.0" cy="183.0" r="5"/>
<polyline points="36,45 60,45 90,45.0"/>
<polyline points="36,155 50,155 90,155.0"/>
<polyline points="36,325 60,325 90,325.0"/>
<polyline points="165.0,45.0 200,45.0 200,74.0 260,74.0"/>
<polyline points="36,155 75,155 75,95.0 260,95.0"/>
<polyline points="165.0,325.0 215,325.0 215,116.0 260,116.0"/>
<polyline points="36,45 40,45 40,202.0 260,202.0"/>
<polyline points="165.0,155.0 190,155.0 190,228.0 260,228.0"/>
<polyline points="165.0,155.0 180,155.0 180,272.0 260,272.0"/>
<polyline points="36,230 66,230 66,298.0 260,298.0"/>
<polyline points="333.0,95.0 385,95.0 385,162.0 430,162.0"/>
<polyline points="325.0,215.0 400,215.0 400,183.0 430,183.0"/>
<polyline points="325.0,285.0 415,285.0 415,204.0 430,204.0"/>
<line x1="503.0" y1="183.0" x2="553.0" y2="183.0"/></g>
<circle cx="50" cy="155" r="3" fill="currentColor" stroke="none"/><circle cx="40" cy="45" r="3" fill="currentColor" stroke="none"/><circle cx="180" cy="155.0" r="3" fill="currentColor" stroke="none"/>
<text x="12" y="51" font-size="20" font-style="italic" text-anchor="start" fill="currentColor" stroke="none">A</text><text x="12" y="161" font-size="20" font-style="italic" text-anchor="start" fill="currentColor" stroke="none">B</text><text x="12" y="236" font-size="20" font-style="italic" text-anchor="start" fill="currentColor" stroke="none">C</text><text x="12" y="331" font-size="20" font-style="italic" text-anchor="start" fill="currentColor" stroke="none">D</text><text x="565.0" y="189.0" font-size="20" font-style="italic" text-anchor="start" fill="currentColor" stroke="none">Y</text>
</svg>
</div>

$\mathbf{Ans}\quad Y=\overline{\overline{\overline{A}B\overline{D}}\cdot\overline{A\overline{B}}\cdot\overline{\overline{B}C}}$ ใช้แนนด์เกต 7 ตัวดังรูป

---

## ข้อ 5 จงออกแบบวงจรคอมบิเนชันที่มีอินพุต 3 ตัวคือ P, Q และ R และมีเอาต์พุต 1 ตัวคือ Z โดยเอาต์พุต Z เป็น 1 เมื่ออินพุตที่เป็นเลขฐานสองมีค่าเป็น 3 หรือมีค่ามากกว่า 3 ที่เป็นเลขคี่ กรณีอื่น ๆ เอาต์พุตเป็น 0 (7 คะแนน)

### ข้อ 5.1  จงเขียนตารางความจริงของวงจร (2 คะแนน)

$\mathbf{Sol}^{n}$

อินพุต $PQR$ แทนเลขฐานสอง 3 บิต ($P$ เป็น MSB) ค่า $Z=1$ เมื่อค่าเป็น $3$ หรือเป็นเลขคี่ที่มากกว่า $3$ คือ $5$ และ $7$

| $P$ | $Q$ | $R$ | $Z$ |
|:---:|:---:|:---:|:---:|
| 0 | 0 | 0 | 0 |
| 0 | 0 | 1 | 0 |
| 0 | 1 | 0 | 0 |
| 0 | 1 | 1 | 1 |
| 1 | 0 | 0 | 0 |
| 1 | 0 | 1 | 1 |
| 1 | 1 | 0 | 0 |
| 1 | 1 | 1 | 1 |

$\mathbf{Ans}\quad Z=1$ ที่ค่า $3,5,7$ (คือ $PQR=011,101,111$) นอกนั้น $Z=0$

---

### ข้อ 5.2  จากตารางความจริงในข้อ 5.1 จงแรเงาเวนไดอะแกรมในบริเวณที่ $Z=1$ (2 คะแนน)

$\mathbf{Sol}^{n}$

บริเวณที่ $Z=1$ คือ $PQR=011,101,111$ ซึ่งทุกแถวมี $R=1$ และมี $P$ หรือ $Q$ เป็น $1$ อย่างน้อยหนึ่งตัว จึงเป็นส่วนของวง $R$ ที่ทับกับวง $P$ หรือวง $Q$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="320" height="252" viewBox="0 0 380 300" font-family="Times New Roman, serif" font-size="20" fill="currentColor">
<path d="M115.3 183.8A75 75 0 0 1 219.7 121.2A75 75 0 0 1 115.3 183.8Z" fill="#cfe0f7" stroke="none"/>
<path d="M160.3 121.2A75 75 0 0 1 264.7 183.8A75 75 0 0 1 160.3 121.2Z" fill="#cfe0f7" stroke="none"/>
<g stroke="currentColor" stroke-width="1.8" fill="none"><rect x="20" y="15" width="340" height="270" rx="4"/>
<circle cx="145" cy="115" r="75"/>
<circle cx="235" cy="115" r="75"/>
<circle cx="190" cy="190" r="75"/></g>
<text x="45" y="50" font-size="22" font-style="italic" text-anchor="start" fill="currentColor" stroke="none">P</text><text x="332" y="50" font-size="22" font-style="italic" text-anchor="start" fill="currentColor" stroke="none">Q</text><text x="318" y="272" font-size="22" font-style="italic" text-anchor="start" fill="currentColor" stroke="none">R</text>
</svg>
</div>

$\mathbf{Ans}\quad$ แรเงาส่วนของวง $R$ ที่อยู่ภายในวง $P$ หรือวง $Q$ ดังรูปด้านบน

---

### ข้อ 5.3  จากตารางความจริงในข้อ 5.1 จงเขียนฟังก์ชันในรูป $\prod M(\ldots)$ แล้วลดรูปให้อยู่ในรูป POS ที่สั้นที่สุด (1 คะแนน)

$\mathbf{Sol}^{n}$

แถวที่ $Z=0$ คือ $0,1,2,4,6$ แปลงเป็นแมกเทอม ($P$ เป็น MSB และ $0$ แทนตัวแปรไม่กลับค่า)

$$
\begin{aligned}
M_0=000 &\Rightarrow P+Q+R \\
M_1=001 &\Rightarrow P+Q+\overline{R} \\
M_2=010 &\Rightarrow P+\overline{Q}+R \\
M_4=100 &\Rightarrow \overline{P}+Q+R \\
M_6=110 &\Rightarrow \overline{P}+\overline{Q}+R
\end{aligned}
$$

จับคู่แมกเทอมที่ต่างกันบิตเดียว (ใช้ $M_0$ ซ้ำได้ ข้อ 4(b) $X\cdot X=X$)

$$
\begin{aligned}
M_0M_1 &= P+Q+R\overline{R}=P+Q &&\text{ข้อ 3(a), 8(b), 7(a)} \\
M_0M_2 &= P+R+Q\overline{Q}=P+R &&\text{ข้อ 3(a), 8(b), 7(a)} \\
M_4M_6 &= \overline{P}+R+Q\overline{Q}=\overline{P}+R &&\text{ข้อ 3(a), 8(b), 7(a)}
\end{aligned}
$$

$$
\begin{aligned}
Z &= (P+Q)(P+R)(\overline{P}+R) \\
&= (P+Q)(R+P\overline{P}) &&\text{กระจาย ข้อ 3(a)} \\
&= (P+Q)(R+0) &&\text{ข้อ 8(b)} \\
&= (P+Q)R &&\text{ข้อ 7(a)}
\end{aligned}
$$

$\mathbf{Ans}\quad Z=\prod M(0,1,2,4,6)=\mathbf{(P+Q)\,R}$

---

### ข้อ 5.4  จากสมการที่ได้ในข้อ 5.3 จงออกแบบวงจรใหม่โดยใช้ **นอร์เกต (NOR) เท่านั้น** (2 คะแนน)

$\mathbf{Sol}^{n}$

แปลงสมการให้อยู่ในรูปนอร์ล้วนด้วยเดอร์มอร์แกน

$$
\begin{aligned}
Z &= (P+Q)R \\
&= \overline{\overline{(P+Q)R}}  &&\text{ข้อ 5(b) กลับค่า 2 ครั้ง} \\
&= \overline{\overline{P+Q}+\overline{R}} &&\text{เดอร์มอร์แกน ข้อ 10(b)}
\end{aligned}
$$

$\overline{P+Q}$ คือนอร์เกต $G_1$, $\overline{R}$ ใช้นอร์เกตที่ต่ออินพุตทั้งสองเข้าด้วยกัน $G_2$ ($\overline{R+R}=\overline{R}$) และ $Z$ คือนอร์เกตของ $G_1$ กับ $G_2$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="470" height="230" viewBox="0 0 470 230" font-family="Times New Roman, serif" font-size="20" fill="currentColor">
<g stroke="currentColor" stroke-width="1.8" fill="none"><path d="M130 40Q170 40 190 65.0Q170 90 130 90Q144 65.0 130 40Z"/>
<circle cx="195" cy="65.0" r="5"/>
<path d="M130 150Q170 150 190 175.0Q170 200 130 200Q144 175.0 130 150Z"/>
<circle cx="195" cy="175.0" r="5"/>
<line x1="120" y1="162.0" x2="130" y2="162.0"/>
<line x1="120" y1="188.0" x2="130" y2="188.0"/>
<line x1="120" y1="162.0" x2="120" y2="188.0"/>
<path d="M290 90Q330 90 350 115.0Q330 140 290 140Q304 115.0 290 90Z"/>
<circle cx="355" cy="115.0" r="5"/>
<polyline points="36,52 60,52 130,52.0"/>
<polyline points="36,78 60,78 130,78.0"/>
<polyline points="36,175 60,175 120,175.0"/>
<polyline points="200,65.0 245,65.0 245,102.0 290,102.0"/>
<polyline points="200,175.0 260,175.0 260,128.0 290,128.0"/>
<line x1="360" y1="115.0" x2="410" y2="115.0"/></g>
<text x="12" y="58" font-size="20" font-style="italic" text-anchor="start" fill="currentColor" stroke="none">P</text><text x="12" y="84" font-size="20" font-style="italic" text-anchor="start" fill="currentColor" stroke="none">Q</text><text x="12" y="181" font-size="20" font-style="italic" text-anchor="start" fill="currentColor" stroke="none">R</text><text x="422" y="121.0" font-size="20" font-style="italic" text-anchor="start" fill="currentColor" stroke="none">Z</text>
</svg>
</div>

$\mathbf{Ans}\quad Z=\overline{\overline{P+Q}+\overline{R}}$ ใช้นอร์เกต 3 ตัวดังรูป
