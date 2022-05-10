class warrior {
    constructor(life, power) {
        this.life = life
        this.attack = power;
    }
    defend(damage) {
        console.log(this.life - damage);
    }
}

class maya extends warrior {
    constructor(life, power) {
        super(life, power)
    }
    drinkColaCao() {
        this.attack += 10
        console.log(`\nEl maya ha bebido ColaCao y ha incrementado su poder, ahora es de ${this.attack}`)
    }
}

class azteca extends warrior {
    constructor(life, power) {
        super(life, power)
    }
    drinkNesquik() {
        this.life += 10;
        console.log(`\nEl azteca ha bebido Nesquik y ha incrementado su salud, ahora es: ${this.life}`);
    }
}

let ColaCaoLover = new maya(50, 50);
let NesquikLover = new azteca(50, 20);

console.log(`\nOriginalmente el guerrero Azteca tiene ${NesquikLover.life} puntos de salud y ${NesquikLover.attack} puntos de ataque`);
console.log(`\nOriginalmente el guerrero Maya tiene ${ColaCaoLover.life} puntos de salud y ${ColaCaoLover.attack} puntos de ataque`);

NesquikLover.drinkNesquik();
ColaCaoLover.drinkColaCao();
NesquikLover.defend(ColaCaoLover.attack);
ColaCaoLover.defend(NesquikLover.attack);