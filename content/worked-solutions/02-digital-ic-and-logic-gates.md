# บทที่ 2 ไอซีและลอจิกเกต (Digital IC and Logic Gates)

---

## การเขียนวงจรลอจิกเกตจากสมการ

### ตัวอย่างที่ 1  $Y = B\overline{A}+\overline{B}A+AB+\overline{A}\,\overline{B}$

$\mathbf{Sol}^{n}$

$$
\begin{aligned}
\text{Step 1 (NOT)} &:\ \overline{A},\ \overline{B}\\
\text{Step 2 (AND)} &:\ B\overline{A},\ \ \overline{B}A,\ \ AB,\ \ \overline{A}\,\overline{B}\\
\text{Step 3 (OR)} &:\ Y = B\overline{A}+\overline{B}A+AB+\overline{A}\,\overline{B}
\end{aligned}
$$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="490" height="491" viewBox="0 0 544 546" font-family="Times New Roman, serif" font-size="18" fill="currentColor"><g stroke="currentColor" stroke-width="1.8" fill="none"><line x1="46.0" y1="88.0" x2="134.0" y2="88.0"/>
<line x1="76.0" y1="143.0" x2="262.0" y2="143.0"/>
<line x1="180.0" y1="88.0" x2="212.0" y2="88.0"/>
<line x1="212.0" y1="88.0" x2="212.0" y2="157.0"/>
<line x1="212.0" y1="157.0" x2="262.0" y2="157.0"/>
<line x1="76.0" y1="212.0" x2="134.0" y2="212.0"/>
<line x1="180.0" y1="212.0" x2="224.0" y2="212.0"/>
<line x1="224.0" y1="212.0" x2="224.0" y2="267.0"/>
<line x1="224.0" y1="267.0" x2="262.0" y2="267.0"/>
<line x1="46.0" y1="281.0" x2="262.0" y2="281.0"/>
<line x1="46.0" y1="335.0" x2="134.0" y2="335.0"/>
<line x1="76.0" y1="349.0" x2="134.0" y2="349.0"/>
<line x1="180.0" y1="88.0" x2="236.0" y2="88.0"/>
<line x1="236.0" y1="88.0" x2="236.0" y2="403.0"/>
<line x1="236.0" y1="403.0" x2="262.0" y2="403.0"/>
<line x1="180.0" y1="212.0" x2="248.0" y2="212.0"/>
<line x1="248.0" y1="212.0" x2="248.0" y2="417.0"/>
<line x1="248.0" y1="417.0" x2="262.0" y2="417.0"/>
<line x1="318.0" y1="150.0" x2="340.0" y2="150.0"/>
<line x1="340.0" y1="150.0" x2="340.0" y2="464.0"/>
<line x1="340.0" y1="464.0" x2="394.2" y2="464.0"/>
<line x1="318.0" y1="274.0" x2="352.0" y2="274.0"/>
<line x1="352.0" y1="274.0" x2="352.0" y2="478.0"/>
<line x1="352.0" y1="478.0" x2="396.7" y2="478.0"/>
<line x1="190.0" y1="342.0" x2="364.0" y2="342.0"/>
<line x1="364.0" y1="342.0" x2="364.0" y2="492.0"/>
<line x1="364.0" y1="492.0" x2="396.7" y2="492.0"/>
<line x1="318.0" y1="410.0" x2="376.0" y2="410.0"/>
<line x1="376.0" y1="410.0" x2="376.0" y2="506.0"/>
<line x1="376.0" y1="506.0" x2="394.2" y2="506.0"/>
<circle cx="212.0" cy="88.0" r="3" fill="currentColor" stroke="none"/>
<circle cx="224.0" cy="212.0" r="3" fill="currentColor" stroke="none"/>
<line x1="46.0" y1="34.0" x2="46.0" y2="335.0"/>
<circle cx="46" cy="88.0" r="3" fill="currentColor" stroke="none"/>
<circle cx="46" cy="281.0" r="3" fill="currentColor" stroke="none"/>
<line x1="76.0" y1="34.0" x2="76.0" y2="349.0"/>
<circle cx="76" cy="143.0" r="3" fill="currentColor" stroke="none"/>
<circle cx="76" cy="212.0" r="3" fill="currentColor" stroke="none"/>
<polygon points="134,68 134,108 170,88"/>
<circle cx="175" cy="88" r="5"/>
<path d="M262,124 H292 A26,26 0 0 1 292,176 H262 Z"/>
<polygon points="134,192 134,232 170,212"/>
<circle cx="175" cy="212" r="5"/>
<path d="M262,248 H292 A26,26 0 0 1 292,300 H262 Z"/>
<path d="M134,316 H164 A26,26 0 0 1 164,368 H134 Z"/>
<path d="M262,384 H292 A26,26 0 0 1 292,436 H262 Z"/>
<path d="M390,452.0 C412,452.0 438,468.5 454,485.0 C438,501.5 412,518.0 390,518.0 Q404,485.0 390,452.0 Z"/>
<line x1="454.0" y1="485.0" x2="474.0" y2="485.0"/>
<circle cx="474" cy="485.0" r="3.5" fill="currentColor" stroke="none"/></g><text x="46" y="24" text-anchor="middle">A</text><text x="76" y="24" text-anchor="middle">B</text><text x="484" y="490.0">Y</text></svg>
</div>

---

### ตัวอย่างที่ 2  $Y = \overline{A}\,\overline{B}C+\overline{A}B\overline{C}+A\overline{B}$

$\mathbf{Sol}^{n}$

$$
\begin{aligned}
\text{Step 1 (NOT)} &:\ \overline{A},\ \overline{B},\ \overline{C}\\
\text{Step 2 (AND)} &:\ \overline{A}\,\overline{B}C,\ \ \overline{A}B\overline{C},\ \ A\overline{B}\\
\text{Step 3 (OR)} &:\ Y = \overline{A}\,\overline{B}C+\overline{A}B\overline{C}+A\overline{B}
\end{aligned}
$$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="508" height="468" viewBox="0 0 564 520" font-family="Times New Roman, serif" font-size="18" fill="currentColor"><g stroke="currentColor" stroke-width="1.8" fill="none"><line x1="46.0" y1="88.0" x2="164.0" y2="88.0"/>
<line x1="76.0" y1="144.0" x2="164.0" y2="144.0"/>
<line x1="210.0" y1="88.0" x2="232.0" y2="88.0"/>
<line x1="232.0" y1="88.0" x2="232.0" y2="192.0"/>
<line x1="232.0" y1="192.0" x2="294.0" y2="192.0"/>
<line x1="210.0" y1="144.0" x2="244.0" y2="144.0"/>
<line x1="244.0" y1="144.0" x2="244.0" y2="206.0"/>
<line x1="244.0" y1="206.0" x2="294.0" y2="206.0"/>
<line x1="106.0" y1="220.0" x2="294.0" y2="220.0"/>
<line x1="106.0" y1="268.0" x2="164.0" y2="268.0"/>
<line x1="210.0" y1="88.0" x2="256.0" y2="88.0"/>
<line x1="256.0" y1="88.0" x2="256.0" y2="316.0"/>
<line x1="256.0" y1="316.0" x2="294.0" y2="316.0"/>
<line x1="76.0" y1="330.0" x2="294.0" y2="330.0"/>
<line x1="210.0" y1="268.0" x2="268.0" y2="268.0"/>
<line x1="268.0" y1="268.0" x2="268.0" y2="344.0"/>
<line x1="268.0" y1="344.0" x2="294.0" y2="344.0"/>
<line x1="46.0" y1="391.0" x2="294.0" y2="391.0"/>
<line x1="210.0" y1="144.0" x2="280.0" y2="144.0"/>
<line x1="280.0" y1="144.0" x2="280.0" y2="405.0"/>
<line x1="280.0" y1="405.0" x2="294.0" y2="405.0"/>
<line x1="350.0" y1="206.0" x2="372.0" y2="206.0"/>
<line x1="372.0" y1="206.0" x2="372.0" y2="452.0"/>
<line x1="372.0" y1="452.0" x2="415.0" y2="452.0"/>
<line x1="350.0" y1="330.0" x2="384.0" y2="330.0"/>
<line x1="384.0" y1="330.0" x2="384.0" y2="466.0"/>
<line x1="384.0" y1="466.0" x2="417.0" y2="466.0"/>
<line x1="350.0" y1="398.0" x2="396.0" y2="398.0"/>
<line x1="396.0" y1="398.0" x2="396.0" y2="480.0"/>
<line x1="396.0" y1="480.0" x2="415.0" y2="480.0"/>
<circle cx="232.0" cy="88.0" r="3" fill="currentColor" stroke="none"/>
<circle cx="244.0" cy="144.0" r="3" fill="currentColor" stroke="none"/>
<line x1="46.0" y1="34.0" x2="46.0" y2="391.0"/>
<circle cx="46" cy="88.0" r="3" fill="currentColor" stroke="none"/>
<line x1="76.0" y1="34.0" x2="76.0" y2="330.0"/>
<circle cx="76" cy="144.0" r="3" fill="currentColor" stroke="none"/>
<line x1="106.0" y1="34.0" x2="106.0" y2="268.0"/>
<circle cx="106" cy="220.0" r="3" fill="currentColor" stroke="none"/>
<polygon points="164,68 164,108 200,88"/>
<circle cx="205" cy="88" r="5"/>
<polygon points="164,124 164,164 200,144"/>
<circle cx="205" cy="144" r="5"/>
<path d="M294,180 H324 A26,26 0 0 1 324,232 H294 Z"/>
<polygon points="164,248 164,288 200,268"/>
<circle cx="205" cy="268" r="5"/>
<path d="M294,304 H324 A26,26 0 0 1 324,356 H294 Z"/>
<path d="M294,372 H324 A26,26 0 0 1 324,424 H294 Z"/>
<path d="M410,440 C432,440 458,453.0 474,466 C458,479.0 432,492 410,492 Q424,466 410,440 Z"/>
<line x1="474.0" y1="466.0" x2="494.0" y2="466.0"/>
<circle cx="494" cy="466" r="3.5" fill="currentColor" stroke="none"/></g><text x="46" y="24" text-anchor="middle">A</text><text x="76" y="24" text-anchor="middle">B</text><text x="106" y="24" text-anchor="middle">C</text><text x="504" y="471">Y</text></svg>
</div>

