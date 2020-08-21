import { HandlerErrorFirebase } from '@core/models/HandlerErrorFirebase';

export function getMessageErrorAuth(error: HandlerErrorFirebase) {

    switch (error.code) {

        case 'auth/email-already-in-use':
            return 'La dirección de correo electrónico ya ha sido usado en otra cuenta.';

        case 'auth/weak-password':
            return 'La contraseña debe tener al menos 6 caracteres.';

        case 'auth/invalid-email':
            return 'La dirección de correo no es válida';

        case 'auth/argument-error':
            return 'Correo no válido';

        case 'auth/wrong-password':
            return 'La contraseña es incorrecta o el usuario no existe';

        case 'auth/user-not-found':
            return 'No existe este usuario.';

        case 'auth/too-many-requests':
            return 'Hemos bloqueado todas las solicitudes de este dispositivo debido a una actividad inusual. Vuelva a intentarlo más tarde';

        default:
            break;
    }
}
