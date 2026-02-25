// Login Simulation
function loginUser(){
    alert("Welcome to Arka Jain University Smart Campus!");
    window.location.href="index.html";
}

// AI Assistant
function sendMessage(){
    let input=document.getElementById("userInput").value;
    let chat=document.getElementById("chatBox");

    if(input.trim()==="") return;

    chat.innerHTML+=`<p><strong>You:</strong> ${input}</p>`;
    chat.innerHTML+=`<p><strong>Assistant:</strong> Please check the relevant campus section for "${input}".</p>`;

    document.getElementById("userInput").value="";
    chat.scrollTop=chat.scrollHeight;
}