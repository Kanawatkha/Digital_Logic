# สมการบูลีนขนาดใหญ่

โจทย์ในหมวดนี้ให้สมการบูลีนขนาดใหญ่ ให้ลดรูปแล้วต่อวงจรบนบอร์ด จะลดรูปด้วยพีชคณิตบูลีน หรือขยายเป็น SOP หรือ POS แล้วใช้ K-map ก็ได้ กดดูเฉลยเพื่อดูวิธีทำ คำตอบ และวงจร แล้ววางเฉลยลงบอร์ดได้

## ข้อ 1 สมการที่มีขีดครอบวงเล็บ

จงลดรูปสมการต่อไปนี้ แล้วออกแบบวงจรลอจิกบนบอร์ดโดยใช้เกตให้น้อยที่สุด

$$Y = @expr:Y$$

```lab
outputs: Y
Y = expr !(!A & B | A & C) & (A | B)
```

$\mathbf{Sol}^{n}$

$$
\begin{aligned}
Y &= \overline{\overline{A}B + AC}(A + B) \\
 &= (\overline{\overline{A}B})(\overline{AC})(A + B) && \text{$\overline{X+Y}=\overline{X}\,\overline{Y}$} \\
 &= (A + \overline{B})(\overline{A} + \overline{C})(A + B) && \text{$\overline{XY}=\overline{X}+\overline{Y}$} \\
 &= (A + \overline{B})(A + B)(\overline{A} + \overline{C}) && \text{$XY=YX$} \\
 &= (A + \overline{B}B)(\overline{A} + \overline{C}) && \text{$X+YZ=(X+Y)(X+Z)$} \\
 &= (A + 0)(\overline{A} + \overline{C}) && \text{$X\overline{X}=0$} \\
 &= A(\overline{A} + \overline{C}) && \text{$X+0=X$} \\
 &= A\overline{A} + A\overline{C} && \text{$X(Y+Z)=XY+XZ$} \\
 &= 0 + A\overline{C} && \text{$X\overline{X}=0$} \\
 &= A\overline{C} && \text{$X+0=X$}
\end{aligned}
$$

$\mathbf{Ans}\quad Y = A\overline{C}$

## ข้อ 2 ผลคูณของผลบวกผสมกับผลบวกของผลคูณ

จงลดรูปสมการต่อไปนี้ แล้วออกแบบวงจรลอจิกบนบอร์ดโดยใช้เกตให้น้อยที่สุด

$$F = @expr:F$$

```lab
outputs: F
F = expr (A | !B) & (!A | C) | B & !C
```

$\mathbf{Sol}^{n}$

$$
\begin{aligned}
F &= (A + \overline{B})(\overline{A} + C) + B\overline{C} \\
 &= A\overline{A} + AC + \overline{A}\,\overline{B} + \overline{B}C + B\overline{C} && \text{$X(Y+Z)=XY+XZ$} \\
 &= AC + \overline{A}\,\overline{B} + \overline{B}C + B\overline{C} && \text{$X\overline{X}=0,\ X+0=X$} \\
 &= AC + \overline{A}\,\overline{B} + (A + \overline{A})\overline{B}C + B\overline{C} && \text{$X+\overline{X}=1,\ X\cdot 1=X$} \\
 &= AC + \overline{A}\,\overline{B} + A\overline{B}C + \overline{A}\,\overline{B}C + B\overline{C} && \text{$X(Y+Z)=XY+XZ$} \\
 &= AC(1 + \overline{B}) + \overline{A}\,\overline{B}(1 + C) + B\overline{C} && \text{$X(Y+Z)=XY+XZ$} \\
 &= AC + \overline{A}\,\overline{B} + B\overline{C} && \text{$1+X=1,\ X\cdot 1=X$}
\end{aligned}
$$

$\mathbf{Ans}\quad F = \overline{A}\,\overline{B} + B\overline{C} + AC$

