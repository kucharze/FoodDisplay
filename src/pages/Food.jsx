import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

function Food() {

    
      const foodList = [
        { name: "Chicken", symbol: "chicken" },
        { name: "Lit", symbol: "LIT" },
        { name: "Eth", symbol: "ETH" },
        { name: "Et", symbol: "ET" },
        { name: "Steak", symbol: "Steak" },
        { name: "Dash", symbol: "DASH" },
    ];
 
    const getFood = async () =>{
        //This link does not work
        // let food = await fetch(
        //     "www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata"
        //     )
        // let response = await food.json()

        // console.log(response)
    }
    useEffect(()=>{
        getFood()
    },[])

  return (
    <div>
      <h1>The food page</h1>
      <h1>Hello</h1>
      {
        foodList.map((item,i)=>{
            return <Link to={`/ingrediants/:${item.symbol}`}><h2>{item.name}</h2></Link>
        })
      }
    </div>
  )
}

export default Food