---

### ตัวอย่างที่ 3  $Y = \overline{B}(\overline{A}+B)(\overline{A}+C)$

$\mathbf{Sol}^{n}$

$$
\begin{aligned}
\text{Step 1 (NOT)} &:\ \overline{A},\ \overline{B}\\
\text{Step 2 (OR)} &:\ \overline{A}+B,\ \ \overline{A}+C\\
\text{Step 3 (AND)} &:\ Y = \overline{B}(\overline{A}+B)(\overline{A}+C)
\end{aligned}
$$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="475" height="356" viewBox="0 0 528 396" font-family="Times New Roman, serif" font-size="18" fill="currentColor"><g stroke="currentColor" stroke-width="1.8" fill="none"><line x1="76.0" y1="88.0" x2="164.0" y2="88.0"/>
<line x1="46.0" y1="144.0" x2="164.0" y2="144.0"/>
<line x1="210.0" y1="144.0" x2="232.0" y2="144.0"/>
<line x1="232.0" y1="144.0" x2="232.0" y2="199.0"/>
<line x1="232.0" y1="199.0" x2="264.5" y2="199.0"/>
<line x1="76.0" y1="213.0" x2="264.5" y2="213.0"/>
<line x1="210.0" y1="144.0" x2="244.0" y2="144.0"/>
<line x1="244.0" y1="144.0" x2="244.0" y2="267.0"/>
<line x1="244.0" y1="267.0" x2="264.5" y2="267.0"/>
<line x1="106.0" y1="281.0" x2="264.5" y2="281.0"/>
<line x1="210.0" y1="88.0" x2="344.0" y2="88.0"/>
<line x1="344.0" y1="88.0" x2="344.0" y2="328.0"/>
<line x1="344.0" y1="328.0" x2="382.0" y2="328.0"/>
<line x1="322.0" y1="206.0" x2="356.0" y2="206.0"/>
<line x1="356.0" y1="206.0" x2="356.0" y2="342.0"/>
<line x1="356.0" y1="342.0" x2="382.0" y2="342.0"/>
<line x1="322.0" y1="274.0" x2="368.0" y2="274.0"/>
<line x1="368.0" y1="274.0" x2="368.0" y2="356.0"/>
<line x1="368.0" y1="356.0" x2="382.0" y2="356.0"/>
<circle cx="232.0" cy="144.0" r="3" fill="currentColor" stroke="none"/>
<line x1="46.0" y1="34.0" x2="46.0" y2="144.0"/>
<line x1="76.0" y1="34.0" x2="76.0" y2="213.0"/>
<circle cx="76" cy="88.0" r="3" fill="currentColor" stroke="none"/>
<line x1="106.0" y1="34.0" x2="106.0" y2="281.0"/>
<polygon points="164,68 164,108 200,88"/>
<circle cx="205" cy="88" r="5"/>
<polygon points="164,124 164,164 200,144"/>
<circle cx="205" cy="144" r="5"/>
<path d="M258,180 C280,180 306,193.0 322,206 C306,219.0 280,232 258,232 Q272,206 258,180 Z"/>
<path d="M258,248 C280,248 306,261.0 322,274 C306,287.0 280,300 258,300 Q272,274 258,248 Z"/>
<path d="M382,316 H412 A26,26 0 0 1 412,368 H382 Z"/>
<line x1="438.0" y1="342.0" x2="458.0" y2="342.0"/>
<circle cx="458" cy="342" r="3.5" fill="currentColor" stroke="none"/></g><text x="46" y="24" text-anchor="middle">A</text><text x="76" y="24" text-anchor="middle">B</text><text x="106" y="24" text-anchor="middle">C</text><text x="468" y="347">Y</text></svg>
</div>

---

## Assignment 2.1 จงเขียนวงจรลอจิกเกตจากสมการต่อไปนี้

### ข้อ 1  $Y = (A+B)(A+\overline{A}B)C+\overline{A}(B+\overline{C})+\overline{A}B+ABC$

$\mathbf{Sol}^{n}$

$$
\begin{aligned}
\text{Step 1 (NOT)} &:\ \overline{A},\ \overline{C}\\
\text{Step 2 (OR)} &:\ A+B,\ \ A+\overline{A}B,\ \ B+\overline{C}\\
\text{Step 3 (AND)} &:\ \overline{A}B,\ \ (A+B)(A+\overline{A}B)C,\ \ \overline{A}(B+\overline{C}),\ \ ABC\\
\text{Step 4 (OR)} &:\ Y = (A+B)(A+\overline{A}B)C+\overline{A}(B+\overline{C})+\overline{A}B+ABC
\end{aligned}
$$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="715" height="675" viewBox="0 0 794 750" font-family="Times New Roman, serif" font-size="18" fill="currentColor"><g stroke="currentColor" stroke-width="1.8" fill="none"><line x1="46.0" y1="87.0" x2="170.5" y2="87.0"/>
<line x1="76.0" y1="101.0" x2="170.5" y2="101.0"/>
<line x1="46.0" y1="156.0" x2="164.0" y2="156.0"/>
<line x1="210.0" y1="156.0" x2="250.0" y2="156.0"/>
<line x1="250.0" y1="156.0" x2="250.0" y2="211.0"/>
<line x1="250.0" y1="211.0" x2="276.0" y2="211.0"/>
<line x1="76.0" y1="225.0" x2="276.0" y2="225.0"/>
<line x1="46.0" y1="279.0" x2="406.5" y2="279.0"/>
<line x1="332.0" y1="218.0" x2="362.0" y2="218.0"/>
<line x1="362.0" y1="218.0" x2="362.0" y2="293.0"/>
<line x1="362.0" y1="293.0" x2="406.5" y2="293.0"/>
<line x1="228.0" y1="94.0" x2="486.0" y2="94.0"/>
<line x1="486.0" y1="94.0" x2="486.0" y2="340.0"/>
<line x1="486.0" y1="340.0" x2="512.0" y2="340.0"/>
<line x1="464.0" y1="286.0" x2="498.0" y2="286.0"/>
<line x1="498.0" y1="286.0" x2="498.0" y2="354.0"/>
<line x1="498.0" y1="354.0" x2="512.0" y2="354.0"/>
<line x1="106.0" y1="368.0" x2="512.0" y2="368.0"/>
<line x1="106.0" y1="416.0" x2="164.0" y2="416.0"/>
<line x1="76.0" y1="471.0" x2="282.5" y2="471.0"/>
<line x1="210.0" y1="416.0" x2="262.0" y2="416.0"/>
<line x1="262.0" y1="416.0" x2="262.0" y2="485.0"/>
<line x1="262.0" y1="485.0" x2="282.5" y2="485.0"/>
<line x1="210.0" y1="156.0" x2="374.0" y2="156.0"/>
<line x1="374.0" y1="156.0" x2="374.0" y2="539.0"/>
<line x1="374.0" y1="539.0" x2="400.0" y2="539.0"/>
<line x1="340.0" y1="478.0" x2="386.0" y2="478.0"/>
<line x1="386.0" y1="478.0" x2="386.0" y2="553.0"/>
<line x1="386.0" y1="553.0" x2="400.0" y2="553.0"/>
<line x1="46.0" y1="600.0" x2="164.0" y2="600.0"/>
<line x1="76.0" y1="614.0" x2="164.0" y2="614.0"/>
<line x1="106.0" y1="628.0" x2="164.0" y2="628.0"/>
<line x1="568.0" y1="354.0" x2="590.0" y2="354.0"/>
<line x1="590.0" y1="354.0" x2="590.0" y2="668.0"/>
<line x1="590.0" y1="668.0" x2="644.2" y2="668.0"/>
<line x1="456.0" y1="546.0" x2="602.0" y2="546.0"/>
<line x1="602.0" y1="546.0" x2="602.0" y2="682.0"/>
<line x1="602.0" y1="682.0" x2="646.7" y2="682.0"/>
<line x1="332.0" y1="218.0" x2="614.0" y2="218.0"/>
<line x1="614.0" y1="218.0" x2="614.0" y2="696.0"/>
<line x1="614.0" y1="696.0" x2="646.7" y2="696.0"/>
<line x1="220.0" y1="614.0" x2="626.0" y2="614.0"/>
<line x1="626.0" y1="614.0" x2="626.0" y2="710.0"/>
<line x1="626.0" y1="710.0" x2="644.2" y2="710.0"/>
<circle cx="250.0" cy="156.0" r="3" fill="currentColor" stroke="none"/>
<circle cx="362.0" cy="218.0" r="3" fill="currentColor" stroke="none"/>
<line x1="46.0" y1="34.0" x2="46.0" y2="600.0"/>
<circle cx="46" cy="87.0" r="3" fill="currentColor" stroke="none"/>
<circle cx="46" cy="156.0" r="3" fill="currentColor" stroke="none"/>
<circle cx="46" cy="279.0" r="3" fill="currentColor" stroke="none"/>
<line x1="76.0" y1="34.0" x2="76.0" y2="614.0"/>
<circle cx="76" cy="101.0" r="3" fill="currentColor" stroke="none"/>
<circle cx="76" cy="225.0" r="3" fill="currentColor" stroke="none"/>
<circle cx="76" cy="471.0" r="3" fill="currentColor" stroke="none"/>
<line x1="106.0" y1="34.0" x2="106.0" y2="628.0"/>
<circle cx="106" cy="368.0" r="3" fill="currentColor" stroke="none"/>
<circle cx="106" cy="416.0" r="3" fill="currentColor" stroke="none"/>
<path d="M164,68 C186,68 212,81.0 228,94 C212,107.0 186,120 164,120 Q178,94 164,68 Z"/>
<polygon points="164,136 164,176 200,156"/>
<circle cx="205" cy="156" r="5"/>
<path d="M276,192 H306 A26,26 0 0 1 306,244 H276 Z"/>
<path d="M400,260 C422,260 448,273.0 464,286 C448,299.0 422,312 400,312 Q414,286 400,260 Z"/>
<path d="M512,328 H542 A26,26 0 0 1 542,380 H512 Z"/>
<polygon points="164,396 164,436 200,416"/>
<circle cx="205" cy="416" r="5"/>
<path d="M276,452 C298,452 324,465.0 340,478 C324,491.0 298,504 276,504 Q290,478 276,452 Z"/>
<path d="M400,520 H430 A26,26 0 0 1 430,572 H400 Z"/>
<path d="M164,588 H194 A26,26 0 0 1 194,640 H164 Z"/>
<path d="M640,656.0 C662,656.0 688,672.5 704,689.0 C688,705.5 662,722.0 640,722.0 Q654,689.0 640,656.0 Z"/>
<line x1="704.0" y1="689.0" x2="724.0" y2="689.0"/>
<circle cx="724" cy="689.0" r="3.5" fill="currentColor" stroke="none"/></g><text x="46" y="24" text-anchor="middle">A</text><text x="76" y="24" text-anchor="middle">B</text><text x="106" y="24" text-anchor="middle">C</text><text x="734" y="694.0">Y</text></svg>
</div>

