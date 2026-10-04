# บทที่ 4 แผนผังคาร์โนห์ (Karnaugh Map)

---

## การใส่ค่าลงแผนผังคาร์โนห์

### ตัวอย่างที่ 1  จงเขียนค่าของ $Z = \overline{A}B+AB$ ลงแผนผังคาร์โนห์

$\mathbf{Sol}^{n}$

$$
\begin{aligned}
\overline{A}B &\Rightarrow \text{ใส่ } 1 \text{ ลงช่อง } 1 \\
AB &\Rightarrow \text{ใส่ } 1 \text{ ลงช่อง } 3
\end{aligned}
$$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="198" height="178" viewBox="0 0 198 178" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.6" fill="none">
<rect x="66" y="46" width="120" height="120"/>
<line x1="126" y1="46" x2="126" y2="166"/>
<line x1="66" y1="106" x2="186" y2="106"/>
<line x1="8" y1="8" x2="66" y2="46"/>
</g>
<text x="96.0" y="37" text-anchor="middle">0</text>
<text x="156.0" y="37" text-anchor="middle">1</text>
<text x="57" y="82.0" text-anchor="end">0</text>
<text x="57" y="142.0" text-anchor="end">1</text>
<text x="60" y="18" text-anchor="end">A</text><text x="10" y="40">B</text>
<text x="121" y="59" text-anchor="end" font-size="11" fill-opacity="0.65">0</text>
<text x="96.0" y="84.0" text-anchor="middle" font-size="22">0</text>
<text x="121" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">1</text>
<text x="96.0" y="144.0" text-anchor="middle" font-size="22">1</text>
<text x="181" y="59" text-anchor="end" font-size="11" fill-opacity="0.65">2</text>
<text x="156.0" y="84.0" text-anchor="middle" font-size="22">0</text>
<text x="181" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">3</text>
<text x="156.0" y="144.0" text-anchor="middle" font-size="22">1</text>
</svg>
</div>

### ตัวอย่างที่ 2  จงเขียนค่าของ $Z = (\overline{A}+\overline{B}+C)(A+\overline{B}+C)(A+\overline{B}+\overline{C})(\overline{A}+B+C)(A+B+C)$ ลงแผนผังคาร์โนห์

$\mathbf{Sol}^{n}$

$$
\begin{aligned}
(\overline{A}+\overline{B}+C) &\Rightarrow \text{ใส่ } 0 \text{ ลงช่อง } 6 \\
(A+\overline{B}+C) &\Rightarrow \text{ใส่ } 0 \text{ ลงช่อง } 2 \\
(A+\overline{B}+\overline{C}) &\Rightarrow \text{ใส่ } 0 \text{ ลงช่อง } 3 \\
(\overline{A}+B+C) &\Rightarrow \text{ใส่ } 0 \text{ ลงช่อง } 4 \\
(A+B+C) &\Rightarrow \text{ใส่ } 0 \text{ ลงช่อง } 0
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
<text x="96.0" y="84.0" text-anchor="middle" font-size="22">0</text>
<text x="121" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">1</text>
<text x="96.0" y="144.0" text-anchor="middle" font-size="22">1</text>
<text x="181" y="59" text-anchor="end" font-size="11" fill-opacity="0.65">2</text>
<text x="156.0" y="84.0" text-anchor="middle" font-size="22">0</text>
<text x="181" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">3</text>
<text x="156.0" y="144.0" text-anchor="middle" font-size="22">0</text>
<text x="301" y="59" text-anchor="end" font-size="11" fill-opacity="0.65">4</text>
<text x="276.0" y="84.0" text-anchor="middle" font-size="22">0</text>
<text x="301" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">5</text>
<text x="276.0" y="144.0" text-anchor="middle" font-size="22">1</text>
<text x="241" y="59" text-anchor="end" font-size="11" fill-opacity="0.65">6</text>
<text x="216.0" y="84.0" text-anchor="middle" font-size="22">0</text>
<text x="241" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">7</text>
<text x="216.0" y="144.0" text-anchor="middle" font-size="22">1</text>
</svg>
</div>

---

## การสร้างลูปและการอ่านผล

### ตัวอย่างที่ 1  จงหาสมการที่ง่ายที่สุด (SOP) จากแผนผังคาร์โนห์ต่อไปนี้

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
<text x="181" y="59" text-anchor="end" font-size="11" fill-opacity="0.65">2</text>
<text x="156.0" y="84.0" text-anchor="middle" font-size="22">1</text>
<text x="181" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">3</text>
<text x="301" y="59" text-anchor="end" font-size="11" fill-opacity="0.65">4</text>
<text x="301" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">5</text>
<text x="276.0" y="144.0" text-anchor="middle" font-size="22">1</text>
<text x="241" y="59" text-anchor="end" font-size="11" fill-opacity="0.65">6</text>
<text x="241" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">7</text>
<text x="216.0" y="144.0" text-anchor="middle" font-size="22">1</text>
</svg>
</div>

$\mathbf{Sol}^{n}$

ใส่ $1$ ลงแผนผังที่ช่อง $0,2,5,7$

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
<text x="181" y="59" text-anchor="end" font-size="11" fill-opacity="0.65">2</text>
<text x="156.0" y="84.0" text-anchor="middle" font-size="22">1</text>
<text x="181" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">3</text>
<text x="301" y="59" text-anchor="end" font-size="11" fill-opacity="0.65">4</text>
<text x="301" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">5</text>
<text x="276.0" y="144.0" text-anchor="middle" font-size="22">1</text>
<text x="241" y="59" text-anchor="end" font-size="11" fill-opacity="0.65">6</text>
<text x="241" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">7</text>
<text x="216.0" y="144.0" text-anchor="middle" font-size="22">1</text>
<path d="M78.5,49.5 L173.5,49.5 M182.5,58.5 L182.5,93.5 M173.5,102.5 L78.5,102.5 M69.5,93.5 L69.5,58.5 M69.5,58.5 A9,9 0 0 1 78.5,49.5 M173.5,49.5 A9,9 0 0 1 182.5,58.5 M182.5,93.5 A9,9 0 0 1 173.5,102.5 M78.5,102.5 A9,9 0 0 1 69.5,93.5" stroke="#e8743b" stroke-width="2.6" fill="none"/>
<text x="74.5" y="97.5" font-size="14" fill="#e8743b" font-weight="bold">1</text>
<path d="M201.1,112.1 L290.9,112.1 M299.9,121.1 L299.9,150.9 M290.9,159.9 L201.1,159.9 M192.1,150.9 L192.1,121.1 M192.1,121.1 A9,9 0 0 1 201.1,112.1 M290.9,112.1 A9,9 0 0 1 299.9,121.1 M299.9,150.9 A9,9 0 0 1 290.9,159.9 M201.1,159.9 A9,9 0 0 1 192.1,150.9" stroke="#3b8be8" stroke-width="2.6" fill="none"/>
<text x="197.1" y="154.9" font-size="14" fill="#3b8be8" font-weight="bold">2</text>
</svg>
</div>

$$
\begin{aligned}
\text{วงที่ 1}\ (0,2) &\Rightarrow \overline{A}\,\overline{C} \\
\text{วงที่ 2}\ (5,7) &\Rightarrow AC \\
Z &= \overline{A}\,\overline{C}+AC
\end{aligned}
$$

---

### ตัวอย่างที่ 2  จงหาสมการที่ง่ายที่สุด (SOP) จากแผนผังคาร์โนห์ต่อไปนี้

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
<text x="156.0" y="84.0" text-anchor="middle" font-size="22">1</text>
<text x="181" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">3</text>
<text x="156.0" y="144.0" text-anchor="middle" font-size="22">1</text>
<text x="301" y="59" text-anchor="end" font-size="11" fill-opacity="0.65">4</text>
<text x="301" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">5</text>
<text x="276.0" y="144.0" text-anchor="middle" font-size="22">1</text>
<text x="241" y="59" text-anchor="end" font-size="11" fill-opacity="0.65">6</text>
<text x="216.0" y="84.0" text-anchor="middle" font-size="22">1</text>
<text x="241" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">7</text>
<text x="216.0" y="144.0" text-anchor="middle" font-size="22">1</text>
</svg>
</div>

$\mathbf{Sol}^{n}$

ใส่ $1$ ลงแผนผังที่ช่อง $2,3,5,6,7$

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
<text x="156.0" y="84.0" text-anchor="middle" font-size="22">1</text>
<text x="181" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">3</text>
<text x="156.0" y="144.0" text-anchor="middle" font-size="22">1</text>
<text x="301" y="59" text-anchor="end" font-size="11" fill-opacity="0.65">4</text>
<text x="301" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">5</text>
<text x="276.0" y="144.0" text-anchor="middle" font-size="22">1</text>
<text x="241" y="59" text-anchor="end" font-size="11" fill-opacity="0.65">6</text>
<text x="216.0" y="84.0" text-anchor="middle" font-size="22">1</text>
<text x="241" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">7</text>
<text x="216.0" y="144.0" text-anchor="middle" font-size="22">1</text>
<path d="M138.5,49.5 L233.5,49.5 M242.5,58.5 L242.5,153.5 M233.5,162.5 L138.5,162.5 M129.5,153.5 L129.5,58.5 M129.5,58.5 A9,9 0 0 1 138.5,49.5 M233.5,49.5 A9,9 0 0 1 242.5,58.5 M242.5,153.5 A9,9 0 0 1 233.5,162.5 M138.5,162.5 A9,9 0 0 1 129.5,153.5" stroke="#e8743b" stroke-width="2.6" fill="none"/>
<text x="134.5" y="157.5" font-size="14" fill="#e8743b" font-weight="bold">1</text>
<path d="M201.1,112.1 L290.9,112.1 M299.9,121.1 L299.9,150.9 M290.9,159.9 L201.1,159.9 M192.1,150.9 L192.1,121.1 M192.1,121.1 A9,9 0 0 1 201.1,112.1 M290.9,112.1 A9,9 0 0 1 299.9,121.1 M299.9,150.9 A9,9 0 0 1 290.9,159.9 M201.1,159.9 A9,9 0 0 1 192.1,150.9" stroke="#3b8be8" stroke-width="2.6" fill="none"/>
<text x="197.1" y="154.9" font-size="14" fill="#3b8be8" font-weight="bold">2</text>
</svg>
</div>

$$
\begin{aligned}
\text{วงที่ 1}\ (2,3,6,7) &\Rightarrow B \\
\text{วงที่ 2}\ (5,7) &\Rightarrow AC \\
Z &= B+AC
\end{aligned}
$$

---

### ตัวอย่างที่ 3  จงหาสมการที่ง่ายที่สุด (SOP) จากแผนผังคาร์โนห์ต่อไปนี้

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
<text x="181" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">3</text>
<text x="301" y="59" text-anchor="end" font-size="11" fill-opacity="0.65">4</text>
<text x="301" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">5</text>
<text x="276.0" y="144.0" text-anchor="middle" font-size="22">1</text>
<text x="241" y="59" text-anchor="end" font-size="11" fill-opacity="0.65">6</text>
<text x="241" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">7</text>
</svg>
</div>

$\mathbf{Sol}^{n}$

ใส่ $1$ ลงแผนผังที่ช่อง $1,5$

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
<text x="181" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">3</text>
<text x="301" y="59" text-anchor="end" font-size="11" fill-opacity="0.65">4</text>
<text x="301" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">5</text>
<text x="276.0" y="144.0" text-anchor="middle" font-size="22">1</text>
<text x="241" y="59" text-anchor="end" font-size="11" fill-opacity="0.65">6</text>
<text x="241" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">7</text>
<path d="M258.5,109.5 L302.5,109.5 M302.5,162.5 L258.5,162.5 M249.5,153.5 L249.5,118.5 M249.5,118.5 A9,9 0 0 1 258.5,109.5 M258.5,162.5 A9,9 0 0 1 249.5,153.5" stroke="#e8743b" stroke-width="2.6" fill="none"/>
<text x="254.5" y="157.5" font-size="14" fill="#e8743b" font-weight="bold">1</text>
<path d="M69.5,109.5 L113.5,109.5 M122.5,118.5 L122.5,153.5 M113.5,162.5 L69.5,162.5 M113.5,109.5 A9,9 0 0 1 122.5,118.5 M122.5,153.5 A9,9 0 0 1 113.5,162.5" stroke="#e8743b" stroke-width="2.6" fill="none"/>
</svg>
</div>

$$
\begin{aligned}
\text{วงที่ 1}\ (1,5) &\Rightarrow \overline{B}C \\
Z &= \overline{B}C
\end{aligned}
$$

---

### ตัวอย่างที่ 4  จงแก้สมการบูลีนให้อยู่ในรูปที่ง่ายที่สุดโดยใช้แผนผังคาร์โนห์

$$
Z = \overline{A}\,\overline{B}\,\overline{C}\,\overline{D}+\overline{A}\,\overline{B}\,\overline{C}D+\overline{A}B\overline{C}\,\overline{D}+\overline{A}B\overline{C}D+A\overline{B}\,\overline{C}\,\overline{D}+ABCD
$$

$\mathbf{Sol}^{n}$

