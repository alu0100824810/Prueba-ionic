(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-pages-forms-fill-out-form-fill-out-form-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/forms/fill-out-form/fill-out-form.page.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/forms/fill-out-form/fill-out-form.page.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header [showBackButton]=\"true\" name=\"Encuesta\"></app-header>\n\n<ion-content class=\"ion-padding\" *ngIf=\"form !== undefined\">\n    <div class=\"sub-header\">\n      <p>ENCUESTA</p>\n      <p class=\"ion-text-capitalize\">{{infoService.category}} {{infoService.dateToday}} </p>\n    </div>\n  <ng-container *ngFor=\"let item of data\">\n    <br>\n    <ion-radio-group value=\"item.value\" [(ngModel)]=\"item.value\">\n      <ion-label class=\"question\">{{item.question}}</ion-label>\n      <ion-grid class=\"ion-text-center\">\n        <ion-row>\n          <ion-col size=\"2\" *ngFor=\"let value of [].constructor(6); let i = index\" (click)=\"onClick(event)\">\n            <ion-label>{{i+1}}</ion-label>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"2\" *ngFor=\"let value of [].constructor(6); let i = index\">\n            <ion-radio value={{i+1}} mode=\"md\"></ion-radio>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-radio-group>\n    <br>\n  </ng-container>\n\n  <br>\n  <div class=\"button-send\">\n    <ion-button (click)=\"sendAnswersForms()\" fill=\"outline\" shape=\"round\">\n      Enviar\n    </ion-button>\n  </div>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/views/pages/forms/fill-out-form/fill-out-form.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/views/pages/forms/fill-out-form/fill-out-form.module.ts ***!
  \*************************************************************************/
/*! exports provided: FillOutFormPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FillOutFormPageModule", function() { return FillOutFormPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _fill_out_form_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fill-out-form.page */ "./src/app/views/pages/forms/fill-out-form/fill-out-form.page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/shared.module */ "./src/app/shared/shared.module.ts");






const routes = [
    {
        path: '',
        component: _fill_out_form_page__WEBPACK_IMPORTED_MODULE_3__["FillOutFormPage"]
    }
];
let FillOutFormPageModule = class FillOutFormPageModule {
};
FillOutFormPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_fill_out_form_page__WEBPACK_IMPORTED_MODULE_3__["FillOutFormPage"]]
    })
], FillOutFormPageModule);



/***/ }),

/***/ "./src/app/views/pages/forms/fill-out-form/fill-out-form.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/views/pages/forms/fill-out-form/fill-out-form.page.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".sub-header p:nth-child(1) {\n  font-weight: bold;\n}\n\n.question {\n  --color: #262626;\n  position: relative;\n  font-size: 12px;\n  font-weight: 500;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n}\n\n.button-send {\n  display: flex;\n  justify-content: center;\n}\n\n.button-send ion-button {\n  --background: var(--ion-color-primary);\n  color: var(--ion-color-primary-contrast);\n}\n\nion-radio {\n  width: 28px;\n  height: 28px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZXMvZm9ybXMvZmlsbC1vdXQtZm9ybS9maWxsLW91dC1mb3JtLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUNJLGlCQUFBO0FBRFI7O0FBTUE7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQUhKOztBQU1BO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0FBSEo7O0FBS0k7RUFDSSxzQ0FBQTtFQUNBLHdDQUFBO0FBSFI7O0FBUUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQUxKIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvcGFnZXMvZm9ybXMvZmlsbC1vdXQtZm9ybS9maWxsLW91dC1mb3JtLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdWItaGVhZGVye1xuXG4gICAgcDpudGgtY2hpbGQoMSl7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cbn1cblxuXG4ucXVlc3Rpb24ge1xuICAgIC0tY29sb3I6ICMyNjI2MjY7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmJ1dHRvbi1zZW5ke1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgXG4gICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QgKTtcbiAgICB9XG59XG5cblxuaW9uLXJhZGlvIHtcbiAgICB3aWR0aDogMjhweDtcbiAgICBoZWlnaHQ6IDI4cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/views/pages/forms/fill-out-form/fill-out-form.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/views/pages/forms/fill-out-form/fill-out-form.page.ts ***!
  \***********************************************************************/
/*! exports provided: FillOutFormPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FillOutFormPage", function() { return FillOutFormPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_services_messages_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/services/messages.service */ "./src/app/core/services/messages.service.ts");
/* harmony import */ var _core_services_firebase_app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/services/firebase-app.service */ "./src/app/core/services/firebase-app.service.ts");
/* harmony import */ var _core_services_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/services/login.service */ "./src/app/core/services/login.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");







