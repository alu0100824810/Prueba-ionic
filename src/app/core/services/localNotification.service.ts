import { Injectable } from '@angular/core';
import { ButtonsNotification, DataNotification } from '@core/models/localNotificationModel';
import { Plugins, LocalNotification, LocalNotificationActionPerformed } from '@capacitor/core';
import { FirebaseAppService } from './firebase-app.service';
const { LocalNotifications } = Plugins;


@Injectable({
    providedIn: 'root'
})
export class LocalNotificationService {


    constructor(private firebaseAppService: FirebaseAppService) { }


    /**
     *  Solicitar permiso de notificaciones
     * ! Revisar en Android
     */
    async isEnabledNotifications() {
        await LocalNotifications.requestPermission();
    }

    /**
     * Crear botones personalizados.
     * @param buttonsData datos de los botones
     */
    customButtons(buttonsData: ButtonsNotification) {
        LocalNotifications.registerActionTypes(buttonsData);
    }


    /**
     * Activar escucha (Listen)
     * @param firebase si va hacer una petición a la BBDD
     * @param data datos
     */
    activateListen(data: any, firebase: boolean, type: number) {
        LocalNotifications.addListener('localNotificationActionPerformed', (notification: LocalNotificationActionPerformed) => {
            console.log('Pulsar: ', notification.actionId);

            if (notification.actionId === 'view' && firebase) {  // TODO: ENVIAR DATOS A FIREBASE, PARA QUE CUANDO SE CARGUE LA PAGINA YA ESTÉ CARGADO LOS DATOS
                this.firebaseAppService.requestsFromLocalNotification(data, type);
                this.removeAllListen();
            }

            if (notification.actionId === 'view' && !firebase) {
               // this.router.navigateByUrl(`/${route}`);
              //  this.removeAllListen();
            }

        });
    }


    /**
     * Eliminar TODOS los escuchas (Listen)
     */
    removeAllListen() {
        LocalNotifications.removeAllListeners();
    }


    /**
     * Mostrar notificación
     * @param datos de notificación
     */
    async showNotification(data: DataNotification) {
        await LocalNotifications.schedule({
            notifications: [
                {
                    title: data.title,
                    body: data.message,
                    id: 1,
                    actionTypeId: data.buttonsNotification.types[0].id,
                    attachments: [
                        {
                            id: 'face',
                            url: `res://public/assets/notifications/${data.type}.jpg`
                        }
                    ]
                }
            ]
        });
    }


}
