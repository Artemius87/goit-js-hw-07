//--------------ПЕРЕБЕРАЮЩИЕ МЕТОДЫ МАССИВОВ
// const users = [
//   { id: "000", name: "Mango", isActive: true },
//   { id: "001", name: "Poly", isActive: false },
//   { id: "002", name: "Ajax", isActive: true },
//   { id: "003", name: "Chelsey", isActive: false },
// ];

// // Для каждого элемента коллекции (user) проверим поле id.
// // Если оно совпадает с искомым идентификатором, то find прекратит
// // выполнение и вернет текущий элемент (user) как результат выполнения
// const user = users.find((user) => user.id === "002");
// console.log(user);

// // Создадим функцию которая будет возвращать нам пользователя по id
// const getUserById = (arr, id) => arr.find((x) => x.id === id);

// console.log(getUserById(users, "001"));
// console.log(getUserById(users, "003"));

// REDUCE

// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// const totalId = tweets.reduce(function (acc, num) {
//   return acc + num.tags;
// }, 0);
// console.log(totalId);
//------------------------------------------------
const Human = function (power, life, exp, dmg) {
  this.power = power;
  this.life = life;
  this.exp = exp;
  this.dmg = dmg;

  this.attack = function (obj) {
    obj.life -= this.dmg;
    console.log(`обьект ${obj.name} получил урон ${this.dmg}`);
  };

  this.health = function (obj) {
    obj.life += 15;
    console.log(`обьект ${obj.name} востановил 15 здоровья`);
  };
  this.fireBall = function (obj) {
    obj.life -= 50;
    console.log(`обьект ${obj.name} кастует фаербол 50dmg`);
  };
};
const Elf = function (power, life, exp, dmg) {
  this.power = power;
  this.life = life;
  this.exp = exp;
  this.dmg = dmg;

  this.attack = function (obj) {
    obj.life -= this.dmg;
    console.log(`обьект ${obj.name} получил урон ${this.dmg}`);
  };

  this.health = function (obj) {
    obj.life += 15;
    console.log(`обьект ${obj.name} востановил 15 здоровья`);
  };
  this.fireBall = function (obj) {
    obj.life -= 50;
    console.log(`обьект ${obj.name} кастует фаербол 50dmg`);
  };
};
const Dworf = function (power, life, exp, dmg) {
  this.power = power;
  this.life = life;
  this.exp = exp;
  this.dmg = dmg;

  this.attack = function (obj) {
    obj.life -= this.dmg;
    console.log(`обьект ${obj.name} получил урон ${this.dmg}`);
  };

  this.health = function (obj) {
    obj.life += 15;
    console.log(`обьект ${obj.name} востановил 15 здоровья`);
  };
  this.fireBall = function (obj) {
    obj.life -= 50;
    console.log(`обьект ${obj.name} кастует фаербол 50dmg`);
  };
};

const human1 = new Human(100, 100, 100, 10);

const elf1 = new Elf(200, 200, 0, 10);

const dworf1 = new Dworf(150, 300, 300, 10);

const aragorn = Object.create(human1);
aragorn.name = "Aragorn";
aragorn.weapon = "sword";
const legolas = Object.create(elf1);
legolas.name = "Legolas";
legolas.weapon = "bow";
const givi = Object.create(dworf1);
givi.name = "Givi";
givi.weapon = "axe";

aragorn.attack(givi);
aragorn.health(givi);
aragorn.fireBall(legolas);
legolas.attack(givi);
console.log(givi);
console.log(legolas);
console.log(aragorn);
