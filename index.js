const messages = JSON.parse(localStorage.getItem('messages')) || [];
const searchInput = document.querySelector('.searchInput');
const messageInput = document.querySelector('#messageInput');
const sendButton = document.querySelector('#button');
const newMessage = document.querySelector('#single-mssg');

sendButton.addEventListener('click',messageSend);

function messageSend() {
    const messageValue = messageInput.value.trim();
   
if (messageValue !== "") {
    const timestamp = new Date().toLocaleString();
    const message = {
        messageValue,
        timestamp
    };
    messages.push(message);
    saveTasksToLocalStorage();
    renderMessages();
    messageInput.value = '';
    
} else {
    alert("Please enter a message!");
}
}

function renderMessages() {
    
    newMessage.innerHTML = '';
    messages.slice().reverse().forEach((message, index) => {
        const li = document.createElement('li');
        li.className = 'list-group-message';
        li.innerHTML = ` ${message.messageValue}<br>
                        ${message.timestamp}<br>
                        <i onclick="delMessage(${tasks.length - 1 - index})" class="fa-solid fa-trash"></i>`;
        newMessage.appendChild(li);
});
}
    