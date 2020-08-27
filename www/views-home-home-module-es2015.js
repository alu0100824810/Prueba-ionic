(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/home/home.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/home/home.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<app-sidebar-menu #menu></app-sidebar-menu>\n\n<ion-tabs>\n  <ion-tab-bar slot=\"bottom\">\n    <ion-tab-button tab=\"news\">\n      <fa-icon [icon]=\"icons.newspaper\"></fa-icon>\n      <ion-label>Noticias</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"matches\">\n      <fa-icon [icon]=\"icons.matches\"></fa-icon>\n      <ion-label>Partidos</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"team\">\n      <fa-icon [icon]=\"icons.team\"></fa-icon>\n      <ion-label>Equipo</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button (click)=\"openSideBar()\">\n      <fa-icon [icon]=\"icons.more\"></fa-icon>\n      <ion-label>Más</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n</ion-tabs>");

/***/ }),

/***/ "./src/app/core/services/beacons.service.ts":
/*!**************************************************!*\
  !*** ./src/app/core/services/beacons.service.ts ***!
  \**************************************************/
/*! exports provided: BeaconsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeaconsService", function() { return BeaconsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_native_ibeacon_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/ibeacon/ngx */ "./node_modules/@ionic-native/ibeacon/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _modal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modal.service */ "./src/app/core/services/modal.service.ts");
/* harmony import */ var _firebase_app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./firebase-app.service */ "./src/app/core/services/firebase-app.service.ts");
/* harmony import */ var app_shared_utils_functionsUtils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/shared/utils/functionsUtils */ "./src/app/shared/utils/functionsUtils.ts");
/* harmony import */ var _localNotification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./localNotification.service */ "./src/app/core/services/localNotification.service.ts");








