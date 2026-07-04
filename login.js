const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    if (email === '' || password === '') {
        alert('Please fill in all fields.');
        return;
    }

    // Create FormData
    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);

    try {
        // Send to PHP backend
        const response = await fetch('auth/login.php', {
            method: 'POST',
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            alert('Login Successful!');
            
            // Redirect based on role
            if (data.user.role === 'admin') {
                window.location.href = 'admindashboard.html';
            } else {
                window.location.href = 'employee_dashboard.html';
            }
        } else {
            const errorMsg = data.errors.join('\n');
            alert('Login failed:\n' + errorMsg);
        }
    } catch (error) {
        alert('An error occurred. Please try again. Error: ' + error.message);
        console.error('Login error:', error);
    }
});
