# สรุปบทที่ 5 วงจรคอมไบเนชัน (Combination Circuit)

---

## 1. วงจรคอมไบเนชัน

วงจรคอมไบเนชันคือวงจรที่นำเกตหลายชนิดมาต่อกัน โดยเอาต์พุตขึ้นอยู่กับ**อินพุตปัจจุบันเท่านั้น** ไม่มีหน่วยความจำและไม่มี Feedback (ไม่ป้อนเอาต์พุตกลับมาที่อินพุต) เขียนแทนได้ด้วยสมการบูลีน ตารางความจริง เวนไดอะแกรม และไดอะแกรมเวลา

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="540" height="140" viewBox="0 0 540 140" font-family="Times New Roman, serif" font-size="18" fill="currentColor"><g transform="translate(30,0)"><g stroke="currentColor" stroke-width="2" fill="none"><rect x="150" y="20" width="170" height="90"/><line x1="50" y1="48" x2="150" y2="48"/><line x1="50" y1="82" x2="150" y2="82"/><line x1="320" y1="48" x2="420" y2="48"/><line x1="320" y1="82" x2="420" y2="82"/><polyline points="140,43 150,48 140,53"/><polyline points="140,77 150,82 140,87"/><polyline points="410,43 420,48 410,53"/><polyline points="410,77 420,82 410,87"/></g><text x="48" y="45" text-anchor="end">INPUT</text><text x="425" y="55">OUTPUT</text><text x="235" y="58" text-anchor="middle">วงจรคอมไบเนชัน</text><text x="235" y="82" text-anchor="middle">Combination Circuit</text></g></svg>
</div>

---

## 2. การเขียนวงจรจากสมการ

แปลงจากพจน์ด้านในออกมาด้านนอก

**สูตร**

$$
\begin{array}{|l|l|}
\hline
\text{ในสมการ} & \text{เกตที่ใช้} \\
\hline
A+B & \text{OR} \\
\hline
AB & \text{AND} \\
\hline
\overline{A} & \text{NOT} \\
\hline
\overline{A+B} & \text{NOR} \\
\hline
\overline{AB} & \text{NAND} \\
\hline
A\oplus B & \text{XOR} \\
\hline
\overline{A\oplus B} & \text{XNOR} \\
\hline
\end{array}
$$

### 2.1 ตัวอย่าง

**ตัวอย่างที่ 1** จงเขียนวงจรจากสมการ $Y = \overline{\overline{(A+B)}\cdot(\overline{A}C)}$

$\mathbf{Sol}^{n}$

$\overline{A+B}$ ใช้ NOR เกต

$\overline{A}C$ ใช้ NOT เกตกับ AND เกต

นำสองส่วนมาเข้า NAND เกต

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="497" height="306" viewBox="0 0 552 340" font-family="Times New Roman, serif" font-size="18" fill="currentColor"><g stroke="currentColor" stroke-width="1.8" fill="none"><line x1="46.0" y1="87.0" x2="176.5" y2="87.0"/>
<line x1="76.0" y1="101.0" x2="176.5" y2="101.0"/>
<line x1="46.0" y1="156.0" x2="170.0" y2="156.0"/>
<line x1="216.0" y1="156.0" x2="266.0" y2="156.0"/>
<line x1="266.0" y1="156.0" x2="266.0" y2="211.0"/>
<line x1="266.0" y1="211.0" x2="286.0" y2="211.0"/>
<line x1="106.0" y1="225.0" x2="286.0" y2="225.0"/>
<line x1="244.0" y1="94.0" x2="364.0" y2="94.0"/>
<line x1="364.0" y1="94.0" x2="364.0" y2="279.0"/>
<line x1="364.0" y1="279.0" x2="396.0" y2="279.0"/>
<line x1="342.0" y1="218.0" x2="376.0" y2="218.0"/>
<line x1="376.0" y1="218.0" x2="376.0" y2="293.0"/>
<line x1="376.0" y1="293.0" x2="396.0" y2="293.0"/>
<line x1="46.0" y1="34.0" x2="46.0" y2="156.0"/>
<circle cx="46" cy="87.0" r="3" fill="currentColor" stroke="none"/>
<line x1="76.0" y1="34.0" x2="76.0" y2="101.0"/>
<line x1="106.0" y1="34.0" x2="106.0" y2="225.0"/>
<path d="M170,68 C192,68 218,81.0 234,94 C218,107.0 192,120 170,120 Q184,94 170,68 Z"/>
<circle cx="239" cy="94" r="5"/>
<polygon points="170,136 170,176 206,156"/>
<circle cx="211" cy="156" r="5"/>
<path d="M286,192 H316 A26,26 0 0 1 316,244 H286 Z"/>
<path d="M396,260 H426 A26,26 0 0 1 426,312 H396 Z"/>
<circle cx="457" cy="286" r="5"/>
<line x1="462.0" y1="286.0" x2="482.0" y2="286.0"/>
<circle cx="482" cy="286" r="3.5" fill="currentColor" stroke="none"/></g><text x="46" y="24" text-anchor="middle">A</text><text x="76" y="24" text-anchor="middle">B</text><text x="106" y="24" text-anchor="middle">C</text><text x="492" y="291">Y</text></svg>
</div>

**ตัวอย่างที่ 2** จงเขียนวงจรจากสมการ $Y = A\cdot\overline{C+\overline{B\oplus C}}$

$\mathbf{Sol}^{n}$

$\overline{B\oplus C}$ ใช้ XNOR เกต

$\overline{C+\overline{B\oplus C}}$ ใช้ NOR เกต

นำผลมา AND กับ $A$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="493" height="256" viewBox="0 0 548 284" font-family="Times New Roman, serif" font-size="18" fill="currentColor"><g stroke="currentColor" stroke-width="1.8" fill="none"><line x1="76.0" y1="87.0" x2="166.5" y2="87.0"/>
<line x1="106.0" y1="101.0" x2="166.5" y2="101.0"/>
<line x1="106.0" y1="155.0" x2="292.5" y2="155.0"/>
<line x1="244.0" y1="94.0" x2="266.0" y2="94.0"/>
<line x1="266.0" y1="94.0" x2="266.0" y2="169.0"/>
<line x1="266.0" y1="169.0" x2="292.5" y2="169.0"/>
<line x1="46.0" y1="223.0" x2="402.0" y2="223.0"/>
<line x1="360.0" y1="162.0" x2="382.0" y2="162.0"/>
<line x1="382.0" y1="162.0" x2="382.0" y2="237.0"/>
<line x1="382.0" y1="237.0" x2="402.0" y2="237.0"/>
<line x1="46.0" y1="34.0" x2="46.0" y2="223.0"/>
<line x1="76.0" y1="34.0" x2="76.0" y2="87.0"/>
<line x1="106.0" y1="34.0" x2="106.0" y2="155.0"/>
<circle cx="106" cy="101.0" r="3" fill="currentColor" stroke="none"/>
<path d="M160,68 Q174,94 160,120"/><path d="M170,68 C192,68 218,81.0 234,94 C218,107.0 192,120 170,120 Q184,94 170,68 Z"/>
<circle cx="239" cy="94" r="5"/>
<path d="M286,136 C308,136 334,149.0 350,162 C334,175.0 308,188 286,188 Q300,162 286,136 Z"/>
<circle cx="355" cy="162" r="5"/>
<path d="M402,204 H432 A26,26 0 0 1 432,256 H402 Z"/>
<line x1="458.0" y1="230.0" x2="478.0" y2="230.0"/>
<circle cx="478" cy="230" r="3.5" fill="currentColor" stroke="none"/></g><text x="46" y="24" text-anchor="middle">A</text><text x="76" y="24" text-anchor="middle">B</text><text x="106" y="24" text-anchor="middle">C</text><text x="488" y="235">Y</text></svg>
</div>

---

## 3. การเขียนวงจรจากตารางความจริง

**สูตร**

$$
\begin{array}{|l|c|c|}
\hline
 & \text{SOP} & \text{POS} \\
