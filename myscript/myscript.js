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
//add comment
function newComment() { //important for blog project
    var name = document.getElementById('commentName').value;
    var inputValue = document.getElementById('myInput').value;
    var text = document.createTextNode(inputValue);
    var textName = document.createTextNode(name);
    var li = document.createElement('li');
    var outName = document.createElement('label');
    outName.appendChild(textName);
    li.appendChild(text);
    if (inputValue.trim() === '') {
        alert('you must write something...')
        document.getElementById('myInput').value = '';
    } else {
        document.getElementById('myList').appendChild(outName);
        document.getElementById('myList').appendChild(li);
        document.getElementById('myInput').value = '';
        document.getElementById('commentName').value = '';
    }
}

function addPost() {
    var inputName = document.getElementById('name').value;
    var inputContent = document.getElementById('myInput').value;
    var inputTitle =document.getElementById('title').value;
    var inputday =document.getElementById('day').value;
    
    var title = document.createTextNode(inputTitle);
    var content = document.createTextNode(inputContent);

    var div = document.createElement('div');
    var seconddiv = document.createElement('div');
    seconddiv.className = 'fakeimg';
    seconddiv.style.height = '200px';

    var hr = document.createElement('hr');
    div.className = 'card';
    var h2 = document.createElement('h2');
    var h5 = document.createElement('h5');
    var p = document.createElement('p');

    var oImg = document.createElement("img");
    oImg.src = "https://image.shutterstock.com/image-illustration/new-post-sticker-video-blog-600w-1417843493.jpg";
    oImg.setAttribute('alt', 'image');
    oImg.setAttribute('height', '200');
    oImg.setAttribute('width', '1122');
    seconddiv.appendChild(oImg);

    p.style.textAlign = 'left';
    h5.textContent = `by ${inputName} | ${inputday}`;

    p.appendChild(content);
    h2.appendChild(title);
    div.appendChild(hr);
    div.appendChild(h2);
    div.appendChild(h5);
    div.appendChild(seconddiv);
    div.appendChild(p);
    if (inputTitle.trim() === '' || inputName.trim() === '' || inputContent.trim() === '') {
        alert('you must write something...')
    } 
        else {
        document.getElementById('postList').appendChild(div);
        document.getElementById('myInput').value = '';
        document.getElementById('name').value = '';
        document.getElementById('title').value = '';
        document.getElementById('day').value = '';
    }
}
function show() {
        document.getElementById("addForm").style.display="block";
}
function hide() {
        document.getElementById("addForm").style.display="none";
}
function cancel() {
    document.getElementById('myInput').value = '';
    document.getElementById('name').value = '';
    document.getElementById('title').value = '';
    document.getElementById('day').value = '';
}
