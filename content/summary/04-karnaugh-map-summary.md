# สรุปบทที่ 4 แผนผังคาร์โนห์ (Karnaugh Map)

---

## 1. รูปแบบแผนผังคาร์โนห์

K-map คือตารางช่วยลดรูปสมการบูลีน ใช้ได้ดีกับ 2 ถึง 4 ตัวแปร จำนวนช่อง $2^{n}$ ช่อง และ**รหัสหัวแถว/หัวคอลัมน์เรียงแบบเกรย์** $00,01,11,10$ (ไม่ใช่ $00,01,10,11$) เพื่อให้ช่องข้างเคียงต่างกันเพียง 1 บิต เลขเล็กในช่องคือเลขมินเทอม ($A$ เป็น MSB)

$$
\begin{aligned}
\text{2 ตัวแปร} &: 4 \text{ ช่อง} \quad (A\text{ คอลัมน์},\ B\text{ แถว}) \\
\text{3 ตัวแปร} &: 8 \text{ ช่อง} \quad (AB\text{ คอลัมน์},\ C\text{ แถว}) \\
\text{4 ตัวแปร} &: 16 \text{ ช่อง} \quad (AB\text{ คอลัมน์},\ CD\text{ แถว})
\end{aligned}
$$

### 1.1 แผนผัง 3 ตัวแปรและ 4 ตัวแปร

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
<text x="121" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">1</text>
<text x="181" y="59" text-anchor="end" font-size="11" fill-opacity="0.65">2</text>
<text x="181" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">3</text>
<text x="301" y="59" text-anchor="end" font-size="11" fill-opacity="0.65">4</text>
<text x="301" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">5</text>
<text x="241" y="59" text-anchor="end" font-size="11" fill-opacity="0.65">6</text>
<text x="241" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">7</text>
</svg>
</div>

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="294" height="274" viewBox="0 0 294 274" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.6" fill="none">
<rect x="66" y="46" width="216" height="216"/>
<line x1="120" y1="46" x2="120" y2="262"/>
<line x1="174" y1="46" x2="174" y2="262"/>
<line x1="228" y1="46" x2="228" y2="262"/>
<line x1="66" y1="100" x2="282" y2="100"/>
<line x1="66" y1="154" x2="282" y2="154"/>
<line x1="66" y1="208" x2="282" y2="208"/>
<line x1="8" y1="8" x2="66" y2="46"/>
</g>
<text x="93.0" y="37" text-anchor="middle">00</text>
<text x="147.0" y="37" text-anchor="middle">01</text>
<text x="201.0" y="37" text-anchor="middle">11</text>
<text x="255.0" y="37" text-anchor="middle">10</text>
<text x="57" y="79.0" text-anchor="end">00</text>
<text x="57" y="133.0" text-anchor="end">01</text>
<text x="57" y="187.0" text-anchor="end">11</text>
<text x="57" y="241.0" text-anchor="end">10</text>
<text x="60" y="18" text-anchor="end">AB</text><text x="10" y="40">CD</text>
<text x="115" y="59" text-anchor="end" font-size="11" fill-opacity="0.65">0</text>
<text x="115" y="113" text-anchor="end" font-size="11" fill-opacity="0.65">1</text>
<text x="115" y="221" text-anchor="end" font-size="11" fill-opacity="0.65">2</text>
<text x="115" y="167" text-anchor="end" font-size="11" fill-opacity="0.65">3</text>
<text x="169" y="59" text-anchor="end" font-size="11" fill-opacity="0.65">4</text>
<text x="169" y="113" text-anchor="end" font-size="11" fill-opacity="0.65">5</text>
<text x="169" y="221" text-anchor="end" font-size="11" fill-opacity="0.65">6</text>
<text x="169" y="167" text-anchor="end" font-size="11" fill-opacity="0.65">7</text>
<text x="277" y="59" text-anchor="end" font-size="11" fill-opacity="0.65">8</text>
<text x="277" y="113" text-anchor="end" font-size="11" fill-opacity="0.65">9</text>
<text x="277" y="221" text-anchor="end" font-size="11" fill-opacity="0.65">10</text>
<text x="277" y="167" text-anchor="end" font-size="11" fill-opacity="0.65">11</text>
<text x="223" y="59" text-anchor="end" font-size="11" fill-opacity="0.65">12</text>
<text x="223" y="113" text-anchor="end" font-size="11" fill-opacity="0.65">13</text>
<text x="223" y="221" text-anchor="end" font-size="11" fill-opacity="0.65">14</text>
<text x="223" y="167" text-anchor="end" font-size="11" fill-opacity="0.65">15</text>
</svg>
</div>


### 1.2 เลขช่องและแผนผัง 2 ตัวแปร

ตัวแปรเรียงเป็นเลขฐานสอง โดย $A$ เป็นบิตมากที่สุด ช่องที่ $i$ คือมินเทอมที่มีค่าฐานสองเท่ากับ $i$ เช่น $ABC$ ที่ $A=1,B=0,C=1$ คือช่อง $5$ หัวตารางเรียงแบบ **รหัสเกรย์** $00,01,11,10$ เพื่อให้ช่องที่ติดกันต่างกันเพียง 1 บิต จึงรวมกันแล้วตัดตัวแปรได้