\hline
\text{ดูแถวที่} & Y=1 & Y=0 \\
\hline
\text{ตัวแปรที่เป็น } 0 & \text{ใส่ขีด } \overline{A} & \text{เขียนปกติ } A \\
\hline
\text{ตัวแปรที่เป็น } 1 & \text{เขียนปกติ } A & \text{ใส่ขีด } \overline{A} \\
\hline
\text{ในแต่ละแถว} & \text{AND} & \text{OR} \\
\hline
\text{รวมทุกแถว} & \text{OR} & \text{AND} \\
\hline
\end{array}
$$

### 3.1 ตัวอย่าง

**ตัวอย่างที่ 1** จงเขียนวงจรแบบ SOP และ POS จากตารางความจริงต่อไปนี้

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
1 & 0 & 0 & 1 \\
\hline
1 & 0 & 1 & 0 \\
\hline
1 & 1 & 0 & 0 \\
\hline
1 & 1 & 1 & 1 \\
\hline
\end{array}
$$

$\mathbf{Sol}^{n}$

**แบบ SOP** แถวที่ $Y=1$ คือแถว $3,4,7$

$$
Y = \overline{A}BC+A\overline{B}\,\overline{C}+ABC
$$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="511" height="468" viewBox="0 0 568 520" font-family="Times New Roman, serif" font-size="18" fill="currentColor"><g stroke="currentColor" stroke-width="1.8" fill="none"><line x1="46.0" y1="88.0" x2="170.0" y2="88.0"/>
<line x1="216.0" y1="88.0" x2="248.0" y2="88.0"/>
<line x1="248.0" y1="88.0" x2="248.0" y2="136.0"/>
<line x1="248.0" y1="136.0" x2="292.0" y2="136.0"/>
<line x1="76.0" y1="150.0" x2="292.0" y2="150.0"/>
<line x1="106.0" y1="164.0" x2="292.0" y2="164.0"/>
<line x1="76.0" y1="212.0" x2="170.0" y2="212.0"/>
<line x1="106.0" y1="268.0" x2="170.0" y2="268.0"/>
<line x1="46.0" y1="316.0" x2="292.0" y2="316.0"/>
<line x1="216.0" y1="212.0" x2="260.0" y2="212.0"/>
<line x1="260.0" y1="212.0" x2="260.0" y2="330.0"/>
<line x1="260.0" y1="330.0" x2="292.0" y2="330.0"/>
<line x1="216.0" y1="268.0" x2="272.0" y2="268.0"/>
<line x1="272.0" y1="268.0" x2="272.0" y2="344.0"/>
<line x1="272.0" y1="344.0" x2="292.0" y2="344.0"/>
<line x1="46.0" y1="384.0" x2="170.0" y2="384.0"/>
<line x1="76.0" y1="398.0" x2="170.0" y2="398.0"/>
<line x1="106.0" y1="412.0" x2="170.0" y2="412.0"/>
<line x1="348.0" y1="150.0" x2="370.0" y2="150.0"/>
<line x1="370.0" y1="150.0" x2="370.0" y2="452.0"/>
<line x1="370.0" y1="452.0" x2="419.0" y2="452.0"/>
<line x1="348.0" y1="330.0" x2="382.0" y2="330.0"/>
<line x1="382.0" y1="330.0" x2="382.0" y2="466.0"/>
<line x1="382.0" y1="466.0" x2="421.0" y2="466.0"/>
<line x1="226.0" y1="398.0" x2="394.0" y2="398.0"/>
<line x1="394.0" y1="398.0" x2="394.0" y2="480.0"/>
<line x1="394.0" y1="480.0" x2="419.0" y2="480.0"/>
<line x1="46.0" y1="34.0" x2="46.0" y2="384.0"/>
<circle cx="46" cy="88.0" r="3" fill="currentColor" stroke="none"/>
<circle cx="46" cy="316.0" r="3" fill="currentColor" stroke="none"/>
<line x1="76.0" y1="34.0" x2="76.0" y2="398.0"/>
<circle cx="76" cy="150.0" r="3" fill="currentColor" stroke="none"/>
<circle cx="76" cy="212.0" r="3" fill="currentColor" stroke="none"/>
<line x1="106.0" y1="34.0" x2="106.0" y2="412.0"/>
<circle cx="106" cy="164.0" r="3" fill="currentColor" stroke="none"/>
<circle cx="106" cy="268.0" r="3" fill="currentColor" stroke="none"/>
<polygon points="170,68 170,108 206,88"/>
<circle cx="211" cy="88" r="5"/>
<path d="M292,124 H322 A26,26 0 0 1 322,176 H292 Z"/>
<polygon points="170,192 170,232 206,212"/>
<circle cx="211" cy="212" r="5"/>
<polygon points="170,248 170,288 206,268"/>
<circle cx="211" cy="268" r="5"/>
<path d="M292,304 H322 A26,26 0 0 1 322,356 H292 Z"/>
<path d="M170,372 H200 A26,26 0 0 1 200,424 H170 Z"/>
<path d="M414,440 C436,440 462,453.0 478,466 C462,479.0 436,492 414,492 Q428,466 414,440 Z"/>
<line x1="478.0" y1="466.0" x2="498.0" y2="466.0"/>
<circle cx="498" cy="466" r="3.5" fill="currentColor" stroke="none"/></g><text x="46" y="24" text-anchor="middle">A</text><text x="76" y="24" text-anchor="middle">B</text><text x="106" y="24" text-anchor="middle">C</text><text x="508" y="471">Y</text></svg>
</div>

**แบบ POS** แถวที่ $Y=0$ คือแถว $0,1,2,5,6$

