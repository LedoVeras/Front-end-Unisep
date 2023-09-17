
//coleta as notas em uma única string e transforma em um array de floats
var notas = prompt("Digite as três notas do aluno separadas por espaço:")
.replace(/\s+/g, ' ').trim().split(" ").map(parseFloat);

//calcula a média
var average = notas.reduce((a, b) => a + b, 0) / 3;

if(average >= 7){
    aprovado(average);
}else if(average > 4)
{
    console.log(`o aluno ficou em recuperação com média de ${average}`);

    let recu_nota = parseFloat(prompt("Digite a nota do aluno na recuperação:").trim());

    let new_average = (recu_nota + average) / 2;

    //verifica se tirou mais que 5 na média para ser aprovado
    if(new_average >= 5)
        aprovado(new_average);
    else
        reprovado(new_average);
}
else
    reprovado(average);

function aprovado(nota){
    console.log(`o aluno foi aprovado com média de ${nota}`);
}

function reprovado(nota){
    console.log(`o aluno foi reprovado com média de ${nota}`);
}