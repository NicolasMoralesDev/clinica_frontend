import { Table } from "antd"
import { useState } from "react"
import { defaultPagination } from "../../utils/DefaultPagination"
import { ServicioIndividual } from "../../classes/ServicioIndividual"

interface ServicioIndividualTablaProp {
    loading: boolean
    dataSource: ServicioIndividual[]
}

const ServicioIndividualTabla = ({ loading, dataSource }: ServicioIndividualTablaProp) => {
  const [consultasSeleccionadas, setConsultasSeleccionadas] = useState([])

  const onSelectConsultas = (consultaSelected: any) => {
    setConsultasSeleccionadas(consultaSelected)
  }

  const columns = [
   {
     title: "Categoria",
     dataIndex: "categoria",
     key: "categoria",
   },
  ];

return (
   <Table
      size="small"
      rowKey={ (servicio: ServicioIndividual) => servicio?.idServicioIndividual.toString() }
      dataSource={ dataSource }
      sortDirections={ ["ascend", "descend"] }
      columns={ columns }
      pagination={ defaultPagination(dataSource, 10) }
      rowSelection={ {
          selectedRowKeys: consultasSeleccionadas,
          onChange: onSelectConsultas,
      } }
      locale={ {
          emptyText: "No se encontraron servicios individuales",
      } }
      loading={ loading }
      />
);
}

export default ServicioIndividualTabla