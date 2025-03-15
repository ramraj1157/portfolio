/* script.js */
document.addEventListener("DOMContentLoaded", function () {
    // Function to update date and time
    function updateDateTime() {
        const datetimeElement = document.getElementById("datetime");
        if (datetimeElement) {
            datetimeElement.innerText = new Date().toLocaleString();
        }
    }

    // Update date and time every second
    setInterval(updateDateTime, 1000);
    updateDateTime();

    // Form submission handling
    document.getElementById("contactForm").addEventListener("submit", function (event) {
        event.preventDefault();
    
        // Get form values
        const name = document.getElementById("name");
        const email = document.getElementById("email");
        const message = document.getElementById("message");
        const formMessage = document.getElementById("formMessage");
    
        // Reset previous error styles
        resetErrorStyles([name, email, message]);
    
        // Validate form fields
        let isValid = true;
    
        if (name.value.trim() === "") {
            showError(name, "Name is required!");
            isValid = false;
        }
    
        if (email.value.trim() === "") {
            showError(email, "Email is required!");
            isValid = false;
        } else if (!validateEmail(email.value.trim())) {
            showError(email, "Please enter a valid email address!");
            isValid = false;
        }
    
        if (message.value.trim() === "") {
            showError(message, "Message is required!");
            isValid = false;
        }
    
        // If all fields are valid
        if (isValid) {
            formMessage.innerText = "Message sent successfully!";
            formMessage.style.color = "green";
            formMessage.style.display = "block";
            contactForm.reset();
    
            // Hide the success message after 3 seconds
            setTimeout(() => {
                formMessage.style.display = "none";
            }, 3000);
        }
    });

    // Function to validate email format
    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }


    function showError(input, message) {
        // Ensure the input element is valid
        if (!input) {
            console.error("Input element is not valid.");
            return;
        }
    
        // Ensure the formMessage element exists
        const formMessage = document.getElementById("formMessage");
        if (!formMessage) {
            console.error("Form message element not found.");
            return;
        }
    
        // Apply error styles to the input
        input.style.borderColor = "red";
        input.style.backgroundColor = "#ffe6e6";
    
        // Display the error message
        formMessage.innerText = message;
        formMessage.style.color = "red";
        formMessage.style.display = "block";
    }

    // Function to reset error styles
    function resetErrorStyles(inputs) {
        inputs.forEach(input => {
            input.style.borderColor = "#ccc";
            input.style.backgroundColor = "white";
        });
    }

    // Optional: Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });
});