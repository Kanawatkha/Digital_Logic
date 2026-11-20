# บทที่ 9 Verilog

---

## 1. ภาษา Verilog และโครงสร้างของโมดูล

### 1.1 Verilog คืออะไร

**ภาษาฮาร์ดแวร์ (Hardware Description Language, HDL)** คือภาษาระดับสูงที่ใช้อธิบายการทำงานของฮาร์ดแวร์ โดยไม่ต้องแปลงเป็นสมการบูลีนหรือ Schematic ก่อน ภาษา HDL ส่วนใหญ่สร้างหรืออธิบาย Finite State Machine สำหรับวงจรซีเควนเชียล หรือสร้างเป็นตารางความจริงสำหรับวงจรคอมบิเนชันได้ ใช้เป็นภาษาหลักในการออกแบบระบบในอุปกรณ์ PLD, CPLD และ FPGA ส่วนตัวสังเคราะห์วงจร (Synthesis tool) จะสร้างวงจรตามที่อธิบายไว้

**Verilog HDL** เป็นภาษาที่ใช้อธิบายลักษณะการทำงานของฮาร์ดแวร์ สร้างขึ้นราว ค.ศ. 1984-1985 โดย Philip Moorby และเป็นมาตรฐาน IEEE 1364 ในปี ค.ศ. 1995 ออกแบบได้ทั้งในด้านโครงสร้าง (Structure) และการทำงาน (Behavior) ตั้งแต่ระดับเกตขึ้นไป

**วิธีเขียนอธิบายวงจรใน Verilog มี 3 ลักษณะ** ตามระดับที่ต้องการ (ตัวอย่างวงจรเดียวกันดูในหัวข้อ 2 ถึง 4)

| แบบ | ลักษณะ | คำสำคัญ |
|:--|:--|:--|
| Structural | นำอุปกรณ์พื้นฐาน (Primitives) และโมดูลย่อยมาต่อกันด้วยสายสัญญาณ (Structure) | `and`, `or`, `not`, ... และชื่อโมดูล |
| Dataflow | ส่งค่าเอาต์พุตที่ขึ้นอยู่กับอินพุตผ่านนิพจน์ มองเห็นการไหลของข้อมูลคล้ายสมการลอจิก | `assign` |
| Behavioral | เขียนลักษณะการทำงาน (Behavior) ของวงจรโดยตรง ใช้ `if`, `case` เป็นต้น | `always`, `initial` |

### 1.2 โมดูล (Module)

Verilog ใช้ **โมดูล (Module)** แทนระบบหรือวงจรหนึ่ง ๆ โมดูลเป็นบล็อกพื้นฐานที่ใช้กำหนดคุณสมบัติของระบบ ทุกโมดูลเริ่มด้วยคำสงวน `module` ตามด้วยชื่อโมดูล และจบด้วย `endmodule` (เขียนติดกัน ไม่มีช่องว่างระหว่าง end กับ module) ภายในโมดูลมี 3 ส่วน

- **Interface** : Port list (ชื่อพอร์ตในวงเล็บหลังชื่อโมดูล คั่นด้วยเครื่องหมาย `,`) และ Port declaration (ทิศทาง `input`, `output`, `inout` ขนาดบิต)
- **Body** : การกำหนดการทำงานของโมดูล เช่น ประกาศตัวแปร `assign` การเรียกใช้โมดูลย่อย บล็อก `initial` และ `always`
- **Add-on** (ไม่บังคับ) : คำสั่ง include (เขียนนำหน้าด้วยเครื่องหมาย backtick) เรียกไฟล์อื่นมาใช้

```verilog
module module_name (port_list);
  // Interface : port declarations
  // Body      : variable declarations, assign, instances, initial, always
endmodule
```

**การตั้งชื่อโมดูล** ประกอบด้วยตัวอักษรอังกฤษ ตัวเลข เครื่องหมาย `$` และ `_` เท่านั้น ต้องเริ่มด้วยตัวอักษรหรือ `_` ห้ามเว้นวรรค ตัวพิมพ์เล็กใหญ่ต่างกัน (Case sensitive) และต้องไม่เป็นคำสงวน เช่น `Counter_4Bit`, `Mux_4_To_1`

**หมายเหตุ (Comment)** มี 2 แบบ ตัวแปลโปรแกรมไม่นำไปประมวลผล

- `// ...` ขึ้นต้นด้วย `//` ไปจนจบบรรทัด
- `/* ... */` ครอบได้หลายบรรทัด

**ทิศทางของพอร์ต** `input` : โมดูลอ่านข้อมูลจากภายนอก (เขียนจากในโมดูลไปพอร์ตนี้ไม่ได้) ; `output` : ส่งข้อมูลออกไปภายนอก (อ่านกลับเข้ามาผ่านพอร์ตนี้ไม่ได้) ; `inout` : อ่านและเขียนได้ (Bi-directional)

### ตัวอย่างที่ 1  จงเขียนส่วน Interface (port list และ port declaration) ของโมดูล ALU ที่มีเอาต์พุต Result (4 บิต), COut, Equal และอินพุต In1, In2, OpSel (4 บิต), CIn, Mode พร้อมหมายเหตุอธิบายแต่ละพอร์ต

$\mathbf{Sol}^{n}$

- ชื่อโมดูลคือ `ALU` พอร์ตทั้งหมดเรียงใน port list : เอาต์พุตก่อน ($\mathit{Result}$, $\mathit{COut}$, $\mathit{Equal}$) แล้วจึงอินพุต
- พอร์ตหลายบิตกำหนดขนาดด้วย `[MSB:LSB]` ก่อนชื่อ เช่น `[3:0]` คือ 4 บิต บิตสูงสุดเป็นบิต 3
- เขียน `output` หรือ `input` ตามด้วยขนาดและชื่อพอร์ต แล้วเขียนหมายเหตุหลัง `//`

$\mathbf{Ans}\quad \text{โค้ดต่อไปนี้}$

```verilog
module ALU (Result, COut, Equal, In1, In2, OpSel, CIn, Mode);
output [3:0] Result;   // operation result
output       COut;     // carry out
output       Equal;    // when 1, In1 = In2
input  [3:0] In1;      // first operand
input  [3:0] In2;      // second operand
input  [3:0] OpSel;    // operation select
input        CIn;      // carry in
input        Mode;     // mode arithm/logic;
                       // arithm when 0
endmodule
```

### 1.3 สัญญาณ ค่า และตัวกระทำ

**ค่าของสัญญาณ** มี 4 ค่า คือ `0` (ลอจิกต่ำ, เท็จ), `1` (ลอจิกสูง, จริง), `x` (ลอจิกไม่ทราบค่า เช่น สัญญาณขัดแย้งกัน) และ `z` (วงจรเปิด High impedance)

**ประเภทของสัญญาณ**

- **Nets** (`wire`, `tri`, ...) แทนการเชื่อมต่อระหว่างส่วนต่าง ๆ ของวงจร เก็บค่าไม่ได้ ค่าที่ปรากฏขึ้นกับตัวขับ (Driver) ถ้าตัดตัวขับออกจะเป็น `z`
- **Registers** (`reg`, `integer`, `time`, `real`) เก็บค่าได้ คงค่าเดิมจนกว่าจะถูกกำหนดค่าใหม่ ค่าเริ่มต้นของ `reg` เป็น `x`

**เวกเตอร์** กำหนดช่วงบิตด้วย `[MSB:LSB]` เช่น `wire [5:0] Bus;` (ซ้ายเป็นบิตสูงสุด) อ้างอิงบิตด้วยดัชนี `Bus[2]` หรือหลายบิต `Bus[3:1]`

**ค่าคงที่ตัวเลข** เขียนเป็น `ขนาด'ฐานค่า` เช่น `4'b1010` (ฐานสอง 4 บิต), `8'hFF` (ฐานสิบหก 8 บิต), `4'd5` (ฐานสิบ 4 บิต) ถ้าไม่ระบุขนาดจะเป็น 32 บิต ถ้าค่าสั้นกว่าขนาดจะเติม `0` ทางซ้าย ใช้ `x` และ `z` ในค่าได้ เช่น `4'b01xx`

**ข้อกำหนดการต่อพอร์ตของโมดูล** (ชนิดของสัญญาณด้านในและด้านนอกโมดูล)

| พอร์ต | ด้านใน (Internal) | ด้านนอก (External) |
|:--|:--|:--|
| `input` | net | net หรือ reg |
| `output` | net หรือ reg | net |
| `inout` | net | net |

**ตัวกระทำ (Operators)**

- เลขคณิต : `+` `-` `*` `/` `%`
- Bit-wise (ทีละบิต) : `~` (NOT), `&` (AND), `|` (OR), `^` (XOR), `~^` หรือ `^~` (XNOR)
- Logical (ผลเป็น 1 บิต) : `!`, `&&`, `||`
- Reduction (ใช้กับเวกเตอร์ตัวเดียว ผลเป็น 1 บิต) : `&`, `|`, `^`, `~&`, `~|`, `~^`
- เปรียบเทียบ : `<` `>` `<=` `>=` และเท่ากัน `==`, `!=` (`===`, `!==` เปรียบเทียบรวม `x` และ `z`)
- ชิฟต์ : `<<` (ซ้าย), `>>` (ขวา) บิตที่ว่างเติม `0`
- ต่อสัญญาณ (Concatenation) `{A, B}` และซ้ำ `{4{A}}`
- เงื่อนไข : `เงื่อนไข ? ค่าเมื่อจริง : ค่าเมื่อเท็จ`

### ตัวอย่างที่ 2  กำหนด `A = 4'b1010` และ `B = 4'b0011` จงหาค่าของนิพจน์ต่อไปนี้

$\mathbf{Sol}^{n}$

คิดทีละนิพจน์ ผลของ bit-wise มีความยาวเท่าตัวถูกกระทำ ผลของ logical, reduction และเปรียบเทียบเป็น 1 บิต

- `A & B` : ทีละบิต $1010 \wedge 0011$ $\Rightarrow$ `0010`
- `A | B` : ทีละบิต $1010 \vee 0011$ $\Rightarrow$ `1011`
- `A ^ B` : ทีละบิต XOR $\Rightarrow$ `1001`
- `~A` : กลับบิตทุกตัว $\Rightarrow$ `0101`
- `&A` : Reduction AND : ถ้ามี $0$ อยู่ผลเป็น $0$ $\Rightarrow$ `0`
- `|A` : Reduction OR : ถ้ามี $1$ อยู่ผลเป็น $1$ $\Rightarrow$ `1`
- `^A` : Reduction XOR : จำนวน $1$ ใน $1010$ เป็นคู่ (2 ตัว) ผลเป็น $0$ $\Rightarrow$ `0`
- `A && B` : ทั้ง $A$ และ $B$ ไม่เป็นศูนย์ ผลเป็น $1$ $\Rightarrow$ `1`
- `A == B` : $1010 \ne 0011$ $\Rightarrow$ `0`
- `A > B` : $10 > 3$ $\Rightarrow$ `1`
- `A << 1` : ชิฟต์ซ้าย 1 บิต เติม $0$ ทางขวา และตัดบิตสูงสุดทิ้ง (เก็บ 4 บิต) $\Rightarrow$ `0100`
- `A >> 2` : ชิฟต์ขวา 2 บิต เติม $0$ ทางซ้าย $\Rightarrow$ `0010`
- `{A, B}` : ต่อ $A$ ไว้ทางซ้ายของ $B$ $\Rightarrow$ `10100011`
- `{2{B}}` : ต่อ $B$ ซ้ำ 2 ครั้ง $\Rightarrow$ `00110011`
- `A + B` : $10 + 3 = 13$ เก็บ 4 บิต $\Rightarrow$ `1101`
- `(A > B) ? A : B` : เงื่อนไข $A > B$ เป็นจริง จึงได้ $A$ $\Rightarrow$ `1010`

$\mathbf{Ans}\quad \text{ตามผลในแต่ละข้อข้างบน}$

## 2. การออกแบบเชิงโครงสร้าง (Structural)

### 2.1 เกตพื้นฐานที่สร้างไว้แล้ว (Primitives)

ระบบประกอบด้วยโมดูลหลายตัวต่อกัน แต่ละโมดูลมีโมดูลย่อยต่อกันได้เป็นลำดับชั้น (Hierarchy) จนถึงเกตพื้นฐาน Verilog มีเกตพื้นฐานให้ใช้ได้ทันที 14 ชนิด แบ่งเป็น 4 กลุ่ม

- **Multiple-input gates** : `and`, `nand`, `or`, `nor`, `xor`, `xnor` มีอินพุตกี่ตัวก็ได้ เอาต์พุตเพียงหนึ่ง
- **Multiple-output gates** : `buf` และ `not` มีเอาต์พุตได้หลายตัวจากอินพุตตัวเดียว
- **Tri-state gates** : `bufif0`, `bufif1`, `notif0`, `notif1` (เอาต์พุต `0`, `1` หรือ `z` ตามสัญญาณควบคุม)
- **Pull gates**

**รูปแบบการใช้งาน** ระบุชนิดเกต (ตามด้วยดีเลย์ `#n` และชื่อ instance ถ้าต้องการ) แล้วรายการพอร์ตในวงเล็บ **พอร์ตแรกเป็นเอาต์พุตเสมอ** ตามด้วยอินพุตทุกตัว

```verilog
wire A, B, C, D, E;
nand (A, B, C, D, E);   // A = NAND(B, C, D, E)
not  (A, B, C, D, E);   // A, B, C, D = NOT(E)   (E เป็นอินพุตตัวสุดท้าย)
```

**ค่าความจริงของ `and` และ `or` เมื่อมีค่า `x` และ `z`**

| `and` | 0 | 1 | x | z |
|:-:|:-:|:-:|:-:|:-:|
| 0 | 0 | 0 | 0 | 0 |
| 1 | 0 | 1 | x | x |
| x | 0 | x | x | x |
| z | 0 | x | x | x |

| `or` | 0 | 1 | x | z |
|:-:|:-:|:-:|:-:|:-:|
| 0 | 0 | 1 | x | x |
| 1 | 1 | 1 | 1 | 1 |
| x | x | 1 | x | x |
| z | x | 1 | x | x |

**ดีเลย์ (Propagation delay)** `#5` หลังชื่อเกตกำหนดเวลาหน่วงของเกต ไม่มีผลต่อตารางความจริงของวงจร

### ตัวอย่างที่ 3  โมดูล FullAdd_1Bit ต่อไปนี้ต่อเกตอย่างไร จงเขียนวงจร และสมการของ Sum และ Cout

```verilog
module FullAdd_1Bit (Sum, Cout, A, B, Cin);
output Sum, Cout;
input A, B, Cin;
wire AxorB, AandB, AandCin, BandCin;

xor #5 HalfSum (AxorB, A, B);
and #4 (AandB, A, B);
xor (Sum, AxorB, Cin);
and #4 And_2 (AandCin, A, Cin);
and #4 And_3 (BandCin, B, Cin);
or (Cout, AandB, AandCin, BandCin);
endmodule
```

$\mathbf{Sol}^{n}$

อ่านทีละบรรทัด (พอร์ตแรกของเกตคือเอาต์พุต) เขียนเป็นสมการของสายภายใน (`wire`)

