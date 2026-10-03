# บทที่ 3 พีชคณิตบูลีน (Boolean Algebra)

---

## พิสูจน์ด้วยตารางความจริง

### ข้อ 1  $A+\overline{A}B = A+B$

$$
\begin{array}{|c|c|c|c|c|c|}
\hline
A & B & \overline{A} & \overline{A}B & A+\overline{A}B & A+B \\
\hline
0 & 0 & 1 & 0 & 0 & 0 \\
\hline
0 & 1 & 1 & 1 & 1 & 1 \\
\hline
1 & 0 & 0 & 0 & 1 & 1 \\
\hline
1 & 1 & 0 & 0 & 1 & 1 \\
\hline
\end{array}
$$

### ข้อ 2  $\overline{A}+AB = \overline{A}+B$

$$
\begin{array}{|c|c|c|c|c|c|}
\hline
A & B & \overline{A} & AB & \overline{A}+AB & \overline{A}+B \\
\hline
0 & 0 & 1 & 0 & 1 & 1 \\
\hline
0 & 1 & 1 & 0 & 1 & 1 \\
\hline
1 & 0 & 0 & 0 & 0 & 0 \\
\hline
1 & 1 & 0 & 1 & 1 & 1 \\
\hline
\end{array}
$$

### ข้อ 3  $A(B+C) = AB+AC$

$$
\begin{array}{|c|c|c|c|c|c|c|c|}
\hline
A & B & C & AB & AC & B+C & A(B+C) & AB+AC \\
\hline
0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 \\
\hline
0 & 0 & 1 & 0 & 0 & 1 & 0 & 0 \\
\hline
0 & 1 & 0 & 0 & 0 & 1 & 0 & 0 \\
\hline
0 & 1 & 1 & 0 & 0 & 1 & 0 & 0 \\
\hline
1 & 0 & 0 & 0 & 0 & 0 & 0 & 0 \\
\hline
1 & 0 & 1 & 0 & 1 & 1 & 1 & 1 \\
\hline
1 & 1 & 0 & 1 & 0 & 1 & 1 & 1 \\
\hline
1 & 1 & 1 & 1 & 1 & 1 & 1 & 1 \\
\hline
\end{array}
$$

### ข้อ 4  $A+BC = (A+B)(A+C)$

$$
\begin{array}{|c|c|c|c|c|c|c|c|}
\hline
A & B & C & BC & A+B & A+C & A+BC & (A+B)(A+C) \\
\hline
0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 \\
\hline
0 & 0 & 1 & 0 & 0 & 1 & 0 & 0 \\
\hline
0 & 1 & 0 & 0 & 1 & 0 & 0 & 0 \\
\hline
0 & 1 & 1 & 1 & 1 & 1 & 1 & 1 \\
\hline
1 & 0 & 0 & 0 & 1 & 1 & 1 & 1 \\
\hline
1 & 0 & 1 & 0 & 1 & 1 & 1 & 1 \\
\hline
1 & 1 & 0 & 0 & 1 & 1 & 1 & 1 \\
\hline
1 & 1 & 1 & 1 & 1 & 1 & 1 & 1 \\
\hline
\end{array}
$$

---

## ลดรูปสมการลอจิก

### ตัวอย่างที่ 1  จงลดรูป  $Y = BC+\overline{B}C+\overline{B}\,\overline{C}$

$\mathbf{Sol}^{n}$

$$
\begin{aligned}
Y &= BC+\overline{B}C+\overline{B}\,\overline{C} \\
&= C(B+\overline{B})+\overline{B}\,\overline{C} &&\text{ดึง $C$ ออก} \\
&= C\cdot 1+\overline{B}\,\overline{C} &&\text{$B+\overline{B}=1$} \\
&= C+\overline{B}\,\overline{C} &&\text{$C\cdot 1=C$} \\
&= C+\overline{B} &&\text{$A+\overline{A}B=A+B$}
\end{aligned}
$$

---

