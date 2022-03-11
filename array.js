//Características

// Acesso pelo index

// Respeita a ordem de inserção dos elementos

// Aceita valores duplicados

// Depedendo do tamanho do Arrays, para encontrar e/ou deletar um elemento,
// será necessário um uso maior de performace

// São dinâmicos no JS

// Você poderá ter dados de difentes tipos misturados dentro de um array. String, numbers
// booleans, objetos, funções e até outros arrays

// Métodos já implementados

// push(), pop(), find(), filter entre outros.

const pilotos = ['Senna', 'Prost', 'Schumacher', 'Hamilton']

// a indexação (index) começa pelo número 0

console.log(pilotos[0])
console.log(pilotos[3])

// acessar o tamanho do array

console.log(pilotos.length)

// interável

for (let piloto of pilotos){
    console.log(piloto)
}

// adicionar elementos

pilotos.push('Alonso')
console.log(pilotos)

// Encontrar um elemento
// find é ruim quando têm muitos elementos 
const senna = pilotos.find( piloto => piloto === 'Senna')
console.log(senna)

// deletar um elementos

pilotos.splice(1,1)
console.log(pilotos)