---

### ข้อ 2  $Y = \overline{A\overline{B}C\cdot AB\cdot\overline{ABC}\cdot A\overline{C}\cdot AB\overline{C}}$

$\mathbf{Sol}^{n}$

$$
\begin{aligned}
\text{Step 1 (NOT)} &:\ \overline{B},\ \overline{C}\\
\text{Step 2 (AND)} &:\ A\overline{B}C,\ \ AB,\ \ A\overline{C},\ \ AB\overline{C}\\
\text{Step 3 (NAND)} &:\ \overline{ABC}\\
\text{Step 4 (NAND)} &:\ Y = \overline{A\overline{B}C\cdot AB\cdot\overline{ABC}\cdot A\overline{C}\cdot AB\overline{C}}
\end{aligned}
$$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="540" height="565" viewBox="0 0 600 628" font-family="Times New Roman, serif" font-size="18" fill="currentColor"><g stroke="currentColor" stroke-width="1.8" fill="none"><line x1="76.0" y1="88.0" x2="164.0" y2="88.0"/>
<line x1="46.0" y1="136.0" x2="290.0" y2="136.0"/>
<line x1="210.0" y1="88.0" x2="252.0" y2="88.0"/>
<line x1="252.0" y1="88.0" x2="252.0" y2="150.0"/>
<line x1="252.0" y1="150.0" x2="290.0" y2="150.0"/>
<line x1="106.0" y1="164.0" x2="290.0" y2="164.0"/>
<line x1="46.0" y1="211.0" x2="164.0" y2="211.0"/>
<line x1="76.0" y1="225.0" x2="164.0" y2="225.0"/>
<line x1="46.0" y1="272.0" x2="164.0" y2="272.0"/>
<line x1="76.0" y1="286.0" x2="164.0" y2="286.0"/>
<line x1="106.0" y1="300.0" x2="164.0" y2="300.0"/>
<line x1="106.0" y1="348.0" x2="164.0" y2="348.0"/>
<line x1="46.0" y1="403.0" x2="290.0" y2="403.0"/>
<line x1="210.0" y1="348.0" x2="264.0" y2="348.0"/>
<line x1="264.0" y1="348.0" x2="264.0" y2="417.0"/>
<line x1="264.0" y1="417.0" x2="290.0" y2="417.0"/>
<line x1="46.0" y1="464.0" x2="290.0" y2="464.0"/>
<line x1="76.0" y1="478.0" x2="290.0" y2="478.0"/>
<line x1="210.0" y1="348.0" x2="276.0" y2="348.0"/>
<line x1="276.0" y1="348.0" x2="276.0" y2="492.0"/>
<line x1="276.0" y1="492.0" x2="290.0" y2="492.0"/>
<line x1="346.0" y1="150.0" x2="368.0" y2="150.0"/>
<line x1="368.0" y1="150.0" x2="368.0" y2="532.0"/>
<line x1="368.0" y1="532.0" x2="430.0" y2="532.0"/>
<line x1="220.0" y1="218.0" x2="380.0" y2="218.0"/>
<line x1="380.0" y1="218.0" x2="380.0" y2="546.0"/>
<line x1="380.0" y1="546.0" x2="430.0" y2="546.0"/>
<line x1="230.0" y1="286.0" x2="392.0" y2="286.0"/>
<line x1="392.0" y1="286.0" x2="392.0" y2="560.0"/>
<line x1="392.0" y1="560.0" x2="430.0" y2="560.0"/>
<line x1="346.0" y1="410.0" x2="404.0" y2="410.0"/>
<line x1="404.0" y1="410.0" x2="404.0" y2="574.0"/>
<line x1="404.0" y1="574.0" x2="430.0" y2="574.0"/>
<line x1="346.0" y1="478.0" x2="416.0" y2="478.0"/>
<line x1="416.0" y1="478.0" x2="416.0" y2="588.0"/>
<line x1="416.0" y1="588.0" x2="430.0" y2="588.0"/>
<circle cx="264.0" cy="348.0" r="3" fill="currentColor" stroke="none"/>
<line x1="46.0" y1="34.0" x2="46.0" y2="464.0"/>
<circle cx="46" cy="136.0" r="3" fill="currentColor" stroke="none"/>
<circle cx="46" cy="211.0" r="3" fill="currentColor" stroke="none"/>
<circle cx="46" cy="272.0" r="3" fill="currentColor" stroke="none"/>
<circle cx="46" cy="403.0" r="3" fill="currentColor" stroke="none"/>
<line x1="76.0" y1="34.0" x2="76.0" y2="478.0"/>
<circle cx="76" cy="88.0" r="3" fill="currentColor" stroke="none"/>
<circle cx="76" cy="225.0" r="3" fill="currentColor" stroke="none"/>
<circle cx="76" cy="286.0" r="3" fill="currentColor" stroke="none"/>
<line x1="106.0" y1="34.0" x2="106.0" y2="348.0"/>
<circle cx="106" cy="164.0" r="3" fill="currentColor" stroke="none"/>
<circle cx="106" cy="300.0" r="3" fill="currentColor" stroke="none"/>
<polygon points="164,68 164,108 200,88"/>
<circle cx="205" cy="88" r="5"/>
<path d="M290,124 H320 A26,26 0 0 1 320,176 H290 Z"/>
<path d="M164,192 H194 A26,26 0 0 1 194,244 H164 Z"/>
<path d="M164,260 H194 A26,26 0 0 1 194,312 H164 Z"/>
<circle cx="225" cy="286" r="5"/>
<polygon points="164,328 164,368 200,348"/>
<circle cx="205" cy="348" r="5"/>
<path d="M290,384 H320 A26,26 0 0 1 320,436 H290 Z"/>
<path d="M290,452 H320 A26,26 0 0 1 320,504 H290 Z"/>
<path d="M430,520.0 H460 A40.0,40.0 0 0 1 460,600.0 H430 Z"/>
<circle cx="505.0" cy="560.0" r="5"/>
<line x1="510.0" y1="560.0" x2="530.0" y2="560.0"/>
<circle cx="530.0" cy="560.0" r="3.5" fill="currentColor" stroke="none"/></g><text x="46" y="24" text-anchor="middle">A</text><text x="76" y="24" text-anchor="middle">B</text><text x="106" y="24" text-anchor="middle">C</text><text x="540.0" y="565.0">Y</text></svg>
</div>

---

### ข้อ 3  $Y = \overline{\overline{A}(B+\overline{C})}+\overline{A\cdot\overline{B}}+ABC$

$\mathbf{Sol}^{n}$

