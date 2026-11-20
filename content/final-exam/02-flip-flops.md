# ข้อสอบปลายภาค ข้อ 2 ฟลิป-ฟลอป (Flip-Flop)

@select set ตัวอย่าง | a=1 | b=2 | c=3
@select ff ชนิดฟลิป-ฟลอป | jk=JK | d=D | t=T | rs=Clock RS
@select trig การกระตุ้น | rise=ขอบขาขึ้น (↑) | fall=ขอบขาลง (↓)
@select pins ขา PS และ CLR | none=ไม่มี | ps=มี PS และ CLR

---

## ข้อ 2 ฟลิป-ฟลอป

@choices

### ข้อ 2  JK ฟลิป-ฟลอป ทำงานที่ขอบขาขึ้นของสัญญาณนาฬิกา เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=jk; trig=rise; pins=none; set=a}

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
<path d="M62,251.2 L126,251.2 L126,224 L158,224" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">Q</text>
<line x1="38" y1="288.6" x2="50" y2="288.6" stroke="currentColor" stroke-width="1.4"/>
<path d="M62,284 L126,284 L126,311.2 L158,311.2" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  JK ฟลิป-ฟลอป ทำงานที่ขอบขาขึ้นของสัญญาณนาฬิกา เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=jk; trig=rise; pins=none; set=b}

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
<path d="M62,251.2 L158,251.2" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">Q</text>
<line x1="38" y1="288.6" x2="50" y2="288.6" stroke="currentColor" stroke-width="1.4"/>
<path d="M62,284 L158,284" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  JK ฟลิป-ฟลอป ทำงานที่ขอบขาขึ้นของสัญญาณนาฬิกา เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=jk; trig=rise; pins=none; set=c}

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
<path d="M62,251.2 L126,251.2 L126,224 L158,224" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">Q</text>
<line x1="38" y1="288.6" x2="50" y2="288.6" stroke="currentColor" stroke-width="1.4"/>
<path d="M62,284 L126,284 L126,311.2 L158,311.2" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  JK ฟลิป-ฟลอป ที่มี PS และ CLR ทำงานที่ขอบขาขึ้นของสัญญาณนาฬิกา จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=jk; trig=rise; pins=ps; set=a}

**ตารางการทำงาน** ($x$ = อะไรก็ได้, $Q_0$ = $Q$ ก่อนหน้า)

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

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="814" height="464" viewBox="0 0 814 464" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="62" y1="26" x2="62" y2="458"/>
<line x1="118" y1="26" x2="118" y2="458"/>
<line x1="174" y1="26" x2="174" y2="458"/>
<line x1="230" y1="26" x2="230" y2="458"/>
<line x1="286" y1="26" x2="286" y2="458"/>
<line x1="342" y1="26" x2="342" y2="458"/>
<line x1="398" y1="26" x2="398" y2="458"/>
<line x1="454" y1="26" x2="454" y2="458"/>
<line x1="510" y1="26" x2="510" y2="458"/>
<line x1="566" y1="26" x2="566" y2="458"/>
<line x1="622" y1="26" x2="622" y2="458"/>
<line x1="678" y1="26" x2="678" y2="458"/>
<line x1="734" y1="26" x2="734" y2="458"/>
<line x1="790" y1="26" x2="790" y2="458"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,71.2 L174,71.2 L174,44 L790,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,131.2 L118,131.2 L118,104 L174,104 L174,131.2 L230,131.2 L230,104 L790,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<text x="90" y="183.6" text-anchor="middle" font-size="16">x</text>
<text x="146" y="183.6" text-anchor="middle" font-size="16">x</text>
<text x="202" y="183.6" text-anchor="middle" font-size="16">x</text>
<path d="M230,191.2 L286,191.2 L286,164 L342,164 L342,191.2 L398,191.2 L398,164 L454,164 L454,191.2 L510,191.2 L510,164 L566,164 L566,191.2 L622,191.2 L622,164 L678,164 L678,191.2 L734,191.2 L734,164 L790,164" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">J</text>
<text x="90" y="243.6" text-anchor="middle" font-size="16">x</text>
<text x="146" y="243.6" text-anchor="middle" font-size="16">x</text>
<text x="202" y="243.6" text-anchor="middle" font-size="16">x</text>
<path d="M230,224 L328,224 L328,251.2 L482,251.2 L482,224 L538,224 L538,251.2 L678,251.2 L678,224 L790,224" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">K</text>
<text x="90" y="303.6" text-anchor="middle" font-size="16">x</text>
<text x="146" y="303.6" text-anchor="middle" font-size="16">x</text>
<text x="202" y="303.6" text-anchor="middle" font-size="16">x</text>
<path d="M230,311.2 L328,311.2 L328,284 L538,284 L538,311.2 L678,311.2 L678,284 L790,284" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="363.6" text-anchor="end">Q</text>
<path d="M62,344 L174,344 L174,371.2 L230,371.2" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="423.6" text-anchor="end">Q</text>
<line x1="38" y1="408.6" x2="50" y2="408.6" stroke="currentColor" stroke-width="1.4"/>
<path d="M62,404 L118,404 L118,431.2 L174,431.2 L174,404 L230,404" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="62" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">0</tspan></text>
<text x="118" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">1</tspan></text>
<text x="174" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">2</tspan></text>
<text x="230" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">3</tspan></text>
<text x="286" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">4</tspan></text>
<text x="342" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">5</tspan></text>
<text x="398" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">6</tspan></text>
<text x="454" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">7</tspan></text>
<text x="510" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">8</tspan></text>
<text x="566" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">9</tspan></text>
<text x="622" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">10</tspan></text>
<text x="678" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">11</tspan></text>
<text x="734" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">12</tspan></text>
<text x="790" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">13</tspan></text>
</svg>
</div>

### ข้อ 2  JK ฟลิป-ฟลอป ที่มี PS และ CLR ทำงานที่ขอบขาขึ้นของสัญญาณนาฬิกา จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=jk; trig=rise; pins=ps; set=b}

**ตารางการทำงาน** ($x$ = อะไรก็ได้, $Q_0$ = $Q$ ก่อนหน้า)

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

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="814" height="464" viewBox="0 0 814 464" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="62" y1="26" x2="62" y2="458"/>
<line x1="118" y1="26" x2="118" y2="458"/>
<line x1="174" y1="26" x2="174" y2="458"/>
<line x1="230" y1="26" x2="230" y2="458"/>
<line x1="286" y1="26" x2="286" y2="458"/>
<line x1="342" y1="26" x2="342" y2="458"/>
<line x1="398" y1="26" x2="398" y2="458"/>
<line x1="454" y1="26" x2="454" y2="458"/>
<line x1="510" y1="26" x2="510" y2="458"/>
<line x1="566" y1="26" x2="566" y2="458"/>
<line x1="622" y1="26" x2="622" y2="458"/>
<line x1="678" y1="26" x2="678" y2="458"/>
<line x1="734" y1="26" x2="734" y2="458"/>
<line x1="790" y1="26" x2="790" y2="458"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,71.2 L174,71.2 L174,44 L790,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,131.2 L118,131.2 L118,104 L174,104 L174,131.2 L230,131.2 L230,104 L790,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<text x="90" y="183.6" text-anchor="middle" font-size="16">x</text>
<text x="146" y="183.6" text-anchor="middle" font-size="16">x</text>
<text x="202" y="183.6" text-anchor="middle" font-size="16">x</text>
<path d="M230,191.2 L286,191.2 L286,164 L342,164 L342,191.2 L398,191.2 L398,164 L454,164 L454,191.2 L510,191.2 L510,164 L566,164 L566,191.2 L622,191.2 L622,164 L678,164 L678,191.2 L734,191.2 L734,164 L790,164" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">J</text>
<text x="90" y="243.6" text-anchor="middle" font-size="16">x</text>
<text x="146" y="243.6" text-anchor="middle" font-size="16">x</text>
<text x="202" y="243.6" text-anchor="middle" font-size="16">x</text>
<path d="M230,251.2 L342,251.2 L342,224 L664,224 L664,251.2 L790,251.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">K</text>
<text x="90" y="303.6" text-anchor="middle" font-size="16">x</text>
<text x="146" y="303.6" text-anchor="middle" font-size="16">x</text>
<text x="202" y="303.6" text-anchor="middle" font-size="16">x</text>
<path d="M230,284 L580,284 L580,311.2 L790,311.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="363.6" text-anchor="end">Q</text>
<path d="M62,344 L174,344 L174,371.2 L230,371.2" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="423.6" text-anchor="end">Q</text>
<line x1="38" y1="408.6" x2="50" y2="408.6" stroke="currentColor" stroke-width="1.4"/>
<path d="M62,404 L118,404 L118,431.2 L174,431.2 L174,404 L230,404" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="62" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">0</tspan></text>
<text x="118" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">1</tspan></text>
<text x="174" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">2</tspan></text>
<text x="230" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">3</tspan></text>
<text x="286" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">4</tspan></text>
<text x="342" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">5</tspan></text>
<text x="398" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">6</tspan></text>
<text x="454" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">7</tspan></text>
<text x="510" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">8</tspan></text>
<text x="566" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">9</tspan></text>
<text x="622" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">10</tspan></text>
<text x="678" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">11</tspan></text>
<text x="734" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">12</tspan></text>
<text x="790" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">13</tspan></text>
</svg>
</div>

### ข้อ 2  JK ฟลิป-ฟลอป ที่มี PS และ CLR ทำงานที่ขอบขาขึ้นของสัญญาณนาฬิกา จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=jk; trig=rise; pins=ps; set=c}

**ตารางการทำงาน** ($x$ = อะไรก็ได้, $Q_0$ = $Q$ ก่อนหน้า)

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

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="814" height="464" viewBox="0 0 814 464" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="62" y1="26" x2="62" y2="458"/>
<line x1="118" y1="26" x2="118" y2="458"/>
<line x1="174" y1="26" x2="174" y2="458"/>
<line x1="230" y1="26" x2="230" y2="458"/>
<line x1="286" y1="26" x2="286" y2="458"/>
<line x1="342" y1="26" x2="342" y2="458"/>
<line x1="398" y1="26" x2="398" y2="458"/>
<line x1="454" y1="26" x2="454" y2="458"/>
<line x1="510" y1="26" x2="510" y2="458"/>
<line x1="566" y1="26" x2="566" y2="458"/>
<line x1="622" y1="26" x2="622" y2="458"/>
<line x1="678" y1="26" x2="678" y2="458"/>
<line x1="734" y1="26" x2="734" y2="458"/>
<line x1="790" y1="26" x2="790" y2="458"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,71.2 L174,71.2 L174,44 L790,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,131.2 L118,131.2 L118,104 L174,104 L174,131.2 L230,131.2 L230,104 L790,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<text x="90" y="183.6" text-anchor="middle" font-size="16">x</text>
<text x="146" y="183.6" text-anchor="middle" font-size="16">x</text>
<text x="202" y="183.6" text-anchor="middle" font-size="16">x</text>
<path d="M230,191.2 L286,191.2 L286,164 L342,164 L342,191.2 L398,191.2 L398,164 L454,164 L454,191.2 L510,191.2 L510,164 L566,164 L566,191.2 L622,191.2 L622,164 L678,164 L678,191.2 L734,191.2 L734,164 L790,164" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">J</text>
<text x="90" y="243.6" text-anchor="middle" font-size="16">x</text>
<text x="146" y="243.6" text-anchor="middle" font-size="16">x</text>
<text x="202" y="243.6" text-anchor="middle" font-size="16">x</text>
<path d="M230,224 L370,224 L370,251.2 L524,251.2 L524,224 L790,224" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">K</text>
<text x="90" y="303.6" text-anchor="middle" font-size="16">x</text>
<text x="146" y="303.6" text-anchor="middle" font-size="16">x</text>
<text x="202" y="303.6" text-anchor="middle" font-size="16">x</text>
<path d="M230,284 L370,284 L370,311.2 L440,311.2 L440,284 L524,284 L524,311.2 L692,311.2 L692,284 L790,284" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="363.6" text-anchor="end">Q</text>
<path d="M62,344 L174,344 L174,371.2 L230,371.2" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="423.6" text-anchor="end">Q</text>
<line x1="38" y1="408.6" x2="50" y2="408.6" stroke="currentColor" stroke-width="1.4"/>
<path d="M62,404 L118,404 L118,431.2 L174,431.2 L174,404 L230,404" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="62" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">0</tspan></text>
<text x="118" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">1</tspan></text>
<text x="174" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">2</tspan></text>
<text x="230" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">3</tspan></text>
<text x="286" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">4</tspan></text>
<text x="342" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">5</tspan></text>
<text x="398" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">6</tspan></text>
<text x="454" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">7</tspan></text>
<text x="510" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">8</tspan></text>
<text x="566" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">9</tspan></text>
<text x="622" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">10</tspan></text>
<text x="678" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">11</tspan></text>
<text x="734" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">12</tspan></text>
<text x="790" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">13</tspan></text>
</svg>
</div>

### ข้อ 2  JK ฟลิป-ฟลอป ทำงานที่ขอบขาลงของสัญญาณนาฬิกา เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=jk; trig=fall; pins=none; set=a}

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
<path d="M62,251.2 L126,251.2 L126,224 L158,224" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">Q</text>
<line x1="38" y1="288.6" x2="50" y2="288.6" stroke="currentColor" stroke-width="1.4"/>
<path d="M62,284 L126,284 L126,311.2 L158,311.2" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  JK ฟลิป-ฟลอป ทำงานที่ขอบขาลงของสัญญาณนาฬิกา เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=jk; trig=fall; pins=none; set=b}

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
<path d="M62,251.2 L158,251.2" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">Q</text>
<line x1="38" y1="288.6" x2="50" y2="288.6" stroke="currentColor" stroke-width="1.4"/>
<path d="M62,284 L158,284" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  JK ฟลิป-ฟลอป ทำงานที่ขอบขาลงของสัญญาณนาฬิกา เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=jk; trig=fall; pins=none; set=c}

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
<path d="M62,251.2 L126,251.2 L126,224 L158,224" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">Q</text>
<line x1="38" y1="288.6" x2="50" y2="288.6" stroke="currentColor" stroke-width="1.4"/>
<path d="M62,284 L126,284 L126,311.2 L158,311.2" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  JK ฟลิป-ฟลอป ที่มี PS และ CLR ทำงานที่ขอบขาลงของสัญญาณนาฬิกา จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=jk; trig=fall; pins=ps; set=a}

**ตารางการทำงาน** ($x$ = อะไรก็ได้, $Q_0$ = $Q$ ก่อนหน้า)

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

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="814" height="464" viewBox="0 0 814 464" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="62" y1="26" x2="62" y2="458"/>
<line x1="118" y1="26" x2="118" y2="458"/>
<line x1="174" y1="26" x2="174" y2="458"/>
<line x1="230" y1="26" x2="230" y2="458"/>
<line x1="286" y1="26" x2="286" y2="458"/>
<line x1="342" y1="26" x2="342" y2="458"/>
<line x1="398" y1="26" x2="398" y2="458"/>
<line x1="454" y1="26" x2="454" y2="458"/>
<line x1="510" y1="26" x2="510" y2="458"/>
<line x1="566" y1="26" x2="566" y2="458"/>
<line x1="622" y1="26" x2="622" y2="458"/>
<line x1="678" y1="26" x2="678" y2="458"/>
<line x1="734" y1="26" x2="734" y2="458"/>
<line x1="790" y1="26" x2="790" y2="458"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,71.2 L174,71.2 L174,44 L790,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,131.2 L118,131.2 L118,104 L174,104 L174,131.2 L230,131.2 L230,104 L790,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<text x="90" y="183.6" text-anchor="middle" font-size="16">x</text>
<text x="146" y="183.6" text-anchor="middle" font-size="16">x</text>
<text x="202" y="183.6" text-anchor="middle" font-size="16">x</text>
<path d="M230,164 L286,164 L286,191.2 L342,191.2 L342,164 L398,164 L398,191.2 L454,191.2 L454,164 L510,164 L510,191.2 L566,191.2 L566,164 L622,164 L622,191.2 L678,191.2 L678,164 L734,164 L734,191.2 L790,191.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">J</text>
<text x="90" y="243.6" text-anchor="middle" font-size="16">x</text>
<text x="146" y="243.6" text-anchor="middle" font-size="16">x</text>
<text x="202" y="243.6" text-anchor="middle" font-size="16">x</text>
<path d="M230,224 L328,224 L328,251.2 L482,251.2 L482,224 L538,224 L538,251.2 L678,251.2 L678,224 L790,224" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">K</text>
<text x="90" y="303.6" text-anchor="middle" font-size="16">x</text>
<text x="146" y="303.6" text-anchor="middle" font-size="16">x</text>
<text x="202" y="303.6" text-anchor="middle" font-size="16">x</text>
<path d="M230,311.2 L328,311.2 L328,284 L538,284 L538,311.2 L678,311.2 L678,284 L790,284" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="363.6" text-anchor="end">Q</text>
<path d="M62,344 L174,344 L174,371.2 L230,371.2" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="423.6" text-anchor="end">Q</text>
<line x1="38" y1="408.6" x2="50" y2="408.6" stroke="currentColor" stroke-width="1.4"/>
<path d="M62,404 L118,404 L118,431.2 L174,431.2 L174,404 L230,404" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="62" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">0</tspan></text>
<text x="118" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">1</tspan></text>
<text x="174" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">2</tspan></text>
<text x="230" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">3</tspan></text>
<text x="286" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">4</tspan></text>
<text x="342" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">5</tspan></text>
<text x="398" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">6</tspan></text>
<text x="454" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">7</tspan></text>
<text x="510" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">8</tspan></text>
<text x="566" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">9</tspan></text>
<text x="622" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">10</tspan></text>
<text x="678" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">11</tspan></text>
<text x="734" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">12</tspan></text>
<text x="790" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">13</tspan></text>
</svg>
</div>

### ข้อ 2  JK ฟลิป-ฟลอป ที่มี PS และ CLR ทำงานที่ขอบขาลงของสัญญาณนาฬิกา จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=jk; trig=fall; pins=ps; set=b}

**ตารางการทำงาน** ($x$ = อะไรก็ได้, $Q_0$ = $Q$ ก่อนหน้า)

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

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="814" height="464" viewBox="0 0 814 464" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="62" y1="26" x2="62" y2="458"/>
<line x1="118" y1="26" x2="118" y2="458"/>
<line x1="174" y1="26" x2="174" y2="458"/>
<line x1="230" y1="26" x2="230" y2="458"/>
<line x1="286" y1="26" x2="286" y2="458"/>
<line x1="342" y1="26" x2="342" y2="458"/>
<line x1="398" y1="26" x2="398" y2="458"/>
<line x1="454" y1="26" x2="454" y2="458"/>
<line x1="510" y1="26" x2="510" y2="458"/>
<line x1="566" y1="26" x2="566" y2="458"/>
<line x1="622" y1="26" x2="622" y2="458"/>
<line x1="678" y1="26" x2="678" y2="458"/>
<line x1="734" y1="26" x2="734" y2="458"/>
<line x1="790" y1="26" x2="790" y2="458"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,71.2 L174,71.2 L174,44 L790,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,131.2 L118,131.2 L118,104 L174,104 L174,131.2 L230,131.2 L230,104 L790,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<text x="90" y="183.6" text-anchor="middle" font-size="16">x</text>
<text x="146" y="183.6" text-anchor="middle" font-size="16">x</text>
<text x="202" y="183.6" text-anchor="middle" font-size="16">x</text>
<path d="M230,164 L286,164 L286,191.2 L342,191.2 L342,164 L398,164 L398,191.2 L454,191.2 L454,164 L510,164 L510,191.2 L566,191.2 L566,164 L622,164 L622,191.2 L678,191.2 L678,164 L734,164 L734,191.2 L790,191.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">J</text>
<text x="90" y="243.6" text-anchor="middle" font-size="16">x</text>
<text x="146" y="243.6" text-anchor="middle" font-size="16">x</text>
<text x="202" y="243.6" text-anchor="middle" font-size="16">x</text>
<path d="M230,251.2 L342,251.2 L342,224 L664,224 L664,251.2 L790,251.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">K</text>
<text x="90" y="303.6" text-anchor="middle" font-size="16">x</text>
<text x="146" y="303.6" text-anchor="middle" font-size="16">x</text>
<text x="202" y="303.6" text-anchor="middle" font-size="16">x</text>
<path d="M230,284 L580,284 L580,311.2 L790,311.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="363.6" text-anchor="end">Q</text>
<path d="M62,344 L174,344 L174,371.2 L230,371.2" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="423.6" text-anchor="end">Q</text>
<line x1="38" y1="408.6" x2="50" y2="408.6" stroke="currentColor" stroke-width="1.4"/>
<path d="M62,404 L118,404 L118,431.2 L174,431.2 L174,404 L230,404" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="62" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">0</tspan></text>
<text x="118" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">1</tspan></text>
<text x="174" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">2</tspan></text>
<text x="230" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">3</tspan></text>
<text x="286" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">4</tspan></text>
<text x="342" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">5</tspan></text>
<text x="398" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">6</tspan></text>
<text x="454" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">7</tspan></text>
<text x="510" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">8</tspan></text>
<text x="566" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">9</tspan></text>
<text x="622" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">10</tspan></text>
<text x="678" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">11</tspan></text>
<text x="734" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">12</tspan></text>
<text x="790" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">13</tspan></text>
</svg>
</div>

### ข้อ 2  JK ฟลิป-ฟลอป ที่มี PS และ CLR ทำงานที่ขอบขาลงของสัญญาณนาฬิกา จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=jk; trig=fall; pins=ps; set=c}

**ตารางการทำงาน** ($x$ = อะไรก็ได้, $Q_0$ = $Q$ ก่อนหน้า)

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

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="814" height="464" viewBox="0 0 814 464" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="62" y1="26" x2="62" y2="458"/>
<line x1="118" y1="26" x2="118" y2="458"/>
<line x1="174" y1="26" x2="174" y2="458"/>
<line x1="230" y1="26" x2="230" y2="458"/>
<line x1="286" y1="26" x2="286" y2="458"/>
<line x1="342" y1="26" x2="342" y2="458"/>
<line x1="398" y1="26" x2="398" y2="458"/>
<line x1="454" y1="26" x2="454" y2="458"/>
<line x1="510" y1="26" x2="510" y2="458"/>
<line x1="566" y1="26" x2="566" y2="458"/>
<line x1="622" y1="26" x2="622" y2="458"/>
<line x1="678" y1="26" x2="678" y2="458"/>
<line x1="734" y1="26" x2="734" y2="458"/>
<line x1="790" y1="26" x2="790" y2="458"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,71.2 L174,71.2 L174,44 L790,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,131.2 L118,131.2 L118,104 L174,104 L174,131.2 L230,131.2 L230,104 L790,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<text x="90" y="183.6" text-anchor="middle" font-size="16">x</text>
<text x="146" y="183.6" text-anchor="middle" font-size="16">x</text>
<text x="202" y="183.6" text-anchor="middle" font-size="16">x</text>
<path d="M230,164 L286,164 L286,191.2 L342,191.2 L342,164 L398,164 L398,191.2 L454,191.2 L454,164 L510,164 L510,191.2 L566,191.2 L566,164 L622,164 L622,191.2 L678,191.2 L678,164 L734,164 L734,191.2 L790,191.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">J</text>
<text x="90" y="243.6" text-anchor="middle" font-size="16">x</text>
<text x="146" y="243.6" text-anchor="middle" font-size="16">x</text>
<text x="202" y="243.6" text-anchor="middle" font-size="16">x</text>
<path d="M230,224 L370,224 L370,251.2 L524,251.2 L524,224 L790,224" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">K</text>
<text x="90" y="303.6" text-anchor="middle" font-size="16">x</text>
<text x="146" y="303.6" text-anchor="middle" font-size="16">x</text>
<text x="202" y="303.6" text-anchor="middle" font-size="16">x</text>
<path d="M230,284 L370,284 L370,311.2 L440,311.2 L440,284 L524,284 L524,311.2 L692,311.2 L692,284 L790,284" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="363.6" text-anchor="end">Q</text>
<path d="M62,344 L174,344 L174,371.2 L230,371.2" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="423.6" text-anchor="end">Q</text>
<line x1="38" y1="408.6" x2="50" y2="408.6" stroke="currentColor" stroke-width="1.4"/>
<path d="M62,404 L118,404 L118,431.2 L174,431.2 L174,404 L230,404" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="62" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">0</tspan></text>
<text x="118" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">1</tspan></text>
<text x="174" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">2</tspan></text>
<text x="230" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">3</tspan></text>
<text x="286" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">4</tspan></text>
<text x="342" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">5</tspan></text>
<text x="398" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">6</tspan></text>
<text x="454" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">7</tspan></text>
<text x="510" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">8</tspan></text>
<text x="566" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">9</tspan></text>
<text x="622" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">10</tspan></text>
<text x="678" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">11</tspan></text>
<text x="734" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">12</tspan></text>
<text x="790" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">13</tspan></text>
</svg>
</div>

### ข้อ 2  D ฟลิป-ฟลอป ทำงานที่ขอบขาขึ้นของสัญญาณนาฬิกา เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=d; trig=rise; pins=none; set=a}

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
<path d="M62,191.2 L126,191.2 L126,164 L158,164" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">Q</text>
<line x1="38" y1="228.6" x2="50" y2="228.6" stroke="currentColor" stroke-width="1.4"/>
<path d="M62,224 L126,224 L126,251.2 L158,251.2" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  D ฟลิป-ฟลอป ทำงานที่ขอบขาขึ้นของสัญญาณนาฬิกา เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=d; trig=rise; pins=none; set=b}

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
<path d="M62,191.2 L158,191.2" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">Q</text>
<line x1="38" y1="228.6" x2="50" y2="228.6" stroke="currentColor" stroke-width="1.4"/>
<path d="M62,224 L158,224" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  D ฟลิป-ฟลอป ทำงานที่ขอบขาขึ้นของสัญญาณนาฬิกา เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=d; trig=rise; pins=none; set=c}

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
<path d="M62,191.2 L126,191.2 L126,164 L158,164" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">Q</text>
<line x1="38" y1="228.6" x2="50" y2="228.6" stroke="currentColor" stroke-width="1.4"/>
<path d="M62,224 L126,224 L126,251.2 L158,251.2" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  D ฟลิป-ฟลอป ที่มี PS และ CLR ทำงานที่ขอบขาขึ้นของสัญญาณนาฬิกา จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=d; trig=rise; pins=ps; set=a}

