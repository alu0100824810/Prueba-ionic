(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~views-home-home-module~views-pages-contest-draw-contest-draw-module~views-pages-contest-draw~a4713b3c"],{

/***/ "./src/app/core/services/firebase-app.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/core/services/firebase-app.service.ts ***!
  \*******************************************************/
/*! exports provided: FirebaseAppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseAppService", function() { return FirebaseAppService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.service */ "./src/app/core/services/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var app_shared_utils_functionsUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/utils/functionsUtils */ "./src/app/shared/utils/functionsUtils.ts");






let FirebaseAppService = class FirebaseAppService {
    constructor(firestore, loginService, router) {
        this.firestore = firestore;
        this.loginService = loginService;
        this.router = router;
    }
    /**
     * OBTENER ENCUESTA
     * @param category categoria
     * @param date fecha
     * @param uidUser uid del usuario
     */
    getFormByID(category, date, uidUser) {
        return new Promise((resolve, reject) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const result = yield this.firestore.collection('encuestas').doc(`${category}`).collection(`${date}`).doc(`${uidUser}`).snapshotChanges();
                resolve(result);
            }
            catch (error) {
                console.error(error);
                reject(error);
            }
        }));
    }
    /**
     * ENVIAR RESPUESTA DE LA ENCUESTA
     */
    postFormAnswers(category, date, uidUser, data) {
        return new Promise((resolve, reject) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                this.firestore.collection('encuestas').doc(`${category}`).collection(`${date}`).doc(`${uidUser}`).set(data);
                resolve(true);
            }
            catch (error) {
                console.error(error);
                reject(error);
            }
        }));
    }
    /**
     * OBTENER TODOS LOS SORTEOS
     * @param date fecha para filtrar los sorteos
     */
    getAllDraw(date) {
        return new Promise((resolve, reject) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const result = this.firestore.collection('concursos-sorteos').doc(`${date}`).collection('sorteos').snapshotChanges();
                resolve(result);
            }
            catch (error) {
                console.error(error);
                reject(error);
            }
        }));
    }
    getAllDrawFilterByUser(date) {
        return new Promise((resolve, reject) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const result = this.firestore.collection('concursos-sorteos').doc(`${date}`).collection('participantes').doc(`${this.loginService.user.uid}`).collection('sorteos').snapshotChanges();
                resolve(result);
            }
            catch (error) {
                console.error(error);
                reject(error);
            }
        }));
    }
    /**
     * OBTENER DATOS DE UN ÚNICO SORTEO
     * @param date fecha para filtrar los sorteos
     * @param id id de un documento para filtra los datos de un sorteo
     */
    getDataUniqueDraw(date, id) {
        return new Promise((resolve, reject) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const result = this.firestore.collection('concursos-sorteos').doc(`${date}`).collection('participantes').doc(`${this.loginService.user.uid}`).collection('sorteos').doc(`${id}`).snapshotChanges();
                resolve(result);
            }
            catch (error) {
                console.error(error);
                reject(error);
            }
        }));
    }
    /**
     * PARTICIPAR EN UN SORTEO
     * @param date fecha para filtrar los sorteos
     * @param id id de un documento para filtra los datos de un sorteo
     * @param user información de un participante
     */
    takePartOnlyDraw(date, id) {
        return new Promise((resolve, reject) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const user = {
                    email: this.loginService.user.email,
                    uid: this.loginService.user.uid,
                    winner: false
                };
                this.firestore.collection('concursos-sorteos').doc(`${date}`).collection('sorteos').doc(`${id}`).collection('participantes').doc(user.uid).set(user);
                resolve(true);
            }
            catch (error) {
                console.error(error);
                reject(error);
            }
        }));
    }
    // ! aCTUALIZAR LA PARTICIPACIÓN EN X SORTEO
    updateParticiped(date, id, data) {
        return new Promise((resolve, reject) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                this.firestore.collection('concursos-sorteos').doc(`${date}`).collection('participantes').doc(`${this.loginService.user.uid}`).collection('sorteos').doc(`${id}`).set(data);
                resolve(true);
            }
            catch (error) {
                console.error(error);
                reject(error);
            }
        }));
    }
    /**
     * COMPROBAR SI UN USUARIO YA HA PARTICIPADO EN UN SORTEO
     */
    checkUserHasParticipated(date, id) {
        return new Promise((resolve, reject) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const res = this.firestore.collection('concursos-sorteos').doc(`${date}`).collection('sorteos').doc(`${id}`).collection('participantes').snapshotChanges();
                resolve(res);
            }
            catch (error) {
                console.error(error);
                reject(error);
            }
        }));
    }
    /**
     * OBTENER OFERTA COMIDA
     * @param date fecha
     */
    getFoodOffer(date) {
        return new Promise((resolve, reject) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const result = this.firestore.collection('comida').doc(`${date}`).collection('ofertas').snapshotChanges();
                resolve(result);
            }
            catch (error) {
                console.error(error);
                reject(error);
            }
        }));
    }
    /**
     * OBTENER ENCUESTAS
     * @param date fecha
     */
    getPolls(date) {
        return new Promise((resolve, reject) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const result = this.firestore.collection('encuestas').doc(`${date}`).collection('formularios').snapshotChanges();
                resolve(result);
            }
            catch (error) {
                console.error(error);
                reject(error);
            }
        }));
    }
    /**
     * OBTENER OFERTA ENTRADAS Y TIENDA
     * @param date fecha
     */
    getShopTicketsOffer(date) {
        return new Promise((resolve, reject) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const result = this.firestore.collection('ofertas-tienda-entradas').doc(`${date}`).collection('ofertas').snapshotChanges();
                resolve(result);
            }
            catch (error) {
                console.error(error);
                reject(error);
            }
        }));
    }
    /**
     * Resolución de peticiones que proviene de Local Notifications
     * @param data datos a enviar
     * @param type tipo de beacon (1- comida,2 sorteos, etc)
     */
    requestsFromLocalNotification(data, type) {
        switch (type) {
            case 1:
                this.putUserFoodOffer(Object(app_shared_utils_functionsUtils__WEBPACK_IMPORTED_MODULE_5__["generateDateNow"])(), data);
                this.router.navigateByUrl(`/food`);
                break;
            case 2:
                this.putUserShopTicketOffer(Object(app_shared_utils_functionsUtils__WEBPACK_IMPORTED_MODULE_5__["generateDateNow"])(), data);
                this.router.navigateByUrl(`/offers-shop-tickets`);
                break;
            case 3:
                this.getAllDraw(Object(app_shared_utils_functionsUtils__WEBPACK_IMPORTED_MODULE_5__["generateDateNow"])()).then(res => {
                    res.subscribe((d) => {
                        d.forEach(item => {
                            this.putUserConcursoSorteo(Object(app_shared_utils_functionsUtils__WEBPACK_IMPORTED_MODULE_5__["generateDateNow"])(), item.payload.doc.data());
                        });
                        this.router.navigateByUrl(`/contest-draw`);
                    });
                });
                break;
            case 4:
                this.putUserPoll(Object(app_shared_utils_functionsUtils__WEBPACK_IMPORTED_MODULE_5__["generateDateNow"])(), data);
                this.router.navigateByUrl(`/polls`);
                break;
            default:
                break;
        }
    }
    /**
     * Insertar usuario en la participación de concursos y sorteos
     */
    putUserConcursoSorteo(date, data) {
        return new Promise((resolve, reject) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                this.firestore.collection('concursos-sorteos').doc(`${date}`).collection('participantes').doc(`${this.loginService.user.uid}`).collection('sorteos').doc(`${data.id}`).set(data);
                resolve(true);
            }
            catch (error) {
                console.error(error);
                reject(error);
            }
        }));
    }
    /**
     * Insertar un usuario en la participación de una oferta de ENTRADA o TIENDA
     * @param date fecha
     * @param data datos a enviar
     * ! PUT
     */
    putUserShopTicketOffer(date, data) {
        return new Promise((resolve, reject) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                this.firestore.collection('ofertas-tienda-entradas').doc(`${date}`).collection('participantes').doc(`${this.loginService.user.uid}`).set(data);
                resolve(true);
            }
            catch (error) {
                console.error(error);
                reject(error);
            }
        }));
    }
    /**
     * Añadir usuario para hacer la encuesta
     * @param date fecha
     * @param data datos a enviar
     */
    putUserPoll(date, data) {
        return new Promise((resolve, reject) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                this.firestore.collection('encuestas').doc(`${date}`).collection('participantes').doc(`${this.loginService.user.uid}`).set(data);
                resolve(true);
            }
            catch (error) {
                console.error(error);
                reject(error);
            }
        }));
    }
    /**
     * Insertar un usuario en la participación de una oferta de COMIDA
     * @param date fecha
     * @param data datos a enviar
     * ! PUT
     */
    putUserFoodOffer(date, data) {
        return new Promise((resolve, reject) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                this.firestore.collection('comida').doc(`${date}`).collection('participantes').doc(`${this.loginService.user.uid}`).set(data);
                resolve(true);
            }
            catch (error) {
                console.error(error);
                reject(error);
            }
        }));
    }
    /**
     * Recoger datos de participaciones de un usuario en Ofertas de COMIDA
     * @param date fecha
     * ! GET
     */
    getFoodOffersOfUser(date) {
        return new Promise((resolve, reject) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const result = this.firestore.collection('comida').doc(`${date}`).collection('participantes').doc(`${this.loginService.user.uid}`).snapshotChanges();
                resolve(result);
            }
            catch (error) {
                console.error(error);
                reject(error);
            }
        }));
    }
    /**
     * Recoger datos de participaciones de un usuario en Ofertas de ENTRADAS Y TIENDA
     * @param date fecha
     * ! GET
     */
    getShopTicketOffersOfUser(date) {
        return new Promise((resolve, reject) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const result = this.firestore.collection('ofertas-tienda-entradas').doc(`${date}`).collection('participantes').doc(`${this.loginService.user.uid}`).snapshotChanges();
                resolve(result);
            }
            catch (error) {
                console.error(error);
                reject(error);
            }
        }));
    }
    /**
     * Recoger datos de para la notificación de concursos y sorteo en activo
     * @param date fecha
     * ! GET
     */
    getDataContestDrawForNotification(date) {
        return new Promise((resolve, reject) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const result = this.firestore.collection('concursos-sorteos').doc(`${date}`).snapshotChanges();
                resolve(result);
            }
            catch (error) {
                console.error(error);
                reject(error);
            }
        }));
    }
};
FirebaseAppService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
    { type: _login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
FirebaseAppService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"], _login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], FirebaseAppService);



/***/ }),

/***/ "./src/app/shared/utils/functionsUtils.ts":
/*!************************************************!*\
  !*** ./src/app/shared/utils/functionsUtils.ts ***!
  \************************************************/
/*! exports provided: generateRandomNumber, generateDateNow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateRandomNumber", function() { return generateRandomNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateDateNow", function() { return generateDateNow; });
/**
 * GENERAR UN NÚMERO ALETATORIO DE 0 a MAX
 * @param max valor máximo
 */
const generateRandomNumber = (max) => {
    return Math.floor(Math.random() * (0 + max));
};
/**
 * GENERAR FECHA ACTUAL
 */
const generateDateNow = () => {
    const MyDate = new Date();
    const date = ('0' + MyDate.getDate()).slice(-2) + '-' + ('0' + (MyDate.getMonth() + 1)).slice(-2) + '-' + MyDate.getFullYear();
    //  return date;
    return '27-07-2020'; // ! para hacer pruebas
};


/***/ })

}]);
//# sourceMappingURL=default~views-home-home-module~views-pages-contest-draw-contest-draw-module~views-pages-contest-draw~a4713b3c-es2015.js.map