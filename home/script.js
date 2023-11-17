function detectFakeNews() {}
function validateUrl() {
    const urlInput = document.getElementById('urlInput');
    const validationResult = document.getElementById('validationResult');
    const urlValue = urlInput.value.trim();  // Trim whitespace from the input value

    if (urlValue === '') {
        validationResult.innerText = 'Please enter a URL.';
        validationResult.style.color = 'red';
    } else if (urlInput.checkValidity()) {
        validationResult.innerText = 'Valid URL!';
        validationResult.style.color = 'green';
    } else {
        validationResult.innerText = 'Invalid URL. Please enter a valid URL.';
        validationResult.style.color = 'red';
    }
}