**ตารางการทำงาน** ($x$ = อะไรก็ได้, $Q_0$ = $Q$ ก่อนหน้า)

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

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="814" height="404" viewBox="0 0 814 404" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="62" y1="26" x2="62" y2="398"/>
<line x1="118" y1="26" x2="118" y2="398"/>
<line x1="174" y1="26" x2="174" y2="398"/>
<line x1="230" y1="26" x2="230" y2="398"/>
<line x1="286" y1="26" x2="286" y2="398"/>
<line x1="342" y1="26" x2="342" y2="398"/>
<line x1="398" y1="26" x2="398" y2="398"/>
<line x1="454" y1="26" x2="454" y2="398"/>
<line x1="510" y1="26" x2="510" y2="398"/>
<line x1="566" y1="26" x2="566" y2="398"/>
<line x1="622" y1="26" x2="622" y2="398"/>
<line x1="678" y1="26" x2="678" y2="398"/>
<line x1="734" y1="26" x2="734" y2="398"/>
<line x1="790" y1="26" x2="790" y2="398"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,71.2 L174,71.2 L174,44 L790,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,131.2 L118,131.2 L118,104 L174,104 L174,131.2 L230,131.2 L230,104 L790,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<text x="90" y="183.6" text-anchor="middle" font-size="16">x</text>
<text x="146" y="183.6" text-anchor="middle" font-size="16">x</text>
<text x="202" y="183.6" text-anchor="middle" font-size="16">x</text>
<path d="M230,191.2 L286,191.2 L286,164 L342,164 L342,191.2 L398,191.2 L398,164 L454,164 L454,191.2 L510,191.2 L510,164 L566,164 L566,191.2 L622,191.2 L622,164 L678,164 L678,191.2 L734,191.2 L734,164 L790,164" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">D</text>
<text x="90" y="243.6" text-anchor="middle" font-size="16">x</text>
<text x="146" y="243.6" text-anchor="middle" font-size="16">x</text>
<text x="202" y="243.6" text-anchor="middle" font-size="16">x</text>
<path d="M230,224 L328,224 L328,251.2 L482,251.2 L482,224 L678,224 L678,251.2 L790,251.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">Q</text>
<path d="M62,284 L174,284 L174,311.2 L230,311.2" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="363.6" text-anchor="end">Q</text>
<line x1="38" y1="348.6" x2="50" y2="348.6" stroke="currentColor" stroke-width="1.4"/>
<path d="M62,344 L118,344 L118,371.2 L174,371.2 L174,344 L230,344" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="62" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">0</tspan></text>
<text x="118" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">1</tspan></text>
<text x="174" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">2</tspan></text>
<text x="230" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">3</tspan></text>
<text x="286" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">4</tspan></text>
<text x="342" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">5</tspan></text>
<text x="398" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">6</tspan></text>
<text x="454" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">7</tspan></text>
<text x="510" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">8</tspan></text>
<text x="566" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">9</tspan></text>
<text x="622" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">10</tspan></text>
<text x="678" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">11</tspan></text>
<text x="734" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">12</tspan></text>
<text x="790" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">13</tspan></text>
</svg>
</div>

### ข้อ 2  D ฟลิป-ฟลอป ที่มี PS และ CLR ทำงานที่ขอบขาขึ้นของสัญญาณนาฬิกา จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=d; trig=rise; pins=ps; set=b}

**ตารางการทำงาน** ($x$ = อะไรก็ได้, $Q_0$ = $Q$ ก่อนหน้า)

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

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="814" height="404" viewBox="0 0 814 404" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="62" y1="26" x2="62" y2="398"/>
<line x1="118" y1="26" x2="118" y2="398"/>
<line x1="174" y1="26" x2="174" y2="398"/>
<line x1="230" y1="26" x2="230" y2="398"/>
<line x1="286" y1="26" x2="286" y2="398"/>
<line x1="342" y1="26" x2="342" y2="398"/>
<line x1="398" y1="26" x2="398" y2="398"/>
<line x1="454" y1="26" x2="454" y2="398"/>
<line x1="510" y1="26" x2="510" y2="398"/>
<line x1="566" y1="26" x2="566" y2="398"/>
<line x1="622" y1="26" x2="622" y2="398"/>
<line x1="678" y1="26" x2="678" y2="398"/>
<line x1="734" y1="26" x2="734" y2="398"/>
<line x1="790" y1="26" x2="790" y2="398"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,71.2 L174,71.2 L174,44 L790,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,131.2 L118,131.2 L118,104 L174,104 L174,131.2 L230,131.2 L230,104 L790,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<text x="90" y="183.6" text-anchor="middle" font-size="16">x</text>
<text x="146" y="183.6" text-anchor="middle" font-size="16">x</text>
<text x="202" y="183.6" text-anchor="middle" font-size="16">x</text>
<path d="M230,191.2 L286,191.2 L286,164 L342,164 L342,191.2 L398,191.2 L398,164 L454,164 L454,191.2 L510,191.2 L510,164 L566,164 L566,191.2 L622,191.2 L622,164 L678,164 L678,191.2 L734,191.2 L734,164 L790,164" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">D</text>
<text x="90" y="243.6" text-anchor="middle" font-size="16">x</text>
<text x="146" y="243.6" text-anchor="middle" font-size="16">x</text>
<text x="202" y="243.6" text-anchor="middle" font-size="16">x</text>
<path d="M230,251.2 L342,251.2 L342,224 L580,224 L580,251.2 L664,251.2 L664,224 L790,224" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">Q</text>
<path d="M62,284 L174,284 L174,311.2 L230,311.2" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="363.6" text-anchor="end">Q</text>
<line x1="38" y1="348.6" x2="50" y2="348.6" stroke="currentColor" stroke-width="1.4"/>
<path d="M62,344 L118,344 L118,371.2 L174,371.2 L174,344 L230,344" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="62" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">0</tspan></text>
<text x="118" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">1</tspan></text>
<text x="174" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">2</tspan></text>
<text x="230" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">3</tspan></text>
<text x="286" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">4</tspan></text>
<text x="342" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">5</tspan></text>
<text x="398" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">6</tspan></text>
<text x="454" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">7</tspan></text>
<text x="510" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">8</tspan></text>
<text x="566" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">9</tspan></text>
<text x="622" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">10</tspan></text>
<text x="678" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">11</tspan></text>
<text x="734" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">12</tspan></text>
<text x="790" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">13</tspan></text>
</svg>
</div>

### ข้อ 2  D ฟลิป-ฟลอป ที่มี PS และ CLR ทำงานที่ขอบขาขึ้นของสัญญาณนาฬิกา จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=d; trig=rise; pins=ps; set=c}

**ตารางการทำงาน** ($x$ = อะไรก็ได้, $Q_0$ = $Q$ ก่อนหน้า)

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

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="814" height="404" viewBox="0 0 814 404" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="62" y1="26" x2="62" y2="398"/>
<line x1="118" y1="26" x2="118" y2="398"/>
<line x1="174" y1="26" x2="174" y2="398"/>
<line x1="230" y1="26" x2="230" y2="398"/>
<line x1="286" y1="26" x2="286" y2="398"/>
<line x1="342" y1="26" x2="342" y2="398"/>
<line x1="398" y1="26" x2="398" y2="398"/>
<line x1="454" y1="26" x2="454" y2="398"/>
<line x1="510" y1="26" x2="510" y2="398"/>
<line x1="566" y1="26" x2="566" y2="398"/>
<line x1="622" y1="26" x2="622" y2="398"/>
<line x1="678" y1="26" x2="678" y2="398"/>
<line x1="734" y1="26" x2="734" y2="398"/>
<line x1="790" y1="26" x2="790" y2="398"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,71.2 L174,71.2 L174,44 L790,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,131.2 L118,131.2 L118,104 L174,104 L174,131.2 L230,131.2 L230,104 L790,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<text x="90" y="183.6" text-anchor="middle" font-size="16">x</text>
<text x="146" y="183.6" text-anchor="middle" font-size="16">x</text>
<text x="202" y="183.6" text-anchor="middle" font-size="16">x</text>
<path d="M230,191.2 L286,191.2 L286,164 L342,164 L342,191.2 L398,191.2 L398,164 L454,164 L454,191.2 L510,191.2 L510,164 L566,164 L566,191.2 L622,191.2 L622,164 L678,164 L678,191.2 L734,191.2 L734,164 L790,164" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">D</text>
<text x="90" y="243.6" text-anchor="middle" font-size="16">x</text>
<text x="146" y="243.6" text-anchor="middle" font-size="16">x</text>
<text x="202" y="243.6" text-anchor="middle" font-size="16">x</text>
<path d="M230,224 L440,224 L440,251.2 L524,251.2 L524,224 L692,224 L692,251.2 L790,251.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">Q</text>
<path d="M62,284 L174,284 L174,311.2 L230,311.2" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="363.6" text-anchor="end">Q</text>
<line x1="38" y1="348.6" x2="50" y2="348.6" stroke="currentColor" stroke-width="1.4"/>
<path d="M62,344 L118,344 L118,371.2 L174,371.2 L174,344 L230,344" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="62" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">0</tspan></text>
<text x="118" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">1</tspan></text>
<text x="174" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">2</tspan></text>
<text x="230" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">3</tspan></text>
<text x="286" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">4</tspan></text>
<text x="342" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">5</tspan></text>
<text x="398" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">6</tspan></text>
<text x="454" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">7</tspan></text>
<text x="510" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">8</tspan></text>
<text x="566" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">9</tspan></text>
<text x="622" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">10</tspan></text>
<text x="678" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">11</tspan></text>
<text x="734" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">12</tspan></text>
<text x="790" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">13</tspan></text>
</svg>
</div>

### ข้อ 2  D ฟลิป-ฟลอป ทำงานที่ขอบขาลงของสัญญาณนาฬิกา เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=d; trig=fall; pins=none; set=a}

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
<path d="M62,191.2 L126,191.2 L126,164 L158,164" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">Q</text>
<line x1="38" y1="228.6" x2="50" y2="228.6" stroke="currentColor" stroke-width="1.4"/>
<path d="M62,224 L126,224 L126,251.2 L158,251.2" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  D ฟลิป-ฟลอป ทำงานที่ขอบขาลงของสัญญาณนาฬิกา เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=d; trig=fall; pins=none; set=b}

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
<path d="M62,191.2 L158,191.2" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">Q</text>
<line x1="38" y1="228.6" x2="50" y2="228.6" stroke="currentColor" stroke-width="1.4"/>
<path d="M62,224 L158,224" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  D ฟลิป-ฟลอป ทำงานที่ขอบขาลงของสัญญาณนาฬิกา เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=d; trig=fall; pins=none; set=c}

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
<path d="M62,191.2 L126,191.2 L126,164 L158,164" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">Q</text>
<line x1="38" y1="228.6" x2="50" y2="228.6" stroke="currentColor" stroke-width="1.4"/>
<path d="M62,224 L126,224 L126,251.2 L158,251.2" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  D ฟลิป-ฟลอป ที่มี PS และ CLR ทำงานที่ขอบขาลงของสัญญาณนาฬิกา จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=d; trig=fall; pins=ps; set=a}

**ตารางการทำงาน** ($x$ = อะไรก็ได้, $Q_0$ = $Q$ ก่อนหน้า)

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

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="814" height="404" viewBox="0 0 814 404" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="62" y1="26" x2="62" y2="398"/>
<line x1="118" y1="26" x2="118" y2="398"/>
<line x1="174" y1="26" x2="174" y2="398"/>
<line x1="230" y1="26" x2="230" y2="398"/>
<line x1="286" y1="26" x2="286" y2="398"/>
<line x1="342" y1="26" x2="342" y2="398"/>
<line x1="398" y1="26" x2="398" y2="398"/>
<line x1="454" y1="26" x2="454" y2="398"/>
<line x1="510" y1="26" x2="510" y2="398"/>
<line x1="566" y1="26" x2="566" y2="398"/>
<line x1="622" y1="26" x2="622" y2="398"/>
<line x1="678" y1="26" x2="678" y2="398"/>
<line x1="734" y1="26" x2="734" y2="398"/>
<line x1="790" y1="26" x2="790" y2="398"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,71.2 L174,71.2 L174,44 L790,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,131.2 L118,131.2 L118,104 L174,104 L174,131.2 L230,131.2 L230,104 L790,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<text x="90" y="183.6" text-anchor="middle" font-size="16">x</text>
<text x="146" y="183.6" text-anchor="middle" font-size="16">x</text>
<text x="202" y="183.6" text-anchor="middle" font-size="16">x</text>
<path d="M230,164 L286,164 L286,191.2 L342,191.2 L342,164 L398,164 L398,191.2 L454,191.2 L454,164 L510,164 L510,191.2 L566,191.2 L566,164 L622,164 L622,191.2 L678,191.2 L678,164 L734,164 L734,191.2 L790,191.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">D</text>
<text x="90" y="243.6" text-anchor="middle" font-size="16">x</text>
<text x="146" y="243.6" text-anchor="middle" font-size="16">x</text>
<text x="202" y="243.6" text-anchor="middle" font-size="16">x</text>
<path d="M230,224 L328,224 L328,251.2 L482,251.2 L482,224 L678,224 L678,251.2 L790,251.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">Q</text>
<path d="M62,284 L174,284 L174,311.2 L230,311.2" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="363.6" text-anchor="end">Q</text>
<line x1="38" y1="348.6" x2="50" y2="348.6" stroke="currentColor" stroke-width="1.4"/>
<path d="M62,344 L118,344 L118,371.2 L174,371.2 L174,344 L230,344" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="62" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">0</tspan></text>
<text x="118" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">1</tspan></text>
<text x="174" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">2</tspan></text>
<text x="230" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">3</tspan></text>
<text x="286" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">4</tspan></text>
<text x="342" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">5</tspan></text>
<text x="398" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">6</tspan></text>
<text x="454" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">7</tspan></text>
<text x="510" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">8</tspan></text>
<text x="566" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">9</tspan></text>
<text x="622" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">10</tspan></text>
<text x="678" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">11</tspan></text>
<text x="734" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">12</tspan></text>
<text x="790" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">13</tspan></text>
</svg>
</div>

### ข้อ 2  D ฟลิป-ฟลอป ที่มี PS และ CLR ทำงานที่ขอบขาลงของสัญญาณนาฬิกา จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=d; trig=fall; pins=ps; set=b}

**ตารางการทำงาน** ($x$ = อะไรก็ได้, $Q_0$ = $Q$ ก่อนหน้า)

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

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="814" height="404" viewBox="0 0 814 404" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="62" y1="26" x2="62" y2="398"/>
<line x1="118" y1="26" x2="118" y2="398"/>
<line x1="174" y1="26" x2="174" y2="398"/>
<line x1="230" y1="26" x2="230" y2="398"/>
<line x1="286" y1="26" x2="286" y2="398"/>
<line x1="342" y1="26" x2="342" y2="398"/>
<line x1="398" y1="26" x2="398" y2="398"/>
<line x1="454" y1="26" x2="454" y2="398"/>
<line x1="510" y1="26" x2="510" y2="398"/>
<line x1="566" y1="26" x2="566" y2="398"/>
<line x1="622" y1="26" x2="622" y2="398"/>
<line x1="678" y1="26" x2="678" y2="398"/>
<line x1="734" y1="26" x2="734" y2="398"/>
<line x1="790" y1="26" x2="790" y2="398"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,71.2 L174,71.2 L174,44 L790,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,131.2 L118,131.2 L118,104 L174,104 L174,131.2 L230,131.2 L230,104 L790,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<text x="90" y="183.6" text-anchor="middle" font-size="16">x</text>
<text x="146" y="183.6" text-anchor="middle" font-size="16">x</text>
<text x="202" y="183.6" text-anchor="middle" font-size="16">x</text>
<path d="M230,164 L286,164 L286,191.2 L342,191.2 L342,164 L398,164 L398,191.2 L454,191.2 L454,164 L510,164 L510,191.2 L566,191.2 L566,164 L622,164 L622,191.2 L678,191.2 L678,164 L734,164 L734,191.2 L790,191.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">D</text>
<text x="90" y="243.6" text-anchor="middle" font-size="16">x</text>
<text x="146" y="243.6" text-anchor="middle" font-size="16">x</text>
<text x="202" y="243.6" text-anchor="middle" font-size="16">x</text>
<path d="M230,251.2 L342,251.2 L342,224 L580,224 L580,251.2 L664,251.2 L664,224 L790,224" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">Q</text>
<path d="M62,284 L174,284 L174,311.2 L230,311.2" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="363.6" text-anchor="end">Q</text>
<line x1="38" y1="348.6" x2="50" y2="348.6" stroke="currentColor" stroke-width="1.4"/>
<path d="M62,344 L118,344 L118,371.2 L174,371.2 L174,344 L230,344" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="62" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">0</tspan></text>
<text x="118" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">1</tspan></text>
<text x="174" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">2</tspan></text>
<text x="230" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">3</tspan></text>
<text x="286" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">4</tspan></text>
<text x="342" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">5</tspan></text>
<text x="398" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">6</tspan></text>
<text x="454" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">7</tspan></text>
<text x="510" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">8</tspan></text>
<text x="566" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">9</tspan></text>
<text x="622" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">10</tspan></text>
<text x="678" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">11</tspan></text>
<text x="734" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">12</tspan></text>
<text x="790" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">13</tspan></text>
</svg>
</div>

### ข้อ 2  D ฟลิป-ฟลอป ที่มี PS และ CLR ทำงานที่ขอบขาลงของสัญญาณนาฬิกา จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=d; trig=fall; pins=ps; set=c}

**ตารางการทำงาน** ($x$ = อะไรก็ได้, $Q_0$ = $Q$ ก่อนหน้า)

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

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="814" height="404" viewBox="0 0 814 404" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="62" y1="26" x2="62" y2="398"/>
<line x1="118" y1="26" x2="118" y2="398"/>
<line x1="174" y1="26" x2="174" y2="398"/>
<line x1="230" y1="26" x2="230" y2="398"/>
<line x1="286" y1="26" x2="286" y2="398"/>
<line x1="342" y1="26" x2="342" y2="398"/>
<line x1="398" y1="26" x2="398" y2="398"/>
<line x1="454" y1="26" x2="454" y2="398"/>
<line x1="510" y1="26" x2="510" y2="398"/>
<line x1="566" y1="26" x2="566" y2="398"/>
<line x1="622" y1="26" x2="622" y2="398"/>
<line x1="678" y1="26" x2="678" y2="398"/>
<line x1="734" y1="26" x2="734" y2="398"/>
<line x1="790" y1="26" x2="790" y2="398"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,71.2 L174,71.2 L174,44 L790,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,131.2 L118,131.2 L118,104 L174,104 L174,131.2 L230,131.2 L230,104 L790,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<text x="90" y="183.6" text-anchor="middle" font-size="16">x</text>
<text x="146" y="183.6" text-anchor="middle" font-size="16">x</text>
<text x="202" y="183.6" text-anchor="middle" font-size="16">x</text>
<path d="M230,164 L286,164 L286,191.2 L342,191.2 L342,164 L398,164 L398,191.2 L454,191.2 L454,164 L510,164 L510,191.2 L566,191.2 L566,164 L622,164 L622,191.2 L678,191.2 L678,164 L734,164 L734,191.2 L790,191.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">D</text>
<text x="90" y="243.6" text-anchor="middle" font-size="16">x</text>
<text x="146" y="243.6" text-anchor="middle" font-size="16">x</text>
<text x="202" y="243.6" text-anchor="middle" font-size="16">x</text>
<path d="M230,224 L440,224 L440,251.2 L524,251.2 L524,224 L692,224 L692,251.2 L790,251.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">Q</text>
<path d="M62,284 L174,284 L174,311.2 L230,311.2" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="363.6" text-anchor="end">Q</text>
<line x1="38" y1="348.6" x2="50" y2="348.6" stroke="currentColor" stroke-width="1.4"/>
<path d="M62,344 L118,344 L118,371.2 L174,371.2 L174,344 L230,344" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="62" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">0</tspan></text>
<text x="118" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">1</tspan></text>
<text x="174" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">2</tspan></text>
<text x="230" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">3</tspan></text>
<text x="286" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">4</tspan></text>
<text x="342" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">5</tspan></text>
<text x="398" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">6</tspan></text>
<text x="454" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">7</tspan></text>
<text x="510" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">8</tspan></text>
<text x="566" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">9</tspan></text>
<text x="622" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">10</tspan></text>
<text x="678" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">11</tspan></text>
<text x="734" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">12</tspan></text>
<text x="790" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">13</tspan></text>
</svg>
</div>

### ข้อ 2  T ฟลิป-ฟลอป ทำงานที่ขอบขาขึ้นของสัญญาณนาฬิกา เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=t; trig=rise; pins=none; set=a}

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
<path d="M62,191.2 L126,191.2 L126,164 L158,164" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">Q</text>
<line x1="38" y1="228.6" x2="50" y2="228.6" stroke="currentColor" stroke-width="1.4"/>
<path d="M62,224 L126,224 L126,251.2 L158,251.2" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  T ฟลิป-ฟลอป ทำงานที่ขอบขาขึ้นของสัญญาณนาฬิกา เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=t; trig=rise; pins=none; set=b}

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
<path d="M62,191.2 L158,191.2" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">Q</text>
<line x1="38" y1="228.6" x2="50" y2="228.6" stroke="currentColor" stroke-width="1.4"/>
<path d="M62,224 L158,224" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  T ฟลิป-ฟลอป ทำงานที่ขอบขาขึ้นของสัญญาณนาฬิกา เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=t; trig=rise; pins=none; set=c}

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
<path d="M62,191.2 L126,191.2 L126,164 L158,164" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">Q</text>
<line x1="38" y1="228.6" x2="50" y2="228.6" stroke="currentColor" stroke-width="1.4"/>
<path d="M62,224 L126,224 L126,251.2 L158,251.2" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  T ฟลิป-ฟลอป ที่มี PS และ CLR ทำงานที่ขอบขาขึ้นของสัญญาณนาฬิกา จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=t; trig=rise; pins=ps; set=a}

**ตารางการทำงาน** ($x$ = อะไรก็ได้, $Q_0$ = $Q$ ก่อนหน้า)

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

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="814" height="404" viewBox="0 0 814 404" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="62" y1="26" x2="62" y2="398"/>
<line x1="118" y1="26" x2="118" y2="398"/>
<line x1="174" y1="26" x2="174" y2="398"/>
<line x1="230" y1="26" x2="230" y2="398"/>
<line x1="286" y1="26" x2="286" y2="398"/>
<line x1="342" y1="26" x2="342" y2="398"/>
<line x1="398" y1="26" x2="398" y2="398"/>
<line x1="454" y1="26" x2="454" y2="398"/>
<line x1="510" y1="26" x2="510" y2="398"/>
<line x1="566" y1="26" x2="566" y2="398"/>
<line x1="622" y1="26" x2="622" y2="398"/>
<line x1="678" y1="26" x2="678" y2="398"/>
<line x1="734" y1="26" x2="734" y2="398"/>
<line x1="790" y1="26" x2="790" y2="398"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,71.2 L174,71.2 L174,44 L790,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,131.2 L118,131.2 L118,104 L174,104 L174,131.2 L230,131.2 L230,104 L790,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<text x="90" y="183.6" text-anchor="middle" font-size="16">x</text>
<text x="146" y="183.6" text-anchor="middle" font-size="16">x</text>
<text x="202" y="183.6" text-anchor="middle" font-size="16">x</text>
<path d="M230,191.2 L286,191.2 L286,164 L342,164 L342,191.2 L398,191.2 L398,164 L454,164 L454,191.2 L510,191.2 L510,164 L566,164 L566,191.2 L622,191.2 L622,164 L678,164 L678,191.2 L734,191.2 L734,164 L790,164" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">T</text>
<text x="90" y="243.6" text-anchor="middle" font-size="16">x</text>
<text x="146" y="243.6" text-anchor="middle" font-size="16">x</text>
<text x="202" y="243.6" text-anchor="middle" font-size="16">x</text>
<path d="M230,224 L482,224 L482,251.2 L538,251.2 L538,224 L678,224 L678,251.2 L790,251.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">Q</text>
<path d="M62,284 L174,284 L174,311.2 L230,311.2" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="363.6" text-anchor="end">Q</text>
<line x1="38" y1="348.6" x2="50" y2="348.6" stroke="currentColor" stroke-width="1.4"/>
<path d="M62,344 L118,344 L118,371.2 L174,371.2 L174,344 L230,344" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="62" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">0</tspan></text>
<text x="118" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">1</tspan></text>
<text x="174" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">2</tspan></text>
<text x="230" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">3</tspan></text>
<text x="286" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">4</tspan></text>
<text x="342" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">5</tspan></text>
<text x="398" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">6</tspan></text>
<text x="454" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">7</tspan></text>
<text x="510" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">8</tspan></text>
<text x="566" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">9</tspan></text>
<text x="622" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">10</tspan></text>
<text x="678" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">11</tspan></text>
<text x="734" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">12</tspan></text>
<text x="790" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">13</tspan></text>
</svg>
</div>

### ข้อ 2  T ฟลิป-ฟลอป ที่มี PS และ CLR ทำงานที่ขอบขาขึ้นของสัญญาณนาฬิกา จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=t; trig=rise; pins=ps; set=b}

**ตารางการทำงาน** ($x$ = อะไรก็ได้, $Q_0$ = $Q$ ก่อนหน้า)

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

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="814" height="404" viewBox="0 0 814 404" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="62" y1="26" x2="62" y2="398"/>
<line x1="118" y1="26" x2="118" y2="398"/>
<line x1="174" y1="26" x2="174" y2="398"/>
<line x1="230" y1="26" x2="230" y2="398"/>
<line x1="286" y1="26" x2="286" y2="398"/>
<line x1="342" y1="26" x2="342" y2="398"/>
<line x1="398" y1="26" x2="398" y2="398"/>
<line x1="454" y1="26" x2="454" y2="398"/>
<line x1="510" y1="26" x2="510" y2="398"/>
<line x1="566" y1="26" x2="566" y2="398"/>
<line x1="622" y1="26" x2="622" y2="398"/>
<line x1="678" y1="26" x2="678" y2="398"/>
<line x1="734" y1="26" x2="734" y2="398"/>
<line x1="790" y1="26" x2="790" y2="398"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,71.2 L174,71.2 L174,44 L790,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,131.2 L118,131.2 L118,104 L174,104 L174,131.2 L230,131.2 L230,104 L790,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<text x="90" y="183.6" text-anchor="middle" font-size="16">x</text>
<text x="146" y="183.6" text-anchor="middle" font-size="16">x</text>
<text x="202" y="183.6" text-anchor="middle" font-size="16">x</text>
<path d="M230,191.2 L286,191.2 L286,164 L342,164 L342,191.2 L398,191.2 L398,164 L454,164 L454,191.2 L510,191.2 L510,164 L566,164 L566,191.2 L622,191.2 L622,164 L678,164 L678,191.2 L734,191.2 L734,164 L790,164" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">T</text>
<text x="90" y="243.6" text-anchor="middle" font-size="16">x</text>
<text x="146" y="243.6" text-anchor="middle" font-size="16">x</text>
<text x="202" y="243.6" text-anchor="middle" font-size="16">x</text>
<path d="M230,251.2 L342,251.2 L342,224 L664,224 L664,251.2 L790,251.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">Q</text>
<path d="M62,284 L174,284 L174,311.2 L230,311.2" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="363.6" text-anchor="end">Q</text>
<line x1="38" y1="348.6" x2="50" y2="348.6" stroke="currentColor" stroke-width="1.4"/>
<path d="M62,344 L118,344 L118,371.2 L174,371.2 L174,344 L230,344" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="62" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">0</tspan></text>
<text x="118" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">1</tspan></text>
<text x="174" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">2</tspan></text>
<text x="230" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">3</tspan></text>
<text x="286" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">4</tspan></text>
<text x="342" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">5</tspan></text>
<text x="398" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">6</tspan></text>
<text x="454" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">7</tspan></text>
<text x="510" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">8</tspan></text>
<text x="566" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">9</tspan></text>
<text x="622" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">10</tspan></text>
<text x="678" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">11</tspan></text>
<text x="734" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">12</tspan></text>
<text x="790" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">13</tspan></text>
</svg>
</div>

### ข้อ 2  T ฟลิป-ฟลอป ที่มี PS และ CLR ทำงานที่ขอบขาขึ้นของสัญญาณนาฬิกา จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=t; trig=rise; pins=ps; set=c}

