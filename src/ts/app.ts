const box = document.querySelector(".box");
const boxImg = document.querySelector(".img-box");
const mealImage = document.querySelector("#meal-img-box") as HTMLElement;
const cateBox = document.querySelector(".category-box");
const moreDisplay = document.querySelector(".recipe-display-box");

const mealCategory = document.querySelector(".meal-category");
const mealName = document.querySelector(".meal-name");
const mealGuide = document.querySelector(".meal-guide");
const mealBlogLink = document.querySelector(".meal-src");

// --------------
interface RecipeBox {
  meals: Recipe[];
}

interface Recipe {
  dateModified: null;
  idMeal: string;
  strArea: string;
  strCategory: "Vegetarian";
  strCreativeCommonsConfirmed: null;
  strDrinkAlternate: null;
  strImageSource: null;
  strIngredient1: "penne rigate";
  strIngredient2: "olive oil";
  strIngredient3: string;
  strIngredient4: "chopped tomatoes";
  strIngredient5: "red chile flakes";
  strIngredient6: "italian seasoning";
  strIngredient7: "basil";
  strIngredient8: "Parmigiano-Reggiano";
  strIngredient9: "";
  strIngredient10: "";
  strIngredient11: "";
  strIngredient12: "";
  strIngredient13: "";
  strIngredient14: "";
  strIngredient15: "";
  strIngredient16: null;
  strIngredient17: null;
  strIngredient18: null;
  strIngredient19: null;
  strIngredient20: null;
  strInstructions: "Bring a large pot of water to a boil. Add kosher salt to the boiling water, then add the pasta. Cook according to the package instructions, about 9 minutes.\r\nIn a large skillet over medium-high heat, add the olive oil and heat until the oil starts to shimmer. Add the garlic and cook, stirring, until fragrant, 1 to 2 minutes. Add the chopped tomatoes, red chile flakes, Italian seasoning and salt and pepper to taste. Bring to a boil and cook for 5 minutes. Remove from the heat and add the chopped basil.\r\nDrain the pasta and add it to the sauce. Garnish with Parmigiano-Reggiano flakes and more basil and serve warm.";
  strMeal: string;
  strMealThumb: string;
  strMeasure1: "1 pound";
  strMeasure2: "1/4 cup";
  strMeasure3: "3 cloves";
  strMeasure4: "1 tin ";
  strMeasure5: "1/2 teaspoon";
  strMeasure6: "1/2 teaspoon";
  strMeasure7: "6 leaves";
  strMeasure8: string;
  strMeasure9: "";
  strMeasure10: "";
  strMeasure11: "";
  strMeasure12: "";
  strMeasure13: "";
  strMeasure14: "";
  strMeasure15: "";
  strMeasure16: null;
  strMeasure17: null;
  strMeasure18: null;
  strMeasure19: null;
  strMeasure20: null;
  strSource: string;
  strTags: string;
  strYoutube: string;
}

// =======-----------------------------
function displayRecipe(info: RecipeBox) {
  //   boxImg.setAttribute("src", info?.strMealThumb);

  //   console.log(info?.strMealThumb);

  const data = info.meals[0];

  mealImage.style.backgroundImage = `url(${data?.strMealThumb})`;
  mealCategory.textContent = data.strCategory;
  mealName.textContent = data.strMeal;
  mealGuide.textContent = `${data.strInstructions.slice(0, 400)}...`;
  mealBlogLink.setAttribute("href", data.strSource);
}

async function getRecipes() {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata",
    { method: "GET" }
  );

  const data = await response.json();

  //   displayRecipe(data.meals[0]);

  //   console.log(data);
  return data;
}

// getRecipes();

// --------------------------------CATEGORIES
interface CategoryList {
  categories: Category[];
}

interface Category {
  idCategory: string;
  strCategory: string;
  strCategoryDescription: string;
  strCategoryThumb: string;
}

function displayCategory(data: CategoryList) {
  // boxImg.setAttribute("src", info?.strMealThumb);
  //   console.log(data);

  let dataSpliced = data.categories?.splice(5, 8);
  dataSpliced.forEach((item) => {
    // const html = `

    // <div class=" h-64 w-[11rem] flex flex-col justify-end items-center pb-4  rounded-md bg-center bg-no-repeat bg-cover bg-slate-100 "
    //     style="background-image: url('${item.strCategoryThumb}');">
    //     <div class="w-[100px] p-1 rounded-2xl bg-gray-300 text-center text-xs uppercase font-bold">
    //         ${item.strCategory}
    //     </div>
    // </div>

    // `;

    const categoryHtml = `
    <div class="h-20 w-full bg-gray-200 rounded-md bg-center bg-no-repeat bg-cover flex flex-col justify-end items-center pb-4 "
    style="background-image: url('${item.strCategoryThumb}')">

    <div
        class="w-[90px] p-1 rounded-2xl bg-slate-500 text-center text-xs uppercase font-bold text-slate-200 ">
        ${item.strCategory}
    </div>
</div>

    `;

    // cateBox.innerHTML = html
    cateBox.insertAdjacentHTML("afterbegin", categoryHtml);
  });
}
async function getCategories() {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/categories.php",
    { method: "GET" }
  );

  const data = await response.json();

  displayCategory(data);
  return data;
}

getCategories();

// =============================
// GET MEAL BY NAME
// ============================
async function getMeal() {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/random.php",
    { method: "GET" }
  );

  const data = await response.json();

  displayRecipe(data);
  // console.log(data)
  return data;
}

getMeal();

// ==========================

// =============================
async function getMealByCategory() {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood",
    { method: "GET" }
  );

  const response2 = await fetch(
    "https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772",
    { method: "GET" }
  );

  const data = await response.json();
  const data2 = await response2.json();

  // displayRecipe(data);
  // console.log(data)
  // console.log(data2)

  return data;
}

//   getMealByCategory();
