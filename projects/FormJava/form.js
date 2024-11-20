document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault(); 

 
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const email = document.getElementById("email").value;
    const pass = document.getElementById("pass").value;
    const phone = document.getElementById("phone").value;

    const formData = {
        fname: fname,
        lname: lname,
        email: email,
        pass: pass,
        phone: phone,
    };

    if (!fname || !lname || !email || !pass || !phone) {
        alert("All fields are required!");
        return;
    }

 
    if (phone.length !== 10) {
        alert("Entered phone number must be exactly 10 digits!");
        return;
    }

    const xhr = new XMLHttpRequest();
    xhr.open("GET", "submit.json", true); 
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

 
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            document.getElementById("message").innerHTML = response.message;
            document.getElementById("myForm").reset(); 
            alert("You submitted the form!");
        } else if (xhr.readyState === 4) {
            alert("Error submitting form.");
        }
    };

    xhr.send(JSON.stringify(formData));
    console.log(formData);
});
