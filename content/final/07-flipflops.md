# บทที่ 7 ฟลิป-ฟลอป (Flip-Flop)

---

## 1. ภาพรวมของฟลิป-ฟลอป

### 1.1 ฟลิป-ฟลอปคืออะไร

นอกจากวงจรเกตพื้นฐานแล้ว ยังมีวงจรฟลิป-ฟลอป (Flip-Flop) ซึ่งเป็นอุปกรณ์สำคัญที่ใช้ในระบบดิจิทัลและคอมพิวเตอร์ ฟลิป-ฟลอปหนึ่งตัวเก็บเลขฐานสองได้ 1 บิต

ลักษณะวงจรมีเอาต์พุตคงที่ 2 เอาต์พุต คือ $Q$ และ $\overline{Q}$ โดยมีเงื่อนไขว่าเอาต์พุตหนึ่งต้องเป็นคอมพลีเมนต์ของอีกเอาต์พุตหนึ่ง ส่วนอินพุตมีจำนวนสายต่างกัน ขึ้นอยู่กับชนิดของฟลิป-ฟลอป (ในเอกสารนี้ $\overline{Q}$ อาจเขียนเป็น $Q'$ ซึ่งมีความหมายเหมือนกัน)

**สถานะของฟลิป-ฟลอป** สัญญาณอินพุตที่ป้อนให้ฟลิป-ฟลอปทำให้สถานะเปลี่ยนไปเป็นสถานะใหม่ จึงเรียกสถานะต่าง ๆ ดังนี้

| สถานะ | ความหมาย | เขียนเป็น |
|:--|:--|:-:|
| สถานะปัจจุบัน (Present State) | สถานะของฟลิป-ฟลอปก่อนป้อนสัญญาณอินพุต | $Q(t)$ |
| สถานะถัดไป (Next State) | สถานะของฟลิป-ฟลอปหลังป้อนสัญญาณอินพุตเข้าแล้ว | $Q(t+1)$ |

**ฟลิป-ฟลอปมี 4 ประเภท** ได้แก่ RS, JK, D และ T

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="750" height="150" viewBox="0 0 750 150" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<rect x="40" y="10" width="90" height="100" rx="2"/>
<line x1="10" y1="35" x2="40" y2="35"/>
<line x1="10" y1="60" x2="40" y2="60"/>
<polyline points="40,51 52,60 40,69"/>
<line x1="10" y1="85" x2="40" y2="85"/>
<line x1="130" y1="40" x2="160" y2="40"/>
<line x1="130" y1="80" x2="160" y2="80"/>
<line x1="112" y1="70.7" x2="122" y2="70.7" stroke-width="1.4"/>
<rect x="230" y="10" width="90" height="100" rx="2"/>
<line x1="200" y1="35" x2="230" y2="35"/>
<line x1="200" y1="60" x2="230" y2="60"/>
<polyline points="230,51 242,60 230,69"/>
<line x1="200" y1="85" x2="230" y2="85"/>
<line x1="320" y1="40" x2="350" y2="40"/>
<line x1="320" y1="80" x2="350" y2="80"/>
<line x1="302" y1="70.7" x2="312" y2="70.7" stroke-width="1.4"/>
<rect x="420" y="10" width="90" height="100" rx="2"/>
<line x1="390" y1="43.3" x2="420" y2="43.3"/>
<line x1="390" y1="76.7" x2="420" y2="76.7"/>
<polyline points="420,67.7 432,76.7 420,85.7"/>
<line x1="510" y1="40" x2="540" y2="40"/>
<line x1="510" y1="80" x2="540" y2="80"/>
<line x1="492" y1="70.7" x2="502" y2="70.7" stroke-width="1.4"/>
<rect x="610" y="10" width="90" height="100" rx="2"/>
<line x1="580" y1="43.3" x2="610" y2="43.3"/>
<line x1="580" y1="76.7" x2="610" y2="76.7"/>
<polyline points="610,67.7 622,76.7 610,85.7"/>
<line x1="700" y1="40" x2="730" y2="40"/>
<line x1="700" y1="80" x2="730" y2="80"/>
<line x1="682" y1="70.7" x2="692" y2="70.7" stroke-width="1.4"/>
</g>
<text x="48" y="41" text-anchor="start">S</text>
<text x="48" y="91" text-anchor="start">R</text>
<text x="122" y="46" text-anchor="end">Q</text>
<text x="122" y="86" text-anchor="end">Q</text>
<text x="85" y="136" text-anchor="middle">RS</text>
<text x="238" y="41" text-anchor="start">J</text>
<text x="238" y="91" text-anchor="start">K</text>
<text x="312" y="46" text-anchor="end">Q</text>
<text x="312" y="86" text-anchor="end">Q</text>
<text x="275" y="136" text-anchor="middle">JK</text>
<text x="428" y="49.3" text-anchor="start">D</text>
<text x="502" y="46" text-anchor="end">Q</text>
<text x="502" y="86" text-anchor="end">Q</text>
<text x="465" y="136" text-anchor="middle">D</text>
<text x="618" y="49.3" text-anchor="start">T</text>
<text x="692" y="46" text-anchor="end">Q</text>
<text x="692" y="86" text-anchor="end">Q</text>
<text x="655" y="136" text-anchor="middle">T</text>
</g>
</svg>
</div>

### 1.2 ประเภทการทำงานและพัลส์

จำแนกประเภทการทำงานของฟลิป-ฟลอปโดยดูที่ระดับลอจิกของสัญญาณออก ซึ่งมี 2 ระดับ คือ $0$ (สถานะ 0) และ $1$ (สถานะ 1) ได้ 2 แบบ

- **แบบที่หนึ่ง** ใช้สัญญาณพัลส์ป้อนสัญญาณเข้าโดยตรง ทำให้สัญญาณออกเปลี่ยนสถานะ ฟลิป-ฟลอปประเภทนี้เรียกว่า **วงจรแล็ทช์ (Latch)**
- **แบบที่สอง** ป้อนสัญญาณเข้า และใช้สัญญาณพัลส์เป็นตัวกระตุ้น (Trigger) ให้สัญญาณออกเปลี่ยนสถานะ สัญญาณออกจะเปลี่ยนสถานะก็ต่อเมื่อมีสัญญาณพัลส์มากระตุ้น ฟลิป-ฟลอปประเภทนี้นิยมใช้กันมากเพราะมีขอบเขตการทำงานสูง

**การกระตุ้นด้วยพัลส์ (Pulse)** แบ่งเป็น 4 แบบ

| แบบ | ชื่อ | สัญลักษณ์ |
|:-:|:--|:--|
| 1 | กระตุ้นด้วยขอบสัญญาณบวก (Positive-Edge Triggered) | ขอบขาขึ้น $\uparrow$ (Rising Edge) |
| 2 | กระตุ้นด้วยขอบสัญญาณลบ (Negative-Edge Triggered) | ขอบขาลง $\downarrow$ (Falling Edge) |
| 3 | กระตุ้นด้วยพัลส์บวก (Positive-Pulse Triggered) | พัลส์ที่เป็น $1$ |
| 4 | กระตุ้นด้วยพัลส์ลบ (Negative-Pulse Triggered) | พัลส์ที่เป็น $0$ |

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="640" height="120" viewBox="0 0 640 120" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="2.2" fill="none">
<path d="M10,80 L50,80 L50,30 L90,30 L90,80 L120,80"/>
<path d="M170,80 L210,80 L210,30 L250,30 L250,80 L280,80"/>
<path d="M330,80 L370,80 L370,30 L410,30 L410,80 L440,80"/>
<path d="M490,30 L530,30 L530,80 L570,80 L570,30 L600,30"/>
</g>
<g fill="currentColor"><polygon points="46,45 50,57 42,57" transform="translate(0,-4)"/>
<polygon points="244,63 240,51 248,51" transform="translate(0,4)"/></g>
<text x="60" y="108" text-anchor="middle" font-size="14">Rising edge</text>
<text x="220" y="108" text-anchor="middle" font-size="14">Falling edge</text>
<text x="380" y="108" text-anchor="middle" font-size="14">Positive pulse</text>
<text x="540" y="108" text-anchor="middle" font-size="14">Negative pulse</text>
</svg>
</div>

ในสัญลักษณ์ของฟลิป-ฟลอป สามเหลี่ยมเล็กที่ขาสัญญาณนาฬิกา ($>$) แสดงว่าทำงานด้วยขอบสัญญาณ และถ้ามีวงกลมเล็กที่ขานั้นด้วย แสดงว่าทำงานที่ขอบขาลง ($\downarrow$)

### 1.3 ตารางและสมการที่ใช้อธิบายฟลิป-ฟลอป

ฟลิป-ฟลอปแต่ละชนิดอธิบายด้วยตารางและสมการ 4 อย่าง

| รายการ | ตารางบอกอะไร |
|:--|:--|
| ตารางความจริงแสดงลักษณะ | อินพุต และ $Q(t)$ เป็นตัวกำหนด $Q(t+1)$ |
| ตารางการทำงาน (Operation Table) | อินพุต เป็นตัวกำหนด $Q(t+1)$ และ $\overline{Q}(t+1)$ |
| ตารางการกระตุ้น (Excitation Table) | ต้องการให้ $Q(t)$ เปลี่ยนเป็น $Q(t+1)$ ต้องป้อนอินพุตเท่าไร |
| สมการแสดงลักษณะ | $Q(t+1)$ เขียนเป็นสมการของอินพุตและ $Q(t)$ |

**วิธีหาสมการแสดงลักษณะ** นำตารางความจริงแสดงลักษณะมาใส่ใน K-map โดยให้ $Q(t)$ เป็นตัวแปรหนึ่ง ทำลูปของ $1$ แล้วอ่านเป็นผลคูณ ส่วนช่อง $x$ (ไม่สนใจ) เลือกเข้าลูปได้ตามสะดวก

**วิธีหาตารางกระตุ้น** ดูทุกคู่ $Q(t)$ $\to$ $Q(t+1)$ ในตารางความจริง แล้วเขียนอินพุตที่ทำให้เกิดการเปลี่ยนนั้น ถ้าอินพุตตัวใดเป็น $0$ หรือ $1$ ก็ได้ ให้ใส่ $x$

เครื่องหมาย $?$ ในตารางหมายถึงอินพุตที่ไม่ใช้งาน (ไม่อนุญาตให้ป้อน)

### ตัวอย่างที่ 1  JK ฟลิป-ฟลอปมี $Q(t)$ $= 1$ จงหา $Q(t+1)$ เมื่อ $JK = 00, 01, 10, 11$ (และเมื่อ $Q(t)$ $= 0$)

$\mathbf{Sol}^{n}$

ใช้ตารางการทำงานของ JK: $JK=00$ คงสถานะเดิม, $JK=01$ เปลี่ยนเป็น $0$, $JK=10$ เปลี่ยนเป็น $1$, $JK=11$ เป็นคอมพลีเมนต์ของ $Q(t)$

- $Q(t)$ $= 1$ : $00 \Rightarrow 1$, $01 \Rightarrow 0$, $10 \Rightarrow 1$, $11 \Rightarrow \overline{1} = 0$
- $Q(t)$ $= 0$ : $00 \Rightarrow 0$, $01 \Rightarrow 0$, $10 \Rightarrow 1$, $11 \Rightarrow \overline{0} = 1$

$\mathbf{Ans}\quad \text{ตารางต่อไปนี้}$

| $JK$ | $Q(t+1)$ เมื่อ $Q(t)$ $=1$ | $Q(t+1)$ เมื่อ $Q(t)$ $=0$ | ผล |
|:-:|:-:|:-:|:-:|
| $00$ | 1 | 0 | คงสถานะเดิม |
| $01$ | 0 | 0 | เปลี่ยนเป็น 0 |
| $10$ | 1 | 1 | เปลี่ยนเป็น 1 |
| $11$ | 0 | 1 | เป็นคอมพลีเมนต์กับ $Q(t)$ |

### ตัวอย่างที่ 2  ต้องการให้ $Q(t)$ เปลี่ยนเป็น $Q(t+1)$ ตามที่กำหนด จงหาอินพุตของ RS (แบบ NOR), JK, D และ T ที่ต้องป้อน

$\mathbf{Sol}^{n}$

อ่านจากตารางกระตุ้นของแต่ละชนิด ทีละคู่ $Q(t)$ $\to$ $Q(t+1)$

- RS : $0\to0$ ใช้ $R=x, S=0$ ; $0\to1$ ใช้ $R=0, S=1$ ; $1\to0$ ใช้ $R=1, S=0$ ; $1\to1$ ใช้ $R=0, S=x$
- JK : $0\to0$ ใช้ $J=0, K=x$ ; $0\to1$ ใช้ $J=1, K=x$ ; $1\to0$ ใช้ $J=x, K=1$ ; $1\to1$ ใช้ $J=x, K=0$
- D : ป้อน $D = Q(t+1)$ ตรง ๆ
- T : ป้อน $T=0$ ถ้าสถานะไม่เปลี่ยน และ $T=1$ ถ้าสถานะเปลี่ยน

$\mathbf{Ans}\quad \text{ตารางต่อไปนี้}$

| $Q(t)$ $\to$ $Q(t+1)$ | $R$ | $S$ | $J$ | $K$ | $D$ | $T$ |
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| $0 \to 0$ | $x$ | $0$ | $0$ | $x$ | $0$ | $0$ |
| $0 \to 1$ | $0$ | $1$ | $1$ | $x$ | $1$ | $1$ |
| $1 \to 0$ | $1$ | $0$ | $x$ | $1$ | $0$ | $1$ |
| $1 \to 1$ | $0$ | $x$ | $x$ | $0$ | $1$ | $0$ |

## 2. RS ฟลิป-ฟลอป

### 2.1 วงจรที่จำค่าได้ และ RS ฟลิป-ฟลอป

RS ฟลิป-ฟลอปเป็นอุปกรณ์หน่วยความจำที่สร้างได้จาก NOR เกต หรือ NAND เกต ประกอบขึ้นด้วยอินเวอร์เตอร์ ถ้าต่ออินเวอร์เตอร์สองตัวเป็นวงปิด สัญญาณจะป้อนกลับมาที่อินพุตของตัวแรก ทำให้วงจรค้างอยู่ในสถานะเดิมได้ ในรูป $Q$ กับ $\overline{Q}$ เป็นคอมพลีเมนต์กันเสมอ

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="380" height="176" viewBox="0 0 380 176" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<polygon points="120,42 120,66 142,54"/>
<circle cx="147" cy="54" r="5"/>
<polygon points="230,42 230,66 252,54"/>
<circle cx="257" cy="54" r="5"/>
<line x1="152" y1="54" x2="230" y2="54"/>
<line x1="262" y1="54" x2="340" y2="54"/>
<line x1="340" y1="54" x2="340" y2="130"/>
<line x1="340" y1="130" x2="70" y2="130"/>
<line x1="70" y1="130" x2="70" y2="54"/>
<line x1="70" y1="54" x2="120" y2="54"/>
<polyline points="200,122 212,130 200,138" fill="currentColor"/>
<line x1="335" y1="24.7" x2="345" y2="24.7" stroke-width="1.4"/>
<circle cx="192" cy="54" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="340" cy="54" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="131" y="32" text-anchor="middle">A</text>
<text x="241" y="32" text-anchor="middle">B</text>
<text x="192" y="40" text-anchor="middle">Q</text>
<text x="340" y="40" text-anchor="middle">Q</text>
<text x="205" y="160" text-anchor="middle" font-size="14">feedback</text>
</g>
</svg>
</div>

ถ้าต้องการเปลี่ยนสถานะ ต้องเพิ่มอินพุตให้วงจร เพื่อนำข้อมูลไปจัดเก็บ ให้สถานะเอาต์พุตเปลี่ยนไปตามที่ต้องการ RS ฟลิป-ฟลอปเปลี่ยนอินเวอร์เตอร์เป็นเกต 2 อินพุต จึงมีอินพุตเพิ่มคือ $S$ (Set) และ $R$ (Reset)

### 2.2 RS ฟลิป-ฟลอปแบบ NOR

วงจรสร้างจาก NOR เกต 2 ตัวต่อไขว้กัน กำหนดให้ $Q$ และ $\overline{Q}$ เป็นสัญญาณออก และสายสัญญาณเข้า 2 สาย คือ $S$ (Set) และ $R$ (Reset) ใช้ควบคุมสถานะของฟลิป-ฟลอป

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="330" height="162" viewBox="0 0 330 162" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<path d="M130,20 C152,20 178,30.5 190,41 C178,51.5 152,62 130,62 Q144,41 130,20 Z"/>
<circle cx="195" cy="41" r="5"/>
<path d="M130,100 C152,100 178,110.5 190,121 C178,131.5 152,142 130,142 Q144,121 130,100 Z"/>
<circle cx="195" cy="121" r="5"/>
<line x1="200" y1="41" x2="210" y2="41"/>
<line x1="210" y1="41" x2="210" y2="73"/>
<line x1="210" y1="73" x2="108" y2="73"/>
<line x1="108" y1="73" x2="108" y2="114"/>
<line x1="108" y1="114" x2="136.2" y2="114"/>
<line x1="200" y1="121" x2="220" y2="121"/>
<line x1="220" y1="121" x2="220" y2="89"/>
<line x1="220" y1="89" x2="96" y2="89"/>
<line x1="96" y1="89" x2="96" y2="48"/>
<line x1="96" y1="48" x2="136.2" y2="48"/>
<line x1="104" y1="34" x2="136.2" y2="34"/>
<line x1="104" y1="128" x2="136.2" y2="128"/>
<line x1="210" y1="41" x2="266" y2="41"/>
<line x1="220" y1="121" x2="266" y2="121"/>
<line x1="272" y1="111.7" x2="282" y2="111.7" stroke-width="1.4"/>
<circle cx="210" cy="41" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="220" cy="121" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="100" y="40" text-anchor="end">R</text>
<text x="100" y="134" text-anchor="end">S</text>
<text x="272" y="47" text-anchor="start">Q</text>
<text x="272" y="127" text-anchor="start">Q</text>
</g>
</svg>
</div>

**นิยามของ RS ฟลิป-ฟลอป**

- $Q$ และ $\overline{Q}$ เป็นคอมพลีเมนต์ซึ่งกันและกัน จึงอยู่ในสถานะเดียวกันในเวลาเดียวกันไม่ได้
- อินพุต Set ทำให้ $Q$ เป็น $1$ และ $\overline{Q}$ เป็น $0$
- อินพุต Reset ทำให้ $Q$ เป็น $0$ และ $\overline{Q}$ เป็น $1$
- การเปลี่ยนแปลงสถานะแสดงด้วยตารางแสดงสถานะ เมื่อ $Q(t)$ เป็นสถานะปัจจุบัน และ $Q(t+1)$ เป็นสถานะถัดไป

**ลักษณะการทำงาน** เอาต์พุตของ NOR เกตเป็น $1$ เมื่ออินพุตทั้งสองเป็น $0$ เท่านั้น จึงได้ผลตามนี้

| $S$ | $R$ | การทำงาน |
|:-:|:-:|:--|
| 0 | 0 | คงสถานะเดิม (เอาต์พุตของเกตตัวหนึ่งส่งให้อีกตัวคงค่าไว้) |
| 1 | 0 | $S=1$ ทำให้ $\overline{Q}=0$ แล้ว $Q = \overline{0+0} = 1$ : Set |
| 0 | 1 | $R=1$ ทำให้ $Q=0$ แล้ว $\overline{Q} = \overline{0+0} = 1$ : Reset |
| 1 | 1 | ได้ $Q = \overline{Q} = 0$ ซึ่งขัดกับนิยาม จึงห้ามใช้ |

**ตารางความจริงแสดงลักษณะ** (เรียงอินพุตเป็น $R$ แล้ว $S$ ตามสไลด์)

| $R$ | $S$ | $Q(t)$ | $Q(t+1)$ |  |
|:-:|:-:|:-:|:-:|:-:|
| 0 | 0 | 0 | 0 | คงสถานะเดิม |
| 0 | 0 | 1 | 1 |  |
| 0 | 1 | 0 | 1 | เปลี่ยนเป็น 1 |
| 0 | 1 | 1 | 1 |  |
| 1 | 0 | 0 | 0 | เปลี่ยนเป็น 0 |
| 1 | 0 | 1 | 0 |  |
| 1 | 1 | 0 | ? | ไม่ใช้งาน |
| 1 | 1 | 1 | ? |  |

**ตารางการกระตุ้น และตารางการทำงาน**

| $Q(t)$ | $Q(t+1)$ | $R$ | $S$ |
|:-:|:-:|:-:|:-:|
| 0 | 0 | $x$ | $0$ |
| 0 | 1 | $0$ | $1$ |
| 1 | 0 | $1$ | $0$ |
| 1 | 1 | $0$ | $x$ |

| $R$ | $S$ | $Q(t+1)$ | $\overline{Q}(t+1)$ |
|:-:|:-:|:-:|:-:|
| 0 | 0 | $Q(t)$ | $\overline{Q}(t)$ |
| 0 | 1 | 1 | 0 |
| 1 | 0 | 0 | 1 |
| 1 | 1 | ? | ? |

**สมการแสดงลักษณะ**

$$Q(t+1) = S + \overline{R}\,Q(t)$$

### ตัวอย่างที่ 3  RS ฟลิป-ฟลอปแบบ NOR เริ่มต้นที่ $Q=0$ ป้อนอินพุต $(S,R)$ ตามลำดับ $00, 10, 00, 01, 00$ จงหา $Q$ และ $\overline{Q}$ หลังป้อนแต่ละครั้ง

$\mathbf{Sol}^{n}$

ใช้สมการแสดงลักษณะ $Q(t+1) = S + \overline{R}\,Q(t)$ ทีละขั้น และ $\overline{Q}(t+1) = \overline{Q(t+1)}$

- ขั้น 1 : $S=0,R=0$ $\Rightarrow Q(t+1) = 0 + 1\cdot 0 = 0$
- ขั้น 2 : $S=1,R=0$ $\Rightarrow Q(t+1) = 1 + 1\cdot 0 = 1$
- ขั้น 3 : $S=0,R=0$ $\Rightarrow Q(t+1) = 0 + 1\cdot 1 = 1$
- ขั้น 4 : $S=0,R=1$ $\Rightarrow Q(t+1) = 0 + 0\cdot 1 = 0$
- ขั้น 5 : $S=0,R=0$ $\Rightarrow Q(t+1) = 0 + 1\cdot 0 = 0$

$\mathbf{Ans}\quad Q = 0,\ 1,\ 1,\ 0,\ 0 \quad \overline{Q} = 1,\ 0,\ 0,\ 1,\ 1$

| ขั้น | $S$ | $R$ | $Q(t)$ | $Q(t+1)$ | $\overline{Q}(t+1)$ | ผล |
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| 1 | 0 | 0 | 0 | 0 | 1 | คงสถานะเดิม |
| 2 | 1 | 0 | 0 | 1 | 0 | Set |
| 3 | 0 | 0 | 1 | 1 | 0 | คงสถานะเดิม |
| 4 | 0 | 1 | 1 | 0 | 1 | Reset |
| 5 | 0 | 0 | 0 | 0 | 1 | คงสถานะเดิม |

### ตัวอย่างที่ 4  จงหาสมการแสดงลักษณะ $Q(t+1)$ ของ RS ฟลิป-ฟลอปแบบ NOR จากตารางความจริง

$\mathbf{Sol}^{n}$

ใส่ค่า $Q(t+1)$ จากตารางความจริงลงใน K-map ให้ $RS$ เรียงเป็น $00, 01, 11, 10$ และ $Q(t)$ เป็นแถว ช่อง $RS=11$ ใส่ $x$ เพราะไม่ใช้งาน

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="304" height="172" viewBox="0 0 304 172" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.6" fill="none">
<rect x="74" y="52" width="216" height="108"/>
<line x1="128" y1="52" x2="128" y2="160"/>
<line x1="182" y1="52" x2="182" y2="160"/>
<line x1="236" y1="52" x2="236" y2="160"/>
<line x1="74" y1="106" x2="290" y2="106"/>
<line x1="8" y1="8" x2="74" y2="52"/>
</g>
<text x="101" y="37" text-anchor="middle">00</text>
<text x="155" y="37" text-anchor="middle">01</text>
<text x="209" y="37" text-anchor="middle">11</text>
<text x="263" y="37" text-anchor="middle">10</text>
<text x="65" y="85" text-anchor="end">0</text>
<text x="65" y="139" text-anchor="end">1</text>
<text x="70" y="18" text-anchor="end">RS</text><text x="8" y="44">Q(t)</text>
<text x="155" y="87" text-anchor="middle" font-size="22">1</text>
<text x="209" y="87" text-anchor="middle" font-size="22">x</text>
<text x="101" y="141" text-anchor="middle" font-size="22">1</text>
<text x="155" y="141" text-anchor="middle" font-size="22">1</text>
<text x="209" y="141" text-anchor="middle" font-size="22">x</text>
<path d="M141.5,56.5 L222.5,56.5 M231.5,65.5 L231.5,146.5 M222.5,155.5 L141.5,155.5 M132.5,146.5 L132.5,65.5 M132.5,65.5 A9,9 0 0 1 141.5,56.5 M222.5,56.5 A9,9 0 0 1 231.5,65.5 M231.5,146.5 A9,9 0 0 1 222.5,155.5 M141.5,155.5 A9,9 0 0 1 132.5,146.5" stroke="#e8743b" stroke-width="2.6" fill="none"/>
<text x="131" y="67" font-size="14" fill="#e8743b" font-weight="bold">1</text>
<path d="M91,114 L165,114 M174,123 L174,143 M165,152 L91,152 M82,143 L82,123 M82,123 A9,9 0 0 1 91,114 M165,114 A9,9 0 0 1 174,123 M174,143 A9,9 0 0 1 165,152 M91,152 A9,9 0 0 1 82,143" stroke="#3b8be8" stroke-width="2.6" fill="none"/>
<text x="77" y="121" font-size="14" fill="#3b8be8" font-weight="bold">2</text>
</svg>
</div>

- ลูปสีส้ม (ช่อง $RS=01, 11$ ของทั้งสองแถว) : $S=1 \Rightarrow S$
- ลูปสีน้ำเงิน (แถว $Q(t)$$=1$ ช่อง $RS=00, 01$) : $R=0,\ Q(t)=1 \Rightarrow \overline{R}\,Q(t)$

$\mathbf{Ans}\quad Q(t+1) = S + \overline{R}\,Q(t)$

### 2.3 RS ฟลิป-ฟลอปแบบ NAND

วงจรสร้างจาก NAND เกต 2 ตัวต่อไขว้กัน ใช้สัญลักษณ์เดียวกับแบบ NOR แต่ลักษณะการทำงานต่างกัน เพราะเอาต์พุตของ NAND เกตเป็น $0$ เมื่ออินพุตทั้งสองเป็น $1$ เท่านั้น

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="330" height="162" viewBox="0 0 330 162" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<path d="M130,20 H156 A26,21 0 0 1 156,62 H130 Z"/>
<circle cx="187" cy="41" r="5"/>
<path d="M130,100 H156 A26,21 0 0 1 156,142 H130 Z"/>
<circle cx="187" cy="121" r="5"/>
<line x1="192" y1="41" x2="202" y2="41"/>
<line x1="202" y1="41" x2="202" y2="73"/>
<line x1="202" y1="73" x2="108" y2="73"/>
<line x1="108" y1="73" x2="108" y2="114"/>
<line x1="108" y1="114" x2="130" y2="114"/>
<line x1="192" y1="121" x2="212" y2="121"/>
<line x1="212" y1="121" x2="212" y2="89"/>
<line x1="212" y1="89" x2="96" y2="89"/>
<line x1="96" y1="89" x2="96" y2="48"/>
<line x1="96" y1="48" x2="130" y2="48"/>
<line x1="104" y1="34" x2="130" y2="34"/>
<line x1="104" y1="128" x2="130" y2="128"/>
<line x1="202" y1="41" x2="258" y2="41"/>
<line x1="212" y1="121" x2="258" y2="121"/>
<line x1="264" y1="111.7" x2="274" y2="111.7" stroke-width="1.4"/>
<circle cx="202" cy="41" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="212" cy="121" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="100" y="40" text-anchor="end">R</text>
<text x="100" y="134" text-anchor="end">S</text>
<text x="264" y="47" text-anchor="start">Q</text>
<text x="264" y="127" text-anchor="start">Q</text>
</g>
</svg>
</div>

| $R$ | $S$ | การทำงาน |
|:-:|:-:|:--|
| 0 | 0 | ได้ $Q = \overline{Q} = 1$ ซึ่งขัดกับนิยาม จึงห้ามใช้ |
| 0 | 1 | $R=0$ ทำให้ $Q=1$ แล้ว $\overline{Q} = \overline{1\cdot1} = 0$ : Set |
| 1 | 0 | $S=0$ ทำให้ $\overline{Q}=1$ แล้ว $Q = \overline{1\cdot1} = 0$ : Reset |
| 1 | 1 | คงสถานะเดิม |

**ตารางความจริงแสดงลักษณะ**

| $R$ | $S$ | $Q(t)$ | $Q(t+1)$ |  |
|:-:|:-:|:-:|:-:|:-:|
| 0 | 0 | 0 | ? | ไม่ใช้งาน |
| 0 | 0 | 1 | ? |  |
| 0 | 1 | 0 | 1 | เปลี่ยนเป็น 1 |
| 0 | 1 | 1 | 1 |  |
| 1 | 0 | 0 | 0 | เปลี่ยนเป็น 0 |
| 1 | 0 | 1 | 0 |  |
| 1 | 1 | 0 | 0 | คงสถานะเดิม |
| 1 | 1 | 1 | 1 |  |

**ตารางการกระตุ้น และตารางการทำงาน**

| $Q(t)$ | $Q(t+1)$ | $R$ | $S$ |
|:-:|:-:|:-:|:-:|
| 0 | 0 | $1$ | $x$ |
| 0 | 1 | $0$ | $1$ |
| 1 | 0 | $1$ | $0$ |
| 1 | 1 | $x$ | $1$ |

| $R$ | $S$ | $Q(t+1)$ | $\overline{Q}(t+1)$ |
|:-:|:-:|:-:|:-:|
| 0 | 0 | ? | ? |
| 0 | 1 | 1 | 0 |
| 1 | 0 | 0 | 1 |
| 1 | 1 | $Q(t)$ | $\overline{Q}(t)$ |

**สมการแสดงลักษณะ**

$$Q(t+1) = \overline{R} + S\,Q(t)$$

### ตัวอย่างที่ 5  RS ฟลิป-ฟลอปแบบ NAND เริ่มต้นที่ $Q=0$ ป้อนอินพุต $(R,S)$ ตามลำดับ $11, 01, 11, 10, 11$ จงหา $Q$ และ $\overline{Q}$ หลังป้อนแต่ละครั้ง

$\mathbf{Sol}^{n}$

ใช้สมการแสดงลักษณะ $Q(t+1) = \overline{R} + S\,Q(t)$ ทีละขั้น

- ขั้น 1 : $R=1,S=1$ $\Rightarrow Q(t+1) = 0 + 1\cdot 0 = 0$
- ขั้น 2 : $R=0,S=1$ $\Rightarrow Q(t+1) = 1 + 1\cdot 0 = 1$
- ขั้น 3 : $R=1,S=1$ $\Rightarrow Q(t+1) = 0 + 1\cdot 1 = 1$
- ขั้น 4 : $R=1,S=0$ $\Rightarrow Q(t+1) = 0 + 0\cdot 1 = 0$
- ขั้น 5 : $R=1,S=1$ $\Rightarrow Q(t+1) = 0 + 1\cdot 0 = 0$

$\mathbf{Ans}\quad Q = 0,\ 1,\ 1,\ 0,\ 0 \quad \overline{Q} = 1,\ 0,\ 0,\ 1,\ 1$

| ขั้น | $R$ | $S$ | $Q(t)$ | $Q(t+1)$ | $\overline{Q}(t+1)$ | ผล |
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| 1 | 1 | 1 | 0 | 0 | 1 | คงสถานะเดิม |
| 2 | 0 | 1 | 0 | 1 | 0 | Set |
| 3 | 1 | 1 | 1 | 1 | 0 | คงสถานะเดิม |
| 4 | 1 | 0 | 1 | 0 | 1 | Reset |
| 5 | 1 | 1 | 0 | 0 | 1 | คงสถานะเดิม |

### ตัวอย่างที่ 6  จงหาสมการแสดงลักษณะ $Q(t+1)$ ของ RS ฟลิป-ฟลอปแบบ NAND จากตารางความจริง

$\mathbf{Sol}^{n}$

ใส่ค่า $Q(t+1)$ ลงใน K-map ช่อง $RS=00$ ใส่ $x$ เพราะไม่ใช้งาน

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="304" height="172" viewBox="0 0 304 172" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.6" fill="none">
<rect x="74" y="52" width="216" height="108"/>
<line x1="128" y1="52" x2="128" y2="160"/>
<line x1="182" y1="52" x2="182" y2="160"/>
<line x1="236" y1="52" x2="236" y2="160"/>
<line x1="74" y1="106" x2="290" y2="106"/>
<line x1="8" y1="8" x2="74" y2="52"/>
</g>
<text x="101" y="37" text-anchor="middle">00</text>
<text x="155" y="37" text-anchor="middle">01</text>
<text x="209" y="37" text-anchor="middle">11</text>
<text x="263" y="37" text-anchor="middle">10</text>
<text x="65" y="85" text-anchor="end">0</text>
<text x="65" y="139" text-anchor="end">1</text>
<text x="70" y="18" text-anchor="end">RS</text><text x="8" y="44">Q(t)</text>
<text x="101" y="87" text-anchor="middle" font-size="22">x</text>
<text x="155" y="87" text-anchor="middle" font-size="22">1</text>
<text x="101" y="141" text-anchor="middle" font-size="22">x</text>
<text x="155" y="141" text-anchor="middle" font-size="22">1</text>
<text x="209" y="141" text-anchor="middle" font-size="22">1</text>
<path d="M87.5,56.5 L168.5,56.5 M177.5,65.5 L177.5,146.5 M168.5,155.5 L87.5,155.5 M78.5,146.5 L78.5,65.5 M78.5,65.5 A9,9 0 0 1 87.5,56.5 M168.5,56.5 A9,9 0 0 1 177.5,65.5 M177.5,146.5 A9,9 0 0 1 168.5,155.5 M87.5,155.5 A9,9 0 0 1 78.5,146.5" stroke="#e8743b" stroke-width="2.6" fill="none"/>
<text x="77" y="67" font-size="14" fill="#e8743b" font-weight="bold">1</text>
<path d="M145,114 L219,114 M228,123 L228,143 M219,152 L145,152 M136,143 L136,123 M136,123 A9,9 0 0 1 145,114 M219,114 A9,9 0 0 1 228,123 M228,143 A9,9 0 0 1 219,152 M145,152 A9,9 0 0 1 136,143" stroke="#3b8be8" stroke-width="2.6" fill="none"/>
<text x="131" y="121" font-size="14" fill="#3b8be8" font-weight="bold">2</text>
</svg>
</div>

- ลูปสีส้ม (ช่อง $RS=00, 01$ ของทั้งสองแถว) : $R=0 \Rightarrow \overline{R}$
- ลูปสีน้ำเงิน (แถว $Q(t)$$=1$ ช่อง $RS=01, 11$) : $S=1,\ Q(t)=1 \Rightarrow S\,Q(t)$

$\mathbf{Ans}\quad Q(t+1) = \overline{R} + S\,Q(t)$

### 2.4 Clock RS ฟลิป-ฟลอป

การทำงานของ Clock RS ฟลิป-ฟลอปคล้าย RS ฟลิป-ฟลอปแบบธรรมดา เพียงแต่มีจังหวะการทำงานขึ้นอยู่กับสัญญาณนาฬิกา (Clock Pulse, CP) ที่มากระตุ้นเพิ่มขึ้น โดยสัญญาณเข้า $R$ และ $S$ ตามปกติไม่สามารถทำให้สัญญาณออกเปลี่ยนสถานะได้ จะทำงานได้เมื่อมีสัญญาณมากระตุ้น

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="456" height="162" viewBox="0 0 456 162" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(26,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<path d="M80,20 H106 A26,21 0 0 1 106,62 H80 Z"/>
<path d="M80,100 H106 A26,21 0 0 1 106,142 H80 Z"/>
<path d="M230,20 C252,20 278,30.5 290,41 C278,51.5 252,62 230,62 Q244,41 230,20 Z"/>
<circle cx="295" cy="41" r="5"/>
<path d="M230,100 C252,100 278,110.5 290,121 C278,131.5 252,142 230,142 Q244,121 230,100 Z"/>
<circle cx="295" cy="121" r="5"/>
<line x1="300" y1="41" x2="310" y2="41"/>
<line x1="310" y1="41" x2="310" y2="73"/>
<line x1="310" y1="73" x2="208" y2="73"/>
<line x1="208" y1="73" x2="208" y2="114"/>
<line x1="208" y1="114" x2="236.2" y2="114"/>
<line x1="300" y1="121" x2="320" y2="121"/>
<line x1="320" y1="121" x2="320" y2="89"/>
<line x1="320" y1="89" x2="196" y2="89"/>
<line x1="196" y1="89" x2="196" y2="48"/>
<line x1="196" y1="48" x2="236.2" y2="48"/>
<line x1="22" y1="34" x2="80" y2="34"/>
<line x1="22" y1="128" x2="80" y2="128"/>
<line x1="22" y1="81" x2="52" y2="81"/>
<line x1="52" y1="48" x2="52" y2="114"/>
<line x1="52" y1="48" x2="80" y2="48"/>
<line x1="52" y1="114" x2="80" y2="114"/>
<line x1="132" y1="41" x2="144" y2="41"/>
<line x1="144" y1="41" x2="144" y2="34"/>
<line x1="144" y1="34" x2="236.2" y2="34"/>
<line x1="132" y1="121" x2="144" y2="121"/>
<line x1="144" y1="121" x2="144" y2="128"/>
<line x1="144" y1="128" x2="236.2" y2="128"/>
<line x1="310" y1="41" x2="366" y2="41"/>
<line x1="320" y1="121" x2="366" y2="121"/>
<line x1="372" y1="111.7" x2="382" y2="111.7" stroke-width="1.4"/>
<circle cx="310" cy="41" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="320" cy="121" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="52" cy="81" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="18" y="40" text-anchor="end">R</text>
<text x="18" y="134" text-anchor="end">S</text>
<text x="18" y="87" text-anchor="end">CP</text>
<text x="372" y="47" text-anchor="start">Q</text>
<text x="372" y="127" text-anchor="start">Q</text>
</g>
</svg>
</div>

**ตารางการทำงาน** ($\uparrow$ คือสัญญาณนาฬิกามากระตุ้น, $-$ คือไม่มีสัญญาณกระตุ้น)

| CP | $R$ | $S$ | $Q(t+1)$ | $\overline{Q}(t+1)$ |
|:-:|:-:|:-:|:-:|:-:|
| $-$ | $x$ | $x$ | $Q(t)$ | $\overline{Q}(t)$ |
| $\uparrow$ | 0 | 0 | $Q(t)$ | $\overline{Q}(t)$ |
| $\uparrow$ | 0 | 1 | 1 | 0 |
| $\uparrow$ | 1 | 0 | 0 | 1 |
| $\uparrow$ | 1 | 1 | ? | ? |

### ตัวอย่างที่ 7  Clock RS ฟลิป-ฟลอปเริ่มต้นที่ $Q=0$ ป้อน $(CP, S, R)$ ตามลำดับ $(-,1,0), (\uparrow,0,0), (\uparrow,1,0), (-,0,1), (\uparrow,0,1), (\uparrow,0,0)$ จงหา $Q$ หลังป้อนแต่ละครั้ง

$\mathbf{Sol}^{n}$

ดู CP ก่อน ถ้าไม่มีสัญญาณกระตุ้น ($-$) $Q$ ไม่เปลี่ยน ถ้ามี ($\uparrow$) จึงดู $S$ และ $R$ ตามตารางการทำงาน

- ขั้น 1 : ไม่มี CP $\Rightarrow Q=0$
- ขั้น 2 : $\uparrow, S=0,R=0$ คงสถานะเดิม $\Rightarrow Q=0$
- ขั้น 3 : $\uparrow, S=1,R=0$ Set $\Rightarrow Q=1$
- ขั้น 4 : ไม่มี CP $\Rightarrow Q=1$ (แม้ $R=1$)
- ขั้น 5 : $\uparrow, S=0,R=1$ Reset $\Rightarrow Q=0$
- ขั้น 6 : $\uparrow, S=0,R=0$ คงสถานะเดิม $\Rightarrow Q=0$

$\mathbf{Ans}\quad Q = 0,\ 0,\ 1,\ 1,\ 0,\ 0$

| ขั้น | CP | $S$ | $R$ | $Q(t)$ | $Q(t+1)$ | ผล |
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| 1 | $-$ | 1 | 0 | 0 | 0 | ไม่มี CP คงสถานะเดิม |
| 2 | $\uparrow$ | 0 | 0 | 0 | 0 | คงสถานะเดิม |
| 3 | $\uparrow$ | 1 | 0 | 0 | 1 | Set |
| 4 | $-$ | 0 | 1 | 1 | 1 | ไม่มี CP คงสถานะเดิม |
| 5 | $\uparrow$ | 0 | 1 | 1 | 0 | Reset |
| 6 | $\uparrow$ | 0 | 0 | 0 | 0 | คงสถานะเดิม |

## 3. JK ฟลิป-ฟลอป

### 3.1 JK ฟลิป-ฟลอป

JK ฟลิป-ฟลอปเป็นฟลิป-ฟลอปที่นิยมใช้มากกว่า RS เพราะถูกสร้างขึ้นมาแก้ข้อเสียของ RS ในกรณีที่ป้อน $R=S=1$ แล้วทำให้สัญญาณออก $Q(t+1)$ และ $\overline{Q}(t+1)$ เหมือนกัน ซึ่งเป็นกรณีที่ไม่พึงต้องการ เมื่อเทียบสัญญาณเข้าของ JK กับ RS จะเห็นว่า **$J = S$ และ $K = R$**

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="504" height="234" viewBox="0 0 504 234" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(34,8)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<path d="M130,10 H156 A26,28 0 0 1 156,66 H130 Z"/>
<circle cx="187" cy="38" r="5"/>
<path d="M130,130 H156 A26,28 0 0 1 156,186 H130 Z"/>
<circle cx="187" cy="158" r="5"/>
<path d="M270,28 H296 A26,21 0 0 1 296,70 H270 Z"/>
<circle cx="327" cy="49" r="5"/>
<path d="M270,118 H296 A26,21 0 0 1 296,160 H270 Z"/>
<circle cx="327" cy="139" r="5"/>
<line x1="332" y1="49" x2="342" y2="49"/>
<line x1="342" y1="49" x2="342" y2="86"/>
<line x1="342" y1="86" x2="248" y2="86"/>
<line x1="248" y1="86" x2="248" y2="132"/>
<line x1="248" y1="132" x2="270" y2="132"/>
<line x1="332" y1="139" x2="352" y2="139"/>
<line x1="352" y1="139" x2="352" y2="102"/>
<line x1="352" y1="102" x2="236" y2="102"/>
<line x1="236" y1="102" x2="236" y2="56"/>
<line x1="236" y1="56" x2="270" y2="56"/>
<line x1="22" y1="24" x2="130" y2="24"/>
<line x1="22" y1="144" x2="130" y2="144"/>
<line x1="22" y1="98" x2="90" y2="98"/>
<line x1="90" y1="38" x2="90" y2="158"/>
<line x1="90" y1="38" x2="130" y2="38"/>
<line x1="90" y1="158" x2="130" y2="158"/>
<line x1="192" y1="38" x2="202" y2="38"/>
<line x1="202" y1="38" x2="202" y2="42"/>
<line x1="202" y1="42" x2="270" y2="42"/>
<line x1="192" y1="158" x2="202" y2="158"/>
<line x1="202" y1="158" x2="202" y2="146"/>
<line x1="202" y1="146" x2="270" y2="146"/>
<line x1="342" y1="49" x2="418" y2="49"/>
<line x1="352" y1="139" x2="418" y2="139"/>
<line x1="424" y1="129.7" x2="434" y2="129.7" stroke-width="1.4"/>
<line x1="378" y1="139" x2="378" y2="-2"/>
<line x1="378" y1="-2" x2="110" y2="-2"/>
<line x1="110" y1="-2" x2="110" y2="52"/>
<line x1="110" y1="52" x2="130" y2="52"/>
<line x1="400" y1="49" x2="400" y2="222"/>
<line x1="400" y1="222" x2="104" y2="222"/>
<line x1="104" y1="222" x2="104" y2="172"/>
<line x1="104" y1="172" x2="130" y2="172"/>
<circle cx="342" cy="49" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="352" cy="139" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="90" cy="98" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="378" cy="139" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="400" cy="49" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="18" y="30" text-anchor="end">J</text>
<text x="18" y="150" text-anchor="end">K</text>
<text x="18" y="104" text-anchor="end">CLK</text>
<text x="424" y="55" text-anchor="start">Q</text>
<text x="424" y="145" text-anchor="start">Q</text>
</g>
</svg>
</div>

**ตารางความจริงแสดงลักษณะ**

| $J$ | $K$ | $Q(t)$ | $Q(t+1)$ |  |
|:-:|:-:|:-:|:-:|:-:|
| 0 | 0 | 0 | 0 | คงสถานะเดิม |
| 0 | 0 | 1 | 1 |  |
| 0 | 1 | 0 | 0 | เปลี่ยนเป็น 0 |
| 0 | 1 | 1 | 0 |  |
| 1 | 0 | 0 | 1 | เปลี่ยนเป็น 1 |
| 1 | 0 | 1 | 1 |  |
| 1 | 1 | 0 | 1 | เป็นคอมพลีเมนต์กับ $Q(t)$ |
| 1 | 1 | 1 | 0 |  |

**ตารางการกระตุ้น และตารางการทำงาน**

| $Q(t)$ | $Q(t+1)$ | $J$ | $K$ |
|:-:|:-:|:-:|:-:|
| 0 | 0 | $0$ | $x$ |
| 0 | 1 | $1$ | $x$ |
| 1 | 0 | $x$ | $1$ |
| 1 | 1 | $x$ | $0$ |

| $J$ | $K$ | $Q(t+1)$ | $\overline{Q}(t+1)$ |
|:-:|:-:|:-:|:-:|
| 0 | 0 | $Q(t)$ | $\overline{Q}(t)$ |
| 0 | 1 | 0 | 1 |
| 1 | 0 | 1 | 0 |
| 1 | 1 | $\overline{Q}(t)$ | $Q(t)$ |

**สมการแสดงลักษณะ**

$$Q(t+1) = J\,\overline{Q}(t) + \overline{K}\,Q(t)$$

### ตัวอย่างที่ 8  จงหาสมการแสดงลักษณะ $Q(t+1)$ ของ JK ฟลิป-ฟลอปจากตารางความจริง

$\mathbf{Sol}^{n}$

ใส่ค่า $Q(t+1)$ จากตารางความจริงลงใน K-map ให้ $JK$ เรียงเป็น $00, 01, 11, 10$ และ $Q(t)$ เป็นแถว (ไม่มีช่อง $x$)

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="304" height="172" viewBox="0 0 304 172" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.6" fill="none">
<rect x="74" y="52" width="216" height="108"/>
<line x1="128" y1="52" x2="128" y2="160"/>
<line x1="182" y1="52" x2="182" y2="160"/>
<line x1="236" y1="52" x2="236" y2="160"/>
<line x1="74" y1="106" x2="290" y2="106"/>
<line x1="8" y1="8" x2="74" y2="52"/>
</g>
<text x="101" y="37" text-anchor="middle">00</text>
<text x="155" y="37" text-anchor="middle">01</text>
<text x="209" y="37" text-anchor="middle">11</text>
<text x="263" y="37" text-anchor="middle">10</text>
<text x="65" y="85" text-anchor="end">0</text>
<text x="65" y="139" text-anchor="end">1</text>
<text x="70" y="18" text-anchor="end">JK</text><text x="8" y="44">Q(t)</text>
<text x="209" y="87" text-anchor="middle" font-size="22">1</text>
<text x="263" y="87" text-anchor="middle" font-size="22">1</text>
<text x="101" y="141" text-anchor="middle" font-size="22">1</text>
<text x="263" y="141" text-anchor="middle" font-size="22">1</text>
<path d="M195.5,56.5 L276.5,56.5 M285.5,65.5 L285.5,92.5 M276.5,101.5 L195.5,101.5 M186.5,92.5 L186.5,65.5 M186.5,65.5 A9,9 0 0 1 195.5,56.5 M276.5,56.5 A9,9 0 0 1 285.5,65.5 M285.5,92.5 A9,9 0 0 1 276.5,101.5 M195.5,101.5 A9,9 0 0 1 186.5,92.5" stroke="#e8743b" stroke-width="2.6" fill="none"/>
<text x="185" y="67" font-size="14" fill="#e8743b" font-weight="bold">1</text>
<path d="M74,114 L111,114 M120,123 L120,143 M111,152 L74,152 M111,114 A9,9 0 0 1 120,123 M120,143 A9,9 0 0 1 111,152" stroke="#3b8be8" stroke-width="2.6" fill="none"/>
<text x="77" y="121" font-size="14" fill="#3b8be8" font-weight="bold">2</text>
<path d="M253,114 L290,114 M290,152 L253,152 M244,143 L244,123 M244,123 A9,9 0 0 1 253,114 M253,152 A9,9 0 0 1 244,143" stroke="#3b8be8" stroke-width="2.6" fill="none"/>
</svg>
</div>

- ลูปสีส้ม (แถว $Q(t)$$=0$ ช่อง $JK=11, 10$) : $J=1,\ Q(t)=0 \Rightarrow J\,\overline{Q}(t)$
- ลูปสีน้ำเงิน (แถว $Q(t)$$=1$ ช่อง $JK=10, 00$ ซึ่งโอบข้ามขอบแผนผัง) : $K=0,\ Q(t)=1 \Rightarrow \overline{K}\,Q(t)$

$\mathbf{Ans}\quad Q(t+1) = J\,\overline{Q}(t) + \overline{K}\,Q(t)$

### ตัวอย่างที่ 9  JK ฟลิป-ฟลอปทำงานที่ขอบขาลงของสัญญาณนาฬิกา เริ่มต้นที่ $Q=0$ จงเติมรูปคลื่น $Q$ เมื่อสัญญาณ $J$ และ $K$ เป็นดังรูป

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="746" height="224" viewBox="0 0 746 224" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="122" y1="26" x2="122" y2="218"/>
<line x1="242" y1="26" x2="242" y2="218"/>
<line x1="362" y1="26" x2="362" y2="218"/>
<line x1="482" y1="26" x2="482" y2="218"/>
<line x1="602" y1="26" x2="602" y2="218"/>
</g>
<text x="50" y="63.6" text-anchor="end">Clock</text>
<path d="M62,71.2 L62,71.2 L62,44 L122,44 L122,71.2 L182,71.2 L182,44 L242,44 L242,71.2 L302,71.2 L302,44 L362,44 L362,71.2 L422,71.2 L422,44 L482,44 L482,71.2 L542,71.2 L542,44 L602,44 L602,71.2 L662,71.2 L662,44 L722,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">J</text>
<path d="M62,131.2 L107,131.2 L107,104 L197,104 L197,131.2 L257,131.2 L257,104 L452,104 L452,131.2 L572,131.2 L572,104 L722,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">K</text>
<path d="M62,191.2 L212,191.2 L212,164 L272,164 L272,191.2 L332,191.2 L332,164 L452,164 L452,191.2 L542,191.2 L542,164 L722,164" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="122" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="242" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="362" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="482" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="602" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

$\mathbf{Sol}^{n}$

ขอบขาลงของสัญญาณนาฬิกามี 5 ครั้ง (#1 ถึง #5) ณ ขอบแต่ละครั้งให้อ่านค่า $J$ และ $K$ ที่เป็นอยู่ก่อนขอบนั้น แล้วใช้ตารางการทำงานของ JK ($00$ คงเดิม, $01$ Reset, $10$ Set, $11$ สลับ) ส่วนขอบขาขึ้นไม่มีผลต่อ $Q$

- #1 : $J=1, K=0$ $\Rightarrow$ Set $\Rightarrow Q = 1$
- #2 : $J=0, K=1$ $\Rightarrow$ Reset $\Rightarrow Q = 0$
- #3 : $J=1, K=1$ $\Rightarrow$ สลับ (Toggle) $\Rightarrow Q = 1$
- #4 : $J=0, K=0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 1$
- #5 : $J=1, K=1$ $\Rightarrow$ สลับ (Toggle) $\Rightarrow Q = 0$

$\mathbf{Ans}\quad Q = 1,\ 0,\ 1,\ 1,\ 0 \text{ หลังขอบที่ 1 ถึง 5 ตามลำดับ}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="746" height="284" viewBox="0 0 746 284" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="122" y1="26" x2="122" y2="278"/>
<line x1="242" y1="26" x2="242" y2="278"/>
<line x1="362" y1="26" x2="362" y2="278"/>
<line x1="482" y1="26" x2="482" y2="278"/>
<line x1="602" y1="26" x2="602" y2="278"/>
</g>
<text x="50" y="63.6" text-anchor="end">Clock</text>
<path d="M62,71.2 L62,71.2 L62,44 L122,44 L122,71.2 L182,71.2 L182,44 L242,44 L242,71.2 L302,71.2 L302,44 L362,44 L362,71.2 L422,71.2 L422,44 L482,44 L482,71.2 L542,71.2 L542,44 L602,44 L602,71.2 L662,71.2 L662,44 L722,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">J</text>
<path d="M62,131.2 L107,131.2 L107,104 L197,104 L197,131.2 L257,131.2 L257,104 L452,104 L452,131.2 L572,131.2 L572,104 L722,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">K</text>
<path d="M62,191.2 L212,191.2 L212,164 L272,164 L272,191.2 L332,191.2 L332,164 L452,164 L452,191.2 L542,191.2 L542,164 L722,164" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">Q</text>
<path d="M62,251.2 L122,251.2 L122,224 L242,224 L242,251.2 L362,251.2 L362,224 L602,224 L602,251.2 L722,251.2" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="122" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="242" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="362" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="482" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="602" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### 3.2 JK ฟลิป-ฟลอปที่มี PS และ CLR (74LS73)

JK ฟลิป-ฟลอปที่ใช้งานจริงมีขาเพิ่ม 2 ขา คือ **PS (Preset)** และ **CLR (Clear)** ซึ่งทำงานเมื่อเป็น $0$ (วงกลมเล็กที่ขา) และทำงานได้ทันทีโดยไม่ต้องรอสัญญาณนาฬิกา ส่วนสัญญาณนาฬิกาในรูปทำงานที่ขอบขาลง ($\downarrow$)

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="260" height="210" viewBox="0 0 260 210" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<rect x="80" y="50" width="100" height="100" rx="2"/>
<line x1="50" y1="75" x2="80" y2="75"/>
<line x1="50" y1="100" x2="72" y2="100"/>
<circle cx="76" cy="100" r="4"/>
<polyline points="80,91 92,100 80,109"/>
<line x1="50" y1="125" x2="80" y2="125"/>
<line x1="130" y1="20" x2="130" y2="50"/>
<line x1="130" y1="150" x2="130" y2="180"/>
<circle cx="130" cy="46" r="4"/>
<circle cx="130" cy="154" r="4"/>
<line x1="180" y1="80" x2="210" y2="80"/>
<line x1="180" y1="120" x2="210" y2="120"/>
<line x1="162" y1="110.7" x2="172" y2="110.7" stroke-width="1.4"/>
</g>
<text x="88" y="81" text-anchor="start">J</text>
<text x="98" y="106" text-anchor="start" font-size="14">CLK</text>
<text x="88" y="131" text-anchor="start">K</text>
<text x="130" y="70" text-anchor="middle" font-size="14">PS</text>
<text x="130" y="142" text-anchor="middle" font-size="14">CLR</text>
<text x="172" y="86" text-anchor="end">Q</text>
<text x="172" y="126" text-anchor="end">Q</text>
</g>
</svg>
</div>

**ตารางการทำงาน** ($x$ คือค่าอะไรก็ได้)

| แถว | PRESET | CLEAR | CLOCK | $J$ | $K$ | $Q$ | $\overline{Q}$ |
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| 1 | 0 | 0 | $x$ | $x$ | $x$ | 1 | 1 |
| 2 | 0 | 1 | $x$ | $x$ | $x$ | 1 | 0 |
| 3 | 1 | 0 | $x$ | $x$ | $x$ | 0 | 1 |
| 4 | 1 | 1 | $\downarrow$ | 0 | 0 | $Q_0$ | $\overline{Q_0}$ |
| 5 | 1 | 1 | $\downarrow$ | 1 | 0 | 1 | 0 |
| 6 | 1 | 1 | $\downarrow$ | 0 | 1 | 0 | 1 |
| 7 | 1 | 1 | $\downarrow$ | 1 | 1 | สลับ (Toggle) | สลับ (Toggle) |
| 8 | 1 | 1 | 0 | $x$ | $x$ | $Q_0$ | $\overline{Q_0}$ |

- แถว 1 ถึง 3 : PS และ CLR มีหน้าที่เหนือกว่าอินพุตอื่น PS=0 บังคับ $Q=1$, CLR=0 บังคับ $Q=0$ ถ้าเป็น $0$ ทั้งคู่ได้ $Q=\overline{Q}=1$ ซึ่งไม่ควรใช้
- แถว 4 ถึง 7 : PS=CLR=1 ทำงานตามตาราง JK ที่ขอบขาลง ($Q_0$ คือค่า $Q$ ก่อนขอบ)
- แถว 8 : ไม่มีขอบขาลง $Q$ ไม่เปลี่ยน

**IC เบอร์ 74LS73 (Dual JK Flip-Flop)** ในชิปหนึ่งตัวมี JK ฟลิป-ฟลอป 2 ตัว (ตัวที่ 1 และตัวที่ 2)

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="560" height="240" viewBox="0 0 560 240" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<rect x="40" y="70" width="480" height="100" rx="14"/>
<path d="M40,100 A20,20 0 0 1 40,140"/>
<rect x="62" y="46" width="34" height="24"/>
<rect x="62" y="170" width="34" height="24"/>
<rect x="128" y="46" width="34" height="24"/>
<rect x="128" y="170" width="34" height="24"/>
<rect x="194" y="46" width="34" height="24"/>
<rect x="194" y="170" width="34" height="24"/>
<rect x="260" y="46" width="34" height="24"/>
<rect x="260" y="170" width="34" height="24"/>
<rect x="326" y="46" width="34" height="24"/>
<rect x="326" y="170" width="34" height="24"/>
<rect x="392" y="46" width="34" height="24"/>
<rect x="392" y="170" width="34" height="24"/>
<rect x="458" y="46" width="34" height="24"/>
<rect x="458" y="170" width="34" height="24"/>
</g>
<text x="79" y="64" text-anchor="middle" font-size="15">14</text>
<text x="79" y="188" text-anchor="middle" font-size="15">1</text>
<text x="79" y="34" text-anchor="middle" font-size="16">J1</text>
<text x="79" y="218" text-anchor="middle" font-size="16">CLK1</text>
<text x="145" y="64" text-anchor="middle" font-size="15">13</text>
<text x="145" y="188" text-anchor="middle" font-size="15">2</text>
<text x="145" y="34" text-anchor="middle" font-size="16">Q1</text>
<line x1="135" y1="19" x2="155" y2="19" stroke="currentColor" stroke-width="1.4"/>
<text x="145" y="218" text-anchor="middle" font-size="16">CLR1</text>
<text x="211" y="64" text-anchor="middle" font-size="15">12</text>
<text x="211" y="188" text-anchor="middle" font-size="15">3</text>
<text x="211" y="34" text-anchor="middle" font-size="16">Q1</text>
<text x="211" y="218" text-anchor="middle" font-size="16">K1</text>
<text x="277" y="64" text-anchor="middle" font-size="15">11</text>
<text x="277" y="188" text-anchor="middle" font-size="15">4</text>
<text x="277" y="34" text-anchor="middle" font-size="16">GND</text>
<text x="277" y="218" text-anchor="middle" font-size="16">Vcc</text>
<text x="343" y="64" text-anchor="middle" font-size="15">10</text>
<text x="343" y="188" text-anchor="middle" font-size="15">5</text>
<text x="343" y="34" text-anchor="middle" font-size="16">K2</text>
<text x="343" y="218" text-anchor="middle" font-size="16">CLK2</text>
<text x="409" y="64" text-anchor="middle" font-size="15">9</text>
<text x="409" y="188" text-anchor="middle" font-size="15">6</text>
<text x="409" y="34" text-anchor="middle" font-size="16">Q2</text>
<text x="409" y="218" text-anchor="middle" font-size="16">CLR2</text>
<text x="475" y="64" text-anchor="middle" font-size="15">8</text>
<text x="475" y="188" text-anchor="middle" font-size="15">7</text>
<text x="475" y="34" text-anchor="middle" font-size="16">Q2</text>
<line x1="465" y1="19" x2="485" y2="19" stroke="currentColor" stroke-width="1.4"/>
<text x="475" y="218" text-anchor="middle" font-size="16">J2</text>
</svg>
</div>

### ตัวอย่างที่ 10  JK ฟลิป-ฟลอปที่มี PS และ CLR ทำงานที่ขอบขาลงของ CLK จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="686" height="344" viewBox="0 0 686 344" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="62" y1="26" x2="62" y2="338"/>
<line x1="112" y1="26" x2="112" y2="338"/>
<line x1="162" y1="26" x2="162" y2="338"/>
<line x1="212" y1="26" x2="212" y2="338"/>
<line x1="262" y1="26" x2="262" y2="338"/>
<line x1="312" y1="26" x2="312" y2="338"/>
<line x1="362" y1="26" x2="362" y2="338"/>
<line x1="412" y1="26" x2="412" y2="338"/>
<line x1="462" y1="26" x2="462" y2="338"/>
<line x1="512" y1="26" x2="512" y2="338"/>
<line x1="562" y1="26" x2="562" y2="338"/>
<line x1="612" y1="26" x2="612" y2="338"/>
<line x1="662" y1="26" x2="662" y2="338"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,71.2 L162,71.2 L162,44 L662,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,131.2 L112,131.2 L112,104 L162,104 L162,131.2 L212,131.2 L212,104 L662,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<text x="87" y="183.6" text-anchor="middle" font-size="16">x</text>
<text x="137" y="183.6" text-anchor="middle" font-size="16">x</text>
<text x="187" y="183.6" text-anchor="middle" font-size="16">x</text>
<path d="M212,191.2 L262,191.2 L262,164 L312,164 L312,191.2 L362,191.2 L362,164 L412,164 L412,191.2 L462,191.2 L462,164 L512,164 L512,191.2 L562,191.2 L562,164 L612,164 L612,191.2 L662,191.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">J</text>
<text x="87" y="243.6" text-anchor="middle" font-size="16">x</text>
<text x="137" y="243.6" text-anchor="middle" font-size="16">x</text>
<text x="187" y="243.6" text-anchor="middle" font-size="16">x</text>
<path d="M212,251.2 L307,251.2 L307,224 L362,224 L362,251.2 L462,251.2 L462,224 L662,224" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">K</text>
<text x="87" y="303.6" text-anchor="middle" font-size="16">x</text>
<text x="137" y="303.6" text-anchor="middle" font-size="16">x</text>
<text x="187" y="303.6" text-anchor="middle" font-size="16">x</text>
<path d="M212,311.2 L362,311.2 L362,284 L662,284" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="62" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">0</tspan></text>
<text x="112" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">1</tspan></text>
<text x="162" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">2</tspan></text>
<text x="212" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">3</tspan></text>
<text x="262" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">4</tspan></text>
<text x="312" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">5</tspan></text>
<text x="362" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">6</tspan></text>
<text x="412" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">7</tspan></text>
<text x="462" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">8</tspan></text>
<text x="512" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">9</tspan></text>
<text x="562" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">10</tspan></text>
<text x="612" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">11</tspan></text>
<text x="662" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">12</tspan></text>
</svg>
</div>

$\mathbf{Sol}^{n}$

**ช่วงที่ PS หรือ CLR เป็น $0$** (ตารางแถว 1 ถึง 3 ไม่ต้องดู CLK, $J$, $K$)

- $T_0$ ถึง $T_1$ : PS=0, CLR=0 $\Rightarrow Q=1, \overline{Q}=1$
- $T_1$ ถึง $T_2$ : PS=0, CLR=1 $\Rightarrow Q=1, \overline{Q}=0$
- $T_2$ ถึง $T_3$ : PS=1, CLR=0 $\Rightarrow Q=0, \overline{Q}=1$

**ตั้งแต่ $T_3$** PS=CLR=1 ฟลิป-ฟลอปทำงานตาม CLK ที่ขอบขาลง (ที่ $T_5, T_7, T_9, T_{11}$) โดยอ่าน $J$ และ $K$ ก่อนขอบนั้น ส่วนขอบขาขึ้น ($T_4, T_6, T_8, T_{10}$) ไม่มีผล

- $T_3$ ถึง $T_5$ : ไม่มีขอบขาลงใหม่ ($J=K=0$) $Q$ คงที่เป็น $0$
- $T_5$ : $J=1, K=0$ Set $\Rightarrow Q=1, \overline{Q}=0$
- $T_7$ : $J=0, K=1$ Reset $\Rightarrow Q=0, \overline{Q}=1$
- $T_9$ : $J=1, K=1$ Toggle $\Rightarrow Q=1, \overline{Q}=0$
- $T_{11}$ : $J=1, K=1$ Toggle $\Rightarrow Q=0, \overline{Q}=1$

$\mathbf{Ans}\quad \text{รูปคลื่น } Q \text{ และ } \overline{Q} \text{ ตามรูป}$

| ช่วงเวลา | $Q$ | $\overline{Q}$ |
|:-:|:-:|:-:|
| $T_{0}$ ถึง $T_{1}$ | $1$ | $1$ |
| $T_{1}$ ถึง $T_{2}$ | $1$ | $0$ |
| $T_{2}$ ถึง $T_{5}$ | $0$ | $1$ |
| $T_{5}$ ถึง $T_{7}$ | $1$ | $0$ |
| $T_{7}$ ถึง $T_{9}$ | $0$ | $1$ |
| $T_{9}$ ถึง $T_{11}$ | $1$ | $0$ |
| $T_{11}$ ถึง $T_{12}$ | $0$ | $1$ |

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="686" height="464" viewBox="0 0 686 464" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="62" y1="26" x2="62" y2="458"/>
<line x1="112" y1="26" x2="112" y2="458"/>
<line x1="162" y1="26" x2="162" y2="458"/>
<line x1="212" y1="26" x2="212" y2="458"/>
<line x1="262" y1="26" x2="262" y2="458"/>
<line x1="312" y1="26" x2="312" y2="458"/>
<line x1="362" y1="26" x2="362" y2="458"/>
<line x1="412" y1="26" x2="412" y2="458"/>
<line x1="462" y1="26" x2="462" y2="458"/>
<line x1="512" y1="26" x2="512" y2="458"/>
<line x1="562" y1="26" x2="562" y2="458"/>
<line x1="612" y1="26" x2="612" y2="458"/>
<line x1="662" y1="26" x2="662" y2="458"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,71.2 L162,71.2 L162,44 L662,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,131.2 L112,131.2 L112,104 L162,104 L162,131.2 L212,131.2 L212,104 L662,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<text x="87" y="183.6" text-anchor="middle" font-size="16">x</text>
<text x="137" y="183.6" text-anchor="middle" font-size="16">x</text>
<text x="187" y="183.6" text-anchor="middle" font-size="16">x</text>
<path d="M212,191.2 L262,191.2 L262,164 L312,164 L312,191.2 L362,191.2 L362,164 L412,164 L412,191.2 L462,191.2 L462,164 L512,164 L512,191.2 L562,191.2 L562,164 L612,164 L612,191.2 L662,191.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">J</text>
<text x="87" y="243.6" text-anchor="middle" font-size="16">x</text>
<text x="137" y="243.6" text-anchor="middle" font-size="16">x</text>
<text x="187" y="243.6" text-anchor="middle" font-size="16">x</text>
<path d="M212,251.2 L307,251.2 L307,224 L362,224 L362,251.2 L462,251.2 L462,224 L662,224" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">K</text>
<text x="87" y="303.6" text-anchor="middle" font-size="16">x</text>
<text x="137" y="303.6" text-anchor="middle" font-size="16">x</text>
<text x="187" y="303.6" text-anchor="middle" font-size="16">x</text>
<path d="M212,311.2 L362,311.2 L362,284 L662,284" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="363.6" text-anchor="end">Q</text>
<path d="M62,344 L162,344 L162,371.2 L312,371.2 L312,344 L412,344 L412,371.2 L512,371.2 L512,344 L612,344 L612,371.2 L662,371.2" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="423.6" text-anchor="end">Q</text>
<line x1="38" y1="408.6" x2="50" y2="408.6" stroke="currentColor" stroke-width="1.4"/>
<path d="M62,404 L112,404 L112,431.2 L162,431.2 L162,404 L312,404 L312,431.2 L412,431.2 L412,404 L512,404 L512,431.2 L612,431.2 L612,404 L662,404" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="62" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">0</tspan></text>
<text x="112" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">1</tspan></text>
<text x="162" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">2</tspan></text>
<text x="212" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">3</tspan></text>
<text x="262" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">4</tspan></text>
<text x="312" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">5</tspan></text>
<text x="362" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">6</tspan></text>
<text x="412" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">7</tspan></text>
<text x="462" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">8</tspan></text>
<text x="512" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">9</tspan></text>
<text x="562" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">10</tspan></text>
<text x="612" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">11</tspan></text>
<text x="662" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">12</tspan></text>
</svg>
</div>

## 4. D ฟลิป-ฟลอป

### 4.1 D ฟลิป-ฟลอป

D ฟลิป-ฟลอปเป็นวงจรฟลิป-ฟลอปที่หน่วงสัญญาณเข้าได้หนึ่งช่วงสัญญาณนาฬิกา หรืออาจกล่าวได้ว่าสามารถแล็ทช์ (Latch) ข้อมูลได้ จึงนิยมใช้เป็นตัวเก็บข้อมูล

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="466" height="182" viewBox="0 0 466 182" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(26,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<path d="M120,20 H146 A26,21 0 0 1 146,62 H120 Z"/>
<circle cx="177" cy="41" r="5"/>
<path d="M120,100 H146 A26,21 0 0 1 146,142 H120 Z"/>
<circle cx="177" cy="121" r="5"/>
<path d="M250,20 H276 A26,21 0 0 1 276,62 H250 Z"/>
<circle cx="307" cy="41" r="5"/>
<path d="M250,100 H276 A26,21 0 0 1 276,142 H250 Z"/>
<circle cx="307" cy="121" r="5"/>
<line x1="312" y1="41" x2="322" y2="41"/>
<line x1="322" y1="41" x2="322" y2="73"/>
<line x1="322" y1="73" x2="228" y2="73"/>
<line x1="228" y1="73" x2="228" y2="114"/>
<line x1="228" y1="114" x2="250" y2="114"/>
<line x1="312" y1="121" x2="332" y2="121"/>
<line x1="332" y1="121" x2="332" y2="89"/>
<line x1="332" y1="89" x2="216" y2="89"/>
<line x1="216" y1="89" x2="216" y2="48"/>
<line x1="216" y1="48" x2="250" y2="48"/>
<line x1="22" y1="34" x2="120" y2="34"/>
<polygon points="62,148 62,172 84,160"/>
<circle cx="89" cy="160" r="5"/>
<line x1="44" y1="34" x2="44" y2="160"/>
<line x1="44" y1="160" x2="62" y2="160"/>
<line x1="94" y1="160" x2="104" y2="160"/>
<line x1="104" y1="160" x2="104" y2="128"/>
<line x1="104" y1="128" x2="120" y2="128"/>
<line x1="22" y1="81" x2="82" y2="81"/>
<line x1="82" y1="48" x2="82" y2="114"/>
<line x1="82" y1="48" x2="120" y2="48"/>
<line x1="82" y1="114" x2="120" y2="114"/>
<line x1="182" y1="41" x2="192" y2="41"/>
<line x1="192" y1="41" x2="192" y2="34"/>
<line x1="192" y1="34" x2="250" y2="34"/>
<line x1="182" y1="121" x2="192" y2="121"/>
<line x1="192" y1="121" x2="192" y2="128"/>
<line x1="192" y1="128" x2="250" y2="128"/>
<line x1="322" y1="41" x2="378" y2="41"/>
<line x1="332" y1="121" x2="378" y2="121"/>
<line x1="384" y1="111.7" x2="394" y2="111.7" stroke-width="1.4"/>
<circle cx="322" cy="41" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="332" cy="121" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="44" cy="34" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="82" cy="81" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="18" y="40" text-anchor="end">D</text>
<text x="18" y="87" text-anchor="end">CP</text>
<text x="384" y="47" text-anchor="start">Q</text>
<text x="384" y="127" text-anchor="start">Q</text>
</g>
</svg>
</div>

**ตารางความจริงแสดงลักษณะ, ตารางการกระตุ้น และตารางการทำงาน**

| $D$ | $Q(t)$ | $Q(t+1)$ |
|:-:|:-:|:-:|
| 0 | 0 | 0 |
| 0 | 1 | 0 |
| 1 | 0 | 1 |
| 1 | 1 | 1 |

| $Q(t)$ | $Q(t+1)$ | $D$ |
|:-:|:-:|:-:|
| 0 | 0 | 0 |
| 0 | 1 | 1 |
| 1 | 0 | 0 |
| 1 | 1 | 1 |

| $D$ | $Q(t+1)$ | $\overline{Q}(t+1)$ |
|:-:|:-:|:-:|
| 0 | 0 | 1 |
| 1 | 1 | 0 |

**สมการแสดงลักษณะ**

$$Q(t+1) = D$$

### ตัวอย่างที่ 11  จงหาสมการแสดงลักษณะ $Q(t+1)$ ของ D ฟลิป-ฟลอปจากตารางความจริง

$\mathbf{Sol}^{n}$

ใส่ค่า $Q(t+1)$ ลงใน K-map ให้ $D$ เรียงเป็น $0, 1$ และ $Q(t)$ เป็นแถว

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="196" height="172" viewBox="0 0 196 172" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.6" fill="none">
<rect x="74" y="52" width="108" height="108"/>
<line x1="128" y1="52" x2="128" y2="160"/>
<line x1="74" y1="106" x2="182" y2="106"/>
<line x1="8" y1="8" x2="74" y2="52"/>
</g>
<text x="101" y="37" text-anchor="middle">0</text>
<text x="155" y="37" text-anchor="middle">1</text>
<text x="65" y="85" text-anchor="end">0</text>
<text x="65" y="139" text-anchor="end">1</text>
<text x="70" y="18" text-anchor="end">D</text><text x="8" y="44">Q(t)</text>
<text x="155" y="87" text-anchor="middle" font-size="22">1</text>
<text x="155" y="141" text-anchor="middle" font-size="22">1</text>
<path d="M141.5,56.5 L168.5,56.5 M177.5,65.5 L177.5,146.5 M168.5,155.5 L141.5,155.5 M132.5,146.5 L132.5,65.5 M132.5,65.5 A9,9 0 0 1 141.5,56.5 M168.5,56.5 A9,9 0 0 1 177.5,65.5 M177.5,146.5 A9,9 0 0 1 168.5,155.5 M141.5,155.5 A9,9 0 0 1 132.5,146.5" stroke="#e8743b" stroke-width="2.6" fill="none"/>
<text x="131" y="67" font-size="14" fill="#e8743b" font-weight="bold">1</text>
</svg>
</div>

- ลูปสีส้ม (คอลัมน์ $D=1$ ทั้งสองแถว) : $D=1 \Rightarrow D$ (ตัวแปร $Q(t)$ เปลี่ยนค่าในลูปจึงตัดทิ้ง)

$\mathbf{Ans}\quad Q(t+1) = D$

### ตัวอย่างที่ 12  D ฟลิป-ฟลอปทำงานที่ขอบขาขึ้นของสัญญาณนาฬิกา เริ่มต้นที่ $Q=0$ จงเติมรูปคลื่น $Q$ เมื่อสัญญาณ $D$ เป็นดังรูป

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="164" viewBox="0 0 726 164" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="158"/>
<line x1="254" y1="26" x2="254" y2="158"/>
<line x1="382" y1="26" x2="382" y2="158"/>
<line x1="510" y1="26" x2="510" y2="158"/>
<line x1="638" y1="26" x2="638" y2="158"/>
</g>
<text x="50" y="63.6" text-anchor="end">CLK</text>
<path d="M62,71.2 L126,71.2 L126,44 L190,44 L190,71.2 L254,71.2 L254,44 L318,44 L318,71.2 L382,71.2 L382,44 L446,44 L446,71.2 L510,71.2 L510,44 L574,44 L574,71.2 L638,71.2 L638,44 L702,44 L702,71.2 L702,71.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">D</text>
<path d="M62,131.2 L94,131.2 L94,104 L174,104 L174,131.2 L286,131.2 L286,104 L414,104 L414,131.2 L542,131.2 L542,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

$\mathbf{Sol}^{n}$

D ฟลิป-ฟลอปมี $Q(t+1) = D$ ที่ขอบขาขึ้นแต่ละครั้ง (#1 ถึง #5) ให้อ่านค่า $D$ ก่อนขอบนั้น แล้ว $Q$ เปลี่ยนเป็นค่านั้นทันที และคงค่าไว้จนถึงขอบถัดไป

- #1 : $D=1 \Rightarrow Q=1$
- #2 : $D=0 \Rightarrow Q=0$
- #3 : $D=1 \Rightarrow Q=1$
- #4 : $D=0 \Rightarrow Q=0$
- #5 : $D=1 \Rightarrow Q=1$

$\mathbf{Ans}\quad Q = 1,\ 0,\ 1,\ 0,\ 1 \text{ หลังขอบที่ 1 ถึง 5 ตามลำดับ}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="224" viewBox="0 0 726 224" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="218"/>
<line x1="254" y1="26" x2="254" y2="218"/>
<line x1="382" y1="26" x2="382" y2="218"/>
<line x1="510" y1="26" x2="510" y2="218"/>
<line x1="638" y1="26" x2="638" y2="218"/>
</g>
<text x="50" y="63.6" text-anchor="end">CLK</text>
<path d="M62,71.2 L126,71.2 L126,44 L190,44 L190,71.2 L254,71.2 L254,44 L318,44 L318,71.2 L382,71.2 L382,44 L446,44 L446,71.2 L510,71.2 L510,44 L574,44 L574,71.2 L638,71.2 L638,44 L702,44 L702,71.2 L702,71.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">D</text>
<path d="M62,131.2 L94,131.2 L94,104 L174,104 L174,131.2 L286,131.2 L286,104 L414,104 L414,131.2 L542,131.2 L542,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">Q</text>
<path d="M62,191.2 L126,191.2 L126,164 L254,164 L254,191.2 L382,191.2 L382,164 L510,164 L510,191.2 L638,191.2 L638,164 L702,164" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

## 5. T ฟลิป-ฟลอป

### 5.1 T ฟลิป-ฟลอป

T ฟลิป-ฟลอปเป็นวงจรฟลิป-ฟลอปที่เปลี่ยนสถานะทุกครั้งเมื่อมีสัญญาณนาฬิกาเข้ามา สร้างได้ด้วย JK ฟลิป-ฟลอปโดยต่อขา $J$ และขา $K$ เข้าด้วยกัน (เป็นอินพุต $T$) ถ้าต่อ $T=1$ ตลอด ($J=K=1$) ฟลิป-ฟลอปจะสลับสถานะทุกครั้งที่มีสัญญาณนาฬิกา

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="320" height="140" viewBox="0 0 320 140" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(10,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<rect x="150" y="20" width="100" height="100" rx="2"/>
<line x1="110" y1="45" x2="150" y2="45"/>
<line x1="110" y1="70" x2="140" y2="70"/>
<polyline points="150,61 162,70 150,79"/>
<line x1="110" y1="95" x2="150" y2="95"/>
<line x1="60" y1="45" x2="110" y2="45"/>
<line x1="80" y1="45" x2="80" y2="95"/>
<line x1="80" y1="95" x2="110" y2="95"/>
<line x1="250" y1="50" x2="290" y2="50"/>
<line x1="250" y1="90" x2="290" y2="90"/>
<line x1="232" y1="80.7" x2="242" y2="80.7" stroke-width="1.4"/>
<line x1="30" y1="70" x2="140" y2="70"/>
<circle cx="80" cy="45" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="158" y="51" text-anchor="start">J</text>
<text x="168" y="76" text-anchor="start" font-size="14">CP</text>
<text x="158" y="101" text-anchor="start">K</text>
<text x="52" y="51" text-anchor="end">T</text>
<text x="242" y="56" text-anchor="end">Q</text>
<text x="242" y="96" text-anchor="end">Q</text>
<text x="22" y="76" text-anchor="end">CP</text>
</g>
</svg>
</div>

**ตารางความจริงแสดงลักษณะ, ตารางการกระตุ้น และตารางการทำงาน**

| $T$ | $Q(t)$ | $Q(t+1)$ |
|:-:|:-:|:-:|
| 0 | 0 | 0 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 0 |

| $Q(t)$ | $Q(t+1)$ | $T$ |
|:-:|:-:|:-:|
| 0 | 0 | 0 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 0 |

| $T$ | $Q(t+1)$ | $\overline{Q}(t+1)$ |
|:-:|:-:|:-:|
| 0 | $Q(t)$ | $\overline{Q}(t)$ |
| 1 | $\overline{Q}(t)$ | $Q(t)$ |

**สมการแสดงลักษณะ**

$$Q(t+1) = \overline{T}\,Q(t) + T\,\overline{Q}(t)$$

### ตัวอย่างที่ 13  จงหาสมการแสดงลักษณะ $Q(t+1)$ ของ T ฟลิป-ฟลอปจากตารางความจริง

$\mathbf{Sol}^{n}$

ใส่ค่า $Q(t+1)$ ลงใน K-map ให้ $T$ เรียงเป็น $0, 1$ และ $Q(t)$ เป็นแถว ช่องที่เป็น $1$ ไม่ติดกัน จึงเป็นลูปช่องเดียว 2 ลูป

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="196" height="172" viewBox="0 0 196 172" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.6" fill="none">
<rect x="74" y="52" width="108" height="108"/>
<line x1="128" y1="52" x2="128" y2="160"/>
<line x1="74" y1="106" x2="182" y2="106"/>
<line x1="8" y1="8" x2="74" y2="52"/>
</g>
<text x="101" y="37" text-anchor="middle">0</text>
<text x="155" y="37" text-anchor="middle">1</text>
<text x="65" y="85" text-anchor="end">0</text>
<text x="65" y="139" text-anchor="end">1</text>
<text x="70" y="18" text-anchor="end">T</text><text x="8" y="44">Q(t)</text>
<text x="155" y="87" text-anchor="middle" font-size="22">1</text>
<text x="101" y="141" text-anchor="middle" font-size="22">1</text>
<path d="M87.5,110.5 L114.5,110.5 M123.5,119.5 L123.5,146.5 M114.5,155.5 L87.5,155.5 M78.5,146.5 L78.5,119.5 M78.5,119.5 A9,9 0 0 1 87.5,110.5 M114.5,110.5 A9,9 0 0 1 123.5,119.5 M123.5,146.5 A9,9 0 0 1 114.5,155.5 M87.5,155.5 A9,9 0 0 1 78.5,146.5" stroke="#e8743b" stroke-width="2.6" fill="none"/>
<text x="77" y="121" font-size="14" fill="#e8743b" font-weight="bold">1</text>
<path d="M145,60 L165,60 M174,69 L174,89 M165,98 L145,98 M136,89 L136,69 M136,69 A9,9 0 0 1 145,60 M165,60 A9,9 0 0 1 174,69 M174,89 A9,9 0 0 1 165,98 M145,98 A9,9 0 0 1 136,89" stroke="#3b8be8" stroke-width="2.6" fill="none"/>
<text x="131" y="67" font-size="14" fill="#3b8be8" font-weight="bold">2</text>
</svg>
</div>

- ลูปสีส้ม (แถว $Q(t)$$=1$ ช่อง $T=0$) : $T=0,\ Q(t)=1 \Rightarrow \overline{T}\,Q(t)$
- ลูปสีน้ำเงิน (แถว $Q(t)$$=0$ ช่อง $T=1$) : $T=1,\ Q(t)=0 \Rightarrow T\,\overline{Q}(t)$

$\mathbf{Ans}\quad Q(t+1) = \overline{T}\,Q(t) + T\,\overline{Q}(t)$

### ตัวอย่างที่ 14  T ฟลิป-ฟลอปทำงานที่ขอบขาขึ้นของสัญญาณนาฬิกา เริ่มต้นที่ $Q=0$ จงเติมรูปคลื่น $Q$ เมื่อสัญญาณ $T$ เป็นดังรูป

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="164" viewBox="0 0 726 164" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="158"/>
<line x1="254" y1="26" x2="254" y2="158"/>
<line x1="382" y1="26" x2="382" y2="158"/>
<line x1="510" y1="26" x2="510" y2="158"/>
<line x1="638" y1="26" x2="638" y2="158"/>
</g>
<text x="50" y="63.6" text-anchor="end">CLK</text>
<path d="M62,71.2 L126,71.2 L126,44 L190,44 L190,71.2 L254,71.2 L254,44 L318,44 L318,71.2 L382,71.2 L382,44 L446,44 L446,71.2 L510,71.2 L510,44 L574,44 L574,71.2 L638,71.2 L638,44 L702,44 L702,71.2 L702,71.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">T</text>
<path d="M62,104 L286,104 L286,131.2 L414,131.2 L414,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

$\mathbf{Sol}^{n}$

ที่ขอบขาขึ้นแต่ละครั้ง (#1 ถึง #5) อ่านค่า $T$ ก่อนขอบนั้น ถ้า $T=1$ ให้ $Q$ สลับสถานะ ถ้า $T=0$ ให้ $Q$ คงเดิม

- #1 : $T=1$ $\Rightarrow$ สลับ $\Rightarrow Q=1$
- #2 : $T=1$ $\Rightarrow$ สลับ $\Rightarrow Q=0$
- #3 : $T=0$ $\Rightarrow$ คงเดิม $\Rightarrow Q=0$
- #4 : $T=1$ $\Rightarrow$ สลับ $\Rightarrow Q=1$
- #5 : $T=1$ $\Rightarrow$ สลับ $\Rightarrow Q=0$

$\mathbf{Ans}\quad Q = 1,\ 0,\ 0,\ 1,\ 0 \text{ หลังขอบที่ 1 ถึง 5 ตามลำดับ}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="224" viewBox="0 0 726 224" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="218"/>
<line x1="254" y1="26" x2="254" y2="218"/>
<line x1="382" y1="26" x2="382" y2="218"/>
<line x1="510" y1="26" x2="510" y2="218"/>
<line x1="638" y1="26" x2="638" y2="218"/>
</g>
<text x="50" y="63.6" text-anchor="end">CLK</text>
<path d="M62,71.2 L126,71.2 L126,44 L190,44 L190,71.2 L254,71.2 L254,44 L318,44 L318,71.2 L382,71.2 L382,44 L446,44 L446,71.2 L510,71.2 L510,44 L574,44 L574,71.2 L638,71.2 L638,44 L702,44 L702,71.2 L702,71.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">T</text>
<path d="M62,104 L286,104 L286,131.2 L414,131.2 L414,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">Q</text>
<path d="M62,191.2 L126,191.2 L126,164 L254,164 L254,191.2 L510,191.2 L510,164 L638,164 L638,191.2 L702,191.2" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

ช่วงที่ $T=1$ ตลอด $Q$ สลับทุกขอบ จึงเปลี่ยนครบหนึ่งรอบ (0 แล้ว 1) ใช้เวลา 2 ช่วงสัญญาณนาฬิกา ความถี่ของ $Q$ เป็นครึ่งหนึ่งของความถี่ CLK

## 6. สรุปตารางและสมการของบท

### 6.1 สรุปฟลิป-ฟลอป 4 ประเภท

| ชนิด | อินพุต | สมการแสดงลักษณะ | การทำงาน |
|:--|:-:|:--|:--|
| RS (NOR) | $R, S$ | $Q(t+1) = S + \overline{R}\,Q(t)$ | $RS=00$ คงเดิม, $01$ Set, $10$ Reset, $11$ ห้ามใช้ |
| RS (NAND) | $R, S$ | $Q(t+1) = \overline{R} + S\,Q(t)$ | $RS=11$ คงเดิม, $01$ Set, $10$ Reset, $00$ ห้ามใช้ |
| JK | $J, K$ | $Q(t+1) = J\,\overline{Q}(t) + \overline{K}\,Q(t)$ | $JK=00$ คงเดิม, $01$ Reset, $10$ Set, $11$ สลับ |
| D | $D$ | $Q(t+1) = D$ | ตาม $D$ |
| T | $T$ | $Q(t+1) = \overline{T}\,Q(t) + T\,\overline{Q}(t)$ | $T=0$ คงเดิม, $T=1$ สลับ |

**ตารางการกระตุ้นรวม** ($x$ คือค่าอะไรก็ได้, ลำดับอินพุตเรียงตามที่เขียนในหัวตาราง)

| $Q(t)$ $\to$ $Q(t+1)$ | RS (NOR) $R, S$ | RS (NAND) $R, S$ | JK $J, K$ | D $D$ | T $T$ |
|:-:|:-:|:-:|:-:|:-:|:-:|
| $0 \to 0$ | $x,\ 0$ | $1,\ x$ | $0,\ x$ | $0$ | $0$ |
| $0 \to 1$ | $0,\ 1$ | $0,\ 1$ | $1,\ x$ | $1$ | $1$ |
| $1 \to 0$ | $1,\ 0$ | $1,\ 0$ | $x,\ 1$ | $0$ | $1$ |
| $1 \to 1$ | $0,\ x$ | $x,\ 1$ | $x,\ 0$ | $1$ | $0$ |

### 6.2 ข้อควรระวังในการสอบ

- $Q(t)$ คือสถานะปัจจุบัน $Q(t+1)$ คือสถานะถัดไป อ่านตารางให้ถูกว่าเป็นค่าก่อนหรือหลังสัญญาณกระตุ้น
- RS แบบ NOR ห้ามใช้ $R=S=1$ แต่ RS แบบ NAND ห้ามใช้ $R=S=0$ (สลับกัน) และนิยามของ Set คือ $Q=1$
- ในตารางของสไลด์เรียงอินพุตของ RS เป็น $R$ แล้ว $S$ แต่ JK เรียงเป็น $J$ แล้ว $K$ ($J$ คู่กับ $S$, $K$ คู่กับ $R$)
- JK ที่ $JK=11$ สถานะสลับ ส่วน T ที่ $T=1$ สลับ ส่วน D คือ $Q(t+1)=D$ เสมอ
- อ่านรูปคลื่นให้ดูเฉพาะขอบที่ทำให้ทำงาน (ขอบขาลง $\downarrow$ หรือขอบขาขึ้น $\uparrow$ ตามสัญลักษณ์) และใช้ค่าอินพุตก่อนขอบนั้น
- PS และ CLR ของ 74LS73 ทำงานเมื่อเป็น $0$ และทำงานทันที ไม่ต้องรอสัญญาณนาฬิกา มีสิทธิ์เหนือ $J$, $K$
- ตารางกระตุ้นใช้ได้ตรงกันข้ามกับตารางการทำงาน: ตารางการทำงานรู้อินพุตแล้วหา $Q(t+1)$ ส่วนตารางกระตุ้นรู้ $Q(t+1)$ ที่ต้องการแล้วหาอินพุต
