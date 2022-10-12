import React from 'react'
import { useState } from 'react'
import { PizzasCard } from '../PizzasCard'

export function PizzasForm() {
  const [sabor, setSabor] = useState('')
  const [preco, setPreco] = useState('')
  const [pizzas, setPizzas] = useState([])

  function AdicionarPizza() {
    const novaPizza = {
      sabor: sabor,
      preco: preco
    }
    setPizzas([...pizzas, novaPizza])
    setSabor('')
    setPreco('')
  }

  return (
    <div>
      <form>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Digite o Sabor"
            id="sabor"
            value={sabor}
            onChange={e => setSabor(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Digite o Preco"
            id="preco"
            value={preco}
            onChange={e => setPreco(e.target.value)}
          />
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={AdicionarPizza}
        >
          Adicionar
        </button>
      </form>
      {pizzas.map((pizza, index) => (
        <PizzasCard key={index} sabor={pizza.sabor} preco={pizza.preco} />
      ))}
    </div>
  )
}