- `xor #5 HalfSum (AxorB, A, B)` : $\mathit{AxorB} = A \oplus B$ (ชื่อ instance คือ HalfSum, ดีเลย์ 5)
- `and #4 (AandB, A, B)` : $\mathit{AandB} = AB$
- `xor (Sum, AxorB, Cin)` : $\mathit{Sum} = \mathit{AxorB} \oplus Cin = A \oplus B \oplus Cin$
- `and #4 And_2 (AandCin, A, Cin)` : $\mathit{AandCin} = A\,Cin$
- `and #4 And_3 (BandCin, B, Cin)` : $\mathit{BandCin} = B\,Cin$
- `or (Cout, AandB, AandCin, BandCin)` : $\mathit{Cout} = AB + A\,Cin + B\,Cin$

ต่อเกตตามนี้ได้วงจร Full Adder 1 บิต (XOR 2 ตัว, AND 3 ตัว, OR 1 ตัว) ตรวจด้วยตารางความจริงทั้ง 8 แถว

$\mathbf{Ans}\quad \mathit{Sum} = A \oplus B \oplus Cin,\quad \mathit{Cout} = AB + A\,Cin + B\,Cin$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="737" height="704" viewBox="0 0 737 704" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<path d="M231,74 C253,74 279,90.5 291,107 C279,123.5 253,140 231,140 Q245,107 231,74 Z"/>
<path d="M223,74 Q237,107 223,140"/>
<line x1="40" y1="96" x2="229.2" y2="96"/>
<line x1="89" y1="118" x2="229.2" y2="118"/>
<path d="M223,174 H249 A26,33 0 0 1 249,240 H223 Z"/>
<line x1="40" y1="196" x2="223" y2="196"/>
<line x1="89" y1="218" x2="223" y2="218"/>
<path d="M223,274 H249 A26,33 0 0 1 249,340 H223 Z"/>
<line x1="40" y1="296" x2="223" y2="296"/>
<line x1="138" y1="318" x2="223" y2="318"/>
<path d="M223,374 H249 A26,33 0 0 1 249,440 H223 Z"/>
<line x1="89" y1="396" x2="223" y2="396"/>
<line x1="138" y1="418" x2="223" y2="418"/>
<line x1="291" y1="107" x2="357.4" y2="107"/>
<line x1="275" y1="207" x2="377.4" y2="207"/>
<line x1="275" y1="307" x2="397.4" y2="307"/>
<line x1="275" y1="407" x2="417.4" y2="407"/>
<path d="M479.4,474 C501.4,474 527.4,490.5 539.4,507 C527.4,523.5 501.4,540 479.4,540 Q493.4,507 479.4,474 Z"/>
<path d="M471.4,474 Q485.4,507 471.4,540"/>
<line x1="357.4" y1="496" x2="477.6" y2="496"/>
<line x1="138" y1="518" x2="477.6" y2="518"/>
<path d="M471.4,574 C493.4,574 519.4,596 531.4,618 C519.4,640 493.4,662 471.4,662 Q485.4,618 471.4,574 Z"/>
<line x1="377.4" y1="596" x2="476.7" y2="596"/>
<line x1="397.4" y1="618" x2="478.4" y2="618"/>
<line x1="417.4" y1="640" x2="476.7" y2="640"/>
<line x1="539.4" y1="507" x2="565.4" y2="507"/>
<line x1="531.4" y1="618" x2="585.4" y2="618"/>
<line x1="565.4" y1="507" x2="641.4" y2="507"/>
<line x1="585.4" y1="618" x2="641.4" y2="618"/>
<line x1="40" y1="36" x2="40" y2="296"/>
<line x1="89" y1="36" x2="89" y2="396"/>
<line x1="138" y1="36" x2="138" y2="518"/>
<line x1="357.4" y1="107" x2="357.4" y2="496"/>
<line x1="377.4" y1="207" x2="377.4" y2="596"/>
<line x1="397.4" y1="307" x2="397.4" y2="618"/>
<line x1="417.4" y1="407" x2="417.4" y2="640"/>
<circle cx="40" cy="96" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="89" cy="118" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="40" cy="196" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="89" cy="218" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="40" cy="296" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="138" cy="318" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="89" cy="396" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="138" cy="418" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="357.4" cy="496" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="138" cy="518" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="377.4" cy="596" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="397.4" cy="618" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="417.4" cy="640" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="357.4" cy="107" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="377.4" cy="207" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="397.4" cy="307" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="417.4" cy="407" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="299" y="100" text-anchor="start" font-size="13">AxorB</text>
<text x="283" y="200" text-anchor="start" font-size="13">AandB</text>
<text x="283" y="300" text-anchor="start" font-size="13">AandCin</text>
<text x="283" y="400" text-anchor="start" font-size="13">BandCin</text>
<text x="649.4" y="513" text-anchor="start">Sum</text>
<text x="649.4" y="624" text-anchor="start">Cout</text>
<text x="40" y="28" text-anchor="middle" font-size="16">A</text>
<text x="89" y="28" text-anchor="middle" font-size="16">B</text>
<text x="138" y="28" text-anchor="middle" font-size="16">Cin</text>
</g>
</svg>
</div>

| $A$ | $B$ | $Cin$ | $\mathit{Sum}$ | $\mathit{Cout}$ |
|:-:|:-:|:-:|:-:|:-:|
| 0 | 0 | 0 | 0 | 0 |
| 0 | 0 | 1 | 1 | 0 |
| 0 | 1 | 0 | 1 | 0 |
| 0 | 1 | 1 | 0 | 1 |
| 1 | 0 | 0 | 1 | 0 |
| 1 | 0 | 1 | 0 | 1 |
| 1 | 1 | 0 | 0 | 1 |
| 1 | 1 | 1 | 1 | 1 |

### ตัวอย่างที่ 4  โมดูล mux_4_to_1 ต่อไปนี้ทำหน้าที่อะไร จงเขียนวงจร ตารางการทำงาน และตอบว่าถ้าสลับลำดับบรรทัดของเกตแล้ววงจรเปลี่ยนหรือไม่

```verilog
module mux_4_to_1 (Out, In0, In1, In2, In3, Sel1, Sel0);
output Out;
input In0, In1, In2, In3, Sel0, Sel1;

wire NotSel0, NotSel1;
wire Y0, Y1, Y2, Y3;

not (NotSel0, Sel0);
not (NotSel1, Sel1);
and (Y0, In0, NotSel1, NotSel0);
and (Y1, In1, NotSel1, Sel0);
and (Y2, In2, Sel1, NotSel0);
and (Y3, In3, Sel1, Sel0);
or (Out, Y0, Y1, Y2, Y3);
endmodule
```

$\mathbf{Sol}^{n}$

- `not` สร้าง $\mathit{NotSel0} = \overline{Sel0}$ และ $\mathit{NotSel1} = \overline{Sel1}$
- `and` แต่ละตัวเลือกอินพุตหนึ่งตัวเมื่อ $\mathit{Sel1}\,\mathit{Sel0}$ ตรงกับรหัสของมัน : $Y0 = In0\,\overline{Sel1}\,\overline{Sel0}$, $Y1 = In1\,\overline{Sel1}\,\mathit{Sel0}$, $Y2 = In2\,\mathit{Sel1}\,\overline{Sel0}$, $Y3 = In3\,\mathit{Sel1}\,\mathit{Sel0}$
- `or` รวม 4 พจน์ : $Out = Y0 + Y1 + Y2 + Y3$
- จึงเป็นมัลติเพลกซ์เซอร์ 4-to-1 : $\mathit{Sel1}\mathit{Sel0} = 00, 01, 10, 11$ เลือก $In0, In1, In2, In3$ ตามลำดับ

**ลำดับของบรรทัด** วงจรจริงเกตทุกตัวทำงานพร้อมกัน การเขียนโค้ดเป็นลำดับบรรทัดเป็นเพียงลักษณะของภาษา ไม่ใช่ลำดับเวลา จึงสลับบรรทัดเกตได้ (ลองสลับแล้วตรวจตารางความจริงทั้ง 64 แถว ได้ผลเหมือนเดิม)

$\mathbf{Ans}\quad Out = In_{(2\,\mathit{Sel1} + \mathit{Sel0})} \text{ ; สลับลำดับบรรทัดแล้ววงจรเหมือนเดิม}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="1054" height="838" viewBox="0 0 1054 838" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<polygon points="424,76 424,100 446,88"/>
<circle cx="451" cy="88" r="5"/>
<line x1="272" y1="88" x2="424" y2="88"/>
<polygon points="424,138 424,162 446,150"/>
<circle cx="451" cy="150" r="5"/>
<line x1="330" y1="150" x2="424" y2="150"/>
<path d="M424,198 H450 A26,44 0 0 1 450,286 H424 Z"/>
<line x1="214" y1="220" x2="424" y2="220"/>
<line x1="330" y1="242" x2="424" y2="242"/>
<line x1="272" y1="264" x2="424" y2="264"/>
<line x1="456" y1="88" x2="536.2" y2="88"/>
<line x1="456" y1="150" x2="556.2" y2="150"/>
<line x1="476" y1="242" x2="576.2" y2="242"/>
<path d="M630.2,320 H656.2 A26,44 0 0 1 656.2,408 H630.2 Z"/>
<line x1="40" y1="342" x2="630.2" y2="342"/>
<line x1="556.2" y1="364" x2="630.2" y2="364"/>
<line x1="536.2" y1="386" x2="630.2" y2="386"/>
<path d="M630.2,442 H656.2 A26,44 0 0 1 656.2,530 H630.2 Z"/>
<line x1="98" y1="464" x2="630.2" y2="464"/>
<line x1="556.2" y1="486" x2="630.2" y2="486"/>
<line x1="272" y1="508" x2="630.2" y2="508"/>
<path d="M630.2,564 H656.2 A26,44 0 0 1 656.2,652 H630.2 Z"/>
<line x1="156" y1="586" x2="630.2" y2="586"/>
<line x1="330" y1="608" x2="630.2" y2="608"/>
<line x1="536.2" y1="630" x2="630.2" y2="630"/>
<line x1="682.2" y1="364" x2="722.1" y2="364"/>
<line x1="682.2" y1="486" x2="742.1" y2="486"/>
<line x1="682.2" y1="608" x2="762.1" y2="608"/>
<path d="M816.1,686 C838.1,686 864.1,713.5 876.1,741 C864.1,768.5 838.1,796 816.1,796 Q830.1,741 816.1,686 Z"/>
<line x1="722.1" y1="708" x2="820.6" y2="708"/>
<line x1="742.1" y1="730" x2="822.8" y2="730"/>
<line x1="762.1" y1="752" x2="822.8" y2="752"/>
<line x1="576.2" y1="774" x2="820.6" y2="774"/>
<line x1="876.1" y1="741" x2="902.1" y2="741"/>
<line x1="902.1" y1="741" x2="958.1" y2="741"/>
<line x1="40" y1="36" x2="40" y2="342"/>
<line x1="98" y1="36" x2="98" y2="464"/>
<line x1="156" y1="36" x2="156" y2="586"/>
<line x1="214" y1="36" x2="214" y2="220"/>
<line x1="272" y1="36" x2="272" y2="508"/>
<line x1="330" y1="36" x2="330" y2="608"/>
<line x1="536.2" y1="88" x2="536.2" y2="630"/>
<line x1="556.2" y1="150" x2="556.2" y2="486"/>
<line x1="576.2" y1="242" x2="576.2" y2="774"/>
<line x1="722.1" y1="364" x2="722.1" y2="708"/>
<line x1="742.1" y1="486" x2="742.1" y2="730"/>
<line x1="762.1" y1="608" x2="762.1" y2="752"/>
<circle cx="272" cy="88" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="330" cy="150" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="214" cy="220" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="330" cy="242" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="272" cy="264" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="40" cy="342" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="556.2" cy="364" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="536.2" cy="386" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="98" cy="464" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="556.2" cy="486" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="272" cy="508" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="156" cy="586" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="330" cy="608" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="536.2" cy="630" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="722.1" cy="708" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="742.1" cy="730" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="762.1" cy="752" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="576.2" cy="774" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="536.2" cy="88" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="556.2" cy="150" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="576.2" cy="242" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="722.1" cy="364" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="742.1" cy="486" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="762.1" cy="608" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="464" y="81" text-anchor="start" font-size="13">NotSel0</text>
<text x="464" y="143" text-anchor="start" font-size="13">NotSel1</text>
<text x="484" y="235" text-anchor="start" font-size="13">Y<tspan dy="4" font-size="9">3</tspan></text>
<text x="690.2" y="357" text-anchor="start" font-size="13">Y<tspan dy="4" font-size="9">0</tspan></text>
<text x="690.2" y="479" text-anchor="start" font-size="13">Y<tspan dy="4" font-size="9">1</tspan></text>
<text x="690.2" y="601" text-anchor="start" font-size="13">Y<tspan dy="4" font-size="9">2</tspan></text>
<text x="966.1" y="747" text-anchor="start">Out</text>
<text x="40" y="28" text-anchor="middle" font-size="16">In0</text>
<text x="98" y="28" text-anchor="middle" font-size="16">In1</text>
<text x="156" y="28" text-anchor="middle" font-size="16">In2</text>
<text x="214" y="28" text-anchor="middle" font-size="16">In3</text>
<text x="272" y="28" text-anchor="middle" font-size="16">Sel0</text>
<text x="330" y="28" text-anchor="middle" font-size="16">Sel1</text>
</g>
</svg>
</div>

| $\mathit{Sel1}$ | $\mathit{Sel0}$ | $Out$ |
|:-:|:-:|:-:|
| 0 | 0 | $In0$ |
| 0 | 1 | $In1$ |
| 1 | 0 | $In2$ |
| 1 | 1 | $In3$ |

### ตัวอย่างที่ 5  จงเขียนโมดูล Verilog แบบ Structural ของวงจรในรูป (เอาต์พุต $Y = AB + \overline{C}D$)

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="742" height="444" viewBox="0 0 742 444" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<polygon points="200,76 200,100 222,88"/>
<circle cx="227" cy="88" r="5"/>
<line x1="102" y1="88" x2="200" y2="88"/>
<path d="M200,136 H226 A26,33 0 0 1 226,202 H200 Z"/>
<line x1="40" y1="158" x2="200" y2="158"/>
<line x1="71" y1="180" x2="200" y2="180"/>
<line x1="232" y1="88" x2="290.2" y2="88"/>
<line x1="252" y1="169" x2="310.2" y2="169"/>
<path d="M364.2,236 H390.2 A26,33 0 0 1 390.2,302 H364.2 Z"/>
<line x1="290.2" y1="258" x2="364.2" y2="258"/>
<line x1="133" y1="280" x2="364.2" y2="280"/>
<line x1="416.2" y1="269" x2="450.3" y2="269"/>
<path d="M504.3,336 C526.3,336 552.3,352.5 564.3,369 C552.3,385.5 526.3,402 504.3,402 Q518.3,369 504.3,336 Z"/>
<line x1="310.2" y1="358" x2="510.5" y2="358"/>
<line x1="450.3" y1="380" x2="510.5" y2="380"/>
<line x1="564.3" y1="369" x2="590.3" y2="369"/>
<line x1="590.3" y1="369" x2="646.3" y2="369"/>
<line x1="40" y1="36" x2="40" y2="158"/>
<line x1="71" y1="36" x2="71" y2="180"/>
<line x1="102" y1="36" x2="102" y2="88"/>
<line x1="133" y1="36" x2="133" y2="280"/>
<line x1="290.2" y1="88" x2="290.2" y2="258"/>
<line x1="310.2" y1="169" x2="310.2" y2="358"/>
<line x1="450.3" y1="269" x2="450.3" y2="380"/>
<circle cx="102" cy="88" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="40" cy="158" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="180" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="290.2" cy="258" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="133" cy="280" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="310.2" cy="358" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="450.3" cy="380" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="290.2" cy="88" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="310.2" cy="169" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="450.3" cy="269" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="240" y="81" text-anchor="start" font-size="13">NotC</text>
<text x="260" y="162" text-anchor="start" font-size="13">P</text>
<text x="424.2" y="262" text-anchor="start" font-size="13">Q</text>
<text x="654.3" y="375" text-anchor="start">Y</text>
<text x="40" y="28" text-anchor="middle" font-size="16">A</text>
<text x="71" y="28" text-anchor="middle" font-size="16">B</text>
<text x="102" y="28" text-anchor="middle" font-size="16">C</text>
<text x="133" y="28" text-anchor="middle" font-size="16">D</text>
</g>
</svg>
</div>

