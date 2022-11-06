import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

export function AlterarSelecaoForm() {
  const [pedido_id, setPedido_id] = useState('')
  const [pizza_id, setPizza_id] = useState('')
  const [quantidade, setQuantidade] = useState('')
  const [subtotal, setSubtotal] = useState('')
  const { id } = useParams()
  let navigate = useNavigate()

  const url = 'http://localhost:3000/selecao'

  async function alterarSelecao() {
    try {
      await axios.put(`${url}/${id}`, {
        pedido_id,
        pizza_id,
        quantidade,
        subtotal
      })
      navigate('/selecao')
    } catch (error) {
      console.error(error.message)
    }
  }

  async function getData() {
    try {
      const resultado = await axios.get(`${url}/${id}`)
      setPedido_id(resultado.data.pedido_id)
      setPizza_id(resultado.data.pizza_id)
      setQuantidade(resultado.data.quantidade)
      setSubtotal(resultado.data.subtotal)
    } catch (error) {
      console.error(error.message)
    }
  }

  async function cancelar() {
    try {
      navigate('/selecao')
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
            placeholder="Digite o ID. do Pedido"
            id="pedido_id"
            value={pedido_id}
            onChange={e => setPedido_id(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control-md"
            placeholder="Digite o ID. da Pizza"
            id="pizza_id"
            value={pizza_id}
            onChange={e => setPizza_id(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control-md"
            placeholder="Digite a Quantidade"
            id="quantidade"
            value={quantidade}
            onChange={e => setQuantidade(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control-md"
            placeholder="Digite o Subtotal"
            id="subtotal"
            value={subtotal}
            onChange={e => setSubtotal(e.target.value)}
          />
        </div>
        <button
          type="button"
          className="btn btn-primary m-1"
          onClick={alterarSelecao}
        >
          Alterar
        </button>
        <button
          type="button"
          className="btn btn-warning m-2"
          onClick={cancelar}
        >
          Cancelar
        </button>
      </form>
    </div>
  )
}
