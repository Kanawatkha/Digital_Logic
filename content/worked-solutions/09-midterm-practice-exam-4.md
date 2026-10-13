# แนวข้อสอบกลางภาค ชุดที่ 4 (Midterm Practice Exam 4)

ข้อสอบมี 5 ข้อใหญ่ รวม 34 คะแนน (ข้อ 1 = 8, ข้อ 2 = 6, ข้อ 3 = 7, ข้อ 4 = 8, ข้อ 5 = 5) ข้อ 4 ให้วงจรมา ส่วนข้อ 5 เป็นโจทย์ออกแบบแบบประโยค เฉลยอ้างทฤษฎีบทตามเลขข้อในตารางสรุปบทที่ 3

---

## ข้อ 1 (8 คะแนน)

### ข้อ 1.1  จงแปลงเลขฐานต่อไปนี้ให้ครบทุกฐานตามตาราง (6 คะแนน)

| ฐาน 2 | ฐาน 8 | ฐาน 10 | ฐาน 16 |
|:---:|:---:|:---:|:---:|
| 10110.101 |  |  |  |
|  | 47 |  |  |
|  |  | 203 |  |

$\mathbf{Sol}^{n}$

**แถวที่ 1** $10110.101_2$ : ฐาน 10 คูณแต่ละหลักด้วยฐานยกกำลังตามตำแหน่ง ฐาน 8 แบ่งกลุ่มละ 3 บิต และฐาน 16 แบ่งกลุ่มละ 4 บิต (ส่วนจำนวนเต็มแบ่งจากขวา ส่วนทศนิยมแบ่งจากซ้ายแล้วเติม 0 ทางขวา)

$$
\begin{aligned}
(10110.101)_2 &= (1\times2^{4})+(0\times2^{3})+(1\times2^{2})+(1\times2^{1})+(0\times2^{0})+(1\times2^{-1})+(0\times2^{-2})+(1\times2^{-3}) \\
&= 16+0+4+2+0+0.5+0+0.125 \\
&= 22.625
\end{aligned}
$$

$$
\begin{array}{cccc}
010 & 110 & . & 101 \\
\downarrow & \downarrow & & \downarrow \\
2 & 6 & . & 5
\end{array}
\qquad
\begin{array}{cccc}
0001 & 0110 & . & 1010 \\
\downarrow & \downarrow & & \downarrow \\
1 & 6 & . & A
\end{array}
$$

**แถวที่ 2** $47_8$ : ฐาน 2 แตกแต่ละหลักเป็น 3 บิต ฐาน 10 คูณด้วยฐาน 8 ยกกำลัง และฐาน 16 ผ่านฐาน 2 แบ่งกลุ่มละ 4 บิต

$$
\begin{array}{cc}
4 & 7 \\
\downarrow & \downarrow \\
100 & 111
\end{array}
\qquad
(47)_8=(4\times8^{1})+(7\times8^{0})=32+7=39
\qquad
\begin{array}{cc}
0010 & 0111 \\
\downarrow & \downarrow \\
2 & 7
\end{array}
$$

**แถวที่ 3** $203_{10}$ : ฐาน 2 หารด้วย 2 ซ้ำ แล้วฐาน 8 และฐาน 16 ผ่านฐาน 2 แบ่งกลุ่มละ 3 และ 4 บิต (เติม 0 ทางซ้าย)

$$
\begin{array}{c|r|l}
2 & 203 & 1 \ \ (\text{LSB}) \\
2 & 101 & 1 \\
2 & 50 & 0 \\
2 & 25 & 1 \\
2 & 12 & 0 \\
2 & 6 & 0 \\
2 & 3 & 1 \\
2 & 1 & 1 \ \ (\text{MSB}) \\
 & 0 &
\end{array}
$$

เศษอ่านล่างขึ้นบน $\Rightarrow 11001011_2$

$$
\begin{array}{ccc}
011 & 001 & 011 \\
\downarrow & \downarrow & \downarrow \\
3 & 1 & 3
\end{array}
\qquad
\begin{array}{cc}
1100 & 1011 \\
\downarrow & \downarrow \\
C & B
\end{array}
$$

$\mathbf{Ans}$

