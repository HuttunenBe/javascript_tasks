const email = document.getElementById('email')
const name = document.getElementById('name')
const button = document.getElementById('button')
const form = document.getElementById("form")
const errorElement = document.getElementById('error')


form.addEventListener('submit', (e) => {
let messages = [];
    
if (name.value === "" || name.value === null) {
    messages.push("Name is required");
    }


if (email.value === "") {
    messages.push("Email is required");
    }


if (messages.length > 0) {
    e.preventDefault();
    errorElement.innerText = messages.join(', ');
    }
});

button.addEventListener('click', empty)
