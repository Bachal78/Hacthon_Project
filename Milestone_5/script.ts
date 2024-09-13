const form = document.getElementById("Resume-Form") as HTMLFormElement
const resumeDisplay=  document.getElementById("resume-display") as HTMLDivElement
const shareableContainer= document.getElementById("shareable-container") as HTMLDivElement
const shareablelink = document.getElementById("shareableLink") as HTMLAnchorElement
const downloadPdf= document.getElementById("download-pdf") as HTMLButtonElement



//command for form submission:

form.addEventListener("submit", (event: Event)=>{
    event.preventDefault() //prevent page reload

    //collect input values
    const userName= (document.getElementById("username")as HTMLInputElement).value
    const name= (document.getElementById("name") as HTMLInputElement).value
    const email= (document.getElementById("email") as HTMLInputElement).value
    const address= (document.getElementById("address")as HTMLInputElement).value
    const phone= (document.getElementById("phone") as HTMLInputElement).value
    const education= (document.getElementById("education") as HTMLInputElement).value
    const experience= (document.getElementById("experience") as HTMLInputElement).value
    const skills= (document.getElementById("skills") as HTMLInputElement).value

    //Generate the resume dinamically 
    const resumeHtml = `
    <h2><b>Shareable Resume</b></h2>
    <h3>Personal Information</h3>
    <p><b>Name:</b><span contenteditable="true">${name}</span></p>
    <p><b>Email:</b><span contenteditable="true">${email}</span></p>
    <p><b>Address:</b><span contenteditable="true">${address}</span></p>
    <p><b>Phone:</b><span contenteditable="true">${phone}</span></p>

    <h3>Education</h3>
    <p contenteditable="true">${education}</p>
    <h3>Experience<h3>
    <p contenteditable="true">${experience}</p>

    <h3>Skills<h3>
    <p contenteditable="true">${skills}</p>
    `
//     //Display resume after filling data :
//     if(resumeDisplay){
//         resumeDisplay.innerHTML= resumeHtml
//     } else{
//         console.error('The resume element is missing')
//     }
// })







 // Save form data in localStorage with the username as the key
 const resumeData = {
 name,
 email,
 phone,
 education,
 experience,
 skills
 };
 localStorage.setItem(username, JSON.stringify(resumeData)); // Saving the data locally
 // Generate the resume content dynamically
 const resumeHTML = `
 <h2>Editable Resume</h2>
 <h3>Personal Information</h3>
 <p><b>Name:</b> <span contenteditable="true">${name}</span></p>
 <p><b>Email:</b> <span contenteditable="true">${email}</span></p>
 <p><b>Phone:</b> <span contenteditable="true">${phone}</span></p>
 <h3>Education</h3>
 <p contenteditable="true">${education}</p>
 <h3>Experience</h3>
 <p contenteditable="true">${experience}</p>
 <h3>Skills</h3>
 <p contenteditable="true">${skills}</p>
 `;
 // Display the generated resume
 resumeDisplay.innerHTML = resumeHTML;
 // Generate a shareable URL with the username only
 const shareableURL =`${window.location.origin}?username=${encodeURIComponent(username)}`;
 // Display the shareable link
 shareableContainer.style.display = 'block';
 shareableLink.href = shareableURL;
 shareableLink.textContent = shareableURL;
});
// Handle PDF download
downloadPdfButton.addEventListener('click', () => {
 window.print(); // This will open the print dialog and allow the user to save 
as PDF
});
// Prefill the form based on the username in the URL
window.addEventListener('DOMContentLoaded', () => {
 const urlParams = new URLSearchParams(window.location.search);
 const username = urlParams.get('username');
 if (username) {
