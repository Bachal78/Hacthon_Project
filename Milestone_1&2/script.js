var toggleButton = document.getElementById("toggle-skills");
var skillS = document.getElementById("Skills");
var buttonExperience = document.getElementById("Button-toggle");
var ButtonS = document.getElementById("work-experience");
toggleButton.addEventListener("click", function () {
    if (skillS.style.display === "none") {
        skillS.style.display = "block";
    }
    else {
        skillS.style.display = "none";
    }
});
buttonExperience.addEventListener("click", function () {
    if (ButtonS.style.display === "none") {
        ButtonS.style.display = "block";
    }
    else {
        ButtonS.style.display = "none";
    }
});
