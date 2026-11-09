# สมการบูลีนขนาดใหญ่

โจทย์ในหมวดนี้ให้สมการบูลีนขนาดใหญ่ ให้ลดรูปแล้วต่อวงจรบนบอร์ด จะลดรูปด้วยพีชคณิตบูลีน หรือขยายเป็น SOP หรือ POS แล้วใช้ K-map ก็ได้ กดดูเฉลยเพื่อดูวิธีทำ คำตอบ และวงจร แล้ววางเฉลยลงบอร์ดได้

## ข้อ 1 ดึงตัวร่วมออกจากสองเทอม

จงลดรูปสมการต่อไปนี้ แล้วออกแบบวงจรลอจิกบนบอร์ดโดยใช้เกตให้น้อยที่สุด

$$Y = @expr:Y$$

```lab
outputs: Y
level: easy
Y = expr A & B | A & !B & C
```

$\mathbf{Sol}^{n}$

@method algebra

$$
\begin{aligned}
Y &= AB + A\overline{B}C \\
 &= A(B + \overline{B}C) && \text{$X(Y+Z)=XY+XZ$} \\
 &= A(B + C) && \text{$X+\overline{X}Y=X+Y$}
\end{aligned}
$$

@method kmap

$$
\begin{aligned}
AB &= AB\overline{C} + ABC = m_6 + m_7 \\
A\overline{B}C &= m_5 \\
Y &= m_6 + m_7 + m_5 \\
 &= m_5 + m_6 + m_7 && \text{$X+Y=Y+X$} \\
 &= \sum m(5,6,7)
\end{aligned}
$$

ใส่ $1$ ที่ช่อง $5,6,7$ แล้วจับลูปของ $1$

@kmap:Y 5,7 | 6,7
- ลูปสีส้ม (ช่อง $5,7$) : $A=1,\ C=1$ $\Rightarrow AC$
- ลูปสีน้ำเงิน (ช่อง $6,7$) : $A=1,\ B=1$ $\Rightarrow AB$

$$
\begin{aligned}
Y &= AC + AB \\
 &= A(B + C) && \text{$X(Y+Z)=XY+XZ$}
\end{aligned}
$$

$\mathbf{Ans}\quad Y = A(B + C)$

## ข้อ 2 สามเทอมที่ต่างกันทีละตัวแปร

จงลดรูปสมการต่อไปนี้ แล้วออกแบบวงจรลอจิกบนบอร์ดโดยใช้เกตให้น้อยที่สุด

$$F = @expr:F$$

```lab
outputs: F
level: easy
F = expr !A & B | A & B | A & !B
```

$\mathbf{Sol}^{n}$

@method algebra

$$
\begin{aligned}
F &= \overline{A}B + AB + A\overline{B} \\
 &= (\overline{A} + A)B + A\overline{B} && \text{$X(Y+Z)=XY+XZ$} \\
 &= B + A\overline{B} && \text{$X+\overline{X}=1,\ X\cdot 1=X$} \\
 &= A + B && \text{$X+\overline{X}Y=X+Y$}
\end{aligned}
$$

@method kmap

$$
\begin{aligned}
\overline{A}B &= \overline{A}B\overline{C} + \overline{A}BC = m_2 + m_3 \\
AB &= AB\overline{C} + ABC = m_6 + m_7 \\
A\overline{B} &= A\overline{B}\,\overline{C} + A\overline{B}C = m_4 + m_5 \\
F &= m_2 + m_3 + m_6 + m_7 + m_4 + m_5 \\
 &= m_2 + m_3 + m_4 + m_5 + m_6 + m_7 && \text{$X+Y=Y+X$} \\
 &= \sum m(2,3,4,5,6,7)
\end{aligned}
$$

ใส่ $1$ ที่ช่อง $2,3,4,5,6,7$ แล้วจับลูปของ $1$

@kmap:F 4,5,6,7 | 2,3,6,7
- ลูปสีส้ม (ช่อง $4,5,6,7$) : $A=1$ $\Rightarrow A$
- ลูปสีน้ำเงิน (ช่อง $2,3,6,7$) : $B=1$ $\Rightarrow B$

$\mathbf{Ans}\quad F = A + B$

## ข้อ 3 ผลคูณของผลบวกผสมกับผลบวกของผลคูณ

จงลดรูปสมการต่อไปนี้ แล้วออกแบบวงจรลอจิกบนบอร์ดโดยใช้เกตให้น้อยที่สุด

$$F = @expr:F$$

```lab
outputs: F
level: medium
F = expr (A | !B) & (!A | C) | B & !C
```

$\mathbf{Sol}^{n}$

@method algebra

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

@method kmap

$$
\begin{aligned}
(A + \overline{B}) &= (A + \overline{B} + C)(A + \overline{B} + \overline{C}) = M_2 M_3 \\
(\overline{A} + C) &= (\overline{A} + B + C)(\overline{A} + \overline{B} + C) = M_4 M_6 \\
(A + \overline{B})(\overline{A} + C) &= M_2 M_3 M_4 M_6 = \prod M(2,3,4,6) = \sum m(0,1,5,7) \\
B\overline{C} &= \overline{A}B\overline{C} + AB\overline{C} = m_2 + m_6 \\
F &= \sum m(0,1,5,7) + m_2 + m_6 \\
 &= \sum m(0,1,2,5,6,7)
\end{aligned}
$$

ใส่ $1$ ที่ช่อง $0,1,2,5,6,7$ แล้วจับลูปของ $1$

@kmap:F 0,1 | 2,6 | 5,7
- ลูปสีส้ม (ช่อง $0,1$) : $A=0,\ B=0$ $\Rightarrow \overline{A}\,\overline{B}$
- ลูปสีน้ำเงิน (ช่อง $2,6$) : $B=1,\ C=0$ $\Rightarrow B\overline{C}$
- ลูปสีเขียว (ช่อง $5,7$) : $A=1,\ C=1$ $\Rightarrow AC$