$$
Y = (A+B+C)(A+B+\overline{C})(A+\overline{B}+C)(\overline{A}+B+\overline{C})(\overline{A}+\overline{B}+C)
$$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="585" height="616" viewBox="0 0 650 684" font-family="Times New Roman, serif" font-size="18" fill="currentColor"><g stroke="currentColor" stroke-width="1.8" fill="none"><line x1="46.0" y1="80.0" x2="175.0" y2="80.0"/>
<line x1="76.0" y1="94.0" x2="177.0" y2="94.0"/>
<line x1="106.0" y1="108.0" x2="175.0" y2="108.0"/>
<line x1="106.0" y1="156.0" x2="170.0" y2="156.0"/>
<line x1="46.0" y1="204.0" x2="341.0" y2="204.0"/>
<line x1="76.0" y1="218.0" x2="343.0" y2="218.0"/>
<line x1="216.0" y1="156.0" x2="256.0" y2="156.0"/>
<line x1="256.0" y1="156.0" x2="256.0" y2="232.0"/>
<line x1="256.0" y1="232.0" x2="341.0" y2="232.0"/>
<line x1="76.0" y1="280.0" x2="170.0" y2="280.0"/>
<line x1="46.0" y1="328.0" x2="341.0" y2="328.0"/>
<line x1="216.0" y1="280.0" x2="268.0" y2="280.0"/>
<line x1="268.0" y1="280.0" x2="268.0" y2="342.0"/>
<line x1="268.0" y1="342.0" x2="343.0" y2="342.0"/>
<line x1="106.0" y1="356.0" x2="341.0" y2="356.0"/>
<line x1="46.0" y1="404.0" x2="170.0" y2="404.0"/>
<line x1="216.0" y1="404.0" x2="280.0" y2="404.0"/>
<line x1="280.0" y1="404.0" x2="280.0" y2="452.0"/>
<line x1="280.0" y1="452.0" x2="341.0" y2="452.0"/>
<line x1="76.0" y1="466.0" x2="343.0" y2="466.0"/>
<line x1="216.0" y1="156.0" x2="292.0" y2="156.0"/>
<line x1="292.0" y1="156.0" x2="292.0" y2="480.0"/>
<line x1="292.0" y1="480.0" x2="341.0" y2="480.0"/>
<line x1="216.0" y1="404.0" x2="304.0" y2="404.0"/>
<line x1="304.0" y1="404.0" x2="304.0" y2="520.0"/>
<line x1="304.0" y1="520.0" x2="341.0" y2="520.0"/>
<line x1="216.0" y1="280.0" x2="316.0" y2="280.0"/>
<line x1="316.0" y1="280.0" x2="316.0" y2="534.0"/>
<line x1="316.0" y1="534.0" x2="343.0" y2="534.0"/>
<line x1="106.0" y1="548.0" x2="341.0" y2="548.0"/>
<line x1="234.0" y1="94.0" x2="422.0" y2="94.0"/>
<line x1="422.0" y1="94.0" x2="422.0" y2="588.0"/>
<line x1="422.0" y1="588.0" x2="490.0" y2="588.0"/>
<line x1="400.0" y1="218.0" x2="434.0" y2="218.0"/>
<line x1="434.0" y1="218.0" x2="434.0" y2="602.0"/>
<line x1="434.0" y1="602.0" x2="490.0" y2="602.0"/>
<line x1="400.0" y1="342.0" x2="446.0" y2="342.0"/>
<line x1="446.0" y1="342.0" x2="446.0" y2="616.0"/>
<line x1="446.0" y1="616.0" x2="490.0" y2="616.0"/>
<line x1="400.0" y1="466.0" x2="458.0" y2="466.0"/>
<line x1="458.0" y1="466.0" x2="458.0" y2="630.0"/>
<line x1="458.0" y1="630.0" x2="490.0" y2="630.0"/>
<line x1="400.0" y1="534.0" x2="470.0" y2="534.0"/>
<line x1="470.0" y1="534.0" x2="470.0" y2="644.0"/>
<line x1="470.0" y1="644.0" x2="490.0" y2="644.0"/>
<circle cx="256.0" cy="156.0" r="3" fill="currentColor" stroke="none"/>
<circle cx="268.0" cy="280.0" r="3" fill="currentColor" stroke="none"/>
<circle cx="280.0" cy="404.0" r="3" fill="currentColor" stroke="none"/>
<line x1="46.0" y1="34.0" x2="46.0" y2="404.0"/>
<circle cx="46" cy="80.0" r="3" fill="currentColor" stroke="none"/>
<circle cx="46" cy="204.0" r="3" fill="currentColor" stroke="none"/>
<circle cx="46" cy="328.0" r="3" fill="currentColor" stroke="none"/>
<line x1="76.0" y1="34.0" x2="76.0" y2="466.0"/>
<circle cx="76" cy="94.0" r="3" fill="currentColor" stroke="none"/>
<circle cx="76" cy="218.0" r="3" fill="currentColor" stroke="none"/>
<circle cx="76" cy="280.0" r="3" fill="currentColor" stroke="none"/>
<line x1="106.0" y1="34.0" x2="106.0" y2="548.0"/>
<circle cx="106" cy="108.0" r="3" fill="currentColor" stroke="none"/>
<circle cx="106" cy="156.0" r="3" fill="currentColor" stroke="none"/>
<circle cx="106" cy="356.0" r="3" fill="currentColor" stroke="none"/>
<path d="M170,68 C192,68 218,81.0 234,94 C218,107.0 192,120 170,120 Q184,94 170,68 Z"/>
<polygon points="170,136 170,176 206,156"/>
<circle cx="211" cy="156" r="5"/>
<path d="M336,192 C358,192 384,205.0 400,218 C384,231.0 358,244 336,244 Q350,218 336,192 Z"/>
<polygon points="170,260 170,300 206,280"/>
<circle cx="211" cy="280" r="5"/>
<path d="M336,316 C358,316 384,329.0 400,342 C384,355.0 358,368 336,368 Q350,342 336,316 Z"/>
<polygon points="170,384 170,424 206,404"/>
<circle cx="211" cy="404" r="5"/>
<path d="M336,440 C358,440 384,453.0 400,466 C384,479.0 358,492 336,492 Q350,466 336,440 Z"/>
<path d="M336,508 C358,508 384,521.0 400,534 C384,547.0 358,560 336,560 Q350,534 336,508 Z"/>
<path d="M490,576.0 H520 A40.0,40.0 0 0 1 520,656.0 H490 Z"/>
<line x1="560.0" y1="616.0" x2="580.0" y2="616.0"/>
<circle cx="580.0" cy="616.0" r="3.5" fill="currentColor" stroke="none"/></g><text x="46" y="24" text-anchor="middle">A</text><text x="76" y="24" text-anchor="middle">B</text><text x="106" y="24" text-anchor="middle">C</text><text x="590.0" y="621.0">Y</text></svg>
</div>

---

## 4. การวิเคราะห์วงจร

วงจรหนึ่งวงจรเขียนเป็นสมการ ตารางความจริง เวนไดอะแกรม และไดอะแกรมเวลาได้ วิธีทำคือไล่ค่าที่เอาต์พุตของเกตแต่ละตัวจากอินพุตไปหาเอาต์พุต

**ขั้นตอน**

1. ตั้งชื่อเอาต์พุตของเกตแต่ละตัว
2. เขียนสมการของเกตทีละตัวจากอินพุตไปเอาต์พุต
3. นำสมการรวมมาเขียนตารางความจริงทีละคอลัมน์
4. แรเงาเวนไดอะแกรมหรือเขียนรูปคลื่นตามตาราง

### 4.1 ตัวอย่าง

**ตัวอย่างที่ 1** จงวิเคราะห์วงจรต่อไปนี้

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="504" height="306" viewBox="0 0 560 340" font-family="Times New Roman, serif" font-size="18" fill="currentColor"><g stroke="currentColor" stroke-width="1.8" fill="none"><line x1="46.0" y1="87.0" x2="166.5" y2="87.0"/>
<line x1="76.0" y1="101.0" x2="166.5" y2="101.0"/>
<line x1="46.0" y1="156.0" x2="170.0" y2="156.0"/>
<line x1="216.0" y1="156.0" x2="266.0" y2="156.0"/>
<line x1="266.0" y1="156.0" x2="266.0" y2="211.0"/>
<line x1="266.0" y1="211.0" x2="286.0" y2="211.0"/>
<line x1="106.0" y1="225.0" x2="286.0" y2="225.0"/>
<line x1="244.0" y1="94.0" x2="364.0" y2="94.0"/>
<line x1="364.0" y1="94.0" x2="364.0" y2="279.0"/>
<line x1="364.0" y1="279.0" x2="402.5" y2="279.0"/>
<line x1="342.0" y1="218.0" x2="376.0" y2="218.0"/>
<line x1="376.0" y1="218.0" x2="376.0" y2="293.0"/>
<line x1="376.0" y1="293.0" x2="402.5" y2="293.0"/>
<line x1="46.0" y1="34.0" x2="46.0" y2="156.0"/>
<circle cx="46" cy="87.0" r="3" fill="currentColor" stroke="none"/>
<line x1="76.0" y1="34.0" x2="76.0" y2="101.0"/>
<line x1="106.0" y1="34.0" x2="106.0" y2="225.0"/>
<path d="M160,68 Q174,94 160,120"/><path d="M170,68 C192,68 218,81.0 234,94 C218,107.0 192,120 170,120 Q184,94 170,68 Z"/>
<circle cx="239" cy="94" r="5"/>
<polygon points="170,136 170,176 206,156"/>
<circle cx="211" cy="156" r="5"/>
<path d="M286,192 H316 A26,26 0 0 1 316,244 H286 Z"/>
<path d="M396,260 C418,260 444,273.0 460,286 C444,299.0 418,312 396,312 Q410,286 396,260 Z"/>
<circle cx="465" cy="286" r="5"/>
<line x1="470.0" y1="286.0" x2="490.0" y2="286.0"/>
<circle cx="490" cy="286" r="3.5" fill="currentColor" stroke="none"/></g><text x="46" y="24" text-anchor="middle">A</text><text x="76" y="24" text-anchor="middle">B</text><text x="106" y="24" text-anchor="middle">C</text><text x="500" y="291">Y</text></svg>
</div>

$\mathbf{Sol}^{n}$

**สมการ**

$$
\begin{aligned}
\text{XNOR} &: \overline{A\oplus B} \\
\text{AND} &: \overline{A}C \\
\text{NOR} &: Y = \overline{\overline{A\oplus B}+\overline{A}C}
\end{aligned}
$$

