import React from 'react'

import { Navbar } from '../../components/Navbar'
import { SelecoesForm } from '../../components/SelecoesForm'

export function SelecoesPage() {
  return (
    <div className="text-center">
      <Navbar />
      <h1 className="m-3">PÁGINA DAS SELECOES</h1>
      <SelecoesForm />
    </div>
  )
}
