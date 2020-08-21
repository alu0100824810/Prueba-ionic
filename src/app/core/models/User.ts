/**
 * Mínimo de datos de un usuario LOGIN
 */
export interface BasicUser {
  userName?: string;
  email: string;
  password: string;
}

/**
 * Datos del usuario (Firebase)
 */
export interface UserInfo {
  uid: string;
  email: string;
  idtoken: any; // TODO: REVISAR
  refreshtoken: string;
}
