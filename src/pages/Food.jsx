import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
// const fetch = require('node-fetch');

function Food() {
   
      const foodList = [
        { name: "Chicken", symbol: "chicken" },
        { name: "Steak", symbol: "steak" },
        { name: "butter", symbol: "butter" },
    ];
    const [food,setFood] = useState(null)

    const fetchFood = async () =>{
      const apiID = 'b70795e3'

      var title = 'Test-Title'

      var info = ['1 cup sugar','1 cup sugar 4 sticks butter']

      const apiKey = '12fe01ecc2d68c847c4ac6e0c630491d'

      const uri = `https://api.edaman.com/api/nurtrition-details?app_id=${apiID}&app_key=${apiKey}`

      const options = {
        method: 'POST',
        cache: 'no-cache',
          headers: {
              'Content-Type' : 'application/json'
          },
          body: JSON.stringify({title,info})
      }

      var item = await fetch(uri,options).then(item.json())
      
      // var res = await item.json()

      console.log(item)
    }
   


    const getItem = async () =>{
      //   const url = 'https://edamam-food-and-grocery-database.p.rapidapi.com/api/food-database/v2/parser?nutrition-type=cooking&category%5B0%5D=generic-foods&health%5B0%5D=alcohol-free&knownAs%5B0%5D=Cheese';
    
      // const options = {
      //     method: 'GET',
      //     headers: {
      //         'X-RapidAPI-Key': 'e8015e2cf4msh97855d9c2558c02p122c3ajsnaafe58f99606',
      //         'X-RapidAPI-Host': 'edamam-food-and-grocery-database.p.rapidapi.com'
      //     }
      // };

        //   const url = 'https://edamam-edamam-nutrition-analysis.p.rapidapi.com/api/nutrition-data?ingr=%3CREQUIRED%3E&nutrition-type=cooking';
        // const options = {
        //   method: 'GET',
        //   headers: {
        //     'X-RapidAPI-Key': 'e8015e2cf4msh97855d9c2558c02p122c3ajsnaafe58f99606',
        //     'X-RapidAPI-Host': 'edamam-edamam-nutrition-analysis.p.rapidapi.com'
        //   }
        // };


        const url = 'https://edamam-recipe-search.p.rapidapi.com/search?q=steak';
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
            console.log(result);
            // setFood(result.hints)
            setFood(result)
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(()=>{
        getItem()

        // fetchFood()
    },[])

  return (
    <div>
      <h1>The food page</h1>
      <h1>Hello</h1>
      {
         food && 
        // food.map((item,i)=>{
        //   console.log(item.q)
        //     // return <Link key={i} to={`/ingrediants/:${item.food}`}><h2>{item.food.label}</h2></Link>
        //     return <h2>{item.q}</h2>
        // })
        <h2>{food.q}</h2>
      }
    </div>
  )
}

export default Food
