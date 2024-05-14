import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import recipe from '../base/data.json'
import {Routes, Route, Link} from 'react-router-dom'
import './recipe.css'


const Recipe = () => {
    const {id} = useParams()
    let recipeId = id

  return (
   <div className='recipe-Container'>
      <div className='recipes'>
        {
          recipe.filter(el => el.id == recipeId).map(el => (
            <div className='recipe__title'>
              <img src={el.poster}></img>
              <h1>{el.title}</h1>
              <p>{el.description}</p>
            </div>
          ))
        }
        <h1>Ингридиенты:</h1>
        {
            recipe.filter(el => el.id == recipeId).flatMap(elem => elem.ingridients).map(el => (
              <ul>
                <li>{el} <br></br></li>
              </ul>
          ))
        }
        <h1>Способ приготовленияя:</h1>
        {
            recipe.filter(el => el.id == recipeId).flatMap(elem => elem.cookin).map(el => (
                <ul>
                  <li>{el} <br></br></li>
                </ul>
            ))
        }
        <h1>Видео пиготовления:</h1>
        {
            recipe.filter(el => el.id == recipeId).map(el => (
              <iframe width="560" height="315" src={el.vedio} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            ))
        }
      </div>
      <Link to={`/`}>
          <button>Назад</button>
      </Link>
   </div>
  )
}

export default Recipe