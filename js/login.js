
//step-1
document.getElementById('btn-submit').addEventListener('click', function(){
    //step-2: get the email address inside the email input field;
    //always remember to use .vlaue to get the text value from an input field

    const emailField = document.getElementById('user-email');
    const email = emailField.value;

    //step-3: get password
    //set id on the html element
    //get the element
    //get the value from the element
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;

    //stp-4: varify email and pass
    if(email === 'sontan@baap.com' && password === 'secret'){
        window.location.href = 'bank.html';
    }
    else
    {
       alert('invalid user') 
    }

})