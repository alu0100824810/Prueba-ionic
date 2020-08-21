(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-views-pages-team-team-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/team/team.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/team/team.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header [showBackButton]=\"false\" name=\"Plantilla\">\n  <ion-buttons start (click)=\"openSideBar()\">\n      <ion-icon name=\"menu-outline\"></ion-icon>\n  </ion-buttons>\n</app-header>\n\n<app-sidebar-menu #menu></app-sidebar-menu>\n\n<ion-content>\n  <ion-grid class=\"ion-padding\">\n    \n    <p class=\"title\">Porteros</p>\n    <ion-row>\n      <ng-container *ngFor=\"let item of data.porteros\">\n        <ion-col size=\"6\">\n          <ion-card class=\"ion-no-margin\">\n            <img [src]=\"item.img\" />\n            <ion-card-header>\n              <ion-card-subtitle>PORTERO</ion-card-subtitle>\n            </ion-card-header>\n            <ion-card-content> {{item.name}}</ion-card-content>\n          </ion-card>\n        </ion-col>\n      </ng-container>\n    </ion-row>\n\n    <p class=\"title\">Defensas</p>\n    <ion-row>\n      <ng-container *ngFor=\"let item of data.defensas\">\n        <ion-col size=\"6\">\n          <ion-card class=\"ion-no-margin\">\n            <img [src]=\"item.img\" />\n            <ion-card-header>\n              <ion-card-subtitle>DEFENSA</ion-card-subtitle>\n            </ion-card-header>\n            <ion-card-content> {{item.name}}</ion-card-content>\n          </ion-card>\n        </ion-col>\n      </ng-container>\n    </ion-row>\n\n    <p class=\"title\">Centrocampistas</p>\n    <ion-row>\n      <ng-container *ngFor=\"let item of data.centrocampistas\">\n        <ion-col size=\"6\">\n          <ion-card class=\"ion-no-margin\">\n            <img [src]=\"item.img\" />\n            <ion-card-header>\n              <ion-card-subtitle>CENTROCAMPISTA</ion-card-subtitle>\n            </ion-card-header>\n            <ion-card-content> {{item.name}}</ion-card-content>\n          </ion-card>\n        </ion-col>\n      </ng-container>\n    </ion-row>\n\n    <p class=\"title\">Delanteros</p>\n    <ion-row>\n      <ng-container *ngFor=\"let item of data.delanteros\">\n        <ion-col size=\"6\">\n          <ion-card class=\"ion-no-margin\">\n            <img [src]=\"item.img\" />\n            <ion-card-header>\n              <ion-card-subtitle>Delantero</ion-card-subtitle>\n            </ion-card-header>\n            <ion-card-content> {{item.name}}</ion-card-content>\n          </ion-card>\n        </ion-col>\n      </ng-container>\n    </ion-row>\n\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/shared/mock/team.mock.json":
/*!********************************************!*\
  !*** ./src/app/shared/mock/team.mock.json ***!
  \********************************************/
/*! exports provided: 0, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"porteros\":[{\"name\":\"A. Ortolá\",\"img\":\"https://assets.laliga.com/squad/2019/t612/p94220/512x512/p94220_t612_2019_1_003_000.png\",\"personal\":{\"name\":\"Adrián Ortolá Vañó\"}},{\"name\":\"Dani H\",\"img\":\"https://assets.laliga.com/squad/2019/t612/p76559/512x512/p76559_t612_2019_1_003_000.png\",\"personal\":{\"name\":\"Daniel Hernández Santos\"}},{\"name\":\"Otaño\",\"img\":\"https://assets.laliga.com/squad/2019/t612/p245780/512x512/p245780_t612_2019_1_003_000.png\",\"personal\":{\"name\":\"Ignacio Otaño\"}}],\"defensas\":[{\"name\":\"L. Pérez\",\"img\":\"https://assets.laliga.com/squad/2019/t612/p230029/512x512/p230029_t612_2019_1_003_000.png\",\"personal\":{\"name\":\"L. Pérez\"}},{\"name\":\"Alex Muñoz\",\"img\":\"https://assets.laliga.com/squad/2019/t612/p133020/512x512/p133020_t612_2019_1_003_000.png\",\"personal\":{\"name\":\"Alex Muñoz\"}},{\"name\":\"Alberto\",\"img\":\"https://assets.laliga.com/squad/2019/t612/p168579/512x512/p168579_t612_2019_1_003_000.png\",\"personal\":{\"name\":\"Ignacio Otaño\"}},{\"name\":\"Carlos Ruiz\",\"img\":\"https://assets.laliga.com/squad/2019/t612/p89681/512x512/p89681_t612_2019_1_003_000.png\",\"personal\":{\"name\":\"Carlos Ruiz\"}},{\"name\":\"Lluís Lopez\",\"img\":\"https://assets.laliga.com/squad/2019/t612/p215686/512x512/p215686_t612_2019_1_003_000.png\",\"personal\":{\"name\":\"Lluís Lopez\"}}],\"centrocampistas\":[{\"name\":\"Undabarrena\",\"img\":\"https://assets.laliga.com/squad/2019/t612/p146937/512x512/p146937_t612_2019_1_003_000.png\",\"personal\":{\"name\":\"Undabarrena\"}},{\"name\":\"L. Milla\",\"img\":\"https://assets.laliga.com/squad/2019/t612/p167742/512x512/p167742_t612_2019_1_003_000.png\",\"personal\":{\"name\":\"L. Milla\"}},{\"name\":\"Javi Muñoz\",\"img\":\"https://assets.laliga.com/squad/2019/t612/p198221/512x512/p198221_t612_2019_1_003_000.png\",\"personal\":{\"name\":\"Javi Muñoz\"}},{\"name\":\"Bermejo\",\"img\":\"https://assets.laliga.com/squad/2019/t612/p486214/512x512/p486214_t612_2019_1_003_000.png\",\"personal\":{\"name\":\"Bermejo\"}}],\"delanteros\":[{\"name\":\"Suso N. T.\",\"img\":\"https://assets.laliga.com/squad/2019/t612/p66339/512x512/p66339_t612_2019_1_003_000.png\",\"personal\":{\"name\":\"Suso N. T.\"}},{\"name\":\"Dani Gómez\",\"img\":\"https://assets.laliga.com/squad/2019/t612/p223770/512x512/p223770_t612_2019_1_003_000.png\",\"personal\":{\"name\":\"Dani Gómez\"}},{\"name\":\"Nahuel\",\"img\":\"https://assets.laliga.com/squad/2019/t612/p178063/512x512/p178063_t612_2019_1_003_000.png\",\"personal\":{\"name\":\"Nahuel\"}},{\"name\":\"Borja Lasso\",\"img\":\"https://assets.laliga.com/squad/2019/t612/p207272/512x512/p207272_t612_2019_1_003_000.png\",\"personal\":{\"name\":\"Borja Lasso\"}}]}]");

/***/ }),

