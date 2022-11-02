import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

export function AlterarClientesForm() {
  const [nome, setNome] = useState('')
  const [fone, setFone] = useState('')
  const { id } = useParams()
  let navigate = useNavigate()

  const url = 'http://localhost:3000/clientes'

  async function alterarCliente() {
    try {
      await axios.put(`${url}/${id}`, { nome, fone })
      navigate('/clientes')
    } catch (error) {
      console.error(error.message)
    }
  }

  async function getData() {
    try {
      const resultado = await axios.get(`${url}/${id}`)
      setNome(resultado.data.nome)
      setFone(resultado.data.fone)
    } catch (error) {
      console.error(error.message)
    }
  }

  async function cancelar() {
    try {
      navigate('/clientes')
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
            id="nome"
            value={nome}
            onChange={e => setNome(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="fone"
            value={fone}
            onChange={e => setFone(e.target.value)}
          />
        </div>
        <button
          type="button"
          className="btn btn-primary m-1"
          onClick={alterarCliente}
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
