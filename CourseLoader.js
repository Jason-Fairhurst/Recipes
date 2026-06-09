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
        var course = courseOptions[i];
        courseRecipesHTML = ``;
        for (var j = 0; j < Object.keys(listAllItems[course]).length; j++) {
            courseRecipesHTML += `<li><a href="Recipes.html">${Object.keys(listAllItems[course])[j]}</a></li>`;
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