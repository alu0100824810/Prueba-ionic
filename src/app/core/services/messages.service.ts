import { Injectable } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';
import { ToastOptions } from '@ionic/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  private toastGenericOptions: ToastOptions = {
    position: 'top',
   // closeButtonText: 'OK',
    duration: 3500
  };
  private spinner: HTMLIonLoadingElement;

  constructor(
    private readonly toast: ToastController,
    private readonly loadingController: LoadingController,
  ) { }

  /**
   * Muestra un mensaje al usuario
   * @param message mensaje para el usuario
   * @param color color del mensaje
   */
  async showToast(message: string, color: string = 'success'): Promise<void> {
    const options: ToastOptions = {
      message,
      color,
      ...this.toastGenericOptions,
    };
    const toast = await this.toast.create(options);
    toast.present();
  }


  /**
   * Muestra un spiner a pantalla completa
   * @param message Mensaje para el spiner
   */
  async showSpinner(message?: string): Promise<void> {
    this.spinner = await this.loadingController.create({
      message,
      spinner: 'crescent'
    });
    await this.spinner.present();
  }

  /**
   * Oculta el spiner actual
   */
  hideSpinner(): void {
    if (this.spinner !== undefined) {
      this.spinner.dismiss();
      this.spinner = undefined;
    }
  }


}
