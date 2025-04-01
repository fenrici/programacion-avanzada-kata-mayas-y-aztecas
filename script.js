class Warrior {
    constructor(life, power) {
        this.life = life;
        this.power = power;
    }

    attack() {
        return this.power;
    }

    defend(damage) {
        this.life -= damage;
        console.log(`Vida restante: ${this.life}`);
    }
}

class Maya extends Warrior {
    constructor(life, power) {
        super(life, power);
    }

    drinkColaCao() {
        this.power += 10;
        console.log(`Maya Toma colaCao, Poder aumentado a ${this.power}`);
    }
}

class Aztec extends Warrior {
    constructor(life, power) {
        super(life, power);
    }

    drinkNesquik() {
        this.life += 10;
        console.log(`Aztec Toma nesquik, Vida aumentada a ${this.life}`);
    }
}

// guerreros
const maya = new Maya(100, 20);
const aztec = new Aztec(100, 25);

// Cadena de golpes
aztec.drinkNesquik(); // Azteca bebe Nesquik
maya.drinkColaCao(); // Maya bebe Cola Cao

console.log("Maya ataca a Azteca");
aztec.defend(maya.attack());
console.log(`Aztec se defiende`) // Maya ataca a Azteca. Azteca defiende.

console.log("Azteca ataca a Maya");
maya.defend(aztec.attack());
console.log(`Maya se defiende`) // Azteca ataca a Maya. Maya defiende.