let BeaconsService = class BeaconsService {
    constructor(ibeacon, platform, modalService, firebaseService, localNotificationService) {
        this.ibeacon = ibeacon;
        this.platform = platform;
        this.modalService = modalService;
        this.firebaseService = firebaseService;
        this.localNotificationService = localNotificationService;
    }
    /**
     * * Comprueba si se le permite acceder a localización
     * ! iOS es necesario, en Android no hace falta
     */
    isEnabledLocation() {
        if (this.platform.is('ios' || false || false)) {
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
    startSearchOfBeacons(beacon) {
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
            .subscribe(data => {
            console.log('🔆 didChangeAuthorizationStatus: ', data);
            this.isEnabledLocation();
        }, error => console.error(error));
    }
    /**
     * Cuando se detecta un beacon cualquiera dentro de la región.
     */
    rangeBeaconsInRegion() {
        this.delegate.didRangeBeaconsInRegion()
            .subscribe(data => console.log('🔆  didRangeBeaconsInRegion: ', data), // ! a veces entra y otras veces pasa
        // ! a veces entra y otras veces pasa
        error => console.error(error));
    }
    /**
     * Cuando el dispositivo comienza a monitorear una región.
     */
    startMonitoringForRegion() {
        this.delegate.didStartMonitoringForRegion()
            .subscribe(data => console.log('🔆  didStartMonitoringForRegion: ', data), error => console.error(error));
    }
    /**
     * * El dispositivo entra en la región solicitó monitorear.
     */
    enterRegion() {
        this.delegate.didEnterRegion()
            .subscribe((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('🔆  didEnterRegion: ', data);
            yield this.sendNotification(data);
            // let e = { region : { 'typeName': 'BeaconRegion', 'minor': 1, 'major': 1, 'identifier': 'Beacon Popular-Comida', 'uuid': 'B9407F30-F5F8-466E-AFF9-25556B57FE6D' }, 'eventType': 'didEnterRegion' }
        }));
    }
    /**
     * * Comienza a monitorear una región especificada.
     */
    startMonitoringRegion(beacon) {
        this.ibeacon.startMonitoringForRegion(beacon)
            .then(() => console.log(' 🔆  Native layer received the request to monitoring'), error => console.error('Native layer failed to begin monitoring: ', error));
    }
    /**
     * * Parar de monitorear una región especificada.
     */
    stopMonitoringRegion(region) {
        this.ibeacon.stopMonitoringForRegion(region);
    }
    /**
     * Enviar notificación dependiendo del tipo de beacon
     * @param data datos del beacon
     */
    sendNotification(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            switch (data.region.minor) {
                case 1:
                    const res1 = yield this.firebaseService.getFoodOffer(Object(app_shared_utils_functionsUtils__WEBPACK_IMPORTED_MODULE_6__["generateDateNow"])());
                    this.notifications(res1, 1, true);
                    break;
                case 2:
                    const res2 = yield this.firebaseService.getShopTicketsOffer(Object(app_shared_utils_functionsUtils__WEBPACK_IMPORTED_MODULE_6__["generateDateNow"])());
                    this.notifications(res2, 2, true);
                    break;
                case 3:
                    yield this.firebaseService.getDataContestDrawForNotification(Object(app_shared_utils_functionsUtils__WEBPACK_IMPORTED_MODULE_6__["generateDateNow"])()).then(res => {
                        res.subscribe((d) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            this.localNotificationService.activateListen(d.payload.data(), true, 3);
                            this.localNotificationService.customButtons(d.payload.data().buttonsNotification);
                            this.localNotificationService.showNotification(d.payload.data());
                        }));
                    });
                    break;
                case 4:
                    const res4 = yield this.firebaseService.getPolls(Object(app_shared_utils_functionsUtils__WEBPACK_IMPORTED_MODULE_6__["generateDateNow"])());
                    this.notifications(res4, 4, true);
                    break;
                default:
                    break;
            }
        });
    }
    /**
     * Configuraciones
     * @param result resultados de las peticiones
     * @param typeBeacon tipo de beacon
     * @param firebase uso de firebase, mostra dato en la notificación de la BBDD
     */
    notifications(result, typeBeacon, firebase) {
        let data = [];
        result.subscribe((d) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            d.forEach(item => {
                data.push(item.payload.doc.data());
            });
            const num = Object(app_shared_utils_functionsUtils__WEBPACK_IMPORTED_MODULE_6__["generateRandomNumber"])(data.length);
            this.localNotificationService.activateListen(data[num], true, typeBeacon);
            this.localNotificationService.customButtons(data[num].buttonsNotification);
            this.localNotificationService.showNotification(data[num]);
        }));
    }
};
BeaconsService.ctorParameters = () => [
    { type: _ionic_native_ibeacon_ngx__WEBPACK_IMPORTED_MODULE_2__["IBeacon"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
    { type: _modal_service__WEBPACK_IMPORTED_MODULE_4__["ModalService"] },
    { type: _firebase_app_service__WEBPACK_IMPORTED_MODULE_5__["FirebaseAppService"] },
    { type: _localNotification_service__WEBPACK_IMPORTED_MODULE_7__["LocalNotificationService"] }
];
BeaconsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_native_ibeacon_ngx__WEBPACK_IMPORTED_MODULE_2__["IBeacon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"], _modal_service__WEBPACK_IMPORTED_MODULE_4__["ModalService"],
        _firebase_app_service__WEBPACK_IMPORTED_MODULE_5__["FirebaseAppService"],
        _localNotification_service__WEBPACK_IMPORTED_MODULE_7__["LocalNotificationService"]])
], BeaconsService);



/***/ }),

/***/ "./src/app/core/services/localNotification.service.ts":
/*!************************************************************!*\
  !*** ./src/app/core/services/localNotification.service.ts ***!
  \************************************************************/
/*! exports provided: LocalNotificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalNotificationService", function() { return LocalNotificationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");
/* harmony import */ var _firebase_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./firebase-app.service */ "./src/app/core/services/firebase-app.service.ts");




