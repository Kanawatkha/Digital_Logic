# แนวข้อสอบกลางภาค ชุดที่ 3 (Midterm Practice Exam 3)

ข้อสอบมี 5 ข้อใหญ่ รวม 34 คะแนน (ข้อ 1 = 8, ข้อ 2 = 6, ข้อ 3 = 5, ข้อ 4 = 8, ข้อ 5 = 7) ข้อ 4 และข้อ 5 เป็นข้อต่อเนื่อง คำตอบของข้อย่อยก่อนหน้าต้องนำไปใช้ในข้อย่อยถัดไป เฉลยอ้างทฤษฎีบทตามเลขข้อในตารางสรุปบทที่ 3

---

## ข้อ 1 (8 คะแนน)

### ข้อ 1.1  จงแปลงเลขฐาน 16 $2B.C8_{16}$ เป็นเลขฐาน 10 และแปลงเลขฐาน 10 $91.65625_{10}$ เป็นเลขฐาน 8 (ทศนิยม 3 ตำแหน่ง) (2 คะแนน)

$\mathbf{Sol}^{n}$

ฐาน 16 เป็นฐาน 10 : คูณแต่ละหลักด้วยฐานยกกำลังตามตำแหน่ง ($B=11,\ C=12$)

$$
\begin{aligned}
(2B.C8)_{16} &= (2\times16^{1})+(11\times16^{0})+(12\times16^{-1})+(8\times16^{-2}) \\
&= 32+11+0.75+0.03125 \\
&= 43.78125
\end{aligned}
$$

ฐาน 10 เป็นฐาน 8 : ส่วนจำนวนเต็ม $91$ หารด้วย $8$ ซ้ำ ส่วนทศนิยม $0.65625$ คูณด้วย $8$ ซ้ำ 3 ครั้ง

$$
\begin{array}{c|r|l}
8 & 91 & 3 \ \ (\text{LSB}) \\
8 & 11 & 3 \\
8 & 1 & 1 \ \ (\text{MSB}) \\
 & 0 &
\end{array}
\qquad
\begin{aligned}
0.65625\times8 &= 5.25 &&\Rightarrow 5\ \ (\text{MSB}) \\
0.25\times8 &= 2 &&\Rightarrow 2 \\
0\times8 &= 0 &&\Rightarrow 0
\end{aligned}
$$

เศษอ่านล่างขึ้นบน $\Rightarrow 133$ และส่วนทศนิยมอ่านบนลงล่าง $\Rightarrow .520$

$\mathbf{Ans}\quad 2B.C8_{16}=\mathbf{43.78125_{10}},\quad 91.65625_{10}=\mathbf{(133.520)_8}$

---

### ข้อ 1.2  จงแปลงเลขฐาน 8 $5371.24_8$ ให้อยู่ในรูปฐาน 2 และ ฐาน 16 (1 คะแนน)

$\mathbf{Sol}^{n}$

ฐาน 8 เป็นฐาน 2 : แตกแต่ละหลักเป็น 3 บิต

$$
\begin{array}{ccccccc}
5 & 3 & 7 & 1 & . & 2 & 4 \\
\downarrow & \downarrow & \downarrow & \downarrow & & \downarrow & \downarrow \\
101 & 011 & 111 & 001 & . & 010 & 100
\end{array}
$$

แล้วแบ่งเลขฐานสองเป็นกลุ่มละ 4 บิต ส่วนจำนวนเต็มแบ่งจากขวา และส่วนทศนิยมแบ่งจากซ้าย (เติม 0 ทางขวา) เพื่อเป็นฐาน 16

$$
\begin{array}{cccccc}
1010 & 1111 & 1001 & . & 0101 & 0000 \\
\downarrow & \downarrow & \downarrow & & \downarrow & \downarrow \\
A & F & 9 & . & 5 & 0
\end{array}
$$

$\mathbf{Ans}\quad 5371.24_8=\mathbf{(101011111001.010100)_2}=\mathbf{(AF9.50)_{16}}$

---

### ข้อ 1.3  จงแปลงรหัสเกรย์ $10111001_{Gray}$ เป็นเลขฐานสอง (1 คะแนน)

$\mathbf{Sol}^{n}$

ดึงบิต MSB ลงมา แล้วนำผลที่ได้ล่าสุดไปบวก (ตัดตัวทด) กับบิตเกรย์ถัดไปทางขวา (ลูกศรเฉียง)

$$
\begin{array}{ccccccccccccccc}
\text{MSB} &  &  &  &  &  &  &  &  &  &  &  &  &  & \text{LSB} \\
1 &  & 0 &  & 1 &  & 1 &  & 1 &  & 0 &  & 0 &  & 1 \\
\downarrow & {\scriptstyle +}\,\nearrow & \downarrow & {\scriptstyle +}\,\nearrow & \downarrow & {\scriptstyle +}\,\nearrow & \downarrow & {\scriptstyle +}\,\nearrow & \downarrow & {\scriptstyle +}\,\nearrow & \downarrow & {\scriptstyle +}\,\nearrow & \downarrow & {\scriptstyle +}\,\nearrow & \downarrow \\
1 &  & 1 &  & 0 &  & 1 &  & 0 &  & 0 &  & 0 &  & 1
\end{array}
$$

$\mathbf{Ans}\quad 10111001_{Gray}=\mathbf{11010001_2}$

---

### ข้อ 1.4  จงแปลงรหัส BCD $0111\ 0011\ 1000\ 0101$ เป็นเลขฐานสิบ และแปลงเลขฐานสิบ $6204$ เป็นรหัสเกินสาม (Excess-3) (1 คะแนน)

$\mathbf{Sol}^{n}$

BCD แบ่งกลุ่มละ 4 บิตจากซ้าย แล้วถอดแต่ละกลุ่มกลับเป็นเลข 0 ถึง 9

$$
\begin{array}{cccc}
0111 & 0011 & 1000 & 0101 \\
\downarrow & \downarrow & \downarrow & \downarrow \\
7 & 3 & 8 & 5
\end{array}
$$

Excess-3 คือ BCD ของแต่ละหลักบวก $0011$

$$
\begin{array}{cccc}
6 & 2 & 0 & 4 \\
\downarrow & \downarrow & \downarrow & \downarrow \\
0110 & 0010 & 0000 & 0100 \\
+0011 & +0011 & +0011 & +0011 \\
\hline
1001 & 0101 & 0011 & 0111
\end{array}
$$

$\mathbf{Ans}\quad (0111\ 0011\ 1000\ 0101)_{BCD}=\mathbf{7385_{10}},\quad 6204_{10}=\mathbf{(1001 0101 0011 0111)_{Excess-3}}$

---

### ข้อ 1.5  จงหาค่า $7C9E_{16}+5B37_{16}$ และ $5214_8-2437_8$ โดยห้ามแปลงเป็นเลขฐาน 10 (2 คะแนน)

$\mathbf{Sol}^{n}$

**บวกฐาน 16** $7C9E_{16}+5B37_{16}$ ($C=12,\ E=14,\ B=11$) บวกทีละหลักจากขวาไปซ้าย ถ้าถึง $16$ ให้ทด $1$

- หลักที่ 1 : $E+7=21=15_{16}$ เขียน 5 ทด 1
- หลักที่ 2 : $9+3+1=13=D$ เขียน D
- หลักที่ 3 : $C+B=23=17_{16}$ เขียน 7 ทด 1
- หลักที่ 4 : $7+5+1=13=D$ เขียน D

**ลบฐาน 8** $5214_8-2437_8$ ลบทีละหลักจากขวาไปซ้าย ถ้าไม่พอลบให้ยืม $1$ จากหลักซ้าย ซึ่งมีค่า $8$

- หลักที่ 1 : $4-7$ ไม่พอลบ ยืม ได้ $4+8=12$ ดังนั้น $12-7=5$ (ยืม)
- หลักที่ 2 : $1-3-1$ ไม่พอลบ ยืม ได้ $1+8=9$ ดังนั้น $9-3-1=5$ (ยืม)
- หลักที่ 3 : $2-4-1$ ไม่พอลบ ยืม ได้ $2+8=10$ ดังนั้น $10-4-1=5$ (ยืม)
- หลักที่ 4 : $5-2-1=2$

$$
\begin{array}{ccccc}
 & 7 & C & 9 & E \\
+ & 5 & B & 3 & 7 \\
\hline
 & D & 7 & D & 5
