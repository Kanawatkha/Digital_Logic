# แนวข้อสอบกลางภาค (Midterm Practice Exam)

---

## ข้อ 1

### ข้อ 1.1  จงแปลงเลข $41.675_{10}$ เป็นเลขฐาน 2 (ทศนิยม 2 ตำแหน่ง)

$\mathbf{Sol}^{n}$

ส่วนจำนวนเต็ม $41$ หารด้วย $2$ ซ้ำ ส่วนทศนิยม $0.675$ คูณด้วย $2$ ซ้ำ 2 ครั้ง

$$
\begin{array}{c|r|l}
2 & 41 & 1\ \ (\text{LSB}) \\
2 & 20 & 0 \\
2 & 10 & 0 \\
2 & 5 & 1 \\
2 & 2 & 0 \\
2 & 1 & 1\ \ (\text{MSB}) \\
 & 0 &
\end{array}
\qquad
\begin{aligned}
0.675\times2 &= 1.35 &&\Rightarrow 1\ \ (\text{MSB}) \\
0.35\times2 &= 0.7 &&\Rightarrow 0
\end{aligned}
$$

เศษอ่านล่างขึ้นบน $\Rightarrow 101001$ และส่วนทศนิยมอ่านบนลงล่าง $\Rightarrow .10$

$\mathbf{Ans}\quad 41.675_{10}\approx\mathbf{(101001.10)_2}$

---

### ข้อ 1.2  จงแปลงเลขฐาน $1100001010.0111011_2$ ให้อยู่ในรูปฐาน 8 และ ฐาน 16

$\mathbf{Sol}^{n}$

ฐาน 8 แบ่งกลุ่มละ 3 บิต ส่วนจำนวนเต็มแบ่งจากขวา ส่วนทศนิยมแบ่งจากซ้ายและเติม 0 ท้าย

$$
\begin{array}{cccc|ccc}
001 & 100 & 001 & 010 & 011 & 101 & 100 \\
\downarrow & \downarrow & \downarrow & \downarrow & \downarrow & \downarrow & \downarrow \\
1 & 4 & 1 & 2 & 3 & 5 & 4
\end{array}
$$

ฐาน 16 แบ่งกลุ่มละ 4 บิต

$$
\begin{array}{ccc|cc}
0011 & 0000 & 1010 & 0111 & 0110 \\
\downarrow & \downarrow & \downarrow & \downarrow & \downarrow \\
3 & 0 & A & 7 & 6
\end{array}
$$

(เส้นตั้งคือตำแหน่งจุดทศนิยม)

$\mathbf{Ans}\quad 1100001010.0111011_2=\mathbf{(1412.354)_8}=\mathbf{(30A.76)_{16}}$

---

### ข้อ 1.3  จงแปลงเลขฐานสองต่อไปนี้เป็นรหัสเกรย์ $10101101_2$

$\mathbf{Sol}^{n}$

ดึงบิต MSB ลงมา แล้วบวก (ตัดตัวทด) บิตซ้ายกับบิตขวาที่อยู่ติดกัน

$$
\begin{array}{ccccccccccccccc}
\text{MSB} &  &  &  &  &  &  &  &  &  &  &  &  &  & \text{LSB} \\
1 & + & 0 & + & 1 & + & 0 & + & 1 & + & 1 & + & 0 & + & 1 \\
\downarrow & & \downarrow & & \downarrow & & \downarrow & & \downarrow & & \downarrow & & \downarrow & & \downarrow \\
1 & & 1 & & 1 & & 1 & & 1 & & 0 & & 1 & & 1
\end{array}
$$

$\mathbf{Ans}\quad 10101101_2=\mathbf{11111011_{Gray}}$

---

### ข้อ 1.4  จงแปลงเลขฐานสิบ $9126$ เป็นรหัส BCD และ ASCII

$\mathbf{Sol}^{n}$

BCD แปลงทีละหลักฐาน 10 เป็น 4 บิต

$$
\begin{array}{cccc}
9 & 1 & 2 & 6 \\
\downarrow & \downarrow & \downarrow & \downarrow \\
1001 & 0001 & 0010 & 0110
\end{array}
$$

ASCII อ่านจากตาราง คอลัมน์ $B_7B_6B_5$ ต่อด้วยแถว $B_4B_3B_2B_1$ (อักขระ 0 ถึง 9 อยู่คอลัมน์ 3 คือ $011$ แถวคือค่าของตัวเลขนั้น)

| ตัวอักษร | คอลัมน์ ($B_7B_6B_5$) | แถว ($B_4B_3B_2B_1$) | ASCII 7 บิต |
|:---:|:---:|:---:|:---:|
| 9 | 011 | 1001 | 0111001 |
| 1 | 011 | 0001 | 0110001 |
| 2 | 011 | 0010 | 0110010 |
| 6 | 011 | 0110 | 0110110 |

$\mathbf{Ans}\quad 9126=\mathbf{(1001\ 0001\ 0010\ 0110)_{BCD}}$ และ $9126=\mathbf{0111001\ 0110001\ 0110010\ 0110110}$ (ASCII)

---

### ข้อ 1.5  จงบวกเลขฐานสอง $1011$ และ $101$ โดยห้ามแปลงเป็นเลขฐาน 10

$\mathbf{Sol}^{n}$

$$
\begin{array}{cccccc}
 & 1 & 1 & 1 & 1 & \\
 &  & 1 & 0 & 1 & 1 \\
+ &  &  & 1 & 0 & 1 \\
\hline
 & 1 & 0 & 0 & 0 & 0
\end{array}
$$

- บิตที่ 1 (ขวาสุด): $1+1=10_2$ เขียน 0 ทด 1
- บิตที่ 2: $1+0+1=10_2$ เขียน 0 ทด 1
- บิตที่ 3: $0+1+1=10_2$ เขียน 0 ทด 1
- บิตที่ 4: $1+0+1=10_2$ เขียน 0 ทด 1
- บิตที่ 5: ลงตัวทด 1

$\mathbf{Ans}\quad 1011_2+101_2=\mathbf{10000_2}$

---

### ข้อ 1.6  หาค่า $101110_2-10111_2$ โดยใช้วิธี 1's complement

$\mathbf{Sol}^{n}$

เติม 0 ให้ตัวลบมี 6 บิต : $10111\to010111$ แล้ว 1's ของ $010111$ คือ $101000$

$$
\begin{array}{cccccccc}
 & & 1 & 0 & 1 & 1 & 1 & 0 \\
+ & & 1 & 0 & 1 & 0 & 0 & 0 \\
\hline
 & 1 & 0 & 1 & 0 & 1 & 1 & 0
\end{array}
$$

มีตัวทด จึงนำตัวทดไปบวกบิตขวาสุด : $010110+1=010111$ (ผลเป็นบวก)

$\mathbf{Ans}\quad 101110_2-10111_2=\mathbf{+10111_2}$

---

## ข้อ 2 จงลดรูปสมการต่อไปนี้ให้สั้นที่สุด

(อ้างทฤษฎีบทตามเลขข้อในตารางสรุปบทที่ 3)

### ข้อ 2.1  $Y=\overline{B}A+\overline{C}A+CB$

$\mathbf{Sol}^{n}$

$$
\begin{aligned}
Y &= \overline{B}A+\overline{C}A+CB \\
&= A\overline{B}+A\overline{C}+BC &&\text{สลับที่ ข้อ 1(b)} \\
&= A(\overline{B}+\overline{C})+BC &&\text{ดึง $A$ ออก (กระจาย ข้อ 3(b))} \\
&= A\cdot\overline{BC}+BC &&\text{เดอร์มอร์แกน ข้อ 10(b)} \\
&= A+BC &&\text{ข้อ 9(a) $X+\overline{X}A=X+A$ โดย $X=BC$}
\end{aligned}
$$

$\mathbf{Ans}\quad Y=A+BC$

---

### ข้อ 2.2  $Y=AB+A\overline{B}+\overline{A}B+\overline{A}\,\overline{B}$

$\mathbf{Sol}^{n}$

$$
\begin{aligned}
Y &= AB+A\overline{B}+\overline{A}B+\overline{A}\,\overline{B} \\
&= A(B+\overline{B})+\overline{A}(B+\overline{B}) &&\text{ดึง $A$ และ $\overline{A}$ ออก (กระจาย ข้อ 3(b))} \\
&= A\cdot1+\overline{A}\cdot1 &&\text{ข้อ 8(a) $B+\overline{B}=1$} \\
&= A+\overline{A} &&\text{ข้อ 7(b) $X\cdot1=X$} \\
&= 1 &&\text{ข้อ 8(a)}
\end{aligned}
$$

$\mathbf{Ans}\quad Y=1$

---

### ข้อ 2.3  จากสมการ $D=\overline{A}BC+A\overline{B}C+ABC+B\overline{C}$

$\mathbf{Sol}^{n}$