**สูตร**

$$
\text{เลขช่อง}\ i = \begin{cases} 2A+B & \text{(2 ตัวแปร)} \\ 4A+2B+C & \text{(3 ตัวแปร)} \\ 8A+4B+2C+D & \text{(4 ตัวแปร)} \end{cases}
$$

เลขช่องของแต่ละแผนผัง (หัวคอลัมน์เป็น $A$ หรือ $AB$ หัวแถวเป็น $B$, $C$ หรือ $CD$)

$$
\begin{array}{c|cc}
 & A=0 & A=1 \\
\hline
B=0 & 0 & 2 \\
B=1 & 1 & 3
\end{array}
\qquad
\begin{array}{c|cccc}
 & 00 & 01 & 11 & 10 \\
\hline
C=0 & 0 & 2 & 6 & 4 \\
C=1 & 1 & 3 & 7 & 5
\end{array}
$$

$$
\begin{array}{c|cccc}
CD\backslash AB & 00 & 01 & 11 & 10 \\
\hline
00 & 0 & 4 & 12 & 8 \\
01 & 1 & 5 & 13 & 9 \\
11 & 3 & 7 & 15 & 11 \\
10 & 2 & 6 & 14 & 10
\end{array}
$$

**ตัวอย่าง** จงลดรูป $f(A,B)=\sum m(1,2,3)$ ด้วยแผนผัง 2 ตัวแปร

$\mathbf{Sol}^{n}$

ช่อง $1$ คือ $\overline{A}B$ ช่อง $2$ คือ $A\overline{B}$ ช่อง $3$ คือ $AB$ ใส่ $1$ ลงช่องเหล่านี้

$$
\begin{array}{c|cc}
 & A=0 & A=1 \\
\hline
B=0 & 0 & 1 \\
B=1 & 1 & 1
\end{array}
$$

$$
\begin{aligned}
\text{วงที่ 1}\ (2,3) &\Rightarrow A \\
\text{วงที่ 2}\ (1,3) &\Rightarrow B \\
f &= A+B
\end{aligned}
$$

$\mathbf{Ans}\quad f = A+B$

---

## 2. การใส่ค่าลงแผนผัง

**สูตร**

$$
\begin{array}{|l|c|c|}
\hline
 & \text{SOP (มินเทอม)} & \text{POS (แมกเทอม)} \\
\hline
\text{ตัวแปรไม่มีขีด} & 1 & 0 \\
\hline
\text{ตัวแปรมีขีด} & 0 & 1 \\
\hline
\text{ใส่ค่าลงช่อง} & 1 & 0 \\
\hline
\end{array}
$$

SOP ใส่ $1$ ที่ช่องมินเทอม ส่วน POS ใส่ $0$ ที่ช่องแมกเทอม ช่องที่เหลือเป็นค่าตรงข้าม

### 2.1 ตัวอย่าง

**ตัวอย่างที่ 1** จงใส่ค่า $Z=(\overline{A}+\overline{B}+C)(A+\overline{B}+C)(A+\overline{B}+\overline{C})$ ลงแผนผัง

$\mathbf{Sol}^{n}$

$$
\begin{aligned}
(\overline{A}+\overline{B}+C) &\Rightarrow \text{ใส่ } 0 \text{ ลงช่อง } 6 \\
(A+\overline{B}+C) &\Rightarrow \text{ใส่ } 0 \text{ ลงช่อง } 2 \\
(A+\overline{B}+\overline{C}) &\Rightarrow \text{ใส่ } 0 \text{ ลงช่อง } 3
\end{aligned}
$$

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
<text x="121" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">1</text>
<text x="96.0" y="144.0" text-anchor="middle" font-size="22">1</text>
<text x="181" y="59" text-anchor="end" font-size="11" fill-opacity="0.65">2</text>
<text x="156.0" y="84.0" text-anchor="middle" font-size="22">0</text>
<text x="181" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">3</text>
<text x="156.0" y="144.0" text-anchor="middle" font-size="22">0</text>
<text x="301" y="59" text-anchor="end" font-size="11" fill-opacity="0.65">4</text>
<text x="276.0" y="84.0" text-anchor="middle" font-size="22">1</text>
<text x="301" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">5</text>
<text x="276.0" y="144.0" text-anchor="middle" font-size="22">1</text>
<text x="241" y="59" text-anchor="end" font-size="11" fill-opacity="0.65">6</text>
<text x="216.0" y="84.0" text-anchor="middle" font-size="22">0</text>
<text x="241" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">7</text>
<text x="216.0" y="144.0" text-anchor="middle" font-size="22">1</text>
</svg>
</div>

### 2.2 สัญกรณ์ $\sum m$ และ $\prod M$

$\sum m(\dots)$ คือรายการเลขช่องที่เอาต์พุตเป็น $1$ (SOP) ส่วน $\prod M(\dots)$ คือรายการเลขช่องที่เอาต์พุตเป็น $0$ (POS) ฟังก์ชันเดียวกันเขียนได้ทั้งสองแบบ โดยเลขช่องของแบบหนึ่งคือเลขที่เหลือของอีกแบบ

**สูตร**

$$
\prod M(\text{เลขที่เหลือ}) = \sum m(\text{เลขที่ให้}),\qquad \text{ช่องทั้งหมด } 0,1,\dots,2^{n}-1
$$

