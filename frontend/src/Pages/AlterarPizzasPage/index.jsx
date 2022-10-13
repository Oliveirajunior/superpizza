import React from 'react'

import { Navbar } from '../../components/Navbar'
import { AlterarPizzasForm } from '../../components/AlterarPizzasForm'

export function AlterarPizzasPage() {
  return (
    <div>
      <Navbar />
      <h1>PÁGINA DE ALTARAÇÃO DE PIZZAS</h1>
      <AlterarPizzasForm />
    </div>
  )
}