$$
\begin{aligned}
\overline{A}\,\overline{B}\,\overline{C}\,\overline{D} &\Rightarrow \text{ใส่ } 1 \text{ ลงช่อง } 0 \\
\overline{A}\,\overline{B}\,\overline{C}D &\Rightarrow \text{ใส่ } 1 \text{ ลงช่อง } 1 \\
\overline{A}B\overline{C}\,\overline{D} &\Rightarrow \text{ใส่ } 1 \text{ ลงช่อง } 4 \\
\overline{A}B\overline{C}D &\Rightarrow \text{ใส่ } 1 \text{ ลงช่อง } 5 \\
A\overline{B}\,\overline{C}\,\overline{D} &\Rightarrow \text{ใส่ } 1 \text{ ลงช่อง } 8 \\
ABCD &\Rightarrow \text{ใส่ } 1 \text{ ลงช่อง } 15
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
<text x="115" y="167" text-anchor="end" font-size="11" fill-opacity="0.65">3</text>
<text x="169" y="59" text-anchor="end" font-size="11" fill-opacity="0.65">4</text>
<text x="147.0" y="81.0" text-anchor="middle" font-size="22">1</text>
<text x="169" y="113" text-anchor="end" font-size="11" fill-opacity="0.65">5</text>
<text x="147.0" y="135.0" text-anchor="middle" font-size="22">1</text>
<text x="169" y="221" text-anchor="end" font-size="11" fill-opacity="0.65">6</text>
<text x="169" y="167" text-anchor="end" font-size="11" fill-opacity="0.65">7</text>
<text x="277" y="59" text-anchor="end" font-size="11" fill-opacity="0.65">8</text>
<text x="255.0" y="81.0" text-anchor="middle" font-size="22">1</text>
<text x="277" y="113" text-anchor="end" font-size="11" fill-opacity="0.65">9</text>
<text x="277" y="221" text-anchor="end" font-size="11" fill-opacity="0.65">10</text>
<text x="277" y="167" text-anchor="end" font-size="11" fill-opacity="0.65">11</text>
<text x="223" y="59" text-anchor="end" font-size="11" fill-opacity="0.65">12</text>
<text x="223" y="113" text-anchor="end" font-size="11" fill-opacity="0.65">13</text>
<text x="223" y="221" text-anchor="end" font-size="11" fill-opacity="0.65">14</text>
<text x="223" y="167" text-anchor="end" font-size="11" fill-opacity="0.65">15</text>
<text x="201.0" y="189.0" text-anchor="middle" font-size="22">1</text>
<path d="M78.5,49.5 L161.5,49.5 M170.5,58.5 L170.5,141.5 M161.5,150.5 L78.5,150.5 M69.5,141.5 L69.5,58.5 M69.5,58.5 A9,9 0 0 1 78.5,49.5 M161.5,49.5 A9,9 0 0 1 170.5,58.5 M170.5,141.5 A9,9 0 0 1 161.5,150.5 M78.5,150.5 A9,9 0 0 1 69.5,141.5" stroke="#e8743b" stroke-width="2.6" fill="none"/>
<text x="74.5" y="145.5" font-size="14" fill="#e8743b" font-weight="bold">1</text>
<path d="M243.1,52.1 L275.9,52.1 M275.9,93.9 L243.1,93.9 M234.1,84.9 L234.1,61.1 M234.1,61.1 A9,9 0 0 1 243.1,52.1 M243.1,93.9 A9,9 0 0 1 234.1,84.9" stroke="#3b8be8" stroke-width="2.6" fill="none"/>
<text x="239.1" y="88.9" font-size="14" fill="#3b8be8" font-weight="bold">2</text>
<path d="M72.1,52.1 L104.9,52.1 M113.9,61.1 L113.9,84.9 M104.9,93.9 L72.1,93.9 M104.9,52.1 A9,9 0 0 1 113.9,61.1 M113.9,84.9 A9,9 0 0 1 104.9,93.9" stroke="#3b8be8" stroke-width="2.6" fill="none"/>
<path d="M191.7,162.7 L210.3,162.7 M219.3,171.7 L219.3,190.3 M210.3,199.3 L191.7,199.3 M182.7,190.3 L182.7,171.7 M182.7,171.7 A9,9 0 0 1 191.7,162.7 M210.3,162.7 A9,9 0 0 1 219.3,171.7 M219.3,190.3 A9,9 0 0 1 210.3,199.3 M191.7,199.3 A9,9 0 0 1 182.7,190.3" stroke="#2fae5f" stroke-width="2.6" fill="none"/>
<text x="187.7" y="194.3" font-size="14" fill="#2fae5f" font-weight="bold">3</text>
</svg>
</div>

$$
\begin{aligned}
\text{วงที่ 1}\ (0,1,4,5) &\Rightarrow \overline{A}\,\overline{C} \\
\text{วงที่ 2}\ (0,8) &\Rightarrow \overline{B}\,\overline{C}\,\overline{D} \\
\text{วงที่ 3}\ (15) &\Rightarrow ABCD \\
Z &= \overline{A}\,\overline{C}+\overline{B}\,\overline{C}\,\overline{D}+ABCD
\end{aligned}
$$

---

### ตัวอย่างที่ 5  จงเขียนสมการบูลีนจากตารางความจริงต่อไปนี้

$$
\begin{array}{|c|c|c|c|}
\hline
A & B & C & Z \\
\hline
0 & 0 & 0 & 0 \\
\hline
0 & 0 & 1 & 0 \\
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
1 & 1 & 1 & 0 \\
\hline
\end{array}
$$

$\mathbf{Sol}^{n}$

ใส่ $1$ ลงช่องที่ $Z=1$ คือช่อง $2,3,5$

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
<text x="156.0" y="84.0" text-anchor="middle" font-size="22">1</text>
<text x="181" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">3</text>
<text x="156.0" y="144.0" text-anchor="middle" font-size="22">1</text>
<text x="301" y="59" text-anchor="end" font-size="11" fill-opacity="0.65">4</text>
<text x="301" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">5</text>
<text x="276.0" y="144.0" text-anchor="middle" font-size="22">1</text>
<text x="241" y="59" text-anchor="end" font-size="11" fill-opacity="0.65">6</text>
<text x="241" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">7</text>
<path d="M138.5,49.5 L173.5,49.5 M182.5,58.5 L182.5,153.5 M173.5,162.5 L138.5,162.5 M129.5,153.5 L129.5,58.5 M129.5,58.5 A9,9 0 0 1 138.5,49.5 M173.5,49.5 A9,9 0 0 1 182.5,58.5 M182.5,153.5 A9,9 0 0 1 173.5,162.5 M138.5,162.5 A9,9 0 0 1 129.5,153.5" stroke="#e8743b" stroke-width="2.6" fill="none"/>
<text x="134.5" y="157.5" font-size="14" fill="#e8743b" font-weight="bold">1</text>
<path d="M261.1,112.1 L290.9,112.1 M299.9,121.1 L299.9,150.9 M290.9,159.9 L261.1,159.9 M252.1,150.9 L252.1,121.1 M252.1,121.1 A9,9 0 0 1 261.1,112.1 M290.9,112.1 A9,9 0 0 1 299.9,121.1 M299.9,150.9 A9,9 0 0 1 290.9,159.9 M261.1,159.9 A9,9 0 0 1 252.1,150.9" stroke="#3b8be8" stroke-width="2.6" fill="none"/>
<text x="257.1" y="154.9" font-size="14" fill="#3b8be8" font-weight="bold">2</text>
</svg>
</div>

$$
\begin{aligned}
\text{วงที่ 1}\ (2,3) &\Rightarrow \overline{A}B \\
\text{วงที่ 2}\ (5) &\Rightarrow A\overline{B}C \\
Z &= \overline{A}B+A\overline{B}C
\end{aligned}
$$

---

### ตัวอย่างที่ 6  จงหาสมการที่ง่ายที่สุดในรูป POS จากแผนผังคาร์โนห์ต่อไปนี้

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
<text x="96.0" y="144.0" text-anchor="middle" font-size="22">0</text>
<text x="181" y="59" text-anchor="end" font-size="11" fill-opacity="0.65">2</text>
<text x="156.0" y="84.0" text-anchor="middle" font-size="22">0</text>
<text x="181" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">3</text>
<text x="156.0" y="144.0" text-anchor="middle" font-size="22">0</text>
<text x="301" y="59" text-anchor="end" font-size="11" fill-opacity="0.65">4</text>
<text x="301" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">5</text>
<text x="241" y="59" text-anchor="end" font-size="11" fill-opacity="0.65">6</text>
<text x="216.0" y="84.0" text-anchor="middle" font-size="22">0</text>
<text x="241" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">7</text>
</svg>
</div>

$\mathbf{Sol}^{n}$

ใส่ $0$ ลงแผนผังที่ช่อง $1,2,3,6$

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
<text x="96.0" y="144.0" text-anchor="middle" font-size="22">0</text>
<text x="181" y="59" text-anchor="end" font-size="11" fill-opacity="0.65">2</text>
<text x="156.0" y="84.0" text-anchor="middle" font-size="22">0</text>
<text x="181" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">3</text>
<text x="156.0" y="144.0" text-anchor="middle" font-size="22">0</text>
<text x="301" y="59" text-anchor="end" font-size="11" fill-opacity="0.65">4</text>
<text x="301" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">5</text>
<text x="241" y="59" text-anchor="end" font-size="11" fill-opacity="0.65">6</text>
<text x="216.0" y="84.0" text-anchor="middle" font-size="22">0</text>
<text x="241" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">7</text>
<path d="M138.5,49.5 L233.5,49.5 M242.5,58.5 L242.5,93.5 M233.5,102.5 L138.5,102.5 M129.5,93.5 L129.5,58.5 M129.5,58.5 A9,9 0 0 1 138.5,49.5 M233.5,49.5 A9,9 0 0 1 242.5,58.5 M242.5,93.5 A9,9 0 0 1 233.5,102.5 M138.5,102.5 A9,9 0 0 1 129.5,93.5" stroke="#e8743b" stroke-width="2.6" fill="none"/>
<text x="134.5" y="97.5" font-size="14" fill="#e8743b" font-weight="bold">1</text>
<path d="M81.1,112.1 L170.9,112.1 M179.9,121.1 L179.9,150.9 M170.9,159.9 L81.1,159.9 M72.1,150.9 L72.1,121.1 M72.1,121.1 A9,9 0 0 1 81.1,112.1 M170.9,112.1 A9,9 0 0 1 179.9,121.1 M179.9,150.9 A9,9 0 0 1 170.9,159.9 M81.1,159.9 A9,9 0 0 1 72.1,150.9" stroke="#3b8be8" stroke-width="2.6" fill="none"/>
<text x="77.1" y="154.9" font-size="14" fill="#3b8be8" font-weight="bold">2</text>
</svg>
</div>

$$
\begin{aligned}
\text{วงที่ 1}\ (2,6) &\Rightarrow (\overline{B}+C) \\
\text{วงที่ 2}\ (1,3) &\Rightarrow (A+\overline{C}) \\
Z &= (\overline{B}+C)(A+\overline{C})
\end{aligned}
$$

---

## การลดรูปโดยใช้ Karnaugh Map

### K-Map 2 ตัวแปร

### ตัวอย่างที่ 1  จงลดรูป $f(A,B) = \overline{A}\,\overline{B}+\overline{A}B$ (แบบ Minterm)

$\mathbf{Sol}^{n}$

$$
\begin{aligned}
\overline{A}\,\overline{B} &\Rightarrow \text{ใส่ } 1 \text{ ลงช่อง } 0 \\
\overline{A}B &\Rightarrow \text{ใส่ } 1 \text{ ลงช่อง } 1
\end{aligned}
$$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="198" height="178" viewBox="0 0 198 178" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.6" fill="none">
<rect x="66" y="46" width="120" height="120"/>
<line x1="126" y1="46" x2="126" y2="166"/>
<line x1="66" y1="106" x2="186" y2="106"/>
<line x1="8" y1="8" x2="66" y2="46"/>
</g>
<text x="96.0" y="37" text-anchor="middle">0</text>
<text x="156.0" y="37" text-anchor="middle">1</text>
<text x="57" y="82.0" text-anchor="end">0</text>
<text x="57" y="142.0" text-anchor="end">1</text>
<text x="60" y="18" text-anchor="end">A</text><text x="10" y="40">B</text>
<text x="121" y="59" text-anchor="end" font-size="11" fill-opacity="0.65">0</text>
<text x="96.0" y="84.0" text-anchor="middle" font-size="22">1</text>
<text x="121" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">1</text>
<text x="96.0" y="144.0" text-anchor="middle" font-size="22">1</text>
<text x="181" y="59" text-anchor="end" font-size="11" fill-opacity="0.65">2</text>
<text x="181" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">3</text>
<path d="M78.5,49.5 L113.5,49.5 M122.5,58.5 L122.5,153.5 M113.5,162.5 L78.5,162.5 M69.5,153.5 L69.5,58.5 M69.5,58.5 A9,9 0 0 1 78.5,49.5 M113.5,49.5 A9,9 0 0 1 122.5,58.5 M122.5,153.5 A9,9 0 0 1 113.5,162.5 M78.5,162.5 A9,9 0 0 1 69.5,153.5" stroke="#e8743b" stroke-width="2.6" fill="none"/>
<text x="74.5" y="157.5" font-size="14" fill="#e8743b" font-weight="bold">1</text>
</svg>
</div>

$$
\begin{aligned}
\text{วงที่ 1}\ (0,1) &\Rightarrow \overline{A} \\
f(A,B) &= \overline{A}
\end{aligned}
$$

---

### ตัวอย่างที่ 2  จงลดรูป $f(A,B) = (A+B)(\overline{A}+B)$ (แบบ Maxterm)

$\mathbf{Sol}^{n}$

$$
\begin{aligned}
(A+B) &\Rightarrow \text{ใส่ } 0 \text{ ลงช่อง } 0 \\
(\overline{A}+B) &\Rightarrow \text{ใส่ } 0 \text{ ลงช่อง } 2
\end{aligned}
$$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="198" height="178" viewBox="0 0 198 178" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.6" fill="none">
<rect x="66" y="46" width="120" height="120"/>
<line x1="126" y1="46" x2="126" y2="166"/>
<line x1="66" y1="106" x2="186" y2="106"/>
<line x1="8" y1="8" x2="66" y2="46"/>
</g>
<text x="96.0" y="37" text-anchor="middle">0</text>
<text x="156.0" y="37" text-anchor="middle">1</text>
<text x="57" y="82.0" text-anchor="end">0</text>
<text x="57" y="142.0" text-anchor="end">1</text>
<text x="60" y="18" text-anchor="end">A</text><text x="10" y="40">B</text>
<text x="121" y="59" text-anchor="end" font-size="11" fill-opacity="0.65">0</text>
<text x="96.0" y="84.0" text-anchor="middle" font-size="22">0</text>
<text x="121" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">1</text>
<text x="181" y="59" text-anchor="end" font-size="11" fill-opacity="0.65">2</text>
<text x="156.0" y="84.0" text-anchor="middle" font-size="22">0</text>
<text x="181" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">3</text>
<path d="M78.5,49.5 L173.5,49.5 M182.5,58.5 L182.5,93.5 M173.5,102.5 L78.5,102.5 M69.5,93.5 L69.5,58.5 M69.5,58.5 A9,9 0 0 1 78.5,49.5 M173.5,49.5 A9,9 0 0 1 182.5,58.5 M182.5,93.5 A9,9 0 0 1 173.5,102.5 M78.5,102.5 A9,9 0 0 1 69.5,93.5" stroke="#e8743b" stroke-width="2.6" fill="none"/>
<text x="74.5" y="97.5" font-size="14" fill="#e8743b" font-weight="bold">1</text>
</svg>
</div>

$$
\begin{aligned}
\text{วงที่ 1}\ (0,2) &\Rightarrow B \\
f(A,B) &= (B)
\end{aligned}
$$

---

### ข้อ 1  จงลดรูป $f(A,B) = A\overline{B}+AB$ (แบบ Minterm)

$\mathbf{Sol}^{n}$

$$
\begin{aligned}
A\overline{B} &\Rightarrow \text{ใส่ } 1 \text{ ลงช่อง } 2 \\
AB &\Rightarrow \text{ใส่ } 1 \text{ ลงช่อง } 3
\end{aligned}
$$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="198" height="178" viewBox="0 0 198 178" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.6" fill="none">
<rect x="66" y="46" width="120" height="120"/>
<line x1="126" y1="46" x2="126" y2="166"/>
<line x1="66" y1="106" x2="186" y2="106"/>
<line x1="8" y1="8" x2="66" y2="46"/>
</g>
<text x="96.0" y="37" text-anchor="middle">0</text>
<text x="156.0" y="37" text-anchor="middle">1</text>
<text x="57" y="82.0" text-anchor="end">0</text>
<text x="57" y="142.0" text-anchor="end">1</text>
<text x="60" y="18" text-anchor="end">A</text><text x="10" y="40">B</text>
<text x="121" y="59" text-anchor="end" font-size="11" fill-opacity="0.65">0</text>
<text x="121" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">1</text>
<text x="181" y="59" text-anchor="end" font-size="11" fill-opacity="0.65">2</text>
<text x="156.0" y="84.0" text-anchor="middle" font-size="22">1</text>
<text x="181" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">3</text>
<text x="156.0" y="144.0" text-anchor="middle" font-size="22">1</text>
<path d="M138.5,49.5 L173.5,49.5 M182.5,58.5 L182.5,153.5 M173.5,162.5 L138.5,162.5 M129.5,153.5 L129.5,58.5 M129.5,58.5 A9,9 0 0 1 138.5,49.5 M173.5,49.5 A9,9 0 0 1 182.5,58.5 M182.5,153.5 A9,9 0 0 1 173.5,162.5 M138.5,162.5 A9,9 0 0 1 129.5,153.5" stroke="#e8743b" stroke-width="2.6" fill="none"/>
<text x="134.5" y="157.5" font-size="14" fill="#e8743b" font-weight="bold">1</text>
</svg>
</div>

