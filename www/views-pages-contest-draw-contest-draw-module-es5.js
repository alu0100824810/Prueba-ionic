(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-pages-contest-draw-contest-draw-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/contest-draw/contest-draw.page.html":
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/contest-draw/contest-draw.page.html ***!
      \*******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppViewsPagesContestDrawContestDrawPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-header [showBackButton]=\"false\" name=\"Concursos-sorteos\">\n    <ion-buttons start>\n        <ion-back-button defaultHref=\"/home\" text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\n    </ion-buttons>\n</app-header>\n\n<ion-content class=\"ion-padding\">\n    <ng-container *ngFor=\"let item of data\">\n        <ion-card [routerLink]=\"['./take-part/' + item.id]\">\n            <img [src]=\"item.img\" />\n            <ion-card-header>\n                <ion-card-title>{{item.title}}</ion-card-title>\n            </ion-card-header>\n        </ion-card>\n        <br>\n    </ng-container>\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/views/pages/contest-draw/contest-draw.module.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/views/pages/contest-draw/contest-draw.module.ts ***!
      \*****************************************************************/

    /*! exports provided: ContestDrawPageModule */

    /***/
    function srcAppViewsPagesContestDrawContestDrawModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContestDrawPageModule", function () {
        return ContestDrawPageModule;
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


      var _contest_draw_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./contest-draw.page */
      "./src/app/views/pages/contest-draw/contest-draw.page.ts");
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
        component: _contest_draw_page__WEBPACK_IMPORTED_MODULE_3__["ContestDrawPage"]
      }];

      var ContestDrawPageModule = function ContestDrawPageModule() {
        _classCallCheck(this, ContestDrawPageModule);
      };

      ContestDrawPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes)],
        declarations: [_contest_draw_page__WEBPACK_IMPORTED_MODULE_3__["ContestDrawPage"]]
      })], ContestDrawPageModule);
      /***/
    },

    /***/
    "./src/app/views/pages/contest-draw/contest-draw.page.scss":
    /*!*****************************************************************!*\
      !*** ./src/app/views/pages/contest-draw/contest-draw.page.scss ***!
      \*****************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppViewsPagesContestDrawContestDrawPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-card-header {\n  --background: var(--ion-color-secondary);\n  padding: 15px;\n}\n\nion-card-title {\n  color: var(--ion-color-secondary-contrast);\n  font-size: 22px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZXMvY29udGVzdC1kcmF3L2NvbnRlc3QtZHJhdy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDSSx3Q0FBQTtFQUNBLGFBQUE7QUFGSjs7QUFJQTtFQUNJLDBDQUFBO0VBQ0EsZUFBQTtBQURKIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvcGFnZXMvY29udGVzdC1kcmF3L2NvbnRlc3QtZHJhdy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuXG5pb24tY2FyZC1oZWFkZXIge1xuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gICAgcGFkZGluZzogMTVweDtcbn1cbmlvbi1jYXJkLXRpdGxlIHtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdCk7XG4gICAgZm9udC1zaXplOiAyMnB4O1xufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/views/pages/contest-draw/contest-draw.page.ts":
    /*!***************************************************************!*\
      !*** ./src/app/views/pages/contest-draw/contest-draw.page.ts ***!
      \***************************************************************/

    /*! exports provided: ContestDrawPage */

    /***/
    function srcAppViewsPagesContestDrawContestDrawPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContestDrawPage", function () {
        return ContestDrawPage;
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


      var _core_services_firebase_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @core/services/firebase-app.service */
      "./src/app/core/services/firebase-app.service.ts");
      /* harmony import */


      var _core_services_messages_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @core/services/messages.service */
      "./src/app/core/services/messages.service.ts");

      var ContestDrawPage = /*#__PURE__*/function () {
        function ContestDrawPage(firebaseAppService, messages) {
          _classCallCheck(this, ContestDrawPage);

          this.firebaseAppService = firebaseAppService;
          this.messages = messages;
          this.data = [];
        }

        _createClass(ContestDrawPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              var MyDate, res;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.prev = 0;
                      _context.next = 3;
                      return this.messages.showSpinner('Cargando...');

                    case 3:
                      MyDate = new Date();
                      this.date = ('0' + MyDate.getDate()).slice(-2) + '-' + ('0' + (MyDate.getMonth() + 1)).slice(-2) + '-' + MyDate.getFullYear();
                      _context.next = 7;
                      return this.firebaseAppService.getAllDraw('27-07-2020');

                    case 7:
                      res = _context.sent;
                      // TODO: FECHA DE PRUEBA
                      this.result = res.subscribe(function (d) {
                        d.forEach(function (item) {
                          _this.data.push(item.payload.doc.data());
                        });
                      });
                      _context.next = 16;
                      break;

                    case 11:
                      _context.prev = 11;
                      _context.t0 = _context["catch"](0);
                      console.error(_context.t0);
                      _context.next = 16;
                      return this.messages.hideSpinner();

                    case 16:
                      _context.prev = 16;
                      _context.next = 19;
                      return this.messages.hideSpinner();

                    case 19:
                      return _context.finish(16);

                    case 20:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this, [[0, 11, 16, 20]]);
            }));
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.result.unsubscribe();
          }
        }]);

        return ContestDrawPage;
      }();

      ContestDrawPage.ctorParameters = function () {
        return [{
          type: _core_services_firebase_app_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseAppService"]
        }, {
          type: _core_services_messages_service__WEBPACK_IMPORTED_MODULE_3__["MessagesService"]
        }];
      };

      ContestDrawPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contest-draw',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./contest-draw.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/contest-draw/contest-draw.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./contest-draw.page.scss */
        "./src/app/views/pages/contest-draw/contest-draw.page.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_core_services_firebase_app_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseAppService"], _core_services_messages_service__WEBPACK_IMPORTED_MODULE_3__["MessagesService"]])], ContestDrawPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=views-pages-contest-draw-contest-draw-module-es5.js.map