# สมการ SOP และ POS

โจทย์ในหมวดนี้ให้สมการในรูป SOP หรือ POS (รวมถึงรูป Σm และ ΠM) ซึ่งยังลดรูปได้ ให้ลดรูปแล้วต่อวงจรบนบอร์ด ถ้าโจทย์สั่งให้ใช้ K-map หรือให้ลดรูปเป็น SOP หรือ POS ให้ทำตามนั้น ถ้าไม่สั่งจะลดรูปด้วยวิธีใดก็ได้ กดดูเฉลยเพื่อดูวิธีทำ คำตอบ และวงจร แล้ววางเฉลยลงบอร์ดได้

## ข้อ 1 SOP แบบแจกแจงครบทุกตัวแปร

จงลดรูปสมการ SOP ต่อไปนี้ แล้วออกแบบวงจรลอจิกบนบอร์ดโดยใช้เกตให้น้อยที่สุด

$$Y = @expr:Y$$

```lab
outputs: Y
Y = expr !A & B & C | !A & B & !C | A & !B & C | A & B & C
```

$\mathbf{Sol}^{n}$

@method algebra

$$
\begin{aligned}
Y &= \overline{A}BC + \overline{A}B\overline{C} + A\overline{B}C + ABC \\
 &= \overline{A}B(C + \overline{C}) + AC(\overline{B} + B) && \text{$X(Y+Z)=XY+XZ$} \\
 &= \overline{A}B\cdot 1 + AC\cdot 1 && \text{$X+\overline{X}=1$} \\
 &= \overline{A}B + AC && \text{$X\cdot 1=X$}
\end{aligned}
$$

@method kmap

$$
\begin{aligned}
\overline{A}BC &= m_3 \\
\overline{A}B\overline{C} &= m_2 \\
A\overline{B}C &= m_5 \\
ABC &= m_7 \\
Y &= m_3 + m_2 + m_5 + m_7 \\
 &= m_2 + m_3 + m_5 + m_7 && \text{$X+Y=Y+X$} \\
 &= \sum m(2,3,5,7)
\end{aligned}
$$

ใส่ $1$ ที่ช่อง $2,3,5,7$ แล้วจับลูปของ $1$

@kmap:Y 2,3 | 5,7
- ลูปสีส้ม (ช่อง $2,3$) : $A=0,\ B=1$ $\Rightarrow \overline{A}B$
- ลูปสีน้ำเงิน (ช่อง $5,7$) : $A=1,\ C=1$ $\Rightarrow AC$

$\mathbf{Ans}\quad Y = \overline{A}B + AC$

## ข้อ 2 ผลบวกของมินเทอม

จงลดรูปฟังก์ชันต่อไปนี้ แล้วออกแบบวงจรลอจิกบนบอร์ดโดยใช้เกตให้น้อยที่สุด

$$Y(A,B,C) = @sum:Y$$

```lab
outputs: Y
Y = m(0,1,4,5,6)
```

$\mathbf{Sol}^{n}$

@method algebra

เขียนมินเทอมของแถว $0,1,4,5,6$ ที่เป็น $1$ รวมกัน

$$
\begin{aligned}
Y &= \overline{A}\,\overline{B}\,\overline{C} + \overline{A}\,\overline{B}C + A\overline{B}\,\overline{C} + A\overline{B}C + AB\overline{C} \\
 &= \overline{A}\,\overline{B}(\overline{C} + C) + A\overline{B}(\overline{C} + C) + AB\overline{C} && \text{$X(Y+Z)=XY+XZ$} \\
 &= \overline{A}\,\overline{B} + A\overline{B} + AB\overline{C} && \text{$X+\overline{X}=1,\ X\cdot 1=X$} \\
 &= (\overline{A} + A)\overline{B} + AB\overline{C} && \text{$X(Y+Z)=XY+XZ$} \\
 &= \overline{B} + AB\overline{C} && \text{$X+\overline{X}=1,\ X\cdot 1=X$} \\
 &= \overline{B} + A\overline{C} && \text{$X+\overline{X}Y=X+Y$}
