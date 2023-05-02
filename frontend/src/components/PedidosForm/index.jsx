import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { PedidosCard } from '../PedidosCard'
import { url } from '../../../config/URL'

export function PedidosForm() {
  const [pedidos, setPedidos] = useState([])
  //OBS: O TOTAL É CÁLCULADO DIRETAMENTE NO BACKEND. O CLIENTE_ID E A PIZZA_ID ESTÃO, RESPECTIVAMENTE, NO CLIENTESELECIONADO E PIZZASELECIONADA

  const [clientes, setClientes] = useState([])
  const [clienteSelecionado, setClienteSelecionado] = useState('')

  let navigate = useNavigate()

  //urls
  const { URL_PEDIDOS } = url
  const { URL_CLIENTES } = url

  async function adicionarPedido() {
    try {
      const id_cliente = clienteSelecionado
      await axios.post(URL_PEDIDOS, { id_cliente })
      getData()
      setClientes([])
      setClienteSelecionado('')
    } catch (error) {
      console.error(error.message)
    }
  }

  async function excluirPedido(id) {
    try {
      await axios.delete(`${URL_PEDIDOS}/${id}`)
      getData()
    } catch (error) {
      console.error(error.message)
    }
  }

  async function fazerSelecao(id) {
    navigate(`/selecoes/${id}`)
  }

  async function getData() {
    try {
      //getPedidos
      const res_pedidos = await axios.get(URL_PEDIDOS)
      setPedidos(res_pedidos.data)

      //getClientes
      const res_clientes = await axios.get(URL_CLIENTES)
      setClientes(res_clientes.data)
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
          <select
            className="form-control-md text-center"
            onClick={e => {
              if (
                e.target.value == null ||
                e.target.value == undefined ||
                e.target.value == ''
              ) {
                console.error('Escolha o cliente')
              } else {
                setClienteSelecionado(e.target.value)
              }
            }}
          >
            <option disabled={true}>{'Selecione o Cliente'}</option>
            {clientes.map(cliente => {
              return (
                <option key={cliente.id} value={cliente.id}>
                  {cliente.nome}
                </option>
              )
            })}
          </select>
        </div>

        <div className="form-group">
          <button
            type="button"
            className="btn btn-primary m-2"
            onClick={adicionarPedido}
          >
            Novo Pedido
          </button>
        </div>
      </form>

      <div className="m-2">
        <div className="row m-2">
          <div className="col m-2">ID. PEDIDO</div>
          <div className="col m-2">CLIENTE</div>
          <div className="col m-2">TOTAL</div>
          <div className="col m-2">EXCLUIR</div>
          <div className="col m-2">SELECIONAR</div>
        </div>
        {pedidos.map(pedido => (
          <PedidosCard
            key={pedido.id}
            id={pedido.id}
            cliente={pedido.cliente.nome}
            total={pedido.total}
            excluir={() => excluirPedido(pedido.id)}
            selecionar={() => fazerSelecao(pedido.id)}
          />
        ))}
      </div>
    </div>
  )
}
