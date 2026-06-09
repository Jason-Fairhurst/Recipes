function accordion() {
  var acc = document.querySelectorAll(".accordion");
  acc.forEach(accordion => {
    accordion.addEventListener("click", () => {
      var panel = accordion.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  });
}
