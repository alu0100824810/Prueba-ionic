import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormInfo } from 'app/shared/models/FormModel';
import { Participating } from 'app/shared/models/Contest-Draw.Model';

@Injectable({
  providedIn: 'root'
})
export class FirebaseAppService {

  constructor(private firestore: AngularFirestore) { }

  /**
   * OBTENER ENCUESTA
   * @param category categoria
   * @param date fecha
   * @param uidUser uid del usuario
   */
  getFormByID(category: string, date: string, uidUser: string): Promise<any> {
    return new Promise( async (resolve, reject) => {
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
   * ENVIAR RESPUESTA DE LA ENCUESTA
   */
  postFormAnswers(category: string, date: string, uidUser: string, data: FormInfo): Promise<any> {
    return new Promise( async (resolve, reject) => {
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
   * OBTENER DATOS DE TODOS LOS SORTEOS
   * @param date fecha para filtrar los sorteos
   */
  getAllDraw(date: string): Promise<any> {
    return new Promise( async (resolve, reject) => {
      try {
        const result: any = this.firestore.collection('concursos-sorteos').doc(`${date}`).collection('sorteos').snapshotChanges();
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
    return new Promise( async (resolve, reject) => {
      try {
        const result: any = this.firestore.collection('concursos-sorteos').doc(`${date}`).collection('sorteos').doc(`${id}`).snapshotChanges();
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
  takePartOnlyDraw(date: string, id: string, user: Participating): Promise<any> {
    return new Promise( async (resolve, reject) => {
      try {
        this.firestore.collection('concursos-sorteos').doc(`${date}`).collection('sorteos').doc(`${id}`).collection('participantes').doc(user.uid).set(user);
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
    return new Promise( async (resolve, reject) => {
      try {
        const res = this.firestore.collection('concursos-sorteos').doc(`${date}`).collection('sorteos').doc(`${id}`).collection('participantes').snapshotChanges();
        resolve(res);
      } catch (error) {
        console.error(error);
        reject(error);
      }
    });
  }
}