$$
\begin{aligned}
\text{Step 1 (NOT)} &:\ \overline{A},\ \overline{B},\ \overline{C}\\
\text{Step 2 (OR)} &:\ B+\overline{C}\\
\text{Step 3 (NAND)} &:\ \overline{\overline{A}(B+\overline{C})},\ \ \overline{A\cdot\overline{B}}\\
\text{Step 4 (AND)} &:\ ABC\\
\text{Step 5 (OR)} &:\ Y = \overline{\overline{A}(B+\overline{C})}+\overline{A\cdot\overline{B}}+ABC
\end{aligned}
$$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="596" height="529" viewBox="0 0 662 588" font-family="Times New Roman, serif" font-size="18" fill="currentColor"><g stroke="currentColor" stroke-width="1.8" fill="none"><line x1="46.0" y1="88.0" x2="164.0" y2="88.0"/>
<line x1="106.0" y1="144.0" x2="164.0" y2="144.0"/>
<line x1="76.0" y1="199.0" x2="274.5" y2="199.0"/>
<line x1="210.0" y1="144.0" x2="242.0" y2="144.0"/>
<line x1="242.0" y1="144.0" x2="242.0" y2="213.0"/>
<line x1="242.0" y1="213.0" x2="274.5" y2="213.0"/>
<line x1="210.0" y1="88.0" x2="356.0" y2="88.0"/>
<line x1="356.0" y1="88.0" x2="356.0" y2="267.0"/>
<line x1="356.0" y1="267.0" x2="382.0" y2="267.0"/>
<line x1="332.0" y1="206.0" x2="368.0" y2="206.0"/>
<line x1="368.0" y1="206.0" x2="368.0" y2="281.0"/>
<line x1="368.0" y1="281.0" x2="382.0" y2="281.0"/>
<line x1="76.0" y1="336.0" x2="164.0" y2="336.0"/>
<line x1="46.0" y1="391.0" x2="268.0" y2="391.0"/>
<line x1="210.0" y1="336.0" x2="254.0" y2="336.0"/>
<line x1="254.0" y1="336.0" x2="254.0" y2="405.0"/>
<line x1="254.0" y1="405.0" x2="268.0" y2="405.0"/>
<line x1="46.0" y1="452.0" x2="164.0" y2="452.0"/>
<line x1="76.0" y1="466.0" x2="164.0" y2="466.0"/>
<line x1="106.0" y1="480.0" x2="164.0" y2="480.0"/>
<line x1="448.0" y1="274.0" x2="470.0" y2="274.0"/>
<line x1="470.0" y1="274.0" x2="470.0" y2="520.0"/>
<line x1="470.0" y1="520.0" x2="513.0" y2="520.0"/>
<line x1="334.0" y1="398.0" x2="482.0" y2="398.0"/>
<line x1="482.0" y1="398.0" x2="482.0" y2="534.0"/>
<line x1="482.0" y1="534.0" x2="515.0" y2="534.0"/>
<line x1="220.0" y1="466.0" x2="494.0" y2="466.0"/>
<line x1="494.0" y1="466.0" x2="494.0" y2="548.0"/>
<line x1="494.0" y1="548.0" x2="513.0" y2="548.0"/>
<line x1="46.0" y1="34.0" x2="46.0" y2="452.0"/>
<circle cx="46" cy="88.0" r="3" fill="currentColor" stroke="none"/>
<circle cx="46" cy="391.0" r="3" fill="currentColor" stroke="none"/>
<line x1="76.0" y1="34.0" x2="76.0" y2="466.0"/>
<circle cx="76" cy="199.0" r="3" fill="currentColor" stroke="none"/>
<circle cx="76" cy="336.0" r="3" fill="currentColor" stroke="none"/>
<line x1="106.0" y1="34.0" x2="106.0" y2="480.0"/>
<circle cx="106" cy="144.0" r="3" fill="currentColor" stroke="none"/>
<polygon points="164,68 164,108 200,88"/>
<circle cx="205" cy="88" r="5"/>
<polygon points="164,124 164,164 200,144"/>
<circle cx="205" cy="144" r="5"/>
<path d="M268,180 C290,180 316,193.0 332,206 C316,219.0 290,232 268,232 Q282,206 268,180 Z"/>
<path d="M382,248 H412 A26,26 0 0 1 412,300 H382 Z"/>
<circle cx="443" cy="274" r="5"/>
<polygon points="164,316 164,356 200,336"/>
<circle cx="205" cy="336" r="5"/>
<path d="M268,372 H298 A26,26 0 0 1 298,424 H268 Z"/>
<circle cx="329" cy="398" r="5"/>
<path d="M164,440 H194 A26,26 0 0 1 194,492 H164 Z"/>
<path d="M508,508 C530,508 556,521.0 572,534 C556,547.0 530,560 508,560 Q522,534 508,508 Z"/>
<line x1="572.0" y1="534.0" x2="592.0" y2="534.0"/>
<circle cx="592" cy="534" r="3.5" fill="currentColor" stroke="none"/></g><text x="46" y="24" text-anchor="middle">A</text><text x="76" y="24" text-anchor="middle">B</text><text x="106" y="24" text-anchor="middle">C</text><text x="602" y="539">Y</text></svg>
</div>

---

## การหา Function Output ของเกตทุกตัวจากวงจรลอจิก

### ตัวอย่างที่ 1

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="544" height="466" viewBox="0 0 604 518" font-family="Times New Roman, serif" font-size="18" fill="currentColor"><g stroke="currentColor" stroke-width="1.8" fill="none"><line x1="46.0" y1="102.0" x2="205.0" y2="102.0"/>
<line x1="76.0" y1="116.0" x2="207.0" y2="116.0"/>
<line x1="106.0" y1="130.0" x2="205.0" y2="130.0"/>
<line x1="106.0" y1="200.0" x2="200.0" y2="200.0"/>
<line x1="264.0" y1="116.0" x2="286.0" y2="116.0"/>
<line x1="286.0" y1="116.0" x2="286.0" y2="277.0"/>
<line x1="286.0" y1="277.0" x2="330.0" y2="277.0"/>
<line x1="246.0" y1="200.0" x2="298.0" y2="200.0"/>
<line x1="298.0" y1="200.0" x2="298.0" y2="291.0"/>
<line x1="298.0" y1="291.0" x2="330.0" y2="291.0"/>
<line x1="246.0" y1="200.0" x2="310.0" y2="200.0"/>
<line x1="310.0" y1="200.0" x2="310.0" y2="367.0"/>
<line x1="310.0" y1="367.0" x2="330.0" y2="367.0"/>
<line x1="136.0" y1="381.0" x2="330.0" y2="381.0"/>
<line x1="396.0" y1="284.0" x2="418.0" y2="284.0"/>
<line x1="418.0" y1="284.0" x2="418.0" y2="457.0"/>
<line x1="418.0" y1="457.0" x2="446.5" y2="457.0"/>
<line x1="386.0" y1="374.0" x2="430.0" y2="374.0"/>
<line x1="430.0" y1="374.0" x2="430.0" y2="471.0"/>
<line x1="430.0" y1="471.0" x2="446.5" y2="471.0"/>
<circle cx="298.0" cy="200.0" r="3" fill="currentColor" stroke="none"/>
<line x1="46.0" y1="34.0" x2="46.0" y2="102.0"/>
<line x1="76.0" y1="34.0" x2="76.0" y2="116.0"/>
<line x1="106.0" y1="34.0" x2="106.0" y2="200.0"/>
<circle cx="106" cy="130.0" r="3" fill="currentColor" stroke="none"/>
<line x1="136.0" y1="34.0" x2="136.0" y2="381.0"/>
<path d="M200,90 C222,90 248,103.0 264,116 C248,129.0 222,142 200,142 Q214,116 200,90 Z"/>
<rect x="204" y="64" width="22" height="20" stroke-width="1.4"/>
<polygon points="200,180 200,220 236,200"/>
<rect x="204" y="154" width="22" height="20" stroke-width="1.4"/>
<circle cx="241" cy="200" r="5"/>
<path d="M330,258 H360 A26,26 0 0 1 360,310 H330 Z"/>
<rect x="334" y="232" width="22" height="20" stroke-width="1.4"/>
<circle cx="391" cy="284" r="5"/>
<path d="M330,348 H360 A26,26 0 0 1 360,400 H330 Z"/>
<rect x="334" y="322" width="22" height="20" stroke-width="1.4"/>
<path d="M440,438 Q454,464 440,490"/><path d="M450,438 C472,438 498,451.0 514,464 C498,477.0 472,490 450,490 Q464,464 450,438 Z"/>
<rect x="454" y="412" width="22" height="20" stroke-width="1.4"/>
<line x1="514.0" y1="464.0" x2="534.0" y2="464.0"/>
<circle cx="534" cy="464" r="3.5" fill="currentColor" stroke="none"/></g><text x="46" y="24" text-anchor="middle">A</text><text x="76" y="24" text-anchor="middle">B</text><text x="106" y="24" text-anchor="middle">C</text><text x="136" y="24" text-anchor="middle">D</text><text x="215" y="79" text-anchor="middle" font-size="15">1</text><text x="215" y="169" text-anchor="middle" font-size="15">2</text><text x="345" y="247" text-anchor="middle" font-size="15">3</text><text x="345" y="337" text-anchor="middle" font-size="15">4</text><text x="465" y="427" text-anchor="middle" font-size="15">5</text></svg>
</div>

$\mathbf{Sol}^{n}$

$$
\begin{aligned}
Y_1 &= A+B+C \\
Y_2 &= \overline{C} \\
Y_3 &= \overline{Y_1\cdot Y_2} = \overline{(A+B+C)\,\overline{C}} \\
Y_4 &= Y_2\cdot D = \overline{C}D \\
Y_5 &= Y_3\oplus Y_4 = \overline{(A+B+C)\,\overline{C}}\ \oplus\ \overline{C}D
\end{aligned}
$$

---

### ตัวอย่างที่ 2

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="488" height="396" viewBox="0 0 542 440" font-family="Times New Roman, serif" font-size="18" fill="currentColor"><g stroke="currentColor" stroke-width="1.8" fill="none"><line x1="46.0" y1="109.0" x2="146.5" y2="109.0"/>
<line x1="76.0" y1="123.0" x2="146.5" y2="123.0"/>
<line x1="46.0" y1="199.0" x2="258.0" y2="199.0"/>
<line x1="204.0" y1="116.0" x2="226.0" y2="116.0"/>
<line x1="226.0" y1="116.0" x2="226.0" y2="213.0"/>
<line x1="226.0" y1="213.0" x2="258.0" y2="213.0"/>
<line x1="204.0" y1="116.0" x2="238.0" y2="116.0"/>
<line x1="238.0" y1="116.0" x2="238.0" y2="289.0"/>
<line x1="238.0" y1="289.0" x2="258.0" y2="289.0"/>
<line x1="76.0" y1="303.0" x2="258.0" y2="303.0"/>
<line x1="324.0" y1="206.0" x2="346.0" y2="206.0"/>
<line x1="346.0" y1="206.0" x2="346.0" y2="379.0"/>
<line x1="346.0" y1="379.0" x2="384.5" y2="379.0"/>
<line x1="314.0" y1="296.0" x2="358.0" y2="296.0"/>
<line x1="358.0" y1="296.0" x2="358.0" y2="393.0"/>
<line x1="358.0" y1="393.0" x2="384.5" y2="393.0"/>
<circle cx="226.0" cy="116.0" r="3" fill="currentColor" stroke="none"/>
<line x1="46.0" y1="34.0" x2="46.0" y2="199.0"/>
<circle cx="46" cy="109.0" r="3" fill="currentColor" stroke="none"/>
<line x1="76.0" y1="34.0" x2="76.0" y2="303.0"/>
<circle cx="76" cy="123.0" r="3" fill="currentColor" stroke="none"/>
<path d="M140,90 C162,90 188,103.0 204,116 C188,129.0 162,142 140,142 Q154,116 140,90 Z"/>
<rect x="144" y="64" width="22" height="20" stroke-width="1.4"/>
<path d="M258,180 H288 A26,26 0 0 1 288,232 H258 Z"/>
<rect x="262" y="154" width="22" height="20" stroke-width="1.4"/>
<circle cx="319" cy="206" r="5"/>
<path d="M258,270 H288 A26,26 0 0 1 288,322 H258 Z"/>
<rect x="262" y="244" width="22" height="20" stroke-width="1.4"/>
<path d="M378,360 C400,360 426,373.0 442,386 C426,399.0 400,412 378,412 Q392,386 378,360 Z"/>
<rect x="382" y="334" width="22" height="20" stroke-width="1.4"/>
<circle cx="447" cy="386" r="5"/>
<line x1="452.0" y1="386.0" x2="472.0" y2="386.0"/>
<circle cx="472" cy="386" r="3.5" fill="currentColor" stroke="none"/></g><text x="46" y="24" text-anchor="middle">A</text><text x="76" y="24" text-anchor="middle">B</text><text x="155" y="79" text-anchor="middle" font-size="15">1</text><text x="273" y="169" text-anchor="middle" font-size="15">2</text><text x="273" y="259" text-anchor="middle" font-size="15">3</text><text x="393" y="349" text-anchor="middle" font-size="15">4</text></svg>
</div>

