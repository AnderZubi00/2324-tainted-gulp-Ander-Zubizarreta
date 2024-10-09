class Character {
    constructor(fullName,health,magick,stamina,potions) {
        this.fullName = fullName;
        this.health = health;
        this.magick = magick;
        this.stamina = stamina;
        this.potions = potions;
    }

    from(playerData,potions){

        for (let i = 0; i < playerData.length; i++) {
                const player = playerData[i];

                const fullName = `${player.name} the ${player.class}`;
                const { health, magick, stamina } = player;

                return new Character(fullName, health, magick, stamina, potions);
    }
            
        }

    drinkEmAll(){
        for (let i = 0; i < this.potions.length; i++) {
            const potion = this.potions[i];

            console.log(`-------------------------------`);
            console.log(`Health: ${this.health}`);
            console.log(`Magick: ${this.magick}`);
            console.log(`Stamina: ${this.stamina}`);
            console.log(`-------------------------------`);
            console.log(`${this.fullName} drinks ${potion.name}`);

            if (potion.name.includes("Health")) {
                this.health += potion.value;
            } else if (potion.name.includes("Magick")) {
                this.magick += potion.value;
            } else if (potion.name.includes("Stamina")) {
                this.stamina += potion.value;
            } else if (potion.name.includes("Poison")) {
                
                if (potion.name.includes("Health")) {
                    this.health -= potion.value;
                } else if (potion.name.includes("Magick")) {
                    this.magick -= potion.value;
                } else if (potion.name.includes("Stamina")) {
                    this.stamina -= potion.value;
                } else {
                    this.health -= 1;
                    this.magick -= 1;
                    this.stamina -= 1;
                }
            } else if (potion.name.includes("Sanity")) {
                this.health += potion.value;
                this.magick += potion.value;
                this.stamina += potion.value;
            } else if (potion.name.includes("Failed")) {
                console.log("Failed potion! No effect.");
            } else {
                this.health += 1;
                this.magick += 1;
                this.stamina += 1;
            }

              if (this.health <= 0) {
                console.log(`${this.fullName} has died due to lack of health.`);
                break;
            }
            if (this.magick <= 0) {
                console.log(`${this.fullName} has died due to lack of magick.`);
                break;
            }
            if (this.stamina <= 0) {
                console.log(`${this.fullName} is exhausted and cannot move.`);
                break;
            }
            if (potion.name.includes("Sanity")) {
                console.log(`Joseph drank the Potion of Sanity. Game completed!`);
                break;
            }
        }
        console.log("All potions have been consumed. Game over.");
    }

        
}

export default Character;