### ตัวอย่างที่ 2  จงลดรูป  $Y = \overline{ABC+\overline{A}BC+BC}$

$\mathbf{Sol}^{n}$

$$
\begin{aligned}
Y &= \overline{ABC+\overline{A}BC+BC} \\
&= \overline{BC(A+\overline{A}+1)} &&\text{ดึง $BC$ ออก} \\
&= \overline{BC\cdot 1} &&\text{$A+\overline{A}+1=1$} \\
&= \overline{BC} &&\text{$X\cdot 1=X$}
\end{aligned}
$$

---

### ตัวอย่างที่ 3  จงลดรูป  $Y = A\overline{B}C+A\overline{B}\,\overline{C}+ABC+AB\overline{C}$

$\mathbf{Sol}^{n}$

$$
\begin{aligned}
Y &= A\overline{B}C+A\overline{B}\,\overline{C}+ABC+AB\overline{C} \\
&= A\overline{B}(C+\overline{C})+AB(C+\overline{C}) &&\text{จัดกลุ่ม} \\
&= A\overline{B}\cdot 1+AB\cdot 1 &&\text{$C+\overline{C}=1$} \\
&= A\overline{B}+AB \\
&= A(\overline{B}+B) &&\text{ดึง $A$ ออก} \\
&= A\cdot 1 &&\text{$B+\overline{B}=1$} \\
&= A
\end{aligned}
$$

---

### ตัวอย่างที่ 4  จงลดรูป  $Y = AB+\overline{A}B+\overline{A}\,\overline{B}$

$\mathbf{Sol}^{n}$

$$
\begin{aligned}
Y &= AB+\overline{A}B+\overline{A}\,\overline{B} \\
&= B(A+\overline{A})+\overline{A}\,\overline{B} &&\text{ดึง $B$ ออก} \\
&= B\cdot 1+\overline{A}\,\overline{B} &&\text{$A+\overline{A}=1$} \\
&= B+\overline{A}\,\overline{B} \\
&= B+\overline{A} &&\text{$A+\overline{A}B=A+B$}
\end{aligned}
$$

วงจรก่อนลดรูป

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="484" height="418" viewBox="0 0 538 464" font-family="Times New Roman, serif" font-size="18" fill="currentColor"><g stroke="currentColor" stroke-width="1.8" fill="none"><line x1="46.0" y1="87.0" x2="140.0" y2="87.0"/>
<line x1="76.0" y1="101.0" x2="140.0" y2="101.0"/>
<line x1="46.0" y1="156.0" x2="140.0" y2="156.0"/>
<line x1="186.0" y1="156.0" x2="218.0" y2="156.0"/>
<line x1="218.0" y1="156.0" x2="218.0" y2="211.0"/>
<line x1="218.0" y1="211.0" x2="262.0" y2="211.0"/>
<line x1="76.0" y1="225.0" x2="262.0" y2="225.0"/>
<line x1="76.0" y1="280.0" x2="140.0" y2="280.0"/>
<line x1="186.0" y1="156.0" x2="230.0" y2="156.0"/>
<line x1="230.0" y1="156.0" x2="230.0" y2="335.0"/>
<line x1="230.0" y1="335.0" x2="262.0" y2="335.0"/>
<line x1="186.0" y1="280.0" x2="242.0" y2="280.0"/>
<line x1="242.0" y1="280.0" x2="242.0" y2="349.0"/>
<line x1="242.0" y1="349.0" x2="262.0" y2="349.0"/>
<line x1="196.0" y1="94.0" x2="340.0" y2="94.0"/>
<line x1="340.0" y1="94.0" x2="340.0" y2="396.0"/>
<line x1="340.0" y1="396.0" x2="389.0" y2="396.0"/>
<line x1="318.0" y1="218.0" x2="352.0" y2="218.0"/>
<line x1="352.0" y1="218.0" x2="352.0" y2="410.0"/>
<line x1="352.0" y1="410.0" x2="391.0" y2="410.0"/>
<line x1="318.0" y1="342.0" x2="364.0" y2="342.0"/>
<line x1="364.0" y1="342.0" x2="364.0" y2="424.0"/>
<line x1="364.0" y1="424.0" x2="389.0" y2="424.0"/>
<circle cx="218.0" cy="156.0" r="3" fill="currentColor" stroke="none"/>
<line x1="46.0" y1="34.0" x2="46.0" y2="156.0"/>
<circle cx="46" cy="87.0" r="3" fill="currentColor" stroke="none"/>
<line x1="76.0" y1="34.0" x2="76.0" y2="280.0"/>
<circle cx="76" cy="101.0" r="3" fill="currentColor" stroke="none"/>
<circle cx="76" cy="225.0" r="3" fill="currentColor" stroke="none"/>
<path d="M140,68 H170 A26,26 0 0 1 170,120 H140 Z"/>
<polygon points="140,136 140,176 176,156"/>
<circle cx="181" cy="156" r="5"/>
<path d="M262,192 H292 A26,26 0 0 1 292,244 H262 Z"/>
<polygon points="140,260 140,300 176,280"/>
<circle cx="181" cy="280" r="5"/>
<path d="M262,316 H292 A26,26 0 0 1 292,368 H262 Z"/>
<path d="M384,384 C406,384 432,397.0 448,410 C432,423.0 406,436 384,436 Q398,410 384,384 Z"/>
<line x1="448.0" y1="410.0" x2="468.0" y2="410.0"/>
<circle cx="468" cy="410" r="3.5" fill="currentColor" stroke="none"/></g><text x="46" y="24" text-anchor="middle">A</text><text x="76" y="24" text-anchor="middle">B</text><text x="478" y="415">Y</text></svg>
</div>