$$
\begin{aligned}
\text{วงที่ 1}\ (2,3) &\Rightarrow A \\
f(A,B) &= A
\end{aligned}
$$

---

### ข้อ 2  จงลดรูป $f(A,B) = \overline{A}\,\overline{B}+A\overline{B}$ (แบบ Minterm)

$\mathbf{Sol}^{n}$

$$
\begin{aligned}
\overline{A}\,\overline{B} &\Rightarrow \text{ใส่ } 1 \text{ ลงช่อง } 0 \\
A\overline{B} &\Rightarrow \text{ใส่ } 1 \text{ ลงช่อง } 2
\end{aligned}
$$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="198" height="178" viewBox="0 0 198 178" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.6" fill="none">
<rect x="66" y="46" width="120" height="120"/>
<line x1="126" y1="46" x2="126" y2="166"/>
<line x1="66" y1="106" x2="186" y2="106"/>
<line x1="8" y1="8" x2="66" y2="46"/>
</g>
<text x="96.0" y="37" text-anchor="middle">0</text>
<text x="156.0" y="37" text-anchor="middle">1</text>
<text x="57" y="82.0" text-anchor="end">0</text>
<text x="57" y="142.0" text-anchor="end">1</text>
<text x="60" y="18" text-anchor="end">A</text><text x="10" y="40">B</text>
<text x="121" y="59" text-anchor="end" font-size="11" fill-opacity="0.65">0</text>
<text x="96.0" y="84.0" text-anchor="middle" font-size="22">1</text>
<text x="121" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">1</text>
<text x="181" y="59" text-anchor="end" font-size="11" fill-opacity="0.65">2</text>
<text x="156.0" y="84.0" text-anchor="middle" font-size="22">1</text>
<text x="181" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">3</text>
<path d="M78.5,49.5 L173.5,49.5 M182.5,58.5 L182.5,93.5 M173.5,102.5 L78.5,102.5 M69.5,93.5 L69.5,58.5 M69.5,58.5 A9,9 0 0 1 78.5,49.5 M173.5,49.5 A9,9 0 0 1 182.5,58.5 M182.5,93.5 A9,9 0 0 1 173.5,102.5 M78.5,102.5 A9,9 0 0 1 69.5,93.5" stroke="#e8743b" stroke-width="2.6" fill="none"/>
<text x="74.5" y="97.5" font-size="14" fill="#e8743b" font-weight="bold">1</text>
</svg>
</div>

$$
\begin{aligned}
\text{วงที่ 1}\ (0,2) &\Rightarrow \overline{B} \\
f(A,B) &= \overline{B}
\end{aligned}
$$

---

### ข้อ 3  จงลดรูป $f(A,B) = A\overline{B}+AB+\overline{A}B$ (แบบ Minterm)

$\mathbf{Sol}^{n}$

$$
\begin{aligned}
A\overline{B} &\Rightarrow \text{ใส่ } 1 \text{ ลงช่อง } 2 \\
AB &\Rightarrow \text{ใส่ } 1 \text{ ลงช่อง } 3 \\
\overline{A}B &\Rightarrow \text{ใส่ } 1 \text{ ลงช่อง } 1
\end{aligned}
$$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="198" height="178" viewBox="0 0 198 178" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.6" fill="none">
<rect x="66" y="46" width="120" height="120"/>
<line x1="126" y1="46" x2="126" y2="166"/>
<line x1="66" y1="106" x2="186" y2="106"/>
<line x1="8" y1="8" x2="66" y2="46"/>
</g>
<text x="96.0" y="37" text-anchor="middle">0</text>
<text x="156.0" y="37" text-anchor="middle">1</text>
<text x="57" y="82.0" text-anchor="end">0</text>
<text x="57" y="142.0" text-anchor="end">1</text>
<text x="60" y="18" text-anchor="end">A</text><text x="10" y="40">B</text>
<text x="121" y="59" text-anchor="end" font-size="11" fill-opacity="0.65">0</text>
<text x="121" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">1</text>
<text x="96.0" y="144.0" text-anchor="middle" font-size="22">1</text>
<text x="181" y="59" text-anchor="end" font-size="11" fill-opacity="0.65">2</text>
<text x="156.0" y="84.0" text-anchor="middle" font-size="22">1</text>
<text x="181" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">3</text>
<text x="156.0" y="144.0" text-anchor="middle" font-size="22">1</text>
<path d="M138.5,49.5 L173.5,49.5 M182.5,58.5 L182.5,153.5 M173.5,162.5 L138.5,162.5 M129.5,153.5 L129.5,58.5 M129.5,58.5 A9,9 0 0 1 138.5,49.5 M173.5,49.5 A9,9 0 0 1 182.5,58.5 M182.5,153.5 A9,9 0 0 1 173.5,162.5 M138.5,162.5 A9,9 0 0 1 129.5,153.5" stroke="#e8743b" stroke-width="2.6" fill="none"/>
<text x="134.5" y="157.5" font-size="14" fill="#e8743b" font-weight="bold">1</text>
<path d="M81.1,112.1 L170.9,112.1 M179.9,121.1 L179.9,150.9 M170.9,159.9 L81.1,159.9 M72.1,150.9 L72.1,121.1 M72.1,121.1 A9,9 0 0 1 81.1,112.1 M170.9,112.1 A9,9 0 0 1 179.9,121.1 M179.9,150.9 A9,9 0 0 1 170.9,159.9 M81.1,159.9 A9,9 0 0 1 72.1,150.9" stroke="#3b8be8" stroke-width="2.6" fill="none"/>
<text x="77.1" y="154.9" font-size="14" fill="#3b8be8" font-weight="bold">2</text>
</svg>
</div>

$$
\begin{aligned}
\text{วงที่ 1}\ (2,3) &\Rightarrow A \\
\text{วงที่ 2}\ (1,3) &\Rightarrow B \\
f(A,B) &= A+B
\end{aligned}
$$

---

### ข้อ 4  จงลดรูป $f(A,B) = \overline{A}\,\overline{B}+\overline{A}B+AB$ (แบบ Minterm)

$\mathbf{Sol}^{n}$

$$
\begin{aligned}
\overline{A}\,\overline{B} &\Rightarrow \text{ใส่ } 1 \text{ ลงช่อง } 0 \\
\overline{A}B &\Rightarrow \text{ใส่ } 1 \text{ ลงช่อง } 1 \\
AB &\Rightarrow \text{ใส่ } 1 \text{ ลงช่อง } 3
\end{aligned}
$$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="198" height="178" viewBox="0 0 198 178" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.6" fill="none">
<rect x="66" y="46" width="120" height="120"/>
<line x1="126" y1="46" x2="126" y2="166"/>
<line x1="66" y1="106" x2="186" y2="106"/>
<line x1="8" y1="8" x2="66" y2="46"/>
</g>
<text x="96.0" y="37" text-anchor="middle">0</text>
<text x="156.0" y="37" text-anchor="middle">1</text>
<text x="57" y="82.0" text-anchor="end">0</text>
<text x="57" y="142.0" text-anchor="end">1</text>
<text x="60" y="18" text-anchor="end">A</text><text x="10" y="40">B</text>
<text x="121" y="59" text-anchor="end" font-size="11" fill-opacity="0.65">0</text>
<text x="96.0" y="84.0" text-anchor="middle" font-size="22">1</text>
<text x="121" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">1</text>
<text x="96.0" y="144.0" text-anchor="middle" font-size="22">1</text>
<text x="181" y="59" text-anchor="end" font-size="11" fill-opacity="0.65">2</text>
<text x="181" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">3</text>
<text x="156.0" y="144.0" text-anchor="middle" font-size="22">1</text>
<path d="M78.5,49.5 L113.5,49.5 M122.5,58.5 L122.5,153.5 M113.5,162.5 L78.5,162.5 M69.5,153.5 L69.5,58.5 M69.5,58.5 A9,9 0 0 1 78.5,49.5 M113.5,49.5 A9,9 0 0 1 122.5,58.5 M122.5,153.5 A9,9 0 0 1 113.5,162.5 M78.5,162.5 A9,9 0 0 1 69.5,153.5" stroke="#e8743b" stroke-width="2.6" fill="none"/>
<text x="74.5" y="157.5" font-size="14" fill="#e8743b" font-weight="bold">1</text>
<path d="M81.1,112.1 L170.9,112.1 M179.9,121.1 L179.9,150.9 M170.9,159.9 L81.1,159.9 M72.1,150.9 L72.1,121.1 M72.1,121.1 A9,9 0 0 1 81.1,112.1 M170.9,112.1 A9,9 0 0 1 179.9,121.1 M179.9,150.9 A9,9 0 0 1 170.9,159.9 M81.1,159.9 A9,9 0 0 1 72.1,150.9" stroke="#3b8be8" stroke-width="2.6" fill="none"/>
<text x="77.1" y="154.9" font-size="14" fill="#3b8be8" font-weight="bold">2</text>
</svg>
</div>

$$
\begin{aligned}
\text{วงที่ 1}\ (0,1) &\Rightarrow \overline{A} \\
\text{วงที่ 2}\ (1,3) &\Rightarrow B \\
f(A,B) &= \overline{A}+B
\end{aligned}
$$

---

### ข้อ 5  จงลดรูป $f(A,B) = (A+\overline{B})(\overline{A}+\overline{B})$ (แบบ Maxterm)

$\mathbf{Sol}^{n}$

$$
\begin{aligned}
(A+\overline{B}) &\Rightarrow \text{ใส่ } 0 \text{ ลงช่อง } 1 \\
(\overline{A}+\overline{B}) &\Rightarrow \text{ใส่ } 0 \text{ ลงช่อง } 3
\end{aligned}
$$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="198" height="178" viewBox="0 0 198 178" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.6" fill="none">
<rect x="66" y="46" width="120" height="120"/>
<line x1="126" y1="46" x2="126" y2="166"/>
<line x1="66" y1="106" x2="186" y2="106"/>
<line x1="8" y1="8" x2="66" y2="46"/>
</g>
<text x="96.0" y="37" text-anchor="middle">0</text>
<text x="156.0" y="37" text-anchor="middle">1</text>
<text x="57" y="82.0" text-anchor="end">0</text>
<text x="57" y="142.0" text-anchor="end">1</text>
<text x="60" y="18" text-anchor="end">A</text><text x="10" y="40">B</text>
<text x="121" y="59" text-anchor="end" font-size="11" fill-opacity="0.65">0</text>
<text x="121" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">1</text>
<text x="96.0" y="144.0" text-anchor="middle" font-size="22">0</text>
<text x="181" y="59" text-anchor="end" font-size="11" fill-opacity="0.65">2</text>
<text x="181" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">3</text>
<text x="156.0" y="144.0" text-anchor="middle" font-size="22">0</text>
<path d="M78.5,109.5 L173.5,109.5 M182.5,118.5 L182.5,153.5 M173.5,162.5 L78.5,162.5 M69.5,153.5 L69.5,118.5 M69.5,118.5 A9,9 0 0 1 78.5,109.5 M173.5,109.5 A9,9 0 0 1 182.5,118.5 M182.5,153.5 A9,9 0 0 1 173.5,162.5 M78.5,162.5 A9,9 0 0 1 69.5,153.5" stroke="#e8743b" stroke-width="2.6" fill="none"/>
<text x="74.5" y="157.5" font-size="14" fill="#e8743b" font-weight="bold">1</text>
</svg>
</div>

$$
\begin{aligned}
\text{วงที่ 1}\ (1,3) &\Rightarrow \overline{B} \\
f(A,B) &= (\overline{B})
\end{aligned}
$$

---

### ข้อ 6  จงลดรูป $f(A,B) = (A+B)(A+\overline{B})$ (แบบ Maxterm)

$\mathbf{Sol}^{n}$

$$
\begin{aligned}
(A+B) &\Rightarrow \text{ใส่ } 0 \text{ ลงช่อง } 0 \\
(A+\overline{B}) &\Rightarrow \text{ใส่ } 0 \text{ ลงช่อง } 1
\end{aligned}
$$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="198" height="178" viewBox="0 0 198 178" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.6" fill="none">
<rect x="66" y="46" width="120" height="120"/>
<line x1="126" y1="46" x2="126" y2="166"/>
<line x1="66" y1="106" x2="186" y2="106"/>
<line x1="8" y1="8" x2="66" y2="46"/>
</g>
<text x="96.0" y="37" text-anchor="middle">0</text>
<text x="156.0" y="37" text-anchor="middle">1</text>
<text x="57" y="82.0" text-anchor="end">0</text>
<text x="57" y="142.0" text-anchor="end">1</text>
<text x="60" y="18" text-anchor="end">A</text><text x="10" y="40">B</text>
<text x="121" y="59" text-anchor="end" font-size="11" fill-opacity="0.65">0</text>
<text x="96.0" y="84.0" text-anchor="middle" font-size="22">0</text>
<text x="121" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">1</text>
<text x="96.0" y="144.0" text-anchor="middle" font-size="22">0</text>
<text x="181" y="59" text-anchor="end" font-size="11" fill-opacity="0.65">2</text>
<text x="181" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">3</text>
<path d="M78.5,49.5 L113.5,49.5 M122.5,58.5 L122.5,153.5 M113.5,162.5 L78.5,162.5 M69.5,153.5 L69.5,58.5 M69.5,58.5 A9,9 0 0 1 78.5,49.5 M113.5,49.5 A9,9 0 0 1 122.5,58.5 M122.5,153.5 A9,9 0 0 1 113.5,162.5 M78.5,162.5 A9,9 0 0 1 69.5,153.5" stroke="#e8743b" stroke-width="2.6" fill="none"/>
<text x="74.5" y="157.5" font-size="14" fill="#e8743b" font-weight="bold">1</text>
</svg>
</div>

$$
\begin{aligned}
\text{วงที่ 1}\ (0,1) &\Rightarrow A \\
f(A,B) &= (A)
\end{aligned}
$$

---

### ข้อ 7  จงลดรูป $f(A,B) = (\overline{A}+B)(\overline{A}+\overline{B})$ (แบบ Maxterm)

$\mathbf{Sol}^{n}$