$\mathbf{Sol}^{n}$

$$
\begin{aligned}
Y_1 &= A+B \\
Y_2 &= \overline{A\cdot Y_1} = \overline{A(A+B)} \\
Y_3 &= Y_1\cdot B = (A+B)B \\
Y_4 &= \overline{Y_2+Y_3} = \overline{\overline{A(A+B)}+(A+B)B}
\end{aligned}
$$

---

## Assignment 2.2 จงหา Function Output ของเกตทุกตัว จากวงจรลอจิกที่กำหนดให้

### ข้อ 1

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="668" height="628" viewBox="0 0 742 698" font-family="Times New Roman, serif" font-size="18" fill="currentColor"><g stroke="currentColor" stroke-width="1.8" fill="none"><line x1="46.0" y1="109.0" x2="200.0" y2="109.0"/>
<line x1="76.0" y1="123.0" x2="200.0" y2="123.0"/>
<line x1="46.0" y1="199.0" x2="200.0" y2="199.0"/>
<line x1="106.0" y1="213.0" x2="200.0" y2="213.0"/>
<line x1="266.0" y1="206.0" x2="288.0" y2="206.0"/>
<line x1="288.0" y1="206.0" x2="288.0" y2="290.0"/>
<line x1="288.0" y1="290.0" x2="332.0" y2="290.0"/>
<line x1="266.0" y1="116.0" x2="428.0" y2="116.0"/>
<line x1="428.0" y1="116.0" x2="428.0" y2="367.0"/>
<line x1="428.0" y1="367.0" x2="466.5" y2="367.0"/>
<line x1="378.0" y1="290.0" x2="440.0" y2="290.0"/>
<line x1="440.0" y1="290.0" x2="440.0" y2="381.0"/>
<line x1="440.0" y1="381.0" x2="466.5" y2="381.0"/>
<line x1="106.0" y1="457.0" x2="200.0" y2="457.0"/>
<line x1="136.0" y1="471.0" x2="200.0" y2="471.0"/>
<line x1="266.0" y1="206.0" x2="300.0" y2="206.0"/>
<line x1="300.0" y1="206.0" x2="300.0" y2="547.0"/>
<line x1="300.0" y1="547.0" x2="338.5" y2="547.0"/>
<line x1="266.0" y1="464.0" x2="312.0" y2="464.0"/>
<line x1="312.0" y1="464.0" x2="312.0" y2="561.0"/>
<line x1="312.0" y1="561.0" x2="338.5" y2="561.0"/>
<line x1="534.0" y1="374.0" x2="556.0" y2="374.0"/>
<line x1="556.0" y1="374.0" x2="556.0" y2="637.0"/>
<line x1="556.0" y1="637.0" x2="584.5" y2="637.0"/>
<line x1="406.0" y1="554.0" x2="568.0" y2="554.0"/>
<line x1="568.0" y1="554.0" x2="568.0" y2="651.0"/>
<line x1="568.0" y1="651.0" x2="584.5" y2="651.0"/>
<circle cx="288.0" cy="206.0" r="3" fill="currentColor" stroke="none"/>
<line x1="46.0" y1="34.0" x2="46.0" y2="199.0"/>
<circle cx="46" cy="109.0" r="3" fill="currentColor" stroke="none"/>
<line x1="76.0" y1="34.0" x2="76.0" y2="123.0"/>
<line x1="106.0" y1="34.0" x2="106.0" y2="457.0"/>
<circle cx="106" cy="213.0" r="3" fill="currentColor" stroke="none"/>
<line x1="136.0" y1="34.0" x2="136.0" y2="471.0"/>
<path d="M200,90 H230 A26,26 0 0 1 230,142 H200 Z"/>
<rect x="204" y="64" width="22" height="20" stroke-width="1.4"/>
<circle cx="261" cy="116" r="5"/>
<path d="M200,180 H230 A26,26 0 0 1 230,232 H200 Z"/>
<rect x="204" y="154" width="22" height="20" stroke-width="1.4"/>
<circle cx="261" cy="206" r="5"/>
<polygon points="332,270 332,310 368,290"/>
<rect x="336" y="244" width="22" height="20" stroke-width="1.4"/>
<circle cx="373" cy="290" r="5"/>
<path d="M460,348 C482,348 508,361.0 524,374 C508,387.0 482,400 460,400 Q474,374 460,348 Z"/>
<rect x="464" y="322" width="22" height="20" stroke-width="1.4"/>
<circle cx="529" cy="374" r="5"/>
<path d="M200,438 H230 A26,26 0 0 1 230,490 H200 Z"/>
<rect x="204" y="412" width="22" height="20" stroke-width="1.4"/>
<circle cx="261" cy="464" r="5"/>
<path d="M332,528 C354,528 380,541.0 396,554 C380,567.0 354,580 332,580 Q346,554 332,528 Z"/>
<rect x="336" y="502" width="22" height="20" stroke-width="1.4"/>
<circle cx="401" cy="554" r="5"/>
<path d="M578,618 Q592,644 578,670"/><path d="M588,618 C610,618 636,631.0 652,644 C636,657.0 610,670 588,670 Q602,644 588,618 Z"/>
<rect x="592" y="592" width="22" height="20" stroke-width="1.4"/>
<line x1="652.0" y1="644.0" x2="672.0" y2="644.0"/>
<circle cx="672" cy="644" r="3.5" fill="currentColor" stroke="none"/></g><text x="46" y="24" text-anchor="middle">A</text><text x="76" y="24" text-anchor="middle">B</text><text x="106" y="24" text-anchor="middle" text-decoration="overline">C</text><text x="136" y="24" text-anchor="middle">D</text><text x="215" y="79" text-anchor="middle" font-size="15">1</text><text x="215" y="169" text-anchor="middle" font-size="15">2</text><text x="347" y="259" text-anchor="middle" font-size="15">4</text><text x="475" y="337" text-anchor="middle" font-size="15">5</text><text x="215" y="427" text-anchor="middle" font-size="15">3</text><text x="347" y="517" text-anchor="middle" font-size="15">6</text><text x="603" y="607" text-anchor="middle" font-size="15">7</text></svg>
</div>

$\mathbf{Sol}^{n}$

$$
\begin{aligned}
Y_1 &= \overline{AB} \\
Y_2 &= \overline{A\overline{C}} \\
Y_3 &= \overline{\overline{C}D} \\
Y_4 &= \overline{Y_2} = \overline{\overline{A\overline{C}}} \\
Y_5 &= \overline{Y_1+Y_4} = \overline{\overline{AB}+A\overline{C}} \\
Y_6 &= \overline{Y_2+Y_3} = \overline{\overline{A\overline{C}}+\overline{\overline{C}D}} \\
Y_7 &= Y_5\oplus Y_6 = \overline{\overline{AB}+A\overline{C}}\ \oplus\ \overline{\overline{A\overline{C}}+\overline{\overline{C}D}}
\end{aligned}
$$

---

