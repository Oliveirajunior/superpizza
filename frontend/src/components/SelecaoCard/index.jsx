export function SelecaoCard({
  pedido_id,
  pizza_id,
  quantidade,
  subtotal,
  excluir,
  alterar
}) {
  return (
    <div className="row m-2">
      <div className="col">
        PEDIDO ID. <strong>{pedido_id}</strong>
      </div>
      <div className="col">
        PIZZA ID. <strong>{pizza_id}</strong>
      </div>
      <div className="col">QTDE. {quantidade}</div>
      <div className="col">SUBT. R$ {subtotal}</div>
      <div className="col">
        <button className="btn btn-danger" type="button" onClick={excluir}>
          Excluir
        </button>
      </div>
      <div className="col">
        <button
          className="btn btn-warning"
          type="button"
          onClick={alterar}
          disabled={true}
        >
          Alterar
        </button>
      </div>
    </div>
  )
}
