const form = document.querySelector(".feedback-form");
const email = document.getElementsByName("email");
const message = document.getElementsByName("message");
const LOCALSTORAGE_KEY = "feedback-form-state";
let data = {};

loadForm();

form.addEventListener("input", saveData);
form.addEventListener("submit", handleSubmit);  


function saveData(event) {
    data = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)) || {}; 
    data[event.target.name] = event.target.value;
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(data)); 

}



function handleSubmit(event) {
    event.preventDefault();

    if (!event.target.email.value || !event.target.message.value ) {
        return alert("Please fill in all the fields!");
        return;
    }
    

    event.target.reset();
    console.log(data)
    localStorage.removeItem("feedback-form-state");
}


function loadForm() {
    try {
        let formLoad = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
        if (!formLoad) {
            return;
        }
    
        data = formLoad; 
        form.email.value = data.email || "";
        form.message.value = data.message || "";

        } catch (error) {
        console.error('Error.message ', error.message);
    }
}