$$
\begin{aligned}
D &= \overline{A}BC+A\overline{B}C+ABC+B\overline{C} \\
&= BC(\overline{A}+A)+A\overline{B}C+B\overline{C} &&\text{จัดกลุ่ม $\overline{A}BC+ABC$ ดึง $BC$ ออก} \\
&= BC+B\overline{C}+A\overline{B}C &&\text{ข้อ 8(a) $A+\overline{A}=1$ และข้อ 7(b)} \\
&= B(C+\overline{C})+A\overline{B}C &&\text{ดึง $B$ ออก} \\
&= B+A\overline{B}C &&\text{ข้อ 8(a) และข้อ 7(b)} \\
&= B+AC &&\text{ข้อ 9(a) $X+\overline{X}Y=X+Y$ โดย $X=B$}
\end{aligned}
$$

$\mathbf{Ans}\quad D=B+AC$

---

### ข้อ 2.4  จงแปลงจากฟังก์ชัน $f(A,B,C)=\sum m(0,1,4,6)$ ให้อยู่ในรูปของสมการพีชคณิตบูลีน และลดรูปให้อยู่ในรูปที่ง่ายที่สุด

$\mathbf{Sol}^{n}$

แปลงมินเทอมเป็นสมการ ($A$ เป็น MSB)

$$
\begin{aligned}
m_0=000 &\Rightarrow \overline{A}\,\overline{B}\,\overline{C} \\
m_1=001 &\Rightarrow \overline{A}\,\overline{B}\,C \\
m_4=100 &\Rightarrow A\overline{B}\,\overline{C} \\
m_6=110 &\Rightarrow AB\overline{C}
\end{aligned}
$$

$$
\begin{aligned}
f &= \overline{A}\,\overline{B}\,\overline{C}+\overline{A}\,\overline{B}\,C+A\overline{B}\,\overline{C}+AB\overline{C} \\
&= \overline{A}\,\overline{B}(\overline{C}+C)+A\overline{C}(\overline{B}+B) &&\text{จัดกลุ่ม ดึงตัวร่วมออก (กระจาย ข้อ 3(b))} \\
&= \overline{A}\,\overline{B}+A\overline{C} &&\text{ข้อ 8(a) และข้อ 7(b)}
\end{aligned}
$$

ตรวจด้วย K-map ใส่ $1$ ที่ช่อง $0,1,4,6$ แล้วจับลูป

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="318" height="178" viewBox="0 0 318 178" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.6" fill="none">
<rect x="66" y="46" width="240" height="120"/>
<line x1="126" y1="46" x2="126" y2="166"/>
<line x1="186" y1="46" x2="186" y2="166"/>
<line x1="246" y1="46" x2="246" y2="166"/>
<line x1="66" y1="106" x2="306" y2="106"/>
<line x1="8" y1="8" x2="66" y2="46"/>
</g>
<text x="96.0" y="37" text-anchor="middle">00</text>
<text x="156.0" y="37" text-anchor="middle">01</text>
<text x="216.0" y="37" text-anchor="middle">11</text>
<text x="276.0" y="37" text-anchor="middle">10</text>
<text x="57" y="82.0" text-anchor="end">0</text>
<text x="57" y="142.0" text-anchor="end">1</text>
<text x="60" y="18" text-anchor="end">AB</text><text x="10" y="40">C</text>
<text x="121" y="59" text-anchor="end" font-size="11" fill-opacity="0.65">0</text>
<text x="96.0" y="84.0" text-anchor="middle" font-size="22">1</text>
<text x="181" y="59" text-anchor="end" font-size="11" fill-opacity="0.65">2</text>
<text x="241" y="59" text-anchor="end" font-size="11" fill-opacity="0.65">6</text>
<text x="216.0" y="84.0" text-anchor="middle" font-size="22">1</text>
<text x="301" y="59" text-anchor="end" font-size="11" fill-opacity="0.65">4</text>
<text x="276.0" y="84.0" text-anchor="middle" font-size="22">1</text>
<text x="121" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">1</text>
<text x="96.0" y="144.0" text-anchor="middle" font-size="22">1</text>
<text x="181" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">3</text>
<text x="241" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">7</text>
<text x="301" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">5</text>
<rect x="69.5" y="49.5" width="53" height="113" rx="9" stroke="#e8743b" stroke-width="2.6" fill="none"/>
<text x="74.5" y="157.5" font-size="14" fill="#e8743b" font-weight="bold">1</text>
<rect x="192.1" y="52.1" width="107.8" height="47.8" rx="9" stroke="#3b8be8" stroke-width="2.6" fill="none"/>
<text x="197.1" y="94.9" font-size="14" fill="#3b8be8" font-weight="bold">2</text>
</svg>
</div>

$$
\begin{aligned}
\text{วงที่ 1}\ (0,1) &\Rightarrow \overline{A}\,\overline{B} \\
\text{วงที่ 2}\ (4,6) &\Rightarrow A\overline{C} \\
f &= \overline{A}\,\overline{B}+A\overline{C}
\end{aligned}
$$

$\mathbf{Ans}\quad f=\overline{A}\,\overline{B}\,\overline{C}+\overline{A}\,\overline{B}\,C+A\overline{B}\,\overline{C}+AB\overline{C}=\mathbf{\overline{A}\,\overline{B}+A\overline{C}}$

---

### ข้อ 2.5  จงแปลงจากฟังก์ชัน $f(A,B,C)=\prod M(0,2,5,7)$ ให้อยู่ในรูปของสมการพีชคณิตบูลีน

$\mathbf{Sol}^{n}$

แปลงแมกเทอมเป็นสมการ (ตัวแปรปกติแทน 0 ตัวแปรมีขีดแทน 1)

$$
\begin{aligned}
M_0=000 &\Rightarrow A+B+C \\
M_2=010 &\Rightarrow A+\overline{B}+C \\
M_5=101 &\Rightarrow \overline{A}+B+\overline{C} \\
M_7=111 &\Rightarrow \overline{A}+\overline{B}+\overline{C}
\end{aligned}
$$

$$
f=(A+B+C)(A+\overline{B}+C)(\overline{A}+B+\overline{C})(\overline{A}+\overline{B}+\overline{C})
$$

ลดรูปต่อได้

$$
\begin{aligned}
(A+B+C)(A+\overline{B}+C) &= A+C+B\overline{B} &&\text{กระจาย ข้อ 3(a)} \\
&= A+C &&\text{ข้อ 8(b) $B\overline{B}=0$ และข้อ 7(a)} \\
(\overline{A}+B+\overline{C})(\overline{A}+\overline{B}+\overline{C}) &= \overline{A}+\overline{C}+B\overline{B} &&\text{กระจาย ข้อ 3(a)} \\
&= \overline{A}+\overline{C} &&\text{ข้อ 8(b) และข้อ 7(a)} \\
f &= (A+C)(\overline{A}+\overline{C}) \\
&= A\overline{A}+A\overline{C}+C\overline{A}+C\overline{C} &&\text{กระจาย ข้อ 3(b)} \\
&= A\overline{C}+\overline{A}C &&\text{ข้อ 8(b) และข้อ 7(a)} \\
&= A\oplus C
\end{aligned}
$$

$\mathbf{Ans}\quad f=\mathbf{(A+B+C)(A+\overline{B}+C)(\overline{A}+B+\overline{C})(\overline{A}+\overline{B}+\overline{C})}=A\oplus C$

---

## ข้อ 3  จงวาดลอจิกไดอะแกรมของบูลีนฟังก์ชัน $f=\overline{x}y+\overline{z}+xyz$

$\mathbf{Sol}^{n}$

