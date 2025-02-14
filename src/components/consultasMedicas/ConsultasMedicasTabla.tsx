import { Button, Space, Table } from "antd"
import { defaultPagination } from "../../utils/DefaultPagination"
import { IssuesCloseOutlined } from "@ant-design/icons"
import { useState } from "react"

const ConsultasMedicasTabla = ({loading, dataSource }) => {

    const [consultasSeleccionadas, setConsultasSeleccionadas] = useState([])

    const onCerrar = () => {
       console.log(consultasSeleccionadas);
    }

    const onSelectConsultas = (consultaSelected) => {
        setConsultasSeleccionadas(consultaSelected)
    }

  const columns = [
    {
      title: "Paciente",
      dataIndex: "paciente",
      key: "paciente",
    },
    {
      title: "Medico",
      dataIndex: "medico",
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
           <Button type="text" className="bg-red-800 btn-bordo-custom text-white" icon={ <IssuesCloseOutlined /> } onClick={ ()=> onCerrar() }>cerrar consultas</Button>
        </Space>
     <Table
        size="large"
        rowKey={ (consultas) => consultas?.paciente }
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