**ตารางการทำงาน** ($x$ = อะไรก็ได้, $Q_0$ = $Q$ ก่อนหน้า)

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

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="814" height="404" viewBox="0 0 814 404" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="62" y1="26" x2="62" y2="398"/>
<line x1="118" y1="26" x2="118" y2="398"/>
<line x1="174" y1="26" x2="174" y2="398"/>
<line x1="230" y1="26" x2="230" y2="398"/>
<line x1="286" y1="26" x2="286" y2="398"/>
<line x1="342" y1="26" x2="342" y2="398"/>
<line x1="398" y1="26" x2="398" y2="398"/>
<line x1="454" y1="26" x2="454" y2="398"/>
<line x1="510" y1="26" x2="510" y2="398"/>
<line x1="566" y1="26" x2="566" y2="398"/>
<line x1="622" y1="26" x2="622" y2="398"/>
<line x1="678" y1="26" x2="678" y2="398"/>
<line x1="734" y1="26" x2="734" y2="398"/>
<line x1="790" y1="26" x2="790" y2="398"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,71.2 L174,71.2 L174,44 L790,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,131.2 L118,131.2 L118,104 L174,104 L174,131.2 L230,131.2 L230,104 L790,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<text x="90" y="183.6" text-anchor="middle" font-size="16">x</text>
<text x="146" y="183.6" text-anchor="middle" font-size="16">x</text>
<text x="202" y="183.6" text-anchor="middle" font-size="16">x</text>
<path d="M230,191.2 L286,191.2 L286,164 L342,164 L342,191.2 L398,191.2 L398,164 L454,164 L454,191.2 L510,191.2 L510,164 L566,164 L566,191.2 L622,191.2 L622,164 L678,164 L678,191.2 L734,191.2 L734,164 L790,164" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">T</text>
<text x="90" y="243.6" text-anchor="middle" font-size="16">x</text>
<text x="146" y="243.6" text-anchor="middle" font-size="16">x</text>
<text x="202" y="243.6" text-anchor="middle" font-size="16">x</text>
<path d="M230,224 L370,224 L370,251.2 L440,251.2 L440,224 L524,224 L524,251.2 L692,251.2 L692,224 L790,224" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">Q</text>
<path d="M62,284 L174,284 L174,311.2 L230,311.2" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="363.6" text-anchor="end">Q</text>
<line x1="38" y1="348.6" x2="50" y2="348.6" stroke="currentColor" stroke-width="1.4"/>
<path d="M62,344 L118,344 L118,371.2 L174,371.2 L174,344 L230,344" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="62" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">0</tspan></text>
<text x="118" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">1</tspan></text>
<text x="174" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">2</tspan></text>
<text x="230" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">3</tspan></text>
<text x="286" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">4</tspan></text>
<text x="342" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">5</tspan></text>
<text x="398" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">6</tspan></text>
<text x="454" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">7</tspan></text>
<text x="510" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">8</tspan></text>
<text x="566" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">9</tspan></text>
<text x="622" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">10</tspan></text>
<text x="678" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">11</tspan></text>
<text x="734" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">12</tspan></text>
<text x="790" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">13</tspan></text>
</svg>
</div>

### ข้อ 2  T ฟลิป-ฟลอป ทำงานที่ขอบขาลงของสัญญาณนาฬิกา เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=t; trig=fall; pins=none; set=a}

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
<path d="M62,191.2 L126,191.2 L126,164 L158,164" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">Q</text>
<line x1="38" y1="228.6" x2="50" y2="228.6" stroke="currentColor" stroke-width="1.4"/>
<path d="M62,224 L126,224 L126,251.2 L158,251.2" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  T ฟลิป-ฟลอป ทำงานที่ขอบขาลงของสัญญาณนาฬิกา เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=t; trig=fall; pins=none; set=b}

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
<path d="M62,191.2 L158,191.2" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">Q</text>
<line x1="38" y1="228.6" x2="50" y2="228.6" stroke="currentColor" stroke-width="1.4"/>
<path d="M62,224 L158,224" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  T ฟลิป-ฟลอป ทำงานที่ขอบขาลงของสัญญาณนาฬิกา เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=t; trig=fall; pins=none; set=c}

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
<path d="M62,191.2 L126,191.2 L126,164 L158,164" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">Q</text>
<line x1="38" y1="228.6" x2="50" y2="228.6" stroke="currentColor" stroke-width="1.4"/>
<path d="M62,224 L126,224 L126,251.2 L158,251.2" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  T ฟลิป-ฟลอป ที่มี PS และ CLR ทำงานที่ขอบขาลงของสัญญาณนาฬิกา จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=t; trig=fall; pins=ps; set=a}

**ตารางการทำงาน** ($x$ = อะไรก็ได้, $Q_0$ = $Q$ ก่อนหน้า)

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

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="814" height="404" viewBox="0 0 814 404" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="62" y1="26" x2="62" y2="398"/>
<line x1="118" y1="26" x2="118" y2="398"/>
<line x1="174" y1="26" x2="174" y2="398"/>
<line x1="230" y1="26" x2="230" y2="398"/>
<line x1="286" y1="26" x2="286" y2="398"/>
<line x1="342" y1="26" x2="342" y2="398"/>
<line x1="398" y1="26" x2="398" y2="398"/>
<line x1="454" y1="26" x2="454" y2="398"/>
<line x1="510" y1="26" x2="510" y2="398"/>
<line x1="566" y1="26" x2="566" y2="398"/>
<line x1="622" y1="26" x2="622" y2="398"/>
<line x1="678" y1="26" x2="678" y2="398"/>
<line x1="734" y1="26" x2="734" y2="398"/>
<line x1="790" y1="26" x2="790" y2="398"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,71.2 L174,71.2 L174,44 L790,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,131.2 L118,131.2 L118,104 L174,104 L174,131.2 L230,131.2 L230,104 L790,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<text x="90" y="183.6" text-anchor="middle" font-size="16">x</text>
<text x="146" y="183.6" text-anchor="middle" font-size="16">x</text>
<text x="202" y="183.6" text-anchor="middle" font-size="16">x</text>
<path d="M230,164 L286,164 L286,191.2 L342,191.2 L342,164 L398,164 L398,191.2 L454,191.2 L454,164 L510,164 L510,191.2 L566,191.2 L566,164 L622,164 L622,191.2 L678,191.2 L678,164 L734,164 L734,191.2 L790,191.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">T</text>
<text x="90" y="243.6" text-anchor="middle" font-size="16">x</text>
<text x="146" y="243.6" text-anchor="middle" font-size="16">x</text>
<text x="202" y="243.6" text-anchor="middle" font-size="16">x</text>
<path d="M230,224 L482,224 L482,251.2 L538,251.2 L538,224 L678,224 L678,251.2 L790,251.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">Q</text>
<path d="M62,284 L174,284 L174,311.2 L230,311.2" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="363.6" text-anchor="end">Q</text>
<line x1="38" y1="348.6" x2="50" y2="348.6" stroke="currentColor" stroke-width="1.4"/>
<path d="M62,344 L118,344 L118,371.2 L174,371.2 L174,344 L230,344" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="62" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">0</tspan></text>
<text x="118" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">1</tspan></text>
<text x="174" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">2</tspan></text>
<text x="230" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">3</tspan></text>
<text x="286" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">4</tspan></text>
<text x="342" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">5</tspan></text>
<text x="398" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">6</tspan></text>
<text x="454" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">7</tspan></text>
<text x="510" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">8</tspan></text>
<text x="566" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">9</tspan></text>
<text x="622" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">10</tspan></text>
<text x="678" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">11</tspan></text>
<text x="734" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">12</tspan></text>
<text x="790" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">13</tspan></text>
</svg>
</div>

### ข้อ 2  T ฟลิป-ฟลอป ที่มี PS และ CLR ทำงานที่ขอบขาลงของสัญญาณนาฬิกา จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=t; trig=fall; pins=ps; set=b}

**ตารางการทำงาน** ($x$ = อะไรก็ได้, $Q_0$ = $Q$ ก่อนหน้า)

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

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="814" height="404" viewBox="0 0 814 404" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="62" y1="26" x2="62" y2="398"/>
<line x1="118" y1="26" x2="118" y2="398"/>
<line x1="174" y1="26" x2="174" y2="398"/>
<line x1="230" y1="26" x2="230" y2="398"/>
<line x1="286" y1="26" x2="286" y2="398"/>
<line x1="342" y1="26" x2="342" y2="398"/>
<line x1="398" y1="26" x2="398" y2="398"/>
<line x1="454" y1="26" x2="454" y2="398"/>
<line x1="510" y1="26" x2="510" y2="398"/>
<line x1="566" y1="26" x2="566" y2="398"/>
<line x1="622" y1="26" x2="622" y2="398"/>
<line x1="678" y1="26" x2="678" y2="398"/>
<line x1="734" y1="26" x2="734" y2="398"/>
<line x1="790" y1="26" x2="790" y2="398"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,71.2 L174,71.2 L174,44 L790,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,131.2 L118,131.2 L118,104 L174,104 L174,131.2 L230,131.2 L230,104 L790,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<text x="90" y="183.6" text-anchor="middle" font-size="16">x</text>
<text x="146" y="183.6" text-anchor="middle" font-size="16">x</text>
<text x="202" y="183.6" text-anchor="middle" font-size="16">x</text>
<path d="M230,164 L286,164 L286,191.2 L342,191.2 L342,164 L398,164 L398,191.2 L454,191.2 L454,164 L510,164 L510,191.2 L566,191.2 L566,164 L622,164 L622,191.2 L678,191.2 L678,164 L734,164 L734,191.2 L790,191.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">T</text>
<text x="90" y="243.6" text-anchor="middle" font-size="16">x</text>
<text x="146" y="243.6" text-anchor="middle" font-size="16">x</text>
<text x="202" y="243.6" text-anchor="middle" font-size="16">x</text>
<path d="M230,251.2 L342,251.2 L342,224 L664,224 L664,251.2 L790,251.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">Q</text>
<path d="M62,284 L174,284 L174,311.2 L230,311.2" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="363.6" text-anchor="end">Q</text>
<line x1="38" y1="348.6" x2="50" y2="348.6" stroke="currentColor" stroke-width="1.4"/>
<path d="M62,344 L118,344 L118,371.2 L174,371.2 L174,344 L230,344" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="62" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">0</tspan></text>
<text x="118" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">1</tspan></text>
<text x="174" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">2</tspan></text>
<text x="230" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">3</tspan></text>
<text x="286" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">4</tspan></text>
<text x="342" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">5</tspan></text>
<text x="398" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">6</tspan></text>
<text x="454" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">7</tspan></text>
<text x="510" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">8</tspan></text>
<text x="566" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">9</tspan></text>
<text x="622" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">10</tspan></text>
<text x="678" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">11</tspan></text>
<text x="734" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">12</tspan></text>
<text x="790" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">13</tspan></text>
</svg>
</div>

### ข้อ 2  T ฟลิป-ฟลอป ที่มี PS และ CLR ทำงานที่ขอบขาลงของสัญญาณนาฬิกา จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=t; trig=fall; pins=ps; set=c}

**ตารางการทำงาน** ($x$ = อะไรก็ได้, $Q_0$ = $Q$ ก่อนหน้า)

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

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="814" height="404" viewBox="0 0 814 404" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="62" y1="26" x2="62" y2="398"/>
<line x1="118" y1="26" x2="118" y2="398"/>
<line x1="174" y1="26" x2="174" y2="398"/>
<line x1="230" y1="26" x2="230" y2="398"/>
<line x1="286" y1="26" x2="286" y2="398"/>
<line x1="342" y1="26" x2="342" y2="398"/>
<line x1="398" y1="26" x2="398" y2="398"/>
<line x1="454" y1="26" x2="454" y2="398"/>
<line x1="510" y1="26" x2="510" y2="398"/>
<line x1="566" y1="26" x2="566" y2="398"/>
<line x1="622" y1="26" x2="622" y2="398"/>
<line x1="678" y1="26" x2="678" y2="398"/>
<line x1="734" y1="26" x2="734" y2="398"/>
<line x1="790" y1="26" x2="790" y2="398"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,71.2 L174,71.2 L174,44 L790,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,131.2 L118,131.2 L118,104 L174,104 L174,131.2 L230,131.2 L230,104 L790,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<text x="90" y="183.6" text-anchor="middle" font-size="16">x</text>
<text x="146" y="183.6" text-anchor="middle" font-size="16">x</text>
<text x="202" y="183.6" text-anchor="middle" font-size="16">x</text>
<path d="M230,164 L286,164 L286,191.2 L342,191.2 L342,164 L398,164 L398,191.2 L454,191.2 L454,164 L510,164 L510,191.2 L566,191.2 L566,164 L622,164 L622,191.2 L678,191.2 L678,164 L734,164 L734,191.2 L790,191.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">T</text>
<text x="90" y="243.6" text-anchor="middle" font-size="16">x</text>
<text x="146" y="243.6" text-anchor="middle" font-size="16">x</text>
<text x="202" y="243.6" text-anchor="middle" font-size="16">x</text>
<path d="M230,224 L370,224 L370,251.2 L440,251.2 L440,224 L524,224 L524,251.2 L692,251.2 L692,224 L790,224" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">Q</text>
<path d="M62,284 L174,284 L174,311.2 L230,311.2" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="363.6" text-anchor="end">Q</text>
<line x1="38" y1="348.6" x2="50" y2="348.6" stroke="currentColor" stroke-width="1.4"/>
<path d="M62,344 L118,344 L118,371.2 L174,371.2 L174,344 L230,344" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="62" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">0</tspan></text>
<text x="118" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">1</tspan></text>
<text x="174" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">2</tspan></text>
<text x="230" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">3</tspan></text>
<text x="286" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">4</tspan></text>
<text x="342" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">5</tspan></text>
<text x="398" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">6</tspan></text>
<text x="454" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">7</tspan></text>
<text x="510" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">8</tspan></text>
<text x="566" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">9</tspan></text>
<text x="622" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">10</tspan></text>
<text x="678" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">11</tspan></text>
<text x="734" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">12</tspan></text>
<text x="790" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">13</tspan></text>
</svg>
</div>

### ข้อ 2  Clock RS ฟลิป-ฟลอป ทำงานที่ขอบขาขึ้นของสัญญาณนาฬิกา เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=rs; trig=rise; pins=none; set=a}

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
<path d="M62,251.2 L126,251.2 L126,224 L158,224" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">Q</text>
<line x1="38" y1="288.6" x2="50" y2="288.6" stroke="currentColor" stroke-width="1.4"/>
<path d="M62,284 L126,284 L126,311.2 L158,311.2" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  Clock RS ฟลิป-ฟลอป ทำงานที่ขอบขาขึ้นของสัญญาณนาฬิกา เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=rs; trig=rise; pins=none; set=b}

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
<path d="M62,251.2 L158,251.2" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">Q</text>
<line x1="38" y1="288.6" x2="50" y2="288.6" stroke="currentColor" stroke-width="1.4"/>
<path d="M62,284 L158,284" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  Clock RS ฟลิป-ฟลอป ทำงานที่ขอบขาขึ้นของสัญญาณนาฬิกา เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=rs; trig=rise; pins=none; set=c}

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
<path d="M62,251.2 L126,251.2 L126,224 L158,224" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">Q</text>
<line x1="38" y1="288.6" x2="50" y2="288.6" stroke="currentColor" stroke-width="1.4"/>
<path d="M62,284 L126,284 L126,311.2 L158,311.2" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  Clock RS ฟลิป-ฟลอป ที่มี PS และ CLR ทำงานที่ขอบขาขึ้นของสัญญาณนาฬิกา จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=rs; trig=rise; pins=ps; set=a}

**ตารางการทำงาน** ($x$ = อะไรก็ได้, $Q_0$ = $Q$ ก่อนหน้า)

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

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="814" height="464" viewBox="0 0 814 464" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="62" y1="26" x2="62" y2="458"/>
<line x1="118" y1="26" x2="118" y2="458"/>
<line x1="174" y1="26" x2="174" y2="458"/>
<line x1="230" y1="26" x2="230" y2="458"/>
<line x1="286" y1="26" x2="286" y2="458"/>
<line x1="342" y1="26" x2="342" y2="458"/>
<line x1="398" y1="26" x2="398" y2="458"/>
<line x1="454" y1="26" x2="454" y2="458"/>
<line x1="510" y1="26" x2="510" y2="458"/>
<line x1="566" y1="26" x2="566" y2="458"/>
<line x1="622" y1="26" x2="622" y2="458"/>
<line x1="678" y1="26" x2="678" y2="458"/>
<line x1="734" y1="26" x2="734" y2="458"/>
<line x1="790" y1="26" x2="790" y2="458"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,71.2 L174,71.2 L174,44 L790,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,131.2 L118,131.2 L118,104 L174,104 L174,131.2 L230,131.2 L230,104 L790,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<text x="90" y="183.6" text-anchor="middle" font-size="16">x</text>
<text x="146" y="183.6" text-anchor="middle" font-size="16">x</text>
<text x="202" y="183.6" text-anchor="middle" font-size="16">x</text>
<path d="M230,191.2 L286,191.2 L286,164 L342,164 L342,191.2 L398,191.2 L398,164 L454,164 L454,191.2 L510,191.2 L510,164 L566,164 L566,191.2 L622,191.2 L622,164 L678,164 L678,191.2 L734,191.2 L734,164 L790,164" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">R</text>
<text x="90" y="243.6" text-anchor="middle" font-size="16">x</text>
<text x="146" y="243.6" text-anchor="middle" font-size="16">x</text>
<text x="202" y="243.6" text-anchor="middle" font-size="16">x</text>
<path d="M230,251.2 L482,251.2 L482,224 L538,224 L538,251.2 L678,251.2 L678,224 L790,224" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">S</text>
<text x="90" y="303.6" text-anchor="middle" font-size="16">x</text>
<text x="146" y="303.6" text-anchor="middle" font-size="16">x</text>
<text x="202" y="303.6" text-anchor="middle" font-size="16">x</text>
<path d="M230,284 L328,284 L328,311.2 L538,311.2 L538,284 L678,284 L678,311.2 L790,311.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="363.6" text-anchor="end">Q</text>
<path d="M62,344 L174,344 L174,371.2 L230,371.2" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="423.6" text-anchor="end">Q</text>
<line x1="38" y1="408.6" x2="50" y2="408.6" stroke="currentColor" stroke-width="1.4"/>
<path d="M62,404 L118,404 L118,431.2 L174,431.2 L174,404 L230,404" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="62" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">0</tspan></text>
<text x="118" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">1</tspan></text>
<text x="174" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">2</tspan></text>
<text x="230" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">3</tspan></text>
<text x="286" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">4</tspan></text>
<text x="342" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">5</tspan></text>
<text x="398" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">6</tspan></text>
<text x="454" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">7</tspan></text>
<text x="510" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">8</tspan></text>
<text x="566" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">9</tspan></text>
<text x="622" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">10</tspan></text>
<text x="678" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">11</tspan></text>
<text x="734" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">12</tspan></text>
<text x="790" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">13</tspan></text>
</svg>
</div>

### ข้อ 2  Clock RS ฟลิป-ฟลอป ที่มี PS และ CLR ทำงานที่ขอบขาขึ้นของสัญญาณนาฬิกา จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=rs; trig=rise; pins=ps; set=b}

**ตารางการทำงาน** ($x$ = อะไรก็ได้, $Q_0$ = $Q$ ก่อนหน้า)

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

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="814" height="464" viewBox="0 0 814 464" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="62" y1="26" x2="62" y2="458"/>
<line x1="118" y1="26" x2="118" y2="458"/>
<line x1="174" y1="26" x2="174" y2="458"/>
<line x1="230" y1="26" x2="230" y2="458"/>
<line x1="286" y1="26" x2="286" y2="458"/>
<line x1="342" y1="26" x2="342" y2="458"/>
<line x1="398" y1="26" x2="398" y2="458"/>
<line x1="454" y1="26" x2="454" y2="458"/>
<line x1="510" y1="26" x2="510" y2="458"/>
<line x1="566" y1="26" x2="566" y2="458"/>
<line x1="622" y1="26" x2="622" y2="458"/>
<line x1="678" y1="26" x2="678" y2="458"/>
<line x1="734" y1="26" x2="734" y2="458"/>
<line x1="790" y1="26" x2="790" y2="458"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,71.2 L174,71.2 L174,44 L790,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,131.2 L118,131.2 L118,104 L174,104 L174,131.2 L230,131.2 L230,104 L790,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<text x="90" y="183.6" text-anchor="middle" font-size="16">x</text>
<text x="146" y="183.6" text-anchor="middle" font-size="16">x</text>
<text x="202" y="183.6" text-anchor="middle" font-size="16">x</text>
<path d="M230,191.2 L286,191.2 L286,164 L342,164 L342,191.2 L398,191.2 L398,164 L454,164 L454,191.2 L510,191.2 L510,164 L566,164 L566,191.2 L622,191.2 L622,164 L678,164 L678,191.2 L734,191.2 L734,164 L790,164" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">R</text>
<text x="90" y="243.6" text-anchor="middle" font-size="16">x</text>
<text x="146" y="243.6" text-anchor="middle" font-size="16">x</text>
<text x="202" y="243.6" text-anchor="middle" font-size="16">x</text>
<path d="M230,224 L342,224 L342,251.2 L580,251.2 L580,224 L664,224 L664,251.2 L790,251.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">S</text>
<text x="90" y="303.6" text-anchor="middle" font-size="16">x</text>
<text x="146" y="303.6" text-anchor="middle" font-size="16">x</text>
<text x="202" y="303.6" text-anchor="middle" font-size="16">x</text>
<path d="M230,311.2 L342,311.2 L342,284 L426,284 L426,311.2 L664,311.2 L664,284 L790,284" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="363.6" text-anchor="end">Q</text>
<path d="M62,344 L174,344 L174,371.2 L230,371.2" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="423.6" text-anchor="end">Q</text>
<line x1="38" y1="408.6" x2="50" y2="408.6" stroke="currentColor" stroke-width="1.4"/>
<path d="M62,404 L118,404 L118,431.2 L174,431.2 L174,404 L230,404" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="62" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">0</tspan></text>
<text x="118" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">1</tspan></text>
<text x="174" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">2</tspan></text>
<text x="230" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">3</tspan></text>
<text x="286" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">4</tspan></text>
<text x="342" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">5</tspan></text>
<text x="398" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">6</tspan></text>
<text x="454" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">7</tspan></text>
<text x="510" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">8</tspan></text>
<text x="566" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">9</tspan></text>
<text x="622" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">10</tspan></text>
<text x="678" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">11</tspan></text>
<text x="734" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">12</tspan></text>
<text x="790" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">13</tspan></text>
</svg>
</div>

### ข้อ 2  Clock RS ฟลิป-ฟลอป ที่มี PS และ CLR ทำงานที่ขอบขาขึ้นของสัญญาณนาฬิกา จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=rs; trig=rise; pins=ps; set=c}

**ตารางการทำงาน** ($x$ = อะไรก็ได้, $Q_0$ = $Q$ ก่อนหน้า)

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

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="814" height="464" viewBox="0 0 814 464" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="62" y1="26" x2="62" y2="458"/>
<line x1="118" y1="26" x2="118" y2="458"/>
<line x1="174" y1="26" x2="174" y2="458"/>
<line x1="230" y1="26" x2="230" y2="458"/>
<line x1="286" y1="26" x2="286" y2="458"/>
<line x1="342" y1="26" x2="342" y2="458"/>
<line x1="398" y1="26" x2="398" y2="458"/>
<line x1="454" y1="26" x2="454" y2="458"/>
<line x1="510" y1="26" x2="510" y2="458"/>
<line x1="566" y1="26" x2="566" y2="458"/>
<line x1="622" y1="26" x2="622" y2="458"/>
<line x1="678" y1="26" x2="678" y2="458"/>
<line x1="734" y1="26" x2="734" y2="458"/>
<line x1="790" y1="26" x2="790" y2="458"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,71.2 L174,71.2 L174,44 L790,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,131.2 L118,131.2 L118,104 L174,104 L174,131.2 L230,131.2 L230,104 L790,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<text x="90" y="183.6" text-anchor="middle" font-size="16">x</text>
<text x="146" y="183.6" text-anchor="middle" font-size="16">x</text>
<text x="202" y="183.6" text-anchor="middle" font-size="16">x</text>
<path d="M230,191.2 L286,191.2 L286,164 L342,164 L342,191.2 L398,191.2 L398,164 L454,164 L454,191.2 L510,191.2 L510,164 L566,164 L566,191.2 L622,191.2 L622,164 L678,164 L678,191.2 L734,191.2 L734,164 L790,164" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">R</text>
<text x="90" y="243.6" text-anchor="middle" font-size="16">x</text>
<text x="146" y="243.6" text-anchor="middle" font-size="16">x</text>
<text x="202" y="243.6" text-anchor="middle" font-size="16">x</text>
<path d="M230,251.2 L370,251.2 L370,224 L440,224 L440,251.2 L692,251.2 L692,224 L790,224" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">S</text>
<text x="90" y="303.6" text-anchor="middle" font-size="16">x</text>
<text x="146" y="303.6" text-anchor="middle" font-size="16">x</text>
<text x="202" y="303.6" text-anchor="middle" font-size="16">x</text>
<path d="M230,284 L370,284 L370,311.2 L440,311.2 L440,284 L524,284 L524,311.2 L790,311.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="363.6" text-anchor="end">Q</text>
<path d="M62,344 L174,344 L174,371.2 L230,371.2" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="423.6" text-anchor="end">Q</text>
<line x1="38" y1="408.6" x2="50" y2="408.6" stroke="currentColor" stroke-width="1.4"/>
<path d="M62,404 L118,404 L118,431.2 L174,431.2 L174,404 L230,404" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="62" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">0</tspan></text>
<text x="118" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">1</tspan></text>
<text x="174" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">2</tspan></text>
<text x="230" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">3</tspan></text>
<text x="286" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">4</tspan></text>
<text x="342" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">5</tspan></text>
<text x="398" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">6</tspan></text>
<text x="454" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">7</tspan></text>
<text x="510" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">8</tspan></text>
<text x="566" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">9</tspan></text>
<text x="622" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">10</tspan></text>
<text x="678" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">11</tspan></text>
<text x="734" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">12</tspan></text>
<text x="790" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">13</tspan></text>
</svg>
</div>

### ข้อ 2  Clock RS ฟลิป-ฟลอป ทำงานที่ขอบขาลงของสัญญาณนาฬิกา เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=rs; trig=fall; pins=none; set=a}

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
<path d="M62,251.2 L126,251.2 L126,224 L158,224" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">Q</text>
<line x1="38" y1="288.6" x2="50" y2="288.6" stroke="currentColor" stroke-width="1.4"/>
<path d="M62,284 L126,284 L126,311.2 L158,311.2" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  Clock RS ฟลิป-ฟลอป ทำงานที่ขอบขาลงของสัญญาณนาฬิกา เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=rs; trig=fall; pins=none; set=b}

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
<path d="M62,251.2 L158,251.2" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">Q</text>
<line x1="38" y1="288.6" x2="50" y2="288.6" stroke="currentColor" stroke-width="1.4"/>
<path d="M62,284 L158,284" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  Clock RS ฟลิป-ฟลอป ทำงานที่ขอบขาลงของสัญญาณนาฬิกา เริ่มต้นที่ $Q=0$ จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=rs; trig=fall; pins=none; set=c}

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
<path d="M62,251.2 L126,251.2 L126,224 L158,224" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">Q</text>
<line x1="38" y1="288.6" x2="50" y2="288.6" stroke="currentColor" stroke-width="1.4"/>
<path d="M62,284 L126,284 L126,311.2 L158,311.2" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="126" y="18" text-anchor="middle" font-size="14">#1</text>
<text x="254" y="18" text-anchor="middle" font-size="14">#2</text>
<text x="382" y="18" text-anchor="middle" font-size="14">#3</text>
<text x="510" y="18" text-anchor="middle" font-size="14">#4</text>
<text x="638" y="18" text-anchor="middle" font-size="14">#5</text>
</svg>
</div>

