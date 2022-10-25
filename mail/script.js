const mailList = ["marco@gmail.com", "paolo@gmail.com", "franco@gmail.com"];

const emailCheck = document.getElementById("emailCheck");
const submit = document.getElementById("submit");

submit.addEventListener("click", function() {
    if 
        (mailList.includes(`${emailCheck.value}`)) {
        alert("Email valida");
        console.log((`${emailCheck.value}`));
        console.log(mailList.indexOf(`${emailCheck.value}`));
    } 
    else 
        {alert("Inserisci dati validi");}
    }
);