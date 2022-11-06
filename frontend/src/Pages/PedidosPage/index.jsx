import React from 'react'

import { Navbar } from '../../components/Navbar'
import { PedidosForm } from '../../components/PedidosForm'

export function PedidosPage() {
  return (
    <div className="text-center">
      <Navbar />
      <h1 className="m-3">PÁGINA DOS PEDIDOS</h1>
      <PedidosForm />
    </div>
  )
}
