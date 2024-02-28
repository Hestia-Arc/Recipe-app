const box = document.querySelector(".box");
const boxImg = document.querySelector(".img-box");
const randomBox = document.querySelector(".random-box") as HTMLElement;
const cateBox = document.querySelector(".category-box") as HTMLElement;
const categoryListBox = document.querySelector(
  ".s-category-box"
) as HTMLElement;
const categoryName = document.querySelector("s-category-name") as HTMLElement;

const moreDisplay = document.querySelector(".recipe-display-box");

const mealImage = document.querySelector("#meal-img-box") as HTMLElement;
const mealCategory = document.querySelector(".meal-category") as HTMLElement;
const mealName = document.querySelector(".meal-name");
const mealGuide = document.querySelector(".meal-guide") as HTMLElement;
const mealBlogLink = document.querySelector(".meal-src") as HTMLElement;

// for the two random meals
const rdImgEl1 = document.querySelector(".rd-img-el1") as HTMLElement;
const rdCateEl1 = document.querySelector(".rd-cat-el1") ;
const rdNameEl1 = document.querySelector(".rd-name-el1");
// -
const rdImgEl2 = document.querySelector(".rd-img-el2") as HTMLElement;
const rdCateEl2 = document.querySelector(".rd-cat-el2") ;
const rdNameEl2 = document.querySelector(".rd-name-el2");

// for search
const searchInput = document.querySelector("#search-input") as HTMLInputElement;
const searchBtn = document.querySelector("#search-btn") as HTMLElement;
const searchDisplayBox = document.querySelector(
  ".search-result-box"
) as HTMLElement;
const formBox = document.querySelector("#form-box") as HTMLElement;

const sBox = document.querySelector(".s-box") as HTMLElement;
const itemName = document.querySelector(".item-name") as HTMLElement;
const detailImage = document.querySelector("#item-img-box") as HTMLElement;
const itemMethod = document.querySelector(".item-method") as HTMLElement;
const itemIngredient = document.querySelector(
  ".item-ingredient"
) as HTMLElement;
const itemVideo = document.querySelector(".item-video") as HTMLElement;

// --------------
interface RecipeBox {
  meals: Recipe[];
}

interface ResultBox {
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
  strInstructions: string;
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

  // console.log(info.meals[0]);

  const data = info.meals[0];

  if (!data.strInstructions || !data.strInstructions) {
    return;
  }

  let guide = data.strInstructions?.slice(0, 300).replace(/\./g, ". <br>-");

  mealImage.style.backgroundImage = `url(${data?.strMealThumb})`;
  mealCategory.textContent = data.strCategory;
  mealName.textContent = data.strMeal;
  mealGuide.innerHTML = `${guide}...`;

  mealBlogLink.setAttribute("href", data.strSource);
}

