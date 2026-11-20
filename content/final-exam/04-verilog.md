# ข้อสอบปลายภาค ข้อ 4 Verilog

@select part ส่วนของโจทย์ | a=โค้ดไปวงจร (อ่านโค้ด วาดวงจร) | b=วงจรไปโค้ด (ดูวงจร เขียนโค้ด)
@select case วงจร | c1=AB + C'D | c2=MUX 2-to-1 | c3=MUX 4-to-1 | c4=XOR (Y = A⊕B) | c5=XNOR | c6=Majority 3 ตัว | c7=(A+B)(C+D) | c8=NAND สองชั้น | c9=NOR สองชั้น | c10=Half Adder | c11=Decoder 2-to-4 | c12=DEMUX 1-to-4 | c13=Parity 3 บิต | c14=Comparator 1 บิต | c15=เท่ากัน 2 บิต | c16=(AB)' + C | c17=AOI (AB + CD)'
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

แต่ละบรรทัดของเกตคือเกต 1 ตัว พอร์ตแรกคือเอาต์พุต เขียนเป็นสมการได้ดังนี้

- `not (NotC, C)` : $\mathit{NotC} = \overline{C}$
- `and (P, A, B)` : $P = A\,B$
- `and (Q, NotC, D)` : $Q = \mathit{NotC}\,D$
- `or (Y, P, Q)` : $Y = P + Q$

รวมเป็นสมการของเอาต์พุต แล้วเขียนวงจรและตารางความจริง (ตรวจทุกแถวด้วยโปรแกรม)

$\mathbf{Ans}\quad \begin{aligned}Y &= A\,B + \overline{C}\,D\end{aligned}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="742" height="444" viewBox="0 0 742 444" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<polygon points="200,76 200,100 222,88"/>
<circle cx="227" cy="88" r="5"/>
<line x1="102" y1="88" x2="200" y2="88"/>
<path d="M200,136 H226 A26,33 0 0 1 226,202 H200 Z"/>
<line x1="40" y1="158" x2="200" y2="158"/>
<line x1="71" y1="180" x2="200" y2="180"/>
<line x1="232" y1="88" x2="290.2" y2="88"/>
<line x1="252" y1="169" x2="310.2" y2="169"/>
<path d="M364.2,236 H390.2 A26,33 0 0 1 390.2,302 H364.2 Z"/>
<line x1="290.2" y1="258" x2="364.2" y2="258"/>
<line x1="133" y1="280" x2="364.2" y2="280"/>
<line x1="416.2" y1="269" x2="450.3" y2="269"/>
<path d="M504.3,336 C526.3,336 552.3,352.5 564.3,369 C552.3,385.5 526.3,402 504.3,402 Q518.3,369 504.3,336 Z"/>
<line x1="310.2" y1="358" x2="510.5" y2="358"/>
<line x1="450.3" y1="380" x2="510.5" y2="380"/>
<line x1="564.3" y1="369" x2="590.3" y2="369"/>
<line x1="590.3" y1="369" x2="646.3" y2="369"/>
<line x1="40" y1="36" x2="40" y2="158"/>
<line x1="71" y1="36" x2="71" y2="180"/>
<line x1="102" y1="36" x2="102" y2="88"/>
<line x1="133" y1="36" x2="133" y2="280"/>
<line x1="290.2" y1="88" x2="290.2" y2="258"/>
<line x1="310.2" y1="169" x2="310.2" y2="358"/>
<line x1="450.3" y1="269" x2="450.3" y2="380"/>
<circle cx="102" cy="88" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="40" cy="158" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="180" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="290.2" cy="258" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="133" cy="280" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="310.2" cy="358" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="450.3" cy="380" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="290.2" cy="88" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="310.2" cy="169" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="450.3" cy="269" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="240" y="81" text-anchor="start" font-size="13">NotC</text>
<text x="260" y="162" text-anchor="start" font-size="13">P</text>
<text x="424.2" y="262" text-anchor="start" font-size="13">Q</text>
<text x="654.3" y="375" text-anchor="start">Y</text>
<text x="40" y="28" text-anchor="middle" font-size="16">A</text>
<text x="71" y="28" text-anchor="middle" font-size="16">B</text>
<text x="102" y="28" text-anchor="middle" font-size="16">C</text>
<text x="133" y="28" text-anchor="middle" font-size="16">D</text>
</g>
</svg>
</div>

| $A$ | $B$ | $C$ | $D$ | $Y$ |
|:-:|:-:|:-:|:-:|:-:|
| 0 | 0 | 0 | 0 | 0 |
| 0 | 0 | 0 | 1 | 1 |
| 0 | 0 | 1 | 0 | 0 |
| 0 | 0 | 1 | 1 | 0 |
| 0 | 1 | 0 | 0 | 0 |
| 0 | 1 | 0 | 1 | 1 |
| 0 | 1 | 1 | 0 | 0 |
| 0 | 1 | 1 | 1 | 0 |
| 1 | 0 | 0 | 0 | 0 |
| 1 | 0 | 0 | 1 | 1 |
| 1 | 0 | 1 | 0 | 0 |
| 1 | 0 | 1 | 1 | 0 |
| 1 | 1 | 0 | 0 | 1 |
| 1 | 1 | 0 | 1 | 1 |
| 1 | 1 | 1 | 0 | 1 |
| 1 | 1 | 1 | 1 | 1 |

### ข้อ 4  จงเขียนโมดูล Verilog แบบ Structural ของวงจรในรูป ($Y = A\,B + \overline{C}\,D$) {part=b; case=c1; style=struct}

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="742" height="444" viewBox="0 0 742 444" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<polygon points="200,76 200,100 222,88"/>
<circle cx="227" cy="88" r="5"/>
<line x1="102" y1="88" x2="200" y2="88"/>
<path d="M200,136 H226 A26,33 0 0 1 226,202 H200 Z"/>
<line x1="40" y1="158" x2="200" y2="158"/>
<line x1="71" y1="180" x2="200" y2="180"/>
<line x1="232" y1="88" x2="290.2" y2="88"/>
<line x1="252" y1="169" x2="310.2" y2="169"/>
<path d="M364.2,236 H390.2 A26,33 0 0 1 390.2,302 H364.2 Z"/>
<line x1="290.2" y1="258" x2="364.2" y2="258"/>
<line x1="133" y1="280" x2="364.2" y2="280"/>
<line x1="416.2" y1="269" x2="450.3" y2="269"/>
<path d="M504.3,336 C526.3,336 552.3,352.5 564.3,369 C552.3,385.5 526.3,402 504.3,402 Q518.3,369 504.3,336 Z"/>
<line x1="310.2" y1="358" x2="510.5" y2="358"/>
<line x1="450.3" y1="380" x2="510.5" y2="380"/>
<line x1="564.3" y1="369" x2="590.3" y2="369"/>
<line x1="590.3" y1="369" x2="646.3" y2="369"/>
<line x1="40" y1="36" x2="40" y2="158"/>
<line x1="71" y1="36" x2="71" y2="180"/>
<line x1="102" y1="36" x2="102" y2="88"/>
<line x1="133" y1="36" x2="133" y2="280"/>
<line x1="290.2" y1="88" x2="290.2" y2="258"/>
<line x1="310.2" y1="169" x2="310.2" y2="358"/>
<line x1="450.3" y1="269" x2="450.3" y2="380"/>
<circle cx="102" cy="88" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="40" cy="158" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="180" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="290.2" cy="258" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="133" cy="280" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="310.2" cy="358" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="450.3" cy="380" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="290.2" cy="88" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="310.2" cy="169" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="450.3" cy="269" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="240" y="81" text-anchor="start" font-size="13">NotC</text>
<text x="260" y="162" text-anchor="start" font-size="13">P</text>
<text x="424.2" y="262" text-anchor="start" font-size="13">Q</text>
<text x="654.3" y="375" text-anchor="start">Y</text>
<text x="40" y="28" text-anchor="middle" font-size="16">A</text>
<text x="71" y="28" text-anchor="middle" font-size="16">B</text>
<text x="102" y="28" text-anchor="middle" font-size="16">C</text>
<text x="133" y="28" text-anchor="middle" font-size="16">D</text>
</g>
</svg>
</div>

$\mathbf{Sol}^{n}$

- ตั้งชื่อสายภายในที่เป็นเอาต์พุตของเกต : `NotC`, `P`, `Q` แล้วประกาศ `wire`
- เขียนเกตทีละตัว พอร์ตแรกเป็นเอาต์พุต เกตทุกตัวทำงานพร้อมกัน สลับลำดับบรรทัดแล้ววงจรเหมือนเดิม

- ตรวจด้วยตารางความจริง ผลของโมดูลตรงกับวงจรในรูปทุกแถว

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

แต่ละ `assign` คือสมการของเอาต์พุตหนึ่งตัว เขียนเป็นสมการได้ดังนี้

- `assign Y = (A & B) | (~C & D)` : $Y = A\,B + \overline{C}\,D$

รวมเป็นสมการของเอาต์พุต แล้วเขียนวงจรและตารางความจริง (ตรวจทุกแถวด้วยโปรแกรม)

$\mathbf{Ans}\quad \begin{aligned}Y &= A\,B + \overline{C}\,D\end{aligned}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="722" height="444" viewBox="0 0 722 444" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<path d="M200,74 H226 A26,33 0 0 1 226,140 H200 Z"/>
<line x1="40" y1="96" x2="200" y2="96"/>
<line x1="71" y1="118" x2="200" y2="118"/>
<polygon points="200,176 200,200 222,188"/>
<circle cx="227" cy="188" r="5"/>
<line x1="102" y1="188" x2="200" y2="188"/>
<line x1="252" y1="107" x2="278" y2="107"/>
<line x1="232" y1="188" x2="298" y2="188"/>
<path d="M352,236 H378 A26,33 0 0 1 378,302 H352 Z"/>
<line x1="298" y1="258" x2="352" y2="258"/>
<line x1="133" y1="280" x2="352" y2="280"/>
<line x1="404" y1="269" x2="430" y2="269"/>
<path d="M484,336 C506,336 532,352.5 544,369 C532,385.5 506,402 484,402 Q498,369 484,336 Z"/>
<line x1="278" y1="358" x2="490.2" y2="358"/>
<line x1="430" y1="380" x2="490.2" y2="380"/>
<line x1="544" y1="369" x2="570" y2="369"/>
<line x1="570" y1="369" x2="626" y2="369"/>
<line x1="40" y1="36" x2="40" y2="96"/>
<line x1="71" y1="36" x2="71" y2="118"/>
<line x1="102" y1="36" x2="102" y2="188"/>
<line x1="133" y1="36" x2="133" y2="280"/>
<line x1="278" y1="107" x2="278" y2="358"/>
<line x1="298" y1="188" x2="298" y2="258"/>
<line x1="430" y1="269" x2="430" y2="380"/>
<circle cx="40" cy="96" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="118" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="102" cy="188" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="298" cy="258" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="133" cy="280" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="278" cy="358" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="430" cy="380" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="278" cy="107" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="298" cy="188" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="430" cy="269" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="634" y="375" text-anchor="start">Y</text>
<text x="40" y="28" text-anchor="middle" font-size="16">A</text>
<text x="71" y="28" text-anchor="middle" font-size="16">B</text>
<text x="102" y="28" text-anchor="middle" font-size="16">C</text>
<text x="133" y="28" text-anchor="middle" font-size="16">D</text>
</g>
</svg>
</div>

| $A$ | $B$ | $C$ | $D$ | $Y$ |
|:-:|:-:|:-:|:-:|:-:|
| 0 | 0 | 0 | 0 | 0 |
| 0 | 0 | 0 | 1 | 1 |
| 0 | 0 | 1 | 0 | 0 |
| 0 | 0 | 1 | 1 | 0 |
| 0 | 1 | 0 | 0 | 0 |
| 0 | 1 | 0 | 1 | 1 |
| 0 | 1 | 1 | 0 | 0 |
| 0 | 1 | 1 | 1 | 0 |
| 1 | 0 | 0 | 0 | 0 |
| 1 | 0 | 0 | 1 | 1 |
| 1 | 0 | 1 | 0 | 0 |
| 1 | 0 | 1 | 1 | 0 |
| 1 | 1 | 0 | 0 | 1 |
| 1 | 1 | 0 | 1 | 1 |
| 1 | 1 | 1 | 0 | 1 |
| 1 | 1 | 1 | 1 | 1 |

### ข้อ 4  จงเขียนโมดูล Verilog แบบ Dataflow ของวงจรในรูป ($Y = A\,B + \overline{C}\,D$) {part=b; case=c1; style=flow}

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="742" height="444" viewBox="0 0 742 444" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<polygon points="200,76 200,100 222,88"/>
<circle cx="227" cy="88" r="5"/>
<line x1="102" y1="88" x2="200" y2="88"/>
<path d="M200,136 H226 A26,33 0 0 1 226,202 H200 Z"/>
<line x1="40" y1="158" x2="200" y2="158"/>
<line x1="71" y1="180" x2="200" y2="180"/>
<line x1="232" y1="88" x2="290.2" y2="88"/>
<line x1="252" y1="169" x2="310.2" y2="169"/>
<path d="M364.2,236 H390.2 A26,33 0 0 1 390.2,302 H364.2 Z"/>
<line x1="290.2" y1="258" x2="364.2" y2="258"/>
<line x1="133" y1="280" x2="364.2" y2="280"/>
<line x1="416.2" y1="269" x2="450.3" y2="269"/>
<path d="M504.3,336 C526.3,336 552.3,352.5 564.3,369 C552.3,385.5 526.3,402 504.3,402 Q518.3,369 504.3,336 Z"/>
<line x1="310.2" y1="358" x2="510.5" y2="358"/>
<line x1="450.3" y1="380" x2="510.5" y2="380"/>
<line x1="564.3" y1="369" x2="590.3" y2="369"/>
<line x1="590.3" y1="369" x2="646.3" y2="369"/>
<line x1="40" y1="36" x2="40" y2="158"/>
<line x1="71" y1="36" x2="71" y2="180"/>
<line x1="102" y1="36" x2="102" y2="88"/>
<line x1="133" y1="36" x2="133" y2="280"/>
<line x1="290.2" y1="88" x2="290.2" y2="258"/>
<line x1="310.2" y1="169" x2="310.2" y2="358"/>
<line x1="450.3" y1="269" x2="450.3" y2="380"/>
<circle cx="102" cy="88" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="40" cy="158" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="180" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="290.2" cy="258" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="133" cy="280" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="310.2" cy="358" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="450.3" cy="380" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="290.2" cy="88" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="310.2" cy="169" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="450.3" cy="269" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="240" y="81" text-anchor="start" font-size="13">NotC</text>
<text x="260" y="162" text-anchor="start" font-size="13">P</text>
<text x="424.2" y="262" text-anchor="start" font-size="13">Q</text>
<text x="654.3" y="375" text-anchor="start">Y</text>
<text x="40" y="28" text-anchor="middle" font-size="16">A</text>
<text x="71" y="28" text-anchor="middle" font-size="16">B</text>
<text x="102" y="28" text-anchor="middle" font-size="16">C</text>
<text x="133" y="28" text-anchor="middle" font-size="16">D</text>
</g>
</svg>
</div>

$\mathbf{Sol}^{n}$

- อ่านวงจรเป็นสมการของแต่ละเอาต์พุต
- เขียน `assign` ให้เอาต์พุตแต่ละตัว ด้วยตัวกระทำ `~` `&` `|` `^` (เกต NOT คือ `~`, AND คือ `&`, OR คือ `|`, XOR คือ `^`)

- ตรวจด้วยตารางความจริง ผลของโมดูลตรงกับวงจรในรูปทุกแถว

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

แต่ละบรรทัดของเกตคือเกต 1 ตัว พอร์ตแรกคือเอาต์พุต เขียนเป็นสมการได้ดังนี้

- `not (NotSel, Sel)` : $\mathit{NotSel} = \overline{\mathit{Sel}}$
- `and (P, In1, Sel)` : $P = \mathit{In1}\,\mathit{Sel}$
- `and (Q, In0, NotSel)` : $Q = \mathit{In0}\,\mathit{NotSel}$
- `or (Out, P, Q)` : $\mathit{Out} = P + Q$

รวมเป็นสมการของเอาต์พุต แล้วเขียนวงจรและตารางความจริง (ตรวจทุกแถวด้วยโปรแกรม)

$\mathbf{Ans}\quad \begin{aligned}\mathit{Out} &= \mathit{Sel}\,\mathit{In1} + \overline{\mathit{Sel}}\,\mathit{In0}\end{aligned}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="781" height="444" viewBox="0 0 781 444" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<polygon points="223,76 223,100 245,88"/>
<circle cx="250" cy="88" r="5"/>
<line x1="138" y1="88" x2="223" y2="88"/>
<path d="M223,136 H249 A26,33 0 0 1 249,202 H223 Z"/>
<line x1="89" y1="158" x2="223" y2="158"/>
<line x1="138" y1="180" x2="223" y2="180"/>
<line x1="255" y1="88" x2="329.4" y2="88"/>
<line x1="275" y1="169" x2="349.4" y2="169"/>
<path d="M403.4,236 H429.4 A26,33 0 0 1 429.4,302 H403.4 Z"/>
<line x1="40" y1="258" x2="403.4" y2="258"/>
<line x1="329.4" y1="280" x2="403.4" y2="280"/>
<line x1="455.4" y1="269" x2="489.4" y2="269"/>
<path d="M543.4,336 C565.4,336 591.4,352.5 603.4,369 C591.4,385.5 565.4,402 543.4,402 Q557.4,369 543.4,336 Z"/>
<line x1="349.4" y1="358" x2="549.6" y2="358"/>
<line x1="489.4" y1="380" x2="549.6" y2="380"/>
<line x1="603.4" y1="369" x2="629.4" y2="369"/>
<line x1="629.4" y1="369" x2="685.4" y2="369"/>
<line x1="40" y1="36" x2="40" y2="258"/>
<line x1="89" y1="36" x2="89" y2="158"/>
<line x1="138" y1="36" x2="138" y2="180"/>
<line x1="329.4" y1="88" x2="329.4" y2="280"/>
<line x1="349.4" y1="169" x2="349.4" y2="358"/>
<line x1="489.4" y1="269" x2="489.4" y2="380"/>
<circle cx="138" cy="88" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="89" cy="158" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="138" cy="180" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="40" cy="258" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="329.4" cy="280" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="349.4" cy="358" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="489.4" cy="380" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="329.4" cy="88" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="349.4" cy="169" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="489.4" cy="269" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="263" y="81" text-anchor="start" font-size="13">NotSel</text>
<text x="283" y="162" text-anchor="start" font-size="13">P</text>
<text x="463.4" y="262" text-anchor="start" font-size="13">Q</text>
<text x="693.4" y="375" text-anchor="start">Out</text>
<text x="40" y="28" text-anchor="middle" font-size="16">In0</text>
<text x="89" y="28" text-anchor="middle" font-size="16">In1</text>
<text x="138" y="28" text-anchor="middle" font-size="16">Sel</text>
</g>
</svg>
</div>

| $\mathit{In0}$ | $\mathit{In1}$ | $\mathit{Sel}$ | $\mathit{Out}$ |
|:-:|:-:|:-:|:-:|
| 0 | 0 | 0 | 0 |
| 0 | 0 | 1 | 0 |
| 0 | 1 | 0 | 0 |
| 0 | 1 | 1 | 1 |
| 1 | 0 | 0 | 1 |
| 1 | 0 | 1 | 0 |
| 1 | 1 | 0 | 1 |
| 1 | 1 | 1 | 1 |

### ข้อ 4  จงเขียนโมดูล Verilog แบบ Structural ของวงจรในรูป ($\mathit{Out} = \mathit{Sel}\,\mathit{In1} + \overline{\mathit{Sel}}\,\mathit{In0}$) {part=b; case=c2; style=struct}

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="781" height="444" viewBox="0 0 781 444" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<polygon points="223,76 223,100 245,88"/>
<circle cx="250" cy="88" r="5"/>
<line x1="138" y1="88" x2="223" y2="88"/>
<path d="M223,136 H249 A26,33 0 0 1 249,202 H223 Z"/>
<line x1="89" y1="158" x2="223" y2="158"/>
<line x1="138" y1="180" x2="223" y2="180"/>
<line x1="255" y1="88" x2="329.4" y2="88"/>
<line x1="275" y1="169" x2="349.4" y2="169"/>
<path d="M403.4,236 H429.4 A26,33 0 0 1 429.4,302 H403.4 Z"/>
<line x1="40" y1="258" x2="403.4" y2="258"/>
<line x1="329.4" y1="280" x2="403.4" y2="280"/>
<line x1="455.4" y1="269" x2="489.4" y2="269"/>
<path d="M543.4,336 C565.4,336 591.4,352.5 603.4,369 C591.4,385.5 565.4,402 543.4,402 Q557.4,369 543.4,336 Z"/>
<line x1="349.4" y1="358" x2="549.6" y2="358"/>
<line x1="489.4" y1="380" x2="549.6" y2="380"/>
<line x1="603.4" y1="369" x2="629.4" y2="369"/>
<line x1="629.4" y1="369" x2="685.4" y2="369"/>
<line x1="40" y1="36" x2="40" y2="258"/>
<line x1="89" y1="36" x2="89" y2="158"/>
<line x1="138" y1="36" x2="138" y2="180"/>
<line x1="329.4" y1="88" x2="329.4" y2="280"/>
<line x1="349.4" y1="169" x2="349.4" y2="358"/>
<line x1="489.4" y1="269" x2="489.4" y2="380"/>
<circle cx="138" cy="88" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="89" cy="158" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="138" cy="180" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="40" cy="258" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="329.4" cy="280" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="349.4" cy="358" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="489.4" cy="380" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="329.4" cy="88" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="349.4" cy="169" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="489.4" cy="269" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="263" y="81" text-anchor="start" font-size="13">NotSel</text>
<text x="283" y="162" text-anchor="start" font-size="13">P</text>
<text x="463.4" y="262" text-anchor="start" font-size="13">Q</text>
<text x="693.4" y="375" text-anchor="start">Out</text>
<text x="40" y="28" text-anchor="middle" font-size="16">In0</text>
<text x="89" y="28" text-anchor="middle" font-size="16">In1</text>
<text x="138" y="28" text-anchor="middle" font-size="16">Sel</text>
</g>
</svg>
</div>

$\mathbf{Sol}^{n}$

- ตั้งชื่อสายภายในที่เป็นเอาต์พุตของเกต : `NotSel`, `P`, `Q` แล้วประกาศ `wire`
- เขียนเกตทีละตัว พอร์ตแรกเป็นเอาต์พุต เกตทุกตัวทำงานพร้อมกัน สลับลำดับบรรทัดแล้ววงจรเหมือนเดิม

- ตรวจด้วยตารางความจริง ผลของโมดูลตรงกับวงจรในรูปทุกแถว

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

แต่ละ `assign` คือสมการของเอาต์พุตหนึ่งตัว เขียนเป็นสมการได้ดังนี้

- `assign Out = Sel ? In1 : In0` : $\mathit{Out} = \mathit{Sel}\,\mathit{In1} + \overline{\mathit{Sel}}\,\mathit{In0}$

รวมเป็นสมการของเอาต์พุต แล้วเขียนวงจรและตารางความจริง (ตรวจทุกแถวด้วยโปรแกรม)

$\mathbf{Ans}\quad \begin{aligned}\mathit{Out} &= \mathit{Sel}\,\mathit{In1} + \overline{\mathit{Sel}}\,\mathit{In0}\end{aligned}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="745" height="444" viewBox="0 0 745 444" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<polygon points="223,76 223,100 245,88"/>
<circle cx="250" cy="88" r="5"/>
<line x1="138" y1="88" x2="223" y2="88"/>
<path d="M223,136 H249 A26,33 0 0 1 249,202 H223 Z"/>
<line x1="89" y1="158" x2="223" y2="158"/>
<line x1="138" y1="180" x2="223" y2="180"/>
<line x1="255" y1="88" x2="301" y2="88"/>
<line x1="275" y1="169" x2="321" y2="169"/>
<path d="M375,236 H401 A26,33 0 0 1 401,302 H375 Z"/>
<line x1="40" y1="258" x2="375" y2="258"/>
<line x1="301" y1="280" x2="375" y2="280"/>
<line x1="427" y1="269" x2="453" y2="269"/>
<path d="M507,336 C529,336 555,352.5 567,369 C555,385.5 529,402 507,402 Q521,369 507,336 Z"/>
<line x1="321" y1="358" x2="513.2" y2="358"/>
<line x1="453" y1="380" x2="513.2" y2="380"/>
<line x1="567" y1="369" x2="593" y2="369"/>
<line x1="593" y1="369" x2="649" y2="369"/>
<line x1="40" y1="36" x2="40" y2="258"/>
<line x1="89" y1="36" x2="89" y2="158"/>
<line x1="138" y1="36" x2="138" y2="180"/>
<line x1="301" y1="88" x2="301" y2="280"/>
<line x1="321" y1="169" x2="321" y2="358"/>
<line x1="453" y1="269" x2="453" y2="380"/>
<circle cx="138" cy="88" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="89" cy="158" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="138" cy="180" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="40" cy="258" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="301" cy="280" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="321" cy="358" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="453" cy="380" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="301" cy="88" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="321" cy="169" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="453" cy="269" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="657" y="375" text-anchor="start">Out</text>
<text x="40" y="28" text-anchor="middle" font-size="16">In0</text>
<text x="89" y="28" text-anchor="middle" font-size="16">In1</text>
<text x="138" y="28" text-anchor="middle" font-size="16">Sel</text>
</g>
</svg>
</div>

| $\mathit{In0}$ | $\mathit{In1}$ | $\mathit{Sel}$ | $\mathit{Out}$ |
|:-:|:-:|:-:|:-:|
| 0 | 0 | 0 | 0 |
| 0 | 0 | 1 | 0 |
| 0 | 1 | 0 | 0 |
| 0 | 1 | 1 | 1 |
| 1 | 0 | 0 | 1 |
| 1 | 0 | 1 | 0 |
| 1 | 1 | 0 | 1 |
| 1 | 1 | 1 | 1 |

### ข้อ 4  จงเขียนโมดูล Verilog แบบ Dataflow ของวงจรในรูป ($\mathit{Out} = \mathit{Sel}\,\mathit{In1} + \overline{\mathit{Sel}}\,\mathit{In0}$) {part=b; case=c2; style=flow}

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="781" height="444" viewBox="0 0 781 444" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<polygon points="223,76 223,100 245,88"/>
<circle cx="250" cy="88" r="5"/>
<line x1="138" y1="88" x2="223" y2="88"/>
<path d="M223,136 H249 A26,33 0 0 1 249,202 H223 Z"/>
<line x1="89" y1="158" x2="223" y2="158"/>
<line x1="138" y1="180" x2="223" y2="180"/>
<line x1="255" y1="88" x2="329.4" y2="88"/>
<line x1="275" y1="169" x2="349.4" y2="169"/>
<path d="M403.4,236 H429.4 A26,33 0 0 1 429.4,302 H403.4 Z"/>
<line x1="40" y1="258" x2="403.4" y2="258"/>
<line x1="329.4" y1="280" x2="403.4" y2="280"/>
<line x1="455.4" y1="269" x2="489.4" y2="269"/>
<path d="M543.4,336 C565.4,336 591.4,352.5 603.4,369 C591.4,385.5 565.4,402 543.4,402 Q557.4,369 543.4,336 Z"/>
<line x1="349.4" y1="358" x2="549.6" y2="358"/>
<line x1="489.4" y1="380" x2="549.6" y2="380"/>
<line x1="603.4" y1="369" x2="629.4" y2="369"/>
<line x1="629.4" y1="369" x2="685.4" y2="369"/>
<line x1="40" y1="36" x2="40" y2="258"/>
<line x1="89" y1="36" x2="89" y2="158"/>
<line x1="138" y1="36" x2="138" y2="180"/>
<line x1="329.4" y1="88" x2="329.4" y2="280"/>
<line x1="349.4" y1="169" x2="349.4" y2="358"/>
<line x1="489.4" y1="269" x2="489.4" y2="380"/>
<circle cx="138" cy="88" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="89" cy="158" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="138" cy="180" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="40" cy="258" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="329.4" cy="280" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="349.4" cy="358" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="489.4" cy="380" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="329.4" cy="88" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="349.4" cy="169" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="489.4" cy="269" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="263" y="81" text-anchor="start" font-size="13">NotSel</text>
<text x="283" y="162" text-anchor="start" font-size="13">P</text>
<text x="463.4" y="262" text-anchor="start" font-size="13">Q</text>
<text x="693.4" y="375" text-anchor="start">Out</text>
<text x="40" y="28" text-anchor="middle" font-size="16">In0</text>
<text x="89" y="28" text-anchor="middle" font-size="16">In1</text>
<text x="138" y="28" text-anchor="middle" font-size="16">Sel</text>
</g>
</svg>
</div>

$\mathbf{Sol}^{n}$

- อ่านวงจรเป็นสมการของแต่ละเอาต์พุต
- เขียน `assign` ให้เอาต์พุตแต่ละตัว ด้วยตัวกระทำ `~` `&` `|` `^` (เกต NOT คือ `~`, AND คือ `&`, OR คือ `|`, XOR คือ `^`)

- ตรวจด้วยตารางความจริง ผลของโมดูลตรงกับวงจรในรูปทุกแถว

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

แต่ละบรรทัดของเกตคือเกต 1 ตัว พอร์ตแรกคือเอาต์พุต เขียนเป็นสมการได้ดังนี้

