# ตารางความจริง

โจทย์ในหมวดนี้ให้ตารางความจริงของวงจรคอมบิเนชัน ให้เขียนสมการ ลดรูป แล้วต่อวงจรบนบอร์ด ถ้าโจทย์สั่งให้เขียนเป็น SOP หรือ POS ให้ทำตามนั้น ถ้าไม่สั่งจะใช้แบบไหนก็ได้ ช่องที่เป็น X คือค่าไม่สนใจ (Don't care) จะกำหนดให้เป็น 0 หรือ 1 ก็ได้ กดดูเฉลยเพื่อดูวิธีทำ คำตอบ และวงจร แล้ววางเฉลยลงบอร์ดได้

## ข้อ 1 อ่านตารางที่มี 1 สองช่อง

จากตารางความจริงต่อไปนี้ จงเขียนสมการของเอาต์พุต Y ลดรูป และออกแบบวงจรลอจิกบนบอร์ดโดยใช้เกตให้น้อยที่สุด (จะเขียนเป็น SOP หรือ POS ก็ได้)

@table

```lab
outputs: Y
level: easy
Y = m(4,6)
```

$\mathbf{Sol}^{n}$

@method algebra

เขียนมินเทอมของแถว $4,6$ ที่เป็น $1$ รวมกัน

$$
\begin{aligned}
Y &= A\overline{B}\,\overline{C} + AB\overline{C} \\
 &= A\overline{C}(\overline{B} + B) && \text{$X(Y+Z)=XY+XZ$} \\
 &= A\overline{C} && \text{$X+\overline{X}=1,\ X\cdot 1=X$}
\end{aligned}
$$

@method kmap

ใส่ $1$ ที่ช่อง $4,6$ แล้วจับลูปของ $1$

@kmap:Y 4,6
- ลูปสีส้ม (ช่อง $4,6$) : $A=1,\ C=0$ $\Rightarrow A\overline{C}$

$\mathbf{Ans}\quad Y = A\overline{C}$

## ข้อ 2 เขียนในรูป POS และมีค่าไม่สนใจ

จากตารางความจริงต่อไปนี้ จงเขียนสมการของเอาต์พุต Y ในรูป POS ลดรูปด้วย K-map แล้วออกแบบวงจรลอจิกบนบอร์ดโดยใช้เกตให้น้อยที่สุด ช่อง X คือค่าไม่สนใจ ให้เลือกค่าที่ทำให้ลดรูปได้มากที่สุด

@table

```lab
outputs: Y
level: easy
form: pos
Y = m(1,3,6) d(2,5)
```

$\mathbf{Sol}^{n}$

ใส่ $1$ ที่ช่อง $1,3,6$ ใส่ $X$ ที่ช่อง $2,5$ และใส่ $0$ ที่ช่อง $0,4,7$ แล้วจับลูปของ $0$

@kmap:Y 0,4 | 5,7
- ลูปสีส้ม (ช่อง $0,4$) : $B=0,\ C=0$ $\Rightarrow (B+C)$
- ลูปสีน้ำเงิน (ช่อง $5,7$ นับ $X$ ที่ช่อง $5$ เป็น $0$) : $A=1,\ C=1$ $\Rightarrow (\overline{A}+\overline{C})$

ช่อง $2$ (ค่าไม่สนใจ) ไม่ต้องครอบ

$\mathbf{Ans}\quad Y = (B + C)(\overline{A} + \overline{C})$

## ข้อ 3 สองเอาต์พุตจากตารางเดียว

จากตารางความจริงต่อไปนี้ จงลดรูปสมการของ X และ Y แล้วออกแบบวงจรลอจิกบนบอร์ดที่ให้ทั้งสองเอาต์พุตโดยใช้เกตรวมกันให้น้อยที่สุด (เกตที่ใช้ร่วมกันนับครั้งเดียว)

@table

```lab
outputs: X, Y
level: easy
X = m(3,5,6,7)
Y = m(5,6,7)
```

$\mathbf{Sol}^{n}$

@method algebra

เขียนมินเทอมของแถว $3,5,6,7$ ของ $X$ และแถว $5,6,7$ ของ $Y$ รวมกัน

$$
\begin{aligned}
X &= \overline{A}BC + A\overline{B}C + AB\overline{C} + ABC \\
 &= \overline{A}BC + A\overline{B}C + AB\overline{C} + ABC + ABC + ABC && \text{$X+X=X$} \\
 &= (\overline{A} + A)BC + A(\overline{B} + B)C + AB(\overline{C} + C) && \text{$X(Y+Z)=XY+XZ$} \\
 &= BC + AC + AB && \text{$X+\overline{X}=1,\ X\cdot 1=X$}
\end{aligned}
$$

$$
\begin{aligned}
Y &= A\overline{B}C + AB\overline{C} + ABC \\
 &= A\overline{B}C + AB\overline{C} + ABC + ABC && \text{$X+X=X$} \\
 &= A(\overline{B} + B)C + AB(\overline{C} + C) && \text{$X(Y+Z)=XY+XZ$} \\
 &= AC + AB && \text{$X+\overline{X}=1,\ X\cdot 1=X$}
\end{aligned}
$$

@method kmap

ใส่ $1$ ที่ช่อง $3,5,6,7$ ของ $X$ และช่อง $5,6,7$ ของ $Y$

@kmap:X 3,7 | 5,7 | 6,7
@kmap:Y 5,7 | 6,7
- $X$ ลูปสีส้ม (ช่อง $3,7$) : $B=1,\ C=1$ $\Rightarrow BC$
- $X$ ลูปสีน้ำเงิน (ช่อง $5,7$) : $A=1,\ C=1$ $\Rightarrow AC$
- $X$ ลูปสีเขียว (ช่อง $6,7$) : $A=1,\ B=1$ $\Rightarrow AB$
- $Y$ ลูปสีส้ม (ช่อง $5,7$) : $A=1,\ C=1$ $\Rightarrow AC$
- $Y$ ลูปสีน้ำเงิน (ช่อง $6,7$) : $A=1,\ B=1$ $\Rightarrow AB$

$\mathbf{Ans}\quad X = BC + AC + AB$

$\mathbf{Ans}\quad Y = AC + AB$

## ข้อ 4 อ่านตารางที่มี 1 หกช่อง

จากตารางความจริงต่อไปนี้ จงเขียนสมการของเอาต์พุต F ลดรูป และออกแบบวงจรลอจิกบนบอร์ดโดยใช้เกตให้น้อยที่สุด (จะเขียนเป็น SOP หรือ POS ก็ได้)

@table

```lab
outputs: F
level: easy
F = m(0,1,2,3,4,5)
```

$\mathbf{Sol}^{n}$

@method algebra

เขียนแมกซ์เทอมของแถว $6,7$ ที่เป็น $0$ คูณกัน

$$
\begin{aligned}
F &= (\overline{A} + \overline{B} + C)(\overline{A} + \overline{B} + \overline{C}) \\
 &= (\overline{A} + \overline{B} + C\overline{C}) && \text{$X+YZ=(X+Y)(X+Z)$} \\
 &= (\overline{A} + \overline{B} + 0) && \text{$X\overline{X}=0$} \\
 &= (\overline{A} + \overline{B}) && \text{$X+0=X$}
\end{aligned}
$$

@method kmap

ใส่ $1$ ที่ช่อง $0,1,2,3,4,5$ แล้วจับลูปของ $1$

@kmap:F 0,1,2,3 | 0,1,4,5
- ลูปสีส้ม (ช่อง $0,1,2,3$) : $A=0$ $\Rightarrow \overline{A}$
- ลูปสีน้ำเงิน (ช่อง $0,1,4,5$) : $B=0$ $\Rightarrow \overline{B}$

$\mathbf{Ans}\quad F = \overline{A} + \overline{B}$

## ข้อ 5 เขียนในรูป POS ที่ต้องใช้แมกซ์เทอมซ้ำ

จากตารางความจริงต่อไปนี้ จงเขียนสมการของเอาต์พุต F ในรูป POS ลดรูป แล้วออกแบบวงจรลอจิกบนบอร์ดโดยใช้เกตให้น้อยที่สุด

@table

```lab
outputs: F
level: medium
form: pos
F = m(0,2,4,5,6)
```

$\mathbf{Sol}^{n}$

@method algebra

เขียนแมกซ์เทอมของแถว $1,3,7$ ที่เป็น $0$ คูณกัน

$$
\begin{aligned}
F &= (A + B + \overline{C})(A + \overline{B} + \overline{C})(\overline{A} + \overline{B} + \overline{C}) \\
 &= (A + B + \overline{C})(A + \overline{B} + \overline{C})(A + \overline{B} + \overline{C})(\overline{A} + \overline{B} + \overline{C}) && \text{$XX=X$} \\
 &= (A + \overline{C} + B\overline{B})(\overline{B} + \overline{C} + A\overline{A}) && \text{$X+YZ=(X+Y)(X+Z),\ X+Y=Y+X$} \\
 &= (A + \overline{C} + 0)(\overline{B} + \overline{C} + 0) && \text{$X\overline{X}=0$} \\
 &= (A + \overline{C})(\overline{B} + \overline{C}) && \text{$X+0=X$}
\end{aligned}
$$

@method kmap

ใส่ $0$ ที่ช่อง $1,3,7$ นอกนั้นเป็น $1$ แล้วจับลูปของ $0$

@kmap:F 1,3 | 3,7
- ลูปสีส้ม (ช่อง $1,3$) : $A=0,\ C=1$ $\Rightarrow (A+\overline{C})$
- ลูปสีน้ำเงิน (ช่อง $3,7$) : $B=1,\ C=1$ $\Rightarrow (\overline{B}+\overline{C})$

$\mathbf{Ans}\quad F = (A + \overline{C})(\overline{B} + \overline{C})$

## ข้อ 6 เขียนในรูป SOP

จากตารางความจริงต่อไปนี้ จงเขียนสมการของเอาต์พุต F ในรูป SOP ลดรูป แล้วออกแบบวงจรลอจิกบนบอร์ดโดยใช้เกตให้น้อยที่สุด

@table

```lab
outputs: F
level: medium
form: sop
F = m(1,2,3,5,7)
```

$\mathbf{Sol}^{n}$

@method algebra

เขียนมินเทอมของแถว $1,2,3,5,7$ ที่เป็น $1$ รวมกัน

$$
\begin{aligned}
F &= \overline{A}\,\overline{B}C + \overline{A}B\overline{C} + \overline{A}BC + A\overline{B}C + ABC \\
 &= (\overline{A} + A)\overline{B}C + \overline{A}B\overline{C} + (\overline{A} + A)BC && \text{$X(Y+Z)=XY+XZ$} \\
 &= \overline{B}C + \overline{A}B\overline{C} + BC && \text{$X+\overline{X}=1,\ X\cdot 1=X$} \\
 &= (\overline{B} + B)C + \overline{A}B\overline{C} && \text{$X(Y+Z)=XY+XZ$} \\
 &= C + \overline{A}B\overline{C} && \text{$X+\overline{X}=1,\ X\cdot 1=X$} \\
 &= C + \overline{A}B && \text{$X+\overline{X}Y=X+Y$}
\end{aligned}
$$

@method kmap

ใส่ $1$ ที่ช่อง $1,2,3,5,7$

@kmap:F 1,3,5,7 | 2,3
- ลูปสีส้ม (ช่อง $1,3,5,7$) : $C=1$ $\Rightarrow C$
- ลูปสีน้ำเงิน (ช่อง $2,3$) : $A=0,\ B=1$ $\Rightarrow \overline{A}B$

$\mathbf{Ans}\quad F = C + \overline{A}B$

## ข้อ 7 อ่านตารางแล้วลดรูป

จากตารางความจริงต่อไปนี้ จงเขียนสมการของเอาต์พุต Y ลดรูป และออกแบบวงจรลอจิกบนบอร์ดโดยใช้เกตให้น้อยที่สุด (จะเขียนเป็น SOP หรือ POS ก็ได้)

@table

```lab
outputs: Y
level: medium
Y = m(0,1,2,3,7)
```

$\mathbf{Sol}^{n}$

@method algebra

เขียนแมกซ์เทอมของแถว $4,5,6$ ที่เป็น $0$ คูณกัน

$$
\begin{aligned}
Y &= (\overline{A} + B + C)(\overline{A} + B + \overline{C})(\overline{A} + \overline{B} + C) \\
 &= (\overline{A} + B + C\overline{C})(\overline{A} + \overline{B} + C) && \text{$X+YZ=(X+Y)(X+Z)$} \\
 &= (\overline{A} + B + 0)(\overline{A} + \overline{B} + C) && \text{$X\overline{X}=0$} \\
 &= (\overline{A} + B)(\overline{A} + \overline{B} + C) && \text{$X+0=X$} \\
 &= \overline{A} + B(\overline{B} + C) && \text{$X+YZ=(X+Y)(X+Z)$} \\
 &= \overline{A} + B\overline{B} + BC && \text{$X(Y+Z)=XY+XZ$} \\
 &= \overline{A} + 0 + BC && \text{$X\overline{X}=0$} \\
 &= \overline{A} + BC && \text{$X+0=X$}
\end{aligned}
$$

@method kmap

ใส่ $1$ ที่ช่อง $0,1,2,3,7$

@kmap:Y 0,1,2,3 | 3,7
- ลูปสีส้ม (ช่อง $0,1,2,3$) : $A=0$ $\Rightarrow \overline{A}$
- ลูปสีน้ำเงิน (ช่อง $3,7$) : $B=1,\ C=1$ $\Rightarrow BC$

$\mathbf{Ans}\quad Y = \overline{A} + BC$

## ข้อ 8 ใช้ NAND อย่างเดียวที่ลดเหลือสองเทอม

จากตารางความจริงต่อไปนี้ จงลดรูปสมการของ Y แล้วออกแบบวงจรลอจิกบนบอร์ดโดยใช้**เฉพาะเกต NAND** (7400) เท่านั้น ห้ามใช้ชิปชนิดอื่น ถ้าต้องการอินเวอร์เตอร์ให้ต่อสองอินพุตของ NAND เข้าด้วยกัน

@table

```lab
outputs: Y
level: easy
Y = m(1,3,4,5)
only: nand
```

$\mathbf{Sol}^{n}$

@method algebra

เขียนมินเทอมของแถว $1,3,4,5$ ที่เป็น $1$ รวมกัน

$$
\begin{aligned}
Y &= \overline{A}\,\overline{B}C + \overline{A}BC + A\overline{B}\,\overline{C} + A\overline{B}C \\
 &= \overline{A}(\overline{B} + B)C + A\overline{B}(\overline{C} + C) && \text{$X(Y+Z)=XY+XZ$} \\
 &= \overline{A}C + A\overline{B} && \text{$X+\overline{X}=1,\ X\cdot 1=X$}
\end{aligned}
$$

@method kmap

ใส่ $1$ ที่ช่อง $1,3,4,5$

@kmap:Y 1,3 | 4,5
- ลูปสีส้ม (ช่อง $1,3$) : $A=0,\ C=1$ $\Rightarrow \overline{A}C$
- ลูปสีน้ำเงิน (ช่อง $4,5$) : $A=1,\ B=0$ $\Rightarrow A\overline{B}$

@method all

เขียนด้วย NAND

$$
\begin{aligned}
Y &= \overline{A}C + A\overline{B} \\
 &= \overline{\overline{\overline{A}C + A\overline{B}}} && \text{$\overline{\overline{X}}=X$} \\
 &= \overline{\overline{\overline{A}C}\cdot\overline{A\overline{B}}} && \text{$\overline{X+Y}=\overline{X}\,\overline{Y}$}
\end{aligned}
$$

$\mathbf{Ans}\quad Y = \overline{\overline{\overline{A}C}\cdot\overline{A\overline{B}}}$

## ข้อ 9 ใช้ NAND อย่างเดียวและมีค่าไม่สนใจ

จากตารางความจริงต่อไปนี้ จงลดรูปสมการของ F แล้วออกแบบวงจรลอจิกบนบอร์ดโดยใช้**เฉพาะเกต NAND** (7400) เท่านั้น ช่อง X คือค่าไม่สนใจ ให้เลือกค่าที่ทำให้ลดรูปได้มากที่สุด

@table

```lab
outputs: F
level: easy
F = m(2,3,6) d(0,4)
only: nand
```

$\mathbf{Sol}^{n}$

ใส่ $1$ ที่ช่อง $2,3,6$ และใส่ $X$ ที่ช่อง $0,4$ แล้วจับลูปของ $1$

@kmap:F 0,2,4,6 | 2,3
- ลูปสีส้ม (ช่อง $0,2,4,6$ นับ $X$ ที่ช่อง $0,4$ เป็น $1$) : $C=0$ $\Rightarrow \overline{C}$
- ลูปสีน้ำเงิน (ช่อง $2,3$) : $A=0,\ B=1$ $\Rightarrow \overline{A}B$

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

## ข้อ 10 ใช้ NAND อย่างเดียวและมีค่าไม่สนใจหนึ่งช่อง

จากตารางความจริงต่อไปนี้ จงลดรูปสมการของ Y แล้วออกแบบวงจรลอจิกบนบอร์ดโดยใช้**เฉพาะเกต NAND** (7400) เท่านั้น ห้ามใช้ชิปชนิดอื่น ถ้าต้องการอินเวอร์เตอร์ให้ต่อสองอินพุตของ NAND เข้าด้วยกัน ช่อง X คือค่าไม่สนใจ ให้เลือกค่าที่ทำให้ลดรูปได้มากที่สุด

@table

```lab
outputs: Y
level: easy
Y = m(0,5) d(4)
only: nand
```

$\mathbf{Sol}^{n}$

ใส่ $1$ ที่ช่อง $0,5$ และใส่ $X$ ที่ช่อง $4$ แล้วจับลูปของ $1$

@kmap:Y 0,4 | 4,5
- ลูปสีส้ม (ช่อง $0,4$ นับ $X$ ที่ช่อง $4$ เป็น $1$) : $B=0,\ C=0$ $\Rightarrow \overline{B}\,\overline{C}$
- ลูปสีน้ำเงิน (ช่อง $4,5$ นับ $X$ ที่ช่อง $4$ เป็น $1$) : $A=1,\ B=0$ $\Rightarrow A\overline{B}$

เขียนด้วย NAND

$$
\begin{aligned}
Y &= \overline{B}\,\overline{C} + A\overline{B} \\
 &= \overline{\overline{\overline{B}\,\overline{C} + A\overline{B}}} && \text{$\overline{\overline{X}}=X$} \\
 &= \overline{\overline{\overline{B}\,\overline{C}}\cdot\overline{A\overline{B}}} && \text{$\overline{X+Y}=\overline{X}\,\overline{Y}$}
\end{aligned}
$$

$\mathbf{Ans}\quad Y = \overline{\overline{\overline{B}\,\overline{C}}\cdot\overline{A\overline{B}}}$

## ข้อ 11 ใช้ NAND อย่างเดียว สองเอาต์พุตที่ใช้เกตร่วมกัน

จากตารางความจริงต่อไปนี้ จงลดรูปสมการของ X และ Y แล้วออกแบบวงจรลอจิกบนบอร์ดที่ให้ทั้งสองเอาต์พุตโดยใช้**เฉพาะเกต NAND** (7400) เท่านั้น (เกตที่ใช้ร่วมกันนับครั้งเดียว)

@table

```lab
outputs: X, Y
level: easy
X = m(3,6,7)
Y = m(6,7)
only: nand
```

$\mathbf{Sol}^{n}$

@method algebra

เขียนมินเทอมของแถว $3,6,7$ ของ $X$ และแถว $6,7$ ของ $Y$ รวมกัน

$$
\begin{aligned}
X &= \overline{A}BC + AB\overline{C} + ABC \\
 &= \overline{A}BC + AB\overline{C} + ABC + ABC && \text{$X+X=X$} \\
 &= (\overline{A} + A)BC + AB(\overline{C} + C) && \text{$X(Y+Z)=XY+XZ$} \\
 &= BC + AB && \text{$X+\overline{X}=1,\ X\cdot 1=X$}
\end{aligned}
$$

$$
\begin{aligned}
Y &= AB\overline{C} + ABC \\
 &= AB(\overline{C} + C) && \text{$X(Y+Z)=XY+XZ$} \\
 &= AB && \text{$X+\overline{X}=1,\ X\cdot 1=X$}
\end{aligned}
$$

@method kmap

ใส่ $1$ ที่ช่อง $3,6,7$ ของ $X$ และช่อง $6,7$ ของ $Y$ แล้วจับลูปของ $1$

@kmap:X 3,7 | 6,7
@kmap:Y 6,7
- $X$ ลูปสีส้ม (ช่อง $3,7$) : $B=1,\ C=1$ $\Rightarrow BC$
- $X$ ลูปสีน้ำเงิน (ช่อง $6,7$) : $A=1,\ B=1$ $\Rightarrow AB$
- $Y$ ลูปสีส้ม (ช่อง $6,7$) : $A=1,\ B=1$ $\Rightarrow AB$

@method all

เขียนด้วย NAND

$$
\begin{aligned}
X &= BC + AB \\
 &= \overline{\overline{BC + AB}} && \text{$\overline{\overline{X}}=X$} \\
 &= \overline{\overline{BC}\cdot\overline{AB}} && \text{$\overline{X+Y}=\overline{X}\,\overline{Y}$}
\end{aligned}
$$

$$
\begin{aligned}
Y &= AB \\
 &= \overline{\overline{AB}} && \text{$\overline{\overline{X}}=X$}
\end{aligned}
$$

$\mathbf{Ans}\quad X = \overline{\overline{BC}\cdot\overline{AB}}$

$\mathbf{Ans}\quad Y = \overline{\overline{AB}}$

## ข้อ 12 ใช้ NAND อย่างเดียวที่ต้องใช้แมกซ์เทอมซ้ำ

จากตารางความจริงต่อไปนี้ จงลดรูปสมการของ Y แล้วออกแบบวงจรลอจิกบนบอร์ดโดยใช้**เฉพาะเกต NAND** (7400) เท่านั้น ห้ามใช้ชิปชนิดอื่น ถ้าต้องการอินเวอร์เตอร์ให้ต่อสองอินพุตของ NAND เข้าด้วยกัน

@table

```lab
outputs: Y
level: medium
Y = m(0,4,5,6,7)
only: nand
```

$\mathbf{Sol}^{n}$

@method algebra

เขียนแมกซ์เทอมของแถว $1,2,3$ ที่เป็น $0$ คูณกัน

$$
\begin{aligned}
Y &= (A + B + \overline{C})(A + \overline{B} + C)(A + \overline{B} + \overline{C}) \\
 &= (A + B + \overline{C})(A + \overline{B} + \overline{C})(A + \overline{B} + C)(A + \overline{B} + \overline{C}) && \text{$XX=X,\ XY=YX$} \\
 &= (A + \overline{C} + B\overline{B})(A + \overline{B} + C\overline{C}) && \text{$X+YZ=(X+Y)(X+Z),\ X+Y=Y+X$} \\
 &= (A + \overline{C} + 0)(A + \overline{B} + 0) && \text{$X\overline{X}=0$} \\
 &= (A + \overline{C})(A + \overline{B}) && \text{$X+0=X$} \\
 &= A + \overline{B}\,\overline{C} && \text{$X+YZ=(X+Y)(X+Z),\ XY=YX$}
\end{aligned}
$$

@method kmap

ใส่ $1$ ที่ช่อง $0,4,5,6,7$ แล้วจับลูปของ $1$

@kmap:Y 4,5,6,7 | 0,4
- ลูปสีส้ม (ช่อง $4,5,6,7$) : $A=1$ $\Rightarrow A$
- ลูปสีน้ำเงิน (ช่อง $0,4$) : $B=0,\ C=0$ $\Rightarrow \overline{B}\,\overline{C}$

@method all

เขียนด้วย NAND

$$
\begin{aligned}
Y &= A + \overline{B}\,\overline{C} \\
 &= \overline{\overline{A + \overline{B}\,\overline{C}}} && \text{$\overline{\overline{X}}=X$} \\
 &= \overline{\overline{A}\cdot\overline{\overline{B}\,\overline{C}}} && \text{$\overline{X+Y}=\overline{X}\,\overline{Y}$}
\end{aligned}
$$

$\mathbf{Ans}\quad Y = \overline{\overline{A}\cdot\overline{\overline{B}\,\overline{C}}}$

## ข้อ 13 ใช้ NOR อย่างเดียวที่เหลือเกตเดียว

จากตารางความจริงต่อไปนี้ จงลดรูปสมการของ Y แล้วออกแบบวงจรลอจิกบนบอร์ดโดยใช้**เฉพาะเกต NOR** (7402) เท่านั้น ห้ามใช้ชิปชนิดอื่น ถ้าต้องการอินเวอร์เตอร์ให้ต่อสองอินพุตของ NOR เข้าด้วยกัน

@table

```lab
outputs: Y
level: easy
Y = m(0,2)
only: nor
```

$\mathbf{Sol}^{n}$

@method algebra

เขียนมินเทอมของแถว $0,2$ ที่เป็น $1$ รวมกัน

$$
\begin{aligned}
Y &= \overline{A}\,\overline{B}\,\overline{C} + \overline{A}B\overline{C} \\
 &= \overline{A}\,\overline{C}(\overline{B} + B) && \text{$X(Y+Z)=XY+XZ$} \\
 &= \overline{A}\,\overline{C} && \text{$X+\overline{X}=1,\ X\cdot 1=X$}
\end{aligned}
$$

@method kmap

ใส่ $1$ ที่ช่อง $0,2$ แล้วจับลูปของ $1$

@kmap:Y 0,2
- ลูปสีส้ม (ช่อง $0,2$) : $A=0,\ C=0$ $\Rightarrow \overline{A}\,\overline{C}$

@method all

เขียนด้วย NOR

$$
\begin{aligned}
Y &= \overline{A}\,\overline{C} \\
 &= \overline{A + C} && \text{$\overline{X+Y}=\overline{X}\,\overline{Y}$}
\end{aligned}
$$

$\mathbf{Ans}\quad Y = \overline{A + C}$

## ข้อ 14 ใช้ NOR อย่างเดียวที่ลดเหลือสองวงเล็บ

จากตารางความจริงต่อไปนี้ จงลดรูปสมการของ Y แล้วออกแบบวงจรลอจิกบนบอร์ดโดยใช้**เฉพาะเกต NOR** (7402) เท่านั้น ห้ามใช้ชิปชนิดอื่น ถ้าต้องการอินเวอร์เตอร์ให้ต่อสองอินพุตของ NOR เข้าด้วยกัน

@table

```lab
outputs: Y
level: easy
Y = m(1,2,3,5)
only: nor
```

$\mathbf{Sol}^{n}$

@method algebra

เขียนแมกซ์เทอมของแถว $0,4,6,7$ ที่เป็น $0$ คูณกัน

$$
\begin{aligned}
Y &= (A + B + C)(\overline{A} + B + C)(\overline{A} + \overline{B} + C)(\overline{A} + \overline{B} + \overline{C}) \\
 &= (B + C + A\overline{A})(\overline{A} + \overline{B} + C\overline{C}) && \text{$X+YZ=(X+Y)(X+Z),\ X+Y=Y+X$} \\
 &= (B + C + 0)(\overline{A} + \overline{B} + 0) && \text{$X\overline{X}=0$} \\
 &= (B + C)(\overline{A} + \overline{B}) && \text{$X+0=X$}
\end{aligned}
$$

@method kmap

ใส่ $0$ ที่ช่อง $0,4,6,7$ แล้วจับลูปของ $0$

@kmap:Y 0,4 | 6,7
- ลูปสีส้ม (ช่อง $0,4$) : $B=0,\ C=0$ $\Rightarrow (B+C)$
- ลูปสีน้ำเงิน (ช่อง $6,7$) : $A=1,\ B=1$ $\Rightarrow (\overline{A}+\overline{B})$

@method all

เขียนด้วย NOR

$$
\begin{aligned}
Y &= (B + C)(\overline{A} + \overline{B}) \\
 &= \overline{\overline{(B + C)(\overline{A} + \overline{B})}} && \text{$\overline{\overline{X}}=X$} \\
 &= \overline{\overline{B + C} + \overline{\overline{A} + \overline{B}}} && \text{$\overline{XY}=\overline{X}+\overline{Y}$}
\end{aligned}
$$

$\mathbf{Ans}\quad Y = \overline{\overline{B + C} + \overline{\overline{A} + \overline{B}}}$

## ข้อ 15 ใช้ NOR อย่างเดียว สองเอาต์พุตและมีค่าไม่สนใจ

จากตารางความจริงต่อไปนี้ จงลดรูปสมการของ X และ Y แล้วออกแบบวงจรลอจิกบนบอร์ดที่ให้ทั้งสองเอาต์พุตโดยใช้**เฉพาะเกต NOR** (7402) เท่านั้น ช่อง X คือค่าไม่สนใจ (เกตที่ใช้ร่วมกันนับครั้งเดียว)

@table

```lab
outputs: X, Y
level: medium
X = m(3,4,6) d(7)
Y = m(0,3,4) d(2,5)
only: nor
```

$\mathbf{Sol}^{n}$

ใส่ $1$ ที่ช่อง $3,4,6$ และ $X$ ที่ช่อง $7$ ของ $X$ ใส่ $1$ ที่ช่อง $0,3,4$ และ $X$ ที่ช่อง $2,5$ ของ $Y$ แล้วจับลูปของ $0$

@kmap:X 0,2 | 1,5
@kmap:Y 1,5 | 6,7
- $X$ ลูปสีส้ม (ช่อง $0,2$) : $A=0,\ C=0$ $\Rightarrow (A+C)$
- $X$ ลูปสีน้ำเงิน (ช่อง $1,5$) : $B=0,\ C=1$ $\Rightarrow (B+\overline{C})$
- $Y$ ลูปสีส้ม (ช่อง $1,5$ นับ $X$ ที่ช่อง $5$ เป็น $0$) : $B=0,\ C=1$ $\Rightarrow (B+\overline{C})$
- $Y$ ลูปสีน้ำเงิน (ช่อง $6,7$) : $A=1,\ B=1$ $\Rightarrow (\overline{A}+\overline{B})$

เขียนด้วย NOR

$$
\begin{aligned}
X &= (A + C)(B + \overline{C}) \\
 &= \overline{\overline{(A + C)(B + \overline{C})}} && \text{$\overline{\overline{X}}=X$} \\
 &= \overline{\overline{A + C} + \overline{B + \overline{C}}} && \text{$\overline{XY}=\overline{X}+\overline{Y}$}
\end{aligned}
$$

$$
\begin{aligned}
Y &= (B + \overline{C})(\overline{A} + \overline{B}) \\
 &= \overline{\overline{(B + \overline{C})(\overline{A} + \overline{B})}} && \text{$\overline{\overline{X}}=X$} \\
 &= \overline{\overline{B + \overline{C}} + \overline{\overline{A} + \overline{B}}} && \text{$\overline{XY}=\overline{X}+\overline{Y}$}
\end{aligned}
$$

$\mathbf{Ans}\quad X = \overline{\overline{A + C} + \overline{B + \overline{C}}}$

$\mathbf{Ans}\quad Y = \overline{\overline{B + \overline{C}} + \overline{\overline{A} + \overline{B}}}$

## ข้อ 16 ใช้ NOR อย่างเดียวที่ต้องใช้แมกซ์เทอมซ้ำ

จากตารางความจริงต่อไปนี้ จงลดรูปสมการของ Y แล้วออกแบบวงจรลอจิกบนบอร์ดโดยใช้**เฉพาะเกต NOR** (7402) เท่านั้น ห้ามใช้ชิปชนิดอื่น ถ้าต้องการอินเวอร์เตอร์ให้ต่อสองอินพุตของ NOR เข้าด้วยกัน

@table

```lab
outputs: Y
level: medium
Y = m(1,3,5,6,7)
only: nor
```

$\mathbf{Sol}^{n}$

@method algebra

เขียนแมกซ์เทอมของแถว $0,2,4$ ที่เป็น $0$ คูณกัน

$$
\begin{aligned}
Y &= (A + B + C)(A + \overline{B} + C)(\overline{A} + B + C) \\
 &= (A + B + C)(A + \overline{B} + C)(A + B + C)(\overline{A} + B + C) && \text{$XX=X,\ XY=YX$} \\
 &= (A + C + B\overline{B})(B + C + A\overline{A}) && \text{$X+YZ=(X+Y)(X+Z),\ X+Y=Y+X$} \\
 &= (A + C + 0)(B + C + 0) && \text{$X\overline{X}=0$} \\
 &= (A + C)(B + C) && \text{$X+0=X$}
\end{aligned}
$$

@method kmap

ใส่ $1$ ที่ช่อง $1,3,5,6,7$ นอกนั้นเป็น $0$ แล้วจับลูปของ $0$

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
