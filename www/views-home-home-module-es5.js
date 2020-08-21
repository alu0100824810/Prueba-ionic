(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-home-home-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/views/home/home.page.html":
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/home/home.page.html ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppViewsHomeHomePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n<app-sidebar-menu #menu></app-sidebar-menu>\n\n<ion-tabs>\n  <ion-tab-bar slot=\"bottom\">\n    <ion-tab-button tab=\"news\">\n      <fa-icon [icon]=\"icons.newspaper\"></fa-icon>\n      <ion-label>Noticias</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"matches\">\n      <fa-icon [icon]=\"icons.matches\"></fa-icon>\n      <ion-label>Partidos</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"team\">\n      <fa-icon [icon]=\"icons.team\"></fa-icon>\n      <ion-label>Equipo</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button (click)=\"openSideBar()\">\n      <fa-icon [icon]=\"icons.more\"></fa-icon>\n      <ion-label>Más</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n</ion-tabs>";
      /***/
    },

    /***/
    "./src/app/views/home/home.module.ts":
    /*!*******************************************!*\
      !*** ./src/app/views/home/home.module.ts ***!
      \*******************************************/

    /*! exports provided: HomePageModule */

    /***/
    function srcAppViewsHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
        return HomePageModule;
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


      var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./home.page */
      "./src/app/views/home/home.page.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! app/shared/shared.module */
      "./src/app/shared/shared.module.ts");

      var routes = [{
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"],
        children: [{
          path: '',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | app-views-pages-news-news-module */
            "app-views-pages-news-news-module").then(__webpack_require__.bind(null,
            /*! app/views/pages/news/news.module */
            "./src/app/views/pages/news/news.module.ts")).then(function (m) {
              return m.NewsPageModule;
            });
          }
        }, {
          path: 'team',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | app-views-pages-team-team-module */
            "app-views-pages-team-team-module").then(__webpack_require__.bind(null,
            /*! app/views/pages/team/team.module */
            "./src/app/views/pages/team/team.module.ts")).then(function (m) {
              return m.TeamPageModule;
            });
          }
        }, {
          path: 'news',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | app-views-pages-news-news-module */
            "app-views-pages-news-news-module").then(__webpack_require__.bind(null,
            /*! app/views/pages/news/news.module */
            "./src/app/views/pages/news/news.module.ts")).then(function (m) {
              return m.NewsPageModule;
            });
          }
        }]
      }];

      var HomePageModule = function HomePageModule() {
        _classCallCheck(this, HomePageModule);
      };

      HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]]
      })], HomePageModule);
      /***/
    },

    /***/
    "./src/app/views/home/home.page.scss":
    /*!*******************************************!*\
      !*** ./src/app/views/home/home.page.scss ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function srcAppViewsHomeHomePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "@charset \"UTF-8\";\nion-tab-bar {\n  --background: var(--ion-color-primary);\n  --color: var(--ion-color-primary-contrast );\n}\nion-tab-button {\n  --color-selected: var(--ion-color-primary-contrast );\n}\n/**\n* TODO: FIX COLOR DEL BOTON DE ATRÁS HEADER - REVISAR\n*/\nion-back-button {\n  --color: var(--ion-color-primary-contrast ) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFDaEI7RUFDRSxzQ0FBQTtFQUNBLDJDQUFBO0FBQ0Y7QUFFQTtFQUNFLG9EQUFBO0FBQ0Y7QUFFQTs7Q0FBQTtBQUdBO0VBQ0Usc0RBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmlvbi10YWItYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0ICk7XG59XG5cbmlvbi10YWItYnV0dG9uIHtcbiAgLS1jb2xvci1zZWxlY3RlZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QgKTtcbn1cblxuLyoqXG4qIFRPRE86IEZJWCBDT0xPUiBERUwgQk9UT04gREUgQVRSw4FTIEhFQURFUiAtIFJFVklTQVJcbiovXG5pb24tYmFjay1idXR0b24ge1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdCApICFpbXBvcnRhbnQ7XG59XG5cblxuXG5cbiJdfQ== */";
      /***/
    },

    /***/
    "./src/app/views/home/home.page.ts":
    /*!*****************************************!*\
      !*** ./src/app/views/home/home.page.ts ***!
      \*****************************************/

    /*! exports provided: HomePage */

    /***/
    function srcAppViewsHomeHomePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePage", function () {
        return HomePage;
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


      var _core_services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @core/services/login.service */
      "./src/app/core/services/login.service.ts");
      /* harmony import */


      var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @fortawesome/free-solid-svg-icons */
      "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
      /* harmony import */


      var app_shared_components_sidebar_menu_sidebar_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! app/shared/components/sidebar-menu/sidebar-menu.component */
      "./src/app/shared/components/sidebar-menu/sidebar-menu.component.ts");
      /* harmony import */


      var _ionic_native_ibeacon_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/ibeacon/ngx */
      "./node_modules/@ionic-native/ibeacon/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic-native/diagnostic/ngx */
      "./node_modules/@ionic-native/diagnostic/__ivy_ngcc__/ngx/index.js");

      var HomePage = /*#__PURE__*/function () {
        function HomePage(loginService, ibeacon, alertController, diagnostic) {
          _classCallCheck(this, HomePage);

          this.loginService = loginService;
          this.ibeacon = ibeacon;
          this.alertController = alertController;
          this.diagnostic = diagnostic;
          this.icons = {
            newspaper: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faNewspaper"],
            matches: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faCalendarAlt"],
            team: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faUsers"],
            more: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faEllipsisH"]
          };
        }

        _createClass(HomePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.ibeacon.requestAlwaysAuthorization(); // ! Request permission to use location on iOS

            this.ibeacon.isBluetoothEnabled().then( // ! COMPRUEBA SI EL BLUEETOOTH ESTÁ DESACTIVADO
            // ! COMPRUEBA SI EL BLUEETOOTH ESTÁ DESACTIVADO
            function (statusBluetooth) {
              _this.diagnostic.isLocationAvailable().then(function (statusLocation) {
                if (!statusBluetooth && !statusLocation) {
                  _this.showAlert('El Bluetooth y la localización del móvil están desactivados. Para poder interectuar con los Beacons, es necesario activarlos. Por favor, vaya Ajustes y actívelos.');
                } else if (statusBluetooth && !statusLocation) {
                  _this.showAlert('La Localización está desactivada. Para poder interectuar con los Beacons, es necesario activarla. Por favor, vaya Ajustes y actívela.');
                } else if (!statusBluetooth && statusLocation) {
                  _this.showAlert('El Bluetooth está desactivado. Para poder interectuar con los Beacons, es necesario activarlo. Por favor, vaya Ajustes y actívelo.');
                }
              });
            });
            var delegate = this.ibeacon.Delegate();
            console.log('DELEGATE !!', delegate); // Subscribe to some of the delegate's event handlers

            delegate.didRangeBeaconsInRegion().subscribe(function (data) {
              return console.log('didRangeBeaconsInRegion: ', data);
            }, function (error) {
              return console.error();
            });
            delegate.didStartMonitoringForRegion().subscribe(function (data) {
              return console.log('didStartMonitoringForRegion: ', data);
            }, function (error) {
              return console.error();
            });
            delegate.didEnterRegion().subscribe(function (data) {
              console.log('didEnterRegion: ', data);
            });
          }
          /**
           * Mostrar mensaje de alerta --> Localización desactivada - Bluetooth desactivado
           */

        }, {
          key: "showAlert",
          value: function showAlert(message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: 'Aviso',
                        message: message,
                        backdropDismiss: false,
                        buttons: ['OK']
                      });

                    case 2:
                      alert = _context.sent;
                      _context.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
          /**
           * Cerrar menu lateral
           */

        }, {
          key: "openSideBar",
          value: function openSideBar() {
            this.sideBar.openSideBar();
          }
        }]);

        return HomePage;
      }();

      HomePage.ctorParameters = function () {
        return [{
          type: _core_services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]
        }, {
          type: _ionic_native_ibeacon_ngx__WEBPACK_IMPORTED_MODULE_5__["IBeacon"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]
        }, {
          type: _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_7__["Diagnostic"]
        }];
      };

      HomePage.propDecorators = {
        sideBar: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['menu']
        }]
      };
      HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./home.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/views/home/home.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./home.page.scss */
        "./src/app/views/home/home.page.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_core_services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"], _ionic_native_ibeacon_ngx__WEBPACK_IMPORTED_MODULE_5__["IBeacon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"], _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_7__["Diagnostic"]])], HomePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=views-home-home-module-es5.js.map