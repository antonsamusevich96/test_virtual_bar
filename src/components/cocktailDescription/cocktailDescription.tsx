import React from 'react'
import styles from './styles.module.scss'
import { IDrink } from '../../types'

interface IProps {
  drink: IDrink
}

const CocktailDescription = ({ drink }: IProps) => {
  return (
    <div className={styles.description}>
      <div className={styles.info}>
        <h1>{drink.strDrink}</h1>
        <div>{drink.strCategory}</div>
        <div>{drink.strAlcoholic}</div>
        <div>{drink.strGlass}</div>
        <div className={styles.instruction}>
          <h2>Instructions:</h2>
          <div>{drink!.strInstructions}</div>
        </div>
      </div>
      <img className={styles.image} loading={'lazy'} src={drink!.strDrinkThumb} alt={'cocktail image'} />
    </div>
  )
}

export default CocktailDescription
