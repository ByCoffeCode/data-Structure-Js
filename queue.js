// fila - FIFO: First In First Out

// Primeiro elemento a entrar na fila, é o primeiro a sair dela

// Front (frente) é a referência do primeiro elemento a entrar na fila

// Back (fundo) é a referência do último elemento a entrar na fila

// Métodos

// enqueue(): adicionar um elemento ao final da fila

// dequeue(): remover o first elemento a entrar na fila

// outros métodos podem ser implementados como o size() para
// mostar o tamanho da fila ou front() para pegar o
// primeiro elemento da fila, dentre tantos outros.

// Passo 1: Modelando

class Queue{
    constructor(){
        this.data = []
    }

    enqueue(item){
        this.data.push(item)
        console.log(`${item} chegou na fila!`)
    }

    dequeue(){
        const item = this.data.shift()
        console.log(`${item} Saiu da fila!`)
    }
}

// passo 2: Utilizando

const fila = new Queue()

fila.enqueue('Marina')
fila.enqueue('João')
fila.enqueue('Hariel')
fila.dequeue()
fila.dequeue()
fila.dequeue()


