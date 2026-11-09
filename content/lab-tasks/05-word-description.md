# คำบรรยาย

โจทย์ในหมวดนี้บอกหน้าที่ของวงจรเป็นคำบรรยายง่ายๆ ให้เปลี่ยนเป็นตารางความจริง เขียนสมการ ลดรูป แล้วต่อวงจรบนบอร์ด อ่านคำให้ละเอียด เพราะ "อย่างน้อย" "มากกว่า" "ไม่เกิน" "น้อยกว่า" และ "พอดี" มีความหมายต่างกัน กดดูเฉลยเพื่อดูวิธีทำ คำตอบ และวงจร แล้ววางเฉลยลงบอร์ดได้

## ข้อ 1 เลขฐานสองมากกว่าสี่

ให้ A, B, C เป็นเลขฐานสองสามบิต โดย A เป็นบิตที่มีค่ามากที่สุด และ C เป็นบิตที่มีค่าน้อยที่สุด จงออกแบบวงจรลอจิกที่เอาต์พุต Y เป็น 1 ก็ต่อเมื่อเลขฐานสองนี้มีค่า **มากกว่า 4** ลดรูปให้เหลือเกตน้อยที่สุด

```lab
outputs: Y
Y = rule value > 4
```

$\mathbf{Sol}^{n}$

ค่าที่มากกว่า $4$ คือ $5,6,7$ ($101,110,111$)

@table

ใส่ $1$ ที่ช่อง $5,6,7$

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

## ข้อ 2 ไม่น้อยกว่าสองตัว

จงออกแบบวงจรลอจิกที่เอาต์พุต Y เป็น 1 ก็ต่อเมื่ออินพุต **ไม่น้อยกว่า 2 ตัว** จากทั้งหมด 3 ตัวเป็น 1 ให้ออกแบบในรูป SOP และลดรูปให้เหลือเกตน้อยที่สุด

```lab
outputs: Y
form: sop
Y = rule ones >= 2
```

$\mathbf{Sol}^{n}$

อินพุตที่เป็น $1$ ตั้งแต่ $2$ ตัวขึ้นไป คือแถว $3,5,6,7$

@table

ใส่ $1$ ที่ช่อง $3,5,6,7$

@kmap:Y 3,7 | 5,7 | 6,7
- ลูปสีส้ม (ช่อง $3,7$) : $B=1,\ C=1$ $\Rightarrow BC$
- ลูปสีน้ำเงิน (ช่อง $5,7$) : $A=1,\ C=1$ $\Rightarrow AC$
- ลูปสีเขียว (ช่อง $6,7$) : $A=1,\ B=1$ $\Rightarrow AB$

$\mathbf{Ans}\quad Y = BC + AC + AB$

## ข้อ 3 เลขฐานสองเท่ากับห้า

ให้ A, B, C เป็นเลขฐานสองสามบิต โดย A เป็นบิตที่มีค่ามากที่สุด จงออกแบบวงจรลอจิกที่เอาต์พุต Y เป็น 1 ก็ต่อเมื่อเลขฐานสองนี้ **เท่ากับ 5** พอดี ใช้เกตให้น้อยที่สุด

```lab
outputs: Y
Y = rule value == 5
```

$\mathbf{Sol}^{n}$

เลขฐานสองเท่ากับ $5$ คือ $ABC=101$ เป็น $1$ เฉพาะแถว $5$

@table

มีช่อง $1$ ช่องเดียว จับลูปกับช่องอื่นไม่ได้ จึงใช้พจน์เต็มของแถว $5$ ($A=1,\ B=0,\ C=1$) $\Rightarrow A\overline{B}C$

$\mathbf{Ans}\quad Y = A\overline{B}C$

## ข้อ 4 เลขฐานสองไม่เกินสี่

ให้ A, B, C เป็นเลขฐานสองสามบิต โดย A เป็นบิตที่มีค่ามากที่สุด จงออกแบบวงจรลอจิกที่เอาต์พุต F เป็น 1 ก็ต่อเมื่อเลขฐานสองนี้มีค่า **ไม่เกิน 4** ลดรูปให้เหลือเกตน้อยที่สุด

```lab
outputs: F
F = rule value <= 4
```

$\mathbf{Sol}^{n}$

ค่าไม่เกิน $4$ คือ $0$ ถึง $4$ (แถว $0,1,2,3,4$)

@table

ใส่ $1$ ที่ช่อง $0,1,2,3,4$

@kmap:F 0,1,2,3 | 0,4
- ลูปสีส้ม (ช่อง $0,1,2,3$) : $A=0$ $\Rightarrow \overline{A}$
- ลูปสีน้ำเงิน (ช่อง $0,4$) : $B=0,\ C=0$ $\Rightarrow \overline{B}\,\overline{C}$

$\mathbf{Ans}\quad F = \overline{A} + \overline{B}\,\overline{C}$

## ข้อ 5 สองเอาต์พุต อย่างน้อยสองตัวกับมากกว่าสี่

