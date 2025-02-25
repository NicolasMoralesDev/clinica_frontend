import { Enfermedad } from "./Enfermedad"
import { Persona } from "./Persona"

export class Paciente extends Persona {
    obraSocial: boolean
    enfermedades: Set<Enfermedad>

    getIsObraSocial() {
        return this.obraSocial ? 'Si' : 'No'
    }
}