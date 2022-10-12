import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './Pages/Home'
import { PizzasPage } from './Pages/PizzasPage'

export function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pizzas" element={<PizzasPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
