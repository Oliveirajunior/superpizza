export function SelecoesCard({
  id,
  pizza,
  id_pedido,
  quantidade,
  subtotal,
  excluir
}) {
  return (
    <div className="row m-2">
      <div className="col m-2">
        <strong> {id}</strong>
      </div>
      <div className="col m-2">
        <strong> {id_pedido}</strong>
      </div>
      <div className="col m-2">
        <strong> {pizza}</strong>
      </div>
      <div className="col m-2">
        <strong> {quantidade}</strong>
      </div>
      <div className="col m-2"> R$ {subtotal}</div>
      <div className="col m-2">
        <button className="btn btn-danger" type="button" onClick={excluir}>
          Excluir
        </button>
      </div>
    </div>
  )
}