| ฐาน 2 | ฐาน 8 | ฐาน 10 | ฐาน 16 |
|:---:|:---:|:---:|:---:|
| 10110.101 | 26.5 | 22.625 | 16.A |
| 100111 | 47 | 39 | 27 |
| 11001011 | 313 | 203 | CB |

---

### ข้อ 1.2  จงแปลงเลขฐานสิบ $7305$ เป็นรหัส ASCII (1 คะแนน)

$\mathbf{Sol}^{n}$

แปลงทีละอักขระ อ่านจากตาราง ASCII คอลัมน์ $B_7B_6B_5$ ต่อด้วยแถว $B_4B_3B_2B_1$ (อักขระ 0 ถึง 9 อยู่คอลัมน์ $011$ แถวคือค่าของตัวเลขนั้น)

| ตัวอักษร | คอลัมน์ ($B_7B_6B_5$) | แถว ($B_4B_3B_2B_1$) | ASCII 7 บิต |
|:---:|:---:|:---:|:---:|
| 7 | 011 | 0111 | 0110111 |
| 3 | 011 | 0011 | 0110011 |
| 0 | 011 | 0000 | 0110000 |
| 5 | 011 | 0101 | 0110101 |

$\mathbf{Ans}\quad 7305=\mathbf{0110111 0110011 0110000 0110101}$ (ASCII)

---

### ข้อ 1.3  เลข $6$ ฐานสิบ แปลงเป็นรหัสเกรย์ได้เท่ากับข้อใด (เลือกคำตอบที่ถูกต้อง) (1 คะแนน)

- ก. $0110$
- ข. $0101$
- ค. $0111$
- ง. $1010$

$\mathbf{Sol}^{n}$

เลข $6$ ฐานสิบเป็นเลขฐานสอง 4 บิตคือ $0110$ ดึงบิต MSB ลงมา แล้วบวก (ตัดตัวทด) บิตซ้ายกับบิตขวาที่อยู่ติดกัน

$$
\begin{array}{ccccccc}
\text{MSB} &  &  &  &  &  & \text{LSB} \\
0 & + & 1 & + & 1 & + & 0 \\
\downarrow & & \downarrow & & \downarrow & & \downarrow \\
0 & & 1 & & 0 & & 1
\end{array}
$$

$\mathbf{Ans}\quad 6_{10}=0110_2=\mathbf{0101_{Gray}}$ ตรงกับ **ข้อ ข**

---

## ข้อ 2 (6 คะแนน)

### ข้อ 2.1  จงหา 2's complement ของเลขฐานสองต่อไปนี้ $01101100_2$ และ $10010110_2$ (2 คะแนน)

$\mathbf{Sol}^{n}$

2's complement : กลับบิตทุกตัว ($0\to1$, $1\to0$) แล้วบวก $1$

$$
\begin{aligned}
\text{1's}(01101100) &= 10010011 &&\Rightarrow \text{2's}=10010011+1=10010100 \\
\text{1's}(10010110) &= 01101001 &&\Rightarrow \text{2's}=01101001+1=01101010
\end{aligned}
$$

$\mathbf{Ans}\quad \text{2's}(01101100)=\mathbf{10010100},\quad \text{2's}(10010110)=\mathbf{01101010}$

---

### ข้อ 2.2  หาค่า $1011001_2-100110_2$ โดยใช้วิธี 2's complement (2 คะแนน)

$\mathbf{Sol}^{n}$

เติม 0 ให้ตัวลบมี 7 บิต : $100110\to0100110$ แล้ว 1's คือ $1011001$ และ 2's คือ $1011001+1=1011010$

$$
\begin{array}{ccccccccc}
 & & 1 & 0 & 1 & 1 & 0 & 0 & 1 \\
+ & & 1 & 0 & 1 & 1 & 0 & 1 & 0 \\
\hline
 & 1 & 0 & 1 & 1 & 0 & 0 & 1 & 1 \\
\end{array}
$$

มีตัวทด จึงตัดตัวทดทิ้ง เหลือ $0110011$ ได้คำตอบเป็นบวก

$\mathbf{Ans}\quad 1011001_2-100110_2=\mathbf{+0110011_2}$

---

### ข้อ 2.3  หาค่า $100101_2-110110_2$ โดยใช้วิธี 2's complement (2 คะแนน)

