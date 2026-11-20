# ข้อสอบปลายภาค ข้อ 4 Verilog

@select case ตัวอย่าง | c1=1 | c2=2 | c3=3 | c4=4 | c5=5 | c6=6 | c7=7 | c8=8 | c9=9 | c10=10 | c11=11 | c12=12 | c13=13 | c14=14 | c15=15 | c16=16 | c17=17
@select part ส่วนของโจทย์ | a=โค้ดไปวงจร (อ่านโค้ด วาดวงจร) | b=วงจรไปโค้ด (ดูวงจร เขียนโค้ด)
@select style สไตล์ของโค้ด | struct=Structural (เกต) | flow=Dataflow (assign)

---

## ข้อ 4 Verilog

@choices

### ข้อ 4  โมดูล Ckt ต่อไปนี้ทำหน้าที่อะไร จงเขียนวงจร ตารางความจริง และสมการของเอาต์พุต {part=a; case=c1; style=struct}

```verilog
module Ckt (Y, A, B, C, D);
output Y;
input A, B, C, D;
wire NotC, P, Q;

not (NotC, C);
and (P, A, B);
and (Q, NotC, D);
or (Y, P, Q);
endmodule
```

$\mathbf{Sol}^{n}$

- `not (NotC, C)` : $\mathit{NotC} = \overline{C}$
- `and (P, A, B)` : $P = A\,B$
- `and (Q, NotC, D)` : $Q = \mathit{NotC}\,D$
- `or (Y, P, Q)` : $Y = P + Q$

$\mathbf{Ans}\quad \begin{aligned}Y &= A\,B + \overline{C}\,D\end{aligned}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="750" height="476" viewBox="0 0 750 476" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<polygon points="200,76 200,100 222,88"/>
<circle cx="227" cy="88" r="5"/>
<path d="M102,88 L128.5,88 A4.5,4.5 0 0 1 137.5,88 L200,88"/>
<path d="M200,144 H226 A26,33 0 0 1 226,210 H200 Z"/>
<path d="M40,166 L66.5,166 A4.5,4.5 0 0 1 75.5,166 L128.5,166 A4.5,4.5 0 0 1 137.5,166 L200,166"/>
<path d="M71,188 L128.5,188 A4.5,4.5 0 0 1 137.5,188 L200,188"/>
<line x1="232" y1="88" x2="290.2" y2="88"/>
<path d="M252,177 L285.7,177 A4.5,4.5 0 0 1 294.7,177 L318.2,177"/>
<path d="M372.2,252 H398.2 A26,33 0 0 1 398.2,318 H372.2 Z"/>
<path d="M290.2,274 L313.7,274 A4.5,4.5 0 0 1 322.7,274 L372.2,274"/>
<path d="M133,296 L313.7,296 A4.5,4.5 0 0 1 322.7,296 L372.2,296"/>
<line x1="424.2" y1="285" x2="458.3" y2="285"/>
<path d="M512.3,360 C534.3,360 560.3,376.5 572.3,393 C560.3,409.5 534.3,426 512.3,426 Q526.3,393 512.3,360 Z"/>
<path d="M318.2,382 L453.8,382 A4.5,4.5 0 0 1 462.8,382 L518.5,382"/>
<line x1="458.3" y1="404" x2="518.5" y2="404"/>
<line x1="572.3" y1="393" x2="598.3" y2="393"/>
<line x1="598.3" y1="393" x2="654.3" y2="393"/>
<line x1="40" y1="36" x2="40" y2="166"/>
<line x1="71" y1="36" x2="71" y2="188"/>
<line x1="102" y1="36" x2="102" y2="88"/>
<line x1="133" y1="36" x2="133" y2="296"/>
<line x1="290.2" y1="88" x2="290.2" y2="274"/>
<line x1="318.2" y1="177" x2="318.2" y2="382"/>
<line x1="458.3" y1="285" x2="458.3" y2="404"/>
<circle cx="102" cy="88" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="40" cy="166" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="188" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="290.2" cy="274" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="133" cy="296" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="318.2" cy="382" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="458.3" cy="404" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="290.2" cy="88" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="318.2" cy="177" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="458.3" cy="285" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="240" y="81" text-anchor="start" font-size="13">NotC</text>
<text x="260" y="170" text-anchor="start" font-size="13">P</text>
<text x="432.2" y="278" text-anchor="start" font-size="13">Q</text>
<text x="662.3" y="399" text-anchor="start">Y</text>
<text x="40" y="28" text-anchor="middle" font-size="16">A</text>
<text x="71" y="28" text-anchor="middle" font-size="16">B</text>
<text x="102" y="28" text-anchor="middle" font-size="16">C</text>
<text x="133" y="28" text-anchor="middle" font-size="16">D</text>
</g>
</svg>
</div>

### ข้อ 4  จงเขียนโมดูล Verilog แบบ Structural ของวงจรในรูป ($Y = A\,B + \overline{C}\,D$) {part=b; case=c1; style=struct}

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="750" height="476" viewBox="0 0 750 476" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<polygon points="200,76 200,100 222,88"/>
<circle cx="227" cy="88" r="5"/>
<path d="M102,88 L128.5,88 A4.5,4.5 0 0 1 137.5,88 L200,88"/>
<path d="M200,144 H226 A26,33 0 0 1 226,210 H200 Z"/>
<path d="M40,166 L66.5,166 A4.5,4.5 0 0 1 75.5,166 L128.5,166 A4.5,4.5 0 0 1 137.5,166 L200,166"/>
<path d="M71,188 L128.5,188 A4.5,4.5 0 0 1 137.5,188 L200,188"/>
<line x1="232" y1="88" x2="290.2" y2="88"/>
<path d="M252,177 L285.7,177 A4.5,4.5 0 0 1 294.7,177 L318.2,177"/>
<path d="M372.2,252 H398.2 A26,33 0 0 1 398.2,318 H372.2 Z"/>
<path d="M290.2,274 L313.7,274 A4.5,4.5 0 0 1 322.7,274 L372.2,274"/>
<path d="M133,296 L313.7,296 A4.5,4.5 0 0 1 322.7,296 L372.2,296"/>
<line x1="424.2" y1="285" x2="458.3" y2="285"/>
<path d="M512.3,360 C534.3,360 560.3,376.5 572.3,393 C560.3,409.5 534.3,426 512.3,426 Q526.3,393 512.3,360 Z"/>
<path d="M318.2,382 L453.8,382 A4.5,4.5 0 0 1 462.8,382 L518.5,382"/>
<line x1="458.3" y1="404" x2="518.5" y2="404"/>
<line x1="572.3" y1="393" x2="598.3" y2="393"/>
<line x1="598.3" y1="393" x2="654.3" y2="393"/>
<line x1="40" y1="36" x2="40" y2="166"/>
<line x1="71" y1="36" x2="71" y2="188"/>
<line x1="102" y1="36" x2="102" y2="88"/>
<line x1="133" y1="36" x2="133" y2="296"/>
<line x1="290.2" y1="88" x2="290.2" y2="274"/>
<line x1="318.2" y1="177" x2="318.2" y2="382"/>
<line x1="458.3" y1="285" x2="458.3" y2="404"/>
<circle cx="102" cy="88" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="40" cy="166" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="188" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="290.2" cy="274" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="133" cy="296" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="318.2" cy="382" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="458.3" cy="404" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="290.2" cy="88" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="318.2" cy="177" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="458.3" cy="285" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="240" y="81" text-anchor="start" font-size="13">NotC</text>
<text x="260" y="170" text-anchor="start" font-size="13">P</text>
<text x="432.2" y="278" text-anchor="start" font-size="13">Q</text>
<text x="662.3" y="399" text-anchor="start">Y</text>
<text x="40" y="28" text-anchor="middle" font-size="16">A</text>
<text x="71" y="28" text-anchor="middle" font-size="16">B</text>
<text x="102" y="28" text-anchor="middle" font-size="16">C</text>
<text x="133" y="28" text-anchor="middle" font-size="16">D</text>
</g>
</svg>
</div>

$\mathbf{Sol}^{n}$

- $\mathit{NotC} = \overline{C}$
- $P = A\,B$
- $Q = \mathit{NotC}\,D$
- $Y = P + Q$

$\mathbf{Ans}\quad \text{โค้ดต่อไปนี้}$

```verilog
module Ckt (Y, A, B, C, D);
output Y;
input A, B, C, D;
wire NotC, P, Q;

not (NotC, C);
and (P, A, B);
and (Q, NotC, D);
or (Y, P, Q);
endmodule
```

### ข้อ 4  โมดูล Ckt ต่อไปนี้ทำหน้าที่อะไร จงเขียนวงจร ตารางความจริง และสมการของเอาต์พุต {part=a; case=c1; style=flow}

```verilog
module Ckt (Y, A, B, C, D);
output Y;
input A, B, C, D;
assign Y = (A & B) | (~C & D);
endmodule
```

$\mathbf{Sol}^{n}$

- `assign Y = (A & B) | (~C & D)` : $Y = A\,B + \overline{C}\,D$

$\mathbf{Ans}\quad \begin{aligned}Y &= A\,B + \overline{C}\,D\end{aligned}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="730" height="476" viewBox="0 0 730 476" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<path d="M200,74 H226 A26,33 0 0 1 226,140 H200 Z"/>
<path d="M40,96 L66.5,96 A4.5,4.5 0 0 1 75.5,96 L97.5,96 A4.5,4.5 0 0 1 106.5,96 L128.5,96 A4.5,4.5 0 0 1 137.5,96 L200,96"/>
<path d="M71,118 L97.5,118 A4.5,4.5 0 0 1 106.5,118 L128.5,118 A4.5,4.5 0 0 1 137.5,118 L200,118"/>
<polygon points="200,184 200,208 222,196"/>
<circle cx="227" cy="196" r="5"/>
<path d="M102,196 L128.5,196 A4.5,4.5 0 0 1 137.5,196 L200,196"/>
<line x1="252" y1="107" x2="278" y2="107"/>
<path d="M232,196 L273.5,196 A4.5,4.5 0 0 1 282.5,196 L306,196"/>
<path d="M360,252 H386 A26,33 0 0 1 386,318 H360 Z"/>
<line x1="306" y1="274" x2="360" y2="274"/>
<path d="M133,296 L273.5,296 A4.5,4.5 0 0 1 282.5,296 L360,296"/>
<line x1="412" y1="285" x2="438" y2="285"/>
<path d="M492,360 C514,360 540,376.5 552,393 C540,409.5 514,426 492,426 Q506,393 492,360 Z"/>
<path d="M278,382 L433.5,382 A4.5,4.5 0 0 1 442.5,382 L498.2,382"/>
<line x1="438" y1="404" x2="498.2" y2="404"/>
<line x1="552" y1="393" x2="578" y2="393"/>
<line x1="578" y1="393" x2="634" y2="393"/>
<line x1="40" y1="36" x2="40" y2="96"/>
<line x1="71" y1="36" x2="71" y2="118"/>
<line x1="102" y1="36" x2="102" y2="196"/>
<line x1="133" y1="36" x2="133" y2="296"/>
<line x1="278" y1="107" x2="278" y2="382"/>
<line x1="306" y1="196" x2="306" y2="274"/>
<line x1="438" y1="285" x2="438" y2="404"/>
<circle cx="40" cy="96" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="118" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="102" cy="196" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="306" cy="274" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="133" cy="296" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="278" cy="382" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="438" cy="404" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="278" cy="107" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="306" cy="196" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="438" cy="285" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="642" y="399" text-anchor="start">Y</text>
<text x="40" y="28" text-anchor="middle" font-size="16">A</text>
<text x="71" y="28" text-anchor="middle" font-size="16">B</text>
<text x="102" y="28" text-anchor="middle" font-size="16">C</text>
<text x="133" y="28" text-anchor="middle" font-size="16">D</text>
</g>
</svg>
</div>

### ข้อ 4  จงเขียนโมดูล Verilog แบบ Dataflow ของวงจรในรูป ($Y = A\,B + \overline{C}\,D$) {part=b; case=c1; style=flow}

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="750" height="476" viewBox="0 0 750 476" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<polygon points="200,76 200,100 222,88"/>
<circle cx="227" cy="88" r="5"/>
<path d="M102,88 L128.5,88 A4.5,4.5 0 0 1 137.5,88 L200,88"/>
<path d="M200,144 H226 A26,33 0 0 1 226,210 H200 Z"/>
<path d="M40,166 L66.5,166 A4.5,4.5 0 0 1 75.5,166 L128.5,166 A4.5,4.5 0 0 1 137.5,166 L200,166"/>
<path d="M71,188 L128.5,188 A4.5,4.5 0 0 1 137.5,188 L200,188"/>
<line x1="232" y1="88" x2="290.2" y2="88"/>
<path d="M252,177 L285.7,177 A4.5,4.5 0 0 1 294.7,177 L318.2,177"/>
<path d="M372.2,252 H398.2 A26,33 0 0 1 398.2,318 H372.2 Z"/>
<path d="M290.2,274 L313.7,274 A4.5,4.5 0 0 1 322.7,274 L372.2,274"/>
<path d="M133,296 L313.7,296 A4.5,4.5 0 0 1 322.7,296 L372.2,296"/>
<line x1="424.2" y1="285" x2="458.3" y2="285"/>
<path d="M512.3,360 C534.3,360 560.3,376.5 572.3,393 C560.3,409.5 534.3,426 512.3,426 Q526.3,393 512.3,360 Z"/>
<path d="M318.2,382 L453.8,382 A4.5,4.5 0 0 1 462.8,382 L518.5,382"/>
<line x1="458.3" y1="404" x2="518.5" y2="404"/>
<line x1="572.3" y1="393" x2="598.3" y2="393"/>
<line x1="598.3" y1="393" x2="654.3" y2="393"/>
<line x1="40" y1="36" x2="40" y2="166"/>
<line x1="71" y1="36" x2="71" y2="188"/>
<line x1="102" y1="36" x2="102" y2="88"/>
<line x1="133" y1="36" x2="133" y2="296"/>
<line x1="290.2" y1="88" x2="290.2" y2="274"/>
<line x1="318.2" y1="177" x2="318.2" y2="382"/>
<line x1="458.3" y1="285" x2="458.3" y2="404"/>
<circle cx="102" cy="88" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="40" cy="166" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="188" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="290.2" cy="274" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="133" cy="296" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="318.2" cy="382" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="458.3" cy="404" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="290.2" cy="88" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="318.2" cy="177" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="458.3" cy="285" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="240" y="81" text-anchor="start" font-size="13">NotC</text>
<text x="260" y="170" text-anchor="start" font-size="13">P</text>
<text x="432.2" y="278" text-anchor="start" font-size="13">Q</text>
<text x="662.3" y="399" text-anchor="start">Y</text>
<text x="40" y="28" text-anchor="middle" font-size="16">A</text>
<text x="71" y="28" text-anchor="middle" font-size="16">B</text>
<text x="102" y="28" text-anchor="middle" font-size="16">C</text>
<text x="133" y="28" text-anchor="middle" font-size="16">D</text>
</g>
</svg>
</div>

$\mathbf{Sol}^{n}$

- $Y = A\,B + \overline{C}\,D$

$\mathbf{Ans}\quad \text{โค้ดต่อไปนี้}$

```verilog
module Ckt (Y, A, B, C, D);
output Y;
input A, B, C, D;
assign Y = (A & B) | (~C & D);
endmodule
```

### ข้อ 4  โมดูล Mux2to1 ต่อไปนี้ทำหน้าที่อะไร จงเขียนวงจร ตารางความจริง และสมการของเอาต์พุต {part=a; case=c2; style=struct}

```verilog
module Mux2to1 (Out, In0, In1, Sel);
output Out;
input In0, In1, Sel;
wire NotSel, P, Q;
not (NotSel, Sel);
and (P, In1, Sel);
and (Q, In0, NotSel);
or (Out, P, Q);
endmodule
```

$\mathbf{Sol}^{n}$

- `not (NotSel, Sel)` : $\mathit{NotSel} = \overline{\mathit{Sel}}$
- `and (P, In1, Sel)` : $P = \mathit{In1}\,\mathit{Sel}$
- `and (Q, In0, NotSel)` : $Q = \mathit{In0}\,\mathit{NotSel}$
- `or (Out, P, Q)` : $\mathit{Out} = P + Q$

$\mathbf{Ans}\quad \begin{aligned}\mathit{Out} &= \mathit{Sel}\,\mathit{In1} + \overline{\mathit{Sel}}\,\mathit{In0}\end{aligned}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="789" height="476" viewBox="0 0 789 476" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<polygon points="223,76 223,100 245,88"/>
<circle cx="250" cy="88" r="5"/>
<line x1="138" y1="88" x2="223" y2="88"/>
<path d="M223,144 H249 A26,33 0 0 1 249,210 H223 Z"/>
<path d="M89,166 L133.5,166 A4.5,4.5 0 0 1 142.5,166 L223,166"/>
<line x1="138" y1="188" x2="223" y2="188"/>
<line x1="255" y1="88" x2="329.4" y2="88"/>
<path d="M275,177 L324.9,177 A4.5,4.5 0 0 1 333.9,177 L357.4,177"/>
<path d="M411.4,252 H437.4 A26,33 0 0 1 437.4,318 H411.4 Z"/>
<path d="M40,274 L324.9,274 A4.5,4.5 0 0 1 333.9,274 L352.9,274 A4.5,4.5 0 0 1 361.9,274 L411.4,274"/>
<path d="M329.4,296 L352.9,296 A4.5,4.5 0 0 1 361.9,296 L411.4,296"/>
<line x1="463.4" y1="285" x2="497.4" y2="285"/>
<path d="M551.4,360 C573.4,360 599.4,376.5 611.4,393 C599.4,409.5 573.4,426 551.4,426 Q565.4,393 551.4,360 Z"/>
<path d="M357.4,382 L492.9,382 A4.5,4.5 0 0 1 501.9,382 L557.6,382"/>
<line x1="497.4" y1="404" x2="557.6" y2="404"/>
<line x1="611.4" y1="393" x2="637.4" y2="393"/>
<line x1="637.4" y1="393" x2="693.4" y2="393"/>
<line x1="40" y1="36" x2="40" y2="274"/>
<line x1="89" y1="36" x2="89" y2="166"/>
<line x1="138" y1="36" x2="138" y2="188"/>
<line x1="329.4" y1="88" x2="329.4" y2="296"/>
<line x1="357.4" y1="177" x2="357.4" y2="382"/>
<line x1="497.4" y1="285" x2="497.4" y2="404"/>
<circle cx="138" cy="88" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="89" cy="166" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="138" cy="188" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="40" cy="274" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="329.4" cy="296" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="357.4" cy="382" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="497.4" cy="404" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="329.4" cy="88" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="357.4" cy="177" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="497.4" cy="285" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="263" y="81" text-anchor="start" font-size="13">NotSel</text>
<text x="283" y="170" text-anchor="start" font-size="13">P</text>
<text x="471.4" y="278" text-anchor="start" font-size="13">Q</text>
<text x="701.4" y="399" text-anchor="start">Out</text>
<text x="40" y="28" text-anchor="middle" font-size="16">In0</text>
<text x="89" y="28" text-anchor="middle" font-size="16">In1</text>
<text x="138" y="28" text-anchor="middle" font-size="16">Sel</text>
</g>
</svg>
</div>

### ข้อ 4  จงเขียนโมดูล Verilog แบบ Structural ของวงจรในรูป ($\mathit{Out} = \mathit{Sel}\,\mathit{In1} + \overline{\mathit{Sel}}\,\mathit{In0}$) {part=b; case=c2; style=struct}

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="789" height="476" viewBox="0 0 789 476" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<polygon points="223,76 223,100 245,88"/>
<circle cx="250" cy="88" r="5"/>
<line x1="138" y1="88" x2="223" y2="88"/>
<path d="M223,144 H249 A26,33 0 0 1 249,210 H223 Z"/>
<path d="M89,166 L133.5,166 A4.5,4.5 0 0 1 142.5,166 L223,166"/>
<line x1="138" y1="188" x2="223" y2="188"/>
<line x1="255" y1="88" x2="329.4" y2="88"/>
<path d="M275,177 L324.9,177 A4.5,4.5 0 0 1 333.9,177 L357.4,177"/>
<path d="M411.4,252 H437.4 A26,33 0 0 1 437.4,318 H411.4 Z"/>
<path d="M40,274 L324.9,274 A4.5,4.5 0 0 1 333.9,274 L352.9,274 A4.5,4.5 0 0 1 361.9,274 L411.4,274"/>
<path d="M329.4,296 L352.9,296 A4.5,4.5 0 0 1 361.9,296 L411.4,296"/>
<line x1="463.4" y1="285" x2="497.4" y2="285"/>
<path d="M551.4,360 C573.4,360 599.4,376.5 611.4,393 C599.4,409.5 573.4,426 551.4,426 Q565.4,393 551.4,360 Z"/>
<path d="M357.4,382 L492.9,382 A4.5,4.5 0 0 1 501.9,382 L557.6,382"/>
<line x1="497.4" y1="404" x2="557.6" y2="404"/>
<line x1="611.4" y1="393" x2="637.4" y2="393"/>
<line x1="637.4" y1="393" x2="693.4" y2="393"/>
<line x1="40" y1="36" x2="40" y2="274"/>
<line x1="89" y1="36" x2="89" y2="166"/>
<line x1="138" y1="36" x2="138" y2="188"/>
<line x1="329.4" y1="88" x2="329.4" y2="296"/>
<line x1="357.4" y1="177" x2="357.4" y2="382"/>
<line x1="497.4" y1="285" x2="497.4" y2="404"/>
<circle cx="138" cy="88" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="89" cy="166" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="138" cy="188" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="40" cy="274" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="329.4" cy="296" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="357.4" cy="382" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="497.4" cy="404" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="329.4" cy="88" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="357.4" cy="177" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="497.4" cy="285" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="263" y="81" text-anchor="start" font-size="13">NotSel</text>
<text x="283" y="170" text-anchor="start" font-size="13">P</text>
<text x="471.4" y="278" text-anchor="start" font-size="13">Q</text>
<text x="701.4" y="399" text-anchor="start">Out</text>
<text x="40" y="28" text-anchor="middle" font-size="16">In0</text>
<text x="89" y="28" text-anchor="middle" font-size="16">In1</text>
<text x="138" y="28" text-anchor="middle" font-size="16">Sel</text>
</g>
</svg>
</div>

$\mathbf{Sol}^{n}$

- $\mathit{NotSel} = \overline{\mathit{Sel}}$
- $P = \mathit{In1}\,\mathit{Sel}$
- $Q = \mathit{In0}\,\mathit{NotSel}$
- $\mathit{Out} = P + Q$

$\mathbf{Ans}\quad \text{โค้ดต่อไปนี้}$

```verilog
module Mux2to1 (Out, In0, In1, Sel);
output Out;
input In0, In1, Sel;
wire NotSel, P, Q;
not (NotSel, Sel);
and (P, In1, Sel);
and (Q, In0, NotSel);
or (Out, P, Q);
endmodule
```

### ข้อ 4  โมดูล Mux2to1 ต่อไปนี้ทำหน้าที่อะไร จงเขียนวงจร ตารางความจริง และสมการของเอาต์พุต {part=a; case=c2; style=flow}

```verilog
module Mux2to1 (Out, In0, In1, Sel);
output Out;
input In0, In1, Sel;

assign Out = Sel ? In1 : In0;
endmodule
```

$\mathbf{Sol}^{n}$

- `assign Out = Sel ? In1 : In0` : $\mathit{Out} = \mathit{Sel}\,\mathit{In1} + \overline{\mathit{Sel}}\,\mathit{In0}$

$\mathbf{Ans}\quad \begin{aligned}\mathit{Out} &= \mathit{Sel}\,\mathit{In1} + \overline{\mathit{Sel}}\,\mathit{In0}\end{aligned}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="753" height="476" viewBox="0 0 753 476" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<polygon points="223,76 223,100 245,88"/>
<circle cx="250" cy="88" r="5"/>
<line x1="138" y1="88" x2="223" y2="88"/>
<path d="M223,144 H249 A26,33 0 0 1 249,210 H223 Z"/>
<path d="M89,166 L133.5,166 A4.5,4.5 0 0 1 142.5,166 L223,166"/>
<line x1="138" y1="188" x2="223" y2="188"/>
<line x1="255" y1="88" x2="301" y2="88"/>
<path d="M275,177 L296.5,177 A4.5,4.5 0 0 1 305.5,177 L329,177"/>
<path d="M383,252 H409 A26,33 0 0 1 409,318 H383 Z"/>
<path d="M40,274 L296.5,274 A4.5,4.5 0 0 1 305.5,274 L324.5,274 A4.5,4.5 0 0 1 333.5,274 L383,274"/>
<path d="M301,296 L324.5,296 A4.5,4.5 0 0 1 333.5,296 L383,296"/>
<line x1="435" y1="285" x2="461" y2="285"/>
<path d="M515,360 C537,360 563,376.5 575,393 C563,409.5 537,426 515,426 Q529,393 515,360 Z"/>
<path d="M329,382 L456.5,382 A4.5,4.5 0 0 1 465.5,382 L521.2,382"/>
<line x1="461" y1="404" x2="521.2" y2="404"/>
<line x1="575" y1="393" x2="601" y2="393"/>
<line x1="601" y1="393" x2="657" y2="393"/>
<line x1="40" y1="36" x2="40" y2="274"/>
<line x1="89" y1="36" x2="89" y2="166"/>
<line x1="138" y1="36" x2="138" y2="188"/>
<line x1="301" y1="88" x2="301" y2="296"/>
<line x1="329" y1="177" x2="329" y2="382"/>
<line x1="461" y1="285" x2="461" y2="404"/>
<circle cx="138" cy="88" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="89" cy="166" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="138" cy="188" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="40" cy="274" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="301" cy="296" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="329" cy="382" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="461" cy="404" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="301" cy="88" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="329" cy="177" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="461" cy="285" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="665" y="399" text-anchor="start">Out</text>
<text x="40" y="28" text-anchor="middle" font-size="16">In0</text>
<text x="89" y="28" text-anchor="middle" font-size="16">In1</text>
<text x="138" y="28" text-anchor="middle" font-size="16">Sel</text>
</g>
</svg>
</div>

### ข้อ 4  จงเขียนโมดูล Verilog แบบ Dataflow ของวงจรในรูป ($\mathit{Out} = \mathit{Sel}\,\mathit{In1} + \overline{\mathit{Sel}}\,\mathit{In0}$) {part=b; case=c2; style=flow}

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="789" height="476" viewBox="0 0 789 476" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<polygon points="223,76 223,100 245,88"/>
<circle cx="250" cy="88" r="5"/>
<line x1="138" y1="88" x2="223" y2="88"/>
<path d="M223,144 H249 A26,33 0 0 1 249,210 H223 Z"/>
<path d="M89,166 L133.5,166 A4.5,4.5 0 0 1 142.5,166 L223,166"/>
<line x1="138" y1="188" x2="223" y2="188"/>
<line x1="255" y1="88" x2="329.4" y2="88"/>
<path d="M275,177 L324.9,177 A4.5,4.5 0 0 1 333.9,177 L357.4,177"/>
<path d="M411.4,252 H437.4 A26,33 0 0 1 437.4,318 H411.4 Z"/>
<path d="M40,274 L324.9,274 A4.5,4.5 0 0 1 333.9,274 L352.9,274 A4.5,4.5 0 0 1 361.9,274 L411.4,274"/>
<path d="M329.4,296 L352.9,296 A4.5,4.5 0 0 1 361.9,296 L411.4,296"/>
<line x1="463.4" y1="285" x2="497.4" y2="285"/>
<path d="M551.4,360 C573.4,360 599.4,376.5 611.4,393 C599.4,409.5 573.4,426 551.4,426 Q565.4,393 551.4,360 Z"/>
<path d="M357.4,382 L492.9,382 A4.5,4.5 0 0 1 501.9,382 L557.6,382"/>
<line x1="497.4" y1="404" x2="557.6" y2="404"/>
<line x1="611.4" y1="393" x2="637.4" y2="393"/>
<line x1="637.4" y1="393" x2="693.4" y2="393"/>
<line x1="40" y1="36" x2="40" y2="274"/>
<line x1="89" y1="36" x2="89" y2="166"/>
<line x1="138" y1="36" x2="138" y2="188"/>
<line x1="329.4" y1="88" x2="329.4" y2="296"/>
<line x1="357.4" y1="177" x2="357.4" y2="382"/>
<line x1="497.4" y1="285" x2="497.4" y2="404"/>
<circle cx="138" cy="88" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="89" cy="166" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="138" cy="188" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="40" cy="274" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="329.4" cy="296" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="357.4" cy="382" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="497.4" cy="404" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="329.4" cy="88" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="357.4" cy="177" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="497.4" cy="285" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="263" y="81" text-anchor="start" font-size="13">NotSel</text>
<text x="283" y="170" text-anchor="start" font-size="13">P</text>
<text x="471.4" y="278" text-anchor="start" font-size="13">Q</text>
<text x="701.4" y="399" text-anchor="start">Out</text>
<text x="40" y="28" text-anchor="middle" font-size="16">In0</text>
<text x="89" y="28" text-anchor="middle" font-size="16">In1</text>
<text x="138" y="28" text-anchor="middle" font-size="16">Sel</text>
</g>
</svg>
</div>

$\mathbf{Sol}^{n}$

- $\mathit{Out} = \mathit{Sel}\,\mathit{In1} + \overline{\mathit{Sel}}\,\mathit{In0}$

$\mathbf{Ans}\quad \text{โค้ดต่อไปนี้}$

```verilog
module Mux2to1 (Out, In0, In1, Sel);
output Out;
input In0, In1, Sel;

assign Out = Sel ? In1 : In0;
endmodule
```

### ข้อ 4  โมดูล mux_4_to_1 ต่อไปนี้ทำหน้าที่อะไร จงเขียนวงจร ตารางความจริง และสมการของเอาต์พุต {part=a; case=c3; style=struct}

```verilog
module mux_4_to_1 (Out, In0, In1, In2, In3, Sel1, Sel0);
output Out;
input In0, In1, In2, In3, Sel0, Sel1;

wire NotSel0, NotSel1;
wire Y0, Y1, Y2, Y3;

not (NotSel0, Sel0);
not (NotSel1, Sel1);
and (Y0, In0, NotSel1, NotSel0);
and (Y1, In1, NotSel1, Sel0);
and (Y2, In2, Sel1, NotSel0);
and (Y3, In3, Sel1, Sel0);
or (Out, Y0, Y1, Y2, Y3);
endmodule
```

$\mathbf{Sol}^{n}$

- `not (NotSel0, Sel0)` : $\mathit{NotSel0} = \overline{\mathit{Sel0}}$
- `not (NotSel1, Sel1)` : $\mathit{NotSel1} = \overline{\mathit{Sel1}}$
- `and (Y0, In0, NotSel1, NotSel0)` : $\mathit{Y0} = \mathit{In0}\,\mathit{NotSel1}\,\mathit{NotSel0}$
- `and (Y1, In1, NotSel1, Sel0)` : $\mathit{Y1} = \mathit{In1}\,\mathit{NotSel1}\,\mathit{Sel0}$
- `and (Y2, In2, Sel1, NotSel0)` : $\mathit{Y2} = \mathit{In2}\,\mathit{Sel1}\,\mathit{NotSel0}$
- `and (Y3, In3, Sel1, Sel0)` : $\mathit{Y3} = \mathit{In3}\,\mathit{Sel1}\,\mathit{Sel0}$
- `or (Out, Y0, Y1, Y2, Y3)` : $\mathit{Out} = \mathit{Y0} + \mathit{Y1} + \mathit{Y2} + \mathit{Y3}$

