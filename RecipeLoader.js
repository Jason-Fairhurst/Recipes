let listProductHTML = document.querySelector(".main-container");
let listAllItems = {};
let imageLocation = "";
let ingredients = [];
let instructions = [];

initApp("Chicken_and_Sweetcorn_Soup");

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
        })
        .catch(error => location.replace("index.html"));
}

//Add recipe to page
function addDataToHTML(Recipe) {

    var ingredientsHTML = ``;
    var instructionsHTML = ``;

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
            <img class="RecipeImg" src=${imageLocation} alt=${Recipe}>
            <h2 class="RecipeName">${Recipe.replaceAll("_", " ")}</h2>
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
