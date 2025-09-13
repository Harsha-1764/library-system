// Listen for student login form submission
document.getElementById("studentLoginForm").addEventListener("submit", function(e){
    e.preventDefault(); // Prevent page reload

    // Get input values
    const username = document.getElementById("studentUsername").value.trim();
    const password = document.getElementById("studentPassword").value.trim();

    // Hardcoded student credentials
    if(username === "student" && password === "1234") {
        // Redirect to student dashboard
        location.href = "student_dashboard.html";
    } else {
        alert("Invalid credentials! Please use:\nUsername: student\nPassword: 1234");
    }
});
