import { Button, Card, Col, DatePicker, Form, Row, Select } from "antd"
import dayjs from "dayjs"
import { FECHA_FORMATO_BARRAS } from "../../constants/fechasFormatos"
import { Paciente } from "../../classes/Paciente"
import { Medico } from "../../classes/Medico"
import { ConsultaMedicaFiltro } from "../../classes/ConsultaMedicaFiltro"

interface FiltroConsultasMedicasProps {
  pacientes: Paciente[]
  medicos: Medico[]
  filtrarConsultas: (filtro: ConsultaMedicaFiltro) => void
  form: any
}

const FiltroConsultasMedicas = ({ pacientes, medicos, filtrarConsultas, form }: FiltroConsultasMedicasProps) => {

  const handleFinish = (data: ConsultaMedicaFiltro) => {  filtrarConsultas(data) }

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
                  <Select
                    allowClear
                    placeholder="seleccione"
                    options={ medicos?.map((medico: Medico) => ( {
                      key: medico.id,
                      label: medico.nombre.toUpperCase(),
                      value: medico.id,
                    } )) }
                  /> 
                </Form.Item>
              </Col>
              <Col span={ 5 }>
                <Form.Item label="Paciente" name="paciente">
                   <Select
                     allowClear
                     placeholder="seleccione"
                     options={ pacientes?.map((paciente: Paciente) => ( {
                       key: paciente.nombre,
                       label: paciente.nombre.toUpperCase(),
                       value: paciente.id,
                     } )) }
                  /> 
                </Form.Item>
              </Col>
              <Col span={ 5 }>
                <Form.Item label="Abierto" name="abierta">
                   <Select
                     allowClear
                     placeholder="seleccione"
                      options={ [
                        { key: "false", label: "SI", value: false },
                        { key: "true", label: "NO", value: true },
                      ] }
                  /> 
                </Form.Item>
              </Col>
              <Col span={ 5 }>
                <Form.Item label="Pagado" name="pagado">
                   <Select
                     allowClear
                     placeholder="seleccione"
                      options={ [
                        { key: "false", label: "SI", value: false },
                        { key: "true", label: "NO", value: true },
                      ] }
                  /> 
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
                  type="primary"
                  className="btn-cyan-custom text-white"
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