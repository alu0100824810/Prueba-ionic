(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-pages-forms-button-start-form-button-start-form-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/forms/button-start-form/button-start-form.page.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/forms/button-start-form/button-start-form.page.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header class=\"ion-text-capitalize\" [showBackButton]=\"false\" name=\"Categoria {{infoService.category}}\">\n  <ion-buttons start>\n    <ion-back-button defaultHref=\"/category-forms\" text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\n  </ion-buttons>\n</app-header>\n\n<ion-content>\n  <div class=\"button-start\" *ngIf=\"!infoService.done\">\n    <ion-button expand=\"block\" fill=\"outline\" shape=\"round\" size=\"large\" [routerLink]=\"['./fill-out']\">\n      Empezar encuesta\n    </ion-button>\n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/views/pages/forms/button-start-form/button-start-form.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/views/pages/forms/button-start-form/button-start-form.module.ts ***!
  \*********************************************************************************/
/*! exports provided: ButtonStartFormPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonStartFormPageModule", function() { return ButtonStartFormPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _button_start_form_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./button-start-form.page */ "./src/app/views/pages/forms/button-start-form/button-start-form.page.ts");






const routes = [
    {
        path: '',
        component: _button_start_form_page__WEBPACK_IMPORTED_MODULE_5__["ButtonStartFormPage"]
    }
];
let ButtonStartFormPageModule = class ButtonStartFormPageModule {
};
ButtonStartFormPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
        ],
        declarations: [_button_start_form_page__WEBPACK_IMPORTED_MODULE_5__["ButtonStartFormPage"]]
    })
], ButtonStartFormPageModule);



/***/ }),

/***/ "./src/app/views/pages/forms/button-start-form/button-start-form.page.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/views/pages/forms/button-start-form/button-start-form.page.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".button-start {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n}\n.button-start ion-button {\n  --background: var(--ion-color-primary);\n  color: var(--ion-color-primary-contrast);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZXMvZm9ybXMvYnV0dG9uLXN0YXJ0LWZvcm0vYnV0dG9uLXN0YXJ0LWZvcm0ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0FBQ0o7QUFDSTtFQUNJLHNDQUFBO0VBQ0Esd0NBQUE7QUFDUiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL2Zvcm1zL2J1dHRvbi1zdGFydC1mb3JtL2J1dHRvbi1zdGFydC1mb3JtLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idXR0b24tc3RhcnR7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGhlaWdodDogMTAwJTtcblxuICAgIGlvbi1idXR0b24ge1xuICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0ICk7XG4gICAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/views/pages/forms/button-start-form/button-start-form.page.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/views/pages/forms/button-start-form/button-start-form.page.ts ***!
  \*******************************************************************************/
/*! exports provided: ButtonStartFormPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonStartFormPage", function() { return ButtonStartFormPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _core_services_messages_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/services/messages.service */ "./src/app/core/services/messages.service.ts");
/* harmony import */ var _core_services_firebase_app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/services/firebase-app.service */ "./src/app/core/services/firebase-app.service.ts");
/* harmony import */ var _core_services_login_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/services/login.service */ "./src/app/core/services/login.service.ts");
/* harmony import */ var app_shared_utils_functionsUtils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/shared/utils/functionsUtils */ "./src/app/shared/utils/functionsUtils.ts");








let ButtonStartFormPage = class ButtonStartFormPage {
    constructor(activatedRoute, alertController, messages, firebaseAppService, navCtrl, loginService) {
        this.activatedRoute = activatedRoute;
        this.alertController = alertController;
        this.messages = messages;
        this.firebaseAppService = firebaseAppService;
        this.navCtrl = navCtrl;
        this.loginService = loginService;
        this.infoService = {
            category: '',
            dateToday: '',
            uid: '',
            done: null,
        };
        this.checkForm();
    }
    ngOnInit() { }
    checkForm() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield this.messages.showSpinner();
                this.infoService.dateToday = Object(app_shared_utils_functionsUtils__WEBPACK_IMPORTED_MODULE_7__["generateDateNow"])();
                this.infoService.category = this.activatedRoute.snapshot.params.category;
                this.infoService.uid = this.loginService.user.uid;
                let prueba = yield this.firebaseAppService.getFormByID(this.infoService.category, Object(app_shared_utils_functionsUtils__WEBPACK_IMPORTED_MODULE_7__["generateDateNow"])(), this.infoService.uid);
                this.result = prueba.subscribe((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    const r = yield res.payload.data();
                    this.infoService.done = r.info.done;
                    if (this.infoService.done) {
                        yield this.showAlert('Esta encuesta ya ha sido realizada.', 'Aviso');
                    }
                    yield this.ngOnDestroy();
                }));
            }
            catch (error) {
                console.error(error);
                yield this.messages.hideSpinner();
                yield this.showAlert('Se ha producido un error.', 'Error');
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
    showAlert(message, header) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'alert-error',
                header,
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
    ngOnDestroy() {
        this.result.unsubscribe();
    }
};
ButtonStartFormPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _core_services_messages_service__WEBPACK_IMPORTED_MODULE_4__["MessagesService"] },
    { type: _core_services_firebase_app_service__WEBPACK_IMPORTED_MODULE_5__["FirebaseAppService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _core_services_login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"] }
];
ButtonStartFormPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-button-start-form',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./button-start-form.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/forms/button-start-form/button-start-form.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./button-start-form.page.scss */ "./src/app/views/pages/forms/button-start-form/button-start-form.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
        _core_services_messages_service__WEBPACK_IMPORTED_MODULE_4__["MessagesService"],
        _core_services_firebase_app_service__WEBPACK_IMPORTED_MODULE_5__["FirebaseAppService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
        _core_services_login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"]])
], ButtonStartFormPage);



/***/ })

}]);
//# sourceMappingURL=views-pages-forms-button-start-form-button-start-form-module-es2015.js.map