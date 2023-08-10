document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    var inputs = document.querySelectorAll('input[type="text"], input[type="email"], textarea');
    var isAnyFieldEmpty = Array.from(inputs).some(function(input) {
        return input.value.trim() === '';
    });

    var messageElement = document.createElement('p');
    if (isAnyFieldEmpty) {
        messageElement.textContent = 'Please Fill Your Name, Email and Message!';
        messageElement.style.color = 'red';
    } else {
        messageElement.textContent = 'Message Sent!';
        messageElement.style.color = 'green';
    }

    document.querySelector('.container').appendChild(messageElement);
    document.querySelector('form').reset();
});