\end{aligned}
$$

@method kmap

ใส่ $1$ ที่ช่อง $0,1,4,5,6$

@kmap:Y 0,1,4,5 | 4,6
- ลูปสีส้ม (ช่อง $0,1,4,5$) : $B=0$ $\Rightarrow \overline{B}$
- ลูปสีน้ำเงิน (ช่อง $4,6$) : $A=1,\ C=0$ $\Rightarrow A\overline{C}$

$\mathbf{Ans}\quad Y = \overline{B} + A\overline{C}$

## ข้อ 3 ผลคูณของแมกซ์เทอม

จงลดรูปฟังก์ชันต่อไปนี้ในรูป POS แล้วออกแบบวงจรลอจิกบนบอร์ดโดยใช้เกตให้น้อยที่สุด

$$F(A,B,C) = @prod:F$$

```lab
outputs: F
form: pos
F = m(1,2,3,6,7)
```

$\mathbf{Sol}^{n}$

@method algebra

เขียนแมกซ์เทอมของแถว $0,4,5$ ที่เป็น $0$ คูณกัน

$$
\begin{aligned}
F &= (A + B + C)(\overline{A} + B + C)(\overline{A} + B + \overline{C}) \\
 &= (A + B + C)(\overline{A} + B + C)(\overline{A} + B + C)(\overline{A} + B + \overline{C}) && \text{$XX=X$} \\
 &= (B + C + A\overline{A})(\overline{A} + B + C\overline{C}) && \text{$X+YZ=(X+Y)(X+Z),\ X+Y=Y+X$} \\
 &= (B + C + 0)(\overline{A} + B + 0) && \text{$X\overline{X}=0$} \\
 &= (B + C)(\overline{A} + B) && \text{$X+0=X$}
\end{aligned}
$$

@method kmap

$F=\prod M(0,4,5)$ ใส่ $0$ ที่ช่อง $0,4,5$ นอกนั้นเป็น $1$ แล้วจับลูปของ $0$

@kmap:F 0,4 | 4,5
- ลูปสีส้ม (ช่อง $0,4$) : $B=0,\ C=0$ $\Rightarrow (B+C)$
- ลูปสีน้ำเงิน (ช่อง $4,5$) : $A=1,\ B=0$ $\Rightarrow (\overline{A}+B)$

$\mathbf{Ans}\quad F = (B + C)(\overline{A} + B)$

## ข้อ 4 ผลบวกของมินเทอมที่มีค่าไม่สนใจ

จงลดรูปฟังก์ชันต่อไปนี้ แล้วออกแบบวงจรลอจิกบนบอร์ดโดยใช้เกตให้น้อยที่สุด ค่าไม่สนใจ Σd ให้เลือกเป็น 0 หรือ 1 ตามที่ทำให้ลดรูปได้มากที่สุด

$$Y(A,B,C) = @sum:Y$$

```lab
outputs: Y
Y = m(1,2,6) d(3,7)
```

$\mathbf{Sol}^{n}$

ใส่ $1$ ที่ช่อง $1,2,6$ และใส่ $X$ ที่ช่อง $3,7$

@kmap:Y 2,3,6,7 | 1,3
- ลูปสีส้ม (ช่อง $2,3,6,7$ นับ $X$ ที่ช่อง $3,7$ เป็น $1$) : $B=1$ $\Rightarrow B$
- ลูปสีน้ำเงิน (ช่อง $1,3$) : $A=0,\ C=1$ $\Rightarrow \overline{A}C$

$\mathbf{Ans}\quad Y = B + \overline{A}C$

## ข้อ 5 ใช้ NAND อย่างเดียว (1)

จงลดรูปสมการ SOP ต่อไปนี้ แล้วออกแบบวงจรลอจิกบนบอร์ดโดยใช้**เฉพาะเกต NAND** (7400) เท่านั้น ห้ามใช้ชิปชนิดอื่น ถ้าต้องการอินเวอร์เตอร์ให้ต่อสองอินพุตของ NAND เข้าด้วยกัน