### ข้อ 2  Clock RS ฟลิป-ฟลอป ที่มี PS และ CLR ทำงานที่ขอบขาลงของสัญญาณนาฬิกา จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=rs; trig=fall; pins=ps; set=a}

**ตารางการทำงาน** ($x$ = อะไรก็ได้, $Q_0$ = $Q$ ก่อนหน้า)

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

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="814" height="464" viewBox="0 0 814 464" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="62" y1="26" x2="62" y2="458"/>
<line x1="118" y1="26" x2="118" y2="458"/>
<line x1="174" y1="26" x2="174" y2="458"/>
<line x1="230" y1="26" x2="230" y2="458"/>
<line x1="286" y1="26" x2="286" y2="458"/>
<line x1="342" y1="26" x2="342" y2="458"/>
<line x1="398" y1="26" x2="398" y2="458"/>
<line x1="454" y1="26" x2="454" y2="458"/>
<line x1="510" y1="26" x2="510" y2="458"/>
<line x1="566" y1="26" x2="566" y2="458"/>
<line x1="622" y1="26" x2="622" y2="458"/>
<line x1="678" y1="26" x2="678" y2="458"/>
<line x1="734" y1="26" x2="734" y2="458"/>
<line x1="790" y1="26" x2="790" y2="458"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,71.2 L174,71.2 L174,44 L790,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,131.2 L118,131.2 L118,104 L174,104 L174,131.2 L230,131.2 L230,104 L790,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<text x="90" y="183.6" text-anchor="middle" font-size="16">x</text>
<text x="146" y="183.6" text-anchor="middle" font-size="16">x</text>
<text x="202" y="183.6" text-anchor="middle" font-size="16">x</text>
<path d="M230,164 L286,164 L286,191.2 L342,191.2 L342,164 L398,164 L398,191.2 L454,191.2 L454,164 L510,164 L510,191.2 L566,191.2 L566,164 L622,164 L622,191.2 L678,191.2 L678,164 L734,164 L734,191.2 L790,191.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">R</text>
<text x="90" y="243.6" text-anchor="middle" font-size="16">x</text>
<text x="146" y="243.6" text-anchor="middle" font-size="16">x</text>
<text x="202" y="243.6" text-anchor="middle" font-size="16">x</text>
<path d="M230,251.2 L482,251.2 L482,224 L538,224 L538,251.2 L678,251.2 L678,224 L790,224" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">S</text>
<text x="90" y="303.6" text-anchor="middle" font-size="16">x</text>
<text x="146" y="303.6" text-anchor="middle" font-size="16">x</text>
<text x="202" y="303.6" text-anchor="middle" font-size="16">x</text>
<path d="M230,284 L328,284 L328,311.2 L538,311.2 L538,284 L678,284 L678,311.2 L790,311.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="363.6" text-anchor="end">Q</text>
<path d="M62,344 L174,344 L174,371.2 L230,371.2" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="423.6" text-anchor="end">Q</text>
<line x1="38" y1="408.6" x2="50" y2="408.6" stroke="currentColor" stroke-width="1.4"/>
<path d="M62,404 L118,404 L118,431.2 L174,431.2 L174,404 L230,404" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="62" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">0</tspan></text>
<text x="118" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">1</tspan></text>
<text x="174" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">2</tspan></text>
<text x="230" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">3</tspan></text>
<text x="286" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">4</tspan></text>
<text x="342" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">5</tspan></text>
<text x="398" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">6</tspan></text>
<text x="454" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">7</tspan></text>
<text x="510" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">8</tspan></text>
<text x="566" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">9</tspan></text>
<text x="622" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">10</tspan></text>
<text x="678" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">11</tspan></text>
<text x="734" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">12</tspan></text>
<text x="790" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">13</tspan></text>
</svg>
</div>

### ข้อ 2  Clock RS ฟลิป-ฟลอป ที่มี PS และ CLR ทำงานที่ขอบขาลงของสัญญาณนาฬิกา จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=rs; trig=fall; pins=ps; set=b}

**ตารางการทำงาน** ($x$ = อะไรก็ได้, $Q_0$ = $Q$ ก่อนหน้า)

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

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="814" height="464" viewBox="0 0 814 464" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="62" y1="26" x2="62" y2="458"/>
<line x1="118" y1="26" x2="118" y2="458"/>
<line x1="174" y1="26" x2="174" y2="458"/>
<line x1="230" y1="26" x2="230" y2="458"/>
<line x1="286" y1="26" x2="286" y2="458"/>
<line x1="342" y1="26" x2="342" y2="458"/>
<line x1="398" y1="26" x2="398" y2="458"/>
<line x1="454" y1="26" x2="454" y2="458"/>
<line x1="510" y1="26" x2="510" y2="458"/>
<line x1="566" y1="26" x2="566" y2="458"/>
<line x1="622" y1="26" x2="622" y2="458"/>
<line x1="678" y1="26" x2="678" y2="458"/>
<line x1="734" y1="26" x2="734" y2="458"/>
<line x1="790" y1="26" x2="790" y2="458"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,71.2 L174,71.2 L174,44 L790,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,131.2 L118,131.2 L118,104 L174,104 L174,131.2 L230,131.2 L230,104 L790,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<text x="90" y="183.6" text-anchor="middle" font-size="16">x</text>
<text x="146" y="183.6" text-anchor="middle" font-size="16">x</text>
<text x="202" y="183.6" text-anchor="middle" font-size="16">x</text>
<path d="M230,164 L286,164 L286,191.2 L342,191.2 L342,164 L398,164 L398,191.2 L454,191.2 L454,164 L510,164 L510,191.2 L566,191.2 L566,164 L622,164 L622,191.2 L678,191.2 L678,164 L734,164 L734,191.2 L790,191.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">R</text>
<text x="90" y="243.6" text-anchor="middle" font-size="16">x</text>
<text x="146" y="243.6" text-anchor="middle" font-size="16">x</text>
<text x="202" y="243.6" text-anchor="middle" font-size="16">x</text>
<path d="M230,224 L342,224 L342,251.2 L580,251.2 L580,224 L664,224 L664,251.2 L790,251.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">S</text>
<text x="90" y="303.6" text-anchor="middle" font-size="16">x</text>
<text x="146" y="303.6" text-anchor="middle" font-size="16">x</text>
<text x="202" y="303.6" text-anchor="middle" font-size="16">x</text>
<path d="M230,311.2 L342,311.2 L342,284 L426,284 L426,311.2 L664,311.2 L664,284 L790,284" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="363.6" text-anchor="end">Q</text>
<path d="M62,344 L174,344 L174,371.2 L230,371.2" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="423.6" text-anchor="end">Q</text>
<line x1="38" y1="408.6" x2="50" y2="408.6" stroke="currentColor" stroke-width="1.4"/>
<path d="M62,404 L118,404 L118,431.2 L174,431.2 L174,404 L230,404" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="62" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">0</tspan></text>
<text x="118" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">1</tspan></text>
<text x="174" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">2</tspan></text>
<text x="230" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">3</tspan></text>
<text x="286" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">4</tspan></text>
<text x="342" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">5</tspan></text>
<text x="398" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">6</tspan></text>
<text x="454" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">7</tspan></text>
<text x="510" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">8</tspan></text>
<text x="566" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">9</tspan></text>
<text x="622" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">10</tspan></text>
<text x="678" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">11</tspan></text>
<text x="734" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">12</tspan></text>
<text x="790" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">13</tspan></text>
</svg>
</div>

### ข้อ 2  Clock RS ฟลิป-ฟลอป ที่มี PS และ CLR ทำงานที่ขอบขาลงของสัญญาณนาฬิกา จงหารูปคลื่น $Q$ และ $\overline{Q}$ เมื่อสัญญาณเข้าเป็นดังรูป {ff=rs; trig=fall; pins=ps; set=c}

**ตารางการทำงาน** ($x$ = อะไรก็ได้, $Q_0$ = $Q$ ก่อนหน้า)

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

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="814" height="464" viewBox="0 0 814 464" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="62" y1="26" x2="62" y2="458"/>
<line x1="118" y1="26" x2="118" y2="458"/>
<line x1="174" y1="26" x2="174" y2="458"/>
<line x1="230" y1="26" x2="230" y2="458"/>
<line x1="286" y1="26" x2="286" y2="458"/>
<line x1="342" y1="26" x2="342" y2="458"/>
<line x1="398" y1="26" x2="398" y2="458"/>
<line x1="454" y1="26" x2="454" y2="458"/>
<line x1="510" y1="26" x2="510" y2="458"/>
<line x1="566" y1="26" x2="566" y2="458"/>
<line x1="622" y1="26" x2="622" y2="458"/>
<line x1="678" y1="26" x2="678" y2="458"/>
<line x1="734" y1="26" x2="734" y2="458"/>
<line x1="790" y1="26" x2="790" y2="458"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,71.2 L174,71.2 L174,44 L790,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,131.2 L118,131.2 L118,104 L174,104 L174,131.2 L230,131.2 L230,104 L790,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<text x="90" y="183.6" text-anchor="middle" font-size="16">x</text>
<text x="146" y="183.6" text-anchor="middle" font-size="16">x</text>
<text x="202" y="183.6" text-anchor="middle" font-size="16">x</text>
<path d="M230,164 L286,164 L286,191.2 L342,191.2 L342,164 L398,164 L398,191.2 L454,191.2 L454,164 L510,164 L510,191.2 L566,191.2 L566,164 L622,164 L622,191.2 L678,191.2 L678,164 L734,164 L734,191.2 L790,191.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">R</text>
<text x="90" y="243.6" text-anchor="middle" font-size="16">x</text>
<text x="146" y="243.6" text-anchor="middle" font-size="16">x</text>
<text x="202" y="243.6" text-anchor="middle" font-size="16">x</text>
<path d="M230,251.2 L370,251.2 L370,224 L440,224 L440,251.2 L692,251.2 L692,224 L790,224" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">S</text>
<text x="90" y="303.6" text-anchor="middle" font-size="16">x</text>
<text x="146" y="303.6" text-anchor="middle" font-size="16">x</text>
<text x="202" y="303.6" text-anchor="middle" font-size="16">x</text>
<path d="M230,284 L370,284 L370,311.2 L440,311.2 L440,284 L524,284 L524,311.2 L790,311.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="363.6" text-anchor="end">Q</text>
<path d="M62,344 L174,344 L174,371.2 L230,371.2" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="423.6" text-anchor="end">Q</text>
<line x1="38" y1="408.6" x2="50" y2="408.6" stroke="currentColor" stroke-width="1.4"/>
<path d="M62,404 L118,404 L118,431.2 L174,431.2 L174,404 L230,404" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="62" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">0</tspan></text>
<text x="118" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">1</tspan></text>
<text x="174" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">2</tspan></text>
<text x="230" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">3</tspan></text>
<text x="286" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">4</tspan></text>
<text x="342" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">5</tspan></text>
<text x="398" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">6</tspan></text>
<text x="454" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">7</tspan></text>
<text x="510" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">8</tspan></text>
<text x="566" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">9</tspan></text>
<text x="622" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">10</tspan></text>
<text x="678" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">11</tspan></text>
<text x="734" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">12</tspan></text>
<text x="790" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">13</tspan></text>
</svg>
</div>

## Sol {sol; merge}

### ตาราง {ff=jk; trig=rise; pins=none}

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

### ตาราง {ff=jk; trig=fall; pins=none}

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

### ตาราง {ff=d; trig=rise; pins=none}

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

### ตาราง {ff=d; trig=fall; pins=none}

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

### ตาราง {ff=t; trig=rise; pins=none}

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

### ตาราง {ff=t; trig=fall; pins=none}

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

### ตาราง {ff=rs; trig=rise; pins=none}

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

### ตาราง {ff=rs; trig=fall; pins=none}

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

### Sol {ff=jk; trig=rise; pins=none; set=a}

$\mathbf{Sol}^{n}$

- ขอบ #1 : $J=1, K=0$ $\Rightarrow$ Set $\Rightarrow Q = 1$
- ขอบ #2 : $J=0, K=1$ $\Rightarrow$ Reset $\Rightarrow Q = 0$
- ขอบ #3 : $J=1, K=1$ $\Rightarrow$ สลับ $\Rightarrow Q = 1$
- ขอบ #4 : $J=0, K=0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 1$
- ขอบ #5 : $J=1, K=1$ $\Rightarrow$ สลับ $\Rightarrow Q = 0$

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

### Sol {ff=jk; trig=rise; pins=none; set=b}

$\mathbf{Sol}^{n}$

- ขอบ #1 : $J=0, K=1$ $\Rightarrow$ Reset $\Rightarrow Q = 0$
- ขอบ #2 : $J=1, K=1$ $\Rightarrow$ สลับ $\Rightarrow Q = 1$
- ขอบ #3 : $J=1, K=1$ $\Rightarrow$ สลับ $\Rightarrow Q = 0$
- ขอบ #4 : $J=1, K=0$ $\Rightarrow$ Set $\Rightarrow Q = 1$
- ขอบ #5 : $J=0, K=0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 1$

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

### Sol {ff=jk; trig=rise; pins=none; set=c}

$\mathbf{Sol}^{n}$

- ขอบ #1 : $J=1, K=1$ $\Rightarrow$ สลับ $\Rightarrow Q = 1$
- ขอบ #2 : $J=0, K=0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 1$
- ขอบ #3 : $J=0, K=1$ $\Rightarrow$ Reset $\Rightarrow Q = 0$
- ขอบ #4 : $J=1, K=0$ $\Rightarrow$ Set $\Rightarrow Q = 1$
- ขอบ #5 : $J=1, K=1$ $\Rightarrow$ สลับ $\Rightarrow Q = 0$

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

### Sol {ff=jk; trig=rise; pins=ps; set=a}

$\mathbf{Sol}^{n}$

- T0 ถึง T1 : $PS=0,\ CLR=0 \Rightarrow Q = 1,\ \overline{Q} = 1$ (แถว 1)
- T1 ถึง T2 : $PS=0,\ CLR=1 \Rightarrow Q = 1,\ \overline{Q} = 0$ (แถว 2)
- T2 ถึง T3 : $PS=1,\ CLR=0 \Rightarrow Q = 0,\ \overline{Q} = 1$ (แถว 3)
- T3 : $PS=1,\ CLR=1 \Rightarrow$ $Q$ คงเดิม ($Q = 0$)
- T4 (ขอบขาขึ้น) : $J=1, K=0$ $\Rightarrow$ Set $\Rightarrow Q = 1$
- T6 (ขอบขาขึ้น) : $J=0, K=1$ $\Rightarrow$ Reset $\Rightarrow Q = 0$
- T8 (ขอบขาขึ้น) : $J=1, K=1$ $\Rightarrow$ สลับ $\Rightarrow Q = 1$
- T10 (ขอบขาขึ้น) : $J=0, K=0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 1$
- T12 (ขอบขาขึ้น) : $J=1, K=1$ $\Rightarrow$ สลับ $\Rightarrow Q = 0$

$\mathbf{Ans}\quad \text{รูปคลื่น } Q \text{ และ } \overline{Q} \text{ ตามรูป}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="814" height="464" viewBox="0 0 814 464" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="62" y1="26" x2="62" y2="458"/>
<line x1="118" y1="26" x2="118" y2="458"/>
<line x1="174" y1="26" x2="174" y2="458"/>
<line x1="230" y1="26" x2="230" y2="458"/>
<line x1="286" y1="26" x2="286" y2="458"/>
<line x1="342" y1="26" x2="342" y2="458"/>
<line x1="398" y1="26" x2="398" y2="458"/>
<line x1="454" y1="26" x2="454" y2="458"/>
<line x1="510" y1="26" x2="510" y2="458"/>
<line x1="566" y1="26" x2="566" y2="458"/>
<line x1="622" y1="26" x2="622" y2="458"/>
<line x1="678" y1="26" x2="678" y2="458"/>
<line x1="734" y1="26" x2="734" y2="458"/>
<line x1="790" y1="26" x2="790" y2="458"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,71.2 L174,71.2 L174,44 L790,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,131.2 L118,131.2 L118,104 L174,104 L174,131.2 L230,131.2 L230,104 L790,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<text x="90" y="183.6" text-anchor="middle" font-size="16">x</text>
<text x="146" y="183.6" text-anchor="middle" font-size="16">x</text>
<text x="202" y="183.6" text-anchor="middle" font-size="16">x</text>
<path d="M230,191.2 L286,191.2 L286,164 L342,164 L342,191.2 L398,191.2 L398,164 L454,164 L454,191.2 L510,191.2 L510,164 L566,164 L566,191.2 L622,191.2 L622,164 L678,164 L678,191.2 L734,191.2 L734,164 L790,164" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">J</text>
<text x="90" y="243.6" text-anchor="middle" font-size="16">x</text>
<text x="146" y="243.6" text-anchor="middle" font-size="16">x</text>
<text x="202" y="243.6" text-anchor="middle" font-size="16">x</text>
<path d="M230,224 L328,224 L328,251.2 L482,251.2 L482,224 L538,224 L538,251.2 L678,251.2 L678,224 L790,224" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">K</text>
<text x="90" y="303.6" text-anchor="middle" font-size="16">x</text>
<text x="146" y="303.6" text-anchor="middle" font-size="16">x</text>
<text x="202" y="303.6" text-anchor="middle" font-size="16">x</text>
<path d="M230,311.2 L328,311.2 L328,284 L538,284 L538,311.2 L678,311.2 L678,284 L790,284" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="363.6" text-anchor="end">Q</text>
<path d="M62,344 L174,344 L174,371.2 L286,371.2 L286,344 L398,344 L398,371.2 L510,371.2 L510,344 L734,344 L734,371.2 L790,371.2" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="423.6" text-anchor="end">Q</text>
<line x1="38" y1="408.6" x2="50" y2="408.6" stroke="currentColor" stroke-width="1.4"/>
<path d="M62,404 L118,404 L118,431.2 L174,431.2 L174,404 L286,404 L286,431.2 L398,431.2 L398,404 L510,404 L510,431.2 L734,431.2 L734,404 L790,404" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="62" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">0</tspan></text>
<text x="118" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">1</tspan></text>
<text x="174" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">2</tspan></text>
<text x="230" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">3</tspan></text>
<text x="286" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">4</tspan></text>
<text x="342" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">5</tspan></text>
<text x="398" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">6</tspan></text>
<text x="454" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">7</tspan></text>
<text x="510" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">8</tspan></text>
<text x="566" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">9</tspan></text>
<text x="622" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">10</tspan></text>
<text x="678" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">11</tspan></text>
<text x="734" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">12</tspan></text>
<text x="790" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">13</tspan></text>
</svg>
</div>

### Sol {ff=jk; trig=rise; pins=ps; set=b}

$\mathbf{Sol}^{n}$

- T0 ถึง T1 : $PS=0,\ CLR=0 \Rightarrow Q = 1,\ \overline{Q} = 1$ (แถว 1)
- T1 ถึง T2 : $PS=0,\ CLR=1 \Rightarrow Q = 1,\ \overline{Q} = 0$ (แถว 2)
- T2 ถึง T3 : $PS=1,\ CLR=0 \Rightarrow Q = 0,\ \overline{Q} = 1$ (แถว 3)
- T3 : $PS=1,\ CLR=1 \Rightarrow$ $Q$ คงเดิม ($Q = 0$)
- T4 (ขอบขาขึ้น) : $J=0, K=1$ $\Rightarrow$ Reset $\Rightarrow Q = 0$
- T6 (ขอบขาขึ้น) : $J=1, K=1$ $\Rightarrow$ สลับ $\Rightarrow Q = 1$
- T8 (ขอบขาขึ้น) : $J=1, K=1$ $\Rightarrow$ สลับ $\Rightarrow Q = 0$
- T10 (ขอบขาขึ้น) : $J=1, K=0$ $\Rightarrow$ Set $\Rightarrow Q = 1$
- T12 (ขอบขาขึ้น) : $J=0, K=0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 1$

$\mathbf{Ans}\quad \text{รูปคลื่น } Q \text{ และ } \overline{Q} \text{ ตามรูป}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="814" height="464" viewBox="0 0 814 464" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="62" y1="26" x2="62" y2="458"/>
<line x1="118" y1="26" x2="118" y2="458"/>
<line x1="174" y1="26" x2="174" y2="458"/>
<line x1="230" y1="26" x2="230" y2="458"/>
<line x1="286" y1="26" x2="286" y2="458"/>
<line x1="342" y1="26" x2="342" y2="458"/>
<line x1="398" y1="26" x2="398" y2="458"/>
<line x1="454" y1="26" x2="454" y2="458"/>
<line x1="510" y1="26" x2="510" y2="458"/>
<line x1="566" y1="26" x2="566" y2="458"/>
<line x1="622" y1="26" x2="622" y2="458"/>
<line x1="678" y1="26" x2="678" y2="458"/>
<line x1="734" y1="26" x2="734" y2="458"/>
<line x1="790" y1="26" x2="790" y2="458"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,71.2 L174,71.2 L174,44 L790,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,131.2 L118,131.2 L118,104 L174,104 L174,131.2 L230,131.2 L230,104 L790,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<text x="90" y="183.6" text-anchor="middle" font-size="16">x</text>
<text x="146" y="183.6" text-anchor="middle" font-size="16">x</text>
<text x="202" y="183.6" text-anchor="middle" font-size="16">x</text>
<path d="M230,191.2 L286,191.2 L286,164 L342,164 L342,191.2 L398,191.2 L398,164 L454,164 L454,191.2 L510,191.2 L510,164 L566,164 L566,191.2 L622,191.2 L622,164 L678,164 L678,191.2 L734,191.2 L734,164 L790,164" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">J</text>
<text x="90" y="243.6" text-anchor="middle" font-size="16">x</text>
<text x="146" y="243.6" text-anchor="middle" font-size="16">x</text>
<text x="202" y="243.6" text-anchor="middle" font-size="16">x</text>
<path d="M230,251.2 L342,251.2 L342,224 L664,224 L664,251.2 L790,251.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">K</text>
<text x="90" y="303.6" text-anchor="middle" font-size="16">x</text>
<text x="146" y="303.6" text-anchor="middle" font-size="16">x</text>
<text x="202" y="303.6" text-anchor="middle" font-size="16">x</text>
<path d="M230,284 L580,284 L580,311.2 L790,311.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="363.6" text-anchor="end">Q</text>
<path d="M62,344 L174,344 L174,371.2 L398,371.2 L398,344 L510,344 L510,371.2 L622,371.2 L622,344 L790,344" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="423.6" text-anchor="end">Q</text>
<line x1="38" y1="408.6" x2="50" y2="408.6" stroke="currentColor" stroke-width="1.4"/>
<path d="M62,404 L118,404 L118,431.2 L174,431.2 L174,404 L398,404 L398,431.2 L510,431.2 L510,404 L622,404 L622,431.2 L790,431.2" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="62" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">0</tspan></text>
<text x="118" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">1</tspan></text>
<text x="174" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">2</tspan></text>
<text x="230" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">3</tspan></text>
<text x="286" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">4</tspan></text>
<text x="342" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">5</tspan></text>
<text x="398" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">6</tspan></text>
<text x="454" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">7</tspan></text>
<text x="510" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">8</tspan></text>
<text x="566" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">9</tspan></text>
<text x="622" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">10</tspan></text>
<text x="678" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">11</tspan></text>
<text x="734" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">12</tspan></text>
<text x="790" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">13</tspan></text>
</svg>
</div>

### Sol {ff=jk; trig=rise; pins=ps; set=c}

$\mathbf{Sol}^{n}$

- T0 ถึง T1 : $PS=0,\ CLR=0 \Rightarrow Q = 1,\ \overline{Q} = 1$ (แถว 1)
- T1 ถึง T2 : $PS=0,\ CLR=1 \Rightarrow Q = 1,\ \overline{Q} = 0$ (แถว 2)
- T2 ถึง T3 : $PS=1,\ CLR=0 \Rightarrow Q = 0,\ \overline{Q} = 1$ (แถว 3)
- T3 : $PS=1,\ CLR=1 \Rightarrow$ $Q$ คงเดิม ($Q = 0$)
- T4 (ขอบขาขึ้น) : $J=1, K=1$ $\Rightarrow$ สลับ $\Rightarrow Q = 1$
- T6 (ขอบขาขึ้น) : $J=0, K=0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 1$
- T8 (ขอบขาขึ้น) : $J=0, K=1$ $\Rightarrow$ Reset $\Rightarrow Q = 0$
- T10 (ขอบขาขึ้น) : $J=1, K=0$ $\Rightarrow$ Set $\Rightarrow Q = 1$
- T12 (ขอบขาขึ้น) : $J=1, K=1$ $\Rightarrow$ สลับ $\Rightarrow Q = 0$

$\mathbf{Ans}\quad \text{รูปคลื่น } Q \text{ และ } \overline{Q} \text{ ตามรูป}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="814" height="464" viewBox="0 0 814 464" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="62" y1="26" x2="62" y2="458"/>
<line x1="118" y1="26" x2="118" y2="458"/>
<line x1="174" y1="26" x2="174" y2="458"/>
<line x1="230" y1="26" x2="230" y2="458"/>
<line x1="286" y1="26" x2="286" y2="458"/>
<line x1="342" y1="26" x2="342" y2="458"/>
<line x1="398" y1="26" x2="398" y2="458"/>
<line x1="454" y1="26" x2="454" y2="458"/>
<line x1="510" y1="26" x2="510" y2="458"/>
<line x1="566" y1="26" x2="566" y2="458"/>
<line x1="622" y1="26" x2="622" y2="458"/>
<line x1="678" y1="26" x2="678" y2="458"/>
<line x1="734" y1="26" x2="734" y2="458"/>
<line x1="790" y1="26" x2="790" y2="458"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,71.2 L174,71.2 L174,44 L790,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,131.2 L118,131.2 L118,104 L174,104 L174,131.2 L230,131.2 L230,104 L790,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<text x="90" y="183.6" text-anchor="middle" font-size="16">x</text>
<text x="146" y="183.6" text-anchor="middle" font-size="16">x</text>
<text x="202" y="183.6" text-anchor="middle" font-size="16">x</text>
<path d="M230,191.2 L286,191.2 L286,164 L342,164 L342,191.2 L398,191.2 L398,164 L454,164 L454,191.2 L510,191.2 L510,164 L566,164 L566,191.2 L622,191.2 L622,164 L678,164 L678,191.2 L734,191.2 L734,164 L790,164" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">J</text>
<text x="90" y="243.6" text-anchor="middle" font-size="16">x</text>
<text x="146" y="243.6" text-anchor="middle" font-size="16">x</text>
<text x="202" y="243.6" text-anchor="middle" font-size="16">x</text>
<path d="M230,224 L370,224 L370,251.2 L524,251.2 L524,224 L790,224" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">K</text>
<text x="90" y="303.6" text-anchor="middle" font-size="16">x</text>
<text x="146" y="303.6" text-anchor="middle" font-size="16">x</text>
<text x="202" y="303.6" text-anchor="middle" font-size="16">x</text>
<path d="M230,284 L370,284 L370,311.2 L440,311.2 L440,284 L524,284 L524,311.2 L692,311.2 L692,284 L790,284" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="363.6" text-anchor="end">Q</text>
<path d="M62,344 L174,344 L174,371.2 L286,371.2 L286,344 L510,344 L510,371.2 L622,371.2 L622,344 L734,344 L734,371.2 L790,371.2" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="423.6" text-anchor="end">Q</text>
<line x1="38" y1="408.6" x2="50" y2="408.6" stroke="currentColor" stroke-width="1.4"/>
<path d="M62,404 L118,404 L118,431.2 L174,431.2 L174,404 L286,404 L286,431.2 L510,431.2 L510,404 L622,404 L622,431.2 L734,431.2 L734,404 L790,404" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="62" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">0</tspan></text>
<text x="118" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">1</tspan></text>
<text x="174" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">2</tspan></text>
<text x="230" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">3</tspan></text>
<text x="286" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">4</tspan></text>
<text x="342" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">5</tspan></text>
<text x="398" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">6</tspan></text>
<text x="454" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">7</tspan></text>
<text x="510" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">8</tspan></text>
<text x="566" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">9</tspan></text>
<text x="622" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">10</tspan></text>
<text x="678" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">11</tspan></text>
<text x="734" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">12</tspan></text>
<text x="790" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">13</tspan></text>
</svg>
</div>

