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

ใช้กฎของเดอมอร์แกนกระจายขีดที่ครอบ แล้วใช้กฎการแจกแจงและ $A\overline{A}=0$

$$
\begin{aligned}
Y &= \overline{\overline{A}B + AC}(A + B) \\
 &= (\overline{\overline{A}B})(\overline{AC})(A + B) && \text{(เดอมอร์แกน)} \\
 &= (A + \overline{B})(\overline{A} + \overline{C})(A + B) && \text{(เดอมอร์แกน)} \\
 &= (A + \overline{B})(A + B)(\overline{A} + \overline{C}) && \text{(สลับที่)} \\
 &= (A + \overline{B}B)(\overline{A} + \overline{C}) && \text{((X+Y)(X+Z) = X + YZ)} \\
 &= A(\overline{A} + \overline{C}) && \text{(ตัวแปรคูณกับตัวกลับของมันได้ 0)} \\
 &= A\overline{A} + A\overline{C} && \text{(แจกแจง)} \\
 &= A\overline{C} && \text{(ตัวแปรคูณกับตัวกลับของมันได้ 0)}
\end{aligned}
$$

ใช้ AND 1 ตัวกับ NOT 1 ตัว รวม 2 เกต

$\mathbf{Ans}\quad Y = A\overline{C}$

## ข้อ 2 ผลคูณของผลบวกผสมกับผลบวกของผลคูณ

จงลดรูปสมการต่อไปนี้ แล้วออกแบบวงจรลอจิกบนบอร์ดโดยใช้เกตให้น้อยที่สุด

$$F = @expr:F$$

```lab
outputs: F
F = expr (A | !B) & (!A | C) | B & !C
```

$\mathbf{Sol}^{n}$

แจกแจงวงเล็บ แล้วตัดพจน์ที่เป็น 0 และพจน์ที่ซ้ำซ้อนด้วยทฤษฎีบทฉันทามติ (consensus)

$$
\begin{aligned}
F &= (A + \overline{B})(\overline{A} + C) + B\overline{C} \\
 &= A\overline{A} + AC + \overline{A}\,\overline{B} + \overline{B}C + B\overline{C} && \text{(แจกแจง)} \\
 &= AC + \overline{A}\,\overline{B} + \overline{B}C + B\overline{C} && \text{(ตัวแปรคูณกับตัวกลับของมันได้ 0)} \\
 &= AC + \overline{A}\,\overline{B} + B\overline{C} && \text{(ตัดพจน์ฉันทามติ)}
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

รวมพจน์ที่มี $\overline{B}C$ ร่วมกัน แล้วใช้ $X + \overline{X}Y = X + Y$