$\mathbf{Ans}\quad \begin{aligned}\mathit{Out} &= \overline{\mathit{Sel1}}\,\overline{\mathit{Sel0}}\,\mathit{In0} + \overline{\mathit{Sel1}}\,\mathit{Sel0}\,\mathit{In1} + \mathit{Sel1}\,\overline{\mathit{Sel0}}\,\mathit{In2} + \mathit{Sel1}\,\mathit{Sel0}\,\mathit{In3}\end{aligned}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="1086" height="894" viewBox="0 0 1086 894" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<polygon points="424,76 424,100 446,88"/>
<circle cx="451" cy="88" r="5"/>
<path d="M272,88 L325.5,88 A4.5,4.5 0 0 1 334.5,88 L424,88"/>
<polygon points="424,146 424,170 446,158"/>
<circle cx="451" cy="158" r="5"/>
<line x1="330" y1="158" x2="424" y2="158"/>
<path d="M424,214 H450 A26,44 0 0 1 450,302 H424 Z"/>
<path d="M214,236 L267.5,236 A4.5,4.5 0 0 1 276.5,236 L325.5,236 A4.5,4.5 0 0 1 334.5,236 L424,236"/>
<line x1="330" y1="258" x2="424" y2="258"/>
<path d="M272,280 L325.5,280 A4.5,4.5 0 0 1 334.5,280 L424,280"/>
<line x1="456" y1="88" x2="536.2" y2="88"/>
<path d="M456,158 L531.7,158 A4.5,4.5 0 0 1 540.7,158 L564.2,158"/>
<path d="M476,258 L531.7,258 A4.5,4.5 0 0 1 540.7,258 L559.7,258 A4.5,4.5 0 0 1 568.7,258 L592.2,258"/>
<path d="M646.2,344 H672.2 A26,44 0 0 1 672.2,432 H646.2 Z"/>
<path d="M40,366 L93.5,366 A4.5,4.5 0 0 1 102.5,366 L151.5,366 A4.5,4.5 0 0 1 160.5,366 L267.5,366 A4.5,4.5 0 0 1 276.5,366 L325.5,366 A4.5,4.5 0 0 1 334.5,366 L531.7,366 A4.5,4.5 0 0 1 540.7,366 L559.7,366 A4.5,4.5 0 0 1 568.7,366 L587.7,366 A4.5,4.5 0 0 1 596.7,366 L646.2,366"/>
<path d="M564.2,388 L587.7,388 A4.5,4.5 0 0 1 596.7,388 L646.2,388"/>
<path d="M536.2,410 L559.7,410 A4.5,4.5 0 0 1 568.7,410 L587.7,410 A4.5,4.5 0 0 1 596.7,410 L646.2,410"/>
<path d="M646.2,474 H672.2 A26,44 0 0 1 672.2,562 H646.2 Z"/>
<path d="M98,496 L151.5,496 A4.5,4.5 0 0 1 160.5,496 L267.5,496 A4.5,4.5 0 0 1 276.5,496 L325.5,496 A4.5,4.5 0 0 1 334.5,496 L531.7,496 A4.5,4.5 0 0 1 540.7,496 L559.7,496 A4.5,4.5 0 0 1 568.7,496 L587.7,496 A4.5,4.5 0 0 1 596.7,496 L646.2,496"/>
<path d="M564.2,518 L587.7,518 A4.5,4.5 0 0 1 596.7,518 L646.2,518"/>
<path d="M272,540 L325.5,540 A4.5,4.5 0 0 1 334.5,540 L531.7,540 A4.5,4.5 0 0 1 540.7,540 L587.7,540 A4.5,4.5 0 0 1 596.7,540 L646.2,540"/>
<path d="M646.2,604 H672.2 A26,44 0 0 1 672.2,692 H646.2 Z"/>
<path d="M156,626 L325.5,626 A4.5,4.5 0 0 1 334.5,626 L531.7,626 A4.5,4.5 0 0 1 540.7,626 L587.7,626 A4.5,4.5 0 0 1 596.7,626 L646.2,626"/>
<path d="M330,648 L531.7,648 A4.5,4.5 0 0 1 540.7,648 L587.7,648 A4.5,4.5 0 0 1 596.7,648 L646.2,648"/>
<path d="M536.2,670 L587.7,670 A4.5,4.5 0 0 1 596.7,670 L646.2,670"/>
<line x1="698.2" y1="388" x2="738.1" y2="388"/>
<path d="M698.2,518 L733.6,518 A4.5,4.5 0 0 1 742.6,518 L766.1,518"/>
<path d="M698.2,648 L733.6,648 A4.5,4.5 0 0 1 742.6,648 L761.6,648 A4.5,4.5 0 0 1 770.6,648 L794.1,648"/>
<path d="M848.1,734 C870.1,734 896.1,761.5 908.1,789 C896.1,816.5 870.1,844 848.1,844 Q862.1,789 848.1,734 Z"/>
<path d="M738.1,756 L761.6,756 A4.5,4.5 0 0 1 770.6,756 L789.6,756 A4.5,4.5 0 0 1 798.6,756 L852.6,756"/>
<path d="M766.1,778 L789.6,778 A4.5,4.5 0 0 1 798.6,778 L854.8,778"/>
<line x1="794.1" y1="800" x2="854.8" y2="800"/>
<line x1="592.2" y1="822" x2="852.6" y2="822"/>
<line x1="908.1" y1="789" x2="934.1" y2="789"/>
<line x1="934.1" y1="789" x2="990.1" y2="789"/>
<line x1="40" y1="36" x2="40" y2="366"/>
<line x1="98" y1="36" x2="98" y2="496"/>
<line x1="156" y1="36" x2="156" y2="626"/>
<line x1="214" y1="36" x2="214" y2="236"/>
<line x1="272" y1="36" x2="272" y2="540"/>
<line x1="330" y1="36" x2="330" y2="648"/>
<line x1="536.2" y1="88" x2="536.2" y2="670"/>
<line x1="564.2" y1="158" x2="564.2" y2="518"/>
<line x1="592.2" y1="258" x2="592.2" y2="822"/>
<line x1="738.1" y1="388" x2="738.1" y2="756"/>
<line x1="766.1" y1="518" x2="766.1" y2="778"/>
<line x1="794.1" y1="648" x2="794.1" y2="800"/>
<circle cx="272" cy="88" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="330" cy="158" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="214" cy="236" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="330" cy="258" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="272" cy="280" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="40" cy="366" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="564.2" cy="388" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="536.2" cy="410" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="98" cy="496" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="564.2" cy="518" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="272" cy="540" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="156" cy="626" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="330" cy="648" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="536.2" cy="670" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="738.1" cy="756" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="766.1" cy="778" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="794.1" cy="800" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="592.2" cy="822" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="536.2" cy="88" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="564.2" cy="158" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="592.2" cy="258" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="738.1" cy="388" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="766.1" cy="518" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="794.1" cy="648" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="464" y="81" text-anchor="start" font-size="13">NotSel0</text>
<text x="464" y="151" text-anchor="start" font-size="13">NotSel1</text>
<text x="484" y="251" text-anchor="start" font-size="13">Y<tspan dy="4" font-size="9">3</tspan></text>
<text x="706.2" y="381" text-anchor="start" font-size="13">Y<tspan dy="4" font-size="9">0</tspan></text>
<text x="706.2" y="511" text-anchor="start" font-size="13">Y<tspan dy="4" font-size="9">1</tspan></text>
<text x="706.2" y="641" text-anchor="start" font-size="13">Y<tspan dy="4" font-size="9">2</tspan></text>
<text x="998.1" y="795" text-anchor="start">Out</text>
<text x="40" y="28" text-anchor="middle" font-size="16">In0</text>
<text x="98" y="28" text-anchor="middle" font-size="16">In1</text>
<text x="156" y="28" text-anchor="middle" font-size="16">In2</text>
<text x="214" y="28" text-anchor="middle" font-size="16">In3</text>
<text x="272" y="28" text-anchor="middle" font-size="16">Sel0</text>
<text x="330" y="28" text-anchor="middle" font-size="16">Sel1</text>
</g>
</svg>
</div>

### ข้อ 4  จงเขียนโมดูล Verilog แบบ Structural ของวงจรในรูป ($\mathit{Out} = \overline{\mathit{Sel1}}\,\overline{\mathit{Sel0}}\,\mathit{In0} + \overline{\mathit{Sel1}}\,\mathit{Sel0}\,\mathit{In1} + \mathit{Sel1}\,\overline{\mathit{Sel0}}\,\mathit{In2} + \mathit{Sel1}\,\mathit{Sel0}\,\mathit{In3}$) {part=b; case=c3; style=struct}

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="1086" height="894" viewBox="0 0 1086 894" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<polygon points="424,76 424,100 446,88"/>
<circle cx="451" cy="88" r="5"/>
<path d="M272,88 L325.5,88 A4.5,4.5 0 0 1 334.5,88 L424,88"/>
<polygon points="424,146 424,170 446,158"/>
<circle cx="451" cy="158" r="5"/>
<line x1="330" y1="158" x2="424" y2="158"/>
<path d="M424,214 H450 A26,44 0 0 1 450,302 H424 Z"/>
<path d="M214,236 L267.5,236 A4.5,4.5 0 0 1 276.5,236 L325.5,236 A4.5,4.5 0 0 1 334.5,236 L424,236"/>
<line x1="330" y1="258" x2="424" y2="258"/>
<path d="M272,280 L325.5,280 A4.5,4.5 0 0 1 334.5,280 L424,280"/>
<line x1="456" y1="88" x2="536.2" y2="88"/>
<path d="M456,158 L531.7,158 A4.5,4.5 0 0 1 540.7,158 L564.2,158"/>
<path d="M476,258 L531.7,258 A4.5,4.5 0 0 1 540.7,258 L559.7,258 A4.5,4.5 0 0 1 568.7,258 L592.2,258"/>
<path d="M646.2,344 H672.2 A26,44 0 0 1 672.2,432 H646.2 Z"/>
<path d="M40,366 L93.5,366 A4.5,4.5 0 0 1 102.5,366 L151.5,366 A4.5,4.5 0 0 1 160.5,366 L267.5,366 A4.5,4.5 0 0 1 276.5,366 L325.5,366 A4.5,4.5 0 0 1 334.5,366 L531.7,366 A4.5,4.5 0 0 1 540.7,366 L559.7,366 A4.5,4.5 0 0 1 568.7,366 L587.7,366 A4.5,4.5 0 0 1 596.7,366 L646.2,366"/>
<path d="M564.2,388 L587.7,388 A4.5,4.5 0 0 1 596.7,388 L646.2,388"/>
<path d="M536.2,410 L559.7,410 A4.5,4.5 0 0 1 568.7,410 L587.7,410 A4.5,4.5 0 0 1 596.7,410 L646.2,410"/>
<path d="M646.2,474 H672.2 A26,44 0 0 1 672.2,562 H646.2 Z"/>
<path d="M98,496 L151.5,496 A4.5,4.5 0 0 1 160.5,496 L267.5,496 A4.5,4.5 0 0 1 276.5,496 L325.5,496 A4.5,4.5 0 0 1 334.5,496 L531.7,496 A4.5,4.5 0 0 1 540.7,496 L559.7,496 A4.5,4.5 0 0 1 568.7,496 L587.7,496 A4.5,4.5 0 0 1 596.7,496 L646.2,496"/>
<path d="M564.2,518 L587.7,518 A4.5,4.5 0 0 1 596.7,518 L646.2,518"/>
<path d="M272,540 L325.5,540 A4.5,4.5 0 0 1 334.5,540 L531.7,540 A4.5,4.5 0 0 1 540.7,540 L587.7,540 A4.5,4.5 0 0 1 596.7,540 L646.2,540"/>
<path d="M646.2,604 H672.2 A26,44 0 0 1 672.2,692 H646.2 Z"/>
<path d="M156,626 L325.5,626 A4.5,4.5 0 0 1 334.5,626 L531.7,626 A4.5,4.5 0 0 1 540.7,626 L587.7,626 A4.5,4.5 0 0 1 596.7,626 L646.2,626"/>
<path d="M330,648 L531.7,648 A4.5,4.5 0 0 1 540.7,648 L587.7,648 A4.5,4.5 0 0 1 596.7,648 L646.2,648"/>
<path d="M536.2,670 L587.7,670 A4.5,4.5 0 0 1 596.7,670 L646.2,670"/>
<line x1="698.2" y1="388" x2="738.1" y2="388"/>
<path d="M698.2,518 L733.6,518 A4.5,4.5 0 0 1 742.6,518 L766.1,518"/>
<path d="M698.2,648 L733.6,648 A4.5,4.5 0 0 1 742.6,648 L761.6,648 A4.5,4.5 0 0 1 770.6,648 L794.1,648"/>
<path d="M848.1,734 C870.1,734 896.1,761.5 908.1,789 C896.1,816.5 870.1,844 848.1,844 Q862.1,789 848.1,734 Z"/>
<path d="M738.1,756 L761.6,756 A4.5,4.5 0 0 1 770.6,756 L789.6,756 A4.5,4.5 0 0 1 798.6,756 L852.6,756"/>
<path d="M766.1,778 L789.6,778 A4.5,4.5 0 0 1 798.6,778 L854.8,778"/>
<line x1="794.1" y1="800" x2="854.8" y2="800"/>
<line x1="592.2" y1="822" x2="852.6" y2="822"/>
<line x1="908.1" y1="789" x2="934.1" y2="789"/>
<line x1="934.1" y1="789" x2="990.1" y2="789"/>
<line x1="40" y1="36" x2="40" y2="366"/>
<line x1="98" y1="36" x2="98" y2="496"/>
<line x1="156" y1="36" x2="156" y2="626"/>
<line x1="214" y1="36" x2="214" y2="236"/>
<line x1="272" y1="36" x2="272" y2="540"/>
<line x1="330" y1="36" x2="330" y2="648"/>
<line x1="536.2" y1="88" x2="536.2" y2="670"/>
<line x1="564.2" y1="158" x2="564.2" y2="518"/>
<line x1="592.2" y1="258" x2="592.2" y2="822"/>
<line x1="738.1" y1="388" x2="738.1" y2="756"/>
<line x1="766.1" y1="518" x2="766.1" y2="778"/>
<line x1="794.1" y1="648" x2="794.1" y2="800"/>
<circle cx="272" cy="88" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="330" cy="158" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="214" cy="236" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="330" cy="258" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="272" cy="280" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="40" cy="366" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="564.2" cy="388" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="536.2" cy="410" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="98" cy="496" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="564.2" cy="518" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="272" cy="540" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="156" cy="626" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="330" cy="648" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="536.2" cy="670" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="738.1" cy="756" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="766.1" cy="778" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="794.1" cy="800" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="592.2" cy="822" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="536.2" cy="88" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="564.2" cy="158" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="592.2" cy="258" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="738.1" cy="388" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="766.1" cy="518" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="794.1" cy="648" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="464" y="81" text-anchor="start" font-size="13">NotSel0</text>
<text x="464" y="151" text-anchor="start" font-size="13">NotSel1</text>
<text x="484" y="251" text-anchor="start" font-size="13">Y<tspan dy="4" font-size="9">3</tspan></text>
<text x="706.2" y="381" text-anchor="start" font-size="13">Y<tspan dy="4" font-size="9">0</tspan></text>
<text x="706.2" y="511" text-anchor="start" font-size="13">Y<tspan dy="4" font-size="9">1</tspan></text>
<text x="706.2" y="641" text-anchor="start" font-size="13">Y<tspan dy="4" font-size="9">2</tspan></text>
<text x="998.1" y="795" text-anchor="start">Out</text>
<text x="40" y="28" text-anchor="middle" font-size="16">In0</text>
<text x="98" y="28" text-anchor="middle" font-size="16">In1</text>
<text x="156" y="28" text-anchor="middle" font-size="16">In2</text>
<text x="214" y="28" text-anchor="middle" font-size="16">In3</text>
<text x="272" y="28" text-anchor="middle" font-size="16">Sel0</text>
<text x="330" y="28" text-anchor="middle" font-size="16">Sel1</text>
</g>
</svg>
</div>

$\mathbf{Sol}^{n}$

- $\mathit{NotSel0} = \overline{\mathit{Sel0}}$
- $\mathit{NotSel1} = \overline{\mathit{Sel1}}$
- $\mathit{Y0} = \mathit{In0}\,\mathit{NotSel1}\,\mathit{NotSel0}$
- $\mathit{Y1} = \mathit{In1}\,\mathit{NotSel1}\,\mathit{Sel0}$
- $\mathit{Y2} = \mathit{In2}\,\mathit{Sel1}\,\mathit{NotSel0}$
- $\mathit{Y3} = \mathit{In3}\,\mathit{Sel1}\,\mathit{Sel0}$
- $\mathit{Out} = \mathit{Y0} + \mathit{Y1} + \mathit{Y2} + \mathit{Y3}$

$\mathbf{Ans}\quad \text{โค้ดต่อไปนี้}$

```verilog
module mux_4_to_1 (Out, In0, In1, In2, In3, Sel1, Sel0);
output Out;
input In0, In1, In2, In3, Sel0, Sel1;

wire NotSel0, NotSel1;
wire Y0, Y1, Y2, Y3;

not (NotSel0, Sel0);
not (NotSel1, Sel1);
and (Y0, In0, NotSel1, NotSel0);
and (Y1, In1, NotSel1, Sel0);
and (Y2, In2, Sel1, NotSel0);
and (Y3, In3, Sel1, Sel0);
or (Out, Y0, Y1, Y2, Y3);
endmodule
```

### ข้อ 4  โมดูล mux_4_to_1 ต่อไปนี้ทำหน้าที่อะไร จงเขียนวงจร ตารางความจริง และสมการของเอาต์พุต {part=a; case=c3; style=flow}

```verilog
module mux_4_to_1 (Out, In0, In1, In2, In3, Sel1, Sel0);
output Out;
input In0, In1, In2, In3, Sel0, Sel1;

assign Out = (~Sel1 & ~Sel0 & In0) | (~Sel1 & Sel0 & In1)
           | (Sel1 & ~Sel0 & In2) | (Sel1 & Sel0 & In3);
endmodule
```

$\mathbf{Sol}^{n}$

- `assign Out = (~Sel1 & ~Sel0 & In0) | (~Sel1 & Sel0 & In1)` : $\mathit{Out} = \overline{\mathit{Sel1}}\,\overline{\mathit{Sel0}}\,\mathit{In0} + \overline{\mathit{Sel1}}\,\mathit{Sel0}\,\mathit{In1} + \mathit{Sel1}\,\overline{\mathit{Sel0}}\,\mathit{In2} + \mathit{Sel1}\,\mathit{Sel0}\,\mathit{In3}$

$\mathbf{Ans}\quad \begin{aligned}\mathit{Out} &= \overline{\mathit{Sel1}}\,\overline{\mathit{Sel0}}\,\mathit{In0} + \overline{\mathit{Sel1}}\,\mathit{Sel0}\,\mathit{In1} + \mathit{Sel1}\,\overline{\mathit{Sel0}}\,\mathit{In2} + \mathit{Sel1}\,\mathit{Sel0}\,\mathit{In3}\end{aligned}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="1038" height="894" viewBox="0 0 1038 894" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<polygon points="424,76 424,100 446,88"/>
<circle cx="451" cy="88" r="5"/>
<line x1="330" y1="88" x2="424" y2="88"/>
<polygon points="424,146 424,170 446,158"/>
<circle cx="451" cy="158" r="5"/>
<path d="M272,158 L325.5,158 A4.5,4.5 0 0 1 334.5,158 L424,158"/>
<path d="M424,214 H450 A26,44 0 0 1 450,302 H424 Z"/>
<line x1="330" y1="236" x2="424" y2="236"/>
<path d="M272,258 L325.5,258 A4.5,4.5 0 0 1 334.5,258 L424,258"/>
<path d="M214,280 L267.5,280 A4.5,4.5 0 0 1 276.5,280 L325.5,280 A4.5,4.5 0 0 1 334.5,280 L424,280"/>
<line x1="456" y1="88" x2="502" y2="88"/>
<path d="M456,158 L497.5,158 A4.5,4.5 0 0 1 506.5,158 L530,158"/>
<path d="M476,258 L497.5,258 A4.5,4.5 0 0 1 506.5,258 L525.5,258 A4.5,4.5 0 0 1 534.5,258 L558,258"/>
<path d="M612,344 H638 A26,44 0 0 1 638,432 H612 Z"/>
<path d="M502,366 L525.5,366 A4.5,4.5 0 0 1 534.5,366 L553.5,366 A4.5,4.5 0 0 1 562.5,366 L612,366"/>
<path d="M530,388 L553.5,388 A4.5,4.5 0 0 1 562.5,388 L612,388"/>
<path d="M40,410 L93.5,410 A4.5,4.5 0 0 1 102.5,410 L151.5,410 A4.5,4.5 0 0 1 160.5,410 L267.5,410 A4.5,4.5 0 0 1 276.5,410 L325.5,410 A4.5,4.5 0 0 1 334.5,410 L497.5,410 A4.5,4.5 0 0 1 506.5,410 L525.5,410 A4.5,4.5 0 0 1 534.5,410 L553.5,410 A4.5,4.5 0 0 1 562.5,410 L612,410"/>
<path d="M612,474 H638 A26,44 0 0 1 638,562 H612 Z"/>
<path d="M502,496 L525.5,496 A4.5,4.5 0 0 1 534.5,496 L553.5,496 A4.5,4.5 0 0 1 562.5,496 L612,496"/>
<path d="M272,518 L325.5,518 A4.5,4.5 0 0 1 334.5,518 L525.5,518 A4.5,4.5 0 0 1 534.5,518 L553.5,518 A4.5,4.5 0 0 1 562.5,518 L612,518"/>
<path d="M98,540 L151.5,540 A4.5,4.5 0 0 1 160.5,540 L325.5,540 A4.5,4.5 0 0 1 334.5,540 L525.5,540 A4.5,4.5 0 0 1 534.5,540 L553.5,540 A4.5,4.5 0 0 1 562.5,540 L612,540"/>
<path d="M612,604 H638 A26,44 0 0 1 638,692 H612 Z"/>
<path d="M330,626 L525.5,626 A4.5,4.5 0 0 1 534.5,626 L553.5,626 A4.5,4.5 0 0 1 562.5,626 L612,626"/>
<path d="M530,648 L553.5,648 A4.5,4.5 0 0 1 562.5,648 L612,648"/>
<path d="M156,670 L553.5,670 A4.5,4.5 0 0 1 562.5,670 L612,670"/>
<line x1="664" y1="388" x2="690" y2="388"/>
<path d="M664,518 L685.5,518 A4.5,4.5 0 0 1 694.5,518 L718,518"/>
<path d="M664,648 L685.5,648 A4.5,4.5 0 0 1 694.5,648 L713.5,648 A4.5,4.5 0 0 1 722.5,648 L746,648"/>
<path d="M800,734 C822,734 848,761.5 860,789 C848,816.5 822,844 800,844 Q814,789 800,734 Z"/>
<path d="M690,756 L713.5,756 A4.5,4.5 0 0 1 722.5,756 L741.5,756 A4.5,4.5 0 0 1 750.5,756 L804.5,756"/>
<path d="M718,778 L741.5,778 A4.5,4.5 0 0 1 750.5,778 L806.7,778"/>
<line x1="746" y1="800" x2="806.7" y2="800"/>
<line x1="558" y1="822" x2="804.5" y2="822"/>
<line x1="860" y1="789" x2="886" y2="789"/>
<line x1="886" y1="789" x2="942" y2="789"/>
<line x1="40" y1="36" x2="40" y2="410"/>
<line x1="98" y1="36" x2="98" y2="540"/>
<line x1="156" y1="36" x2="156" y2="670"/>
<line x1="214" y1="36" x2="214" y2="280"/>
<line x1="272" y1="36" x2="272" y2="518"/>
<line x1="330" y1="36" x2="330" y2="626"/>
<line x1="502" y1="88" x2="502" y2="496"/>
<line x1="530" y1="158" x2="530" y2="648"/>
<line x1="558" y1="258" x2="558" y2="822"/>
<line x1="690" y1="388" x2="690" y2="756"/>
<line x1="718" y1="518" x2="718" y2="778"/>
<line x1="746" y1="648" x2="746" y2="800"/>
<circle cx="330" cy="88" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="272" cy="158" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="330" cy="236" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="272" cy="258" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="214" cy="280" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="502" cy="366" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="530" cy="388" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="40" cy="410" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="502" cy="496" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="272" cy="518" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="98" cy="540" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="330" cy="626" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="530" cy="648" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="156" cy="670" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="690" cy="756" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="718" cy="778" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="746" cy="800" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="558" cy="822" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="502" cy="88" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="530" cy="158" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="558" cy="258" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="690" cy="388" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="718" cy="518" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="746" cy="648" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="950" y="795" text-anchor="start">Out</text>
<text x="40" y="28" text-anchor="middle" font-size="16">In0</text>
<text x="98" y="28" text-anchor="middle" font-size="16">In1</text>
<text x="156" y="28" text-anchor="middle" font-size="16">In2</text>
<text x="214" y="28" text-anchor="middle" font-size="16">In3</text>
<text x="272" y="28" text-anchor="middle" font-size="16">Sel0</text>
<text x="330" y="28" text-anchor="middle" font-size="16">Sel1</text>
</g>
</svg>
</div>

### ข้อ 4  จงเขียนโมดูล Verilog แบบ Dataflow ของวงจรในรูป ($\mathit{Out} = \overline{\mathit{Sel1}}\,\overline{\mathit{Sel0}}\,\mathit{In0} + \overline{\mathit{Sel1}}\,\mathit{Sel0}\,\mathit{In1} + \mathit{Sel1}\,\overline{\mathit{Sel0}}\,\mathit{In2} + \mathit{Sel1}\,\mathit{Sel0}\,\mathit{In3}$) {part=b; case=c3; style=flow}

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="1086" height="894" viewBox="0 0 1086 894" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<polygon points="424,76 424,100 446,88"/>
<circle cx="451" cy="88" r="5"/>
<path d="M272,88 L325.5,88 A4.5,4.5 0 0 1 334.5,88 L424,88"/>
<polygon points="424,146 424,170 446,158"/>
<circle cx="451" cy="158" r="5"/>
<line x1="330" y1="158" x2="424" y2="158"/>
<path d="M424,214 H450 A26,44 0 0 1 450,302 H424 Z"/>
<path d="M214,236 L267.5,236 A4.5,4.5 0 0 1 276.5,236 L325.5,236 A4.5,4.5 0 0 1 334.5,236 L424,236"/>
<line x1="330" y1="258" x2="424" y2="258"/>
<path d="M272,280 L325.5,280 A4.5,4.5 0 0 1 334.5,280 L424,280"/>
<line x1="456" y1="88" x2="536.2" y2="88"/>
<path d="M456,158 L531.7,158 A4.5,4.5 0 0 1 540.7,158 L564.2,158"/>
<path d="M476,258 L531.7,258 A4.5,4.5 0 0 1 540.7,258 L559.7,258 A4.5,4.5 0 0 1 568.7,258 L592.2,258"/>
<path d="M646.2,344 H672.2 A26,44 0 0 1 672.2,432 H646.2 Z"/>
<path d="M40,366 L93.5,366 A4.5,4.5 0 0 1 102.5,366 L151.5,366 A4.5,4.5 0 0 1 160.5,366 L267.5,366 A4.5,4.5 0 0 1 276.5,366 L325.5,366 A4.5,4.5 0 0 1 334.5,366 L531.7,366 A4.5,4.5 0 0 1 540.7,366 L559.7,366 A4.5,4.5 0 0 1 568.7,366 L587.7,366 A4.5,4.5 0 0 1 596.7,366 L646.2,366"/>
<path d="M564.2,388 L587.7,388 A4.5,4.5 0 0 1 596.7,388 L646.2,388"/>
<path d="M536.2,410 L559.7,410 A4.5,4.5 0 0 1 568.7,410 L587.7,410 A4.5,4.5 0 0 1 596.7,410 L646.2,410"/>
<path d="M646.2,474 H672.2 A26,44 0 0 1 672.2,562 H646.2 Z"/>
<path d="M98,496 L151.5,496 A4.5,4.5 0 0 1 160.5,496 L267.5,496 A4.5,4.5 0 0 1 276.5,496 L325.5,496 A4.5,4.5 0 0 1 334.5,496 L531.7,496 A4.5,4.5 0 0 1 540.7,496 L559.7,496 A4.5,4.5 0 0 1 568.7,496 L587.7,496 A4.5,4.5 0 0 1 596.7,496 L646.2,496"/>
<path d="M564.2,518 L587.7,518 A4.5,4.5 0 0 1 596.7,518 L646.2,518"/>
<path d="M272,540 L325.5,540 A4.5,4.5 0 0 1 334.5,540 L531.7,540 A4.5,4.5 0 0 1 540.7,540 L587.7,540 A4.5,4.5 0 0 1 596.7,540 L646.2,540"/>
<path d="M646.2,604 H672.2 A26,44 0 0 1 672.2,692 H646.2 Z"/>
<path d="M156,626 L325.5,626 A4.5,4.5 0 0 1 334.5,626 L531.7,626 A4.5,4.5 0 0 1 540.7,626 L587.7,626 A4.5,4.5 0 0 1 596.7,626 L646.2,626"/>
<path d="M330,648 L531.7,648 A4.5,4.5 0 0 1 540.7,648 L587.7,648 A4.5,4.5 0 0 1 596.7,648 L646.2,648"/>
<path d="M536.2,670 L587.7,670 A4.5,4.5 0 0 1 596.7,670 L646.2,670"/>
<line x1="698.2" y1="388" x2="738.1" y2="388"/>
<path d="M698.2,518 L733.6,518 A4.5,4.5 0 0 1 742.6,518 L766.1,518"/>
<path d="M698.2,648 L733.6,648 A4.5,4.5 0 0 1 742.6,648 L761.6,648 A4.5,4.5 0 0 1 770.6,648 L794.1,648"/>
<path d="M848.1,734 C870.1,734 896.1,761.5 908.1,789 C896.1,816.5 870.1,844 848.1,844 Q862.1,789 848.1,734 Z"/>
<path d="M738.1,756 L761.6,756 A4.5,4.5 0 0 1 770.6,756 L789.6,756 A4.5,4.5 0 0 1 798.6,756 L852.6,756"/>
<path d="M766.1,778 L789.6,778 A4.5,4.5 0 0 1 798.6,778 L854.8,778"/>
<line x1="794.1" y1="800" x2="854.8" y2="800"/>
<line x1="592.2" y1="822" x2="852.6" y2="822"/>
<line x1="908.1" y1="789" x2="934.1" y2="789"/>
<line x1="934.1" y1="789" x2="990.1" y2="789"/>
<line x1="40" y1="36" x2="40" y2="366"/>
<line x1="98" y1="36" x2="98" y2="496"/>
<line x1="156" y1="36" x2="156" y2="626"/>
<line x1="214" y1="36" x2="214" y2="236"/>
<line x1="272" y1="36" x2="272" y2="540"/>
<line x1="330" y1="36" x2="330" y2="648"/>
<line x1="536.2" y1="88" x2="536.2" y2="670"/>
<line x1="564.2" y1="158" x2="564.2" y2="518"/>
<line x1="592.2" y1="258" x2="592.2" y2="822"/>
<line x1="738.1" y1="388" x2="738.1" y2="756"/>
<line x1="766.1" y1="518" x2="766.1" y2="778"/>
<line x1="794.1" y1="648" x2="794.1" y2="800"/>
<circle cx="272" cy="88" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="330" cy="158" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="214" cy="236" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="330" cy="258" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="272" cy="280" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="40" cy="366" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="564.2" cy="388" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="536.2" cy="410" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="98" cy="496" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="564.2" cy="518" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="272" cy="540" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="156" cy="626" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="330" cy="648" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="536.2" cy="670" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="738.1" cy="756" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="766.1" cy="778" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="794.1" cy="800" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="592.2" cy="822" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="536.2" cy="88" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="564.2" cy="158" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="592.2" cy="258" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="738.1" cy="388" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="766.1" cy="518" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="794.1" cy="648" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="464" y="81" text-anchor="start" font-size="13">NotSel0</text>
<text x="464" y="151" text-anchor="start" font-size="13">NotSel1</text>
<text x="484" y="251" text-anchor="start" font-size="13">Y<tspan dy="4" font-size="9">3</tspan></text>
<text x="706.2" y="381" text-anchor="start" font-size="13">Y<tspan dy="4" font-size="9">0</tspan></text>
<text x="706.2" y="511" text-anchor="start" font-size="13">Y<tspan dy="4" font-size="9">1</tspan></text>
<text x="706.2" y="641" text-anchor="start" font-size="13">Y<tspan dy="4" font-size="9">2</tspan></text>
<text x="998.1" y="795" text-anchor="start">Out</text>
<text x="40" y="28" text-anchor="middle" font-size="16">In0</text>
<text x="98" y="28" text-anchor="middle" font-size="16">In1</text>
<text x="156" y="28" text-anchor="middle" font-size="16">In2</text>
<text x="214" y="28" text-anchor="middle" font-size="16">In3</text>
<text x="272" y="28" text-anchor="middle" font-size="16">Sel0</text>
<text x="330" y="28" text-anchor="middle" font-size="16">Sel1</text>
</g>
</svg>
</div>

$\mathbf{Sol}^{n}$

- $\mathit{Out} = \overline{\mathit{Sel1}}\,\overline{\mathit{Sel0}}\,\mathit{In0} + \overline{\mathit{Sel1}}\,\mathit{Sel0}\,\mathit{In1} + \mathit{Sel1}\,\overline{\mathit{Sel0}}\,\mathit{In2} + \mathit{Sel1}\,\mathit{Sel0}\,\mathit{In3}$

