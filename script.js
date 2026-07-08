document.getElementById('captchaForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const userInput = document.getElementById('captchaInput').value.trim();
    const actualCaptcha = document.getElementById('captchaValue').innerText.trim();
    const errorMessage = document.getElementById('errorMessage');

    // Case-sensitive exact match check
    if (userInput === actualCaptcha) {
        errorMessage.textContent = "";
        // Clean redirect to result view file
        window.location.href = "result.html";
    } else {
        errorMessage.textContent = "Invalid CAPTCHA entered. Please try again.";
        document.getElementById('captchaInput').value = "";
    }
});

// Mock refresh functionality to simulate a live application environment
document.getElementById('refreshBtn').addEventListener('click', function() {
    const pool = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let newCaptcha = "";
    for (let i = 0; i < 6; i++) {
        newCaptcha += pool.charAt(Math.floor(Math.random() * pool.length));
    }
    document.getElementById('captchaValue').innerText = newCaptcha;
    document.getElementById('errorMessage').textContent = "";
});