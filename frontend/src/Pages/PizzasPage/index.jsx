import React from 'react'

import { Navbar } from '../../components/Navbar'
import { PizzasForm } from '../../components/PizzasForm'

export function PizzasPage() {
  return (
    <div className="text-center">
      <Navbar />
      <h1 className="m-3">PÁGINA DAS PIZZAS</h1>
      <PizzasForm />
    </div>
  )
}
