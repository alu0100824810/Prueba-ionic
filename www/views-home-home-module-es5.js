(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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
    "./src/app/core/services/beacons.service.ts":
    /*!**************************************************!*\
      !*** ./src/app/core/services/beacons.service.ts ***!
      \**************************************************/

    /*! exports provided: BeaconsService */

    /***/
    function srcAppCoreServicesBeaconsServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BeaconsService", function () {
        return BeaconsService;
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


      var _ionic_native_ibeacon_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic-native/ibeacon/ngx */
      "./node_modules/@ionic-native/ibeacon/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _modal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./modal.service */
      "./src/app/core/services/modal.service.ts");
      /* harmony import */


      var _firebase_app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./firebase-app.service */
      "./src/app/core/services/firebase-app.service.ts");
      /* harmony import */


      var app_shared_utils_functionsUtils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! app/shared/utils/functionsUtils */
      "./src/app/shared/utils/functionsUtils.ts");
      /* harmony import */


      var _localNotification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./localNotification.service */
      "./src/app/core/services/localNotification.service.ts");

      var BeaconsService = /*#__PURE__*/function () {
        function BeaconsService(ibeacon, platform, modalService, firebaseService, localNotificationService) {
          _classCallCheck(this, BeaconsService);

          this.ibeacon = ibeacon;
          this.platform = platform;
          this.modalService = modalService;
          this.firebaseService = firebaseService;
          this.localNotificationService = localNotificationService;
        }
        /**
         * * Comprueba si se le permite acceder a localización
         * ! iOS es necesario, en Android no hace falta
         */


        _createClass(BeaconsService, [{
          key: "isEnabledLocation",
          value: function isEnabledLocation() {
            var _this = this;

            if (this.platform.is('ios' || false || false)) {
              this.ibeacon.requestAlwaysAuthorization();
              this.ibeacon.getAuthorizationStatus().then(function (res) {
                if (res.authorizationStatus === 'AuthorizationStatusDenied') {
                  _this.modalService.showModal('Aviso', 'La Localización está desactivada. Para poder interectuar con los Beacons, es necesario activarla. Por favor, vaya Ajustes > CDTenerife > Localización y actívela.');
                }
              });
            }
          }
          /**
           * * Comprueba que el Bluetooth está habilitado
           */

        }, {
          key: "isEnabledBluetooth",
          value: function isEnabledBluetooth() {
            var _this2 = this;

            this.ibeacon.isBluetoothEnabled().then(function (statusBluetooth) {
              if (!statusBluetooth) {
                _this2.modalService.showModal('Aviso', 'El Bluetooth está desactivado. Para poder interectuar con los Beacons, es necesario activarlo. Por favor, vaya Ajustes y actívelo.');
              }
            });
          }
          /**
           * * Comenzar a buscar beacons
           * - Crear nuevo delegado y lo registra con la capa activa
           */

        }, {
          key: "startSearchOfBeacons",
          value: function startSearchOfBeacons(beacon) {
            this.delegate = this.ibeacon.Delegate();
            this.controlAuthorizationStatus();
            this.rangeBeaconsInRegion();
            this.startMonitoringForRegion();
            this.enterRegion();
            var beaconRegion = this.ibeacon.BeaconRegion(beacon.identifier, beacon.uuid, beacon.major, beacon.minor, true);
            this.startMonitoringRegion(beaconRegion);
          }
          /**
           * Control del estado de autorización, se llamada cada vez q se modifica
           */

        }, {
          key: "controlAuthorizationStatus",
          value: function controlAuthorizationStatus() {
            var _this3 = this;

            this.delegate.didChangeAuthorizationStatus().subscribe(function (data) {
              console.log('🔆 didChangeAuthorizationStatus: ', data);

              _this3.isEnabledLocation();
            }, function (error) {
              return console.error(error);
            });
          }
          /**
           * Cuando se detecta un beacon cualquiera dentro de la región.
           */

        }, {
          key: "rangeBeaconsInRegion",
          value: function rangeBeaconsInRegion() {
            this.delegate.didRangeBeaconsInRegion().subscribe(function (data) {
              return console.log('🔆  didRangeBeaconsInRegion: ', data);
            }, // ! a veces entra y otras veces pasa
            // ! a veces entra y otras veces pasa
            function (error) {
              return console.error(error);
            });
          }
          /**
           * Cuando el dispositivo comienza a monitorear una región.
           */

        }, {
          key: "startMonitoringForRegion",
          value: function startMonitoringForRegion() {
            this.delegate.didStartMonitoringForRegion().subscribe(function (data) {
              return console.log('🔆  didStartMonitoringForRegion: ', data);
            }, function (error) {
              return console.error(error);
            });
          }
          /**
           * * El dispositivo entra en la región solicitó monitorear.
           */

        }, {
          key: "enterRegion",
          value: function enterRegion() {
            var _this4 = this;

            this.delegate.didEnterRegion().subscribe(function (data) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this4, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        console.log('🔆  didEnterRegion: ', data);
                        _context.next = 3;
                        return this.sendNotification(data);

                      case 3:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, this);
              }));
            });
          }
          /**
           * * Comienza a monitorear una región especificada.
           */

        }, {
          key: "startMonitoringRegion",
          value: function startMonitoringRegion(beacon) {
            this.ibeacon.startMonitoringForRegion(beacon).then(function () {
              return console.log(' 🔆  Native layer received the request to monitoring');
            }, function (error) {
              return console.error('Native layer failed to begin monitoring: ', error);
            });
          }
          /**
           * * Parar de monitorear una región especificada.
           */

        }, {
          key: "stopMonitoringRegion",
          value: function stopMonitoringRegion(region) {
            this.ibeacon.stopMonitoringForRegion(region);
          }
          /**
           * Enviar notificación dependiendo del tipo de beacon
           * @param data datos del beacon
           */

        }, {
          key: "sendNotification",
          value: function sendNotification(data) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this5 = this;

              var res1, res2, res4;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.t0 = data.region.minor;
                      _context3.next = _context3.t0 === 1 ? 3 : _context3.t0 === 2 ? 8 : _context3.t0 === 3 ? 13 : _context3.t0 === 4 ? 16 : 21;
                      break;

                    case 3:
                      _context3.next = 5;
                      return this.firebaseService.getFoodOffer(Object(app_shared_utils_functionsUtils__WEBPACK_IMPORTED_MODULE_6__["generateDateNow"])());

                    case 5:
                      res1 = _context3.sent;
                      this.notifications(res1, 1, true);
                      return _context3.abrupt("break", 22);

                    case 8:
                      _context3.next = 10;
                      return this.firebaseService.getShopTicketsOffer(Object(app_shared_utils_functionsUtils__WEBPACK_IMPORTED_MODULE_6__["generateDateNow"])());

                    case 10:
                      res2 = _context3.sent;
                      this.notifications(res2, 2, true);
                      return _context3.abrupt("break", 22);

                    case 13:
                      _context3.next = 15;
                      return this.firebaseService.getDataContestDrawForNotification(Object(app_shared_utils_functionsUtils__WEBPACK_IMPORTED_MODULE_6__["generateDateNow"])()).then(function (res) {
                        res.subscribe(function (d) {
                          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this5, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                            return regeneratorRuntime.wrap(function _callee2$(_context2) {
                              while (1) {
                                switch (_context2.prev = _context2.next) {
                                  case 0:
                                    this.localNotificationService.activateListen(d.payload.data(), true, 3);
                                    this.localNotificationService.customButtons(d.payload.data().buttonsNotification);
                                    this.localNotificationService.showNotification(d.payload.data());

                                  case 3:
                                  case "end":
                                    return _context2.stop();
                                }
                              }
                            }, _callee2, this);
                          }));
                        });
                      });

                    case 15:
                      return _context3.abrupt("break", 22);

                    case 16:
                      _context3.next = 18;
                      return this.firebaseService.getPolls(Object(app_shared_utils_functionsUtils__WEBPACK_IMPORTED_MODULE_6__["generateDateNow"])());

                    case 18:
                      res4 = _context3.sent;
                      this.notifications(res4, 4, true);
                      return _context3.abrupt("break", 22);

                    case 21:
                      return _context3.abrupt("break", 22);

                    case 22:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
          /**
           * Configuraciones
           * @param result resultados de las peticiones
           * @param typeBeacon tipo de beacon
           * @param firebase uso de firebase, mostra dato en la notificación de la BBDD
           */

        }, {
          key: "notifications",
          value: function notifications(result, typeBeacon, firebase) {
            var _this6 = this;

            var data = [];
            result.subscribe(function (d) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this6, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                var num;
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                  while (1) {
                    switch (_context4.prev = _context4.next) {
                      case 0:
                        d.forEach(function (item) {
                          data.push(item.payload.doc.data());
                        });
                        num = Object(app_shared_utils_functionsUtils__WEBPACK_IMPORTED_MODULE_6__["generateRandomNumber"])(data.length);
                        this.localNotificationService.activateListen(data[num], true, typeBeacon);
                        this.localNotificationService.customButtons(data[num].buttonsNotification);
                        this.localNotificationService.showNotification(data[num]);

                      case 5:
                      case "end":
                        return _context4.stop();
                    }
                  }
                }, _callee4, this);
              }));
            });
          }
        }]);

        return BeaconsService;
      }();

      BeaconsService.ctorParameters = function () {
        return [{
          type: _ionic_native_ibeacon_ngx__WEBPACK_IMPORTED_MODULE_2__["IBeacon"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
        }, {
          type: _modal_service__WEBPACK_IMPORTED_MODULE_4__["ModalService"]
        }, {
          type: _firebase_app_service__WEBPACK_IMPORTED_MODULE_5__["FirebaseAppService"]
        }, {
          type: _localNotification_service__WEBPACK_IMPORTED_MODULE_7__["LocalNotificationService"]
        }];
      };

      BeaconsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_native_ibeacon_ngx__WEBPACK_IMPORTED_MODULE_2__["IBeacon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"], _modal_service__WEBPACK_IMPORTED_MODULE_4__["ModalService"], _firebase_app_service__WEBPACK_IMPORTED_MODULE_5__["FirebaseAppService"], _localNotification_service__WEBPACK_IMPORTED_MODULE_7__["LocalNotificationService"]])], BeaconsService);
      /***/
    },

    /***/
    "./src/app/core/services/localNotification.service.ts":
    /*!************************************************************!*\
      !*** ./src/app/core/services/localNotification.service.ts ***!
      \************************************************************/

    /*! exports provided: LocalNotificationService */

    /***/
    function srcAppCoreServicesLocalNotificationServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LocalNotificationService", function () {
        return LocalNotificationService;
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


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @capacitor/core */
      "./node_modules/@capacitor/core/dist/esm/index.js");
      /* harmony import */


      var _firebase_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./firebase-app.service */
      "./src/app/core/services/firebase-app.service.ts");

      var LocalNotifications = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"].LocalNotifications;

      var LocalNotificationService = /*#__PURE__*/function () {
        function LocalNotificationService(firebaseAppService) {
          _classCallCheck(this, LocalNotificationService);

          this.firebaseAppService = firebaseAppService;
        }
        /**
         *  Solicitar permiso de notificaciones
         * ! Revisar en Android
         */


        _createClass(LocalNotificationService, [{
          key: "isEnabledNotifications",
          value: function isEnabledNotifications() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return LocalNotifications.requestPermission();

                    case 2:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5);
            }));
          }
          /**
           * Crear botones personalizados.
           * @param buttonsData datos de los botones
           */

        }, {
          key: "customButtons",
          value: function customButtons(buttonsData) {
            LocalNotifications.registerActionTypes(buttonsData);
          }
          /**
           * Activar escucha (Listen)
           * @param firebase si va hacer una petición a la BBDD
           * @param data datos
           */

        }, {
          key: "activateListen",
          value: function activateListen(data, firebase, type) {
            var _this7 = this;

            LocalNotifications.addListener('localNotificationActionPerformed', function (notification) {
              console.log('Pulsar: ', notification.actionId);

              if (notification.actionId === 'view' && firebase) {
                // TODO: ENVIAR DATOS A FIREBASE, PARA QUE CUANDO SE CARGUE LA PAGINA YA ESTÉ CARGADO LOS DATOS
                _this7.firebaseAppService.requestsFromLocalNotification(data, type);

                _this7.removeAllListen();
              }

              if (notification.actionId === 'view' && !firebase) {// this.router.navigateByUrl(`/${route}`);
                //  this.removeAllListen();
              }
            });
          }
          /**
           * Eliminar TODOS los escuchas (Listen)
           */

        }, {
          key: "removeAllListen",
          value: function removeAllListen() {
            LocalNotifications.removeAllListeners();
          }
          /**
           * Mostrar notificación
           * @param datos de notificación
           */

        }, {
          key: "showNotification",
          value: function showNotification(data) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.next = 2;
                      return LocalNotifications.schedule({
                        notifications: [{
                          title: data.title,
                          body: data.message,
                          id: 1,
                          actionTypeId: data.buttonsNotification.types[0].id,
                          attachments: [{
                            id: 'face',
                            url: "res://public/assets/notifications/".concat(data.type, ".jpg")
                          }]
                        }]
                      });

                    case 2:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6);
            }));
          }
        }]);

        return LocalNotificationService;
      }();

      LocalNotificationService.ctorParameters = function () {
        return [{
          type: _firebase_app_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseAppService"]
        }];
      };

      LocalNotificationService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_firebase_app_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseAppService"]])], LocalNotificationService);
      /***/
    },

    /***/
    "./src/app/core/services/modal.service.ts":
    /*!************************************************!*\
      !*** ./src/app/core/services/modal.service.ts ***!
      \************************************************/

    /*! exports provided: ModalService */

    /***/
    function srcAppCoreServicesModalServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModalService", function () {
        return ModalService;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

      var ModalService = /*#__PURE__*/function () {
        function ModalService(alertController) {
          _classCallCheck(this, ModalService);

          this.alertController = alertController;
        }
        /**
         * Mostrar modal
         * @param header título de la cabecera del modal
         * @param message mensaje del modal
         */


        _createClass(ModalService, [{
          key: "showModal",
          value: function showModal(header, message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var alert;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      _context7.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: header,
                        message: message,
                        backdropDismiss: false,
                        buttons: ['OK']
                      });

                    case 2:
                      alert = _context7.sent;
                      _context7.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          }
        }]);

        return ModalService;
      }();

      ModalService.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
        }];
      };

      ModalService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])], ModalService);
      /***/
    },

    /***/
    "./src/app/shared/mock/beacons.mock.json":
    /*!***********************************************!*\
      !*** ./src/app/shared/mock/beacons.mock.json ***!
      \***********************************************/

    /*! exports provided: 0, 1, 2, 3, default */

    /***/
    function srcAppSharedMockBeaconsMockJson(module) {
      module.exports = JSON.parse("[{\"identifier\":\"Beacon Popular-Comida\",\"uuid\":\"B9407F30-F5F8-466E-AFF9-25556B57FE6D\",\"major\":1,\"minor\":1},{\"identifier\":\"Beacon Popular-Entradas-Tienda\",\"uuid\":\"B9407F30-F5F8-466E-AFF9-25556B57FE6A\",\"major\":1,\"minor\":2},{\"identifier\":\"Beacon Popular-Concursos-Sorteos\",\"uuid\":\"B9407F30-F5F8-466E-AFF9-25556B57FE6B\",\"major\":1,\"minor\":3},{\"identifier\":\"Beacon Popular-Encuestas\",\"uuid\":\"B9407F30-F5F8-466E-AFF9-25556B57FE6C\",\"major\":1,\"minor\":4}]");
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


      var _core_services_beacons_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @core/services/beacons.service */
      "./src/app/core/services/beacons.service.ts");
      /* harmony import */


      var _core_services_localNotification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @core/services/localNotification.service */
      "./src/app/core/services/localNotification.service.ts");
      /* harmony import */


      var app_shared_mock_beacons_mock_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! app/shared/mock/beacons.mock.json */
      "./src/app/shared/mock/beacons.mock.json");

      var app_shared_mock_beacons_mock_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(
      /*! app/shared/mock/beacons.mock.json */
      "./src/app/shared/mock/beacons.mock.json", 1);

      var HomePage = /*#__PURE__*/function () {
        function HomePage(loginService, beaconService, localNotificationService) {
          _classCallCheck(this, HomePage);

          this.loginService = loginService;
          this.beaconService = beaconService;
          this.localNotificationService = localNotificationService;
          this.icons = {
            newspaper: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faNewspaper"],
            matches: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faCalendarAlt"],
            team: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faUsers"],
            more: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faEllipsisH"]
          };
          this.beacons = app_shared_mock_beacons_mock_json__WEBPACK_IMPORTED_MODULE_7__;
        }

        _createClass(HomePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              var _this8 = this;

              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      _context9.next = 2;
                      return this.beaconService.isEnabledLocation();

                    case 2:
                      _context9.next = 4;
                      return this.beaconService.isEnabledBluetooth();

                    case 4:
                      _context9.next = 6;
                      return this.localNotificationService.isEnabledNotifications();

                    case 6:
                      _context9.next = 8;
                      return this.beacons.forEach(function (item) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this8, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
                          return regeneratorRuntime.wrap(function _callee8$(_context8) {
                            while (1) {
                              switch (_context8.prev = _context8.next) {
                                case 0:
                                  _context8.next = 2;
                                  return this.beaconService.startSearchOfBeacons(item);

                                case 2:
                                case "end":
                                  return _context8.stop();
                              }
                            }
                          }, _callee8, this);
                        }));
                      });

                    case 8:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
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
          type: _core_services_beacons_service__WEBPACK_IMPORTED_MODULE_5__["BeaconsService"]
        }, {
          type: _core_services_localNotification_service__WEBPACK_IMPORTED_MODULE_6__["LocalNotificationService"]
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
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_core_services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"], _core_services_beacons_service__WEBPACK_IMPORTED_MODULE_5__["BeaconsService"], _core_services_localNotification_service__WEBPACK_IMPORTED_MODULE_6__["LocalNotificationService"]])], HomePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=views-home-home-module-es5.js.map