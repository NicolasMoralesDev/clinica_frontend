import useForm from "antd/lib/form/hooks/useForm"
import { Button, Card, Col, DatePicker, Form, Row } from "antd"
import dayjs from "dayjs"
import { FECHA_FORMATO_BARRAS } from "../../constants/fechasFormatos"

const FiltroConsultasMedicas = () => {
  const [form] = useForm()

  const handleFinish = (data: unknown) => {
    console.log(data);
  }

  return (
    <>
      <Card className="bg-slate-200">
        <Card title="Filtro de consultas Medicas">
          <Form
            form={ form }
            name="basic"
            onFinish={ () =>
              form
                .validateFields()
                .then(() => handleFinish(form.getFieldsValue()))
                .catch(() => {})
            }
          >
            <Row gutter={ [22, 22] }>
              <Col span={ 5 }>
                <Form.Item label="Fecha" name="fecha" className="w-full">
                  <DatePicker 
                    allowClear 
                    maxDate={ dayjs(FECHA_FORMATO_BARRAS) }
                    format={ {
                      format: FECHA_FORMATO_BARRAS
                      } }/>
                </Form.Item>
              </Col>
              <Col span={ 5 }>
                <Form.Item label="Medico" name="medico">
            {/*       <Select
                    allowClear
                    placeholder="seleccione"
                    options={ categorias?.map((categoria: Categoria) => ( {
                      key: categoria.titulo,
                      label: categoria.titulo.toUpperCase(),
                      value: categoria.titulo,
                    })) }
                  /> */}
                </Form.Item>
              </Col>
              <Col span={ 5 }>
                <Form.Item label="Paciente" name="paciente">
            {/*       <Select
                    allowClear
                    placeholder="seleccione"
                    options={ categorias?.map((categoria: Categoria) => ( {
                      key: categoria.titulo,
                      label: categoria.titulo.toUpperCase(),
                      value: categoria.titulo,
                    })) }
                  /> */}
                </Form.Item>
              </Col>
              <Col span={ 5 }>
                <Form.Item label="Servicio" name="servicio">
            {/*       <Select
                    allowClear
                    placeholder="seleccione"
                    options={ categorias?.map((categoria: Categoria) => ( {
                      key: categoria.titulo,
                      label: categoria.titulo.toUpperCase(),
                      value: categoria.titulo,
                    })) }
                  /> */}
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Form.Item>
                <Button
                  htmlType="submit"
                  className="btn-cyan-custom bg-cyan-900 text-white"
                >
                  Filtrar
                </Button>
              </Form.Item>
            </Row>
          </Form>
        </Card>
      </Card>
    </>
  );
}

export default FiltroConsultasMedicas