$$
\begin{aligned}
\text{Step 1 (NOT)} &:\ \overline{x},\ \overline{z} \\
\text{Step 2 (AND)} &:\ \overline{x}y,\ \ xyz \\
\text{Step 3 (OR)} &:\ f=\overline{x}y+\overline{z}+xyz
\end{aligned}
$$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="540" height="380" viewBox="0 0 540 380" font-family="Times New Roman, serif" font-size="18" fill="currentColor"><g stroke="currentColor" stroke-width="1.8" fill="none"><line x1="46" y1="34" x2="46" y2="316"/>
<line x1="76" y1="34" x2="76" y2="330"/>
<line x1="106" y1="34" x2="106" y2="344"/>
<line x1="46" y1="88" x2="170" y2="88"/>
<circle cx="46" cy="88" r="3" fill="currentColor" stroke="none"/>
<line x1="216" y1="88" x2="270" y2="88"/>
<line x1="270" y1="88" x2="270" y2="163"/>
<line x1="270" y1="163" x2="290" y2="163"/>
<line x1="76" y1="177" x2="290" y2="177"/>
<circle cx="76" cy="177" r="3" fill="currentColor" stroke="none"/>
<line x1="106" y1="250" x2="170" y2="250"/>
<circle cx="106" cy="250" r="3" fill="currentColor" stroke="none"/>
<line x1="46" y1="316" x2="290" y2="316"/>
<circle cx="46" cy="316" r="3" fill="currentColor" stroke="none"/>
<line x1="76" y1="330" x2="290" y2="330"/>
<circle cx="76" cy="330" r="3" fill="currentColor" stroke="none"/>
<line x1="106" y1="344" x2="290" y2="344"/>
<circle cx="106" cy="344" r="3" fill="currentColor" stroke="none"/>
<line x1="346" y1="170" x2="390" y2="170"/>
<line x1="390" y1="170" x2="390" y2="236"/>
<line x1="390" y1="236" x2="425" y2="236"/>
<line x1="216" y1="250" x2="427" y2="250"/>
<line x1="346" y1="330" x2="402" y2="330"/>
<line x1="402" y1="330" x2="402" y2="264"/>
<line x1="402" y1="264" x2="425" y2="264"/>
<line x1="484" y1="250" x2="504" y2="250"/>
<circle cx="504" cy="250" r="3.5" fill="currentColor" stroke="none"/>
<polygon points="170,68 170,108 206,88"/>
<circle cx="211" cy="88" r="5"/>
<path d="M290,144 H320 A26,26 0 0 1 320,196 H290 Z"/>
<polygon points="170,230 170,270 206,250"/>
<circle cx="211" cy="250" r="5"/>
<path d="M290,304 H320 A26,26 0 0 1 320,356 H290 Z"/>
<path d="M420,224 C442,224 468,237 484,250 C468,263 442,276 420,276 Q434,250 420,224 Z"/></g><text x="46" y="24" text-anchor="middle">x</text><text x="76" y="24" text-anchor="middle">y</text><text x="106" y="24" text-anchor="middle">z</text><text x="514" y="255">f</text></svg>
</div>

ลดรูปได้ $f=y+\overline{z}$ แต่โจทย์ให้วาดตามสมการที่กำหนด

$\mathbf{Ans}\quad$ วงจรตามรูป ใช้ NOT 2 ตัว AND 2 ตัว (2 อินพุต 1 ตัว และ 3 อินพุต 1 ตัว) และ OR 3 อินพุต 1 ตัว

---

## ข้อ 4  จงเขียนตารางความจริงของลอจิกไดอะแกรม

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="520" height="170" viewBox="0 0 520 170" font-family="Times New Roman, serif" font-size="18" fill="currentColor"><g stroke="currentColor" stroke-width="1.8" fill="none"><line x1="46" y1="34" x2="46" y2="88"/>
<line x1="76" y1="34" x2="76" y2="117"/>
<line x1="46" y1="88" x2="170" y2="88"/>
<circle cx="46" cy="88" r="3" fill="currentColor" stroke="none"/>
<line x1="76" y1="117" x2="296.5" y2="117"/>
<circle cx="76" cy="117" r="3" fill="currentColor" stroke="none"/>
<line x1="216" y1="88" x2="256" y2="88"/>
<line x1="256" y1="88" x2="256" y2="103"/>
<line x1="256" y1="103" x2="296.5" y2="103"/>
<line x1="354" y1="110" x2="380" y2="110"/>
<line x1="426" y1="110" x2="446" y2="110"/>
<circle cx="446" cy="110" r="3.5" fill="currentColor" stroke="none"/>
<polygon points="170,68 170,108 206,88"/>
<circle cx="211" cy="88" r="5"/>
<path d="M290,84 C312,84 338,97 354,110 C338,123 312,136 290,136 Q304,110 290,84 Z"/>
<polygon points="380,90 380,130 416,110"/>
<circle cx="421" cy="110" r="5"/></g><text x="46" y="24" text-anchor="middle">A</text><text x="76" y="24" text-anchor="middle">B</text><text x="456" y="115">Y</text></svg>
</div>

$\mathbf{Sol}^{n}$

$$
\begin{aligned}
Y &= \overline{\overline{A}+B} \\
&= \overline{\overline{A}}\cdot\overline{B} &&\text{เดอร์มอร์แกน ข้อ 10(a)} \\
&= A\overline{B} &&\text{ข้อ 5 $\overline{\overline{A}}=A$}
\end{aligned}
$$

$$
\begin{array}{|c|c|c|c|c|}
\hline
A & B & \overline{A} & \overline{A}+B & Y \\
\hline
0 & 0 & 1 & 1 & 0 \\
\hline
0 & 1 & 1 & 1 & 0 \\
\hline
1 & 0 & 0 & 0 & 1 \\
\hline
1 & 1 & 0 & 1 & 0 \\
\hline
\end{array}
$$

$\mathbf{Ans}\quad Y=A\overline{B}$ ได้ $Y=1$ เมื่อ $A=1,B=0$ แถวเดียว ตามตารางความจริงด้านบน

---

## ข้อ 5  จากวงจรดังรูปเมื่อลดรูปตรงกับเกตใด (จงแสดงวิธีทำ)

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="580" height="250" viewBox="0 0 580 250" font-family="Times New Roman, serif" font-size="18" fill="currentColor"><g stroke="currentColor" stroke-width="1.8" fill="none"><line x1="46" y1="34" x2="46" y2="133"/>
<line x1="76" y1="34" x2="76" y2="207"/>
<line x1="46" y1="73" x2="300" y2="73"/>
<circle cx="46" cy="73" r="3" fill="currentColor" stroke="none"/>
<line x1="46" y1="133" x2="170" y2="133"/>
<circle cx="46" cy="133" r="3" fill="currentColor" stroke="none"/>
<line x1="76" y1="147" x2="170" y2="147"/>
<circle cx="76" cy="147" r="3" fill="currentColor" stroke="none"/>
<line x1="76" y1="207" x2="300" y2="207"/>
<circle cx="76" cy="207" r="3" fill="currentColor" stroke="none"/>
<line x1="236" y1="140" x2="266" y2="140"/>
<circle cx="266" cy="140" r="3" fill="currentColor" stroke="none"/>
<line x1="266" y1="87" x2="266" y2="193"/>
<line x1="266" y1="87" x2="300" y2="87"/>
<line x1="266" y1="193" x2="300" y2="193"/>
<line x1="366" y1="80" x2="396" y2="80"/>
<line x1="396" y1="80" x2="396" y2="133"/>
<line x1="396" y1="133" x2="430" y2="133"/>
<line x1="366" y1="200" x2="408" y2="200"/>
<line x1="408" y1="200" x2="408" y2="147"/>
<line x1="408" y1="147" x2="430" y2="147"/>
<line x1="496" y1="140" x2="516" y2="140"/>
<circle cx="516" cy="140" r="3.5" fill="currentColor" stroke="none"/>
<path d="M170,114 H200 A26,26 0 0 1 200,166 H170 Z"/>
<circle cx="231" cy="140" r="5"/>
<path d="M300,54 H330 A26,26 0 0 1 330,106 H300 Z"/>
<circle cx="361" cy="80" r="5"/>
<path d="M300,174 H330 A26,26 0 0 1 330,226 H300 Z"/>
<circle cx="361" cy="200" r="5"/>
<path d="M430,114 H460 A26,26 0 0 1 460,166 H430 Z"/>
<circle cx="491" cy="140" r="5"/></g><text x="46" y="24" text-anchor="middle">A</text><text x="76" y="24" text-anchor="middle">B</text><text x="526" y="145">C</text></svg>
</div>

$\mathbf{Sol}^{n}$

ตั้งชื่อเอาต์พุตของ NAND ตัวซ้ายเป็น $N_1$ ตัวบนเป็น $N_2$ ตัวล่างเป็น $N_3$ และตัวขวาคือ $C$

$$
\begin{aligned}
N_1 &= \overline{AB} \\
N_2 &= \overline{A\cdot N_1}=\overline{A\cdot\overline{AB}} \\
&= \overline{A(\overline{A}+\overline{B})} &&\text{เดอร์มอร์แกน ข้อ 10(b)} \\
&= \overline{A\overline{B}} &&\text{กระจาย ข้อ 3(b) และ $A\overline{A}=0$ ข้อ 8(b)} \\
&= \overline{A}+B &&\text{เดอร์มอร์แกน ข้อ 10(b) และข้อ 5} \\
N_3 &= \overline{B\cdot\overline{AB}}=\overline{\overline{A}B}=A+\overline{B} &&\text{ทำเช่นเดียวกับ $N_2$} \\
C &= \overline{N_2\cdot N_3}=\overline{(\overline{A}+B)(A+\overline{B})} \\
&= \overline{\overline{A}\,\overline{B}+AB} &&\text{กระจาย ข้อ 3(b) และ $A\overline{A}=B\overline{B}=0$ ข้อ 8(b)} \\
&= A\oplus B &&\text{$\overline{A}\,\overline{B}+AB$ คือ XNOR ดังนั้นกลับค่าเป็น XOR}
\end{aligned}
$$

ตารางความจริงยืนยัน