**ตารางความจริง**

$$
\begin{array}{|c|c|c|c|c|c|}
\hline
A & B & C & \overline{A\oplus B} & \overline{A}C & Y \\
\hline
0 & 0 & 0 & 1 & 0 & 0 \\
\hline
0 & 0 & 1 & 1 & 1 & 0 \\
\hline
0 & 1 & 0 & 0 & 0 & 1 \\
\hline
0 & 1 & 1 & 0 & 1 & 0 \\
\hline
1 & 0 & 0 & 0 & 0 & 1 \\
\hline
1 & 0 & 1 & 0 & 0 & 1 \\
\hline
1 & 1 & 0 & 1 & 0 & 0 \\
\hline
1 & 1 & 1 & 1 & 0 & 0 \\
\hline
\end{array}
$$

$\mathbf{Ans}\quad Y=\sum m(2,4,5)$

**เวนไดอะแกรม**

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="342" height="342" viewBox="0 0 360 360" font-family="Times New Roman, serif" fill="currentColor"><g stroke="currentColor" stroke-width="1.5" fill="none"><g transform="translate(10,10)">
<defs><clipPath id="q4iA"><circle cx="55" cy="42" r="27"/></clipPath><clipPath id="q4oA"><path clip-rule="evenodd" d="M0,0H150V118H0Z M28,42 a27,27 0 1,0 54,0 a27,27 0 1,0 -54,0Z"/></clipPath><clipPath id="q4iB"><circle cx="95" cy="42" r="27"/></clipPath><clipPath id="q4oB"><path clip-rule="evenodd" d="M0,0H150V118H0Z M68,42 a27,27 0 1,0 54,0 a27,27 0 1,0 -54,0Z"/></clipPath><clipPath id="q4iC"><circle cx="75" cy="76" r="27"/></clipPath><clipPath id="q4oC"><path clip-rule="evenodd" d="M0,0H150V118H0Z M48,76 a27,27 0 1,0 54,0 a27,27 0 1,0 -54,0Z"/></clipPath></defs>
<g opacity="0.4" stroke="none">
<g clip-path="url(#q4oA)"><g clip-path="url(#q4oB)"><g clip-path="url(#q4oC)"><rect width="150" height="118" fill="currentColor"/></g></g></g>
<g clip-path="url(#q4oA)"><g clip-path="url(#q4oB)"><g clip-path="url(#q4iC)"><rect width="150" height="118" fill="currentColor"/></g></g></g>
<g clip-path="url(#q4iA)"><g clip-path="url(#q4iB)"><g clip-path="url(#q4oC)"><rect width="150" height="118" fill="currentColor"/></g></g></g>
<g clip-path="url(#q4iA)"><g clip-path="url(#q4iB)"><g clip-path="url(#q4iC)"><rect width="150" height="118" fill="currentColor"/></g></g></g>
</g>
<rect width="150" height="118" fill="none"/>
<circle cx="55" cy="42" r="27" fill="none"/>
<circle cx="95" cy="42" r="27" fill="none"/>
<circle cx="75" cy="76" r="27" fill="none"/>
<text x="41" y="34" text-anchor="middle" font-size="15" fill="currentColor" stroke="none">A</text>
<text x="109" y="34" text-anchor="middle" font-size="15" fill="currentColor" stroke="none">B</text>
<text x="75" y="92" text-anchor="middle" font-size="15" fill="currentColor" stroke="none">C</text>
<g stroke="currentColor" fill="currentColor"><g stroke-width="1.2"><text x="51.4" y="140" font-size="16" stroke="none">(</text><text x="56.7" y="140" font-size="16" stroke="none">A</text><circle cx="75.4" cy="135.2" r="4.8" fill="none" stroke-width="1.3"/><line x1="70.6" y1="135.2" x2="80.2" y2="135.2" stroke-width="1.3"/><line x1="75.4" y1="130.4" x2="75.4" y2="140.0" stroke-width="1.3"/><text x="82.6" y="140" font-size="16" stroke="none">B</text><text x="93.3" y="140" font-size="16" stroke="none">)</text><line x1="51.4" y1="127.5" x2="98.6" y2="127.5"/></g></g>
</g>
<g transform="translate(190,10)">
<defs><clipPath id="q5iA"><circle cx="55" cy="42" r="27"/></clipPath><clipPath id="q5oA"><path clip-rule="evenodd" d="M0,0H150V118H0Z M28,42 a27,27 0 1,0 54,0 a27,27 0 1,0 -54,0Z"/></clipPath><clipPath id="q5iB"><circle cx="95" cy="42" r="27"/></clipPath><clipPath id="q5oB"><path clip-rule="evenodd" d="M0,0H150V118H0Z M68,42 a27,27 0 1,0 54,0 a27,27 0 1,0 -54,0Z"/></clipPath><clipPath id="q5iC"><circle cx="75" cy="76" r="27"/></clipPath><clipPath id="q5oC"><path clip-rule="evenodd" d="M0,0H150V118H0Z M48,76 a27,27 0 1,0 54,0 a27,27 0 1,0 -54,0Z"/></clipPath></defs>
<g opacity="0.4" stroke="none">
<g clip-path="url(#q5oA)"><g clip-path="url(#q5oB)"><g clip-path="url(#q5iC)"><rect width="150" height="118" fill="currentColor"/></g></g></g>
<g clip-path="url(#q5oA)"><g clip-path="url(#q5iB)"><g clip-path="url(#q5iC)"><rect width="150" height="118" fill="currentColor"/></g></g></g>
</g>
<rect width="150" height="118" fill="none"/>
<circle cx="55" cy="42" r="27" fill="none"/>
<circle cx="95" cy="42" r="27" fill="none"/>
<circle cx="75" cy="76" r="27" fill="none"/>
<text x="41" y="34" text-anchor="middle" font-size="15" fill="currentColor" stroke="none">A</text>
<text x="109" y="34" text-anchor="middle" font-size="15" fill="currentColor" stroke="none">B</text>
<text x="75" y="92" text-anchor="middle" font-size="15" fill="currentColor" stroke="none">C</text>
<g stroke="currentColor" fill="currentColor"><g stroke-width="1.2"><text x="63.9" y="140" font-size="16" stroke="none">A</text><line x1="63.9" y1="127.5" x2="75.4" y2="127.5"/><text x="75.4" y="140" font-size="16" stroke="none">C</text></g></g>
</g>
<line x1="85" y1="166" x2="140" y2="198"/><polyline points="132.1,197.0 140,198 135.2,191.6"/>
<line x1="265" y1="166" x2="210" y2="198"/><polyline points="214.8,191.6 210,198 217.9,197.0"/>
<g transform="translate(100,205)">
<defs><clipPath id="q6iA"><circle cx="55" cy="42" r="27"/></clipPath><clipPath id="q6oA"><path clip-rule="evenodd" d="M0,0H150V118H0Z M28,42 a27,27 0 1,0 54,0 a27,27 0 1,0 -54,0Z"/></clipPath><clipPath id="q6iB"><circle cx="95" cy="42" r="27"/></clipPath><clipPath id="q6oB"><path clip-rule="evenodd" d="M0,0H150V118H0Z M68,42 a27,27 0 1,0 54,0 a27,27 0 1,0 -54,0Z"/></clipPath><clipPath id="q6iC"><circle cx="75" cy="76" r="27"/></clipPath><clipPath id="q6oC"><path clip-rule="evenodd" d="M0,0H150V118H0Z M48,76 a27,27 0 1,0 54,0 a27,27 0 1,0 -54,0Z"/></clipPath></defs>
<g opacity="0.4" stroke="none">
<g clip-path="url(#q6oA)"><g clip-path="url(#q6iB)"><g clip-path="url(#q6oC)"><rect width="150" height="118" fill="currentColor"/></g></g></g>
<g clip-path="url(#q6iA)"><g clip-path="url(#q6oB)"><g clip-path="url(#q6oC)"><rect width="150" height="118" fill="currentColor"/></g></g></g>
<g clip-path="url(#q6iA)"><g clip-path="url(#q6oB)"><g clip-path="url(#q6iC)"><rect width="150" height="118" fill="currentColor"/></g></g></g>
</g>
<rect width="150" height="118" fill="none"/>
<circle cx="55" cy="42" r="27" fill="none"/>
<circle cx="95" cy="42" r="27" fill="none"/>
<circle cx="75" cy="76" r="27" fill="none"/>
<text x="41" y="34" text-anchor="middle" font-size="15" fill="currentColor" stroke="none">A</text>
<text x="109" y="34" text-anchor="middle" font-size="15" fill="currentColor" stroke="none">B</text>
<text x="75" y="92" text-anchor="middle" font-size="15" fill="currentColor" stroke="none">C</text>
<g stroke="currentColor" fill="currentColor"><g stroke-width="1.2"><text x="70.2" y="140" font-size="16" stroke="none">Y</text></g></g>
</g></g></svg>
</div>

