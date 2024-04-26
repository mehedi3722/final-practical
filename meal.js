const loadMeals = (searchText) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => showMeals(data.meals));
}


const showMeals = (data) => {
    const mealContainer = document.getElementById('meals-container');
    mealContainer.innerHTML = '';
    data.forEach(element => {
        // console.log(element);
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col');
        mealDiv.innerHTML = `
        <div class="card h-100">
        <img src="${element.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${element.strMeal}</h5>
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
               <!-- Button trigger modal -->
        <button onclick="mealDetails(${element.idMeal})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Details
            </button>
        </div>
      </div>
        `

        mealContainer.appendChild(mealDiv);

        // console.log(element);
    });
}



const searchMeals = () => {
    const searchText = document.getElementById('search-field').value;
    loadMeals(searchText);
}


const mealDetails = idMeal => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    fetch(url)
        .then(res => res.json())
        .then(data => showMealDetails(data.meals[0]))
}



const showMealDetails = data => {
    const mealTitle = document.getElementById('meal-title')
    mealTitle.innerText = `${data.strMeal}`;
    const mealBodyDetails = document.getElementById('meal-body-details');
    mealBodyDetails.innerHTML = `
           <img class="img-fluid" src="${data.strMealThumb}"/>
    `
}

loadMeals('fish');