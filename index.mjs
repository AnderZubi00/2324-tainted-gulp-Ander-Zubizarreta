import { SilverFlame } from "./service.mjs";
import { RustedRing } from "./service.mjs";
import { getData } from "./service.mjs";
import Ingredients from "./ingredients.mjs";
import Cauldron from "./cauldron.mjs";


const execute = async () => {
    try
    {
        const SilverFlamee = await SilverFlame();
        const RustedRingg = await RustedRing();

        const data = await getData();

        //Creamos los ingredientes
        const ingredients = Ingredients.load(data);

        //showIngredients(ingredients);


        //Creamos el calderon de pociones
        const cauldron = new Cauldron(ingredients);

        const potion1 = cauldron.createPotion("Bear Claws", "Bee");
        showPotion(potion1);

        const potion2 = cauldron.createPotion("Chicken's Egg", "Chaurus Eggs");
        showPotion(potion2);

        const potion3 = cauldron.createPotion("Chaurus Eggs", "Bleeding Crown");
        showPotion(potion3);

        const potion4 = cauldron.createPotion("Nightshade", "Ectoplasm");
        showPotion(potion4);

    }
    catch
    {
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

function showPotion(potion){
    console.log(`${potion.name}`);
    console.log(`Value:          ${potion.value}`);
    console.log(`Weight:         ${potion.weight}`);
    console.log(`Time:           ${potion.time}`);
    console.log(`-------------------------------`); 
}

execute();