const input = document.querySelector("#input");
const form = document.querySelector("form");
const container = document.querySelector(".search-content");
const row = document.querySelector(".row");

const GateRecipe = async () => {
    try {
        const recipeData = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input.value}`);
        const recipeObj = await recipeData.json();
        return recipeObj;
    } catch (error) {
        console.log(error);
    }
}

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    container.innerHTML = '';

    const responce = await GateRecipe(input.value);
    let arr = [responce.meals];
    for (let i = 0; i <= 7; i++) {
        container.innerHTML += (`
           <div id = "search-content">
              <div class="Title-section">
                   <img src="${responce.meals[i].strMealThumb}" id = "img"/>
                    <h3>${responce.meals[i].strMeal}</h3>
                    <div class="paragraph">${responce.meals[i].strInstructions}</div>
              </div>
            </div>   
       `)
    }
    input.value = '';
});

let Theme = document.querySelector("#check");
const body = document.querySelector("body");
Theme.addEventListener("click", () => {
    body.classList.toggle("light-mode")
    console.log(body.classList.toggle("light-mode"))
});