import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
// const fetch = require('node-fetch');

function Food() {
   
      const foodList = [
        { name: "Chicken", symbol: "chicken" },
        { name: "Steak", symbol: "steak" },
        { name: "Butter", symbol: "butter" },
        { name: "Fish", symbol: "fish" },
        { name: "Pork", symbol: "pork" },
        { name: "Ribs", symbol: "ribs" },
        { name: "Pasta", symbol: "pasta" },
    ];
    const [food,setFood] = useState(null)
   


    // const getItem = async () =>{
    //   //   const url = 'https://edamam-food-and-grocery-database.p.rapidapi.com/api/food-database/v2/parser?nutrition-type=cooking&category%5B0%5D=generic-foods&health%5B0%5D=alcohol-free&knownAs%5B0%5D=Cheese';
    
    //   // const options = {
    //   //     method: 'GET',
    //   //     headers: {
    //   //         'X-RapidAPI-Key': 'e8015e2cf4msh97855d9c2558c02p122c3ajsnaafe58f99606',
    //   //         'X-RapidAPI-Host': 'edamam-food-and-grocery-database.p.rapidapi.com'
    //   //     }
    //   // };

    //     //   const url = 'https://edamam-edamam-nutrition-analysis.p.rapidapi.com/api/nutrition-data?ingr=%3CREQUIRED%3E&nutrition-type=cooking';
    //     // const options = {
    //     //   method: 'GET',
    //     //   headers: {
    //     //     'X-RapidAPI-Key': 'e8015e2cf4msh97855d9c2558c02p122c3ajsnaafe58f99606',
    //     //     'X-RapidAPI-Host': 'edamam-edamam-nutrition-analysis.p.rapidapi.com'
    //     //   }
    //     // };


    //     const url = 'https://edamam-recipe-search.p.rapidapi.com/search?q=steak';
    //     const options = {
    //       method: 'GET',
    //       headers: {
    //         'X-RapidAPI-Key': 'e8015e2cf4msh97855d9c2558c02p122c3ajsnaafe58f99606',
    //         'X-RapidAPI-Host': 'edamam-recipe-search.p.rapidapi.com'
    //       }
    //     };
    //     try {
    //         const response = await fetch(url, options);
    //         const result = await response.json();
    //         //console.log(result);
    //         // setFood(result.hints)
    //         setFood(result)
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }

    // useEffect(()=>{
    //     getItem()

    //     // fetchFood()
    // },[])

  return (
    <div >
      <h1>The food page</h1>
      <h1>Check out our selections</h1>
      <hr />
      <div className='food'>
         {
            //  food && 
            foodList.map((item,i)=>{
              //console.log(item.q)
                return <Link key={i} 
                to={`/ingrediants/:${item.symbol}`}><h2>{item.name}</h2></Link>
            })
            // <h2>{food.q}</h2>
          }
      </div>
     
    </div>
  )
}

export default Food
