const input = document.getElementById('input');
const button = document.getElementById('button');

const generateUuid4 = () =>
    input.value = crypto.randomUUID();

generateUuid4();
button.onclick = generateUuid4;
