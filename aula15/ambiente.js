let num = [5, 8, 2, 9, 3]

num.push(1)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições`) 
console.log(`O primeiro valor do vetor é ${num[0]}`)


/* 
Arescentar mais valores ao array pode ser especificando a posicao => num[3] = 6 (vai acrescentar 0 6 na posicao 3 ou acrescentando na ultima posicao => num.push(7) (vai acrescentar 7 na ultima posicao, não importando qual seja)
- num.length diz o comprimento do vetor, a quantidade de elementos 
- num.sort() => vai colocar todos os elementos em ordem crescente -
*/

// - Como Buscar valores dentro de um vetor 
// valores.indexOf(7)

let pos = num.indexOf(8)
if(pos == -1) {
    console.log('o valor não foi encontrado!')
} else {
    console.log(`O valor está na posição ${pos}`)
}

//qunado retorna o valor (-1) signifca que procurou o núero mas não encontrou dentro do vetor 

