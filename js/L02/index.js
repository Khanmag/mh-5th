// console.log(5 ** 3); // 125 - 5 в 3 степени
// console.log(4 ** 5); // 1024 - 4 в 5 степени
//const userNumber = prompt("Введите число")
// !isNaN(NaN)  - false
// !isNaN(3213)  - true
//if (!isNaN(userNumber)) { // ! - не, isNaN - является ли NaN
//  alert(userNumber ** 2)
//} else {
//  alert("Вы ввели какую-то фигню, а не число")
//}
// console.log(typeof NaN);
// console.log(NaN >= 0);
// console.log(NaN <= 0);
// const InfinityNumber = 100 / 0
// console.log(InfinityNumber > NaN );
// const isNaNResult1 = isNaN(242)
// const isNaNResult2 = isNaN(NaN)
// console.log(isNaNResult1);
// console.log(isNaNResult2);

// -------------------------LOGIN LOGIC---------------------
const userLogin = prompt("Введите логин");
if (userLogin === "admin") {
  const userNumber = promt("Введите пароль");
  if (userNumber === "123");
  alert("Доброго времени суток");
  !userNumber;
  {
  }
  alert("Пароль неверный");
} else if (userLogin === "user") {
  alert("Привет пользоваетль");
} else if (userLogin === "hiddenUser") {
  alert("Мы никому о вас не расскажем");
} else if (!userLogin) {
  alert("Решили не представлятьбся, ну ладно");
} else {
  alert("Привет ${userLogin}");
}
