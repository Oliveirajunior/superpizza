export function PedidosCard({
  id,
  cliente,
  pizza,
  quantidade,
  total,
  excluir,
  alterar
}) {
  return (
    <div className="row m-2">
      <div className="col">
        ID. PEDIDO <strong> {id}</strong>
      </div>
      <div className="col">
        CLIENTE <strong> {cliente}</strong>
      </div>
      <div className="col">
        PIZZA <strong> {pizza}</strong>
      </div>
      <div className="col">
        QTDE. <strong> {quantidade}</strong>
      </div>
      <div className="col">TOTAL: R${total}</div>
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
