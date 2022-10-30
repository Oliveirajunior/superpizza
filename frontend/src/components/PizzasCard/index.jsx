export function PizzasCard({ sabor, preco, excluir, alterar }) {
  return (
    <div className="card bg-light rounded-lg w-50 m-auto">
      <div className="card-body">
        <h4 className="card-title">{sabor}</h4>
        <p className="card-text"> R$ {preco} </p>
        <button
          className="card-button btn-danger m-1"
          type="button"
          onClick={excluir}
        >
          Excluir
        </button>
        <button
          className="card-button btn-warning m-1"
          type="button"
          onClick={alterar}
        >
          Alterar
        </button>
      </div>
    </div>
  )
}
