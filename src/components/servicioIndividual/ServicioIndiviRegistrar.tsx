import { Button, Card, Col, Form, Select } from "antd"
import useForm from "antd/es/form/hooks/useForm"
import { Categoria } from "../../classes/Categoria"

interface ServicioIndiviRegistrarProp {
  onRegistrar: (categoria: Categoria) => void
  categorias: any
} 

const ServicioIndiviRegistrar = ({ onRegistrar, categorias }: ServicioIndiviRegistrarProp) => {

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
            <Col span={ 5 }>
                <Form.Item label="Categoria" name="categoria">
                   <Select
                     allowClear
                     placeholder="seleccione"
                     options={ categorias?.data.map((categoria: Categoria) => ( {
                       key: categoria.nombre,
                       label: categoria.nombre.toUpperCase(),
                       value: categoria.idCategoria,
                     } )) }
                  /> 
                </Form.Item>
              </Col>
            <Button type='primary' htmlType='submit'>Registrar</Button>
          </Form>
        </Card>
      );
}

export default ServicioIndiviRegistrar