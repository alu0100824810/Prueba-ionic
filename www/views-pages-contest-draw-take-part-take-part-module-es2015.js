(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-pages-contest-draw-take-part-take-part-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/contest-draw/take-part/take-part.page.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/contest-draw/take-part/take-part.page.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header [showBackButton]=\"false\" name=\"Concursos-sorteos\">\n  <ion-buttons start>\n    <ion-back-button defaultHref=\"/contest-draw\" text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\n  </ion-buttons>\n</app-header>\n\n<ion-content>\n  <ng-container *ngIf=\"data != null\">\n    <ion-card>\n      <img [src]=\"data.img\" />-\n      <ion-card-header>\n        <ion-card-title>{{data.title}}</ion-card-title>\n      </ion-card-header>\n      <ion-card-content> {{data.info }}</ion-card-content>\n    </ion-card>\n    <br>\n\n    <div class=\"take-part\">\n      <ng-container [ngSwitch]=\"participated\">\n        <ion-button *ngSwitchCase=\"true\" expand=\"block\" shape=\"round\" disabled=\"true\">Ya has participado</ion-button>\n        <ion-button *ngSwitchCase=\"false\" (click)=\"takePartDraw()\" expand=\"block\" shape=\"round\">PARTICIPAR</ion-button>\n      </ng-container>\n    </div>\n  </ng-container>\n</ion-content>");

/***/ }),

/***/ "./src/app/views/pages/contest-draw/take-part/take-part.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/views/pages/contest-draw/take-part/take-part.module.ts ***!
  \************************************************************************/
/*! exports provided: TakePartPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TakePartPageModule", function() { return TakePartPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _take_part_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./take-part.page */ "./src/app/views/pages/contest-draw/take-part/take-part.page.ts");
/* harmony import */ var app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






const routes = [
    {
        path: '',
        component: _take_part_page__WEBPACK_IMPORTED_MODULE_3__["TakePartPage"]
    }
];
let TakePartPageModule = class TakePartPageModule {
};
TakePartPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes)
        ],
        declarations: [_take_part_page__WEBPACK_IMPORTED_MODULE_3__["TakePartPage"]]
    })
], TakePartPageModule);



/***/ }),

/***/ "./src/app/views/pages/contest-draw/take-part/take-part.page.scss":
/*!************************************************************************!*\
  !*** ./src/app/views/pages/contest-draw/take-part/take-part.page.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".take-part {\n  display: flex;\n  justify-content: center;\n}\n.take-part ion-button {\n  --background: var(--ion-color-secondary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZXMvY29udGVzdC1kcmF3L3Rha2UtcGFydC90YWtlLXBhcnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0FBQ0o7QUFDSTtFQUNJLHdDQUFBO0FBQ1IiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9wYWdlcy9jb250ZXN0LWRyYXcvdGFrZS1wYXJ0L3Rha2UtcGFydC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFrZS1wYXJ0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gICAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/views/pages/contest-draw/take-part/take-part.page.ts":
/*!**********************************************************************!*\
  !*** ./src/app/views/pages/contest-draw/take-part/take-part.page.ts ***!
  \**********************************************************************/
/*! exports provided: TakePartPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TakePartPage", function() { return TakePartPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_services_firebase_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/services/firebase-app.service */ "./src/app/core/services/firebase-app.service.ts");
/* harmony import */ var _core_services_messages_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/services/messages.service */ "./src/app/core/services/messages.service.ts");
/* harmony import */ var _core_services_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/services/login.service */ "./src/app/core/services/login.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");







let TakePartPage = class TakePartPage {
    constructor(activatedRoute, firebaseAppService, messages, loginService, alertController, navCtrl) {
        this.activatedRoute = activatedRoute;
        this.firebaseAppService = firebaseAppService;
        this.messages = messages;
        this.loginService = loginService;
        this.alertController = alertController;
        this.navCtrl = navCtrl;
        this.data = null;
        this.participated = false;
        this.user = {
            winner: false,
            email: null,
            uid: null,
        };
        this.getInfo();
    }
    ngOnInit() { }
    /**
     * OBTENER DATOS DEL SORTEO SELECCIONADO
     */
    getInfo() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield this.messages.showSpinner();
                const MyDate = new Date();
                this.date = ('0' + MyDate.getDate()).slice(-2) + '-' + ('0' + (MyDate.getMonth() + 1)).slice(-2) + '-' + MyDate.getFullYear();
                const res = yield this.firebaseAppService.getDataUniqueDraw('27-07-2020', this.activatedRoute.snapshot.params.id); // ! OJO: FECHA DE PRUEBA
                const r = yield this.firebaseAppService.checkUserHasParticipated('27-07-2020', this.activatedRoute.snapshot.params.id);
                this.checking = yield r.subscribe((datos) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    yield datos.forEach(item => {
                        const check = item.payload.doc.data();
                        if (check.uid && check.uid === this.loginService.user.uid) {
                            this.participated = true;
                        }
                    });
                }));
                this.result = yield res.subscribe((d) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    this.data = yield d.payload.data();
                }));
            }
            catch (error) {
                console.error(error);
                yield this.messages.hideSpinner();
            }
            finally {
                yield this.messages.hideSpinner();
            }
        });
    }
    /**
     * APUNTARSE A UN SORTEO
     */
    takePartDraw() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Aviso',
                message: '¿Está seguro que desea participar en el sorteo?',
                backdropDismiss: false,
                buttons: [
                    {
                        text: 'Cancelar',
                    },
                    {
                        text: 'Aceptar',
                        handler: () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            try {
                                yield this.messages.showSpinner('Cargando...');
                                this.user.email = this.loginService.user.email;
                                this.user.uid = this.loginService.user.uid;
                                yield this.firebaseAppService.takePartOnlyDraw('27-07-2020', this.activatedRoute.snapshot.params.id, this.user); // ! OJO: FECHA DE PRUEBA
                                yield this.messages.showToast('Su participación se ha realizado con éxito');
                                this.navCtrl.back();
                            }
                            catch (error) {
                                console.error(error);
                                yield this.messages.hideSpinner();
                            }
                            finally {
                                yield this.messages.hideSpinner();
                            }
                        })
                    }
                ]
            });
            yield alert.present();
        });
    }
    ngOnDestroy() {
        this.result.unsubscribe();
        this.checking.unsubscribe();
    }
};
TakePartPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _core_services_firebase_app_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseAppService"] },
    { type: _core_services_messages_service__WEBPACK_IMPORTED_MODULE_4__["MessagesService"] },
    { type: _core_services_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] }
];
TakePartPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-take-part',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./take-part.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/contest-draw/take-part/take-part.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./take-part.page.scss */ "./src/app/views/pages/contest-draw/take-part/take-part.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _core_services_firebase_app_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseAppService"],
        _core_services_messages_service__WEBPACK_IMPORTED_MODULE_4__["MessagesService"],
        _core_services_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"]])
], TakePartPage);



/***/ })

}]);
//# sourceMappingURL=views-pages-contest-draw-take-part-take-part-module-es2015.js.map