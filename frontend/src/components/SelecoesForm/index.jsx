import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { SelecoesCard } from '../SelecoesCard'
import { url } from '../../../config/URL'

export function SelecoesForm() {
  const [selecoes, setSelecoes] = useState([])
  const [quantidade, setQuantidade] = useState(1)
  //OBS: O SUBTOTAL É CÁLCULADO DIRETAMENTE NO BACKEND. O ID_PEDIDO É PASSADO POR REQ.PARAM E O ID_PIZZA ESTÁ NA PIZZASELECIONADA

  const [pizzas, setPizzas] = useState([])
  const [pizzaSelecionada, setPizzaSelecionada] = useState('')

  const { id } = useParams()

  let navigate = useNavigate()

  //urls
  const { URL_SELECOES } = url
  const { URL_PIZZAS } = url
  const { URL_PEDIDOS } = url

  async function adicionarSelecao() {
    try {
      const id_pizza = pizzaSelecionada
      const id_pedido = id
      console.log(id_pedido)
      await axios.post(URL_SELECOES, { id_pizza, id_pedido, quantidade })
      getData()
      setPizzas([])
      setPizzaSelecionada('')
      setQuantidade(1)
    } catch (error) {
      console.error(error.message)
    }
  }

  async function excluirSelecao(id) {
    try {
      await axios.delete(`${URL_SELECOES}/${id}`)
      getData()
    } catch (error) {
      console.error(error.message)
    }
  }

  async function alterarSelecao(id) {
    navigate(`/pedidos/${id}/update`)
  }

  async function getData() {
    try {
      //getSelecoes por pedido
      const id_pedido = id
      const res_selecoes = await axios.get(URL_SELECOES)
      const data = res_selecoes.data
      console.log(data)
      const filter = data.filter(element => element.id_pedido == id_pedido)
      setSelecoes(filter)
      //console.log(id_pedido)

      //getPizzas
      const res_pizzas = await axios.get(URL_PIZZAS)
      setPizzas(res_pizzas.data)

      //atualizar Total do Pedido
      await axios.put(`${URL_PEDIDOS}/${id}`)
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
            className="form-control-md text-center"
            id="quantidade"
            value={quantidade}
            onChange={e => {
              setQuantidade(e.target.value)
              //getSubtotal(pizzaSelecionada)
            }}
          />
        </div>

        <div className="form-group">
          <button
            type="button"
            className="btn btn-primary m-2"
            onClick={adicionarSelecao}
          >
            Adicionar
          </button>
        </div>
      </form>

      <div className="m-2">
        <div className="row m-2">
          <div className="col m-2">ORDEM</div>
          <div className="col m-2">ID. PEDIDO</div>
          <div className="col m-2">PIZZA</div>
          <div className="col m-2">QTDE.</div>
          <div className="col m-2">SUBTOTAL</div>
          <div className="col m-2">EXCLUIR</div>
        </div>
        {selecoes.map(selecao => (
          <SelecoesCard
            key={selecao.id}
            id={selecao.id}
            id_pedido={selecao.id_pedido}
            pizza={selecao.pizza.sabor}
            quantidade={selecao.quantidade}
            subtotal={selecao.subtotal}
            excluir={() => excluirSelecao(selecao.id)}
          />
        ))}
      </div>
    </div>
  )
}
