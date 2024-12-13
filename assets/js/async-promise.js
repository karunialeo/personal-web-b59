// // synchronous
// console.log("Start");

// function fetchData() {
//   const data = "Data fetched";
//   return data;
// }

// const result = fetchData();
// console.log(result);

// console.log("End");

// // asynchronous
// console.log("Start");

// function getData() {
//   const data = "Data fetched";
//   console.log(data);
// }

// function fetchDataAsync() {
//   setTimeout(getData, 2000); // 2 * 1000 ms =>> 2 detik
// }

// fetchDataAsync();

// console.log("End");

// function sayHello() {
//   console.log("Hello everyone!");
// }

// function greeting(name, callback) {
//   console.log("Hi,", name);
//   callback();
// }

// greeting("Leo", sayHello);

// // callback problem

// setTimeout(() => {
//   // 1 proses
//   console.log("this is callback");
// }, 1000);

// setTimeout(() => {
//   proses1();
//   setTimeout(() => {
//     proses2();
//     setTimeout(() => {
//       proses3();
//     }, 3000);
//   }, 2000);
// }, 5000);

// function proses1() {
//   setTimeout(() => {
//     console.log("proses pertama");
//   }, 5000);
// }

// function proses2() {
//   setTimeout(() => {
//     console.log("proses kedua");
//   }, 2000);
// }

// function proses3() {
//   setTimeout(() => {
//     console.log("proses ketiga");
//   }, 3000);
// }

// async function multipleProses() {
//   await proses1();
//   await proses2();
//   await proses3();
// }

// multipleProses();

function proses1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("proses pertama");
      resolve();
    }, 5000);
  });
}

function proses2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("proses kedua");
      reject("ada yang salah dengan proses 2");
    }, 2000);
  });
}

function proses3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("proses ketiga");
      resolve();
    }, 3000);
  });
}

// proses1()
//   .then(() => proses2())
//   .then(() => proses3())
//   .catch((error) => console.error("Error:", error));

async function executeProcesses() {
  try {
    await proses1();
    await proses2();
    await proses3();
  } catch (error) {
    console.error("Error:", error);
  }
}

executeProcesses();
