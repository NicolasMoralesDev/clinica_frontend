import { useState } from "react"
import { Table } from "antd"
import { defaultPagination } from "../../utils/DefaultPagination"
import { Categoria } from "../../classes/Categoria"

interface CategoriasTablaProp {
    loading: boolean
    dataSource: Categoria[]
}

const CategoriasTabla = ({ loading, dataSource }: CategoriasTablaProp) => {
  
    const [consultasSeleccionadas, setConsultasSeleccionadas] = useState([])

    const onSelectConsultas = (consultaSelected: any) => {
      setConsultasSeleccionadas(consultaSelected)
    }

  const columns = [
    {
      title: "Nombre",
      dataIndex: "nombre",
      key: "nombre",
    },
  ]

  return (
     <Table
        size="small"
        rowKey={ (categoria: Categoria) => categoria?.idCategoria.toString() }
        dataSource={ dataSource }
        sortDirections={ ["ascend", "descend"] }
        columns={ columns }
        pagination={ defaultPagination(dataSource, 10) }
        rowSelection={ {
            selectedRowKeys: consultasSeleccionadas,
            onChange: onSelectConsultas,
        } }
        locale={ {
            emptyText: "No se encontraron categorías",
        } }
        loading={ loading }
        />
  );
}

export default CategoriasTabla