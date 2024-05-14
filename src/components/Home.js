import React from 'react'
import {Routes, Route, Link, useParams} from 'react-router-dom'
import recipe from '../base/data.json'
import './home.css'
import { useEffect, useState } from 'react'

export const Home = () => {
    const {id} = useParams()

    const [value, setValue] = useState('')
    const [chek, setChek] = useState(false)

    useEffect(() => {
        if (filteredRecipes == '') {
          setChek(true);
        } else {
          setChek(false)
        }
      }, [value]);

    const filteredRecipes = recipe.filter(recipe => {
        return (recipe.title.toLowerCase().includes(value.toLowerCase()))
      })

      const handleKeyPress = (event) => {
        if(event.key === 'Enter'){
          setValue(event.target.value)
        }
      };

  return (
    <div className='recipe-card'>
        <input type="text" placeholder='введите название блюда' onKeyPress={handleKeyPress}></input>
        <div className='flex-row'>
        {
            filteredRecipes.map(el => (
                <div className='card'>
                        <h1 className='home__h1'>{el.title}</h1>

                    <img src={el.poster}></img>
                    <Link key={el.id} to={`/recipe/${el.id}`}>
                        <button>Рецепт</button>
                    </Link>
                </div>
            ))
         }
            <div className={chek == false ? 'hide' : 'errore' }>
            <h1>Такого у нас пока нет, извините</h1>
        </div>     
        </div>
    </div>

  )
}

export default Home
