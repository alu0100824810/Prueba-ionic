(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-register-register-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/register/register.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/register/register.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n\n  <div class=\"create-account\">\n    <h3>CREAR CUENTA</h3>\n  </div>\n\n  <section class=\"logo\">\n    <img width=\"250\" src=\"assets/register/register.svg\" />\n  </section>\n\n  <div class=\"form\">\n    <form (submit)=\"signIn($event)\" class=\"ion-padding-horizontal\" #form>\n\n      <ion-item lines=\"none\">\n        <fa-icon [icon]=\"icons.email\" class=\"ion-margin-end\"></fa-icon>\n        <ion-input type=\"email\" name=\"email\" [(ngModel)]=\"user.email\" (keydown.enter)=\"signIn()\" placeholder=\"Correo\"\n          clearInput></ion-input>\n      </ion-item>\n\n      <ion-item lines=\"none\" class=\"ion-margin-top\">\n        <fa-icon [icon]=\"icons.password\" class=\"ion-margin-end\"></fa-icon>\n        <ion-input type=\"password\" name=\"password\" [(ngModel)]=\"user.password\" (keydown.enter)=\"signIn()\" placeholder=\"Contraseña\"\n          clearInput>\n        </ion-input>\n      </ion-item>\n\n      <div class=\"button-register\">\n        <ion-button (click)=\"signIn()\" color=\"primary\" mode=\"ios\">Registrarse</ion-button>\n      </div>\n\n    </form>\n  </div>\n\n  <div class=\"ion-text-center ion-margin-top\">\n    <a [routerLink]=\"['/login']\"> Volver Atrás </a>\n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/views/register/register.module.ts":
/*!***************************************************!*\
  !*** ./src/app/views/register/register.module.ts ***!
  \***************************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register.page */ "./src/app/views/register/register.page.ts");
/* harmony import */ var app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/shared.module */ "./src/app/shared/shared.module.ts");






const routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_4__["RegisterPage"]
    }
];
let RegisterPageModule = class RegisterPageModule {
};
RegisterPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
        ],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_4__["RegisterPage"]]
    })
], RegisterPageModule);



/***/ }),

