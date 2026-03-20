function findLongestWord(text) {
    const words = text.split(' ');

    let longestWord = '';

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longestWord.length) { 
            longestWord = words[i];
        }
    }
    return longestWord;
}


const text = "JavaScript es un lenguaje de programación increíble para aprender.";
console.log(findLongestWord(text)); // Resultado esperado: "programación"