### Sol {ff=jk; trig=fall; pins=none; set=a}

$\mathbf{Sol}^{n}$

- ขอบ #1 : $J=1, K=0$ $\Rightarrow$ Set $\Rightarrow Q = 1$
- ขอบ #2 : $J=0, K=1$ $\Rightarrow$ Reset $\Rightarrow Q = 0$
- ขอบ #3 : $J=1, K=1$ $\Rightarrow$ สลับ $\Rightarrow Q = 1$
- ขอบ #4 : $J=0, K=0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 1$
- ขอบ #5 : $J=1, K=1$ $\Rightarrow$ สลับ $\Rightarrow Q = 0$

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

### Sol {ff=jk; trig=fall; pins=none; set=b}

$\mathbf{Sol}^{n}$

- ขอบ #1 : $J=0, K=1$ $\Rightarrow$ Reset $\Rightarrow Q = 0$
- ขอบ #2 : $J=1, K=1$ $\Rightarrow$ สลับ $\Rightarrow Q = 1$
- ขอบ #3 : $J=1, K=1$ $\Rightarrow$ สลับ $\Rightarrow Q = 0$
- ขอบ #4 : $J=1, K=0$ $\Rightarrow$ Set $\Rightarrow Q = 1$
- ขอบ #5 : $J=0, K=0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 1$

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

### Sol {ff=jk; trig=fall; pins=none; set=c}

$\mathbf{Sol}^{n}$

- ขอบ #1 : $J=1, K=1$ $\Rightarrow$ สลับ $\Rightarrow Q = 1$
- ขอบ #2 : $J=0, K=0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 1$
- ขอบ #3 : $J=0, K=1$ $\Rightarrow$ Reset $\Rightarrow Q = 0$
- ขอบ #4 : $J=1, K=0$ $\Rightarrow$ Set $\Rightarrow Q = 1$
- ขอบ #5 : $J=1, K=1$ $\Rightarrow$ สลับ $\Rightarrow Q = 0$

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

### Sol {ff=jk; trig=fall; pins=ps; set=a}

$\mathbf{Sol}^{n}$

- T0 ถึง T1 : $PS=0,\ CLR=0 \Rightarrow Q = 1,\ \overline{Q} = 1$ (แถว 1)
- T1 ถึง T2 : $PS=0,\ CLR=1 \Rightarrow Q = 1,\ \overline{Q} = 0$ (แถว 2)
- T2 ถึง T3 : $PS=1,\ CLR=0 \Rightarrow Q = 0,\ \overline{Q} = 1$ (แถว 3)
- T3 : $PS=1,\ CLR=1 \Rightarrow$ $Q$ คงเดิม ($Q = 0$)
- T4 (ขอบขาลง) : $J=1, K=0$ $\Rightarrow$ Set $\Rightarrow Q = 1$
- T6 (ขอบขาลง) : $J=0, K=1$ $\Rightarrow$ Reset $\Rightarrow Q = 0$
- T8 (ขอบขาลง) : $J=1, K=1$ $\Rightarrow$ สลับ $\Rightarrow Q = 1$
- T10 (ขอบขาลง) : $J=0, K=0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 1$
- T12 (ขอบขาลง) : $J=1, K=1$ $\Rightarrow$ สลับ $\Rightarrow Q = 0$

$\mathbf{Ans}\quad \text{รูปคลื่น } Q \text{ และ } \overline{Q} \text{ ตามรูป}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="814" height="464" viewBox="0 0 814 464" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="62" y1="26" x2="62" y2="458"/>
<line x1="118" y1="26" x2="118" y2="458"/>
<line x1="174" y1="26" x2="174" y2="458"/>
<line x1="230" y1="26" x2="230" y2="458"/>
<line x1="286" y1="26" x2="286" y2="458"/>
<line x1="342" y1="26" x2="342" y2="458"/>
<line x1="398" y1="26" x2="398" y2="458"/>
<line x1="454" y1="26" x2="454" y2="458"/>
<line x1="510" y1="26" x2="510" y2="458"/>
<line x1="566" y1="26" x2="566" y2="458"/>
<line x1="622" y1="26" x2="622" y2="458"/>
<line x1="678" y1="26" x2="678" y2="458"/>
<line x1="734" y1="26" x2="734" y2="458"/>
<line x1="790" y1="26" x2="790" y2="458"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,71.2 L174,71.2 L174,44 L790,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,131.2 L118,131.2 L118,104 L174,104 L174,131.2 L230,131.2 L230,104 L790,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<text x="90" y="183.6" text-anchor="middle" font-size="16">x</text>
<text x="146" y="183.6" text-anchor="middle" font-size="16">x</text>
<text x="202" y="183.6" text-anchor="middle" font-size="16">x</text>
<path d="M230,164 L286,164 L286,191.2 L342,191.2 L342,164 L398,164 L398,191.2 L454,191.2 L454,164 L510,164 L510,191.2 L566,191.2 L566,164 L622,164 L622,191.2 L678,191.2 L678,164 L734,164 L734,191.2 L790,191.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">J</text>
<text x="90" y="243.6" text-anchor="middle" font-size="16">x</text>
<text x="146" y="243.6" text-anchor="middle" font-size="16">x</text>
<text x="202" y="243.6" text-anchor="middle" font-size="16">x</text>
<path d="M230,224 L328,224 L328,251.2 L482,251.2 L482,224 L538,224 L538,251.2 L678,251.2 L678,224 L790,224" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">K</text>
<text x="90" y="303.6" text-anchor="middle" font-size="16">x</text>
<text x="146" y="303.6" text-anchor="middle" font-size="16">x</text>
<text x="202" y="303.6" text-anchor="middle" font-size="16">x</text>
<path d="M230,311.2 L328,311.2 L328,284 L538,284 L538,311.2 L678,311.2 L678,284 L790,284" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="363.6" text-anchor="end">Q</text>
<path d="M62,344 L174,344 L174,371.2 L286,371.2 L286,344 L398,344 L398,371.2 L510,371.2 L510,344 L734,344 L734,371.2 L790,371.2" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="423.6" text-anchor="end">Q</text>
<line x1="38" y1="408.6" x2="50" y2="408.6" stroke="currentColor" stroke-width="1.4"/>
<path d="M62,404 L118,404 L118,431.2 L174,431.2 L174,404 L286,404 L286,431.2 L398,431.2 L398,404 L510,404 L510,431.2 L734,431.2 L734,404 L790,404" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="62" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">0</tspan></text>
<text x="118" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">1</tspan></text>
<text x="174" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">2</tspan></text>
<text x="230" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">3</tspan></text>
<text x="286" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">4</tspan></text>
<text x="342" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">5</tspan></text>
<text x="398" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">6</tspan></text>
<text x="454" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">7</tspan></text>
<text x="510" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">8</tspan></text>
<text x="566" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">9</tspan></text>
<text x="622" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">10</tspan></text>
<text x="678" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">11</tspan></text>
<text x="734" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">12</tspan></text>
<text x="790" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">13</tspan></text>
</svg>
</div>

### Sol {ff=jk; trig=fall; pins=ps; set=b}

$\mathbf{Sol}^{n}$

- T0 ถึง T1 : $PS=0,\ CLR=0 \Rightarrow Q = 1,\ \overline{Q} = 1$ (แถว 1)
- T1 ถึง T2 : $PS=0,\ CLR=1 \Rightarrow Q = 1,\ \overline{Q} = 0$ (แถว 2)
- T2 ถึง T3 : $PS=1,\ CLR=0 \Rightarrow Q = 0,\ \overline{Q} = 1$ (แถว 3)
- T3 : $PS=1,\ CLR=1 \Rightarrow$ $Q$ คงเดิม ($Q = 0$)
- T4 (ขอบขาลง) : $J=0, K=1$ $\Rightarrow$ Reset $\Rightarrow Q = 0$
- T6 (ขอบขาลง) : $J=1, K=1$ $\Rightarrow$ สลับ $\Rightarrow Q = 1$
- T8 (ขอบขาลง) : $J=1, K=1$ $\Rightarrow$ สลับ $\Rightarrow Q = 0$
- T10 (ขอบขาลง) : $J=1, K=0$ $\Rightarrow$ Set $\Rightarrow Q = 1$
- T12 (ขอบขาลง) : $J=0, K=0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 1$

$\mathbf{Ans}\quad \text{รูปคลื่น } Q \text{ และ } \overline{Q} \text{ ตามรูป}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="814" height="464" viewBox="0 0 814 464" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="62" y1="26" x2="62" y2="458"/>
<line x1="118" y1="26" x2="118" y2="458"/>
<line x1="174" y1="26" x2="174" y2="458"/>
<line x1="230" y1="26" x2="230" y2="458"/>
<line x1="286" y1="26" x2="286" y2="458"/>
<line x1="342" y1="26" x2="342" y2="458"/>
<line x1="398" y1="26" x2="398" y2="458"/>
<line x1="454" y1="26" x2="454" y2="458"/>
<line x1="510" y1="26" x2="510" y2="458"/>
<line x1="566" y1="26" x2="566" y2="458"/>
<line x1="622" y1="26" x2="622" y2="458"/>
<line x1="678" y1="26" x2="678" y2="458"/>
<line x1="734" y1="26" x2="734" y2="458"/>
<line x1="790" y1="26" x2="790" y2="458"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,71.2 L174,71.2 L174,44 L790,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,131.2 L118,131.2 L118,104 L174,104 L174,131.2 L230,131.2 L230,104 L790,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<text x="90" y="183.6" text-anchor="middle" font-size="16">x</text>
<text x="146" y="183.6" text-anchor="middle" font-size="16">x</text>
<text x="202" y="183.6" text-anchor="middle" font-size="16">x</text>
<path d="M230,164 L286,164 L286,191.2 L342,191.2 L342,164 L398,164 L398,191.2 L454,191.2 L454,164 L510,164 L510,191.2 L566,191.2 L566,164 L622,164 L622,191.2 L678,191.2 L678,164 L734,164 L734,191.2 L790,191.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">J</text>
<text x="90" y="243.6" text-anchor="middle" font-size="16">x</text>
<text x="146" y="243.6" text-anchor="middle" font-size="16">x</text>
<text x="202" y="243.6" text-anchor="middle" font-size="16">x</text>
<path d="M230,251.2 L342,251.2 L342,224 L664,224 L664,251.2 L790,251.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">K</text>
<text x="90" y="303.6" text-anchor="middle" font-size="16">x</text>
<text x="146" y="303.6" text-anchor="middle" font-size="16">x</text>
<text x="202" y="303.6" text-anchor="middle" font-size="16">x</text>
<path d="M230,284 L580,284 L580,311.2 L790,311.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="363.6" text-anchor="end">Q</text>
<path d="M62,344 L174,344 L174,371.2 L398,371.2 L398,344 L510,344 L510,371.2 L622,371.2 L622,344 L790,344" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="423.6" text-anchor="end">Q</text>
<line x1="38" y1="408.6" x2="50" y2="408.6" stroke="currentColor" stroke-width="1.4"/>
<path d="M62,404 L118,404 L118,431.2 L174,431.2 L174,404 L398,404 L398,431.2 L510,431.2 L510,404 L622,404 L622,431.2 L790,431.2" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="62" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">0</tspan></text>
<text x="118" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">1</tspan></text>
<text x="174" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">2</tspan></text>
<text x="230" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">3</tspan></text>
<text x="286" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">4</tspan></text>
<text x="342" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">5</tspan></text>
<text x="398" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">6</tspan></text>
<text x="454" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">7</tspan></text>
<text x="510" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">8</tspan></text>
<text x="566" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">9</tspan></text>
<text x="622" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">10</tspan></text>
<text x="678" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">11</tspan></text>
<text x="734" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">12</tspan></text>
<text x="790" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">13</tspan></text>
</svg>
</div>

### Sol {ff=jk; trig=fall; pins=ps; set=c}

$\mathbf{Sol}^{n}$

- T0 ถึง T1 : $PS=0,\ CLR=0 \Rightarrow Q = 1,\ \overline{Q} = 1$ (แถว 1)
- T1 ถึง T2 : $PS=0,\ CLR=1 \Rightarrow Q = 1,\ \overline{Q} = 0$ (แถว 2)
- T2 ถึง T3 : $PS=1,\ CLR=0 \Rightarrow Q = 0,\ \overline{Q} = 1$ (แถว 3)
- T3 : $PS=1,\ CLR=1 \Rightarrow$ $Q$ คงเดิม ($Q = 0$)
- T4 (ขอบขาลง) : $J=1, K=1$ $\Rightarrow$ สลับ $\Rightarrow Q = 1$
- T6 (ขอบขาลง) : $J=0, K=0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 1$
- T8 (ขอบขาลง) : $J=0, K=1$ $\Rightarrow$ Reset $\Rightarrow Q = 0$
- T10 (ขอบขาลง) : $J=1, K=0$ $\Rightarrow$ Set $\Rightarrow Q = 1$
- T12 (ขอบขาลง) : $J=1, K=1$ $\Rightarrow$ สลับ $\Rightarrow Q = 0$

$\mathbf{Ans}\quad \text{รูปคลื่น } Q \text{ และ } \overline{Q} \text{ ตามรูป}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="814" height="464" viewBox="0 0 814 464" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="62" y1="26" x2="62" y2="458"/>
<line x1="118" y1="26" x2="118" y2="458"/>
<line x1="174" y1="26" x2="174" y2="458"/>
<line x1="230" y1="26" x2="230" y2="458"/>
<line x1="286" y1="26" x2="286" y2="458"/>
<line x1="342" y1="26" x2="342" y2="458"/>
<line x1="398" y1="26" x2="398" y2="458"/>
<line x1="454" y1="26" x2="454" y2="458"/>
<line x1="510" y1="26" x2="510" y2="458"/>
<line x1="566" y1="26" x2="566" y2="458"/>
<line x1="622" y1="26" x2="622" y2="458"/>
<line x1="678" y1="26" x2="678" y2="458"/>
<line x1="734" y1="26" x2="734" y2="458"/>
<line x1="790" y1="26" x2="790" y2="458"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,71.2 L174,71.2 L174,44 L790,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,131.2 L118,131.2 L118,104 L174,104 L174,131.2 L230,131.2 L230,104 L790,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<text x="90" y="183.6" text-anchor="middle" font-size="16">x</text>
<text x="146" y="183.6" text-anchor="middle" font-size="16">x</text>
<text x="202" y="183.6" text-anchor="middle" font-size="16">x</text>
<path d="M230,164 L286,164 L286,191.2 L342,191.2 L342,164 L398,164 L398,191.2 L454,191.2 L454,164 L510,164 L510,191.2 L566,191.2 L566,164 L622,164 L622,191.2 L678,191.2 L678,164 L734,164 L734,191.2 L790,191.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">J</text>
<text x="90" y="243.6" text-anchor="middle" font-size="16">x</text>
<text x="146" y="243.6" text-anchor="middle" font-size="16">x</text>
<text x="202" y="243.6" text-anchor="middle" font-size="16">x</text>
<path d="M230,224 L370,224 L370,251.2 L524,251.2 L524,224 L790,224" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">K</text>
<text x="90" y="303.6" text-anchor="middle" font-size="16">x</text>
<text x="146" y="303.6" text-anchor="middle" font-size="16">x</text>
<text x="202" y="303.6" text-anchor="middle" font-size="16">x</text>
<path d="M230,284 L370,284 L370,311.2 L440,311.2 L440,284 L524,284 L524,311.2 L692,311.2 L692,284 L790,284" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="363.6" text-anchor="end">Q</text>
<path d="M62,344 L174,344 L174,371.2 L286,371.2 L286,344 L510,344 L510,371.2 L622,371.2 L622,344 L734,344 L734,371.2 L790,371.2" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="423.6" text-anchor="end">Q</text>
<line x1="38" y1="408.6" x2="50" y2="408.6" stroke="currentColor" stroke-width="1.4"/>
<path d="M62,404 L118,404 L118,431.2 L174,431.2 L174,404 L286,404 L286,431.2 L510,431.2 L510,404 L622,404 L622,431.2 L734,431.2 L734,404 L790,404" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="62" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">0</tspan></text>
<text x="118" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">1</tspan></text>
<text x="174" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">2</tspan></text>
<text x="230" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">3</tspan></text>
<text x="286" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">4</tspan></text>
<text x="342" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">5</tspan></text>
<text x="398" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">6</tspan></text>
<text x="454" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">7</tspan></text>
<text x="510" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">8</tspan></text>
<text x="566" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">9</tspan></text>
<text x="622" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">10</tspan></text>
<text x="678" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">11</tspan></text>
<text x="734" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">12</tspan></text>
<text x="790" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">13</tspan></text>
</svg>
</div>

### Sol {ff=d; trig=rise; pins=none; set=a}

$\mathbf{Sol}^{n}$

- ขอบ #1 : $D=1 \Rightarrow Q = 1$
- ขอบ #2 : $D=0 \Rightarrow Q = 0$
- ขอบ #3 : $D=1 \Rightarrow Q = 1$
- ขอบ #4 : $D=1 \Rightarrow Q = 1$
- ขอบ #5 : $D=0 \Rightarrow Q = 0$

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

### Sol {ff=d; trig=rise; pins=none; set=b}

$\mathbf{Sol}^{n}$

- ขอบ #1 : $D=0 \Rightarrow Q = 0$
- ขอบ #2 : $D=1 \Rightarrow Q = 1$
- ขอบ #3 : $D=1 \Rightarrow Q = 1$
- ขอบ #4 : $D=0 \Rightarrow Q = 0$
- ขอบ #5 : $D=1 \Rightarrow Q = 1$

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

### Sol {ff=d; trig=rise; pins=none; set=c}

$\mathbf{Sol}^{n}$

- ขอบ #1 : $D=1 \Rightarrow Q = 1$
- ขอบ #2 : $D=1 \Rightarrow Q = 1$
- ขอบ #3 : $D=0 \Rightarrow Q = 0$
- ขอบ #4 : $D=1 \Rightarrow Q = 1$
- ขอบ #5 : $D=0 \Rightarrow Q = 0$

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

### Sol {ff=d; trig=rise; pins=ps; set=a}

$\mathbf{Sol}^{n}$

- T0 ถึง T1 : $PS=0,\ CLR=0 \Rightarrow Q = 1,\ \overline{Q} = 1$ (แถว 1)
- T1 ถึง T2 : $PS=0,\ CLR=1 \Rightarrow Q = 1,\ \overline{Q} = 0$ (แถว 2)
- T2 ถึง T3 : $PS=1,\ CLR=0 \Rightarrow Q = 0,\ \overline{Q} = 1$ (แถว 3)
- T3 : $PS=1,\ CLR=1 \Rightarrow$ $Q$ คงเดิม ($Q = 0$)
- T4 (ขอบขาขึ้น) : $D=1 \Rightarrow Q = 1$
- T6 (ขอบขาขึ้น) : $D=0 \Rightarrow Q = 0$
- T8 (ขอบขาขึ้น) : $D=1 \Rightarrow Q = 1$
- T10 (ขอบขาขึ้น) : $D=1 \Rightarrow Q = 1$
- T12 (ขอบขาขึ้น) : $D=0 \Rightarrow Q = 0$

$\mathbf{Ans}\quad \text{รูปคลื่น } Q \text{ และ } \overline{Q} \text{ ตามรูป}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="814" height="404" viewBox="0 0 814 404" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="62" y1="26" x2="62" y2="398"/>
<line x1="118" y1="26" x2="118" y2="398"/>
<line x1="174" y1="26" x2="174" y2="398"/>
<line x1="230" y1="26" x2="230" y2="398"/>
<line x1="286" y1="26" x2="286" y2="398"/>
<line x1="342" y1="26" x2="342" y2="398"/>
<line x1="398" y1="26" x2="398" y2="398"/>
<line x1="454" y1="26" x2="454" y2="398"/>
<line x1="510" y1="26" x2="510" y2="398"/>
<line x1="566" y1="26" x2="566" y2="398"/>
<line x1="622" y1="26" x2="622" y2="398"/>
<line x1="678" y1="26" x2="678" y2="398"/>
<line x1="734" y1="26" x2="734" y2="398"/>
<line x1="790" y1="26" x2="790" y2="398"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,71.2 L174,71.2 L174,44 L790,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,131.2 L118,131.2 L118,104 L174,104 L174,131.2 L230,131.2 L230,104 L790,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<text x="90" y="183.6" text-anchor="middle" font-size="16">x</text>
<text x="146" y="183.6" text-anchor="middle" font-size="16">x</text>
<text x="202" y="183.6" text-anchor="middle" font-size="16">x</text>
<path d="M230,191.2 L286,191.2 L286,164 L342,164 L342,191.2 L398,191.2 L398,164 L454,164 L454,191.2 L510,191.2 L510,164 L566,164 L566,191.2 L622,191.2 L622,164 L678,164 L678,191.2 L734,191.2 L734,164 L790,164" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">D</text>
<text x="90" y="243.6" text-anchor="middle" font-size="16">x</text>
<text x="146" y="243.6" text-anchor="middle" font-size="16">x</text>
<text x="202" y="243.6" text-anchor="middle" font-size="16">x</text>
<path d="M230,224 L328,224 L328,251.2 L482,251.2 L482,224 L678,224 L678,251.2 L790,251.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">Q</text>
<path d="M62,284 L174,284 L174,311.2 L286,311.2 L286,284 L398,284 L398,311.2 L510,311.2 L510,284 L734,284 L734,311.2 L790,311.2" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="363.6" text-anchor="end">Q</text>
<line x1="38" y1="348.6" x2="50" y2="348.6" stroke="currentColor" stroke-width="1.4"/>
<path d="M62,344 L118,344 L118,371.2 L174,371.2 L174,344 L286,344 L286,371.2 L398,371.2 L398,344 L510,344 L510,371.2 L734,371.2 L734,344 L790,344" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="62" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">0</tspan></text>
<text x="118" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">1</tspan></text>
<text x="174" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">2</tspan></text>
<text x="230" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">3</tspan></text>
<text x="286" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">4</tspan></text>
<text x="342" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">5</tspan></text>
<text x="398" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">6</tspan></text>
<text x="454" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">7</tspan></text>
<text x="510" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">8</tspan></text>
<text x="566" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">9</tspan></text>
<text x="622" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">10</tspan></text>
<text x="678" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">11</tspan></text>
<text x="734" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">12</tspan></text>
<text x="790" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">13</tspan></text>
</svg>
</div>

### Sol {ff=d; trig=rise; pins=ps; set=b}

$\mathbf{Sol}^{n}$

- T0 ถึง T1 : $PS=0,\ CLR=0 \Rightarrow Q = 1,\ \overline{Q} = 1$ (แถว 1)
- T1 ถึง T2 : $PS=0,\ CLR=1 \Rightarrow Q = 1,\ \overline{Q} = 0$ (แถว 2)
- T2 ถึง T3 : $PS=1,\ CLR=0 \Rightarrow Q = 0,\ \overline{Q} = 1$ (แถว 3)
- T3 : $PS=1,\ CLR=1 \Rightarrow$ $Q$ คงเดิม ($Q = 0$)
- T4 (ขอบขาขึ้น) : $D=0 \Rightarrow Q = 0$
- T6 (ขอบขาขึ้น) : $D=1 \Rightarrow Q = 1$
- T8 (ขอบขาขึ้น) : $D=1 \Rightarrow Q = 1$
- T10 (ขอบขาขึ้น) : $D=0 \Rightarrow Q = 0$
- T12 (ขอบขาขึ้น) : $D=1 \Rightarrow Q = 1$

$\mathbf{Ans}\quad \text{รูปคลื่น } Q \text{ และ } \overline{Q} \text{ ตามรูป}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="814" height="404" viewBox="0 0 814 404" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="62" y1="26" x2="62" y2="398"/>
<line x1="118" y1="26" x2="118" y2="398"/>
<line x1="174" y1="26" x2="174" y2="398"/>
<line x1="230" y1="26" x2="230" y2="398"/>
<line x1="286" y1="26" x2="286" y2="398"/>
<line x1="342" y1="26" x2="342" y2="398"/>
<line x1="398" y1="26" x2="398" y2="398"/>
<line x1="454" y1="26" x2="454" y2="398"/>
<line x1="510" y1="26" x2="510" y2="398"/>
<line x1="566" y1="26" x2="566" y2="398"/>
<line x1="622" y1="26" x2="622" y2="398"/>
<line x1="678" y1="26" x2="678" y2="398"/>
<line x1="734" y1="26" x2="734" y2="398"/>
<line x1="790" y1="26" x2="790" y2="398"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,71.2 L174,71.2 L174,44 L790,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,131.2 L118,131.2 L118,104 L174,104 L174,131.2 L230,131.2 L230,104 L790,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<text x="90" y="183.6" text-anchor="middle" font-size="16">x</text>
<text x="146" y="183.6" text-anchor="middle" font-size="16">x</text>
<text x="202" y="183.6" text-anchor="middle" font-size="16">x</text>
<path d="M230,191.2 L286,191.2 L286,164 L342,164 L342,191.2 L398,191.2 L398,164 L454,164 L454,191.2 L510,191.2 L510,164 L566,164 L566,191.2 L622,191.2 L622,164 L678,164 L678,191.2 L734,191.2 L734,164 L790,164" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">D</text>
<text x="90" y="243.6" text-anchor="middle" font-size="16">x</text>
<text x="146" y="243.6" text-anchor="middle" font-size="16">x</text>
<text x="202" y="243.6" text-anchor="middle" font-size="16">x</text>
<path d="M230,251.2 L342,251.2 L342,224 L580,224 L580,251.2 L664,251.2 L664,224 L790,224" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">Q</text>
<path d="M62,284 L174,284 L174,311.2 L398,311.2 L398,284 L622,284 L622,311.2 L734,311.2 L734,284 L790,284" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="363.6" text-anchor="end">Q</text>
<line x1="38" y1="348.6" x2="50" y2="348.6" stroke="currentColor" stroke-width="1.4"/>
<path d="M62,344 L118,344 L118,371.2 L174,371.2 L174,344 L398,344 L398,371.2 L622,371.2 L622,344 L734,344 L734,371.2 L790,371.2" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="62" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">0</tspan></text>
<text x="118" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">1</tspan></text>
<text x="174" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">2</tspan></text>
<text x="230" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">3</tspan></text>
<text x="286" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">4</tspan></text>
<text x="342" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">5</tspan></text>
<text x="398" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">6</tspan></text>
<text x="454" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">7</tspan></text>
<text x="510" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">8</tspan></text>
<text x="566" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">9</tspan></text>
<text x="622" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">10</tspan></text>
<text x="678" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">11</tspan></text>
<text x="734" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">12</tspan></text>
<text x="790" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">13</tspan></text>
</svg>
</div>