/***/ "./src/app/views/register/register.page.scss":
/*!***************************************************!*\
  !*** ./src/app/views/register/register.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* breakpoints */\n/** Ionic CSS Variables **/\n:root {\n  /** primary **/\n  --ion-color-primary: #072357;\n  --ion-color-primary-rgb: 56, 128, 255;\n  --ion-color-primary-contrast: #ffffff;\n  --ion-color-primary-contrast-rgb: 255, 255, 255;\n  --ion-color-primary-shade: #0038a7;\n  --ion-color-primary-tint: #0038a7;\n  /** secondary **/\n  --ion-color-secondary: #0b6a5d;\n  --ion-color-secondary-rgb: 11, 106, 93;\n  --ion-color-secondary-contrast: #ffffff;\n  --ion-color-secondary-contrast-rgb: 255, 255, 255;\n  --ion-color-secondary-shade: #0a5d52;\n  --ion-color-secondary-tint: #23796d;\n  /** tertiary **/\n  --ion-color-tertiary: #ffb643;\n  --ion-color-tertiary-rgb: 112, 68, 255;\n  --ion-color-tertiary-contrast: #ffffff;\n  --ion-color-tertiary-contrast-rgb: 255, 255, 255;\n  --ion-color-tertiary-shade: #ffb643;\n  --ion-color-tertiary-tint: #ffb643;\n  /** cuaternary **/\n  --ion-color-cuaternary: #e6e6e6;\n  --ion-color-cuaternary-rgb: 230, 230, 230;\n  --ion-color-cuaternary-contrast: #ffffff;\n  --ion-color-cuaternary-contrast-rgb: 255, 255, 255;\n  --ion-color-cuaternary-shade: #e6e6e6;\n  --ion-color-cuaternary-tint: #e6e6e6;\n  /** success **/\n  --ion-color-success: #10dc60;\n  --ion-color-success-rgb: 16, 220, 96;\n  --ion-color-success-contrast: #ffffff;\n  --ion-color-success-contrast-rgb: 255, 255, 255;\n  --ion-color-success-shade: #0ec254;\n  --ion-color-success-tint: #28e070;\n  /** warning **/\n  --ion-color-warning: #ffce00;\n  --ion-color-warning-rgb: 255, 206, 0;\n  --ion-color-warning-contrast: #ffffff;\n  --ion-color-warning-contrast-rgb: 255, 255, 255;\n  --ion-color-warning-shade: #e0b500;\n  --ion-color-warning-tint: #ffd31a;\n  /** details **/\n  --ion-color-details: #9a1419;\n  --ion-color-details-rgb: 154, 20, 25;\n  --ion-color-details-contrast: #ffffff;\n  --ion-color-details-contrast-rgb: 255, 255, 255;\n  --ion-color-details-shade: #831115;\n  --ion-color-details-tint: #751215;\n  /** danger **/\n  --ion-color-danger: #f04141;\n  --ion-color-danger-rgb: 245, 61, 61;\n  --ion-color-danger-contrast: #ffffff;\n  --ion-color-danger-contrast-rgb: 255, 255, 255;\n  --ion-color-danger-shade: #d33939;\n  --ion-color-danger-tint: #f25454;\n  /** dark **/\n  --ion-color-dark: #222428;\n  --ion-color-dark-rgb: 34, 34, 34;\n  --ion-color-dark-contrast: #ffffff;\n  --ion-color-dark-contrast-rgb: 255, 255, 255;\n  --ion-color-dark-shade: #1e2023;\n  --ion-color-dark-tint: #383a3e;\n  /** medium **/\n  --ion-color-medium: #989aa2;\n  --ion-color-medium-rgb: 152, 154, 162;\n  --ion-color-medium-contrast: #ffffff;\n  --ion-color-medium-contrast-rgb: 255, 255, 255;\n  --ion-color-medium-shade: #86888f;\n  --ion-color-medium-tint: #a2a4ab;\n  /** light **/\n  --ion-color-light: #f4f5f8;\n  --ion-color-light-rgb: 244, 244, 244;\n  --ion-color-light-contrast: #000000;\n  --ion-color-light-contrast-rgb: 0, 0, 0;\n  --ion-color-light-shade: #d7d8da;\n  --ion-color-light-tint: #f5f6f9;\n  /** transparent **/\n  --ion-color-transparent: #ffffff;\n  --ion-color-transparent-rgb: 0, 0, 0;\n  --ion-color-transparent-contrast: #15c393;\n  --ion-color-transparent-contrast-rgb: 0, 0, 0;\n  --ion-color-transparent-shade: #15c393;\n  --ion-color-transparent-tint: #15c393;\n}\n.ion-color-details {\n  --ion-color-base: var(--ion-color-details);\n  --ion-color-base-rgb: var(--ion-color-details-rgb);\n  --ion-color-contrast: var(--ion-color-details-contrast);\n  --ion-color-contrast-rgb: var(--ion-color-details-contrast-rgb);\n  --ion-color-shade: var(--ion-color-details-shade);\n  --ion-color-tint: var(--ion-color-details-tint);\n}\n.ion-color-cuaternary {\n  --ion-color-base: var(--ion-color-cuaternary);\n  --ion-color-base-rgb: var(--ion-color-cuaternary-rgb);\n  --ion-color-contrast: var(--ion-color-cuaternary-contrast);\n  --ion-color-contrast-rgb: var(--ion-color-cuaternary-contrast-rgb);\n  --ion-color-shade: var(--ion-color-cuaternary-shade);\n  --ion-color-tint: var(--ion-color-cuaternary-tint);\n}\n.create-account {\n  text-align: center;\n  margin-top: 45px;\n}\n.logo {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  pointer-events: none;\n}\n.form {\n  display: flex;\n  justify-content: center;\n  padding: 0 16px;\n}\n.form .button-register {\n  display: flex;\n  justify-content: center;\n  padding: 16px;\n  margin: 16px 0 0 0;\n}\nform,\nion-button {\n  width: 100%;\n}\n@media (min-width: 576px) {\n  form,\nion-button {\n    width: 75%;\n  }\n  form ion-button,\nion-button ion-button {\n    width: 50%;\n  }\n}\n@media (min-width: 1200px) {\n  form,\nion-button {\n    width: 50%;\n  }\n}\nion-item {\n  --background: aliceblue;\n  --border-width: 1px;\n  --border-color: black;\n  --border-radius: 2ex;\n}\n.back-login {\n  display: flex;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS92YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvdmlld3MvcmVnaXN0ZXIvcmVnaXN0ZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBLGdCQUFBO0FBT0EsMEJBQUE7QUFDQTtFQUNFLGNBQUE7RUFDQSw0QkFBQTtFQUNBLHFDQUFBO0VBQ0EscUNBQUE7RUFDQSwrQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsaUNBQUE7RUFFQSxnQkFBQTtFQUNBLDhCQUFBO0VBQ0Esc0NBQUE7RUFDQSx1Q0FBQTtFQUNBLGlEQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQ0FBQTtFQUVBLGVBQUE7RUFDQSw2QkFBQTtFQUNBLHNDQUFBO0VBQ0Esc0NBQUE7RUFDQSxnREFBQTtFQUNBLG1DQUFBO0VBQ0Esa0NBQUE7RUFFQSxpQkFBQTtFQUNBLCtCQUFBO0VBQ0EseUNBQUE7RUFDQSx3Q0FBQTtFQUNBLGtEQUFBO0VBQ0EscUNBQUE7RUFDQSxvQ0FBQTtFQUVBLGNBQUE7RUFDQSw0QkFBQTtFQUNBLG9DQUFBO0VBQ0EscUNBQUE7RUFDQSwrQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsaUNBQUE7RUFFQSxjQUFBO0VBQ0EsNEJBQUE7RUFDQSxvQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsK0NBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0VBRUEsY0FBQTtFQUNBLDRCQUFBO0VBQ0Esb0NBQUE7RUFDQSxxQ0FBQTtFQUNBLCtDQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQ0FBQTtFQUVBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLG1DQUFBO0VBQ0Esb0NBQUE7RUFDQSw4Q0FBQTtFQUNBLGlDQUFBO0VBQ0EsZ0NBQUE7RUFFQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsNENBQUE7RUFDQSwrQkFBQTtFQUNBLDhCQUFBO0VBRUEsYUFBQTtFQUNBLDJCQUFBO0VBQ0EscUNBQUE7RUFDQSxvQ0FBQTtFQUNBLDhDQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQ0FBQTtFQUVBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLG9DQUFBO0VBQ0EsbUNBQUE7RUFDQSx1Q0FBQTtFQUNBLGdDQUFBO0VBQ0EsK0JBQUE7RUFFQSxrQkFBQTtFQUNBLGdDQUFBO0VBQ0Esb0NBQUE7RUFDQSx5Q0FBQTtFQUNBLDZDQUFBO0VBQ0Esc0NBQUE7RUFDQSxxQ0FBQTtBQ25CRjtBRHdCRTtFQUNFLDBDQUFBO0VBQ0Esa0RBQUE7RUFDQSx1REFBQTtFQUNBLCtEQUFBO0VBQ0EsaURBQUE7RUFDQSwrQ0FBQTtBQ3JCSjtBRGVFO0VBQ0UsNkNBQUE7RUFDQSxxREFBQTtFQUNBLDBEQUFBO0VBQ0Esa0VBQUE7RUFDQSxvREFBQTtFQUNBLGtEQUFBO0FDWko7QUF2R0E7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0FBMEdGO0FBdkdBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtBQTBHRjtBQXZHQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUEwR0Y7QUF4R0U7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUEwR0o7QUFyR0E7O0VBRUUsV0FBQTtBQXdHRjtBQXZHRTtFQUhGOztJQU9JLFVBQUE7RUF3R0Y7RUEzR0U7O0lBQ0UsVUFBQTtFQThHSjtBQUNGO0FBM0dFO0VBVEY7O0lBVUksVUFBQTtFQStHRjtBQUNGO0FBNUdBO0VBQ0UsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7QUErR0Y7QUEzR0E7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7QUE4R0YiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9yZWdpc3Rlci9yZWdpc3Rlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJb25pYyBWYXJpYWJsZXMgYW5kIFRoZW1pbmcuIEZvciBtb3JlIGluZm8sIHBsZWFzZSBzZWU6XG4vLyBodHRwOi8vaW9uaWNmcmFtZXdvcmsuY29tL2RvY3MvdGhlbWluZy9cblxuLyogYnJlYWtwb2ludHMgKi9cbiRpb24tYnJlYWsteHM6IDBweDtcbiRpb24tYnJlYWstc206IDU3NnB4O1xuJGlvbi1icmVhay1tZDogNzY4cHg7XG4kaW9uLWJyZWFrLWxnOiA5OTJweDtcbiRpb24tYnJlYWsteGw6IDEyMDBweDtcblxuLyoqIElvbmljIENTUyBWYXJpYWJsZXMgKiovXG46cm9vdCB7XG4gIC8qKiBwcmltYXJ5ICoqL1xuICAtLWlvbi1jb2xvci1wcmltYXJ5ICAgICAgICAgICAgIDogIzA3MjM1NztcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1yZ2IgICAgICAgICA6IDU2LCAxMjgsIDI1NTtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdCAgICA6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXNoYWRlICAgICAgIDogIzAwMzhhNztcbiAgLS1pb24tY29sb3ItcHJpbWFyeS10aW50ICAgICAgICA6ICMwMDM4YTc7XG5cbiAgLyoqIHNlY29uZGFyeSAqKi9cbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5ICAgICAgICAgICAgIDogIzBiNmE1ZDtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXJnYiAgICAgICAgIDogMTEsIDEwNiwgOTM7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdCAgICA6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1zaGFkZSAgICAgICA6ICMwYTVkNTI7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS10aW50ICAgICAgICA6ICMyMzc5NmQ7XG5cbiAgLyoqIHRlcnRpYXJ5ICoqL1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeSAgICAgICAgICAgICA6ICNmZmI2NDM7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXJnYiAgICAgICAgIDogMTEyLCA2OCwgMjU1O1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1jb250cmFzdCAgICA6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktc2hhZGUgICAgICAgOiAjZmZiNjQzO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS10aW50ICAgICAgICA6ICNmZmI2NDM7XG5cbiAgLyoqIGN1YXRlcm5hcnkgKiovXG4gIC0taW9uLWNvbG9yLWN1YXRlcm5hcnkgICAgICAgICAgICAgOiAjZTZlNmU2O1xuICAtLWlvbi1jb2xvci1jdWF0ZXJuYXJ5LXJnYiAgICAgICAgIDogMjMwLCAyMzAsIDIzMDtcbiAgLS1pb24tY29sb3ItY3VhdGVybmFyeS1jb250cmFzdCAgICA6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLWN1YXRlcm5hcnktY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1jdWF0ZXJuYXJ5LXNoYWRlICAgICAgIDogI2U2ZTZlNjtcbiAgLS1pb24tY29sb3ItY3VhdGVybmFyeS10aW50ICAgICAgICA6ICNlNmU2ZTY7XG5cbiAgLyoqIHN1Y2Nlc3MgKiovXG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MgICAgICAgICAgICAgOiAjMTBkYzYwO1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXJnYiAgICAgICAgIDogMTYsIDIyMCwgOTY7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3QgICAgOiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1zaGFkZSAgICAgICA6ICMwZWMyNTQ7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtdGludCAgICAgICAgOiAjMjhlMDcwO1xuXG4gIC8qKiB3YXJuaW5nICoqL1xuICAtLWlvbi1jb2xvci13YXJuaW5nICAgICAgICAgICAgIDogI2ZmY2UwMDtcbiAgLS1pb24tY29sb3Itd2FybmluZy1yZ2IgICAgICAgICA6IDI1NSwgMjA2LCAwO1xuICAtLWlvbi1jb2xvci13YXJuaW5nLWNvbnRyYXN0ICAgIDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctc2hhZGUgICAgICAgOiAjZTBiNTAwO1xuICAtLWlvbi1jb2xvci13YXJuaW5nLXRpbnQgICAgICAgIDogI2ZmZDMxYTtcblxuICAvKiogZGV0YWlscyAqKi9cbiAgLS1pb24tY29sb3ItZGV0YWlscyAgICAgICAgICAgICA6ICM5YTE0MTk7XG4gIC0taW9uLWNvbG9yLWRldGFpbHMtcmdiICAgICAgICAgOiAxNTQsIDIwLCAyNTtcbiAgLS1pb24tY29sb3ItZGV0YWlscy1jb250cmFzdCAgICA6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLWRldGFpbHMtY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1kZXRhaWxzLXNoYWRlICAgICAgIDogIzgzMTExNTtcbiAgLS1pb24tY29sb3ItZGV0YWlscy10aW50ICAgICAgICA6ICM3NTEyMTU7XG5cbiAgLyoqIGRhbmdlciAqKi9cbiAgLS1pb24tY29sb3ItZGFuZ2VyICAgICAgICAgICAgIDogI2YwNDE0MTtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXJnYiAgICAgICAgIDogMjQ1LCA2MSwgNjE7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1jb250cmFzdCAgICA6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1zaGFkZSAgICAgICA6ICNkMzM5Mzk7XG4gIC0taW9uLWNvbG9yLWRhbmdlci10aW50ICAgICAgICA6ICNmMjU0NTQ7XG5cbiAgLyoqIGRhcmsgKiovXG4gIC0taW9uLWNvbG9yLWRhcmsgICAgICAgICAgICAgOiAjMjIyNDI4O1xuICAtLWlvbi1jb2xvci1kYXJrLXJnYiAgICAgICAgIDogMzQsIDM0LCAzNDtcbiAgLS1pb24tY29sb3ItZGFyay1jb250cmFzdCAgICA6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLWRhcmstY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1kYXJrLXNoYWRlICAgICAgIDogIzFlMjAyMztcbiAgLS1pb24tY29sb3ItZGFyay10aW50ICAgICAgICA6ICMzODNhM2U7XG5cbiAgLyoqIG1lZGl1bSAqKi9cbiAgLS1pb24tY29sb3ItbWVkaXVtICAgICAgICAgICAgIDogIzk4OWFhMjtcbiAgLS1pb24tY29sb3ItbWVkaXVtLXJnYiAgICAgICAgIDogMTUyLCAxNTQsIDE2MjtcbiAgLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0ICAgIDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlICAgICAgIDogIzg2ODg4ZjtcbiAgLS1pb24tY29sb3ItbWVkaXVtLXRpbnQgICAgICAgIDogI2EyYTRhYjtcblxuICAvKiogbGlnaHQgKiovXG4gIC0taW9uLWNvbG9yLWxpZ2h0ICAgICAgICAgICAgIDogI2Y0ZjVmODtcbiAgLS1pb24tY29sb3ItbGlnaHQtcmdiICAgICAgICAgOiAyNDQsIDI0NCwgMjQ0O1xuICAtLWlvbi1jb2xvci1saWdodC1jb250cmFzdCAgICA6ICMwMDAwMDA7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0LXJnYjogMCwgMCwgMDtcbiAgLS1pb24tY29sb3ItbGlnaHQtc2hhZGUgICAgICAgOiAjZDdkOGRhO1xuICAtLWlvbi1jb2xvci1saWdodC10aW50ICAgICAgICA6ICNmNWY2Zjk7XG5cbiAgLyoqIHRyYW5zcGFyZW50ICoqL1xuICAtLWlvbi1jb2xvci10cmFuc3BhcmVudCAgICAgICAgICAgICA6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXRyYW5zcGFyZW50LXJnYiAgICAgICAgIDogMCwgMCwgMDtcbiAgLS1pb24tY29sb3ItdHJhbnNwYXJlbnQtY29udHJhc3QgICAgOiAjMTVjMzkzO1xuICAtLWlvbi1jb2xvci10cmFuc3BhcmVudC1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XG4gIC0taW9uLWNvbG9yLXRyYW5zcGFyZW50LXNoYWRlICAgICAgIDogIzE1YzM5MztcbiAgLS1pb24tY29sb3ItdHJhbnNwYXJlbnQtdGludCAgICAgICAgOiAjMTVjMzkzO1xuXG59XG5cbkBtaXhpbiBjcmVhdGVfaW9uaWNfY29sb3IoJG5hbWUpIHtcbiAgLmlvbi1jb2xvci0jeyRuYW1lfSB7XG4gICAgLS1pb24tY29sb3ItYmFzZTogdmFyKC0taW9uLWNvbG9yLSN7JG5hbWV9KTtcbiAgICAtLWlvbi1jb2xvci1iYXNlLXJnYjogdmFyKC0taW9uLWNvbG9yLSN7JG5hbWV9LXJnYik7XG4gICAgLS1pb24tY29sb3ItY29udHJhc3Q6IHZhcigtLWlvbi1jb2xvci0jeyRuYW1lfS1jb250cmFzdCk7XG4gICAgLS1pb24tY29sb3ItY29udHJhc3QtcmdiOiB2YXIoLS1pb24tY29sb3ItI3skbmFtZX0tY29udHJhc3QtcmdiKTtcbiAgICAtLWlvbi1jb2xvci1zaGFkZTogdmFyKC0taW9uLWNvbG9yLSN7JG5hbWV9LXNoYWRlKTtcbiAgICAtLWlvbi1jb2xvci10aW50OiB2YXIoLS1pb24tY29sb3ItI3skbmFtZX0tdGludCk7XG4gIH1cbn1cblxuQGluY2x1ZGUgY3JlYXRlX2lvbmljX2NvbG9yKCdkZXRhaWxzJyk7XG5AaW5jbHVkZSBjcmVhdGVfaW9uaWNfY29sb3IoJ2N1YXRlcm5hcnknKSIsIkBpbXBvcnQgXCIuLi8uLi8uLi90aGVtZS92YXJpYWJsZXMuc2Nzc1wiO1xuXG4uY3JlYXRlLWFjY291bnQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDQ1cHg7XG59XG5cbi5sb2dve1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5mb3Jte1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogMCAxNnB4O1xuXG4gIC5idXR0b24tcmVnaXN0ZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTZweDtcbiAgICBtYXJnaW46IDE2cHggMCAwIDA7XG4gIH1cblxufVxuXG5mb3JtLFxuaW9uLWJ1dHRvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBAbWVkaWEgKG1pbi13aWR0aDogJGlvbi1icmVhay1zbSkge1xuICAgIGlvbi1idXR0b24ge1xuICAgICAgd2lkdGg6IDUwJTtcbiAgICB9XG4gICAgd2lkdGg6IDc1JTtcbiAgfVxuICBAbWVkaWEgKG1pbi13aWR0aDogJGlvbi1icmVhay14bCkge1xuICAgIHdpZHRoOiA1MCU7XG4gIH1cbn1cblxuaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6IGFsaWNlYmx1ZTtcbiAgLS1ib3JkZXItd2lkdGg6IDFweDtcbiAgLS1ib3JkZXItY29sb3I6IGJsYWNrO1xuICAtLWJvcmRlci1yYWRpdXM6IDJleDtcbn1cblxuXG4uYmFjay1sb2dpbntcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/views/register/register.page.ts":
/*!*************************************************!*\
  !*** ./src/app/views/register/register.page.ts ***!
  \*************************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/services/login.service */ "./src/app/core/services/login.service.ts");
