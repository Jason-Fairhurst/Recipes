let navDropBtn = document.querySelector(".dropdown-content");

function navDropdown() {
    //Used for animation of mobile nav dropdown
    for (var i = 1; i <= 3; i++) {
        var bar = document.getElementsByClassName(`mobileBar${i}`)[0];
        bar.classList.toggle("change");
    }

    navDropBtn.classList.toggle("show");
}


/*
let courseButton = document.getElementById(`StartersButton`);
//['click', 'keypress'].forEach(evnt => {
    courseButton.addEventListener('click', () => {
        //alert("test");
        //if (event.key === 'Enter' || event.type == 'click') {
            courseButton.nextElementSibling.querySelector(".dropdown-Recipes").classList.toggle("show");
            courseButton.querySelector(".fa-caret-down").classList.toggle("show");
            courseButton.querySelector(".fa-caret-up").classList.toggle("show");
        //}
    });
//});*/

function recipeDrop() {
    let currentButton = document.getElementById(document.activeElement.id);

    currentButton.nextElementSibling.classList.toggle("show");
    currentButton.querySelector(".fa-caret-down").classList.toggle("show");
    currentButton.querySelector(".fa-caret-up").classList.toggle("show");
}