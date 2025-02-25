import { useEffect, useState } from "react"
import { Button, Input, Form, Typography } from "antd"
import { UserOutlined, LockOutlined } from "@ant-design/icons"
import { useLogin } from "../../hooks/fetchLogin";
import { messageError, messageLoading } from "../../utils/Message";

const { Title } = Typography

const FormLogin = () => {
  const [usuario, setUsuario] = useState([])

  const { mutate: login, isLoading: logueando, data: resultado, error: errorAlLoguearse } = useLogin(usuario)

  useEffect(() => { if(logueando) {  messageLoading("Ingresandos...", "login") } }, [logueando])
  useEffect(() => { if(errorAlLoguearse) {  messageError("Contraseña o usuario invalidos..", "login") } }, [errorAlLoguearse])
  
  const onFinish = (values: any) => {
    setUsuario(values)
    if (usuario != null) {
      login()
    }
  }

  return (
    <div className="flex justify-center h-full w-1/2 items-center flex-col bg-gray-50">
      <div>
        <Title level={ 1 } className="text-center text-gray-800 mb-6">
          Clinica Medica
        </Title>
      </div>
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <Title level={ 3 } className="text-center text-gray-800 mb-6">
          Iniciar sesión
        </Title>
        <Form name="login" onFinish={ onFinish } layout="vertical">
          <Form.Item
            name="username"
            rules={ [{ required: true, message: "Por favor, ingresa tu nombre de usuario" }] }
          >
            <Input
              prefix={ <UserOutlined /> }
              placeholder="Nombre de usuario"
              size="large"
              className="rounded-lg"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={ [{ required: true, message: "Por favor, ingresa tu contraseña" }] }
          >
            <Input.Password
              prefix={ <LockOutlined /> }
              placeholder="Contraseña"
              size="large"
              className="rounded-lg"
            />
          </Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            block
            size="large"
            className="rounded-lg bg-blue-500 hover:bg-blue-600 text-white"
          >
            Iniciar sesión
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default FormLogin;