$$
\begin{aligned}
(\overline{A}+B) &\Rightarrow \text{ใส่ } 0 \text{ ลงช่อง } 2 \\
(\overline{A}+\overline{B}) &\Rightarrow \text{ใส่ } 0 \text{ ลงช่อง } 3
\end{aligned}
$$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="198" height="178" viewBox="0 0 198 178" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.6" fill="none">
<rect x="66" y="46" width="120" height="120"/>
<line x1="126" y1="46" x2="126" y2="166"/>
<line x1="66" y1="106" x2="186" y2="106"/>
<line x1="8" y1="8" x2="66" y2="46"/>
</g>
<text x="96.0" y="37" text-anchor="middle">0</text>
<text x="156.0" y="37" text-anchor="middle">1</text>
<text x="57" y="82.0" text-anchor="end">0</text>
<text x="57" y="142.0" text-anchor="end">1</text>
<text x="60" y="18" text-anchor="end">A</text><text x="10" y="40">B</text>
<text x="121" y="59" text-anchor="end" font-size="11" fill-opacity="0.65">0</text>
<text x="121" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">1</text>
<text x="181" y="59" text-anchor="end" font-size="11" fill-opacity="0.65">2</text>
<text x="156.0" y="84.0" text-anchor="middle" font-size="22">0</text>
<text x="181" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">3</text>
<text x="156.0" y="144.0" text-anchor="middle" font-size="22">0</text>
<path d="M138.5,49.5 L173.5,49.5 M182.5,58.5 L182.5,153.5 M173.5,162.5 L138.5,162.5 M129.5,153.5 L129.5,58.5 M129.5,58.5 A9,9 0 0 1 138.5,49.5 M173.5,49.5 A9,9 0 0 1 182.5,58.5 M182.5,153.5 A9,9 0 0 1 173.5,162.5 M138.5,162.5 A9,9 0 0 1 129.5,153.5" stroke="#e8743b" stroke-width="2.6" fill="none"/>
<text x="134.5" y="157.5" font-size="14" fill="#e8743b" font-weight="bold">1</text>
</svg>
</div>

$$
\begin{aligned}
\text{วงที่ 1}\ (2,3) &\Rightarrow \overline{A} \\
f(A,B) &= (\overline{A})
\end{aligned}
$$

---

### ข้อ 8  จงลดรูป $f(A,B) = (A+B)(\overline{A}+B)(\overline{A}+\overline{B})$ (แบบ Maxterm)

$\mathbf{Sol}^{n}$

$$
\begin{aligned}
(A+B) &\Rightarrow \text{ใส่ } 0 \text{ ลงช่อง } 0 \\
(\overline{A}+B) &\Rightarrow \text{ใส่ } 0 \text{ ลงช่อง } 2 \\
(\overline{A}+\overline{B}) &\Rightarrow \text{ใส่ } 0 \text{ ลงช่อง } 3
\end{aligned}
$$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="198" height="178" viewBox="0 0 198 178" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.6" fill="none">
<rect x="66" y="46" width="120" height="120"/>
<line x1="126" y1="46" x2="126" y2="166"/>
<line x1="66" y1="106" x2="186" y2="106"/>
<line x1="8" y1="8" x2="66" y2="46"/>
</g>
<text x="96.0" y="37" text-anchor="middle">0</text>
<text x="156.0" y="37" text-anchor="middle">1</text>
<text x="57" y="82.0" text-anchor="end">0</text>
<text x="57" y="142.0" text-anchor="end">1</text>
<text x="60" y="18" text-anchor="end">A</text><text x="10" y="40">B</text>
<text x="121" y="59" text-anchor="end" font-size="11" fill-opacity="0.65">0</text>
<text x="96.0" y="84.0" text-anchor="middle" font-size="22">0</text>
<text x="121" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">1</text>
<text x="181" y="59" text-anchor="end" font-size="11" fill-opacity="0.65">2</text>
<text x="156.0" y="84.0" text-anchor="middle" font-size="22">0</text>
<text x="181" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">3</text>
<text x="156.0" y="144.0" text-anchor="middle" font-size="22">0</text>
<path d="M138.5,49.5 L173.5,49.5 M182.5,58.5 L182.5,153.5 M173.5,162.5 L138.5,162.5 M129.5,153.5 L129.5,58.5 M129.5,58.5 A9,9 0 0 1 138.5,49.5 M173.5,49.5 A9,9 0 0 1 182.5,58.5 M182.5,153.5 A9,9 0 0 1 173.5,162.5 M138.5,162.5 A9,9 0 0 1 129.5,153.5" stroke="#e8743b" stroke-width="2.6" fill="none"/>
<text x="134.5" y="157.5" font-size="14" fill="#e8743b" font-weight="bold">1</text>
<path d="M81.1,52.1 L170.9,52.1 M179.9,61.1 L179.9,90.9 M170.9,99.9 L81.1,99.9 M72.1,90.9 L72.1,61.1 M72.1,61.1 A9,9 0 0 1 81.1,52.1 M170.9,52.1 A9,9 0 0 1 179.9,61.1 M179.9,90.9 A9,9 0 0 1 170.9,99.9 M81.1,99.9 A9,9 0 0 1 72.1,90.9" stroke="#3b8be8" stroke-width="2.6" fill="none"/>
<text x="77.1" y="94.9" font-size="14" fill="#3b8be8" font-weight="bold">2</text>
</svg>
</div>

$$
\begin{aligned}
\text{วงที่ 1}\ (2,3) &\Rightarrow \overline{A} \\
\text{วงที่ 2}\ (0,2) &\Rightarrow B \\
f(A,B) &= \overline{A}B
\end{aligned}
$$

---

### K-Map 3 ตัวแปร

### ตัวอย่าง  จงลดรูป

$$
f(A,B,C) = \overline{A}\,\overline{B}\,\overline{C}+\overline{A}\,\overline{B}C+\overline{A}B\overline{C}+\overline{A}BC+AB\overline{C}+ABC
$$

$\mathbf{Sol}^{n}$

$$
\begin{aligned}
\overline{A}\,\overline{B}\,\overline{C} &\Rightarrow \text{ใส่ } 1 \text{ ลงช่อง } 0 \\
\overline{A}\,\overline{B}C &\Rightarrow \text{ใส่ } 1 \text{ ลงช่อง } 1 \\
\overline{A}B\overline{C} &\Rightarrow \text{ใส่ } 1 \text{ ลงช่อง } 2 \\
\overline{A}BC &\Rightarrow \text{ใส่ } 1 \text{ ลงช่อง } 3 \\
AB\overline{C} &\Rightarrow \text{ใส่ } 1 \text{ ลงช่อง } 6 \\
ABC &\Rightarrow \text{ใส่ } 1 \text{ ลงช่อง } 7
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
<text x="156.0" y="84.0" text-anchor="middle" font-size="22">1</text>
<text x="181" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">3</text>
<text x="156.0" y="144.0" text-anchor="middle" font-size="22">1</text>
<text x="301" y="59" text-anchor="end" font-size="11" fill-opacity="0.65">4</text>
<text x="301" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">5</text>
<text x="241" y="59" text-anchor="end" font-size="11" fill-opacity="0.65">6</text>
<text x="216.0" y="84.0" text-anchor="middle" font-size="22">1</text>
<text x="241" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">7</text>
<text x="216.0" y="144.0" text-anchor="middle" font-size="22">1</text>
<path d="M78.5,49.5 L173.5,49.5 M182.5,58.5 L182.5,153.5 M173.5,162.5 L78.5,162.5 M69.5,153.5 L69.5,58.5 M69.5,58.5 A9,9 0 0 1 78.5,49.5 M173.5,49.5 A9,9 0 0 1 182.5,58.5 M182.5,153.5 A9,9 0 0 1 173.5,162.5 M78.5,162.5 A9,9 0 0 1 69.5,153.5" stroke="#e8743b" stroke-width="2.6" fill="none"/>
<text x="74.5" y="157.5" font-size="14" fill="#e8743b" font-weight="bold">1</text>
<path d="M141.1,52.1 L230.9,52.1 M239.9,61.1 L239.9,150.9 M230.9,159.9 L141.1,159.9 M132.1,150.9 L132.1,61.1 M132.1,61.1 A9,9 0 0 1 141.1,52.1 M230.9,52.1 A9,9 0 0 1 239.9,61.1 M239.9,150.9 A9,9 0 0 1 230.9,159.9 M141.1,159.9 A9,9 0 0 1 132.1,150.9" stroke="#3b8be8" stroke-width="2.6" fill="none"/>
<text x="137.1" y="154.9" font-size="14" fill="#3b8be8" font-weight="bold">2</text>
</svg>
</div>

$$
\begin{aligned}
\text{วงที่ 1}\ (0,1,2,3) &\Rightarrow \overline{A} \\
\text{วงที่ 2}\ (2,3,6,7) &\Rightarrow B \\
f(A,B,C) &= \overline{A}+B
\end{aligned}
$$

---

### ข้อ 1  จงลดรูป $f(A,B,C) = \sum m(1,3,6,7)$

$\mathbf{Sol}^{n}$

ใส่ $1$ ลงแผนผังที่ช่อง $1,3,6,7$

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
<text x="181" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">3</text>
<text x="156.0" y="144.0" text-anchor="middle" font-size="22">1</text>
<text x="301" y="59" text-anchor="end" font-size="11" fill-opacity="0.65">4</text>
<text x="301" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">5</text>
<text x="241" y="59" text-anchor="end" font-size="11" fill-opacity="0.65">6</text>
<text x="216.0" y="84.0" text-anchor="middle" font-size="22">1</text>
<text x="241" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">7</text>
<text x="216.0" y="144.0" text-anchor="middle" font-size="22">1</text>
<path d="M198.5,49.5 L233.5,49.5 M242.5,58.5 L242.5,153.5 M233.5,162.5 L198.5,162.5 M189.5,153.5 L189.5,58.5 M189.5,58.5 A9,9 0 0 1 198.5,49.5 M233.5,49.5 A9,9 0 0 1 242.5,58.5 M242.5,153.5 A9,9 0 0 1 233.5,162.5 M198.5,162.5 A9,9 0 0 1 189.5,153.5" stroke="#e8743b" stroke-width="2.6" fill="none"/>
<text x="194.5" y="157.5" font-size="14" fill="#e8743b" font-weight="bold">1</text>
<path d="M81.1,112.1 L170.9,112.1 M179.9,121.1 L179.9,150.9 M170.9,159.9 L81.1,159.9 M72.1,150.9 L72.1,121.1 M72.1,121.1 A9,9 0 0 1 81.1,112.1 M170.9,112.1 A9,9 0 0 1 179.9,121.1 M179.9,150.9 A9,9 0 0 1 170.9,159.9 M81.1,159.9 A9,9 0 0 1 72.1,150.9" stroke="#3b8be8" stroke-width="2.6" fill="none"/>
<text x="77.1" y="154.9" font-size="14" fill="#3b8be8" font-weight="bold">2</text>
</svg>
</div>

$$
\begin{aligned}
\text{วงที่ 1}\ (6,7) &\Rightarrow AB \\
\text{วงที่ 2}\ (1,3) &\Rightarrow \overline{A}C \\
f(A,B,C) &= AB+\overline{A}C
\end{aligned}
$$

---

### ข้อ 2  จงลดรูป $f(A,B,C) = \sum m(0,3,5,6,7)$

$\mathbf{Sol}^{n}$

ใส่ $1$ ลงแผนผังที่ช่อง $0,3,5,6,7$

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
<text x="181" y="59" text-anchor="end" font-size="11" fill-opacity="0.65">2</text>
<text x="181" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">3</text>
<text x="156.0" y="144.0" text-anchor="middle" font-size="22">1</text>
<text x="301" y="59" text-anchor="end" font-size="11" fill-opacity="0.65">4</text>
<text x="301" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">5</text>
<text x="276.0" y="144.0" text-anchor="middle" font-size="22">1</text>
<text x="241" y="59" text-anchor="end" font-size="11" fill-opacity="0.65">6</text>
<text x="216.0" y="84.0" text-anchor="middle" font-size="22">1</text>
<text x="241" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">7</text>
<text x="216.0" y="144.0" text-anchor="middle" font-size="22">1</text>
<path d="M78.5,49.5 L113.5,49.5 M122.5,58.5 L122.5,93.5 M113.5,102.5 L78.5,102.5 M69.5,93.5 L69.5,58.5 M69.5,58.5 A9,9 0 0 1 78.5,49.5 M113.5,49.5 A9,9 0 0 1 122.5,58.5 M122.5,93.5 A9,9 0 0 1 113.5,102.5 M78.5,102.5 A9,9 0 0 1 69.5,93.5" stroke="#e8743b" stroke-width="2.6" fill="none"/>
<text x="74.5" y="97.5" font-size="14" fill="#e8743b" font-weight="bold">1</text>
<path d="M201.1,52.1 L230.9,52.1 M239.9,61.1 L239.9,150.9 M230.9,159.9 L201.1,159.9 M192.1,150.9 L192.1,61.1 M192.1,61.1 A9,9 0 0 1 201.1,52.1 M230.9,52.1 A9,9 0 0 1 239.9,61.1 M239.9,150.9 A9,9 0 0 1 230.9,159.9 M201.1,159.9 A9,9 0 0 1 192.1,150.9" stroke="#3b8be8" stroke-width="2.6" fill="none"/>
<text x="197.1" y="154.9" font-size="14" fill="#3b8be8" font-weight="bold">2</text>
<path d="M203.7,114.7 L288.3,114.7 M297.3,123.7 L297.3,148.3 M288.3,157.3 L203.7,157.3 M194.7,148.3 L194.7,123.7 M194.7,123.7 A9,9 0 0 1 203.7,114.7 M288.3,114.7 A9,9 0 0 1 297.3,123.7 M297.3,148.3 A9,9 0 0 1 288.3,157.3 M203.7,157.3 A9,9 0 0 1 194.7,148.3" stroke="#2fae5f" stroke-width="2.6" fill="none"/>
<text x="199.7" y="152.3" font-size="14" fill="#2fae5f" font-weight="bold">3</text>
<path d="M138.5,109.5 L233.5,109.5 M242.5,118.5 L242.5,153.5 M233.5,162.5 L138.5,162.5 M129.5,153.5 L129.5,118.5 M129.5,118.5 A9,9 0 0 1 138.5,109.5 M233.5,109.5 A9,9 0 0 1 242.5,118.5 M242.5,153.5 A9,9 0 0 1 233.5,162.5 M138.5,162.5 A9,9 0 0 1 129.5,153.5" stroke="#c553c9" stroke-width="2.6" fill="none"/>
<text x="134.5" y="157.5" font-size="14" fill="#c553c9" font-weight="bold">4</text>
</svg>
</div>

$$
\begin{aligned}
\text{วงที่ 1}\ (0) &\Rightarrow \overline{A}\,\overline{B}\,\overline{C} \\
\text{วงที่ 2}\ (6,7) &\Rightarrow AB \\
\text{วงที่ 3}\ (5,7) &\Rightarrow AC \\
\text{วงที่ 4}\ (3,7) &\Rightarrow BC \\
f(A,B,C) &= \overline{A}\,\overline{B}\,\overline{C}+AB+AC+BC
\end{aligned}
$$

---