- `not (NotSel0, Sel0)` : $\mathit{NotSel0} = \overline{\mathit{Sel0}}$
- `not (NotSel1, Sel1)` : $\mathit{NotSel1} = \overline{\mathit{Sel1}}$
- `and (Y0, In0, NotSel1, NotSel0)` : $\mathit{Y0} = \mathit{In0}\,\mathit{NotSel1}\,\mathit{NotSel0}$
- `and (Y1, In1, NotSel1, Sel0)` : $\mathit{Y1} = \mathit{In1}\,\mathit{NotSel1}\,\mathit{Sel0}$
- `and (Y2, In2, Sel1, NotSel0)` : $\mathit{Y2} = \mathit{In2}\,\mathit{Sel1}\,\mathit{NotSel0}$
- `and (Y3, In3, Sel1, Sel0)` : $\mathit{Y3} = \mathit{In3}\,\mathit{Sel1}\,\mathit{Sel0}$
- `or (Out, Y0, Y1, Y2, Y3)` : $\mathit{Out} = \mathit{Y0} + \mathit{Y1} + \mathit{Y2} + \mathit{Y3}$

รวมเป็นสมการของเอาต์พุต แล้วเขียนวงจรและตารางความจริง (ตรวจทุกแถวด้วยโปรแกรม)

$\mathbf{Ans}\quad \begin{aligned}\mathit{Out} &= \overline{\mathit{Sel1}}\,\overline{\mathit{Sel0}}\,\mathit{In0} + \overline{\mathit{Sel1}}\,\mathit{Sel0}\,\mathit{In1} + \mathit{Sel1}\,\overline{\mathit{Sel0}}\,\mathit{In2} + \mathit{Sel1}\,\mathit{Sel0}\,\mathit{In3}\end{aligned}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="1054" height="838" viewBox="0 0 1054 838" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<polygon points="424,76 424,100 446,88"/>
<circle cx="451" cy="88" r="5"/>
<line x1="272" y1="88" x2="424" y2="88"/>
<polygon points="424,138 424,162 446,150"/>
<circle cx="451" cy="150" r="5"/>
<line x1="330" y1="150" x2="424" y2="150"/>
<path d="M424,198 H450 A26,44 0 0 1 450,286 H424 Z"/>
<line x1="214" y1="220" x2="424" y2="220"/>
<line x1="330" y1="242" x2="424" y2="242"/>
<line x1="272" y1="264" x2="424" y2="264"/>
<line x1="456" y1="88" x2="536.2" y2="88"/>
<line x1="456" y1="150" x2="556.2" y2="150"/>
<line x1="476" y1="242" x2="576.2" y2="242"/>
<path d="M630.2,320 H656.2 A26,44 0 0 1 656.2,408 H630.2 Z"/>
<line x1="40" y1="342" x2="630.2" y2="342"/>
<line x1="556.2" y1="364" x2="630.2" y2="364"/>
<line x1="536.2" y1="386" x2="630.2" y2="386"/>
<path d="M630.2,442 H656.2 A26,44 0 0 1 656.2,530 H630.2 Z"/>
<line x1="98" y1="464" x2="630.2" y2="464"/>
<line x1="556.2" y1="486" x2="630.2" y2="486"/>
<line x1="272" y1="508" x2="630.2" y2="508"/>
<path d="M630.2,564 H656.2 A26,44 0 0 1 656.2,652 H630.2 Z"/>
<line x1="156" y1="586" x2="630.2" y2="586"/>
<line x1="330" y1="608" x2="630.2" y2="608"/>
<line x1="536.2" y1="630" x2="630.2" y2="630"/>
<line x1="682.2" y1="364" x2="722.1" y2="364"/>
<line x1="682.2" y1="486" x2="742.1" y2="486"/>
<line x1="682.2" y1="608" x2="762.1" y2="608"/>
<path d="M816.1,686 C838.1,686 864.1,713.5 876.1,741 C864.1,768.5 838.1,796 816.1,796 Q830.1,741 816.1,686 Z"/>
<line x1="722.1" y1="708" x2="820.6" y2="708"/>
<line x1="742.1" y1="730" x2="822.8" y2="730"/>
<line x1="762.1" y1="752" x2="822.8" y2="752"/>
<line x1="576.2" y1="774" x2="820.6" y2="774"/>
<line x1="876.1" y1="741" x2="902.1" y2="741"/>
<line x1="902.1" y1="741" x2="958.1" y2="741"/>
<line x1="40" y1="36" x2="40" y2="342"/>
<line x1="98" y1="36" x2="98" y2="464"/>
<line x1="156" y1="36" x2="156" y2="586"/>
<line x1="214" y1="36" x2="214" y2="220"/>
<line x1="272" y1="36" x2="272" y2="508"/>
<line x1="330" y1="36" x2="330" y2="608"/>
<line x1="536.2" y1="88" x2="536.2" y2="630"/>
<line x1="556.2" y1="150" x2="556.2" y2="486"/>
<line x1="576.2" y1="242" x2="576.2" y2="774"/>
<line x1="722.1" y1="364" x2="722.1" y2="708"/>
<line x1="742.1" y1="486" x2="742.1" y2="730"/>
<line x1="762.1" y1="608" x2="762.1" y2="752"/>
<circle cx="272" cy="88" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="330" cy="150" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="214" cy="220" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="330" cy="242" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="272" cy="264" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="40" cy="342" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="556.2" cy="364" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="536.2" cy="386" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="98" cy="464" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="556.2" cy="486" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="272" cy="508" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="156" cy="586" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="330" cy="608" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="536.2" cy="630" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="722.1" cy="708" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="742.1" cy="730" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="762.1" cy="752" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="576.2" cy="774" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="536.2" cy="88" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="556.2" cy="150" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="576.2" cy="242" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="722.1" cy="364" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="742.1" cy="486" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="762.1" cy="608" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="464" y="81" text-anchor="start" font-size="13">NotSel0</text>
<text x="464" y="143" text-anchor="start" font-size="13">NotSel1</text>
<text x="484" y="235" text-anchor="start" font-size="13">Y<tspan dy="4" font-size="9">3</tspan></text>
<text x="690.2" y="357" text-anchor="start" font-size="13">Y<tspan dy="4" font-size="9">0</tspan></text>
<text x="690.2" y="479" text-anchor="start" font-size="13">Y<tspan dy="4" font-size="9">1</tspan></text>
<text x="690.2" y="601" text-anchor="start" font-size="13">Y<tspan dy="4" font-size="9">2</tspan></text>
<text x="966.1" y="747" text-anchor="start">Out</text>
<text x="40" y="28" text-anchor="middle" font-size="16">In0</text>
<text x="98" y="28" text-anchor="middle" font-size="16">In1</text>
<text x="156" y="28" text-anchor="middle" font-size="16">In2</text>
<text x="214" y="28" text-anchor="middle" font-size="16">In3</text>
<text x="272" y="28" text-anchor="middle" font-size="16">Sel0</text>
<text x="330" y="28" text-anchor="middle" font-size="16">Sel1</text>
</g>
</svg>
</div>

| $\mathit{Sel1}$ | $\mathit{Sel0}$ | $\mathit{Out}$ |
|:-:|:-:|:-:|
| 0 | 0 | $\mathit{In0}$ |
| 0 | 1 | $\mathit{In1}$ |
| 1 | 0 | $\mathit{In2}$ |
| 1 | 1 | $\mathit{In3}$ |

### ข้อ 4  จงเขียนโมดูล Verilog แบบ Structural ของวงจรในรูป ($\mathit{Out} = \overline{\mathit{Sel1}}\,\overline{\mathit{Sel0}}\,\mathit{In0} + \overline{\mathit{Sel1}}\,\mathit{Sel0}\,\mathit{In1} + \mathit{Sel1}\,\overline{\mathit{Sel0}}\,\mathit{In2} + \mathit{Sel1}\,\mathit{Sel0}\,\mathit{In3}$) {part=b; case=c3; style=struct}

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="1054" height="838" viewBox="0 0 1054 838" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<polygon points="424,76 424,100 446,88"/>
<circle cx="451" cy="88" r="5"/>
<line x1="272" y1="88" x2="424" y2="88"/>
<polygon points="424,138 424,162 446,150"/>
<circle cx="451" cy="150" r="5"/>
<line x1="330" y1="150" x2="424" y2="150"/>
<path d="M424,198 H450 A26,44 0 0 1 450,286 H424 Z"/>
<line x1="214" y1="220" x2="424" y2="220"/>
<line x1="330" y1="242" x2="424" y2="242"/>
<line x1="272" y1="264" x2="424" y2="264"/>
<line x1="456" y1="88" x2="536.2" y2="88"/>
<line x1="456" y1="150" x2="556.2" y2="150"/>
<line x1="476" y1="242" x2="576.2" y2="242"/>
<path d="M630.2,320 H656.2 A26,44 0 0 1 656.2,408 H630.2 Z"/>
<line x1="40" y1="342" x2="630.2" y2="342"/>
<line x1="556.2" y1="364" x2="630.2" y2="364"/>
<line x1="536.2" y1="386" x2="630.2" y2="386"/>
<path d="M630.2,442 H656.2 A26,44 0 0 1 656.2,530 H630.2 Z"/>
<line x1="98" y1="464" x2="630.2" y2="464"/>
<line x1="556.2" y1="486" x2="630.2" y2="486"/>
<line x1="272" y1="508" x2="630.2" y2="508"/>
<path d="M630.2,564 H656.2 A26,44 0 0 1 656.2,652 H630.2 Z"/>
<line x1="156" y1="586" x2="630.2" y2="586"/>
<line x1="330" y1="608" x2="630.2" y2="608"/>
<line x1="536.2" y1="630" x2="630.2" y2="630"/>
<line x1="682.2" y1="364" x2="722.1" y2="364"/>
<line x1="682.2" y1="486" x2="742.1" y2="486"/>
<line x1="682.2" y1="608" x2="762.1" y2="608"/>
<path d="M816.1,686 C838.1,686 864.1,713.5 876.1,741 C864.1,768.5 838.1,796 816.1,796 Q830.1,741 816.1,686 Z"/>
<line x1="722.1" y1="708" x2="820.6" y2="708"/>
<line x1="742.1" y1="730" x2="822.8" y2="730"/>
<line x1="762.1" y1="752" x2="822.8" y2="752"/>
<line x1="576.2" y1="774" x2="820.6" y2="774"/>
<line x1="876.1" y1="741" x2="902.1" y2="741"/>
<line x1="902.1" y1="741" x2="958.1" y2="741"/>
<line x1="40" y1="36" x2="40" y2="342"/>
<line x1="98" y1="36" x2="98" y2="464"/>
<line x1="156" y1="36" x2="156" y2="586"/>
<line x1="214" y1="36" x2="214" y2="220"/>
<line x1="272" y1="36" x2="272" y2="508"/>
<line x1="330" y1="36" x2="330" y2="608"/>
<line x1="536.2" y1="88" x2="536.2" y2="630"/>
<line x1="556.2" y1="150" x2="556.2" y2="486"/>
<line x1="576.2" y1="242" x2="576.2" y2="774"/>
<line x1="722.1" y1="364" x2="722.1" y2="708"/>
<line x1="742.1" y1="486" x2="742.1" y2="730"/>
<line x1="762.1" y1="608" x2="762.1" y2="752"/>
<circle cx="272" cy="88" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="330" cy="150" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="214" cy="220" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="330" cy="242" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="272" cy="264" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="40" cy="342" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="556.2" cy="364" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="536.2" cy="386" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="98" cy="464" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="556.2" cy="486" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="272" cy="508" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="156" cy="586" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="330" cy="608" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="536.2" cy="630" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="722.1" cy="708" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="742.1" cy="730" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="762.1" cy="752" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="576.2" cy="774" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="536.2" cy="88" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="556.2" cy="150" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="576.2" cy="242" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="722.1" cy="364" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="742.1" cy="486" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="762.1" cy="608" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="464" y="81" text-anchor="start" font-size="13">NotSel0</text>
<text x="464" y="143" text-anchor="start" font-size="13">NotSel1</text>
<text x="484" y="235" text-anchor="start" font-size="13">Y<tspan dy="4" font-size="9">3</tspan></text>
<text x="690.2" y="357" text-anchor="start" font-size="13">Y<tspan dy="4" font-size="9">0</tspan></text>
<text x="690.2" y="479" text-anchor="start" font-size="13">Y<tspan dy="4" font-size="9">1</tspan></text>
<text x="690.2" y="601" text-anchor="start" font-size="13">Y<tspan dy="4" font-size="9">2</tspan></text>
<text x="966.1" y="747" text-anchor="start">Out</text>
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

- ตั้งชื่อสายภายในที่เป็นเอาต์พุตของเกต : `NotSel0`, `NotSel1`, `Y0`, `Y1`, `Y2`, `Y3` แล้วประกาศ `wire`
- เขียนเกตทีละตัว พอร์ตแรกเป็นเอาต์พุต เกตทุกตัวทำงานพร้อมกัน สลับลำดับบรรทัดแล้ววงจรเหมือนเดิม

- ตรวจด้วยตารางความจริง ผลของโมดูลตรงกับวงจรในรูปทุกแถว

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

แต่ละ `assign` คือสมการของเอาต์พุตหนึ่งตัว เขียนเป็นสมการได้ดังนี้

- `assign Out = (~Sel1 & ~Sel0 & In0) | (~Sel1 & Sel0 & In1)` : $\mathit{Out} = \overline{\mathit{Sel1}}\,\overline{\mathit{Sel0}}\,\mathit{In0} + \overline{\mathit{Sel1}}\,\mathit{Sel0}\,\mathit{In1} + \mathit{Sel1}\,\overline{\mathit{Sel0}}\,\mathit{In2} + \mathit{Sel1}\,\mathit{Sel0}\,\mathit{In3}$

รวมเป็นสมการของเอาต์พุต แล้วเขียนวงจรและตารางความจริง (ตรวจทุกแถวด้วยโปรแกรม)

$\mathbf{Ans}\quad \begin{aligned}\mathit{Out} &= \overline{\mathit{Sel1}}\,\overline{\mathit{Sel0}}\,\mathit{In0} + \overline{\mathit{Sel1}}\,\mathit{Sel0}\,\mathit{In1} + \mathit{Sel1}\,\overline{\mathit{Sel0}}\,\mathit{In2} + \mathit{Sel1}\,\mathit{Sel0}\,\mathit{In3}\end{aligned}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="1006" height="838" viewBox="0 0 1006 838" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<polygon points="424,76 424,100 446,88"/>
<circle cx="451" cy="88" r="5"/>
<line x1="330" y1="88" x2="424" y2="88"/>
<polygon points="424,138 424,162 446,150"/>
<circle cx="451" cy="150" r="5"/>
<line x1="272" y1="150" x2="424" y2="150"/>
<path d="M424,198 H450 A26,44 0 0 1 450,286 H424 Z"/>
<line x1="330" y1="220" x2="424" y2="220"/>
<line x1="272" y1="242" x2="424" y2="242"/>
<line x1="214" y1="264" x2="424" y2="264"/>
<line x1="456" y1="88" x2="502" y2="88"/>
<line x1="456" y1="150" x2="522" y2="150"/>
<line x1="476" y1="242" x2="542" y2="242"/>
<path d="M596,320 H622 A26,44 0 0 1 622,408 H596 Z"/>
<line x1="502" y1="342" x2="596" y2="342"/>
<line x1="522" y1="364" x2="596" y2="364"/>
<line x1="40" y1="386" x2="596" y2="386"/>
<path d="M596,442 H622 A26,44 0 0 1 622,530 H596 Z"/>
<line x1="502" y1="464" x2="596" y2="464"/>
<line x1="272" y1="486" x2="596" y2="486"/>
<line x1="98" y1="508" x2="596" y2="508"/>
<path d="M596,564 H622 A26,44 0 0 1 622,652 H596 Z"/>
<line x1="330" y1="586" x2="596" y2="586"/>
<line x1="522" y1="608" x2="596" y2="608"/>
<line x1="156" y1="630" x2="596" y2="630"/>
<line x1="648" y1="364" x2="674" y2="364"/>
<line x1="648" y1="486" x2="694" y2="486"/>
<line x1="648" y1="608" x2="714" y2="608"/>
<path d="M768,686 C790,686 816,713.5 828,741 C816,768.5 790,796 768,796 Q782,741 768,686 Z"/>
<line x1="674" y1="708" x2="772.5" y2="708"/>
<line x1="694" y1="730" x2="774.7" y2="730"/>
<line x1="714" y1="752" x2="774.7" y2="752"/>
<line x1="542" y1="774" x2="772.5" y2="774"/>
<line x1="828" y1="741" x2="854" y2="741"/>
<line x1="854" y1="741" x2="910" y2="741"/>
<line x1="40" y1="36" x2="40" y2="386"/>
<line x1="98" y1="36" x2="98" y2="508"/>
<line x1="156" y1="36" x2="156" y2="630"/>
<line x1="214" y1="36" x2="214" y2="264"/>
<line x1="272" y1="36" x2="272" y2="486"/>
<line x1="330" y1="36" x2="330" y2="586"/>
<line x1="502" y1="88" x2="502" y2="464"/>
<line x1="522" y1="150" x2="522" y2="608"/>
<line x1="542" y1="242" x2="542" y2="774"/>
<line x1="674" y1="364" x2="674" y2="708"/>
<line x1="694" y1="486" x2="694" y2="730"/>
<line x1="714" y1="608" x2="714" y2="752"/>
<circle cx="330" cy="88" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="272" cy="150" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="330" cy="220" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="272" cy="242" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="214" cy="264" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="502" cy="342" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="522" cy="364" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="40" cy="386" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="502" cy="464" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="272" cy="486" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="98" cy="508" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="330" cy="586" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="522" cy="608" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="156" cy="630" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="674" cy="708" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="694" cy="730" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="714" cy="752" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="542" cy="774" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="502" cy="88" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="522" cy="150" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="542" cy="242" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="674" cy="364" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="694" cy="486" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="714" cy="608" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="918" y="747" text-anchor="start">Out</text>
<text x="40" y="28" text-anchor="middle" font-size="16">In0</text>
<text x="98" y="28" text-anchor="middle" font-size="16">In1</text>
<text x="156" y="28" text-anchor="middle" font-size="16">In2</text>
<text x="214" y="28" text-anchor="middle" font-size="16">In3</text>
<text x="272" y="28" text-anchor="middle" font-size="16">Sel0</text>
<text x="330" y="28" text-anchor="middle" font-size="16">Sel1</text>
</g>
</svg>
</div>

| $\mathit{Sel1}$ | $\mathit{Sel0}$ | $\mathit{Out}$ |
|:-:|:-:|:-:|
| 0 | 0 | $\mathit{In0}$ |
| 0 | 1 | $\mathit{In1}$ |
| 1 | 0 | $\mathit{In2}$ |
| 1 | 1 | $\mathit{In3}$ |

### ข้อ 4  จงเขียนโมดูล Verilog แบบ Dataflow ของวงจรในรูป ($\mathit{Out} = \overline{\mathit{Sel1}}\,\overline{\mathit{Sel0}}\,\mathit{In0} + \overline{\mathit{Sel1}}\,\mathit{Sel0}\,\mathit{In1} + \mathit{Sel1}\,\overline{\mathit{Sel0}}\,\mathit{In2} + \mathit{Sel1}\,\mathit{Sel0}\,\mathit{In3}$) {part=b; case=c3; style=flow}

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="1054" height="838" viewBox="0 0 1054 838" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<polygon points="424,76 424,100 446,88"/>
<circle cx="451" cy="88" r="5"/>
<line x1="272" y1="88" x2="424" y2="88"/>
<polygon points="424,138 424,162 446,150"/>
<circle cx="451" cy="150" r="5"/>
<line x1="330" y1="150" x2="424" y2="150"/>
<path d="M424,198 H450 A26,44 0 0 1 450,286 H424 Z"/>
<line x1="214" y1="220" x2="424" y2="220"/>
<line x1="330" y1="242" x2="424" y2="242"/>
<line x1="272" y1="264" x2="424" y2="264"/>
<line x1="456" y1="88" x2="536.2" y2="88"/>
<line x1="456" y1="150" x2="556.2" y2="150"/>
<line x1="476" y1="242" x2="576.2" y2="242"/>
<path d="M630.2,320 H656.2 A26,44 0 0 1 656.2,408 H630.2 Z"/>
<line x1="40" y1="342" x2="630.2" y2="342"/>
<line x1="556.2" y1="364" x2="630.2" y2="364"/>
<line x1="536.2" y1="386" x2="630.2" y2="386"/>
<path d="M630.2,442 H656.2 A26,44 0 0 1 656.2,530 H630.2 Z"/>
<line x1="98" y1="464" x2="630.2" y2="464"/>
<line x1="556.2" y1="486" x2="630.2" y2="486"/>
<line x1="272" y1="508" x2="630.2" y2="508"/>
<path d="M630.2,564 H656.2 A26,44 0 0 1 656.2,652 H630.2 Z"/>
<line x1="156" y1="586" x2="630.2" y2="586"/>
<line x1="330" y1="608" x2="630.2" y2="608"/>
<line x1="536.2" y1="630" x2="630.2" y2="630"/>
<line x1="682.2" y1="364" x2="722.1" y2="364"/>
<line x1="682.2" y1="486" x2="742.1" y2="486"/>
<line x1="682.2" y1="608" x2="762.1" y2="608"/>
<path d="M816.1,686 C838.1,686 864.1,713.5 876.1,741 C864.1,768.5 838.1,796 816.1,796 Q830.1,741 816.1,686 Z"/>
<line x1="722.1" y1="708" x2="820.6" y2="708"/>
<line x1="742.1" y1="730" x2="822.8" y2="730"/>
<line x1="762.1" y1="752" x2="822.8" y2="752"/>
<line x1="576.2" y1="774" x2="820.6" y2="774"/>
<line x1="876.1" y1="741" x2="902.1" y2="741"/>
<line x1="902.1" y1="741" x2="958.1" y2="741"/>
<line x1="40" y1="36" x2="40" y2="342"/>
<line x1="98" y1="36" x2="98" y2="464"/>
<line x1="156" y1="36" x2="156" y2="586"/>
<line x1="214" y1="36" x2="214" y2="220"/>
<line x1="272" y1="36" x2="272" y2="508"/>
<line x1="330" y1="36" x2="330" y2="608"/>
<line x1="536.2" y1="88" x2="536.2" y2="630"/>
<line x1="556.2" y1="150" x2="556.2" y2="486"/>
<line x1="576.2" y1="242" x2="576.2" y2="774"/>
<line x1="722.1" y1="364" x2="722.1" y2="708"/>
<line x1="742.1" y1="486" x2="742.1" y2="730"/>
<line x1="762.1" y1="608" x2="762.1" y2="752"/>
<circle cx="272" cy="88" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="330" cy="150" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="214" cy="220" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="330" cy="242" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="272" cy="264" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="40" cy="342" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="556.2" cy="364" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="536.2" cy="386" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="98" cy="464" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="556.2" cy="486" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="272" cy="508" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="156" cy="586" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="330" cy="608" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="536.2" cy="630" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="722.1" cy="708" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="742.1" cy="730" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="762.1" cy="752" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="576.2" cy="774" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="536.2" cy="88" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="556.2" cy="150" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="576.2" cy="242" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="722.1" cy="364" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="742.1" cy="486" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="762.1" cy="608" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="464" y="81" text-anchor="start" font-size="13">NotSel0</text>
<text x="464" y="143" text-anchor="start" font-size="13">NotSel1</text>
<text x="484" y="235" text-anchor="start" font-size="13">Y<tspan dy="4" font-size="9">3</tspan></text>
<text x="690.2" y="357" text-anchor="start" font-size="13">Y<tspan dy="4" font-size="9">0</tspan></text>
<text x="690.2" y="479" text-anchor="start" font-size="13">Y<tspan dy="4" font-size="9">1</tspan></text>
<text x="690.2" y="601" text-anchor="start" font-size="13">Y<tspan dy="4" font-size="9">2</tspan></text>
<text x="966.1" y="747" text-anchor="start">Out</text>
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

- อ่านวงจรเป็นสมการของแต่ละเอาต์พุต
- เขียน `assign` ให้เอาต์พุตแต่ละตัว ด้วยตัวกระทำ `~` `&` `|` `^` (เกต NOT คือ `~`, AND คือ `&`, OR คือ `|`, XOR คือ `^`)

- ตรวจด้วยตารางความจริง ผลของโมดูลตรงกับวงจรในรูปทุกแถว

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

แต่ละบรรทัดของเกตคือเกต 1 ตัว พอร์ตแรกคือเอาต์พุต เขียนเป็นสมการได้ดังนี้

- `not (NA, A)` : $\mathit{NA} = \overline{A}$
- `not (NB, B)` : $\mathit{NB} = \overline{B}$
- `and (P, A, NB)` : $P = A\,\mathit{NB}$
- `and (Q, NA, B)` : $Q = \mathit{NA}\,B$
- `or (Y, P, Q)` : $Y = P + Q$

รวมเป็นสมการของเอาต์พุต แล้วเขียนวงจรและตารางความจริง (ตรวจทุกแถวด้วยโปรแกรม)

$\mathbf{Ans}\quad \begin{aligned}Y &= A\,\overline{B} + \overline{A}\,B\end{aligned}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="684" height="506" viewBox="0 0 684 506" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<polygon points="138,76 138,100 160,88"/>
<circle cx="165" cy="88" r="5"/>
<line x1="40" y1="88" x2="138" y2="88"/>
<polygon points="138,138 138,162 160,150"/>
<circle cx="165" cy="150" r="5"/>
<line x1="71" y1="150" x2="138" y2="150"/>
<line x1="170" y1="88" x2="212.1" y2="88"/>
<line x1="170" y1="150" x2="232.1" y2="150"/>
<path d="M286.1,198 H312.1 A26,33 0 0 1 312.1,264 H286.1 Z"/>
<line x1="40" y1="220" x2="286.1" y2="220"/>
<line x1="232.1" y1="242" x2="286.1" y2="242"/>
<path d="M286.1,298 H312.1 A26,33 0 0 1 312.1,364 H286.1 Z"/>
<line x1="212.1" y1="320" x2="286.1" y2="320"/>
<line x1="71" y1="342" x2="286.1" y2="342"/>
<line x1="338.1" y1="231" x2="372.2" y2="231"/>
<line x1="338.1" y1="331" x2="392.2" y2="331"/>
<path d="M446.2,398 C468.2,398 494.2,414.5 506.2,431 C494.2,447.5 468.2,464 446.2,464 Q460.2,431 446.2,398 Z"/>
<line x1="372.2" y1="420" x2="452.4" y2="420"/>
<line x1="392.2" y1="442" x2="452.4" y2="442"/>
<line x1="506.2" y1="431" x2="532.2" y2="431"/>
<line x1="532.2" y1="431" x2="588.2" y2="431"/>
<line x1="40" y1="36" x2="40" y2="220"/>
<line x1="71" y1="36" x2="71" y2="342"/>
<line x1="212.1" y1="88" x2="212.1" y2="320"/>
<line x1="232.1" y1="150" x2="232.1" y2="242"/>
<line x1="372.2" y1="231" x2="372.2" y2="420"/>
<line x1="392.2" y1="331" x2="392.2" y2="442"/>
<circle cx="40" cy="88" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="150" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="40" cy="220" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="232.1" cy="242" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="212.1" cy="320" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="342" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="372.2" cy="420" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="392.2" cy="442" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="212.1" cy="88" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="232.1" cy="150" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="372.2" cy="231" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="392.2" cy="331" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="178" y="81" text-anchor="start" font-size="13">NA</text>
<text x="178" y="143" text-anchor="start" font-size="13">NB</text>
<text x="346.1" y="224" text-anchor="start" font-size="13">P</text>
<text x="346.1" y="324" text-anchor="start" font-size="13">Q</text>
<text x="596.2" y="437" text-anchor="start">Y</text>
<text x="40" y="28" text-anchor="middle" font-size="16">A</text>
<text x="71" y="28" text-anchor="middle" font-size="16">B</text>
</g>
</svg>
</div>

| $A$ | $B$ | $Y$ |
|:-:|:-:|:-:|
| 0 | 0 | 0 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 0 |

### ข้อ 4  จงเขียนโมดูล Verilog แบบ Structural ของวงจรในรูป ($Y = A\,\overline{B} + \overline{A}\,B$) {part=b; case=c4; style=struct}

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="684" height="506" viewBox="0 0 684 506" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<polygon points="138,76 138,100 160,88"/>
<circle cx="165" cy="88" r="5"/>
<line x1="40" y1="88" x2="138" y2="88"/>
<polygon points="138,138 138,162 160,150"/>
<circle cx="165" cy="150" r="5"/>
<line x1="71" y1="150" x2="138" y2="150"/>
<line x1="170" y1="88" x2="212.1" y2="88"/>
<line x1="170" y1="150" x2="232.1" y2="150"/>
<path d="M286.1,198 H312.1 A26,33 0 0 1 312.1,264 H286.1 Z"/>
<line x1="40" y1="220" x2="286.1" y2="220"/>
<line x1="232.1" y1="242" x2="286.1" y2="242"/>
<path d="M286.1,298 H312.1 A26,33 0 0 1 312.1,364 H286.1 Z"/>
<line x1="212.1" y1="320" x2="286.1" y2="320"/>
<line x1="71" y1="342" x2="286.1" y2="342"/>
<line x1="338.1" y1="231" x2="372.2" y2="231"/>
<line x1="338.1" y1="331" x2="392.2" y2="331"/>
<path d="M446.2,398 C468.2,398 494.2,414.5 506.2,431 C494.2,447.5 468.2,464 446.2,464 Q460.2,431 446.2,398 Z"/>
<line x1="372.2" y1="420" x2="452.4" y2="420"/>
<line x1="392.2" y1="442" x2="452.4" y2="442"/>
<line x1="506.2" y1="431" x2="532.2" y2="431"/>
<line x1="532.2" y1="431" x2="588.2" y2="431"/>
<line x1="40" y1="36" x2="40" y2="220"/>
<line x1="71" y1="36" x2="71" y2="342"/>
<line x1="212.1" y1="88" x2="212.1" y2="320"/>
<line x1="232.1" y1="150" x2="232.1" y2="242"/>
<line x1="372.2" y1="231" x2="372.2" y2="420"/>
<line x1="392.2" y1="331" x2="392.2" y2="442"/>
<circle cx="40" cy="88" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="150" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="40" cy="220" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="232.1" cy="242" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="212.1" cy="320" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="342" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="372.2" cy="420" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="392.2" cy="442" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="212.1" cy="88" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="232.1" cy="150" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="372.2" cy="231" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="392.2" cy="331" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="178" y="81" text-anchor="start" font-size="13">NA</text>
<text x="178" y="143" text-anchor="start" font-size="13">NB</text>
<text x="346.1" y="224" text-anchor="start" font-size="13">P</text>
<text x="346.1" y="324" text-anchor="start" font-size="13">Q</text>
<text x="596.2" y="437" text-anchor="start">Y</text>
<text x="40" y="28" text-anchor="middle" font-size="16">A</text>
<text x="71" y="28" text-anchor="middle" font-size="16">B</text>
</g>
</svg>
</div>