$\mathbf{Ans}\quad F = \overline{A}\,\overline{B} + B\overline{C} + AC$

## ข้อ 4 สมการที่ขยายเป็นมินเทอมบางส่วน

จงลดรูปสมการต่อไปนี้ แล้วออกแบบวงจรลอจิกบนบอร์ดโดยใช้เกตให้น้อยที่สุด

$$Y = @expr:Y$$

```lab
outputs: Y
level: medium
Y = expr A & B | A & !B & C | !A & B & C | !A & !B & C
```

$\mathbf{Sol}^{n}$

@method algebra

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

@method kmap

$$
\begin{aligned}
AB &= AB\overline{C} + ABC = m_6 + m_7 \\
A\overline{B}C &= m_5 \\
\overline{A}BC &= m_3 \\
\overline{A}\,\overline{B}C &= m_1 \\
Y &= m_6 + m_7 + m_5 + m_3 + m_1 \\
 &= m_1 + m_3 + m_5 + m_6 + m_7 && \text{$X+Y=Y+X$} \\
 &= \sum m(1,3,5,6,7)
\end{aligned}
$$

ใส่ $1$ ที่ช่อง $1,3,5,6,7$ แล้วจับลูปของ $1$

@kmap:Y 1,3,5,7 | 6,7
- ลูปสีส้ม (ช่อง $1,3,5,7$) : $C=1$ $\Rightarrow C$
- ลูปสีน้ำเงิน (ช่อง $6,7$) : $A=1,\ B=1$ $\Rightarrow AB$

$\mathbf{Ans}\quad Y = AB + C$

## ข้อ 5 สามเทอมที่ต้องเติมเทอมช่วย

จงลดรูปสมการต่อไปนี้ แล้วออกแบบวงจรลอจิกบนบอร์ดโดยใช้เกตให้น้อยที่สุด

$$Y = @expr:Y$$

```lab
outputs: Y
level: medium
Y = expr !A & !B | !A & B & C | A & !B & C
```

$\mathbf{Sol}^{n}$

@method algebra

$$
\begin{aligned}
Y &= \overline{A}\,\overline{B} + \overline{A}BC + A\overline{B}C \\
 &= \overline{A}(\overline{B} + BC) + A\overline{B}C && \text{$X(Y+Z)=XY+XZ$} \\
 &= \overline{A}(\overline{B} + C) + A\overline{B}C && \text{$X+\overline{X}Y=X+Y$} \\
 &= \overline{A}\,\overline{B} + \overline{A}C + A\overline{B}C && \text{$X(Y+Z)=XY+XZ$} \\
 &= \overline{A}\,\overline{B} + \overline{A}C + A\overline{B}C + \overline{A}\,\overline{B}C && \text{$X+XY=X$} \\
 &= \overline{A}\,\overline{B} + \overline{A}C + (A + \overline{A})\overline{B}C && \text{$X(Y+Z)=XY+XZ$} \\
 &= \overline{A}\,\overline{B} + \overline{A}C + \overline{B}C && \text{$X+\overline{X}=1,\ X\cdot 1=X$}
\end{aligned}
$$

@method kmap

$$
\begin{aligned}
\overline{A}\,\overline{B} &= \overline{A}\,\overline{B}\,\overline{C} + \overline{A}\,\overline{B}C = m_0 + m_1 \\
\overline{A}BC &= m_3 \\
A\overline{B}C &= m_5 \\
Y &= m_0 + m_1 + m_3 + m_5 \\
 &= \sum m(0,1,3,5)
\end{aligned}
$$

ใส่ $1$ ที่ช่อง $0,1,3,5$ แล้วจับลูปของ $1$

@kmap:Y 0,1 | 1,3 | 1,5
- ลูปสีส้ม (ช่อง $0,1$) : $A=0,\ B=0$ $\Rightarrow \overline{A}\,\overline{B}$
- ลูปสีน้ำเงิน (ช่อง $1,3$) : $A=0,\ C=1$ $\Rightarrow \overline{A}C$
- ลูปสีเขียว (ช่อง $1,5$) : $B=0,\ C=1$ $\Rightarrow \overline{B}C$

$\mathbf{Ans}\quad Y = \overline{A}\,\overline{B} + \overline{A}C + \overline{B}C$

## ข้อ 6 สองเอาต์พุตที่มีเทอมซ้ำกัน

จงลดรูปสมการทั้งสองต่อไปนี้ แล้วออกแบบวงจรลอจิกบนบอร์ดที่ให้ทั้ง X และ Y โดยใช้เกตรวมกันให้น้อยที่สุด (เกตที่ใช้ร่วมกันนับครั้งเดียว)

$$X = @expr:X$$

$$Y = @expr:Y$$

```lab
outputs: X, Y
level: medium
X = expr !(A & B) & (A | C)
Y = expr !(A | C) | A & B
```

$\mathbf{Sol}^{n}$

@method algebra

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

@method kmap

$$
\begin{aligned}
X &= \overline{AB}(A + C) \\
 &= (\overline{A} + \overline{B})(A + C) && \text{$\overline{XY}=\overline{X}+\overline{Y}$}
\end{aligned}
$$

$$
\begin{aligned}
(\overline{A} + \overline{B}) &= (\overline{A} + \overline{B} + C)(\overline{A} + \overline{B} + \overline{C}) = M_6 M_7 \\
(A + C) &= (A + B + C)(A + \overline{B} + C) = M_0 M_2 \\
X &= M_6 M_7 M_0 M_2 \\
 &= M_0 M_2 M_6 M_7 && \text{$XY=YX$} \\
 &= \prod M(0,2,6,7)
