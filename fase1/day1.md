  **Hari Pertama — JavaScript Dasar: Variabel, Tipe Data, & Operator**  
Target: paham cara mendeklarasikan variabel, mengenali tipe data, dan memakai operator dasar dengan benar. Total waktu ± **90–120 menit**.

***

## 1) Mental Model Singkat (10 menit)

*   **JavaScript dieksekusi baris demi baris** (single-threaded).
*   Gunakan **`let`/`const`** (bukan `var`):
    *   `const` → nilai tidak di-*reassign* (aman sebagai default)
    *   `let` → nilai bisa berubah
*   **Tipe data primitif:** `number`, `string`, `boolean`, `null`, `undefined`, `bigint`, `symbol`
*   **Non-primitif:** `object` (termasuk array, function)
*   **Strict equality `===`** lebih aman daripada `==` (hindari type coercion yang mengejutkan).

***

## 2) Materi Inti (30–40 menit)

### a) Variabel & Scope

```js
'use strict';

// Pilih const sebagai default; gunakan let jika akan diubah.
const appName = 'Latihan JS';
let counter = 0;

// Hindari var (hoisting + function scope bisa bikin bug).
```

### b) Tipe Data & typeof

```js
const n = 42;                 // number
const pi = 3.14;              // number (JS hanya punya floating-point)
const s = 'Halo';             // string
const ok = true;              // boolean
const nothing = null;         // object (quirk JS)
let notDefined;               // undefined
const big = 9007199254740993n;// bigint
const sym = Symbol('id');     // symbol

console.log(typeof n, typeof s, typeof ok); // "number" "string" "boolean"
console.log(typeof nothing); // "object" (sejarah JS)
console.log(typeof notDefined); // "undefined"
```

### c) Operator Dasar

*   **Aritmatika:** `+ - * / % **`
*   **Perbandingan:** `> < >= <= === !==`
*   **Logika:** `&& || !`
*   **Penggabungan string:** `+` atau template literal `` `Hello, ${name}` ``

```js
const a = 10, b = 3;
console.log(a + b, a - b, a * b, a / b, a % b, a ** b); // 13 7 30 3.333... 1 1000

console.log(2 == '2');  // true (coercion) — HINDARI
console.log(2 === '2'); // false (tipe dibandingkan) — AMANKAN
console.log(!false && (3 > 2)); // true
```

### d) Truthy/Falsy & Nullish Coalescing

```js
// Falsy: 0, '', null, undefined, NaN, false
const username = '';
const display = username || 'Guest';      // 'Guest' ('' dianggap falsy)

const age = 0;
const displayAge = age ?? 'unknown';      // 0 (nullish: hanya null/undefined)
console.log(display, displayAge);
```

### e) String & Number Tips

```js
const name = 'Hafid';
console.log(`Hello, ${name.toUpperCase()}!`);
console.log(Number('42'), parseInt('42px', 10), parseFloat('3.14')); // 42 42 3.14
console.log(Number.isNaN(NaN)); // true
```

***

## 3) Latihan Terarah (25–35 menit)

> Kerjakan di **Node REPL** (`node` di terminal) atau file `day1.js` lalu `node day1.js`.

### Latihan 1 — Deklarasi & `typeof`

Buat variabel untuk setiap tipe primitif (isi nilai masuk akal), lalu log:

*   Nilainya
*   Hasil `typeof`
*   1 kalimat singkat tentang kegunaan tipe itu

### Latihan 2 — Konversi & Operator

1.  Konversi string `'15'` dan `'3'` menjadi number, hitung: tambah, kurang, kali, bagi, pangkat.
2.  Gabungkan nama depan & belakang dengan **template literal**.
3.  Buat variabel `isAdult` yang `true` jika `age >= 18`.

### Latihan 3 — Truthy/Falsy & Nullish

1.  Buat `input = ''`, `fallback = 'default'`. Tampilkan:
    *   `input || fallback`
    *   `input ?? fallback`
2.  Ubah `input` menjadi `0`, `null`, `undefined`, dan amati perbedaan hasil.

### Latihan 4 — Mini–Quiz Perbandingan

Tebak (tanpa dijalankan dulu), lalu cek:

```js
console.log(0 == false);   // ?
console.log(0 === false);  // ?
console.log('' == 0);      // ?
console.log('' === 0);     // ?
console.log(null == undefined);  // ?
console.log(null === undefined); // ?
```

> Tulis alasan singkatnya (coercion vs strict compare).

***

## 4) Mini‑Project Hari 1 (20–30 menit)

**Judul:** *CLI Kalkulator Sederhana* (versi dasar)

**Fitur:**

*   Input 2 bilangan (sementara hardcode dulu sebagai variabel).
*   Operasi: `+ - * / % **`
*   Validasi: jika pembagi 0 saat `/`, tampilkan pesan error.
*   Format output yang rapi.

**Contoh Struktur:**

```js
'use strict';

const x = 12;
const y = 4;

console.log('=== Kalkulator Sederhana ===');
console.log(`x = ${x}, y = ${y}`);

console.log('Tambah   :', x + y);
console.log('Kurang   :', x - y);
console.log('Kali     :', x * y);
console.log('Bagi     :', y !== 0 ? (x / y) : 'Error: bagi 0');
console.log('Modulus  :', x % y);
console.log('Pangkat  :', x ** y);
```

**Level Up (opsional):**

*   Ambil argumen dari command line: `node calc.js 12 4 +`
    *   Hint: `process.argv`
*   Gunakan `switch` untuk memilih operasi.

***

## 5) Checklist Lulus Hari 1 ✅

*   [ ] Tahu kapan pakai `const` vs `let`
*   [ ] Kenal semua tipe primitif + `typeof` perilakunya
*   [ ] Bisa menjelaskan `==` vs `===` + contoh jebakan umum
*   [ ] Paham bedanya `||` vs `??` pada nilai `''`, `0`, `null`, `undefined`
*   [ ] Selesai mini‑project kalkulator versi dasar

***

## 6) Kunci/Hint (Intisari Singkat)

> Gunakan ini setelah kamu mencoba sendiri.

*   `0 == false` → **true** (coercion), `0 === false` → **false** (beda tipe)
*   `'' == 0` → **true** (coercion), `'' === 0` → **false**
*   `null == undefined` → **true** (aturan khusus), `null === undefined` → **false**
*   `||` menganggap semua falsy sebagai “kosong”; `??` hanya `null/undefined`.
*   Pakai `const` default; ganti ke `let` ketika perlu reassign.

***