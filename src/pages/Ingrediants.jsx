import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

function Ingrediants() {
    let item = useParams().item
    const [food,setFood] = useState('')

    // const url = 'https://edamam-food-and-grocery-database.p.rapidapi.com/api/food-database/v2/parser?nutrition-type=cooking&category%5B0%5D=generic-foods';
    // const options = {
    //     method: 'GET',
    //     headers: {
    //         'X-RapidAPI-Key': 'e8015e2cf4msh97855d9c2558c02p122c3ajsnaafe58f99606',
    //         'X-RapidAPI-Host': 'edamam-food-and-grocery-database.p.rapidapi.com'
    //     }
    // };

    // const getItem = async () =>{
    //     try {
    //         const response = await fetch(url, options);
    //         const result = await response.json();
    //         console.log(result.hints);
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }

    // useEffect(()=>{
    //     getItem()
    // },[])

     //https://api.github.com/users/kucharze
  return (
    <div>
      <h1>The Ingrediants</h1>
      <h2>The param is {item}</h2>
    </div>
  )
}

export default Ingrediants
