var axios = require("axios").default;


const recipe = process.argv[2]


var options = {
    method: 'GET',
    url: `https://recipesapi2.p.rapidapi.com/recipes/${recipe}`,
    params: { maxRecipes: '1' },
    headers: {
        'x-rapidapi-host': 'recipesapi2.p.rapidapi.com',
        'x-rapidapi-key': 'c94bdc0f9bmshbc7236941db8b8dp1307a5jsn3c7dc13612af'
    }
};

axios.request(options).then(function (response) {
    const data = response.data;
    const info = data.data
    console.log(info)
}).catch(function (error) {
    console.error(error);
});