\end{aligned}
$$

$$
\begin{aligned}
Y &= \overline{A + C} + AB \\
 &= \overline{A}\,\overline{C} + AB && \text{$\overline{X+Y}=\overline{X}\,\overline{Y}$}
\end{aligned}
$$

$$
\begin{aligned}
\overline{A}\,\overline{C} &= \overline{A}\,\overline{B}\,\overline{C} + \overline{A}B\overline{C} = m_0 + m_2 \\
AB &= AB\overline{C} + ABC = m_6 + m_7 \\
Y &= m_0 + m_2 + m_6 + m_7 \\
 &= \sum m(0,2,6,7)
\end{aligned}
$$

ใส่ $0$ ที่ช่อง $0,2,6,7$ ของ $X$ นอกนั้นเป็น $1$ และใส่ $1$ ที่ช่อง $0,2,6,7$ ของ $Y$ แล้วจับลูปของ $1$

@kmap:X 1,3 | 4,5
@kmap:Y 0,2 | 6,7
- $X$ ลูปสีส้ม (ช่อง $1,3$) : $A=0,\ C=1$ $\Rightarrow \overline{A}C$
- $X$ ลูปสีน้ำเงิน (ช่อง $4,5$) : $A=1,\ B=0$ $\Rightarrow A\overline{B}$
- $Y$ ลูปสีส้ม (ช่อง $0,2$) : $A=0,\ C=0$ $\Rightarrow \overline{A}\,\overline{C}$
- $Y$ ลูปสีน้ำเงิน (ช่อง $6,7$) : $A=1,\ B=1$ $\Rightarrow AB$

$\mathbf{Ans}\quad X = \overline{A}C + A\overline{B}$

$\mathbf{Ans}\quad Y = \overline{A}\,\overline{C} + AB$

## ข้อ 7 สมการที่ต้องตัดเทอมซ้ำซ้อน

จงลดรูปสมการต่อไปนี้ แล้วออกแบบวงจรลอจิกบนบอร์ดโดยใช้เกตให้น้อยที่สุด

$$Y = @expr:Y$$

```lab
outputs: Y
level: medium
Y = expr A & C | !A & B & C | A & !B
```

$\mathbf{Sol}^{n}$

@method algebra

$$
\begin{aligned}
Y &= AC + \overline{A}BC + A\overline{B} \\
 &= C(A + \overline{A}B) + A\overline{B} && \text{$X(Y+Z)=XY+XZ$} \\
 &= C(A + B) + A\overline{B} && \text{$X+\overline{X}Y=X+Y$} \\
 &= AC + BC + A\overline{B} && \text{$X(Y+Z)=XY+XZ$} \\
 &= AC(B + \overline{B}) + BC + A\overline{B} && \text{$X+\overline{X}=1,\ X\cdot 1=X$} \\
 &= ABC + A\overline{B}C + BC + A\overline{B} && \text{$X(Y+Z)=XY+XZ$} \\
 &= A\overline{B}(C + 1) + BC(A + 1) && \text{$X(Y+Z)=XY+XZ$} \\
 &= A\overline{B} + BC && \text{$1+X=1,\ X\cdot 1=X$}
\end{aligned}
$$

@method kmap

$$
\begin{aligned}
AC &= A\overline{B}C + ABC = m_5 + m_7 \\
\overline{A}BC &= m_3 \\
A\overline{B} &= A\overline{B}\,\overline{C} + A\overline{B}C = m_4 + m_5 \\
Y &= m_5 + m_7 + m_3 + m_4 + m_5 \\
 &= m_3 + m_4 + m_5 + m_7 && \text{$X+X=X,\ X+Y=Y+X$} \\
 &= \sum m(3,4,5,7)
\end{aligned}
$$

ใส่ $1$ ที่ช่อง $3,4,5,7$ แล้วจับลูปของ $1$ (ช่อง $5,7$ ถูกลูปอื่นคลุมครบแล้ว ไม่ต้องจับ)

@kmap:Y 4,5 | 3,7
- ลูปสีส้ม (ช่อง $4,5$) : $A=1,\ B=0$ $\Rightarrow A\overline{B}$
- ลูปสีน้ำเงิน (ช่อง $3,7$) : $B=1,\ C=1$ $\Rightarrow BC$

$\mathbf{Ans}\quad Y = A\overline{B} + BC$

## ข้อ 8 สมการที่มีขีดครอบวงเล็บ

จงลดรูปสมการต่อไปนี้ แล้วออกแบบวงจรลอจิกบนบอร์ดโดยใช้เกตให้น้อยที่สุด

$$Y = @expr:Y$$

```lab
outputs: Y
level: hard
Y = expr !(!A & B | A & C) & (A | B)
```

$\mathbf{Sol}^{n}$

@method algebra

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

@method kmap

$$
\begin{aligned}
Y &= \overline{\overline{A}B + AC}(A + B) \\
 &= (\overline{\overline{A}B})(\overline{AC})(A + B) && \text{$\overline{X+Y}=\overline{X}\,\overline{Y}$} \\
 &= (A + \overline{B})(\overline{A} + \overline{C})(A + B) && \text{$\overline{XY}=\overline{X}+\overline{Y}$}
\end{aligned}
$$

$$
\begin{aligned}
A + \overline{B} &= (A + \overline{B} + C)(A + \overline{B} + \overline{C}) = M_2 M_3 \\
\overline{A} + \overline{C} &= (\overline{A} + B + \overline{C})(\overline{A} + \overline{B} + \overline{C}) = M_5 M_7 \\
A + B &= (A + B + C)(A + B + \overline{C}) = M_0 M_1 \\
Y &= M_2 M_3 \cdot M_5 M_7 \cdot M_0 M_1 \\
 &= M_0 M_1 M_2 M_3 M_5 M_7 && \text{$XY=YX$} \\
 &= \prod M(0,1,2,3,5,7)
