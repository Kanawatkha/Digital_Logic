# วงจรลอจิกขนาดใหญ่

โจทย์ในหมวดนี้ให้วงจรลอจิกขนาดใหญ่เป็นรูป ให้อ่านวงจรเพื่อถอดสมการ ลดรูป แล้วออกแบบวงจรใหม่ที่เล็กลงต่อบนบอร์ด เกตในรูปโจทย์อาจมีอินพุตถึง 3 เส้น แต่เกตบนบอร์ดมีอินพุตได้แค่ 2 เส้น ต้องต่อเกต 2 อินพุตสองตัวแทนเกต 3 อินพุตหนึ่งตัว กดดูเฉลยเพื่อดูวิธีทำ คำตอบ และวงจร แล้ววางเฉลยลงบอร์ดได้

## ข้อ 1 วงจร AND สามอินพุตสามตัวรวมกัน

จงถอดสมการของวงจรในรูป ลดรูป แล้วออกแบบวงจรลอจิกบนบอร์ดโดยใช้เกตให้น้อยที่สุด

```lab
outputs: Y
Y = figure
figure:
  g1 = NOT A
  g2 = NOT B
  g3 = AND g1 g2 C
  g4 = AND A g2 C
  g5 = AND A B C
  g6 = OR g3 g4 g5
  Y = g6
```

$\mathbf{Sol}^{n}$

@method algebra

ถอดสมการจากรูป

$$
\begin{aligned}
Y &= \overline{A}\,\overline{B}C + A\overline{B}C + ABC \\
 &= (\overline{A} + A)\overline{B}C + ABC && \text{$X(Y+Z)=XY+XZ$} \\
 &= \overline{B}C + ABC && \text{$X+\overline{X}=1,\ X\cdot 1=X$} \\
 &= C(\overline{B} + AB) && \text{$X(Y+Z)=XY+XZ$} \\
 &= C(\overline{B} + A) && \text{$X+\overline{X}Y=X+Y$}
\end{aligned}
$$

@method kmap

ถอดสมการจากรูป

$$Y = \overline{A}\,\overline{B}C + A\overline{B}C + ABC$$

$$
\begin{aligned}
\overline{A}\,\overline{B}C &= m_1 \\
A\overline{B}C &= m_5 \\
ABC &= m_7 \\
Y &= m_1 + m_5 + m_7 \\
 &= \sum m(1,5,7)
\end{aligned}
$$

ใส่ $1$ ที่ช่อง $1,5,7$ แล้วจับลูปของ $1$

@kmap:Y 1,5 | 5,7
- ลูปสีส้ม (ช่อง $1,5$) : $B=0,\ C=1$ $\Rightarrow \overline{B}C$
- ลูปสีน้ำเงิน (ช่อง $5,7$) : $A=1,\ C=1$ $\Rightarrow AC$

$$
\begin{aligned}
Y &= AC + \overline{B}C \\
 &= (A + \overline{B})C && \text{$X(Y+Z)=XY+XZ,\ XY=YX$}
\end{aligned}
$$

$\mathbf{Ans}\quad Y = (A + \overline{B})C$

## ข้อ 2 วงจรผสม NAND NOR และ OR

จงถอดสมการของวงจรในรูป ลดรูป แล้วออกแบบวงจรลอจิกบนบอร์ดโดยใช้เกตให้น้อยที่สุด

```lab
outputs: Y
Y = figure
figure:
  g1 = NAND A B
  g2 = NAND g1 C
  g3 = NOT A
  g4 = NOR g3 B
  g5 = OR g2 g4
  Y = g5
```

$\mathbf{Sol}^{n}$

@method algebra

ถอดสมการจากรูป

$$
\begin{aligned}
Y &= \overline{\overline{AB}C} + \overline{\overline{A} + B} \\
 &= \overline{\overline{AB}} + \overline{C} + \overline{\overline{A} + B} && \text{$\overline{XY}=\overline{X}+\overline{Y}$} \\
 &= AB + \overline{C} + A\overline{B} && \text{$\overline{\overline{X}}=X,\ \overline{X+Y}=\overline{X}\,\overline{Y}$} \\
 &= A(B + \overline{B}) + \overline{C} && \text{$X(Y+Z)=XY+XZ$} \\
 &= A\cdot 1 + \overline{C} && \text{$X+\overline{X}=1$} \\
 &= A + \overline{C} && \text{$X\cdot 1=X$}