**ไดอะแกรมเวลา**

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="522" height="310" viewBox="0 0 550 326" font-family="Times New Roman, serif" font-size="16" fill="currentColor">
<g stroke="currentColor" fill="none" stroke-width="1" stroke-dasharray="4 3" opacity="0.6">
<line x1="130" y1="6" x2="130" y2="312"/>
<line x1="180" y1="6" x2="180" y2="312"/>
<line x1="230" y1="6" x2="230" y2="312"/>
<line x1="280" y1="6" x2="280" y2="312"/>
<line x1="330" y1="6" x2="330" y2="312"/>
<line x1="380" y1="6" x2="380" y2="312"/>
<line x1="430" y1="6" x2="430" y2="312"/>
<line x1="480" y1="6" x2="480" y2="312"/>
<line x1="530" y1="6" x2="530" y2="312"/>
</g><g stroke="currentColor" fill="none" stroke-width="2">
<polyline points="130,56 330,56 330,34 530,34"/>
<polyline points="130,106 230,106 230,84 330,84 330,106 430,106 430,84 530,84"/>
<polyline points="130,156 180,156 180,134 230,134 230,156 280,156 280,134 330,134 330,156 380,156 380,134 430,134 430,156 480,156 480,134 530,134"/>
<polyline points="130,184 230,184 230,206 430,206 430,184 530,184"/>
<polyline points="130,256 180,256 180,234 230,234 230,256 280,256 280,234 330,234 330,256 530,256"/>
<polyline points="130,306 230,306 230,284 280,284 280,306 330,306 330,284 430,284 430,306 530,306"/>
</g><g stroke="none">
<g stroke="currentColor"><g stroke-width="1.2"><text x="107.7" y="43.0" font-size="17" stroke="none">A</text></g></g>
<text x="155.0" y="26" font-size="12" text-anchor="middle" opacity="0.8">0</text>
<text x="205.0" y="26" font-size="12" text-anchor="middle" opacity="0.8">0</text>
<text x="255.0" y="26" font-size="12" text-anchor="middle" opacity="0.8">0</text>
<text x="305.0" y="26" font-size="12" text-anchor="middle" opacity="0.8">0</text>
<text x="355.0" y="26" font-size="12" text-anchor="middle" opacity="0.8">1</text>
<text x="405.0" y="26" font-size="12" text-anchor="middle" opacity="0.8">1</text>
<text x="455.0" y="26" font-size="12" text-anchor="middle" opacity="0.8">1</text>
<text x="505.0" y="26" font-size="12" text-anchor="middle" opacity="0.8">1</text>
<g stroke="currentColor"><g stroke-width="1.2"><text x="108.7" y="93.0" font-size="17" stroke="none">B</text></g></g>
<text x="155.0" y="76" font-size="12" text-anchor="middle" opacity="0.8">0</text>
<text x="205.0" y="76" font-size="12" text-anchor="middle" opacity="0.8">0</text>
<text x="255.0" y="76" font-size="12" text-anchor="middle" opacity="0.8">1</text>
<text x="305.0" y="76" font-size="12" text-anchor="middle" opacity="0.8">1</text>
<text x="355.0" y="76" font-size="12" text-anchor="middle" opacity="0.8">0</text>
<text x="405.0" y="76" font-size="12" text-anchor="middle" opacity="0.8">0</text>
<text x="455.0" y="76" font-size="12" text-anchor="middle" opacity="0.8">1</text>
<text x="505.0" y="76" font-size="12" text-anchor="middle" opacity="0.8">1</text>
<g stroke="currentColor"><g stroke-width="1.2"><text x="108.7" y="143.0" font-size="17" stroke="none">C</text></g></g>
<text x="155.0" y="126" font-size="12" text-anchor="middle" opacity="0.8">0</text>
<text x="205.0" y="126" font-size="12" text-anchor="middle" opacity="0.8">1</text>
<text x="255.0" y="126" font-size="12" text-anchor="middle" opacity="0.8">0</text>
<text x="305.0" y="126" font-size="12" text-anchor="middle" opacity="0.8">1</text>
<text x="355.0" y="126" font-size="12" text-anchor="middle" opacity="0.8">0</text>
<text x="405.0" y="126" font-size="12" text-anchor="middle" opacity="0.8">1</text>
<text x="455.0" y="126" font-size="12" text-anchor="middle" opacity="0.8">0</text>
<text x="505.0" y="126" font-size="12" text-anchor="middle" opacity="0.8">1</text>
<g stroke="currentColor"><g stroke-width="1.2"><text x="81.1" y="193.0" font-size="17" stroke="none">A</text><circle cx="101.0" cy="187.9" r="5.1" fill="none" stroke-width="1.3"/><line x1="95.9" y1="187.9" x2="106.1" y2="187.9" stroke-width="1.3"/><line x1="101.0" y1="182.8" x2="101.0" y2="193.0" stroke-width="1.3"/><text x="108.7" y="193.0" font-size="17" stroke="none">B</text><line x1="81.1" y1="179.7" x2="120.0" y2="179.7"/></g></g>
<text x="155.0" y="176" font-size="12" text-anchor="middle" opacity="0.8">1</text>
<text x="205.0" y="176" font-size="12" text-anchor="middle" opacity="0.8">1</text>
<text x="255.0" y="176" font-size="12" text-anchor="middle" opacity="0.8">0</text>
<text x="305.0" y="176" font-size="12" text-anchor="middle" opacity="0.8">0</text>
<text x="355.0" y="176" font-size="12" text-anchor="middle" opacity="0.8">0</text>
<text x="405.0" y="176" font-size="12" text-anchor="middle" opacity="0.8">0</text>
<text x="455.0" y="176" font-size="12" text-anchor="middle" opacity="0.8">1</text>
<text x="505.0" y="176" font-size="12" text-anchor="middle" opacity="0.8">1</text>
<g stroke="currentColor"><g stroke-width="1.2"><text x="96.4" y="243.0" font-size="17" stroke="none">A</text><line x1="96.4" y1="229.7" x2="108.7" y2="229.7"/><text x="108.7" y="243.0" font-size="17" stroke="none">C</text></g></g>
<text x="155.0" y="226" font-size="12" text-anchor="middle" opacity="0.8">0</text>
<text x="205.0" y="226" font-size="12" text-anchor="middle" opacity="0.8">1</text>
<text x="255.0" y="226" font-size="12" text-anchor="middle" opacity="0.8">0</text>
<text x="305.0" y="226" font-size="12" text-anchor="middle" opacity="0.8">1</text>
<text x="355.0" y="226" font-size="12" text-anchor="middle" opacity="0.8">0</text>
<text x="405.0" y="226" font-size="12" text-anchor="middle" opacity="0.8">0</text>
<text x="455.0" y="226" font-size="12" text-anchor="middle" opacity="0.8">0</text>
<text x="505.0" y="226" font-size="12" text-anchor="middle" opacity="0.8">0</text>
<g stroke="currentColor"><g stroke-width="1.2"><text x="109.8" y="293.0" font-size="17" stroke="none">Y</text></g></g>
<text x="155.0" y="276" font-size="12" text-anchor="middle" opacity="0.8">0</text>
<text x="205.0" y="276" font-size="12" text-anchor="middle" opacity="0.8">0</text>
<text x="255.0" y="276" font-size="12" text-anchor="middle" opacity="0.8">1</text>
<text x="305.0" y="276" font-size="12" text-anchor="middle" opacity="0.8">0</text>
<text x="355.0" y="276" font-size="12" text-anchor="middle" opacity="0.8">1</text>
<text x="405.0" y="276" font-size="12" text-anchor="middle" opacity="0.8">1</text>
<text x="455.0" y="276" font-size="12" text-anchor="middle" opacity="0.8">0</text>
<text x="505.0" y="276" font-size="12" text-anchor="middle" opacity="0.8">0</text>
</g></svg>
</div>

