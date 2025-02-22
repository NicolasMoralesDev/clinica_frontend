import { useEffect, useState } from "react"
import { Button, Card, Col, DatePicker, Form, Input, Row, Select } from "antd"
import ConfirmationModal from "../modal/ConfirmationModal"
import { ConsultaMedicas } from "../../classes/ConsultasMedicas"
import { Medico } from "../../classes/Medico"
import { useObtenerPacientes } from "../../hooks/fetchPacientes"
import { Paciente } from "../../classes/Paciente"
import { selectFilterOption } from "../../utils/StringUtils"
import { useObtenerMedicos } from "../../hooks/fetchMedicos"
import { FECHA_FORMATO_BARRAS } from "../../constants/fechasFormatos"
import dayjs from "dayjs"

interface ConsultasMedicasModalProps {
  detalleModal: boolean
  consultaModal?: ConsultaMedicas
  setDetalleModal: (estado: boolean) => void
  form: any
  detalle?: boolean
}

const ConsultasMedicasModal = ({ detalleModal, consultaModal, setDetalleModal, form, detalle }: ConsultasMedicasModalProps) => {

  const { mutate: obtenerPacientes, data: pacientesObtenidos, error: _errorAlObtenerPacientes } = useObtenerPacientes()
  const { mutate: obtenerMedicos, data: medicosObtenidos, error: _errorAlObtenerMedicos } = useObtenerMedicos()

  const [paciente, setPaciente] = useState<Paciente>()

  const onChange = (nombre: String) => {
    setPaciente(pacientesObtenidos?.data.find((paciente: Paciente) => paciente.nombre === nombre))
  }
   
  useEffect(() => { obtenerPacientes(), obtenerMedicos() }, [])
  
  useEffect(() => {
    form.setFieldsValue({
        id: detalle ? consultaModal?.id : '',
        pacienteNombre: detalle ? consultaModal?.paciente?.nombre : paciente?.nombre,
        pacienteDireccion: detalle ? consultaModal?.paciente?.direccion : paciente?.direccion,
        pacienteEmail: detalle ? consultaModal?.paciente?.email : paciente?.email,
        pacienteDni: detalle ? consultaModal?.paciente?.dni : paciente?.dni,
        pacienteObraSocial: detalle ? consultaModal?.paciente?.obraSocial ? "SI" : 'NO' : paciente?.obraSocial ? "SI" : 'NO',
        medicoNombre: detalle ? consultaModal?.medico?.nombre : '',
        servicio: detalle ? consultaModal?.servicio : '',
        fechaTurno: detalle ? dayjs(consultaModal?.fechaTurno) : '',
        montoTotal: detalle ? consultaModal?.montoTotal : '',
        pagado: detalle ? consultaModal?.pagado : ''
    })
}, [form, paciente])

  const onFinish = (values: any) => {
    const data = {
      id: values?.id,
      paciente: {
        nombre: values?.pacienteNombre,
        direccion: values?.pacienteDireccion,
        email: values?.pacienteEmail,
        dni: values?.pacienteDni,
        obraSocial: values?.pacienteObraSocial === "SI" ? true : false,
      },
      medico: {
        nombre: values?.medicoNombre
      },
      servicio: values?.servicio,
      fechaTurno: values?.fechaTurno,
      montoTotal: values?.montoTotal,
      pagado: values?.pagado
    };
    console.log(data);
    
  }

  return (
    <ConfirmationModal
      width={ 800 }
      open={ detalleModal }
      title={ detalle ? "Detalle de la consulta" : "Registrar Consulta"}
      onCancel={ ()=> setDetalleModal(!detalleModal) }
    >
     <Card className="w-full">
     <Form layout="vertical" 
           className="max-w-4xl mx-auto p-4"
           form={ form }
      >
      { detalle &&
      <Row gutter={ 16 }>
        <Col span={ 12 } sm={ 24 }>
          <Form.Item label="ID" name="id">
            <Input disabled={ detalle } className="border-gray-300" />
          </Form.Item>
        </Col>
      </Row> 
     }
      <Card className="w-full" title="Datos del paciente">
        <Row align="middle" gutter={ 16 }>
          <Col span={ 12 }>
          <Form.Item label="Nombre del paciente" required name="pacienteNombre">
           <Select
             allowClear
             showSearch
             filterOption={ selectFilterOption }
             onChange={ (input, option: any) => onChange(option.label) }
             placeholder="seleccione un paciente"
             options={ pacientesObtenidos?.data?.map((paciente: Paciente) => ( {
                      key: paciente.id,
                      label: paciente.nombre,
                      value: paciente.id,
              } )) }
            /> 
          </Form.Item>
          <Form.Item label="Dirección" name="pacienteDireccion">
            <Input disabled className="border-gray-300" />
          </Form.Item>
          </Col>
          <Col span={ 12 }>
          <Form.Item label="Mail" name="pacienteEmail">
            <Input disabled className="border-gray-300" />
          </Form.Item>
          <Form.Item label="DNI" name="pacienteDni">
            <Input disabled className="border-gray-300" />
          </Form.Item>
          </Col>
          <Form.Item label="Obra social" name="pacienteObraSocial">
             <Select
               disabled
               allowClear
               placeholder="seleccione"
              >
                <Select.Option value="true">SI</Select.Option>
                <Select.Option value="false">NO</Select.Option>
              </Select>
          </Form.Item>
        </Row>
      </Card>   
      <Row gutter={ 16 }>
        <Col span={ 12 } sm={ 24 }>
          <Form.Item label="Medico" name="medicoNombre" required>
            <Select
             allowClear
             showSearch
             filterOption={ selectFilterOption }
             placeholder="seleccione un medico"
             options={ medicosObtenidos?.data?.map((medico: Medico) => ( {
                      key: medico.id,
                      label: medico.nombre,
                      value: medico.id,
              } )) }
            />
          </Form.Item>
        </Col>
        <Col span={ 12 } sm={ 24 }>
          <Form.Item label="Fecha" name="fechaTurno" required>
                  <DatePicker 
                    allowClear 
                    maxDate={ dayjs(FECHA_FORMATO_BARRAS) }
                    format={ {
                      format: FECHA_FORMATO_BARRAS
                    } }/>
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={ 16 }>
        <Col span={ 24 }>
          <Form.Item label="Servicio" name="servicio" required>
            <Input disabled={ detalle } className="border-gray-300" />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={ 16 }>
        <Col span={ 24 }>
          <Form.Item label="Monto Total" name="montoTotal" required>
            <Input disabled={ detalle } className="border-gray-300" />
          </Form.Item>
        </Col>
        <Col span={ 24 }>
           <Form.Item label="Pagado" name="pagado" required>
             <Select
               allowClear
               placeholder="seleccione"
              >
                <Select.Option value="true">SI</Select.Option>
                <Select.Option value="false">NO</Select.Option>
              </Select>
          </Form.Item>
        </Col>
      </Row>
      <Button type="primary" htmlType="submit" onClick={ ()=> onFinish(form.getFieldsValue()) } >Guardar</Button>
    </Form>
    </Card>
    </ConfirmationModal>
  )
}

export default ConsultasMedicasModal