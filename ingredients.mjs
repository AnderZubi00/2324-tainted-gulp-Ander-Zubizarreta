import Ingredient from "./ingredient.mjs";

class Ingredients {


    constructor(ingredients) {

        this.ingredients = ingredients;
        
    }

    static load(data){
        return new Ingredients(data.ingredients.map(Ingredient.from));
    }

    find(name){
        const ingredient = this.ingredients.find(element => element.hasName(name));
        if(ingredient === undefined)
            throw new Error(`Unknow ingredient ${name}`);

        return ingredient;
    }


}

export default Ingredients;