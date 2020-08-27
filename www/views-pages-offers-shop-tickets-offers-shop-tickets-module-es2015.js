(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-pages-offers-shop-tickets-offers-shop-tickets-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/offers-shop-tickets/offers-shop-tickets.page.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/offers-shop-tickets/offers-shop-tickets.page.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header [showBackButton]=\"true\" name=\"Ofertas\"></app-header>\n\n\n<ion-content class=\"ion-padding\">\n\n  <ng-container *ngIf=\"data === null\">\n    <div class=\"not-available\">\n      <p>No hay ofertas disponibles.</p>\n    </div>\n  </ng-container>\n\n  <ng-container *ngIf=\"data !== null\">\n    <ion-card>\n      <img [src]=\"data.img\" />\n      <ion-card-header>\n        <ion-card-title>{{data.message}}</ion-card-title>\n      </ion-card-header>\n    </ion-card>\n  </ng-container>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/views/pages/offers-shop-tickets/offers-shop-tickets.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/views/pages/offers-shop-tickets/offers-shop-tickets.module.ts ***!
  \*******************************************************************************/
/*! exports provided: OffersShopTicketsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OffersShopTicketsPageModule", function() { return OffersShopTicketsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _offers_shop_tickets_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./offers-shop-tickets.page */ "./src/app/views/pages/offers-shop-tickets/offers-shop-tickets.page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/shared.module */ "./src/app/shared/shared.module.ts");






const routes = [
    {
        path: '',
        component: _offers_shop_tickets_page__WEBPACK_IMPORTED_MODULE_3__["OffersShopTicketsPage"]
    }
];
let OffersShopTicketsPageModule = class OffersShopTicketsPageModule {
};
OffersShopTicketsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_offers_shop_tickets_page__WEBPACK_IMPORTED_MODULE_3__["OffersShopTicketsPage"]]
    })
], OffersShopTicketsPageModule);



/***/ }),

/***/ "./src/app/views/pages/offers-shop-tickets/offers-shop-tickets.page.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/views/pages/offers-shop-tickets/offers-shop-tickets.page.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".not-available {\n  display: flex;\n  justify-content: center;\n  height: 100%;\n  align-items: center;\n}\n\nion-card-title {\n  font-size: 22px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZXMvb2ZmZXJzLXNob3AtdGlja2V0cy9vZmZlcnMtc2hvcC10aWNrZXRzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQUFKOztBQUlBO0VBQ0ksZUFBQTtBQURKIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvcGFnZXMvb2ZmZXJzLXNob3AtdGlja2V0cy9vZmZlcnMtc2hvcC10aWNrZXRzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLm5vdC1hdmFpbGFibGV7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuXG5pb24tY2FyZC10aXRsZXtcbiAgICBmb250LXNpemU6IDIycHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/views/pages/offers-shop-tickets/offers-shop-tickets.page.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/views/pages/offers-shop-tickets/offers-shop-tickets.page.ts ***!
  \*****************************************************************************/
/*! exports provided: OffersShopTicketsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OffersShopTicketsPage", function() { return OffersShopTicketsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_services_firebase_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services/firebase-app.service */ "./src/app/core/services/firebase-app.service.ts");
/* harmony import */ var _core_services_messages_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/services/messages.service */ "./src/app/core/services/messages.service.ts");
/* harmony import */ var app_shared_utils_functionsUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/utils/functionsUtils */ "./src/app/shared/utils/functionsUtils.ts");





let OffersShopTicketsPage = class OffersShopTicketsPage {
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
                const res = yield this.firebaseAppService.getShopTicketOffersOfUser(Object(app_shared_utils_functionsUtils__WEBPACK_IMPORTED_MODULE_4__["generateDateNow"])()); // ! FECHA DE PRUEBA
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
OffersShopTicketsPage.ctorParameters = () => [
    { type: _core_services_firebase_app_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseAppService"] },
    { type: _core_services_messages_service__WEBPACK_IMPORTED_MODULE_3__["MessagesService"] }
];
OffersShopTicketsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-offers-shop-tickets',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./offers-shop-tickets.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/offers-shop-tickets/offers-shop-tickets.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./offers-shop-tickets.page.scss */ "./src/app/views/pages/offers-shop-tickets/offers-shop-tickets.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_core_services_firebase_app_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseAppService"], _core_services_messages_service__WEBPACK_IMPORTED_MODULE_3__["MessagesService"]])
], OffersShopTicketsPage);



/***/ })

}]);
//# sourceMappingURL=views-pages-offers-shop-tickets-offers-shop-tickets-module-es2015.js.map