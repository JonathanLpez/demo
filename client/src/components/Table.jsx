import '../styles/tabla.css'


function Table(datos) {

  const {data} = datos
  console.log(data)
  const columnas = ['BSS-STATUS', 'NUMBER', 'DATE'];

    return (
    
      <div className='divTabla'>
        <table className='tabla'>
          <thead>
            <tr>
              {columnas.map(columna => <th>{columna}</th>)}
            </tr>
          </thead>
          <tbody>
            {data.map(dato => (
              <tr key={dato.id}>
                <td>{dato.bssStatus}</td>
                <td>{dato.cellNumber}</td>
                <td>{dato.creationDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }

export default Table