document.getElementById('courseRegForm').addEventListener('submit', function(event) {
    // Validate form fields
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var birthMonth = document.getElementById('birthMonth').value;
    var birthDay = document.getElementById('birthDay').value;
    var birthYear = document.getElementById('birthYear').value;
    var address = document.getElementById('address').value;
    var state = document.getElementById('state').value;
    var zip = document.getElementById('zip').value;
    var studentEmail = document.getElementById('studentEmail').value;
    var mobileNumber = document.getElementById('mobileNumber').value;
    var eduLevel = document.getElementById('eduLevel').value;
    var courses = document.getElementById('courses').value;

    // Basic validation
    if (firstName === '' || lastName === '' || birthMonth === '' || birthDay === '' || birthYear === '' || 
        address === '' || state === '' || zip === '' || studentEmail === '' || mobileNumber === '' || 
        eduLevel === '' || courses === '') {
        alert("All fields are required");
        event.preventDefault();
        return;
    }

    // Additional validation (e.g., email format, phone number format)
    // You can add more specific validations here if needed

    // If everything is valid, form will be submitted
});
