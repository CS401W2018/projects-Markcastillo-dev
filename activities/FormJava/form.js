
document.getElementById("myForm").addEventListener('submit',function(event) {
    event.preventDefault();
    const fname =document.getElementById('fname').value;
    const lname =document.getElementById('lname').value;
    const age = document.getElementById(age).value;
    
    
    
    const formData = {
        fname: fname,
        lname: lname,
        password: document.getElementById('password').value,
        state: document.getElementById('state').value
    }
    if (fname || lname) {
        alert('First name and Last name required');
        return;
    };
    
    {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "submit.json", true);
    xhr.setRequestHeader("Content-Type,", "application/json;charset=UTF-8");
    xhr.onreadystatechange = function () {
        if (xdr.readtState === 4 && xhr.status ===200) {
            message = JSON.parse(xhr.response)
            document.getElementById("message").innerHTML = response.message;
            document.getElementById("myForm").innerHTML = "";

        }else if (xhr.readyState === 4) {
            alert("Error Submitting form.");
        }
        }

    };
    xhr.send(JSON.stringify(formData))

    console.log(formData);
    alert("You submmitted the forms")
});