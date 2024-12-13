// melakukan logging pada console
// console.log("Halo semuanya, namaku Syifa, aku belajar di Dumbways.id!");
// console.log("Aku suka makan");

// console.log("Sekarang hari Selasa, 10 Desember");

// contoh alert
// alert("anda di halaman home!");

// contoh confirm

// let text;

// berikan pilihan kepada user untuk klik Ok atau Cancel
// if (confirm("Apakah anda ingin menghapus?") == true) {
//   // lakukan apa yang kita inginkan ketika user klik OK
//   alert("Ok, berhasil hapus!");
// } else {
//   // lakukan apa yang kita inginkan ketika user klik Cancel
//   alert("Tidak jadi hapus!");
// }

// var, let, const ==> constant => konstanta
// var
// var ucapan = "Selamat pagi!";
// console.log(ucapan);
// // untuk disini sampai deklarasi ulang, yang dikenal yang atas

// var ucapan = "Selamat siang!";
// // setelah ini ke bawah
// console.log(ucapan);

// // let
// let ucapanSelamat = "Selamat kamu dapat nilai 100!";

// // let ucapanSelamat = "Selamat kamu dapat nilai 100!"; ===> TIDAK BISA

// ucapanSelamat = "Selamat kamu lulus!"; // =>>> BISA, ISTILAHNYA ADALAH RE-ASSIGN
// console.log(ucapanSelamat);

// const fullName = "Leo Gultom";
// const address = "Jalan Perkutut No. 123";

// // const name = "Ripaldiansyah" ==> TIDAK BISA
// // fullName = "Rambayu"; // =>>> TIDAK BISA RE-ASSIGN ATAU ASSIGN ULANG
// address = "Jl. Panjang No. 321";

// // console.log(fullName);
// console.log(address);

// operator + - * / % ==> arithmetic operator
// let jumlah = 10 + 2;
// console.log(jumlah);

// let kurang = 10 - 2;
// console.log(kurang);

// let operatorKali = 10 * 2;
// console.log(operatorKali);

// let operatorBagi = 10 / 2;
// console.log(operatorBagi);

// let operatorModulo = 15 % 2; // angka terdekat dibawah 15 yang bisa dibagi 2 adalah 14 =>>> 15 - 14 = 1
// console.log(operatorModulo);

// // operator pembanding / comparison operators
// // == , === , != , > , < , <= , >=

// // TIPE DATA
// // number 1 , 2 , 10 , 40.3 , 125 , 33000.25
// // string "Leo G" , 'Leo G' , `Leo G`
// let nama = "Paste Prosmana";

// let perkenalan = `Halo, nama saya ${nama}`; // ====> concatenation
// let perkenalanTemplate = "Halo, nama saya";
// console.log(perkenalan);
// console.log(perkenalanTemplate, nama);
// console.log(perkenalanTemplate + nama);

// console.log("variable nama :", nama);
// // array, object
// // boolean true, false
// // ==
// let equal = 5 == "5"; // hanya membandingkan value yang sama meskipun tipe data beda
// console.log(equal);

// // ===
// let strongEqual = 5 === "5"; // membandingkan value, dan tipe data harus sama
// console.log(strongEqual);

// let notEqual = 5 != 7;
// console.log(notEqual);

// let greaterThan = 5 > 8;
// console.log("apakah 5 lebih besar dari 8", greaterThan);

// let lessThan = 5 < 2;
// console.log("apakah 5 lebih kecil dari 2", lessThan);

// conditional statement
// let age = 18;
// let batasUmur = 18;
// if (age >= batasUmur) {
//   console.log(
//     `anda adalah orang dewasa karena umur anda (${age} tahun) lebih besar atau sama dengan ${batasUmur} tahun`
//   );
// } else {
//   console.log(
//     `anda masih dibawah umur karena umur anda (${age} tahun) lebih muda dari ${batasUmur} tahun`
//   );
// }

// let fruit = "mango";

// switch (fruit) {
//   case "banana":
//     console.log("this is banana");
//     // proses apapun .. .. . . .
//     break;
//   case "apple":
//     console.log("this is apple");
//     break;
//   case "durian":
//     console.log("this is durian");
//     break;
//   case "strawberry":
//     console.log("this is strawberry");
//     break;
//   default:
//     console.log("fruit is unknown");
// }

// loop for, while, do ... while

// kita ingin console log 'I love you' 15 kali
// for (let i = 0; i < 15; i++) {
//   // increment, decrement
//   console.log("I love you ke", i);
// }

// function ucapan(name, progLanguage, hobby) {
//   console.log("Selamat siang!");
//   console.log(`Nama saya ${name}`);
//   console.log(`${name} suka bahasa pemrograman ${progLanguage}`);
//   console.log(`${name} suka bermain ${hobby}`);
// }

// function perkenalan() {
//   console.log("Berikut adalah perkenalan dari saya.");
//   ucapan("Leo", "Javascript", "sepak bola");
// }

// function changeColor(e) {
//   console.log(e);
//   let testButton = document.getElementById("testButton");
//   testButton.style.backgroundColor = "red";
//   console.log("anda mengarahkan mouse ke tombol");
// }

// function revertColor() {
//   let testButton = document.getElementById("testButton");
//   testButton.style.backgroundColor = "green";
//   console.log("anda mengarahkan mouse jauh dari tombol");
// }

// function penjumlahan(a, b) {
//   console.log(a + b);
// }

// penjumlahan(15, 15);
// penjumlahan(352, 240);

// array adalah list atau daftar
// let fruits = ["apple", "banana", "cherry"]; // daftar nama-nama buah ==> array of strings
// let primeNumber = [2, 3, 5, 7, 11, 13]; // daftar bilangan prima ===> array of numbers
// let evenNumber = [2, 4, 6, 8, 10]; // daftar bilangan genap ===> array of numbers

// console.log(fruits);
// console.log(primeNumber);

// let person = {
//   name: "Leo G",
//   address: "Bintaro",
//   favoriteLanguage: "Javascript",
//   hobby: "Coding",
//   shoeSize: 44,
// };

// let blog = {
//   title: "Pengaruh tidur malam setiap hari",
//   author: "Leo G",
//   postedAt: new Date(),
//   content:
//     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus laborum assumenda neque expedita sequi quod maiores, est impedit. Labore esse fugiat ipsum dolor, praesentium ipsa dolorem, debitis fuga modi non ullam quia dicta quasi similique natus beatae, vel officia assumenda magnam quod! Fuga voluptatem nisi laudantium error quos unde esse!",
// };

// console.log(person);
// ucapan(person.name, person.favoriteLanguage, person.hobby);
// console.log(blog);
