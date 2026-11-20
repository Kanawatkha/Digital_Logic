# ข้อสอบปลายภาค ข้อ 2 ฟลิป-ฟลอป (Flip-Flop)

@select ff ชนิดฟลิป-ฟลอป | jk=JK | d=D | t=T | rs=Clock RS
@select trig การกระตุ้น | rise=ขอบขาขึ้น (↑) | fall=ขอบขาลง (↓) | hi=พัลส์บวก (ระดับ 1) | lo=พัลส์ลบ (ระดับ 0)
@select pins ขา PS และ CLR | none=ไม่มี | ps=มี PS และ CLR
@select set ชุดสัญญาณ | a=ชุดที่ 1 | b=ชุดที่ 2 | c=ชุดที่ 3
@select give สิ่งที่โจทย์ให้ | wave=รูปคลื่นอินพุต | table=รูปคลื่นและตารางการทำงาน

---

## โจทย์

เลือก **ชนิดฟลิป-ฟลอป** **การกระตุ้น** (ขอบ หรือพัลส์ระดับ) **ขา PS และ CLR** **ชุดสัญญาณ** และ **สิ่งที่โจทย์ให้** ด้านล่างนี้ โจทย์จะเปลี่ยนตามที่เลือก ฟลิป-ฟลอปที่กระตุ้นด้วยพัลส์ระดับมีเฉพาะ D และ Clock RS กดสวิตช์ "แสดงเฉลย" เพื่อดูวิธีทำ

@choices

### ข้อ 2  JK และ T ฟลิป-ฟลอปไม่ใช้กับพัลส์ระดับ {ff=jk,t; trig=hi,lo}

ในโจทย์ชุดนี้ JK และ T ฟลิป-ฟลอปกระตุ้นด้วยขอบ (ขอบขาขึ้นหรือขอบขาลง) เท่านั้น เพราะเมื่อ $JK=11$ หรือ $T=1$ เอาต์พุตจะสลับสถานะซ้ำ ๆ ตลอดช่วงพัลส์ ให้เลือกขอบขาขึ้นหรือขอบขาลงแทน หรือเลือก D หรือ Clock RS ถ้าต้องการพัลส์ระดับ

### ข้อ 2  JK ฟลิป-ฟลอป ทำงานที่ขอบขาขึ้นของสัญญาณนาฬิกา เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=jk; trig=rise; pins=none; set=a; give=wave}

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
<text x="50" y="123.6" text-anchor="end">J</text>
<path d="M62,104 L174,104 L174,131.2 L350,131.2 L350,104 L414,104 L414,131.2 L574,131.2 L574,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">K</text>
<path d="M62,191.2 L174,191.2 L174,164 L414,164 L414,191.2 L574,191.2 L574,164 L702,164" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  JK ฟลิป-ฟลอป ทำงานที่ขอบขาขึ้นของสัญญาณนาฬิกา เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=jk; trig=rise; pins=none; set=a; give=table}

**ตารางการทำงาน** ($x$ คือค่าอะไรก็ได้, $Q_0$ คือค่า $Q$ ก่อนมีสัญญาณกระตุ้น)

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="301" height="220" viewBox="0 0 301 220" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<text x="150.5" y="26" text-anchor="middle" font-family="Mitr, Tahoma, sans-serif" font-size="21" font-weight="500" fill="#e8743b">ตารางการทำงาน</text>
<g stroke="currentColor" stroke-width="1.4" fill="none">
<rect x="16" y="42" width="269" height="170"/>
<line x1="16" y1="73" x2="285" y2="73"/>
<line x1="190" y1="42" x2="190" y2="212"/>
<line x1="16" y1="181" x2="285" y2="181" stroke-width="0.9" stroke-opacity="0.55"/>
</g>
<text x="57" y="63" text-anchor="middle" font-size="16">CLOCK</text>
<line x1="57" y1="95" x2="57" y2="82" stroke="currentColor" stroke-width="1.6"/>
<polygon points="57,81 52.5,88 61.5,88" fill="currentColor"/>
<line x1="57" y1="122" x2="57" y2="109" stroke="currentColor" stroke-width="1.6"/>
<polygon points="57,108 52.5,115 61.5,115" fill="currentColor"/>
<line x1="57" y1="149" x2="57" y2="136" stroke="currentColor" stroke-width="1.6"/>
<polygon points="57,135 52.5,142 61.5,142" fill="currentColor"/>
<line x1="57" y1="176" x2="57" y2="163" stroke="currentColor" stroke-width="1.6"/>
<polygon points="57,162 52.5,169 61.5,169" fill="currentColor"/>
<text x="57" y="201" text-anchor="middle" font-size="16" font-family="Mitr, Tahoma, sans-serif" font-size="14">ไม่มีขอบ</text>
<text x="121" y="63" text-anchor="middle" font-size="16">J</text>
<text x="121" y="93" text-anchor="middle" font-size="16">0</text>
<text x="121" y="120" text-anchor="middle" font-size="16">0</text>
<text x="121" y="147" text-anchor="middle" font-size="16">1</text>
<text x="121" y="174" text-anchor="middle" font-size="16">1</text>
<text x="121" y="201" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="167" y="63" text-anchor="middle" font-size="16">K</text>
<text x="167" y="93" text-anchor="middle" font-size="16">0</text>
<text x="167" y="120" text-anchor="middle" font-size="16">1</text>
<text x="167" y="147" text-anchor="middle" font-size="16">0</text>
<text x="167" y="174" text-anchor="middle" font-size="16">1</text>
<text x="167" y="201" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="213.8" y="63" text-anchor="middle" font-size="16">Q</text>
<text x="213.8" y="93" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<text x="213.8" y="120" text-anchor="middle" font-size="16">0</text>
<text x="213.8" y="147" text-anchor="middle" font-size="16">1</text>
<text x="213.8" y="174" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<line x1="204" y1="160" x2="215" y2="160" stroke="currentColor" stroke-width="1.3"/>
<text x="213.8" y="201" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<text x="261.2" y="63" text-anchor="middle" font-size="16">Q</text>
<line x1="255.5" y1="49" x2="266.5" y2="49" stroke="currentColor" stroke-width="1.3"/>
<text x="261.2" y="93" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<line x1="251.5" y1="79" x2="262.5" y2="79" stroke="currentColor" stroke-width="1.3"/>
<text x="261.2" y="120" text-anchor="middle" font-size="16">1</text>
<text x="261.2" y="147" text-anchor="middle" font-size="16">0</text>
<text x="261.2" y="174" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<text x="261.2" y="201" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<line x1="251.5" y1="187" x2="262.5" y2="187" stroke="currentColor" stroke-width="1.3"/>
</svg>
</div>

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
<text x="50" y="123.6" text-anchor="end">J</text>
<path d="M62,104 L174,104 L174,131.2 L350,131.2 L350,104 L414,104 L414,131.2 L574,131.2 L574,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">K</text>
<path d="M62,191.2 L174,191.2 L174,164 L414,164 L414,191.2 L574,191.2 L574,164 L702,164" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  JK ฟลิป-ฟลอป ทำงานที่ขอบขาขึ้นของสัญญาณนาฬิกา เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=jk; trig=rise; pins=none; set=b; give=wave}

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
<text x="50" y="123.6" text-anchor="end">J</text>
<path d="M62,131.2 L190,131.2 L190,104 L558,104 L558,131.2 L702,131.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">K</text>
<path d="M62,164 L462,164 L462,191.2 L702,191.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  JK ฟลิป-ฟลอป ทำงานที่ขอบขาขึ้นของสัญญาณนาฬิกา เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=jk; trig=rise; pins=none; set=b; give=table}

**ตารางการทำงาน** ($x$ คือค่าอะไรก็ได้, $Q_0$ คือค่า $Q$ ก่อนมีสัญญาณกระตุ้น)

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="301" height="220" viewBox="0 0 301 220" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<text x="150.5" y="26" text-anchor="middle" font-family="Mitr, Tahoma, sans-serif" font-size="21" font-weight="500" fill="#e8743b">ตารางการทำงาน</text>
<g stroke="currentColor" stroke-width="1.4" fill="none">
<rect x="16" y="42" width="269" height="170"/>
<line x1="16" y1="73" x2="285" y2="73"/>
<line x1="190" y1="42" x2="190" y2="212"/>
<line x1="16" y1="181" x2="285" y2="181" stroke-width="0.9" stroke-opacity="0.55"/>
</g>
<text x="57" y="63" text-anchor="middle" font-size="16">CLOCK</text>
<line x1="57" y1="95" x2="57" y2="82" stroke="currentColor" stroke-width="1.6"/>
<polygon points="57,81 52.5,88 61.5,88" fill="currentColor"/>
<line x1="57" y1="122" x2="57" y2="109" stroke="currentColor" stroke-width="1.6"/>
<polygon points="57,108 52.5,115 61.5,115" fill="currentColor"/>
<line x1="57" y1="149" x2="57" y2="136" stroke="currentColor" stroke-width="1.6"/>
<polygon points="57,135 52.5,142 61.5,142" fill="currentColor"/>
<line x1="57" y1="176" x2="57" y2="163" stroke="currentColor" stroke-width="1.6"/>
<polygon points="57,162 52.5,169 61.5,169" fill="currentColor"/>
<text x="57" y="201" text-anchor="middle" font-size="16" font-family="Mitr, Tahoma, sans-serif" font-size="14">ไม่มีขอบ</text>
<text x="121" y="63" text-anchor="middle" font-size="16">J</text>
<text x="121" y="93" text-anchor="middle" font-size="16">0</text>
<text x="121" y="120" text-anchor="middle" font-size="16">0</text>
<text x="121" y="147" text-anchor="middle" font-size="16">1</text>
<text x="121" y="174" text-anchor="middle" font-size="16">1</text>
<text x="121" y="201" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="167" y="63" text-anchor="middle" font-size="16">K</text>
<text x="167" y="93" text-anchor="middle" font-size="16">0</text>
<text x="167" y="120" text-anchor="middle" font-size="16">1</text>
<text x="167" y="147" text-anchor="middle" font-size="16">0</text>
<text x="167" y="174" text-anchor="middle" font-size="16">1</text>
<text x="167" y="201" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="213.8" y="63" text-anchor="middle" font-size="16">Q</text>
<text x="213.8" y="93" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<text x="213.8" y="120" text-anchor="middle" font-size="16">0</text>
<text x="213.8" y="147" text-anchor="middle" font-size="16">1</text>
<text x="213.8" y="174" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<line x1="204" y1="160" x2="215" y2="160" stroke="currentColor" stroke-width="1.3"/>
<text x="213.8" y="201" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<text x="261.2" y="63" text-anchor="middle" font-size="16">Q</text>
<line x1="255.5" y1="49" x2="266.5" y2="49" stroke="currentColor" stroke-width="1.3"/>
<text x="261.2" y="93" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<line x1="251.5" y1="79" x2="262.5" y2="79" stroke="currentColor" stroke-width="1.3"/>
<text x="261.2" y="120" text-anchor="middle" font-size="16">1</text>
<text x="261.2" y="147" text-anchor="middle" font-size="16">0</text>
<text x="261.2" y="174" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<text x="261.2" y="201" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<line x1="251.5" y1="187" x2="262.5" y2="187" stroke="currentColor" stroke-width="1.3"/>
</svg>
</div>

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
<text x="50" y="123.6" text-anchor="end">J</text>
<path d="M62,131.2 L190,131.2 L190,104 L558,104 L558,131.2 L702,131.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">K</text>
<path d="M62,164 L462,164 L462,191.2 L702,191.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  JK ฟลิป-ฟลอป ทำงานที่ขอบขาขึ้นของสัญญาณนาฬิกา เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=jk; trig=rise; pins=none; set=c; give=wave}

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
<text x="50" y="123.6" text-anchor="end">J</text>
<path d="M62,104 L222,104 L222,131.2 L398,131.2 L398,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">K</text>
<path d="M62,164 L222,164 L222,191.2 L302,191.2 L302,164 L398,164 L398,191.2 L590,191.2 L590,164 L702,164" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  JK ฟลิป-ฟลอป ทำงานที่ขอบขาขึ้นของสัญญาณนาฬิกา เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=jk; trig=rise; pins=none; set=c; give=table}

**ตารางการทำงาน** ($x$ คือค่าอะไรก็ได้, $Q_0$ คือค่า $Q$ ก่อนมีสัญญาณกระตุ้น)

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="301" height="220" viewBox="0 0 301 220" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<text x="150.5" y="26" text-anchor="middle" font-family="Mitr, Tahoma, sans-serif" font-size="21" font-weight="500" fill="#e8743b">ตารางการทำงาน</text>
<g stroke="currentColor" stroke-width="1.4" fill="none">
<rect x="16" y="42" width="269" height="170"/>
<line x1="16" y1="73" x2="285" y2="73"/>
<line x1="190" y1="42" x2="190" y2="212"/>
<line x1="16" y1="181" x2="285" y2="181" stroke-width="0.9" stroke-opacity="0.55"/>
</g>
<text x="57" y="63" text-anchor="middle" font-size="16">CLOCK</text>
<line x1="57" y1="95" x2="57" y2="82" stroke="currentColor" stroke-width="1.6"/>
<polygon points="57,81 52.5,88 61.5,88" fill="currentColor"/>
<line x1="57" y1="122" x2="57" y2="109" stroke="currentColor" stroke-width="1.6"/>
<polygon points="57,108 52.5,115 61.5,115" fill="currentColor"/>
<line x1="57" y1="149" x2="57" y2="136" stroke="currentColor" stroke-width="1.6"/>
<polygon points="57,135 52.5,142 61.5,142" fill="currentColor"/>
<line x1="57" y1="176" x2="57" y2="163" stroke="currentColor" stroke-width="1.6"/>
<polygon points="57,162 52.5,169 61.5,169" fill="currentColor"/>
<text x="57" y="201" text-anchor="middle" font-size="16" font-family="Mitr, Tahoma, sans-serif" font-size="14">ไม่มีขอบ</text>
<text x="121" y="63" text-anchor="middle" font-size="16">J</text>
<text x="121" y="93" text-anchor="middle" font-size="16">0</text>
<text x="121" y="120" text-anchor="middle" font-size="16">0</text>
<text x="121" y="147" text-anchor="middle" font-size="16">1</text>
<text x="121" y="174" text-anchor="middle" font-size="16">1</text>
<text x="121" y="201" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="167" y="63" text-anchor="middle" font-size="16">K</text>
<text x="167" y="93" text-anchor="middle" font-size="16">0</text>
<text x="167" y="120" text-anchor="middle" font-size="16">1</text>
<text x="167" y="147" text-anchor="middle" font-size="16">0</text>
<text x="167" y="174" text-anchor="middle" font-size="16">1</text>
<text x="167" y="201" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="213.8" y="63" text-anchor="middle" font-size="16">Q</text>
<text x="213.8" y="93" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<text x="213.8" y="120" text-anchor="middle" font-size="16">0</text>
<text x="213.8" y="147" text-anchor="middle" font-size="16">1</text>
<text x="213.8" y="174" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<line x1="204" y1="160" x2="215" y2="160" stroke="currentColor" stroke-width="1.3"/>
<text x="213.8" y="201" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<text x="261.2" y="63" text-anchor="middle" font-size="16">Q</text>
<line x1="255.5" y1="49" x2="266.5" y2="49" stroke="currentColor" stroke-width="1.3"/>
<text x="261.2" y="93" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<line x1="251.5" y1="79" x2="262.5" y2="79" stroke="currentColor" stroke-width="1.3"/>
<text x="261.2" y="120" text-anchor="middle" font-size="16">1</text>
<text x="261.2" y="147" text-anchor="middle" font-size="16">0</text>
<text x="261.2" y="174" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<text x="261.2" y="201" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<line x1="251.5" y1="187" x2="262.5" y2="187" stroke="currentColor" stroke-width="1.3"/>
</svg>
</div>

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
<text x="50" y="123.6" text-anchor="end">J</text>
<path d="M62,104 L222,104 L222,131.2 L398,131.2 L398,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">K</text>
<path d="M62,164 L222,164 L222,191.2 L302,191.2 L302,164 L398,164 L398,191.2 L590,191.2 L590,164 L702,164" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  JK ฟลิป-ฟลอป ที่มี PS และ CLR ทำงานที่ขอบขาขึ้นของสัญญาณนาฬิกา เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=jk; trig=rise; pins=ps; set=a; give=wave}

PS และ CLR ทำงานเมื่อเป็น $0$ และทำงานทันที ไม่ต้องรอสัญญาณนาฬิกา

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="344" viewBox="0 0 726 344" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="338"/>
<line x1="254" y1="26" x2="254" y2="338"/>
<line x1="382" y1="26" x2="382" y2="338"/>
<line x1="510" y1="26" x2="510" y2="338"/>
<line x1="638" y1="26" x2="638" y2="338"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,44 L606,44 L606,71.2 L670,71.2 L670,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,104 L430,104 L430,131.2 L478,131.2 L478,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<path d="M62,191.2 L126,191.2 L126,164 L190,164 L190,191.2 L254,191.2 L254,164 L318,164 L318,191.2 L382,191.2 L382,164 L446,164 L446,191.2 L510,191.2 L510,164 L574,164 L574,191.2 L638,191.2 L638,164 L702,164 L702,191.2 L702,191.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">J</text>
<path d="M62,224 L174,224 L174,251.2 L350,251.2 L350,224 L414,224 L414,251.2 L574,251.2 L574,224 L702,224" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">K</text>
<path d="M62,311.2 L174,311.2 L174,284 L414,284 L414,311.2 L574,311.2 L574,284 L702,284" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  JK ฟลิป-ฟลอป ที่มี PS และ CLR ทำงานที่ขอบขาขึ้นของสัญญาณนาฬิกา เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=jk; trig=rise; pins=ps; set=a; give=table}

**ตารางการทำงาน** ($x$ คือค่าอะไรก็ได้, $Q_0$ คือค่า $Q$ ก่อนมีสัญญาณกระตุ้น)

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="456" height="301" viewBox="0 0 456 301" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<text x="228" y="26" text-anchor="middle" font-family="Mitr, Tahoma, sans-serif" font-size="21" font-weight="500" fill="#e8743b">ตารางการทำงาน</text>
<g stroke="currentColor" stroke-width="1.4" fill="none">
<rect x="16" y="42" width="424" height="251"/>
<line x1="16" y1="73" x2="440" y2="73"/>
<line x1="345" y1="42" x2="345" y2="293"/>
<line x1="16" y1="154" x2="440" y2="154" stroke-width="0.9" stroke-opacity="0.55"/>
<line x1="16" y1="262" x2="440" y2="262" stroke-width="0.9" stroke-opacity="0.55"/>
</g>
<text x="57" y="63" text-anchor="middle" font-size="16">PRESET</text>
<text x="57" y="93" text-anchor="middle" font-size="16">0</text>
<text x="57" y="120" text-anchor="middle" font-size="16">0</text>
<text x="57" y="147" text-anchor="middle" font-size="16">1</text>
<text x="57" y="174" text-anchor="middle" font-size="16">1</text>
<text x="57" y="201" text-anchor="middle" font-size="16">1</text>
<text x="57" y="228" text-anchor="middle" font-size="16">1</text>
<text x="57" y="255" text-anchor="middle" font-size="16">1</text>
<text x="57" y="282" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="63" text-anchor="middle" font-size="16">CLEAR</text>
<text x="134.5" y="93" text-anchor="middle" font-size="16">0</text>
<text x="134.5" y="120" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="147" text-anchor="middle" font-size="16">0</text>
<text x="134.5" y="174" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="201" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="228" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="255" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="282" text-anchor="middle" font-size="16">1</text>
<text x="212" y="63" text-anchor="middle" font-size="16">CLOCK</text>
<text x="212" y="93" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="212" y="120" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="212" y="147" text-anchor="middle" font-size="16" font-style="italic">x</text>
<line x1="212" y1="176" x2="212" y2="163" stroke="currentColor" stroke-width="1.6"/>
<polygon points="212,162 207.5,169 216.5,169" fill="currentColor"/>
<line x1="212" y1="203" x2="212" y2="190" stroke="currentColor" stroke-width="1.6"/>
<polygon points="212,189 207.5,196 216.5,196" fill="currentColor"/>
<line x1="212" y1="230" x2="212" y2="217" stroke="currentColor" stroke-width="1.6"/>
<polygon points="212,216 207.5,223 216.5,223" fill="currentColor"/>
<line x1="212" y1="257" x2="212" y2="244" stroke="currentColor" stroke-width="1.6"/>
<polygon points="212,243 207.5,250 216.5,250" fill="currentColor"/>
<text x="212" y="282" text-anchor="middle" font-size="16" font-family="Mitr, Tahoma, sans-serif" font-size="14">ไม่มีขอบ</text>
<text x="276" y="63" text-anchor="middle" font-size="16">J</text>
<text x="276" y="93" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="276" y="120" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="276" y="147" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="276" y="174" text-anchor="middle" font-size="16">0</text>
<text x="276" y="201" text-anchor="middle" font-size="16">0</text>
<text x="276" y="228" text-anchor="middle" font-size="16">1</text>
<text x="276" y="255" text-anchor="middle" font-size="16">1</text>
<text x="276" y="282" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="322" y="63" text-anchor="middle" font-size="16">K</text>
<text x="322" y="93" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="322" y="120" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="322" y="147" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="322" y="174" text-anchor="middle" font-size="16">0</text>
<text x="322" y="201" text-anchor="middle" font-size="16">1</text>
<text x="322" y="228" text-anchor="middle" font-size="16">0</text>
<text x="322" y="255" text-anchor="middle" font-size="16">1</text>
<text x="322" y="282" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="368.8" y="63" text-anchor="middle" font-size="16">Q</text>
<text x="368.8" y="93" text-anchor="middle" font-size="16">1</text>
<text x="368.8" y="120" text-anchor="middle" font-size="16">1</text>
<text x="368.8" y="147" text-anchor="middle" font-size="16">0</text>
<text x="368.8" y="174" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<text x="368.8" y="201" text-anchor="middle" font-size="16">0</text>
<text x="368.8" y="228" text-anchor="middle" font-size="16">1</text>
<text x="368.8" y="255" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<line x1="359" y1="241" x2="370" y2="241" stroke="currentColor" stroke-width="1.3"/>
<text x="368.8" y="282" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<text x="416.2" y="63" text-anchor="middle" font-size="16">Q</text>
<line x1="410.5" y1="49" x2="421.5" y2="49" stroke="currentColor" stroke-width="1.3"/>
<text x="416.2" y="93" text-anchor="middle" font-size="16">1</text>
<text x="416.2" y="120" text-anchor="middle" font-size="16">0</text>
<text x="416.2" y="147" text-anchor="middle" font-size="16">1</text>
<text x="416.2" y="174" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<line x1="406.5" y1="160" x2="417.5" y2="160" stroke="currentColor" stroke-width="1.3"/>
<text x="416.2" y="201" text-anchor="middle" font-size="16">1</text>
<text x="416.2" y="228" text-anchor="middle" font-size="16">0</text>
<text x="416.2" y="255" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<text x="416.2" y="282" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<line x1="406.5" y1="268" x2="417.5" y2="268" stroke="currentColor" stroke-width="1.3"/>
</svg>
</div>

PS และ CLR ทำงานเมื่อเป็น $0$ และทำงานทันที ไม่ต้องรอสัญญาณนาฬิกา

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="344" viewBox="0 0 726 344" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="338"/>
<line x1="254" y1="26" x2="254" y2="338"/>
<line x1="382" y1="26" x2="382" y2="338"/>
<line x1="510" y1="26" x2="510" y2="338"/>
<line x1="638" y1="26" x2="638" y2="338"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,44 L606,44 L606,71.2 L670,71.2 L670,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,104 L430,104 L430,131.2 L478,131.2 L478,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<path d="M62,191.2 L126,191.2 L126,164 L190,164 L190,191.2 L254,191.2 L254,164 L318,164 L318,191.2 L382,191.2 L382,164 L446,164 L446,191.2 L510,191.2 L510,164 L574,164 L574,191.2 L638,191.2 L638,164 L702,164 L702,191.2 L702,191.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">J</text>
<path d="M62,224 L174,224 L174,251.2 L350,251.2 L350,224 L414,224 L414,251.2 L574,251.2 L574,224 L702,224" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">K</text>
<path d="M62,311.2 L174,311.2 L174,284 L414,284 L414,311.2 L574,311.2 L574,284 L702,284" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  JK ฟลิป-ฟลอป ที่มี PS และ CLR ทำงานที่ขอบขาขึ้นของสัญญาณนาฬิกา เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=jk; trig=rise; pins=ps; set=b; give=wave}

PS และ CLR ทำงานเมื่อเป็น $0$ และทำงานทันที ไม่ต้องรอสัญญาณนาฬิกา

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="344" viewBox="0 0 726 344" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="338"/>
<line x1="254" y1="26" x2="254" y2="338"/>
<line x1="382" y1="26" x2="382" y2="338"/>
<line x1="510" y1="26" x2="510" y2="338"/>
<line x1="638" y1="26" x2="638" y2="338"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,44 L174,44 L174,71.2 L222,71.2 L222,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,104 L606,104 L606,131.2 L670,131.2 L670,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<path d="M62,191.2 L126,191.2 L126,164 L190,164 L190,191.2 L254,191.2 L254,164 L318,164 L318,191.2 L382,191.2 L382,164 L446,164 L446,191.2 L510,191.2 L510,164 L574,164 L574,191.2 L638,191.2 L638,164 L702,164 L702,191.2 L702,191.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">J</text>
<path d="M62,251.2 L190,251.2 L190,224 L558,224 L558,251.2 L702,251.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">K</text>
<path d="M62,284 L462,284 L462,311.2 L702,311.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  JK ฟลิป-ฟลอป ที่มี PS และ CLR ทำงานที่ขอบขาขึ้นของสัญญาณนาฬิกา เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=jk; trig=rise; pins=ps; set=b; give=table}

**ตารางการทำงาน** ($x$ คือค่าอะไรก็ได้, $Q_0$ คือค่า $Q$ ก่อนมีสัญญาณกระตุ้น)

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="456" height="301" viewBox="0 0 456 301" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<text x="228" y="26" text-anchor="middle" font-family="Mitr, Tahoma, sans-serif" font-size="21" font-weight="500" fill="#e8743b">ตารางการทำงาน</text>
<g stroke="currentColor" stroke-width="1.4" fill="none">
<rect x="16" y="42" width="424" height="251"/>
<line x1="16" y1="73" x2="440" y2="73"/>
<line x1="345" y1="42" x2="345" y2="293"/>
<line x1="16" y1="154" x2="440" y2="154" stroke-width="0.9" stroke-opacity="0.55"/>
<line x1="16" y1="262" x2="440" y2="262" stroke-width="0.9" stroke-opacity="0.55"/>
</g>
<text x="57" y="63" text-anchor="middle" font-size="16">PRESET</text>
<text x="57" y="93" text-anchor="middle" font-size="16">0</text>
<text x="57" y="120" text-anchor="middle" font-size="16">0</text>
<text x="57" y="147" text-anchor="middle" font-size="16">1</text>
<text x="57" y="174" text-anchor="middle" font-size="16">1</text>
<text x="57" y="201" text-anchor="middle" font-size="16">1</text>
<text x="57" y="228" text-anchor="middle" font-size="16">1</text>
<text x="57" y="255" text-anchor="middle" font-size="16">1</text>
<text x="57" y="282" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="63" text-anchor="middle" font-size="16">CLEAR</text>
<text x="134.5" y="93" text-anchor="middle" font-size="16">0</text>
<text x="134.5" y="120" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="147" text-anchor="middle" font-size="16">0</text>
<text x="134.5" y="174" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="201" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="228" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="255" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="282" text-anchor="middle" font-size="16">1</text>
<text x="212" y="63" text-anchor="middle" font-size="16">CLOCK</text>
<text x="212" y="93" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="212" y="120" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="212" y="147" text-anchor="middle" font-size="16" font-style="italic">x</text>
<line x1="212" y1="176" x2="212" y2="163" stroke="currentColor" stroke-width="1.6"/>
<polygon points="212,162 207.5,169 216.5,169" fill="currentColor"/>
<line x1="212" y1="203" x2="212" y2="190" stroke="currentColor" stroke-width="1.6"/>
<polygon points="212,189 207.5,196 216.5,196" fill="currentColor"/>
<line x1="212" y1="230" x2="212" y2="217" stroke="currentColor" stroke-width="1.6"/>
<polygon points="212,216 207.5,223 216.5,223" fill="currentColor"/>
<line x1="212" y1="257" x2="212" y2="244" stroke="currentColor" stroke-width="1.6"/>
<polygon points="212,243 207.5,250 216.5,250" fill="currentColor"/>
<text x="212" y="282" text-anchor="middle" font-size="16" font-family="Mitr, Tahoma, sans-serif" font-size="14">ไม่มีขอบ</text>
<text x="276" y="63" text-anchor="middle" font-size="16">J</text>
<text x="276" y="93" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="276" y="120" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="276" y="147" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="276" y="174" text-anchor="middle" font-size="16">0</text>
<text x="276" y="201" text-anchor="middle" font-size="16">0</text>
<text x="276" y="228" text-anchor="middle" font-size="16">1</text>
<text x="276" y="255" text-anchor="middle" font-size="16">1</text>
<text x="276" y="282" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="322" y="63" text-anchor="middle" font-size="16">K</text>
<text x="322" y="93" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="322" y="120" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="322" y="147" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="322" y="174" text-anchor="middle" font-size="16">0</text>
<text x="322" y="201" text-anchor="middle" font-size="16">1</text>
<text x="322" y="228" text-anchor="middle" font-size="16">0</text>
<text x="322" y="255" text-anchor="middle" font-size="16">1</text>
<text x="322" y="282" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="368.8" y="63" text-anchor="middle" font-size="16">Q</text>
<text x="368.8" y="93" text-anchor="middle" font-size="16">1</text>
<text x="368.8" y="120" text-anchor="middle" font-size="16">1</text>
<text x="368.8" y="147" text-anchor="middle" font-size="16">0</text>
<text x="368.8" y="174" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<text x="368.8" y="201" text-anchor="middle" font-size="16">0</text>
<text x="368.8" y="228" text-anchor="middle" font-size="16">1</text>
<text x="368.8" y="255" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<line x1="359" y1="241" x2="370" y2="241" stroke="currentColor" stroke-width="1.3"/>
<text x="368.8" y="282" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<text x="416.2" y="63" text-anchor="middle" font-size="16">Q</text>
<line x1="410.5" y1="49" x2="421.5" y2="49" stroke="currentColor" stroke-width="1.3"/>
<text x="416.2" y="93" text-anchor="middle" font-size="16">1</text>
<text x="416.2" y="120" text-anchor="middle" font-size="16">0</text>
<text x="416.2" y="147" text-anchor="middle" font-size="16">1</text>
<text x="416.2" y="174" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<line x1="406.5" y1="160" x2="417.5" y2="160" stroke="currentColor" stroke-width="1.3"/>
<text x="416.2" y="201" text-anchor="middle" font-size="16">1</text>
<text x="416.2" y="228" text-anchor="middle" font-size="16">0</text>
<text x="416.2" y="255" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<text x="416.2" y="282" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<line x1="406.5" y1="268" x2="417.5" y2="268" stroke="currentColor" stroke-width="1.3"/>
</svg>
</div>

PS และ CLR ทำงานเมื่อเป็น $0$ และทำงานทันที ไม่ต้องรอสัญญาณนาฬิกา

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="344" viewBox="0 0 726 344" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="338"/>
<line x1="254" y1="26" x2="254" y2="338"/>
<line x1="382" y1="26" x2="382" y2="338"/>
<line x1="510" y1="26" x2="510" y2="338"/>
<line x1="638" y1="26" x2="638" y2="338"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,44 L174,44 L174,71.2 L222,71.2 L222,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,104 L606,104 L606,131.2 L670,131.2 L670,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<path d="M62,191.2 L126,191.2 L126,164 L190,164 L190,191.2 L254,191.2 L254,164 L318,164 L318,191.2 L382,191.2 L382,164 L446,164 L446,191.2 L510,191.2 L510,164 L574,164 L574,191.2 L638,191.2 L638,164 L702,164 L702,191.2 L702,191.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">J</text>
<path d="M62,251.2 L190,251.2 L190,224 L558,224 L558,251.2 L702,251.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">K</text>
<path d="M62,284 L462,284 L462,311.2 L702,311.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  JK ฟลิป-ฟลอป ที่มี PS และ CLR ทำงานที่ขอบขาขึ้นของสัญญาณนาฬิกา เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=jk; trig=rise; pins=ps; set=c; give=wave}

PS และ CLR ทำงานเมื่อเป็น $0$ และทำงานทันที ไม่ต้องรอสัญญาณนาฬิกา

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="344" viewBox="0 0 726 344" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="338"/>
<line x1="254" y1="26" x2="254" y2="338"/>
<line x1="382" y1="26" x2="382" y2="338"/>
<line x1="510" y1="26" x2="510" y2="338"/>
<line x1="638" y1="26" x2="638" y2="338"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,44 L470,44 L470,71.2 L534,71.2 L534,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,104 L550,104 L550,131.2 L614,131.2 L614,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<path d="M62,191.2 L126,191.2 L126,164 L190,164 L190,191.2 L254,191.2 L254,164 L318,164 L318,191.2 L382,191.2 L382,164 L446,164 L446,191.2 L510,191.2 L510,164 L574,164 L574,191.2 L638,191.2 L638,164 L702,164 L702,191.2 L702,191.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">J</text>
<path d="M62,224 L222,224 L222,251.2 L398,251.2 L398,224 L702,224" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">K</text>
<path d="M62,284 L222,284 L222,311.2 L302,311.2 L302,284 L398,284 L398,311.2 L590,311.2 L590,284 L702,284" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  JK ฟลิป-ฟลอป ที่มี PS และ CLR ทำงานที่ขอบขาขึ้นของสัญญาณนาฬิกา เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=jk; trig=rise; pins=ps; set=c; give=table}

**ตารางการทำงาน** ($x$ คือค่าอะไรก็ได้, $Q_0$ คือค่า $Q$ ก่อนมีสัญญาณกระตุ้น)

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="456" height="301" viewBox="0 0 456 301" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<text x="228" y="26" text-anchor="middle" font-family="Mitr, Tahoma, sans-serif" font-size="21" font-weight="500" fill="#e8743b">ตารางการทำงาน</text>
<g stroke="currentColor" stroke-width="1.4" fill="none">
<rect x="16" y="42" width="424" height="251"/>
<line x1="16" y1="73" x2="440" y2="73"/>
<line x1="345" y1="42" x2="345" y2="293"/>
<line x1="16" y1="154" x2="440" y2="154" stroke-width="0.9" stroke-opacity="0.55"/>
<line x1="16" y1="262" x2="440" y2="262" stroke-width="0.9" stroke-opacity="0.55"/>
</g>
<text x="57" y="63" text-anchor="middle" font-size="16">PRESET</text>
<text x="57" y="93" text-anchor="middle" font-size="16">0</text>
<text x="57" y="120" text-anchor="middle" font-size="16">0</text>
<text x="57" y="147" text-anchor="middle" font-size="16">1</text>
<text x="57" y="174" text-anchor="middle" font-size="16">1</text>
<text x="57" y="201" text-anchor="middle" font-size="16">1</text>
<text x="57" y="228" text-anchor="middle" font-size="16">1</text>
<text x="57" y="255" text-anchor="middle" font-size="16">1</text>
<text x="57" y="282" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="63" text-anchor="middle" font-size="16">CLEAR</text>
<text x="134.5" y="93" text-anchor="middle" font-size="16">0</text>
<text x="134.5" y="120" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="147" text-anchor="middle" font-size="16">0</text>
<text x="134.5" y="174" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="201" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="228" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="255" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="282" text-anchor="middle" font-size="16">1</text>
<text x="212" y="63" text-anchor="middle" font-size="16">CLOCK</text>
<text x="212" y="93" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="212" y="120" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="212" y="147" text-anchor="middle" font-size="16" font-style="italic">x</text>
<line x1="212" y1="176" x2="212" y2="163" stroke="currentColor" stroke-width="1.6"/>
<polygon points="212,162 207.5,169 216.5,169" fill="currentColor"/>
<line x1="212" y1="203" x2="212" y2="190" stroke="currentColor" stroke-width="1.6"/>
<polygon points="212,189 207.5,196 216.5,196" fill="currentColor"/>
<line x1="212" y1="230" x2="212" y2="217" stroke="currentColor" stroke-width="1.6"/>
<polygon points="212,216 207.5,223 216.5,223" fill="currentColor"/>
<line x1="212" y1="257" x2="212" y2="244" stroke="currentColor" stroke-width="1.6"/>
<polygon points="212,243 207.5,250 216.5,250" fill="currentColor"/>
<text x="212" y="282" text-anchor="middle" font-size="16" font-family="Mitr, Tahoma, sans-serif" font-size="14">ไม่มีขอบ</text>
<text x="276" y="63" text-anchor="middle" font-size="16">J</text>
<text x="276" y="93" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="276" y="120" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="276" y="147" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="276" y="174" text-anchor="middle" font-size="16">0</text>
<text x="276" y="201" text-anchor="middle" font-size="16">0</text>
<text x="276" y="228" text-anchor="middle" font-size="16">1</text>
<text x="276" y="255" text-anchor="middle" font-size="16">1</text>
<text x="276" y="282" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="322" y="63" text-anchor="middle" font-size="16">K</text>
<text x="322" y="93" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="322" y="120" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="322" y="147" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="322" y="174" text-anchor="middle" font-size="16">0</text>
<text x="322" y="201" text-anchor="middle" font-size="16">1</text>
<text x="322" y="228" text-anchor="middle" font-size="16">0</text>
<text x="322" y="255" text-anchor="middle" font-size="16">1</text>
<text x="322" y="282" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="368.8" y="63" text-anchor="middle" font-size="16">Q</text>
<text x="368.8" y="93" text-anchor="middle" font-size="16">1</text>
<text x="368.8" y="120" text-anchor="middle" font-size="16">1</text>
<text x="368.8" y="147" text-anchor="middle" font-size="16">0</text>
<text x="368.8" y="174" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<text x="368.8" y="201" text-anchor="middle" font-size="16">0</text>
<text x="368.8" y="228" text-anchor="middle" font-size="16">1</text>
<text x="368.8" y="255" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<line x1="359" y1="241" x2="370" y2="241" stroke="currentColor" stroke-width="1.3"/>
<text x="368.8" y="282" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<text x="416.2" y="63" text-anchor="middle" font-size="16">Q</text>
<line x1="410.5" y1="49" x2="421.5" y2="49" stroke="currentColor" stroke-width="1.3"/>
<text x="416.2" y="93" text-anchor="middle" font-size="16">1</text>
<text x="416.2" y="120" text-anchor="middle" font-size="16">0</text>
<text x="416.2" y="147" text-anchor="middle" font-size="16">1</text>
<text x="416.2" y="174" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<line x1="406.5" y1="160" x2="417.5" y2="160" stroke="currentColor" stroke-width="1.3"/>
<text x="416.2" y="201" text-anchor="middle" font-size="16">1</text>
<text x="416.2" y="228" text-anchor="middle" font-size="16">0</text>
<text x="416.2" y="255" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<text x="416.2" y="282" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<line x1="406.5" y1="268" x2="417.5" y2="268" stroke="currentColor" stroke-width="1.3"/>
</svg>
</div>

PS และ CLR ทำงานเมื่อเป็น $0$ และทำงานทันที ไม่ต้องรอสัญญาณนาฬิกา

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="344" viewBox="0 0 726 344" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="338"/>
<line x1="254" y1="26" x2="254" y2="338"/>
<line x1="382" y1="26" x2="382" y2="338"/>
<line x1="510" y1="26" x2="510" y2="338"/>
<line x1="638" y1="26" x2="638" y2="338"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,44 L470,44 L470,71.2 L534,71.2 L534,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,104 L550,104 L550,131.2 L614,131.2 L614,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<path d="M62,191.2 L126,191.2 L126,164 L190,164 L190,191.2 L254,191.2 L254,164 L318,164 L318,191.2 L382,191.2 L382,164 L446,164 L446,191.2 L510,191.2 L510,164 L574,164 L574,191.2 L638,191.2 L638,164 L702,164 L702,191.2 L702,191.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">J</text>
<path d="M62,224 L222,224 L222,251.2 L398,251.2 L398,224 L702,224" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">K</text>
<path d="M62,284 L222,284 L222,311.2 L302,311.2 L302,284 L398,284 L398,311.2 L590,311.2 L590,284 L702,284" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  JK ฟลิป-ฟลอป ทำงานที่ขอบขาลงของสัญญาณนาฬิกา เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=jk; trig=fall; pins=none; set=a; give=wave}

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
<path d="M62,44 L126,44 L126,71.2 L190,71.2 L190,44 L254,44 L254,71.2 L318,71.2 L318,44 L382,44 L382,71.2 L446,71.2 L446,44 L510,44 L510,71.2 L574,71.2 L574,44 L638,44 L638,71.2 L702,71.2 L702,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">J</text>
<path d="M62,104 L174,104 L174,131.2 L350,131.2 L350,104 L414,104 L414,131.2 L574,131.2 L574,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">K</text>
<path d="M62,191.2 L174,191.2 L174,164 L414,164 L414,191.2 L574,191.2 L574,164 L702,164" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  JK ฟลิป-ฟลอป ทำงานที่ขอบขาลงของสัญญาณนาฬิกา เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=jk; trig=fall; pins=none; set=a; give=table}

**ตารางการทำงาน** ($x$ คือค่าอะไรก็ได้, $Q_0$ คือค่า $Q$ ก่อนมีสัญญาณกระตุ้น)

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="301" height="220" viewBox="0 0 301 220" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<text x="150.5" y="26" text-anchor="middle" font-family="Mitr, Tahoma, sans-serif" font-size="21" font-weight="500" fill="#e8743b">ตารางการทำงาน</text>
<g stroke="currentColor" stroke-width="1.4" fill="none">
<rect x="16" y="42" width="269" height="170"/>
<line x1="16" y1="73" x2="285" y2="73"/>
<line x1="190" y1="42" x2="190" y2="212"/>
<line x1="16" y1="181" x2="285" y2="181" stroke-width="0.9" stroke-opacity="0.55"/>
</g>
<text x="57" y="63" text-anchor="middle" font-size="16">CLOCK</text>
<line x1="57" y1="82" x2="57" y2="95" stroke="currentColor" stroke-width="1.6"/>
<polygon points="57,96 52.5,89 61.5,89" fill="currentColor"/>
<line x1="57" y1="109" x2="57" y2="122" stroke="currentColor" stroke-width="1.6"/>
<polygon points="57,123 52.5,116 61.5,116" fill="currentColor"/>
<line x1="57" y1="136" x2="57" y2="149" stroke="currentColor" stroke-width="1.6"/>
<polygon points="57,150 52.5,143 61.5,143" fill="currentColor"/>
<line x1="57" y1="163" x2="57" y2="176" stroke="currentColor" stroke-width="1.6"/>
<polygon points="57,177 52.5,170 61.5,170" fill="currentColor"/>
<text x="57" y="201" text-anchor="middle" font-size="16" font-family="Mitr, Tahoma, sans-serif" font-size="14">ไม่มีขอบ</text>
<text x="121" y="63" text-anchor="middle" font-size="16">J</text>
<text x="121" y="93" text-anchor="middle" font-size="16">0</text>
<text x="121" y="120" text-anchor="middle" font-size="16">0</text>
<text x="121" y="147" text-anchor="middle" font-size="16">1</text>
<text x="121" y="174" text-anchor="middle" font-size="16">1</text>
<text x="121" y="201" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="167" y="63" text-anchor="middle" font-size="16">K</text>
<text x="167" y="93" text-anchor="middle" font-size="16">0</text>
<text x="167" y="120" text-anchor="middle" font-size="16">1</text>
<text x="167" y="147" text-anchor="middle" font-size="16">0</text>
<text x="167" y="174" text-anchor="middle" font-size="16">1</text>
<text x="167" y="201" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="213.8" y="63" text-anchor="middle" font-size="16">Q</text>
<text x="213.8" y="93" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<text x="213.8" y="120" text-anchor="middle" font-size="16">0</text>
<text x="213.8" y="147" text-anchor="middle" font-size="16">1</text>
<text x="213.8" y="174" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<line x1="204" y1="160" x2="215" y2="160" stroke="currentColor" stroke-width="1.3"/>
<text x="213.8" y="201" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<text x="261.2" y="63" text-anchor="middle" font-size="16">Q</text>
<line x1="255.5" y1="49" x2="266.5" y2="49" stroke="currentColor" stroke-width="1.3"/>
<text x="261.2" y="93" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<line x1="251.5" y1="79" x2="262.5" y2="79" stroke="currentColor" stroke-width="1.3"/>
<text x="261.2" y="120" text-anchor="middle" font-size="16">1</text>
<text x="261.2" y="147" text-anchor="middle" font-size="16">0</text>
<text x="261.2" y="174" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<text x="261.2" y="201" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<line x1="251.5" y1="187" x2="262.5" y2="187" stroke="currentColor" stroke-width="1.3"/>
</svg>
</div>

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
<path d="M62,44 L126,44 L126,71.2 L190,71.2 L190,44 L254,44 L254,71.2 L318,71.2 L318,44 L382,44 L382,71.2 L446,71.2 L446,44 L510,44 L510,71.2 L574,71.2 L574,44 L638,44 L638,71.2 L702,71.2 L702,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">J</text>
<path d="M62,104 L174,104 L174,131.2 L350,131.2 L350,104 L414,104 L414,131.2 L574,131.2 L574,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">K</text>
<path d="M62,191.2 L174,191.2 L174,164 L414,164 L414,191.2 L574,191.2 L574,164 L702,164" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  JK ฟลิป-ฟลอป ทำงานที่ขอบขาลงของสัญญาณนาฬิกา เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=jk; trig=fall; pins=none; set=b; give=wave}

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
<path d="M62,44 L126,44 L126,71.2 L190,71.2 L190,44 L254,44 L254,71.2 L318,71.2 L318,44 L382,44 L382,71.2 L446,71.2 L446,44 L510,44 L510,71.2 L574,71.2 L574,44 L638,44 L638,71.2 L702,71.2 L702,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">J</text>
<path d="M62,131.2 L190,131.2 L190,104 L558,104 L558,131.2 L702,131.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">K</text>
<path d="M62,164 L462,164 L462,191.2 L702,191.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  JK ฟลิป-ฟลอป ทำงานที่ขอบขาลงของสัญญาณนาฬิกา เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=jk; trig=fall; pins=none; set=b; give=table}

**ตารางการทำงาน** ($x$ คือค่าอะไรก็ได้, $Q_0$ คือค่า $Q$ ก่อนมีสัญญาณกระตุ้น)

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="301" height="220" viewBox="0 0 301 220" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<text x="150.5" y="26" text-anchor="middle" font-family="Mitr, Tahoma, sans-serif" font-size="21" font-weight="500" fill="#e8743b">ตารางการทำงาน</text>
<g stroke="currentColor" stroke-width="1.4" fill="none">
<rect x="16" y="42" width="269" height="170"/>
<line x1="16" y1="73" x2="285" y2="73"/>
<line x1="190" y1="42" x2="190" y2="212"/>
<line x1="16" y1="181" x2="285" y2="181" stroke-width="0.9" stroke-opacity="0.55"/>
</g>
<text x="57" y="63" text-anchor="middle" font-size="16">CLOCK</text>
<line x1="57" y1="82" x2="57" y2="95" stroke="currentColor" stroke-width="1.6"/>
<polygon points="57,96 52.5,89 61.5,89" fill="currentColor"/>
<line x1="57" y1="109" x2="57" y2="122" stroke="currentColor" stroke-width="1.6"/>
<polygon points="57,123 52.5,116 61.5,116" fill="currentColor"/>
<line x1="57" y1="136" x2="57" y2="149" stroke="currentColor" stroke-width="1.6"/>
<polygon points="57,150 52.5,143 61.5,143" fill="currentColor"/>
<line x1="57" y1="163" x2="57" y2="176" stroke="currentColor" stroke-width="1.6"/>
<polygon points="57,177 52.5,170 61.5,170" fill="currentColor"/>
<text x="57" y="201" text-anchor="middle" font-size="16" font-family="Mitr, Tahoma, sans-serif" font-size="14">ไม่มีขอบ</text>
<text x="121" y="63" text-anchor="middle" font-size="16">J</text>
<text x="121" y="93" text-anchor="middle" font-size="16">0</text>
<text x="121" y="120" text-anchor="middle" font-size="16">0</text>
<text x="121" y="147" text-anchor="middle" font-size="16">1</text>
<text x="121" y="174" text-anchor="middle" font-size="16">1</text>
<text x="121" y="201" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="167" y="63" text-anchor="middle" font-size="16">K</text>
<text x="167" y="93" text-anchor="middle" font-size="16">0</text>
<text x="167" y="120" text-anchor="middle" font-size="16">1</text>
<text x="167" y="147" text-anchor="middle" font-size="16">0</text>
<text x="167" y="174" text-anchor="middle" font-size="16">1</text>
<text x="167" y="201" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="213.8" y="63" text-anchor="middle" font-size="16">Q</text>
<text x="213.8" y="93" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<text x="213.8" y="120" text-anchor="middle" font-size="16">0</text>
<text x="213.8" y="147" text-anchor="middle" font-size="16">1</text>
<text x="213.8" y="174" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<line x1="204" y1="160" x2="215" y2="160" stroke="currentColor" stroke-width="1.3"/>
<text x="213.8" y="201" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<text x="261.2" y="63" text-anchor="middle" font-size="16">Q</text>
<line x1="255.5" y1="49" x2="266.5" y2="49" stroke="currentColor" stroke-width="1.3"/>
<text x="261.2" y="93" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<line x1="251.5" y1="79" x2="262.5" y2="79" stroke="currentColor" stroke-width="1.3"/>
<text x="261.2" y="120" text-anchor="middle" font-size="16">1</text>
<text x="261.2" y="147" text-anchor="middle" font-size="16">0</text>
<text x="261.2" y="174" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<text x="261.2" y="201" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<line x1="251.5" y1="187" x2="262.5" y2="187" stroke="currentColor" stroke-width="1.3"/>
</svg>
</div>

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
<path d="M62,44 L126,44 L126,71.2 L190,71.2 L190,44 L254,44 L254,71.2 L318,71.2 L318,44 L382,44 L382,71.2 L446,71.2 L446,44 L510,44 L510,71.2 L574,71.2 L574,44 L638,44 L638,71.2 L702,71.2 L702,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">J</text>
<path d="M62,131.2 L190,131.2 L190,104 L558,104 L558,131.2 L702,131.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">K</text>
<path d="M62,164 L462,164 L462,191.2 L702,191.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  JK ฟลิป-ฟลอป ทำงานที่ขอบขาลงของสัญญาณนาฬิกา เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=jk; trig=fall; pins=none; set=c; give=wave}

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
<path d="M62,44 L126,44 L126,71.2 L190,71.2 L190,44 L254,44 L254,71.2 L318,71.2 L318,44 L382,44 L382,71.2 L446,71.2 L446,44 L510,44 L510,71.2 L574,71.2 L574,44 L638,44 L638,71.2 L702,71.2 L702,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">J</text>
<path d="M62,104 L222,104 L222,131.2 L398,131.2 L398,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">K</text>
<path d="M62,164 L222,164 L222,191.2 L302,191.2 L302,164 L398,164 L398,191.2 L590,191.2 L590,164 L702,164" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  JK ฟลิป-ฟลอป ทำงานที่ขอบขาลงของสัญญาณนาฬิกา เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=jk; trig=fall; pins=none; set=c; give=table}

**ตารางการทำงาน** ($x$ คือค่าอะไรก็ได้, $Q_0$ คือค่า $Q$ ก่อนมีสัญญาณกระตุ้น)

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="301" height="220" viewBox="0 0 301 220" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<text x="150.5" y="26" text-anchor="middle" font-family="Mitr, Tahoma, sans-serif" font-size="21" font-weight="500" fill="#e8743b">ตารางการทำงาน</text>
<g stroke="currentColor" stroke-width="1.4" fill="none">
<rect x="16" y="42" width="269" height="170"/>
<line x1="16" y1="73" x2="285" y2="73"/>
<line x1="190" y1="42" x2="190" y2="212"/>
<line x1="16" y1="181" x2="285" y2="181" stroke-width="0.9" stroke-opacity="0.55"/>
</g>
<text x="57" y="63" text-anchor="middle" font-size="16">CLOCK</text>
<line x1="57" y1="82" x2="57" y2="95" stroke="currentColor" stroke-width="1.6"/>
<polygon points="57,96 52.5,89 61.5,89" fill="currentColor"/>
<line x1="57" y1="109" x2="57" y2="122" stroke="currentColor" stroke-width="1.6"/>
<polygon points="57,123 52.5,116 61.5,116" fill="currentColor"/>
<line x1="57" y1="136" x2="57" y2="149" stroke="currentColor" stroke-width="1.6"/>
<polygon points="57,150 52.5,143 61.5,143" fill="currentColor"/>
<line x1="57" y1="163" x2="57" y2="176" stroke="currentColor" stroke-width="1.6"/>
<polygon points="57,177 52.5,170 61.5,170" fill="currentColor"/>
<text x="57" y="201" text-anchor="middle" font-size="16" font-family="Mitr, Tahoma, sans-serif" font-size="14">ไม่มีขอบ</text>
<text x="121" y="63" text-anchor="middle" font-size="16">J</text>
<text x="121" y="93" text-anchor="middle" font-size="16">0</text>
<text x="121" y="120" text-anchor="middle" font-size="16">0</text>
<text x="121" y="147" text-anchor="middle" font-size="16">1</text>
<text x="121" y="174" text-anchor="middle" font-size="16">1</text>
<text x="121" y="201" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="167" y="63" text-anchor="middle" font-size="16">K</text>
<text x="167" y="93" text-anchor="middle" font-size="16">0</text>
<text x="167" y="120" text-anchor="middle" font-size="16">1</text>
<text x="167" y="147" text-anchor="middle" font-size="16">0</text>
<text x="167" y="174" text-anchor="middle" font-size="16">1</text>
<text x="167" y="201" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="213.8" y="63" text-anchor="middle" font-size="16">Q</text>
<text x="213.8" y="93" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<text x="213.8" y="120" text-anchor="middle" font-size="16">0</text>
<text x="213.8" y="147" text-anchor="middle" font-size="16">1</text>
<text x="213.8" y="174" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<line x1="204" y1="160" x2="215" y2="160" stroke="currentColor" stroke-width="1.3"/>
<text x="213.8" y="201" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<text x="261.2" y="63" text-anchor="middle" font-size="16">Q</text>
<line x1="255.5" y1="49" x2="266.5" y2="49" stroke="currentColor" stroke-width="1.3"/>
<text x="261.2" y="93" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<line x1="251.5" y1="79" x2="262.5" y2="79" stroke="currentColor" stroke-width="1.3"/>
<text x="261.2" y="120" text-anchor="middle" font-size="16">1</text>
<text x="261.2" y="147" text-anchor="middle" font-size="16">0</text>
<text x="261.2" y="174" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<text x="261.2" y="201" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<line x1="251.5" y1="187" x2="262.5" y2="187" stroke="currentColor" stroke-width="1.3"/>
</svg>
</div>

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
<path d="M62,44 L126,44 L126,71.2 L190,71.2 L190,44 L254,44 L254,71.2 L318,71.2 L318,44 L382,44 L382,71.2 L446,71.2 L446,44 L510,44 L510,71.2 L574,71.2 L574,44 L638,44 L638,71.2 L702,71.2 L702,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">J</text>
<path d="M62,104 L222,104 L222,131.2 L398,131.2 L398,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">K</text>
<path d="M62,164 L222,164 L222,191.2 L302,191.2 L302,164 L398,164 L398,191.2 L590,191.2 L590,164 L702,164" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  JK ฟลิป-ฟลอป ที่มี PS และ CLR ทำงานที่ขอบขาลงของสัญญาณนาฬิกา เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=jk; trig=fall; pins=ps; set=a; give=wave}

PS และ CLR ทำงานเมื่อเป็น $0$ และทำงานทันที ไม่ต้องรอสัญญาณนาฬิกา

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="344" viewBox="0 0 726 344" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="338"/>
<line x1="254" y1="26" x2="254" y2="338"/>
<line x1="382" y1="26" x2="382" y2="338"/>
<line x1="510" y1="26" x2="510" y2="338"/>
<line x1="638" y1="26" x2="638" y2="338"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,44 L606,44 L606,71.2 L670,71.2 L670,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,104 L430,104 L430,131.2 L478,131.2 L478,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<path d="M62,164 L126,164 L126,191.2 L190,191.2 L190,164 L254,164 L254,191.2 L318,191.2 L318,164 L382,164 L382,191.2 L446,191.2 L446,164 L510,164 L510,191.2 L574,191.2 L574,164 L638,164 L638,191.2 L702,191.2 L702,164 L702,164" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">J</text>
<path d="M62,224 L174,224 L174,251.2 L350,251.2 L350,224 L414,224 L414,251.2 L574,251.2 L574,224 L702,224" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">K</text>
<path d="M62,311.2 L174,311.2 L174,284 L414,284 L414,311.2 L574,311.2 L574,284 L702,284" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  JK ฟลิป-ฟลอป ที่มี PS และ CLR ทำงานที่ขอบขาลงของสัญญาณนาฬิกา เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=jk; trig=fall; pins=ps; set=a; give=table}

**ตารางการทำงาน** ($x$ คือค่าอะไรก็ได้, $Q_0$ คือค่า $Q$ ก่อนมีสัญญาณกระตุ้น)

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="456" height="301" viewBox="0 0 456 301" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<text x="228" y="26" text-anchor="middle" font-family="Mitr, Tahoma, sans-serif" font-size="21" font-weight="500" fill="#e8743b">ตารางการทำงาน</text>
<g stroke="currentColor" stroke-width="1.4" fill="none">
<rect x="16" y="42" width="424" height="251"/>
<line x1="16" y1="73" x2="440" y2="73"/>
<line x1="345" y1="42" x2="345" y2="293"/>
<line x1="16" y1="154" x2="440" y2="154" stroke-width="0.9" stroke-opacity="0.55"/>
<line x1="16" y1="262" x2="440" y2="262" stroke-width="0.9" stroke-opacity="0.55"/>
</g>
<text x="57" y="63" text-anchor="middle" font-size="16">PRESET</text>
<text x="57" y="93" text-anchor="middle" font-size="16">0</text>
<text x="57" y="120" text-anchor="middle" font-size="16">0</text>
<text x="57" y="147" text-anchor="middle" font-size="16">1</text>
<text x="57" y="174" text-anchor="middle" font-size="16">1</text>
<text x="57" y="201" text-anchor="middle" font-size="16">1</text>
<text x="57" y="228" text-anchor="middle" font-size="16">1</text>
<text x="57" y="255" text-anchor="middle" font-size="16">1</text>
<text x="57" y="282" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="63" text-anchor="middle" font-size="16">CLEAR</text>
<text x="134.5" y="93" text-anchor="middle" font-size="16">0</text>
<text x="134.5" y="120" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="147" text-anchor="middle" font-size="16">0</text>
<text x="134.5" y="174" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="201" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="228" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="255" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="282" text-anchor="middle" font-size="16">1</text>
<text x="212" y="63" text-anchor="middle" font-size="16">CLOCK</text>
<text x="212" y="93" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="212" y="120" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="212" y="147" text-anchor="middle" font-size="16" font-style="italic">x</text>
<line x1="212" y1="163" x2="212" y2="176" stroke="currentColor" stroke-width="1.6"/>
<polygon points="212,177 207.5,170 216.5,170" fill="currentColor"/>
<line x1="212" y1="190" x2="212" y2="203" stroke="currentColor" stroke-width="1.6"/>
<polygon points="212,204 207.5,197 216.5,197" fill="currentColor"/>
<line x1="212" y1="217" x2="212" y2="230" stroke="currentColor" stroke-width="1.6"/>
<polygon points="212,231 207.5,224 216.5,224" fill="currentColor"/>
<line x1="212" y1="244" x2="212" y2="257" stroke="currentColor" stroke-width="1.6"/>
<polygon points="212,258 207.5,251 216.5,251" fill="currentColor"/>
<text x="212" y="282" text-anchor="middle" font-size="16" font-family="Mitr, Tahoma, sans-serif" font-size="14">ไม่มีขอบ</text>
<text x="276" y="63" text-anchor="middle" font-size="16">J</text>
<text x="276" y="93" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="276" y="120" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="276" y="147" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="276" y="174" text-anchor="middle" font-size="16">0</text>
<text x="276" y="201" text-anchor="middle" font-size="16">0</text>
<text x="276" y="228" text-anchor="middle" font-size="16">1</text>
<text x="276" y="255" text-anchor="middle" font-size="16">1</text>
<text x="276" y="282" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="322" y="63" text-anchor="middle" font-size="16">K</text>
<text x="322" y="93" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="322" y="120" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="322" y="147" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="322" y="174" text-anchor="middle" font-size="16">0</text>
<text x="322" y="201" text-anchor="middle" font-size="16">1</text>
<text x="322" y="228" text-anchor="middle" font-size="16">0</text>
<text x="322" y="255" text-anchor="middle" font-size="16">1</text>
<text x="322" y="282" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="368.8" y="63" text-anchor="middle" font-size="16">Q</text>
<text x="368.8" y="93" text-anchor="middle" font-size="16">1</text>
<text x="368.8" y="120" text-anchor="middle" font-size="16">1</text>
<text x="368.8" y="147" text-anchor="middle" font-size="16">0</text>
<text x="368.8" y="174" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<text x="368.8" y="201" text-anchor="middle" font-size="16">0</text>
<text x="368.8" y="228" text-anchor="middle" font-size="16">1</text>
<text x="368.8" y="255" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<line x1="359" y1="241" x2="370" y2="241" stroke="currentColor" stroke-width="1.3"/>
<text x="368.8" y="282" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<text x="416.2" y="63" text-anchor="middle" font-size="16">Q</text>
<line x1="410.5" y1="49" x2="421.5" y2="49" stroke="currentColor" stroke-width="1.3"/>
<text x="416.2" y="93" text-anchor="middle" font-size="16">1</text>
<text x="416.2" y="120" text-anchor="middle" font-size="16">0</text>
<text x="416.2" y="147" text-anchor="middle" font-size="16">1</text>
<text x="416.2" y="174" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<line x1="406.5" y1="160" x2="417.5" y2="160" stroke="currentColor" stroke-width="1.3"/>
<text x="416.2" y="201" text-anchor="middle" font-size="16">1</text>
<text x="416.2" y="228" text-anchor="middle" font-size="16">0</text>
<text x="416.2" y="255" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<text x="416.2" y="282" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<line x1="406.5" y1="268" x2="417.5" y2="268" stroke="currentColor" stroke-width="1.3"/>
</svg>
</div>

PS และ CLR ทำงานเมื่อเป็น $0$ และทำงานทันที ไม่ต้องรอสัญญาณนาฬิกา

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="344" viewBox="0 0 726 344" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="338"/>
<line x1="254" y1="26" x2="254" y2="338"/>
<line x1="382" y1="26" x2="382" y2="338"/>
<line x1="510" y1="26" x2="510" y2="338"/>
<line x1="638" y1="26" x2="638" y2="338"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,44 L606,44 L606,71.2 L670,71.2 L670,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,104 L430,104 L430,131.2 L478,131.2 L478,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<path d="M62,164 L126,164 L126,191.2 L190,191.2 L190,164 L254,164 L254,191.2 L318,191.2 L318,164 L382,164 L382,191.2 L446,191.2 L446,164 L510,164 L510,191.2 L574,191.2 L574,164 L638,164 L638,191.2 L702,191.2 L702,164 L702,164" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">J</text>
<path d="M62,224 L174,224 L174,251.2 L350,251.2 L350,224 L414,224 L414,251.2 L574,251.2 L574,224 L702,224" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">K</text>
<path d="M62,311.2 L174,311.2 L174,284 L414,284 L414,311.2 L574,311.2 L574,284 L702,284" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  JK ฟลิป-ฟลอป ที่มี PS และ CLR ทำงานที่ขอบขาลงของสัญญาณนาฬิกา เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=jk; trig=fall; pins=ps; set=b; give=wave}

PS และ CLR ทำงานเมื่อเป็น $0$ และทำงานทันที ไม่ต้องรอสัญญาณนาฬิกา

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="344" viewBox="0 0 726 344" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="338"/>
<line x1="254" y1="26" x2="254" y2="338"/>
<line x1="382" y1="26" x2="382" y2="338"/>
<line x1="510" y1="26" x2="510" y2="338"/>
<line x1="638" y1="26" x2="638" y2="338"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,44 L174,44 L174,71.2 L222,71.2 L222,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,104 L606,104 L606,131.2 L670,131.2 L670,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<path d="M62,164 L126,164 L126,191.2 L190,191.2 L190,164 L254,164 L254,191.2 L318,191.2 L318,164 L382,164 L382,191.2 L446,191.2 L446,164 L510,164 L510,191.2 L574,191.2 L574,164 L638,164 L638,191.2 L702,191.2 L702,164 L702,164" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">J</text>
<path d="M62,251.2 L190,251.2 L190,224 L558,224 L558,251.2 L702,251.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">K</text>
<path d="M62,284 L462,284 L462,311.2 L702,311.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  JK ฟลิป-ฟลอป ที่มี PS และ CLR ทำงานที่ขอบขาลงของสัญญาณนาฬิกา เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=jk; trig=fall; pins=ps; set=b; give=table}

**ตารางการทำงาน** ($x$ คือค่าอะไรก็ได้, $Q_0$ คือค่า $Q$ ก่อนมีสัญญาณกระตุ้น)

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="456" height="301" viewBox="0 0 456 301" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<text x="228" y="26" text-anchor="middle" font-family="Mitr, Tahoma, sans-serif" font-size="21" font-weight="500" fill="#e8743b">ตารางการทำงาน</text>
<g stroke="currentColor" stroke-width="1.4" fill="none">
<rect x="16" y="42" width="424" height="251"/>
<line x1="16" y1="73" x2="440" y2="73"/>
<line x1="345" y1="42" x2="345" y2="293"/>
<line x1="16" y1="154" x2="440" y2="154" stroke-width="0.9" stroke-opacity="0.55"/>
<line x1="16" y1="262" x2="440" y2="262" stroke-width="0.9" stroke-opacity="0.55"/>
</g>
<text x="57" y="63" text-anchor="middle" font-size="16">PRESET</text>
<text x="57" y="93" text-anchor="middle" font-size="16">0</text>
<text x="57" y="120" text-anchor="middle" font-size="16">0</text>
<text x="57" y="147" text-anchor="middle" font-size="16">1</text>
<text x="57" y="174" text-anchor="middle" font-size="16">1</text>
<text x="57" y="201" text-anchor="middle" font-size="16">1</text>
<text x="57" y="228" text-anchor="middle" font-size="16">1</text>
<text x="57" y="255" text-anchor="middle" font-size="16">1</text>
<text x="57" y="282" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="63" text-anchor="middle" font-size="16">CLEAR</text>
<text x="134.5" y="93" text-anchor="middle" font-size="16">0</text>
<text x="134.5" y="120" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="147" text-anchor="middle" font-size="16">0</text>
<text x="134.5" y="174" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="201" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="228" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="255" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="282" text-anchor="middle" font-size="16">1</text>
<text x="212" y="63" text-anchor="middle" font-size="16">CLOCK</text>
<text x="212" y="93" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="212" y="120" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="212" y="147" text-anchor="middle" font-size="16" font-style="italic">x</text>
<line x1="212" y1="163" x2="212" y2="176" stroke="currentColor" stroke-width="1.6"/>
<polygon points="212,177 207.5,170 216.5,170" fill="currentColor"/>
<line x1="212" y1="190" x2="212" y2="203" stroke="currentColor" stroke-width="1.6"/>
<polygon points="212,204 207.5,197 216.5,197" fill="currentColor"/>
<line x1="212" y1="217" x2="212" y2="230" stroke="currentColor" stroke-width="1.6"/>
<polygon points="212,231 207.5,224 216.5,224" fill="currentColor"/>
<line x1="212" y1="244" x2="212" y2="257" stroke="currentColor" stroke-width="1.6"/>
<polygon points="212,258 207.5,251 216.5,251" fill="currentColor"/>
<text x="212" y="282" text-anchor="middle" font-size="16" font-family="Mitr, Tahoma, sans-serif" font-size="14">ไม่มีขอบ</text>
<text x="276" y="63" text-anchor="middle" font-size="16">J</text>
<text x="276" y="93" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="276" y="120" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="276" y="147" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="276" y="174" text-anchor="middle" font-size="16">0</text>
<text x="276" y="201" text-anchor="middle" font-size="16">0</text>
<text x="276" y="228" text-anchor="middle" font-size="16">1</text>
<text x="276" y="255" text-anchor="middle" font-size="16">1</text>
<text x="276" y="282" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="322" y="63" text-anchor="middle" font-size="16">K</text>
<text x="322" y="93" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="322" y="120" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="322" y="147" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="322" y="174" text-anchor="middle" font-size="16">0</text>
<text x="322" y="201" text-anchor="middle" font-size="16">1</text>
<text x="322" y="228" text-anchor="middle" font-size="16">0</text>
<text x="322" y="255" text-anchor="middle" font-size="16">1</text>
<text x="322" y="282" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="368.8" y="63" text-anchor="middle" font-size="16">Q</text>
<text x="368.8" y="93" text-anchor="middle" font-size="16">1</text>
<text x="368.8" y="120" text-anchor="middle" font-size="16">1</text>
<text x="368.8" y="147" text-anchor="middle" font-size="16">0</text>
<text x="368.8" y="174" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<text x="368.8" y="201" text-anchor="middle" font-size="16">0</text>
<text x="368.8" y="228" text-anchor="middle" font-size="16">1</text>
<text x="368.8" y="255" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<line x1="359" y1="241" x2="370" y2="241" stroke="currentColor" stroke-width="1.3"/>
<text x="368.8" y="282" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<text x="416.2" y="63" text-anchor="middle" font-size="16">Q</text>
<line x1="410.5" y1="49" x2="421.5" y2="49" stroke="currentColor" stroke-width="1.3"/>
<text x="416.2" y="93" text-anchor="middle" font-size="16">1</text>
<text x="416.2" y="120" text-anchor="middle" font-size="16">0</text>
<text x="416.2" y="147" text-anchor="middle" font-size="16">1</text>
<text x="416.2" y="174" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<line x1="406.5" y1="160" x2="417.5" y2="160" stroke="currentColor" stroke-width="1.3"/>
<text x="416.2" y="201" text-anchor="middle" font-size="16">1</text>
<text x="416.2" y="228" text-anchor="middle" font-size="16">0</text>
<text x="416.2" y="255" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<text x="416.2" y="282" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<line x1="406.5" y1="268" x2="417.5" y2="268" stroke="currentColor" stroke-width="1.3"/>
</svg>
</div>

PS และ CLR ทำงานเมื่อเป็น $0$ และทำงานทันที ไม่ต้องรอสัญญาณนาฬิกา

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="344" viewBox="0 0 726 344" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="338"/>
<line x1="254" y1="26" x2="254" y2="338"/>
<line x1="382" y1="26" x2="382" y2="338"/>
<line x1="510" y1="26" x2="510" y2="338"/>
<line x1="638" y1="26" x2="638" y2="338"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,44 L174,44 L174,71.2 L222,71.2 L222,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,104 L606,104 L606,131.2 L670,131.2 L670,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<path d="M62,164 L126,164 L126,191.2 L190,191.2 L190,164 L254,164 L254,191.2 L318,191.2 L318,164 L382,164 L382,191.2 L446,191.2 L446,164 L510,164 L510,191.2 L574,191.2 L574,164 L638,164 L638,191.2 L702,191.2 L702,164 L702,164" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">J</text>
<path d="M62,251.2 L190,251.2 L190,224 L558,224 L558,251.2 L702,251.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">K</text>
<path d="M62,284 L462,284 L462,311.2 L702,311.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  JK ฟลิป-ฟลอป ที่มี PS และ CLR ทำงานที่ขอบขาลงของสัญญาณนาฬิกา เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=jk; trig=fall; pins=ps; set=c; give=wave}

PS และ CLR ทำงานเมื่อเป็น $0$ และทำงานทันที ไม่ต้องรอสัญญาณนาฬิกา

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="344" viewBox="0 0 726 344" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="338"/>
<line x1="254" y1="26" x2="254" y2="338"/>
<line x1="382" y1="26" x2="382" y2="338"/>
<line x1="510" y1="26" x2="510" y2="338"/>
<line x1="638" y1="26" x2="638" y2="338"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,44 L470,44 L470,71.2 L534,71.2 L534,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,104 L550,104 L550,131.2 L614,131.2 L614,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<path d="M62,164 L126,164 L126,191.2 L190,191.2 L190,164 L254,164 L254,191.2 L318,191.2 L318,164 L382,164 L382,191.2 L446,191.2 L446,164 L510,164 L510,191.2 L574,191.2 L574,164 L638,164 L638,191.2 L702,191.2 L702,164 L702,164" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">J</text>
<path d="M62,224 L222,224 L222,251.2 L398,251.2 L398,224 L702,224" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">K</text>
<path d="M62,284 L222,284 L222,311.2 L302,311.2 L302,284 L398,284 L398,311.2 L590,311.2 L590,284 L702,284" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  JK ฟลิป-ฟลอป ที่มี PS และ CLR ทำงานที่ขอบขาลงของสัญญาณนาฬิกา เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=jk; trig=fall; pins=ps; set=c; give=table}

**ตารางการทำงาน** ($x$ คือค่าอะไรก็ได้, $Q_0$ คือค่า $Q$ ก่อนมีสัญญาณกระตุ้น)

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="456" height="301" viewBox="0 0 456 301" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<text x="228" y="26" text-anchor="middle" font-family="Mitr, Tahoma, sans-serif" font-size="21" font-weight="500" fill="#e8743b">ตารางการทำงาน</text>
<g stroke="currentColor" stroke-width="1.4" fill="none">
<rect x="16" y="42" width="424" height="251"/>
<line x1="16" y1="73" x2="440" y2="73"/>
<line x1="345" y1="42" x2="345" y2="293"/>
<line x1="16" y1="154" x2="440" y2="154" stroke-width="0.9" stroke-opacity="0.55"/>
<line x1="16" y1="262" x2="440" y2="262" stroke-width="0.9" stroke-opacity="0.55"/>
</g>
<text x="57" y="63" text-anchor="middle" font-size="16">PRESET</text>
<text x="57" y="93" text-anchor="middle" font-size="16">0</text>
<text x="57" y="120" text-anchor="middle" font-size="16">0</text>
<text x="57" y="147" text-anchor="middle" font-size="16">1</text>
<text x="57" y="174" text-anchor="middle" font-size="16">1</text>
<text x="57" y="201" text-anchor="middle" font-size="16">1</text>
<text x="57" y="228" text-anchor="middle" font-size="16">1</text>
<text x="57" y="255" text-anchor="middle" font-size="16">1</text>
<text x="57" y="282" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="63" text-anchor="middle" font-size="16">CLEAR</text>
<text x="134.5" y="93" text-anchor="middle" font-size="16">0</text>
<text x="134.5" y="120" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="147" text-anchor="middle" font-size="16">0</text>
<text x="134.5" y="174" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="201" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="228" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="255" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="282" text-anchor="middle" font-size="16">1</text>
<text x="212" y="63" text-anchor="middle" font-size="16">CLOCK</text>
<text x="212" y="93" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="212" y="120" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="212" y="147" text-anchor="middle" font-size="16" font-style="italic">x</text>
<line x1="212" y1="163" x2="212" y2="176" stroke="currentColor" stroke-width="1.6"/>
<polygon points="212,177 207.5,170 216.5,170" fill="currentColor"/>
<line x1="212" y1="190" x2="212" y2="203" stroke="currentColor" stroke-width="1.6"/>
<polygon points="212,204 207.5,197 216.5,197" fill="currentColor"/>
<line x1="212" y1="217" x2="212" y2="230" stroke="currentColor" stroke-width="1.6"/>
<polygon points="212,231 207.5,224 216.5,224" fill="currentColor"/>
<line x1="212" y1="244" x2="212" y2="257" stroke="currentColor" stroke-width="1.6"/>
<polygon points="212,258 207.5,251 216.5,251" fill="currentColor"/>
<text x="212" y="282" text-anchor="middle" font-size="16" font-family="Mitr, Tahoma, sans-serif" font-size="14">ไม่มีขอบ</text>
<text x="276" y="63" text-anchor="middle" font-size="16">J</text>
<text x="276" y="93" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="276" y="120" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="276" y="147" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="276" y="174" text-anchor="middle" font-size="16">0</text>
<text x="276" y="201" text-anchor="middle" font-size="16">0</text>
<text x="276" y="228" text-anchor="middle" font-size="16">1</text>
<text x="276" y="255" text-anchor="middle" font-size="16">1</text>
<text x="276" y="282" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="322" y="63" text-anchor="middle" font-size="16">K</text>
<text x="322" y="93" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="322" y="120" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="322" y="147" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="322" y="174" text-anchor="middle" font-size="16">0</text>
<text x="322" y="201" text-anchor="middle" font-size="16">1</text>
<text x="322" y="228" text-anchor="middle" font-size="16">0</text>
<text x="322" y="255" text-anchor="middle" font-size="16">1</text>
<text x="322" y="282" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="368.8" y="63" text-anchor="middle" font-size="16">Q</text>
<text x="368.8" y="93" text-anchor="middle" font-size="16">1</text>
<text x="368.8" y="120" text-anchor="middle" font-size="16">1</text>
<text x="368.8" y="147" text-anchor="middle" font-size="16">0</text>
<text x="368.8" y="174" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<text x="368.8" y="201" text-anchor="middle" font-size="16">0</text>
<text x="368.8" y="228" text-anchor="middle" font-size="16">1</text>
<text x="368.8" y="255" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<line x1="359" y1="241" x2="370" y2="241" stroke="currentColor" stroke-width="1.3"/>
<text x="368.8" y="282" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<text x="416.2" y="63" text-anchor="middle" font-size="16">Q</text>
<line x1="410.5" y1="49" x2="421.5" y2="49" stroke="currentColor" stroke-width="1.3"/>
<text x="416.2" y="93" text-anchor="middle" font-size="16">1</text>
<text x="416.2" y="120" text-anchor="middle" font-size="16">0</text>
<text x="416.2" y="147" text-anchor="middle" font-size="16">1</text>
<text x="416.2" y="174" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<line x1="406.5" y1="160" x2="417.5" y2="160" stroke="currentColor" stroke-width="1.3"/>
<text x="416.2" y="201" text-anchor="middle" font-size="16">1</text>
<text x="416.2" y="228" text-anchor="middle" font-size="16">0</text>
<text x="416.2" y="255" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<text x="416.2" y="282" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<line x1="406.5" y1="268" x2="417.5" y2="268" stroke="currentColor" stroke-width="1.3"/>
</svg>
</div>

PS และ CLR ทำงานเมื่อเป็น $0$ และทำงานทันที ไม่ต้องรอสัญญาณนาฬิกา

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="344" viewBox="0 0 726 344" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="338"/>
<line x1="254" y1="26" x2="254" y2="338"/>
<line x1="382" y1="26" x2="382" y2="338"/>
<line x1="510" y1="26" x2="510" y2="338"/>
<line x1="638" y1="26" x2="638" y2="338"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,44 L470,44 L470,71.2 L534,71.2 L534,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,104 L550,104 L550,131.2 L614,131.2 L614,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<path d="M62,164 L126,164 L126,191.2 L190,191.2 L190,164 L254,164 L254,191.2 L318,191.2 L318,164 L382,164 L382,191.2 L446,191.2 L446,164 L510,164 L510,191.2 L574,191.2 L574,164 L638,164 L638,191.2 L702,191.2 L702,164 L702,164" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">J</text>
<path d="M62,224 L222,224 L222,251.2 L398,251.2 L398,224 L702,224" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">K</text>
<path d="M62,284 L222,284 L222,311.2 L302,311.2 L302,284 L398,284 L398,311.2 L590,311.2 L590,284 L702,284" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  D ฟลิป-ฟลอป ทำงานที่ขอบขาขึ้นของสัญญาณนาฬิกา เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=d; trig=rise; pins=none; set=a; give=wave}

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
<path d="M62,104 L174,104 L174,131.2 L350,131.2 L350,104 L574,104 L574,131.2 L702,131.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  D ฟลิป-ฟลอป ทำงานที่ขอบขาขึ้นของสัญญาณนาฬิกา เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=d; trig=rise; pins=none; set=a; give=table}

**ตารางการทำงาน** ($x$ คือค่าอะไรก็ได้, $Q_0$ คือค่า $Q$ ก่อนมีสัญญาณกระตุ้น)

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="255" height="166" viewBox="0 0 255 166" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<text x="127.5" y="26" text-anchor="middle" font-family="Mitr, Tahoma, sans-serif" font-size="21" font-weight="500" fill="#e8743b">ตารางการทำงาน</text>
<g stroke="currentColor" stroke-width="1.4" fill="none">
<rect x="16" y="42" width="223" height="116"/>
<line x1="16" y1="73" x2="239" y2="73"/>
<line x1="144" y1="42" x2="144" y2="158"/>
<line x1="16" y1="127" x2="239" y2="127" stroke-width="0.9" stroke-opacity="0.55"/>
</g>
<text x="57" y="63" text-anchor="middle" font-size="16">CLOCK</text>
<line x1="57" y1="95" x2="57" y2="82" stroke="currentColor" stroke-width="1.6"/>
<polygon points="57,81 52.5,88 61.5,88" fill="currentColor"/>
<line x1="57" y1="122" x2="57" y2="109" stroke="currentColor" stroke-width="1.6"/>
<polygon points="57,108 52.5,115 61.5,115" fill="currentColor"/>
<text x="57" y="147" text-anchor="middle" font-size="16" font-family="Mitr, Tahoma, sans-serif" font-size="14">ไม่มีขอบ</text>
<text x="121" y="63" text-anchor="middle" font-size="16">D</text>
<text x="121" y="93" text-anchor="middle" font-size="16">0</text>
<text x="121" y="120" text-anchor="middle" font-size="16">1</text>
<text x="121" y="147" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="167.8" y="63" text-anchor="middle" font-size="16">Q</text>
<text x="167.8" y="93" text-anchor="middle" font-size="16">0</text>
<text x="167.8" y="120" text-anchor="middle" font-size="16">1</text>
<text x="167.8" y="147" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<text x="215.2" y="63" text-anchor="middle" font-size="16">Q</text>
<line x1="209.5" y1="49" x2="220.5" y2="49" stroke="currentColor" stroke-width="1.3"/>
<text x="215.2" y="93" text-anchor="middle" font-size="16">1</text>
<text x="215.2" y="120" text-anchor="middle" font-size="16">0</text>
<text x="215.2" y="147" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<line x1="205.5" y1="133" x2="216.5" y2="133" stroke="currentColor" stroke-width="1.3"/>
</svg>
</div>

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
<path d="M62,104 L174,104 L174,131.2 L350,131.2 L350,104 L574,104 L574,131.2 L702,131.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  D ฟลิป-ฟลอป ทำงานที่ขอบขาขึ้นของสัญญาณนาฬิกา เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=d; trig=rise; pins=none; set=b; give=wave}

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
<path d="M62,131.2 L190,131.2 L190,104 L462,104 L462,131.2 L558,131.2 L558,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  D ฟลิป-ฟลอป ทำงานที่ขอบขาขึ้นของสัญญาณนาฬิกา เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=d; trig=rise; pins=none; set=b; give=table}

**ตารางการทำงาน** ($x$ คือค่าอะไรก็ได้, $Q_0$ คือค่า $Q$ ก่อนมีสัญญาณกระตุ้น)

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="255" height="166" viewBox="0 0 255 166" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<text x="127.5" y="26" text-anchor="middle" font-family="Mitr, Tahoma, sans-serif" font-size="21" font-weight="500" fill="#e8743b">ตารางการทำงาน</text>
<g stroke="currentColor" stroke-width="1.4" fill="none">
<rect x="16" y="42" width="223" height="116"/>
<line x1="16" y1="73" x2="239" y2="73"/>
<line x1="144" y1="42" x2="144" y2="158"/>
<line x1="16" y1="127" x2="239" y2="127" stroke-width="0.9" stroke-opacity="0.55"/>
</g>
<text x="57" y="63" text-anchor="middle" font-size="16">CLOCK</text>
<line x1="57" y1="95" x2="57" y2="82" stroke="currentColor" stroke-width="1.6"/>
<polygon points="57,81 52.5,88 61.5,88" fill="currentColor"/>
<line x1="57" y1="122" x2="57" y2="109" stroke="currentColor" stroke-width="1.6"/>
<polygon points="57,108 52.5,115 61.5,115" fill="currentColor"/>
<text x="57" y="147" text-anchor="middle" font-size="16" font-family="Mitr, Tahoma, sans-serif" font-size="14">ไม่มีขอบ</text>
<text x="121" y="63" text-anchor="middle" font-size="16">D</text>
<text x="121" y="93" text-anchor="middle" font-size="16">0</text>
<text x="121" y="120" text-anchor="middle" font-size="16">1</text>
<text x="121" y="147" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="167.8" y="63" text-anchor="middle" font-size="16">Q</text>
<text x="167.8" y="93" text-anchor="middle" font-size="16">0</text>
<text x="167.8" y="120" text-anchor="middle" font-size="16">1</text>
<text x="167.8" y="147" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<text x="215.2" y="63" text-anchor="middle" font-size="16">Q</text>
<line x1="209.5" y1="49" x2="220.5" y2="49" stroke="currentColor" stroke-width="1.3"/>
<text x="215.2" y="93" text-anchor="middle" font-size="16">1</text>
<text x="215.2" y="120" text-anchor="middle" font-size="16">0</text>
<text x="215.2" y="147" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<line x1="205.5" y1="133" x2="216.5" y2="133" stroke="currentColor" stroke-width="1.3"/>
</svg>
</div>

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
<path d="M62,131.2 L190,131.2 L190,104 L462,104 L462,131.2 L558,131.2 L558,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  D ฟลิป-ฟลอป ทำงานที่ขอบขาขึ้นของสัญญาณนาฬิกา เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=d; trig=rise; pins=none; set=c; give=wave}

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
<path d="M62,104 L302,104 L302,131.2 L398,131.2 L398,104 L590,104 L590,131.2 L702,131.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  D ฟลิป-ฟลอป ทำงานที่ขอบขาขึ้นของสัญญาณนาฬิกา เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=d; trig=rise; pins=none; set=c; give=table}

**ตารางการทำงาน** ($x$ คือค่าอะไรก็ได้, $Q_0$ คือค่า $Q$ ก่อนมีสัญญาณกระตุ้น)

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="255" height="166" viewBox="0 0 255 166" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<text x="127.5" y="26" text-anchor="middle" font-family="Mitr, Tahoma, sans-serif" font-size="21" font-weight="500" fill="#e8743b">ตารางการทำงาน</text>
<g stroke="currentColor" stroke-width="1.4" fill="none">
<rect x="16" y="42" width="223" height="116"/>
<line x1="16" y1="73" x2="239" y2="73"/>
<line x1="144" y1="42" x2="144" y2="158"/>
<line x1="16" y1="127" x2="239" y2="127" stroke-width="0.9" stroke-opacity="0.55"/>
</g>
<text x="57" y="63" text-anchor="middle" font-size="16">CLOCK</text>
<line x1="57" y1="95" x2="57" y2="82" stroke="currentColor" stroke-width="1.6"/>
<polygon points="57,81 52.5,88 61.5,88" fill="currentColor"/>
<line x1="57" y1="122" x2="57" y2="109" stroke="currentColor" stroke-width="1.6"/>
<polygon points="57,108 52.5,115 61.5,115" fill="currentColor"/>
<text x="57" y="147" text-anchor="middle" font-size="16" font-family="Mitr, Tahoma, sans-serif" font-size="14">ไม่มีขอบ</text>
<text x="121" y="63" text-anchor="middle" font-size="16">D</text>
<text x="121" y="93" text-anchor="middle" font-size="16">0</text>
<text x="121" y="120" text-anchor="middle" font-size="16">1</text>
<text x="121" y="147" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="167.8" y="63" text-anchor="middle" font-size="16">Q</text>
<text x="167.8" y="93" text-anchor="middle" font-size="16">0</text>
<text x="167.8" y="120" text-anchor="middle" font-size="16">1</text>
<text x="167.8" y="147" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<text x="215.2" y="63" text-anchor="middle" font-size="16">Q</text>
<line x1="209.5" y1="49" x2="220.5" y2="49" stroke="currentColor" stroke-width="1.3"/>
<text x="215.2" y="93" text-anchor="middle" font-size="16">1</text>
<text x="215.2" y="120" text-anchor="middle" font-size="16">0</text>
<text x="215.2" y="147" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<line x1="205.5" y1="133" x2="216.5" y2="133" stroke="currentColor" stroke-width="1.3"/>
</svg>
</div>

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
<path d="M62,104 L302,104 L302,131.2 L398,131.2 L398,104 L590,104 L590,131.2 L702,131.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  D ฟลิป-ฟลอป ที่มี PS และ CLR ทำงานที่ขอบขาขึ้นของสัญญาณนาฬิกา เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=d; trig=rise; pins=ps; set=a; give=wave}

PS และ CLR ทำงานเมื่อเป็น $0$ และทำงานทันที ไม่ต้องรอสัญญาณนาฬิกา

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="284" viewBox="0 0 726 284" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="278"/>
<line x1="254" y1="26" x2="254" y2="278"/>
<line x1="382" y1="26" x2="382" y2="278"/>
<line x1="510" y1="26" x2="510" y2="278"/>
<line x1="638" y1="26" x2="638" y2="278"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,44 L358,44 L358,71.2 L422,71.2 L422,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,104 L438,104 L438,131.2 L486,131.2 L486,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<path d="M62,191.2 L126,191.2 L126,164 L190,164 L190,191.2 L254,191.2 L254,164 L318,164 L318,191.2 L382,191.2 L382,164 L446,164 L446,191.2 L510,191.2 L510,164 L574,164 L574,191.2 L638,191.2 L638,164 L702,164 L702,191.2 L702,191.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">D</text>
<path d="M62,224 L174,224 L174,251.2 L350,251.2 L350,224 L574,224 L574,251.2 L702,251.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  D ฟลิป-ฟลอป ที่มี PS และ CLR ทำงานที่ขอบขาขึ้นของสัญญาณนาฬิกา เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=d; trig=rise; pins=ps; set=a; give=table}

**ตารางการทำงาน** ($x$ คือค่าอะไรก็ได้, $Q_0$ คือค่า $Q$ ก่อนมีสัญญาณกระตุ้น)

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="410" height="247" viewBox="0 0 410 247" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<text x="205" y="26" text-anchor="middle" font-family="Mitr, Tahoma, sans-serif" font-size="21" font-weight="500" fill="#e8743b">ตารางการทำงาน</text>
<g stroke="currentColor" stroke-width="1.4" fill="none">
<rect x="16" y="42" width="378" height="197"/>
<line x1="16" y1="73" x2="394" y2="73"/>
<line x1="299" y1="42" x2="299" y2="239"/>
<line x1="16" y1="154" x2="394" y2="154" stroke-width="0.9" stroke-opacity="0.55"/>
<line x1="16" y1="208" x2="394" y2="208" stroke-width="0.9" stroke-opacity="0.55"/>
</g>
<text x="57" y="63" text-anchor="middle" font-size="16">PRESET</text>
<text x="57" y="93" text-anchor="middle" font-size="16">0</text>
<text x="57" y="120" text-anchor="middle" font-size="16">0</text>
<text x="57" y="147" text-anchor="middle" font-size="16">1</text>
<text x="57" y="174" text-anchor="middle" font-size="16">1</text>
<text x="57" y="201" text-anchor="middle" font-size="16">1</text>
<text x="57" y="228" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="63" text-anchor="middle" font-size="16">CLEAR</text>
<text x="134.5" y="93" text-anchor="middle" font-size="16">0</text>
<text x="134.5" y="120" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="147" text-anchor="middle" font-size="16">0</text>
<text x="134.5" y="174" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="201" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="228" text-anchor="middle" font-size="16">1</text>
<text x="212" y="63" text-anchor="middle" font-size="16">CLOCK</text>
<text x="212" y="93" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="212" y="120" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="212" y="147" text-anchor="middle" font-size="16" font-style="italic">x</text>
<line x1="212" y1="176" x2="212" y2="163" stroke="currentColor" stroke-width="1.6"/>
<polygon points="212,162 207.5,169 216.5,169" fill="currentColor"/>
<line x1="212" y1="203" x2="212" y2="190" stroke="currentColor" stroke-width="1.6"/>
<polygon points="212,189 207.5,196 216.5,196" fill="currentColor"/>
<text x="212" y="228" text-anchor="middle" font-size="16" font-family="Mitr, Tahoma, sans-serif" font-size="14">ไม่มีขอบ</text>
<text x="276" y="63" text-anchor="middle" font-size="16">D</text>
<text x="276" y="93" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="276" y="120" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="276" y="147" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="276" y="174" text-anchor="middle" font-size="16">0</text>
<text x="276" y="201" text-anchor="middle" font-size="16">1</text>
<text x="276" y="228" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="322.8" y="63" text-anchor="middle" font-size="16">Q</text>
<text x="322.8" y="93" text-anchor="middle" font-size="16">1</text>
<text x="322.8" y="120" text-anchor="middle" font-size="16">1</text>
<text x="322.8" y="147" text-anchor="middle" font-size="16">0</text>
<text x="322.8" y="174" text-anchor="middle" font-size="16">0</text>
<text x="322.8" y="201" text-anchor="middle" font-size="16">1</text>
<text x="322.8" y="228" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<text x="370.2" y="63" text-anchor="middle" font-size="16">Q</text>
<line x1="364.5" y1="49" x2="375.5" y2="49" stroke="currentColor" stroke-width="1.3"/>
<text x="370.2" y="93" text-anchor="middle" font-size="16">1</text>
<text x="370.2" y="120" text-anchor="middle" font-size="16">0</text>
<text x="370.2" y="147" text-anchor="middle" font-size="16">1</text>
<text x="370.2" y="174" text-anchor="middle" font-size="16">1</text>
<text x="370.2" y="201" text-anchor="middle" font-size="16">0</text>
<text x="370.2" y="228" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<line x1="360.5" y1="214" x2="371.5" y2="214" stroke="currentColor" stroke-width="1.3"/>
</svg>
</div>

PS และ CLR ทำงานเมื่อเป็น $0$ และทำงานทันที ไม่ต้องรอสัญญาณนาฬิกา

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="284" viewBox="0 0 726 284" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="278"/>
<line x1="254" y1="26" x2="254" y2="278"/>
<line x1="382" y1="26" x2="382" y2="278"/>
<line x1="510" y1="26" x2="510" y2="278"/>
<line x1="638" y1="26" x2="638" y2="278"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,44 L358,44 L358,71.2 L422,71.2 L422,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,104 L438,104 L438,131.2 L486,131.2 L486,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<path d="M62,191.2 L126,191.2 L126,164 L190,164 L190,191.2 L254,191.2 L254,164 L318,164 L318,191.2 L382,191.2 L382,164 L446,164 L446,191.2 L510,191.2 L510,164 L574,164 L574,191.2 L638,191.2 L638,164 L702,164 L702,191.2 L702,191.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">D</text>
<path d="M62,224 L174,224 L174,251.2 L350,251.2 L350,224 L574,224 L574,251.2 L702,251.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  D ฟลิป-ฟลอป ที่มี PS และ CLR ทำงานที่ขอบขาขึ้นของสัญญาณนาฬิกา เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=d; trig=rise; pins=ps; set=b; give=wave}

PS และ CLR ทำงานเมื่อเป็น $0$ และทำงานทันที ไม่ต้องรอสัญญาณนาฬิกา

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="284" viewBox="0 0 726 284" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="278"/>
<line x1="254" y1="26" x2="254" y2="278"/>
<line x1="382" y1="26" x2="382" y2="278"/>
<line x1="510" y1="26" x2="510" y2="278"/>
<line x1="638" y1="26" x2="638" y2="278"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,44 L606,44 L606,71.2 L670,71.2 L670,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,104 L294,104 L294,131.2 L358,131.2 L358,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<path d="M62,191.2 L126,191.2 L126,164 L190,164 L190,191.2 L254,191.2 L254,164 L318,164 L318,191.2 L382,191.2 L382,164 L446,164 L446,191.2 L510,191.2 L510,164 L574,164 L574,191.2 L638,191.2 L638,164 L702,164 L702,191.2 L702,191.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">D</text>
<path d="M62,251.2 L190,251.2 L190,224 L462,224 L462,251.2 L558,251.2 L558,224 L702,224" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  D ฟลิป-ฟลอป ที่มี PS และ CLR ทำงานที่ขอบขาขึ้นของสัญญาณนาฬิกา เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=d; trig=rise; pins=ps; set=b; give=table}

**ตารางการทำงาน** ($x$ คือค่าอะไรก็ได้, $Q_0$ คือค่า $Q$ ก่อนมีสัญญาณกระตุ้น)

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="410" height="247" viewBox="0 0 410 247" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<text x="205" y="26" text-anchor="middle" font-family="Mitr, Tahoma, sans-serif" font-size="21" font-weight="500" fill="#e8743b">ตารางการทำงาน</text>
<g stroke="currentColor" stroke-width="1.4" fill="none">
<rect x="16" y="42" width="378" height="197"/>
<line x1="16" y1="73" x2="394" y2="73"/>
<line x1="299" y1="42" x2="299" y2="239"/>
<line x1="16" y1="154" x2="394" y2="154" stroke-width="0.9" stroke-opacity="0.55"/>
<line x1="16" y1="208" x2="394" y2="208" stroke-width="0.9" stroke-opacity="0.55"/>
</g>
<text x="57" y="63" text-anchor="middle" font-size="16">PRESET</text>
<text x="57" y="93" text-anchor="middle" font-size="16">0</text>
<text x="57" y="120" text-anchor="middle" font-size="16">0</text>
<text x="57" y="147" text-anchor="middle" font-size="16">1</text>
<text x="57" y="174" text-anchor="middle" font-size="16">1</text>
<text x="57" y="201" text-anchor="middle" font-size="16">1</text>
<text x="57" y="228" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="63" text-anchor="middle" font-size="16">CLEAR</text>
<text x="134.5" y="93" text-anchor="middle" font-size="16">0</text>
<text x="134.5" y="120" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="147" text-anchor="middle" font-size="16">0</text>
<text x="134.5" y="174" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="201" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="228" text-anchor="middle" font-size="16">1</text>
<text x="212" y="63" text-anchor="middle" font-size="16">CLOCK</text>
<text x="212" y="93" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="212" y="120" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="212" y="147" text-anchor="middle" font-size="16" font-style="italic">x</text>
<line x1="212" y1="176" x2="212" y2="163" stroke="currentColor" stroke-width="1.6"/>
<polygon points="212,162 207.5,169 216.5,169" fill="currentColor"/>
<line x1="212" y1="203" x2="212" y2="190" stroke="currentColor" stroke-width="1.6"/>
<polygon points="212,189 207.5,196 216.5,196" fill="currentColor"/>
<text x="212" y="228" text-anchor="middle" font-size="16" font-family="Mitr, Tahoma, sans-serif" font-size="14">ไม่มีขอบ</text>
<text x="276" y="63" text-anchor="middle" font-size="16">D</text>
<text x="276" y="93" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="276" y="120" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="276" y="147" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="276" y="174" text-anchor="middle" font-size="16">0</text>
<text x="276" y="201" text-anchor="middle" font-size="16">1</text>
<text x="276" y="228" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="322.8" y="63" text-anchor="middle" font-size="16">Q</text>
<text x="322.8" y="93" text-anchor="middle" font-size="16">1</text>
<text x="322.8" y="120" text-anchor="middle" font-size="16">1</text>
<text x="322.8" y="147" text-anchor="middle" font-size="16">0</text>
<text x="322.8" y="174" text-anchor="middle" font-size="16">0</text>
<text x="322.8" y="201" text-anchor="middle" font-size="16">1</text>
<text x="322.8" y="228" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<text x="370.2" y="63" text-anchor="middle" font-size="16">Q</text>
<line x1="364.5" y1="49" x2="375.5" y2="49" stroke="currentColor" stroke-width="1.3"/>
<text x="370.2" y="93" text-anchor="middle" font-size="16">1</text>
<text x="370.2" y="120" text-anchor="middle" font-size="16">0</text>
<text x="370.2" y="147" text-anchor="middle" font-size="16">1</text>
<text x="370.2" y="174" text-anchor="middle" font-size="16">1</text>
<text x="370.2" y="201" text-anchor="middle" font-size="16">0</text>
<text x="370.2" y="228" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<line x1="360.5" y1="214" x2="371.5" y2="214" stroke="currentColor" stroke-width="1.3"/>
</svg>
</div>

PS และ CLR ทำงานเมื่อเป็น $0$ และทำงานทันที ไม่ต้องรอสัญญาณนาฬิกา

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="284" viewBox="0 0 726 284" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="278"/>
<line x1="254" y1="26" x2="254" y2="278"/>
<line x1="382" y1="26" x2="382" y2="278"/>
<line x1="510" y1="26" x2="510" y2="278"/>
<line x1="638" y1="26" x2="638" y2="278"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,44 L606,44 L606,71.2 L670,71.2 L670,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,104 L294,104 L294,131.2 L358,131.2 L358,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<path d="M62,191.2 L126,191.2 L126,164 L190,164 L190,191.2 L254,191.2 L254,164 L318,164 L318,191.2 L382,191.2 L382,164 L446,164 L446,191.2 L510,191.2 L510,164 L574,164 L574,191.2 L638,191.2 L638,164 L702,164 L702,191.2 L702,191.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">D</text>
<path d="M62,251.2 L190,251.2 L190,224 L462,224 L462,251.2 L558,251.2 L558,224 L702,224" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  D ฟลิป-ฟลอป ที่มี PS และ CLR ทำงานที่ขอบขาขึ้นของสัญญาณนาฬิกา เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=d; trig=rise; pins=ps; set=c; give=wave}

PS และ CLR ทำงานเมื่อเป็น $0$ และทำงานทันที ไม่ต้องรอสัญญาณนาฬิกา

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="284" viewBox="0 0 726 284" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="278"/>
<line x1="254" y1="26" x2="254" y2="278"/>
<line x1="382" y1="26" x2="382" y2="278"/>
<line x1="510" y1="26" x2="510" y2="278"/>
<line x1="638" y1="26" x2="638" y2="278"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,44 L478,44 L478,71.2 L542,71.2 L542,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,104 L166,104 L166,131.2 L238,131.2 L238,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<path d="M62,191.2 L126,191.2 L126,164 L190,164 L190,191.2 L254,191.2 L254,164 L318,164 L318,191.2 L382,191.2 L382,164 L446,164 L446,191.2 L510,191.2 L510,164 L574,164 L574,191.2 L638,191.2 L638,164 L702,164 L702,191.2 L702,191.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">D</text>
<path d="M62,224 L302,224 L302,251.2 L398,251.2 L398,224 L590,224 L590,251.2 L702,251.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  D ฟลิป-ฟลอป ที่มี PS และ CLR ทำงานที่ขอบขาขึ้นของสัญญาณนาฬิกา เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=d; trig=rise; pins=ps; set=c; give=table}

**ตารางการทำงาน** ($x$ คือค่าอะไรก็ได้, $Q_0$ คือค่า $Q$ ก่อนมีสัญญาณกระตุ้น)

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="410" height="247" viewBox="0 0 410 247" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<text x="205" y="26" text-anchor="middle" font-family="Mitr, Tahoma, sans-serif" font-size="21" font-weight="500" fill="#e8743b">ตารางการทำงาน</text>
<g stroke="currentColor" stroke-width="1.4" fill="none">
<rect x="16" y="42" width="378" height="197"/>
<line x1="16" y1="73" x2="394" y2="73"/>
<line x1="299" y1="42" x2="299" y2="239"/>
<line x1="16" y1="154" x2="394" y2="154" stroke-width="0.9" stroke-opacity="0.55"/>
<line x1="16" y1="208" x2="394" y2="208" stroke-width="0.9" stroke-opacity="0.55"/>
</g>
<text x="57" y="63" text-anchor="middle" font-size="16">PRESET</text>
<text x="57" y="93" text-anchor="middle" font-size="16">0</text>
<text x="57" y="120" text-anchor="middle" font-size="16">0</text>
<text x="57" y="147" text-anchor="middle" font-size="16">1</text>
<text x="57" y="174" text-anchor="middle" font-size="16">1</text>
<text x="57" y="201" text-anchor="middle" font-size="16">1</text>
<text x="57" y="228" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="63" text-anchor="middle" font-size="16">CLEAR</text>
<text x="134.5" y="93" text-anchor="middle" font-size="16">0</text>
<text x="134.5" y="120" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="147" text-anchor="middle" font-size="16">0</text>
<text x="134.5" y="174" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="201" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="228" text-anchor="middle" font-size="16">1</text>
<text x="212" y="63" text-anchor="middle" font-size="16">CLOCK</text>
<text x="212" y="93" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="212" y="120" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="212" y="147" text-anchor="middle" font-size="16" font-style="italic">x</text>
<line x1="212" y1="176" x2="212" y2="163" stroke="currentColor" stroke-width="1.6"/>
<polygon points="212,162 207.5,169 216.5,169" fill="currentColor"/>
<line x1="212" y1="203" x2="212" y2="190" stroke="currentColor" stroke-width="1.6"/>
<polygon points="212,189 207.5,196 216.5,196" fill="currentColor"/>
<text x="212" y="228" text-anchor="middle" font-size="16" font-family="Mitr, Tahoma, sans-serif" font-size="14">ไม่มีขอบ</text>
<text x="276" y="63" text-anchor="middle" font-size="16">D</text>
<text x="276" y="93" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="276" y="120" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="276" y="147" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="276" y="174" text-anchor="middle" font-size="16">0</text>
<text x="276" y="201" text-anchor="middle" font-size="16">1</text>
<text x="276" y="228" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="322.8" y="63" text-anchor="middle" font-size="16">Q</text>
<text x="322.8" y="93" text-anchor="middle" font-size="16">1</text>
<text x="322.8" y="120" text-anchor="middle" font-size="16">1</text>
<text x="322.8" y="147" text-anchor="middle" font-size="16">0</text>
<text x="322.8" y="174" text-anchor="middle" font-size="16">0</text>
<text x="322.8" y="201" text-anchor="middle" font-size="16">1</text>
<text x="322.8" y="228" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<text x="370.2" y="63" text-anchor="middle" font-size="16">Q</text>
<line x1="364.5" y1="49" x2="375.5" y2="49" stroke="currentColor" stroke-width="1.3"/>
<text x="370.2" y="93" text-anchor="middle" font-size="16">1</text>
<text x="370.2" y="120" text-anchor="middle" font-size="16">0</text>
<text x="370.2" y="147" text-anchor="middle" font-size="16">1</text>
<text x="370.2" y="174" text-anchor="middle" font-size="16">1</text>
<text x="370.2" y="201" text-anchor="middle" font-size="16">0</text>
<text x="370.2" y="228" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<line x1="360.5" y1="214" x2="371.5" y2="214" stroke="currentColor" stroke-width="1.3"/>
</svg>
</div>

PS และ CLR ทำงานเมื่อเป็น $0$ และทำงานทันที ไม่ต้องรอสัญญาณนาฬิกา

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="284" viewBox="0 0 726 284" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="278"/>
<line x1="254" y1="26" x2="254" y2="278"/>
<line x1="382" y1="26" x2="382" y2="278"/>
<line x1="510" y1="26" x2="510" y2="278"/>
<line x1="638" y1="26" x2="638" y2="278"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,44 L478,44 L478,71.2 L542,71.2 L542,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,104 L166,104 L166,131.2 L238,131.2 L238,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<path d="M62,191.2 L126,191.2 L126,164 L190,164 L190,191.2 L254,191.2 L254,164 L318,164 L318,191.2 L382,191.2 L382,164 L446,164 L446,191.2 L510,191.2 L510,164 L574,164 L574,191.2 L638,191.2 L638,164 L702,164 L702,191.2 L702,191.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">D</text>
<path d="M62,224 L302,224 L302,251.2 L398,251.2 L398,224 L590,224 L590,251.2 L702,251.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  D ฟลิป-ฟลอป ทำงานที่ขอบขาลงของสัญญาณนาฬิกา เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=d; trig=fall; pins=none; set=a; give=wave}

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
<path d="M62,44 L126,44 L126,71.2 L190,71.2 L190,44 L254,44 L254,71.2 L318,71.2 L318,44 L382,44 L382,71.2 L446,71.2 L446,44 L510,44 L510,71.2 L574,71.2 L574,44 L638,44 L638,71.2 L702,71.2 L702,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">D</text>
<path d="M62,104 L174,104 L174,131.2 L350,131.2 L350,104 L574,104 L574,131.2 L702,131.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  D ฟลิป-ฟลอป ทำงานที่ขอบขาลงของสัญญาณนาฬิกา เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=d; trig=fall; pins=none; set=a; give=table}

**ตารางการทำงาน** ($x$ คือค่าอะไรก็ได้, $Q_0$ คือค่า $Q$ ก่อนมีสัญญาณกระตุ้น)

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="255" height="166" viewBox="0 0 255 166" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<text x="127.5" y="26" text-anchor="middle" font-family="Mitr, Tahoma, sans-serif" font-size="21" font-weight="500" fill="#e8743b">ตารางการทำงาน</text>
<g stroke="currentColor" stroke-width="1.4" fill="none">
<rect x="16" y="42" width="223" height="116"/>
<line x1="16" y1="73" x2="239" y2="73"/>
<line x1="144" y1="42" x2="144" y2="158"/>
<line x1="16" y1="127" x2="239" y2="127" stroke-width="0.9" stroke-opacity="0.55"/>
</g>
<text x="57" y="63" text-anchor="middle" font-size="16">CLOCK</text>
<line x1="57" y1="82" x2="57" y2="95" stroke="currentColor" stroke-width="1.6"/>
<polygon points="57,96 52.5,89 61.5,89" fill="currentColor"/>
<line x1="57" y1="109" x2="57" y2="122" stroke="currentColor" stroke-width="1.6"/>
<polygon points="57,123 52.5,116 61.5,116" fill="currentColor"/>
<text x="57" y="147" text-anchor="middle" font-size="16" font-family="Mitr, Tahoma, sans-serif" font-size="14">ไม่มีขอบ</text>
<text x="121" y="63" text-anchor="middle" font-size="16">D</text>
<text x="121" y="93" text-anchor="middle" font-size="16">0</text>
<text x="121" y="120" text-anchor="middle" font-size="16">1</text>
<text x="121" y="147" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="167.8" y="63" text-anchor="middle" font-size="16">Q</text>
<text x="167.8" y="93" text-anchor="middle" font-size="16">0</text>
<text x="167.8" y="120" text-anchor="middle" font-size="16">1</text>
<text x="167.8" y="147" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<text x="215.2" y="63" text-anchor="middle" font-size="16">Q</text>
<line x1="209.5" y1="49" x2="220.5" y2="49" stroke="currentColor" stroke-width="1.3"/>
<text x="215.2" y="93" text-anchor="middle" font-size="16">1</text>
<text x="215.2" y="120" text-anchor="middle" font-size="16">0</text>
<text x="215.2" y="147" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<line x1="205.5" y1="133" x2="216.5" y2="133" stroke="currentColor" stroke-width="1.3"/>
</svg>
</div>

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
<path d="M62,44 L126,44 L126,71.2 L190,71.2 L190,44 L254,44 L254,71.2 L318,71.2 L318,44 L382,44 L382,71.2 L446,71.2 L446,44 L510,44 L510,71.2 L574,71.2 L574,44 L638,44 L638,71.2 L702,71.2 L702,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">D</text>
<path d="M62,104 L174,104 L174,131.2 L350,131.2 L350,104 L574,104 L574,131.2 L702,131.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  D ฟลิป-ฟลอป ทำงานที่ขอบขาลงของสัญญาณนาฬิกา เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=d; trig=fall; pins=none; set=b; give=wave}

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
<path d="M62,44 L126,44 L126,71.2 L190,71.2 L190,44 L254,44 L254,71.2 L318,71.2 L318,44 L382,44 L382,71.2 L446,71.2 L446,44 L510,44 L510,71.2 L574,71.2 L574,44 L638,44 L638,71.2 L702,71.2 L702,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">D</text>
<path d="M62,131.2 L190,131.2 L190,104 L462,104 L462,131.2 L558,131.2 L558,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  D ฟลิป-ฟลอป ทำงานที่ขอบขาลงของสัญญาณนาฬิกา เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=d; trig=fall; pins=none; set=b; give=table}

**ตารางการทำงาน** ($x$ คือค่าอะไรก็ได้, $Q_0$ คือค่า $Q$ ก่อนมีสัญญาณกระตุ้น)

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="255" height="166" viewBox="0 0 255 166" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<text x="127.5" y="26" text-anchor="middle" font-family="Mitr, Tahoma, sans-serif" font-size="21" font-weight="500" fill="#e8743b">ตารางการทำงาน</text>
<g stroke="currentColor" stroke-width="1.4" fill="none">
<rect x="16" y="42" width="223" height="116"/>
<line x1="16" y1="73" x2="239" y2="73"/>
<line x1="144" y1="42" x2="144" y2="158"/>
<line x1="16" y1="127" x2="239" y2="127" stroke-width="0.9" stroke-opacity="0.55"/>
</g>
<text x="57" y="63" text-anchor="middle" font-size="16">CLOCK</text>
<line x1="57" y1="82" x2="57" y2="95" stroke="currentColor" stroke-width="1.6"/>
<polygon points="57,96 52.5,89 61.5,89" fill="currentColor"/>
<line x1="57" y1="109" x2="57" y2="122" stroke="currentColor" stroke-width="1.6"/>
<polygon points="57,123 52.5,116 61.5,116" fill="currentColor"/>
<text x="57" y="147" text-anchor="middle" font-size="16" font-family="Mitr, Tahoma, sans-serif" font-size="14">ไม่มีขอบ</text>
<text x="121" y="63" text-anchor="middle" font-size="16">D</text>
<text x="121" y="93" text-anchor="middle" font-size="16">0</text>
<text x="121" y="120" text-anchor="middle" font-size="16">1</text>
<text x="121" y="147" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="167.8" y="63" text-anchor="middle" font-size="16">Q</text>
<text x="167.8" y="93" text-anchor="middle" font-size="16">0</text>
<text x="167.8" y="120" text-anchor="middle" font-size="16">1</text>
<text x="167.8" y="147" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<text x="215.2" y="63" text-anchor="middle" font-size="16">Q</text>
<line x1="209.5" y1="49" x2="220.5" y2="49" stroke="currentColor" stroke-width="1.3"/>
<text x="215.2" y="93" text-anchor="middle" font-size="16">1</text>
<text x="215.2" y="120" text-anchor="middle" font-size="16">0</text>
<text x="215.2" y="147" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<line x1="205.5" y1="133" x2="216.5" y2="133" stroke="currentColor" stroke-width="1.3"/>
</svg>
</div>

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
<path d="M62,44 L126,44 L126,71.2 L190,71.2 L190,44 L254,44 L254,71.2 L318,71.2 L318,44 L382,44 L382,71.2 L446,71.2 L446,44 L510,44 L510,71.2 L574,71.2 L574,44 L638,44 L638,71.2 L702,71.2 L702,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">D</text>
<path d="M62,131.2 L190,131.2 L190,104 L462,104 L462,131.2 L558,131.2 L558,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  D ฟลิป-ฟลอป ทำงานที่ขอบขาลงของสัญญาณนาฬิกา เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=d; trig=fall; pins=none; set=c; give=wave}

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
<path d="M62,44 L126,44 L126,71.2 L190,71.2 L190,44 L254,44 L254,71.2 L318,71.2 L318,44 L382,44 L382,71.2 L446,71.2 L446,44 L510,44 L510,71.2 L574,71.2 L574,44 L638,44 L638,71.2 L702,71.2 L702,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">D</text>
<path d="M62,104 L302,104 L302,131.2 L398,131.2 L398,104 L590,104 L590,131.2 L702,131.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  D ฟลิป-ฟลอป ทำงานที่ขอบขาลงของสัญญาณนาฬิกา เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=d; trig=fall; pins=none; set=c; give=table}

**ตารางการทำงาน** ($x$ คือค่าอะไรก็ได้, $Q_0$ คือค่า $Q$ ก่อนมีสัญญาณกระตุ้น)

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="255" height="166" viewBox="0 0 255 166" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<text x="127.5" y="26" text-anchor="middle" font-family="Mitr, Tahoma, sans-serif" font-size="21" font-weight="500" fill="#e8743b">ตารางการทำงาน</text>
<g stroke="currentColor" stroke-width="1.4" fill="none">
<rect x="16" y="42" width="223" height="116"/>
<line x1="16" y1="73" x2="239" y2="73"/>
<line x1="144" y1="42" x2="144" y2="158"/>
<line x1="16" y1="127" x2="239" y2="127" stroke-width="0.9" stroke-opacity="0.55"/>
</g>
<text x="57" y="63" text-anchor="middle" font-size="16">CLOCK</text>
<line x1="57" y1="82" x2="57" y2="95" stroke="currentColor" stroke-width="1.6"/>
<polygon points="57,96 52.5,89 61.5,89" fill="currentColor"/>
<line x1="57" y1="109" x2="57" y2="122" stroke="currentColor" stroke-width="1.6"/>
<polygon points="57,123 52.5,116 61.5,116" fill="currentColor"/>
<text x="57" y="147" text-anchor="middle" font-size="16" font-family="Mitr, Tahoma, sans-serif" font-size="14">ไม่มีขอบ</text>
<text x="121" y="63" text-anchor="middle" font-size="16">D</text>
<text x="121" y="93" text-anchor="middle" font-size="16">0</text>
<text x="121" y="120" text-anchor="middle" font-size="16">1</text>
<text x="121" y="147" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="167.8" y="63" text-anchor="middle" font-size="16">Q</text>
<text x="167.8" y="93" text-anchor="middle" font-size="16">0</text>
<text x="167.8" y="120" text-anchor="middle" font-size="16">1</text>
<text x="167.8" y="147" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<text x="215.2" y="63" text-anchor="middle" font-size="16">Q</text>
<line x1="209.5" y1="49" x2="220.5" y2="49" stroke="currentColor" stroke-width="1.3"/>
<text x="215.2" y="93" text-anchor="middle" font-size="16">1</text>
<text x="215.2" y="120" text-anchor="middle" font-size="16">0</text>
<text x="215.2" y="147" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<line x1="205.5" y1="133" x2="216.5" y2="133" stroke="currentColor" stroke-width="1.3"/>
</svg>
</div>

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
<path d="M62,44 L126,44 L126,71.2 L190,71.2 L190,44 L254,44 L254,71.2 L318,71.2 L318,44 L382,44 L382,71.2 L446,71.2 L446,44 L510,44 L510,71.2 L574,71.2 L574,44 L638,44 L638,71.2 L702,71.2 L702,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">D</text>
<path d="M62,104 L302,104 L302,131.2 L398,131.2 L398,104 L590,104 L590,131.2 L702,131.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  D ฟลิป-ฟลอป ที่มี PS และ CLR ทำงานที่ขอบขาลงของสัญญาณนาฬิกา เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=d; trig=fall; pins=ps; set=a; give=wave}

PS และ CLR ทำงานเมื่อเป็น $0$ และทำงานทันที ไม่ต้องรอสัญญาณนาฬิกา

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="284" viewBox="0 0 726 284" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="278"/>
<line x1="254" y1="26" x2="254" y2="278"/>
<line x1="382" y1="26" x2="382" y2="278"/>
<line x1="510" y1="26" x2="510" y2="278"/>
<line x1="638" y1="26" x2="638" y2="278"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,44 L358,44 L358,71.2 L422,71.2 L422,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,104 L438,104 L438,131.2 L486,131.2 L486,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<path d="M62,164 L126,164 L126,191.2 L190,191.2 L190,164 L254,164 L254,191.2 L318,191.2 L318,164 L382,164 L382,191.2 L446,191.2 L446,164 L510,164 L510,191.2 L574,191.2 L574,164 L638,164 L638,191.2 L702,191.2 L702,164 L702,164" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">D</text>
<path d="M62,224 L174,224 L174,251.2 L350,251.2 L350,224 L574,224 L574,251.2 L702,251.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  D ฟลิป-ฟลอป ที่มี PS และ CLR ทำงานที่ขอบขาลงของสัญญาณนาฬิกา เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=d; trig=fall; pins=ps; set=a; give=table}

**ตารางการทำงาน** ($x$ คือค่าอะไรก็ได้, $Q_0$ คือค่า $Q$ ก่อนมีสัญญาณกระตุ้น)

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="410" height="247" viewBox="0 0 410 247" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<text x="205" y="26" text-anchor="middle" font-family="Mitr, Tahoma, sans-serif" font-size="21" font-weight="500" fill="#e8743b">ตารางการทำงาน</text>
<g stroke="currentColor" stroke-width="1.4" fill="none">
<rect x="16" y="42" width="378" height="197"/>
<line x1="16" y1="73" x2="394" y2="73"/>
<line x1="299" y1="42" x2="299" y2="239"/>
<line x1="16" y1="154" x2="394" y2="154" stroke-width="0.9" stroke-opacity="0.55"/>
<line x1="16" y1="208" x2="394" y2="208" stroke-width="0.9" stroke-opacity="0.55"/>
</g>
<text x="57" y="63" text-anchor="middle" font-size="16">PRESET</text>
<text x="57" y="93" text-anchor="middle" font-size="16">0</text>
<text x="57" y="120" text-anchor="middle" font-size="16">0</text>
<text x="57" y="147" text-anchor="middle" font-size="16">1</text>
<text x="57" y="174" text-anchor="middle" font-size="16">1</text>
<text x="57" y="201" text-anchor="middle" font-size="16">1</text>
<text x="57" y="228" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="63" text-anchor="middle" font-size="16">CLEAR</text>
<text x="134.5" y="93" text-anchor="middle" font-size="16">0</text>
<text x="134.5" y="120" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="147" text-anchor="middle" font-size="16">0</text>
<text x="134.5" y="174" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="201" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="228" text-anchor="middle" font-size="16">1</text>
<text x="212" y="63" text-anchor="middle" font-size="16">CLOCK</text>
<text x="212" y="93" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="212" y="120" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="212" y="147" text-anchor="middle" font-size="16" font-style="italic">x</text>
<line x1="212" y1="163" x2="212" y2="176" stroke="currentColor" stroke-width="1.6"/>
<polygon points="212,177 207.5,170 216.5,170" fill="currentColor"/>
<line x1="212" y1="190" x2="212" y2="203" stroke="currentColor" stroke-width="1.6"/>
<polygon points="212,204 207.5,197 216.5,197" fill="currentColor"/>
<text x="212" y="228" text-anchor="middle" font-size="16" font-family="Mitr, Tahoma, sans-serif" font-size="14">ไม่มีขอบ</text>
<text x="276" y="63" text-anchor="middle" font-size="16">D</text>
<text x="276" y="93" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="276" y="120" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="276" y="147" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="276" y="174" text-anchor="middle" font-size="16">0</text>
<text x="276" y="201" text-anchor="middle" font-size="16">1</text>
<text x="276" y="228" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="322.8" y="63" text-anchor="middle" font-size="16">Q</text>
<text x="322.8" y="93" text-anchor="middle" font-size="16">1</text>
<text x="322.8" y="120" text-anchor="middle" font-size="16">1</text>
<text x="322.8" y="147" text-anchor="middle" font-size="16">0</text>
<text x="322.8" y="174" text-anchor="middle" font-size="16">0</text>
<text x="322.8" y="201" text-anchor="middle" font-size="16">1</text>
<text x="322.8" y="228" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<text x="370.2" y="63" text-anchor="middle" font-size="16">Q</text>
<line x1="364.5" y1="49" x2="375.5" y2="49" stroke="currentColor" stroke-width="1.3"/>
<text x="370.2" y="93" text-anchor="middle" font-size="16">1</text>
<text x="370.2" y="120" text-anchor="middle" font-size="16">0</text>
<text x="370.2" y="147" text-anchor="middle" font-size="16">1</text>
<text x="370.2" y="174" text-anchor="middle" font-size="16">1</text>
<text x="370.2" y="201" text-anchor="middle" font-size="16">0</text>
<text x="370.2" y="228" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<line x1="360.5" y1="214" x2="371.5" y2="214" stroke="currentColor" stroke-width="1.3"/>
</svg>
</div>

PS และ CLR ทำงานเมื่อเป็น $0$ และทำงานทันที ไม่ต้องรอสัญญาณนาฬิกา

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="284" viewBox="0 0 726 284" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="278"/>
<line x1="254" y1="26" x2="254" y2="278"/>
<line x1="382" y1="26" x2="382" y2="278"/>
<line x1="510" y1="26" x2="510" y2="278"/>
<line x1="638" y1="26" x2="638" y2="278"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,44 L358,44 L358,71.2 L422,71.2 L422,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,104 L438,104 L438,131.2 L486,131.2 L486,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<path d="M62,164 L126,164 L126,191.2 L190,191.2 L190,164 L254,164 L254,191.2 L318,191.2 L318,164 L382,164 L382,191.2 L446,191.2 L446,164 L510,164 L510,191.2 L574,191.2 L574,164 L638,164 L638,191.2 L702,191.2 L702,164 L702,164" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">D</text>
<path d="M62,224 L174,224 L174,251.2 L350,251.2 L350,224 L574,224 L574,251.2 L702,251.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  D ฟลิป-ฟลอป ที่มี PS และ CLR ทำงานที่ขอบขาลงของสัญญาณนาฬิกา เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=d; trig=fall; pins=ps; set=b; give=wave}

PS และ CLR ทำงานเมื่อเป็น $0$ และทำงานทันที ไม่ต้องรอสัญญาณนาฬิกา

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="284" viewBox="0 0 726 284" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="278"/>
<line x1="254" y1="26" x2="254" y2="278"/>
<line x1="382" y1="26" x2="382" y2="278"/>
<line x1="510" y1="26" x2="510" y2="278"/>
<line x1="638" y1="26" x2="638" y2="278"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,44 L606,44 L606,71.2 L670,71.2 L670,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,104 L294,104 L294,131.2 L358,131.2 L358,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<path d="M62,164 L126,164 L126,191.2 L190,191.2 L190,164 L254,164 L254,191.2 L318,191.2 L318,164 L382,164 L382,191.2 L446,191.2 L446,164 L510,164 L510,191.2 L574,191.2 L574,164 L638,164 L638,191.2 L702,191.2 L702,164 L702,164" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">D</text>
<path d="M62,251.2 L190,251.2 L190,224 L462,224 L462,251.2 L558,251.2 L558,224 L702,224" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  D ฟลิป-ฟลอป ที่มี PS และ CLR ทำงานที่ขอบขาลงของสัญญาณนาฬิกา เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=d; trig=fall; pins=ps; set=b; give=table}

**ตารางการทำงาน** ($x$ คือค่าอะไรก็ได้, $Q_0$ คือค่า $Q$ ก่อนมีสัญญาณกระตุ้น)

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="410" height="247" viewBox="0 0 410 247" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<text x="205" y="26" text-anchor="middle" font-family="Mitr, Tahoma, sans-serif" font-size="21" font-weight="500" fill="#e8743b">ตารางการทำงาน</text>
<g stroke="currentColor" stroke-width="1.4" fill="none">
<rect x="16" y="42" width="378" height="197"/>
<line x1="16" y1="73" x2="394" y2="73"/>
<line x1="299" y1="42" x2="299" y2="239"/>
<line x1="16" y1="154" x2="394" y2="154" stroke-width="0.9" stroke-opacity="0.55"/>
<line x1="16" y1="208" x2="394" y2="208" stroke-width="0.9" stroke-opacity="0.55"/>
</g>
<text x="57" y="63" text-anchor="middle" font-size="16">PRESET</text>
<text x="57" y="93" text-anchor="middle" font-size="16">0</text>
<text x="57" y="120" text-anchor="middle" font-size="16">0</text>
<text x="57" y="147" text-anchor="middle" font-size="16">1</text>
<text x="57" y="174" text-anchor="middle" font-size="16">1</text>
<text x="57" y="201" text-anchor="middle" font-size="16">1</text>
<text x="57" y="228" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="63" text-anchor="middle" font-size="16">CLEAR</text>
<text x="134.5" y="93" text-anchor="middle" font-size="16">0</text>
<text x="134.5" y="120" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="147" text-anchor="middle" font-size="16">0</text>
<text x="134.5" y="174" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="201" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="228" text-anchor="middle" font-size="16">1</text>
<text x="212" y="63" text-anchor="middle" font-size="16">CLOCK</text>
<text x="212" y="93" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="212" y="120" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="212" y="147" text-anchor="middle" font-size="16" font-style="italic">x</text>
<line x1="212" y1="163" x2="212" y2="176" stroke="currentColor" stroke-width="1.6"/>
<polygon points="212,177 207.5,170 216.5,170" fill="currentColor"/>
<line x1="212" y1="190" x2="212" y2="203" stroke="currentColor" stroke-width="1.6"/>
<polygon points="212,204 207.5,197 216.5,197" fill="currentColor"/>
<text x="212" y="228" text-anchor="middle" font-size="16" font-family="Mitr, Tahoma, sans-serif" font-size="14">ไม่มีขอบ</text>
<text x="276" y="63" text-anchor="middle" font-size="16">D</text>
<text x="276" y="93" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="276" y="120" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="276" y="147" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="276" y="174" text-anchor="middle" font-size="16">0</text>
<text x="276" y="201" text-anchor="middle" font-size="16">1</text>
<text x="276" y="228" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="322.8" y="63" text-anchor="middle" font-size="16">Q</text>
<text x="322.8" y="93" text-anchor="middle" font-size="16">1</text>
<text x="322.8" y="120" text-anchor="middle" font-size="16">1</text>
<text x="322.8" y="147" text-anchor="middle" font-size="16">0</text>
<text x="322.8" y="174" text-anchor="middle" font-size="16">0</text>
<text x="322.8" y="201" text-anchor="middle" font-size="16">1</text>
<text x="322.8" y="228" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<text x="370.2" y="63" text-anchor="middle" font-size="16">Q</text>
<line x1="364.5" y1="49" x2="375.5" y2="49" stroke="currentColor" stroke-width="1.3"/>
<text x="370.2" y="93" text-anchor="middle" font-size="16">1</text>
<text x="370.2" y="120" text-anchor="middle" font-size="16">0</text>
<text x="370.2" y="147" text-anchor="middle" font-size="16">1</text>
<text x="370.2" y="174" text-anchor="middle" font-size="16">1</text>
<text x="370.2" y="201" text-anchor="middle" font-size="16">0</text>
<text x="370.2" y="228" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<line x1="360.5" y1="214" x2="371.5" y2="214" stroke="currentColor" stroke-width="1.3"/>
</svg>
</div>

PS และ CLR ทำงานเมื่อเป็น $0$ และทำงานทันที ไม่ต้องรอสัญญาณนาฬิกา

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="284" viewBox="0 0 726 284" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="278"/>
<line x1="254" y1="26" x2="254" y2="278"/>
<line x1="382" y1="26" x2="382" y2="278"/>
<line x1="510" y1="26" x2="510" y2="278"/>
<line x1="638" y1="26" x2="638" y2="278"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,44 L606,44 L606,71.2 L670,71.2 L670,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,104 L294,104 L294,131.2 L358,131.2 L358,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<path d="M62,164 L126,164 L126,191.2 L190,191.2 L190,164 L254,164 L254,191.2 L318,191.2 L318,164 L382,164 L382,191.2 L446,191.2 L446,164 L510,164 L510,191.2 L574,191.2 L574,164 L638,164 L638,191.2 L702,191.2 L702,164 L702,164" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">D</text>
<path d="M62,251.2 L190,251.2 L190,224 L462,224 L462,251.2 L558,251.2 L558,224 L702,224" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  D ฟลิป-ฟลอป ที่มี PS และ CLR ทำงานที่ขอบขาลงของสัญญาณนาฬิกา เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=d; trig=fall; pins=ps; set=c; give=wave}

PS และ CLR ทำงานเมื่อเป็น $0$ และทำงานทันที ไม่ต้องรอสัญญาณนาฬิกา

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="284" viewBox="0 0 726 284" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="278"/>
<line x1="254" y1="26" x2="254" y2="278"/>
<line x1="382" y1="26" x2="382" y2="278"/>
<line x1="510" y1="26" x2="510" y2="278"/>
<line x1="638" y1="26" x2="638" y2="278"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,44 L478,44 L478,71.2 L542,71.2 L542,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,104 L166,104 L166,131.2 L238,131.2 L238,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<path d="M62,164 L126,164 L126,191.2 L190,191.2 L190,164 L254,164 L254,191.2 L318,191.2 L318,164 L382,164 L382,191.2 L446,191.2 L446,164 L510,164 L510,191.2 L574,191.2 L574,164 L638,164 L638,191.2 L702,191.2 L702,164 L702,164" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">D</text>
<path d="M62,224 L302,224 L302,251.2 L398,251.2 L398,224 L590,224 L590,251.2 L702,251.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  D ฟลิป-ฟลอป ที่มี PS และ CLR ทำงานที่ขอบขาลงของสัญญาณนาฬิกา เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=d; trig=fall; pins=ps; set=c; give=table}

**ตารางการทำงาน** ($x$ คือค่าอะไรก็ได้, $Q_0$ คือค่า $Q$ ก่อนมีสัญญาณกระตุ้น)

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="410" height="247" viewBox="0 0 410 247" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<text x="205" y="26" text-anchor="middle" font-family="Mitr, Tahoma, sans-serif" font-size="21" font-weight="500" fill="#e8743b">ตารางการทำงาน</text>
<g stroke="currentColor" stroke-width="1.4" fill="none">
<rect x="16" y="42" width="378" height="197"/>
<line x1="16" y1="73" x2="394" y2="73"/>
<line x1="299" y1="42" x2="299" y2="239"/>
<line x1="16" y1="154" x2="394" y2="154" stroke-width="0.9" stroke-opacity="0.55"/>
<line x1="16" y1="208" x2="394" y2="208" stroke-width="0.9" stroke-opacity="0.55"/>
</g>
<text x="57" y="63" text-anchor="middle" font-size="16">PRESET</text>
<text x="57" y="93" text-anchor="middle" font-size="16">0</text>
<text x="57" y="120" text-anchor="middle" font-size="16">0</text>
<text x="57" y="147" text-anchor="middle" font-size="16">1</text>
<text x="57" y="174" text-anchor="middle" font-size="16">1</text>
<text x="57" y="201" text-anchor="middle" font-size="16">1</text>
<text x="57" y="228" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="63" text-anchor="middle" font-size="16">CLEAR</text>
<text x="134.5" y="93" text-anchor="middle" font-size="16">0</text>
<text x="134.5" y="120" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="147" text-anchor="middle" font-size="16">0</text>
<text x="134.5" y="174" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="201" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="228" text-anchor="middle" font-size="16">1</text>
<text x="212" y="63" text-anchor="middle" font-size="16">CLOCK</text>
<text x="212" y="93" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="212" y="120" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="212" y="147" text-anchor="middle" font-size="16" font-style="italic">x</text>
<line x1="212" y1="163" x2="212" y2="176" stroke="currentColor" stroke-width="1.6"/>
<polygon points="212,177 207.5,170 216.5,170" fill="currentColor"/>
<line x1="212" y1="190" x2="212" y2="203" stroke="currentColor" stroke-width="1.6"/>
<polygon points="212,204 207.5,197 216.5,197" fill="currentColor"/>
<text x="212" y="228" text-anchor="middle" font-size="16" font-family="Mitr, Tahoma, sans-serif" font-size="14">ไม่มีขอบ</text>
<text x="276" y="63" text-anchor="middle" font-size="16">D</text>
<text x="276" y="93" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="276" y="120" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="276" y="147" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="276" y="174" text-anchor="middle" font-size="16">0</text>
<text x="276" y="201" text-anchor="middle" font-size="16">1</text>
<text x="276" y="228" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="322.8" y="63" text-anchor="middle" font-size="16">Q</text>
<text x="322.8" y="93" text-anchor="middle" font-size="16">1</text>
<text x="322.8" y="120" text-anchor="middle" font-size="16">1</text>
<text x="322.8" y="147" text-anchor="middle" font-size="16">0</text>
<text x="322.8" y="174" text-anchor="middle" font-size="16">0</text>
<text x="322.8" y="201" text-anchor="middle" font-size="16">1</text>
<text x="322.8" y="228" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<text x="370.2" y="63" text-anchor="middle" font-size="16">Q</text>
<line x1="364.5" y1="49" x2="375.5" y2="49" stroke="currentColor" stroke-width="1.3"/>
<text x="370.2" y="93" text-anchor="middle" font-size="16">1</text>
<text x="370.2" y="120" text-anchor="middle" font-size="16">0</text>
<text x="370.2" y="147" text-anchor="middle" font-size="16">1</text>
<text x="370.2" y="174" text-anchor="middle" font-size="16">1</text>
<text x="370.2" y="201" text-anchor="middle" font-size="16">0</text>
<text x="370.2" y="228" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<line x1="360.5" y1="214" x2="371.5" y2="214" stroke="currentColor" stroke-width="1.3"/>
</svg>
</div>

PS และ CLR ทำงานเมื่อเป็น $0$ และทำงานทันที ไม่ต้องรอสัญญาณนาฬิกา

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="284" viewBox="0 0 726 284" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="278"/>
<line x1="254" y1="26" x2="254" y2="278"/>
<line x1="382" y1="26" x2="382" y2="278"/>
<line x1="510" y1="26" x2="510" y2="278"/>
<line x1="638" y1="26" x2="638" y2="278"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,44 L478,44 L478,71.2 L542,71.2 L542,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,104 L166,104 L166,131.2 L238,131.2 L238,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<path d="M62,164 L126,164 L126,191.2 L190,191.2 L190,164 L254,164 L254,191.2 L318,191.2 L318,164 L382,164 L382,191.2 L446,191.2 L446,164 L510,164 L510,191.2 L574,191.2 L574,164 L638,164 L638,191.2 L702,191.2 L702,164 L702,164" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">D</text>
<path d="M62,224 L302,224 L302,251.2 L398,251.2 L398,224 L590,224 L590,251.2 L702,251.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  D ฟลิป-ฟลอป ทำงานที่พัลส์บวก (ขณะ CLK เป็น 1) เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=d; trig=hi; pins=none; set=a; give=wave}

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="164" viewBox="0 0 726 164" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="158"/>
<line x1="190" y1="26" x2="190" y2="158"/>
<line x1="254" y1="26" x2="254" y2="158"/>
<line x1="318" y1="26" x2="318" y2="158"/>
<line x1="382" y1="26" x2="382" y2="158"/>
<line x1="446" y1="26" x2="446" y2="158"/>
<line x1="510" y1="26" x2="510" y2="158"/>
<line x1="574" y1="26" x2="574" y2="158"/>
<line x1="638" y1="26" x2="638" y2="158"/>
<line x1="702" y1="26" x2="702" y2="158"/>
</g>
<text x="50" y="63.6" text-anchor="end">CLK</text>
<path d="M62,71.2 L126,71.2 L126,44 L190,44 L190,71.2 L254,71.2 L254,44 L318,44 L318,71.2 L382,71.2 L382,44 L446,44 L446,71.2 L510,71.2 L510,44 L574,44 L574,71.2 L638,71.2 L638,44 L702,44 L702,71.2 L702,71.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">D</text>
<path d="M62,131.2 L94,131.2 L94,104 L158,104 L158,131.2 L222,131.2 L222,104 L302,104 L302,131.2 L350,131.2 L350,104 L414,104 L414,131.2 L494,131.2 L494,104 L542,104 L542,131.2 L606,131.2 L606,104 L670,104 L670,131.2 L702,131.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  D ฟลิป-ฟลอป ทำงานที่พัลส์บวก (ขณะ CLK เป็น 1) เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=d; trig=hi; pins=none; set=a; give=table}

**ตารางการทำงาน** ($x$ คือค่าอะไรก็ได้, $Q_0$ คือค่า $Q$ ก่อนมีสัญญาณกระตุ้น, ฟลิป-ฟลอปทำงานตลอดช่วงที่ CLK เป็น 1)

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="246" height="166" viewBox="0 0 246 166" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<text x="123" y="26" text-anchor="middle" font-family="Mitr, Tahoma, sans-serif" font-size="21" font-weight="500" fill="#e8743b">ตารางการทำงาน</text>
<g stroke="currentColor" stroke-width="1.4" fill="none">
<rect x="16" y="42" width="214" height="116"/>
<line x1="16" y1="73" x2="230" y2="73"/>
<line x1="135" y1="42" x2="135" y2="158"/>
<line x1="16" y1="127" x2="230" y2="127" stroke-width="0.9" stroke-opacity="0.55"/>
</g>
<text x="52.5" y="63" text-anchor="middle" font-size="16">CLOCK</text>
<text x="52.5" y="93" text-anchor="middle" font-size="16">1</text>
<text x="52.5" y="120" text-anchor="middle" font-size="16">1</text>
<text x="52.5" y="147" text-anchor="middle" font-size="16">0</text>
<text x="112" y="63" text-anchor="middle" font-size="16">D</text>
<text x="112" y="93" text-anchor="middle" font-size="16">0</text>
<text x="112" y="120" text-anchor="middle" font-size="16">1</text>
<text x="112" y="147" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="158.8" y="63" text-anchor="middle" font-size="16">Q</text>
<text x="158.8" y="93" text-anchor="middle" font-size="16">0</text>
<text x="158.8" y="120" text-anchor="middle" font-size="16">1</text>
<text x="158.8" y="147" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<text x="206.2" y="63" text-anchor="middle" font-size="16">Q</text>
<line x1="200.5" y1="49" x2="211.5" y2="49" stroke="currentColor" stroke-width="1.3"/>
<text x="206.2" y="93" text-anchor="middle" font-size="16">1</text>
<text x="206.2" y="120" text-anchor="middle" font-size="16">0</text>
<text x="206.2" y="147" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<line x1="196.5" y1="133" x2="207.5" y2="133" stroke="currentColor" stroke-width="1.3"/>
</svg>
</div>

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="164" viewBox="0 0 726 164" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="158"/>
<line x1="190" y1="26" x2="190" y2="158"/>
<line x1="254" y1="26" x2="254" y2="158"/>
<line x1="318" y1="26" x2="318" y2="158"/>
<line x1="382" y1="26" x2="382" y2="158"/>
<line x1="446" y1="26" x2="446" y2="158"/>
<line x1="510" y1="26" x2="510" y2="158"/>
<line x1="574" y1="26" x2="574" y2="158"/>
<line x1="638" y1="26" x2="638" y2="158"/>
<line x1="702" y1="26" x2="702" y2="158"/>
</g>
<text x="50" y="63.6" text-anchor="end">CLK</text>
<path d="M62,71.2 L126,71.2 L126,44 L190,44 L190,71.2 L254,71.2 L254,44 L318,44 L318,71.2 L382,71.2 L382,44 L446,44 L446,71.2 L510,71.2 L510,44 L574,44 L574,71.2 L638,71.2 L638,44 L702,44 L702,71.2 L702,71.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">D</text>
<path d="M62,131.2 L94,131.2 L94,104 L158,104 L158,131.2 L222,131.2 L222,104 L302,104 L302,131.2 L350,131.2 L350,104 L414,104 L414,131.2 L494,131.2 L494,104 L542,104 L542,131.2 L606,131.2 L606,104 L670,104 L670,131.2 L702,131.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  D ฟลิป-ฟลอป ทำงานที่พัลส์บวก (ขณะ CLK เป็น 1) เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=d; trig=hi; pins=none; set=b; give=wave}

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="164" viewBox="0 0 726 164" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="158"/>
<line x1="190" y1="26" x2="190" y2="158"/>
<line x1="254" y1="26" x2="254" y2="158"/>
<line x1="318" y1="26" x2="318" y2="158"/>
<line x1="382" y1="26" x2="382" y2="158"/>
<line x1="446" y1="26" x2="446" y2="158"/>
<line x1="510" y1="26" x2="510" y2="158"/>
<line x1="574" y1="26" x2="574" y2="158"/>
<line x1="638" y1="26" x2="638" y2="158"/>
<line x1="702" y1="26" x2="702" y2="158"/>
</g>
<text x="50" y="63.6" text-anchor="end">CLK</text>
<path d="M62,71.2 L126,71.2 L126,44 L190,44 L190,71.2 L254,71.2 L254,44 L318,44 L318,71.2 L382,71.2 L382,44 L446,44 L446,71.2 L510,71.2 L510,44 L574,44 L574,71.2 L638,71.2 L638,44 L702,44 L702,71.2 L702,71.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">D</text>
<path d="M62,104 L142,104 L142,131.2 L206,131.2 L206,104 L270,104 L270,131.2 L334,131.2 L334,104 L398,104 L398,131.2 L478,131.2 L478,104 L590,104 L590,131.2 L654,131.2 L654,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  D ฟลิป-ฟลอป ทำงานที่พัลส์บวก (ขณะ CLK เป็น 1) เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=d; trig=hi; pins=none; set=b; give=table}

**ตารางการทำงาน** ($x$ คือค่าอะไรก็ได้, $Q_0$ คือค่า $Q$ ก่อนมีสัญญาณกระตุ้น, ฟลิป-ฟลอปทำงานตลอดช่วงที่ CLK เป็น 1)

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="246" height="166" viewBox="0 0 246 166" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<text x="123" y="26" text-anchor="middle" font-family="Mitr, Tahoma, sans-serif" font-size="21" font-weight="500" fill="#e8743b">ตารางการทำงาน</text>
<g stroke="currentColor" stroke-width="1.4" fill="none">
<rect x="16" y="42" width="214" height="116"/>
<line x1="16" y1="73" x2="230" y2="73"/>
<line x1="135" y1="42" x2="135" y2="158"/>
<line x1="16" y1="127" x2="230" y2="127" stroke-width="0.9" stroke-opacity="0.55"/>
</g>
<text x="52.5" y="63" text-anchor="middle" font-size="16">CLOCK</text>
<text x="52.5" y="93" text-anchor="middle" font-size="16">1</text>
<text x="52.5" y="120" text-anchor="middle" font-size="16">1</text>
<text x="52.5" y="147" text-anchor="middle" font-size="16">0</text>
<text x="112" y="63" text-anchor="middle" font-size="16">D</text>
<text x="112" y="93" text-anchor="middle" font-size="16">0</text>
<text x="112" y="120" text-anchor="middle" font-size="16">1</text>
<text x="112" y="147" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="158.8" y="63" text-anchor="middle" font-size="16">Q</text>
<text x="158.8" y="93" text-anchor="middle" font-size="16">0</text>
<text x="158.8" y="120" text-anchor="middle" font-size="16">1</text>
<text x="158.8" y="147" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<text x="206.2" y="63" text-anchor="middle" font-size="16">Q</text>
<line x1="200.5" y1="49" x2="211.5" y2="49" stroke="currentColor" stroke-width="1.3"/>
<text x="206.2" y="93" text-anchor="middle" font-size="16">1</text>
<text x="206.2" y="120" text-anchor="middle" font-size="16">0</text>
<text x="206.2" y="147" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<line x1="196.5" y1="133" x2="207.5" y2="133" stroke="currentColor" stroke-width="1.3"/>
</svg>
</div>

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="164" viewBox="0 0 726 164" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="158"/>
<line x1="190" y1="26" x2="190" y2="158"/>
<line x1="254" y1="26" x2="254" y2="158"/>
<line x1="318" y1="26" x2="318" y2="158"/>
<line x1="382" y1="26" x2="382" y2="158"/>
<line x1="446" y1="26" x2="446" y2="158"/>
<line x1="510" y1="26" x2="510" y2="158"/>
<line x1="574" y1="26" x2="574" y2="158"/>
<line x1="638" y1="26" x2="638" y2="158"/>
<line x1="702" y1="26" x2="702" y2="158"/>
</g>
<text x="50" y="63.6" text-anchor="end">CLK</text>
<path d="M62,71.2 L126,71.2 L126,44 L190,44 L190,71.2 L254,71.2 L254,44 L318,44 L318,71.2 L382,71.2 L382,44 L446,44 L446,71.2 L510,71.2 L510,44 L574,44 L574,71.2 L638,71.2 L638,44 L702,44 L702,71.2 L702,71.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">D</text>
<path d="M62,104 L142,104 L142,131.2 L206,131.2 L206,104 L270,104 L270,131.2 L334,131.2 L334,104 L398,104 L398,131.2 L478,131.2 L478,104 L590,104 L590,131.2 L654,131.2 L654,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  D ฟลิป-ฟลอป ทำงานที่พัลส์บวก (ขณะ CLK เป็น 1) เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=d; trig=hi; pins=none; set=c; give=wave}

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="164" viewBox="0 0 726 164" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="158"/>
<line x1="190" y1="26" x2="190" y2="158"/>
<line x1="254" y1="26" x2="254" y2="158"/>
<line x1="318" y1="26" x2="318" y2="158"/>
<line x1="382" y1="26" x2="382" y2="158"/>
<line x1="446" y1="26" x2="446" y2="158"/>
<line x1="510" y1="26" x2="510" y2="158"/>
<line x1="574" y1="26" x2="574" y2="158"/>
<line x1="638" y1="26" x2="638" y2="158"/>
<line x1="702" y1="26" x2="702" y2="158"/>
</g>
<text x="50" y="63.6" text-anchor="end">CLK</text>
<path d="M62,71.2 L126,71.2 L126,44 L190,44 L190,71.2 L254,71.2 L254,44 L318,44 L318,71.2 L382,71.2 L382,44 L446,44 L446,71.2 L510,71.2 L510,44 L574,44 L574,71.2 L638,71.2 L638,44 L702,44 L702,71.2 L702,71.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">D</text>
<path d="M62,131.2 L142,131.2 L142,104 L222,104 L222,131.2 L270,131.2 L270,104 L350,104 L350,131.2 L462,131.2 L462,104 L526,104 L526,131.2 L590,131.2 L590,104 L670,104 L670,131.2 L702,131.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  D ฟลิป-ฟลอป ทำงานที่พัลส์บวก (ขณะ CLK เป็น 1) เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=d; trig=hi; pins=none; set=c; give=table}

**ตารางการทำงาน** ($x$ คือค่าอะไรก็ได้, $Q_0$ คือค่า $Q$ ก่อนมีสัญญาณกระตุ้น, ฟลิป-ฟลอปทำงานตลอดช่วงที่ CLK เป็น 1)

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="246" height="166" viewBox="0 0 246 166" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<text x="123" y="26" text-anchor="middle" font-family="Mitr, Tahoma, sans-serif" font-size="21" font-weight="500" fill="#e8743b">ตารางการทำงาน</text>
<g stroke="currentColor" stroke-width="1.4" fill="none">
<rect x="16" y="42" width="214" height="116"/>
<line x1="16" y1="73" x2="230" y2="73"/>
<line x1="135" y1="42" x2="135" y2="158"/>
<line x1="16" y1="127" x2="230" y2="127" stroke-width="0.9" stroke-opacity="0.55"/>
</g>
<text x="52.5" y="63" text-anchor="middle" font-size="16">CLOCK</text>
<text x="52.5" y="93" text-anchor="middle" font-size="16">1</text>
<text x="52.5" y="120" text-anchor="middle" font-size="16">1</text>
<text x="52.5" y="147" text-anchor="middle" font-size="16">0</text>
<text x="112" y="63" text-anchor="middle" font-size="16">D</text>
<text x="112" y="93" text-anchor="middle" font-size="16">0</text>
<text x="112" y="120" text-anchor="middle" font-size="16">1</text>
<text x="112" y="147" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="158.8" y="63" text-anchor="middle" font-size="16">Q</text>
<text x="158.8" y="93" text-anchor="middle" font-size="16">0</text>
<text x="158.8" y="120" text-anchor="middle" font-size="16">1</text>
<text x="158.8" y="147" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<text x="206.2" y="63" text-anchor="middle" font-size="16">Q</text>
<line x1="200.5" y1="49" x2="211.5" y2="49" stroke="currentColor" stroke-width="1.3"/>
<text x="206.2" y="93" text-anchor="middle" font-size="16">1</text>
<text x="206.2" y="120" text-anchor="middle" font-size="16">0</text>
<text x="206.2" y="147" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<line x1="196.5" y1="133" x2="207.5" y2="133" stroke="currentColor" stroke-width="1.3"/>
</svg>
</div>

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="164" viewBox="0 0 726 164" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="158"/>
<line x1="190" y1="26" x2="190" y2="158"/>
<line x1="254" y1="26" x2="254" y2="158"/>
<line x1="318" y1="26" x2="318" y2="158"/>
<line x1="382" y1="26" x2="382" y2="158"/>
<line x1="446" y1="26" x2="446" y2="158"/>
<line x1="510" y1="26" x2="510" y2="158"/>
<line x1="574" y1="26" x2="574" y2="158"/>
<line x1="638" y1="26" x2="638" y2="158"/>
<line x1="702" y1="26" x2="702" y2="158"/>
</g>
<text x="50" y="63.6" text-anchor="end">CLK</text>
<path d="M62,71.2 L126,71.2 L126,44 L190,44 L190,71.2 L254,71.2 L254,44 L318,44 L318,71.2 L382,71.2 L382,44 L446,44 L446,71.2 L510,71.2 L510,44 L574,44 L574,71.2 L638,71.2 L638,44 L702,44 L702,71.2 L702,71.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">D</text>
<path d="M62,131.2 L142,131.2 L142,104 L222,104 L222,131.2 L270,131.2 L270,104 L350,104 L350,131.2 L462,131.2 L462,104 L526,104 L526,131.2 L590,131.2 L590,104 L670,104 L670,131.2 L702,131.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  D ฟลิป-ฟลอป ที่มี PS และ CLR ทำงานที่พัลส์บวก (ขณะ CLK เป็น 1) เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=d; trig=hi; pins=ps; set=a; give=wave}

PS และ CLR ทำงานเมื่อเป็น $0$ และทำงานทันที ไม่ต้องรอสัญญาณนาฬิกา

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="284" viewBox="0 0 726 284" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="278"/>
<line x1="190" y1="26" x2="190" y2="278"/>
<line x1="254" y1="26" x2="254" y2="278"/>
<line x1="318" y1="26" x2="318" y2="278"/>
<line x1="382" y1="26" x2="382" y2="278"/>
<line x1="446" y1="26" x2="446" y2="278"/>
<line x1="510" y1="26" x2="510" y2="278"/>
<line x1="574" y1="26" x2="574" y2="278"/>
<line x1="638" y1="26" x2="638" y2="278"/>
<line x1="702" y1="26" x2="702" y2="278"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,44 L430,44 L430,71.2 L478,71.2 L478,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,104 L206,104 L206,131.2 L270,131.2 L270,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<path d="M62,191.2 L126,191.2 L126,164 L190,164 L190,191.2 L254,191.2 L254,164 L318,164 L318,191.2 L382,191.2 L382,164 L446,164 L446,191.2 L510,191.2 L510,164 L574,164 L574,191.2 L638,191.2 L638,164 L702,164 L702,191.2 L702,191.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">D</text>
<path d="M62,251.2 L94,251.2 L94,224 L158,224 L158,251.2 L222,251.2 L222,224 L302,224 L302,251.2 L350,251.2 L350,224 L414,224 L414,251.2 L494,251.2 L494,224 L542,224 L542,251.2 L606,251.2 L606,224 L670,224 L670,251.2 L702,251.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  D ฟลิป-ฟลอป ที่มี PS และ CLR ทำงานที่พัลส์บวก (ขณะ CLK เป็น 1) เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=d; trig=hi; pins=ps; set=a; give=table}

**ตารางการทำงาน** ($x$ คือค่าอะไรก็ได้, $Q_0$ คือค่า $Q$ ก่อนมีสัญญาณกระตุ้น, ฟลิป-ฟลอปทำงานตลอดช่วงที่ CLK เป็น 1)

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="401" height="247" viewBox="0 0 401 247" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<text x="200.5" y="26" text-anchor="middle" font-family="Mitr, Tahoma, sans-serif" font-size="21" font-weight="500" fill="#e8743b">ตารางการทำงาน</text>
<g stroke="currentColor" stroke-width="1.4" fill="none">
<rect x="16" y="42" width="369" height="197"/>
<line x1="16" y1="73" x2="385" y2="73"/>
<line x1="290" y1="42" x2="290" y2="239"/>
<line x1="16" y1="154" x2="385" y2="154" stroke-width="0.9" stroke-opacity="0.55"/>
<line x1="16" y1="208" x2="385" y2="208" stroke-width="0.9" stroke-opacity="0.55"/>
</g>
<text x="57" y="63" text-anchor="middle" font-size="16">PRESET</text>
<text x="57" y="93" text-anchor="middle" font-size="16">0</text>
<text x="57" y="120" text-anchor="middle" font-size="16">0</text>
<text x="57" y="147" text-anchor="middle" font-size="16">1</text>
<text x="57" y="174" text-anchor="middle" font-size="16">1</text>
<text x="57" y="201" text-anchor="middle" font-size="16">1</text>
<text x="57" y="228" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="63" text-anchor="middle" font-size="16">CLEAR</text>
<text x="134.5" y="93" text-anchor="middle" font-size="16">0</text>
<text x="134.5" y="120" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="147" text-anchor="middle" font-size="16">0</text>
<text x="134.5" y="174" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="201" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="228" text-anchor="middle" font-size="16">1</text>
<text x="207.5" y="63" text-anchor="middle" font-size="16">CLOCK</text>
<text x="207.5" y="93" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="207.5" y="120" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="207.5" y="147" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="207.5" y="174" text-anchor="middle" font-size="16">1</text>
<text x="207.5" y="201" text-anchor="middle" font-size="16">1</text>
<text x="207.5" y="228" text-anchor="middle" font-size="16">0</text>
<text x="267" y="63" text-anchor="middle" font-size="16">D</text>
<text x="267" y="93" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="267" y="120" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="267" y="147" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="267" y="174" text-anchor="middle" font-size="16">0</text>
<text x="267" y="201" text-anchor="middle" font-size="16">1</text>
<text x="267" y="228" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="313.8" y="63" text-anchor="middle" font-size="16">Q</text>
<text x="313.8" y="93" text-anchor="middle" font-size="16">1</text>
<text x="313.8" y="120" text-anchor="middle" font-size="16">1</text>
<text x="313.8" y="147" text-anchor="middle" font-size="16">0</text>
<text x="313.8" y="174" text-anchor="middle" font-size="16">0</text>
<text x="313.8" y="201" text-anchor="middle" font-size="16">1</text>
<text x="313.8" y="228" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<text x="361.2" y="63" text-anchor="middle" font-size="16">Q</text>
<line x1="355.5" y1="49" x2="366.5" y2="49" stroke="currentColor" stroke-width="1.3"/>
<text x="361.2" y="93" text-anchor="middle" font-size="16">1</text>
<text x="361.2" y="120" text-anchor="middle" font-size="16">0</text>
<text x="361.2" y="147" text-anchor="middle" font-size="16">1</text>
<text x="361.2" y="174" text-anchor="middle" font-size="16">1</text>
<text x="361.2" y="201" text-anchor="middle" font-size="16">0</text>
<text x="361.2" y="228" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<line x1="351.5" y1="214" x2="362.5" y2="214" stroke="currentColor" stroke-width="1.3"/>
</svg>
</div>

PS และ CLR ทำงานเมื่อเป็น $0$ และทำงานทันที ไม่ต้องรอสัญญาณนาฬิกา

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="284" viewBox="0 0 726 284" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="278"/>
<line x1="190" y1="26" x2="190" y2="278"/>
<line x1="254" y1="26" x2="254" y2="278"/>
<line x1="318" y1="26" x2="318" y2="278"/>
<line x1="382" y1="26" x2="382" y2="278"/>
<line x1="446" y1="26" x2="446" y2="278"/>
<line x1="510" y1="26" x2="510" y2="278"/>
<line x1="574" y1="26" x2="574" y2="278"/>
<line x1="638" y1="26" x2="638" y2="278"/>
<line x1="702" y1="26" x2="702" y2="278"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,44 L430,44 L430,71.2 L478,71.2 L478,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,104 L206,104 L206,131.2 L270,131.2 L270,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<path d="M62,191.2 L126,191.2 L126,164 L190,164 L190,191.2 L254,191.2 L254,164 L318,164 L318,191.2 L382,191.2 L382,164 L446,164 L446,191.2 L510,191.2 L510,164 L574,164 L574,191.2 L638,191.2 L638,164 L702,164 L702,191.2 L702,191.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">D</text>
<path d="M62,251.2 L94,251.2 L94,224 L158,224 L158,251.2 L222,251.2 L222,224 L302,224 L302,251.2 L350,251.2 L350,224 L414,224 L414,251.2 L494,251.2 L494,224 L542,224 L542,251.2 L606,251.2 L606,224 L670,224 L670,251.2 L702,251.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  D ฟลิป-ฟลอป ที่มี PS และ CLR ทำงานที่พัลส์บวก (ขณะ CLK เป็น 1) เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=d; trig=hi; pins=ps; set=b; give=wave}

PS และ CLR ทำงานเมื่อเป็น $0$ และทำงานทันที ไม่ต้องรอสัญญาณนาฬิกา

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="284" viewBox="0 0 726 284" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="278"/>
<line x1="190" y1="26" x2="190" y2="278"/>
<line x1="254" y1="26" x2="254" y2="278"/>
<line x1="318" y1="26" x2="318" y2="278"/>
<line x1="382" y1="26" x2="382" y2="278"/>
<line x1="446" y1="26" x2="446" y2="278"/>
<line x1="510" y1="26" x2="510" y2="278"/>
<line x1="574" y1="26" x2="574" y2="278"/>
<line x1="638" y1="26" x2="638" y2="278"/>
<line x1="702" y1="26" x2="702" y2="278"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,44 L174,44 L174,71.2 L222,71.2 L222,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,104 L606,104 L606,131.2 L670,131.2 L670,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<path d="M62,191.2 L126,191.2 L126,164 L190,164 L190,191.2 L254,191.2 L254,164 L318,164 L318,191.2 L382,191.2 L382,164 L446,164 L446,191.2 L510,191.2 L510,164 L574,164 L574,191.2 L638,191.2 L638,164 L702,164 L702,191.2 L702,191.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">D</text>
<path d="M62,224 L142,224 L142,251.2 L206,251.2 L206,224 L270,224 L270,251.2 L334,251.2 L334,224 L398,224 L398,251.2 L478,251.2 L478,224 L590,224 L590,251.2 L654,251.2 L654,224 L702,224" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  D ฟลิป-ฟลอป ที่มี PS และ CLR ทำงานที่พัลส์บวก (ขณะ CLK เป็น 1) เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=d; trig=hi; pins=ps; set=b; give=table}

**ตารางการทำงาน** ($x$ คือค่าอะไรก็ได้, $Q_0$ คือค่า $Q$ ก่อนมีสัญญาณกระตุ้น, ฟลิป-ฟลอปทำงานตลอดช่วงที่ CLK เป็น 1)

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="401" height="247" viewBox="0 0 401 247" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<text x="200.5" y="26" text-anchor="middle" font-family="Mitr, Tahoma, sans-serif" font-size="21" font-weight="500" fill="#e8743b">ตารางการทำงาน</text>
<g stroke="currentColor" stroke-width="1.4" fill="none">
<rect x="16" y="42" width="369" height="197"/>
<line x1="16" y1="73" x2="385" y2="73"/>
<line x1="290" y1="42" x2="290" y2="239"/>
<line x1="16" y1="154" x2="385" y2="154" stroke-width="0.9" stroke-opacity="0.55"/>
<line x1="16" y1="208" x2="385" y2="208" stroke-width="0.9" stroke-opacity="0.55"/>
</g>
<text x="57" y="63" text-anchor="middle" font-size="16">PRESET</text>
<text x="57" y="93" text-anchor="middle" font-size="16">0</text>
<text x="57" y="120" text-anchor="middle" font-size="16">0</text>
<text x="57" y="147" text-anchor="middle" font-size="16">1</text>
<text x="57" y="174" text-anchor="middle" font-size="16">1</text>
<text x="57" y="201" text-anchor="middle" font-size="16">1</text>
<text x="57" y="228" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="63" text-anchor="middle" font-size="16">CLEAR</text>
<text x="134.5" y="93" text-anchor="middle" font-size="16">0</text>
<text x="134.5" y="120" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="147" text-anchor="middle" font-size="16">0</text>
<text x="134.5" y="174" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="201" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="228" text-anchor="middle" font-size="16">1</text>
<text x="207.5" y="63" text-anchor="middle" font-size="16">CLOCK</text>
<text x="207.5" y="93" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="207.5" y="120" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="207.5" y="147" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="207.5" y="174" text-anchor="middle" font-size="16">1</text>
<text x="207.5" y="201" text-anchor="middle" font-size="16">1</text>
<text x="207.5" y="228" text-anchor="middle" font-size="16">0</text>
<text x="267" y="63" text-anchor="middle" font-size="16">D</text>
<text x="267" y="93" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="267" y="120" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="267" y="147" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="267" y="174" text-anchor="middle" font-size="16">0</text>
<text x="267" y="201" text-anchor="middle" font-size="16">1</text>
<text x="267" y="228" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="313.8" y="63" text-anchor="middle" font-size="16">Q</text>
<text x="313.8" y="93" text-anchor="middle" font-size="16">1</text>
<text x="313.8" y="120" text-anchor="middle" font-size="16">1</text>
<text x="313.8" y="147" text-anchor="middle" font-size="16">0</text>
<text x="313.8" y="174" text-anchor="middle" font-size="16">0</text>
<text x="313.8" y="201" text-anchor="middle" font-size="16">1</text>
<text x="313.8" y="228" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<text x="361.2" y="63" text-anchor="middle" font-size="16">Q</text>
<line x1="355.5" y1="49" x2="366.5" y2="49" stroke="currentColor" stroke-width="1.3"/>
<text x="361.2" y="93" text-anchor="middle" font-size="16">1</text>
<text x="361.2" y="120" text-anchor="middle" font-size="16">0</text>
<text x="361.2" y="147" text-anchor="middle" font-size="16">1</text>
<text x="361.2" y="174" text-anchor="middle" font-size="16">1</text>
<text x="361.2" y="201" text-anchor="middle" font-size="16">0</text>
<text x="361.2" y="228" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<line x1="351.5" y1="214" x2="362.5" y2="214" stroke="currentColor" stroke-width="1.3"/>
</svg>
</div>

PS และ CLR ทำงานเมื่อเป็น $0$ และทำงานทันที ไม่ต้องรอสัญญาณนาฬิกา

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="284" viewBox="0 0 726 284" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="278"/>
<line x1="190" y1="26" x2="190" y2="278"/>
<line x1="254" y1="26" x2="254" y2="278"/>
<line x1="318" y1="26" x2="318" y2="278"/>
<line x1="382" y1="26" x2="382" y2="278"/>
<line x1="446" y1="26" x2="446" y2="278"/>
<line x1="510" y1="26" x2="510" y2="278"/>
<line x1="574" y1="26" x2="574" y2="278"/>
<line x1="638" y1="26" x2="638" y2="278"/>
<line x1="702" y1="26" x2="702" y2="278"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,44 L174,44 L174,71.2 L222,71.2 L222,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,104 L606,104 L606,131.2 L670,131.2 L670,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<path d="M62,191.2 L126,191.2 L126,164 L190,164 L190,191.2 L254,191.2 L254,164 L318,164 L318,191.2 L382,191.2 L382,164 L446,164 L446,191.2 L510,191.2 L510,164 L574,164 L574,191.2 L638,191.2 L638,164 L702,164 L702,191.2 L702,191.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">D</text>
<path d="M62,224 L142,224 L142,251.2 L206,251.2 L206,224 L270,224 L270,251.2 L334,251.2 L334,224 L398,224 L398,251.2 L478,251.2 L478,224 L590,224 L590,251.2 L654,251.2 L654,224 L702,224" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  D ฟลิป-ฟลอป ที่มี PS และ CLR ทำงานที่พัลส์บวก (ขณะ CLK เป็น 1) เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=d; trig=hi; pins=ps; set=c; give=wave}

PS และ CLR ทำงานเมื่อเป็น $0$ และทำงานทันที ไม่ต้องรอสัญญาณนาฬิกา

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="284" viewBox="0 0 726 284" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="278"/>
<line x1="190" y1="26" x2="190" y2="278"/>
<line x1="254" y1="26" x2="254" y2="278"/>
<line x1="318" y1="26" x2="318" y2="278"/>
<line x1="382" y1="26" x2="382" y2="278"/>
<line x1="446" y1="26" x2="446" y2="278"/>
<line x1="510" y1="26" x2="510" y2="278"/>
<line x1="574" y1="26" x2="574" y2="278"/>
<line x1="638" y1="26" x2="638" y2="278"/>
<line x1="702" y1="26" x2="702" y2="278"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,44 L430,44 L430,71.2 L478,71.2 L478,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,104 L214,104 L214,131.2 L278,131.2 L278,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<path d="M62,191.2 L126,191.2 L126,164 L190,164 L190,191.2 L254,191.2 L254,164 L318,164 L318,191.2 L382,191.2 L382,164 L446,164 L446,191.2 L510,191.2 L510,164 L574,164 L574,191.2 L638,191.2 L638,164 L702,164 L702,191.2 L702,191.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">D</text>
<path d="M62,251.2 L142,251.2 L142,224 L222,224 L222,251.2 L270,251.2 L270,224 L350,224 L350,251.2 L462,251.2 L462,224 L526,224 L526,251.2 L590,251.2 L590,224 L670,224 L670,251.2 L702,251.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  D ฟลิป-ฟลอป ที่มี PS และ CLR ทำงานที่พัลส์บวก (ขณะ CLK เป็น 1) เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=d; trig=hi; pins=ps; set=c; give=table}

**ตารางการทำงาน** ($x$ คือค่าอะไรก็ได้, $Q_0$ คือค่า $Q$ ก่อนมีสัญญาณกระตุ้น, ฟลิป-ฟลอปทำงานตลอดช่วงที่ CLK เป็น 1)

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="401" height="247" viewBox="0 0 401 247" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<text x="200.5" y="26" text-anchor="middle" font-family="Mitr, Tahoma, sans-serif" font-size="21" font-weight="500" fill="#e8743b">ตารางการทำงาน</text>
<g stroke="currentColor" stroke-width="1.4" fill="none">
<rect x="16" y="42" width="369" height="197"/>
<line x1="16" y1="73" x2="385" y2="73"/>
<line x1="290" y1="42" x2="290" y2="239"/>
<line x1="16" y1="154" x2="385" y2="154" stroke-width="0.9" stroke-opacity="0.55"/>
<line x1="16" y1="208" x2="385" y2="208" stroke-width="0.9" stroke-opacity="0.55"/>
</g>
<text x="57" y="63" text-anchor="middle" font-size="16">PRESET</text>
<text x="57" y="93" text-anchor="middle" font-size="16">0</text>
<text x="57" y="120" text-anchor="middle" font-size="16">0</text>
<text x="57" y="147" text-anchor="middle" font-size="16">1</text>
<text x="57" y="174" text-anchor="middle" font-size="16">1</text>
<text x="57" y="201" text-anchor="middle" font-size="16">1</text>
<text x="57" y="228" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="63" text-anchor="middle" font-size="16">CLEAR</text>
<text x="134.5" y="93" text-anchor="middle" font-size="16">0</text>
<text x="134.5" y="120" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="147" text-anchor="middle" font-size="16">0</text>
<text x="134.5" y="174" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="201" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="228" text-anchor="middle" font-size="16">1</text>
<text x="207.5" y="63" text-anchor="middle" font-size="16">CLOCK</text>
<text x="207.5" y="93" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="207.5" y="120" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="207.5" y="147" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="207.5" y="174" text-anchor="middle" font-size="16">1</text>
<text x="207.5" y="201" text-anchor="middle" font-size="16">1</text>
<text x="207.5" y="228" text-anchor="middle" font-size="16">0</text>
<text x="267" y="63" text-anchor="middle" font-size="16">D</text>
<text x="267" y="93" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="267" y="120" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="267" y="147" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="267" y="174" text-anchor="middle" font-size="16">0</text>
<text x="267" y="201" text-anchor="middle" font-size="16">1</text>
<text x="267" y="228" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="313.8" y="63" text-anchor="middle" font-size="16">Q</text>
<text x="313.8" y="93" text-anchor="middle" font-size="16">1</text>
<text x="313.8" y="120" text-anchor="middle" font-size="16">1</text>
<text x="313.8" y="147" text-anchor="middle" font-size="16">0</text>
<text x="313.8" y="174" text-anchor="middle" font-size="16">0</text>
<text x="313.8" y="201" text-anchor="middle" font-size="16">1</text>
<text x="313.8" y="228" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<text x="361.2" y="63" text-anchor="middle" font-size="16">Q</text>
<line x1="355.5" y1="49" x2="366.5" y2="49" stroke="currentColor" stroke-width="1.3"/>
<text x="361.2" y="93" text-anchor="middle" font-size="16">1</text>
<text x="361.2" y="120" text-anchor="middle" font-size="16">0</text>
<text x="361.2" y="147" text-anchor="middle" font-size="16">1</text>
<text x="361.2" y="174" text-anchor="middle" font-size="16">1</text>
<text x="361.2" y="201" text-anchor="middle" font-size="16">0</text>
<text x="361.2" y="228" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<line x1="351.5" y1="214" x2="362.5" y2="214" stroke="currentColor" stroke-width="1.3"/>
</svg>
</div>

PS และ CLR ทำงานเมื่อเป็น $0$ และทำงานทันที ไม่ต้องรอสัญญาณนาฬิกา

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="284" viewBox="0 0 726 284" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="278"/>
<line x1="190" y1="26" x2="190" y2="278"/>
<line x1="254" y1="26" x2="254" y2="278"/>
<line x1="318" y1="26" x2="318" y2="278"/>
<line x1="382" y1="26" x2="382" y2="278"/>
<line x1="446" y1="26" x2="446" y2="278"/>
<line x1="510" y1="26" x2="510" y2="278"/>
<line x1="574" y1="26" x2="574" y2="278"/>
<line x1="638" y1="26" x2="638" y2="278"/>
<line x1="702" y1="26" x2="702" y2="278"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,44 L430,44 L430,71.2 L478,71.2 L478,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,104 L214,104 L214,131.2 L278,131.2 L278,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<path d="M62,191.2 L126,191.2 L126,164 L190,164 L190,191.2 L254,191.2 L254,164 L318,164 L318,191.2 L382,191.2 L382,164 L446,164 L446,191.2 L510,191.2 L510,164 L574,164 L574,191.2 L638,191.2 L638,164 L702,164 L702,191.2 L702,191.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">D</text>
<path d="M62,251.2 L142,251.2 L142,224 L222,224 L222,251.2 L270,251.2 L270,224 L350,224 L350,251.2 L462,251.2 L462,224 L526,224 L526,251.2 L590,251.2 L590,224 L670,224 L670,251.2 L702,251.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  D ฟลิป-ฟลอป ทำงานที่พัลส์ลบ (ขณะ CLK เป็น 0) เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=d; trig=lo; pins=none; set=a; give=wave}

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="164" viewBox="0 0 726 164" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="158"/>
<line x1="190" y1="26" x2="190" y2="158"/>
<line x1="254" y1="26" x2="254" y2="158"/>
<line x1="318" y1="26" x2="318" y2="158"/>
<line x1="382" y1="26" x2="382" y2="158"/>
<line x1="446" y1="26" x2="446" y2="158"/>
<line x1="510" y1="26" x2="510" y2="158"/>
<line x1="574" y1="26" x2="574" y2="158"/>
<line x1="638" y1="26" x2="638" y2="158"/>
<line x1="702" y1="26" x2="702" y2="158"/>
</g>
<text x="50" y="63.6" text-anchor="end">CLK</text>
<path d="M62,44 L126,44 L126,71.2 L190,71.2 L190,44 L254,44 L254,71.2 L318,71.2 L318,44 L382,44 L382,71.2 L446,71.2 L446,44 L510,44 L510,71.2 L574,71.2 L574,44 L638,44 L638,71.2 L702,71.2 L702,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">D</text>
<path d="M62,131.2 L94,131.2 L94,104 L158,104 L158,131.2 L222,131.2 L222,104 L302,104 L302,131.2 L350,131.2 L350,104 L414,104 L414,131.2 L494,131.2 L494,104 L542,104 L542,131.2 L606,131.2 L606,104 L670,104 L670,131.2 L702,131.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  D ฟลิป-ฟลอป ทำงานที่พัลส์ลบ (ขณะ CLK เป็น 0) เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=d; trig=lo; pins=none; set=a; give=table}

**ตารางการทำงาน** ($x$ คือค่าอะไรก็ได้, $Q_0$ คือค่า $Q$ ก่อนมีสัญญาณกระตุ้น, ฟลิป-ฟลอปทำงานตลอดช่วงที่ CLK เป็น 0)

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="246" height="166" viewBox="0 0 246 166" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<text x="123" y="26" text-anchor="middle" font-family="Mitr, Tahoma, sans-serif" font-size="21" font-weight="500" fill="#e8743b">ตารางการทำงาน</text>
<g stroke="currentColor" stroke-width="1.4" fill="none">
<rect x="16" y="42" width="214" height="116"/>
<line x1="16" y1="73" x2="230" y2="73"/>
<line x1="135" y1="42" x2="135" y2="158"/>
<line x1="16" y1="127" x2="230" y2="127" stroke-width="0.9" stroke-opacity="0.55"/>
</g>
<text x="52.5" y="63" text-anchor="middle" font-size="16">CLOCK</text>
<text x="52.5" y="93" text-anchor="middle" font-size="16">0</text>
<text x="52.5" y="120" text-anchor="middle" font-size="16">0</text>
<text x="52.5" y="147" text-anchor="middle" font-size="16">1</text>
<text x="112" y="63" text-anchor="middle" font-size="16">D</text>
<text x="112" y="93" text-anchor="middle" font-size="16">0</text>
<text x="112" y="120" text-anchor="middle" font-size="16">1</text>
<text x="112" y="147" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="158.8" y="63" text-anchor="middle" font-size="16">Q</text>
<text x="158.8" y="93" text-anchor="middle" font-size="16">0</text>
<text x="158.8" y="120" text-anchor="middle" font-size="16">1</text>
<text x="158.8" y="147" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<text x="206.2" y="63" text-anchor="middle" font-size="16">Q</text>
<line x1="200.5" y1="49" x2="211.5" y2="49" stroke="currentColor" stroke-width="1.3"/>
<text x="206.2" y="93" text-anchor="middle" font-size="16">1</text>
<text x="206.2" y="120" text-anchor="middle" font-size="16">0</text>
<text x="206.2" y="147" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<line x1="196.5" y1="133" x2="207.5" y2="133" stroke="currentColor" stroke-width="1.3"/>
</svg>
</div>

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="164" viewBox="0 0 726 164" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="158"/>
<line x1="190" y1="26" x2="190" y2="158"/>
<line x1="254" y1="26" x2="254" y2="158"/>
<line x1="318" y1="26" x2="318" y2="158"/>
<line x1="382" y1="26" x2="382" y2="158"/>
<line x1="446" y1="26" x2="446" y2="158"/>
<line x1="510" y1="26" x2="510" y2="158"/>
<line x1="574" y1="26" x2="574" y2="158"/>
<line x1="638" y1="26" x2="638" y2="158"/>
<line x1="702" y1="26" x2="702" y2="158"/>
</g>
<text x="50" y="63.6" text-anchor="end">CLK</text>
<path d="M62,44 L126,44 L126,71.2 L190,71.2 L190,44 L254,44 L254,71.2 L318,71.2 L318,44 L382,44 L382,71.2 L446,71.2 L446,44 L510,44 L510,71.2 L574,71.2 L574,44 L638,44 L638,71.2 L702,71.2 L702,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">D</text>
<path d="M62,131.2 L94,131.2 L94,104 L158,104 L158,131.2 L222,131.2 L222,104 L302,104 L302,131.2 L350,131.2 L350,104 L414,104 L414,131.2 L494,131.2 L494,104 L542,104 L542,131.2 L606,131.2 L606,104 L670,104 L670,131.2 L702,131.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  D ฟลิป-ฟลอป ทำงานที่พัลส์ลบ (ขณะ CLK เป็น 0) เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=d; trig=lo; pins=none; set=b; give=wave}

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="164" viewBox="0 0 726 164" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="158"/>
<line x1="190" y1="26" x2="190" y2="158"/>
<line x1="254" y1="26" x2="254" y2="158"/>
<line x1="318" y1="26" x2="318" y2="158"/>
<line x1="382" y1="26" x2="382" y2="158"/>
<line x1="446" y1="26" x2="446" y2="158"/>
<line x1="510" y1="26" x2="510" y2="158"/>
<line x1="574" y1="26" x2="574" y2="158"/>
<line x1="638" y1="26" x2="638" y2="158"/>
<line x1="702" y1="26" x2="702" y2="158"/>
</g>
<text x="50" y="63.6" text-anchor="end">CLK</text>
<path d="M62,44 L126,44 L126,71.2 L190,71.2 L190,44 L254,44 L254,71.2 L318,71.2 L318,44 L382,44 L382,71.2 L446,71.2 L446,44 L510,44 L510,71.2 L574,71.2 L574,44 L638,44 L638,71.2 L702,71.2 L702,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">D</text>
<path d="M62,104 L142,104 L142,131.2 L206,131.2 L206,104 L270,104 L270,131.2 L334,131.2 L334,104 L398,104 L398,131.2 L478,131.2 L478,104 L590,104 L590,131.2 L654,131.2 L654,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  D ฟลิป-ฟลอป ทำงานที่พัลส์ลบ (ขณะ CLK เป็น 0) เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=d; trig=lo; pins=none; set=b; give=table}

**ตารางการทำงาน** ($x$ คือค่าอะไรก็ได้, $Q_0$ คือค่า $Q$ ก่อนมีสัญญาณกระตุ้น, ฟลิป-ฟลอปทำงานตลอดช่วงที่ CLK เป็น 0)

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="246" height="166" viewBox="0 0 246 166" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<text x="123" y="26" text-anchor="middle" font-family="Mitr, Tahoma, sans-serif" font-size="21" font-weight="500" fill="#e8743b">ตารางการทำงาน</text>
<g stroke="currentColor" stroke-width="1.4" fill="none">
<rect x="16" y="42" width="214" height="116"/>
<line x1="16" y1="73" x2="230" y2="73"/>
<line x1="135" y1="42" x2="135" y2="158"/>
<line x1="16" y1="127" x2="230" y2="127" stroke-width="0.9" stroke-opacity="0.55"/>
</g>
<text x="52.5" y="63" text-anchor="middle" font-size="16">CLOCK</text>
<text x="52.5" y="93" text-anchor="middle" font-size="16">0</text>
<text x="52.5" y="120" text-anchor="middle" font-size="16">0</text>
<text x="52.5" y="147" text-anchor="middle" font-size="16">1</text>
<text x="112" y="63" text-anchor="middle" font-size="16">D</text>
<text x="112" y="93" text-anchor="middle" font-size="16">0</text>
<text x="112" y="120" text-anchor="middle" font-size="16">1</text>
<text x="112" y="147" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="158.8" y="63" text-anchor="middle" font-size="16">Q</text>
<text x="158.8" y="93" text-anchor="middle" font-size="16">0</text>
<text x="158.8" y="120" text-anchor="middle" font-size="16">1</text>
<text x="158.8" y="147" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<text x="206.2" y="63" text-anchor="middle" font-size="16">Q</text>
<line x1="200.5" y1="49" x2="211.5" y2="49" stroke="currentColor" stroke-width="1.3"/>
<text x="206.2" y="93" text-anchor="middle" font-size="16">1</text>
<text x="206.2" y="120" text-anchor="middle" font-size="16">0</text>
<text x="206.2" y="147" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<line x1="196.5" y1="133" x2="207.5" y2="133" stroke="currentColor" stroke-width="1.3"/>
</svg>
</div>

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="164" viewBox="0 0 726 164" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="158"/>
<line x1="190" y1="26" x2="190" y2="158"/>
<line x1="254" y1="26" x2="254" y2="158"/>
<line x1="318" y1="26" x2="318" y2="158"/>
<line x1="382" y1="26" x2="382" y2="158"/>
<line x1="446" y1="26" x2="446" y2="158"/>
<line x1="510" y1="26" x2="510" y2="158"/>
<line x1="574" y1="26" x2="574" y2="158"/>
<line x1="638" y1="26" x2="638" y2="158"/>
<line x1="702" y1="26" x2="702" y2="158"/>
</g>
<text x="50" y="63.6" text-anchor="end">CLK</text>
<path d="M62,44 L126,44 L126,71.2 L190,71.2 L190,44 L254,44 L254,71.2 L318,71.2 L318,44 L382,44 L382,71.2 L446,71.2 L446,44 L510,44 L510,71.2 L574,71.2 L574,44 L638,44 L638,71.2 L702,71.2 L702,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">D</text>
<path d="M62,104 L142,104 L142,131.2 L206,131.2 L206,104 L270,104 L270,131.2 L334,131.2 L334,104 L398,104 L398,131.2 L478,131.2 L478,104 L590,104 L590,131.2 L654,131.2 L654,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  D ฟลิป-ฟลอป ทำงานที่พัลส์ลบ (ขณะ CLK เป็น 0) เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=d; trig=lo; pins=none; set=c; give=wave}

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="164" viewBox="0 0 726 164" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="158"/>
<line x1="190" y1="26" x2="190" y2="158"/>
<line x1="254" y1="26" x2="254" y2="158"/>
<line x1="318" y1="26" x2="318" y2="158"/>
<line x1="382" y1="26" x2="382" y2="158"/>
<line x1="446" y1="26" x2="446" y2="158"/>
<line x1="510" y1="26" x2="510" y2="158"/>
<line x1="574" y1="26" x2="574" y2="158"/>
<line x1="638" y1="26" x2="638" y2="158"/>
<line x1="702" y1="26" x2="702" y2="158"/>
</g>
<text x="50" y="63.6" text-anchor="end">CLK</text>
<path d="M62,44 L126,44 L126,71.2 L190,71.2 L190,44 L254,44 L254,71.2 L318,71.2 L318,44 L382,44 L382,71.2 L446,71.2 L446,44 L510,44 L510,71.2 L574,71.2 L574,44 L638,44 L638,71.2 L702,71.2 L702,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">D</text>
<path d="M62,131.2 L142,131.2 L142,104 L222,104 L222,131.2 L270,131.2 L270,104 L350,104 L350,131.2 L462,131.2 L462,104 L526,104 L526,131.2 L590,131.2 L590,104 L670,104 L670,131.2 L702,131.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  D ฟลิป-ฟลอป ทำงานที่พัลส์ลบ (ขณะ CLK เป็น 0) เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=d; trig=lo; pins=none; set=c; give=table}

**ตารางการทำงาน** ($x$ คือค่าอะไรก็ได้, $Q_0$ คือค่า $Q$ ก่อนมีสัญญาณกระตุ้น, ฟลิป-ฟลอปทำงานตลอดช่วงที่ CLK เป็น 0)

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="246" height="166" viewBox="0 0 246 166" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<text x="123" y="26" text-anchor="middle" font-family="Mitr, Tahoma, sans-serif" font-size="21" font-weight="500" fill="#e8743b">ตารางการทำงาน</text>
<g stroke="currentColor" stroke-width="1.4" fill="none">
<rect x="16" y="42" width="214" height="116"/>
<line x1="16" y1="73" x2="230" y2="73"/>
<line x1="135" y1="42" x2="135" y2="158"/>
<line x1="16" y1="127" x2="230" y2="127" stroke-width="0.9" stroke-opacity="0.55"/>
</g>
<text x="52.5" y="63" text-anchor="middle" font-size="16">CLOCK</text>
<text x="52.5" y="93" text-anchor="middle" font-size="16">0</text>
<text x="52.5" y="120" text-anchor="middle" font-size="16">0</text>
<text x="52.5" y="147" text-anchor="middle" font-size="16">1</text>
<text x="112" y="63" text-anchor="middle" font-size="16">D</text>
<text x="112" y="93" text-anchor="middle" font-size="16">0</text>
<text x="112" y="120" text-anchor="middle" font-size="16">1</text>
<text x="112" y="147" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="158.8" y="63" text-anchor="middle" font-size="16">Q</text>
<text x="158.8" y="93" text-anchor="middle" font-size="16">0</text>
<text x="158.8" y="120" text-anchor="middle" font-size="16">1</text>
<text x="158.8" y="147" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<text x="206.2" y="63" text-anchor="middle" font-size="16">Q</text>
<line x1="200.5" y1="49" x2="211.5" y2="49" stroke="currentColor" stroke-width="1.3"/>
<text x="206.2" y="93" text-anchor="middle" font-size="16">1</text>
<text x="206.2" y="120" text-anchor="middle" font-size="16">0</text>
<text x="206.2" y="147" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<line x1="196.5" y1="133" x2="207.5" y2="133" stroke="currentColor" stroke-width="1.3"/>
</svg>
</div>

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="164" viewBox="0 0 726 164" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="158"/>
<line x1="190" y1="26" x2="190" y2="158"/>
<line x1="254" y1="26" x2="254" y2="158"/>
<line x1="318" y1="26" x2="318" y2="158"/>
<line x1="382" y1="26" x2="382" y2="158"/>
<line x1="446" y1="26" x2="446" y2="158"/>
<line x1="510" y1="26" x2="510" y2="158"/>
<line x1="574" y1="26" x2="574" y2="158"/>
<line x1="638" y1="26" x2="638" y2="158"/>
<line x1="702" y1="26" x2="702" y2="158"/>
</g>
<text x="50" y="63.6" text-anchor="end">CLK</text>
<path d="M62,44 L126,44 L126,71.2 L190,71.2 L190,44 L254,44 L254,71.2 L318,71.2 L318,44 L382,44 L382,71.2 L446,71.2 L446,44 L510,44 L510,71.2 L574,71.2 L574,44 L638,44 L638,71.2 L702,71.2 L702,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">D</text>
<path d="M62,131.2 L142,131.2 L142,104 L222,104 L222,131.2 L270,131.2 L270,104 L350,104 L350,131.2 L462,131.2 L462,104 L526,104 L526,131.2 L590,131.2 L590,104 L670,104 L670,131.2 L702,131.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  D ฟลิป-ฟลอป ที่มี PS และ CLR ทำงานที่พัลส์ลบ (ขณะ CLK เป็น 0) เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=d; trig=lo; pins=ps; set=a; give=wave}

PS และ CLR ทำงานเมื่อเป็น $0$ และทำงานทันที ไม่ต้องรอสัญญาณนาฬิกา

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="284" viewBox="0 0 726 284" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="278"/>
<line x1="190" y1="26" x2="190" y2="278"/>
<line x1="254" y1="26" x2="254" y2="278"/>
<line x1="318" y1="26" x2="318" y2="278"/>
<line x1="382" y1="26" x2="382" y2="278"/>
<line x1="446" y1="26" x2="446" y2="278"/>
<line x1="510" y1="26" x2="510" y2="278"/>
<line x1="574" y1="26" x2="574" y2="278"/>
<line x1="638" y1="26" x2="638" y2="278"/>
<line x1="702" y1="26" x2="702" y2="278"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,44 L430,44 L430,71.2 L478,71.2 L478,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,104 L206,104 L206,131.2 L270,131.2 L270,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<path d="M62,164 L126,164 L126,191.2 L190,191.2 L190,164 L254,164 L254,191.2 L318,191.2 L318,164 L382,164 L382,191.2 L446,191.2 L446,164 L510,164 L510,191.2 L574,191.2 L574,164 L638,164 L638,191.2 L702,191.2 L702,164 L702,164" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">D</text>
<path d="M62,251.2 L94,251.2 L94,224 L158,224 L158,251.2 L222,251.2 L222,224 L302,224 L302,251.2 L350,251.2 L350,224 L414,224 L414,251.2 L494,251.2 L494,224 L542,224 L542,251.2 L606,251.2 L606,224 L670,224 L670,251.2 L702,251.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  D ฟลิป-ฟลอป ที่มี PS และ CLR ทำงานที่พัลส์ลบ (ขณะ CLK เป็น 0) เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=d; trig=lo; pins=ps; set=a; give=table}

**ตารางการทำงาน** ($x$ คือค่าอะไรก็ได้, $Q_0$ คือค่า $Q$ ก่อนมีสัญญาณกระตุ้น, ฟลิป-ฟลอปทำงานตลอดช่วงที่ CLK เป็น 0)

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="401" height="247" viewBox="0 0 401 247" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<text x="200.5" y="26" text-anchor="middle" font-family="Mitr, Tahoma, sans-serif" font-size="21" font-weight="500" fill="#e8743b">ตารางการทำงาน</text>
<g stroke="currentColor" stroke-width="1.4" fill="none">
<rect x="16" y="42" width="369" height="197"/>
<line x1="16" y1="73" x2="385" y2="73"/>
<line x1="290" y1="42" x2="290" y2="239"/>
<line x1="16" y1="154" x2="385" y2="154" stroke-width="0.9" stroke-opacity="0.55"/>
<line x1="16" y1="208" x2="385" y2="208" stroke-width="0.9" stroke-opacity="0.55"/>
</g>
<text x="57" y="63" text-anchor="middle" font-size="16">PRESET</text>
<text x="57" y="93" text-anchor="middle" font-size="16">0</text>
<text x="57" y="120" text-anchor="middle" font-size="16">0</text>
<text x="57" y="147" text-anchor="middle" font-size="16">1</text>
<text x="57" y="174" text-anchor="middle" font-size="16">1</text>
<text x="57" y="201" text-anchor="middle" font-size="16">1</text>
<text x="57" y="228" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="63" text-anchor="middle" font-size="16">CLEAR</text>
<text x="134.5" y="93" text-anchor="middle" font-size="16">0</text>
<text x="134.5" y="120" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="147" text-anchor="middle" font-size="16">0</text>
<text x="134.5" y="174" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="201" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="228" text-anchor="middle" font-size="16">1</text>
<text x="207.5" y="63" text-anchor="middle" font-size="16">CLOCK</text>
<text x="207.5" y="93" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="207.5" y="120" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="207.5" y="147" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="207.5" y="174" text-anchor="middle" font-size="16">0</text>
<text x="207.5" y="201" text-anchor="middle" font-size="16">0</text>
<text x="207.5" y="228" text-anchor="middle" font-size="16">1</text>
<text x="267" y="63" text-anchor="middle" font-size="16">D</text>
<text x="267" y="93" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="267" y="120" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="267" y="147" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="267" y="174" text-anchor="middle" font-size="16">0</text>
<text x="267" y="201" text-anchor="middle" font-size="16">1</text>
<text x="267" y="228" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="313.8" y="63" text-anchor="middle" font-size="16">Q</text>
<text x="313.8" y="93" text-anchor="middle" font-size="16">1</text>
<text x="313.8" y="120" text-anchor="middle" font-size="16">1</text>
<text x="313.8" y="147" text-anchor="middle" font-size="16">0</text>
<text x="313.8" y="174" text-anchor="middle" font-size="16">0</text>
<text x="313.8" y="201" text-anchor="middle" font-size="16">1</text>
<text x="313.8" y="228" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<text x="361.2" y="63" text-anchor="middle" font-size="16">Q</text>
<line x1="355.5" y1="49" x2="366.5" y2="49" stroke="currentColor" stroke-width="1.3"/>
<text x="361.2" y="93" text-anchor="middle" font-size="16">1</text>
<text x="361.2" y="120" text-anchor="middle" font-size="16">0</text>
<text x="361.2" y="147" text-anchor="middle" font-size="16">1</text>
<text x="361.2" y="174" text-anchor="middle" font-size="16">1</text>
<text x="361.2" y="201" text-anchor="middle" font-size="16">0</text>
<text x="361.2" y="228" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<line x1="351.5" y1="214" x2="362.5" y2="214" stroke="currentColor" stroke-width="1.3"/>
</svg>
</div>

PS และ CLR ทำงานเมื่อเป็น $0$ และทำงานทันที ไม่ต้องรอสัญญาณนาฬิกา

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="284" viewBox="0 0 726 284" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="278"/>
<line x1="190" y1="26" x2="190" y2="278"/>
<line x1="254" y1="26" x2="254" y2="278"/>
<line x1="318" y1="26" x2="318" y2="278"/>
<line x1="382" y1="26" x2="382" y2="278"/>
<line x1="446" y1="26" x2="446" y2="278"/>
<line x1="510" y1="26" x2="510" y2="278"/>
<line x1="574" y1="26" x2="574" y2="278"/>
<line x1="638" y1="26" x2="638" y2="278"/>
<line x1="702" y1="26" x2="702" y2="278"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,44 L430,44 L430,71.2 L478,71.2 L478,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,104 L206,104 L206,131.2 L270,131.2 L270,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<path d="M62,164 L126,164 L126,191.2 L190,191.2 L190,164 L254,164 L254,191.2 L318,191.2 L318,164 L382,164 L382,191.2 L446,191.2 L446,164 L510,164 L510,191.2 L574,191.2 L574,164 L638,164 L638,191.2 L702,191.2 L702,164 L702,164" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">D</text>
<path d="M62,251.2 L94,251.2 L94,224 L158,224 L158,251.2 L222,251.2 L222,224 L302,224 L302,251.2 L350,251.2 L350,224 L414,224 L414,251.2 L494,251.2 L494,224 L542,224 L542,251.2 L606,251.2 L606,224 L670,224 L670,251.2 L702,251.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  D ฟลิป-ฟลอป ที่มี PS และ CLR ทำงานที่พัลส์ลบ (ขณะ CLK เป็น 0) เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=d; trig=lo; pins=ps; set=b; give=wave}

PS และ CLR ทำงานเมื่อเป็น $0$ และทำงานทันที ไม่ต้องรอสัญญาณนาฬิกา

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="284" viewBox="0 0 726 284" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="278"/>
<line x1="190" y1="26" x2="190" y2="278"/>
<line x1="254" y1="26" x2="254" y2="278"/>
<line x1="318" y1="26" x2="318" y2="278"/>
<line x1="382" y1="26" x2="382" y2="278"/>
<line x1="446" y1="26" x2="446" y2="278"/>
<line x1="510" y1="26" x2="510" y2="278"/>
<line x1="574" y1="26" x2="574" y2="278"/>
<line x1="638" y1="26" x2="638" y2="278"/>
<line x1="702" y1="26" x2="702" y2="278"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,44 L174,44 L174,71.2 L222,71.2 L222,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,104 L606,104 L606,131.2 L670,131.2 L670,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<path d="M62,164 L126,164 L126,191.2 L190,191.2 L190,164 L254,164 L254,191.2 L318,191.2 L318,164 L382,164 L382,191.2 L446,191.2 L446,164 L510,164 L510,191.2 L574,191.2 L574,164 L638,164 L638,191.2 L702,191.2 L702,164 L702,164" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">D</text>
<path d="M62,224 L142,224 L142,251.2 L206,251.2 L206,224 L270,224 L270,251.2 L334,251.2 L334,224 L398,224 L398,251.2 L478,251.2 L478,224 L590,224 L590,251.2 L654,251.2 L654,224 L702,224" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  D ฟลิป-ฟลอป ที่มี PS และ CLR ทำงานที่พัลส์ลบ (ขณะ CLK เป็น 0) เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=d; trig=lo; pins=ps; set=b; give=table}

**ตารางการทำงาน** ($x$ คือค่าอะไรก็ได้, $Q_0$ คือค่า $Q$ ก่อนมีสัญญาณกระตุ้น, ฟลิป-ฟลอปทำงานตลอดช่วงที่ CLK เป็น 0)

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="401" height="247" viewBox="0 0 401 247" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<text x="200.5" y="26" text-anchor="middle" font-family="Mitr, Tahoma, sans-serif" font-size="21" font-weight="500" fill="#e8743b">ตารางการทำงาน</text>
<g stroke="currentColor" stroke-width="1.4" fill="none">
<rect x="16" y="42" width="369" height="197"/>
<line x1="16" y1="73" x2="385" y2="73"/>
<line x1="290" y1="42" x2="290" y2="239"/>
<line x1="16" y1="154" x2="385" y2="154" stroke-width="0.9" stroke-opacity="0.55"/>
<line x1="16" y1="208" x2="385" y2="208" stroke-width="0.9" stroke-opacity="0.55"/>
</g>
<text x="57" y="63" text-anchor="middle" font-size="16">PRESET</text>
<text x="57" y="93" text-anchor="middle" font-size="16">0</text>
<text x="57" y="120" text-anchor="middle" font-size="16">0</text>
<text x="57" y="147" text-anchor="middle" font-size="16">1</text>
<text x="57" y="174" text-anchor="middle" font-size="16">1</text>
<text x="57" y="201" text-anchor="middle" font-size="16">1</text>
<text x="57" y="228" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="63" text-anchor="middle" font-size="16">CLEAR</text>
<text x="134.5" y="93" text-anchor="middle" font-size="16">0</text>
<text x="134.5" y="120" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="147" text-anchor="middle" font-size="16">0</text>
<text x="134.5" y="174" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="201" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="228" text-anchor="middle" font-size="16">1</text>
<text x="207.5" y="63" text-anchor="middle" font-size="16">CLOCK</text>
<text x="207.5" y="93" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="207.5" y="120" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="207.5" y="147" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="207.5" y="174" text-anchor="middle" font-size="16">0</text>
<text x="207.5" y="201" text-anchor="middle" font-size="16">0</text>
<text x="207.5" y="228" text-anchor="middle" font-size="16">1</text>
<text x="267" y="63" text-anchor="middle" font-size="16">D</text>
<text x="267" y="93" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="267" y="120" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="267" y="147" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="267" y="174" text-anchor="middle" font-size="16">0</text>
<text x="267" y="201" text-anchor="middle" font-size="16">1</text>
<text x="267" y="228" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="313.8" y="63" text-anchor="middle" font-size="16">Q</text>
<text x="313.8" y="93" text-anchor="middle" font-size="16">1</text>
<text x="313.8" y="120" text-anchor="middle" font-size="16">1</text>
<text x="313.8" y="147" text-anchor="middle" font-size="16">0</text>
<text x="313.8" y="174" text-anchor="middle" font-size="16">0</text>
<text x="313.8" y="201" text-anchor="middle" font-size="16">1</text>
<text x="313.8" y="228" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<text x="361.2" y="63" text-anchor="middle" font-size="16">Q</text>
<line x1="355.5" y1="49" x2="366.5" y2="49" stroke="currentColor" stroke-width="1.3"/>
<text x="361.2" y="93" text-anchor="middle" font-size="16">1</text>
<text x="361.2" y="120" text-anchor="middle" font-size="16">0</text>
<text x="361.2" y="147" text-anchor="middle" font-size="16">1</text>
<text x="361.2" y="174" text-anchor="middle" font-size="16">1</text>
<text x="361.2" y="201" text-anchor="middle" font-size="16">0</text>
<text x="361.2" y="228" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<line x1="351.5" y1="214" x2="362.5" y2="214" stroke="currentColor" stroke-width="1.3"/>
</svg>
</div>

PS และ CLR ทำงานเมื่อเป็น $0$ และทำงานทันที ไม่ต้องรอสัญญาณนาฬิกา

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="284" viewBox="0 0 726 284" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="278"/>
<line x1="190" y1="26" x2="190" y2="278"/>
<line x1="254" y1="26" x2="254" y2="278"/>
<line x1="318" y1="26" x2="318" y2="278"/>
<line x1="382" y1="26" x2="382" y2="278"/>
<line x1="446" y1="26" x2="446" y2="278"/>
<line x1="510" y1="26" x2="510" y2="278"/>
<line x1="574" y1="26" x2="574" y2="278"/>
<line x1="638" y1="26" x2="638" y2="278"/>
<line x1="702" y1="26" x2="702" y2="278"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,44 L174,44 L174,71.2 L222,71.2 L222,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,104 L606,104 L606,131.2 L670,131.2 L670,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<path d="M62,164 L126,164 L126,191.2 L190,191.2 L190,164 L254,164 L254,191.2 L318,191.2 L318,164 L382,164 L382,191.2 L446,191.2 L446,164 L510,164 L510,191.2 L574,191.2 L574,164 L638,164 L638,191.2 L702,191.2 L702,164 L702,164" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">D</text>
<path d="M62,224 L142,224 L142,251.2 L206,251.2 L206,224 L270,224 L270,251.2 L334,251.2 L334,224 L398,224 L398,251.2 L478,251.2 L478,224 L590,224 L590,251.2 L654,251.2 L654,224 L702,224" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  D ฟลิป-ฟลอป ที่มี PS และ CLR ทำงานที่พัลส์ลบ (ขณะ CLK เป็น 0) เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=d; trig=lo; pins=ps; set=c; give=wave}

PS และ CLR ทำงานเมื่อเป็น $0$ และทำงานทันที ไม่ต้องรอสัญญาณนาฬิกา

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="284" viewBox="0 0 726 284" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="278"/>
<line x1="190" y1="26" x2="190" y2="278"/>
<line x1="254" y1="26" x2="254" y2="278"/>
<line x1="318" y1="26" x2="318" y2="278"/>
<line x1="382" y1="26" x2="382" y2="278"/>
<line x1="446" y1="26" x2="446" y2="278"/>
<line x1="510" y1="26" x2="510" y2="278"/>
<line x1="574" y1="26" x2="574" y2="278"/>
<line x1="638" y1="26" x2="638" y2="278"/>
<line x1="702" y1="26" x2="702" y2="278"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,44 L430,44 L430,71.2 L478,71.2 L478,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,104 L214,104 L214,131.2 L278,131.2 L278,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<path d="M62,164 L126,164 L126,191.2 L190,191.2 L190,164 L254,164 L254,191.2 L318,191.2 L318,164 L382,164 L382,191.2 L446,191.2 L446,164 L510,164 L510,191.2 L574,191.2 L574,164 L638,164 L638,191.2 L702,191.2 L702,164 L702,164" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">D</text>
<path d="M62,251.2 L142,251.2 L142,224 L222,224 L222,251.2 L270,251.2 L270,224 L350,224 L350,251.2 L462,251.2 L462,224 L526,224 L526,251.2 L590,251.2 L590,224 L670,224 L670,251.2 L702,251.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  D ฟลิป-ฟลอป ที่มี PS และ CLR ทำงานที่พัลส์ลบ (ขณะ CLK เป็น 0) เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=d; trig=lo; pins=ps; set=c; give=table}

**ตารางการทำงาน** ($x$ คือค่าอะไรก็ได้, $Q_0$ คือค่า $Q$ ก่อนมีสัญญาณกระตุ้น, ฟลิป-ฟลอปทำงานตลอดช่วงที่ CLK เป็น 0)

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="401" height="247" viewBox="0 0 401 247" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<text x="200.5" y="26" text-anchor="middle" font-family="Mitr, Tahoma, sans-serif" font-size="21" font-weight="500" fill="#e8743b">ตารางการทำงาน</text>
<g stroke="currentColor" stroke-width="1.4" fill="none">
<rect x="16" y="42" width="369" height="197"/>
<line x1="16" y1="73" x2="385" y2="73"/>
<line x1="290" y1="42" x2="290" y2="239"/>
<line x1="16" y1="154" x2="385" y2="154" stroke-width="0.9" stroke-opacity="0.55"/>
<line x1="16" y1="208" x2="385" y2="208" stroke-width="0.9" stroke-opacity="0.55"/>
</g>
<text x="57" y="63" text-anchor="middle" font-size="16">PRESET</text>
<text x="57" y="93" text-anchor="middle" font-size="16">0</text>
<text x="57" y="120" text-anchor="middle" font-size="16">0</text>
<text x="57" y="147" text-anchor="middle" font-size="16">1</text>
<text x="57" y="174" text-anchor="middle" font-size="16">1</text>
<text x="57" y="201" text-anchor="middle" font-size="16">1</text>
<text x="57" y="228" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="63" text-anchor="middle" font-size="16">CLEAR</text>
<text x="134.5" y="93" text-anchor="middle" font-size="16">0</text>
<text x="134.5" y="120" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="147" text-anchor="middle" font-size="16">0</text>
<text x="134.5" y="174" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="201" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="228" text-anchor="middle" font-size="16">1</text>
<text x="207.5" y="63" text-anchor="middle" font-size="16">CLOCK</text>
<text x="207.5" y="93" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="207.5" y="120" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="207.5" y="147" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="207.5" y="174" text-anchor="middle" font-size="16">0</text>
<text x="207.5" y="201" text-anchor="middle" font-size="16">0</text>
<text x="207.5" y="228" text-anchor="middle" font-size="16">1</text>
<text x="267" y="63" text-anchor="middle" font-size="16">D</text>
<text x="267" y="93" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="267" y="120" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="267" y="147" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="267" y="174" text-anchor="middle" font-size="16">0</text>
<text x="267" y="201" text-anchor="middle" font-size="16">1</text>
<text x="267" y="228" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="313.8" y="63" text-anchor="middle" font-size="16">Q</text>
<text x="313.8" y="93" text-anchor="middle" font-size="16">1</text>
<text x="313.8" y="120" text-anchor="middle" font-size="16">1</text>
<text x="313.8" y="147" text-anchor="middle" font-size="16">0</text>
<text x="313.8" y="174" text-anchor="middle" font-size="16">0</text>
<text x="313.8" y="201" text-anchor="middle" font-size="16">1</text>
<text x="313.8" y="228" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<text x="361.2" y="63" text-anchor="middle" font-size="16">Q</text>
<line x1="355.5" y1="49" x2="366.5" y2="49" stroke="currentColor" stroke-width="1.3"/>
<text x="361.2" y="93" text-anchor="middle" font-size="16">1</text>
<text x="361.2" y="120" text-anchor="middle" font-size="16">0</text>
<text x="361.2" y="147" text-anchor="middle" font-size="16">1</text>
<text x="361.2" y="174" text-anchor="middle" font-size="16">1</text>
<text x="361.2" y="201" text-anchor="middle" font-size="16">0</text>
<text x="361.2" y="228" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<line x1="351.5" y1="214" x2="362.5" y2="214" stroke="currentColor" stroke-width="1.3"/>
</svg>
</div>

PS และ CLR ทำงานเมื่อเป็น $0$ และทำงานทันที ไม่ต้องรอสัญญาณนาฬิกา

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="284" viewBox="0 0 726 284" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="278"/>
<line x1="190" y1="26" x2="190" y2="278"/>
<line x1="254" y1="26" x2="254" y2="278"/>
<line x1="318" y1="26" x2="318" y2="278"/>
<line x1="382" y1="26" x2="382" y2="278"/>
<line x1="446" y1="26" x2="446" y2="278"/>
<line x1="510" y1="26" x2="510" y2="278"/>
<line x1="574" y1="26" x2="574" y2="278"/>
<line x1="638" y1="26" x2="638" y2="278"/>
<line x1="702" y1="26" x2="702" y2="278"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,44 L430,44 L430,71.2 L478,71.2 L478,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,104 L214,104 L214,131.2 L278,131.2 L278,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<path d="M62,164 L126,164 L126,191.2 L190,191.2 L190,164 L254,164 L254,191.2 L318,191.2 L318,164 L382,164 L382,191.2 L446,191.2 L446,164 L510,164 L510,191.2 L574,191.2 L574,164 L638,164 L638,191.2 L702,191.2 L702,164 L702,164" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">D</text>
<path d="M62,251.2 L142,251.2 L142,224 L222,224 L222,251.2 L270,251.2 L270,224 L350,224 L350,251.2 L462,251.2 L462,224 L526,224 L526,251.2 L590,251.2 L590,224 L670,224 L670,251.2 L702,251.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  T ฟลิป-ฟลอป ทำงานที่ขอบขาขึ้นของสัญญาณนาฬิกา เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=t; trig=rise; pins=none; set=a; give=wave}

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
<path d="M62,104 L350,104 L350,131.2 L414,131.2 L414,104 L574,104 L574,131.2 L702,131.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  T ฟลิป-ฟลอป ทำงานที่ขอบขาขึ้นของสัญญาณนาฬิกา เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=t; trig=rise; pins=none; set=a; give=table}

**ตารางการทำงาน** ($x$ คือค่าอะไรก็ได้, $Q_0$ คือค่า $Q$ ก่อนมีสัญญาณกระตุ้น)

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="255" height="166" viewBox="0 0 255 166" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<text x="127.5" y="26" text-anchor="middle" font-family="Mitr, Tahoma, sans-serif" font-size="21" font-weight="500" fill="#e8743b">ตารางการทำงาน</text>
<g stroke="currentColor" stroke-width="1.4" fill="none">
<rect x="16" y="42" width="223" height="116"/>
<line x1="16" y1="73" x2="239" y2="73"/>
<line x1="144" y1="42" x2="144" y2="158"/>
<line x1="16" y1="127" x2="239" y2="127" stroke-width="0.9" stroke-opacity="0.55"/>
</g>
<text x="57" y="63" text-anchor="middle" font-size="16">CLOCK</text>
<line x1="57" y1="95" x2="57" y2="82" stroke="currentColor" stroke-width="1.6"/>
<polygon points="57,81 52.5,88 61.5,88" fill="currentColor"/>
<line x1="57" y1="122" x2="57" y2="109" stroke="currentColor" stroke-width="1.6"/>
<polygon points="57,108 52.5,115 61.5,115" fill="currentColor"/>
<text x="57" y="147" text-anchor="middle" font-size="16" font-family="Mitr, Tahoma, sans-serif" font-size="14">ไม่มีขอบ</text>
<text x="121" y="63" text-anchor="middle" font-size="16">T</text>
<text x="121" y="93" text-anchor="middle" font-size="16">0</text>
<text x="121" y="120" text-anchor="middle" font-size="16">1</text>
<text x="121" y="147" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="167.8" y="63" text-anchor="middle" font-size="16">Q</text>
<text x="167.8" y="93" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<text x="167.8" y="120" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<line x1="158" y1="106" x2="169" y2="106" stroke="currentColor" stroke-width="1.3"/>
<text x="167.8" y="147" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<text x="215.2" y="63" text-anchor="middle" font-size="16">Q</text>
<line x1="209.5" y1="49" x2="220.5" y2="49" stroke="currentColor" stroke-width="1.3"/>
<text x="215.2" y="93" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<line x1="205.5" y1="79" x2="216.5" y2="79" stroke="currentColor" stroke-width="1.3"/>
<text x="215.2" y="120" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<text x="215.2" y="147" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<line x1="205.5" y1="133" x2="216.5" y2="133" stroke="currentColor" stroke-width="1.3"/>
</svg>
</div>

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
<path d="M62,104 L350,104 L350,131.2 L414,131.2 L414,104 L574,104 L574,131.2 L702,131.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  T ฟลิป-ฟลอป ทำงานที่ขอบขาขึ้นของสัญญาณนาฬิกา เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=t; trig=rise; pins=none; set=b; give=wave}

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
<path d="M62,131.2 L190,131.2 L190,104 L558,104 L558,131.2 L702,131.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  T ฟลิป-ฟลอป ทำงานที่ขอบขาขึ้นของสัญญาณนาฬิกา เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=t; trig=rise; pins=none; set=b; give=table}

**ตารางการทำงาน** ($x$ คือค่าอะไรก็ได้, $Q_0$ คือค่า $Q$ ก่อนมีสัญญาณกระตุ้น)

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="255" height="166" viewBox="0 0 255 166" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<text x="127.5" y="26" text-anchor="middle" font-family="Mitr, Tahoma, sans-serif" font-size="21" font-weight="500" fill="#e8743b">ตารางการทำงาน</text>
<g stroke="currentColor" stroke-width="1.4" fill="none">
<rect x="16" y="42" width="223" height="116"/>
<line x1="16" y1="73" x2="239" y2="73"/>
<line x1="144" y1="42" x2="144" y2="158"/>
<line x1="16" y1="127" x2="239" y2="127" stroke-width="0.9" stroke-opacity="0.55"/>
</g>
<text x="57" y="63" text-anchor="middle" font-size="16">CLOCK</text>
<line x1="57" y1="95" x2="57" y2="82" stroke="currentColor" stroke-width="1.6"/>
<polygon points="57,81 52.5,88 61.5,88" fill="currentColor"/>
<line x1="57" y1="122" x2="57" y2="109" stroke="currentColor" stroke-width="1.6"/>
<polygon points="57,108 52.5,115 61.5,115" fill="currentColor"/>
<text x="57" y="147" text-anchor="middle" font-size="16" font-family="Mitr, Tahoma, sans-serif" font-size="14">ไม่มีขอบ</text>
<text x="121" y="63" text-anchor="middle" font-size="16">T</text>
<text x="121" y="93" text-anchor="middle" font-size="16">0</text>
<text x="121" y="120" text-anchor="middle" font-size="16">1</text>
<text x="121" y="147" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="167.8" y="63" text-anchor="middle" font-size="16">Q</text>
<text x="167.8" y="93" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<text x="167.8" y="120" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<line x1="158" y1="106" x2="169" y2="106" stroke="currentColor" stroke-width="1.3"/>
<text x="167.8" y="147" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<text x="215.2" y="63" text-anchor="middle" font-size="16">Q</text>
<line x1="209.5" y1="49" x2="220.5" y2="49" stroke="currentColor" stroke-width="1.3"/>
<text x="215.2" y="93" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<line x1="205.5" y1="79" x2="216.5" y2="79" stroke="currentColor" stroke-width="1.3"/>
<text x="215.2" y="120" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<text x="215.2" y="147" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<line x1="205.5" y1="133" x2="216.5" y2="133" stroke="currentColor" stroke-width="1.3"/>
</svg>
</div>

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
<path d="M62,131.2 L190,131.2 L190,104 L558,104 L558,131.2 L702,131.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  T ฟลิป-ฟลอป ทำงานที่ขอบขาขึ้นของสัญญาณนาฬิกา เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=t; trig=rise; pins=none; set=c; give=wave}

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
<path d="M62,104 L222,104 L222,131.2 L302,131.2 L302,104 L398,104 L398,131.2 L590,131.2 L590,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  T ฟลิป-ฟลอป ทำงานที่ขอบขาขึ้นของสัญญาณนาฬิกา เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=t; trig=rise; pins=none; set=c; give=table}

**ตารางการทำงาน** ($x$ คือค่าอะไรก็ได้, $Q_0$ คือค่า $Q$ ก่อนมีสัญญาณกระตุ้น)

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="255" height="166" viewBox="0 0 255 166" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<text x="127.5" y="26" text-anchor="middle" font-family="Mitr, Tahoma, sans-serif" font-size="21" font-weight="500" fill="#e8743b">ตารางการทำงาน</text>
<g stroke="currentColor" stroke-width="1.4" fill="none">
<rect x="16" y="42" width="223" height="116"/>
<line x1="16" y1="73" x2="239" y2="73"/>
<line x1="144" y1="42" x2="144" y2="158"/>
<line x1="16" y1="127" x2="239" y2="127" stroke-width="0.9" stroke-opacity="0.55"/>
</g>
<text x="57" y="63" text-anchor="middle" font-size="16">CLOCK</text>
<line x1="57" y1="95" x2="57" y2="82" stroke="currentColor" stroke-width="1.6"/>
<polygon points="57,81 52.5,88 61.5,88" fill="currentColor"/>
<line x1="57" y1="122" x2="57" y2="109" stroke="currentColor" stroke-width="1.6"/>
<polygon points="57,108 52.5,115 61.5,115" fill="currentColor"/>
<text x="57" y="147" text-anchor="middle" font-size="16" font-family="Mitr, Tahoma, sans-serif" font-size="14">ไม่มีขอบ</text>
<text x="121" y="63" text-anchor="middle" font-size="16">T</text>
<text x="121" y="93" text-anchor="middle" font-size="16">0</text>
<text x="121" y="120" text-anchor="middle" font-size="16">1</text>
<text x="121" y="147" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="167.8" y="63" text-anchor="middle" font-size="16">Q</text>
<text x="167.8" y="93" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<text x="167.8" y="120" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<line x1="158" y1="106" x2="169" y2="106" stroke="currentColor" stroke-width="1.3"/>
<text x="167.8" y="147" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<text x="215.2" y="63" text-anchor="middle" font-size="16">Q</text>
<line x1="209.5" y1="49" x2="220.5" y2="49" stroke="currentColor" stroke-width="1.3"/>
<text x="215.2" y="93" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<line x1="205.5" y1="79" x2="216.5" y2="79" stroke="currentColor" stroke-width="1.3"/>
<text x="215.2" y="120" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<text x="215.2" y="147" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<line x1="205.5" y1="133" x2="216.5" y2="133" stroke="currentColor" stroke-width="1.3"/>
</svg>
</div>

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
<path d="M62,104 L222,104 L222,131.2 L302,131.2 L302,104 L398,104 L398,131.2 L590,131.2 L590,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  T ฟลิป-ฟลอป ที่มี PS และ CLR ทำงานที่ขอบขาขึ้นของสัญญาณนาฬิกา เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=t; trig=rise; pins=ps; set=a; give=wave}

PS และ CLR ทำงานเมื่อเป็น $0$ และทำงานทันที ไม่ต้องรอสัญญาณนาฬิกา

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="284" viewBox="0 0 726 284" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="278"/>
<line x1="254" y1="26" x2="254" y2="278"/>
<line x1="382" y1="26" x2="382" y2="278"/>
<line x1="510" y1="26" x2="510" y2="278"/>
<line x1="638" y1="26" x2="638" y2="278"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,44 L430,44 L430,71.2 L478,71.2 L478,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,104 L606,104 L606,131.2 L670,131.2 L670,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<path d="M62,191.2 L126,191.2 L126,164 L190,164 L190,191.2 L254,191.2 L254,164 L318,164 L318,191.2 L382,191.2 L382,164 L446,164 L446,191.2 L510,191.2 L510,164 L574,164 L574,191.2 L638,191.2 L638,164 L702,164 L702,191.2 L702,191.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">T</text>
<path d="M62,224 L350,224 L350,251.2 L414,251.2 L414,224 L574,224 L574,251.2 L702,251.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  T ฟลิป-ฟลอป ที่มี PS และ CLR ทำงานที่ขอบขาขึ้นของสัญญาณนาฬิกา เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=t; trig=rise; pins=ps; set=a; give=table}

**ตารางการทำงาน** ($x$ คือค่าอะไรก็ได้, $Q_0$ คือค่า $Q$ ก่อนมีสัญญาณกระตุ้น)

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="410" height="247" viewBox="0 0 410 247" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<text x="205" y="26" text-anchor="middle" font-family="Mitr, Tahoma, sans-serif" font-size="21" font-weight="500" fill="#e8743b">ตารางการทำงาน</text>
<g stroke="currentColor" stroke-width="1.4" fill="none">
<rect x="16" y="42" width="378" height="197"/>
<line x1="16" y1="73" x2="394" y2="73"/>
<line x1="299" y1="42" x2="299" y2="239"/>
<line x1="16" y1="154" x2="394" y2="154" stroke-width="0.9" stroke-opacity="0.55"/>
<line x1="16" y1="208" x2="394" y2="208" stroke-width="0.9" stroke-opacity="0.55"/>
</g>
<text x="57" y="63" text-anchor="middle" font-size="16">PRESET</text>
<text x="57" y="93" text-anchor="middle" font-size="16">0</text>
<text x="57" y="120" text-anchor="middle" font-size="16">0</text>
<text x="57" y="147" text-anchor="middle" font-size="16">1</text>
<text x="57" y="174" text-anchor="middle" font-size="16">1</text>
<text x="57" y="201" text-anchor="middle" font-size="16">1</text>
<text x="57" y="228" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="63" text-anchor="middle" font-size="16">CLEAR</text>
<text x="134.5" y="93" text-anchor="middle" font-size="16">0</text>
<text x="134.5" y="120" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="147" text-anchor="middle" font-size="16">0</text>
<text x="134.5" y="174" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="201" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="228" text-anchor="middle" font-size="16">1</text>
<text x="212" y="63" text-anchor="middle" font-size="16">CLOCK</text>
<text x="212" y="93" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="212" y="120" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="212" y="147" text-anchor="middle" font-size="16" font-style="italic">x</text>
<line x1="212" y1="176" x2="212" y2="163" stroke="currentColor" stroke-width="1.6"/>
<polygon points="212,162 207.5,169 216.5,169" fill="currentColor"/>
<line x1="212" y1="203" x2="212" y2="190" stroke="currentColor" stroke-width="1.6"/>
<polygon points="212,189 207.5,196 216.5,196" fill="currentColor"/>
<text x="212" y="228" text-anchor="middle" font-size="16" font-family="Mitr, Tahoma, sans-serif" font-size="14">ไม่มีขอบ</text>
<text x="276" y="63" text-anchor="middle" font-size="16">T</text>
<text x="276" y="93" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="276" y="120" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="276" y="147" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="276" y="174" text-anchor="middle" font-size="16">0</text>
<text x="276" y="201" text-anchor="middle" font-size="16">1</text>
<text x="276" y="228" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="322.8" y="63" text-anchor="middle" font-size="16">Q</text>
<text x="322.8" y="93" text-anchor="middle" font-size="16">1</text>
<text x="322.8" y="120" text-anchor="middle" font-size="16">1</text>
<text x="322.8" y="147" text-anchor="middle" font-size="16">0</text>
<text x="322.8" y="174" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<text x="322.8" y="201" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<line x1="313" y1="187" x2="324" y2="187" stroke="currentColor" stroke-width="1.3"/>
<text x="322.8" y="228" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<text x="370.2" y="63" text-anchor="middle" font-size="16">Q</text>
<line x1="364.5" y1="49" x2="375.5" y2="49" stroke="currentColor" stroke-width="1.3"/>
<text x="370.2" y="93" text-anchor="middle" font-size="16">1</text>
<text x="370.2" y="120" text-anchor="middle" font-size="16">0</text>
<text x="370.2" y="147" text-anchor="middle" font-size="16">1</text>
<text x="370.2" y="174" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<line x1="360.5" y1="160" x2="371.5" y2="160" stroke="currentColor" stroke-width="1.3"/>
<text x="370.2" y="201" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<text x="370.2" y="228" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<line x1="360.5" y1="214" x2="371.5" y2="214" stroke="currentColor" stroke-width="1.3"/>
</svg>
</div>

PS และ CLR ทำงานเมื่อเป็น $0$ และทำงานทันที ไม่ต้องรอสัญญาณนาฬิกา

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="284" viewBox="0 0 726 284" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="278"/>
<line x1="254" y1="26" x2="254" y2="278"/>
<line x1="382" y1="26" x2="382" y2="278"/>
<line x1="510" y1="26" x2="510" y2="278"/>
<line x1="638" y1="26" x2="638" y2="278"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,44 L430,44 L430,71.2 L478,71.2 L478,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,104 L606,104 L606,131.2 L670,131.2 L670,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<path d="M62,191.2 L126,191.2 L126,164 L190,164 L190,191.2 L254,191.2 L254,164 L318,164 L318,191.2 L382,191.2 L382,164 L446,164 L446,191.2 L510,191.2 L510,164 L574,164 L574,191.2 L638,191.2 L638,164 L702,164 L702,191.2 L702,191.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">T</text>
<path d="M62,224 L350,224 L350,251.2 L414,251.2 L414,224 L574,224 L574,251.2 L702,251.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  T ฟลิป-ฟลอป ที่มี PS และ CLR ทำงานที่ขอบขาขึ้นของสัญญาณนาฬิกา เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=t; trig=rise; pins=ps; set=b; give=wave}

PS และ CLR ทำงานเมื่อเป็น $0$ และทำงานทันที ไม่ต้องรอสัญญาณนาฬิกา

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="284" viewBox="0 0 726 284" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="278"/>
<line x1="254" y1="26" x2="254" y2="278"/>
<line x1="382" y1="26" x2="382" y2="278"/>
<line x1="510" y1="26" x2="510" y2="278"/>
<line x1="638" y1="26" x2="638" y2="278"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,44 L174,44 L174,71.2 L222,71.2 L222,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,104 L606,104 L606,131.2 L670,131.2 L670,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<path d="M62,191.2 L126,191.2 L126,164 L190,164 L190,191.2 L254,191.2 L254,164 L318,164 L318,191.2 L382,191.2 L382,164 L446,164 L446,191.2 L510,191.2 L510,164 L574,164 L574,191.2 L638,191.2 L638,164 L702,164 L702,191.2 L702,191.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">T</text>
<path d="M62,251.2 L190,251.2 L190,224 L558,224 L558,251.2 L702,251.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  T ฟลิป-ฟลอป ที่มี PS และ CLR ทำงานที่ขอบขาขึ้นของสัญญาณนาฬิกา เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=t; trig=rise; pins=ps; set=b; give=table}

**ตารางการทำงาน** ($x$ คือค่าอะไรก็ได้, $Q_0$ คือค่า $Q$ ก่อนมีสัญญาณกระตุ้น)

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="410" height="247" viewBox="0 0 410 247" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<text x="205" y="26" text-anchor="middle" font-family="Mitr, Tahoma, sans-serif" font-size="21" font-weight="500" fill="#e8743b">ตารางการทำงาน</text>
<g stroke="currentColor" stroke-width="1.4" fill="none">
<rect x="16" y="42" width="378" height="197"/>
<line x1="16" y1="73" x2="394" y2="73"/>
<line x1="299" y1="42" x2="299" y2="239"/>
<line x1="16" y1="154" x2="394" y2="154" stroke-width="0.9" stroke-opacity="0.55"/>
<line x1="16" y1="208" x2="394" y2="208" stroke-width="0.9" stroke-opacity="0.55"/>
</g>
<text x="57" y="63" text-anchor="middle" font-size="16">PRESET</text>
<text x="57" y="93" text-anchor="middle" font-size="16">0</text>
<text x="57" y="120" text-anchor="middle" font-size="16">0</text>
<text x="57" y="147" text-anchor="middle" font-size="16">1</text>
<text x="57" y="174" text-anchor="middle" font-size="16">1</text>
<text x="57" y="201" text-anchor="middle" font-size="16">1</text>
<text x="57" y="228" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="63" text-anchor="middle" font-size="16">CLEAR</text>
<text x="134.5" y="93" text-anchor="middle" font-size="16">0</text>
<text x="134.5" y="120" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="147" text-anchor="middle" font-size="16">0</text>
<text x="134.5" y="174" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="201" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="228" text-anchor="middle" font-size="16">1</text>
<text x="212" y="63" text-anchor="middle" font-size="16">CLOCK</text>
<text x="212" y="93" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="212" y="120" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="212" y="147" text-anchor="middle" font-size="16" font-style="italic">x</text>
<line x1="212" y1="176" x2="212" y2="163" stroke="currentColor" stroke-width="1.6"/>
<polygon points="212,162 207.5,169 216.5,169" fill="currentColor"/>
<line x1="212" y1="203" x2="212" y2="190" stroke="currentColor" stroke-width="1.6"/>
<polygon points="212,189 207.5,196 216.5,196" fill="currentColor"/>
<text x="212" y="228" text-anchor="middle" font-size="16" font-family="Mitr, Tahoma, sans-serif" font-size="14">ไม่มีขอบ</text>
<text x="276" y="63" text-anchor="middle" font-size="16">T</text>
<text x="276" y="93" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="276" y="120" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="276" y="147" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="276" y="174" text-anchor="middle" font-size="16">0</text>
<text x="276" y="201" text-anchor="middle" font-size="16">1</text>
<text x="276" y="228" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="322.8" y="63" text-anchor="middle" font-size="16">Q</text>
<text x="322.8" y="93" text-anchor="middle" font-size="16">1</text>
<text x="322.8" y="120" text-anchor="middle" font-size="16">1</text>
<text x="322.8" y="147" text-anchor="middle" font-size="16">0</text>
<text x="322.8" y="174" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<text x="322.8" y="201" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<line x1="313" y1="187" x2="324" y2="187" stroke="currentColor" stroke-width="1.3"/>
<text x="322.8" y="228" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<text x="370.2" y="63" text-anchor="middle" font-size="16">Q</text>
<line x1="364.5" y1="49" x2="375.5" y2="49" stroke="currentColor" stroke-width="1.3"/>
<text x="370.2" y="93" text-anchor="middle" font-size="16">1</text>
<text x="370.2" y="120" text-anchor="middle" font-size="16">0</text>
<text x="370.2" y="147" text-anchor="middle" font-size="16">1</text>
<text x="370.2" y="174" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<line x1="360.5" y1="160" x2="371.5" y2="160" stroke="currentColor" stroke-width="1.3"/>
<text x="370.2" y="201" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<text x="370.2" y="228" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<line x1="360.5" y1="214" x2="371.5" y2="214" stroke="currentColor" stroke-width="1.3"/>
</svg>
</div>

PS และ CLR ทำงานเมื่อเป็น $0$ และทำงานทันที ไม่ต้องรอสัญญาณนาฬิกา

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="284" viewBox="0 0 726 284" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="278"/>
<line x1="254" y1="26" x2="254" y2="278"/>
<line x1="382" y1="26" x2="382" y2="278"/>
<line x1="510" y1="26" x2="510" y2="278"/>
<line x1="638" y1="26" x2="638" y2="278"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,44 L174,44 L174,71.2 L222,71.2 L222,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,104 L606,104 L606,131.2 L670,131.2 L670,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<path d="M62,191.2 L126,191.2 L126,164 L190,164 L190,191.2 L254,191.2 L254,164 L318,164 L318,191.2 L382,191.2 L382,164 L446,164 L446,191.2 L510,191.2 L510,164 L574,164 L574,191.2 L638,191.2 L638,164 L702,164 L702,191.2 L702,191.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">T</text>
<path d="M62,251.2 L190,251.2 L190,224 L558,224 L558,251.2 L702,251.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  T ฟลิป-ฟลอป ที่มี PS และ CLR ทำงานที่ขอบขาขึ้นของสัญญาณนาฬิกา เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=t; trig=rise; pins=ps; set=c; give=wave}

PS และ CLR ทำงานเมื่อเป็น $0$ และทำงานทันที ไม่ต้องรอสัญญาณนาฬิกา

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="284" viewBox="0 0 726 284" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="278"/>
<line x1="254" y1="26" x2="254" y2="278"/>
<line x1="382" y1="26" x2="382" y2="278"/>
<line x1="510" y1="26" x2="510" y2="278"/>
<line x1="638" y1="26" x2="638" y2="278"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,44 L350,44 L350,71.2 L414,71.2 L414,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,104 L214,104 L214,131.2 L278,131.2 L278,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<path d="M62,191.2 L126,191.2 L126,164 L190,164 L190,191.2 L254,191.2 L254,164 L318,164 L318,191.2 L382,191.2 L382,164 L446,164 L446,191.2 L510,191.2 L510,164 L574,164 L574,191.2 L638,191.2 L638,164 L702,164 L702,191.2 L702,191.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">T</text>
<path d="M62,224 L222,224 L222,251.2 L302,251.2 L302,224 L398,224 L398,251.2 L590,251.2 L590,224 L702,224" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  T ฟลิป-ฟลอป ที่มี PS และ CLR ทำงานที่ขอบขาขึ้นของสัญญาณนาฬิกา เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=t; trig=rise; pins=ps; set=c; give=table}

**ตารางการทำงาน** ($x$ คือค่าอะไรก็ได้, $Q_0$ คือค่า $Q$ ก่อนมีสัญญาณกระตุ้น)

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="410" height="247" viewBox="0 0 410 247" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<text x="205" y="26" text-anchor="middle" font-family="Mitr, Tahoma, sans-serif" font-size="21" font-weight="500" fill="#e8743b">ตารางการทำงาน</text>
<g stroke="currentColor" stroke-width="1.4" fill="none">
<rect x="16" y="42" width="378" height="197"/>
<line x1="16" y1="73" x2="394" y2="73"/>
<line x1="299" y1="42" x2="299" y2="239"/>
<line x1="16" y1="154" x2="394" y2="154" stroke-width="0.9" stroke-opacity="0.55"/>
<line x1="16" y1="208" x2="394" y2="208" stroke-width="0.9" stroke-opacity="0.55"/>
</g>
<text x="57" y="63" text-anchor="middle" font-size="16">PRESET</text>
<text x="57" y="93" text-anchor="middle" font-size="16">0</text>
<text x="57" y="120" text-anchor="middle" font-size="16">0</text>
<text x="57" y="147" text-anchor="middle" font-size="16">1</text>
<text x="57" y="174" text-anchor="middle" font-size="16">1</text>
<text x="57" y="201" text-anchor="middle" font-size="16">1</text>
<text x="57" y="228" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="63" text-anchor="middle" font-size="16">CLEAR</text>
<text x="134.5" y="93" text-anchor="middle" font-size="16">0</text>
<text x="134.5" y="120" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="147" text-anchor="middle" font-size="16">0</text>
<text x="134.5" y="174" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="201" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="228" text-anchor="middle" font-size="16">1</text>
<text x="212" y="63" text-anchor="middle" font-size="16">CLOCK</text>
<text x="212" y="93" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="212" y="120" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="212" y="147" text-anchor="middle" font-size="16" font-style="italic">x</text>
<line x1="212" y1="176" x2="212" y2="163" stroke="currentColor" stroke-width="1.6"/>
<polygon points="212,162 207.5,169 216.5,169" fill="currentColor"/>
<line x1="212" y1="203" x2="212" y2="190" stroke="currentColor" stroke-width="1.6"/>
<polygon points="212,189 207.5,196 216.5,196" fill="currentColor"/>
<text x="212" y="228" text-anchor="middle" font-size="16" font-family="Mitr, Tahoma, sans-serif" font-size="14">ไม่มีขอบ</text>
<text x="276" y="63" text-anchor="middle" font-size="16">T</text>
<text x="276" y="93" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="276" y="120" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="276" y="147" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="276" y="174" text-anchor="middle" font-size="16">0</text>
<text x="276" y="201" text-anchor="middle" font-size="16">1</text>
<text x="276" y="228" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="322.8" y="63" text-anchor="middle" font-size="16">Q</text>
<text x="322.8" y="93" text-anchor="middle" font-size="16">1</text>
<text x="322.8" y="120" text-anchor="middle" font-size="16">1</text>
<text x="322.8" y="147" text-anchor="middle" font-size="16">0</text>
<text x="322.8" y="174" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<text x="322.8" y="201" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<line x1="313" y1="187" x2="324" y2="187" stroke="currentColor" stroke-width="1.3"/>
<text x="322.8" y="228" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<text x="370.2" y="63" text-anchor="middle" font-size="16">Q</text>
<line x1="364.5" y1="49" x2="375.5" y2="49" stroke="currentColor" stroke-width="1.3"/>
<text x="370.2" y="93" text-anchor="middle" font-size="16">1</text>
<text x="370.2" y="120" text-anchor="middle" font-size="16">0</text>
<text x="370.2" y="147" text-anchor="middle" font-size="16">1</text>
<text x="370.2" y="174" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<line x1="360.5" y1="160" x2="371.5" y2="160" stroke="currentColor" stroke-width="1.3"/>
<text x="370.2" y="201" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<text x="370.2" y="228" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<line x1="360.5" y1="214" x2="371.5" y2="214" stroke="currentColor" stroke-width="1.3"/>
</svg>
</div>

PS และ CLR ทำงานเมื่อเป็น $0$ และทำงานทันที ไม่ต้องรอสัญญาณนาฬิกา

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="284" viewBox="0 0 726 284" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="278"/>
<line x1="254" y1="26" x2="254" y2="278"/>
<line x1="382" y1="26" x2="382" y2="278"/>
<line x1="510" y1="26" x2="510" y2="278"/>
<line x1="638" y1="26" x2="638" y2="278"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,44 L350,44 L350,71.2 L414,71.2 L414,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,104 L214,104 L214,131.2 L278,131.2 L278,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<path d="M62,191.2 L126,191.2 L126,164 L190,164 L190,191.2 L254,191.2 L254,164 L318,164 L318,191.2 L382,191.2 L382,164 L446,164 L446,191.2 L510,191.2 L510,164 L574,164 L574,191.2 L638,191.2 L638,164 L702,164 L702,191.2 L702,191.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">T</text>
<path d="M62,224 L222,224 L222,251.2 L302,251.2 L302,224 L398,224 L398,251.2 L590,251.2 L590,224 L702,224" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  T ฟลิป-ฟลอป ทำงานที่ขอบขาลงของสัญญาณนาฬิกา เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=t; trig=fall; pins=none; set=a; give=wave}

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
<path d="M62,44 L126,44 L126,71.2 L190,71.2 L190,44 L254,44 L254,71.2 L318,71.2 L318,44 L382,44 L382,71.2 L446,71.2 L446,44 L510,44 L510,71.2 L574,71.2 L574,44 L638,44 L638,71.2 L702,71.2 L702,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">T</text>
<path d="M62,104 L350,104 L350,131.2 L414,131.2 L414,104 L574,104 L574,131.2 L702,131.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  T ฟลิป-ฟลอป ทำงานที่ขอบขาลงของสัญญาณนาฬิกา เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=t; trig=fall; pins=none; set=a; give=table}

**ตารางการทำงาน** ($x$ คือค่าอะไรก็ได้, $Q_0$ คือค่า $Q$ ก่อนมีสัญญาณกระตุ้น)

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="255" height="166" viewBox="0 0 255 166" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<text x="127.5" y="26" text-anchor="middle" font-family="Mitr, Tahoma, sans-serif" font-size="21" font-weight="500" fill="#e8743b">ตารางการทำงาน</text>
<g stroke="currentColor" stroke-width="1.4" fill="none">
<rect x="16" y="42" width="223" height="116"/>
<line x1="16" y1="73" x2="239" y2="73"/>
<line x1="144" y1="42" x2="144" y2="158"/>
<line x1="16" y1="127" x2="239" y2="127" stroke-width="0.9" stroke-opacity="0.55"/>
</g>
<text x="57" y="63" text-anchor="middle" font-size="16">CLOCK</text>
<line x1="57" y1="82" x2="57" y2="95" stroke="currentColor" stroke-width="1.6"/>
<polygon points="57,96 52.5,89 61.5,89" fill="currentColor"/>
<line x1="57" y1="109" x2="57" y2="122" stroke="currentColor" stroke-width="1.6"/>
<polygon points="57,123 52.5,116 61.5,116" fill="currentColor"/>
<text x="57" y="147" text-anchor="middle" font-size="16" font-family="Mitr, Tahoma, sans-serif" font-size="14">ไม่มีขอบ</text>
<text x="121" y="63" text-anchor="middle" font-size="16">T</text>
<text x="121" y="93" text-anchor="middle" font-size="16">0</text>
<text x="121" y="120" text-anchor="middle" font-size="16">1</text>
<text x="121" y="147" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="167.8" y="63" text-anchor="middle" font-size="16">Q</text>
<text x="167.8" y="93" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<text x="167.8" y="120" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<line x1="158" y1="106" x2="169" y2="106" stroke="currentColor" stroke-width="1.3"/>
<text x="167.8" y="147" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<text x="215.2" y="63" text-anchor="middle" font-size="16">Q</text>
<line x1="209.5" y1="49" x2="220.5" y2="49" stroke="currentColor" stroke-width="1.3"/>
<text x="215.2" y="93" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<line x1="205.5" y1="79" x2="216.5" y2="79" stroke="currentColor" stroke-width="1.3"/>
<text x="215.2" y="120" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<text x="215.2" y="147" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<line x1="205.5" y1="133" x2="216.5" y2="133" stroke="currentColor" stroke-width="1.3"/>
</svg>
</div>

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
<path d="M62,44 L126,44 L126,71.2 L190,71.2 L190,44 L254,44 L254,71.2 L318,71.2 L318,44 L382,44 L382,71.2 L446,71.2 L446,44 L510,44 L510,71.2 L574,71.2 L574,44 L638,44 L638,71.2 L702,71.2 L702,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">T</text>
<path d="M62,104 L350,104 L350,131.2 L414,131.2 L414,104 L574,104 L574,131.2 L702,131.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  T ฟลิป-ฟลอป ทำงานที่ขอบขาลงของสัญญาณนาฬิกา เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=t; trig=fall; pins=none; set=b; give=wave}

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
<path d="M62,44 L126,44 L126,71.2 L190,71.2 L190,44 L254,44 L254,71.2 L318,71.2 L318,44 L382,44 L382,71.2 L446,71.2 L446,44 L510,44 L510,71.2 L574,71.2 L574,44 L638,44 L638,71.2 L702,71.2 L702,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">T</text>
<path d="M62,131.2 L190,131.2 L190,104 L558,104 L558,131.2 L702,131.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  T ฟลิป-ฟลอป ทำงานที่ขอบขาลงของสัญญาณนาฬิกา เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=t; trig=fall; pins=none; set=b; give=table}

**ตารางการทำงาน** ($x$ คือค่าอะไรก็ได้, $Q_0$ คือค่า $Q$ ก่อนมีสัญญาณกระตุ้น)

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="255" height="166" viewBox="0 0 255 166" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<text x="127.5" y="26" text-anchor="middle" font-family="Mitr, Tahoma, sans-serif" font-size="21" font-weight="500" fill="#e8743b">ตารางการทำงาน</text>
<g stroke="currentColor" stroke-width="1.4" fill="none">
<rect x="16" y="42" width="223" height="116"/>
<line x1="16" y1="73" x2="239" y2="73"/>
<line x1="144" y1="42" x2="144" y2="158"/>
<line x1="16" y1="127" x2="239" y2="127" stroke-width="0.9" stroke-opacity="0.55"/>
</g>
<text x="57" y="63" text-anchor="middle" font-size="16">CLOCK</text>
<line x1="57" y1="82" x2="57" y2="95" stroke="currentColor" stroke-width="1.6"/>
<polygon points="57,96 52.5,89 61.5,89" fill="currentColor"/>
<line x1="57" y1="109" x2="57" y2="122" stroke="currentColor" stroke-width="1.6"/>
<polygon points="57,123 52.5,116 61.5,116" fill="currentColor"/>
<text x="57" y="147" text-anchor="middle" font-size="16" font-family="Mitr, Tahoma, sans-serif" font-size="14">ไม่มีขอบ</text>
<text x="121" y="63" text-anchor="middle" font-size="16">T</text>
<text x="121" y="93" text-anchor="middle" font-size="16">0</text>
<text x="121" y="120" text-anchor="middle" font-size="16">1</text>
<text x="121" y="147" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="167.8" y="63" text-anchor="middle" font-size="16">Q</text>
<text x="167.8" y="93" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<text x="167.8" y="120" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<line x1="158" y1="106" x2="169" y2="106" stroke="currentColor" stroke-width="1.3"/>
<text x="167.8" y="147" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<text x="215.2" y="63" text-anchor="middle" font-size="16">Q</text>
<line x1="209.5" y1="49" x2="220.5" y2="49" stroke="currentColor" stroke-width="1.3"/>
<text x="215.2" y="93" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<line x1="205.5" y1="79" x2="216.5" y2="79" stroke="currentColor" stroke-width="1.3"/>
<text x="215.2" y="120" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<text x="215.2" y="147" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<line x1="205.5" y1="133" x2="216.5" y2="133" stroke="currentColor" stroke-width="1.3"/>
</svg>
</div>

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
<path d="M62,44 L126,44 L126,71.2 L190,71.2 L190,44 L254,44 L254,71.2 L318,71.2 L318,44 L382,44 L382,71.2 L446,71.2 L446,44 L510,44 L510,71.2 L574,71.2 L574,44 L638,44 L638,71.2 L702,71.2 L702,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">T</text>
<path d="M62,131.2 L190,131.2 L190,104 L558,104 L558,131.2 L702,131.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  T ฟลิป-ฟลอป ทำงานที่ขอบขาลงของสัญญาณนาฬิกา เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=t; trig=fall; pins=none; set=c; give=wave}

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
<path d="M62,44 L126,44 L126,71.2 L190,71.2 L190,44 L254,44 L254,71.2 L318,71.2 L318,44 L382,44 L382,71.2 L446,71.2 L446,44 L510,44 L510,71.2 L574,71.2 L574,44 L638,44 L638,71.2 L702,71.2 L702,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">T</text>
<path d="M62,104 L222,104 L222,131.2 L302,131.2 L302,104 L398,104 L398,131.2 L590,131.2 L590,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  T ฟลิป-ฟลอป ทำงานที่ขอบขาลงของสัญญาณนาฬิกา เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=t; trig=fall; pins=none; set=c; give=table}

**ตารางการทำงาน** ($x$ คือค่าอะไรก็ได้, $Q_0$ คือค่า $Q$ ก่อนมีสัญญาณกระตุ้น)

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="255" height="166" viewBox="0 0 255 166" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<text x="127.5" y="26" text-anchor="middle" font-family="Mitr, Tahoma, sans-serif" font-size="21" font-weight="500" fill="#e8743b">ตารางการทำงาน</text>
<g stroke="currentColor" stroke-width="1.4" fill="none">
<rect x="16" y="42" width="223" height="116"/>
<line x1="16" y1="73" x2="239" y2="73"/>
<line x1="144" y1="42" x2="144" y2="158"/>
<line x1="16" y1="127" x2="239" y2="127" stroke-width="0.9" stroke-opacity="0.55"/>
</g>
<text x="57" y="63" text-anchor="middle" font-size="16">CLOCK</text>
<line x1="57" y1="82" x2="57" y2="95" stroke="currentColor" stroke-width="1.6"/>
<polygon points="57,96 52.5,89 61.5,89" fill="currentColor"/>
<line x1="57" y1="109" x2="57" y2="122" stroke="currentColor" stroke-width="1.6"/>
<polygon points="57,123 52.5,116 61.5,116" fill="currentColor"/>
<text x="57" y="147" text-anchor="middle" font-size="16" font-family="Mitr, Tahoma, sans-serif" font-size="14">ไม่มีขอบ</text>
<text x="121" y="63" text-anchor="middle" font-size="16">T</text>
<text x="121" y="93" text-anchor="middle" font-size="16">0</text>
<text x="121" y="120" text-anchor="middle" font-size="16">1</text>
<text x="121" y="147" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="167.8" y="63" text-anchor="middle" font-size="16">Q</text>
<text x="167.8" y="93" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<text x="167.8" y="120" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<line x1="158" y1="106" x2="169" y2="106" stroke="currentColor" stroke-width="1.3"/>
<text x="167.8" y="147" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<text x="215.2" y="63" text-anchor="middle" font-size="16">Q</text>
<line x1="209.5" y1="49" x2="220.5" y2="49" stroke="currentColor" stroke-width="1.3"/>
<text x="215.2" y="93" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<line x1="205.5" y1="79" x2="216.5" y2="79" stroke="currentColor" stroke-width="1.3"/>
<text x="215.2" y="120" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<text x="215.2" y="147" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<line x1="205.5" y1="133" x2="216.5" y2="133" stroke="currentColor" stroke-width="1.3"/>
</svg>
</div>

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
<path d="M62,44 L126,44 L126,71.2 L190,71.2 L190,44 L254,44 L254,71.2 L318,71.2 L318,44 L382,44 L382,71.2 L446,71.2 L446,44 L510,44 L510,71.2 L574,71.2 L574,44 L638,44 L638,71.2 L702,71.2 L702,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">T</text>
<path d="M62,104 L222,104 L222,131.2 L302,131.2 L302,104 L398,104 L398,131.2 L590,131.2 L590,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  T ฟลิป-ฟลอป ที่มี PS และ CLR ทำงานที่ขอบขาลงของสัญญาณนาฬิกา เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=t; trig=fall; pins=ps; set=a; give=wave}

PS และ CLR ทำงานเมื่อเป็น $0$ และทำงานทันที ไม่ต้องรอสัญญาณนาฬิกา

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="284" viewBox="0 0 726 284" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="278"/>
<line x1="254" y1="26" x2="254" y2="278"/>
<line x1="382" y1="26" x2="382" y2="278"/>
<line x1="510" y1="26" x2="510" y2="278"/>
<line x1="638" y1="26" x2="638" y2="278"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,44 L430,44 L430,71.2 L478,71.2 L478,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,104 L606,104 L606,131.2 L670,131.2 L670,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<path d="M62,164 L126,164 L126,191.2 L190,191.2 L190,164 L254,164 L254,191.2 L318,191.2 L318,164 L382,164 L382,191.2 L446,191.2 L446,164 L510,164 L510,191.2 L574,191.2 L574,164 L638,164 L638,191.2 L702,191.2 L702,164 L702,164" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">T</text>
<path d="M62,224 L350,224 L350,251.2 L414,251.2 L414,224 L574,224 L574,251.2 L702,251.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  T ฟลิป-ฟลอป ที่มี PS และ CLR ทำงานที่ขอบขาลงของสัญญาณนาฬิกา เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=t; trig=fall; pins=ps; set=a; give=table}

**ตารางการทำงาน** ($x$ คือค่าอะไรก็ได้, $Q_0$ คือค่า $Q$ ก่อนมีสัญญาณกระตุ้น)

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="410" height="247" viewBox="0 0 410 247" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<text x="205" y="26" text-anchor="middle" font-family="Mitr, Tahoma, sans-serif" font-size="21" font-weight="500" fill="#e8743b">ตารางการทำงาน</text>
<g stroke="currentColor" stroke-width="1.4" fill="none">
<rect x="16" y="42" width="378" height="197"/>
<line x1="16" y1="73" x2="394" y2="73"/>
<line x1="299" y1="42" x2="299" y2="239"/>
<line x1="16" y1="154" x2="394" y2="154" stroke-width="0.9" stroke-opacity="0.55"/>
<line x1="16" y1="208" x2="394" y2="208" stroke-width="0.9" stroke-opacity="0.55"/>
</g>
<text x="57" y="63" text-anchor="middle" font-size="16">PRESET</text>
<text x="57" y="93" text-anchor="middle" font-size="16">0</text>
<text x="57" y="120" text-anchor="middle" font-size="16">0</text>
<text x="57" y="147" text-anchor="middle" font-size="16">1</text>
<text x="57" y="174" text-anchor="middle" font-size="16">1</text>
<text x="57" y="201" text-anchor="middle" font-size="16">1</text>
<text x="57" y="228" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="63" text-anchor="middle" font-size="16">CLEAR</text>
<text x="134.5" y="93" text-anchor="middle" font-size="16">0</text>
<text x="134.5" y="120" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="147" text-anchor="middle" font-size="16">0</text>
<text x="134.5" y="174" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="201" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="228" text-anchor="middle" font-size="16">1</text>
<text x="212" y="63" text-anchor="middle" font-size="16">CLOCK</text>
<text x="212" y="93" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="212" y="120" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="212" y="147" text-anchor="middle" font-size="16" font-style="italic">x</text>
<line x1="212" y1="163" x2="212" y2="176" stroke="currentColor" stroke-width="1.6"/>
<polygon points="212,177 207.5,170 216.5,170" fill="currentColor"/>
<line x1="212" y1="190" x2="212" y2="203" stroke="currentColor" stroke-width="1.6"/>
<polygon points="212,204 207.5,197 216.5,197" fill="currentColor"/>
<text x="212" y="228" text-anchor="middle" font-size="16" font-family="Mitr, Tahoma, sans-serif" font-size="14">ไม่มีขอบ</text>
<text x="276" y="63" text-anchor="middle" font-size="16">T</text>
<text x="276" y="93" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="276" y="120" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="276" y="147" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="276" y="174" text-anchor="middle" font-size="16">0</text>
<text x="276" y="201" text-anchor="middle" font-size="16">1</text>
<text x="276" y="228" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="322.8" y="63" text-anchor="middle" font-size="16">Q</text>
<text x="322.8" y="93" text-anchor="middle" font-size="16">1</text>
<text x="322.8" y="120" text-anchor="middle" font-size="16">1</text>
<text x="322.8" y="147" text-anchor="middle" font-size="16">0</text>
<text x="322.8" y="174" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<text x="322.8" y="201" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<line x1="313" y1="187" x2="324" y2="187" stroke="currentColor" stroke-width="1.3"/>
<text x="322.8" y="228" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<text x="370.2" y="63" text-anchor="middle" font-size="16">Q</text>
<line x1="364.5" y1="49" x2="375.5" y2="49" stroke="currentColor" stroke-width="1.3"/>
<text x="370.2" y="93" text-anchor="middle" font-size="16">1</text>
<text x="370.2" y="120" text-anchor="middle" font-size="16">0</text>
<text x="370.2" y="147" text-anchor="middle" font-size="16">1</text>
<text x="370.2" y="174" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<line x1="360.5" y1="160" x2="371.5" y2="160" stroke="currentColor" stroke-width="1.3"/>
<text x="370.2" y="201" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<text x="370.2" y="228" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<line x1="360.5" y1="214" x2="371.5" y2="214" stroke="currentColor" stroke-width="1.3"/>
</svg>
</div>

PS และ CLR ทำงานเมื่อเป็น $0$ และทำงานทันที ไม่ต้องรอสัญญาณนาฬิกา

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="284" viewBox="0 0 726 284" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="278"/>
<line x1="254" y1="26" x2="254" y2="278"/>
<line x1="382" y1="26" x2="382" y2="278"/>
<line x1="510" y1="26" x2="510" y2="278"/>
<line x1="638" y1="26" x2="638" y2="278"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,44 L430,44 L430,71.2 L478,71.2 L478,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,104 L606,104 L606,131.2 L670,131.2 L670,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<path d="M62,164 L126,164 L126,191.2 L190,191.2 L190,164 L254,164 L254,191.2 L318,191.2 L318,164 L382,164 L382,191.2 L446,191.2 L446,164 L510,164 L510,191.2 L574,191.2 L574,164 L638,164 L638,191.2 L702,191.2 L702,164 L702,164" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">T</text>
<path d="M62,224 L350,224 L350,251.2 L414,251.2 L414,224 L574,224 L574,251.2 L702,251.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  T ฟลิป-ฟลอป ที่มี PS และ CLR ทำงานที่ขอบขาลงของสัญญาณนาฬิกา เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=t; trig=fall; pins=ps; set=b; give=wave}

PS และ CLR ทำงานเมื่อเป็น $0$ และทำงานทันที ไม่ต้องรอสัญญาณนาฬิกา

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="284" viewBox="0 0 726 284" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="278"/>
<line x1="254" y1="26" x2="254" y2="278"/>
<line x1="382" y1="26" x2="382" y2="278"/>
<line x1="510" y1="26" x2="510" y2="278"/>
<line x1="638" y1="26" x2="638" y2="278"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,44 L174,44 L174,71.2 L222,71.2 L222,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,104 L606,104 L606,131.2 L670,131.2 L670,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<path d="M62,164 L126,164 L126,191.2 L190,191.2 L190,164 L254,164 L254,191.2 L318,191.2 L318,164 L382,164 L382,191.2 L446,191.2 L446,164 L510,164 L510,191.2 L574,191.2 L574,164 L638,164 L638,191.2 L702,191.2 L702,164 L702,164" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">T</text>
<path d="M62,251.2 L190,251.2 L190,224 L558,224 L558,251.2 L702,251.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  T ฟลิป-ฟลอป ที่มี PS และ CLR ทำงานที่ขอบขาลงของสัญญาณนาฬิกา เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=t; trig=fall; pins=ps; set=b; give=table}

**ตารางการทำงาน** ($x$ คือค่าอะไรก็ได้, $Q_0$ คือค่า $Q$ ก่อนมีสัญญาณกระตุ้น)

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="410" height="247" viewBox="0 0 410 247" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<text x="205" y="26" text-anchor="middle" font-family="Mitr, Tahoma, sans-serif" font-size="21" font-weight="500" fill="#e8743b">ตารางการทำงาน</text>
<g stroke="currentColor" stroke-width="1.4" fill="none">
<rect x="16" y="42" width="378" height="197"/>
<line x1="16" y1="73" x2="394" y2="73"/>
<line x1="299" y1="42" x2="299" y2="239"/>
<line x1="16" y1="154" x2="394" y2="154" stroke-width="0.9" stroke-opacity="0.55"/>
<line x1="16" y1="208" x2="394" y2="208" stroke-width="0.9" stroke-opacity="0.55"/>
</g>
<text x="57" y="63" text-anchor="middle" font-size="16">PRESET</text>
<text x="57" y="93" text-anchor="middle" font-size="16">0</text>
<text x="57" y="120" text-anchor="middle" font-size="16">0</text>
<text x="57" y="147" text-anchor="middle" font-size="16">1</text>
<text x="57" y="174" text-anchor="middle" font-size="16">1</text>
<text x="57" y="201" text-anchor="middle" font-size="16">1</text>
<text x="57" y="228" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="63" text-anchor="middle" font-size="16">CLEAR</text>
<text x="134.5" y="93" text-anchor="middle" font-size="16">0</text>
<text x="134.5" y="120" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="147" text-anchor="middle" font-size="16">0</text>
<text x="134.5" y="174" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="201" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="228" text-anchor="middle" font-size="16">1</text>
<text x="212" y="63" text-anchor="middle" font-size="16">CLOCK</text>
<text x="212" y="93" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="212" y="120" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="212" y="147" text-anchor="middle" font-size="16" font-style="italic">x</text>
<line x1="212" y1="163" x2="212" y2="176" stroke="currentColor" stroke-width="1.6"/>
<polygon points="212,177 207.5,170 216.5,170" fill="currentColor"/>
<line x1="212" y1="190" x2="212" y2="203" stroke="currentColor" stroke-width="1.6"/>
<polygon points="212,204 207.5,197 216.5,197" fill="currentColor"/>
<text x="212" y="228" text-anchor="middle" font-size="16" font-family="Mitr, Tahoma, sans-serif" font-size="14">ไม่มีขอบ</text>
<text x="276" y="63" text-anchor="middle" font-size="16">T</text>
<text x="276" y="93" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="276" y="120" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="276" y="147" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="276" y="174" text-anchor="middle" font-size="16">0</text>
<text x="276" y="201" text-anchor="middle" font-size="16">1</text>
<text x="276" y="228" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="322.8" y="63" text-anchor="middle" font-size="16">Q</text>
<text x="322.8" y="93" text-anchor="middle" font-size="16">1</text>
<text x="322.8" y="120" text-anchor="middle" font-size="16">1</text>
<text x="322.8" y="147" text-anchor="middle" font-size="16">0</text>
<text x="322.8" y="174" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<text x="322.8" y="201" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<line x1="313" y1="187" x2="324" y2="187" stroke="currentColor" stroke-width="1.3"/>
<text x="322.8" y="228" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<text x="370.2" y="63" text-anchor="middle" font-size="16">Q</text>
<line x1="364.5" y1="49" x2="375.5" y2="49" stroke="currentColor" stroke-width="1.3"/>
<text x="370.2" y="93" text-anchor="middle" font-size="16">1</text>
<text x="370.2" y="120" text-anchor="middle" font-size="16">0</text>
<text x="370.2" y="147" text-anchor="middle" font-size="16">1</text>
<text x="370.2" y="174" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<line x1="360.5" y1="160" x2="371.5" y2="160" stroke="currentColor" stroke-width="1.3"/>
<text x="370.2" y="201" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<text x="370.2" y="228" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<line x1="360.5" y1="214" x2="371.5" y2="214" stroke="currentColor" stroke-width="1.3"/>
</svg>
</div>

PS และ CLR ทำงานเมื่อเป็น $0$ และทำงานทันที ไม่ต้องรอสัญญาณนาฬิกา

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="284" viewBox="0 0 726 284" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="278"/>
<line x1="254" y1="26" x2="254" y2="278"/>
<line x1="382" y1="26" x2="382" y2="278"/>
<line x1="510" y1="26" x2="510" y2="278"/>
<line x1="638" y1="26" x2="638" y2="278"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,44 L174,44 L174,71.2 L222,71.2 L222,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,104 L606,104 L606,131.2 L670,131.2 L670,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<path d="M62,164 L126,164 L126,191.2 L190,191.2 L190,164 L254,164 L254,191.2 L318,191.2 L318,164 L382,164 L382,191.2 L446,191.2 L446,164 L510,164 L510,191.2 L574,191.2 L574,164 L638,164 L638,191.2 L702,191.2 L702,164 L702,164" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">T</text>
<path d="M62,251.2 L190,251.2 L190,224 L558,224 L558,251.2 L702,251.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  T ฟลิป-ฟลอป ที่มี PS และ CLR ทำงานที่ขอบขาลงของสัญญาณนาฬิกา เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=t; trig=fall; pins=ps; set=c; give=wave}

PS และ CLR ทำงานเมื่อเป็น $0$ และทำงานทันที ไม่ต้องรอสัญญาณนาฬิกา

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="284" viewBox="0 0 726 284" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="278"/>
<line x1="254" y1="26" x2="254" y2="278"/>
<line x1="382" y1="26" x2="382" y2="278"/>
<line x1="510" y1="26" x2="510" y2="278"/>
<line x1="638" y1="26" x2="638" y2="278"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,44 L350,44 L350,71.2 L414,71.2 L414,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,104 L214,104 L214,131.2 L278,131.2 L278,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<path d="M62,164 L126,164 L126,191.2 L190,191.2 L190,164 L254,164 L254,191.2 L318,191.2 L318,164 L382,164 L382,191.2 L446,191.2 L446,164 L510,164 L510,191.2 L574,191.2 L574,164 L638,164 L638,191.2 L702,191.2 L702,164 L702,164" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">T</text>
<path d="M62,224 L222,224 L222,251.2 L302,251.2 L302,224 L398,224 L398,251.2 L590,251.2 L590,224 L702,224" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  T ฟลิป-ฟลอป ที่มี PS และ CLR ทำงานที่ขอบขาลงของสัญญาณนาฬิกา เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=t; trig=fall; pins=ps; set=c; give=table}

**ตารางการทำงาน** ($x$ คือค่าอะไรก็ได้, $Q_0$ คือค่า $Q$ ก่อนมีสัญญาณกระตุ้น)

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="410" height="247" viewBox="0 0 410 247" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<text x="205" y="26" text-anchor="middle" font-family="Mitr, Tahoma, sans-serif" font-size="21" font-weight="500" fill="#e8743b">ตารางการทำงาน</text>
<g stroke="currentColor" stroke-width="1.4" fill="none">
<rect x="16" y="42" width="378" height="197"/>
<line x1="16" y1="73" x2="394" y2="73"/>
<line x1="299" y1="42" x2="299" y2="239"/>
<line x1="16" y1="154" x2="394" y2="154" stroke-width="0.9" stroke-opacity="0.55"/>
<line x1="16" y1="208" x2="394" y2="208" stroke-width="0.9" stroke-opacity="0.55"/>
</g>
<text x="57" y="63" text-anchor="middle" font-size="16">PRESET</text>
<text x="57" y="93" text-anchor="middle" font-size="16">0</text>
<text x="57" y="120" text-anchor="middle" font-size="16">0</text>
<text x="57" y="147" text-anchor="middle" font-size="16">1</text>
<text x="57" y="174" text-anchor="middle" font-size="16">1</text>
<text x="57" y="201" text-anchor="middle" font-size="16">1</text>
<text x="57" y="228" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="63" text-anchor="middle" font-size="16">CLEAR</text>
<text x="134.5" y="93" text-anchor="middle" font-size="16">0</text>
<text x="134.5" y="120" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="147" text-anchor="middle" font-size="16">0</text>
<text x="134.5" y="174" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="201" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="228" text-anchor="middle" font-size="16">1</text>
<text x="212" y="63" text-anchor="middle" font-size="16">CLOCK</text>
<text x="212" y="93" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="212" y="120" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="212" y="147" text-anchor="middle" font-size="16" font-style="italic">x</text>
<line x1="212" y1="163" x2="212" y2="176" stroke="currentColor" stroke-width="1.6"/>
<polygon points="212,177 207.5,170 216.5,170" fill="currentColor"/>
<line x1="212" y1="190" x2="212" y2="203" stroke="currentColor" stroke-width="1.6"/>
<polygon points="212,204 207.5,197 216.5,197" fill="currentColor"/>
<text x="212" y="228" text-anchor="middle" font-size="16" font-family="Mitr, Tahoma, sans-serif" font-size="14">ไม่มีขอบ</text>
<text x="276" y="63" text-anchor="middle" font-size="16">T</text>
<text x="276" y="93" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="276" y="120" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="276" y="147" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="276" y="174" text-anchor="middle" font-size="16">0</text>
<text x="276" y="201" text-anchor="middle" font-size="16">1</text>
<text x="276" y="228" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="322.8" y="63" text-anchor="middle" font-size="16">Q</text>
<text x="322.8" y="93" text-anchor="middle" font-size="16">1</text>
<text x="322.8" y="120" text-anchor="middle" font-size="16">1</text>
<text x="322.8" y="147" text-anchor="middle" font-size="16">0</text>
<text x="322.8" y="174" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<text x="322.8" y="201" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<line x1="313" y1="187" x2="324" y2="187" stroke="currentColor" stroke-width="1.3"/>
<text x="322.8" y="228" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<text x="370.2" y="63" text-anchor="middle" font-size="16">Q</text>
<line x1="364.5" y1="49" x2="375.5" y2="49" stroke="currentColor" stroke-width="1.3"/>
<text x="370.2" y="93" text-anchor="middle" font-size="16">1</text>
<text x="370.2" y="120" text-anchor="middle" font-size="16">0</text>
<text x="370.2" y="147" text-anchor="middle" font-size="16">1</text>
<text x="370.2" y="174" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<line x1="360.5" y1="160" x2="371.5" y2="160" stroke="currentColor" stroke-width="1.3"/>
<text x="370.2" y="201" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<text x="370.2" y="228" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<line x1="360.5" y1="214" x2="371.5" y2="214" stroke="currentColor" stroke-width="1.3"/>
</svg>
</div>

PS และ CLR ทำงานเมื่อเป็น $0$ และทำงานทันที ไม่ต้องรอสัญญาณนาฬิกา

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="284" viewBox="0 0 726 284" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="278"/>
<line x1="254" y1="26" x2="254" y2="278"/>
<line x1="382" y1="26" x2="382" y2="278"/>
<line x1="510" y1="26" x2="510" y2="278"/>
<line x1="638" y1="26" x2="638" y2="278"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,44 L350,44 L350,71.2 L414,71.2 L414,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,104 L214,104 L214,131.2 L278,131.2 L278,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<path d="M62,164 L126,164 L126,191.2 L190,191.2 L190,164 L254,164 L254,191.2 L318,191.2 L318,164 L382,164 L382,191.2 L446,191.2 L446,164 L510,164 L510,191.2 L574,191.2 L574,164 L638,164 L638,191.2 L702,191.2 L702,164 L702,164" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">T</text>
<path d="M62,224 L222,224 L222,251.2 L302,251.2 L302,224 L398,224 L398,251.2 L590,251.2 L590,224 L702,224" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  Clock RS ฟลิป-ฟลอป ทำงานที่ขอบขาขึ้นของสัญญาณนาฬิกา เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=rs; trig=rise; pins=none; set=a; give=wave}

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
<text x="50" y="123.6" text-anchor="end">R</text>
<path d="M62,131.2 L350,131.2 L350,104 L414,104 L414,131.2 L574,131.2 L574,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">S</text>
<path d="M62,164 L174,164 L174,191.2 L414,191.2 L414,164 L574,164 L574,191.2 L702,191.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  Clock RS ฟลิป-ฟลอป ทำงานที่ขอบขาขึ้นของสัญญาณนาฬิกา เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=rs; trig=rise; pins=none; set=a; give=table}

**ตารางการทำงาน** ($x$ คือค่าอะไรก็ได้, $Q_0$ คือค่า $Q$ ก่อนมีสัญญาณกระตุ้น)

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="301" height="220" viewBox="0 0 301 220" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<text x="150.5" y="26" text-anchor="middle" font-family="Mitr, Tahoma, sans-serif" font-size="21" font-weight="500" fill="#e8743b">ตารางการทำงาน</text>
<g stroke="currentColor" stroke-width="1.4" fill="none">
<rect x="16" y="42" width="269" height="170"/>
<line x1="16" y1="73" x2="285" y2="73"/>
<line x1="190" y1="42" x2="190" y2="212"/>
<line x1="16" y1="181" x2="285" y2="181" stroke-width="0.9" stroke-opacity="0.55"/>
</g>
<text x="57" y="63" text-anchor="middle" font-size="16">CLOCK</text>
<line x1="57" y1="95" x2="57" y2="82" stroke="currentColor" stroke-width="1.6"/>
<polygon points="57,81 52.5,88 61.5,88" fill="currentColor"/>
<line x1="57" y1="122" x2="57" y2="109" stroke="currentColor" stroke-width="1.6"/>
<polygon points="57,108 52.5,115 61.5,115" fill="currentColor"/>
<line x1="57" y1="149" x2="57" y2="136" stroke="currentColor" stroke-width="1.6"/>
<polygon points="57,135 52.5,142 61.5,142" fill="currentColor"/>
<line x1="57" y1="176" x2="57" y2="163" stroke="currentColor" stroke-width="1.6"/>
<polygon points="57,162 52.5,169 61.5,169" fill="currentColor"/>
<text x="57" y="201" text-anchor="middle" font-size="16" font-family="Mitr, Tahoma, sans-serif" font-size="14">ไม่มีขอบ</text>
<text x="121" y="63" text-anchor="middle" font-size="16">R</text>
<text x="121" y="93" text-anchor="middle" font-size="16">0</text>
<text x="121" y="120" text-anchor="middle" font-size="16">0</text>
<text x="121" y="147" text-anchor="middle" font-size="16">1</text>
<text x="121" y="174" text-anchor="middle" font-size="16">1</text>
<text x="121" y="201" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="167" y="63" text-anchor="middle" font-size="16">S</text>
<text x="167" y="93" text-anchor="middle" font-size="16">0</text>
<text x="167" y="120" text-anchor="middle" font-size="16">1</text>
<text x="167" y="147" text-anchor="middle" font-size="16">0</text>
<text x="167" y="174" text-anchor="middle" font-size="16">1</text>
<text x="167" y="201" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="213.8" y="63" text-anchor="middle" font-size="16">Q</text>
<text x="213.8" y="93" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<text x="213.8" y="120" text-anchor="middle" font-size="16">1</text>
<text x="213.8" y="147" text-anchor="middle" font-size="16">0</text>
<text x="213.8" y="174" text-anchor="middle" font-size="16">?</text>
<text x="213.8" y="201" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<text x="261.2" y="63" text-anchor="middle" font-size="16">Q</text>
<line x1="255.5" y1="49" x2="266.5" y2="49" stroke="currentColor" stroke-width="1.3"/>
<text x="261.2" y="93" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<line x1="251.5" y1="79" x2="262.5" y2="79" stroke="currentColor" stroke-width="1.3"/>
<text x="261.2" y="120" text-anchor="middle" font-size="16">0</text>
<text x="261.2" y="147" text-anchor="middle" font-size="16">1</text>
<text x="261.2" y="174" text-anchor="middle" font-size="16">?</text>
<text x="261.2" y="201" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<line x1="251.5" y1="187" x2="262.5" y2="187" stroke="currentColor" stroke-width="1.3"/>
</svg>
</div>

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
<text x="50" y="123.6" text-anchor="end">R</text>
<path d="M62,131.2 L350,131.2 L350,104 L414,104 L414,131.2 L574,131.2 L574,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">S</text>
<path d="M62,164 L174,164 L174,191.2 L414,191.2 L414,164 L574,164 L574,191.2 L702,191.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  Clock RS ฟลิป-ฟลอป ทำงานที่ขอบขาขึ้นของสัญญาณนาฬิกา เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=rs; trig=rise; pins=none; set=b; give=wave}

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
<text x="50" y="123.6" text-anchor="end">R</text>
<path d="M62,104 L190,104 L190,131.2 L462,131.2 L462,104 L558,104 L558,131.2 L702,131.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">S</text>
<path d="M62,191.2 L190,191.2 L190,164 L286,164 L286,191.2 L558,191.2 L558,164 L702,164" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  Clock RS ฟลิป-ฟลอป ทำงานที่ขอบขาขึ้นของสัญญาณนาฬิกา เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=rs; trig=rise; pins=none; set=b; give=table}

**ตารางการทำงาน** ($x$ คือค่าอะไรก็ได้, $Q_0$ คือค่า $Q$ ก่อนมีสัญญาณกระตุ้น)

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="301" height="220" viewBox="0 0 301 220" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<text x="150.5" y="26" text-anchor="middle" font-family="Mitr, Tahoma, sans-serif" font-size="21" font-weight="500" fill="#e8743b">ตารางการทำงาน</text>
<g stroke="currentColor" stroke-width="1.4" fill="none">
<rect x="16" y="42" width="269" height="170"/>
<line x1="16" y1="73" x2="285" y2="73"/>
<line x1="190" y1="42" x2="190" y2="212"/>
<line x1="16" y1="181" x2="285" y2="181" stroke-width="0.9" stroke-opacity="0.55"/>
</g>
<text x="57" y="63" text-anchor="middle" font-size="16">CLOCK</text>
<line x1="57" y1="95" x2="57" y2="82" stroke="currentColor" stroke-width="1.6"/>
<polygon points="57,81 52.5,88 61.5,88" fill="currentColor"/>
<line x1="57" y1="122" x2="57" y2="109" stroke="currentColor" stroke-width="1.6"/>
<polygon points="57,108 52.5,115 61.5,115" fill="currentColor"/>
<line x1="57" y1="149" x2="57" y2="136" stroke="currentColor" stroke-width="1.6"/>
<polygon points="57,135 52.5,142 61.5,142" fill="currentColor"/>
<line x1="57" y1="176" x2="57" y2="163" stroke="currentColor" stroke-width="1.6"/>
<polygon points="57,162 52.5,169 61.5,169" fill="currentColor"/>
<text x="57" y="201" text-anchor="middle" font-size="16" font-family="Mitr, Tahoma, sans-serif" font-size="14">ไม่มีขอบ</text>
<text x="121" y="63" text-anchor="middle" font-size="16">R</text>
<text x="121" y="93" text-anchor="middle" font-size="16">0</text>
<text x="121" y="120" text-anchor="middle" font-size="16">0</text>
<text x="121" y="147" text-anchor="middle" font-size="16">1</text>
<text x="121" y="174" text-anchor="middle" font-size="16">1</text>
<text x="121" y="201" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="167" y="63" text-anchor="middle" font-size="16">S</text>
<text x="167" y="93" text-anchor="middle" font-size="16">0</text>
<text x="167" y="120" text-anchor="middle" font-size="16">1</text>
<text x="167" y="147" text-anchor="middle" font-size="16">0</text>
<text x="167" y="174" text-anchor="middle" font-size="16">1</text>
<text x="167" y="201" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="213.8" y="63" text-anchor="middle" font-size="16">Q</text>
<text x="213.8" y="93" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<text x="213.8" y="120" text-anchor="middle" font-size="16">1</text>
<text x="213.8" y="147" text-anchor="middle" font-size="16">0</text>
<text x="213.8" y="174" text-anchor="middle" font-size="16">?</text>
<text x="213.8" y="201" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<text x="261.2" y="63" text-anchor="middle" font-size="16">Q</text>
<line x1="255.5" y1="49" x2="266.5" y2="49" stroke="currentColor" stroke-width="1.3"/>
<text x="261.2" y="93" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<line x1="251.5" y1="79" x2="262.5" y2="79" stroke="currentColor" stroke-width="1.3"/>
<text x="261.2" y="120" text-anchor="middle" font-size="16">0</text>
<text x="261.2" y="147" text-anchor="middle" font-size="16">1</text>
<text x="261.2" y="174" text-anchor="middle" font-size="16">?</text>
<text x="261.2" y="201" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<line x1="251.5" y1="187" x2="262.5" y2="187" stroke="currentColor" stroke-width="1.3"/>
</svg>
</div>

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
<text x="50" y="123.6" text-anchor="end">R</text>
<path d="M62,104 L190,104 L190,131.2 L462,131.2 L462,104 L558,104 L558,131.2 L702,131.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">S</text>
<path d="M62,191.2 L190,191.2 L190,164 L286,164 L286,191.2 L558,191.2 L558,164 L702,164" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  Clock RS ฟลิป-ฟลอป ทำงานที่ขอบขาขึ้นของสัญญาณนาฬิกา เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=rs; trig=rise; pins=none; set=c; give=wave}

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
<text x="50" y="123.6" text-anchor="end">R</text>
<path d="M62,131.2 L222,131.2 L222,104 L302,104 L302,131.2 L590,131.2 L590,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">S</text>
<path d="M62,164 L222,164 L222,191.2 L302,191.2 L302,164 L398,164 L398,191.2 L702,191.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  Clock RS ฟลิป-ฟลอป ทำงานที่ขอบขาขึ้นของสัญญาณนาฬิกา เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=rs; trig=rise; pins=none; set=c; give=table}

**ตารางการทำงาน** ($x$ คือค่าอะไรก็ได้, $Q_0$ คือค่า $Q$ ก่อนมีสัญญาณกระตุ้น)

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="301" height="220" viewBox="0 0 301 220" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<text x="150.5" y="26" text-anchor="middle" font-family="Mitr, Tahoma, sans-serif" font-size="21" font-weight="500" fill="#e8743b">ตารางการทำงาน</text>
<g stroke="currentColor" stroke-width="1.4" fill="none">
<rect x="16" y="42" width="269" height="170"/>
<line x1="16" y1="73" x2="285" y2="73"/>
<line x1="190" y1="42" x2="190" y2="212"/>
<line x1="16" y1="181" x2="285" y2="181" stroke-width="0.9" stroke-opacity="0.55"/>
</g>
<text x="57" y="63" text-anchor="middle" font-size="16">CLOCK</text>
<line x1="57" y1="95" x2="57" y2="82" stroke="currentColor" stroke-width="1.6"/>
<polygon points="57,81 52.5,88 61.5,88" fill="currentColor"/>
<line x1="57" y1="122" x2="57" y2="109" stroke="currentColor" stroke-width="1.6"/>
<polygon points="57,108 52.5,115 61.5,115" fill="currentColor"/>
<line x1="57" y1="149" x2="57" y2="136" stroke="currentColor" stroke-width="1.6"/>
<polygon points="57,135 52.5,142 61.5,142" fill="currentColor"/>
<line x1="57" y1="176" x2="57" y2="163" stroke="currentColor" stroke-width="1.6"/>
<polygon points="57,162 52.5,169 61.5,169" fill="currentColor"/>
<text x="57" y="201" text-anchor="middle" font-size="16" font-family="Mitr, Tahoma, sans-serif" font-size="14">ไม่มีขอบ</text>
<text x="121" y="63" text-anchor="middle" font-size="16">R</text>
<text x="121" y="93" text-anchor="middle" font-size="16">0</text>
<text x="121" y="120" text-anchor="middle" font-size="16">0</text>
<text x="121" y="147" text-anchor="middle" font-size="16">1</text>
<text x="121" y="174" text-anchor="middle" font-size="16">1</text>
<text x="121" y="201" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="167" y="63" text-anchor="middle" font-size="16">S</text>
<text x="167" y="93" text-anchor="middle" font-size="16">0</text>
<text x="167" y="120" text-anchor="middle" font-size="16">1</text>
<text x="167" y="147" text-anchor="middle" font-size="16">0</text>
<text x="167" y="174" text-anchor="middle" font-size="16">1</text>
<text x="167" y="201" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="213.8" y="63" text-anchor="middle" font-size="16">Q</text>
<text x="213.8" y="93" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<text x="213.8" y="120" text-anchor="middle" font-size="16">1</text>
<text x="213.8" y="147" text-anchor="middle" font-size="16">0</text>
<text x="213.8" y="174" text-anchor="middle" font-size="16">?</text>
<text x="213.8" y="201" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<text x="261.2" y="63" text-anchor="middle" font-size="16">Q</text>
<line x1="255.5" y1="49" x2="266.5" y2="49" stroke="currentColor" stroke-width="1.3"/>
<text x="261.2" y="93" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<line x1="251.5" y1="79" x2="262.5" y2="79" stroke="currentColor" stroke-width="1.3"/>
<text x="261.2" y="120" text-anchor="middle" font-size="16">0</text>
<text x="261.2" y="147" text-anchor="middle" font-size="16">1</text>
<text x="261.2" y="174" text-anchor="middle" font-size="16">?</text>
<text x="261.2" y="201" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<line x1="251.5" y1="187" x2="262.5" y2="187" stroke="currentColor" stroke-width="1.3"/>
</svg>
</div>

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
<text x="50" y="123.6" text-anchor="end">R</text>
<path d="M62,131.2 L222,131.2 L222,104 L302,104 L302,131.2 L590,131.2 L590,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">S</text>
<path d="M62,164 L222,164 L222,191.2 L302,191.2 L302,164 L398,164 L398,191.2 L702,191.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  Clock RS ฟลิป-ฟลอป ที่มี PS และ CLR ทำงานที่ขอบขาขึ้นของสัญญาณนาฬิกา เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=rs; trig=rise; pins=ps; set=a; give=wave}

PS และ CLR ทำงานเมื่อเป็น $0$ และทำงานทันที ไม่ต้องรอสัญญาณนาฬิกา

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="344" viewBox="0 0 726 344" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="338"/>
<line x1="254" y1="26" x2="254" y2="338"/>
<line x1="382" y1="26" x2="382" y2="338"/>
<line x1="510" y1="26" x2="510" y2="338"/>
<line x1="638" y1="26" x2="638" y2="338"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,44 L430,44 L430,71.2 L478,71.2 L478,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,104 L606,104 L606,131.2 L670,131.2 L670,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<path d="M62,191.2 L126,191.2 L126,164 L190,164 L190,191.2 L254,191.2 L254,164 L318,164 L318,191.2 L382,191.2 L382,164 L446,164 L446,191.2 L510,191.2 L510,164 L574,164 L574,191.2 L638,191.2 L638,164 L702,164 L702,191.2 L702,191.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">R</text>
<path d="M62,251.2 L350,251.2 L350,224 L414,224 L414,251.2 L574,251.2 L574,224 L702,224" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">S</text>
<path d="M62,284 L174,284 L174,311.2 L414,311.2 L414,284 L574,284 L574,311.2 L702,311.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  Clock RS ฟลิป-ฟลอป ที่มี PS และ CLR ทำงานที่ขอบขาขึ้นของสัญญาณนาฬิกา เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=rs; trig=rise; pins=ps; set=a; give=table}

**ตารางการทำงาน** ($x$ คือค่าอะไรก็ได้, $Q_0$ คือค่า $Q$ ก่อนมีสัญญาณกระตุ้น)

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="456" height="301" viewBox="0 0 456 301" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<text x="228" y="26" text-anchor="middle" font-family="Mitr, Tahoma, sans-serif" font-size="21" font-weight="500" fill="#e8743b">ตารางการทำงาน</text>
<g stroke="currentColor" stroke-width="1.4" fill="none">
<rect x="16" y="42" width="424" height="251"/>
<line x1="16" y1="73" x2="440" y2="73"/>
<line x1="345" y1="42" x2="345" y2="293"/>
<line x1="16" y1="154" x2="440" y2="154" stroke-width="0.9" stroke-opacity="0.55"/>
<line x1="16" y1="262" x2="440" y2="262" stroke-width="0.9" stroke-opacity="0.55"/>
</g>
<text x="57" y="63" text-anchor="middle" font-size="16">PRESET</text>
<text x="57" y="93" text-anchor="middle" font-size="16">0</text>
<text x="57" y="120" text-anchor="middle" font-size="16">0</text>
<text x="57" y="147" text-anchor="middle" font-size="16">1</text>
<text x="57" y="174" text-anchor="middle" font-size="16">1</text>
<text x="57" y="201" text-anchor="middle" font-size="16">1</text>
<text x="57" y="228" text-anchor="middle" font-size="16">1</text>
<text x="57" y="255" text-anchor="middle" font-size="16">1</text>
<text x="57" y="282" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="63" text-anchor="middle" font-size="16">CLEAR</text>
<text x="134.5" y="93" text-anchor="middle" font-size="16">0</text>
<text x="134.5" y="120" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="147" text-anchor="middle" font-size="16">0</text>
<text x="134.5" y="174" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="201" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="228" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="255" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="282" text-anchor="middle" font-size="16">1</text>
<text x="212" y="63" text-anchor="middle" font-size="16">CLOCK</text>
<text x="212" y="93" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="212" y="120" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="212" y="147" text-anchor="middle" font-size="16" font-style="italic">x</text>
<line x1="212" y1="176" x2="212" y2="163" stroke="currentColor" stroke-width="1.6"/>
<polygon points="212,162 207.5,169 216.5,169" fill="currentColor"/>
<line x1="212" y1="203" x2="212" y2="190" stroke="currentColor" stroke-width="1.6"/>
<polygon points="212,189 207.5,196 216.5,196" fill="currentColor"/>
<line x1="212" y1="230" x2="212" y2="217" stroke="currentColor" stroke-width="1.6"/>
<polygon points="212,216 207.5,223 216.5,223" fill="currentColor"/>
<line x1="212" y1="257" x2="212" y2="244" stroke="currentColor" stroke-width="1.6"/>
<polygon points="212,243 207.5,250 216.5,250" fill="currentColor"/>
<text x="212" y="282" text-anchor="middle" font-size="16" font-family="Mitr, Tahoma, sans-serif" font-size="14">ไม่มีขอบ</text>
<text x="276" y="63" text-anchor="middle" font-size="16">R</text>
<text x="276" y="93" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="276" y="120" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="276" y="147" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="276" y="174" text-anchor="middle" font-size="16">0</text>
<text x="276" y="201" text-anchor="middle" font-size="16">0</text>
<text x="276" y="228" text-anchor="middle" font-size="16">1</text>
<text x="276" y="255" text-anchor="middle" font-size="16">1</text>
<text x="276" y="282" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="322" y="63" text-anchor="middle" font-size="16">S</text>
<text x="322" y="93" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="322" y="120" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="322" y="147" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="322" y="174" text-anchor="middle" font-size="16">0</text>
<text x="322" y="201" text-anchor="middle" font-size="16">1</text>
<text x="322" y="228" text-anchor="middle" font-size="16">0</text>
<text x="322" y="255" text-anchor="middle" font-size="16">1</text>
<text x="322" y="282" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="368.8" y="63" text-anchor="middle" font-size="16">Q</text>
<text x="368.8" y="93" text-anchor="middle" font-size="16">1</text>
<text x="368.8" y="120" text-anchor="middle" font-size="16">1</text>
<text x="368.8" y="147" text-anchor="middle" font-size="16">0</text>
<text x="368.8" y="174" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<text x="368.8" y="201" text-anchor="middle" font-size="16">1</text>
<text x="368.8" y="228" text-anchor="middle" font-size="16">0</text>
<text x="368.8" y="255" text-anchor="middle" font-size="16">?</text>
<text x="368.8" y="282" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<text x="416.2" y="63" text-anchor="middle" font-size="16">Q</text>
<line x1="410.5" y1="49" x2="421.5" y2="49" stroke="currentColor" stroke-width="1.3"/>
<text x="416.2" y="93" text-anchor="middle" font-size="16">1</text>
<text x="416.2" y="120" text-anchor="middle" font-size="16">0</text>
<text x="416.2" y="147" text-anchor="middle" font-size="16">1</text>
<text x="416.2" y="174" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<line x1="406.5" y1="160" x2="417.5" y2="160" stroke="currentColor" stroke-width="1.3"/>
<text x="416.2" y="201" text-anchor="middle" font-size="16">0</text>
<text x="416.2" y="228" text-anchor="middle" font-size="16">1</text>
<text x="416.2" y="255" text-anchor="middle" font-size="16">?</text>
<text x="416.2" y="282" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<line x1="406.5" y1="268" x2="417.5" y2="268" stroke="currentColor" stroke-width="1.3"/>
</svg>
</div>

PS และ CLR ทำงานเมื่อเป็น $0$ และทำงานทันที ไม่ต้องรอสัญญาณนาฬิกา

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="344" viewBox="0 0 726 344" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="338"/>
<line x1="254" y1="26" x2="254" y2="338"/>
<line x1="382" y1="26" x2="382" y2="338"/>
<line x1="510" y1="26" x2="510" y2="338"/>
<line x1="638" y1="26" x2="638" y2="338"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,44 L430,44 L430,71.2 L478,71.2 L478,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,104 L606,104 L606,131.2 L670,131.2 L670,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<path d="M62,191.2 L126,191.2 L126,164 L190,164 L190,191.2 L254,191.2 L254,164 L318,164 L318,191.2 L382,191.2 L382,164 L446,164 L446,191.2 L510,191.2 L510,164 L574,164 L574,191.2 L638,191.2 L638,164 L702,164 L702,191.2 L702,191.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">R</text>
<path d="M62,251.2 L350,251.2 L350,224 L414,224 L414,251.2 L574,251.2 L574,224 L702,224" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">S</text>
<path d="M62,284 L174,284 L174,311.2 L414,311.2 L414,284 L574,284 L574,311.2 L702,311.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  Clock RS ฟลิป-ฟลอป ที่มี PS และ CLR ทำงานที่ขอบขาขึ้นของสัญญาณนาฬิกา เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=rs; trig=rise; pins=ps; set=b; give=wave}

PS และ CLR ทำงานเมื่อเป็น $0$ และทำงานทันที ไม่ต้องรอสัญญาณนาฬิกา

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="344" viewBox="0 0 726 344" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="338"/>
<line x1="254" y1="26" x2="254" y2="338"/>
<line x1="382" y1="26" x2="382" y2="338"/>
<line x1="510" y1="26" x2="510" y2="338"/>
<line x1="638" y1="26" x2="638" y2="338"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,44 L174,44 L174,71.2 L222,71.2 L222,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,104 L478,104 L478,131.2 L542,131.2 L542,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<path d="M62,191.2 L126,191.2 L126,164 L190,164 L190,191.2 L254,191.2 L254,164 L318,164 L318,191.2 L382,191.2 L382,164 L446,164 L446,191.2 L510,191.2 L510,164 L574,164 L574,191.2 L638,191.2 L638,164 L702,164 L702,191.2 L702,191.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">R</text>
<path d="M62,224 L190,224 L190,251.2 L462,251.2 L462,224 L558,224 L558,251.2 L702,251.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">S</text>
<path d="M62,311.2 L190,311.2 L190,284 L286,284 L286,311.2 L558,311.2 L558,284 L702,284" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  Clock RS ฟลิป-ฟลอป ที่มี PS และ CLR ทำงานที่ขอบขาขึ้นของสัญญาณนาฬิกา เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=rs; trig=rise; pins=ps; set=b; give=table}

**ตารางการทำงาน** ($x$ คือค่าอะไรก็ได้, $Q_0$ คือค่า $Q$ ก่อนมีสัญญาณกระตุ้น)

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="456" height="301" viewBox="0 0 456 301" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<text x="228" y="26" text-anchor="middle" font-family="Mitr, Tahoma, sans-serif" font-size="21" font-weight="500" fill="#e8743b">ตารางการทำงาน</text>
<g stroke="currentColor" stroke-width="1.4" fill="none">
<rect x="16" y="42" width="424" height="251"/>
<line x1="16" y1="73" x2="440" y2="73"/>
<line x1="345" y1="42" x2="345" y2="293"/>
<line x1="16" y1="154" x2="440" y2="154" stroke-width="0.9" stroke-opacity="0.55"/>
<line x1="16" y1="262" x2="440" y2="262" stroke-width="0.9" stroke-opacity="0.55"/>
</g>
<text x="57" y="63" text-anchor="middle" font-size="16">PRESET</text>
<text x="57" y="93" text-anchor="middle" font-size="16">0</text>
<text x="57" y="120" text-anchor="middle" font-size="16">0</text>
<text x="57" y="147" text-anchor="middle" font-size="16">1</text>
<text x="57" y="174" text-anchor="middle" font-size="16">1</text>
<text x="57" y="201" text-anchor="middle" font-size="16">1</text>
<text x="57" y="228" text-anchor="middle" font-size="16">1</text>
<text x="57" y="255" text-anchor="middle" font-size="16">1</text>
<text x="57" y="282" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="63" text-anchor="middle" font-size="16">CLEAR</text>
<text x="134.5" y="93" text-anchor="middle" font-size="16">0</text>
<text x="134.5" y="120" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="147" text-anchor="middle" font-size="16">0</text>
<text x="134.5" y="174" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="201" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="228" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="255" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="282" text-anchor="middle" font-size="16">1</text>
<text x="212" y="63" text-anchor="middle" font-size="16">CLOCK</text>
<text x="212" y="93" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="212" y="120" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="212" y="147" text-anchor="middle" font-size="16" font-style="italic">x</text>
<line x1="212" y1="176" x2="212" y2="163" stroke="currentColor" stroke-width="1.6"/>
<polygon points="212,162 207.5,169 216.5,169" fill="currentColor"/>
<line x1="212" y1="203" x2="212" y2="190" stroke="currentColor" stroke-width="1.6"/>
<polygon points="212,189 207.5,196 216.5,196" fill="currentColor"/>
<line x1="212" y1="230" x2="212" y2="217" stroke="currentColor" stroke-width="1.6"/>
<polygon points="212,216 207.5,223 216.5,223" fill="currentColor"/>
<line x1="212" y1="257" x2="212" y2="244" stroke="currentColor" stroke-width="1.6"/>
<polygon points="212,243 207.5,250 216.5,250" fill="currentColor"/>
<text x="212" y="282" text-anchor="middle" font-size="16" font-family="Mitr, Tahoma, sans-serif" font-size="14">ไม่มีขอบ</text>
<text x="276" y="63" text-anchor="middle" font-size="16">R</text>
<text x="276" y="93" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="276" y="120" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="276" y="147" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="276" y="174" text-anchor="middle" font-size="16">0</text>
<text x="276" y="201" text-anchor="middle" font-size="16">0</text>
<text x="276" y="228" text-anchor="middle" font-size="16">1</text>
<text x="276" y="255" text-anchor="middle" font-size="16">1</text>
<text x="276" y="282" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="322" y="63" text-anchor="middle" font-size="16">S</text>
<text x="322" y="93" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="322" y="120" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="322" y="147" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="322" y="174" text-anchor="middle" font-size="16">0</text>
<text x="322" y="201" text-anchor="middle" font-size="16">1</text>
<text x="322" y="228" text-anchor="middle" font-size="16">0</text>
<text x="322" y="255" text-anchor="middle" font-size="16">1</text>
<text x="322" y="282" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="368.8" y="63" text-anchor="middle" font-size="16">Q</text>
<text x="368.8" y="93" text-anchor="middle" font-size="16">1</text>
<text x="368.8" y="120" text-anchor="middle" font-size="16">1</text>
<text x="368.8" y="147" text-anchor="middle" font-size="16">0</text>
<text x="368.8" y="174" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<text x="368.8" y="201" text-anchor="middle" font-size="16">1</text>
<text x="368.8" y="228" text-anchor="middle" font-size="16">0</text>
<text x="368.8" y="255" text-anchor="middle" font-size="16">?</text>
<text x="368.8" y="282" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<text x="416.2" y="63" text-anchor="middle" font-size="16">Q</text>
<line x1="410.5" y1="49" x2="421.5" y2="49" stroke="currentColor" stroke-width="1.3"/>
<text x="416.2" y="93" text-anchor="middle" font-size="16">1</text>
<text x="416.2" y="120" text-anchor="middle" font-size="16">0</text>
<text x="416.2" y="147" text-anchor="middle" font-size="16">1</text>
<text x="416.2" y="174" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<line x1="406.5" y1="160" x2="417.5" y2="160" stroke="currentColor" stroke-width="1.3"/>
<text x="416.2" y="201" text-anchor="middle" font-size="16">0</text>
<text x="416.2" y="228" text-anchor="middle" font-size="16">1</text>
<text x="416.2" y="255" text-anchor="middle" font-size="16">?</text>
<text x="416.2" y="282" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<line x1="406.5" y1="268" x2="417.5" y2="268" stroke="currentColor" stroke-width="1.3"/>
</svg>
</div>

PS และ CLR ทำงานเมื่อเป็น $0$ และทำงานทันที ไม่ต้องรอสัญญาณนาฬิกา

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="344" viewBox="0 0 726 344" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="338"/>
<line x1="254" y1="26" x2="254" y2="338"/>
<line x1="382" y1="26" x2="382" y2="338"/>
<line x1="510" y1="26" x2="510" y2="338"/>
<line x1="638" y1="26" x2="638" y2="338"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,44 L174,44 L174,71.2 L222,71.2 L222,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,104 L478,104 L478,131.2 L542,131.2 L542,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<path d="M62,191.2 L126,191.2 L126,164 L190,164 L190,191.2 L254,191.2 L254,164 L318,164 L318,191.2 L382,191.2 L382,164 L446,164 L446,191.2 L510,191.2 L510,164 L574,164 L574,191.2 L638,191.2 L638,164 L702,164 L702,191.2 L702,191.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">R</text>
<path d="M62,224 L190,224 L190,251.2 L462,251.2 L462,224 L558,224 L558,251.2 L702,251.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">S</text>
<path d="M62,311.2 L190,311.2 L190,284 L286,284 L286,311.2 L558,311.2 L558,284 L702,284" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  Clock RS ฟลิป-ฟลอป ที่มี PS และ CLR ทำงานที่ขอบขาขึ้นของสัญญาณนาฬิกา เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=rs; trig=rise; pins=ps; set=c; give=wave}

PS และ CLR ทำงานเมื่อเป็น $0$ และทำงานทันที ไม่ต้องรอสัญญาณนาฬิกา

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="344" viewBox="0 0 726 344" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="338"/>
<line x1="254" y1="26" x2="254" y2="338"/>
<line x1="382" y1="26" x2="382" y2="338"/>
<line x1="510" y1="26" x2="510" y2="338"/>
<line x1="638" y1="26" x2="638" y2="338"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,44 L606,44 L606,71.2 L670,71.2 L670,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,104 L462,104 L462,131.2 L526,131.2 L526,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<path d="M62,191.2 L126,191.2 L126,164 L190,164 L190,191.2 L254,191.2 L254,164 L318,164 L318,191.2 L382,191.2 L382,164 L446,164 L446,191.2 L510,191.2 L510,164 L574,164 L574,191.2 L638,191.2 L638,164 L702,164 L702,191.2 L702,191.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">R</text>
<path d="M62,251.2 L222,251.2 L222,224 L302,224 L302,251.2 L590,251.2 L590,224 L702,224" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">S</text>
<path d="M62,284 L222,284 L222,311.2 L302,311.2 L302,284 L398,284 L398,311.2 L702,311.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  Clock RS ฟลิป-ฟลอป ที่มี PS และ CLR ทำงานที่ขอบขาขึ้นของสัญญาณนาฬิกา เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=rs; trig=rise; pins=ps; set=c; give=table}

**ตารางการทำงาน** ($x$ คือค่าอะไรก็ได้, $Q_0$ คือค่า $Q$ ก่อนมีสัญญาณกระตุ้น)

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="456" height="301" viewBox="0 0 456 301" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<text x="228" y="26" text-anchor="middle" font-family="Mitr, Tahoma, sans-serif" font-size="21" font-weight="500" fill="#e8743b">ตารางการทำงาน</text>
<g stroke="currentColor" stroke-width="1.4" fill="none">
<rect x="16" y="42" width="424" height="251"/>
<line x1="16" y1="73" x2="440" y2="73"/>
<line x1="345" y1="42" x2="345" y2="293"/>
<line x1="16" y1="154" x2="440" y2="154" stroke-width="0.9" stroke-opacity="0.55"/>
<line x1="16" y1="262" x2="440" y2="262" stroke-width="0.9" stroke-opacity="0.55"/>
</g>
<text x="57" y="63" text-anchor="middle" font-size="16">PRESET</text>
<text x="57" y="93" text-anchor="middle" font-size="16">0</text>
<text x="57" y="120" text-anchor="middle" font-size="16">0</text>
<text x="57" y="147" text-anchor="middle" font-size="16">1</text>
<text x="57" y="174" text-anchor="middle" font-size="16">1</text>
<text x="57" y="201" text-anchor="middle" font-size="16">1</text>
<text x="57" y="228" text-anchor="middle" font-size="16">1</text>
<text x="57" y="255" text-anchor="middle" font-size="16">1</text>
<text x="57" y="282" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="63" text-anchor="middle" font-size="16">CLEAR</text>
<text x="134.5" y="93" text-anchor="middle" font-size="16">0</text>
<text x="134.5" y="120" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="147" text-anchor="middle" font-size="16">0</text>
<text x="134.5" y="174" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="201" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="228" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="255" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="282" text-anchor="middle" font-size="16">1</text>
<text x="212" y="63" text-anchor="middle" font-size="16">CLOCK</text>
<text x="212" y="93" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="212" y="120" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="212" y="147" text-anchor="middle" font-size="16" font-style="italic">x</text>
<line x1="212" y1="176" x2="212" y2="163" stroke="currentColor" stroke-width="1.6"/>
<polygon points="212,162 207.5,169 216.5,169" fill="currentColor"/>
<line x1="212" y1="203" x2="212" y2="190" stroke="currentColor" stroke-width="1.6"/>
<polygon points="212,189 207.5,196 216.5,196" fill="currentColor"/>
<line x1="212" y1="230" x2="212" y2="217" stroke="currentColor" stroke-width="1.6"/>
<polygon points="212,216 207.5,223 216.5,223" fill="currentColor"/>
<line x1="212" y1="257" x2="212" y2="244" stroke="currentColor" stroke-width="1.6"/>
<polygon points="212,243 207.5,250 216.5,250" fill="currentColor"/>
<text x="212" y="282" text-anchor="middle" font-size="16" font-family="Mitr, Tahoma, sans-serif" font-size="14">ไม่มีขอบ</text>
<text x="276" y="63" text-anchor="middle" font-size="16">R</text>
<text x="276" y="93" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="276" y="120" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="276" y="147" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="276" y="174" text-anchor="middle" font-size="16">0</text>
<text x="276" y="201" text-anchor="middle" font-size="16">0</text>
<text x="276" y="228" text-anchor="middle" font-size="16">1</text>
<text x="276" y="255" text-anchor="middle" font-size="16">1</text>
<text x="276" y="282" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="322" y="63" text-anchor="middle" font-size="16">S</text>
<text x="322" y="93" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="322" y="120" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="322" y="147" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="322" y="174" text-anchor="middle" font-size="16">0</text>
<text x="322" y="201" text-anchor="middle" font-size="16">1</text>
<text x="322" y="228" text-anchor="middle" font-size="16">0</text>
<text x="322" y="255" text-anchor="middle" font-size="16">1</text>
<text x="322" y="282" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="368.8" y="63" text-anchor="middle" font-size="16">Q</text>
<text x="368.8" y="93" text-anchor="middle" font-size="16">1</text>
<text x="368.8" y="120" text-anchor="middle" font-size="16">1</text>
<text x="368.8" y="147" text-anchor="middle" font-size="16">0</text>
<text x="368.8" y="174" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<text x="368.8" y="201" text-anchor="middle" font-size="16">1</text>
<text x="368.8" y="228" text-anchor="middle" font-size="16">0</text>
<text x="368.8" y="255" text-anchor="middle" font-size="16">?</text>
<text x="368.8" y="282" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<text x="416.2" y="63" text-anchor="middle" font-size="16">Q</text>
<line x1="410.5" y1="49" x2="421.5" y2="49" stroke="currentColor" stroke-width="1.3"/>
<text x="416.2" y="93" text-anchor="middle" font-size="16">1</text>
<text x="416.2" y="120" text-anchor="middle" font-size="16">0</text>
<text x="416.2" y="147" text-anchor="middle" font-size="16">1</text>
<text x="416.2" y="174" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<line x1="406.5" y1="160" x2="417.5" y2="160" stroke="currentColor" stroke-width="1.3"/>
<text x="416.2" y="201" text-anchor="middle" font-size="16">0</text>
<text x="416.2" y="228" text-anchor="middle" font-size="16">1</text>
<text x="416.2" y="255" text-anchor="middle" font-size="16">?</text>
<text x="416.2" y="282" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<line x1="406.5" y1="268" x2="417.5" y2="268" stroke="currentColor" stroke-width="1.3"/>
</svg>
</div>

PS และ CLR ทำงานเมื่อเป็น $0$ และทำงานทันที ไม่ต้องรอสัญญาณนาฬิกา

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="344" viewBox="0 0 726 344" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="338"/>
<line x1="254" y1="26" x2="254" y2="338"/>
<line x1="382" y1="26" x2="382" y2="338"/>
<line x1="510" y1="26" x2="510" y2="338"/>
<line x1="638" y1="26" x2="638" y2="338"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,44 L606,44 L606,71.2 L670,71.2 L670,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,104 L462,104 L462,131.2 L526,131.2 L526,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<path d="M62,191.2 L126,191.2 L126,164 L190,164 L190,191.2 L254,191.2 L254,164 L318,164 L318,191.2 L382,191.2 L382,164 L446,164 L446,191.2 L510,191.2 L510,164 L574,164 L574,191.2 L638,191.2 L638,164 L702,164 L702,191.2 L702,191.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">R</text>
<path d="M62,251.2 L222,251.2 L222,224 L302,224 L302,251.2 L590,251.2 L590,224 L702,224" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">S</text>
<path d="M62,284 L222,284 L222,311.2 L302,311.2 L302,284 L398,284 L398,311.2 L702,311.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  Clock RS ฟลิป-ฟลอป ทำงานที่ขอบขาลงของสัญญาณนาฬิกา เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=rs; trig=fall; pins=none; set=a; give=wave}

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
<path d="M62,44 L126,44 L126,71.2 L190,71.2 L190,44 L254,44 L254,71.2 L318,71.2 L318,44 L382,44 L382,71.2 L446,71.2 L446,44 L510,44 L510,71.2 L574,71.2 L574,44 L638,44 L638,71.2 L702,71.2 L702,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">R</text>
<path d="M62,131.2 L350,131.2 L350,104 L414,104 L414,131.2 L574,131.2 L574,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">S</text>
<path d="M62,164 L174,164 L174,191.2 L414,191.2 L414,164 L574,164 L574,191.2 L702,191.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  Clock RS ฟลิป-ฟลอป ทำงานที่ขอบขาลงของสัญญาณนาฬิกา เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=rs; trig=fall; pins=none; set=a; give=table}

**ตารางการทำงาน** ($x$ คือค่าอะไรก็ได้, $Q_0$ คือค่า $Q$ ก่อนมีสัญญาณกระตุ้น)

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="301" height="220" viewBox="0 0 301 220" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<text x="150.5" y="26" text-anchor="middle" font-family="Mitr, Tahoma, sans-serif" font-size="21" font-weight="500" fill="#e8743b">ตารางการทำงาน</text>
<g stroke="currentColor" stroke-width="1.4" fill="none">
<rect x="16" y="42" width="269" height="170"/>
<line x1="16" y1="73" x2="285" y2="73"/>
<line x1="190" y1="42" x2="190" y2="212"/>
<line x1="16" y1="181" x2="285" y2="181" stroke-width="0.9" stroke-opacity="0.55"/>
</g>
<text x="57" y="63" text-anchor="middle" font-size="16">CLOCK</text>
<line x1="57" y1="82" x2="57" y2="95" stroke="currentColor" stroke-width="1.6"/>
<polygon points="57,96 52.5,89 61.5,89" fill="currentColor"/>
<line x1="57" y1="109" x2="57" y2="122" stroke="currentColor" stroke-width="1.6"/>
<polygon points="57,123 52.5,116 61.5,116" fill="currentColor"/>
<line x1="57" y1="136" x2="57" y2="149" stroke="currentColor" stroke-width="1.6"/>
<polygon points="57,150 52.5,143 61.5,143" fill="currentColor"/>
<line x1="57" y1="163" x2="57" y2="176" stroke="currentColor" stroke-width="1.6"/>
<polygon points="57,177 52.5,170 61.5,170" fill="currentColor"/>
<text x="57" y="201" text-anchor="middle" font-size="16" font-family="Mitr, Tahoma, sans-serif" font-size="14">ไม่มีขอบ</text>
<text x="121" y="63" text-anchor="middle" font-size="16">R</text>
<text x="121" y="93" text-anchor="middle" font-size="16">0</text>
<text x="121" y="120" text-anchor="middle" font-size="16">0</text>
<text x="121" y="147" text-anchor="middle" font-size="16">1</text>
<text x="121" y="174" text-anchor="middle" font-size="16">1</text>
<text x="121" y="201" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="167" y="63" text-anchor="middle" font-size="16">S</text>
<text x="167" y="93" text-anchor="middle" font-size="16">0</text>
<text x="167" y="120" text-anchor="middle" font-size="16">1</text>
<text x="167" y="147" text-anchor="middle" font-size="16">0</text>
<text x="167" y="174" text-anchor="middle" font-size="16">1</text>
<text x="167" y="201" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="213.8" y="63" text-anchor="middle" font-size="16">Q</text>
<text x="213.8" y="93" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<text x="213.8" y="120" text-anchor="middle" font-size="16">1</text>
<text x="213.8" y="147" text-anchor="middle" font-size="16">0</text>
<text x="213.8" y="174" text-anchor="middle" font-size="16">?</text>
<text x="213.8" y="201" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<text x="261.2" y="63" text-anchor="middle" font-size="16">Q</text>
<line x1="255.5" y1="49" x2="266.5" y2="49" stroke="currentColor" stroke-width="1.3"/>
<text x="261.2" y="93" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<line x1="251.5" y1="79" x2="262.5" y2="79" stroke="currentColor" stroke-width="1.3"/>
<text x="261.2" y="120" text-anchor="middle" font-size="16">0</text>
<text x="261.2" y="147" text-anchor="middle" font-size="16">1</text>
<text x="261.2" y="174" text-anchor="middle" font-size="16">?</text>
<text x="261.2" y="201" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<line x1="251.5" y1="187" x2="262.5" y2="187" stroke="currentColor" stroke-width="1.3"/>
</svg>
</div>

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
<path d="M62,44 L126,44 L126,71.2 L190,71.2 L190,44 L254,44 L254,71.2 L318,71.2 L318,44 L382,44 L382,71.2 L446,71.2 L446,44 L510,44 L510,71.2 L574,71.2 L574,44 L638,44 L638,71.2 L702,71.2 L702,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">R</text>
<path d="M62,131.2 L350,131.2 L350,104 L414,104 L414,131.2 L574,131.2 L574,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">S</text>
<path d="M62,164 L174,164 L174,191.2 L414,191.2 L414,164 L574,164 L574,191.2 L702,191.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  Clock RS ฟลิป-ฟลอป ทำงานที่ขอบขาลงของสัญญาณนาฬิกา เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=rs; trig=fall; pins=none; set=b; give=wave}

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
<path d="M62,44 L126,44 L126,71.2 L190,71.2 L190,44 L254,44 L254,71.2 L318,71.2 L318,44 L382,44 L382,71.2 L446,71.2 L446,44 L510,44 L510,71.2 L574,71.2 L574,44 L638,44 L638,71.2 L702,71.2 L702,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">R</text>
<path d="M62,104 L190,104 L190,131.2 L462,131.2 L462,104 L558,104 L558,131.2 L702,131.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">S</text>
<path d="M62,191.2 L190,191.2 L190,164 L286,164 L286,191.2 L558,191.2 L558,164 L702,164" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  Clock RS ฟลิป-ฟลอป ทำงานที่ขอบขาลงของสัญญาณนาฬิกา เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=rs; trig=fall; pins=none; set=b; give=table}

**ตารางการทำงาน** ($x$ คือค่าอะไรก็ได้, $Q_0$ คือค่า $Q$ ก่อนมีสัญญาณกระตุ้น)

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="301" height="220" viewBox="0 0 301 220" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<text x="150.5" y="26" text-anchor="middle" font-family="Mitr, Tahoma, sans-serif" font-size="21" font-weight="500" fill="#e8743b">ตารางการทำงาน</text>
<g stroke="currentColor" stroke-width="1.4" fill="none">
<rect x="16" y="42" width="269" height="170"/>
<line x1="16" y1="73" x2="285" y2="73"/>
<line x1="190" y1="42" x2="190" y2="212"/>
<line x1="16" y1="181" x2="285" y2="181" stroke-width="0.9" stroke-opacity="0.55"/>
</g>
<text x="57" y="63" text-anchor="middle" font-size="16">CLOCK</text>
<line x1="57" y1="82" x2="57" y2="95" stroke="currentColor" stroke-width="1.6"/>
<polygon points="57,96 52.5,89 61.5,89" fill="currentColor"/>
<line x1="57" y1="109" x2="57" y2="122" stroke="currentColor" stroke-width="1.6"/>
<polygon points="57,123 52.5,116 61.5,116" fill="currentColor"/>
<line x1="57" y1="136" x2="57" y2="149" stroke="currentColor" stroke-width="1.6"/>
<polygon points="57,150 52.5,143 61.5,143" fill="currentColor"/>
<line x1="57" y1="163" x2="57" y2="176" stroke="currentColor" stroke-width="1.6"/>
<polygon points="57,177 52.5,170 61.5,170" fill="currentColor"/>
<text x="57" y="201" text-anchor="middle" font-size="16" font-family="Mitr, Tahoma, sans-serif" font-size="14">ไม่มีขอบ</text>
<text x="121" y="63" text-anchor="middle" font-size="16">R</text>
<text x="121" y="93" text-anchor="middle" font-size="16">0</text>
<text x="121" y="120" text-anchor="middle" font-size="16">0</text>
<text x="121" y="147" text-anchor="middle" font-size="16">1</text>
<text x="121" y="174" text-anchor="middle" font-size="16">1</text>
<text x="121" y="201" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="167" y="63" text-anchor="middle" font-size="16">S</text>
<text x="167" y="93" text-anchor="middle" font-size="16">0</text>
<text x="167" y="120" text-anchor="middle" font-size="16">1</text>
<text x="167" y="147" text-anchor="middle" font-size="16">0</text>
<text x="167" y="174" text-anchor="middle" font-size="16">1</text>
<text x="167" y="201" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="213.8" y="63" text-anchor="middle" font-size="16">Q</text>
<text x="213.8" y="93" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<text x="213.8" y="120" text-anchor="middle" font-size="16">1</text>
<text x="213.8" y="147" text-anchor="middle" font-size="16">0</text>
<text x="213.8" y="174" text-anchor="middle" font-size="16">?</text>
<text x="213.8" y="201" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<text x="261.2" y="63" text-anchor="middle" font-size="16">Q</text>
<line x1="255.5" y1="49" x2="266.5" y2="49" stroke="currentColor" stroke-width="1.3"/>
<text x="261.2" y="93" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<line x1="251.5" y1="79" x2="262.5" y2="79" stroke="currentColor" stroke-width="1.3"/>
<text x="261.2" y="120" text-anchor="middle" font-size="16">0</text>
<text x="261.2" y="147" text-anchor="middle" font-size="16">1</text>
<text x="261.2" y="174" text-anchor="middle" font-size="16">?</text>
<text x="261.2" y="201" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<line x1="251.5" y1="187" x2="262.5" y2="187" stroke="currentColor" stroke-width="1.3"/>
</svg>
</div>

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
<path d="M62,44 L126,44 L126,71.2 L190,71.2 L190,44 L254,44 L254,71.2 L318,71.2 L318,44 L382,44 L382,71.2 L446,71.2 L446,44 L510,44 L510,71.2 L574,71.2 L574,44 L638,44 L638,71.2 L702,71.2 L702,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">R</text>
<path d="M62,104 L190,104 L190,131.2 L462,131.2 L462,104 L558,104 L558,131.2 L702,131.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">S</text>
<path d="M62,191.2 L190,191.2 L190,164 L286,164 L286,191.2 L558,191.2 L558,164 L702,164" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  Clock RS ฟลิป-ฟลอป ทำงานที่ขอบขาลงของสัญญาณนาฬิกา เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=rs; trig=fall; pins=none; set=c; give=wave}

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
<path d="M62,44 L126,44 L126,71.2 L190,71.2 L190,44 L254,44 L254,71.2 L318,71.2 L318,44 L382,44 L382,71.2 L446,71.2 L446,44 L510,44 L510,71.2 L574,71.2 L574,44 L638,44 L638,71.2 L702,71.2 L702,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">R</text>
<path d="M62,131.2 L222,131.2 L222,104 L302,104 L302,131.2 L590,131.2 L590,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">S</text>
<path d="M62,164 L222,164 L222,191.2 L302,191.2 L302,164 L398,164 L398,191.2 L702,191.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  Clock RS ฟลิป-ฟลอป ทำงานที่ขอบขาลงของสัญญาณนาฬิกา เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=rs; trig=fall; pins=none; set=c; give=table}

**ตารางการทำงาน** ($x$ คือค่าอะไรก็ได้, $Q_0$ คือค่า $Q$ ก่อนมีสัญญาณกระตุ้น)

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="301" height="220" viewBox="0 0 301 220" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<text x="150.5" y="26" text-anchor="middle" font-family="Mitr, Tahoma, sans-serif" font-size="21" font-weight="500" fill="#e8743b">ตารางการทำงาน</text>
<g stroke="currentColor" stroke-width="1.4" fill="none">
<rect x="16" y="42" width="269" height="170"/>
<line x1="16" y1="73" x2="285" y2="73"/>
<line x1="190" y1="42" x2="190" y2="212"/>
<line x1="16" y1="181" x2="285" y2="181" stroke-width="0.9" stroke-opacity="0.55"/>
</g>
<text x="57" y="63" text-anchor="middle" font-size="16">CLOCK</text>
<line x1="57" y1="82" x2="57" y2="95" stroke="currentColor" stroke-width="1.6"/>
<polygon points="57,96 52.5,89 61.5,89" fill="currentColor"/>
<line x1="57" y1="109" x2="57" y2="122" stroke="currentColor" stroke-width="1.6"/>
<polygon points="57,123 52.5,116 61.5,116" fill="currentColor"/>
<line x1="57" y1="136" x2="57" y2="149" stroke="currentColor" stroke-width="1.6"/>
<polygon points="57,150 52.5,143 61.5,143" fill="currentColor"/>
<line x1="57" y1="163" x2="57" y2="176" stroke="currentColor" stroke-width="1.6"/>
<polygon points="57,177 52.5,170 61.5,170" fill="currentColor"/>
<text x="57" y="201" text-anchor="middle" font-size="16" font-family="Mitr, Tahoma, sans-serif" font-size="14">ไม่มีขอบ</text>
<text x="121" y="63" text-anchor="middle" font-size="16">R</text>
<text x="121" y="93" text-anchor="middle" font-size="16">0</text>
<text x="121" y="120" text-anchor="middle" font-size="16">0</text>
<text x="121" y="147" text-anchor="middle" font-size="16">1</text>
<text x="121" y="174" text-anchor="middle" font-size="16">1</text>
<text x="121" y="201" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="167" y="63" text-anchor="middle" font-size="16">S</text>
<text x="167" y="93" text-anchor="middle" font-size="16">0</text>
<text x="167" y="120" text-anchor="middle" font-size="16">1</text>
<text x="167" y="147" text-anchor="middle" font-size="16">0</text>
<text x="167" y="174" text-anchor="middle" font-size="16">1</text>
<text x="167" y="201" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="213.8" y="63" text-anchor="middle" font-size="16">Q</text>
<text x="213.8" y="93" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<text x="213.8" y="120" text-anchor="middle" font-size="16">1</text>
<text x="213.8" y="147" text-anchor="middle" font-size="16">0</text>
<text x="213.8" y="174" text-anchor="middle" font-size="16">?</text>
<text x="213.8" y="201" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<text x="261.2" y="63" text-anchor="middle" font-size="16">Q</text>
<line x1="255.5" y1="49" x2="266.5" y2="49" stroke="currentColor" stroke-width="1.3"/>
<text x="261.2" y="93" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<line x1="251.5" y1="79" x2="262.5" y2="79" stroke="currentColor" stroke-width="1.3"/>
<text x="261.2" y="120" text-anchor="middle" font-size="16">0</text>
<text x="261.2" y="147" text-anchor="middle" font-size="16">1</text>
<text x="261.2" y="174" text-anchor="middle" font-size="16">?</text>
<text x="261.2" y="201" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<line x1="251.5" y1="187" x2="262.5" y2="187" stroke="currentColor" stroke-width="1.3"/>
</svg>
</div>

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
<path d="M62,44 L126,44 L126,71.2 L190,71.2 L190,44 L254,44 L254,71.2 L318,71.2 L318,44 L382,44 L382,71.2 L446,71.2 L446,44 L510,44 L510,71.2 L574,71.2 L574,44 L638,44 L638,71.2 L702,71.2 L702,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">R</text>
<path d="M62,131.2 L222,131.2 L222,104 L302,104 L302,131.2 L590,131.2 L590,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">S</text>
<path d="M62,164 L222,164 L222,191.2 L302,191.2 L302,164 L398,164 L398,191.2 L702,191.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  Clock RS ฟลิป-ฟลอป ที่มี PS และ CLR ทำงานที่ขอบขาลงของสัญญาณนาฬิกา เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=rs; trig=fall; pins=ps; set=a; give=wave}

PS และ CLR ทำงานเมื่อเป็น $0$ และทำงานทันที ไม่ต้องรอสัญญาณนาฬิกา

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="344" viewBox="0 0 726 344" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="338"/>
<line x1="254" y1="26" x2="254" y2="338"/>
<line x1="382" y1="26" x2="382" y2="338"/>
<line x1="510" y1="26" x2="510" y2="338"/>
<line x1="638" y1="26" x2="638" y2="338"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,44 L430,44 L430,71.2 L478,71.2 L478,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,104 L606,104 L606,131.2 L670,131.2 L670,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<path d="M62,164 L126,164 L126,191.2 L190,191.2 L190,164 L254,164 L254,191.2 L318,191.2 L318,164 L382,164 L382,191.2 L446,191.2 L446,164 L510,164 L510,191.2 L574,191.2 L574,164 L638,164 L638,191.2 L702,191.2 L702,164 L702,164" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">R</text>
<path d="M62,251.2 L350,251.2 L350,224 L414,224 L414,251.2 L574,251.2 L574,224 L702,224" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">S</text>
<path d="M62,284 L174,284 L174,311.2 L414,311.2 L414,284 L574,284 L574,311.2 L702,311.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  Clock RS ฟลิป-ฟลอป ที่มี PS และ CLR ทำงานที่ขอบขาลงของสัญญาณนาฬิกา เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=rs; trig=fall; pins=ps; set=a; give=table}

**ตารางการทำงาน** ($x$ คือค่าอะไรก็ได้, $Q_0$ คือค่า $Q$ ก่อนมีสัญญาณกระตุ้น)

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="456" height="301" viewBox="0 0 456 301" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<text x="228" y="26" text-anchor="middle" font-family="Mitr, Tahoma, sans-serif" font-size="21" font-weight="500" fill="#e8743b">ตารางการทำงาน</text>
<g stroke="currentColor" stroke-width="1.4" fill="none">
<rect x="16" y="42" width="424" height="251"/>
<line x1="16" y1="73" x2="440" y2="73"/>
<line x1="345" y1="42" x2="345" y2="293"/>
<line x1="16" y1="154" x2="440" y2="154" stroke-width="0.9" stroke-opacity="0.55"/>
<line x1="16" y1="262" x2="440" y2="262" stroke-width="0.9" stroke-opacity="0.55"/>
</g>
<text x="57" y="63" text-anchor="middle" font-size="16">PRESET</text>
<text x="57" y="93" text-anchor="middle" font-size="16">0</text>
<text x="57" y="120" text-anchor="middle" font-size="16">0</text>
<text x="57" y="147" text-anchor="middle" font-size="16">1</text>
<text x="57" y="174" text-anchor="middle" font-size="16">1</text>
<text x="57" y="201" text-anchor="middle" font-size="16">1</text>
<text x="57" y="228" text-anchor="middle" font-size="16">1</text>
<text x="57" y="255" text-anchor="middle" font-size="16">1</text>
<text x="57" y="282" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="63" text-anchor="middle" font-size="16">CLEAR</text>
<text x="134.5" y="93" text-anchor="middle" font-size="16">0</text>
<text x="134.5" y="120" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="147" text-anchor="middle" font-size="16">0</text>
<text x="134.5" y="174" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="201" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="228" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="255" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="282" text-anchor="middle" font-size="16">1</text>
<text x="212" y="63" text-anchor="middle" font-size="16">CLOCK</text>
<text x="212" y="93" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="212" y="120" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="212" y="147" text-anchor="middle" font-size="16" font-style="italic">x</text>
<line x1="212" y1="163" x2="212" y2="176" stroke="currentColor" stroke-width="1.6"/>
<polygon points="212,177 207.5,170 216.5,170" fill="currentColor"/>
<line x1="212" y1="190" x2="212" y2="203" stroke="currentColor" stroke-width="1.6"/>
<polygon points="212,204 207.5,197 216.5,197" fill="currentColor"/>
<line x1="212" y1="217" x2="212" y2="230" stroke="currentColor" stroke-width="1.6"/>
<polygon points="212,231 207.5,224 216.5,224" fill="currentColor"/>
<line x1="212" y1="244" x2="212" y2="257" stroke="currentColor" stroke-width="1.6"/>
<polygon points="212,258 207.5,251 216.5,251" fill="currentColor"/>
<text x="212" y="282" text-anchor="middle" font-size="16" font-family="Mitr, Tahoma, sans-serif" font-size="14">ไม่มีขอบ</text>
<text x="276" y="63" text-anchor="middle" font-size="16">R</text>
<text x="276" y="93" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="276" y="120" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="276" y="147" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="276" y="174" text-anchor="middle" font-size="16">0</text>
<text x="276" y="201" text-anchor="middle" font-size="16">0</text>
<text x="276" y="228" text-anchor="middle" font-size="16">1</text>
<text x="276" y="255" text-anchor="middle" font-size="16">1</text>
<text x="276" y="282" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="322" y="63" text-anchor="middle" font-size="16">S</text>
<text x="322" y="93" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="322" y="120" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="322" y="147" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="322" y="174" text-anchor="middle" font-size="16">0</text>
<text x="322" y="201" text-anchor="middle" font-size="16">1</text>
<text x="322" y="228" text-anchor="middle" font-size="16">0</text>
<text x="322" y="255" text-anchor="middle" font-size="16">1</text>
<text x="322" y="282" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="368.8" y="63" text-anchor="middle" font-size="16">Q</text>
<text x="368.8" y="93" text-anchor="middle" font-size="16">1</text>
<text x="368.8" y="120" text-anchor="middle" font-size="16">1</text>
<text x="368.8" y="147" text-anchor="middle" font-size="16">0</text>
<text x="368.8" y="174" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<text x="368.8" y="201" text-anchor="middle" font-size="16">1</text>
<text x="368.8" y="228" text-anchor="middle" font-size="16">0</text>
<text x="368.8" y="255" text-anchor="middle" font-size="16">?</text>
<text x="368.8" y="282" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<text x="416.2" y="63" text-anchor="middle" font-size="16">Q</text>
<line x1="410.5" y1="49" x2="421.5" y2="49" stroke="currentColor" stroke-width="1.3"/>
<text x="416.2" y="93" text-anchor="middle" font-size="16">1</text>
<text x="416.2" y="120" text-anchor="middle" font-size="16">0</text>
<text x="416.2" y="147" text-anchor="middle" font-size="16">1</text>
<text x="416.2" y="174" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<line x1="406.5" y1="160" x2="417.5" y2="160" stroke="currentColor" stroke-width="1.3"/>
<text x="416.2" y="201" text-anchor="middle" font-size="16">0</text>
<text x="416.2" y="228" text-anchor="middle" font-size="16">1</text>
<text x="416.2" y="255" text-anchor="middle" font-size="16">?</text>
<text x="416.2" y="282" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<line x1="406.5" y1="268" x2="417.5" y2="268" stroke="currentColor" stroke-width="1.3"/>
</svg>
</div>

PS และ CLR ทำงานเมื่อเป็น $0$ และทำงานทันที ไม่ต้องรอสัญญาณนาฬิกา

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="344" viewBox="0 0 726 344" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="338"/>
<line x1="254" y1="26" x2="254" y2="338"/>
<line x1="382" y1="26" x2="382" y2="338"/>
<line x1="510" y1="26" x2="510" y2="338"/>
<line x1="638" y1="26" x2="638" y2="338"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,44 L430,44 L430,71.2 L478,71.2 L478,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,104 L606,104 L606,131.2 L670,131.2 L670,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<path d="M62,164 L126,164 L126,191.2 L190,191.2 L190,164 L254,164 L254,191.2 L318,191.2 L318,164 L382,164 L382,191.2 L446,191.2 L446,164 L510,164 L510,191.2 L574,191.2 L574,164 L638,164 L638,191.2 L702,191.2 L702,164 L702,164" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">R</text>
<path d="M62,251.2 L350,251.2 L350,224 L414,224 L414,251.2 L574,251.2 L574,224 L702,224" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">S</text>
<path d="M62,284 L174,284 L174,311.2 L414,311.2 L414,284 L574,284 L574,311.2 L702,311.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  Clock RS ฟลิป-ฟลอป ที่มี PS และ CLR ทำงานที่ขอบขาลงของสัญญาณนาฬิกา เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=rs; trig=fall; pins=ps; set=b; give=wave}

PS และ CLR ทำงานเมื่อเป็น $0$ และทำงานทันที ไม่ต้องรอสัญญาณนาฬิกา

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="344" viewBox="0 0 726 344" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="338"/>
<line x1="254" y1="26" x2="254" y2="338"/>
<line x1="382" y1="26" x2="382" y2="338"/>
<line x1="510" y1="26" x2="510" y2="338"/>
<line x1="638" y1="26" x2="638" y2="338"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,44 L174,44 L174,71.2 L222,71.2 L222,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,104 L478,104 L478,131.2 L542,131.2 L542,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<path d="M62,164 L126,164 L126,191.2 L190,191.2 L190,164 L254,164 L254,191.2 L318,191.2 L318,164 L382,164 L382,191.2 L446,191.2 L446,164 L510,164 L510,191.2 L574,191.2 L574,164 L638,164 L638,191.2 L702,191.2 L702,164 L702,164" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">R</text>
<path d="M62,224 L190,224 L190,251.2 L462,251.2 L462,224 L558,224 L558,251.2 L702,251.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">S</text>
<path d="M62,311.2 L190,311.2 L190,284 L286,284 L286,311.2 L558,311.2 L558,284 L702,284" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  Clock RS ฟลิป-ฟลอป ที่มี PS และ CLR ทำงานที่ขอบขาลงของสัญญาณนาฬิกา เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=rs; trig=fall; pins=ps; set=b; give=table}

**ตารางการทำงาน** ($x$ คือค่าอะไรก็ได้, $Q_0$ คือค่า $Q$ ก่อนมีสัญญาณกระตุ้น)

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="456" height="301" viewBox="0 0 456 301" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<text x="228" y="26" text-anchor="middle" font-family="Mitr, Tahoma, sans-serif" font-size="21" font-weight="500" fill="#e8743b">ตารางการทำงาน</text>
<g stroke="currentColor" stroke-width="1.4" fill="none">
<rect x="16" y="42" width="424" height="251"/>
<line x1="16" y1="73" x2="440" y2="73"/>
<line x1="345" y1="42" x2="345" y2="293"/>
<line x1="16" y1="154" x2="440" y2="154" stroke-width="0.9" stroke-opacity="0.55"/>
<line x1="16" y1="262" x2="440" y2="262" stroke-width="0.9" stroke-opacity="0.55"/>
</g>
<text x="57" y="63" text-anchor="middle" font-size="16">PRESET</text>
<text x="57" y="93" text-anchor="middle" font-size="16">0</text>
<text x="57" y="120" text-anchor="middle" font-size="16">0</text>
<text x="57" y="147" text-anchor="middle" font-size="16">1</text>
<text x="57" y="174" text-anchor="middle" font-size="16">1</text>
<text x="57" y="201" text-anchor="middle" font-size="16">1</text>
<text x="57" y="228" text-anchor="middle" font-size="16">1</text>
<text x="57" y="255" text-anchor="middle" font-size="16">1</text>
<text x="57" y="282" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="63" text-anchor="middle" font-size="16">CLEAR</text>
<text x="134.5" y="93" text-anchor="middle" font-size="16">0</text>
<text x="134.5" y="120" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="147" text-anchor="middle" font-size="16">0</text>
<text x="134.5" y="174" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="201" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="228" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="255" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="282" text-anchor="middle" font-size="16">1</text>
<text x="212" y="63" text-anchor="middle" font-size="16">CLOCK</text>
<text x="212" y="93" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="212" y="120" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="212" y="147" text-anchor="middle" font-size="16" font-style="italic">x</text>
<line x1="212" y1="163" x2="212" y2="176" stroke="currentColor" stroke-width="1.6"/>
<polygon points="212,177 207.5,170 216.5,170" fill="currentColor"/>
<line x1="212" y1="190" x2="212" y2="203" stroke="currentColor" stroke-width="1.6"/>
<polygon points="212,204 207.5,197 216.5,197" fill="currentColor"/>
<line x1="212" y1="217" x2="212" y2="230" stroke="currentColor" stroke-width="1.6"/>
<polygon points="212,231 207.5,224 216.5,224" fill="currentColor"/>
<line x1="212" y1="244" x2="212" y2="257" stroke="currentColor" stroke-width="1.6"/>
<polygon points="212,258 207.5,251 216.5,251" fill="currentColor"/>
<text x="212" y="282" text-anchor="middle" font-size="16" font-family="Mitr, Tahoma, sans-serif" font-size="14">ไม่มีขอบ</text>
<text x="276" y="63" text-anchor="middle" font-size="16">R</text>
<text x="276" y="93" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="276" y="120" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="276" y="147" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="276" y="174" text-anchor="middle" font-size="16">0</text>
<text x="276" y="201" text-anchor="middle" font-size="16">0</text>
<text x="276" y="228" text-anchor="middle" font-size="16">1</text>
<text x="276" y="255" text-anchor="middle" font-size="16">1</text>
<text x="276" y="282" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="322" y="63" text-anchor="middle" font-size="16">S</text>
<text x="322" y="93" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="322" y="120" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="322" y="147" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="322" y="174" text-anchor="middle" font-size="16">0</text>
<text x="322" y="201" text-anchor="middle" font-size="16">1</text>
<text x="322" y="228" text-anchor="middle" font-size="16">0</text>
<text x="322" y="255" text-anchor="middle" font-size="16">1</text>
<text x="322" y="282" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="368.8" y="63" text-anchor="middle" font-size="16">Q</text>
<text x="368.8" y="93" text-anchor="middle" font-size="16">1</text>
<text x="368.8" y="120" text-anchor="middle" font-size="16">1</text>
<text x="368.8" y="147" text-anchor="middle" font-size="16">0</text>
<text x="368.8" y="174" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<text x="368.8" y="201" text-anchor="middle" font-size="16">1</text>
<text x="368.8" y="228" text-anchor="middle" font-size="16">0</text>
<text x="368.8" y="255" text-anchor="middle" font-size="16">?</text>
<text x="368.8" y="282" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<text x="416.2" y="63" text-anchor="middle" font-size="16">Q</text>
<line x1="410.5" y1="49" x2="421.5" y2="49" stroke="currentColor" stroke-width="1.3"/>
<text x="416.2" y="93" text-anchor="middle" font-size="16">1</text>
<text x="416.2" y="120" text-anchor="middle" font-size="16">0</text>
<text x="416.2" y="147" text-anchor="middle" font-size="16">1</text>
<text x="416.2" y="174" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<line x1="406.5" y1="160" x2="417.5" y2="160" stroke="currentColor" stroke-width="1.3"/>
<text x="416.2" y="201" text-anchor="middle" font-size="16">0</text>
<text x="416.2" y="228" text-anchor="middle" font-size="16">1</text>
<text x="416.2" y="255" text-anchor="middle" font-size="16">?</text>
<text x="416.2" y="282" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<line x1="406.5" y1="268" x2="417.5" y2="268" stroke="currentColor" stroke-width="1.3"/>
</svg>
</div>

PS และ CLR ทำงานเมื่อเป็น $0$ และทำงานทันที ไม่ต้องรอสัญญาณนาฬิกา

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="344" viewBox="0 0 726 344" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="338"/>
<line x1="254" y1="26" x2="254" y2="338"/>
<line x1="382" y1="26" x2="382" y2="338"/>
<line x1="510" y1="26" x2="510" y2="338"/>
<line x1="638" y1="26" x2="638" y2="338"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,44 L174,44 L174,71.2 L222,71.2 L222,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,104 L478,104 L478,131.2 L542,131.2 L542,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<path d="M62,164 L126,164 L126,191.2 L190,191.2 L190,164 L254,164 L254,191.2 L318,191.2 L318,164 L382,164 L382,191.2 L446,191.2 L446,164 L510,164 L510,191.2 L574,191.2 L574,164 L638,164 L638,191.2 L702,191.2 L702,164 L702,164" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">R</text>
<path d="M62,224 L190,224 L190,251.2 L462,251.2 L462,224 L558,224 L558,251.2 L702,251.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">S</text>
<path d="M62,311.2 L190,311.2 L190,284 L286,284 L286,311.2 L558,311.2 L558,284 L702,284" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  Clock RS ฟลิป-ฟลอป ที่มี PS และ CLR ทำงานที่ขอบขาลงของสัญญาณนาฬิกา เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=rs; trig=fall; pins=ps; set=c; give=wave}

PS และ CLR ทำงานเมื่อเป็น $0$ และทำงานทันที ไม่ต้องรอสัญญาณนาฬิกา

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="344" viewBox="0 0 726 344" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="338"/>
<line x1="254" y1="26" x2="254" y2="338"/>
<line x1="382" y1="26" x2="382" y2="338"/>
<line x1="510" y1="26" x2="510" y2="338"/>
<line x1="638" y1="26" x2="638" y2="338"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,44 L606,44 L606,71.2 L670,71.2 L670,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,104 L462,104 L462,131.2 L526,131.2 L526,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<path d="M62,164 L126,164 L126,191.2 L190,191.2 L190,164 L254,164 L254,191.2 L318,191.2 L318,164 L382,164 L382,191.2 L446,191.2 L446,164 L510,164 L510,191.2 L574,191.2 L574,164 L638,164 L638,191.2 L702,191.2 L702,164 L702,164" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">R</text>
<path d="M62,251.2 L222,251.2 L222,224 L302,224 L302,251.2 L590,251.2 L590,224 L702,224" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">S</text>
<path d="M62,284 L222,284 L222,311.2 L302,311.2 L302,284 L398,284 L398,311.2 L702,311.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  Clock RS ฟลิป-ฟลอป ที่มี PS และ CLR ทำงานที่ขอบขาลงของสัญญาณนาฬิกา เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=rs; trig=fall; pins=ps; set=c; give=table}

**ตารางการทำงาน** ($x$ คือค่าอะไรก็ได้, $Q_0$ คือค่า $Q$ ก่อนมีสัญญาณกระตุ้น)

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="456" height="301" viewBox="0 0 456 301" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<text x="228" y="26" text-anchor="middle" font-family="Mitr, Tahoma, sans-serif" font-size="21" font-weight="500" fill="#e8743b">ตารางการทำงาน</text>
<g stroke="currentColor" stroke-width="1.4" fill="none">
<rect x="16" y="42" width="424" height="251"/>
<line x1="16" y1="73" x2="440" y2="73"/>
<line x1="345" y1="42" x2="345" y2="293"/>
<line x1="16" y1="154" x2="440" y2="154" stroke-width="0.9" stroke-opacity="0.55"/>
<line x1="16" y1="262" x2="440" y2="262" stroke-width="0.9" stroke-opacity="0.55"/>
</g>
<text x="57" y="63" text-anchor="middle" font-size="16">PRESET</text>
<text x="57" y="93" text-anchor="middle" font-size="16">0</text>
<text x="57" y="120" text-anchor="middle" font-size="16">0</text>
<text x="57" y="147" text-anchor="middle" font-size="16">1</text>
<text x="57" y="174" text-anchor="middle" font-size="16">1</text>
<text x="57" y="201" text-anchor="middle" font-size="16">1</text>
<text x="57" y="228" text-anchor="middle" font-size="16">1</text>
<text x="57" y="255" text-anchor="middle" font-size="16">1</text>
<text x="57" y="282" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="63" text-anchor="middle" font-size="16">CLEAR</text>
<text x="134.5" y="93" text-anchor="middle" font-size="16">0</text>
<text x="134.5" y="120" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="147" text-anchor="middle" font-size="16">0</text>
<text x="134.5" y="174" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="201" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="228" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="255" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="282" text-anchor="middle" font-size="16">1</text>
<text x="212" y="63" text-anchor="middle" font-size="16">CLOCK</text>
<text x="212" y="93" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="212" y="120" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="212" y="147" text-anchor="middle" font-size="16" font-style="italic">x</text>
<line x1="212" y1="163" x2="212" y2="176" stroke="currentColor" stroke-width="1.6"/>
<polygon points="212,177 207.5,170 216.5,170" fill="currentColor"/>
<line x1="212" y1="190" x2="212" y2="203" stroke="currentColor" stroke-width="1.6"/>
<polygon points="212,204 207.5,197 216.5,197" fill="currentColor"/>
<line x1="212" y1="217" x2="212" y2="230" stroke="currentColor" stroke-width="1.6"/>
<polygon points="212,231 207.5,224 216.5,224" fill="currentColor"/>
<line x1="212" y1="244" x2="212" y2="257" stroke="currentColor" stroke-width="1.6"/>
<polygon points="212,258 207.5,251 216.5,251" fill="currentColor"/>
<text x="212" y="282" text-anchor="middle" font-size="16" font-family="Mitr, Tahoma, sans-serif" font-size="14">ไม่มีขอบ</text>
<text x="276" y="63" text-anchor="middle" font-size="16">R</text>
<text x="276" y="93" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="276" y="120" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="276" y="147" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="276" y="174" text-anchor="middle" font-size="16">0</text>
<text x="276" y="201" text-anchor="middle" font-size="16">0</text>
<text x="276" y="228" text-anchor="middle" font-size="16">1</text>
<text x="276" y="255" text-anchor="middle" font-size="16">1</text>
<text x="276" y="282" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="322" y="63" text-anchor="middle" font-size="16">S</text>
<text x="322" y="93" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="322" y="120" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="322" y="147" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="322" y="174" text-anchor="middle" font-size="16">0</text>
<text x="322" y="201" text-anchor="middle" font-size="16">1</text>
<text x="322" y="228" text-anchor="middle" font-size="16">0</text>
<text x="322" y="255" text-anchor="middle" font-size="16">1</text>
<text x="322" y="282" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="368.8" y="63" text-anchor="middle" font-size="16">Q</text>
<text x="368.8" y="93" text-anchor="middle" font-size="16">1</text>
<text x="368.8" y="120" text-anchor="middle" font-size="16">1</text>
<text x="368.8" y="147" text-anchor="middle" font-size="16">0</text>
<text x="368.8" y="174" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<text x="368.8" y="201" text-anchor="middle" font-size="16">1</text>
<text x="368.8" y="228" text-anchor="middle" font-size="16">0</text>
<text x="368.8" y="255" text-anchor="middle" font-size="16">?</text>
<text x="368.8" y="282" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<text x="416.2" y="63" text-anchor="middle" font-size="16">Q</text>
<line x1="410.5" y1="49" x2="421.5" y2="49" stroke="currentColor" stroke-width="1.3"/>
<text x="416.2" y="93" text-anchor="middle" font-size="16">1</text>
<text x="416.2" y="120" text-anchor="middle" font-size="16">0</text>
<text x="416.2" y="147" text-anchor="middle" font-size="16">1</text>
<text x="416.2" y="174" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<line x1="406.5" y1="160" x2="417.5" y2="160" stroke="currentColor" stroke-width="1.3"/>
<text x="416.2" y="201" text-anchor="middle" font-size="16">0</text>
<text x="416.2" y="228" text-anchor="middle" font-size="16">1</text>
<text x="416.2" y="255" text-anchor="middle" font-size="16">?</text>
<text x="416.2" y="282" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<line x1="406.5" y1="268" x2="417.5" y2="268" stroke="currentColor" stroke-width="1.3"/>
</svg>
</div>

PS และ CLR ทำงานเมื่อเป็น $0$ และทำงานทันที ไม่ต้องรอสัญญาณนาฬิกา

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="344" viewBox="0 0 726 344" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="338"/>
<line x1="254" y1="26" x2="254" y2="338"/>
<line x1="382" y1="26" x2="382" y2="338"/>
<line x1="510" y1="26" x2="510" y2="338"/>
<line x1="638" y1="26" x2="638" y2="338"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,44 L606,44 L606,71.2 L670,71.2 L670,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,104 L462,104 L462,131.2 L526,131.2 L526,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<path d="M62,164 L126,164 L126,191.2 L190,191.2 L190,164 L254,164 L254,191.2 L318,191.2 L318,164 L382,164 L382,191.2 L446,191.2 L446,164 L510,164 L510,191.2 L574,191.2 L574,164 L638,164 L638,191.2 L702,191.2 L702,164 L702,164" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">R</text>
<path d="M62,251.2 L222,251.2 L222,224 L302,224 L302,251.2 L590,251.2 L590,224 L702,224" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">S</text>
<path d="M62,284 L222,284 L222,311.2 L302,311.2 L302,284 L398,284 L398,311.2 L702,311.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  Clock RS ฟลิป-ฟลอป ทำงานที่พัลส์บวก (ขณะ CLK เป็น 1) เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=rs; trig=hi; pins=none; set=a; give=wave}

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="224" viewBox="0 0 726 224" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="218"/>
<line x1="190" y1="26" x2="190" y2="218"/>
<line x1="254" y1="26" x2="254" y2="218"/>
<line x1="318" y1="26" x2="318" y2="218"/>
<line x1="382" y1="26" x2="382" y2="218"/>
<line x1="446" y1="26" x2="446" y2="218"/>
<line x1="510" y1="26" x2="510" y2="218"/>
<line x1="574" y1="26" x2="574" y2="218"/>
<line x1="638" y1="26" x2="638" y2="218"/>
<line x1="702" y1="26" x2="702" y2="218"/>
</g>
<text x="50" y="63.6" text-anchor="end">CLK</text>
<path d="M62,71.2 L126,71.2 L126,44 L190,44 L190,71.2 L254,71.2 L254,44 L318,44 L318,71.2 L382,71.2 L382,44 L446,44 L446,71.2 L510,71.2 L510,44 L574,44 L574,71.2 L638,71.2 L638,44 L702,44 L702,71.2 L702,71.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">R</text>
<path d="M62,131.2 L222,131.2 L222,104 L270,104 L270,131.2 L398,131.2 L398,104 L478,104 L478,131.2 L654,131.2 L654,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">S</text>
<path d="M62,191.2 L94,191.2 L94,164 L158,164 L158,191.2 L286,191.2 L286,164 L334,164 L334,191.2 L526,191.2 L526,164 L606,164 L606,191.2 L702,191.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  Clock RS ฟลิป-ฟลอป ทำงานที่พัลส์บวก (ขณะ CLK เป็น 1) เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=rs; trig=hi; pins=none; set=a; give=table}

**ตารางการทำงาน** ($x$ คือค่าอะไรก็ได้, $Q_0$ คือค่า $Q$ ก่อนมีสัญญาณกระตุ้น, ฟลิป-ฟลอปทำงานตลอดช่วงที่ CLK เป็น 1)

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="292" height="220" viewBox="0 0 292 220" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<text x="146" y="26" text-anchor="middle" font-family="Mitr, Tahoma, sans-serif" font-size="21" font-weight="500" fill="#e8743b">ตารางการทำงาน</text>
<g stroke="currentColor" stroke-width="1.4" fill="none">
<rect x="16" y="42" width="260" height="170"/>
<line x1="16" y1="73" x2="276" y2="73"/>
<line x1="181" y1="42" x2="181" y2="212"/>
<line x1="16" y1="181" x2="276" y2="181" stroke-width="0.9" stroke-opacity="0.55"/>
</g>
<text x="52.5" y="63" text-anchor="middle" font-size="16">CLOCK</text>
<text x="52.5" y="93" text-anchor="middle" font-size="16">1</text>
<text x="52.5" y="120" text-anchor="middle" font-size="16">1</text>
<text x="52.5" y="147" text-anchor="middle" font-size="16">1</text>
<text x="52.5" y="174" text-anchor="middle" font-size="16">1</text>
<text x="52.5" y="201" text-anchor="middle" font-size="16">0</text>
<text x="112" y="63" text-anchor="middle" font-size="16">R</text>
<text x="112" y="93" text-anchor="middle" font-size="16">0</text>
<text x="112" y="120" text-anchor="middle" font-size="16">0</text>
<text x="112" y="147" text-anchor="middle" font-size="16">1</text>
<text x="112" y="174" text-anchor="middle" font-size="16">1</text>
<text x="112" y="201" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="158" y="63" text-anchor="middle" font-size="16">S</text>
<text x="158" y="93" text-anchor="middle" font-size="16">0</text>
<text x="158" y="120" text-anchor="middle" font-size="16">1</text>
<text x="158" y="147" text-anchor="middle" font-size="16">0</text>
<text x="158" y="174" text-anchor="middle" font-size="16">1</text>
<text x="158" y="201" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="204.8" y="63" text-anchor="middle" font-size="16">Q</text>
<text x="204.8" y="93" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<text x="204.8" y="120" text-anchor="middle" font-size="16">1</text>
<text x="204.8" y="147" text-anchor="middle" font-size="16">0</text>
<text x="204.8" y="174" text-anchor="middle" font-size="16">?</text>
<text x="204.8" y="201" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<text x="252.2" y="63" text-anchor="middle" font-size="16">Q</text>
<line x1="246.5" y1="49" x2="257.5" y2="49" stroke="currentColor" stroke-width="1.3"/>
<text x="252.2" y="93" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<line x1="242.5" y1="79" x2="253.5" y2="79" stroke="currentColor" stroke-width="1.3"/>
<text x="252.2" y="120" text-anchor="middle" font-size="16">0</text>
<text x="252.2" y="147" text-anchor="middle" font-size="16">1</text>
<text x="252.2" y="174" text-anchor="middle" font-size="16">?</text>
<text x="252.2" y="201" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<line x1="242.5" y1="187" x2="253.5" y2="187" stroke="currentColor" stroke-width="1.3"/>
</svg>
</div>

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="224" viewBox="0 0 726 224" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="218"/>
<line x1="190" y1="26" x2="190" y2="218"/>
<line x1="254" y1="26" x2="254" y2="218"/>
<line x1="318" y1="26" x2="318" y2="218"/>
<line x1="382" y1="26" x2="382" y2="218"/>
<line x1="446" y1="26" x2="446" y2="218"/>
<line x1="510" y1="26" x2="510" y2="218"/>
<line x1="574" y1="26" x2="574" y2="218"/>
<line x1="638" y1="26" x2="638" y2="218"/>
<line x1="702" y1="26" x2="702" y2="218"/>
</g>
<text x="50" y="63.6" text-anchor="end">CLK</text>
<path d="M62,71.2 L126,71.2 L126,44 L190,44 L190,71.2 L254,71.2 L254,44 L318,44 L318,71.2 L382,71.2 L382,44 L446,44 L446,71.2 L510,71.2 L510,44 L574,44 L574,71.2 L638,71.2 L638,44 L702,44 L702,71.2 L702,71.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">R</text>
<path d="M62,131.2 L222,131.2 L222,104 L270,104 L270,131.2 L398,131.2 L398,104 L478,104 L478,131.2 L654,131.2 L654,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">S</text>
<path d="M62,191.2 L94,191.2 L94,164 L158,164 L158,191.2 L286,191.2 L286,164 L334,164 L334,191.2 L526,191.2 L526,164 L606,164 L606,191.2 L702,191.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  Clock RS ฟลิป-ฟลอป ทำงานที่พัลส์บวก (ขณะ CLK เป็น 1) เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=rs; trig=hi; pins=none; set=b; give=wave}

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="224" viewBox="0 0 726 224" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="218"/>
<line x1="190" y1="26" x2="190" y2="218"/>
<line x1="254" y1="26" x2="254" y2="218"/>
<line x1="318" y1="26" x2="318" y2="218"/>
<line x1="382" y1="26" x2="382" y2="218"/>
<line x1="446" y1="26" x2="446" y2="218"/>
<line x1="510" y1="26" x2="510" y2="218"/>
<line x1="574" y1="26" x2="574" y2="218"/>
<line x1="638" y1="26" x2="638" y2="218"/>
<line x1="702" y1="26" x2="702" y2="218"/>
</g>
<text x="50" y="63.6" text-anchor="end">CLK</text>
<path d="M62,71.2 L126,71.2 L126,44 L190,44 L190,71.2 L254,71.2 L254,44 L318,44 L318,71.2 L382,71.2 L382,44 L446,44 L446,71.2 L510,71.2 L510,44 L574,44 L574,71.2 L638,71.2 L638,44 L702,44 L702,71.2 L702,71.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">R</text>
<path d="M62,131.2 L158,131.2 L158,104 L222,104 L222,131.2 L398,131.2 L398,104 L430,104 L430,131.2 L558,131.2 L558,104 L590,104 L590,131.2 L702,131.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">S</text>
<path d="M62,164 L142,164 L142,191.2 L270,191.2 L270,164 L302,164 L302,191.2 L462,191.2 L462,164 L542,164 L542,191.2 L702,191.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  Clock RS ฟลิป-ฟลอป ทำงานที่พัลส์บวก (ขณะ CLK เป็น 1) เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=rs; trig=hi; pins=none; set=b; give=table}

**ตารางการทำงาน** ($x$ คือค่าอะไรก็ได้, $Q_0$ คือค่า $Q$ ก่อนมีสัญญาณกระตุ้น, ฟลิป-ฟลอปทำงานตลอดช่วงที่ CLK เป็น 1)

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="292" height="220" viewBox="0 0 292 220" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<text x="146" y="26" text-anchor="middle" font-family="Mitr, Tahoma, sans-serif" font-size="21" font-weight="500" fill="#e8743b">ตารางการทำงาน</text>
<g stroke="currentColor" stroke-width="1.4" fill="none">
<rect x="16" y="42" width="260" height="170"/>
<line x1="16" y1="73" x2="276" y2="73"/>
<line x1="181" y1="42" x2="181" y2="212"/>
<line x1="16" y1="181" x2="276" y2="181" stroke-width="0.9" stroke-opacity="0.55"/>
</g>
<text x="52.5" y="63" text-anchor="middle" font-size="16">CLOCK</text>
<text x="52.5" y="93" text-anchor="middle" font-size="16">1</text>
<text x="52.5" y="120" text-anchor="middle" font-size="16">1</text>
<text x="52.5" y="147" text-anchor="middle" font-size="16">1</text>
<text x="52.5" y="174" text-anchor="middle" font-size="16">1</text>
<text x="52.5" y="201" text-anchor="middle" font-size="16">0</text>
<text x="112" y="63" text-anchor="middle" font-size="16">R</text>
<text x="112" y="93" text-anchor="middle" font-size="16">0</text>
<text x="112" y="120" text-anchor="middle" font-size="16">0</text>
<text x="112" y="147" text-anchor="middle" font-size="16">1</text>
<text x="112" y="174" text-anchor="middle" font-size="16">1</text>
<text x="112" y="201" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="158" y="63" text-anchor="middle" font-size="16">S</text>
<text x="158" y="93" text-anchor="middle" font-size="16">0</text>
<text x="158" y="120" text-anchor="middle" font-size="16">1</text>
<text x="158" y="147" text-anchor="middle" font-size="16">0</text>
<text x="158" y="174" text-anchor="middle" font-size="16">1</text>
<text x="158" y="201" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="204.8" y="63" text-anchor="middle" font-size="16">Q</text>
<text x="204.8" y="93" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<text x="204.8" y="120" text-anchor="middle" font-size="16">1</text>
<text x="204.8" y="147" text-anchor="middle" font-size="16">0</text>
<text x="204.8" y="174" text-anchor="middle" font-size="16">?</text>
<text x="204.8" y="201" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<text x="252.2" y="63" text-anchor="middle" font-size="16">Q</text>
<line x1="246.5" y1="49" x2="257.5" y2="49" stroke="currentColor" stroke-width="1.3"/>
<text x="252.2" y="93" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<line x1="242.5" y1="79" x2="253.5" y2="79" stroke="currentColor" stroke-width="1.3"/>
<text x="252.2" y="120" text-anchor="middle" font-size="16">0</text>
<text x="252.2" y="147" text-anchor="middle" font-size="16">1</text>
<text x="252.2" y="174" text-anchor="middle" font-size="16">?</text>
<text x="252.2" y="201" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<line x1="242.5" y1="187" x2="253.5" y2="187" stroke="currentColor" stroke-width="1.3"/>
</svg>
</div>

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="224" viewBox="0 0 726 224" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="218"/>
<line x1="190" y1="26" x2="190" y2="218"/>
<line x1="254" y1="26" x2="254" y2="218"/>
<line x1="318" y1="26" x2="318" y2="218"/>
<line x1="382" y1="26" x2="382" y2="218"/>
<line x1="446" y1="26" x2="446" y2="218"/>
<line x1="510" y1="26" x2="510" y2="218"/>
<line x1="574" y1="26" x2="574" y2="218"/>
<line x1="638" y1="26" x2="638" y2="218"/>
<line x1="702" y1="26" x2="702" y2="218"/>
</g>
<text x="50" y="63.6" text-anchor="end">CLK</text>
<path d="M62,71.2 L126,71.2 L126,44 L190,44 L190,71.2 L254,71.2 L254,44 L318,44 L318,71.2 L382,71.2 L382,44 L446,44 L446,71.2 L510,71.2 L510,44 L574,44 L574,71.2 L638,71.2 L638,44 L702,44 L702,71.2 L702,71.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">R</text>
<path d="M62,131.2 L158,131.2 L158,104 L222,104 L222,131.2 L398,131.2 L398,104 L430,104 L430,131.2 L558,131.2 L558,104 L590,104 L590,131.2 L702,131.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">S</text>
<path d="M62,164 L142,164 L142,191.2 L270,191.2 L270,164 L302,164 L302,191.2 L462,191.2 L462,164 L542,164 L542,191.2 L702,191.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  Clock RS ฟลิป-ฟลอป ทำงานที่พัลส์บวก (ขณะ CLK เป็น 1) เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=rs; trig=hi; pins=none; set=c; give=wave}

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="224" viewBox="0 0 726 224" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="218"/>
<line x1="190" y1="26" x2="190" y2="218"/>
<line x1="254" y1="26" x2="254" y2="218"/>
<line x1="318" y1="26" x2="318" y2="218"/>
<line x1="382" y1="26" x2="382" y2="218"/>
<line x1="446" y1="26" x2="446" y2="218"/>
<line x1="510" y1="26" x2="510" y2="218"/>
<line x1="574" y1="26" x2="574" y2="218"/>
<line x1="638" y1="26" x2="638" y2="218"/>
<line x1="702" y1="26" x2="702" y2="218"/>
</g>
<text x="50" y="63.6" text-anchor="end">CLK</text>
<path d="M62,71.2 L126,71.2 L126,44 L190,44 L190,71.2 L254,71.2 L254,44 L318,44 L318,71.2 L382,71.2 L382,44 L446,44 L446,71.2 L510,71.2 L510,44 L574,44 L574,71.2 L638,71.2 L638,44 L702,44 L702,71.2 L702,71.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">R</text>
<path d="M62,131.2 L260.4,131.2 L260.4,104 L292.4,104 L292.4,131.2 L334,131.2 L334,104 L366,104 L366,131.2 L644.4,131.2 L644.4,104 L676.4,104 L676.4,131.2 L702,131.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">S</text>
<path d="M62,191.2 L132.4,191.2 L132.4,164 L164.4,164 L164.4,191.2 L388.4,191.2 L388.4,164 L420.4,164 L420.4,191.2 L516.4,191.2 L516.4,164 L548.4,164 L548.4,191.2 L702,191.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  Clock RS ฟลิป-ฟลอป ทำงานที่พัลส์บวก (ขณะ CLK เป็น 1) เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=rs; trig=hi; pins=none; set=c; give=table}

**ตารางการทำงาน** ($x$ คือค่าอะไรก็ได้, $Q_0$ คือค่า $Q$ ก่อนมีสัญญาณกระตุ้น, ฟลิป-ฟลอปทำงานตลอดช่วงที่ CLK เป็น 1)

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="292" height="220" viewBox="0 0 292 220" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<text x="146" y="26" text-anchor="middle" font-family="Mitr, Tahoma, sans-serif" font-size="21" font-weight="500" fill="#e8743b">ตารางการทำงาน</text>
<g stroke="currentColor" stroke-width="1.4" fill="none">
<rect x="16" y="42" width="260" height="170"/>
<line x1="16" y1="73" x2="276" y2="73"/>
<line x1="181" y1="42" x2="181" y2="212"/>
<line x1="16" y1="181" x2="276" y2="181" stroke-width="0.9" stroke-opacity="0.55"/>
</g>
<text x="52.5" y="63" text-anchor="middle" font-size="16">CLOCK</text>
<text x="52.5" y="93" text-anchor="middle" font-size="16">1</text>
<text x="52.5" y="120" text-anchor="middle" font-size="16">1</text>
<text x="52.5" y="147" text-anchor="middle" font-size="16">1</text>
<text x="52.5" y="174" text-anchor="middle" font-size="16">1</text>
<text x="52.5" y="201" text-anchor="middle" font-size="16">0</text>
<text x="112" y="63" text-anchor="middle" font-size="16">R</text>
<text x="112" y="93" text-anchor="middle" font-size="16">0</text>
<text x="112" y="120" text-anchor="middle" font-size="16">0</text>
<text x="112" y="147" text-anchor="middle" font-size="16">1</text>
<text x="112" y="174" text-anchor="middle" font-size="16">1</text>
<text x="112" y="201" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="158" y="63" text-anchor="middle" font-size="16">S</text>
<text x="158" y="93" text-anchor="middle" font-size="16">0</text>
<text x="158" y="120" text-anchor="middle" font-size="16">1</text>
<text x="158" y="147" text-anchor="middle" font-size="16">0</text>
<text x="158" y="174" text-anchor="middle" font-size="16">1</text>
<text x="158" y="201" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="204.8" y="63" text-anchor="middle" font-size="16">Q</text>
<text x="204.8" y="93" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<text x="204.8" y="120" text-anchor="middle" font-size="16">1</text>
<text x="204.8" y="147" text-anchor="middle" font-size="16">0</text>
<text x="204.8" y="174" text-anchor="middle" font-size="16">?</text>
<text x="204.8" y="201" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<text x="252.2" y="63" text-anchor="middle" font-size="16">Q</text>
<line x1="246.5" y1="49" x2="257.5" y2="49" stroke="currentColor" stroke-width="1.3"/>
<text x="252.2" y="93" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<line x1="242.5" y1="79" x2="253.5" y2="79" stroke="currentColor" stroke-width="1.3"/>
<text x="252.2" y="120" text-anchor="middle" font-size="16">0</text>
<text x="252.2" y="147" text-anchor="middle" font-size="16">1</text>
<text x="252.2" y="174" text-anchor="middle" font-size="16">?</text>
<text x="252.2" y="201" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<line x1="242.5" y1="187" x2="253.5" y2="187" stroke="currentColor" stroke-width="1.3"/>
</svg>
</div>

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="224" viewBox="0 0 726 224" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="218"/>
<line x1="190" y1="26" x2="190" y2="218"/>
<line x1="254" y1="26" x2="254" y2="218"/>
<line x1="318" y1="26" x2="318" y2="218"/>
<line x1="382" y1="26" x2="382" y2="218"/>
<line x1="446" y1="26" x2="446" y2="218"/>
<line x1="510" y1="26" x2="510" y2="218"/>
<line x1="574" y1="26" x2="574" y2="218"/>
<line x1="638" y1="26" x2="638" y2="218"/>
<line x1="702" y1="26" x2="702" y2="218"/>
</g>
<text x="50" y="63.6" text-anchor="end">CLK</text>
<path d="M62,71.2 L126,71.2 L126,44 L190,44 L190,71.2 L254,71.2 L254,44 L318,44 L318,71.2 L382,71.2 L382,44 L446,44 L446,71.2 L510,71.2 L510,44 L574,44 L574,71.2 L638,71.2 L638,44 L702,44 L702,71.2 L702,71.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">R</text>
<path d="M62,131.2 L260.4,131.2 L260.4,104 L292.4,104 L292.4,131.2 L334,131.2 L334,104 L366,104 L366,131.2 L644.4,131.2 L644.4,104 L676.4,104 L676.4,131.2 L702,131.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">S</text>
<path d="M62,191.2 L132.4,191.2 L132.4,164 L164.4,164 L164.4,191.2 L388.4,191.2 L388.4,164 L420.4,164 L420.4,191.2 L516.4,191.2 L516.4,164 L548.4,164 L548.4,191.2 L702,191.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  Clock RS ฟลิป-ฟลอป ที่มี PS และ CLR ทำงานที่พัลส์บวก (ขณะ CLK เป็น 1) เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=rs; trig=hi; pins=ps; set=a; give=wave}

PS และ CLR ทำงานเมื่อเป็น $0$ และทำงานทันที ไม่ต้องรอสัญญาณนาฬิกา

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="344" viewBox="0 0 726 344" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="338"/>
<line x1="190" y1="26" x2="190" y2="338"/>
<line x1="254" y1="26" x2="254" y2="338"/>
<line x1="318" y1="26" x2="318" y2="338"/>
<line x1="382" y1="26" x2="382" y2="338"/>
<line x1="446" y1="26" x2="446" y2="338"/>
<line x1="510" y1="26" x2="510" y2="338"/>
<line x1="574" y1="26" x2="574" y2="338"/>
<line x1="638" y1="26" x2="638" y2="338"/>
<line x1="702" y1="26" x2="702" y2="338"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,44 L350,44 L350,71.2 L414,71.2 L414,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,104 L182,104 L182,131.2 L230,131.2 L230,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<path d="M62,191.2 L126,191.2 L126,164 L190,164 L190,191.2 L254,191.2 L254,164 L318,164 L318,191.2 L382,191.2 L382,164 L446,164 L446,191.2 L510,191.2 L510,164 L574,164 L574,191.2 L638,191.2 L638,164 L702,164 L702,191.2 L702,191.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">R</text>
<path d="M62,251.2 L222,251.2 L222,224 L270,224 L270,251.2 L398,251.2 L398,224 L478,224 L478,251.2 L654,251.2 L654,224 L702,224" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">S</text>
<path d="M62,311.2 L94,311.2 L94,284 L158,284 L158,311.2 L286,311.2 L286,284 L334,284 L334,311.2 L526,311.2 L526,284 L606,284 L606,311.2 L702,311.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  Clock RS ฟลิป-ฟลอป ที่มี PS และ CLR ทำงานที่พัลส์บวก (ขณะ CLK เป็น 1) เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=rs; trig=hi; pins=ps; set=a; give=table}

**ตารางการทำงาน** ($x$ คือค่าอะไรก็ได้, $Q_0$ คือค่า $Q$ ก่อนมีสัญญาณกระตุ้น, ฟลิป-ฟลอปทำงานตลอดช่วงที่ CLK เป็น 1)

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="447" height="301" viewBox="0 0 447 301" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<text x="223.5" y="26" text-anchor="middle" font-family="Mitr, Tahoma, sans-serif" font-size="21" font-weight="500" fill="#e8743b">ตารางการทำงาน</text>
<g stroke="currentColor" stroke-width="1.4" fill="none">
<rect x="16" y="42" width="415" height="251"/>
<line x1="16" y1="73" x2="431" y2="73"/>
<line x1="336" y1="42" x2="336" y2="293"/>
<line x1="16" y1="154" x2="431" y2="154" stroke-width="0.9" stroke-opacity="0.55"/>
<line x1="16" y1="262" x2="431" y2="262" stroke-width="0.9" stroke-opacity="0.55"/>
</g>
<text x="57" y="63" text-anchor="middle" font-size="16">PRESET</text>
<text x="57" y="93" text-anchor="middle" font-size="16">0</text>
<text x="57" y="120" text-anchor="middle" font-size="16">0</text>
<text x="57" y="147" text-anchor="middle" font-size="16">1</text>
<text x="57" y="174" text-anchor="middle" font-size="16">1</text>
<text x="57" y="201" text-anchor="middle" font-size="16">1</text>
<text x="57" y="228" text-anchor="middle" font-size="16">1</text>
<text x="57" y="255" text-anchor="middle" font-size="16">1</text>
<text x="57" y="282" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="63" text-anchor="middle" font-size="16">CLEAR</text>
<text x="134.5" y="93" text-anchor="middle" font-size="16">0</text>
<text x="134.5" y="120" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="147" text-anchor="middle" font-size="16">0</text>
<text x="134.5" y="174" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="201" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="228" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="255" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="282" text-anchor="middle" font-size="16">1</text>
<text x="207.5" y="63" text-anchor="middle" font-size="16">CLOCK</text>
<text x="207.5" y="93" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="207.5" y="120" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="207.5" y="147" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="207.5" y="174" text-anchor="middle" font-size="16">1</text>
<text x="207.5" y="201" text-anchor="middle" font-size="16">1</text>
<text x="207.5" y="228" text-anchor="middle" font-size="16">1</text>
<text x="207.5" y="255" text-anchor="middle" font-size="16">1</text>
<text x="207.5" y="282" text-anchor="middle" font-size="16">0</text>
<text x="267" y="63" text-anchor="middle" font-size="16">R</text>
<text x="267" y="93" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="267" y="120" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="267" y="147" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="267" y="174" text-anchor="middle" font-size="16">0</text>
<text x="267" y="201" text-anchor="middle" font-size="16">0</text>
<text x="267" y="228" text-anchor="middle" font-size="16">1</text>
<text x="267" y="255" text-anchor="middle" font-size="16">1</text>
<text x="267" y="282" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="313" y="63" text-anchor="middle" font-size="16">S</text>
<text x="313" y="93" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="313" y="120" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="313" y="147" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="313" y="174" text-anchor="middle" font-size="16">0</text>
<text x="313" y="201" text-anchor="middle" font-size="16">1</text>
<text x="313" y="228" text-anchor="middle" font-size="16">0</text>
<text x="313" y="255" text-anchor="middle" font-size="16">1</text>
<text x="313" y="282" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="359.8" y="63" text-anchor="middle" font-size="16">Q</text>
<text x="359.8" y="93" text-anchor="middle" font-size="16">1</text>
<text x="359.8" y="120" text-anchor="middle" font-size="16">1</text>
<text x="359.8" y="147" text-anchor="middle" font-size="16">0</text>
<text x="359.8" y="174" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<text x="359.8" y="201" text-anchor="middle" font-size="16">1</text>
<text x="359.8" y="228" text-anchor="middle" font-size="16">0</text>
<text x="359.8" y="255" text-anchor="middle" font-size="16">?</text>
<text x="359.8" y="282" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<text x="407.2" y="63" text-anchor="middle" font-size="16">Q</text>
<line x1="401.5" y1="49" x2="412.5" y2="49" stroke="currentColor" stroke-width="1.3"/>
<text x="407.2" y="93" text-anchor="middle" font-size="16">1</text>
<text x="407.2" y="120" text-anchor="middle" font-size="16">0</text>
<text x="407.2" y="147" text-anchor="middle" font-size="16">1</text>
<text x="407.2" y="174" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<line x1="397.5" y1="160" x2="408.5" y2="160" stroke="currentColor" stroke-width="1.3"/>
<text x="407.2" y="201" text-anchor="middle" font-size="16">0</text>
<text x="407.2" y="228" text-anchor="middle" font-size="16">1</text>
<text x="407.2" y="255" text-anchor="middle" font-size="16">?</text>
<text x="407.2" y="282" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<line x1="397.5" y1="268" x2="408.5" y2="268" stroke="currentColor" stroke-width="1.3"/>
</svg>
</div>

PS และ CLR ทำงานเมื่อเป็น $0$ และทำงานทันที ไม่ต้องรอสัญญาณนาฬิกา

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="344" viewBox="0 0 726 344" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="338"/>
<line x1="190" y1="26" x2="190" y2="338"/>
<line x1="254" y1="26" x2="254" y2="338"/>
<line x1="318" y1="26" x2="318" y2="338"/>
<line x1="382" y1="26" x2="382" y2="338"/>
<line x1="446" y1="26" x2="446" y2="338"/>
<line x1="510" y1="26" x2="510" y2="338"/>
<line x1="574" y1="26" x2="574" y2="338"/>
<line x1="638" y1="26" x2="638" y2="338"/>
<line x1="702" y1="26" x2="702" y2="338"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,44 L350,44 L350,71.2 L414,71.2 L414,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,104 L182,104 L182,131.2 L230,131.2 L230,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<path d="M62,191.2 L126,191.2 L126,164 L190,164 L190,191.2 L254,191.2 L254,164 L318,164 L318,191.2 L382,191.2 L382,164 L446,164 L446,191.2 L510,191.2 L510,164 L574,164 L574,191.2 L638,191.2 L638,164 L702,164 L702,191.2 L702,191.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">R</text>
<path d="M62,251.2 L222,251.2 L222,224 L270,224 L270,251.2 L398,251.2 L398,224 L478,224 L478,251.2 L654,251.2 L654,224 L702,224" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">S</text>
<path d="M62,311.2 L94,311.2 L94,284 L158,284 L158,311.2 L286,311.2 L286,284 L334,284 L334,311.2 L526,311.2 L526,284 L606,284 L606,311.2 L702,311.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  Clock RS ฟลิป-ฟลอป ที่มี PS และ CLR ทำงานที่พัลส์บวก (ขณะ CLK เป็น 1) เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=rs; trig=hi; pins=ps; set=b; give=wave}

PS และ CLR ทำงานเมื่อเป็น $0$ และทำงานทันที ไม่ต้องรอสัญญาณนาฬิกา

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="344" viewBox="0 0 726 344" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="338"/>
<line x1="190" y1="26" x2="190" y2="338"/>
<line x1="254" y1="26" x2="254" y2="338"/>
<line x1="318" y1="26" x2="318" y2="338"/>
<line x1="382" y1="26" x2="382" y2="338"/>
<line x1="446" y1="26" x2="446" y2="338"/>
<line x1="510" y1="26" x2="510" y2="338"/>
<line x1="574" y1="26" x2="574" y2="338"/>
<line x1="638" y1="26" x2="638" y2="338"/>
<line x1="702" y1="26" x2="702" y2="338"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,44 L606,44 L606,71.2 L670,71.2 L670,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,104 L350,104 L350,131.2 L414,131.2 L414,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<path d="M62,191.2 L126,191.2 L126,164 L190,164 L190,191.2 L254,191.2 L254,164 L318,164 L318,191.2 L382,191.2 L382,164 L446,164 L446,191.2 L510,191.2 L510,164 L574,164 L574,191.2 L638,191.2 L638,164 L702,164 L702,191.2 L702,191.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">R</text>
<path d="M62,251.2 L158,251.2 L158,224 L222,224 L222,251.2 L398,251.2 L398,224 L430,224 L430,251.2 L558,251.2 L558,224 L590,224 L590,251.2 L702,251.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">S</text>
<path d="M62,284 L142,284 L142,311.2 L270,311.2 L270,284 L302,284 L302,311.2 L462,311.2 L462,284 L542,284 L542,311.2 L702,311.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  Clock RS ฟลิป-ฟลอป ที่มี PS และ CLR ทำงานที่พัลส์บวก (ขณะ CLK เป็น 1) เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=rs; trig=hi; pins=ps; set=b; give=table}

**ตารางการทำงาน** ($x$ คือค่าอะไรก็ได้, $Q_0$ คือค่า $Q$ ก่อนมีสัญญาณกระตุ้น, ฟลิป-ฟลอปทำงานตลอดช่วงที่ CLK เป็น 1)

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="447" height="301" viewBox="0 0 447 301" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<text x="223.5" y="26" text-anchor="middle" font-family="Mitr, Tahoma, sans-serif" font-size="21" font-weight="500" fill="#e8743b">ตารางการทำงาน</text>
<g stroke="currentColor" stroke-width="1.4" fill="none">
<rect x="16" y="42" width="415" height="251"/>
<line x1="16" y1="73" x2="431" y2="73"/>
<line x1="336" y1="42" x2="336" y2="293"/>
<line x1="16" y1="154" x2="431" y2="154" stroke-width="0.9" stroke-opacity="0.55"/>
<line x1="16" y1="262" x2="431" y2="262" stroke-width="0.9" stroke-opacity="0.55"/>
</g>
<text x="57" y="63" text-anchor="middle" font-size="16">PRESET</text>
<text x="57" y="93" text-anchor="middle" font-size="16">0</text>
<text x="57" y="120" text-anchor="middle" font-size="16">0</text>
<text x="57" y="147" text-anchor="middle" font-size="16">1</text>
<text x="57" y="174" text-anchor="middle" font-size="16">1</text>
<text x="57" y="201" text-anchor="middle" font-size="16">1</text>
<text x="57" y="228" text-anchor="middle" font-size="16">1</text>
<text x="57" y="255" text-anchor="middle" font-size="16">1</text>
<text x="57" y="282" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="63" text-anchor="middle" font-size="16">CLEAR</text>
<text x="134.5" y="93" text-anchor="middle" font-size="16">0</text>
<text x="134.5" y="120" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="147" text-anchor="middle" font-size="16">0</text>
<text x="134.5" y="174" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="201" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="228" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="255" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="282" text-anchor="middle" font-size="16">1</text>
<text x="207.5" y="63" text-anchor="middle" font-size="16">CLOCK</text>
<text x="207.5" y="93" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="207.5" y="120" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="207.5" y="147" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="207.5" y="174" text-anchor="middle" font-size="16">1</text>
<text x="207.5" y="201" text-anchor="middle" font-size="16">1</text>
<text x="207.5" y="228" text-anchor="middle" font-size="16">1</text>
<text x="207.5" y="255" text-anchor="middle" font-size="16">1</text>
<text x="207.5" y="282" text-anchor="middle" font-size="16">0</text>
<text x="267" y="63" text-anchor="middle" font-size="16">R</text>
<text x="267" y="93" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="267" y="120" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="267" y="147" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="267" y="174" text-anchor="middle" font-size="16">0</text>
<text x="267" y="201" text-anchor="middle" font-size="16">0</text>
<text x="267" y="228" text-anchor="middle" font-size="16">1</text>
<text x="267" y="255" text-anchor="middle" font-size="16">1</text>
<text x="267" y="282" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="313" y="63" text-anchor="middle" font-size="16">S</text>
<text x="313" y="93" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="313" y="120" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="313" y="147" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="313" y="174" text-anchor="middle" font-size="16">0</text>
<text x="313" y="201" text-anchor="middle" font-size="16">1</text>
<text x="313" y="228" text-anchor="middle" font-size="16">0</text>
<text x="313" y="255" text-anchor="middle" font-size="16">1</text>
<text x="313" y="282" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="359.8" y="63" text-anchor="middle" font-size="16">Q</text>
<text x="359.8" y="93" text-anchor="middle" font-size="16">1</text>
<text x="359.8" y="120" text-anchor="middle" font-size="16">1</text>
<text x="359.8" y="147" text-anchor="middle" font-size="16">0</text>
<text x="359.8" y="174" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<text x="359.8" y="201" text-anchor="middle" font-size="16">1</text>
<text x="359.8" y="228" text-anchor="middle" font-size="16">0</text>
<text x="359.8" y="255" text-anchor="middle" font-size="16">?</text>
<text x="359.8" y="282" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<text x="407.2" y="63" text-anchor="middle" font-size="16">Q</text>
<line x1="401.5" y1="49" x2="412.5" y2="49" stroke="currentColor" stroke-width="1.3"/>
<text x="407.2" y="93" text-anchor="middle" font-size="16">1</text>
<text x="407.2" y="120" text-anchor="middle" font-size="16">0</text>
<text x="407.2" y="147" text-anchor="middle" font-size="16">1</text>
<text x="407.2" y="174" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<line x1="397.5" y1="160" x2="408.5" y2="160" stroke="currentColor" stroke-width="1.3"/>
<text x="407.2" y="201" text-anchor="middle" font-size="16">0</text>
<text x="407.2" y="228" text-anchor="middle" font-size="16">1</text>
<text x="407.2" y="255" text-anchor="middle" font-size="16">?</text>
<text x="407.2" y="282" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<line x1="397.5" y1="268" x2="408.5" y2="268" stroke="currentColor" stroke-width="1.3"/>
</svg>
</div>

PS และ CLR ทำงานเมื่อเป็น $0$ และทำงานทันที ไม่ต้องรอสัญญาณนาฬิกา

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="344" viewBox="0 0 726 344" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="338"/>
<line x1="190" y1="26" x2="190" y2="338"/>
<line x1="254" y1="26" x2="254" y2="338"/>
<line x1="318" y1="26" x2="318" y2="338"/>
<line x1="382" y1="26" x2="382" y2="338"/>
<line x1="446" y1="26" x2="446" y2="338"/>
<line x1="510" y1="26" x2="510" y2="338"/>
<line x1="574" y1="26" x2="574" y2="338"/>
<line x1="638" y1="26" x2="638" y2="338"/>
<line x1="702" y1="26" x2="702" y2="338"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,44 L606,44 L606,71.2 L670,71.2 L670,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,104 L350,104 L350,131.2 L414,131.2 L414,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<path d="M62,191.2 L126,191.2 L126,164 L190,164 L190,191.2 L254,191.2 L254,164 L318,164 L318,191.2 L382,191.2 L382,164 L446,164 L446,191.2 L510,191.2 L510,164 L574,164 L574,191.2 L638,191.2 L638,164 L702,164 L702,191.2 L702,191.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">R</text>
<path d="M62,251.2 L158,251.2 L158,224 L222,224 L222,251.2 L398,251.2 L398,224 L430,224 L430,251.2 L558,251.2 L558,224 L590,224 L590,251.2 L702,251.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">S</text>
<path d="M62,284 L142,284 L142,311.2 L270,311.2 L270,284 L302,284 L302,311.2 L462,311.2 L462,284 L542,284 L542,311.2 L702,311.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  Clock RS ฟลิป-ฟลอป ที่มี PS และ CLR ทำงานที่พัลส์บวก (ขณะ CLK เป็น 1) เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=rs; trig=hi; pins=ps; set=c; give=wave}

PS และ CLR ทำงานเมื่อเป็น $0$ และทำงานทันที ไม่ต้องรอสัญญาณนาฬิกา

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="344" viewBox="0 0 726 344" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="338"/>
<line x1="190" y1="26" x2="190" y2="338"/>
<line x1="254" y1="26" x2="254" y2="338"/>
<line x1="318" y1="26" x2="318" y2="338"/>
<line x1="382" y1="26" x2="382" y2="338"/>
<line x1="446" y1="26" x2="446" y2="338"/>
<line x1="510" y1="26" x2="510" y2="338"/>
<line x1="574" y1="26" x2="574" y2="338"/>
<line x1="638" y1="26" x2="638" y2="338"/>
<line x1="702" y1="26" x2="702" y2="338"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,44 L286,44 L286,71.2 L350,71.2 L350,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,104 L438,104 L438,131.2 L486,131.2 L486,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<path d="M62,191.2 L126,191.2 L126,164 L190,164 L190,191.2 L254,191.2 L254,164 L318,164 L318,191.2 L382,191.2 L382,164 L446,164 L446,191.2 L510,191.2 L510,164 L574,164 L574,191.2 L638,191.2 L638,164 L702,164 L702,191.2 L702,191.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">R</text>
<path d="M62,251.2 L260.4,251.2 L260.4,224 L292.4,224 L292.4,251.2 L334,251.2 L334,224 L366,224 L366,251.2 L644.4,251.2 L644.4,224 L676.4,224 L676.4,251.2 L702,251.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">S</text>
<path d="M62,311.2 L132.4,311.2 L132.4,284 L164.4,284 L164.4,311.2 L388.4,311.2 L388.4,284 L420.4,284 L420.4,311.2 L516.4,311.2 L516.4,284 L548.4,284 L548.4,311.2 L702,311.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  Clock RS ฟลิป-ฟลอป ที่มี PS และ CLR ทำงานที่พัลส์บวก (ขณะ CLK เป็น 1) เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=rs; trig=hi; pins=ps; set=c; give=table}

**ตารางการทำงาน** ($x$ คือค่าอะไรก็ได้, $Q_0$ คือค่า $Q$ ก่อนมีสัญญาณกระตุ้น, ฟลิป-ฟลอปทำงานตลอดช่วงที่ CLK เป็น 1)

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="447" height="301" viewBox="0 0 447 301" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<text x="223.5" y="26" text-anchor="middle" font-family="Mitr, Tahoma, sans-serif" font-size="21" font-weight="500" fill="#e8743b">ตารางการทำงาน</text>
<g stroke="currentColor" stroke-width="1.4" fill="none">
<rect x="16" y="42" width="415" height="251"/>
<line x1="16" y1="73" x2="431" y2="73"/>
<line x1="336" y1="42" x2="336" y2="293"/>
<line x1="16" y1="154" x2="431" y2="154" stroke-width="0.9" stroke-opacity="0.55"/>
<line x1="16" y1="262" x2="431" y2="262" stroke-width="0.9" stroke-opacity="0.55"/>
</g>
<text x="57" y="63" text-anchor="middle" font-size="16">PRESET</text>
<text x="57" y="93" text-anchor="middle" font-size="16">0</text>
<text x="57" y="120" text-anchor="middle" font-size="16">0</text>
<text x="57" y="147" text-anchor="middle" font-size="16">1</text>
<text x="57" y="174" text-anchor="middle" font-size="16">1</text>
<text x="57" y="201" text-anchor="middle" font-size="16">1</text>
<text x="57" y="228" text-anchor="middle" font-size="16">1</text>
<text x="57" y="255" text-anchor="middle" font-size="16">1</text>
<text x="57" y="282" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="63" text-anchor="middle" font-size="16">CLEAR</text>
<text x="134.5" y="93" text-anchor="middle" font-size="16">0</text>
<text x="134.5" y="120" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="147" text-anchor="middle" font-size="16">0</text>
<text x="134.5" y="174" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="201" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="228" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="255" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="282" text-anchor="middle" font-size="16">1</text>
<text x="207.5" y="63" text-anchor="middle" font-size="16">CLOCK</text>
<text x="207.5" y="93" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="207.5" y="120" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="207.5" y="147" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="207.5" y="174" text-anchor="middle" font-size="16">1</text>
<text x="207.5" y="201" text-anchor="middle" font-size="16">1</text>
<text x="207.5" y="228" text-anchor="middle" font-size="16">1</text>
<text x="207.5" y="255" text-anchor="middle" font-size="16">1</text>
<text x="207.5" y="282" text-anchor="middle" font-size="16">0</text>
<text x="267" y="63" text-anchor="middle" font-size="16">R</text>
<text x="267" y="93" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="267" y="120" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="267" y="147" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="267" y="174" text-anchor="middle" font-size="16">0</text>
<text x="267" y="201" text-anchor="middle" font-size="16">0</text>
<text x="267" y="228" text-anchor="middle" font-size="16">1</text>
<text x="267" y="255" text-anchor="middle" font-size="16">1</text>
<text x="267" y="282" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="313" y="63" text-anchor="middle" font-size="16">S</text>
<text x="313" y="93" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="313" y="120" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="313" y="147" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="313" y="174" text-anchor="middle" font-size="16">0</text>
<text x="313" y="201" text-anchor="middle" font-size="16">1</text>
<text x="313" y="228" text-anchor="middle" font-size="16">0</text>
<text x="313" y="255" text-anchor="middle" font-size="16">1</text>
<text x="313" y="282" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="359.8" y="63" text-anchor="middle" font-size="16">Q</text>
<text x="359.8" y="93" text-anchor="middle" font-size="16">1</text>
<text x="359.8" y="120" text-anchor="middle" font-size="16">1</text>
<text x="359.8" y="147" text-anchor="middle" font-size="16">0</text>
<text x="359.8" y="174" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<text x="359.8" y="201" text-anchor="middle" font-size="16">1</text>
<text x="359.8" y="228" text-anchor="middle" font-size="16">0</text>
<text x="359.8" y="255" text-anchor="middle" font-size="16">?</text>
<text x="359.8" y="282" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<text x="407.2" y="63" text-anchor="middle" font-size="16">Q</text>
<line x1="401.5" y1="49" x2="412.5" y2="49" stroke="currentColor" stroke-width="1.3"/>
<text x="407.2" y="93" text-anchor="middle" font-size="16">1</text>
<text x="407.2" y="120" text-anchor="middle" font-size="16">0</text>
<text x="407.2" y="147" text-anchor="middle" font-size="16">1</text>
<text x="407.2" y="174" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<line x1="397.5" y1="160" x2="408.5" y2="160" stroke="currentColor" stroke-width="1.3"/>
<text x="407.2" y="201" text-anchor="middle" font-size="16">0</text>
<text x="407.2" y="228" text-anchor="middle" font-size="16">1</text>
<text x="407.2" y="255" text-anchor="middle" font-size="16">?</text>
<text x="407.2" y="282" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<line x1="397.5" y1="268" x2="408.5" y2="268" stroke="currentColor" stroke-width="1.3"/>
</svg>
</div>

PS และ CLR ทำงานเมื่อเป็น $0$ และทำงานทันที ไม่ต้องรอสัญญาณนาฬิกา

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="344" viewBox="0 0 726 344" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="338"/>
<line x1="190" y1="26" x2="190" y2="338"/>
<line x1="254" y1="26" x2="254" y2="338"/>
<line x1="318" y1="26" x2="318" y2="338"/>
<line x1="382" y1="26" x2="382" y2="338"/>
<line x1="446" y1="26" x2="446" y2="338"/>
<line x1="510" y1="26" x2="510" y2="338"/>
<line x1="574" y1="26" x2="574" y2="338"/>
<line x1="638" y1="26" x2="638" y2="338"/>
<line x1="702" y1="26" x2="702" y2="338"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,44 L286,44 L286,71.2 L350,71.2 L350,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,104 L438,104 L438,131.2 L486,131.2 L486,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<path d="M62,191.2 L126,191.2 L126,164 L190,164 L190,191.2 L254,191.2 L254,164 L318,164 L318,191.2 L382,191.2 L382,164 L446,164 L446,191.2 L510,191.2 L510,164 L574,164 L574,191.2 L638,191.2 L638,164 L702,164 L702,191.2 L702,191.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">R</text>
<path d="M62,251.2 L260.4,251.2 L260.4,224 L292.4,224 L292.4,251.2 L334,251.2 L334,224 L366,224 L366,251.2 L644.4,251.2 L644.4,224 L676.4,224 L676.4,251.2 L702,251.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">S</text>
<path d="M62,311.2 L132.4,311.2 L132.4,284 L164.4,284 L164.4,311.2 L388.4,311.2 L388.4,284 L420.4,284 L420.4,311.2 L516.4,311.2 L516.4,284 L548.4,284 L548.4,311.2 L702,311.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  Clock RS ฟลิป-ฟลอป ทำงานที่พัลส์ลบ (ขณะ CLK เป็น 0) เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=rs; trig=lo; pins=none; set=a; give=wave}

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="224" viewBox="0 0 726 224" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="218"/>
<line x1="190" y1="26" x2="190" y2="218"/>
<line x1="254" y1="26" x2="254" y2="218"/>
<line x1="318" y1="26" x2="318" y2="218"/>
<line x1="382" y1="26" x2="382" y2="218"/>
<line x1="446" y1="26" x2="446" y2="218"/>
<line x1="510" y1="26" x2="510" y2="218"/>
<line x1="574" y1="26" x2="574" y2="218"/>
<line x1="638" y1="26" x2="638" y2="218"/>
<line x1="702" y1="26" x2="702" y2="218"/>
</g>
<text x="50" y="63.6" text-anchor="end">CLK</text>
<path d="M62,44 L126,44 L126,71.2 L190,71.2 L190,44 L254,44 L254,71.2 L318,71.2 L318,44 L382,44 L382,71.2 L446,71.2 L446,44 L510,44 L510,71.2 L574,71.2 L574,44 L638,44 L638,71.2 L702,71.2 L702,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">R</text>
<path d="M62,131.2 L222,131.2 L222,104 L270,104 L270,131.2 L398,131.2 L398,104 L478,104 L478,131.2 L654,131.2 L654,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">S</text>
<path d="M62,191.2 L94,191.2 L94,164 L158,164 L158,191.2 L286,191.2 L286,164 L334,164 L334,191.2 L526,191.2 L526,164 L606,164 L606,191.2 L702,191.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  Clock RS ฟลิป-ฟลอป ทำงานที่พัลส์ลบ (ขณะ CLK เป็น 0) เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=rs; trig=lo; pins=none; set=a; give=table}

**ตารางการทำงาน** ($x$ คือค่าอะไรก็ได้, $Q_0$ คือค่า $Q$ ก่อนมีสัญญาณกระตุ้น, ฟลิป-ฟลอปทำงานตลอดช่วงที่ CLK เป็น 0)

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="292" height="220" viewBox="0 0 292 220" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<text x="146" y="26" text-anchor="middle" font-family="Mitr, Tahoma, sans-serif" font-size="21" font-weight="500" fill="#e8743b">ตารางการทำงาน</text>
<g stroke="currentColor" stroke-width="1.4" fill="none">
<rect x="16" y="42" width="260" height="170"/>
<line x1="16" y1="73" x2="276" y2="73"/>
<line x1="181" y1="42" x2="181" y2="212"/>
<line x1="16" y1="181" x2="276" y2="181" stroke-width="0.9" stroke-opacity="0.55"/>
</g>
<text x="52.5" y="63" text-anchor="middle" font-size="16">CLOCK</text>
<text x="52.5" y="93" text-anchor="middle" font-size="16">0</text>
<text x="52.5" y="120" text-anchor="middle" font-size="16">0</text>
<text x="52.5" y="147" text-anchor="middle" font-size="16">0</text>
<text x="52.5" y="174" text-anchor="middle" font-size="16">0</text>
<text x="52.5" y="201" text-anchor="middle" font-size="16">1</text>
<text x="112" y="63" text-anchor="middle" font-size="16">R</text>
<text x="112" y="93" text-anchor="middle" font-size="16">0</text>
<text x="112" y="120" text-anchor="middle" font-size="16">0</text>
<text x="112" y="147" text-anchor="middle" font-size="16">1</text>
<text x="112" y="174" text-anchor="middle" font-size="16">1</text>
<text x="112" y="201" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="158" y="63" text-anchor="middle" font-size="16">S</text>
<text x="158" y="93" text-anchor="middle" font-size="16">0</text>
<text x="158" y="120" text-anchor="middle" font-size="16">1</text>
<text x="158" y="147" text-anchor="middle" font-size="16">0</text>
<text x="158" y="174" text-anchor="middle" font-size="16">1</text>
<text x="158" y="201" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="204.8" y="63" text-anchor="middle" font-size="16">Q</text>
<text x="204.8" y="93" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<text x="204.8" y="120" text-anchor="middle" font-size="16">1</text>
<text x="204.8" y="147" text-anchor="middle" font-size="16">0</text>
<text x="204.8" y="174" text-anchor="middle" font-size="16">?</text>
<text x="204.8" y="201" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<text x="252.2" y="63" text-anchor="middle" font-size="16">Q</text>
<line x1="246.5" y1="49" x2="257.5" y2="49" stroke="currentColor" stroke-width="1.3"/>
<text x="252.2" y="93" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<line x1="242.5" y1="79" x2="253.5" y2="79" stroke="currentColor" stroke-width="1.3"/>
<text x="252.2" y="120" text-anchor="middle" font-size="16">0</text>
<text x="252.2" y="147" text-anchor="middle" font-size="16">1</text>
<text x="252.2" y="174" text-anchor="middle" font-size="16">?</text>
<text x="252.2" y="201" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<line x1="242.5" y1="187" x2="253.5" y2="187" stroke="currentColor" stroke-width="1.3"/>
</svg>
</div>

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="224" viewBox="0 0 726 224" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="218"/>
<line x1="190" y1="26" x2="190" y2="218"/>
<line x1="254" y1="26" x2="254" y2="218"/>
<line x1="318" y1="26" x2="318" y2="218"/>
<line x1="382" y1="26" x2="382" y2="218"/>
<line x1="446" y1="26" x2="446" y2="218"/>
<line x1="510" y1="26" x2="510" y2="218"/>
<line x1="574" y1="26" x2="574" y2="218"/>
<line x1="638" y1="26" x2="638" y2="218"/>
<line x1="702" y1="26" x2="702" y2="218"/>
</g>
<text x="50" y="63.6" text-anchor="end">CLK</text>
<path d="M62,44 L126,44 L126,71.2 L190,71.2 L190,44 L254,44 L254,71.2 L318,71.2 L318,44 L382,44 L382,71.2 L446,71.2 L446,44 L510,44 L510,71.2 L574,71.2 L574,44 L638,44 L638,71.2 L702,71.2 L702,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">R</text>
<path d="M62,131.2 L222,131.2 L222,104 L270,104 L270,131.2 L398,131.2 L398,104 L478,104 L478,131.2 L654,131.2 L654,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">S</text>
<path d="M62,191.2 L94,191.2 L94,164 L158,164 L158,191.2 L286,191.2 L286,164 L334,164 L334,191.2 L526,191.2 L526,164 L606,164 L606,191.2 L702,191.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  Clock RS ฟลิป-ฟลอป ทำงานที่พัลส์ลบ (ขณะ CLK เป็น 0) เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=rs; trig=lo; pins=none; set=b; give=wave}

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="224" viewBox="0 0 726 224" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="218"/>
<line x1="190" y1="26" x2="190" y2="218"/>
<line x1="254" y1="26" x2="254" y2="218"/>
<line x1="318" y1="26" x2="318" y2="218"/>
<line x1="382" y1="26" x2="382" y2="218"/>
<line x1="446" y1="26" x2="446" y2="218"/>
<line x1="510" y1="26" x2="510" y2="218"/>
<line x1="574" y1="26" x2="574" y2="218"/>
<line x1="638" y1="26" x2="638" y2="218"/>
<line x1="702" y1="26" x2="702" y2="218"/>
</g>
<text x="50" y="63.6" text-anchor="end">CLK</text>
<path d="M62,44 L126,44 L126,71.2 L190,71.2 L190,44 L254,44 L254,71.2 L318,71.2 L318,44 L382,44 L382,71.2 L446,71.2 L446,44 L510,44 L510,71.2 L574,71.2 L574,44 L638,44 L638,71.2 L702,71.2 L702,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">R</text>
<path d="M62,131.2 L158,131.2 L158,104 L222,104 L222,131.2 L398,131.2 L398,104 L430,104 L430,131.2 L558,131.2 L558,104 L590,104 L590,131.2 L702,131.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">S</text>
<path d="M62,164 L142,164 L142,191.2 L270,191.2 L270,164 L302,164 L302,191.2 L462,191.2 L462,164 L542,164 L542,191.2 L702,191.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  Clock RS ฟลิป-ฟลอป ทำงานที่พัลส์ลบ (ขณะ CLK เป็น 0) เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=rs; trig=lo; pins=none; set=b; give=table}

**ตารางการทำงาน** ($x$ คือค่าอะไรก็ได้, $Q_0$ คือค่า $Q$ ก่อนมีสัญญาณกระตุ้น, ฟลิป-ฟลอปทำงานตลอดช่วงที่ CLK เป็น 0)

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="292" height="220" viewBox="0 0 292 220" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<text x="146" y="26" text-anchor="middle" font-family="Mitr, Tahoma, sans-serif" font-size="21" font-weight="500" fill="#e8743b">ตารางการทำงาน</text>
<g stroke="currentColor" stroke-width="1.4" fill="none">
<rect x="16" y="42" width="260" height="170"/>
<line x1="16" y1="73" x2="276" y2="73"/>
<line x1="181" y1="42" x2="181" y2="212"/>
<line x1="16" y1="181" x2="276" y2="181" stroke-width="0.9" stroke-opacity="0.55"/>
</g>
<text x="52.5" y="63" text-anchor="middle" font-size="16">CLOCK</text>
<text x="52.5" y="93" text-anchor="middle" font-size="16">0</text>
<text x="52.5" y="120" text-anchor="middle" font-size="16">0</text>
<text x="52.5" y="147" text-anchor="middle" font-size="16">0</text>
<text x="52.5" y="174" text-anchor="middle" font-size="16">0</text>
<text x="52.5" y="201" text-anchor="middle" font-size="16">1</text>
<text x="112" y="63" text-anchor="middle" font-size="16">R</text>
<text x="112" y="93" text-anchor="middle" font-size="16">0</text>
<text x="112" y="120" text-anchor="middle" font-size="16">0</text>
<text x="112" y="147" text-anchor="middle" font-size="16">1</text>
<text x="112" y="174" text-anchor="middle" font-size="16">1</text>
<text x="112" y="201" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="158" y="63" text-anchor="middle" font-size="16">S</text>
<text x="158" y="93" text-anchor="middle" font-size="16">0</text>
<text x="158" y="120" text-anchor="middle" font-size="16">1</text>
<text x="158" y="147" text-anchor="middle" font-size="16">0</text>
<text x="158" y="174" text-anchor="middle" font-size="16">1</text>
<text x="158" y="201" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="204.8" y="63" text-anchor="middle" font-size="16">Q</text>
<text x="204.8" y="93" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<text x="204.8" y="120" text-anchor="middle" font-size="16">1</text>
<text x="204.8" y="147" text-anchor="middle" font-size="16">0</text>
<text x="204.8" y="174" text-anchor="middle" font-size="16">?</text>
<text x="204.8" y="201" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<text x="252.2" y="63" text-anchor="middle" font-size="16">Q</text>
<line x1="246.5" y1="49" x2="257.5" y2="49" stroke="currentColor" stroke-width="1.3"/>
<text x="252.2" y="93" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<line x1="242.5" y1="79" x2="253.5" y2="79" stroke="currentColor" stroke-width="1.3"/>
<text x="252.2" y="120" text-anchor="middle" font-size="16">0</text>
<text x="252.2" y="147" text-anchor="middle" font-size="16">1</text>
<text x="252.2" y="174" text-anchor="middle" font-size="16">?</text>
<text x="252.2" y="201" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<line x1="242.5" y1="187" x2="253.5" y2="187" stroke="currentColor" stroke-width="1.3"/>
</svg>
</div>

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="224" viewBox="0 0 726 224" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="218"/>
<line x1="190" y1="26" x2="190" y2="218"/>
<line x1="254" y1="26" x2="254" y2="218"/>
<line x1="318" y1="26" x2="318" y2="218"/>
<line x1="382" y1="26" x2="382" y2="218"/>
<line x1="446" y1="26" x2="446" y2="218"/>
<line x1="510" y1="26" x2="510" y2="218"/>
<line x1="574" y1="26" x2="574" y2="218"/>
<line x1="638" y1="26" x2="638" y2="218"/>
<line x1="702" y1="26" x2="702" y2="218"/>
</g>
<text x="50" y="63.6" text-anchor="end">CLK</text>
<path d="M62,44 L126,44 L126,71.2 L190,71.2 L190,44 L254,44 L254,71.2 L318,71.2 L318,44 L382,44 L382,71.2 L446,71.2 L446,44 L510,44 L510,71.2 L574,71.2 L574,44 L638,44 L638,71.2 L702,71.2 L702,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">R</text>
<path d="M62,131.2 L158,131.2 L158,104 L222,104 L222,131.2 L398,131.2 L398,104 L430,104 L430,131.2 L558,131.2 L558,104 L590,104 L590,131.2 L702,131.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">S</text>
<path d="M62,164 L142,164 L142,191.2 L270,191.2 L270,164 L302,164 L302,191.2 L462,191.2 L462,164 L542,164 L542,191.2 L702,191.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  Clock RS ฟลิป-ฟลอป ทำงานที่พัลส์ลบ (ขณะ CLK เป็น 0) เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=rs; trig=lo; pins=none; set=c; give=wave}

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="224" viewBox="0 0 726 224" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="218"/>
<line x1="190" y1="26" x2="190" y2="218"/>
<line x1="254" y1="26" x2="254" y2="218"/>
<line x1="318" y1="26" x2="318" y2="218"/>
<line x1="382" y1="26" x2="382" y2="218"/>
<line x1="446" y1="26" x2="446" y2="218"/>
<line x1="510" y1="26" x2="510" y2="218"/>
<line x1="574" y1="26" x2="574" y2="218"/>
<line x1="638" y1="26" x2="638" y2="218"/>
<line x1="702" y1="26" x2="702" y2="218"/>
</g>
<text x="50" y="63.6" text-anchor="end">CLK</text>
<path d="M62,44 L126,44 L126,71.2 L190,71.2 L190,44 L254,44 L254,71.2 L318,71.2 L318,44 L382,44 L382,71.2 L446,71.2 L446,44 L510,44 L510,71.2 L574,71.2 L574,44 L638,44 L638,71.2 L702,71.2 L702,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">R</text>
<path d="M62,131.2 L260.4,131.2 L260.4,104 L292.4,104 L292.4,131.2 L334,131.2 L334,104 L366,104 L366,131.2 L644.4,131.2 L644.4,104 L676.4,104 L676.4,131.2 L702,131.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">S</text>
<path d="M62,191.2 L132.4,191.2 L132.4,164 L164.4,164 L164.4,191.2 L388.4,191.2 L388.4,164 L420.4,164 L420.4,191.2 L516.4,191.2 L516.4,164 L548.4,164 L548.4,191.2 L702,191.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  Clock RS ฟลิป-ฟลอป ทำงานที่พัลส์ลบ (ขณะ CLK เป็น 0) เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=rs; trig=lo; pins=none; set=c; give=table}

**ตารางการทำงาน** ($x$ คือค่าอะไรก็ได้, $Q_0$ คือค่า $Q$ ก่อนมีสัญญาณกระตุ้น, ฟลิป-ฟลอปทำงานตลอดช่วงที่ CLK เป็น 0)

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="292" height="220" viewBox="0 0 292 220" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<text x="146" y="26" text-anchor="middle" font-family="Mitr, Tahoma, sans-serif" font-size="21" font-weight="500" fill="#e8743b">ตารางการทำงาน</text>
<g stroke="currentColor" stroke-width="1.4" fill="none">
<rect x="16" y="42" width="260" height="170"/>
<line x1="16" y1="73" x2="276" y2="73"/>
<line x1="181" y1="42" x2="181" y2="212"/>
<line x1="16" y1="181" x2="276" y2="181" stroke-width="0.9" stroke-opacity="0.55"/>
</g>
<text x="52.5" y="63" text-anchor="middle" font-size="16">CLOCK</text>
<text x="52.5" y="93" text-anchor="middle" font-size="16">0</text>
<text x="52.5" y="120" text-anchor="middle" font-size="16">0</text>
<text x="52.5" y="147" text-anchor="middle" font-size="16">0</text>
<text x="52.5" y="174" text-anchor="middle" font-size="16">0</text>
<text x="52.5" y="201" text-anchor="middle" font-size="16">1</text>
<text x="112" y="63" text-anchor="middle" font-size="16">R</text>
<text x="112" y="93" text-anchor="middle" font-size="16">0</text>
<text x="112" y="120" text-anchor="middle" font-size="16">0</text>
<text x="112" y="147" text-anchor="middle" font-size="16">1</text>
<text x="112" y="174" text-anchor="middle" font-size="16">1</text>
<text x="112" y="201" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="158" y="63" text-anchor="middle" font-size="16">S</text>
<text x="158" y="93" text-anchor="middle" font-size="16">0</text>
<text x="158" y="120" text-anchor="middle" font-size="16">1</text>
<text x="158" y="147" text-anchor="middle" font-size="16">0</text>
<text x="158" y="174" text-anchor="middle" font-size="16">1</text>
<text x="158" y="201" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="204.8" y="63" text-anchor="middle" font-size="16">Q</text>
<text x="204.8" y="93" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<text x="204.8" y="120" text-anchor="middle" font-size="16">1</text>
<text x="204.8" y="147" text-anchor="middle" font-size="16">0</text>
<text x="204.8" y="174" text-anchor="middle" font-size="16">?</text>
<text x="204.8" y="201" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<text x="252.2" y="63" text-anchor="middle" font-size="16">Q</text>
<line x1="246.5" y1="49" x2="257.5" y2="49" stroke="currentColor" stroke-width="1.3"/>
<text x="252.2" y="93" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<line x1="242.5" y1="79" x2="253.5" y2="79" stroke="currentColor" stroke-width="1.3"/>
<text x="252.2" y="120" text-anchor="middle" font-size="16">0</text>
<text x="252.2" y="147" text-anchor="middle" font-size="16">1</text>
<text x="252.2" y="174" text-anchor="middle" font-size="16">?</text>
<text x="252.2" y="201" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<line x1="242.5" y1="187" x2="253.5" y2="187" stroke="currentColor" stroke-width="1.3"/>
</svg>
</div>

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="224" viewBox="0 0 726 224" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="218"/>
<line x1="190" y1="26" x2="190" y2="218"/>
<line x1="254" y1="26" x2="254" y2="218"/>
<line x1="318" y1="26" x2="318" y2="218"/>
<line x1="382" y1="26" x2="382" y2="218"/>
<line x1="446" y1="26" x2="446" y2="218"/>
<line x1="510" y1="26" x2="510" y2="218"/>
<line x1="574" y1="26" x2="574" y2="218"/>
<line x1="638" y1="26" x2="638" y2="218"/>
<line x1="702" y1="26" x2="702" y2="218"/>
</g>
<text x="50" y="63.6" text-anchor="end">CLK</text>
<path d="M62,44 L126,44 L126,71.2 L190,71.2 L190,44 L254,44 L254,71.2 L318,71.2 L318,44 L382,44 L382,71.2 L446,71.2 L446,44 L510,44 L510,71.2 L574,71.2 L574,44 L638,44 L638,71.2 L702,71.2 L702,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">R</text>
<path d="M62,131.2 L260.4,131.2 L260.4,104 L292.4,104 L292.4,131.2 L334,131.2 L334,104 L366,104 L366,131.2 L644.4,131.2 L644.4,104 L676.4,104 L676.4,131.2 L702,131.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">S</text>
<path d="M62,191.2 L132.4,191.2 L132.4,164 L164.4,164 L164.4,191.2 L388.4,191.2 L388.4,164 L420.4,164 L420.4,191.2 L516.4,191.2 L516.4,164 L548.4,164 L548.4,191.2 L702,191.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  Clock RS ฟลิป-ฟลอป ที่มี PS และ CLR ทำงานที่พัลส์ลบ (ขณะ CLK เป็น 0) เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=rs; trig=lo; pins=ps; set=a; give=wave}

PS และ CLR ทำงานเมื่อเป็น $0$ และทำงานทันที ไม่ต้องรอสัญญาณนาฬิกา

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="344" viewBox="0 0 726 344" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="338"/>
<line x1="190" y1="26" x2="190" y2="338"/>
<line x1="254" y1="26" x2="254" y2="338"/>
<line x1="318" y1="26" x2="318" y2="338"/>
<line x1="382" y1="26" x2="382" y2="338"/>
<line x1="446" y1="26" x2="446" y2="338"/>
<line x1="510" y1="26" x2="510" y2="338"/>
<line x1="574" y1="26" x2="574" y2="338"/>
<line x1="638" y1="26" x2="638" y2="338"/>
<line x1="702" y1="26" x2="702" y2="338"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,44 L350,44 L350,71.2 L414,71.2 L414,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,104 L182,104 L182,131.2 L230,131.2 L230,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<path d="M62,164 L126,164 L126,191.2 L190,191.2 L190,164 L254,164 L254,191.2 L318,191.2 L318,164 L382,164 L382,191.2 L446,191.2 L446,164 L510,164 L510,191.2 L574,191.2 L574,164 L638,164 L638,191.2 L702,191.2 L702,164 L702,164" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">R</text>
<path d="M62,251.2 L222,251.2 L222,224 L270,224 L270,251.2 L398,251.2 L398,224 L478,224 L478,251.2 L654,251.2 L654,224 L702,224" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">S</text>
<path d="M62,311.2 L94,311.2 L94,284 L158,284 L158,311.2 L286,311.2 L286,284 L334,284 L334,311.2 L526,311.2 L526,284 L606,284 L606,311.2 L702,311.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  Clock RS ฟลิป-ฟลอป ที่มี PS และ CLR ทำงานที่พัลส์ลบ (ขณะ CLK เป็น 0) เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=rs; trig=lo; pins=ps; set=a; give=table}

**ตารางการทำงาน** ($x$ คือค่าอะไรก็ได้, $Q_0$ คือค่า $Q$ ก่อนมีสัญญาณกระตุ้น, ฟลิป-ฟลอปทำงานตลอดช่วงที่ CLK เป็น 0)

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="447" height="301" viewBox="0 0 447 301" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<text x="223.5" y="26" text-anchor="middle" font-family="Mitr, Tahoma, sans-serif" font-size="21" font-weight="500" fill="#e8743b">ตารางการทำงาน</text>
<g stroke="currentColor" stroke-width="1.4" fill="none">
<rect x="16" y="42" width="415" height="251"/>
<line x1="16" y1="73" x2="431" y2="73"/>
<line x1="336" y1="42" x2="336" y2="293"/>
<line x1="16" y1="154" x2="431" y2="154" stroke-width="0.9" stroke-opacity="0.55"/>
<line x1="16" y1="262" x2="431" y2="262" stroke-width="0.9" stroke-opacity="0.55"/>
</g>
<text x="57" y="63" text-anchor="middle" font-size="16">PRESET</text>
<text x="57" y="93" text-anchor="middle" font-size="16">0</text>
<text x="57" y="120" text-anchor="middle" font-size="16">0</text>
<text x="57" y="147" text-anchor="middle" font-size="16">1</text>
<text x="57" y="174" text-anchor="middle" font-size="16">1</text>
<text x="57" y="201" text-anchor="middle" font-size="16">1</text>
<text x="57" y="228" text-anchor="middle" font-size="16">1</text>
<text x="57" y="255" text-anchor="middle" font-size="16">1</text>
<text x="57" y="282" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="63" text-anchor="middle" font-size="16">CLEAR</text>
<text x="134.5" y="93" text-anchor="middle" font-size="16">0</text>
<text x="134.5" y="120" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="147" text-anchor="middle" font-size="16">0</text>
<text x="134.5" y="174" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="201" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="228" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="255" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="282" text-anchor="middle" font-size="16">1</text>
<text x="207.5" y="63" text-anchor="middle" font-size="16">CLOCK</text>
<text x="207.5" y="93" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="207.5" y="120" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="207.5" y="147" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="207.5" y="174" text-anchor="middle" font-size="16">0</text>
<text x="207.5" y="201" text-anchor="middle" font-size="16">0</text>
<text x="207.5" y="228" text-anchor="middle" font-size="16">0</text>
<text x="207.5" y="255" text-anchor="middle" font-size="16">0</text>
<text x="207.5" y="282" text-anchor="middle" font-size="16">1</text>
<text x="267" y="63" text-anchor="middle" font-size="16">R</text>
<text x="267" y="93" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="267" y="120" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="267" y="147" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="267" y="174" text-anchor="middle" font-size="16">0</text>
<text x="267" y="201" text-anchor="middle" font-size="16">0</text>
<text x="267" y="228" text-anchor="middle" font-size="16">1</text>
<text x="267" y="255" text-anchor="middle" font-size="16">1</text>
<text x="267" y="282" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="313" y="63" text-anchor="middle" font-size="16">S</text>
<text x="313" y="93" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="313" y="120" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="313" y="147" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="313" y="174" text-anchor="middle" font-size="16">0</text>
<text x="313" y="201" text-anchor="middle" font-size="16">1</text>
<text x="313" y="228" text-anchor="middle" font-size="16">0</text>
<text x="313" y="255" text-anchor="middle" font-size="16">1</text>
<text x="313" y="282" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="359.8" y="63" text-anchor="middle" font-size="16">Q</text>
<text x="359.8" y="93" text-anchor="middle" font-size="16">1</text>
<text x="359.8" y="120" text-anchor="middle" font-size="16">1</text>
<text x="359.8" y="147" text-anchor="middle" font-size="16">0</text>
<text x="359.8" y="174" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<text x="359.8" y="201" text-anchor="middle" font-size="16">1</text>
<text x="359.8" y="228" text-anchor="middle" font-size="16">0</text>
<text x="359.8" y="255" text-anchor="middle" font-size="16">?</text>
<text x="359.8" y="282" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<text x="407.2" y="63" text-anchor="middle" font-size="16">Q</text>
<line x1="401.5" y1="49" x2="412.5" y2="49" stroke="currentColor" stroke-width="1.3"/>
<text x="407.2" y="93" text-anchor="middle" font-size="16">1</text>
<text x="407.2" y="120" text-anchor="middle" font-size="16">0</text>
<text x="407.2" y="147" text-anchor="middle" font-size="16">1</text>
<text x="407.2" y="174" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<line x1="397.5" y1="160" x2="408.5" y2="160" stroke="currentColor" stroke-width="1.3"/>
<text x="407.2" y="201" text-anchor="middle" font-size="16">0</text>
<text x="407.2" y="228" text-anchor="middle" font-size="16">1</text>
<text x="407.2" y="255" text-anchor="middle" font-size="16">?</text>
<text x="407.2" y="282" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<line x1="397.5" y1="268" x2="408.5" y2="268" stroke="currentColor" stroke-width="1.3"/>
</svg>
</div>

PS และ CLR ทำงานเมื่อเป็น $0$ และทำงานทันที ไม่ต้องรอสัญญาณนาฬิกา

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="344" viewBox="0 0 726 344" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="338"/>
<line x1="190" y1="26" x2="190" y2="338"/>
<line x1="254" y1="26" x2="254" y2="338"/>
<line x1="318" y1="26" x2="318" y2="338"/>
<line x1="382" y1="26" x2="382" y2="338"/>
<line x1="446" y1="26" x2="446" y2="338"/>
<line x1="510" y1="26" x2="510" y2="338"/>
<line x1="574" y1="26" x2="574" y2="338"/>
<line x1="638" y1="26" x2="638" y2="338"/>
<line x1="702" y1="26" x2="702" y2="338"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,44 L350,44 L350,71.2 L414,71.2 L414,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,104 L182,104 L182,131.2 L230,131.2 L230,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<path d="M62,164 L126,164 L126,191.2 L190,191.2 L190,164 L254,164 L254,191.2 L318,191.2 L318,164 L382,164 L382,191.2 L446,191.2 L446,164 L510,164 L510,191.2 L574,191.2 L574,164 L638,164 L638,191.2 L702,191.2 L702,164 L702,164" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">R</text>
<path d="M62,251.2 L222,251.2 L222,224 L270,224 L270,251.2 L398,251.2 L398,224 L478,224 L478,251.2 L654,251.2 L654,224 L702,224" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">S</text>
<path d="M62,311.2 L94,311.2 L94,284 L158,284 L158,311.2 L286,311.2 L286,284 L334,284 L334,311.2 L526,311.2 L526,284 L606,284 L606,311.2 L702,311.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  Clock RS ฟลิป-ฟลอป ที่มี PS และ CLR ทำงานที่พัลส์ลบ (ขณะ CLK เป็น 0) เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=rs; trig=lo; pins=ps; set=b; give=wave}

PS และ CLR ทำงานเมื่อเป็น $0$ และทำงานทันที ไม่ต้องรอสัญญาณนาฬิกา

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="344" viewBox="0 0 726 344" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="338"/>
<line x1="190" y1="26" x2="190" y2="338"/>
<line x1="254" y1="26" x2="254" y2="338"/>
<line x1="318" y1="26" x2="318" y2="338"/>
<line x1="382" y1="26" x2="382" y2="338"/>
<line x1="446" y1="26" x2="446" y2="338"/>
<line x1="510" y1="26" x2="510" y2="338"/>
<line x1="574" y1="26" x2="574" y2="338"/>
<line x1="638" y1="26" x2="638" y2="338"/>
<line x1="702" y1="26" x2="702" y2="338"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,44 L606,44 L606,71.2 L670,71.2 L670,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,104 L350,104 L350,131.2 L414,131.2 L414,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<path d="M62,164 L126,164 L126,191.2 L190,191.2 L190,164 L254,164 L254,191.2 L318,191.2 L318,164 L382,164 L382,191.2 L446,191.2 L446,164 L510,164 L510,191.2 L574,191.2 L574,164 L638,164 L638,191.2 L702,191.2 L702,164 L702,164" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">R</text>
<path d="M62,251.2 L158,251.2 L158,224 L222,224 L222,251.2 L398,251.2 L398,224 L430,224 L430,251.2 L558,251.2 L558,224 L590,224 L590,251.2 L702,251.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">S</text>
<path d="M62,284 L142,284 L142,311.2 L270,311.2 L270,284 L302,284 L302,311.2 L462,311.2 L462,284 L542,284 L542,311.2 L702,311.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  Clock RS ฟลิป-ฟลอป ที่มี PS และ CLR ทำงานที่พัลส์ลบ (ขณะ CLK เป็น 0) เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=rs; trig=lo; pins=ps; set=b; give=table}

**ตารางการทำงาน** ($x$ คือค่าอะไรก็ได้, $Q_0$ คือค่า $Q$ ก่อนมีสัญญาณกระตุ้น, ฟลิป-ฟลอปทำงานตลอดช่วงที่ CLK เป็น 0)

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="447" height="301" viewBox="0 0 447 301" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<text x="223.5" y="26" text-anchor="middle" font-family="Mitr, Tahoma, sans-serif" font-size="21" font-weight="500" fill="#e8743b">ตารางการทำงาน</text>
<g stroke="currentColor" stroke-width="1.4" fill="none">
<rect x="16" y="42" width="415" height="251"/>
<line x1="16" y1="73" x2="431" y2="73"/>
<line x1="336" y1="42" x2="336" y2="293"/>
<line x1="16" y1="154" x2="431" y2="154" stroke-width="0.9" stroke-opacity="0.55"/>
<line x1="16" y1="262" x2="431" y2="262" stroke-width="0.9" stroke-opacity="0.55"/>
</g>
<text x="57" y="63" text-anchor="middle" font-size="16">PRESET</text>
<text x="57" y="93" text-anchor="middle" font-size="16">0</text>
<text x="57" y="120" text-anchor="middle" font-size="16">0</text>
<text x="57" y="147" text-anchor="middle" font-size="16">1</text>
<text x="57" y="174" text-anchor="middle" font-size="16">1</text>
<text x="57" y="201" text-anchor="middle" font-size="16">1</text>
<text x="57" y="228" text-anchor="middle" font-size="16">1</text>
<text x="57" y="255" text-anchor="middle" font-size="16">1</text>
<text x="57" y="282" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="63" text-anchor="middle" font-size="16">CLEAR</text>
<text x="134.5" y="93" text-anchor="middle" font-size="16">0</text>
<text x="134.5" y="120" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="147" text-anchor="middle" font-size="16">0</text>
<text x="134.5" y="174" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="201" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="228" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="255" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="282" text-anchor="middle" font-size="16">1</text>
<text x="207.5" y="63" text-anchor="middle" font-size="16">CLOCK</text>
<text x="207.5" y="93" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="207.5" y="120" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="207.5" y="147" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="207.5" y="174" text-anchor="middle" font-size="16">0</text>
<text x="207.5" y="201" text-anchor="middle" font-size="16">0</text>
<text x="207.5" y="228" text-anchor="middle" font-size="16">0</text>
<text x="207.5" y="255" text-anchor="middle" font-size="16">0</text>
<text x="207.5" y="282" text-anchor="middle" font-size="16">1</text>
<text x="267" y="63" text-anchor="middle" font-size="16">R</text>
<text x="267" y="93" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="267" y="120" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="267" y="147" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="267" y="174" text-anchor="middle" font-size="16">0</text>
<text x="267" y="201" text-anchor="middle" font-size="16">0</text>
<text x="267" y="228" text-anchor="middle" font-size="16">1</text>
<text x="267" y="255" text-anchor="middle" font-size="16">1</text>
<text x="267" y="282" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="313" y="63" text-anchor="middle" font-size="16">S</text>
<text x="313" y="93" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="313" y="120" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="313" y="147" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="313" y="174" text-anchor="middle" font-size="16">0</text>
<text x="313" y="201" text-anchor="middle" font-size="16">1</text>
<text x="313" y="228" text-anchor="middle" font-size="16">0</text>
<text x="313" y="255" text-anchor="middle" font-size="16">1</text>
<text x="313" y="282" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="359.8" y="63" text-anchor="middle" font-size="16">Q</text>
<text x="359.8" y="93" text-anchor="middle" font-size="16">1</text>
<text x="359.8" y="120" text-anchor="middle" font-size="16">1</text>
<text x="359.8" y="147" text-anchor="middle" font-size="16">0</text>
<text x="359.8" y="174" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<text x="359.8" y="201" text-anchor="middle" font-size="16">1</text>
<text x="359.8" y="228" text-anchor="middle" font-size="16">0</text>
<text x="359.8" y="255" text-anchor="middle" font-size="16">?</text>
<text x="359.8" y="282" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<text x="407.2" y="63" text-anchor="middle" font-size="16">Q</text>
<line x1="401.5" y1="49" x2="412.5" y2="49" stroke="currentColor" stroke-width="1.3"/>
<text x="407.2" y="93" text-anchor="middle" font-size="16">1</text>
<text x="407.2" y="120" text-anchor="middle" font-size="16">0</text>
<text x="407.2" y="147" text-anchor="middle" font-size="16">1</text>
<text x="407.2" y="174" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<line x1="397.5" y1="160" x2="408.5" y2="160" stroke="currentColor" stroke-width="1.3"/>
<text x="407.2" y="201" text-anchor="middle" font-size="16">0</text>
<text x="407.2" y="228" text-anchor="middle" font-size="16">1</text>
<text x="407.2" y="255" text-anchor="middle" font-size="16">?</text>
<text x="407.2" y="282" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<line x1="397.5" y1="268" x2="408.5" y2="268" stroke="currentColor" stroke-width="1.3"/>
</svg>
</div>

PS และ CLR ทำงานเมื่อเป็น $0$ และทำงานทันที ไม่ต้องรอสัญญาณนาฬิกา

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="344" viewBox="0 0 726 344" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="338"/>
<line x1="190" y1="26" x2="190" y2="338"/>
<line x1="254" y1="26" x2="254" y2="338"/>
<line x1="318" y1="26" x2="318" y2="338"/>
<line x1="382" y1="26" x2="382" y2="338"/>
<line x1="446" y1="26" x2="446" y2="338"/>
<line x1="510" y1="26" x2="510" y2="338"/>
<line x1="574" y1="26" x2="574" y2="338"/>
<line x1="638" y1="26" x2="638" y2="338"/>
<line x1="702" y1="26" x2="702" y2="338"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,44 L606,44 L606,71.2 L670,71.2 L670,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,104 L350,104 L350,131.2 L414,131.2 L414,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<path d="M62,164 L126,164 L126,191.2 L190,191.2 L190,164 L254,164 L254,191.2 L318,191.2 L318,164 L382,164 L382,191.2 L446,191.2 L446,164 L510,164 L510,191.2 L574,191.2 L574,164 L638,164 L638,191.2 L702,191.2 L702,164 L702,164" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">R</text>
<path d="M62,251.2 L158,251.2 L158,224 L222,224 L222,251.2 L398,251.2 L398,224 L430,224 L430,251.2 L558,251.2 L558,224 L590,224 L590,251.2 L702,251.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">S</text>
<path d="M62,284 L142,284 L142,311.2 L270,311.2 L270,284 L302,284 L302,311.2 L462,311.2 L462,284 L542,284 L542,311.2 L702,311.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  Clock RS ฟลิป-ฟลอป ที่มี PS และ CLR ทำงานที่พัลส์ลบ (ขณะ CLK เป็น 0) เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=rs; trig=lo; pins=ps; set=c; give=wave}

PS และ CLR ทำงานเมื่อเป็น $0$ และทำงานทันที ไม่ต้องรอสัญญาณนาฬิกา

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="344" viewBox="0 0 726 344" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="338"/>
<line x1="190" y1="26" x2="190" y2="338"/>
<line x1="254" y1="26" x2="254" y2="338"/>
<line x1="318" y1="26" x2="318" y2="338"/>
<line x1="382" y1="26" x2="382" y2="338"/>
<line x1="446" y1="26" x2="446" y2="338"/>
<line x1="510" y1="26" x2="510" y2="338"/>
<line x1="574" y1="26" x2="574" y2="338"/>
<line x1="638" y1="26" x2="638" y2="338"/>
<line x1="702" y1="26" x2="702" y2="338"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,44 L286,44 L286,71.2 L350,71.2 L350,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,104 L438,104 L438,131.2 L486,131.2 L486,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<path d="M62,164 L126,164 L126,191.2 L190,191.2 L190,164 L254,164 L254,191.2 L318,191.2 L318,164 L382,164 L382,191.2 L446,191.2 L446,164 L510,164 L510,191.2 L574,191.2 L574,164 L638,164 L638,191.2 L702,191.2 L702,164 L702,164" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">R</text>
<path d="M62,251.2 L260.4,251.2 L260.4,224 L292.4,224 L292.4,251.2 L334,251.2 L334,224 L366,224 L366,251.2 L644.4,251.2 L644.4,224 L676.4,224 L676.4,251.2 L702,251.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">S</text>
<path d="M62,311.2 L132.4,311.2 L132.4,284 L164.4,284 L164.4,311.2 L388.4,311.2 L388.4,284 L420.4,284 L420.4,311.2 L516.4,311.2 L516.4,284 L548.4,284 L548.4,311.2 L702,311.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  Clock RS ฟลิป-ฟลอป ที่มี PS และ CLR ทำงานที่พัลส์ลบ (ขณะ CLK เป็น 0) เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=rs; trig=lo; pins=ps; set=c; give=table}

**ตารางการทำงาน** ($x$ คือค่าอะไรก็ได้, $Q_0$ คือค่า $Q$ ก่อนมีสัญญาณกระตุ้น, ฟลิป-ฟลอปทำงานตลอดช่วงที่ CLK เป็น 0)

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="447" height="301" viewBox="0 0 447 301" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<text x="223.5" y="26" text-anchor="middle" font-family="Mitr, Tahoma, sans-serif" font-size="21" font-weight="500" fill="#e8743b">ตารางการทำงาน</text>
<g stroke="currentColor" stroke-width="1.4" fill="none">
<rect x="16" y="42" width="415" height="251"/>
<line x1="16" y1="73" x2="431" y2="73"/>
<line x1="336" y1="42" x2="336" y2="293"/>
<line x1="16" y1="154" x2="431" y2="154" stroke-width="0.9" stroke-opacity="0.55"/>
<line x1="16" y1="262" x2="431" y2="262" stroke-width="0.9" stroke-opacity="0.55"/>
</g>
<text x="57" y="63" text-anchor="middle" font-size="16">PRESET</text>
<text x="57" y="93" text-anchor="middle" font-size="16">0</text>
<text x="57" y="120" text-anchor="middle" font-size="16">0</text>
<text x="57" y="147" text-anchor="middle" font-size="16">1</text>
<text x="57" y="174" text-anchor="middle" font-size="16">1</text>
<text x="57" y="201" text-anchor="middle" font-size="16">1</text>
<text x="57" y="228" text-anchor="middle" font-size="16">1</text>
<text x="57" y="255" text-anchor="middle" font-size="16">1</text>
<text x="57" y="282" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="63" text-anchor="middle" font-size="16">CLEAR</text>
<text x="134.5" y="93" text-anchor="middle" font-size="16">0</text>
<text x="134.5" y="120" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="147" text-anchor="middle" font-size="16">0</text>
<text x="134.5" y="174" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="201" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="228" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="255" text-anchor="middle" font-size="16">1</text>
<text x="134.5" y="282" text-anchor="middle" font-size="16">1</text>
<text x="207.5" y="63" text-anchor="middle" font-size="16">CLOCK</text>
<text x="207.5" y="93" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="207.5" y="120" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="207.5" y="147" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="207.5" y="174" text-anchor="middle" font-size="16">0</text>
<text x="207.5" y="201" text-anchor="middle" font-size="16">0</text>
<text x="207.5" y="228" text-anchor="middle" font-size="16">0</text>
<text x="207.5" y="255" text-anchor="middle" font-size="16">0</text>
<text x="207.5" y="282" text-anchor="middle" font-size="16">1</text>
<text x="267" y="63" text-anchor="middle" font-size="16">R</text>
<text x="267" y="93" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="267" y="120" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="267" y="147" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="267" y="174" text-anchor="middle" font-size="16">0</text>
<text x="267" y="201" text-anchor="middle" font-size="16">0</text>
<text x="267" y="228" text-anchor="middle" font-size="16">1</text>
<text x="267" y="255" text-anchor="middle" font-size="16">1</text>
<text x="267" y="282" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="313" y="63" text-anchor="middle" font-size="16">S</text>
<text x="313" y="93" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="313" y="120" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="313" y="147" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="313" y="174" text-anchor="middle" font-size="16">0</text>
<text x="313" y="201" text-anchor="middle" font-size="16">1</text>
<text x="313" y="228" text-anchor="middle" font-size="16">0</text>
<text x="313" y="255" text-anchor="middle" font-size="16">1</text>
<text x="313" y="282" text-anchor="middle" font-size="16" font-style="italic">x</text>
<text x="359.8" y="63" text-anchor="middle" font-size="16">Q</text>
<text x="359.8" y="93" text-anchor="middle" font-size="16">1</text>
<text x="359.8" y="120" text-anchor="middle" font-size="16">1</text>
<text x="359.8" y="147" text-anchor="middle" font-size="16">0</text>
<text x="359.8" y="174" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<text x="359.8" y="201" text-anchor="middle" font-size="16">1</text>
<text x="359.8" y="228" text-anchor="middle" font-size="16">0</text>
<text x="359.8" y="255" text-anchor="middle" font-size="16">?</text>
<text x="359.8" y="282" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<text x="407.2" y="63" text-anchor="middle" font-size="16">Q</text>
<line x1="401.5" y1="49" x2="412.5" y2="49" stroke="currentColor" stroke-width="1.3"/>
<text x="407.2" y="93" text-anchor="middle" font-size="16">1</text>
<text x="407.2" y="120" text-anchor="middle" font-size="16">0</text>
<text x="407.2" y="147" text-anchor="middle" font-size="16">1</text>
<text x="407.2" y="174" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<line x1="397.5" y1="160" x2="408.5" y2="160" stroke="currentColor" stroke-width="1.3"/>
<text x="407.2" y="201" text-anchor="middle" font-size="16">0</text>
<text x="407.2" y="228" text-anchor="middle" font-size="16">1</text>
<text x="407.2" y="255" text-anchor="middle" font-size="16">?</text>
<text x="407.2" y="282" text-anchor="middle" font-size="16">Q<tspan dy="4" font-size="11">0</tspan></text>
<line x1="397.5" y1="268" x2="408.5" y2="268" stroke="currentColor" stroke-width="1.3"/>
</svg>
</div>

PS และ CLR ทำงานเมื่อเป็น $0$ และทำงานทันที ไม่ต้องรอสัญญาณนาฬิกา

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="344" viewBox="0 0 726 344" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="338"/>
<line x1="190" y1="26" x2="190" y2="338"/>
<line x1="254" y1="26" x2="254" y2="338"/>
<line x1="318" y1="26" x2="318" y2="338"/>
<line x1="382" y1="26" x2="382" y2="338"/>
<line x1="446" y1="26" x2="446" y2="338"/>
<line x1="510" y1="26" x2="510" y2="338"/>
<line x1="574" y1="26" x2="574" y2="338"/>
<line x1="638" y1="26" x2="638" y2="338"/>
<line x1="702" y1="26" x2="702" y2="338"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,44 L286,44 L286,71.2 L350,71.2 L350,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,104 L438,104 L438,131.2 L486,131.2 L486,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<path d="M62,164 L126,164 L126,191.2 L190,191.2 L190,164 L254,164 L254,191.2 L318,191.2 L318,164 L382,164 L382,191.2 L446,191.2 L446,164 L510,164 L510,191.2 L574,191.2 L574,164 L638,164 L638,191.2 L702,191.2 L702,164 L702,164" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">R</text>
<path d="M62,251.2 L260.4,251.2 L260.4,224 L292.4,224 L292.4,251.2 L334,251.2 L334,224 L366,224 L366,251.2 L644.4,251.2 L644.4,224 L676.4,224 L676.4,251.2 L702,251.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">S</text>
<path d="M62,311.2 L132.4,311.2 L132.4,284 L164.4,284 L164.4,311.2 L388.4,311.2 L388.4,284 L420.4,284 L420.4,311.2 L516.4,311.2 L516.4,284 L548.4,284 L548.4,311.2 L702,311.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

## เฉลย {sol}

### เฉลย  JK ฟลิป-ฟลอป ทำงานที่ขอบขาขึ้น (ชุดสัญญาณที่ 1) {ff=jk; trig=rise; pins=none; set=a}

$\mathbf{Sol}^{n}$

ขอบที่ทำงานคือขอบขาขึ้น มี 5 ครั้ง (#1 ถึง #5) อ่านค่า $J$, $K$ ก่อนขอบแต่ละครั้ง แล้วหา $Q$ ใหม่จากตารางการทำงาน

- ขอบ #1 : $J=1$, $K=0$ $\Rightarrow$ Set $\Rightarrow Q = 1$
- ขอบ #2 : $J=0$, $K=1$ $\Rightarrow$ Reset $\Rightarrow Q = 0$
- ขอบ #3 : $J=1$, $K=1$ $\Rightarrow$ สลับ (Toggle) $\Rightarrow Q = 1$
- ขอบ #4 : $J=0$, $K=0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 1$
- ขอบ #5 : $J=1$, $K=1$ $\Rightarrow$ สลับ (Toggle) $\Rightarrow Q = 0$

$\mathbf{Ans}\quad Q = 1,\ 0,\ 1,\ 1,\ 0 \text{ หลังขอบที่ 1 ถึง 5 ตามลำดับ}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="344" viewBox="0 0 726 344" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="338"/>
<line x1="254" y1="26" x2="254" y2="338"/>
<line x1="382" y1="26" x2="382" y2="338"/>
<line x1="510" y1="26" x2="510" y2="338"/>
<line x1="638" y1="26" x2="638" y2="338"/>
</g>
<text x="50" y="63.6" text-anchor="end">CLK</text>
<path d="M62,71.2 L126,71.2 L126,44 L190,44 L190,71.2 L254,71.2 L254,44 L318,44 L318,71.2 L382,71.2 L382,44 L446,44 L446,71.2 L510,71.2 L510,44 L574,44 L574,71.2 L638,71.2 L638,44 L702,44 L702,71.2 L702,71.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">J</text>
<path d="M62,104 L174,104 L174,131.2 L350,131.2 L350,104 L414,104 L414,131.2 L574,131.2 L574,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">K</text>
<path d="M62,191.2 L174,191.2 L174,164 L414,164 L414,191.2 L574,191.2 L574,164 L702,164" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">Q</text>
<path d="M62,251.2 L126,251.2 L126,224 L254,224 L254,251.2 L382,251.2 L382,224 L638,224 L638,251.2 L702,251.2" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">Q</text>
<line x1="38" y1="288.6" x2="50" y2="288.6" stroke="currentColor" stroke-width="1.4"/>
<path d="M62,284 L126,284 L126,311.2 L254,311.2 L254,284 L382,284 L382,311.2 L638,311.2 L638,284 L702,284" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### เฉลย  JK ฟลิป-ฟลอป ทำงานที่ขอบขาขึ้น (ชุดสัญญาณที่ 2) {ff=jk; trig=rise; pins=none; set=b}

$\mathbf{Sol}^{n}$

ขอบที่ทำงานคือขอบขาขึ้น มี 5 ครั้ง (#1 ถึง #5) อ่านค่า $J$, $K$ ก่อนขอบแต่ละครั้ง แล้วหา $Q$ ใหม่จากตารางการทำงาน

- ขอบ #1 : $J=0$, $K=1$ $\Rightarrow$ Reset $\Rightarrow Q = 0$
- ขอบ #2 : $J=1$, $K=1$ $\Rightarrow$ สลับ (Toggle) $\Rightarrow Q = 1$
- ขอบ #3 : $J=1$, $K=1$ $\Rightarrow$ สลับ (Toggle) $\Rightarrow Q = 0$
- ขอบ #4 : $J=1$, $K=0$ $\Rightarrow$ Set $\Rightarrow Q = 1$
- ขอบ #5 : $J=0$, $K=0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 1$

$\mathbf{Ans}\quad Q = 0,\ 1,\ 0,\ 1,\ 1 \text{ หลังขอบที่ 1 ถึง 5 ตามลำดับ}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="344" viewBox="0 0 726 344" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="338"/>
<line x1="254" y1="26" x2="254" y2="338"/>
<line x1="382" y1="26" x2="382" y2="338"/>
<line x1="510" y1="26" x2="510" y2="338"/>
<line x1="638" y1="26" x2="638" y2="338"/>
</g>
<text x="50" y="63.6" text-anchor="end">CLK</text>
<path d="M62,71.2 L126,71.2 L126,44 L190,44 L190,71.2 L254,71.2 L254,44 L318,44 L318,71.2 L382,71.2 L382,44 L446,44 L446,71.2 L510,71.2 L510,44 L574,44 L574,71.2 L638,71.2 L638,44 L702,44 L702,71.2 L702,71.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">J</text>
<path d="M62,131.2 L190,131.2 L190,104 L558,104 L558,131.2 L702,131.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">K</text>
<path d="M62,164 L462,164 L462,191.2 L702,191.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">Q</text>
<path d="M62,251.2 L254,251.2 L254,224 L382,224 L382,251.2 L510,251.2 L510,224 L702,224" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">Q</text>
<line x1="38" y1="288.6" x2="50" y2="288.6" stroke="currentColor" stroke-width="1.4"/>
<path d="M62,284 L254,284 L254,311.2 L382,311.2 L382,284 L510,284 L510,311.2 L702,311.2" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### เฉลย  JK ฟลิป-ฟลอป ทำงานที่ขอบขาขึ้น (ชุดสัญญาณที่ 3) {ff=jk; trig=rise; pins=none; set=c}

$\mathbf{Sol}^{n}$

ขอบที่ทำงานคือขอบขาขึ้น มี 5 ครั้ง (#1 ถึง #5) อ่านค่า $J$, $K$ ก่อนขอบแต่ละครั้ง แล้วหา $Q$ ใหม่จากตารางการทำงาน

- ขอบ #1 : $J=1$, $K=1$ $\Rightarrow$ สลับ (Toggle) $\Rightarrow Q = 1$
- ขอบ #2 : $J=0$, $K=0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 1$
- ขอบ #3 : $J=0$, $K=1$ $\Rightarrow$ Reset $\Rightarrow Q = 0$
- ขอบ #4 : $J=1$, $K=0$ $\Rightarrow$ Set $\Rightarrow Q = 1$
- ขอบ #5 : $J=1$, $K=1$ $\Rightarrow$ สลับ (Toggle) $\Rightarrow Q = 0$

$\mathbf{Ans}\quad Q = 1,\ 1,\ 0,\ 1,\ 0 \text{ หลังขอบที่ 1 ถึง 5 ตามลำดับ}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="344" viewBox="0 0 726 344" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="338"/>
<line x1="254" y1="26" x2="254" y2="338"/>
<line x1="382" y1="26" x2="382" y2="338"/>
<line x1="510" y1="26" x2="510" y2="338"/>
<line x1="638" y1="26" x2="638" y2="338"/>
</g>
<text x="50" y="63.6" text-anchor="end">CLK</text>
<path d="M62,71.2 L126,71.2 L126,44 L190,44 L190,71.2 L254,71.2 L254,44 L318,44 L318,71.2 L382,71.2 L382,44 L446,44 L446,71.2 L510,71.2 L510,44 L574,44 L574,71.2 L638,71.2 L638,44 L702,44 L702,71.2 L702,71.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">J</text>
<path d="M62,104 L222,104 L222,131.2 L398,131.2 L398,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">K</text>
<path d="M62,164 L222,164 L222,191.2 L302,191.2 L302,164 L398,164 L398,191.2 L590,191.2 L590,164 L702,164" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">Q</text>
<path d="M62,251.2 L126,251.2 L126,224 L382,224 L382,251.2 L510,251.2 L510,224 L638,224 L638,251.2 L702,251.2" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">Q</text>
<line x1="38" y1="288.6" x2="50" y2="288.6" stroke="currentColor" stroke-width="1.4"/>
<path d="M62,284 L126,284 L126,311.2 L382,311.2 L382,284 L510,284 L510,311.2 L638,311.2 L638,284 L702,284" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### เฉลย  JK ฟลิป-ฟลอป ที่มี PS และ CLR ทำงานที่ขอบขาขึ้น (ชุดสัญญาณที่ 1) {ff=jk; trig=rise; pins=ps; set=a}

$\mathbf{Sol}^{n}$

ขอบที่ทำงานคือขอบขาขึ้น มี 5 ครั้ง (#1 ถึง #5) อ่านค่า $J$, $K$ ก่อนขอบแต่ละครั้ง แล้วหา $Q$ ใหม่จากตารางการทำงาน PS และ CLR ที่เป็น $0$ ทำงานก่อนเสมอ จึงดูเหตุการณ์ตามลำดับเวลา

- ขอบ #1 : $J=1$, $K=0$ $\Rightarrow$ Set $\Rightarrow Q = 1$
- ขอบ #2 : $J=0$, $K=1$ $\Rightarrow$ Reset $\Rightarrow Q = 0$
- ขอบ #3 : $J=1$, $K=1$ $\Rightarrow$ สลับ (Toggle) $\Rightarrow Q = 1$
- ระหว่างขอบ #3 กับ #4 : CLR เปลี่ยนเป็น $0$ ทำงานทันที ไม่รอ CLK $\Rightarrow Q = 0, \overline{Q} = 1$
- ระหว่างขอบ #3 กับ #4 : CLR กลับเป็น $1$ $\Rightarrow$ $Q$ คงเดิม ($Q = 0$) จนกว่าจะถึงขอบที่ทำงานถัดไป
- ขอบ #4 : $J=0$, $K=0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 0$
- ระหว่างขอบ #4 กับ #5 : PS เปลี่ยนเป็น $0$ ทำงานทันที ไม่รอ CLK $\Rightarrow Q = 1, \overline{Q} = 0$
- ขอบ #5 : PS เป็น $0$ อยู่ จึงไม่ดู CLK และอินพุต $\Rightarrow Q = 1$ (ไม่เปลี่ยน)
- หลังขอบ #5 : PS กลับเป็น $1$ $\Rightarrow$ $Q$ คงเดิม ($Q = 1$) จนกว่าจะถึงขอบที่ทำงานถัดไป

$\mathbf{Ans}\quad \text{รูปคลื่น } Q \text{ และ } \overline{Q} \text{ ตามรูป}$

| เหตุการณ์ | $Q$ | $\overline{Q}$ |
|:-:|:-:|:-:|
| ขอบ #1 | $1$ | $0$ |
| ขอบ #2 | $0$ | $1$ |
| ขอบ #3 | $1$ | $0$ |
| CLR = 0 | $0$ | $1$ |
| CLR กลับเป็น 1 | $0$ | $1$ |
| ขอบ #4 | $0$ | $1$ |
| PS = 0 | $1$ | $0$ |
| ขอบ #5 | $1$ | $0$ |
| PS กลับเป็น 1 | $1$ | $0$ |

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="464" viewBox="0 0 726 464" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="458"/>
<line x1="254" y1="26" x2="254" y2="458"/>
<line x1="382" y1="26" x2="382" y2="458"/>
<line x1="510" y1="26" x2="510" y2="458"/>
<line x1="638" y1="26" x2="638" y2="458"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,44 L606,44 L606,71.2 L670,71.2 L670,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,104 L430,104 L430,131.2 L478,131.2 L478,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<path d="M62,191.2 L126,191.2 L126,164 L190,164 L190,191.2 L254,191.2 L254,164 L318,164 L318,191.2 L382,191.2 L382,164 L446,164 L446,191.2 L510,191.2 L510,164 L574,164 L574,191.2 L638,191.2 L638,164 L702,164 L702,191.2 L702,191.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">J</text>
<path d="M62,224 L174,224 L174,251.2 L350,251.2 L350,224 L414,224 L414,251.2 L574,251.2 L574,224 L702,224" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">K</text>
<path d="M62,311.2 L174,311.2 L174,284 L414,284 L414,311.2 L574,311.2 L574,284 L702,284" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="363.6" text-anchor="end">Q</text>
<path d="M62,371.2 L126,371.2 L126,344 L254,344 L254,371.2 L382,371.2 L382,344 L430,344 L430,371.2 L606,371.2 L606,344 L702,344" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="423.6" text-anchor="end">Q</text>
<line x1="38" y1="408.6" x2="50" y2="408.6" stroke="currentColor" stroke-width="1.4"/>
<path d="M62,404 L126,404 L126,431.2 L254,431.2 L254,404 L382,404 L382,431.2 L430,431.2 L430,404 L606,404 L606,431.2 L702,431.2" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### เฉลย  JK ฟลิป-ฟลอป ที่มี PS และ CLR ทำงานที่ขอบขาขึ้น (ชุดสัญญาณที่ 2) {ff=jk; trig=rise; pins=ps; set=b}

$\mathbf{Sol}^{n}$

ขอบที่ทำงานคือขอบขาขึ้น มี 5 ครั้ง (#1 ถึง #5) อ่านค่า $J$, $K$ ก่อนขอบแต่ละครั้ง แล้วหา $Q$ ใหม่จากตารางการทำงาน PS และ CLR ที่เป็น $0$ ทำงานก่อนเสมอ จึงดูเหตุการณ์ตามลำดับเวลา

- ขอบ #1 : $J=0$, $K=1$ $\Rightarrow$ Reset $\Rightarrow Q = 0$
- ระหว่างขอบ #1 กับ #2 : PS เปลี่ยนเป็น $0$ ทำงานทันที ไม่รอ CLK $\Rightarrow Q = 1, \overline{Q} = 0$
- ระหว่างขอบ #1 กับ #2 : PS กลับเป็น $1$ $\Rightarrow$ $Q$ คงเดิม ($Q = 1$) จนกว่าจะถึงขอบที่ทำงานถัดไป
- ขอบ #2 : $J=1$, $K=1$ $\Rightarrow$ สลับ (Toggle) $\Rightarrow Q = 0$
- ขอบ #3 : $J=1$, $K=1$ $\Rightarrow$ สลับ (Toggle) $\Rightarrow Q = 1$
- ขอบ #4 : $J=1$, $K=0$ $\Rightarrow$ Set $\Rightarrow Q = 1$
- ระหว่างขอบ #4 กับ #5 : CLR เปลี่ยนเป็น $0$ ทำงานทันที ไม่รอ CLK $\Rightarrow Q = 0, \overline{Q} = 1$
- ขอบ #5 : CLR เป็น $0$ อยู่ จึงไม่ดู CLK และอินพุต $\Rightarrow Q = 0$ (ไม่เปลี่ยน)
- หลังขอบ #5 : CLR กลับเป็น $1$ $\Rightarrow$ $Q$ คงเดิม ($Q = 0$) จนกว่าจะถึงขอบที่ทำงานถัดไป

$\mathbf{Ans}\quad \text{รูปคลื่น } Q \text{ และ } \overline{Q} \text{ ตามรูป}$

| เหตุการณ์ | $Q$ | $\overline{Q}$ |
|:-:|:-:|:-:|
| ขอบ #1 | $0$ | $1$ |
| PS = 0 | $1$ | $0$ |
| PS กลับเป็น 1 | $1$ | $0$ |
| ขอบ #2 | $0$ | $1$ |
| ขอบ #3 | $1$ | $0$ |
| ขอบ #4 | $1$ | $0$ |
| CLR = 0 | $0$ | $1$ |
| ขอบ #5 | $0$ | $1$ |
| CLR กลับเป็น 1 | $0$ | $1$ |

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="464" viewBox="0 0 726 464" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="458"/>
<line x1="254" y1="26" x2="254" y2="458"/>
<line x1="382" y1="26" x2="382" y2="458"/>
<line x1="510" y1="26" x2="510" y2="458"/>
<line x1="638" y1="26" x2="638" y2="458"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,44 L174,44 L174,71.2 L222,71.2 L222,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,104 L606,104 L606,131.2 L670,131.2 L670,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<path d="M62,191.2 L126,191.2 L126,164 L190,164 L190,191.2 L254,191.2 L254,164 L318,164 L318,191.2 L382,191.2 L382,164 L446,164 L446,191.2 L510,191.2 L510,164 L574,164 L574,191.2 L638,191.2 L638,164 L702,164 L702,191.2 L702,191.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">J</text>
<path d="M62,251.2 L190,251.2 L190,224 L558,224 L558,251.2 L702,251.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">K</text>
<path d="M62,284 L462,284 L462,311.2 L702,311.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="363.6" text-anchor="end">Q</text>
<path d="M62,371.2 L174,371.2 L174,344 L254,344 L254,371.2 L382,371.2 L382,344 L606,344 L606,371.2 L702,371.2" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="423.6" text-anchor="end">Q</text>
<line x1="38" y1="408.6" x2="50" y2="408.6" stroke="currentColor" stroke-width="1.4"/>
<path d="M62,404 L174,404 L174,431.2 L254,431.2 L254,404 L382,404 L382,431.2 L606,431.2 L606,404 L702,404" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### เฉลย  JK ฟลิป-ฟลอป ที่มี PS และ CLR ทำงานที่ขอบขาขึ้น (ชุดสัญญาณที่ 3) {ff=jk; trig=rise; pins=ps; set=c}

$\mathbf{Sol}^{n}$

ขอบที่ทำงานคือขอบขาขึ้น มี 5 ครั้ง (#1 ถึง #5) อ่านค่า $J$, $K$ ก่อนขอบแต่ละครั้ง แล้วหา $Q$ ใหม่จากตารางการทำงาน PS และ CLR ที่เป็น $0$ ทำงานก่อนเสมอ จึงดูเหตุการณ์ตามลำดับเวลา

- ขอบ #1 : $J=1$, $K=1$ $\Rightarrow$ สลับ (Toggle) $\Rightarrow Q = 1$
- ขอบ #2 : $J=0$, $K=0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 1$
- ขอบ #3 : $J=0$, $K=1$ $\Rightarrow$ Reset $\Rightarrow Q = 0$
- ระหว่างขอบ #3 กับ #4 : PS เปลี่ยนเป็น $0$ ทำงานทันที ไม่รอ CLK $\Rightarrow Q = 1, \overline{Q} = 0$
- ขอบ #4 : PS เป็น $0$ อยู่ จึงไม่ดู CLK และอินพุต $\Rightarrow Q = 1$ (ไม่เปลี่ยน)
- ระหว่างขอบ #4 กับ #5 : PS กลับเป็น $1$ $\Rightarrow$ $Q$ คงเดิม ($Q = 1$) จนกว่าจะถึงขอบที่ทำงานถัดไป
- ระหว่างขอบ #4 กับ #5 : CLR เปลี่ยนเป็น $0$ ทำงานทันที ไม่รอ CLK $\Rightarrow Q = 0, \overline{Q} = 1$
- ระหว่างขอบ #4 กับ #5 : CLR กลับเป็น $1$ $\Rightarrow$ $Q$ คงเดิม ($Q = 0$) จนกว่าจะถึงขอบที่ทำงานถัดไป
- ขอบ #5 : $J=1$, $K=1$ $\Rightarrow$ สลับ (Toggle) $\Rightarrow Q = 1$

$\mathbf{Ans}\quad \text{รูปคลื่น } Q \text{ และ } \overline{Q} \text{ ตามรูป}$

| เหตุการณ์ | $Q$ | $\overline{Q}$ |
|:-:|:-:|:-:|
| ขอบ #1 | $1$ | $0$ |
| ขอบ #2 | $1$ | $0$ |
| ขอบ #3 | $0$ | $1$ |
| PS = 0 | $1$ | $0$ |
| ขอบ #4 | $1$ | $0$ |
| PS กลับเป็น 1 | $1$ | $0$ |
| CLR = 0 | $0$ | $1$ |
| CLR กลับเป็น 1 | $0$ | $1$ |
| ขอบ #5 | $1$ | $0$ |

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="464" viewBox="0 0 726 464" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="458"/>
<line x1="254" y1="26" x2="254" y2="458"/>
<line x1="382" y1="26" x2="382" y2="458"/>
<line x1="510" y1="26" x2="510" y2="458"/>
<line x1="638" y1="26" x2="638" y2="458"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,44 L470,44 L470,71.2 L534,71.2 L534,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,104 L550,104 L550,131.2 L614,131.2 L614,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<path d="M62,191.2 L126,191.2 L126,164 L190,164 L190,191.2 L254,191.2 L254,164 L318,164 L318,191.2 L382,191.2 L382,164 L446,164 L446,191.2 L510,191.2 L510,164 L574,164 L574,191.2 L638,191.2 L638,164 L702,164 L702,191.2 L702,191.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">J</text>
<path d="M62,224 L222,224 L222,251.2 L398,251.2 L398,224 L702,224" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">K</text>
<path d="M62,284 L222,284 L222,311.2 L302,311.2 L302,284 L398,284 L398,311.2 L590,311.2 L590,284 L702,284" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="363.6" text-anchor="end">Q</text>
<path d="M62,371.2 L126,371.2 L126,344 L382,344 L382,371.2 L470,371.2 L470,344 L550,344 L550,371.2 L638,371.2 L638,344 L702,344" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="423.6" text-anchor="end">Q</text>
<line x1="38" y1="408.6" x2="50" y2="408.6" stroke="currentColor" stroke-width="1.4"/>
<path d="M62,404 L126,404 L126,431.2 L382,431.2 L382,404 L470,404 L470,431.2 L550,431.2 L550,404 L638,404 L638,431.2 L702,431.2" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### เฉลย  JK ฟลิป-ฟลอป ทำงานที่ขอบขาลง (ชุดสัญญาณที่ 1) {ff=jk; trig=fall; pins=none; set=a}

$\mathbf{Sol}^{n}$

ขอบที่ทำงานคือขอบขาลง มี 5 ครั้ง (#1 ถึง #5) อ่านค่า $J$, $K$ ก่อนขอบแต่ละครั้ง แล้วหา $Q$ ใหม่จากตารางการทำงาน

- ขอบ #1 : $J=1$, $K=0$ $\Rightarrow$ Set $\Rightarrow Q = 1$
- ขอบ #2 : $J=0$, $K=1$ $\Rightarrow$ Reset $\Rightarrow Q = 0$
- ขอบ #3 : $J=1$, $K=1$ $\Rightarrow$ สลับ (Toggle) $\Rightarrow Q = 1$
- ขอบ #4 : $J=0$, $K=0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 1$
- ขอบ #5 : $J=1$, $K=1$ $\Rightarrow$ สลับ (Toggle) $\Rightarrow Q = 0$

$\mathbf{Ans}\quad Q = 1,\ 0,\ 1,\ 1,\ 0 \text{ หลังขอบที่ 1 ถึง 5 ตามลำดับ}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="344" viewBox="0 0 726 344" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="338"/>
<line x1="254" y1="26" x2="254" y2="338"/>
<line x1="382" y1="26" x2="382" y2="338"/>
<line x1="510" y1="26" x2="510" y2="338"/>
<line x1="638" y1="26" x2="638" y2="338"/>
</g>
<text x="50" y="63.6" text-anchor="end">CLK</text>
<path d="M62,44 L126,44 L126,71.2 L190,71.2 L190,44 L254,44 L254,71.2 L318,71.2 L318,44 L382,44 L382,71.2 L446,71.2 L446,44 L510,44 L510,71.2 L574,71.2 L574,44 L638,44 L638,71.2 L702,71.2 L702,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">J</text>
<path d="M62,104 L174,104 L174,131.2 L350,131.2 L350,104 L414,104 L414,131.2 L574,131.2 L574,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">K</text>
<path d="M62,191.2 L174,191.2 L174,164 L414,164 L414,191.2 L574,191.2 L574,164 L702,164" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">Q</text>
<path d="M62,251.2 L126,251.2 L126,224 L254,224 L254,251.2 L382,251.2 L382,224 L638,224 L638,251.2 L702,251.2" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">Q</text>
<line x1="38" y1="288.6" x2="50" y2="288.6" stroke="currentColor" stroke-width="1.4"/>
<path d="M62,284 L126,284 L126,311.2 L254,311.2 L254,284 L382,284 L382,311.2 L638,311.2 L638,284 L702,284" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### เฉลย  JK ฟลิป-ฟลอป ทำงานที่ขอบขาลง (ชุดสัญญาณที่ 2) {ff=jk; trig=fall; pins=none; set=b}

$\mathbf{Sol}^{n}$

ขอบที่ทำงานคือขอบขาลง มี 5 ครั้ง (#1 ถึง #5) อ่านค่า $J$, $K$ ก่อนขอบแต่ละครั้ง แล้วหา $Q$ ใหม่จากตารางการทำงาน

- ขอบ #1 : $J=0$, $K=1$ $\Rightarrow$ Reset $\Rightarrow Q = 0$
- ขอบ #2 : $J=1$, $K=1$ $\Rightarrow$ สลับ (Toggle) $\Rightarrow Q = 1$
- ขอบ #3 : $J=1$, $K=1$ $\Rightarrow$ สลับ (Toggle) $\Rightarrow Q = 0$
- ขอบ #4 : $J=1$, $K=0$ $\Rightarrow$ Set $\Rightarrow Q = 1$
- ขอบ #5 : $J=0$, $K=0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 1$

$\mathbf{Ans}\quad Q = 0,\ 1,\ 0,\ 1,\ 1 \text{ หลังขอบที่ 1 ถึง 5 ตามลำดับ}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="344" viewBox="0 0 726 344" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="338"/>
<line x1="254" y1="26" x2="254" y2="338"/>
<line x1="382" y1="26" x2="382" y2="338"/>
<line x1="510" y1="26" x2="510" y2="338"/>
<line x1="638" y1="26" x2="638" y2="338"/>
</g>
<text x="50" y="63.6" text-anchor="end">CLK</text>
<path d="M62,44 L126,44 L126,71.2 L190,71.2 L190,44 L254,44 L254,71.2 L318,71.2 L318,44 L382,44 L382,71.2 L446,71.2 L446,44 L510,44 L510,71.2 L574,71.2 L574,44 L638,44 L638,71.2 L702,71.2 L702,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">J</text>
<path d="M62,131.2 L190,131.2 L190,104 L558,104 L558,131.2 L702,131.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">K</text>
<path d="M62,164 L462,164 L462,191.2 L702,191.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">Q</text>
<path d="M62,251.2 L254,251.2 L254,224 L382,224 L382,251.2 L510,251.2 L510,224 L702,224" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">Q</text>
<line x1="38" y1="288.6" x2="50" y2="288.6" stroke="currentColor" stroke-width="1.4"/>
<path d="M62,284 L254,284 L254,311.2 L382,311.2 L382,284 L510,284 L510,311.2 L702,311.2" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### เฉลย  JK ฟลิป-ฟลอป ทำงานที่ขอบขาลง (ชุดสัญญาณที่ 3) {ff=jk; trig=fall; pins=none; set=c}

$\mathbf{Sol}^{n}$

ขอบที่ทำงานคือขอบขาลง มี 5 ครั้ง (#1 ถึง #5) อ่านค่า $J$, $K$ ก่อนขอบแต่ละครั้ง แล้วหา $Q$ ใหม่จากตารางการทำงาน

- ขอบ #1 : $J=1$, $K=1$ $\Rightarrow$ สลับ (Toggle) $\Rightarrow Q = 1$
- ขอบ #2 : $J=0$, $K=0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 1$
- ขอบ #3 : $J=0$, $K=1$ $\Rightarrow$ Reset $\Rightarrow Q = 0$
- ขอบ #4 : $J=1$, $K=0$ $\Rightarrow$ Set $\Rightarrow Q = 1$
- ขอบ #5 : $J=1$, $K=1$ $\Rightarrow$ สลับ (Toggle) $\Rightarrow Q = 0$

$\mathbf{Ans}\quad Q = 1,\ 1,\ 0,\ 1,\ 0 \text{ หลังขอบที่ 1 ถึง 5 ตามลำดับ}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="344" viewBox="0 0 726 344" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="338"/>
<line x1="254" y1="26" x2="254" y2="338"/>
<line x1="382" y1="26" x2="382" y2="338"/>
<line x1="510" y1="26" x2="510" y2="338"/>
<line x1="638" y1="26" x2="638" y2="338"/>
</g>
<text x="50" y="63.6" text-anchor="end">CLK</text>
<path d="M62,44 L126,44 L126,71.2 L190,71.2 L190,44 L254,44 L254,71.2 L318,71.2 L318,44 L382,44 L382,71.2 L446,71.2 L446,44 L510,44 L510,71.2 L574,71.2 L574,44 L638,44 L638,71.2 L702,71.2 L702,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">J</text>
<path d="M62,104 L222,104 L222,131.2 L398,131.2 L398,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">K</text>
<path d="M62,164 L222,164 L222,191.2 L302,191.2 L302,164 L398,164 L398,191.2 L590,191.2 L590,164 L702,164" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">Q</text>
<path d="M62,251.2 L126,251.2 L126,224 L382,224 L382,251.2 L510,251.2 L510,224 L638,224 L638,251.2 L702,251.2" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">Q</text>
<line x1="38" y1="288.6" x2="50" y2="288.6" stroke="currentColor" stroke-width="1.4"/>
<path d="M62,284 L126,284 L126,311.2 L382,311.2 L382,284 L510,284 L510,311.2 L638,311.2 L638,284 L702,284" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### เฉลย  JK ฟลิป-ฟลอป ที่มี PS และ CLR ทำงานที่ขอบขาลง (ชุดสัญญาณที่ 1) {ff=jk; trig=fall; pins=ps; set=a}

$\mathbf{Sol}^{n}$

ขอบที่ทำงานคือขอบขาลง มี 5 ครั้ง (#1 ถึง #5) อ่านค่า $J$, $K$ ก่อนขอบแต่ละครั้ง แล้วหา $Q$ ใหม่จากตารางการทำงาน PS และ CLR ที่เป็น $0$ ทำงานก่อนเสมอ จึงดูเหตุการณ์ตามลำดับเวลา

- ขอบ #1 : $J=1$, $K=0$ $\Rightarrow$ Set $\Rightarrow Q = 1$
- ขอบ #2 : $J=0$, $K=1$ $\Rightarrow$ Reset $\Rightarrow Q = 0$
- ขอบ #3 : $J=1$, $K=1$ $\Rightarrow$ สลับ (Toggle) $\Rightarrow Q = 1$
- ระหว่างขอบ #3 กับ #4 : CLR เปลี่ยนเป็น $0$ ทำงานทันที ไม่รอ CLK $\Rightarrow Q = 0, \overline{Q} = 1$
- ระหว่างขอบ #3 กับ #4 : CLR กลับเป็น $1$ $\Rightarrow$ $Q$ คงเดิม ($Q = 0$) จนกว่าจะถึงขอบที่ทำงานถัดไป
- ขอบ #4 : $J=0$, $K=0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 0$
- ระหว่างขอบ #4 กับ #5 : PS เปลี่ยนเป็น $0$ ทำงานทันที ไม่รอ CLK $\Rightarrow Q = 1, \overline{Q} = 0$
- ขอบ #5 : PS เป็น $0$ อยู่ จึงไม่ดู CLK และอินพุต $\Rightarrow Q = 1$ (ไม่เปลี่ยน)
- หลังขอบ #5 : PS กลับเป็น $1$ $\Rightarrow$ $Q$ คงเดิม ($Q = 1$) จนกว่าจะถึงขอบที่ทำงานถัดไป

$\mathbf{Ans}\quad \text{รูปคลื่น } Q \text{ และ } \overline{Q} \text{ ตามรูป}$

| เหตุการณ์ | $Q$ | $\overline{Q}$ |
|:-:|:-:|:-:|
| ขอบ #1 | $1$ | $0$ |
| ขอบ #2 | $0$ | $1$ |
| ขอบ #3 | $1$ | $0$ |
| CLR = 0 | $0$ | $1$ |
| CLR กลับเป็น 1 | $0$ | $1$ |
| ขอบ #4 | $0$ | $1$ |
| PS = 0 | $1$ | $0$ |
| ขอบ #5 | $1$ | $0$ |
| PS กลับเป็น 1 | $1$ | $0$ |

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="464" viewBox="0 0 726 464" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="458"/>
<line x1="254" y1="26" x2="254" y2="458"/>
<line x1="382" y1="26" x2="382" y2="458"/>
<line x1="510" y1="26" x2="510" y2="458"/>
<line x1="638" y1="26" x2="638" y2="458"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,44 L606,44 L606,71.2 L670,71.2 L670,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,104 L430,104 L430,131.2 L478,131.2 L478,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<path d="M62,164 L126,164 L126,191.2 L190,191.2 L190,164 L254,164 L254,191.2 L318,191.2 L318,164 L382,164 L382,191.2 L446,191.2 L446,164 L510,164 L510,191.2 L574,191.2 L574,164 L638,164 L638,191.2 L702,191.2 L702,164 L702,164" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">J</text>
<path d="M62,224 L174,224 L174,251.2 L350,251.2 L350,224 L414,224 L414,251.2 L574,251.2 L574,224 L702,224" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">K</text>
<path d="M62,311.2 L174,311.2 L174,284 L414,284 L414,311.2 L574,311.2 L574,284 L702,284" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="363.6" text-anchor="end">Q</text>
<path d="M62,371.2 L126,371.2 L126,344 L254,344 L254,371.2 L382,371.2 L382,344 L430,344 L430,371.2 L606,371.2 L606,344 L702,344" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="423.6" text-anchor="end">Q</text>
<line x1="38" y1="408.6" x2="50" y2="408.6" stroke="currentColor" stroke-width="1.4"/>
<path d="M62,404 L126,404 L126,431.2 L254,431.2 L254,404 L382,404 L382,431.2 L430,431.2 L430,404 L606,404 L606,431.2 L702,431.2" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### เฉลย  JK ฟลิป-ฟลอป ที่มี PS และ CLR ทำงานที่ขอบขาลง (ชุดสัญญาณที่ 2) {ff=jk; trig=fall; pins=ps; set=b}

$\mathbf{Sol}^{n}$

ขอบที่ทำงานคือขอบขาลง มี 5 ครั้ง (#1 ถึง #5) อ่านค่า $J$, $K$ ก่อนขอบแต่ละครั้ง แล้วหา $Q$ ใหม่จากตารางการทำงาน PS และ CLR ที่เป็น $0$ ทำงานก่อนเสมอ จึงดูเหตุการณ์ตามลำดับเวลา

- ขอบ #1 : $J=0$, $K=1$ $\Rightarrow$ Reset $\Rightarrow Q = 0$
- ระหว่างขอบ #1 กับ #2 : PS เปลี่ยนเป็น $0$ ทำงานทันที ไม่รอ CLK $\Rightarrow Q = 1, \overline{Q} = 0$
- ระหว่างขอบ #1 กับ #2 : PS กลับเป็น $1$ $\Rightarrow$ $Q$ คงเดิม ($Q = 1$) จนกว่าจะถึงขอบที่ทำงานถัดไป
- ขอบ #2 : $J=1$, $K=1$ $\Rightarrow$ สลับ (Toggle) $\Rightarrow Q = 0$
- ขอบ #3 : $J=1$, $K=1$ $\Rightarrow$ สลับ (Toggle) $\Rightarrow Q = 1$
- ขอบ #4 : $J=1$, $K=0$ $\Rightarrow$ Set $\Rightarrow Q = 1$
- ระหว่างขอบ #4 กับ #5 : CLR เปลี่ยนเป็น $0$ ทำงานทันที ไม่รอ CLK $\Rightarrow Q = 0, \overline{Q} = 1$
- ขอบ #5 : CLR เป็น $0$ อยู่ จึงไม่ดู CLK และอินพุต $\Rightarrow Q = 0$ (ไม่เปลี่ยน)
- หลังขอบ #5 : CLR กลับเป็น $1$ $\Rightarrow$ $Q$ คงเดิม ($Q = 0$) จนกว่าจะถึงขอบที่ทำงานถัดไป

$\mathbf{Ans}\quad \text{รูปคลื่น } Q \text{ และ } \overline{Q} \text{ ตามรูป}$

| เหตุการณ์ | $Q$ | $\overline{Q}$ |
|:-:|:-:|:-:|
| ขอบ #1 | $0$ | $1$ |
| PS = 0 | $1$ | $0$ |
| PS กลับเป็น 1 | $1$ | $0$ |
| ขอบ #2 | $0$ | $1$ |
| ขอบ #3 | $1$ | $0$ |
| ขอบ #4 | $1$ | $0$ |
| CLR = 0 | $0$ | $1$ |
| ขอบ #5 | $0$ | $1$ |
| CLR กลับเป็น 1 | $0$ | $1$ |

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="464" viewBox="0 0 726 464" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="458"/>
<line x1="254" y1="26" x2="254" y2="458"/>
<line x1="382" y1="26" x2="382" y2="458"/>
<line x1="510" y1="26" x2="510" y2="458"/>
<line x1="638" y1="26" x2="638" y2="458"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,44 L174,44 L174,71.2 L222,71.2 L222,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,104 L606,104 L606,131.2 L670,131.2 L670,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<path d="M62,164 L126,164 L126,191.2 L190,191.2 L190,164 L254,164 L254,191.2 L318,191.2 L318,164 L382,164 L382,191.2 L446,191.2 L446,164 L510,164 L510,191.2 L574,191.2 L574,164 L638,164 L638,191.2 L702,191.2 L702,164 L702,164" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">J</text>
<path d="M62,251.2 L190,251.2 L190,224 L558,224 L558,251.2 L702,251.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">K</text>
<path d="M62,284 L462,284 L462,311.2 L702,311.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="363.6" text-anchor="end">Q</text>
<path d="M62,371.2 L174,371.2 L174,344 L254,344 L254,371.2 L382,371.2 L382,344 L606,344 L606,371.2 L702,371.2" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="423.6" text-anchor="end">Q</text>
<line x1="38" y1="408.6" x2="50" y2="408.6" stroke="currentColor" stroke-width="1.4"/>
<path d="M62,404 L174,404 L174,431.2 L254,431.2 L254,404 L382,404 L382,431.2 L606,431.2 L606,404 L702,404" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### เฉลย  JK ฟลิป-ฟลอป ที่มี PS และ CLR ทำงานที่ขอบขาลง (ชุดสัญญาณที่ 3) {ff=jk; trig=fall; pins=ps; set=c}

$\mathbf{Sol}^{n}$

ขอบที่ทำงานคือขอบขาลง มี 5 ครั้ง (#1 ถึง #5) อ่านค่า $J$, $K$ ก่อนขอบแต่ละครั้ง แล้วหา $Q$ ใหม่จากตารางการทำงาน PS และ CLR ที่เป็น $0$ ทำงานก่อนเสมอ จึงดูเหตุการณ์ตามลำดับเวลา

- ขอบ #1 : $J=1$, $K=1$ $\Rightarrow$ สลับ (Toggle) $\Rightarrow Q = 1$
- ขอบ #2 : $J=0$, $K=0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 1$
- ขอบ #3 : $J=0$, $K=1$ $\Rightarrow$ Reset $\Rightarrow Q = 0$
- ระหว่างขอบ #3 กับ #4 : PS เปลี่ยนเป็น $0$ ทำงานทันที ไม่รอ CLK $\Rightarrow Q = 1, \overline{Q} = 0$
- ขอบ #4 : PS เป็น $0$ อยู่ จึงไม่ดู CLK และอินพุต $\Rightarrow Q = 1$ (ไม่เปลี่ยน)
- ระหว่างขอบ #4 กับ #5 : PS กลับเป็น $1$ $\Rightarrow$ $Q$ คงเดิม ($Q = 1$) จนกว่าจะถึงขอบที่ทำงานถัดไป
- ระหว่างขอบ #4 กับ #5 : CLR เปลี่ยนเป็น $0$ ทำงานทันที ไม่รอ CLK $\Rightarrow Q = 0, \overline{Q} = 1$
- ระหว่างขอบ #4 กับ #5 : CLR กลับเป็น $1$ $\Rightarrow$ $Q$ คงเดิม ($Q = 0$) จนกว่าจะถึงขอบที่ทำงานถัดไป
- ขอบ #5 : $J=1$, $K=1$ $\Rightarrow$ สลับ (Toggle) $\Rightarrow Q = 1$

$\mathbf{Ans}\quad \text{รูปคลื่น } Q \text{ และ } \overline{Q} \text{ ตามรูป}$

| เหตุการณ์ | $Q$ | $\overline{Q}$ |
|:-:|:-:|:-:|
| ขอบ #1 | $1$ | $0$ |
| ขอบ #2 | $1$ | $0$ |
| ขอบ #3 | $0$ | $1$ |
| PS = 0 | $1$ | $0$ |
| ขอบ #4 | $1$ | $0$ |
| PS กลับเป็น 1 | $1$ | $0$ |
| CLR = 0 | $0$ | $1$ |
| CLR กลับเป็น 1 | $0$ | $1$ |
| ขอบ #5 | $1$ | $0$ |

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="464" viewBox="0 0 726 464" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="458"/>
<line x1="254" y1="26" x2="254" y2="458"/>
<line x1="382" y1="26" x2="382" y2="458"/>
<line x1="510" y1="26" x2="510" y2="458"/>
<line x1="638" y1="26" x2="638" y2="458"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,44 L470,44 L470,71.2 L534,71.2 L534,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,104 L550,104 L550,131.2 L614,131.2 L614,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<path d="M62,164 L126,164 L126,191.2 L190,191.2 L190,164 L254,164 L254,191.2 L318,191.2 L318,164 L382,164 L382,191.2 L446,191.2 L446,164 L510,164 L510,191.2 L574,191.2 L574,164 L638,164 L638,191.2 L702,191.2 L702,164 L702,164" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">J</text>
<path d="M62,224 L222,224 L222,251.2 L398,251.2 L398,224 L702,224" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">K</text>
<path d="M62,284 L222,284 L222,311.2 L302,311.2 L302,284 L398,284 L398,311.2 L590,311.2 L590,284 L702,284" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="363.6" text-anchor="end">Q</text>
<path d="M62,371.2 L126,371.2 L126,344 L382,344 L382,371.2 L470,371.2 L470,344 L550,344 L550,371.2 L638,371.2 L638,344 L702,344" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="423.6" text-anchor="end">Q</text>
<line x1="38" y1="408.6" x2="50" y2="408.6" stroke="currentColor" stroke-width="1.4"/>
<path d="M62,404 L126,404 L126,431.2 L382,431.2 L382,404 L470,404 L470,431.2 L550,431.2 L550,404 L638,404 L638,431.2 L702,431.2" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### เฉลย  D ฟลิป-ฟลอป ทำงานที่ขอบขาขึ้น (ชุดสัญญาณที่ 1) {ff=d; trig=rise; pins=none; set=a}

$\mathbf{Sol}^{n}$

ขอบที่ทำงานคือขอบขาขึ้น มี 5 ครั้ง (#1 ถึง #5) อ่านค่า $D$ ก่อนขอบแต่ละครั้ง แล้วหา $Q$ ใหม่จากตารางการทำงาน

- ขอบ #1 : $D=1$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 1$
- ขอบ #2 : $D=0$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 0$
- ขอบ #3 : $D=1$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 1$
- ขอบ #4 : $D=1$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 1$
- ขอบ #5 : $D=0$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 0$

$\mathbf{Ans}\quad Q = 1,\ 0,\ 1,\ 1,\ 0 \text{ หลังขอบที่ 1 ถึง 5 ตามลำดับ}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="284" viewBox="0 0 726 284" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="278"/>
<line x1="254" y1="26" x2="254" y2="278"/>
<line x1="382" y1="26" x2="382" y2="278"/>
<line x1="510" y1="26" x2="510" y2="278"/>
<line x1="638" y1="26" x2="638" y2="278"/>
</g>
<text x="50" y="63.6" text-anchor="end">CLK</text>
<path d="M62,71.2 L126,71.2 L126,44 L190,44 L190,71.2 L254,71.2 L254,44 L318,44 L318,71.2 L382,71.2 L382,44 L446,44 L446,71.2 L510,71.2 L510,44 L574,44 L574,71.2 L638,71.2 L638,44 L702,44 L702,71.2 L702,71.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">D</text>
<path d="M62,104 L174,104 L174,131.2 L350,131.2 L350,104 L574,104 L574,131.2 L702,131.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">Q</text>
<path d="M62,191.2 L126,191.2 L126,164 L254,164 L254,191.2 L382,191.2 L382,164 L638,164 L638,191.2 L702,191.2" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">Q</text>
<line x1="38" y1="228.6" x2="50" y2="228.6" stroke="currentColor" stroke-width="1.4"/>
<path d="M62,224 L126,224 L126,251.2 L254,251.2 L254,224 L382,224 L382,251.2 L638,251.2 L638,224 L702,224" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### เฉลย  D ฟลิป-ฟลอป ทำงานที่ขอบขาขึ้น (ชุดสัญญาณที่ 2) {ff=d; trig=rise; pins=none; set=b}

$\mathbf{Sol}^{n}$

ขอบที่ทำงานคือขอบขาขึ้น มี 5 ครั้ง (#1 ถึง #5) อ่านค่า $D$ ก่อนขอบแต่ละครั้ง แล้วหา $Q$ ใหม่จากตารางการทำงาน

- ขอบ #1 : $D=0$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 0$
- ขอบ #2 : $D=1$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 1$
- ขอบ #3 : $D=1$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 1$
- ขอบ #4 : $D=0$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 0$
- ขอบ #5 : $D=1$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 1$

$\mathbf{Ans}\quad Q = 0,\ 1,\ 1,\ 0,\ 1 \text{ หลังขอบที่ 1 ถึง 5 ตามลำดับ}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="284" viewBox="0 0 726 284" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="278"/>
<line x1="254" y1="26" x2="254" y2="278"/>
<line x1="382" y1="26" x2="382" y2="278"/>
<line x1="510" y1="26" x2="510" y2="278"/>
<line x1="638" y1="26" x2="638" y2="278"/>
</g>
<text x="50" y="63.6" text-anchor="end">CLK</text>
<path d="M62,71.2 L126,71.2 L126,44 L190,44 L190,71.2 L254,71.2 L254,44 L318,44 L318,71.2 L382,71.2 L382,44 L446,44 L446,71.2 L510,71.2 L510,44 L574,44 L574,71.2 L638,71.2 L638,44 L702,44 L702,71.2 L702,71.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">D</text>
<path d="M62,131.2 L190,131.2 L190,104 L462,104 L462,131.2 L558,131.2 L558,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">Q</text>
<path d="M62,191.2 L254,191.2 L254,164 L510,164 L510,191.2 L638,191.2 L638,164 L702,164" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">Q</text>
<line x1="38" y1="228.6" x2="50" y2="228.6" stroke="currentColor" stroke-width="1.4"/>
<path d="M62,224 L254,224 L254,251.2 L510,251.2 L510,224 L638,224 L638,251.2 L702,251.2" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### เฉลย  D ฟลิป-ฟลอป ทำงานที่ขอบขาขึ้น (ชุดสัญญาณที่ 3) {ff=d; trig=rise; pins=none; set=c}

$\mathbf{Sol}^{n}$

ขอบที่ทำงานคือขอบขาขึ้น มี 5 ครั้ง (#1 ถึง #5) อ่านค่า $D$ ก่อนขอบแต่ละครั้ง แล้วหา $Q$ ใหม่จากตารางการทำงาน

- ขอบ #1 : $D=1$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 1$
- ขอบ #2 : $D=1$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 1$
- ขอบ #3 : $D=0$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 0$
- ขอบ #4 : $D=1$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 1$
- ขอบ #5 : $D=0$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 0$

$\mathbf{Ans}\quad Q = 1,\ 1,\ 0,\ 1,\ 0 \text{ หลังขอบที่ 1 ถึง 5 ตามลำดับ}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="284" viewBox="0 0 726 284" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="278"/>
<line x1="254" y1="26" x2="254" y2="278"/>
<line x1="382" y1="26" x2="382" y2="278"/>
<line x1="510" y1="26" x2="510" y2="278"/>
<line x1="638" y1="26" x2="638" y2="278"/>
</g>
<text x="50" y="63.6" text-anchor="end">CLK</text>
<path d="M62,71.2 L126,71.2 L126,44 L190,44 L190,71.2 L254,71.2 L254,44 L318,44 L318,71.2 L382,71.2 L382,44 L446,44 L446,71.2 L510,71.2 L510,44 L574,44 L574,71.2 L638,71.2 L638,44 L702,44 L702,71.2 L702,71.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">D</text>
<path d="M62,104 L302,104 L302,131.2 L398,131.2 L398,104 L590,104 L590,131.2 L702,131.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">Q</text>
<path d="M62,191.2 L126,191.2 L126,164 L382,164 L382,191.2 L510,191.2 L510,164 L638,164 L638,191.2 L702,191.2" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">Q</text>
<line x1="38" y1="228.6" x2="50" y2="228.6" stroke="currentColor" stroke-width="1.4"/>
<path d="M62,224 L126,224 L126,251.2 L382,251.2 L382,224 L510,224 L510,251.2 L638,251.2 L638,224 L702,224" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### เฉลย  D ฟลิป-ฟลอป ที่มี PS และ CLR ทำงานที่ขอบขาขึ้น (ชุดสัญญาณที่ 1) {ff=d; trig=rise; pins=ps; set=a}

$\mathbf{Sol}^{n}$

ขอบที่ทำงานคือขอบขาขึ้น มี 5 ครั้ง (#1 ถึง #5) อ่านค่า $D$ ก่อนขอบแต่ละครั้ง แล้วหา $Q$ ใหม่จากตารางการทำงาน PS และ CLR ที่เป็น $0$ ทำงานก่อนเสมอ จึงดูเหตุการณ์ตามลำดับเวลา

- ขอบ #1 : $D=1$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 1$
- ขอบ #2 : $D=0$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 0$
- ระหว่างขอบ #2 กับ #3 : PS เปลี่ยนเป็น $0$ ทำงานทันที ไม่รอ CLK $\Rightarrow Q = 1, \overline{Q} = 0$
- ขอบ #3 : PS เป็น $0$ อยู่ จึงไม่ดู CLK และอินพุต $\Rightarrow Q = 1$ (ไม่เปลี่ยน)
- ระหว่างขอบ #3 กับ #4 : PS กลับเป็น $1$ $\Rightarrow$ $Q$ คงเดิม ($Q = 1$) จนกว่าจะถึงขอบที่ทำงานถัดไป
- ระหว่างขอบ #3 กับ #4 : CLR เปลี่ยนเป็น $0$ ทำงานทันที ไม่รอ CLK $\Rightarrow Q = 0, \overline{Q} = 1$
- ระหว่างขอบ #3 กับ #4 : CLR กลับเป็น $1$ $\Rightarrow$ $Q$ คงเดิม ($Q = 0$) จนกว่าจะถึงขอบที่ทำงานถัดไป
- ขอบ #4 : $D=1$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 1$
- ขอบ #5 : $D=0$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 0$

$\mathbf{Ans}\quad \text{รูปคลื่น } Q \text{ และ } \overline{Q} \text{ ตามรูป}$

| เหตุการณ์ | $Q$ | $\overline{Q}$ |
|:-:|:-:|:-:|
| ขอบ #1 | $1$ | $0$ |
| ขอบ #2 | $0$ | $1$ |
| PS = 0 | $1$ | $0$ |
| ขอบ #3 | $1$ | $0$ |
| PS กลับเป็น 1 | $1$ | $0$ |
| CLR = 0 | $0$ | $1$ |
| CLR กลับเป็น 1 | $0$ | $1$ |
| ขอบ #4 | $1$ | $0$ |
| ขอบ #5 | $0$ | $1$ |

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="404" viewBox="0 0 726 404" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="398"/>
<line x1="254" y1="26" x2="254" y2="398"/>
<line x1="382" y1="26" x2="382" y2="398"/>
<line x1="510" y1="26" x2="510" y2="398"/>
<line x1="638" y1="26" x2="638" y2="398"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,44 L358,44 L358,71.2 L422,71.2 L422,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,104 L438,104 L438,131.2 L486,131.2 L486,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<path d="M62,191.2 L126,191.2 L126,164 L190,164 L190,191.2 L254,191.2 L254,164 L318,164 L318,191.2 L382,191.2 L382,164 L446,164 L446,191.2 L510,191.2 L510,164 L574,164 L574,191.2 L638,191.2 L638,164 L702,164 L702,191.2 L702,191.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">D</text>
<path d="M62,224 L174,224 L174,251.2 L350,251.2 L350,224 L574,224 L574,251.2 L702,251.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">Q</text>
<path d="M62,311.2 L126,311.2 L126,284 L254,284 L254,311.2 L358,311.2 L358,284 L438,284 L438,311.2 L510,311.2 L510,284 L638,284 L638,311.2 L702,311.2" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="363.6" text-anchor="end">Q</text>
<line x1="38" y1="348.6" x2="50" y2="348.6" stroke="currentColor" stroke-width="1.4"/>
<path d="M62,344 L126,344 L126,371.2 L254,371.2 L254,344 L358,344 L358,371.2 L438,371.2 L438,344 L510,344 L510,371.2 L638,371.2 L638,344 L702,344" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### เฉลย  D ฟลิป-ฟลอป ที่มี PS และ CLR ทำงานที่ขอบขาขึ้น (ชุดสัญญาณที่ 2) {ff=d; trig=rise; pins=ps; set=b}

$\mathbf{Sol}^{n}$

ขอบที่ทำงานคือขอบขาขึ้น มี 5 ครั้ง (#1 ถึง #5) อ่านค่า $D$ ก่อนขอบแต่ละครั้ง แล้วหา $Q$ ใหม่จากตารางการทำงาน PS และ CLR ที่เป็น $0$ ทำงานก่อนเสมอ จึงดูเหตุการณ์ตามลำดับเวลา

- ขอบ #1 : $D=0$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 0$
- ขอบ #2 : $D=1$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 1$
- ระหว่างขอบ #2 กับ #3 : CLR เปลี่ยนเป็น $0$ ทำงานทันที ไม่รอ CLK $\Rightarrow Q = 0, \overline{Q} = 1$
- ระหว่างขอบ #2 กับ #3 : CLR กลับเป็น $1$ $\Rightarrow$ $Q$ คงเดิม ($Q = 0$) จนกว่าจะถึงขอบที่ทำงานถัดไป
- ขอบ #3 : $D=1$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 1$
- ขอบ #4 : $D=0$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 0$
- ระหว่างขอบ #4 กับ #5 : PS เปลี่ยนเป็น $0$ ทำงานทันที ไม่รอ CLK $\Rightarrow Q = 1, \overline{Q} = 0$
- ขอบ #5 : PS เป็น $0$ อยู่ จึงไม่ดู CLK และอินพุต $\Rightarrow Q = 1$ (ไม่เปลี่ยน)
- หลังขอบ #5 : PS กลับเป็น $1$ $\Rightarrow$ $Q$ คงเดิม ($Q = 1$) จนกว่าจะถึงขอบที่ทำงานถัดไป

$\mathbf{Ans}\quad \text{รูปคลื่น } Q \text{ และ } \overline{Q} \text{ ตามรูป}$

| เหตุการณ์ | $Q$ | $\overline{Q}$ |
|:-:|:-:|:-:|
| ขอบ #1 | $0$ | $1$ |
| ขอบ #2 | $1$ | $0$ |
| CLR = 0 | $0$ | $1$ |
| CLR กลับเป็น 1 | $0$ | $1$ |
| ขอบ #3 | $1$ | $0$ |
| ขอบ #4 | $0$ | $1$ |
| PS = 0 | $1$ | $0$ |
| ขอบ #5 | $1$ | $0$ |
| PS กลับเป็น 1 | $1$ | $0$ |

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="404" viewBox="0 0 726 404" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="398"/>
<line x1="254" y1="26" x2="254" y2="398"/>
<line x1="382" y1="26" x2="382" y2="398"/>
<line x1="510" y1="26" x2="510" y2="398"/>
<line x1="638" y1="26" x2="638" y2="398"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,44 L606,44 L606,71.2 L670,71.2 L670,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,104 L294,104 L294,131.2 L358,131.2 L358,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<path d="M62,191.2 L126,191.2 L126,164 L190,164 L190,191.2 L254,191.2 L254,164 L318,164 L318,191.2 L382,191.2 L382,164 L446,164 L446,191.2 L510,191.2 L510,164 L574,164 L574,191.2 L638,191.2 L638,164 L702,164 L702,191.2 L702,191.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">D</text>
<path d="M62,251.2 L190,251.2 L190,224 L462,224 L462,251.2 L558,251.2 L558,224 L702,224" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">Q</text>
<path d="M62,311.2 L254,311.2 L254,284 L294,284 L294,311.2 L382,311.2 L382,284 L510,284 L510,311.2 L606,311.2 L606,284 L702,284" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="363.6" text-anchor="end">Q</text>
<line x1="38" y1="348.6" x2="50" y2="348.6" stroke="currentColor" stroke-width="1.4"/>
<path d="M62,344 L254,344 L254,371.2 L294,371.2 L294,344 L382,344 L382,371.2 L510,371.2 L510,344 L606,344 L606,371.2 L702,371.2" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### เฉลย  D ฟลิป-ฟลอป ที่มี PS และ CLR ทำงานที่ขอบขาขึ้น (ชุดสัญญาณที่ 3) {ff=d; trig=rise; pins=ps; set=c}

$\mathbf{Sol}^{n}$

ขอบที่ทำงานคือขอบขาขึ้น มี 5 ครั้ง (#1 ถึง #5) อ่านค่า $D$ ก่อนขอบแต่ละครั้ง แล้วหา $Q$ ใหม่จากตารางการทำงาน PS และ CLR ที่เป็น $0$ ทำงานก่อนเสมอ จึงดูเหตุการณ์ตามลำดับเวลา

- ขอบ #1 : $D=1$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 1$
- ระหว่างขอบ #1 กับ #2 : CLR เปลี่ยนเป็น $0$ ทำงานทันที ไม่รอ CLK $\Rightarrow Q = 0, \overline{Q} = 1$
- ระหว่างขอบ #1 กับ #2 : CLR กลับเป็น $1$ $\Rightarrow$ $Q$ คงเดิม ($Q = 0$) จนกว่าจะถึงขอบที่ทำงานถัดไป
- ขอบ #2 : $D=1$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 1$
- ขอบ #3 : $D=0$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 0$
- ระหว่างขอบ #3 กับ #4 : PS เปลี่ยนเป็น $0$ ทำงานทันที ไม่รอ CLK $\Rightarrow Q = 1, \overline{Q} = 0$
- ขอบ #4 : PS เป็น $0$ อยู่ จึงไม่ดู CLK และอินพุต $\Rightarrow Q = 1$ (ไม่เปลี่ยน)
- ระหว่างขอบ #4 กับ #5 : PS กลับเป็น $1$ $\Rightarrow$ $Q$ คงเดิม ($Q = 1$) จนกว่าจะถึงขอบที่ทำงานถัดไป
- ขอบ #5 : $D=0$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 0$

$\mathbf{Ans}\quad \text{รูปคลื่น } Q \text{ และ } \overline{Q} \text{ ตามรูป}$

| เหตุการณ์ | $Q$ | $\overline{Q}$ |
|:-:|:-:|:-:|
| ขอบ #1 | $1$ | $0$ |
| CLR = 0 | $0$ | $1$ |
| CLR กลับเป็น 1 | $0$ | $1$ |
| ขอบ #2 | $1$ | $0$ |
| ขอบ #3 | $0$ | $1$ |
| PS = 0 | $1$ | $0$ |
| ขอบ #4 | $1$ | $0$ |
| PS กลับเป็น 1 | $1$ | $0$ |
| ขอบ #5 | $0$ | $1$ |

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="404" viewBox="0 0 726 404" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="398"/>
<line x1="254" y1="26" x2="254" y2="398"/>
<line x1="382" y1="26" x2="382" y2="398"/>
<line x1="510" y1="26" x2="510" y2="398"/>
<line x1="638" y1="26" x2="638" y2="398"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,44 L478,44 L478,71.2 L542,71.2 L542,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,104 L166,104 L166,131.2 L238,131.2 L238,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<path d="M62,191.2 L126,191.2 L126,164 L190,164 L190,191.2 L254,191.2 L254,164 L318,164 L318,191.2 L382,191.2 L382,164 L446,164 L446,191.2 L510,191.2 L510,164 L574,164 L574,191.2 L638,191.2 L638,164 L702,164 L702,191.2 L702,191.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">D</text>
<path d="M62,224 L302,224 L302,251.2 L398,251.2 L398,224 L590,224 L590,251.2 L702,251.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">Q</text>
<path d="M62,311.2 L126,311.2 L126,284 L166,284 L166,311.2 L254,311.2 L254,284 L382,284 L382,311.2 L478,311.2 L478,284 L638,284 L638,311.2 L702,311.2" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="363.6" text-anchor="end">Q</text>
<line x1="38" y1="348.6" x2="50" y2="348.6" stroke="currentColor" stroke-width="1.4"/>
<path d="M62,344 L126,344 L126,371.2 L166,371.2 L166,344 L254,344 L254,371.2 L382,371.2 L382,344 L478,344 L478,371.2 L638,371.2 L638,344 L702,344" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### เฉลย  D ฟลิป-ฟลอป ทำงานที่ขอบขาลง (ชุดสัญญาณที่ 1) {ff=d; trig=fall; pins=none; set=a}

$\mathbf{Sol}^{n}$

ขอบที่ทำงานคือขอบขาลง มี 5 ครั้ง (#1 ถึง #5) อ่านค่า $D$ ก่อนขอบแต่ละครั้ง แล้วหา $Q$ ใหม่จากตารางการทำงาน

- ขอบ #1 : $D=1$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 1$
- ขอบ #2 : $D=0$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 0$
- ขอบ #3 : $D=1$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 1$
- ขอบ #4 : $D=1$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 1$
- ขอบ #5 : $D=0$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 0$

$\mathbf{Ans}\quad Q = 1,\ 0,\ 1,\ 1,\ 0 \text{ หลังขอบที่ 1 ถึง 5 ตามลำดับ}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="284" viewBox="0 0 726 284" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="278"/>
<line x1="254" y1="26" x2="254" y2="278"/>
<line x1="382" y1="26" x2="382" y2="278"/>
<line x1="510" y1="26" x2="510" y2="278"/>
<line x1="638" y1="26" x2="638" y2="278"/>
</g>
<text x="50" y="63.6" text-anchor="end">CLK</text>
<path d="M62,44 L126,44 L126,71.2 L190,71.2 L190,44 L254,44 L254,71.2 L318,71.2 L318,44 L382,44 L382,71.2 L446,71.2 L446,44 L510,44 L510,71.2 L574,71.2 L574,44 L638,44 L638,71.2 L702,71.2 L702,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">D</text>
<path d="M62,104 L174,104 L174,131.2 L350,131.2 L350,104 L574,104 L574,131.2 L702,131.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">Q</text>
<path d="M62,191.2 L126,191.2 L126,164 L254,164 L254,191.2 L382,191.2 L382,164 L638,164 L638,191.2 L702,191.2" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">Q</text>
<line x1="38" y1="228.6" x2="50" y2="228.6" stroke="currentColor" stroke-width="1.4"/>
<path d="M62,224 L126,224 L126,251.2 L254,251.2 L254,224 L382,224 L382,251.2 L638,251.2 L638,224 L702,224" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### เฉลย  D ฟลิป-ฟลอป ทำงานที่ขอบขาลง (ชุดสัญญาณที่ 2) {ff=d; trig=fall; pins=none; set=b}

$\mathbf{Sol}^{n}$

ขอบที่ทำงานคือขอบขาลง มี 5 ครั้ง (#1 ถึง #5) อ่านค่า $D$ ก่อนขอบแต่ละครั้ง แล้วหา $Q$ ใหม่จากตารางการทำงาน

- ขอบ #1 : $D=0$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 0$
- ขอบ #2 : $D=1$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 1$
- ขอบ #3 : $D=1$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 1$
- ขอบ #4 : $D=0$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 0$
- ขอบ #5 : $D=1$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 1$

$\mathbf{Ans}\quad Q = 0,\ 1,\ 1,\ 0,\ 1 \text{ หลังขอบที่ 1 ถึง 5 ตามลำดับ}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="284" viewBox="0 0 726 284" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="278"/>
<line x1="254" y1="26" x2="254" y2="278"/>
<line x1="382" y1="26" x2="382" y2="278"/>
<line x1="510" y1="26" x2="510" y2="278"/>
<line x1="638" y1="26" x2="638" y2="278"/>
</g>
<text x="50" y="63.6" text-anchor="end">CLK</text>
<path d="M62,44 L126,44 L126,71.2 L190,71.2 L190,44 L254,44 L254,71.2 L318,71.2 L318,44 L382,44 L382,71.2 L446,71.2 L446,44 L510,44 L510,71.2 L574,71.2 L574,44 L638,44 L638,71.2 L702,71.2 L702,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">D</text>
<path d="M62,131.2 L190,131.2 L190,104 L462,104 L462,131.2 L558,131.2 L558,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">Q</text>
<path d="M62,191.2 L254,191.2 L254,164 L510,164 L510,191.2 L638,191.2 L638,164 L702,164" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">Q</text>
<line x1="38" y1="228.6" x2="50" y2="228.6" stroke="currentColor" stroke-width="1.4"/>
<path d="M62,224 L254,224 L254,251.2 L510,251.2 L510,224 L638,224 L638,251.2 L702,251.2" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### เฉลย  D ฟลิป-ฟลอป ทำงานที่ขอบขาลง (ชุดสัญญาณที่ 3) {ff=d; trig=fall; pins=none; set=c}

$\mathbf{Sol}^{n}$

ขอบที่ทำงานคือขอบขาลง มี 5 ครั้ง (#1 ถึง #5) อ่านค่า $D$ ก่อนขอบแต่ละครั้ง แล้วหา $Q$ ใหม่จากตารางการทำงาน

- ขอบ #1 : $D=1$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 1$
- ขอบ #2 : $D=1$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 1$
- ขอบ #3 : $D=0$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 0$
- ขอบ #4 : $D=1$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 1$
- ขอบ #5 : $D=0$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 0$

$\mathbf{Ans}\quad Q = 1,\ 1,\ 0,\ 1,\ 0 \text{ หลังขอบที่ 1 ถึง 5 ตามลำดับ}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="284" viewBox="0 0 726 284" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="278"/>
<line x1="254" y1="26" x2="254" y2="278"/>
<line x1="382" y1="26" x2="382" y2="278"/>
<line x1="510" y1="26" x2="510" y2="278"/>
<line x1="638" y1="26" x2="638" y2="278"/>
</g>
<text x="50" y="63.6" text-anchor="end">CLK</text>
<path d="M62,44 L126,44 L126,71.2 L190,71.2 L190,44 L254,44 L254,71.2 L318,71.2 L318,44 L382,44 L382,71.2 L446,71.2 L446,44 L510,44 L510,71.2 L574,71.2 L574,44 L638,44 L638,71.2 L702,71.2 L702,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">D</text>
<path d="M62,104 L302,104 L302,131.2 L398,131.2 L398,104 L590,104 L590,131.2 L702,131.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">Q</text>
<path d="M62,191.2 L126,191.2 L126,164 L382,164 L382,191.2 L510,191.2 L510,164 L638,164 L638,191.2 L702,191.2" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">Q</text>
<line x1="38" y1="228.6" x2="50" y2="228.6" stroke="currentColor" stroke-width="1.4"/>
<path d="M62,224 L126,224 L126,251.2 L382,251.2 L382,224 L510,224 L510,251.2 L638,251.2 L638,224 L702,224" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### เฉลย  D ฟลิป-ฟลอป ที่มี PS และ CLR ทำงานที่ขอบขาลง (ชุดสัญญาณที่ 1) {ff=d; trig=fall; pins=ps; set=a}

$\mathbf{Sol}^{n}$

ขอบที่ทำงานคือขอบขาลง มี 5 ครั้ง (#1 ถึง #5) อ่านค่า $D$ ก่อนขอบแต่ละครั้ง แล้วหา $Q$ ใหม่จากตารางการทำงาน PS และ CLR ที่เป็น $0$ ทำงานก่อนเสมอ จึงดูเหตุการณ์ตามลำดับเวลา

- ขอบ #1 : $D=1$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 1$
- ขอบ #2 : $D=0$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 0$
- ระหว่างขอบ #2 กับ #3 : PS เปลี่ยนเป็น $0$ ทำงานทันที ไม่รอ CLK $\Rightarrow Q = 1, \overline{Q} = 0$
- ขอบ #3 : PS เป็น $0$ อยู่ จึงไม่ดู CLK และอินพุต $\Rightarrow Q = 1$ (ไม่เปลี่ยน)
- ระหว่างขอบ #3 กับ #4 : PS กลับเป็น $1$ $\Rightarrow$ $Q$ คงเดิม ($Q = 1$) จนกว่าจะถึงขอบที่ทำงานถัดไป
- ระหว่างขอบ #3 กับ #4 : CLR เปลี่ยนเป็น $0$ ทำงานทันที ไม่รอ CLK $\Rightarrow Q = 0, \overline{Q} = 1$
- ระหว่างขอบ #3 กับ #4 : CLR กลับเป็น $1$ $\Rightarrow$ $Q$ คงเดิม ($Q = 0$) จนกว่าจะถึงขอบที่ทำงานถัดไป
- ขอบ #4 : $D=1$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 1$
- ขอบ #5 : $D=0$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 0$

$\mathbf{Ans}\quad \text{รูปคลื่น } Q \text{ และ } \overline{Q} \text{ ตามรูป}$

| เหตุการณ์ | $Q$ | $\overline{Q}$ |
|:-:|:-:|:-:|
| ขอบ #1 | $1$ | $0$ |
| ขอบ #2 | $0$ | $1$ |
| PS = 0 | $1$ | $0$ |
| ขอบ #3 | $1$ | $0$ |
| PS กลับเป็น 1 | $1$ | $0$ |
| CLR = 0 | $0$ | $1$ |
| CLR กลับเป็น 1 | $0$ | $1$ |
| ขอบ #4 | $1$ | $0$ |
| ขอบ #5 | $0$ | $1$ |

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="404" viewBox="0 0 726 404" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="398"/>
<line x1="254" y1="26" x2="254" y2="398"/>
<line x1="382" y1="26" x2="382" y2="398"/>
<line x1="510" y1="26" x2="510" y2="398"/>
<line x1="638" y1="26" x2="638" y2="398"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,44 L358,44 L358,71.2 L422,71.2 L422,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,104 L438,104 L438,131.2 L486,131.2 L486,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<path d="M62,164 L126,164 L126,191.2 L190,191.2 L190,164 L254,164 L254,191.2 L318,191.2 L318,164 L382,164 L382,191.2 L446,191.2 L446,164 L510,164 L510,191.2 L574,191.2 L574,164 L638,164 L638,191.2 L702,191.2 L702,164 L702,164" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">D</text>
<path d="M62,224 L174,224 L174,251.2 L350,251.2 L350,224 L574,224 L574,251.2 L702,251.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">Q</text>
<path d="M62,311.2 L126,311.2 L126,284 L254,284 L254,311.2 L358,311.2 L358,284 L438,284 L438,311.2 L510,311.2 L510,284 L638,284 L638,311.2 L702,311.2" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="363.6" text-anchor="end">Q</text>
<line x1="38" y1="348.6" x2="50" y2="348.6" stroke="currentColor" stroke-width="1.4"/>
<path d="M62,344 L126,344 L126,371.2 L254,371.2 L254,344 L358,344 L358,371.2 L438,371.2 L438,344 L510,344 L510,371.2 L638,371.2 L638,344 L702,344" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### เฉลย  D ฟลิป-ฟลอป ที่มี PS และ CLR ทำงานที่ขอบขาลง (ชุดสัญญาณที่ 2) {ff=d; trig=fall; pins=ps; set=b}

$\mathbf{Sol}^{n}$

ขอบที่ทำงานคือขอบขาลง มี 5 ครั้ง (#1 ถึง #5) อ่านค่า $D$ ก่อนขอบแต่ละครั้ง แล้วหา $Q$ ใหม่จากตารางการทำงาน PS และ CLR ที่เป็น $0$ ทำงานก่อนเสมอ จึงดูเหตุการณ์ตามลำดับเวลา

- ขอบ #1 : $D=0$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 0$
- ขอบ #2 : $D=1$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 1$
- ระหว่างขอบ #2 กับ #3 : CLR เปลี่ยนเป็น $0$ ทำงานทันที ไม่รอ CLK $\Rightarrow Q = 0, \overline{Q} = 1$
- ระหว่างขอบ #2 กับ #3 : CLR กลับเป็น $1$ $\Rightarrow$ $Q$ คงเดิม ($Q = 0$) จนกว่าจะถึงขอบที่ทำงานถัดไป
- ขอบ #3 : $D=1$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 1$
- ขอบ #4 : $D=0$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 0$
- ระหว่างขอบ #4 กับ #5 : PS เปลี่ยนเป็น $0$ ทำงานทันที ไม่รอ CLK $\Rightarrow Q = 1, \overline{Q} = 0$
- ขอบ #5 : PS เป็น $0$ อยู่ จึงไม่ดู CLK และอินพุต $\Rightarrow Q = 1$ (ไม่เปลี่ยน)
- หลังขอบ #5 : PS กลับเป็น $1$ $\Rightarrow$ $Q$ คงเดิม ($Q = 1$) จนกว่าจะถึงขอบที่ทำงานถัดไป

$\mathbf{Ans}\quad \text{รูปคลื่น } Q \text{ และ } \overline{Q} \text{ ตามรูป}$

| เหตุการณ์ | $Q$ | $\overline{Q}$ |
|:-:|:-:|:-:|
| ขอบ #1 | $0$ | $1$ |
| ขอบ #2 | $1$ | $0$ |
| CLR = 0 | $0$ | $1$ |
| CLR กลับเป็น 1 | $0$ | $1$ |
| ขอบ #3 | $1$ | $0$ |
| ขอบ #4 | $0$ | $1$ |
| PS = 0 | $1$ | $0$ |
| ขอบ #5 | $1$ | $0$ |
| PS กลับเป็น 1 | $1$ | $0$ |

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="404" viewBox="0 0 726 404" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="398"/>
<line x1="254" y1="26" x2="254" y2="398"/>
<line x1="382" y1="26" x2="382" y2="398"/>
<line x1="510" y1="26" x2="510" y2="398"/>
<line x1="638" y1="26" x2="638" y2="398"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,44 L606,44 L606,71.2 L670,71.2 L670,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,104 L294,104 L294,131.2 L358,131.2 L358,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<path d="M62,164 L126,164 L126,191.2 L190,191.2 L190,164 L254,164 L254,191.2 L318,191.2 L318,164 L382,164 L382,191.2 L446,191.2 L446,164 L510,164 L510,191.2 L574,191.2 L574,164 L638,164 L638,191.2 L702,191.2 L702,164 L702,164" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">D</text>
<path d="M62,251.2 L190,251.2 L190,224 L462,224 L462,251.2 L558,251.2 L558,224 L702,224" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">Q</text>
<path d="M62,311.2 L254,311.2 L254,284 L294,284 L294,311.2 L382,311.2 L382,284 L510,284 L510,311.2 L606,311.2 L606,284 L702,284" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="363.6" text-anchor="end">Q</text>
<line x1="38" y1="348.6" x2="50" y2="348.6" stroke="currentColor" stroke-width="1.4"/>
<path d="M62,344 L254,344 L254,371.2 L294,371.2 L294,344 L382,344 L382,371.2 L510,371.2 L510,344 L606,344 L606,371.2 L702,371.2" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### เฉลย  D ฟลิป-ฟลอป ที่มี PS และ CLR ทำงานที่ขอบขาลง (ชุดสัญญาณที่ 3) {ff=d; trig=fall; pins=ps; set=c}

$\mathbf{Sol}^{n}$

ขอบที่ทำงานคือขอบขาลง มี 5 ครั้ง (#1 ถึง #5) อ่านค่า $D$ ก่อนขอบแต่ละครั้ง แล้วหา $Q$ ใหม่จากตารางการทำงาน PS และ CLR ที่เป็น $0$ ทำงานก่อนเสมอ จึงดูเหตุการณ์ตามลำดับเวลา

- ขอบ #1 : $D=1$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 1$
- ระหว่างขอบ #1 กับ #2 : CLR เปลี่ยนเป็น $0$ ทำงานทันที ไม่รอ CLK $\Rightarrow Q = 0, \overline{Q} = 1$
- ระหว่างขอบ #1 กับ #2 : CLR กลับเป็น $1$ $\Rightarrow$ $Q$ คงเดิม ($Q = 0$) จนกว่าจะถึงขอบที่ทำงานถัดไป
- ขอบ #2 : $D=1$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 1$
- ขอบ #3 : $D=0$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 0$
- ระหว่างขอบ #3 กับ #4 : PS เปลี่ยนเป็น $0$ ทำงานทันที ไม่รอ CLK $\Rightarrow Q = 1, \overline{Q} = 0$
- ขอบ #4 : PS เป็น $0$ อยู่ จึงไม่ดู CLK และอินพุต $\Rightarrow Q = 1$ (ไม่เปลี่ยน)
- ระหว่างขอบ #4 กับ #5 : PS กลับเป็น $1$ $\Rightarrow$ $Q$ คงเดิม ($Q = 1$) จนกว่าจะถึงขอบที่ทำงานถัดไป
- ขอบ #5 : $D=0$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 0$

$\mathbf{Ans}\quad \text{รูปคลื่น } Q \text{ และ } \overline{Q} \text{ ตามรูป}$

| เหตุการณ์ | $Q$ | $\overline{Q}$ |
|:-:|:-:|:-:|
| ขอบ #1 | $1$ | $0$ |
| CLR = 0 | $0$ | $1$ |
| CLR กลับเป็น 1 | $0$ | $1$ |
| ขอบ #2 | $1$ | $0$ |
| ขอบ #3 | $0$ | $1$ |
| PS = 0 | $1$ | $0$ |
| ขอบ #4 | $1$ | $0$ |
| PS กลับเป็น 1 | $1$ | $0$ |
| ขอบ #5 | $0$ | $1$ |

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="404" viewBox="0 0 726 404" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="398"/>
<line x1="254" y1="26" x2="254" y2="398"/>
<line x1="382" y1="26" x2="382" y2="398"/>
<line x1="510" y1="26" x2="510" y2="398"/>
<line x1="638" y1="26" x2="638" y2="398"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,44 L478,44 L478,71.2 L542,71.2 L542,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,104 L166,104 L166,131.2 L238,131.2 L238,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<path d="M62,164 L126,164 L126,191.2 L190,191.2 L190,164 L254,164 L254,191.2 L318,191.2 L318,164 L382,164 L382,191.2 L446,191.2 L446,164 L510,164 L510,191.2 L574,191.2 L574,164 L638,164 L638,191.2 L702,191.2 L702,164 L702,164" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">D</text>
<path d="M62,224 L302,224 L302,251.2 L398,251.2 L398,224 L590,224 L590,251.2 L702,251.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">Q</text>
<path d="M62,311.2 L126,311.2 L126,284 L166,284 L166,311.2 L254,311.2 L254,284 L382,284 L382,311.2 L478,311.2 L478,284 L638,284 L638,311.2 L702,311.2" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="363.6" text-anchor="end">Q</text>
<line x1="38" y1="348.6" x2="50" y2="348.6" stroke="currentColor" stroke-width="1.4"/>
<path d="M62,344 L126,344 L126,371.2 L166,371.2 L166,344 L254,344 L254,371.2 L382,371.2 L382,344 L478,344 L478,371.2 L638,371.2 L638,344 L702,344" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### เฉลย  D ฟลิป-ฟลอป ทำงานที่พัลส์บวก (ชุดสัญญาณที่ 1) {ff=d; trig=hi; pins=none; set=a}

$\mathbf{Sol}^{n}$

ฟลิป-ฟลอปทำงานตลอดช่วงที่ CLK เป็น $1$ (พัลส์ #1 ถึง #5) ในช่วงนั้น $Q$ ตามอินพุตทันทีที่อินพุตเปลี่ยน นอกช่วงนั้น $Q$ คงเดิม แม้อินพุตจะเปลี่ยน

- พัลส์ #1 เริ่ม (CLK เป็น $1$) : $D=1$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 1$
- ในพัลส์ #1 : $D$ เปลี่ยนเป็น $0$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 0$ ทันที (เพราะ CLK ยังทำงานอยู่)
- พัลส์ #2 เริ่ม (CLK เป็น $1$) : $D=1$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 1$
- ในพัลส์ #2 : $D$ เปลี่ยนเป็น $0$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 0$ ทันที (เพราะ CLK ยังทำงานอยู่)
- พัลส์ #3 เริ่ม (CLK เป็น $1$) : $D=1$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 1$
- ในพัลส์ #3 : $D$ เปลี่ยนเป็น $0$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 0$ ทันที (เพราะ CLK ยังทำงานอยู่)
- พัลส์ #4 เริ่ม (CLK เป็น $1$) : $D=1$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 1$
- ในพัลส์ #4 : $D$ เปลี่ยนเป็น $0$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 0$ ทันที (เพราะ CLK ยังทำงานอยู่)
- พัลส์ #5 เริ่ม (CLK เป็น $1$) : $D=1$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 1$
- ในพัลส์ #5 : $D$ เปลี่ยนเป็น $0$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 0$ ทันที (เพราะ CLK ยังทำงานอยู่)

$\mathbf{Ans}\quad \text{รูปคลื่น } Q \text{ และ } \overline{Q} \text{ ตามรูป}$

| เหตุการณ์ | $Q$ | $\overline{Q}$ |
|:-:|:-:|:-:|
| พัลส์ #1 เริ่ม | $1$ | $0$ |
| D เปลี่ยน ในพัลส์ #1 | $0$ | $1$ |
| พัลส์ #2 เริ่ม | $1$ | $0$ |
| D เปลี่ยน ในพัลส์ #2 | $0$ | $1$ |
| พัลส์ #3 เริ่ม | $1$ | $0$ |
| D เปลี่ยน ในพัลส์ #3 | $0$ | $1$ |
| พัลส์ #4 เริ่ม | $1$ | $0$ |
| D เปลี่ยน ในพัลส์ #4 | $0$ | $1$ |
| พัลส์ #5 เริ่ม | $1$ | $0$ |
| D เปลี่ยน ในพัลส์ #5 | $0$ | $1$ |

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="284" viewBox="0 0 726 284" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="278"/>
<line x1="190" y1="26" x2="190" y2="278"/>
<line x1="254" y1="26" x2="254" y2="278"/>
<line x1="318" y1="26" x2="318" y2="278"/>
<line x1="382" y1="26" x2="382" y2="278"/>
<line x1="446" y1="26" x2="446" y2="278"/>
<line x1="510" y1="26" x2="510" y2="278"/>
<line x1="574" y1="26" x2="574" y2="278"/>
<line x1="638" y1="26" x2="638" y2="278"/>
<line x1="702" y1="26" x2="702" y2="278"/>
</g>
<text x="50" y="63.6" text-anchor="end">CLK</text>
<path d="M62,71.2 L126,71.2 L126,44 L190,44 L190,71.2 L254,71.2 L254,44 L318,44 L318,71.2 L382,71.2 L382,44 L446,44 L446,71.2 L510,71.2 L510,44 L574,44 L574,71.2 L638,71.2 L638,44 L702,44 L702,71.2 L702,71.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">D</text>
<path d="M62,131.2 L94,131.2 L94,104 L158,104 L158,131.2 L222,131.2 L222,104 L302,104 L302,131.2 L350,131.2 L350,104 L414,104 L414,131.2 L494,131.2 L494,104 L542,104 L542,131.2 L606,131.2 L606,104 L670,104 L670,131.2 L702,131.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">Q</text>
<path d="M62,191.2 L126,191.2 L126,164 L158,164 L158,191.2 L254,191.2 L254,164 L302,164 L302,191.2 L382,191.2 L382,164 L414,164 L414,191.2 L510,191.2 L510,164 L542,164 L542,191.2 L638,191.2 L638,164 L670,164 L670,191.2 L702,191.2" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">Q</text>
<line x1="38" y1="228.6" x2="50" y2="228.6" stroke="currentColor" stroke-width="1.4"/>
<path d="M62,224 L126,224 L126,251.2 L158,251.2 L158,224 L254,224 L254,251.2 L302,251.2 L302,224 L382,224 L382,251.2 L414,251.2 L414,224 L510,224 L510,251.2 L542,251.2 L542,224 L638,224 L638,251.2 L670,251.2 L670,224 L702,224" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### เฉลย  D ฟลิป-ฟลอป ทำงานที่พัลส์บวก (ชุดสัญญาณที่ 2) {ff=d; trig=hi; pins=none; set=b}

$\mathbf{Sol}^{n}$

ฟลิป-ฟลอปทำงานตลอดช่วงที่ CLK เป็น $1$ (พัลส์ #1 ถึง #5) ในช่วงนั้น $Q$ ตามอินพุตทันทีที่อินพุตเปลี่ยน นอกช่วงนั้น $Q$ คงเดิม แม้อินพุตจะเปลี่ยน

- พัลส์ #1 เริ่ม (CLK เป็น $1$) : $D=1$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 1$
- ในพัลส์ #1 : $D$ เปลี่ยนเป็น $0$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 0$ ทันที (เพราะ CLK ยังทำงานอยู่)
- พัลส์ #2 เริ่ม (CLK เป็น $1$) : $D=1$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 1$
- ในพัลส์ #2 : $D$ เปลี่ยนเป็น $0$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 0$ ทันที (เพราะ CLK ยังทำงานอยู่)
- พัลส์ #3 เริ่ม (CLK เป็น $1$) : $D=1$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 1$
- ในพัลส์ #3 : $D$ เปลี่ยนเป็น $0$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 0$ ทันที (เพราะ CLK ยังทำงานอยู่)
- พัลส์ #4 เริ่ม (CLK เป็น $1$) : $D=1$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 1$
- พัลส์ #5 เริ่ม (CLK เป็น $1$) : $D=0$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 0$
- ในพัลส์ #5 : $D$ เปลี่ยนเป็น $1$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 1$ ทันที (เพราะ CLK ยังทำงานอยู่)

$\mathbf{Ans}\quad \text{รูปคลื่น } Q \text{ และ } \overline{Q} \text{ ตามรูป}$

| เหตุการณ์ | $Q$ | $\overline{Q}$ |
|:-:|:-:|:-:|
| พัลส์ #1 เริ่ม | $1$ | $0$ |
| D เปลี่ยน ในพัลส์ #1 | $0$ | $1$ |
| พัลส์ #2 เริ่ม | $1$ | $0$ |
| D เปลี่ยน ในพัลส์ #2 | $0$ | $1$ |
| พัลส์ #3 เริ่ม | $1$ | $0$ |
| D เปลี่ยน ในพัลส์ #3 | $0$ | $1$ |
| พัลส์ #4 เริ่ม | $1$ | $0$ |
| พัลส์ #5 เริ่ม | $0$ | $1$ |
| D เปลี่ยน ในพัลส์ #5 | $1$ | $0$ |

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="284" viewBox="0 0 726 284" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="278"/>
<line x1="190" y1="26" x2="190" y2="278"/>
<line x1="254" y1="26" x2="254" y2="278"/>
<line x1="318" y1="26" x2="318" y2="278"/>
<line x1="382" y1="26" x2="382" y2="278"/>
<line x1="446" y1="26" x2="446" y2="278"/>
<line x1="510" y1="26" x2="510" y2="278"/>
<line x1="574" y1="26" x2="574" y2="278"/>
<line x1="638" y1="26" x2="638" y2="278"/>
<line x1="702" y1="26" x2="702" y2="278"/>
</g>
<text x="50" y="63.6" text-anchor="end">CLK</text>
<path d="M62,71.2 L126,71.2 L126,44 L190,44 L190,71.2 L254,71.2 L254,44 L318,44 L318,71.2 L382,71.2 L382,44 L446,44 L446,71.2 L510,71.2 L510,44 L574,44 L574,71.2 L638,71.2 L638,44 L702,44 L702,71.2 L702,71.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">D</text>
<path d="M62,104 L142,104 L142,131.2 L206,131.2 L206,104 L270,104 L270,131.2 L334,131.2 L334,104 L398,104 L398,131.2 L478,131.2 L478,104 L590,104 L590,131.2 L654,131.2 L654,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">Q</text>
<path d="M62,191.2 L126,191.2 L126,164 L142,164 L142,191.2 L254,191.2 L254,164 L270,164 L270,191.2 L382,191.2 L382,164 L398,164 L398,191.2 L510,191.2 L510,164 L638,164 L638,191.2 L654,191.2 L654,164 L702,164" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">Q</text>
<line x1="38" y1="228.6" x2="50" y2="228.6" stroke="currentColor" stroke-width="1.4"/>
<path d="M62,224 L126,224 L126,251.2 L142,251.2 L142,224 L254,224 L254,251.2 L270,251.2 L270,224 L382,224 L382,251.2 L398,251.2 L398,224 L510,224 L510,251.2 L638,251.2 L638,224 L654,224 L654,251.2 L702,251.2" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### เฉลย  D ฟลิป-ฟลอป ทำงานที่พัลส์บวก (ชุดสัญญาณที่ 3) {ff=d; trig=hi; pins=none; set=c}

$\mathbf{Sol}^{n}$

ฟลิป-ฟลอปทำงานตลอดช่วงที่ CLK เป็น $1$ (พัลส์ #1 ถึง #5) ในช่วงนั้น $Q$ ตามอินพุตทันทีที่อินพุตเปลี่ยน นอกช่วงนั้น $Q$ คงเดิม แม้อินพุตจะเปลี่ยน

- พัลส์ #1 เริ่ม (CLK เป็น $1$) : $D=0$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 0$
- ในพัลส์ #1 : $D$ เปลี่ยนเป็น $1$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 1$ ทันที (เพราะ CLK ยังทำงานอยู่)
- พัลส์ #2 เริ่ม (CLK เป็น $1$) : $D=0$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 0$
- ในพัลส์ #2 : $D$ เปลี่ยนเป็น $1$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 1$ ทันที (เพราะ CLK ยังทำงานอยู่)
- พัลส์ #3 เริ่ม (CLK เป็น $1$) : $D=0$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 0$
- พัลส์ #4 เริ่ม (CLK เป็น $1$) : $D=1$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 1$
- ในพัลส์ #4 : $D$ เปลี่ยนเป็น $0$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 0$ ทันที (เพราะ CLK ยังทำงานอยู่)
- พัลส์ #5 เริ่ม (CLK เป็น $1$) : $D=1$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 1$
- ในพัลส์ #5 : $D$ เปลี่ยนเป็น $0$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 0$ ทันที (เพราะ CLK ยังทำงานอยู่)

$\mathbf{Ans}\quad \text{รูปคลื่น } Q \text{ และ } \overline{Q} \text{ ตามรูป}$

| เหตุการณ์ | $Q$ | $\overline{Q}$ |
|:-:|:-:|:-:|
| พัลส์ #1 เริ่ม | $0$ | $1$ |
| D เปลี่ยน ในพัลส์ #1 | $1$ | $0$ |
| พัลส์ #2 เริ่ม | $0$ | $1$ |
| D เปลี่ยน ในพัลส์ #2 | $1$ | $0$ |
| พัลส์ #3 เริ่ม | $0$ | $1$ |
| พัลส์ #4 เริ่ม | $1$ | $0$ |
| D เปลี่ยน ในพัลส์ #4 | $0$ | $1$ |
| พัลส์ #5 เริ่ม | $1$ | $0$ |
| D เปลี่ยน ในพัลส์ #5 | $0$ | $1$ |

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="284" viewBox="0 0 726 284" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="278"/>
<line x1="190" y1="26" x2="190" y2="278"/>
<line x1="254" y1="26" x2="254" y2="278"/>
<line x1="318" y1="26" x2="318" y2="278"/>
<line x1="382" y1="26" x2="382" y2="278"/>
<line x1="446" y1="26" x2="446" y2="278"/>
<line x1="510" y1="26" x2="510" y2="278"/>
<line x1="574" y1="26" x2="574" y2="278"/>
<line x1="638" y1="26" x2="638" y2="278"/>
<line x1="702" y1="26" x2="702" y2="278"/>
</g>
<text x="50" y="63.6" text-anchor="end">CLK</text>
<path d="M62,71.2 L126,71.2 L126,44 L190,44 L190,71.2 L254,71.2 L254,44 L318,44 L318,71.2 L382,71.2 L382,44 L446,44 L446,71.2 L510,71.2 L510,44 L574,44 L574,71.2 L638,71.2 L638,44 L702,44 L702,71.2 L702,71.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">D</text>
<path d="M62,131.2 L142,131.2 L142,104 L222,104 L222,131.2 L270,131.2 L270,104 L350,104 L350,131.2 L462,131.2 L462,104 L526,104 L526,131.2 L590,131.2 L590,104 L670,104 L670,131.2 L702,131.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">Q</text>
<path d="M62,191.2 L142,191.2 L142,164 L254,164 L254,191.2 L270,191.2 L270,164 L382,164 L382,191.2 L510,191.2 L510,164 L526,164 L526,191.2 L638,191.2 L638,164 L670,164 L670,191.2 L702,191.2" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">Q</text>
<line x1="38" y1="228.6" x2="50" y2="228.6" stroke="currentColor" stroke-width="1.4"/>
<path d="M62,224 L142,224 L142,251.2 L254,251.2 L254,224 L270,224 L270,251.2 L382,251.2 L382,224 L510,224 L510,251.2 L526,251.2 L526,224 L638,224 L638,251.2 L670,251.2 L670,224 L702,224" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### เฉลย  D ฟลิป-ฟลอป ที่มี PS และ CLR ทำงานที่พัลส์บวก (ชุดสัญญาณที่ 1) {ff=d; trig=hi; pins=ps; set=a}

$\mathbf{Sol}^{n}$

ฟลิป-ฟลอปทำงานตลอดช่วงที่ CLK เป็น $1$ (พัลส์ #1 ถึง #5) ในช่วงนั้น $Q$ ตามอินพุตทันทีที่อินพุตเปลี่ยน นอกช่วงนั้น $Q$ คงเดิม แม้อินพุตจะเปลี่ยน PS และ CLR ที่เป็น $0$ ทำงานก่อนเสมอ จึงดูเหตุการณ์ตามลำดับเวลา

- พัลส์ #1 เริ่ม (CLK เป็น $1$) : $D=1$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 1$
- ในพัลส์ #1 : $D$ เปลี่ยนเป็น $0$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 0$ ทันที (เพราะ CLK ยังทำงานอยู่)
- ระหว่างพัลส์ #1 กับ #2 : CLR เปลี่ยนเป็น $0$ ทำงานทันที $\Rightarrow Q = 0, \overline{Q} = 1$
- พัลส์ #2 เริ่ม : CLR เป็น $0$ อยู่ จึงไม่ดูอินพุต $\Rightarrow Q = 0$
- ในพัลส์ #2 : CLR กลับเป็น $1$ $\Rightarrow$ ขณะนี้ CLK ยังทำงานอยู่ $Q$ จึงตามอินพุตทันที $\Rightarrow Q = 1$
- ในพัลส์ #2 : $D$ เปลี่ยนเป็น $0$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 0$ ทันที (เพราะ CLK ยังทำงานอยู่)
- พัลส์ #3 เริ่ม (CLK เป็น $1$) : $D=1$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 1$
- ในพัลส์ #3 : $D$ เปลี่ยนเป็น $0$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 0$ ทันที (เพราะ CLK ยังทำงานอยู่)
- ในพัลส์ #3 : PS เปลี่ยนเป็น $0$ ทำงานทันที $\Rightarrow Q = 1, \overline{Q} = 0$
- ระหว่างพัลส์ #3 กับ #4 : PS กลับเป็น $1$ $\Rightarrow$ $Q$ คงเดิม ($Q = 1$) จนกว่าจะถึงพัลส์ถัดไป
- พัลส์ #4 เริ่ม (CLK เป็น $1$) : $D=1$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 1$
- ในพัลส์ #4 : $D$ เปลี่ยนเป็น $0$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 0$ ทันที (เพราะ CLK ยังทำงานอยู่)
- พัลส์ #5 เริ่ม (CLK เป็น $1$) : $D=1$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 1$
- ในพัลส์ #5 : $D$ เปลี่ยนเป็น $0$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 0$ ทันที (เพราะ CLK ยังทำงานอยู่)

$\mathbf{Ans}\quad \text{รูปคลื่น } Q \text{ และ } \overline{Q} \text{ ตามรูป}$

| เหตุการณ์ | $Q$ | $\overline{Q}$ |
|:-:|:-:|:-:|
| พัลส์ #1 เริ่ม | $1$ | $0$ |
| D เปลี่ยน ในพัลส์ #1 | $0$ | $1$ |
| CLR = 0 | $0$ | $1$ |
| พัลส์ #2 เริ่ม | $0$ | $1$ |
| CLR กลับเป็น 1 | $1$ | $0$ |
| D เปลี่ยน ในพัลส์ #2 | $0$ | $1$ |
| พัลส์ #3 เริ่ม | $1$ | $0$ |
| D เปลี่ยน ในพัลส์ #3 | $0$ | $1$ |
| PS = 0 | $1$ | $0$ |
| PS กลับเป็น 1 | $1$ | $0$ |
| พัลส์ #4 เริ่ม | $1$ | $0$ |
| D เปลี่ยน ในพัลส์ #4 | $0$ | $1$ |
| พัลส์ #5 เริ่ม | $1$ | $0$ |
| D เปลี่ยน ในพัลส์ #5 | $0$ | $1$ |

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="404" viewBox="0 0 726 404" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="398"/>
<line x1="190" y1="26" x2="190" y2="398"/>
<line x1="254" y1="26" x2="254" y2="398"/>
<line x1="318" y1="26" x2="318" y2="398"/>
<line x1="382" y1="26" x2="382" y2="398"/>
<line x1="446" y1="26" x2="446" y2="398"/>
<line x1="510" y1="26" x2="510" y2="398"/>
<line x1="574" y1="26" x2="574" y2="398"/>
<line x1="638" y1="26" x2="638" y2="398"/>
<line x1="702" y1="26" x2="702" y2="398"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,44 L430,44 L430,71.2 L478,71.2 L478,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,104 L206,104 L206,131.2 L270,131.2 L270,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<path d="M62,191.2 L126,191.2 L126,164 L190,164 L190,191.2 L254,191.2 L254,164 L318,164 L318,191.2 L382,191.2 L382,164 L446,164 L446,191.2 L510,191.2 L510,164 L574,164 L574,191.2 L638,191.2 L638,164 L702,164 L702,191.2 L702,191.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">D</text>
<path d="M62,251.2 L94,251.2 L94,224 L158,224 L158,251.2 L222,251.2 L222,224 L302,224 L302,251.2 L350,251.2 L350,224 L414,224 L414,251.2 L494,251.2 L494,224 L542,224 L542,251.2 L606,251.2 L606,224 L670,224 L670,251.2 L702,251.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">Q</text>
<path d="M62,311.2 L126,311.2 L126,284 L158,284 L158,311.2 L270,311.2 L270,284 L302,284 L302,311.2 L382,311.2 L382,284 L414,284 L414,311.2 L430,311.2 L430,284 L542,284 L542,311.2 L638,311.2 L638,284 L670,284 L670,311.2 L702,311.2" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="363.6" text-anchor="end">Q</text>
<line x1="38" y1="348.6" x2="50" y2="348.6" stroke="currentColor" stroke-width="1.4"/>
<path d="M62,344 L126,344 L126,371.2 L158,371.2 L158,344 L270,344 L270,371.2 L302,371.2 L302,344 L382,344 L382,371.2 L414,371.2 L414,344 L430,344 L430,371.2 L542,371.2 L542,344 L638,344 L638,371.2 L670,371.2 L670,344 L702,344" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### เฉลย  D ฟลิป-ฟลอป ที่มี PS และ CLR ทำงานที่พัลส์บวก (ชุดสัญญาณที่ 2) {ff=d; trig=hi; pins=ps; set=b}

$\mathbf{Sol}^{n}$

ฟลิป-ฟลอปทำงานตลอดช่วงที่ CLK เป็น $1$ (พัลส์ #1 ถึง #5) ในช่วงนั้น $Q$ ตามอินพุตทันทีที่อินพุตเปลี่ยน นอกช่วงนั้น $Q$ คงเดิม แม้อินพุตจะเปลี่ยน PS และ CLR ที่เป็น $0$ ทำงานก่อนเสมอ จึงดูเหตุการณ์ตามลำดับเวลา

- พัลส์ #1 เริ่ม (CLK เป็น $1$) : $D=1$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 1$
- ในพัลส์ #1 : $D$ เปลี่ยนเป็น $0$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 0$ ทันที (เพราะ CLK ยังทำงานอยู่)
- ในพัลส์ #1 : PS เปลี่ยนเป็น $0$ ทำงานทันที $\Rightarrow Q = 1, \overline{Q} = 0$
- ระหว่างพัลส์ #1 กับ #2 : PS กลับเป็น $1$ $\Rightarrow$ $Q$ คงเดิม ($Q = 1$) จนกว่าจะถึงพัลส์ถัดไป
- พัลส์ #2 เริ่ม (CLK เป็น $1$) : $D=1$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 1$
- ในพัลส์ #2 : $D$ เปลี่ยนเป็น $0$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 0$ ทันที (เพราะ CLK ยังทำงานอยู่)
- พัลส์ #3 เริ่ม (CLK เป็น $1$) : $D=1$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 1$
- ในพัลส์ #3 : $D$ เปลี่ยนเป็น $0$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 0$ ทันที (เพราะ CLK ยังทำงานอยู่)
- พัลส์ #4 เริ่ม (CLK เป็น $1$) : $D=1$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 1$
- ระหว่างพัลส์ #4 กับ #5 : CLR เปลี่ยนเป็น $0$ ทำงานทันที $\Rightarrow Q = 0, \overline{Q} = 1$
- พัลส์ #5 เริ่ม : CLR เป็น $0$ อยู่ จึงไม่ดูอินพุต $\Rightarrow Q = 0$
- ในพัลส์ #5 : CLR กลับเป็น $1$ $\Rightarrow$ ขณะนี้ CLK ยังทำงานอยู่ $Q$ จึงตามอินพุตทันที $\Rightarrow Q = 1$

$\mathbf{Ans}\quad \text{รูปคลื่น } Q \text{ และ } \overline{Q} \text{ ตามรูป}$

| เหตุการณ์ | $Q$ | $\overline{Q}$ |
|:-:|:-:|:-:|
| พัลส์ #1 เริ่ม | $1$ | $0$ |
| D เปลี่ยน ในพัลส์ #1 | $0$ | $1$ |
| PS = 0 | $1$ | $0$ |
| PS กลับเป็น 1 | $1$ | $0$ |
| พัลส์ #2 เริ่ม | $1$ | $0$ |
| D เปลี่ยน ในพัลส์ #2 | $0$ | $1$ |
| พัลส์ #3 เริ่ม | $1$ | $0$ |
| D เปลี่ยน ในพัลส์ #3 | $0$ | $1$ |
| พัลส์ #4 เริ่ม | $1$ | $0$ |
| CLR = 0 | $0$ | $1$ |
| พัลส์ #5 เริ่ม | $0$ | $1$ |
| CLR กลับเป็น 1 | $1$ | $0$ |

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="404" viewBox="0 0 726 404" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="398"/>
<line x1="190" y1="26" x2="190" y2="398"/>
<line x1="254" y1="26" x2="254" y2="398"/>
<line x1="318" y1="26" x2="318" y2="398"/>
<line x1="382" y1="26" x2="382" y2="398"/>
<line x1="446" y1="26" x2="446" y2="398"/>
<line x1="510" y1="26" x2="510" y2="398"/>
<line x1="574" y1="26" x2="574" y2="398"/>
<line x1="638" y1="26" x2="638" y2="398"/>
<line x1="702" y1="26" x2="702" y2="398"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,44 L174,44 L174,71.2 L222,71.2 L222,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,104 L606,104 L606,131.2 L670,131.2 L670,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<path d="M62,191.2 L126,191.2 L126,164 L190,164 L190,191.2 L254,191.2 L254,164 L318,164 L318,191.2 L382,191.2 L382,164 L446,164 L446,191.2 L510,191.2 L510,164 L574,164 L574,191.2 L638,191.2 L638,164 L702,164 L702,191.2 L702,191.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">D</text>
<path d="M62,224 L142,224 L142,251.2 L206,251.2 L206,224 L270,224 L270,251.2 L334,251.2 L334,224 L398,224 L398,251.2 L478,251.2 L478,224 L590,224 L590,251.2 L654,251.2 L654,224 L702,224" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">Q</text>
<path d="M62,311.2 L126,311.2 L126,284 L142,284 L142,311.2 L174,311.2 L174,284 L270,284 L270,311.2 L382,311.2 L382,284 L398,284 L398,311.2 L510,311.2 L510,284 L606,284 L606,311.2 L670,311.2 L670,284 L702,284" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="363.6" text-anchor="end">Q</text>
<line x1="38" y1="348.6" x2="50" y2="348.6" stroke="currentColor" stroke-width="1.4"/>
<path d="M62,344 L126,344 L126,371.2 L142,371.2 L142,344 L174,344 L174,371.2 L270,371.2 L270,344 L382,344 L382,371.2 L398,371.2 L398,344 L510,344 L510,371.2 L606,371.2 L606,344 L670,344 L670,371.2 L702,371.2" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### เฉลย  D ฟลิป-ฟลอป ที่มี PS และ CLR ทำงานที่พัลส์บวก (ชุดสัญญาณที่ 3) {ff=d; trig=hi; pins=ps; set=c}

$\mathbf{Sol}^{n}$

ฟลิป-ฟลอปทำงานตลอดช่วงที่ CLK เป็น $1$ (พัลส์ #1 ถึง #5) ในช่วงนั้น $Q$ ตามอินพุตทันทีที่อินพุตเปลี่ยน นอกช่วงนั้น $Q$ คงเดิม แม้อินพุตจะเปลี่ยน PS และ CLR ที่เป็น $0$ ทำงานก่อนเสมอ จึงดูเหตุการณ์ตามลำดับเวลา

- พัลส์ #1 เริ่ม (CLK เป็น $1$) : $D=0$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 0$
- ในพัลส์ #1 : $D$ เปลี่ยนเป็น $1$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 1$ ทันที (เพราะ CLK ยังทำงานอยู่)
- ระหว่างพัลส์ #1 กับ #2 : CLR เปลี่ยนเป็น $0$ ทำงานทันที $\Rightarrow Q = 0, \overline{Q} = 1$
- พัลส์ #2 เริ่ม : CLR เป็น $0$ อยู่ จึงไม่ดูอินพุต $\Rightarrow Q = 0$
- ในพัลส์ #2 : CLR กลับเป็น $1$ $\Rightarrow$ ขณะนี้ CLK ยังทำงานอยู่ $Q$ จึงตามอินพุตทันที $\Rightarrow Q = 1$
- พัลส์ #3 เริ่ม (CLK เป็น $1$) : $D=0$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 0$
- ในพัลส์ #3 : PS เปลี่ยนเป็น $0$ ทำงานทันที $\Rightarrow Q = 1, \overline{Q} = 0$
- ระหว่างพัลส์ #3 กับ #4 : PS กลับเป็น $1$ $\Rightarrow$ $Q$ คงเดิม ($Q = 1$) จนกว่าจะถึงพัลส์ถัดไป
- พัลส์ #4 เริ่ม (CLK เป็น $1$) : $D=1$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 1$
- ในพัลส์ #4 : $D$ เปลี่ยนเป็น $0$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 0$ ทันที (เพราะ CLK ยังทำงานอยู่)
- พัลส์ #5 เริ่ม (CLK เป็น $1$) : $D=1$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 1$
- ในพัลส์ #5 : $D$ เปลี่ยนเป็น $0$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 0$ ทันที (เพราะ CLK ยังทำงานอยู่)

$\mathbf{Ans}\quad \text{รูปคลื่น } Q \text{ และ } \overline{Q} \text{ ตามรูป}$

| เหตุการณ์ | $Q$ | $\overline{Q}$ |
|:-:|:-:|:-:|
| พัลส์ #1 เริ่ม | $0$ | $1$ |
| D เปลี่ยน ในพัลส์ #1 | $1$ | $0$ |
| CLR = 0 | $0$ | $1$ |
| พัลส์ #2 เริ่ม | $0$ | $1$ |
| CLR กลับเป็น 1 | $1$ | $0$ |
| พัลส์ #3 เริ่ม | $0$ | $1$ |
| PS = 0 | $1$ | $0$ |
| PS กลับเป็น 1 | $1$ | $0$ |
| พัลส์ #4 เริ่ม | $1$ | $0$ |
| D เปลี่ยน ในพัลส์ #4 | $0$ | $1$ |
| พัลส์ #5 เริ่ม | $1$ | $0$ |
| D เปลี่ยน ในพัลส์ #5 | $0$ | $1$ |

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="404" viewBox="0 0 726 404" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="398"/>
<line x1="190" y1="26" x2="190" y2="398"/>
<line x1="254" y1="26" x2="254" y2="398"/>
<line x1="318" y1="26" x2="318" y2="398"/>
<line x1="382" y1="26" x2="382" y2="398"/>
<line x1="446" y1="26" x2="446" y2="398"/>
<line x1="510" y1="26" x2="510" y2="398"/>
<line x1="574" y1="26" x2="574" y2="398"/>
<line x1="638" y1="26" x2="638" y2="398"/>
<line x1="702" y1="26" x2="702" y2="398"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,44 L430,44 L430,71.2 L478,71.2 L478,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,104 L214,104 L214,131.2 L278,131.2 L278,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<path d="M62,191.2 L126,191.2 L126,164 L190,164 L190,191.2 L254,191.2 L254,164 L318,164 L318,191.2 L382,191.2 L382,164 L446,164 L446,191.2 L510,191.2 L510,164 L574,164 L574,191.2 L638,191.2 L638,164 L702,164 L702,191.2 L702,191.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">D</text>
<path d="M62,251.2 L142,251.2 L142,224 L222,224 L222,251.2 L270,251.2 L270,224 L350,224 L350,251.2 L462,251.2 L462,224 L526,224 L526,251.2 L590,251.2 L590,224 L670,224 L670,251.2 L702,251.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">Q</text>
<path d="M62,311.2 L142,311.2 L142,284 L214,284 L214,311.2 L278,311.2 L278,284 L382,284 L382,311.2 L430,311.2 L430,284 L526,284 L526,311.2 L638,311.2 L638,284 L670,284 L670,311.2 L702,311.2" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="363.6" text-anchor="end">Q</text>
<line x1="38" y1="348.6" x2="50" y2="348.6" stroke="currentColor" stroke-width="1.4"/>
<path d="M62,344 L142,344 L142,371.2 L214,371.2 L214,344 L278,344 L278,371.2 L382,371.2 L382,344 L430,344 L430,371.2 L526,371.2 L526,344 L638,344 L638,371.2 L670,371.2 L670,344 L702,344" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### เฉลย  D ฟลิป-ฟลอป ทำงานที่พัลส์ลบ (ชุดสัญญาณที่ 1) {ff=d; trig=lo; pins=none; set=a}

$\mathbf{Sol}^{n}$

ฟลิป-ฟลอปทำงานตลอดช่วงที่ CLK เป็น $0$ (พัลส์ #1 ถึง #5) ในช่วงนั้น $Q$ ตามอินพุตทันทีที่อินพุตเปลี่ยน นอกช่วงนั้น $Q$ คงเดิม แม้อินพุตจะเปลี่ยน

- พัลส์ #1 เริ่ม (CLK เป็น $0$) : $D=1$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 1$
- ในพัลส์ #1 : $D$ เปลี่ยนเป็น $0$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 0$ ทันที (เพราะ CLK ยังทำงานอยู่)
- พัลส์ #2 เริ่ม (CLK เป็น $0$) : $D=1$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 1$
- ในพัลส์ #2 : $D$ เปลี่ยนเป็น $0$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 0$ ทันที (เพราะ CLK ยังทำงานอยู่)
- พัลส์ #3 เริ่ม (CLK เป็น $0$) : $D=1$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 1$
- ในพัลส์ #3 : $D$ เปลี่ยนเป็น $0$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 0$ ทันที (เพราะ CLK ยังทำงานอยู่)
- พัลส์ #4 เริ่ม (CLK เป็น $0$) : $D=1$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 1$
- ในพัลส์ #4 : $D$ เปลี่ยนเป็น $0$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 0$ ทันที (เพราะ CLK ยังทำงานอยู่)
- พัลส์ #5 เริ่ม (CLK เป็น $0$) : $D=1$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 1$
- ในพัลส์ #5 : $D$ เปลี่ยนเป็น $0$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 0$ ทันที (เพราะ CLK ยังทำงานอยู่)

$\mathbf{Ans}\quad \text{รูปคลื่น } Q \text{ และ } \overline{Q} \text{ ตามรูป}$

| เหตุการณ์ | $Q$ | $\overline{Q}$ |
|:-:|:-:|:-:|
| พัลส์ #1 เริ่ม | $1$ | $0$ |
| D เปลี่ยน ในพัลส์ #1 | $0$ | $1$ |
| พัลส์ #2 เริ่ม | $1$ | $0$ |
| D เปลี่ยน ในพัลส์ #2 | $0$ | $1$ |
| พัลส์ #3 เริ่ม | $1$ | $0$ |
| D เปลี่ยน ในพัลส์ #3 | $0$ | $1$ |
| พัลส์ #4 เริ่ม | $1$ | $0$ |
| D เปลี่ยน ในพัลส์ #4 | $0$ | $1$ |
| พัลส์ #5 เริ่ม | $1$ | $0$ |
| D เปลี่ยน ในพัลส์ #5 | $0$ | $1$ |

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="284" viewBox="0 0 726 284" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="278"/>
<line x1="190" y1="26" x2="190" y2="278"/>
<line x1="254" y1="26" x2="254" y2="278"/>
<line x1="318" y1="26" x2="318" y2="278"/>
<line x1="382" y1="26" x2="382" y2="278"/>
<line x1="446" y1="26" x2="446" y2="278"/>
<line x1="510" y1="26" x2="510" y2="278"/>
<line x1="574" y1="26" x2="574" y2="278"/>
<line x1="638" y1="26" x2="638" y2="278"/>
<line x1="702" y1="26" x2="702" y2="278"/>
</g>
<text x="50" y="63.6" text-anchor="end">CLK</text>
<path d="M62,44 L126,44 L126,71.2 L190,71.2 L190,44 L254,44 L254,71.2 L318,71.2 L318,44 L382,44 L382,71.2 L446,71.2 L446,44 L510,44 L510,71.2 L574,71.2 L574,44 L638,44 L638,71.2 L702,71.2 L702,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">D</text>
<path d="M62,131.2 L94,131.2 L94,104 L158,104 L158,131.2 L222,131.2 L222,104 L302,104 L302,131.2 L350,131.2 L350,104 L414,104 L414,131.2 L494,131.2 L494,104 L542,104 L542,131.2 L606,131.2 L606,104 L670,104 L670,131.2 L702,131.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">Q</text>
<path d="M62,191.2 L126,191.2 L126,164 L158,164 L158,191.2 L254,191.2 L254,164 L302,164 L302,191.2 L382,191.2 L382,164 L414,164 L414,191.2 L510,191.2 L510,164 L542,164 L542,191.2 L638,191.2 L638,164 L670,164 L670,191.2 L702,191.2" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">Q</text>
<line x1="38" y1="228.6" x2="50" y2="228.6" stroke="currentColor" stroke-width="1.4"/>
<path d="M62,224 L126,224 L126,251.2 L158,251.2 L158,224 L254,224 L254,251.2 L302,251.2 L302,224 L382,224 L382,251.2 L414,251.2 L414,224 L510,224 L510,251.2 L542,251.2 L542,224 L638,224 L638,251.2 L670,251.2 L670,224 L702,224" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### เฉลย  D ฟลิป-ฟลอป ทำงานที่พัลส์ลบ (ชุดสัญญาณที่ 2) {ff=d; trig=lo; pins=none; set=b}

$\mathbf{Sol}^{n}$

ฟลิป-ฟลอปทำงานตลอดช่วงที่ CLK เป็น $0$ (พัลส์ #1 ถึง #5) ในช่วงนั้น $Q$ ตามอินพุตทันทีที่อินพุตเปลี่ยน นอกช่วงนั้น $Q$ คงเดิม แม้อินพุตจะเปลี่ยน

- พัลส์ #1 เริ่ม (CLK เป็น $0$) : $D=1$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 1$
- ในพัลส์ #1 : $D$ เปลี่ยนเป็น $0$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 0$ ทันที (เพราะ CLK ยังทำงานอยู่)
- พัลส์ #2 เริ่ม (CLK เป็น $0$) : $D=1$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 1$
- ในพัลส์ #2 : $D$ เปลี่ยนเป็น $0$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 0$ ทันที (เพราะ CLK ยังทำงานอยู่)
- พัลส์ #3 เริ่ม (CLK เป็น $0$) : $D=1$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 1$
- ในพัลส์ #3 : $D$ เปลี่ยนเป็น $0$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 0$ ทันที (เพราะ CLK ยังทำงานอยู่)
- พัลส์ #4 เริ่ม (CLK เป็น $0$) : $D=1$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 1$
- พัลส์ #5 เริ่ม (CLK เป็น $0$) : $D=0$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 0$
- ในพัลส์ #5 : $D$ เปลี่ยนเป็น $1$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 1$ ทันที (เพราะ CLK ยังทำงานอยู่)

$\mathbf{Ans}\quad \text{รูปคลื่น } Q \text{ และ } \overline{Q} \text{ ตามรูป}$

| เหตุการณ์ | $Q$ | $\overline{Q}$ |
|:-:|:-:|:-:|
| พัลส์ #1 เริ่ม | $1$ | $0$ |
| D เปลี่ยน ในพัลส์ #1 | $0$ | $1$ |
| พัลส์ #2 เริ่ม | $1$ | $0$ |
| D เปลี่ยน ในพัลส์ #2 | $0$ | $1$ |
| พัลส์ #3 เริ่ม | $1$ | $0$ |
| D เปลี่ยน ในพัลส์ #3 | $0$ | $1$ |
| พัลส์ #4 เริ่ม | $1$ | $0$ |
| พัลส์ #5 เริ่ม | $0$ | $1$ |
| D เปลี่ยน ในพัลส์ #5 | $1$ | $0$ |

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="284" viewBox="0 0 726 284" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="278"/>
<line x1="190" y1="26" x2="190" y2="278"/>
<line x1="254" y1="26" x2="254" y2="278"/>
<line x1="318" y1="26" x2="318" y2="278"/>
<line x1="382" y1="26" x2="382" y2="278"/>
<line x1="446" y1="26" x2="446" y2="278"/>
<line x1="510" y1="26" x2="510" y2="278"/>
<line x1="574" y1="26" x2="574" y2="278"/>
<line x1="638" y1="26" x2="638" y2="278"/>
<line x1="702" y1="26" x2="702" y2="278"/>
</g>
<text x="50" y="63.6" text-anchor="end">CLK</text>
<path d="M62,44 L126,44 L126,71.2 L190,71.2 L190,44 L254,44 L254,71.2 L318,71.2 L318,44 L382,44 L382,71.2 L446,71.2 L446,44 L510,44 L510,71.2 L574,71.2 L574,44 L638,44 L638,71.2 L702,71.2 L702,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">D</text>
<path d="M62,104 L142,104 L142,131.2 L206,131.2 L206,104 L270,104 L270,131.2 L334,131.2 L334,104 L398,104 L398,131.2 L478,131.2 L478,104 L590,104 L590,131.2 L654,131.2 L654,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">Q</text>
<path d="M62,191.2 L126,191.2 L126,164 L142,164 L142,191.2 L254,191.2 L254,164 L270,164 L270,191.2 L382,191.2 L382,164 L398,164 L398,191.2 L510,191.2 L510,164 L638,164 L638,191.2 L654,191.2 L654,164 L702,164" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">Q</text>
<line x1="38" y1="228.6" x2="50" y2="228.6" stroke="currentColor" stroke-width="1.4"/>
<path d="M62,224 L126,224 L126,251.2 L142,251.2 L142,224 L254,224 L254,251.2 L270,251.2 L270,224 L382,224 L382,251.2 L398,251.2 L398,224 L510,224 L510,251.2 L638,251.2 L638,224 L654,224 L654,251.2 L702,251.2" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### เฉลย  D ฟลิป-ฟลอป ทำงานที่พัลส์ลบ (ชุดสัญญาณที่ 3) {ff=d; trig=lo; pins=none; set=c}

$\mathbf{Sol}^{n}$

ฟลิป-ฟลอปทำงานตลอดช่วงที่ CLK เป็น $0$ (พัลส์ #1 ถึง #5) ในช่วงนั้น $Q$ ตามอินพุตทันทีที่อินพุตเปลี่ยน นอกช่วงนั้น $Q$ คงเดิม แม้อินพุตจะเปลี่ยน

- พัลส์ #1 เริ่ม (CLK เป็น $0$) : $D=0$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 0$
- ในพัลส์ #1 : $D$ เปลี่ยนเป็น $1$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 1$ ทันที (เพราะ CLK ยังทำงานอยู่)
- พัลส์ #2 เริ่ม (CLK เป็น $0$) : $D=0$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 0$
- ในพัลส์ #2 : $D$ เปลี่ยนเป็น $1$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 1$ ทันที (เพราะ CLK ยังทำงานอยู่)
- พัลส์ #3 เริ่ม (CLK เป็น $0$) : $D=0$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 0$
- พัลส์ #4 เริ่ม (CLK เป็น $0$) : $D=1$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 1$
- ในพัลส์ #4 : $D$ เปลี่ยนเป็น $0$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 0$ ทันที (เพราะ CLK ยังทำงานอยู่)
- พัลส์ #5 เริ่ม (CLK เป็น $0$) : $D=1$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 1$
- ในพัลส์ #5 : $D$ เปลี่ยนเป็น $0$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 0$ ทันที (เพราะ CLK ยังทำงานอยู่)

$\mathbf{Ans}\quad \text{รูปคลื่น } Q \text{ และ } \overline{Q} \text{ ตามรูป}$

| เหตุการณ์ | $Q$ | $\overline{Q}$ |
|:-:|:-:|:-:|
| พัลส์ #1 เริ่ม | $0$ | $1$ |
| D เปลี่ยน ในพัลส์ #1 | $1$ | $0$ |
| พัลส์ #2 เริ่ม | $0$ | $1$ |
| D เปลี่ยน ในพัลส์ #2 | $1$ | $0$ |
| พัลส์ #3 เริ่ม | $0$ | $1$ |
| พัลส์ #4 เริ่ม | $1$ | $0$ |
| D เปลี่ยน ในพัลส์ #4 | $0$ | $1$ |
| พัลส์ #5 เริ่ม | $1$ | $0$ |
| D เปลี่ยน ในพัลส์ #5 | $0$ | $1$ |

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="284" viewBox="0 0 726 284" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="278"/>
<line x1="190" y1="26" x2="190" y2="278"/>
<line x1="254" y1="26" x2="254" y2="278"/>
<line x1="318" y1="26" x2="318" y2="278"/>
<line x1="382" y1="26" x2="382" y2="278"/>
<line x1="446" y1="26" x2="446" y2="278"/>
<line x1="510" y1="26" x2="510" y2="278"/>
<line x1="574" y1="26" x2="574" y2="278"/>
<line x1="638" y1="26" x2="638" y2="278"/>
<line x1="702" y1="26" x2="702" y2="278"/>
</g>
<text x="50" y="63.6" text-anchor="end">CLK</text>
<path d="M62,44 L126,44 L126,71.2 L190,71.2 L190,44 L254,44 L254,71.2 L318,71.2 L318,44 L382,44 L382,71.2 L446,71.2 L446,44 L510,44 L510,71.2 L574,71.2 L574,44 L638,44 L638,71.2 L702,71.2 L702,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">D</text>
<path d="M62,131.2 L142,131.2 L142,104 L222,104 L222,131.2 L270,131.2 L270,104 L350,104 L350,131.2 L462,131.2 L462,104 L526,104 L526,131.2 L590,131.2 L590,104 L670,104 L670,131.2 L702,131.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">Q</text>
<path d="M62,191.2 L142,191.2 L142,164 L254,164 L254,191.2 L270,191.2 L270,164 L382,164 L382,191.2 L510,191.2 L510,164 L526,164 L526,191.2 L638,191.2 L638,164 L670,164 L670,191.2 L702,191.2" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">Q</text>
<line x1="38" y1="228.6" x2="50" y2="228.6" stroke="currentColor" stroke-width="1.4"/>
<path d="M62,224 L142,224 L142,251.2 L254,251.2 L254,224 L270,224 L270,251.2 L382,251.2 L382,224 L510,224 L510,251.2 L526,251.2 L526,224 L638,224 L638,251.2 L670,251.2 L670,224 L702,224" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### เฉลย  D ฟลิป-ฟลอป ที่มี PS และ CLR ทำงานที่พัลส์ลบ (ชุดสัญญาณที่ 1) {ff=d; trig=lo; pins=ps; set=a}

$\mathbf{Sol}^{n}$

ฟลิป-ฟลอปทำงานตลอดช่วงที่ CLK เป็น $0$ (พัลส์ #1 ถึง #5) ในช่วงนั้น $Q$ ตามอินพุตทันทีที่อินพุตเปลี่ยน นอกช่วงนั้น $Q$ คงเดิม แม้อินพุตจะเปลี่ยน PS และ CLR ที่เป็น $0$ ทำงานก่อนเสมอ จึงดูเหตุการณ์ตามลำดับเวลา

- พัลส์ #1 เริ่ม (CLK เป็น $0$) : $D=1$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 1$
- ในพัลส์ #1 : $D$ เปลี่ยนเป็น $0$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 0$ ทันที (เพราะ CLK ยังทำงานอยู่)
- ระหว่างพัลส์ #1 กับ #2 : CLR เปลี่ยนเป็น $0$ ทำงานทันที $\Rightarrow Q = 0, \overline{Q} = 1$
- พัลส์ #2 เริ่ม : CLR เป็น $0$ อยู่ จึงไม่ดูอินพุต $\Rightarrow Q = 0$
- ในพัลส์ #2 : CLR กลับเป็น $1$ $\Rightarrow$ ขณะนี้ CLK ยังทำงานอยู่ $Q$ จึงตามอินพุตทันที $\Rightarrow Q = 1$
- ในพัลส์ #2 : $D$ เปลี่ยนเป็น $0$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 0$ ทันที (เพราะ CLK ยังทำงานอยู่)
- พัลส์ #3 เริ่ม (CLK เป็น $0$) : $D=1$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 1$
- ในพัลส์ #3 : $D$ เปลี่ยนเป็น $0$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 0$ ทันที (เพราะ CLK ยังทำงานอยู่)
- ในพัลส์ #3 : PS เปลี่ยนเป็น $0$ ทำงานทันที $\Rightarrow Q = 1, \overline{Q} = 0$
- ระหว่างพัลส์ #3 กับ #4 : PS กลับเป็น $1$ $\Rightarrow$ $Q$ คงเดิม ($Q = 1$) จนกว่าจะถึงพัลส์ถัดไป
- พัลส์ #4 เริ่ม (CLK เป็น $0$) : $D=1$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 1$
- ในพัลส์ #4 : $D$ เปลี่ยนเป็น $0$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 0$ ทันที (เพราะ CLK ยังทำงานอยู่)
- พัลส์ #5 เริ่ม (CLK เป็น $0$) : $D=1$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 1$
- ในพัลส์ #5 : $D$ เปลี่ยนเป็น $0$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 0$ ทันที (เพราะ CLK ยังทำงานอยู่)

$\mathbf{Ans}\quad \text{รูปคลื่น } Q \text{ และ } \overline{Q} \text{ ตามรูป}$

| เหตุการณ์ | $Q$ | $\overline{Q}$ |
|:-:|:-:|:-:|
| พัลส์ #1 เริ่ม | $1$ | $0$ |
| D เปลี่ยน ในพัลส์ #1 | $0$ | $1$ |
| CLR = 0 | $0$ | $1$ |
| พัลส์ #2 เริ่ม | $0$ | $1$ |
| CLR กลับเป็น 1 | $1$ | $0$ |
| D เปลี่ยน ในพัลส์ #2 | $0$ | $1$ |
| พัลส์ #3 เริ่ม | $1$ | $0$ |
| D เปลี่ยน ในพัลส์ #3 | $0$ | $1$ |
| PS = 0 | $1$ | $0$ |
| PS กลับเป็น 1 | $1$ | $0$ |
| พัลส์ #4 เริ่ม | $1$ | $0$ |
| D เปลี่ยน ในพัลส์ #4 | $0$ | $1$ |
| พัลส์ #5 เริ่ม | $1$ | $0$ |
| D เปลี่ยน ในพัลส์ #5 | $0$ | $1$ |

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="404" viewBox="0 0 726 404" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="398"/>
<line x1="190" y1="26" x2="190" y2="398"/>
<line x1="254" y1="26" x2="254" y2="398"/>
<line x1="318" y1="26" x2="318" y2="398"/>
<line x1="382" y1="26" x2="382" y2="398"/>
<line x1="446" y1="26" x2="446" y2="398"/>
<line x1="510" y1="26" x2="510" y2="398"/>
<line x1="574" y1="26" x2="574" y2="398"/>
<line x1="638" y1="26" x2="638" y2="398"/>
<line x1="702" y1="26" x2="702" y2="398"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,44 L430,44 L430,71.2 L478,71.2 L478,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,104 L206,104 L206,131.2 L270,131.2 L270,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<path d="M62,164 L126,164 L126,191.2 L190,191.2 L190,164 L254,164 L254,191.2 L318,191.2 L318,164 L382,164 L382,191.2 L446,191.2 L446,164 L510,164 L510,191.2 L574,191.2 L574,164 L638,164 L638,191.2 L702,191.2 L702,164 L702,164" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">D</text>
<path d="M62,251.2 L94,251.2 L94,224 L158,224 L158,251.2 L222,251.2 L222,224 L302,224 L302,251.2 L350,251.2 L350,224 L414,224 L414,251.2 L494,251.2 L494,224 L542,224 L542,251.2 L606,251.2 L606,224 L670,224 L670,251.2 L702,251.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">Q</text>
<path d="M62,311.2 L126,311.2 L126,284 L158,284 L158,311.2 L270,311.2 L270,284 L302,284 L302,311.2 L382,311.2 L382,284 L414,284 L414,311.2 L430,311.2 L430,284 L542,284 L542,311.2 L638,311.2 L638,284 L670,284 L670,311.2 L702,311.2" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="363.6" text-anchor="end">Q</text>
<line x1="38" y1="348.6" x2="50" y2="348.6" stroke="currentColor" stroke-width="1.4"/>
<path d="M62,344 L126,344 L126,371.2 L158,371.2 L158,344 L270,344 L270,371.2 L302,371.2 L302,344 L382,344 L382,371.2 L414,371.2 L414,344 L430,344 L430,371.2 L542,371.2 L542,344 L638,344 L638,371.2 L670,371.2 L670,344 L702,344" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### เฉลย  D ฟลิป-ฟลอป ที่มี PS และ CLR ทำงานที่พัลส์ลบ (ชุดสัญญาณที่ 2) {ff=d; trig=lo; pins=ps; set=b}

$\mathbf{Sol}^{n}$

ฟลิป-ฟลอปทำงานตลอดช่วงที่ CLK เป็น $0$ (พัลส์ #1 ถึง #5) ในช่วงนั้น $Q$ ตามอินพุตทันทีที่อินพุตเปลี่ยน นอกช่วงนั้น $Q$ คงเดิม แม้อินพุตจะเปลี่ยน PS และ CLR ที่เป็น $0$ ทำงานก่อนเสมอ จึงดูเหตุการณ์ตามลำดับเวลา

- พัลส์ #1 เริ่ม (CLK เป็น $0$) : $D=1$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 1$
- ในพัลส์ #1 : $D$ เปลี่ยนเป็น $0$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 0$ ทันที (เพราะ CLK ยังทำงานอยู่)
- ในพัลส์ #1 : PS เปลี่ยนเป็น $0$ ทำงานทันที $\Rightarrow Q = 1, \overline{Q} = 0$
- ระหว่างพัลส์ #1 กับ #2 : PS กลับเป็น $1$ $\Rightarrow$ $Q$ คงเดิม ($Q = 1$) จนกว่าจะถึงพัลส์ถัดไป
- พัลส์ #2 เริ่ม (CLK เป็น $0$) : $D=1$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 1$
- ในพัลส์ #2 : $D$ เปลี่ยนเป็น $0$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 0$ ทันที (เพราะ CLK ยังทำงานอยู่)
- พัลส์ #3 เริ่ม (CLK เป็น $0$) : $D=1$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 1$
- ในพัลส์ #3 : $D$ เปลี่ยนเป็น $0$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 0$ ทันที (เพราะ CLK ยังทำงานอยู่)
- พัลส์ #4 เริ่ม (CLK เป็น $0$) : $D=1$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 1$
- ระหว่างพัลส์ #4 กับ #5 : CLR เปลี่ยนเป็น $0$ ทำงานทันที $\Rightarrow Q = 0, \overline{Q} = 1$
- พัลส์ #5 เริ่ม : CLR เป็น $0$ อยู่ จึงไม่ดูอินพุต $\Rightarrow Q = 0$
- ในพัลส์ #5 : CLR กลับเป็น $1$ $\Rightarrow$ ขณะนี้ CLK ยังทำงานอยู่ $Q$ จึงตามอินพุตทันที $\Rightarrow Q = 1$

$\mathbf{Ans}\quad \text{รูปคลื่น } Q \text{ และ } \overline{Q} \text{ ตามรูป}$

| เหตุการณ์ | $Q$ | $\overline{Q}$ |
|:-:|:-:|:-:|
| พัลส์ #1 เริ่ม | $1$ | $0$ |
| D เปลี่ยน ในพัลส์ #1 | $0$ | $1$ |
| PS = 0 | $1$ | $0$ |
| PS กลับเป็น 1 | $1$ | $0$ |
| พัลส์ #2 เริ่ม | $1$ | $0$ |
| D เปลี่ยน ในพัลส์ #2 | $0$ | $1$ |
| พัลส์ #3 เริ่ม | $1$ | $0$ |
| D เปลี่ยน ในพัลส์ #3 | $0$ | $1$ |
| พัลส์ #4 เริ่ม | $1$ | $0$ |
| CLR = 0 | $0$ | $1$ |
| พัลส์ #5 เริ่ม | $0$ | $1$ |
| CLR กลับเป็น 1 | $1$ | $0$ |

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="404" viewBox="0 0 726 404" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="398"/>
<line x1="190" y1="26" x2="190" y2="398"/>
<line x1="254" y1="26" x2="254" y2="398"/>
<line x1="318" y1="26" x2="318" y2="398"/>
<line x1="382" y1="26" x2="382" y2="398"/>
<line x1="446" y1="26" x2="446" y2="398"/>
<line x1="510" y1="26" x2="510" y2="398"/>
<line x1="574" y1="26" x2="574" y2="398"/>
<line x1="638" y1="26" x2="638" y2="398"/>
<line x1="702" y1="26" x2="702" y2="398"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,44 L174,44 L174,71.2 L222,71.2 L222,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,104 L606,104 L606,131.2 L670,131.2 L670,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<path d="M62,164 L126,164 L126,191.2 L190,191.2 L190,164 L254,164 L254,191.2 L318,191.2 L318,164 L382,164 L382,191.2 L446,191.2 L446,164 L510,164 L510,191.2 L574,191.2 L574,164 L638,164 L638,191.2 L702,191.2 L702,164 L702,164" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">D</text>
<path d="M62,224 L142,224 L142,251.2 L206,251.2 L206,224 L270,224 L270,251.2 L334,251.2 L334,224 L398,224 L398,251.2 L478,251.2 L478,224 L590,224 L590,251.2 L654,251.2 L654,224 L702,224" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">Q</text>
<path d="M62,311.2 L126,311.2 L126,284 L142,284 L142,311.2 L174,311.2 L174,284 L270,284 L270,311.2 L382,311.2 L382,284 L398,284 L398,311.2 L510,311.2 L510,284 L606,284 L606,311.2 L670,311.2 L670,284 L702,284" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="363.6" text-anchor="end">Q</text>
<line x1="38" y1="348.6" x2="50" y2="348.6" stroke="currentColor" stroke-width="1.4"/>
<path d="M62,344 L126,344 L126,371.2 L142,371.2 L142,344 L174,344 L174,371.2 L270,371.2 L270,344 L382,344 L382,371.2 L398,371.2 L398,344 L510,344 L510,371.2 L606,371.2 L606,344 L670,344 L670,371.2 L702,371.2" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### เฉลย  D ฟลิป-ฟลอป ที่มี PS และ CLR ทำงานที่พัลส์ลบ (ชุดสัญญาณที่ 3) {ff=d; trig=lo; pins=ps; set=c}

$\mathbf{Sol}^{n}$

ฟลิป-ฟลอปทำงานตลอดช่วงที่ CLK เป็น $0$ (พัลส์ #1 ถึง #5) ในช่วงนั้น $Q$ ตามอินพุตทันทีที่อินพุตเปลี่ยน นอกช่วงนั้น $Q$ คงเดิม แม้อินพุตจะเปลี่ยน PS และ CLR ที่เป็น $0$ ทำงานก่อนเสมอ จึงดูเหตุการณ์ตามลำดับเวลา

- พัลส์ #1 เริ่ม (CLK เป็น $0$) : $D=0$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 0$
- ในพัลส์ #1 : $D$ เปลี่ยนเป็น $1$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 1$ ทันที (เพราะ CLK ยังทำงานอยู่)
- ระหว่างพัลส์ #1 กับ #2 : CLR เปลี่ยนเป็น $0$ ทำงานทันที $\Rightarrow Q = 0, \overline{Q} = 1$
- พัลส์ #2 เริ่ม : CLR เป็น $0$ อยู่ จึงไม่ดูอินพุต $\Rightarrow Q = 0$
- ในพัลส์ #2 : CLR กลับเป็น $1$ $\Rightarrow$ ขณะนี้ CLK ยังทำงานอยู่ $Q$ จึงตามอินพุตทันที $\Rightarrow Q = 1$
- พัลส์ #3 เริ่ม (CLK เป็น $0$) : $D=0$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 0$
- ในพัลส์ #3 : PS เปลี่ยนเป็น $0$ ทำงานทันที $\Rightarrow Q = 1, \overline{Q} = 0$
- ระหว่างพัลส์ #3 กับ #4 : PS กลับเป็น $1$ $\Rightarrow$ $Q$ คงเดิม ($Q = 1$) จนกว่าจะถึงพัลส์ถัดไป
- พัลส์ #4 เริ่ม (CLK เป็น $0$) : $D=1$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 1$
- ในพัลส์ #4 : $D$ เปลี่ยนเป็น $0$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 0$ ทันที (เพราะ CLK ยังทำงานอยู่)
- พัลส์ #5 เริ่ม (CLK เป็น $0$) : $D=1$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 1$
- ในพัลส์ #5 : $D$ เปลี่ยนเป็น $0$ $\Rightarrow$ ตาม $D$ $\Rightarrow Q = 0$ ทันที (เพราะ CLK ยังทำงานอยู่)

$\mathbf{Ans}\quad \text{รูปคลื่น } Q \text{ และ } \overline{Q} \text{ ตามรูป}$

| เหตุการณ์ | $Q$ | $\overline{Q}$ |
|:-:|:-:|:-:|
| พัลส์ #1 เริ่ม | $0$ | $1$ |
| D เปลี่ยน ในพัลส์ #1 | $1$ | $0$ |
| CLR = 0 | $0$ | $1$ |
| พัลส์ #2 เริ่ม | $0$ | $1$ |
| CLR กลับเป็น 1 | $1$ | $0$ |
| พัลส์ #3 เริ่ม | $0$ | $1$ |
| PS = 0 | $1$ | $0$ |
| PS กลับเป็น 1 | $1$ | $0$ |
| พัลส์ #4 เริ่ม | $1$ | $0$ |
| D เปลี่ยน ในพัลส์ #4 | $0$ | $1$ |
| พัลส์ #5 เริ่ม | $1$ | $0$ |
| D เปลี่ยน ในพัลส์ #5 | $0$ | $1$ |

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="404" viewBox="0 0 726 404" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="398"/>
<line x1="190" y1="26" x2="190" y2="398"/>
<line x1="254" y1="26" x2="254" y2="398"/>
<line x1="318" y1="26" x2="318" y2="398"/>
<line x1="382" y1="26" x2="382" y2="398"/>
<line x1="446" y1="26" x2="446" y2="398"/>
<line x1="510" y1="26" x2="510" y2="398"/>
<line x1="574" y1="26" x2="574" y2="398"/>
<line x1="638" y1="26" x2="638" y2="398"/>
<line x1="702" y1="26" x2="702" y2="398"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,44 L430,44 L430,71.2 L478,71.2 L478,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,104 L214,104 L214,131.2 L278,131.2 L278,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<path d="M62,164 L126,164 L126,191.2 L190,191.2 L190,164 L254,164 L254,191.2 L318,191.2 L318,164 L382,164 L382,191.2 L446,191.2 L446,164 L510,164 L510,191.2 L574,191.2 L574,164 L638,164 L638,191.2 L702,191.2 L702,164 L702,164" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">D</text>
<path d="M62,251.2 L142,251.2 L142,224 L222,224 L222,251.2 L270,251.2 L270,224 L350,224 L350,251.2 L462,251.2 L462,224 L526,224 L526,251.2 L590,251.2 L590,224 L670,224 L670,251.2 L702,251.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">Q</text>
<path d="M62,311.2 L142,311.2 L142,284 L214,284 L214,311.2 L278,311.2 L278,284 L382,284 L382,311.2 L430,311.2 L430,284 L526,284 L526,311.2 L638,311.2 L638,284 L670,284 L670,311.2 L702,311.2" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="363.6" text-anchor="end">Q</text>
<line x1="38" y1="348.6" x2="50" y2="348.6" stroke="currentColor" stroke-width="1.4"/>
<path d="M62,344 L142,344 L142,371.2 L214,371.2 L214,344 L278,344 L278,371.2 L382,371.2 L382,344 L430,344 L430,371.2 L526,371.2 L526,344 L638,344 L638,371.2 L670,371.2 L670,344 L702,344" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### เฉลย  T ฟลิป-ฟลอป ทำงานที่ขอบขาขึ้น (ชุดสัญญาณที่ 1) {ff=t; trig=rise; pins=none; set=a}

$\mathbf{Sol}^{n}$

ขอบที่ทำงานคือขอบขาขึ้น มี 5 ครั้ง (#1 ถึง #5) อ่านค่า $T$ ก่อนขอบแต่ละครั้ง แล้วหา $Q$ ใหม่จากตารางการทำงาน

- ขอบ #1 : $T=1$ $\Rightarrow$ สลับ (Toggle) $\Rightarrow Q = 1$
- ขอบ #2 : $T=1$ $\Rightarrow$ สลับ (Toggle) $\Rightarrow Q = 0$
- ขอบ #3 : $T=0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 0$
- ขอบ #4 : $T=1$ $\Rightarrow$ สลับ (Toggle) $\Rightarrow Q = 1$
- ขอบ #5 : $T=0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 1$

$\mathbf{Ans}\quad Q = 1,\ 0,\ 0,\ 1,\ 1 \text{ หลังขอบที่ 1 ถึง 5 ตามลำดับ}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="284" viewBox="0 0 726 284" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="278"/>
<line x1="254" y1="26" x2="254" y2="278"/>
<line x1="382" y1="26" x2="382" y2="278"/>
<line x1="510" y1="26" x2="510" y2="278"/>
<line x1="638" y1="26" x2="638" y2="278"/>
</g>
<text x="50" y="63.6" text-anchor="end">CLK</text>
<path d="M62,71.2 L126,71.2 L126,44 L190,44 L190,71.2 L254,71.2 L254,44 L318,44 L318,71.2 L382,71.2 L382,44 L446,44 L446,71.2 L510,71.2 L510,44 L574,44 L574,71.2 L638,71.2 L638,44 L702,44 L702,71.2 L702,71.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">T</text>
<path d="M62,104 L350,104 L350,131.2 L414,131.2 L414,104 L574,104 L574,131.2 L702,131.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">Q</text>
<path d="M62,191.2 L126,191.2 L126,164 L254,164 L254,191.2 L510,191.2 L510,164 L702,164" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">Q</text>
<line x1="38" y1="228.6" x2="50" y2="228.6" stroke="currentColor" stroke-width="1.4"/>
<path d="M62,224 L126,224 L126,251.2 L254,251.2 L254,224 L510,224 L510,251.2 L702,251.2" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### เฉลย  T ฟลิป-ฟลอป ทำงานที่ขอบขาขึ้น (ชุดสัญญาณที่ 2) {ff=t; trig=rise; pins=none; set=b}

$\mathbf{Sol}^{n}$

ขอบที่ทำงานคือขอบขาขึ้น มี 5 ครั้ง (#1 ถึง #5) อ่านค่า $T$ ก่อนขอบแต่ละครั้ง แล้วหา $Q$ ใหม่จากตารางการทำงาน

- ขอบ #1 : $T=0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 0$
- ขอบ #2 : $T=1$ $\Rightarrow$ สลับ (Toggle) $\Rightarrow Q = 1$
- ขอบ #3 : $T=1$ $\Rightarrow$ สลับ (Toggle) $\Rightarrow Q = 0$
- ขอบ #4 : $T=1$ $\Rightarrow$ สลับ (Toggle) $\Rightarrow Q = 1$
- ขอบ #5 : $T=0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 1$

$\mathbf{Ans}\quad Q = 0,\ 1,\ 0,\ 1,\ 1 \text{ หลังขอบที่ 1 ถึง 5 ตามลำดับ}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="284" viewBox="0 0 726 284" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="278"/>
<line x1="254" y1="26" x2="254" y2="278"/>
<line x1="382" y1="26" x2="382" y2="278"/>
<line x1="510" y1="26" x2="510" y2="278"/>
<line x1="638" y1="26" x2="638" y2="278"/>
</g>
<text x="50" y="63.6" text-anchor="end">CLK</text>
<path d="M62,71.2 L126,71.2 L126,44 L190,44 L190,71.2 L254,71.2 L254,44 L318,44 L318,71.2 L382,71.2 L382,44 L446,44 L446,71.2 L510,71.2 L510,44 L574,44 L574,71.2 L638,71.2 L638,44 L702,44 L702,71.2 L702,71.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">T</text>
<path d="M62,131.2 L190,131.2 L190,104 L558,104 L558,131.2 L702,131.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">Q</text>
<path d="M62,191.2 L254,191.2 L254,164 L382,164 L382,191.2 L510,191.2 L510,164 L702,164" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">Q</text>
<line x1="38" y1="228.6" x2="50" y2="228.6" stroke="currentColor" stroke-width="1.4"/>
<path d="M62,224 L254,224 L254,251.2 L382,251.2 L382,224 L510,224 L510,251.2 L702,251.2" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### เฉลย  T ฟลิป-ฟลอป ทำงานที่ขอบขาขึ้น (ชุดสัญญาณที่ 3) {ff=t; trig=rise; pins=none; set=c}

$\mathbf{Sol}^{n}$

ขอบที่ทำงานคือขอบขาขึ้น มี 5 ครั้ง (#1 ถึง #5) อ่านค่า $T$ ก่อนขอบแต่ละครั้ง แล้วหา $Q$ ใหม่จากตารางการทำงาน

- ขอบ #1 : $T=1$ $\Rightarrow$ สลับ (Toggle) $\Rightarrow Q = 1$
- ขอบ #2 : $T=0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 1$
- ขอบ #3 : $T=1$ $\Rightarrow$ สลับ (Toggle) $\Rightarrow Q = 0$
- ขอบ #4 : $T=0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 0$
- ขอบ #5 : $T=1$ $\Rightarrow$ สลับ (Toggle) $\Rightarrow Q = 1$

$\mathbf{Ans}\quad Q = 1,\ 1,\ 0,\ 0,\ 1 \text{ หลังขอบที่ 1 ถึง 5 ตามลำดับ}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="284" viewBox="0 0 726 284" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="278"/>
<line x1="254" y1="26" x2="254" y2="278"/>
<line x1="382" y1="26" x2="382" y2="278"/>
<line x1="510" y1="26" x2="510" y2="278"/>
<line x1="638" y1="26" x2="638" y2="278"/>
</g>
<text x="50" y="63.6" text-anchor="end">CLK</text>
<path d="M62,71.2 L126,71.2 L126,44 L190,44 L190,71.2 L254,71.2 L254,44 L318,44 L318,71.2 L382,71.2 L382,44 L446,44 L446,71.2 L510,71.2 L510,44 L574,44 L574,71.2 L638,71.2 L638,44 L702,44 L702,71.2 L702,71.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">T</text>
<path d="M62,104 L222,104 L222,131.2 L302,131.2 L302,104 L398,104 L398,131.2 L590,131.2 L590,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">Q</text>
<path d="M62,191.2 L126,191.2 L126,164 L382,164 L382,191.2 L638,191.2 L638,164 L702,164" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">Q</text>
<line x1="38" y1="228.6" x2="50" y2="228.6" stroke="currentColor" stroke-width="1.4"/>
<path d="M62,224 L126,224 L126,251.2 L382,251.2 L382,224 L638,224 L638,251.2 L702,251.2" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### เฉลย  T ฟลิป-ฟลอป ที่มี PS และ CLR ทำงานที่ขอบขาขึ้น (ชุดสัญญาณที่ 1) {ff=t; trig=rise; pins=ps; set=a}

$\mathbf{Sol}^{n}$

ขอบที่ทำงานคือขอบขาขึ้น มี 5 ครั้ง (#1 ถึง #5) อ่านค่า $T$ ก่อนขอบแต่ละครั้ง แล้วหา $Q$ ใหม่จากตารางการทำงาน PS และ CLR ที่เป็น $0$ ทำงานก่อนเสมอ จึงดูเหตุการณ์ตามลำดับเวลา

- ขอบ #1 : $T=1$ $\Rightarrow$ สลับ (Toggle) $\Rightarrow Q = 1$
- ขอบ #2 : $T=1$ $\Rightarrow$ สลับ (Toggle) $\Rightarrow Q = 0$
- ขอบ #3 : $T=0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 0$
- ระหว่างขอบ #3 กับ #4 : PS เปลี่ยนเป็น $0$ ทำงานทันที ไม่รอ CLK $\Rightarrow Q = 1, \overline{Q} = 0$
- ระหว่างขอบ #3 กับ #4 : PS กลับเป็น $1$ $\Rightarrow$ $Q$ คงเดิม ($Q = 1$) จนกว่าจะถึงขอบที่ทำงานถัดไป
- ขอบ #4 : $T=1$ $\Rightarrow$ สลับ (Toggle) $\Rightarrow Q = 0$
- ระหว่างขอบ #4 กับ #5 : CLR เปลี่ยนเป็น $0$ ทำงานทันที ไม่รอ CLK $\Rightarrow Q = 0, \overline{Q} = 1$
- ขอบ #5 : CLR เป็น $0$ อยู่ จึงไม่ดู CLK และอินพุต $\Rightarrow Q = 0$ (ไม่เปลี่ยน)
- หลังขอบ #5 : CLR กลับเป็น $1$ $\Rightarrow$ $Q$ คงเดิม ($Q = 0$) จนกว่าจะถึงขอบที่ทำงานถัดไป

$\mathbf{Ans}\quad \text{รูปคลื่น } Q \text{ และ } \overline{Q} \text{ ตามรูป}$

| เหตุการณ์ | $Q$ | $\overline{Q}$ |
|:-:|:-:|:-:|
| ขอบ #1 | $1$ | $0$ |
| ขอบ #2 | $0$ | $1$ |
| ขอบ #3 | $0$ | $1$ |
| PS = 0 | $1$ | $0$ |
| PS กลับเป็น 1 | $1$ | $0$ |
| ขอบ #4 | $0$ | $1$ |
| CLR = 0 | $0$ | $1$ |
| ขอบ #5 | $0$ | $1$ |
| CLR กลับเป็น 1 | $0$ | $1$ |

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="404" viewBox="0 0 726 404" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="398"/>
<line x1="254" y1="26" x2="254" y2="398"/>
<line x1="382" y1="26" x2="382" y2="398"/>
<line x1="510" y1="26" x2="510" y2="398"/>
<line x1="638" y1="26" x2="638" y2="398"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,44 L430,44 L430,71.2 L478,71.2 L478,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,104 L606,104 L606,131.2 L670,131.2 L670,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<path d="M62,191.2 L126,191.2 L126,164 L190,164 L190,191.2 L254,191.2 L254,164 L318,164 L318,191.2 L382,191.2 L382,164 L446,164 L446,191.2 L510,191.2 L510,164 L574,164 L574,191.2 L638,191.2 L638,164 L702,164 L702,191.2 L702,191.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">T</text>
<path d="M62,224 L350,224 L350,251.2 L414,251.2 L414,224 L574,224 L574,251.2 L702,251.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">Q</text>
<path d="M62,311.2 L126,311.2 L126,284 L254,284 L254,311.2 L430,311.2 L430,284 L510,284 L510,311.2 L702,311.2" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="363.6" text-anchor="end">Q</text>
<line x1="38" y1="348.6" x2="50" y2="348.6" stroke="currentColor" stroke-width="1.4"/>
<path d="M62,344 L126,344 L126,371.2 L254,371.2 L254,344 L430,344 L430,371.2 L510,371.2 L510,344 L702,344" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### เฉลย  T ฟลิป-ฟลอป ที่มี PS และ CLR ทำงานที่ขอบขาขึ้น (ชุดสัญญาณที่ 2) {ff=t; trig=rise; pins=ps; set=b}

$\mathbf{Sol}^{n}$

ขอบที่ทำงานคือขอบขาขึ้น มี 5 ครั้ง (#1 ถึง #5) อ่านค่า $T$ ก่อนขอบแต่ละครั้ง แล้วหา $Q$ ใหม่จากตารางการทำงาน PS และ CLR ที่เป็น $0$ ทำงานก่อนเสมอ จึงดูเหตุการณ์ตามลำดับเวลา

- ขอบ #1 : $T=0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 0$
- ระหว่างขอบ #1 กับ #2 : PS เปลี่ยนเป็น $0$ ทำงานทันที ไม่รอ CLK $\Rightarrow Q = 1, \overline{Q} = 0$
- ระหว่างขอบ #1 กับ #2 : PS กลับเป็น $1$ $\Rightarrow$ $Q$ คงเดิม ($Q = 1$) จนกว่าจะถึงขอบที่ทำงานถัดไป
- ขอบ #2 : $T=1$ $\Rightarrow$ สลับ (Toggle) $\Rightarrow Q = 0$
- ขอบ #3 : $T=1$ $\Rightarrow$ สลับ (Toggle) $\Rightarrow Q = 1$
- ขอบ #4 : $T=1$ $\Rightarrow$ สลับ (Toggle) $\Rightarrow Q = 0$
- ระหว่างขอบ #4 กับ #5 : CLR เปลี่ยนเป็น $0$ ทำงานทันที ไม่รอ CLK $\Rightarrow Q = 0, \overline{Q} = 1$
- ขอบ #5 : CLR เป็น $0$ อยู่ จึงไม่ดู CLK และอินพุต $\Rightarrow Q = 0$ (ไม่เปลี่ยน)
- หลังขอบ #5 : CLR กลับเป็น $1$ $\Rightarrow$ $Q$ คงเดิม ($Q = 0$) จนกว่าจะถึงขอบที่ทำงานถัดไป

$\mathbf{Ans}\quad \text{รูปคลื่น } Q \text{ และ } \overline{Q} \text{ ตามรูป}$

| เหตุการณ์ | $Q$ | $\overline{Q}$ |
|:-:|:-:|:-:|
| ขอบ #1 | $0$ | $1$ |
| PS = 0 | $1$ | $0$ |
| PS กลับเป็น 1 | $1$ | $0$ |
| ขอบ #2 | $0$ | $1$ |
| ขอบ #3 | $1$ | $0$ |
| ขอบ #4 | $0$ | $1$ |
| CLR = 0 | $0$ | $1$ |
| ขอบ #5 | $0$ | $1$ |
| CLR กลับเป็น 1 | $0$ | $1$ |

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="404" viewBox="0 0 726 404" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="398"/>
<line x1="254" y1="26" x2="254" y2="398"/>
<line x1="382" y1="26" x2="382" y2="398"/>
<line x1="510" y1="26" x2="510" y2="398"/>
<line x1="638" y1="26" x2="638" y2="398"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,44 L174,44 L174,71.2 L222,71.2 L222,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,104 L606,104 L606,131.2 L670,131.2 L670,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<path d="M62,191.2 L126,191.2 L126,164 L190,164 L190,191.2 L254,191.2 L254,164 L318,164 L318,191.2 L382,191.2 L382,164 L446,164 L446,191.2 L510,191.2 L510,164 L574,164 L574,191.2 L638,191.2 L638,164 L702,164 L702,191.2 L702,191.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">T</text>
<path d="M62,251.2 L190,251.2 L190,224 L558,224 L558,251.2 L702,251.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">Q</text>
<path d="M62,311.2 L174,311.2 L174,284 L254,284 L254,311.2 L382,311.2 L382,284 L510,284 L510,311.2 L702,311.2" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="363.6" text-anchor="end">Q</text>
<line x1="38" y1="348.6" x2="50" y2="348.6" stroke="currentColor" stroke-width="1.4"/>
<path d="M62,344 L174,344 L174,371.2 L254,371.2 L254,344 L382,344 L382,371.2 L510,371.2 L510,344 L702,344" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### เฉลย  T ฟลิป-ฟลอป ที่มี PS และ CLR ทำงานที่ขอบขาขึ้น (ชุดสัญญาณที่ 3) {ff=t; trig=rise; pins=ps; set=c}

$\mathbf{Sol}^{n}$

ขอบที่ทำงานคือขอบขาขึ้น มี 5 ครั้ง (#1 ถึง #5) อ่านค่า $T$ ก่อนขอบแต่ละครั้ง แล้วหา $Q$ ใหม่จากตารางการทำงาน PS และ CLR ที่เป็น $0$ ทำงานก่อนเสมอ จึงดูเหตุการณ์ตามลำดับเวลา

- ขอบ #1 : $T=1$ $\Rightarrow$ สลับ (Toggle) $\Rightarrow Q = 1$
- ระหว่างขอบ #1 กับ #2 : CLR เปลี่ยนเป็น $0$ ทำงานทันที ไม่รอ CLK $\Rightarrow Q = 0, \overline{Q} = 1$
- ขอบ #2 : CLR เป็น $0$ อยู่ จึงไม่ดู CLK และอินพุต $\Rightarrow Q = 0$ (ไม่เปลี่ยน)
- ระหว่างขอบ #2 กับ #3 : CLR กลับเป็น $1$ $\Rightarrow$ $Q$ คงเดิม ($Q = 0$) จนกว่าจะถึงขอบที่ทำงานถัดไป
- ระหว่างขอบ #2 กับ #3 : PS เปลี่ยนเป็น $0$ ทำงานทันที ไม่รอ CLK $\Rightarrow Q = 1, \overline{Q} = 0$
- ขอบ #3 : PS เป็น $0$ อยู่ จึงไม่ดู CLK และอินพุต $\Rightarrow Q = 1$ (ไม่เปลี่ยน)
- ระหว่างขอบ #3 กับ #4 : PS กลับเป็น $1$ $\Rightarrow$ $Q$ คงเดิม ($Q = 1$) จนกว่าจะถึงขอบที่ทำงานถัดไป
- ขอบ #4 : $T=0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 1$
- ขอบ #5 : $T=1$ $\Rightarrow$ สลับ (Toggle) $\Rightarrow Q = 0$

$\mathbf{Ans}\quad \text{รูปคลื่น } Q \text{ และ } \overline{Q} \text{ ตามรูป}$

| เหตุการณ์ | $Q$ | $\overline{Q}$ |
|:-:|:-:|:-:|
| ขอบ #1 | $1$ | $0$ |
| CLR = 0 | $0$ | $1$ |
| ขอบ #2 | $0$ | $1$ |
| CLR กลับเป็น 1 | $0$ | $1$ |
| PS = 0 | $1$ | $0$ |
| ขอบ #3 | $1$ | $0$ |
| PS กลับเป็น 1 | $1$ | $0$ |
| ขอบ #4 | $1$ | $0$ |
| ขอบ #5 | $0$ | $1$ |

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="404" viewBox="0 0 726 404" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="398"/>
<line x1="254" y1="26" x2="254" y2="398"/>
<line x1="382" y1="26" x2="382" y2="398"/>
<line x1="510" y1="26" x2="510" y2="398"/>
<line x1="638" y1="26" x2="638" y2="398"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,44 L350,44 L350,71.2 L414,71.2 L414,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,104 L214,104 L214,131.2 L278,131.2 L278,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<path d="M62,191.2 L126,191.2 L126,164 L190,164 L190,191.2 L254,191.2 L254,164 L318,164 L318,191.2 L382,191.2 L382,164 L446,164 L446,191.2 L510,191.2 L510,164 L574,164 L574,191.2 L638,191.2 L638,164 L702,164 L702,191.2 L702,191.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">T</text>
<path d="M62,224 L222,224 L222,251.2 L302,251.2 L302,224 L398,224 L398,251.2 L590,251.2 L590,224 L702,224" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">Q</text>
<path d="M62,311.2 L126,311.2 L126,284 L214,284 L214,311.2 L350,311.2 L350,284 L638,284 L638,311.2 L702,311.2" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="363.6" text-anchor="end">Q</text>
<line x1="38" y1="348.6" x2="50" y2="348.6" stroke="currentColor" stroke-width="1.4"/>
<path d="M62,344 L126,344 L126,371.2 L214,371.2 L214,344 L350,344 L350,371.2 L638,371.2 L638,344 L702,344" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### เฉลย  T ฟลิป-ฟลอป ทำงานที่ขอบขาลง (ชุดสัญญาณที่ 1) {ff=t; trig=fall; pins=none; set=a}

$\mathbf{Sol}^{n}$

ขอบที่ทำงานคือขอบขาลง มี 5 ครั้ง (#1 ถึง #5) อ่านค่า $T$ ก่อนขอบแต่ละครั้ง แล้วหา $Q$ ใหม่จากตารางการทำงาน

- ขอบ #1 : $T=1$ $\Rightarrow$ สลับ (Toggle) $\Rightarrow Q = 1$
- ขอบ #2 : $T=1$ $\Rightarrow$ สลับ (Toggle) $\Rightarrow Q = 0$
- ขอบ #3 : $T=0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 0$
- ขอบ #4 : $T=1$ $\Rightarrow$ สลับ (Toggle) $\Rightarrow Q = 1$
- ขอบ #5 : $T=0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 1$

$\mathbf{Ans}\quad Q = 1,\ 0,\ 0,\ 1,\ 1 \text{ หลังขอบที่ 1 ถึง 5 ตามลำดับ}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="284" viewBox="0 0 726 284" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="278"/>
<line x1="254" y1="26" x2="254" y2="278"/>
<line x1="382" y1="26" x2="382" y2="278"/>
<line x1="510" y1="26" x2="510" y2="278"/>
<line x1="638" y1="26" x2="638" y2="278"/>
</g>
<text x="50" y="63.6" text-anchor="end">CLK</text>
<path d="M62,44 L126,44 L126,71.2 L190,71.2 L190,44 L254,44 L254,71.2 L318,71.2 L318,44 L382,44 L382,71.2 L446,71.2 L446,44 L510,44 L510,71.2 L574,71.2 L574,44 L638,44 L638,71.2 L702,71.2 L702,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">T</text>
<path d="M62,104 L350,104 L350,131.2 L414,131.2 L414,104 L574,104 L574,131.2 L702,131.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">Q</text>
<path d="M62,191.2 L126,191.2 L126,164 L254,164 L254,191.2 L510,191.2 L510,164 L702,164" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">Q</text>
<line x1="38" y1="228.6" x2="50" y2="228.6" stroke="currentColor" stroke-width="1.4"/>
<path d="M62,224 L126,224 L126,251.2 L254,251.2 L254,224 L510,224 L510,251.2 L702,251.2" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### เฉลย  T ฟลิป-ฟลอป ทำงานที่ขอบขาลง (ชุดสัญญาณที่ 2) {ff=t; trig=fall; pins=none; set=b}

$\mathbf{Sol}^{n}$

ขอบที่ทำงานคือขอบขาลง มี 5 ครั้ง (#1 ถึง #5) อ่านค่า $T$ ก่อนขอบแต่ละครั้ง แล้วหา $Q$ ใหม่จากตารางการทำงาน

- ขอบ #1 : $T=0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 0$
- ขอบ #2 : $T=1$ $\Rightarrow$ สลับ (Toggle) $\Rightarrow Q = 1$
- ขอบ #3 : $T=1$ $\Rightarrow$ สลับ (Toggle) $\Rightarrow Q = 0$
- ขอบ #4 : $T=1$ $\Rightarrow$ สลับ (Toggle) $\Rightarrow Q = 1$
- ขอบ #5 : $T=0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 1$

$\mathbf{Ans}\quad Q = 0,\ 1,\ 0,\ 1,\ 1 \text{ หลังขอบที่ 1 ถึง 5 ตามลำดับ}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="284" viewBox="0 0 726 284" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="278"/>
<line x1="254" y1="26" x2="254" y2="278"/>
<line x1="382" y1="26" x2="382" y2="278"/>
<line x1="510" y1="26" x2="510" y2="278"/>
<line x1="638" y1="26" x2="638" y2="278"/>
</g>
<text x="50" y="63.6" text-anchor="end">CLK</text>
<path d="M62,44 L126,44 L126,71.2 L190,71.2 L190,44 L254,44 L254,71.2 L318,71.2 L318,44 L382,44 L382,71.2 L446,71.2 L446,44 L510,44 L510,71.2 L574,71.2 L574,44 L638,44 L638,71.2 L702,71.2 L702,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">T</text>
<path d="M62,131.2 L190,131.2 L190,104 L558,104 L558,131.2 L702,131.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">Q</text>
<path d="M62,191.2 L254,191.2 L254,164 L382,164 L382,191.2 L510,191.2 L510,164 L702,164" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">Q</text>
<line x1="38" y1="228.6" x2="50" y2="228.6" stroke="currentColor" stroke-width="1.4"/>
<path d="M62,224 L254,224 L254,251.2 L382,251.2 L382,224 L510,224 L510,251.2 L702,251.2" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### เฉลย  T ฟลิป-ฟลอป ทำงานที่ขอบขาลง (ชุดสัญญาณที่ 3) {ff=t; trig=fall; pins=none; set=c}

$\mathbf{Sol}^{n}$

ขอบที่ทำงานคือขอบขาลง มี 5 ครั้ง (#1 ถึง #5) อ่านค่า $T$ ก่อนขอบแต่ละครั้ง แล้วหา $Q$ ใหม่จากตารางการทำงาน

- ขอบ #1 : $T=1$ $\Rightarrow$ สลับ (Toggle) $\Rightarrow Q = 1$
- ขอบ #2 : $T=0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 1$
- ขอบ #3 : $T=1$ $\Rightarrow$ สลับ (Toggle) $\Rightarrow Q = 0$
- ขอบ #4 : $T=0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 0$
- ขอบ #5 : $T=1$ $\Rightarrow$ สลับ (Toggle) $\Rightarrow Q = 1$

$\mathbf{Ans}\quad Q = 1,\ 1,\ 0,\ 0,\ 1 \text{ หลังขอบที่ 1 ถึง 5 ตามลำดับ}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="284" viewBox="0 0 726 284" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="278"/>
<line x1="254" y1="26" x2="254" y2="278"/>
<line x1="382" y1="26" x2="382" y2="278"/>
<line x1="510" y1="26" x2="510" y2="278"/>
<line x1="638" y1="26" x2="638" y2="278"/>
</g>
<text x="50" y="63.6" text-anchor="end">CLK</text>
<path d="M62,44 L126,44 L126,71.2 L190,71.2 L190,44 L254,44 L254,71.2 L318,71.2 L318,44 L382,44 L382,71.2 L446,71.2 L446,44 L510,44 L510,71.2 L574,71.2 L574,44 L638,44 L638,71.2 L702,71.2 L702,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">T</text>
<path d="M62,104 L222,104 L222,131.2 L302,131.2 L302,104 L398,104 L398,131.2 L590,131.2 L590,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">Q</text>
<path d="M62,191.2 L126,191.2 L126,164 L382,164 L382,191.2 L638,191.2 L638,164 L702,164" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">Q</text>
<line x1="38" y1="228.6" x2="50" y2="228.6" stroke="currentColor" stroke-width="1.4"/>
<path d="M62,224 L126,224 L126,251.2 L382,251.2 L382,224 L638,224 L638,251.2 L702,251.2" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### เฉลย  T ฟลิป-ฟลอป ที่มี PS และ CLR ทำงานที่ขอบขาลง (ชุดสัญญาณที่ 1) {ff=t; trig=fall; pins=ps; set=a}

$\mathbf{Sol}^{n}$

ขอบที่ทำงานคือขอบขาลง มี 5 ครั้ง (#1 ถึง #5) อ่านค่า $T$ ก่อนขอบแต่ละครั้ง แล้วหา $Q$ ใหม่จากตารางการทำงาน PS และ CLR ที่เป็น $0$ ทำงานก่อนเสมอ จึงดูเหตุการณ์ตามลำดับเวลา

- ขอบ #1 : $T=1$ $\Rightarrow$ สลับ (Toggle) $\Rightarrow Q = 1$
- ขอบ #2 : $T=1$ $\Rightarrow$ สลับ (Toggle) $\Rightarrow Q = 0$
- ขอบ #3 : $T=0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 0$
- ระหว่างขอบ #3 กับ #4 : PS เปลี่ยนเป็น $0$ ทำงานทันที ไม่รอ CLK $\Rightarrow Q = 1, \overline{Q} = 0$
- ระหว่างขอบ #3 กับ #4 : PS กลับเป็น $1$ $\Rightarrow$ $Q$ คงเดิม ($Q = 1$) จนกว่าจะถึงขอบที่ทำงานถัดไป
- ขอบ #4 : $T=1$ $\Rightarrow$ สลับ (Toggle) $\Rightarrow Q = 0$
- ระหว่างขอบ #4 กับ #5 : CLR เปลี่ยนเป็น $0$ ทำงานทันที ไม่รอ CLK $\Rightarrow Q = 0, \overline{Q} = 1$
- ขอบ #5 : CLR เป็น $0$ อยู่ จึงไม่ดู CLK และอินพุต $\Rightarrow Q = 0$ (ไม่เปลี่ยน)
- หลังขอบ #5 : CLR กลับเป็น $1$ $\Rightarrow$ $Q$ คงเดิม ($Q = 0$) จนกว่าจะถึงขอบที่ทำงานถัดไป

$\mathbf{Ans}\quad \text{รูปคลื่น } Q \text{ และ } \overline{Q} \text{ ตามรูป}$

| เหตุการณ์ | $Q$ | $\overline{Q}$ |
|:-:|:-:|:-:|
| ขอบ #1 | $1$ | $0$ |
| ขอบ #2 | $0$ | $1$ |
| ขอบ #3 | $0$ | $1$ |
| PS = 0 | $1$ | $0$ |
| PS กลับเป็น 1 | $1$ | $0$ |
| ขอบ #4 | $0$ | $1$ |
| CLR = 0 | $0$ | $1$ |
| ขอบ #5 | $0$ | $1$ |
| CLR กลับเป็น 1 | $0$ | $1$ |

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="404" viewBox="0 0 726 404" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="398"/>
<line x1="254" y1="26" x2="254" y2="398"/>
<line x1="382" y1="26" x2="382" y2="398"/>
<line x1="510" y1="26" x2="510" y2="398"/>
<line x1="638" y1="26" x2="638" y2="398"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,44 L430,44 L430,71.2 L478,71.2 L478,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,104 L606,104 L606,131.2 L670,131.2 L670,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<path d="M62,164 L126,164 L126,191.2 L190,191.2 L190,164 L254,164 L254,191.2 L318,191.2 L318,164 L382,164 L382,191.2 L446,191.2 L446,164 L510,164 L510,191.2 L574,191.2 L574,164 L638,164 L638,191.2 L702,191.2 L702,164 L702,164" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">T</text>
<path d="M62,224 L350,224 L350,251.2 L414,251.2 L414,224 L574,224 L574,251.2 L702,251.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">Q</text>
<path d="M62,311.2 L126,311.2 L126,284 L254,284 L254,311.2 L430,311.2 L430,284 L510,284 L510,311.2 L702,311.2" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="363.6" text-anchor="end">Q</text>
<line x1="38" y1="348.6" x2="50" y2="348.6" stroke="currentColor" stroke-width="1.4"/>
<path d="M62,344 L126,344 L126,371.2 L254,371.2 L254,344 L430,344 L430,371.2 L510,371.2 L510,344 L702,344" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### เฉลย  T ฟลิป-ฟลอป ที่มี PS และ CLR ทำงานที่ขอบขาลง (ชุดสัญญาณที่ 2) {ff=t; trig=fall; pins=ps; set=b}

$\mathbf{Sol}^{n}$

ขอบที่ทำงานคือขอบขาลง มี 5 ครั้ง (#1 ถึง #5) อ่านค่า $T$ ก่อนขอบแต่ละครั้ง แล้วหา $Q$ ใหม่จากตารางการทำงาน PS และ CLR ที่เป็น $0$ ทำงานก่อนเสมอ จึงดูเหตุการณ์ตามลำดับเวลา

- ขอบ #1 : $T=0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 0$
- ระหว่างขอบ #1 กับ #2 : PS เปลี่ยนเป็น $0$ ทำงานทันที ไม่รอ CLK $\Rightarrow Q = 1, \overline{Q} = 0$
- ระหว่างขอบ #1 กับ #2 : PS กลับเป็น $1$ $\Rightarrow$ $Q$ คงเดิม ($Q = 1$) จนกว่าจะถึงขอบที่ทำงานถัดไป
- ขอบ #2 : $T=1$ $\Rightarrow$ สลับ (Toggle) $\Rightarrow Q = 0$
- ขอบ #3 : $T=1$ $\Rightarrow$ สลับ (Toggle) $\Rightarrow Q = 1$
- ขอบ #4 : $T=1$ $\Rightarrow$ สลับ (Toggle) $\Rightarrow Q = 0$
- ระหว่างขอบ #4 กับ #5 : CLR เปลี่ยนเป็น $0$ ทำงานทันที ไม่รอ CLK $\Rightarrow Q = 0, \overline{Q} = 1$
- ขอบ #5 : CLR เป็น $0$ อยู่ จึงไม่ดู CLK และอินพุต $\Rightarrow Q = 0$ (ไม่เปลี่ยน)
- หลังขอบ #5 : CLR กลับเป็น $1$ $\Rightarrow$ $Q$ คงเดิม ($Q = 0$) จนกว่าจะถึงขอบที่ทำงานถัดไป

$\mathbf{Ans}\quad \text{รูปคลื่น } Q \text{ และ } \overline{Q} \text{ ตามรูป}$

| เหตุการณ์ | $Q$ | $\overline{Q}$ |
|:-:|:-:|:-:|
| ขอบ #1 | $0$ | $1$ |
| PS = 0 | $1$ | $0$ |
| PS กลับเป็น 1 | $1$ | $0$ |
| ขอบ #2 | $0$ | $1$ |
| ขอบ #3 | $1$ | $0$ |
| ขอบ #4 | $0$ | $1$ |
| CLR = 0 | $0$ | $1$ |
| ขอบ #5 | $0$ | $1$ |
| CLR กลับเป็น 1 | $0$ | $1$ |

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="404" viewBox="0 0 726 404" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="398"/>
<line x1="254" y1="26" x2="254" y2="398"/>
<line x1="382" y1="26" x2="382" y2="398"/>
<line x1="510" y1="26" x2="510" y2="398"/>
<line x1="638" y1="26" x2="638" y2="398"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,44 L174,44 L174,71.2 L222,71.2 L222,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,104 L606,104 L606,131.2 L670,131.2 L670,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<path d="M62,164 L126,164 L126,191.2 L190,191.2 L190,164 L254,164 L254,191.2 L318,191.2 L318,164 L382,164 L382,191.2 L446,191.2 L446,164 L510,164 L510,191.2 L574,191.2 L574,164 L638,164 L638,191.2 L702,191.2 L702,164 L702,164" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">T</text>
<path d="M62,251.2 L190,251.2 L190,224 L558,224 L558,251.2 L702,251.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">Q</text>
<path d="M62,311.2 L174,311.2 L174,284 L254,284 L254,311.2 L382,311.2 L382,284 L510,284 L510,311.2 L702,311.2" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="363.6" text-anchor="end">Q</text>
<line x1="38" y1="348.6" x2="50" y2="348.6" stroke="currentColor" stroke-width="1.4"/>
<path d="M62,344 L174,344 L174,371.2 L254,371.2 L254,344 L382,344 L382,371.2 L510,371.2 L510,344 L702,344" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### เฉลย  T ฟลิป-ฟลอป ที่มี PS และ CLR ทำงานที่ขอบขาลง (ชุดสัญญาณที่ 3) {ff=t; trig=fall; pins=ps; set=c}

$\mathbf{Sol}^{n}$

ขอบที่ทำงานคือขอบขาลง มี 5 ครั้ง (#1 ถึง #5) อ่านค่า $T$ ก่อนขอบแต่ละครั้ง แล้วหา $Q$ ใหม่จากตารางการทำงาน PS และ CLR ที่เป็น $0$ ทำงานก่อนเสมอ จึงดูเหตุการณ์ตามลำดับเวลา

- ขอบ #1 : $T=1$ $\Rightarrow$ สลับ (Toggle) $\Rightarrow Q = 1$
- ระหว่างขอบ #1 กับ #2 : CLR เปลี่ยนเป็น $0$ ทำงานทันที ไม่รอ CLK $\Rightarrow Q = 0, \overline{Q} = 1$
- ขอบ #2 : CLR เป็น $0$ อยู่ จึงไม่ดู CLK และอินพุต $\Rightarrow Q = 0$ (ไม่เปลี่ยน)
- ระหว่างขอบ #2 กับ #3 : CLR กลับเป็น $1$ $\Rightarrow$ $Q$ คงเดิม ($Q = 0$) จนกว่าจะถึงขอบที่ทำงานถัดไป
- ระหว่างขอบ #2 กับ #3 : PS เปลี่ยนเป็น $0$ ทำงานทันที ไม่รอ CLK $\Rightarrow Q = 1, \overline{Q} = 0$
- ขอบ #3 : PS เป็น $0$ อยู่ จึงไม่ดู CLK และอินพุต $\Rightarrow Q = 1$ (ไม่เปลี่ยน)
- ระหว่างขอบ #3 กับ #4 : PS กลับเป็น $1$ $\Rightarrow$ $Q$ คงเดิม ($Q = 1$) จนกว่าจะถึงขอบที่ทำงานถัดไป
- ขอบ #4 : $T=0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 1$
- ขอบ #5 : $T=1$ $\Rightarrow$ สลับ (Toggle) $\Rightarrow Q = 0$

$\mathbf{Ans}\quad \text{รูปคลื่น } Q \text{ และ } \overline{Q} \text{ ตามรูป}$

| เหตุการณ์ | $Q$ | $\overline{Q}$ |
|:-:|:-:|:-:|
| ขอบ #1 | $1$ | $0$ |
| CLR = 0 | $0$ | $1$ |
| ขอบ #2 | $0$ | $1$ |
| CLR กลับเป็น 1 | $0$ | $1$ |
| PS = 0 | $1$ | $0$ |
| ขอบ #3 | $1$ | $0$ |
| PS กลับเป็น 1 | $1$ | $0$ |
| ขอบ #4 | $1$ | $0$ |
| ขอบ #5 | $0$ | $1$ |

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="404" viewBox="0 0 726 404" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="398"/>
<line x1="254" y1="26" x2="254" y2="398"/>
<line x1="382" y1="26" x2="382" y2="398"/>
<line x1="510" y1="26" x2="510" y2="398"/>
<line x1="638" y1="26" x2="638" y2="398"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,44 L350,44 L350,71.2 L414,71.2 L414,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,104 L214,104 L214,131.2 L278,131.2 L278,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<path d="M62,164 L126,164 L126,191.2 L190,191.2 L190,164 L254,164 L254,191.2 L318,191.2 L318,164 L382,164 L382,191.2 L446,191.2 L446,164 L510,164 L510,191.2 L574,191.2 L574,164 L638,164 L638,191.2 L702,191.2 L702,164 L702,164" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">T</text>
<path d="M62,224 L222,224 L222,251.2 L302,251.2 L302,224 L398,224 L398,251.2 L590,251.2 L590,224 L702,224" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">Q</text>
<path d="M62,311.2 L126,311.2 L126,284 L214,284 L214,311.2 L350,311.2 L350,284 L638,284 L638,311.2 L702,311.2" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="363.6" text-anchor="end">Q</text>
<line x1="38" y1="348.6" x2="50" y2="348.6" stroke="currentColor" stroke-width="1.4"/>
<path d="M62,344 L126,344 L126,371.2 L214,371.2 L214,344 L350,344 L350,371.2 L638,371.2 L638,344 L702,344" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### เฉลย  Clock RS ฟลิป-ฟลอป ทำงานที่ขอบขาขึ้น (ชุดสัญญาณที่ 1) {ff=rs; trig=rise; pins=none; set=a}

$\mathbf{Sol}^{n}$

ขอบที่ทำงานคือขอบขาขึ้น มี 5 ครั้ง (#1 ถึง #5) อ่านค่า $R$, $S$ ก่อนขอบแต่ละครั้ง แล้วหา $Q$ ใหม่จากตารางการทำงาน

- ขอบ #1 : $R=0$, $S=1$ $\Rightarrow$ Set $\Rightarrow Q = 1$
- ขอบ #2 : $R=0$, $S=0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 1$
- ขอบ #3 : $R=1$, $S=0$ $\Rightarrow$ Reset $\Rightarrow Q = 0$
- ขอบ #4 : $R=0$, $S=1$ $\Rightarrow$ Set $\Rightarrow Q = 1$
- ขอบ #5 : $R=1$, $S=0$ $\Rightarrow$ Reset $\Rightarrow Q = 0$

$\mathbf{Ans}\quad Q = 1,\ 1,\ 0,\ 1,\ 0 \text{ หลังขอบที่ 1 ถึง 5 ตามลำดับ}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="344" viewBox="0 0 726 344" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="338"/>
<line x1="254" y1="26" x2="254" y2="338"/>
<line x1="382" y1="26" x2="382" y2="338"/>
<line x1="510" y1="26" x2="510" y2="338"/>
<line x1="638" y1="26" x2="638" y2="338"/>
</g>
<text x="50" y="63.6" text-anchor="end">CLK</text>
<path d="M62,71.2 L126,71.2 L126,44 L190,44 L190,71.2 L254,71.2 L254,44 L318,44 L318,71.2 L382,71.2 L382,44 L446,44 L446,71.2 L510,71.2 L510,44 L574,44 L574,71.2 L638,71.2 L638,44 L702,44 L702,71.2 L702,71.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">R</text>
<path d="M62,131.2 L350,131.2 L350,104 L414,104 L414,131.2 L574,131.2 L574,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">S</text>
<path d="M62,164 L174,164 L174,191.2 L414,191.2 L414,164 L574,164 L574,191.2 L702,191.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">Q</text>
<path d="M62,251.2 L126,251.2 L126,224 L382,224 L382,251.2 L510,251.2 L510,224 L638,224 L638,251.2 L702,251.2" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">Q</text>
<line x1="38" y1="288.6" x2="50" y2="288.6" stroke="currentColor" stroke-width="1.4"/>
<path d="M62,284 L126,284 L126,311.2 L382,311.2 L382,284 L510,284 L510,311.2 L638,311.2 L638,284 L702,284" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### เฉลย  Clock RS ฟลิป-ฟลอป ทำงานที่ขอบขาขึ้น (ชุดสัญญาณที่ 2) {ff=rs; trig=rise; pins=none; set=b}

$\mathbf{Sol}^{n}$

ขอบที่ทำงานคือขอบขาขึ้น มี 5 ครั้ง (#1 ถึง #5) อ่านค่า $R$, $S$ ก่อนขอบแต่ละครั้ง แล้วหา $Q$ ใหม่จากตารางการทำงาน

- ขอบ #1 : $R=1$, $S=0$ $\Rightarrow$ Reset $\Rightarrow Q = 0$
- ขอบ #2 : $R=0$, $S=1$ $\Rightarrow$ Set $\Rightarrow Q = 1$
- ขอบ #3 : $R=0$, $S=0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 1$
- ขอบ #4 : $R=1$, $S=0$ $\Rightarrow$ Reset $\Rightarrow Q = 0$
- ขอบ #5 : $R=0$, $S=1$ $\Rightarrow$ Set $\Rightarrow Q = 1$

$\mathbf{Ans}\quad Q = 0,\ 1,\ 1,\ 0,\ 1 \text{ หลังขอบที่ 1 ถึง 5 ตามลำดับ}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="344" viewBox="0 0 726 344" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="338"/>
<line x1="254" y1="26" x2="254" y2="338"/>
<line x1="382" y1="26" x2="382" y2="338"/>
<line x1="510" y1="26" x2="510" y2="338"/>
<line x1="638" y1="26" x2="638" y2="338"/>
</g>
<text x="50" y="63.6" text-anchor="end">CLK</text>
<path d="M62,71.2 L126,71.2 L126,44 L190,44 L190,71.2 L254,71.2 L254,44 L318,44 L318,71.2 L382,71.2 L382,44 L446,44 L446,71.2 L510,71.2 L510,44 L574,44 L574,71.2 L638,71.2 L638,44 L702,44 L702,71.2 L702,71.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">R</text>
<path d="M62,104 L190,104 L190,131.2 L462,131.2 L462,104 L558,104 L558,131.2 L702,131.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">S</text>
<path d="M62,191.2 L190,191.2 L190,164 L286,164 L286,191.2 L558,191.2 L558,164 L702,164" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">Q</text>
<path d="M62,251.2 L254,251.2 L254,224 L510,224 L510,251.2 L638,251.2 L638,224 L702,224" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">Q</text>
<line x1="38" y1="288.6" x2="50" y2="288.6" stroke="currentColor" stroke-width="1.4"/>
<path d="M62,284 L254,284 L254,311.2 L510,311.2 L510,284 L638,284 L638,311.2 L702,311.2" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### เฉลย  Clock RS ฟลิป-ฟลอป ทำงานที่ขอบขาขึ้น (ชุดสัญญาณที่ 3) {ff=rs; trig=rise; pins=none; set=c}

$\mathbf{Sol}^{n}$

ขอบที่ทำงานคือขอบขาขึ้น มี 5 ครั้ง (#1 ถึง #5) อ่านค่า $R$, $S$ ก่อนขอบแต่ละครั้ง แล้วหา $Q$ ใหม่จากตารางการทำงาน

- ขอบ #1 : $R=0$, $S=1$ $\Rightarrow$ Set $\Rightarrow Q = 1$
- ขอบ #2 : $R=1$, $S=0$ $\Rightarrow$ Reset $\Rightarrow Q = 0$
- ขอบ #3 : $R=0$, $S=1$ $\Rightarrow$ Set $\Rightarrow Q = 1$
- ขอบ #4 : $R=0$, $S=0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 1$
- ขอบ #5 : $R=1$, $S=0$ $\Rightarrow$ Reset $\Rightarrow Q = 0$

$\mathbf{Ans}\quad Q = 1,\ 0,\ 1,\ 1,\ 0 \text{ หลังขอบที่ 1 ถึง 5 ตามลำดับ}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="344" viewBox="0 0 726 344" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="338"/>
<line x1="254" y1="26" x2="254" y2="338"/>
<line x1="382" y1="26" x2="382" y2="338"/>
<line x1="510" y1="26" x2="510" y2="338"/>
<line x1="638" y1="26" x2="638" y2="338"/>
</g>
<text x="50" y="63.6" text-anchor="end">CLK</text>
<path d="M62,71.2 L126,71.2 L126,44 L190,44 L190,71.2 L254,71.2 L254,44 L318,44 L318,71.2 L382,71.2 L382,44 L446,44 L446,71.2 L510,71.2 L510,44 L574,44 L574,71.2 L638,71.2 L638,44 L702,44 L702,71.2 L702,71.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">R</text>
<path d="M62,131.2 L222,131.2 L222,104 L302,104 L302,131.2 L590,131.2 L590,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">S</text>
<path d="M62,164 L222,164 L222,191.2 L302,191.2 L302,164 L398,164 L398,191.2 L702,191.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">Q</text>
<path d="M62,251.2 L126,251.2 L126,224 L254,224 L254,251.2 L382,251.2 L382,224 L638,224 L638,251.2 L702,251.2" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">Q</text>
<line x1="38" y1="288.6" x2="50" y2="288.6" stroke="currentColor" stroke-width="1.4"/>
<path d="M62,284 L126,284 L126,311.2 L254,311.2 L254,284 L382,284 L382,311.2 L638,311.2 L638,284 L702,284" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### เฉลย  Clock RS ฟลิป-ฟลอป ที่มี PS และ CLR ทำงานที่ขอบขาขึ้น (ชุดสัญญาณที่ 1) {ff=rs; trig=rise; pins=ps; set=a}

$\mathbf{Sol}^{n}$

ขอบที่ทำงานคือขอบขาขึ้น มี 5 ครั้ง (#1 ถึง #5) อ่านค่า $R$, $S$ ก่อนขอบแต่ละครั้ง แล้วหา $Q$ ใหม่จากตารางการทำงาน PS และ CLR ที่เป็น $0$ ทำงานก่อนเสมอ จึงดูเหตุการณ์ตามลำดับเวลา

- ขอบ #1 : $R=0$, $S=1$ $\Rightarrow$ Set $\Rightarrow Q = 1$
- ขอบ #2 : $R=0$, $S=0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 1$
- ขอบ #3 : $R=1$, $S=0$ $\Rightarrow$ Reset $\Rightarrow Q = 0$
- ระหว่างขอบ #3 กับ #4 : PS เปลี่ยนเป็น $0$ ทำงานทันที ไม่รอ CLK $\Rightarrow Q = 1, \overline{Q} = 0$
- ระหว่างขอบ #3 กับ #4 : PS กลับเป็น $1$ $\Rightarrow$ $Q$ คงเดิม ($Q = 1$) จนกว่าจะถึงขอบที่ทำงานถัดไป
- ขอบ #4 : $R=0$, $S=1$ $\Rightarrow$ Set $\Rightarrow Q = 1$
- ระหว่างขอบ #4 กับ #5 : CLR เปลี่ยนเป็น $0$ ทำงานทันที ไม่รอ CLK $\Rightarrow Q = 0, \overline{Q} = 1$
- ขอบ #5 : CLR เป็น $0$ อยู่ จึงไม่ดู CLK และอินพุต $\Rightarrow Q = 0$ (ไม่เปลี่ยน)
- หลังขอบ #5 : CLR กลับเป็น $1$ $\Rightarrow$ $Q$ คงเดิม ($Q = 0$) จนกว่าจะถึงขอบที่ทำงานถัดไป

$\mathbf{Ans}\quad \text{รูปคลื่น } Q \text{ และ } \overline{Q} \text{ ตามรูป}$

| เหตุการณ์ | $Q$ | $\overline{Q}$ |
|:-:|:-:|:-:|
| ขอบ #1 | $1$ | $0$ |
| ขอบ #2 | $1$ | $0$ |
| ขอบ #3 | $0$ | $1$ |
| PS = 0 | $1$ | $0$ |
| PS กลับเป็น 1 | $1$ | $0$ |
| ขอบ #4 | $1$ | $0$ |
| CLR = 0 | $0$ | $1$ |
| ขอบ #5 | $0$ | $1$ |
| CLR กลับเป็น 1 | $0$ | $1$ |

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="464" viewBox="0 0 726 464" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="458"/>
<line x1="254" y1="26" x2="254" y2="458"/>
<line x1="382" y1="26" x2="382" y2="458"/>
<line x1="510" y1="26" x2="510" y2="458"/>
<line x1="638" y1="26" x2="638" y2="458"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,44 L430,44 L430,71.2 L478,71.2 L478,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,104 L606,104 L606,131.2 L670,131.2 L670,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<path d="M62,191.2 L126,191.2 L126,164 L190,164 L190,191.2 L254,191.2 L254,164 L318,164 L318,191.2 L382,191.2 L382,164 L446,164 L446,191.2 L510,191.2 L510,164 L574,164 L574,191.2 L638,191.2 L638,164 L702,164 L702,191.2 L702,191.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">R</text>
<path d="M62,251.2 L350,251.2 L350,224 L414,224 L414,251.2 L574,251.2 L574,224 L702,224" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">S</text>
<path d="M62,284 L174,284 L174,311.2 L414,311.2 L414,284 L574,284 L574,311.2 L702,311.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="363.6" text-anchor="end">Q</text>
<path d="M62,371.2 L126,371.2 L126,344 L382,344 L382,371.2 L430,371.2 L430,344 L606,344 L606,371.2 L702,371.2" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="423.6" text-anchor="end">Q</text>
<line x1="38" y1="408.6" x2="50" y2="408.6" stroke="currentColor" stroke-width="1.4"/>
<path d="M62,404 L126,404 L126,431.2 L382,431.2 L382,404 L430,404 L430,431.2 L606,431.2 L606,404 L702,404" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### เฉลย  Clock RS ฟลิป-ฟลอป ที่มี PS และ CLR ทำงานที่ขอบขาขึ้น (ชุดสัญญาณที่ 2) {ff=rs; trig=rise; pins=ps; set=b}

$\mathbf{Sol}^{n}$

ขอบที่ทำงานคือขอบขาขึ้น มี 5 ครั้ง (#1 ถึง #5) อ่านค่า $R$, $S$ ก่อนขอบแต่ละครั้ง แล้วหา $Q$ ใหม่จากตารางการทำงาน PS และ CLR ที่เป็น $0$ ทำงานก่อนเสมอ จึงดูเหตุการณ์ตามลำดับเวลา

- ขอบ #1 : $R=1$, $S=0$ $\Rightarrow$ Reset $\Rightarrow Q = 0$
- ระหว่างขอบ #1 กับ #2 : PS เปลี่ยนเป็น $0$ ทำงานทันที ไม่รอ CLK $\Rightarrow Q = 1, \overline{Q} = 0$
- ระหว่างขอบ #1 กับ #2 : PS กลับเป็น $1$ $\Rightarrow$ $Q$ คงเดิม ($Q = 1$) จนกว่าจะถึงขอบที่ทำงานถัดไป
- ขอบ #2 : $R=0$, $S=1$ $\Rightarrow$ Set $\Rightarrow Q = 1$
- ขอบ #3 : $R=0$, $S=0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 1$
- ระหว่างขอบ #3 กับ #4 : CLR เปลี่ยนเป็น $0$ ทำงานทันที ไม่รอ CLK $\Rightarrow Q = 0, \overline{Q} = 1$
- ขอบ #4 : CLR เป็น $0$ อยู่ จึงไม่ดู CLK และอินพุต $\Rightarrow Q = 0$ (ไม่เปลี่ยน)
- ระหว่างขอบ #4 กับ #5 : CLR กลับเป็น $1$ $\Rightarrow$ $Q$ คงเดิม ($Q = 0$) จนกว่าจะถึงขอบที่ทำงานถัดไป
- ขอบ #5 : $R=0$, $S=1$ $\Rightarrow$ Set $\Rightarrow Q = 1$

$\mathbf{Ans}\quad \text{รูปคลื่น } Q \text{ และ } \overline{Q} \text{ ตามรูป}$

| เหตุการณ์ | $Q$ | $\overline{Q}$ |
|:-:|:-:|:-:|
| ขอบ #1 | $0$ | $1$ |
| PS = 0 | $1$ | $0$ |
| PS กลับเป็น 1 | $1$ | $0$ |
| ขอบ #2 | $1$ | $0$ |
| ขอบ #3 | $1$ | $0$ |
| CLR = 0 | $0$ | $1$ |
| ขอบ #4 | $0$ | $1$ |
| CLR กลับเป็น 1 | $0$ | $1$ |
| ขอบ #5 | $1$ | $0$ |

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="464" viewBox="0 0 726 464" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="458"/>
<line x1="254" y1="26" x2="254" y2="458"/>
<line x1="382" y1="26" x2="382" y2="458"/>
<line x1="510" y1="26" x2="510" y2="458"/>
<line x1="638" y1="26" x2="638" y2="458"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,44 L174,44 L174,71.2 L222,71.2 L222,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,104 L478,104 L478,131.2 L542,131.2 L542,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<path d="M62,191.2 L126,191.2 L126,164 L190,164 L190,191.2 L254,191.2 L254,164 L318,164 L318,191.2 L382,191.2 L382,164 L446,164 L446,191.2 L510,191.2 L510,164 L574,164 L574,191.2 L638,191.2 L638,164 L702,164 L702,191.2 L702,191.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">R</text>
<path d="M62,224 L190,224 L190,251.2 L462,251.2 L462,224 L558,224 L558,251.2 L702,251.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">S</text>
<path d="M62,311.2 L190,311.2 L190,284 L286,284 L286,311.2 L558,311.2 L558,284 L702,284" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="363.6" text-anchor="end">Q</text>
<path d="M62,371.2 L174,371.2 L174,344 L478,344 L478,371.2 L638,371.2 L638,344 L702,344" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="423.6" text-anchor="end">Q</text>
<line x1="38" y1="408.6" x2="50" y2="408.6" stroke="currentColor" stroke-width="1.4"/>
<path d="M62,404 L174,404 L174,431.2 L478,431.2 L478,404 L638,404 L638,431.2 L702,431.2" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### เฉลย  Clock RS ฟลิป-ฟลอป ที่มี PS และ CLR ทำงานที่ขอบขาขึ้น (ชุดสัญญาณที่ 3) {ff=rs; trig=rise; pins=ps; set=c}

$\mathbf{Sol}^{n}$

ขอบที่ทำงานคือขอบขาขึ้น มี 5 ครั้ง (#1 ถึง #5) อ่านค่า $R$, $S$ ก่อนขอบแต่ละครั้ง แล้วหา $Q$ ใหม่จากตารางการทำงาน PS และ CLR ที่เป็น $0$ ทำงานก่อนเสมอ จึงดูเหตุการณ์ตามลำดับเวลา

- ขอบ #1 : $R=0$, $S=1$ $\Rightarrow$ Set $\Rightarrow Q = 1$
- ขอบ #2 : $R=1$, $S=0$ $\Rightarrow$ Reset $\Rightarrow Q = 0$
- ขอบ #3 : $R=0$, $S=1$ $\Rightarrow$ Set $\Rightarrow Q = 1$
- ระหว่างขอบ #3 กับ #4 : CLR เปลี่ยนเป็น $0$ ทำงานทันที ไม่รอ CLK $\Rightarrow Q = 0, \overline{Q} = 1$
- ขอบ #4 : CLR เป็น $0$ อยู่ จึงไม่ดู CLK และอินพุต $\Rightarrow Q = 0$ (ไม่เปลี่ยน)
- ระหว่างขอบ #4 กับ #5 : CLR กลับเป็น $1$ $\Rightarrow$ $Q$ คงเดิม ($Q = 0$) จนกว่าจะถึงขอบที่ทำงานถัดไป
- ระหว่างขอบ #4 กับ #5 : PS เปลี่ยนเป็น $0$ ทำงานทันที ไม่รอ CLK $\Rightarrow Q = 1, \overline{Q} = 0$
- ขอบ #5 : PS เป็น $0$ อยู่ จึงไม่ดู CLK และอินพุต $\Rightarrow Q = 1$ (ไม่เปลี่ยน)
- หลังขอบ #5 : PS กลับเป็น $1$ $\Rightarrow$ $Q$ คงเดิม ($Q = 1$) จนกว่าจะถึงขอบที่ทำงานถัดไป

$\mathbf{Ans}\quad \text{รูปคลื่น } Q \text{ และ } \overline{Q} \text{ ตามรูป}$

| เหตุการณ์ | $Q$ | $\overline{Q}$ |
|:-:|:-:|:-:|
| ขอบ #1 | $1$ | $0$ |
| ขอบ #2 | $0$ | $1$ |
| ขอบ #3 | $1$ | $0$ |
| CLR = 0 | $0$ | $1$ |
| ขอบ #4 | $0$ | $1$ |
| CLR กลับเป็น 1 | $0$ | $1$ |
| PS = 0 | $1$ | $0$ |
| ขอบ #5 | $1$ | $0$ |
| PS กลับเป็น 1 | $1$ | $0$ |

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="464" viewBox="0 0 726 464" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="458"/>
<line x1="254" y1="26" x2="254" y2="458"/>
<line x1="382" y1="26" x2="382" y2="458"/>
<line x1="510" y1="26" x2="510" y2="458"/>
<line x1="638" y1="26" x2="638" y2="458"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,44 L606,44 L606,71.2 L670,71.2 L670,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,104 L462,104 L462,131.2 L526,131.2 L526,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<path d="M62,191.2 L126,191.2 L126,164 L190,164 L190,191.2 L254,191.2 L254,164 L318,164 L318,191.2 L382,191.2 L382,164 L446,164 L446,191.2 L510,191.2 L510,164 L574,164 L574,191.2 L638,191.2 L638,164 L702,164 L702,191.2 L702,191.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">R</text>
<path d="M62,251.2 L222,251.2 L222,224 L302,224 L302,251.2 L590,251.2 L590,224 L702,224" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">S</text>
<path d="M62,284 L222,284 L222,311.2 L302,311.2 L302,284 L398,284 L398,311.2 L702,311.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="363.6" text-anchor="end">Q</text>
<path d="M62,371.2 L126,371.2 L126,344 L254,344 L254,371.2 L382,371.2 L382,344 L462,344 L462,371.2 L606,371.2 L606,344 L702,344" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="423.6" text-anchor="end">Q</text>
<line x1="38" y1="408.6" x2="50" y2="408.6" stroke="currentColor" stroke-width="1.4"/>
<path d="M62,404 L126,404 L126,431.2 L254,431.2 L254,404 L382,404 L382,431.2 L462,431.2 L462,404 L606,404 L606,431.2 L702,431.2" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### เฉลย  Clock RS ฟลิป-ฟลอป ทำงานที่ขอบขาลง (ชุดสัญญาณที่ 1) {ff=rs; trig=fall; pins=none; set=a}

$\mathbf{Sol}^{n}$

ขอบที่ทำงานคือขอบขาลง มี 5 ครั้ง (#1 ถึง #5) อ่านค่า $R$, $S$ ก่อนขอบแต่ละครั้ง แล้วหา $Q$ ใหม่จากตารางการทำงาน

- ขอบ #1 : $R=0$, $S=1$ $\Rightarrow$ Set $\Rightarrow Q = 1$
- ขอบ #2 : $R=0$, $S=0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 1$
- ขอบ #3 : $R=1$, $S=0$ $\Rightarrow$ Reset $\Rightarrow Q = 0$
- ขอบ #4 : $R=0$, $S=1$ $\Rightarrow$ Set $\Rightarrow Q = 1$
- ขอบ #5 : $R=1$, $S=0$ $\Rightarrow$ Reset $\Rightarrow Q = 0$

$\mathbf{Ans}\quad Q = 1,\ 1,\ 0,\ 1,\ 0 \text{ หลังขอบที่ 1 ถึง 5 ตามลำดับ}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="344" viewBox="0 0 726 344" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="338"/>
<line x1="254" y1="26" x2="254" y2="338"/>
<line x1="382" y1="26" x2="382" y2="338"/>
<line x1="510" y1="26" x2="510" y2="338"/>
<line x1="638" y1="26" x2="638" y2="338"/>
</g>
<text x="50" y="63.6" text-anchor="end">CLK</text>
<path d="M62,44 L126,44 L126,71.2 L190,71.2 L190,44 L254,44 L254,71.2 L318,71.2 L318,44 L382,44 L382,71.2 L446,71.2 L446,44 L510,44 L510,71.2 L574,71.2 L574,44 L638,44 L638,71.2 L702,71.2 L702,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">R</text>
<path d="M62,131.2 L350,131.2 L350,104 L414,104 L414,131.2 L574,131.2 L574,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">S</text>
<path d="M62,164 L174,164 L174,191.2 L414,191.2 L414,164 L574,164 L574,191.2 L702,191.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">Q</text>
<path d="M62,251.2 L126,251.2 L126,224 L382,224 L382,251.2 L510,251.2 L510,224 L638,224 L638,251.2 L702,251.2" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">Q</text>
<line x1="38" y1="288.6" x2="50" y2="288.6" stroke="currentColor" stroke-width="1.4"/>
<path d="M62,284 L126,284 L126,311.2 L382,311.2 L382,284 L510,284 L510,311.2 L638,311.2 L638,284 L702,284" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### เฉลย  Clock RS ฟลิป-ฟลอป ทำงานที่ขอบขาลง (ชุดสัญญาณที่ 2) {ff=rs; trig=fall; pins=none; set=b}

$\mathbf{Sol}^{n}$

ขอบที่ทำงานคือขอบขาลง มี 5 ครั้ง (#1 ถึง #5) อ่านค่า $R$, $S$ ก่อนขอบแต่ละครั้ง แล้วหา $Q$ ใหม่จากตารางการทำงาน

- ขอบ #1 : $R=1$, $S=0$ $\Rightarrow$ Reset $\Rightarrow Q = 0$
- ขอบ #2 : $R=0$, $S=1$ $\Rightarrow$ Set $\Rightarrow Q = 1$
- ขอบ #3 : $R=0$, $S=0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 1$
- ขอบ #4 : $R=1$, $S=0$ $\Rightarrow$ Reset $\Rightarrow Q = 0$
- ขอบ #5 : $R=0$, $S=1$ $\Rightarrow$ Set $\Rightarrow Q = 1$

$\mathbf{Ans}\quad Q = 0,\ 1,\ 1,\ 0,\ 1 \text{ หลังขอบที่ 1 ถึง 5 ตามลำดับ}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="344" viewBox="0 0 726 344" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="338"/>
<line x1="254" y1="26" x2="254" y2="338"/>
<line x1="382" y1="26" x2="382" y2="338"/>
<line x1="510" y1="26" x2="510" y2="338"/>
<line x1="638" y1="26" x2="638" y2="338"/>
</g>
<text x="50" y="63.6" text-anchor="end">CLK</text>
<path d="M62,44 L126,44 L126,71.2 L190,71.2 L190,44 L254,44 L254,71.2 L318,71.2 L318,44 L382,44 L382,71.2 L446,71.2 L446,44 L510,44 L510,71.2 L574,71.2 L574,44 L638,44 L638,71.2 L702,71.2 L702,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">R</text>
<path d="M62,104 L190,104 L190,131.2 L462,131.2 L462,104 L558,104 L558,131.2 L702,131.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">S</text>
<path d="M62,191.2 L190,191.2 L190,164 L286,164 L286,191.2 L558,191.2 L558,164 L702,164" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">Q</text>
<path d="M62,251.2 L254,251.2 L254,224 L510,224 L510,251.2 L638,251.2 L638,224 L702,224" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">Q</text>
<line x1="38" y1="288.6" x2="50" y2="288.6" stroke="currentColor" stroke-width="1.4"/>
<path d="M62,284 L254,284 L254,311.2 L510,311.2 L510,284 L638,284 L638,311.2 L702,311.2" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### เฉลย  Clock RS ฟลิป-ฟลอป ทำงานที่ขอบขาลง (ชุดสัญญาณที่ 3) {ff=rs; trig=fall; pins=none; set=c}

$\mathbf{Sol}^{n}$

ขอบที่ทำงานคือขอบขาลง มี 5 ครั้ง (#1 ถึง #5) อ่านค่า $R$, $S$ ก่อนขอบแต่ละครั้ง แล้วหา $Q$ ใหม่จากตารางการทำงาน

- ขอบ #1 : $R=0$, $S=1$ $\Rightarrow$ Set $\Rightarrow Q = 1$
- ขอบ #2 : $R=1$, $S=0$ $\Rightarrow$ Reset $\Rightarrow Q = 0$
- ขอบ #3 : $R=0$, $S=1$ $\Rightarrow$ Set $\Rightarrow Q = 1$
- ขอบ #4 : $R=0$, $S=0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 1$
- ขอบ #5 : $R=1$, $S=0$ $\Rightarrow$ Reset $\Rightarrow Q = 0$

$\mathbf{Ans}\quad Q = 1,\ 0,\ 1,\ 1,\ 0 \text{ หลังขอบที่ 1 ถึง 5 ตามลำดับ}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="344" viewBox="0 0 726 344" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="338"/>
<line x1="254" y1="26" x2="254" y2="338"/>
<line x1="382" y1="26" x2="382" y2="338"/>
<line x1="510" y1="26" x2="510" y2="338"/>
<line x1="638" y1="26" x2="638" y2="338"/>
</g>
<text x="50" y="63.6" text-anchor="end">CLK</text>
<path d="M62,44 L126,44 L126,71.2 L190,71.2 L190,44 L254,44 L254,71.2 L318,71.2 L318,44 L382,44 L382,71.2 L446,71.2 L446,44 L510,44 L510,71.2 L574,71.2 L574,44 L638,44 L638,71.2 L702,71.2 L702,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">R</text>
<path d="M62,131.2 L222,131.2 L222,104 L302,104 L302,131.2 L590,131.2 L590,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">S</text>
<path d="M62,164 L222,164 L222,191.2 L302,191.2 L302,164 L398,164 L398,191.2 L702,191.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">Q</text>
<path d="M62,251.2 L126,251.2 L126,224 L254,224 L254,251.2 L382,251.2 L382,224 L638,224 L638,251.2 L702,251.2" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">Q</text>
<line x1="38" y1="288.6" x2="50" y2="288.6" stroke="currentColor" stroke-width="1.4"/>
<path d="M62,284 L126,284 L126,311.2 L254,311.2 L254,284 L382,284 L382,311.2 L638,311.2 L638,284 L702,284" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### เฉลย  Clock RS ฟลิป-ฟลอป ที่มี PS และ CLR ทำงานที่ขอบขาลง (ชุดสัญญาณที่ 1) {ff=rs; trig=fall; pins=ps; set=a}

$\mathbf{Sol}^{n}$

ขอบที่ทำงานคือขอบขาลง มี 5 ครั้ง (#1 ถึง #5) อ่านค่า $R$, $S$ ก่อนขอบแต่ละครั้ง แล้วหา $Q$ ใหม่จากตารางการทำงาน PS และ CLR ที่เป็น $0$ ทำงานก่อนเสมอ จึงดูเหตุการณ์ตามลำดับเวลา

- ขอบ #1 : $R=0$, $S=1$ $\Rightarrow$ Set $\Rightarrow Q = 1$
- ขอบ #2 : $R=0$, $S=0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 1$
- ขอบ #3 : $R=1$, $S=0$ $\Rightarrow$ Reset $\Rightarrow Q = 0$
- ระหว่างขอบ #3 กับ #4 : PS เปลี่ยนเป็น $0$ ทำงานทันที ไม่รอ CLK $\Rightarrow Q = 1, \overline{Q} = 0$
- ระหว่างขอบ #3 กับ #4 : PS กลับเป็น $1$ $\Rightarrow$ $Q$ คงเดิม ($Q = 1$) จนกว่าจะถึงขอบที่ทำงานถัดไป
- ขอบ #4 : $R=0$, $S=1$ $\Rightarrow$ Set $\Rightarrow Q = 1$
- ระหว่างขอบ #4 กับ #5 : CLR เปลี่ยนเป็น $0$ ทำงานทันที ไม่รอ CLK $\Rightarrow Q = 0, \overline{Q} = 1$
- ขอบ #5 : CLR เป็น $0$ อยู่ จึงไม่ดู CLK และอินพุต $\Rightarrow Q = 0$ (ไม่เปลี่ยน)
- หลังขอบ #5 : CLR กลับเป็น $1$ $\Rightarrow$ $Q$ คงเดิม ($Q = 0$) จนกว่าจะถึงขอบที่ทำงานถัดไป

$\mathbf{Ans}\quad \text{รูปคลื่น } Q \text{ และ } \overline{Q} \text{ ตามรูป}$

| เหตุการณ์ | $Q$ | $\overline{Q}$ |
|:-:|:-:|:-:|
| ขอบ #1 | $1$ | $0$ |
| ขอบ #2 | $1$ | $0$ |
| ขอบ #3 | $0$ | $1$ |
| PS = 0 | $1$ | $0$ |
| PS กลับเป็น 1 | $1$ | $0$ |
| ขอบ #4 | $1$ | $0$ |
| CLR = 0 | $0$ | $1$ |
| ขอบ #5 | $0$ | $1$ |
| CLR กลับเป็น 1 | $0$ | $1$ |

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="464" viewBox="0 0 726 464" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="458"/>
<line x1="254" y1="26" x2="254" y2="458"/>
<line x1="382" y1="26" x2="382" y2="458"/>
<line x1="510" y1="26" x2="510" y2="458"/>
<line x1="638" y1="26" x2="638" y2="458"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,44 L430,44 L430,71.2 L478,71.2 L478,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,104 L606,104 L606,131.2 L670,131.2 L670,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<path d="M62,164 L126,164 L126,191.2 L190,191.2 L190,164 L254,164 L254,191.2 L318,191.2 L318,164 L382,164 L382,191.2 L446,191.2 L446,164 L510,164 L510,191.2 L574,191.2 L574,164 L638,164 L638,191.2 L702,191.2 L702,164 L702,164" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">R</text>
<path d="M62,251.2 L350,251.2 L350,224 L414,224 L414,251.2 L574,251.2 L574,224 L702,224" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">S</text>
<path d="M62,284 L174,284 L174,311.2 L414,311.2 L414,284 L574,284 L574,311.2 L702,311.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="363.6" text-anchor="end">Q</text>
<path d="M62,371.2 L126,371.2 L126,344 L382,344 L382,371.2 L430,371.2 L430,344 L606,344 L606,371.2 L702,371.2" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="423.6" text-anchor="end">Q</text>
<line x1="38" y1="408.6" x2="50" y2="408.6" stroke="currentColor" stroke-width="1.4"/>
<path d="M62,404 L126,404 L126,431.2 L382,431.2 L382,404 L430,404 L430,431.2 L606,431.2 L606,404 L702,404" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### เฉลย  Clock RS ฟลิป-ฟลอป ที่มี PS และ CLR ทำงานที่ขอบขาลง (ชุดสัญญาณที่ 2) {ff=rs; trig=fall; pins=ps; set=b}

$\mathbf{Sol}^{n}$

ขอบที่ทำงานคือขอบขาลง มี 5 ครั้ง (#1 ถึง #5) อ่านค่า $R$, $S$ ก่อนขอบแต่ละครั้ง แล้วหา $Q$ ใหม่จากตารางการทำงาน PS และ CLR ที่เป็น $0$ ทำงานก่อนเสมอ จึงดูเหตุการณ์ตามลำดับเวลา

- ขอบ #1 : $R=1$, $S=0$ $\Rightarrow$ Reset $\Rightarrow Q = 0$
- ระหว่างขอบ #1 กับ #2 : PS เปลี่ยนเป็น $0$ ทำงานทันที ไม่รอ CLK $\Rightarrow Q = 1, \overline{Q} = 0$
- ระหว่างขอบ #1 กับ #2 : PS กลับเป็น $1$ $\Rightarrow$ $Q$ คงเดิม ($Q = 1$) จนกว่าจะถึงขอบที่ทำงานถัดไป
- ขอบ #2 : $R=0$, $S=1$ $\Rightarrow$ Set $\Rightarrow Q = 1$
- ขอบ #3 : $R=0$, $S=0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 1$
- ระหว่างขอบ #3 กับ #4 : CLR เปลี่ยนเป็น $0$ ทำงานทันที ไม่รอ CLK $\Rightarrow Q = 0, \overline{Q} = 1$
- ขอบ #4 : CLR เป็น $0$ อยู่ จึงไม่ดู CLK และอินพุต $\Rightarrow Q = 0$ (ไม่เปลี่ยน)
- ระหว่างขอบ #4 กับ #5 : CLR กลับเป็น $1$ $\Rightarrow$ $Q$ คงเดิม ($Q = 0$) จนกว่าจะถึงขอบที่ทำงานถัดไป
- ขอบ #5 : $R=0$, $S=1$ $\Rightarrow$ Set $\Rightarrow Q = 1$

$\mathbf{Ans}\quad \text{รูปคลื่น } Q \text{ และ } \overline{Q} \text{ ตามรูป}$

| เหตุการณ์ | $Q$ | $\overline{Q}$ |
|:-:|:-:|:-:|
| ขอบ #1 | $0$ | $1$ |
| PS = 0 | $1$ | $0$ |
| PS กลับเป็น 1 | $1$ | $0$ |
| ขอบ #2 | $1$ | $0$ |
| ขอบ #3 | $1$ | $0$ |
| CLR = 0 | $0$ | $1$ |
| ขอบ #4 | $0$ | $1$ |
| CLR กลับเป็น 1 | $0$ | $1$ |
| ขอบ #5 | $1$ | $0$ |

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="464" viewBox="0 0 726 464" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="458"/>
<line x1="254" y1="26" x2="254" y2="458"/>
<line x1="382" y1="26" x2="382" y2="458"/>
<line x1="510" y1="26" x2="510" y2="458"/>
<line x1="638" y1="26" x2="638" y2="458"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,44 L174,44 L174,71.2 L222,71.2 L222,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,104 L478,104 L478,131.2 L542,131.2 L542,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<path d="M62,164 L126,164 L126,191.2 L190,191.2 L190,164 L254,164 L254,191.2 L318,191.2 L318,164 L382,164 L382,191.2 L446,191.2 L446,164 L510,164 L510,191.2 L574,191.2 L574,164 L638,164 L638,191.2 L702,191.2 L702,164 L702,164" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">R</text>
<path d="M62,224 L190,224 L190,251.2 L462,251.2 L462,224 L558,224 L558,251.2 L702,251.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">S</text>
<path d="M62,311.2 L190,311.2 L190,284 L286,284 L286,311.2 L558,311.2 L558,284 L702,284" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="363.6" text-anchor="end">Q</text>
<path d="M62,371.2 L174,371.2 L174,344 L478,344 L478,371.2 L638,371.2 L638,344 L702,344" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="423.6" text-anchor="end">Q</text>
<line x1="38" y1="408.6" x2="50" y2="408.6" stroke="currentColor" stroke-width="1.4"/>
<path d="M62,404 L174,404 L174,431.2 L478,431.2 L478,404 L638,404 L638,431.2 L702,431.2" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### เฉลย  Clock RS ฟลิป-ฟลอป ที่มี PS และ CLR ทำงานที่ขอบขาลง (ชุดสัญญาณที่ 3) {ff=rs; trig=fall; pins=ps; set=c}

$\mathbf{Sol}^{n}$

ขอบที่ทำงานคือขอบขาลง มี 5 ครั้ง (#1 ถึง #5) อ่านค่า $R$, $S$ ก่อนขอบแต่ละครั้ง แล้วหา $Q$ ใหม่จากตารางการทำงาน PS และ CLR ที่เป็น $0$ ทำงานก่อนเสมอ จึงดูเหตุการณ์ตามลำดับเวลา

- ขอบ #1 : $R=0$, $S=1$ $\Rightarrow$ Set $\Rightarrow Q = 1$
- ขอบ #2 : $R=1$, $S=0$ $\Rightarrow$ Reset $\Rightarrow Q = 0$
- ขอบ #3 : $R=0$, $S=1$ $\Rightarrow$ Set $\Rightarrow Q = 1$
- ระหว่างขอบ #3 กับ #4 : CLR เปลี่ยนเป็น $0$ ทำงานทันที ไม่รอ CLK $\Rightarrow Q = 0, \overline{Q} = 1$
- ขอบ #4 : CLR เป็น $0$ อยู่ จึงไม่ดู CLK และอินพุต $\Rightarrow Q = 0$ (ไม่เปลี่ยน)
- ระหว่างขอบ #4 กับ #5 : CLR กลับเป็น $1$ $\Rightarrow$ $Q$ คงเดิม ($Q = 0$) จนกว่าจะถึงขอบที่ทำงานถัดไป
- ระหว่างขอบ #4 กับ #5 : PS เปลี่ยนเป็น $0$ ทำงานทันที ไม่รอ CLK $\Rightarrow Q = 1, \overline{Q} = 0$
- ขอบ #5 : PS เป็น $0$ อยู่ จึงไม่ดู CLK และอินพุต $\Rightarrow Q = 1$ (ไม่เปลี่ยน)
- หลังขอบ #5 : PS กลับเป็น $1$ $\Rightarrow$ $Q$ คงเดิม ($Q = 1$) จนกว่าจะถึงขอบที่ทำงานถัดไป

$\mathbf{Ans}\quad \text{รูปคลื่น } Q \text{ และ } \overline{Q} \text{ ตามรูป}$

| เหตุการณ์ | $Q$ | $\overline{Q}$ |
|:-:|:-:|:-:|
| ขอบ #1 | $1$ | $0$ |
| ขอบ #2 | $0$ | $1$ |
| ขอบ #3 | $1$ | $0$ |
| CLR = 0 | $0$ | $1$ |
| ขอบ #4 | $0$ | $1$ |
| CLR กลับเป็น 1 | $0$ | $1$ |
| PS = 0 | $1$ | $0$ |
| ขอบ #5 | $1$ | $0$ |
| PS กลับเป็น 1 | $1$ | $0$ |

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="464" viewBox="0 0 726 464" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="458"/>
<line x1="254" y1="26" x2="254" y2="458"/>
<line x1="382" y1="26" x2="382" y2="458"/>
<line x1="510" y1="26" x2="510" y2="458"/>
<line x1="638" y1="26" x2="638" y2="458"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,44 L606,44 L606,71.2 L670,71.2 L670,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,104 L462,104 L462,131.2 L526,131.2 L526,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<path d="M62,164 L126,164 L126,191.2 L190,191.2 L190,164 L254,164 L254,191.2 L318,191.2 L318,164 L382,164 L382,191.2 L446,191.2 L446,164 L510,164 L510,191.2 L574,191.2 L574,164 L638,164 L638,191.2 L702,191.2 L702,164 L702,164" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">R</text>
<path d="M62,251.2 L222,251.2 L222,224 L302,224 L302,251.2 L590,251.2 L590,224 L702,224" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">S</text>
<path d="M62,284 L222,284 L222,311.2 L302,311.2 L302,284 L398,284 L398,311.2 L702,311.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="363.6" text-anchor="end">Q</text>
<path d="M62,371.2 L126,371.2 L126,344 L254,344 L254,371.2 L382,371.2 L382,344 L462,344 L462,371.2 L606,371.2 L606,344 L702,344" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="423.6" text-anchor="end">Q</text>
<line x1="38" y1="408.6" x2="50" y2="408.6" stroke="currentColor" stroke-width="1.4"/>
<path d="M62,404 L126,404 L126,431.2 L254,431.2 L254,404 L382,404 L382,431.2 L462,431.2 L462,404 L606,404 L606,431.2 L702,431.2" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### เฉลย  Clock RS ฟลิป-ฟลอป ทำงานที่พัลส์บวก (ชุดสัญญาณที่ 1) {ff=rs; trig=hi; pins=none; set=a}

$\mathbf{Sol}^{n}$

ฟลิป-ฟลอปทำงานตลอดช่วงที่ CLK เป็น $1$ (พัลส์ #1 ถึง #5) ในช่วงนั้น $Q$ ตามอินพุตทันทีที่อินพุตเปลี่ยน นอกช่วงนั้น $Q$ คงเดิม แม้อินพุตจะเปลี่ยน

- พัลส์ #1 เริ่ม (CLK เป็น $1$) : $R=0$, $S=1$ $\Rightarrow$ Set $\Rightarrow Q = 1$
- ในพัลส์ #1 : $S$ เปลี่ยนเป็น $0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 1$ ทันที (เพราะ CLK ยังทำงานอยู่)
- พัลส์ #2 เริ่ม (CLK เป็น $1$) : $R=1$, $S=0$ $\Rightarrow$ Reset $\Rightarrow Q = 0$
- ในพัลส์ #2 : $R$ เปลี่ยนเป็น $0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 0$ ทันที (เพราะ CLK ยังทำงานอยู่)
- ในพัลส์ #2 : $S$ เปลี่ยนเป็น $1$ $\Rightarrow$ Set $\Rightarrow Q = 1$ ทันที (เพราะ CLK ยังทำงานอยู่)
- พัลส์ #3 เริ่ม (CLK เป็น $1$) : $R=0$, $S=0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 1$
- ในพัลส์ #3 : $R$ เปลี่ยนเป็น $1$ $\Rightarrow$ Reset $\Rightarrow Q = 0$ ทันที (เพราะ CLK ยังทำงานอยู่)
- พัลส์ #4 เริ่ม (CLK เป็น $1$) : $R=0$, $S=0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 0$
- ในพัลส์ #4 : $S$ เปลี่ยนเป็น $1$ $\Rightarrow$ Set $\Rightarrow Q = 1$ ทันที (เพราะ CLK ยังทำงานอยู่)
- พัลส์ #5 เริ่ม (CLK เป็น $1$) : $R=0$, $S=0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 1$
- ในพัลส์ #5 : $R$ เปลี่ยนเป็น $1$ $\Rightarrow$ Reset $\Rightarrow Q = 0$ ทันที (เพราะ CLK ยังทำงานอยู่)

$\mathbf{Ans}\quad \text{รูปคลื่น } Q \text{ และ } \overline{Q} \text{ ตามรูป}$

| เหตุการณ์ | $Q$ | $\overline{Q}$ |
|:-:|:-:|:-:|
| พัลส์ #1 เริ่ม | $1$ | $0$ |
| S เปลี่ยน ในพัลส์ #1 | $1$ | $0$ |
| พัลส์ #2 เริ่ม | $0$ | $1$ |
| R เปลี่ยน ในพัลส์ #2 | $0$ | $1$ |
| S เปลี่ยน ในพัลส์ #2 | $1$ | $0$ |
| พัลส์ #3 เริ่ม | $1$ | $0$ |
| R เปลี่ยน ในพัลส์ #3 | $0$ | $1$ |
| พัลส์ #4 เริ่ม | $0$ | $1$ |
| S เปลี่ยน ในพัลส์ #4 | $1$ | $0$ |
| พัลส์ #5 เริ่ม | $1$ | $0$ |
| R เปลี่ยน ในพัลส์ #5 | $0$ | $1$ |

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="344" viewBox="0 0 726 344" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="338"/>
<line x1="190" y1="26" x2="190" y2="338"/>
<line x1="254" y1="26" x2="254" y2="338"/>
<line x1="318" y1="26" x2="318" y2="338"/>
<line x1="382" y1="26" x2="382" y2="338"/>
<line x1="446" y1="26" x2="446" y2="338"/>
<line x1="510" y1="26" x2="510" y2="338"/>
<line x1="574" y1="26" x2="574" y2="338"/>
<line x1="638" y1="26" x2="638" y2="338"/>
<line x1="702" y1="26" x2="702" y2="338"/>
</g>
<text x="50" y="63.6" text-anchor="end">CLK</text>
<path d="M62,71.2 L126,71.2 L126,44 L190,44 L190,71.2 L254,71.2 L254,44 L318,44 L318,71.2 L382,71.2 L382,44 L446,44 L446,71.2 L510,71.2 L510,44 L574,44 L574,71.2 L638,71.2 L638,44 L702,44 L702,71.2 L702,71.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">R</text>
<path d="M62,131.2 L222,131.2 L222,104 L270,104 L270,131.2 L398,131.2 L398,104 L478,104 L478,131.2 L654,131.2 L654,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">S</text>
<path d="M62,191.2 L94,191.2 L94,164 L158,164 L158,191.2 L286,191.2 L286,164 L334,164 L334,191.2 L526,191.2 L526,164 L606,164 L606,191.2 L702,191.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">Q</text>
<path d="M62,251.2 L126,251.2 L126,224 L254,224 L254,251.2 L286,251.2 L286,224 L398,224 L398,251.2 L526,251.2 L526,224 L654,224 L654,251.2 L702,251.2" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">Q</text>
<line x1="38" y1="288.6" x2="50" y2="288.6" stroke="currentColor" stroke-width="1.4"/>
<path d="M62,284 L126,284 L126,311.2 L254,311.2 L254,284 L286,284 L286,311.2 L398,311.2 L398,284 L526,284 L526,311.2 L654,311.2 L654,284 L702,284" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### เฉลย  Clock RS ฟลิป-ฟลอป ทำงานที่พัลส์บวก (ชุดสัญญาณที่ 2) {ff=rs; trig=hi; pins=none; set=b}

$\mathbf{Sol}^{n}$

ฟลิป-ฟลอปทำงานตลอดช่วงที่ CLK เป็น $1$ (พัลส์ #1 ถึง #5) ในช่วงนั้น $Q$ ตามอินพุตทันทีที่อินพุตเปลี่ยน นอกช่วงนั้น $Q$ คงเดิม แม้อินพุตจะเปลี่ยน

- พัลส์ #1 เริ่ม (CLK เป็น $1$) : $R=0$, $S=1$ $\Rightarrow$ Set $\Rightarrow Q = 1$
- ในพัลส์ #1 : $S$ เปลี่ยนเป็น $0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 1$ ทันที (เพราะ CLK ยังทำงานอยู่)
- ในพัลส์ #1 : $R$ เปลี่ยนเป็น $1$ $\Rightarrow$ Reset $\Rightarrow Q = 0$ ทันที (เพราะ CLK ยังทำงานอยู่)
- พัลส์ #2 เริ่ม (CLK เป็น $1$) : $R=0$, $S=0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 0$
- ในพัลส์ #2 : $S$ เปลี่ยนเป็น $1$ $\Rightarrow$ Set $\Rightarrow Q = 1$ ทันที (เพราะ CLK ยังทำงานอยู่)
- ในพัลส์ #2 : $S$ เปลี่ยนเป็น $0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 1$ ทันที (เพราะ CLK ยังทำงานอยู่)
- พัลส์ #3 เริ่ม (CLK เป็น $1$) : $R=0$, $S=0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 1$
- ในพัลส์ #3 : $R$ เปลี่ยนเป็น $1$ $\Rightarrow$ Reset $\Rightarrow Q = 0$ ทันที (เพราะ CLK ยังทำงานอยู่)
- ในพัลส์ #3 : $R$ เปลี่ยนเป็น $0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 0$ ทันที (เพราะ CLK ยังทำงานอยู่)
- พัลส์ #4 เริ่ม (CLK เป็น $1$) : $R=0$, $S=1$ $\Rightarrow$ Set $\Rightarrow Q = 1$
- ในพัลส์ #4 : $S$ เปลี่ยนเป็น $0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 1$ ทันที (เพราะ CLK ยังทำงานอยู่)
- ในพัลส์ #4 : $R$ เปลี่ยนเป็น $1$ $\Rightarrow$ Reset $\Rightarrow Q = 0$ ทันที (เพราะ CLK ยังทำงานอยู่)
- พัลส์ #5 เริ่ม (CLK เป็น $1$) : $R=0$, $S=0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 0$

$\mathbf{Ans}\quad \text{รูปคลื่น } Q \text{ และ } \overline{Q} \text{ ตามรูป}$

| เหตุการณ์ | $Q$ | $\overline{Q}$ |
|:-:|:-:|:-:|
| พัลส์ #1 เริ่ม | $1$ | $0$ |
| S เปลี่ยน ในพัลส์ #1 | $1$ | $0$ |
| R เปลี่ยน ในพัลส์ #1 | $0$ | $1$ |
| พัลส์ #2 เริ่ม | $0$ | $1$ |
| S เปลี่ยน ในพัลส์ #2 | $1$ | $0$ |
| S เปลี่ยน ในพัลส์ #2 | $1$ | $0$ |
| พัลส์ #3 เริ่ม | $1$ | $0$ |
| R เปลี่ยน ในพัลส์ #3 | $0$ | $1$ |
| R เปลี่ยน ในพัลส์ #3 | $0$ | $1$ |
| พัลส์ #4 เริ่ม | $1$ | $0$ |
| S เปลี่ยน ในพัลส์ #4 | $1$ | $0$ |
| R เปลี่ยน ในพัลส์ #4 | $0$ | $1$ |
| พัลส์ #5 เริ่ม | $0$ | $1$ |

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="344" viewBox="0 0 726 344" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="338"/>
<line x1="190" y1="26" x2="190" y2="338"/>
<line x1="254" y1="26" x2="254" y2="338"/>
<line x1="318" y1="26" x2="318" y2="338"/>
<line x1="382" y1="26" x2="382" y2="338"/>
<line x1="446" y1="26" x2="446" y2="338"/>
<line x1="510" y1="26" x2="510" y2="338"/>
<line x1="574" y1="26" x2="574" y2="338"/>
<line x1="638" y1="26" x2="638" y2="338"/>
<line x1="702" y1="26" x2="702" y2="338"/>
</g>
<text x="50" y="63.6" text-anchor="end">CLK</text>
<path d="M62,71.2 L126,71.2 L126,44 L190,44 L190,71.2 L254,71.2 L254,44 L318,44 L318,71.2 L382,71.2 L382,44 L446,44 L446,71.2 L510,71.2 L510,44 L574,44 L574,71.2 L638,71.2 L638,44 L702,44 L702,71.2 L702,71.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">R</text>
<path d="M62,131.2 L158,131.2 L158,104 L222,104 L222,131.2 L398,131.2 L398,104 L430,104 L430,131.2 L558,131.2 L558,104 L590,104 L590,131.2 L702,131.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">S</text>
<path d="M62,164 L142,164 L142,191.2 L270,191.2 L270,164 L302,164 L302,191.2 L462,191.2 L462,164 L542,164 L542,191.2 L702,191.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">Q</text>
<path d="M62,251.2 L126,251.2 L126,224 L158,224 L158,251.2 L270,251.2 L270,224 L398,224 L398,251.2 L510,251.2 L510,224 L558,224 L558,251.2 L702,251.2" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">Q</text>
<line x1="38" y1="288.6" x2="50" y2="288.6" stroke="currentColor" stroke-width="1.4"/>
<path d="M62,284 L126,284 L126,311.2 L158,311.2 L158,284 L270,284 L270,311.2 L398,311.2 L398,284 L510,284 L510,311.2 L558,311.2 L558,284 L702,284" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### เฉลย  Clock RS ฟลิป-ฟลอป ทำงานที่พัลส์บวก (ชุดสัญญาณที่ 3) {ff=rs; trig=hi; pins=none; set=c}

$\mathbf{Sol}^{n}$

ฟลิป-ฟลอปทำงานตลอดช่วงที่ CLK เป็น $1$ (พัลส์ #1 ถึง #5) ในช่วงนั้น $Q$ ตามอินพุตทันทีที่อินพุตเปลี่ยน นอกช่วงนั้น $Q$ คงเดิม แม้อินพุตจะเปลี่ยน

- พัลส์ #1 เริ่ม (CLK เป็น $1$) : $R=0$, $S=0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 0$
- ในพัลส์ #1 : $S$ เปลี่ยนเป็น $1$ $\Rightarrow$ Set $\Rightarrow Q = 1$ ทันที (เพราะ CLK ยังทำงานอยู่)
- ในพัลส์ #1 : $S$ เปลี่ยนเป็น $0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 1$ ทันที (เพราะ CLK ยังทำงานอยู่)
- พัลส์ #2 เริ่ม (CLK เป็น $1$) : $R=0$, $S=0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 1$
- ในพัลส์ #2 : $R$ เปลี่ยนเป็น $1$ $\Rightarrow$ Reset $\Rightarrow Q = 0$ ทันที (เพราะ CLK ยังทำงานอยู่)
- ในพัลส์ #2 : $R$ เปลี่ยนเป็น $0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 0$ ทันที (เพราะ CLK ยังทำงานอยู่)
- พัลส์ #3 เริ่ม (CLK เป็น $1$) : $R=0$, $S=0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 0$
- ในพัลส์ #3 : $S$ เปลี่ยนเป็น $1$ $\Rightarrow$ Set $\Rightarrow Q = 1$ ทันที (เพราะ CLK ยังทำงานอยู่)
- ในพัลส์ #3 : $S$ เปลี่ยนเป็น $0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 1$ ทันที (เพราะ CLK ยังทำงานอยู่)
- พัลส์ #4 เริ่ม (CLK เป็น $1$) : $R=0$, $S=0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 1$
- ในพัลส์ #4 : $S$ เปลี่ยนเป็น $1$ $\Rightarrow$ Set $\Rightarrow Q = 1$ ทันที (เพราะ CLK ยังทำงานอยู่)
- ในพัลส์ #4 : $S$ เปลี่ยนเป็น $0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 1$ ทันที (เพราะ CLK ยังทำงานอยู่)
- พัลส์ #5 เริ่ม (CLK เป็น $1$) : $R=0$, $S=0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 1$
- ในพัลส์ #5 : $R$ เปลี่ยนเป็น $1$ $\Rightarrow$ Reset $\Rightarrow Q = 0$ ทันที (เพราะ CLK ยังทำงานอยู่)
- ในพัลส์ #5 : $R$ เปลี่ยนเป็น $0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 0$ ทันที (เพราะ CLK ยังทำงานอยู่)

$\mathbf{Ans}\quad \text{รูปคลื่น } Q \text{ และ } \overline{Q} \text{ ตามรูป}$

| เหตุการณ์ | $Q$ | $\overline{Q}$ |
|:-:|:-:|:-:|
| พัลส์ #1 เริ่ม | $0$ | $1$ |
| S เปลี่ยน ในพัลส์ #1 | $1$ | $0$ |
| S เปลี่ยน ในพัลส์ #1 | $1$ | $0$ |
| พัลส์ #2 เริ่ม | $1$ | $0$ |
| R เปลี่ยน ในพัลส์ #2 | $0$ | $1$ |
| R เปลี่ยน ในพัลส์ #2 | $0$ | $1$ |
| พัลส์ #3 เริ่ม | $0$ | $1$ |
| S เปลี่ยน ในพัลส์ #3 | $1$ | $0$ |
| S เปลี่ยน ในพัลส์ #3 | $1$ | $0$ |
| พัลส์ #4 เริ่ม | $1$ | $0$ |
| S เปลี่ยน ในพัลส์ #4 | $1$ | $0$ |
| S เปลี่ยน ในพัลส์ #4 | $1$ | $0$ |
| พัลส์ #5 เริ่ม | $1$ | $0$ |
| R เปลี่ยน ในพัลส์ #5 | $0$ | $1$ |
| R เปลี่ยน ในพัลส์ #5 | $0$ | $1$ |

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="344" viewBox="0 0 726 344" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="338"/>
<line x1="190" y1="26" x2="190" y2="338"/>
<line x1="254" y1="26" x2="254" y2="338"/>
<line x1="318" y1="26" x2="318" y2="338"/>
<line x1="382" y1="26" x2="382" y2="338"/>
<line x1="446" y1="26" x2="446" y2="338"/>
<line x1="510" y1="26" x2="510" y2="338"/>
<line x1="574" y1="26" x2="574" y2="338"/>
<line x1="638" y1="26" x2="638" y2="338"/>
<line x1="702" y1="26" x2="702" y2="338"/>
</g>
<text x="50" y="63.6" text-anchor="end">CLK</text>
<path d="M62,71.2 L126,71.2 L126,44 L190,44 L190,71.2 L254,71.2 L254,44 L318,44 L318,71.2 L382,71.2 L382,44 L446,44 L446,71.2 L510,71.2 L510,44 L574,44 L574,71.2 L638,71.2 L638,44 L702,44 L702,71.2 L702,71.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">R</text>
<path d="M62,131.2 L260.4,131.2 L260.4,104 L292.4,104 L292.4,131.2 L334,131.2 L334,104 L366,104 L366,131.2 L644.4,131.2 L644.4,104 L676.4,104 L676.4,131.2 L702,131.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">S</text>
<path d="M62,191.2 L132.4,191.2 L132.4,164 L164.4,164 L164.4,191.2 L388.4,191.2 L388.4,164 L420.4,164 L420.4,191.2 L516.4,191.2 L516.4,164 L548.4,164 L548.4,191.2 L702,191.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">Q</text>
<path d="M62,251.2 L132.4,251.2 L132.4,224 L260.4,224 L260.4,251.2 L388.4,251.2 L388.4,224 L644.4,224 L644.4,251.2 L702,251.2" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">Q</text>
<line x1="38" y1="288.6" x2="50" y2="288.6" stroke="currentColor" stroke-width="1.4"/>
<path d="M62,284 L132.4,284 L132.4,311.2 L260.4,311.2 L260.4,284 L388.4,284 L388.4,311.2 L644.4,311.2 L644.4,284 L702,284" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### เฉลย  Clock RS ฟลิป-ฟลอป ที่มี PS และ CLR ทำงานที่พัลส์บวก (ชุดสัญญาณที่ 1) {ff=rs; trig=hi; pins=ps; set=a}

$\mathbf{Sol}^{n}$

ฟลิป-ฟลอปทำงานตลอดช่วงที่ CLK เป็น $1$ (พัลส์ #1 ถึง #5) ในช่วงนั้น $Q$ ตามอินพุตทันทีที่อินพุตเปลี่ยน นอกช่วงนั้น $Q$ คงเดิม แม้อินพุตจะเปลี่ยน PS และ CLR ที่เป็น $0$ ทำงานก่อนเสมอ จึงดูเหตุการณ์ตามลำดับเวลา

- พัลส์ #1 เริ่ม (CLK เป็น $1$) : $R=0$, $S=1$ $\Rightarrow$ Set $\Rightarrow Q = 1$
- ในพัลส์ #1 : $S$ เปลี่ยนเป็น $0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 1$ ทันที (เพราะ CLK ยังทำงานอยู่)
- ในพัลส์ #1 : CLR เปลี่ยนเป็น $0$ ทำงานทันที $\Rightarrow Q = 0, \overline{Q} = 1$
- ระหว่างพัลส์ #1 กับ #2 : CLR กลับเป็น $1$ $\Rightarrow$ $Q$ คงเดิม ($Q = 0$) จนกว่าจะถึงพัลส์ถัดไป
- พัลส์ #2 เริ่ม (CLK เป็น $1$) : $R=1$, $S=0$ $\Rightarrow$ Reset $\Rightarrow Q = 0$
- ในพัลส์ #2 : $R$ เปลี่ยนเป็น $0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 0$ ทันที (เพราะ CLK ยังทำงานอยู่)
- ในพัลส์ #2 : $S$ เปลี่ยนเป็น $1$ $\Rightarrow$ Set $\Rightarrow Q = 1$ ทันที (เพราะ CLK ยังทำงานอยู่)
- ระหว่างพัลส์ #2 กับ #3 : PS เปลี่ยนเป็น $0$ ทำงานทันที $\Rightarrow Q = 1, \overline{Q} = 0$
- พัลส์ #3 เริ่ม : PS เป็น $0$ อยู่ จึงไม่ดูอินพุต $\Rightarrow Q = 1$
- ในพัลส์ #3 : PS กลับเป็น $1$ $\Rightarrow$ ขณะนี้ CLK ยังทำงานอยู่ $Q$ จึงตามอินพุตทันที $\Rightarrow Q = 0$
- พัลส์ #4 เริ่ม (CLK เป็น $1$) : $R=0$, $S=0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 0$
- ในพัลส์ #4 : $S$ เปลี่ยนเป็น $1$ $\Rightarrow$ Set $\Rightarrow Q = 1$ ทันที (เพราะ CLK ยังทำงานอยู่)
- พัลส์ #5 เริ่ม (CLK เป็น $1$) : $R=0$, $S=0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 1$
- ในพัลส์ #5 : $R$ เปลี่ยนเป็น $1$ $\Rightarrow$ Reset $\Rightarrow Q = 0$ ทันที (เพราะ CLK ยังทำงานอยู่)

$\mathbf{Ans}\quad \text{รูปคลื่น } Q \text{ และ } \overline{Q} \text{ ตามรูป}$

| เหตุการณ์ | $Q$ | $\overline{Q}$ |
|:-:|:-:|:-:|
| พัลส์ #1 เริ่ม | $1$ | $0$ |
| S เปลี่ยน ในพัลส์ #1 | $1$ | $0$ |
| CLR = 0 | $0$ | $1$ |
| CLR กลับเป็น 1 | $0$ | $1$ |
| พัลส์ #2 เริ่ม | $0$ | $1$ |
| R เปลี่ยน ในพัลส์ #2 | $0$ | $1$ |
| S เปลี่ยน ในพัลส์ #2 | $1$ | $0$ |
| PS = 0 | $1$ | $0$ |
| พัลส์ #3 เริ่ม | $1$ | $0$ |
| PS กลับเป็น 1 | $0$ | $1$ |
| พัลส์ #4 เริ่ม | $0$ | $1$ |
| S เปลี่ยน ในพัลส์ #4 | $1$ | $0$ |
| พัลส์ #5 เริ่ม | $1$ | $0$ |
| R เปลี่ยน ในพัลส์ #5 | $0$ | $1$ |

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="464" viewBox="0 0 726 464" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="458"/>
<line x1="190" y1="26" x2="190" y2="458"/>
<line x1="254" y1="26" x2="254" y2="458"/>
<line x1="318" y1="26" x2="318" y2="458"/>
<line x1="382" y1="26" x2="382" y2="458"/>
<line x1="446" y1="26" x2="446" y2="458"/>
<line x1="510" y1="26" x2="510" y2="458"/>
<line x1="574" y1="26" x2="574" y2="458"/>
<line x1="638" y1="26" x2="638" y2="458"/>
<line x1="702" y1="26" x2="702" y2="458"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,44 L350,44 L350,71.2 L414,71.2 L414,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,104 L182,104 L182,131.2 L230,131.2 L230,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<path d="M62,191.2 L126,191.2 L126,164 L190,164 L190,191.2 L254,191.2 L254,164 L318,164 L318,191.2 L382,191.2 L382,164 L446,164 L446,191.2 L510,191.2 L510,164 L574,164 L574,191.2 L638,191.2 L638,164 L702,164 L702,191.2 L702,191.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">R</text>
<path d="M62,251.2 L222,251.2 L222,224 L270,224 L270,251.2 L398,251.2 L398,224 L478,224 L478,251.2 L654,251.2 L654,224 L702,224" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">S</text>
<path d="M62,311.2 L94,311.2 L94,284 L158,284 L158,311.2 L286,311.2 L286,284 L334,284 L334,311.2 L526,311.2 L526,284 L606,284 L606,311.2 L702,311.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="363.6" text-anchor="end">Q</text>
<path d="M62,371.2 L126,371.2 L126,344 L182,344 L182,371.2 L286,371.2 L286,344 L414,344 L414,371.2 L526,371.2 L526,344 L654,344 L654,371.2 L702,371.2" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="423.6" text-anchor="end">Q</text>
<line x1="38" y1="408.6" x2="50" y2="408.6" stroke="currentColor" stroke-width="1.4"/>
<path d="M62,404 L126,404 L126,431.2 L182,431.2 L182,404 L286,404 L286,431.2 L414,431.2 L414,404 L526,404 L526,431.2 L654,431.2 L654,404 L702,404" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### เฉลย  Clock RS ฟลิป-ฟลอป ที่มี PS และ CLR ทำงานที่พัลส์บวก (ชุดสัญญาณที่ 2) {ff=rs; trig=hi; pins=ps; set=b}

$\mathbf{Sol}^{n}$

ฟลิป-ฟลอปทำงานตลอดช่วงที่ CLK เป็น $1$ (พัลส์ #1 ถึง #5) ในช่วงนั้น $Q$ ตามอินพุตทันทีที่อินพุตเปลี่ยน นอกช่วงนั้น $Q$ คงเดิม แม้อินพุตจะเปลี่ยน PS และ CLR ที่เป็น $0$ ทำงานก่อนเสมอ จึงดูเหตุการณ์ตามลำดับเวลา

- พัลส์ #1 เริ่ม (CLK เป็น $1$) : $R=0$, $S=1$ $\Rightarrow$ Set $\Rightarrow Q = 1$
- ในพัลส์ #1 : $S$ เปลี่ยนเป็น $0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 1$ ทันที (เพราะ CLK ยังทำงานอยู่)
- ในพัลส์ #1 : $R$ เปลี่ยนเป็น $1$ $\Rightarrow$ Reset $\Rightarrow Q = 0$ ทันที (เพราะ CLK ยังทำงานอยู่)
- พัลส์ #2 เริ่ม (CLK เป็น $1$) : $R=0$, $S=0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 0$
- ในพัลส์ #2 : $S$ เปลี่ยนเป็น $1$ $\Rightarrow$ Set $\Rightarrow Q = 1$ ทันที (เพราะ CLK ยังทำงานอยู่)
- ในพัลส์ #2 : $S$ เปลี่ยนเป็น $0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 1$ ทันที (เพราะ CLK ยังทำงานอยู่)
- ระหว่างพัลส์ #2 กับ #3 : CLR เปลี่ยนเป็น $0$ ทำงานทันที $\Rightarrow Q = 0, \overline{Q} = 1$
- พัลส์ #3 เริ่ม : CLR เป็น $0$ อยู่ จึงไม่ดูอินพุต $\Rightarrow Q = 0$
- ในพัลส์ #3 : CLR กลับเป็น $1$ $\Rightarrow$ ขณะนี้ CLK ยังทำงานอยู่ $Q$ จึงตามอินพุตทันที $\Rightarrow Q = 0$
- ในพัลส์ #3 : $R$ เปลี่ยนเป็น $0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 0$ ทันที (เพราะ CLK ยังทำงานอยู่)
- พัลส์ #4 เริ่ม (CLK เป็น $1$) : $R=0$, $S=1$ $\Rightarrow$ Set $\Rightarrow Q = 1$
- ในพัลส์ #4 : $S$ เปลี่ยนเป็น $0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 1$ ทันที (เพราะ CLK ยังทำงานอยู่)
- ในพัลส์ #4 : $R$ เปลี่ยนเป็น $1$ $\Rightarrow$ Reset $\Rightarrow Q = 0$ ทันที (เพราะ CLK ยังทำงานอยู่)
- ระหว่างพัลส์ #4 กับ #5 : PS เปลี่ยนเป็น $0$ ทำงานทันที $\Rightarrow Q = 1, \overline{Q} = 0$
- พัลส์ #5 เริ่ม : PS เป็น $0$ อยู่ จึงไม่ดูอินพุต $\Rightarrow Q = 1$
- ในพัลส์ #5 : PS กลับเป็น $1$ $\Rightarrow$ ขณะนี้ CLK ยังทำงานอยู่ $Q$ จึงตามอินพุตทันที $\Rightarrow Q = 1$

$\mathbf{Ans}\quad \text{รูปคลื่น } Q \text{ และ } \overline{Q} \text{ ตามรูป}$

| เหตุการณ์ | $Q$ | $\overline{Q}$ |
|:-:|:-:|:-:|
| พัลส์ #1 เริ่ม | $1$ | $0$ |
| S เปลี่ยน ในพัลส์ #1 | $1$ | $0$ |
| R เปลี่ยน ในพัลส์ #1 | $0$ | $1$ |
| พัลส์ #2 เริ่ม | $0$ | $1$ |
| S เปลี่ยน ในพัลส์ #2 | $1$ | $0$ |
| S เปลี่ยน ในพัลส์ #2 | $1$ | $0$ |
| CLR = 0 | $0$ | $1$ |
| พัลส์ #3 เริ่ม | $0$ | $1$ |
| CLR กลับเป็น 1 | $0$ | $1$ |
| R เปลี่ยน ในพัลส์ #3 | $0$ | $1$ |
| พัลส์ #4 เริ่ม | $1$ | $0$ |
| S เปลี่ยน ในพัลส์ #4 | $1$ | $0$ |
| R เปลี่ยน ในพัลส์ #4 | $0$ | $1$ |
| PS = 0 | $1$ | $0$ |
| พัลส์ #5 เริ่ม | $1$ | $0$ |
| PS กลับเป็น 1 | $1$ | $0$ |

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="464" viewBox="0 0 726 464" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="458"/>
<line x1="190" y1="26" x2="190" y2="458"/>
<line x1="254" y1="26" x2="254" y2="458"/>
<line x1="318" y1="26" x2="318" y2="458"/>
<line x1="382" y1="26" x2="382" y2="458"/>
<line x1="446" y1="26" x2="446" y2="458"/>
<line x1="510" y1="26" x2="510" y2="458"/>
<line x1="574" y1="26" x2="574" y2="458"/>
<line x1="638" y1="26" x2="638" y2="458"/>
<line x1="702" y1="26" x2="702" y2="458"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,44 L606,44 L606,71.2 L670,71.2 L670,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,104 L350,104 L350,131.2 L414,131.2 L414,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<path d="M62,191.2 L126,191.2 L126,164 L190,164 L190,191.2 L254,191.2 L254,164 L318,164 L318,191.2 L382,191.2 L382,164 L446,164 L446,191.2 L510,191.2 L510,164 L574,164 L574,191.2 L638,191.2 L638,164 L702,164 L702,191.2 L702,191.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">R</text>
<path d="M62,251.2 L158,251.2 L158,224 L222,224 L222,251.2 L398,251.2 L398,224 L430,224 L430,251.2 L558,251.2 L558,224 L590,224 L590,251.2 L702,251.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">S</text>
<path d="M62,284 L142,284 L142,311.2 L270,311.2 L270,284 L302,284 L302,311.2 L462,311.2 L462,284 L542,284 L542,311.2 L702,311.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="363.6" text-anchor="end">Q</text>
<path d="M62,371.2 L126,371.2 L126,344 L158,344 L158,371.2 L270,371.2 L270,344 L350,344 L350,371.2 L510,371.2 L510,344 L558,344 L558,371.2 L606,371.2 L606,344 L702,344" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="423.6" text-anchor="end">Q</text>
<line x1="38" y1="408.6" x2="50" y2="408.6" stroke="currentColor" stroke-width="1.4"/>
<path d="M62,404 L126,404 L126,431.2 L158,431.2 L158,404 L270,404 L270,431.2 L350,431.2 L350,404 L510,404 L510,431.2 L558,431.2 L558,404 L606,404 L606,431.2 L702,431.2" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### เฉลย  Clock RS ฟลิป-ฟลอป ที่มี PS และ CLR ทำงานที่พัลส์บวก (ชุดสัญญาณที่ 3) {ff=rs; trig=hi; pins=ps; set=c}

$\mathbf{Sol}^{n}$

ฟลิป-ฟลอปทำงานตลอดช่วงที่ CLK เป็น $1$ (พัลส์ #1 ถึง #5) ในช่วงนั้น $Q$ ตามอินพุตทันทีที่อินพุตเปลี่ยน นอกช่วงนั้น $Q$ คงเดิม แม้อินพุตจะเปลี่ยน PS และ CLR ที่เป็น $0$ ทำงานก่อนเสมอ จึงดูเหตุการณ์ตามลำดับเวลา

- พัลส์ #1 เริ่ม (CLK เป็น $1$) : $R=0$, $S=0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 0$
- ในพัลส์ #1 : $S$ เปลี่ยนเป็น $1$ $\Rightarrow$ Set $\Rightarrow Q = 1$ ทันที (เพราะ CLK ยังทำงานอยู่)
- ในพัลส์ #1 : $S$ เปลี่ยนเป็น $0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 1$ ทันที (เพราะ CLK ยังทำงานอยู่)
- พัลส์ #2 เริ่ม (CLK เป็น $1$) : $R=0$, $S=0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 1$
- ในพัลส์ #2 : $R$ เปลี่ยนเป็น $1$ $\Rightarrow$ Reset $\Rightarrow Q = 0$ ทันที (เพราะ CLK ยังทำงานอยู่)
- ในพัลส์ #2 : PS เปลี่ยนเป็น $0$ ทำงานทันที $\Rightarrow Q = 1, \overline{Q} = 0$
- ระหว่างพัลส์ #2 กับ #3 : PS กลับเป็น $1$ $\Rightarrow$ $Q$ คงเดิม ($Q = 1$) จนกว่าจะถึงพัลส์ถัดไป
- พัลส์ #3 เริ่ม (CLK เป็น $1$) : $R=0$, $S=0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 1$
- ในพัลส์ #3 : $S$ เปลี่ยนเป็น $1$ $\Rightarrow$ Set $\Rightarrow Q = 1$ ทันที (เพราะ CLK ยังทำงานอยู่)
- ในพัลส์ #3 : $S$ เปลี่ยนเป็น $0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 1$ ทันที (เพราะ CLK ยังทำงานอยู่)
- ในพัลส์ #3 : CLR เปลี่ยนเป็น $0$ ทำงานทันที $\Rightarrow Q = 0, \overline{Q} = 1$
- ระหว่างพัลส์ #3 กับ #4 : CLR กลับเป็น $1$ $\Rightarrow$ $Q$ คงเดิม ($Q = 0$) จนกว่าจะถึงพัลส์ถัดไป
- พัลส์ #4 เริ่ม (CLK เป็น $1$) : $R=0$, $S=0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 0$
- ในพัลส์ #4 : $S$ เปลี่ยนเป็น $1$ $\Rightarrow$ Set $\Rightarrow Q = 1$ ทันที (เพราะ CLK ยังทำงานอยู่)
- ในพัลส์ #4 : $S$ เปลี่ยนเป็น $0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 1$ ทันที (เพราะ CLK ยังทำงานอยู่)
- พัลส์ #5 เริ่ม (CLK เป็น $1$) : $R=0$, $S=0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 1$
- ในพัลส์ #5 : $R$ เปลี่ยนเป็น $1$ $\Rightarrow$ Reset $\Rightarrow Q = 0$ ทันที (เพราะ CLK ยังทำงานอยู่)
- ในพัลส์ #5 : $R$ เปลี่ยนเป็น $0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 0$ ทันที (เพราะ CLK ยังทำงานอยู่)

$\mathbf{Ans}\quad \text{รูปคลื่น } Q \text{ และ } \overline{Q} \text{ ตามรูป}$

| เหตุการณ์ | $Q$ | $\overline{Q}$ |
|:-:|:-:|:-:|
| พัลส์ #1 เริ่ม | $0$ | $1$ |
| S เปลี่ยน ในพัลส์ #1 | $1$ | $0$ |
| S เปลี่ยน ในพัลส์ #1 | $1$ | $0$ |
| พัลส์ #2 เริ่ม | $1$ | $0$ |
| R เปลี่ยน ในพัลส์ #2 | $0$ | $1$ |
| PS = 0 | $1$ | $0$ |
| PS กลับเป็น 1 | $1$ | $0$ |
| พัลส์ #3 เริ่ม | $1$ | $0$ |
| S เปลี่ยน ในพัลส์ #3 | $1$ | $0$ |
| S เปลี่ยน ในพัลส์ #3 | $1$ | $0$ |
| CLR = 0 | $0$ | $1$ |
| CLR กลับเป็น 1 | $0$ | $1$ |
| พัลส์ #4 เริ่ม | $0$ | $1$ |
| S เปลี่ยน ในพัลส์ #4 | $1$ | $0$ |
| S เปลี่ยน ในพัลส์ #4 | $1$ | $0$ |
| พัลส์ #5 เริ่ม | $1$ | $0$ |
| R เปลี่ยน ในพัลส์ #5 | $0$ | $1$ |
| R เปลี่ยน ในพัลส์ #5 | $0$ | $1$ |

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="464" viewBox="0 0 726 464" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="458"/>
<line x1="190" y1="26" x2="190" y2="458"/>
<line x1="254" y1="26" x2="254" y2="458"/>
<line x1="318" y1="26" x2="318" y2="458"/>
<line x1="382" y1="26" x2="382" y2="458"/>
<line x1="446" y1="26" x2="446" y2="458"/>
<line x1="510" y1="26" x2="510" y2="458"/>
<line x1="574" y1="26" x2="574" y2="458"/>
<line x1="638" y1="26" x2="638" y2="458"/>
<line x1="702" y1="26" x2="702" y2="458"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,44 L286,44 L286,71.2 L350,71.2 L350,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,104 L438,104 L438,131.2 L486,131.2 L486,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<path d="M62,191.2 L126,191.2 L126,164 L190,164 L190,191.2 L254,191.2 L254,164 L318,164 L318,191.2 L382,191.2 L382,164 L446,164 L446,191.2 L510,191.2 L510,164 L574,164 L574,191.2 L638,191.2 L638,164 L702,164 L702,191.2 L702,191.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">R</text>
<path d="M62,251.2 L260.4,251.2 L260.4,224 L292.4,224 L292.4,251.2 L334,251.2 L334,224 L366,224 L366,251.2 L644.4,251.2 L644.4,224 L676.4,224 L676.4,251.2 L702,251.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">S</text>
<path d="M62,311.2 L132.4,311.2 L132.4,284 L164.4,284 L164.4,311.2 L388.4,311.2 L388.4,284 L420.4,284 L420.4,311.2 L516.4,311.2 L516.4,284 L548.4,284 L548.4,311.2 L702,311.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="363.6" text-anchor="end">Q</text>
<path d="M62,371.2 L132.4,371.2 L132.4,344 L260.4,344 L260.4,371.2 L286,371.2 L286,344 L438,344 L438,371.2 L516.4,371.2 L516.4,344 L644.4,344 L644.4,371.2 L702,371.2" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="423.6" text-anchor="end">Q</text>
<line x1="38" y1="408.6" x2="50" y2="408.6" stroke="currentColor" stroke-width="1.4"/>
<path d="M62,404 L132.4,404 L132.4,431.2 L260.4,431.2 L260.4,404 L286,404 L286,431.2 L438,431.2 L438,404 L516.4,404 L516.4,431.2 L644.4,431.2 L644.4,404 L702,404" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### เฉลย  Clock RS ฟลิป-ฟลอป ทำงานที่พัลส์ลบ (ชุดสัญญาณที่ 1) {ff=rs; trig=lo; pins=none; set=a}

$\mathbf{Sol}^{n}$

ฟลิป-ฟลอปทำงานตลอดช่วงที่ CLK เป็น $0$ (พัลส์ #1 ถึง #5) ในช่วงนั้น $Q$ ตามอินพุตทันทีที่อินพุตเปลี่ยน นอกช่วงนั้น $Q$ คงเดิม แม้อินพุตจะเปลี่ยน

- พัลส์ #1 เริ่ม (CLK เป็น $0$) : $R=0$, $S=1$ $\Rightarrow$ Set $\Rightarrow Q = 1$
- ในพัลส์ #1 : $S$ เปลี่ยนเป็น $0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 1$ ทันที (เพราะ CLK ยังทำงานอยู่)
- พัลส์ #2 เริ่ม (CLK เป็น $0$) : $R=1$, $S=0$ $\Rightarrow$ Reset $\Rightarrow Q = 0$
- ในพัลส์ #2 : $R$ เปลี่ยนเป็น $0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 0$ ทันที (เพราะ CLK ยังทำงานอยู่)
- ในพัลส์ #2 : $S$ เปลี่ยนเป็น $1$ $\Rightarrow$ Set $\Rightarrow Q = 1$ ทันที (เพราะ CLK ยังทำงานอยู่)
- พัลส์ #3 เริ่ม (CLK เป็น $0$) : $R=0$, $S=0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 1$
- ในพัลส์ #3 : $R$ เปลี่ยนเป็น $1$ $\Rightarrow$ Reset $\Rightarrow Q = 0$ ทันที (เพราะ CLK ยังทำงานอยู่)
- พัลส์ #4 เริ่ม (CLK เป็น $0$) : $R=0$, $S=0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 0$
- ในพัลส์ #4 : $S$ เปลี่ยนเป็น $1$ $\Rightarrow$ Set $\Rightarrow Q = 1$ ทันที (เพราะ CLK ยังทำงานอยู่)
- พัลส์ #5 เริ่ม (CLK เป็น $0$) : $R=0$, $S=0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 1$
- ในพัลส์ #5 : $R$ เปลี่ยนเป็น $1$ $\Rightarrow$ Reset $\Rightarrow Q = 0$ ทันที (เพราะ CLK ยังทำงานอยู่)

$\mathbf{Ans}\quad \text{รูปคลื่น } Q \text{ และ } \overline{Q} \text{ ตามรูป}$

| เหตุการณ์ | $Q$ | $\overline{Q}$ |
|:-:|:-:|:-:|
| พัลส์ #1 เริ่ม | $1$ | $0$ |
| S เปลี่ยน ในพัลส์ #1 | $1$ | $0$ |
| พัลส์ #2 เริ่ม | $0$ | $1$ |
| R เปลี่ยน ในพัลส์ #2 | $0$ | $1$ |
| S เปลี่ยน ในพัลส์ #2 | $1$ | $0$ |
| พัลส์ #3 เริ่ม | $1$ | $0$ |
| R เปลี่ยน ในพัลส์ #3 | $0$ | $1$ |
| พัลส์ #4 เริ่ม | $0$ | $1$ |
| S เปลี่ยน ในพัลส์ #4 | $1$ | $0$ |
| พัลส์ #5 เริ่ม | $1$ | $0$ |
| R เปลี่ยน ในพัลส์ #5 | $0$ | $1$ |

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="344" viewBox="0 0 726 344" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="338"/>
<line x1="190" y1="26" x2="190" y2="338"/>
<line x1="254" y1="26" x2="254" y2="338"/>
<line x1="318" y1="26" x2="318" y2="338"/>
<line x1="382" y1="26" x2="382" y2="338"/>
<line x1="446" y1="26" x2="446" y2="338"/>
<line x1="510" y1="26" x2="510" y2="338"/>
<line x1="574" y1="26" x2="574" y2="338"/>
<line x1="638" y1="26" x2="638" y2="338"/>
<line x1="702" y1="26" x2="702" y2="338"/>
</g>
<text x="50" y="63.6" text-anchor="end">CLK</text>
<path d="M62,44 L126,44 L126,71.2 L190,71.2 L190,44 L254,44 L254,71.2 L318,71.2 L318,44 L382,44 L382,71.2 L446,71.2 L446,44 L510,44 L510,71.2 L574,71.2 L574,44 L638,44 L638,71.2 L702,71.2 L702,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">R</text>
<path d="M62,131.2 L222,131.2 L222,104 L270,104 L270,131.2 L398,131.2 L398,104 L478,104 L478,131.2 L654,131.2 L654,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">S</text>
<path d="M62,191.2 L94,191.2 L94,164 L158,164 L158,191.2 L286,191.2 L286,164 L334,164 L334,191.2 L526,191.2 L526,164 L606,164 L606,191.2 L702,191.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">Q</text>
<path d="M62,251.2 L126,251.2 L126,224 L254,224 L254,251.2 L286,251.2 L286,224 L398,224 L398,251.2 L526,251.2 L526,224 L654,224 L654,251.2 L702,251.2" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">Q</text>
<line x1="38" y1="288.6" x2="50" y2="288.6" stroke="currentColor" stroke-width="1.4"/>
<path d="M62,284 L126,284 L126,311.2 L254,311.2 L254,284 L286,284 L286,311.2 L398,311.2 L398,284 L526,284 L526,311.2 L654,311.2 L654,284 L702,284" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### เฉลย  Clock RS ฟลิป-ฟลอป ทำงานที่พัลส์ลบ (ชุดสัญญาณที่ 2) {ff=rs; trig=lo; pins=none; set=b}

$\mathbf{Sol}^{n}$

ฟลิป-ฟลอปทำงานตลอดช่วงที่ CLK เป็น $0$ (พัลส์ #1 ถึง #5) ในช่วงนั้น $Q$ ตามอินพุตทันทีที่อินพุตเปลี่ยน นอกช่วงนั้น $Q$ คงเดิม แม้อินพุตจะเปลี่ยน

- พัลส์ #1 เริ่ม (CLK เป็น $0$) : $R=0$, $S=1$ $\Rightarrow$ Set $\Rightarrow Q = 1$
- ในพัลส์ #1 : $S$ เปลี่ยนเป็น $0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 1$ ทันที (เพราะ CLK ยังทำงานอยู่)
- ในพัลส์ #1 : $R$ เปลี่ยนเป็น $1$ $\Rightarrow$ Reset $\Rightarrow Q = 0$ ทันที (เพราะ CLK ยังทำงานอยู่)
- พัลส์ #2 เริ่ม (CLK เป็น $0$) : $R=0$, $S=0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 0$
- ในพัลส์ #2 : $S$ เปลี่ยนเป็น $1$ $\Rightarrow$ Set $\Rightarrow Q = 1$ ทันที (เพราะ CLK ยังทำงานอยู่)
- ในพัลส์ #2 : $S$ เปลี่ยนเป็น $0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 1$ ทันที (เพราะ CLK ยังทำงานอยู่)
- พัลส์ #3 เริ่ม (CLK เป็น $0$) : $R=0$, $S=0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 1$
- ในพัลส์ #3 : $R$ เปลี่ยนเป็น $1$ $\Rightarrow$ Reset $\Rightarrow Q = 0$ ทันที (เพราะ CLK ยังทำงานอยู่)
- ในพัลส์ #3 : $R$ เปลี่ยนเป็น $0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 0$ ทันที (เพราะ CLK ยังทำงานอยู่)
- พัลส์ #4 เริ่ม (CLK เป็น $0$) : $R=0$, $S=1$ $\Rightarrow$ Set $\Rightarrow Q = 1$
- ในพัลส์ #4 : $S$ เปลี่ยนเป็น $0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 1$ ทันที (เพราะ CLK ยังทำงานอยู่)
- ในพัลส์ #4 : $R$ เปลี่ยนเป็น $1$ $\Rightarrow$ Reset $\Rightarrow Q = 0$ ทันที (เพราะ CLK ยังทำงานอยู่)
- พัลส์ #5 เริ่ม (CLK เป็น $0$) : $R=0$, $S=0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 0$

$\mathbf{Ans}\quad \text{รูปคลื่น } Q \text{ และ } \overline{Q} \text{ ตามรูป}$

| เหตุการณ์ | $Q$ | $\overline{Q}$ |
|:-:|:-:|:-:|
| พัลส์ #1 เริ่ม | $1$ | $0$ |
| S เปลี่ยน ในพัลส์ #1 | $1$ | $0$ |
| R เปลี่ยน ในพัลส์ #1 | $0$ | $1$ |
| พัลส์ #2 เริ่ม | $0$ | $1$ |
| S เปลี่ยน ในพัลส์ #2 | $1$ | $0$ |
| S เปลี่ยน ในพัลส์ #2 | $1$ | $0$ |
| พัลส์ #3 เริ่ม | $1$ | $0$ |
| R เปลี่ยน ในพัลส์ #3 | $0$ | $1$ |
| R เปลี่ยน ในพัลส์ #3 | $0$ | $1$ |
| พัลส์ #4 เริ่ม | $1$ | $0$ |
| S เปลี่ยน ในพัลส์ #4 | $1$ | $0$ |
| R เปลี่ยน ในพัลส์ #4 | $0$ | $1$ |
| พัลส์ #5 เริ่ม | $0$ | $1$ |

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="344" viewBox="0 0 726 344" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="338"/>
<line x1="190" y1="26" x2="190" y2="338"/>
<line x1="254" y1="26" x2="254" y2="338"/>
<line x1="318" y1="26" x2="318" y2="338"/>
<line x1="382" y1="26" x2="382" y2="338"/>
<line x1="446" y1="26" x2="446" y2="338"/>
<line x1="510" y1="26" x2="510" y2="338"/>
<line x1="574" y1="26" x2="574" y2="338"/>
<line x1="638" y1="26" x2="638" y2="338"/>
<line x1="702" y1="26" x2="702" y2="338"/>
</g>
<text x="50" y="63.6" text-anchor="end">CLK</text>
<path d="M62,44 L126,44 L126,71.2 L190,71.2 L190,44 L254,44 L254,71.2 L318,71.2 L318,44 L382,44 L382,71.2 L446,71.2 L446,44 L510,44 L510,71.2 L574,71.2 L574,44 L638,44 L638,71.2 L702,71.2 L702,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">R</text>
<path d="M62,131.2 L158,131.2 L158,104 L222,104 L222,131.2 L398,131.2 L398,104 L430,104 L430,131.2 L558,131.2 L558,104 L590,104 L590,131.2 L702,131.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">S</text>
<path d="M62,164 L142,164 L142,191.2 L270,191.2 L270,164 L302,164 L302,191.2 L462,191.2 L462,164 L542,164 L542,191.2 L702,191.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">Q</text>
<path d="M62,251.2 L126,251.2 L126,224 L158,224 L158,251.2 L270,251.2 L270,224 L398,224 L398,251.2 L510,251.2 L510,224 L558,224 L558,251.2 L702,251.2" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">Q</text>
<line x1="38" y1="288.6" x2="50" y2="288.6" stroke="currentColor" stroke-width="1.4"/>
<path d="M62,284 L126,284 L126,311.2 L158,311.2 L158,284 L270,284 L270,311.2 L398,311.2 L398,284 L510,284 L510,311.2 L558,311.2 L558,284 L702,284" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### เฉลย  Clock RS ฟลิป-ฟลอป ทำงานที่พัลส์ลบ (ชุดสัญญาณที่ 3) {ff=rs; trig=lo; pins=none; set=c}

$\mathbf{Sol}^{n}$

ฟลิป-ฟลอปทำงานตลอดช่วงที่ CLK เป็น $0$ (พัลส์ #1 ถึง #5) ในช่วงนั้น $Q$ ตามอินพุตทันทีที่อินพุตเปลี่ยน นอกช่วงนั้น $Q$ คงเดิม แม้อินพุตจะเปลี่ยน

- พัลส์ #1 เริ่ม (CLK เป็น $0$) : $R=0$, $S=0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 0$
- ในพัลส์ #1 : $S$ เปลี่ยนเป็น $1$ $\Rightarrow$ Set $\Rightarrow Q = 1$ ทันที (เพราะ CLK ยังทำงานอยู่)
- ในพัลส์ #1 : $S$ เปลี่ยนเป็น $0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 1$ ทันที (เพราะ CLK ยังทำงานอยู่)
- พัลส์ #2 เริ่ม (CLK เป็น $0$) : $R=0$, $S=0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 1$
- ในพัลส์ #2 : $R$ เปลี่ยนเป็น $1$ $\Rightarrow$ Reset $\Rightarrow Q = 0$ ทันที (เพราะ CLK ยังทำงานอยู่)
- ในพัลส์ #2 : $R$ เปลี่ยนเป็น $0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 0$ ทันที (เพราะ CLK ยังทำงานอยู่)
- พัลส์ #3 เริ่ม (CLK เป็น $0$) : $R=0$, $S=0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 0$
- ในพัลส์ #3 : $S$ เปลี่ยนเป็น $1$ $\Rightarrow$ Set $\Rightarrow Q = 1$ ทันที (เพราะ CLK ยังทำงานอยู่)
- ในพัลส์ #3 : $S$ เปลี่ยนเป็น $0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 1$ ทันที (เพราะ CLK ยังทำงานอยู่)
- พัลส์ #4 เริ่ม (CLK เป็น $0$) : $R=0$, $S=0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 1$
- ในพัลส์ #4 : $S$ เปลี่ยนเป็น $1$ $\Rightarrow$ Set $\Rightarrow Q = 1$ ทันที (เพราะ CLK ยังทำงานอยู่)
- ในพัลส์ #4 : $S$ เปลี่ยนเป็น $0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 1$ ทันที (เพราะ CLK ยังทำงานอยู่)
- พัลส์ #5 เริ่ม (CLK เป็น $0$) : $R=0$, $S=0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 1$
- ในพัลส์ #5 : $R$ เปลี่ยนเป็น $1$ $\Rightarrow$ Reset $\Rightarrow Q = 0$ ทันที (เพราะ CLK ยังทำงานอยู่)
- ในพัลส์ #5 : $R$ เปลี่ยนเป็น $0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 0$ ทันที (เพราะ CLK ยังทำงานอยู่)

$\mathbf{Ans}\quad \text{รูปคลื่น } Q \text{ และ } \overline{Q} \text{ ตามรูป}$

| เหตุการณ์ | $Q$ | $\overline{Q}$ |
|:-:|:-:|:-:|
| พัลส์ #1 เริ่ม | $0$ | $1$ |
| S เปลี่ยน ในพัลส์ #1 | $1$ | $0$ |
| S เปลี่ยน ในพัลส์ #1 | $1$ | $0$ |
| พัลส์ #2 เริ่ม | $1$ | $0$ |
| R เปลี่ยน ในพัลส์ #2 | $0$ | $1$ |
| R เปลี่ยน ในพัลส์ #2 | $0$ | $1$ |
| พัลส์ #3 เริ่ม | $0$ | $1$ |
| S เปลี่ยน ในพัลส์ #3 | $1$ | $0$ |
| S เปลี่ยน ในพัลส์ #3 | $1$ | $0$ |
| พัลส์ #4 เริ่ม | $1$ | $0$ |
| S เปลี่ยน ในพัลส์ #4 | $1$ | $0$ |
| S เปลี่ยน ในพัลส์ #4 | $1$ | $0$ |
| พัลส์ #5 เริ่ม | $1$ | $0$ |
| R เปลี่ยน ในพัลส์ #5 | $0$ | $1$ |
| R เปลี่ยน ในพัลส์ #5 | $0$ | $1$ |

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="344" viewBox="0 0 726 344" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="338"/>
<line x1="190" y1="26" x2="190" y2="338"/>
<line x1="254" y1="26" x2="254" y2="338"/>
<line x1="318" y1="26" x2="318" y2="338"/>
<line x1="382" y1="26" x2="382" y2="338"/>
<line x1="446" y1="26" x2="446" y2="338"/>
<line x1="510" y1="26" x2="510" y2="338"/>
<line x1="574" y1="26" x2="574" y2="338"/>
<line x1="638" y1="26" x2="638" y2="338"/>
<line x1="702" y1="26" x2="702" y2="338"/>
</g>
<text x="50" y="63.6" text-anchor="end">CLK</text>
<path d="M62,44 L126,44 L126,71.2 L190,71.2 L190,44 L254,44 L254,71.2 L318,71.2 L318,44 L382,44 L382,71.2 L446,71.2 L446,44 L510,44 L510,71.2 L574,71.2 L574,44 L638,44 L638,71.2 L702,71.2 L702,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">R</text>
<path d="M62,131.2 L260.4,131.2 L260.4,104 L292.4,104 L292.4,131.2 L334,131.2 L334,104 L366,104 L366,131.2 L644.4,131.2 L644.4,104 L676.4,104 L676.4,131.2 L702,131.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">S</text>
<path d="M62,191.2 L132.4,191.2 L132.4,164 L164.4,164 L164.4,191.2 L388.4,191.2 L388.4,164 L420.4,164 L420.4,191.2 L516.4,191.2 L516.4,164 L548.4,164 L548.4,191.2 L702,191.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">Q</text>
<path d="M62,251.2 L132.4,251.2 L132.4,224 L260.4,224 L260.4,251.2 L388.4,251.2 L388.4,224 L644.4,224 L644.4,251.2 L702,251.2" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">Q</text>
<line x1="38" y1="288.6" x2="50" y2="288.6" stroke="currentColor" stroke-width="1.4"/>
<path d="M62,284 L132.4,284 L132.4,311.2 L260.4,311.2 L260.4,284 L388.4,284 L388.4,311.2 L644.4,311.2 L644.4,284 L702,284" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### เฉลย  Clock RS ฟลิป-ฟลอป ที่มี PS และ CLR ทำงานที่พัลส์ลบ (ชุดสัญญาณที่ 1) {ff=rs; trig=lo; pins=ps; set=a}

$\mathbf{Sol}^{n}$

ฟลิป-ฟลอปทำงานตลอดช่วงที่ CLK เป็น $0$ (พัลส์ #1 ถึง #5) ในช่วงนั้น $Q$ ตามอินพุตทันทีที่อินพุตเปลี่ยน นอกช่วงนั้น $Q$ คงเดิม แม้อินพุตจะเปลี่ยน PS และ CLR ที่เป็น $0$ ทำงานก่อนเสมอ จึงดูเหตุการณ์ตามลำดับเวลา

- พัลส์ #1 เริ่ม (CLK เป็น $0$) : $R=0$, $S=1$ $\Rightarrow$ Set $\Rightarrow Q = 1$
- ในพัลส์ #1 : $S$ เปลี่ยนเป็น $0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 1$ ทันที (เพราะ CLK ยังทำงานอยู่)
- ในพัลส์ #1 : CLR เปลี่ยนเป็น $0$ ทำงานทันที $\Rightarrow Q = 0, \overline{Q} = 1$
- ระหว่างพัลส์ #1 กับ #2 : CLR กลับเป็น $1$ $\Rightarrow$ $Q$ คงเดิม ($Q = 0$) จนกว่าจะถึงพัลส์ถัดไป
- พัลส์ #2 เริ่ม (CLK เป็น $0$) : $R=1$, $S=0$ $\Rightarrow$ Reset $\Rightarrow Q = 0$
- ในพัลส์ #2 : $R$ เปลี่ยนเป็น $0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 0$ ทันที (เพราะ CLK ยังทำงานอยู่)
- ในพัลส์ #2 : $S$ เปลี่ยนเป็น $1$ $\Rightarrow$ Set $\Rightarrow Q = 1$ ทันที (เพราะ CLK ยังทำงานอยู่)
- ระหว่างพัลส์ #2 กับ #3 : PS เปลี่ยนเป็น $0$ ทำงานทันที $\Rightarrow Q = 1, \overline{Q} = 0$
- พัลส์ #3 เริ่ม : PS เป็น $0$ อยู่ จึงไม่ดูอินพุต $\Rightarrow Q = 1$
- ในพัลส์ #3 : PS กลับเป็น $1$ $\Rightarrow$ ขณะนี้ CLK ยังทำงานอยู่ $Q$ จึงตามอินพุตทันที $\Rightarrow Q = 0$
- พัลส์ #4 เริ่ม (CLK เป็น $0$) : $R=0$, $S=0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 0$
- ในพัลส์ #4 : $S$ เปลี่ยนเป็น $1$ $\Rightarrow$ Set $\Rightarrow Q = 1$ ทันที (เพราะ CLK ยังทำงานอยู่)
- พัลส์ #5 เริ่ม (CLK เป็น $0$) : $R=0$, $S=0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 1$
- ในพัลส์ #5 : $R$ เปลี่ยนเป็น $1$ $\Rightarrow$ Reset $\Rightarrow Q = 0$ ทันที (เพราะ CLK ยังทำงานอยู่)

$\mathbf{Ans}\quad \text{รูปคลื่น } Q \text{ และ } \overline{Q} \text{ ตามรูป}$

| เหตุการณ์ | $Q$ | $\overline{Q}$ |
|:-:|:-:|:-:|
| พัลส์ #1 เริ่ม | $1$ | $0$ |
| S เปลี่ยน ในพัลส์ #1 | $1$ | $0$ |
| CLR = 0 | $0$ | $1$ |
| CLR กลับเป็น 1 | $0$ | $1$ |
| พัลส์ #2 เริ่ม | $0$ | $1$ |
| R เปลี่ยน ในพัลส์ #2 | $0$ | $1$ |
| S เปลี่ยน ในพัลส์ #2 | $1$ | $0$ |
| PS = 0 | $1$ | $0$ |
| พัลส์ #3 เริ่ม | $1$ | $0$ |
| PS กลับเป็น 1 | $0$ | $1$ |
| พัลส์ #4 เริ่ม | $0$ | $1$ |
| S เปลี่ยน ในพัลส์ #4 | $1$ | $0$ |
| พัลส์ #5 เริ่ม | $1$ | $0$ |
| R เปลี่ยน ในพัลส์ #5 | $0$ | $1$ |

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="464" viewBox="0 0 726 464" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="458"/>
<line x1="190" y1="26" x2="190" y2="458"/>
<line x1="254" y1="26" x2="254" y2="458"/>
<line x1="318" y1="26" x2="318" y2="458"/>
<line x1="382" y1="26" x2="382" y2="458"/>
<line x1="446" y1="26" x2="446" y2="458"/>
<line x1="510" y1="26" x2="510" y2="458"/>
<line x1="574" y1="26" x2="574" y2="458"/>
<line x1="638" y1="26" x2="638" y2="458"/>
<line x1="702" y1="26" x2="702" y2="458"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,44 L350,44 L350,71.2 L414,71.2 L414,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,104 L182,104 L182,131.2 L230,131.2 L230,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<path d="M62,164 L126,164 L126,191.2 L190,191.2 L190,164 L254,164 L254,191.2 L318,191.2 L318,164 L382,164 L382,191.2 L446,191.2 L446,164 L510,164 L510,191.2 L574,191.2 L574,164 L638,164 L638,191.2 L702,191.2 L702,164 L702,164" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">R</text>
<path d="M62,251.2 L222,251.2 L222,224 L270,224 L270,251.2 L398,251.2 L398,224 L478,224 L478,251.2 L654,251.2 L654,224 L702,224" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">S</text>
<path d="M62,311.2 L94,311.2 L94,284 L158,284 L158,311.2 L286,311.2 L286,284 L334,284 L334,311.2 L526,311.2 L526,284 L606,284 L606,311.2 L702,311.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="363.6" text-anchor="end">Q</text>
<path d="M62,371.2 L126,371.2 L126,344 L182,344 L182,371.2 L286,371.2 L286,344 L414,344 L414,371.2 L526,371.2 L526,344 L654,344 L654,371.2 L702,371.2" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="423.6" text-anchor="end">Q</text>
<line x1="38" y1="408.6" x2="50" y2="408.6" stroke="currentColor" stroke-width="1.4"/>
<path d="M62,404 L126,404 L126,431.2 L182,431.2 L182,404 L286,404 L286,431.2 L414,431.2 L414,404 L526,404 L526,431.2 L654,431.2 L654,404 L702,404" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### เฉลย  Clock RS ฟลิป-ฟลอป ที่มี PS และ CLR ทำงานที่พัลส์ลบ (ชุดสัญญาณที่ 2) {ff=rs; trig=lo; pins=ps; set=b}

$\mathbf{Sol}^{n}$

ฟลิป-ฟลอปทำงานตลอดช่วงที่ CLK เป็น $0$ (พัลส์ #1 ถึง #5) ในช่วงนั้น $Q$ ตามอินพุตทันทีที่อินพุตเปลี่ยน นอกช่วงนั้น $Q$ คงเดิม แม้อินพุตจะเปลี่ยน PS และ CLR ที่เป็น $0$ ทำงานก่อนเสมอ จึงดูเหตุการณ์ตามลำดับเวลา

- พัลส์ #1 เริ่ม (CLK เป็น $0$) : $R=0$, $S=1$ $\Rightarrow$ Set $\Rightarrow Q = 1$
- ในพัลส์ #1 : $S$ เปลี่ยนเป็น $0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 1$ ทันที (เพราะ CLK ยังทำงานอยู่)
- ในพัลส์ #1 : $R$ เปลี่ยนเป็น $1$ $\Rightarrow$ Reset $\Rightarrow Q = 0$ ทันที (เพราะ CLK ยังทำงานอยู่)
- พัลส์ #2 เริ่ม (CLK เป็น $0$) : $R=0$, $S=0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 0$
- ในพัลส์ #2 : $S$ เปลี่ยนเป็น $1$ $\Rightarrow$ Set $\Rightarrow Q = 1$ ทันที (เพราะ CLK ยังทำงานอยู่)
- ในพัลส์ #2 : $S$ เปลี่ยนเป็น $0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 1$ ทันที (เพราะ CLK ยังทำงานอยู่)
- ระหว่างพัลส์ #2 กับ #3 : CLR เปลี่ยนเป็น $0$ ทำงานทันที $\Rightarrow Q = 0, \overline{Q} = 1$
- พัลส์ #3 เริ่ม : CLR เป็น $0$ อยู่ จึงไม่ดูอินพุต $\Rightarrow Q = 0$
- ในพัลส์ #3 : CLR กลับเป็น $1$ $\Rightarrow$ ขณะนี้ CLK ยังทำงานอยู่ $Q$ จึงตามอินพุตทันที $\Rightarrow Q = 0$
- ในพัลส์ #3 : $R$ เปลี่ยนเป็น $0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 0$ ทันที (เพราะ CLK ยังทำงานอยู่)
- พัลส์ #4 เริ่ม (CLK เป็น $0$) : $R=0$, $S=1$ $\Rightarrow$ Set $\Rightarrow Q = 1$
- ในพัลส์ #4 : $S$ เปลี่ยนเป็น $0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 1$ ทันที (เพราะ CLK ยังทำงานอยู่)
- ในพัลส์ #4 : $R$ เปลี่ยนเป็น $1$ $\Rightarrow$ Reset $\Rightarrow Q = 0$ ทันที (เพราะ CLK ยังทำงานอยู่)
- ระหว่างพัลส์ #4 กับ #5 : PS เปลี่ยนเป็น $0$ ทำงานทันที $\Rightarrow Q = 1, \overline{Q} = 0$
- พัลส์ #5 เริ่ม : PS เป็น $0$ อยู่ จึงไม่ดูอินพุต $\Rightarrow Q = 1$
- ในพัลส์ #5 : PS กลับเป็น $1$ $\Rightarrow$ ขณะนี้ CLK ยังทำงานอยู่ $Q$ จึงตามอินพุตทันที $\Rightarrow Q = 1$

$\mathbf{Ans}\quad \text{รูปคลื่น } Q \text{ และ } \overline{Q} \text{ ตามรูป}$

| เหตุการณ์ | $Q$ | $\overline{Q}$ |
|:-:|:-:|:-:|
| พัลส์ #1 เริ่ม | $1$ | $0$ |
| S เปลี่ยน ในพัลส์ #1 | $1$ | $0$ |
| R เปลี่ยน ในพัลส์ #1 | $0$ | $1$ |
| พัลส์ #2 เริ่ม | $0$ | $1$ |
| S เปลี่ยน ในพัลส์ #2 | $1$ | $0$ |
| S เปลี่ยน ในพัลส์ #2 | $1$ | $0$ |
| CLR = 0 | $0$ | $1$ |
| พัลส์ #3 เริ่ม | $0$ | $1$ |
| CLR กลับเป็น 1 | $0$ | $1$ |
| R เปลี่ยน ในพัลส์ #3 | $0$ | $1$ |
| พัลส์ #4 เริ่ม | $1$ | $0$ |
| S เปลี่ยน ในพัลส์ #4 | $1$ | $0$ |
| R เปลี่ยน ในพัลส์ #4 | $0$ | $1$ |
| PS = 0 | $1$ | $0$ |
| พัลส์ #5 เริ่ม | $1$ | $0$ |
| PS กลับเป็น 1 | $1$ | $0$ |

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="464" viewBox="0 0 726 464" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="458"/>
<line x1="190" y1="26" x2="190" y2="458"/>
<line x1="254" y1="26" x2="254" y2="458"/>
<line x1="318" y1="26" x2="318" y2="458"/>
<line x1="382" y1="26" x2="382" y2="458"/>
<line x1="446" y1="26" x2="446" y2="458"/>
<line x1="510" y1="26" x2="510" y2="458"/>
<line x1="574" y1="26" x2="574" y2="458"/>
<line x1="638" y1="26" x2="638" y2="458"/>
<line x1="702" y1="26" x2="702" y2="458"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,44 L606,44 L606,71.2 L670,71.2 L670,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,104 L350,104 L350,131.2 L414,131.2 L414,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<path d="M62,164 L126,164 L126,191.2 L190,191.2 L190,164 L254,164 L254,191.2 L318,191.2 L318,164 L382,164 L382,191.2 L446,191.2 L446,164 L510,164 L510,191.2 L574,191.2 L574,164 L638,164 L638,191.2 L702,191.2 L702,164 L702,164" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">R</text>
<path d="M62,251.2 L158,251.2 L158,224 L222,224 L222,251.2 L398,251.2 L398,224 L430,224 L430,251.2 L558,251.2 L558,224 L590,224 L590,251.2 L702,251.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">S</text>
<path d="M62,284 L142,284 L142,311.2 L270,311.2 L270,284 L302,284 L302,311.2 L462,311.2 L462,284 L542,284 L542,311.2 L702,311.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="363.6" text-anchor="end">Q</text>
<path d="M62,371.2 L126,371.2 L126,344 L158,344 L158,371.2 L270,371.2 L270,344 L350,344 L350,371.2 L510,371.2 L510,344 L558,344 L558,371.2 L606,371.2 L606,344 L702,344" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="423.6" text-anchor="end">Q</text>
<line x1="38" y1="408.6" x2="50" y2="408.6" stroke="currentColor" stroke-width="1.4"/>
<path d="M62,404 L126,404 L126,431.2 L158,431.2 L158,404 L270,404 L270,431.2 L350,431.2 L350,404 L510,404 L510,431.2 L558,431.2 L558,404 L606,404 L606,431.2 L702,431.2" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### เฉลย  Clock RS ฟลิป-ฟลอป ที่มี PS และ CLR ทำงานที่พัลส์ลบ (ชุดสัญญาณที่ 3) {ff=rs; trig=lo; pins=ps; set=c}

$\mathbf{Sol}^{n}$

ฟลิป-ฟลอปทำงานตลอดช่วงที่ CLK เป็น $0$ (พัลส์ #1 ถึง #5) ในช่วงนั้น $Q$ ตามอินพุตทันทีที่อินพุตเปลี่ยน นอกช่วงนั้น $Q$ คงเดิม แม้อินพุตจะเปลี่ยน PS และ CLR ที่เป็น $0$ ทำงานก่อนเสมอ จึงดูเหตุการณ์ตามลำดับเวลา

- พัลส์ #1 เริ่ม (CLK เป็น $0$) : $R=0$, $S=0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 0$
- ในพัลส์ #1 : $S$ เปลี่ยนเป็น $1$ $\Rightarrow$ Set $\Rightarrow Q = 1$ ทันที (เพราะ CLK ยังทำงานอยู่)
- ในพัลส์ #1 : $S$ เปลี่ยนเป็น $0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 1$ ทันที (เพราะ CLK ยังทำงานอยู่)
- พัลส์ #2 เริ่ม (CLK เป็น $0$) : $R=0$, $S=0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 1$
- ในพัลส์ #2 : $R$ เปลี่ยนเป็น $1$ $\Rightarrow$ Reset $\Rightarrow Q = 0$ ทันที (เพราะ CLK ยังทำงานอยู่)
- ในพัลส์ #2 : PS เปลี่ยนเป็น $0$ ทำงานทันที $\Rightarrow Q = 1, \overline{Q} = 0$
- ระหว่างพัลส์ #2 กับ #3 : PS กลับเป็น $1$ $\Rightarrow$ $Q$ คงเดิม ($Q = 1$) จนกว่าจะถึงพัลส์ถัดไป
- พัลส์ #3 เริ่ม (CLK เป็น $0$) : $R=0$, $S=0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 1$
- ในพัลส์ #3 : $S$ เปลี่ยนเป็น $1$ $\Rightarrow$ Set $\Rightarrow Q = 1$ ทันที (เพราะ CLK ยังทำงานอยู่)
- ในพัลส์ #3 : $S$ เปลี่ยนเป็น $0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 1$ ทันที (เพราะ CLK ยังทำงานอยู่)
- ในพัลส์ #3 : CLR เปลี่ยนเป็น $0$ ทำงานทันที $\Rightarrow Q = 0, \overline{Q} = 1$
- ระหว่างพัลส์ #3 กับ #4 : CLR กลับเป็น $1$ $\Rightarrow$ $Q$ คงเดิม ($Q = 0$) จนกว่าจะถึงพัลส์ถัดไป
- พัลส์ #4 เริ่ม (CLK เป็น $0$) : $R=0$, $S=0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 0$
- ในพัลส์ #4 : $S$ เปลี่ยนเป็น $1$ $\Rightarrow$ Set $\Rightarrow Q = 1$ ทันที (เพราะ CLK ยังทำงานอยู่)
- ในพัลส์ #4 : $S$ เปลี่ยนเป็น $0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 1$ ทันที (เพราะ CLK ยังทำงานอยู่)
- พัลส์ #5 เริ่ม (CLK เป็น $0$) : $R=0$, $S=0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 1$
- ในพัลส์ #5 : $R$ เปลี่ยนเป็น $1$ $\Rightarrow$ Reset $\Rightarrow Q = 0$ ทันที (เพราะ CLK ยังทำงานอยู่)
- ในพัลส์ #5 : $R$ เปลี่ยนเป็น $0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 0$ ทันที (เพราะ CLK ยังทำงานอยู่)

$\mathbf{Ans}\quad \text{รูปคลื่น } Q \text{ และ } \overline{Q} \text{ ตามรูป}$

| เหตุการณ์ | $Q$ | $\overline{Q}$ |
|:-:|:-:|:-:|
| พัลส์ #1 เริ่ม | $0$ | $1$ |
| S เปลี่ยน ในพัลส์ #1 | $1$ | $0$ |
| S เปลี่ยน ในพัลส์ #1 | $1$ | $0$ |
| พัลส์ #2 เริ่ม | $1$ | $0$ |
| R เปลี่ยน ในพัลส์ #2 | $0$ | $1$ |
| PS = 0 | $1$ | $0$ |
| PS กลับเป็น 1 | $1$ | $0$ |
| พัลส์ #3 เริ่ม | $1$ | $0$ |
| S เปลี่ยน ในพัลส์ #3 | $1$ | $0$ |
| S เปลี่ยน ในพัลส์ #3 | $1$ | $0$ |
| CLR = 0 | $0$ | $1$ |
| CLR กลับเป็น 1 | $0$ | $1$ |
| พัลส์ #4 เริ่ม | $0$ | $1$ |
| S เปลี่ยน ในพัลส์ #4 | $1$ | $0$ |
| S เปลี่ยน ในพัลส์ #4 | $1$ | $0$ |
| พัลส์ #5 เริ่ม | $1$ | $0$ |
| R เปลี่ยน ในพัลส์ #5 | $0$ | $1$ |
| R เปลี่ยน ในพัลส์ #5 | $0$ | $1$ |

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="726" height="464" viewBox="0 0 726 464" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="126" y1="26" x2="126" y2="458"/>
<line x1="190" y1="26" x2="190" y2="458"/>
<line x1="254" y1="26" x2="254" y2="458"/>
<line x1="318" y1="26" x2="318" y2="458"/>
<line x1="382" y1="26" x2="382" y2="458"/>
<line x1="446" y1="26" x2="446" y2="458"/>
<line x1="510" y1="26" x2="510" y2="458"/>
<line x1="574" y1="26" x2="574" y2="458"/>
<line x1="638" y1="26" x2="638" y2="458"/>
<line x1="702" y1="26" x2="702" y2="458"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,44 L286,44 L286,71.2 L350,71.2 L350,44 L702,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,104 L438,104 L438,131.2 L486,131.2 L486,104 L702,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<path d="M62,164 L126,164 L126,191.2 L190,191.2 L190,164 L254,164 L254,191.2 L318,191.2 L318,164 L382,164 L382,191.2 L446,191.2 L446,164 L510,164 L510,191.2 L574,191.2 L574,164 L638,164 L638,191.2 L702,191.2 L702,164 L702,164" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">R</text>
<path d="M62,251.2 L260.4,251.2 L260.4,224 L292.4,224 L292.4,251.2 L334,251.2 L334,224 L366,224 L366,251.2 L644.4,251.2 L644.4,224 L676.4,224 L676.4,251.2 L702,251.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">S</text>
<path d="M62,311.2 L132.4,311.2 L132.4,284 L164.4,284 L164.4,311.2 L388.4,311.2 L388.4,284 L420.4,284 L420.4,311.2 L516.4,311.2 L516.4,284 L548.4,284 L548.4,311.2 L702,311.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="363.6" text-anchor="end">Q</text>
<path d="M62,371.2 L132.4,371.2 L132.4,344 L260.4,344 L260.4,371.2 L286,371.2 L286,344 L438,344 L438,371.2 L516.4,371.2 L516.4,344 L644.4,344 L644.4,371.2 L702,371.2" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="423.6" text-anchor="end">Q</text>
<line x1="38" y1="408.6" x2="50" y2="408.6" stroke="currentColor" stroke-width="1.4"/>
<path d="M62,404 L132.4,404 L132.4,431.2 L260.4,431.2 L260.4,404 L286,404 L286,431.2 L438,431.2 L438,404 L516.4,404 L516.4,431.2 L644.4,431.2 L644.4,404 L702,404" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>
