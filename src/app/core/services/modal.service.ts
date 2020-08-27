import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(public alertController: AlertController) { }

  /**
   * Mostrar modal
   * @param header título de la cabecera del modal
   * @param message mensaje del modal
   */
  async showModal(header: string, message: string) {
    const alert = await this.alertController.create({
        cssClass: 'my-custom-class', // !cambiar
        header,
        message,
        backdropDismiss: false,
        buttons: ['OK']
      });
    await alert.present();
  }

}