---

## 5. การออกแบบวงจร

การออกแบบคือการนำฟังก์ชันที่ให้ในรูปตารางความจริง ไดอะแกรมเวลา หรือสมการ มาสร้างเป็นวงจร

**ขั้นตอน**

1. อ่านตารางความจริงหรือไดอะแกรมเวลา แล้วเขียนฟังก์ชันเป็น $\sum m$ (แถวที่ $Y=1$) หรือ $\prod M$ (แถวที่ $Y=0$)
2. ลดรูปด้วยแผนผังคาร์โนห์หรือกฎพีชคณิตบูลีน
3. ลดจำนวนเกตต่อ โดยใช้สูตรด้านล่าง
4. วาดวงจร

**สูตร**

$$
\begin{aligned}
\overline{A}B+A\overline{B} &= A\oplus B \\
\overline{A}\,\overline{B}+AB &= \overline{A\oplus B} \\
C\overline{B}+C\overline{D} &= C\cdot\overline{BD}
\end{aligned}
$$

การลดรูปให้เหลือน้อยที่สุดทำให้ใช้เกตน้อย ประหยัดค่าใช้จ่าย และทำงานเร็วขึ้น

### 5.1 ตัวอย่าง

**ตัวอย่างที่ 1** จงออกแบบวงจร Logic จากไดอะแกรมเวลาต่อไปนี้

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="494" height="215" viewBox="0 0 520 226" font-family="Times New Roman, serif" font-size="16" fill="currentColor">
<g stroke="currentColor" fill="none" stroke-width="1" stroke-dasharray="4 3" opacity="0.6">
<line x1="100" y1="6" x2="100" y2="212"/>
<line x1="150" y1="6" x2="150" y2="212"/>
<line x1="200" y1="6" x2="200" y2="212"/>
<line x1="250" y1="6" x2="250" y2="212"/>
<line x1="300" y1="6" x2="300" y2="212"/>
<line x1="350" y1="6" x2="350" y2="212"/>
<line x1="400" y1="6" x2="400" y2="212"/>
<line x1="450" y1="6" x2="450" y2="212"/>
<line x1="500" y1="6" x2="500" y2="212"/>
</g><g stroke="currentColor" fill="none" stroke-width="2">
<polyline points="100,56 300,56 300,34 500,34"/>
<polyline points="100,106 200,106 200,84 300,84 300,106 400,106 400,84 500,84"/>
<polyline points="100,156 150,156 150,134 200,134 200,156 250,156 250,134 300,134 300,156 350,156 350,134 400,134 400,156 450,156 450,134 500,134"/>
<polyline points="100,206 150,206 150,184 300,184 300,206 350,206 350,184 400,184 400,206 450,206 450,184 500,184"/>
</g><g stroke="none">
<g stroke="currentColor"><g stroke-width="1.2"><text x="79.8" y="43.0" font-size="17" stroke="none">Input A</text></g></g>
<text x="125.0" y="26" font-size="12" text-anchor="middle" opacity="0.8">0</text>
<text x="175.0" y="26" font-size="12" text-anchor="middle" opacity="0.8">0</text>
<text x="225.0" y="26" font-size="12" text-anchor="middle" opacity="0.8">0</text>
<text x="275.0" y="26" font-size="12" text-anchor="middle" opacity="0.8">0</text>
<text x="325.0" y="26" font-size="12" text-anchor="middle" opacity="0.8">1</text>
<text x="375.0" y="26" font-size="12" text-anchor="middle" opacity="0.8">1</text>
<text x="425.0" y="26" font-size="12" text-anchor="middle" opacity="0.8">1</text>
<text x="475.0" y="26" font-size="12" text-anchor="middle" opacity="0.8">1</text>
<g stroke="currentColor"><g stroke-width="1.2"><text x="79.8" y="93.0" font-size="17" stroke="none">Input B</text></g></g>
<text x="125.0" y="76" font-size="12" text-anchor="middle" opacity="0.8">0</text>
<text x="175.0" y="76" font-size="12" text-anchor="middle" opacity="0.8">0</text>
<text x="225.0" y="76" font-size="12" text-anchor="middle" opacity="0.8">1</text>
<text x="275.0" y="76" font-size="12" text-anchor="middle" opacity="0.8">1</text>
<text x="325.0" y="76" font-size="12" text-anchor="middle" opacity="0.8">0</text>
<text x="375.0" y="76" font-size="12" text-anchor="middle" opacity="0.8">0</text>
<text x="425.0" y="76" font-size="12" text-anchor="middle" opacity="0.8">1</text>
<text x="475.0" y="76" font-size="12" text-anchor="middle" opacity="0.8">1</text>
<g stroke="currentColor"><g stroke-width="1.2"><text x="79.8" y="143.0" font-size="17" stroke="none">Input C</text></g></g>
<text x="125.0" y="126" font-size="12" text-anchor="middle" opacity="0.8">0</text>
<text x="175.0" y="126" font-size="12" text-anchor="middle" opacity="0.8">1</text>
<text x="225.0" y="126" font-size="12" text-anchor="middle" opacity="0.8">0</text>
<text x="275.0" y="126" font-size="12" text-anchor="middle" opacity="0.8">1</text>
<text x="325.0" y="126" font-size="12" text-anchor="middle" opacity="0.8">0</text>
<text x="375.0" y="126" font-size="12" text-anchor="middle" opacity="0.8">1</text>
<text x="425.0" y="126" font-size="12" text-anchor="middle" opacity="0.8">0</text>
<text x="475.0" y="126" font-size="12" text-anchor="middle" opacity="0.8">1</text>
<g stroke="currentColor"><g stroke-width="1.2"><text x="79.8" y="193.0" font-size="17" stroke="none">Output Y</text></g></g>
<text x="125.0" y="176" font-size="12" text-anchor="middle" opacity="0.8">0</text>
<text x="175.0" y="176" font-size="12" text-anchor="middle" opacity="0.8">1</text>
<text x="225.0" y="176" font-size="12" text-anchor="middle" opacity="0.8">1</text>
<text x="275.0" y="176" font-size="12" text-anchor="middle" opacity="0.8">1</text>
<text x="325.0" y="176" font-size="12" text-anchor="middle" opacity="0.8">0</text>
<text x="375.0" y="176" font-size="12" text-anchor="middle" opacity="0.8">1</text>
<text x="425.0" y="176" font-size="12" text-anchor="middle" opacity="0.8">0</text>
<text x="475.0" y="176" font-size="12" text-anchor="middle" opacity="0.8">1</text>
</g></svg>
</div>

$\mathbf{Sol}^{n}$

อ่านค่าลงตารางความจริง

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
1 & 0 & 1 & 1 \\
\hline
1 & 1 & 0 & 0 \\
\hline
1 & 1 & 1 & 1 \\
\hline
\end{array}
$$

ได้ $Y=\sum m(1,2,3,5,7)$

