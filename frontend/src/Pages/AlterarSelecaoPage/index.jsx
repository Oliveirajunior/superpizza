import React from 'react'

import { Navbar } from '../../components/Navbar'
import { AlterarSelecaoForm } from '../../components/AlterarSelecaoForm'

export function AlterarSelecaoPage() {
  return (
    <div>
      <Navbar />
      <h1>PÁGINA DE ALTARAÇÃO DE SELEÇÃO</h1>
      <AlterarSelecaoForm />
    </div>
  )
}