\end{aligned}
$$

@method kmap

ถอดสมการจากรูป

$$
\begin{aligned}
Y &= \overline{\overline{AB}C} + \overline{\overline{A} + B} \\
 &= \overline{\overline{AB}} + \overline{C} + \overline{\overline{A} + B} && \text{$\overline{XY}=\overline{X}+\overline{Y}$} \\
 &= AB + \overline{C} + A\overline{B} && \text{$\overline{\overline{X}}=X,\ \overline{X+Y}=\overline{X}\,\overline{Y}$}
\end{aligned}
$$

$$
\begin{aligned}
AB &= AB\overline{C} + ABC = m_6 + m_7 \\
\overline{C} &= \overline{A}\,\overline{B}\,\overline{C} + \overline{A}B\overline{C} + A\overline{B}\,\overline{C} + AB\overline{C} = m_0 + m_2 + m_4 + m_6 \\
A\overline{B} &= A\overline{B}\,\overline{C} + A\overline{B}C = m_4 + m_5 \\
Y &= m_6 + m_7 + m_0 + m_2 + m_4 + m_6 + m_4 + m_5 \\
 &= m_0 + m_2 + m_4 + m_5 + m_6 + m_7 && \text{$X+X=X,\ X+Y=Y+X$} \\
 &= \sum m(0,2,4,5,6,7)
\end{aligned}
$$

ใส่ $1$ ที่ช่อง $0,2,4,5,6,7$ แล้วจับลูปของ $1$

@kmap:Y 0,2,4,6 | 4,5,6,7
- ลูปสีส้ม (ช่อง $0,2,4,6$) : $C=0$ $\Rightarrow \overline{C}$
- ลูปสีน้ำเงิน (ช่อง $4,5,6,7$) : $A=1$ $\Rightarrow A$

$\mathbf{Ans}\quad Y = A + \overline{C}$

## ข้อ 3 วงจรสองเอาต์พุตที่มีเทอมซ้ำซ้อน

จงถอดสมการของ X และ Y จากวงจรในรูป ลดรูป แล้วออกแบบวงจรลอจิกบนบอร์ดที่ให้ทั้งสองเอาต์พุตโดยใช้เกตรวมกันให้น้อยที่สุด (เกตที่ใช้ร่วมกันนับครั้งเดียว)

```lab
outputs: X, Y
X = figure
Y = figure
figure:
  g1 = NOT A
  g2 = AND g1 B
  g3 = AND g1 B C
  g4 = OR g2 g3
  g5 = AND A B C
  g6 = OR g4 g5
  X = g4
  Y = g6
```

$\mathbf{Sol}^{n}$

@method algebra

ถอดสมการจากรูป

$$
\begin{aligned}
X &= \overline{A}B + \overline{A}BC \\
 &= \overline{A}B(1 + C) && \text{$X(Y+Z)=XY+XZ$} \\
 &= \overline{A}B\cdot 1 && \text{$1+X=1$} \\
 &= \overline{A}B && \text{$X\cdot 1=X$}
\end{aligned}
$$

$$
\begin{aligned}
Y &= \overline{A}B + \overline{A}BC + ABC \\
 &= \overline{A}B + ABC && \text{$X+XY=X$} \\
 &= B(\overline{A} + AC) && \text{$X(Y+Z)=XY+XZ$} \\
 &= B(\overline{A} + C) && \text{$X+\overline{X}Y=X+Y$} \\
 &= \overline{A}B + BC && \text{$X(Y+Z)=XY+XZ$}
\end{aligned}
$$

@method kmap

ถอดสมการจากรูป

$$X = \overline{A}B + \overline{A}BC$$

$$Y = \overline{A}B + \overline{A}BC + ABC$$

$$
\begin{aligned}
\overline{A}B &= \overline{A}B\overline{C} + \overline{A}BC = m_2 + m_3 \\
\overline{A}BC &= m_3 \\
X &= m_2 + m_3 + m_3 \\
 &= m_2 + m_3 && \text{$X+X=X$} \\
 &= \sum m(2,3)
\end{aligned}
$$

