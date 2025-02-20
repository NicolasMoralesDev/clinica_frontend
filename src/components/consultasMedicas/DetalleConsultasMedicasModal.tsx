import { useEffect } from "react"
import { Button, Card, Col, Form, Input, Row } from "antd"
import ConfirmationModal from "../modal/ConfirmationModal"
import { ConsultaMedicas } from "../../classes/ConsultasMedicas"

interface DetalleConsultasMedicasModalProps {
  detalleModal: boolean
  consultaModal?: ConsultaMedicas
  setDetalleModal: (estado: boolean) => void
  form: any
}

const DetalleConsultasMedicasModal = ({ detalleModal, consultaModal, setDetalleModal, form }: DetalleConsultasMedicasModalProps) => {

  useEffect(() => {
    form.setFieldsValue({
        id: detalleModal ? consultaModal?.id : '',
        pacienteNombre: detalleModal ? consultaModal?.paciente?.nombre : '',
        pacienteDireccion: detalleModal ? consultaModal?.paciente?.direccion : '',
        pacienteEmail: detalleModal ? consultaModal?.paciente?.email : '',
        pacienteDni: detalleModal ? consultaModal?.paciente?.dni : '',
        pacienteObraSocial:  consultaModal?.paciente?.obraSocial ? "SI" : 'NO',
        medicoNombre: detalleModal ? consultaModal?.medico?.nombre : '',
/*         fecha: detalleModal ? consultaModal?.fecha : '',
 */     servicio: detalleModal ? consultaModal?.servicio : '',
        fechaTurno: detalleModal ? consultaModal?.fechaTurno : '',
        montoTotal: detalleModal ? consultaModal?.montoTotal : '',
        pagado: detalleModal ? consultaModal?.pagado : ''
    })
}, [form])

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
        nombre: values?.medicoNombre,
      /*         fecha: detalleModal ? consultaModal?.fecha : '',
       */ 
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
      title="Detalle de la consulta"
      onCancel={ ()=> setDetalleModal(!detalleModal) }
    >
     <Card className="w-full">
     <Form layout="vertical" 
           className="max-w-4xl mx-auto p-4"
           form={ form }
      >
      <Row gutter={ 16 }>
        <Col span={ 12 } sm={ 24 }>
          <Form.Item label="ID" name="id">
            <Input disabled className="border-gray-300" />
          </Form.Item>
        </Col>
      </Row>   
      <Card className="w-full">
        <Row>
          <Form.Item label="Nombre del paciente" name="pacienteNombre">
            <Input disabled className="border-gray-300" />
          </Form.Item>
          <Form.Item label="Direccion" name="pacienteDireccion">
            <Input disabled className="border-gray-300" />
          </Form.Item>
          <Form.Item label="Mail" name="pacienteEmail">
            <Input disabled className="border-gray-300" />
          </Form.Item>
          <Form.Item label="DNI" name="pacienteDni">
            <Input disabled className="border-gray-300" />
          </Form.Item>
          <Form.Item label="Obra social" name="pacienteObraSocial">
            <Input disabled className="border-gray-300" />
          </Form.Item>
        </Row>
      </Card>   
      <Row gutter={ 16 }>
        <Col span={ 12 } sm={ 24 }>
          <Form.Item label="Medico" name="medicoNombre">
            <Input  disabled className="border-gray-300" />
          </Form.Item>
        </Col>
        <Col span={ 12 } sm={ 24 }>
          <Form.Item label="Fecha" name="fechaTurno">
            <Input disabled className="border-gray-300" />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={ 16 }>
        <Col span={ 24 }>
          <Form.Item label="Servicio" name="servicio">
            <Input disabled className="border-gray-300" />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={ 16 }>
        <Col span={ 24 }>
          <Form.Item label="Monto Total" name="montoTotal">
            <Input disabled className="border-gray-300" />
          </Form.Item>
        </Col>
        <Form.Item label="Pagado" name="pagado">
            <Input disabled className="border-gray-300" />
          </Form.Item>
      </Row>
      <Button type="primary" htmlType="submit" onClick={ ()=> onFinish(form.getFieldsValue()) } >guardar</Button>
    </Form>
    </Card>
    </ConfirmationModal>
  )
}

export default DetalleConsultasMedicasModal