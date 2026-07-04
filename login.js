document.querySelector("form").addEventListener("submit", function (e) {

    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("pass").value.trim();

    // Demo Credentials
    const validEmail = "admin@hrms.com";
    const validPassword = "Admin@123";

    if (email === "" || password === "") {
        alert("Please fill in all fields.");
        return;
    }

    if (email === validEmail && password === validPassword) {

        alert("Login Successful!");

        // Redirect to Dashboard
        window.location.href = "dashboard.html";

    } else {

        alert("Invalid Email or Password!");

    }

});