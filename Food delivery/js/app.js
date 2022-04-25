// const cardd = document.querySelector("#disFood");
// const cardTitle = document.querySelectorAll(".card-title ");
// const cardText = document.querySelectorAll(".card-text");
// const cardImage = document.querySelectorAll(".cardImage");
// const cat = document.querySelectorAll("#aaaa");
// const cat1 = document.querySelectorAll("#bbbb");
// //cardImage[i] =>  elementuud array-aar orj irj b.ga

const select = (arr, con) => {
  let html = document.querySelector(con);
  for (let i = 0; i < arr.length; i++) {
    let food = `
    <div class="col-md-3">
    <div class="card mt-2 border-0">
      <div class="card-body">
        <div class="position-relative">
          <p class="position-absolute percent">10%</p>
          <div class="cardImage">
            <img src=${arr[i].image} alt="" class="w-100" />
          </div>
        </div>
        <h5 class="card-title mT-2">${arr[i].name}</h5>
        <p class="card-text">${arr[i].price}</p>
      </div>
    </div>
  </div>`;
    html.innerHTML += food;
  }
};

const xhrFood = new XMLHttpRequest();

xhrFood.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    const datas = JSON.parse(this.responseText);
    // json gedeg ni obyect bolgoj awch baigaa
    const desert = datas.filter((cardCategory) => {
      return cardCategory.category == " Амттан";
    });
    const discount = datas.filter((cardCategory) => {
      return cardCategory.category == " Хямдралтай";
    });
    const snacks = datas.filter((cardCategory) => {
      return cardCategory.category == " Салад ба зууш";
    });
    const basic = datas.filter((cardCategory) => {
      return cardCategory.category == " Үндсэн хоол";
    });
    select(discount, "#disFood");
    select(basic, "#basedFood");
    select(snacks, "#snackFood");
    select(desert, "#dessertFood");
  }
};

xhrFood.open("GET", "/js/data.json", true);
xhrFood.send();

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