$\mathbf{Sol}^{n}$

ตัวลบมี 6 บิตเท่าตัวตั้งแล้ว หา 2's ของ $110110$ : 1's คือ $001001$ และ 2's คือ $001001+1=001010$

$$
\begin{array}{cccccccc}
 & & 1 & 0 & 0 & 1 & 0 & 1 \\
+ & & 0 & 0 & 1 & 0 & 1 & 0 \\
\hline
 & 0 & 1 & 0 & 1 & 1 & 1 & 1 \\
\end{array}
$$

ไม่มีตัวทด จึงหา 2's ของผลบวก : 1's ของ $101111$ คือ $010000$ และ $+1$ ได้ $010001$ ได้คำตอบเป็นลบ

$\mathbf{Ans}\quad 100101_2-110110_2=\mathbf{-010001_2}$

---

## ข้อ 3 (7 คะแนน)

### ข้อ 3.1  กำหนดฟังก์ชัน $F(A,B,C)=\sum m(0,2,3,7)$ จงเขียนสมการในรูป SOP (ไม่ต้องลดรูป) (1 คะแนน)

$\mathbf{Sol}^{n}$

แปลงมินเทอมเป็นผลคูณ ($A$ เป็น MSB และ $0$ แทนตัวแปรกลับค่า)

$$
\begin{aligned}
m_0=000 &\Rightarrow \overline{A}\,\overline{B}\,\overline{C} \\
m_2=010 &\Rightarrow \overline{A}B\overline{C} \\
m_3=011 &\Rightarrow \overline{A}BC \\
m_7=111 &\Rightarrow ABC
\end{aligned}
$$

$\mathbf{Ans}\quad F=\overline{A}\overline{B}\overline{C} + \overline{A}B\overline{C} + \overline{A}BC + ABC$

---

### ข้อ 3.2  กำหนดฟังก์ชัน $F(A,B,C)=\prod M(1,4,5,6)$ จงเขียนสมการในรูป POS (ไม่ต้องลดรูป) (1 คะแนน)

$\mathbf{Sol}^{n}$

แปลงแมกเทอมเป็นผลบวก ($A$ เป็น MSB และ $1$ แทนตัวแปรกลับค่า)

$$
\begin{aligned}
M_1=001 &\Rightarrow (A+B+\overline{C}) \\
M_4=100 &\Rightarrow (\overline{A}+B+C) \\
M_5=101 &\Rightarrow (\overline{A}+B+\overline{C}) \\
M_6=110 &\Rightarrow (\overline{A}+\overline{B}+C)
\end{aligned}
$$

$\mathbf{Ans}\quad F=(A+B+\overline{C})(\overline{A}+B+C)(\overline{A}+B+\overline{C})(\overline{A}+\overline{B}+C)$

---

### ข้อ 3.3  กำหนดสมการ $F=A\overline{B}+\overline{A}C$ จงเขียนตารางความจริง (2 คะแนน)

| $A$ | $B$ | $C$ | $F$ |
|:---:|:---:|:---:|:---:|
| 0 | 0 | 0 |   |
| 0 | 0 | 1 |   |
| 0 | 1 | 0 |   |
| 0 | 1 | 1 |   |
| 1 | 0 | 0 |   |
| 1 | 0 | 1 |   |
| 1 | 1 | 0 |   |
| 1 | 1 | 1 |   |

$\mathbf{Sol}^{n}$

แทนค่า $A,B,C$ ทั้ง 8 กรณี $A\overline{B}=1$ เมื่อ $A=1,B=0$ และ $\overline{A}C=1$ เมื่อ $A=0,C=1$

| $A$ | $B$ | $C$ | $F$ |
|:---:|:---:|:---:|:---:|
| 0 | 0 | 0 | 0 |
| 0 | 0 | 1 | 1 |
| 0 | 1 | 0 | 0 |
| 0 | 1 | 1 | 1 |
| 1 | 0 | 0 | 1 |
| 1 | 0 | 1 | 1 |
| 1 | 1 | 0 | 0 |
| 1 | 1 | 1 | 0 |

$\mathbf{Ans}\quad F=1$ เมื่อ $ABC=001,011,100,101$ นอกนั้น $F=0$ (ตารางดังด้านบน)

---

