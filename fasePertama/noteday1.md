# Catatan Hari Pertama — JavaScript Dasar

## 1. Variabel (var, let, const)
- `var`
  - di-hoist dan langsung bernilai `undefined`
  - function scope
  - hindari untuk kode modern

- `let`
  - di-hoist tetapi tidak bisa diakses sebelum deklarasi (TDZ)
  - block scope

- `const`
  - sama seperti let tetapi nilainya tidak boleh di-reassign

## 2. Tipe Data
### Primitif:
- number
- string
- boolean
- null
- undefined
- symbol
- bigint

### Non-primitif (reference type):
- object
- array
- function
- date, dll.

## 3. Operator Aritmatika dan Template Literal
Contoh:
```js
let angka1 = 10;
let angka2 = 2;

console.log(`${angka1} + ${angka2} = ${angka1 + angka2}`);