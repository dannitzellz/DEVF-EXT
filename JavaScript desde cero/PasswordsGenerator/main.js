//Seleccion de elementos del DOM
const passwordOutput = document.getElementById("password-output");
const lengthSlider = document.getElementById("length-slider");
const lengthValue = document.getElementById("length-value");
const checkBoxes = document.querySelectorAll("input[type=checkbox]");
const strengthBars = document.querySelectorAll(".bar");
const strengthText = document.getElementById("strength-text");
const generateButton = document.getElementById("generate-button");
const copyButton = document.getElementById("copy-button");

const CHAR_SETS = {
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    numbers: '0123456789',
    symbols: '~!@#$%^&*()_+{}":?><;.,'
};

//funcion para actualizar la barra de cantidad de caracteres
const updateSlider = () => {
    lengthValue.textContent = lengthSlider.value;
    
    const min = lengthSlider.min;
    const max = lengthSlider.max;
    const val = lengthSlider.value;
    const percentage = ((val - min) * 100) / (max - min);

    lengthSlider.style.background = `linear-gradient(to right, #a4ffaf ${percentage}%, #18171F ${percentage}%)`;
};

//asignamos la funcion al evento input del slider
lengthSlider.addEventListener("input", () => {
    updateSlider();
    updateStrength();
});

function calcStrength() {
    const length = parseInt(lengthSlider.value);
    
    let checkedCount = 0;
    checkBoxes.forEach(checkbox => {
        if (checkbox.checked) checkedCount++;
    });

    if (length === 0 || checkedCount === 0) return 0;

    if (length < 6) return 1;
    if (length < 8) return 2;
    let score = checkedCount; 
    if (length >= 10) score += 1;

    if (score <= 2) return 2; 
    if (score === 3) return 3; 
    return 4;
}

function updateStrength() {
    const strength = calcStrength();
    const colors = ["#F64A4A", "#fb7c58", "#f8cd65", "#a4ffaf"]; 
    const labels = ["TOO WEAK", "WEAK", "MEDIUM", "STRONG"];

    if (strength === 0) {
        strengthText.textContent = ""; 
        strengthBars.forEach(bar => {
            bar.style.backgroundColor = "transparent";
            bar.style.borderColor = "#403F4C"; 
        });
        return;
    }
    strengthText.textContent = labels[strength - 1];


    strengthBars.forEach((bar, index) => {
        if (index < strength) {
            bar.style.backgroundColor = colors[strength - 1];
            bar.style.borderColor = colors[strength - 1];
        } else {
            bar.style.backgroundColor = "transparent";
            bar.style.borderColor = "#403F4C";
        }
    });
}

checkBoxes.forEach(checkbox => {
    checkbox.addEventListener("change", updateStrength);
});

function generatePassword() {
    let staticPassword = "";
    let randomPassword = "";
    checkBoxes.forEach(checkbox => {
        if (checkbox.checked) {
            staticPassword += CHAR_SETS[checkbox.value];
        }
    });
    if (staticPassword.length === 0) {
            return;
    }
    for (let i = 0; i < lengthSlider.value; i++) {
        let randomIndex = Math.floor(Math.random() * staticPassword.length);
        randomPassword += staticPassword[randomIndex];
    }
    passwordOutput.value = randomPassword;
}

generateButton.addEventListener("click", generatePassword);

copyButton.addEventListener("click", () => {
    if (!passwordOutput.value) return;
    if (navigator.clipboard) {
        navigator.clipboard.writeText(passwordOutput.value)
            .then(() => alert("Password copied!"))
            .catch(err => console.error("Error copying text: ", err));
    } else {
        alert("Clipboard API not supported in this context. Please copy manually.");
    }
});

updateSlider();
updateStrength();