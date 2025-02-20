import { useEffect } from 'react'
import { Button, Card, Form, Input } from 'antd'
import useForm from 'antd/es/form/hooks/useForm'
import { Categoria } from '../../classes/Categoria'

interface CategoriasRegistrarProp {
  onRegistrar: (data: Categoria) => void
}

const CategoriasRegistrar = ({ onRegistrar } : CategoriasRegistrarProp) => {
    
  const [form] = useForm()

  const onFinish = (data: any) => { onRegistrar(data) }

    useEffect(() => {
        form.setFieldsValue({
          nombre: "",
          categoriaCodigo: ""
        })
    }, [form])   
    
    return (

      <Card>
        <Form
          name="basic"
          form={ form }
          initialValues={ { remember: true } }
          onFinish={ ()=> onFinish(form.getFieldsValue()) }
          autoComplete="off"
        >
          <Form.Item
            label="Nombre"
            name="nombre"
            rules={ [ { required: true, message: 'Por favor, ingrese un nombre!' } ] }
          >
            <Input/>
          </Form.Item>
          <Form.Item
            label="Codigo"
            name="categoriaCodigo"
            rules={ [ { required: true, message: 'Por favor, ingrese el codigo!' } ] }
          >
            <Input/>
          </Form.Item>
          <Button type='primary' htmlType='submit' >Registrar</Button>
        </Form>
      </Card>
    );
}

export default CategoriasRegistrar