วงจรหลังลดรูป $Y = \overline{A}+B$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="344" height="184" viewBox="0 0 382 204" font-family="Times New Roman, serif" font-size="18" fill="currentColor"><g stroke="currentColor" stroke-width="1.8" fill="none"><line x1="46.0" y1="88.0" x2="140.0" y2="88.0"/>
<line x1="186.0" y1="88.0" x2="208.0" y2="88.0"/>
<line x1="208.0" y1="88.0" x2="208.0" y2="143.0"/>
<line x1="208.0" y1="143.0" x2="234.5" y2="143.0"/>
<line x1="76.0" y1="157.0" x2="234.5" y2="157.0"/>
<line x1="46.0" y1="34.0" x2="46.0" y2="88.0"/>
<line x1="76.0" y1="34.0" x2="76.0" y2="157.0"/>
<polygon points="140,68 140,108 176,88"/>
<circle cx="181" cy="88" r="5"/>
<path d="M228,124 C250,124 276,137.0 292,150 C276,163.0 250,176 228,176 Q242,150 228,124 Z"/>
<line x1="292.0" y1="150.0" x2="312.0" y2="150.0"/>
<circle cx="312" cy="150" r="3.5" fill="currentColor" stroke="none"/></g><text x="46" y="24" text-anchor="middle">A</text><text x="76" y="24" text-anchor="middle">B</text><text x="322" y="155">Y</text></svg>
</div>

ตรวจสอบด้วยตารางความจริง

$$
\begin{array}{|c|c|c|c|c|c|c|}
\hline
A & B & AB & \overline{A}B & \overline{A}\,\overline{B} & AB+\overline{A}B+\overline{A}\,\overline{B} & \overline{A}+B \\
\hline
0 & 0 & 0 & 0 & 1 & 1 & 1 \\
\hline
0 & 1 & 0 & 1 & 0 & 1 & 1 \\
\hline
1 & 0 & 0 & 0 & 0 & 0 & 0 \\
\hline
1 & 1 & 1 & 0 & 0 & 1 & 1 \\
\hline
\end{array}
$$

---

## พิสูจน์ทฤษฎีของเดอร์มอร์แกน

### ข้อ 1  $\overline{A\cdot B} = \overline{A}+\overline{B}$

