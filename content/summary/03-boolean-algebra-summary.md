# สรุปบทที่ 3 พีชคณิตบูลีน (Boolean Algebra)

---

## 1. ตัวคงที่ ตัวแปร และตัวกระทำ

พีชคณิตบูลีนใช้สัญลักษณ์ 3 อย่างเขียนสมการลอจิก

- **ตัวคงที่ (Constant)** คือ $0$ และ $1$
- **ตัวแปร (Variable)** คืออักษรที่แทนค่าคงที่ เช่น $A, B, C, x, y$ หรืออยู่ในรูปคอมพลีเมนต์ เช่น $\overline{A}, \overline{x}$
- **ตัวกระทำ (Operator)** มี 3 ชนิด

**สูตร**

$$
\begin{array}{|c|c|c|}
\hline
\text{ตัวกระทำ} & \text{สัญลักษณ์} & \text{ความหมาย} \\
\hline
\text{AND} & \cdot & \text{ผลคูณ ได้ 1 เมื่ออินพุตเป็น 1 ทั้งหมด} \\
\hline
\text{OR} & + & \text{ผลบวก ได้ 1 เมื่อมีอินพุตเป็น 1 อย่างน้อยหนึ่งตัว} \\
\hline
\text{NOT} & \overline{\ \ \ } & \text{กลับค่า } 0\leftrightarrow1 \\
\hline
\end{array}
$$

ลำดับการคำนวณ ทำ NOT ก่อน แล้วทำ AND แล้วจึงทำ OR (วงเล็บทำก่อนสุด)

**ตัวอย่าง** จงหาค่า $Y = A\overline{B}+C$ เมื่อ $A=1,\ B=1,\ C=0$

$\mathbf{Sol}^{n}$

$$
\begin{aligned}
Y &= 1\cdot\overline{1}+0 \\
&= 1\cdot 0+0 &&\text{NOT ก่อน} \\
&= 0+0 &&\text{AND} \\
&= 0 &&\text{OR}
\end{aligned}
$$

$\mathbf{Ans}\quad Y = 0$

---

## 2. ทฤษฎีบทพีชคณิตบูลีน

พีชคณิตบูลีนเป็นกฎที่ใช้แก้และลดรูปสมการลอจิก ทฤษฎีบททุกข้อมี **คู่ควบ (Dual)** คือสลับ $+$ กับ $\cdot$ และสลับ $0$ กับ $1$ แล้วจะได้ทฤษฎีบทอีกข้อหนึ่งเสมอ

### 2.1 ตารางทฤษฎีบททั้ง 10 หมวด

**สูตร**

$$
\begin{array}{|c|l|l|l|}
\hline
\text{ข้อ} & \text{ชื่อ} & \text{แบบ (a)} & \text{แบบ (b)} \\
\hline
1 & \text{สลับที่ (Commutative)} & A+B = B+A & AB = BA \\
\hline
2 & \text{จัดหมู่ (Associative)} & A+(B+C) = (A+B)+C & A(BC) = (AB)C \\
\hline
3 & \text{กระจาย (Distributive)} & A+BC = (A+B)(A+C) & A(B+C) = AB+AC \\
\hline
4 & \text{เอกลักษณ์ (Identity)} & A+A = A & AA = A \\
\hline
5 & \text{นิเสธ (Negation)} & \overline{A}\ \text{คือค่าตรงข้ามของ}\ A & \overline{\overline{A}} = A \\
\hline
6 & \text{ลดทอน (Redundance)} & A+AB = A & A(A+B) = A \\
\hline
7 & \text{ค่าคงที่ 0/1} & 0+A=A,\ \ 1+A=1 & 1\cdot A=A,\ \ 0\cdot A=0 \\
\hline
8 & A,\ \overline{A} & A+\overline{A}=1 & A\cdot\overline{A}=0 \\
\hline
9 & \text{ตัดตัวแปรที่ถูกกลับค่า} & A+\overline{A}B = A+B & A(\overline{A}+B) = AB \\
\hline
10 & \text{เดอร์มอร์แกน (De Morgan)} & \overline{A+B} = \overline{A}\,\overline{B} & \overline{AB} = \overline{A}+\overline{B} \\
\hline
\end{array}
$$

