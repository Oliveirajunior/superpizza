import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

export function AlterarPedidosForm() {
  const [cliente_id, setCliente_id] = useState('')
  const [total, setTotal] = useState('')
  const { id } = useParams()
  let navigate = useNavigate()

  const url = 'http://localhost:3000/pedidos'

  async function alterarPedido() {
    try {
      await axios.put(`${url}/${id}`, { cliente_id, total })
      navigate('/pedidos')
    } catch (error) {
      console.error(error.message)
    }
  }

  async function getData() {
    try {
      const resultado = await axios.get(`${url}/${id}`)
      setCliente_id(resultado.data.cliente_id)
      setTotal(resultado.data.total)
    } catch (error) {
      console.error(error.message)
    }
  }

  async function cancelar() {
    try {
      navigate('/pedidos')
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
            id="cliente_id"
            value={cliente_id}
            onChange={e => setCliente_id(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control-md"
            id="total"
            value={total}
            onChange={e => setTotal(e.target.value)}
          />
        </div>
        <button
          type="button"
          className="btn btn-primary m-1"
          onClick={alterarPedido}
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