const { LocalNotifications } = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"];
let LocalNotificationService = class LocalNotificationService {
    constructor(firebaseAppService) {
        this.firebaseAppService = firebaseAppService;
    }
    /**
     *  Solicitar permiso de notificaciones
     * ! Revisar en Android
     */
    isEnabledNotifications() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield LocalNotifications.requestPermission();
        });
    }
    /**
     * Crear botones personalizados.
     * @param buttonsData datos de los botones
     */
    customButtons(buttonsData) {
        LocalNotifications.registerActionTypes(buttonsData);
    }
    /**
     * Activar escucha (Listen)
     * @param firebase si va hacer una petición a la BBDD
     * @param data datos
     */
    activateListen(data, firebase, type) {
        LocalNotifications.addListener('localNotificationActionPerformed', (notification) => {
            console.log('Pulsar: ', notification.actionId);
            if (notification.actionId === 'view' && firebase) { // TODO: ENVIAR DATOS A FIREBASE, PARA QUE CUANDO SE CARGUE LA PAGINA YA ESTÉ CARGADO LOS DATOS
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
    showNotification(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield LocalNotifications.schedule({
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
        });
    }
};
LocalNotificationService.ctorParameters = () => [
    { type: _firebase_app_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseAppService"] }
];
LocalNotificationService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_firebase_app_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseAppService"]])
], LocalNotificationService);



/***/ }),

/***/ "./src/app/core/services/modal.service.ts":
/*!************************************************!*\
  !*** ./src/app/core/services/modal.service.ts ***!
  \************************************************/
/*! exports provided: ModalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalService", function() { return ModalService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");



let ModalService = class ModalService {
    constructor(alertController) {
        this.alertController = alertController;
    }
    /**
     * Mostrar modal
     * @param header título de la cabecera del modal
     * @param message mensaje del modal
     */
    showModal(header, message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header,
                message,
                backdropDismiss: false,
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
};
ModalService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
];
ModalService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
], ModalService);



/***/ }),

/***/ "./src/app/shared/mock/beacons.mock.json":
/*!***********************************************!*\
  !*** ./src/app/shared/mock/beacons.mock.json ***!
  \***********************************************/
/*! exports provided: 0, 1, 2, 3, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"identifier\":\"Beacon Popular-Comida\",\"uuid\":\"B9407F30-F5F8-466E-AFF9-25556B57FE6D\",\"major\":1,\"minor\":1},{\"identifier\":\"Beacon Popular-Entradas-Tienda\",\"uuid\":\"B9407F30-F5F8-466E-AFF9-25556B57FE6A\",\"major\":1,\"minor\":2},{\"identifier\":\"Beacon Popular-Concursos-Sorteos\",\"uuid\":\"B9407F30-F5F8-466E-AFF9-25556B57FE6B\",\"major\":1,\"minor\":3},{\"identifier\":\"Beacon Popular-Encuestas\",\"uuid\":\"B9407F30-F5F8-466E-AFF9-25556B57FE6C\",\"major\":1,\"minor\":4}]");

/***/ }),

/***/ "./src/app/views/home/home.module.ts":
/*!*******************************************!*\
  !*** ./src/app/views/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "./src/app/views/home/home.page.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/shared.module */ "./src/app/shared/shared.module.ts");






