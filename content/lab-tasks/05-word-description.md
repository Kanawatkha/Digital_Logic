# คำบรรยาย

โจทย์ในหมวดนี้บอกหน้าที่ของวงจรเป็นคำบรรยายง่ายๆ ให้เปลี่ยนเป็นตารางความจริง เขียนสมการ ลดรูป แล้วต่อวงจรบนบอร์ด อ่านคำให้ละเอียด เพราะ "อย่างน้อย" "มากกว่า" "ไม่เกิน" "น้อยกว่า" และ "พอดี" มีความหมายต่างกัน กดดูเฉลยเพื่อดูวิธีทำ คำตอบ และวงจร แล้ววางเฉลยลงบอร์ดได้

## ข้อ 1 จำนวนเฉพาะ

ให้ A, B, C เป็นเลขฐานสองสามบิต โดย A เป็นบิตที่มีค่ามากที่สุด จงออกแบบวงจรลอจิกที่เอาต์พุต Y เป็น 1 ก็ต่อเมื่อเลขฐานสองนี้เป็น **จำนวนเฉพาะ** ลดรูปให้เหลือเกตน้อยที่สุด

```lab
outputs: Y
level: easy
Y = m(2,3,5,7)
```

$\mathbf{Sol}^{n}$

@method algebra

จำนวนเฉพาะที่เป็นไปได้คือ $2,3,5,7$ (แถว $2,3,5,7$)

@table

เขียนมินเทอมของแถว $2,3,5,7$ ที่เป็น $1$ รวมกัน

$$
\begin{aligned}
Y &= \overline{A}B\overline{C} + \overline{A}BC + A\overline{B}C + ABC \\
 &= \overline{A}B(\overline{C} + C) + AC(\overline{B} + B) && \text{$X(Y+Z)=XY+XZ$} \\
 &= \overline{A}B + AC && \text{$X+\overline{X}=1,\ X\cdot 1=X$}
\end{aligned}
$$

@method kmap

จำนวนเฉพาะที่เป็นไปได้คือ $2,3,5,7$ (แถว $2,3,5,7$)

@table

ใส่ $1$ ที่ช่อง $2,3,5,7$ แล้วจับลูปของ $1$

@kmap:Y 2,3 | 5,7
- ลูปสีส้ม (ช่อง $2,3$) : $A=0,\ B=1$ $\Rightarrow \overline{A}B$
- ลูปสีน้ำเงิน (ช่อง $5,7$) : $A=1,\ C=1$ $\Rightarrow AC$

$\mathbf{Ans}\quad Y = \overline{A}B + AC$

## ข้อ 2 เลขฐานสองมากกว่าสี่

ให้ A, B, C เป็นเลขฐานสองสามบิต โดย A เป็นบิตที่มีค่ามากที่สุด และ C เป็นบิตที่มีค่าน้อยที่สุด จงออกแบบวงจรลอจิกที่เอาต์พุต Y เป็น 1 ก็ต่อเมื่อเลขฐานสองนี้มีค่า **มากกว่า 4** ลดรูปให้เหลือเกตน้อยที่สุด

```lab
outputs: Y
level: easy
Y = rule value > 4
```

$\mathbf{Sol}^{n}$

@method algebra

ค่าที่มากกว่า $4$ คือ $5,6,7$ ($101,110,111$)

@table

เขียนมินเทอมของแถว $5,6,7$ ที่เป็น $1$ รวมกัน

$$
\begin{aligned}
Y &= A\overline{B}C + AB\overline{C} + ABC \\
 &= A\overline{B}C + AB\overline{C} + ABC + ABC && \text{$X+X=X$} \\
 &= A(\overline{B} + B)C + AB(\overline{C} + C) && \text{$X(Y+Z)=XY+XZ$} \\
 &= AC + AB && \text{$X+\overline{X}=1,\ X\cdot 1=X$}
\end{aligned}
$$

@method kmap

ค่าที่มากกว่า $4$ คือ $5,6,7$ ($101,110,111$)

@table

ใส่ $1$ ที่ช่อง $5,6,7$

@kmap:Y 5,7 | 6,7
- ลูปสีส้ม (ช่อง $5,7$) : $A=1,\ C=1$ $\Rightarrow AC$
- ลูปสีน้ำเงิน (ช่อง $6,7$) : $A=1,\ B=1$ $\Rightarrow AB$

@method all

$$
\begin{aligned}
Y &= AC + AB \\
 &= A(B + C) && \text{$X(Y+Z)=XY+XZ$}
\end{aligned}
$$

$\mathbf{Ans}\quad Y = A(B + C)$

## ข้อ 3 ไม่น้อยกว่าสองตัว

จงออกแบบวงจรลอจิกที่เอาต์พุต Y เป็น 1 ก็ต่อเมื่ออินพุต **ไม่น้อยกว่า 2 ตัว** จากทั้งหมด 3 ตัวเป็น 1 ให้ออกแบบในรูป SOP และลดรูปให้เหลือเกตน้อยที่สุด

```lab
outputs: Y
level: easy
form: sop
Y = rule ones >= 2
```

$\mathbf{Sol}^{n}$

@method algebra

อินพุตที่เป็น $1$ ตั้งแต่ $2$ ตัวขึ้นไป คือแถว $3,5,6,7$

@table

เขียนมินเทอมของแถว $3,5,6,7$ ที่เป็น $1$ รวมกัน

$$
\begin{aligned}
Y &= \overline{A}BC + A\overline{B}C + AB\overline{C} + ABC \\
 &= \overline{A}BC + A\overline{B}C + AB\overline{C} + ABC + ABC + ABC && \text{$X+X=X$} \\
 &= (\overline{A} + A)BC + A(\overline{B} + B)C + AB(\overline{C} + C) && \text{$X(Y+Z)=XY+XZ$} \\
 &= BC + AC + AB && \text{$X+\overline{X}=1,\ X\cdot 1=X$}
\end{aligned}
$$

@method kmap

อินพุตที่เป็น $1$ ตั้งแต่ $2$ ตัวขึ้นไป คือแถว $3,5,6,7$

@table

ใส่ $1$ ที่ช่อง $3,5,6,7$

@kmap:Y 3,7 | 5,7 | 6,7
- ลูปสีส้ม (ช่อง $3,7$) : $B=1,\ C=1$ $\Rightarrow BC$
- ลูปสีน้ำเงิน (ช่อง $5,7$) : $A=1,\ C=1$ $\Rightarrow AC$
- ลูปสีเขียว (ช่อง $6,7$) : $A=1,\ B=1$ $\Rightarrow AB$

$\mathbf{Ans}\quad Y = BC + AC + AB$

## ข้อ 4 เลขฐานสองเท่ากับห้า

