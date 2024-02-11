const recipe = 'soups'

async function getRecipes() {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php', {method: "GET"})

    const data = await response.json()

    console.log(data)
    return data
}

getRecipes()