$$
\begin{array}{|c|c|c|c|c|c|}
\hline
A & B & \overline{A} & \overline{B} & \overline{AB} & \overline{A}+\overline{B} \\
\hline
0 & 0 & 1 & 1 & 1 & 1 \\
\hline
0 & 1 & 1 & 0 & 1 & 1 \\
\hline
1 & 0 & 0 & 1 & 1 & 1 \\
\hline
1 & 1 & 0 & 0 & 0 & 0 \\
\hline
\end{array}
$$

### ข้อ 2  $\overline{A+B} = \overline{A}\cdot\overline{B}$

$$
\begin{array}{|c|c|c|c|c|c|}
\hline
A & B & \overline{A} & \overline{B} & \overline{A+B} & \overline{A}\,\overline{B} \\
\hline
0 & 0 & 1 & 1 & 1 & 1 \\
\hline
0 & 1 & 1 & 0 & 0 & 0 \\
\hline
1 & 0 & 0 & 1 & 0 & 0 \\
\hline
1 & 1 & 0 & 0 & 0 & 0 \\
\hline
\end{array}
$$

---

## ออกแบบวงจรด้วยแนนด์เกตหรือนอร์เกตเพียงชนิดเดียว

### ตัวอย่าง  จงออกแบบวงจรของ $Y = AB+C$ โดยใช้แนนด์เกตเพียงชนิดเดียว

$\mathbf{Sol}^{n}$

$$
\begin{aligned}
Y &= AB+C \\
&= \overline{\overline{AB+C}} &&\text{ขั้น 1  ใส่บาร์ 2 ชั้น} \\
&= \overline{\overline{AB}\cdot \overline{C}} &&\text{ขั้น 2  เดอร์มอร์แกน}
\end{aligned}
$$

ขั้น 3  เขียนวงจร ($\overline{C}$ ได้จากแนนด์เกตที่ต่ออินพุตทั้งสองเข้าด้วยกัน)

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="401" height="256" viewBox="0 0 446 284" font-family="Times New Roman, serif" font-size="18" fill="currentColor"><g stroke="currentColor" stroke-width="1.8" fill="none"><line x1="46.0" y1="87.0" x2="170.0" y2="87.0"/>
<line x1="76.0" y1="101.0" x2="170.0" y2="101.0"/>
<line x1="106.0" y1="155.0" x2="170.0" y2="155.0"/>
<line x1="106.0" y1="169.0" x2="170.0" y2="169.0"/>
<line x1="236.0" y1="94.0" x2="258.0" y2="94.0"/>
<line x1="258.0" y1="94.0" x2="258.0" y2="223.0"/>
<line x1="258.0" y1="223.0" x2="290.0" y2="223.0"/>
<line x1="236.0" y1="162.0" x2="270.0" y2="162.0"/>
<line x1="270.0" y1="162.0" x2="270.0" y2="237.0"/>
<line x1="270.0" y1="237.0" x2="290.0" y2="237.0"/>
<line x1="46.0" y1="34.0" x2="46.0" y2="87.0"/>
<line x1="76.0" y1="34.0" x2="76.0" y2="101.0"/>
<line x1="106.0" y1="34.0" x2="106.0" y2="169.0"/>
<circle cx="106" cy="155.0" r="3" fill="currentColor" stroke="none"/>
<path d="M170,68 H200 A26,26 0 0 1 200,120 H170 Z"/>
<circle cx="231" cy="94" r="5"/>
<path d="M170,136 H200 A26,26 0 0 1 200,188 H170 Z"/>
<circle cx="231" cy="162" r="5"/>
<path d="M290,204 H320 A26,26 0 0 1 320,256 H290 Z"/>
<circle cx="351" cy="230" r="5"/>
<line x1="356.0" y1="230.0" x2="376.0" y2="230.0"/>
<circle cx="376" cy="230" r="3.5" fill="currentColor" stroke="none"/></g><text x="46" y="24" text-anchor="middle">A</text><text x="76" y="24" text-anchor="middle">B</text><text x="106" y="24" text-anchor="middle">C</text><text x="386" y="235">Y</text></svg>
</div>

