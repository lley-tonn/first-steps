document.getElementById("subscribe").addEventListener("submit",
    function(event){

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message");

        message.textContent = "";

        if(!name|| !email){

            message.textContent = "Please fill in the field.";
            message.style.color = "red";

            return;
        }

        const emailPattern = /^[^@\]+@[^@\s]+\.[^@\s]+$/;

        if(!emailPattern.test(email)){
            message.textContent = "Please enter a valid email address.";
            message.style.color = "red";
            return;
        }

        message.textContent = "Thank you, ${name},for subscribing!";
        message.style.color = "green";

        document.getElementById("subscribe").reset();
    }
);