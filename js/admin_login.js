document.getElementById("adminLoginForm").addEventListener("submit", function(e){
    e.preventDefault();

    const username = document.getElementById("adminUsername").value;
    const password = document.getElementById("adminPassword").value;

    // Simple hardcoded login (for testing)
    if(username === "admin" && password === "admin123"){
        alert("Login Successful!");
        window.location.href = "admin_dashboard.html";
    } else {
        alert("Invalid Credentials");
    }
});
