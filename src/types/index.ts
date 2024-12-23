export const COCKTAIL_CODES = {
  MARGARITA: "margarita",
  MOJITO: "mojito",
  A1: "a1",
  KIR: "kir",
};

export type TCocktail = (typeof COCKTAIL_CODES)[keyof typeof COCKTAIL_CODES];

export interface ICocktailResponse {
  drinks: IDrink[];
}

interface IngredientsAndMeasures {
  [key: `strIngredient${number}` | `strMeasure${number}`]: string | null;
}

export interface IDrink extends IngredientsAndMeasures {
  idDrink: string;
  strAlcoholic: string;
  strCategory: string;
  strDrink: string;
  strDrinkThumb: string;
  strGlass: string;
  strInstructions: string;
}
