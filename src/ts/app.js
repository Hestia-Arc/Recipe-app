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
var mealImage = document.querySelector("#meal-img-box");
var cateBox = document.querySelector(".category-box");
var moreDisplay = document.querySelector(".recipe-display-box");
var mealCategory = document.querySelector(".meal-category");
var mealName = document.querySelector(".meal-name");
var mealGuide = document.querySelector(".meal-guide");
var mealBlogLink = document.querySelector(".meal-src");
// =======-----------------------------
function displayRecipe(info) {
    //   boxImg.setAttribute("src", info?.strMealThumb);
    //   console.log(info?.strMealThumb);
    var data = info.meals[0];
    mealImage.style.backgroundImage = "url(".concat(data === null || data === void 0 ? void 0 : data.strMealThumb, ")");
    mealCategory.textContent = data.strCategory;
    mealName.textContent = data.strMeal;
    mealGuide.textContent = "".concat(data.strInstructions.slice(0, 400), "...");
    mealBlogLink.setAttribute('href', data.strSource);
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
function displayCategory(data) {
    // boxImg.setAttribute("src", info?.strMealThumb);
    //   console.log(data);
    var _a;
    var dataSpliced = (_a = data.categories) === null || _a === void 0 ? void 0 : _a.splice(5, 8);
    dataSpliced.forEach(function (item) {
        // const html = `
        // <div class=" h-64 w-[11rem] flex flex-col justify-end items-center pb-4  rounded-md bg-center bg-no-repeat bg-cover bg-slate-100 "
        //     style="background-image: url('${item.strCategoryThumb}');">
        //     <div class="w-[100px] p-1 rounded-2xl bg-gray-300 text-center text-xs uppercase font-bold">
        //         ${item.strCategory}
        //     </div>
        // </div>
        // `;
        var categoryHtml = "\n    <div class=\"h-20 w-full bg-slate-100 rounded-full bg-center bg-no-repeat bg-cover flex flex-col justify-end items-center pb-2 \"\n        style=\"background-image: url('".concat(item.strCategoryThumb, "')\">\n\n            <div\n                class=\"w-[90px] p-1 rounded-2xl bg-slate-400 text-center text-xs uppercase font-bold text-slate-200 \">\n                ").concat(item.strCategory, "\n            </div>\n        </div>\n    \n    ");
        // cateBox.innerHTML = html
        cateBox.insertAdjacentHTML("afterbegin", categoryHtml);
    });
}
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
                    return [2 /*return*/, data];
            }
        });
    });
}
getCategories();
// =============================
// GET MEAL BY NAME
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
                    // console.log(data)
                    return [2 /*return*/, data];
            }
        });
    });
}
getMeal();
// ==========================
// =============================
function getMealByCategory() {
    return __awaiter(this, void 0, void 0, function () {
        var response, response2, data, data2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood", { method: "GET" })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772", { method: "GET" })];
                case 2:
                    response2 = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 3:
                    data = _a.sent();
                    return [4 /*yield*/, response2.json()];
                case 4:
                    data2 = _a.sent();
                    // displayRecipe(data);
                    // console.log(data)
                    // console.log(data2)
                    return [2 /*return*/, data];
            }
        });
    });
}
//   getMealByCategory();
