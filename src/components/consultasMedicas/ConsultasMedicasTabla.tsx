import { useState } from "react"
import { Button, Space, Table, Tag, Tooltip } from "antd"
import { defaultPagination } from "../../utils/DefaultPagination"
import { IssuesCloseOutlined } from "@ant-design/icons"
import { ConsultaMedicas } from "../../classes/ConsultasMedicas"
import { Paciente } from "../../classes/Paciente"
import { Medico } from "../../classes/Medico"
import dayjs, { Dayjs } from "dayjs"
import { FECHA_FORMATO_BARRAS } from "../../constants/fechasFormatos"
import MenuParametrosGenerales from "../parametrosGenerales/MenuParametrosGenerales"

interface ConsultasMedicasTablaProps {
  loading: boolean
  dataSource: ConsultaMedicas[]
  cerrarConsultas: (cerrado: any) => void
  onDetalleModal: (detalle: any) => void
  onMenuParametros: (menu: any) => void
  onRegister: () => void
}

const ConsultasMedicasTabla = ({loading, dataSource, cerrarConsultas, onDetalleModal, onMenuParametros, onRegister }: ConsultasMedicasTablaProps) => {

    const [consultasSeleccionadas, setConsultasSeleccionadas] = useState([])

    const onCerrar = () => {
      cerrarConsultas(consultasSeleccionadas)
    }

    const onSelectConsultas = (consultaSelected: any) => {
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
      render: (paciente: Paciente) => paciente?.nombre,
      key: "paciente",
    },
    {
      title: "Medico",
      dataIndex: "medico",
      render: (medico: Medico) => medico?.nombre,
      key: "medico",
    },
    {
      title: "Fecha Programada", 
      dataIndex: "fechaTurno",
      key: "fechaTurno",
      render: (fechaTurno: Dayjs) => dayjs(fechaTurno).format(FECHA_FORMATO_BARRAS),
    },
    {
      title: "Servicio", 
      dataIndex: "servicio",
      key: "servicio",
    },
    {
      title: "Pagado", 
      dataIndex: "pagado",
      key: "pagado",
      sorter: (a: any, b: any ) => a.pagado - b.pagado, 
      render: (pagado: boolean) => pagado ? <Tag color="green">SI</Tag> : <Tag color="error">NO</Tag>,
    }
  ]

  return (
    <div className="bg-slate-200 p-7">
        <Space align="start" className="w-full flex justify-end">
           <Tooltip title="Registrar consulta médica">
              <Button className="btn-green-custom" icon={ <IssuesCloseOutlined /> } type="primary" onClick={ ()=> onRegister() }>Registrar consulta</Button>
           </Tooltip>
           <MenuParametrosGenerales
             onMenuParametros={ onMenuParametros }
           />
           <Tooltip title="Cerrar consultas médicas seleccionadas">
              <Button className="btn-bordo-custom" disabled={ consultasSeleccionadas.length == 0 } icon={ <IssuesCloseOutlined /> } type="primary" onClick={ ()=> onCerrar() }>Cerrar consultas</Button>
           </Tooltip>
        </Space>
     <Table
        size="large"
        rowKey={ (consultas: ConsultaMedicas) => consultas?.id.toString() }
        dataSource={ dataSource }
        sortDirections={ ["ascend", "descend"] }
        columns={ columns }
        onRow={ (consulta) => {
          return {
            onClick: () => {
              onDetalleModal(consulta)
            }
         }
        } }
        pagination={ defaultPagination(dataSource, 15) }
        rowSelection={ {
            selectedRowKeys: consultasSeleccionadas,
            onChange: onSelectConsultas,
        } }
        locale={ {
            emptyText: "No se encontraron consultas médicas",
        } }
        loading={ loading }
        />
    </div>
  );
};

export default ConsultasMedicasTabla;