### Sol {ff=d; trig=rise; pins=ps; set=c}

$\mathbf{Sol}^{n}$

- T0 ถึง T1 : $PS=0,\ CLR=0 \Rightarrow Q = 1,\ \overline{Q} = 1$ (แถว 1)
- T1 ถึง T2 : $PS=0,\ CLR=1 \Rightarrow Q = 1,\ \overline{Q} = 0$ (แถว 2)
- T2 ถึง T3 : $PS=1,\ CLR=0 \Rightarrow Q = 0,\ \overline{Q} = 1$ (แถว 3)
- T3 : $PS=1,\ CLR=1 \Rightarrow$ $Q$ คงเดิม ($Q = 0$)
- T4 (ขอบขาขึ้น) : $D=1 \Rightarrow Q = 1$
- T6 (ขอบขาขึ้น) : $D=1 \Rightarrow Q = 1$
- T8 (ขอบขาขึ้น) : $D=0 \Rightarrow Q = 0$
- T10 (ขอบขาขึ้น) : $D=1 \Rightarrow Q = 1$
- T12 (ขอบขาขึ้น) : $D=0 \Rightarrow Q = 0$

$\mathbf{Ans}\quad \text{รูปคลื่น } Q \text{ และ } \overline{Q} \text{ ตามรูป}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="814" height="404" viewBox="0 0 814 404" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="62" y1="26" x2="62" y2="398"/>
<line x1="118" y1="26" x2="118" y2="398"/>
<line x1="174" y1="26" x2="174" y2="398"/>
<line x1="230" y1="26" x2="230" y2="398"/>
<line x1="286" y1="26" x2="286" y2="398"/>
<line x1="342" y1="26" x2="342" y2="398"/>
<line x1="398" y1="26" x2="398" y2="398"/>
<line x1="454" y1="26" x2="454" y2="398"/>
<line x1="510" y1="26" x2="510" y2="398"/>
<line x1="566" y1="26" x2="566" y2="398"/>
<line x1="622" y1="26" x2="622" y2="398"/>
<line x1="678" y1="26" x2="678" y2="398"/>
<line x1="734" y1="26" x2="734" y2="398"/>
<line x1="790" y1="26" x2="790" y2="398"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,71.2 L174,71.2 L174,44 L790,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,131.2 L118,131.2 L118,104 L174,104 L174,131.2 L230,131.2 L230,104 L790,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<text x="90" y="183.6" text-anchor="middle" font-size="16">x</text>
<text x="146" y="183.6" text-anchor="middle" font-size="16">x</text>
<text x="202" y="183.6" text-anchor="middle" font-size="16">x</text>
<path d="M230,191.2 L286,191.2 L286,164 L342,164 L342,191.2 L398,191.2 L398,164 L454,164 L454,191.2 L510,191.2 L510,164 L566,164 L566,191.2 L622,191.2 L622,164 L678,164 L678,191.2 L734,191.2 L734,164 L790,164" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">D</text>
<text x="90" y="243.6" text-anchor="middle" font-size="16">x</text>
<text x="146" y="243.6" text-anchor="middle" font-size="16">x</text>
<text x="202" y="243.6" text-anchor="middle" font-size="16">x</text>
<path d="M230,224 L440,224 L440,251.2 L524,251.2 L524,224 L692,224 L692,251.2 L790,251.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">Q</text>
<path d="M62,284 L174,284 L174,311.2 L286,311.2 L286,284 L510,284 L510,311.2 L622,311.2 L622,284 L734,284 L734,311.2 L790,311.2" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="363.6" text-anchor="end">Q</text>
<line x1="38" y1="348.6" x2="50" y2="348.6" stroke="currentColor" stroke-width="1.4"/>
<path d="M62,344 L118,344 L118,371.2 L174,371.2 L174,344 L286,344 L286,371.2 L510,371.2 L510,344 L622,344 L622,371.2 L734,371.2 L734,344 L790,344" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="62" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">0</tspan></text>
<text x="118" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">1</tspan></text>
<text x="174" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">2</tspan></text>
<text x="230" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">3</tspan></text>
<text x="286" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">4</tspan></text>
<text x="342" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">5</tspan></text>
<text x="398" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">6</tspan></text>
<text x="454" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">7</tspan></text>
<text x="510" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">8</tspan></text>
<text x="566" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">9</tspan></text>
<text x="622" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">10</tspan></text>
<text x="678" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">11</tspan></text>
<text x="734" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">12</tspan></text>
<text x="790" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">13</tspan></text>
</svg>
</div>

### Sol {ff=d; trig=fall; pins=none; set=a}

$\mathbf{Sol}^{n}$

- ขอบ #1 : $D=1 \Rightarrow Q = 1$
- ขอบ #2 : $D=0 \Rightarrow Q = 0$
- ขอบ #3 : $D=1 \Rightarrow Q = 1$
- ขอบ #4 : $D=1 \Rightarrow Q = 1$
- ขอบ #5 : $D=0 \Rightarrow Q = 0$

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

### Sol {ff=d; trig=fall; pins=none; set=b}

$\mathbf{Sol}^{n}$

- ขอบ #1 : $D=0 \Rightarrow Q = 0$
- ขอบ #2 : $D=1 \Rightarrow Q = 1$
- ขอบ #3 : $D=1 \Rightarrow Q = 1$
- ขอบ #4 : $D=0 \Rightarrow Q = 0$
- ขอบ #5 : $D=1 \Rightarrow Q = 1$

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

### Sol {ff=d; trig=fall; pins=none; set=c}

$\mathbf{Sol}^{n}$

- ขอบ #1 : $D=1 \Rightarrow Q = 1$
- ขอบ #2 : $D=1 \Rightarrow Q = 1$
- ขอบ #3 : $D=0 \Rightarrow Q = 0$
- ขอบ #4 : $D=1 \Rightarrow Q = 1$
- ขอบ #5 : $D=0 \Rightarrow Q = 0$

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

### Sol {ff=d; trig=fall; pins=ps; set=a}

$\mathbf{Sol}^{n}$

- T0 ถึง T1 : $PS=0,\ CLR=0 \Rightarrow Q = 1,\ \overline{Q} = 1$ (แถว 1)
- T1 ถึง T2 : $PS=0,\ CLR=1 \Rightarrow Q = 1,\ \overline{Q} = 0$ (แถว 2)
- T2 ถึง T3 : $PS=1,\ CLR=0 \Rightarrow Q = 0,\ \overline{Q} = 1$ (แถว 3)
- T3 : $PS=1,\ CLR=1 \Rightarrow$ $Q$ คงเดิม ($Q = 0$)
- T4 (ขอบขาลง) : $D=1 \Rightarrow Q = 1$
- T6 (ขอบขาลง) : $D=0 \Rightarrow Q = 0$
- T8 (ขอบขาลง) : $D=1 \Rightarrow Q = 1$
- T10 (ขอบขาลง) : $D=1 \Rightarrow Q = 1$
- T12 (ขอบขาลง) : $D=0 \Rightarrow Q = 0$

$\mathbf{Ans}\quad \text{รูปคลื่น } Q \text{ และ } \overline{Q} \text{ ตามรูป}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="814" height="404" viewBox="0 0 814 404" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="62" y1="26" x2="62" y2="398"/>
<line x1="118" y1="26" x2="118" y2="398"/>
<line x1="174" y1="26" x2="174" y2="398"/>
<line x1="230" y1="26" x2="230" y2="398"/>
<line x1="286" y1="26" x2="286" y2="398"/>
<line x1="342" y1="26" x2="342" y2="398"/>
<line x1="398" y1="26" x2="398" y2="398"/>
<line x1="454" y1="26" x2="454" y2="398"/>
<line x1="510" y1="26" x2="510" y2="398"/>
<line x1="566" y1="26" x2="566" y2="398"/>
<line x1="622" y1="26" x2="622" y2="398"/>
<line x1="678" y1="26" x2="678" y2="398"/>
<line x1="734" y1="26" x2="734" y2="398"/>
<line x1="790" y1="26" x2="790" y2="398"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,71.2 L174,71.2 L174,44 L790,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,131.2 L118,131.2 L118,104 L174,104 L174,131.2 L230,131.2 L230,104 L790,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<text x="90" y="183.6" text-anchor="middle" font-size="16">x</text>
<text x="146" y="183.6" text-anchor="middle" font-size="16">x</text>
<text x="202" y="183.6" text-anchor="middle" font-size="16">x</text>
<path d="M230,164 L286,164 L286,191.2 L342,191.2 L342,164 L398,164 L398,191.2 L454,191.2 L454,164 L510,164 L510,191.2 L566,191.2 L566,164 L622,164 L622,191.2 L678,191.2 L678,164 L734,164 L734,191.2 L790,191.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">D</text>
<text x="90" y="243.6" text-anchor="middle" font-size="16">x</text>
<text x="146" y="243.6" text-anchor="middle" font-size="16">x</text>
<text x="202" y="243.6" text-anchor="middle" font-size="16">x</text>
<path d="M230,224 L328,224 L328,251.2 L482,251.2 L482,224 L678,224 L678,251.2 L790,251.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">Q</text>
<path d="M62,284 L174,284 L174,311.2 L286,311.2 L286,284 L398,284 L398,311.2 L510,311.2 L510,284 L734,284 L734,311.2 L790,311.2" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="363.6" text-anchor="end">Q</text>
<line x1="38" y1="348.6" x2="50" y2="348.6" stroke="currentColor" stroke-width="1.4"/>
<path d="M62,344 L118,344 L118,371.2 L174,371.2 L174,344 L286,344 L286,371.2 L398,371.2 L398,344 L510,344 L510,371.2 L734,371.2 L734,344 L790,344" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="62" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">0</tspan></text>
<text x="118" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">1</tspan></text>
<text x="174" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">2</tspan></text>
<text x="230" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">3</tspan></text>
<text x="286" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">4</tspan></text>
<text x="342" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">5</tspan></text>
<text x="398" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">6</tspan></text>
<text x="454" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">7</tspan></text>
<text x="510" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">8</tspan></text>
<text x="566" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">9</tspan></text>
<text x="622" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">10</tspan></text>
<text x="678" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">11</tspan></text>
<text x="734" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">12</tspan></text>
<text x="790" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">13</tspan></text>
</svg>
</div>

### Sol {ff=d; trig=fall; pins=ps; set=b}

$\mathbf{Sol}^{n}$

- T0 ถึง T1 : $PS=0,\ CLR=0 \Rightarrow Q = 1,\ \overline{Q} = 1$ (แถว 1)
- T1 ถึง T2 : $PS=0,\ CLR=1 \Rightarrow Q = 1,\ \overline{Q} = 0$ (แถว 2)
- T2 ถึง T3 : $PS=1,\ CLR=0 \Rightarrow Q = 0,\ \overline{Q} = 1$ (แถว 3)
- T3 : $PS=1,\ CLR=1 \Rightarrow$ $Q$ คงเดิม ($Q = 0$)
- T4 (ขอบขาลง) : $D=0 \Rightarrow Q = 0$
- T6 (ขอบขาลง) : $D=1 \Rightarrow Q = 1$
- T8 (ขอบขาลง) : $D=1 \Rightarrow Q = 1$
- T10 (ขอบขาลง) : $D=0 \Rightarrow Q = 0$
- T12 (ขอบขาลง) : $D=1 \Rightarrow Q = 1$

$\mathbf{Ans}\quad \text{รูปคลื่น } Q \text{ และ } \overline{Q} \text{ ตามรูป}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="814" height="404" viewBox="0 0 814 404" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="62" y1="26" x2="62" y2="398"/>
<line x1="118" y1="26" x2="118" y2="398"/>
<line x1="174" y1="26" x2="174" y2="398"/>
<line x1="230" y1="26" x2="230" y2="398"/>
<line x1="286" y1="26" x2="286" y2="398"/>
<line x1="342" y1="26" x2="342" y2="398"/>
<line x1="398" y1="26" x2="398" y2="398"/>
<line x1="454" y1="26" x2="454" y2="398"/>
<line x1="510" y1="26" x2="510" y2="398"/>
<line x1="566" y1="26" x2="566" y2="398"/>
<line x1="622" y1="26" x2="622" y2="398"/>
<line x1="678" y1="26" x2="678" y2="398"/>
<line x1="734" y1="26" x2="734" y2="398"/>
<line x1="790" y1="26" x2="790" y2="398"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,71.2 L174,71.2 L174,44 L790,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,131.2 L118,131.2 L118,104 L174,104 L174,131.2 L230,131.2 L230,104 L790,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<text x="90" y="183.6" text-anchor="middle" font-size="16">x</text>
<text x="146" y="183.6" text-anchor="middle" font-size="16">x</text>
<text x="202" y="183.6" text-anchor="middle" font-size="16">x</text>
<path d="M230,164 L286,164 L286,191.2 L342,191.2 L342,164 L398,164 L398,191.2 L454,191.2 L454,164 L510,164 L510,191.2 L566,191.2 L566,164 L622,164 L622,191.2 L678,191.2 L678,164 L734,164 L734,191.2 L790,191.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">D</text>
<text x="90" y="243.6" text-anchor="middle" font-size="16">x</text>
<text x="146" y="243.6" text-anchor="middle" font-size="16">x</text>
<text x="202" y="243.6" text-anchor="middle" font-size="16">x</text>
<path d="M230,251.2 L342,251.2 L342,224 L580,224 L580,251.2 L664,251.2 L664,224 L790,224" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">Q</text>
<path d="M62,284 L174,284 L174,311.2 L398,311.2 L398,284 L622,284 L622,311.2 L734,311.2 L734,284 L790,284" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="363.6" text-anchor="end">Q</text>
<line x1="38" y1="348.6" x2="50" y2="348.6" stroke="currentColor" stroke-width="1.4"/>
<path d="M62,344 L118,344 L118,371.2 L174,371.2 L174,344 L398,344 L398,371.2 L622,371.2 L622,344 L734,344 L734,371.2 L790,371.2" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="62" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">0</tspan></text>
<text x="118" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">1</tspan></text>
<text x="174" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">2</tspan></text>
<text x="230" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">3</tspan></text>
<text x="286" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">4</tspan></text>
<text x="342" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">5</tspan></text>
<text x="398" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">6</tspan></text>
<text x="454" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">7</tspan></text>
<text x="510" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">8</tspan></text>
<text x="566" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">9</tspan></text>
<text x="622" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">10</tspan></text>
<text x="678" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">11</tspan></text>
<text x="734" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">12</tspan></text>
<text x="790" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">13</tspan></text>
</svg>
</div>

### Sol {ff=d; trig=fall; pins=ps; set=c}

$\mathbf{Sol}^{n}$

- T0 ถึง T1 : $PS=0,\ CLR=0 \Rightarrow Q = 1,\ \overline{Q} = 1$ (แถว 1)
- T1 ถึง T2 : $PS=0,\ CLR=1 \Rightarrow Q = 1,\ \overline{Q} = 0$ (แถว 2)
- T2 ถึง T3 : $PS=1,\ CLR=0 \Rightarrow Q = 0,\ \overline{Q} = 1$ (แถว 3)
- T3 : $PS=1,\ CLR=1 \Rightarrow$ $Q$ คงเดิม ($Q = 0$)
- T4 (ขอบขาลง) : $D=1 \Rightarrow Q = 1$
- T6 (ขอบขาลง) : $D=1 \Rightarrow Q = 1$
- T8 (ขอบขาลง) : $D=0 \Rightarrow Q = 0$
- T10 (ขอบขาลง) : $D=1 \Rightarrow Q = 1$
- T12 (ขอบขาลง) : $D=0 \Rightarrow Q = 0$

$\mathbf{Ans}\quad \text{รูปคลื่น } Q \text{ และ } \overline{Q} \text{ ตามรูป}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="814" height="404" viewBox="0 0 814 404" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="62" y1="26" x2="62" y2="398"/>
<line x1="118" y1="26" x2="118" y2="398"/>
<line x1="174" y1="26" x2="174" y2="398"/>
<line x1="230" y1="26" x2="230" y2="398"/>
<line x1="286" y1="26" x2="286" y2="398"/>
<line x1="342" y1="26" x2="342" y2="398"/>
<line x1="398" y1="26" x2="398" y2="398"/>
<line x1="454" y1="26" x2="454" y2="398"/>
<line x1="510" y1="26" x2="510" y2="398"/>
<line x1="566" y1="26" x2="566" y2="398"/>
<line x1="622" y1="26" x2="622" y2="398"/>
<line x1="678" y1="26" x2="678" y2="398"/>
<line x1="734" y1="26" x2="734" y2="398"/>
<line x1="790" y1="26" x2="790" y2="398"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,71.2 L174,71.2 L174,44 L790,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,131.2 L118,131.2 L118,104 L174,104 L174,131.2 L230,131.2 L230,104 L790,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<text x="90" y="183.6" text-anchor="middle" font-size="16">x</text>
<text x="146" y="183.6" text-anchor="middle" font-size="16">x</text>
<text x="202" y="183.6" text-anchor="middle" font-size="16">x</text>
<path d="M230,164 L286,164 L286,191.2 L342,191.2 L342,164 L398,164 L398,191.2 L454,191.2 L454,164 L510,164 L510,191.2 L566,191.2 L566,164 L622,164 L622,191.2 L678,191.2 L678,164 L734,164 L734,191.2 L790,191.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">D</text>
<text x="90" y="243.6" text-anchor="middle" font-size="16">x</text>
<text x="146" y="243.6" text-anchor="middle" font-size="16">x</text>
<text x="202" y="243.6" text-anchor="middle" font-size="16">x</text>
<path d="M230,224 L440,224 L440,251.2 L524,251.2 L524,224 L692,224 L692,251.2 L790,251.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">Q</text>
<path d="M62,284 L174,284 L174,311.2 L286,311.2 L286,284 L510,284 L510,311.2 L622,311.2 L622,284 L734,284 L734,311.2 L790,311.2" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="363.6" text-anchor="end">Q</text>
<line x1="38" y1="348.6" x2="50" y2="348.6" stroke="currentColor" stroke-width="1.4"/>
<path d="M62,344 L118,344 L118,371.2 L174,371.2 L174,344 L286,344 L286,371.2 L510,371.2 L510,344 L622,344 L622,371.2 L734,371.2 L734,344 L790,344" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="62" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">0</tspan></text>
<text x="118" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">1</tspan></text>
<text x="174" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">2</tspan></text>
<text x="230" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">3</tspan></text>
<text x="286" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">4</tspan></text>
<text x="342" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">5</tspan></text>
<text x="398" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">6</tspan></text>
<text x="454" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">7</tspan></text>
<text x="510" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">8</tspan></text>
<text x="566" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">9</tspan></text>
<text x="622" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">10</tspan></text>
<text x="678" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">11</tspan></text>
<text x="734" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">12</tspan></text>
<text x="790" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">13</tspan></text>
</svg>
</div>

### Sol {ff=t; trig=rise; pins=none; set=a}

$\mathbf{Sol}^{n}$

- ขอบ #1 : $T=1$ $\Rightarrow$ สลับ $\Rightarrow Q = 1$
- ขอบ #2 : $T=1$ $\Rightarrow$ สลับ $\Rightarrow Q = 0$
- ขอบ #3 : $T=0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 0$
- ขอบ #4 : $T=1$ $\Rightarrow$ สลับ $\Rightarrow Q = 1$
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

### Sol {ff=t; trig=rise; pins=none; set=b}

$\mathbf{Sol}^{n}$

- ขอบ #1 : $T=0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 0$
- ขอบ #2 : $T=1$ $\Rightarrow$ สลับ $\Rightarrow Q = 1$
- ขอบ #3 : $T=1$ $\Rightarrow$ สลับ $\Rightarrow Q = 0$
- ขอบ #4 : $T=1$ $\Rightarrow$ สลับ $\Rightarrow Q = 1$
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

### Sol {ff=t; trig=rise; pins=none; set=c}

$\mathbf{Sol}^{n}$

- ขอบ #1 : $T=1$ $\Rightarrow$ สลับ $\Rightarrow Q = 1$
- ขอบ #2 : $T=0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 1$
- ขอบ #3 : $T=1$ $\Rightarrow$ สลับ $\Rightarrow Q = 0$
- ขอบ #4 : $T=0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 0$
- ขอบ #5 : $T=1$ $\Rightarrow$ สลับ $\Rightarrow Q = 1$

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

### Sol {ff=t; trig=rise; pins=ps; set=a}

$\mathbf{Sol}^{n}$

- T0 ถึง T1 : $PS=0,\ CLR=0 \Rightarrow Q = 1,\ \overline{Q} = 1$ (แถว 1)
- T1 ถึง T2 : $PS=0,\ CLR=1 \Rightarrow Q = 1,\ \overline{Q} = 0$ (แถว 2)
- T2 ถึง T3 : $PS=1,\ CLR=0 \Rightarrow Q = 0,\ \overline{Q} = 1$ (แถว 3)
- T3 : $PS=1,\ CLR=1 \Rightarrow$ $Q$ คงเดิม ($Q = 0$)
- T4 (ขอบขาขึ้น) : $T=1$ $\Rightarrow$ สลับ $\Rightarrow Q = 1$
- T6 (ขอบขาขึ้น) : $T=1$ $\Rightarrow$ สลับ $\Rightarrow Q = 0$
- T8 (ขอบขาขึ้น) : $T=0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 0$
- T10 (ขอบขาขึ้น) : $T=1$ $\Rightarrow$ สลับ $\Rightarrow Q = 1$
- T12 (ขอบขาขึ้น) : $T=0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 1$

$\mathbf{Ans}\quad \text{รูปคลื่น } Q \text{ และ } \overline{Q} \text{ ตามรูป}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="814" height="404" viewBox="0 0 814 404" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="62" y1="26" x2="62" y2="398"/>
<line x1="118" y1="26" x2="118" y2="398"/>
<line x1="174" y1="26" x2="174" y2="398"/>
<line x1="230" y1="26" x2="230" y2="398"/>
<line x1="286" y1="26" x2="286" y2="398"/>
<line x1="342" y1="26" x2="342" y2="398"/>
<line x1="398" y1="26" x2="398" y2="398"/>
<line x1="454" y1="26" x2="454" y2="398"/>
<line x1="510" y1="26" x2="510" y2="398"/>
<line x1="566" y1="26" x2="566" y2="398"/>
<line x1="622" y1="26" x2="622" y2="398"/>
<line x1="678" y1="26" x2="678" y2="398"/>
<line x1="734" y1="26" x2="734" y2="398"/>
<line x1="790" y1="26" x2="790" y2="398"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,71.2 L174,71.2 L174,44 L790,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,131.2 L118,131.2 L118,104 L174,104 L174,131.2 L230,131.2 L230,104 L790,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<text x="90" y="183.6" text-anchor="middle" font-size="16">x</text>
<text x="146" y="183.6" text-anchor="middle" font-size="16">x</text>
<text x="202" y="183.6" text-anchor="middle" font-size="16">x</text>
<path d="M230,191.2 L286,191.2 L286,164 L342,164 L342,191.2 L398,191.2 L398,164 L454,164 L454,191.2 L510,191.2 L510,164 L566,164 L566,191.2 L622,191.2 L622,164 L678,164 L678,191.2 L734,191.2 L734,164 L790,164" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">T</text>
<text x="90" y="243.6" text-anchor="middle" font-size="16">x</text>
<text x="146" y="243.6" text-anchor="middle" font-size="16">x</text>
<text x="202" y="243.6" text-anchor="middle" font-size="16">x</text>
<path d="M230,224 L482,224 L482,251.2 L538,251.2 L538,224 L678,224 L678,251.2 L790,251.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">Q</text>
<path d="M62,284 L174,284 L174,311.2 L286,311.2 L286,284 L398,284 L398,311.2 L622,311.2 L622,284 L790,284" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="363.6" text-anchor="end">Q</text>
<line x1="38" y1="348.6" x2="50" y2="348.6" stroke="currentColor" stroke-width="1.4"/>
<path d="M62,344 L118,344 L118,371.2 L174,371.2 L174,344 L286,344 L286,371.2 L398,371.2 L398,344 L622,344 L622,371.2 L790,371.2" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="62" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">0</tspan></text>
<text x="118" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">1</tspan></text>
<text x="174" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">2</tspan></text>
<text x="230" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">3</tspan></text>
<text x="286" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">4</tspan></text>
<text x="342" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">5</tspan></text>
<text x="398" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">6</tspan></text>
<text x="454" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">7</tspan></text>
<text x="510" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">8</tspan></text>
<text x="566" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">9</tspan></text>
<text x="622" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">10</tspan></text>
<text x="678" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">11</tspan></text>
<text x="734" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">12</tspan></text>
<text x="790" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">13</tspan></text>
</svg>
</div>

### Sol {ff=t; trig=rise; pins=ps; set=b}

$\mathbf{Sol}^{n}$

- T0 ถึง T1 : $PS=0,\ CLR=0 \Rightarrow Q = 1,\ \overline{Q} = 1$ (แถว 1)
- T1 ถึง T2 : $PS=0,\ CLR=1 \Rightarrow Q = 1,\ \overline{Q} = 0$ (แถว 2)
- T2 ถึง T3 : $PS=1,\ CLR=0 \Rightarrow Q = 0,\ \overline{Q} = 1$ (แถว 3)
- T3 : $PS=1,\ CLR=1 \Rightarrow$ $Q$ คงเดิม ($Q = 0$)
- T4 (ขอบขาขึ้น) : $T=0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 0$
- T6 (ขอบขาขึ้น) : $T=1$ $\Rightarrow$ สลับ $\Rightarrow Q = 1$
- T8 (ขอบขาขึ้น) : $T=1$ $\Rightarrow$ สลับ $\Rightarrow Q = 0$
- T10 (ขอบขาขึ้น) : $T=1$ $\Rightarrow$ สลับ $\Rightarrow Q = 1$
- T12 (ขอบขาขึ้น) : $T=0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 1$

