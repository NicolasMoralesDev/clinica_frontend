import { useEffect } from "react"
import { Button, Card, Col, Form, Select } from "antd"
import useForm from "antd/es/form/hooks/useForm"
import { messageLoading, messageSuccess } from "../../utils/Message"

const PaqueteMedicoRegistrar = () => {
    const [form] = useForm()
    const { mutate: registrarCategoria, isLoading: registrandoCategoria, data: categoriaRegistrada, error: errorAlRegistrarEspecialidad } = useRegistrarCategoria(form.getFieldsValue())
    const { mutate: obtenerCategoria, data: categoriaObtenida } = useObtenerCategorias()
    
    useEffect(() => { if(categoriaRegistrada)  { messageSuccess(categoriaRegistrada?.data?.msg, "paqueteMedico") } }, [categoriaRegistrada])
    useEffect(() => { if(registrandoCategoria) { messageLoading("Registrando...", "paqueteMedico") } }, [registrandoCategoria])
    
    useEffect(() => { obtenerCategoria() }, [])
    
    const onFinish = () => { registrarCategoria() }
      
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
                     options={ categoriaObtenida?.data.map((categoria: Categoria) => ( {
                       key: categoria.nombre,
                       label: categoria.nombre.toUpperCase(),
                       value: categoria.id,
                     } )) }
                  /> 
                </Form.Item>
              </Col>
            <Button type='primary' htmlType='submit' >registrar</Button>
          </Form>
        </Card>
      );
}

export default PaqueteMedicoRegistrar