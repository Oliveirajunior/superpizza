import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { PedidosCard } from '../PedidosCard'

export function PedidosForm() {
  const [pedidos, setPedidos] = useState([])
  const [quantidade, setQuantidade] = useState(1)
  //OBS: O TOTAL É CÁLCULADO DIRETAMENTE NO BACKEND. O CLIENTE_ID E A PIZZA_ID ESTÃO, RESPECTIVAMENTE, NO CLIENTESELECIONADO E PIZZASELECIONADA

  const [clientes, setClientes] = useState([])
  const [clienteSelecionado, setClienteSelecionado] = useState('')

  const [pizzas, setPizzas] = useState([])
  const [pizzaSelecionada, setPizzaSelecionada] = useState('')

  let navigate = useNavigate()

  const url = 'http://localhost:3000/pedidos'

  async function adicionarPedido() {
    try {
      const cliente_id = clienteSelecionado
      const pizza_id = pizzaSelecionada
      await axios.post(url, { cliente_id, pizza_id, quantidade })
      getData()
      setClientes([])
      setClienteSelecionado('')
      setPizzas([])
      setPizzaSelecionada('')
      setQuantidade(1)
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
      //getPedidos
      const res_pedidos = await axios.get(`${url}`)
      setPedidos(res_pedidos.data)

      //getClientes
      const res_clientes = await axios.get('http://localhost:3000/clientes')
      setClientes(res_clientes.data)

      //getPizzas
      const res_pizzas = await axios.get('http://localhost:3000/pizzas')
      setPizzas(res_pizzas.data)
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
            className="form-control-md"
            onClick={e => setClienteSelecionado(e.target.value)}
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
          <select
            className="form-control-md"
            onClick={e => {
              //getSubtotal(e.target.value)
              setPizzaSelecionada(e.target.value)
            }}
          >
            <option disabled={true}>{'Escolha a Pizza'}</option>
            {pizzas.map(pizza => {
              return (
                <option key={pizza.id} value={pizza.id}>
                  {pizza.sabor} +R$ {pizza.preco}
                </option>
              )
            })}
          </select>
        </div>
        <div className="form-group">
          <input
            type="number"
            className="form-control-md"
            placeholder="Digite a Quantidade"
            id="quantidade"
            value={quantidade}
            onChange={e => {
              setQuantidade(e.target.value)
              //getSubtotal(pizzaSelecionada)
            }}
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
      {
        <div className="m-2">
          {pedidos.map(pedido => (
            <PedidosCard
              key={pedido.id}
              id={pedido.id}
              cliente={pedido.cliente.nome}
              pizza={pedido.pizza.sabor}
              quantidade={pedido.quantidade}
              total={pedido.total}
              excluir={() => excluirPedido(pedido.id)}
              alterar={() => alterarPedido(pedido.id)}
            />
          ))}
        </div>
      }
    </div>
  )
}
