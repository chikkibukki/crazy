function showMessage(answer) {
    const messageDiv = document.getElementById('message');
    if (answer === 'yes') {
        messageDiv.innerHTML = "Yay! You made me the happiest person in the world!";
        messageDiv.style.color = "#4caf50";
    } else {
        messageDiv.innerHTML = "Oh no! But I will always cherish you.";
        messageDiv.style.color = "#f44336";
    }
}