**ตัวอย่าง** จงเปลี่ยน $f(A,B,C)=\sum m(0,1,4,5,7)$ เป็นรูป $\prod M$ แล้วลดรูปแบบ POS

$\mathbf{Sol}^{n}$

$$
\begin{aligned}
\text{ช่องทั้งหมด} &= 0,1,2,3,4,5,6,7 \\
\text{ช่องที่เป็น } 0 &= 2,3,6 \Rightarrow f=\prod M(2,3,6)
\end{aligned}
$$

ใส่ $0$ ที่ช่อง $2,3,6$ แล้วจับลูปของ $0$

$$
\begin{aligned}
\text{วงที่ 1}\ (2,3) &\Rightarrow (A+\overline{B}) \\
\text{วงที่ 2}\ (2,6) &\Rightarrow (\overline{B}+C) \\
f &= (A+\overline{B})(\overline{B}+C)
\end{aligned}
$$

ได้ผลเท่ากับการลดรูปแบบ SOP ในตัวอย่างที่ 1 ของหัวข้อ 4.1 คือ $f = AC+\overline{B}$

$\mathbf{Ans}\quad f=\prod M(2,3,6) = (A+\overline{B})(\overline{B}+C)$

---

## 3. การจับลูปและการอ่านผล

### 3.1 กฎการจับลูป

1. จับเฉพาะช่อง $1$ (SOP) หรือเฉพาะช่อง $0$ (POS)
2. หนึ่งลูปมี $2^{n}$ ช่อง ($1,2,4,8,16$) เป็นรูปสี่เหลี่ยม
3. ลูปต้องใหญ่ที่สุดเท่าที่ทำได้ และใช้จำนวนลูปน้อยที่สุด
4. ช่องหนึ่งใช้ซ้ำได้หลายลูป
5. **ขอบซ้ายต่อขอบขวา ขอบบนต่อขอบล่าง และ 4 มุมติดกันหมด**
6. ทุกช่อง $1$ (หรือ $0$) ต้องถูกคลุม

### 3.2 การอ่านค่าลูป

ตัวแปรที่เปลี่ยนค่าในลูปให้ตัดทิ้ง ตัวแปรที่คงที่ให้เก็บไว้

**สูตร**

$$
\begin{array}{|l|c|c|}
\hline
\text{ตัวแปรที่คงที่เป็น} & \text{SOP (ลูปของ 1)} & \text{POS (ลูปของ 0)} \\
\hline
1 & \text{เขียนปกติ } A & \text{เขียนมีขีด } \overline{A} \\
\hline
0 & \text{เขียนมีขีด } \overline{A} & \text{เขียนปกติ } A \\
\hline
\text{รวมผลลัพธ์} & \text{ตัวแปรในลูปคูณกัน แล้วนำลูปมา OR} & \text{ตัวแปรในลูปบวกกัน แล้วนำลูปมา AND} \\
\hline
\end{array}
$$

---

## 4. ขั้นตอนลดรูปด้วย K-map

1. เลือกขนาดแผนผังให้ตรงกับจำนวนตัวแปร
2. ใส่ $1$ (SOP) หรือ $0$ (POS) ลงช่องที่ตรงกับแต่ละพจน์
3. จับลูปตามกฎ เริ่มจากลูปใหญ่ที่สุดและช่องที่จับได้ทางเดียวก่อน
4. อ่านค่าแต่ละลูปตามตารางข้างต้น
5. นำผลของทุกลูปมา OR (SOP) หรือ AND (POS)

### 4.1 ตัวอย่าง

**ตัวอย่างที่ 1** จงลดรูป $f(A,B,C)=\sum m(0,1,4,5,7)$ (ลูปข้ามขอบ)

$\mathbf{Sol}^{n}$

ใส่ $1$ ลงแผนผังที่ช่อง $0,1,4,5,7$

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
<text x="121" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">1</text>
<text x="96.0" y="144.0" text-anchor="middle" font-size="22">1</text>
<text x="181" y="59" text-anchor="end" font-size="11" fill-opacity="0.65">2</text>
<text x="181" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">3</text>
<text x="301" y="59" text-anchor="end" font-size="11" fill-opacity="0.65">4</text>
<text x="276.0" y="84.0" text-anchor="middle" font-size="22">1</text>
<text x="301" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">5</text>
<text x="276.0" y="144.0" text-anchor="middle" font-size="22">1</text>
<text x="241" y="59" text-anchor="end" font-size="11" fill-opacity="0.65">6</text>
<text x="241" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">7</text>
<text x="216.0" y="144.0" text-anchor="middle" font-size="22">1</text>
<path d="M198.5,109.5 L293.5,109.5 M302.5,118.5 L302.5,153.5 M293.5,162.5 L198.5,162.5 M189.5,153.5 L189.5,118.5 M189.5,118.5 A9,9 0 0 1 198.5,109.5 M293.5,109.5 A9,9 0 0 1 302.5,118.5 M302.5,153.5 A9,9 0 0 1 293.5,162.5 M198.5,162.5 A9,9 0 0 1 189.5,153.5" stroke="#e8743b" stroke-width="2.6" fill="none"/>
<text x="194.5" y="157.5" font-size="14" fill="#e8743b" font-weight="bold">1</text>
<path d="M261.1,52.1 L299.9,52.1 M299.9,159.9 L261.1,159.9 M252.1,150.9 L252.1,61.1 M252.1,61.1 A9,9 0 0 1 261.1,52.1 M261.1,159.9 A9,9 0 0 1 252.1,150.9" stroke="#3b8be8" stroke-width="2.6" fill="none"/>
<text x="257.1" y="154.9" font-size="14" fill="#3b8be8" font-weight="bold">2</text>
<path d="M72.1,52.1 L110.9,52.1 M119.9,61.1 L119.9,150.9 M110.9,159.9 L72.1,159.9 M110.9,52.1 A9,9 0 0 1 119.9,61.1 M119.9,150.9 A9,9 0 0 1 110.9,159.9" stroke="#3b8be8" stroke-width="2.6" fill="none"/>
</svg>
</div>

