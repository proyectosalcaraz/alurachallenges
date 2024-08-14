// script.js

function encryptText() {
    const inputText = document.getElementById('inputText').value;
    const outputText = document.getElementById('outputText');
    const message = document.getElementById('message');

    if (!inputText.trim()) {
        outputText.value = "";
        message.textContent = "Lo siento, ningún mensaje fue encontrado";
        return;
    }

  
    const shift = 3;
    let result = '';

    for (let i = 0; i < inputText.length; i++) {
        let char = inputText.charCodeAt(i);

        if (char >= 65 && char <= 90) {
            result += String.fromCharCode(((char - 65 + shift) % 26) + 65);
        } else if (char >= 97 && char <= 122) {
            result += String.fromCharCode(((char - 97 + shift) % 26) + 97);
        } else {
            result += inputText[i];
        }
    }

    outputText.value = result;
    message.textContent = "";
}

function decryptText() {
    const inputText = document.getElementById('inputText').value;
    const outputText = document.getElementById('outputText');
    const message = document.getElementById('message');

    if (!inputText.trim()) {
        outputText.value = "";
        message.textContent = "Lo siento, ningún mensaje fue encontrado";
        return;
    }

   
    const shift = 3;
    let result = '';

    for (let i = 0; i < inputText.length; i++) {
        let char = inputText.charCodeAt(i);

        if (char >= 65 && char <= 90) {
            result += String.fromCharCode(((char - 65 - shift + 26) % 26) + 65);
        } else if (char >= 97 && char <= 122) {
            result += String.fromCharCode(((char - 97 - shift + 26) % 26) + 97);
        } else {
            result += inputText[i];
        }
    }

    outputText.value = result;
    message.textContent = "";
}

function copyText() {
    const outputText = document.getElementById('outputText');
    
    if (outputText.value) {
        outputText.select();
        document.execCommand('copy');
        alert('Texto copiado al portapapeles');
    } else {
        alert('No hay texto para copiar');
    }
}

function clearText() {
    document.getElementById('inputText').value = "";
    document.getElementById('outputText').value = "";
    document.getElementById('message').textContent = "";
}
