
/**
 * Funcion para el filtrado de opciones en un select
 * @param inputValue Busqueda del usuario
 * @param option Opciones del select
 * @returns boolean
 */
export const selectFilterOption = (inputValue: any, option: any) => option?.label?.toString().toLowerCase().indexOf(inputValue?.toString().toLowerCase()) >= 0