/* harmony import */ var _core_services_messages_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/services/messages.service */ "./src/app/core/services/messages.service.ts");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");






let RegisterPage = class RegisterPage {
    constructor(messages, router, loginService) {
        this.messages = messages;
        this.router = router;
        this.loginService = loginService;
        this.user = {
            userName: null,
            email: null,
            password: null
        };
        this.icons = {
            email: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faEnvelope"],
            password: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faLock"]
        };
    }
    ngOnInit() { }
    signIn(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (event !== undefined) {
                event.preventDefault();
            }
            let { user } = this;
            try {
                yield this.messages.showSpinner('Creando cuenta ...');
                yield this.loginService.signIn(user.email, user.password);
                yield this.messages.showToast('Creación de la cuenta correctamente');
                this.router.navigateByUrl('/login'); // TODO: PROVISONAL
            }
            catch (error) {
                console.error(error);
                for (const key in user) {
                    if (user.hasOwnProperty(key)) {
                        user[key] = null;
                    }
                }
            }
            finally {
                yield this.messages.hideSpinner();
            }
        });
    }
};
RegisterPage.ctorParameters = () => [
    { type: _core_services_messages_service__WEBPACK_IMPORTED_MODULE_4__["MessagesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _core_services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"] }
];
RegisterPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./register.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/register/register.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./register.page.scss */ "./src/app/views/register/register.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_core_services_messages_service__WEBPACK_IMPORTED_MODULE_4__["MessagesService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _core_services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]])
], RegisterPage);



/***/ })

}]);
//# sourceMappingURL=views-register-register-module-es2015.js.map