### ข้อ 3  จงลดรูป $f(A,B,C) = \prod M(0,2,5,6,7)$

$\mathbf{Sol}^{n}$

ใส่ $0$ ลงแผนผังที่ช่อง $0,2,5,6,7$

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
<text x="96.0" y="84.0" text-anchor="middle" font-size="22">0</text>
<text x="121" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">1</text>
<text x="181" y="59" text-anchor="end" font-size="11" fill-opacity="0.65">2</text>
<text x="156.0" y="84.0" text-anchor="middle" font-size="22">0</text>
<text x="181" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">3</text>
<text x="301" y="59" text-anchor="end" font-size="11" fill-opacity="0.65">4</text>
<text x="301" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">5</text>
<text x="276.0" y="144.0" text-anchor="middle" font-size="22">0</text>
<text x="241" y="59" text-anchor="end" font-size="11" fill-opacity="0.65">6</text>
<text x="216.0" y="84.0" text-anchor="middle" font-size="22">0</text>
<text x="241" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">7</text>
<text x="216.0" y="144.0" text-anchor="middle" font-size="22">0</text>
<path d="M78.5,49.5 L173.5,49.5 M182.5,58.5 L182.5,93.5 M173.5,102.5 L78.5,102.5 M69.5,93.5 L69.5,58.5 M69.5,58.5 A9,9 0 0 1 78.5,49.5 M173.5,49.5 A9,9 0 0 1 182.5,58.5 M182.5,93.5 A9,9 0 0 1 173.5,102.5 M78.5,102.5 A9,9 0 0 1 69.5,93.5" stroke="#e8743b" stroke-width="2.6" fill="none"/>
<text x="74.5" y="97.5" font-size="14" fill="#e8743b" font-weight="bold">1</text>
<path d="M201.1,112.1 L290.9,112.1 M299.9,121.1 L299.9,150.9 M290.9,159.9 L201.1,159.9 M192.1,150.9 L192.1,121.1 M192.1,121.1 A9,9 0 0 1 201.1,112.1 M290.9,112.1 A9,9 0 0 1 299.9,121.1 M299.9,150.9 A9,9 0 0 1 290.9,159.9 M201.1,159.9 A9,9 0 0 1 192.1,150.9" stroke="#3b8be8" stroke-width="2.6" fill="none"/>
<text x="197.1" y="154.9" font-size="14" fill="#3b8be8" font-weight="bold">2</text>
<path d="M143.7,54.7 L228.3,54.7 M237.3,63.7 L237.3,88.3 M228.3,97.3 L143.7,97.3 M134.7,88.3 L134.7,63.7 M134.7,63.7 A9,9 0 0 1 143.7,54.7 M228.3,54.7 A9,9 0 0 1 237.3,63.7 M237.3,88.3 A9,9 0 0 1 228.3,97.3 M143.7,97.3 A9,9 0 0 1 134.7,88.3" stroke="#2fae5f" stroke-width="2.6" fill="none"/>
<text x="139.7" y="92.3" font-size="14" fill="#2fae5f" font-weight="bold">3</text>
</svg>
</div>

$$
\begin{aligned}
\text{วงที่ 1}\ (0,2) &\Rightarrow (A+C) \\
\text{วงที่ 2}\ (5,7) &\Rightarrow (\overline{A}+\overline{C}) \\
\text{วงที่ 3}\ (2,6) &\Rightarrow (\overline{B}+C) \\
f(A,B,C) &= (A+C)(\overline{A}+\overline{C})(\overline{B}+C)
\end{aligned}
$$

---

### ข้อ 4  จงลดรูป $f(A,B,C) = \prod M(1,2,5,6)$

$\mathbf{Sol}^{n}$

ใส่ $0$ ลงแผนผังที่ช่อง $1,2,5,6$

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
<text x="96.0" y="144.0" text-anchor="middle" font-size="22">0</text>
<text x="181" y="59" text-anchor="end" font-size="11" fill-opacity="0.65">2</text>
<text x="156.0" y="84.0" text-anchor="middle" font-size="22">0</text>
<text x="181" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">3</text>
<text x="301" y="59" text-anchor="end" font-size="11" fill-opacity="0.65">4</text>
<text x="301" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">5</text>
<text x="276.0" y="144.0" text-anchor="middle" font-size="22">0</text>
<text x="241" y="59" text-anchor="end" font-size="11" fill-opacity="0.65">6</text>
<text x="216.0" y="84.0" text-anchor="middle" font-size="22">0</text>
<text x="241" y="119" text-anchor="end" font-size="11" fill-opacity="0.65">7</text>
<path d="M138.5,49.5 L233.5,49.5 M242.5,58.5 L242.5,93.5 M233.5,102.5 L138.5,102.5 M129.5,93.5 L129.5,58.5 M129.5,58.5 A9,9 0 0 1 138.5,49.5 M233.5,49.5 A9,9 0 0 1 242.5,58.5 M242.5,93.5 A9,9 0 0 1 233.5,102.5 M138.5,102.5 A9,9 0 0 1 129.5,93.5" stroke="#e8743b" stroke-width="2.6" fill="none"/>
<text x="134.5" y="97.5" font-size="14" fill="#e8743b" font-weight="bold">1</text>
<path d="M261.1,112.1 L299.9,112.1 M299.9,159.9 L261.1,159.9 M252.1,150.9 L252.1,121.1 M252.1,121.1 A9,9 0 0 1 261.1,112.1 M261.1,159.9 A9,9 0 0 1 252.1,150.9" stroke="#3b8be8" stroke-width="2.6" fill="none"/>
<text x="257.1" y="154.9" font-size="14" fill="#3b8be8" font-weight="bold">2</text>
<path d="M72.1,112.1 L110.9,112.1 M119.9,121.1 L119.9,150.9 M110.9,159.9 L72.1,159.9 M110.9,112.1 A9,9 0 0 1 119.9,121.1 M119.9,150.9 A9,9 0 0 1 110.9,159.9" stroke="#3b8be8" stroke-width="2.6" fill="none"/>
</svg>
</div>

$$
\begin{aligned}
\text{วงที่ 1}\ (2,6) &\Rightarrow (\overline{B}+C) \\
\text{วงที่ 2}\ (1,5) &\Rightarrow (B+\overline{C}) \\
f(A,B,C) &= (\overline{B}+C)(B+\overline{C})
\end{aligned}
$$

---

### K-Map 4 ตัวแปร

### ตัวอย่างที่ 1  จงลดรูป $f(A,B,C,D) = \sum m(0,1,2,3,4,5,6,7,9,13)$

$\mathbf{Sol}^{n}$

ใส่ $1$ ลงแผนผังที่ช่อง $0,1,2,3,4,5,6,7,9,13$

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
<text x="147.0" y="81.0" text-anchor="middle" font-size="22">1</text>
<text x="169" y="113" text-anchor="end" font-size="11" fill-opacity="0.65">5</text>
<text x="147.0" y="135.0" text-anchor="middle" font-size="22">1</text>
<text x="169" y="221" text-anchor="end" font-size="11" fill-opacity="0.65">6</text>
<text x="147.0" y="243.0" text-anchor="middle" font-size="22">1</text>
<text x="169" y="167" text-anchor="end" font-size="11" fill-opacity="0.65">7</text>
<text x="147.0" y="189.0" text-anchor="middle" font-size="22">1</text>
<text x="277" y="59" text-anchor="end" font-size="11" fill-opacity="0.65">8</text>
<text x="277" y="113" text-anchor="end" font-size="11" fill-opacity="0.65">9</text>
<text x="255.0" y="135.0" text-anchor="middle" font-size="22">1</text>
<text x="277" y="221" text-anchor="end" font-size="11" fill-opacity="0.65">10</text>
<text x="277" y="167" text-anchor="end" font-size="11" fill-opacity="0.65">11</text>
<text x="223" y="59" text-anchor="end" font-size="11" fill-opacity="0.65">12</text>
<text x="223" y="113" text-anchor="end" font-size="11" fill-opacity="0.65">13</text>
<text x="201.0" y="135.0" text-anchor="middle" font-size="22">1</text>
<text x="223" y="221" text-anchor="end" font-size="11" fill-opacity="0.65">14</text>
<text x="223" y="167" text-anchor="end" font-size="11" fill-opacity="0.65">15</text>
<path d="M78.5,49.5 L161.5,49.5 M170.5,58.5 L170.5,249.5 M161.5,258.5 L78.5,258.5 M69.5,249.5 L69.5,58.5 M69.5,58.5 A9,9 0 0 1 78.5,49.5 M161.5,49.5 A9,9 0 0 1 170.5,58.5 M170.5,249.5 A9,9 0 0 1 161.5,258.5 M78.5,258.5 A9,9 0 0 1 69.5,249.5" stroke="#e8743b" stroke-width="2.6" fill="none"/>
<text x="74.5" y="253.5" font-size="14" fill="#e8743b" font-weight="bold">1</text>
<path d="M81.1,106.1 L266.9,106.1 M275.9,115.1 L275.9,138.9 M266.9,147.9 L81.1,147.9 M72.1,138.9 L72.1,115.1 M72.1,115.1 A9,9 0 0 1 81.1,106.1 M266.9,106.1 A9,9 0 0 1 275.9,115.1 M275.9,138.9 A9,9 0 0 1 266.9,147.9 M81.1,147.9 A9,9 0 0 1 72.1,138.9" stroke="#3b8be8" stroke-width="2.6" fill="none"/>
<text x="77.1" y="142.9" font-size="14" fill="#3b8be8" font-weight="bold">2</text>
</svg>
</div>

$$
\begin{aligned}
\text{วงที่ 1}\ (0,1,2,3,4,5,6,7) &\Rightarrow \overline{A} \\
\text{วงที่ 2}\ (1,5,9,13) &\Rightarrow \overline{C}D \\
f(A,B,C,D) &= \overline{A}+\overline{C}D
\end{aligned}
$$

---

### ข้อ 1  จงลดรูปสมการต่อไปนี้ให้ง่ายที่สุด

$$
\begin{aligned}
f(A,B,C,D) &= \overline{A}\,\overline{B}CD+\overline{A}BC\overline{D}+\overline{A}BCD+A\overline{B}\,\overline{C}\,\overline{D}+A\overline{B}\,\overline{C}D+ \\
&\quad A\overline{B}CD+AB\overline{C}\,\overline{D}+AB\overline{C}D+ABC\overline{D}+ABCD
\end{aligned}
$$

$\mathbf{Sol}^{n}$

$$
\begin{aligned}
\overline{A}\,\overline{B}CD &\Rightarrow \text{ใส่ } 1 \text{ ลงช่อง } 3 \\
\overline{A}BC\overline{D} &\Rightarrow \text{ใส่ } 1 \text{ ลงช่อง } 6 \\
\overline{A}BCD &\Rightarrow \text{ใส่ } 1 \text{ ลงช่อง } 7 \\
A\overline{B}\,\overline{C}\,\overline{D} &\Rightarrow \text{ใส่ } 1 \text{ ลงช่อง } 8 \\
A\overline{B}\,\overline{C}D &\Rightarrow \text{ใส่ } 1 \text{ ลงช่อง } 9 \\
A\overline{B}CD &\Rightarrow \text{ใส่ } 1 \text{ ลงช่อง } 11 \\
AB\overline{C}\,\overline{D} &\Rightarrow \text{ใส่ } 1 \text{ ลงช่อง } 12 \\
AB\overline{C}D &\Rightarrow \text{ใส่ } 1 \text{ ลงช่อง } 13 \\
ABC\overline{D} &\Rightarrow \text{ใส่ } 1 \text{ ลงช่อง } 14 \\
ABCD &\Rightarrow \text{ใส่ } 1 \text{ ลงช่อง } 15
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
<text x="115" y="113" text-anchor="end" font-size="11" fill-opacity="0.65">1</text>
<text x="115" y="221" text-anchor="end" font-size="11" fill-opacity="0.65">2</text>
<text x="115" y="167" text-anchor="end" font-size="11" fill-opacity="0.65">3</text>
<text x="93.0" y="189.0" text-anchor="middle" font-size="22">1</text>
<text x="169" y="59" text-anchor="end" font-size="11" fill-opacity="0.65">4</text>
<text x="169" y="113" text-anchor="end" font-size="11" fill-opacity="0.65">5</text>
<text x="169" y="221" text-anchor="end" font-size="11" fill-opacity="0.65">6</text>
<text x="147.0" y="243.0" text-anchor="middle" font-size="22">1</text>
<text x="169" y="167" text-anchor="end" font-size="11" fill-opacity="0.65">7</text>
<text x="147.0" y="189.0" text-anchor="middle" font-size="22">1</text>
<text x="277" y="59" text-anchor="end" font-size="11" fill-opacity="0.65">8</text>
<text x="255.0" y="81.0" text-anchor="middle" font-size="22">1</text>
<text x="277" y="113" text-anchor="end" font-size="11" fill-opacity="0.65">9</text>
<text x="255.0" y="135.0" text-anchor="middle" font-size="22">1</text>
<text x="277" y="221" text-anchor="end" font-size="11" fill-opacity="0.65">10</text>
<text x="277" y="167" text-anchor="end" font-size="11" fill-opacity="0.65">11</text>
<text x="255.0" y="189.0" text-anchor="middle" font-size="22">1</text>
<text x="223" y="59" text-anchor="end" font-size="11" fill-opacity="0.65">12</text>
<text x="201.0" y="81.0" text-anchor="middle" font-size="22">1</text>
<text x="223" y="113" text-anchor="end" font-size="11" fill-opacity="0.65">13</text>
<text x="201.0" y="135.0" text-anchor="middle" font-size="22">1</text>
<text x="223" y="221" text-anchor="end" font-size="11" fill-opacity="0.65">14</text>
<text x="201.0" y="243.0" text-anchor="middle" font-size="22">1</text>
<text x="223" y="167" text-anchor="end" font-size="11" fill-opacity="0.65">15</text>
<text x="201.0" y="189.0" text-anchor="middle" font-size="22">1</text>
<path d="M186.5,49.5 L269.5,49.5 M278.5,58.5 L278.5,141.5 M269.5,150.5 L186.5,150.5 M177.5,141.5 L177.5,58.5 M177.5,58.5 A9,9 0 0 1 186.5,49.5 M269.5,49.5 A9,9 0 0 1 278.5,58.5 M278.5,141.5 A9,9 0 0 1 269.5,150.5 M186.5,150.5 A9,9 0 0 1 177.5,141.5" stroke="#e8743b" stroke-width="2.6" fill="none"/>
<text x="182.5" y="145.5" font-size="14" fill="#e8743b" font-weight="bold">1</text>
<path d="M135.1,160.1 L212.9,160.1 M221.9,169.1 L221.9,246.9 M212.9,255.9 L135.1,255.9 M126.1,246.9 L126.1,169.1 M126.1,169.1 A9,9 0 0 1 135.1,160.1 M212.9,160.1 A9,9 0 0 1 221.9,169.1 M221.9,246.9 A9,9 0 0 1 212.9,255.9 M135.1,255.9 A9,9 0 0 1 126.1,246.9" stroke="#3b8be8" stroke-width="2.6" fill="none"/>
<text x="131.1" y="250.9" font-size="14" fill="#3b8be8" font-weight="bold">2</text>
<path d="M83.7,162.7 L264.3,162.7 M273.3,171.7 L273.3,190.3 M264.3,199.3 L83.7,199.3 M74.7,190.3 L74.7,171.7 M74.7,171.7 A9,9 0 0 1 83.7,162.7 M264.3,162.7 A9,9 0 0 1 273.3,171.7 M273.3,190.3 A9,9 0 0 1 264.3,199.3 M83.7,199.3 A9,9 0 0 1 74.7,190.3" stroke="#2fae5f" stroke-width="2.6" fill="none"/>
<text x="79.7" y="194.3" font-size="14" fill="#2fae5f" font-weight="bold">3</text>
</svg>
</div>

