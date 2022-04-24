const food = [
  {
    name: "Зайрмаг",
    price: "6800",
    saleFood: "4700",
    image: "./image/5.png",
    discount: 30,
    category: " Хямдралтай",
  },
  {
    name: "Панкейк",
    price: "6800",
    saleFood: "4700",
    image: "./image/4.png",
    discount: 30,
    category: " Хямдралтай",
  },
  {
    name: "Өглөөний хоол",
    price: "6800",
    saleFood: "4700",
    image: "./image/5.png",
    category: " Хямдралтай",
  },
  {
    name: "Банана сендвич",
    price: "6800",
    saleFood: "4700",
    image: "./image/6.png",
    category: " Хямдралтай",
  },

  {
    name: "Салмон загас",
    price: "6800",
    saleFood: "4700",
    image: "./image/4.png",
    category: " Үндсэн хоол",
  },
  {
    name: "Бөөрөнхий мах",
    price: "6800",
    saleFood: "4700",
    image: "./image/5.png",
    category: " Үндсэн хоол",
  },
  {
    name: "Самрын нухаш",
    price: "6800",
    saleFood: "4700",
    image: "./image/6.png",
    category: " Үндсэн хоол",
  },
  {
    name: "Чикен бургер",
    price: "6800",
    saleFood: "4700",
    image: "./image/7.png",
    category: " Үндсэн хоол",
  },

  {
    name: "Детокс салад",
    price: "6800",
    saleFood: "4700",
    image: "./image/8.png",
    category: " Салад ба зууш",
  },
  {
    name: "Кобб салад",
    price: "6800",
    saleFood: "4700",
    image: "./image/9.png",
    category: " Салад ба зууш",
  },
  {
    name: "Авокадо салад",
    price: "6800",
    saleFood: "4700",
    image: "./image/10.png",
    category: " Салад ба зууш",
  },
  {
    name: "Сендвич",
    price: "6800",
    saleFood: "4700",
    image: "./image/11.png",
    category: " Салад ба зууш",
  },

  {
    name: "Донатс",
    price: "6800",
    saleFood: "4700",
    image: "./image/12.png",
    category: " Амттан",
  },
  {
    name: "Орео дессерт",
    price: "6800",
    saleFood: "4700",
    image: "./image/13.png",
    category: " Амттан",
  },
  {
    name: "Вафли",
    price: "6800",
    saleFood: "4700",
    image: "./image/14.png",
    category: " Амттан",
  },
  {
    name: "Макарон",
    price: "6800",
    saleFood: "4700",
    image: "./image/15.png",
    category: " Амттан",
  },
];

const cardd = document.querySelectorAll(".card");
const cardTitle = document.querySelectorAll(".card-title ");
const cardText = document.querySelectorAll(".card-text");
const cardImage = document.querySelectorAll(".cardImage");

for (let i = 0; i < food.length; i++) {
  cardTitle[i].innerHTML += food[i].name;
  cardText[i].innerHTML += `${food[i].price}  ${food[i].saleFood}`;
  cardImage[i].innerHTML += `<img src="${food[i].image}" alt="" class="w-100">`;
  //[i] => ingej bichij ogch b/gaa ni elementuud maain array-aar orj irj b.ga
}

const filter111 = food.filter((cardCategory) => {
  return cardCategory.category == " Амттан";
});
console.log(filter111);
console.log(food);

// Map function ni array dotros propertymuudig ni awch boldog
// const itemMap = food.map((item) => {
//   return item.price;
// });
// console.log(itemMap);

// find bol nereen ni hailt hiih ym baina
// const itemFind = food.find((item) => {
//   return item.name === "Макарон";
// });
// console.log(itemFind);
