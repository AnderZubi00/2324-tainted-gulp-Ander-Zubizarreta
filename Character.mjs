class Character {
    constructor(fullName,health,magick,stamina,potions) {
        this.fullName = fullName;
        this.health = health;
        this.magick = magick;
        this.stamina = stamina;
        this.potions = potions;
    }

    from(playerData,potions){

        console.log(playerData);

        console.log(potions);

        for (let i = 0; i < playerData.length; i++) {
                const player = playerData[i];

                const potion = cauldron.createPotion(ingredient1, ingredient2);
                
                if (potion) {
                    this.potions.push(potion);
                }
            
        }

        return this;
    }
}

export default Character;