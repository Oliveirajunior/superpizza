export function PedidosCard({ cliente_id, total, excluir, alterar }) {
  return (
    <div className="row m-2">
      <div className="col">
        ID. CLIENTE <strong> {cliente_id}</strong>
      </div>
      <div className="col">R${total}</div>
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
