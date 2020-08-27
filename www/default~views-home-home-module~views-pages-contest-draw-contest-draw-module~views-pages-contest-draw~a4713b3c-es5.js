(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~views-home-home-module~views-pages-contest-draw-contest-draw-module~views-pages-contest-draw~a4713b3c"], {
    /***/
    "./src/app/core/services/firebase-app.service.ts":
    /*!*******************************************************!*\
      !*** ./src/app/core/services/firebase-app.service.ts ***!
      \*******************************************************/

    /*! exports provided: FirebaseAppService */

    /***/
    function srcAppCoreServicesFirebaseAppServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FirebaseAppService", function () {
        return FirebaseAppService;
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


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
      /* harmony import */


      var _login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./login.service */
      "./src/app/core/services/login.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var app_shared_utils_functionsUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! app/shared/utils/functionsUtils */
      "./src/app/shared/utils/functionsUtils.ts");

      var FirebaseAppService = /*#__PURE__*/function () {
        function FirebaseAppService(firestore, loginService, router) {
          _classCallCheck(this, FirebaseAppService);

          this.firestore = firestore;
          this.loginService = loginService;
          this.router = router;
        }
        /**
         * OBTENER ENCUESTA
         * @param category categoria
         * @param date fecha
         * @param uidUser uid del usuario
         */


        _createClass(FirebaseAppService, [{
          key: "getFormByID",
          value: function getFormByID(category, date, uidUser) {
            var _this = this;

            return new Promise(function (resolve, reject) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var result;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.prev = 0;
                        _context.next = 3;
                        return this.firestore.collection('encuestas').doc("".concat(category)).collection("".concat(date)).doc("".concat(uidUser)).snapshotChanges();

                      case 3:
                        result = _context.sent;
                        resolve(result);
                        _context.next = 11;
                        break;

                      case 7:
                        _context.prev = 7;
                        _context.t0 = _context["catch"](0);
                        console.error(_context.t0);
                        reject(_context.t0);

                      case 11:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, this, [[0, 7]]);
              }));
            });
          }
          /**
           * ENVIAR RESPUESTA DE LA ENCUESTA
           */

        }, {
          key: "postFormAnswers",
          value: function postFormAnswers(category, date, uidUser, data) {
            var _this2 = this;

            return new Promise(function (resolve, reject) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        try {
                          this.firestore.collection('encuestas').doc("".concat(category)).collection("".concat(date)).doc("".concat(uidUser)).set(data);
                          resolve(true);
                        } catch (error) {
                          console.error(error);
                          reject(error);
                        }

                      case 1:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2, this);
              }));
            });
          }
          /**
           * OBTENER TODOS LOS SORTEOS
           * @param date fecha para filtrar los sorteos
           */

        }, {
          key: "getAllDraw",
          value: function getAllDraw(date) {
            var _this3 = this;

            return new Promise(function (resolve, reject) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                var result;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        try {
                          result = this.firestore.collection('concursos-sorteos').doc("".concat(date)).collection('sorteos').snapshotChanges();
                          resolve(result);
                        } catch (error) {
                          console.error(error);
                          reject(error);
                        }

                      case 1:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3, this);
              }));
            });
          }
        }, {
          key: "getAllDrawFilterByUser",
          value: function getAllDrawFilterByUser(date) {
            var _this4 = this;

            return new Promise(function (resolve, reject) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this4, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                var result;
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                  while (1) {
                    switch (_context4.prev = _context4.next) {
                      case 0:
                        try {
                          result = this.firestore.collection('concursos-sorteos').doc("".concat(date)).collection('participantes').doc("".concat(this.loginService.user.uid)).collection('sorteos').snapshotChanges();
                          resolve(result);
                        } catch (error) {
                          console.error(error);
                          reject(error);
                        }

                      case 1:
                      case "end":
                        return _context4.stop();
                    }
                  }
                }, _callee4, this);
              }));
            });
          }
          /**
           * OBTENER DATOS DE UN ÚNICO SORTEO
           * @param date fecha para filtrar los sorteos
           * @param id id de un documento para filtra los datos de un sorteo
           */

        }, {
          key: "getDataUniqueDraw",
          value: function getDataUniqueDraw(date, id) {
            var _this5 = this;

            return new Promise(function (resolve, reject) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this5, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
                var result;
                return regeneratorRuntime.wrap(function _callee5$(_context5) {
                  while (1) {
                    switch (_context5.prev = _context5.next) {
                      case 0:
                        try {
                          result = this.firestore.collection('concursos-sorteos').doc("".concat(date)).collection('participantes').doc("".concat(this.loginService.user.uid)).collection('sorteos').doc("".concat(id)).snapshotChanges();
                          resolve(result);
                        } catch (error) {
                          console.error(error);
                          reject(error);
                        }

                      case 1:
                      case "end":
                        return _context5.stop();
                    }
                  }
                }, _callee5, this);
              }));
            });
          }
          /**
           * PARTICIPAR EN UN SORTEO
           * @param date fecha para filtrar los sorteos
           * @param id id de un documento para filtra los datos de un sorteo
           * @param user información de un participante
           */

        }, {
          key: "takePartOnlyDraw",
          value: function takePartOnlyDraw(date, id) {
            var _this6 = this;

            return new Promise(function (resolve, reject) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this6, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
                var user;
                return regeneratorRuntime.wrap(function _callee6$(_context6) {
                  while (1) {
                    switch (_context6.prev = _context6.next) {
                      case 0:
                        try {
                          user = {
                            email: this.loginService.user.email,
                            uid: this.loginService.user.uid,
                            winner: false
                          };
                          this.firestore.collection('concursos-sorteos').doc("".concat(date)).collection('sorteos').doc("".concat(id)).collection('participantes').doc(user.uid).set(user);
                          resolve(true);
                        } catch (error) {
                          console.error(error);
                          reject(error);
                        }

                      case 1:
                      case "end":
                        return _context6.stop();
                    }
                  }
                }, _callee6, this);
              }));
            });
          } // ! aCTUALIZAR LA PARTICIPACIÓN EN X SORTEO

        }, {
          key: "updateParticiped",
          value: function updateParticiped(date, id, data) {
            var _this7 = this;

            return new Promise(function (resolve, reject) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this7, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
                return regeneratorRuntime.wrap(function _callee7$(_context7) {
                  while (1) {
                    switch (_context7.prev = _context7.next) {
                      case 0:
                        try {
                          this.firestore.collection('concursos-sorteos').doc("".concat(date)).collection('participantes').doc("".concat(this.loginService.user.uid)).collection('sorteos').doc("".concat(id)).set(data);
                          resolve(true);
                        } catch (error) {
                          console.error(error);
                          reject(error);
                        }

                      case 1:
                      case "end":
                        return _context7.stop();
                    }
                  }
                }, _callee7, this);
              }));
            });
          }
          /**
           * COMPROBAR SI UN USUARIO YA HA PARTICIPADO EN UN SORTEO
           */

        }, {
          key: "checkUserHasParticipated",
          value: function checkUserHasParticipated(date, id) {
            var _this8 = this;

            return new Promise(function (resolve, reject) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this8, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
                var res;
                return regeneratorRuntime.wrap(function _callee8$(_context8) {
                  while (1) {
                    switch (_context8.prev = _context8.next) {
                      case 0:
                        try {
                          res = this.firestore.collection('concursos-sorteos').doc("".concat(date)).collection('sorteos').doc("".concat(id)).collection('participantes').snapshotChanges();
                          resolve(res);
                        } catch (error) {
                          console.error(error);
                          reject(error);
                        }

                      case 1:
                      case "end":
                        return _context8.stop();
                    }
                  }
                }, _callee8, this);
              }));
            });
          }
          /**
           * OBTENER OFERTA COMIDA
           * @param date fecha
           */

        }, {
          key: "getFoodOffer",
          value: function getFoodOffer(date) {
            var _this9 = this;

            return new Promise(function (resolve, reject) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this9, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
                var result;
                return regeneratorRuntime.wrap(function _callee9$(_context9) {
                  while (1) {
                    switch (_context9.prev = _context9.next) {
                      case 0:
                        try {
                          result = this.firestore.collection('comida').doc("".concat(date)).collection('ofertas').snapshotChanges();
                          resolve(result);
                        } catch (error) {
                          console.error(error);
                          reject(error);
                        }

                      case 1:
                      case "end":
                        return _context9.stop();
                    }
                  }
                }, _callee9, this);
              }));
            });
          }
          /**
           * OBTENER ENCUESTAS
           * @param date fecha
           */

        }, {
          key: "getPolls",
          value: function getPolls(date) {
            var _this10 = this;

            return new Promise(function (resolve, reject) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this10, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
                var result;
                return regeneratorRuntime.wrap(function _callee10$(_context10) {
                  while (1) {
                    switch (_context10.prev = _context10.next) {
                      case 0:
                        try {
                          result = this.firestore.collection('encuestas').doc("".concat(date)).collection('formularios').snapshotChanges();
                          resolve(result);
                        } catch (error) {
                          console.error(error);
                          reject(error);
                        }

                      case 1:
                      case "end":
                        return _context10.stop();
                    }
                  }
                }, _callee10, this);
              }));
            });
          }
          /**
           * OBTENER OFERTA ENTRADAS Y TIENDA
           * @param date fecha
           */

        }, {
          key: "getShopTicketsOffer",
          value: function getShopTicketsOffer(date) {
            var _this11 = this;

            return new Promise(function (resolve, reject) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this11, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
                var result;
                return regeneratorRuntime.wrap(function _callee11$(_context11) {
                  while (1) {
                    switch (_context11.prev = _context11.next) {
                      case 0:
                        try {
                          result = this.firestore.collection('ofertas-tienda-entradas').doc("".concat(date)).collection('ofertas').snapshotChanges();
                          resolve(result);
                        } catch (error) {
                          console.error(error);
                          reject(error);
                        }

                      case 1:
                      case "end":
                        return _context11.stop();
                    }
                  }
                }, _callee11, this);
              }));
            });
          }
          /**
           * Resolución de peticiones que proviene de Local Notifications
           * @param data datos a enviar
           * @param type tipo de beacon (1- comida,2 sorteos, etc)
           */

        }, {
          key: "requestsFromLocalNotification",
          value: function requestsFromLocalNotification(data, type) {
            var _this12 = this;

            switch (type) {
              case 1:
                this.putUserFoodOffer(Object(app_shared_utils_functionsUtils__WEBPACK_IMPORTED_MODULE_5__["generateDateNow"])(), data);
                this.router.navigateByUrl("/food");
                break;

              case 2:
                this.putUserShopTicketOffer(Object(app_shared_utils_functionsUtils__WEBPACK_IMPORTED_MODULE_5__["generateDateNow"])(), data);
                this.router.navigateByUrl("/offers-shop-tickets");
                break;

              case 3:
                this.getAllDraw(Object(app_shared_utils_functionsUtils__WEBPACK_IMPORTED_MODULE_5__["generateDateNow"])()).then(function (res) {
                  res.subscribe(function (d) {
                    d.forEach(function (item) {
                      _this12.putUserConcursoSorteo(Object(app_shared_utils_functionsUtils__WEBPACK_IMPORTED_MODULE_5__["generateDateNow"])(), item.payload.doc.data());
                    });

                    _this12.router.navigateByUrl("/contest-draw");
                  });
                });
                break;

              case 4:
                this.putUserPoll(Object(app_shared_utils_functionsUtils__WEBPACK_IMPORTED_MODULE_5__["generateDateNow"])(), data);
                this.router.navigateByUrl("/polls");
                break;

              default:
                break;
            }
          }
          /**
           * Insertar usuario en la participación de concursos y sorteos
           */

        }, {
          key: "putUserConcursoSorteo",
          value: function putUserConcursoSorteo(date, data) {
            var _this13 = this;

            return new Promise(function (resolve, reject) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this13, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
                return regeneratorRuntime.wrap(function _callee12$(_context12) {
                  while (1) {
                    switch (_context12.prev = _context12.next) {
                      case 0:
                        try {
                          this.firestore.collection('concursos-sorteos').doc("".concat(date)).collection('participantes').doc("".concat(this.loginService.user.uid)).collection('sorteos').doc("".concat(data.id)).set(data);
                          resolve(true);
                        } catch (error) {
                          console.error(error);
                          reject(error);
                        }

                      case 1:
                      case "end":
                        return _context12.stop();
                    }
                  }
                }, _callee12, this);
              }));
            });
          }
          /**
           * Insertar un usuario en la participación de una oferta de ENTRADA o TIENDA
           * @param date fecha
           * @param data datos a enviar
           * ! PUT
           */

        }, {
          key: "putUserShopTicketOffer",
          value: function putUserShopTicketOffer(date, data) {
            var _this14 = this;

            return new Promise(function (resolve, reject) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this14, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
                return regeneratorRuntime.wrap(function _callee13$(_context13) {
                  while (1) {
                    switch (_context13.prev = _context13.next) {
                      case 0:
                        try {
                          this.firestore.collection('ofertas-tienda-entradas').doc("".concat(date)).collection('participantes').doc("".concat(this.loginService.user.uid)).set(data);
                          resolve(true);
                        } catch (error) {
                          console.error(error);
                          reject(error);
                        }

                      case 1:
                      case "end":
                        return _context13.stop();
                    }
                  }
                }, _callee13, this);
              }));
            });
          }
          /**
           * Añadir usuario para hacer la encuesta
           * @param date fecha
           * @param data datos a enviar
           */

        }, {
          key: "putUserPoll",
          value: function putUserPoll(date, data) {
            var _this15 = this;

            return new Promise(function (resolve, reject) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this15, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
                return regeneratorRuntime.wrap(function _callee14$(_context14) {
                  while (1) {
                    switch (_context14.prev = _context14.next) {
                      case 0:
                        try {
                          this.firestore.collection('encuestas').doc("".concat(date)).collection('participantes').doc("".concat(this.loginService.user.uid)).set(data);
                          resolve(true);
                        } catch (error) {
                          console.error(error);
                          reject(error);
                        }

                      case 1:
                      case "end":
                        return _context14.stop();
                    }
                  }
                }, _callee14, this);
              }));
            });
          }
          /**
           * Insertar un usuario en la participación de una oferta de COMIDA
           * @param date fecha
           * @param data datos a enviar
           * ! PUT
           */

        }, {
          key: "putUserFoodOffer",
          value: function putUserFoodOffer(date, data) {
            var _this16 = this;

            return new Promise(function (resolve, reject) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this16, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
                return regeneratorRuntime.wrap(function _callee15$(_context15) {
                  while (1) {
                    switch (_context15.prev = _context15.next) {
                      case 0:
                        try {
                          this.firestore.collection('comida').doc("".concat(date)).collection('participantes').doc("".concat(this.loginService.user.uid)).set(data);
                          resolve(true);
                        } catch (error) {
                          console.error(error);
                          reject(error);
                        }

                      case 1:
                      case "end":
                        return _context15.stop();
                    }
                  }
                }, _callee15, this);
              }));
            });
          }
          /**
           * Recoger datos de participaciones de un usuario en Ofertas de COMIDA
           * @param date fecha
           * ! GET
           */

        }, {
          key: "getFoodOffersOfUser",
          value: function getFoodOffersOfUser(date) {
            var _this17 = this;

            return new Promise(function (resolve, reject) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this17, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee16() {
                var result;
                return regeneratorRuntime.wrap(function _callee16$(_context16) {
                  while (1) {
                    switch (_context16.prev = _context16.next) {
                      case 0:
                        try {
                          result = this.firestore.collection('comida').doc("".concat(date)).collection('participantes').doc("".concat(this.loginService.user.uid)).snapshotChanges();
                          resolve(result);
                        } catch (error) {
                          console.error(error);
                          reject(error);
                        }

                      case 1:
                      case "end":
                        return _context16.stop();
                    }
                  }
                }, _callee16, this);
              }));
            });
          }
          /**
           * Recoger datos de participaciones de un usuario en Ofertas de ENTRADAS Y TIENDA
           * @param date fecha
           * ! GET
           */

        }, {
          key: "getShopTicketOffersOfUser",
          value: function getShopTicketOffersOfUser(date) {
            var _this18 = this;

            return new Promise(function (resolve, reject) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this18, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee17() {
                var result;
                return regeneratorRuntime.wrap(function _callee17$(_context17) {
                  while (1) {
                    switch (_context17.prev = _context17.next) {
                      case 0:
                        try {
                          result = this.firestore.collection('ofertas-tienda-entradas').doc("".concat(date)).collection('participantes').doc("".concat(this.loginService.user.uid)).snapshotChanges();
                          resolve(result);
                        } catch (error) {
                          console.error(error);
                          reject(error);
                        }

                      case 1:
                      case "end":
                        return _context17.stop();
                    }
                  }
                }, _callee17, this);
              }));
            });
          }
          /**
           * Recoger datos de para la notificación de concursos y sorteo en activo
           * @param date fecha
           * ! GET
           */

        }, {
          key: "getDataContestDrawForNotification",
          value: function getDataContestDrawForNotification(date) {
            var _this19 = this;

            return new Promise(function (resolve, reject) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this19, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee18() {
                var result;
                return regeneratorRuntime.wrap(function _callee18$(_context18) {
                  while (1) {
                    switch (_context18.prev = _context18.next) {
                      case 0:
                        try {
                          result = this.firestore.collection('concursos-sorteos').doc("".concat(date)).snapshotChanges();
                          resolve(result);
                        } catch (error) {
                          console.error(error);
                          reject(error);
                        }

                      case 1:
                      case "end":
                        return _context18.stop();
                    }
                  }
                }, _callee18, this);
              }));
            });
          }
        }]);

        return FirebaseAppService;
      }();

      FirebaseAppService.ctorParameters = function () {
        return [{
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
        }, {
          type: _login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      };

      FirebaseAppService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"], _login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])], FirebaseAppService);
      /***/
    },

    /***/
    "./src/app/shared/utils/functionsUtils.ts":
    /*!************************************************!*\
      !*** ./src/app/shared/utils/functionsUtils.ts ***!
      \************************************************/

    /*! exports provided: generateRandomNumber, generateDateNow */

    /***/
    function srcAppSharedUtilsFunctionsUtilsTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "generateRandomNumber", function () {
        return generateRandomNumber;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "generateDateNow", function () {
        return generateDateNow;
      });
      /**
       * GENERAR UN NÚMERO ALETATORIO DE 0 a MAX
       * @param max valor máximo
       */


      var generateRandomNumber = function generateRandomNumber(max) {
        return Math.floor(Math.random() * (0 + max));
      };
      /**
       * GENERAR FECHA ACTUAL
       */


      var generateDateNow = function generateDateNow() {
        var MyDate = new Date();
        var date = ('0' + MyDate.getDate()).slice(-2) + '-' + ('0' + (MyDate.getMonth() + 1)).slice(-2) + '-' + MyDate.getFullYear(); //  return date;

        return '27-07-2020'; // ! para hacer pruebas
      };
      /***/

    }
  }]);
})();
//# sourceMappingURL=default~views-home-home-module~views-pages-contest-draw-contest-draw-module~views-pages-contest-draw~a4713b3c-es5.js.map