### ข้อ 3.4  กำหนดฟังก์ชัน $f(A,B,C,D)=\sum m(0,4,5,6,13)+\sum d(2,9,12)$ จงลดรูปด้วยแผนผังคาร์โนห์ (K-map) โดยใช้เงื่อนไขไม่สนใจ (Don't Care) ให้เป็นประโยชน์ ให้เป็นสมการ SOP ที่สั้นที่สุด (3 คะแนน)

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
<text x="80" y="26" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">CD</text><text x="42" y="50" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">AB</text><text x="129" y="48" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">00</text><text x="187" y="48" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">01</text><text x="245" y="48" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">11</text><text x="303" y="48" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">10</text><text x="90" y="91" font-size="18" text-anchor="end" fill="currentColor" stroke="none">00</text><text x="90" y="149" font-size="18" text-anchor="end" fill="currentColor" stroke="none">01</text><text x="90" y="207" font-size="18" text-anchor="end" fill="currentColor" stroke="none">11</text><text x="90" y="265" font-size="18" text-anchor="end" fill="currentColor" stroke="none">10</text>
</svg>
</div>

$\mathbf{Sol}^{n}$

ใส่ $1$ ที่ช่องมินเทอม ใส่ $X$ ที่ช่อง Don't Care แล้วจับลูปของ $1$ โดยนับ $X$ เป็น $1$ ได้ตามต้องการ

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
<text x="80" y="26" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">CD</text><text x="42" y="50" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">AB</text><text x="129" y="48" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">00</text><text x="187" y="48" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">01</text><text x="245" y="48" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">11</text><text x="303" y="48" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">10</text><text x="90" y="91" font-size="18" text-anchor="end" fill="currentColor" stroke="none">00</text><text x="90" y="149" font-size="18" text-anchor="end" fill="currentColor" stroke="none">01</text><text x="90" y="207" font-size="18" text-anchor="end" fill="currentColor" stroke="none">11</text><text x="90" y="265" font-size="18" text-anchor="end" fill="currentColor" stroke="none">10</text><text x="110" y="77" font-size="11" text-anchor="start" fill="currentColor" fill-opacity="0.6" stroke="none">0</text><text x="129" y="93" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">1</text><text x="168" y="77" font-size="11" text-anchor="start" fill="currentColor" fill-opacity="0.6" stroke="none">1</text><text x="187" y="93" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">0</text><text x="226" y="77" font-size="11" text-anchor="start" fill="currentColor" fill-opacity="0.6" stroke="none">3</text><text x="245" y="93" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">0</text><text x="284" y="77" font-size="11" text-anchor="start" fill="currentColor" fill-opacity="0.6" stroke="none">2</text><text x="303" y="93" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">X</text><text x="110" y="135" font-size="11" text-anchor="start" fill="currentColor" fill-opacity="0.6" stroke="none">4</text><text x="129" y="151" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">1</text><text x="168" y="135" font-size="11" text-anchor="start" fill="currentColor" fill-opacity="0.6" stroke="none">5</text><text x="187" y="151" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">1</text><text x="226" y="135" font-size="11" text-anchor="start" fill="currentColor" fill-opacity="0.6" stroke="none">7</text><text x="245" y="151" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">0</text><text x="284" y="135" font-size="11" text-anchor="start" fill="currentColor" fill-opacity="0.6" stroke="none">6</text><text x="303" y="151" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">1</text><text x="110" y="193" font-size="11" text-anchor="start" fill="currentColor" fill-opacity="0.6" stroke="none">12</text><text x="129" y="209" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">X</text><text x="168" y="193" font-size="11" text-anchor="start" fill="currentColor" fill-opacity="0.6" stroke="none">13</text><text x="187" y="209" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">1</text><text x="226" y="193" font-size="11" text-anchor="start" fill="currentColor" fill-opacity="0.6" stroke="none">15</text><text x="245" y="209" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">0</text><text x="284" y="193" font-size="11" text-anchor="start" fill="currentColor" fill-opacity="0.6" stroke="none">14</text><text x="303" y="209" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">0</text><text x="110" y="251" font-size="11" text-anchor="start" fill="currentColor" fill-opacity="0.6" stroke="none">8</text><text x="129" y="267" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">0</text><text x="168" y="251" font-size="11" text-anchor="start" fill="currentColor" fill-opacity="0.6" stroke="none">9</text><text x="187" y="267" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">X</text><text x="226" y="251" font-size="11" text-anchor="start" fill="currentColor" fill-opacity="0.6" stroke="none">11</text><text x="245" y="267" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">0</text><text x="284" y="251" font-size="11" text-anchor="start" fill="currentColor" fill-opacity="0.6" stroke="none">10</text><text x="303" y="267" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">0</text>
<g><rect x="104" y="60" width="50" height="108" rx="14" stroke="#e8743b" stroke-width="3" fill="none"/>
<rect x="278" y="60" width="50" height="108" rx="14" stroke="#e8743b" stroke-width="3" fill="none"/>
<rect x="106" y="120" width="104" height="104" rx="14" stroke="#3b8be8" stroke-width="3" fill="none"/></g>
</svg>
</div>