$$
\begin{aligned}
\overline{A}B &= \overline{A}B\overline{C} + \overline{A}BC = m_2 + m_3 \\
\overline{A}BC &= m_3 \\
ABC &= m_7 \\
Y &= m_2 + m_3 + m_3 + m_7 \\
 &= m_2 + m_3 + m_7 && \text{$X+X=X$} \\
 &= \sum m(2,3,7)
\end{aligned}
$$

ใส่ $1$ ที่ช่อง $2,3$ ของ $X$ และช่อง $2,3,7$ ของ $Y$ แล้วจับลูปของ $1$

@kmap:X 2,3
@kmap:Y 2,3 | 3,7
- $X$ ลูปสีส้ม (ช่อง $2,3$) : $A=0,\ B=1$ $\Rightarrow \overline{A}B$
- $Y$ ลูปสีส้ม (ช่อง $2,3$) : $A=0,\ B=1$ $\Rightarrow \overline{A}B$
- $Y$ ลูปสีน้ำเงิน (ช่อง $3,7$) : $B=1,\ C=1$ $\Rightarrow BC$

$\mathbf{Ans}\quad X = \overline{A}B$

$\mathbf{Ans}\quad Y = \overline{A}B + BC$

## ข้อ 4 วงจรที่มีเทอมซ้ำซ้อน

จงถอดสมการของวงจรในรูป ลดรูป แล้วออกแบบวงจรลอจิกบนบอร์ดโดยใช้เกตให้น้อยที่สุด

```lab
outputs: F
F = figure
figure:
  g1 = NOT B
  g2 = NOT A
  g3 = AND A g1 C
  g4 = AND A B C
  g5 = AND g2 B C
  g6 = OR g3 g4 g5
  F = g6
```

$\mathbf{Sol}^{n}$

@method algebra

ถอดสมการจากรูป

$$
\begin{aligned}
F &= A\overline{B}C + ABC + \overline{A}BC \\
 &= AC(\overline{B} + B) + \overline{A}BC && \text{$X(Y+Z)=XY+XZ$} \\
 &= AC\cdot 1 + \overline{A}BC && \text{$X+\overline{X}=1$} \\
 &= AC + \overline{A}BC && \text{$X\cdot 1=X$} \\
 &= C(A + \overline{A}B) && \text{$X(Y+Z)=XY+XZ$} \\
 &= C(A + B) && \text{$X+\overline{X}Y=X+Y$}
\end{aligned}
$$

@method kmap

ถอดสมการจากรูป

$$F = A\overline{B}C + ABC + \overline{A}BC$$

$$
\begin{aligned}
A\overline{B}C &= m_5 \\
ABC &= m_7 \\
\overline{A}BC &= m_3 \\
F &= m_5 + m_7 + m_3 \\
 &= m_3 + m_5 + m_7 && \text{$X+Y=Y+X$} \\
 &= \sum m(3,5,7)
\end{aligned}
$$

ใส่ $1$ ที่ช่อง $3,5,7$ แล้วจับลูปของ $1$

@kmap:F 5,7 | 3,7
- ลูปสีส้ม (ช่อง $5,7$) : $A=1,\ C=1$ $\Rightarrow AC$
- ลูปสีน้ำเงิน (ช่อง $3,7$) : $B=1,\ C=1$ $\Rightarrow BC$

$$
\begin{aligned}
F &= AC + BC \\
 &= (A + B)C && \text{$X(Y+Z)=XY+XZ,\ XY=YX$}
\end{aligned}
$$

$\mathbf{Ans}\quad F = (A + B)C$

## ข้อ 5 ใช้ NAND อย่างเดียว (1)

จงถอดสมการของวงจรในรูป ลดรูป แล้วออกแบบวงจรลอจิกบนบอร์ดโดยใช้**เฉพาะเกต NAND** (7400) เท่านั้น ห้ามใช้ชิปชนิดอื่น ถ้าต้องการอินเวอร์เตอร์ให้ต่อสองอินพุตของ NAND เข้าด้วยกัน

```lab
outputs: Y
Y = figure
only: nand
figure:
  g1 = NOT A
  g2 = AND g1 B
  g3 = AND A C
  g4 = AND B C
  g5 = OR g2 g3 g4
  Y = g5
```

$\mathbf{Sol}^{n}$

@method algebra

ถอดสมการจากรูป