let FillOutFormPage = class FillOutFormPage {
    constructor(firebaseAppService, activatedRoute, messages, loginService, alertController, router, navCtrl) {
        this.firebaseAppService = firebaseAppService;
        this.activatedRoute = activatedRoute;
        this.messages = messages;
        this.loginService = loginService;
        this.alertController = alertController;
        this.router = router;
        this.navCtrl = navCtrl;
        this.infoService = {
            category: '',
            dateToday: '',
            uid: ''
        };
        this.data = [];
        this.getData();
    }
    ngOnInit() { }
    /**
     * IMPORTAR FORMULARIO
     */
    getData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield this.messages.showSpinner('Cargando...');
                const MyDate = new Date();
                this.infoService.dateToday = ('0' + MyDate.getDate()).slice(-2) + '-' + ('0' + (MyDate.getMonth() + 1)).slice(-2) + '-' + MyDate.getFullYear();
                this.infoService.category = this.activatedRoute.snapshot.params.category;
                this.infoService.uid = this.loginService.user.uid;
                const result = yield this.firebaseAppService.getFormByID(this.infoService.category, '27-07-2020', this.infoService.uid);
                result.subscribe((res) => {
                    this.form = res.payload.data();
                    const r = JSON.parse(JSON.stringify(this.form));
                    r.data.forEach(item => {
                        this.data.push(item);
                    });
                });
            }
            catch (error) {
                console.error(error);
                yield this.messages.hideSpinner();
                yield this.showAlertError('No se ha podido obtener los datos del formulario.');
                this.form = null;
                this.data = [];
            }
            finally {
                yield this.messages.hideSpinner();
            }
        });
    }
    /**
     * ENVIAR FORMULARIO CON RESPUESTAS
     */
    sendAnswersForms() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let copyData = JSON.parse(JSON.stringify(this.data)); // ! OJO Si se está usando ecmascript5 la COPIA del ARRAY es así, si es6 es asi [...dataArray]
            copyData.map(x => {
                x.value = +x.value;
                return x;
            });
            this.form.data = [...copyData];
            this.form.info.done = true;
            try {
                yield this.messages.showSpinner('Enviado respuestas...');
                yield this.firebaseAppService.postFormAnswers(this.infoService.category, '27-07-2020', this.infoService.uid, this.form);
                yield this.messages.showToast('Formulario enviado correctamente');
                this.data = null;
                this.form = null;
                yield this.router.navigateByUrl('/category-forms');
            }
            catch (error) {
                yield this.messages.hideSpinner();
                console.error(error);
                copyData = null;
                yield this.showAlertError('No se ha podido enviar las respuestas.'); // TODO: MEJORA -> Si da error no volver atrás, sino dar la opción de volver intentarlo
            }
            finally {
                yield this.messages.hideSpinner();
            }
        });
    }
    /**
     * Mostrar mensaje de error
     * @param message mensaje de error
     */
    showAlertError(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'alert-error',
                header: 'Error',
                message,
                backdropDismiss: false,
                buttons: [
                    {
                        text: 'Atrás',
                        cssClass: 'secondary',
                        handler: () => {
                            this.navCtrl.back();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    onClick(e) {
        console.log('item', e);
    }
};
FillOutFormPage.ctorParameters = () => [
    { type: _core_services_firebase_app_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseAppService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _core_services_messages_service__WEBPACK_IMPORTED_MODULE_3__["MessagesService"] },
    { type: _core_services_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] }
];
FillOutFormPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-fill-out-form',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./fill-out-form.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/forms/fill-out-form/fill-out-form.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./fill-out-form.page.scss */ "./src/app/views/pages/forms/fill-out-form/fill-out-form.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_core_services_firebase_app_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseAppService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _core_services_messages_service__WEBPACK_IMPORTED_MODULE_3__["MessagesService"],
        _core_services_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"]])
], FillOutFormPage);



/***/ })

}]);
//# sourceMappingURL=views-pages-forms-fill-out-form-fill-out-form-module-es2015.js.map