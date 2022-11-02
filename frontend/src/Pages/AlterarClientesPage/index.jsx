import React from 'react'

import { Navbar } from '../../components/Navbar'
import { AlterarClientesForm } from '../../components/AlterarClientesForm'

export function AlterarClientesPage() {
  return (
    <div>
      <Navbar />
      <h1>PÁGINA DE ALTARAÇÃO DE CLIENTES</h1>
      <AlterarClientesForm />
    </div>
  )
}
