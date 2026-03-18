**roadmap belajar JavaScript dari nol sampai mahir** yang *terstruktur, sistematis, dan berorientasi industri*

> **Prinsip belajar:** *Build-in-public* (bangun proyek dari awal), *practice-first* (kode setiap hari), *project-driven* (tiap tahap ada mini–project), dan *review berkala* (checkpoint & evaluasi).

***

## Ringkasan Tahapan & Durasi

*   **Fase 0 — Persiapan (1–2 hari)**
*   **Fase 1 — Dasar JavaScript: Sintaks & Mental Model (2–3 minggu)**
*   **Fase 2 — JavaScript Lanjut: Asinkron & Modular (2–3 minggu)**
*   **Fase 3 — DOM, Browser API, dan TypeScript dasar (2–3 minggu)**
*   **Fase 4 — Node.js & Backend dasar (3–4 minggu)**
*   **Fase 5 — Frontend Modern: React + Next.js (4–6 minggu)**
*   **Fase 6 — Produksi & Best Practices (2–3 minggu)**
*   **Fase 7 — Capstone Full‑Stack (2–4 minggu)**

> Total realistis: **4–5 bulan** sambil kuliah, atau **8–12 minggu** jika intensif harian.  
> Jalur cepat: Fase 1–3 untuk pondasi JS, lalu paralel React (Fase 5) sambil Node (Fase 4).

***

## Fase 0 — Persiapan (1–2 hari)

**Tujuan:** Siap coding tanpa hambatan.

*   Instal: **Node.js LTS**, **VS Code**, ekstensi: ESLint, Prettier, JavaScript (ES6) snippets.
*   Dasar terminal & Git: `cd`, `ls`, `mkdir`, `git init`, `git add/commit`, `git branch`, `git push`.

**Latihan Cepat**

```bash
node -v
npm init -y
node
> 2 + 3
```

***

## Fase 1 — Dasar JavaScript: Sintaks & Mental Model (2–3 minggu)

**Fokus konsep**

1.  **Variabel & Tipe Data:** `let`, `const`, `number`, `string`, `boolean`, `null`, `undefined`, `symbol`, `bigint`
2.  **Operator & Ekspresi:** aritmatika, perbandingan, logika, operator ternary
3.  **Kontrol Alur:** `if/else`, `switch`, `for`, `while`, `for...of`, `for...in`
4.  **Fungsi:** deklarasi vs ekspresi, **arrow function**, parameter default, rest/spread
5.  **Array & Object dasar:** akses, mutasi, destrukturisasi, shorthand property
6.  **Scope & Hoisting:** function scope, block scope, temporal dead zone
7.  **Strict Mode & Error dasar:** `'use strict'`, `try/catch`

**Contoh singkat**

```js
'use strict';
const users = [{id:1,name:'A'},{id:2,name:'B'}];
const names = users.map(u => u.name.toUpperCase());
for (const name of names) console.log(name);
```

**Mini–Project:**

*   **CLI Kalkulator** (operasi +, −, ×, ÷).
*   **Data Transform**: dari array objek → output ringkas (pakai `map/filter/reduce`).

**Checklist Lulus Fase 1**

*   Bisa jelaskan **perbedaan `var` vs `let`/`const`** dan **hoisting**.
*   Nyaman pakai **destructuring** & **spread** di array/object.
*   Paham kapan pakai `==` vs `===` (spoiler: **hindari `==`**).

***

## Fase 2 — JavaScript Lanjut: Asinkron & Modular (2–3 minggu)

**Fokus konsep**

1.  **Prototypal Inheritance & `this`:** `call/apply/bind`, class syntactic sugar
2.  **Closures & Functional Patterns:** higher‑order functions, currying, memoization
3.  **Modules:** ES Modules (`import/export`) vs CommonJS (`require/module.exports`)
4.  **Asinkron:** **Event loop**, **callback → Promise → async/await**, **error handling**
5.  **Collections & Utility:** `Set`, `Map`, spread/rest lanjutan

