import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { ClientesCard } from '../ClientesCard'

export function ClientesForm() {
  const [nome, setNome] = useState('')
  const [fone, setFone] = useState('')
  const [clientes, setClientes] = useState([])
  let navigate = useNavigate()

  const url = 'http://localhost:3000/clientes'

  async function adicionarCliente() {
    try {
      await axios.post(url, { nome, fone })
      getData()
      setNome('')
      setFone('')
    } catch (error) {
      console.error(error.message)
    }
  }

  async function excluirCliente(id) {
    try {
      await axios.delete(`${url}/${id}`)
      getData()
    } catch (error) {
      console.error(error.message)
    }
  }

  async function alterarCliente(id) {
    navigate(`/clientes/${id}/update`)
  }

  async function getData() {
    try {
      const resultado = await axios.get(url)
      setClientes(resultado.data)
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
            placeholder="Digite o Nome"
            id="nome"
            value={nome}
            onChange={e => {
              if (
                e.target.value == null ||
                e.target.value == undefined ||
                String(e.target.value) == ''
              ) {
                console.error('Digite o nome do cliente')
              } else {
                setNome(e.target.value)
              }
            }}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control-md"
            placeholder="Digite o Telefone"
            id="fone"
            value={fone}
            onChange={e => {
              if (
                e.target.value == null ||
                e.target.value == undefined ||
                e.target.value == ''
              ) {
                console.error('Digite o telefone')
              } else {
                setFone(e.target.value)
              }
            }}
          />
        </div>
        <button
          type="button"
          className="btn btn-primary m-2"
          onClick={adicionarCliente}
        >
          Adicionar
        </button>
      </form>
      <div className="m-2">
        {clientes.map(cliente => (
          <ClientesCard
            key={cliente.id}
            nome={cliente.nome}
            fone={cliente.fone}
            excluir={() => excluirCliente(cliente.id)}
            alterar={() => alterarCliente(cliente.id)}
          />
        ))}
      </div>
    </div>
  )
}