$$
\begin{array}{|c|c|c|c|c|c|}
\hline
A & B & N_1 & N_2 & N_3 & C \\
\hline
0 & 0 & 1 & 1 & 1 & 0 \\
\hline
0 & 1 & 1 & 1 & 0 & 1 \\
\hline
1 & 0 & 1 & 0 & 1 & 1 \\
\hline
1 & 1 & 0 & 1 & 1 & 0 \\
\hline
\end{array}
$$

$\mathbf{Ans}\quad C=A\oplus B$ ตรงกับ **XOR เกต**

---

## ข้อ 6  จงออกแบบวงจรลอจิกเกตตามตารางความจริงที่กำหนดให้ (ให้ออกแบบในรูป SOP ลดรูปให้เหลือเกตน้อยที่สุด)

$$
\begin{array}{|c|c|c|c|}
\hline
A & B & C & Y \\
\hline
0 & 0 & 0 & 0 \\
\hline
0 & 0 & 1 & 1 \\
\hline
0 & 1 & 0 & 1 \\
\hline
0 & 1 & 1 & 1 \\
\hline
1 & 0 & 0 & 0 \\
\hline
1 & 0 & 1 & 0 \\
\hline
1 & 1 & 0 & 1 \\
\hline
1 & 1 & 1 & 1 \\
\hline
\end{array}
$$

$\mathbf{Sol}^{n}$

แถวที่ $Y=1$ คือ $001,010,011,110,111$ ได้ $Y=\sum m(1,2,3,6,7)$ ใส่ $1$ ลงแผนผัง K-map ที่ช่อง $1,2,3,6,7$ แล้วจับลูป

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="318" height="178" viewBox="0 0 318 178" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.6" fill="none">
<rect x="66" y="46" width="240" height="120"/>
<line x1="126" y1="46" x2="126" y2="166"/>
<line x1="186" y1="46" x2="186" y2="166"/>
<line x1="246" y1="46" x2="246" y2="166"/>
<line x1="66" y1="106" x2="306" y2="106"/>
<line x1="8" y1="8" x2="66" y2="46"/>
</g>
<text x="96.0" y="37" text-anchor="middle">00</text>
<text x="156.0" y="37" text-anchor="middle">01</text>
<text x="216.0" y="37" text-anchor="middle">11</text>
<text x="276.0" y="37" text-anchor="middle">10</text>
<text x="57" y="82.0" text-anchor="end">0</text>
<text x="57" y="142.0" text-anchor="end">1</text>
<text x="60" y="18" text-anchor="end">AB</text><text x="10" y="40">C</text>
<text x="121" y="59" text-anchor="end" font-size="11" fill-opacity="0.65">0</text>
<text x="181" y="59" text-anchor="end" font-size="11" fill-opacity="0.65">2</text>
<text x="156.0" y="84.0" text-anchor="middle" font-size="22">1</text>
<text x="241" y="59" text-anchor="end" font-size="11" fill-opacity="0.65">6</text>
<text x="216.0" y="84.0" text-anchor="middle" font-size="22">1</text>
<text x="301" y="59" text-anchor="end" font-size="11" fill-opacity="0.65">4</text>
<text x="121" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">1</text>
<text x="96.0" y="144.0" text-anchor="middle" font-size="22">1</text>
<text x="181" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">3</text>
<text x="156.0" y="144.0" text-anchor="middle" font-size="22">1</text>
<text x="241" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">7</text>
<text x="216.0" y="144.0" text-anchor="middle" font-size="22">1</text>
<text x="301" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">5</text>
<rect x="129.5" y="49.5" width="113" height="113" rx="9" stroke="#e8743b" stroke-width="2.6" fill="none"/>
<text x="134.5" y="157.5" font-size="14" fill="#e8743b" font-weight="bold">1</text>
<rect x="72.1" y="112.1" width="107.8" height="47.8" rx="9" stroke="#3b8be8" stroke-width="2.6" fill="none"/>
<text x="77.1" y="154.9" font-size="14" fill="#3b8be8" font-weight="bold">2</text>
</svg>
</div>

$$
\begin{aligned}
\text{วงที่ 1}\ (2,3,6,7) &\Rightarrow B \\
\text{วงที่ 2}\ (1,3) &\Rightarrow \overline{A}C \\
Y &= B+\overline{A}C
\end{aligned}
$$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="540" height="230" viewBox="0 0 540 230" font-family="Times New Roman, serif" font-size="18" fill="currentColor"><g stroke="currentColor" stroke-width="1.8" fill="none"><line x1="46" y1="34" x2="46" y2="88"/>
<line x1="76" y1="34" x2="76" y2="113"/>
<line x1="106" y1="34" x2="106" y2="157"/>
<line x1="46" y1="88" x2="170" y2="88"/>
<circle cx="46" cy="88" r="3" fill="currentColor" stroke="none"/>
<line x1="216" y1="88" x2="256" y2="88"/>
<line x1="256" y1="88" x2="256" y2="143"/>
<line x1="256" y1="143" x2="290" y2="143"/>
<line x1="106" y1="157" x2="290" y2="157"/>
<circle cx="106" cy="157" r="3" fill="currentColor" stroke="none"/>
<line x1="76" y1="113" x2="406.5" y2="113"/>
<circle cx="76" cy="113" r="3" fill="currentColor" stroke="none"/>
<line x1="346" y1="150" x2="370" y2="150"/>
<line x1="370" y1="150" x2="370" y2="127"/>
<line x1="370" y1="127" x2="406.5" y2="127"/>
<line x1="464" y1="120" x2="484" y2="120"/>
<circle cx="484" cy="120" r="3.5" fill="currentColor" stroke="none"/>
<polygon points="170,68 170,108 206,88"/>
<circle cx="211" cy="88" r="5"/>
<path d="M290,124 H320 A26,26 0 0 1 320,176 H290 Z"/>
<path d="M400,94 C422,94 448,107 464,120 C448,133 422,146 400,146 Q414,120 400,94 Z"/></g><text x="46" y="24" text-anchor="middle">A</text><text x="76" y="24" text-anchor="middle">B</text><text x="106" y="24" text-anchor="middle">C</text><text x="494" y="125">Y</text></svg>
</div>

$\mathbf{Ans}\quad Y=B+\overline{A}C$ ใช้เกต 3 ตัว (NOT 1 ตัว AND 1 ตัว OR 1 ตัว)

---

## ข้อ 7  จงออกแบบวงจรลอจิกที่สถานะของเอาต์พุตมีค่าเป็น 1 ก็ต่อเมื่ออินพุตอย่างน้อย 2 ตัวจากทั้งหมด 3 ตัวมีสถานะเป็น 1 (ให้ออกแบบในรูป SOP ลดรูปให้เหลือเกตน้อยที่สุด)

$\mathbf{Sol}^{n}$

เขียนตารางความจริง $Y=1$ เมื่อมีบิต 1 ตั้งแต่ 2 ตัวขึ้นไป

$$
\begin{array}{|c|c|c|c|}
\hline
A & B & C & Y \\
\hline
0 & 0 & 0 & 0 \\
\hline
0 & 0 & 1 & 0 \\
\hline
0 & 1 & 0 & 0 \\
\hline
0 & 1 & 1 & 1 \\
\hline
1 & 0 & 0 & 0 \\
\hline
1 & 0 & 1 & 1 \\
\hline
1 & 1 & 0 & 1 \\
\hline
1 & 1 & 1 & 1 \\
\hline
\end{array}
$$

ได้ $Y=\sum m(3,5,6,7)$ ใส่ $1$ ลงแผนผัง K-map ที่ช่อง $3,5,6,7$ แล้วจับลูป

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="318" height="178" viewBox="0 0 318 178" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.6" fill="none">
<rect x="66" y="46" width="240" height="120"/>
<line x1="126" y1="46" x2="126" y2="166"/>
<line x1="186" y1="46" x2="186" y2="166"/>
<line x1="246" y1="46" x2="246" y2="166"/>
<line x1="66" y1="106" x2="306" y2="106"/>
<line x1="8" y1="8" x2="66" y2="46"/>
</g>
<text x="96.0" y="37" text-anchor="middle">00</text>
<text x="156.0" y="37" text-anchor="middle">01</text>
<text x="216.0" y="37" text-anchor="middle">11</text>
<text x="276.0" y="37" text-anchor="middle">10</text>
<text x="57" y="82.0" text-anchor="end">0</text>
<text x="57" y="142.0" text-anchor="end">1</text>
<text x="60" y="18" text-anchor="end">AB</text><text x="10" y="40">C</text>
<text x="121" y="59" text-anchor="end" font-size="11" fill-opacity="0.65">0</text>
<text x="181" y="59" text-anchor="end" font-size="11" fill-opacity="0.65">2</text>
<text x="241" y="59" text-anchor="end" font-size="11" fill-opacity="0.65">6</text>
<text x="216.0" y="84.0" text-anchor="middle" font-size="22">1</text>
<text x="301" y="59" text-anchor="end" font-size="11" fill-opacity="0.65">4</text>
<text x="121" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">1</text>
<text x="181" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">3</text>
<text x="156.0" y="144.0" text-anchor="middle" font-size="22">1</text>
<text x="241" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">7</text>
<text x="216.0" y="144.0" text-anchor="middle" font-size="22">1</text>
<text x="301" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">5</text>
<text x="276.0" y="144.0" text-anchor="middle" font-size="22">1</text>
<rect x="189.5" y="49.5" width="53" height="113" rx="9" stroke="#e8743b" stroke-width="2.6" fill="none"/>
<text x="194.5" y="63.5" font-size="14" fill="#e8743b" font-weight="bold">1</text>
<rect x="192.1" y="112.1" width="107.8" height="47.8" rx="9" stroke="#3b8be8" stroke-width="2.6" fill="none"/>
<text x="287.9" y="154.9" font-size="14" fill="#3b8be8" font-weight="bold">2</text>
<rect x="134.7" y="114.7" width="102.6" height="42.6" rx="9" stroke="#2fae5f" stroke-width="2.6" fill="none"/>
<text x="139.7" y="152.3" font-size="14" fill="#2fae5f" font-weight="bold">3</text>
</svg>
</div>

