var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var box = document.querySelector(".box");
var boxImg = document.querySelector(".img-box");
var randomBox = document.querySelector(".random-box");
var cateBox = document.querySelector(".category-box");
var categoryListBox = document.querySelector(".s-category-box");
var categoryName = document.querySelector("s-category-name");
var moreDisplay = document.querySelector(".recipe-display-box");
var mealImage = document.querySelector("#meal-img-box");
var mealCategory = document.querySelector(".meal-category");
var mealName = document.querySelector(".meal-name");
var mealGuide = document.querySelector(".meal-guide");
var mealBlogLink = document.querySelector(".meal-src");
// for the two random meals
var rdImgEl1 = document.querySelector(".rd-img-el1");
var rdCateEl1 = document.querySelector(".rd-cat-el1");
var rdNameEl1 = document.querySelector(".rd-name-el1");
// -
var rdImgEl2 = document.querySelector(".rd-img-el2");
var rdCateEl2 = document.querySelector(".rd-cat-el2");
var rdNameEl2 = document.querySelector(".rd-name-el2");
// for search
var searchInput = document.querySelector("#search-input");
var searchBtn = document.querySelector("#search-btn");
var searchDisplayBox = document.querySelector(".search-result-box");
var formBox = document.querySelector("#form-box");
var sBox = document.querySelector(".s-box");
var itemName = document.querySelector(".item-name");
var detailImage = document.querySelector("#item-img-box");
var itemMethod = document.querySelector(".item-method");
var itemIngredient = document.querySelector(".item-ingredient");
var itemVideo = document.querySelector(".item-video");
// =======-----------------------------
function displayRecipe(info) {
    //   boxImg.setAttribute("src", info?.strMealThumb);
    var _a;
    // console.log(info.meals[0]);
    var data = info.meals[0];
    if (!data.strInstructions || !data.strInstructions) {
        return;
    }
    var guide = (_a = data.strInstructions) === null || _a === void 0 ? void 0 : _a.slice(0, 300).replace(/\./g, ". <br>-");
    mealImage.style.backgroundImage = "url(".concat(data === null || data === void 0 ? void 0 : data.strMealThumb, ")");
    mealCategory.textContent = data.strCategory;
    mealName.textContent = data.strMeal;
    mealGuide.innerHTML = "".concat(guide, "...");
    mealBlogLink.setAttribute("href", data.strSource);
}
function displayRandomRecipe(info, imgEl, caEl, nameEl) {
    var data = info.meals[0];
    // console.log(data.strCategory);
    imgEl.style.backgroundImage = "url(".concat(data === null || data === void 0 ? void 0 : data.strMealThumb, ")");
    caEl.textContent = data.strCategory;
    nameEl.textContent = data.strMeal;
    imgEl.setAttribute("href", data.strSource);
}
function getRecipes() {
    return __awaiter(this, void 0, void 0, function () {
        var response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata", { method: "GET" })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    //   displayRecipe(data.meals[0]);
                    //   console.log(data);
                    return [2 /*return*/, data];
            }
        });
    });
}
// -----------------------GET SINGLE CATEGORY
function getSingleCategory(category) {
    var _a;
    return __awaiter(this, void 0, void 0, function () {
        var response, data, err_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    randomBox.classList.add("hidden");
                    categoryListBox.classList.remove("hidden");
                    categoryListBox.classList.add("flex");
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=".concat(category), { method: "GET" })];
                case 2:
                    response = _b.sent();
                    return [4 /*yield*/, response.json()];
                case 3:
                    data = _b.sent();
                    console.log(data);
                    (_a = data.meals) === null || _a === void 0 ? void 0 : _a.forEach(function (meal) {
                        var mealLink = document.createElement("a");
                        mealLink.setAttribute("onclick", "displaySingleSearchDetails('".concat(meal.idMeal, "')"));
                        var html = "\n        <div\n        class=\"h-60 w-48 bg-slate-500 rounded-md bg-center bg-no-repeat bg-cover flex flex-col justify-end items-center pb-4 hover:cursor-pointer mb:h-72 sm:h-52\"\n        style=\"background-image: url('".concat(meal.strMealThumb, "')\"\n        >\n            <div\n              class=\"w-[85%] p-[2px]  rounded-xl bg-gray-100 text-center text-xs capitalize font-[400] text-gray-900\n               \"\n            >\n              ").concat(meal.strMeal, "\n            </div>\n        </div>\n\n      ");
                        mealLink.innerHTML = html;
                        categoryListBox.appendChild(mealLink);
                    });
                    categoryName.textContent = category;
                    return [2 /*return*/, data];
                case 4:
                    err_1 = _b.sent();
                    console.log(err_1.message);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
function displayCategory(data) {
    // boxImg.setAttribute("src", info?.strMealThumb);
    //   console.log(data);
    var _a;
    if (!data.categories || !data.categories.length) {
        return;
    }
    var dataSpliced = (_a = data.categories) === null || _a === void 0 ? void 0 : _a.slice(0, 14);
    dataSpliced.forEach(function (item) {
        var categoryItem = document.createElement("a");
        categoryItem.setAttribute("onclick", "getSingleCategory('".concat(item.strCategory, "')"));
        var categoryHtml = "\n    <div class=\"h-[4rem] w-full bg-gray-200 rounded-md bg-center bg-no-repeat bg-cover flex flex-col justify-center items-end pr-3 hover:cursor-pointer\"\n        style=\"background-image: url('".concat(item.strCategoryThumb, "')\">\n\n        <div\n            class=\"w-[fit] py-[1.5px] px-3 rounded-xl bg-gray-100 text-center text-[0.65rem] uppercase font-[400] text-gray-900 \">\n            ").concat(item.strCategory, "\n        </div>\n    </div>\n\n    ");
        categoryItem.innerHTML = categoryHtml;
        cateBox.appendChild(categoryItem);
        // cateBox.insertAdjacentHTML("afterbegin", categoryHtml);
    });
}
// --------------------------------------
function getCategories() {
    return __awaiter(this, void 0, void 0, function () {
        var response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("https://www.themealdb.com/api/json/v1/1/categories.php", { method: "GET" })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    displayCategory(data);
                    // console.log(data)
                    return [2 /*return*/, data];
            }
        });
    });
}
// =============================
// GET RANDOM MEAL
// ============================
function getMeal() {
    return __awaiter(this, void 0, void 0, function () {
        var response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("https://www.themealdb.com/api/json/v1/1/random.php", { method: "GET" })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    displayRecipe(data);
                    // console.log(data);
                    return [2 /*return*/, data];
            }
        });
    });
}
// =============================
// GET RANDOM-2 MEAL
// ============================
function getMeal2() {
    return __awaiter(this, void 0, void 0, function () {
        var response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("https://www.themealdb.com/api/json/v1/1/random.php", { method: "GET" })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    displayRandomRecipe(data, rdImgEl1, rdCateEl1, rdNameEl1);
                    // console.log(data);
                    return [2 /*return*/, data];
            }
        });
    });
}
// =============================
// GET RANDOM-3 MEAL
// ============================
function getMeal3() {
    return __awaiter(this, void 0, void 0, function () {
        var response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("https://www.themealdb.com/api/json/v1/1/random.php", { method: "GET" })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    displayRandomRecipe(data, rdImgEl2, rdCateEl2, rdNameEl2);
                    // console.log(data);
                    return [2 /*return*/, data];
            }
        });
    });
}
// --------------------------------
function displaySingleSearchDetails(id) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function () {
        var response, dataResponse, data, slicedLink, guideWithNewLines, items, err_2;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    +(
                    // console.log(id);
                    randomBox.classList.add("hidden"));
                    categoryListBox.classList.add("hidden");
                    sBox.classList.remove("hidden");
                    sBox.setAttribute("id", id);
                    _c.label = 1;
                case 1:
                    _c.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=".concat(id), { method: "GET" })];
                case 2:
                    response = _c.sent();
                    return [4 /*yield*/, response.json()];
                case 3:
                    dataResponse = _c.sent();
                    data = dataResponse === null || dataResponse === void 0 ? void 0 : dataResponse.meals[0];
                    // console.log(data);
                    if (!data.strYoutube || !data.strYoutube.length) {
                        // return;
                        itemVideo.setAttribute("src", "");
                    }
                    slicedLink = (_a = data.strYoutube) === null || _a === void 0 ? void 0 : _a.slice(32, 43);
                    guideWithNewLines = (_b = data.strInstructions) === null || _b === void 0 ? void 0 : _b.replace(/\./g, ". <br>-");
                    items = "\n  <ul class=\"flex flex-col gap-3\">\n    <li> ".concat(data.strMeasure1, " ").concat(data.strIngredient1, " </li>\n    <li> ").concat(data.strMeasure2, " ").concat(data.strIngredient2, " </li>\n    <li> ").concat(data.strMeasure3, " ").concat(data.strIngredient3, " </li>\n    <li> ").concat(data.strMeasure4, " ").concat(data.strIngredient4, " </li>\n    <li> ").concat(data.strMeasure5, " ").concat(data.strIngredient5, " </li>\n    <li> ").concat(data.strMeasure6, " ").concat(data.strIngredient6, " </li>\n    <li> ").concat(data.strMeasure7, " ").concat(data.strIngredient7, " </li>\n    <li> ").concat(data.strMeasure8, " ").concat(data.strIngredient8, " </li>\n    <li> ").concat(data.strMeasure9, " ").concat(data === null || data === void 0 ? void 0 : data.strIngredient9, " </li>\n    <li> ").concat(data.strMeasure10, " ").concat(data.strIngredient10, " </li>\n    <li> ").concat(data.strMeasure11, " ").concat(data.strIngredient11, " </li>\n    <li> ").concat(data.strMeasure12, " ").concat(data.strIngredient12, " </li>\n    <li> ").concat(data.strMeasure13, " ").concat(data.strIngredient13, " </li> \n    <li> ").concat(data.strMeasure14, " ").concat(data.strIngredient14, " </li>\n    <li> ").concat(data.strMeasure15, " ").concat(data.strIngredient15, " </li>\n     <li> ").concat(data === null || data === void 0 ? void 0 : data.strMeasure16, " ").concat(data.strIngredient16, " </li>\n    <li> ").concat(data === null || data === void 0 ? void 0 : data.strMeasure17, " ").concat(data.strIngredient17, " </li>\n     <li> ").concat(data === null || data === void 0 ? void 0 : data.strMeasure18, " ").concat(data.strIngredient18, " </li>\n    <li> ").concat(data === null || data === void 0 ? void 0 : data.strMeasure19, " ").concat(data.strIngredient19, " </li> \n    <li> ").concat(data === null || data === void 0 ? void 0 : data.strMeasure20, " ").concat(data.strIngredient20, " </li>\n\n  </ul>\n  ");
                    itemName.textContent = data.strMeal;
                    detailImage.style.backgroundImage = "url(".concat(data === null || data === void 0 ? void 0 : data.strMealThumb, ")");
                    itemMethod.innerHTML = guideWithNewLines;
                    itemVideo.setAttribute("src", "https://www.youtube.com/embed/".concat(slicedLink));
                    // itemBox.innerHTML = items
                    itemIngredient.innerHTML = items;
                    // console.log(slicedLink);
                    return [2 /*return*/, data];
                case 4:
                    err_2 = _c.sent();
                    console.log(err_2.message);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
function displayResult(data) {
    var _a;
    if (data.meals == null) {
        console.log("no results");
    }
    (_a = data.meals) === null || _a === void 0 ? void 0 : _a.forEach(function (meal) {
        var item = document.createElement("a");
        item.setAttribute("onclick", "displaySingleSearchDetails('".concat(meal.idMeal, "')"));
        // item.setAttribute('onclick', `displaySingleSearchDetails('${meal.idMeal}')`)
        var text = "\n    <a href=\"#".concat(Number(meal.idMeal), "\">\n    <div class=\"s-box pt-2 pb-2\">\n    ").concat(meal.strMeal, "</div>\n    </a>\n    ");
        item.innerHTML = text;
        searchDisplayBox.appendChild(item);
    });
    // console.log(data)
    var html = "\n  <div class=\"h-80 w-full bg-slate-500 rounded-md bg-center bg-no-repeat bg-cover flex flex-col justify-end items-center pb-4 mb:max-sm:h-72\"\n  style=\"background-image: url('./src/images/img-1.jpg')\">\n\n\n    <div\n        class=\"w-[85%] h-20 p-1 rounded-md bg-gray-200 text-center text-xs capitalize relative\">\n        Breakfast\n\n        <div\n            class=\"w-[90px] p-1 rounded-2xl bg-slate-500 text-center text-xs uppercase font-bold text-slate-200 absolute top-[-1rem] left-1/3\">\n            Breakfast\n        </div>\n    </div>\n  </div>\n  ";
}
// -----------------------SEARCH MEAL
function searchMeal(e) {
    return __awaiter(this, void 0, void 0, function () {
        var searchValue, response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e.preventDefault();
                    searchValue = searchInput.value;
                    searchDisplayBox.classList.remove("hidden");
                    searchDisplayBox.classList.add("flex");
                    searchDisplayBox.classList.add("flex-col");
                    return [4 /*yield*/, fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=".concat(searchValue), { method: "GET" })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    displayResult(data);
                    // console.log(data);
                    return [2 /*return*/, data];
            }
        });
    });
}
// -------------------------
// getRecipes();
getCategories();
getMeal();
getMeal2();
getMeal3();
formBox.addEventListener("submit", searchMeal);