\end{array}
\qquad
\begin{array}{ccccc}
 & 5 & 2 & 1 & 4 \\
- & 2 & 4 & 3 & 7 \\
\hline
 & 2 & 5 & 5 & 5
\end{array}
$$

$\mathbf{Ans}\quad 7C9E_{16}+5B37_{16}=\mathbf{D7D5_{16}},\quad 5214_8-2437_8=\mathbf{2555_8}$

---

### ข้อ 1.6  หาค่า $110010_2-10111_2$ โดยใช้วิธี 2's complement (1 คะแนน)

$\mathbf{Sol}^{n}$

เติม 0 ให้ตัวลบมี 6 บิต : $10111\to010111$ แล้ว 1's ของ $010111$ คือ $101000$ และ 2's คือ $101000+1=101001$

$$
\begin{array}{cccccccc}
 & & 1 & 1 & 0 & 0 & 1 & 0 \\
+ & & 1 & 0 & 1 & 0 & 0 & 1 \\
\hline
 & 1 & 0 & 1 & 1 & 0 & 1 & 1 \\
\end{array}
$$

มีตัวทด จึงตัดตัวทดทิ้ง เหลือ $011011$ ได้คำตอบเป็นบวก

$\mathbf{Ans}\quad 110010_2-10111_2=\mathbf{+011011_2}$

---

## ข้อ 2 (6 คะแนน)

### ข้อ 2.1  จงลดรูปสมการต่อไปนี้ให้สั้นที่สุด $Y=\overline{A}B+\overline{A}BC+AB\overline{C}+ABC+\overline{B}C$ (2 คะแนน)

$\mathbf{Sol}^{n}$

$$
\begin{aligned}
Y &= \overline{A}B+\overline{A}BC+AB\overline{C}+ABC+\overline{B}C \\
&= \overline{A}B+AB\overline{C}+ABC+\overline{B}C &&\text{ข้อ 6(a) $X+XY=X$ โดย $X=\overline{A}B$} \\
&= \overline{A}B+AB(\overline{C}+C)+\overline{B}C &&\text{ดึง $AB$ ออก (กระจาย ข้อ 3(b))} \\
&= \overline{A}B+AB\cdot1+\overline{B}C &&\text{ข้อ 8(a) $C+\overline{C}=1$} \\
&= \overline{A}B+AB+\overline{B}C &&\text{ข้อ 7(b) $X\cdot1=X$} \\
&= B(\overline{A}+A)+\overline{B}C &&\text{ดึง $B$ ออก (กระจาย ข้อ 3(b))} \\
&= B\cdot1+\overline{B}C &&\text{ข้อ 8(a)} \\
&= B+\overline{B}C &&\text{ข้อ 7(b)} \\
&= B+C &&\text{ข้อ 9(a) $X+\overline{X}Y=X+Y$ โดย $X=B$}
\end{aligned}
$$

$\mathbf{Ans}\quad Y=B+C$

---

### ข้อ 2.2  จงลดรูปฟังก์ชัน $f(A,B,C)=\sum m(0,2,3,4,6)$ ด้วยแผนผังคาร์โนห์ (K-map) ให้เป็นสมการ SOP ที่สั้นที่สุด (2 คะแนน)

$\mathbf{Sol}^{n}$

ใส่ $1$ ที่ช่อง $0,2,3,4,6$ แล้วจับลูป

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="299" height="172" viewBox="0 0 340 196" font-family="Times New Roman, serif" font-size="20" fill="currentColor">
<g stroke="currentColor" stroke-width="1.8" fill="none"><rect x="100" y="56" width="232" height="116"/>
<line x1="158" y1="56" x2="158" y2="172"/>
<line x1="216" y1="56" x2="216" y2="172"/>
<line x1="274" y1="56" x2="274" y2="172"/>
<line x1="100" y1="114" x2="332" y2="114"/>
<line x1="26" y1="12" x2="100" y2="56"/></g>
<text x="80" y="26" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">AB</text><text x="42" y="50" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">C</text><text x="129" y="48" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">00</text><text x="187" y="48" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">01</text><text x="245" y="48" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">11</text><text x="303" y="48" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">10</text><text x="90" y="91" font-size="18" text-anchor="end" fill="currentColor" stroke="none">0</text><text x="90" y="149" font-size="18" text-anchor="end" fill="currentColor" stroke="none">1</text><text x="110" y="77" font-size="11" text-anchor="start" fill="currentColor" fill-opacity="0.6" stroke="none">0</text><text x="129" y="93" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">1</text><text x="168" y="77" font-size="11" text-anchor="start" fill="currentColor" fill-opacity="0.6" stroke="none">2</text><text x="187" y="93" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">1</text><text x="226" y="77" font-size="11" text-anchor="start" fill="currentColor" fill-opacity="0.6" stroke="none">6</text><text x="245" y="93" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">1</text><text x="284" y="77" font-size="11" text-anchor="start" fill="currentColor" fill-opacity="0.6" stroke="none">4</text><text x="303" y="93" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">1</text><text x="110" y="135" font-size="11" text-anchor="start" fill="currentColor" fill-opacity="0.6" stroke="none">1</text><text x="129" y="151" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">0</text><text x="168" y="135" font-size="11" text-anchor="start" fill="currentColor" fill-opacity="0.6" stroke="none">3</text><text x="187" y="151" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">1</text><text x="226" y="135" font-size="11" text-anchor="start" fill="currentColor" fill-opacity="0.6" stroke="none">7</text><text x="245" y="151" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">0</text><text x="284" y="135" font-size="11" text-anchor="start" fill="currentColor" fill-opacity="0.6" stroke="none">5</text><text x="303" y="151" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">0</text>
<g><rect x="104" y="60" width="224" height="50" rx="14" stroke="#e8743b" stroke-width="3" fill="none"/>
<rect x="164" y="62" width="46" height="104" rx="14" stroke="#3b8be8" stroke-width="3" fill="none"/></g>
</svg>
</div>

- ลูปสีส้ม (ช่อง $0,2,4,6$ วนข้ามซ้ายขวา) : $C=0$ $\Rightarrow \overline{C}$
- ลูปสีน้ำเงิน (ช่อง $2,3$) : $A=0,\ B=1$ $\Rightarrow \overline{A}B$

$\mathbf{Ans}\quad f=\overline{C}+\overline{A}B$

---

### ข้อ 2.3  จงลดรูปฟังก์ชัน $f(A,B,C,D)=\prod M(0,1,4,5,9,13)$ ด้วยแผนผังคาร์โนห์ (K-map) ให้เป็นสมการ POS ที่สั้นที่สุด (2 คะแนน)

$\mathbf{Sol}^{n}$