$$
\begin{aligned}
\text{วงที่ 1}\ (5,7) &\Rightarrow AC \\
\text{วงที่ 2}\ (0,1,4,5) &\Rightarrow \overline{B} \\
f &= AC+\overline{B}
\end{aligned}
$$

$\mathbf{Ans}\quad f = AC+\overline{B}$

**ตัวอย่างที่ 2** จงลดรูป $f(A,B,C,D)=\sum m(0,2,5,7,8,10,13,15)$ (ลูป 4 มุม)

$\mathbf{Sol}^{n}$

ใส่ $1$ ลงแผนผังที่ช่อง $0,2,5,7,8,10,13,15$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="294" height="274" viewBox="0 0 294 274" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.6" fill="none">
<rect x="66" y="46" width="216" height="216"/>
<line x1="120" y1="46" x2="120" y2="262"/>
<line x1="174" y1="46" x2="174" y2="262"/>
<line x1="228" y1="46" x2="228" y2="262"/>
<line x1="66" y1="100" x2="282" y2="100"/>
<line x1="66" y1="154" x2="282" y2="154"/>
<line x1="66" y1="208" x2="282" y2="208"/>
<line x1="8" y1="8" x2="66" y2="46"/>
</g>
<text x="93.0" y="37" text-anchor="middle">00</text>
<text x="147.0" y="37" text-anchor="middle">01</text>
<text x="201.0" y="37" text-anchor="middle">11</text>
<text x="255.0" y="37" text-anchor="middle">10</text>
<text x="57" y="79.0" text-anchor="end">00</text>
<text x="57" y="133.0" text-anchor="end">01</text>
<text x="57" y="187.0" text-anchor="end">11</text>
<text x="57" y="241.0" text-anchor="end">10</text>
<text x="60" y="18" text-anchor="end">AB</text><text x="10" y="40">CD</text>
<text x="115" y="59" text-anchor="end" font-size="11" fill-opacity="0.65">0</text>
<text x="93.0" y="81.0" text-anchor="middle" font-size="22">1</text>
<text x="115" y="113" text-anchor="end" font-size="11" fill-opacity="0.65">1</text>
<text x="115" y="221" text-anchor="end" font-size="11" fill-opacity="0.65">2</text>
<text x="93.0" y="243.0" text-anchor="middle" font-size="22">1</text>
<text x="115" y="167" text-anchor="end" font-size="11" fill-opacity="0.65">3</text>
<text x="169" y="59" text-anchor="end" font-size="11" fill-opacity="0.65">4</text>
<text x="169" y="113" text-anchor="end" font-size="11" fill-opacity="0.65">5</text>
<text x="147.0" y="135.0" text-anchor="middle" font-size="22">1</text>
<text x="169" y="221" text-anchor="end" font-size="11" fill-opacity="0.65">6</text>
<text x="169" y="167" text-anchor="end" font-size="11" fill-opacity="0.65">7</text>
<text x="147.0" y="189.0" text-anchor="middle" font-size="22">1</text>
<text x="277" y="59" text-anchor="end" font-size="11" fill-opacity="0.65">8</text>
<text x="255.0" y="81.0" text-anchor="middle" font-size="22">1</text>
<text x="277" y="113" text-anchor="end" font-size="11" fill-opacity="0.65">9</text>
<text x="277" y="221" text-anchor="end" font-size="11" fill-opacity="0.65">10</text>
<text x="255.0" y="243.0" text-anchor="middle" font-size="22">1</text>
<text x="277" y="167" text-anchor="end" font-size="11" fill-opacity="0.65">11</text>
<text x="223" y="59" text-anchor="end" font-size="11" fill-opacity="0.65">12</text>
<text x="223" y="113" text-anchor="end" font-size="11" fill-opacity="0.65">13</text>
<text x="201.0" y="135.0" text-anchor="middle" font-size="22">1</text>
<text x="223" y="221" text-anchor="end" font-size="11" fill-opacity="0.65">14</text>
<text x="223" y="167" text-anchor="end" font-size="11" fill-opacity="0.65">15</text>
<text x="201.0" y="189.0" text-anchor="middle" font-size="22">1</text>
<path d="M240.5,211.5 L278.5,211.5 M231.5,258.5 L231.5,220.5 M231.5,220.5 A9,9 0 0 1 240.5,211.5" stroke="#e8743b" stroke-width="2.6" fill="none"/>
<text x="236.5" y="253.5" font-size="14" fill="#e8743b" font-weight="bold">1</text>
<path d="M69.5,211.5 L107.5,211.5 M116.5,220.5 L116.5,258.5 M107.5,211.5 A9,9 0 0 1 116.5,220.5" stroke="#e8743b" stroke-width="2.6" fill="none"/>
<path d="M278.5,96.5 L240.5,96.5 M231.5,87.5 L231.5,49.5 M240.5,96.5 A9,9 0 0 1 231.5,87.5" stroke="#e8743b" stroke-width="2.6" fill="none"/>
<path d="M116.5,49.5 L116.5,87.5 M107.5,96.5 L69.5,96.5 M116.5,87.5 A9,9 0 0 1 107.5,96.5" stroke="#e8743b" stroke-width="2.6" fill="none"/>
<path d="M135.1,106.1 L212.9,106.1 M221.9,115.1 L221.9,192.9 M212.9,201.9 L135.1,201.9 M126.1,192.9 L126.1,115.1 M126.1,115.1 A9,9 0 0 1 135.1,106.1 M212.9,106.1 A9,9 0 0 1 221.9,115.1 M221.9,192.9 A9,9 0 0 1 212.9,201.9 M135.1,201.9 A9,9 0 0 1 126.1,192.9" stroke="#3b8be8" stroke-width="2.6" fill="none"/>
<text x="131.1" y="196.9" font-size="14" fill="#3b8be8" font-weight="bold">2</text>
</svg>
</div>

