
import Cauldron from './cauldron.mjs';


class PotionBag {
    constructor() {
        this.potions = [];
    }

    create(ingredients,cauldron){
           
        for (let i = 0; i < ingredients.length; i++) {
            for (let j = i + 1; j < ingredients.length; j++) {
                const ingredient1 = ingredients[i];
                const ingredient2 = ingredients[j];

                const potion = cauldron.createPotion(ingredient1, ingredient2);
                
                if (potion) {
                    this.potions.push(potion);
                }
            }
        }

        return this;
    }
}

export default PotionBag;