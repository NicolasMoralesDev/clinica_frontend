import { Medico } from "./Medico"
import { Paciente } from "./Paciente"

export class ConsultaMedicas {
    id: Number
    medico: Medico
    paciente: Paciente
    servicio: Number
    fechaTurno: Date
    horaTurno: Date
    montoTotal: Number
    pagado: Boolean
    borrado: Boolean
}