$$Y = @expr:Y$$

```lab
outputs: Y
Y = expr A & B | A & !B & C | A & B & !C | !A & B & C
only: nand
```

$\mathbf{Sol}^{n}$

@method algebra

$$
\begin{aligned}
Y &= AB + A\overline{B}C + AB\overline{C} + \overline{A}BC \\
 &= AB + A\overline{B}C + \overline{A}BC && \text{$X+XY=X$} \\
 &= A(B + \overline{B}C) + \overline{A}BC && \text{$X(Y+Z)=XY+XZ$} \\
 &= A(B + C) + \overline{A}BC && \text{$X+\overline{X}Y=X+Y$} \\
 &= AB + AC + \overline{A}BC && \text{$X(Y+Z)=XY+XZ$} \\
 &= AB + C(A + \overline{A}B) && \text{$X(Y+Z)=XY+XZ$} \\
 &= AB + C(A + B) && \text{$X+\overline{X}Y=X+Y$} \\
 &= AB + AC + BC && \text{$X(Y+Z)=XY+XZ$}
\end{aligned}
$$

@method kmap

$$
\begin{aligned}
AB &= AB\overline{C} + ABC = m_6 + m_7 \\
A\overline{B}C &= m_5 \\
AB\overline{C} &= m_6 \\
\overline{A}BC &= m_3 \\
Y &= m_6 + m_7 + m_5 + m_6 + m_3 \\
 &= m_3 + m_5 + m_6 + m_7 && \text{$X+X=X,\ X+Y=Y+X$} \\
 &= \sum m(3,5,6,7)
\end{aligned}
$$

ใส่ $1$ ที่ช่อง $3,5,6,7$ แล้วจับลูปของ $1$

@kmap:Y 6,7 | 5,7 | 3,7
- ลูปสีส้ม (ช่อง $6,7$) : $A=1,\ B=1$ $\Rightarrow AB$
- ลูปสีน้ำเงิน (ช่อง $5,7$) : $A=1,\ C=1$ $\Rightarrow AC$
- ลูปสีเขียว (ช่อง $3,7$) : $B=1,\ C=1$ $\Rightarrow BC$

@method all

เขียนด้วย NAND

$$
\begin{aligned}
Y &= AB + AC + BC \\
 &= \overline{\overline{AB + AC + BC}} && \text{$\overline{\overline{X}}=X$} \\
 &= \overline{\overline{AB}\cdot\overline{AC}\cdot\overline{BC}} && \text{$\overline{X+Y}=\overline{X}\,\overline{Y}$} \\
 &= \overline{(\overline{AB}\cdot\overline{AC})\cdot\overline{BC}} && \text{$XYZ=(XY)Z$} \\
 &= \overline{\overline{\overline{\overline{AB}\cdot\overline{AC}}}\cdot\overline{BC}} && \text{$X=\overline{\overline{X}}$}
\end{aligned}
$$

$\mathbf{Ans}\quad Y = \overline{\overline{\overline{\overline{AB}\cdot\overline{AC}}}\cdot\overline{BC}}$

## ข้อ 6 ใช้ NAND อย่างเดียวและมีค่าไม่สนใจ

จงลดรูปฟังก์ชันต่อไปนี้ แล้วออกแบบวงจรลอจิกบนบอร์ดโดยใช้**เฉพาะเกต NAND** (7400) เท่านั้น ค่าไม่สนใจ Σd ให้เลือกเป็น 0 หรือ 1 ตามที่ทำให้ลดรูปได้มากที่สุด

$$F(A,B,C) = @sum:F$$

```lab
outputs: F
F = m(3,4,6) d(0,2)
only: nand
```

$\mathbf{Sol}^{n}$

ใส่ $1$ ที่ช่อง $3,4,6$ และใส่ $X$ ที่ช่อง $0,2$ แล้วจับลูปของ $1$

