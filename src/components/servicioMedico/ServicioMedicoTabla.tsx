import { useState } from "react"
import { Table } from "antd"
import { ServicioMedico } from "../../classes/ServicioMedico"
import { defaultPagination } from "../../utils/DefaultPagination"

interface ServicioIndividualTablaProp {
    loading: boolean
    dataSource: ServicioMedico[]
}

const ServicioMedicoTabla = ({ loading, dataSource }: ServicioIndividualTablaProp) => {
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
      {
        title: "Código",
        dataIndex: "codigo",
        key: "codigo",
      },
     {
       title: "Categoría",
       dataIndex: "categoria",
       key: "categoria",
     },
     {
      title: "Descripción",
      dataIndex: "descripcion",
      key: "descripcion",
    },
     {
      title: "Precio",
      dataIndex: "precio",
      key: "precio",
    },
    ];
  
  return (
     <Table
        size="small"
        rowKey={ (servicio: ServicioMedico) => servicio?.idServicio.toString() }
        dataSource={ dataSource }
        sortDirections={ ["ascend", "descend"] }
        columns={ columns }
        pagination={ defaultPagination(dataSource, 10) }
        rowSelection={ {
            selectedRowKeys: consultasSeleccionadas,
            onChange: onSelectConsultas,
        } }
        locale={ {
            emptyText: "No se encontraron servicios medicos",
        } }
        loading={ loading }
        />
  );
}

export default ServicioMedicoTabla