let listProductHTML = document.querySelector(".main-container");
let listProductNavHTML = document.querySelector(".dropdown-Course");
let listAllItems = {};
let imageLocation = "";
let ingredients = [];
let instructions = [];
let courseOptions = [];
let courseRecipesHTML = ``;

initApp();

function initApp() {
    let URLparameters = new URLSearchParams(window.location.search);
    let course = URLparameters.get("CourseName");
    let recipe = URLparameters.get("RecipeName");

    fetch(`Recipes.json`)
        .then(response => response.json())
        .then(data => {
            listAllItems = data;

            imageLocation = listAllItems[course][recipe].ImageLocation;
            ingredients = listAllItems[course][recipe].Ingredients;
            instructions = listAllItems[course][recipe].Instructions;

            addDataToHTML(recipe);
            addDataToNavBar();
        })
    //.catch(error => location.replace("index.html"));
}

//Add recipe to page
function addDataToHTML(Recipe) {

    var ingredientsHTML = ``;
    var instructionsHTML = ``;
    let recipeItemSpace = Recipe.replaceAll("_", " ");

    ingredients.forEach((ingredient, index) => {
        ingredientsHTML += `
            <li style="list-style-type: none;">
                <span class="checkbox-container">
                    <input type="checkbox" id="checkbox-${index}" class="checkbox" aria-label=${ingredient}>
                    <label for="checkbox-${index}" class="checkbox-label">
                        ${ingredient}
                    </label>
                </span>
            </li>`;
    });

    instructions.forEach(instructions => {
        instructionsHTML += `
            <li>${instructions}</li>
        `;
    });

    listProductHTML.innerHTML += `
        <section class="RecipeNameImg">
            <img class="RecipeImg" src="${imageLocation}" alt="${recipeItemSpace}">
            <h2 class="RecipeName">${recipeItemSpace}</h2>
        </section>
        <section class="Ingredients">
            <h3>Ingredients</h3>
            <div>
                <ul>
                    ${ingredientsHTML}
                </ul>
            </div>
        </section>
        <section class="Instructions">
            <h3>Instructions</h3>
            <div>
                <ol>
                    ${instructionsHTML}
                </ol>
            </div>
        </section>
        `;
}


function addDataToNavBar() {
    //Gets a list of all courseOptions
    courseOptions = Object.keys(listAllItems);
    var numberOfCourses = courseOptions.length;
    var course = "";

    for (var i = 0; i < numberOfCourses; i++) {
        course = courseOptions[i];
        courseRecipesHTML = ``;
        for (var j = 0; j < Object.keys(listAllItems[course]).length; j++) {
            courseRecipesHTML += `<a href="Recipes.html?CourseName=${course}&RecipeName=${Object.keys(listAllItems[course])[j]}">${Object.keys(listAllItems[course])[j].replaceAll("_", " ")}</a>`;
        };
        listProductNavHTML.innerHTML += `
        <button id="${course}DropDownButton">
            ${course} <i class="fa fa-caret-down show"></i><i class="fa fa-caret-up"></i>
        </button>
        <div id="${course}Dropdown" class="dropdown-Recipes">
            ${courseRecipesHTML}
        </div>`;
    }

    let currentButton = document.querySelectorAll("[id$='DropDownButton']");
    currentButton.forEach(currentButton => {
        ['click', 'keypress'].forEach(evnt => {
            currentButton.addEventListener(evnt, (event) => {
                if (event.type == 'click') {
                    currentButton.nextElementSibling.classList.toggle("show");
                    currentButton.querySelector(".fa-caret-down").classList.toggle("show");
                    currentButton.querySelector(".fa-caret-up").classList.toggle("show");
                }
            });
        });
    });
}