ให้ A, B, C เป็นเลขฐานสองสามบิต โดย A เป็นบิตที่มีค่ามากที่สุด จงออกแบบวงจรลอจิกที่เอาต์พุต Y เป็น 1 ก็ต่อเมื่อเลขฐานสองนี้ **เท่ากับ 5** พอดี ใช้เกตให้น้อยที่สุด

```lab
outputs: Y
level: easy
Y = rule value == 5
```

$\mathbf{Sol}^{n}$

เลขฐานสองเท่ากับ $5$ คือ $ABC=101$ เป็น $1$ เฉพาะแถว $5$

@table

มีช่อง $1$ ช่องเดียว จับลูปกับช่องอื่นไม่ได้ จึงใช้พจน์เต็มของแถว $5$ ($A=1,\ B=0,\ C=1$) $\Rightarrow A\overline{B}C$

$\mathbf{Ans}\quad Y = A\overline{B}C$

## ข้อ 5 สองเอาต์พุต อย่างน้อยสองตัวกับมากกว่าสี่

ให้ A, B, C เป็นเลขฐานสองสามบิต โดย A เป็นบิตที่มีค่ามากที่สุด จงออกแบบวงจรลอจิกที่มีเอาต์พุตสองตัว โดย X เป็น 1 ก็ต่อเมื่ออินพุต **อย่างน้อย 2 ตัว** เป็น 1 และ Y เป็น 1 ก็ต่อเมื่อเลขฐานสองนี้มีค่า **มากกว่า 4** ออกแบบให้ใช้เกตรวมกันน้อยที่สุด (เกตที่ใช้ร่วมกันนับครั้งเดียว)

```lab
outputs: X, Y
level: easy
X = rule ones >= 2
Y = rule value > 4
```

$\mathbf{Sol}^{n}$

@method algebra

$X$ เป็น $1$ ที่แถว $3,5,6,7$ (อินพุตเป็น $1$ ตั้งแต่ $2$ ตัวขึ้นไป) และ $Y$ เป็น $1$ ที่แถว $5,6,7$ (ค่ามากกว่า $4$)

@table

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

$X$ เป็น $1$ ที่แถว $3,5,6,7$ (อินพุตเป็น $1$ ตั้งแต่ $2$ ตัวขึ้นไป) และ $Y$ เป็น $1$ ที่แถว $5,6,7$ (ค่ามากกว่า $4$)

@table

@kmap:X 3,7 | 5,7 | 6,7
@kmap:Y 5,7 | 6,7
- $X$ ลูปสีส้ม (ช่อง $3,7$) : $B=1,\ C=1$ $\Rightarrow BC$
- $X$ ลูปสีน้ำเงิน (ช่อง $5,7$) : $A=1,\ C=1$ $\Rightarrow AC$
- $X$ ลูปสีเขียว (ช่อง $6,7$) : $A=1,\ B=1$ $\Rightarrow AB$
- $Y$ ลูปสีส้ม (ช่อง $5,7$) : $A=1,\ C=1$ $\Rightarrow AC$
- $Y$ ลูปสีน้ำเงิน (ช่อง $6,7$) : $A=1,\ B=1$ $\Rightarrow AB$

$\mathbf{Ans}\quad X = BC + AC + AB$

$\mathbf{Ans}\quad Y = AC + AB$

## ข้อ 6 สัญญาณเตือนในรถยนต์

รถยนต์คันหนึ่งมีเซนเซอร์สามตัว A = ประตูเปิดอยู่, B = กุญแจเสียบอยู่, C = คาดเข็มขัดแล้ว (ค่า $1$ คือใช่) จงออกแบบวงจรลอจิกที่ทำให้สัญญาณเตือน Y ดัง (Y เป็น $1$) ก็ต่อเมื่อ **ประตูเปิดอยู่หรือกุญแจเสียบอยู่ และยังไม่คาดเข็มขัด** ลดรูปให้เหลือเกตน้อยที่สุด

```lab
outputs: Y
level: easy
Y = m(2,4,6)
```

$\mathbf{Sol}^{n}$

@method algebra

สัญญาณเตือนดังเมื่อ $A=1$ หรือ $B=1$ และ $C=0$ คือแถว $2,4,6$

@table

เขียนมินเทอมของแถว $2,4,6$ ที่เป็น $1$ รวมกัน

$$
\begin{aligned}
Y &= \overline{A}B\overline{C} + A\overline{B}\,\overline{C} + AB\overline{C} \\
 &= \overline{A}B\overline{C} + A\overline{B}\,\overline{C} + AB\overline{C} + AB\overline{C} && \text{$X+X=X$} \\
 &= (\overline{A} + A)B\overline{C} + A(\overline{B} + B)\overline{C} && \text{$X(Y+Z)=XY+XZ$} \\
 &= B\overline{C} + A\overline{C} && \text{$X+\overline{X}=1,\ X\cdot 1=X$} \\
 &= \overline{C}(A + B) && \text{$X(Y+Z)=XY+XZ$}
\end{aligned}
$$

@method kmap

สัญญาณเตือนดังเมื่อ $A=1$ หรือ $B=1$ และ $C=0$ คือแถว $2,4,6$

@table

ใส่ $1$ ที่ช่อง $2,4,6$ แล้วจับลูปของ $1$

@kmap:Y 2,6 | 4,6
- ลูปสีส้ม (ช่อง $2,6$) : $B=1,\ C=0$ $\Rightarrow B\overline{C}$
- ลูปสีน้ำเงิน (ช่อง $4,6$) : $A=1,\ C=0$ $\Rightarrow A\overline{C}$

$$
\begin{aligned}
Y &= B\overline{C} + A\overline{C} \\
 &= \overline{C}(A + B) && \text{$X(Y+Z)=XY+XZ$}
\end{aligned}
$$

$\mathbf{Ans}\quad Y = \overline{C}(A + B)$

## ข้อ 7 ปั๊มน้ำกับเซนเซอร์ถัง

ปั๊มน้ำมีเซนเซอร์สามตัว A = ถังบนเต็ม, B = ถังล่างมีน้ำ, C = กดสั่งเปิดด้วยมือ (ค่า $1$ คือใช่) จงออกแบบวงจรลอจิกที่ทำให้ปั๊ม Y ทำงาน (Y เป็น $1$) ก็ต่อเมื่อ **ถังล่างมีน้ำ และ (ถังบนยังไม่เต็ม หรือกดสั่งเปิดด้วยมือ)** ลดรูปให้เหลือเกตน้อยที่สุด

```lab
outputs: Y
level: easy
Y = m(2,3,7)
```

$\mathbf{Sol}^{n}$

@method algebra

ปั๊มทำงานเมื่อ $B=1$ และ ($A=0$ หรือ $C=1$) คือแถว $2,3,7$

@table

