import { Table } from "antd";
import { defaultPagination } from "../../utils/DefaultPagination";

const ConsultasMedicasTabla = ({loading}) => {
  const dataSource = [
    {
      key: "1",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
    },
    {
      key: "2",
      name: "John",
      age: 42,
      address: "10 Downing Street",
    },
  ];

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
    }
  ];

  return (
    <div>
     <Table
        size="small"
        rowKey={ (product) => product?.id }
        dataSource={ dataSource }
        sortDirections={ ["ascend", "descend"] }
        columns={ columns }
        pagination={ defaultPagination(dataSource, 15) }
        rowSelection={ {
       
        } }
        locale={ {
            emptyText: "No se encontraron Productos",
        } }
        loading={ loading }
        />
    </div>
  );
};

export default ConsultasMedicasTabla;
