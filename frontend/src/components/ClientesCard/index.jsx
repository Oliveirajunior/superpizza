export function ClientesCard({ nome, fone, excluir, alterar }) {
  return (
    <div className="row m-2">
      <div className="col">
        <strong>{nome}</strong>
      </div>
      <div className="col">TEL.: {fone}</div>
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
