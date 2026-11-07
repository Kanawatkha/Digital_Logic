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

รวมพจน์ที่ต่างกันเพียงตัวแปรเดียว

$$
\begin{aligned}
Y &= \overline{A}BC + \overline{A}B\overline{C} + A\overline{B}C + ABC \\
 &= \overline{A}B(C + \overline{C}) + AC(\overline{B} + B) && \text{(ดึงตัวร่วมออก)} \\
 &= \overline{A}B + AC && \text{(ตัวแปรบวกกับตัวกลับของมันได้ 1)}
\end{aligned}
$$

ใช้ NOT 1 ตัว, AND 2 ตัว และ OR 1 ตัว รวม 4 เกต

$\mathbf{Ans}\quad Y = \overline{A}B + AC$

## ข้อ 2 ผลบวกของมินเทอม

จงลดรูปฟังก์ชันต่อไปนี้ด้วย K-map แล้วออกแบบวงจรลอจิกบนบอร์ดโดยใช้เกตให้น้อยที่สุด

$$Y(A,B,C) = @sum:Y$$

```lab
outputs: Y
Y = m(0,1,4,5,6)
```

$\mathbf{Sol}^{n}$

ใส่ค่าจากตารางความจริงลงแผนผังคาร์โนห์ (แถวบนคือ $A=0$ แถวล่างคือ $A=1$ คอลัมน์เรียงตาม $BC$ แบบเกรย์โค้ด)

@kmap:Y

จับกลุ่ม 1: ช่อง 0, 1, 4, 5 ได้ $\overline{B}$ และช่อง 4 กับ 6 ได้ $A\overline{C}$

$$Y = \overline{B} + A\overline{C}$$

ใช้ NOT 2 ตัว, AND 1 ตัว และ OR 1 ตัว รวม 4 เกต

$\mathbf{Ans}\quad Y = \overline{B} + A\overline{C}$

## ข้อ 3 ผลคูณของแมกซ์เทอม

จงลดรูปฟังก์ชันต่อไปนี้ในรูป POS ด้วย K-map แล้วออกแบบวงจรลอจิกบนบอร์ดโดยใช้เกตให้น้อยที่สุด

$$F(A,B,C) = @prod:F$$

```lab
outputs: F
form: pos
F = m(1,2,3,6,7)
```

$\mathbf{Sol}^{n}$

โจทย์ให้ $\Pi M(0,4,5)$ แปลว่า $F$ เป็น 0 ที่ช่อง 0, 4, 5 และเป็น 1 ที่ช่องที่เหลือ จับกลุ่มของ 0 เพื่อได้ POS

ใส่ค่าจากตารางความจริงลงแผนผังคาร์โนห์ (แถวบนคือ $A=0$ แถวล่างคือ $A=1$ คอลัมน์เรียงตาม $BC$ แบบเกรย์โค้ด)

@kmap:F

จับกลุ่ม 0: ช่อง 0 กับ 4 ได้ $(B+C)$ และช่อง 4 กับ 5 ได้ $(\overline{A}+B)$

$$
\begin{aligned}
F &= (B + C)(\overline{A} + B) \\
 &= B + \overline{A}C && \text{(แจกแจง)}
\end{aligned}
$$

เขียนเป็น POS ใช้ NOT 1 ตัว, OR 2 ตัว และ AND 1 ตัว รวม 4 เกต

$\mathbf{Ans}\quad F = (B + C)(\overline{A} + B)$

## ข้อ 4 ผลบวกของมินเทอมที่มีค่าไม่สนใจ

จงลดรูปฟังก์ชันต่อไปนี้ แล้วออกแบบวงจรลอจิกบนบอร์ดโดยใช้เกตให้น้อยที่สุด ค่าไม่สนใจ Σd ให้เลือกเป็น 0 หรือ 1 ตามที่ทำให้ลดรูปได้มากที่สุด

$$Y(A,B,C) = @sum:Y$$

```lab
outputs: Y
Y = m(1,2,6) d(3,7)
```

