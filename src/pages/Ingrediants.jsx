import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

function Ingrediants() {
    let item = useParams().item
    const [food,setFood] = useState('')

    const getItem = async () =>{
        const url = `https://edamam-recipe-search.p.rapidapi.com/search?q=${item}`;
        const options = {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': 'e8015e2cf4msh97855d9c2558c02p122c3ajsnaafe58f99606',
            'X-RapidAPI-Host': 'edamam-recipe-search.p.rapidapi.com'
          }
        };
        try {
            const response = await fetch(url, options);
            const result = await response.json();
            //console.log(result);
            // setFood(result.hints)
            setFood(result.hits)
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(()=>{
         getItem()

        // fetchFood()
    },[])

     //https://api.github.com/users/kucharze
  return (
    <div>
      <h1>The Ingrediants</h1>
      <h2>See recipe's and ingrediants involving {item}</h2>
      {
        food && food.map((item)=>{
            // console.log(typeof(item.recipe.ingredientLines))
            return <div key={item.recipe.label}>
                <h1>{item.recipe.label}</h1>
                <img src={item.recipe.image}/>
                <h2>Recipe:</h2>
                <ul>
                    {
                        item.recipe.ingredientLines.map((i)=>{
                            return <li key={i}>{i}</li>
                        })
                    }
                </ul>
            </div>
        })
      }
      {/* <h1>{food && food.hits[0].recipe.label}</h1>
      <h1>{food && food.hits[1].recipe.label}</h1>
      <h1>{food && food.hits[2].recipe.label}</h1> */}
    </div>
  )
}

export default Ingrediants
