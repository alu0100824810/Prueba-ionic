import { Injectable } from '@angular/core';
import { IBeacon } from '@ionic-native/ibeacon/ngx';
import { Platform } from '@ionic/angular';
import { ModalService } from './modal.service';
import { BeaconInfo } from '@core/models/iBeaconModel';
import { FirebaseAppService } from './firebase-app.service';
import { generateRandomNumber, generateDateNow } from 'app/shared/utils/functionsUtils';
import { LocalNotificationService } from './localNotification.service';
import { DataNotification } from '@core/models/localNotificationModel';

@Injectable({
    providedIn: 'root'
})
export class BeaconsService {

    delegate: any;

    constructor(private ibeacon: IBeacon, public platform: Platform, public readonly modalService: ModalService,
                private firebaseService: FirebaseAppService,
                private localNotificationService: LocalNotificationService) { }


    /**
     * * Comprueba si se le permite acceder a localización
     * ! iOS es necesario, en Android no hace falta
     */
    isEnabledLocation() {
        if (this.platform.is('ios' || 'ipad' || 'iphone')) {
            this.ibeacon.requestAlwaysAuthorization();
            this.ibeacon.getAuthorizationStatus().then(res => {
                if (res.authorizationStatus === 'AuthorizationStatusDenied') {
                    this.modalService.showModal('Aviso', 'La Localización está desactivada. Para poder interectuar con los Beacons, es necesario activarla. Por favor, vaya Ajustes > CDTenerife > Localización y actívela.');
                }
            });
        }
    }


    /**
     * * Comprueba que el Bluetooth está habilitado
     */
    isEnabledBluetooth() {
        this.ibeacon.isBluetoothEnabled().then(statusBluetooth => {
            if (!statusBluetooth) {
                this.modalService.showModal('Aviso', 'El Bluetooth está desactivado. Para poder interectuar con los Beacons, es necesario activarlo. Por favor, vaya Ajustes y actívelo.');
            }
        });
    }


    /**
     * * Comenzar a buscar beacons
     * - Crear nuevo delegado y lo registra con la capa activa
     */
    startSearchOfBeacons(beacon: BeaconInfo) {
        this.delegate = this.ibeacon.Delegate();
        this.controlAuthorizationStatus();
        this.rangeBeaconsInRegion();
        this.startMonitoringForRegion();
        this.enterRegion();
        const beaconRegion = this.ibeacon.BeaconRegion(beacon.identifier, beacon.uuid, beacon.major, beacon.minor, true);
        this.startMonitoringRegion(beaconRegion);
    }


    /**
     * Control del estado de autorización, se llamada cada vez q se modifica
     */
    controlAuthorizationStatus() {
        this.delegate.didChangeAuthorizationStatus()
            .subscribe(
                data => {
                    console.log('🔆 didChangeAuthorizationStatus: ', data);
                    this.isEnabledLocation();
                },
                error => console.error(error)
            );
    }


    /**
     * Cuando se detecta un beacon cualquiera dentro de la región.
     */
    rangeBeaconsInRegion() {
        this.delegate.didRangeBeaconsInRegion()
            .subscribe(
                data => console.log('🔆  didRangeBeaconsInRegion: ', data), // ! a veces entra y otras veces pasa
                error => console.error(error)
            );
    }


    /**
     * Cuando el dispositivo comienza a monitorear una región.
     */
    startMonitoringForRegion() {
        this.delegate.didStartMonitoringForRegion()
            .subscribe(
                data => console.log('🔆  didStartMonitoringForRegion: ', data),
                error => console.error(error)
            );
    }


    /**
     * * El dispositivo entra en la región solicitó monitorear.
     */
    enterRegion() {
        this.delegate.didEnterRegion()
            .subscribe(
                async data => {
                    console.log('🔆  didEnterRegion: ', data);
                    await this.sendNotification(data);
                    // let e = { region : { 'typeName': 'BeaconRegion', 'minor': 1, 'major': 1, 'identifier': 'Beacon Popular-Comida', 'uuid': 'B9407F30-F5F8-466E-AFF9-25556B57FE6D' }, 'eventType': 'didEnterRegion' }
                }
            );
    }

    /**
     * * Comienza a monitorear una región especificada.
     */
    startMonitoringRegion(beacon: BeaconInfo) {
        this.ibeacon.startMonitoringForRegion(beacon)
            .then(
                () => console.log(' 🔆  Native layer received the request to monitoring'),
                error => console.error('Native layer failed to begin monitoring: ', error)
            );
    }


    /**
     * * Parar de monitorear una región especificada.
     */
    stopMonitoringRegion(region: BeaconInfo) {
        this.ibeacon.stopMonitoringForRegion(region);
    }



    /**
     * Enviar notificación dependiendo del tipo de beacon
     * @param data datos del beacon
     */
    async sendNotification(data: any) {
        switch (data.region.minor) {
            case 1:
                const res1 = await this.firebaseService.getFoodOffer(generateDateNow());
                this.notifications(res1, 1, true);
                break;
            case 2:
                const res2 = await this.firebaseService.getShopTicketsOffer(generateDateNow());
                this.notifications(res2, 2, true);
                break;
            case 3:
                await this.firebaseService.getDataContestDrawForNotification(generateDateNow()).then( res => {
                    res.subscribe(async (d: any) => {
                      this.localNotificationService.activateListen(d.payload.data(), true, 3);
                      this.localNotificationService.customButtons(d.payload.data().buttonsNotification);
                      this.localNotificationService.showNotification(d.payload.data());
                    });
                  });
                break;
            case 4:
                const res4 = await this.firebaseService.getPolls(generateDateNow());
                this.notifications(res4, 4, true);
                break;
            default:
                break;
        }
    }


    /**
     * Configuraciones
     * @param result resultados de las peticiones
     * @param typeBeacon tipo de beacon
     * @param firebase uso de firebase, mostra dato en la notificación de la BBDD
     */
    notifications(result: any, typeBeacon: number, firebase: boolean) {
        let data: Array<DataNotification> = [];
        result.subscribe(async (d: any) => { // ! OJO: CON EL SUBCRIBE- DESUCRBIBE
            d.forEach(item => {
                data.push(item.payload.doc.data());
            });
            const num = generateRandomNumber(data.length);
            this.localNotificationService.activateListen(data[num], true, typeBeacon);
            this.localNotificationService.customButtons(data[num].buttonsNotification);
            this.localNotificationService.showNotification(data[num]);
        });
    }




}