แมกเทอม $\prod M$ คือช่องที่ค่าเป็น $0$ จึงใส่ $0$ ที่ช่อง $0,1,4,5,9,13$ ช่องที่เหลือเป็น $1$ แล้วจับลูปเฉพาะ $0$ การอ่านค่าลูปของ $0$ สำหรับ POS ให้ตัวแปรที่เป็น $0$ เขียนไม่กลับค่า และตัวแปรที่เป็น $1$ เขียนกลับค่า แล้วต่อกันด้วย $+$

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
<text x="80" y="26" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">AB</text><text x="42" y="50" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">CD</text><text x="129" y="48" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">00</text><text x="187" y="48" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">01</text><text x="245" y="48" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">11</text><text x="303" y="48" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">10</text><text x="90" y="91" font-size="18" text-anchor="end" fill="currentColor" stroke="none">00</text><text x="90" y="149" font-size="18" text-anchor="end" fill="currentColor" stroke="none">01</text><text x="90" y="207" font-size="18" text-anchor="end" fill="currentColor" stroke="none">11</text><text x="90" y="265" font-size="18" text-anchor="end" fill="currentColor" stroke="none">10</text><text x="110" y="77" font-size="11" text-anchor="start" fill="currentColor" fill-opacity="0.6" stroke="none">0</text><text x="129" y="93" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">0</text><text x="168" y="77" font-size="11" text-anchor="start" fill="currentColor" fill-opacity="0.6" stroke="none">4</text><text x="187" y="93" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">0</text><text x="226" y="77" font-size="11" text-anchor="start" fill="currentColor" fill-opacity="0.6" stroke="none">12</text><text x="245" y="93" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">1</text><text x="284" y="77" font-size="11" text-anchor="start" fill="currentColor" fill-opacity="0.6" stroke="none">8</text><text x="303" y="93" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">1</text><text x="110" y="135" font-size="11" text-anchor="start" fill="currentColor" fill-opacity="0.6" stroke="none">1</text><text x="129" y="151" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">0</text><text x="168" y="135" font-size="11" text-anchor="start" fill="currentColor" fill-opacity="0.6" stroke="none">5</text><text x="187" y="151" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">0</text><text x="226" y="135" font-size="11" text-anchor="start" fill="currentColor" fill-opacity="0.6" stroke="none">13</text><text x="245" y="151" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">0</text><text x="284" y="135" font-size="11" text-anchor="start" fill="currentColor" fill-opacity="0.6" stroke="none">9</text><text x="303" y="151" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">0</text><text x="110" y="193" font-size="11" text-anchor="start" fill="currentColor" fill-opacity="0.6" stroke="none">3</text><text x="129" y="209" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">1</text><text x="168" y="193" font-size="11" text-anchor="start" fill="currentColor" fill-opacity="0.6" stroke="none">7</text><text x="187" y="209" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">1</text><text x="226" y="193" font-size="11" text-anchor="start" fill="currentColor" fill-opacity="0.6" stroke="none">15</text><text x="245" y="209" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">1</text><text x="284" y="193" font-size="11" text-anchor="start" fill="currentColor" fill-opacity="0.6" stroke="none">11</text><text x="303" y="209" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">1</text><text x="110" y="251" font-size="11" text-anchor="start" fill="currentColor" fill-opacity="0.6" stroke="none">2</text><text x="129" y="267" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">1</text><text x="168" y="251" font-size="11" text-anchor="start" fill="currentColor" fill-opacity="0.6" stroke="none">6</text><text x="187" y="267" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">1</text><text x="226" y="251" font-size="11" text-anchor="start" fill="currentColor" fill-opacity="0.6" stroke="none">14</text><text x="245" y="267" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">1</text><text x="284" y="251" font-size="11" text-anchor="start" fill="currentColor" fill-opacity="0.6" stroke="none">10</text><text x="303" y="267" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">1</text>
<g><rect x="104" y="60" width="108" height="108" rx="14" stroke="#e8743b" stroke-width="3" fill="none"/>
<rect x="106" y="120" width="220" height="46" rx="14" stroke="#3b8be8" stroke-width="3" fill="none"/></g>
</svg>
</div>

- ลูปสีส้ม (ช่อง $0,1,4,5$) : $A=0,\ C=0$ $\Rightarrow (A+C)$
- ลูปสีน้ำเงิน (ช่อง $1,5,13,9$) : $C=0,\ D=1$ $\Rightarrow (C+\overline{D})$

$\mathbf{Ans}\quad f=(A+C)(C+\overline{D})$

---

## ข้อ 3 (5 คะแนน)

### ข้อ 3.1  จงวาดลอจิกไดอะแกรมของบูลีนฟังก์ชัน $F=(\overline{A}+B)\,C+\overline{B}\,\overline{C}$ (1 คะแนน)

$\mathbf{Sol}^{n}$

แยกสมการเป็นเกตทีละชั้น : NOT ของ $A,B,C$ แล้ว OR $(\overline{A}+B)$ แล้ว AND กับ $C$ และ AND $\overline{B}\,\overline{C}$ แล้ว OR รวมสองพจน์

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="540" height="270" viewBox="0 0 600 300" font-family="Times New Roman, serif" font-size="20" fill="currentColor">
<g stroke="currentColor" stroke-width="1.8" fill="none"><path d="M90 25L130 45L90 65Z"/>
<circle cx="135" cy="45" r="5"/>
<path d="M90 115L130 135L90 155Z"/>
<circle cx="135" cy="135" r="5"/>
<path d="M90 220L130 240L90 260Z"/>
<circle cx="135" cy="240" r="5"/>
<path d="M210 40Q250 40 270 65.0Q250 90 210 90Q224 65.0 210 40Z"/>
<path d="M330 60H360A25.0 25.0 0 0 1 360 110H330Z"/>
<path d="M210 200H240A25.0 25.0 0 0 1 240 250H210Z"/>
<path d="M440 150Q480 150 500 175.0Q480 200 440 200Q454 175.0 440 150Z"/>
<polyline points="36,45 60,45 90,45"/>
<polyline points="140,45 175,45 175,52.0 210,52.0"/>
<polyline points="36,135 70,135 70,78.0 210,78.0"/>
<polyline points="36,135 62,135 90,135"/>
<polyline points="140,135 175,135 175,212.0 210,212.0"/>
<polyline points="36,240 60,240 90,240"/>
<polyline points="140,240 190,240 190,238.0 210,238.0"/>
<polyline points="36,240 50,240 50,98.0 330,98.0"/>
<polyline points="270,65.0 300,65.0 300,72.0 330,72.0"/>
<polyline points="385.0,85.0 410,85.0 410,162.0 440,162.0"/>
<polyline points="265.0,225.0 425,225.0 425,188.0 440,188.0"/>
<line x1="500" y1="175.0" x2="550" y2="175.0"/></g>
<circle cx="70" cy="135" r="3" fill="currentColor" stroke="none"/><circle cx="50" cy="240" r="3" fill="currentColor" stroke="none"/>
<text x="12" y="51" font-size="20" font-style="italic" text-anchor="start" fill="currentColor" stroke="none">A</text><text x="12" y="141" font-size="20" font-style="italic" text-anchor="start" fill="currentColor" stroke="none">B</text><text x="12" y="246" font-size="20" font-style="italic" text-anchor="start" fill="currentColor" stroke="none">C</text><text x="562" y="181.0" font-size="20" font-style="italic" text-anchor="start" fill="currentColor" stroke="none">F</text>
</svg>
</div>

$\mathbf{Ans}\quad$ วงจรดังรูปด้านบน

---

### ข้อ 3.2  จากวงจรที่กำหนดให้ จงเขียนสมการของเอาต์พุต $F$ (1 คะแนน)

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="468" height="270" viewBox="0 0 520 300" font-family="Times New Roman, serif" font-size="20" fill="currentColor">
<g stroke="currentColor" stroke-width="1.8" fill="none"><path d="M110 40Q150 40 170 65.0Q150 90 110 90Q124 65.0 110 40Z"/>
<path d="M102 40Q116 65.0 102 90"/>
<circle cx="175" cy="65.0" r="5"/>
<path d="M110 240L150 260L110 280Z"/>
<circle cx="155" cy="260" r="5"/>
<path d="M110 150Q150 150 170 175.0Q150 200 110 200Q124 175.0 110 150Z"/>
<circle cx="175" cy="175.0" r="5"/>
<path d="M260 100H290A25.0 25.0 0 0 1 290 150H260Z"/>
<path d="M380 130Q420 130 440 155.0Q420 180 380 180Q394 155.0 380 130Z"/>
<polyline points="36,52 60,52 110,52.0"/>
<polyline points="36,120 70,120 70,78.0 110,78.0"/>
<polyline points="36,120 80,120 80,162.0 110,162.0"/>
<polyline points="36,260 60,260 110,260"/>
<polyline points="36,260 90,260 90,188.0 110,188.0"/>
<polyline points="180,65.0 220,65.0 220,112.0 260,112.0"/>
<polyline points="160,260 235,260 235,138.0 260,138.0"/>
<polyline points="315.0,125.0 345,125.0 345,142.0 380,142.0"/>
<polyline points="180,175.0 360,175.0 360,168.0 380,168.0"/>
<line x1="440" y1="155.0" x2="490" y2="155.0"/></g>
<circle cx="70" cy="120" r="3" fill="currentColor" stroke="none"/><circle cx="80" cy="120" r="3" fill="currentColor" stroke="none"/><circle cx="90" cy="260" r="3" fill="currentColor" stroke="none"/>
<text x="12" y="58" font-size="20" font-style="italic" text-anchor="start" fill="currentColor" stroke="none">A</text><text x="12" y="126" font-size="20" font-style="italic" text-anchor="start" fill="currentColor" stroke="none">B</text><text x="12" y="266" font-size="20" font-style="italic" text-anchor="start" fill="currentColor" stroke="none">C</text><text x="502" y="161.0" font-size="20" font-style="italic" text-anchor="start" fill="currentColor" stroke="none">F</text>
</svg>
</div>