$$
\begin{aligned}
\text{วงที่ 1}\ (0,2,8,10) &\Rightarrow \overline{B}\,\overline{D} \\
\text{วงที่ 2}\ (5,7,13,15) &\Rightarrow BD \\
f &= \overline{B}\,\overline{D}+BD
\end{aligned}
$$

$\mathbf{Ans}\quad f = \overline{B}\,\overline{D}+BD$

**ตัวอย่างที่ 3** จงลดรูป $f(A,B,C,D)=\prod M(1,3,5,7,9,13)$ (แบบ POS)

$\mathbf{Sol}^{n}$

ใส่ $0$ ลงแผนผังที่ช่อง $1,3,5,7,9,13$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="294" height="274" viewBox="0 0 294 274" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.6" fill="none">
<rect x="66" y="46" width="216" height="216"/>
<line x1="120" y1="46" x2="120" y2="262"/>
<line x1="174" y1="46" x2="174" y2="262"/>
<line x1="228" y1="46" x2="228" y2="262"/>
<line x1="66" y1="100" x2="282" y2="100"/>
<line x1="66" y1="154" x2="282" y2="154"/>
<line x1="66" y1="208" x2="282" y2="208"/>
<line x1="8" y1="8" x2="66" y2="46"/>
</g>
<text x="93.0" y="37" text-anchor="middle">00</text>
<text x="147.0" y="37" text-anchor="middle">01</text>
<text x="201.0" y="37" text-anchor="middle">11</text>
<text x="255.0" y="37" text-anchor="middle">10</text>
<text x="57" y="79.0" text-anchor="end">00</text>
<text x="57" y="133.0" text-anchor="end">01</text>
<text x="57" y="187.0" text-anchor="end">11</text>
<text x="57" y="241.0" text-anchor="end">10</text>
<text x="60" y="18" text-anchor="end">AB</text><text x="10" y="40">CD</text>
<text x="115" y="59" text-anchor="end" font-size="11" fill-opacity="0.65">0</text>
<text x="115" y="113" text-anchor="end" font-size="11" fill-opacity="0.65">1</text>
<text x="93.0" y="135.0" text-anchor="middle" font-size="22">0</text>
<text x="115" y="221" text-anchor="end" font-size="11" fill-opacity="0.65">2</text>
<text x="115" y="167" text-anchor="end" font-size="11" fill-opacity="0.65">3</text>
<text x="93.0" y="189.0" text-anchor="middle" font-size="22">0</text>
<text x="169" y="59" text-anchor="end" font-size="11" fill-opacity="0.65">4</text>
<text x="169" y="113" text-anchor="end" font-size="11" fill-opacity="0.65">5</text>
<text x="147.0" y="135.0" text-anchor="middle" font-size="22">0</text>
<text x="169" y="221" text-anchor="end" font-size="11" fill-opacity="0.65">6</text>
<text x="169" y="167" text-anchor="end" font-size="11" fill-opacity="0.65">7</text>
<text x="147.0" y="189.0" text-anchor="middle" font-size="22">0</text>
<text x="277" y="59" text-anchor="end" font-size="11" fill-opacity="0.65">8</text>
<text x="277" y="113" text-anchor="end" font-size="11" fill-opacity="0.65">9</text>
<text x="255.0" y="135.0" text-anchor="middle" font-size="22">0</text>
<text x="277" y="221" text-anchor="end" font-size="11" fill-opacity="0.65">10</text>
<text x="277" y="167" text-anchor="end" font-size="11" fill-opacity="0.65">11</text>
<text x="223" y="59" text-anchor="end" font-size="11" fill-opacity="0.65">12</text>
<text x="223" y="113" text-anchor="end" font-size="11" fill-opacity="0.65">13</text>
<text x="201.0" y="135.0" text-anchor="middle" font-size="22">0</text>
<text x="223" y="221" text-anchor="end" font-size="11" fill-opacity="0.65">14</text>
<text x="223" y="167" text-anchor="end" font-size="11" fill-opacity="0.65">15</text>
<path d="M78.5,103.5 L161.5,103.5 M170.5,112.5 L170.5,195.5 M161.5,204.5 L78.5,204.5 M69.5,195.5 L69.5,112.5 M69.5,112.5 A9,9 0 0 1 78.5,103.5 M161.5,103.5 A9,9 0 0 1 170.5,112.5 M170.5,195.5 A9,9 0 0 1 161.5,204.5 M78.5,204.5 A9,9 0 0 1 69.5,195.5" stroke="#e8743b" stroke-width="2.6" fill="none"/>
<text x="74.5" y="199.5" font-size="14" fill="#e8743b" font-weight="bold">1</text>
<path d="M81.1,106.1 L266.9,106.1 M275.9,115.1 L275.9,138.9 M266.9,147.9 L81.1,147.9 M72.1,138.9 L72.1,115.1 M72.1,115.1 A9,9 0 0 1 81.1,106.1 M266.9,106.1 A9,9 0 0 1 275.9,115.1 M275.9,138.9 A9,9 0 0 1 266.9,147.9 M81.1,147.9 A9,9 0 0 1 72.1,138.9" stroke="#3b8be8" stroke-width="2.6" fill="none"/>
<text x="77.1" y="142.9" font-size="14" fill="#3b8be8" font-weight="bold">2</text>
</svg>
</div>