/***/ "./src/app/views/pages/team/team.module.ts":
/*!*************************************************!*\
  !*** ./src/app/views/pages/team/team.module.ts ***!
  \*************************************************/
/*! exports provided: TeamPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamPageModule", function() { return TeamPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _team_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./team.page */ "./src/app/views/pages/team/team.page.ts");
/* harmony import */ var app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






const routes = [
    {
        path: '',
        component: _team_page__WEBPACK_IMPORTED_MODULE_3__["TeamPage"]
    }
];
let TeamPageModule = class TeamPageModule {
};
TeamPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes)
        ],
        declarations: [_team_page__WEBPACK_IMPORTED_MODULE_3__["TeamPage"]]
    })
], TeamPageModule);



/***/ }),

/***/ "./src/app/views/pages/team/team.page.scss":
/*!*************************************************!*\
  !*** ./src/app/views/pages/team/team.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".title {\n  padding: 1%;\n  text-align: center;\n  color: var(--ion-color-primary);\n  font-weight: bold;\n  text-transform: uppercase;\n}\n\nion-card-header {\n  padding-bottom: 5px;\n  padding-top: 10px;\n}\n\nion-card-content {\n  padding-bottom: 10px;\n}\n\nion-card img {\n  background: var(--ion-color-tertiary);\n}\n\nion-card-subtitle {\n  --color: black;\n}\n\nion-icon {\n  padding: 5px;\n  font-size: 1.6em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZXMvdGVhbS90ZWFtLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLCtCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtBQUFKOztBQUdBO0VBQ0ksbUJBQUE7RUFDQSxpQkFBQTtBQUFKOztBQUdBO0VBQ0ksb0JBQUE7QUFBSjs7QUFJSTtFQUNJLHFDQUFBO0FBRFI7O0FBS0E7RUFDSSxjQUFBO0FBRko7O0FBS0E7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7QUFGSiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL3RlYW0vdGVhbS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi50aXRsZSB7XG4gICAgcGFkZGluZzogMSU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbiAgICBcbmlvbi1jYXJkLWhlYWRlciB7XG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbn1cblxuaW9uLWNhcmQtY29udGVudHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cblxuaW9uLWNhcmQge1xuICAgIGltZyB7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSk7XG4gICAgfVxufVxuXG5pb24tY2FyZC1zdWJ0aXRsZSB7XG4gICAgLS1jb2xvcjogYmxhY2s7XG59XG5cbmlvbi1pY29ue1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBmb250LXNpemU6IDEuNmVtO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/views/pages/team/team.page.ts":
/*!***********************************************!*\
  !*** ./src/app/views/pages/team/team.page.ts ***!
  \***********************************************/
/*! exports provided: TeamPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamPage", function() { return TeamPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var app_shared_mock_team_mock_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/mock/team.mock.json */ "./src/app/shared/mock/team.mock.json");
var app_shared_mock_team_mock_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! app/shared/mock/team.mock.json */ "./src/app/shared/mock/team.mock.json", 1);
/* harmony import */ var app_shared_components_sidebar_menu_sidebar_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/components/sidebar-menu/sidebar-menu.component */ "./src/app/shared/components/sidebar-menu/sidebar-menu.component.ts");




let TeamPage = class TeamPage {
    constructor() {
        this.data = app_shared_mock_team_mock_json__WEBPACK_IMPORTED_MODULE_2__[0]; // TODO: PROVISIONAL
    }
    ngOnInit() { }
    openSideBar() {
        this.sideBar.openSideBar();
    }
};
TeamPage.ctorParameters = () => [];
TeamPage.propDecorators = {
    sideBar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['menu',] }]
};
TeamPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-team',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./team.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/team/team.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./team.page.scss */ "./src/app/views/pages/team/team.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], TeamPage);



/***/ })

}]);
//# sourceMappingURL=app-views-pages-team-team-module-es2015.js.map