$\mathbf{Sol}^{n}$

ไล่จากอินพุตไปหาเอาต์พุต : XNOR ของ $A,B$ คือ $\overline{A\oplus B}$ แล้ว AND กับ $\overline{C}$ ได้ $\overline{A\oplus B}\cdot\overline{C}$ และ NOR ของ $B,C$ คือ $\overline{B+C}$ แล้ว OR รวมสองพจน์

$\mathbf{Ans}\quad F=\overline{A\oplus B}\cdot\overline{C}+\overline{B+C}$

---

### ข้อ 3.3  จากวงจรในข้อ 3.2 จงเขียนตารางความจริงของ $F$ (1 คะแนน)

$\mathbf{Sol}^{n}$

แทนค่า $A,B,C$ ทั้ง 8 กรณีลงในสมการ $F=\overline{A\oplus B}\cdot\overline{C}+\overline{B+C}$

| $A$ | $B$ | $C$ | $F$ |
|:---:|:---:|:---:|:---:|
| 0 | 0 | 0 | 1 |
| 0 | 0 | 1 | 0 |
| 0 | 1 | 0 | 0 |
| 0 | 1 | 1 | 0 |
| 1 | 0 | 0 | 1 |
| 1 | 0 | 1 | 0 |
| 1 | 1 | 0 | 1 |
| 1 | 1 | 1 | 0 |

$\mathbf{Ans}\quad F=1$ เมื่อ $ABC=000,\ 100,\ 110$ นอกนั้น $F=0$

---

### ข้อ 3.4  จากตารางความจริงในข้อ 3.3 จงลดรูปด้วยแผนผังคาร์โนห์ (K-map) ให้เป็นสมการ SOP ที่สั้นที่สุด (2 คะแนน)

$\mathbf{Sol}^{n}$

ใส่ $1$ ที่ช่อง $0,4,6$ แล้วจับลูป

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="299" height="172" viewBox="0 0 340 196" font-family="Times New Roman, serif" font-size="20" fill="currentColor">
<g stroke="currentColor" stroke-width="1.8" fill="none"><rect x="100" y="56" width="232" height="116"/>
<line x1="158" y1="56" x2="158" y2="172"/>
<line x1="216" y1="56" x2="216" y2="172"/>
<line x1="274" y1="56" x2="274" y2="172"/>
<line x1="100" y1="114" x2="332" y2="114"/>
<line x1="26" y1="12" x2="100" y2="56"/></g>
<text x="80" y="26" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">AB</text><text x="42" y="50" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">C</text><text x="129" y="48" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">00</text><text x="187" y="48" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">01</text><text x="245" y="48" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">11</text><text x="303" y="48" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">10</text><text x="90" y="91" font-size="18" text-anchor="end" fill="currentColor" stroke="none">0</text><text x="90" y="149" font-size="18" text-anchor="end" fill="currentColor" stroke="none">1</text><text x="110" y="77" font-size="11" text-anchor="start" fill="currentColor" fill-opacity="0.6" stroke="none">0</text><text x="129" y="93" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">1</text><text x="168" y="77" font-size="11" text-anchor="start" fill="currentColor" fill-opacity="0.6" stroke="none">2</text><text x="187" y="93" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">0</text><text x="226" y="77" font-size="11" text-anchor="start" fill="currentColor" fill-opacity="0.6" stroke="none">6</text><text x="245" y="93" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">1</text><text x="284" y="77" font-size="11" text-anchor="start" fill="currentColor" fill-opacity="0.6" stroke="none">4</text><text x="303" y="93" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">1</text><text x="110" y="135" font-size="11" text-anchor="start" fill="currentColor" fill-opacity="0.6" stroke="none">1</text><text x="129" y="151" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">0</text><text x="168" y="135" font-size="11" text-anchor="start" fill="currentColor" fill-opacity="0.6" stroke="none">3</text><text x="187" y="151" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">0</text><text x="226" y="135" font-size="11" text-anchor="start" fill="currentColor" fill-opacity="0.6" stroke="none">7</text><text x="245" y="151" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">0</text><text x="284" y="135" font-size="11" text-anchor="start" fill="currentColor" fill-opacity="0.6" stroke="none">5</text><text x="303" y="151" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">0</text>
<g><rect x="104" y="60" width="50" height="50" rx="14" stroke="#e8743b" stroke-width="3" fill="none"/>
<rect x="278" y="60" width="50" height="50" rx="14" stroke="#e8743b" stroke-width="3" fill="none"/>
<rect x="222" y="62" width="104" height="46" rx="14" stroke="#3b8be8" stroke-width="3" fill="none"/></g>
</svg>
</div>

- ลูปสีส้ม (ช่อง $0,4$) : $B=0,\ C=0$ $\Rightarrow \overline{B}\,\overline{C}$
- ลูปสีน้ำเงิน (ช่อง $4,6$) : $A=1,\ C=0$ $\Rightarrow A\overline{C}$

$\mathbf{Ans}\quad F=\overline{B}\,\overline{C}+A\overline{C}$

---

## ข้อ 4 กำหนดฟังก์ชันที่รับเลขฐานสิบ 1 หลักในรหัส BCD ($ABCD$ โดย $A$ เป็นบิตหน้าสุด ค่า $10$ ถึง $15$ ไม่ถูกใช้) $f(A,B,C,D)=\sum m(0,3,4,8,9)+\sum d(10,11,12,13,14,15)$ (8 คะแนน)

### ข้อ 4.1  จงเขียนตารางความจริงของ $f$ (ให้เติม $0$, $1$ หรือ $X$) (2 คะแนน)

$\mathbf{Sol}^{n}$

แถวที่เป็นมินเทอม $m$ คือ $0,3,4,8,9$ ให้ $f=1$ ค่า $10$ ถึง $15$ เป็น Don't Care ใส่ $X$ ส่วนที่เหลือ $1,2,5,6,7$ ให้ $f=0$

| $A$ | $B$ | $C$ | $D$ | $f$ |
|:---:|:---:|:---:|:---:|:---:|
| 0 | 0 | 0 | 0 | 1 |
| 0 | 0 | 0 | 1 | 0 |
| 0 | 0 | 1 | 0 | 0 |
| 0 | 0 | 1 | 1 | 1 |
| 0 | 1 | 0 | 0 | 1 |
| 0 | 1 | 0 | 1 | 0 |
| 0 | 1 | 1 | 0 | 0 |
| 0 | 1 | 1 | 1 | 0 |
| 1 | 0 | 0 | 0 | 1 |
| 1 | 0 | 0 | 1 | 1 |
| 1 | 0 | 1 | 0 | X |
| 1 | 0 | 1 | 1 | X |
| 1 | 1 | 0 | 0 | X |
| 1 | 1 | 0 | 1 | X |
| 1 | 1 | 1 | 0 | X |
| 1 | 1 | 1 | 1 | X |

$\mathbf{Ans}\quad f=1$ ที่ค่า $0,3,4,8,9$, $f=X$ ที่ค่า $10$ ถึง $15$ และ $f=0$ ที่ค่า $1,2,5,6,7$

---

### ข้อ 4.2  จากตารางความจริงในข้อ 4.1 จงลดรูปด้วยแผนผังคาร์โนห์ (K-map) โดยใช้เงื่อนไขไม่สนใจ (Don't Care) ให้เป็นประโยชน์ ให้ได้สมการ SOP ที่สั้นที่สุด (2 คะแนน)

$\mathbf{Sol}^{n}$