$$
\begin{aligned}
\text{วงที่ 1}\ (6,7) &\Rightarrow AB \\
\text{วงที่ 2}\ (5,7) &\Rightarrow AC \\
\text{วงที่ 3}\ (3,7) &\Rightarrow BC \\
Y &= AB+AC+BC
\end{aligned}
$$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="480" height="310" viewBox="0 0 480 310" font-family="Times New Roman, serif" font-size="18" fill="currentColor"><g stroke="currentColor" stroke-width="1.8" fill="none"><line x1="46" y1="34" x2="46" y2="173"/>
<line x1="76" y1="34" x2="76" y2="253"/>
<line x1="106" y1="34" x2="106" y2="267"/>
<line x1="46" y1="93" x2="200" y2="93"/>
<circle cx="46" cy="93" r="3" fill="currentColor" stroke="none"/>
<line x1="76" y1="107" x2="200" y2="107"/>
<circle cx="76" cy="107" r="3" fill="currentColor" stroke="none"/>
<line x1="46" y1="173" x2="200" y2="173"/>
<circle cx="46" cy="173" r="3" fill="currentColor" stroke="none"/>
<line x1="106" y1="187" x2="200" y2="187"/>
<circle cx="106" cy="187" r="3" fill="currentColor" stroke="none"/>
<line x1="76" y1="253" x2="200" y2="253"/>
<circle cx="76" cy="253" r="3" fill="currentColor" stroke="none"/>
<line x1="106" y1="267" x2="200" y2="267"/>
<circle cx="106" cy="267" r="3" fill="currentColor" stroke="none"/>
<line x1="256" y1="100" x2="300" y2="100"/>
<line x1="300" y1="100" x2="300" y2="166"/>
<line x1="300" y1="166" x2="345" y2="166"/>
<line x1="256" y1="180" x2="347" y2="180"/>
<line x1="256" y1="260" x2="312" y2="260"/>
<line x1="312" y1="260" x2="312" y2="194"/>
<line x1="312" y1="194" x2="345" y2="194"/>
<line x1="404" y1="180" x2="424" y2="180"/>
<circle cx="424" cy="180" r="3.5" fill="currentColor" stroke="none"/>
<path d="M200,74 H230 A26,26 0 0 1 230,126 H200 Z"/>
<path d="M200,154 H230 A26,26 0 0 1 230,206 H200 Z"/>
<path d="M200,234 H230 A26,26 0 0 1 230,286 H200 Z"/>
<path d="M340,154 C362,154 388,167 404,180 C388,193 362,206 340,206 Q354,180 340,154 Z"/></g><text x="46" y="24" text-anchor="middle">A</text><text x="76" y="24" text-anchor="middle">B</text><text x="106" y="24" text-anchor="middle">C</text><text x="434" y="185">Y</text></svg>
</div>

$\mathbf{Ans}\quad Y=AB+AC+BC$ ใช้ AND 3 ตัว และ OR 3 อินพุต 1 ตัว

---

## ข้อ 8  จากวงจรลอจิกต่อไปนี้ จงออกแบบวงจรดังกล่าวใหม่โดยใช้แนนด์เกตเท่านั้น

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="460" height="200" viewBox="0 0 460 200" font-family="Times New Roman, serif" font-size="18" fill="currentColor"><g stroke="currentColor" stroke-width="1.8" fill="none"><line x1="46" y1="34" x2="46" y2="93"/>
<line x1="76" y1="34" x2="76" y2="107"/>
<line x1="106" y1="34" x2="106" y2="137"/>
<line x1="46" y1="93" x2="170" y2="93"/>
<circle cx="46" cy="93" r="3" fill="currentColor" stroke="none"/>
<line x1="76" y1="107" x2="170" y2="107"/>
<circle cx="76" cy="107" r="3" fill="currentColor" stroke="none"/>
<line x1="106" y1="137" x2="306.5" y2="137"/>
<circle cx="106" cy="137" r="3" fill="currentColor" stroke="none"/>
<line x1="226" y1="100" x2="266" y2="100"/>
<line x1="266" y1="100" x2="266" y2="123"/>
<line x1="266" y1="123" x2="306.5" y2="123"/>
<line x1="364" y1="130" x2="384" y2="130"/>
<circle cx="384" cy="130" r="3.5" fill="currentColor" stroke="none"/>
<path d="M170,74 H200 A26,26 0 0 1 200,126 H170 Z"/>
<path d="M300,104 C322,104 348,117 364,130 C348,143 322,156 300,156 Q314,130 300,104 Z"/></g><text x="46" y="24" text-anchor="middle">A</text><text x="76" y="24" text-anchor="middle">B</text><text x="106" y="24" text-anchor="middle">C</text><text x="394" y="135">Z</text></svg>
</div>

$\mathbf{Sol}^{n}$

จากวงจร AND($A,B$) แล้ว OR กับ $C$ ได้ $Z=AB+C$ ใส่บาร์ 2 ชั้นแล้วใช้เดอร์มอร์แกน

$$
\begin{aligned}
Z &= AB+C \\
&= \overline{\overline{AB+C}} &&\text{ขั้น 1 ใส่บาร์ 2 ชั้น (ข้อ 5)} \\
&= \overline{\overline{AB}\cdot\overline{C}} &&\text{ขั้น 2 เดอร์มอร์แกน ข้อ 10(a)}
\end{aligned}
$$

ขั้น 3 เขียนวงจร $\overline{AB}$ ใช้แนนด์ 1 ตัว และ $\overline{C}$ ได้จากแนนด์ที่ต่ออินพุตเข้าด้วยกัน ($\overline{C\cdot C}=\overline{C}$) แล้วรวมด้วยแนนด์อีก 1 ตัว

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="500" height="250" viewBox="0 0 500 250" font-family="Times New Roman, serif" font-size="18" fill="currentColor"><g stroke="currentColor" stroke-width="1.8" fill="none"><line x1="76" y1="34" x2="76" y2="107"/>
<line x1="106" y1="34" x2="106" y2="207"/>
<line x1="46" y1="34" x2="46" y2="93"/>
<line x1="76" y1="34" x2="76" y2="107"/>
<line x1="46" y1="93" x2="170" y2="93"/>
<circle cx="46" cy="93" r="3" fill="currentColor" stroke="none"/>
<line x1="76" y1="107" x2="170" y2="107"/>
<circle cx="76" cy="107" r="3" fill="currentColor" stroke="none"/>
<line x1="106" y1="193" x2="170" y2="193"/>
<circle cx="106" cy="193" r="3" fill="currentColor" stroke="none"/>
<line x1="106" y1="207" x2="170" y2="207"/>
<circle cx="106" cy="207" r="3" fill="currentColor" stroke="none"/>
<line x1="236" y1="100" x2="266" y2="100"/>
<line x1="266" y1="100" x2="266" y2="143"/>
<line x1="266" y1="143" x2="300" y2="143"/>
<line x1="236" y1="200" x2="278" y2="200"/>
<line x1="278" y1="200" x2="278" y2="157"/>
<line x1="278" y1="157" x2="300" y2="157"/>
<line x1="366" y1="150" x2="386" y2="150"/>
<circle cx="386" cy="150" r="3.5" fill="currentColor" stroke="none"/>
<path d="M170,74 H200 A26,26 0 0 1 200,126 H170 Z"/>
<circle cx="231" cy="100" r="5"/>
<path d="M170,174 H200 A26,26 0 0 1 200,226 H170 Z"/>
<circle cx="231" cy="200" r="5"/>
<path d="M300,124 H330 A26,26 0 0 1 330,176 H300 Z"/>
<circle cx="361" cy="150" r="5"/></g><text x="46" y="24" text-anchor="middle">A</text><text x="76" y="24" text-anchor="middle">B</text><text x="106" y="24" text-anchor="middle">C</text><text x="396" y="155">Z</text></svg>
</div>

