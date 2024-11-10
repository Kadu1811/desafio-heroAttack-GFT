// RESOLUÇÃO DO DESAFIO COM CLASSES

class hero{
    constructor(type, attackType){
        this.type = type
        this.attackType = attackType
    }

    escrever(){
        console.log(`O ${this.type} atacou usando ${this.attackType}`)
    }
}

let magoHero = new hero("mago", 'magia')
let warriorHero = new hero("guerreiro", 'espada')
let mongeHero = new hero("monge", 'artes marciais')
let ninjaHero = new hero("ninja", 'shuriken')

magoHero.escrever()
warriorHero.escrever()
mongeHero.escrever()
ninjaHero.escrever()