document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    form.onsubmit = function(e) {
        e.preventDefault(); 

        const emailCorrecto = "taskweb@gmail.com";
        const senhaCorrecta = "senha123";

        const email = document.getElementById("username").value;
        const senha = document.getElementById("password").value;

        if (email === emailCorrecto && senha === senhaCorrecta) {
            window.location.href = "tAdmin.html";
        } else {
            alert("Email ou senha incorretos.");
        }
    };
});