\end{aligned}
$$

ใส่ $0$ ที่ช่อง $0,1,2,3,5,7$ นอกนั้นเป็น $1$ แล้วจับลูปของ $1$

@kmap:Y 4,6
- ลูปสีส้ม (ช่อง $4,6$) : $A=1,\ C=0$ $\Rightarrow A\overline{C}$

$\mathbf{Ans}\quad Y = A\overline{C}$

## ข้อ 9 ใช้ NAND อย่างเดียว (1)

จงลดรูปสมการต่อไปนี้ แล้วออกแบบวงจรลอจิกบนบอร์ดโดยใช้**เฉพาะเกต NAND** (7400) เท่านั้น ห้ามใช้ชิปชนิดอื่น ถ้าต้องการอินเวอร์เตอร์ให้ต่อสองอินพุตของ NAND เข้าด้วยกัน

$$Y = @expr:Y$$

```lab
outputs: Y
level: easy
Y = expr !B | A & B
only: nand
```

$\mathbf{Sol}^{n}$

@method algebra

$$
\begin{aligned}
Y &= \overline{B} + AB \\
 &= \overline{B} + A && \text{$X+\overline{X}Y=X+Y$}
\end{aligned}
$$

@method kmap

$$
\begin{aligned}
\overline{B} &= \overline{A}\,\overline{B}\,\overline{C} + \overline{A}\,\overline{B}C + A\overline{B}\,\overline{C} + A\overline{B}C = m_0 + m_1 + m_4 + m_5 \\
AB &= AB\overline{C} + ABC = m_6 + m_7 \\
Y &= m_0 + m_1 + m_4 + m_5 + m_6 + m_7 \\
 &= \sum m(0,1,4,5,6,7)
\end{aligned}
$$

ใส่ $1$ ที่ช่อง $0,1,4,5,6,7$ แล้วจับลูปของ $1$

@kmap:Y 0,1,4,5 | 4,5,6,7
- ลูปสีส้ม (ช่อง $0,1,4,5$) : $B=0$ $\Rightarrow \overline{B}$
- ลูปสีน้ำเงิน (ช่อง $4,5,6,7$) : $A=1$ $\Rightarrow A$

@method all

เขียนด้วย NAND

$$
\begin{aligned}
Y &= A + \overline{B} \\
 &= \overline{\overline{A + \overline{B}}} && \text{$\overline{\overline{X}}=X$} \\
 &= \overline{\overline{A}\cdot\overline{\overline{B}}} && \text{$\overline{X+Y}=\overline{X}\,\overline{Y}$} \\
 &= \overline{\overline{A}B} && \text{$\overline{\overline{X}}=X$}
\end{aligned}
$$

$\mathbf{Ans}\quad Y = \overline{\overline{A}B}$

## ข้อ 10 ใช้ NAND อย่างเดียว (2)

จงลดรูปสมการต่อไปนี้ แล้วออกแบบวงจรลอจิกบนบอร์ดโดยใช้**เฉพาะเกต NAND** (7400) เท่านั้น ห้ามใช้ชิปชนิดอื่น ถ้าต้องการอินเวอร์เตอร์ให้ต่อสองอินพุตของ NAND เข้าด้วยกัน

$$Y = @expr:Y$$

```lab
outputs: Y
level: easy
Y = expr A & B | A & B & C
only: nand
```

$\mathbf{Sol}^{n}$

@method algebra

$$
\begin{aligned}
Y &= AB + ABC \\
 &= AB(1 + C) && \text{$X(Y+Z)=XY+XZ$} \\
 &= AB && \text{$1+X=1,\ X\cdot 1=X$}
\end{aligned}
$$

@method kmap

$$
\begin{aligned}
AB &= AB\overline{C} + ABC = m_6 + m_7 \\
ABC &= m_7 \\
Y &= m_6 + m_7 + m_7 \\
 &= m_6 + m_7 && \text{$X+X=X$} \\
 &= \sum m(6,7)
\end{aligned}
$$

ใส่ $1$ ที่ช่อง $6,7$ แล้วจับลูปของ $1$

@kmap:Y 6,7
- ลูปสีส้ม (ช่อง $6,7$) : $A=1,\ B=1$ $\Rightarrow AB$

@method all

เขียนด้วย NAND

$$
\begin{aligned}
Y &= AB \\
 &= \overline{\overline{AB}} && \text{$\overline{\overline{X}}=X$}
\end{aligned}
$$

$\mathbf{Ans}\quad Y = \overline{\overline{AB}}$

## ข้อ 11 ใช้ NAND อย่างเดียว (3)

จงลดรูปสมการต่อไปนี้ แล้วออกแบบวงจรลอจิกบนบอร์ดโดยใช้**เฉพาะเกต NAND** (7400) เท่านั้น ห้ามใช้ชิปชนิดอื่น ถ้าต้องการอินเวอร์เตอร์ให้ต่อสองอินพุตของ NAND เข้าด้วยกัน

$$Y = @expr:Y$$

```lab
outputs: Y
level: medium
Y = expr (A | !B) & (!A | C)
only: nand
```

$\mathbf{Sol}^{n}$

@method algebra

$$
\begin{aligned}
Y &= (A + \overline{B})(\overline{A} + C) \\
 &= A\overline{A} + AC + \overline{A}\,\overline{B} + \overline{B}C && \text{$X(Y+Z)=XY+XZ$} \\
 &= AC + \overline{A}\,\overline{B} + \overline{B}C && \text{$X\overline{X}=0,\ X+0=X$} \\
 &= AC + \overline{A}\,\overline{B} + (A + \overline{A})\overline{B}C && \text{$X+\overline{X}=1,\ X\cdot 1=X$} \\
 &= AC + \overline{A}\,\overline{B} + A\overline{B}C + \overline{A}\,\overline{B}C && \text{$X(Y+Z)=XY+XZ$} \\
 &= AC(1 + \overline{B}) + \overline{A}\,\overline{B}(1 + C) && \text{$X(Y+Z)=XY+XZ$} \\
 &= AC + \overline{A}\,\overline{B} && \text{$1+X=1,\ X\cdot 1=X$}
