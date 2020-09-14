//define variables
let clickEmail = document.getElementById('email');
let clickPhone = document.getElementById('phone');
let clickPostcode = document.getElementById('postcode');
let clickName = document.getElementById('name');
let result = document.getElementById('ui');

//define functions-------------------------------------
// function for validate email using regex, then returned
function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; //colected from stackoverflow
    //now return
    return re.test(String(email).toLowerCase());
}
// function for validate phone number of Bangladesh
function validatePhone(phone) {
    const re = /\+?(88)?0?1[356789][0-9]{8}\b/; //it may not work for whitespace
    return re.test(String(phone)); //return the result
}
//function for checking Post Code of Bangladesh
function validePostcode(postcode) {
    const re = /^\d{4}$/; //post code of Bangladesh is 4 digit, so i thought it will be the best expression
    return re.test(String(postcode)); //return
}
//function for checking name (Sorry Elon Mask's Son can be rejected!)
function valideName(name) {
    const re = /^[a-zA-Z ]{2,30}$/; // the name length cannot be bigger then 30
    return re.test(String(name)); //return result of name
}

function resetEnvironment() {
    result.classList.remove('text-warning');
    result.classList.remove('text-success');
    result.classList.remove('text-danger');
}

function testValidation(str, functionValidation) {
    input = prompt(`Enter the ${str}: `);
    if (input === '') {
        result.classList.add('text-warning');
        result.innerHTML = "Please Enter Something";
    }
    else if (functionValidation(input)) {
        result.classList.add('text-success');
        result.innerHTML = `<strong>${input}</strong> is a <strong>Valide ${str}</strong>`;
    } else {
        result.classList.add('text-danger');
        result.innerHTML = `<strong>${input}</strong> is <strong>not a Valide ${str}</strong>`;
    }
}


clickEmail.addEventListener('click', function () {
    resetEnvironment();
    testValidation("Email", validateEmail);
});


clickPhone.addEventListener('click', function () {
    resetEnvironment();
    testValidation("Phone Number", validatePhone);
});

clickPostcode.addEventListener('click', function () {
    resetEnvironment();
    testValidation("Post Code", validePostcode);
});

clickName.addEventListener('click', function () {
    resetEnvironment();
    testValidation("Name", valideName);
});