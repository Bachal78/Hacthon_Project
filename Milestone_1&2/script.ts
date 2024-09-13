const toggleButton =document.getElementById("toggle-skills") as HTMLButtonElement
const skillS= document.getElementById("Skills") as HTMLElement

const buttonExperience=document.getElementById("Button-toggle") as HTMLButtonElement
const ButtonS= document.getElementById("work-experience") as HTMLButtonElement

toggleButton.addEventListener("click",()=>{
    if(skillS.style.display ==="none"){
        skillS.style.display ="block"
    } else{
        skillS.style.display ="none"
    }
})

buttonExperience.addEventListener("click",()=>{
    if (ButtonS.style.display ==="none") {
        ButtonS.style.display ="block"
    }else{
        ButtonS.style.display="none"
    }
})
