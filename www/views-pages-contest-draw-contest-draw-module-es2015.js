(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-pages-contest-draw-contest-draw-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/contest-draw/contest-draw.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/contest-draw/contest-draw.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header [showBackButton]=\"false\" name=\"Concursos-sorteos\">\n    <ion-buttons start>\n        <ion-back-button defaultHref=\"/home\" text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\n    </ion-buttons>\n</app-header>\n\n<ion-content class=\"ion-padding\">\n\n    <ng-container *ngIf=\"data.length == 0\">\n        <div class=\"not-available\">\n            <p>No hay concursos ni sorteos disponibles.</p>\n        </div>\n    </ng-container>\n\n    <ng-container *ngIf=\"data.length !== 0\">\n        <ng-container *ngFor=\"let item of data\">\n            <ion-card [routerLink]=\"['./take-part/' + item.id]\">\n                <img [src]=\"item.img\" />\n                <ion-card-header>\n                    <ion-card-title>{{item.title}}</ion-card-title>\n                </ion-card-header>\n            </ion-card>\n            <br>\n        </ng-container>\n    </ng-container>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/views/pages/contest-draw/contest-draw.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/views/pages/contest-draw/contest-draw.module.ts ***!
  \*****************************************************************/
/*! exports provided: ContestDrawPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContestDrawPageModule", function() { return ContestDrawPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _contest_draw_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contest-draw.page */ "./src/app/views/pages/contest-draw/contest-draw.page.ts");
/* harmony import */ var app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






const routes = [
    {
        path: '',
        component: _contest_draw_page__WEBPACK_IMPORTED_MODULE_3__["ContestDrawPage"]
    }
];
let ContestDrawPageModule = class ContestDrawPageModule {
};
ContestDrawPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes)
        ],
        declarations: [_contest_draw_page__WEBPACK_IMPORTED_MODULE_3__["ContestDrawPage"]]
    })
], ContestDrawPageModule);



/***/ }),

/***/ "./src/app/views/pages/contest-draw/contest-draw.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/views/pages/contest-draw/contest-draw.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".not-available {\n  display: flex;\n  justify-content: center;\n  height: 100%;\n  align-items: center;\n}\n\nion-card-header {\n  --background: var(--ion-color-secondary);\n  padding: 15px;\n}\n\nion-card-title {\n  color: var(--ion-color-secondary-contrast);\n  font-size: 22px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZXMvY29udGVzdC1kcmF3L2NvbnRlc3QtZHJhdy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFESjs7QUFJQTtFQUNJLHdDQUFBO0VBQ0EsYUFBQTtBQURKOztBQUdBO0VBQ0ksMENBQUE7RUFDQSxlQUFBO0FBQUoiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9wYWdlcy9jb250ZXN0LWRyYXcvY29udGVzdC1kcmF3LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4ubm90LWF2YWlsYWJsZXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5pb24tY2FyZC1oZWFkZXIge1xuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gICAgcGFkZGluZzogMTVweDtcbn1cbmlvbi1jYXJkLXRpdGxlIHtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdCk7XG4gICAgZm9udC1zaXplOiAyMnB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/views/pages/contest-draw/contest-draw.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/views/pages/contest-draw/contest-draw.page.ts ***!
  \***************************************************************/
/*! exports provided: ContestDrawPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContestDrawPage", function() { return ContestDrawPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_services_firebase_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services/firebase-app.service */ "./src/app/core/services/firebase-app.service.ts");
/* harmony import */ var _core_services_messages_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/services/messages.service */ "./src/app/core/services/messages.service.ts");
/* harmony import */ var app_shared_utils_functionsUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/utils/functionsUtils */ "./src/app/shared/utils/functionsUtils.ts");





let ContestDrawPage = class ContestDrawPage {
    constructor(firebaseAppService, messages) {
        this.firebaseAppService = firebaseAppService;
        this.messages = messages;
        this.data = [];
        this.getData();
    }
    ngOnInit() { }
    getData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield this.messages.showSpinner('Cargando...');
                yield this.firebaseAppService.getAllDrawFilterByUser(Object(app_shared_utils_functionsUtils__WEBPACK_IMPORTED_MODULE_4__["generateDateNow"])()).then((resul) => {
                    resul.subscribe((dat) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        yield dat.forEach(item => {
                            this.data.push(item.payload.doc.data());
                        });
                    }));
                });
            }
            catch (error) {
                console.error(error);
                yield this.messages.hideSpinner();
            }
            finally {
                yield this.messages.hideSpinner();
            }
            console.log(this.data);
        });
    }
};
ContestDrawPage.ctorParameters = () => [
    { type: _core_services_firebase_app_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseAppService"] },
    { type: _core_services_messages_service__WEBPACK_IMPORTED_MODULE_3__["MessagesService"] }
];
ContestDrawPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contest-draw',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./contest-draw.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/contest-draw/contest-draw.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./contest-draw.page.scss */ "./src/app/views/pages/contest-draw/contest-draw.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_core_services_firebase_app_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseAppService"], _core_services_messages_service__WEBPACK_IMPORTED_MODULE_3__["MessagesService"]])
], ContestDrawPage);



/***/ })

}]);
//# sourceMappingURL=views-pages-contest-draw-contest-draw-module-es2015.js.map