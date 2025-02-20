import { useState } from 'react'
import { defaultPagination } from '../../utils/DefaultPagination'
import { Table } from 'antd'
import { Especialidades } from '../../classes/Especialidades'

interface EspecialidadesTablaProp {
    loading: boolean
    dataSource: Especialidades[]
}

const EspecialidadesTabla = ({ loading, dataSource }: EspecialidadesTablaProp) => {
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
  ];

  return (
     <Table
        size="small"
        rowKey={ (especialidad: Especialidades) => especialidad?.id.toString() }
        dataSource={ dataSource }
        sortDirections={ ["ascend", "descend"] }
        columns={ columns }
        pagination={ defaultPagination(dataSource, 10) }
        rowSelection={ {
            selectedRowKeys: consultasSeleccionadas,
            onChange: onSelectConsultas,
        } }
        locale={ {
            emptyText: "No se encontraron especialidades",
        } }
        loading={ loading }
        />
  );
}

export default EspecialidadesTabla