let result = document.getElementById("result");
let inserimento_drink = document.getElementById("drink_name")
let button = document.getElementById("pulsante")

async function getData() {
  const nome_drink = inserimento_drink.value
  const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${nome_drink}`;
  const response = await fetch(url);
  const data = await response.json()
  const drinks = await data.drinks






  

  //stampare un elenco di quei drink nella console
  /*
  drinks.forEach(drink => {
    result.innerHTML += `
      <div class="single-drink">
        <img src="${drink.strDrinkThumb}" width=100>
        <p> ${drink.strDrink} </p>
      </div>
    `
  });
  */

  result.innerHTML = `ciao uomo`
}
window.addEventListener("load", function(){
  result.innerHTML = `ciao fra`
})