ใส่ $1$ ลงแผนผังที่ช่อง $1,2,3,5,7$

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
<text x="96.0" y="144.0" text-anchor="middle" font-size="22">1</text>
<text x="181" y="59" text-anchor="end" font-size="11" fill-opacity="0.65">2</text>
<text x="156.0" y="84.0" text-anchor="middle" font-size="22">1</text>
<text x="181" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">3</text>
<text x="156.0" y="144.0" text-anchor="middle" font-size="22">1</text>
<text x="301" y="59" text-anchor="end" font-size="11" fill-opacity="0.65">4</text>
<text x="301" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">5</text>
<text x="276.0" y="144.0" text-anchor="middle" font-size="22">1</text>
<text x="241" y="59" text-anchor="end" font-size="11" fill-opacity="0.65">6</text>
<text x="241" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">7</text>
<text x="216.0" y="144.0" text-anchor="middle" font-size="22">1</text>
<path d="M138.5,49.5 L173.5,49.5 M182.5,58.5 L182.5,153.5 M173.5,162.5 L138.5,162.5 M129.5,153.5 L129.5,58.5 M129.5,58.5 A9,9 0 0 1 138.5,49.5 M173.5,49.5 A9,9 0 0 1 182.5,58.5 M182.5,153.5 A9,9 0 0 1 173.5,162.5 M138.5,162.5 A9,9 0 0 1 129.5,153.5" stroke="#e8743b" stroke-width="2.6" fill="none"/>
<text x="134.5" y="157.5" font-size="14" fill="#e8743b" font-weight="bold">1</text>
<path d="M81.1,112.1 L290.9,112.1 M299.9,121.1 L299.9,150.9 M290.9,159.9 L81.1,159.9 M72.1,150.9 L72.1,121.1 M72.1,121.1 A9,9 0 0 1 81.1,112.1 M290.9,112.1 A9,9 0 0 1 299.9,121.1 M299.9,150.9 A9,9 0 0 1 290.9,159.9 M81.1,159.9 A9,9 0 0 1 72.1,150.9" stroke="#3b8be8" stroke-width="2.6" fill="none"/>
<text x="77.1" y="154.9" font-size="14" fill="#3b8be8" font-weight="bold">2</text>
</svg>
</div>

$$
\begin{aligned}
\text{วงที่ 1}\ (2,3) &\Rightarrow \overline{A}B \\
\text{วงที่ 2}\ (1,3,5,7) &\Rightarrow C \\
Y &= \overline{A}B+C
\end{aligned}
$$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="459" height="245" viewBox="0 0 510 272" font-family="Times New Roman, serif" font-size="18" fill="currentColor"><g stroke="currentColor" stroke-width="1.8" fill="none"><line x1="46.0" y1="88.0" x2="170.0" y2="88.0"/>
<line x1="216.0" y1="88.0" x2="238.0" y2="88.0"/>
<line x1="238.0" y1="88.0" x2="238.0" y2="143.0"/>
<line x1="238.0" y1="143.0" x2="258.0" y2="143.0"/>
<line x1="76.0" y1="157.0" x2="258.0" y2="157.0"/>
<line x1="314.0" y1="150.0" x2="336.0" y2="150.0"/>
<line x1="336.0" y1="150.0" x2="336.0" y2="211.0"/>
<line x1="336.0" y1="211.0" x2="362.5" y2="211.0"/>
<line x1="106.0" y1="225.0" x2="362.5" y2="225.0"/>
<line x1="46.0" y1="34.0" x2="46.0" y2="88.0"/>
<line x1="76.0" y1="34.0" x2="76.0" y2="157.0"/>
<line x1="106.0" y1="34.0" x2="106.0" y2="225.0"/>
<polygon points="170,68 170,108 206,88"/>
<circle cx="211" cy="88" r="5"/>
<path d="M258,124 H288 A26,26 0 0 1 288,176 H258 Z"/>
<path d="M356,192 C378,192 404,205.0 420,218 C404,231.0 378,244 356,244 Q370,218 356,192 Z"/>
<line x1="420.0" y1="218.0" x2="440.0" y2="218.0"/>
<circle cx="440" cy="218" r="3.5" fill="currentColor" stroke="none"/></g><text x="46" y="24" text-anchor="middle">A</text><text x="76" y="24" text-anchor="middle">B</text><text x="106" y="24" text-anchor="middle">C</text><text x="450" y="223">Y</text></svg>
</div>

$\mathbf{Ans}\quad Y = \overline{A}B+C$

**ตัวอย่างที่ 2** จงออกแบบวงจรจากสมการ $f(A,B,C)=\sum m(0,1,2,3,4,7)$

$\mathbf{Sol}^{n}$

ใส่ $1$ ลงแผนผังที่ช่อง $0,1,2,3,4,7$

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
<text x="156.0" y="84.0" text-anchor="middle" font-size="22">1</text>
<text x="181" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">3</text>
<text x="156.0" y="144.0" text-anchor="middle" font-size="22">1</text>
<text x="301" y="59" text-anchor="end" font-size="11" fill-opacity="0.65">4</text>
<text x="276.0" y="84.0" text-anchor="middle" font-size="22">1</text>
<text x="301" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">5</text>
<text x="241" y="59" text-anchor="end" font-size="11" fill-opacity="0.65">6</text>
<text x="241" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">7</text>
<text x="216.0" y="144.0" text-anchor="middle" font-size="22">1</text>
<path d="M78.5,49.5 L173.5,49.5 M182.5,58.5 L182.5,153.5 M173.5,162.5 L78.5,162.5 M69.5,153.5 L69.5,58.5 M69.5,58.5 A9,9 0 0 1 78.5,49.5 M173.5,49.5 A9,9 0 0 1 182.5,58.5 M182.5,153.5 A9,9 0 0 1 173.5,162.5 M78.5,162.5 A9,9 0 0 1 69.5,153.5" stroke="#e8743b" stroke-width="2.6" fill="none"/>
<text x="74.5" y="157.5" font-size="14" fill="#e8743b" font-weight="bold">1</text>
<path d="M261.1,52.1 L299.9,52.1 M299.9,99.9 L261.1,99.9 M252.1,90.9 L252.1,61.1 M252.1,61.1 A9,9 0 0 1 261.1,52.1 M261.1,99.9 A9,9 0 0 1 252.1,90.9" stroke="#3b8be8" stroke-width="2.6" fill="none"/>
<text x="257.1" y="94.9" font-size="14" fill="#3b8be8" font-weight="bold">2</text>
<path d="M72.1,52.1 L110.9,52.1 M119.9,61.1 L119.9,90.9 M110.9,99.9 L72.1,99.9 M110.9,52.1 A9,9 0 0 1 119.9,61.1 M119.9,90.9 A9,9 0 0 1 110.9,99.9" stroke="#3b8be8" stroke-width="2.6" fill="none"/>
<path d="M143.7,114.7 L228.3,114.7 M237.3,123.7 L237.3,148.3 M228.3,157.3 L143.7,157.3 M134.7,148.3 L134.7,123.7 M134.7,123.7 A9,9 0 0 1 143.7,114.7 M228.3,114.7 A9,9 0 0 1 237.3,123.7 M237.3,148.3 A9,9 0 0 1 228.3,157.3 M143.7,157.3 A9,9 0 0 1 134.7,148.3" stroke="#2fae5f" stroke-width="2.6" fill="none"/>
<text x="139.7" y="152.3" font-size="14" fill="#2fae5f" font-weight="bold">3</text>
</svg>
</div>

$$
\begin{aligned}
\text{วงที่ 1}\ (0,1,2,3) &\Rightarrow \overline{A} \\
\text{วงที่ 2}\ (0,4) &\Rightarrow \overline{B}\,\overline{C} \\
\text{วงที่ 3}\ (3,7) &\Rightarrow BC \\
f &= \overline{A}+\overline{B}\,\overline{C}+BC
\end{aligned}
$$

