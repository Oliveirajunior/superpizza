export function PizzasCard({ sabor, preco, excluir, alterar }) {
  return (
    <div className="row m-2">
      <div className="col">
        <strong>{sabor}</strong>
      </div>
      <div className="col">R${preco}</div>
      <div className="col">
        <button className="btn btn-danger" type="button" onClick={excluir}>
          Excluir
        </button>
      </div>
      <div className="col">
        <button className="btn btn-warning" type="button" onClick={alterar}>
          Alterar
        </button>
      </div>
    </div>
  )
}