เขียนมินเทอมของแถว $2,3,7$ ที่เป็น $1$ รวมกัน

$$
\begin{aligned}
Y &= \overline{A}B\overline{C} + \overline{A}BC + ABC \\
 &= \overline{A}B\overline{C} + \overline{A}BC + \overline{A}BC + ABC && \text{$X+X=X$} \\
 &= \overline{A}B(\overline{C} + C) + (\overline{A} + A)BC && \text{$X(Y+Z)=XY+XZ$} \\
 &= \overline{A}B + BC && \text{$X+\overline{X}=1,\ X\cdot 1=X$} \\
 &= B(\overline{A} + C) && \text{$X(Y+Z)=XY+XZ$}
\end{aligned}
$$

@method kmap

ปั๊มทำงานเมื่อ $B=1$ และ ($A=0$ หรือ $C=1$) คือแถว $2,3,7$

@table

ใส่ $1$ ที่ช่อง $2,3,7$ แล้วจับลูปของ $1$

@kmap:Y 2,3 | 3,7
- ลูปสีส้ม (ช่อง $2,3$) : $A=0,\ B=1$ $\Rightarrow \overline{A}B$
- ลูปสีน้ำเงิน (ช่อง $3,7$) : $B=1,\ C=1$ $\Rightarrow BC$

$$
\begin{aligned}
Y &= \overline{A}B + BC \\
 &= B(\overline{A} + C) && \text{$X(Y+Z)=XY+XZ$}
\end{aligned}
$$

$\mathbf{Ans}\quad Y = B(\overline{A} + C)$

## ข้อ 8 เลขคี่ที่น้อยกว่าหก

ให้ A, B, C เป็นเลขฐานสองสามบิต โดย A เป็นบิตที่มีค่ามากที่สุด จงออกแบบวงจรลอจิกที่เอาต์พุต Y เป็น 1 ก็ต่อเมื่อเลขฐานสองนี้เป็น **เลขคี่ที่น้อยกว่า 6** ลดรูปให้เหลือเกตน้อยที่สุด

```lab
outputs: Y
level: easy
Y = m(1,3,5)
```

$\mathbf{Sol}^{n}$

@method algebra

เลขคี่ที่น้อยกว่า $6$ คือ $1,3,5$ (แถว $1,3,5$)

@table

เขียนมินเทอมของแถว $1,3,5$ ที่เป็น $1$ รวมกัน

$$
\begin{aligned}
Y &= \overline{A}\,\overline{B}C + \overline{A}BC + A\overline{B}C \\
 &= \overline{A}\,\overline{B}C + \overline{A}BC + \overline{A}\,\overline{B}C + A\overline{B}C && \text{$X+X=X$} \\
 &= \overline{A}C(\overline{B} + B) + \overline{B}C(\overline{A} + A) && \text{$X(Y+Z)=XY+XZ$} \\
 &= \overline{A}C + \overline{B}C && \text{$X+\overline{X}=1,\ X\cdot 1=X$} \\
 &= C(\overline{A} + \overline{B}) && \text{$X(Y+Z)=XY+XZ$}
\end{aligned}
$$

@method kmap

เลขคี่ที่น้อยกว่า $6$ คือ $1,3,5$ (แถว $1,3,5$)

@table

ใส่ $1$ ที่ช่อง $1,3,5$ แล้วจับลูปของ $1$

@kmap:Y 1,3 | 1,5
- ลูปสีส้ม (ช่อง $1,3$) : $A=0,\ C=1$ $\Rightarrow \overline{A}C$
- ลูปสีน้ำเงิน (ช่อง $1,5$) : $B=0,\ C=1$ $\Rightarrow \overline{B}C$

$$
\begin{aligned}
Y &= \overline{A}C + \overline{B}C \\
 &= C(\overline{A} + \overline{B}) && \text{$X(Y+Z)=XY+XZ$}
\end{aligned}
$$

$\mathbf{Ans}\quad Y = C(\overline{A} + \overline{B})$

## ข้อ 9 น้อยกว่าสองตัว

จงออกแบบวงจรลอจิกที่เอาต์พุต Y เป็น 1 ก็ต่อเมื่ออินพุตที่เป็น 1 มี **น้อยกว่า 2 ตัว** (นับรวมกรณีที่ไม่มีตัวใดเป็น 1 เลย) ลดรูปให้เหลือเกตน้อยที่สุด

```lab
outputs: Y
level: medium
Y = rule ones < 2
```

$\mathbf{Sol}^{n}$

@method algebra

อินพุตที่เป็น $1$ น้อยกว่า $2$ ตัว คือแถว $0,1,2,4$

@table

เขียนมินเทอมของแถว $0,1,2,4$ ที่เป็น $1$ รวมกัน

$$
\begin{aligned}
Y &= \overline{A}\,\overline{B}\,\overline{C} + \overline{A}\,\overline{B}C + \overline{A}B\overline{C} + A\overline{B}\,\overline{C} \\
 &= \overline{A}\,\overline{B}\,\overline{C} + \overline{A}\,\overline{B}C + \overline{A}\,\overline{B}\,\overline{C} + \overline{A}B\overline{C} + \overline{A}\,\overline{B}\,\overline{C} + A\overline{B}\,\overline{C} && \text{$X+X=X,\ X+Y=Y+X$} \\
 &= \overline{A}\,\overline{B}(\overline{C} + C) + \overline{A}\,\overline{C}(\overline{B} + B) + \overline{B}\,\overline{C}(\overline{A} + A) && \text{$X(Y+Z)=XY+XZ$} \\
 &= \overline{A}\,\overline{B} + \overline{A}\,\overline{C} + \overline{B}\,\overline{C} && \text{$X+\overline{X}=1,\ X\cdot 1=X$}
\end{aligned}
$$

@method kmap

อินพุตที่เป็น $1$ น้อยกว่า $2$ ตัว คือแถว $0,1,2,4$

@table

ใส่ $1$ ที่ช่อง $0,1,2,4$

@kmap:Y 0,1 | 0,2 | 0,4
- ลูปสีส้ม (ช่อง $0,1$) : $A=0,\ B=0$ $\Rightarrow \overline{A}\,\overline{B}$
- ลูปสีน้ำเงิน (ช่อง $0,2$) : $A=0,\ C=0$ $\Rightarrow \overline{A}\,\overline{C}$
- ลูปสีเขียว (ช่อง $0,4$) : $B=0,\ C=0$ $\Rightarrow \overline{B}\,\overline{C}$

$\mathbf{Ans}\quad Y = \overline{A}\,\overline{B} + \overline{A}\,\overline{C} + \overline{B}\,\overline{C}$

## ข้อ 10 เลขฐานสองไม่เกินสี่