$\mathbf{Sol}^{n}$

- ตั้งชื่อสายภายในทุกจุดที่เป็นเอาต์พุตของเกต : $\mathit{NotC}$ (เอาต์พุต NOT), $P$ (เอาต์พุต AND ตัวบน), $Q$ (เอาต์พุต AND ตัวล่าง)
- ประกาศ `wire` ให้สายภายใน
- เขียนเกตทีละตัว พอร์ตแรกเป็นเอาต์พุต : `not (NotC, C)`, `and (P, A, B)`, `and (Q, NotC, D)`, `or (Y, P, Q)`
- ตรวจด้วยตารางความจริง 16 แถว ได้ $Y = AB + \overline{C}D$

$\mathbf{Ans}\quad \text{โค้ดต่อไปนี้}$

```verilog
module Ckt (Y, A, B, C, D);
output Y;
input A, B, C, D;
wire NotC, P, Q;

not (NotC, C);
and (P, A, B);
and (Q, NotC, D);
or (Y, P, Q);
endmodule
```

### 2.2 อุปกรณ์พื้นฐานที่ผู้ออกแบบกำหนดเอง (UDP)

ถ้าเกตพื้นฐาน 14 ชนิดไม่พอ ผู้ออกแบบนิยามอุปกรณ์พื้นฐานเอง (User-defined Primitive, UDP) ได้ ทั้ง Combinational และ Sequential logic เรียกใช้เหมือนโมดูลได้ แต่ UDP มีข้อจำกัดคือ **มีเอาต์พุตได้เพียงตัวเดียว** ไม่มี `inout` และอินพุตเป็นเวกเตอร์ไม่ได้ ต้องกำหนดการทำงานเป็นตารางค่าความจริง

**โครงสร้าง** ขึ้นต้นด้วย `primitive ชื่อ (port_list);` ตามด้วย port declaration (พอร์ตแรกเป็นเอาต์พุต) ค่าเริ่มต้น (`initial` เฉพาะ Sequential) ตาราง `table ... endtable` และปิดด้วย `endprimitive` ลำดับคอลัมน์ในตารางเป็นไปตามลำดับพอร์ตใน port list

- ตาราง Combinational : `อินพุต... : เอาต์พุต ;` เครื่องหมาย `?` แทนค่าอะไรก็ได้ (`0`, `1`, `x`) สภาวะที่ไม่ได้ระบุในตารางให้เอาต์พุตเป็น `x`
- ตาราง Sequential : `อินพุต... : สถานะปัจจุบัน : สถานะถัดไป ;` ขอบสัญญาณเขียนย่อ `r` (ขอบขาขึ้น, rising) และ `f` (ขอบขาลง, falling) เครื่องหมาย `-` แทน "ไม่เปลี่ยนค่า"

**ตัวอย่าง UDP แบบ Combinational : Mux2to1** (Sel เลือก In0 หรือ In1)

```verilog
primitive Mux2to1 (Out, Sel, In0, In1);
output Out;
input Sel, In0, In1;

table
  // Sel  In0  In1 : Out
     0    0    ?   : 0 ;
     0    1    ?   : 1 ;
     1    ?    0   : 0 ;
     1    ?    1   : 1 ;
endtable
endprimitive
```

**ตัวอย่าง UDP แบบ Sequential : TFF** (T flip-flop มี Clr แบบอะซิงโครนัส)

```verilog
primitive TFF (Q, Clk, Clr);
output Q; reg Q;
input Clr, Clk;

initial Q = 0;

table
//Clk  Clr : Q : Q+
   ?    1  : ? : 0 ;   // asynchronous clear
   r    0  : 0 : 1 ;   // toggle on rising edge of Clk
   r    0  : 1 : 0 ;
   f    0  : ? : - ;   // ignore falling edge of Clk
   ?    f  : ? : - ;   // ignore falling edge of Clr
endtable
endprimitive
```

UDP เขียนแยกจากโมดูล (ไม่ซ้อนในโมดูล) แล้วเรียกใช้เหมือนเกตพื้นฐาน เช่น `Mux2to1 U1 (Y, S, A, B);`

### ตัวอย่างที่ 6  จาก UDP Mux2to1 จงหาเอาต์พุต Out เมื่อ $(Sel, In0, In1) = (0,1,0), (0,0,1), (1,0,1), (1,1,0)$

$\mathbf{Sol}^{n}$

คอลัมน์ในตารางเรียงตามพอร์ต $Sel, In0, In1$ หาแถวที่ตรงกัน ($?$ ตรงกับค่าใดก็ได้)

- $(0,1,0)$ ตรงแถว `0 1 ? : 1` $\Rightarrow Out = 1$
- $(0,0,1)$ ตรงแถว `0 0 ? : 0` $\Rightarrow Out = 0$
- $(1,0,1)$ ตรงแถว `1 ? 1 : 1` $\Rightarrow Out = 1$
- $(1,1,0)$ ตรงแถว `1 ? 0 : 0` $\Rightarrow Out = 0$
- สรุป : $Sel=0$ ส่ง $In0$, $Sel=1$ ส่ง $In1$

$\mathbf{Ans}\quad Out = 1,\ 0,\ 1,\ 0$

| $Sel$ | $In0$ | $In1$ | $Out$ |
|:-:|:-:|:-:|:-:|
| 0 | 1 | 0 | 1 |
| 0 | 0 | 1 | 0 |
| 1 | 0 | 1 | 1 |
| 1 | 1 | 0 | 0 |

### ตัวอย่างที่ 7  UDP TFF เริ่มต้นที่ $Q=0$ ($Clr=0$ ตอนเริ่ม) จงหา $Q$ เมื่อเกิดเหตุการณ์ต่อไปนี้ตามลำดับ : Clk ขึ้น, Clk ลง, Clk ขึ้น, Clk ลง, Clk ขึ้น, Clr เป็น 1, Clr เป็น 0, Clk ลง, Clk ขึ้น

$\mathbf{Sol}^{n}$

ใช้ตาราง TFF ทีละเหตุการณ์ (คอลัมน์ Clk, Clr : Q : Q+)

- เหตุการณ์ 1 : ขอบขึ้น, $Clr=0$, $Q=0$ : แถว `r 0 : 0 : 1` สลับเป็น 1 $\Rightarrow Q = 1$
- เหตุการณ์ 2 : ขอบลง : แถว `f 0 : ? : -` ไม่เปลี่ยน $\Rightarrow Q = 1$
- เหตุการณ์ 3 : ขอบขึ้น, $Q=1$ : แถว `r 0 : 1 : 0` สลับเป็น 0 $\Rightarrow Q = 0$
- เหตุการณ์ 4 : ขอบลง ไม่เปลี่ยน $\Rightarrow Q = 0$
- เหตุการณ์ 5 : ขอบขึ้น, $Q=0$ สลับเป็น 1 $\Rightarrow Q = 1$
- เหตุการณ์ 6 : $Clr=1$ : แถว `? 1 : ? : 0` ล้างเป็น 0 ทันทีโดยไม่ต้องมี Clk $\Rightarrow Q = 0$
- เหตุการณ์ 7 : Clr ลง : แถว `? f : ? : -` ไม่เปลี่ยน $\Rightarrow Q = 0$
- เหตุการณ์ 8 : Clk ลง ไม่เปลี่ยน $\Rightarrow Q = 0$
- เหตุการณ์ 9 : ขอบขึ้น, $Q=0$ สลับเป็น 1 $\Rightarrow Q = 1$

$\mathbf{Ans}\quad Q = 1,\ 1,\ 0,\ 0,\ 1,\ 0,\ 0,\ 0,\ 1$

| ลำดับ | เหตุการณ์ | $Q$ ก่อน | $Q$ หลัง |
|:-:|:-:|:-:|:-:|
| 1 | Clk ขึ้น | 0 | 1 |
| 2 | Clk ลง | 1 | 1 |
| 3 | Clk ขึ้น | 1 | 0 |
| 4 | Clk ลง | 0 | 0 |
| 5 | Clk ขึ้น | 0 | 1 |
| 6 | Clr เป็น 1 | 1 | 0 |
| 7 | Clr เป็น 0 | 0 | 0 |
| 8 | Clk ลง | 0 | 0 |
| 9 | Clk ขึ้น | 0 | 1 |

### 2.3 การเรียกใช้โมดูลและการต่อพอร์ต

การออกแบบแบบลำดับชั้น (Hierarchical design) เรียกใช้โมดูลที่ออกแบบไว้แล้วมาประกอบเป็นวงจร เรียกใช้เหมือนเกตพื้นฐาน คือ ชื่อโมดูล ชื่อ instance และรายการพอร์ต โมดูลที่ถูกเรียกต้องเขียนแยกไว้ (ไม่ซ้อนอยู่ภายในโมดูลอื่น) ต่อกันด้วย net

**การต่อพอร์ตโดยลำดับ (Ordered port list)** สัญญาณถูกต่อกับพอร์ตตามตำแหน่ง เช่น โมดูล `Hexagon (Out1, In1, In2)` เรียกด้วย `Hexagon MyMod (A, B, C);` หมายถึง A ต่อ Out1, B ต่อ In1, C ต่อ In2

**การต่อพอร์ตโดยชื่อ (By name)** ระบุชื่อพอร์ตนำหน้าจุด เช่น `Hexagon MyMod (.In1(B), .In2(C), .Out1(A));` สลับลำดับได้ เพราะมีชื่อกำกับ

**พอร์ตที่ไม่ได้ต่อ (Unconnected)** ถ้าต่อด้วยชื่อ ตัดพอร์ตที่ไม่ใช้ทิ้งได้เลย แต่ถ้าต่อตามลำดับต้องเว้นตำแหน่งว่างไว้ เช่น `GoldBox (A, B, C, , E);`

### ตัวอย่างที่ 8  จงสร้างมัลติเพลกซ์เซอร์ 4-to-1 โดยใช้โมดูล Mux2 (2-to-1) จำนวน 3 ตัว

$\mathbf{Sol}^{n}$

- Mux2 ตัวที่ 1 และ 2 เลือกด้วย $\mathit{Sel0}$ : `m0` เลือกระหว่าง $In0, In1$ ; `m1` เลือกระหว่าง $In2, In3$
- Mux2 ตัวที่ 3 เลือกด้วย $\mathit{Sel1}$ ระหว่างผลของ `m0` และ `m1` : ต้องมีสายภายใน $w0, w1$ (`wire`) ต่อระหว่างโมดูล
- ต่อพอร์ตของ Mux2 ที่เป็น `(Y, S, A, B)` : `m0` และ `m1` ต่อโดยลำดับ ส่วน `m2` ต่อโดยชื่อ ผลเหมือนกัน
- ตรวจด้วยตารางความจริง 64 แถว ได้ $Out = In_{(2\,\mathit{Sel1} + \mathit{Sel0})}$

$\mathbf{Ans}\quad \text{โค้ดและวงจรตามด้านล่าง}$