@kmap:F 0,2,4,6 | 2,3
- ลูปสีส้ม (ช่อง $0,2,4,6$ นับ $X$ ที่ช่อง $0,2$ เป็น $1$) : $C=0$ $\Rightarrow \overline{C}$
- ลูปสีน้ำเงิน (ช่อง $2,3$ นับ $X$ ที่ช่อง $2$ เป็น $1$) : $A=0,\ B=1$ $\Rightarrow \overline{A}B$

เขียนด้วย NAND

$$
\begin{aligned}
F &= \overline{C} + \overline{A}B \\
 &= \overline{\overline{\overline{C} + \overline{A}B}} && \text{$\overline{\overline{X}}=X$} \\
 &= \overline{\overline{\overline{C}}\cdot\overline{\overline{A}B}} && \text{$\overline{X+Y}=\overline{X}\,\overline{Y}$} \\
 &= \overline{C\,\overline{\overline{A}B}} && \text{$\overline{\overline{X}}=X$}
\end{aligned}
$$

$\mathbf{Ans}\quad F = \overline{C\,\overline{\overline{A}B}}$

## ข้อ 7 ใช้ NOR อย่างเดียว (1)

จงลดรูปสมการ POS ต่อไปนี้ แล้วออกแบบวงจรลอจิกบนบอร์ดโดยใช้**เฉพาะเกต NOR** (7402) เท่านั้น ห้ามใช้ชิปชนิดอื่น ถ้าต้องการอินเวอร์เตอร์ให้ต่อสองอินพุตของ NOR เข้าด้วยกัน

$$Y = @expr:Y$$

```lab
outputs: Y
Y = expr (A | C) & (B | !C) & (A | B)
only: nor
```

$\mathbf{Sol}^{n}$

@method algebra

$$
\begin{aligned}
Y &= (A + C)(B + \overline{C})(A + B) \\
 &= (A + C)(B + \overline{C})(A + B + C\overline{C}) && \text{$X\overline{X}=0,\ X+0=X$} \\
 &= (A + C)(B + \overline{C})(A + B + C)(A + B + \overline{C}) && \text{$X+YZ=(X+Y)(X+Z)$} \\
 &= (A + C)(A + B + C)(B + \overline{C})(A + B + \overline{C}) && \text{$XY=YX$} \\
 &= (A + C)(B + \overline{C}) && \text{$X(X+Y)=X$}
\end{aligned}
$$

@method kmap

$$
\begin{aligned}
A + C &= (A + B + C)(A + \overline{B} + C) = M_0 M_2 \\
B + \overline{C} &= (A + B + \overline{C})(\overline{A} + B + \overline{C}) = M_1 M_5 \\
A + B &= (A + B + C)(A + B + \overline{C}) = M_0 M_1 \\
Y &= M_0 M_2 \cdot M_1 M_5 \cdot M_0 M_1 \\
 &= M_0 M_1 M_2 M_5 && \text{$XX=X$} \\
 &= \prod M(0,1,2,5)
\end{aligned}
$$

ใส่ $0$ ที่ช่อง $0,1,2,5$ นอกนั้นเป็น $1$ แล้วจับลูปของ $0$

@kmap:Y 0,2 | 1,5
- ลูปสีส้ม (ช่อง $0,2$) : $A=0,\ C=0$ $\Rightarrow (A+C)$
- ลูปสีน้ำเงิน (ช่อง $1,5$) : $B=0,\ C=1$ $\Rightarrow (B+\overline{C})$

@method all

เขียนด้วย NOR

$$
\begin{aligned}
Y &= (A + C)(B + \overline{C}) \\
 &= \overline{\overline{(A + C)(B + \overline{C})}} && \text{$\overline{\overline{X}}=X$} \\
 &= \overline{\overline{A + C} + \overline{B + \overline{C}}} && \text{$\overline{XY}=\overline{X}+\overline{Y}$}
\end{aligned}
$$

$\mathbf{Ans}\quad Y = \overline{\overline{A + C} + \overline{B + \overline{C}}}$

## ข้อ 8 ใช้ NOR อย่างเดียว สองเอาต์พุต

