const chatBox = document.querySelector('.chatBox');
const messageInput = document.querySelector('input');
const sendButton = document.querySelector('.button');

let possibleWords = [];


function sendMessage() {
    if (messageInput.value) {
        messageInput.style.border = 'none';
        console.log(messageInput.value);
        chatBox.innerHTML += `<div class="message">YOU: ${messageInput.value}</div>`;

        const words = messageInput.value.split(' ');
        messageInput.value = '';

        possibleWords.push(...words);
        chatBox.innerHTML += `<div class="message">BOT: ${generateRandomMessage()}</div>`;
    } else {
        messageInput.style.border = '2px solid red';
    }

}

function generateRandomMessage() {
    let numberOfWords = Math.min(possibleWords.length, Math.floor(Math.random() * 11) + 1);

    console.log('Start ' + numberOfWords);
    console.log('Start ' + possibleWords);

    let message = '';

    while (numberOfWords > 0) {
        console.log('cycle ' + numberOfWords);

        let randomWordIndex = Math.floor(Math.random() * possibleWords.length);

        message += possibleWords[randomWordIndex] + ' ';

        numberOfWords--;
    }

    return message;
}


sendButton.addEventListener('click', () => {
    sendMessage();
});

messageInput.addEventListener('keydown', (event) => {
    let key = event.key;
    if (key === 'Enter') {
        sendMessage();
    }
});







