### ข้อ 2

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="650" height="547" viewBox="0 0 722 608" font-family="Times New Roman, serif" font-size="18" fill="currentColor"><g stroke="currentColor" stroke-width="1.8" fill="none"><line x1="46.0" y1="110.0" x2="230.0" y2="110.0"/>
<line x1="276.0" y1="110.0" x2="308.0" y2="110.0"/>
<line x1="308.0" y1="110.0" x2="308.0" y2="187.0"/>
<line x1="308.0" y1="187.0" x2="340.0" y2="187.0"/>
<line x1="76.0" y1="201.0" x2="340.0" y2="201.0"/>
<line x1="136.0" y1="277.0" x2="454.5" y2="277.0"/>
<line x1="406.0" y1="194.0" x2="428.0" y2="194.0"/>
<line x1="428.0" y1="194.0" x2="428.0" y2="291.0"/>
<line x1="428.0" y1="291.0" x2="454.5" y2="291.0"/>
<line x1="76.0" y1="367.0" x2="230.0" y2="367.0"/>
<line x1="106.0" y1="381.0" x2="230.0" y2="381.0"/>
<line x1="286.0" y1="374.0" x2="320.0" y2="374.0"/>
<line x1="320.0" y1="374.0" x2="320.0" y2="457.0"/>
<line x1="320.0" y1="457.0" x2="340.0" y2="457.0"/>
<line x1="166.0" y1="471.0" x2="340.0" y2="471.0"/>
<line x1="512.0" y1="284.0" x2="534.0" y2="284.0"/>
<line x1="534.0" y1="284.0" x2="534.0" y2="547.0"/>
<line x1="534.0" y1="547.0" x2="566.0" y2="547.0"/>
<line x1="396.0" y1="464.0" x2="546.0" y2="464.0"/>
<line x1="546.0" y1="464.0" x2="546.0" y2="561.0"/>
<line x1="546.0" y1="561.0" x2="566.0" y2="561.0"/>
<line x1="46.0" y1="34.0" x2="46.0" y2="110.0"/>
<line x1="76.0" y1="34.0" x2="76.0" y2="367.0"/>
<circle cx="76" cy="201.0" r="3" fill="currentColor" stroke="none"/>
<line x1="106.0" y1="34.0" x2="106.0" y2="381.0"/>
<line x1="136.0" y1="34.0" x2="136.0" y2="277.0"/>
<line x1="166.0" y1="34.0" x2="166.0" y2="471.0"/>
<polygon points="230,90 230,130 266,110"/>
<rect x="234" y="64" width="22" height="20" stroke-width="1.4"/>
<circle cx="271" cy="110" r="5"/>
<path d="M340,168 H370 A26,26 0 0 1 370,220 H340 Z"/>
<rect x="344" y="142" width="22" height="20" stroke-width="1.4"/>
<circle cx="401" cy="194" r="5"/>
<path d="M448,258 C470,258 496,271.0 512,284 C496,297.0 470,310 448,310 Q462,284 448,258 Z"/>
<rect x="452" y="232" width="22" height="20" stroke-width="1.4"/>
<path d="M230,348 H260 A26,26 0 0 1 260,400 H230 Z"/>
<rect x="234" y="322" width="22" height="20" stroke-width="1.4"/>
<path d="M340,438 H370 A26,26 0 0 1 370,490 H340 Z"/>
<rect x="344" y="412" width="22" height="20" stroke-width="1.4"/>
<path d="M566,528 H596 A26,26 0 0 1 596,580 H566 Z"/>
<rect x="570" y="502" width="22" height="20" stroke-width="1.4"/>
<circle cx="627" cy="554" r="5"/>
<line x1="632.0" y1="554.0" x2="652.0" y2="554.0"/>
<circle cx="652" cy="554" r="3.5" fill="currentColor" stroke="none"/></g><text x="46" y="24" text-anchor="middle">A</text><text x="76" y="24" text-anchor="middle">B</text><text x="106" y="24" text-anchor="middle">C</text><text x="136" y="24" text-anchor="middle">D</text><text x="166" y="24" text-anchor="middle">E</text><text x="245" y="79" text-anchor="middle" font-size="15">1</text><text x="355" y="157" text-anchor="middle" font-size="15">2</text><text x="463" y="247" text-anchor="middle" font-size="15">4</text><text x="245" y="337" text-anchor="middle" font-size="15">3</text><text x="355" y="427" text-anchor="middle" font-size="15">5</text><text x="581" y="517" text-anchor="middle" font-size="15">6</text></svg>
</div>

$\mathbf{Sol}^{n}$

$$
\begin{aligned}
Y_1 &= \overline{A} \\
Y_2 &= \overline{Y_1\cdot B} = \overline{\overline{A}B} \\
Y_3 &= B\cdot C = BC \\
Y_4 &= D+Y_2 = D+\overline{\overline{A}B} \\
Y_5 &= Y_3\cdot E = BCE \\
Y_6 &= \overline{Y_4\cdot Y_5} = \overline{\left(D+\overline{\overline{A}B}\right)BCE}
\end{aligned}
$$

---

## SOP (Sum of Product) และ Minterm

### ตัวอย่างที่ 1  $F(A,B,C) = \overline{A}B\overline{C} + AB\overline{C} + \overline{A}BC$

$\mathbf{Sol}^{n}$

$$
\begin{aligned}
\overline{A}B\overline{C} &= 010_2 = 2 &&\Rightarrow m_2 \\
AB\overline{C} &= 110_2 = 6 &&\Rightarrow m_6 \\
\overline{A}BC &= 011_2 = 3 &&\Rightarrow m_3 \\
F(A,B,C) &= m_2+m_6+m_3 = \sum m(2,3,6)
\end{aligned}
$$

---

### ตัวอย่างที่ 2  $f(A,B,C) = \overline{A}C + A\overline{B}C + B\overline{C}$

$\mathbf{Sol}^{n}$

$$
\begin{aligned}
f(A,B,C) &= \overline{A}C + A\overline{B}C + B\overline{C} \\
&= \overline{A}C(B+\overline{B}) + A\overline{B}C + B\overline{C}(A+\overline{A}) \\
&= \overline{A}BC + \overline{A}\,\overline{B}C + A\overline{B}C + AB\overline{C} + \overline{A}B\overline{C} \\
&= m_3 + m_1 + m_5 + m_6 + m_2 \\
&= \sum m(1,2,3,5,6)
\end{aligned}
$$

---

### ตัวอย่างที่ 3  จงเขียน Canonical sum of product form จาก

### ก)  $f(A,B,C) = \sum m(0,2,4,6)$

$\mathbf{Sol}^{n}$

$$
\begin{aligned}
f(A,B,C) &= \sum m(0,2,4,6) \\
&= m_0+m_2+m_4+m_6 \\
&= \overline{A}\,\overline{B}\,\overline{C}+\overline{A}\,B\overline{C}+A\overline{B}\,\overline{C}+AB\overline{C}
\end{aligned}
$$

### ข)  $f(A,B,C,D) = \sum m(0,2,4,6)$

$\mathbf{Sol}^{n}$

$$
\begin{aligned}
f(A,B,C,D) &= \sum m(0,2,4,6) \\
&= m_0+m_2+m_4+m_6 \\
&= \overline{A}\,\overline{B}\,\overline{C}\,\overline{D}+\overline{A}\,\overline{B}\,C\overline{D}+\overline{A}\,B\overline{C}\,\overline{D}+\overline{A}\,BC\overline{D}
\end{aligned}
$$

---

## POS (Product of Sum) และ Maxterm

### ตัวอย่างที่ 4  $F(A,B,C) = (A+B+C)(A+B+\overline{C})(\overline{A}+B+\overline{C})$

$\mathbf{Sol}^{n}$

$$
\begin{aligned}
A+B+C &= 000_2 = 0 &&\Rightarrow M_0 \\
A+B+\overline{C} &= 001_2 = 1 &&\Rightarrow M_1 \\
\overline{A}+B+\overline{C} &= 101_2 = 5 &&\Rightarrow M_5 \\
F(A,B,C) &= M_0\cdot M_1\cdot M_5 = \prod M(0,1,5)
\end{aligned}
$$

---

### ตัวอย่างที่ 5  $f(A,B,C) = (\overline{A}+C)(A+\overline{B}+C)(B+\overline{C})$

$\mathbf{Sol}^{n}$

$$
\begin{aligned}
f(A,B,C) &= (\overline{A}+C)(A+\overline{B}+C)(B+\overline{C}) \\
&= (\overline{A}+C+B\overline{B})(A+\overline{B}+C)(B+\overline{C}+A\overline{A}) \\
&= (\overline{A}+B+C)(\overline{A}+\overline{B}+C)(A+\overline{B}+C)(A+B+\overline{C})(\overline{A}+B+\overline{C}) \\
&= M_4\cdot M_6\cdot M_2\cdot M_1\cdot M_5 \\
&= \prod M(1,2,4,5,6)
\end{aligned}
$$

---

### ตัวอย่างที่ 6  จงเขียน Canonical product of sum form จาก

### ก)  $f(A,B,C) = \prod M(0,2,4,6)$

$\mathbf{Sol}^{n}$

$$
\begin{aligned}
f(A,B,C) &= \prod M(0,2,4,6) \\
&= M_0\cdot M_2\cdot M_4\cdot M_6 \\
&= (A+B+C)(A+\overline{B}+C)(\overline{A}+B+C)(\overline{A}+\overline{B}+C)
\end{aligned}
$$

### ข)  $f(A,B,C,D) = \prod M(0,2,4,6)$

$\mathbf{Sol}^{n}$

$$
\begin{aligned}
f(A,B,C,D) &= \prod M(0,2,4,6) \\
&= M_0\cdot M_2\cdot M_4\cdot M_6 \\
&= (A+B+C+D)(A+B+\overline{C}+D)(A+\overline{B}+C+D)(A+\overline{B}+\overline{C}+D)
\end{aligned}
$$

---

## เวนไดอะแกรม (Venn Diagram)

### ตัวอย่าง  จงพิสูจน์ว่า $A+BC = (A+B)(A+C)$ โดยใช้เวนไดอะแกรม

$\mathbf{Sol}^{n}$

ฝั่งซ้าย $A+BC$ คือรวมพื้นที่ของ $A$ กับพื้นที่ซ้อนกันของ $B$ และ $C$ (OR)

ฝั่งขวา $(A+B)(A+C)$ คือส่วนที่ซ้อนกันของพื้นที่ $A+B$ กับ $A+C$ (AND)

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

พื้นที่แรเงาของทั้งสองฝั่งเหมือนกัน ดังนั้น

$$
A+BC = (A+B)(A+C)
$$

---

## Assignment 2.3

### ข้อ 1  จงเขียนฟังก์ชันสมการ Min Term  $F(A,B,C) = \sum m(2,3,6,7)$

$\mathbf{Sol}^{n}$

$$
\begin{aligned}
F(A,B,C) &= \sum m(2,3,6,7) \\
&= m_2+m_3+m_6+m_7 \\
&= \overline{A}\,B\overline{C}+\overline{A}\,BC+AB\overline{C}+ABC
\end{aligned}
$$

---

