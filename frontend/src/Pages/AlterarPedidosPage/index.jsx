import React from 'react'

import { Navbar } from '../../components/Navbar'
import { AlterarPedidosForm } from '../../components/AlterarPedidosForm'

export function AlterarPedidosPage() {
  return (
    <div>
      <Navbar />
      <h1>PÁGINA DE ALTARAÇÃO DE PEDIDOS</h1>
      <AlterarPedidosForm />
    </div>
  )
}