ให้ A, B, C เป็นเลขฐานสองสามบิต โดย A เป็นบิตที่มีค่ามากที่สุด จงออกแบบวงจรลอจิกที่มีเอาต์พุตสองตัว โดย X เป็น 1 ก็ต่อเมื่ออินพุต **อย่างน้อย 2 ตัว** เป็น 1 และ Y เป็น 1 ก็ต่อเมื่อเลขฐานสองนี้มีค่า **มากกว่า 4** ออกแบบให้ใช้เกตรวมกันน้อยที่สุด (เกตที่ใช้ร่วมกันนับครั้งเดียว)

```lab
outputs: X, Y
X = rule ones >= 2
Y = rule value > 4
```

$\mathbf{Sol}^{n}$

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

## ข้อ 6 น้อยกว่าสองตัว

จงออกแบบวงจรลอจิกที่เอาต์พุต Y เป็น 1 ก็ต่อเมื่ออินพุตที่เป็น 1 มี **น้อยกว่า 2 ตัว** (นับรวมกรณีที่ไม่มีตัวใดเป็น 1 เลย) ลดรูปให้เหลือเกตน้อยที่สุด

```lab
outputs: Y
Y = rule ones < 2
```

$\mathbf{Sol}^{n}$

อินพุตที่เป็น $1$ น้อยกว่า $2$ ตัว คือแถว $0,1,2,4$

@table

ใส่ $1$ ที่ช่อง $0,1,2,4$

@kmap:Y 0,1 | 0,2 | 0,4
- ลูปสีส้ม (ช่อง $0,1$) : $A=0,\ B=0$ $\Rightarrow \overline{A}\,\overline{B}$
- ลูปสีน้ำเงิน (ช่อง $0,2$) : $A=0,\ C=0$ $\Rightarrow \overline{A}\,\overline{C}$
- ลูปสีเขียว (ช่อง $0,4$) : $B=0,\ C=0$ $\Rightarrow \overline{B}\,\overline{C}$

$\mathbf{Ans}\quad Y = \overline{A}\,\overline{B} + \overline{A}\,\overline{C} + \overline{B}\,\overline{C}$

## ข้อ 7 อย่างน้อยหนึ่งตัว ใช้ NAND อย่างเดียว

จงออกแบบวงจรลอจิกที่เอาต์พุต Y เป็น 1 ก็ต่อเมื่ออินพุต **อย่างน้อย 1 ตัว** เป็น 1 โดยใช้**เฉพาะเกต NAND** (7400) เท่านั้น ห้ามใช้ชิปชนิดอื่น ถ้าต้องการอินเวอร์เตอร์ให้ต่อสองอินพุตของ NAND เข้าด้วยกัน

```lab
outputs: Y
Y = rule ones >= 1
only: nand
```

$\mathbf{Sol}^{n}$

$Y=0$ เฉพาะแถว $0$ ($A=0,\ B=0,\ C=0$)

@table

จับลูปของ $0$ ช่องเดียว $\Rightarrow Y=A+B+C$

เขียนด้วย NAND

$$
\begin{aligned}
Y &= A + B + C \\
 &= \overline{\overline{A + B + C}} && \text{$\overline{\overline{X}}=X$} \\
 &= \overline{\overline{A}\,\overline{B}\,\overline{C}} && \text{$\overline{X+Y}=\overline{X}\,\overline{Y}$}
\end{aligned}
$$

$\mathbf{Ans}\quad Y = A + B + C$

## ข้อ 8 ตั้งแต่สามขึ้นไป ใช้ NAND อย่างเดียว

ให้ A, B, C เป็นเลขฐานสองสามบิต โดย A เป็นบิตที่มีค่ามากที่สุด จงออกแบบวงจรลอจิกที่เอาต์พุต Y เป็น 1 ก็ต่อเมื่อเลขฐานสองนี้มีค่า **ตั้งแต่ 3 ขึ้นไป** โดยใช้**เฉพาะเกต NAND** (7400) เท่านั้น

```lab
outputs: Y
Y = rule value >= 3
only: nand
```

$\mathbf{Sol}^{n}$

ค่าตั้งแต่ $3$ ขึ้นไป คือ $3$ ถึง $7$ (แถว $3,4,5,6,7$)

@table

ใส่ $1$ ที่ช่อง $3,4,5,6,7$

@kmap:Y 4,5,6,7 | 3,7
- ลูปสีส้ม (ช่อง $4,5,6,7$) : $A=1$ $\Rightarrow A$
- ลูปสีน้ำเงิน (ช่อง $3,7$) : $B=1,\ C=1$ $\Rightarrow BC$

เขียนด้วย NAND

$$
\begin{aligned}
Y &= A + BC \\
 &= \overline{\overline{A + BC}} && \text{$\overline{\overline{X}}=X$} \\
 &= \overline{\overline{A}\cdot\overline{BC}} && \text{$\overline{X+Y}=\overline{X}\,\overline{Y}$}
\end{aligned}
$$

$\mathbf{Ans}\quad Y = A + BC$

## ข้อ 9 ไม่เท่ากับสี่ ใช้ NAND อย่างเดียว