- ลูปสีส้ม (ช่อง $0,2,4,6$) : $\overline{A}\overline{D}$

- ลูปสีน้ำเงิน (ช่อง $4,5,12,13$) : $B\overline{C}$

ช่อง $X$ ที่ไม่ได้อยู่ในลูปไม่ต้องครอบ

$\mathbf{Ans}\quad f=\overline{A}\overline{D} + B\overline{C}$

---

## ข้อ 4 จากวงจรที่กำหนดให้ (8 คะแนน)

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="504" height="297" viewBox="0 0 560 330" font-family="Times New Roman, serif" font-size="20" fill="currentColor">
<g stroke="currentColor" stroke-width="1.8" fill="none"><path d="M110 30Q150 30 170 55.0Q150 80 110 80Q124 55.0 110 30Z"/>
<circle cx="175" cy="55.0" r="5"/>
<path d="M110 120Q150 120 170 145.0Q150 170 110 170Q124 145.0 110 120Z"/>
<path d="M260 70H290A25.0 25.0 0 0 1 290 120H260Z"/>
<circle cx="320.0" cy="95.0" r="5"/>
<path d="M110 250Q150 250 170 275.0Q150 300 110 300Q124 275.0 110 250Z"/>
<path d="M102 250Q116 275.0 102 300"/>
<path d="M230 255L270 275L230 295Z"/>
<circle cx="275" cy="275" r="5"/>
<path d="M400 150Q440 150 460 175.0Q440 200 400 200Q414 175.0 400 150Z"/>
<circle cx="465" cy="175.0" r="5"/>
<polyline points="36,42 60,42 110,42.0"/>
<polyline points="36,68 60,68 110,68.0"/>
<polyline points="36,132 60,132 110,132.0"/>
<polyline points="36,158 60,158 110,158.0"/>
<polyline points="36,262 60,262 110,262.0"/>
<polyline points="36,288 60,288 110,288.0"/>
<polyline points="180,55.0 225,55.0 225,82.0 260,82.0"/>
<polyline points="170,145.0 238,145.0 238,108.0 260,108.0"/>
<polyline points="170,275.0 200,275.0 230,275"/>
<polyline points="325.0,95.0 365,95.0 365,162.0 400,162.0"/>
<polyline points="280,275 385,275 385,188.0 400,188.0"/>
<line x1="470" y1="175.0" x2="520" y2="175.0"/></g>
<text x="12" y="48" font-size="20" font-style="italic" text-anchor="start" fill="currentColor" stroke="none">A</text><text x="12" y="74" font-size="20" font-style="italic" text-anchor="start" fill="currentColor" stroke="none">B</text><text x="12" y="138" font-size="20" font-style="italic" text-anchor="start" fill="currentColor" stroke="none">C</text><text x="12" y="164" font-size="20" font-style="italic" text-anchor="start" fill="currentColor" stroke="none">D</text><text x="12" y="268" font-size="20" font-style="italic" text-anchor="start" fill="currentColor" stroke="none">E</text><text x="12" y="294" font-size="20" font-style="italic" text-anchor="start" fill="currentColor" stroke="none">F</text><text x="532" y="181.0" font-size="20" font-style="italic" text-anchor="start" fill="currentColor" stroke="none">X</text>
</svg>
</div>

### ข้อ 4.1  จงเขียนสมการของเอาต์พุต $X$ จากวงจร (2 คะแนน)

