(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-pages-contest-draw-take-part-take-part-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/contest-draw/take-part/take-part.page.html":
    /*!**************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/contest-draw/take-part/take-part.page.html ***!
      \**************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppViewsPagesContestDrawTakePartTakePartPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-header [showBackButton]=\"false\" name=\"Concursos-sorteos\">\n  <ion-buttons start>\n    <ion-back-button defaultHref=\"/contest-draw\" text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\n  </ion-buttons>\n</app-header>\n\n<ion-content>\n  <ng-container *ngIf=\"data != null\">\n    <ion-card>\n      <img [src]=\"data.img\" />-\n      <ion-card-header>\n        <ion-card-title>{{data.title}}</ion-card-title>\n      </ion-card-header>\n      <ion-card-content> {{data.info }}</ion-card-content>\n    </ion-card>\n    <br>\n\n    <div class=\"take-part\">\n      <ng-container [ngSwitch]=\"participated\">\n        <ion-button *ngSwitchCase=\"true\" expand=\"block\" shape=\"round\" disabled=\"true\">Ya has participado</ion-button>\n        <ion-button *ngSwitchCase=\"false\" (click)=\"takePartDraw()\" expand=\"block\" shape=\"round\">PARTICIPAR</ion-button>\n      </ng-container>\n    </div>\n  </ng-container>\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/views/pages/contest-draw/take-part/take-part.module.ts":
    /*!************************************************************************!*\
      !*** ./src/app/views/pages/contest-draw/take-part/take-part.module.ts ***!
      \************************************************************************/

    /*! exports provided: TakePartPageModule */

    /***/
    function srcAppViewsPagesContestDrawTakePartTakePartModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TakePartPageModule", function () {
        return TakePartPageModule;
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


      var _take_part_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./take-part.page */
      "./src/app/views/pages/contest-draw/take-part/take-part.page.ts");
      /* harmony import */


      var app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! app/shared/shared.module */
      "./src/app/shared/shared.module.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var routes = [{
        path: '',
        component: _take_part_page__WEBPACK_IMPORTED_MODULE_3__["TakePartPage"]
      }];

      var TakePartPageModule = function TakePartPageModule() {
        _classCallCheck(this, TakePartPageModule);
      };

      TakePartPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes)],
        declarations: [_take_part_page__WEBPACK_IMPORTED_MODULE_3__["TakePartPage"]]
      })], TakePartPageModule);
      /***/
    },

    /***/
    "./src/app/views/pages/contest-draw/take-part/take-part.page.scss":
    /*!************************************************************************!*\
      !*** ./src/app/views/pages/contest-draw/take-part/take-part.page.scss ***!
      \************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppViewsPagesContestDrawTakePartTakePartPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".take-part {\n  display: flex;\n  justify-content: center;\n}\n.take-part ion-button {\n  --background: var(--ion-color-secondary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZXMvY29udGVzdC1kcmF3L3Rha2UtcGFydC90YWtlLXBhcnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0FBQ0o7QUFDSTtFQUNJLHdDQUFBO0FBQ1IiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9wYWdlcy9jb250ZXN0LWRyYXcvdGFrZS1wYXJ0L3Rha2UtcGFydC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFrZS1wYXJ0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gICAgfVxufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/views/pages/contest-draw/take-part/take-part.page.ts":
    /*!**********************************************************************!*\
      !*** ./src/app/views/pages/contest-draw/take-part/take-part.page.ts ***!
      \**********************************************************************/

    /*! exports provided: TakePartPage */

    /***/
    function srcAppViewsPagesContestDrawTakePartTakePartPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TakePartPage", function () {
        return TakePartPage;
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


      var _core_services_firebase_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @core/services/firebase-app.service */
      "./src/app/core/services/firebase-app.service.ts");
      /* harmony import */


      var _core_services_messages_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @core/services/messages.service */
      "./src/app/core/services/messages.service.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var app_shared_utils_functionsUtils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! app/shared/utils/functionsUtils */
      "./src/app/shared/utils/functionsUtils.ts");

      var TakePartPage = /*#__PURE__*/function () {
        function TakePartPage(activatedRoute, firebaseAppService, messages, alertController, navCtrl) {
          _classCallCheck(this, TakePartPage);

          this.activatedRoute = activatedRoute;
          this.firebaseAppService = firebaseAppService;
          this.messages = messages;
          this.alertController = alertController;
          this.navCtrl = navCtrl;
          this.data = null;
          this.participated = false;
          this.user = {
            winner: false,
            email: null,
            uid: null
          };
          this.getInfo();
        }

        _createClass(TakePartPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
          /**
           * OBTENER DATOS DEL SORTEO SELECCIONADO
           */

        }, {
          key: "getInfo",
          value: function getInfo() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this = this;

              var res;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.prev = 0;
                      _context2.next = 3;
                      return this.messages.showSpinner();

                    case 3:
                      _context2.next = 5;
                      return this.firebaseAppService.getDataUniqueDraw(Object(app_shared_utils_functionsUtils__WEBPACK_IMPORTED_MODULE_6__["generateDateNow"])(), this.activatedRoute.snapshot.params.id);

                    case 5:
                      res = _context2.sent;
                      _context2.next = 8;
                      return res.subscribe(function (d) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                          return regeneratorRuntime.wrap(function _callee$(_context) {
                            while (1) {
                              switch (_context.prev = _context.next) {
                                case 0:
                                  _context.next = 2;
                                  return d.payload.data();

                                case 2:
                                  this.data = _context.sent;
                                  this.participated = this.data.participated ? this.data.participated : false;

                                case 4:
                                case "end":
                                  return _context.stop();
                              }
                            }
                          }, _callee, this);
                        }));
                      });

                    case 8:
                      this.result = _context2.sent;
                      _context2.next = 16;
                      break;

                    case 11:
                      _context2.prev = 11;
                      _context2.t0 = _context2["catch"](0);
                      console.error(_context2.t0);
                      _context2.next = 16;
                      return this.messages.hideSpinner();

                    case 16:
                      _context2.prev = 16;
                      _context2.next = 19;
                      return this.messages.hideSpinner();

                    case 19:
                      return _context2.finish(16);

                    case 20:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this, [[0, 11, 16, 20]]);
            }));
          }
          /**
           * APUNTARSE A UN SORTEO
           */

        }, {
          key: "takePartDraw",
          value: function takePartDraw() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this2 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: 'Aviso',
                        message: '¿Está seguro que desea participar en el sorteo?',
                        backdropDismiss: false,
                        buttons: [{
                          text: 'Cancelar'
                        }, {
                          text: 'Aceptar',
                          handler: function handler() {
                            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                                while (1) {
                                  switch (_context3.prev = _context3.next) {
                                    case 0:
                                      _context3.prev = 0;
                                      _context3.next = 3;
                                      return this.messages.showSpinner('Cargando...');

                                    case 3:
                                      this.data.participated = true;
                                      _context3.next = 6;
                                      return this.firebaseAppService.updateParticiped(Object(app_shared_utils_functionsUtils__WEBPACK_IMPORTED_MODULE_6__["generateDateNow"])(), this.activatedRoute.snapshot.params.id, this.data);

                                    case 6:
                                      _context3.next = 8;
                                      return this.firebaseAppService.takePartOnlyDraw(Object(app_shared_utils_functionsUtils__WEBPACK_IMPORTED_MODULE_6__["generateDateNow"])(), this.activatedRoute.snapshot.params.id);

                                    case 8:
                                      _context3.next = 10;
                                      return this.messages.showToast('Su participación se ha realizado con éxito');

                                    case 10:
                                      this.navCtrl.back();
                                      _context3.next = 18;
                                      break;

                                    case 13:
                                      _context3.prev = 13;
                                      _context3.t0 = _context3["catch"](0);
                                      console.error(_context3.t0);
                                      _context3.next = 18;
                                      return this.messages.hideSpinner();

                                    case 18:
                                      _context3.prev = 18;
                                      _context3.next = 21;
                                      return this.messages.hideSpinner();

                                    case 21:
                                      return _context3.finish(18);

                                    case 22:
                                    case "end":
                                      return _context3.stop();
                                  }
                                }
                              }, _callee3, this, [[0, 13, 18, 22]]);
                            }));
                          }
                        }]
                      });

                    case 2:
                      alert = _context4.sent;
                      _context4.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.result.unsubscribe(); // this.checking.unsubscribe();
          }
        }]);

        return TakePartPage;
      }();

      TakePartPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _core_services_firebase_app_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseAppService"]
        }, {
          type: _core_services_messages_service__WEBPACK_IMPORTED_MODULE_4__["MessagesService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]
        }];
      };

      TakePartPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-take-part',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./take-part.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/contest-draw/take-part/take-part.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./take-part.page.scss */
        "./src/app/views/pages/contest-draw/take-part/take-part.page.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _core_services_firebase_app_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseAppService"], _core_services_messages_service__WEBPACK_IMPORTED_MODULE_4__["MessagesService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]])], TakePartPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=views-pages-contest-draw-take-part-take-part-module-es5.js.map