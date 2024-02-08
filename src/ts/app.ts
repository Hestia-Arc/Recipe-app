const recipe = 'soups'

async function getRecipes() {
    const response = await fetch('https://www.themealdb.com/api/json/v2/', {method: "GET"})

    const data = await response.json()

    console.log(data)
}

getRecipes()