ให้ A, B, C เป็นเลขฐานสองสามบิต โดย A เป็นบิตที่มีค่ามากที่สุด จงออกแบบวงจรลอจิกที่เอาต์พุต F เป็น 1 ก็ต่อเมื่อเลขฐานสองนี้มีค่า **ไม่เกิน 4** ลดรูปให้เหลือเกตน้อยที่สุด

```lab
outputs: F
level: medium
F = rule value <= 4
```

$\mathbf{Sol}^{n}$

@method algebra

ค่าไม่เกิน $4$ คือ $0$ ถึง $4$ (แถว $0,1,2,3,4$)

@table

เขียนแมกซ์เทอมของแถว $5,6,7$ ที่เป็น $0$ คูณกัน

$$
\begin{aligned}
F &= (\overline{A} + B + \overline{C})(\overline{A} + \overline{B} + C)(\overline{A} + \overline{B} + \overline{C}) \\
 &= (\overline{A} + B + \overline{C})(\overline{A} + \overline{B} + \overline{C})(\overline{A} + \overline{B} + C)(\overline{A} + \overline{B} + \overline{C}) && \text{$XX=X,\ XY=YX$} \\
 &= (\overline{A} + \overline{C} + B\overline{B})(\overline{A} + \overline{B} + C\overline{C}) && \text{$X+YZ=(X+Y)(X+Z),\ X+Y=Y+X$} \\
 &= (\overline{A} + \overline{C} + 0)(\overline{A} + \overline{B} + 0) && \text{$X\overline{X}=0$} \\
 &= (\overline{A} + \overline{C})(\overline{A} + \overline{B}) && \text{$X+0=X$} \\
 &= \overline{A} + \overline{B}\,\overline{C} && \text{$X+YZ=(X+Y)(X+Z),\ XY=YX$}
\end{aligned}
$$

@method kmap

ค่าไม่เกิน $4$ คือ $0$ ถึง $4$ (แถว $0,1,2,3,4$)

@table

ใส่ $1$ ที่ช่อง $0,1,2,3,4$

@kmap:F 0,1,2,3 | 0,4
- ลูปสีส้ม (ช่อง $0,1,2,3$) : $A=0$ $\Rightarrow \overline{A}$
- ลูปสีน้ำเงิน (ช่อง $0,4$) : $B=0,\ C=0$ $\Rightarrow \overline{B}\,\overline{C}$

$\mathbf{Ans}\quad F = \overline{A} + \overline{B}\,\overline{C}$

## ข้อ 11 อย่างน้อยหนึ่งตัว ใช้ NAND อย่างเดียว

จงออกแบบวงจรลอจิกที่เอาต์พุต Y เป็น 1 ก็ต่อเมื่ออินพุต **อย่างน้อย 1 ตัว** เป็น 1 โดยใช้**เฉพาะเกต NAND** (7400) เท่านั้น ห้ามใช้ชิปชนิดอื่น ถ้าต้องการอินเวอร์เตอร์ให้ต่อสองอินพุตของ NAND เข้าด้วยกัน

```lab
outputs: Y
level: easy
Y = rule ones >= 1
only: nand
```

$\mathbf{Sol}^{n}$

@method algebra

$Y=0$ เฉพาะแถว $0$ ($A=0,\ B=0,\ C=0$)

@table

$Y$ เป็นส่วนกลับของมินเทอมแถว $0$

$$
\begin{aligned}
Y &= \overline{\overline{A}\,\overline{B}\,\overline{C}} \\
 &= A + B + C && \text{$\overline{XY}=\overline{X}+\overline{Y},\ \overline{\overline{X}}=X$}
\end{aligned}
$$

@method kmap

ใส่ $0$ ที่ช่อง $0$ นอกนั้นเป็น $1$ แล้วจับลูปของ $0$

@kmap:Y 0
- ลูปสีส้ม (ช่อง $0$) : $A=0,\ B=0,\ C=0$ $\Rightarrow (A+B+C)$

@method all

เขียนด้วย NAND

$$
\begin{aligned}
Y &= A + B + C \\
 &= \overline{\overline{A + B + C}} && \text{$\overline{\overline{X}}=X$} \\
 &= \overline{\overline{A}\,\overline{B}\,\overline{C}} && \text{$\overline{X+Y}=\overline{X}\,\overline{Y}$} \\
 &= \overline{(\overline{A}\,\overline{B})\overline{C}} && \text{$XYZ=(XY)Z$} \\
 &= \overline{\overline{\overline{\overline{A}\,\overline{B}}}\cdot\overline{C}} && \text{$X=\overline{\overline{X}}$}
\end{aligned}
$$

$\mathbf{Ans}\quad Y = \overline{\overline{\overline{\overline{A}\,\overline{B}}}\cdot\overline{C}}$

## ข้อ 12 ไม่เท่ากับสี่ ใช้ NAND อย่างเดียว

ให้ A, B, C เป็นเลขฐานสองสามบิต โดย A เป็นบิตที่มีค่ามากที่สุด จงออกแบบวงจรลอจิกที่เอาต์พุต Y เป็น 1 ก็ต่อเมื่อเลขฐานสองนี้ **ไม่เท่ากับ 4** โดยใช้**เฉพาะเกต NAND** (7400) เท่านั้น

```lab
outputs: Y
level: easy
Y = rule value != 4
only: nand
```

$\mathbf{Sol}^{n}$

@method algebra

$Y=0$ เฉพาะแถว $4$ ($A=1,\ B=0,\ C=0$)

@table

$Y$ เป็นส่วนกลับของมินเทอมแถว $4$

$$
\begin{aligned}
Y &= \overline{A\overline{B}\,\overline{C}} \\
 &= \overline{A} + B + C && \text{$\overline{XY}=\overline{X}+\overline{Y},\ \overline{\overline{X}}=X$}
\end{aligned}
$$

@method kmap

ใส่ $0$ ที่ช่อง $4$ นอกนั้นเป็น $1$ แล้วจับลูปของ $0$

@kmap:Y 4
- ลูปสีส้ม (ช่อง $4$) : $A=1,\ B=0,\ C=0$ $\Rightarrow (\overline{A}+B+C)$

@method all

เขียนด้วย NAND

$$
\begin{aligned}
Y &= \overline{A} + B + C \\
 &= \overline{\overline{\overline{A} + B + C}} && \text{$\overline{\overline{X}}=X$} \\
 &= \overline{A\overline{B}\,\overline{C}} && \text{$\overline{X+Y}=\overline{X}\,\overline{Y},\ \overline{\overline{X}}=X$} \\
 &= \overline{A(\overline{B}\,\overline{C})} && \text{$XYZ=(XY)Z$} \\
 &= \overline{A\cdot\overline{\overline{\overline{B}\,\overline{C}}}} && \text{$X=\overline{\overline{X}}$}