\end{aligned}
$$

@method kmap

$$
\begin{aligned}
(A + \overline{B}) &= (A + \overline{B} + C)(A + \overline{B} + \overline{C}) = M_2 M_3 \\
(\overline{A} + C) &= (\overline{A} + B + C)(\overline{A} + \overline{B} + C) = M_4 M_6 \\
Y &= M_2 M_3 M_4 M_6 \\
 &= \prod M(2,3,4,6)
\end{aligned}
$$

ใส่ $0$ ที่ช่อง $2,3,4,6$ นอกนั้นเป็น $1$ แล้วจับลูปของ $1$

@kmap:Y 0,1 | 5,7
- ลูปสีส้ม (ช่อง $0,1$) : $A=0,\ B=0$ $\Rightarrow \overline{A}\,\overline{B}$
- ลูปสีน้ำเงิน (ช่อง $5,7$) : $A=1,\ C=1$ $\Rightarrow AC$

@method all

เขียนด้วย NAND

$$
\begin{aligned}
Y &= \overline{A}\,\overline{B} + AC \\
 &= \overline{\overline{\overline{A}\,\overline{B} + AC}} && \text{$\overline{\overline{X}}=X$} \\
 &= \overline{\overline{\overline{A}\,\overline{B}}\cdot\overline{AC}} && \text{$\overline{X+Y}=\overline{X}\,\overline{Y}$}
\end{aligned}
$$

$\mathbf{Ans}\quad Y = \overline{\overline{\overline{A}\,\overline{B}}\cdot\overline{AC}}$

## ข้อ 12 ใช้ NAND อย่างเดียว (4)

จงลดรูปสมการต่อไปนี้ แล้วออกแบบวงจรลอจิกบนบอร์ดโดยใช้**เฉพาะเกต NAND** (7400) เท่านั้น ห้ามใช้ชิปชนิดอื่น ถ้าต้องการอินเวอร์เตอร์ให้ต่อสองอินพุตของ NAND เข้าด้วยกัน

$$Y = @expr:Y$$

```lab
outputs: Y
level: hard
Y = expr !(A & !B | !A & C) | B & C
only: nand
```

$\mathbf{Sol}^{n}$

@method algebra

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

@method kmap

$$
\begin{aligned}
Y &= \overline{A\overline{B} + \overline{A}C} + BC \\
 &= (\overline{A\overline{B}})(\overline{\overline{A}C}) + BC && \text{$\overline{X+Y}=\overline{X}\,\overline{Y}$} \\
 &= (\overline{A} + B)(A + \overline{C}) + BC && \text{$\overline{XY}=\overline{X}+\overline{Y}$}
\end{aligned}
$$

$$
\begin{aligned}
(\overline{A} + B) &= (\overline{A} + B + C)(\overline{A} + B + \overline{C}) = M_4 M_5 \\
(A + \overline{C}) &= (A + B + \overline{C})(A + \overline{B} + \overline{C}) = M_1 M_3 \\
(\overline{A} + B)(A + \overline{C}) &= M_4 M_5 M_1 M_3 = \prod M(1,3,4,5) = \sum m(0,2,6,7) \\
BC &= \overline{A}BC + ABC = m_3 + m_7 \\
Y &= \sum m(0,2,6,7) + m_3 + m_7 \\
 &= \sum m(0,2,3,6,7) && \text{$X+X=X$}
\end{aligned}
$$

ใส่ $1$ ที่ช่อง $0,2,3,6,7$ แล้วจับลูปของ $1$

@kmap:Y 0,2 | 2,3,6,7
- ลูปสีส้ม (ช่อง $0,2$) : $A=0,\ C=0$ $\Rightarrow \overline{A}\,\overline{C}$
- ลูปสีน้ำเงิน (ช่อง $2,3,6,7$) : $B=1$ $\Rightarrow B$

@method all

เขียนด้วย NAND

$$
\begin{aligned}
Y &= \overline{A}\,\overline{C} + B \\
 &= \overline{\overline{\overline{A}\,\overline{C} + B}} && \text{$\overline{\overline{X}}=X$} \\
 &= \overline{\overline{\overline{A}\,\overline{C}}\cdot\overline{B}} && \text{$\overline{X+Y}=\overline{X}\,\overline{Y}$}
\end{aligned}
$$

$\mathbf{Ans}\quad Y = \overline{\overline{\overline{A}\,\overline{C}}\cdot\overline{B}}$

## ข้อ 13 ใช้ NAND อย่างเดียว (5)

จงลดรูปสมการต่อไปนี้ แล้วออกแบบวงจรลอจิกบนบอร์ดโดยใช้**เฉพาะเกต NAND** (7400) เท่านั้น ห้ามใช้ชิปชนิดอื่น

$$F = @expr:F$$

```lab
outputs: F
level: hard
F = expr (A | B) & (!A | C) & (B | C)
only: nand
```

$\mathbf{Sol}^{n}$

@method algebra

