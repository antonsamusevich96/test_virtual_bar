import { ICocktailResponse, TCocktail } from "../types";

export const api = {
  async getCocktailInfo(code: TCocktail): Promise<ICocktailResponse> {
    return await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${code}`,
    ).then((res) => res.json());
  },
};