$\mathbf{Ans}\quad \text{โค้ดต่อไปนี้}$

```verilog
module mux_4_to_1 (Out, In0, In1, In2, In3, Sel1, Sel0);
output Out;
input In0, In1, In2, In3, Sel0, Sel1;

assign Out = (~Sel1 & ~Sel0 & In0) | (~Sel1 & Sel0 & In1)
           | (Sel1 & ~Sel0 & In2) | (Sel1 & Sel0 & In3);
endmodule
```

### ข้อ 4  โมดูล Xor2 ต่อไปนี้ทำหน้าที่อะไร จงเขียนวงจร ตารางความจริง และสมการของเอาต์พุต {part=a; case=c4; style=struct}

```verilog
module Xor2 (Y, A, B);
output Y;
input A, B;
wire NA, NB, P, Q;
not (NA, A);
not (NB, B);
and (P, A, NB);
and (Q, NA, B);
or (Y, P, Q);
endmodule
```

$\mathbf{Sol}^{n}$

- `not (NA, A)` : $\mathit{NA} = \overline{A}$
- `not (NB, B)` : $\mathit{NB} = \overline{B}$
- `and (P, A, NB)` : $P = A\,\mathit{NB}$
- `and (Q, NA, B)` : $Q = \mathit{NA}\,B$
- `or (Y, P, Q)` : $Y = P + Q$

$\mathbf{Ans}\quad \begin{aligned}Y &= A\,\overline{B} + \overline{A}\,B\end{aligned}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="700" height="546" viewBox="0 0 700 546" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<polygon points="138,76 138,100 160,88"/>
<circle cx="165" cy="88" r="5"/>
<path d="M40,88 L66.5,88 A4.5,4.5 0 0 1 75.5,88 L138,88"/>
<polygon points="138,146 138,170 160,158"/>
<circle cx="165" cy="158" r="5"/>
<line x1="71" y1="158" x2="138" y2="158"/>
<line x1="170" y1="88" x2="212.1" y2="88"/>
<path d="M170,158 L207.6,158 A4.5,4.5 0 0 1 216.6,158 L240.1,158"/>
<path d="M294.1,214 H320.1 A26,33 0 0 1 320.1,280 H294.1 Z"/>
<path d="M40,236 L66.5,236 A4.5,4.5 0 0 1 75.5,236 L207.6,236 A4.5,4.5 0 0 1 216.6,236 L235.6,236 A4.5,4.5 0 0 1 244.6,236 L294.1,236"/>
<line x1="240.1" y1="258" x2="294.1" y2="258"/>
<path d="M294.1,322 H320.1 A26,33 0 0 1 320.1,388 H294.1 Z"/>
<line x1="212.1" y1="344" x2="294.1" y2="344"/>
<line x1="71" y1="366" x2="294.1" y2="366"/>
<line x1="346.1" y1="247" x2="380.2" y2="247"/>
<path d="M346.1,355 L375.7,355 A4.5,4.5 0 0 1 384.7,355 L408.2,355"/>
<path d="M462.2,430 C484.2,430 510.2,446.5 522.2,463 C510.2,479.5 484.2,496 462.2,496 Q476.2,463 462.2,430 Z"/>
<path d="M380.2,452 L403.7,452 A4.5,4.5 0 0 1 412.7,452 L468.4,452"/>
<line x1="408.2" y1="474" x2="468.4" y2="474"/>
<line x1="522.2" y1="463" x2="548.2" y2="463"/>
<line x1="548.2" y1="463" x2="604.2" y2="463"/>
<line x1="40" y1="36" x2="40" y2="236"/>
<line x1="71" y1="36" x2="71" y2="366"/>
<line x1="212.1" y1="88" x2="212.1" y2="344"/>
<line x1="240.1" y1="158" x2="240.1" y2="258"/>
<line x1="380.2" y1="247" x2="380.2" y2="452"/>
<line x1="408.2" y1="355" x2="408.2" y2="474"/>
<circle cx="40" cy="88" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="158" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="40" cy="236" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="240.1" cy="258" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="212.1" cy="344" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="366" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="380.2" cy="452" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="408.2" cy="474" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="212.1" cy="88" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="240.1" cy="158" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="380.2" cy="247" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="408.2" cy="355" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="178" y="81" text-anchor="start" font-size="13">NA</text>
<text x="178" y="151" text-anchor="start" font-size="13">NB</text>
<text x="354.1" y="240" text-anchor="start" font-size="13">P</text>
<text x="354.1" y="348" text-anchor="start" font-size="13">Q</text>
<text x="612.2" y="469" text-anchor="start">Y</text>
<text x="40" y="28" text-anchor="middle" font-size="16">A</text>
<text x="71" y="28" text-anchor="middle" font-size="16">B</text>
</g>
</svg>
</div>

### ข้อ 4  จงเขียนโมดูล Verilog แบบ Structural ของวงจรในรูป ($Y = A\,\overline{B} + \overline{A}\,B$) {part=b; case=c4; style=struct}

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="700" height="546" viewBox="0 0 700 546" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<polygon points="138,76 138,100 160,88"/>
<circle cx="165" cy="88" r="5"/>
<path d="M40,88 L66.5,88 A4.5,4.5 0 0 1 75.5,88 L138,88"/>
<polygon points="138,146 138,170 160,158"/>
<circle cx="165" cy="158" r="5"/>
<line x1="71" y1="158" x2="138" y2="158"/>
<line x1="170" y1="88" x2="212.1" y2="88"/>
<path d="M170,158 L207.6,158 A4.5,4.5 0 0 1 216.6,158 L240.1,158"/>
<path d="M294.1,214 H320.1 A26,33 0 0 1 320.1,280 H294.1 Z"/>
<path d="M40,236 L66.5,236 A4.5,4.5 0 0 1 75.5,236 L207.6,236 A4.5,4.5 0 0 1 216.6,236 L235.6,236 A4.5,4.5 0 0 1 244.6,236 L294.1,236"/>
<line x1="240.1" y1="258" x2="294.1" y2="258"/>
<path d="M294.1,322 H320.1 A26,33 0 0 1 320.1,388 H294.1 Z"/>
<line x1="212.1" y1="344" x2="294.1" y2="344"/>
<line x1="71" y1="366" x2="294.1" y2="366"/>
<line x1="346.1" y1="247" x2="380.2" y2="247"/>
<path d="M346.1,355 L375.7,355 A4.5,4.5 0 0 1 384.7,355 L408.2,355"/>
<path d="M462.2,430 C484.2,430 510.2,446.5 522.2,463 C510.2,479.5 484.2,496 462.2,496 Q476.2,463 462.2,430 Z"/>
<path d="M380.2,452 L403.7,452 A4.5,4.5 0 0 1 412.7,452 L468.4,452"/>
<line x1="408.2" y1="474" x2="468.4" y2="474"/>
<line x1="522.2" y1="463" x2="548.2" y2="463"/>
<line x1="548.2" y1="463" x2="604.2" y2="463"/>
<line x1="40" y1="36" x2="40" y2="236"/>
<line x1="71" y1="36" x2="71" y2="366"/>
<line x1="212.1" y1="88" x2="212.1" y2="344"/>
<line x1="240.1" y1="158" x2="240.1" y2="258"/>
<line x1="380.2" y1="247" x2="380.2" y2="452"/>
<line x1="408.2" y1="355" x2="408.2" y2="474"/>
<circle cx="40" cy="88" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="158" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="40" cy="236" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="240.1" cy="258" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="212.1" cy="344" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="366" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="380.2" cy="452" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="408.2" cy="474" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="212.1" cy="88" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="240.1" cy="158" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="380.2" cy="247" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="408.2" cy="355" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="178" y="81" text-anchor="start" font-size="13">NA</text>
<text x="178" y="151" text-anchor="start" font-size="13">NB</text>
<text x="354.1" y="240" text-anchor="start" font-size="13">P</text>
<text x="354.1" y="348" text-anchor="start" font-size="13">Q</text>
<text x="612.2" y="469" text-anchor="start">Y</text>
<text x="40" y="28" text-anchor="middle" font-size="16">A</text>
<text x="71" y="28" text-anchor="middle" font-size="16">B</text>
</g>
</svg>
</div>

$\mathbf{Sol}^{n}$

- $\mathit{NA} = \overline{A}$
- $\mathit{NB} = \overline{B}$
- $P = A\,\mathit{NB}$
- $Q = \mathit{NA}\,B$
- $Y = P + Q$

$\mathbf{Ans}\quad \text{โค้ดต่อไปนี้}$

```verilog
module Xor2 (Y, A, B);
output Y;
input A, B;
wire NA, NB, P, Q;
not (NA, A);
not (NB, B);
and (P, A, NB);
and (Q, NA, B);
or (Y, P, Q);
endmodule
```

### ข้อ 4  โมดูล Xor2 ต่อไปนี้ทำหน้าที่อะไร จงเขียนวงจร ตารางความจริง และสมการของเอาต์พุต {part=a; case=c4; style=flow}

```verilog
module Xor2 (Y, A, B);
output Y;
input A, B;
assign Y = (A & ~B) | (~A & B);
endmodule
```

$\mathbf{Sol}^{n}$

- `assign Y = (A & ~B) | (~A & B)` : $Y = A\,\overline{B} + \overline{A}\,B$

$\mathbf{Ans}\quad \begin{aligned}Y &= A\,\overline{B} + \overline{A}\,B\end{aligned}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="676" height="546" viewBox="0 0 676 546" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<polygon points="138,76 138,100 160,88"/>
<circle cx="165" cy="88" r="5"/>
<line x1="71" y1="88" x2="138" y2="88"/>
<polygon points="138,146 138,170 160,158"/>
<circle cx="165" cy="158" r="5"/>
<path d="M40,158 L66.5,158 A4.5,4.5 0 0 1 75.5,158 L138,158"/>
<line x1="170" y1="88" x2="196" y2="88"/>
<path d="M170,158 L191.5,158 A4.5,4.5 0 0 1 200.5,158 L224,158"/>
<path d="M278,214 H304 A26,33 0 0 1 304,280 H278 Z"/>
<path d="M40,236 L66.5,236 A4.5,4.5 0 0 1 75.5,236 L191.5,236 A4.5,4.5 0 0 1 200.5,236 L219.5,236 A4.5,4.5 0 0 1 228.5,236 L278,236"/>
<path d="M196,258 L219.5,258 A4.5,4.5 0 0 1 228.5,258 L278,258"/>
<path d="M278,322 H304 A26,33 0 0 1 304,388 H278 Z"/>
<line x1="224" y1="344" x2="278" y2="344"/>
<line x1="71" y1="366" x2="278" y2="366"/>
<line x1="330" y1="247" x2="356" y2="247"/>
<path d="M330,355 L351.5,355 A4.5,4.5 0 0 1 360.5,355 L384,355"/>
<path d="M438,430 C460,430 486,446.5 498,463 C486,479.5 460,496 438,496 Q452,463 438,430 Z"/>
<path d="M356,452 L379.5,452 A4.5,4.5 0 0 1 388.5,452 L444.2,452"/>
<line x1="384" y1="474" x2="444.2" y2="474"/>
<line x1="498" y1="463" x2="524" y2="463"/>
<line x1="524" y1="463" x2="580" y2="463"/>
<line x1="40" y1="36" x2="40" y2="236"/>
<line x1="71" y1="36" x2="71" y2="366"/>
<line x1="196" y1="88" x2="196" y2="258"/>
<line x1="224" y1="158" x2="224" y2="344"/>
<line x1="356" y1="247" x2="356" y2="452"/>
<line x1="384" y1="355" x2="384" y2="474"/>
<circle cx="71" cy="88" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="40" cy="158" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="40" cy="236" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="196" cy="258" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="224" cy="344" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="366" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="356" cy="452" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="384" cy="474" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="196" cy="88" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="224" cy="158" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="356" cy="247" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="384" cy="355" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="588" y="469" text-anchor="start">Y</text>
<text x="40" y="28" text-anchor="middle" font-size="16">A</text>
<text x="71" y="28" text-anchor="middle" font-size="16">B</text>
</g>
</svg>
</div>

### ข้อ 4  จงเขียนโมดูล Verilog แบบ Dataflow ของวงจรในรูป ($Y = A\,\overline{B} + \overline{A}\,B$) {part=b; case=c4; style=flow}

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="700" height="546" viewBox="0 0 700 546" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<polygon points="138,76 138,100 160,88"/>
<circle cx="165" cy="88" r="5"/>
<path d="M40,88 L66.5,88 A4.5,4.5 0 0 1 75.5,88 L138,88"/>
<polygon points="138,146 138,170 160,158"/>
<circle cx="165" cy="158" r="5"/>
<line x1="71" y1="158" x2="138" y2="158"/>
<line x1="170" y1="88" x2="212.1" y2="88"/>
<path d="M170,158 L207.6,158 A4.5,4.5 0 0 1 216.6,158 L240.1,158"/>
<path d="M294.1,214 H320.1 A26,33 0 0 1 320.1,280 H294.1 Z"/>
<path d="M40,236 L66.5,236 A4.5,4.5 0 0 1 75.5,236 L207.6,236 A4.5,4.5 0 0 1 216.6,236 L235.6,236 A4.5,4.5 0 0 1 244.6,236 L294.1,236"/>
<line x1="240.1" y1="258" x2="294.1" y2="258"/>
<path d="M294.1,322 H320.1 A26,33 0 0 1 320.1,388 H294.1 Z"/>
<line x1="212.1" y1="344" x2="294.1" y2="344"/>
<line x1="71" y1="366" x2="294.1" y2="366"/>
<line x1="346.1" y1="247" x2="380.2" y2="247"/>
<path d="M346.1,355 L375.7,355 A4.5,4.5 0 0 1 384.7,355 L408.2,355"/>
<path d="M462.2,430 C484.2,430 510.2,446.5 522.2,463 C510.2,479.5 484.2,496 462.2,496 Q476.2,463 462.2,430 Z"/>
<path d="M380.2,452 L403.7,452 A4.5,4.5 0 0 1 412.7,452 L468.4,452"/>
<line x1="408.2" y1="474" x2="468.4" y2="474"/>
<line x1="522.2" y1="463" x2="548.2" y2="463"/>
<line x1="548.2" y1="463" x2="604.2" y2="463"/>
<line x1="40" y1="36" x2="40" y2="236"/>
<line x1="71" y1="36" x2="71" y2="366"/>
<line x1="212.1" y1="88" x2="212.1" y2="344"/>
<line x1="240.1" y1="158" x2="240.1" y2="258"/>
<line x1="380.2" y1="247" x2="380.2" y2="452"/>
<line x1="408.2" y1="355" x2="408.2" y2="474"/>
<circle cx="40" cy="88" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="158" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="40" cy="236" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="240.1" cy="258" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="212.1" cy="344" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="366" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="380.2" cy="452" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="408.2" cy="474" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="212.1" cy="88" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="240.1" cy="158" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="380.2" cy="247" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="408.2" cy="355" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="178" y="81" text-anchor="start" font-size="13">NA</text>
<text x="178" y="151" text-anchor="start" font-size="13">NB</text>
<text x="354.1" y="240" text-anchor="start" font-size="13">P</text>
<text x="354.1" y="348" text-anchor="start" font-size="13">Q</text>
<text x="612.2" y="469" text-anchor="start">Y</text>
<text x="40" y="28" text-anchor="middle" font-size="16">A</text>
<text x="71" y="28" text-anchor="middle" font-size="16">B</text>
</g>
</svg>
</div>

$\mathbf{Sol}^{n}$

- $Y = A\,\overline{B} + \overline{A}\,B$

$\mathbf{Ans}\quad \text{โค้ดต่อไปนี้}$

```verilog
module Xor2 (Y, A, B);
output Y;
input A, B;
assign Y = (A & ~B) | (~A & B);
endmodule
```

### ข้อ 4  โมดูล Xnor2 ต่อไปนี้ทำหน้าที่อะไร จงเขียนวงจร ตารางความจริง และสมการของเอาต์พุต {part=a; case=c5; style=struct}

```verilog
module Xnor2 (Y, A, B);
output Y;
input A, B;
xnor (Y, A, B);
endmodule
```

$\mathbf{Sol}^{n}$

- `xnor (Y, A, B)` : $Y = \overline{A \oplus B}$

$\mathbf{Ans}\quad \begin{aligned}Y &= \overline{A \oplus B}\end{aligned}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="394" height="190" viewBox="0 0 394 190" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<path d="M146,74 C168,74 194,90.5 206,107 C194,123.5 168,140 146,140 Q160,107 146,74 Z"/>
<path d="M138,74 Q152,107 138,140"/>
<circle cx="211" cy="107" r="5"/>
<path d="M40,96 L66.5,96 A4.5,4.5 0 0 1 75.5,96 L144.2,96"/>
<line x1="71" y1="118" x2="144.2" y2="118"/>
<line x1="216" y1="107" x2="242" y2="107"/>
<line x1="242" y1="107" x2="298" y2="107"/>
<line x1="40" y1="36" x2="40" y2="96"/>
<line x1="71" y1="36" x2="71" y2="118"/>
<circle cx="40" cy="96" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="118" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="306" y="113" text-anchor="start">Y</text>
<text x="40" y="28" text-anchor="middle" font-size="16">A</text>
<text x="71" y="28" text-anchor="middle" font-size="16">B</text>
</g>
</svg>
</div>

### ข้อ 4  จงเขียนโมดูล Verilog แบบ Structural ของวงจรในรูป ($Y = \overline{A \oplus B}$) {part=b; case=c5; style=struct}

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="394" height="190" viewBox="0 0 394 190" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<path d="M146,74 C168,74 194,90.5 206,107 C194,123.5 168,140 146,140 Q160,107 146,74 Z"/>
<path d="M138,74 Q152,107 138,140"/>
<circle cx="211" cy="107" r="5"/>
<path d="M40,96 L66.5,96 A4.5,4.5 0 0 1 75.5,96 L144.2,96"/>
<line x1="71" y1="118" x2="144.2" y2="118"/>
<line x1="216" y1="107" x2="242" y2="107"/>
<line x1="242" y1="107" x2="298" y2="107"/>
<line x1="40" y1="36" x2="40" y2="96"/>
<line x1="71" y1="36" x2="71" y2="118"/>
<circle cx="40" cy="96" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="118" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="306" y="113" text-anchor="start">Y</text>
<text x="40" y="28" text-anchor="middle" font-size="16">A</text>
<text x="71" y="28" text-anchor="middle" font-size="16">B</text>
</g>
</svg>
</div>

$\mathbf{Sol}^{n}$

- $Y = \overline{A \oplus B}$

$\mathbf{Ans}\quad \text{โค้ดต่อไปนี้}$

```verilog
module Xnor2 (Y, A, B);
output Y;
input A, B;
xnor (Y, A, B);
endmodule
```

### ข้อ 4  โมดูล Xnor2 ต่อไปนี้ทำหน้าที่อะไร จงเขียนวงจร ตารางความจริง และสมการของเอาต์พุต {part=a; case=c5; style=flow}

```verilog
module Xnor2 (Y, A, B);
output Y;
input A, B;
assign Y = ~(A ^ B);
endmodule
```

$\mathbf{Sol}^{n}$

- `assign Y = ~(A ^ B)` : $Y = \overline{A \oplus B}$

$\mathbf{Ans}\quad \begin{aligned}Y &= \overline{A \oplus B}\end{aligned}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="496" height="260" viewBox="0 0 496 260" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<path d="M146,74 C168,74 194,90.5 206,107 C194,123.5 168,140 146,140 Q160,107 146,74 Z"/>
<path d="M138,74 Q152,107 138,140"/>
<path d="M40,96 L66.5,96 A4.5,4.5 0 0 1 75.5,96 L144.2,96"/>
<line x1="71" y1="118" x2="144.2" y2="118"/>
<line x1="206" y1="107" x2="232" y2="107"/>
<polygon points="286,184 286,208 308,196"/>
<circle cx="313" cy="196" r="5"/>
<line x1="232" y1="196" x2="286" y2="196"/>
<line x1="318" y1="196" x2="344" y2="196"/>
<line x1="344" y1="196" x2="400" y2="196"/>
<line x1="40" y1="36" x2="40" y2="96"/>
<line x1="71" y1="36" x2="71" y2="118"/>
<line x1="232" y1="107" x2="232" y2="196"/>
<circle cx="40" cy="96" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="118" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="232" cy="196" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="232" cy="107" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="408" y="202" text-anchor="start">Y</text>
<text x="40" y="28" text-anchor="middle" font-size="16">A</text>
<text x="71" y="28" text-anchor="middle" font-size="16">B</text>
</g>
</svg>
</div>

### ข้อ 4  จงเขียนโมดูล Verilog แบบ Dataflow ของวงจรในรูป ($Y = \overline{A \oplus B}$) {part=b; case=c5; style=flow}

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="394" height="190" viewBox="0 0 394 190" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<path d="M146,74 C168,74 194,90.5 206,107 C194,123.5 168,140 146,140 Q160,107 146,74 Z"/>
<path d="M138,74 Q152,107 138,140"/>
<circle cx="211" cy="107" r="5"/>
<path d="M40,96 L66.5,96 A4.5,4.5 0 0 1 75.5,96 L144.2,96"/>
<line x1="71" y1="118" x2="144.2" y2="118"/>
<line x1="216" y1="107" x2="242" y2="107"/>
<line x1="242" y1="107" x2="298" y2="107"/>
<line x1="40" y1="36" x2="40" y2="96"/>
<line x1="71" y1="36" x2="71" y2="118"/>
<circle cx="40" cy="96" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="118" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="306" y="113" text-anchor="start">Y</text>
<text x="40" y="28" text-anchor="middle" font-size="16">A</text>
<text x="71" y="28" text-anchor="middle" font-size="16">B</text>
</g>
</svg>
</div>

$\mathbf{Sol}^{n}$

- $Y = \overline{A \oplus B}$

$\mathbf{Ans}\quad \text{โค้ดต่อไปนี้}$

```verilog
module Xnor2 (Y, A, B);
output Y;
input A, B;
assign Y = ~(A ^ B);
endmodule
```

### ข้อ 4  โมดูล Majority ต่อไปนี้ทำหน้าที่อะไร จงเขียนวงจร ตารางความจริง และสมการของเอาต์พุต {part=a; case=c6; style=struct}

```verilog
module Majority (Y, A, B, C);
output Y;
input A, B, C;
wire P, Q, R;
and (P, A, B);
and (Q, B, C);
and (R, A, C);
or (Y, P, Q, R);
endmodule
```

$\mathbf{Sol}^{n}$

- `and (P, A, B)` : $P = A\,B$
- `and (Q, B, C)` : $Q = B\,C$
- `and (R, A, C)` : $R = A\,C$
- `or (Y, P, Q, R)` : $Y = P + Q + R$

$\mathbf{Ans}\quad \begin{aligned}Y &= A\,B + B\,C + A\,C\end{aligned}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="603" height="536" viewBox="0 0 603 536" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<path d="M169,74 H195 A26,33 0 0 1 195,140 H169 Z"/>
<path d="M40,96 L66.5,96 A4.5,4.5 0 0 1 75.5,96 L97.5,96 A4.5,4.5 0 0 1 106.5,96 L169,96"/>
<path d="M71,118 L97.5,118 A4.5,4.5 0 0 1 106.5,118 L169,118"/>
<path d="M169,182 H195 A26,33 0 0 1 195,248 H169 Z"/>
<path d="M71,204 L97.5,204 A4.5,4.5 0 0 1 106.5,204 L169,204"/>
<line x1="102" y1="226" x2="169" y2="226"/>
<path d="M169,290 H195 A26,33 0 0 1 195,356 H169 Z"/>
<path d="M40,312 L97.5,312 A4.5,4.5 0 0 1 106.5,312 L169,312"/>
<line x1="102" y1="334" x2="169" y2="334"/>
<line x1="221" y1="107" x2="255.1" y2="107"/>
<path d="M221,215 L250.6,215 A4.5,4.5 0 0 1 259.6,215 L283.1,215"/>
<path d="M221,323 L250.6,323 A4.5,4.5 0 0 1 259.6,323 L278.6,323 A4.5,4.5 0 0 1 287.6,323 L311.1,323"/>
<path d="M365.1,398 C387.1,398 413.1,420 425.1,442 C413.1,464 387.1,486 365.1,486 Q379.1,442 365.1,398 Z"/>
<path d="M255.1,420 L278.6,420 A4.5,4.5 0 0 1 287.6,420 L306.6,420 A4.5,4.5 0 0 1 315.6,420 L370.3,420"/>
<path d="M283.1,442 L306.6,442 A4.5,4.5 0 0 1 315.6,442 L372.1,442"/>
<line x1="311.1" y1="464" x2="370.3" y2="464"/>
<line x1="425.1" y1="442" x2="451.1" y2="442"/>
<line x1="451.1" y1="442" x2="507.1" y2="442"/>
<line x1="40" y1="36" x2="40" y2="312"/>
<line x1="71" y1="36" x2="71" y2="204"/>
<line x1="102" y1="36" x2="102" y2="334"/>
<line x1="255.1" y1="107" x2="255.1" y2="420"/>
<line x1="283.1" y1="215" x2="283.1" y2="442"/>
<line x1="311.1" y1="323" x2="311.1" y2="464"/>
<circle cx="40" cy="96" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="118" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="204" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="102" cy="226" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="40" cy="312" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="102" cy="334" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="255.1" cy="420" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="283.1" cy="442" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="311.1" cy="464" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="255.1" cy="107" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="283.1" cy="215" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="311.1" cy="323" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="229" y="100" text-anchor="start" font-size="13">P</text>
<text x="229" y="208" text-anchor="start" font-size="13">Q</text>
<text x="229" y="316" text-anchor="start" font-size="13">R</text>
<text x="515.1" y="448" text-anchor="start">Y</text>
<text x="40" y="28" text-anchor="middle" font-size="16">A</text>
<text x="71" y="28" text-anchor="middle" font-size="16">B</text>
<text x="102" y="28" text-anchor="middle" font-size="16">C</text>
</g>
</svg>
</div>

### ข้อ 4  จงเขียนโมดูล Verilog แบบ Structural ของวงจรในรูป ($Y = A\,B + B\,C + A\,C$) {part=b; case=c6; style=struct}

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="603" height="536" viewBox="0 0 603 536" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<path d="M169,74 H195 A26,33 0 0 1 195,140 H169 Z"/>
<path d="M40,96 L66.5,96 A4.5,4.5 0 0 1 75.5,96 L97.5,96 A4.5,4.5 0 0 1 106.5,96 L169,96"/>
<path d="M71,118 L97.5,118 A4.5,4.5 0 0 1 106.5,118 L169,118"/>
<path d="M169,182 H195 A26,33 0 0 1 195,248 H169 Z"/>
<path d="M71,204 L97.5,204 A4.5,4.5 0 0 1 106.5,204 L169,204"/>
<line x1="102" y1="226" x2="169" y2="226"/>
<path d="M169,290 H195 A26,33 0 0 1 195,356 H169 Z"/>
<path d="M40,312 L97.5,312 A4.5,4.5 0 0 1 106.5,312 L169,312"/>
<line x1="102" y1="334" x2="169" y2="334"/>
<line x1="221" y1="107" x2="255.1" y2="107"/>
<path d="M221,215 L250.6,215 A4.5,4.5 0 0 1 259.6,215 L283.1,215"/>
<path d="M221,323 L250.6,323 A4.5,4.5 0 0 1 259.6,323 L278.6,323 A4.5,4.5 0 0 1 287.6,323 L311.1,323"/>
<path d="M365.1,398 C387.1,398 413.1,420 425.1,442 C413.1,464 387.1,486 365.1,486 Q379.1,442 365.1,398 Z"/>
<path d="M255.1,420 L278.6,420 A4.5,4.5 0 0 1 287.6,420 L306.6,420 A4.5,4.5 0 0 1 315.6,420 L370.3,420"/>
<path d="M283.1,442 L306.6,442 A4.5,4.5 0 0 1 315.6,442 L372.1,442"/>
<line x1="311.1" y1="464" x2="370.3" y2="464"/>
<line x1="425.1" y1="442" x2="451.1" y2="442"/>
<line x1="451.1" y1="442" x2="507.1" y2="442"/>
<line x1="40" y1="36" x2="40" y2="312"/>
<line x1="71" y1="36" x2="71" y2="204"/>
<line x1="102" y1="36" x2="102" y2="334"/>
<line x1="255.1" y1="107" x2="255.1" y2="420"/>
<line x1="283.1" y1="215" x2="283.1" y2="442"/>
<line x1="311.1" y1="323" x2="311.1" y2="464"/>
<circle cx="40" cy="96" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="118" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="204" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="102" cy="226" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="40" cy="312" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="102" cy="334" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="255.1" cy="420" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="283.1" cy="442" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="311.1" cy="464" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="255.1" cy="107" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="283.1" cy="215" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="311.1" cy="323" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="229" y="100" text-anchor="start" font-size="13">P</text>
<text x="229" y="208" text-anchor="start" font-size="13">Q</text>
<text x="229" y="316" text-anchor="start" font-size="13">R</text>
<text x="515.1" y="448" text-anchor="start">Y</text>
<text x="40" y="28" text-anchor="middle" font-size="16">A</text>
<text x="71" y="28" text-anchor="middle" font-size="16">B</text>
<text x="102" y="28" text-anchor="middle" font-size="16">C</text>
</g>
</svg>
</div>

$\mathbf{Sol}^{n}$

- $P = A\,B$
- $Q = B\,C$
- $R = A\,C$
- $Y = P + Q + R$

$\mathbf{Ans}\quad \text{โค้ดต่อไปนี้}$

```verilog
module Majority (Y, A, B, C);
output Y;
input A, B, C;
wire P, Q, R;
and (P, A, B);
and (Q, B, C);
and (R, A, C);
or (Y, P, Q, R);
endmodule
```

### ข้อ 4  โมดูล Majority ต่อไปนี้ทำหน้าที่อะไร จงเขียนวงจร ตารางความจริง และสมการของเอาต์พุต {part=a; case=c6; style=flow}

```verilog
module Majority (Y, A, B, C);
output Y;
input A, B, C;
assign Y = (A & B) | (B & C) | (A & C);
endmodule
```

$\mathbf{Sol}^{n}$

- `assign Y = (A & B) | (B & C) | (A & C)` : $Y = A\,B + B\,C + A\,C$

$\mathbf{Ans}\quad \begin{aligned}Y &= A\,B + B\,C + A\,C\end{aligned}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="595" height="536" viewBox="0 0 595 536" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<path d="M169,74 H195 A26,33 0 0 1 195,140 H169 Z"/>
<path d="M40,96 L66.5,96 A4.5,4.5 0 0 1 75.5,96 L97.5,96 A4.5,4.5 0 0 1 106.5,96 L169,96"/>
<path d="M71,118 L97.5,118 A4.5,4.5 0 0 1 106.5,118 L169,118"/>
<path d="M169,182 H195 A26,33 0 0 1 195,248 H169 Z"/>
<path d="M71,204 L97.5,204 A4.5,4.5 0 0 1 106.5,204 L169,204"/>
<line x1="102" y1="226" x2="169" y2="226"/>
<path d="M169,290 H195 A26,33 0 0 1 195,356 H169 Z"/>
<path d="M40,312 L97.5,312 A4.5,4.5 0 0 1 106.5,312 L169,312"/>
<line x1="102" y1="334" x2="169" y2="334"/>
<line x1="221" y1="107" x2="247" y2="107"/>
<path d="M221,215 L242.5,215 A4.5,4.5 0 0 1 251.5,215 L275,215"/>
<path d="M221,323 L242.5,323 A4.5,4.5 0 0 1 251.5,323 L270.5,323 A4.5,4.5 0 0 1 279.5,323 L303,323"/>
<path d="M357,398 C379,398 405,420 417,442 C405,464 379,486 357,486 Q371,442 357,398 Z"/>
<path d="M247,420 L270.5,420 A4.5,4.5 0 0 1 279.5,420 L298.5,420 A4.5,4.5 0 0 1 307.5,420 L362.2,420"/>
<path d="M275,442 L298.5,442 A4.5,4.5 0 0 1 307.5,442 L364,442"/>
<line x1="303" y1="464" x2="362.2" y2="464"/>
<line x1="417" y1="442" x2="443" y2="442"/>
<line x1="443" y1="442" x2="499" y2="442"/>
<line x1="40" y1="36" x2="40" y2="312"/>
<line x1="71" y1="36" x2="71" y2="204"/>
<line x1="102" y1="36" x2="102" y2="334"/>
<line x1="247" y1="107" x2="247" y2="420"/>
<line x1="275" y1="215" x2="275" y2="442"/>
<line x1="303" y1="323" x2="303" y2="464"/>
<circle cx="40" cy="96" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="118" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="204" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="102" cy="226" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="40" cy="312" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="102" cy="334" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="247" cy="420" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="275" cy="442" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="303" cy="464" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="247" cy="107" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="275" cy="215" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="303" cy="323" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="507" y="448" text-anchor="start">Y</text>
<text x="40" y="28" text-anchor="middle" font-size="16">A</text>
<text x="71" y="28" text-anchor="middle" font-size="16">B</text>
<text x="102" y="28" text-anchor="middle" font-size="16">C</text>
</g>
</svg>
</div>

