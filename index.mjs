import { SilverFlame } from "./service.mjs";
import { RustedRing } from "./service.mjs";
import { getData } from "./service.mjs";
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

        

        const data = await getData();

        //Creamos los ingredientes
        const ingredients = Ingredients.load(data);

        //showIngredients(ingredients.ingredients);

        //Creamos el calderon de pociones
        const cauldron = new Cauldron(ingredients);

        // Creamos una instancia de PotionBag
        const potionBag = new PotionBag();

        // Usamos los ingredientes para crear pociones
        const createdPotionBag = potionBag.create(pouch_red, cauldron);
        
        // Mostramos las pociones creadas
        //createdPotionBag.potions.forEach(showPotions);

        const character = new Character(); 
        const Joseph = character.from(RustedRingg.players, createdPotionBag.potions);

        console.log(Joseph);
        
        showCharacter(Joseph);

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

}

execute();