ตัวแปร $A, B, C$ ในตารางแทนด้วยนิพจน์ใดก็ได้ เช่น แทน $A$ ด้วย $(X+Y)$

### 2.2 พิสูจน์ข้อที่ต้องใช้บ่อย

ข้อ 6 และข้อ 9 พิสูจน์ได้จากกฎพื้นฐาน

$$
\begin{aligned}
A+AB &= A\cdot 1+AB &&\text{$A\cdot1=A$} \\
&= A(1+B) &&\text{ดึง $A$ ออก} \\
&= A\cdot 1 &&\text{$1+B=1$} \\
&= A
\end{aligned}
$$

$$
\begin{aligned}
A+\overline{A}B &= (A+\overline{A})(A+B) &&\text{กฎกระจาย ข้อ 3(a)} \\
&= 1\cdot (A+B) &&\text{$A+\overline{A}=1$} \\
&= A+B
\end{aligned}
$$

$$
\begin{aligned}
A(\overline{A}+B) &= A\overline{A}+AB &&\text{กฎกระจาย ข้อ 3(b)} \\
&= 0+AB &&\text{$A\overline{A}=0$} \\
&= AB
\end{aligned}
$$


### 2.3 การพิสูจน์ทฤษฎีบท

ทฤษฎีบทข้อ 4–5 และ 7–8 (กฎของ AND, OR, NOT, สลับที่, จัดหมู่) พิสูจน์ได้ 2 วิธี

- **พิสูจน์เปรียบเทียบด้วยวงจร** ต่ออินพุตเข้ากับ $0$ (กราวด์) หรือ $1$ (+Vcc) แล้วดูผลที่เอาต์พุต เช่น $A\cdot 0=0$ คือแอนด์เกตที่ต่ออินพุตหนึ่งเข้ากราวด์ เอาต์พุตเป็น $0$ เสมอ ไม่ว่า $A$ เป็นอะไร
- **พิสูจน์ด้วยตารางความจริง** เขียนทุกกรณีของตัวแปร แล้วเทียบคอลัมน์ซ้ายกับขวาของสมการว่าเท่ากันทุกแถว วิธีนี้ใช้กับกฎกระจายและเดอร์มอร์แกน

**ตัวอย่าง** จงพิสูจน์ $A+\overline{A}B = A+B$ ด้วยตารางความจริง

$\mathbf{Sol}^{n}$

$$
\begin{array}{|c|c|c|c|c|c|}
\hline
A & B & \overline{A} & \overline{A}B & A+\overline{A}B & A+B \\
\hline
0 & 0 & 1 & 0 & 0 & 0 \\
\hline
0 & 1 & 1 & 1 & 1 & 1 \\
\hline
1 & 0 & 0 & 0 & 1 & 1 \\
\hline
1 & 1 & 0 & 0 & 1 & 1 \\
\hline
\end{array}
$$

$\mathbf{Ans}$ คอลัมน์ $A+\overline{A}B$ เท่ากับ $A+B$ ทุกแถว จึงเท่ากัน

---

## 3. การลดรูปสมการลอจิก

ลดรูปเพื่อให้ใช้เกตและอุปกรณ์น้อยที่สุด ลดต้นทุน และลดเวลาหน่วง (Delay Time) ของวงจร ทำได้โดยใช้ทฤษฎีบทในข้อ 1 ทีละขั้น

### 3.1 เทคนิคที่ใช้บ่อย

| เทคนิค | สูตรที่ใช้ |
|---|---|
| ดึงตัวร่วมออก | $XA+XB = X(A+B)$ |
| จับคู่พจน์ที่ต่างกันแค่ตัวแปรเดียว | $XB+X\overline{B} = X(B+\overline{B}) = X$ |
| ตัดตัวแปรที่ถูกกลับค่า | $A+\overline{A}B = A+B$ |
| ตัดพจน์ที่ถูกกลืน | $A+AB = A$ |
| ตัดด้วยค่าคงที่ | $X+1=1,\ \ X\cdot\overline{X}=0,\ \ X+0=X$ |
| มีขีดคลุมทั้งก้อน | ลดรูปข้างในก่อน แล้วค่อยกลับค่า หรือใช้เดอร์มอร์แกนกระจายขีด |

