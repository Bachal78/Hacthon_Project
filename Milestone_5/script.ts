

const form = document.getElementById("Resume-Form") as HTMLFormElement
const resumeDisplayElement=  document.getElementById("resume-display") as HTMLDivElement
const shareableLinkContainer= document.getElementById("shareable-container") as HTMLDivElement
const shareableLinkElement = document.getElementById("shareableLink") as HTMLAnchorElement
const downloadPdfButton= document.getElementById("download-pdf") as HTMLButtonElement



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
    
 // Save form data in localStorage with the username as the key
 const resumeData = {
 name,
 email,
 phone,
 education,
 experience,
 skills
 };
 localStorage.setItem(userName, JSON.stringify(resumeData)); // Saving the data locally
 // Generate the resume content dynamically
 const resumeHTML = `
 <h2>Editable Resume</h2>
 <h3>Personal Information</h3>
 <p><b>Name:</b> <span contenteditable="true">${name}</span></p>
 <p><b>Email:</b> <span contenteditable="true">${email}</span></p>
 <p><b>Address:</b> <span contenteditable="true">${address}</span></p>
 <p><b>Phone:</b> <span contenteditable="true">${phone}</span></p>
 <h3>Education</h3>
 <p contenteditable="true">${education}</p>
 <h3>Experience</h3>
 <p contenteditable="true">${experience}</p>
 <h3>Skills</h3>
 <p contenteditable="true">${skills}</p>
 `;
 // Display the generated resume
 resumeDisplayElement.innerHTML = resumeHTML;
 // Generate a shareable URL with the username only
 const shareableURL =`${window.location.origin}?username=${encodeURIComponent(userName)}`;
 // Display the shareable link
 shareableLinkContainer.style.display = 'block';
 shareableLinkElement.href = shareableURL;
 shareableLinkElement.textContent = shareableURL;
});
// Handle PDF download
downloadPdfButton.addEventListener('click', () => {
 window.print(); // This will open the print dialog and allow the user to save as PDF
});
// Prefill the form based on the username in the URL
window.addEventListener('DOMContentLoaded', () => {
 const urlParams = new URLSearchParams(window.location.search);
 const username = urlParams.get('username');
 if (username) {
    //Auto form if data is found i localstorage
    const savedResumeData= localStorage.getItem(username)

    if(savedResumeData){
        const resumeData= JSON.parse(savedResumeData);
        (document.getElementById('username') as HTMLOutputElement).value=resumeData.username
        (document.getElementById('name') as HTMLOutputElement).value=resumeData.name
        (document.getElementById('email') as HTMLOutputElement).value=resumeData.email
        (document.getElementById('address') as HTMLOutputElement).value=resumeData.address
        (document.getElementById('phone') as HTMLOutputElement).value=resumeData.phone
        (document.getElementById('education') as HTMLOutputElement).value=resumeData.education
        (document.getElementById('experience') as HTMLOutputElement).value=resumeData.experience
        (document.getElementById('skills') as HTMLOutputElement).value=resumeData.skills
    }
 }
})
