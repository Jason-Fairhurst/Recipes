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
//Dropdown shows when clicked
function dropdown() {
    document.getElementById("leagueDropdown").classList.toggle("show");
    document.getElementsByClassName("fa-caret-down")[0].classList.toggle("show");
    document.getElementsByClassName("fa-caret-up")[0].classList.toggle("show");
}

function navBarReset() {
    if (document.getElementById("leagueDropdown").classList.contains('show')) {
        document.getElementById("leagueDropdown").classList.remove('show');
        document.getElementsByClassName("fa-caret-down")[0].classList.add('show');
        document.getElementsByClassName("fa-caret-up")[0].classList.remove('show');
    }
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        navBarReset()
    }
}

window.addEventListener("resize", navBarReset);
*/