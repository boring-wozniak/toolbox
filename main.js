const inputField = document.getElementById('input');
const copyButton = document.getElementById('copy');

copyButton.addEventListener('click', () =>
    navigator.clipboard.writeText(inputField.value)
);
