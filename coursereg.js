document.getElementById('courseRegForm').addEventListener('submit', function(event) {
    
    event.preventDefault();

        var firstName = document.getElementById('firstName').value.trim();
    var lastName = document.getElementById('lastName').value.trim();
    var birthMonth = document.getElementById('birthMonth').value;
    var birthDay = document.getElementById('birthDay').value;
    var birthYear = document.getElementById('birthYear').value;
    var address = document.getElementById('address').value.trim();
    var state = document.getElementById('state').value.trim();
    var zip = document.getElementById('zip').value.trim();
    var studentEmail = document.getElementById('studentEmail').value.trim();
    var mobileNumber = document.getElementById('mobileNumber').value.trim();
    var eduLevel = document.getElementById('eduLevel').value;
    var courses = document.getElementById('courses').value;
    var additionalComment = document.getElementById('additionalComment').value.trim();

    
    if (firstName === '' || lastName === '' || birthMonth === '' || birthDay === '' || birthYear === '' ||
        address === '' || state === '' || zip === '' || studentEmail === '' || mobileNumber === '' ||
        eduLevel === '' || courses === '') {
        alert("All fields are required");
        return;
    }

   
    if (!isValidEmail(studentEmail)) {
        alert("Please enter a valid email address");
        return;
    }

       if (!isValidMobileNumber(mobileNumber)) {
        alert("Please enter a valid 10-digit mobile number");
        return;
    }

    
    if (!isValidZipCode(zip)) {
        alert("Please enter a valid zip code");
        return;
    }

    this.submit();
});

function isValidEmail(email) {
    var emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
}

function isValidMobileNumber(mobileNumber) {
    var mobileRegex = /^[0-9]{10}$/; // Assuming 10-digit mobile numbers
    return mobileRegex.test(mobileNumber);
}

function isValidZipCode(zip) {
    var zipRegex = /^\d{5}$/; // Assuming 5-digit zip codes
    return zipRegex.test(zip);
}