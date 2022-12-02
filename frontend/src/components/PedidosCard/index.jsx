export function PedidosCard({ id, cliente, total, excluir, selecionar }) {
  return (
    <div className="row m-2">
      <div className="col m-2">
        <strong> {id}</strong>
      </div>
      <div className="col m-2">
        <strong> {cliente}</strong>
      </div>
      <div className="col m-2"> R$ {total}</div>
      <div className="col m-2">
        <button className="btn btn-danger" type="button" onClick={excluir}>
          Excluir
        </button>
      </div>
      <div className="col m-2">
        <button className="btn btn-warning" type="button" onClick={selecionar}>
          Selecionar
        </button>
      </div>
    </div>
  )
}