**ตัวอย่าง** จงลดรูป $Y = (A+B)(A+\overline{B})+\overline{A}C$

$\mathbf{Sol}^{n}$

$$
\begin{aligned}
Y &= (A+B)(A+\overline{B})+\overline{A}C \\
&= (A+B\overline{B})+\overline{A}C &&\text{กฎกระจาย ข้อ 3(a)} \\
&= (A+0)+\overline{A}C &&\text{$B\overline{B}=0$} \\
&= A+\overline{A}C &&\text{$A+0=A$} \\
&= A+C &&\text{$A+\overline{A}C=A+C$}
\end{aligned}
$$

$\mathbf{Ans}\quad Y = A+C$

---

## 4. ทฤษฎีของเดอร์มอร์แกน

ใช้กระจายขีดบนที่คลุมทั้งก้อน โดย **เปลี่ยนเครื่องหมายระหว่างตัวแปร** ($\cdot \leftrightarrow +$) แล้ว **ใส่ขีดให้แต่ละตัว** จำง่ายๆ ว่า บับเบิลออร์แทนแนนด์ และบับเบิลแอนด์แทนนอร์

**สูตร**

$$
\begin{aligned}
\overline{A\cdot B} &= \overline{A}+\overline{B} \\
\overline{A+B} &= \overline{A}\cdot\overline{B}
\end{aligned}
$$

ใช้กับหลายตัวแปรได้เช่นกัน เช่น $\overline{ABC} = \overline{A}+\overline{B}+\overline{C}$ และ $\overline{A+B+C} = \overline{A}\,\overline{B}\,\overline{C}$

ข้อควรระวัง ห้ามแค่ใส่ขีดให้ตัวแปรโดยไม่เปลี่ยนเครื่องหมาย เพราะ $\overline{AB} \neq \overline{A}\,\overline{B}$ และ $\overline{A+B} \neq \overline{A}+\overline{B}$


**ตัวอย่าง** จงออกแบบ $Y = (A+B)C$ โดยใช้นอร์เกตเพียงชนิดเดียว

$\mathbf{Sol}^{n}$

$$
\begin{aligned}
Y &= (A+B)C \\
&= \overline{\overline{(A+B)C}} &&\text{ขั้น 1  ใส่ขีด 2 ชั้น} \\
&= \overline{\overline{A+B}+\overline{C}} &&\text{ขั้น 2  เดอร์มอร์แกน}
\end{aligned}
$$

ขั้น 3  ใช้นอร์เกต $\overline{A+B}$ 1 ตัว, นอร์เกตต่ออินพุตร่วมเป็น $\overline{C}$ 1 ตัว, และนอร์เกตตัวสุดท้ายรวมสองค่านี้ เป็นนอร์ 3 ตัว

$\mathbf{Ans}\quad Y = \overline{\overline{A+B}+\overline{C}}$ ใช้นอร์เกต 3 ตัว

---

## 5. ออกแบบวงจรด้วยแนนด์เกตหรือนอร์เกตเพียงชนิดเดียว

ใช้เดอร์มอร์แกนเปลี่ยนสมการให้เป็นรูปของ NAND หรือ NOR ล้วน มี 3 ขั้นตอน

1. ใส่ขีดบน (Bar) คลุมทั้งสมการ 2 ครั้ง
2. ใช้เดอร์มอร์แกนกระจายขีดชั้นในให้เหลือขีดชั้นเดียว
3. เขียนวงจรจากสมการที่ได้

ตัวแปรที่ถูกกลับค่า ($\overline{A}$) ทำได้โดยต่ออินพุตทั้งสองของ NAND หรือ NOR เข้าด้วยกัน เพราะ $\overline{A\cdot A} = \overline{A+A} = \overline{A}$

**สูตร**