$$
\begin{aligned}
Y &= \overline{A}B + AC + BC \\
 &= \overline{A}B + AC + (A + \overline{A})BC && \text{$X+\overline{X}=1,\ X\cdot 1=X$} \\
 &= \overline{A}B + AC + ABC + \overline{A}BC && \text{$X(Y+Z)=XY+XZ$} \\
 &= \overline{A}B(1 + C) + AC(1 + B) && \text{$X(Y+Z)=XY+XZ$} \\
 &= \overline{A}B + AC && \text{$1+X=1,\ X\cdot 1=X$}
\end{aligned}
$$

@method kmap

ถอดสมการจากรูป

$$Y = \overline{A}B + AC + BC$$

$$
\begin{aligned}
\overline{A}B &= \overline{A}B\overline{C} + \overline{A}BC = m_2 + m_3 \\
AC &= A\overline{B}C + ABC = m_5 + m_7 \\
BC &= \overline{A}BC + ABC = m_3 + m_7 \\
Y &= m_2 + m_3 + m_5 + m_7 + m_3 + m_7 \\
 &= m_2 + m_3 + m_5 + m_7 && \text{$X+X=X$} \\
 &= \sum m(2,3,5,7)
\end{aligned}
$$

ใส่ $1$ ที่ช่อง $2,3,5,7$ แล้วจับลูปของ $1$ (ช่อง $3,7$ ถูกลูปอื่นคลุมครบแล้ว ไม่ต้องจับ)

@kmap:Y 2,3 | 5,7
- ลูปสีส้ม (ช่อง $2,3$) : $A=0,\ B=1$ $\Rightarrow \overline{A}B$
- ลูปสีน้ำเงิน (ช่อง $5,7$) : $A=1,\ C=1$ $\Rightarrow AC$

@method all

เขียนด้วย NAND

$$
\begin{aligned}
Y &= \overline{A}B + AC \\
 &= \overline{\overline{\overline{A}B + AC}} && \text{$\overline{\overline{X}}=X$} \\
 &= \overline{\overline{\overline{A}B}\cdot\overline{AC}} && \text{$\overline{X+Y}=\overline{X}\,\overline{Y}$}
\end{aligned}
$$

$\mathbf{Ans}\quad Y = \overline{\overline{\overline{A}B}\cdot\overline{AC}}$

## ข้อ 6 ใช้ NAND อย่างเดียว (2)

จงถอดสมการของวงจรในรูป ลดรูป แล้วออกแบบวงจรลอจิกบนบอร์ดโดยใช้**เฉพาะเกต NAND** (7400) เท่านั้น ห้ามใช้ชิปชนิดอื่น

```lab
outputs: Z
Z = figure
only: nand
figure:
  g1 = NOT A
  g2 = NOT B
  g3 = AND A B
  g4 = AND A g2 C
  g5 = AND g1 B C
  g6 = OR g3 g4 g5
  Z = g6
```

$\mathbf{Sol}^{n}$

@method algebra

ถอดสมการจากรูป

$$
\begin{aligned}
Z &= AB + A\overline{B}C + \overline{A}BC \\
 &= A(B + \overline{B}C) + \overline{A}BC && \text{$X(Y+Z)=XY+XZ$} \\
 &= A(B + C) + \overline{A}BC && \text{$X+\overline{X}Y=X+Y$} \\
 &= AB + AC + \overline{A}BC && \text{$X(Y+Z)=XY+XZ$} \\
 &= AB + C(A + \overline{A}B) && \text{$X(Y+Z)=XY+XZ$} \\
 &= AB + C(A + B) && \text{$X+\overline{X}Y=X+Y$} \\
 &= AB + AC + BC && \text{$X(Y+Z)=XY+XZ$}
\end{aligned}
$$

@method kmap

ถอดสมการจากรูป

$$Z = AB + A\overline{B}C + \overline{A}BC$$

$$
\begin{aligned}
AB &= AB\overline{C} + ABC = m_6 + m_7 \\
A\overline{B}C &= m_5 \\
\overline{A}BC &= m_3 \\
Z &= m_6 + m_7 + m_5 + m_3 \\
 &= m_3 + m_5 + m_6 + m_7 && \text{$X+Y=Y+X$} \\
 &= \sum m(3,5,6,7)
\end{aligned}
$$

ใส่ $1$ ที่ช่อง $3,5,6,7$ แล้วจับลูปของ $1$

