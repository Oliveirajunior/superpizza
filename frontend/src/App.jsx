import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './Pages/Home'
import { PizzasPage } from './Pages/PizzasPage'
import { AlterarPizzasPage } from './Pages/AlterarPizzasPage'
import { ClientesPage } from './Pages/ClientesPage'
import { AlterarClientesPage } from './Pages/AlterarClientesPage'
import { PedidosPage } from './Pages/PedidosPage'
import { SelecoesPage } from './Pages/SelecoesPage'

export function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pizzas" element={<PizzasPage />} />
          <Route path="/pizzas/:id/update" element={<AlterarPizzasPage />} />
          <Route path="/clientes" element={<ClientesPage />} />
          <Route
            path="/clientes/:id/update"
            element={<AlterarClientesPage />}
          />
          <Route path="/pedidos" element={<PedidosPage />} />

          <Route path="/selecoes/:id" element={<SelecoesPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
