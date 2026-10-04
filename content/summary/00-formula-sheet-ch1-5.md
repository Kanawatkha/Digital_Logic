# สรุปสูตรรวม บทที่ 1–5 (1322201 การออกแบบดิจิทัลลอจิก)

---

## บทที่ 1 ระบบเลขฐานและรหัส

### 1.1 เลขฐาน

ฐาน $b$ ใช้สัญลักษณ์ $0$ ถึง $b-1$ (ฐาน 2: 0–1, ฐาน 8: 0–7, ฐาน 16: 0–9 และ A–F โดย $A=10,\dots,F=15$)

$$
\cdots\ b^{2}\ \ b^{1}\ \ b^{0}\ .\ b^{-1}\ \ b^{-2}\ \cdots
$$

### 1.2 แปลงฐาน $b \to 10$

คูณแต่ละหลักด้วยค่าประจำหลักแล้วบวกกัน

$$
N_{10}=\sum_{i} d_i\,b^{\,i}+\sum_{j} f_j\,b^{-j}
$$

### 1.3 แปลงฐาน $10 \to b$

- ส่วนจำนวนเต็ม หารด้วย $b$ ซ้ำ อ่านเศษ **ล่างขึ้นบน**
- ส่วนทศนิยม คูณด้วย $b$ ซ้ำ อ่านส่วนเต็ม **บนลงล่าง**

**ตัวอย่าง** $37.6875_{10}=(?)_2$

$$
\begin{array}{c|r|l}
2 & 37 & 1\ \ (\text{LSB}) \\
2 & 18 & 0 \\
2 & 9 & 1 \\
2 & 4 & 0 \\
2 & 2 & 0 \\
2 & 1 & 1\ \ (\text{MSB}) \\
 & 0 &
\end{array}
\qquad
\begin{aligned}
0.6875\times2 &= 1.375 &&\Rightarrow 1\ \ (\text{MSB}) \\
0.375\times2 &= 0.75 &&\Rightarrow 0 \\
0.75\times2 &= 1.5 &&\Rightarrow 1 \\
0.5\times2 &= 1.0 &&\Rightarrow 1
\end{aligned}
$$

เศษอ่านล่างขึ้นบน $\Rightarrow 100101$ ส่วนทศนิยมอ่านบนลงล่าง $\Rightarrow .1011$ ได้ $37.6875_{10}=(100101.1011)_2$

### 1.4 แปลงระหว่างฐาน 2, 8, 16

$$
1\ \text{หลักฐาน 8}=3\ \text{บิต},\qquad 1\ \text{หลักฐาน 16}=4\ \text{บิต}
$$

จำนวนเต็มแบ่งกลุ่มจากขวา ทศนิยมแบ่งจากซ้าย เติม $0$ ให้ครบกลุ่ม ฐาน 8 ↔ ฐาน 16 ให้ผ่านฐาน 2

### 1.5 บวกและลบ

$$
s=a+b+c_{in},\quad c_{out}=\begin{cases}1 & s\ge b\\0 & s<b\end{cases},\quad \text{หลัก}=s-b\,c_{out}
$$

ลบ ถ้าไม่พอให้ยืม $1$ จากหลักซ้าย (มีค่าเท่าฐาน)

### 1.6 คอมพลีเมนต์

