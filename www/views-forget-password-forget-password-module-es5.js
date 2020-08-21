(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-forget-password-forget-password-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/views/forget-password/forget-password.page.html":
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/forget-password/forget-password.page.html ***!
      \*******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppViewsForgetPasswordForgetPasswordPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n\n  <div class=\"title\">\n    <h3>¿Olvidaste la contraseña?</h3>\n    <p>Introduce tu dirección de correo electrónico de recuperación</p>\n  </div>\n\n  <div class=\"form\">\n    <form (submit)=\"recoverPassword($event)\" #form>\n\n      <ion-item>\n        <fa-icon [icon]=\"icons.email\" class=\"ion-margin-end\"></fa-icon>\n        <ion-input type=\"email\" name=\"email\" [(ngModel)]=\"email\" (keydown.enter)=\"recoverPassword()\" placeholder=\"Correo\"\n          clearInput></ion-input>\n      </ion-item>\n\n      <div class=\"button-send\">\n        <ion-button (click)=\"recoverPassword()\" color=\"primary\" mode=\"ios\">Enviar</ion-button>\n      </div>\n    </form>\n  </div>\n\n  <div class=\"back-login\">\n   <a [routerLink]=\"['/login']\"> Volver Atrás </a>\n  </div>\n\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/views/forget-password/forget-password.module.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/views/forget-password/forget-password.module.ts ***!
      \*****************************************************************/

    /*! exports provided: ForgetPasswordPageModule */

    /***/
    function srcAppViewsForgetPasswordForgetPasswordModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForgetPasswordPageModule", function () {
        return ForgetPasswordPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _forget_password_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./forget-password.page */
      "./src/app/views/forget-password/forget-password.page.ts");
      /* harmony import */


      var app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! app/shared/shared.module */
      "./src/app/shared/shared.module.ts");

      var routes = [{
        path: '',
        component: _forget_password_page__WEBPACK_IMPORTED_MODULE_4__["ForgetPasswordPage"]
      }];

      var ForgetPasswordPageModule = function ForgetPasswordPageModule() {
        _classCallCheck(this, ForgetPasswordPageModule);
      };

      ForgetPasswordPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
        declarations: [_forget_password_page__WEBPACK_IMPORTED_MODULE_4__["ForgetPasswordPage"]]
      })], ForgetPasswordPageModule);
      /***/
    },

    /***/
    "./src/app/views/forget-password/forget-password.page.scss":
    /*!*****************************************************************!*\
      !*** ./src/app/views/forget-password/forget-password.page.scss ***!
      \*****************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppViewsForgetPasswordForgetPasswordPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "/* breakpoints */\n/** Ionic CSS Variables **/\n:root {\n  /** primary **/\n  --ion-color-primary: #072357;\n  --ion-color-primary-rgb: 56, 128, 255;\n  --ion-color-primary-contrast: #ffffff;\n  --ion-color-primary-contrast-rgb: 255, 255, 255;\n  --ion-color-primary-shade: #0038a7;\n  --ion-color-primary-tint: #0038a7;\n  /** secondary **/\n  --ion-color-secondary: #0b6a5d;\n  --ion-color-secondary-rgb: 11, 106, 93;\n  --ion-color-secondary-contrast: #ffffff;\n  --ion-color-secondary-contrast-rgb: 255, 255, 255;\n  --ion-color-secondary-shade: #0a5d52;\n  --ion-color-secondary-tint: #23796d;\n  /** tertiary **/\n  --ion-color-tertiary: #ffb643;\n  --ion-color-tertiary-rgb: 112, 68, 255;\n  --ion-color-tertiary-contrast: #ffffff;\n  --ion-color-tertiary-contrast-rgb: 255, 255, 255;\n  --ion-color-tertiary-shade: #ffb643;\n  --ion-color-tertiary-tint: #ffb643;\n  /** cuaternary **/\n  --ion-color-cuaternary: #e6e6e6;\n  --ion-color-cuaternary-rgb: 230, 230, 230;\n  --ion-color-cuaternary-contrast: #ffffff;\n  --ion-color-cuaternary-contrast-rgb: 255, 255, 255;\n  --ion-color-cuaternary-shade: #e6e6e6;\n  --ion-color-cuaternary-tint: #e6e6e6;\n  /** success **/\n  --ion-color-success: #10dc60;\n  --ion-color-success-rgb: 16, 220, 96;\n  --ion-color-success-contrast: #ffffff;\n  --ion-color-success-contrast-rgb: 255, 255, 255;\n  --ion-color-success-shade: #0ec254;\n  --ion-color-success-tint: #28e070;\n  /** warning **/\n  --ion-color-warning: #ffce00;\n  --ion-color-warning-rgb: 255, 206, 0;\n  --ion-color-warning-contrast: #ffffff;\n  --ion-color-warning-contrast-rgb: 255, 255, 255;\n  --ion-color-warning-shade: #e0b500;\n  --ion-color-warning-tint: #ffd31a;\n  /** details **/\n  --ion-color-details: #9a1419;\n  --ion-color-details-rgb: 154, 20, 25;\n  --ion-color-details-contrast: #ffffff;\n  --ion-color-details-contrast-rgb: 255, 255, 255;\n  --ion-color-details-shade: #831115;\n  --ion-color-details-tint: #751215;\n  /** danger **/\n  --ion-color-danger: #f04141;\n  --ion-color-danger-rgb: 245, 61, 61;\n  --ion-color-danger-contrast: #ffffff;\n  --ion-color-danger-contrast-rgb: 255, 255, 255;\n  --ion-color-danger-shade: #d33939;\n  --ion-color-danger-tint: #f25454;\n  /** dark **/\n  --ion-color-dark: #222428;\n  --ion-color-dark-rgb: 34, 34, 34;\n  --ion-color-dark-contrast: #ffffff;\n  --ion-color-dark-contrast-rgb: 255, 255, 255;\n  --ion-color-dark-shade: #1e2023;\n  --ion-color-dark-tint: #383a3e;\n  /** medium **/\n  --ion-color-medium: #989aa2;\n  --ion-color-medium-rgb: 152, 154, 162;\n  --ion-color-medium-contrast: #ffffff;\n  --ion-color-medium-contrast-rgb: 255, 255, 255;\n  --ion-color-medium-shade: #86888f;\n  --ion-color-medium-tint: #a2a4ab;\n  /** light **/\n  --ion-color-light: #f4f5f8;\n  --ion-color-light-rgb: 244, 244, 244;\n  --ion-color-light-contrast: #000000;\n  --ion-color-light-contrast-rgb: 0, 0, 0;\n  --ion-color-light-shade: #d7d8da;\n  --ion-color-light-tint: #f5f6f9;\n  /** transparent **/\n  --ion-color-transparent: #ffffff;\n  --ion-color-transparent-rgb: 0, 0, 0;\n  --ion-color-transparent-contrast: #15c393;\n  --ion-color-transparent-contrast-rgb: 0, 0, 0;\n  --ion-color-transparent-shade: #15c393;\n  --ion-color-transparent-tint: #15c393;\n}\n.ion-color-details {\n  --ion-color-base: var(--ion-color-details);\n  --ion-color-base-rgb: var(--ion-color-details-rgb);\n  --ion-color-contrast: var(--ion-color-details-contrast);\n  --ion-color-contrast-rgb: var(--ion-color-details-contrast-rgb);\n  --ion-color-shade: var(--ion-color-details-shade);\n  --ion-color-tint: var(--ion-color-details-tint);\n}\n.ion-color-cuaternary {\n  --ion-color-base: var(--ion-color-cuaternary);\n  --ion-color-base-rgb: var(--ion-color-cuaternary-rgb);\n  --ion-color-contrast: var(--ion-color-cuaternary-contrast);\n  --ion-color-contrast-rgb: var(--ion-color-cuaternary-contrast-rgb);\n  --ion-color-shade: var(--ion-color-cuaternary-shade);\n  --ion-color-tint: var(--ion-color-cuaternary-tint);\n}\n.title {\n  text-align: center;\n  margin-top: 35px;\n  padding: 16px;\n}\nform,\nion-button {\n  width: 100%;\n}\n@media (min-width: 576px) {\n  form,\nion-button {\n    width: 75%;\n  }\n  form ion-button,\nion-button ion-button {\n    width: 50%;\n  }\n}\n@media (min-width: 1200px) {\n  form,\nion-button {\n    width: 50%;\n  }\n}\nform {\n  display: block;\n  margin: 0 auto;\n  padding: 0 30px;\n}\nform .button-send {\n  display: flex;\n  justify-content: center;\n  margin: 30px 0 0 0;\n  padding: 0 16px;\n}\n.back-login {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 30%;\n}\nion-item {\n  --background: aliceblue;\n  --border-width: 1px;\n  --border-color: black;\n  --border-radius: 2ex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS92YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvdmlld3MvZm9yZ2V0LXBhc3N3b3JkL2ZvcmdldC1wYXNzd29yZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0EsZ0JBQUE7QUFPQSwwQkFBQTtBQUNBO0VBQ0UsY0FBQTtFQUNBLDRCQUFBO0VBQ0EscUNBQUE7RUFDQSxxQ0FBQTtFQUNBLCtDQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQ0FBQTtFQUVBLGdCQUFBO0VBQ0EsOEJBQUE7RUFDQSxzQ0FBQTtFQUNBLHVDQUFBO0VBQ0EsaURBQUE7RUFDQSxvQ0FBQTtFQUNBLG1DQUFBO0VBRUEsZUFBQTtFQUNBLDZCQUFBO0VBQ0Esc0NBQUE7RUFDQSxzQ0FBQTtFQUNBLGdEQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQ0FBQTtFQUVBLGlCQUFBO0VBQ0EsK0JBQUE7RUFDQSx5Q0FBQTtFQUNBLHdDQUFBO0VBQ0Esa0RBQUE7RUFDQSxxQ0FBQTtFQUNBLG9DQUFBO0VBRUEsY0FBQTtFQUNBLDRCQUFBO0VBQ0Esb0NBQUE7RUFDQSxxQ0FBQTtFQUNBLCtDQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQ0FBQTtFQUVBLGNBQUE7RUFDQSw0QkFBQTtFQUNBLG9DQUFBO0VBQ0EscUNBQUE7RUFDQSwrQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsaUNBQUE7RUFFQSxjQUFBO0VBQ0EsNEJBQUE7RUFDQSxvQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsK0NBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0VBRUEsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUNBQUE7RUFDQSxvQ0FBQTtFQUNBLDhDQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQ0FBQTtFQUVBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGdDQUFBO0VBQ0Esa0NBQUE7RUFDQSw0Q0FBQTtFQUNBLCtCQUFBO0VBQ0EsOEJBQUE7RUFFQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsOENBQUE7RUFDQSxpQ0FBQTtFQUNBLGdDQUFBO0VBRUEsWUFBQTtFQUNBLDBCQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQ0FBQTtFQUNBLHVDQUFBO0VBQ0EsZ0NBQUE7RUFDQSwrQkFBQTtFQUVBLGtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxvQ0FBQTtFQUNBLHlDQUFBO0VBQ0EsNkNBQUE7RUFDQSxzQ0FBQTtFQUNBLHFDQUFBO0FDbkJGO0FEd0JFO0VBQ0UsMENBQUE7RUFDQSxrREFBQTtFQUNBLHVEQUFBO0VBQ0EsK0RBQUE7RUFDQSxpREFBQTtFQUNBLCtDQUFBO0FDckJKO0FEZUU7RUFDRSw2Q0FBQTtFQUNBLHFEQUFBO0VBQ0EsMERBQUE7RUFDQSxrRUFBQTtFQUNBLG9EQUFBO0VBQ0Esa0RBQUE7QUNaSjtBQXRHQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FBeUdKO0FBdEdBOztFQUVFLFdBQUE7QUF5R0Y7QUF4R0U7RUFIRjs7SUFPSSxVQUFBO0VBeUdGO0VBNUdFOztJQUNFLFVBQUE7RUErR0o7QUFDRjtBQTVHRTtFQVRGOztJQVVJLFVBQUE7RUFnSEY7QUFDRjtBQTVHQTtFQUNJLGNBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQStHSjtBQTdHSTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQStHTjtBQTNHQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQThHRjtBQTNHQTtFQUNFLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0FBOEdGIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvZm9yZ2V0LXBhc3N3b3JkL2ZvcmdldC1wYXNzd29yZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJb25pYyBWYXJpYWJsZXMgYW5kIFRoZW1pbmcuIEZvciBtb3JlIGluZm8sIHBsZWFzZSBzZWU6XG4vLyBodHRwOi8vaW9uaWNmcmFtZXdvcmsuY29tL2RvY3MvdGhlbWluZy9cblxuLyogYnJlYWtwb2ludHMgKi9cbiRpb24tYnJlYWsteHM6IDBweDtcbiRpb24tYnJlYWstc206IDU3NnB4O1xuJGlvbi1icmVhay1tZDogNzY4cHg7XG4kaW9uLWJyZWFrLWxnOiA5OTJweDtcbiRpb24tYnJlYWsteGw6IDEyMDBweDtcblxuLyoqIElvbmljIENTUyBWYXJpYWJsZXMgKiovXG46cm9vdCB7XG4gIC8qKiBwcmltYXJ5ICoqL1xuICAtLWlvbi1jb2xvci1wcmltYXJ5ICAgICAgICAgICAgIDogIzA3MjM1NztcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1yZ2IgICAgICAgICA6IDU2LCAxMjgsIDI1NTtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdCAgICA6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXNoYWRlICAgICAgIDogIzAwMzhhNztcbiAgLS1pb24tY29sb3ItcHJpbWFyeS10aW50ICAgICAgICA6ICMwMDM4YTc7XG5cbiAgLyoqIHNlY29uZGFyeSAqKi9cbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5ICAgICAgICAgICAgIDogIzBiNmE1ZDtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXJnYiAgICAgICAgIDogMTEsIDEwNiwgOTM7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdCAgICA6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1zaGFkZSAgICAgICA6ICMwYTVkNTI7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS10aW50ICAgICAgICA6ICMyMzc5NmQ7XG5cbiAgLyoqIHRlcnRpYXJ5ICoqL1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeSAgICAgICAgICAgICA6ICNmZmI2NDM7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXJnYiAgICAgICAgIDogMTEyLCA2OCwgMjU1O1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1jb250cmFzdCAgICA6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktc2hhZGUgICAgICAgOiAjZmZiNjQzO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS10aW50ICAgICAgICA6ICNmZmI2NDM7XG5cbiAgLyoqIGN1YXRlcm5hcnkgKiovXG4gIC0taW9uLWNvbG9yLWN1YXRlcm5hcnkgICAgICAgICAgICAgOiAjZTZlNmU2O1xuICAtLWlvbi1jb2xvci1jdWF0ZXJuYXJ5LXJnYiAgICAgICAgIDogMjMwLCAyMzAsIDIzMDtcbiAgLS1pb24tY29sb3ItY3VhdGVybmFyeS1jb250cmFzdCAgICA6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLWN1YXRlcm5hcnktY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1jdWF0ZXJuYXJ5LXNoYWRlICAgICAgIDogI2U2ZTZlNjtcbiAgLS1pb24tY29sb3ItY3VhdGVybmFyeS10aW50ICAgICAgICA6ICNlNmU2ZTY7XG5cbiAgLyoqIHN1Y2Nlc3MgKiovXG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MgICAgICAgICAgICAgOiAjMTBkYzYwO1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXJnYiAgICAgICAgIDogMTYsIDIyMCwgOTY7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3QgICAgOiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1zaGFkZSAgICAgICA6ICMwZWMyNTQ7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtdGludCAgICAgICAgOiAjMjhlMDcwO1xuXG4gIC8qKiB3YXJuaW5nICoqL1xuICAtLWlvbi1jb2xvci13YXJuaW5nICAgICAgICAgICAgIDogI2ZmY2UwMDtcbiAgLS1pb24tY29sb3Itd2FybmluZy1yZ2IgICAgICAgICA6IDI1NSwgMjA2LCAwO1xuICAtLWlvbi1jb2xvci13YXJuaW5nLWNvbnRyYXN0ICAgIDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctc2hhZGUgICAgICAgOiAjZTBiNTAwO1xuICAtLWlvbi1jb2xvci13YXJuaW5nLXRpbnQgICAgICAgIDogI2ZmZDMxYTtcblxuICAvKiogZGV0YWlscyAqKi9cbiAgLS1pb24tY29sb3ItZGV0YWlscyAgICAgICAgICAgICA6ICM5YTE0MTk7XG4gIC0taW9uLWNvbG9yLWRldGFpbHMtcmdiICAgICAgICAgOiAxNTQsIDIwLCAyNTtcbiAgLS1pb24tY29sb3ItZGV0YWlscy1jb250cmFzdCAgICA6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLWRldGFpbHMtY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1kZXRhaWxzLXNoYWRlICAgICAgIDogIzgzMTExNTtcbiAgLS1pb24tY29sb3ItZGV0YWlscy10aW50ICAgICAgICA6ICM3NTEyMTU7XG5cbiAgLyoqIGRhbmdlciAqKi9cbiAgLS1pb24tY29sb3ItZGFuZ2VyICAgICAgICAgICAgIDogI2YwNDE0MTtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXJnYiAgICAgICAgIDogMjQ1LCA2MSwgNjE7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1jb250cmFzdCAgICA6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1zaGFkZSAgICAgICA6ICNkMzM5Mzk7XG4gIC0taW9uLWNvbG9yLWRhbmdlci10aW50ICAgICAgICA6ICNmMjU0NTQ7XG5cbiAgLyoqIGRhcmsgKiovXG4gIC0taW9uLWNvbG9yLWRhcmsgICAgICAgICAgICAgOiAjMjIyNDI4O1xuICAtLWlvbi1jb2xvci1kYXJrLXJnYiAgICAgICAgIDogMzQsIDM0LCAzNDtcbiAgLS1pb24tY29sb3ItZGFyay1jb250cmFzdCAgICA6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLWRhcmstY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1kYXJrLXNoYWRlICAgICAgIDogIzFlMjAyMztcbiAgLS1pb24tY29sb3ItZGFyay10aW50ICAgICAgICA6ICMzODNhM2U7XG5cbiAgLyoqIG1lZGl1bSAqKi9cbiAgLS1pb24tY29sb3ItbWVkaXVtICAgICAgICAgICAgIDogIzk4OWFhMjtcbiAgLS1pb24tY29sb3ItbWVkaXVtLXJnYiAgICAgICAgIDogMTUyLCAxNTQsIDE2MjtcbiAgLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0ICAgIDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlICAgICAgIDogIzg2ODg4ZjtcbiAgLS1pb24tY29sb3ItbWVkaXVtLXRpbnQgICAgICAgIDogI2EyYTRhYjtcblxuICAvKiogbGlnaHQgKiovXG4gIC0taW9uLWNvbG9yLWxpZ2h0ICAgICAgICAgICAgIDogI2Y0ZjVmODtcbiAgLS1pb24tY29sb3ItbGlnaHQtcmdiICAgICAgICAgOiAyNDQsIDI0NCwgMjQ0O1xuICAtLWlvbi1jb2xvci1saWdodC1jb250cmFzdCAgICA6ICMwMDAwMDA7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0LXJnYjogMCwgMCwgMDtcbiAgLS1pb24tY29sb3ItbGlnaHQtc2hhZGUgICAgICAgOiAjZDdkOGRhO1xuICAtLWlvbi1jb2xvci1saWdodC10aW50ICAgICAgICA6ICNmNWY2Zjk7XG5cbiAgLyoqIHRyYW5zcGFyZW50ICoqL1xuICAtLWlvbi1jb2xvci10cmFuc3BhcmVudCAgICAgICAgICAgICA6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXRyYW5zcGFyZW50LXJnYiAgICAgICAgIDogMCwgMCwgMDtcbiAgLS1pb24tY29sb3ItdHJhbnNwYXJlbnQtY29udHJhc3QgICAgOiAjMTVjMzkzO1xuICAtLWlvbi1jb2xvci10cmFuc3BhcmVudC1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XG4gIC0taW9uLWNvbG9yLXRyYW5zcGFyZW50LXNoYWRlICAgICAgIDogIzE1YzM5MztcbiAgLS1pb24tY29sb3ItdHJhbnNwYXJlbnQtdGludCAgICAgICAgOiAjMTVjMzkzO1xuXG59XG5cbkBtaXhpbiBjcmVhdGVfaW9uaWNfY29sb3IoJG5hbWUpIHtcbiAgLmlvbi1jb2xvci0jeyRuYW1lfSB7XG4gICAgLS1pb24tY29sb3ItYmFzZTogdmFyKC0taW9uLWNvbG9yLSN7JG5hbWV9KTtcbiAgICAtLWlvbi1jb2xvci1iYXNlLXJnYjogdmFyKC0taW9uLWNvbG9yLSN7JG5hbWV9LXJnYik7XG4gICAgLS1pb24tY29sb3ItY29udHJhc3Q6IHZhcigtLWlvbi1jb2xvci0jeyRuYW1lfS1jb250cmFzdCk7XG4gICAgLS1pb24tY29sb3ItY29udHJhc3QtcmdiOiB2YXIoLS1pb24tY29sb3ItI3skbmFtZX0tY29udHJhc3QtcmdiKTtcbiAgICAtLWlvbi1jb2xvci1zaGFkZTogdmFyKC0taW9uLWNvbG9yLSN7JG5hbWV9LXNoYWRlKTtcbiAgICAtLWlvbi1jb2xvci10aW50OiB2YXIoLS1pb24tY29sb3ItI3skbmFtZX0tdGludCk7XG4gIH1cbn1cblxuQGluY2x1ZGUgY3JlYXRlX2lvbmljX2NvbG9yKCdkZXRhaWxzJyk7XG5AaW5jbHVkZSBjcmVhdGVfaW9uaWNfY29sb3IoJ2N1YXRlcm5hcnknKSIsIlxuQGltcG9ydCBcIi4uLy4uLy4uL3RoZW1lL3ZhcmlhYmxlcy5zY3NzXCI7XG5cbi50aXRsZXtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMzVweDtcbiAgICBwYWRkaW5nOiAxNnB4O1xufVxuXG5mb3JtLFxuaW9uLWJ1dHRvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBAbWVkaWEgKG1pbi13aWR0aDogJGlvbi1icmVhay1zbSkge1xuICAgIGlvbi1idXR0b24ge1xuICAgICAgd2lkdGg6IDUwJTtcbiAgICB9XG4gICAgd2lkdGg6IDc1JTtcbiAgfVxuICBAbWVkaWEgKG1pbi13aWR0aDogJGlvbi1icmVhay14bCkge1xuICAgIHdpZHRoOiA1MCU7XG4gIH1cbn1cblxuXG5mb3Jte1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHBhZGRpbmc6IDAgMzBweDtcbiAgXG4gICAgLmJ1dHRvbi1zZW5kIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIG1hcmdpbjogMzBweCAwIDAgMDtcbiAgICAgIHBhZGRpbmc6IDAgMTZweDtcbiAgICB9XG59XG5cbi5iYWNrLWxvZ2lue1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAzMCU7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiBhbGljZWJsdWU7XG4gIC0tYm9yZGVyLXdpZHRoOiAxcHg7XG4gIC0tYm9yZGVyLWNvbG9yOiBibGFjaztcbiAgLS1ib3JkZXItcmFkaXVzOiAyZXg7XG59Il19 */";
      /***/
    },

    /***/
    "./src/app/views/forget-password/forget-password.page.ts":
    /*!***************************************************************!*\
      !*** ./src/app/views/forget-password/forget-password.page.ts ***!
      \***************************************************************/

    /*! exports provided: ForgetPasswordPage */

    /***/
    function srcAppViewsForgetPasswordForgetPasswordPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForgetPasswordPage", function () {
        return ForgetPasswordPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _core_services_messages_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @core/services/messages.service */
      "./src/app/core/services/messages.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _core_services_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @core/services/login.service */
      "./src/app/core/services/login.service.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @fortawesome/free-solid-svg-icons */
      "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");

      var ForgetPasswordPage = /*#__PURE__*/function () {
        function ForgetPasswordPage(messages, router, loginService, alertController) {
          _classCallCheck(this, ForgetPasswordPage);

          this.messages = messages;
          this.router = router;
          this.loginService = loginService;
          this.alertController = alertController;
          this.icons = {
            email: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faEnvelope"]
          };
        }

        _createClass(ForgetPasswordPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "recoverPassword",
          value: function recoverPassword(event) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      if (event !== undefined) {
                        event.preventDefault();
                      }

                      _context.prev = 1;
                      _context.next = 4;
                      return this.messages.showSpinner();

                    case 4:
                      _context.next = 6;
                      return this.loginService.forgetPassword(this.email);

                    case 6:
                      _context.next = 8;
                      return this.messages.showToast('Correo enviado correctamente');

                    case 8:
                      _context.next = 10;
                      return this.alertController.create({
                        header: 'Restablecimiento de contraseña',
                        message: "Se ha enviado un correo electr\xF3nico a ".concat(this.email, ". Sigue las instrucciones para restablecer la contrase\xF1a."),
                        buttons: [{
                          text: 'Ok',
                          handler: function handler() {
                            _this.router.navigateByUrl('/login');
                          }
                        }]
                      });

                    case 10:
                      alert = _context.sent;
                      _context.next = 13;
                      return alert.present();

                    case 13:
                      _context.next = 18;
                      break;

                    case 15:
                      _context.prev = 15;
                      _context.t0 = _context["catch"](1);
                      console.error(_context.t0);

                    case 18:
                      _context.prev = 18;
                      _context.next = 21;
                      return this.messages.hideSpinner();

                    case 21:
                      this.email = null;
                      return _context.finish(18);

                    case 23:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this, [[1, 15, 18, 23]]);
            }));
          }
        }]);

        return ForgetPasswordPage;
      }();

      ForgetPasswordPage.ctorParameters = function () {
        return [{
          type: _core_services_messages_service__WEBPACK_IMPORTED_MODULE_2__["MessagesService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _core_services_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
        }];
      };

      ForgetPasswordPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-forget-password',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./forget-password.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/views/forget-password/forget-password.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./forget-password.page.scss */
        "./src/app/views/forget-password/forget-password.page.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_core_services_messages_service__WEBPACK_IMPORTED_MODULE_2__["MessagesService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _core_services_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]])], ForgetPasswordPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=views-forget-password-forget-password-module-es5.js.map