### ข้อ 4  จงเขียนโมดูล Verilog แบบ Dataflow ของวงจรในรูป ($Y = A\,B + B\,C + A\,C$) {part=b; case=c6; style=flow}

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="603" height="536" viewBox="0 0 603 536" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<path d="M169,74 H195 A26,33 0 0 1 195,140 H169 Z"/>
<path d="M40,96 L66.5,96 A4.5,4.5 0 0 1 75.5,96 L97.5,96 A4.5,4.5 0 0 1 106.5,96 L169,96"/>
<path d="M71,118 L97.5,118 A4.5,4.5 0 0 1 106.5,118 L169,118"/>
<path d="M169,182 H195 A26,33 0 0 1 195,248 H169 Z"/>
<path d="M71,204 L97.5,204 A4.5,4.5 0 0 1 106.5,204 L169,204"/>
<line x1="102" y1="226" x2="169" y2="226"/>
<path d="M169,290 H195 A26,33 0 0 1 195,356 H169 Z"/>
<path d="M40,312 L97.5,312 A4.5,4.5 0 0 1 106.5,312 L169,312"/>
<line x1="102" y1="334" x2="169" y2="334"/>
<line x1="221" y1="107" x2="255.1" y2="107"/>
<path d="M221,215 L250.6,215 A4.5,4.5 0 0 1 259.6,215 L283.1,215"/>
<path d="M221,323 L250.6,323 A4.5,4.5 0 0 1 259.6,323 L278.6,323 A4.5,4.5 0 0 1 287.6,323 L311.1,323"/>
<path d="M365.1,398 C387.1,398 413.1,420 425.1,442 C413.1,464 387.1,486 365.1,486 Q379.1,442 365.1,398 Z"/>
<path d="M255.1,420 L278.6,420 A4.5,4.5 0 0 1 287.6,420 L306.6,420 A4.5,4.5 0 0 1 315.6,420 L370.3,420"/>
<path d="M283.1,442 L306.6,442 A4.5,4.5 0 0 1 315.6,442 L372.1,442"/>
<line x1="311.1" y1="464" x2="370.3" y2="464"/>
<line x1="425.1" y1="442" x2="451.1" y2="442"/>
<line x1="451.1" y1="442" x2="507.1" y2="442"/>
<line x1="40" y1="36" x2="40" y2="312"/>
<line x1="71" y1="36" x2="71" y2="204"/>
<line x1="102" y1="36" x2="102" y2="334"/>
<line x1="255.1" y1="107" x2="255.1" y2="420"/>
<line x1="283.1" y1="215" x2="283.1" y2="442"/>
<line x1="311.1" y1="323" x2="311.1" y2="464"/>
<circle cx="40" cy="96" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="118" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="204" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="102" cy="226" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="40" cy="312" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="102" cy="334" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="255.1" cy="420" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="283.1" cy="442" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="311.1" cy="464" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="255.1" cy="107" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="283.1" cy="215" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="311.1" cy="323" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="229" y="100" text-anchor="start" font-size="13">P</text>
<text x="229" y="208" text-anchor="start" font-size="13">Q</text>
<text x="229" y="316" text-anchor="start" font-size="13">R</text>
<text x="515.1" y="448" text-anchor="start">Y</text>
<text x="40" y="28" text-anchor="middle" font-size="16">A</text>
<text x="71" y="28" text-anchor="middle" font-size="16">B</text>
<text x="102" y="28" text-anchor="middle" font-size="16">C</text>
</g>
</svg>
</div>

$\mathbf{Sol}^{n}$

- $Y = A\,B + B\,C + A\,C$

$\mathbf{Ans}\quad \text{โค้ดต่อไปนี้}$

```verilog
module Majority (Y, A, B, C);
output Y;
input A, B, C;
assign Y = (A & B) | (B & C) | (A & C);
endmodule
```

### ข้อ 4  โมดูล Pos4 ต่อไปนี้ทำหน้าที่อะไร จงเขียนวงจร ตารางความจริง และสมการของเอาต์พุต {part=a; case=c7; style=struct}

```verilog
module Pos4 (Y, A, B, C, D);
output Y;
input A, B, C, D;
wire P, Q;
or (P, A, B);
or (Q, C, D);
and (Y, P, Q);
endmodule
```

$\mathbf{Sol}^{n}$

- `or (P, A, B)` : $P = A + B$
- `or (Q, C, D)` : $Q = C + D$
- `and (Y, P, Q)` : $Y = P\,Q$

$\mathbf{Ans}\quad \begin{aligned}Y &= (A + B)\,(C + D)\end{aligned}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="606" height="406" viewBox="0 0 606 406" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<path d="M200,74 C222,74 248,90.5 260,107 C248,123.5 222,140 200,140 Q214,107 200,74 Z"/>
<path d="M40,96 L66.5,96 A4.5,4.5 0 0 1 75.5,96 L97.5,96 A4.5,4.5 0 0 1 106.5,96 L128.5,96 A4.5,4.5 0 0 1 137.5,96 L206.2,96"/>
<path d="M71,118 L97.5,118 A4.5,4.5 0 0 1 106.5,118 L128.5,118 A4.5,4.5 0 0 1 137.5,118 L206.2,118"/>
<path d="M200,182 C222,182 248,198.5 260,215 C248,231.5 222,248 200,248 Q214,215 200,182 Z"/>
<path d="M102,204 L128.5,204 A4.5,4.5 0 0 1 137.5,204 L206.2,204"/>
<line x1="133" y1="226" x2="206.2" y2="226"/>
<line x1="260" y1="107" x2="294.1" y2="107"/>
<path d="M260,215 L289.6,215 A4.5,4.5 0 0 1 298.6,215 L322.1,215"/>
<path d="M376.1,290 H402.1 A26,33 0 0 1 402.1,356 H376.1 Z"/>
<path d="M294.1,312 L317.6,312 A4.5,4.5 0 0 1 326.6,312 L376.1,312"/>
<line x1="322.1" y1="334" x2="376.1" y2="334"/>
<line x1="428.1" y1="323" x2="454.1" y2="323"/>
<line x1="454.1" y1="323" x2="510.1" y2="323"/>
<line x1="40" y1="36" x2="40" y2="96"/>
<line x1="71" y1="36" x2="71" y2="118"/>
<line x1="102" y1="36" x2="102" y2="204"/>
<line x1="133" y1="36" x2="133" y2="226"/>
<line x1="294.1" y1="107" x2="294.1" y2="312"/>
<line x1="322.1" y1="215" x2="322.1" y2="334"/>
<circle cx="40" cy="96" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="118" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="102" cy="204" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="133" cy="226" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="294.1" cy="312" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="322.1" cy="334" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="294.1" cy="107" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="322.1" cy="215" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="268" y="100" text-anchor="start" font-size="13">P</text>
<text x="268" y="208" text-anchor="start" font-size="13">Q</text>
<text x="518.1" y="329" text-anchor="start">Y</text>
<text x="40" y="28" text-anchor="middle" font-size="16">A</text>
<text x="71" y="28" text-anchor="middle" font-size="16">B</text>
<text x="102" y="28" text-anchor="middle" font-size="16">C</text>
<text x="133" y="28" text-anchor="middle" font-size="16">D</text>
</g>
</svg>
</div>

### ข้อ 4  จงเขียนโมดูล Verilog แบบ Structural ของวงจรในรูป ($Y = (A + B)\,(C + D)$) {part=b; case=c7; style=struct}

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="606" height="406" viewBox="0 0 606 406" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<path d="M200,74 C222,74 248,90.5 260,107 C248,123.5 222,140 200,140 Q214,107 200,74 Z"/>
<path d="M40,96 L66.5,96 A4.5,4.5 0 0 1 75.5,96 L97.5,96 A4.5,4.5 0 0 1 106.5,96 L128.5,96 A4.5,4.5 0 0 1 137.5,96 L206.2,96"/>
<path d="M71,118 L97.5,118 A4.5,4.5 0 0 1 106.5,118 L128.5,118 A4.5,4.5 0 0 1 137.5,118 L206.2,118"/>
<path d="M200,182 C222,182 248,198.5 260,215 C248,231.5 222,248 200,248 Q214,215 200,182 Z"/>
<path d="M102,204 L128.5,204 A4.5,4.5 0 0 1 137.5,204 L206.2,204"/>
<line x1="133" y1="226" x2="206.2" y2="226"/>
<line x1="260" y1="107" x2="294.1" y2="107"/>
<path d="M260,215 L289.6,215 A4.5,4.5 0 0 1 298.6,215 L322.1,215"/>
<path d="M376.1,290 H402.1 A26,33 0 0 1 402.1,356 H376.1 Z"/>
<path d="M294.1,312 L317.6,312 A4.5,4.5 0 0 1 326.6,312 L376.1,312"/>
<line x1="322.1" y1="334" x2="376.1" y2="334"/>
<line x1="428.1" y1="323" x2="454.1" y2="323"/>
<line x1="454.1" y1="323" x2="510.1" y2="323"/>
<line x1="40" y1="36" x2="40" y2="96"/>
<line x1="71" y1="36" x2="71" y2="118"/>
<line x1="102" y1="36" x2="102" y2="204"/>
<line x1="133" y1="36" x2="133" y2="226"/>
<line x1="294.1" y1="107" x2="294.1" y2="312"/>
<line x1="322.1" y1="215" x2="322.1" y2="334"/>
<circle cx="40" cy="96" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="118" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="102" cy="204" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="133" cy="226" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="294.1" cy="312" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="322.1" cy="334" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="294.1" cy="107" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="322.1" cy="215" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="268" y="100" text-anchor="start" font-size="13">P</text>
<text x="268" y="208" text-anchor="start" font-size="13">Q</text>
<text x="518.1" y="329" text-anchor="start">Y</text>
<text x="40" y="28" text-anchor="middle" font-size="16">A</text>
<text x="71" y="28" text-anchor="middle" font-size="16">B</text>
<text x="102" y="28" text-anchor="middle" font-size="16">C</text>
<text x="133" y="28" text-anchor="middle" font-size="16">D</text>
</g>
</svg>
</div>

$\mathbf{Sol}^{n}$

- $P = A + B$
- $Q = C + D$
- $Y = P\,Q$

$\mathbf{Ans}\quad \text{โค้ดต่อไปนี้}$

```verilog
module Pos4 (Y, A, B, C, D);
output Y;
input A, B, C, D;
wire P, Q;
or (P, A, B);
or (Q, C, D);
and (Y, P, Q);
endmodule
```

### ข้อ 4  โมดูล Pos4 ต่อไปนี้ทำหน้าที่อะไร จงเขียนวงจร ตารางความจริง และสมการของเอาต์พุต {part=a; case=c7; style=flow}

```verilog
module Pos4 (Y, A, B, C, D);
output Y;
input A, B, C, D;
assign Y = (A | B) & (C | D);
endmodule
```

$\mathbf{Sol}^{n}$

- `assign Y = (A | B) & (C | D)` : $Y = (A + B)\,(C + D)$

$\mathbf{Ans}\quad \begin{aligned}Y &= (A + B)\,(C + D)\end{aligned}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="598" height="406" viewBox="0 0 598 406" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<path d="M200,74 C222,74 248,90.5 260,107 C248,123.5 222,140 200,140 Q214,107 200,74 Z"/>
<path d="M40,96 L66.5,96 A4.5,4.5 0 0 1 75.5,96 L97.5,96 A4.5,4.5 0 0 1 106.5,96 L128.5,96 A4.5,4.5 0 0 1 137.5,96 L206.2,96"/>
<path d="M71,118 L97.5,118 A4.5,4.5 0 0 1 106.5,118 L128.5,118 A4.5,4.5 0 0 1 137.5,118 L206.2,118"/>
<path d="M200,182 C222,182 248,198.5 260,215 C248,231.5 222,248 200,248 Q214,215 200,182 Z"/>
<path d="M102,204 L128.5,204 A4.5,4.5 0 0 1 137.5,204 L206.2,204"/>
<line x1="133" y1="226" x2="206.2" y2="226"/>
<line x1="260" y1="107" x2="286" y2="107"/>
<path d="M260,215 L281.5,215 A4.5,4.5 0 0 1 290.5,215 L314,215"/>
<path d="M368,290 H394 A26,33 0 0 1 394,356 H368 Z"/>
<path d="M286,312 L309.5,312 A4.5,4.5 0 0 1 318.5,312 L368,312"/>
<line x1="314" y1="334" x2="368" y2="334"/>
<line x1="420" y1="323" x2="446" y2="323"/>
<line x1="446" y1="323" x2="502" y2="323"/>
<line x1="40" y1="36" x2="40" y2="96"/>
<line x1="71" y1="36" x2="71" y2="118"/>
<line x1="102" y1="36" x2="102" y2="204"/>
<line x1="133" y1="36" x2="133" y2="226"/>
<line x1="286" y1="107" x2="286" y2="312"/>
<line x1="314" y1="215" x2="314" y2="334"/>
<circle cx="40" cy="96" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="118" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="102" cy="204" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="133" cy="226" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="286" cy="312" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="314" cy="334" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="286" cy="107" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="314" cy="215" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="510" y="329" text-anchor="start">Y</text>
<text x="40" y="28" text-anchor="middle" font-size="16">A</text>
<text x="71" y="28" text-anchor="middle" font-size="16">B</text>
<text x="102" y="28" text-anchor="middle" font-size="16">C</text>
<text x="133" y="28" text-anchor="middle" font-size="16">D</text>
</g>
</svg>
</div>

### ข้อ 4  จงเขียนโมดูล Verilog แบบ Dataflow ของวงจรในรูป ($Y = (A + B)\,(C + D)$) {part=b; case=c7; style=flow}

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="606" height="406" viewBox="0 0 606 406" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<path d="M200,74 C222,74 248,90.5 260,107 C248,123.5 222,140 200,140 Q214,107 200,74 Z"/>
<path d="M40,96 L66.5,96 A4.5,4.5 0 0 1 75.5,96 L97.5,96 A4.5,4.5 0 0 1 106.5,96 L128.5,96 A4.5,4.5 0 0 1 137.5,96 L206.2,96"/>
<path d="M71,118 L97.5,118 A4.5,4.5 0 0 1 106.5,118 L128.5,118 A4.5,4.5 0 0 1 137.5,118 L206.2,118"/>
<path d="M200,182 C222,182 248,198.5 260,215 C248,231.5 222,248 200,248 Q214,215 200,182 Z"/>
<path d="M102,204 L128.5,204 A4.5,4.5 0 0 1 137.5,204 L206.2,204"/>
<line x1="133" y1="226" x2="206.2" y2="226"/>
<line x1="260" y1="107" x2="294.1" y2="107"/>
<path d="M260,215 L289.6,215 A4.5,4.5 0 0 1 298.6,215 L322.1,215"/>
<path d="M376.1,290 H402.1 A26,33 0 0 1 402.1,356 H376.1 Z"/>
<path d="M294.1,312 L317.6,312 A4.5,4.5 0 0 1 326.6,312 L376.1,312"/>
<line x1="322.1" y1="334" x2="376.1" y2="334"/>
<line x1="428.1" y1="323" x2="454.1" y2="323"/>
<line x1="454.1" y1="323" x2="510.1" y2="323"/>
<line x1="40" y1="36" x2="40" y2="96"/>
<line x1="71" y1="36" x2="71" y2="118"/>
<line x1="102" y1="36" x2="102" y2="204"/>
<line x1="133" y1="36" x2="133" y2="226"/>
<line x1="294.1" y1="107" x2="294.1" y2="312"/>
<line x1="322.1" y1="215" x2="322.1" y2="334"/>
<circle cx="40" cy="96" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="118" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="102" cy="204" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="133" cy="226" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="294.1" cy="312" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="322.1" cy="334" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="294.1" cy="107" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="322.1" cy="215" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="268" y="100" text-anchor="start" font-size="13">P</text>
<text x="268" y="208" text-anchor="start" font-size="13">Q</text>
<text x="518.1" y="329" text-anchor="start">Y</text>
<text x="40" y="28" text-anchor="middle" font-size="16">A</text>
<text x="71" y="28" text-anchor="middle" font-size="16">B</text>
<text x="102" y="28" text-anchor="middle" font-size="16">C</text>
<text x="133" y="28" text-anchor="middle" font-size="16">D</text>
</g>
</svg>
</div>

$\mathbf{Sol}^{n}$

- $Y = (A + B)\,(C + D)$

$\mathbf{Ans}\quad \text{โค้ดต่อไปนี้}$

```verilog
module Pos4 (Y, A, B, C, D);
output Y;
input A, B, C, D;
assign Y = (A | B) & (C | D);
endmodule
```

### ข้อ 4  โมดูล NandNand ต่อไปนี้ทำหน้าที่อะไร จงเขียนวงจร ตารางความจริง และสมการของเอาต์พุต {part=a; case=c8; style=struct}

```verilog
module NandNand (Y, A, B, C, D);
output Y;
input A, B, C, D;
wire P, Q;
nand (P, A, B);
nand (Q, C, D);
nand (Y, P, Q);
endmodule
```

$\mathbf{Sol}^{n}$

- `nand (P, A, B)` : $P = \overline{A\,B}$
- `nand (Q, C, D)` : $Q = \overline{C\,D}$
- `nand (Y, P, Q)` : $Y = \overline{P\,Q}$

$\mathbf{Ans}\quad \begin{aligned}Y &= \overline{\overline{A\,B}\,\overline{C\,D}}\end{aligned}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="618" height="406" viewBox="0 0 618 406" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<path d="M200,74 H226 A26,33 0 0 1 226,140 H200 Z"/>
<circle cx="257" cy="107" r="5"/>
<path d="M40,96 L66.5,96 A4.5,4.5 0 0 1 75.5,96 L97.5,96 A4.5,4.5 0 0 1 106.5,96 L128.5,96 A4.5,4.5 0 0 1 137.5,96 L200,96"/>
<path d="M71,118 L97.5,118 A4.5,4.5 0 0 1 106.5,118 L128.5,118 A4.5,4.5 0 0 1 137.5,118 L200,118"/>
<path d="M200,182 H226 A26,33 0 0 1 226,248 H200 Z"/>
<circle cx="257" cy="215" r="5"/>
<path d="M102,204 L128.5,204 A4.5,4.5 0 0 1 137.5,204 L200,204"/>
<line x1="133" y1="226" x2="200" y2="226"/>
<line x1="262" y1="107" x2="296.1" y2="107"/>
<path d="M262,215 L291.6,215 A4.5,4.5 0 0 1 300.6,215 L324.1,215"/>
<path d="M378.1,290 H404.1 A26,33 0 0 1 404.1,356 H378.1 Z"/>
<circle cx="435.1" cy="323" r="5"/>
<path d="M296.1,312 L319.6,312 A4.5,4.5 0 0 1 328.6,312 L378.1,312"/>
<line x1="324.1" y1="334" x2="378.1" y2="334"/>
<line x1="440.1" y1="323" x2="466.1" y2="323"/>
<line x1="466.1" y1="323" x2="522.1" y2="323"/>
<line x1="40" y1="36" x2="40" y2="96"/>
<line x1="71" y1="36" x2="71" y2="118"/>
<line x1="102" y1="36" x2="102" y2="204"/>
<line x1="133" y1="36" x2="133" y2="226"/>
<line x1="296.1" y1="107" x2="296.1" y2="312"/>
<line x1="324.1" y1="215" x2="324.1" y2="334"/>
<circle cx="40" cy="96" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="118" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="102" cy="204" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="133" cy="226" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="296.1" cy="312" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="324.1" cy="334" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="296.1" cy="107" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="324.1" cy="215" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="270" y="100" text-anchor="start" font-size="13">P</text>
<text x="270" y="208" text-anchor="start" font-size="13">Q</text>
<text x="530.1" y="329" text-anchor="start">Y</text>
<text x="40" y="28" text-anchor="middle" font-size="16">A</text>
<text x="71" y="28" text-anchor="middle" font-size="16">B</text>
<text x="102" y="28" text-anchor="middle" font-size="16">C</text>
<text x="133" y="28" text-anchor="middle" font-size="16">D</text>
</g>
</svg>
</div>

### ข้อ 4  จงเขียนโมดูล Verilog แบบ Structural ของวงจรในรูป ($Y = \overline{\overline{A\,B}\,\overline{C\,D}}$) {part=b; case=c8; style=struct}

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="618" height="406" viewBox="0 0 618 406" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<path d="M200,74 H226 A26,33 0 0 1 226,140 H200 Z"/>
<circle cx="257" cy="107" r="5"/>
<path d="M40,96 L66.5,96 A4.5,4.5 0 0 1 75.5,96 L97.5,96 A4.5,4.5 0 0 1 106.5,96 L128.5,96 A4.5,4.5 0 0 1 137.5,96 L200,96"/>
<path d="M71,118 L97.5,118 A4.5,4.5 0 0 1 106.5,118 L128.5,118 A4.5,4.5 0 0 1 137.5,118 L200,118"/>
<path d="M200,182 H226 A26,33 0 0 1 226,248 H200 Z"/>
<circle cx="257" cy="215" r="5"/>
<path d="M102,204 L128.5,204 A4.5,4.5 0 0 1 137.5,204 L200,204"/>
<line x1="133" y1="226" x2="200" y2="226"/>
<line x1="262" y1="107" x2="296.1" y2="107"/>
<path d="M262,215 L291.6,215 A4.5,4.5 0 0 1 300.6,215 L324.1,215"/>
<path d="M378.1,290 H404.1 A26,33 0 0 1 404.1,356 H378.1 Z"/>
<circle cx="435.1" cy="323" r="5"/>
<path d="M296.1,312 L319.6,312 A4.5,4.5 0 0 1 328.6,312 L378.1,312"/>
<line x1="324.1" y1="334" x2="378.1" y2="334"/>
<line x1="440.1" y1="323" x2="466.1" y2="323"/>
<line x1="466.1" y1="323" x2="522.1" y2="323"/>
<line x1="40" y1="36" x2="40" y2="96"/>
<line x1="71" y1="36" x2="71" y2="118"/>
<line x1="102" y1="36" x2="102" y2="204"/>
<line x1="133" y1="36" x2="133" y2="226"/>
<line x1="296.1" y1="107" x2="296.1" y2="312"/>
<line x1="324.1" y1="215" x2="324.1" y2="334"/>
<circle cx="40" cy="96" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="118" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="102" cy="204" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="133" cy="226" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="296.1" cy="312" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="324.1" cy="334" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="296.1" cy="107" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="324.1" cy="215" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="270" y="100" text-anchor="start" font-size="13">P</text>
<text x="270" y="208" text-anchor="start" font-size="13">Q</text>
<text x="530.1" y="329" text-anchor="start">Y</text>
<text x="40" y="28" text-anchor="middle" font-size="16">A</text>
<text x="71" y="28" text-anchor="middle" font-size="16">B</text>
<text x="102" y="28" text-anchor="middle" font-size="16">C</text>
<text x="133" y="28" text-anchor="middle" font-size="16">D</text>
</g>
</svg>
</div>

$\mathbf{Sol}^{n}$

- $P = \overline{A\,B}$
- $Q = \overline{C\,D}$
- $Y = \overline{P\,Q}$

$\mathbf{Ans}\quad \text{โค้ดต่อไปนี้}$

```verilog
module NandNand (Y, A, B, C, D);
output Y;
input A, B, C, D;
wire P, Q;
nand (P, A, B);
nand (Q, C, D);
nand (Y, P, Q);
endmodule
```

### ข้อ 4  โมดูล NandNand ต่อไปนี้ทำหน้าที่อะไร จงเขียนวงจร ตารางความจริง และสมการของเอาต์พุต {part=a; case=c8; style=flow}

```verilog
module NandNand (Y, A, B, C, D);
output Y;
input A, B, C, D;
assign Y = ~(~(A & B) & ~(C & D));
endmodule
```

$\mathbf{Sol}^{n}$

- `assign Y = ~(~(A & B) & ~(C & D))` : $Y = \overline{\overline{A\,B}\,\overline{C\,D}}$

$\mathbf{Ans}\quad \begin{aligned}Y &= \overline{\overline{A\,B}\,\overline{C\,D}}\end{aligned}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="842" height="616" viewBox="0 0 842 616" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<path d="M200,74 H226 A26,33 0 0 1 226,140 H200 Z"/>
<path d="M40,96 L66.5,96 A4.5,4.5 0 0 1 75.5,96 L97.5,96 A4.5,4.5 0 0 1 106.5,96 L128.5,96 A4.5,4.5 0 0 1 137.5,96 L200,96"/>
<path d="M71,118 L97.5,118 A4.5,4.5 0 0 1 106.5,118 L128.5,118 A4.5,4.5 0 0 1 137.5,118 L200,118"/>
<path d="M200,182 H226 A26,33 0 0 1 226,248 H200 Z"/>
<path d="M102,204 L128.5,204 A4.5,4.5 0 0 1 137.5,204 L200,204"/>
<line x1="133" y1="226" x2="200" y2="226"/>
<line x1="252" y1="107" x2="278" y2="107"/>
<path d="M252,215 L273.5,215 A4.5,4.5 0 0 1 282.5,215 L306,215"/>
<polygon points="360,292 360,316 382,304"/>
<circle cx="387" cy="304" r="5"/>
<path d="M278,304 L301.5,304 A4.5,4.5 0 0 1 310.5,304 L360,304"/>
<polygon points="360,362 360,386 382,374"/>
<circle cx="387" cy="374" r="5"/>
<line x1="306" y1="374" x2="360" y2="374"/>
<line x1="392" y1="304" x2="418" y2="304"/>
<path d="M392,374 L413.5,374 A4.5,4.5 0 0 1 422.5,374 L446,374"/>
<path d="M500,430 H526 A26,33 0 0 1 526,496 H500 Z"/>
<path d="M418,452 L441.5,452 A4.5,4.5 0 0 1 450.5,452 L500,452"/>
<line x1="446" y1="474" x2="500" y2="474"/>
<line x1="552" y1="463" x2="578" y2="463"/>
<polygon points="632,540 632,564 654,552"/>
<circle cx="659" cy="552" r="5"/>
<line x1="578" y1="552" x2="632" y2="552"/>
<line x1="664" y1="552" x2="690" y2="552"/>
<line x1="690" y1="552" x2="746" y2="552"/>
<line x1="40" y1="36" x2="40" y2="96"/>
<line x1="71" y1="36" x2="71" y2="118"/>
<line x1="102" y1="36" x2="102" y2="204"/>
<line x1="133" y1="36" x2="133" y2="226"/>
<line x1="278" y1="107" x2="278" y2="304"/>
<line x1="306" y1="215" x2="306" y2="374"/>
<line x1="418" y1="304" x2="418" y2="452"/>
<line x1="446" y1="374" x2="446" y2="474"/>
<line x1="578" y1="463" x2="578" y2="552"/>
<circle cx="40" cy="96" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="118" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="102" cy="204" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="133" cy="226" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="278" cy="304" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="306" cy="374" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="418" cy="452" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="446" cy="474" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="578" cy="552" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="278" cy="107" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="306" cy="215" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="418" cy="304" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="446" cy="374" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="578" cy="463" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="754" y="558" text-anchor="start">Y</text>
<text x="40" y="28" text-anchor="middle" font-size="16">A</text>
<text x="71" y="28" text-anchor="middle" font-size="16">B</text>
<text x="102" y="28" text-anchor="middle" font-size="16">C</text>
<text x="133" y="28" text-anchor="middle" font-size="16">D</text>
</g>
</svg>
</div>

### ข้อ 4  จงเขียนโมดูล Verilog แบบ Dataflow ของวงจรในรูป ($Y = \overline{\overline{A\,B}\,\overline{C\,D}}$) {part=b; case=c8; style=flow}

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="618" height="406" viewBox="0 0 618 406" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<path d="M200,74 H226 A26,33 0 0 1 226,140 H200 Z"/>
<circle cx="257" cy="107" r="5"/>
<path d="M40,96 L66.5,96 A4.5,4.5 0 0 1 75.5,96 L97.5,96 A4.5,4.5 0 0 1 106.5,96 L128.5,96 A4.5,4.5 0 0 1 137.5,96 L200,96"/>
<path d="M71,118 L97.5,118 A4.5,4.5 0 0 1 106.5,118 L128.5,118 A4.5,4.5 0 0 1 137.5,118 L200,118"/>
<path d="M200,182 H226 A26,33 0 0 1 226,248 H200 Z"/>
<circle cx="257" cy="215" r="5"/>
<path d="M102,204 L128.5,204 A4.5,4.5 0 0 1 137.5,204 L200,204"/>
<line x1="133" y1="226" x2="200" y2="226"/>
<line x1="262" y1="107" x2="296.1" y2="107"/>
<path d="M262,215 L291.6,215 A4.5,4.5 0 0 1 300.6,215 L324.1,215"/>
<path d="M378.1,290 H404.1 A26,33 0 0 1 404.1,356 H378.1 Z"/>
<circle cx="435.1" cy="323" r="5"/>
<path d="M296.1,312 L319.6,312 A4.5,4.5 0 0 1 328.6,312 L378.1,312"/>
<line x1="324.1" y1="334" x2="378.1" y2="334"/>
<line x1="440.1" y1="323" x2="466.1" y2="323"/>
<line x1="466.1" y1="323" x2="522.1" y2="323"/>
<line x1="40" y1="36" x2="40" y2="96"/>
<line x1="71" y1="36" x2="71" y2="118"/>
<line x1="102" y1="36" x2="102" y2="204"/>
<line x1="133" y1="36" x2="133" y2="226"/>
<line x1="296.1" y1="107" x2="296.1" y2="312"/>
<line x1="324.1" y1="215" x2="324.1" y2="334"/>
<circle cx="40" cy="96" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="118" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="102" cy="204" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="133" cy="226" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="296.1" cy="312" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="324.1" cy="334" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="296.1" cy="107" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="324.1" cy="215" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="270" y="100" text-anchor="start" font-size="13">P</text>
<text x="270" y="208" text-anchor="start" font-size="13">Q</text>
<text x="530.1" y="329" text-anchor="start">Y</text>
<text x="40" y="28" text-anchor="middle" font-size="16">A</text>
<text x="71" y="28" text-anchor="middle" font-size="16">B</text>
<text x="102" y="28" text-anchor="middle" font-size="16">C</text>
<text x="133" y="28" text-anchor="middle" font-size="16">D</text>
</g>
</svg>
</div>

$\mathbf{Sol}^{n}$

- $Y = \overline{\overline{A\,B}\,\overline{C\,D}}$

$\mathbf{Ans}\quad \text{โค้ดต่อไปนี้}$

```verilog
module NandNand (Y, A, B, C, D);
output Y;
input A, B, C, D;
assign Y = ~(~(A & B) & ~(C & D));
endmodule
```

### ข้อ 4  โมดูล NorNor ต่อไปนี้ทำหน้าที่อะไร จงเขียนวงจร ตารางความจริง และสมการของเอาต์พุต {part=a; case=c9; style=struct}

```verilog
module NorNor (Y, A, B, C, D);
output Y;
input A, B, C, D;
wire P, Q;
nor (P, A, B);
nor (Q, C, D);
nor (Y, P, Q);
endmodule
```

$\mathbf{Sol}^{n}$

- `nor (P, A, B)` : $P = \overline{A + B}$
- `nor (Q, C, D)` : $Q = \overline{C + D}$
- `nor (Y, P, Q)` : $Y = \overline{P + Q}$