$$
\begin{aligned}
\text{วงที่ 1}\ (1,3,5,7) &\Rightarrow (A+\overline{D}) \\
\text{วงที่ 2}\ (1,5,9,13) &\Rightarrow (C+\overline{D}) \\
f &= (A+\overline{D})(C+\overline{D})
\end{aligned}
$$

$\mathbf{Ans}\quad f = (A+\overline{D})(C+\overline{D})$

**ตัวอย่างที่ 4** จงลดรูป $f=\overline{A}\,\overline{B}+ABC+A\overline{B}D$ (นิพจน์ไม่อยู่ในรูปมินเทอม ต้องใส่ลงตารางก่อน)

$\mathbf{Sol}^{n}$

$$
\begin{aligned}
\overline{A}\,\overline{B} &\Rightarrow \text{ใส่ } 1 \text{ ลงช่อง } 0,1,2,3 \\
ABC &\Rightarrow \text{ใส่ } 1 \text{ ลงช่อง } 14,15 \\
A\overline{B}D &\Rightarrow \text{ใส่ } 1 \text{ ลงช่อง } 9,11
\end{aligned}
$$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="294" height="274" viewBox="0 0 294 274" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.6" fill="none">
<rect x="66" y="46" width="216" height="216"/>
<line x1="120" y1="46" x2="120" y2="262"/>
<line x1="174" y1="46" x2="174" y2="262"/>
<line x1="228" y1="46" x2="228" y2="262"/>
<line x1="66" y1="100" x2="282" y2="100"/>
<line x1="66" y1="154" x2="282" y2="154"/>
<line x1="66" y1="208" x2="282" y2="208"/>
<line x1="8" y1="8" x2="66" y2="46"/>
</g>
<text x="93.0" y="37" text-anchor="middle">00</text>
<text x="147.0" y="37" text-anchor="middle">01</text>
<text x="201.0" y="37" text-anchor="middle">11</text>
<text x="255.0" y="37" text-anchor="middle">10</text>
<text x="57" y="79.0" text-anchor="end">00</text>
<text x="57" y="133.0" text-anchor="end">01</text>
<text x="57" y="187.0" text-anchor="end">11</text>
<text x="57" y="241.0" text-anchor="end">10</text>
<text x="60" y="18" text-anchor="end">AB</text><text x="10" y="40">CD</text>
<text x="115" y="59" text-anchor="end" font-size="11" fill-opacity="0.65">0</text>
<text x="93.0" y="81.0" text-anchor="middle" font-size="22">1</text>
<text x="115" y="113" text-anchor="end" font-size="11" fill-opacity="0.65">1</text>
<text x="93.0" y="135.0" text-anchor="middle" font-size="22">1</text>
<text x="115" y="221" text-anchor="end" font-size="11" fill-opacity="0.65">2</text>
<text x="93.0" y="243.0" text-anchor="middle" font-size="22">1</text>
<text x="115" y="167" text-anchor="end" font-size="11" fill-opacity="0.65">3</text>
<text x="93.0" y="189.0" text-anchor="middle" font-size="22">1</text>
<text x="169" y="59" text-anchor="end" font-size="11" fill-opacity="0.65">4</text>
<text x="169" y="113" text-anchor="end" font-size="11" fill-opacity="0.65">5</text>
<text x="169" y="221" text-anchor="end" font-size="11" fill-opacity="0.65">6</text>
<text x="169" y="167" text-anchor="end" font-size="11" fill-opacity="0.65">7</text>
<text x="277" y="59" text-anchor="end" font-size="11" fill-opacity="0.65">8</text>
<text x="277" y="113" text-anchor="end" font-size="11" fill-opacity="0.65">9</text>
<text x="255.0" y="135.0" text-anchor="middle" font-size="22">1</text>
<text x="277" y="221" text-anchor="end" font-size="11" fill-opacity="0.65">10</text>
<text x="277" y="167" text-anchor="end" font-size="11" fill-opacity="0.65">11</text>
<text x="255.0" y="189.0" text-anchor="middle" font-size="22">1</text>
<text x="223" y="59" text-anchor="end" font-size="11" fill-opacity="0.65">12</text>
<text x="223" y="113" text-anchor="end" font-size="11" fill-opacity="0.65">13</text>
<text x="223" y="221" text-anchor="end" font-size="11" fill-opacity="0.65">14</text>
<text x="201.0" y="243.0" text-anchor="middle" font-size="22">1</text>
<text x="223" y="167" text-anchor="end" font-size="11" fill-opacity="0.65">15</text>
<text x="201.0" y="189.0" text-anchor="middle" font-size="22">1</text>
<path d="M186.5,157.5 L215.5,157.5 M224.5,166.5 L224.5,249.5 M215.5,258.5 L186.5,258.5 M177.5,249.5 L177.5,166.5 M177.5,166.5 A9,9 0 0 1 186.5,157.5 M215.5,157.5 A9,9 0 0 1 224.5,166.5 M224.5,249.5 A9,9 0 0 1 215.5,258.5 M186.5,258.5 A9,9 0 0 1 177.5,249.5" stroke="#e8743b" stroke-width="2.6" fill="none"/>
<text x="182.5" y="253.5" font-size="14" fill="#e8743b" font-weight="bold">1</text>
<path d="M81.1,52.1 L104.9,52.1 M113.9,61.1 L113.9,246.9 M104.9,255.9 L81.1,255.9 M72.1,246.9 L72.1,61.1 M72.1,61.1 A9,9 0 0 1 81.1,52.1 M104.9,52.1 A9,9 0 0 1 113.9,61.1 M113.9,246.9 A9,9 0 0 1 104.9,255.9 M81.1,255.9 A9,9 0 0 1 72.1,246.9" stroke="#3b8be8" stroke-width="2.6" fill="none"/>
<text x="77.1" y="250.9" font-size="14" fill="#3b8be8" font-weight="bold">2</text>
<path d="M245.7,108.7 L273.3,108.7 M273.3,199.3 L245.7,199.3 M236.7,190.3 L236.7,117.7 M236.7,117.7 A9,9 0 0 1 245.7,108.7 M245.7,199.3 A9,9 0 0 1 236.7,190.3" stroke="#2fae5f" stroke-width="2.6" fill="none"/>
<text x="241.7" y="194.3" font-size="14" fill="#2fae5f" font-weight="bold">3</text>
<path d="M74.7,108.7 L102.3,108.7 M111.3,117.7 L111.3,190.3 M102.3,199.3 L74.7,199.3 M102.3,108.7 A9,9 0 0 1 111.3,117.7 M111.3,190.3 A9,9 0 0 1 102.3,199.3" stroke="#2fae5f" stroke-width="2.6" fill="none"/>
</svg>
</div>

