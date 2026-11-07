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

เกต AND สามอินพุตสามตัวให้พจน์ $\overline{A}\,\overline{B}C$, $A\overline{B}C$ และ $ABC$ แล้วรวมด้วย OR

$$
\begin{aligned}
Y &= \overline{A}\,\overline{B}C + A\overline{B}C + ABC \\
 &= \overline{B}C(\overline{A} + A) + ABC && \text{(จัดกลุ่ม)} \\
 &= \overline{B}C + ABC && \text{(ตัวแปรบวกกับตัวกลับของมันได้ 1)} \\
 &= C(\overline{B} + AB) && \text{(ดึง C ออก)} \\
 &= C(\overline{B} + A) && \text{(กฎ X + X'Y = X + Y)}
\end{aligned}
$$

ใช้ NOT 1 ตัว, OR 1 ตัว และ AND 1 ตัว รวม 3 เกต

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

NAND ตัวแรกให้ $\overline{AB}$ ต่อกับ $C$ ใน NAND ตัวที่สอง ส่วน NOR ให้ $\overline{\overline{A}+B}$ แล้ว OR รวมกัน

$$
\begin{aligned}
Y &= \overline{\overline{AB}C} + \overline{\overline{A} + B} \\
 &= AB + \overline{C} + A\overline{B} && \text{(เดอมอร์แกน)} \\
 &= A(B + \overline{B}) + \overline{C} && \text{(ดึง A ออก)} \\
 &= A + \overline{C} && \text{(ตัวแปรบวกกับตัวกลับของมันได้ 1)}
\end{aligned}
$$

ใช้ NOT 1 ตัวและ OR 1 ตัว รวม 2 เกต

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

$X$ ออกจาก OR ของ $\overline{A}B$ กับ $\overline{A}BC$ ส่วน $Y$ คือ $X$ รวมกับ $ABC$

$$
\begin{aligned}
X &= \overline{A}B + \overline{A}BC \\
 &= \overline{A}B(1 + C) && \text{(ดึงตัวร่วมออก)} \\
 &= \overline{A}B && \text{(1 บวกอะไรก็ได้ 1)}
\end{aligned}
$$

$$
\begin{aligned}
Y &= \overline{A}B + \overline{A}BC + ABC \\
 &= \overline{A}B + ABC && \text{(ดูดซับ)} \\
 &= B(\overline{A} + AC) && \text{(ดึง B ออก)} \\
 &= B(\overline{A} + C) && \text{(กฎ X + X'Y = X + Y)} \\
 &= \overline{A}B + BC && \text{(แจกแจง)}
\end{aligned}
$$

พจน์ $\overline{A}B$ ใช้ร่วมกันได้ ใช้ NOT 1 ตัว, AND 2 ตัว และ OR 1 ตัว รวม 4 เกต

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

เกต AND สามอินพุตสามตัวให้พจน์ $A\overline{B}C$, $ABC$ และ $\overline{A}BC$ แล้วรวมด้วย OR

$$
\begin{aligned}
F &= A\overline{B}C + ABC + \overline{A}BC \\
 &= AC(\overline{B} + B) + \overline{A}BC && \text{(จัดกลุ่ม)} \\
 &= AC + \overline{A}BC && \text{(ตัวแปรบวกกับตัวกลับของมันได้ 1)} \\
 &= C(A + \overline{A}B) && \text{(ดึง C ออก)} \\
 &= C(A + B) && \text{(กฎ X + X'Y = X + Y)}
\end{aligned}
$$

ใช้ OR 1 ตัวและ AND 1 ตัว รวม 2 เกต

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

วงจรให้พจน์ $\overline{A}B$, $AC$ และ $BC$ รวมด้วย OR สามอินพุต ลดรูปด้วยทฤษฎีบทฉันทามติ

$$
\begin{aligned}
Y &= \overline{A}B + AC + BC \\
 &= \overline{A}B + AC + BC(A + \overline{A}) && \text{(คูณด้วย 1)} \\
 &= \overline{A}B + AC + ABC + \overline{A}BC && \text{(แจกแจง)} \\
 &= \overline{A}B(1 + C) + AC(1 + B) && \text{(จัดกลุ่ม)} \\
 &= \overline{A}B + AC && \text{(1 บวกอะไรก็ได้ 1)}
\end{aligned}
$$

แปลงเป็น NAND อย่างเดียว

$$
\begin{aligned}
Y &= \overline{A}B + AC \\
 &= \overline{\overline{\overline{A}B}\cdot\overline{AC}} && \text{(กลับสองครั้งและเดอมอร์แกน)}
\end{aligned}
$$

ใช้ NAND 4 ตัว: ตัวกลับของ $A$ หนึ่งตัว, NAND ของ $\overline{A},B$ หนึ่งตัว, NAND ของ $A,C$ หนึ่งตัว และ NAND ตัวสุดท้ายหนึ่งตัว

$\mathbf{Ans}\quad Y = \overline{A}B + AC$

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

เกต AND ในรูปให้พจน์ $AB$, $A\overline{B}C$ และ $\overline{A}BC$ แล้วรวมด้วย OR

$$
\begin{aligned}
Z &= AB + A\overline{B}C + \overline{A}BC \\
 &= A(B + \overline{B}C) + \overline{A}BC && \text{(ดึง A ออก)} \\
 &= A(B + C) + \overline{A}BC && \text{(กฎ X + X'Y = X + Y)} \\
 &= AB + AC + \overline{A}BC && \text{(แจกแจง)} \\
 &= AB + C(A + \overline{A}B) && \text{(ดึง C ออก)} \\
 &= AB + C(A + B) && \text{(กฎ X + X'Y = X + Y)} \\
 &= AB + AC + BC && \text{(แจกแจง)}
\end{aligned}
$$

NAND สามอินพุตไม่มีบนชิป ใช้ NAND สองอินพุต: NAND ของ $AB$, $AC$, $BC$ สามตัว, NAND ของสองตัวแรกแล้วกลับด้วย NAND อีกตัวเป็น AND ของมัน แล้ว NAND กับตัวที่สาม รวม 6 ตัว

$\mathbf{Ans}\quad Z = AB + AC + BC$

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

เกต OR สามอินพุตสามตัวให้ $(A+B+C)$, $(A+\overline{B}+C)$ และ $(\overline{A}+B+C)$ แล้วคูณกันด้วย AND ใช้กฎ $(X+Y)(X+\overline{Y}) = X$

$$
\begin{aligned}
Y &= (A + B + C)(A + \overline{B} + C)(\overline{A} + B + C) \\
 &= (A + C)(\overline{A} + B + C) && \text{((A+C+B)(A+C+B กลับ) = A + C)} \\
 &= C + A(\overline{A} + B) && \text{(แจกแจงกลับ)} \\
 &= C + AB && \text{(ตัวแปรคูณกับตัวกลับของมันได้ 0)} \\
 &= (A + C)(B + C) && \text{(แจกแจง)}
\end{aligned}
$$

แปลงเป็น NOR อย่างเดียว: $Y = (A+C)(B+C) = \overline{\overline{A+C}+\overline{B+C}}$ ใช้ NOR 3 ตัว

$\mathbf{Ans}\quad Y = (A + C)(B + C)$

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

$X$ คือ AND ของ $(A+B+C)$ กับ $(A+B)$ ส่วน $Y$ คือตัวกลับของ $X$ แล้ว AND กับ $C$

$$
\begin{aligned}
X &= (A + B + C)(A + B) \\
 &= A + B && \text{(ดูดซับ)}
\end{aligned}
$$

$$
\begin{aligned}
Y &= \overline{(A + B)}\,C \\
 &= \overline{A}\,\overline{B}C && \text{(เดอมอร์แกน)}
\end{aligned}
$$

แปลงเป็น NOR อย่างเดียว: $X = A+B$ คือ NOR ของ $A,B$ แล้วกลับ, $Y = \overline{A}\,\overline{B}C = \overline{(A+B)+\overline{C}}$ ใช้ NOR 4 ตัว (NOR ของ $A,B$ ใช้ร่วมกัน)

$\mathbf{Ans}\quad X = A + B$

$\mathbf{Ans}\quad Y = \overline{A}\,\overline{B}C$
