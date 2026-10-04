---
name: verify-math
description: Verify digital logic and number-system content by program before writing it into the Markdown content - boolean simplifications, truth tables, K-map loop readings, Sigma-m and Pi-M conversions, base conversions, binary arithmetic, complements, Gray/BCD/ASCII codes, gate circuits, and KaTeX/SVG validity. Use before adding or changing any answer, example, table value or figure.
---

# verify-math

Nothing is written into `content/` unless a program has confirmed it. Use Python (standard library) for logic checks and Node + KaTeX for formula and SVG checks.

## 1. Boolean expressions and simplifications

Compare the original and the result on every row of the truth table.

```python
from itertools import product
N = lambda x: 1 - x
def same(f, g, n):
    return all(f(*v) == g(*v) for v in product([0, 1], repeat=n))

# example: Y = B'A + C'A + CB  ==  A + BC
f = lambda A, B, C: (N(B) & A) | (N(C) & A) | (C & B)
g = lambda A, B, C: A | (B & C)
assert same(f, g, 3)
```

Variable order is MSB first: `A B C` means `A*4 + B*2 + C`.

## 2. Minterm and maxterm sets (Sigma-m, Pi-M)

```python
def minterms(f, n):
    return {i for i, v in enumerate(product([0, 1], repeat=n)) if f(*v)}
ones = minterms(f, 3)
zeros = set(range(2 ** 3)) - ones          # Pi-M indices are the complement
```

Sigma-m(S) = Pi-M(all indices not in S). Check that the sets partition `0..2^n-1`.

## 3. K-map readings

- Cell order for 3 variables, columns `AB = 00,01,11,10`, rows `C = 0,1`: row C=0 holds cells 0,2,6,4; row C=1 holds 1,3,7,5.
- 4 variables, columns `AB = 00,01,11,10`, rows `CD = 00,01,11,10`: 0,4,12,8 / 1,5,13,9 / 3,7,15,11 / 2,6,14,10.
- A loop of `2^k` cells reads as a product term: variables constant across the loop stay, variables that change are dropped.
- Verification: rebuild the function from the loop terms and compare with the original over all rows (section 1). Also confirm every `1` is covered and no `0` is covered. Don't-care cells may be covered or not.
- Loops wrap around the map edges and the four corners are adjacent.

## 4. Number systems and codes

```python
int("1011", 2); format(41, "b"); format(703, "o"); format(2748, "X")
# fraction digits: repeat f *= base; digit = int(f); f -= digit
# Gray: g = n ^ (n >> 1)      BCD: digit by digit, 4 bits
# 1's complement: flip all bits;  2's complement: 1's + 1 (fixed width)
# ASCII: format(ord(c), "07b")
```

State the rounding or truncation rule when a fraction does not terminate, and keep the same rule as the surrounding examples.

## 5. Subtraction by complements

Pad the subtrahend to the minuend's width. 1's complement: add; if there is a carry, add it back at the rightmost bit (result positive); otherwise take the 1's complement of the sum (result negative). 2's complement: add; carry means drop it (positive); no carry means take the 2's complement of the sum (negative). Confirm against ordinary subtraction.

## 6. Circuits

- Derive the expression from the gate netlist, then compare its truth table with the intended function (section 1).
- NAND-only or NOR-only rewrites: evaluate the rewritten netlist on all rows.
- After drawing SVG, render it to an image and look at it: wires meet gates, junction dots only where wires connect, gate shapes correct, no overlaps.

## 7. KaTeX and SVG

```js
// node: every formula must compile in strict mode
katex.renderToString(tex, { throwOnError: true, strict: "error", displayMode });
```

- Check that no `<svg>` block contains a blank line:
  `python -c "import re,sys;t=open(sys.argv[1],encoding='utf8').read();print(sum('\n\n' in m for m in re.findall(r'<svg.*?</svg>',t,re.S)))" file.md` must print `0`.
- Count `array` column specs against cells per row; a mismatch prints a KaTeX warning.

## 8. Report

When done, state what was verified and how (for example "truth table, all 8 rows" or "integer recomputation"). Report any mismatch instead of adjusting the content to hide it.
