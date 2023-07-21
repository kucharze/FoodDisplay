import React from 'react'
import { useParams } from 'react-router-dom'

function Ingrediants() {
    let item = useParams().item
  return (
    <div>
      <h1>The Ingrediants</h1>
      <h2>The param is {item}</h2>
    </div>
  )
}

export default Ingrediants
