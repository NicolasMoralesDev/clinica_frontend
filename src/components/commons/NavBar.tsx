import Title from "antd/es/typography/Title"
import logo from "../../assets/logo.png"
import { Button } from "antd"
import { LogoutOutlined } from "@ant-design/icons"

const NavBar = () => {
  return (
    <div className="p-2 w-full flex justify-between items-center">
     <img alt="Logo"  src={ logo } width="20%" height="15%"/>
     <Title level={ 1 }>Sistema de Consultas Medicas</Title>
     <Button type="text" icon={ <LogoutOutlined /> }>Cerrar sesión</Button>
    </div>
  )
}

export default NavBar