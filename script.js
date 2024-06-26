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
   try {
     e.preventDefault();
       if (input.value !== "") {
         container.innerHTML = "";
         const responce = await GateRecipe(input.value);
         responce.meals.forEach((el, index) => {
           container.innerHTML += `
           <div id = "search-content">
              <div class="Title-section">
                   <img src="${responce.meals[index].strMealThumb}" id = "img"/>
                    <h3>${responce.meals[index].strMeal}</h3>
                    <div class="paragraph">${responce.meals[index].strInstructions}</div>
              </div>
            </div>   
       `;
         });
         input.value = "";
       }
   } catch (error) {
    alert(error)
   }
});
