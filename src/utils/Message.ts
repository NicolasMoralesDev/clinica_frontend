import { message } from "antd";

/**
 * Mensaje de carga
 * 
 * @param msg Contenido a mostrar
 * @param key Clave para evitar popups repetidos
 * @param isLoading Condicion para mostrar o no el mensaje
 */
export const messageLoading = (msg: string, key?: string, isLoading?: boolean ) => {
     if (isLoading) {
          message.loading({ content: msg, key: key })
     }
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