const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"],
        children: [
            {
                path: '',
                loadChildren: () => __webpack_require__.e(/*! import() | app-views-pages-news-news-module */ "app-views-pages-news-news-module").then(__webpack_require__.bind(null, /*! app/views/pages/news/news.module */ "./src/app/views/pages/news/news.module.ts")).then(m => m.NewsPageModule)
            },
            {
                path: 'team',
                loadChildren: () => __webpack_require__.e(/*! import() | app-views-pages-team-team-module */ "app-views-pages-team-team-module").then(__webpack_require__.bind(null, /*! app/views/pages/team/team.module */ "./src/app/views/pages/team/team.module.ts")).then(m => m.TeamPageModule)
            },
            {
                path: 'news',
                loadChildren: () => __webpack_require__.e(/*! import() | app-views-pages-news-news-module */ "app-views-pages-news-news-module").then(__webpack_require__.bind(null, /*! app/views/pages/news/news.module */ "./src/app/views/pages/news/news.module.ts")).then(m => m.NewsPageModule)
            },
        ]
    }
];
let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/views/home/home.page.scss":
/*!*******************************************!*\
  !*** ./src/app/views/home/home.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\nion-tab-bar {\n  --background: var(--ion-color-primary);\n  --color: var(--ion-color-primary-contrast );\n}\nion-tab-button {\n  --color-selected: var(--ion-color-primary-contrast );\n}\n/**\n* TODO: FIX COLOR DEL BOTON DE ATRÁS HEADER - REVISAR\n*/\nion-back-button {\n  --color: var(--ion-color-primary-contrast ) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFDaEI7RUFDRSxzQ0FBQTtFQUNBLDJDQUFBO0FBQ0Y7QUFFQTtFQUNFLG9EQUFBO0FBQ0Y7QUFFQTs7Q0FBQTtBQUdBO0VBQ0Usc0RBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmlvbi10YWItYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0ICk7XG59XG5cbmlvbi10YWItYnV0dG9uIHtcbiAgLS1jb2xvci1zZWxlY3RlZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QgKTtcbn1cblxuLyoqXG4qIFRPRE86IEZJWCBDT0xPUiBERUwgQk9UT04gREUgQVRSw4FTIEhFQURFUiAtIFJFVklTQVJcbiovXG5pb24tYmFjay1idXR0b24ge1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdCApICFpbXBvcnRhbnQ7XG59XG5cblxuXG5cbiJdfQ== */");

/***/ }),

/***/ "./src/app/views/home/home.page.ts":
/*!*****************************************!*\
  !*** ./src/app/views/home/home.page.ts ***!
  \*****************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services/login.service */ "./src/app/core/services/login.service.ts");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var app_shared_components_sidebar_menu_sidebar_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/components/sidebar-menu/sidebar-menu.component */ "./src/app/shared/components/sidebar-menu/sidebar-menu.component.ts");
/* harmony import */ var _core_services_beacons_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/services/beacons.service */ "./src/app/core/services/beacons.service.ts");
/* harmony import */ var _core_services_localNotification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/services/localNotification.service */ "./src/app/core/services/localNotification.service.ts");
/* harmony import */ var app_shared_mock_beacons_mock_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/shared/mock/beacons.mock.json */ "./src/app/shared/mock/beacons.mock.json");
var app_shared_mock_beacons_mock_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! app/shared/mock/beacons.mock.json */ "./src/app/shared/mock/beacons.mock.json", 1);








let HomePage = class HomePage {
    constructor(loginService, beaconService, localNotificationService) {
        this.loginService = loginService;
        this.beaconService = beaconService;
        this.localNotificationService = localNotificationService;
        this.icons = {
            newspaper: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faNewspaper"],
            matches: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faCalendarAlt"],
            team: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faUsers"],
            more: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faEllipsisH"]
        };
        this.beacons = app_shared_mock_beacons_mock_json__WEBPACK_IMPORTED_MODULE_7__;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.beaconService.isEnabledLocation();
            yield this.beaconService.isEnabledBluetooth();
            yield this.localNotificationService.isEnabledNotifications();
            yield this.beacons.forEach((item) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                yield this.beaconService.startSearchOfBeacons(item);
            }));
        });
    }
    /**
     * Cerrar menu lateral
     */
    openSideBar() {
        this.sideBar.openSideBar();
    }
};
HomePage.ctorParameters = () => [
    { type: _core_services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"] },
    { type: _core_services_beacons_service__WEBPACK_IMPORTED_MODULE_5__["BeaconsService"] },
    { type: _core_services_localNotification_service__WEBPACK_IMPORTED_MODULE_6__["LocalNotificationService"] }
];
HomePage.propDecorators = {
    sideBar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['menu',] }]
};
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/home/home.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./home.page.scss */ "./src/app/views/home/home.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_core_services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"],
        _core_services_beacons_service__WEBPACK_IMPORTED_MODULE_5__["BeaconsService"],
        _core_services_localNotification_service__WEBPACK_IMPORTED_MODULE_6__["LocalNotificationService"]])
], HomePage);



/***/ })

}]);
//# sourceMappingURL=views-home-home-module-es2015.js.map