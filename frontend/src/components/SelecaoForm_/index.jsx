import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { SelecaoCard } from '../SelecaoCard'

export function SelecaoForm() {
  const [pedido_id, setPedido_id] = useState('')
  const [quantidade, setQuantidade] = useState(1)
  const [selecao, setSelecao] = useState([])
  let navigate = useNavigate()

  //pizzas
  const [pizzas, setPizzas] = useState([])
  const [pizzaSelecionada, setPizzaSelecionada] = useState('')
  const [preco, setPreco] = useState(0)

  //macetes
  const [desabilitado, setdesabilitado] = useState(true)
  const [total, setTotal] = useState(0)

  const url = 'http://localhost:3000/selecao'

  async function adicionarSelecao() {
    try {
      //NÃO QUERO ENVIAR O SUBTOTAL, QUE SERÁ CALCULADO NO BACKEND. ELE APENAS APARECERÁ NA TELA PARA FINS DE CIÊNCIA AO USUÁRIO.
      const pizza_id = pizzaSelecionada
      await axios.post(url, { pedido_id, pizza_id, quantidade })
      getData()
      setPedido_id('')
      setQuantidade('')
      setPizzaSelecionada('')
      setPreco('')
      setdesabilitado(true)
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
      //get Selecao
      const resultado = await axios.get(url)
      const dados = resultado.data
      setSelecao(dados)
      //subtotal e total
      const dadosFilter = dados.filter(dado => dado.pedido_id == pedido_id)
      console.log(dadosFilter)
      const total = dadosFilter.reduce((total, dado) => {
        return (total += dado.subtotal)
      }, 0)
      console.log('TOTAL: ' + total)
      atualizarTotalPedido()

      //get Pizzas
      const res_pizzas = await axios.get('http://localhost:3000/pizzas')
      setPizzas(res_pizzas.data)
    } catch (error) {
      console.error(error.message)
    }
  }

  function getSubtotal(id) {
    const pizzaFilter = pizzas.filter(pizza => pizza.id == id)
    const precoFilter = pizzaFilter[0].preco
    setPreco(precoFilter)
    setdesabilitado(false)
  }

  async function atualizarTotalPedido() {
    try {
      //get Selecao para posterior filtragem. OBS: TENTAR CRIAR NO BACKEND UMA ROTA PARA FILTRAR DIRETAMENTE AS PIZZAS_PEDIDOS CUJOS ID_PEDIDO SEJAM IGUAIS AO DESEJADO, DISPENSANDO, ASSIM, A NECESSIDADE DE SE FILTRAR AQUI.
      const resultado = await axios.get(`${url}/${pedido_id}`)
      const dados = resultado.data
      console.log('RESULTADO DA SELEÇÃO')
      console.log(dados)
      const total = dados.reduce((total, dado) => {
        return (total += dado.subtotal)
      }, 0)
      console.log('TOTAL UPDATE: ' + total)

      //update da variável "total" no Model PEDIDO
      await axios.put(`http://localhost:3000/pedidos/${pedido_id}`, { total })
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
          <select
            className="form-control-md"
            onClick={e => {
              getSubtotal(e.target.value)
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
              getSubtotal(pizzaSelecionada)
            }}
            disabled={desabilitado}
          />
        </div>
        <div className="form-group">
          <label htmlFor="text">SUBTOTAL: {preco * quantidade}</label>
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