$\mathbf{Sol}^{n}$

ไล่เอาต์พุตของเกตแต่ละตัวจากอินพุตไปหาเอาต์พุต

$$
\begin{aligned}
G_1 &= \overline{A+B} \quad(\text{NOR}) \\
G_2 &= C+D \quad(\text{OR}) \\
G_3 &= \overline{G_1\cdot G_2} \quad(\text{NAND}) \\
G_4 &= E\oplus F \quad(\text{XOR}) \\
G_5 &= \overline{G_4} \quad(\text{NOT}) \\
X &= \overline{G_3+G_5} \quad(\text{NOR})
\end{aligned}
$$

$\mathbf{Ans}\quad X=\overline{\overline{\overline{A+B}\cdot(C+D)}+\overline{E\oplus F}}$

---

### ข้อ 4.2  จากสมการในข้อ 4.1 จงลดรูปด้วยทฤษฎีของเดอร์มอร์แกนให้ไม่มีเครื่องหมายขีดคลุมเหนือหลายตัวแปรหรือหลายพจน์ (2 คะแนน)

$\mathbf{Sol}^{n}$

$$
\begin{aligned}
X &= \overline{\overline{\overline{A+B}\cdot(C+D)}+\overline{E\oplus F}} \\
&= \overline{\overline{\overline{A+B}\cdot(C+D)}}\cdot\overline{\overline{E\oplus F}} &&\text{เดอร์มอร์แกน ข้อ 10(a)} \\
&= \overline{A+B}\cdot(C+D)\cdot(E\oplus F) &&\text{ข้อ 5(b) $\overline{\overline{X}}=X$} \\
&= \overline{A}\,\overline{B}\cdot(C+D)\cdot(E\oplus F) &&\text{เดอร์มอร์แกน ข้อ 10(a)}
\end{aligned}
$$

$\mathbf{Ans}\quad X=\overline{A}\,\overline{B}\,(C+D)\,(E\oplus F)$

---

### ข้อ 4.3  จงหาเงื่อนไขทั้งหมดของอินพุต $A$ ถึง $F$ ที่ทำให้เอาต์พุต $X=1$ (4 คะแนน)

$\mathbf{Sol}^{n}$

$X=\overline{A}\,\overline{B}\,(C+D)\,(E\oplus F)$ เป็นผลคูณของ 4 พจน์ ดังนั้น $X=1$ ก็ต่อเมื่อทุกพจน์เป็น $1$

- $\overline{A}=1$ และ $\overline{B}=1$ คือ $A=0,\ B=0$ (ได้ 1 กรณี)
- $C+D=1$ คือ $CD=01,10,11$ (ได้ 3 กรณี ไม่ใช่ $CD=00$)
- $E\oplus F=1$ คือ $EF=01,10$ (ได้ 2 กรณี เพราะ $E$ ต้องไม่เท่ากับ $F$)

จำนวนกรณีที่ $X=1$ คือ $1\times3\times2=6$ กรณี จากทั้งหมด $2^6=64$ กรณี

| $A$ | $B$ | $C$ | $D$ | $E$ | $F$ | $X$ |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| 0 | 0 | 0 | 1 | 0 | 1 | 1 |
| 0 | 0 | 0 | 1 | 1 | 0 | 1 |
| 0 | 0 | 1 | 0 | 0 | 1 | 1 |
| 0 | 0 | 1 | 0 | 1 | 0 | 1 |
| 0 | 0 | 1 | 1 | 0 | 1 | 1 |
| 0 | 0 | 1 | 1 | 1 | 0 | 1 |

$\mathbf{Ans}\quad X=1$ เมื่อ $A=0,\ B=0$ และ $C,D$ อย่างน้อยหนึ่งตัวเป็น $1$ และ $E\ne F$ (รวม 6 กรณีตามตาราง) กรณีอื่น $X=0$

---

## ข้อ 5 จงออกแบบวงจรคอมบิเนชันที่มีอินพุต 3 ตัวคือ X, Y และ Z และมีเอาต์พุต 1 ตัวคือ F (5 คะแนน)

### ก. เอาต์พุตเป็น 1 เมื่ออินพุตที่เป็นเลขฐานสองมีค่าน้อยกว่า 3 กรณีอื่น ๆ เอาต์พุตเป็น 0 (3 คะแนน)