$$
\begin{aligned}
\text{วงที่ 1}\ (14,15) &\Rightarrow ABC \\
\text{วงที่ 2}\ (0,1,2,3) &\Rightarrow \overline{A}\,\overline{B} \\
\text{วงที่ 3}\ (1,3,9,11) &\Rightarrow \overline{B}D \\
f &= ABC+\overline{A}\,\overline{B}+\overline{B}D
\end{aligned}
$$

$\mathbf{Ans}\quad f = ABC+\overline{A}\,\overline{B}+\overline{B}D$

---

## 5. เงื่อนไขไม่สนใจ (Don't Care)

ช่อง $x$ คืออินพุตที่ไม่เกิดขึ้นจริงหรือไม่สนค่าเอาต์พุต จะเลือกเป็น $1$ หรือ $0$ ก็ได้

**กฎ**

1. ไม่ต้องจับ $x$ ที่ไม่ช่วยให้ลูปใหญ่ขึ้น
2. ใช้ $x$ เป็น $1$ เฉพาะเมื่อทำให้ลูปใหญ่ขึ้นหรือลดจำนวนลูป
3. $x$ ไม่ต้องถูกคลุมครบทุกช่อง

### 5.1 ตัวอย่าง

**ตัวอย่างที่ 5** จงลดรูป $f=\sum m(1,3,7,11,15)+\sum d(0,2,5)$

$\mathbf{Sol}^{n}$