$\mathbf{Sol}^{n}$

- ตั้งชื่อสายภายในที่เป็นเอาต์พุตของเกต : `NA`, `NB`, `P`, `Q` แล้วประกาศ `wire`
- เขียนเกตทีละตัว พอร์ตแรกเป็นเอาต์พุต เกตทุกตัวทำงานพร้อมกัน สลับลำดับบรรทัดแล้ววงจรเหมือนเดิม

- ตรวจด้วยตารางความจริง ผลของโมดูลตรงกับวงจรในรูปทุกแถว

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

แต่ละ `assign` คือสมการของเอาต์พุตหนึ่งตัว เขียนเป็นสมการได้ดังนี้

- `assign Y = (A & ~B) | (~A & B)` : $Y = A\,\overline{B} + \overline{A}\,B$

รวมเป็นสมการของเอาต์พุต แล้วเขียนวงจรและตารางความจริง (ตรวจทุกแถวด้วยโปรแกรม)

$\mathbf{Ans}\quad \begin{aligned}Y &= A\,\overline{B} + \overline{A}\,B\end{aligned}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="660" height="506" viewBox="0 0 660 506" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<polygon points="138,76 138,100 160,88"/>
<circle cx="165" cy="88" r="5"/>
<line x1="71" y1="88" x2="138" y2="88"/>
<polygon points="138,138 138,162 160,150"/>
<circle cx="165" cy="150" r="5"/>
<line x1="40" y1="150" x2="138" y2="150"/>
<line x1="170" y1="88" x2="196" y2="88"/>
<line x1="170" y1="150" x2="216" y2="150"/>
<path d="M270,198 H296 A26,33 0 0 1 296,264 H270 Z"/>
<line x1="40" y1="220" x2="270" y2="220"/>
<line x1="196" y1="242" x2="270" y2="242"/>
<path d="M270,298 H296 A26,33 0 0 1 296,364 H270 Z"/>
<line x1="216" y1="320" x2="270" y2="320"/>
<line x1="71" y1="342" x2="270" y2="342"/>
<line x1="322" y1="231" x2="348" y2="231"/>
<line x1="322" y1="331" x2="368" y2="331"/>
<path d="M422,398 C444,398 470,414.5 482,431 C470,447.5 444,464 422,464 Q436,431 422,398 Z"/>
<line x1="348" y1="420" x2="428.2" y2="420"/>
<line x1="368" y1="442" x2="428.2" y2="442"/>
<line x1="482" y1="431" x2="508" y2="431"/>
<line x1="508" y1="431" x2="564" y2="431"/>
<line x1="40" y1="36" x2="40" y2="220"/>
<line x1="71" y1="36" x2="71" y2="342"/>
<line x1="196" y1="88" x2="196" y2="242"/>
<line x1="216" y1="150" x2="216" y2="320"/>
<line x1="348" y1="231" x2="348" y2="420"/>
<line x1="368" y1="331" x2="368" y2="442"/>
<circle cx="71" cy="88" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="40" cy="150" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="40" cy="220" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="196" cy="242" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="216" cy="320" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="342" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="348" cy="420" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="368" cy="442" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="196" cy="88" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="216" cy="150" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="348" cy="231" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="368" cy="331" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="572" y="437" text-anchor="start">Y</text>
<text x="40" y="28" text-anchor="middle" font-size="16">A</text>
<text x="71" y="28" text-anchor="middle" font-size="16">B</text>
</g>
</svg>
</div>

| $A$ | $B$ | $Y$ |
|:-:|:-:|:-:|
| 0 | 0 | 0 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 0 |

### ข้อ 4  จงเขียนโมดูล Verilog แบบ Dataflow ของวงจรในรูป ($Y = A\,\overline{B} + \overline{A}\,B$) {part=b; case=c4; style=flow}

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="684" height="506" viewBox="0 0 684 506" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<polygon points="138,76 138,100 160,88"/>
<circle cx="165" cy="88" r="5"/>
<line x1="40" y1="88" x2="138" y2="88"/>
<polygon points="138,138 138,162 160,150"/>
<circle cx="165" cy="150" r="5"/>
<line x1="71" y1="150" x2="138" y2="150"/>
<line x1="170" y1="88" x2="212.1" y2="88"/>
<line x1="170" y1="150" x2="232.1" y2="150"/>
<path d="M286.1,198 H312.1 A26,33 0 0 1 312.1,264 H286.1 Z"/>
<line x1="40" y1="220" x2="286.1" y2="220"/>
<line x1="232.1" y1="242" x2="286.1" y2="242"/>
<path d="M286.1,298 H312.1 A26,33 0 0 1 312.1,364 H286.1 Z"/>
<line x1="212.1" y1="320" x2="286.1" y2="320"/>
<line x1="71" y1="342" x2="286.1" y2="342"/>
<line x1="338.1" y1="231" x2="372.2" y2="231"/>
<line x1="338.1" y1="331" x2="392.2" y2="331"/>
<path d="M446.2,398 C468.2,398 494.2,414.5 506.2,431 C494.2,447.5 468.2,464 446.2,464 Q460.2,431 446.2,398 Z"/>
<line x1="372.2" y1="420" x2="452.4" y2="420"/>
<line x1="392.2" y1="442" x2="452.4" y2="442"/>
<line x1="506.2" y1="431" x2="532.2" y2="431"/>
<line x1="532.2" y1="431" x2="588.2" y2="431"/>
<line x1="40" y1="36" x2="40" y2="220"/>
<line x1="71" y1="36" x2="71" y2="342"/>
<line x1="212.1" y1="88" x2="212.1" y2="320"/>
<line x1="232.1" y1="150" x2="232.1" y2="242"/>
<line x1="372.2" y1="231" x2="372.2" y2="420"/>
<line x1="392.2" y1="331" x2="392.2" y2="442"/>
<circle cx="40" cy="88" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="150" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="40" cy="220" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="232.1" cy="242" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="212.1" cy="320" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="342" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="372.2" cy="420" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="392.2" cy="442" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="212.1" cy="88" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="232.1" cy="150" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="372.2" cy="231" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="392.2" cy="331" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="178" y="81" text-anchor="start" font-size="13">NA</text>
<text x="178" y="143" text-anchor="start" font-size="13">NB</text>
<text x="346.1" y="224" text-anchor="start" font-size="13">P</text>
<text x="346.1" y="324" text-anchor="start" font-size="13">Q</text>
<text x="596.2" y="437" text-anchor="start">Y</text>
<text x="40" y="28" text-anchor="middle" font-size="16">A</text>
<text x="71" y="28" text-anchor="middle" font-size="16">B</text>
</g>
</svg>
</div>

$\mathbf{Sol}^{n}$

- อ่านวงจรเป็นสมการของแต่ละเอาต์พุต
- เขียน `assign` ให้เอาต์พุตแต่ละตัว ด้วยตัวกระทำ `~` `&` `|` `^` (เกต NOT คือ `~`, AND คือ `&`, OR คือ `|`, XOR คือ `^`)

- ตรวจด้วยตารางความจริง ผลของโมดูลตรงกับวงจรในรูปทุกแถว

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

แต่ละบรรทัดของเกตคือเกต 1 ตัว พอร์ตแรกคือเอาต์พุต เขียนเป็นสมการได้ดังนี้

- `xnor (Y, A, B)` : $Y = \overline{A \oplus B}$

รวมเป็นสมการของเอาต์พุต แล้วเขียนวงจรและตารางความจริง (ตรวจทุกแถวด้วยโปรแกรม)

$\mathbf{Ans}\quad \begin{aligned}Y &= \overline{A \oplus B}\end{aligned}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="394" height="182" viewBox="0 0 394 182" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<path d="M146,74 C168,74 194,90.5 206,107 C194,123.5 168,140 146,140 Q160,107 146,74 Z"/>
<path d="M138,74 Q152,107 138,140"/>
<circle cx="211" cy="107" r="5"/>
<line x1="40" y1="96" x2="144.2" y2="96"/>
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

| $A$ | $B$ | $Y$ |
|:-:|:-:|:-:|
| 0 | 0 | 1 |
| 0 | 1 | 0 |
| 1 | 0 | 0 |
| 1 | 1 | 1 |

### ข้อ 4  จงเขียนโมดูล Verilog แบบ Structural ของวงจรในรูป ($Y = \overline{A \oplus B}$) {part=b; case=c5; style=struct}

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="394" height="182" viewBox="0 0 394 182" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<path d="M146,74 C168,74 194,90.5 206,107 C194,123.5 168,140 146,140 Q160,107 146,74 Z"/>
<path d="M138,74 Q152,107 138,140"/>
<circle cx="211" cy="107" r="5"/>
<line x1="40" y1="96" x2="144.2" y2="96"/>
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

- ตั้งชื่อสายภายในที่เป็นเอาต์พุตของเกต : ไม่มี (เกตทุกตัวต่อกับเอาต์พุตของวงจรโดยตรง) แล้วประกาศ `wire`
- เขียนเกตทีละตัว พอร์ตแรกเป็นเอาต์พุต เกตทุกตัวทำงานพร้อมกัน สลับลำดับบรรทัดแล้ววงจรเหมือนเดิม

- ตรวจด้วยตารางความจริง ผลของโมดูลตรงกับวงจรในรูปทุกแถว

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

แต่ละ `assign` คือสมการของเอาต์พุตหนึ่งตัว เขียนเป็นสมการได้ดังนี้

- `assign Y = ~(A ^ B)` : $Y = \overline{A \oplus B}$

รวมเป็นสมการของเอาต์พุต แล้วเขียนวงจรและตารางความจริง (ตรวจทุกแถวด้วยโปรแกรม)

$\mathbf{Ans}\quad \begin{aligned}Y &= \overline{A \oplus B}\end{aligned}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="496" height="244" viewBox="0 0 496 244" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<path d="M146,74 C168,74 194,90.5 206,107 C194,123.5 168,140 146,140 Q160,107 146,74 Z"/>
<path d="M138,74 Q152,107 138,140"/>
<line x1="40" y1="96" x2="144.2" y2="96"/>
<line x1="71" y1="118" x2="144.2" y2="118"/>
<line x1="206" y1="107" x2="232" y2="107"/>
<polygon points="286,176 286,200 308,188"/>
<circle cx="313" cy="188" r="5"/>
<line x1="232" y1="188" x2="286" y2="188"/>
<line x1="318" y1="188" x2="344" y2="188"/>
<line x1="344" y1="188" x2="400" y2="188"/>
<line x1="40" y1="36" x2="40" y2="96"/>
<line x1="71" y1="36" x2="71" y2="118"/>
<line x1="232" y1="107" x2="232" y2="188"/>
<circle cx="40" cy="96" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="118" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="232" cy="188" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="232" cy="107" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="408" y="194" text-anchor="start">Y</text>
<text x="40" y="28" text-anchor="middle" font-size="16">A</text>
<text x="71" y="28" text-anchor="middle" font-size="16">B</text>
</g>
</svg>
</div>

| $A$ | $B$ | $Y$ |
|:-:|:-:|:-:|
| 0 | 0 | 1 |
| 0 | 1 | 0 |
| 1 | 0 | 0 |
| 1 | 1 | 1 |

### ข้อ 4  จงเขียนโมดูล Verilog แบบ Dataflow ของวงจรในรูป ($Y = \overline{A \oplus B}$) {part=b; case=c5; style=flow}

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="394" height="182" viewBox="0 0 394 182" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<path d="M146,74 C168,74 194,90.5 206,107 C194,123.5 168,140 146,140 Q160,107 146,74 Z"/>
<path d="M138,74 Q152,107 138,140"/>
<circle cx="211" cy="107" r="5"/>
<line x1="40" y1="96" x2="144.2" y2="96"/>
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

- อ่านวงจรเป็นสมการของแต่ละเอาต์พุต
- เขียน `assign` ให้เอาต์พุตแต่ละตัว ด้วยตัวกระทำ `~` `&` `|` `^` (เกต NOT คือ `~`, AND คือ `&`, OR คือ `|`, XOR คือ `^`)

- ตรวจด้วยตารางความจริง ผลของโมดูลตรงกับวงจรในรูปทุกแถว

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

แต่ละบรรทัดของเกตคือเกต 1 ตัว พอร์ตแรกคือเอาต์พุต เขียนเป็นสมการได้ดังนี้

- `and (P, A, B)` : $P = A\,B$
- `and (Q, B, C)` : $Q = B\,C$
- `and (R, A, C)` : $R = A\,C$
- `or (Y, P, Q, R)` : $Y = P + Q + R$

รวมเป็นสมการของเอาต์พุต แล้วเขียนวงจรและตารางความจริง (ตรวจทุกแถวด้วยโปรแกรม)

$\mathbf{Ans}\quad \begin{aligned}Y &= A\,B + B\,C + A\,C\end{aligned}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="587" height="504" viewBox="0 0 587 504" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<path d="M169,74 H195 A26,33 0 0 1 195,140 H169 Z"/>
<line x1="40" y1="96" x2="169" y2="96"/>
<line x1="71" y1="118" x2="169" y2="118"/>
<path d="M169,174 H195 A26,33 0 0 1 195,240 H169 Z"/>
<line x1="71" y1="196" x2="169" y2="196"/>
<line x1="102" y1="218" x2="169" y2="218"/>
<path d="M169,274 H195 A26,33 0 0 1 195,340 H169 Z"/>
<line x1="40" y1="296" x2="169" y2="296"/>
<line x1="102" y1="318" x2="169" y2="318"/>
<line x1="221" y1="107" x2="255.1" y2="107"/>
<line x1="221" y1="207" x2="275.1" y2="207"/>
<line x1="221" y1="307" x2="295.1" y2="307"/>
<path d="M349.1,374 C371.1,374 397.1,396 409.1,418 C397.1,440 371.1,462 349.1,462 Q363.1,418 349.1,374 Z"/>
<line x1="255.1" y1="396" x2="354.3" y2="396"/>
<line x1="275.1" y1="418" x2="356.1" y2="418"/>
<line x1="295.1" y1="440" x2="354.3" y2="440"/>
<line x1="409.1" y1="418" x2="435.1" y2="418"/>
<line x1="435.1" y1="418" x2="491.1" y2="418"/>
<line x1="40" y1="36" x2="40" y2="296"/>
<line x1="71" y1="36" x2="71" y2="196"/>
<line x1="102" y1="36" x2="102" y2="318"/>
<line x1="255.1" y1="107" x2="255.1" y2="396"/>
<line x1="275.1" y1="207" x2="275.1" y2="418"/>
<line x1="295.1" y1="307" x2="295.1" y2="440"/>
<circle cx="40" cy="96" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="118" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="196" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="102" cy="218" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="40" cy="296" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="102" cy="318" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="255.1" cy="396" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="275.1" cy="418" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="295.1" cy="440" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="255.1" cy="107" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="275.1" cy="207" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="295.1" cy="307" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="229" y="100" text-anchor="start" font-size="13">P</text>
<text x="229" y="200" text-anchor="start" font-size="13">Q</text>
<text x="229" y="300" text-anchor="start" font-size="13">R</text>
<text x="499.1" y="424" text-anchor="start">Y</text>
<text x="40" y="28" text-anchor="middle" font-size="16">A</text>
<text x="71" y="28" text-anchor="middle" font-size="16">B</text>
<text x="102" y="28" text-anchor="middle" font-size="16">C</text>
</g>
</svg>
</div>

| $A$ | $B$ | $C$ | $Y$ |
|:-:|:-:|:-:|:-:|
| 0 | 0 | 0 | 0 |
| 0 | 0 | 1 | 0 |
| 0 | 1 | 0 | 0 |
| 0 | 1 | 1 | 1 |
| 1 | 0 | 0 | 0 |
| 1 | 0 | 1 | 1 |
| 1 | 1 | 0 | 1 |
| 1 | 1 | 1 | 1 |

### ข้อ 4  จงเขียนโมดูล Verilog แบบ Structural ของวงจรในรูป ($Y = A\,B + B\,C + A\,C$) {part=b; case=c6; style=struct}

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="587" height="504" viewBox="0 0 587 504" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<path d="M169,74 H195 A26,33 0 0 1 195,140 H169 Z"/>
<line x1="40" y1="96" x2="169" y2="96"/>
<line x1="71" y1="118" x2="169" y2="118"/>
<path d="M169,174 H195 A26,33 0 0 1 195,240 H169 Z"/>
<line x1="71" y1="196" x2="169" y2="196"/>
<line x1="102" y1="218" x2="169" y2="218"/>
<path d="M169,274 H195 A26,33 0 0 1 195,340 H169 Z"/>
<line x1="40" y1="296" x2="169" y2="296"/>
<line x1="102" y1="318" x2="169" y2="318"/>
<line x1="221" y1="107" x2="255.1" y2="107"/>
<line x1="221" y1="207" x2="275.1" y2="207"/>
<line x1="221" y1="307" x2="295.1" y2="307"/>
<path d="M349.1,374 C371.1,374 397.1,396 409.1,418 C397.1,440 371.1,462 349.1,462 Q363.1,418 349.1,374 Z"/>
<line x1="255.1" y1="396" x2="354.3" y2="396"/>
<line x1="275.1" y1="418" x2="356.1" y2="418"/>
<line x1="295.1" y1="440" x2="354.3" y2="440"/>
<line x1="409.1" y1="418" x2="435.1" y2="418"/>
<line x1="435.1" y1="418" x2="491.1" y2="418"/>
<line x1="40" y1="36" x2="40" y2="296"/>
<line x1="71" y1="36" x2="71" y2="196"/>
<line x1="102" y1="36" x2="102" y2="318"/>
<line x1="255.1" y1="107" x2="255.1" y2="396"/>
<line x1="275.1" y1="207" x2="275.1" y2="418"/>
<line x1="295.1" y1="307" x2="295.1" y2="440"/>
<circle cx="40" cy="96" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="118" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="196" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="102" cy="218" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="40" cy="296" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="102" cy="318" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="255.1" cy="396" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="275.1" cy="418" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="295.1" cy="440" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="255.1" cy="107" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="275.1" cy="207" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="295.1" cy="307" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="229" y="100" text-anchor="start" font-size="13">P</text>
<text x="229" y="200" text-anchor="start" font-size="13">Q</text>
<text x="229" y="300" text-anchor="start" font-size="13">R</text>
<text x="499.1" y="424" text-anchor="start">Y</text>
<text x="40" y="28" text-anchor="middle" font-size="16">A</text>
<text x="71" y="28" text-anchor="middle" font-size="16">B</text>
<text x="102" y="28" text-anchor="middle" font-size="16">C</text>
</g>
</svg>
</div>

$\mathbf{Sol}^{n}$

- ตั้งชื่อสายภายในที่เป็นเอาต์พุตของเกต : `P`, `Q`, `R` แล้วประกาศ `wire`
- เขียนเกตทีละตัว พอร์ตแรกเป็นเอาต์พุต เกตทุกตัวทำงานพร้อมกัน สลับลำดับบรรทัดแล้ววงจรเหมือนเดิม

- ตรวจด้วยตารางความจริง ผลของโมดูลตรงกับวงจรในรูปทุกแถว

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

แต่ละ `assign` คือสมการของเอาต์พุตหนึ่งตัว เขียนเป็นสมการได้ดังนี้

- `assign Y = (A & B) | (B & C) | (A & C)` : $Y = A\,B + B\,C + A\,C$

รวมเป็นสมการของเอาต์พุต แล้วเขียนวงจรและตารางความจริง (ตรวจทุกแถวด้วยโปรแกรม)

$\mathbf{Ans}\quad \begin{aligned}Y &= A\,B + B\,C + A\,C\end{aligned}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="579" height="504" viewBox="0 0 579 504" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<path d="M169,74 H195 A26,33 0 0 1 195,140 H169 Z"/>
<line x1="40" y1="96" x2="169" y2="96"/>
<line x1="71" y1="118" x2="169" y2="118"/>
<path d="M169,174 H195 A26,33 0 0 1 195,240 H169 Z"/>
<line x1="71" y1="196" x2="169" y2="196"/>
<line x1="102" y1="218" x2="169" y2="218"/>
<path d="M169,274 H195 A26,33 0 0 1 195,340 H169 Z"/>
<line x1="40" y1="296" x2="169" y2="296"/>
<line x1="102" y1="318" x2="169" y2="318"/>
<line x1="221" y1="107" x2="247" y2="107"/>
<line x1="221" y1="207" x2="267" y2="207"/>
<line x1="221" y1="307" x2="287" y2="307"/>
<path d="M341,374 C363,374 389,396 401,418 C389,440 363,462 341,462 Q355,418 341,374 Z"/>
<line x1="247" y1="396" x2="346.2" y2="396"/>
<line x1="267" y1="418" x2="348" y2="418"/>
<line x1="287" y1="440" x2="346.2" y2="440"/>
<line x1="401" y1="418" x2="427" y2="418"/>
<line x1="427" y1="418" x2="483" y2="418"/>
<line x1="40" y1="36" x2="40" y2="296"/>
<line x1="71" y1="36" x2="71" y2="196"/>
<line x1="102" y1="36" x2="102" y2="318"/>
<line x1="247" y1="107" x2="247" y2="396"/>
<line x1="267" y1="207" x2="267" y2="418"/>
<line x1="287" y1="307" x2="287" y2="440"/>
<circle cx="40" cy="96" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="118" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="196" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="102" cy="218" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="40" cy="296" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="102" cy="318" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="247" cy="396" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="267" cy="418" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="287" cy="440" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="247" cy="107" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="267" cy="207" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="287" cy="307" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="491" y="424" text-anchor="start">Y</text>
<text x="40" y="28" text-anchor="middle" font-size="16">A</text>
<text x="71" y="28" text-anchor="middle" font-size="16">B</text>
<text x="102" y="28" text-anchor="middle" font-size="16">C</text>
</g>
</svg>
</div>

| $A$ | $B$ | $C$ | $Y$ |
|:-:|:-:|:-:|:-:|
| 0 | 0 | 0 | 0 |
| 0 | 0 | 1 | 0 |
| 0 | 1 | 0 | 0 |
| 0 | 1 | 1 | 1 |
| 1 | 0 | 0 | 0 |
| 1 | 0 | 1 | 1 |
| 1 | 1 | 0 | 1 |
| 1 | 1 | 1 | 1 |

### ข้อ 4  จงเขียนโมดูล Verilog แบบ Dataflow ของวงจรในรูป ($Y = A\,B + B\,C + A\,C$) {part=b; case=c6; style=flow}

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="587" height="504" viewBox="0 0 587 504" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<path d="M169,74 H195 A26,33 0 0 1 195,140 H169 Z"/>
<line x1="40" y1="96" x2="169" y2="96"/>
<line x1="71" y1="118" x2="169" y2="118"/>
<path d="M169,174 H195 A26,33 0 0 1 195,240 H169 Z"/>
<line x1="71" y1="196" x2="169" y2="196"/>
<line x1="102" y1="218" x2="169" y2="218"/>
<path d="M169,274 H195 A26,33 0 0 1 195,340 H169 Z"/>
<line x1="40" y1="296" x2="169" y2="296"/>
<line x1="102" y1="318" x2="169" y2="318"/>
<line x1="221" y1="107" x2="255.1" y2="107"/>
<line x1="221" y1="207" x2="275.1" y2="207"/>
<line x1="221" y1="307" x2="295.1" y2="307"/>
<path d="M349.1,374 C371.1,374 397.1,396 409.1,418 C397.1,440 371.1,462 349.1,462 Q363.1,418 349.1,374 Z"/>
<line x1="255.1" y1="396" x2="354.3" y2="396"/>
<line x1="275.1" y1="418" x2="356.1" y2="418"/>
<line x1="295.1" y1="440" x2="354.3" y2="440"/>
<line x1="409.1" y1="418" x2="435.1" y2="418"/>
<line x1="435.1" y1="418" x2="491.1" y2="418"/>
<line x1="40" y1="36" x2="40" y2="296"/>
<line x1="71" y1="36" x2="71" y2="196"/>
<line x1="102" y1="36" x2="102" y2="318"/>
<line x1="255.1" y1="107" x2="255.1" y2="396"/>
<line x1="275.1" y1="207" x2="275.1" y2="418"/>
<line x1="295.1" y1="307" x2="295.1" y2="440"/>
<circle cx="40" cy="96" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="118" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="196" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="102" cy="218" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="40" cy="296" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="102" cy="318" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="255.1" cy="396" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="275.1" cy="418" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="295.1" cy="440" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="255.1" cy="107" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="275.1" cy="207" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="295.1" cy="307" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="229" y="100" text-anchor="start" font-size="13">P</text>
<text x="229" y="200" text-anchor="start" font-size="13">Q</text>
<text x="229" y="300" text-anchor="start" font-size="13">R</text>
<text x="499.1" y="424" text-anchor="start">Y</text>
<text x="40" y="28" text-anchor="middle" font-size="16">A</text>
<text x="71" y="28" text-anchor="middle" font-size="16">B</text>
<text x="102" y="28" text-anchor="middle" font-size="16">C</text>
</g>
</svg>
</div>

$\mathbf{Sol}^{n}$

- อ่านวงจรเป็นสมการของแต่ละเอาต์พุต
- เขียน `assign` ให้เอาต์พุตแต่ละตัว ด้วยตัวกระทำ `~` `&` `|` `^` (เกต NOT คือ `~`, AND คือ `&`, OR คือ `|`, XOR คือ `^`)

- ตรวจด้วยตารางความจริง ผลของโมดูลตรงกับวงจรในรูปทุกแถว

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

แต่ละบรรทัดของเกตคือเกต 1 ตัว พอร์ตแรกคือเอาต์พุต เขียนเป็นสมการได้ดังนี้

- `or (P, A, B)` : $P = A + B$
- `or (Q, C, D)` : $Q = C + D$
- `and (Y, P, Q)` : $Y = P\,Q$

รวมเป็นสมการของเอาต์พุต แล้วเขียนวงจรและตารางความจริง (ตรวจทุกแถวด้วยโปรแกรม)

$\mathbf{Ans}\quad \begin{aligned}Y &= (A + B)\,(C + D)\end{aligned}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="598" height="382" viewBox="0 0 598 382" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<path d="M200,74 C222,74 248,90.5 260,107 C248,123.5 222,140 200,140 Q214,107 200,74 Z"/>
<line x1="40" y1="96" x2="206.2" y2="96"/>
<line x1="71" y1="118" x2="206.2" y2="118"/>
<path d="M200,174 C222,174 248,190.5 260,207 C248,223.5 222,240 200,240 Q214,207 200,174 Z"/>
<line x1="102" y1="196" x2="206.2" y2="196"/>
<line x1="133" y1="218" x2="206.2" y2="218"/>
<line x1="260" y1="107" x2="294.1" y2="107"/>
<line x1="260" y1="207" x2="314.1" y2="207"/>
<path d="M368.1,274 H394.1 A26,33 0 0 1 394.1,340 H368.1 Z"/>
<line x1="294.1" y1="296" x2="368.1" y2="296"/>
<line x1="314.1" y1="318" x2="368.1" y2="318"/>
<line x1="420.1" y1="307" x2="446.1" y2="307"/>
<line x1="446.1" y1="307" x2="502.1" y2="307"/>
<line x1="40" y1="36" x2="40" y2="96"/>
<line x1="71" y1="36" x2="71" y2="118"/>
<line x1="102" y1="36" x2="102" y2="196"/>
<line x1="133" y1="36" x2="133" y2="218"/>
<line x1="294.1" y1="107" x2="294.1" y2="296"/>
<line x1="314.1" y1="207" x2="314.1" y2="318"/>
<circle cx="40" cy="96" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="118" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="102" cy="196" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="133" cy="218" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="294.1" cy="296" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="314.1" cy="318" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="294.1" cy="107" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="314.1" cy="207" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="268" y="100" text-anchor="start" font-size="13">P</text>
<text x="268" y="200" text-anchor="start" font-size="13">Q</text>
<text x="510.1" y="313" text-anchor="start">Y</text>
<text x="40" y="28" text-anchor="middle" font-size="16">A</text>
<text x="71" y="28" text-anchor="middle" font-size="16">B</text>
<text x="102" y="28" text-anchor="middle" font-size="16">C</text>
<text x="133" y="28" text-anchor="middle" font-size="16">D</text>
</g>
</svg>
</div>

