import capitalize from "../src/index.js";

if (capitalize("hello") !== "Hello") {
  throw new Error("Функция работает неверно!");
}

if (capitalize("") !== "") {
  throw new Error("Функция работает неверно!");
}

console.log("Ошибок нет");