$\mathbf{Sol}^{n}$

อินพุต $XYZ$ แทนเลขฐานสอง 3 บิต ($X$ เป็น MSB) $F=1$ เมื่อค่าเป็น $0,1,2$ จึงเขียนตารางความจริงได้ดังนี้

| $X$ | $Y$ | $Z$ | $F$ |
|:---:|:---:|:---:|:---:|
| 0 | 0 | 0 | 1 |
| 0 | 0 | 1 | 1 |
| 0 | 1 | 0 | 1 |
| 0 | 1 | 1 | 0 |
| 1 | 0 | 0 | 0 |
| 1 | 0 | 1 | 0 |
| 1 | 1 | 0 | 0 |
| 1 | 1 | 1 | 0 |

ใส่ $1$ ที่ช่อง $0,1,2$ แล้วจับลูป

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="299" height="172" viewBox="0 0 340 196" font-family="Times New Roman, serif" font-size="20" fill="currentColor">
<g stroke="currentColor" stroke-width="1.8" fill="none"><rect x="100" y="56" width="232" height="116"/>
<line x1="158" y1="56" x2="158" y2="172"/>
<line x1="216" y1="56" x2="216" y2="172"/>
<line x1="274" y1="56" x2="274" y2="172"/>
<line x1="100" y1="114" x2="332" y2="114"/>
<line x1="26" y1="12" x2="100" y2="56"/></g>
<text x="80" y="26" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">YZ</text><text x="42" y="50" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">X</text><text x="129" y="48" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">00</text><text x="187" y="48" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">01</text><text x="245" y="48" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">11</text><text x="303" y="48" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">10</text><text x="90" y="91" font-size="18" text-anchor="end" fill="currentColor" stroke="none">0</text><text x="90" y="149" font-size="18" text-anchor="end" fill="currentColor" stroke="none">1</text><text x="110" y="77" font-size="11" text-anchor="start" fill="currentColor" fill-opacity="0.6" stroke="none">0</text><text x="129" y="93" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">1</text><text x="168" y="77" font-size="11" text-anchor="start" fill="currentColor" fill-opacity="0.6" stroke="none">1</text><text x="187" y="93" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">1</text><text x="226" y="77" font-size="11" text-anchor="start" fill="currentColor" fill-opacity="0.6" stroke="none">3</text><text x="245" y="93" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">0</text><text x="284" y="77" font-size="11" text-anchor="start" fill="currentColor" fill-opacity="0.6" stroke="none">2</text><text x="303" y="93" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">1</text><text x="110" y="135" font-size="11" text-anchor="start" fill="currentColor" fill-opacity="0.6" stroke="none">4</text><text x="129" y="151" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">0</text><text x="168" y="135" font-size="11" text-anchor="start" fill="currentColor" fill-opacity="0.6" stroke="none">5</text><text x="187" y="151" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">0</text><text x="226" y="135" font-size="11" text-anchor="start" fill="currentColor" fill-opacity="0.6" stroke="none">7</text><text x="245" y="151" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">0</text><text x="284" y="135" font-size="11" text-anchor="start" fill="currentColor" fill-opacity="0.6" stroke="none">6</text><text x="303" y="151" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">0</text>
<g><rect x="104" y="60" width="108" height="50" rx="14" stroke="#e8743b" stroke-width="3" fill="none"/>
<rect x="106" y="62" width="46" height="46" rx="14" stroke="#3b8be8" stroke-width="3" fill="none"/>
<rect x="280" y="62" width="46" height="46" rx="14" stroke="#3b8be8" stroke-width="3" fill="none"/></g>
</svg>
</div>

- ลูปสีส้ม (ช่อง $0,1$) : $X=0,\ Y=0$ $\Rightarrow \overline{X}\,\overline{Y}$
- ลูปสีน้ำเงิน (ช่อง $0,2$ วนข้ามซ้ายขวา) : $X=0,\ Z=0$ $\Rightarrow \overline{X}\,\overline{Z}$

