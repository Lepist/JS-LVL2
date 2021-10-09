
/* Возведение в степень */
alert(Math.pow(2,3)); // возведение в степень в ES5
alert(2**3); // тоже самое, только в ES6


/* Добавляем значение из объекта в массив в ES5 */
var mas = [];
var obj = {a:1, b:2};
mas.push(obj.a);
mas.push(obj.b); // Добавить значение из объекта в массив в ES5

mas = Object.values(obj); // Одной строкой добавляем все значения из объекта в массив в ES6
mas = Object.keys(obj); // Добавляем свойства из объекта в массив(a и b) в ES6


/* Константы */
var TEST = 123; // Типа константа в ES5
const TEST6 = 123; // Полноценная константа в ES6, переопределив константу получим ошибку


/* Отличия let от var */
var age = 25;
if(1){
    var age = 30;
    console.log(age); // 30
}
console.log(age); // 30
// var - глобальная переменная, в if ее значение меняется на 30

let letage = 25;
if (1) {
    let letage = 30;
    console.log(letage); // 30
}
console.log(letage); // 25
// Это 2 разные переменные

if (1) {
    let letage = 30;
    console.log(letage); // 30
}
console.log(letage); // Пытаемся обратиться к несуществующей переменной, letage существуется только в if, будет ошибка

let letage = 30;
if (1) {
    console.log(letage); // 30
}
console.log(letage); // Ошибок не будет, letage в данный момент глобальная переменная

let i = 1;
for(let i = 0; i < 3; i++){
    console.log(i);
}
console.log(i);
// Будет выведено 0, 1, 2, 1 где последняя единица - глобальная переменная

// Вся разница в var и let в области видимости


/* Шаблонные строки Template literals */
let firstName = 'Иван';
let lastName = 'Иванов';
let yearBirth = 1990;

function calcAge(year){
    let date = new Date(); // создали объект класса
    let currentYear = date.getFullYear(); // 
    return currentYear - year; 
}
const FIO = 'Пользователю ' + firstName + ' ' + lastName + " - " + calcAge(yearBirth);
// const FIO = 'Пользователю ${firstName} ${lastName} - ${calcAge(yearBirth)}';

/* Строковые свойства */
console.log(FIO);
console.log(FIO.indexOf('Иванов')); //Поиск с какого индекса начинается слово - Иванов
console.log(FIO.endsWith('31')); // Заканчивается ли строка на 31 true/false
console.log(FIO.repeat(5));



/* Стрелочные функции */
let sum = function(a,b){    // ES5
    return a+b;
}
// ES6
let sum2 = (a,b) => a+b; //тоже самое, только при помощи стрелочной функции, если в теле только 1 функция, то return вызывается автоматически
// если принимаемся на вход 1 переменную, то круглые скобки можно не ставить
let sum3 = x => console.log(x);
// но если есть значение по умолчанию с 1 переменной, то скобки обязательные
let sum4 = (x=10) => console.log(x);
alert(sum2(2,3));

const sum = (a, b=1) =>{ // sum и есть название стрелочной функции
    a = +a; // приводим строку к числу
    if(!isNaN(a)){ // проверяем на число
        console.log(a+b);
    }
}
sum('2',5); // была строка, стала числом
// Почему используем const - константа меньше весит чем переменная

['JS', 'php', 'Java'].forEach(item => console.log(item)); // вывели все элементы массива в консоль
['JS', 'php', 'Java'].forEach((item,i) => console.log(i + ':' + item)); // вывели все элементы массива в консоль вместе с их индексами

let box = {
    color: 'green',
    position: 5,
    clickMe: function(){
        document.querySelector('button').addEventListener('click', function(){
            console.log(this);
            console.log("Контейнер " + this.position +", цвет: " + this.color);
        })
    }
}
box.clickMe(); // Контейнер undefined, цвет: undefined


let box = {
    color: 'green',
    position: 5,
    clickMe: function () {
        document.querySelector('button').addEventListener('click', ()=> {
            console.log(this);
            console.log("Контейнер " + this.position + ", цвет: " + this.color);
        })
    }
}
box.clickMe(); // Object { color: "green", position: 5, clickMe: clickMe()}  Контейнер 5, цвет: green

// Вывод: у стрелочных функций есть важное отличие от классических: они не создают собственного контекста(т.е. нет собственного this у них), а используют контекст родителя
// т.е. обращаемся уже не к button(классическая функция), а к box(стрелочная)

let box = {
    color: 'green',
    position: 5,
    clickMe: function () {
        document.querySelector('button').addEventListener('click', () => {
            console.log(this);
            console.log("Контейнер " + this.position + ", цвет: " + this.color);
        })
    }
}
box.clickMe(); // Object { color: "green", position: 5, clickMe: clickMe()}  Контейнер 5, цвет: green


/* Деструктуризация - это механизм, который позволяет извлечь части из составных данных. Цель - сокращение кода */
let mas = ['Иван', 30];
let name = mas[0]; // ES5
let age = mas[1];

let [name,age] = mas; // тоже самое в ES6

let obj = {
    firstName: 'Иван',
    lastName: 'Иванов',
    professions: ['Программист', 'Сис.Админ'];

}
let {firstName: name, lastName, professions[p1,p2]} = obj;
console.log(name + lastName + ' имеет профессии ' + p1 + ', ' + p2);


/* Операторы Rest и SPREAD */
function f(){ //ES5, даже если у функции нет аргументов, их можно принять через arguments
    console.log(arguments);
}
f(1,2,3);

// Оператор REST - упаковка элементов в массив
// Оператор SPREAD - используется для разделения коллекций на отдельные элементы(распаковка)
function testRest(a,b,...c){
    console.log(c); // [3,4,5]
}
testRest(1,2,3,4,5);

let values = [243,54,547,23];
// console.log(Math.max(values)); // Ошибка, нужно распаковать массив
console.log(Math.max(...values));


/* Клонирование свойств массива */
let arr = ['one','two'];
let arr2 = ['first', ...arr, 'second']; // добавляет элементы массива arr в массив arr2, а не сам массив arr целиком

let calcSumArgs = (a,b,c,d,...items)=>{
    let s1 = a + b + c + d;
    items.forEach(item => s1 +=item); // суммируем оставщиеся элементы добавленные в массив items
    console.log(s1);
}
calcSumArgs(1,2,3,4,5,6,7,8);


/* Метод arr.map(func) - используется для трансформации массива, создает новый массив, который будет состоять из результатов функции func(item) */
let langs = ['JS','php','java'];
let sizeLangs = langs.map(item => item.length);
console.log(sizeLangs); // [2,3,4]