$\overline{B}\,\overline{C}+BC=\overline{B\oplus C}$ จึงได้ $f = \overline{A}+\overline{B\oplus C}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="407" height="245" viewBox="0 0 452 272" font-family="Times New Roman, serif" font-size="18" fill="currentColor"><g stroke="currentColor" stroke-width="1.8" fill="none"><line x1="46.0" y1="88.0" x2="170.0" y2="88.0"/>
<line x1="76.0" y1="143.0" x2="166.5" y2="143.0"/>
<line x1="106.0" y1="157.0" x2="166.5" y2="157.0"/>
<line x1="216.0" y1="88.0" x2="266.0" y2="88.0"/>
<line x1="266.0" y1="88.0" x2="266.0" y2="211.0"/>
<line x1="266.0" y1="211.0" x2="304.5" y2="211.0"/>
<line x1="244.0" y1="150.0" x2="278.0" y2="150.0"/>
<line x1="278.0" y1="150.0" x2="278.0" y2="225.0"/>
<line x1="278.0" y1="225.0" x2="304.5" y2="225.0"/>
<line x1="46.0" y1="34.0" x2="46.0" y2="88.0"/>
<line x1="76.0" y1="34.0" x2="76.0" y2="143.0"/>
<line x1="106.0" y1="34.0" x2="106.0" y2="157.0"/>
<polygon points="170,68 170,108 206,88"/>
<circle cx="211" cy="88" r="5"/>
<path d="M160,124 Q174,150 160,176"/><path d="M170,124 C192,124 218,137.0 234,150 C218,163.0 192,176 170,176 Q184,150 170,124 Z"/>
<circle cx="239" cy="150" r="5"/>
<path d="M298,192 C320,192 346,205.0 362,218 C346,231.0 320,244 298,244 Q312,218 298,192 Z"/>
<line x1="362.0" y1="218.0" x2="382.0" y2="218.0"/>
<circle cx="382" cy="218" r="3.5" fill="currentColor" stroke="none"/></g><text x="46" y="24" text-anchor="middle">A</text><text x="76" y="24" text-anchor="middle">B</text><text x="106" y="24" text-anchor="middle">C</text><text x="392" y="223">Y</text></svg>
</div>

$\mathbf{Ans}\quad f = \overline{A}+\overline{B\oplus C}$

**ตัวอย่างที่ 3** จงออกแบบวงจรจากตารางความจริง 4 ตัวแปร ที่ $Y=1$ เมื่อแถว $2,3,6,10,11,14$

$\mathbf{Sol}^{n}$

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
<text x="93.0" y="243.0" text-anchor="middle" font-size="22">1</text>
<text x="115" y="167" text-anchor="end" font-size="11" fill-opacity="0.65">3</text>
<text x="93.0" y="189.0" text-anchor="middle" font-size="22">1</text>
<text x="169" y="59" text-anchor="end" font-size="11" fill-opacity="0.65">4</text>
<text x="169" y="113" text-anchor="end" font-size="11" fill-opacity="0.65">5</text>
<text x="169" y="221" text-anchor="end" font-size="11" fill-opacity="0.65">6</text>
<text x="147.0" y="243.0" text-anchor="middle" font-size="22">1</text>
<text x="169" y="167" text-anchor="end" font-size="11" fill-opacity="0.65">7</text>
<text x="277" y="59" text-anchor="end" font-size="11" fill-opacity="0.65">8</text>
<text x="277" y="113" text-anchor="end" font-size="11" fill-opacity="0.65">9</text>
<text x="277" y="221" text-anchor="end" font-size="11" fill-opacity="0.65">10</text>
<text x="255.0" y="243.0" text-anchor="middle" font-size="22">1</text>
<text x="277" y="167" text-anchor="end" font-size="11" fill-opacity="0.65">11</text>
<text x="255.0" y="189.0" text-anchor="middle" font-size="22">1</text>
<text x="223" y="59" text-anchor="end" font-size="11" fill-opacity="0.65">12</text>
<text x="223" y="113" text-anchor="end" font-size="11" fill-opacity="0.65">13</text>
<text x="223" y="221" text-anchor="end" font-size="11" fill-opacity="0.65">14</text>
<text x="201.0" y="243.0" text-anchor="middle" font-size="22">1</text>
<text x="223" y="167" text-anchor="end" font-size="11" fill-opacity="0.65">15</text>
<path d="M240.5,157.5 L278.5,157.5 M278.5,258.5 L240.5,258.5 M231.5,249.5 L231.5,166.5 M231.5,166.5 A9,9 0 0 1 240.5,157.5 M240.5,258.5 A9,9 0 0 1 231.5,249.5" stroke="#e8743b" stroke-width="2.6" fill="none"/>
<text x="236.5" y="253.5" font-size="14" fill="#e8743b" font-weight="bold">1</text>
<path d="M69.5,157.5 L107.5,157.5 M116.5,166.5 L116.5,249.5 M107.5,258.5 L69.5,258.5 M107.5,157.5 A9,9 0 0 1 116.5,166.5 M116.5,249.5 A9,9 0 0 1 107.5,258.5" stroke="#e8743b" stroke-width="2.6" fill="none"/>
<path d="M81.1,214.1 L266.9,214.1 M275.9,223.1 L275.9,246.9 M266.9,255.9 L81.1,255.9 M72.1,246.9 L72.1,223.1 M72.1,223.1 A9,9 0 0 1 81.1,214.1 M266.9,214.1 A9,9 0 0 1 275.9,223.1 M275.9,246.9 A9,9 0 0 1 266.9,255.9 M81.1,255.9 A9,9 0 0 1 72.1,246.9" stroke="#3b8be8" stroke-width="2.6" fill="none"/>
<text x="77.1" y="250.9" font-size="14" fill="#3b8be8" font-weight="bold">2</text>
</svg>
</div>

$$
\begin{aligned}
\text{วงที่ 1}\ (2,3,10,11) &\Rightarrow \overline{B}C \\
\text{วงที่ 2}\ (2,6,10,14) &\Rightarrow C\overline{D} \\
Y &= \overline{B}C+C\overline{D}
\end{aligned}
$$

ดึง $C$ ออกมา แล้วใช้กฎของเดอร์มอร์แกน

$$
\begin{aligned}
Y &= C(\overline{B}+\overline{D}) \\
&= C\cdot\overline{BD}
\end{aligned}
$$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="409" height="194" viewBox="0 0 454 216" font-family="Times New Roman, serif" font-size="18" fill="currentColor"><g stroke="currentColor" stroke-width="1.8" fill="none"><line x1="76.0" y1="87.0" x2="200.0" y2="87.0"/>
<line x1="136.0" y1="101.0" x2="200.0" y2="101.0"/>
<line x1="106.0" y1="155.0" x2="308.0" y2="155.0"/>
<line x1="266.0" y1="94.0" x2="288.0" y2="94.0"/>
<line x1="288.0" y1="94.0" x2="288.0" y2="169.0"/>
<line x1="288.0" y1="169.0" x2="308.0" y2="169.0"/>
<line x1="46.0" y1="34.0" x2="46.0" y2="34.0"/>
<line x1="76.0" y1="34.0" x2="76.0" y2="87.0"/>
<line x1="106.0" y1="34.0" x2="106.0" y2="155.0"/>
<line x1="136.0" y1="34.0" x2="136.0" y2="101.0"/>
<path d="M200,68 H230 A26,26 0 0 1 230,120 H200 Z"/>
<circle cx="261" cy="94" r="5"/>
<path d="M308,136 H338 A26,26 0 0 1 338,188 H308 Z"/>
<line x1="364.0" y1="162.0" x2="384.0" y2="162.0"/>
<circle cx="384" cy="162" r="3.5" fill="currentColor" stroke="none"/></g><text x="46" y="24" text-anchor="middle">A</text><text x="76" y="24" text-anchor="middle">B</text><text x="106" y="24" text-anchor="middle">C</text><text x="136" y="24" text-anchor="middle">D</text><text x="394" y="167">Y</text></svg>
</div>

$\mathbf{Ans}\quad Y = C\cdot\overline{BD}$ ใช้เกตเพียง 2 ตัว

---

## 6. ข้อควรระวังในการสอบ

1. วงจรคอมไบเนชันไม่มี Feedback และไม่มีหน่วยความจำ
2. SOP ดูแถว $Y=1$ ส่วน POS ดูแถว $Y=0$ และตัวแปรกลับขั้วกัน
3. ตารางความจริงต้องไล่แถวตามลำดับ $000$ ถึง $111$
4. ลดรูปก่อนวาดวงจรเสมอ แล้วดูว่าใช้ XOR, XNOR หรือเดอร์มอร์แกนลดเกตได้หรือไม่
5. ฟังก์ชันเดียวกันวาดวงจรได้หลายแบบ ตอบแบบที่ลดรูปแล้วถูกต้องก็ได้คะแนน