$\mathbf{Ans}\quad \begin{aligned}Y &= \overline{\overline{A + B} + \overline{C + D}}\end{aligned}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="634" height="406" viewBox="0 0 634 406" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<path d="M200,74 C222,74 248,90.5 260,107 C248,123.5 222,140 200,140 Q214,107 200,74 Z"/>
<circle cx="265" cy="107" r="5"/>
<path d="M40,96 L66.5,96 A4.5,4.5 0 0 1 75.5,96 L97.5,96 A4.5,4.5 0 0 1 106.5,96 L128.5,96 A4.5,4.5 0 0 1 137.5,96 L206.2,96"/>
<path d="M71,118 L97.5,118 A4.5,4.5 0 0 1 106.5,118 L128.5,118 A4.5,4.5 0 0 1 137.5,118 L206.2,118"/>
<path d="M200,182 C222,182 248,198.5 260,215 C248,231.5 222,248 200,248 Q214,215 200,182 Z"/>
<circle cx="265" cy="215" r="5"/>
<path d="M102,204 L128.5,204 A4.5,4.5 0 0 1 137.5,204 L206.2,204"/>
<line x1="133" y1="226" x2="206.2" y2="226"/>
<line x1="270" y1="107" x2="304.1" y2="107"/>
<path d="M270,215 L299.6,215 A4.5,4.5 0 0 1 308.6,215 L332.1,215"/>
<path d="M386.1,290 C408.1,290 434.1,306.5 446.1,323 C434.1,339.5 408.1,356 386.1,356 Q400.1,323 386.1,290 Z"/>
<circle cx="451.1" cy="323" r="5"/>
<path d="M304.1,312 L327.6,312 A4.5,4.5 0 0 1 336.6,312 L392.3,312"/>
<line x1="332.1" y1="334" x2="392.3" y2="334"/>
<line x1="456.1" y1="323" x2="482.1" y2="323"/>
<line x1="482.1" y1="323" x2="538.1" y2="323"/>
<line x1="40" y1="36" x2="40" y2="96"/>
<line x1="71" y1="36" x2="71" y2="118"/>
<line x1="102" y1="36" x2="102" y2="204"/>
<line x1="133" y1="36" x2="133" y2="226"/>
<line x1="304.1" y1="107" x2="304.1" y2="312"/>
<line x1="332.1" y1="215" x2="332.1" y2="334"/>
<circle cx="40" cy="96" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="118" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="102" cy="204" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="133" cy="226" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="304.1" cy="312" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="332.1" cy="334" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="304.1" cy="107" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="332.1" cy="215" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="278" y="100" text-anchor="start" font-size="13">P</text>
<text x="278" y="208" text-anchor="start" font-size="13">Q</text>
<text x="546.1" y="329" text-anchor="start">Y</text>
<text x="40" y="28" text-anchor="middle" font-size="16">A</text>
<text x="71" y="28" text-anchor="middle" font-size="16">B</text>
<text x="102" y="28" text-anchor="middle" font-size="16">C</text>
<text x="133" y="28" text-anchor="middle" font-size="16">D</text>
</g>
</svg>
</div>

### ข้อ 4  จงเขียนโมดูล Verilog แบบ Structural ของวงจรในรูป ($Y = \overline{\overline{A + B} + \overline{C + D}}$) {part=b; case=c9; style=struct}

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="634" height="406" viewBox="0 0 634 406" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<path d="M200,74 C222,74 248,90.5 260,107 C248,123.5 222,140 200,140 Q214,107 200,74 Z"/>
<circle cx="265" cy="107" r="5"/>
<path d="M40,96 L66.5,96 A4.5,4.5 0 0 1 75.5,96 L97.5,96 A4.5,4.5 0 0 1 106.5,96 L128.5,96 A4.5,4.5 0 0 1 137.5,96 L206.2,96"/>
<path d="M71,118 L97.5,118 A4.5,4.5 0 0 1 106.5,118 L128.5,118 A4.5,4.5 0 0 1 137.5,118 L206.2,118"/>
<path d="M200,182 C222,182 248,198.5 260,215 C248,231.5 222,248 200,248 Q214,215 200,182 Z"/>
<circle cx="265" cy="215" r="5"/>
<path d="M102,204 L128.5,204 A4.5,4.5 0 0 1 137.5,204 L206.2,204"/>
<line x1="133" y1="226" x2="206.2" y2="226"/>
<line x1="270" y1="107" x2="304.1" y2="107"/>
<path d="M270,215 L299.6,215 A4.5,4.5 0 0 1 308.6,215 L332.1,215"/>
<path d="M386.1,290 C408.1,290 434.1,306.5 446.1,323 C434.1,339.5 408.1,356 386.1,356 Q400.1,323 386.1,290 Z"/>
<circle cx="451.1" cy="323" r="5"/>
<path d="M304.1,312 L327.6,312 A4.5,4.5 0 0 1 336.6,312 L392.3,312"/>
<line x1="332.1" y1="334" x2="392.3" y2="334"/>
<line x1="456.1" y1="323" x2="482.1" y2="323"/>
<line x1="482.1" y1="323" x2="538.1" y2="323"/>
<line x1="40" y1="36" x2="40" y2="96"/>
<line x1="71" y1="36" x2="71" y2="118"/>
<line x1="102" y1="36" x2="102" y2="204"/>
<line x1="133" y1="36" x2="133" y2="226"/>
<line x1="304.1" y1="107" x2="304.1" y2="312"/>
<line x1="332.1" y1="215" x2="332.1" y2="334"/>
<circle cx="40" cy="96" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="118" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="102" cy="204" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="133" cy="226" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="304.1" cy="312" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="332.1" cy="334" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="304.1" cy="107" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="332.1" cy="215" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="278" y="100" text-anchor="start" font-size="13">P</text>
<text x="278" y="208" text-anchor="start" font-size="13">Q</text>
<text x="546.1" y="329" text-anchor="start">Y</text>
<text x="40" y="28" text-anchor="middle" font-size="16">A</text>
<text x="71" y="28" text-anchor="middle" font-size="16">B</text>
<text x="102" y="28" text-anchor="middle" font-size="16">C</text>
<text x="133" y="28" text-anchor="middle" font-size="16">D</text>
</g>
</svg>
</div>

$\mathbf{Sol}^{n}$

- $P = \overline{A + B}$
- $Q = \overline{C + D}$
- $Y = \overline{P + Q}$

$\mathbf{Ans}\quad \text{โค้ดต่อไปนี้}$

```verilog
module NorNor (Y, A, B, C, D);
output Y;
input A, B, C, D;
wire P, Q;
nor (P, A, B);
nor (Q, C, D);
nor (Y, P, Q);
endmodule
```

### ข้อ 4  โมดูล NorNor ต่อไปนี้ทำหน้าที่อะไร จงเขียนวงจร ตารางความจริง และสมการของเอาต์พุต {part=a; case=c9; style=flow}

```verilog
module NorNor (Y, A, B, C, D);
output Y;
input A, B, C, D;
assign Y = ~(~(A | B) | ~(C | D));
endmodule
```

$\mathbf{Sol}^{n}$

- `assign Y = ~(~(A | B) | ~(C | D))` : $Y = \overline{\overline{A + B} + \overline{C + D}}$

$\mathbf{Ans}\quad \begin{aligned}Y &= \overline{\overline{A + B} + \overline{C + D}}\end{aligned}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="858" height="616" viewBox="0 0 858 616" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<path d="M200,74 C222,74 248,90.5 260,107 C248,123.5 222,140 200,140 Q214,107 200,74 Z"/>
<path d="M40,96 L66.5,96 A4.5,4.5 0 0 1 75.5,96 L97.5,96 A4.5,4.5 0 0 1 106.5,96 L128.5,96 A4.5,4.5 0 0 1 137.5,96 L206.2,96"/>
<path d="M71,118 L97.5,118 A4.5,4.5 0 0 1 106.5,118 L128.5,118 A4.5,4.5 0 0 1 137.5,118 L206.2,118"/>
<path d="M200,182 C222,182 248,198.5 260,215 C248,231.5 222,248 200,248 Q214,215 200,182 Z"/>
<path d="M102,204 L128.5,204 A4.5,4.5 0 0 1 137.5,204 L206.2,204"/>
<line x1="133" y1="226" x2="206.2" y2="226"/>
<line x1="260" y1="107" x2="286" y2="107"/>
<path d="M260,215 L281.5,215 A4.5,4.5 0 0 1 290.5,215 L314,215"/>
<polygon points="368,292 368,316 390,304"/>
<circle cx="395" cy="304" r="5"/>
<path d="M286,304 L309.5,304 A4.5,4.5 0 0 1 318.5,304 L368,304"/>
<polygon points="368,362 368,386 390,374"/>
<circle cx="395" cy="374" r="5"/>
<line x1="314" y1="374" x2="368" y2="374"/>
<line x1="400" y1="304" x2="426" y2="304"/>
<path d="M400,374 L421.5,374 A4.5,4.5 0 0 1 430.5,374 L454,374"/>
<path d="M508,430 C530,430 556,446.5 568,463 C556,479.5 530,496 508,496 Q522,463 508,430 Z"/>
<path d="M426,452 L449.5,452 A4.5,4.5 0 0 1 458.5,452 L514.2,452"/>
<line x1="454" y1="474" x2="514.2" y2="474"/>
<line x1="568" y1="463" x2="594" y2="463"/>
<polygon points="648,540 648,564 670,552"/>
<circle cx="675" cy="552" r="5"/>
<line x1="594" y1="552" x2="648" y2="552"/>
<line x1="680" y1="552" x2="706" y2="552"/>
<line x1="706" y1="552" x2="762" y2="552"/>
<line x1="40" y1="36" x2="40" y2="96"/>
<line x1="71" y1="36" x2="71" y2="118"/>
<line x1="102" y1="36" x2="102" y2="204"/>
<line x1="133" y1="36" x2="133" y2="226"/>
<line x1="286" y1="107" x2="286" y2="304"/>
<line x1="314" y1="215" x2="314" y2="374"/>
<line x1="426" y1="304" x2="426" y2="452"/>
<line x1="454" y1="374" x2="454" y2="474"/>
<line x1="594" y1="463" x2="594" y2="552"/>
<circle cx="40" cy="96" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="118" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="102" cy="204" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="133" cy="226" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="286" cy="304" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="314" cy="374" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="426" cy="452" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="454" cy="474" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="594" cy="552" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="286" cy="107" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="314" cy="215" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="426" cy="304" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="454" cy="374" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="594" cy="463" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="770" y="558" text-anchor="start">Y</text>
<text x="40" y="28" text-anchor="middle" font-size="16">A</text>
<text x="71" y="28" text-anchor="middle" font-size="16">B</text>
<text x="102" y="28" text-anchor="middle" font-size="16">C</text>
<text x="133" y="28" text-anchor="middle" font-size="16">D</text>
</g>
</svg>
</div>

### ข้อ 4  จงเขียนโมดูล Verilog แบบ Dataflow ของวงจรในรูป ($Y = \overline{\overline{A + B} + \overline{C + D}}$) {part=b; case=c9; style=flow}

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="634" height="406" viewBox="0 0 634 406" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<path d="M200,74 C222,74 248,90.5 260,107 C248,123.5 222,140 200,140 Q214,107 200,74 Z"/>
<circle cx="265" cy="107" r="5"/>
<path d="M40,96 L66.5,96 A4.5,4.5 0 0 1 75.5,96 L97.5,96 A4.5,4.5 0 0 1 106.5,96 L128.5,96 A4.5,4.5 0 0 1 137.5,96 L206.2,96"/>
<path d="M71,118 L97.5,118 A4.5,4.5 0 0 1 106.5,118 L128.5,118 A4.5,4.5 0 0 1 137.5,118 L206.2,118"/>
<path d="M200,182 C222,182 248,198.5 260,215 C248,231.5 222,248 200,248 Q214,215 200,182 Z"/>
<circle cx="265" cy="215" r="5"/>
<path d="M102,204 L128.5,204 A4.5,4.5 0 0 1 137.5,204 L206.2,204"/>
<line x1="133" y1="226" x2="206.2" y2="226"/>
<line x1="270" y1="107" x2="304.1" y2="107"/>
<path d="M270,215 L299.6,215 A4.5,4.5 0 0 1 308.6,215 L332.1,215"/>
<path d="M386.1,290 C408.1,290 434.1,306.5 446.1,323 C434.1,339.5 408.1,356 386.1,356 Q400.1,323 386.1,290 Z"/>
<circle cx="451.1" cy="323" r="5"/>
<path d="M304.1,312 L327.6,312 A4.5,4.5 0 0 1 336.6,312 L392.3,312"/>
<line x1="332.1" y1="334" x2="392.3" y2="334"/>
<line x1="456.1" y1="323" x2="482.1" y2="323"/>
<line x1="482.1" y1="323" x2="538.1" y2="323"/>
<line x1="40" y1="36" x2="40" y2="96"/>
<line x1="71" y1="36" x2="71" y2="118"/>
<line x1="102" y1="36" x2="102" y2="204"/>
<line x1="133" y1="36" x2="133" y2="226"/>
<line x1="304.1" y1="107" x2="304.1" y2="312"/>
<line x1="332.1" y1="215" x2="332.1" y2="334"/>
<circle cx="40" cy="96" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="118" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="102" cy="204" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="133" cy="226" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="304.1" cy="312" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="332.1" cy="334" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="304.1" cy="107" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="332.1" cy="215" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="278" y="100" text-anchor="start" font-size="13">P</text>
<text x="278" y="208" text-anchor="start" font-size="13">Q</text>
<text x="546.1" y="329" text-anchor="start">Y</text>
<text x="40" y="28" text-anchor="middle" font-size="16">A</text>
<text x="71" y="28" text-anchor="middle" font-size="16">B</text>
<text x="102" y="28" text-anchor="middle" font-size="16">C</text>
<text x="133" y="28" text-anchor="middle" font-size="16">D</text>
</g>
</svg>
</div>

$\mathbf{Sol}^{n}$

- $Y = \overline{\overline{A + B} + \overline{C + D}}$

$\mathbf{Ans}\quad \text{โค้ดต่อไปนี้}$

```verilog
module NorNor (Y, A, B, C, D);
output Y;
input A, B, C, D;
assign Y = ~(~(A | B) | ~(C | D));
endmodule
```

### ข้อ 4  โมดูล HalfAdd ต่อไปนี้ทำหน้าที่อะไร จงเขียนวงจร ตารางความจริง และสมการของเอาต์พุต {part=a; case=c10; style=struct}

```verilog
module HalfAdd (Sum, Cout, A, B);
output Sum, Cout;
input A, B;
xor (Sum, A, B);
and (Cout, A, B);
endmodule
```

$\mathbf{Sol}^{n}$

- `xor (Sum, A, B)` : $\mathit{Sum} = A \oplus B$
- `and (Cout, A, B)` : $\mathit{Cout} = A\,B$

$\mathbf{Ans}\quad \begin{aligned}\mathit{Sum} &= A \oplus B \\ \mathit{Cout} &= A\,B\end{aligned}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="412" height="298" viewBox="0 0 412 298" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<path d="M146,74 C168,74 194,90.5 206,107 C194,123.5 168,140 146,140 Q160,107 146,74 Z"/>
<path d="M138,74 Q152,107 138,140"/>
<path d="M40,96 L66.5,96 A4.5,4.5 0 0 1 75.5,96 L144.2,96"/>
<line x1="71" y1="118" x2="144.2" y2="118"/>
<path d="M138,182 H164 A26,33 0 0 1 164,248 H138 Z"/>
<path d="M40,204 L66.5,204 A4.5,4.5 0 0 1 75.5,204 L138,204"/>
<line x1="71" y1="226" x2="138" y2="226"/>
<line x1="206" y1="107" x2="232" y2="107"/>
<line x1="190" y1="215" x2="260" y2="215"/>
<line x1="232" y1="107" x2="316" y2="107"/>
<line x1="260" y1="215" x2="316" y2="215"/>
<line x1="40" y1="36" x2="40" y2="204"/>
<line x1="71" y1="36" x2="71" y2="226"/>
<circle cx="40" cy="96" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="118" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="40" cy="204" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="226" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="324" y="113" text-anchor="start">Sum</text>
<text x="324" y="221" text-anchor="start">Cout</text>
<text x="40" y="28" text-anchor="middle" font-size="16">A</text>
<text x="71" y="28" text-anchor="middle" font-size="16">B</text>
</g>
</svg>
</div>

### ข้อ 4  จงเขียนโมดูล Verilog แบบ Structural ของวงจรในรูป ($\mathit{Sum} = A \oplus B$, $\mathit{Cout} = A\,B$) {part=b; case=c10; style=struct}

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="412" height="298" viewBox="0 0 412 298" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<path d="M146,74 C168,74 194,90.5 206,107 C194,123.5 168,140 146,140 Q160,107 146,74 Z"/>
<path d="M138,74 Q152,107 138,140"/>
<path d="M40,96 L66.5,96 A4.5,4.5 0 0 1 75.5,96 L144.2,96"/>
<line x1="71" y1="118" x2="144.2" y2="118"/>
<path d="M138,182 H164 A26,33 0 0 1 164,248 H138 Z"/>
<path d="M40,204 L66.5,204 A4.5,4.5 0 0 1 75.5,204 L138,204"/>
<line x1="71" y1="226" x2="138" y2="226"/>
<line x1="206" y1="107" x2="232" y2="107"/>
<line x1="190" y1="215" x2="260" y2="215"/>
<line x1="232" y1="107" x2="316" y2="107"/>
<line x1="260" y1="215" x2="316" y2="215"/>
<line x1="40" y1="36" x2="40" y2="204"/>
<line x1="71" y1="36" x2="71" y2="226"/>
<circle cx="40" cy="96" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="118" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="40" cy="204" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="226" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="324" y="113" text-anchor="start">Sum</text>
<text x="324" y="221" text-anchor="start">Cout</text>
<text x="40" y="28" text-anchor="middle" font-size="16">A</text>
<text x="71" y="28" text-anchor="middle" font-size="16">B</text>
</g>
</svg>
</div>

$\mathbf{Sol}^{n}$

- $\mathit{Sum} = A \oplus B$
- $\mathit{Cout} = A\,B$

$\mathbf{Ans}\quad \text{โค้ดต่อไปนี้}$

```verilog
module HalfAdd (Sum, Cout, A, B);
output Sum, Cout;
input A, B;
xor (Sum, A, B);
and (Cout, A, B);
endmodule
```

### ข้อ 4  โมดูล HalfAdd ต่อไปนี้ทำหน้าที่อะไร จงเขียนวงจร ตารางความจริง และสมการของเอาต์พุต {part=a; case=c10; style=flow}

```verilog
module HalfAdd (Sum, Cout, A, B);
output Sum, Cout;
input A, B;
assign Sum = A ^ B;
assign Cout = A & B;
endmodule
```

$\mathbf{Sol}^{n}$

- `assign Sum = A ^ B` : $\mathit{Sum} = A \oplus B$
- `assign Cout = A & B` : $\mathit{Cout} = A\,B$

$\mathbf{Ans}\quad \begin{aligned}\mathit{Sum} &= A \oplus B \\ \mathit{Cout} &= A\,B\end{aligned}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="412" height="298" viewBox="0 0 412 298" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<path d="M146,74 C168,74 194,90.5 206,107 C194,123.5 168,140 146,140 Q160,107 146,74 Z"/>
<path d="M138,74 Q152,107 138,140"/>
<path d="M40,96 L66.5,96 A4.5,4.5 0 0 1 75.5,96 L144.2,96"/>
<line x1="71" y1="118" x2="144.2" y2="118"/>
<path d="M138,182 H164 A26,33 0 0 1 164,248 H138 Z"/>
<path d="M40,204 L66.5,204 A4.5,4.5 0 0 1 75.5,204 L138,204"/>
<line x1="71" y1="226" x2="138" y2="226"/>
<line x1="206" y1="107" x2="232" y2="107"/>
<line x1="190" y1="215" x2="260" y2="215"/>
<line x1="232" y1="107" x2="316" y2="107"/>
<line x1="260" y1="215" x2="316" y2="215"/>
<line x1="40" y1="36" x2="40" y2="204"/>
<line x1="71" y1="36" x2="71" y2="226"/>
<circle cx="40" cy="96" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="118" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="40" cy="204" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="226" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="324" y="113" text-anchor="start">Sum</text>
<text x="324" y="221" text-anchor="start">Cout</text>
<text x="40" y="28" text-anchor="middle" font-size="16">A</text>
<text x="71" y="28" text-anchor="middle" font-size="16">B</text>
</g>
</svg>
</div>

### ข้อ 4  จงเขียนโมดูล Verilog แบบ Dataflow ของวงจรในรูป ($\mathit{Sum} = A \oplus B$, $\mathit{Cout} = A\,B$) {part=b; case=c10; style=flow}

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="412" height="298" viewBox="0 0 412 298" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<path d="M146,74 C168,74 194,90.5 206,107 C194,123.5 168,140 146,140 Q160,107 146,74 Z"/>
<path d="M138,74 Q152,107 138,140"/>
<path d="M40,96 L66.5,96 A4.5,4.5 0 0 1 75.5,96 L144.2,96"/>
<line x1="71" y1="118" x2="144.2" y2="118"/>
<path d="M138,182 H164 A26,33 0 0 1 164,248 H138 Z"/>
<path d="M40,204 L66.5,204 A4.5,4.5 0 0 1 75.5,204 L138,204"/>
<line x1="71" y1="226" x2="138" y2="226"/>
<line x1="206" y1="107" x2="232" y2="107"/>
<line x1="190" y1="215" x2="260" y2="215"/>
<line x1="232" y1="107" x2="316" y2="107"/>
<line x1="260" y1="215" x2="316" y2="215"/>
<line x1="40" y1="36" x2="40" y2="204"/>
<line x1="71" y1="36" x2="71" y2="226"/>
<circle cx="40" cy="96" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="118" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="40" cy="204" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="226" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="324" y="113" text-anchor="start">Sum</text>
<text x="324" y="221" text-anchor="start">Cout</text>
<text x="40" y="28" text-anchor="middle" font-size="16">A</text>
<text x="71" y="28" text-anchor="middle" font-size="16">B</text>
</g>
</svg>
</div>

$\mathbf{Sol}^{n}$

- $\mathit{Sum} = A \oplus B$
- $\mathit{Cout} = A\,B$

$\mathbf{Ans}\quad \text{โค้ดต่อไปนี้}$

```verilog
module HalfAdd (Sum, Cout, A, B);
output Sum, Cout;
input A, B;
assign Sum = A ^ B;
assign Cout = A & B;
endmodule
```

### ข้อ 4  โมดูล Dec2to4 ต่อไปนี้ทำหน้าที่อะไร จงเขียนวงจร ตารางความจริง และสมการของเอาต์พุต {part=a; case=c11; style=struct}

```verilog
module Dec2to4 (Y3, Y2, Y1, Y0, A, B);
output Y3, Y2, Y1, Y0;
input A, B;
wire NA, NB;
not (NA, A);
not (NB, B);
and (Y0, NA, NB);
and (Y1, NA, B);
and (Y2, A, NB);
and (Y3, A, B);
endmodule
```

$\mathbf{Sol}^{n}$

- `not (NA, A)` : $\mathit{NA} = \overline{A}$
- `not (NB, B)` : $\mathit{NB} = \overline{B}$
- `and (Y0, NA, NB)` : $\mathit{Y0} = \mathit{NA}\,\mathit{NB}$
- `and (Y1, NA, B)` : $\mathit{Y1} = \mathit{NA}\,B$
- `and (Y2, A, NB)` : $\mathit{Y2} = A\,\mathit{NB}$
- `and (Y3, A, B)` : $\mathit{Y3} = A\,B$

$\mathbf{Ans}\quad \begin{aligned}\mathit{Y0} &= \overline{A}\,\overline{B} \\ \mathit{Y1} &= \overline{A}\,B \\ \mathit{Y2} &= A\,\overline{B} \\ \mathit{Y3} &= A\,B\end{aligned}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="612" height="654" viewBox="0 0 612 654" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<polygon points="138,76 138,100 160,88"/>
<circle cx="165" cy="88" r="5"/>
<path d="M40,88 L66.5,88 A4.5,4.5 0 0 1 75.5,88 L138,88"/>
<polygon points="138,146 138,170 160,158"/>
<circle cx="165" cy="158" r="5"/>
<line x1="71" y1="158" x2="138" y2="158"/>
<path d="M138,214 H164 A26,33 0 0 1 164,280 H138 Z"/>
<path d="M40,236 L66.5,236 A4.5,4.5 0 0 1 75.5,236 L138,236"/>
<line x1="71" y1="258" x2="138" y2="258"/>
<line x1="170" y1="88" x2="216" y2="88"/>
<path d="M170,158 L211.5,158 A4.5,4.5 0 0 1 220.5,158 L244,158"/>
<path d="M190,247 L211.5,247 A4.5,4.5 0 0 1 220.5,247 L239.5,247 A4.5,4.5 0 0 1 248.5,247 L272,247"/>
<path d="M326,322 H352 A26,33 0 0 1 352,388 H326 Z"/>
<path d="M216,344 L239.5,344 A4.5,4.5 0 0 1 248.5,344 L326,344"/>
<line x1="244" y1="366" x2="326" y2="366"/>
<path d="M326,430 H352 A26,33 0 0 1 352,496 H326 Z"/>
<path d="M216,452 L239.5,452 A4.5,4.5 0 0 1 248.5,452 L326,452"/>
<path d="M71,474 L239.5,474 A4.5,4.5 0 0 1 248.5,474 L326,474"/>
<path d="M326,538 H352 A26,33 0 0 1 352,604 H326 Z"/>
<path d="M40,560 L239.5,560 A4.5,4.5 0 0 1 248.5,560 L326,560"/>
<line x1="244" y1="582" x2="326" y2="582"/>
<line x1="378" y1="355" x2="404" y2="355"/>
<line x1="378" y1="463" x2="432" y2="463"/>
<line x1="378" y1="571" x2="460" y2="571"/>
<line x1="272" y1="247" x2="516" y2="247"/>
<line x1="404" y1="355" x2="516" y2="355"/>
<line x1="432" y1="463" x2="516" y2="463"/>
<line x1="460" y1="571" x2="516" y2="571"/>
<line x1="40" y1="36" x2="40" y2="560"/>
<line x1="71" y1="36" x2="71" y2="474"/>
<line x1="216" y1="88" x2="216" y2="452"/>
<line x1="244" y1="158" x2="244" y2="582"/>
<circle cx="40" cy="88" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="158" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="40" cy="236" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="258" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="216" cy="344" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="244" cy="366" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="216" cy="452" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="474" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="40" cy="560" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="244" cy="582" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="216" cy="88" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="244" cy="158" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="178" y="81" text-anchor="start" font-size="13">NA</text>
<text x="178" y="151" text-anchor="start" font-size="13">NB</text>
<text x="524" y="253" text-anchor="start">Y<tspan dy="4" font-size="12">3</tspan></text>
<text x="524" y="361" text-anchor="start">Y<tspan dy="4" font-size="12">0</tspan></text>
<text x="524" y="469" text-anchor="start">Y<tspan dy="4" font-size="12">1</tspan></text>
<text x="524" y="577" text-anchor="start">Y<tspan dy="4" font-size="12">2</tspan></text>
<text x="40" y="28" text-anchor="middle" font-size="16">A</text>
<text x="71" y="28" text-anchor="middle" font-size="16">B</text>
</g>
</svg>
</div>

### ข้อ 4  จงเขียนโมดูล Verilog แบบ Structural ของวงจรในรูป ($\mathit{Y0} = \overline{A}\,\overline{B}$, $\mathit{Y1} = \overline{A}\,B$, $\mathit{Y2} = A\,\overline{B}$, $\mathit{Y3} = A\,B$) {part=b; case=c11; style=struct}

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="612" height="654" viewBox="0 0 612 654" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<polygon points="138,76 138,100 160,88"/>
<circle cx="165" cy="88" r="5"/>
<path d="M40,88 L66.5,88 A4.5,4.5 0 0 1 75.5,88 L138,88"/>
<polygon points="138,146 138,170 160,158"/>
<circle cx="165" cy="158" r="5"/>
<line x1="71" y1="158" x2="138" y2="158"/>
<path d="M138,214 H164 A26,33 0 0 1 164,280 H138 Z"/>
<path d="M40,236 L66.5,236 A4.5,4.5 0 0 1 75.5,236 L138,236"/>
<line x1="71" y1="258" x2="138" y2="258"/>
<line x1="170" y1="88" x2="216" y2="88"/>
<path d="M170,158 L211.5,158 A4.5,4.5 0 0 1 220.5,158 L244,158"/>
<path d="M190,247 L211.5,247 A4.5,4.5 0 0 1 220.5,247 L239.5,247 A4.5,4.5 0 0 1 248.5,247 L272,247"/>
<path d="M326,322 H352 A26,33 0 0 1 352,388 H326 Z"/>
<path d="M216,344 L239.5,344 A4.5,4.5 0 0 1 248.5,344 L326,344"/>
<line x1="244" y1="366" x2="326" y2="366"/>
<path d="M326,430 H352 A26,33 0 0 1 352,496 H326 Z"/>
<path d="M216,452 L239.5,452 A4.5,4.5 0 0 1 248.5,452 L326,452"/>
<path d="M71,474 L239.5,474 A4.5,4.5 0 0 1 248.5,474 L326,474"/>
<path d="M326,538 H352 A26,33 0 0 1 352,604 H326 Z"/>
<path d="M40,560 L239.5,560 A4.5,4.5 0 0 1 248.5,560 L326,560"/>
<line x1="244" y1="582" x2="326" y2="582"/>
<line x1="378" y1="355" x2="404" y2="355"/>
<line x1="378" y1="463" x2="432" y2="463"/>
<line x1="378" y1="571" x2="460" y2="571"/>
<line x1="272" y1="247" x2="516" y2="247"/>
<line x1="404" y1="355" x2="516" y2="355"/>
<line x1="432" y1="463" x2="516" y2="463"/>
<line x1="460" y1="571" x2="516" y2="571"/>
<line x1="40" y1="36" x2="40" y2="560"/>
<line x1="71" y1="36" x2="71" y2="474"/>
<line x1="216" y1="88" x2="216" y2="452"/>
<line x1="244" y1="158" x2="244" y2="582"/>
<circle cx="40" cy="88" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="158" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="40" cy="236" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="258" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="216" cy="344" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="244" cy="366" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="216" cy="452" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="474" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="40" cy="560" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="244" cy="582" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="216" cy="88" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="244" cy="158" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="178" y="81" text-anchor="start" font-size="13">NA</text>
<text x="178" y="151" text-anchor="start" font-size="13">NB</text>
<text x="524" y="253" text-anchor="start">Y<tspan dy="4" font-size="12">3</tspan></text>
<text x="524" y="361" text-anchor="start">Y<tspan dy="4" font-size="12">0</tspan></text>
<text x="524" y="469" text-anchor="start">Y<tspan dy="4" font-size="12">1</tspan></text>
<text x="524" y="577" text-anchor="start">Y<tspan dy="4" font-size="12">2</tspan></text>
<text x="40" y="28" text-anchor="middle" font-size="16">A</text>
<text x="71" y="28" text-anchor="middle" font-size="16">B</text>
</g>
</svg>
</div>

$\mathbf{Sol}^{n}$

- $\mathit{NA} = \overline{A}$
- $\mathit{NB} = \overline{B}$
- $\mathit{Y0} = \mathit{NA}\,\mathit{NB}$
- $\mathit{Y1} = \mathit{NA}\,B$
- $\mathit{Y2} = A\,\mathit{NB}$
- $\mathit{Y3} = A\,B$

$\mathbf{Ans}\quad \text{โค้ดต่อไปนี้}$

```verilog
module Dec2to4 (Y3, Y2, Y1, Y0, A, B);
output Y3, Y2, Y1, Y0;
input A, B;
wire NA, NB;
not (NA, A);
not (NB, B);
and (Y0, NA, NB);
and (Y1, NA, B);
and (Y2, A, NB);
and (Y3, A, B);
endmodule
```

### ข้อ 4  โมดูล Dec2to4 ต่อไปนี้ทำหน้าที่อะไร จงเขียนวงจร ตารางความจริง และสมการของเอาต์พุต {part=a; case=c11; style=flow}

```verilog
module Dec2to4 (Y3, Y2, Y1, Y0, A, B);
output Y3, Y2, Y1, Y0;
input A, B;
assign Y0 = ~A & ~B;
assign Y1 = ~A & B;
assign Y2 = A & ~B;
assign Y3 = A & B;
endmodule
```

$\mathbf{Sol}^{n}$

- `assign Y0 = ~A & ~B` : $\mathit{Y0} = \overline{A}\,\overline{B}$
- `assign Y1 = ~A & B` : $\mathit{Y1} = \overline{A}\,B$
- `assign Y2 = A & ~B` : $\mathit{Y2} = A\,\overline{B}$
- `assign Y3 = A & B` : $\mathit{Y3} = A\,B$