| $A$ | $B$ | $C$ | $D$ | $Y$ |
|:-:|:-:|:-:|:-:|:-:|
| 0 | 0 | 0 | 0 | 0 |
| 0 | 0 | 0 | 1 | 0 |
| 0 | 0 | 1 | 0 | 0 |
| 0 | 0 | 1 | 1 | 0 |
| 0 | 1 | 0 | 0 | 0 |
| 0 | 1 | 0 | 1 | 1 |
| 0 | 1 | 1 | 0 | 1 |
| 0 | 1 | 1 | 1 | 1 |
| 1 | 0 | 0 | 0 | 0 |
| 1 | 0 | 0 | 1 | 1 |
| 1 | 0 | 1 | 0 | 1 |
| 1 | 0 | 1 | 1 | 1 |
| 1 | 1 | 0 | 0 | 0 |
| 1 | 1 | 0 | 1 | 1 |
| 1 | 1 | 1 | 0 | 1 |
| 1 | 1 | 1 | 1 | 1 |

### ข้อ 4  จงเขียนโมดูล Verilog แบบ Structural ของวงจรในรูป ($Y = (A + B)\,(C + D)$) {part=b; case=c7; style=struct}

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="598" height="382" viewBox="0 0 598 382" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<path d="M200,74 C222,74 248,90.5 260,107 C248,123.5 222,140 200,140 Q214,107 200,74 Z"/>
<line x1="40" y1="96" x2="206.2" y2="96"/>
<line x1="71" y1="118" x2="206.2" y2="118"/>
<path d="M200,174 C222,174 248,190.5 260,207 C248,223.5 222,240 200,240 Q214,207 200,174 Z"/>
<line x1="102" y1="196" x2="206.2" y2="196"/>
<line x1="133" y1="218" x2="206.2" y2="218"/>
<line x1="260" y1="107" x2="294.1" y2="107"/>
<line x1="260" y1="207" x2="314.1" y2="207"/>
<path d="M368.1,274 H394.1 A26,33 0 0 1 394.1,340 H368.1 Z"/>
<line x1="294.1" y1="296" x2="368.1" y2="296"/>
<line x1="314.1" y1="318" x2="368.1" y2="318"/>
<line x1="420.1" y1="307" x2="446.1" y2="307"/>
<line x1="446.1" y1="307" x2="502.1" y2="307"/>
<line x1="40" y1="36" x2="40" y2="96"/>
<line x1="71" y1="36" x2="71" y2="118"/>
<line x1="102" y1="36" x2="102" y2="196"/>
<line x1="133" y1="36" x2="133" y2="218"/>
<line x1="294.1" y1="107" x2="294.1" y2="296"/>
<line x1="314.1" y1="207" x2="314.1" y2="318"/>
<circle cx="40" cy="96" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="118" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="102" cy="196" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="133" cy="218" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="294.1" cy="296" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="314.1" cy="318" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="294.1" cy="107" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="314.1" cy="207" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="268" y="100" text-anchor="start" font-size="13">P</text>
<text x="268" y="200" text-anchor="start" font-size="13">Q</text>
<text x="510.1" y="313" text-anchor="start">Y</text>
<text x="40" y="28" text-anchor="middle" font-size="16">A</text>
<text x="71" y="28" text-anchor="middle" font-size="16">B</text>
<text x="102" y="28" text-anchor="middle" font-size="16">C</text>
<text x="133" y="28" text-anchor="middle" font-size="16">D</text>
</g>
</svg>
</div>

$\mathbf{Sol}^{n}$

- ตั้งชื่อสายภายในที่เป็นเอาต์พุตของเกต : `P`, `Q` แล้วประกาศ `wire`
- เขียนเกตทีละตัว พอร์ตแรกเป็นเอาต์พุต เกตทุกตัวทำงานพร้อมกัน สลับลำดับบรรทัดแล้ววงจรเหมือนเดิม

- ตรวจด้วยตารางความจริง ผลของโมดูลตรงกับวงจรในรูปทุกแถว

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

แต่ละ `assign` คือสมการของเอาต์พุตหนึ่งตัว เขียนเป็นสมการได้ดังนี้

- `assign Y = (A | B) & (C | D)` : $Y = (A + B)\,(C + D)$

รวมเป็นสมการของเอาต์พุต แล้วเขียนวงจรและตารางความจริง (ตรวจทุกแถวด้วยโปรแกรม)

$\mathbf{Ans}\quad \begin{aligned}Y &= (A + B)\,(C + D)\end{aligned}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="590" height="382" viewBox="0 0 590 382" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<path d="M200,74 C222,74 248,90.5 260,107 C248,123.5 222,140 200,140 Q214,107 200,74 Z"/>
<line x1="40" y1="96" x2="206.2" y2="96"/>
<line x1="71" y1="118" x2="206.2" y2="118"/>
<path d="M200,174 C222,174 248,190.5 260,207 C248,223.5 222,240 200,240 Q214,207 200,174 Z"/>
<line x1="102" y1="196" x2="206.2" y2="196"/>
<line x1="133" y1="218" x2="206.2" y2="218"/>
<line x1="260" y1="107" x2="286" y2="107"/>
<line x1="260" y1="207" x2="306" y2="207"/>
<path d="M360,274 H386 A26,33 0 0 1 386,340 H360 Z"/>
<line x1="286" y1="296" x2="360" y2="296"/>
<line x1="306" y1="318" x2="360" y2="318"/>
<line x1="412" y1="307" x2="438" y2="307"/>
<line x1="438" y1="307" x2="494" y2="307"/>
<line x1="40" y1="36" x2="40" y2="96"/>
<line x1="71" y1="36" x2="71" y2="118"/>
<line x1="102" y1="36" x2="102" y2="196"/>
<line x1="133" y1="36" x2="133" y2="218"/>
<line x1="286" y1="107" x2="286" y2="296"/>
<line x1="306" y1="207" x2="306" y2="318"/>
<circle cx="40" cy="96" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="118" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="102" cy="196" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="133" cy="218" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="286" cy="296" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="306" cy="318" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="286" cy="107" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="306" cy="207" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="502" y="313" text-anchor="start">Y</text>
<text x="40" y="28" text-anchor="middle" font-size="16">A</text>
<text x="71" y="28" text-anchor="middle" font-size="16">B</text>
<text x="102" y="28" text-anchor="middle" font-size="16">C</text>
<text x="133" y="28" text-anchor="middle" font-size="16">D</text>
</g>
</svg>
</div>

| $A$ | $B$ | $C$ | $D$ | $Y$ |
|:-:|:-:|:-:|:-:|:-:|
| 0 | 0 | 0 | 0 | 0 |
| 0 | 0 | 0 | 1 | 0 |
| 0 | 0 | 1 | 0 | 0 |
| 0 | 0 | 1 | 1 | 0 |
| 0 | 1 | 0 | 0 | 0 |
| 0 | 1 | 0 | 1 | 1 |
| 0 | 1 | 1 | 0 | 1 |
| 0 | 1 | 1 | 1 | 1 |
| 1 | 0 | 0 | 0 | 0 |
| 1 | 0 | 0 | 1 | 1 |
| 1 | 0 | 1 | 0 | 1 |
| 1 | 0 | 1 | 1 | 1 |
| 1 | 1 | 0 | 0 | 0 |
| 1 | 1 | 0 | 1 | 1 |
| 1 | 1 | 1 | 0 | 1 |
| 1 | 1 | 1 | 1 | 1 |

### ข้อ 4  จงเขียนโมดูล Verilog แบบ Dataflow ของวงจรในรูป ($Y = (A + B)\,(C + D)$) {part=b; case=c7; style=flow}

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="598" height="382" viewBox="0 0 598 382" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<path d="M200,74 C222,74 248,90.5 260,107 C248,123.5 222,140 200,140 Q214,107 200,74 Z"/>
<line x1="40" y1="96" x2="206.2" y2="96"/>
<line x1="71" y1="118" x2="206.2" y2="118"/>
<path d="M200,174 C222,174 248,190.5 260,207 C248,223.5 222,240 200,240 Q214,207 200,174 Z"/>
<line x1="102" y1="196" x2="206.2" y2="196"/>
<line x1="133" y1="218" x2="206.2" y2="218"/>
<line x1="260" y1="107" x2="294.1" y2="107"/>
<line x1="260" y1="207" x2="314.1" y2="207"/>
<path d="M368.1,274 H394.1 A26,33 0 0 1 394.1,340 H368.1 Z"/>
<line x1="294.1" y1="296" x2="368.1" y2="296"/>
<line x1="314.1" y1="318" x2="368.1" y2="318"/>
<line x1="420.1" y1="307" x2="446.1" y2="307"/>
<line x1="446.1" y1="307" x2="502.1" y2="307"/>
<line x1="40" y1="36" x2="40" y2="96"/>
<line x1="71" y1="36" x2="71" y2="118"/>
<line x1="102" y1="36" x2="102" y2="196"/>
<line x1="133" y1="36" x2="133" y2="218"/>
<line x1="294.1" y1="107" x2="294.1" y2="296"/>
<line x1="314.1" y1="207" x2="314.1" y2="318"/>
<circle cx="40" cy="96" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="118" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="102" cy="196" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="133" cy="218" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="294.1" cy="296" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="314.1" cy="318" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="294.1" cy="107" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="314.1" cy="207" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="268" y="100" text-anchor="start" font-size="13">P</text>
<text x="268" y="200" text-anchor="start" font-size="13">Q</text>
<text x="510.1" y="313" text-anchor="start">Y</text>
<text x="40" y="28" text-anchor="middle" font-size="16">A</text>
<text x="71" y="28" text-anchor="middle" font-size="16">B</text>
<text x="102" y="28" text-anchor="middle" font-size="16">C</text>
<text x="133" y="28" text-anchor="middle" font-size="16">D</text>
</g>
</svg>
</div>

$\mathbf{Sol}^{n}$

- อ่านวงจรเป็นสมการของแต่ละเอาต์พุต
- เขียน `assign` ให้เอาต์พุตแต่ละตัว ด้วยตัวกระทำ `~` `&` `|` `^` (เกต NOT คือ `~`, AND คือ `&`, OR คือ `|`, XOR คือ `^`)

- ตรวจด้วยตารางความจริง ผลของโมดูลตรงกับวงจรในรูปทุกแถว

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

แต่ละบรรทัดของเกตคือเกต 1 ตัว พอร์ตแรกคือเอาต์พุต เขียนเป็นสมการได้ดังนี้

- `nand (P, A, B)` : $P = \overline{A\,B}$
- `nand (Q, C, D)` : $Q = \overline{C\,D}$
- `nand (Y, P, Q)` : $Y = \overline{P\,Q}$

รวมเป็นสมการของเอาต์พุต แล้วเขียนวงจรและตารางความจริง (ตรวจทุกแถวด้วยโปรแกรม)

$\mathbf{Ans}\quad \begin{aligned}Y &= \overline{\overline{A\,B}\,\overline{C\,D}}\end{aligned}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="610" height="382" viewBox="0 0 610 382" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<path d="M200,74 H226 A26,33 0 0 1 226,140 H200 Z"/>
<circle cx="257" cy="107" r="5"/>
<line x1="40" y1="96" x2="200" y2="96"/>
<line x1="71" y1="118" x2="200" y2="118"/>
<path d="M200,174 H226 A26,33 0 0 1 226,240 H200 Z"/>
<circle cx="257" cy="207" r="5"/>
<line x1="102" y1="196" x2="200" y2="196"/>
<line x1="133" y1="218" x2="200" y2="218"/>
<line x1="262" y1="107" x2="296.1" y2="107"/>
<line x1="262" y1="207" x2="316.1" y2="207"/>
<path d="M370.1,274 H396.1 A26,33 0 0 1 396.1,340 H370.1 Z"/>
<circle cx="427.1" cy="307" r="5"/>
<line x1="296.1" y1="296" x2="370.1" y2="296"/>
<line x1="316.1" y1="318" x2="370.1" y2="318"/>
<line x1="432.1" y1="307" x2="458.1" y2="307"/>
<line x1="458.1" y1="307" x2="514.1" y2="307"/>
<line x1="40" y1="36" x2="40" y2="96"/>
<line x1="71" y1="36" x2="71" y2="118"/>
<line x1="102" y1="36" x2="102" y2="196"/>
<line x1="133" y1="36" x2="133" y2="218"/>
<line x1="296.1" y1="107" x2="296.1" y2="296"/>
<line x1="316.1" y1="207" x2="316.1" y2="318"/>
<circle cx="40" cy="96" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="118" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="102" cy="196" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="133" cy="218" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="296.1" cy="296" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316.1" cy="318" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="296.1" cy="107" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316.1" cy="207" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="270" y="100" text-anchor="start" font-size="13">P</text>
<text x="270" y="200" text-anchor="start" font-size="13">Q</text>
<text x="522.1" y="313" text-anchor="start">Y</text>
<text x="40" y="28" text-anchor="middle" font-size="16">A</text>
<text x="71" y="28" text-anchor="middle" font-size="16">B</text>
<text x="102" y="28" text-anchor="middle" font-size="16">C</text>
<text x="133" y="28" text-anchor="middle" font-size="16">D</text>
</g>
</svg>
</div>

| $A$ | $B$ | $C$ | $D$ | $Y$ |
|:-:|:-:|:-:|:-:|:-:|
| 0 | 0 | 0 | 0 | 0 |
| 0 | 0 | 0 | 1 | 0 |
| 0 | 0 | 1 | 0 | 0 |
| 0 | 0 | 1 | 1 | 1 |
| 0 | 1 | 0 | 0 | 0 |
| 0 | 1 | 0 | 1 | 0 |
| 0 | 1 | 1 | 0 | 0 |
| 0 | 1 | 1 | 1 | 1 |
| 1 | 0 | 0 | 0 | 0 |
| 1 | 0 | 0 | 1 | 0 |
| 1 | 0 | 1 | 0 | 0 |
| 1 | 0 | 1 | 1 | 1 |
| 1 | 1 | 0 | 0 | 1 |
| 1 | 1 | 0 | 1 | 1 |
| 1 | 1 | 1 | 0 | 1 |
| 1 | 1 | 1 | 1 | 1 |

### ข้อ 4  จงเขียนโมดูล Verilog แบบ Structural ของวงจรในรูป ($Y = \overline{\overline{A\,B}\,\overline{C\,D}}$) {part=b; case=c8; style=struct}

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="610" height="382" viewBox="0 0 610 382" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<path d="M200,74 H226 A26,33 0 0 1 226,140 H200 Z"/>
<circle cx="257" cy="107" r="5"/>
<line x1="40" y1="96" x2="200" y2="96"/>
<line x1="71" y1="118" x2="200" y2="118"/>
<path d="M200,174 H226 A26,33 0 0 1 226,240 H200 Z"/>
<circle cx="257" cy="207" r="5"/>
<line x1="102" y1="196" x2="200" y2="196"/>
<line x1="133" y1="218" x2="200" y2="218"/>
<line x1="262" y1="107" x2="296.1" y2="107"/>
<line x1="262" y1="207" x2="316.1" y2="207"/>
<path d="M370.1,274 H396.1 A26,33 0 0 1 396.1,340 H370.1 Z"/>
<circle cx="427.1" cy="307" r="5"/>
<line x1="296.1" y1="296" x2="370.1" y2="296"/>
<line x1="316.1" y1="318" x2="370.1" y2="318"/>
<line x1="432.1" y1="307" x2="458.1" y2="307"/>
<line x1="458.1" y1="307" x2="514.1" y2="307"/>
<line x1="40" y1="36" x2="40" y2="96"/>
<line x1="71" y1="36" x2="71" y2="118"/>
<line x1="102" y1="36" x2="102" y2="196"/>
<line x1="133" y1="36" x2="133" y2="218"/>
<line x1="296.1" y1="107" x2="296.1" y2="296"/>
<line x1="316.1" y1="207" x2="316.1" y2="318"/>
<circle cx="40" cy="96" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="118" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="102" cy="196" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="133" cy="218" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="296.1" cy="296" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316.1" cy="318" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="296.1" cy="107" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316.1" cy="207" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="270" y="100" text-anchor="start" font-size="13">P</text>
<text x="270" y="200" text-anchor="start" font-size="13">Q</text>
<text x="522.1" y="313" text-anchor="start">Y</text>
<text x="40" y="28" text-anchor="middle" font-size="16">A</text>
<text x="71" y="28" text-anchor="middle" font-size="16">B</text>
<text x="102" y="28" text-anchor="middle" font-size="16">C</text>
<text x="133" y="28" text-anchor="middle" font-size="16">D</text>
</g>
</svg>
</div>

$\mathbf{Sol}^{n}$

- ตั้งชื่อสายภายในที่เป็นเอาต์พุตของเกต : `P`, `Q` แล้วประกาศ `wire`
- เขียนเกตทีละตัว พอร์ตแรกเป็นเอาต์พุต เกตทุกตัวทำงานพร้อมกัน สลับลำดับบรรทัดแล้ววงจรเหมือนเดิม

- ตรวจด้วยตารางความจริง ผลของโมดูลตรงกับวงจรในรูปทุกแถว

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

แต่ละ `assign` คือสมการของเอาต์พุตหนึ่งตัว เขียนเป็นสมการได้ดังนี้

- `assign Y = ~(~(A & B) & ~(C & D))` : $Y = \overline{\overline{A\,B}\,\overline{C\,D}}$

รวมเป็นสมการของเอาต์พุต แล้วเขียนวงจรและตารางความจริง (ตรวจทุกแถวด้วยโปรแกรม)

$\mathbf{Ans}\quad \begin{aligned}Y &= \overline{\overline{A\,B}\,\overline{C\,D}}\end{aligned}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="826" height="568" viewBox="0 0 826 568" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<path d="M200,74 H226 A26,33 0 0 1 226,140 H200 Z"/>
<line x1="40" y1="96" x2="200" y2="96"/>
<line x1="71" y1="118" x2="200" y2="118"/>
<path d="M200,174 H226 A26,33 0 0 1 226,240 H200 Z"/>
<line x1="102" y1="196" x2="200" y2="196"/>
<line x1="133" y1="218" x2="200" y2="218"/>
<line x1="252" y1="107" x2="278" y2="107"/>
<line x1="252" y1="207" x2="298" y2="207"/>
<polygon points="352,276 352,300 374,288"/>
<circle cx="379" cy="288" r="5"/>
<line x1="278" y1="288" x2="352" y2="288"/>
<polygon points="352,338 352,362 374,350"/>
<circle cx="379" cy="350" r="5"/>
<line x1="298" y1="350" x2="352" y2="350"/>
<line x1="384" y1="288" x2="410" y2="288"/>
<line x1="384" y1="350" x2="430" y2="350"/>
<path d="M484,398 H510 A26,33 0 0 1 510,464 H484 Z"/>
<line x1="410" y1="420" x2="484" y2="420"/>
<line x1="430" y1="442" x2="484" y2="442"/>
<line x1="536" y1="431" x2="562" y2="431"/>
<polygon points="616,500 616,524 638,512"/>
<circle cx="643" cy="512" r="5"/>
<line x1="562" y1="512" x2="616" y2="512"/>
<line x1="648" y1="512" x2="674" y2="512"/>
<line x1="674" y1="512" x2="730" y2="512"/>
<line x1="40" y1="36" x2="40" y2="96"/>
<line x1="71" y1="36" x2="71" y2="118"/>
<line x1="102" y1="36" x2="102" y2="196"/>
<line x1="133" y1="36" x2="133" y2="218"/>
<line x1="278" y1="107" x2="278" y2="288"/>
<line x1="298" y1="207" x2="298" y2="350"/>
<line x1="410" y1="288" x2="410" y2="420"/>
<line x1="430" y1="350" x2="430" y2="442"/>
<line x1="562" y1="431" x2="562" y2="512"/>
<circle cx="40" cy="96" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="118" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="102" cy="196" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="133" cy="218" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="278" cy="288" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="298" cy="350" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="410" cy="420" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="430" cy="442" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="562" cy="512" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="278" cy="107" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="298" cy="207" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="410" cy="288" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="430" cy="350" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="562" cy="431" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="738" y="518" text-anchor="start">Y</text>
<text x="40" y="28" text-anchor="middle" font-size="16">A</text>
<text x="71" y="28" text-anchor="middle" font-size="16">B</text>
<text x="102" y="28" text-anchor="middle" font-size="16">C</text>
<text x="133" y="28" text-anchor="middle" font-size="16">D</text>
</g>
</svg>
</div>

| $A$ | $B$ | $C$ | $D$ | $Y$ |
|:-:|:-:|:-:|:-:|:-:|
| 0 | 0 | 0 | 0 | 0 |
| 0 | 0 | 0 | 1 | 0 |
| 0 | 0 | 1 | 0 | 0 |
| 0 | 0 | 1 | 1 | 1 |
| 0 | 1 | 0 | 0 | 0 |
| 0 | 1 | 0 | 1 | 0 |
| 0 | 1 | 1 | 0 | 0 |
| 0 | 1 | 1 | 1 | 1 |
| 1 | 0 | 0 | 0 | 0 |
| 1 | 0 | 0 | 1 | 0 |
| 1 | 0 | 1 | 0 | 0 |
| 1 | 0 | 1 | 1 | 1 |
| 1 | 1 | 0 | 0 | 1 |
| 1 | 1 | 0 | 1 | 1 |
| 1 | 1 | 1 | 0 | 1 |
| 1 | 1 | 1 | 1 | 1 |

### ข้อ 4  จงเขียนโมดูล Verilog แบบ Dataflow ของวงจรในรูป ($Y = \overline{\overline{A\,B}\,\overline{C\,D}}$) {part=b; case=c8; style=flow}

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="610" height="382" viewBox="0 0 610 382" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<path d="M200,74 H226 A26,33 0 0 1 226,140 H200 Z"/>
<circle cx="257" cy="107" r="5"/>
<line x1="40" y1="96" x2="200" y2="96"/>
<line x1="71" y1="118" x2="200" y2="118"/>
<path d="M200,174 H226 A26,33 0 0 1 226,240 H200 Z"/>
<circle cx="257" cy="207" r="5"/>
<line x1="102" y1="196" x2="200" y2="196"/>
<line x1="133" y1="218" x2="200" y2="218"/>
<line x1="262" y1="107" x2="296.1" y2="107"/>
<line x1="262" y1="207" x2="316.1" y2="207"/>
<path d="M370.1,274 H396.1 A26,33 0 0 1 396.1,340 H370.1 Z"/>
<circle cx="427.1" cy="307" r="5"/>
<line x1="296.1" y1="296" x2="370.1" y2="296"/>
<line x1="316.1" y1="318" x2="370.1" y2="318"/>
<line x1="432.1" y1="307" x2="458.1" y2="307"/>
<line x1="458.1" y1="307" x2="514.1" y2="307"/>
<line x1="40" y1="36" x2="40" y2="96"/>
<line x1="71" y1="36" x2="71" y2="118"/>
<line x1="102" y1="36" x2="102" y2="196"/>
<line x1="133" y1="36" x2="133" y2="218"/>
<line x1="296.1" y1="107" x2="296.1" y2="296"/>
<line x1="316.1" y1="207" x2="316.1" y2="318"/>
<circle cx="40" cy="96" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="118" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="102" cy="196" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="133" cy="218" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="296.1" cy="296" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316.1" cy="318" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="296.1" cy="107" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="316.1" cy="207" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="270" y="100" text-anchor="start" font-size="13">P</text>
<text x="270" y="200" text-anchor="start" font-size="13">Q</text>
<text x="522.1" y="313" text-anchor="start">Y</text>
<text x="40" y="28" text-anchor="middle" font-size="16">A</text>
<text x="71" y="28" text-anchor="middle" font-size="16">B</text>
<text x="102" y="28" text-anchor="middle" font-size="16">C</text>
<text x="133" y="28" text-anchor="middle" font-size="16">D</text>
</g>
</svg>
</div>

$\mathbf{Sol}^{n}$

- อ่านวงจรเป็นสมการของแต่ละเอาต์พุต
- เขียน `assign` ให้เอาต์พุตแต่ละตัว ด้วยตัวกระทำ `~` `&` `|` `^` (เกต NOT คือ `~`, AND คือ `&`, OR คือ `|`, XOR คือ `^`)

- ตรวจด้วยตารางความจริง ผลของโมดูลตรงกับวงจรในรูปทุกแถว

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

แต่ละบรรทัดของเกตคือเกต 1 ตัว พอร์ตแรกคือเอาต์พุต เขียนเป็นสมการได้ดังนี้

- `nor (P, A, B)` : $P = \overline{A + B}$
- `nor (Q, C, D)` : $Q = \overline{C + D}$
- `nor (Y, P, Q)` : $Y = \overline{P + Q}$

รวมเป็นสมการของเอาต์พุต แล้วเขียนวงจรและตารางความจริง (ตรวจทุกแถวด้วยโปรแกรม)

$\mathbf{Ans}\quad \begin{aligned}Y &= \overline{\overline{A + B} + \overline{C + D}}\end{aligned}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="626" height="382" viewBox="0 0 626 382" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<path d="M200,74 C222,74 248,90.5 260,107 C248,123.5 222,140 200,140 Q214,107 200,74 Z"/>
<circle cx="265" cy="107" r="5"/>
<line x1="40" y1="96" x2="206.2" y2="96"/>
<line x1="71" y1="118" x2="206.2" y2="118"/>
<path d="M200,174 C222,174 248,190.5 260,207 C248,223.5 222,240 200,240 Q214,207 200,174 Z"/>
<circle cx="265" cy="207" r="5"/>
<line x1="102" y1="196" x2="206.2" y2="196"/>
<line x1="133" y1="218" x2="206.2" y2="218"/>
<line x1="270" y1="107" x2="304.1" y2="107"/>
<line x1="270" y1="207" x2="324.1" y2="207"/>
<path d="M378.1,274 C400.1,274 426.1,290.5 438.1,307 C426.1,323.5 400.1,340 378.1,340 Q392.1,307 378.1,274 Z"/>
<circle cx="443.1" cy="307" r="5"/>
<line x1="304.1" y1="296" x2="384.3" y2="296"/>
<line x1="324.1" y1="318" x2="384.3" y2="318"/>
<line x1="448.1" y1="307" x2="474.1" y2="307"/>
<line x1="474.1" y1="307" x2="530.1" y2="307"/>
<line x1="40" y1="36" x2="40" y2="96"/>
<line x1="71" y1="36" x2="71" y2="118"/>
<line x1="102" y1="36" x2="102" y2="196"/>
<line x1="133" y1="36" x2="133" y2="218"/>
<line x1="304.1" y1="107" x2="304.1" y2="296"/>
<line x1="324.1" y1="207" x2="324.1" y2="318"/>
<circle cx="40" cy="96" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="118" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="102" cy="196" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="133" cy="218" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="304.1" cy="296" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="324.1" cy="318" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="304.1" cy="107" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="324.1" cy="207" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="278" y="100" text-anchor="start" font-size="13">P</text>
<text x="278" y="200" text-anchor="start" font-size="13">Q</text>
<text x="538.1" y="313" text-anchor="start">Y</text>
<text x="40" y="28" text-anchor="middle" font-size="16">A</text>
<text x="71" y="28" text-anchor="middle" font-size="16">B</text>
<text x="102" y="28" text-anchor="middle" font-size="16">C</text>
<text x="133" y="28" text-anchor="middle" font-size="16">D</text>
</g>
</svg>
</div>

| $A$ | $B$ | $C$ | $D$ | $Y$ |
|:-:|:-:|:-:|:-:|:-:|
| 0 | 0 | 0 | 0 | 0 |
| 0 | 0 | 0 | 1 | 0 |
| 0 | 0 | 1 | 0 | 0 |
| 0 | 0 | 1 | 1 | 0 |
| 0 | 1 | 0 | 0 | 0 |
| 0 | 1 | 0 | 1 | 1 |
| 0 | 1 | 1 | 0 | 1 |
| 0 | 1 | 1 | 1 | 1 |
| 1 | 0 | 0 | 0 | 0 |
| 1 | 0 | 0 | 1 | 1 |
| 1 | 0 | 1 | 0 | 1 |
| 1 | 0 | 1 | 1 | 1 |
| 1 | 1 | 0 | 0 | 0 |
| 1 | 1 | 0 | 1 | 1 |
| 1 | 1 | 1 | 0 | 1 |
| 1 | 1 | 1 | 1 | 1 |