$$
\begin{aligned}
F &= (A + B)(\overline{A} + C)(B + C) \\
 &= (A + B)(\overline{A} + C)(B + C + A\overline{A}) && \text{$X\overline{X}=0,\ X+0=X$} \\
 &= (A + B)(\overline{A} + C)(A + B + C)(\overline{A} + B + C) && \text{$X+YZ=(X+Y)(X+Z)$} \\
 &= (A + B)(A + B + C)(\overline{A} + C)(\overline{A} + B + C) && \text{$XY=YX$} \\
 &= (A + B)(\overline{A} + C) && \text{$X(X+Y)=X$} \\
 &= A\overline{A} + AC + \overline{A}B + BC && \text{$X(Y+Z)=XY+XZ$} \\
 &= AC + \overline{A}B + BC && \text{$X\overline{X}=0,\ X+0=X$} \\
 &= AC + \overline{A}B + (A + \overline{A})BC && \text{$X+\overline{X}=1,\ X\cdot 1=X$} \\
 &= AC + \overline{A}B + ABC + \overline{A}BC && \text{$X(Y+Z)=XY+XZ$} \\
 &= AC(1 + B) + \overline{A}B(1 + C) && \text{$X(Y+Z)=XY+XZ$} \\
 &= AC + \overline{A}B && \text{$1+X=1,\ X\cdot 1=X$}
\end{aligned}
$$

@method kmap

$$
\begin{aligned}
A + B &= (A + B + C)(A + B + \overline{C}) = M_0 M_1 \\
\overline{A} + C &= (\overline{A} + B + C)(\overline{A} + \overline{B} + C) = M_4 M_6 \\
B + C &= (A + B + C)(\overline{A} + B + C) = M_0 M_4 \\
F &= M_0 M_1 \cdot M_4 M_6 \cdot M_0 M_4 \\
 &= M_0 M_1 M_4 M_6 && \text{$XX=X$} \\
 &= \prod M(0,1,4,6)
\end{aligned}
$$

ใส่ $0$ ที่ช่อง $0,1,4,6$ นอกนั้นเป็น $1$ แล้วจับลูปของ $1$

@kmap:F 2,3 | 5,7
- ลูปสีส้ม (ช่อง $2,3$) : $A=0,\ B=1$ $\Rightarrow \overline{A}B$
- ลูปสีน้ำเงิน (ช่อง $5,7$) : $A=1,\ C=1$ $\Rightarrow AC$

@method all

เขียนด้วย NAND

$$
\begin{aligned}
F &= AC + \overline{A}B \\
 &= \overline{\overline{AC + \overline{A}B}} && \text{$\overline{\overline{X}}=X$} \\
 &= \overline{\overline{AC}\cdot\overline{\overline{A}B}} && \text{$\overline{X+Y}=\overline{X}\,\overline{Y}$}
\end{aligned}
$$

$\mathbf{Ans}\quad F = \overline{\overline{AC}\cdot\overline{\overline{A}B}}$

## ข้อ 14 ใช้ NOR อย่างเดียว (1)

จงลดรูปสมการต่อไปนี้ แล้วออกแบบวงจรลอจิกบนบอร์ดโดยใช้**เฉพาะเกต NOR** (7402) เท่านั้น ห้ามใช้ชิปชนิดอื่น ถ้าต้องการอินเวอร์เตอร์ให้ต่อสองอินพุตของ NOR เข้าด้วยกัน

$$F = @expr:F$$

```lab
outputs: F
level: easy
F = expr !A & B | !A & C | !A & B & C
only: nor
```

$\mathbf{Sol}^{n}$

@method algebra

$$
\begin{aligned}
F &= \overline{A}B + \overline{A}C + \overline{A}BC \\
 &= \overline{A}B + \overline{A}C && \text{$X+XY=X$} \\
 &= \overline{A}(B + C) && \text{$X(Y+Z)=XY+XZ$}
\end{aligned}
$$

@method kmap

$$
\begin{aligned}
\overline{A}B &= \overline{A}B\overline{C} + \overline{A}BC = m_2 + m_3 \\
\overline{A}C &= \overline{A}\,\overline{B}C + \overline{A}BC = m_1 + m_3 \\
\overline{A}BC &= m_3 \\
F &= m_2 + m_3 + m_1 + m_3 + m_3 \\
 &= m_1 + m_2 + m_3 && \text{$X+X=X,\ X+Y=Y+X$} \\
 &= \sum m(1,2,3)
\end{aligned}
$$

ใส่ $1$ ที่ช่อง $1,2,3$ นอกนั้นเป็น $0$ แล้วจับลูปของ $0$

@kmap:F 4,5,6,7 | 0,4
- ลูปสีส้ม (ช่อง $4,5,6,7$) : $A=1$ $\Rightarrow \overline{A}$
- ลูปสีน้ำเงิน (ช่อง $0,4$) : $B=0,\ C=0$ $\Rightarrow (B+C)$

@method all

เขียนด้วย NOR

$$
\begin{aligned}
F &= \overline{A}(B + C) \\
 &= \overline{\overline{\overline{A}(B + C)}} && \text{$\overline{\overline{X}}=X$} \\
 &= \overline{A + \overline{B + C}} && \text{$\overline{XY}=\overline{X}+\overline{Y},\ \overline{\overline{X}}=X$}
\end{aligned}
$$

$\mathbf{Ans}\quad F = \overline{A + \overline{B + C}}$

## ข้อ 15 ใช้ NOR อย่างเดียว (2)

จงลดรูปสมการต่อไปนี้ แล้วออกแบบวงจรลอจิกบนบอร์ดโดยใช้**เฉพาะเกต NOR** (7402) เท่านั้น ห้ามใช้ชิปชนิดอื่น ถ้าต้องการอินเวอร์เตอร์ให้ต่อสองอินพุตของ NOR เข้าด้วยกัน

$$Y = @expr:Y$$

```lab
outputs: Y
level: easy
Y = expr (!A | B) & (!A | C) & (!B | C)
only: nor
```

$\mathbf{Sol}^{n}$

@method algebra