$$
\begin{aligned}
F &= \overline{X}\,\overline{Y}+\overline{X}\,\overline{Z} \\
&= \overline{X}(\overline{Y}+\overline{Z}) &&\text{ดึง $\overline{X}$ ออก (กระจาย ข้อ 3(b))} \\
&= \overline{X}\cdot\overline{YZ} &&\text{เดอร์มอร์แกน ข้อ 10(b)}
\end{aligned}
$$

วงจรของ $F=\overline{X}\cdot\overline{YZ}$ ใช้ NOT 1 ตัว NAND 1 ตัว และ AND 1 ตัว

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="396" height="207" viewBox="0 0 440 230" font-family="Times New Roman, serif" font-size="20" fill="currentColor">
<g stroke="currentColor" stroke-width="1.8" fill="none"><path d="M90 20L130 40L90 60Z"/>
<circle cx="135" cy="40" r="5"/>
<path d="M110 125H140A25.0 25.0 0 0 1 140 175H110Z"/>
<circle cx="170.0" cy="150.0" r="5"/>
<path d="M260 70H290A25.0 25.0 0 0 1 290 120H260Z"/>
<polyline points="36,40 60,40 90,40"/>
<polyline points="36,137 60,137 110,137.0"/>
<polyline points="36,163 60,163 110,163.0"/>
<polyline points="140,40 200,40 200,82.0 260,82.0"/>
<polyline points="175.0,150.0 232,150.0 232,108.0 260,108.0"/>
<line x1="315.0" y1="95.0" x2="365.0" y2="95.0"/></g>
<text x="12" y="46" font-size="20" font-style="italic" text-anchor="start" fill="currentColor" stroke="none">X</text><text x="12" y="143" font-size="20" font-style="italic" text-anchor="start" fill="currentColor" stroke="none">Y</text><text x="12" y="169" font-size="20" font-style="italic" text-anchor="start" fill="currentColor" stroke="none">Z</text><text x="377.0" y="101.0" font-size="20" font-style="italic" text-anchor="start" fill="currentColor" stroke="none">F</text>
</svg>
</div>

$\mathbf{Ans}\quad F=\mathbf{\overline{X}\,\overline{Y}+\overline{X}\,\overline{Z}}=\overline{X}\,\overline{YZ}$ วงจรดังรูปด้านบน

---

### ข. เอาต์พุตเป็น 1 เมื่ออินพุตที่เป็นเลขฐานสองมีค่าเป็นเลขคี่ กรณีอื่น ๆ เอาต์พุตเป็น 0 (2 คะแนน)

$\mathbf{Sol}^{n}$

เลขฐานสองเป็นเลขคี่เมื่อบิตท้ายสุด $Z=1$ จึงได้ $F=1$ ที่ค่า $1,3,5,7$

| $X$ | $Y$ | $Z$ | $F$ |
|:---:|:---:|:---:|:---:|
| 0 | 0 | 0 | 0 |
| 0 | 0 | 1 | 1 |
| 0 | 1 | 0 | 0 |
| 0 | 1 | 1 | 1 |
| 1 | 0 | 0 | 0 |
| 1 | 0 | 1 | 1 |
| 1 | 1 | 0 | 0 |
| 1 | 1 | 1 | 1 |

เขียนเป็นผลรวมของมินเทอมแล้วลดรูป

$$
\begin{aligned}
F &= \overline{X}\,\overline{Y}Z+\overline{X}YZ+X\overline{Y}Z+XYZ \\
&= \overline{X}Z(\overline{Y}+Y)+XZ(\overline{Y}+Y) &&\text{ดึงตัวร่วมออก (กระจาย ข้อ 3(b))} \\
&= \overline{X}Z\cdot1+XZ\cdot1 &&\text{ข้อ 8(a)} \\
&= \overline{X}Z+XZ &&\text{ข้อ 7(b)} \\
&= Z(\overline{X}+X) &&\text{ดึง $Z$ ออก (กระจาย ข้อ 3(b))} \\
&= Z\cdot1=Z &&\text{ข้อ 8(a) และข้อ 7(b)}
\end{aligned}
$$

ดังนั้นเอาต์พุต $F$ ต่อตรงกับอินพุต $Z$ ได้เลย ไม่ต้องใช้เกต (สายเดียว)

$\mathbf{Ans}\quad F=\mathbf{Z}$ (ต่อสาย $Z$ ไปที่เอาต์พุตโดยตรง)
