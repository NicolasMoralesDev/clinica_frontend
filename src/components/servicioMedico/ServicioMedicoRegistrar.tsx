import { Button, Card, Col, Form, Input } from "antd"
import useForm from "antd/es/form/hooks/useForm"
import { ServicioMedico } from "../../classes/ServicioMedico"

interface ServicioMedicoRegistrarProp {
  onRegistrar: (servicio: ServicioMedico) => void
} 

const ServicioMedicoRegistrar = ({ onRegistrar }: ServicioMedicoRegistrarProp) => {
    const [form] = useForm()
    const onFinish = () => { onRegistrar(form.getFieldsValue()) }
      
      return (
        <Card>
          <Form
            name="basic"
            form={ form }
            initialValues={ { remember: true } }
            onFinish={ onFinish }
            autoComplete="off"
          >
            <Col span={ 25 }>
                <Form.Item label="Nombre" name="nombre" required>
                  <Input/>
                </Form.Item>
                <Form.Item label="Código" name="codigo" required>
                  <Input/>
                </Form.Item>
                <Form.Item label="Precio" name="precio" required>
                  <Input/>
                </Form.Item>
              </Col>
            <Button type='primary' htmlType='submit'>Registrar</Button>
          </Form>
        </Card>
      );
}

export default ServicioMedicoRegistrar