(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-pages-forms-button-start-form-button-start-form-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/forms/button-start-form/button-start-form.page.html":
    /*!***********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/forms/button-start-form/button-start-form.page.html ***!
      \***********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppViewsPagesFormsButtonStartFormButtonStartFormPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-header class=\"ion-text-capitalize\" [showBackButton]=\"false\" name=\"Categoria {{infoService.category}}\">\n  <ion-buttons start>\n    <ion-back-button defaultHref=\"/category-forms\" text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\n  </ion-buttons>\n</app-header>\n\n<ion-content>\n  <div class=\"button-start\" *ngIf=\"!infoService.done\">\n    <ion-button expand=\"block\" fill=\"outline\" shape=\"round\" size=\"large\" [routerLink]=\"['./fill-out']\">\n      Empezar encuesta\n    </ion-button>\n  </div>\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/views/pages/forms/button-start-form/button-start-form.module.ts":
    /*!*********************************************************************************!*\
      !*** ./src/app/views/pages/forms/button-start-form/button-start-form.module.ts ***!
      \*********************************************************************************/

    /*! exports provided: ButtonStartFormPageModule */

    /***/
    function srcAppViewsPagesFormsButtonStartFormButtonStartFormModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ButtonStartFormPageModule", function () {
        return ButtonStartFormPageModule;
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


      var app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! app/shared/shared.module */
      "./src/app/shared/shared.module.ts");
      /* harmony import */


      var _button_start_form_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./button-start-form.page */
      "./src/app/views/pages/forms/button-start-form/button-start-form.page.ts");

      var routes = [{
        path: '',
        component: _button_start_form_page__WEBPACK_IMPORTED_MODULE_5__["ButtonStartFormPage"]
      }];

      var ButtonStartFormPageModule = function ButtonStartFormPageModule() {
        _classCallCheck(this, ButtonStartFormPageModule);
      };

      ButtonStartFormPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
        declarations: [_button_start_form_page__WEBPACK_IMPORTED_MODULE_5__["ButtonStartFormPage"]]
      })], ButtonStartFormPageModule);
      /***/
    },

    /***/
    "./src/app/views/pages/forms/button-start-form/button-start-form.page.scss":
    /*!*********************************************************************************!*\
      !*** ./src/app/views/pages/forms/button-start-form/button-start-form.page.scss ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppViewsPagesFormsButtonStartFormButtonStartFormPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".button-start {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n}\n.button-start ion-button {\n  --background: var(--ion-color-primary);\n  color: var(--ion-color-primary-contrast);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZXMvZm9ybXMvYnV0dG9uLXN0YXJ0LWZvcm0vYnV0dG9uLXN0YXJ0LWZvcm0ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0FBQ0o7QUFDSTtFQUNJLHNDQUFBO0VBQ0Esd0NBQUE7QUFDUiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL2Zvcm1zL2J1dHRvbi1zdGFydC1mb3JtL2J1dHRvbi1zdGFydC1mb3JtLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idXR0b24tc3RhcnR7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGhlaWdodDogMTAwJTtcblxuICAgIGlvbi1idXR0b24ge1xuICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0ICk7XG4gICAgfVxufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/views/pages/forms/button-start-form/button-start-form.page.ts":
    /*!*******************************************************************************!*\
      !*** ./src/app/views/pages/forms/button-start-form/button-start-form.page.ts ***!
      \*******************************************************************************/

    /*! exports provided: ButtonStartFormPage */

    /***/
    function srcAppViewsPagesFormsButtonStartFormButtonStartFormPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ButtonStartFormPage", function () {
        return ButtonStartFormPage;
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _core_services_messages_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @core/services/messages.service */
      "./src/app/core/services/messages.service.ts");
      /* harmony import */


      var _core_services_firebase_app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @core/services/firebase-app.service */
      "./src/app/core/services/firebase-app.service.ts");
      /* harmony import */


      var _core_services_login_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @core/services/login.service */
      "./src/app/core/services/login.service.ts");
      /* harmony import */


      var app_shared_utils_functionsUtils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! app/shared/utils/functionsUtils */
      "./src/app/shared/utils/functionsUtils.ts");

      var ButtonStartFormPage = /*#__PURE__*/function () {
        function ButtonStartFormPage(activatedRoute, alertController, messages, firebaseAppService, navCtrl, loginService) {
          _classCallCheck(this, ButtonStartFormPage);

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
            done: null
          };
          this.checkForm();
        }

        _createClass(ButtonStartFormPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "checkForm",
          value: function checkForm() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this = this;

              var prueba;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.prev = 0;
                      _context2.next = 3;
                      return this.messages.showSpinner();

                    case 3:
                      this.infoService.dateToday = Object(app_shared_utils_functionsUtils__WEBPACK_IMPORTED_MODULE_7__["generateDateNow"])();
                      this.infoService.category = this.activatedRoute.snapshot.params.category;
                      this.infoService.uid = this.loginService.user.uid;
                      _context2.next = 8;
                      return this.firebaseAppService.getFormByID(this.infoService.category, Object(app_shared_utils_functionsUtils__WEBPACK_IMPORTED_MODULE_7__["generateDateNow"])(), this.infoService.uid);

                    case 8:
                      prueba = _context2.sent;
                      this.result = prueba.subscribe(function (res) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                          var r;
                          return regeneratorRuntime.wrap(function _callee$(_context) {
                            while (1) {
                              switch (_context.prev = _context.next) {
                                case 0:
                                  _context.next = 2;
                                  return res.payload.data();

                                case 2:
                                  r = _context.sent;
                                  this.infoService.done = r.info.done;

                                  if (!this.infoService.done) {
                                    _context.next = 7;
                                    break;
                                  }

                                  _context.next = 7;
                                  return this.showAlert('Esta encuesta ya ha sido realizada.', 'Aviso');

                                case 7:
                                  _context.next = 9;
                                  return this.ngOnDestroy();

                                case 9:
                                case "end":
                                  return _context.stop();
                              }
                            }
                          }, _callee, this);
                        }));
                      });
                      _context2.next = 19;
                      break;

                    case 12:
                      _context2.prev = 12;
                      _context2.t0 = _context2["catch"](0);
                      console.error(_context2.t0);
                      _context2.next = 17;
                      return this.messages.hideSpinner();

                    case 17:
                      _context2.next = 19;
                      return this.showAlert('Se ha producido un error.', 'Error');

                    case 19:
                      _context2.prev = 19;
                      _context2.next = 22;
                      return this.messages.hideSpinner();

                    case 22:
                      return _context2.finish(19);

                    case 23:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this, [[0, 12, 19, 23]]);
            }));
          }
          /**
           * Mostrar mensaje de error
           * @param message mensaje de error
           */

        }, {
          key: "showAlert",
          value: function showAlert(message, header) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this2 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.alertController.create({
                        cssClass: 'alert-error',
                        header: header,
                        message: message,
                        backdropDismiss: false,
                        buttons: [{
                          text: 'Atrás',
                          cssClass: 'secondary',
                          handler: function handler() {
                            _this2.navCtrl.back();
                          }
                        }]
                      });

                    case 2:
                      alert = _context3.sent;
                      _context3.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.result.unsubscribe();
          }
        }]);

        return ButtonStartFormPage;
      }();

      ButtonStartFormPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
        }, {
          type: _core_services_messages_service__WEBPACK_IMPORTED_MODULE_4__["MessagesService"]
        }, {
          type: _core_services_firebase_app_service__WEBPACK_IMPORTED_MODULE_5__["FirebaseAppService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
        }, {
          type: _core_services_login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"]
        }];
      };

      ButtonStartFormPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-button-start-form',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./button-start-form.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/forms/button-start-form/button-start-form.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./button-start-form.page.scss */
        "./src/app/views/pages/forms/button-start-form/button-start-form.page.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], _core_services_messages_service__WEBPACK_IMPORTED_MODULE_4__["MessagesService"], _core_services_firebase_app_service__WEBPACK_IMPORTED_MODULE_5__["FirebaseAppService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _core_services_login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"]])], ButtonStartFormPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=views-pages-forms-button-start-form-button-start-form-module-es5.js.map