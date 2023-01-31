import throttle from "lodash.throttle";


const form = document.querySelector(".feedback-form");
const email = document.getElementsByName("email");
const message = document.getElementsByName("message");
const LOCALSTORAGE_KEY = {};


form.addEventListener("input", throttle(saveData, 500));
form.addEventListener("submit", handleSubmit);  

loadForm();

function saveData(event) {
    LOCALSTORAGE_KEY[event.target.name] = event.target.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(LOCALSTORAGE_KEY));
    // console.log(LOCALSTORAGE_KEY)
    
}



function handleSubmit(event) {
    event.preventDefault();
    event.currentTarget.reset();
    console.log(JSON.parse(localStorage.getItem("feedback-form-state")))
    localStorage.clear();
}


function loadForm() {
   let savedValues = JSON.parse(localStorage.getItem("feedback-form-state"));
//    console.log(savedValues)
   if (savedValues) {
    form.elements.email.value =  savedValues.email || ""; 
    form.elements.message.value = savedValues.message || "";
   } 
}
