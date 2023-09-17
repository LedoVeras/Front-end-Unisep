pessoas = [];

//numero de pessoas para analizar
NUM_PEOPLE = 15;

//gera as pessoas aleatoriamente

for (var i = 0; i < NUM_PEOPLE; i ++) {
    pessoa = {
        sexo : Math.random() < 0.5 ? "H" : "M",
        altura : Math.round( (1.2 + Math.random()) * 100) / 100
    };
    pessoas.push(pessoa); 
}

//sorteia o array das pessoas com base na altura
size_sorted = pessoas.sort((a, b) => {return a.altura - b.altura})

homens_altura = pessoas.filter(el => el.sexo == "H").map(el => el.altura)
media_alt_homens = Math.round( homens_altura.reduce((a, b) => a + b, 0) * 100 / homens_altura.length ) / 100;

//pega somente as mulheres do array
mulheres = pessoas.filter(el => el.sexo == "M")


console.log("menor altura: " + size_sorted[0].altura + " maior altura: " + size_sorted[size_sorted.length - 1].altura +
            " \n média da altura dos homens: " + media_alt_homens +
            " \n quantidade de mulheres: " + mulheres.length)