import { Button, Card, Col, Form, Input, Select } from "antd"
import useForm from "antd/es/form/hooks/useForm"
import { Categoria } from "../../classes/Categoria"
import TextArea from "antd/es/input/TextArea"

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
            <Col span={ 25 }>
                <Form.Item label="Categoria" name="categoria" required>
                   <Select
                     allowClear
                     placeholder="seleccione"
                     options={ categorias?.data?.map((categoria: Categoria) => ( {
                       key: categoria?.nombre,
                       label: categoria?.nombre.toUpperCase(),
                       value: categoria?.idCategoria,
                     } )) }
                  /> 
                </Form.Item>
                <Form.Item label="Nombre" name="nombre" required>
                  <Input/>
                </Form.Item>
                <Form.Item label="Código" name="codigo" required>
                  <Input/>
                </Form.Item>
                <Form.Item label="Precio" name="precio" required>
                  <Input/>
                </Form.Item>
                <Form.Item label="Descripción" name="descripcion"  required>
                  <TextArea 
                    showCount 
                    maxLength={ 300 }
                    autoSize={ {minRows: 5, maxRows: 10 } }  
                  />
                </Form.Item>
              </Col>
            <Button type='primary' htmlType='submit'>Registrar</Button>
          </Form>
        </Card>
      );
}

export default ServicioIndiviRegistrar