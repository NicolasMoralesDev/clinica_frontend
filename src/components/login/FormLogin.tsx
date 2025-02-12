import React, { useState } from "react"
import { Button, Input, Form, Typography } from "antd"
import { UserOutlined, LockOutlined } from "@ant-design/icons"

const { Title } = Typography;

const FormLogin = () => {
  const [loading, setLoading] = useState(false);

  const onFinish = (values: unknown) => {
    setLoading(true);
    // Simula una llamada a la API para el login
    setTimeout(() => {
      setLoading(false);
      console.log("Usuario autenticado:", values);
    }, 2000);
  };

  return (
    <div className="flex justify-center items-center max-h-screen bg-gray-50">
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
              prefix={ <UserOutlined />}
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
            loading={ loading }
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