$\mathbf{Ans}\quad \text{รูปคลื่น } Q \text{ และ } \overline{Q} \text{ ตามรูป}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="814" height="404" viewBox="0 0 814 404" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="62" y1="26" x2="62" y2="398"/>
<line x1="118" y1="26" x2="118" y2="398"/>
<line x1="174" y1="26" x2="174" y2="398"/>
<line x1="230" y1="26" x2="230" y2="398"/>
<line x1="286" y1="26" x2="286" y2="398"/>
<line x1="342" y1="26" x2="342" y2="398"/>
<line x1="398" y1="26" x2="398" y2="398"/>
<line x1="454" y1="26" x2="454" y2="398"/>
<line x1="510" y1="26" x2="510" y2="398"/>
<line x1="566" y1="26" x2="566" y2="398"/>
<line x1="622" y1="26" x2="622" y2="398"/>
<line x1="678" y1="26" x2="678" y2="398"/>
<line x1="734" y1="26" x2="734" y2="398"/>
<line x1="790" y1="26" x2="790" y2="398"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,71.2 L174,71.2 L174,44 L790,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,131.2 L118,131.2 L118,104 L174,104 L174,131.2 L230,131.2 L230,104 L790,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<text x="90" y="183.6" text-anchor="middle" font-size="16">x</text>
<text x="146" y="183.6" text-anchor="middle" font-size="16">x</text>
<text x="202" y="183.6" text-anchor="middle" font-size="16">x</text>
<path d="M230,191.2 L286,191.2 L286,164 L342,164 L342,191.2 L398,191.2 L398,164 L454,164 L454,191.2 L510,191.2 L510,164 L566,164 L566,191.2 L622,191.2 L622,164 L678,164 L678,191.2 L734,191.2 L734,164 L790,164" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">T</text>
<text x="90" y="243.6" text-anchor="middle" font-size="16">x</text>
<text x="146" y="243.6" text-anchor="middle" font-size="16">x</text>
<text x="202" y="243.6" text-anchor="middle" font-size="16">x</text>
<path d="M230,251.2 L342,251.2 L342,224 L664,224 L664,251.2 L790,251.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">Q</text>
<path d="M62,284 L174,284 L174,311.2 L398,311.2 L398,284 L510,284 L510,311.2 L622,311.2 L622,284 L790,284" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="363.6" text-anchor="end">Q</text>
<line x1="38" y1="348.6" x2="50" y2="348.6" stroke="currentColor" stroke-width="1.4"/>
<path d="M62,344 L118,344 L118,371.2 L174,371.2 L174,344 L398,344 L398,371.2 L510,371.2 L510,344 L622,344 L622,371.2 L790,371.2" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="62" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">0</tspan></text>
<text x="118" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">1</tspan></text>
<text x="174" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">2</tspan></text>
<text x="230" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">3</tspan></text>
<text x="286" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">4</tspan></text>
<text x="342" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">5</tspan></text>
<text x="398" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">6</tspan></text>
<text x="454" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">7</tspan></text>
<text x="510" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">8</tspan></text>
<text x="566" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">9</tspan></text>
<text x="622" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">10</tspan></text>
<text x="678" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">11</tspan></text>
<text x="734" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">12</tspan></text>
<text x="790" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">13</tspan></text>
</svg>
</div>

### Sol {ff=t; trig=rise; pins=ps; set=c}

$\mathbf{Sol}^{n}$

- T0 ถึง T1 : $PS=0,\ CLR=0 \Rightarrow Q = 1,\ \overline{Q} = 1$ (แถว 1)
- T1 ถึง T2 : $PS=0,\ CLR=1 \Rightarrow Q = 1,\ \overline{Q} = 0$ (แถว 2)
- T2 ถึง T3 : $PS=1,\ CLR=0 \Rightarrow Q = 0,\ \overline{Q} = 1$ (แถว 3)
- T3 : $PS=1,\ CLR=1 \Rightarrow$ $Q$ คงเดิม ($Q = 0$)
- T4 (ขอบขาขึ้น) : $T=1$ $\Rightarrow$ สลับ $\Rightarrow Q = 1$
- T6 (ขอบขาขึ้น) : $T=0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 1$
- T8 (ขอบขาขึ้น) : $T=1$ $\Rightarrow$ สลับ $\Rightarrow Q = 0$
- T10 (ขอบขาขึ้น) : $T=0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 0$
- T12 (ขอบขาขึ้น) : $T=1$ $\Rightarrow$ สลับ $\Rightarrow Q = 1$

$\mathbf{Ans}\quad \text{รูปคลื่น } Q \text{ และ } \overline{Q} \text{ ตามรูป}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="814" height="404" viewBox="0 0 814 404" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="62" y1="26" x2="62" y2="398"/>
<line x1="118" y1="26" x2="118" y2="398"/>
<line x1="174" y1="26" x2="174" y2="398"/>
<line x1="230" y1="26" x2="230" y2="398"/>
<line x1="286" y1="26" x2="286" y2="398"/>
<line x1="342" y1="26" x2="342" y2="398"/>
<line x1="398" y1="26" x2="398" y2="398"/>
<line x1="454" y1="26" x2="454" y2="398"/>
<line x1="510" y1="26" x2="510" y2="398"/>
<line x1="566" y1="26" x2="566" y2="398"/>
<line x1="622" y1="26" x2="622" y2="398"/>
<line x1="678" y1="26" x2="678" y2="398"/>
<line x1="734" y1="26" x2="734" y2="398"/>
<line x1="790" y1="26" x2="790" y2="398"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,71.2 L174,71.2 L174,44 L790,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,131.2 L118,131.2 L118,104 L174,104 L174,131.2 L230,131.2 L230,104 L790,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<text x="90" y="183.6" text-anchor="middle" font-size="16">x</text>
<text x="146" y="183.6" text-anchor="middle" font-size="16">x</text>
<text x="202" y="183.6" text-anchor="middle" font-size="16">x</text>
<path d="M230,191.2 L286,191.2 L286,164 L342,164 L342,191.2 L398,191.2 L398,164 L454,164 L454,191.2 L510,191.2 L510,164 L566,164 L566,191.2 L622,191.2 L622,164 L678,164 L678,191.2 L734,191.2 L734,164 L790,164" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">T</text>
<text x="90" y="243.6" text-anchor="middle" font-size="16">x</text>
<text x="146" y="243.6" text-anchor="middle" font-size="16">x</text>
<text x="202" y="243.6" text-anchor="middle" font-size="16">x</text>
<path d="M230,224 L370,224 L370,251.2 L440,251.2 L440,224 L524,224 L524,251.2 L692,251.2 L692,224 L790,224" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">Q</text>
<path d="M62,284 L174,284 L174,311.2 L286,311.2 L286,284 L510,284 L510,311.2 L734,311.2 L734,284 L790,284" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="363.6" text-anchor="end">Q</text>
<line x1="38" y1="348.6" x2="50" y2="348.6" stroke="currentColor" stroke-width="1.4"/>
<path d="M62,344 L118,344 L118,371.2 L174,371.2 L174,344 L286,344 L286,371.2 L510,371.2 L510,344 L734,344 L734,371.2 L790,371.2" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="62" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">0</tspan></text>
<text x="118" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">1</tspan></text>
<text x="174" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">2</tspan></text>
<text x="230" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">3</tspan></text>
<text x="286" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">4</tspan></text>
<text x="342" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">5</tspan></text>
<text x="398" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">6</tspan></text>
<text x="454" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">7</tspan></text>
<text x="510" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">8</tspan></text>
<text x="566" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">9</tspan></text>
<text x="622" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">10</tspan></text>
<text x="678" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">11</tspan></text>
<text x="734" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">12</tspan></text>
<text x="790" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">13</tspan></text>
</svg>
</div>

### Sol {ff=t; trig=fall; pins=none; set=a}

$\mathbf{Sol}^{n}$

- ขอบ #1 : $T=1$ $\Rightarrow$ สลับ $\Rightarrow Q = 1$
- ขอบ #2 : $T=1$ $\Rightarrow$ สลับ $\Rightarrow Q = 0$
- ขอบ #3 : $T=0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 0$
- ขอบ #4 : $T=1$ $\Rightarrow$ สลับ $\Rightarrow Q = 1$
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

### Sol {ff=t; trig=fall; pins=none; set=b}

$\mathbf{Sol}^{n}$

- ขอบ #1 : $T=0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 0$
- ขอบ #2 : $T=1$ $\Rightarrow$ สลับ $\Rightarrow Q = 1$
- ขอบ #3 : $T=1$ $\Rightarrow$ สลับ $\Rightarrow Q = 0$
- ขอบ #4 : $T=1$ $\Rightarrow$ สลับ $\Rightarrow Q = 1$
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

### Sol {ff=t; trig=fall; pins=none; set=c}

$\mathbf{Sol}^{n}$

- ขอบ #1 : $T=1$ $\Rightarrow$ สลับ $\Rightarrow Q = 1$
- ขอบ #2 : $T=0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 1$
- ขอบ #3 : $T=1$ $\Rightarrow$ สลับ $\Rightarrow Q = 0$
- ขอบ #4 : $T=0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 0$
- ขอบ #5 : $T=1$ $\Rightarrow$ สลับ $\Rightarrow Q = 1$

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

### Sol {ff=t; trig=fall; pins=ps; set=a}

$\mathbf{Sol}^{n}$

- T0 ถึง T1 : $PS=0,\ CLR=0 \Rightarrow Q = 1,\ \overline{Q} = 1$ (แถว 1)
- T1 ถึง T2 : $PS=0,\ CLR=1 \Rightarrow Q = 1,\ \overline{Q} = 0$ (แถว 2)
- T2 ถึง T3 : $PS=1,\ CLR=0 \Rightarrow Q = 0,\ \overline{Q} = 1$ (แถว 3)
- T3 : $PS=1,\ CLR=1 \Rightarrow$ $Q$ คงเดิม ($Q = 0$)
- T4 (ขอบขาลง) : $T=1$ $\Rightarrow$ สลับ $\Rightarrow Q = 1$
- T6 (ขอบขาลง) : $T=1$ $\Rightarrow$ สลับ $\Rightarrow Q = 0$
- T8 (ขอบขาลง) : $T=0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 0$
- T10 (ขอบขาลง) : $T=1$ $\Rightarrow$ สลับ $\Rightarrow Q = 1$
- T12 (ขอบขาลง) : $T=0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 1$

$\mathbf{Ans}\quad \text{รูปคลื่น } Q \text{ และ } \overline{Q} \text{ ตามรูป}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="814" height="404" viewBox="0 0 814 404" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="62" y1="26" x2="62" y2="398"/>
<line x1="118" y1="26" x2="118" y2="398"/>
<line x1="174" y1="26" x2="174" y2="398"/>
<line x1="230" y1="26" x2="230" y2="398"/>
<line x1="286" y1="26" x2="286" y2="398"/>
<line x1="342" y1="26" x2="342" y2="398"/>
<line x1="398" y1="26" x2="398" y2="398"/>
<line x1="454" y1="26" x2="454" y2="398"/>
<line x1="510" y1="26" x2="510" y2="398"/>
<line x1="566" y1="26" x2="566" y2="398"/>
<line x1="622" y1="26" x2="622" y2="398"/>
<line x1="678" y1="26" x2="678" y2="398"/>
<line x1="734" y1="26" x2="734" y2="398"/>
<line x1="790" y1="26" x2="790" y2="398"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,71.2 L174,71.2 L174,44 L790,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,131.2 L118,131.2 L118,104 L174,104 L174,131.2 L230,131.2 L230,104 L790,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<text x="90" y="183.6" text-anchor="middle" font-size="16">x</text>
<text x="146" y="183.6" text-anchor="middle" font-size="16">x</text>
<text x="202" y="183.6" text-anchor="middle" font-size="16">x</text>
<path d="M230,164 L286,164 L286,191.2 L342,191.2 L342,164 L398,164 L398,191.2 L454,191.2 L454,164 L510,164 L510,191.2 L566,191.2 L566,164 L622,164 L622,191.2 L678,191.2 L678,164 L734,164 L734,191.2 L790,191.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">T</text>
<text x="90" y="243.6" text-anchor="middle" font-size="16">x</text>
<text x="146" y="243.6" text-anchor="middle" font-size="16">x</text>
<text x="202" y="243.6" text-anchor="middle" font-size="16">x</text>
<path d="M230,224 L482,224 L482,251.2 L538,251.2 L538,224 L678,224 L678,251.2 L790,251.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">Q</text>
<path d="M62,284 L174,284 L174,311.2 L286,311.2 L286,284 L398,284 L398,311.2 L622,311.2 L622,284 L790,284" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="363.6" text-anchor="end">Q</text>
<line x1="38" y1="348.6" x2="50" y2="348.6" stroke="currentColor" stroke-width="1.4"/>
<path d="M62,344 L118,344 L118,371.2 L174,371.2 L174,344 L286,344 L286,371.2 L398,371.2 L398,344 L622,344 L622,371.2 L790,371.2" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="62" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">0</tspan></text>
<text x="118" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">1</tspan></text>
<text x="174" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">2</tspan></text>
<text x="230" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">3</tspan></text>
<text x="286" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">4</tspan></text>
<text x="342" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">5</tspan></text>
<text x="398" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">6</tspan></text>
<text x="454" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">7</tspan></text>
<text x="510" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">8</tspan></text>
<text x="566" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">9</tspan></text>
<text x="622" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">10</tspan></text>
<text x="678" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">11</tspan></text>
<text x="734" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">12</tspan></text>
<text x="790" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">13</tspan></text>
</svg>
</div>

### Sol {ff=t; trig=fall; pins=ps; set=b}

$\mathbf{Sol}^{n}$

- T0 ถึง T1 : $PS=0,\ CLR=0 \Rightarrow Q = 1,\ \overline{Q} = 1$ (แถว 1)
- T1 ถึง T2 : $PS=0,\ CLR=1 \Rightarrow Q = 1,\ \overline{Q} = 0$ (แถว 2)
- T2 ถึง T3 : $PS=1,\ CLR=0 \Rightarrow Q = 0,\ \overline{Q} = 1$ (แถว 3)
- T3 : $PS=1,\ CLR=1 \Rightarrow$ $Q$ คงเดิม ($Q = 0$)
- T4 (ขอบขาลง) : $T=0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 0$
- T6 (ขอบขาลง) : $T=1$ $\Rightarrow$ สลับ $\Rightarrow Q = 1$
- T8 (ขอบขาลง) : $T=1$ $\Rightarrow$ สลับ $\Rightarrow Q = 0$
- T10 (ขอบขาลง) : $T=1$ $\Rightarrow$ สลับ $\Rightarrow Q = 1$
- T12 (ขอบขาลง) : $T=0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 1$

$\mathbf{Ans}\quad \text{รูปคลื่น } Q \text{ และ } \overline{Q} \text{ ตามรูป}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="814" height="404" viewBox="0 0 814 404" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="62" y1="26" x2="62" y2="398"/>
<line x1="118" y1="26" x2="118" y2="398"/>
<line x1="174" y1="26" x2="174" y2="398"/>
<line x1="230" y1="26" x2="230" y2="398"/>
<line x1="286" y1="26" x2="286" y2="398"/>
<line x1="342" y1="26" x2="342" y2="398"/>
<line x1="398" y1="26" x2="398" y2="398"/>
<line x1="454" y1="26" x2="454" y2="398"/>
<line x1="510" y1="26" x2="510" y2="398"/>
<line x1="566" y1="26" x2="566" y2="398"/>
<line x1="622" y1="26" x2="622" y2="398"/>
<line x1="678" y1="26" x2="678" y2="398"/>
<line x1="734" y1="26" x2="734" y2="398"/>
<line x1="790" y1="26" x2="790" y2="398"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,71.2 L174,71.2 L174,44 L790,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,131.2 L118,131.2 L118,104 L174,104 L174,131.2 L230,131.2 L230,104 L790,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<text x="90" y="183.6" text-anchor="middle" font-size="16">x</text>
<text x="146" y="183.6" text-anchor="middle" font-size="16">x</text>
<text x="202" y="183.6" text-anchor="middle" font-size="16">x</text>
<path d="M230,164 L286,164 L286,191.2 L342,191.2 L342,164 L398,164 L398,191.2 L454,191.2 L454,164 L510,164 L510,191.2 L566,191.2 L566,164 L622,164 L622,191.2 L678,191.2 L678,164 L734,164 L734,191.2 L790,191.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">T</text>
<text x="90" y="243.6" text-anchor="middle" font-size="16">x</text>
<text x="146" y="243.6" text-anchor="middle" font-size="16">x</text>
<text x="202" y="243.6" text-anchor="middle" font-size="16">x</text>
<path d="M230,251.2 L342,251.2 L342,224 L664,224 L664,251.2 L790,251.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">Q</text>
<path d="M62,284 L174,284 L174,311.2 L398,311.2 L398,284 L510,284 L510,311.2 L622,311.2 L622,284 L790,284" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="363.6" text-anchor="end">Q</text>
<line x1="38" y1="348.6" x2="50" y2="348.6" stroke="currentColor" stroke-width="1.4"/>
<path d="M62,344 L118,344 L118,371.2 L174,371.2 L174,344 L398,344 L398,371.2 L510,371.2 L510,344 L622,344 L622,371.2 L790,371.2" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="62" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">0</tspan></text>
<text x="118" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">1</tspan></text>
<text x="174" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">2</tspan></text>
<text x="230" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">3</tspan></text>
<text x="286" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">4</tspan></text>
<text x="342" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">5</tspan></text>
<text x="398" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">6</tspan></text>
<text x="454" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">7</tspan></text>
<text x="510" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">8</tspan></text>
<text x="566" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">9</tspan></text>
<text x="622" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">10</tspan></text>
<text x="678" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">11</tspan></text>
<text x="734" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">12</tspan></text>
<text x="790" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">13</tspan></text>
</svg>
</div>

### Sol {ff=t; trig=fall; pins=ps; set=c}

$\mathbf{Sol}^{n}$

- T0 ถึง T1 : $PS=0,\ CLR=0 \Rightarrow Q = 1,\ \overline{Q} = 1$ (แถว 1)
- T1 ถึง T2 : $PS=0,\ CLR=1 \Rightarrow Q = 1,\ \overline{Q} = 0$ (แถว 2)
- T2 ถึง T3 : $PS=1,\ CLR=0 \Rightarrow Q = 0,\ \overline{Q} = 1$ (แถว 3)
- T3 : $PS=1,\ CLR=1 \Rightarrow$ $Q$ คงเดิม ($Q = 0$)
- T4 (ขอบขาลง) : $T=1$ $\Rightarrow$ สลับ $\Rightarrow Q = 1$
- T6 (ขอบขาลง) : $T=0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 1$
- T8 (ขอบขาลง) : $T=1$ $\Rightarrow$ สลับ $\Rightarrow Q = 0$
- T10 (ขอบขาลง) : $T=0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 0$
- T12 (ขอบขาลง) : $T=1$ $\Rightarrow$ สลับ $\Rightarrow Q = 1$

$\mathbf{Ans}\quad \text{รูปคลื่น } Q \text{ และ } \overline{Q} \text{ ตามรูป}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="814" height="404" viewBox="0 0 814 404" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="62" y1="26" x2="62" y2="398"/>
<line x1="118" y1="26" x2="118" y2="398"/>
<line x1="174" y1="26" x2="174" y2="398"/>
<line x1="230" y1="26" x2="230" y2="398"/>
<line x1="286" y1="26" x2="286" y2="398"/>
<line x1="342" y1="26" x2="342" y2="398"/>
<line x1="398" y1="26" x2="398" y2="398"/>
<line x1="454" y1="26" x2="454" y2="398"/>
<line x1="510" y1="26" x2="510" y2="398"/>
<line x1="566" y1="26" x2="566" y2="398"/>
<line x1="622" y1="26" x2="622" y2="398"/>
<line x1="678" y1="26" x2="678" y2="398"/>
<line x1="734" y1="26" x2="734" y2="398"/>
<line x1="790" y1="26" x2="790" y2="398"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,71.2 L174,71.2 L174,44 L790,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,131.2 L118,131.2 L118,104 L174,104 L174,131.2 L230,131.2 L230,104 L790,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<text x="90" y="183.6" text-anchor="middle" font-size="16">x</text>
<text x="146" y="183.6" text-anchor="middle" font-size="16">x</text>
<text x="202" y="183.6" text-anchor="middle" font-size="16">x</text>
<path d="M230,164 L286,164 L286,191.2 L342,191.2 L342,164 L398,164 L398,191.2 L454,191.2 L454,164 L510,164 L510,191.2 L566,191.2 L566,164 L622,164 L622,191.2 L678,191.2 L678,164 L734,164 L734,191.2 L790,191.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">T</text>
<text x="90" y="243.6" text-anchor="middle" font-size="16">x</text>
<text x="146" y="243.6" text-anchor="middle" font-size="16">x</text>
<text x="202" y="243.6" text-anchor="middle" font-size="16">x</text>
<path d="M230,224 L370,224 L370,251.2 L440,251.2 L440,224 L524,224 L524,251.2 L692,251.2 L692,224 L790,224" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">Q</text>
<path d="M62,284 L174,284 L174,311.2 L286,311.2 L286,284 L510,284 L510,311.2 L734,311.2 L734,284 L790,284" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="363.6" text-anchor="end">Q</text>
<line x1="38" y1="348.6" x2="50" y2="348.6" stroke="currentColor" stroke-width="1.4"/>
<path d="M62,344 L118,344 L118,371.2 L174,371.2 L174,344 L286,344 L286,371.2 L510,371.2 L510,344 L734,344 L734,371.2 L790,371.2" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="62" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">0</tspan></text>
<text x="118" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">1</tspan></text>
<text x="174" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">2</tspan></text>
<text x="230" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">3</tspan></text>
<text x="286" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">4</tspan></text>
<text x="342" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">5</tspan></text>
<text x="398" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">6</tspan></text>
<text x="454" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">7</tspan></text>
<text x="510" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">8</tspan></text>
<text x="566" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">9</tspan></text>
<text x="622" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">10</tspan></text>
<text x="678" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">11</tspan></text>
<text x="734" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">12</tspan></text>
<text x="790" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">13</tspan></text>
</svg>
</div>

### Sol {ff=rs; trig=rise; pins=none; set=a}

$\mathbf{Sol}^{n}$

- ขอบ #1 : $R=0, S=1$ $\Rightarrow$ Set $\Rightarrow Q = 1$
- ขอบ #2 : $R=0, S=0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 1$
- ขอบ #3 : $R=1, S=0$ $\Rightarrow$ Reset $\Rightarrow Q = 0$
- ขอบ #4 : $R=0, S=1$ $\Rightarrow$ Set $\Rightarrow Q = 1$
- ขอบ #5 : $R=1, S=0$ $\Rightarrow$ Reset $\Rightarrow Q = 0$

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

### Sol {ff=rs; trig=rise; pins=none; set=b}

$\mathbf{Sol}^{n}$

- ขอบ #1 : $R=1, S=0$ $\Rightarrow$ Reset $\Rightarrow Q = 0$
- ขอบ #2 : $R=0, S=1$ $\Rightarrow$ Set $\Rightarrow Q = 1$
- ขอบ #3 : $R=0, S=0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 1$
- ขอบ #4 : $R=1, S=0$ $\Rightarrow$ Reset $\Rightarrow Q = 0$
- ขอบ #5 : $R=0, S=1$ $\Rightarrow$ Set $\Rightarrow Q = 1$

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

### Sol {ff=rs; trig=rise; pins=none; set=c}

$\mathbf{Sol}^{n}$

- ขอบ #1 : $R=0, S=1$ $\Rightarrow$ Set $\Rightarrow Q = 1$
- ขอบ #2 : $R=1, S=0$ $\Rightarrow$ Reset $\Rightarrow Q = 0$
- ขอบ #3 : $R=0, S=1$ $\Rightarrow$ Set $\Rightarrow Q = 1$
- ขอบ #4 : $R=0, S=0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 1$
- ขอบ #5 : $R=1, S=0$ $\Rightarrow$ Reset $\Rightarrow Q = 0$

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

### Sol {ff=rs; trig=rise; pins=ps; set=a}

$\mathbf{Sol}^{n}$

- T0 ถึง T1 : $PS=0,\ CLR=0 \Rightarrow Q = 1,\ \overline{Q} = 1$ (แถว 1)
- T1 ถึง T2 : $PS=0,\ CLR=1 \Rightarrow Q = 1,\ \overline{Q} = 0$ (แถว 2)
- T2 ถึง T3 : $PS=1,\ CLR=0 \Rightarrow Q = 0,\ \overline{Q} = 1$ (แถว 3)
- T3 : $PS=1,\ CLR=1 \Rightarrow$ $Q$ คงเดิม ($Q = 0$)
- T4 (ขอบขาขึ้น) : $R=0, S=1$ $\Rightarrow$ Set $\Rightarrow Q = 1$
- T6 (ขอบขาขึ้น) : $R=0, S=0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 1$
- T8 (ขอบขาขึ้น) : $R=1, S=0$ $\Rightarrow$ Reset $\Rightarrow Q = 0$
- T10 (ขอบขาขึ้น) : $R=0, S=1$ $\Rightarrow$ Set $\Rightarrow Q = 1$
- T12 (ขอบขาขึ้น) : $R=1, S=0$ $\Rightarrow$ Reset $\Rightarrow Q = 0$

$\mathbf{Ans}\quad \text{รูปคลื่น } Q \text{ และ } \overline{Q} \text{ ตามรูป}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="814" height="464" viewBox="0 0 814 464" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="62" y1="26" x2="62" y2="458"/>
<line x1="118" y1="26" x2="118" y2="458"/>
<line x1="174" y1="26" x2="174" y2="458"/>
<line x1="230" y1="26" x2="230" y2="458"/>
<line x1="286" y1="26" x2="286" y2="458"/>
<line x1="342" y1="26" x2="342" y2="458"/>
<line x1="398" y1="26" x2="398" y2="458"/>
<line x1="454" y1="26" x2="454" y2="458"/>
<line x1="510" y1="26" x2="510" y2="458"/>
<line x1="566" y1="26" x2="566" y2="458"/>
<line x1="622" y1="26" x2="622" y2="458"/>
<line x1="678" y1="26" x2="678" y2="458"/>
<line x1="734" y1="26" x2="734" y2="458"/>
<line x1="790" y1="26" x2="790" y2="458"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,71.2 L174,71.2 L174,44 L790,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,131.2 L118,131.2 L118,104 L174,104 L174,131.2 L230,131.2 L230,104 L790,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<text x="90" y="183.6" text-anchor="middle" font-size="16">x</text>
<text x="146" y="183.6" text-anchor="middle" font-size="16">x</text>
<text x="202" y="183.6" text-anchor="middle" font-size="16">x</text>
<path d="M230,191.2 L286,191.2 L286,164 L342,164 L342,191.2 L398,191.2 L398,164 L454,164 L454,191.2 L510,191.2 L510,164 L566,164 L566,191.2 L622,191.2 L622,164 L678,164 L678,191.2 L734,191.2 L734,164 L790,164" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">R</text>
<text x="90" y="243.6" text-anchor="middle" font-size="16">x</text>
<text x="146" y="243.6" text-anchor="middle" font-size="16">x</text>
<text x="202" y="243.6" text-anchor="middle" font-size="16">x</text>
<path d="M230,251.2 L482,251.2 L482,224 L538,224 L538,251.2 L678,251.2 L678,224 L790,224" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">S</text>
<text x="90" y="303.6" text-anchor="middle" font-size="16">x</text>
<text x="146" y="303.6" text-anchor="middle" font-size="16">x</text>
<text x="202" y="303.6" text-anchor="middle" font-size="16">x</text>
<path d="M230,284 L328,284 L328,311.2 L538,311.2 L538,284 L678,284 L678,311.2 L790,311.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="363.6" text-anchor="end">Q</text>
<path d="M62,344 L174,344 L174,371.2 L286,371.2 L286,344 L510,344 L510,371.2 L622,371.2 L622,344 L734,344 L734,371.2 L790,371.2" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="423.6" text-anchor="end">Q</text>
<line x1="38" y1="408.6" x2="50" y2="408.6" stroke="currentColor" stroke-width="1.4"/>
<path d="M62,404 L118,404 L118,431.2 L174,431.2 L174,404 L286,404 L286,431.2 L510,431.2 L510,404 L622,404 L622,431.2 L734,431.2 L734,404 L790,404" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="62" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">0</tspan></text>
<text x="118" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">1</tspan></text>
<text x="174" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">2</tspan></text>
<text x="230" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">3</tspan></text>
<text x="286" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">4</tspan></text>
<text x="342" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">5</tspan></text>
<text x="398" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">6</tspan></text>
<text x="454" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">7</tspan></text>
<text x="510" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">8</tspan></text>
<text x="566" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">9</tspan></text>
<text x="622" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">10</tspan></text>
<text x="678" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">11</tspan></text>
<text x="734" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">12</tspan></text>
<text x="790" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">13</tspan></text>
</svg>
</div>

