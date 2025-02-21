import { message } from "antd"

/**
 * Mensaje de carga
 * 
 * @param msg Contenido a mostrar
 * @param key Clave para evitar popups repetidos
 */
export const messageInfo = (msg: string, key?: string) => {
     message.info({ content: msg, key: key, duration: 10 }) 
} 

/**
 * Mensaje de carga
 * 
 * @param msg Contenido a mostrar
 * @param key Clave para evitar popups repetidos
 */
export const messageLoading = (msg: string, key?: string ) => {
     message.loading({ content: msg, key: key })
}

/**
 * Mensaje de operacion exitosa
 * 
 * @param msg Contenido a mostrar
 * @param key Clave para evitar popups repetidos
 */
export const messageSuccess = (msg: string, key: string ) => {
     message.success({ content: msg, key: key })
}

/**
 * Mensaje de error
 * 
 * @param msg Contenido a mostrar
 * @param key Clave para evitar popups repetidos
 */
export const messageError = (msg: string, key: string ) => {
     message.error({ content: msg, key: key })
}