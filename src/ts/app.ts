const box = document.querySelector(".box");
const boxImg = document.querySelector(".img-box");
const cateBox = document.querySelector('.category-box')


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
  strMeal: "Spicy Arrabiata Penne";
  strMealThumb: string;
  strMeasure1: "1 pound";
  strMeasure2: "1/4 cup";
  strMeasure3: "3 cloves";
  strMeasure4: "1 tin ";
  strMeasure5: "1/2 teaspoon";
  strMeasure6: "1/2 teaspoon";
  strMeasure7: "6 leaves";
  strMeasure8: "spinkling";
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
  strSource: null;
  strTags: "Pasta,Curry";
  strYoutube: string;
}

// =======-----------------------------
function displayRecipe(info: Recipe) {
  boxImg.setAttribute("src", info?.strMealThumb);

  console.log(info?.strMealThumb);
}

async function getRecipes() {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata",
    { method: "GET" }
  );

  const data = await response.json();

  //   displayRecipe(data.meals[0]);

  console.log(data);
  return data;
}

getRecipes();

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
  console.log(data);

  data?.categories.forEach(item => {
    
    const html = `

    <div class=" h-72 w-[12rem] flex flex-col justify-end items-center pb-4 border-solid border-black border-1 rounded-md bg-center bg-no-repeat bg-cover "
        style="background-image: url('${item.strCategoryThumb}');">
        <div class="w-[100px] p-1 rounded-2xl bg-gray-200 text-center text-xs uppercase font-bold">
            ${item.strCategory}
        </div>
    </div>
    
    `

    // cateBox.innerHTML = html
    cateBox.insertAdjacentHTML("afterbegin", html);
  })
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