## ข้อ 3 สมการที่ขยายเป็นมินเทอมบางส่วน

จงลดรูปสมการต่อไปนี้ แล้วออกแบบวงจรลอจิกบนบอร์ดโดยใช้เกตให้น้อยที่สุด

$$Y = @expr:Y$$

```lab
outputs: Y
Y = expr A & B | A & !B & C | !A & B & C | !A & !B & C
```

$\mathbf{Sol}^{n}$

$$
\begin{aligned}
Y &= AB + A\overline{B}C + \overline{A}BC + \overline{A}\,\overline{B}C \\
 &= AB + (A + \overline{A})\overline{B}C + \overline{A}BC && \text{$X(Y+Z)=XY+XZ$} \\
 &= AB + \overline{B}C + \overline{A}BC && \text{$X+\overline{X}=1,\ X\cdot 1=X$} \\
 &= AB + C(\overline{B} + \overline{A}B) && \text{$X(Y+Z)=XY+XZ$} \\
 &= AB + C(\overline{B} + \overline{A}) && \text{$X+\overline{X}Y=X+Y$} \\
 &= AB + C\,\overline{AB} && \text{$\overline{XY}=\overline{X}+\overline{Y}$} \\
 &= AB + C && \text{$X+\overline{X}Y=X+Y$}
\end{aligned}
$$

$\mathbf{Ans}\quad Y = AB + C$

## ข้อ 4 สองเอาต์พุตที่มีเทอมซ้ำกัน

จงลดรูปสมการทั้งสองต่อไปนี้ แล้วออกแบบวงจรลอจิกบนบอร์ดที่ให้ทั้ง X และ Y โดยใช้เกตรวมกันให้น้อยที่สุด (เกตที่ใช้ร่วมกันนับครั้งเดียว)

$$X = @expr:X$$

$$Y = @expr:Y$$

```lab
outputs: X, Y
X = expr !(A & B) & (A | C)
Y = expr !(A | C) | A & B
```

$\mathbf{Sol}^{n}$

$$
\begin{aligned}
X &= \overline{AB}(A + C) \\
 &= (\overline{A} + \overline{B})(A + C) && \text{$\overline{XY}=\overline{X}+\overline{Y}$} \\
 &= \overline{A}A + \overline{A}C + A\overline{B} + \overline{B}C && \text{$X(Y+Z)=XY+XZ$} \\
 &= \overline{A}C + A\overline{B} + \overline{B}C && \text{$X\overline{X}=0,\ X+0=X$} \\
 &= \overline{A}C + A\overline{B} + (A + \overline{A})\overline{B}C && \text{$X+\overline{X}=1,\ X\cdot 1=X$} \\
 &= \overline{A}C + A\overline{B} + A\overline{B}C + \overline{A}\,\overline{B}C && \text{$X(Y+Z)=XY+XZ$} \\
 &= \overline{A}C(1 + \overline{B}) + A\overline{B}(1 + C) && \text{$X(Y+Z)=XY+XZ$} \\
 &= \overline{A}C + A\overline{B} && \text{$1+X=1,\ X\cdot 1=X$}
\end{aligned}
$$

$$
\begin{aligned}
Y &= \overline{A + C} + AB \\
 &= \overline{A}\,\overline{C} + AB && \text{$\overline{X+Y}=\overline{X}\,\overline{Y}$}
\end{aligned}
$$

$\mathbf{Ans}\quad X = \overline{A}C + A\overline{B}$

$\mathbf{Ans}\quad Y = \overline{A}\,\overline{C} + AB$

## ข้อ 5 ใช้ NAND อย่างเดียว (1)

จงลดรูปสมการต่อไปนี้ แล้วออกแบบวงจรลอจิกบนบอร์ดโดยใช้**เฉพาะเกต NAND** (7400) เท่านั้น ห้ามใช้ชิปชนิดอื่น ถ้าต้องการอินเวอร์เตอร์ให้ต่อสองอินพุตของ NAND เข้าด้วยกัน

