var form = document.getElementById("Resume-Form");
var resumeDisplay = document.getElementById("resume-display");
//handle form submission:
form.addEventListener("submit", function (event) {
    event.preventDefault(); //prevent page reload
    //collect input values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var address = document.getElementById("address").value;
    var phone = document.getElementById("phone").value;
    var education = document.getElementById("education").value;
    var experience = document.getElementById("experience").value;
    var skills = document.getElementById("skills").value;
    //Generate the resume dinamically 
    var resumeHtml = "\n    <h2><b>Resume</b></h2>\n    <h3>Personal Information</h3>\n    <p><b>Name:</b>".concat(name, "</p>\n    <p><b>Email:</b>").concat(email, "</p>\n    <p><b>Address:</b>").concat(address, "</p>\n    <p><b>Phone:</b>").concat(phone, "</p>\n\n    <h3>Education</h3>\n    <p>").concat(education, "</p>\n    <h3>Experience<h3>\n    <p>").concat(experience, "</p>\n\n    <h3>Skills<h3>\n    <p>").concat(skills, "</p>\n    ");
    //Display resume after filling data :
    if (resumeDisplay) {
        resumeDisplay.innerHTML = resumeHtml;
    }
    else {
        console.error('The resume element is missing');
    }
});
