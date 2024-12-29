const parser = new DOMParser();

const userXML = `
<users>
<user>
<username>admin</username>
<password>admin123</password>
</user>

<user>
<username>john_doe</username>
<password>password123</password>
</user>
</users>`;

const xmlDoc = parser.parseFromString(userXML,"application/xml");

document.getElementById("loginbtn").addEventListener("click",()=>{

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const message = document.getElementById("message");

    if (!username || !password) {
        message.textContent = "Please Enter Both Username and Password.";
        message.style.color = "red";
        return;
    }

    const users = xmlDoc.getElementsByTagName("user");
    let isValid = false;


    for (let user of users){
        const storedUsername = user.getElementsByTagName("username")[0].textContent;
        const storedPassword = user.getElementsByTagName("password")[0].textContent;

        if (username === storedUsername && password === storedPassword) {
            isValid = true;
            break;
        }
    }

    if (isValid) {
        message.textContent = "Login Successful!";
        message.style.color = "green";
    }
    else {
        message.textContent = "Invalid Username or Password!";
        message.style.color = "red"
    }
});