$$Y = @expr:Y$$

```lab
outputs: Y
Y = expr !(A & !B | !A & C) | B & C
only: nand
```

$\mathbf{Sol}^{n}$

$$
\begin{aligned}
Y &= \overline{A\overline{B} + \overline{A}C} + BC \\
 &= (\overline{A\overline{B}})(\overline{\overline{A}C}) + BC && \text{$\overline{X+Y}=\overline{X}\,\overline{Y}$} \\
 &= (\overline{A} + B)(A + \overline{C}) + BC && \text{$\overline{XY}=\overline{X}+\overline{Y}$} \\
 &= \overline{A}A + \overline{A}\,\overline{C} + AB + B\overline{C} + BC && \text{$X(Y+Z)=XY+XZ$} \\
 &= \overline{A}\,\overline{C} + AB + B\overline{C} + BC && \text{$X\overline{X}=0,\ X+0=X$} \\
 &= \overline{A}\,\overline{C} + AB + B(\overline{C} + C) && \text{$X(Y+Z)=XY+XZ$} \\
 &= \overline{A}\,\overline{C} + AB + B\cdot 1 && \text{$X+\overline{X}=1$} \\
 &= \overline{A}\,\overline{C} + AB + B && \text{$X\cdot 1=X$} \\
 &= \overline{A}\,\overline{C} + B && \text{$X+XY=X$}
\end{aligned}
$$

เขียนด้วย NAND

$$
\begin{aligned}
Y &= \overline{A}\,\overline{C} + B \\
 &= \overline{\overline{\overline{A}\,\overline{C} + B}} && \text{$\overline{\overline{X}}=X$} \\
 &= \overline{\overline{\overline{A}\,\overline{C}}\cdot\overline{B}} && \text{$\overline{X+Y}=\overline{X}\,\overline{Y}$}
\end{aligned}
$$

$\mathbf{Ans}\quad Y = \overline{A}\,\overline{C} + B$

## ข้อ 6 ใช้ NAND อย่างเดียว (2)

จงลดรูปสมการต่อไปนี้ แล้วออกแบบวงจรลอจิกบนบอร์ดโดยใช้**เฉพาะเกต NAND** (7400) เท่านั้น ห้ามใช้ชิปชนิดอื่น

$$F = @expr:F$$

```lab
outputs: F
F = expr (A | B) & (!A | C) & (B | C)
only: nand
```

$\mathbf{Sol}^{n}$

แต่ละวงเล็บเป็น $0$ ที่ช่อง $0,1$ ($A+B$), $4,6$ ($\overline{A}+C$) และ $0,4$ ($B+C$) จึงได้ $F=0$ ที่ช่อง $0,1,4,6$ และ $F=1$ ที่ช่อง $2,3,5,7$

@kmap:F 2,3 | 5,7
- ลูปสีส้ม (ช่อง $2,3$) : $A=0,\ B=1$ $\Rightarrow \overline{A}B$
- ลูปสีน้ำเงิน (ช่อง $5,7$) : $A=1,\ C=1$ $\Rightarrow AC$

เขียนด้วย NAND

$$
\begin{aligned}
F &= AC + \overline{A}B \\
 &= \overline{\overline{AC + \overline{A}B}} && \text{$\overline{\overline{X}}=X$} \\
 &= \overline{\overline{AC}\cdot\overline{\overline{A}B}} && \text{$\overline{X+Y}=\overline{X}\,\overline{Y}$}
\end{aligned}
$$

$\mathbf{Ans}\quad F = \overline{A}B + AC$

## ข้อ 7 ใช้ NOR อย่างเดียว (1)

จงลดรูปสมการต่อไปนี้ แล้วออกแบบวงจรลอจิกบนบอร์ดโดยใช้**เฉพาะเกต NOR** (7402) เท่านั้น ห้ามใช้ชิปชนิดอื่น ถ้าต้องการอินเวอร์เตอร์ให้ต่อสองอินพุตของ NOR เข้าด้วยกัน

