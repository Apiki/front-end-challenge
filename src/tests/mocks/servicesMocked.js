import cocktailDrinks from './cocktailDrinks';
import drinkIngredients from './drinkIngredients';
import drinkCategories from './drinkCategories';
import oneDrink from './oneDrink';
import drinksByIngredient from './drinksByIngredient';
import cocoaDrinks from './cocoaDrinks';
import drinks from './drinks';
import areas from './areas';
import italianMeals from './italianMeals';
import japaneseMeals from './japaneseMeals';
import mealCategories from './mealCategories';
import mealIngredients from './mealIngredients';
import meals from './meals';
import mealsByIngredient from './mealsByIngredient';
import oneMeal from './oneMeal';
import * as mealAPI from '../../services/theMealAPI';
import * as cocktailAPI from '../../services/theCockTailAPI';

function mealsAPIMocked() {
  jest
    .spyOn(mealAPI, 'searchBarFetchMeal')
    .mockImplementation((search, type) => {
      if (type === 'ingredient') return Promise.resolve(mealsByIngredient);
      if (type === 'name') return Promise.resolve(undefined);
      if (type === 'firstLetter') return Promise.resolve('erro');
    });
  jest
    .spyOn(mealAPI, 'getMealDetail')
    .mockImplementation(() => Promise.resolve(oneMeal));
  jest
    .spyOn(mealAPI, 'getInitialMealsRecipes')
    .mockImplementation(() => Promise.resolve(meals));
  jest
    .spyOn(mealAPI, 'getMealsCategoryList')
    .mockImplementation(() => Promise.resolve(mealCategories));
  jest
    .spyOn(mealAPI, 'getMealsByCategory')
    .mockImplementation(() => Promise.resolve(japaneseMeals));
  jest
    .spyOn(mealAPI, 'getMealRecomendations')
    .mockImplementation(() => Promise.resolve(meals));
  jest
    .spyOn(mealAPI, 'getRandomMeal')
    .mockImplementation(() => Promise.resolve(oneMeal[0].idMeal));
  jest
    .spyOn(mealAPI, 'getMealsIngredients')
    .mockImplementation(() => Promise.resolve(mealIngredients));
  jest
    .spyOn(mealAPI, 'getMealsArea')
    .mockImplementation(() => Promise.resolve(areas));
  jest
    .spyOn(mealAPI, 'getMealsByArea')
    .mockImplementation(() => Promise.resolve(italianMeals));
}

function cocktailsAPIMocked() {
  jest
    .spyOn(cocktailAPI, 'searchBarFetchCockTail')
    .mockImplementation((search, type) => {
      if (type === 'ingredient') return Promise.resolve(drinksByIngredient);
      if (type === 'name' && search === 'test one drink') {
        return Promise.resolve(oneDrink);
      }
      if (type === 'name' && search === 'test no result') {
        return Promise.resolve(undefined);
      }
      if (type === 'name') return Promise.resolve(cocoaDrinks);
      if (type === 'firstLetter' && search.length > 1) return Promise.resolve('erro');
      if (type === 'firstLetter') return Promise.resolve(drinks);
    });
  jest
    .spyOn(cocktailAPI, 'getDrinkDetail')
    .mockImplementation(() => Promise.resolve(oneDrink));
  jest
    .spyOn(cocktailAPI, 'getInitialDrinksRecipes')
    .mockImplementation(() => Promise.resolve(drinks));
  jest
    .spyOn(cocktailAPI, 'getDrinksCategoryList')
    .mockImplementation(() => Promise.resolve(drinkCategories));
  jest
    .spyOn(cocktailAPI, 'getDrinksByCategory')
    .mockImplementation(() => Promise.resolve(cocktailDrinks));
  jest
    .spyOn(cocktailAPI, 'getDrinkRecomendations')
    .mockImplementation(() => Promise.resolve(drinks));
  jest
    .spyOn(cocktailAPI, 'getRandomDrink')
    .mockImplementation(() => Promise.resolve(oneDrink[0].idDrink));
  jest
    .spyOn(cocktailAPI, 'getDrinksIngredients')
    .mockImplementation(() => Promise.resolve(drinkIngredients));
}

export default function servicesMocked() {
  mealsAPIMocked();
  cocktailsAPIMocked();
}
