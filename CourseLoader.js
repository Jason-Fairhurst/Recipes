let listProductHTML = document.querySelector(".Courses");
let listAllItems = {};
let courseOptions = [];
let courseRecipesHTML = ``;

initAppHome()

function initAppHome() {
    fetch(`Recipes.json`)
        .then(response => response.json())
        .then(data => {
            listAllItems = data;
            addDataToHomeHTML();
        });
}

function addDataToHomeHTML() {
    //Gets a list of all courseOptions
    courseOptions = Object.keys(listAllItems);
    var numberOfCourses = courseOptions.length;
    var course = "";


    for (var i = 0; i < numberOfCourses; i++) {
        course = courseOptions[i];
        courseRecipesHTML = ``;
        for (var j = 0; j < Object.keys(listAllItems[course]).length; j++) {
            let recipeItem = Object.keys(listAllItems[course])[j];
            let recipeItemSpace = recipeItem.replaceAll("_"," ");
            let recipeItemImage = listAllItems[course][recipeItem].ImageLocation;
            
            courseRecipesHTML += `<li>
                                    <a href="Recipes.html?CourseName=${course}&RecipeName=${recipeItem}" class="RecipeLink">
                                        <img src="${recipeItemImage}" alt="${recipeItemSpace}">
                                        ${recipeItemSpace}
                                    </a>
                                    </li>`;
        };
        listProductHTML.innerHTML += `
        <article class="${course}">
            <button class="accordion">${course}</button>
                <div class="panel">
                    <ul>
                        ${courseRecipesHTML}
                    </ul>
                </div>
            </article>`;
    }

    accordion();
}