@kmap:Z 6,7 | 5,7 | 3,7
- ลูปสีส้ม (ช่อง $6,7$) : $A=1,\ B=1$ $\Rightarrow AB$
- ลูปสีน้ำเงิน (ช่อง $5,7$) : $A=1,\ C=1$ $\Rightarrow AC$
- ลูปสีเขียว (ช่อง $3,7$) : $B=1,\ C=1$ $\Rightarrow BC$

@method all

เขียนด้วย NAND

$$
\begin{aligned}
Z &= AB + AC + BC \\
 &= \overline{\overline{AB + AC + BC}} && \text{$\overline{\overline{X}}=X$} \\
 &= \overline{\overline{AB}\cdot\overline{AC}\cdot\overline{BC}} && \text{$\overline{X+Y}=\overline{X}\,\overline{Y}$} \\
 &= \overline{(\overline{AB}\cdot\overline{AC})\cdot\overline{BC}} && \text{$XYZ=(XY)Z$} \\
 &= \overline{\overline{\overline{\overline{AB}\cdot\overline{AC}}}\cdot\overline{BC}} && \text{$X=\overline{\overline{X}}$}
\end{aligned}
$$

$\mathbf{Ans}\quad Z = \overline{\overline{\overline{\overline{AB}\cdot\overline{AC}}}\cdot\overline{BC}}$

## ข้อ 7 ใช้ NOR อย่างเดียว (1)

จงถอดสมการของวงจรในรูป ลดรูป แล้วออกแบบวงจรลอจิกบนบอร์ดโดยใช้**เฉพาะเกต NOR** (7402) เท่านั้น ห้ามใช้ชิปชนิดอื่น ถ้าต้องการอินเวอร์เตอร์ให้ต่อสองอินพุตของ NOR เข้าด้วยกัน

```lab
outputs: Y
Y = figure
only: nor
figure:
  g1 = NOT B
  g2 = NOT A
  g3 = OR A B C
  g4 = OR A g1 C
  g5 = OR g2 B C
  g6 = AND g3 g4 g5
  Y = g6
```

$\mathbf{Sol}^{n}$

@method algebra

ถอดสมการจากรูป

$$
\begin{aligned}
Y &= (A + B + C)(A + \overline{B} + C)(\overline{A} + B + C) \\
 &= (A + C + B)(A + C + \overline{B})(\overline{A} + B + C) && \text{$X+Y=Y+X$} \\
 &= (A + C + B\overline{B})(\overline{A} + B + C) && \text{$X+YZ=(X+Y)(X+Z)$} \\
 &= (A + C + 0)(\overline{A} + B + C) && \text{$X\overline{X}=0$} \\
 &= (A + C)(\overline{A} + B + C) && \text{$X+0=X$} \\
 &= (C + A)(C + \overline{A} + B) && \text{$X+Y=Y+X$} \\
 &= C + A(\overline{A} + B) && \text{$X+YZ=(X+Y)(X+Z)$} \\
 &= C + A\overline{A} + AB && \text{$X(Y+Z)=XY+XZ$} \\
 &= C + 0 + AB && \text{$X\overline{X}=0$} \\
 &= C + AB && \text{$X+0=X$} \\
 &= (A + C)(B + C) && \text{$X+YZ=(X+Y)(X+Z)$}
\end{aligned}
$$

@method kmap

ถอดสมการจากรูป

$$Y = (A + B + C)(A + \overline{B} + C)(\overline{A} + B + C)$$

$$
\begin{aligned}
(A + B + C) &= M_0 \\
(A + \overline{B} + C) &= M_2 \\
(\overline{A} + B + C) &= M_4 \\
Y &= M_0 M_2 M_4 \\
 &= \prod M(0,2,4)
\end{aligned}
$$

ใส่ $0$ ที่ช่อง $0,2,4$ นอกนั้นเป็น $1$ แล้วจับลูปของ $0$

@kmap:Y 0,2 | 0,4
- ลูปสีส้ม (ช่อง $0,2$) : $A=0,\ C=0$ $\Rightarrow (A+C)$
- ลูปสีน้ำเงิน (ช่อง $0,4$) : $B=0,\ C=0$ $\Rightarrow (B+C)$

@method all

เขียนด้วย NOR

