export function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-primary navbar-dark">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="/" className="nav-link">
            HOME
          </a>
        </li>
        <li className="nav-item">
          <a href="/pizzas" className="nav-link">
            Pizzas
          </a>
        </li>
        <li className="nav-item">
          <a href="/clientes" className="nav-link">
            Clientes
          </a>
        </li>
        <li className="nav-item">
          <a href="/pedidos" className="nav-link">
            Pedidos
          </a>
        </li>
      </ul>
    </nav>
  )
}