$\mathbf{Ans}\quad \begin{aligned}\mathit{Y0} &= \overline{A}\,\overline{B} \\ \mathit{Y1} &= \overline{A}\,B \\ \mathit{Y2} &= A\,\overline{B} \\ \mathit{Y3} &= A\,B\end{aligned}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="612" height="654" viewBox="0 0 612 654" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<polygon points="138,76 138,100 160,88"/>
<circle cx="165" cy="88" r="5"/>
<path d="M40,88 L66.5,88 A4.5,4.5 0 0 1 75.5,88 L138,88"/>
<polygon points="138,146 138,170 160,158"/>
<circle cx="165" cy="158" r="5"/>
<line x1="71" y1="158" x2="138" y2="158"/>
<path d="M138,214 H164 A26,33 0 0 1 164,280 H138 Z"/>
<path d="M40,236 L66.5,236 A4.5,4.5 0 0 1 75.5,236 L138,236"/>
<line x1="71" y1="258" x2="138" y2="258"/>
<line x1="170" y1="88" x2="216" y2="88"/>
<path d="M170,158 L211.5,158 A4.5,4.5 0 0 1 220.5,158 L244,158"/>
<path d="M190,247 L211.5,247 A4.5,4.5 0 0 1 220.5,247 L239.5,247 A4.5,4.5 0 0 1 248.5,247 L272,247"/>
<path d="M326,322 H352 A26,33 0 0 1 352,388 H326 Z"/>
<path d="M216,344 L239.5,344 A4.5,4.5 0 0 1 248.5,344 L326,344"/>
<line x1="244" y1="366" x2="326" y2="366"/>
<path d="M326,430 H352 A26,33 0 0 1 352,496 H326 Z"/>
<path d="M216,452 L239.5,452 A4.5,4.5 0 0 1 248.5,452 L326,452"/>
<path d="M71,474 L239.5,474 A4.5,4.5 0 0 1 248.5,474 L326,474"/>
<path d="M326,538 H352 A26,33 0 0 1 352,604 H326 Z"/>
<path d="M40,560 L239.5,560 A4.5,4.5 0 0 1 248.5,560 L326,560"/>
<line x1="244" y1="582" x2="326" y2="582"/>
<line x1="378" y1="355" x2="404" y2="355"/>
<line x1="378" y1="463" x2="432" y2="463"/>
<line x1="378" y1="571" x2="460" y2="571"/>
<line x1="272" y1="247" x2="516" y2="247"/>
<line x1="404" y1="355" x2="516" y2="355"/>
<line x1="432" y1="463" x2="516" y2="463"/>
<line x1="460" y1="571" x2="516" y2="571"/>
<line x1="40" y1="36" x2="40" y2="560"/>
<line x1="71" y1="36" x2="71" y2="474"/>
<line x1="216" y1="88" x2="216" y2="452"/>
<line x1="244" y1="158" x2="244" y2="582"/>
<circle cx="40" cy="88" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="158" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="40" cy="236" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="258" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="216" cy="344" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="244" cy="366" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="216" cy="452" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="474" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="40" cy="560" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="244" cy="582" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="216" cy="88" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="244" cy="158" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="524" y="253" text-anchor="start">Y<tspan dy="4" font-size="12">3</tspan></text>
<text x="524" y="361" text-anchor="start">Y<tspan dy="4" font-size="12">0</tspan></text>
<text x="524" y="469" text-anchor="start">Y<tspan dy="4" font-size="12">1</tspan></text>
<text x="524" y="577" text-anchor="start">Y<tspan dy="4" font-size="12">2</tspan></text>
<text x="40" y="28" text-anchor="middle" font-size="16">A</text>
<text x="71" y="28" text-anchor="middle" font-size="16">B</text>
</g>
</svg>
</div>

### ข้อ 4  จงเขียนโมดูล Verilog แบบ Dataflow ของวงจรในรูป ($\mathit{Y0} = \overline{A}\,\overline{B}$, $\mathit{Y1} = \overline{A}\,B$, $\mathit{Y2} = A\,\overline{B}$, $\mathit{Y3} = A\,B$) {part=b; case=c11; style=flow}

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="612" height="654" viewBox="0 0 612 654" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<polygon points="138,76 138,100 160,88"/>
<circle cx="165" cy="88" r="5"/>
<path d="M40,88 L66.5,88 A4.5,4.5 0 0 1 75.5,88 L138,88"/>
<polygon points="138,146 138,170 160,158"/>
<circle cx="165" cy="158" r="5"/>
<line x1="71" y1="158" x2="138" y2="158"/>
<path d="M138,214 H164 A26,33 0 0 1 164,280 H138 Z"/>
<path d="M40,236 L66.5,236 A4.5,4.5 0 0 1 75.5,236 L138,236"/>
<line x1="71" y1="258" x2="138" y2="258"/>
<line x1="170" y1="88" x2="216" y2="88"/>
<path d="M170,158 L211.5,158 A4.5,4.5 0 0 1 220.5,158 L244,158"/>
<path d="M190,247 L211.5,247 A4.5,4.5 0 0 1 220.5,247 L239.5,247 A4.5,4.5 0 0 1 248.5,247 L272,247"/>
<path d="M326,322 H352 A26,33 0 0 1 352,388 H326 Z"/>
<path d="M216,344 L239.5,344 A4.5,4.5 0 0 1 248.5,344 L326,344"/>
<line x1="244" y1="366" x2="326" y2="366"/>
<path d="M326,430 H352 A26,33 0 0 1 352,496 H326 Z"/>
<path d="M216,452 L239.5,452 A4.5,4.5 0 0 1 248.5,452 L326,452"/>
<path d="M71,474 L239.5,474 A4.5,4.5 0 0 1 248.5,474 L326,474"/>
<path d="M326,538 H352 A26,33 0 0 1 352,604 H326 Z"/>
<path d="M40,560 L239.5,560 A4.5,4.5 0 0 1 248.5,560 L326,560"/>
<line x1="244" y1="582" x2="326" y2="582"/>
<line x1="378" y1="355" x2="404" y2="355"/>
<line x1="378" y1="463" x2="432" y2="463"/>
<line x1="378" y1="571" x2="460" y2="571"/>
<line x1="272" y1="247" x2="516" y2="247"/>
<line x1="404" y1="355" x2="516" y2="355"/>
<line x1="432" y1="463" x2="516" y2="463"/>
<line x1="460" y1="571" x2="516" y2="571"/>
<line x1="40" y1="36" x2="40" y2="560"/>
<line x1="71" y1="36" x2="71" y2="474"/>
<line x1="216" y1="88" x2="216" y2="452"/>
<line x1="244" y1="158" x2="244" y2="582"/>
<circle cx="40" cy="88" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="158" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="40" cy="236" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="258" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="216" cy="344" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="244" cy="366" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="216" cy="452" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="474" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="40" cy="560" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="244" cy="582" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="216" cy="88" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="244" cy="158" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="178" y="81" text-anchor="start" font-size="13">NA</text>
<text x="178" y="151" text-anchor="start" font-size="13">NB</text>
<text x="524" y="253" text-anchor="start">Y<tspan dy="4" font-size="12">3</tspan></text>
<text x="524" y="361" text-anchor="start">Y<tspan dy="4" font-size="12">0</tspan></text>
<text x="524" y="469" text-anchor="start">Y<tspan dy="4" font-size="12">1</tspan></text>
<text x="524" y="577" text-anchor="start">Y<tspan dy="4" font-size="12">2</tspan></text>
<text x="40" y="28" text-anchor="middle" font-size="16">A</text>
<text x="71" y="28" text-anchor="middle" font-size="16">B</text>
</g>
</svg>
</div>

$\mathbf{Sol}^{n}$

- $\mathit{Y0} = \overline{A}\,\overline{B}$
- $\mathit{Y1} = \overline{A}\,B$
- $\mathit{Y2} = A\,\overline{B}$
- $\mathit{Y3} = A\,B$

$\mathbf{Ans}\quad \text{โค้ดต่อไปนี้}$

```verilog
module Dec2to4 (Y3, Y2, Y1, Y0, A, B);
output Y3, Y2, Y1, Y0;
input A, B;
assign Y0 = ~A & ~B;
assign Y1 = ~A & B;
assign Y2 = A & ~B;
assign Y3 = A & B;
endmodule
```

### ข้อ 4  โมดูล Demux1to4 ต่อไปนี้ทำหน้าที่อะไร จงเขียนวงจร ตารางความจริง และสมการของเอาต์พุต {part=a; case=c12; style=struct}

```verilog
module Demux1to4 (Y3, Y2, Y1, Y0, D, S1, S0);
output Y3, Y2, Y1, Y0;
input D, S1, S0;
wire NS1, NS0;
not (NS1, S1);
not (NS0, S0);
and (Y0, D, NS1, NS0);
and (Y1, D, NS1, S0);
and (Y2, D, S1, NS0);
and (Y3, D, S1, S0);
endmodule
```

$\mathbf{Sol}^{n}$

- `not (NS1, S1)` : $\mathit{NS1} = \overline{\mathit{S1}}$
- `not (NS0, S0)` : $\mathit{NS0} = \overline{\mathit{S0}}$
- `and (Y0, D, NS1, NS0)` : $\mathit{Y0} = D\,\mathit{NS1}\,\mathit{NS0}$
- `and (Y1, D, NS1, S0)` : $\mathit{Y1} = D\,\mathit{NS1}\,\mathit{S0}$
- `and (Y2, D, S1, NS0)` : $\mathit{Y2} = D\,\mathit{S1}\,\mathit{NS0}$
- `and (Y3, D, S1, S0)` : $\mathit{Y3} = D\,\mathit{S1}\,\mathit{S0}$

$\mathbf{Ans}\quad \begin{aligned}\mathit{Y0} &= D\,\overline{\mathit{S1}}\,\overline{\mathit{S0}} \\ \mathit{Y1} &= D\,\overline{\mathit{S1}}\,\mathit{S0} \\ \mathit{Y2} &= D\,\mathit{S1}\,\overline{\mathit{S0}} \\ \mathit{Y3} &= D\,\mathit{S1}\,\mathit{S0}\end{aligned}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="671" height="742" viewBox="0 0 671 742" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<polygon points="196,76 196,100 218,88"/>
<circle cx="223" cy="88" r="5"/>
<path d="M80,88 L115.5,88 A4.5,4.5 0 0 1 124.5,88 L196,88"/>
<polygon points="196,146 196,170 218,158"/>
<circle cx="223" cy="158" r="5"/>
<line x1="120" y1="158" x2="196" y2="158"/>
<path d="M196,214 H222 A26,44 0 0 1 222,302 H196 Z"/>
<path d="M40,236 L75.5,236 A4.5,4.5 0 0 1 84.5,236 L115.5,236 A4.5,4.5 0 0 1 124.5,236 L196,236"/>
<path d="M80,258 L115.5,258 A4.5,4.5 0 0 1 124.5,258 L196,258"/>
<line x1="120" y1="280" x2="196" y2="280"/>
<line x1="228" y1="88" x2="276" y2="88"/>
<path d="M228,158 L271.5,158 A4.5,4.5 0 0 1 280.5,158 L304,158"/>
<path d="M248,258 L271.5,258 A4.5,4.5 0 0 1 280.5,258 L299.5,258 A4.5,4.5 0 0 1 308.5,258 L332,258"/>
<path d="M386,344 H412 A26,44 0 0 1 412,432 H386 Z"/>
<path d="M40,366 L75.5,366 A4.5,4.5 0 0 1 84.5,366 L115.5,366 A4.5,4.5 0 0 1 124.5,366 L271.5,366 A4.5,4.5 0 0 1 280.5,366 L299.5,366 A4.5,4.5 0 0 1 308.5,366 L386,366"/>
<path d="M276,388 L299.5,388 A4.5,4.5 0 0 1 308.5,388 L386,388"/>
<line x1="304" y1="410" x2="386" y2="410"/>
<path d="M386,474 H412 A26,44 0 0 1 412,562 H386 Z"/>
<path d="M40,496 L75.5,496 A4.5,4.5 0 0 1 84.5,496 L115.5,496 A4.5,4.5 0 0 1 124.5,496 L271.5,496 A4.5,4.5 0 0 1 280.5,496 L299.5,496 A4.5,4.5 0 0 1 308.5,496 L386,496"/>
<path d="M276,518 L299.5,518 A4.5,4.5 0 0 1 308.5,518 L386,518"/>
<path d="M120,540 L299.5,540 A4.5,4.5 0 0 1 308.5,540 L386,540"/>
<path d="M386,604 H412 A26,44 0 0 1 412,692 H386 Z"/>
<path d="M40,626 L75.5,626 A4.5,4.5 0 0 1 84.5,626 L299.5,626 A4.5,4.5 0 0 1 308.5,626 L386,626"/>
<path d="M80,648 L299.5,648 A4.5,4.5 0 0 1 308.5,648 L386,648"/>
<line x1="304" y1="670" x2="386" y2="670"/>
<line x1="438" y1="388" x2="464" y2="388"/>
<line x1="438" y1="518" x2="492" y2="518"/>
<line x1="438" y1="648" x2="520" y2="648"/>
<line x1="332" y1="258" x2="576" y2="258"/>
<line x1="464" y1="388" x2="576" y2="388"/>
<line x1="492" y1="518" x2="576" y2="518"/>
<line x1="520" y1="648" x2="576" y2="648"/>
<line x1="40" y1="36" x2="40" y2="626"/>
<line x1="80" y1="36" x2="80" y2="648"/>
<line x1="120" y1="36" x2="120" y2="540"/>
<line x1="276" y1="88" x2="276" y2="518"/>
<line x1="304" y1="158" x2="304" y2="670"/>
<circle cx="80" cy="88" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="120" cy="158" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="40" cy="236" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="80" cy="258" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="120" cy="280" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="40" cy="366" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="276" cy="388" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="304" cy="410" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="40" cy="496" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="276" cy="518" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="120" cy="540" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="40" cy="626" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="80" cy="648" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="304" cy="670" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="276" cy="88" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="304" cy="158" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="236" y="81" text-anchor="start" font-size="13">NS1</text>
<text x="236" y="151" text-anchor="start" font-size="13">NS0</text>
<text x="584" y="264" text-anchor="start">Y<tspan dy="4" font-size="12">3</tspan></text>
<text x="584" y="394" text-anchor="start">Y<tspan dy="4" font-size="12">0</tspan></text>
<text x="584" y="524" text-anchor="start">Y<tspan dy="4" font-size="12">1</tspan></text>
<text x="584" y="654" text-anchor="start">Y<tspan dy="4" font-size="12">2</tspan></text>
<text x="40" y="28" text-anchor="middle" font-size="16">D</text>
<text x="80" y="28" text-anchor="middle" font-size="16">S<tspan dy="4" font-size="10">1</tspan></text>
<text x="120" y="28" text-anchor="middle" font-size="16">S<tspan dy="4" font-size="10">0</tspan></text>
</g>
</svg>
</div>

### ข้อ 4  จงเขียนโมดูล Verilog แบบ Structural ของวงจรในรูป ($\mathit{Y0} = D\,\overline{\mathit{S1}}\,\overline{\mathit{S0}}$, $\mathit{Y1} = D\,\overline{\mathit{S1}}\,\mathit{S0}$, $\mathit{Y2} = D\,\mathit{S1}\,\overline{\mathit{S0}}$, $\mathit{Y3} = D\,\mathit{S1}\,\mathit{S0}$) {part=b; case=c12; style=struct}

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="671" height="742" viewBox="0 0 671 742" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<polygon points="196,76 196,100 218,88"/>
<circle cx="223" cy="88" r="5"/>
<path d="M80,88 L115.5,88 A4.5,4.5 0 0 1 124.5,88 L196,88"/>
<polygon points="196,146 196,170 218,158"/>
<circle cx="223" cy="158" r="5"/>
<line x1="120" y1="158" x2="196" y2="158"/>
<path d="M196,214 H222 A26,44 0 0 1 222,302 H196 Z"/>
<path d="M40,236 L75.5,236 A4.5,4.5 0 0 1 84.5,236 L115.5,236 A4.5,4.5 0 0 1 124.5,236 L196,236"/>
<path d="M80,258 L115.5,258 A4.5,4.5 0 0 1 124.5,258 L196,258"/>
<line x1="120" y1="280" x2="196" y2="280"/>
<line x1="228" y1="88" x2="276" y2="88"/>
<path d="M228,158 L271.5,158 A4.5,4.5 0 0 1 280.5,158 L304,158"/>
<path d="M248,258 L271.5,258 A4.5,4.5 0 0 1 280.5,258 L299.5,258 A4.5,4.5 0 0 1 308.5,258 L332,258"/>
<path d="M386,344 H412 A26,44 0 0 1 412,432 H386 Z"/>
<path d="M40,366 L75.5,366 A4.5,4.5 0 0 1 84.5,366 L115.5,366 A4.5,4.5 0 0 1 124.5,366 L271.5,366 A4.5,4.5 0 0 1 280.5,366 L299.5,366 A4.5,4.5 0 0 1 308.5,366 L386,366"/>
<path d="M276,388 L299.5,388 A4.5,4.5 0 0 1 308.5,388 L386,388"/>
<line x1="304" y1="410" x2="386" y2="410"/>
<path d="M386,474 H412 A26,44 0 0 1 412,562 H386 Z"/>
<path d="M40,496 L75.5,496 A4.5,4.5 0 0 1 84.5,496 L115.5,496 A4.5,4.5 0 0 1 124.5,496 L271.5,496 A4.5,4.5 0 0 1 280.5,496 L299.5,496 A4.5,4.5 0 0 1 308.5,496 L386,496"/>
<path d="M276,518 L299.5,518 A4.5,4.5 0 0 1 308.5,518 L386,518"/>
<path d="M120,540 L299.5,540 A4.5,4.5 0 0 1 308.5,540 L386,540"/>
<path d="M386,604 H412 A26,44 0 0 1 412,692 H386 Z"/>
<path d="M40,626 L75.5,626 A4.5,4.5 0 0 1 84.5,626 L299.5,626 A4.5,4.5 0 0 1 308.5,626 L386,626"/>
<path d="M80,648 L299.5,648 A4.5,4.5 0 0 1 308.5,648 L386,648"/>
<line x1="304" y1="670" x2="386" y2="670"/>
<line x1="438" y1="388" x2="464" y2="388"/>
<line x1="438" y1="518" x2="492" y2="518"/>
<line x1="438" y1="648" x2="520" y2="648"/>
<line x1="332" y1="258" x2="576" y2="258"/>
<line x1="464" y1="388" x2="576" y2="388"/>
<line x1="492" y1="518" x2="576" y2="518"/>
<line x1="520" y1="648" x2="576" y2="648"/>
<line x1="40" y1="36" x2="40" y2="626"/>
<line x1="80" y1="36" x2="80" y2="648"/>
<line x1="120" y1="36" x2="120" y2="540"/>
<line x1="276" y1="88" x2="276" y2="518"/>
<line x1="304" y1="158" x2="304" y2="670"/>
<circle cx="80" cy="88" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="120" cy="158" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="40" cy="236" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="80" cy="258" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="120" cy="280" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="40" cy="366" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="276" cy="388" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="304" cy="410" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="40" cy="496" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="276" cy="518" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="120" cy="540" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="40" cy="626" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="80" cy="648" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="304" cy="670" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="276" cy="88" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="304" cy="158" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="236" y="81" text-anchor="start" font-size="13">NS1</text>
<text x="236" y="151" text-anchor="start" font-size="13">NS0</text>
<text x="584" y="264" text-anchor="start">Y<tspan dy="4" font-size="12">3</tspan></text>
<text x="584" y="394" text-anchor="start">Y<tspan dy="4" font-size="12">0</tspan></text>
<text x="584" y="524" text-anchor="start">Y<tspan dy="4" font-size="12">1</tspan></text>
<text x="584" y="654" text-anchor="start">Y<tspan dy="4" font-size="12">2</tspan></text>
<text x="40" y="28" text-anchor="middle" font-size="16">D</text>
<text x="80" y="28" text-anchor="middle" font-size="16">S<tspan dy="4" font-size="10">1</tspan></text>
<text x="120" y="28" text-anchor="middle" font-size="16">S<tspan dy="4" font-size="10">0</tspan></text>
</g>
</svg>
</div>

$\mathbf{Sol}^{n}$

- $\mathit{NS1} = \overline{\mathit{S1}}$
- $\mathit{NS0} = \overline{\mathit{S0}}$
- $\mathit{Y0} = D\,\mathit{NS1}\,\mathit{NS0}$
- $\mathit{Y1} = D\,\mathit{NS1}\,\mathit{S0}$
- $\mathit{Y2} = D\,\mathit{S1}\,\mathit{NS0}$
- $\mathit{Y3} = D\,\mathit{S1}\,\mathit{S0}$

$\mathbf{Ans}\quad \text{โค้ดต่อไปนี้}$

```verilog
module Demux1to4 (Y3, Y2, Y1, Y0, D, S1, S0);
output Y3, Y2, Y1, Y0;
input D, S1, S0;
wire NS1, NS0;
not (NS1, S1);
not (NS0, S0);
and (Y0, D, NS1, NS0);
and (Y1, D, NS1, S0);
and (Y2, D, S1, NS0);
and (Y3, D, S1, S0);
endmodule
```

### ข้อ 4  โมดูล Demux1to4 ต่อไปนี้ทำหน้าที่อะไร จงเขียนวงจร ตารางความจริง และสมการของเอาต์พุต {part=a; case=c12; style=flow}

```verilog
module Demux1to4 (Y3, Y2, Y1, Y0, D, S1, S0);
output Y3, Y2, Y1, Y0;
input D, S1, S0;
assign Y0 = D & ~S1 & ~S0;
assign Y1 = D & ~S1 & S0;
assign Y2 = D & S1 & ~S0;
assign Y3 = D & S1 & S0;
endmodule
```

$\mathbf{Sol}^{n}$

- `assign Y0 = D & ~S1 & ~S0` : $\mathit{Y0} = D\,\overline{\mathit{S1}}\,\overline{\mathit{S0}}$
- `assign Y1 = D & ~S1 & S0` : $\mathit{Y1} = D\,\overline{\mathit{S1}}\,\mathit{S0}$
- `assign Y2 = D & S1 & ~S0` : $\mathit{Y2} = D\,\mathit{S1}\,\overline{\mathit{S0}}$
- `assign Y3 = D & S1 & S0` : $\mathit{Y3} = D\,\mathit{S1}\,\mathit{S0}$

$\mathbf{Ans}\quad \begin{aligned}\mathit{Y0} &= D\,\overline{\mathit{S1}}\,\overline{\mathit{S0}} \\ \mathit{Y1} &= D\,\overline{\mathit{S1}}\,\mathit{S0} \\ \mathit{Y2} &= D\,\mathit{S1}\,\overline{\mathit{S0}} \\ \mathit{Y3} &= D\,\mathit{S1}\,\mathit{S0}\end{aligned}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="670" height="742" viewBox="0 0 670 742" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<polygon points="196,76 196,100 218,88"/>
<circle cx="223" cy="88" r="5"/>
<path d="M80,88 L115.5,88 A4.5,4.5 0 0 1 124.5,88 L196,88"/>
<polygon points="196,146 196,170 218,158"/>
<circle cx="223" cy="158" r="5"/>
<line x1="120" y1="158" x2="196" y2="158"/>
<path d="M196,214 H222 A26,44 0 0 1 222,302 H196 Z"/>
<path d="M40,236 L75.5,236 A4.5,4.5 0 0 1 84.5,236 L115.5,236 A4.5,4.5 0 0 1 124.5,236 L196,236"/>
<path d="M80,258 L115.5,258 A4.5,4.5 0 0 1 124.5,258 L196,258"/>
<line x1="120" y1="280" x2="196" y2="280"/>
<line x1="228" y1="88" x2="274" y2="88"/>
<path d="M228,158 L269.5,158 A4.5,4.5 0 0 1 278.5,158 L302,158"/>
<path d="M248,258 L269.5,258 A4.5,4.5 0 0 1 278.5,258 L297.5,258 A4.5,4.5 0 0 1 306.5,258 L330,258"/>
<path d="M384,344 H410 A26,44 0 0 1 410,432 H384 Z"/>
<path d="M40,366 L75.5,366 A4.5,4.5 0 0 1 84.5,366 L115.5,366 A4.5,4.5 0 0 1 124.5,366 L269.5,366 A4.5,4.5 0 0 1 278.5,366 L297.5,366 A4.5,4.5 0 0 1 306.5,366 L384,366"/>
<path d="M274,388 L297.5,388 A4.5,4.5 0 0 1 306.5,388 L384,388"/>
<line x1="302" y1="410" x2="384" y2="410"/>
<path d="M384,474 H410 A26,44 0 0 1 410,562 H384 Z"/>
<path d="M40,496 L75.5,496 A4.5,4.5 0 0 1 84.5,496 L115.5,496 A4.5,4.5 0 0 1 124.5,496 L269.5,496 A4.5,4.5 0 0 1 278.5,496 L297.5,496 A4.5,4.5 0 0 1 306.5,496 L384,496"/>
<path d="M274,518 L297.5,518 A4.5,4.5 0 0 1 306.5,518 L384,518"/>
<path d="M120,540 L297.5,540 A4.5,4.5 0 0 1 306.5,540 L384,540"/>
<path d="M384,604 H410 A26,44 0 0 1 410,692 H384 Z"/>
<path d="M40,626 L75.5,626 A4.5,4.5 0 0 1 84.5,626 L297.5,626 A4.5,4.5 0 0 1 306.5,626 L384,626"/>
<path d="M80,648 L297.5,648 A4.5,4.5 0 0 1 306.5,648 L384,648"/>
<line x1="302" y1="670" x2="384" y2="670"/>
<line x1="436" y1="388" x2="462" y2="388"/>
<line x1="436" y1="518" x2="490" y2="518"/>
<line x1="436" y1="648" x2="518" y2="648"/>
<line x1="330" y1="258" x2="574" y2="258"/>
<line x1="462" y1="388" x2="574" y2="388"/>
<line x1="490" y1="518" x2="574" y2="518"/>
<line x1="518" y1="648" x2="574" y2="648"/>
<line x1="40" y1="36" x2="40" y2="626"/>
<line x1="80" y1="36" x2="80" y2="648"/>
<line x1="120" y1="36" x2="120" y2="540"/>
<line x1="274" y1="88" x2="274" y2="518"/>
<line x1="302" y1="158" x2="302" y2="670"/>
<circle cx="80" cy="88" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="120" cy="158" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="40" cy="236" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="80" cy="258" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="120" cy="280" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="40" cy="366" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="274" cy="388" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="302" cy="410" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="40" cy="496" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="274" cy="518" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="120" cy="540" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="40" cy="626" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="80" cy="648" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="302" cy="670" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="274" cy="88" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="302" cy="158" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="582" y="264" text-anchor="start">Y<tspan dy="4" font-size="12">3</tspan></text>
<text x="582" y="394" text-anchor="start">Y<tspan dy="4" font-size="12">0</tspan></text>
<text x="582" y="524" text-anchor="start">Y<tspan dy="4" font-size="12">1</tspan></text>
<text x="582" y="654" text-anchor="start">Y<tspan dy="4" font-size="12">2</tspan></text>
<text x="40" y="28" text-anchor="middle" font-size="16">D</text>
<text x="80" y="28" text-anchor="middle" font-size="16">S<tspan dy="4" font-size="10">1</tspan></text>
<text x="120" y="28" text-anchor="middle" font-size="16">S<tspan dy="4" font-size="10">0</tspan></text>
</g>
</svg>
</div>

### ข้อ 4  จงเขียนโมดูล Verilog แบบ Dataflow ของวงจรในรูป ($\mathit{Y0} = D\,\overline{\mathit{S1}}\,\overline{\mathit{S0}}$, $\mathit{Y1} = D\,\overline{\mathit{S1}}\,\mathit{S0}$, $\mathit{Y2} = D\,\mathit{S1}\,\overline{\mathit{S0}}$, $\mathit{Y3} = D\,\mathit{S1}\,\mathit{S0}$) {part=b; case=c12; style=flow}

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="671" height="742" viewBox="0 0 671 742" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<polygon points="196,76 196,100 218,88"/>
<circle cx="223" cy="88" r="5"/>
<path d="M80,88 L115.5,88 A4.5,4.5 0 0 1 124.5,88 L196,88"/>
<polygon points="196,146 196,170 218,158"/>
<circle cx="223" cy="158" r="5"/>
<line x1="120" y1="158" x2="196" y2="158"/>
<path d="M196,214 H222 A26,44 0 0 1 222,302 H196 Z"/>
<path d="M40,236 L75.5,236 A4.5,4.5 0 0 1 84.5,236 L115.5,236 A4.5,4.5 0 0 1 124.5,236 L196,236"/>
<path d="M80,258 L115.5,258 A4.5,4.5 0 0 1 124.5,258 L196,258"/>
<line x1="120" y1="280" x2="196" y2="280"/>
<line x1="228" y1="88" x2="276" y2="88"/>
<path d="M228,158 L271.5,158 A4.5,4.5 0 0 1 280.5,158 L304,158"/>
<path d="M248,258 L271.5,258 A4.5,4.5 0 0 1 280.5,258 L299.5,258 A4.5,4.5 0 0 1 308.5,258 L332,258"/>
<path d="M386,344 H412 A26,44 0 0 1 412,432 H386 Z"/>
<path d="M40,366 L75.5,366 A4.5,4.5 0 0 1 84.5,366 L115.5,366 A4.5,4.5 0 0 1 124.5,366 L271.5,366 A4.5,4.5 0 0 1 280.5,366 L299.5,366 A4.5,4.5 0 0 1 308.5,366 L386,366"/>
<path d="M276,388 L299.5,388 A4.5,4.5 0 0 1 308.5,388 L386,388"/>
<line x1="304" y1="410" x2="386" y2="410"/>
<path d="M386,474 H412 A26,44 0 0 1 412,562 H386 Z"/>
<path d="M40,496 L75.5,496 A4.5,4.5 0 0 1 84.5,496 L115.5,496 A4.5,4.5 0 0 1 124.5,496 L271.5,496 A4.5,4.5 0 0 1 280.5,496 L299.5,496 A4.5,4.5 0 0 1 308.5,496 L386,496"/>
<path d="M276,518 L299.5,518 A4.5,4.5 0 0 1 308.5,518 L386,518"/>
<path d="M120,540 L299.5,540 A4.5,4.5 0 0 1 308.5,540 L386,540"/>
<path d="M386,604 H412 A26,44 0 0 1 412,692 H386 Z"/>
<path d="M40,626 L75.5,626 A4.5,4.5 0 0 1 84.5,626 L299.5,626 A4.5,4.5 0 0 1 308.5,626 L386,626"/>
<path d="M80,648 L299.5,648 A4.5,4.5 0 0 1 308.5,648 L386,648"/>
<line x1="304" y1="670" x2="386" y2="670"/>
<line x1="438" y1="388" x2="464" y2="388"/>
<line x1="438" y1="518" x2="492" y2="518"/>
<line x1="438" y1="648" x2="520" y2="648"/>
<line x1="332" y1="258" x2="576" y2="258"/>
<line x1="464" y1="388" x2="576" y2="388"/>
<line x1="492" y1="518" x2="576" y2="518"/>
<line x1="520" y1="648" x2="576" y2="648"/>
<line x1="40" y1="36" x2="40" y2="626"/>
<line x1="80" y1="36" x2="80" y2="648"/>
<line x1="120" y1="36" x2="120" y2="540"/>
<line x1="276" y1="88" x2="276" y2="518"/>
<line x1="304" y1="158" x2="304" y2="670"/>
<circle cx="80" cy="88" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="120" cy="158" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="40" cy="236" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="80" cy="258" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="120" cy="280" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="40" cy="366" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="276" cy="388" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="304" cy="410" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="40" cy="496" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="276" cy="518" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="120" cy="540" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="40" cy="626" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="80" cy="648" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="304" cy="670" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="276" cy="88" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="304" cy="158" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="236" y="81" text-anchor="start" font-size="13">NS1</text>
<text x="236" y="151" text-anchor="start" font-size="13">NS0</text>
<text x="584" y="264" text-anchor="start">Y<tspan dy="4" font-size="12">3</tspan></text>
<text x="584" y="394" text-anchor="start">Y<tspan dy="4" font-size="12">0</tspan></text>
<text x="584" y="524" text-anchor="start">Y<tspan dy="4" font-size="12">1</tspan></text>
<text x="584" y="654" text-anchor="start">Y<tspan dy="4" font-size="12">2</tspan></text>
<text x="40" y="28" text-anchor="middle" font-size="16">D</text>
<text x="80" y="28" text-anchor="middle" font-size="16">S<tspan dy="4" font-size="10">1</tspan></text>
<text x="120" y="28" text-anchor="middle" font-size="16">S<tspan dy="4" font-size="10">0</tspan></text>
</g>
</svg>
</div>