\end{aligned}
$$

$\mathbf{Ans}\quad Y = \overline{A\cdot\overline{\overline{\overline{B}\,\overline{C}}}}$

## ข้อ 13 เท่ากับสามหรือมากกว่าห้า ใช้ NAND อย่างเดียว

ให้ A, B, C เป็นเลขฐานสองสามบิต โดย A เป็นบิตที่มีค่ามากที่สุด จงออกแบบวงจรลอจิกที่เอาต์พุต Y เป็น 1 ก็ต่อเมื่อเลขฐานสองนี้ **เท่ากับ 3 หรือมากกว่า 5** โดยใช้**เฉพาะเกต NAND** (7400) เท่านั้น ห้ามใช้ชิปชนิดอื่น ถ้าต้องการอินเวอร์เตอร์ให้ต่อสองอินพุตของ NAND เข้าด้วยกัน

```lab
outputs: Y
level: easy
Y = m(3,6,7)
only: nand
```

$\mathbf{Sol}^{n}$

@method algebra

เท่ากับ $3$ หรือมากกว่า $5$ คือ $3,6,7$ (แถว $3,6,7$)

@table

เขียนมินเทอมของแถว $3,6,7$ ที่เป็น $1$ รวมกัน

$$
\begin{aligned}
Y &= \overline{A}BC + AB\overline{C} + ABC \\
 &= \overline{A}BC + AB\overline{C} + ABC + ABC && \text{$X+X=X$} \\
 &= (\overline{A} + A)BC + AB(\overline{C} + C) && \text{$X(Y+Z)=XY+XZ$} \\
 &= BC + AB && \text{$X+\overline{X}=1,\ X\cdot 1=X$}
\end{aligned}
$$

@method kmap

เท่ากับ $3$ หรือมากกว่า $5$ คือ $3,6,7$ (แถว $3,6,7$)

@table

ใส่ $1$ ที่ช่อง $3,6,7$ แล้วจับลูปของ $1$

@kmap:Y 3,7 | 6,7
- ลูปสีส้ม (ช่อง $3,7$) : $B=1,\ C=1$ $\Rightarrow BC$
- ลูปสีน้ำเงิน (ช่อง $6,7$) : $A=1,\ B=1$ $\Rightarrow AB$

@method all

เขียนด้วย NAND

$$
\begin{aligned}
Y &= BC + AB \\
 &= \overline{\overline{BC + AB}} && \text{$\overline{\overline{X}}=X$} \\
 &= \overline{\overline{BC}\cdot\overline{AB}} && \text{$\overline{X+Y}=\overline{X}\,\overline{Y}$}
\end{aligned}
$$

$\mathbf{Ans}\quad Y = \overline{\overline{BC}\cdot\overline{AB}}$

## ข้อ 14 เลขคี่ที่มากกว่าหนึ่ง ใช้ NAND อย่างเดียว

ให้ A, B, C เป็นเลขฐานสองสามบิต โดย A เป็นบิตที่มีค่ามากที่สุด จงออกแบบวงจรลอจิกที่เอาต์พุต Y เป็น 1 ก็ต่อเมื่อเลขฐานสองนี้เป็น **เลขคี่ที่มากกว่า 1** โดยใช้**เฉพาะเกต NAND** (7400) เท่านั้น ห้ามใช้ชิปชนิดอื่น ถ้าต้องการอินเวอร์เตอร์ให้ต่อสองอินพุตของ NAND เข้าด้วยกัน

```lab
outputs: Y
level: easy
Y = m(3,5,7)
only: nand
```

$\mathbf{Sol}^{n}$

@method algebra

เลขคี่ที่มากกว่า $1$ คือ $3,5,7$ (แถว $3,5,7$)

@table

เขียนมินเทอมของแถว $3,5,7$ ที่เป็น $1$ รวมกัน

$$
\begin{aligned}
Y &= \overline{A}BC + A\overline{B}C + ABC \\
 &= \overline{A}BC + A\overline{B}C + ABC + ABC && \text{$X+X=X$} \\
 &= (\overline{A} + A)BC + A(\overline{B} + B)C && \text{$X(Y+Z)=XY+XZ$} \\
 &= BC + AC && \text{$X+\overline{X}=1,\ X\cdot 1=X$}
\end{aligned}
$$

@method kmap

เลขคี่ที่มากกว่า $1$ คือ $3,5,7$ (แถว $3,5,7$)

@table

ใส่ $1$ ที่ช่อง $3,5,7$ แล้วจับลูปของ $1$

@kmap:Y 3,7 | 5,7
- ลูปสีส้ม (ช่อง $3,7$) : $B=1,\ C=1$ $\Rightarrow BC$
- ลูปสีน้ำเงิน (ช่อง $5,7$) : $A=1,\ C=1$ $\Rightarrow AC$

@method all

เขียนด้วย NAND

$$
\begin{aligned}
Y &= BC + AC \\
 &= \overline{\overline{BC + AC}} && \text{$\overline{\overline{X}}=X$} \\
 &= \overline{\overline{BC}\cdot\overline{AC}} && \text{$\overline{X+Y}=\overline{X}\,\overline{Y}$}
\end{aligned}
$$

$\mathbf{Ans}\quad Y = \overline{\overline{BC}\cdot\overline{AC}}$

## ข้อ 15 ตั้งแต่สามขึ้นไป ใช้ NAND อย่างเดียว

ให้ A, B, C เป็นเลขฐานสองสามบิต โดย A เป็นบิตที่มีค่ามากที่สุด จงออกแบบวงจรลอจิกที่เอาต์พุต Y เป็น 1 ก็ต่อเมื่อเลขฐานสองนี้มีค่า **ตั้งแต่ 3 ขึ้นไป** โดยใช้**เฉพาะเกต NAND** (7400) เท่านั้น

```lab
outputs: Y
level: medium
Y = rule value >= 3
only: nand
```

$\mathbf{Sol}^{n}$

@method algebra

ค่าตั้งแต่ $3$ ขึ้นไป คือ $3$ ถึง $7$ (แถว $3,4,5,6,7$)

@table

เขียนแมกซ์เทอมของแถว $0,1,2$ ที่เป็น $0$ คูณกัน

$$
\begin{aligned}
Y &= (A + B + C)(A + B + \overline{C})(A + \overline{B} + C) \\
 &= (A + B + C)(A + B + \overline{C})(A + B + C)(A + \overline{B} + C) && \text{$XX=X,\ XY=YX$} \\
 &= (A + B + C\overline{C})(A + C + B\overline{B}) && \text{$X+YZ=(X+Y)(X+Z),\ X+Y=Y+X$} \\
 &= (A + B + 0)(A + C + 0) && \text{$X\overline{X}=0$} \\
 &= (A + B)(A + C) && \text{$X+0=X$} \\
 &= A + BC && \text{$X+YZ=(X+Y)(X+Z)$}