### Sol {ff=rs; trig=rise; pins=ps; set=b}

$\mathbf{Sol}^{n}$

- T0 ถึง T1 : $PS=0,\ CLR=0 \Rightarrow Q = 1,\ \overline{Q} = 1$ (แถว 1)
- T1 ถึง T2 : $PS=0,\ CLR=1 \Rightarrow Q = 1,\ \overline{Q} = 0$ (แถว 2)
- T2 ถึง T3 : $PS=1,\ CLR=0 \Rightarrow Q = 0,\ \overline{Q} = 1$ (แถว 3)
- T3 : $PS=1,\ CLR=1 \Rightarrow$ $Q$ คงเดิม ($Q = 0$)
- T4 (ขอบขาขึ้น) : $R=1, S=0$ $\Rightarrow$ Reset $\Rightarrow Q = 0$
- T6 (ขอบขาขึ้น) : $R=0, S=1$ $\Rightarrow$ Set $\Rightarrow Q = 1$
- T8 (ขอบขาขึ้น) : $R=0, S=0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 1$
- T10 (ขอบขาขึ้น) : $R=1, S=0$ $\Rightarrow$ Reset $\Rightarrow Q = 0$
- T12 (ขอบขาขึ้น) : $R=0, S=1$ $\Rightarrow$ Set $\Rightarrow Q = 1$

$\mathbf{Ans}\quad \text{รูปคลื่น } Q \text{ และ } \overline{Q} \text{ ตามรูป}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="814" height="464" viewBox="0 0 814 464" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="62" y1="26" x2="62" y2="458"/>
<line x1="118" y1="26" x2="118" y2="458"/>
<line x1="174" y1="26" x2="174" y2="458"/>
<line x1="230" y1="26" x2="230" y2="458"/>
<line x1="286" y1="26" x2="286" y2="458"/>
<line x1="342" y1="26" x2="342" y2="458"/>
<line x1="398" y1="26" x2="398" y2="458"/>
<line x1="454" y1="26" x2="454" y2="458"/>
<line x1="510" y1="26" x2="510" y2="458"/>
<line x1="566" y1="26" x2="566" y2="458"/>
<line x1="622" y1="26" x2="622" y2="458"/>
<line x1="678" y1="26" x2="678" y2="458"/>
<line x1="734" y1="26" x2="734" y2="458"/>
<line x1="790" y1="26" x2="790" y2="458"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,71.2 L174,71.2 L174,44 L790,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,131.2 L118,131.2 L118,104 L174,104 L174,131.2 L230,131.2 L230,104 L790,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<text x="90" y="183.6" text-anchor="middle" font-size="16">x</text>
<text x="146" y="183.6" text-anchor="middle" font-size="16">x</text>
<text x="202" y="183.6" text-anchor="middle" font-size="16">x</text>
<path d="M230,191.2 L286,191.2 L286,164 L342,164 L342,191.2 L398,191.2 L398,164 L454,164 L454,191.2 L510,191.2 L510,164 L566,164 L566,191.2 L622,191.2 L622,164 L678,164 L678,191.2 L734,191.2 L734,164 L790,164" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">R</text>
<text x="90" y="243.6" text-anchor="middle" font-size="16">x</text>
<text x="146" y="243.6" text-anchor="middle" font-size="16">x</text>
<text x="202" y="243.6" text-anchor="middle" font-size="16">x</text>
<path d="M230,224 L342,224 L342,251.2 L580,251.2 L580,224 L664,224 L664,251.2 L790,251.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">S</text>
<text x="90" y="303.6" text-anchor="middle" font-size="16">x</text>
<text x="146" y="303.6" text-anchor="middle" font-size="16">x</text>
<text x="202" y="303.6" text-anchor="middle" font-size="16">x</text>
<path d="M230,311.2 L342,311.2 L342,284 L426,284 L426,311.2 L664,311.2 L664,284 L790,284" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="363.6" text-anchor="end">Q</text>
<path d="M62,344 L174,344 L174,371.2 L398,371.2 L398,344 L622,344 L622,371.2 L734,371.2 L734,344 L790,344" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="423.6" text-anchor="end">Q</text>
<line x1="38" y1="408.6" x2="50" y2="408.6" stroke="currentColor" stroke-width="1.4"/>
<path d="M62,404 L118,404 L118,431.2 L174,431.2 L174,404 L398,404 L398,431.2 L622,431.2 L622,404 L734,404 L734,431.2 L790,431.2" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="62" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">0</tspan></text>
<text x="118" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">1</tspan></text>
<text x="174" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">2</tspan></text>
<text x="230" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">3</tspan></text>
<text x="286" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">4</tspan></text>
<text x="342" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">5</tspan></text>
<text x="398" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">6</tspan></text>
<text x="454" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">7</tspan></text>
<text x="510" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">8</tspan></text>
<text x="566" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">9</tspan></text>
<text x="622" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">10</tspan></text>
<text x="678" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">11</tspan></text>
<text x="734" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">12</tspan></text>
<text x="790" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">13</tspan></text>
</svg>
</div>

### Sol {ff=rs; trig=rise; pins=ps; set=c}

$\mathbf{Sol}^{n}$

- T0 ถึง T1 : $PS=0,\ CLR=0 \Rightarrow Q = 1,\ \overline{Q} = 1$ (แถว 1)
- T1 ถึง T2 : $PS=0,\ CLR=1 \Rightarrow Q = 1,\ \overline{Q} = 0$ (แถว 2)
- T2 ถึง T3 : $PS=1,\ CLR=0 \Rightarrow Q = 0,\ \overline{Q} = 1$ (แถว 3)
- T3 : $PS=1,\ CLR=1 \Rightarrow$ $Q$ คงเดิม ($Q = 0$)
- T4 (ขอบขาขึ้น) : $R=0, S=1$ $\Rightarrow$ Set $\Rightarrow Q = 1$
- T6 (ขอบขาขึ้น) : $R=1, S=0$ $\Rightarrow$ Reset $\Rightarrow Q = 0$
- T8 (ขอบขาขึ้น) : $R=0, S=1$ $\Rightarrow$ Set $\Rightarrow Q = 1$
- T10 (ขอบขาขึ้น) : $R=0, S=0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 1$
- T12 (ขอบขาขึ้น) : $R=1, S=0$ $\Rightarrow$ Reset $\Rightarrow Q = 0$

$\mathbf{Ans}\quad \text{รูปคลื่น } Q \text{ และ } \overline{Q} \text{ ตามรูป}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="814" height="464" viewBox="0 0 814 464" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="62" y1="26" x2="62" y2="458"/>
<line x1="118" y1="26" x2="118" y2="458"/>
<line x1="174" y1="26" x2="174" y2="458"/>
<line x1="230" y1="26" x2="230" y2="458"/>
<line x1="286" y1="26" x2="286" y2="458"/>
<line x1="342" y1="26" x2="342" y2="458"/>
<line x1="398" y1="26" x2="398" y2="458"/>
<line x1="454" y1="26" x2="454" y2="458"/>
<line x1="510" y1="26" x2="510" y2="458"/>
<line x1="566" y1="26" x2="566" y2="458"/>
<line x1="622" y1="26" x2="622" y2="458"/>
<line x1="678" y1="26" x2="678" y2="458"/>
<line x1="734" y1="26" x2="734" y2="458"/>
<line x1="790" y1="26" x2="790" y2="458"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,71.2 L174,71.2 L174,44 L790,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,131.2 L118,131.2 L118,104 L174,104 L174,131.2 L230,131.2 L230,104 L790,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<text x="90" y="183.6" text-anchor="middle" font-size="16">x</text>
<text x="146" y="183.6" text-anchor="middle" font-size="16">x</text>
<text x="202" y="183.6" text-anchor="middle" font-size="16">x</text>
<path d="M230,191.2 L286,191.2 L286,164 L342,164 L342,191.2 L398,191.2 L398,164 L454,164 L454,191.2 L510,191.2 L510,164 L566,164 L566,191.2 L622,191.2 L622,164 L678,164 L678,191.2 L734,191.2 L734,164 L790,164" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">R</text>
<text x="90" y="243.6" text-anchor="middle" font-size="16">x</text>
<text x="146" y="243.6" text-anchor="middle" font-size="16">x</text>
<text x="202" y="243.6" text-anchor="middle" font-size="16">x</text>
<path d="M230,251.2 L370,251.2 L370,224 L440,224 L440,251.2 L692,251.2 L692,224 L790,224" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">S</text>
<text x="90" y="303.6" text-anchor="middle" font-size="16">x</text>
<text x="146" y="303.6" text-anchor="middle" font-size="16">x</text>
<text x="202" y="303.6" text-anchor="middle" font-size="16">x</text>
<path d="M230,284 L370,284 L370,311.2 L440,311.2 L440,284 L524,284 L524,311.2 L790,311.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="363.6" text-anchor="end">Q</text>
<path d="M62,344 L174,344 L174,371.2 L286,371.2 L286,344 L398,344 L398,371.2 L510,371.2 L510,344 L734,344 L734,371.2 L790,371.2" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="423.6" text-anchor="end">Q</text>
<line x1="38" y1="408.6" x2="50" y2="408.6" stroke="currentColor" stroke-width="1.4"/>
<path d="M62,404 L118,404 L118,431.2 L174,431.2 L174,404 L286,404 L286,431.2 L398,431.2 L398,404 L510,404 L510,431.2 L734,431.2 L734,404 L790,404" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="62" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">0</tspan></text>
<text x="118" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">1</tspan></text>
<text x="174" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">2</tspan></text>
<text x="230" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">3</tspan></text>
<text x="286" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">4</tspan></text>
<text x="342" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">5</tspan></text>
<text x="398" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">6</tspan></text>
<text x="454" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">7</tspan></text>
<text x="510" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">8</tspan></text>
<text x="566" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">9</tspan></text>
<text x="622" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">10</tspan></text>
<text x="678" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">11</tspan></text>
<text x="734" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">12</tspan></text>
<text x="790" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">13</tspan></text>
</svg>
</div>

### Sol {ff=rs; trig=fall; pins=none; set=a}

$\mathbf{Sol}^{n}$

- ขอบ #1 : $R=0, S=1$ $\Rightarrow$ Set $\Rightarrow Q = 1$
- ขอบ #2 : $R=0, S=0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 1$
- ขอบ #3 : $R=1, S=0$ $\Rightarrow$ Reset $\Rightarrow Q = 0$
- ขอบ #4 : $R=0, S=1$ $\Rightarrow$ Set $\Rightarrow Q = 1$
- ขอบ #5 : $R=1, S=0$ $\Rightarrow$ Reset $\Rightarrow Q = 0$

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

### Sol {ff=rs; trig=fall; pins=none; set=b}

$\mathbf{Sol}^{n}$

- ขอบ #1 : $R=1, S=0$ $\Rightarrow$ Reset $\Rightarrow Q = 0$
- ขอบ #2 : $R=0, S=1$ $\Rightarrow$ Set $\Rightarrow Q = 1$
- ขอบ #3 : $R=0, S=0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 1$
- ขอบ #4 : $R=1, S=0$ $\Rightarrow$ Reset $\Rightarrow Q = 0$
- ขอบ #5 : $R=0, S=1$ $\Rightarrow$ Set $\Rightarrow Q = 1$

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

### Sol {ff=rs; trig=fall; pins=none; set=c}

$\mathbf{Sol}^{n}$

- ขอบ #1 : $R=0, S=1$ $\Rightarrow$ Set $\Rightarrow Q = 1$
- ขอบ #2 : $R=1, S=0$ $\Rightarrow$ Reset $\Rightarrow Q = 0$
- ขอบ #3 : $R=0, S=1$ $\Rightarrow$ Set $\Rightarrow Q = 1$
- ขอบ #4 : $R=0, S=0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 1$
- ขอบ #5 : $R=1, S=0$ $\Rightarrow$ Reset $\Rightarrow Q = 0$

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

### Sol {ff=rs; trig=fall; pins=ps; set=a}

$\mathbf{Sol}^{n}$

- T0 ถึง T1 : $PS=0,\ CLR=0 \Rightarrow Q = 1,\ \overline{Q} = 1$ (แถว 1)
- T1 ถึง T2 : $PS=0,\ CLR=1 \Rightarrow Q = 1,\ \overline{Q} = 0$ (แถว 2)
- T2 ถึง T3 : $PS=1,\ CLR=0 \Rightarrow Q = 0,\ \overline{Q} = 1$ (แถว 3)
- T3 : $PS=1,\ CLR=1 \Rightarrow$ $Q$ คงเดิม ($Q = 0$)
- T4 (ขอบขาลง) : $R=0, S=1$ $\Rightarrow$ Set $\Rightarrow Q = 1$
- T6 (ขอบขาลง) : $R=0, S=0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 1$
- T8 (ขอบขาลง) : $R=1, S=0$ $\Rightarrow$ Reset $\Rightarrow Q = 0$
- T10 (ขอบขาลง) : $R=0, S=1$ $\Rightarrow$ Set $\Rightarrow Q = 1$
- T12 (ขอบขาลง) : $R=1, S=0$ $\Rightarrow$ Reset $\Rightarrow Q = 0$

$\mathbf{Ans}\quad \text{รูปคลื่น } Q \text{ และ } \overline{Q} \text{ ตามรูป}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="814" height="464" viewBox="0 0 814 464" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="62" y1="26" x2="62" y2="458"/>
<line x1="118" y1="26" x2="118" y2="458"/>
<line x1="174" y1="26" x2="174" y2="458"/>
<line x1="230" y1="26" x2="230" y2="458"/>
<line x1="286" y1="26" x2="286" y2="458"/>
<line x1="342" y1="26" x2="342" y2="458"/>
<line x1="398" y1="26" x2="398" y2="458"/>
<line x1="454" y1="26" x2="454" y2="458"/>
<line x1="510" y1="26" x2="510" y2="458"/>
<line x1="566" y1="26" x2="566" y2="458"/>
<line x1="622" y1="26" x2="622" y2="458"/>
<line x1="678" y1="26" x2="678" y2="458"/>
<line x1="734" y1="26" x2="734" y2="458"/>
<line x1="790" y1="26" x2="790" y2="458"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,71.2 L174,71.2 L174,44 L790,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,131.2 L118,131.2 L118,104 L174,104 L174,131.2 L230,131.2 L230,104 L790,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<text x="90" y="183.6" text-anchor="middle" font-size="16">x</text>
<text x="146" y="183.6" text-anchor="middle" font-size="16">x</text>
<text x="202" y="183.6" text-anchor="middle" font-size="16">x</text>
<path d="M230,164 L286,164 L286,191.2 L342,191.2 L342,164 L398,164 L398,191.2 L454,191.2 L454,164 L510,164 L510,191.2 L566,191.2 L566,164 L622,164 L622,191.2 L678,191.2 L678,164 L734,164 L734,191.2 L790,191.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">R</text>
<text x="90" y="243.6" text-anchor="middle" font-size="16">x</text>
<text x="146" y="243.6" text-anchor="middle" font-size="16">x</text>
<text x="202" y="243.6" text-anchor="middle" font-size="16">x</text>
<path d="M230,251.2 L482,251.2 L482,224 L538,224 L538,251.2 L678,251.2 L678,224 L790,224" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">S</text>
<text x="90" y="303.6" text-anchor="middle" font-size="16">x</text>
<text x="146" y="303.6" text-anchor="middle" font-size="16">x</text>
<text x="202" y="303.6" text-anchor="middle" font-size="16">x</text>
<path d="M230,284 L328,284 L328,311.2 L538,311.2 L538,284 L678,284 L678,311.2 L790,311.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="363.6" text-anchor="end">Q</text>
<path d="M62,344 L174,344 L174,371.2 L286,371.2 L286,344 L510,344 L510,371.2 L622,371.2 L622,344 L734,344 L734,371.2 L790,371.2" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="423.6" text-anchor="end">Q</text>
<line x1="38" y1="408.6" x2="50" y2="408.6" stroke="currentColor" stroke-width="1.4"/>
<path d="M62,404 L118,404 L118,431.2 L174,431.2 L174,404 L286,404 L286,431.2 L510,431.2 L510,404 L622,404 L622,431.2 L734,431.2 L734,404 L790,404" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="62" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">0</tspan></text>
<text x="118" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">1</tspan></text>
<text x="174" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">2</tspan></text>
<text x="230" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">3</tspan></text>
<text x="286" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">4</tspan></text>
<text x="342" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">5</tspan></text>
<text x="398" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">6</tspan></text>
<text x="454" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">7</tspan></text>
<text x="510" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">8</tspan></text>
<text x="566" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">9</tspan></text>
<text x="622" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">10</tspan></text>
<text x="678" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">11</tspan></text>
<text x="734" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">12</tspan></text>
<text x="790" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">13</tspan></text>
</svg>
</div>

### Sol {ff=rs; trig=fall; pins=ps; set=b}

$\mathbf{Sol}^{n}$

- T0 ถึง T1 : $PS=0,\ CLR=0 \Rightarrow Q = 1,\ \overline{Q} = 1$ (แถว 1)
- T1 ถึง T2 : $PS=0,\ CLR=1 \Rightarrow Q = 1,\ \overline{Q} = 0$ (แถว 2)
- T2 ถึง T3 : $PS=1,\ CLR=0 \Rightarrow Q = 0,\ \overline{Q} = 1$ (แถว 3)
- T3 : $PS=1,\ CLR=1 \Rightarrow$ $Q$ คงเดิม ($Q = 0$)
- T4 (ขอบขาลง) : $R=1, S=0$ $\Rightarrow$ Reset $\Rightarrow Q = 0$
- T6 (ขอบขาลง) : $R=0, S=1$ $\Rightarrow$ Set $\Rightarrow Q = 1$
- T8 (ขอบขาลง) : $R=0, S=0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 1$
- T10 (ขอบขาลง) : $R=1, S=0$ $\Rightarrow$ Reset $\Rightarrow Q = 0$
- T12 (ขอบขาลง) : $R=0, S=1$ $\Rightarrow$ Set $\Rightarrow Q = 1$

$\mathbf{Ans}\quad \text{รูปคลื่น } Q \text{ และ } \overline{Q} \text{ ตามรูป}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="814" height="464" viewBox="0 0 814 464" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="62" y1="26" x2="62" y2="458"/>
<line x1="118" y1="26" x2="118" y2="458"/>
<line x1="174" y1="26" x2="174" y2="458"/>
<line x1="230" y1="26" x2="230" y2="458"/>
<line x1="286" y1="26" x2="286" y2="458"/>
<line x1="342" y1="26" x2="342" y2="458"/>
<line x1="398" y1="26" x2="398" y2="458"/>
<line x1="454" y1="26" x2="454" y2="458"/>
<line x1="510" y1="26" x2="510" y2="458"/>
<line x1="566" y1="26" x2="566" y2="458"/>
<line x1="622" y1="26" x2="622" y2="458"/>
<line x1="678" y1="26" x2="678" y2="458"/>
<line x1="734" y1="26" x2="734" y2="458"/>
<line x1="790" y1="26" x2="790" y2="458"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,71.2 L174,71.2 L174,44 L790,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,131.2 L118,131.2 L118,104 L174,104 L174,131.2 L230,131.2 L230,104 L790,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<text x="90" y="183.6" text-anchor="middle" font-size="16">x</text>
<text x="146" y="183.6" text-anchor="middle" font-size="16">x</text>
<text x="202" y="183.6" text-anchor="middle" font-size="16">x</text>
<path d="M230,164 L286,164 L286,191.2 L342,191.2 L342,164 L398,164 L398,191.2 L454,191.2 L454,164 L510,164 L510,191.2 L566,191.2 L566,164 L622,164 L622,191.2 L678,191.2 L678,164 L734,164 L734,191.2 L790,191.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">R</text>
<text x="90" y="243.6" text-anchor="middle" font-size="16">x</text>
<text x="146" y="243.6" text-anchor="middle" font-size="16">x</text>
<text x="202" y="243.6" text-anchor="middle" font-size="16">x</text>
<path d="M230,224 L342,224 L342,251.2 L580,251.2 L580,224 L664,224 L664,251.2 L790,251.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">S</text>
<text x="90" y="303.6" text-anchor="middle" font-size="16">x</text>
<text x="146" y="303.6" text-anchor="middle" font-size="16">x</text>
<text x="202" y="303.6" text-anchor="middle" font-size="16">x</text>
<path d="M230,311.2 L342,311.2 L342,284 L426,284 L426,311.2 L664,311.2 L664,284 L790,284" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="363.6" text-anchor="end">Q</text>
<path d="M62,344 L174,344 L174,371.2 L398,371.2 L398,344 L622,344 L622,371.2 L734,371.2 L734,344 L790,344" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="423.6" text-anchor="end">Q</text>
<line x1="38" y1="408.6" x2="50" y2="408.6" stroke="currentColor" stroke-width="1.4"/>
<path d="M62,404 L118,404 L118,431.2 L174,431.2 L174,404 L398,404 L398,431.2 L622,431.2 L622,404 L734,404 L734,431.2 L790,431.2" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="62" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">0</tspan></text>
<text x="118" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">1</tspan></text>
<text x="174" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">2</tspan></text>
<text x="230" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">3</tspan></text>
<text x="286" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">4</tspan></text>
<text x="342" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">5</tspan></text>
<text x="398" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">6</tspan></text>
<text x="454" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">7</tspan></text>
<text x="510" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">8</tspan></text>
<text x="566" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">9</tspan></text>
<text x="622" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">10</tspan></text>
<text x="678" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">11</tspan></text>
<text x="734" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">12</tspan></text>
<text x="790" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">13</tspan></text>
</svg>
</div>

### Sol {ff=rs; trig=fall; pins=ps; set=c}

$\mathbf{Sol}^{n}$

- T0 ถึง T1 : $PS=0,\ CLR=0 \Rightarrow Q = 1,\ \overline{Q} = 1$ (แถว 1)
- T1 ถึง T2 : $PS=0,\ CLR=1 \Rightarrow Q = 1,\ \overline{Q} = 0$ (แถว 2)
- T2 ถึง T3 : $PS=1,\ CLR=0 \Rightarrow Q = 0,\ \overline{Q} = 1$ (แถว 3)
- T3 : $PS=1,\ CLR=1 \Rightarrow$ $Q$ คงเดิม ($Q = 0$)
- T4 (ขอบขาลง) : $R=0, S=1$ $\Rightarrow$ Set $\Rightarrow Q = 1$
- T6 (ขอบขาลง) : $R=1, S=0$ $\Rightarrow$ Reset $\Rightarrow Q = 0$
- T8 (ขอบขาลง) : $R=0, S=1$ $\Rightarrow$ Set $\Rightarrow Q = 1$
- T10 (ขอบขาลง) : $R=0, S=0$ $\Rightarrow$ คงเดิม $\Rightarrow Q = 1$
- T12 (ขอบขาลง) : $R=1, S=0$ $\Rightarrow$ Reset $\Rightarrow Q = 0$

$\mathbf{Ans}\quad \text{รูปคลื่น } Q \text{ และ } \overline{Q} \text{ ตามรูป}$

<div align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="814" height="464" viewBox="0 0 814 464" font-family="Times New Roman, serif" font-size="18" fill="currentColor">
<g stroke="currentColor" stroke-width="1.2" fill="none" stroke-dasharray="4 4" stroke-opacity="0.45">
<line x1="62" y1="26" x2="62" y2="458"/>
<line x1="118" y1="26" x2="118" y2="458"/>
<line x1="174" y1="26" x2="174" y2="458"/>
<line x1="230" y1="26" x2="230" y2="458"/>
<line x1="286" y1="26" x2="286" y2="458"/>
<line x1="342" y1="26" x2="342" y2="458"/>
<line x1="398" y1="26" x2="398" y2="458"/>
<line x1="454" y1="26" x2="454" y2="458"/>
<line x1="510" y1="26" x2="510" y2="458"/>
<line x1="566" y1="26" x2="566" y2="458"/>
<line x1="622" y1="26" x2="622" y2="458"/>
<line x1="678" y1="26" x2="678" y2="458"/>
<line x1="734" y1="26" x2="734" y2="458"/>
<line x1="790" y1="26" x2="790" y2="458"/>
</g>
<text x="50" y="63.6" text-anchor="end">PS</text>
<path d="M62,71.2 L174,71.2 L174,44 L790,44" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="123.6" text-anchor="end">CLR</text>
<path d="M62,131.2 L118,131.2 L118,104 L174,104 L174,131.2 L230,131.2 L230,104 L790,104" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="183.6" text-anchor="end">CLK</text>
<text x="90" y="183.6" text-anchor="middle" font-size="16">x</text>
<text x="146" y="183.6" text-anchor="middle" font-size="16">x</text>
<text x="202" y="183.6" text-anchor="middle" font-size="16">x</text>
<path d="M230,164 L286,164 L286,191.2 L342,191.2 L342,164 L398,164 L398,191.2 L454,191.2 L454,164 L510,164 L510,191.2 L566,191.2 L566,164 L622,164 L622,191.2 L678,191.2 L678,164 L734,164 L734,191.2 L790,191.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="243.6" text-anchor="end">R</text>
<text x="90" y="243.6" text-anchor="middle" font-size="16">x</text>
<text x="146" y="243.6" text-anchor="middle" font-size="16">x</text>
<text x="202" y="243.6" text-anchor="middle" font-size="16">x</text>
<path d="M230,251.2 L370,251.2 L370,224 L440,224 L440,251.2 L692,251.2 L692,224 L790,224" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="303.6" text-anchor="end">S</text>
<text x="90" y="303.6" text-anchor="middle" font-size="16">x</text>
<text x="146" y="303.6" text-anchor="middle" font-size="16">x</text>
<text x="202" y="303.6" text-anchor="middle" font-size="16">x</text>
<path d="M230,284 L370,284 L370,311.2 L440,311.2 L440,284 L524,284 L524,311.2 L790,311.2" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="363.6" text-anchor="end">Q</text>
<path d="M62,344 L174,344 L174,371.2 L286,371.2 L286,344 L398,344 L398,371.2 L510,371.2 L510,344 L734,344 L734,371.2 L790,371.2" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="50" y="423.6" text-anchor="end">Q</text>
<line x1="38" y1="408.6" x2="50" y2="408.6" stroke="currentColor" stroke-width="1.4"/>
<path d="M62,404 L118,404 L118,431.2 L174,431.2 L174,404 L286,404 L286,431.2 L398,431.2 L398,404 L510,404 L510,431.2 L734,431.2 L734,404 L790,404" stroke="#e8743b" stroke-width="2.4" fill="none" stroke-linejoin="miter"/>
<text x="62" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">0</tspan></text>
<text x="118" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">1</tspan></text>
<text x="174" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">2</tspan></text>
<text x="230" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">3</tspan></text>
<text x="286" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">4</tspan></text>
<text x="342" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">5</tspan></text>
<text x="398" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">6</tspan></text>
<text x="454" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">7</tspan></text>
<text x="510" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">8</tspan></text>
<text x="566" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">9</tspan></text>
<text x="622" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">10</tspan></text>
<text x="678" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">11</tspan></text>
<text x="734" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">12</tspan></text>
<text x="790" y="18" text-anchor="middle" font-size="14">T<tspan dy="4" font-size="12">13</tspan></text>
</svg>
</div>