$$
\begin{aligned}
Y &= (\overline{A} + B)(\overline{A} + C)(\overline{B} + C) \\
 &= (\overline{A} + B)(\overline{A} + C + B\overline{B})(\overline{B} + C) && \text{$X\overline{X}=0,\ X+0=X$} \\
 &= (\overline{A} + B)(\overline{A} + B + C)(\overline{A} + \overline{B} + C)(\overline{B} + C) && \text{$X+YZ=(X+Y)(X+Z)$} \\
 &= (\overline{A} + B)(\overline{A} + B + C)(\overline{B} + C)(\overline{A} + \overline{B} + C) && \text{$XY=YX$} \\
 &= (\overline{A} + B)(\overline{B} + C) && \text{$X(X+Y)=X$}
\end{aligned}
$$

@method kmap

$$
\begin{aligned}
(\overline{A} + B) &= (\overline{A} + B + C)(\overline{A} + B + \overline{C}) = M_4 M_5 \\
(\overline{A} + C) &= (\overline{A} + B + C)(\overline{A} + \overline{B} + C) = M_4 M_6 \\
(\overline{B} + C) &= (A + \overline{B} + C)(\overline{A} + \overline{B} + C) = M_2 M_6 \\
Y &= M_4 M_5 M_4 M_6 M_2 M_6 \\
 &= M_2 M_4 M_5 M_6 && \text{$XX=X,\ XY=YX$} \\
 &= \prod M(2,4,5,6)
\end{aligned}
$$

ใส่ $0$ ที่ช่อง $2,4,5,6$ นอกนั้นเป็น $1$ แล้วจับลูปของ $0$

@kmap:Y 4,5 | 2,6
- ลูปสีส้ม (ช่อง $4,5$) : $A=1,\ B=0$ $\Rightarrow (\overline{A}+B)$
- ลูปสีน้ำเงิน (ช่อง $2,6$) : $B=1,\ C=0$ $\Rightarrow (\overline{B}+C)$

@method all

เขียนด้วย NOR

$$
\begin{aligned}
Y &= (\overline{A} + B)(\overline{B} + C) \\
 &= \overline{\overline{(\overline{A} + B)(\overline{B} + C)}} && \text{$\overline{\overline{X}}=X$} \\
 &= \overline{\overline{\overline{A} + B} + \overline{\overline{B} + C}} && \text{$\overline{XY}=\overline{X}+\overline{Y}$}
\end{aligned}
$$

$\mathbf{Ans}\quad Y = \overline{\overline{\overline{A} + B} + \overline{\overline{B} + C}}$

## ข้อ 16 ใช้ NOR อย่างเดียว (3)

จงลดรูปสมการต่อไปนี้ แล้วออกแบบวงจรลอจิกบนบอร์ดโดยใช้**เฉพาะเกต NOR** (7402) เท่านั้น ห้ามใช้ชิปชนิดอื่น ถ้าต้องการอินเวอร์เตอร์ให้ต่อสองอินพุตของ NOR เข้าด้วยกัน

$$Y = @expr:Y$$

```lab
outputs: Y
level: medium
Y = expr !(!A & B | C) | A & !C
only: nor
```

$\mathbf{Sol}^{n}$

@method algebra

$$
\begin{aligned}
Y &= \overline{\overline{A}B + C} + A\overline{C} \\
 &= (\overline{\overline{A}B})\overline{C} + A\overline{C} && \text{$\overline{X+Y}=\overline{X}\,\overline{Y}$} \\
 &= (A + \overline{B})\overline{C} + A\overline{C} && \text{$\overline{XY}=\overline{X}+\overline{Y},\ \overline{\overline{X}}=X$} \\
 &= \overline{C}(A + \overline{B} + A) && \text{$X(Y+Z)=XY+XZ,\ XY=YX$} \\
 &= \overline{C}(A + \overline{B}) && \text{$X+X=X,\ X+Y=Y+X$}
\end{aligned}
$$

@method kmap

$$
\begin{aligned}
Y &= \overline{\overline{A}B + C} + A\overline{C} \\
 &= (\overline{\overline{A}B})\overline{C} + A\overline{C} && \text{$\overline{X+Y}=\overline{X}\,\overline{Y}$} \\
 &= (A + \overline{B})\overline{C} + A\overline{C} && \text{$\overline{XY}=\overline{X}+\overline{Y},\ \overline{\overline{X}}=X$}
\end{aligned}
$$

$$
\begin{aligned}
Y &= (A + \overline{B})\overline{C} + A\overline{C} \\
 &= A\overline{C} + \overline{B}\,\overline{C} + A\overline{C} && \text{$X(Y+Z)=XY+XZ$}
\end{aligned}
$$

$$
\begin{aligned}
A\overline{C} &= A\overline{B}\,\overline{C} + AB\overline{C} = m_4 + m_6 \\
\overline{B}\,\overline{C} &= \overline{A}\,\overline{B}\,\overline{C} + A\overline{B}\,\overline{C} = m_0 + m_4 \\
A\overline{C} &= A\overline{B}\,\overline{C} + AB\overline{C} = m_4 + m_6 \\
Y &= m_4 + m_6 + m_0 + m_4 + m_4 + m_6 \\
 &= m_0 + m_4 + m_6 && \text{$X+X=X,\ X+Y=Y+X$} \\
 &= \sum m(0,4,6)
\end{aligned}
$$

ใส่ $1$ ที่ช่อง $0,4,6$ นอกนั้นเป็น $0$ แล้วจับลูปของ $0$

@kmap:Y 1,3,5,7 | 2,3
- ลูปสีส้ม (ช่อง $1,3,5,7$) : $C=1$ $\Rightarrow \overline{C}$
- ลูปสีน้ำเงิน (ช่อง $2,3$) : $A=0,\ B=1$ $\Rightarrow (A+\overline{B})$

@method all