\end{aligned}
$$

@method kmap

ค่าตั้งแต่ $3$ ขึ้นไป คือ $3$ ถึง $7$ (แถว $3,4,5,6,7$)

@table

ใส่ $1$ ที่ช่อง $3,4,5,6,7$

@kmap:Y 4,5,6,7 | 3,7
- ลูปสีส้ม (ช่อง $4,5,6,7$) : $A=1$ $\Rightarrow A$
- ลูปสีน้ำเงิน (ช่อง $3,7$) : $B=1,\ C=1$ $\Rightarrow BC$

@method all

เขียนด้วย NAND

$$
\begin{aligned}
Y &= A + BC \\
 &= \overline{\overline{A + BC}} && \text{$\overline{\overline{X}}=X$} \\
 &= \overline{\overline{A}\cdot\overline{BC}} && \text{$\overline{X+Y}=\overline{X}\,\overline{Y}$}
\end{aligned}
$$

$\mathbf{Ans}\quad Y = \overline{\overline{A}\cdot\overline{BC}}$

## ข้อ 16 มากกว่าสามหรือเท่ากับหนึ่ง ใช้ NAND อย่างเดียว

ให้ A, B, C เป็นเลขฐานสองสามบิต โดย A เป็นบิตที่มีค่ามากที่สุด จงออกแบบวงจรลอจิกที่เอาต์พุต Y เป็น 1 ก็ต่อเมื่อเลขฐานสองนี้ **มากกว่า 3 หรือเท่ากับ 1** โดยใช้**เฉพาะเกต NAND** (7400) เท่านั้น ห้ามใช้ชิปชนิดอื่น ถ้าต้องการอินเวอร์เตอร์ให้ต่อสองอินพุตของ NAND เข้าด้วยกัน

```lab
outputs: Y
level: medium
Y = m(1,4,5,6,7)
only: nand
```

$\mathbf{Sol}^{n}$

@method algebra

มากกว่า $3$ คือ $4,5,6,7$ และเท่ากับ $1$ คือ $1$ รวมเป็นแถว $1,4,5,6,7$

@table

เขียนแมกซ์เทอมของแถว $0,2,3$ ที่เป็น $0$ คูณกัน

$$
\begin{aligned}
Y &= (A + B + C)(A + \overline{B} + C)(A + \overline{B} + \overline{C}) \\
 &= (A + B + C)(A + \overline{B} + C)(A + \overline{B} + C)(A + \overline{B} + \overline{C}) && \text{$XX=X$} \\
 &= (A + C + B\overline{B})(A + \overline{B} + C\overline{C}) && \text{$X+YZ=(X+Y)(X+Z),\ X+Y=Y+X$} \\
 &= (A + C + 0)(A + \overline{B} + 0) && \text{$X\overline{X}=0$} \\
 &= (A + C)(A + \overline{B}) && \text{$X+0=X$} \\
 &= A + \overline{B}C && \text{$X+YZ=(X+Y)(X+Z),\ XY=YX$}
\end{aligned}
$$

@method kmap

มากกว่า $3$ คือ $4,5,6,7$ และเท่ากับ $1$ คือ $1$ รวมเป็นแถว $1,4,5,6,7$

@table

ใส่ $1$ ที่ช่อง $1,4,5,6,7$ แล้วจับลูปของ $1$

@kmap:Y 4,5,6,7 | 1,5
- ลูปสีส้ม (ช่อง $4,5,6,7$) : $A=1$ $\Rightarrow A$
- ลูปสีน้ำเงิน (ช่อง $1,5$) : $B=0,\ C=1$ $\Rightarrow \overline{B}C$

@method all

เขียนด้วย NAND

$$
\begin{aligned}
Y &= A + \overline{B}C \\
 &= \overline{\overline{A + \overline{B}C}} && \text{$\overline{\overline{X}}=X$} \\
 &= \overline{\overline{A}\cdot\overline{\overline{B}C}} && \text{$\overline{X+Y}=\overline{X}\,\overline{Y}$}
\end{aligned}
$$

$\mathbf{Ans}\quad Y = \overline{\overline{A}\cdot\overline{\overline{B}C}}$

## ข้อ 17 ไม่มีตัวใดเป็น 1 ใช้ NOR อย่างเดียว

จงออกแบบวงจรลอจิกที่เอาต์พุต Y เป็น 1 ก็ต่อเมื่อ**ไม่มีอินพุตใดเป็น 1 เลย** โดยใช้**เฉพาะเกต NOR** (7402) เท่านั้น ห้ามใช้ชิปชนิดอื่น ถ้าต้องการอินเวอร์เตอร์ให้ต่อสองอินพุตของ NOR เข้าด้วยกัน

```lab
outputs: Y
level: easy
Y = rule ones == 0
only: nor
```

$\mathbf{Sol}^{n}$

$Y=1$ เฉพาะแถว $0$ ($A=0,\ B=0,\ C=0$)

@table

มีช่อง $1$ ช่องเดียว $\Rightarrow Y=\overline{A}\,\overline{B}\,\overline{C}$

เขียนด้วย NOR

$$
\begin{aligned}
Y &= \overline{A}\,\overline{B}\,\overline{C} \\
 &= \overline{A + B + C} && \text{$\overline{X+Y}=\overline{X}\,\overline{Y}$} \\
 &= \overline{(A + B) + C} && \text{$X+Y+Z=(X+Y)+Z$} \\
 &= \overline{\overline{\overline{A + B}} + C} && \text{$X=\overline{\overline{X}}$}
\end{aligned}
$$

$\mathbf{Ans}\quad Y = \overline{\overline{\overline{A + B}} + C}$

## ข้อ 18 ไม่เกินสอง ใช้ NOR อย่างเดียว

ให้ A, B, C เป็นเลขฐานสองสามบิต โดย A เป็นบิตที่มีค่ามากที่สุด จงออกแบบวงจรลอจิกที่เอาต์พุต Y เป็น 1 ก็ต่อเมื่อเลขฐานสองนี้มีค่า **ไม่เกิน 2** โดยใช้**เฉพาะเกต NOR** (7402) เท่านั้น

```lab
outputs: Y
level: easy
Y = rule value <= 2
only: nor
```

$\mathbf{Sol}^{n}$

@method algebra

ค่าไม่เกิน $2$ คือ $0,1,2$

@table

เขียนมินเทอมของแถว $0,1,2$ ที่เป็น $1$ รวมกัน

