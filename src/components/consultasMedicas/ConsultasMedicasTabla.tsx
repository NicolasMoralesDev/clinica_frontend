import { useState } from "react"
import { Button, Space, Table, Tooltip } from "antd"
import { defaultPagination } from "../../utils/DefaultPagination"
import { IssuesCloseOutlined } from "@ant-design/icons"
import { ConsultaMedicas } from "../../classes/ConsultasMedicas"
import { Paciente } from "../../classes/Paciente"
import { Medico } from "../../classes/Medico"

const ConsultasMedicasTabla = ({loading, dataSource, cerrarConsultas }) => {

    const [consultasSeleccionadas, setConsultasSeleccionadas] = useState([])

    const onCerrar = () => {
      cerrarConsultas(consultasSeleccionadas)
    }

    const onSelectConsultas = (consultaSelected) => {
      setConsultasSeleccionadas(consultaSelected)
    }

  const columns = [
    {
      title: "Número",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Paciente",
      dataIndex: "paciente",
      render: (paciente: Paciente) => paciente.nombre,
      key: "paciente",
    },
    {
      title: "Medico",
      dataIndex: "medico",
      render: (medico: Medico) => medico.nombre,
      key: "medico",
    },
    {
      title: "Fecha Programada", 
      dataIndex: "fecha",
      key: "fecha",
    },
    {
      title: "Servicio", 
      dataIndex: "servicio",
      key: "servicio",
    },
  ];

  return (
    <div className="bg-slate-200 p-7">
        <Space align="start" className="w-full flex justify-end">
           <Tooltip title="Cerrar consultas medicas seleccionadas">
              <Button className="btn-bordo-custom" disabled={ consultasSeleccionadas.length == 0 } icon={ <IssuesCloseOutlined /> } type="primary" onClick={ ()=> onCerrar() }>cerrar consultas</Button>
           </Tooltip>
        </Space>
     <Table
        size="large"
        rowKey={ (consultas: ConsultaMedicas) => consultas?.id.toString() }
        dataSource={ dataSource }
        sortDirections={ ["ascend", "descend"] }
        columns={ columns }
        pagination={ defaultPagination(dataSource, 15) }
        rowSelection={ {
            selectedRowKeys: consultasSeleccionadas,
            onChange: onSelectConsultas,
        } }
        locale={ {
            emptyText: "No se encontraron consultas medicas",
        } }
        loading={ loading }
        />
    </div>
  );
};

export default ConsultasMedicasTabla;