**Contoh async/await**

```js
const fetchJson = async (url) => {
  const res = await fetch(url);
  if (!res.ok) throw new Error('Network error');
  return res.json();
};
```

**Mini–Project:**

*   **HTTP Client kecil** (pakai public API bebas CORS di browser / Node dengan `fetch`).
*   **Retry Utility** (mencoba ulang request yang gagal dengan backoff).

**Checklist Lulus Fase 2**

*   Bisa jelaskan **event loop** (queue, microtask vs macrotask).
*   Refactor callback hell → **Promise** / **async‑await**.

***

## Fase 3 — DOM, Browser API, & TypeScript Dasar (2–3 minggu)

**Fokus konsep**

1.  **DOM Manipulation:** `querySelector`, event, bubbling/capturing, delegasi event
2.  **Browser API:** `localStorage/sessionStorage`, `fetch`, `AbortController`, `URLSearchParams`
3.  **Form Handling & Validasi**
4.  **Bundler/Tooling dasar:** NPM scripts, vite/webpack singkat
5.  **TypeScript dasar untuk JS dev:** tipe primitif, objek, fungsi, generics ringan

**Mini–Project:**

*   **Todo App Vanilla JS** dengan filter & persist ke `localStorage`.
*   Tambahkan **debounce** & **throttle** pada event input/scroll.

**Checklist Lulus Fase 3**

*   Tidak bingung **event delegation**.
*   Bisa jelaskan beda **state in-memory** vs **persisted** (storage).

***

## Fase 4 — Node.js & Backend Dasar (3–4 minggu)

**Fokus konsep**