$$
\begin{aligned}
Y &= \overline{A}\,\overline{B}\,\overline{C} + \overline{A}\,\overline{B}C + \overline{A}B\overline{C} \\
 &= \overline{A}\,\overline{B}\,\overline{C} + \overline{A}\,\overline{B}C + \overline{A}\,\overline{B}\,\overline{C} + \overline{A}B\overline{C} && \text{$X+X=X$} \\
 &= \overline{A}\,\overline{B}(\overline{C} + C) + \overline{A}\,\overline{C}(\overline{B} + B) && \text{$X(Y+Z)=XY+XZ$} \\
 &= \overline{A}\,\overline{B} + \overline{A}\,\overline{C} && \text{$X+\overline{X}=1,\ X\cdot 1=X$}
\end{aligned}
$$

@method kmap

ค่าไม่เกิน $2$ คือ $0,1,2$

@table

ใส่ $1$ ที่ช่อง $0,1,2$

@kmap:Y 0,1 | 0,2
- ลูปสีส้ม (ช่อง $0,1$) : $A=0,\ B=0$ $\Rightarrow \overline{A}\,\overline{B}$
- ลูปสีน้ำเงิน (ช่อง $0,2$) : $A=0,\ C=0$ $\Rightarrow \overline{A}\,\overline{C}$

@method all

เขียนด้วย NOR

$$
\begin{aligned}
Y &= \overline{A}\,\overline{B} + \overline{A}\,\overline{C} \\
 &= \overline{A + B} + \overline{A + C} && \text{$\overline{X+Y}=\overline{X}\,\overline{Y}$} \\
 &= \overline{\overline{\overline{A + B} + \overline{A + C}}} && \text{$\overline{\overline{X}}=X$}
\end{aligned}
$$

$\mathbf{Ans}\quad Y = \overline{\overline{\overline{A + B} + \overline{A + C}}}$

## ข้อ 19 ค่าอยู่ระหว่างหนึ่งถึงสาม ใช้ NOR อย่างเดียว

ให้ A, B, C เป็นเลขฐานสองสามบิต โดย A เป็นบิตที่มีค่ามากที่สุด จงออกแบบวงจรลอจิกที่เอาต์พุต Y เป็น 1 ก็ต่อเมื่อเลขฐานสองนี้มีค่า **ตั้งแต่ 1 ถึง 3** โดยใช้**เฉพาะเกต NOR** (7402) เท่านั้น ห้ามใช้ชิปชนิดอื่น ถ้าต้องการอินเวอร์เตอร์ให้ต่อสองอินพุตของ NOR เข้าด้วยกัน

```lab
outputs: Y
level: easy
Y = m(1,2,3)
only: nor
```

$\mathbf{Sol}^{n}$

@method algebra

ค่าตั้งแต่ $1$ ถึง $3$ คือ $1,2,3$ (แถว $1,2,3$)

@table

เขียนมินเทอมของแถว $1,2,3$ ที่เป็น $1$ รวมกัน

$$
\begin{aligned}
Y &= \overline{A}\,\overline{B}C + \overline{A}B\overline{C} + \overline{A}BC \\
 &= \overline{A}\,\overline{B}C + \overline{A}B\overline{C} + \overline{A}BC + \overline{A}BC && \text{$X+X=X$} \\
 &= \overline{A}(\overline{B} + B)C + \overline{A}B(\overline{C} + C) && \text{$X(Y+Z)=XY+XZ$} \\
 &= \overline{A}C + \overline{A}B && \text{$X+\overline{X}=1,\ X\cdot 1=X$} \\
 &= \overline{A}(B + C) && \text{$X(Y+Z)=XY+XZ$}
\end{aligned}
$$

@method kmap

ค่าตั้งแต่ $1$ ถึง $3$ คือ $1,2,3$ (แถว $1,2,3$)

@table

ใส่ $1$ ที่ช่อง $1,2,3$ นอกนั้นเป็น $0$ แล้วจับลูปของ $0$

@kmap:Y 4,5,6,7 | 0,4
- ลูปสีส้ม (ช่อง $4,5,6,7$) : $A=1$ $\Rightarrow \overline{A}$
- ลูปสีน้ำเงิน (ช่อง $0,4$) : $B=0,\ C=0$ $\Rightarrow (B+C)$

@method all

เขียนด้วย NOR

$$
\begin{aligned}
Y &= \overline{A}(B + C) \\
 &= \overline{\overline{\overline{A}(B + C)}} && \text{$\overline{\overline{X}}=X$} \\
 &= \overline{A + \overline{B + C}} && \text{$\overline{XY}=\overline{X}+\overline{Y},\ \overline{\overline{X}}=X$}
\end{aligned}
$$

$\mathbf{Ans}\quad Y = \overline{A + \overline{B + C}}$

## ข้อ 20 เท่ากับ 0, 1 หรือ 4 ใช้ NOR อย่างเดียว

ให้ A, B, C เป็นเลขฐานสองสามบิต โดย A เป็นบิตที่มีค่ามากที่สุด จงออกแบบวงจรลอจิกที่เอาต์พุต Y เป็น 1 ก็ต่อเมื่อเลขฐานสองนี้ **เท่ากับ 0, 1 หรือ 4** โดยใช้**เฉพาะเกต NOR** (7402) เท่านั้น ห้ามใช้ชิปชนิดอื่น ถ้าต้องการอินเวอร์เตอร์ให้ต่อสองอินพุตของ NOR เข้าด้วยกัน

```lab
outputs: Y
level: medium
Y = m(0,1,4)
only: nor
```

$\mathbf{Sol}^{n}$

@method algebra

เท่ากับ $0$, $1$ หรือ $4$ คือแถว $0,1,4$

@table

เขียนมินเทอมของแถว $0,1,4$ ที่เป็น $1$ รวมกัน

$$
\begin{aligned}
Y &= \overline{A}\,\overline{B}\,\overline{C} + \overline{A}\,\overline{B}C + A\overline{B}\,\overline{C} \\
 &= \overline{A}\,\overline{B}\,\overline{C} + \overline{A}\,\overline{B}C + \overline{A}\,\overline{B}\,\overline{C} + A\overline{B}\,\overline{C} && \text{$X+X=X$} \\
 &= \overline{A}\,\overline{B}(\overline{C} + C) + \overline{B}\,\overline{C}(\overline{A} + A) && \text{$X(Y+Z)=XY+XZ$} \\
 &= \overline{A}\,\overline{B} + \overline{B}\,\overline{C} && \text{$X+\overline{X}=1,\ X\cdot 1=X$} \\
 &= \overline{B}(\overline{A} + \overline{C}) && \text{$X(Y+Z)=XY+XZ$}
\end{aligned}
$$

@method kmap

เท่ากับ $0$, $1$ หรือ $4$ คือแถว $0,1,4$

@table

ใส่ $1$ ที่ช่อง $0,1,4$ นอกนั้นเป็น $0$ แล้วจับลูปของ $0$

