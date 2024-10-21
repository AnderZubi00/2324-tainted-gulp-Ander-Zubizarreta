import { SilverFlame } from "./service.mjs";
import { RustedRing } from "./service.mjs";
import Ingredients from "./ingredients.mjs";
import Cauldron from "./cauldron.mjs";
import PotionBag from "./PotionBag.mjs";
import Character from "./Character.mjs";


const execute = async () => {
    try {
        const SilverFlamee = await SilverFlame();
        const RustedRingg = await RustedRing();

        const pouch_red = RustedRingg.players[0].pouch_red;
        const pouch_green = RustedRingg.players[0].pouch_green;
        const pouch_yellow = RustedRingg.players[0].pouch_yellow;
        const pouch_aged = RustedRingg.players[0].pouch_aged;

        


        //Creamos los ingredientes
        const ingredients = Ingredients.load(SilverFlamee);

        console.log(RustedRingg);

        //Creamos el calderon de pociones
        const cauldron = new Cauldron(ingredients);

        // Creamos una instancia de PotionBag
        const potionBag = new PotionBag();

        // Usamos los ingredientes para crear pociones
        const createdPotionBag = potionBag.create(pouch_aged, cauldron);

        const character = new Character(); 
        const Joseph = character.from(RustedRingg.players, createdPotionBag.potions);

        ///SHOW INGREDIENTS///
        //showIngredients(ingredients.ingredients);

        ///SHOW CREATED POTIONS///
        //createdPotionBag.potions.forEach(showPotions);
        
        ///SHOW CHARACTER///
        //showCharacter(Joseph);

        ///SHOW JOSEPH DRINK///
       Joseph.drinkEmAll();

        


    }
    catch {
        //ERROR
    }
}

function showIngredients(ingredients) {
    if (ingredients.length > 0) {
        console.log("Lista de Ingredientes:");
        console.log("-------------------------------");
        ingredients.forEach(ingredient => {
            console.log(`Nombre: ${ingredient.name}`);
            console.log(`Efectos:`);
            ingredient.effects.forEach(effect => {
                console.log(`   - ${effect.name} (${effect.type})`);
            });
            console.log("-------------------------------");
        });
    }
}

function showPotions(potion) {
    console.log(`Potion: ${potion.name}`);
    console.log(`Value: ${potion.value}`);
    console.log(`Weight: ${potion.weight}`);
    console.log(`Time: ${potion.time}`);
    console.log("-------------------------------");
}

function showCharacter(character){
    console.log(`${character.fullName}`);
    console.log("---------------------"); 
    console.log(`Health: ${character.health}`);
    console.log(`Magick: ${character.magick}`);
    console.log(`Stamina: ${character.stamina}`);

    for (let i = 0; i < character.potions.length; i++) {
        const potion = character.potions[i];
        console.log("Potion " + (i+1) + ": "  + potion.name);      
    }
}

execute();