$$
\begin{aligned}
Y &= AB + A\overline{B}C + \overline{A}BC + \overline{A}\,\overline{B}C \\
 &= AB + \overline{B}C(A + \overline{A}) + \overline{A}BC && \text{(จัดกลุ่ม)} \\
 &= AB + \overline{B}C + \overline{A}BC && \text{(ตัวแปรบวกกับตัวกลับของมันได้ 1)} \\
 &= AB + C(\overline{B} + \overline{A}B) && \text{(ดึง C ออก)} \\
 &= AB + C(\overline{B} + \overline{A}) && \text{(กฎ X + X'Y = X + Y)} \\
 &= AB + C\,\overline{AB} && \text{(เดอมอร์แกน)} \\
 &= AB + C && \text{(กฎ X + X'Y = X + Y)}
\end{aligned}
$$

ใช้ AND 1 ตัวกับ OR 1 ตัว รวม 2 เกต

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

ลดรูปทีละสมการ

$$
\begin{aligned}
X &= \overline{AB}(A + C) \\
 &= (\overline{A} + \overline{B})(A + C) && \text{(เดอมอร์แกน)} \\
 &= \overline{A}A + \overline{A}C + A\overline{B} + \overline{B}C && \text{(แจกแจง)} \\
 &= \overline{A}C + A\overline{B} + \overline{B}C && \text{(ตัวแปรคูณกับตัวกลับของมันได้ 0)} \\
 &= \overline{A}C + A\overline{B} && \text{(ตัดพจน์ฉันทามติ)}
\end{aligned}
$$

$$
\begin{aligned}
Y &= \overline{A + C} + AB \\
 &= \overline{A}\,\overline{C} + AB && \text{(เดอมอร์แกน)}
\end{aligned}
$$

สังเกตว่า $Y = \overline{X}$ แต่เมื่อลดรูปแล้วต้องใช้เกตแยกกัน เพราะพจน์ของ $X$ กับ $Y$ ไม่ซ้ำกัน

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

ลดรูปเป็น SOP ก่อน

$$
\begin{aligned}
Y &= \overline{A\overline{B} + \overline{A}C} + BC \\
 &= (\overline{A\overline{B}})(\overline{\overline{A}C}) + BC && \text{(เดอมอร์แกน)} \\
 &= (\overline{A} + B)(A + \overline{C}) + BC && \text{(เดอมอร์แกน)} \\
 &= \overline{A}\,\overline{C} + AB + B\overline{C} + BC && \text{(แจกแจงและตัดพจน์ที่เป็น 0)} \\
 &= \overline{A}\,\overline{C} + AB + B && \text{(รวมพจน์ที่ต่างกันที่ C)} \\
 &= \overline{A}\,\overline{C} + B && \text{(ดูดซับ AB เข้า B)}
\end{aligned}
$$

แปลงเป็น NAND อย่างเดียวด้วยการกลับสองครั้ง (เดอมอร์แกน)

$$
\begin{aligned}
Y &= \overline{A}\,\overline{C} + B \\
 &= \overline{\overline{\overline{A}\,\overline{C} + B}} && \text{(กลับสองครั้ง)} \\
 &= \overline{\overline{\overline{A}\,\overline{C}}\cdot\overline{B}} && \text{(เดอมอร์แกน)}
\end{aligned}
$$

ต้องใช้ NAND 5 ตัว: ตัวกลับของ $A$, $C$ และ $B$ สามตัว, NAND ของ $\overline{A}$ กับ $\overline{C}$ หนึ่งตัว และ NAND ตัวสุดท้ายหนึ่งตัว

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

ใช้ทฤษฎีบทฉันทามติกับพจน์ $(B+C)$

$$
\begin{aligned}
F &= (A + B)(\overline{A} + C)(B + C) \\
 &= (A + B)(\overline{A} + C) && \text{((B+C) เป็นพจน์ฉันทามติ จึงตัดได้)} \\
 &= A\overline{A} + AC + \overline{A}B + BC && \text{(แจกแจง)} \\
 &= AC + \overline{A}B + BC && \text{(ตัวแปรคูณกับตัวกลับของมันได้ 0)} \\
 &= AC + \overline{A}B && \text{(ตัดพจน์ฉันทามติ BC)}
\end{aligned}
$$

แปลงเป็น NAND อย่างเดียว

$$
\begin{aligned}
F &= AC + \overline{A}B \\
 &= \overline{\overline{AC + \overline{A}B}} && \text{(กลับสองครั้ง)} \\
 &= \overline{\overline{AC}\cdot\overline{\overline{A}B}} && \text{(เดอมอร์แกน)}
\end{aligned}
$$

ใช้ NAND 4 ตัว: ตัวกลับของ $A$ หนึ่งตัว, NAND ของ $A,C$ หนึ่งตัว, NAND ของ $\overline{A},B$ หนึ่งตัว และ NAND ตัวสุดท้ายหนึ่งตัว

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

กระจายขีดของสองพจน์แรก แล้วลดรูป

$$
\begin{aligned}
Y &= \overline{\overline{A}+B} + \overline{A+\overline{C}} + ABC \\
 &= A\overline{B} + \overline{A}C + ABC && \text{(เดอมอร์แกน)} \\
 &= A\overline{B} + C(\overline{A} + AB) && \text{(ดึง C ออก)} \\
 &= A\overline{B} + C(\overline{A} + B) && \text{(กฎ X + X'Y = X + Y)} \\
 &= A\overline{B} + C\,\overline{A\overline{B}} && \text{(เดอมอร์แกน)} \\
 &= A\overline{B} + C && \text{(กฎ X + X'Y = X + Y)}
\end{aligned}
$$

แปลงเป็น NOR อย่างเดียว: เปลี่ยน SOP เป็น POS ก่อน แล้วกลับสองครั้ง

$$
\begin{aligned}
Y &= A\overline{B} + C \\
 &= (A + C)(\overline{B} + C) && \text{(แจกแจง)} \\
 &= \overline{\overline{A + C} + \overline{\overline{B} + C}} && \text{(เดอมอร์แกน)}
\end{aligned}
$$

ใช้ NOR 4 ตัว: ตัวกลับของ $B$ หนึ่งตัว, NOR ของ $A,C$, NOR ของ $\overline{B},C$ และ NOR ตัวสุดท้ายอย่างละหนึ่งตัว

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

แจกแจงและตัดพจน์ที่เป็น 0

$$
\begin{aligned}
Z &= (A + \overline{B})(\overline{A} + C) + \overline{B}\,\overline{C} \\
 &= AC + \overline{A}\,\overline{B} + \overline{B}C + \overline{B}\,\overline{C} && \text{(แจกแจงและตัดพจน์ที่เป็น 0)} \\
 &= AC + \overline{A}\,\overline{B} + \overline{B}(C + \overline{C}) && \text{(จัดกลุ่ม)} \\
 &= AC + \overline{A}\,\overline{B} + \overline{B} && \text{(ตัวแปรบวกกับตัวกลับของมันได้ 1)} \\
 &= AC + \overline{B} && \text{(ดูดซับ)}
\end{aligned}
$$

แปลงเป็น NOR อย่างเดียว: เปลี่ยนเป็น POS แล้วกลับสองครั้ง

$$
\begin{aligned}
Z &= AC + \overline{B} \\
 &= (A + \overline{B})(C + \overline{B}) && \text{(แจกแจง)} \\
 &= \overline{\overline{A + \overline{B}} + \overline{C + \overline{B}}} && \text{(เดอมอร์แกน)}
\end{aligned}
$$

ใช้ NOR 4 ตัว: ตัวกลับของ $B$ หนึ่งตัว, NOR ของ $A,\overline{B}$, NOR ของ $C,\overline{B}$ และ NOR ตัวสุดท้ายอย่างละหนึ่งตัว

$\mathbf{Ans}\quad Z = AC + \overline{B}$