```verilog
module Mux2 (Y, S, A, B);
output Y;
input S, A, B;
assign Y = S ? B : A;
endmodule

module Mux4 (Out, In0, In1, In2, In3, Sel1, Sel0);
output Out;
input In0, In1, In2, In3, Sel1, Sel0;
wire w0, w1;

Mux2 m0 (w0, Sel0, In0, In1);          // by order
Mux2 m1 (w1, Sel0, In2, In3);
Mux2 m2 (.Y(Out), .S(Sel1), .A(w0), .B(w1));   // by name
endmodule
```

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="604" height="296" viewBox="0 0 604 296" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(24,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<rect x="150" y="24" width="84" height="84" rx="2"/>
<line x1="122" y1="52" x2="150" y2="52"/>
<line x1="122" y1="86" x2="150" y2="86"/>
<line x1="234" y1="66" x2="262" y2="66"/>
<line x1="192" y1="108" x2="192" y2="122"/>
<rect x="150" y="164" width="84" height="84" rx="2"/>
<line x1="122" y1="192" x2="150" y2="192"/>
<line x1="122" y1="226" x2="150" y2="226"/>
<line x1="234" y1="206" x2="262" y2="206"/>
<line x1="192" y1="248" x2="192" y2="262"/>
<rect x="370" y="94" width="84" height="84" rx="2"/>
<line x1="342" y1="122" x2="370" y2="122"/>
<line x1="342" y1="156" x2="370" y2="156"/>
<line x1="454" y1="136" x2="482" y2="136"/>
<line x1="412" y1="178" x2="412" y2="192"/>
<line x1="262" y1="66" x2="306" y2="66"/>
<line x1="306" y1="66" x2="306" y2="122"/>
<line x1="306" y1="122" x2="370" y2="122"/>
<line x1="262" y1="206" x2="318" y2="206"/>
<line x1="318" y1="206" x2="318" y2="156"/>
<line x1="318" y1="156" x2="370" y2="156"/>
<line x1="454" y1="136" x2="506" y2="136"/>
</g>
<text x="192" y="48" text-anchor="middle" font-size="14">Mux2</text>
<text x="192" y="68" text-anchor="middle" font-size="12">m0</text>
<text x="158" y="55" text-anchor="start" font-size="13">A</text>
<text x="158" y="89" text-anchor="start" font-size="13">B</text>
<text x="226" y="72" text-anchor="end" font-size="13">Y</text>
<text x="192" y="100" text-anchor="middle" font-size="12">S</text>
<text x="192" y="188" text-anchor="middle" font-size="14">Mux2</text>
<text x="192" y="208" text-anchor="middle" font-size="12">m1</text>
<text x="158" y="195" text-anchor="start" font-size="13">A</text>
<text x="158" y="229" text-anchor="start" font-size="13">B</text>
<text x="226" y="212" text-anchor="end" font-size="13">Y</text>
<text x="192" y="240" text-anchor="middle" font-size="12">S</text>
<text x="412" y="118" text-anchor="middle" font-size="14">Mux2</text>
<text x="412" y="138" text-anchor="middle" font-size="12">m2</text>
<text x="378" y="125" text-anchor="start" font-size="13">A</text>
<text x="378" y="159" text-anchor="start" font-size="13">B</text>
<text x="446" y="142" text-anchor="end" font-size="13">Y</text>
<text x="412" y="170" text-anchor="middle" font-size="12">S</text>
<text x="116" y="57" text-anchor="end" font-size="15">In0</text>
<text x="116" y="91" text-anchor="end" font-size="15">In1</text>
<text x="116" y="197" text-anchor="end" font-size="15">In2</text>
<text x="116" y="231" text-anchor="end" font-size="15">In3</text>
<text x="192" y="138" text-anchor="middle" font-size="14">Sel0</text>
<text x="192" y="278" text-anchor="middle" font-size="14">Sel0</text>
<text x="412" y="208" text-anchor="middle" font-size="14">Sel1</text>
<text x="284" y="58" text-anchor="middle" font-size="13">w0</text>
<text x="290" y="198" text-anchor="middle" font-size="13">w1</text>
<text x="514" y="141" text-anchor="start" font-size="15">Out</text>
</g>
</svg>
</div>

### ตัวอย่างที่ 9  โมดูล Count4En ต่อไปนี้ใช้ UDP JKMS (JK flip-flop ที่ทำงานที่ขอบขาขึ้นของ Clk และล้างด้วย Clr=1) จงอธิบายวงจรและหาค่า Q เมื่อ En=1 และป้อนพัลส์

```verilog
module Count4En (Q, Clr, Clk, En);
output [3:0] Q;
wire [3:0] Q;
input Clr, Clk, En;
wire JK1, JK2, JK3;

JKMS Bit0 (Q[0], Clr, Clk, En, En);
JKMS Bit1 (Q[1], Clr, Clk, JK1, JK1);
JKMS Bit2 (Q[2], Clr, Clk, JK2, JK2);
JKMS Bit3 (Q[3], Clr, Clk, JK3, JK3);

and (JK1, Q[0], En);
and (JK2, Q[1], JK1);
and (JK3, Q[2], JK2);
endmodule
```

$\mathbf{Sol}^{n}$

- `Bit0` ถึง `Bit3` คือ JK flip-flop 4 ตัว (ใช้ UDP JKMS) ใช้ Clk และ Clr ร่วมกัน เอาต์พุตเป็นบิต $Q[0]$ ถึง $Q[3]$ ของบัส $Q$ (`wire [3:0] Q`)
- `Bit0` : $J = K = En$
- `and (JK1, Q[0], En)` : $J_1 = K_1 = Q[0]\,En$ ; `and (JK2, Q[1], JK1)` : $J_2 = K_2 = Q[1]\,Q[0]\,En$ ; `and (JK3, Q[2], JK2)` : $J_3 = K_3 = Q[2]\,Q[1]\,Q[0]\,En$
- แต่ละบิตสลับเมื่อบิตที่ต่ำกว่าเป็น $1$ ทั้งหมดและ $En=1$ จึงเป็นวงจรนับขึ้นแบบซิงโครนัส 4 บิต (เหมือนในบทที่ 8) ที่มีสัญญาณ Enable
- $En=1$ นับเพิ่มทีละ 1 ทุกขอบขาขึ้น $En=0$ ค่าคงที่ $Clr=1$ ล้างเป็น $0000$

$\mathbf{Ans}\quad Q = 0001,\ 0010,\ 0011,\ \dots,\ 1111,\ 0000,\ 0001,\ \dots$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="1500" height="352" viewBox="0 0 1500 352" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<rect x="174" y="132" width="80" height="150" rx="2"/>
<polyline points="174,198 186,207 174,216"/>
<line x1="174" y1="207" x2="158" y2="207"/>
<line x1="158" y1="207" x2="158" y2="328"/>
<line x1="140" y1="207" x2="140" y2="170"/>
<line x1="140" y1="170" x2="174" y2="170"/>
<line x1="140" y1="207" x2="140" y2="244"/>
<line x1="140" y1="244" x2="174" y2="244"/>
<line x1="254" y1="170" x2="290" y2="170"/>
<line x1="254" y1="244" x2="290" y2="244"/>
<line x1="237.2" y1="236.4" x2="246" y2="236.4" stroke-width="1.4"/>
<rect x="542" y="132" width="80" height="150" rx="2"/>
<polyline points="542,198 554,207 542,216"/>
<line x1="542" y1="207" x2="526" y2="207"/>
<line x1="526" y1="207" x2="526" y2="328"/>
<path d="M426,186 H452 A26,21 0 0 1 452,228 H426 Z"/>
<line x1="478" y1="207" x2="508" y2="207"/>
<line x1="508" y1="207" x2="508" y2="170"/>
<line x1="508" y1="170" x2="542" y2="170"/>
<line x1="508" y1="207" x2="508" y2="244"/>
<line x1="508" y1="244" x2="542" y2="244"/>
<line x1="622" y1="170" x2="658" y2="170"/>
<line x1="622" y1="244" x2="658" y2="244"/>
<line x1="605.2" y1="236.4" x2="614" y2="236.4" stroke-width="1.4"/>
<rect x="932" y="132" width="80" height="150" rx="2"/>
<polyline points="932,198 944,207 932,216"/>
<line x1="932" y1="207" x2="916" y2="207"/>
<line x1="916" y1="207" x2="916" y2="328"/>
<path d="M816,179 H842 A26,28 0 0 1 842,235 H816 Z"/>
<line x1="868" y1="207" x2="898" y2="207"/>
<line x1="898" y1="207" x2="898" y2="170"/>
<line x1="898" y1="170" x2="932" y2="170"/>
<line x1="898" y1="207" x2="898" y2="244"/>
<line x1="898" y1="244" x2="932" y2="244"/>
<line x1="1012" y1="170" x2="1048" y2="170"/>
<line x1="1012" y1="244" x2="1048" y2="244"/>
<line x1="995.2" y1="236.4" x2="1004" y2="236.4" stroke-width="1.4"/>
<rect x="1344" y="132" width="80" height="150" rx="2"/>
<polyline points="1344,198 1356,207 1344,216"/>
<line x1="1344" y1="207" x2="1328" y2="207"/>
<line x1="1328" y1="207" x2="1328" y2="328"/>
<path d="M1228,172 H1254 A26,35 0 0 1 1254,242 H1228 Z"/>
<line x1="1280" y1="207" x2="1310" y2="207"/>
<line x1="1310" y1="207" x2="1310" y2="170"/>
<line x1="1310" y1="170" x2="1344" y2="170"/>
<line x1="1310" y1="207" x2="1310" y2="244"/>
<line x1="1310" y1="244" x2="1344" y2="244"/>
<line x1="1424" y1="170" x2="1460" y2="170"/>
<line x1="1424" y1="244" x2="1460" y2="244"/>
<line x1="1407.2" y1="236.4" x2="1416" y2="236.4" stroke-width="1.4"/>
<line x1="128" y1="100" x2="128" y2="207"/>
<line x1="128" y1="207" x2="140" y2="207"/>
<line x1="414" y1="82" x2="414" y2="200"/>
<line x1="414" y1="200" x2="426" y2="200"/>
<line x1="403" y1="100" x2="403" y2="214"/>
<line x1="403" y1="214" x2="426" y2="214"/>
<line x1="804" y1="64" x2="804" y2="193"/>
<line x1="804" y1="193" x2="816" y2="193"/>
<line x1="793" y1="82" x2="793" y2="207"/>
<line x1="793" y1="207" x2="816" y2="207"/>
<line x1="782" y1="100" x2="782" y2="221"/>
<line x1="782" y1="221" x2="816" y2="221"/>
<line x1="1216" y1="46" x2="1216" y2="186"/>
<line x1="1216" y1="186" x2="1228" y2="186"/>
<line x1="1205" y1="64" x2="1205" y2="200"/>
<line x1="1205" y1="200" x2="1228" y2="200"/>
<line x1="1194" y1="82" x2="1194" y2="214"/>
<line x1="1194" y1="214" x2="1228" y2="214"/>
<line x1="1183" y1="100" x2="1183" y2="228"/>
<line x1="1183" y1="228" x2="1228" y2="228"/>
<line x1="1048" y1="46" x2="1216" y2="46"/>
<line x1="658" y1="64" x2="1205" y2="64"/>
<line x1="290" y1="82" x2="1194" y2="82"/>
<line x1="34" y1="100" x2="1183" y2="100"/>
<line x1="34" y1="30" x2="34" y2="100"/>
<line x1="290" y1="30" x2="290" y2="170"/>
<line x1="658" y1="30" x2="658" y2="170"/>
<line x1="1048" y1="30" x2="1048" y2="170"/>
<line x1="1460" y1="30" x2="1460" y2="170"/>
<line x1="118" y1="328" x2="1328" y2="328"/>
<circle cx="158" cy="328" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="140" cy="207" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="526" cy="328" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="508" cy="207" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="916" cy="328" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="898" cy="207" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="1328" cy="328" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="1310" cy="207" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="1048" cy="46" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="658" cy="64" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="804" cy="64" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="290" cy="82" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="414" cy="82" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="793" cy="82" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="128" cy="100" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="403" cy="100" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="782" cy="100" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="214" y="215" text-anchor="middle" font-size="26">0</text>
<text x="182" y="176" text-anchor="start" font-size="14">J</text>
<text x="182" y="250" text-anchor="start" font-size="14">K</text>
<text x="246" y="176" text-anchor="end" font-size="16">Q</text>
<text x="246" y="250" text-anchor="end" font-size="16">Q</text>
<text x="582" y="215" text-anchor="middle" font-size="26">1</text>
<text x="550" y="176" text-anchor="start" font-size="14">J</text>
<text x="550" y="250" text-anchor="start" font-size="14">K</text>
<text x="614" y="176" text-anchor="end" font-size="16">Q</text>
<text x="614" y="250" text-anchor="end" font-size="16">Q</text>
<text x="972" y="215" text-anchor="middle" font-size="26">2</text>
<text x="940" y="176" text-anchor="start" font-size="14">J</text>
<text x="940" y="250" text-anchor="start" font-size="14">K</text>
<text x="1004" y="176" text-anchor="end" font-size="16">Q</text>
<text x="1004" y="250" text-anchor="end" font-size="16">Q</text>
<text x="1384" y="215" text-anchor="middle" font-size="26">3</text>
<text x="1352" y="176" text-anchor="start" font-size="14">J</text>
<text x="1352" y="250" text-anchor="start" font-size="14">K</text>
<text x="1416" y="176" text-anchor="end" font-size="16">Q</text>
<text x="1416" y="250" text-anchor="end" font-size="16">Q</text>
<text x="34" y="24" text-anchor="middle" font-size="16">En</text>
<text x="290" y="24" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="10">0</tspan></text>
<text x="658" y="24" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="10">1</tspan></text>
<text x="1048" y="24" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="10">2</tspan></text>
<text x="1460" y="24" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="10">3</tspan></text>
<text x="114" y="334" text-anchor="end" font-size="16">Clock</text>
</g>
</svg>
</div>

| พัลส์ที่ | $Q_3Q_2Q_1Q_0$ |
|:-:|:-:|
| 0 | 0000 |
| 1 | 0001 |
| 2 | 0010 |
| 3 | 0011 |
| 4 | 0100 |
| 5 | 0101 |
| 6 | 0110 |
| 7 | 0111 |
| 8 | 1000 |
| 9 | 1001 |
| 10 | 1010 |
| 11 | 1011 |
| 12 | 1100 |
| 13 | 1101 |
| 14 | 1110 |
| 15 | 1111 |
| 16 | 0000 |
| 17 | 0001 |

## 3. การออกแบบแบบ Dataflow

### 3.1 การส่งผ่านค่าแบบต่อเนื่อง (assign)

Dataflow เป็นการส่งค่าผลของนิพจน์ไปยังสัญญาณ คล้ายสมการลอจิก (แต่ไม่จำกัดค่า `0` `1`) ประกอบด้วย

- คำสั่ง `assign` ตามด้วยตัวแปรทางซ้ายมือ (ต้องเป็น net คือ `wire` ไม่ใช่ `reg`) เครื่องหมาย `=` และนิพจน์ทางขวามือ
- ค่าดีเลย์ (ไม่บังคับ)
- ถ้าตัวถูกกระทำใดในนิพจน์เปลี่ยน จะคำนวณและส่งค่าใหม่ทันที (ทุกคำสั่ง `assign` ทำงานพร้อมกัน)

```verilog
assign Out1 = A & B & C;
assign Out2 = A + B;
assign Out3 = {A, B, C};
```

**การส่งแบบแฝง (Implicit)** กำหนดตอนประกาศ `wire` ได้เลยโดยไม่ต้องมี `assign` เช่น `wire x = a & b;`

**การส่งแบบมีเงื่อนไข** ใช้ตัวกระทำเงื่อนไข `?:` แทน `if-else` เช่น `assign Out = Sel ? In1 : In0;` ถ้า $Sel$ เป็นจริง ส่ง $In1$ ไม่เช่นนั้นส่ง $In0$ (คือมัลติเพลกซ์เซอร์ 2-to-1)

### ตัวอย่างที่ 10  โค้ด Dataflow ของ mux_4_to_1 ต่อไปนี้ทำหน้าที่อะไร จงเขียนวงจร

```verilog
module mux_4_to_1 (Out, In0, In1, In2, In3, Sel1, Sel0);
output Out;
input In0, In1, In2, In3, Sel0, Sel1;

assign Out = (~Sel1 & ~Sel0 & In0) | (~Sel1 & Sel0 & In1)
           | (Sel1 & ~Sel0 & In2) | (Sel1 & Sel0 & In3);
endmodule
```

$\mathbf{Sol}^{n}$

- นิพจน์เป็นผลบวก (OR) ของ 4 พจน์ ผลคูณ (AND) แต่ละพจน์คือ $In_k$ กับ $\mathit{Sel1}, \mathit{Sel0}$ ที่ถูกกลับ (`~`) ตามรหัส $k$
- $Out = \overline{Sel1}\,\overline{Sel0}\,In0 + \overline{Sel1}\,\mathit{Sel0}\,In1 + \mathit{Sel1}\,\overline{Sel0}\,In2 + \mathit{Sel1}\,\mathit{Sel0}\,In3$
- จึงเป็นมัลติเพลกซ์เซอร์ 4-to-1 เหมือนแบบ Structural ในตัวอย่างที่ 4 (ผลตารางความจริงเหมือนกันทั้ง 64 แถว)
- วงจร : NOT ที่ $\mathit{Sel1}, \mathit{Sel0}$, AND 3 อินพุต 4 ตัว, OR 4 อินพุต 1 ตัว

$\mathbf{Ans}\quad Out = In_{(2\,\mathit{Sel1} + \mathit{Sel0})}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="1006" height="838" viewBox="0 0 1006 838" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<polygon points="424,76 424,100 446,88"/>
<circle cx="451" cy="88" r="5"/>
<line x1="272" y1="88" x2="424" y2="88"/>
<polygon points="424,138 424,162 446,150"/>
<circle cx="451" cy="150" r="5"/>
<line x1="330" y1="150" x2="424" y2="150"/>
<path d="M424,198 H450 A26,44 0 0 1 450,286 H424 Z"/>
<line x1="272" y1="220" x2="424" y2="220"/>
<line x1="330" y1="242" x2="424" y2="242"/>
<line x1="214" y1="264" x2="424" y2="264"/>
<line x1="456" y1="88" x2="502" y2="88"/>
<line x1="456" y1="150" x2="522" y2="150"/>
<line x1="476" y1="242" x2="542" y2="242"/>
<path d="M596,320 H622 A26,44 0 0 1 622,408 H596 Z"/>
<line x1="502" y1="342" x2="596" y2="342"/>
<line x1="522" y1="364" x2="596" y2="364"/>
<line x1="40" y1="386" x2="596" y2="386"/>
<path d="M596,442 H622 A26,44 0 0 1 622,530 H596 Z"/>
<line x1="502" y1="464" x2="596" y2="464"/>
<line x1="330" y1="486" x2="596" y2="486"/>
<line x1="98" y1="508" x2="596" y2="508"/>
<path d="M596,564 H622 A26,44 0 0 1 622,652 H596 Z"/>
<line x1="272" y1="586" x2="596" y2="586"/>
<line x1="522" y1="608" x2="596" y2="608"/>
<line x1="156" y1="630" x2="596" y2="630"/>
<line x1="648" y1="364" x2="674" y2="364"/>
<line x1="648" y1="486" x2="694" y2="486"/>
<line x1="648" y1="608" x2="714" y2="608"/>
<path d="M768,686 C790,686 816,713.5 828,741 C816,768.5 790,796 768,796 Q782,741 768,686 Z"/>
<line x1="674" y1="708" x2="772.5" y2="708"/>
<line x1="694" y1="730" x2="774.7" y2="730"/>
<line x1="714" y1="752" x2="774.7" y2="752"/>
<line x1="542" y1="774" x2="772.5" y2="774"/>
<line x1="828" y1="741" x2="854" y2="741"/>
<line x1="854" y1="741" x2="910" y2="741"/>
<line x1="40" y1="36" x2="40" y2="386"/>
<line x1="98" y1="36" x2="98" y2="508"/>
<line x1="156" y1="36" x2="156" y2="630"/>
<line x1="214" y1="36" x2="214" y2="264"/>
<line x1="272" y1="36" x2="272" y2="586"/>
<line x1="330" y1="36" x2="330" y2="486"/>
<line x1="502" y1="88" x2="502" y2="464"/>
<line x1="522" y1="150" x2="522" y2="608"/>
<line x1="542" y1="242" x2="542" y2="774"/>
<line x1="674" y1="364" x2="674" y2="708"/>
<line x1="694" y1="486" x2="694" y2="730"/>
<line x1="714" y1="608" x2="714" y2="752"/>
<circle cx="272" cy="88" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="330" cy="150" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="272" cy="220" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="330" cy="242" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="214" cy="264" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="502" cy="342" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="522" cy="364" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="40" cy="386" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="502" cy="464" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="330" cy="486" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="98" cy="508" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="272" cy="586" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="522" cy="608" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="156" cy="630" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="674" cy="708" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="694" cy="730" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="714" cy="752" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="542" cy="774" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="502" cy="88" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="522" cy="150" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="542" cy="242" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="674" cy="364" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="694" cy="486" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="714" cy="608" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="918" y="747" text-anchor="start">Out</text>
<text x="40" y="28" text-anchor="middle" font-size="16">In0</text>
<text x="98" y="28" text-anchor="middle" font-size="16">In1</text>
<text x="156" y="28" text-anchor="middle" font-size="16">In2</text>
<text x="214" y="28" text-anchor="middle" font-size="16">In3</text>
<text x="272" y="28" text-anchor="middle" font-size="16">Sel1</text>
<text x="330" y="28" text-anchor="middle" font-size="16">Sel0</text>
</g>
</svg>
</div>

### ตัวอย่างที่ 11  จงเขียน Full Adder 1 บิตแบบ Dataflow จากสมการ $\mathit{Sum} = A \oplus B \oplus Cin$ และ $\mathit{Cout} = AB + A\,Cin + B\,Cin$ และเขียนอีกแบบด้วยการต่อสัญญาณ (concatenation)

$\mathbf{Sol}^{n}$

- แปลงสมการเป็นนิพจน์ : $\oplus$ เป็น `^`, ผลคูณเป็น `&`, ผลบวกเป็น `|`
- แบบที่ 1 เขียนสองคำสั่ง `assign` (Sum และ Cout)
- แบบที่ 2 ใช้ผลบวกเลขฐานสอง : $A + B + Cin$ มีค่า $0$ ถึง $3$ ต้องใช้ 2 บิต บิตต่ำเป็น Sum บิตสูงเป็น Cout จึงรับด้วย `{Cout, Sum}`
- ตรวจตารางความจริงทั้ง 8 แถว ทั้งสองแบบได้ผลเหมือนกัน

$\mathbf{Ans}\quad \text{โค้ดทั้งสองแบบต่อไปนี้}$

```verilog
module FullAdd_DF (Sum, Cout, A, B, Cin);
output Sum, Cout;
input A, B, Cin;

assign Sum  = A ^ B ^ Cin;
assign Cout = (A & B) | (A & Cin) | (B & Cin);
endmodule
```

```verilog
module FullAdd_DF2 (Sum, Cout, A, B, Cin);
output Sum, Cout;
input A, B, Cin;

assign {Cout, Sum} = A + B + Cin;
endmodule
```

### ตัวอย่างที่ 12  โค้ด `assign Out = Sel ? In1 : In0;` ให้วงจรอะไร จงเขียนวงจรและตารางการทำงาน

```verilog
module Mux2to1 (Out, In0, In1, Sel);
output Out;
input In0, In1, Sel;

assign Out = Sel ? In1 : In0;
endmodule
```

$\mathbf{Sol}^{n}$

- ตัวกระทำ `?:` เลือกค่า : $Sel=1$ ได้ $In1$, $Sel=0$ ได้ $In0$
- เขียนเป็นสมการ $Out = Sel\,In1 + \overline{Sel}\,In0$
- วงจร : NOT 1 ตัว, AND 2 ตัว, OR 1 ตัว (มัลติเพลกซ์เซอร์ 2-to-1)

$\mathbf{Ans}\quad Out = Sel\,In1 + \overline{Sel}\,In0$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="745" height="444" viewBox="0 0 745 444" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<polygon points="223,76 223,100 245,88"/>
<circle cx="250" cy="88" r="5"/>
<line x1="138" y1="88" x2="223" y2="88"/>
<path d="M223,136 H249 A26,33 0 0 1 249,202 H223 Z"/>
<line x1="89" y1="158" x2="223" y2="158"/>
<line x1="138" y1="180" x2="223" y2="180"/>
<line x1="255" y1="88" x2="301" y2="88"/>
<line x1="275" y1="169" x2="321" y2="169"/>
<path d="M375,236 H401 A26,33 0 0 1 401,302 H375 Z"/>
<line x1="40" y1="258" x2="375" y2="258"/>
<line x1="301" y1="280" x2="375" y2="280"/>
<line x1="427" y1="269" x2="453" y2="269"/>
<path d="M507,336 C529,336 555,352.5 567,369 C555,385.5 529,402 507,402 Q521,369 507,336 Z"/>
<line x1="321" y1="358" x2="513.2" y2="358"/>
<line x1="453" y1="380" x2="513.2" y2="380"/>
<line x1="567" y1="369" x2="593" y2="369"/>
<line x1="593" y1="369" x2="649" y2="369"/>
<line x1="40" y1="36" x2="40" y2="258"/>
<line x1="89" y1="36" x2="89" y2="158"/>
<line x1="138" y1="36" x2="138" y2="180"/>
<line x1="301" y1="88" x2="301" y2="280"/>
<line x1="321" y1="169" x2="321" y2="358"/>
<line x1="453" y1="269" x2="453" y2="380"/>
<circle cx="138" cy="88" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="89" cy="158" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="138" cy="180" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="40" cy="258" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="301" cy="280" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="321" cy="358" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="453" cy="380" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="301" cy="88" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="321" cy="169" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="453" cy="269" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="657" y="375" text-anchor="start">Out</text>
<text x="40" y="28" text-anchor="middle" font-size="16">In0</text>
<text x="89" y="28" text-anchor="middle" font-size="16">In1</text>
<text x="138" y="28" text-anchor="middle" font-size="16">Sel</text>
</g>
</svg>
</div>

| $Sel$ | $Out$ |
|:-:|:-:|
| 0 | $In0$ |
| 1 | $In1$ |

## 4. การออกแบบเชิงพฤติกรรม (Behavioral)

### 4.1 ตัวแปร พารามิเตอร์ และบล็อกพฤติกรรม

Dataflow มีข้อจำกัดเพราะอธิบายการทำงานระดับต่ำ Behavioral อธิบายพฤติกรรมของวงจรในระดับสูงคล้ายภาษาซี (`if-else`, `case`, ลูป) ตัวสังเคราะห์วงจรเป็นผู้สร้างวงจรในระดับล่างให้

**รีจิสเตอร์ (Registers)** ใช้ `reg` เก็บค่าลอจิก (คล้ายฟลิป-ฟลอป แต่ไม่จำเป็นต้องมีสัญญาณนาฬิกา) ค่าเริ่มต้นเป็น `x` ; `integer` เป็นจำนวนเต็มมีเครื่องหมาย 32 บิต ; `time` 64 บิต ; `real` และ `realtime` จำนวนจริง

- เวกเตอร์ : `reg [7:0] Data;` (ความกว้าง 8 บิต)
- อาร์เรย์ (มีทั้งความกว้างและความลึก) : `reg [7:0] MyMem [3:0];` คือ 4 ตำแหน่ง ตำแหน่งละ 8 บิต อ้างถึงด้วย `MyMem[2]` ถ้าต้องการบิตของตำแหน่งนั้นให้อ่านค่าตำแหน่งนั้นใส่เวกเตอร์ชั่วคราวก่อน

**พารามิเตอร์ (Parameter)** ค่าคงที่ที่มีชื่อ แก้ค่าที่เดียวแล้วเปลี่ยนทั้งโปรแกรม เช่น `parameter BusSize = 8;` ใช้กำหนดขนาด `reg [BusSize-1:0] DataBus;` ค่าดีเลย์ หรือจำนวนรอบของลูป

**บล็อกพฤติกรรม (Behavioral blocks)** มี 2 ชนิด

- `initial` : ทำงานครั้งเดียวที่เวลาเริ่มต้น (time 0) ใช้กำหนดค่าเริ่มต้นของ `reg`
- `always` : เริ่มทำงานที่เวลา 0 แล้ววนซ้ำไม่สิ้นสุด ใช้อธิบายพฤติกรรมของวงจร
- ทุกบล็อกในโมดูลทำงานพร้อมกัน (ขนานกัน) รวมทั้ง `assign` ด้วย ภายในบล็อกที่มีหลายคำสั่งรวมด้วย `begin ... end` และคำสั่งทำงานเรียงลำดับ

**การกำหนดค่าตัวแปร (Procedural assignment)** ตัวแปรทางซ้ายต้องเป็น `reg` (`integer`, `time`, `real`) ไม่ใช่ net ไม่มีคำว่า `assign` และต้องอยู่ในบล็อก `initial` หรือ `always`

**เหตุการณ์ (Events) และ Sensitivity list** `@(...)` หลัง `always` ระบุสัญญาณที่ทำให้บล็อกทำงาน : `posedge CLK` ขอบขาขึ้น, `negedge CLK` ขอบขาลง, หรือชื่อสัญญาณ (ทุกการเปลี่ยนค่า) คั่นด้วย `or` ถ้าสัญญาณใดใน list เปลี่ยน บล็อกจะประมวลผล

```verilog
always @(posedge CLK)            // ทำงานทุกขอบขาขึ้นของ CLK
always @(A or B or C)            // ทำงานเมื่อ A, B หรือ C เปลี่ยน
always @(posedge CLK or posedge RST)
```

**เงื่อนไข `if-else`** ถ้าเงื่อนไขเป็น `x` หรือ `z` จะทำฝั่ง `else` ถ้ามีหลายคำสั่งต้องครอบด้วย `begin ... end`

**หลายทางเลือก `case`** แต่ละกรณีเป็นค่าที่เปรียบเทียบกับสัญญาณในวงเล็บ `default` คือกรณีที่ไม่ตรงกับกรณีใดเลย

- `case` : `x` และ `z` ในกรณีหมายถึงค่า Unknown และ High impedance ตามปกติ (ต้องตรงกันทุกบิต)
- `casex` : มอง `x` และ `z` เป็น Don't care ทั้งหมด
- `casez` : มอง `z` (และ `?`) เป็น Don't care

**ลูป** `forever` (ไม่สิ้นสุด), `repeat (n)` (n รอบ), `while (เงื่อนไข)` (ตรวจก่อนทำทุกรอบ) และ `for (เริ่มต้น; เงื่อนไข; ปรับค่า)` นิยมใช้มากที่สุด

### 4.2 การส่งผ่านค่าแบบ Blocking และ Non-blocking

- **Blocking** (`=`) : ทำทีละคำสั่งตามลำดับ และ **ปรับค่าตัวแปรทันที** คำสั่งถัดไปใช้ค่าใหม่
- **Non-blocking** (`<=`) : คำนวณค่าทางขวาของทุกคำสั่งก่อน แล้ว **ปรับค่าทุกตัวพร้อมกัน** หลังจบบล็อก คำสั่งถัดไปใช้ค่าเดิม เหมือนการส่งข้อมูลพร้อมกัน (Concurrent data transfer) ช่วยหลีกเลี่ยง Race condition

**กฎง่าย ๆ** ในบล็อก `always` ถ้าเป็นวงจรลำดับ (ใช้ขอบสัญญาณนาฬิกา สร้างฟลิป-ฟลอป) ให้ใช้ Non-blocking `<=` เสมอ ถ้าเป็นวงจรคอมบิเนชันใน `always` ให้ใช้ Blocking `=` (จริง ๆ นิยมเขียนวงจรคอมบิเนชันด้วย `assign` นอกบล็อก `always`)

### ตัวอย่างที่ 13  โค้ด Behavioral ของ mux_4_to_1 ต่อไปนี้ทำหน้าที่อะไร และสังเคราะห์เป็นวงจรอะไร

```verilog
module mux_4_to_1 (Out, In0, In1, In2, In3, Sel1, Sel0);
output Out;
input In0, In1, In2, In3, Sel0, Sel1;
reg Out;

always @(Sel1 or Sel0 or In0 or In1 or In2 or In3)
  begin
    case ({Sel1, Sel0})
      2'b00 : Out = In0;
      2'b01 : Out = In1;
      2'b10 : Out = In2;
      2'b11 : Out = In3;
      default : Out = 1'bx;
    endcase
  end
endmodule
```

$\mathbf{Sol}^{n}$

- `always @(Sel1 or Sel0 or In0 or ...)` : บล็อกทำงานทุกครั้งที่อินพุตตัวใดเปลี่ยน (วงจรคอมบิเนชัน) ใช้ `=`
- `case ({Sel1, Sel0})` : ต่อ $\mathit{Sel1}$ กับ $\mathit{Sel0}$ เป็นเลข 2 บิต แล้วเลือกกรณี : `2'b00` ได้ $In0$, `2'b01` ได้ $In1$, `2'b10` ได้ $In2$, `2'b11` ได้ $In3$
- `default` ไม่มีทางเกิดเพราะ $\mathit{Sel1}\mathit{Sel0}$ เป็น $0$ หรือ $1$ ทุกบิต
- `Out` ต้องประกาศเป็น `reg` เพราะถูกกำหนดค่าในบล็อก `always`
- จึงเป็นมัลติเพลกซ์เซอร์ 4-to-1 ตัวเดียวกับตัวอย่างก่อนหน้า (ตรวจ 64 แถวแล้ว)

$\mathbf{Ans}\quad \text{มัลติเพลกซ์เซอร์ 4-to-1 : } Out = In_{(2\,\mathit{Sel1} + \mathit{Sel0})}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="1006" height="838" viewBox="0 0 1006 838" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<polygon points="424,76 424,100 446,88"/>
<circle cx="451" cy="88" r="5"/>
<line x1="272" y1="88" x2="424" y2="88"/>
<polygon points="424,138 424,162 446,150"/>
<circle cx="451" cy="150" r="5"/>
<line x1="330" y1="150" x2="424" y2="150"/>
<path d="M424,198 H450 A26,44 0 0 1 450,286 H424 Z"/>
<line x1="272" y1="220" x2="424" y2="220"/>
<line x1="330" y1="242" x2="424" y2="242"/>
<line x1="214" y1="264" x2="424" y2="264"/>
<line x1="456" y1="88" x2="502" y2="88"/>
<line x1="456" y1="150" x2="522" y2="150"/>
<line x1="476" y1="242" x2="542" y2="242"/>
<path d="M596,320 H622 A26,44 0 0 1 622,408 H596 Z"/>
<line x1="502" y1="342" x2="596" y2="342"/>
<line x1="522" y1="364" x2="596" y2="364"/>
<line x1="40" y1="386" x2="596" y2="386"/>
<path d="M596,442 H622 A26,44 0 0 1 622,530 H596 Z"/>
<line x1="502" y1="464" x2="596" y2="464"/>
<line x1="330" y1="486" x2="596" y2="486"/>
<line x1="98" y1="508" x2="596" y2="508"/>
<path d="M596,564 H622 A26,44 0 0 1 622,652 H596 Z"/>
<line x1="272" y1="586" x2="596" y2="586"/>
<line x1="522" y1="608" x2="596" y2="608"/>
<line x1="156" y1="630" x2="596" y2="630"/>
<line x1="648" y1="364" x2="674" y2="364"/>
<line x1="648" y1="486" x2="694" y2="486"/>
<line x1="648" y1="608" x2="714" y2="608"/>
<path d="M768,686 C790,686 816,713.5 828,741 C816,768.5 790,796 768,796 Q782,741 768,686 Z"/>
<line x1="674" y1="708" x2="772.5" y2="708"/>
<line x1="694" y1="730" x2="774.7" y2="730"/>
<line x1="714" y1="752" x2="774.7" y2="752"/>
<line x1="542" y1="774" x2="772.5" y2="774"/>
<line x1="828" y1="741" x2="854" y2="741"/>
<line x1="854" y1="741" x2="910" y2="741"/>
<line x1="40" y1="36" x2="40" y2="386"/>
<line x1="98" y1="36" x2="98" y2="508"/>
<line x1="156" y1="36" x2="156" y2="630"/>
<line x1="214" y1="36" x2="214" y2="264"/>
<line x1="272" y1="36" x2="272" y2="586"/>
<line x1="330" y1="36" x2="330" y2="486"/>
<line x1="502" y1="88" x2="502" y2="464"/>
<line x1="522" y1="150" x2="522" y2="608"/>
<line x1="542" y1="242" x2="542" y2="774"/>
<line x1="674" y1="364" x2="674" y2="708"/>
<line x1="694" y1="486" x2="694" y2="730"/>
<line x1="714" y1="608" x2="714" y2="752"/>
<circle cx="272" cy="88" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="330" cy="150" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="272" cy="220" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="330" cy="242" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="214" cy="264" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="502" cy="342" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="522" cy="364" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="40" cy="386" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="502" cy="464" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="330" cy="486" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="98" cy="508" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="272" cy="586" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="522" cy="608" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="156" cy="630" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="674" cy="708" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="694" cy="730" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="714" cy="752" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="542" cy="774" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="502" cy="88" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="522" cy="150" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="542" cy="242" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="674" cy="364" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="694" cy="486" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="714" cy="608" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="918" y="747" text-anchor="start">Out</text>
<text x="40" y="28" text-anchor="middle" font-size="16">In0</text>
<text x="98" y="28" text-anchor="middle" font-size="16">In1</text>
<text x="156" y="28" text-anchor="middle" font-size="16">In2</text>
<text x="214" y="28" text-anchor="middle" font-size="16">In3</text>
<text x="272" y="28" text-anchor="middle" font-size="16">Sel1</text>
<text x="330" y="28" text-anchor="middle" font-size="16">Sel0</text>
</g>
</svg>
</div>

### ตัวอย่างที่ 14  โค้ดต่อไปนี้สร้างวงจรอะไร จงเขียนวงจรและหาค่า $Q$ เมื่อป้อน $(RST, D)$ แล้วให้ CLK ขึ้น ตามลำดับ $(1,1), (0,1), (0,0), (0,1), (0,1)$

```verilog
module DFF (Q, D, CLK, RST);
output Q;
reg Q;
input D, CLK, RST;

always @(posedge CLK or posedge RST)
  if (RST)
    Q <= 1'b0;
  else
    Q <= D;
endmodule
```

$\mathbf{Sol}^{n}$

- `always @(posedge CLK or posedge RST)` : บล็อกทำงานที่ขอบขาขึ้นของ CLK หรือขอบขาขึ้นของ RST (ใช้ `<=` เพราะเป็นวงจรลำดับ)
- `if (RST) Q <= 1'b0;` : เมื่อ $RST=1$ ล้าง $Q$ เป็น $0$ ทันที (อะซิงโครนัส ไม่ต้องรอ CLK)
- `else Q <= D;` : ไม่เช่นนั้นที่ขอบขาขึ้นของ CLK $Q$ รับค่า $D$
- จึงเป็น D flip-flop ทำงานที่ขอบขาขึ้น มีขา Reset อะซิงโครนัส

- ครั้งที่ 1 : $RST=1$ $\Rightarrow Q=0$ (ล้าง)
- ครั้งที่ 2 : $RST=0$, $D=1$ $\Rightarrow Q=1$
- ครั้งที่ 3 : $D=0$ $\Rightarrow Q=0$
- ครั้งที่ 4 : $D=1$ $\Rightarrow Q=1$
- ครั้งที่ 5 : $D=1$ $\Rightarrow Q=1$

$\mathbf{Ans}\quad Q = 0,\ 1,\ 0,\ 1,\ 1$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="310" height="190" viewBox="0 0 310 190" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(30,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<rect x="120" y="30" width="80" height="100" rx="2"/>
<line x1="90" y1="58" x2="120" y2="58"/>
<line x1="90" y1="102" x2="120" y2="102"/>
<polyline points="120,93 132,102 120,111"/>
<line x1="200" y1="58" x2="230" y2="58"/>
<line x1="160" y1="130" x2="160" y2="156"/>
<line x1="160" y1="130" x2="160" y2="156"/>
<circle cx="160" cy="134" r="0"/>
</g>
<text x="128" y="64" text-anchor="start" font-size="16">D</text>
<text x="192" y="64" text-anchor="end" font-size="16">Q</text>
<text x="160" y="122" text-anchor="middle" font-size="13">R</text>
<text x="86" y="64" text-anchor="end">D</text>
<text x="86" y="108" text-anchor="end">CLK</text>
<text x="236" y="64" text-anchor="start">Q</text>
<text x="160" y="174" text-anchor="middle">RST</text>
</g>
</svg>
</div>

| ครั้งที่ | $RST$ | $D$ | $Q$ หลัง CLK ขึ้น |
|:-:|:-:|:-:|:-:|
| 1 | 1 | 1 | 0 |
| 2 | 0 | 1 | 1 |
| 3 | 0 | 0 | 0 |
| 4 | 0 | 1 | 1 |
| 5 | 0 | 1 | 1 |

### ตัวอย่างที่ 15  โมดูล blocking และ nonblocking ต่อไปนี้ต่างกันอย่างไร จงเขียนวงจรของแต่ละโมดูล และหา q1, q2, out หลัง CLK ขึ้นแต่ละครั้ง เมื่อ in = 1, 0, 1, 1, 0, 0 (เริ่มต้นเป็น 0 ทั้งหมด)

```verilog
module blocking (in, clk, out);
input in, clk;
output out;
reg q1, q2, out;

always @(posedge clk)
  begin
    q1 = in;
    q2 = q1;
    out = q2;
  end
endmodule
```

```verilog
module nonblocking (in, clk, out);
input in, clk;
output out;
reg q1, q2, out;

always @(posedge clk)
  begin
    q1 <= in;
    q2 <= q1;
    out <= q2;
  end
endmodule
```

$\mathbf{Sol}^{n}$

**Blocking `=`** : ที่ขอบ CLK ทุกคำสั่งทำตามลำดับ และปรับค่าทันที `q1 = in;` แล้ว `q2 = q1;` ได้ $q2 = in$ แล้ว `out = q2;` ได้ $out = in$ ตัวแปรทั้งสามมีค่าเท่ากับ in ทุกครั้ง สังเคราะห์เป็น D flip-flop เพียงตัวเดียว (ในรูป $q1, q2, out$ คือสายเดียวกัน)

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="590" height="160" viewBox="0 0 590 160" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(30,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<rect x="120" y="30" width="80" height="100" rx="2"/>
<line x1="90" y1="58" x2="120" y2="58"/>
<line x1="90" y1="102" x2="120" y2="102"/>
<polyline points="120,93 132,102 120,111"/>
<line x1="200" y1="58" x2="230" y2="58"/>
<line x1="230" y1="58" x2="430" y2="58"/>
<circle cx="270" cy="58" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="340" cy="58" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="410" cy="58" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="128" y="64" text-anchor="start" font-size="16">D</text>
<text x="192" y="64" text-anchor="end" font-size="16">Q</text>
<text x="86" y="64" text-anchor="end">in</text>
<text x="86" y="108" text-anchor="end">clk</text>
<text x="270" y="44" text-anchor="middle" font-size="15">q1</text>
<text x="340" y="44" text-anchor="middle" font-size="15">q2</text>
<text x="410" y="44" text-anchor="middle" font-size="15">out</text>
<text x="444" y="64" text-anchor="start">out</text>
</g>
</svg>
</div>

**Non-blocking `<=`** : คำนวณทางขวาด้วยค่าเดิมก่อนทั้งหมด แล้วปรับค่าพร้อมกัน $q1 \leftarrow in$, $q2 \leftarrow q1$ (ค่าเก่า), $out \leftarrow q2$ (ค่าเก่า) แต่ละตัวช้ากว่าตัวก่อนหน้า 1 พัลส์ สังเคราะห์เป็นชิฟต์รีจิสเตอร์ D flip-flop 3 ตัว

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="660" height="190" viewBox="0 0 660 190" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(30,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<rect x="100" y="30" width="80" height="100" rx="2"/>
<line x1="70" y1="58" x2="100" y2="58"/>
<line x1="70" y1="102" x2="100" y2="102"/>
<polyline points="100,93 112,102 100,111"/>
<line x1="180" y1="58" x2="210" y2="58"/>
<rect x="270" y="30" width="80" height="100" rx="2"/>
<line x1="240" y1="58" x2="270" y2="58"/>
<line x1="240" y1="102" x2="270" y2="102"/>
<polyline points="270,93 282,102 270,111"/>
<line x1="350" y1="58" x2="380" y2="58"/>
<line x1="210" y1="58" x2="240" y2="58"/>
<rect x="440" y="30" width="80" height="100" rx="2"/>
<line x1="410" y1="58" x2="440" y2="58"/>
<line x1="410" y1="102" x2="440" y2="102"/>
<polyline points="440,93 452,102 440,111"/>
<line x1="520" y1="58" x2="550" y2="58"/>
<line x1="380" y1="58" x2="410" y2="58"/>
<line x1="40" y1="102" x2="70" y2="102"/>
<line x1="60" y1="102" x2="60" y2="170"/>
<line x1="60" y1="170" x2="400" y2="170"/>
<line x1="60" y1="170" x2="60" y2="102"/>
<line x1="60" y1="102" x2="70" y2="102"/>
<line x1="230" y1="170" x2="230" y2="102"/>
<line x1="230" y1="102" x2="240" y2="102"/>
<line x1="400" y1="170" x2="400" y2="102"/>
<line x1="400" y1="102" x2="410" y2="102"/>
<line x1="550" y1="58" x2="570" y2="58"/>
<circle cx="60" cy="170" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="230" cy="170" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="400" cy="170" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="108" y="64" text-anchor="start" font-size="16">D</text>
<text x="172" y="64" text-anchor="end" font-size="16">Q</text>
<text x="66" y="64" text-anchor="end">in</text>
<text x="196" y="44" text-anchor="middle" font-size="15">q1</text>
<text x="278" y="64" text-anchor="start" font-size="16">D</text>
<text x="342" y="64" text-anchor="end" font-size="16">Q</text>
<text x="366" y="44" text-anchor="middle" font-size="15">q2</text>
<text x="448" y="64" text-anchor="start" font-size="16">D</text>
<text x="512" y="64" text-anchor="end" font-size="16">Q</text>
<text x="536" y="44" text-anchor="middle" font-size="15">out</text>
<text x="36" y="108" text-anchor="end">clk</text>
<text x="576" y="64" text-anchor="start">out</text>
</g>
</svg>
</div>

$\mathbf{Ans}\quad \text{blocking: } q1=q2=out=in \text{ ; nonblocking: ชิฟต์รีจิสเตอร์ ค่าเลื่อนทีละ 1 พัลส์}$

| พัลส์ | $in$ | blocking : $q1$ | $q2$ | $out$ | nonblocking : $q1$ | $q2$ | $out$ |
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| 1 | 1 | 1 | 1 | 1 | 1 | 0 | 0 |
| 2 | 0 | 0 | 0 | 0 | 0 | 1 | 0 |
| 3 | 1 | 1 | 1 | 1 | 1 | 0 | 1 |
| 4 | 1 | 1 | 1 | 1 | 1 | 1 | 0 |
| 5 | 0 | 0 | 0 | 0 | 0 | 1 | 1 |
| 6 | 0 | 0 | 0 | 0 | 0 | 0 | 1 |

### ตัวอย่างที่ 16  โมดูลคอมบิเนชันต่อไปนี้ เริ่มต้นที่ $a=1, b=1, c=0, x=1, y=1$ เมื่อ $a$ เปลี่ยนเป็น $0$ จะได้ $x, y$ เท่าใด เมื่อใช้ Blocking และเมื่อใช้ Non-blocking

```verilog
module blocking (a, b, c, x, y);
input a, b, c;
output x, y;
reg x, y;

always @(a or b or c)
  begin
    x = a & b;
    y = x | c;
  end
endmodule
```

$\mathbf{Sol}^{n}$

$a$ เปลี่ยนจึงทำให้บล็อกทำงาน ค่าก่อนทำงาน $a=0, b=1, c=0, x=1, y=1$

- **Blocking** : `x = a & b;` ได้ $x = 0\cdot1 = 0$ ปรับทันที แล้ว `y = x | c;` ใช้ $x=0$ ใหม่ ได้ $y = 0 + 0 = 0$
- **Non-blocking** (`x <= a & b;` และ `y <= x | c;`) : คำนวณทั้งสองบรรทัดด้วยค่าเดิมก่อน ได้ $x \leftarrow 0$ และ $y \leftarrow x_{เดิม} + c = 1 + 0 = 1$ แล้วจึงปรับค่าพร้อมกัน

$\mathbf{Ans}\quad \text{Blocking: } x=0,\ y=0 \text{ ; Non-blocking: } x=0,\ y=1$

| วิธี | $a$ | $b$ | $c$ | $x$ | $y$ |
|:-:|:-:|:-:|:-:|:-:|:-:|
| เริ่มต้น | 1 | 1 | 0 | 1 | 1 |
| Blocking | 0 | 1 | 0 | 0 | 0 |
| Non-blocking | 0 | 1 | 0 | 0 | 1 |

ในวงจรคอมบิเนชัน Non-blocking ทำให้ $y$ ใช้ค่า $x$ เก่า ได้ผลต่างจากวงจรจริง จึงใช้ Blocking `=` ในบล็อกคอมบิเนชัน

### ตัวอย่างที่ 17  โมดูล ShiftReg 8 บิตต่อไปนี้ (Size = 8) เริ่มต้น Outs = 0 จงหา Outs หลัง Clk ขึ้นแต่ละครั้ง เมื่อสัญญาณเข้าเป็นดังตาราง

```verilog
module ShiftReg (Outs, Ins, Clk, Clr, Set, Shr, Shl);
parameter Size = 8;
parameter MSB = Size - 1;
output [MSB:0] Outs;
reg [MSB:0] Outs;
input [MSB:0] Ins;
input Clk, Clr, Set, Shl, Shr;

initial
  Outs = 0;

always @(posedge Clk)
  if (Clr == 1) Outs = 0;
  else if (Set == 1) Outs = {Size{1'b1}};
    else if (Shl == 1) Outs = Outs << 1;
      else if (Shr == 1) Outs = Outs >> 1;
        else Outs = Ins;
endmodule
```

$\mathbf{Sol}^{n}$

- `parameter Size = 8; MSB = Size - 1;` : เวกเตอร์ `[7:0]` ; `initial Outs = 0;` เริ่มต้น $00000000$
- ที่ขอบขาขึ้น เช็กเงื่อนไขตามลำดับความสำคัญ : $Clr$ ก่อน (ล้างเป็น 0), ถ้าไม่ใช่ $Set$ (`{Size{1'b1}}` คือ 8 บิตเป็น 1 หมด), ถ้าไม่ใช่ $Shl$ (`Outs << 1` ชิฟต์ซ้าย), ถ้าไม่ใช่ $Shr$ (`Outs >> 1` ชิฟต์ขวา) ไม่เช่นนั้นโหลด `Ins`
- ครั้งที่ 1 : ไม่มีสัญญาณใดเป็น 1 โหลด $\mathit{Ins} = 10110010$
- ครั้งที่ 2 : $Shl=1$ ชิฟต์ซ้าย $10110010 \to 01100100$ (บิตสูงสุดหลุด เติม 0 ทางขวา)
- ครั้งที่ 3 : ชิฟต์ซ้ายอีก $01100100 \to 11001000$
- ครั้งที่ 4 : $Shr=1$ ชิฟต์ขวา $11001000 \to 01100100$
- ครั้งที่ 5 : $Set=1$ ได้ $11111111$
- ครั้งที่ 6 : $Clr=1$ ได้ $00000000$

$\mathbf{Ans}\quad \mathit{Outs} = 10110010,\ 01100100,\ 11001000,\ 01100100,\ 11111111,\ 00000000$

| ครั้งที่ | $\mathit{Ins}$ | $Clr$ | $Set$ | $Shl$ | $Shr$ | $\mathit{Outs}$ |
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| 1 | 10110010 | 0 | 0 | 0 | 0 | 10110010 |
| 2 | 00000000 | 0 | 0 | 1 | 0 | 01100100 |
| 3 | 00000000 | 0 | 0 | 1 | 0 | 11001000 |
| 4 | 00000000 | 0 | 0 | 0 | 1 | 01100100 |
| 5 | 00000000 | 0 | 1 | 0 | 0 | 11111111 |
| 6 | 00000000 | 1 | 0 | 0 | 0 | 00000000 |

### ตัวอย่างที่ 18  ShiftReg เวอร์ชันต่อไปนี้ใช้ `case` กับ `4'b1xxx` ... จะทำงานเหมือนเวอร์ชัน if-else ในตัวอย่างที่ 17 หรือไม่ ถ้าไม่ต้องแก้อย่างไร

```verilog
always @(posedge Clk)
  case ({Clr, Set, Shl, Shr})
    4'b1xxx : Outs = 0;
    4'bx1xx : Outs = {Size{1'b1}};
    4'bxx1x : Outs = Outs << 1;
    4'bxxx1 : Outs = Outs >> 1;
    default   Outs = Ins;
  endcase
endmodule
```

$\mathbf{Sol}^{n}$

- ในคำสั่ง `case` ธรรมดา บิต `x` ในกรณี (เช่น `4'b1xxx`) หมายถึงค่า Unknown จริง ๆ ต้องตรงกับสัญญาณที่เป็น `x` เท่านั้น ไม่ได้แปลว่า "อะไรก็ได้"
- สัญญาณ $Clr, Set, Shl, Shr$ เป็น `0` หรือ `1` เสมอ จึงไม่ตรงกับกรณี `4'b1xxx`, `4'bx1xx`, `4'bxx1x`, `4'bxxx1` เลย ทุกครั้งจึงทำ `default` คือ `Outs = Ins`
- เมื่อป้อนสัญญาณเดียวกับตัวอย่างที่ 17 ได้ $\mathit{Outs} = 10110010, 00000000, 00000000, \dots$ (โหลด $\mathit{Ins}$ ทุกครั้ง) ไม่ทำงานเหมือนเดิม
- แก้ด้วย `casex` ซึ่งมอง `x` เป็น Don't care ทำให้กรณี `4'b1xxx` หมายถึง $Clr = 1$ ไม่ว่าบิตอื่นเป็นอะไร ลำดับความสำคัญเรียงตามกรณีที่เขียนก่อน

$\mathbf{Ans}\quad \text{ไม่เหมือน : ต้องใช้ casex}$

```verilog
always @(posedge Clk)
  casex ({Clr, Set, Shl, Shr})
    4'b1xxx : Outs = 0;
    4'bx1xx : Outs = {Size{1'b1}};
    4'bxx1x : Outs = Outs << 1;
    4'bxxx1 : Outs = Outs >> 1;
    default   Outs = Ins;
  endcase
endmodule
```

| ครั้งที่ | `case` | `casex` (เหมือน if-else) |
|:-:|:-:|:-:|
| 1 | 10110010 | 10110010 |
| 2 | 00000000 | 01100100 |
| 3 | 00000000 | 11001000 |
| 4 | 00000000 | 01100100 |
| 5 | 00000000 | 11111111 |
| 6 | 00000000 | 00000000 |

### ตัวอย่างที่ 19  โมดูล RCAdd (บวกเลข 4 บิตด้วย for-loop) ต่อไปนี้ เมื่อ A = 0101 และ B = 0111 จะได้ Sum เท่าใด จงแสดงค่า C และ Sum แต่ละรอบ

```verilog
module RCAdd (Sum, A, B);
output [3:0] Sum;
reg [3:0] Sum;
input [3:0] A, B;
reg C;
integer I;

always @(A or B)
  begin
    C = 0;
    for (I = 0; I <= 3; I = I + 1)
      begin
        Sum[I] = A[I] ^ B[I] ^ C;
        C = A[I] & B[I] | A[I] & C | B[I] & C;
      end
  end
endmodule
```

$\mathbf{Sol}^{n}$

- `always @(A or B)` : คำนวณใหม่เมื่อ A หรือ B เปลี่ยน ใช้ Blocking `=` (วงจรคอมบิเนชัน) ลูป `for (I = 0; I <= 3; ...)` ทำ 4 รอบ ($I=0,1,2,3$) แต่ละรอบเป็น Full Adder 1 บิต : `Sum[I] = A[I] ^ B[I] ^ C;` และ `C = A[I] & B[I] | A[I] & C | B[I] & C;` ($C$ คือตัวทดที่ส่งไปรอบถัดไป เริ่มที่ 0)
- ผลเป็นวงจรบวกแบบ Ripple-carry 4 บิต
- ตาราง : ค่า $C$ ก่อนรอบ, บิต $\mathit{Sum}[I]$ และ $C$ หลังรอบ
- ตรวจ : $0101 + 0111 = 5 + 7 = 12 = 1100$

$\mathbf{Ans}\quad \mathit{Sum} = 1100$

| $I$ | $A[I]$ | $B[I]$ | $C$ ก่อน | $\mathit{Sum}[I]$ | $C$ หลัง |
|:-:|:-:|:-:|:-:|:-:|:-:|
| 0 | 1 | 1 | 0 | 0 | 1 |
| 1 | 0 | 1 | 1 | 0 | 1 |
| 2 | 1 | 1 | 1 | 1 | 1 |
| 3 | 0 | 0 | 1 | 1 | 0 |

ถ้าต้องการบวก 8 บิตให้เปลี่ยน `I <= 3` เป็น `I <= 7` และขนาดเวกเตอร์เป็น `[7:0]`

### ตัวอย่างที่ 20  จงเขียนโมดูล Behavioral ของ JK flip-flop ที่ทำงานที่ขอบขาขึ้น โดยใช้ case ของ {J, K} และตรวจว่าตรงกับสมการ $Q(t+1) = J\overline{Q} + \overline{K}Q$

$\mathbf{Sol}^{n}$

- `always @(posedge CLK)` : เปลี่ยนค่าที่ขอบขาขึ้น ใช้ Non-blocking `<=` (วงจรลำดับ)
- ต่อ $J$ กับ $K$ เป็นเลข 2 บิต `{J, K}` แล้วเขียนทีละกรณีตามตารางการทำงานของ JK : `00` คงเดิม `Q <= Q;`, `01` Reset `Q <= 1'b0;`, `10` Set `Q <= 1'b1;`, `11` สลับ `Q <= ~Q;`
- ประกาศ `Q` เป็น `reg` เพราะถูกกำหนดค่าใน `always`
- ตรวจทุกกรณี $(J,K,Q)$ ทั้ง 8 แบบ ได้ตรงกับ $Q(t+1) = J\overline{Q} + \overline{K}Q$

$\mathbf{Ans}\quad \text{โค้ดต่อไปนี้}$

```verilog
module JK_FF (Q, J, K, CLK);
output Q;
reg Q;
input J, K, CLK;

always @(posedge CLK)
  case ({J, K})
    2'b00 : Q <= Q;
    2'b01 : Q <= 1'b0;
    2'b10 : Q <= 1'b1;
    2'b11 : Q <= ~Q;
  endcase
endmodule
```

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="324" height="150" viewBox="0 0 324 150" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(24,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<rect x="110" y="20" width="90" height="110" rx="2"/>
<line x1="80" y1="48" x2="110" y2="48"/>
<line x1="80" y1="102" x2="110" y2="102"/>
<line x1="80" y1="75" x2="110" y2="75"/>
<polyline points="110,66 122,75 110,84"/>
<line x1="200" y1="48" x2="230" y2="48"/>
</g>
<text x="118" y="54" text-anchor="start" font-size="16">J</text>
<text x="76" y="54" text-anchor="end" font-size="16">J</text>
<text x="118" y="108" text-anchor="start" font-size="16">K</text>
<text x="76" y="108" text-anchor="end" font-size="16">K</text>
<text x="76" y="81" text-anchor="end" font-size="16">clk</text>
<text x="192" y="54" text-anchor="end" font-size="16">Q</text>
<text x="236" y="54" text-anchor="start" font-size="16">Q</text>
</g>
</svg>
</div>

| $J$ | $K$ | $Q(t+1)$ เมื่อ $Q=0$ | $Q(t+1)$ เมื่อ $Q=1$ |
|:-:|:-:|:-:|:-:|
| 0 | 0 | 0 | 1 |
| 0 | 1 | 0 | 0 |
| 1 | 0 | 1 | 1 |
| 1 | 1 | 1 | 0 |

### ตัวอย่างที่ 21  โค้ดต่อไปนี้สร้างวงจรอะไร จงเขียนวงจร (D flip-flop และเกต) และหาลำดับค่า Q เมื่อ CLK ขึ้น 5 ครั้ง

```verilog
module Counter2 (Q, CLK);
output [1:0] Q;
reg [1:0] Q;
input CLK;
initial Q = 0;

always @(posedge CLK)
  Q <= Q + 1;
endmodule
```

$\mathbf{Sol}^{n}$

- `Q` เป็นเวกเตอร์ 2 บิต `initial Q = 0;` เริ่มที่ $00$ ; `always @(posedge CLK)` ใช้ `<=` เป็นวงจรลำดับ ที่ขอบขาขึ้น $Q$ ได้ $Q + 1$
- บวก 1 ที่ 2 บิต : บิตต่ำ $Q_0^+ = \overline{Q_0}$ (สลับทุกพัลส์), บิตสูง $Q_1^+ = Q_1 \oplus Q_0$ (สลับเมื่อ $Q_0=1$)
- ใช้ D flip-flop 2 ตัว : $D_0 = \overline{Q_0}$ และ $D_1 = Q_1 \oplus Q_0$ (ตรงกับตารางกระตุ้นของ D ในบทที่ 7 และการออกแบบในบทที่ 8)
- ลำดับ : $00 \to 01 \to 10 \to 11 \to 00$ (นับขึ้นโมดูโล 4 และวนซ้ำเพราะ $Q$ มี 2 บิต)

$\mathbf{Ans}\quad Q = 01,\ 10,\ 11,\ 00,\ 01 \text{ ; } D_0 = \overline{Q_0},\ D_1 = Q_1 \oplus Q_0$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="639" height="334" viewBox="0 0 639 334" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<rect x="224" y="96" width="80" height="150" rx="2"/>
<polyline points="224,192 236,201 224,210"/>
<line x1="224" y1="201" x2="208" y2="201"/>
<line x1="208" y1="201" x2="208" y2="310"/>
<path d="M134,113 C156,113 182,123.5 194,134 C182,144.5 156,155 134,155 Q148,134 134,113 Z"/>
<path d="M126,113 Q140,134 126,155"/>
<line x1="194" y1="134" x2="224" y2="134"/>
<line x1="304" y1="134" x2="340" y2="134"/>
<line x1="304" y1="208" x2="340" y2="208"/>
<line x1="287.2" y1="200.4" x2="296" y2="200.4" stroke-width="1.4"/>
<rect x="483" y="96" width="80" height="150" rx="2"/>
<polyline points="483,192 495,201 483,210"/>
<line x1="483" y1="201" x2="467" y2="201"/>
<line x1="467" y1="201" x2="467" y2="310"/>
<line x1="563" y1="134" x2="599" y2="134"/>
<line x1="563" y1="208" x2="599" y2="208"/>
<line x1="546.2" y1="200.4" x2="555" y2="200.4" stroke-width="1.4"/>
<line x1="120.2" y1="64" x2="120.2" y2="127"/>
<line x1="120.2" y1="127" x2="132.2" y2="127"/>
<line x1="109.2" y1="46" x2="109.2" y2="141"/>
<line x1="109.2" y1="141" x2="132.2" y2="141"/>
<line x1="460" y1="268" x2="460" y2="134"/>
<line x1="460" y1="134" x2="483" y2="134"/>
<line x1="109.2" y1="46" x2="599" y2="46"/>
<line x1="120.2" y1="64" x2="340" y2="64"/>
<line x1="460" y1="268" x2="599" y2="268"/>
<line x1="340" y1="30" x2="340" y2="134"/>
<line x1="599" y1="30" x2="599" y2="134"/>
<line x1="599" y1="208" x2="599" y2="268"/>
<line x1="168" y1="310" x2="467" y2="310"/>
<circle cx="208" cy="310" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="467" cy="310" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="599" cy="46" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="340" cy="64" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="599" cy="268" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="264" y="179" text-anchor="middle" font-size="26">1</text>
<text x="232" y="140" text-anchor="start" font-size="14">D</text>
<text x="296" y="140" text-anchor="end" font-size="16">Q</text>
<text x="296" y="214" text-anchor="end" font-size="16">Q</text>
<text x="523" y="179" text-anchor="middle" font-size="26">0</text>
<text x="491" y="140" text-anchor="start" font-size="14">D</text>
<text x="555" y="140" text-anchor="end" font-size="16">Q</text>
<text x="555" y="214" text-anchor="end" font-size="16">Q</text>
<text x="340" y="24" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="10">1</tspan></text>
<text x="599" y="24" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="10">0</tspan></text>
<text x="164" y="316" text-anchor="end" font-size="16">Clock</text>
</g>
</svg>
</div>

| ครั้งที่ CLK ขึ้น | $Q_1Q_0$ |
|:-:|:-:|
| 0 | 00 |
| 1 | 01 |
| 2 | 10 |
| 3 | 11 |
| 4 | 00 |
| 5 | 01 |

### ตัวอย่างที่ 22  จากวงจรถอดรหัส 2-to-4 ในรูป จงเขียนโมดูล Verilog แบบ Dataflow และแบบ Behavioral

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="580" height="606" viewBox="0 0 580 606" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<polygon points="138,76 138,100 160,88"/>
<circle cx="165" cy="88" r="5"/>
<line x1="40" y1="88" x2="138" y2="88"/>
<polygon points="138,138 138,162 160,150"/>
<circle cx="165" cy="150" r="5"/>
<line x1="71" y1="150" x2="138" y2="150"/>
<path d="M138,198 H164 A26,33 0 0 1 164,264 H138 Z"/>
<line x1="40" y1="220" x2="138" y2="220"/>
<line x1="71" y1="242" x2="138" y2="242"/>
<line x1="170" y1="88" x2="216" y2="88"/>
<line x1="170" y1="150" x2="236" y2="150"/>
<line x1="190" y1="231" x2="256" y2="231"/>
<path d="M310,298 H336 A26,33 0 0 1 336,364 H310 Z"/>
<line x1="216" y1="320" x2="310" y2="320"/>
<line x1="236" y1="342" x2="310" y2="342"/>
<path d="M310,398 H336 A26,33 0 0 1 336,464 H310 Z"/>
<line x1="216" y1="420" x2="310" y2="420"/>
<line x1="71" y1="442" x2="310" y2="442"/>
<path d="M310,498 H336 A26,33 0 0 1 336,564 H310 Z"/>
<line x1="40" y1="520" x2="310" y2="520"/>
<line x1="236" y1="542" x2="310" y2="542"/>
<line x1="362" y1="331" x2="388" y2="331"/>
<line x1="362" y1="431" x2="408" y2="431"/>
<line x1="362" y1="531" x2="428" y2="531"/>
<line x1="256" y1="231" x2="484" y2="231"/>
<line x1="388" y1="331" x2="484" y2="331"/>
<line x1="408" y1="431" x2="484" y2="431"/>
<line x1="428" y1="531" x2="484" y2="531"/>
<line x1="40" y1="36" x2="40" y2="520"/>
<line x1="71" y1="36" x2="71" y2="442"/>
<line x1="216" y1="88" x2="216" y2="420"/>
<line x1="236" y1="150" x2="236" y2="542"/>
<circle cx="40" cy="88" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="150" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="40" cy="220" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="242" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="216" cy="320" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="236" cy="342" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="216" cy="420" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="71" cy="442" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="40" cy="520" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="236" cy="542" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="216" cy="88" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="236" cy="150" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="492" y="237" text-anchor="start">Y<tspan dy="4" font-size="12">3</tspan></text>
<text x="492" y="337" text-anchor="start">Y<tspan dy="4" font-size="12">0</tspan></text>
<text x="492" y="437" text-anchor="start">Y<tspan dy="4" font-size="12">1</tspan></text>
<text x="492" y="537" text-anchor="start">Y<tspan dy="4" font-size="12">2</tspan></text>
<text x="40" y="28" text-anchor="middle" font-size="16">A</text>
<text x="71" y="28" text-anchor="middle" font-size="16">B</text>
</g>
</svg>
</div>

$\mathbf{Sol}^{n}$

- เอาต์พุตแต่ละตัวเป็น AND ของ $A, B$ ที่กลับ (NOT) ตามรหัสของมัน : $Y0 = \overline{A}\,\overline{B}$, $Y1 = \overline{A}B$, $Y2 = A\overline{B}$, $Y3 = AB$
- **Dataflow** : เขียน `assign` ทีละเอาต์พุต โดย `~` แทน NOT และ `&` แทน AND
- **Behavioral** : รวมเอาต์พุตเป็นเวกเตอร์ `[3:0] Y` (ประกาศ `reg`) ใช้ `case ({A, B})` เลือกกรณี ($AB=00,01,10,11$) กำหนดให้บิตที่ตรงเป็น 1 : `4'b0001`, `4'b0010`, `4'b0100`, `4'b1000`
- ตรวจตารางความจริงทั้ง 4 แถวของทั้งสองแบบ ได้ตรงกัน

$\mathbf{Ans}\quad \text{โค้ดทั้งสองแบบต่อไปนี้}$

```verilog
module Dec2to4 (Y0, Y1, Y2, Y3, A, B);
output Y0, Y1, Y2, Y3;
input A, B;

assign Y0 = ~A & ~B;
assign Y1 = ~A & B;
assign Y2 = A & ~B;
assign Y3 = A & B;
endmodule
```

```verilog
module Dec2to4B (Y, A, B);
output [3:0] Y;
reg [3:0] Y;
input A, B;

always @(A or B)
  case ({A, B})
    2'b00 : Y = 4'b0001;
    2'b01 : Y = 4'b0010;
    2'b10 : Y = 4'b0100;
    2'b11 : Y = 4'b1000;
  endcase
endmodule
```

| $A$ | $B$ | $Y0$ | $Y1$ | $Y2$ | $Y3$ |
|:-:|:-:|:-:|:-:|:-:|:-:|
| 0 | 0 | 1 | 0 | 0 | 0 |
| 0 | 1 | 0 | 1 | 0 | 0 |
| 1 | 0 | 0 | 0 | 1 | 0 |
| 1 | 1 | 0 | 0 | 0 | 1 |

### ตัวอย่างที่ 23  จงเขียนโมดูล Verilog ของ T flip-flop ที่ทำงานที่ขอบขาขึ้นของ CLK มีสัญญาณ Reset แบบอะซิงโครนัส (RST=1 ล้าง Q เป็น 0) และสลับ Q เมื่อ T=1

$\mathbf{Sol}^{n}$

- สัญญาณที่เปลี่ยนค่าของ $Q$ คือ `posedge CLK` และ `posedge RST` จึงเขียน `always @(posedge CLK or posedge RST)` ใช้ `<=` เพราะเป็นวงจรลำดับ
- ตรวจ `RST` ก่อน เพราะมีสิทธิ์เหนือกว่า : `if (RST) Q <= 1'b0;`
- ไม่เช่นนั้นถ้า $T=1$ สลับ : `else if (T) Q <= ~Q;` ถ้า $T=0$ ไม่มีคำสั่งใดทำ $Q$ จึงคงค่าเดิม
- วงจรคือ D flip-flop ที่ $D = T \oplus Q$ (ตรงกับ $Q(t+1) = \overline{T}Q + T\overline{Q}$ ของ T flip-flop)
- ทดสอบ : เริ่มที่ $Q=0$ ป้อน $T = 1,1,0,1,0,1$ ที่แต่ละขอบ ได้ $Q = 1, 0, 0, 1, 1, 0$

$\mathbf{Ans}\quad \text{โค้ดต่อไปนี้}$

```verilog
module T_FF (Q, T, CLK, RST);
output Q;
reg Q;
input T, CLK, RST;

always @(posedge CLK or posedge RST)
  if (RST)
    Q <= 1'b0;
  else if (T)
    Q <= ~Q;
endmodule
```

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="424" height="316" viewBox="0 0 424 316" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g transform="translate(0,0)">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<rect x="268" y="96" width="80" height="150" rx="2"/>
<polyline points="268,192 280,201 268,210"/>
<line x1="268" y1="201" x2="252" y2="201"/>
<line x1="252" y1="201" x2="252" y2="292"/>
<path d="M178,113 C200,113 226,123.5 238,134 C226,144.5 200,155 178,155 Q192,134 178,113 Z"/>
<path d="M170,113 Q184,134 170,155"/>
<line x1="238" y1="134" x2="268" y2="134"/>
<line x1="348" y1="134" x2="384" y2="134"/>
<line x1="348" y1="208" x2="384" y2="208"/>
<line x1="331.2" y1="200.4" x2="340" y2="200.4" stroke-width="1.4"/>
<line x1="164.2" y1="64" x2="164.2" y2="127"/>
<line x1="164.2" y1="127" x2="176.2" y2="127"/>
<line x1="153.2" y1="46" x2="153.2" y2="141"/>
<line x1="153.2" y1="141" x2="176.2" y2="141"/>
<line x1="153.2" y1="46" x2="384" y2="46"/>
<line x1="34" y1="64" x2="164.2" y2="64"/>
<line x1="34" y1="30" x2="34" y2="64"/>
<line x1="384" y1="30" x2="384" y2="134"/>
<line x1="212" y1="292" x2="252" y2="292"/>
<circle cx="252" cy="292" r="3.5" fill="currentColor" stroke="none"/>
<circle cx="384" cy="46" r="3.5" fill="currentColor" stroke="none"/>
</g>
<text x="308" y="179" text-anchor="middle" font-size="26">A</text>
<text x="276" y="140" text-anchor="start" font-size="14">D</text>
<text x="340" y="140" text-anchor="end" font-size="16">Q</text>
<text x="340" y="214" text-anchor="end" font-size="16">Q</text>
<text x="34" y="24" text-anchor="middle" font-size="16">T</text>
<text x="384" y="24" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="10">A</tspan></text>
<text x="208" y="298" text-anchor="end" font-size="16">Clock</text>
</g>
</svg>
</div>

| ขอบที่ | $T$ | $Q$ หลังขอบ |
|:-:|:-:|:-:|
| 1 | 1 | 1 |
| 2 | 1 | 0 |
| 3 | 0 | 0 |
| 4 | 1 | 1 |
| 5 | 0 | 1 |
| 6 | 1 | 0 |

## 5. สรุปวิธีแปลงระหว่างโค้ดและวงจร

### 5.1 จากโค้ดเป็นวงจร

| โค้ดที่เห็น | วงจรที่ได้ |
|:--|:--|
| `and/or/nand/nor/xor/xnor (out, in1, in2, ...);` | เกตชนิดนั้น พอร์ตแรกคือเอาต์พุต |
| `not (out, in);` | NOT เกต |
| `assign y = ...;` | เกตตามตัวกระทำ : `~` NOT, `&` AND, ผลบวกลอจิก OR, `^` XOR, `?:` มัลติเพลกซ์ |
| `assign {Cout, Sum} = A + B + Cin;` | วงจรบวก (Full Adder) |
| `always @(a or b ...)` และใช้ `=` ทุกกรณีของ `if/case` | วงจรคอมบิเนชัน (เลือกค่าด้วยมัลติเพลกซ์/ตัวถอดรหัส) |
| `always @(posedge CLK)` และ `<=` | D flip-flop ที่ขอบขาขึ้น เอาต์พุตเป็นตัวแปร `reg` ทางซ้าย ค่าที่รับ (ทางขวา) ผ่านเกตก่อนเข้า D |
| `if (RST) Q <= 0;` ใน `always @(posedge CLK or posedge RST)` | D flip-flop มีขา Reset แบบอะซิงโครนัส |
| ชื่อโมดูลย่อย `Mod inst (...)` | กล่องโมดูลย่อย ต่อสายตามพอร์ต (ลำดับหรือชื่อ) |

**ขั้นตอน** 1) หาอินพุตและเอาต์พุตจาก port declaration 2) ชนิดการเขียนเป็น Structural, Dataflow หรือ Behavioral 3) เขียนสมการหรือตารางการทำงานของแต่ละเอาต์พุต 4) วาดวงจร (เกต, ฟลิป-ฟลอป) 5) ตรวจด้วยตารางความจริงอย่างน้อยหนึ่งแถว

