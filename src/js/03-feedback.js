import throttle from "lodash.throttle";


const form = document.querySelector(".feedback-form");
const email = document.getElementsByName("email");
const message = document.getElementsByName("message");
const LOCALSTORAGE_KEY = {};


form.addEventListener("input", throttle(saveData, 500));
// form.addEventListener("submit", handleSubmit);  

loadForm();

function saveData(event) {
    LOCALSTORAGE_KEY[event.target.name] = event.target.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(LOCALSTORAGE_KEY));
    console.log(LOCALSTORAGE_KEY)
    
}



function handleSubmit(event) {
    console.log(JSON.parse(localStorage.getItem("feedback-form")));
    event.preventDefault();
    event.currentTarget.reset();
    localStorage.removeItem("feedback-form-state");
}


function loadForm() {
   const savedValues = JSON.parse(localStorage.getItem("feedback-form-state"));
   console.log(savedValues)
   if (savedValues) {
    email.value = savedValues.email; 
    message.value = savedValues.message;
    form.elements.email.value = savedValues.email;
    form.elements.message.value = savedValues.message;
   }
   
}
