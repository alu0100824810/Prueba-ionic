import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormInfo } from 'app/shared/models/FormModel';
import { Participating, ContestDraw } from 'app/shared/models/Contest-Draw.Model';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { generateDateNow } from 'app/shared/utils/functionsUtils';

@Injectable({
  providedIn: 'root'
})
export class FirebaseAppService {

  constructor(private firestore: AngularFirestore, private loginService: LoginService, private router: Router) { }

  /**
   * OBTENER ENCUESTA
   * @param category categoria
   * @param date fecha
   * @param uidUser uid del usuario
   * ! BORRAR
   */
  getFormByID(category: string, date: string, uidUser: string): Promise<any> {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await this.firestore.collection('encuestas').doc(`${category}`).collection(`${date}`).doc(`${uidUser}`).snapshotChanges();
        resolve(result);
      } catch (error) {
        console.error(error);
        reject(error);
      }
    });
  }


  /**
   * OBTENER ENCUESTA
   * @param date fecha
   */
  getOnlyPoll(date: string): Promise<any> {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await this.firestore.collection('encuestas').doc(`${date}`).collection('participantes').doc(`${this.loginService.user.uid}`).snapshotChanges();
        resolve(result);
      } catch (error) {
        console.error(error);
        reject(error);
      }
    });
  }


  /**
   * ENVIAR RESPUESTA DE LA ENCUESTA
   * ! BORRAR
   */
  postFormAnswers(category: string, date: string, uidUser: string, data: FormInfo): Promise<any> {
    return new Promise(async (resolve, reject) => {
      try {
        this.firestore.collection('encuestas').doc(`${category}`).collection(`${date}`).doc(`${uidUser}`).set(data);
        resolve(true);
      } catch (error) {
        console.error(error);
        reject(error);
      }
    });
  }

  /**
   * ENVIAR RESPUESTA DE LA ENCUESTA
   */
  updateAnswersPoll(date: any, data: any): Promise<any> {
    return new Promise(async (resolve, reject) => {
      try {
        this.firestore.collection('encuestas').doc(`${date}`).collection('participantes').doc(`${this.loginService.user.uid}`).set(data);
        resolve(true);
      } catch (error) {
        console.error(error);
        reject(error);
      }
    });
  }




  /**
   * OBTENER TODOS LOS SORTEOS
   * @param date fecha para filtrar los sorteos
   */
  getAllDraw(date: string): Promise<any> {
    return new Promise(async (resolve, reject) => {
      try {
        const result: any = this.firestore.collection('concursos-sorteos').doc(`${date}`).collection('sorteos').snapshotChanges();
        resolve(result);
      } catch (error) {
        console.error(error);
        reject(error);
      }
    });
  }

  getAllDrawFilterByUser(date: string): Promise<any> {
    return new Promise(async (resolve, reject) => {
      try {
        const result: any = this.firestore.collection('concursos-sorteos').doc(`${date}`).collection('participantes').doc(`${this.loginService.user.uid}`).collection('sorteos').snapshotChanges();
        resolve(result);
      } catch (error) {
        console.error(error);
        reject(error);
      }
    });
  }

  /**
   * OBTENER DATOS DE UN ÚNICO SORTEO
   * @param date fecha para filtrar los sorteos
   * @param id id de un documento para filtra los datos de un sorteo
   */
  getDataUniqueDraw(date: string, id: string): Promise<any> {
    return new Promise(async (resolve, reject) => {
      try {
        const result: any = this.firestore.collection('concursos-sorteos').doc(`${date}`).collection('participantes').doc(`${this.loginService.user.uid}`).collection('sorteos').doc(`${id}`).snapshotChanges();
        resolve(result);
      } catch (error) {
        console.error(error);
        reject(error);
      }
    });
  }

  /**
   * PARTICIPAR EN UN SORTEO
   * @param date fecha para filtrar los sorteos
   * @param id id de un documento para filtra los datos de un sorteo
   * @param user información de un participante
   */
  takePartOnlyDraw(date: string, id: string): Promise<any> {
    return new Promise(async (resolve, reject) => {
      try {
        const user: Participating = {
          email: this.loginService.user.email,
          uid: this.loginService.user.uid,
          winner: false
        };
        this.firestore.collection('concursos-sorteos').doc(`${date}`).collection('sorteos').doc(`${id}`).collection('participantes').doc(user.uid).set(user);
        resolve(true);
      } catch (error) {
        console.error(error);
        reject(error);
      }
    });
  }


  sendAnswersPoll(date: string, id: any): Promise<any> {
    return new Promise(async (resolve, reject) => {
      try {
        const user = {
          email: this.loginService.user.email,
          uid: this.loginService.user.uid
        };
        this.firestore.collection('encuestas').doc(`${date}`).collection('formularios').doc(`${id}`).collection('participantes').doc(user.uid).set(user);
        resolve(true);
      } catch (error) {
        console.error(error);
        reject(error);
      }
    });
  }


 // ! aCTUALIZAR LA PARTICIPACIÓN EN X SORTEO
  updateParticiped(date: string, id: string, data: ContestDraw): Promise<any> {
    return new Promise(async (resolve, reject) => {
      try {
        this.firestore.collection('concursos-sorteos').doc(`${date}`).collection('participantes').doc(`${this.loginService.user.uid}`).collection('sorteos').doc(`${id}`).set(data);
        resolve(true);
      } catch (error) {
        console.error(error);
        reject(error);
      }
    });
  }

  /**
   * COMPROBAR SI UN USUARIO YA HA PARTICIPADO EN UN SORTEO
   */
  checkUserHasParticipated(date: string, id: string): Promise<any> {
    return new Promise(async (resolve, reject) => {
      try {
        const res = this.firestore.collection('concursos-sorteos').doc(`${date}`).collection('sorteos').doc(`${id}`).collection('participantes').snapshotChanges();
        resolve(res);
      } catch (error) {
        console.error(error);
        reject(error);
      }
    });
  }


  /**
   * OBTENER OFERTA COMIDA
   * @param date fecha
   */
  getFoodOffer(date: string): Promise<any> {
    return new Promise(async (resolve, reject) => {
      try {
        const result: any = this.firestore.collection('comida').doc(`${date}`).collection('ofertas').snapshotChanges();
        resolve(result);
      } catch (error) {
        console.error(error);
        reject(error);
      }
    });
  }

  /**
   * OBTENER ENCUESTAS
   * @param date fecha
   */
  getPolls(date: string): Promise<any>  {
    return new Promise(async (resolve, reject) => {
      try {
        const result: any = this.firestore.collection('encuestas').doc(`${date}`).collection('formularios').snapshotChanges();
        resolve(result);
      } catch (error) {
        console.error(error);
        reject(error);
      }
    });
  }



  /**
   * OBTENER OFERTA ENTRADAS Y TIENDA
   * @param date fecha
   */
  getShopTicketsOffer(date: string): Promise<any> {
    return new Promise(async (resolve, reject) => {
      try {
        const result: any = this.firestore.collection('ofertas-tienda-entradas').doc(`${date}`).collection('ofertas').snapshotChanges();
        resolve(result);
      } catch (error) {
        console.error(error);
        reject(error);
      }
    });
  }


  /**
   * Resolución de peticiones que proviene de Local Notifications
   * @param data datos a enviar
   * @param type tipo de beacon (1- comida,2 sorteos, etc)
   */
  requestsFromLocalNotification(data: any, type: number) {
    switch (type) {
      case 1:
        this.putUserFoodOffer(generateDateNow(), data);
        this.router.navigateByUrl(`/food`);
        break;

      case 2:
        this.putUserShopTicketOffer(generateDateNow(), data);
        this.router.navigateByUrl(`/offers-shop-tickets`);
        break;
      case 3:
        this.getAllDraw(generateDateNow()).then( res => {
          res.subscribe((d: any) => {
            d.forEach(item => {
              this.putUserConcursoSorteo(generateDateNow(), item.payload.doc.data());
            });
            this.router.navigateByUrl(`/contest-draw`);
          });
        });
        break;
      case 4:
        this.putUserPoll(generateDateNow(), data);
        this.router.navigateByUrl(`/polls`);
        break;
      default:
        break;
    }
  }


  /**
   * Insertar usuario en la participación de concursos y sorteos
   */
  putUserConcursoSorteo(date: any, data: any): Promise<any> {
    return new Promise(async (resolve, reject) => {
      try {
        this.firestore.collection('concursos-sorteos').doc(`${date}`).collection('participantes').doc(`${this.loginService.user.uid}`).collection('sorteos').doc(`${data.id}`).set(data);
        resolve(true);
      } catch (error) {
        console.error(error);
        reject(error);
      }
    });
  }

  /**
   * Insertar un usuario en la participación de una oferta de ENTRADA o TIENDA
   * @param date fecha
   * @param data datos a enviar
   * ! PUT
   */
  putUserShopTicketOffer(date: any, data: any): Promise<any> {
    return new Promise(async (resolve, reject) => {
      try {
        this.firestore.collection('ofertas-tienda-entradas').doc(`${date}`).collection('participantes').doc(`${this.loginService.user.uid}`).set(data);
        resolve(true);
      } catch (error) {
        console.error(error);
        reject(error);
      }
    });
  }


  /**
   * Añadir usuario para hacer la encuesta
   * @param date fecha
   * @param data datos a enviar
   */
  putUserPoll(date: any, data: any): Promise<any> {
    return new Promise(async (resolve, reject) => {
      try {
        this.firestore.collection('encuestas').doc(`${date}`).collection('participantes').doc(`${this.loginService.user.uid}`).set(data);
        resolve(true);
      } catch (error) {
        console.error(error);
        reject(error);
      }
    });
  }


  /**
   * Insertar un usuario en la participación de una oferta de COMIDA
   * @param date fecha
   * @param data datos a enviar
   * ! PUT
   */
  putUserFoodOffer(date: any, data: any): Promise<any> {
    return new Promise(async (resolve, reject) => {
      try {
        this.firestore.collection('comida').doc(`${date}`).collection('participantes').doc(`${this.loginService.user.uid}`).set(data);
        resolve(true);
      } catch (error) {
        console.error(error);
        reject(error);
      }
    });
  }

  /**
   * Recoger datos de participaciones de un usuario en Ofertas de COMIDA
   * @param date fecha
   * ! GET
   */
  getFoodOffersOfUser(date: any): Promise<any>  {
    return new Promise(async (resolve, reject) => {
      try {
        const result: any = this.firestore.collection('comida').doc(`${date}`).collection('participantes').doc(`${this.loginService.user.uid}`).snapshotChanges();
        resolve(result);
      } catch (error) {
        console.error(error);
        reject(error);
      }
    });
  }

  /**
   * Recoger datos de la participación del usuario en una encuesta
   */
  getDataPollOfUser(date: any): Promise<any>  {
    return new Promise(async (resolve, reject) => {
      try {
        const result: any = this.firestore.collection('encuestas').doc(`${date}`).collection('participantes').doc(`${this.loginService.user.uid}`).snapshotChanges();
        resolve(result);
      } catch (error) {
        console.error(error);
        reject(error);
      }
    });
  }


  /**
   * Recoger datos de participaciones de un usuario en Ofertas de ENTRADAS Y TIENDA
   * @param date fecha
   * ! GET
   */
  getShopTicketOffersOfUser(date: any): Promise<any>  {
    return new Promise(async (resolve, reject) => {
      try {
        const result: any = this.firestore.collection('ofertas-tienda-entradas').doc(`${date}`).collection('participantes').doc(`${this.loginService.user.uid}`).snapshotChanges();
        resolve(result);
      } catch (error) {
        console.error(error);
        reject(error);
      }
    });
  }

  /**
   * Recoger datos de para la notificación de concursos y sorteo en activo
   * @param date fecha
   * ! GET
   */
  getDataContestDrawForNotification(date: any): Promise<any>  {
    return new Promise(async (resolve, reject) => {
      try {
        const result: any = this.firestore.collection('concursos-sorteos').doc(`${date}`).snapshotChanges();
        resolve(result);
      } catch (error) {
        console.error(error);
        reject(error);
      }
    });
  }

}
