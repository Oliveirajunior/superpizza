import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { PizzasCard } from '../PizzasCard'

export function PizzasForm() {
  const [sabor, setSabor] = useState('')
  const [preco, setPreco] = useState('')
  const [pizzas, setPizzas] = useState([])
  let navigate = useNavigate()

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
      await axios.delete(`${url}/${id}`)
      getData()
    } catch (error) {
      console.error(error.message)
    }
  }

  async function alterarPizza(id) {
    navigate(`/pizzas/${id}/update`)
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
            className="form-control-md"
            placeholder="Digite o Sabor"
            id="sabor"
            value={sabor}
            onChange={e => setSabor(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control-md"
            placeholder="Digite o Preco"
            id="preco"
            value={preco}
            onChange={e => setPreco(e.target.value)}
          />
        </div>
        <button
          type="button"
          className="btn btn-primary m-2"
          onClick={adicionarPizza}
        >
          Adicionar
        </button>
      </form>
      <div className="m-2">
        {pizzas.map(pizza => (
          <PizzasCard
            key={pizza.id}
            sabor={pizza.sabor}
            preco={pizza.preco}
            excluir={() => excluirPizza(pizza.id)}
            alterar={() => alterarPizza(pizza.id)}
          />
        ))}
      </div>
    </div>
  )
}