---

### ตัวอย่าง  จงออกแบบวงจรของ $Y = (A+B)(\overline{B}+\overline{C})$ โดยใช้นอร์เกตเพียงชนิดเดียว

$\mathbf{Sol}^{n}$

$$
\begin{aligned}
Y &= (A+B)(\overline{B}+\overline{C}) \\
&= \overline{\overline{(A+B)(\overline{B}+\overline{C})}} &&\text{ขั้น 1  ใส่บาร์ 2 ชั้น} \\
&= \overline{\overline{A+B}+\overline{\overline{B}+\overline{C}}} &&\text{ขั้น 2  เดอร์มอร์แกน}
\end{aligned}
$$

ขั้น 3  เขียนวงจร ($\overline{B}$ และ $\overline{C}$ ได้จากนอร์เกตที่ต่ออินพุตทั้งสองเข้าด้วยกัน)

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="531" height="378" viewBox="0 0 590 420" font-family="Times New Roman, serif" font-size="18" fill="currentColor"><g stroke="currentColor" stroke-width="1.8" fill="none"><line x1="46.0" y1="87.0" x2="176.5" y2="87.0"/>
<line x1="76.0" y1="101.0" x2="176.5" y2="101.0"/>
<line x1="76.0" y1="155.0" x2="176.5" y2="155.0"/>
<line x1="76.0" y1="169.0" x2="176.5" y2="169.0"/>
<line x1="106.0" y1="223.0" x2="176.5" y2="223.0"/>
<line x1="106.0" y1="237.0" x2="176.5" y2="237.0"/>
<line x1="244.0" y1="162.0" x2="266.0" y2="162.0"/>
<line x1="266.0" y1="162.0" x2="266.0" y2="291.0"/>
<line x1="266.0" y1="291.0" x2="304.5" y2="291.0"/>
<line x1="244.0" y1="230.0" x2="278.0" y2="230.0"/>
<line x1="278.0" y1="230.0" x2="278.0" y2="305.0"/>
<line x1="278.0" y1="305.0" x2="304.5" y2="305.0"/>
<line x1="244.0" y1="94.0" x2="394.0" y2="94.0"/>
<line x1="394.0" y1="94.0" x2="394.0" y2="359.0"/>
<line x1="394.0" y1="359.0" x2="432.5" y2="359.0"/>
<line x1="372.0" y1="298.0" x2="406.0" y2="298.0"/>
<line x1="406.0" y1="298.0" x2="406.0" y2="373.0"/>
<line x1="406.0" y1="373.0" x2="432.5" y2="373.0"/>
<line x1="46.0" y1="34.0" x2="46.0" y2="87.0"/>
<line x1="76.0" y1="34.0" x2="76.0" y2="169.0"/>
<circle cx="76" cy="101.0" r="3" fill="currentColor" stroke="none"/>
<circle cx="76" cy="155.0" r="3" fill="currentColor" stroke="none"/>
<line x1="106.0" y1="34.0" x2="106.0" y2="237.0"/>
<circle cx="106" cy="223.0" r="3" fill="currentColor" stroke="none"/>
<path d="M170,68 C192,68 218,81.0 234,94 C218,107.0 192,120 170,120 Q184,94 170,68 Z"/>
<circle cx="239" cy="94" r="5"/>
<path d="M170,136 C192,136 218,149.0 234,162 C218,175.0 192,188 170,188 Q184,162 170,136 Z"/>
<circle cx="239" cy="162" r="5"/>
<path d="M170,204 C192,204 218,217.0 234,230 C218,243.0 192,256 170,256 Q184,230 170,204 Z"/>
<circle cx="239" cy="230" r="5"/>
<path d="M298,272 C320,272 346,285.0 362,298 C346,311.0 320,324 298,324 Q312,298 298,272 Z"/>
<circle cx="367" cy="298" r="5"/>
<path d="M426,340 C448,340 474,353.0 490,366 C474,379.0 448,392 426,392 Q440,366 426,340 Z"/>
<circle cx="495" cy="366" r="5"/>
<line x1="500.0" y1="366.0" x2="520.0" y2="366.0"/>
<circle cx="520" cy="366" r="3.5" fill="currentColor" stroke="none"/></g><text x="46" y="24" text-anchor="middle">A</text><text x="76" y="24" text-anchor="middle">B</text><text x="106" y="24" text-anchor="middle">C</text><text x="530" y="371">Y</text></svg>
</div>

