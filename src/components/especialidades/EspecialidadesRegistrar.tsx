import { useEffect } from 'react'
import { Button, Card, Form, Input } from 'antd'
import useForm from 'antd/es/form/hooks/useForm'

 interface EspecialidadesRegistrarProp {
    registrar: (data: any) => void
 }

const EspecialidadesRegistrar = ({ registrar }: EspecialidadesRegistrarProp) => {
    
  const [form] = useForm()

    useEffect(() => {
        form.setFieldsValue({
          nombre: ""
        })
    }, [form])   

    const onFinish = (values: any) => { registrar(values) }
    
    return (
      <Card
       title="Registrar Especialidad"
      >
        <Form
          name="basic"
          form={ form }
          initialValues={ { remember: true } }
          onFinish={ ()=> onFinish(form.getFieldsValue())  }
          autoComplete="off"
        >
          <Form.Item
            label="Nombre"
            name="nombre"
            rules={ [ { required: true, message: 'Por favor, ingrese un nombre!' } ] }
          >
            <Input/>
          </Form.Item>
          <Button type='primary' htmlType='submit' >Registrar</Button>
        </Form>
      </Card>
    );
}

export default EspecialidadesRegistrar