### ข้อ 2  จงเขียนฟังก์ชันสมการ Max Term  $F(A,B,C) = \prod M(2,3,6,7)$

$\mathbf{Sol}^{n}$

$$
\begin{aligned}
F(A,B,C) &= \prod M(2,3,6,7) \\
&= M_2\cdot M_3\cdot M_6\cdot M_7 \\
&= (A+\overline{B}+C)(A+\overline{B}+\overline{C})(\overline{A}+\overline{B}+C)(\overline{A}+\overline{B}+\overline{C})
\end{aligned}
$$

---

### ข้อ 3  จากตารางความจริง จงเขียนสมการในรูปของ Max Term

$$
\begin{array}{|c|c|c|c|c|}
\hline
\text{Dec} & C & B & A & \text{Output} \\
\hline
0 & 0 & 0 & 0 & 0 \\
\hline
1 & 0 & 0 & 1 & 0 \\
\hline
2 & 0 & 1 & 0 & 1 \\
\hline
3 & 0 & 1 & 1 & 0 \\
\hline
4 & 1 & 0 & 0 & 1 \\
\hline
5 & 1 & 0 & 1 & 1 \\
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
\text{Output}=0 &:\ \text{Dec } 0,1,3,6 \\
\text{Dec }0 \ (CBA=000) &\Rightarrow M_0 = A+B+C \\
\text{Dec }1 \ (CBA=001) &\Rightarrow M_1 = \overline{A}+B+C \\
\text{Dec }3 \ (CBA=011) &\Rightarrow M_3 = \overline{A}+\overline{B}+C \\
\text{Dec }6 \ (CBA=110) &\Rightarrow M_6 = A+\overline{B}+\overline{C} \\
F &= M_0\cdot M_1\cdot M_3\cdot M_6 = \prod M(0,1,3,6) \\
&= (A+B+C)(\overline{A}+B+C)(\overline{A}+\overline{B}+C)(A+\overline{B}+\overline{C})
\end{aligned}
$$

---

### ข้อ 4  จากตารางความจริง จงเขียนสมการในรูปของ Min Term และ Max Term

$$
\begin{array}{|c|c|c|c|c|c|}
\hline
\text{Dec} & D & C & B & A & \text{Output} \\
\hline
0 & 0 & 0 & 0 & 0 & 0 \\
\hline
1 & 0 & 0 & 0 & 1 & 1 \\
\hline
2 & 0 & 0 & 1 & 0 & 0 \\
\hline
3 & 0 & 0 & 1 & 1 & 1 \\
\hline
4 & 0 & 1 & 0 & 0 & 1 \\
\hline
5 & 0 & 1 & 0 & 1 & 1 \\
\hline
6 & 0 & 1 & 1 & 0 & 0 \\
\hline
7 & 0 & 1 & 1 & 1 & 0 \\
\hline
8 & 1 & 0 & 0 & 0 & 0 \\
\hline
9 & 1 & 0 & 0 & 1 & 1 \\
\hline
10 & 1 & 0 & 1 & 0 & 1 \\
\hline
11 & 1 & 0 & 1 & 1 & 1 \\
\hline
12 & 1 & 1 & 0 & 0 & 0 \\
\hline
13 & 1 & 1 & 0 & 1 & 1 \\
\hline
14 & 1 & 1 & 1 & 0 & 0 \\
\hline
15 & 1 & 1 & 1 & 1 & 1 \\
\hline
\end{array}
$$

$\mathbf{Sol}^{n}$

$$
\begin{aligned}
\text{Min Term (Output}=1) &:\ \text{Dec } 1,3,4,5,9,10,11,13,15 \\
F &= \sum m(1,3,4,5,9,10,11,13,15) \\
&= \overline{D}\,\overline{C}\,\overline{B}\,A+\overline{D}\,\overline{C}\,BA+\overline{D}\,C\overline{B}\,\overline{A} \\
&\quad + \overline{D}\,C\overline{B}\,A+D\overline{C}\,\overline{B}\,A+D\overline{C}\,B\overline{A} \\
&\quad + D\overline{C}\,BA+DC\overline{B}\,A+DCBA
\end{aligned}
$$

$$
\begin{aligned}
\text{Max Term (Output}=0) &:\ \text{Dec } 0,2,6,7,8,12,14 \\
F &= \prod M(0,2,6,7,8,12,14) \\
&= (D+C+B+A)(D+C+\overline{B}+A)(D+\overline{C}+\overline{B}+A) \\
&\quad (D+\overline{C}+\overline{B}+\overline{A})(\overline{D}+C+B+A)(\overline{D}+\overline{C}+B+A) \\
&\quad (\overline{D}+\overline{C}+\overline{B}+A)
\end{aligned}
$$

---

### ข้อ 5  จงออกแบบวงจรลอจิกจาก  $f(A,B,C) = \sum m(0,1,2,3,4,7)$

$\mathbf{Sol}^{n}$

$$
\begin{aligned}
f(A,B,C) &= \sum m(0,1,2,3,4,7) \\
&= m_0+m_1+m_2+m_3+m_4+m_7 \\
&= \overline{A}\,\overline{B}\,\overline{C}+\overline{A}\,\overline{B}\,C+\overline{A}\,B\overline{C} \\
&\quad + \overline{A}\,BC+A\overline{B}\,\overline{C}+ABC
\end{aligned}
$$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="619" height="689" viewBox="0 0 688 766" font-family="Times New Roman, serif" font-size="18" fill="currentColor"><g stroke="currentColor" stroke-width="1.8" fill="none"><line x1="46.0" y1="88.0" x2="170.0" y2="88.0"/>
<line x1="76.0" y1="144.0" x2="170.0" y2="144.0"/>
<line x1="106.0" y1="200.0" x2="170.0" y2="200.0"/>
<line x1="216.0" y1="88.0" x2="248.0" y2="88.0"/>
<line x1="248.0" y1="88.0" x2="248.0" y2="248.0"/>
<line x1="248.0" y1="248.0" x2="376.0" y2="248.0"/>
<line x1="216.0" y1="144.0" x2="260.0" y2="144.0"/>
<line x1="260.0" y1="144.0" x2="260.0" y2="262.0"/>
<line x1="260.0" y1="262.0" x2="376.0" y2="262.0"/>
<line x1="216.0" y1="200.0" x2="272.0" y2="200.0"/>
<line x1="272.0" y1="200.0" x2="272.0" y2="276.0"/>
<line x1="272.0" y1="276.0" x2="376.0" y2="276.0"/>
<line x1="216.0" y1="88.0" x2="284.0" y2="88.0"/>
<line x1="284.0" y1="88.0" x2="284.0" y2="316.0"/>
<line x1="284.0" y1="316.0" x2="376.0" y2="316.0"/>
<line x1="216.0" y1="144.0" x2="296.0" y2="144.0"/>
<line x1="296.0" y1="144.0" x2="296.0" y2="330.0"/>
<line x1="296.0" y1="330.0" x2="376.0" y2="330.0"/>
<line x1="106.0" y1="344.0" x2="376.0" y2="344.0"/>
<line x1="216.0" y1="88.0" x2="308.0" y2="88.0"/>
<line x1="308.0" y1="88.0" x2="308.0" y2="384.0"/>
<line x1="308.0" y1="384.0" x2="376.0" y2="384.0"/>
<line x1="76.0" y1="398.0" x2="376.0" y2="398.0"/>
<line x1="216.0" y1="200.0" x2="320.0" y2="200.0"/>
<line x1="320.0" y1="200.0" x2="320.0" y2="412.0"/>
<line x1="320.0" y1="412.0" x2="376.0" y2="412.0"/>
<line x1="216.0" y1="88.0" x2="332.0" y2="88.0"/>
<line x1="332.0" y1="88.0" x2="332.0" y2="452.0"/>
<line x1="332.0" y1="452.0" x2="376.0" y2="452.0"/>
<line x1="76.0" y1="466.0" x2="376.0" y2="466.0"/>
<line x1="106.0" y1="480.0" x2="376.0" y2="480.0"/>
<line x1="46.0" y1="520.0" x2="376.0" y2="520.0"/>
<line x1="216.0" y1="144.0" x2="344.0" y2="144.0"/>
<line x1="344.0" y1="144.0" x2="344.0" y2="534.0"/>
<line x1="344.0" y1="534.0" x2="376.0" y2="534.0"/>
<line x1="216.0" y1="200.0" x2="356.0" y2="200.0"/>
<line x1="356.0" y1="200.0" x2="356.0" y2="548.0"/>
<line x1="356.0" y1="548.0" x2="376.0" y2="548.0"/>
<line x1="46.0" y1="588.0" x2="170.0" y2="588.0"/>
<line x1="76.0" y1="602.0" x2="170.0" y2="602.0"/>
<line x1="106.0" y1="616.0" x2="170.0" y2="616.0"/>
<line x1="432.0" y1="262.0" x2="454.0" y2="262.0"/>
<line x1="454.0" y1="262.0" x2="454.0" y2="656.0"/>
<line x1="454.0" y1="656.0" x2="537.1" y2="656.0"/>
<line x1="432.0" y1="330.0" x2="466.0" y2="330.0"/>
<line x1="466.0" y1="330.0" x2="466.0" y2="670.0"/>
<line x1="466.0" y1="670.0" x2="539.6" y2="670.0"/>
<line x1="432.0" y1="398.0" x2="478.0" y2="398.0"/>
<line x1="478.0" y1="398.0" x2="478.0" y2="684.0"/>
<line x1="478.0" y1="684.0" x2="540.8" y2="684.0"/>
<line x1="432.0" y1="466.0" x2="490.0" y2="466.0"/>
<line x1="490.0" y1="466.0" x2="490.0" y2="698.0"/>
<line x1="490.0" y1="698.0" x2="540.8" y2="698.0"/>
<line x1="432.0" y1="534.0" x2="502.0" y2="534.0"/>
<line x1="502.0" y1="534.0" x2="502.0" y2="712.0"/>
<line x1="502.0" y1="712.0" x2="539.6" y2="712.0"/>
<line x1="226.0" y1="602.0" x2="514.0" y2="602.0"/>
<line x1="514.0" y1="602.0" x2="514.0" y2="726.0"/>
<line x1="514.0" y1="726.0" x2="537.1" y2="726.0"/>
<circle cx="248.0" cy="88.0" r="3" fill="currentColor" stroke="none"/>
<circle cx="284.0" cy="88.0" r="3" fill="currentColor" stroke="none"/>
<circle cx="308.0" cy="88.0" r="3" fill="currentColor" stroke="none"/>
<circle cx="260.0" cy="144.0" r="3" fill="currentColor" stroke="none"/>
<circle cx="296.0" cy="144.0" r="3" fill="currentColor" stroke="none"/>
<circle cx="272.0" cy="200.0" r="3" fill="currentColor" stroke="none"/>
<circle cx="320.0" cy="200.0" r="3" fill="currentColor" stroke="none"/>
<line x1="46.0" y1="34.0" x2="46.0" y2="588.0"/>
<circle cx="46" cy="88.0" r="3" fill="currentColor" stroke="none"/>
<circle cx="46" cy="520.0" r="3" fill="currentColor" stroke="none"/>
<line x1="76.0" y1="34.0" x2="76.0" y2="602.0"/>
<circle cx="76" cy="144.0" r="3" fill="currentColor" stroke="none"/>
<circle cx="76" cy="398.0" r="3" fill="currentColor" stroke="none"/>
<circle cx="76" cy="466.0" r="3" fill="currentColor" stroke="none"/>
<line x1="106.0" y1="34.0" x2="106.0" y2="616.0"/>
<circle cx="106" cy="200.0" r="3" fill="currentColor" stroke="none"/>
<circle cx="106" cy="344.0" r="3" fill="currentColor" stroke="none"/>
<circle cx="106" cy="480.0" r="3" fill="currentColor" stroke="none"/>
<polygon points="170,68 170,108 206,88"/>
<circle cx="211" cy="88" r="5"/>
<polygon points="170,124 170,164 206,144"/>
<circle cx="211" cy="144" r="5"/>
<polygon points="170,180 170,220 206,200"/>
<circle cx="211" cy="200" r="5"/>
<path d="M376,236 H406 A26,26 0 0 1 406,288 H376 Z"/>
<path d="M376,304 H406 A26,26 0 0 1 406,356 H376 Z"/>
<path d="M376,372 H406 A26,26 0 0 1 406,424 H376 Z"/>
<path d="M376,440 H406 A26,26 0 0 1 406,492 H376 Z"/>
<path d="M376,508 H406 A26,26 0 0 1 406,560 H376 Z"/>
<path d="M170,576 H200 A26,26 0 0 1 200,628 H170 Z"/>
<path d="M534,644.0 C556,644.0 582,667.5 598,691.0 C582,714.5 556,738.0 534,738.0 Q548,691.0 534,644.0 Z"/>
<line x1="598.0" y1="691.0" x2="618.0" y2="691.0"/>
<circle cx="618" cy="691.0" r="3.5" fill="currentColor" stroke="none"/></g><text x="46" y="24" text-anchor="middle">A</text><text x="76" y="24" text-anchor="middle">B</text><text x="106" y="24" text-anchor="middle">C</text><text x="628" y="696.0">Y</text></svg>
</div>

