const searchInput = document.querySelector('input');
const searchButton = document.querySelector('.button');
const cocktailsList = document.querySelector('.cocktails');

function makeAjaxRequest() {

    const ajax = new XMLHttpRequest();
    ajax.addEventListener('load', onAjaxResponse);
    ajax.open('GET', `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchInput.value}`);
    ajax.send();
}

function onAjaxResponse(response) {
    console.log(response.target.responseText);
    let cocktails = JSON.parse(response.target.responseText).drinks;

    console.log(cocktails);

    cocktailsList.innerHTML = "";


    if (cocktails) {
        for (let cocktail of cocktails) {
            cocktailsList.innerHTML += `<div class="cocktail">
<img src="${cocktail.strDrinkThumb}">
<h3>${cocktail.strDrink}</h3>
<p>${cocktail.strInstructions}</p>
<div class="ingredients"></div>
</div>`;
        }
    } else {
        cocktailsList.innerHTML = `<h2>404 Cocktail not found</h2>`;
    }
}

searchButton.addEventListener('click', makeAjaxRequest);


