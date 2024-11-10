// RESOLUÇÃO DO DESAFIO COM FUNÇÃO

let heroName = ['Rhagnar', 'Asmodeus', 'Lokbhrar', 'Loki', 'Raven', 'Draktar', 'Kadu']
let randomName = heroName[Math.floor(Math.random() * heroName.length)];


let minAge = Math.ceil(14);
let maxAge = Math.floor(38);
var heroAge =  Math.floor(Math.random() * (maxAge - minAge + 1)) + minAge;


let heroType = ['guerreiro', 'mago', 'monge', 'ninja']
let randomType = heroType[Math.floor(Math.random() * heroType.length)];

function heroAttack(randomType) {
    let heroAttackName

    if (randomType === 'guerreiro') {
        return heroAttackName = "espada"
    } else if (randomType === 'mago') {
        return heroAttackName = "magia"
    } else if (randomType === 'monge') {
        return heroAttackName = "artes maciais"
    } else if (randomType === 'ninja') {
        return heroAttackName = "shuriken"
    }

    return heroAttackName
}


console.log(`O herói ${randomName} de ${heroAge} anos e classe ${randomType} atacou usando ${heroAttack(randomType)}`)