ใส่ $1$ ที่ช่องมินเทอม ใส่ $X$ ที่ช่อง $10$ ถึง $15$ แล้วจับลูปของ $1$ โดยนับ $X$ เป็น $1$ ได้ตามต้องการ

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
<text x="80" y="26" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">AB</text><text x="42" y="50" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">CD</text><text x="129" y="48" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">00</text><text x="187" y="48" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">01</text><text x="245" y="48" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">11</text><text x="303" y="48" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">10</text><text x="90" y="91" font-size="18" text-anchor="end" fill="currentColor" stroke="none">00</text><text x="90" y="149" font-size="18" text-anchor="end" fill="currentColor" stroke="none">01</text><text x="90" y="207" font-size="18" text-anchor="end" fill="currentColor" stroke="none">11</text><text x="90" y="265" font-size="18" text-anchor="end" fill="currentColor" stroke="none">10</text><text x="110" y="77" font-size="11" text-anchor="start" fill="currentColor" fill-opacity="0.6" stroke="none">0</text><text x="129" y="93" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">1</text><text x="168" y="77" font-size="11" text-anchor="start" fill="currentColor" fill-opacity="0.6" stroke="none">4</text><text x="187" y="93" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">1</text><text x="226" y="77" font-size="11" text-anchor="start" fill="currentColor" fill-opacity="0.6" stroke="none">12</text><text x="245" y="93" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">X</text><text x="284" y="77" font-size="11" text-anchor="start" fill="currentColor" fill-opacity="0.6" stroke="none">8</text><text x="303" y="93" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">1</text><text x="110" y="135" font-size="11" text-anchor="start" fill="currentColor" fill-opacity="0.6" stroke="none">1</text><text x="129" y="151" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">0</text><text x="168" y="135" font-size="11" text-anchor="start" fill="currentColor" fill-opacity="0.6" stroke="none">5</text><text x="187" y="151" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">0</text><text x="226" y="135" font-size="11" text-anchor="start" fill="currentColor" fill-opacity="0.6" stroke="none">13</text><text x="245" y="151" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">X</text><text x="284" y="135" font-size="11" text-anchor="start" fill="currentColor" fill-opacity="0.6" stroke="none">9</text><text x="303" y="151" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">1</text><text x="110" y="193" font-size="11" text-anchor="start" fill="currentColor" fill-opacity="0.6" stroke="none">3</text><text x="129" y="209" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">1</text><text x="168" y="193" font-size="11" text-anchor="start" fill="currentColor" fill-opacity="0.6" stroke="none">7</text><text x="187" y="209" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">0</text><text x="226" y="193" font-size="11" text-anchor="start" fill="currentColor" fill-opacity="0.6" stroke="none">15</text><text x="245" y="209" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">X</text><text x="284" y="193" font-size="11" text-anchor="start" fill="currentColor" fill-opacity="0.6" stroke="none">11</text><text x="303" y="209" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">X</text><text x="110" y="251" font-size="11" text-anchor="start" fill="currentColor" fill-opacity="0.6" stroke="none">2</text><text x="129" y="267" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">0</text><text x="168" y="251" font-size="11" text-anchor="start" fill="currentColor" fill-opacity="0.6" stroke="none">6</text><text x="187" y="267" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">0</text><text x="226" y="251" font-size="11" text-anchor="start" fill="currentColor" fill-opacity="0.6" stroke="none">14</text><text x="245" y="267" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">X</text><text x="284" y="251" font-size="11" text-anchor="start" fill="currentColor" fill-opacity="0.6" stroke="none">10</text><text x="303" y="267" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">X</text>
<g><rect x="220" y="60" width="108" height="224" rx="14" stroke="#e8743b" stroke-width="3" fill="none"/>
<rect x="106" y="178" width="46" height="46" rx="14" stroke="#3b8be8" stroke-width="3" fill="none"/>
<rect x="280" y="178" width="46" height="46" rx="14" stroke="#3b8be8" stroke-width="3" fill="none"/>
<rect x="108" y="64" width="216" height="42" rx="14" stroke="#2fae5f" stroke-width="3" fill="none"/></g>
</svg>
</div>

- ลูปสีส้ม (ช่อง $8,9,10,11,12,13,14,15$) : $A$
- ลูปสีน้ำเงิน (ช่อง $3,11$) : $\overline{B}CD$
- ลูปสีเขียว (ช่อง $0,4,8,12$) : $\overline{C}\overline{D}$

ช่อง $X$ ที่ไม่ได้อยู่ในลูปไม่ต้องครอบ

$\mathbf{Ans}\quad f=A + \overline{B}CD + \overline{C}\overline{D}$

---

### ข้อ 4.3  จากตารางความจริงในข้อ 4.1 จงลดรูปด้วยแผนผังคาร์โนห์ (K-map) โดยใช้เงื่อนไขไม่สนใจให้เป็นประโยชน์ ให้ได้สมการ POS ที่สั้นที่สุด (2 คะแนน)

$\mathbf{Sol}^{n}$

จับลูปของ $0$ โดยนับ $X$ เป็น $0$ ได้ตามต้องการ แล้วอ่านค่าแบบ POS (ตัวแปรที่เป็น $0$ เขียนไม่กลับค่า และตัวแปรที่เป็น $1$ เขียนกลับค่า แล้วต่อกันด้วย $+$)

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
<text x="80" y="26" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">AB</text><text x="42" y="50" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">CD</text><text x="129" y="48" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">00</text><text x="187" y="48" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">01</text><text x="245" y="48" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">11</text><text x="303" y="48" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">10</text><text x="90" y="91" font-size="18" text-anchor="end" fill="currentColor" stroke="none">00</text><text x="90" y="149" font-size="18" text-anchor="end" fill="currentColor" stroke="none">01</text><text x="90" y="207" font-size="18" text-anchor="end" fill="currentColor" stroke="none">11</text><text x="90" y="265" font-size="18" text-anchor="end" fill="currentColor" stroke="none">10</text><text x="110" y="77" font-size="11" text-anchor="start" fill="currentColor" fill-opacity="0.6" stroke="none">0</text><text x="129" y="93" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">1</text><text x="168" y="77" font-size="11" text-anchor="start" fill="currentColor" fill-opacity="0.6" stroke="none">4</text><text x="187" y="93" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">1</text><text x="226" y="77" font-size="11" text-anchor="start" fill="currentColor" fill-opacity="0.6" stroke="none">12</text><text x="245" y="93" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">X</text><text x="284" y="77" font-size="11" text-anchor="start" fill="currentColor" fill-opacity="0.6" stroke="none">8</text><text x="303" y="93" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">1</text><text x="110" y="135" font-size="11" text-anchor="start" fill="currentColor" fill-opacity="0.6" stroke="none">1</text><text x="129" y="151" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">0</text><text x="168" y="135" font-size="11" text-anchor="start" fill="currentColor" fill-opacity="0.6" stroke="none">5</text><text x="187" y="151" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">0</text><text x="226" y="135" font-size="11" text-anchor="start" fill="currentColor" fill-opacity="0.6" stroke="none">13</text><text x="245" y="151" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">X</text><text x="284" y="135" font-size="11" text-anchor="start" fill="currentColor" fill-opacity="0.6" stroke="none">9</text><text x="303" y="151" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">1</text><text x="110" y="193" font-size="11" text-anchor="start" fill="currentColor" fill-opacity="0.6" stroke="none">3</text><text x="129" y="209" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">1</text><text x="168" y="193" font-size="11" text-anchor="start" fill="currentColor" fill-opacity="0.6" stroke="none">7</text><text x="187" y="209" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">0</text><text x="226" y="193" font-size="11" text-anchor="start" fill="currentColor" fill-opacity="0.6" stroke="none">15</text><text x="245" y="209" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">X</text><text x="284" y="193" font-size="11" text-anchor="start" fill="currentColor" fill-opacity="0.6" stroke="none">11</text><text x="303" y="209" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">X</text><text x="110" y="251" font-size="11" text-anchor="start" fill="currentColor" fill-opacity="0.6" stroke="none">2</text><text x="129" y="267" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">0</text><text x="168" y="251" font-size="11" text-anchor="start" fill="currentColor" fill-opacity="0.6" stroke="none">6</text><text x="187" y="267" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">0</text><text x="226" y="251" font-size="11" text-anchor="start" fill="currentColor" fill-opacity="0.6" stroke="none">14</text><text x="245" y="267" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">X</text><text x="284" y="251" font-size="11" text-anchor="start" fill="currentColor" fill-opacity="0.6" stroke="none">10</text><text x="303" y="267" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">X</text>
<g><rect x="104" y="118" width="108" height="50" rx="14" stroke="#e8743b" stroke-width="3" fill="none"/>
<rect x="164" y="178" width="104" height="104" rx="14" stroke="#3b8be8" stroke-width="3" fill="none"/>
<rect x="108" y="238" width="216" height="42" rx="14" stroke="#2fae5f" stroke-width="3" fill="none"/></g>
</svg>
</div>

- ลูปสีส้ม (ช่อง $1,5$) : $(A+C+\overline{D})$
- ลูปสีน้ำเงิน (ช่อง $6,7,14,15$) : $(\overline{B}+\overline{C})$
- ลูปสีเขียว (ช่อง $2,6,10,14$) : $(\overline{C}+D)$