ให้ A, B, C เป็นเลขฐานสองสามบิต โดย A เป็นบิตที่มีค่ามากที่สุด จงออกแบบวงจรลอจิกที่เอาต์พุต Y เป็น 1 ก็ต่อเมื่อเลขฐานสองนี้ **ไม่เท่ากับ 4** โดยใช้**เฉพาะเกต NAND** (7400) เท่านั้น

```lab
outputs: Y
Y = rule value != 4
only: nand
```

$\mathbf{Sol}^{n}$

$Y=0$ เฉพาะแถว $4$ ($A=1,\ B=0,\ C=0$)

@table

จับลูปของ $0$ ช่องเดียว $\Rightarrow Y=\overline{A}+B+C$

เขียนด้วย NAND

$$
\begin{aligned}
Y &= \overline{A} + B + C \\
 &= \overline{\overline{\overline{A} + B + C}} && \text{$\overline{\overline{X}}=X$} \\
 &= \overline{A\overline{B}\,\overline{C}} && \text{$\overline{X+Y}=\overline{X}\,\overline{Y},\ \overline{\overline{X}}=X$}
\end{aligned}
$$

$\mathbf{Ans}\quad Y = \overline{A} + B + C$

## ข้อ 10 ไม่มีตัวใดเป็น 1 ใช้ NOR อย่างเดียว

จงออกแบบวงจรลอจิกที่เอาต์พุต Y เป็น 1 ก็ต่อเมื่อ**ไม่มีอินพุตใดเป็น 1 เลย** โดยใช้**เฉพาะเกต NOR** (7402) เท่านั้น ห้ามใช้ชิปชนิดอื่น ถ้าต้องการอินเวอร์เตอร์ให้ต่อสองอินพุตของ NOR เข้าด้วยกัน

```lab
outputs: Y
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
 &= \overline{(A + B) + C} && \text{$X+Y+Z=(X+Y)+Z$}
\end{aligned}
$$

$\mathbf{Ans}\quad Y = \overline{A}\,\overline{B}\,\overline{C}$

## ข้อ 11 ไม่เกินสอง ใช้ NOR อย่างเดียว

ให้ A, B, C เป็นเลขฐานสองสามบิต โดย A เป็นบิตที่มีค่ามากที่สุด จงออกแบบวงจรลอจิกที่เอาต์พุต Y เป็น 1 ก็ต่อเมื่อเลขฐานสองนี้มีค่า **ไม่เกิน 2** โดยใช้**เฉพาะเกต NOR** (7402) เท่านั้น

```lab
outputs: Y
Y = rule value <= 2
only: nor
```

$\mathbf{Sol}^{n}$

ค่าไม่เกิน $2$ คือ $0,1,2$

@table

ใส่ $1$ ที่ช่อง $0,1,2$

@kmap:Y 0,1 | 0,2
- ลูปสีส้ม (ช่อง $0,1$) : $A=0,\ B=0$ $\Rightarrow \overline{A}\,\overline{B}$
- ลูปสีน้ำเงิน (ช่อง $0,2$) : $A=0,\ C=0$ $\Rightarrow \overline{A}\,\overline{C}$

เขียนด้วย NOR

$$
\begin{aligned}
Y &= \overline{A}\,\overline{B} + \overline{A}\,\overline{C} \\
 &= \overline{A + B} + \overline{A + C} && \text{$\overline{X+Y}=\overline{X}\,\overline{Y}$} \\
 &= \overline{\overline{\overline{A + B} + \overline{A + C}}} && \text{$\overline{\overline{X}}=X$}
\end{aligned}
$$

$\mathbf{Ans}\quad Y = \overline{A}\,\overline{B} + \overline{A}\,\overline{C}$

## ข้อ 12 มากกว่าสอง ใช้ NOR อย่างเดียว

ให้ A, B, C เป็นเลขฐานสองสามบิต โดย A เป็นบิตที่มีค่ามากที่สุด จงออกแบบวงจรลอจิกที่เอาต์พุต Y เป็น 1 ก็ต่อเมื่อเลขฐานสองนี้มีค่า **มากกว่า 2** โดยใช้**เฉพาะเกต NOR** (7402) เท่านั้น

```lab
outputs: Y
Y = rule value > 2
only: nor
```

$\mathbf{Sol}^{n}$

ค่ามากกว่า $2$ คือ $3$ ถึง $7$ (แถว $3,4,5,6,7$)

@table

ใส่ $1$ ที่ช่อง $3,4,5,6,7$

@kmap:Y 4,5,6,7 | 3,7
- ลูปสีส้ม (ช่อง $4,5,6,7$) : $A=1$ $\Rightarrow A$
- ลูปสีน้ำเงิน (ช่อง $3,7$) : $B=1,\ C=1$ $\Rightarrow BC$

เขียนด้วย NOR

$$
\begin{aligned}
Y &= A + BC \\
 &= (A + B)(A + C) && \text{$X+YZ=(X+Y)(X+Z)$} \\
 &= \overline{\overline{(A + B)(A + C)}} && \text{$\overline{\overline{X}}=X$} \\
 &= \overline{\overline{A + B} + \overline{A + C}} && \text{$\overline{XY}=\overline{X}+\overline{Y}$}
\end{aligned}
$$

$\mathbf{Ans}\quad Y = A + BC$
