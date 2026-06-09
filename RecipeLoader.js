let listProductHTML = document.querySelector(".main-container");
let listAllItems = {};
let imageLocation = "";
let ingredients = [];
let instructions = [];

initApp("Chicken_and_Sweetcorn_Soup");

function initApp(Recipe) {
    fetch(`Recipes.json`)
        .then(response => response.json())
        .then(data => {
            listAllItems = data;
            // listAllItems[Object.keys(listAllItems)[0]] returns Chicken_and_Sweetcorn_Soup section
            imageLocation = listAllItems.Starters.Chicken_and_Sweetcorn_Soup.ImageLocation;
            ingredients = listAllItems.Starters.Chicken_and_Sweetcorn_Soup.Ingredients;
            instructions = listAllItems.Starters.Chicken_and_Sweetcorn_Soup.Instructions;

            addDataToHTML();
        });
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
            <img class="RecipeImg" src=${imageLocation} alt="">
            <h2 class="RecipeName">Chicken and Sweetcorn Soup</h2>
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
