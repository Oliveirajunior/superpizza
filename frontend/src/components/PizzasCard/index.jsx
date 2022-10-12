export function PizzasCard({ sabor, preco }) {
  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title">{sabor}</h4>
        <p className="card-text"> R$ {preco} </p>
        <button className="card-button">Excluir</button>
        <button className="card-button">Alterar</button>
      </div>
    </div>
  )
}