$\mathbf{Ans}\quad f=(A+C+\overline{D})(\overline{B}+\overline{C})(\overline{C}+D)$

---

### ข้อ 4.4  จากสมการ POS ที่ได้ในข้อ 4.3 จงออกแบบวงจรโดยใช้ **นอร์เกต (NOR) เท่านั้น** (2 คะแนน)

$\mathbf{Sol}^{n}$

สมการ POS จากข้อ 4.3 คือ $f=(A+C+\overline{D})(\overline{B}+\overline{C})(\overline{C}+D)$ ต้องการให้เป็นรูปที่ใช้นอร์เกตอย่างเดียว จึงใส่บาร์ 2 ชั้นครอบทั้งสมการ (ข้อ 5(b) $\overline{\overline{X}}=X$) แล้วใช้เดอร์มอร์แกนกระจายบาร์ชั้นใน

$$
\begin{aligned}
f &= (A+C+\overline{D})(\overline{B}+\overline{C})(\overline{C}+D) \\
&= \overline{\overline{(A+C+\overline{D})(\overline{B}+\overline{C})(\overline{C}+D)}} &&\text{ข้อ 5(b) ใส่บาร์ 2 ชั้น} \\
&= \overline{\overline{A+C+\overline{D}} + \overline{\overline{B}+\overline{C}} + \overline{\overline{C}+D}} &&\text{เดอร์มอร์แกน ข้อ 10(b) $\overline{XY}=\overline{X}+\overline{Y}$ (กระจายบาร์ชั้นใน)}
\end{aligned}
$$

แต่ละพจน์ $\overline{A+C+\overline{D}}$, $\overline{\overline{B}+\overline{C}}$, $\overline{\overline{C}+D}$ คือนอร์เกตของตัวแปรในวงเล็บนั้น และบาร์ชั้นนอกคือนอร์เกตตัวสุดท้ายที่รวมทั้ง 3 พจน์

ตัวแปรที่มีบาร์ในวงเล็บ ($B$, $C$, $D$) ใช้นอร์เกตที่ต่ออินพุตทั้งสองเข้าด้วยกันเป็นตัวกลับค่า เพราะ $\overline{X+X}=\overline{X}$ (ข้อ 4(a) $X+X=X$)

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="576" height="405" viewBox="0 0 640 450" font-family="Times New Roman, serif" font-size="20" fill="currentColor">
<g stroke="currentColor" stroke-width="1.8" fill="none"><path d="M100 135Q140 135 160 160.0Q140 185 100 185Q114 160.0 100 135Z"/>
<circle cx="165" cy="160.0" r="5"/>
<line x1="90" y1="147.0" x2="100" y2="147.0"/>
<line x1="90" y1="173.0" x2="100" y2="173.0"/>
<line x1="90" y1="147.0" x2="90" y2="173.0"/>
<path d="M100 255Q140 255 160 280.0Q140 305 100 305Q114 280.0 100 255Z"/>
<circle cx="165" cy="280.0" r="5"/>
<line x1="90" y1="267.0" x2="100" y2="267.0"/>
<line x1="90" y1="293.0" x2="100" y2="293.0"/>
<line x1="90" y1="267.0" x2="90" y2="293.0"/>
<path d="M100 375Q140 375 160 400.0Q140 425 100 425Q114 400.0 100 375Z"/>
<circle cx="165" cy="400.0" r="5"/>
<line x1="90" y1="387.0" x2="100" y2="387.0"/>
<line x1="90" y1="413.0" x2="100" y2="413.0"/>
<line x1="90" y1="387.0" x2="90" y2="413.0"/>
<path d="M260 75Q300 75 320 108.0Q300 141 260 141Q274 108.0 260 75Z"/>
<circle cx="325" cy="108.0" r="5"/>
<path d="M260 195Q300 195 320 220.0Q300 245 260 245Q274 220.0 260 195Z"/>
<circle cx="325" cy="220.0" r="5"/>
<path d="M260 315Q300 315 320 340.0Q300 365 260 365Q274 340.0 260 315Z"/>
<circle cx="325" cy="340.0" r="5"/>
<path d="M430 200Q470 200 490 233.0Q470 266 430 266Q444 233.0 430 200Z"/>
<circle cx="495" cy="233.0" r="5"/>
<polyline points="36,160 55,160 90,160.0"/>
<polyline points="36,280 55,280 90,280.0"/>
<polyline points="36,400 55,400 90,400.0"/>
<polyline points="36,40 45,40 45,87.0 260,87.0"/>
<polyline points="36,280 54,280 54,108.0 260,108.0"/>
<polyline points="170,400.0 185,400.0 185,129.0 260,129.0"/>
<polyline points="170,160.0 194,160.0 194,207.0 260,207.0"/>
<polyline points="170,280.0 203,280.0 203,233.0 260,233.0"/>
<polyline points="170,280.0 212,280.0 212,327.0 260,327.0"/>
<polyline points="36,400 63,400 63,353.0 260,353.0"/>
<polyline points="330,108.0 385,108.0 385,212.0 430,212.0"/>
<polyline points="330,220.0 397,220.0 397,233.0 430,233.0"/>
<polyline points="330,340.0 409,340.0 409,254.0 430,254.0"/>
<line x1="500" y1="233.0" x2="550" y2="233.0"/></g>
<circle cx="54" cy="280" r="3" fill="currentColor" stroke="none"/><circle cx="203" cy="280.0" r="3" fill="currentColor" stroke="none"/><circle cx="212" cy="280.0" r="3" fill="currentColor" stroke="none"/><circle cx="63" cy="400" r="3" fill="currentColor" stroke="none"/>
<text x="12" y="46" font-size="20" font-style="italic" text-anchor="start" fill="currentColor" stroke="none">A</text><text x="12" y="166" font-size="20" font-style="italic" text-anchor="start" fill="currentColor" stroke="none">B</text><text x="12" y="286" font-size="20" font-style="italic" text-anchor="start" fill="currentColor" stroke="none">C</text><text x="12" y="406" font-size="20" font-style="italic" text-anchor="start" fill="currentColor" stroke="none">D</text><text x="562" y="239.0" font-size="20" font-style="italic" text-anchor="start" fill="currentColor" stroke="none">f</text>
</svg>
</div>

$\mathbf{Ans}\quad f=\overline{\overline{A+C+\overline{D}} + \overline{\overline{B}+\overline{C}} + \overline{\overline{C}+D}}$ ใช้นอร์เกต 7 ตัวดังรูป

---

## ข้อ 5 จงออกแบบวงจรคอมบิเนชันที่มีอินพุต 3 ตัวคือ X, Y และ Z และมีเอาต์พุต 2 ตัวคือ C และ S โดยเอาต์พุตทั้งสองรวมกันเป็นเลขฐานสอง 2 บิต (C เป็นบิตหน้า และ S เป็นบิตหลัง) ซึ่งมีค่าเท่ากับจำนวนอินพุตที่มีค่าเป็น 1 (7 คะแนน)

### ข้อ 5.1  จงเขียนตารางความจริงของวงจร (2 คะแนน)

$\mathbf{Sol}^{n}$

จำนวนอินพุตที่เป็น $1$ มีค่า $0$ ถึง $3$ เขียนเป็นเลขฐานสอง 2 บิต $CS$ (เช่น $2$ ตัว $\Rightarrow CS=10$)

| $X$ | $Y$ | $Z$ | $C$ | $S$ |
|:---:|:---:|:---:|:---:|:---:|
| 0 | 0 | 0 | 0 | 0 |
| 0 | 0 | 1 | 0 | 1 |
| 0 | 1 | 0 | 0 | 1 |
| 0 | 1 | 1 | 1 | 0 |
| 1 | 0 | 0 | 0 | 1 |
| 1 | 0 | 1 | 1 | 0 |
| 1 | 1 | 0 | 1 | 0 |
| 1 | 1 | 1 | 1 | 1 |

$\mathbf{Ans}\quad S=1$ ที่ค่า $1,2,4,7$ และ $C=1$ ที่ค่า $3,5,6,7$ (ตารางดังด้านบน)

---

### ข้อ 5.2  จากตารางความจริงในข้อ 5.1 จงลดรูปสมการของ $S$ และ $C$ ด้วยแผนผังคาร์โนห์ (K-map) (2 คะแนน)