$\mathbf{Ans}\quad Z=\overline{\overline{AB}\cdot\overline{C}}$ ใช้แนนด์เกต 3 ตัว


---

## ข้อ 9 จาก Block Diagram และเงื่อนไขที่กำหนดให้ จงออกแบบ Combination circuit เพื่อแจ้งเตือนภัยจากการเกิดคลื่นยักษ์ "สึนามิ"

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="380" height="128" viewBox="0 0 500 150" font-family="Times New Roman, serif" font-size="20" fill="currentColor">
<g stroke="currentColor" stroke-width="1.8" fill="none"><rect x="150" y="30" width="200" height="90" rx="6"/>
<line x1="60" y1="50" x2="150" y2="50"/>
<line x1="350" y1="50" x2="440" y2="50"/>
<line x1="60" y1="75" x2="150" y2="75"/>
<line x1="350" y1="75" x2="440" y2="75"/>
<line x1="60" y1="100" x2="150" y2="100"/>
<line x1="350" y1="100" x2="440" y2="100"/></g>
<text x="48" y="56" font-size="20" font-style="italic" text-anchor="end" fill="currentColor" stroke="none">A</text><text x="48" y="81" font-size="20" font-style="italic" text-anchor="end" fill="currentColor" stroke="none">B</text><text x="48" y="106" font-size="20" font-style="italic" text-anchor="end" fill="currentColor" stroke="none">C</text><text x="452" y="56" font-size="20" font-style="italic" text-anchor="start" fill="currentColor" stroke="none">X</text><text x="452" y="81" font-size="20" font-style="italic" text-anchor="start" fill="currentColor" stroke="none">Y</text><text x="452" y="106" font-size="20" font-style="italic" text-anchor="start" fill="currentColor" stroke="none">Z</text><text x="250" y="68" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">Logic Diagram</text><text x="250" y="92" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">“ภัยจากสึนามิ”</text>
</svg>
</div>

- **a.** จงเขียน Truth Table
- **b.** จงเขียนสมการบูลีน
- **c.** จงเขียน Logic Diagram

**เงื่อนไข Input**

- ถ้าเกิดแผ่นดินไหวรุนแรงตั้งแต่ 8 ริกเตอร์ขึ้นไป ให้ A ทำงาน  A ทำงาน= "A=1"
- ถ้าเกิดแผ่นดินไหวรุนแรงน้อยกว่า 8 ริกเตอร์ลงมา ให้ A ไม่ทำงาน  A ไม่ทำงาน= "A=0"
- ถ้าตำแหน่งที่แผ่นดินไหวมีผลต่อประเทศไทยโดยตรง ให้ B ทำงาน
- ถ้าตำแหน่งที่เกิดที่แผ่นดินไหวมีผลต่อประเทศไทยโดยอ้อม ให้ B ไม่ทำงาน
- ถ้าอยู่ในช่วงน้ำขึ้น ให้ C ทำงาน   ถ้าอยู่ในช่วงน้ำลง ให้ C ไม่ทำงาน

**เงื่อนไขความรุนแรง**

1. ถ้าเกิดแผ่นดินไหวรุนแรงตั้งแต่ 8 ริกเตอร์ขึ้นไป (A=1) และตำแหน่งที่เกิดแผ่นดินไหวมีผลต่อประเทศไทยโดยตรง (B=1) ให้ X แจ้งเตือนภัย (X=1)
2. ถ้าเกิดแผ่นดินไหวรุนแรงตั้งแต่ 8 ริกเตอร์ขึ้นไป (A=1) และตำแหน่งที่เกิดแผ่นดินไหวมีผลต่อประเทศไทยโดยอ้อม (B=0) ให้ Y แจ้งเตือนภัย (Y=1)
3. ถ้าเกิดแผ่นดินไหวรุนแรงน้อยกว่า 8 ริกเตอร์ (A=0) แต่ตำแหน่งที่เกิดแผ่นดินไหวมีผลต่อประเทศไทยโดยตรง (B=1) ให้ Y แจ้งเตือนภัย (Y=1)
4. ถ้าเกิดแผ่นดินไหวรุนแรงน้อยกว่า 8 ริกเตอร์ (A=0) แต่ตำแหน่งที่เกิดแผ่นดินไหวมีผลต่อประเทศไทยโดยอ้อม (B=0) และอยู่ในช่วงน้ำขึ้น (C=1) ให้ Y แจ้งเตือนภัย (Y=1)
5. ถ้าไม่ตรงกับเงื่อนไขข้างบนทั้ง 4 ข้อ ให้ Z แจ้งเตือนภัย (A,B,C = 0) ทำให้ Z= 1

### ข้อ 9.a  จงเขียน Truth Table

$\mathbf{Sol}^{n}$

อินพุต $A$ คือความแรงของแผ่นดินไหว ($1$ เมื่อ $\ge 8$ ริกเตอร์) $B$ คือผลต่อประเทศไทย ($1$ เมื่อโดยตรง) และ $C$ คือระดับน้ำ ($1$ เมื่อน้ำขึ้น) อ่านเงื่อนไขความรุนแรงแล้วหาว่าแต่ละแถวของ $ABC$ ตรงกับข้อไหน

- $A=1,\ B=1$ ตรงข้อ 1 ได้ $X=1$ ไม่ว่า $C$ จะเป็นอะไร (แถว $110$ และ $111$)
- $A=1,\ B=0$ ตรงข้อ 2 ได้ $Y=1$ ไม่ว่า $C$ จะเป็นอะไร (แถว $100$ และ $101$)
- $A=0,\ B=1$ ตรงข้อ 3 ได้ $Y=1$ ไม่ว่า $C$ จะเป็นอะไร (แถว $010$ และ $011$)
- $A=0,\ B=0,\ C=1$ ตรงข้อ 4 ได้ $Y=1$ (แถว $001$)
- แถวที่เหลือคือ $A=0,\ B=0,\ C=0$ ไม่ตรงข้อ 1 ถึง 4 จึงตรงข้อ 5 ได้ $Z=1$ (แถว $000$)

ตรวจ : ทุกแถวมีเอาต์พุตเป็น $1$ เพียงตัวเดียว

| $A$ | $B$ | $C$ | $X$ | $Y$ | $Z$ |
|:---:|:---:|:---:|:---:|:---:|:---:|
| 0 | 0 | 0 | 0 | 0 | 1 |
| 0 | 0 | 1 | 0 | 1 | 0 |
| 0 | 1 | 0 | 0 | 1 | 0 |
| 0 | 1 | 1 | 0 | 1 | 0 |
| 1 | 0 | 0 | 0 | 1 | 0 |
| 1 | 0 | 1 | 0 | 1 | 0 |
| 1 | 1 | 0 | 1 | 0 | 0 |
| 1 | 1 | 1 | 1 | 0 | 0 |

$\mathbf{Ans}\quad X=1$ ที่ $ABC=110,111$ และ $Y=1$ ที่ $ABC=001,010,011,100,101$ และ $Z=1$ ที่ $ABC=000$ (ตารางดังด้านบน)

---

### ข้อ 9.b  จงเขียนสมการบูลีน

$\mathbf{Sol}^{n}$

เขียนเป็นผลรวมของมินเทอม ($A$ เป็น MSB) แล้วลดรูป

$$
\begin{aligned}
X &= \sum m(6,7) = AB\overline{C}+ABC \\
&= AB(\overline{C}+C) &&\text{ดึง $AB$ ออก (กระจาย ข้อ 3(b))} \\
&= AB\cdot1 &&\text{ข้อ 8(a) $C+\overline{C}=1$} \\
&= AB &&\text{ข้อ 7(b) $X\cdot1=X$}
\end{aligned}
$$

$$
Z=\sum m(0)=\overline{A}\,\overline{B}\,\overline{C}
$$

