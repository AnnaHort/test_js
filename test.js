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
