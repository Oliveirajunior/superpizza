import React from 'react'

import { Navbar } from '../../components/Navbar'
import { ClientesForm } from '../../components/ClientesForm'

export function ClientesPage() {
  return (
    <div className="text-center">
      <Navbar />
      <h1 className="m-3">PÁGINA DOS CLIENTES</h1>
      <ClientesForm />
    </div>
  )
}