$$
\text{1's}(N)=\text{กลับบิตทุกตัว},\qquad \text{2's}(N)=\text{1's}(N)+1
$$

ลบ $A-B$ (เติม $0$ ให้ $B$ ยาวเท่า $A$ ก่อน)

$$
\begin{array}{|l|l|l|}
\hline
 & \text{1's complement} & \text{2's complement} \\
\hline
\text{บวก} & A+\text{1's}(B) & A+\text{2's}(B) \\
\hline
\text{มีตัวทด} & \text{บวกตัวทดที่บิตขวาสุด ผลเป็นบวก} & \text{ตัดตัวทดทิ้ง ผลเป็นบวก} \\
\hline
\text{ไม่มีตัวทด} & \text{1's ของผลบวก ผลเป็นลบ} & \text{2's ของผลบวก ผลเป็นลบ} \\
\hline
\end{array}
$$

### 1.7 รหัสดิจิทัล

$$
\begin{array}{|c|c|c|c|c|}
\hline
\text{ฐาน 10} & \text{BCD} & \text{Excess-3} & \text{ฐานสอง} & \text{Gray} \\
\hline
0 & 0000 & 0011 & 0000 & 0000 \\
\hline
1 & 0001 & 0100 & 0001 & 0001 \\
\hline
2 & 0010 & 0101 & 0010 & 0011 \\
\hline
3 & 0011 & 0110 & 0011 & 0010 \\
\hline
4 & 0100 & 0111 & 0100 & 0110 \\
\hline
5 & 0101 & 1000 & 0101 & 0111 \\
\hline
6 & 0110 & 1001 & 0110 & 0101 \\
\hline
7 & 0111 & 1010 & 0111 & 0100 \\
\hline
8 & 1000 & 1011 & 1000 & 1100 \\
\hline
9 & 1001 & 1100 & 1001 & 1101 \\
\hline
\end{array}
$$

- **BCD** แปลงเลขฐาน 10 ทีละหลักเป็น 4 บิต (ไม่ใช้ $1010$–$1111$)
- **Excess-3** $=$ BCD $+\,0011$
- **Gray** บิตแรกเท่าเดิม แล้วบวก (XOR) บิตซ้ายกับบิตขวาของเลขฐานสอง ถอดกลับ ให้นำผลล่าสุดบวกกับบิต Gray ถัดไป
- **ASCII** 7 บิต $=$ $B_7B_6B_5$ (คอลัมน์) ต่อ $B_4B_3B_2B_1$ (แถว) เช่น `a` $=1100001_2=61_{16}$

**ตัวอย่าง Gray** $10101101_2\to$ Gray (ลูกศรลง บวกบิตซ้ายกับบิตขวาของเลขฐานสองเดิม)

$$
\begin{array}{ccccccccccccccc}
\text{MSB} &  &  &  &  &  &  &  &  &  &  &  &  &  & \text{LSB} \\
1 & + & 0 & + & 1 & + & 0 & + & 1 & + & 1 & + & 0 & + & 1 \\
\downarrow & & \downarrow & & \downarrow & & \downarrow & & \downarrow & & \downarrow & & \downarrow & & \downarrow \\
1 & & 1 & & 1 & & 1 & & 1 & & 0 & & 1 & & 1
\end{array}
$$

$11111011_{Gray}\to$ Binary (ลูกศรเฉียง นำผลล่าสุดบวกกับบิต Gray ถัดไป)

$$
\begin{array}{ccccccccccccccc}
\text{MSB} &  &  &  &  &  &  &  &  &  &  &  &  &  & \text{LSB} \\
1 & & 1 & & 1 & & 1 & & 1 & & 0 & & 1 & & 1 \\
\downarrow & {\scriptstyle +}\,\nearrow & \downarrow & {\scriptstyle +}\,\nearrow & \downarrow & {\scriptstyle +}\,\nearrow & \downarrow & {\scriptstyle +}\,\nearrow & \downarrow & {\scriptstyle +}\,\nearrow & \downarrow & {\scriptstyle +}\,\nearrow & \downarrow & {\scriptstyle +}\,\nearrow & \downarrow \\
1 & & 0 & & 1 & & 0 & & 1 & & 1 & & 0 & & 1
\end{array}
$$

ได้ $10101101_2=11111011_{Gray}$

---

## บทที่ 2 ไอซีและลอจิกเกต

### 2.1 พื้นฐาน

- สัญญาณดิจิทัลมี 2 ค่า คือ $1$ (HIGH) และ $0$ (LOW)
- ขนาดไอซี SSI $\le12$ เกต, MSI $12$–$99$, LSI $100$–$999$, VLSI $\ge1000$
- TTL: ไฟเลี้ยง $4.75$–$5.25$ V เร็วกว่าแต่กินไฟมากกว่า CMOS: ไฟเลี้ยง $3$–$15$ V ประหยัดไฟกว่าแต่ไวต่อไฟฟ้าสถิต
- Positive Logic: แรงดันสูง $=1$ ส่วน Negative Logic: แรงดันสูง $=0$
- ตารางความจริงของ $n$ อินพุตมี $2^{n}$ แถว

### 2.2 ลอจิกเกต

$$
\begin{array}{|c|c|c|}
\hline
\text{เกต} & \text{สมการ} & \text{เอาต์พุตเป็น } 1 \text{ เมื่อ} \\
\hline
\text{Buffer} & Y=A & \text{เหมือนอินพุต} \\
\hline
\text{NOT} & Y=\overline{A} & \text{ตรงข้ามอินพุต} \\
\hline
\text{AND} & Y=A\cdot B & \text{อินพุตเป็น 1 ทั้งหมด} \\
\hline
\text{OR} & Y=A+B & \text{มีอินพุตเป็น 1 อย่างน้อยหนึ่งตัว} \\
\hline
\text{NAND} & Y=\overline{A\cdot B} & \text{มีอินพุตเป็น 0 อย่างน้อยหนึ่งตัว} \\
\hline
\text{NOR} & Y=\overline{A+B} & \text{อินพุตเป็น 0 ทั้งหมด} \\
\hline
\text{XOR} & Y=A\oplus B & \text{อินพุตต่างกัน} \\
\hline
\text{XNOR} & Y=\overline{A\oplus B} & \text{อินพุตเหมือนกัน} \\
\hline
\end{array}
$$

$$
\begin{array}{|c|c|c|c|c|c|c|c|}
\hline
A & B & \text{AND} & \text{OR} & \text{NAND} & \text{NOR} & \text{XOR} & \text{XNOR} \\
\hline
0 & 0 & 0 & 0 & 1 & 1 & 0 & 1 \\
\hline
0 & 1 & 0 & 1 & 1 & 0 & 1 & 0 \\
\hline
1 & 0 & 0 & 1 & 1 & 0 & 1 & 0 \\
\hline
1 & 1 & 1 & 1 & 0 & 0 & 0 & 1 \\
\hline
\end{array}
$$

### 2.3 วงจรจากสมการ และหาเอาต์พุตของวงจร

เริ่มจากพจน์ด้านในสุดออกมา แต่ละพจน์ใช้เกตตามตารางด้านบน แล้วไล่ค่าเอาต์พุตเกตทีละตัว $Y_n$ จากอินพุตไปถึงเกตสุดท้าย

### 2.4 SOP และ Minterm

มินเทอม $m_i$ คือผลคูณที่มีตัวแปรครบ ตัวแปรปกติ $=1$ ตัวแปรมีขีด $=0$ เลข $i$ คือค่าฐานสองของ $ABC\ldots$

$$
F=\sum m(\text{แถวที่ }Y=1)
$$

ขยายเทอมที่ขาดตัวแปร $X$ ด้วย

$$
T=T(X+\overline{X})=TX+T\overline{X}
$$

### 2.5 POS และ Maxterm

แมกเทอม $M_i$ คือผลบวกที่มีตัวแปรครบ ตัวแปรปกติ $=0$ ตัวแปรมีขีด $=1$ (กลับกับมินเทอม)

$$
F=\prod M(\text{แถวที่ }Y=0)
$$

ขยายเทอมที่ขาดตัวแปร $X$ ด้วย

$$
T=T+X\overline{X}=(T+X)(T+\overline{X})
$$

$$
\sum m(S)=\prod M(\text{เลขทั้งหมด } 0\ldots 2^{n}-1 \text{ ที่ไม่อยู่ใน } S)
$$

### 2.6 มินเทอมและแมกเทอม 3 ตัวแปร

$$
\begin{array}{|c|c|c|c|c|c|}
\hline
i & A & B & C & m_i & M_i \\
\hline
0 & 0 & 0 & 0 & \overline{A}\,\overline{B}\,\overline{C} & A+B+C \\
\hline
1 & 0 & 0 & 1 & \overline{A}\,\overline{B}\,C & A+B+\overline{C} \\
\hline
2 & 0 & 1 & 0 & \overline{A}\,B\overline{C} & A+\overline{B}+C \\
\hline
3 & 0 & 1 & 1 & \overline{A}\,BC & A+\overline{B}+\overline{C} \\
\hline
4 & 1 & 0 & 0 & A\overline{B}\,\overline{C} & \overline{A}+B+C \\
\hline
5 & 1 & 0 & 1 & A\overline{B}\,C & \overline{A}+B+\overline{C} \\
\hline
6 & 1 & 1 & 0 & AB\overline{C} & \overline{A}+\overline{B}+C \\
\hline
7 & 1 & 1 & 1 & ABC & \overline{A}+\overline{B}+\overline{C} \\
\hline
\end{array}
$$

### 2.7 เวนไดอะแกรม

กรอบ $=$ ทุกกรณี วงกลม $A$ $=$ กรณีที่ $A=1$ แรเงาตรงที่ผลลัพธ์เป็น $1$ ($\overline{A}$ คือนอกวงกลม, $AB$ คือส่วนซ้อนกัน, $A+B$ คือรวมสองวง) พิสูจน์สมการโดยแรเงาสองข้างแล้วดูว่าพื้นที่เหมือนกัน

---

## บทที่ 3 พีชคณิตบูลีน

### 3.1 ตัวคงที่ ตัวแปร ตัวกระทำ

ตัวคงที่ $0,1$ ตัวแปร $A,B,\overline{A},\ldots$ ตัวกระทำ AND ($\cdot$) OR ($+$) NOT ($\overline{\phantom{A}}$) ลำดับคำนวณ วงเล็บ → NOT → AND → OR

### 3.2 ทฤษฎีบททั้ง 10 หมวด

$$
\begin{array}{|c|l|l|l|}
\hline
\text{ข้อ} & \text{ชื่อ} & \text{แบบ (a)} & \text{แบบ (b)} \\
\hline
1 & \text{สลับที่} & A+B=B+A & AB=BA \\
\hline
2 & \text{จัดหมู่} & A+(B+C)=(A+B)+C & A(BC)=(AB)C \\
\hline
3 & \text{กระจาย} & A+BC=(A+B)(A+C) & A(B+C)=AB+AC \\
\hline
4 & \text{เอกลักษณ์} & A+A=A & AA=A \\
\hline
5 & \text{นิเสธ} & \overline{\overline{A}}=A & \\
\hline
6 & \text{ลดทอน} & A+AB=A & A(A+B)=A \\
\hline
7 & \text{ค่าคงที่} & 0+A=A,\ 1+A=1 & 1\cdot A=A,\ 0\cdot A=0 \\
\hline
8 & A,\overline{A} & A+\overline{A}=1 & A\overline{A}=0 \\
\hline
9 & \text{ตัดตัวแปรกลับค่า} & A+\overline{A}B=A+B & A(\overline{A}+B)=AB \\
\hline
10 & \text{เดอร์มอร์แกน} & \overline{A+B}=\overline{A}\,\overline{B} & \overline{AB}=\overline{A}+\overline{B} \\
\hline
\end{array}
$$

ทุกทฤษฎีบทมี **คู่ควบ (Dual)** คือสลับ $+\leftrightarrow\cdot$ และ $0\leftrightarrow1$ พิสูจน์ได้ด้วยวงจร (ต่ออินพุตเข้า $0$ หรือ $1$) หรือด้วยตารางความจริง

### 3.3 เทคนิคลดรูป

$$
\begin{aligned}
XA+XB &= X(A+B) \\
XB+X\overline{B} &= X \\
A+\overline{A}B &= A+B \\
A+AB &= A \\
\end{aligned}
$$

ลดรูปเพื่อใช้เกตน้อยที่สุด ประหยัดต้นทุนและลดเวลาหน่วง ถ้ามีขีดคลุมทั้งก้อนให้ลดรูปข้างในก่อน หรือใช้เดอร์มอร์แกน

### 3.4 เดอร์มอร์แกน (เปลี่ยนเครื่องหมายและตัดขีด)

$$
\overline{ABC}=\overline{A}+\overline{B}+\overline{C},\qquad \overline{A+B+C}=\overline{A}\,\overline{B}\,\overline{C}
$$

### 3.5 ออกแบบด้วย NAND หรือ NOR เพียงชนิดเดียว

ขั้นตอน (1) ใส่ขีดคลุมทั้งสมการ 2 ชั้น (2) ใช้เดอร์มอร์แกนกระจายขีดชั้นในให้เหลือชั้นเดียว (3) เขียนวงจร $\overline{A}$ ได้จากเกตที่ต่ออินพุตรวมกัน

$$
\begin{aligned}
\text{NAND (SOP)} &:\ AB+C=\overline{\overline{AB}\cdot\overline{C}} \\
\text{NOR (POS)} &:\ (A+B)(C+D)=\overline{\overline{A+B}+\overline{C+D}}
\end{aligned}
$$

---

## บทที่ 4 แผนผังคาร์โนห์ (K-map)

### 4.1 รูปแบบ

$$
\text{จำนวนช่อง}=2^{n}\ (2,3,4\ \text{ตัวแปร}=4,8,16\ \text{ช่อง}),\qquad i=2^{n-1}A+\cdots+D
$$

หัวตารางเรียงรหัสเกรย์ $00,01,11,10$ ช่องข้างเคียงจึงต่างกัน 1 บิต

$$
\begin{array}{c|cc}
 & A=0 & A=1 \\
\hline
B=0 & 0 & 2 \\
B=1 & 1 & 3
\end{array}
\qquad
\begin{array}{c|cccc}
 & 00 & 01 & 11 & 10 \\
\hline
C=0 & 0 & 2 & 6 & 4 \\
C=1 & 1 & 3 & 7 & 5
\end{array}
$$

$$
\begin{array}{c|cccc}
CD\backslash AB & 00 & 01 & 11 & 10 \\
\hline
00 & 0 & 4 & 12 & 8 \\
01 & 1 & 5 & 13 & 9 \\
11 & 3 & 7 & 15 & 11 \\
10 & 2 & 6 & 14 & 10
\end{array}
$$

### 4.2 ใส่ค่าลงแผนผัง

$$
\begin{array}{|l|c|c|}
\hline
 & \text{SOP } (\sum m) & \text{POS } (\prod M) \\
\hline
\text{ตัวแปรไม่มีขีด} & 1 & 0 \\
\hline
\text{ตัวแปรมีขีด} & 0 & 1 \\
\hline
\text{ใส่ค่าลงช่อง} & 1 & 0 \\
\hline
\end{array}
$$

### 4.3 กฎการจับลูป

1. จับเฉพาะช่อง $1$ (SOP) หรือช่อง $0$ (POS)
2. ลูปมี $2^{n}$ ช่อง เป็นสี่เหลี่ยม ($1,2,4,8,16$)
3. ลูปใหญ่ที่สุด จำนวนลูปน้อยที่สุด
4. ช่องใช้ซ้ำได้
5. ขอบซ้าย–ขวา ขอบบน–ล่าง และ 4 มุม ติดกันหมด
6. ทุกช่องต้องถูกคลุม

### 4.4 อ่านค่าลูป

ตัวแปรที่เปลี่ยนค่าในลูปให้ตัดทิ้ง ตัวแปรที่คงที่ให้เก็บไว้

$$
\begin{array}{|l|c|c|}
\hline
\text{ตัวแปรคงที่เป็น} & \text{SOP (ลูปของ 1)} & \text{POS (ลูปของ 0)} \\
\hline
1 & A & \overline{A} \\
\hline
0 & \overline{A} & A \\
\hline
\text{รวมผล} & \text{คูณในลูป แล้ว OR ทุกลูป} & \text{บวกในลูป แล้ว AND ทุกลูป} \\
\hline
\end{array}
$$

### 4.5 Don't Care ($x$)

ช่อง $x$ เลือกเป็น $1$ เฉพาะเมื่อทำให้ลูปใหญ่ขึ้นหรือลดจำนวนลูป ไม่จำเป็นต้องคลุมครบทุกช่อง $x$

---

## บทที่ 5 วงจรคอมไบเนชัน

วงจรคอมไบเนชัน คือวงจรที่เอาต์พุตขึ้นกับอินพุต ณ ขณะนั้นเท่านั้น ไม่มี Feedback ไม่มีหน่วยความจำ แสดงได้ด้วยสมการ ตารางความจริง เวนไดอะแกรม และไดอะแกรมเวลา

### 5.1 เขียนวงจรจากสมการ

$$
\begin{array}{|l|l|}
\hline
\text{ในสมการ} & \text{เกต} \\
\hline
A+B & \text{OR} \\
\hline
AB & \text{AND} \\
\hline
\overline{A} & \text{NOT} \\
\hline
\overline{A+B} & \text{NOR} \\
\hline
\overline{AB} & \text{NAND} \\
\hline
A\oplus B & \text{XOR} \\
\hline
\overline{A\oplus B} & \text{XNOR} \\
\hline
\end{array}
$$

### 5.2 เขียนวงจรจากตารางความจริง

$$
\begin{array}{|l|c|c|}
\hline
 & \text{SOP} & \text{POS} \\
\hline
\text{ดูแถวที่} & Y=1 & Y=0 \\
\hline
\text{ตัวแปรที่เป็น } 0 & \overline{A} & A \\
\hline
\text{ตัวแปรที่เป็น } 1 & A & \overline{A} \\
\hline
\text{ในแต่ละแถว} & \text{AND} & \text{OR} \\
\hline
\text{รวมทุกแถว} & \text{OR} & \text{AND} \\
\hline
\end{array}
$$

### 5.3 วิเคราะห์วงจร

ตั้งชื่อเอาต์พุตแต่ละเกต → เขียนสมการทีละเกต → เขียนตารางความจริงทีละคอลัมน์ → แรเงาเวนไดอะแกรมหรือเขียนรูปคลื่นตามตาราง

### 5.4 ออกแบบวงจร

อ่านตารางความจริงหรือไดอะแกรมเวลาเป็น $\sum m$ หรือ $\prod M$ → ลดรูปด้วย K-map หรือพีชคณิตบูลีน → ลดจำนวนเกตด้วยสูตรด้านล่าง → วาดวงจร

$$
\begin{aligned}
\overline{A}B+A\overline{B} &= A\oplus B \\
\overline{A}\,\overline{B}+AB &= \overline{A\oplus B} \\
C\overline{B}+C\overline{D} &= C\cdot\overline{BD}
\end{aligned}
$$

---

## ตารางรวมค่า 0–16 (บทที่ 1–5)

แถวละหนึ่งค่า $i$ ใช้ได้ทั้งเป็นเลขจำนวน (บทที่ 1) และเป็นเลขแถวตารางความจริงหรือเลขมินเทอม/แมกเทอม (บทที่ 2–5)

- **บทที่ 1** ฐาน 2/8/16, BCD และ Gray
- **บทที่ 2–5** $m_i$ และ $M_i$ เป็น 4 ตัวแปร $ABCD$ โดย $A$ เป็น MSB และ $M_i=\overline{m_i}$
- $i=16$ ต้องใช้ 5 บิตจึงไม่มีค่าของบทที่ 2–5 (เกิน 4 ตัวแปร) BCD ของ $i\ge10$ แปลงทีละหลักฐาน 10

| ฐาน 10 | ฐาน 2 | ฐาน 8 | ฐาน 16 | BCD | Gray | $m_i$ | $M_i$ |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| 0 | 0 | 0 | 0 | 0000 | 0 | $\overline{A}\,\overline{B}\,\overline{C}\,\overline{D}$ | $A+B+C+D$ |
| 1 | 1 | 1 | 1 | 0001 | 1 | $\overline{A}\,\overline{B}\,\overline{C}\,D$ | $A+B+C+\overline{D}$ |
| 2 | 10 | 2 | 2 | 0010 | 11 | $\overline{A}\,\overline{B}\,C\,\overline{D}$ | $A+B+\overline{C}+D$ |
| 3 | 11 | 3 | 3 | 0011 | 10 | $\overline{A}\,\overline{B}\,C\,D$ | $A+B+\overline{C}+\overline{D}$ |
| 4 | 100 | 4 | 4 | 0100 | 110 | $\overline{A}\,B\,\overline{C}\,\overline{D}$ | $A+\overline{B}+C+D$ |
| 5 | 101 | 5 | 5 | 0101 | 111 | $\overline{A}\,B\,\overline{C}\,D$ | $A+\overline{B}+C+\overline{D}$ |
| 6 | 110 | 6 | 6 | 0110 | 101 | $\overline{A}\,B\,C\,\overline{D}$ | $A+\overline{B}+\overline{C}+D$ |
| 7 | 111 | 7 | 7 | 0111 | 100 | $\overline{A}\,B\,C\,D$ | $A+\overline{B}+\overline{C}+\overline{D}$ |
| 8 | 1000 | 10 | 8 | 1000 | 1100 | $A\,\overline{B}\,\overline{C}\,\overline{D}$ | $\overline{A}+B+C+D$ |
| 9 | 1001 | 11 | 9 | 1001 | 1101 | $A\,\overline{B}\,\overline{C}\,D$ | $\overline{A}+B+C+\overline{D}$ |
| 10 | 1010 | 12 | A | 0001 0000 | 1111 | $A\,\overline{B}\,C\,\overline{D}$ | $\overline{A}+B+\overline{C}+D$ |
| 11 | 1011 | 13 | B | 0001 0001 | 1110 | $A\,\overline{B}\,C\,D$ | $\overline{A}+B+\overline{C}+\overline{D}$ |
| 12 | 1100 | 14 | C | 0001 0010 | 1010 | $A\,B\,\overline{C}\,\overline{D}$ | $\overline{A}+\overline{B}+C+D$ |
| 13 | 1101 | 15 | D | 0001 0011 | 1011 | $A\,B\,\overline{C}\,D$ | $\overline{A}+\overline{B}+C+\overline{D}$ |
| 14 | 1110 | 16 | E | 0001 0100 | 1001 | $A\,B\,C\,\overline{D}$ | $\overline{A}+\overline{B}+\overline{C}+D$ |
| 15 | 1111 | 17 | F | 0001 0101 | 1000 | $A\,B\,C\,D$ | $\overline{A}+\overline{B}+\overline{C}+\overline{D}$ |
| 16 | 10000 | 20 | 10 | 0001 0110 | 11000 | — | — |