$$Y = @expr:Y$$

```lab
outputs: Y
Y = expr !(!A | B) | !(A | !C) | A & B & C
only: nor
```

$\mathbf{Sol}^{n}$

$$
\begin{aligned}
Y &= \overline{\overline{A} + B} + \overline{A + \overline{C}} + ABC \\
 &= A\overline{B} + \overline{A}C + ABC && \text{$\overline{X+Y}=\overline{X}\,\overline{Y},\ \overline{\overline{X}}=X$} \\
 &= A\overline{B} + C(\overline{A} + AB) && \text{$X(Y+Z)=XY+XZ$} \\
 &= A\overline{B} + C(\overline{A} + B) && \text{$X+\overline{X}Y=X+Y$} \\
 &= A\overline{B} + C\,\overline{A\overline{B}} && \text{$\overline{XY}=\overline{X}+\overline{Y}$} \\
 &= A\overline{B} + C && \text{$X+\overline{X}Y=X+Y$}
\end{aligned}
$$

เขียนด้วย NOR

$$
\begin{aligned}
Y &= A\overline{B} + C \\
 &= (A + C)(\overline{B} + C) && \text{$X+YZ=(X+Y)(X+Z)$} \\
 &= \overline{\overline{(A + C)(\overline{B} + C)}} && \text{$\overline{\overline{X}}=X$} \\
 &= \overline{\overline{A + C} + \overline{\overline{B} + C}} && \text{$\overline{XY}=\overline{X}+\overline{Y}$}
\end{aligned}
$$

$\mathbf{Ans}\quad Y = A\overline{B} + C$

## ข้อ 8 ใช้ NOR อย่างเดียว (2)

จงลดรูปสมการต่อไปนี้ แล้วออกแบบวงจรลอจิกบนบอร์ดโดยใช้**เฉพาะเกต NOR** (7402) เท่านั้น ห้ามใช้ชิปชนิดอื่น

$$Z = @expr:Z$$

```lab
outputs: Z
Z = expr ((A | !B) & (!A | C)) | (!B & !C)
only: nor
```

$\mathbf{Sol}^{n}$

$$
\begin{aligned}
Z &= (A + \overline{B})(\overline{A} + C) + \overline{B}\,\overline{C} \\
 &= A\overline{A} + AC + \overline{A}\,\overline{B} + \overline{B}C + \overline{B}\,\overline{C} && \text{$X(Y+Z)=XY+XZ$} \\
 &= AC + \overline{A}\,\overline{B} + \overline{B}C + \overline{B}\,\overline{C} && \text{$X\overline{X}=0,\ X+0=X$} \\
 &= AC + \overline{A}\,\overline{B} + \overline{B}(C + \overline{C}) && \text{$X(Y+Z)=XY+XZ$} \\
 &= AC + \overline{A}\,\overline{B} + \overline{B}\cdot 1 && \text{$X+\overline{X}=1$} \\
 &= AC + \overline{A}\,\overline{B} + \overline{B} && \text{$X\cdot 1=X$} \\
 &= AC + \overline{B} && \text{$X+XY=X$}
\end{aligned}
$$

เขียนด้วย NOR

$$
\begin{aligned}
Z &= AC + \overline{B} \\
 &= (A + \overline{B})(C + \overline{B}) && \text{$X+YZ=(X+Y)(X+Z)$} \\
 &= \overline{\overline{(A + \overline{B})(C + \overline{B})}} && \text{$\overline{\overline{X}}=X$} \\
 &= \overline{\overline{A + \overline{B}} + \overline{C + \overline{B}}} && \text{$\overline{XY}=\overline{X}+\overline{Y}$}
\end{aligned}
$$

$\mathbf{Ans}\quad Z = AC + \overline{B}$