$\mathbf{Sol}^{n}$

- $\mathit{Y0} = D\,\overline{\mathit{S1}}\,\overline{\mathit{S0}}$
- $\mathit{Y1} = D\,\overline{\mathit{S1}}\,\mathit{S0}$
- $\mathit{Y2} = D\,\mathit{S1}\,\overline{\mathit{S0}}$
- $\mathit{Y3} = D\,\mathit{S1}\,\mathit{S0}$

$\mathbf{Ans}\quad \text{โค้ดต่อไปนี้}$

```verilog
module Demux1to4 (Y3, Y2, Y1, Y0, D, S1, S0);
output Y3, Y2, Y1, Y0;
input D, S1, S0;
assign Y0 = D & ~S1 & ~S0;
assign Y1 = D & ~S1 & S0;
assign Y2 = D & S1 & ~S0;
assign Y3 = D & S1 & S0;
endmodule
```

### ข้อ 4  โมดูล Parity3 ต่อไปนี้ทำหน้าที่อะไร จงเขียนวงจร ตารางความจริง และสมการของเอาต์พุต {part=a; case=c13; style=struct}

```verilog
module Parity3 (Y, A, B, C);
output Y;
input A, B, C;
wire P;
xor (P, A, B);
xor (Y, P, C);
endmodule
```

$\mathbf{Sol}^{n}$

- `xor (P, A, B)` : $P = A \oplus B$
- `xor (Y, P, C)` : $Y = P \oplus C$

$\mathbf{Ans}\quad \begin{aligned}Y &= A \oplus B \oplus C\end{aligned}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="571" height="298" viewBox="0 0 571 298" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<path d="M177,74 C199,74 225,90.5 237,107 C225,123.5 199,140 177,140 Q191,107 177,74 Z"/>
<path d="M169,74 Q183,107 169,140"/>
<path d="M40,96 L66.5,96 A4.5,4.5 0 0 1 75.5,96 L97.5,96 A4.5,4.5 0 0 1 106.5,96 L175.2,96"/>
<path d="M71,118 L97.5,118 A4.5,4.5 0 0 1 106.5,118 L175.2,118"/>
<line x1="237" y1="107" x2="271.1" y2="107"/>
<path d="M333.1,182 C355.1,182 381.1,198.5 393.1,215 C381.1,231.5 355.1,248 333.1,248 Q347.1,215 333.1,182 Z"/>
<path d="M325.1,182 Q339.1,215 325.1,248"/>
<line x1="271.1" y1="204" x2="331.3" y2="204"/>
<line x1="102" y1="226" x2="331.3" y2="226"/>
<line x1="393.1" y1="215" x2="419.1" y2="215"/>
<line x1="419.1" y1="215" x2="475.1" y2="215"/>
<line x1="40" y1="36" x2="40" y2="96"/>
<line x1="71" y1="36" x2="71" y2="118"/>
<line x1="102" y1="36" x2="102" y2="226"/>
<line x1="271.1" y1="107" x2="271.1" y2="204"/>
<circle cx="40" cy="96" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="118" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="271.1" cy="204" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="102" cy="226" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="271.1" cy="107" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="245" y="100" text-anchor="start" font-size="13">P</text>
<text x="483.1" y="221" text-anchor="start">Y</text>
<text x="40" y="28" text-anchor="middle" font-size="16">A</text>
<text x="71" y="28" text-anchor="middle" font-size="16">B</text>
<text x="102" y="28" text-anchor="middle" font-size="16">C</text>
</g>
</svg>
</div>

### ข้อ 4  จงเขียนโมดูล Verilog แบบ Structural ของวงจรในรูป ($Y = A \oplus B \oplus C$) {part=b; case=c13; style=struct}

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="571" height="298" viewBox="0 0 571 298" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<path d="M177,74 C199,74 225,90.5 237,107 C225,123.5 199,140 177,140 Q191,107 177,74 Z"/>
<path d="M169,74 Q183,107 169,140"/>
<path d="M40,96 L66.5,96 A4.5,4.5 0 0 1 75.5,96 L97.5,96 A4.5,4.5 0 0 1 106.5,96 L175.2,96"/>
<path d="M71,118 L97.5,118 A4.5,4.5 0 0 1 106.5,118 L175.2,118"/>
<line x1="237" y1="107" x2="271.1" y2="107"/>
<path d="M333.1,182 C355.1,182 381.1,198.5 393.1,215 C381.1,231.5 355.1,248 333.1,248 Q347.1,215 333.1,182 Z"/>
<path d="M325.1,182 Q339.1,215 325.1,248"/>
<line x1="271.1" y1="204" x2="331.3" y2="204"/>
<line x1="102" y1="226" x2="331.3" y2="226"/>
<line x1="393.1" y1="215" x2="419.1" y2="215"/>
<line x1="419.1" y1="215" x2="475.1" y2="215"/>
<line x1="40" y1="36" x2="40" y2="96"/>
<line x1="71" y1="36" x2="71" y2="118"/>
<line x1="102" y1="36" x2="102" y2="226"/>
<line x1="271.1" y1="107" x2="271.1" y2="204"/>
<circle cx="40" cy="96" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="118" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="271.1" cy="204" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="102" cy="226" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="271.1" cy="107" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="245" y="100" text-anchor="start" font-size="13">P</text>
<text x="483.1" y="221" text-anchor="start">Y</text>
<text x="40" y="28" text-anchor="middle" font-size="16">A</text>
<text x="71" y="28" text-anchor="middle" font-size="16">B</text>
<text x="102" y="28" text-anchor="middle" font-size="16">C</text>
</g>
</svg>
</div>

$\mathbf{Sol}^{n}$

- $P = A \oplus B$
- $Y = P \oplus C$

$\mathbf{Ans}\quad \text{โค้ดต่อไปนี้}$

```verilog
module Parity3 (Y, A, B, C);
output Y;
input A, B, C;
wire P;
xor (P, A, B);
xor (Y, P, C);
endmodule
```

### ข้อ 4  โมดูล Parity3 ต่อไปนี้ทำหน้าที่อะไร จงเขียนวงจร ตารางความจริง และสมการของเอาต์พุต {part=a; case=c13; style=flow}

```verilog
module Parity3 (Y, A, B, C);
output Y;
input A, B, C;
assign Y = A ^ B ^ C;
endmodule
```

$\mathbf{Sol}^{n}$

- `assign Y = A ^ B ^ C` : $Y = A \oplus B \oplus C$

$\mathbf{Ans}\quad \begin{aligned}Y &= A \oplus B \oplus C\end{aligned}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="415" height="212" viewBox="0 0 415 212" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<path d="M177,74 C199,74 225,96 237,118 C225,140 199,162 177,162 Q191,118 177,74 Z"/>
<path d="M169,74 Q183,118 169,162"/>
<path d="M40,96 L66.5,96 A4.5,4.5 0 0 1 75.5,96 L97.5,96 A4.5,4.5 0 0 1 106.5,96 L174.2,96"/>
<path d="M71,118 L97.5,118 A4.5,4.5 0 0 1 106.5,118 L176,118"/>
<line x1="102" y1="140" x2="174.2" y2="140"/>
<line x1="237" y1="118" x2="263" y2="118"/>
<line x1="263" y1="118" x2="319" y2="118"/>
<line x1="40" y1="36" x2="40" y2="96"/>
<line x1="71" y1="36" x2="71" y2="118"/>
<line x1="102" y1="36" x2="102" y2="140"/>
<circle cx="40" cy="96" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="118" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="102" cy="140" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="327" y="124" text-anchor="start">Y</text>
<text x="40" y="28" text-anchor="middle" font-size="16">A</text>
<text x="71" y="28" text-anchor="middle" font-size="16">B</text>
<text x="102" y="28" text-anchor="middle" font-size="16">C</text>
</g>
</svg>
</div>

### ข้อ 4  จงเขียนโมดูล Verilog แบบ Dataflow ของวงจรในรูป ($Y = A \oplus B \oplus C$) {part=b; case=c13; style=flow}

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="571" height="298" viewBox="0 0 571 298" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<path d="M177,74 C199,74 225,90.5 237,107 C225,123.5 199,140 177,140 Q191,107 177,74 Z"/>
<path d="M169,74 Q183,107 169,140"/>
<path d="M40,96 L66.5,96 A4.5,4.5 0 0 1 75.5,96 L97.5,96 A4.5,4.5 0 0 1 106.5,96 L175.2,96"/>
<path d="M71,118 L97.5,118 A4.5,4.5 0 0 1 106.5,118 L175.2,118"/>
<line x1="237" y1="107" x2="271.1" y2="107"/>
<path d="M333.1,182 C355.1,182 381.1,198.5 393.1,215 C381.1,231.5 355.1,248 333.1,248 Q347.1,215 333.1,182 Z"/>
<path d="M325.1,182 Q339.1,215 325.1,248"/>
<line x1="271.1" y1="204" x2="331.3" y2="204"/>
<line x1="102" y1="226" x2="331.3" y2="226"/>
<line x1="393.1" y1="215" x2="419.1" y2="215"/>
<line x1="419.1" y1="215" x2="475.1" y2="215"/>
<line x1="40" y1="36" x2="40" y2="96"/>
<line x1="71" y1="36" x2="71" y2="118"/>
<line x1="102" y1="36" x2="102" y2="226"/>
<line x1="271.1" y1="107" x2="271.1" y2="204"/>
<circle cx="40" cy="96" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="118" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="271.1" cy="204" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="102" cy="226" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="271.1" cy="107" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="245" y="100" text-anchor="start" font-size="13">P</text>
<text x="483.1" y="221" text-anchor="start">Y</text>
<text x="40" y="28" text-anchor="middle" font-size="16">A</text>
<text x="71" y="28" text-anchor="middle" font-size="16">B</text>
<text x="102" y="28" text-anchor="middle" font-size="16">C</text>
</g>
</svg>
</div>

$\mathbf{Sol}^{n}$

- $Y = A \oplus B \oplus C$

$\mathbf{Ans}\quad \text{โค้ดต่อไปนี้}$

```verilog
module Parity3 (Y, A, B, C);
output Y;
input A, B, C;
assign Y = A ^ B ^ C;
endmodule
```

### ข้อ 4  โมดูล Comp1 ต่อไปนี้ทำหน้าที่อะไร จงเขียนวงจร ตารางความจริง และสมการของเอาต์พุต {part=a; case=c14; style=struct}

```verilog
module Comp1 (Gt, Eq, Lt, A, B);
output Gt, Eq, Lt;
input A, B;
wire NA, NB;
not (NA, A);
not (NB, B);
and (Gt, A, NB);
xnor (Eq, A, B);
and (Lt, NA, B);
endmodule
```

$\mathbf{Sol}^{n}$

- `not (NA, A)` : $\mathit{NA} = \overline{A}$
- `not (NB, B)` : $\mathit{NB} = \overline{B}$
- `and (Gt, A, NB)` : $\mathit{Gt} = A\,\mathit{NB}$
- `xnor (Eq, A, B)` : $\mathit{Eq} = \overline{A \oplus B}$
- `and (Lt, NA, B)` : $\mathit{Lt} = \mathit{NA}\,B$

$\mathbf{Ans}\quad \begin{aligned}\mathit{Gt} &= A\,\overline{B} \\ \mathit{Eq} &= \overline{A \oplus B} \\ \mathit{Lt} &= \overline{A}\,B\end{aligned}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="610" height="546" viewBox="0 0 610 546" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<polygon points="138,76 138,100 160,88"/>
<circle cx="165" cy="88" r="5"/>
<path d="M40,88 L66.5,88 A4.5,4.5 0 0 1 75.5,88 L138,88"/>
<polygon points="138,146 138,170 160,158"/>
<circle cx="165" cy="158" r="5"/>
<line x1="71" y1="158" x2="138" y2="158"/>
<path d="M146,214 C168,214 194,230.5 206,247 C194,263.5 168,280 146,280 Q160,247 146,214 Z"/>
<path d="M138,214 Q152,247 138,280"/>
<circle cx="211" cy="247" r="5"/>
<path d="M40,236 L66.5,236 A4.5,4.5 0 0 1 75.5,236 L144.2,236"/>
<line x1="71" y1="258" x2="144.2" y2="258"/>
<line x1="170" y1="88" x2="242" y2="88"/>
<path d="M170,158 L237.5,158 A4.5,4.5 0 0 1 246.5,158 L270,158"/>
<path d="M216,247 L237.5,247 A4.5,4.5 0 0 1 246.5,247 L265.5,247 A4.5,4.5 0 0 1 274.5,247 L298,247"/>
<path d="M352,322 H378 A26,33 0 0 1 378,388 H352 Z"/>
<path d="M40,344 L66.5,344 A4.5,4.5 0 0 1 75.5,344 L237.5,344 A4.5,4.5 0 0 1 246.5,344 L265.5,344 A4.5,4.5 0 0 1 274.5,344 L352,344"/>
<line x1="270" y1="366" x2="352" y2="366"/>
<path d="M352,430 H378 A26,33 0 0 1 378,496 H352 Z"/>
<line x1="242" y1="452" x2="352" y2="452"/>
<line x1="71" y1="474" x2="352" y2="474"/>
<line x1="404" y1="355" x2="430" y2="355"/>
<line x1="404" y1="463" x2="458" y2="463"/>
<line x1="298" y1="247" x2="514" y2="247"/>
<line x1="430" y1="355" x2="514" y2="355"/>
<line x1="458" y1="463" x2="514" y2="463"/>
<line x1="40" y1="36" x2="40" y2="344"/>
<line x1="71" y1="36" x2="71" y2="474"/>
<line x1="242" y1="88" x2="242" y2="452"/>
<line x1="270" y1="158" x2="270" y2="366"/>
<circle cx="40" cy="88" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="158" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="40" cy="236" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="258" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="40" cy="344" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="366" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="242" cy="452" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="474" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="242" cy="88" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="158" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="178" y="81" text-anchor="start" font-size="13">NA</text>
<text x="178" y="151" text-anchor="start" font-size="13">NB</text>
<text x="522" y="253" text-anchor="start">Eq</text>
<text x="522" y="361" text-anchor="start">Gt</text>
<text x="522" y="469" text-anchor="start">Lt</text>
<text x="40" y="28" text-anchor="middle" font-size="16">A</text>
<text x="71" y="28" text-anchor="middle" font-size="16">B</text>
</g>
</svg>
</div>

### ข้อ 4  จงเขียนโมดูล Verilog แบบ Structural ของวงจรในรูป ($\mathit{Gt} = A\,\overline{B}$, $\mathit{Eq} = \overline{A \oplus B}$, $\mathit{Lt} = \overline{A}\,B$) {part=b; case=c14; style=struct}

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="610" height="546" viewBox="0 0 610 546" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<polygon points="138,76 138,100 160,88"/>
<circle cx="165" cy="88" r="5"/>
<path d="M40,88 L66.5,88 A4.5,4.5 0 0 1 75.5,88 L138,88"/>
<polygon points="138,146 138,170 160,158"/>
<circle cx="165" cy="158" r="5"/>
<line x1="71" y1="158" x2="138" y2="158"/>
<path d="M146,214 C168,214 194,230.5 206,247 C194,263.5 168,280 146,280 Q160,247 146,214 Z"/>
<path d="M138,214 Q152,247 138,280"/>
<circle cx="211" cy="247" r="5"/>
<path d="M40,236 L66.5,236 A4.5,4.5 0 0 1 75.5,236 L144.2,236"/>
<line x1="71" y1="258" x2="144.2" y2="258"/>
<line x1="170" y1="88" x2="242" y2="88"/>
<path d="M170,158 L237.5,158 A4.5,4.5 0 0 1 246.5,158 L270,158"/>
<path d="M216,247 L237.5,247 A4.5,4.5 0 0 1 246.5,247 L265.5,247 A4.5,4.5 0 0 1 274.5,247 L298,247"/>
<path d="M352,322 H378 A26,33 0 0 1 378,388 H352 Z"/>
<path d="M40,344 L66.5,344 A4.5,4.5 0 0 1 75.5,344 L237.5,344 A4.5,4.5 0 0 1 246.5,344 L265.5,344 A4.5,4.5 0 0 1 274.5,344 L352,344"/>
<line x1="270" y1="366" x2="352" y2="366"/>
<path d="M352,430 H378 A26,33 0 0 1 378,496 H352 Z"/>
<line x1="242" y1="452" x2="352" y2="452"/>
<line x1="71" y1="474" x2="352" y2="474"/>
<line x1="404" y1="355" x2="430" y2="355"/>
<line x1="404" y1="463" x2="458" y2="463"/>
<line x1="298" y1="247" x2="514" y2="247"/>
<line x1="430" y1="355" x2="514" y2="355"/>
<line x1="458" y1="463" x2="514" y2="463"/>
<line x1="40" y1="36" x2="40" y2="344"/>
<line x1="71" y1="36" x2="71" y2="474"/>
<line x1="242" y1="88" x2="242" y2="452"/>
<line x1="270" y1="158" x2="270" y2="366"/>
<circle cx="40" cy="88" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="158" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="40" cy="236" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="258" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="40" cy="344" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="366" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="242" cy="452" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="474" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="242" cy="88" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="158" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="178" y="81" text-anchor="start" font-size="13">NA</text>
<text x="178" y="151" text-anchor="start" font-size="13">NB</text>
<text x="522" y="253" text-anchor="start">Eq</text>
<text x="522" y="361" text-anchor="start">Gt</text>
<text x="522" y="469" text-anchor="start">Lt</text>
<text x="40" y="28" text-anchor="middle" font-size="16">A</text>
<text x="71" y="28" text-anchor="middle" font-size="16">B</text>
</g>
</svg>
</div>

$\mathbf{Sol}^{n}$

- $\mathit{NA} = \overline{A}$
- $\mathit{NB} = \overline{B}$
- $\mathit{Gt} = A\,\mathit{NB}$
- $\mathit{Eq} = \overline{A \oplus B}$
- $\mathit{Lt} = \mathit{NA}\,B$

$\mathbf{Ans}\quad \text{โค้ดต่อไปนี้}$

```verilog
module Comp1 (Gt, Eq, Lt, A, B);
output Gt, Eq, Lt;
input A, B;
wire NA, NB;
not (NA, A);
not (NB, B);
and (Gt, A, NB);
xnor (Eq, A, B);
and (Lt, NA, B);
endmodule
```

### ข้อ 4  โมดูล Comp1 ต่อไปนี้ทำหน้าที่อะไร จงเขียนวงจร ตารางความจริง และสมการของเอาต์พุต {part=a; case=c14; style=flow}

```verilog
module Comp1 (Gt, Eq, Lt, A, B);
output Gt, Eq, Lt;
input A, B;
assign Gt = A & ~B;
assign Eq = ~(A ^ B);
assign Lt = ~A & B;
endmodule
```

$\mathbf{Sol}^{n}$

- `assign Gt = A & ~B` : $\mathit{Gt} = A\,\overline{B}$
- `assign Eq = ~(A ^ B)` : $\mathit{Eq} = \overline{A \oplus B}$
- `assign Lt = ~A & B` : $\mathit{Lt} = \overline{A}\,B$

$\mathbf{Ans}\quad \begin{aligned}\mathit{Gt} &= A\,\overline{B} \\ \mathit{Eq} &= \overline{A \oplus B} \\ \mathit{Lt} &= \overline{A}\,B\end{aligned}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="628" height="616" viewBox="0 0 628 616" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<polygon points="138,76 138,100 160,88"/>
<circle cx="165" cy="88" r="5"/>
<line x1="71" y1="88" x2="138" y2="88"/>
<path d="M146,144 C168,144 194,160.5 206,177 C194,193.5 168,210 146,210 Q160,177 146,144 Z"/>
<path d="M138,144 Q152,177 138,210"/>
<path d="M40,166 L66.5,166 A4.5,4.5 0 0 1 75.5,166 L144.2,166"/>
<line x1="71" y1="188" x2="144.2" y2="188"/>
<polygon points="138,254 138,278 160,266"/>
<circle cx="165" cy="266" r="5"/>
<path d="M40,266 L66.5,266 A4.5,4.5 0 0 1 75.5,266 L138,266"/>
<line x1="170" y1="88" x2="232" y2="88"/>
<path d="M206,177 L227.5,177 A4.5,4.5 0 0 1 236.5,177 L260,177"/>
<path d="M170,266 L227.5,266 A4.5,4.5 0 0 1 236.5,266 L255.5,266 A4.5,4.5 0 0 1 264.5,266 L288,266"/>
<path d="M342,322 H368 A26,33 0 0 1 368,388 H342 Z"/>
<path d="M40,344 L66.5,344 A4.5,4.5 0 0 1 75.5,344 L227.5,344 A4.5,4.5 0 0 1 236.5,344 L255.5,344 A4.5,4.5 0 0 1 264.5,344 L283.5,344 A4.5,4.5 0 0 1 292.5,344 L342,344"/>
<path d="M232,366 L255.5,366 A4.5,4.5 0 0 1 264.5,366 L283.5,366 A4.5,4.5 0 0 1 292.5,366 L342,366"/>
<polygon points="342,432 342,456 364,444"/>
<circle cx="369" cy="444" r="5"/>
<path d="M260,444 L283.5,444 A4.5,4.5 0 0 1 292.5,444 L342,444"/>
<path d="M342,500 H368 A26,33 0 0 1 368,566 H342 Z"/>
<line x1="288" y1="522" x2="342" y2="522"/>
<line x1="71" y1="544" x2="342" y2="544"/>
<line x1="394" y1="355" x2="420" y2="355"/>
<line x1="374" y1="444" x2="448" y2="444"/>
<line x1="394" y1="533" x2="476" y2="533"/>
<line x1="420" y1="355" x2="532" y2="355"/>
<line x1="448" y1="444" x2="532" y2="444"/>
<line x1="476" y1="533" x2="532" y2="533"/>
<line x1="40" y1="36" x2="40" y2="344"/>
<line x1="71" y1="36" x2="71" y2="544"/>
<line x1="232" y1="88" x2="232" y2="366"/>
<line x1="260" y1="177" x2="260" y2="444"/>
<line x1="288" y1="266" x2="288" y2="522"/>
<circle cx="71" cy="88" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="40" cy="166" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="188" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="40" cy="266" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="40" cy="344" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="232" cy="366" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="260" cy="444" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="288" cy="522" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="544" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="232" cy="88" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="260" cy="177" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="288" cy="266" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="540" y="361" text-anchor="start">Gt</text>
<text x="540" y="450" text-anchor="start">Eq</text>
<text x="540" y="539" text-anchor="start">Lt</text>
<text x="40" y="28" text-anchor="middle" font-size="16">A</text>
<text x="71" y="28" text-anchor="middle" font-size="16">B</text>
</g>
</svg>
</div>

### ข้อ 4  จงเขียนโมดูล Verilog แบบ Dataflow ของวงจรในรูป ($\mathit{Gt} = A\,\overline{B}$, $\mathit{Eq} = \overline{A \oplus B}$, $\mathit{Lt} = \overline{A}\,B$) {part=b; case=c14; style=flow}

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="610" height="546" viewBox="0 0 610 546" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<polygon points="138,76 138,100 160,88"/>
<circle cx="165" cy="88" r="5"/>
<path d="M40,88 L66.5,88 A4.5,4.5 0 0 1 75.5,88 L138,88"/>
<polygon points="138,146 138,170 160,158"/>
<circle cx="165" cy="158" r="5"/>
<line x1="71" y1="158" x2="138" y2="158"/>
<path d="M146,214 C168,214 194,230.5 206,247 C194,263.5 168,280 146,280 Q160,247 146,214 Z"/>
<path d="M138,214 Q152,247 138,280"/>
<circle cx="211" cy="247" r="5"/>
<path d="M40,236 L66.5,236 A4.5,4.5 0 0 1 75.5,236 L144.2,236"/>
<line x1="71" y1="258" x2="144.2" y2="258"/>
<line x1="170" y1="88" x2="242" y2="88"/>
<path d="M170,158 L237.5,158 A4.5,4.5 0 0 1 246.5,158 L270,158"/>
<path d="M216,247 L237.5,247 A4.5,4.5 0 0 1 246.5,247 L265.5,247 A4.5,4.5 0 0 1 274.5,247 L298,247"/>
<path d="M352,322 H378 A26,33 0 0 1 378,388 H352 Z"/>
<path d="M40,344 L66.5,344 A4.5,4.5 0 0 1 75.5,344 L237.5,344 A4.5,4.5 0 0 1 246.5,344 L265.5,344 A4.5,4.5 0 0 1 274.5,344 L352,344"/>
<line x1="270" y1="366" x2="352" y2="366"/>
<path d="M352,430 H378 A26,33 0 0 1 378,496 H352 Z"/>
<line x1="242" y1="452" x2="352" y2="452"/>
<line x1="71" y1="474" x2="352" y2="474"/>
<line x1="404" y1="355" x2="430" y2="355"/>
<line x1="404" y1="463" x2="458" y2="463"/>
<line x1="298" y1="247" x2="514" y2="247"/>
<line x1="430" y1="355" x2="514" y2="355"/>
<line x1="458" y1="463" x2="514" y2="463"/>
<line x1="40" y1="36" x2="40" y2="344"/>
<line x1="71" y1="36" x2="71" y2="474"/>
<line x1="242" y1="88" x2="242" y2="452"/>
<line x1="270" y1="158" x2="270" y2="366"/>
<circle cx="40" cy="88" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="158" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="40" cy="236" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="258" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="40" cy="344" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="366" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="242" cy="452" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="474" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="242" cy="88" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="270" cy="158" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="178" y="81" text-anchor="start" font-size="13">NA</text>
<text x="178" y="151" text-anchor="start" font-size="13">NB</text>
<text x="522" y="253" text-anchor="start">Eq</text>
<text x="522" y="361" text-anchor="start">Gt</text>
<text x="522" y="469" text-anchor="start">Lt</text>
<text x="40" y="28" text-anchor="middle" font-size="16">A</text>
<text x="71" y="28" text-anchor="middle" font-size="16">B</text>
</g>
</svg>
</div>

$\mathbf{Sol}^{n}$

- $\mathit{Gt} = A\,\overline{B}$
- $\mathit{Eq} = \overline{A \oplus B}$
- $\mathit{Lt} = \overline{A}\,B$

$\mathbf{Ans}\quad \text{โค้ดต่อไปนี้}$

```verilog
module Comp1 (Gt, Eq, Lt, A, B);
output Gt, Eq, Lt;
input A, B;
assign Gt = A & ~B;
assign Eq = ~(A ^ B);
assign Lt = ~A & B;
endmodule
```

### ข้อ 4  โมดูล Eq2 ต่อไปนี้ทำหน้าที่อะไร จงเขียนวงจร ตารางความจริง และสมการของเอาต์พุต {part=a; case=c15; style=struct}

```verilog
module Eq2 (Y, A1, A0, B1, B0);
output Y;
input A1, A0, B1, B0;
wire E1, E0;
xnor (E1, A1, B1);
xnor (E0, A0, B0);
and (Y, E1, E0);
endmodule
```

$\mathbf{Sol}^{n}$

- `xnor (E1, A1, B1)` : $\mathit{E1} = \overline{\mathit{A1} \oplus \mathit{B1}}$
- `xnor (E0, A0, B0)` : $\mathit{E0} = \overline{\mathit{A0} \oplus \mathit{B0}}$
- `and (Y, E1, E0)` : $Y = \mathit{E1}\,\mathit{E0}$

$\mathbf{Ans}\quad \begin{aligned}Y &= \overline{\mathit{A1} \oplus \mathit{B1}}\,\overline{\mathit{A0} \oplus \mathit{B0}}\end{aligned}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="665" height="406" viewBox="0 0 665 406" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<path d="M244,74 C266,74 292,90.5 304,107 C292,123.5 266,140 244,140 Q258,107 244,74 Z"/>
<path d="M236,74 Q250,107 236,140"/>
<circle cx="309" cy="107" r="5"/>
<path d="M40,96 L75.5,96 A4.5,4.5 0 0 1 84.5,96 L115.5,96 A4.5,4.5 0 0 1 124.5,96 L155.5,96 A4.5,4.5 0 0 1 164.5,96 L242.2,96"/>
<path d="M120,118 L155.5,118 A4.5,4.5 0 0 1 164.5,118 L242.2,118"/>
<path d="M244,182 C266,182 292,198.5 304,215 C292,231.5 266,248 244,248 Q258,215 244,182 Z"/>
<path d="M236,182 Q250,215 236,248"/>
<circle cx="309" cy="215" r="5"/>
<path d="M80,204 L155.5,204 A4.5,4.5 0 0 1 164.5,204 L242.2,204"/>
<line x1="160" y1="226" x2="242.2" y2="226"/>
<line x1="314" y1="107" x2="353.9" y2="107"/>
<path d="M314,215 L349.4,215 A4.5,4.5 0 0 1 358.4,215 L381.9,215"/>
<path d="M435.9,290 H461.9 A26,33 0 0 1 461.9,356 H435.9 Z"/>
<path d="M353.9,312 L377.4,312 A4.5,4.5 0 0 1 386.4,312 L435.9,312"/>
<line x1="381.9" y1="334" x2="435.9" y2="334"/>
<line x1="487.9" y1="323" x2="513.9" y2="323"/>
<line x1="513.9" y1="323" x2="569.9" y2="323"/>
<line x1="40" y1="36" x2="40" y2="96"/>
<line x1="80" y1="36" x2="80" y2="204"/>
<line x1="120" y1="36" x2="120" y2="118"/>
<line x1="160" y1="36" x2="160" y2="226"/>
<line x1="353.9" y1="107" x2="353.9" y2="312"/>
<line x1="381.9" y1="215" x2="381.9" y2="334"/>
<circle cx="40" cy="96" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="120" cy="118" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="80" cy="204" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="160" cy="226" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="353.9" cy="312" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="381.9" cy="334" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="353.9" cy="107" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="381.9" cy="215" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="322" y="100" text-anchor="start" font-size="13">E<tspan dy="4" font-size="9">1</tspan></text>
<text x="322" y="208" text-anchor="start" font-size="13">E<tspan dy="4" font-size="9">0</tspan></text>
<text x="577.9" y="329" text-anchor="start">Y</text>
<text x="40" y="28" text-anchor="middle" font-size="16">A<tspan dy="4" font-size="10">1</tspan></text>
<text x="80" y="28" text-anchor="middle" font-size="16">A<tspan dy="4" font-size="10">0</tspan></text>
<text x="120" y="28" text-anchor="middle" font-size="16">B<tspan dy="4" font-size="10">1</tspan></text>
<text x="160" y="28" text-anchor="middle" font-size="16">B<tspan dy="4" font-size="10">0</tspan></text>
</g>
</svg>
</div>

### ข้อ 4  จงเขียนโมดูล Verilog แบบ Structural ของวงจรในรูป ($Y = \overline{\mathit{A1} \oplus \mathit{B1}}\,\overline{\mathit{A0} \oplus \mathit{B0}}$) {part=b; case=c15; style=struct}

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="665" height="406" viewBox="0 0 665 406" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<path d="M244,74 C266,74 292,90.5 304,107 C292,123.5 266,140 244,140 Q258,107 244,74 Z"/>
<path d="M236,74 Q250,107 236,140"/>
<circle cx="309" cy="107" r="5"/>
<path d="M40,96 L75.5,96 A4.5,4.5 0 0 1 84.5,96 L115.5,96 A4.5,4.5 0 0 1 124.5,96 L155.5,96 A4.5,4.5 0 0 1 164.5,96 L242.2,96"/>
<path d="M120,118 L155.5,118 A4.5,4.5 0 0 1 164.5,118 L242.2,118"/>
<path d="M244,182 C266,182 292,198.5 304,215 C292,231.5 266,248 244,248 Q258,215 244,182 Z"/>
<path d="M236,182 Q250,215 236,248"/>
<circle cx="309" cy="215" r="5"/>
<path d="M80,204 L155.5,204 A4.5,4.5 0 0 1 164.5,204 L242.2,204"/>
<line x1="160" y1="226" x2="242.2" y2="226"/>
<line x1="314" y1="107" x2="353.9" y2="107"/>
<path d="M314,215 L349.4,215 A4.5,4.5 0 0 1 358.4,215 L381.9,215"/>
<path d="M435.9,290 H461.9 A26,33 0 0 1 461.9,356 H435.9 Z"/>
<path d="M353.9,312 L377.4,312 A4.5,4.5 0 0 1 386.4,312 L435.9,312"/>
<line x1="381.9" y1="334" x2="435.9" y2="334"/>
<line x1="487.9" y1="323" x2="513.9" y2="323"/>
<line x1="513.9" y1="323" x2="569.9" y2="323"/>
<line x1="40" y1="36" x2="40" y2="96"/>
<line x1="80" y1="36" x2="80" y2="204"/>
<line x1="120" y1="36" x2="120" y2="118"/>
<line x1="160" y1="36" x2="160" y2="226"/>
<line x1="353.9" y1="107" x2="353.9" y2="312"/>
<line x1="381.9" y1="215" x2="381.9" y2="334"/>
<circle cx="40" cy="96" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="120" cy="118" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="80" cy="204" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="160" cy="226" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="353.9" cy="312" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="381.9" cy="334" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="353.9" cy="107" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="381.9" cy="215" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="322" y="100" text-anchor="start" font-size="13">E<tspan dy="4" font-size="9">1</tspan></text>
<text x="322" y="208" text-anchor="start" font-size="13">E<tspan dy="4" font-size="9">0</tspan></text>
<text x="577.9" y="329" text-anchor="start">Y</text>
<text x="40" y="28" text-anchor="middle" font-size="16">A<tspan dy="4" font-size="10">1</tspan></text>
<text x="80" y="28" text-anchor="middle" font-size="16">A<tspan dy="4" font-size="10">0</tspan></text>
<text x="120" y="28" text-anchor="middle" font-size="16">B<tspan dy="4" font-size="10">1</tspan></text>
<text x="160" y="28" text-anchor="middle" font-size="16">B<tspan dy="4" font-size="10">0</tspan></text>
</g>
</svg>
</div>