### 5.2 จากวงจรเป็นโค้ด

**ขั้นตอน** 1) ตั้งชื่ออินพุต เอาต์พุต และสายภายในทุกเส้น 2) เขียน `module` พร้อม port list และ port declaration (เอาต์พุตก่อนอินพุต) 3) ประกาศ `wire` ให้สายภายใน 4) เขียนวงจรตามระดับที่โจทย์ต้องการ

- **Structural** : เกตทีละตัว เอาต์พุตเป็นพอร์ตแรก
- **Dataflow** : เขียนสมการของแต่ละเอาต์พุตเป็น `assign`
- **Behavioral** : วงจรคอมบิเนชันใช้ `always @(อินพุตทั้งหมด)` กับ `case`/`if` และ `=` ; วงจรลำดับใช้ `always @(posedge CLK)` และ `<=` ให้เอาต์พุตเป็น `reg`

### 5.3 ข้อควรระวังในการสอบ

- พอร์ตแรกของเกตพื้นฐานและ UDP เป็นเอาต์พุตเสมอ
- ตัวแปรที่ถูกกำหนดค่าใน `always` และ `initial` ต้องเป็น `reg` ตัวแปรของ `assign` และเอาต์พุตของเกตต้องเป็น net (`wire`)
- `=` (Blocking) ใช้กับวงจรคอมบิเนชัน `<=` (Non-blocking) ใช้กับวงจรลำดับ ถ้าใช้ผิดชิฟต์รีจิสเตอร์อาจกลายเป็น flip-flop ตัวเดียว (ตัวอย่างที่ 15)
- `case` ถือ `x` เป็นค่า Unknown จริง ถ้าต้องการ Don't care ต้องใช้ `casex` หรือ `casez` (ตัวอย่างที่ 18)
- ลำดับบรรทัดของเกตและ `assign` ไม่มีผลต่อวงจร เพราะทำงานพร้อมกัน แต่ลำดับคำสั่งใน `begin ... end` ของ `always` มีผลเมื่อใช้ `=`
- การต่อพอร์ตโดยลำดับต้องเรียงตาม port list ของโมดูลนั้น การต่อโดยชื่อสลับได้
- `endmodule` ไม่มีเครื่องหมาย `;` และจบทุกโมดูล
- ตรวจคำตอบด้วยตารางความจริงหรือการจำลองค่าสัญญาณทีละขอบของ CLK
