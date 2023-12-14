let result = document.getElementById("result");
let inserimento_drink = document.getElementById("drink_name")
let button = document.getElementById("pulsante")

async function getData() {

  result.innerHTML = ""

  const nome_drink = inserimento_drink.value
  const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${nome_drink}`;
  const response = await fetch(url);
  const data = await response.json()
  const drinks = await data.drinks

  drinks.forEach(drink => {
    result.innerHTML += `
    <div class="drink_container">
        <div class="drink_image"> 
            <img width=100 src="${drink.strDrinkThumb}">
        </div>
        <div class="description"> 
            <p class="title"> ${drink.strDrink} </p>
            <p class="preparation"> </p>
        </div>
    </div>
    `
  });
}

button.addEventListener("click", function(){
  getData()
})

window.addEventListener("load", function(){
  getData()
})