$$
\begin{aligned}
\text{วงที่ 1}\ (8,9,12,13) &\Rightarrow A\overline{C} \\
\text{วงที่ 2}\ (6,7,14,15) &\Rightarrow BC \\
\text{วงที่ 3}\ (3,7,11,15) &\Rightarrow CD \\
f(A,B,C,D) &= A\overline{C}+BC+CD
\end{aligned}
$$

---

### ตัวอย่างที่ 2  จงลดรูป $f(A,B,C,D) = \sum m(0,1,2,3,4,6,8,10,12,14)$

$\mathbf{Sol}^{n}$

ใส่ $1$ ลงแผนผังที่ช่อง $0,1,2,3,4,6,8,10,12,14$

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
<text x="147.0" y="81.0" text-anchor="middle" font-size="22">1</text>
<text x="169" y="113" text-anchor="end" font-size="11" fill-opacity="0.65">5</text>
<text x="169" y="221" text-anchor="end" font-size="11" fill-opacity="0.65">6</text>
<text x="147.0" y="243.0" text-anchor="middle" font-size="22">1</text>
<text x="169" y="167" text-anchor="end" font-size="11" fill-opacity="0.65">7</text>
<text x="277" y="59" text-anchor="end" font-size="11" fill-opacity="0.65">8</text>
<text x="255.0" y="81.0" text-anchor="middle" font-size="22">1</text>
<text x="277" y="113" text-anchor="end" font-size="11" fill-opacity="0.65">9</text>
<text x="277" y="221" text-anchor="end" font-size="11" fill-opacity="0.65">10</text>
<text x="255.0" y="243.0" text-anchor="middle" font-size="22">1</text>
<text x="277" y="167" text-anchor="end" font-size="11" fill-opacity="0.65">11</text>
<text x="223" y="59" text-anchor="end" font-size="11" fill-opacity="0.65">12</text>
<text x="201.0" y="81.0" text-anchor="middle" font-size="22">1</text>
<text x="223" y="113" text-anchor="end" font-size="11" fill-opacity="0.65">13</text>
<text x="223" y="221" text-anchor="end" font-size="11" fill-opacity="0.65">14</text>
<text x="201.0" y="243.0" text-anchor="middle" font-size="22">1</text>
<text x="223" y="167" text-anchor="end" font-size="11" fill-opacity="0.65">15</text>
<path d="M78.5,49.5 L107.5,49.5 M116.5,58.5 L116.5,249.5 M107.5,258.5 L78.5,258.5 M69.5,249.5 L69.5,58.5 M69.5,58.5 A9,9 0 0 1 78.5,49.5 M107.5,49.5 A9,9 0 0 1 116.5,58.5 M116.5,249.5 A9,9 0 0 1 107.5,258.5 M78.5,258.5 A9,9 0 0 1 69.5,249.5" stroke="#e8743b" stroke-width="2.6" fill="none"/>
<text x="74.5" y="253.5" font-size="14" fill="#e8743b" font-weight="bold">1</text>
<path d="M81.1,214.1 L266.9,214.1 M275.9,223.1 L275.9,255.9 M72.1,255.9 L72.1,223.1 M72.1,223.1 A9,9 0 0 1 81.1,214.1 M266.9,214.1 A9,9 0 0 1 275.9,223.1" stroke="#3b8be8" stroke-width="2.6" fill="none"/>
<text x="77.1" y="250.9" font-size="14" fill="#3b8be8" font-weight="bold">2</text>
<path d="M275.9,52.1 L275.9,84.9 M266.9,93.9 L81.1,93.9 M72.1,84.9 L72.1,52.1 M275.9,84.9 A9,9 0 0 1 266.9,93.9 M81.1,93.9 A9,9 0 0 1 72.1,84.9" stroke="#3b8be8" stroke-width="2.6" fill="none"/>
</svg>
</div>

$$
\begin{aligned}
\text{วงที่ 1}\ (0,1,2,3) &\Rightarrow \overline{A}\,\overline{B} \\
\text{วงที่ 2}\ (0,2,4,6,8,10,12,14) &\Rightarrow \overline{D} \\
f(A,B,C,D) &= \overline{A}\,\overline{B}+\overline{D}
\end{aligned}
$$

---

### ข้อ 2  จงลดรูป $f(A,B,C,D) = \sum m(1,3,4,6,9,11,12,14)$

$\mathbf{Sol}^{n}$

ใส่ $1$ ลงแผนผังที่ช่อง $1,3,4,6,9,11,12,14$

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
<text x="93.0" y="135.0" text-anchor="middle" font-size="22">1</text>
<text x="115" y="221" text-anchor="end" font-size="11" fill-opacity="0.65">2</text>
<text x="115" y="167" text-anchor="end" font-size="11" fill-opacity="0.65">3</text>
<text x="93.0" y="189.0" text-anchor="middle" font-size="22">1</text>
<text x="169" y="59" text-anchor="end" font-size="11" fill-opacity="0.65">4</text>
<text x="147.0" y="81.0" text-anchor="middle" font-size="22">1</text>
<text x="169" y="113" text-anchor="end" font-size="11" fill-opacity="0.65">5</text>
<text x="169" y="221" text-anchor="end" font-size="11" fill-opacity="0.65">6</text>
<text x="147.0" y="243.0" text-anchor="middle" font-size="22">1</text>
<text x="169" y="167" text-anchor="end" font-size="11" fill-opacity="0.65">7</text>
<text x="277" y="59" text-anchor="end" font-size="11" fill-opacity="0.65">8</text>
<text x="277" y="113" text-anchor="end" font-size="11" fill-opacity="0.65">9</text>
<text x="255.0" y="135.0" text-anchor="middle" font-size="22">1</text>
<text x="277" y="221" text-anchor="end" font-size="11" fill-opacity="0.65">10</text>
<text x="277" y="167" text-anchor="end" font-size="11" fill-opacity="0.65">11</text>
<text x="255.0" y="189.0" text-anchor="middle" font-size="22">1</text>
<text x="223" y="59" text-anchor="end" font-size="11" fill-opacity="0.65">12</text>
<text x="201.0" y="81.0" text-anchor="middle" font-size="22">1</text>
<text x="223" y="113" text-anchor="end" font-size="11" fill-opacity="0.65">13</text>
<text x="223" y="221" text-anchor="end" font-size="11" fill-opacity="0.65">14</text>
<text x="201.0" y="243.0" text-anchor="middle" font-size="22">1</text>
<text x="223" y="167" text-anchor="end" font-size="11" fill-opacity="0.65">15</text>
<path d="M132.5,211.5 L215.5,211.5 M224.5,220.5 L224.5,258.5 M123.5,258.5 L123.5,220.5 M123.5,220.5 A9,9 0 0 1 132.5,211.5 M215.5,211.5 A9,9 0 0 1 224.5,220.5" stroke="#e8743b" stroke-width="2.6" fill="none"/>
<text x="128.5" y="253.5" font-size="14" fill="#e8743b" font-weight="bold">1</text>
<path d="M224.5,49.5 L224.5,87.5 M215.5,96.5 L132.5,96.5 M123.5,87.5 L123.5,49.5 M224.5,87.5 A9,9 0 0 1 215.5,96.5 M132.5,96.5 A9,9 0 0 1 123.5,87.5" stroke="#e8743b" stroke-width="2.6" fill="none"/>
<path d="M243.1,106.1 L275.9,106.1 M275.9,201.9 L243.1,201.9 M234.1,192.9 L234.1,115.1 M234.1,115.1 A9,9 0 0 1 243.1,106.1 M243.1,201.9 A9,9 0 0 1 234.1,192.9" stroke="#3b8be8" stroke-width="2.6" fill="none"/>
<text x="239.1" y="196.9" font-size="14" fill="#3b8be8" font-weight="bold">2</text>
<path d="M72.1,106.1 L104.9,106.1 M113.9,115.1 L113.9,192.9 M104.9,201.9 L72.1,201.9 M104.9,106.1 A9,9 0 0 1 113.9,115.1 M113.9,192.9 A9,9 0 0 1 104.9,201.9" stroke="#3b8be8" stroke-width="2.6" fill="none"/>
</svg>
</div>

$$
\begin{aligned}
\text{วงที่ 1}\ (4,6,12,14) &\Rightarrow B\overline{D} \\
\text{วงที่ 2}\ (1,3,9,11) &\Rightarrow \overline{B}D \\
f(A,B,C,D) &= B\overline{D}+\overline{B}D
\end{aligned}
$$

---

### ตัวอย่างที่ 3  จงลดรูป $f(A,B,C,D) = \prod M(3,7,8,9,10,11,12,13,14,15)$

$\mathbf{Sol}^{n}$

ใส่ $0$ ลงแผนผังที่ช่อง $3,7,8,9,10,11,12,13,14,15$

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
<text x="93.0" y="189.0" text-anchor="middle" font-size="22">0</text>
<text x="169" y="59" text-anchor="end" font-size="11" fill-opacity="0.65">4</text>
<text x="169" y="113" text-anchor="end" font-size="11" fill-opacity="0.65">5</text>
<text x="169" y="221" text-anchor="end" font-size="11" fill-opacity="0.65">6</text>
<text x="169" y="167" text-anchor="end" font-size="11" fill-opacity="0.65">7</text>
<text x="147.0" y="189.0" text-anchor="middle" font-size="22">0</text>
<text x="277" y="59" text-anchor="end" font-size="11" fill-opacity="0.65">8</text>
<text x="255.0" y="81.0" text-anchor="middle" font-size="22">0</text>
<text x="277" y="113" text-anchor="end" font-size="11" fill-opacity="0.65">9</text>
<text x="255.0" y="135.0" text-anchor="middle" font-size="22">0</text>
<text x="277" y="221" text-anchor="end" font-size="11" fill-opacity="0.65">10</text>
<text x="255.0" y="243.0" text-anchor="middle" font-size="22">0</text>
<text x="277" y="167" text-anchor="end" font-size="11" fill-opacity="0.65">11</text>
<text x="255.0" y="189.0" text-anchor="middle" font-size="22">0</text>
<text x="223" y="59" text-anchor="end" font-size="11" fill-opacity="0.65">12</text>
<text x="201.0" y="81.0" text-anchor="middle" font-size="22">0</text>
<text x="223" y="113" text-anchor="end" font-size="11" fill-opacity="0.65">13</text>
<text x="201.0" y="135.0" text-anchor="middle" font-size="22">0</text>
<text x="223" y="221" text-anchor="end" font-size="11" fill-opacity="0.65">14</text>
<text x="201.0" y="243.0" text-anchor="middle" font-size="22">0</text>
<text x="223" y="167" text-anchor="end" font-size="11" fill-opacity="0.65">15</text>
<text x="201.0" y="189.0" text-anchor="middle" font-size="22">0</text>
<path d="M186.5,49.5 L269.5,49.5 M278.5,58.5 L278.5,249.5 M269.5,258.5 L186.5,258.5 M177.5,249.5 L177.5,58.5 M177.5,58.5 A9,9 0 0 1 186.5,49.5 M269.5,49.5 A9,9 0 0 1 278.5,58.5 M278.5,249.5 A9,9 0 0 1 269.5,258.5 M186.5,258.5 A9,9 0 0 1 177.5,249.5" stroke="#e8743b" stroke-width="2.6" fill="none"/>
<text x="182.5" y="253.5" font-size="14" fill="#e8743b" font-weight="bold">1</text>
<path d="M81.1,160.1 L266.9,160.1 M275.9,169.1 L275.9,192.9 M266.9,201.9 L81.1,201.9 M72.1,192.9 L72.1,169.1 M72.1,169.1 A9,9 0 0 1 81.1,160.1 M266.9,160.1 A9,9 0 0 1 275.9,169.1 M275.9,192.9 A9,9 0 0 1 266.9,201.9 M81.1,201.9 A9,9 0 0 1 72.1,192.9" stroke="#3b8be8" stroke-width="2.6" fill="none"/>
<text x="77.1" y="196.9" font-size="14" fill="#3b8be8" font-weight="bold">2</text>
</svg>
</div>

$$
\begin{aligned}
\text{วงที่ 1}\ (8,9,10,11,12,13,14,15) &\Rightarrow \overline{A} \\
\text{วงที่ 2}\ (3,7,11,15) &\Rightarrow (\overline{C}+\overline{D}) \\
f(A,B,C,D) &= \overline{A}(\overline{C}+\overline{D})
\end{aligned}
$$

---

### ข้อ 3  จงลดรูป $f(A,B,C,D) = \prod M(0,2,4,5,6,7,12,13,14,15)$

$\mathbf{Sol}^{n}$

