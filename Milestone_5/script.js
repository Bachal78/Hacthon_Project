var form = document.getElementById("Resume-Form");
var resumeDisplayElement = document.getElementById("resume-display");
var shareableLinkContainer = document.getElementById("shareable-container");
var shareableLinkElement = document.getElementById("shareableLink");
var downloadPdfButton = document.getElementById("download-pdf");
//command for form submission:
form.addEventListener("submit", function (event) {
    event.preventDefault(); //prevent page reload
    //collect input values
    var userName = document.getElementById("username").value;
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var address = document.getElementById("address").value;
    var phone = document.getElementById("phone").value;
    var education = document.getElementById("education").value;
    var experience = document.getElementById("experience").value;
    var skills = document.getElementById("skills").value;
    //Generate the resume dinamically 
    var resumeHtml = "\n    <h2><b>Shareable Resume</b></h2>\n    <h3>Personal Information</h3>\n    <p><b>Name:</b><span contenteditable=\"true\">".concat(name, "</span></p>\n    <p><b>Email:</b><span contenteditable=\"true\">").concat(email, "</span></p>\n    <p><b>Address:</b><span contenteditable=\"true\">").concat(address, "</span></p>\n    <p><b>Phone:</b><span contenteditable=\"true\">").concat(phone, "</span></p>\n\n    <h3>Education</h3>\n    <p contenteditable=\"true\">").concat(education, "</p>\n    <h3>Experience<h3>\n    <p contenteditable=\"true\">").concat(experience, "</p>\n\n    <h3>Skills<h3>\n    <p contenteditable=\"true\">").concat(skills, "</p>\n    ");
    // Save form data in localStorage with the username as the key
    var resumeData = {
        name: name,
        email: email,
        phone: phone,
        education: education,
        experience: experience,
        skills: skills
    };
    localStorage.setItem(userName, JSON.stringify(resumeData)); // Saving the data locally
    // Generate the resume content dynamically
    var resumeHTML = "\n <h2>Editable Resume</h2>\n <h3>Personal Information</h3>\n <p><b>Name:</b> <span contenteditable=\"true\">".concat(name, "</span></p>\n <p><b>Email:</b> <span contenteditable=\"true\">").concat(email, "</span></p>\n <p><b>Address:</b> <span contenteditable=\"true\">").concat(address, "</span></p>\n <p><b>Phone:</b> <span contenteditable=\"true\">").concat(phone, "</span></p>\n <h3>Education</h3>\n <p contenteditable=\"true\">").concat(education, "</p>\n <h3>Experience</h3>\n <p contenteditable=\"true\">").concat(experience, "</p>\n <h3>Skills</h3>\n <p contenteditable=\"true\">").concat(skills, "</p>\n ");
    // Display the generated resume
    resumeDisplayElement.innerHTML = resumeHTML;
    // Generate a shareable URL with the username only
    var shareableURL = "".concat(window.location.origin, "?username=").concat(encodeURIComponent(userName));
    // Display the shareable link
    shareableLinkContainer.style.display = 'block';
    shareableLinkElement.href = shareableURL;
    shareableLinkElement.textContent = shareableURL;
});
// Handle PDF download
downloadPdfButton.addEventListener('click', function () {
    window.print(); // This will open the print dialog and allow the user to save as PDF
});
// Prefill the form based on the username in the URL
window.addEventListener('DOMContentLoaded', function () {
    var urlParams = new URLSearchParams(window.location.search);
    var username = urlParams.get('username');
    if (username) {
        //Auto form if data is found i localstorage
        var savedResumeData = localStorage.getItem(username);
        if (savedResumeData) {
            var resumeData = JSON.parse(savedResumeData);
            document.getElementById('username').value = resumeData.username(document.getElementById('name')).value = resumeData.name(document.getElementById('email')).value = resumeData.email(document.getElementById('address')).value = resumeData.address(document.getElementById('phone')).value = resumeData.phone(document.getElementById('education')).value = resumeData.education(document.getElementById('experience')).value = resumeData.experience(document.getElementById('skills')).value = resumeData.skills;
        }
    }
});
