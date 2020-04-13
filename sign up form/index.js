const form = document.getElementById('form');


form.addEventListener('submit', e => {
    e.preventDefault();
    const firstName = form['firstName'].value;
    const lastName = form['lastName'].value;
    const email = form['email'].value;
    const password = form['password'].value;

    if(firstName === ''){
        addErrorTo('firstName', 'First Name is required');
    }else{
        removeErrorFrom('firstName');
    }

    if(lastName === ''){
        addErrorTo('lastName', 'Last Name is required');
    }else{
        removeErrorFrom('lastName');
    }
    
    if(email === ''){
        addErrorTo('email', 'Email is required');
    }else if(!validateEmail(email)){
        addErrorTo('email', 'Email is not valid');
    }else{
        removeErrorFrom('email');
    }
    
    if(password === ''){
        addErrorTo('password', 'Password is required');
    }else{
        removeErrorFrom('password')
    }
    
})

function addErrorTo(field, message){
    const formControl = form[field].parentNode
    formControl.classList.add('error');
    const small = formControl.querySelector('small');
    small.innerText = message;
}

function removeErrorFrom(field){
    const formControl = form[field].parentNode
    formControl.classList.remove('error');
}

function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  