ใส่ $1$ ลงแผนผังที่ช่อง $1,3,7,11,15$ และใส่ $x$ ที่ช่อง $0,2,5$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="294" height="274" viewBox="0 0 294 274" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.6" fill="none">
<rect x="66" y="46" width="216" height="216"/>
<line x1="120" y1="46" x2="120" y2="262"/>
<line x1="174" y1="46" x2="174" y2="262"/>
<line x1="228" y1="46" x2="228" y2="262"/>
<line x1="66" y1="100" x2="282" y2="100"/>
<line x1="66" y1="154" x2="282" y2="154"/>
<line x1="66" y1="208" x2="282" y2="208"/>
<line x1="8" y1="8" x2="66" y2="46"/>
</g>
<text x="93.0" y="37" text-anchor="middle">00</text>
<text x="147.0" y="37" text-anchor="middle">01</text>
<text x="201.0" y="37" text-anchor="middle">11</text>
<text x="255.0" y="37" text-anchor="middle">10</text>
<text x="57" y="79.0" text-anchor="end">00</text>
<text x="57" y="133.0" text-anchor="end">01</text>
<text x="57" y="187.0" text-anchor="end">11</text>
<text x="57" y="241.0" text-anchor="end">10</text>
<text x="60" y="18" text-anchor="end">AB</text><text x="10" y="40">CD</text>
<text x="115" y="59" text-anchor="end" font-size="11" fill-opacity="0.65">0</text>
<text x="93.0" y="81.0" text-anchor="middle" font-size="22">x</text>
<text x="115" y="113" text-anchor="end" font-size="11" fill-opacity="0.65">1</text>
<text x="93.0" y="135.0" text-anchor="middle" font-size="22">1</text>
<text x="115" y="221" text-anchor="end" font-size="11" fill-opacity="0.65">2</text>
<text x="93.0" y="243.0" text-anchor="middle" font-size="22">x</text>
<text x="115" y="167" text-anchor="end" font-size="11" fill-opacity="0.65">3</text>
<text x="93.0" y="189.0" text-anchor="middle" font-size="22">1</text>
<text x="169" y="59" text-anchor="end" font-size="11" fill-opacity="0.65">4</text>
<text x="169" y="113" text-anchor="end" font-size="11" fill-opacity="0.65">5</text>
<text x="147.0" y="135.0" text-anchor="middle" font-size="22">x</text>
<text x="169" y="221" text-anchor="end" font-size="11" fill-opacity="0.65">6</text>
<text x="169" y="167" text-anchor="end" font-size="11" fill-opacity="0.65">7</text>
<text x="147.0" y="189.0" text-anchor="middle" font-size="22">1</text>
<text x="277" y="59" text-anchor="end" font-size="11" fill-opacity="0.65">8</text>
<text x="277" y="113" text-anchor="end" font-size="11" fill-opacity="0.65">9</text>
<text x="277" y="221" text-anchor="end" font-size="11" fill-opacity="0.65">10</text>
<text x="277" y="167" text-anchor="end" font-size="11" fill-opacity="0.65">11</text>
<text x="255.0" y="189.0" text-anchor="middle" font-size="22">1</text>
<text x="223" y="59" text-anchor="end" font-size="11" fill-opacity="0.65">12</text>
<text x="223" y="113" text-anchor="end" font-size="11" fill-opacity="0.65">13</text>
<text x="223" y="221" text-anchor="end" font-size="11" fill-opacity="0.65">14</text>
<text x="223" y="167" text-anchor="end" font-size="11" fill-opacity="0.65">15</text>
<text x="201.0" y="189.0" text-anchor="middle" font-size="22">1</text>
<path d="M78.5,49.5 L107.5,49.5 M116.5,58.5 L116.5,249.5 M107.5,258.5 L78.5,258.5 M69.5,249.5 L69.5,58.5 M69.5,58.5 A9,9 0 0 1 78.5,49.5 M107.5,49.5 A9,9 0 0 1 116.5,58.5 M116.5,249.5 A9,9 0 0 1 107.5,258.5 M78.5,258.5 A9,9 0 0 1 69.5,249.5" stroke="#e8743b" stroke-width="2.6" fill="none"/>
<text x="74.5" y="253.5" font-size="14" fill="#e8743b" font-weight="bold">1</text>
<path d="M81.1,160.1 L266.9,160.1 M275.9,169.1 L275.9,192.9 M266.9,201.9 L81.1,201.9 M72.1,192.9 L72.1,169.1 M72.1,169.1 A9,9 0 0 1 81.1,160.1 M266.9,160.1 A9,9 0 0 1 275.9,169.1 M275.9,192.9 A9,9 0 0 1 266.9,201.9 M81.1,201.9 A9,9 0 0 1 72.1,192.9" stroke="#3b8be8" stroke-width="2.6" fill="none"/>
<text x="77.1" y="196.9" font-size="14" fill="#3b8be8" font-weight="bold">2</text>
</svg>
</div>

$$
\begin{aligned}
\text{วงที่ 1}\ (0,1,2,3) &\Rightarrow \overline{A}\,\overline{B} \\
\text{วงที่ 2}\ (3,7,11,15) &\Rightarrow CD \\
f &= \overline{A}\,\overline{B}+CD
\end{aligned}
$$

$\mathbf{Ans}\quad f = \overline{A}\,\overline{B}+CD$

---

## 6. ข้อควรระวังในการสอบ

1. เรียงรหัสหัวตารางเป็น $00,01,11,10$ เสมอ
2. อย่าลืมลูปที่ข้ามขอบและลูป 4 มุม
3. POS ต้องจับช่อง $0$ และอ่านกลับขั้ว (ตัวแปรคงที่เป็น $0$ เขียนปกติ)
4. ลูปต้องมี $2^{n}$ ช่อง ห้ามจับ 3, 5, 6 ช่อง
5. บางโจทย์มีคำตอบสั้นที่สุดได้หลายแบบ ตอบแบบใดแบบหนึ่งก็ถูก
