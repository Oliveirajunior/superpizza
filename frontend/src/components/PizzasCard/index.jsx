export function PizzasCard({ sabor, preco, excluir, alterar }) {
  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title">{sabor}</h4>
        <p className="card-text"> R$ {preco} </p>
        <button className="card-button" type="button" onClick={excluir}>
          Excluir
        </button>
        <button className="card-button" type="button" onClick={alterar}>
          Alterar
        </button>
      </div>
    </div>
  )
}
