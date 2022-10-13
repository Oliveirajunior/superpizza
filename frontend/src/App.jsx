import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './Pages/Home'
import { PizzasPage } from './Pages/PizzasPage'
import { AlterarPizzasPage } from './Pages/AlterarPizzasPage'

export function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pizzas" element={<PizzasPage />} />
          <Route path="/pizzas/:id/update" element={<AlterarPizzasPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
