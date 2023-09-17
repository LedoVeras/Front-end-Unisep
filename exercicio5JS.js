//coleta os numeros em uma string e transforma todos em números
var numeros = prompt("Digite vários numeros separados por um único espaço:")
.replace(/\s+/g, ' ').trim().split(" ").map(parseFloat);

somar = function(arr){
    return arr.reduce((a, b) => a + b, 0)
}

console.log(somar(numeros))