### ข้อ 4  จงเขียนโมดูล Verilog แบบ Structural ของวงจรในรูป ($Y = \overline{\overline{A + B} + \overline{C + D}}$) {part=b; case=c9; style=struct}

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="626" height="382" viewBox="0 0 626 382" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<path d="M200,74 C222,74 248,90.5 260,107 C248,123.5 222,140 200,140 Q214,107 200,74 Z"/>
<circle cx="265" cy="107" r="5"/>
<line x1="40" y1="96" x2="206.2" y2="96"/>
<line x1="71" y1="118" x2="206.2" y2="118"/>
<path d="M200,174 C222,174 248,190.5 260,207 C248,223.5 222,240 200,240 Q214,207 200,174 Z"/>
<circle cx="265" cy="207" r="5"/>
<line x1="102" y1="196" x2="206.2" y2="196"/>
<line x1="133" y1="218" x2="206.2" y2="218"/>
<line x1="270" y1="107" x2="304.1" y2="107"/>
<line x1="270" y1="207" x2="324.1" y2="207"/>
<path d="M378.1,274 C400.1,274 426.1,290.5 438.1,307 C426.1,323.5 400.1,340 378.1,340 Q392.1,307 378.1,274 Z"/>
<circle cx="443.1" cy="307" r="5"/>
<line x1="304.1" y1="296" x2="384.3" y2="296"/>
<line x1="324.1" y1="318" x2="384.3" y2="318"/>
<line x1="448.1" y1="307" x2="474.1" y2="307"/>
<line x1="474.1" y1="307" x2="530.1" y2="307"/>
<line x1="40" y1="36" x2="40" y2="96"/>
<line x1="71" y1="36" x2="71" y2="118"/>
<line x1="102" y1="36" x2="102" y2="196"/>
<line x1="133" y1="36" x2="133" y2="218"/>
<line x1="304.1" y1="107" x2="304.1" y2="296"/>
<line x1="324.1" y1="207" x2="324.1" y2="318"/>
<circle cx="40" cy="96" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="118" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="102" cy="196" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="133" cy="218" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="304.1" cy="296" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="324.1" cy="318" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="304.1" cy="107" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="324.1" cy="207" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="278" y="100" text-anchor="start" font-size="13">P</text>
<text x="278" y="200" text-anchor="start" font-size="13">Q</text>
<text x="538.1" y="313" text-anchor="start">Y</text>
<text x="40" y="28" text-anchor="middle" font-size="16">A</text>
<text x="71" y="28" text-anchor="middle" font-size="16">B</text>
<text x="102" y="28" text-anchor="middle" font-size="16">C</text>
<text x="133" y="28" text-anchor="middle" font-size="16">D</text>
</g>
</svg>
</div>

$\mathbf{Sol}^{n}$

- ตั้งชื่อสายภายในที่เป็นเอาต์พุตของเกต : `P`, `Q` แล้วประกาศ `wire`
- เขียนเกตทีละตัว พอร์ตแรกเป็นเอาต์พุต เกตทุกตัวทำงานพร้อมกัน สลับลำดับบรรทัดแล้ววงจรเหมือนเดิม

- ตรวจด้วยตารางความจริง ผลของโมดูลตรงกับวงจรในรูปทุกแถว

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

แต่ละ `assign` คือสมการของเอาต์พุตหนึ่งตัว เขียนเป็นสมการได้ดังนี้

- `assign Y = ~(~(A | B) | ~(C | D))` : $Y = \overline{\overline{A + B} + \overline{C + D}}$

รวมเป็นสมการของเอาต์พุต แล้วเขียนวงจรและตารางความจริง (ตรวจทุกแถวด้วยโปรแกรม)

$\mathbf{Ans}\quad \begin{aligned}Y &= \overline{\overline{A + B} + \overline{C + D}}\end{aligned}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="842" height="568" viewBox="0 0 842 568" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<path d="M200,74 C222,74 248,90.5 260,107 C248,123.5 222,140 200,140 Q214,107 200,74 Z"/>
<line x1="40" y1="96" x2="206.2" y2="96"/>
<line x1="71" y1="118" x2="206.2" y2="118"/>
<path d="M200,174 C222,174 248,190.5 260,207 C248,223.5 222,240 200,240 Q214,207 200,174 Z"/>
<line x1="102" y1="196" x2="206.2" y2="196"/>
<line x1="133" y1="218" x2="206.2" y2="218"/>
<line x1="260" y1="107" x2="286" y2="107"/>
<line x1="260" y1="207" x2="306" y2="207"/>
<polygon points="360,276 360,300 382,288"/>
<circle cx="387" cy="288" r="5"/>
<line x1="286" y1="288" x2="360" y2="288"/>
<polygon points="360,338 360,362 382,350"/>
<circle cx="387" cy="350" r="5"/>
<line x1="306" y1="350" x2="360" y2="350"/>
<line x1="392" y1="288" x2="418" y2="288"/>
<line x1="392" y1="350" x2="438" y2="350"/>
<path d="M492,398 C514,398 540,414.5 552,431 C540,447.5 514,464 492,464 Q506,431 492,398 Z"/>
<line x1="418" y1="420" x2="498.2" y2="420"/>
<line x1="438" y1="442" x2="498.2" y2="442"/>
<line x1="552" y1="431" x2="578" y2="431"/>
<polygon points="632,500 632,524 654,512"/>
<circle cx="659" cy="512" r="5"/>
<line x1="578" y1="512" x2="632" y2="512"/>
<line x1="664" y1="512" x2="690" y2="512"/>
<line x1="690" y1="512" x2="746" y2="512"/>
<line x1="40" y1="36" x2="40" y2="96"/>
<line x1="71" y1="36" x2="71" y2="118"/>
<line x1="102" y1="36" x2="102" y2="196"/>
<line x1="133" y1="36" x2="133" y2="218"/>
<line x1="286" y1="107" x2="286" y2="288"/>
<line x1="306" y1="207" x2="306" y2="350"/>
<line x1="418" y1="288" x2="418" y2="420"/>
<line x1="438" y1="350" x2="438" y2="442"/>
<line x1="578" y1="431" x2="578" y2="512"/>
<circle cx="40" cy="96" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="118" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="102" cy="196" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="133" cy="218" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="286" cy="288" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="306" cy="350" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="418" cy="420" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="438" cy="442" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="578" cy="512" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="286" cy="107" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="306" cy="207" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="418" cy="288" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="438" cy="350" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="578" cy="431" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="754" y="518" text-anchor="start">Y</text>
<text x="40" y="28" text-anchor="middle" font-size="16">A</text>
<text x="71" y="28" text-anchor="middle" font-size="16">B</text>
<text x="102" y="28" text-anchor="middle" font-size="16">C</text>
<text x="133" y="28" text-anchor="middle" font-size="16">D</text>
</g>
</svg>
</div>

| $A$ | $B$ | $C$ | $D$ | $Y$ |
|:-:|:-:|:-:|:-:|:-:|
| 0 | 0 | 0 | 0 | 0 |
| 0 | 0 | 0 | 1 | 0 |
| 0 | 0 | 1 | 0 | 0 |
| 0 | 0 | 1 | 1 | 0 |
| 0 | 1 | 0 | 0 | 0 |
| 0 | 1 | 0 | 1 | 1 |
| 0 | 1 | 1 | 0 | 1 |
| 0 | 1 | 1 | 1 | 1 |
| 1 | 0 | 0 | 0 | 0 |
| 1 | 0 | 0 | 1 | 1 |
| 1 | 0 | 1 | 0 | 1 |
| 1 | 0 | 1 | 1 | 1 |
| 1 | 1 | 0 | 0 | 0 |
| 1 | 1 | 0 | 1 | 1 |
| 1 | 1 | 1 | 0 | 1 |
| 1 | 1 | 1 | 1 | 1 |

### ข้อ 4  จงเขียนโมดูล Verilog แบบ Dataflow ของวงจรในรูป ($Y = \overline{\overline{A + B} + \overline{C + D}}$) {part=b; case=c9; style=flow}

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="626" height="382" viewBox="0 0 626 382" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<path d="M200,74 C222,74 248,90.5 260,107 C248,123.5 222,140 200,140 Q214,107 200,74 Z"/>
<circle cx="265" cy="107" r="5"/>
<line x1="40" y1="96" x2="206.2" y2="96"/>
<line x1="71" y1="118" x2="206.2" y2="118"/>
<path d="M200,174 C222,174 248,190.5 260,207 C248,223.5 222,240 200,240 Q214,207 200,174 Z"/>
<circle cx="265" cy="207" r="5"/>
<line x1="102" y1="196" x2="206.2" y2="196"/>
<line x1="133" y1="218" x2="206.2" y2="218"/>
<line x1="270" y1="107" x2="304.1" y2="107"/>
<line x1="270" y1="207" x2="324.1" y2="207"/>
<path d="M378.1,274 C400.1,274 426.1,290.5 438.1,307 C426.1,323.5 400.1,340 378.1,340 Q392.1,307 378.1,274 Z"/>
<circle cx="443.1" cy="307" r="5"/>
<line x1="304.1" y1="296" x2="384.3" y2="296"/>
<line x1="324.1" y1="318" x2="384.3" y2="318"/>
<line x1="448.1" y1="307" x2="474.1" y2="307"/>
<line x1="474.1" y1="307" x2="530.1" y2="307"/>
<line x1="40" y1="36" x2="40" y2="96"/>
<line x1="71" y1="36" x2="71" y2="118"/>
<line x1="102" y1="36" x2="102" y2="196"/>
<line x1="133" y1="36" x2="133" y2="218"/>
<line x1="304.1" y1="107" x2="304.1" y2="296"/>
<line x1="324.1" y1="207" x2="324.1" y2="318"/>
<circle cx="40" cy="96" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="118" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="102" cy="196" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="133" cy="218" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="304.1" cy="296" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="324.1" cy="318" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="304.1" cy="107" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="324.1" cy="207" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="278" y="100" text-anchor="start" font-size="13">P</text>
<text x="278" y="200" text-anchor="start" font-size="13">Q</text>
<text x="538.1" y="313" text-anchor="start">Y</text>
<text x="40" y="28" text-anchor="middle" font-size="16">A</text>
<text x="71" y="28" text-anchor="middle" font-size="16">B</text>
<text x="102" y="28" text-anchor="middle" font-size="16">C</text>
<text x="133" y="28" text-anchor="middle" font-size="16">D</text>
</g>
</svg>
</div>

$\mathbf{Sol}^{n}$

- อ่านวงจรเป็นสมการของแต่ละเอาต์พุต
- เขียน `assign` ให้เอาต์พุตแต่ละตัว ด้วยตัวกระทำ `~` `&` `|` `^` (เกต NOT คือ `~`, AND คือ `&`, OR คือ `|`, XOR คือ `^`)

- ตรวจด้วยตารางความจริง ผลของโมดูลตรงกับวงจรในรูปทุกแถว

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

แต่ละบรรทัดของเกตคือเกต 1 ตัว พอร์ตแรกคือเอาต์พุต เขียนเป็นสมการได้ดังนี้

- `xor (Sum, A, B)` : $\mathit{Sum} = A \oplus B$
- `and (Cout, A, B)` : $\mathit{Cout} = A\,B$

รวมเป็นสมการของเอาต์พุต แล้วเขียนวงจรและตารางความจริง (ตรวจทุกแถวด้วยโปรแกรม)

$\mathbf{Ans}\quad \begin{aligned}\mathit{Sum} &= A \oplus B \\ \mathit{Cout} &= A\,B\end{aligned}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="404" height="282" viewBox="0 0 404 282" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<path d="M146,74 C168,74 194,90.5 206,107 C194,123.5 168,140 146,140 Q160,107 146,74 Z"/>
<path d="M138,74 Q152,107 138,140"/>
<line x1="40" y1="96" x2="144.2" y2="96"/>
<line x1="71" y1="118" x2="144.2" y2="118"/>
<path d="M138,174 H164 A26,33 0 0 1 164,240 H138 Z"/>
<line x1="40" y1="196" x2="138" y2="196"/>
<line x1="71" y1="218" x2="138" y2="218"/>
<line x1="206" y1="107" x2="232" y2="107"/>
<line x1="190" y1="207" x2="252" y2="207"/>
<line x1="232" y1="107" x2="308" y2="107"/>
<line x1="252" y1="207" x2="308" y2="207"/>
<line x1="40" y1="36" x2="40" y2="196"/>
<line x1="71" y1="36" x2="71" y2="218"/>
<circle cx="40" cy="96" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="118" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="40" cy="196" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="218" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="316" y="113" text-anchor="start">Sum</text>
<text x="316" y="213" text-anchor="start">Cout</text>
<text x="40" y="28" text-anchor="middle" font-size="16">A</text>
<text x="71" y="28" text-anchor="middle" font-size="16">B</text>
</g>
</svg>
</div>

| $A$ | $B$ | $\mathit{Sum}$ | $\mathit{Cout}$ |
|:-:|:-:|:-:|:-:|
| 0 | 0 | 0 | 0 |
| 0 | 1 | 1 | 0 |
| 1 | 0 | 1 | 0 |
| 1 | 1 | 0 | 1 |

### ข้อ 4  จงเขียนโมดูล Verilog แบบ Structural ของวงจรในรูป ($\mathit{Sum} = A \oplus B$, $\mathit{Cout} = A\,B$) {part=b; case=c10; style=struct}

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="404" height="282" viewBox="0 0 404 282" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<path d="M146,74 C168,74 194,90.5 206,107 C194,123.5 168,140 146,140 Q160,107 146,74 Z"/>
<path d="M138,74 Q152,107 138,140"/>
<line x1="40" y1="96" x2="144.2" y2="96"/>
<line x1="71" y1="118" x2="144.2" y2="118"/>
<path d="M138,174 H164 A26,33 0 0 1 164,240 H138 Z"/>
<line x1="40" y1="196" x2="138" y2="196"/>
<line x1="71" y1="218" x2="138" y2="218"/>
<line x1="206" y1="107" x2="232" y2="107"/>
<line x1="190" y1="207" x2="252" y2="207"/>
<line x1="232" y1="107" x2="308" y2="107"/>
<line x1="252" y1="207" x2="308" y2="207"/>
<line x1="40" y1="36" x2="40" y2="196"/>
<line x1="71" y1="36" x2="71" y2="218"/>
<circle cx="40" cy="96" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="118" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="40" cy="196" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="218" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="316" y="113" text-anchor="start">Sum</text>
<text x="316" y="213" text-anchor="start">Cout</text>
<text x="40" y="28" text-anchor="middle" font-size="16">A</text>
<text x="71" y="28" text-anchor="middle" font-size="16">B</text>
</g>
</svg>
</div>

$\mathbf{Sol}^{n}$

- ตั้งชื่อสายภายในที่เป็นเอาต์พุตของเกต : ไม่มี (เกตทุกตัวต่อกับเอาต์พุตของวงจรโดยตรง) แล้วประกาศ `wire`
- เขียนเกตทีละตัว พอร์ตแรกเป็นเอาต์พุต เกตทุกตัวทำงานพร้อมกัน สลับลำดับบรรทัดแล้ววงจรเหมือนเดิม

- ตรวจด้วยตารางความจริง ผลของโมดูลตรงกับวงจรในรูปทุกแถว

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

แต่ละ `assign` คือสมการของเอาต์พุตหนึ่งตัว เขียนเป็นสมการได้ดังนี้

- `assign Sum = A ^ B` : $\mathit{Sum} = A \oplus B$
- `assign Cout = A & B` : $\mathit{Cout} = A\,B$

รวมเป็นสมการของเอาต์พุต แล้วเขียนวงจรและตารางความจริง (ตรวจทุกแถวด้วยโปรแกรม)

$\mathbf{Ans}\quad \begin{aligned}\mathit{Sum} &= A \oplus B \\ \mathit{Cout} &= A\,B\end{aligned}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="404" height="282" viewBox="0 0 404 282" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<path d="M146,74 C168,74 194,90.5 206,107 C194,123.5 168,140 146,140 Q160,107 146,74 Z"/>
<path d="M138,74 Q152,107 138,140"/>
<line x1="40" y1="96" x2="144.2" y2="96"/>
<line x1="71" y1="118" x2="144.2" y2="118"/>
<path d="M138,174 H164 A26,33 0 0 1 164,240 H138 Z"/>
<line x1="40" y1="196" x2="138" y2="196"/>
<line x1="71" y1="218" x2="138" y2="218"/>
<line x1="206" y1="107" x2="232" y2="107"/>
<line x1="190" y1="207" x2="252" y2="207"/>
<line x1="232" y1="107" x2="308" y2="107"/>
<line x1="252" y1="207" x2="308" y2="207"/>
<line x1="40" y1="36" x2="40" y2="196"/>
<line x1="71" y1="36" x2="71" y2="218"/>
<circle cx="40" cy="96" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="118" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="40" cy="196" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="218" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="316" y="113" text-anchor="start">Sum</text>
<text x="316" y="213" text-anchor="start">Cout</text>
<text x="40" y="28" text-anchor="middle" font-size="16">A</text>
<text x="71" y="28" text-anchor="middle" font-size="16">B</text>
</g>
</svg>
</div>

| $A$ | $B$ | $\mathit{Sum}$ | $\mathit{Cout}$ |
|:-:|:-:|:-:|:-:|
| 0 | 0 | 0 | 0 |
| 0 | 1 | 1 | 0 |
| 1 | 0 | 1 | 0 |
| 1 | 1 | 0 | 1 |

### ข้อ 4  จงเขียนโมดูล Verilog แบบ Dataflow ของวงจรในรูป ($\mathit{Sum} = A \oplus B$, $\mathit{Cout} = A\,B$) {part=b; case=c10; style=flow}

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="404" height="282" viewBox="0 0 404 282" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<path d="M146,74 C168,74 194,90.5 206,107 C194,123.5 168,140 146,140 Q160,107 146,74 Z"/>
<path d="M138,74 Q152,107 138,140"/>
<line x1="40" y1="96" x2="144.2" y2="96"/>
<line x1="71" y1="118" x2="144.2" y2="118"/>
<path d="M138,174 H164 A26,33 0 0 1 164,240 H138 Z"/>
<line x1="40" y1="196" x2="138" y2="196"/>
<line x1="71" y1="218" x2="138" y2="218"/>
<line x1="206" y1="107" x2="232" y2="107"/>
<line x1="190" y1="207" x2="252" y2="207"/>
<line x1="232" y1="107" x2="308" y2="107"/>
<line x1="252" y1="207" x2="308" y2="207"/>
<line x1="40" y1="36" x2="40" y2="196"/>
<line x1="71" y1="36" x2="71" y2="218"/>
<circle cx="40" cy="96" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="118" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="40" cy="196" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="218" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="316" y="113" text-anchor="start">Sum</text>
<text x="316" y="213" text-anchor="start">Cout</text>
<text x="40" y="28" text-anchor="middle" font-size="16">A</text>
<text x="71" y="28" text-anchor="middle" font-size="16">B</text>
</g>
</svg>
</div>

$\mathbf{Sol}^{n}$

- อ่านวงจรเป็นสมการของแต่ละเอาต์พุต
- เขียน `assign` ให้เอาต์พุตแต่ละตัว ด้วยตัวกระทำ `~` `&` `|` `^` (เกต NOT คือ `~`, AND คือ `&`, OR คือ `|`, XOR คือ `^`)

- ตรวจด้วยตารางความจริง ผลของโมดูลตรงกับวงจรในรูปทุกแถว

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

แต่ละบรรทัดของเกตคือเกต 1 ตัว พอร์ตแรกคือเอาต์พุต เขียนเป็นสมการได้ดังนี้

- `not (NA, A)` : $\mathit{NA} = \overline{A}$
- `not (NB, B)` : $\mathit{NB} = \overline{B}$
- `and (Y0, NA, NB)` : $\mathit{Y0} = \mathit{NA}\,\mathit{NB}$
- `and (Y1, NA, B)` : $\mathit{Y1} = \mathit{NA}\,B$
- `and (Y2, A, NB)` : $\mathit{Y2} = A\,\mathit{NB}$
- `and (Y3, A, B)` : $\mathit{Y3} = A\,B$

รวมเป็นสมการของเอาต์พุต แล้วเขียนวงจรและตารางความจริง (ตรวจทุกแถวด้วยโปรแกรม)

$\mathbf{Ans}\quad \begin{aligned}\mathit{Y0} &= \overline{A}\,\overline{B} \\ \mathit{Y1} &= \overline{A}\,B \\ \mathit{Y2} &= A\,\overline{B} \\ \mathit{Y3} &= A\,B\end{aligned}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="580" height="606" viewBox="0 0 580 606" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<polygon points="138,76 138,100 160,88"/>
<circle cx="165" cy="88" r="5"/>
<line x1="40" y1="88" x2="138" y2="88"/>
<polygon points="138,138 138,162 160,150"/>
<circle cx="165" cy="150" r="5"/>
<line x1="71" y1="150" x2="138" y2="150"/>
<path d="M138,198 H164 A26,33 0 0 1 164,264 H138 Z"/>
<line x1="40" y1="220" x2="138" y2="220"/>
<line x1="71" y1="242" x2="138" y2="242"/>
<line x1="170" y1="88" x2="216" y2="88"/>
<line x1="170" y1="150" x2="236" y2="150"/>
<line x1="190" y1="231" x2="256" y2="231"/>
<path d="M310,298 H336 A26,33 0 0 1 336,364 H310 Z"/>
<line x1="216" y1="320" x2="310" y2="320"/>
<line x1="236" y1="342" x2="310" y2="342"/>
<path d="M310,398 H336 A26,33 0 0 1 336,464 H310 Z"/>
<line x1="216" y1="420" x2="310" y2="420"/>
<line x1="71" y1="442" x2="310" y2="442"/>
<path d="M310,498 H336 A26,33 0 0 1 336,564 H310 Z"/>
<line x1="40" y1="520" x2="310" y2="520"/>
<line x1="236" y1="542" x2="310" y2="542"/>
<line x1="362" y1="331" x2="388" y2="331"/>
<line x1="362" y1="431" x2="408" y2="431"/>
<line x1="362" y1="531" x2="428" y2="531"/>
<line x1="256" y1="231" x2="484" y2="231"/>
<line x1="388" y1="331" x2="484" y2="331"/>
<line x1="408" y1="431" x2="484" y2="431"/>
<line x1="428" y1="531" x2="484" y2="531"/>
<line x1="40" y1="36" x2="40" y2="520"/>
<line x1="71" y1="36" x2="71" y2="442"/>
<line x1="216" y1="88" x2="216" y2="420"/>
<line x1="236" y1="150" x2="236" y2="542"/>
<circle cx="40" cy="88" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="150" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="40" cy="220" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="242" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="216" cy="320" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="236" cy="342" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="216" cy="420" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="442" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="40" cy="520" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="236" cy="542" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="216" cy="88" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="236" cy="150" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="178" y="81" text-anchor="start" font-size="13">NA</text>
<text x="178" y="143" text-anchor="start" font-size="13">NB</text>
<text x="492" y="237" text-anchor="start">Y<tspan dy="4" font-size="12">3</tspan></text>
<text x="492" y="337" text-anchor="start">Y<tspan dy="4" font-size="12">0</tspan></text>
<text x="492" y="437" text-anchor="start">Y<tspan dy="4" font-size="12">1</tspan></text>
<text x="492" y="537" text-anchor="start">Y<tspan dy="4" font-size="12">2</tspan></text>
<text x="40" y="28" text-anchor="middle" font-size="16">A</text>
<text x="71" y="28" text-anchor="middle" font-size="16">B</text>
</g>
</svg>
</div>

| $A$ | $B$ | $\mathit{Y3}$ | $\mathit{Y2}$ | $\mathit{Y1}$ | $\mathit{Y0}$ |
|:-:|:-:|:-:|:-:|:-:|:-:|
| 0 | 0 | 0 | 0 | 0 | 1 |
| 0 | 1 | 0 | 0 | 1 | 0 |
| 1 | 0 | 0 | 1 | 0 | 0 |
| 1 | 1 | 1 | 0 | 0 | 0 |

### ข้อ 4  จงเขียนโมดูล Verilog แบบ Structural ของวงจรในรูป ($\mathit{Y0} = \overline{A}\,\overline{B}$, $\mathit{Y1} = \overline{A}\,B$, $\mathit{Y2} = A\,\overline{B}$, $\mathit{Y3} = A\,B$) {part=b; case=c11; style=struct}

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="580" height="606" viewBox="0 0 580 606" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<polygon points="138,76 138,100 160,88"/>
<circle cx="165" cy="88" r="5"/>
<line x1="40" y1="88" x2="138" y2="88"/>
<polygon points="138,138 138,162 160,150"/>
<circle cx="165" cy="150" r="5"/>
<line x1="71" y1="150" x2="138" y2="150"/>
<path d="M138,198 H164 A26,33 0 0 1 164,264 H138 Z"/>
<line x1="40" y1="220" x2="138" y2="220"/>
<line x1="71" y1="242" x2="138" y2="242"/>
<line x1="170" y1="88" x2="216" y2="88"/>
<line x1="170" y1="150" x2="236" y2="150"/>
<line x1="190" y1="231" x2="256" y2="231"/>
<path d="M310,298 H336 A26,33 0 0 1 336,364 H310 Z"/>
<line x1="216" y1="320" x2="310" y2="320"/>
<line x1="236" y1="342" x2="310" y2="342"/>
<path d="M310,398 H336 A26,33 0 0 1 336,464 H310 Z"/>
<line x1="216" y1="420" x2="310" y2="420"/>
<line x1="71" y1="442" x2="310" y2="442"/>
<path d="M310,498 H336 A26,33 0 0 1 336,564 H310 Z"/>
<line x1="40" y1="520" x2="310" y2="520"/>
<line x1="236" y1="542" x2="310" y2="542"/>
<line x1="362" y1="331" x2="388" y2="331"/>
<line x1="362" y1="431" x2="408" y2="431"/>
<line x1="362" y1="531" x2="428" y2="531"/>
<line x1="256" y1="231" x2="484" y2="231"/>
<line x1="388" y1="331" x2="484" y2="331"/>
<line x1="408" y1="431" x2="484" y2="431"/>
<line x1="428" y1="531" x2="484" y2="531"/>
<line x1="40" y1="36" x2="40" y2="520"/>
<line x1="71" y1="36" x2="71" y2="442"/>
<line x1="216" y1="88" x2="216" y2="420"/>
<line x1="236" y1="150" x2="236" y2="542"/>
<circle cx="40" cy="88" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="150" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="40" cy="220" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="242" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="216" cy="320" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="236" cy="342" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="216" cy="420" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="442" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="40" cy="520" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="236" cy="542" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="216" cy="88" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="236" cy="150" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="178" y="81" text-anchor="start" font-size="13">NA</text>
<text x="178" y="143" text-anchor="start" font-size="13">NB</text>
<text x="492" y="237" text-anchor="start">Y<tspan dy="4" font-size="12">3</tspan></text>
<text x="492" y="337" text-anchor="start">Y<tspan dy="4" font-size="12">0</tspan></text>
<text x="492" y="437" text-anchor="start">Y<tspan dy="4" font-size="12">1</tspan></text>
<text x="492" y="537" text-anchor="start">Y<tspan dy="4" font-size="12">2</tspan></text>
<text x="40" y="28" text-anchor="middle" font-size="16">A</text>
<text x="71" y="28" text-anchor="middle" font-size="16">B</text>
</g>
</svg>
</div>

$\mathbf{Sol}^{n}$

- ตั้งชื่อสายภายในที่เป็นเอาต์พุตของเกต : `NA`, `NB` แล้วประกาศ `wire`
- เขียนเกตทีละตัว พอร์ตแรกเป็นเอาต์พุต เกตทุกตัวทำงานพร้อมกัน สลับลำดับบรรทัดแล้ววงจรเหมือนเดิม

- ตรวจด้วยตารางความจริง ผลของโมดูลตรงกับวงจรในรูปทุกแถว

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

แต่ละ `assign` คือสมการของเอาต์พุตหนึ่งตัว เขียนเป็นสมการได้ดังนี้

- `assign Y0 = ~A & ~B` : $\mathit{Y0} = \overline{A}\,\overline{B}$
- `assign Y1 = ~A & B` : $\mathit{Y1} = \overline{A}\,B$
- `assign Y2 = A & ~B` : $\mathit{Y2} = A\,\overline{B}$
- `assign Y3 = A & B` : $\mathit{Y3} = A\,B$

รวมเป็นสมการของเอาต์พุต แล้วเขียนวงจรและตารางความจริง (ตรวจทุกแถวด้วยโปรแกรม)

$\mathbf{Ans}\quad \begin{aligned}\mathit{Y0} &= \overline{A}\,\overline{B} \\ \mathit{Y1} &= \overline{A}\,B \\ \mathit{Y2} &= A\,\overline{B} \\ \mathit{Y3} &= A\,B\end{aligned}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="580" height="606" viewBox="0 0 580 606" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<polygon points="138,76 138,100 160,88"/>
<circle cx="165" cy="88" r="5"/>
<line x1="40" y1="88" x2="138" y2="88"/>
<polygon points="138,138 138,162 160,150"/>
<circle cx="165" cy="150" r="5"/>
<line x1="71" y1="150" x2="138" y2="150"/>
<path d="M138,198 H164 A26,33 0 0 1 164,264 H138 Z"/>
<line x1="40" y1="220" x2="138" y2="220"/>
<line x1="71" y1="242" x2="138" y2="242"/>
<line x1="170" y1="88" x2="216" y2="88"/>
<line x1="170" y1="150" x2="236" y2="150"/>
<line x1="190" y1="231" x2="256" y2="231"/>
<path d="M310,298 H336 A26,33 0 0 1 336,364 H310 Z"/>
<line x1="216" y1="320" x2="310" y2="320"/>
<line x1="236" y1="342" x2="310" y2="342"/>
<path d="M310,398 H336 A26,33 0 0 1 336,464 H310 Z"/>
<line x1="216" y1="420" x2="310" y2="420"/>
<line x1="71" y1="442" x2="310" y2="442"/>
<path d="M310,498 H336 A26,33 0 0 1 336,564 H310 Z"/>
<line x1="40" y1="520" x2="310" y2="520"/>
<line x1="236" y1="542" x2="310" y2="542"/>
<line x1="362" y1="331" x2="388" y2="331"/>
<line x1="362" y1="431" x2="408" y2="431"/>
<line x1="362" y1="531" x2="428" y2="531"/>
<line x1="256" y1="231" x2="484" y2="231"/>
<line x1="388" y1="331" x2="484" y2="331"/>
<line x1="408" y1="431" x2="484" y2="431"/>
<line x1="428" y1="531" x2="484" y2="531"/>
<line x1="40" y1="36" x2="40" y2="520"/>
<line x1="71" y1="36" x2="71" y2="442"/>
<line x1="216" y1="88" x2="216" y2="420"/>
<line x1="236" y1="150" x2="236" y2="542"/>
<circle cx="40" cy="88" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="150" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="40" cy="220" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="242" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="216" cy="320" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="236" cy="342" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="216" cy="420" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="442" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="40" cy="520" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="236" cy="542" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="216" cy="88" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="236" cy="150" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="492" y="237" text-anchor="start">Y<tspan dy="4" font-size="12">3</tspan></text>
<text x="492" y="337" text-anchor="start">Y<tspan dy="4" font-size="12">0</tspan></text>
<text x="492" y="437" text-anchor="start">Y<tspan dy="4" font-size="12">1</tspan></text>
<text x="492" y="537" text-anchor="start">Y<tspan dy="4" font-size="12">2</tspan></text>
<text x="40" y="28" text-anchor="middle" font-size="16">A</text>
<text x="71" y="28" text-anchor="middle" font-size="16">B</text>
</g>
</svg>
</div>

