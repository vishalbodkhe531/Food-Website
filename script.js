const input = document.querySelector("#input");
const form = document.querySelector("form");
const container = document.querySelector(".search-content");

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
    const responce = await GateRecipe(input.value);
    console.log(responce);
    console.log(responce.meals[0]);
    console.log(responce.meals[0].strYoutube)
    container.innerHTML += (`
    <div id = "search-content">
      <div class="Title-section">
           <img src="${responce.meals[0].strMealThumb}" id = "img"/>
           <h3>${responce.meals[0].strMeal}</h3>
           <div class="paragraph">${responce.meals[0].strInstructions}</div>
           </div>
           

      <div class="Title-section">
          <img src="${responce.meals[1].strMealThumb}" id = "img"/>
          <h3>${responce.meals[1].strMeal}</h3>
          <div class="paragraph">${responce.meals[1].strInstructions}</div>
      </div>

       <div class="Title-section">
           <img src="${responce.meals[2].strMealThumb}" id = "img"/>
           <h3>${responce.meals[2].strMeal}</h3>
           <div class="paragraph">${responce.meals[2].strInstructions}</div>
       </div>
        
        <div class="Title-section">
            <img src="${responce.meals[3].strMealThumb}" id = "img"/>
            <h3>${responce.meals[3].strMeal}</h3>
            <div class="paragraph">${responce.meals[3].strInstructions} </div>
        </div>
         
         <div class="Title-section">
             <img src="${responce.meals[4].strMealThumb}" id = "img"/>
             <h3>${responce.meals[4].strMeal}</h3>
             <div class="paragraph">${responce.meals[4].strInstructions}</div>
         </div>

         <div class="Title-section">
              <img src="${responce.meals[5].strMealThumb}" id = "img"/>
              <h3>${responce.meals[5].strMeal}</h3>
              <div class="paragraph">${responce.meals[5].strInstructions}</div>
         </div>

          <div class="Title-section">
              <img src="${responce.meals[6].strMealThumb}" id = "img"/>
              <h3>${responce.meals[6].strMeal}</h3>
              <div class="paragraph">${responce.meals[6].strInstructions}</div>
           </div>
        </div>   
      `)
});

let Theme = document.querySelector("#check");
const body = document.querySelector("body");
Theme.addEventListener("click",()=>{
    // body.style.background.toggle = ("red");
    body.classList.toggle("light-mode")
    console.log( body.classList.toggle("light-mode"))
});