$\mathbf{Sol}^{n}$

ช่อง X (3 และ 7) เลือกเป็น 1 เพื่อให้กลุ่มใหญ่ขึ้น

ใส่ค่าจากตารางความจริงลงแผนผังคาร์โนห์ (แถวบนคือ $A=0$ แถวล่างคือ $A=1$ คอลัมน์เรียงตาม $BC$ แบบเกรย์โค้ด)

@kmap:Y

จับกลุ่ม 1: ช่อง 2, 3, 6, 7 (3 กับ 7 เป็น X) ได้ $B$ และช่อง 1 กับ 3 ได้ $\overline{A}C$

$$Y = B + \overline{A}C$$

ใช้ NOT 1 ตัว, AND 1 ตัว และ OR 1 ตัว รวม 3 เกต

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

ตัดพจน์ที่ถูกดูดซับ แล้วใช้ $X + \overline{X}Y = X + Y$

$$
\begin{aligned}
Y &= AB + A\overline{B}C + AB\overline{C} + \overline{A}BC \\
 &= AB + A\overline{B}C + \overline{A}BC && \text{(AB ดูดซับพจน์ที่มี AB อยู่ด้วย)} \\
 &= A(B + \overline{B}C) + \overline{A}BC && \text{(ดึง A ออก)} \\
 &= A(B + C) + \overline{A}BC && \text{(กฎ X + X'Y = X + Y)} \\
 &= AB + AC + \overline{A}BC && \text{(แจกแจง)} \\
 &= AB + C(A + \overline{A}B) && \text{(ดึง C ออก)} \\
 &= AB + C(A + B) && \text{(กฎ X + X'Y = X + Y)} \\
 &= AB + AC + BC && \text{(แจกแจง)}
\end{aligned}
$$

แปลงเป็น NAND อย่างเดียว

$$
\begin{aligned}
Y &= AB + AC + BC \\
 &= \overline{\overline{AB}\cdot\overline{AC}\cdot\overline{BC}} && \text{(กลับสองครั้งและเดอมอร์แกน)}
\end{aligned}
$$

NAND สามอินพุตไม่มีบนชิป ใช้ NAND สองอินพุต: NAND ของ $AB$, $AC$, $BC$ สามตัว, ต่อ NAND ของสองตัวแรกกับตัวกลับ (NAND ต่อสองอินพุตเข้าด้วยกัน) เป็น AND ของมัน แล้ว NAND กับตัวที่สาม รวม 6 ตัว

$\mathbf{Ans}\quad Y = AB + AC + BC$

## ข้อ 6 ใช้ NAND อย่างเดียวและมีค่าไม่สนใจ

จงลดรูปฟังก์ชันต่อไปนี้ แล้วออกแบบวงจรลอจิกบนบอร์ดโดยใช้**เฉพาะเกต NAND** (7400) เท่านั้น ค่าไม่สนใจ Σd ให้เลือกเป็น 0 หรือ 1 ตามที่ทำให้ลดรูปได้มากที่สุด

$$F(A,B,C) = @sum:F$$

```lab
outputs: F
F = m(3,4,6) d(0,2)
only: nand
```

$\mathbf{Sol}^{n}$

ช่อง X (0 และ 2) เลือกเป็น 1 เพื่อให้กลุ่มใหญ่ขึ้น

ใส่ค่าจากตารางความจริงลงแผนผังคาร์โนห์ (แถวบนคือ $A=0$ แถวล่างคือ $A=1$ คอลัมน์เรียงตาม $BC$ แบบเกรย์โค้ด)

@kmap:F

จับกลุ่ม 1: ช่อง 0, 2, 4, 6 ได้ $\overline{C}$ และช่อง 2 กับ 3 ได้ $\overline{A}B$

$$
\begin{aligned}
F &= \overline{C} + \overline{A}B \\
 &= \overline{\overline{\overline{C}}\cdot\overline{\overline{A}B}} && \text{(กลับสองครั้งและเดอมอร์แกน)} \\
 &= \overline{C\,\overline{\overline{A}B}} && \text{(ตัด NOT สองชั้นของ C)}
\end{aligned}
$$

ใช้ NAND 3 ตัว: ตัวกลับของ $A$, NAND ของ $\overline{A},B$ และ NAND ของ $C$ กับตัวนั้น

$\mathbf{Ans}\quad F = \overline{C} + \overline{A}B$

## ข้อ 7 ใช้ NOR อย่างเดียว (1)

จงลดรูปสมการ POS ต่อไปนี้ แล้วออกแบบวงจรลอจิกบนบอร์ดโดยใช้**เฉพาะเกต NOR** (7402) เท่านั้น ห้ามใช้ชิปชนิดอื่น ถ้าต้องการอินเวอร์เตอร์ให้ต่อสองอินพุตของ NOR เข้าด้วยกัน

$$Y = @expr:Y$$

```lab
outputs: Y
Y = expr (A | C) & (B | !C) & (A | B)
only: nor
```

$\mathbf{Sol}^{n}$

ตัดพจน์ฉันทามติของ POS (พจน์ที่เกิดจากตัวแปรที่กลับกันของสองพจน์)

$$
\begin{aligned}
Y &= (A + C)(B + \overline{C})(A + B) \\
 &= (A + C)(B + \overline{C}) && \text{((A+B) เป็นพจน์ฉันทามติ จึงตัดได้)}
\end{aligned}
$$

แปลงเป็น NOR อย่างเดียว

$$
\begin{aligned}
Y &= (A + C)(B + \overline{C}) \\
 &= \overline{\overline{A + C} + \overline{B + \overline{C}}} && \text{(เดอมอร์แกน)}
\end{aligned}
$$

ใช้ NOR 4 ตัว: ตัวกลับของ $C$, NOR ของ $A,C$, NOR ของ $B,\overline{C}$ และ NOR ตัวสุดท้าย

$\mathbf{Ans}\quad Y = (A + C)(B + \overline{C})$

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

ใส่ค่าจากตารางความจริงลงแผนผังคาร์โนห์ (แถวบนคือ $A=0$ แถวล่างคือ $A=1$ คอลัมน์เรียงตาม $BC$ แบบเกรย์โค้ด)

@kmap:X

@kmap:Y

$X$: กลุ่ม 1 ช่อง 1, 2, 3 ได้ $\overline{A}B + \overline{A}C = \overline{A}(B + C)$ ($\Pi M$ ของ $X$ คือช่อง 0, 4, 5, 6, 7)

$Y$: กลุ่ม 1 ช่อง 0 กับ 4 ได้ $\overline{B}\,\overline{C}$ และช่อง 1 กับ 3 ได้ $\overline{A}C$

$$
\begin{aligned}
X &= \overline{A}B + \overline{A}C \\
 &= \overline{A}(B + C) && \text{(ดึงตัวร่วมออก)} \\
 &= \overline{A + \overline{B + C}} && \text{(เดอมอร์แกน)}
\end{aligned}
$$

$$
\begin{aligned}
Y &= \overline{B}\,\overline{C} + \overline{A}C \\
 &= \overline{B + C} + \overline{A + \overline{C}} && \text{(เดอมอร์แกนทีละพจน์)} \\
 &= \overline{\overline{\overline{B + C} + \overline{A + \overline{C}}}} && \text{(กลับสองครั้ง)}
\end{aligned}
$$

ใช้ NOR 6 ตัว: NOR ของ $B,C$ (ใช้ร่วมกับ $X$), NOR ของ $A$ กับตัวนั้นได้ $X$, ตัวกลับของ $C$, NOR ของ $A,\overline{C}$, NOR ของสองตัวแรกของ $Y$ และตัวกลับอีกหนึ่งตัวเพื่อกลับสองครั้ง

$\mathbf{Ans}\quad X = \overline{A}(B + C)$

$\mathbf{Ans}\quad Y = \overline{B}\,\overline{C} + \overline{A}C$