| $A$ | $B$ | $\mathit{Y3}$ | $\mathit{Y2}$ | $\mathit{Y1}$ | $\mathit{Y0}$ |
|:-:|:-:|:-:|:-:|:-:|:-:|
| 0 | 0 | 0 | 0 | 0 | 1 |
| 0 | 1 | 0 | 0 | 1 | 0 |
| 1 | 0 | 0 | 1 | 0 | 0 |
| 1 | 1 | 1 | 0 | 0 | 0 |

### ข้อ 4  จงเขียนโมดูล Verilog แบบ Dataflow ของวงจรในรูป ($\mathit{Y0} = \overline{A}\,\overline{B}$, $\mathit{Y1} = \overline{A}\,B$, $\mathit{Y2} = A\,\overline{B}$, $\mathit{Y3} = A\,B$) {part=b; case=c11; style=flow}

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="580" height="606" viewBox="0 0 580 606" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<polygon points="138,76 138,100 160,88"/>
<circle cx="165" cy="88" r="5"/>
<line x1="40" y1="88" x2="138" y2="88"/>
<polygon points="138,138 138,162 160,150"/>
<circle cx="165" cy="150" r="5"/>
<line x1="71" y1="150" x2="138" y2="150"/>
<path d="M138,198 H164 A26,33 0 0 1 164,264 H138 Z"/>
<line x1="40" y1="220" x2="138" y2="220"/>
<line x1="71" y1="242" x2="138" y2="242"/>
<line x1="170" y1="88" x2="216" y2="88"/>
<line x1="170" y1="150" x2="236" y2="150"/>
<line x1="190" y1="231" x2="256" y2="231"/>
<path d="M310,298 H336 A26,33 0 0 1 336,364 H310 Z"/>
<line x1="216" y1="320" x2="310" y2="320"/>
<line x1="236" y1="342" x2="310" y2="342"/>
<path d="M310,398 H336 A26,33 0 0 1 336,464 H310 Z"/>
<line x1="216" y1="420" x2="310" y2="420"/>
<line x1="71" y1="442" x2="310" y2="442"/>
<path d="M310,498 H336 A26,33 0 0 1 336,564 H310 Z"/>
<line x1="40" y1="520" x2="310" y2="520"/>
<line x1="236" y1="542" x2="310" y2="542"/>
<line x1="362" y1="331" x2="388" y2="331"/>
<line x1="362" y1="431" x2="408" y2="431"/>
<line x1="362" y1="531" x2="428" y2="531"/>
<line x1="256" y1="231" x2="484" y2="231"/>
<line x1="388" y1="331" x2="484" y2="331"/>
<line x1="408" y1="431" x2="484" y2="431"/>
<line x1="428" y1="531" x2="484" y2="531"/>
<line x1="40" y1="36" x2="40" y2="520"/>
<line x1="71" y1="36" x2="71" y2="442"/>
<line x1="216" y1="88" x2="216" y2="420"/>
<line x1="236" y1="150" x2="236" y2="542"/>
<circle cx="40" cy="88" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="150" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="40" cy="220" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="242" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="216" cy="320" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="236" cy="342" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="216" cy="420" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="442" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="40" cy="520" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="236" cy="542" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="216" cy="88" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="236" cy="150" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="178" y="81" text-anchor="start" font-size="13">NA</text>
<text x="178" y="143" text-anchor="start" font-size="13">NB</text>
<text x="492" y="237" text-anchor="start">Y<tspan dy="4" font-size="12">3</tspan></text>
<text x="492" y="337" text-anchor="start">Y<tspan dy="4" font-size="12">0</tspan></text>
<text x="492" y="437" text-anchor="start">Y<tspan dy="4" font-size="12">1</tspan></text>
<text x="492" y="537" text-anchor="start">Y<tspan dy="4" font-size="12">2</tspan></text>
<text x="40" y="28" text-anchor="middle" font-size="16">A</text>
<text x="71" y="28" text-anchor="middle" font-size="16">B</text>
</g>
</svg>
</div>

$\mathbf{Sol}^{n}$

- อ่านวงจรเป็นสมการของแต่ละเอาต์พุต
- เขียน `assign` ให้เอาต์พุตแต่ละตัว ด้วยตัวกระทำ `~` `&` `|` `^` (เกต NOT คือ `~`, AND คือ `&`, OR คือ `|`, XOR คือ `^`)

- ตรวจด้วยตารางความจริง ผลของโมดูลตรงกับวงจรในรูปทุกแถว

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

แต่ละบรรทัดของเกตคือเกต 1 ตัว พอร์ตแรกคือเอาต์พุต เขียนเป็นสมการได้ดังนี้

- `not (NS1, S1)` : $\mathit{NS1} = \overline{\mathit{S1}}$
- `not (NS0, S0)` : $\mathit{NS0} = \overline{\mathit{S0}}$
- `and (Y0, D, NS1, NS0)` : $\mathit{Y0} = D\,\mathit{NS1}\,\mathit{NS0}$
- `and (Y1, D, NS1, S0)` : $\mathit{Y1} = D\,\mathit{NS1}\,\mathit{S0}$
- `and (Y2, D, S1, NS0)` : $\mathit{Y2} = D\,\mathit{S1}\,\mathit{NS0}$
- `and (Y3, D, S1, S0)` : $\mathit{Y3} = D\,\mathit{S1}\,\mathit{S0}$

รวมเป็นสมการของเอาต์พุต แล้วเขียนวงจรและตารางความจริง (ตรวจทุกแถวด้วยโปรแกรม)

$\mathbf{Ans}\quad \begin{aligned}\mathit{Y0} &= D\,\overline{\mathit{S1}}\,\overline{\mathit{S0}} \\ \mathit{Y1} &= D\,\overline{\mathit{S1}}\,\mathit{S0} \\ \mathit{Y2} &= D\,\mathit{S1}\,\overline{\mathit{S0}} \\ \mathit{Y3} &= D\,\mathit{S1}\,\mathit{S0}\end{aligned}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="639" height="694" viewBox="0 0 639 694" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<polygon points="196,76 196,100 218,88"/>
<circle cx="223" cy="88" r="5"/>
<line x1="80" y1="88" x2="196" y2="88"/>
<polygon points="196,138 196,162 218,150"/>
<circle cx="223" cy="150" r="5"/>
<line x1="120" y1="150" x2="196" y2="150"/>
<path d="M196,198 H222 A26,44 0 0 1 222,286 H196 Z"/>
<line x1="40" y1="220" x2="196" y2="220"/>
<line x1="80" y1="242" x2="196" y2="242"/>
<line x1="120" y1="264" x2="196" y2="264"/>
<line x1="228" y1="88" x2="276" y2="88"/>
<line x1="228" y1="150" x2="296" y2="150"/>
<line x1="248" y1="242" x2="316" y2="242"/>
<path d="M370,320 H396 A26,44 0 0 1 396,408 H370 Z"/>
<line x1="40" y1="342" x2="370" y2="342"/>
<line x1="276" y1="364" x2="370" y2="364"/>
<line x1="296" y1="386" x2="370" y2="386"/>
<path d="M370,442 H396 A26,44 0 0 1 396,530 H370 Z"/>
<line x1="40" y1="464" x2="370" y2="464"/>
<line x1="276" y1="486" x2="370" y2="486"/>
<line x1="120" y1="508" x2="370" y2="508"/>
<path d="M370,564 H396 A26,44 0 0 1 396,652 H370 Z"/>
<line x1="40" y1="586" x2="370" y2="586"/>
<line x1="80" y1="608" x2="370" y2="608"/>
<line x1="296" y1="630" x2="370" y2="630"/>
<line x1="422" y1="364" x2="448" y2="364"/>
<line x1="422" y1="486" x2="468" y2="486"/>
<line x1="422" y1="608" x2="488" y2="608"/>
<line x1="316" y1="242" x2="544" y2="242"/>
<line x1="448" y1="364" x2="544" y2="364"/>
<line x1="468" y1="486" x2="544" y2="486"/>
<line x1="488" y1="608" x2="544" y2="608"/>
<line x1="40" y1="36" x2="40" y2="586"/>
<line x1="80" y1="36" x2="80" y2="608"/>
<line x1="120" y1="36" x2="120" y2="508"/>
<line x1="276" y1="88" x2="276" y2="486"/>
<line x1="296" y1="150" x2="296" y2="630"/>
<circle cx="80" cy="88" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="120" cy="150" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="40" cy="220" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="80" cy="242" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="120" cy="264" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="40" cy="342" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="276" cy="364" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="296" cy="386" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="40" cy="464" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="276" cy="486" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="120" cy="508" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="40" cy="586" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="80" cy="608" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="296" cy="630" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="276" cy="88" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="296" cy="150" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="236" y="81" text-anchor="start" font-size="13">NS1</text>
<text x="236" y="143" text-anchor="start" font-size="13">NS0</text>
<text x="552" y="248" text-anchor="start">Y<tspan dy="4" font-size="12">3</tspan></text>
<text x="552" y="370" text-anchor="start">Y<tspan dy="4" font-size="12">0</tspan></text>
<text x="552" y="492" text-anchor="start">Y<tspan dy="4" font-size="12">1</tspan></text>
<text x="552" y="614" text-anchor="start">Y<tspan dy="4" font-size="12">2</tspan></text>
<text x="40" y="28" text-anchor="middle" font-size="16">D</text>
<text x="80" y="28" text-anchor="middle" font-size="16">S<tspan dy="4" font-size="10">1</tspan></text>
<text x="120" y="28" text-anchor="middle" font-size="16">S<tspan dy="4" font-size="10">0</tspan></text>
</g>
</svg>
</div>

| $D$ | $\mathit{S1}$ | $\mathit{S0}$ | $\mathit{Y3}$ | $\mathit{Y2}$ | $\mathit{Y1}$ | $\mathit{Y0}$ |
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 0 | 0 | 1 | 0 | 0 | 0 | 0 |
| 0 | 1 | 0 | 0 | 0 | 0 | 0 |
| 0 | 1 | 1 | 0 | 0 | 0 | 0 |
| 1 | 0 | 0 | 0 | 0 | 0 | 1 |
| 1 | 0 | 1 | 0 | 0 | 1 | 0 |
| 1 | 1 | 0 | 0 | 1 | 0 | 0 |
| 1 | 1 | 1 | 1 | 0 | 0 | 0 |

### ข้อ 4  จงเขียนโมดูล Verilog แบบ Structural ของวงจรในรูป ($\mathit{Y0} = D\,\overline{\mathit{S1}}\,\overline{\mathit{S0}}$, $\mathit{Y1} = D\,\overline{\mathit{S1}}\,\mathit{S0}$, $\mathit{Y2} = D\,\mathit{S1}\,\overline{\mathit{S0}}$, $\mathit{Y3} = D\,\mathit{S1}\,\mathit{S0}$) {part=b; case=c12; style=struct}

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="639" height="694" viewBox="0 0 639 694" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<polygon points="196,76 196,100 218,88"/>
<circle cx="223" cy="88" r="5"/>
<line x1="80" y1="88" x2="196" y2="88"/>
<polygon points="196,138 196,162 218,150"/>
<circle cx="223" cy="150" r="5"/>
<line x1="120" y1="150" x2="196" y2="150"/>
<path d="M196,198 H222 A26,44 0 0 1 222,286 H196 Z"/>
<line x1="40" y1="220" x2="196" y2="220"/>
<line x1="80" y1="242" x2="196" y2="242"/>
<line x1="120" y1="264" x2="196" y2="264"/>
<line x1="228" y1="88" x2="276" y2="88"/>
<line x1="228" y1="150" x2="296" y2="150"/>
<line x1="248" y1="242" x2="316" y2="242"/>
<path d="M370,320 H396 A26,44 0 0 1 396,408 H370 Z"/>
<line x1="40" y1="342" x2="370" y2="342"/>
<line x1="276" y1="364" x2="370" y2="364"/>
<line x1="296" y1="386" x2="370" y2="386"/>
<path d="M370,442 H396 A26,44 0 0 1 396,530 H370 Z"/>
<line x1="40" y1="464" x2="370" y2="464"/>
<line x1="276" y1="486" x2="370" y2="486"/>
<line x1="120" y1="508" x2="370" y2="508"/>
<path d="M370,564 H396 A26,44 0 0 1 396,652 H370 Z"/>
<line x1="40" y1="586" x2="370" y2="586"/>
<line x1="80" y1="608" x2="370" y2="608"/>
<line x1="296" y1="630" x2="370" y2="630"/>
<line x1="422" y1="364" x2="448" y2="364"/>
<line x1="422" y1="486" x2="468" y2="486"/>
<line x1="422" y1="608" x2="488" y2="608"/>
<line x1="316" y1="242" x2="544" y2="242"/>
<line x1="448" y1="364" x2="544" y2="364"/>
<line x1="468" y1="486" x2="544" y2="486"/>
<line x1="488" y1="608" x2="544" y2="608"/>
<line x1="40" y1="36" x2="40" y2="586"/>
<line x1="80" y1="36" x2="80" y2="608"/>
<line x1="120" y1="36" x2="120" y2="508"/>
<line x1="276" y1="88" x2="276" y2="486"/>
<line x1="296" y1="150" x2="296" y2="630"/>
<circle cx="80" cy="88" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="120" cy="150" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="40" cy="220" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="80" cy="242" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="120" cy="264" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="40" cy="342" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="276" cy="364" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="296" cy="386" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="40" cy="464" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="276" cy="486" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="120" cy="508" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="40" cy="586" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="80" cy="608" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="296" cy="630" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="276" cy="88" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="296" cy="150" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="236" y="81" text-anchor="start" font-size="13">NS1</text>
<text x="236" y="143" text-anchor="start" font-size="13">NS0</text>
<text x="552" y="248" text-anchor="start">Y<tspan dy="4" font-size="12">3</tspan></text>
<text x="552" y="370" text-anchor="start">Y<tspan dy="4" font-size="12">0</tspan></text>
<text x="552" y="492" text-anchor="start">Y<tspan dy="4" font-size="12">1</tspan></text>
<text x="552" y="614" text-anchor="start">Y<tspan dy="4" font-size="12">2</tspan></text>
<text x="40" y="28" text-anchor="middle" font-size="16">D</text>
<text x="80" y="28" text-anchor="middle" font-size="16">S<tspan dy="4" font-size="10">1</tspan></text>
<text x="120" y="28" text-anchor="middle" font-size="16">S<tspan dy="4" font-size="10">0</tspan></text>
</g>
</svg>
</div>

$\mathbf{Sol}^{n}$

- ตั้งชื่อสายภายในที่เป็นเอาต์พุตของเกต : `NS1`, `NS0` แล้วประกาศ `wire`
- เขียนเกตทีละตัว พอร์ตแรกเป็นเอาต์พุต เกตทุกตัวทำงานพร้อมกัน สลับลำดับบรรทัดแล้ววงจรเหมือนเดิม

- ตรวจด้วยตารางความจริง ผลของโมดูลตรงกับวงจรในรูปทุกแถว

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

แต่ละ `assign` คือสมการของเอาต์พุตหนึ่งตัว เขียนเป็นสมการได้ดังนี้

- `assign Y0 = D & ~S1 & ~S0` : $\mathit{Y0} = D\,\overline{\mathit{S1}}\,\overline{\mathit{S0}}$
- `assign Y1 = D & ~S1 & S0` : $\mathit{Y1} = D\,\overline{\mathit{S1}}\,\mathit{S0}$
- `assign Y2 = D & S1 & ~S0` : $\mathit{Y2} = D\,\mathit{S1}\,\overline{\mathit{S0}}$
- `assign Y3 = D & S1 & S0` : $\mathit{Y3} = D\,\mathit{S1}\,\mathit{S0}$

รวมเป็นสมการของเอาต์พุต แล้วเขียนวงจรและตารางความจริง (ตรวจทุกแถวด้วยโปรแกรม)

$\mathbf{Ans}\quad \begin{aligned}\mathit{Y0} &= D\,\overline{\mathit{S1}}\,\overline{\mathit{S0}} \\ \mathit{Y1} &= D\,\overline{\mathit{S1}}\,\mathit{S0} \\ \mathit{Y2} &= D\,\mathit{S1}\,\overline{\mathit{S0}} \\ \mathit{Y3} &= D\,\mathit{S1}\,\mathit{S0}\end{aligned}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="638" height="694" viewBox="0 0 638 694" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<polygon points="196,76 196,100 218,88"/>
<circle cx="223" cy="88" r="5"/>
<line x1="80" y1="88" x2="196" y2="88"/>
<polygon points="196,138 196,162 218,150"/>
<circle cx="223" cy="150" r="5"/>
<line x1="120" y1="150" x2="196" y2="150"/>
<path d="M196,198 H222 A26,44 0 0 1 222,286 H196 Z"/>
<line x1="40" y1="220" x2="196" y2="220"/>
<line x1="80" y1="242" x2="196" y2="242"/>
<line x1="120" y1="264" x2="196" y2="264"/>
<line x1="228" y1="88" x2="274" y2="88"/>
<line x1="228" y1="150" x2="294" y2="150"/>
<line x1="248" y1="242" x2="314" y2="242"/>
<path d="M368,320 H394 A26,44 0 0 1 394,408 H368 Z"/>
<line x1="40" y1="342" x2="368" y2="342"/>
<line x1="274" y1="364" x2="368" y2="364"/>
<line x1="294" y1="386" x2="368" y2="386"/>
<path d="M368,442 H394 A26,44 0 0 1 394,530 H368 Z"/>
<line x1="40" y1="464" x2="368" y2="464"/>
<line x1="274" y1="486" x2="368" y2="486"/>
<line x1="120" y1="508" x2="368" y2="508"/>
<path d="M368,564 H394 A26,44 0 0 1 394,652 H368 Z"/>
<line x1="40" y1="586" x2="368" y2="586"/>
<line x1="80" y1="608" x2="368" y2="608"/>
<line x1="294" y1="630" x2="368" y2="630"/>
<line x1="420" y1="364" x2="446" y2="364"/>
<line x1="420" y1="486" x2="466" y2="486"/>
<line x1="420" y1="608" x2="486" y2="608"/>
<line x1="314" y1="242" x2="542" y2="242"/>
<line x1="446" y1="364" x2="542" y2="364"/>
<line x1="466" y1="486" x2="542" y2="486"/>
<line x1="486" y1="608" x2="542" y2="608"/>
<line x1="40" y1="36" x2="40" y2="586"/>
<line x1="80" y1="36" x2="80" y2="608"/>
<line x1="120" y1="36" x2="120" y2="508"/>
<line x1="274" y1="88" x2="274" y2="486"/>
<line x1="294" y1="150" x2="294" y2="630"/>
<circle cx="80" cy="88" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="120" cy="150" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="40" cy="220" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="80" cy="242" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="120" cy="264" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="40" cy="342" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="274" cy="364" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="294" cy="386" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="40" cy="464" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="274" cy="486" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="120" cy="508" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="40" cy="586" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="80" cy="608" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="294" cy="630" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="274" cy="88" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="294" cy="150" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="550" y="248" text-anchor="start">Y<tspan dy="4" font-size="12">3</tspan></text>
<text x="550" y="370" text-anchor="start">Y<tspan dy="4" font-size="12">0</tspan></text>
<text x="550" y="492" text-anchor="start">Y<tspan dy="4" font-size="12">1</tspan></text>
<text x="550" y="614" text-anchor="start">Y<tspan dy="4" font-size="12">2</tspan></text>
<text x="40" y="28" text-anchor="middle" font-size="16">D</text>
<text x="80" y="28" text-anchor="middle" font-size="16">S<tspan dy="4" font-size="10">1</tspan></text>
<text x="120" y="28" text-anchor="middle" font-size="16">S<tspan dy="4" font-size="10">0</tspan></text>
</g>
</svg>
</div>

| $D$ | $\mathit{S1}$ | $\mathit{S0}$ | $\mathit{Y3}$ | $\mathit{Y2}$ | $\mathit{Y1}$ | $\mathit{Y0}$ |
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 0 | 0 | 1 | 0 | 0 | 0 | 0 |
| 0 | 1 | 0 | 0 | 0 | 0 | 0 |
| 0 | 1 | 1 | 0 | 0 | 0 | 0 |
| 1 | 0 | 0 | 0 | 0 | 0 | 1 |
| 1 | 0 | 1 | 0 | 0 | 1 | 0 |
| 1 | 1 | 0 | 0 | 1 | 0 | 0 |
| 1 | 1 | 1 | 1 | 0 | 0 | 0 |

### ข้อ 4  จงเขียนโมดูล Verilog แบบ Dataflow ของวงจรในรูป ($\mathit{Y0} = D\,\overline{\mathit{S1}}\,\overline{\mathit{S0}}$, $\mathit{Y1} = D\,\overline{\mathit{S1}}\,\mathit{S0}$, $\mathit{Y2} = D\,\mathit{S1}\,\overline{\mathit{S0}}$, $\mathit{Y3} = D\,\mathit{S1}\,\mathit{S0}$) {part=b; case=c12; style=flow}

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="639" height="694" viewBox="0 0 639 694" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<polygon points="196,76 196,100 218,88"/>
<circle cx="223" cy="88" r="5"/>
<line x1="80" y1="88" x2="196" y2="88"/>
<polygon points="196,138 196,162 218,150"/>
<circle cx="223" cy="150" r="5"/>
<line x1="120" y1="150" x2="196" y2="150"/>
<path d="M196,198 H222 A26,44 0 0 1 222,286 H196 Z"/>
<line x1="40" y1="220" x2="196" y2="220"/>
<line x1="80" y1="242" x2="196" y2="242"/>
<line x1="120" y1="264" x2="196" y2="264"/>
<line x1="228" y1="88" x2="276" y2="88"/>
<line x1="228" y1="150" x2="296" y2="150"/>
<line x1="248" y1="242" x2="316" y2="242"/>
<path d="M370,320 H396 A26,44 0 0 1 396,408 H370 Z"/>
<line x1="40" y1="342" x2="370" y2="342"/>
<line x1="276" y1="364" x2="370" y2="364"/>
<line x1="296" y1="386" x2="370" y2="386"/>
<path d="M370,442 H396 A26,44 0 0 1 396,530 H370 Z"/>
<line x1="40" y1="464" x2="370" y2="464"/>
<line x1="276" y1="486" x2="370" y2="486"/>
<line x1="120" y1="508" x2="370" y2="508"/>
<path d="M370,564 H396 A26,44 0 0 1 396,652 H370 Z"/>
<line x1="40" y1="586" x2="370" y2="586"/>
<line x1="80" y1="608" x2="370" y2="608"/>
<line x1="296" y1="630" x2="370" y2="630"/>
<line x1="422" y1="364" x2="448" y2="364"/>
<line x1="422" y1="486" x2="468" y2="486"/>
<line x1="422" y1="608" x2="488" y2="608"/>
<line x1="316" y1="242" x2="544" y2="242"/>
<line x1="448" y1="364" x2="544" y2="364"/>
<line x1="468" y1="486" x2="544" y2="486"/>
<line x1="488" y1="608" x2="544" y2="608"/>
<line x1="40" y1="36" x2="40" y2="586"/>
<line x1="80" y1="36" x2="80" y2="608"/>
<line x1="120" y1="36" x2="120" y2="508"/>
<line x1="276" y1="88" x2="276" y2="486"/>
<line x1="296" y1="150" x2="296" y2="630"/>
<circle cx="80" cy="88" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="120" cy="150" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="40" cy="220" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="80" cy="242" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="120" cy="264" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="40" cy="342" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="276" cy="364" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="296" cy="386" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="40" cy="464" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="276" cy="486" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="120" cy="508" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="40" cy="586" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="80" cy="608" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="296" cy="630" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="276" cy="88" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="296" cy="150" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="236" y="81" text-anchor="start" font-size="13">NS1</text>
<text x="236" y="143" text-anchor="start" font-size="13">NS0</text>
<text x="552" y="248" text-anchor="start">Y<tspan dy="4" font-size="12">3</tspan></text>
<text x="552" y="370" text-anchor="start">Y<tspan dy="4" font-size="12">0</tspan></text>
<text x="552" y="492" text-anchor="start">Y<tspan dy="4" font-size="12">1</tspan></text>
<text x="552" y="614" text-anchor="start">Y<tspan dy="4" font-size="12">2</tspan></text>
<text x="40" y="28" text-anchor="middle" font-size="16">D</text>
<text x="80" y="28" text-anchor="middle" font-size="16">S<tspan dy="4" font-size="10">1</tspan></text>
<text x="120" y="28" text-anchor="middle" font-size="16">S<tspan dy="4" font-size="10">0</tspan></text>
</g>
</svg>
</div>

$\mathbf{Sol}^{n}$

- อ่านวงจรเป็นสมการของแต่ละเอาต์พุต
- เขียน `assign` ให้เอาต์พุตแต่ละตัว ด้วยตัวกระทำ `~` `&` `|` `^` (เกต NOT คือ `~`, AND คือ `&`, OR คือ `|`, XOR คือ `^`)

- ตรวจด้วยตารางความจริง ผลของโมดูลตรงกับวงจรในรูปทุกแถว

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

แต่ละบรรทัดของเกตคือเกต 1 ตัว พอร์ตแรกคือเอาต์พุต เขียนเป็นสมการได้ดังนี้

- `xor (P, A, B)` : $P = A \oplus B$
- `xor (Y, P, C)` : $Y = P \oplus C$

รวมเป็นสมการของเอาต์พุต แล้วเขียนวงจรและตารางความจริง (ตรวจทุกแถวด้วยโปรแกรม)

$\mathbf{Ans}\quad \begin{aligned}Y &= A \oplus B \oplus C\end{aligned}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="571" height="282" viewBox="0 0 571 282" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<path d="M177,74 C199,74 225,90.5 237,107 C225,123.5 199,140 177,140 Q191,107 177,74 Z"/>
<path d="M169,74 Q183,107 169,140"/>
<line x1="40" y1="96" x2="175.2" y2="96"/>
<line x1="71" y1="118" x2="175.2" y2="118"/>
<line x1="237" y1="107" x2="271.1" y2="107"/>
<path d="M333.1,174 C355.1,174 381.1,190.5 393.1,207 C381.1,223.5 355.1,240 333.1,240 Q347.1,207 333.1,174 Z"/>
<path d="M325.1,174 Q339.1,207 325.1,240"/>
<line x1="271.1" y1="196" x2="331.3" y2="196"/>
<line x1="102" y1="218" x2="331.3" y2="218"/>
<line x1="393.1" y1="207" x2="419.1" y2="207"/>
<line x1="419.1" y1="207" x2="475.1" y2="207"/>
<line x1="40" y1="36" x2="40" y2="96"/>
<line x1="71" y1="36" x2="71" y2="118"/>
<line x1="102" y1="36" x2="102" y2="218"/>
<line x1="271.1" y1="107" x2="271.1" y2="196"/>
<circle cx="40" cy="96" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="118" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="271.1" cy="196" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="102" cy="218" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="271.1" cy="107" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="245" y="100" text-anchor="start" font-size="13">P</text>
<text x="483.1" y="213" text-anchor="start">Y</text>
<text x="40" y="28" text-anchor="middle" font-size="16">A</text>
<text x="71" y="28" text-anchor="middle" font-size="16">B</text>
<text x="102" y="28" text-anchor="middle" font-size="16">C</text>
</g>
</svg>
</div>

| $A$ | $B$ | $C$ | $Y$ |
|:-:|:-:|:-:|:-:|
| 0 | 0 | 0 | 0 |
| 0 | 0 | 1 | 1 |
| 0 | 1 | 0 | 1 |
| 0 | 1 | 1 | 0 |
| 1 | 0 | 0 | 1 |
| 1 | 0 | 1 | 0 |
| 1 | 1 | 0 | 0 |
| 1 | 1 | 1 | 1 |