จงลดรูปฟังก์ชันทั้งสองต่อไปนี้ แล้วออกแบบวงจรลอจิกบนบอร์ดที่ให้ทั้ง X และ Y โดยใช้**เฉพาะเกต NOR** (7402) เท่านั้น (เกตที่ใช้ร่วมกันนับครั้งเดียว)

$$X(A,B,C) = @sum:X$$

$$Y(A,B,C) = @prod:Y$$

```lab
outputs: X, Y
X = m(1,2,3)
Y = m(0,1,3,4)
only: nor
```

$\mathbf{Sol}^{n}$

@method algebra

เขียนมินเทอมของแถว $1,2,3$ ของ $X$ และแถว $0,1,3,4$ ของ $Y$ รวมกัน

$$
\begin{aligned}
X &= \overline{A}\,\overline{B}C + \overline{A}B\overline{C} + \overline{A}BC \\
 &= \overline{A}\,\overline{B}C + \overline{A}B\overline{C} + \overline{A}BC + \overline{A}BC && \text{$X+X=X$} \\
 &= \overline{A}(\overline{B} + B)C + \overline{A}B(\overline{C} + C) && \text{$X(Y+Z)=XY+XZ$} \\
 &= \overline{A}C + \overline{A}B && \text{$X+\overline{X}=1,\ X\cdot 1=X$}
\end{aligned}
$$

$$
\begin{aligned}
Y &= \overline{A}\,\overline{B}\,\overline{C} + \overline{A}\,\overline{B}C + \overline{A}BC + A\overline{B}\,\overline{C} \\
 &= (\overline{A} + A)\overline{B}\,\overline{C} + \overline{A}(\overline{B} + B)C && \text{$X(Y+Z)=XY+XZ,\ X+Y=Y+X$} \\
 &= \overline{B}\,\overline{C} + \overline{A}C && \text{$X+\overline{X}=1,\ X\cdot 1=X$}
\end{aligned}
$$

@method kmap

ใส่ $1$ ที่ช่อง $1,2,3$ ของ $X$ และช่อง $0,1,3,4$ ของ $Y$

@kmap:X 1,3 | 2,3
@kmap:Y 0,4 | 1,3
- $X$ ลูปสีส้ม (ช่อง $1,3$) : $A=0,\ C=1$ $\Rightarrow \overline{A}C$
- $X$ ลูปสีน้ำเงิน (ช่อง $2,3$) : $A=0,\ B=1$ $\Rightarrow \overline{A}B$
- $Y$ ลูปสีส้ม (ช่อง $0,4$) : $B=0,\ C=0$ $\Rightarrow \overline{B}\,\overline{C}$
- $Y$ ลูปสีน้ำเงิน (ช่อง $1,3$) : $A=0,\ C=1$ $\Rightarrow \overline{A}C$

@method all

เขียนด้วย NOR

$$
\begin{aligned}
X &= \overline{A}B + \overline{A}C \\
 &= \overline{A}(B + C) && \text{$X(Y+Z)=XY+XZ$} \\
 &= \overline{\overline{\overline{A}(B + C)}} && \text{$\overline{\overline{X}}=X$} \\
 &= \overline{A + \overline{B + C}} && \text{$\overline{XY}=\overline{X}+\overline{Y},\ \overline{\overline{X}}=X$}
\end{aligned}
$$

$$
\begin{aligned}
Y &= \overline{B}\,\overline{C} + \overline{A}C \\
 &= \overline{B + C} + \overline{A + \overline{C}} && \text{$\overline{X+Y}=\overline{X}\,\overline{Y},\ \overline{\overline{X}}=X$} \\
 &= \overline{\overline{\overline{B + C} + \overline{A + \overline{C}}}} && \text{$\overline{\overline{X}}=X$}
\end{aligned}
$$

$\mathbf{Ans}\quad X = \overline{A + \overline{B + C}}$

$\mathbf{Ans}\quad Y = \overline{\overline{\overline{B + C} + \overline{A + \overline{C}}}}$