ใส่ $0$ ลงแผนผังที่ช่อง $0,2,4,5,6,7,12,13,14,15$

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
<text x="93.0" y="81.0" text-anchor="middle" font-size="22">0</text>
<text x="115" y="113" text-anchor="end" font-size="11" fill-opacity="0.65">1</text>
<text x="115" y="221" text-anchor="end" font-size="11" fill-opacity="0.65">2</text>
<text x="93.0" y="243.0" text-anchor="middle" font-size="22">0</text>
<text x="115" y="167" text-anchor="end" font-size="11" fill-opacity="0.65">3</text>
<text x="169" y="59" text-anchor="end" font-size="11" fill-opacity="0.65">4</text>
<text x="147.0" y="81.0" text-anchor="middle" font-size="22">0</text>
<text x="169" y="113" text-anchor="end" font-size="11" fill-opacity="0.65">5</text>
<text x="147.0" y="135.0" text-anchor="middle" font-size="22">0</text>
<text x="169" y="221" text-anchor="end" font-size="11" fill-opacity="0.65">6</text>
<text x="147.0" y="243.0" text-anchor="middle" font-size="22">0</text>
<text x="169" y="167" text-anchor="end" font-size="11" fill-opacity="0.65">7</text>
<text x="147.0" y="189.0" text-anchor="middle" font-size="22">0</text>
<text x="277" y="59" text-anchor="end" font-size="11" fill-opacity="0.65">8</text>
<text x="277" y="113" text-anchor="end" font-size="11" fill-opacity="0.65">9</text>
<text x="277" y="221" text-anchor="end" font-size="11" fill-opacity="0.65">10</text>
<text x="277" y="167" text-anchor="end" font-size="11" fill-opacity="0.65">11</text>
<text x="223" y="59" text-anchor="end" font-size="11" fill-opacity="0.65">12</text>
<text x="201.0" y="81.0" text-anchor="middle" font-size="22">0</text>
<text x="223" y="113" text-anchor="end" font-size="11" fill-opacity="0.65">13</text>
<text x="201.0" y="135.0" text-anchor="middle" font-size="22">0</text>
<text x="223" y="221" text-anchor="end" font-size="11" fill-opacity="0.65">14</text>
<text x="201.0" y="243.0" text-anchor="middle" font-size="22">0</text>
<text x="223" y="167" text-anchor="end" font-size="11" fill-opacity="0.65">15</text>
<text x="201.0" y="189.0" text-anchor="middle" font-size="22">0</text>
<path d="M78.5,211.5 L161.5,211.5 M170.5,220.5 L170.5,258.5 M69.5,258.5 L69.5,220.5 M69.5,220.5 A9,9 0 0 1 78.5,211.5 M161.5,211.5 A9,9 0 0 1 170.5,220.5" stroke="#e8743b" stroke-width="2.6" fill="none"/>
<text x="74.5" y="253.5" font-size="14" fill="#e8743b" font-weight="bold">1</text>
<path d="M170.5,49.5 L170.5,87.5 M161.5,96.5 L78.5,96.5 M69.5,87.5 L69.5,49.5 M170.5,87.5 A9,9 0 0 1 161.5,96.5 M78.5,96.5 A9,9 0 0 1 69.5,87.5" stroke="#e8743b" stroke-width="2.6" fill="none"/>
<path d="M135.1,52.1 L212.9,52.1 M221.9,61.1 L221.9,246.9 M212.9,255.9 L135.1,255.9 M126.1,246.9 L126.1,61.1 M126.1,61.1 A9,9 0 0 1 135.1,52.1 M212.9,52.1 A9,9 0 0 1 221.9,61.1 M221.9,246.9 A9,9 0 0 1 212.9,255.9 M135.1,255.9 A9,9 0 0 1 126.1,246.9" stroke="#3b8be8" stroke-width="2.6" fill="none"/>
<text x="131.1" y="250.9" font-size="14" fill="#3b8be8" font-weight="bold">2</text>
</svg>
</div>

$$
\begin{aligned}
\text{วงที่ 1}\ (0,2,4,6) &\Rightarrow (A+D) \\
\text{วงที่ 2}\ (4,5,6,7,12,13,14,15) &\Rightarrow \overline{B} \\
f(A,B,C,D) &= (A+D)\overline{B}
\end{aligned}
$$

---

### ข้อ 4  จงลดรูป $f(A,B,C,D) = \overline{A}C+ACD+\overline{B}D+AB\overline{C}D$

$\mathbf{Sol}^{n}$

$$
\begin{aligned}
\overline{A}C &\Rightarrow \text{ใส่ } 1 \text{ ลงช่อง } 2,3,6,7 \\
ACD &\Rightarrow \text{ใส่ } 1 \text{ ลงช่อง } 11,15 \\
\overline{B}D &\Rightarrow \text{ใส่ } 1 \text{ ลงช่อง } 1,3,9,11 \\
AB\overline{C}D &\Rightarrow \text{ใส่ } 1 \text{ ลงช่อง } 13
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
<text x="115" y="113" text-anchor="end" font-size="11" fill-opacity="0.65">1</text>
<text x="93.0" y="135.0" text-anchor="middle" font-size="22">1</text>
<text x="115" y="221" text-anchor="end" font-size="11" fill-opacity="0.65">2</text>
<text x="93.0" y="243.0" text-anchor="middle" font-size="22">1</text>
<text x="115" y="167" text-anchor="end" font-size="11" fill-opacity="0.65">3</text>
<text x="93.0" y="189.0" text-anchor="middle" font-size="22">1</text>
<text x="169" y="59" text-anchor="end" font-size="11" fill-opacity="0.65">4</text>
<text x="169" y="113" text-anchor="end" font-size="11" fill-opacity="0.65">5</text>
<text x="169" y="221" text-anchor="end" font-size="11" fill-opacity="0.65">6</text>
<text x="147.0" y="243.0" text-anchor="middle" font-size="22">1</text>
<text x="169" y="167" text-anchor="end" font-size="11" fill-opacity="0.65">7</text>
<text x="147.0" y="189.0" text-anchor="middle" font-size="22">1</text>
<text x="277" y="59" text-anchor="end" font-size="11" fill-opacity="0.65">8</text>
<text x="277" y="113" text-anchor="end" font-size="11" fill-opacity="0.65">9</text>
<text x="255.0" y="135.0" text-anchor="middle" font-size="22">1</text>
<text x="277" y="221" text-anchor="end" font-size="11" fill-opacity="0.65">10</text>
<text x="277" y="167" text-anchor="end" font-size="11" fill-opacity="0.65">11</text>
<text x="255.0" y="189.0" text-anchor="middle" font-size="22">1</text>
<text x="223" y="59" text-anchor="end" font-size="11" fill-opacity="0.65">12</text>
<text x="223" y="113" text-anchor="end" font-size="11" fill-opacity="0.65">13</text>
<text x="201.0" y="135.0" text-anchor="middle" font-size="22">1</text>
<text x="223" y="221" text-anchor="end" font-size="11" fill-opacity="0.65">14</text>
<text x="223" y="167" text-anchor="end" font-size="11" fill-opacity="0.65">15</text>
<text x="201.0" y="189.0" text-anchor="middle" font-size="22">1</text>
<path d="M78.5,157.5 L161.5,157.5 M170.5,166.5 L170.5,249.5 M161.5,258.5 L78.5,258.5 M69.5,249.5 L69.5,166.5 M69.5,166.5 A9,9 0 0 1 78.5,157.5 M161.5,157.5 A9,9 0 0 1 170.5,166.5 M170.5,249.5 A9,9 0 0 1 161.5,258.5 M78.5,258.5 A9,9 0 0 1 69.5,249.5" stroke="#e8743b" stroke-width="2.6" fill="none"/>
<text x="74.5" y="253.5" font-size="14" fill="#e8743b" font-weight="bold">1</text>
<path d="M189.1,106.1 L266.9,106.1 M275.9,115.1 L275.9,192.9 M266.9,201.9 L189.1,201.9 M180.1,192.9 L180.1,115.1 M180.1,115.1 A9,9 0 0 1 189.1,106.1 M266.9,106.1 A9,9 0 0 1 275.9,115.1 M275.9,192.9 A9,9 0 0 1 266.9,201.9 M189.1,201.9 A9,9 0 0 1 180.1,192.9" stroke="#3b8be8" stroke-width="2.6" fill="none"/>
<text x="185.1" y="196.9" font-size="14" fill="#3b8be8" font-weight="bold">2</text>
<path d="M245.7,108.7 L273.3,108.7 M273.3,199.3 L245.7,199.3 M236.7,190.3 L236.7,117.7 M236.7,117.7 A9,9 0 0 1 245.7,108.7 M245.7,199.3 A9,9 0 0 1 236.7,190.3" stroke="#2fae5f" stroke-width="2.6" fill="none"/>
<text x="241.7" y="194.3" font-size="14" fill="#2fae5f" font-weight="bold">3</text>
<path d="M74.7,108.7 L102.3,108.7 M111.3,117.7 L111.3,190.3 M102.3,199.3 L74.7,199.3 M102.3,108.7 A9,9 0 0 1 111.3,117.7 M111.3,190.3 A9,9 0 0 1 102.3,199.3" stroke="#2fae5f" stroke-width="2.6" fill="none"/>
</svg>
</div>

$$
\begin{aligned}
\text{วงที่ 1}\ (2,3,6,7) &\Rightarrow \overline{A}C \\
\text{วงที่ 2}\ (9,11,13,15) &\Rightarrow AD \\
\text{วงที่ 3}\ (1,3,9,11) &\Rightarrow \overline{B}D \\
f(A,B,C,D) &= \overline{A}C+AD+\overline{B}D
\end{aligned}
$$

---

### ข้อ 5  จงลดรูป $f(A,B,C,D) = C(C+\overline{D})(A+\overline{B}+D)(\overline{A}+B+C+\overline{D})$

$\mathbf{Sol}^{n}$

$$
\begin{aligned}
C &\Rightarrow \text{ใส่ } 0 \text{ ลงช่อง } 0,1,4,5,8,9,12,13 \\
(C+\overline{D}) &\Rightarrow \text{ใส่ } 0 \text{ ลงช่อง } 1,5,9,13 \\
(A+\overline{B}+D) &\Rightarrow \text{ใส่ } 0 \text{ ลงช่อง } 4,6 \\
(\overline{A}+B+C+\overline{D}) &\Rightarrow \text{ใส่ } 0 \text{ ลงช่อง } 9
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
<text x="93.0" y="81.0" text-anchor="middle" font-size="22">0</text>
<text x="115" y="113" text-anchor="end" font-size="11" fill-opacity="0.65">1</text>
<text x="93.0" y="135.0" text-anchor="middle" font-size="22">0</text>
<text x="115" y="221" text-anchor="end" font-size="11" fill-opacity="0.65">2</text>
<text x="115" y="167" text-anchor="end" font-size="11" fill-opacity="0.65">3</text>
<text x="169" y="59" text-anchor="end" font-size="11" fill-opacity="0.65">4</text>
<text x="147.0" y="81.0" text-anchor="middle" font-size="22">0</text>
<text x="169" y="113" text-anchor="end" font-size="11" fill-opacity="0.65">5</text>
<text x="147.0" y="135.0" text-anchor="middle" font-size="22">0</text>
<text x="169" y="221" text-anchor="end" font-size="11" fill-opacity="0.65">6</text>
<text x="147.0" y="243.0" text-anchor="middle" font-size="22">0</text>
<text x="169" y="167" text-anchor="end" font-size="11" fill-opacity="0.65">7</text>
<text x="277" y="59" text-anchor="end" font-size="11" fill-opacity="0.65">8</text>
<text x="255.0" y="81.0" text-anchor="middle" font-size="22">0</text>
<text x="277" y="113" text-anchor="end" font-size="11" fill-opacity="0.65">9</text>
<text x="255.0" y="135.0" text-anchor="middle" font-size="22">0</text>
<text x="277" y="221" text-anchor="end" font-size="11" fill-opacity="0.65">10</text>
<text x="277" y="167" text-anchor="end" font-size="11" fill-opacity="0.65">11</text>
<text x="223" y="59" text-anchor="end" font-size="11" fill-opacity="0.65">12</text>
<text x="201.0" y="81.0" text-anchor="middle" font-size="22">0</text>
<text x="223" y="113" text-anchor="end" font-size="11" fill-opacity="0.65">13</text>
<text x="201.0" y="135.0" text-anchor="middle" font-size="22">0</text>
<text x="223" y="221" text-anchor="end" font-size="11" fill-opacity="0.65">14</text>
<text x="223" y="167" text-anchor="end" font-size="11" fill-opacity="0.65">15</text>
<path d="M132.5,211.5 L161.5,211.5 M170.5,220.5 L170.5,258.5 M123.5,258.5 L123.5,220.5 M123.5,220.5 A9,9 0 0 1 132.5,211.5 M161.5,211.5 A9,9 0 0 1 170.5,220.5" stroke="#e8743b" stroke-width="2.6" fill="none"/>
<text x="128.5" y="253.5" font-size="14" fill="#e8743b" font-weight="bold">1</text>
<path d="M170.5,49.5 L170.5,87.5 M161.5,96.5 L132.5,96.5 M123.5,87.5 L123.5,49.5 M170.5,87.5 A9,9 0 0 1 161.5,96.5 M132.5,96.5 A9,9 0 0 1 123.5,87.5" stroke="#e8743b" stroke-width="2.6" fill="none"/>
<path d="M81.1,52.1 L266.9,52.1 M275.9,61.1 L275.9,138.9 M266.9,147.9 L81.1,147.9 M72.1,138.9 L72.1,61.1 M72.1,61.1 A9,9 0 0 1 81.1,52.1 M266.9,52.1 A9,9 0 0 1 275.9,61.1 M275.9,138.9 A9,9 0 0 1 266.9,147.9 M81.1,147.9 A9,9 0 0 1 72.1,138.9" stroke="#3b8be8" stroke-width="2.6" fill="none"/>
<text x="77.1" y="142.9" font-size="14" fill="#3b8be8" font-weight="bold">2</text>
</svg>
</div>

$$
\begin{aligned}
\text{วงที่ 1}\ (4,6) &\Rightarrow (A+\overline{B}+D) \\
\text{วงที่ 2}\ (0,1,4,5,8,9,12,13) &\Rightarrow C \\
f(A,B,C,D) &= (A+\overline{B}+D)C
\end{aligned}
$$

---

## เงื่อนไขที่ไม่สนใจ (Don't Care Condition)

### ตัวอย่างที่ 1  จงเขียนสมการบูลีนจากแผนผังคาร์โนห์ต่อไปนี้

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
<text x="147.0" y="135.0" text-anchor="middle" font-size="22">1</text>
<text x="169" y="221" text-anchor="end" font-size="11" fill-opacity="0.65">6</text>
<text x="169" y="167" text-anchor="end" font-size="11" fill-opacity="0.65">7</text>
<text x="147.0" y="189.0" text-anchor="middle" font-size="22">x</text>
<text x="277" y="59" text-anchor="end" font-size="11" fill-opacity="0.65">8</text>
<text x="277" y="113" text-anchor="end" font-size="11" fill-opacity="0.65">9</text>
<text x="277" y="221" text-anchor="end" font-size="11" fill-opacity="0.65">10</text>
<text x="277" y="167" text-anchor="end" font-size="11" fill-opacity="0.65">11</text>
<text x="223" y="59" text-anchor="end" font-size="11" fill-opacity="0.65">12</text>
<text x="223" y="113" text-anchor="end" font-size="11" fill-opacity="0.65">13</text>
<text x="201.0" y="135.0" text-anchor="middle" font-size="22">x</text>
<text x="223" y="221" text-anchor="end" font-size="11" fill-opacity="0.65">14</text>
<text x="201.0" y="243.0" text-anchor="middle" font-size="22">x</text>
<text x="223" y="167" text-anchor="end" font-size="11" fill-opacity="0.65">15</text>
<text x="201.0" y="189.0" text-anchor="middle" font-size="22">1</text>
</svg>
</div>

$\mathbf{Sol}^{n}$