$$
\begin{aligned}
Y &= (A + C)(B + C) \\
 &= \overline{\overline{(A + C)(B + C)}} && \text{$\overline{\overline{X}}=X$} \\
 &= \overline{\overline{A + C} + \overline{B + C}} && \text{$\overline{XY}=\overline{X}+\overline{Y}$}
\end{aligned}
$$

$\mathbf{Ans}\quad Y = \overline{\overline{A + C} + \overline{B + C}}$

## ข้อ 8 ใช้ NOR อย่างเดียว สองเอาต์พุต

จงถอดสมการของ X และ Y จากวงจรในรูป ลดรูป แล้วออกแบบวงจรลอจิกบนบอร์ดที่ให้ทั้งสองเอาต์พุตโดยใช้**เฉพาะเกต NOR** (7402) เท่านั้น (เกตที่ใช้ร่วมกันนับครั้งเดียว)

```lab
outputs: X, Y
X = figure
Y = figure
only: nor
figure:
  g1 = OR A B C
  g2 = OR A B
  g3 = AND g1 g2
  g4 = NOT g3
  g5 = AND g4 C
  X = g3
  Y = g5
```

$\mathbf{Sol}^{n}$

@method algebra

ถอดสมการจากรูป

$$
\begin{aligned}
X &= (A + B + C)(A + B) \\
 &= (A + B)(A + B + C) && \text{$XY=YX$} \\
 &= A + B && \text{$X(X+Y)=X$}
\end{aligned}
$$

จากรูป $Y=\overline{X}\,C$ แทน $X=A+B$

$$
\begin{aligned}
Y &= \overline{(A + B)}\,C \\
 &= \overline{A}\,\overline{B}C && \text{$\overline{X+Y}=\overline{X}\,\overline{Y}$}
\end{aligned}
$$

@method kmap

ถอดสมการจากรูป

$$X = (A + B + C)(A + B)$$

$$
\begin{aligned}
(A + B + C) &= M_0 \\
(A + B) &= (A + B + C)(A + B + \overline{C}) = M_0 M_1 \\
X &= M_0 M_0 M_1 \\
 &= M_0 M_1 && \text{$XX=X$} \\
 &= \prod M(0,1)
\end{aligned}
$$

จากรูป $Y=\overline{X}\,C$ แทน $X=A+B$

$$
\begin{aligned}
Y &= \overline{(A + B)}\,C \\
 &= \overline{A}\,\overline{B}C && \text{$\overline{X+Y}=\overline{X}\,\overline{Y}$}
\end{aligned}
$$

$$
\begin{aligned}
\overline{A}\,\overline{B}C &= m_1 \\
Y &= m_1 \\
 &= \sum m(1)
\end{aligned}
$$

ใส่ $0$ ที่ช่อง $0,1$ ของ $X$ นอกนั้นเป็น $1$ และใส่ $1$ ที่ช่อง $1$ ของ $Y$ นอกนั้นเป็น $0$ แล้วจับลูปของ $0$ ใน $X$ และลูปของ $1$ ใน $Y$

@kmap:X 0,1
@kmap:Y 1
- $X$ ลูปสีส้ม (ช่อง $0,1$) : $A=0,\ B=0$ $\Rightarrow (A+B)$
- $Y$ ลูปสีส้ม (ช่อง $1$) : $A=0,\ B=0,\ C=1$ $\Rightarrow \overline{A}\,\overline{B}C$

@method all

เขียนด้วย NOR

$$
\begin{aligned}
X &= A + B \\
 &= \overline{\overline{A + B}} && \text{$\overline{\overline{X}}=X$}
\end{aligned}
$$

$$
\begin{aligned}
Y &= \overline{A}\,\overline{B}C \\
 &= \overline{\overline{\overline{A}\,\overline{B}C}} && \text{$\overline{\overline{X}}=X$} \\
 &= \overline{A + B + \overline{C}} && \text{$\overline{XY}=\overline{X}+\overline{Y},\ \overline{\overline{X}}=X$} \\
 &= \overline{(A + B) + \overline{C}} && \text{$X+Y+Z=(X+Y)+Z$} \\
 &= \overline{\overline{\overline{A + B}} + \overline{C}} && \text{$X=\overline{\overline{X}}$}
\end{aligned}
$$

$\mathbf{Ans}\quad X = \overline{\overline{A + B}}$

$\mathbf{Ans}\quad Y = \overline{\overline{\overline{A + B}} + \overline{C}}$
