import React from 'react'

import { Navbar } from '../../components/Navbar'
import { PizzasForm } from '../../components/PizzasForm'

export function PizzasPage() {
  return (
    <div>
      <Navbar />
      <h1>PÁGINA DAS PIZZAS</h1>
      <PizzasForm />
    </div>
  )
}
