window.onload = () => {
    let inputName;
    let inputMessage;
    const button = document.querySelector('.btn');
    const messages = document.querySelector('#messages');

    button.addEventListener('click', () => {
        inputName = document.querySelector('#inputName').value;
        inputMessage = document.querySelector('#inputMessage').value;

        const name = document.createElement('h2');
        name.innerHTML = inputName.trim() + ':';

        const message = document.createElement('p');
        message.innerHTML = inputMessage;

        messages.append(name);
        messages.append(message);
    });
};
