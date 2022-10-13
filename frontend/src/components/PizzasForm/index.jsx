import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { PizzasCard } from '../PizzasCard'

export function PizzasForm() {
  const [sabor, setSabor] = useState('')
  const [preco, setPreco] = useState('')
  const [pizzas, setPizzas] = useState([])

  const url = 'http://localhost:3000/pizzas'

  async function adicionarPizza() {
    try {
      await axios.post(url, { sabor, preco })
      getData()
      setSabor('')
      setPreco('')
    } catch (error) {
      console.error(error.message)
    }
  }

  async function excluirPizza(id) {
    try {
      const resultado = await axios.delete(`${url}/${id}`)
      console.log(resultado)
      getData()
    } catch (error) {
      console.error(error.message)
    }
  }

  async function getData() {
    try {
      const resultado = await axios.get(url)
      setPizzas(resultado.data)
    } catch (error) {
      console.error(error.message)
    }
  }

  useEffect(() => {
    getData()
  }, [])

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
          onClick={adicionarPizza}
        >
          Adicionar
        </button>
      </form>
      {pizzas.map(pizza => (
        <PizzasCard
          key={pizza.id}
          sabor={pizza.sabor}
          preco={pizza.preco}
          excluir={() => excluirPizza(pizza.id)}
        />
      ))}
    </div>
  )
}
