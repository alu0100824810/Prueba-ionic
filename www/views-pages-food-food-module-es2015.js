(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-pages-food-food-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/food/food.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/food/food.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header [showBackButton]=\"true\" name=\"Comida\"></app-header>\n\n\n<ion-content class=\"ion-padding\">\n\n  <ng-container *ngIf=\"data === null\">\n    <div class=\"not-available\">\n      <p>No hay ofertas disponibles.</p>\n    </div>\n  </ng-container>\n\n\n  <ng-container *ngIf=\"data !== null\">\n    <ion-card>\n      <img [src]=\"data.img\" />\n      <ion-card-header>\n        <ion-card-title>{{data.message}}</ion-card-title>\n      </ion-card-header>\n    </ion-card>\n  </ng-container>\n\n\n</ion-content>");

/***/ }),

/***/ "./src/app/views/pages/food/food.module.ts":
/*!*************************************************!*\
  !*** ./src/app/views/pages/food/food.module.ts ***!
  \*************************************************/
/*! exports provided: FoodPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodPageModule", function() { return FoodPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _food_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./food.page */ "./src/app/views/pages/food/food.page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/shared.module */ "./src/app/shared/shared.module.ts");






const routes = [
    {
        path: '',
        component: _food_page__WEBPACK_IMPORTED_MODULE_3__["FoodPage"]
    }
];
let FoodPageModule = class FoodPageModule {
};
FoodPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_food_page__WEBPACK_IMPORTED_MODULE_3__["FoodPage"]]
    })
], FoodPageModule);



/***/ }),

/***/ "./src/app/views/pages/food/food.page.scss":
/*!*************************************************!*\
  !*** ./src/app/views/pages/food/food.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".not-available {\n  display: flex;\n  justify-content: center;\n  height: 100%;\n  align-items: center;\n}\n\nion-card-title {\n  font-size: 22px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZXMvZm9vZC9mb29kLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQURKOztBQUtBO0VBQ0ksZUFBQTtBQUZKIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvcGFnZXMvZm9vZC9mb29kLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4ubm90LWF2YWlsYWJsZXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5cbmlvbi1jYXJkLXRpdGxle1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/views/pages/food/food.page.ts":
/*!***********************************************!*\
  !*** ./src/app/views/pages/food/food.page.ts ***!
  \***********************************************/
/*! exports provided: FoodPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodPage", function() { return FoodPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_services_messages_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services/messages.service */ "./src/app/core/services/messages.service.ts");
/* harmony import */ var _core_services_firebase_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/services/firebase-app.service */ "./src/app/core/services/firebase-app.service.ts");
/* harmony import */ var app_shared_utils_functionsUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/utils/functionsUtils */ "./src/app/shared/utils/functionsUtils.ts");





let FoodPage = class FoodPage {
    constructor(firebaseAppService, messages) {
        this.firebaseAppService = firebaseAppService;
        this.messages = messages;
        this.data = null;
        this.getData();
    }
    ngOnInit() { }
    /**
     * Obtener datos
     */
    getData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield this.messages.showSpinner();
                const res = yield this.firebaseAppService.getFoodOffersOfUser(Object(app_shared_utils_functionsUtils__WEBPACK_IMPORTED_MODULE_4__["generateDateNow"])());
                console.log(res);
                yield res.subscribe((d) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    this.data = d.payload.data();
                }));
                console.log(this.data);
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
};
FoodPage.ctorParameters = () => [
    { type: _core_services_firebase_app_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseAppService"] },
    { type: _core_services_messages_service__WEBPACK_IMPORTED_MODULE_2__["MessagesService"] }
];
FoodPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-food',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./food.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/food/food.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./food.page.scss */ "./src/app/views/pages/food/food.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_core_services_firebase_app_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseAppService"], _core_services_messages_service__WEBPACK_IMPORTED_MODULE_2__["MessagesService"]])
], FoodPage);



/***/ })

}]);
//# sourceMappingURL=views-pages-food-food-module-es2015.js.map