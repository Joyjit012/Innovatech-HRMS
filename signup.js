
        const signupForm = document.getElementById('signup-form');
        const verificationUi = document.getElementById('verification-ui');
        const passwordInput = document.getElementById('password');
        const displayEmail = document.getElementById('display-email');

        // Password Validation Rules
        const rules = {
            length: document.getElementById('rule-length'),
            upper: document.getElementById('rule-upper'),
            number: document.getElementById('rule-number'),
            special: document.getElementById('rule-special')
        };

        passwordInput.addEventListener('input', () => {
            const val = passwordInput.value;
            
            // Length check
            updateRule(rules.length, val.length >= 8);
            // Uppercase check
            updateRule(rules.upper, /[A-Z]/.test(val));
            // Number check
            updateRule(rules.number, /[0-9]/.test(val));
            // Special char check
            updateRule(rules.special, /[!@#$%^&*(),.?":{}|<>]/.test(val));
        });

        function updateRule(element, isValid) {
            if (isValid) {
                element.classList.remove('invalid');
                element.classList.add('valid');
                element.innerText = '● ' + element.innerText.substring(2);
            } else {
                element.classList.remove('valid');
                element.classList.add('invalid');
                element.innerText = '○ ' + element.innerText.substring(2);
            }
        }

        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Basic validation check before "submitting"
            const password = passwordInput.value;
            const isPasswordValid = 
                password.length >= 8 && 
                /[A-Z]/.test(password) && 
                /[0-9]/.test(password) && 
                /[!@#$%^&*(),.?":{}|<>]/.test(password);

            if (!isPasswordValid) {
                alert('Please ensure your password meets all security requirements.');
                return;
            }

            // Mock submission
            const email = document.getElementById('email').value;
            displayEmail.innerText = email;

            // Transition to verification UI
            signupForm.classList.add('hidden');
            verificationUi.classList.add('active');
        });
    