$Y=\sum m(1,2,3,4,5)$ ลดรูปด้วย K-map ใส่ $1$ ที่ช่อง $1,2,3,4,5$ แล้วจับลูป

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="299" height="172" viewBox="0 0 340 196" font-family="Times New Roman, serif" font-size="20" fill="currentColor">
<g stroke="currentColor" stroke-width="1.8" fill="none"><rect x="100" y="56" width="232" height="116"/>
<line x1="158" y1="56" x2="158" y2="172"/>
<line x1="216" y1="56" x2="216" y2="172"/>
<line x1="274" y1="56" x2="274" y2="172"/>
<line x1="100" y1="114" x2="332" y2="114"/>
<line x1="26" y1="12" x2="100" y2="56"/></g>
<text x="80" y="26" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">BC</text><text x="42" y="50" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">A</text><text x="129" y="48" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">00</text><text x="187" y="48" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">01</text><text x="245" y="48" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">11</text><text x="303" y="48" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">10</text><text x="90" y="91" font-size="18" text-anchor="end" fill="currentColor" stroke="none">0</text><text x="90" y="149" font-size="18" text-anchor="end" fill="currentColor" stroke="none">1</text><text x="110" y="77" font-size="11" text-anchor="start" fill="currentColor" fill-opacity="0.6" stroke="none">0</text><text x="129" y="93" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">0</text><text x="168" y="77" font-size="11" text-anchor="start" fill="currentColor" fill-opacity="0.6" stroke="none">1</text><text x="187" y="93" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">1</text><text x="226" y="77" font-size="11" text-anchor="start" fill="currentColor" fill-opacity="0.6" stroke="none">3</text><text x="245" y="93" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">1</text><text x="284" y="77" font-size="11" text-anchor="start" fill="currentColor" fill-opacity="0.6" stroke="none">2</text><text x="303" y="93" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">1</text><text x="110" y="135" font-size="11" text-anchor="start" fill="currentColor" fill-opacity="0.6" stroke="none">4</text><text x="129" y="151" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">1</text><text x="168" y="135" font-size="11" text-anchor="start" fill="currentColor" fill-opacity="0.6" stroke="none">5</text><text x="187" y="151" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">1</text><text x="226" y="135" font-size="11" text-anchor="start" fill="currentColor" fill-opacity="0.6" stroke="none">7</text><text x="245" y="151" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">0</text><text x="284" y="135" font-size="11" text-anchor="start" fill="currentColor" fill-opacity="0.6" stroke="none">6</text><text x="303" y="151" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">0</text>
<g><rect x="162" y="60" width="50" height="108" rx="14" stroke="#e8743b" stroke-width="3" fill="none"/>
<rect x="222" y="62" width="104" height="46" rx="14" stroke="#3b8be8" stroke-width="3" fill="none"/>
<rect x="108" y="122" width="100" height="42" rx="14" stroke="#2fae5f" stroke-width="3" fill="none"/></g>
</svg>
</div>

- ลูปสีส้ม (ช่อง $1,5$) : $B=0,\ C=1$ $\Rightarrow \overline{B}C$
- ลูปสีน้ำเงิน (ช่อง $2,3$) : $A=0,\ B=1$ $\Rightarrow \overline{A}B$
- ลูปสีเขียว (ช่อง $4,5$) : $A=1,\ B=0$ $\Rightarrow A\overline{B}$

**Y แบบ POS** : $Y=0$ ที่ช่อง $0,6,7$ ($Y=\prod M(0,6,7)$) จึงจับลูปของ $0$ แทน แล้วอ่านค่าแบบ POS คือตัวแปรที่เป็น $0$ เขียนไม่กลับค่า และตัวแปรที่เป็น $1$ เขียนกลับค่า แล้วต่อกันด้วย $+$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="299" height="172" viewBox="0 0 340 196" font-family="Times New Roman, serif" font-size="20" fill="currentColor">
<g stroke="currentColor" stroke-width="1.8" fill="none"><rect x="100" y="56" width="232" height="116"/>
<line x1="158" y1="56" x2="158" y2="172"/>
<line x1="216" y1="56" x2="216" y2="172"/>
<line x1="274" y1="56" x2="274" y2="172"/>
<line x1="100" y1="114" x2="332" y2="114"/>
<line x1="26" y1="12" x2="100" y2="56"/></g>
<text x="80" y="26" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">BC</text><text x="42" y="50" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">A</text><text x="129" y="48" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">00</text><text x="187" y="48" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">01</text><text x="245" y="48" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">11</text><text x="303" y="48" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">10</text><text x="90" y="91" font-size="18" text-anchor="end" fill="currentColor" stroke="none">0</text><text x="90" y="149" font-size="18" text-anchor="end" fill="currentColor" stroke="none">1</text><text x="110" y="77" font-size="11" text-anchor="start" fill="currentColor" fill-opacity="0.6" stroke="none">0</text><text x="129" y="93" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">0</text><text x="168" y="77" font-size="11" text-anchor="start" fill="currentColor" fill-opacity="0.6" stroke="none">1</text><text x="187" y="93" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">1</text><text x="226" y="77" font-size="11" text-anchor="start" fill="currentColor" fill-opacity="0.6" stroke="none">3</text><text x="245" y="93" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">1</text><text x="284" y="77" font-size="11" text-anchor="start" fill="currentColor" fill-opacity="0.6" stroke="none">2</text><text x="303" y="93" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">1</text><text x="110" y="135" font-size="11" text-anchor="start" fill="currentColor" fill-opacity="0.6" stroke="none">4</text><text x="129" y="151" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">1</text><text x="168" y="135" font-size="11" text-anchor="start" fill="currentColor" fill-opacity="0.6" stroke="none">5</text><text x="187" y="151" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">1</text><text x="226" y="135" font-size="11" text-anchor="start" fill="currentColor" fill-opacity="0.6" stroke="none">7</text><text x="245" y="151" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">0</text><text x="284" y="135" font-size="11" text-anchor="start" fill="currentColor" fill-opacity="0.6" stroke="none">6</text><text x="303" y="151" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">0</text>
<g><rect x="220" y="118" width="108" height="50" rx="14" stroke="#e8743b" stroke-width="3" fill="none"/>
<rect x="106" y="62" width="46" height="46" rx="14" stroke="#3b8be8" stroke-width="3" fill="none"/></g>
</svg>
</div>

- ลูปสีส้ม (ช่อง $6,7$) : $A=1,\ B=1$ $\Rightarrow (\overline{A}+\overline{B})$
- ลูปสีน้ำเงิน (ช่อง $0$ ช่องเดียว เพราะช่องข้างเคียงเป็น $1$ หมด) : $A=0,\ B=0,\ C=0$ $\Rightarrow (A+B+C)$

$$
Y=(A+B+C)(\overline{A}+\overline{B})
$$

ตรวจว่าเท่ากับแบบ SOP ด้วยการกระจาย (ใช้ทฤษฎีบทในตารางสรุปบทที่ 3)

$$
\begin{aligned}
Y &= (A+B+C)(\overline{A}+\overline{B}) \\
&= A\overline{A}+A\overline{B}+B\overline{A}+B\overline{B}+C\overline{A}+C\overline{B} &&\text{กระจาย ข้อ 3(b)} \\
&= 0+A\overline{B}+\overline{A}B+0+\overline{A}C+\overline{B}C &&\text{ข้อ 8(b) $X\cdot\overline{X}=0$} \\
&= A\overline{B}+\overline{A}B+\overline{A}C+\overline{B}C &&\text{ข้อ 7(a) $0+X=X$}
\end{aligned}
$$

แยกพจน์ $\overline{A}C$ ออกเป็นสองพจน์ แล้วดึงกลับด้วยข้อ 6

$$
\begin{aligned}
\overline{A}C &= \overline{A}C(B+\overline{B}) &&\text{ข้อ 8(a) และข้อ 7(b)} \\
&= \overline{A}BC+\overline{A}\,\overline{B}C &&\text{กระจาย ข้อ 3(b)}
\end{aligned}
$$

$$
\begin{aligned}
Y &= A\overline{B}+\overline{A}B+\overline{A}BC+\overline{A}\,\overline{B}C+\overline{B}C \\
&= A\overline{B}+\overline{A}B+\overline{B}C &&\text{ข้อ 6(a) $X+XY=X$ ทั้งคู่ คือ $\overline{A}B+\overline{A}BC=\overline{A}B$ และ $\overline{A}\,\overline{B}C+\overline{B}C=\overline{B}C$}
\end{aligned}
$$

จึงได้ผลเท่ากับแบบ SOP ทุกประการ

