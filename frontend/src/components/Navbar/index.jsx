export function Navbar() {
  return (
    <ul className="nav">
      <li className="nav-item">
        <a className="nav-link active" href="/">
          Home
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/pizzas">
          Pizzas
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Clientes
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Pedidos
        </a>
      </li>
    </ul>
  )
}
