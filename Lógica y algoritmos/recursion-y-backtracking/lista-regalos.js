// Lista de regalos
const gifts = ["Muñeca", "Carro de juguete", "Rompecabezas", "Lego", "Pelota"];

function findGift(gifts, giftName, index = 0) {
    // Caso base: Si llegamos al final de la lista
    if (index === gifts.length) {
        return `${giftName} no está en la lista.`;
    }
    // Caso base: Si encontramos el regalo
    if (gifts[index] === giftName) {
        return `${gifts[index]} está en la posición ${index}.`;
    }
    // Llamada recursiva para seguir buscando el regalo
    return findGift(gifts, giftName, index + 1);

}
// Casos de ejemplo:
let giftToFind = "Lego";
console.log(findGift(gifts, giftToFind));

// Caso cuando el regalo no está en la lista
giftToFind = "Camión";
console.log(findGift(gifts, giftToFind));