$\mathbf{Sol}^{n}$

ใส่ $1$ ของ $S$ ที่ช่อง $1,2,4,7$ และของ $C$ ที่ช่อง $3,5,6,7$ แล้วจับลูป

**แผนผังของ $S$** ไม่มีช่อง $1$ ที่อยู่ติดกัน จึงรวมกลุ่มไม่ได้ ต้องเขียนทุกมินเทอม

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="299" height="172" viewBox="0 0 340 196" font-family="Times New Roman, serif" font-size="20" fill="currentColor">
<g stroke="currentColor" stroke-width="1.8" fill="none"><rect x="100" y="56" width="232" height="116"/>
<line x1="158" y1="56" x2="158" y2="172"/>
<line x1="216" y1="56" x2="216" y2="172"/>
<line x1="274" y1="56" x2="274" y2="172"/>
<line x1="100" y1="114" x2="332" y2="114"/>
<line x1="26" y1="12" x2="100" y2="56"/></g>
<text x="80" y="26" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">XY</text><text x="42" y="50" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">Z</text><text x="129" y="48" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">00</text><text x="187" y="48" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">01</text><text x="245" y="48" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">11</text><text x="303" y="48" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">10</text><text x="90" y="91" font-size="18" text-anchor="end" fill="currentColor" stroke="none">0</text><text x="90" y="149" font-size="18" text-anchor="end" fill="currentColor" stroke="none">1</text><text x="110" y="77" font-size="11" text-anchor="start" fill="currentColor" fill-opacity="0.6" stroke="none">0</text><text x="129" y="93" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">0</text><text x="168" y="77" font-size="11" text-anchor="start" fill="currentColor" fill-opacity="0.6" stroke="none">2</text><text x="187" y="93" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">1</text><text x="226" y="77" font-size="11" text-anchor="start" fill="currentColor" fill-opacity="0.6" stroke="none">6</text><text x="245" y="93" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">0</text><text x="284" y="77" font-size="11" text-anchor="start" fill="currentColor" fill-opacity="0.6" stroke="none">4</text><text x="303" y="93" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">1</text><text x="110" y="135" font-size="11" text-anchor="start" fill="currentColor" fill-opacity="0.6" stroke="none">1</text><text x="129" y="151" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">1</text><text x="168" y="135" font-size="11" text-anchor="start" fill="currentColor" fill-opacity="0.6" stroke="none">3</text><text x="187" y="151" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">0</text><text x="226" y="135" font-size="11" text-anchor="start" fill="currentColor" fill-opacity="0.6" stroke="none">7</text><text x="245" y="151" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">1</text><text x="284" y="135" font-size="11" text-anchor="start" fill="currentColor" fill-opacity="0.6" stroke="none">5</text><text x="303" y="151" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">0</text>
</svg>
</div>

**แผนผังของ $C$**

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="299" height="172" viewBox="0 0 340 196" font-family="Times New Roman, serif" font-size="20" fill="currentColor">
<g stroke="currentColor" stroke-width="1.8" fill="none"><rect x="100" y="56" width="232" height="116"/>
<line x1="158" y1="56" x2="158" y2="172"/>
<line x1="216" y1="56" x2="216" y2="172"/>
<line x1="274" y1="56" x2="274" y2="172"/>
<line x1="100" y1="114" x2="332" y2="114"/>
<line x1="26" y1="12" x2="100" y2="56"/></g>
<text x="80" y="26" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">XY</text><text x="42" y="50" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">Z</text><text x="129" y="48" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">00</text><text x="187" y="48" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">01</text><text x="245" y="48" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">11</text><text x="303" y="48" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">10</text><text x="90" y="91" font-size="18" text-anchor="end" fill="currentColor" stroke="none">0</text><text x="90" y="149" font-size="18" text-anchor="end" fill="currentColor" stroke="none">1</text><text x="110" y="77" font-size="11" text-anchor="start" fill="currentColor" fill-opacity="0.6" stroke="none">0</text><text x="129" y="93" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">0</text><text x="168" y="77" font-size="11" text-anchor="start" fill="currentColor" fill-opacity="0.6" stroke="none">2</text><text x="187" y="93" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">0</text><text x="226" y="77" font-size="11" text-anchor="start" fill="currentColor" fill-opacity="0.6" stroke="none">6</text><text x="245" y="93" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">1</text><text x="284" y="77" font-size="11" text-anchor="start" fill="currentColor" fill-opacity="0.6" stroke="none">4</text><text x="303" y="93" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">0</text><text x="110" y="135" font-size="11" text-anchor="start" fill="currentColor" fill-opacity="0.6" stroke="none">1</text><text x="129" y="151" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">0</text><text x="168" y="135" font-size="11" text-anchor="start" fill="currentColor" fill-opacity="0.6" stroke="none">3</text><text x="187" y="151" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">1</text><text x="226" y="135" font-size="11" text-anchor="start" fill="currentColor" fill-opacity="0.6" stroke="none">7</text><text x="245" y="151" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">1</text><text x="284" y="135" font-size="11" text-anchor="start" fill="currentColor" fill-opacity="0.6" stroke="none">5</text><text x="303" y="151" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">1</text>
<g><rect x="220" y="60" width="50" height="108" rx="14" stroke="#e8743b" stroke-width="3" fill="none"/>
<rect x="222" y="120" width="104" height="46" rx="14" stroke="#3b8be8" stroke-width="3" fill="none"/>
<rect x="166" y="122" width="100" height="42" rx="14" stroke="#2fae5f" stroke-width="3" fill="none"/></g>
</svg>
</div>

- ลูปสีส้ม (ช่อง $6,7$) : $X=1,\ Y=1$ $\Rightarrow XY$
- ลูปสีน้ำเงิน (ช่อง $5,7$) : $X=1,\ Z=1$ $\Rightarrow XZ$
- ลูปสีเขียว (ช่อง $3,7$) : $Y=1,\ Z=1$ $\Rightarrow YZ$

$\mathbf{Ans}\quad S=\overline{X}\,\overline{Y}Z+\overline{X}Y\overline{Z}+X\overline{Y}\,\overline{Z}+XYZ,\quad C=XY+XZ+YZ$

---

### ข้อ 5.3  จากสมการของ $C$ ที่ได้ในข้อ 5.2 จงออกแบบวงจรใหม่โดยใช้ **แนนด์เกต (NAND) เท่านั้น** (2 คะแนน)

$\mathbf{Sol}^{n}$

แปลงให้อยู่ในรูปแนนด์ล้วน โดยกลับค่า 2 ครั้งแล้วใช้เดอร์มอร์แกน

$$
\begin{aligned}
C &= XY+XZ+YZ \\
&= \overline{\overline{XY+XZ+YZ}} &&\text{ข้อ 5(b) กลับค่า 2 ครั้ง} \\
&= \overline{\overline{XY}\cdot\overline{XZ}\cdot\overline{YZ}} &&\text{เดอร์มอร์แกน ข้อ 10(a)}
\end{aligned}
$$

