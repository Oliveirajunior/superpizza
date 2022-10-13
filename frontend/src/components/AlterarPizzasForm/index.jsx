import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

export function AlterarPizzasForm() {
  const [sabor, setSabor] = useState('')
  const [preco, setPreco] = useState('')
  const { id } = useParams()
  let navigate = useNavigate()

  const url = 'http://localhost:3000/pizzas'

  async function alterarPizza() {
    try {
      await axios.put(`${url}/${id}`, { sabor, preco })
      navigate('/pizzas')
    } catch (error) {
      console.error(error.message)
    }
  }

  async function getData() {
    try {
      const resultado = await axios.get(`${url}/${id}`)
      setSabor(resultado.data.sabor)
      setPreco(resultado.data.preco)
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
            id="sabor"
            value={sabor}
            onChange={e => setSabor(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="preco"
            value={preco}
            onChange={e => setPreco(e.target.value)}
          />
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={alterarPizza}
        >
          Alterar
        </button>
      </form>
    </div>
  )
}
