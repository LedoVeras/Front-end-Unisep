
var numeros = prompt("Digite tres numeros separados por espaços:")
  .split(" ").map(parseFloat);

// Verifica se existe três números no array
if (numeros.length === 3) {
    // Calcula a média ponderada
    var media_ponderada = (numeros[0] * 2 + numeros[1] * 3 + numeros[2] * 5) / 10;

    console.log("A média ponderada é: " + media_ponderada.toFixed(2));
} else {
    console.log("insira exatamente três números, separados por espaço");
}