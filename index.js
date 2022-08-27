console.log('This is Project-4');
const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
let validEmail = false;
let validPhone = false;
let validUser = false;
$('#success').hide();
$('#failure').hide();

// console.log(name, email, phone);

name.addEventListener('blur', () => {
    console.log('Name is blurred');
    // Validate name here 
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,15}$/;
    let str = name.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log("Your Name is valid");
        name.classList.remove('is-invalid')
        validUser = true;
    }
    else {
        console.log('Your Name is invalid');
        name.classList.add('is-invalid')
        validUser = false;
    }
});

email.addEventListener('blur', () => {
    console.log('email is blurred');
    // Validate email here 
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log("Your email is valid");
        email.classList.remove('is-invalid');
        validEmail = true;
    }
    else {
        console.log('Your email is invalid');
        email.classList.add('is-invalid');
        validEmail = false;
    }
});

phone.addEventListener('blur', () => {
    console.log('phone is blurred');
    // Validate phone here 
    let regex = /^([0-9]){10}$/;
    let str = phone.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log("Your phone is valid");
        phone.classList.remove('is-invalid');
        validPhone = true;
    }
    else {
        console.log('Your phone is invalid');
        name.classList.add('is-invalid');
        validPhone = false;
    }
});

let submit = document.getElementById('submit');
submit.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('You have submitted the form');

    if (validEmail && validPhone && validUser) {
        console.log('Submitting The Form');
        let success = document.getElementById('success');
        success.classList.add('show');
        $('#success').show();
        $('#failure').hide();
    }
    else {
        console.log('Cannot Submit The Form');
        let failure = document.getElementById('failure');
        failure.classList.add('show');
        $('#failure').show();
        $('#success').hide();
    }

})