$\mathbf{Sol}^{n}$

- $\mathit{E1} = \overline{\mathit{A1} \oplus \mathit{B1}}$
- $\mathit{E0} = \overline{\mathit{A0} \oplus \mathit{B0}}$
- $Y = \mathit{E1}\,\mathit{E0}$

$\mathbf{Ans}\quad \text{โค้ดต่อไปนี้}$

```verilog
module Eq2 (Y, A1, A0, B1, B0);
output Y;
input A1, A0, B1, B0;
wire E1, E0;
xnor (E1, A1, B1);
xnor (E0, A0, B0);
and (Y, E1, E0);
endmodule
```

### ข้อ 4  โมดูล Eq2 ต่อไปนี้ทำหน้าที่อะไร จงเขียนวงจร ตารางความจริง และสมการของเอาต์พุต {part=a; case=c15; style=flow}

```verilog
module Eq2 (Y, A1, A0, B1, B0);
output Y;
input A1, A0, B1, B0;
assign Y = ~(A1 ^ B1) & ~(A0 ^ B0);
endmodule
```

$\mathbf{Sol}^{n}$

- `assign Y = ~(A1 ^ B1) & ~(A0 ^ B0)` : $Y = \overline{\mathit{A1} \oplus \mathit{B1}}\,\overline{\mathit{A0} \oplus \mathit{B0}}$

$\mathbf{Ans}\quad \begin{aligned}Y &= \overline{\mathit{A1} \oplus \mathit{B1}}\,\overline{\mathit{A0} \oplus \mathit{B0}}\end{aligned}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="782" height="546" viewBox="0 0 782 546" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<path d="M244,74 C266,74 292,90.5 304,107 C292,123.5 266,140 244,140 Q258,107 244,74 Z"/>
<path d="M236,74 Q250,107 236,140"/>
<path d="M40,96 L75.5,96 A4.5,4.5 0 0 1 84.5,96 L115.5,96 A4.5,4.5 0 0 1 124.5,96 L155.5,96 A4.5,4.5 0 0 1 164.5,96 L242.2,96"/>
<path d="M120,118 L155.5,118 A4.5,4.5 0 0 1 164.5,118 L242.2,118"/>
<path d="M244,182 C266,182 292,198.5 304,215 C292,231.5 266,248 244,248 Q258,215 244,182 Z"/>
<path d="M236,182 Q250,215 236,248"/>
<path d="M80,204 L155.5,204 A4.5,4.5 0 0 1 164.5,204 L242.2,204"/>
<line x1="160" y1="226" x2="242.2" y2="226"/>
<line x1="304" y1="107" x2="330" y2="107"/>
<path d="M304,215 L325.5,215 A4.5,4.5 0 0 1 334.5,215 L358,215"/>
<polygon points="412,292 412,316 434,304"/>
<circle cx="439" cy="304" r="5"/>
<path d="M330,304 L353.5,304 A4.5,4.5 0 0 1 362.5,304 L412,304"/>
<polygon points="412,362 412,386 434,374"/>
<circle cx="439" cy="374" r="5"/>
<line x1="358" y1="374" x2="412" y2="374"/>
<line x1="444" y1="304" x2="470" y2="304"/>
<path d="M444,374 L465.5,374 A4.5,4.5 0 0 1 474.5,374 L498,374"/>
<path d="M552,430 H578 A26,33 0 0 1 578,496 H552 Z"/>
<path d="M470,452 L493.5,452 A4.5,4.5 0 0 1 502.5,452 L552,452"/>
<line x1="498" y1="474" x2="552" y2="474"/>
<line x1="604" y1="463" x2="630" y2="463"/>
<line x1="630" y1="463" x2="686" y2="463"/>
<line x1="40" y1="36" x2="40" y2="96"/>
<line x1="80" y1="36" x2="80" y2="204"/>
<line x1="120" y1="36" x2="120" y2="118"/>
<line x1="160" y1="36" x2="160" y2="226"/>
<line x1="330" y1="107" x2="330" y2="304"/>
<line x1="358" y1="215" x2="358" y2="374"/>
<line x1="470" y1="304" x2="470" y2="452"/>
<line x1="498" y1="374" x2="498" y2="474"/>
<circle cx="40" cy="96" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="120" cy="118" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="80" cy="204" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="160" cy="226" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="330" cy="304" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="358" cy="374" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="470" cy="452" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="498" cy="474" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="330" cy="107" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="358" cy="215" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="470" cy="304" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="498" cy="374" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="694" y="469" text-anchor="start">Y</text>
<text x="40" y="28" text-anchor="middle" font-size="16">A<tspan dy="4" font-size="10">1</tspan></text>
<text x="80" y="28" text-anchor="middle" font-size="16">A<tspan dy="4" font-size="10">0</tspan></text>
<text x="120" y="28" text-anchor="middle" font-size="16">B<tspan dy="4" font-size="10">1</tspan></text>
<text x="160" y="28" text-anchor="middle" font-size="16">B<tspan dy="4" font-size="10">0</tspan></text>
</g>
</svg>
</div>

### ข้อ 4  จงเขียนโมดูล Verilog แบบ Dataflow ของวงจรในรูป ($Y = \overline{\mathit{A1} \oplus \mathit{B1}}\,\overline{\mathit{A0} \oplus \mathit{B0}}$) {part=b; case=c15; style=flow}

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="665" height="406" viewBox="0 0 665 406" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<path d="M244,74 C266,74 292,90.5 304,107 C292,123.5 266,140 244,140 Q258,107 244,74 Z"/>
<path d="M236,74 Q250,107 236,140"/>
<circle cx="309" cy="107" r="5"/>
<path d="M40,96 L75.5,96 A4.5,4.5 0 0 1 84.5,96 L115.5,96 A4.5,4.5 0 0 1 124.5,96 L155.5,96 A4.5,4.5 0 0 1 164.5,96 L242.2,96"/>
<path d="M120,118 L155.5,118 A4.5,4.5 0 0 1 164.5,118 L242.2,118"/>
<path d="M244,182 C266,182 292,198.5 304,215 C292,231.5 266,248 244,248 Q258,215 244,182 Z"/>
<path d="M236,182 Q250,215 236,248"/>
<circle cx="309" cy="215" r="5"/>
<path d="M80,204 L155.5,204 A4.5,4.5 0 0 1 164.5,204 L242.2,204"/>
<line x1="160" y1="226" x2="242.2" y2="226"/>
<line x1="314" y1="107" x2="353.9" y2="107"/>
<path d="M314,215 L349.4,215 A4.5,4.5 0 0 1 358.4,215 L381.9,215"/>
<path d="M435.9,290 H461.9 A26,33 0 0 1 461.9,356 H435.9 Z"/>
<path d="M353.9,312 L377.4,312 A4.5,4.5 0 0 1 386.4,312 L435.9,312"/>
<line x1="381.9" y1="334" x2="435.9" y2="334"/>
<line x1="487.9" y1="323" x2="513.9" y2="323"/>
<line x1="513.9" y1="323" x2="569.9" y2="323"/>
<line x1="40" y1="36" x2="40" y2="96"/>
<line x1="80" y1="36" x2="80" y2="204"/>
<line x1="120" y1="36" x2="120" y2="118"/>
<line x1="160" y1="36" x2="160" y2="226"/>
<line x1="353.9" y1="107" x2="353.9" y2="312"/>
<line x1="381.9" y1="215" x2="381.9" y2="334"/>
<circle cx="40" cy="96" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="120" cy="118" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="80" cy="204" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="160" cy="226" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="353.9" cy="312" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="381.9" cy="334" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="353.9" cy="107" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="381.9" cy="215" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="322" y="100" text-anchor="start" font-size="13">E<tspan dy="4" font-size="9">1</tspan></text>
<text x="322" y="208" text-anchor="start" font-size="13">E<tspan dy="4" font-size="9">0</tspan></text>
<text x="577.9" y="329" text-anchor="start">Y</text>
<text x="40" y="28" text-anchor="middle" font-size="16">A<tspan dy="4" font-size="10">1</tspan></text>
<text x="80" y="28" text-anchor="middle" font-size="16">A<tspan dy="4" font-size="10">0</tspan></text>
<text x="120" y="28" text-anchor="middle" font-size="16">B<tspan dy="4" font-size="10">1</tspan></text>
<text x="160" y="28" text-anchor="middle" font-size="16">B<tspan dy="4" font-size="10">0</tspan></text>
</g>
</svg>
</div>

$\mathbf{Sol}^{n}$

- $Y = \overline{\mathit{A1} \oplus \mathit{B1}}\,\overline{\mathit{A0} \oplus \mathit{B0}}$

$\mathbf{Ans}\quad \text{โค้ดต่อไปนี้}$

```verilog
module Eq2 (Y, A1, A0, B1, B0);
output Y;
input A1, A0, B1, B0;
assign Y = ~(A1 ^ B1) & ~(A0 ^ B0);
endmodule
```

### ข้อ 4  โมดูล NandOr ต่อไปนี้ทำหน้าที่อะไร จงเขียนวงจร ตารางความจริง และสมการของเอาต์พุต {part=a; case=c16; style=struct}

```verilog
module NandOr (Y, A, B, C);
output Y;
input A, B, C;
wire P;
nand (P, A, B);
or (Y, P, C);
endmodule
```

$\mathbf{Sol}^{n}$

- `nand (P, A, B)` : $P = \overline{A\,B}$
- `or (Y, P, C)` : $Y = P + C$

$\mathbf{Ans}\quad \begin{aligned}Y &= \overline{A\,B} + C\end{aligned}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="557" height="298" viewBox="0 0 557 298" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<path d="M169,74 H195 A26,33 0 0 1 195,140 H169 Z"/>
<circle cx="226" cy="107" r="5"/>
<path d="M40,96 L66.5,96 A4.5,4.5 0 0 1 75.5,96 L97.5,96 A4.5,4.5 0 0 1 106.5,96 L169,96"/>
<path d="M71,118 L97.5,118 A4.5,4.5 0 0 1 106.5,118 L169,118"/>
<line x1="231" y1="107" x2="265.1" y2="107"/>
<path d="M319.1,182 C341.1,182 367.1,198.5 379.1,215 C367.1,231.5 341.1,248 319.1,248 Q333.1,215 319.1,182 Z"/>
<line x1="265.1" y1="204" x2="325.3" y2="204"/>
<line x1="102" y1="226" x2="325.3" y2="226"/>
<line x1="379.1" y1="215" x2="405.1" y2="215"/>
<line x1="405.1" y1="215" x2="461.1" y2="215"/>
<line x1="40" y1="36" x2="40" y2="96"/>
<line x1="71" y1="36" x2="71" y2="118"/>
<line x1="102" y1="36" x2="102" y2="226"/>
<line x1="265.1" y1="107" x2="265.1" y2="204"/>
<circle cx="40" cy="96" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="118" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="265.1" cy="204" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="102" cy="226" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="265.1" cy="107" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="239" y="100" text-anchor="start" font-size="13">P</text>
<text x="469.1" y="221" text-anchor="start">Y</text>
<text x="40" y="28" text-anchor="middle" font-size="16">A</text>
<text x="71" y="28" text-anchor="middle" font-size="16">B</text>
<text x="102" y="28" text-anchor="middle" font-size="16">C</text>
</g>
</svg>
</div>

### ข้อ 4  จงเขียนโมดูล Verilog แบบ Structural ของวงจรในรูป ($Y = \overline{A\,B} + C$) {part=b; case=c16; style=struct}

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="557" height="298" viewBox="0 0 557 298" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<path d="M169,74 H195 A26,33 0 0 1 195,140 H169 Z"/>
<circle cx="226" cy="107" r="5"/>
<path d="M40,96 L66.5,96 A4.5,4.5 0 0 1 75.5,96 L97.5,96 A4.5,4.5 0 0 1 106.5,96 L169,96"/>
<path d="M71,118 L97.5,118 A4.5,4.5 0 0 1 106.5,118 L169,118"/>
<line x1="231" y1="107" x2="265.1" y2="107"/>
<path d="M319.1,182 C341.1,182 367.1,198.5 379.1,215 C367.1,231.5 341.1,248 319.1,248 Q333.1,215 319.1,182 Z"/>
<line x1="265.1" y1="204" x2="325.3" y2="204"/>
<line x1="102" y1="226" x2="325.3" y2="226"/>
<line x1="379.1" y1="215" x2="405.1" y2="215"/>
<line x1="405.1" y1="215" x2="461.1" y2="215"/>
<line x1="40" y1="36" x2="40" y2="96"/>
<line x1="71" y1="36" x2="71" y2="118"/>
<line x1="102" y1="36" x2="102" y2="226"/>
<line x1="265.1" y1="107" x2="265.1" y2="204"/>
<circle cx="40" cy="96" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="118" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="265.1" cy="204" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="102" cy="226" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="265.1" cy="107" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="239" y="100" text-anchor="start" font-size="13">P</text>
<text x="469.1" y="221" text-anchor="start">Y</text>
<text x="40" y="28" text-anchor="middle" font-size="16">A</text>
<text x="71" y="28" text-anchor="middle" font-size="16">B</text>
<text x="102" y="28" text-anchor="middle" font-size="16">C</text>
</g>
</svg>
</div>

$\mathbf{Sol}^{n}$

- $P = \overline{A\,B}$
- $Y = P + C$

$\mathbf{Ans}\quad \text{โค้ดต่อไปนี้}$

```verilog
module NandOr (Y, A, B, C);
output Y;
input A, B, C;
wire P;
nand (P, A, B);
or (Y, P, C);
endmodule
```

### ข้อ 4  โมดูล NandOr ต่อไปนี้ทำหน้าที่อะไร จงเขียนวงจร ตารางความจริง และสมการของเอาต์พุต {part=a; case=c16; style=flow}

```verilog
module NandOr (Y, A, B, C);
output Y;
input A, B, C;
assign Y = ~(A & B) | C;
endmodule
```

$\mathbf{Sol}^{n}$

- `assign Y = ~(A & B) | C` : $Y = \overline{A\,B} + C$

$\mathbf{Ans}\quad \begin{aligned}Y &= \overline{A\,B} + C\end{aligned}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="651" height="368" viewBox="0 0 651 368" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<path d="M169,74 H195 A26,33 0 0 1 195,140 H169 Z"/>
<path d="M40,96 L66.5,96 A4.5,4.5 0 0 1 75.5,96 L97.5,96 A4.5,4.5 0 0 1 106.5,96 L169,96"/>
<path d="M71,118 L97.5,118 A4.5,4.5 0 0 1 106.5,118 L169,118"/>
<line x1="221" y1="107" x2="247" y2="107"/>
<polygon points="301,184 301,208 323,196"/>
<circle cx="328" cy="196" r="5"/>
<line x1="247" y1="196" x2="301" y2="196"/>
<line x1="333" y1="196" x2="359" y2="196"/>
<path d="M413,252 C435,252 461,268.5 473,285 C461,301.5 435,318 413,318 Q427,285 413,252 Z"/>
<line x1="359" y1="274" x2="419.2" y2="274"/>
<line x1="102" y1="296" x2="419.2" y2="296"/>
<line x1="473" y1="285" x2="499" y2="285"/>
<line x1="499" y1="285" x2="555" y2="285"/>
<line x1="40" y1="36" x2="40" y2="96"/>
<line x1="71" y1="36" x2="71" y2="118"/>
<line x1="102" y1="36" x2="102" y2="296"/>
<line x1="247" y1="107" x2="247" y2="196"/>
<line x1="359" y1="196" x2="359" y2="274"/>
<circle cx="40" cy="96" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="118" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="247" cy="196" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="359" cy="274" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="102" cy="296" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="247" cy="107" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="359" cy="196" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="563" y="291" text-anchor="start">Y</text>
<text x="40" y="28" text-anchor="middle" font-size="16">A</text>
<text x="71" y="28" text-anchor="middle" font-size="16">B</text>
<text x="102" y="28" text-anchor="middle" font-size="16">C</text>
</g>
</svg>
</div>

### ข้อ 4  จงเขียนโมดูล Verilog แบบ Dataflow ของวงจรในรูป ($Y = \overline{A\,B} + C$) {part=b; case=c16; style=flow}

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="557" height="298" viewBox="0 0 557 298" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<path d="M169,74 H195 A26,33 0 0 1 195,140 H169 Z"/>
<circle cx="226" cy="107" r="5"/>
<path d="M40,96 L66.5,96 A4.5,4.5 0 0 1 75.5,96 L97.5,96 A4.5,4.5 0 0 1 106.5,96 L169,96"/>
<path d="M71,118 L97.5,118 A4.5,4.5 0 0 1 106.5,118 L169,118"/>
<line x1="231" y1="107" x2="265.1" y2="107"/>
<path d="M319.1,182 C341.1,182 367.1,198.5 379.1,215 C367.1,231.5 341.1,248 319.1,248 Q333.1,215 319.1,182 Z"/>
<line x1="265.1" y1="204" x2="325.3" y2="204"/>
<line x1="102" y1="226" x2="325.3" y2="226"/>
<line x1="379.1" y1="215" x2="405.1" y2="215"/>
<line x1="405.1" y1="215" x2="461.1" y2="215"/>
<line x1="40" y1="36" x2="40" y2="96"/>
<line x1="71" y1="36" x2="71" y2="118"/>
<line x1="102" y1="36" x2="102" y2="226"/>
<line x1="265.1" y1="107" x2="265.1" y2="204"/>
<circle cx="40" cy="96" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="118" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="265.1" cy="204" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="102" cy="226" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="265.1" cy="107" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="239" y="100" text-anchor="start" font-size="13">P</text>
<text x="469.1" y="221" text-anchor="start">Y</text>
<text x="40" y="28" text-anchor="middle" font-size="16">A</text>
<text x="71" y="28" text-anchor="middle" font-size="16">B</text>
<text x="102" y="28" text-anchor="middle" font-size="16">C</text>
</g>
</svg>
</div>

$\mathbf{Sol}^{n}$

- $Y = \overline{A\,B} + C$

$\mathbf{Ans}\quad \text{โค้ดต่อไปนี้}$

```verilog
module NandOr (Y, A, B, C);
output Y;
input A, B, C;
assign Y = ~(A & B) | C;
endmodule
```

### ข้อ 4  โมดูล Aoi22 ต่อไปนี้ทำหน้าที่อะไร จงเขียนวงจร ตารางความจริง และสมการของเอาต์พุต {part=a; case=c17; style=struct}

```verilog
module Aoi22 (Y, A, B, C, D);
output Y;
input A, B, C, D;
wire P, Q;
and (P, A, B);
and (Q, C, D);
nor (Y, P, Q);
endmodule
```

$\mathbf{Sol}^{n}$

- `and (P, A, B)` : $P = A\,B$
- `and (Q, C, D)` : $Q = C\,D$
- `nor (Y, P, Q)` : $Y = \overline{P + Q}$

$\mathbf{Ans}\quad \begin{aligned}Y &= \overline{A\,B + C\,D}\end{aligned}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="616" height="406" viewBox="0 0 616 406" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<path d="M200,74 H226 A26,33 0 0 1 226,140 H200 Z"/>
<path d="M40,96 L66.5,96 A4.5,4.5 0 0 1 75.5,96 L97.5,96 A4.5,4.5 0 0 1 106.5,96 L128.5,96 A4.5,4.5 0 0 1 137.5,96 L200,96"/>
<path d="M71,118 L97.5,118 A4.5,4.5 0 0 1 106.5,118 L128.5,118 A4.5,4.5 0 0 1 137.5,118 L200,118"/>
<path d="M200,182 H226 A26,33 0 0 1 226,248 H200 Z"/>
<path d="M102,204 L128.5,204 A4.5,4.5 0 0 1 137.5,204 L200,204"/>
<line x1="133" y1="226" x2="200" y2="226"/>
<line x1="252" y1="107" x2="286.1" y2="107"/>
<path d="M252,215 L281.6,215 A4.5,4.5 0 0 1 290.6,215 L314.1,215"/>
<path d="M368.1,290 C390.1,290 416.1,306.5 428.1,323 C416.1,339.5 390.1,356 368.1,356 Q382.1,323 368.1,290 Z"/>
<circle cx="433.1" cy="323" r="5"/>
<path d="M286.1,312 L309.6,312 A4.5,4.5 0 0 1 318.6,312 L374.3,312"/>
<line x1="314.1" y1="334" x2="374.3" y2="334"/>
<line x1="438.1" y1="323" x2="464.1" y2="323"/>
<line x1="464.1" y1="323" x2="520.1" y2="323"/>
<line x1="40" y1="36" x2="40" y2="96"/>
<line x1="71" y1="36" x2="71" y2="118"/>
<line x1="102" y1="36" x2="102" y2="204"/>
<line x1="133" y1="36" x2="133" y2="226"/>
<line x1="286.1" y1="107" x2="286.1" y2="312"/>
<line x1="314.1" y1="215" x2="314.1" y2="334"/>
<circle cx="40" cy="96" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="118" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="102" cy="204" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="133" cy="226" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="286.1" cy="312" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="314.1" cy="334" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="286.1" cy="107" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="314.1" cy="215" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="260" y="100" text-anchor="start" font-size="13">P</text>
<text x="260" y="208" text-anchor="start" font-size="13">Q</text>
<text x="528.1" y="329" text-anchor="start">Y</text>
<text x="40" y="28" text-anchor="middle" font-size="16">A</text>
<text x="71" y="28" text-anchor="middle" font-size="16">B</text>
<text x="102" y="28" text-anchor="middle" font-size="16">C</text>
<text x="133" y="28" text-anchor="middle" font-size="16">D</text>
</g>
</svg>
</div>

### ข้อ 4  จงเขียนโมดูล Verilog แบบ Structural ของวงจรในรูป ($Y = \overline{A\,B + C\,D}$) {part=b; case=c17; style=struct}

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="616" height="406" viewBox="0 0 616 406" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<path d="M200,74 H226 A26,33 0 0 1 226,140 H200 Z"/>
<path d="M40,96 L66.5,96 A4.5,4.5 0 0 1 75.5,96 L97.5,96 A4.5,4.5 0 0 1 106.5,96 L128.5,96 A4.5,4.5 0 0 1 137.5,96 L200,96"/>
<path d="M71,118 L97.5,118 A4.5,4.5 0 0 1 106.5,118 L128.5,118 A4.5,4.5 0 0 1 137.5,118 L200,118"/>
<path d="M200,182 H226 A26,33 0 0 1 226,248 H200 Z"/>
<path d="M102,204 L128.5,204 A4.5,4.5 0 0 1 137.5,204 L200,204"/>
<line x1="133" y1="226" x2="200" y2="226"/>
<line x1="252" y1="107" x2="286.1" y2="107"/>
<path d="M252,215 L281.6,215 A4.5,4.5 0 0 1 290.6,215 L314.1,215"/>
<path d="M368.1,290 C390.1,290 416.1,306.5 428.1,323 C416.1,339.5 390.1,356 368.1,356 Q382.1,323 368.1,290 Z"/>
<circle cx="433.1" cy="323" r="5"/>
<path d="M286.1,312 L309.6,312 A4.5,4.5 0 0 1 318.6,312 L374.3,312"/>
<line x1="314.1" y1="334" x2="374.3" y2="334"/>
<line x1="438.1" y1="323" x2="464.1" y2="323"/>
<line x1="464.1" y1="323" x2="520.1" y2="323"/>
<line x1="40" y1="36" x2="40" y2="96"/>
<line x1="71" y1="36" x2="71" y2="118"/>
<line x1="102" y1="36" x2="102" y2="204"/>
<line x1="133" y1="36" x2="133" y2="226"/>
<line x1="286.1" y1="107" x2="286.1" y2="312"/>
<line x1="314.1" y1="215" x2="314.1" y2="334"/>
<circle cx="40" cy="96" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="118" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="102" cy="204" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="133" cy="226" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="286.1" cy="312" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="314.1" cy="334" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="286.1" cy="107" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="314.1" cy="215" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="260" y="100" text-anchor="start" font-size="13">P</text>
<text x="260" y="208" text-anchor="start" font-size="13">Q</text>
<text x="528.1" y="329" text-anchor="start">Y</text>
<text x="40" y="28" text-anchor="middle" font-size="16">A</text>
<text x="71" y="28" text-anchor="middle" font-size="16">B</text>
<text x="102" y="28" text-anchor="middle" font-size="16">C</text>
<text x="133" y="28" text-anchor="middle" font-size="16">D</text>
</g>
</svg>
</div>

$\mathbf{Sol}^{n}$

- $P = A\,B$
- $Q = C\,D$
- $Y = \overline{P + Q}$

$\mathbf{Ans}\quad \text{โค้ดต่อไปนี้}$

```verilog
module Aoi22 (Y, A, B, C, D);
output Y;
input A, B, C, D;
wire P, Q;
and (P, A, B);
and (Q, C, D);
nor (Y, P, Q);
endmodule
```

### ข้อ 4  โมดูล Aoi22 ต่อไปนี้ทำหน้าที่อะไร จงเขียนวงจร ตารางความจริง และสมการของเอาต์พุต {part=a; case=c17; style=flow}

```verilog
module Aoi22 (Y, A, B, C, D);
output Y;
input A, B, C, D;
assign Y = ~((A & B) | (C & D));
endmodule
```

$\mathbf{Sol}^{n}$

- `assign Y = ~((A & B) | (C & D))` : $Y = \overline{A\,B + C\,D}$

$\mathbf{Ans}\quad \begin{aligned}Y &= \overline{A\,B + C\,D}\end{aligned}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="710" height="476" viewBox="0 0 710 476" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<path d="M200,74 H226 A26,33 0 0 1 226,140 H200 Z"/>
<path d="M40,96 L66.5,96 A4.5,4.5 0 0 1 75.5,96 L97.5,96 A4.5,4.5 0 0 1 106.5,96 L128.5,96 A4.5,4.5 0 0 1 137.5,96 L200,96"/>
<path d="M71,118 L97.5,118 A4.5,4.5 0 0 1 106.5,118 L128.5,118 A4.5,4.5 0 0 1 137.5,118 L200,118"/>
<path d="M200,182 H226 A26,33 0 0 1 226,248 H200 Z"/>
<path d="M102,204 L128.5,204 A4.5,4.5 0 0 1 137.5,204 L200,204"/>
<line x1="133" y1="226" x2="200" y2="226"/>
<line x1="252" y1="107" x2="278" y2="107"/>
<path d="M252,215 L273.5,215 A4.5,4.5 0 0 1 282.5,215 L306,215"/>
<path d="M360,290 C382,290 408,306.5 420,323 C408,339.5 382,356 360,356 Q374,323 360,290 Z"/>
<path d="M278,312 L301.5,312 A4.5,4.5 0 0 1 310.5,312 L366.2,312"/>
<line x1="306" y1="334" x2="366.2" y2="334"/>
<line x1="420" y1="323" x2="446" y2="323"/>
<polygon points="500,400 500,424 522,412"/>
<circle cx="527" cy="412" r="5"/>
<line x1="446" y1="412" x2="500" y2="412"/>
<line x1="532" y1="412" x2="558" y2="412"/>
<line x1="558" y1="412" x2="614" y2="412"/>
<line x1="40" y1="36" x2="40" y2="96"/>
<line x1="71" y1="36" x2="71" y2="118"/>
<line x1="102" y1="36" x2="102" y2="204"/>
<line x1="133" y1="36" x2="133" y2="226"/>
<line x1="278" y1="107" x2="278" y2="312"/>
<line x1="306" y1="215" x2="306" y2="334"/>
<line x1="446" y1="323" x2="446" y2="412"/>
<circle cx="40" cy="96" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="118" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="102" cy="204" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="133" cy="226" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="278" cy="312" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="306" cy="334" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="446" cy="412" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="278" cy="107" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="306" cy="215" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="446" cy="323" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="622" y="418" text-anchor="start">Y</text>
<text x="40" y="28" text-anchor="middle" font-size="16">A</text>
<text x="71" y="28" text-anchor="middle" font-size="16">B</text>
<text x="102" y="28" text-anchor="middle" font-size="16">C</text>
<text x="133" y="28" text-anchor="middle" font-size="16">D</text>
</g>
</svg>
</div>

### ข้อ 4  จงเขียนโมดูล Verilog แบบ Dataflow ของวงจรในรูป ($Y = \overline{A\,B + C\,D}$) {part=b; case=c17; style=flow}

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="616" height="406" viewBox="0 0 616 406" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<path d="M200,74 H226 A26,33 0 0 1 226,140 H200 Z"/>
<path d="M40,96 L66.5,96 A4.5,4.5 0 0 1 75.5,96 L97.5,96 A4.5,4.5 0 0 1 106.5,96 L128.5,96 A4.5,4.5 0 0 1 137.5,96 L200,96"/>
<path d="M71,118 L97.5,118 A4.5,4.5 0 0 1 106.5,118 L128.5,118 A4.5,4.5 0 0 1 137.5,118 L200,118"/>
<path d="M200,182 H226 A26,33 0 0 1 226,248 H200 Z"/>
<path d="M102,204 L128.5,204 A4.5,4.5 0 0 1 137.5,204 L200,204"/>
<line x1="133" y1="226" x2="200" y2="226"/>
<line x1="252" y1="107" x2="286.1" y2="107"/>
<path d="M252,215 L281.6,215 A4.5,4.5 0 0 1 290.6,215 L314.1,215"/>
<path d="M368.1,290 C390.1,290 416.1,306.5 428.1,323 C416.1,339.5 390.1,356 368.1,356 Q382.1,323 368.1,290 Z"/>
<circle cx="433.1" cy="323" r="5"/>
<path d="M286.1,312 L309.6,312 A4.5,4.5 0 0 1 318.6,312 L374.3,312"/>
<line x1="314.1" y1="334" x2="374.3" y2="334"/>
<line x1="438.1" y1="323" x2="464.1" y2="323"/>
<line x1="464.1" y1="323" x2="520.1" y2="323"/>
<line x1="40" y1="36" x2="40" y2="96"/>
<line x1="71" y1="36" x2="71" y2="118"/>
<line x1="102" y1="36" x2="102" y2="204"/>
<line x1="133" y1="36" x2="133" y2="226"/>
<line x1="286.1" y1="107" x2="286.1" y2="312"/>
<line x1="314.1" y1="215" x2="314.1" y2="334"/>
<circle cx="40" cy="96" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="118" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="102" cy="204" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="133" cy="226" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="286.1" cy="312" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="314.1" cy="334" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="286.1" cy="107" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="314.1" cy="215" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="260" y="100" text-anchor="start" font-size="13">P</text>
<text x="260" y="208" text-anchor="start" font-size="13">Q</text>
<text x="528.1" y="329" text-anchor="start">Y</text>
<text x="40" y="28" text-anchor="middle" font-size="16">A</text>
<text x="71" y="28" text-anchor="middle" font-size="16">B</text>
<text x="102" y="28" text-anchor="middle" font-size="16">C</text>
<text x="133" y="28" text-anchor="middle" font-size="16">D</text>
</g>
</svg>
</div>

$\mathbf{Sol}^{n}$

- $Y = \overline{A\,B + C\,D}$

$\mathbf{Ans}\quad \text{โค้ดต่อไปนี้}$

```verilog
module Aoi22 (Y, A, B, C, D);
output Y;
input A, B, C, D;
assign Y = ~((A & B) | (C & D));
endmodule
```