---

## โจทย์ฝึกหัด

### ข้อ 1  จงลดรูปสมการให้สั้นที่สุด  $Y = \overline{A}BC+A\overline{B}\,\overline{C}+A\overline{B}C+AB\overline{C}+ABC$

$\mathbf{Sol}^{n}$

$$
\begin{aligned}
Y &= \overline{A}BC+A\overline{B}\,\overline{C}+A\overline{B}C+AB\overline{C}+ABC \\
&= \overline{A}BC+A\overline{B}(\overline{C}+C)+AB(\overline{C}+C) &&\text{จัดกลุ่ม} \\
&= \overline{A}BC+A\overline{B}\cdot 1+AB\cdot 1 &&\text{$C+\overline{C}=1$} \\
&= \overline{A}BC+A\overline{B}+AB \\
&= \overline{A}BC+A(\overline{B}+B) &&\text{ดึง $A$ ออก} \\
&= \overline{A}BC+A\cdot 1 &&\text{$B+\overline{B}=1$} \\
&= \overline{A}BC+A \\
&= A+BC &&\text{$A+\overline{A}X=A+X$}
\end{aligned}
$$

---

### ข้อ 2  จงลดรูปสมการให้สั้นที่สุด  $Y = \overline{A\overline{B}+\overline{A}+B}$

$\mathbf{Sol}^{n}$

$$
\begin{aligned}
Y &= \overline{A\overline{B}+\overline{A}+B} \\
&= \overline{\overline{A}+A\overline{B}+B} &&\text{จัดเรียงใหม่} \\
&= \overline{\overline{A}+\overline{B}+B} &&\text{$\overline{A}+A\overline{B}=\overline{A}+\overline{B}$} \\
&= \overline{\overline{A}+1} &&\text{$B+\overline{B}=1$} \\
&= \overline{1} &&\text{$X+1=1$} \\
&= 0 &&\text{$\overline{1}=0$}
\end{aligned}
$$

---

### ข้อ 3  จงพิสูจน์  $A+\overline{A}B+A\overline{B} = A+B$

$\mathbf{Sol}^{n}$

$$
\begin{aligned}
LHS &= A+\overline{A}B+A\overline{B} \\
&= A+A\overline{B}+\overline{A}B &&\text{จัดเรียงใหม่} \\
&= A(1+\overline{B})+\overline{A}B &&\text{ดึง $A$ ออก} \\
&= A\cdot 1+\overline{A}B &&\text{$1+X=1$} \\
&= A+\overline{A}B \\
&= A+B &&\text{$A+\overline{A}B=A+B$}
\end{aligned}
$$

$\therefore\ A+\overline{A}B+A\overline{B} = A+B$

---

### ข้อ 4  จงลดรูปสมการลอจิก พร้อมเขียนวงจรลอจิก  $Y = \overline{A}B(C+A\overline{B})+\overline{B}C$

$\mathbf{Sol}^{n}$

$$
\begin{aligned}
Y &= \overline{A}B(C+A\overline{B})+\overline{B}C \\
&= \overline{A}BC+\overline{A}B\cdot A\overline{B}+\overline{B}C &&\text{กระจาย} \\
&= \overline{A}BC+0+\overline{B}C &&\text{$A\overline{A}=0,\ B\overline{B}=0$} \\
&= \overline{A}BC+\overline{B}C \\
&= C(\overline{A}B+\overline{B}) &&\text{ดึง $C$ ออก} \\
&= C(\overline{A}+\overline{B}) &&\text{$\overline{B}+\overline{A}B=\overline{B}+\overline{A}$} \\
&= C\cdot \overline{AB} &&\text{เดอร์มอร์แกน}
\end{aligned}
$$