### ข้อ 4  จงเขียนโมดูล Verilog แบบ Structural ของวงจรในรูป ($Y = A \oplus B \oplus C$) {part=b; case=c13; style=struct}

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="571" height="282" viewBox="0 0 571 282" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<path d="M177,74 C199,74 225,90.5 237,107 C225,123.5 199,140 177,140 Q191,107 177,74 Z"/>
<path d="M169,74 Q183,107 169,140"/>
<line x1="40" y1="96" x2="175.2" y2="96"/>
<line x1="71" y1="118" x2="175.2" y2="118"/>
<line x1="237" y1="107" x2="271.1" y2="107"/>
<path d="M333.1,174 C355.1,174 381.1,190.5 393.1,207 C381.1,223.5 355.1,240 333.1,240 Q347.1,207 333.1,174 Z"/>
<path d="M325.1,174 Q339.1,207 325.1,240"/>
<line x1="271.1" y1="196" x2="331.3" y2="196"/>
<line x1="102" y1="218" x2="331.3" y2="218"/>
<line x1="393.1" y1="207" x2="419.1" y2="207"/>
<line x1="419.1" y1="207" x2="475.1" y2="207"/>
<line x1="40" y1="36" x2="40" y2="96"/>
<line x1="71" y1="36" x2="71" y2="118"/>
<line x1="102" y1="36" x2="102" y2="218"/>
<line x1="271.1" y1="107" x2="271.1" y2="196"/>
<circle cx="40" cy="96" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="118" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="271.1" cy="196" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="102" cy="218" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="271.1" cy="107" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="245" y="100" text-anchor="start" font-size="13">P</text>
<text x="483.1" y="213" text-anchor="start">Y</text>
<text x="40" y="28" text-anchor="middle" font-size="16">A</text>
<text x="71" y="28" text-anchor="middle" font-size="16">B</text>
<text x="102" y="28" text-anchor="middle" font-size="16">C</text>
</g>
</svg>
</div>

$\mathbf{Sol}^{n}$

- ตั้งชื่อสายภายในที่เป็นเอาต์พุตของเกต : `P` แล้วประกาศ `wire`
- เขียนเกตทีละตัว พอร์ตแรกเป็นเอาต์พุต เกตทุกตัวทำงานพร้อมกัน สลับลำดับบรรทัดแล้ววงจรเหมือนเดิม

- ตรวจด้วยตารางความจริง ผลของโมดูลตรงกับวงจรในรูปทุกแถว

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

แต่ละ `assign` คือสมการของเอาต์พุตหนึ่งตัว เขียนเป็นสมการได้ดังนี้

- `assign Y = A ^ B ^ C` : $Y = A \oplus B \oplus C$

รวมเป็นสมการของเอาต์พุต แล้วเขียนวงจรและตารางความจริง (ตรวจทุกแถวด้วยโปรแกรม)

$\mathbf{Ans}\quad \begin{aligned}Y &= A \oplus B \oplus C\end{aligned}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="415" height="204" viewBox="0 0 415 204" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<path d="M177,74 C199,74 225,96 237,118 C225,140 199,162 177,162 Q191,118 177,74 Z"/>
<path d="M169,74 Q183,118 169,162"/>
<line x1="40" y1="96" x2="174.2" y2="96"/>
<line x1="71" y1="118" x2="176" y2="118"/>
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

| $A$ | $B$ | $C$ | $Y$ |
|:-:|:-:|:-:|:-:|
| 0 | 0 | 0 | 0 |
| 0 | 0 | 1 | 1 |
| 0 | 1 | 0 | 1 |
| 0 | 1 | 1 | 0 |
| 1 | 0 | 0 | 1 |
| 1 | 0 | 1 | 0 |
| 1 | 1 | 0 | 0 |
| 1 | 1 | 1 | 1 |

### ข้อ 4  จงเขียนโมดูล Verilog แบบ Dataflow ของวงจรในรูป ($Y = A \oplus B \oplus C$) {part=b; case=c13; style=flow}

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="571" height="282" viewBox="0 0 571 282" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<path d="M177,74 C199,74 225,90.5 237,107 C225,123.5 199,140 177,140 Q191,107 177,74 Z"/>
<path d="M169,74 Q183,107 169,140"/>
<line x1="40" y1="96" x2="175.2" y2="96"/>
<line x1="71" y1="118" x2="175.2" y2="118"/>
<line x1="237" y1="107" x2="271.1" y2="107"/>
<path d="M333.1,174 C355.1,174 381.1,190.5 393.1,207 C381.1,223.5 355.1,240 333.1,240 Q347.1,207 333.1,174 Z"/>
<path d="M325.1,174 Q339.1,207 325.1,240"/>
<line x1="271.1" y1="196" x2="331.3" y2="196"/>
<line x1="102" y1="218" x2="331.3" y2="218"/>
<line x1="393.1" y1="207" x2="419.1" y2="207"/>
<line x1="419.1" y1="207" x2="475.1" y2="207"/>
<line x1="40" y1="36" x2="40" y2="96"/>
<line x1="71" y1="36" x2="71" y2="118"/>
<line x1="102" y1="36" x2="102" y2="218"/>
<line x1="271.1" y1="107" x2="271.1" y2="196"/>
<circle cx="40" cy="96" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="118" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="271.1" cy="196" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="102" cy="218" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="271.1" cy="107" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="245" y="100" text-anchor="start" font-size="13">P</text>
<text x="483.1" y="213" text-anchor="start">Y</text>
<text x="40" y="28" text-anchor="middle" font-size="16">A</text>
<text x="71" y="28" text-anchor="middle" font-size="16">B</text>
<text x="102" y="28" text-anchor="middle" font-size="16">C</text>
</g>
</svg>
</div>

$\mathbf{Sol}^{n}$

- อ่านวงจรเป็นสมการของแต่ละเอาต์พุต
- เขียน `assign` ให้เอาต์พุตแต่ละตัว ด้วยตัวกระทำ `~` `&` `|` `^` (เกต NOT คือ `~`, AND คือ `&`, OR คือ `|`, XOR คือ `^`)

- ตรวจด้วยตารางความจริง ผลของโมดูลตรงกับวงจรในรูปทุกแถว

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

แต่ละบรรทัดของเกตคือเกต 1 ตัว พอร์ตแรกคือเอาต์พุต เขียนเป็นสมการได้ดังนี้

- `not (NA, A)` : $\mathit{NA} = \overline{A}$
- `not (NB, B)` : $\mathit{NB} = \overline{B}$
- `and (Gt, A, NB)` : $\mathit{Gt} = A\,\mathit{NB}$
- `xnor (Eq, A, B)` : $\mathit{Eq} = \overline{A \oplus B}$
- `and (Lt, NA, B)` : $\mathit{Lt} = \mathit{NA}\,B$

รวมเป็นสมการของเอาต์พุต แล้วเขียนวงจรและตารางความจริง (ตรวจทุกแถวด้วยโปรแกรม)

$\mathbf{Ans}\quad \begin{aligned}\mathit{Gt} &= A\,\overline{B} \\ \mathit{Eq} &= \overline{A \oplus B} \\ \mathit{Lt} &= \overline{A}\,B\end{aligned}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="586" height="506" viewBox="0 0 586 506" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<polygon points="138,76 138,100 160,88"/>
<circle cx="165" cy="88" r="5"/>
<line x1="40" y1="88" x2="138" y2="88"/>
<polygon points="138,138 138,162 160,150"/>
<circle cx="165" cy="150" r="5"/>
<line x1="71" y1="150" x2="138" y2="150"/>
<path d="M146,198 C168,198 194,214.5 206,231 C194,247.5 168,264 146,264 Q160,231 146,198 Z"/>
<path d="M138,198 Q152,231 138,264"/>
<circle cx="211" cy="231" r="5"/>
<line x1="40" y1="220" x2="144.2" y2="220"/>
<line x1="71" y1="242" x2="144.2" y2="242"/>
<line x1="170" y1="88" x2="242" y2="88"/>
<line x1="170" y1="150" x2="262" y2="150"/>
<line x1="216" y1="231" x2="282" y2="231"/>
<path d="M336,298 H362 A26,33 0 0 1 362,364 H336 Z"/>
<line x1="40" y1="320" x2="336" y2="320"/>
<line x1="262" y1="342" x2="336" y2="342"/>
<path d="M336,398 H362 A26,33 0 0 1 362,464 H336 Z"/>
<line x1="242" y1="420" x2="336" y2="420"/>
<line x1="71" y1="442" x2="336" y2="442"/>
<line x1="388" y1="331" x2="414" y2="331"/>
<line x1="388" y1="431" x2="434" y2="431"/>
<line x1="282" y1="231" x2="490" y2="231"/>
<line x1="414" y1="331" x2="490" y2="331"/>
<line x1="434" y1="431" x2="490" y2="431"/>
<line x1="40" y1="36" x2="40" y2="320"/>
<line x1="71" y1="36" x2="71" y2="442"/>
<line x1="242" y1="88" x2="242" y2="420"/>
<line x1="262" y1="150" x2="262" y2="342"/>
<circle cx="40" cy="88" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="150" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="40" cy="220" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="242" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="40" cy="320" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="262" cy="342" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="242" cy="420" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="442" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="242" cy="88" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="262" cy="150" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="178" y="81" text-anchor="start" font-size="13">NA</text>
<text x="178" y="143" text-anchor="start" font-size="13">NB</text>
<text x="498" y="237" text-anchor="start">Eq</text>
<text x="498" y="337" text-anchor="start">Gt</text>
<text x="498" y="437" text-anchor="start">Lt</text>
<text x="40" y="28" text-anchor="middle" font-size="16">A</text>
<text x="71" y="28" text-anchor="middle" font-size="16">B</text>
</g>
</svg>
</div>

| $A$ | $B$ | $\mathit{Gt}$ | $\mathit{Eq}$ | $\mathit{Lt}$ |
|:-:|:-:|:-:|:-:|:-:|
| 0 | 0 | 0 | 1 | 0 |
| 0 | 1 | 0 | 0 | 1 |
| 1 | 0 | 1 | 0 | 0 |
| 1 | 1 | 0 | 1 | 0 |

### ข้อ 4  จงเขียนโมดูล Verilog แบบ Structural ของวงจรในรูป ($\mathit{Gt} = A\,\overline{B}$, $\mathit{Eq} = \overline{A \oplus B}$, $\mathit{Lt} = \overline{A}\,B$) {part=b; case=c14; style=struct}

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="586" height="506" viewBox="0 0 586 506" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<polygon points="138,76 138,100 160,88"/>
<circle cx="165" cy="88" r="5"/>
<line x1="40" y1="88" x2="138" y2="88"/>
<polygon points="138,138 138,162 160,150"/>
<circle cx="165" cy="150" r="5"/>
<line x1="71" y1="150" x2="138" y2="150"/>
<path d="M146,198 C168,198 194,214.5 206,231 C194,247.5 168,264 146,264 Q160,231 146,198 Z"/>
<path d="M138,198 Q152,231 138,264"/>
<circle cx="211" cy="231" r="5"/>
<line x1="40" y1="220" x2="144.2" y2="220"/>
<line x1="71" y1="242" x2="144.2" y2="242"/>
<line x1="170" y1="88" x2="242" y2="88"/>
<line x1="170" y1="150" x2="262" y2="150"/>
<line x1="216" y1="231" x2="282" y2="231"/>
<path d="M336,298 H362 A26,33 0 0 1 362,364 H336 Z"/>
<line x1="40" y1="320" x2="336" y2="320"/>
<line x1="262" y1="342" x2="336" y2="342"/>
<path d="M336,398 H362 A26,33 0 0 1 362,464 H336 Z"/>
<line x1="242" y1="420" x2="336" y2="420"/>
<line x1="71" y1="442" x2="336" y2="442"/>
<line x1="388" y1="331" x2="414" y2="331"/>
<line x1="388" y1="431" x2="434" y2="431"/>
<line x1="282" y1="231" x2="490" y2="231"/>
<line x1="414" y1="331" x2="490" y2="331"/>
<line x1="434" y1="431" x2="490" y2="431"/>
<line x1="40" y1="36" x2="40" y2="320"/>
<line x1="71" y1="36" x2="71" y2="442"/>
<line x1="242" y1="88" x2="242" y2="420"/>
<line x1="262" y1="150" x2="262" y2="342"/>
<circle cx="40" cy="88" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="150" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="40" cy="220" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="242" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="40" cy="320" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="262" cy="342" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="242" cy="420" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="442" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="242" cy="88" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="262" cy="150" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="178" y="81" text-anchor="start" font-size="13">NA</text>
<text x="178" y="143" text-anchor="start" font-size="13">NB</text>
<text x="498" y="237" text-anchor="start">Eq</text>
<text x="498" y="337" text-anchor="start">Gt</text>
<text x="498" y="437" text-anchor="start">Lt</text>
<text x="40" y="28" text-anchor="middle" font-size="16">A</text>
<text x="71" y="28" text-anchor="middle" font-size="16">B</text>
</g>
</svg>
</div>

$\mathbf{Sol}^{n}$

- ตั้งชื่อสายภายในที่เป็นเอาต์พุตของเกต : `NA`, `NB` แล้วประกาศ `wire`
- เขียนเกตทีละตัว พอร์ตแรกเป็นเอาต์พุต เกตทุกตัวทำงานพร้อมกัน สลับลำดับบรรทัดแล้ววงจรเหมือนเดิม

- ตรวจด้วยตารางความจริง ผลของโมดูลตรงกับวงจรในรูปทุกแถว

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

แต่ละ `assign` คือสมการของเอาต์พุตหนึ่งตัว เขียนเป็นสมการได้ดังนี้

- `assign Gt = A & ~B` : $\mathit{Gt} = A\,\overline{B}$
- `assign Eq = ~(A ^ B)` : $\mathit{Eq} = \overline{A \oplus B}$
- `assign Lt = ~A & B` : $\mathit{Lt} = \overline{A}\,B$

รวมเป็นสมการของเอาต์พุต แล้วเขียนวงจรและตารางความจริง (ตรวจทุกแถวด้วยโปรแกรม)

$\mathbf{Ans}\quad \begin{aligned}\mathit{Gt} &= A\,\overline{B} \\ \mathit{Eq} &= \overline{A \oplus B} \\ \mathit{Lt} &= \overline{A}\,B\end{aligned}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="596" height="568" viewBox="0 0 596 568" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<polygon points="138,76 138,100 160,88"/>
<circle cx="165" cy="88" r="5"/>
<line x1="71" y1="88" x2="138" y2="88"/>
<path d="M146,136 C168,136 194,152.5 206,169 C194,185.5 168,202 146,202 Q160,169 146,136 Z"/>
<path d="M138,136 Q152,169 138,202"/>
<line x1="40" y1="158" x2="144.2" y2="158"/>
<line x1="71" y1="180" x2="144.2" y2="180"/>
<polygon points="138,238 138,262 160,250"/>
<circle cx="165" cy="250" r="5"/>
<line x1="40" y1="250" x2="138" y2="250"/>
<line x1="170" y1="88" x2="232" y2="88"/>
<line x1="206" y1="169" x2="252" y2="169"/>
<line x1="170" y1="250" x2="272" y2="250"/>
<path d="M326,298 H352 A26,33 0 0 1 352,364 H326 Z"/>
<line x1="40" y1="320" x2="326" y2="320"/>
<line x1="232" y1="342" x2="326" y2="342"/>
<polygon points="326,400 326,424 348,412"/>
<circle cx="353" cy="412" r="5"/>
<line x1="252" y1="412" x2="326" y2="412"/>
<path d="M326,460 H352 A26,33 0 0 1 352,526 H326 Z"/>
<line x1="272" y1="482" x2="326" y2="482"/>
<line x1="71" y1="504" x2="326" y2="504"/>
<line x1="378" y1="331" x2="404" y2="331"/>
<line x1="358" y1="412" x2="424" y2="412"/>
<line x1="378" y1="493" x2="444" y2="493"/>
<line x1="404" y1="331" x2="500" y2="331"/>
<line x1="424" y1="412" x2="500" y2="412"/>
<line x1="444" y1="493" x2="500" y2="493"/>
<line x1="40" y1="36" x2="40" y2="320"/>
<line x1="71" y1="36" x2="71" y2="504"/>
<line x1="232" y1="88" x2="232" y2="342"/>
<line x1="252" y1="169" x2="252" y2="412"/>
<line x1="272" y1="250" x2="272" y2="482"/>
<circle cx="71" cy="88" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="40" cy="158" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="180" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="40" cy="250" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="40" cy="320" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="232" cy="342" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="252" cy="412" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="272" cy="482" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="504" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="232" cy="88" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="252" cy="169" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="272" cy="250" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="508" y="337" text-anchor="start">Gt</text>
<text x="508" y="418" text-anchor="start">Eq</text>
<text x="508" y="499" text-anchor="start">Lt</text>
<text x="40" y="28" text-anchor="middle" font-size="16">A</text>
<text x="71" y="28" text-anchor="middle" font-size="16">B</text>
</g>
</svg>
</div>

| $A$ | $B$ | $\mathit{Gt}$ | $\mathit{Eq}$ | $\mathit{Lt}$ |
|:-:|:-:|:-:|:-:|:-:|
| 0 | 0 | 0 | 1 | 0 |
| 0 | 1 | 0 | 0 | 1 |
| 1 | 0 | 1 | 0 | 0 |
| 1 | 1 | 0 | 1 | 0 |

### ข้อ 4  จงเขียนโมดูล Verilog แบบ Dataflow ของวงจรในรูป ($\mathit{Gt} = A\,\overline{B}$, $\mathit{Eq} = \overline{A \oplus B}$, $\mathit{Lt} = \overline{A}\,B$) {part=b; case=c14; style=flow}

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="586" height="506" viewBox="0 0 586 506" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<polygon points="138,76 138,100 160,88"/>
<circle cx="165" cy="88" r="5"/>
<line x1="40" y1="88" x2="138" y2="88"/>
<polygon points="138,138 138,162 160,150"/>
<circle cx="165" cy="150" r="5"/>
<line x1="71" y1="150" x2="138" y2="150"/>
<path d="M146,198 C168,198 194,214.5 206,231 C194,247.5 168,264 146,264 Q160,231 146,198 Z"/>
<path d="M138,198 Q152,231 138,264"/>
<circle cx="211" cy="231" r="5"/>
<line x1="40" y1="220" x2="144.2" y2="220"/>
<line x1="71" y1="242" x2="144.2" y2="242"/>
<line x1="170" y1="88" x2="242" y2="88"/>
<line x1="170" y1="150" x2="262" y2="150"/>
<line x1="216" y1="231" x2="282" y2="231"/>
<path d="M336,298 H362 A26,33 0 0 1 362,364 H336 Z"/>
<line x1="40" y1="320" x2="336" y2="320"/>
<line x1="262" y1="342" x2="336" y2="342"/>
<path d="M336,398 H362 A26,33 0 0 1 362,464 H336 Z"/>
<line x1="242" y1="420" x2="336" y2="420"/>
<line x1="71" y1="442" x2="336" y2="442"/>
<line x1="388" y1="331" x2="414" y2="331"/>
<line x1="388" y1="431" x2="434" y2="431"/>
<line x1="282" y1="231" x2="490" y2="231"/>
<line x1="414" y1="331" x2="490" y2="331"/>
<line x1="434" y1="431" x2="490" y2="431"/>
<line x1="40" y1="36" x2="40" y2="320"/>
<line x1="71" y1="36" x2="71" y2="442"/>
<line x1="242" y1="88" x2="242" y2="420"/>
<line x1="262" y1="150" x2="262" y2="342"/>
<circle cx="40" cy="88" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="150" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="40" cy="220" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="242" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="40" cy="320" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="262" cy="342" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="242" cy="420" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="442" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="242" cy="88" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="262" cy="150" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="178" y="81" text-anchor="start" font-size="13">NA</text>
<text x="178" y="143" text-anchor="start" font-size="13">NB</text>
<text x="498" y="237" text-anchor="start">Eq</text>
<text x="498" y="337" text-anchor="start">Gt</text>
<text x="498" y="437" text-anchor="start">Lt</text>
<text x="40" y="28" text-anchor="middle" font-size="16">A</text>
<text x="71" y="28" text-anchor="middle" font-size="16">B</text>
</g>
</svg>
</div>

$\mathbf{Sol}^{n}$

- อ่านวงจรเป็นสมการของแต่ละเอาต์พุต
- เขียน `assign` ให้เอาต์พุตแต่ละตัว ด้วยตัวกระทำ `~` `&` `|` `^` (เกต NOT คือ `~`, AND คือ `&`, OR คือ `|`, XOR คือ `^`)

- ตรวจด้วยตารางความจริง ผลของโมดูลตรงกับวงจรในรูปทุกแถว

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

แต่ละบรรทัดของเกตคือเกต 1 ตัว พอร์ตแรกคือเอาต์พุต เขียนเป็นสมการได้ดังนี้

- `xnor (E1, A1, B1)` : $\mathit{E1} = \overline{\mathit{A1} \oplus \mathit{B1}}$
- `xnor (E0, A0, B0)` : $\mathit{E0} = \overline{\mathit{A0} \oplus \mathit{B0}}$
- `and (Y, E1, E0)` : $Y = \mathit{E1}\,\mathit{E0}$

รวมเป็นสมการของเอาต์พุต แล้วเขียนวงจรและตารางความจริง (ตรวจทุกแถวด้วยโปรแกรม)

$\mathbf{Ans}\quad \begin{aligned}Y &= \overline{\mathit{A1} \oplus \mathit{B1}}\,\overline{\mathit{A0} \oplus \mathit{B0}}\end{aligned}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="657" height="382" viewBox="0 0 657 382" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<path d="M244,74 C266,74 292,90.5 304,107 C292,123.5 266,140 244,140 Q258,107 244,74 Z"/>
<path d="M236,74 Q250,107 236,140"/>
<circle cx="309" cy="107" r="5"/>
<line x1="40" y1="96" x2="242.2" y2="96"/>
<line x1="120" y1="118" x2="242.2" y2="118"/>
<path d="M244,174 C266,174 292,190.5 304,207 C292,223.5 266,240 244,240 Q258,207 244,174 Z"/>
<path d="M236,174 Q250,207 236,240"/>
<circle cx="309" cy="207" r="5"/>
<line x1="80" y1="196" x2="242.2" y2="196"/>
<line x1="160" y1="218" x2="242.2" y2="218"/>
<line x1="314" y1="107" x2="353.9" y2="107"/>
<line x1="314" y1="207" x2="373.9" y2="207"/>
<path d="M427.9,274 H453.9 A26,33 0 0 1 453.9,340 H427.9 Z"/>
<line x1="353.9" y1="296" x2="427.9" y2="296"/>
<line x1="373.9" y1="318" x2="427.9" y2="318"/>
<line x1="479.9" y1="307" x2="505.9" y2="307"/>
<line x1="505.9" y1="307" x2="561.9" y2="307"/>
<line x1="40" y1="36" x2="40" y2="96"/>
<line x1="80" y1="36" x2="80" y2="196"/>
<line x1="120" y1="36" x2="120" y2="118"/>
<line x1="160" y1="36" x2="160" y2="218"/>
<line x1="353.9" y1="107" x2="353.9" y2="296"/>
<line x1="373.9" y1="207" x2="373.9" y2="318"/>
<circle cx="40" cy="96" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="120" cy="118" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="80" cy="196" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="160" cy="218" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="353.9" cy="296" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="373.9" cy="318" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="353.9" cy="107" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="373.9" cy="207" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="322" y="100" text-anchor="start" font-size="13">E<tspan dy="4" font-size="9">1</tspan></text>
<text x="322" y="200" text-anchor="start" font-size="13">E<tspan dy="4" font-size="9">0</tspan></text>
<text x="569.9" y="313" text-anchor="start">Y</text>
<text x="40" y="28" text-anchor="middle" font-size="16">A<tspan dy="4" font-size="10">1</tspan></text>
<text x="80" y="28" text-anchor="middle" font-size="16">A<tspan dy="4" font-size="10">0</tspan></text>
<text x="120" y="28" text-anchor="middle" font-size="16">B<tspan dy="4" font-size="10">1</tspan></text>
<text x="160" y="28" text-anchor="middle" font-size="16">B<tspan dy="4" font-size="10">0</tspan></text>
</g>
</svg>
</div>

| $\mathit{A1}$ | $\mathit{A0}$ | $\mathit{B1}$ | $\mathit{B0}$ | $Y$ |
|:-:|:-:|:-:|:-:|:-:|
| 0 | 0 | 0 | 0 | 1 |
| 0 | 0 | 0 | 1 | 0 |
| 0 | 0 | 1 | 0 | 0 |
| 0 | 0 | 1 | 1 | 0 |
| 0 | 1 | 0 | 0 | 0 |
| 0 | 1 | 0 | 1 | 1 |
| 0 | 1 | 1 | 0 | 0 |
| 0 | 1 | 1 | 1 | 0 |
| 1 | 0 | 0 | 0 | 0 |
| 1 | 0 | 0 | 1 | 0 |
| 1 | 0 | 1 | 0 | 1 |
| 1 | 0 | 1 | 1 | 0 |
| 1 | 1 | 0 | 0 | 0 |
| 1 | 1 | 0 | 1 | 0 |
| 1 | 1 | 1 | 0 | 0 |
| 1 | 1 | 1 | 1 | 1 |

### ข้อ 4  จงเขียนโมดูล Verilog แบบ Structural ของวงจรในรูป ($Y = \overline{\mathit{A1} \oplus \mathit{B1}}\,\overline{\mathit{A0} \oplus \mathit{B0}}$) {part=b; case=c15; style=struct}

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="657" height="382" viewBox="0 0 657 382" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<path d="M244,74 C266,74 292,90.5 304,107 C292,123.5 266,140 244,140 Q258,107 244,74 Z"/>
<path d="M236,74 Q250,107 236,140"/>
<circle cx="309" cy="107" r="5"/>
<line x1="40" y1="96" x2="242.2" y2="96"/>
<line x1="120" y1="118" x2="242.2" y2="118"/>
<path d="M244,174 C266,174 292,190.5 304,207 C292,223.5 266,240 244,240 Q258,207 244,174 Z"/>
<path d="M236,174 Q250,207 236,240"/>
<circle cx="309" cy="207" r="5"/>
<line x1="80" y1="196" x2="242.2" y2="196"/>
<line x1="160" y1="218" x2="242.2" y2="218"/>
<line x1="314" y1="107" x2="353.9" y2="107"/>
<line x1="314" y1="207" x2="373.9" y2="207"/>
<path d="M427.9,274 H453.9 A26,33 0 0 1 453.9,340 H427.9 Z"/>
<line x1="353.9" y1="296" x2="427.9" y2="296"/>
<line x1="373.9" y1="318" x2="427.9" y2="318"/>
<line x1="479.9" y1="307" x2="505.9" y2="307"/>
<line x1="505.9" y1="307" x2="561.9" y2="307"/>
<line x1="40" y1="36" x2="40" y2="96"/>
<line x1="80" y1="36" x2="80" y2="196"/>
<line x1="120" y1="36" x2="120" y2="118"/>
<line x1="160" y1="36" x2="160" y2="218"/>
<line x1="353.9" y1="107" x2="353.9" y2="296"/>
<line x1="373.9" y1="207" x2="373.9" y2="318"/>
<circle cx="40" cy="96" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="120" cy="118" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="80" cy="196" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="160" cy="218" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="353.9" cy="296" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="373.9" cy="318" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="353.9" cy="107" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="373.9" cy="207" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="322" y="100" text-anchor="start" font-size="13">E<tspan dy="4" font-size="9">1</tspan></text>
<text x="322" y="200" text-anchor="start" font-size="13">E<tspan dy="4" font-size="9">0</tspan></text>
<text x="569.9" y="313" text-anchor="start">Y</text>
<text x="40" y="28" text-anchor="middle" font-size="16">A<tspan dy="4" font-size="10">1</tspan></text>
<text x="80" y="28" text-anchor="middle" font-size="16">A<tspan dy="4" font-size="10">0</tspan></text>
<text x="120" y="28" text-anchor="middle" font-size="16">B<tspan dy="4" font-size="10">1</tspan></text>
<text x="160" y="28" text-anchor="middle" font-size="16">B<tspan dy="4" font-size="10">0</tspan></text>
</g>
</svg>
</div>

$\mathbf{Sol}^{n}$

- ตั้งชื่อสายภายในที่เป็นเอาต์พุตของเกต : `E1`, `E0` แล้วประกาศ `wire`
- เขียนเกตทีละตัว พอร์ตแรกเป็นเอาต์พุต เกตทุกตัวทำงานพร้อมกัน สลับลำดับบรรทัดแล้ววงจรเหมือนเดิม

- ตรวจด้วยตารางความจริง ผลของโมดูลตรงกับวงจรในรูปทุกแถว

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

แต่ละ `assign` คือสมการของเอาต์พุตหนึ่งตัว เขียนเป็นสมการได้ดังนี้

- `assign Y = ~(A1 ^ B1) & ~(A0 ^ B0)` : $Y = \overline{\mathit{A1} \oplus \mathit{B1}}\,\overline{\mathit{A0} \oplus \mathit{B0}}$

รวมเป็นสมการของเอาต์พุต แล้วเขียนวงจรและตารางความจริง (ตรวจทุกแถวด้วยโปรแกรม)

