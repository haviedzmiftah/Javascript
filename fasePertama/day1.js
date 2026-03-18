// Latihan 1 - Deklarasi & Typeof 

const num = 23;
const str = 'hallo';
const boo = true;
const not = null;
let notd ;
const big = 999999999999999999999;
const sym = Symbol('id');


// Latihan 2 — Konversi & Operator

const a = Number('15');
const b = Number('3');

const tambah = a + b;
const kurang = a - b;
const kali = a * b;
const bagi = a / b;

const namaDepan = 'Hafid';
const namaBelakang = 'Miftah';
console.log(`hallo nama saya, ${namaDepan} ${namaBelakang}`)

const age = 19;
const isAdult = age >= 18;
console.log(isAdult); 

//Latihan 3 - Truthy/Falsy & Nullysh
console.log('latihan 3');
const input = '';
const fallback = 'default';
const display1 = input || fallback;
const display2 = input ?? fallback;

console.log(display1);
console.log(display2);

//Latihan 4 - Mini Quiz Perbandingan
console.log(0 == false);   // ? true
console.log(0 === false);  // ? flase
console.log('' == 0);      // ? true
console.log('' === 0);     // ? false
console.log(null == undefined);  // ? true 
console.log(null === undefined); // ? false