@kmap:Y 2,3,6,7 | 5,7
- ลูปสีส้ม (ช่อง $2,3,6,7$) : $B=1$ $\Rightarrow \overline{B}$
- ลูปสีน้ำเงิน (ช่อง $5,7$) : $A=1,\ C=1$ $\Rightarrow (\overline{A}+\overline{C})$

@method all

เขียนด้วย NOR

$$
\begin{aligned}
Y &= \overline{B}(\overline{A} + \overline{C}) \\
 &= \overline{\overline{\overline{B}(\overline{A} + \overline{C})}} && \text{$\overline{\overline{X}}=X$} \\
 &= \overline{B + \overline{\overline{A} + \overline{C}}} && \text{$\overline{XY}=\overline{X}+\overline{Y},\ \overline{\overline{X}}=X$}
\end{aligned}
$$

$\mathbf{Ans}\quad Y = \overline{B + \overline{\overline{A} + \overline{C}}}$

## ข้อ 21 มากกว่าสอง ใช้ NOR อย่างเดียว

ให้ A, B, C เป็นเลขฐานสองสามบิต โดย A เป็นบิตที่มีค่ามากที่สุด จงออกแบบวงจรลอจิกที่เอาต์พุต Y เป็น 1 ก็ต่อเมื่อเลขฐานสองนี้มีค่า **มากกว่า 2** โดยใช้**เฉพาะเกต NOR** (7402) เท่านั้น

```lab
outputs: Y
level: medium
Y = rule value > 2
only: nor
```

$\mathbf{Sol}^{n}$

@method algebra

ค่ามากกว่า $2$ คือ $3$ ถึง $7$ (แถว $3,4,5,6,7$)

@table

เขียนแมกซ์เทอมของแถว $0,1,2$ ที่เป็น $0$ คูณกัน

$$
\begin{aligned}
Y &= (A + B + C)(A + B + \overline{C})(A + \overline{B} + C) \\
 &= (A + B + C)(A + B + \overline{C})(A + B + C)(A + \overline{B} + C) && \text{$XX=X,\ XY=YX$} \\
 &= (A + B + C\overline{C})(A + C + B\overline{B}) && \text{$X+YZ=(X+Y)(X+Z),\ X+Y=Y+X$} \\
 &= (A + B + 0)(A + C + 0) && \text{$X\overline{X}=0$} \\
 &= (A + B)(A + C) && \text{$X+0=X$} \\
 &= A + BC && \text{$X+YZ=(X+Y)(X+Z)$}
\end{aligned}
$$

@method kmap

ค่ามากกว่า $2$ คือ $3$ ถึง $7$ (แถว $3,4,5,6,7$)

@table

ใส่ $1$ ที่ช่อง $3,4,5,6,7$

@kmap:Y 4,5,6,7 | 3,7
- ลูปสีส้ม (ช่อง $4,5,6,7$) : $A=1$ $\Rightarrow A$
- ลูปสีน้ำเงิน (ช่อง $3,7$) : $B=1,\ C=1$ $\Rightarrow BC$

@method all

เขียนด้วย NOR

$$
\begin{aligned}
Y &= A + BC \\
 &= (A + B)(A + C) && \text{$X+YZ=(X+Y)(X+Z)$} \\
 &= \overline{\overline{(A + B)(A + C)}} && \text{$\overline{\overline{X}}=X$} \\
 &= \overline{\overline{A + B} + \overline{A + C}} && \text{$\overline{XY}=\overline{X}+\overline{Y}$}
\end{aligned}
$$

$\mathbf{Ans}\quad Y = \overline{\overline{A + B} + \overline{A + C}}$

## ข้อ 22 ไม่เท่ากับ 1, 4 หรือ 5 ใช้ NOR อย่างเดียว

ให้ A, B, C เป็นเลขฐานสองสามบิต โดย A เป็นบิตที่มีค่ามากที่สุด จงออกแบบวงจรลอจิกที่เอาต์พุต Y เป็น 1 ก็ต่อเมื่อเลขฐานสองนี้ **ไม่เท่ากับ 1, 4 และ 5** โดยใช้**เฉพาะเกต NOR** (7402) เท่านั้น ห้ามใช้ชิปชนิดอื่น ถ้าต้องการอินเวอร์เตอร์ให้ต่อสองอินพุตของ NOR เข้าด้วยกัน

```lab
outputs: Y
level: medium
Y = m(0,2,3,6,7)
only: nor
```

$\mathbf{Sol}^{n}$

@method algebra

ไม่เท่ากับ $1$, $4$ และ $5$ คือแถว $0,2,3,6,7$ ($Y=0$ ที่แถว $1,4,5$)

@table

เขียนแมกซ์เทอมของแถว $1,4,5$ ที่เป็น $0$ คูณกัน

$$
\begin{aligned}
Y &= (A + B + \overline{C})(\overline{A} + B + C)(\overline{A} + B + \overline{C}) \\
 &= (A + B + \overline{C})(\overline{A} + B + \overline{C})(\overline{A} + B + C)(\overline{A} + B + \overline{C}) && \text{$XX=X,\ XY=YX$} \\
 &= (B + \overline{C} + A\overline{A})(\overline{A} + B + C\overline{C}) && \text{$X+YZ=(X+Y)(X+Z),\ X+Y=Y+X$} \\
 &= (B + \overline{C} + 0)(\overline{A} + B + 0) && \text{$X\overline{X}=0$} \\
 &= (B + \overline{C})(\overline{A} + B) && \text{$X+0=X$} \\
 &= B + \overline{A}\,\overline{C} && \text{$X+YZ=(X+Y)(X+Z),\ XY=YX$}
\end{aligned}
$$

@method kmap

ไม่เท่ากับ $1$, $4$ และ $5$ คือแถว $0,2,3,6,7$ ($Y=0$ ที่แถว $1,4,5$)

@table

ใส่ $1$ ที่ช่อง $0,2,3,6,7$ แล้วจับลูปของ $1$

@kmap:Y 2,3,6,7 | 0,2
- ลูปสีส้ม (ช่อง $2,3,6,7$) : $B=1$ $\Rightarrow B$
- ลูปสีน้ำเงิน (ช่อง $0,2$) : $A=0,\ C=0$ $\Rightarrow \overline{A}\,\overline{C}$

@method all

เขียนด้วย NOR

$$
\begin{aligned}
Y &= B + \overline{A}\,\overline{C} \\
 &= B + \overline{A + C} && \text{$\overline{X+Y}=\overline{X}\,\overline{Y}$} \\
 &= \overline{\overline{B + \overline{A + C}}} && \text{$\overline{\overline{X}}=X$}
\end{aligned}
$$

$\mathbf{Ans}\quad Y = \overline{\overline{B + \overline{A + C}}}$
