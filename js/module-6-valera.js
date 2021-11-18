// let arr = [5, 2, 1, -10, 8];

// arr.sort((a, b) => b - a);
// console.log(arr);
// //----------
// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let arr = [vasya, petya, masha];

// const sortByAge = (users) => users.sort((a, b) => (a.age > b.age ? 1 : -1));

// sortByAge(arr);

//------ 1. Посчитать все лайки. 2. Вывести обьекты у которых есть Тег 'js'

// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// const totalLikes = tweets.reduce((acc, tweet) => acc + tweet.likes, 0);

// console.log(totalLikes);

// const tagIncludes = tweets.filter(({ tags }) => tags.includes("js"));
// console.log(tagIncludes);

//---- Увольте сотрудника если его ЗП больше 100 и он не активен (учитывая список тех, кого увольнять нельзя)

// const employees = [
//   { name: "Adam", salary: 100, isActive: true },
//   { name: "Sarah", salary: 90, isActive: false },
//   { name: "Jacob", salary: 150, isActive: false },
//   { name: "Mishele", salary: 100, isActive: true },
//   { name: "Thor", salary: 110, isActive: false },
// ];
// const BENEFITED = ["Thor", "Buddah", "Krishna"];

// const fireEmpl = function (employee) {
//   if (
//     employee.salary > 100 &&
//     !employee.isActive &&
//     !BENEFITED.includes(employee.name)
//   ) {
//     return false;
//   } else return true;
// };

// const newEmployees = employees.filter(fireEmpl);

// console.log(newEmployees);

//-----Напишите функцию shuffle(array) которая перемешивает элементы массива .
//Многократные прогоны через shuffle могут привести к разным последовательностям элементов . Например :

// let arr = [1, 2, 3, 4, 5];

// const shuffle = (arr) => {
//   return arr.sort(() => Math.random() - 0.5);
// };

// console.log(shuffle(arr));
// --- сделать функцию коструктор калькулятор и добавить метод который добовляет методы ('/' , '*' , '**')
// const Calculator = function () {
//   this.methods = {
//     "+": (a, b) => a + b,
//     "-": (a, b) => a - b,
//   };
//   this.calculate = function (str) {
//     let splitted = str.split(" ");
//     let first = +splitted[0];
//     let second = +splitted[2];
//     let operator = splitted[1];
//     return this.methods[operator](first, second);
//   };

//   this.addMethod = function (name, func) {
//     this.methods[name] = func;
//   };
// };

// let calc = new Calculator();
// calc.addMethod("*", (a, b) => a * b);
// calc.addMethod("**", (a, b) => a ** b);
// calc.addMethod("/", (a, b) => a / b);
// console.log(calc.calculate("3 ** 3"));

//----------Arr - массив строк - Напиши функцию unique(arr) которая возвр. массив, содержащий только уникальны элементы arr.
// Например:

// function unique(arr) {
//   return arr.filter((elem, index, array) => array.indexOf(elem) === index);
// }

// let strings = [
//   "кришна",
//   "кришна",
//   "харе",
//   "харе",
//   "хмаре",
//   "харе",
//   "кришна",
//   "кришна",
//   ":-)",
// ];

// console.log(unique(strings));

// //это же решение через Set
// const newArr = [...new Set(strings)];
// console.log(newArr);
//-----  Есть массив имён из 21 человека - Задача сделать  3 команды с рандомными именами = разбиться на 3 группы
// const arr = [
//   "Анна",
//   "София",
//   "Виктория",
//   "Дарья",
//   "Анастасия",
//   "Мария",
//   "Вероника",
//   "Полина",
//   "Соломия",
//   "Ангелина",
//   "Злата",
//   "Ева",
//   "Варвара",
//   "Алиса",
//   "Александра",
//   "Милана",
//   "Арина",
//   "Дарина",
//   "Кира",
//   "Диана",
//   "Екатерина",
// ];

// let sortedComands = (n) => {
//   let newArr = arr.sort(() => Math.random() - 0.5);

//   let l = newArr.length;
//   let s = 0;
//   let f = l / n;
//   let res = [];

//   for (let i = 0; i < n; i++) {
//     res[i] = newArr.splice(s, f);
//   }
//   return res;
// };

// console.log(sortedComands(3));

// найти по ID обьект и увеличить колл-во лайков (например)

// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// const findId = "001";

// const updatePlayer = tweets.map(
//   (tweet) =>
//     tweet.id === findId
//       ? { ...tweet, likes: tweet.likes + 100 } //- Если совпало по ID плюсуем 100 лайков в перемнную updatePlayer
//       : { ...tweet, likes: tweet.likes + 200 } //- Если не совпало по ID плюсуем 200 лайков всем остальным в перемнную updatePlayer
// ); //                                          // - Переменная tweets остаеться не изменённой
// console.log(updatePlayer);
// console.log(tweets);

// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// const topId = "002";

// const multyLikes = tweets.map((tweet) =>
//   tweet.id === topId
//     ? { ...tweet, likes: tweet.likes * 10 }
//     : { ...tweet, likes: tweet.likes + 50 }
// );
// console.log(tweets);
// console.log(multyLikes);
