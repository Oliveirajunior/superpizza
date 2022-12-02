import React from 'react'

import { Navbar } from '../../components/Navbar'
import { SelecaoForm } from '../../components/SelecaoForm'

export function SelecaoPage() {
  return (
    <div className="text-center">
      <Navbar />
      <h1 className="m-3">PÁGINA DE SELECAO DAS PIZZAS POR PEDIDO</h1>
      <SelecaoForm />
    </div>
  )
}
