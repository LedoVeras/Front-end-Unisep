import random

pessoas = []

# número de pessoas para analisar
NUM_PEOPLE = 15

# gera as pessoas aleatoriamente
for i in range(NUM_PEOPLE):
    pessoa = {
        'sexo': 'H' if random.random() < 0.5 else 'M',
        'altura': round((1.2 + random.random()) * 100) / 100
    }
    pessoas.append(pessoa)

#sorteia o array das pessoas com base na altura
pessoas.sort(key=lambda pessoa: pessoa['altura'])

homens_altura = [pessoa['altura'] for pessoa in pessoas if pessoa['sexo'] == 'H']
media_alt_homens = round(sum(homens_altura) / len(homens_altura), 2) if homens_altura else 0

#pega somente as mulheres do array
mulheres = [pessoa for pessoa in pessoas if pessoa['sexo'] == 'M']

print(f"Menor altura: {pessoas[0]['altura']} Maior altura: {pessoas[-1]['altura']}")
print(f"Média da altura dos homens: {media_alt_homens}")
print(f"Quantidade de mulheres: {len(mulheres)}")