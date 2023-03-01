// --- do not touch  ↓↓↓↓↓↓↓↓↓↓↓↓ ----------
const baseServerURL = `http://127.0.0.1:${import.meta && import.meta.env && import.meta.env.REACT_APP_JSON_SERVER_PORT
  ? import.meta.env.REACT_APP_JSON_SERVER_PORT
  : 9090
  }`;
// --- do not touch  ↑↑↑↑↑↑↑↑↑↑↑↑ ----------

// ***** Constants / Variables ***** //
let mainSection = document.getElementById("data-list-wrapper");

let sortAtoZBtn = document.getElementById("sort-low-to-high");
let sortZtoABtn = document.getElementById("sort-high-to-low");

let fetchRecipesBtn = document.getElementById("fetch-recipes");

let filterLessThan50Btn = document.getElementById("filter-less-than-50");
let filterMoreThanEqual50Btn = document.getElementById(
  "filter-more-than-equal-50"
);

let loginUserUsername = document.getElementById("login-user-username");
let loginUserPassword = document.getElementById("login-user-passowrd");
let loginUserButton = document.getElementById("login-user");
let welcomeUsernameSpan = document.getElementById("welcome-username");

let editRecipeInputId = document.getElementById("edit-recipe-input-id");
let editRecipeInputPrice = document.getElementById("edit-recipe-input-price");
let editRecipeButton = document.getElementById("edit-recipe-button");

let recipeData = [];

let userAuthToken, userInfo;


fetchRecipesBtn.addEventListener("click", () => {
  fetchRecipe()
})



async function fetchRecipe() {

  let res = await fetch(`http://127.0.0.1:9090/recipeCategories`)
  let data = await res.json();

  DisplayData(data)
}



function DisplayData(data) {

  for (let item of data) {
    console.log(item.image)
    mainSection.innerHTML = `   <div class="card-list">

            <div class="card" id="">
              <div class="cart-image">
                <img src= ${item.image}  alt="">

              </div>
              <div class="cart-body">
                <h3 class="cart-item cart-title">${item.name}</h3>
                <div class="cart-item cart-description"> </div>


                <div class="cart-item card-description"> Rs200</div>
                <a href="#" id="" name="" class="cart-item cart-link">Edit</a>
              </div>
            </div>




          </div>
`

  }

  // 
  //

}