$\mathbf{Ans}\quad \begin{aligned}Y &= \overline{\mathit{A1} \oplus \mathit{B1}}\,\overline{\mathit{A0} \oplus \mathit{B0}}\end{aligned}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="766" height="506" viewBox="0 0 766 506" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<path d="M244,74 C266,74 292,90.5 304,107 C292,123.5 266,140 244,140 Q258,107 244,74 Z"/>
<path d="M236,74 Q250,107 236,140"/>
<line x1="40" y1="96" x2="242.2" y2="96"/>
<line x1="120" y1="118" x2="242.2" y2="118"/>
<path d="M244,174 C266,174 292,190.5 304,207 C292,223.5 266,240 244,240 Q258,207 244,174 Z"/>
<path d="M236,174 Q250,207 236,240"/>
<line x1="80" y1="196" x2="242.2" y2="196"/>
<line x1="160" y1="218" x2="242.2" y2="218"/>
<line x1="304" y1="107" x2="330" y2="107"/>
<line x1="304" y1="207" x2="350" y2="207"/>
<polygon points="404,276 404,300 426,288"/>
<circle cx="431" cy="288" r="5"/>
<line x1="330" y1="288" x2="404" y2="288"/>
<polygon points="404,338 404,362 426,350"/>
<circle cx="431" cy="350" r="5"/>
<line x1="350" y1="350" x2="404" y2="350"/>
<line x1="436" y1="288" x2="462" y2="288"/>
<line x1="436" y1="350" x2="482" y2="350"/>
<path d="M536,398 H562 A26,33 0 0 1 562,464 H536 Z"/>
<line x1="462" y1="420" x2="536" y2="420"/>
<line x1="482" y1="442" x2="536" y2="442"/>
<line x1="588" y1="431" x2="614" y2="431"/>
<line x1="614" y1="431" x2="670" y2="431"/>
<line x1="40" y1="36" x2="40" y2="96"/>
<line x1="80" y1="36" x2="80" y2="196"/>
<line x1="120" y1="36" x2="120" y2="118"/>
<line x1="160" y1="36" x2="160" y2="218"/>
<line x1="330" y1="107" x2="330" y2="288"/>
<line x1="350" y1="207" x2="350" y2="350"/>
<line x1="462" y1="288" x2="462" y2="420"/>
<line x1="482" y1="350" x2="482" y2="442"/>
<circle cx="40" cy="96" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="120" cy="118" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="80" cy="196" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="160" cy="218" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="330" cy="288" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="350" cy="350" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="462" cy="420" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="482" cy="442" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="330" cy="107" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="350" cy="207" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="462" cy="288" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="482" cy="350" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="678" y="437" text-anchor="start">Y</text>
<text x="40" y="28" text-anchor="middle" font-size="16">A<tspan dy="4" font-size="10">1</tspan></text>
<text x="80" y="28" text-anchor="middle" font-size="16">A<tspan dy="4" font-size="10">0</tspan></text>
<text x="120" y="28" text-anchor="middle" font-size="16">B<tspan dy="4" font-size="10">1</tspan></text>
<text x="160" y="28" text-anchor="middle" font-size="16">B<tspan dy="4" font-size="10">0</tspan></text>
</g>
</svg>
</div>

| $\mathit{A1}$ | $\mathit{A0}$ | $\mathit{B1}$ | $\mathit{B0}$ | $Y$ |
|:-:|:-:|:-:|:-:|:-:|
| 0 | 0 | 0 | 0 | 1 |
| 0 | 0 | 0 | 1 | 0 |
| 0 | 0 | 1 | 0 | 0 |
| 0 | 0 | 1 | 1 | 0 |
| 0 | 1 | 0 | 0 | 0 |
| 0 | 1 | 0 | 1 | 1 |
| 0 | 1 | 1 | 0 | 0 |
| 0 | 1 | 1 | 1 | 0 |
| 1 | 0 | 0 | 0 | 0 |
| 1 | 0 | 0 | 1 | 0 |
| 1 | 0 | 1 | 0 | 1 |
| 1 | 0 | 1 | 1 | 0 |
| 1 | 1 | 0 | 0 | 0 |
| 1 | 1 | 0 | 1 | 0 |
| 1 | 1 | 1 | 0 | 0 |
| 1 | 1 | 1 | 1 | 1 |

### ข้อ 4  จงเขียนโมดูล Verilog แบบ Dataflow ของวงจรในรูป ($Y = \overline{\mathit{A1} \oplus \mathit{B1}}\,\overline{\mathit{A0} \oplus \mathit{B0}}$) {part=b; case=c15; style=flow}

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="657" height="382" viewBox="0 0 657 382" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<path d="M244,74 C266,74 292,90.5 304,107 C292,123.5 266,140 244,140 Q258,107 244,74 Z"/>
<path d="M236,74 Q250,107 236,140"/>
<circle cx="309" cy="107" r="5"/>
<line x1="40" y1="96" x2="242.2" y2="96"/>
<line x1="120" y1="118" x2="242.2" y2="118"/>
<path d="M244,174 C266,174 292,190.5 304,207 C292,223.5 266,240 244,240 Q258,207 244,174 Z"/>
<path d="M236,174 Q250,207 236,240"/>
<circle cx="309" cy="207" r="5"/>
<line x1="80" y1="196" x2="242.2" y2="196"/>
<line x1="160" y1="218" x2="242.2" y2="218"/>
<line x1="314" y1="107" x2="353.9" y2="107"/>
<line x1="314" y1="207" x2="373.9" y2="207"/>
<path d="M427.9,274 H453.9 A26,33 0 0 1 453.9,340 H427.9 Z"/>
<line x1="353.9" y1="296" x2="427.9" y2="296"/>
<line x1="373.9" y1="318" x2="427.9" y2="318"/>
<line x1="479.9" y1="307" x2="505.9" y2="307"/>
<line x1="505.9" y1="307" x2="561.9" y2="307"/>
<line x1="40" y1="36" x2="40" y2="96"/>
<line x1="80" y1="36" x2="80" y2="196"/>
<line x1="120" y1="36" x2="120" y2="118"/>
<line x1="160" y1="36" x2="160" y2="218"/>
<line x1="353.9" y1="107" x2="353.9" y2="296"/>
<line x1="373.9" y1="207" x2="373.9" y2="318"/>
<circle cx="40" cy="96" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="120" cy="118" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="80" cy="196" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="160" cy="218" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="353.9" cy="296" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="373.9" cy="318" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="353.9" cy="107" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="373.9" cy="207" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="322" y="100" text-anchor="start" font-size="13">E<tspan dy="4" font-size="9">1</tspan></text>
<text x="322" y="200" text-anchor="start" font-size="13">E<tspan dy="4" font-size="9">0</tspan></text>
<text x="569.9" y="313" text-anchor="start">Y</text>
<text x="40" y="28" text-anchor="middle" font-size="16">A<tspan dy="4" font-size="10">1</tspan></text>
<text x="80" y="28" text-anchor="middle" font-size="16">A<tspan dy="4" font-size="10">0</tspan></text>
<text x="120" y="28" text-anchor="middle" font-size="16">B<tspan dy="4" font-size="10">1</tspan></text>
<text x="160" y="28" text-anchor="middle" font-size="16">B<tspan dy="4" font-size="10">0</tspan></text>
</g>
</svg>
</div>

$\mathbf{Sol}^{n}$

- อ่านวงจรเป็นสมการของแต่ละเอาต์พุต
- เขียน `assign` ให้เอาต์พุตแต่ละตัว ด้วยตัวกระทำ `~` `&` `|` `^` (เกต NOT คือ `~`, AND คือ `&`, OR คือ `|`, XOR คือ `^`)

- ตรวจด้วยตารางความจริง ผลของโมดูลตรงกับวงจรในรูปทุกแถว

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

แต่ละบรรทัดของเกตคือเกต 1 ตัว พอร์ตแรกคือเอาต์พุต เขียนเป็นสมการได้ดังนี้

- `nand (P, A, B)` : $P = \overline{A\,B}$
- `or (Y, P, C)` : $Y = P + C$

รวมเป็นสมการของเอาต์พุต แล้วเขียนวงจรและตารางความจริง (ตรวจทุกแถวด้วยโปรแกรม)

$\mathbf{Ans}\quad \begin{aligned}Y &= \overline{A\,B} + C\end{aligned}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="557" height="282" viewBox="0 0 557 282" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<path d="M169,74 H195 A26,33 0 0 1 195,140 H169 Z"/>
<circle cx="226" cy="107" r="5"/>
<line x1="40" y1="96" x2="169" y2="96"/>
<line x1="71" y1="118" x2="169" y2="118"/>
<line x1="231" y1="107" x2="265.1" y2="107"/>
<path d="M319.1,174 C341.1,174 367.1,190.5 379.1,207 C367.1,223.5 341.1,240 319.1,240 Q333.1,207 319.1,174 Z"/>
<line x1="265.1" y1="196" x2="325.3" y2="196"/>
<line x1="102" y1="218" x2="325.3" y2="218"/>
<line x1="379.1" y1="207" x2="405.1" y2="207"/>
<line x1="405.1" y1="207" x2="461.1" y2="207"/>
<line x1="40" y1="36" x2="40" y2="96"/>
<line x1="71" y1="36" x2="71" y2="118"/>
<line x1="102" y1="36" x2="102" y2="218"/>
<line x1="265.1" y1="107" x2="265.1" y2="196"/>
<circle cx="40" cy="96" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="118" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="265.1" cy="196" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="102" cy="218" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="265.1" cy="107" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="239" y="100" text-anchor="start" font-size="13">P</text>
<text x="469.1" y="213" text-anchor="start">Y</text>
<text x="40" y="28" text-anchor="middle" font-size="16">A</text>
<text x="71" y="28" text-anchor="middle" font-size="16">B</text>
<text x="102" y="28" text-anchor="middle" font-size="16">C</text>
</g>
</svg>
</div>

| $A$ | $B$ | $C$ | $Y$ |
|:-:|:-:|:-:|:-:|
| 0 | 0 | 0 | 1 |
| 0 | 0 | 1 | 1 |
| 0 | 1 | 0 | 1 |
| 0 | 1 | 1 | 1 |
| 1 | 0 | 0 | 1 |
| 1 | 0 | 1 | 1 |
| 1 | 1 | 0 | 0 |
| 1 | 1 | 1 | 1 |

### ข้อ 4  จงเขียนโมดูล Verilog แบบ Structural ของวงจรในรูป ($Y = \overline{A\,B} + C$) {part=b; case=c16; style=struct}

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="557" height="282" viewBox="0 0 557 282" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<path d="M169,74 H195 A26,33 0 0 1 195,140 H169 Z"/>
<circle cx="226" cy="107" r="5"/>
<line x1="40" y1="96" x2="169" y2="96"/>
<line x1="71" y1="118" x2="169" y2="118"/>
<line x1="231" y1="107" x2="265.1" y2="107"/>
<path d="M319.1,174 C341.1,174 367.1,190.5 379.1,207 C367.1,223.5 341.1,240 319.1,240 Q333.1,207 319.1,174 Z"/>
<line x1="265.1" y1="196" x2="325.3" y2="196"/>
<line x1="102" y1="218" x2="325.3" y2="218"/>
<line x1="379.1" y1="207" x2="405.1" y2="207"/>
<line x1="405.1" y1="207" x2="461.1" y2="207"/>
<line x1="40" y1="36" x2="40" y2="96"/>
<line x1="71" y1="36" x2="71" y2="118"/>
<line x1="102" y1="36" x2="102" y2="218"/>
<line x1="265.1" y1="107" x2="265.1" y2="196"/>
<circle cx="40" cy="96" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="118" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="265.1" cy="196" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="102" cy="218" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="265.1" cy="107" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="239" y="100" text-anchor="start" font-size="13">P</text>
<text x="469.1" y="213" text-anchor="start">Y</text>
<text x="40" y="28" text-anchor="middle" font-size="16">A</text>
<text x="71" y="28" text-anchor="middle" font-size="16">B</text>
<text x="102" y="28" text-anchor="middle" font-size="16">C</text>
</g>
</svg>
</div>

$\mathbf{Sol}^{n}$

- ตั้งชื่อสายภายในที่เป็นเอาต์พุตของเกต : `P` แล้วประกาศ `wire`
- เขียนเกตทีละตัว พอร์ตแรกเป็นเอาต์พุต เกตทุกตัวทำงานพร้อมกัน สลับลำดับบรรทัดแล้ววงจรเหมือนเดิม

- ตรวจด้วยตารางความจริง ผลของโมดูลตรงกับวงจรในรูปทุกแถว

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

แต่ละ `assign` คือสมการของเอาต์พุตหนึ่งตัว เขียนเป็นสมการได้ดังนี้

- `assign Y = ~(A & B) | C` : $Y = \overline{A\,B} + C$

รวมเป็นสมการของเอาต์พุต แล้วเขียนวงจรและตารางความจริง (ตรวจทุกแถวด้วยโปรแกรม)

$\mathbf{Ans}\quad \begin{aligned}Y &= \overline{A\,B} + C\end{aligned}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="651" height="344" viewBox="0 0 651 344" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<path d="M169,74 H195 A26,33 0 0 1 195,140 H169 Z"/>
<line x1="40" y1="96" x2="169" y2="96"/>
<line x1="71" y1="118" x2="169" y2="118"/>
<line x1="221" y1="107" x2="247" y2="107"/>
<polygon points="301,176 301,200 323,188"/>
<circle cx="328" cy="188" r="5"/>
<line x1="247" y1="188" x2="301" y2="188"/>
<line x1="333" y1="188" x2="359" y2="188"/>
<path d="M413,236 C435,236 461,252.5 473,269 C461,285.5 435,302 413,302 Q427,269 413,236 Z"/>
<line x1="359" y1="258" x2="419.2" y2="258"/>
<line x1="102" y1="280" x2="419.2" y2="280"/>
<line x1="473" y1="269" x2="499" y2="269"/>
<line x1="499" y1="269" x2="555" y2="269"/>
<line x1="40" y1="36" x2="40" y2="96"/>
<line x1="71" y1="36" x2="71" y2="118"/>
<line x1="102" y1="36" x2="102" y2="280"/>
<line x1="247" y1="107" x2="247" y2="188"/>
<line x1="359" y1="188" x2="359" y2="258"/>
<circle cx="40" cy="96" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="118" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="247" cy="188" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="359" cy="258" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="102" cy="280" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="247" cy="107" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="359" cy="188" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="563" y="275" text-anchor="start">Y</text>
<text x="40" y="28" text-anchor="middle" font-size="16">A</text>
<text x="71" y="28" text-anchor="middle" font-size="16">B</text>
<text x="102" y="28" text-anchor="middle" font-size="16">C</text>
</g>
</svg>
</div>

| $A$ | $B$ | $C$ | $Y$ |
|:-:|:-:|:-:|:-:|
| 0 | 0 | 0 | 1 |
| 0 | 0 | 1 | 1 |
| 0 | 1 | 0 | 1 |
| 0 | 1 | 1 | 1 |
| 1 | 0 | 0 | 1 |
| 1 | 0 | 1 | 1 |
| 1 | 1 | 0 | 0 |
| 1 | 1 | 1 | 1 |

### ข้อ 4  จงเขียนโมดูล Verilog แบบ Dataflow ของวงจรในรูป ($Y = \overline{A\,B} + C$) {part=b; case=c16; style=flow}

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="557" height="282" viewBox="0 0 557 282" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<path d="M169,74 H195 A26,33 0 0 1 195,140 H169 Z"/>
<circle cx="226" cy="107" r="5"/>
<line x1="40" y1="96" x2="169" y2="96"/>
<line x1="71" y1="118" x2="169" y2="118"/>
<line x1="231" y1="107" x2="265.1" y2="107"/>
<path d="M319.1,174 C341.1,174 367.1,190.5 379.1,207 C367.1,223.5 341.1,240 319.1,240 Q333.1,207 319.1,174 Z"/>
<line x1="265.1" y1="196" x2="325.3" y2="196"/>
<line x1="102" y1="218" x2="325.3" y2="218"/>
<line x1="379.1" y1="207" x2="405.1" y2="207"/>
<line x1="405.1" y1="207" x2="461.1" y2="207"/>
<line x1="40" y1="36" x2="40" y2="96"/>
<line x1="71" y1="36" x2="71" y2="118"/>
<line x1="102" y1="36" x2="102" y2="218"/>
<line x1="265.1" y1="107" x2="265.1" y2="196"/>
<circle cx="40" cy="96" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="118" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="265.1" cy="196" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="102" cy="218" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="265.1" cy="107" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="239" y="100" text-anchor="start" font-size="13">P</text>
<text x="469.1" y="213" text-anchor="start">Y</text>
<text x="40" y="28" text-anchor="middle" font-size="16">A</text>
<text x="71" y="28" text-anchor="middle" font-size="16">B</text>
<text x="102" y="28" text-anchor="middle" font-size="16">C</text>
</g>
</svg>
</div>

$\mathbf{Sol}^{n}$

- อ่านวงจรเป็นสมการของแต่ละเอาต์พุต
- เขียน `assign` ให้เอาต์พุตแต่ละตัว ด้วยตัวกระทำ `~` `&` `|` `^` (เกต NOT คือ `~`, AND คือ `&`, OR คือ `|`, XOR คือ `^`)

- ตรวจด้วยตารางความจริง ผลของโมดูลตรงกับวงจรในรูปทุกแถว

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

แต่ละบรรทัดของเกตคือเกต 1 ตัว พอร์ตแรกคือเอาต์พุต เขียนเป็นสมการได้ดังนี้

- `and (P, A, B)` : $P = A\,B$
- `and (Q, C, D)` : $Q = C\,D$
- `nor (Y, P, Q)` : $Y = \overline{P + Q}$

รวมเป็นสมการของเอาต์พุต แล้วเขียนวงจรและตารางความจริง (ตรวจทุกแถวด้วยโปรแกรม)

$\mathbf{Ans}\quad \begin{aligned}Y &= \overline{A\,B + C\,D}\end{aligned}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="608" height="382" viewBox="0 0 608 382" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<path d="M200,74 H226 A26,33 0 0 1 226,140 H200 Z"/>
<line x1="40" y1="96" x2="200" y2="96"/>
<line x1="71" y1="118" x2="200" y2="118"/>
<path d="M200,174 H226 A26,33 0 0 1 226,240 H200 Z"/>
<line x1="102" y1="196" x2="200" y2="196"/>
<line x1="133" y1="218" x2="200" y2="218"/>
<line x1="252" y1="107" x2="286.1" y2="107"/>
<line x1="252" y1="207" x2="306.1" y2="207"/>
<path d="M360.1,274 C382.1,274 408.1,290.5 420.1,307 C408.1,323.5 382.1,340 360.1,340 Q374.1,307 360.1,274 Z"/>
<circle cx="425.1" cy="307" r="5"/>
<line x1="286.1" y1="296" x2="366.3" y2="296"/>
<line x1="306.1" y1="318" x2="366.3" y2="318"/>
<line x1="430.1" y1="307" x2="456.1" y2="307"/>
<line x1="456.1" y1="307" x2="512.1" y2="307"/>
<line x1="40" y1="36" x2="40" y2="96"/>
<line x1="71" y1="36" x2="71" y2="118"/>
<line x1="102" y1="36" x2="102" y2="196"/>
<line x1="133" y1="36" x2="133" y2="218"/>
<line x1="286.1" y1="107" x2="286.1" y2="296"/>
<line x1="306.1" y1="207" x2="306.1" y2="318"/>
<circle cx="40" cy="96" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="118" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="102" cy="196" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="133" cy="218" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="286.1" cy="296" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="306.1" cy="318" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="286.1" cy="107" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="306.1" cy="207" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="260" y="100" text-anchor="start" font-size="13">P</text>
<text x="260" y="200" text-anchor="start" font-size="13">Q</text>
<text x="520.1" y="313" text-anchor="start">Y</text>
<text x="40" y="28" text-anchor="middle" font-size="16">A</text>
<text x="71" y="28" text-anchor="middle" font-size="16">B</text>
<text x="102" y="28" text-anchor="middle" font-size="16">C</text>
<text x="133" y="28" text-anchor="middle" font-size="16">D</text>
</g>
</svg>
</div>

| $A$ | $B$ | $C$ | $D$ | $Y$ |
|:-:|:-:|:-:|:-:|:-:|
| 0 | 0 | 0 | 0 | 1 |
| 0 | 0 | 0 | 1 | 1 |
| 0 | 0 | 1 | 0 | 1 |
| 0 | 0 | 1 | 1 | 0 |
| 0 | 1 | 0 | 0 | 1 |
| 0 | 1 | 0 | 1 | 1 |
| 0 | 1 | 1 | 0 | 1 |
| 0 | 1 | 1 | 1 | 0 |
| 1 | 0 | 0 | 0 | 1 |
| 1 | 0 | 0 | 1 | 1 |
| 1 | 0 | 1 | 0 | 1 |
| 1 | 0 | 1 | 1 | 0 |
| 1 | 1 | 0 | 0 | 0 |
| 1 | 1 | 0 | 1 | 0 |
| 1 | 1 | 1 | 0 | 0 |
| 1 | 1 | 1 | 1 | 0 |

### ข้อ 4  จงเขียนโมดูล Verilog แบบ Structural ของวงจรในรูป ($Y = \overline{A\,B + C\,D}$) {part=b; case=c17; style=struct}

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="608" height="382" viewBox="0 0 608 382" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<path d="M200,74 H226 A26,33 0 0 1 226,140 H200 Z"/>
<line x1="40" y1="96" x2="200" y2="96"/>
<line x1="71" y1="118" x2="200" y2="118"/>
<path d="M200,174 H226 A26,33 0 0 1 226,240 H200 Z"/>
<line x1="102" y1="196" x2="200" y2="196"/>
<line x1="133" y1="218" x2="200" y2="218"/>
<line x1="252" y1="107" x2="286.1" y2="107"/>
<line x1="252" y1="207" x2="306.1" y2="207"/>
<path d="M360.1,274 C382.1,274 408.1,290.5 420.1,307 C408.1,323.5 382.1,340 360.1,340 Q374.1,307 360.1,274 Z"/>
<circle cx="425.1" cy="307" r="5"/>
<line x1="286.1" y1="296" x2="366.3" y2="296"/>
<line x1="306.1" y1="318" x2="366.3" y2="318"/>
<line x1="430.1" y1="307" x2="456.1" y2="307"/>
<line x1="456.1" y1="307" x2="512.1" y2="307"/>
<line x1="40" y1="36" x2="40" y2="96"/>
<line x1="71" y1="36" x2="71" y2="118"/>
<line x1="102" y1="36" x2="102" y2="196"/>
<line x1="133" y1="36" x2="133" y2="218"/>
<line x1="286.1" y1="107" x2="286.1" y2="296"/>
<line x1="306.1" y1="207" x2="306.1" y2="318"/>
<circle cx="40" cy="96" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="118" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="102" cy="196" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="133" cy="218" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="286.1" cy="296" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="306.1" cy="318" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="286.1" cy="107" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="306.1" cy="207" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="260" y="100" text-anchor="start" font-size="13">P</text>
<text x="260" y="200" text-anchor="start" font-size="13">Q</text>
<text x="520.1" y="313" text-anchor="start">Y</text>
<text x="40" y="28" text-anchor="middle" font-size="16">A</text>
<text x="71" y="28" text-anchor="middle" font-size="16">B</text>
<text x="102" y="28" text-anchor="middle" font-size="16">C</text>
<text x="133" y="28" text-anchor="middle" font-size="16">D</text>
</g>
</svg>
</div>

$\mathbf{Sol}^{n}$

- ตั้งชื่อสายภายในที่เป็นเอาต์พุตของเกต : `P`, `Q` แล้วประกาศ `wire`
- เขียนเกตทีละตัว พอร์ตแรกเป็นเอาต์พุต เกตทุกตัวทำงานพร้อมกัน สลับลำดับบรรทัดแล้ววงจรเหมือนเดิม

- ตรวจด้วยตารางความจริง ผลของโมดูลตรงกับวงจรในรูปทุกแถว

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

แต่ละ `assign` คือสมการของเอาต์พุตหนึ่งตัว เขียนเป็นสมการได้ดังนี้

- `assign Y = ~((A & B) | (C & D))` : $Y = \overline{A\,B + C\,D}$

รวมเป็นสมการของเอาต์พุต แล้วเขียนวงจรและตารางความจริง (ตรวจทุกแถวด้วยโปรแกรม)

$\mathbf{Ans}\quad \begin{aligned}Y &= \overline{A\,B + C\,D}\end{aligned}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="702" height="444" viewBox="0 0 702 444" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<path d="M200,74 H226 A26,33 0 0 1 226,140 H200 Z"/>
<line x1="40" y1="96" x2="200" y2="96"/>
<line x1="71" y1="118" x2="200" y2="118"/>
<path d="M200,174 H226 A26,33 0 0 1 226,240 H200 Z"/>
<line x1="102" y1="196" x2="200" y2="196"/>
<line x1="133" y1="218" x2="200" y2="218"/>
<line x1="252" y1="107" x2="278" y2="107"/>
<line x1="252" y1="207" x2="298" y2="207"/>
<path d="M352,274 C374,274 400,290.5 412,307 C400,323.5 374,340 352,340 Q366,307 352,274 Z"/>
<line x1="278" y1="296" x2="358.2" y2="296"/>
<line x1="298" y1="318" x2="358.2" y2="318"/>
<line x1="412" y1="307" x2="438" y2="307"/>
<polygon points="492,376 492,400 514,388"/>
<circle cx="519" cy="388" r="5"/>
<line x1="438" y1="388" x2="492" y2="388"/>
<line x1="524" y1="388" x2="550" y2="388"/>
<line x1="550" y1="388" x2="606" y2="388"/>
<line x1="40" y1="36" x2="40" y2="96"/>
<line x1="71" y1="36" x2="71" y2="118"/>
<line x1="102" y1="36" x2="102" y2="196"/>
<line x1="133" y1="36" x2="133" y2="218"/>
<line x1="278" y1="107" x2="278" y2="296"/>
<line x1="298" y1="207" x2="298" y2="318"/>
<line x1="438" y1="307" x2="438" y2="388"/>
<circle cx="40" cy="96" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="118" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="102" cy="196" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="133" cy="218" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="278" cy="296" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="298" cy="318" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="438" cy="388" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="278" cy="107" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="298" cy="207" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="438" cy="307" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="614" y="394" text-anchor="start">Y</text>
<text x="40" y="28" text-anchor="middle" font-size="16">A</text>
<text x="71" y="28" text-anchor="middle" font-size="16">B</text>
<text x="102" y="28" text-anchor="middle" font-size="16">C</text>
<text x="133" y="28" text-anchor="middle" font-size="16">D</text>
</g>
</svg>
</div>

| $A$ | $B$ | $C$ | $D$ | $Y$ |
|:-:|:-:|:-:|:-:|:-:|
| 0 | 0 | 0 | 0 | 1 |
| 0 | 0 | 0 | 1 | 1 |
| 0 | 0 | 1 | 0 | 1 |
| 0 | 0 | 1 | 1 | 0 |
| 0 | 1 | 0 | 0 | 1 |
| 0 | 1 | 0 | 1 | 1 |
| 0 | 1 | 1 | 0 | 1 |
| 0 | 1 | 1 | 1 | 0 |
| 1 | 0 | 0 | 0 | 1 |
| 1 | 0 | 0 | 1 | 1 |
| 1 | 0 | 1 | 0 | 1 |
| 1 | 0 | 1 | 1 | 0 |
| 1 | 1 | 0 | 0 | 0 |
| 1 | 1 | 0 | 1 | 0 |
| 1 | 1 | 1 | 0 | 0 |
| 1 | 1 | 1 | 1 | 0 |

### ข้อ 4  จงเขียนโมดูล Verilog แบบ Dataflow ของวงจรในรูป ($Y = \overline{A\,B + C\,D}$) {part=b; case=c17; style=flow}

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="608" height="382" viewBox="0 0 608 382" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<path d="M200,74 H226 A26,33 0 0 1 226,140 H200 Z"/>
<line x1="40" y1="96" x2="200" y2="96"/>
<line x1="71" y1="118" x2="200" y2="118"/>
<path d="M200,174 H226 A26,33 0 0 1 226,240 H200 Z"/>
<line x1="102" y1="196" x2="200" y2="196"/>
<line x1="133" y1="218" x2="200" y2="218"/>
<line x1="252" y1="107" x2="286.1" y2="107"/>
<line x1="252" y1="207" x2="306.1" y2="207"/>
<path d="M360.1,274 C382.1,274 408.1,290.5 420.1,307 C408.1,323.5 382.1,340 360.1,340 Q374.1,307 360.1,274 Z"/>
<circle cx="425.1" cy="307" r="5"/>
<line x1="286.1" y1="296" x2="366.3" y2="296"/>
<line x1="306.1" y1="318" x2="366.3" y2="318"/>
<line x1="430.1" y1="307" x2="456.1" y2="307"/>
<line x1="456.1" y1="307" x2="512.1" y2="307"/>
<line x1="40" y1="36" x2="40" y2="96"/>
<line x1="71" y1="36" x2="71" y2="118"/>
<line x1="102" y1="36" x2="102" y2="196"/>
<line x1="133" y1="36" x2="133" y2="218"/>
<line x1="286.1" y1="107" x2="286.1" y2="296"/>
<line x1="306.1" y1="207" x2="306.1" y2="318"/>
<circle cx="40" cy="96" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="118" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="102" cy="196" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="133" cy="218" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="286.1" cy="296" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="306.1" cy="318" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="286.1" cy="107" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="306.1" cy="207" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="260" y="100" text-anchor="start" font-size="13">P</text>
<text x="260" y="200" text-anchor="start" font-size="13">Q</text>
<text x="520.1" y="313" text-anchor="start">Y</text>
<text x="40" y="28" text-anchor="middle" font-size="16">A</text>
<text x="71" y="28" text-anchor="middle" font-size="16">B</text>
<text x="102" y="28" text-anchor="middle" font-size="16">C</text>
<text x="133" y="28" text-anchor="middle" font-size="16">D</text>
</g>
</svg>
</div>

$\mathbf{Sol}^{n}$

- อ่านวงจรเป็นสมการของแต่ละเอาต์พุต
- เขียน `assign` ให้เอาต์พุตแต่ละตัว ด้วยตัวกระทำ `~` `&` `|` `^` (เกต NOT คือ `~`, AND คือ `&`, OR คือ `|`, XOR คือ `^`)

- ตรวจด้วยตารางความจริง ผลของโมดูลตรงกับวงจรในรูปทุกแถว

$\mathbf{Ans}\quad \text{โค้ดต่อไปนี้}$

```verilog
module Aoi22 (Y, A, B, C, D);
output Y;
input A, B, C, D;
assign Y = ~((A & B) | (C & D));
endmodule
```
