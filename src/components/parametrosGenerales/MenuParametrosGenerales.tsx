import {  DownOutlined } from "@ant-design/icons"
import { Button, Dropdown, Menu } from "antd"

interface MenuParametrosGeneralesProp {
  onMenuParametros: (e: String) => void
}

const MenuParametrosGenerales = ({ onMenuParametros } : MenuParametrosGeneralesProp) => {

  const items = [
    {
      label: 'Especialidades',
      key: 'especialidad',
    },
    {
      label: 'Paquetes y servicios',
      key: '2',
      children: [
        {
          label: 'Categorías',
          key: 'categorias',
        },
        {
          label: 'Servicios individuales',
          key: 'servInv',
        },
        {
          label: 'Servicios medíco',
          key: 'servMedico',
        },
        {
          label: 'Paquete servicio',
          key: 'paquete'
        },
      ],
    },
  ];

  const onClick = (e: any) => { onMenuParametros(e.key) }

  return (
        <Dropdown
          overlay={
            <Menu
              onClick={ onClick }
              style={ { width: 256 } }
              defaultSelectedKeys={ ['1'] }
              defaultOpenKeys={ ['sub1'] }
              items={ items }
            />
          }
          trigger={ ['click'] }
        >
          <Button>
            Parametros generales <DownOutlined />
          </Button>
        </Dropdown>
  );
}

export default MenuParametrosGenerales