เขียนด้วย NOR

$$
\begin{aligned}
Y &= \overline{C}(A + \overline{B}) \\
 &= \overline{\overline{\overline{C}(A + \overline{B})}} && \text{$\overline{\overline{X}}=X$} \\
 &= \overline{C + \overline{A + \overline{B}}} && \text{$\overline{XY}=\overline{X}+\overline{Y},\ \overline{\overline{X}}=X$}
\end{aligned}
$$

$\mathbf{Ans}\quad Y = \overline{C + \overline{A + \overline{B}}}$

## ข้อ 17 ใช้ NOR อย่างเดียว (4)

จงลดรูปสมการต่อไปนี้ แล้วออกแบบวงจรลอจิกบนบอร์ดโดยใช้**เฉพาะเกต NOR** (7402) เท่านั้น ห้ามใช้ชิปชนิดอื่น ถ้าต้องการอินเวอร์เตอร์ให้ต่อสองอินพุตของ NOR เข้าด้วยกัน

$$Y = @expr:Y$$

```lab
outputs: Y
level: medium
Y = expr !(!A | B) | !(A | !C) | A & B & C
only: nor
```

$\mathbf{Sol}^{n}$

@method algebra

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

@method kmap

$$
\begin{aligned}
Y &= \overline{\overline{A} + B} + \overline{A + \overline{C}} + ABC \\
 &= A\overline{B} + \overline{A}C + ABC && \text{$\overline{X+Y}=\overline{X}\,\overline{Y},\ \overline{\overline{X}}=X$}
\end{aligned}
$$

$$
\begin{aligned}
A\overline{B} &= A\overline{B}\,\overline{C} + A\overline{B}C = m_4 + m_5 \\
\overline{A}C &= \overline{A}\,\overline{B}C + \overline{A}BC = m_1 + m_3 \\
ABC &= m_7 \\
Y &= m_4 + m_5 + m_1 + m_3 + m_7 \\
 &= m_1 + m_3 + m_4 + m_5 + m_7 && \text{$X+Y=Y+X$} \\
 &= \sum m(1,3,4,5,7)
\end{aligned}
$$

ใส่ $1$ ที่ช่อง $1,3,4,5,7$ นอกนั้นเป็น $0$ แล้วจับลูปของ $0$

@kmap:Y 0,2 | 2,6
- ลูปสีส้ม (ช่อง $0,2$) : $A=0,\ C=0$ $\Rightarrow (A+C)$
- ลูปสีน้ำเงิน (ช่อง $2,6$) : $B=1,\ C=0$ $\Rightarrow (\overline{B}+C)$

@method all

เขียนด้วย NOR

$$
\begin{aligned}
Y &= A\overline{B} + C \\
 &= (A + C)(\overline{B} + C) && \text{$X+YZ=(X+Y)(X+Z)$} \\
 &= \overline{\overline{(A + C)(\overline{B} + C)}} && \text{$\overline{\overline{X}}=X$} \\
 &= \overline{\overline{A + C} + \overline{\overline{B} + C}} && \text{$\overline{XY}=\overline{X}+\overline{Y}$}
\end{aligned}
$$

$\mathbf{Ans}\quad Y = \overline{\overline{A + C} + \overline{\overline{B} + C}}$

## ข้อ 18 ใช้ NOR อย่างเดียว (5)

จงลดรูปสมการต่อไปนี้ แล้วออกแบบวงจรลอจิกบนบอร์ดโดยใช้**เฉพาะเกต NOR** (7402) เท่านั้น ห้ามใช้ชิปชนิดอื่น

$$Z = @expr:Z$$

```lab
outputs: Z
level: medium
Z = expr ((A | !B) & (!A | C)) | (!B & !C)
only: nor
```

$\mathbf{Sol}^{n}$

@method algebra

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

@method kmap

$$
\begin{aligned}
(A + \overline{B}) &= (A + \overline{B} + C)(A + \overline{B} + \overline{C}) = M_2 M_3 \\
(\overline{A} + C) &= (\overline{A} + B + C)(\overline{A} + \overline{B} + C) = M_4 M_6 \\
(A + \overline{B})(\overline{A} + C) &= M_2 M_3 M_4 M_6 = \prod M(2,3,4,6) = \sum m(0,1,5,7) \\
\overline{B}\,\overline{C} &= \overline{A}\,\overline{B}\,\overline{C} + A\overline{B}\,\overline{C} = m_0 + m_4 \\
Z &= \sum m(0,1,5,7) + m_0 + m_4 \\
 &= \sum m(0,1,4,5,7) && \text{$X+X=X$}
\end{aligned}
$$

ใส่ $1$ ที่ช่อง $0,1,4,5,7$ นอกนั้นเป็น $0$ แล้วจับลูปของ $0$

@kmap:Z 2,3 | 2,6
- ลูปสีส้ม (ช่อง $2,3$) : $A=0,\ B=1$ $\Rightarrow (A+\overline{B})$
- ลูปสีน้ำเงิน (ช่อง $2,6$) : $B=1,\ C=0$ $\Rightarrow (\overline{B}+C)$

@method all

เขียนด้วย NOR

$$
\begin{aligned}
Z &= AC + \overline{B} \\
 &= (A + \overline{B})(C + \overline{B}) && \text{$X+YZ=(X+Y)(X+Z)$} \\
 &= \overline{\overline{(A + \overline{B})(C + \overline{B})}} && \text{$\overline{\overline{X}}=X$} \\
 &= \overline{\overline{A + \overline{B}} + \overline{C + \overline{B}}} && \text{$\overline{XY}=\overline{X}+\overline{Y}$}
\end{aligned}
$$

$\mathbf{Ans}\quad Z = \overline{\overline{A + \overline{B}} + \overline{C + \overline{B}}}$
