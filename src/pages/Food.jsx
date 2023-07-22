import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

function Food() {
   
      const foodList = [
        { name: "Chicken", symbol: "chicken" },
        { name: "Steak", symbol: "Steak" },
        { name: "Dash", symbol: "DASH" },
    ];
    const [food,setFood] = useState(null)
   
 
    const url = 'https://edamam-food-and-grocery-database.p.rapidapi.com/api/food-database/v2/parser?nutrition-type=cooking&category%5B0%5D=generic-foods';
// const url = "http://www.edamam.com/ontologies/edamam.owl#Food_01001"
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'e8015e2cf4msh97855d9c2558c02p122c3ajsnaafe58f99606',
            'X-RapidAPI-Host': 'edamam-food-and-grocery-database.p.rapidapi.com'
        }
    };

    const getItem = async () =>{
        try {
            const response = await fetch(url, options);
            const result = await response.json();
            // console.log(result.hints);
            setFood(result.hints)
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(()=>{
        getItem()
    },[])

  return (
    <div>
      <h1>The food page</h1>
      <h1>Hello</h1>
      {
        food && 
        food.map((item,i)=>{
          console.log(item.food)
            return <Link key={i} to={`/ingrediants/:${item.food}`}><h2>{item.food.label}</h2></Link>
        })
      }
    </div>
  )
}

export default Food