วงจรลอจิกของ $Y = C\cdot\overline{AB}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="382" height="194" viewBox="0 0 424 216" font-family="Times New Roman, serif" font-size="18" fill="currentColor"><g stroke="currentColor" stroke-width="1.8" fill="none"><line x1="46.0" y1="87.0" x2="170.0" y2="87.0"/>
<line x1="76.0" y1="101.0" x2="170.0" y2="101.0"/>
<line x1="106.0" y1="155.0" x2="278.0" y2="155.0"/>
<line x1="236.0" y1="94.0" x2="258.0" y2="94.0"/>
<line x1="258.0" y1="94.0" x2="258.0" y2="169.0"/>
<line x1="258.0" y1="169.0" x2="278.0" y2="169.0"/>
<line x1="46.0" y1="34.0" x2="46.0" y2="87.0"/>
<line x1="76.0" y1="34.0" x2="76.0" y2="101.0"/>
<line x1="106.0" y1="34.0" x2="106.0" y2="155.0"/>
<path d="M170,68 H200 A26,26 0 0 1 200,120 H170 Z"/>
<circle cx="231" cy="94" r="5"/>
<path d="M278,136 H308 A26,26 0 0 1 308,188 H278 Z"/>
<line x1="334.0" y1="162.0" x2="354.0" y2="162.0"/>
<circle cx="354" cy="162" r="3.5" fill="currentColor" stroke="none"/></g><text x="46" y="24" text-anchor="middle">A</text><text x="76" y="24" text-anchor="middle">B</text><text x="106" y="24" text-anchor="middle">C</text><text x="364" y="167">Y</text></svg>
</div>

---

### ข้อ 5  จงลดรูปสมการลอจิก พร้อมเขียนวงจรลอจิก  $Y = \overline{A\overline{B}C+AB+\overline{ABC}+A\overline{C}+AB\overline{C}}$

$\mathbf{Sol}^{n}$

$$
\begin{aligned}
Y &= \overline{A\overline{B}C+AB+\overline{ABC}+A\overline{C}+AB\overline{C}} \\
&= \overline{A\overline{B}C+AB+\overline{AB}+\overline{C}+A\overline{C}+AB\overline{C}} &&\text{เดอร์มอร์แกน  $\overline{ABC}=\overline{AB}+\overline{C}$} \\
&= \overline{A\overline{B}C+1+\overline{C}+A\overline{C}+AB\overline{C}} &&\text{$AB+\overline{AB}=1$} \\
&= \overline{1} &&\text{$X+1=1$} \\
&= 0 &&\text{$\overline{1}=0$}
\end{aligned}
$$

ผลลัพธ์เป็นค่าคงที่ $Y=0$ จึงไม่ต้องใช้เกตใดเลย เพียงต่อเอาต์พุตลงกราวด์

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="216" height="99" viewBox="0 0 240 110" font-family="Times New Roman, serif" font-size="18" fill="currentColor"><g stroke="currentColor" stroke-width="2" fill="none"><line x1="40.0" y1="35.0" x2="120.0" y2="35.0"/>
<line x1="120.0" y1="35.0" x2="120.0" y2="57.0"/>
<line x1="106.0" y1="57.0" x2="134.0" y2="57.0"/>
<line x1="111.0" y1="62.0" x2="129.0" y2="62.0"/>
<line x1="116.0" y1="67.0" x2="124.0" y2="67.0"/></g>
<circle cx="40.0" cy="35.0" r="3" fill="currentColor" stroke="none"/>
<circle cx="120.0" cy="35.0" r="3" fill="currentColor" stroke="none"/>
<text x="40.0" y="25.0" text-anchor="middle">Y</text>
<text x="150.0" y="40.0" text-anchor="start">= 0</text></svg>
</div>

