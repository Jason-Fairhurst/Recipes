let navDropBtn = document.querySelector(".dropdown-content");

function navDropdown() {
    //Used for animation of mobile nav dropdown
    for (var i = 1; i <= 3; i++) {
        var bar = document.getElementsByClassName(`mobileBar${i}`)[0];
        bar.classList.toggle("change");
    }

    navDropBtn.classList.toggle("show");
}