function displayRandomRecipe(info: RecipeBox, imgEl, caEl, nameEl ) {
  const data = info.meals[0];
    // console.log(data.strCategory);

  imgEl.style.backgroundImage = `url(${data?.strMealThumb})`;
  caEl.textContent = data.strCategory;
  nameEl.textContent = data.strMeal;

  imgEl.setAttribute("href", data.strSource);
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

// --------------------------------CATEGORIES
interface CategoryList {
  categories: Category[];
}

interface SingleCategoryList {
  meals: SingleCategory[];
}

interface SingleCategory {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
}

interface Category {
  idCategory: string;
  strCategory: string;
  strCategoryDescription: string;
  strCategoryThumb: string;
}

// -----------------------GET SINGLE CATEGORY
async function getSingleCategory(category: string) {
  randomBox.classList.add("hidden");
  categoryListBox.classList.remove("hidden");
  categoryListBox.classList.add("flex");


  // sBox.setAttribute("id", id);

  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`,
      { method: "GET" }
    );

    const data: SingleCategoryList = await response.json();

    console.log(data);

    data.meals?.forEach((meal) => {
      let mealLink = document.createElement("a");
      mealLink.setAttribute(
        "onclick",
        `displaySingleSearchDetails('${meal.idMeal}')`
      );
      let html = `
        <div
        class="h-60 w-48 bg-slate-500 rounded-md bg-center bg-no-repeat bg-cover flex flex-col justify-end items-center pb-4 hover:cursor-pointer mb:h-72 sm:h-52"
        style="background-image: url('${meal.strMealThumb}')"
        >
            <div
              class="w-[85%] p-[2px]  rounded-xl bg-gray-100 text-center text-xs capitalize font-[400] text-gray-900
               "
            >
              ${meal.strMeal}
            </div>
        </div>

      `;

      mealLink.innerHTML = html;
      categoryListBox.appendChild(mealLink);

    });

    categoryName.textContent = category

    return data;
  } catch (err) {
    console.log(err.message);
  }
}

function displayCategory(data: CategoryList) {
  // boxImg.setAttribute("src", info?.strMealThumb);
  //   console.log(data);

  if (!data.categories || !data.categories.length) {
    return;
  }

  let dataSpliced = data.categories?.slice(0, 14);

  dataSpliced.forEach((item) => {
    let categoryItem = document.createElement("a");
    categoryItem.setAttribute(
      "onclick",
      `getSingleCategory('${item.strCategory}')`
    );

    const categoryHtml = `
    <div class="h-[4rem] w-full bg-gray-200 rounded-md bg-center bg-no-repeat bg-cover flex flex-col justify-center items-end pr-3 hover:cursor-pointer"
        style="background-image: url('${item.strCategoryThumb}')">

        <div
            class="w-[fit] py-[1.5px] px-3 rounded-xl bg-gray-100 text-center text-[0.65rem] uppercase font-[400] text-gray-900 ">
            ${item.strCategory}
        </div>
    </div>

    `;

    categoryItem.innerHTML = categoryHtml;
    cateBox.appendChild(categoryItem);
    // cateBox.insertAdjacentHTML("afterbegin", categoryHtml);
  });
}

// --------------------------------------
async function getCategories() {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/categories.php",
    { method: "GET" }
  );

  const data = await response.json();

  displayCategory(data);
  // console.log(data)
  return data;
}

// =============================
// GET RANDOM MEAL
// ============================
async function getMeal() {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/random.php",
    { method: "GET" }
  );

  const data = await response.json();

  displayRecipe(data);
  // console.log(data);
  return data;
}

// =============================
// GET RANDOM-2 MEAL
// ============================
async function getMeal2() {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/random.php",
    { method: "GET" }
  );

  const data = await response.json();

  displayRandomRecipe(data, rdImgEl1, rdCateEl1, rdNameEl1);
  // console.log(data);
  return data;
}

// =============================
// GET RANDOM-3 MEAL
// ============================
async function getMeal3() {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/random.php",
    { method: "GET" }
  );

  const data = await response.json();

  displayRandomRecipe(data, rdImgEl2, rdCateEl2, rdNameEl2);
  // console.log(data);
  return data;
}


// --------------------------------
async function displaySingleSearchDetails(id: string) {
  +(
    // console.log(id);
    randomBox.classList.add("hidden")
  );
  categoryListBox.classList.add("hidden");
  sBox.classList.remove("hidden");
  sBox.setAttribute("id", id);

  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
      { method: "GET" }
    );

    const dataResponse: RecipeBox = await response.json();

    let data = dataResponse?.meals[0];
    // console.log(data);

    if (!data.strYoutube || !data.strYoutube.length) {
      // return;

      itemVideo.setAttribute("src", "");
    }

    // if (!data.strInstructions || !data.strInstructions.length) {
    //   return;
    // }

    let slicedLink = data.strYoutube?.slice(32, 43);
    let guideWithNewLines = data.strInstructions?.replace(/\./g, ". <br>-");
    let items = `
  <ul class="flex flex-col gap-3">
    <li> ${data.strMeasure1} ${data.strIngredient1} </li>
    <li> ${data.strMeasure2} ${data.strIngredient2} </li>
    <li> ${data.strMeasure3} ${data.strIngredient3} </li>
    <li> ${data.strMeasure4} ${data.strIngredient4} </li>
    <li> ${data.strMeasure5} ${data.strIngredient5} </li>
    <li> ${data.strMeasure6} ${data.strIngredient6} </li>
    <li> ${data.strMeasure7} ${data.strIngredient7} </li>
    <li> ${data.strMeasure8} ${data.strIngredient8} </li>
    <li> ${data.strMeasure9} ${data?.strIngredient9} </li>
    <li> ${data.strMeasure10} ${data.strIngredient10} </li>
    <li> ${data.strMeasure11} ${data.strIngredient11} </li>
    <li> ${data.strMeasure12} ${data.strIngredient12} </li>
    <li> ${data.strMeasure13} ${data.strIngredient13} </li> 
    <li> ${data.strMeasure14} ${data.strIngredient14} </li>
    <li> ${data.strMeasure15} ${data.strIngredient15} </li>
     <li> ${data?.strMeasure16} ${data.strIngredient16} </li>
    <li> ${data?.strMeasure17} ${data.strIngredient17} </li>
     <li> ${data?.strMeasure18} ${data.strIngredient18} </li>
    <li> ${data?.strMeasure19} ${data.strIngredient19} </li> 
    <li> ${data?.strMeasure20} ${data.strIngredient20} </li>

  </ul>
  `;

    itemName.textContent = data.strMeal;
    detailImage.style.backgroundImage = `url(${data?.strMealThumb})`;
    itemMethod.innerHTML = guideWithNewLines;
    itemVideo.setAttribute(
      "src",
      `https://www.youtube.com/embed/${slicedLink}`
    );
    // itemBox.innerHTML = items
    itemIngredient.innerHTML = items;

    // console.log(slicedLink);
    return data;
  } catch (err) {
    console.log(err.message);
  }
}

