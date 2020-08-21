(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-welcome-welcome-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/welcome/welcome.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/welcome/welcome.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content fullscreen class=\"ion-padding\" scroll-y=\"false\">\n  <ion-slides pager=\"true\">\n\n    <ion-slide>\n      <div class=\"slide\">\n        <img src=\"assets/welcome/slide-1.png\"/>\n        <h2>Bienvenido</h2>\n        <p>App sobre el Club Depotivo Tenerife</p>\n      </div>\n    </ion-slide>\n\n    <ion-slide>\n      <img src=\"assets/welcome/slide-2.svg\"/>\n      <h2>Noticias </h2>\n      <p>Conoce las últimas novedades al instante</p>\n    </ion-slide>\n\n    <ion-slide>\n      <img src=\"assets/welcome/slide-3.svg\"/>\n      <h2>Calendario</h2>\n      <p>Consulta <b> horarios y resultados </b> de todos los partidos.</p>\n    </ion-slide>\n\n    <ion-slide>\n      <img src=\"assets/welcome/slide-4.svg\"/>\n      <h2>Información</h2>\n      <p>Toda la información sobre las <b>alineaciones, clasificaciones, goles, asistencias </b> en los diferentes torneos en los que participa el equipo.</p>\n    </ion-slide>\n\n    <ion-slide>\n      <img src=\"assets/welcome/slide-5.svg\"/>\n      <h2>Tienda y Entradas</h2>\n      <p>Ofrece la posibilidad de comprar <b>entradas y merchandising </b> en el que podrás encontrar descuentos exclusivos</p>\n    </ion-slide>\n\n    <ion-slide>\n      <img src=\"assets/welcome/slide-6.svg\"/>\n      <h2>Nuevo canal de comunicación</h2>\n      <p> Disfruta de una experencia interactiva en los partidos gracias al uso de la <b>tecnología beacon</b>\n        <!--, con la que podrás disfrutar de contenido exclusivo y mejorar tu experencia como asistente-->\n        </p>\n    </ion-slide>\n\n    <ion-slide>\n      <img src=\"assets/welcome/slide-7.svg\"/>\n      <h2>¿Listo para empezar?</h2>\n      <br>\n      <ion-button fill=\"solid\" shape=\"round\" [routerLink]=\"['/login']\" routerDirection=\"forward\">Entrar</ion-button>\n    </ion-slide> \n\n  </ion-slides>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/views/welcome/welcome.module.ts":
/*!*************************************************!*\
  !*** ./src/app/views/welcome/welcome.module.ts ***!
  \*************************************************/
/*! exports provided: WelcomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomePageModule", function() { return WelcomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _welcome_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./welcome.page */ "./src/app/views/welcome/welcome.page.ts");





const routes = [
    {
        path: '',
        component: _welcome_page__WEBPACK_IMPORTED_MODULE_4__["WelcomePage"]
    }
];
let WelcomePageModule = class WelcomePageModule {
};
WelcomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
        ],
        declarations: [_welcome_page__WEBPACK_IMPORTED_MODULE_4__["WelcomePage"]]
    })
], WelcomePageModule);



/***/ }),

/***/ "./src/app/views/welcome/welcome.page.scss":
/*!*************************************************!*\
  !*** ./src/app/views/welcome/welcome.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-slides {\n  height: 100%;\n}\n\n.swiper-slide {\n  display: block;\n}\n\n.swiper-slide h2 {\n  margin-top: 2.8rem;\n  font-weight: bold;\n}\n\n.swiper-slide img {\n  height: 100vw;\n  pointer-events: none;\n}\n\nb {\n  font-weight: 500;\n}\n\np {\n  padding: 0 40px;\n  font-size: 14px;\n  line-height: 1.5;\n  color: var(--ion-color-step-600, #60646b);\n}\n\np b {\n  color: var(--ion-text-color, #000000);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3Mvd2VsY29tZS93ZWxjb21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLFlBQUE7QUFBSjs7QUFHRTtFQUNFLGNBQUE7QUFBSjs7QUFHRTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7QUFBSjs7QUFHRTtFQUNFLGFBQUE7RUFDQSxvQkFBQTtBQUFKOztBQUdFO0VBQ0UsZ0JBQUE7QUFBSjs7QUFHRTtFQUNFLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5Q0FBQTtBQUFKOztBQUdFO0VBQ0UscUNBQUE7QUFBSiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3dlbGNvbWUvd2VsY29tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmlvbi1zbGlkZXMge1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuXG4gIC5zd2lwZXItc2xpZGUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5cbiAgLnN3aXBlci1zbGlkZSBoMiB7XG4gICAgbWFyZ2luLXRvcDogMi44cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG5cbiAgLnN3aXBlci1zbGlkZSBpbWcge1xuICAgIGhlaWdodDogMTAwdnc7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIH1cblxuICBiIHtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9XG5cbiAgcCB7XG4gICAgcGFkZGluZzogMCA0MHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC02MDAsICM2MDY0NmIpO1xuICB9XG5cbiAgcCBiIHtcbiAgICBjb2xvcjogdmFyKC0taW9uLXRleHQtY29sb3IsICMwMDAwMDApO1xuICB9Il19 */");

/***/ }),

/***/ "./src/app/views/welcome/welcome.page.ts":
/*!***********************************************!*\
  !*** ./src/app/views/welcome/welcome.page.ts ***!
  \***********************************************/
/*! exports provided: WelcomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomePage", function() { return WelcomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let WelcomePage = class WelcomePage {
    constructor() { }
    ngOnInit() { }
};
WelcomePage.ctorParameters = () => [];
WelcomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-welcome',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./welcome.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/welcome/welcome.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./welcome.page.scss */ "./src/app/views/welcome/welcome.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], WelcomePage);



/***/ })

}]);
//# sourceMappingURL=views-welcome-welcome-module-es2015.js.map