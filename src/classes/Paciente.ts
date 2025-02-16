import { Enfermedad } from "./Enfermedad"

export class Paciente {
    id: Number
    nombre: String
    obraSocial: boolean
    dni: String
    direccion: String
    email: String
    enfermedades: Set<Enfermedad>

    getIsObraSocial() {
        return this.obraSocial ? 'Si' : 'No'
    }
}