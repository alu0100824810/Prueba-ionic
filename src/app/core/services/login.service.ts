import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { MessagesService } from './messages.service';
import { getMessageErrorAuth } from '@core/errors/message-firebase';
import { AlertController } from '@ionic/angular';
import { Plugins } from '@capacitor/core';
import { UserInfo } from '@core/models/User';
const { Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private _token: string = null;  // TODO: REVISAR
  usertoken: string = null;  // TODO: REVISAR

  user: UserInfo = null;

  constructor(
    private readonly http: HttpClient,
    public FireAuth: AngularFireAuth,
    private messages: MessagesService,
    public alertController: AlertController,
  ) { }


  /**
   * Iniciar sesión
   * @param email correo
   * @param password password
   */
  logIn(email: string, password: string): Promise<any> {
    return new Promise(async (resolve, reject) => {
      try {
        await this.FireAuth.signInWithEmailAndPassword(email, password).then(async res => {
          const userInfo = {
            uid: res.user.uid,
            email: res.user.email,
            idtoken: res.user.getIdToken(), // TODO: REVISAR
            refreshtoken: res.user.refreshToken
          };
          const store = await Storage.get({ key: 'user' });
          if (JSON.parse(store.value) !== null) {
            await Storage.remove({ key: 'user' });
            this.user = null;
          }
          await Storage.set({
            key: 'user',
            value: JSON.stringify((userInfo))
          });
          this.user = userInfo;
        });
        resolve(true);
      } catch (error) {
        console.error(error);
        const messageError = getMessageErrorAuth(error);
        this.messages.showToast(messageError || 'Error desconocido', 'danger');
        this.user = null;
        reject(error);
      }
    });
  }

  /**
   * Cambiar contraseña
   * @param email correo
   */
  forgetPassword(email: string): Promise<any> {
    return new Promise(async (resolve, reject) => {
      try {
        await this.FireAuth.sendPasswordResetEmail(email);
        resolve(true);
      } catch (error) {
        console.error(error);
        const messageError = getMessageErrorAuth(error);
        this.messages.showToast(messageError || 'Error desconocido', 'danger');
        reject(error);
      }
    });
  }


  /**
   * Registrarse
   * @param email correo
   * @param password password
   */
  signIn(email: string, password: string): Promise<any> {
    return new Promise(async (resolve, reject) => {
      try {
        await this.FireAuth.createUserWithEmailAndPassword(email, password);
        resolve(true);
      } catch (error) {
        console.error(error);
        const messageError = getMessageErrorAuth(error);
        this.messages.showToast(messageError || 'Error desconocido', 'danger');
        reject(error);
      }
    });
  }



  /**
   * Cerra sesión
   */
  async logout(): Promise<any>  {
    return new Promise(async (resolve, reject) => {
      try {
        this._token = null; // TODO: REVISAR
        this.user = null;
        await Storage.remove({ key: 'user' });
        await this.FireAuth.signOut();
        resolve(true);
      } catch (error) {
        console.error(error);
        const messageError = getMessageErrorAuth(error);
        this.messages.showToast(messageError || 'Error desconocido', 'danger');
        reject(error);
      }
     });
  }





  /*login(user: BasicUser, remember: boolean = false): Observable<any> {
    return this.http.post(`${environment.baseurl}/Users/Login`, user).pipe(
      tap((userInfo: any) => {
        this.parseLoginResponse(userInfo.result);
        if (remember) {
          localStorage.setItem('userToken', userInfo.token);
        }
      })
    );
  }*/

  /**
   * TODO: REVISAR
   */
  isLogged(): boolean {
    return !!this._token || !!this.user;
  }

}