มีช่อง $x$ ที่ตำแหน่ง $0111, 1101, 1110$ ให้กำหนด $0111$ และ $1101$ เป็น $1$ เพื่อวงรวมได้ 4 ช่อง ส่วน $1110$ กำหนดเป็น $0$ เพื่อไม่ต้องนำมาใช้

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
<text x="147.0" y="135.0" text-anchor="middle" font-size="22">1</text>
<text x="169" y="221" text-anchor="end" font-size="11" fill-opacity="0.65">6</text>
<text x="169" y="167" text-anchor="end" font-size="11" fill-opacity="0.65">7</text>
<text x="147.0" y="189.0" text-anchor="middle" font-size="22">1</text>
<text x="277" y="59" text-anchor="end" font-size="11" fill-opacity="0.65">8</text>
<text x="277" y="113" text-anchor="end" font-size="11" fill-opacity="0.65">9</text>
<text x="277" y="221" text-anchor="end" font-size="11" fill-opacity="0.65">10</text>
<text x="277" y="167" text-anchor="end" font-size="11" fill-opacity="0.65">11</text>
<text x="223" y="59" text-anchor="end" font-size="11" fill-opacity="0.65">12</text>
<text x="223" y="113" text-anchor="end" font-size="11" fill-opacity="0.65">13</text>
<text x="201.0" y="135.0" text-anchor="middle" font-size="22">1</text>
<text x="223" y="221" text-anchor="end" font-size="11" fill-opacity="0.65">14</text>
<text x="223" y="167" text-anchor="end" font-size="11" fill-opacity="0.65">15</text>
<text x="201.0" y="189.0" text-anchor="middle" font-size="22">1</text>
<path d="M132.5,103.5 L215.5,103.5 M224.5,112.5 L224.5,195.5 M215.5,204.5 L132.5,204.5 M123.5,195.5 L123.5,112.5 M123.5,112.5 A9,9 0 0 1 132.5,103.5 M215.5,103.5 A9,9 0 0 1 224.5,112.5 M224.5,195.5 A9,9 0 0 1 215.5,204.5 M132.5,204.5 A9,9 0 0 1 123.5,195.5" stroke="#e8743b" stroke-width="2.6" fill="none"/>
<text x="128.5" y="199.5" font-size="14" fill="#e8743b" font-weight="bold">1</text>
</svg>
</div>

$$
\begin{aligned}
\text{วงที่ 1}\ (5,7,13,15) &\Rightarrow BD \\
Z &= BD
\end{aligned}
$$

---

### ตัวอย่างที่ 2  ถ้ากำหนด $1110$ เป็น $1$ ในตัวอย่างที่ 1

$\mathbf{Sol}^{n}$

ถ้ากำหนด $1110$ เป็น $1$ ด้วย จะต้องวงเพิ่ม ทำให้สมการใหญ่ขึ้น

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
<text x="147.0" y="135.0" text-anchor="middle" font-size="22">1</text>
<text x="169" y="221" text-anchor="end" font-size="11" fill-opacity="0.65">6</text>
<text x="169" y="167" text-anchor="end" font-size="11" fill-opacity="0.65">7</text>
<text x="147.0" y="189.0" text-anchor="middle" font-size="22">1</text>
<text x="277" y="59" text-anchor="end" font-size="11" fill-opacity="0.65">8</text>
<text x="277" y="113" text-anchor="end" font-size="11" fill-opacity="0.65">9</text>
<text x="277" y="221" text-anchor="end" font-size="11" fill-opacity="0.65">10</text>
<text x="277" y="167" text-anchor="end" font-size="11" fill-opacity="0.65">11</text>
<text x="223" y="59" text-anchor="end" font-size="11" fill-opacity="0.65">12</text>
<text x="223" y="113" text-anchor="end" font-size="11" fill-opacity="0.65">13</text>
<text x="201.0" y="135.0" text-anchor="middle" font-size="22">1</text>
<text x="223" y="221" text-anchor="end" font-size="11" fill-opacity="0.65">14</text>
<text x="201.0" y="243.0" text-anchor="middle" font-size="22">1</text>
<text x="223" y="167" text-anchor="end" font-size="11" fill-opacity="0.65">15</text>
<text x="201.0" y="189.0" text-anchor="middle" font-size="22">1</text>
<path d="M186.5,157.5 L215.5,157.5 M224.5,166.5 L224.5,249.5 M215.5,258.5 L186.5,258.5 M177.5,249.5 L177.5,166.5 M177.5,166.5 A9,9 0 0 1 186.5,157.5 M215.5,157.5 A9,9 0 0 1 224.5,166.5 M224.5,249.5 A9,9 0 0 1 215.5,258.5 M186.5,258.5 A9,9 0 0 1 177.5,249.5" stroke="#e8743b" stroke-width="2.6" fill="none"/>
<text x="182.5" y="253.5" font-size="14" fill="#e8743b" font-weight="bold">1</text>
<path d="M135.1,106.1 L212.9,106.1 M221.9,115.1 L221.9,192.9 M212.9,201.9 L135.1,201.9 M126.1,192.9 L126.1,115.1 M126.1,115.1 A9,9 0 0 1 135.1,106.1 M212.9,106.1 A9,9 0 0 1 221.9,115.1 M221.9,192.9 A9,9 0 0 1 212.9,201.9 M135.1,201.9 A9,9 0 0 1 126.1,192.9" stroke="#3b8be8" stroke-width="2.6" fill="none"/>
<text x="131.1" y="196.9" font-size="14" fill="#3b8be8" font-weight="bold">2</text>
</svg>
</div>

$$
\begin{aligned}
\text{วงที่ 1}\ (14,15) &\Rightarrow ABC \\
\text{วงที่ 2}\ (5,7,13,15) &\Rightarrow BD \\
Z &= ABC+BD
\end{aligned}
$$

สมการนี้ใหญ่กว่าตัวอย่างที่ 1 (ใช้ไอซีมากขึ้น) แม้เอาต์พุตจะเหมือนกันเมื่ออินพุตอยู่ในค่าที่ใช้งานจริง

---

### ตัวอย่างที่ 3  กำหนดให้ $A, B, C, D$ แทนเลขฐานสองเรียงตามลำดับความสำคัญ โดย $A$ เป็นบิตที่สำคัญที่สุด จงเขียนสมการบูลีนที่ทำให้เอาต์พุต $Z=1$ ก็ต่อเมื่ออินพุตซึ่งใช้งานเพียง 10 ค่า คือ $0000, 0001, \ldots, 1001$ มีค่าเป็น $1$ พร้อมกัน 2 ค่า

$\mathbf{Sol}^{n}$

อินพุตมี 4 บิต เป็นได้ 16 ค่า แต่ใช้งานเพียง 10 ค่า ดังนั้น $1010$ ถึง $1111$ เป็นเงื่อนไขที่ไม่สนใจ ($x$) ส่วนค่าที่ $Z=1$ คือค่าที่มีบิต $1$ พอดี 2 ตัว ได้แก่ $0011, 0101, 0110, 1001$

$$
\begin{array}{|c|c|c|c|c|}
\hline
A & B & C & D & Z \\
\hline
0 & 0 & 0 & 0 & 0 \\
\hline
0 & 0 & 0 & 1 & 0 \\
\hline
0 & 0 & 1 & 0 & 0 \\
\hline
0 & 0 & 1 & 1 & 1 \\
\hline
0 & 1 & 0 & 0 & 0 \\
\hline
0 & 1 & 0 & 1 & 1 \\
\hline
0 & 1 & 1 & 0 & 1 \\
\hline
0 & 1 & 1 & 1 & 0 \\
\hline
1 & 0 & 0 & 0 & 0 \\
\hline
1 & 0 & 0 & 1 & 1 \\
\hline
1 & 0 & 1 & 0 & x \\
\hline
1 & 0 & 1 & 1 & x \\
\hline
1 & 1 & 0 & 0 & x \\
\hline
1 & 1 & 0 & 1 & x \\
\hline
1 & 1 & 1 & 0 & x \\
\hline
1 & 1 & 1 & 1 & x \\
\hline
\end{array}
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
<text x="93.0" y="81.0" text-anchor="middle" font-size="22">0</text>
<text x="115" y="113" text-anchor="end" font-size="11" fill-opacity="0.65">1</text>
<text x="93.0" y="135.0" text-anchor="middle" font-size="22">0</text>
<text x="115" y="221" text-anchor="end" font-size="11" fill-opacity="0.65">2</text>
<text x="93.0" y="243.0" text-anchor="middle" font-size="22">0</text>
<text x="115" y="167" text-anchor="end" font-size="11" fill-opacity="0.65">3</text>
<text x="93.0" y="189.0" text-anchor="middle" font-size="22">1</text>
<text x="169" y="59" text-anchor="end" font-size="11" fill-opacity="0.65">4</text>
<text x="147.0" y="81.0" text-anchor="middle" font-size="22">0</text>
<text x="169" y="113" text-anchor="end" font-size="11" fill-opacity="0.65">5</text>
<text x="147.0" y="135.0" text-anchor="middle" font-size="22">1</text>
<text x="169" y="221" text-anchor="end" font-size="11" fill-opacity="0.65">6</text>
<text x="147.0" y="243.0" text-anchor="middle" font-size="22">1</text>
<text x="169" y="167" text-anchor="end" font-size="11" fill-opacity="0.65">7</text>
<text x="147.0" y="189.0" text-anchor="middle" font-size="22">0</text>
<text x="277" y="59" text-anchor="end" font-size="11" fill-opacity="0.65">8</text>
<text x="255.0" y="81.0" text-anchor="middle" font-size="22">0</text>
<text x="277" y="113" text-anchor="end" font-size="11" fill-opacity="0.65">9</text>
<text x="255.0" y="135.0" text-anchor="middle" font-size="22">1</text>
<text x="277" y="221" text-anchor="end" font-size="11" fill-opacity="0.65">10</text>
<text x="255.0" y="243.0" text-anchor="middle" font-size="22">x</text>
<text x="277" y="167" text-anchor="end" font-size="11" fill-opacity="0.65">11</text>
<text x="255.0" y="189.0" text-anchor="middle" font-size="22">x</text>
<text x="223" y="59" text-anchor="end" font-size="11" fill-opacity="0.65">12</text>
<text x="201.0" y="81.0" text-anchor="middle" font-size="22">x</text>
<text x="223" y="113" text-anchor="end" font-size="11" fill-opacity="0.65">13</text>
<text x="201.0" y="135.0" text-anchor="middle" font-size="22">x</text>
<text x="223" y="221" text-anchor="end" font-size="11" fill-opacity="0.65">14</text>
<text x="201.0" y="243.0" text-anchor="middle" font-size="22">x</text>
<text x="223" y="167" text-anchor="end" font-size="11" fill-opacity="0.65">15</text>
<text x="201.0" y="189.0" text-anchor="middle" font-size="22">x</text>
<path d="M186.5,103.5 L269.5,103.5 M278.5,112.5 L278.5,195.5 M269.5,204.5 L186.5,204.5 M177.5,195.5 L177.5,112.5 M177.5,112.5 A9,9 0 0 1 186.5,103.5 M269.5,103.5 A9,9 0 0 1 278.5,112.5 M278.5,195.5 A9,9 0 0 1 269.5,204.5 M186.5,204.5 A9,9 0 0 1 177.5,195.5" stroke="#e8743b" stroke-width="2.6" fill="none"/>
<text x="182.5" y="199.5" font-size="14" fill="#e8743b" font-weight="bold">1</text>
<path d="M135.1,106.1 L212.9,106.1 M221.9,115.1 L221.9,138.9 M212.9,147.9 L135.1,147.9 M126.1,138.9 L126.1,115.1 M126.1,115.1 A9,9 0 0 1 135.1,106.1 M212.9,106.1 A9,9 0 0 1 221.9,115.1 M221.9,138.9 A9,9 0 0 1 212.9,147.9 M135.1,147.9 A9,9 0 0 1 126.1,138.9" stroke="#3b8be8" stroke-width="2.6" fill="none"/>
<text x="131.1" y="142.9" font-size="14" fill="#3b8be8" font-weight="bold">2</text>
<path d="M245.7,162.7 L273.3,162.7 M273.3,199.3 L245.7,199.3 M236.7,190.3 L236.7,171.7 M236.7,171.7 A9,9 0 0 1 245.7,162.7 M245.7,199.3 A9,9 0 0 1 236.7,190.3" stroke="#2fae5f" stroke-width="2.6" fill="none"/>
<text x="241.7" y="194.3" font-size="14" fill="#2fae5f" font-weight="bold">3</text>
<path d="M74.7,162.7 L102.3,162.7 M111.3,171.7 L111.3,190.3 M102.3,199.3 L74.7,199.3 M102.3,162.7 A9,9 0 0 1 111.3,171.7 M111.3,190.3 A9,9 0 0 1 102.3,199.3" stroke="#2fae5f" stroke-width="2.6" fill="none"/>
<path d="M132.5,211.5 L215.5,211.5 M224.5,220.5 L224.5,249.5 M215.5,258.5 L132.5,258.5 M123.5,249.5 L123.5,220.5 M123.5,220.5 A9,9 0 0 1 132.5,211.5 M215.5,211.5 A9,9 0 0 1 224.5,220.5 M224.5,249.5 A9,9 0 0 1 215.5,258.5 M132.5,258.5 A9,9 0 0 1 123.5,249.5" stroke="#c553c9" stroke-width="2.6" fill="none"/>
<text x="128.5" y="253.5" font-size="14" fill="#c553c9" font-weight="bold">4</text>
</svg>
</div>

$$
\begin{aligned}
\text{วงที่ 1}\ (9,11,13,15) &\Rightarrow AD \\
\text{วงที่ 2}\ (5,13) &\Rightarrow B\overline{C}D \\
\text{วงที่ 3}\ (3,11) &\Rightarrow \overline{B}CD \\
\text{วงที่ 4}\ (6,14) &\Rightarrow BC\overline{D} \\
Z &= AD+B\overline{C}D+\overline{B}CD+BC\overline{D}
\end{aligned}
$$

---

### ตัวอย่างที่ 4  จงลดรูป $f(A,B,C,D) = \sum m(1,3,7,11,15)+\sum d(0,2,5)$

$\mathbf{Sol}^{n}$

ใส่ $1$ ที่ช่อง $1,3,7,11,15$ และใส่ $x$ ที่ช่อง $0,2,5$

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
<path d="M78.5,103.5 L161.5,103.5 M170.5,112.5 L170.5,195.5 M161.5,204.5 L78.5,204.5 M69.5,195.5 L69.5,112.5 M69.5,112.5 A9,9 0 0 1 78.5,103.5 M161.5,103.5 A9,9 0 0 1 170.5,112.5 M170.5,195.5 A9,9 0 0 1 161.5,204.5 M78.5,204.5 A9,9 0 0 1 69.5,195.5" stroke="#e8743b" stroke-width="2.6" fill="none"/>
<text x="74.5" y="199.5" font-size="14" fill="#e8743b" font-weight="bold">1</text>
<path d="M81.1,160.1 L266.9,160.1 M275.9,169.1 L275.9,192.9 M266.9,201.9 L81.1,201.9 M72.1,192.9 L72.1,169.1 M72.1,169.1 A9,9 0 0 1 81.1,160.1 M266.9,160.1 A9,9 0 0 1 275.9,169.1 M275.9,192.9 A9,9 0 0 1 266.9,201.9 M81.1,201.9 A9,9 0 0 1 72.1,192.9" stroke="#3b8be8" stroke-width="2.6" fill="none"/>
<text x="77.1" y="196.9" font-size="14" fill="#3b8be8" font-weight="bold">2</text>
</svg>
</div>

$$
\begin{aligned}
\text{วงที่ 1}\ (1,3,5,7) &\Rightarrow \overline{A}D \\
\text{วงที่ 2}\ (3,7,11,15) &\Rightarrow CD \\
f(A,B,C,D) &= \overline{A}D+CD
\end{aligned}
$$
