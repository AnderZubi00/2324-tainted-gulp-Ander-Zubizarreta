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
                console.log(`${this.fullName} the Former archmage drinks ${potion.name}`);
        
                let healthChange = 0;
                let magickChange = 0;
                let staminaChange = 0;
        
                if (potion.name.includes("Health")) {
                    healthChange = potion.value;
                    this.health += healthChange;
                } else if (potion.name.includes("Magick")) {
                    magickChange = potion.value;
                    this.magick += magickChange;
                } else if (potion.name.includes("Stamina")) {
                    staminaChange = potion.value;
                    this.stamina += staminaChange;
                } else if (potion.name.includes("Poison")) {
                    if (potion.name.includes("Health")) {
                        healthChange = -potion.value;
                        this.health += healthChange;
                    } else if (potion.name.includes("Magick")) {
                        magickChange = -potion.value;
                        this.magick += magickChange;
                    } else if (potion.name.includes("Stamina")) {
                        staminaChange = -potion.value;
                        this.stamina += staminaChange;
                    } else {
                        healthChange = -1;
                        magickChange = -1;
                        staminaChange = -1;
                        this.health += healthChange;
                        this.magick += magickChange;
                        this.stamina += staminaChange;
                    }
                } else if (potion.name.includes("Sanity")) {
                    healthChange = potion.value;
                    magickChange = potion.value;
                    staminaChange = potion.value;
                    this.health += healthChange;
                    this.magick += magickChange;
                    this.stamina += staminaChange;
                } else if (potion.name.includes("Failed")) {
                    console.log(`Failed Potion. ${this.fullName} the Former archmage cannot drink.`);
                } else {
                    healthChange = 1;
                    magickChange = 1;
                    staminaChange = 1;
                    this.health += healthChange;
                    this.magick += magickChange;
                    this.stamina += staminaChange;
                }
        
                if (healthChange !== 0) {
                    const healthMessage = healthChange > 0 ? `gains ${healthChange} points of health` : `loses ${Math.abs(healthChange)} points of health`;
                    console.log(`${this.fullName} the Former archmage ${healthMessage}`);
                }
                if (magickChange !== 0) {
                    const magickMessage = magickChange > 0 ? `gains ${magickChange} points of magick` : `loses ${Math.abs(magickChange)} points of magick`;
                    console.log(`${this.fullName} the Former archmage ${magickMessage}`);
                }
                if (staminaChange !== 0) {
                    const staminaMessage = staminaChange > 0 ? `gains ${staminaChange} points of stamina` : `loses ${Math.abs(staminaChange)} points of stamina`;
                    console.log(`${this.fullName} the Former archmage ${staminaMessage}`);
                }
        
                if (this.health <= 0) {
                    console.log(`${this.fullName} the Former archmage has died due to lack of health.`);
                    break;
                }
                if (this.magick <= 0) {
                    console.log(`${this.fullName} the Former archmage has died due to lack of magick.`);
                    break;
                }
                if (this.stamina <= 0) {
                    console.log(`${this.fullName} the Former archmage has lost all his stamina. He feels completely exhausted.`);
                    break;
                }
                if (potion.name.includes("Sanity")) {
                    console.log(`${this.fullName} the Former archmage has found the Potion of Sanity. His mind is healed. Well done!!`);
                    break;
                }
            }
            console.log("All potions have been consumed. Game over.");
        }
        

        
}

export default Character;