แต่ละพจน์ $\overline{XY}$, $\overline{XZ}$, $\overline{YZ}$ คือแนนด์เกต 2 อินพุต และเกตสุดท้ายเป็นแนนด์เกต 3 อินพุต

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="468" height="270" viewBox="0 0 520 300" font-family="Times New Roman, serif" font-size="20" fill="currentColor">
<g stroke="currentColor" stroke-width="1.8" fill="none"><path d="M200 30H230A25.0 25.0 0 0 1 230 80H200Z"/>
<circle cx="260.0" cy="55.0" r="5"/>
<path d="M200 120H230A25.0 25.0 0 0 1 230 170H200Z"/>
<circle cx="260.0" cy="145.0" r="5"/>
<path d="M200 210H230A25.0 25.0 0 0 1 230 260H200Z"/>
<circle cx="260.0" cy="235.0" r="5"/>
<path d="M360 110H390A33.0 33.0 0 0 1 390 176H360Z"/>
<circle cx="428.0" cy="143.0" r="5"/>
<polyline points="36,55 55,55 55,42.0 200,42.0"/>
<polyline points="36,135 90,135 90,68.0 200,68.0"/>
<polyline points="36,55 70,55 70,132.0 200,132.0"/>
<polyline points="36,215 125,215 125,158.0 200,158.0"/>
<polyline points="36,135 105,135 105,222.0 200,222.0"/>
<polyline points="36,215 140,215 140,248.0 200,248.0"/>
<polyline points="265.0,55.0 310,55.0 310,122.0 360,122.0"/>
<polyline points="265.0,145.0 322,145.0 322,143.0 360,143.0"/>
<polyline points="265.0,235.0 334,235.0 334,164.0 360,164.0"/>
<line x1="433.0" y1="143.0" x2="483.0" y2="143.0"/></g>
<circle cx="55" cy="55" r="3" fill="currentColor" stroke="none"/><circle cx="90" cy="135" r="3" fill="currentColor" stroke="none"/><circle cx="70" cy="55" r="3" fill="currentColor" stroke="none"/><circle cx="125" cy="215" r="3" fill="currentColor" stroke="none"/><circle cx="105" cy="135" r="3" fill="currentColor" stroke="none"/><circle cx="140" cy="215" r="3" fill="currentColor" stroke="none"/>
<text x="12" y="61" font-size="20" font-style="italic" text-anchor="start" fill="currentColor" stroke="none">X</text><text x="12" y="141" font-size="20" font-style="italic" text-anchor="start" fill="currentColor" stroke="none">Y</text><text x="12" y="221" font-size="20" font-style="italic" text-anchor="start" fill="currentColor" stroke="none">Z</text><text x="495.0" y="149.0" font-size="20" font-style="italic" text-anchor="start" fill="currentColor" stroke="none">C</text>
</svg>
</div>

$\mathbf{Ans}\quad C=\overline{\overline{XY}\cdot\overline{XZ}\cdot\overline{YZ}}$ ใช้แนนด์เกต 4 ตัวดังรูป

---

### ข้อ 5.4  จากวงจรที่ออกแบบแล้ว เมื่อสัญญาณอินพุต $X$, $Y$, $Z$ เป็นดังไดอะแกรมเวลาต่อไปนี้ จงวาดไดอะแกรมเวลาของเอาต์พุต $S$ และ $C$ (1 คะแนน)

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="531" height="302" viewBox="0 0 590 336" font-family="Times New Roman, serif" font-size="20" fill="currentColor">
<g stroke="currentColor" stroke-width="1.8" fill="none"><text x="44" y="48" font-size="22" font-style="italic" text-anchor="end" fill="currentColor" stroke="none">X</text>
<polyline points="70,58 130,58 190,58 190,26 250,26 310,26 370,26 370,58 430,58 490,58 490,26 550,26"/>
<text x="44" y="110" font-size="22" font-style="italic" text-anchor="end" fill="currentColor" stroke="none">Y</text>
<polyline points="70,120 130,120 130,88 190,88 250,88 250,120 310,120 310,88 370,88 430,88 430,120 490,120 550,120"/>
<text x="44" y="172" font-size="22" font-style="italic" text-anchor="end" fill="currentColor" stroke="none">Z</text>
<polyline points="70,150 130,150 130,182 190,182 190,150 250,150 310,150 310,182 370,182 430,182 490,182 490,150 550,150"/>
<text x="44" y="234" font-size="22" font-style="italic" text-anchor="end" fill="currentColor" stroke="none">S</text>
<line x1="70" y1="212" x2="550" y2="212" stroke-dasharray="2 6" stroke-opacity="0.45"/>
<line x1="70" y1="244" x2="550" y2="244" stroke-dasharray="2 6" stroke-opacity="0.45"/>
<text x="44" y="296" font-size="22" font-style="italic" text-anchor="end" fill="currentColor" stroke="none">C</text>
<line x1="70" y1="274" x2="550" y2="274" stroke-dasharray="2 6" stroke-opacity="0.45"/>
<line x1="70" y1="306" x2="550" y2="306" stroke-dasharray="2 6" stroke-opacity="0.45"/></g>
<g stroke="currentColor" fill="none"><line x1="70" y1="6" x2="70" y2="320" stroke-dasharray="2 5" stroke-opacity="0.45"/>
<line x1="130" y1="6" x2="130" y2="320" stroke-dasharray="2 5" stroke-opacity="0.45"/>
<line x1="190" y1="6" x2="190" y2="320" stroke-dasharray="2 5" stroke-opacity="0.45"/>
<line x1="250" y1="6" x2="250" y2="320" stroke-dasharray="2 5" stroke-opacity="0.45"/>
<line x1="310" y1="6" x2="310" y2="320" stroke-dasharray="2 5" stroke-opacity="0.45"/>
<line x1="370" y1="6" x2="370" y2="320" stroke-dasharray="2 5" stroke-opacity="0.45"/>
<line x1="430" y1="6" x2="430" y2="320" stroke-dasharray="2 5" stroke-opacity="0.45"/>
<line x1="490" y1="6" x2="490" y2="320" stroke-dasharray="2 5" stroke-opacity="0.45"/>
<line x1="550" y1="6" x2="550" y2="320" stroke-dasharray="2 5" stroke-opacity="0.45"/></g>
<text x="572" y="304" font-size="20" font-style="italic" text-anchor="end" fill="currentColor" stroke="none">t</text>
</svg>
</div>

$\mathbf{Sol}^{n}$

หาค่า $S$ และ $C$ ทีละช่วงเวลา จากจำนวนอินพุตที่เป็น $1$ ($S=X\oplus Y\oplus Z$ และ $C=1$ เมื่อมีอินพุตเป็น $1$ ตั้งแต่ 2 ตัวขึ้นไป)

$\mathbf{Ans}\quad$ ไดอะแกรมเวลาของ $S$ และ $C$ ดังรูป

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="531" height="302" viewBox="0 0 590 336" font-family="Times New Roman, serif" font-size="20" fill="currentColor">
<g stroke="currentColor" stroke-width="1.8" fill="none"><text x="44" y="48" font-size="22" font-style="italic" text-anchor="end" fill="currentColor" stroke="none">X</text>
<polyline points="70,58 130,58 190,58 190,26 250,26 310,26 370,26 370,58 430,58 490,58 490,26 550,26"/>
<text x="44" y="110" font-size="22" font-style="italic" text-anchor="end" fill="currentColor" stroke="none">Y</text>
<polyline points="70,120 130,120 130,88 190,88 250,88 250,120 310,120 310,88 370,88 430,88 430,120 490,120 550,120"/>
<text x="44" y="172" font-size="22" font-style="italic" text-anchor="end" fill="currentColor" stroke="none">Z</text>
<polyline points="70,150 130,150 130,182 190,182 190,150 250,150 310,150 310,182 370,182 430,182 490,182 490,150 550,150"/>
<text x="44" y="234" font-size="22" font-style="italic" text-anchor="end" fill="currentColor" stroke="none">S</text>
<polyline points="70,212 130,212 190,212 250,212 250,244 310,244 370,244 370,212 430,212 430,244 490,244 550,244"/>
<text x="44" y="296" font-size="22" font-style="italic" text-anchor="end" fill="currentColor" stroke="none">C</text>
<polyline points="70,306 130,306 190,306 190,274 250,274 310,274 370,274 370,306 430,306 490,306 490,274 550,274"/></g>
<g stroke="currentColor" fill="none"><line x1="70" y1="6" x2="70" y2="320" stroke-dasharray="2 5" stroke-opacity="0.45"/>
<line x1="130" y1="6" x2="130" y2="320" stroke-dasharray="2 5" stroke-opacity="0.45"/>
<line x1="190" y1="6" x2="190" y2="320" stroke-dasharray="2 5" stroke-opacity="0.45"/>
<line x1="250" y1="6" x2="250" y2="320" stroke-dasharray="2 5" stroke-opacity="0.45"/>
<line x1="310" y1="6" x2="310" y2="320" stroke-dasharray="2 5" stroke-opacity="0.45"/>
<line x1="370" y1="6" x2="370" y2="320" stroke-dasharray="2 5" stroke-opacity="0.45"/>
<line x1="430" y1="6" x2="430" y2="320" stroke-dasharray="2 5" stroke-opacity="0.45"/>
<line x1="490" y1="6" x2="490" y2="320" stroke-dasharray="2 5" stroke-opacity="0.45"/>
<line x1="550" y1="6" x2="550" y2="320" stroke-dasharray="2 5" stroke-opacity="0.45"/></g>
<text x="572" y="304" font-size="20" font-style="italic" text-anchor="end" fill="currentColor" stroke="none">t</text>
</svg>
</div>