1.  **Runtime Node.js:** modul, `fs`, `path`, `process`, environment variables
2.  **HTTP Server:** Express minimal, middleware, routing, error handling
3.  **REST API:** CRUD, status code, validation, pagination, filtering, **CORS**
4.  **Database:** dasar SQL/NoSQL (pilihan populer: **PostgreSQL**/**MongoDB**), ORM/ODM (Prisma/Mongoose)
5.  **Auth:** JWT/bcrypt, session vs token, refresh token
6.  **Testing:** Jest/supertest untuk endpoint, **Postman/Insomnia** untuk manual test

**Mini–Project:**

*   **REST API Buku/Tasks**: endpoints terstandar, validasi, test → deploy (Railway/Render).
*   **Logger** & **Global Error Handler**.

**Checklist Lulus Fase 4**

*   Bisa jelaskan **stateless auth** (JWT) dan kapan perlu **refresh token**.
*   Paham **migrations** & **.env** hygiene.

***

## Fase 5 — Frontend Modern: React + Next.js (4–6 minggu)

**Fokus konsep React**

1.  **Fundamental:** JSX, props, state, lifting state, controlled vs uncontrolled
2.  **Hooks:** `useState`, `useEffect`, `useMemo`, `useCallback`, `useRef`, custom hooks
3.  **State Management:** context vs libraries (Zustand/Redux Toolkit)
4.  **Data Fetching:** SWR/React Query, cache, pagination, optimistic update
5.  **UI/UX:** komponen reusable, aksesibilitas, form (React Hook Form), design system

**Fokus Next.js (App Router)**

1.  **Routing & Layouts**, server vs client components
2.  **Data fetching server-side:** `fetch` di server, caching/revalidation
3.  **Actions & Mutations**, middleware, **Auth** (NextAuth/JWT)
4.  **Optimasi:** Image, font, metadata; **SEO**; dynamic vs static rendering

**Mini–Project:**

*   **Dashboard Task Manager** (React + React Query + server API dari Fase 4).
*   **Next.js Blog/Notes** dengan auth, CRUD, infinite scroll, dan image upload.

**Checklist Lulus Fase 5**

*   Tahu kapan **Server Component** vs **Client Component**.
*   Paham **caching & revalidation** (ISR) di Next.js.

***

## Fase 6 — Produksi & Best Practices (2–3 minggu)

**Fokus**

1.  **Quality:** ESLint, Prettier, Husky (pre-commit), commit lint, conventional commits
2.  **Testing Lanjut:** unit (Jest), component (React Testing Library), e2e (Playwright/Cypress)
3.  **Performance:** Lighthouse, bundle analyze, code splitting, memoisasi
4.  **Security:** OWASP Top 10 dasar (XSS, CSRF, SQLi), rate limiting, helmet
5.  **CI/CD & Deploy:** Vercel/Netlify (frontend), Railway/Render/Fly.io (backend), env & secrets

**Mini–Project:**

*   Tambah **test coverage** pada proyek sebelumnya + **pipeline CI** (GitHub Actions).

**Checklist Lulus Fase 6**

*   Bisa setup **lint-staged** & **pre-commit hooks**.
*   Bisa baca hasil **Lighthouse** & memperbaikinya.

***

## Fase 7 — Capstone Full‑Stack (2–4 minggu)

Bangun **aplikasi nyata end‑to‑end**:

*   **Contoh ide:**
    *   **Personal Finance Tracker** (kategori, grafik, export CSV)
    *   **Kanban Board** (drag & drop, real-time via WebSocket)
    *   **Study Planner** (kalender, reminder, progres metrik)
*   **Teknologi:** Next.js (app router) + API Node (Express/Nest) + DB (Postgres/Mongo) + Auth + Testing + Deploy.
*   **Deliverables:**
    *   Demo live + README lengkap (arsitektur, instruksi run, env example)
    *   Screenshot & GIF di repo
    *   Post mortem: apa yang berhasil/kurang, rencana iterasi

***

## Jadwal Belajar Mingguan (Contoh 10–12 jam/minggu)

*   **Senin–Rabu (2×1.5 jam):** materi + latihan
*   **Kamis (1.5 jam):** mini–project/feature
*   **Sabtu (3 jam):** build project / refactor
*   **Minggu (1 jam):** review konsep + tulis catatan/kesimpulan

***

## Pola Latihan Harian (30–60 menit)

1.  **Warm‑up:** 2–3 soal kecil (array/object/loop/async)
2.  **Core:** implement 1 fungsi utilitas / 1 komponen kecil
3.  **Review diri:** tulis *what I learned today* 3–5 poin
4.  **Set goal besok:** 1 target spesifik

***

## Rubrik Evaluasi & Checkpoint

*   **Akhir Fase 1:** 20 soal sintaks dasar + 1 mini–project CLI
*   **Akhir Fase 2:** jelaskan event loop + refactor callback → async/await
*   **Akhir Fase 3:** Todo app vanilla + event delegation
*   **Akhir Fase 4:** REST API CRUD + auth + test dasar (>= 8 endpoint)
*   **Akhir Fase 5:** Next.js app dengan auth + data fetching + pagination
*   **Akhir Fase 6:** CI/CD + Lighthouse score > 90 untuk Performance & Best Practices
*   **Akhir Fase 7:** Capstone live + README profesional

***

## Kesalahan Umum (dan cara menghindarinya)

*   **Langsung ke framework tanpa paham JS dasar** → Ikuti Fase 1–2 dulu.
*   **Hanya nonton, tidak ngoding** → Terapkan pola latihan harian.
*   **Takut refactor** → Biasakan menulis test kecil → refactor aman.
*   **Tidak menulis catatan** → Ringkas poin belajar harian; ini mempercepat retensi.

***

## Rekomendasi Sumber (Gratis & Mantap)

> Pakai sebagai referensi saat buntu—tetap utamakan praktek dari roadmap di atas.

*   **MDN Web Docs** (JavaScript/DOM): referensi paling tepercaya.
*   **JavaScript.info**: penjelasan komprehensif dari dasar hingga lanjut.
*   **Node.js Docs**: modul bawaan & panduan event loop.
*   **React & Next.js Docs**: mengikuti best practice terbaru.