function displayResult(data: ResultBox) {
  if (data.meals == null) {
    console.log("no results");
  }

  data.meals?.forEach((meal) => {
    let item = document.createElement("a");
    item.setAttribute(
      "onclick",
      `displaySingleSearchDetails('${meal.idMeal}')`
    );

    // item.setAttribute('onclick', `displaySingleSearchDetails('${meal.idMeal}')`)

    let text = `
    <a href="#${Number(meal.idMeal)}">
    <div class="s-box pt-2 pb-2">
    ${meal.strMeal}</div>
    </a>
    `;

    item.innerHTML = text;

    searchDisplayBox.appendChild(item);
  });

  // console.log(data)
  const html = `
  <div class="h-80 w-full bg-slate-500 rounded-md bg-center bg-no-repeat bg-cover flex flex-col justify-end items-center pb-4 mb:max-sm:h-72"
  style="background-image: url('./src/images/img-1.jpg')">


    <div
        class="w-[85%] h-20 p-1 rounded-md bg-gray-200 text-center text-xs capitalize relative">
        Breakfast

        <div
            class="w-[90px] p-1 rounded-2xl bg-slate-500 text-center text-xs uppercase font-bold text-slate-200 absolute top-[-1rem] left-1/3">
            Breakfast
        </div>
    </div>
  </div>
  `;
}

// -----------------------SEARCH MEAL
async function searchMeal(e) {
  e.preventDefault();
  let searchValue = searchInput.value;
  searchDisplayBox.classList.remove("hidden");
  searchDisplayBox.classList.add("flex");
  searchDisplayBox.classList.add("flex-col");

  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`,
    { method: "GET" }
  );

  const data = await response.json();
  displayResult(data);
  // console.log(data);

  return data;
}

// -------------------------
// getRecipes();
getCategories();
getMeal();
getMeal2();
getMeal3();
formBox.addEventListener("submit", searchMeal);
