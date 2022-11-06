import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { SelecaoCard } from '../SelecaoCard'

export function SelecaoForm() {
  const [pedido_id, setPedido_id] = useState('')
  const [pizza_id, setPizza_id] = useState('')
  const [quantidade, setQuantidade] = useState('')
  const [subtotal, setSubtotal] = useState('')
  const [selecao, setSelecao] = useState([])
  let navigate = useNavigate()

  const url = 'http://localhost:3000/selecao'

  async function adicionarSelecao() {
    try {
      await axios.post(url, { pedido_id, pizza_id, quantidade, subtotal })
      getData()
      setPedido_id('')
      setPizza_id('')
      setQuantidade('')
      setSubtotal('')
    } catch (error) {
      console.error(error.message)
    }
  }

  async function excluirSelecao(id) {
    try {
      await axios.delete(`${url}/${id}`)
      getData()
    } catch (error) {
      console.error(error.message)
    }
  }

  async function alterarSelecao(id) {
    navigate(`/selecao/${id}/update`)
  }

  async function getData() {
    try {
      const resultado = await axios.get(url)
      setSelecao(resultado.data)
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
          className="btn btn-primary m-2"
          onClick={adicionarSelecao}
        >
          Adicionar
        </button>
      </form>
      <div className="m-2">
        {selecao.map(select => (
          <SelecaoCard
            key={select.id}
            pedido_id={select.pedido_id}
            pizza_id={select.pizza_id}
            quantidade={select.quantidade}
            subtotal={select.subtotal}
            excluir={() => excluirSelecao(select.id)}
            alterar={() => alterarSelecao(select.id)}
          />
        ))}
      </div>
    </div>
  )
}
