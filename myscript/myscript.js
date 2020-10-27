function currentDate() {
	var date = new Date();
	var n = date.toDateString();
	return n;
}
document.getElementById("date").innerHTML = currentDate();

function printError(element, msg) {
    document.getElementById(element).innerHTML = msg;
}


function validateForm() {

    // Retrieving the values of form elements 
    var name = document.contactForm.name.value;
    var email = document.contactForm.email.value;
    var mobile = document.contactForm.mobile.value;

    var nameErr = emailErr = true;

    // Validate name
    if (name.trim() == "") {
        printError("nameErr", "Please enter your name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(name) === false) {
            printError("nameErr", "Please enter a valid name");
        } else {
            printError("nameErr", "");
            nameErr = false;
        }
    }

    // Validate email address
    if (email == "") {
        printError("emailErr", "Please enter your email address");
    } else {
        // Regular expression for basic email validation
        var regex = /^\S+@\S+\.\S+$/;
        if (regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address");
        } else {
            printError("emailErr", "");
            emailErr = false;
        }
    }
    //Mobile
    if (mobile == "") {
        printError("mobileErr", "Please enter your phone number");
    } else {
        var regex = /^\d{10}$/;
        //var regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/; use it if we dont have limit length
        if (regex.test(mobile) === false) {
            printError("mobileErr", "Please enter a valid phone number");
        } else {
            printError("mobileErr", "");
            mobileErr = false;
        }
    }


    if (nameErr || emailErr || mobileErr == true) {
        return false;
    } else {
        alert('You have submitted the form..')
    }
}