$$
\begin{aligned}
\text{NAND ล้วน (ผลบวกของผลคูณ)}\ &:\ AB+C = \overline{\overline{AB}\cdot\overline{C}} \\
\text{NOR ล้วน (ผลคูณของผลบวก)}\ &:\ (A+B)(C+D) = \overline{\overline{A+B}+\overline{C+D}}
\end{aligned}
$$

**ตัวอย่าง** จงออกแบบวงจรของ $Y = A\overline{B}+C$ โดยใช้แนนด์เกตเพียงชนิดเดียว

$\mathbf{Sol}^{n}$

$$
\begin{aligned}
Y &= A\overline{B}+C \\
&= \overline{\overline{A\overline{B}+C}} &&\text{ขั้น 1  ใส่ขีด 2 ชั้น} \\
&= \overline{\overline{A\overline{B}}\cdot \overline{C}} &&\text{ขั้น 2  เดอร์มอร์แกน}
\end{aligned}
$$

ขั้น 3  เขียนวงจร ($\overline{B}$ และ $\overline{C}$ ได้จากแนนด์เกตที่ต่ออินพุตเข้าด้วยกัน)

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="499" height="317" viewBox="0 0 554 352" font-family="Times New Roman, serif" font-size="18" fill="currentColor"><g stroke="currentColor" stroke-width="1.8" fill="none"><line x1="76.0" y1="87.0" x2="170.0" y2="87.0"/>
<line x1="76.0" y1="101.0" x2="170.0" y2="101.0"/>
<line x1="46.0" y1="155.0" x2="278.0" y2="155.0"/>
<line x1="236.0" y1="94.0" x2="258.0" y2="94.0"/>
<line x1="258.0" y1="94.0" x2="258.0" y2="169.0"/>
<line x1="258.0" y1="169.0" x2="278.0" y2="169.0"/>
<line x1="106.0" y1="223.0" x2="170.0" y2="223.0"/>
<line x1="106.0" y1="237.0" x2="170.0" y2="237.0"/>
<line x1="344.0" y1="162.0" x2="366.0" y2="162.0"/>
<line x1="366.0" y1="162.0" x2="366.0" y2="291.0"/>
<line x1="366.0" y1="291.0" x2="398.0" y2="291.0"/>
<line x1="236.0" y1="230.0" x2="378.0" y2="230.0"/>
<line x1="378.0" y1="230.0" x2="378.0" y2="305.0"/>
<line x1="378.0" y1="305.0" x2="398.0" y2="305.0"/>
<line x1="46.0" y1="34.0" x2="46.0" y2="155.0"/>
<line x1="76.0" y1="34.0" x2="76.0" y2="101.0"/>
<circle cx="76" cy="87.0" r="3" fill="currentColor" stroke="none"/>
<line x1="106.0" y1="34.0" x2="106.0" y2="237.0"/>
<circle cx="106" cy="223.0" r="3" fill="currentColor" stroke="none"/>
<path d="M170,68 H200 A26,26 0 0 1 200,120 H170 Z"/>
<circle cx="231" cy="94" r="5"/>
<path d="M278,136 H308 A26,26 0 0 1 308,188 H278 Z"/>
<circle cx="339" cy="162" r="5"/>
<path d="M170,204 H200 A26,26 0 0 1 200,256 H170 Z"/>
<circle cx="231" cy="230" r="5"/>
<path d="M398,272 H428 A26,26 0 0 1 428,324 H398 Z"/>
<circle cx="459" cy="298" r="5"/>
<line x1="464.0" y1="298.0" x2="484.0" y2="298.0"/>
<circle cx="484" cy="298" r="3.5" fill="currentColor" stroke="none"/></g><text x="46" y="24" text-anchor="middle">A</text><text x="76" y="24" text-anchor="middle">B</text><text x="106" y="24" text-anchor="middle">C</text><text x="494" y="303">Y</text></svg>
</div>

$\mathbf{Ans}\quad Y = \overline{\overline{A\overline{B}}\cdot\overline{C}}$ ใช้แนนด์เกต 4 ตัว