ตรวจ $X$ และ $Z$ ด้วย K-map ได้เช่นกัน

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="299" height="172" viewBox="0 0 340 196" font-family="Times New Roman, serif" font-size="20" fill="currentColor">
<g stroke="currentColor" stroke-width="1.8" fill="none"><rect x="100" y="56" width="232" height="116"/>
<line x1="158" y1="56" x2="158" y2="172"/>
<line x1="216" y1="56" x2="216" y2="172"/>
<line x1="274" y1="56" x2="274" y2="172"/>
<line x1="100" y1="114" x2="332" y2="114"/>
<line x1="26" y1="12" x2="100" y2="56"/></g>
<text x="80" y="26" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">BC</text><text x="42" y="50" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">A</text><text x="129" y="48" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">00</text><text x="187" y="48" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">01</text><text x="245" y="48" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">11</text><text x="303" y="48" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">10</text><text x="90" y="91" font-size="18" text-anchor="end" fill="currentColor" stroke="none">0</text><text x="90" y="149" font-size="18" text-anchor="end" fill="currentColor" stroke="none">1</text><text x="110" y="77" font-size="11" text-anchor="start" fill="currentColor" fill-opacity="0.6" stroke="none">0</text><text x="129" y="93" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">0</text><text x="168" y="77" font-size="11" text-anchor="start" fill="currentColor" fill-opacity="0.6" stroke="none">1</text><text x="187" y="93" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">0</text><text x="226" y="77" font-size="11" text-anchor="start" fill="currentColor" fill-opacity="0.6" stroke="none">3</text><text x="245" y="93" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">0</text><text x="284" y="77" font-size="11" text-anchor="start" fill="currentColor" fill-opacity="0.6" stroke="none">2</text><text x="303" y="93" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">0</text><text x="110" y="135" font-size="11" text-anchor="start" fill="currentColor" fill-opacity="0.6" stroke="none">4</text><text x="129" y="151" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">0</text><text x="168" y="135" font-size="11" text-anchor="start" fill="currentColor" fill-opacity="0.6" stroke="none">5</text><text x="187" y="151" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">0</text><text x="226" y="135" font-size="11" text-anchor="start" fill="currentColor" fill-opacity="0.6" stroke="none">7</text><text x="245" y="151" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">1</text><text x="284" y="135" font-size="11" text-anchor="start" fill="currentColor" fill-opacity="0.6" stroke="none">6</text><text x="303" y="151" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">1</text>
<g><rect x="220" y="118" width="108" height="50" rx="14" stroke="#e8743b" stroke-width="3" fill="none"/></g>
</svg>
</div>

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="299" height="172" viewBox="0 0 340 196" font-family="Times New Roman, serif" font-size="20" fill="currentColor">
<g stroke="currentColor" stroke-width="1.8" fill="none"><rect x="100" y="56" width="232" height="116"/>
<line x1="158" y1="56" x2="158" y2="172"/>
<line x1="216" y1="56" x2="216" y2="172"/>
<line x1="274" y1="56" x2="274" y2="172"/>
<line x1="100" y1="114" x2="332" y2="114"/>
<line x1="26" y1="12" x2="100" y2="56"/></g>
<text x="80" y="26" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">BC</text><text x="42" y="50" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">A</text><text x="129" y="48" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">00</text><text x="187" y="48" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">01</text><text x="245" y="48" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">11</text><text x="303" y="48" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">10</text><text x="90" y="91" font-size="18" text-anchor="end" fill="currentColor" stroke="none">0</text><text x="90" y="149" font-size="18" text-anchor="end" fill="currentColor" stroke="none">1</text><text x="110" y="77" font-size="11" text-anchor="start" fill="currentColor" fill-opacity="0.6" stroke="none">0</text><text x="129" y="93" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">1</text><text x="168" y="77" font-size="11" text-anchor="start" fill="currentColor" fill-opacity="0.6" stroke="none">1</text><text x="187" y="93" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">0</text><text x="226" y="77" font-size="11" text-anchor="start" fill="currentColor" fill-opacity="0.6" stroke="none">3</text><text x="245" y="93" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">0</text><text x="284" y="77" font-size="11" text-anchor="start" fill="currentColor" fill-opacity="0.6" stroke="none">2</text><text x="303" y="93" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">0</text><text x="110" y="135" font-size="11" text-anchor="start" fill="currentColor" fill-opacity="0.6" stroke="none">4</text><text x="129" y="151" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">0</text><text x="168" y="135" font-size="11" text-anchor="start" fill="currentColor" fill-opacity="0.6" stroke="none">5</text><text x="187" y="151" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">0</text><text x="226" y="135" font-size="11" text-anchor="start" fill="currentColor" fill-opacity="0.6" stroke="none">7</text><text x="245" y="151" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">0</text><text x="284" y="135" font-size="11" text-anchor="start" fill="currentColor" fill-opacity="0.6" stroke="none">6</text><text x="303" y="151" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">0</text>
<g><rect x="104" y="60" width="50" height="50" rx="14" stroke="#e8743b" stroke-width="3" fill="none"/></g>
</svg>
</div>

$\mathbf{Ans}\quad X=\mathbf{AB},\quad Y=\mathbf{\overline{A}B+A\overline{B}+\overline{B}C}\ \text{(SOP)}=\mathbf{(A+B+C)(\overline{A}+\overline{B})}\ \text{(POS)},\quad Z=\mathbf{\overline{A}\,\overline{B}\,\overline{C}}$

---

### ข้อ 9.c  จงเขียน Logic Diagram

$\mathbf{Sol}^{n}$

ใช้สมการจากข้อ 9.b : $X=AB$ ใช้ AND 1 ตัว, $Y=\overline{A}B+A\overline{B}+\overline{B}C$ ใช้ AND 3 ตัวแล้ว OR รวม และ $Z=\overline{A}\,\overline{B}\,\overline{C}$ ใช้ AND 3 อินพุต 1 ตัว โดยมีตัวกลับค่า (NOT) ของ $A$, $B$, $C$ ไว้ใช้ร่วมกัน

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="576" height="468" viewBox="0 0 640 520" font-family="Times New Roman, serif" font-size="20" fill="currentColor">
<g stroke="currentColor" stroke-width="1.8" fill="none"><path d="M90 20L130 40L90 60Z"/>
<circle cx="135" cy="40" r="5"/>
<path d="M90 130L130 150L90 170Z"/>
<circle cx="135" cy="150" r="5"/>
<path d="M90 240L130 260L90 280Z"/>
<circle cx="135" cy="260" r="5"/>
<path d="M240 70H270A25.0 25.0 0 0 1 270 120H240Z"/>
<path d="M240 175H270A25.0 25.0 0 0 1 270 225H240Z"/>
<path d="M240 290H270A25.0 25.0 0 0 1 270 340H240Z"/>
<path d="M240 360H270A25.0 25.0 0 0 1 270 410H240Z"/>
<path d="M240 430H270A33.0 33.0 0 0 1 270 496H240Z"/>
<path d="M400 270Q440 270 460 303.0Q440 336 400 336Q414 303.0 400 270Z"/>
<polyline points="36,40 90,40"/>
<polyline points="36,40 50,40 50,82.0 240,82.0"/>
<polyline points="36,40 56,40 56,302.0 240,302.0"/>
<polyline points="36,150 40,150 90,150"/>
<polyline points="36,150 62,150 62,108.0 240,108.0"/>
<polyline points="36,150 68,150 68,213.0 240,213.0"/>
<polyline points="36,260 90,260"/>
<polyline points="36,260 74,260 74,398.0 240,398.0"/>
<polyline points="140,40 160,40 160,187.0 240,187.0"/>
<polyline points="140,40 170,40 170,442.0 240,442.0"/>
<polyline points="140,150 180,150 180,328.0 240,328.0"/>
<polyline points="140,150 190,150 190,372.0 240,372.0"/>
<polyline points="140,150 200,150 200,463.0 240,463.0"/>
<polyline points="140,260 210,260 210,484.0 240,484.0"/>
<polyline points="295.0,200.0 340,200.0 340,282.0 400,282.0"/>
<polyline points="295.0,315.0 350,315.0 350,303.0 400,303.0"/>
<polyline points="295.0,385.0 360,385.0 360,324.0 400,324.0"/>
<line x1="295.0" y1="95.0" x2="345.0" y2="95.0"/>
<line x1="460" y1="303.0" x2="510" y2="303.0"/>
<line x1="303.0" y1="463.0" x2="353.0" y2="463.0"/></g>
<circle cx="50" cy="40" r="3" fill="currentColor" stroke="none"/><circle cx="56" cy="40" r="3" fill="currentColor" stroke="none"/><circle cx="62" cy="150" r="3" fill="currentColor" stroke="none"/><circle cx="68" cy="150" r="3" fill="currentColor" stroke="none"/><circle cx="74" cy="260" r="3" fill="currentColor" stroke="none"/><circle cx="160" cy="40" r="3" fill="currentColor" stroke="none"/><circle cx="170" cy="40" r="3" fill="currentColor" stroke="none"/><circle cx="180" cy="150" r="3" fill="currentColor" stroke="none"/><circle cx="190" cy="150" r="3" fill="currentColor" stroke="none"/><circle cx="200" cy="150" r="3" fill="currentColor" stroke="none"/>
<text x="12" y="46" font-size="20" font-style="italic" text-anchor="start" fill="currentColor" stroke="none">A</text><text x="12" y="156" font-size="20" font-style="italic" text-anchor="start" fill="currentColor" stroke="none">B</text><text x="12" y="266" font-size="20" font-style="italic" text-anchor="start" fill="currentColor" stroke="none">C</text><text x="357.0" y="101.0" font-size="20" font-style="italic" text-anchor="start" fill="currentColor" stroke="none">X</text><text x="522" y="309.0" font-size="20" font-style="italic" text-anchor="start" fill="currentColor" stroke="none">Y</text><text x="365.0" y="469.0" font-size="20" font-style="italic" text-anchor="start" fill="currentColor" stroke="none">Z</text>
</svg>
</div>

$\mathbf{Ans}\quad$ วงจรดังรูปด้านบน
