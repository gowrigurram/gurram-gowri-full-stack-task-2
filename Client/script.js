// REGISTER
document.getElementById("registerForm")?.addEventListener("submit", function(e){
    e.preventDefault();

    let user = {
        name: name.value,
        email: email.value,
        password: password.value
    };

    localStorage.setItem("user", JSON.stringify(user));

    alert("Registered!");
    window.location = "index.html";
});


// LOGIN
document.getElementById("loginForm")?.addEventListener("submit", function(e){
    e.preventDefault();

    let user = JSON.parse(localStorage.getItem("user"));

    if(user.email === loginEmail.value && user.password === loginPassword.value){
        localStorage.setItem("logged", JSON.stringify(user));
        alert("Login Success");
        window.location = "home.html";
    }
    else{
        alert("Invalid");
    }
});


// HOME
let user = JSON.parse(localStorage.getItem("logged"));
if(document.getElementById("user")){
    document.getElementById("user").innerText = "Hello " + user.name;
}


// LOGOUT
function logout(){
    localStorage.removeItem("logged");
    window.location = "index.html";
}