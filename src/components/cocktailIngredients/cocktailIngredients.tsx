import React from "react";
import { getKeyPairs } from "../../shared/utils";
import styles from "./styles.module.scss";
import { IDrink } from "../../types";

interface IProps {
  drink: IDrink;
}

const CocktailIngredients = ({ drink }: IProps) => {
  const ingredients = getKeyPairs(drink, "strIngredient", "strMeasure");
  return (
    <div className={styles.container}>
      <h2>List of Indigents</h2>
      <div className={styles.list}>
        {ingredients.map((el) => (
          <div key={el[2]}>
            {el[0]} {el[1]}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CocktailIngredients;
