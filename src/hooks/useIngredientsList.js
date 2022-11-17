import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function useIngredientsList() {
  const [ingredient, setIngredient] = useState('')
  const [ingredients, setIngredients] = useState([])
  const navigateTo = useNavigate()
  function handleSubmit(event) {
    event.preventDefault()
    if (ingredient !== '') {
      setIngredients(ingredients => [...new Set([ingredient, ...ingredients])])
      setIngredient('')
    }
  }

  function deleteIngredient(event) {
    const target = event.target.textContent
    const newArray = ingredients.filter(ingredient => ingredient !== target)
    setIngredients(newArray)
  }

  function sendIngredients() {
    const formattedIngredients = ingredients.toString()
    navigateTo(`s/${formattedIngredients}`)
  }

  return { ingredient, setIngredient, ingredients, handleSubmit, deleteIngredient, sendIngredients }
}