---

### ข้อ 6  จงออกแบบวงจรลอจิกจาก Truth Table ต่อไปนี้ โดยฟังก์ชันของเอาท์พุตอยู่ในรูป Product of Sum

$$
\begin{array}{|c|c|c|c|c|}
\hline
\text{เลขฐาน 10} & A & B & C & Y \\
\hline
0 & 0 & 0 & 0 & 1 \\
\hline
1 & 0 & 0 & 1 & 1 \\
\hline
2 & 0 & 1 & 0 & 0 \\
\hline
3 & 0 & 1 & 1 & 0 \\
\hline
4 & 1 & 0 & 0 & 1 \\
\hline
5 & 1 & 0 & 1 & 1 \\
\hline
6 & 1 & 1 & 0 & 1 \\
\hline
7 & 1 & 1 & 1 & 0 \\
\hline
\end{array}
$$

$\mathbf{Sol}^{n}$

$$
\begin{aligned}
Y=0 &:\ \text{Dec } 2,3,7 \\
\text{Dec }2 \ (ABC=010) &\Rightarrow M_2 = A+\overline{B}+C \\
\text{Dec }3 \ (ABC=011) &\Rightarrow M_3 = A+\overline{B}+\overline{C} \\
\text{Dec }7 \ (ABC=111) &\Rightarrow M_7 = \overline{A}+\overline{B}+\overline{C} \\
Y &= M_2\cdot M_3\cdot M_7 = \prod M(2,3,7) \\
&= (A+\overline{B}+C)(A+\overline{B}+\overline{C})(\overline{A}+\overline{B}+\overline{C})
\end{aligned}
$$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="535" height="468" viewBox="0 0 594 520" font-family="Times New Roman, serif" font-size="18" fill="currentColor"><g stroke="currentColor" stroke-width="1.8" fill="none"><line x1="76.0" y1="88.0" x2="170.0" y2="88.0"/>
<line x1="46.0" y1="136.0" x2="323.0" y2="136.0"/>
<line x1="216.0" y1="88.0" x2="238.0" y2="88.0"/>
<line x1="238.0" y1="88.0" x2="238.0" y2="150.0"/>
<line x1="238.0" y1="150.0" x2="325.0" y2="150.0"/>
<line x1="106.0" y1="164.0" x2="323.0" y2="164.0"/>
<line x1="106.0" y1="212.0" x2="170.0" y2="212.0"/>
<line x1="46.0" y1="260.0" x2="323.0" y2="260.0"/>
<line x1="216.0" y1="88.0" x2="250.0" y2="88.0"/>
<line x1="250.0" y1="88.0" x2="250.0" y2="274.0"/>
<line x1="250.0" y1="274.0" x2="325.0" y2="274.0"/>
<line x1="216.0" y1="212.0" x2="262.0" y2="212.0"/>
<line x1="262.0" y1="212.0" x2="262.0" y2="288.0"/>
<line x1="262.0" y1="288.0" x2="323.0" y2="288.0"/>
<line x1="46.0" y1="336.0" x2="170.0" y2="336.0"/>
<line x1="216.0" y1="336.0" x2="274.0" y2="336.0"/>
<line x1="274.0" y1="336.0" x2="274.0" y2="384.0"/>
<line x1="274.0" y1="384.0" x2="323.0" y2="384.0"/>
<line x1="216.0" y1="88.0" x2="286.0" y2="88.0"/>
<line x1="286.0" y1="88.0" x2="286.0" y2="398.0"/>
<line x1="286.0" y1="398.0" x2="325.0" y2="398.0"/>
<line x1="216.0" y1="212.0" x2="298.0" y2="212.0"/>
<line x1="298.0" y1="212.0" x2="298.0" y2="412.0"/>
<line x1="298.0" y1="412.0" x2="323.0" y2="412.0"/>
<line x1="382.0" y1="150.0" x2="404.0" y2="150.0"/>
<line x1="404.0" y1="150.0" x2="404.0" y2="452.0"/>
<line x1="404.0" y1="452.0" x2="448.0" y2="452.0"/>
<line x1="382.0" y1="274.0" x2="416.0" y2="274.0"/>
<line x1="416.0" y1="274.0" x2="416.0" y2="466.0"/>
<line x1="416.0" y1="466.0" x2="448.0" y2="466.0"/>
<line x1="382.0" y1="398.0" x2="428.0" y2="398.0"/>
<line x1="428.0" y1="398.0" x2="428.0" y2="480.0"/>
<line x1="428.0" y1="480.0" x2="448.0" y2="480.0"/>
<circle cx="238.0" cy="88.0" r="3" fill="currentColor" stroke="none"/>
<circle cx="250.0" cy="88.0" r="3" fill="currentColor" stroke="none"/>
<circle cx="262.0" cy="212.0" r="3" fill="currentColor" stroke="none"/>
<line x1="46.0" y1="34.0" x2="46.0" y2="336.0"/>
<circle cx="46" cy="136.0" r="3" fill="currentColor" stroke="none"/>
<circle cx="46" cy="260.0" r="3" fill="currentColor" stroke="none"/>
<line x1="76.0" y1="34.0" x2="76.0" y2="88.0"/>
<line x1="106.0" y1="34.0" x2="106.0" y2="212.0"/>
<circle cx="106" cy="164.0" r="3" fill="currentColor" stroke="none"/>
<polygon points="170,68 170,108 206,88"/>
<circle cx="211" cy="88" r="5"/>
<path d="M318,124 C340,124 366,137.0 382,150 C366,163.0 340,176 318,176 Q332,150 318,124 Z"/>
<polygon points="170,192 170,232 206,212"/>
<circle cx="211" cy="212" r="5"/>
<path d="M318,248 C340,248 366,261.0 382,274 C366,287.0 340,300 318,300 Q332,274 318,248 Z"/>
<polygon points="170,316 170,356 206,336"/>
<circle cx="211" cy="336" r="5"/>
<path d="M318,372 C340,372 366,385.0 382,398 C366,411.0 340,424 318,424 Q332,398 318,372 Z"/>
<path d="M448,440 H478 A26,26 0 0 1 478,492 H448 Z"/>
<line x1="504.0" y1="466.0" x2="524.0" y2="466.0"/>
<circle cx="524" cy="466" r="3.5" fill="currentColor" stroke="none"/></g><text x="46" y="24" text-anchor="middle">A</text><text x="76" y="24" text-anchor="middle">B</text><text x="106" y="24" text-anchor="middle">C</text><text x="534" y="471">Y</text></svg>
</div>

---

