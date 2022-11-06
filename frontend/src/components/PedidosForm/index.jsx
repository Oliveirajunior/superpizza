import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { PedidosCard } from '../PedidosCard'

export function PedidosForm() {
  const [cliente_id, setCliente_id] = useState('')
  const [total, setTotal] = useState('')
  const [pedidos, setPedidos] = useState([])
  let navigate = useNavigate()

  const url = 'http://localhost:3000/pedidos'

  async function adicionarPedido() {
    try {
      await axios.post(url, { cliente_id, total })
      getData()
      setCliente_id('')
      setTotal('')
    } catch (error) {
      console.error(error.message)
    }
  }

  async function excluirPedido(id) {
    try {
      await axios.delete(`${url}/${id}`)
      getData()
    } catch (error) {
      console.error(error.message)
    }
  }

  async function alterarPedido(id) {
    navigate(`/pedidos/${id}/update`)
  }

  async function getData() {
    try {
      const resultado = await axios.get(url)
      setPedidos(resultado.data)
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
            placeholder="Digite o ID. do Cliente"
            id="cliente_id"
            value={cliente_id}
            onChange={e => setCliente_id(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control-md"
            placeholder="Digite o Total"
            id="total"
            value={total}
            onChange={e => setTotal(e.target.value)}
          />
        </div>
        <button
          type="button"
          className="btn btn-primary m-2"
          onClick={adicionarPedido}
        >
          Adicionar
        </button>
      </form>
      <div className="m-2">
        {pedidos.map(pedido => (
          <PedidosCard
            key={pedido.id}
            cliente_id={pedido.cliente_id}
            total={pedido.total}
            excluir={() => excluirPedido(pedido.id)}
            alterar={() => alterarPedido(pedido.id)}
          />
        ))}
      </div>
    </div>
  )
}
