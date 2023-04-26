// function getExtremeElements(array) {
//     return [array[0], array[array.length-1]];
//     }

//    console.log(getExtremeElements([1, 2, 3, 4, 5]));
//    console.log(getExtremeElements(["Earth", "Mars", "Venus"]));
//    console.log(getExtremeElements(["apple", "peach", "pear", "banana"]));


// function splitMessage(message, delimiter) {
//     let words;
//   words = message.split(delimiter);
//     return words;
//   }
//   console.log(splitMessage("Mango hurries to the train", " "));
//   console.log(splitMessage("Mango", ""));
//   console.log(splitMessage("best_for_week", "_"));

  

// function calculateEngravingPrice(message, pricePerWord) {

//     const words = message.split(" ");
//     const totalPrice = words.length * pricePerWord;
//     return totalPrice;


//         // pricePerWord - ціна за 1 слово
//         // message - слова розділені лише пробілами
//         // написати тіло функції щоб вона повертала загальну вартість гравіювання усіх слів у рядку
//         // 1. розбити слова на масиви 
//         // 2.скласти формулу тотал прайс
//     }
//     console.log(calculateEngravingPrice("JavaScript is in my blood", 10));
//     console.log(calculateEngravingPrice("JavaScript is in my blood", 20));
//     console.log(calculateEngravingPrice("Web-development is creative work", 40));
//     console.log(calculateEngravingPrice("Web-development is creative work", 20));


// const message = "welcome!";
// console.log(message.length);


// function slugify(title) {

//     const slug = title.toLowerCase().split(" ").join('-');

// return slug

// //     Напиши функцію slugify(title), яка приймає заголовок статті, параметр title, і повертає slug, створений з цього рядка.
// // Значенням параметра title будуть рядки, слова яких розділені лише пробілами
// // Усі символи slug повинні бути у нижньому регістрі
// // Всі слова slug повинні бути розділені тире

//   }
//   console.log(slugify("Arrays for begginers"));
//   console.log(slugify("English for developer"));
//   console.log(slugify("Ten secrets of JavaScript"));
//   console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));


// function makeArray(firstArray, secondArray, maxLength) {

//     // firstArray - перший масив
//     // secondArray - другий масив
//     // maxLength - максимально допустима довжина нового масиву

//     // 1. якщо кількість елементів нового масиву більша за maxLength то треба
//     // повернути копію масиву довжиною maxLength 

//     // 2. в іншому випадку повернути новий масив повністю

//     const newMasive = firstArray.concat(secondArray);
//     // сума елементів масиву
//     const length = newMasive.length; 
//     // кількість елементів масиву
//     const masiveElement = length > maxLength ? newMasive.slice(maxLength) : newMasive;


//     return masiveElement;
  
//   }

// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));
// console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4));
// console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4) );
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0));


// function calculateTotal(number) {
// //  функція приймає ціле число number
// // 1. Повертає суму всіх цілих числел від 1 до number
// let sum = 0;

// for (let i = 1; i < number; i += 1) {
// sum += i; 
// }

// return sum;
//    }

//    console.log(calculateTotal(1));
//    console.log(calculateTotal(3));
//    console.log(calculateTotal(7));
//    console.log(calculateTotal(18));
//    console.log(calculateTotal(24));
//    console.log(calculateTotal());



// const string = "javascript";

// for (const character of string) {
//   console.log(character);
// }


// const name = "Mango Apple";
// console.log(name.split("")); // ["M", "a", "n", "g", "o"]

// const message = "JavaScript - це цікаво";
// console.log(message.split(" ")); // ["JavaScript", "-", "це", "цікаво"]

// const words = ["JavaScript", "це", "цікаво"];
// console.log(words.join("")); // "JavaScriptцецікаво"
// console.log(words.join(" ")); // "JavaScript це цікаво"
// console.log(words.join(" б ")); // "JavaScript-це-цікаво"


// Виносимо варіанти в масив
// const redFruits = ["apple", "strawberry", "cherry", "cranberries"];
// const fruit = "cherry";
// // Перевіряємо присутність елемента
// const hasFruit = redFruits.includes(fruit);

// if (hasFruit) {
//   console.log(`${fruit} is a red fruit!`);
// }



// function createArrayOfNumbers(min, max) {
//     const numbers = [];
// for (let i = min; i < max; i += 1)
//  {
//     numbers.push(i);
//   }
//   return numbers;
// }
  
//   console.log(createArrayOfNumbers(1, 3));
//   console.log(createArrayOfNumbers(14, 17));
//   console.log(createArrayOfNumbers(29, 34));
//   console.log(createArrayOfNumbers());




// Напиши функцію filterArray(numbers, value), яка приймає масив чисел (параметр numbers) і повертає новий масив, в якому будуть тільки ті елементи масиву numbers, які більші за значення параметра value (число).
function filterArray(numbers, value) {
    let numMasive = [];

for(const numb of numbers) {
    if (numb > value) {
        numMasive.push(numb)
    }
}

 return numMasive;
 }

 console.log(filterArray([1, 2, 3, 4, 5], 3));
 console.log(filterArray([1, 2, 3, 4, 5], 4));
 console.log(filterArray([1, 2, 3, 4, 5], 5));
 console.log(filterArray([12, 24, 8, 41, 76], 38));
 console.log(filterArray([12, 24, 8, 41, 76], 20));
 console.log(filterArray());


// const clients = ["Mango", "Ajax", "Poly"];

// for (const client of clients) {
//   console.log(client);
// }