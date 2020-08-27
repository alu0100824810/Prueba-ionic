(function () {
  function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

  function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "./$$_lazy_route_resource lazy recursive":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function $$_lazy_route_resourceLazyRecursive(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
      /***/
    },

    /***/
    "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
      \*****************************************************************************************************************************************/

    /*! no static exports found */

    /***/
    function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
      var map = {
        "./ion-action-sheet.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet.entry.js", "common", 0],
        "./ion-alert.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert.entry.js", "common", 1],
        "./ion-app_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8.entry.js", "common", 2],
        "./ion-avatar_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3.entry.js", "common", 3],
        "./ion-back-button.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button.entry.js", "common", 4],
        "./ion-backdrop.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop.entry.js", 5],
        "./ion-button_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2.entry.js", "common", 6],
        "./ion-card_5.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5.entry.js", "common", 7],
        "./ion-checkbox.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox.entry.js", "common", 8],
        "./ion-chip.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip.entry.js", "common", 9],
        "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 10],
        "./ion-datetime_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3.entry.js", "common", 11],
        "./ion-fab_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3.entry.js", "common", 12],
        "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 13],
        "./ion-infinite-scroll_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2.entry.js", 14],
        "./ion-input.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input.entry.js", "common", 15],
        "./ion-item-option_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3.entry.js", "common", 16],
        "./ion-item_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8.entry.js", "common", 17],
        "./ion-loading.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading.entry.js", "common", 18],
        "./ion-menu_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3.entry.js", "common", 19],
        "./ion-modal.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal.entry.js", "common", 20],
        "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", 21],
        "./ion-popover.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover.entry.js", "common", 22],
        "./ion-progress-bar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar.entry.js", "common", 23],
        "./ion-radio_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2.entry.js", "common", 24],
        "./ion-range.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range.entry.js", "common", 25],
        "./ion-refresher_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2.entry.js", "common", 26],
        "./ion-reorder_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2.entry.js", "common", 27],
        "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 28],
        "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 29],
        "./ion-searchbar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar.entry.js", "common", 30],
        "./ion-segment_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2.entry.js", "common", 31],
        "./ion-select_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3.entry.js", "common", 32],
        "./ion-slide_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2.entry.js", 33],
        "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 34],
        "./ion-split-pane.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane.entry.js", 35],
        "./ion-tab-bar_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2.entry.js", "common", 36],
        "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 37],
        "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 38],
        "./ion-textarea.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea.entry.js", "common", 39],
        "./ion-toast.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast.entry.js", "common", 40],
        "./ion-toggle.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle.entry.js", "common", 41],
        "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 42]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function webpackAsyncContextKeys() {
        return Object.keys(map);
      };

      webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>";
      /***/
    },

    /***/
    "./src/app/app-routing.module.ts":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
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


      var _core_guards_welcome_info_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @core/guards/welcome-info.guard */
      "./src/app/core/guards/welcome-info.guard.ts");

      var routes = [{
        path: '',
        redirectTo: 'welcome',
        pathMatch: 'full'
      }, {
        path: 'welcome',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | views-welcome-welcome-module */
          "views-welcome-welcome-module").then(__webpack_require__.bind(null,
          /*! ./views/welcome/welcome.module */
          "./src/app/views/welcome/welcome.module.ts")).then(function (m) {
            return m.WelcomePageModule;
          });
        },
        canActivate: [_core_guards_welcome_info_guard__WEBPACK_IMPORTED_MODULE_3__["WelcomeInfoGuard"]]
      }, {
        path: 'login',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | views-login-login-module */
          [__webpack_require__.e("default~views-forget-password-forget-password-module~views-home-home-module~views-login-login-module~bd78df07"), __webpack_require__.e("views-login-login-module")]).then(__webpack_require__.bind(null,
          /*! ./views/login/login.module */
          "./src/app/views/login/login.module.ts")).then(function (m) {
            return m.LoginPageModule;
          });
        }
      }, {
        path: 'forget-password',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | views-forget-password-forget-password-module */
          [__webpack_require__.e("default~views-forget-password-forget-password-module~views-home-home-module~views-login-login-module~bd78df07"), __webpack_require__.e("views-forget-password-forget-password-module")]).then(__webpack_require__.bind(null,
          /*! ./views/forget-password/forget-password.module */
          "./src/app/views/forget-password/forget-password.module.ts")).then(function (m) {
            return m.ForgetPasswordPageModule;
          });
        }
      }, {
        path: 'register',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | views-register-register-module */
          [__webpack_require__.e("default~views-forget-password-forget-password-module~views-home-home-module~views-login-login-module~bd78df07"), __webpack_require__.e("views-register-register-module")]).then(__webpack_require__.bind(null,
          /*! ./views/register/register.module */
          "./src/app/views/register/register.module.ts")).then(function (m) {
            return m.RegisterPageModule;
          });
        }
      }, {
        path: 'home',
        children: [{
          path: '',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | views-home-home-module */
            [__webpack_require__.e("default~views-forget-password-forget-password-module~views-home-home-module~views-login-login-module~bd78df07"), __webpack_require__.e("default~views-home-home-module~views-pages-contest-draw-contest-draw-module~views-pages-contest-draw~a4713b3c"), __webpack_require__.e("views-home-home-module")]).then(__webpack_require__.bind(null,
            /*! ./views/home/home.module */
            "./src/app/views/home/home.module.ts")).then(function (m) {
              return m.HomePageModule;
            });
          }
        }]
      }, {
        path: 'stadium',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | views-pages-stadium-stadium-module */
          [__webpack_require__.e("default~views-forget-password-forget-password-module~views-home-home-module~views-login-login-module~bd78df07"), __webpack_require__.e("views-pages-stadium-stadium-module")]).then(__webpack_require__.bind(null,
          /*! ./views/pages/stadium/stadium.module */
          "./src/app/views/pages/stadium/stadium.module.ts")).then(function (m) {
            return m.StadiumPageModule;
          });
        }
      }, {
        path: 'category-forms',
        children: [{
          path: '',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | views-pages-forms-forms-module */
            [__webpack_require__.e("default~views-forget-password-forget-password-module~views-home-home-module~views-login-login-module~bd78df07"), __webpack_require__.e("views-pages-forms-forms-module")]).then(__webpack_require__.bind(null,
            /*! ./views/pages/forms/forms.module */
            "./src/app/views/pages/forms/forms.module.ts")).then(function (m) {
              return m.FormsPageModule;
            });
          }
        }, {
          path: 'category/:category',
          children: [{
            path: '',
            loadChildren: function loadChildren() {
              return Promise.all(
              /*! import() | views-pages-forms-button-start-form-button-start-form-module */
              [__webpack_require__.e("default~views-forget-password-forget-password-module~views-home-home-module~views-login-login-module~bd78df07"), __webpack_require__.e("default~views-home-home-module~views-pages-contest-draw-contest-draw-module~views-pages-contest-draw~a4713b3c"), __webpack_require__.e("views-pages-forms-button-start-form-button-start-form-module")]).then(__webpack_require__.bind(null,
              /*! ./views/pages/forms/button-start-form/button-start-form.module */
              "./src/app/views/pages/forms/button-start-form/button-start-form.module.ts")).then(function (m) {
                return m.ButtonStartFormPageModule;
              });
            }
          }, {
            path: 'fill-out',
            loadChildren: function loadChildren() {
              return Promise.all(
              /*! import() | views-pages-forms-fill-out-form-fill-out-form-module */
              [__webpack_require__.e("default~views-forget-password-forget-password-module~views-home-home-module~views-login-login-module~bd78df07"), __webpack_require__.e("default~views-home-home-module~views-pages-contest-draw-contest-draw-module~views-pages-contest-draw~a4713b3c"), __webpack_require__.e("views-pages-forms-fill-out-form-fill-out-form-module")]).then(__webpack_require__.bind(null,
              /*! ./views/pages/forms/fill-out-form/fill-out-form.module */
              "./src/app/views/pages/forms/fill-out-form/fill-out-form.module.ts")).then(function (m) {
                return m.FillOutFormPageModule;
              });
            }
          }]
        }]
      }, {
        path: 'contest-draw',
        children: [{
          path: '',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | views-pages-contest-draw-contest-draw-module */
            [__webpack_require__.e("default~views-forget-password-forget-password-module~views-home-home-module~views-login-login-module~bd78df07"), __webpack_require__.e("default~views-home-home-module~views-pages-contest-draw-contest-draw-module~views-pages-contest-draw~a4713b3c"), __webpack_require__.e("views-pages-contest-draw-contest-draw-module")]).then(__webpack_require__.bind(null,
            /*! ./views/pages/contest-draw/contest-draw.module */
            "./src/app/views/pages/contest-draw/contest-draw.module.ts")).then(function (m) {
              return m.ContestDrawPageModule;
            });
          }
        }, {
          path: 'take-part/:id',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | views-pages-contest-draw-take-part-take-part-module */
            [__webpack_require__.e("default~views-forget-password-forget-password-module~views-home-home-module~views-login-login-module~bd78df07"), __webpack_require__.e("default~views-home-home-module~views-pages-contest-draw-contest-draw-module~views-pages-contest-draw~a4713b3c"), __webpack_require__.e("views-pages-contest-draw-take-part-take-part-module")]).then(__webpack_require__.bind(null,
            /*! ./views/pages/contest-draw/take-part/take-part.module */
            "./src/app/views/pages/contest-draw/take-part/take-part.module.ts")).then(function (m) {
              return m.TakePartPageModule;
            });
          }
        }]
      }, {
        path: 'food',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | views-pages-food-food-module */
          [__webpack_require__.e("default~views-forget-password-forget-password-module~views-home-home-module~views-login-login-module~bd78df07"), __webpack_require__.e("default~views-home-home-module~views-pages-contest-draw-contest-draw-module~views-pages-contest-draw~a4713b3c"), __webpack_require__.e("views-pages-food-food-module")]).then(__webpack_require__.bind(null,
          /*! ./views/pages/food/food.module */
          "./src/app/views/pages/food/food.module.ts")).then(function (m) {
            return m.FoodPageModule;
          });
        }
      }, {
        path: 'offers-shop-tickets',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | views-pages-offers-shop-tickets-offers-shop-tickets-module */
          [__webpack_require__.e("default~views-forget-password-forget-password-module~views-home-home-module~views-login-login-module~bd78df07"), __webpack_require__.e("default~views-home-home-module~views-pages-contest-draw-contest-draw-module~views-pages-contest-draw~a4713b3c"), __webpack_require__.e("views-pages-offers-shop-tickets-offers-shop-tickets-module")]).then(__webpack_require__.bind(null,
          /*! ./views/pages/offers-shop-tickets/offers-shop-tickets.module */
          "./src/app/views/pages/offers-shop-tickets/offers-shop-tickets.module.ts")).then(function (m) {
            return m.OffersShopTicketsPageModule;
          });
        }
      }, {
        path: 'polls',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | views-pages-polls-polls-module */
          [__webpack_require__.e("default~views-forget-password-forget-password-module~views-home-home-module~views-login-login-module~bd78df07"), __webpack_require__.e("views-pages-polls-polls-module")]).then(__webpack_require__.bind(null,
          /*! ./views/pages/polls/polls.module */
          "./src/app/views/pages/polls/polls.module.ts")).then(function (m) {
            return m.PollsPageModule;
          });
        }
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
          preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "./src/app/app.component.scss":
    /*!************************************!*\
      !*** ./src/app/app.component.scss ***!
      \************************************/

    /*! exports provided: default */

    /***/
    function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/app.component.ts":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _core_services_back_button_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @core/services/back-button.service */
      "./src/app/core/services/back-button.service.ts");
      /* harmony import */


      var _core_services_theme_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @core/services/theme.service */
      "./src/app/core/services/theme.service.ts");
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @capacitor/core */
      "./node_modules/@capacitor/core/dist/esm/index.js");

      var SplashScreen = _capacitor_core__WEBPACK_IMPORTED_MODULE_7__["Plugins"].SplashScreen;

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(platform, router, modalController, location, backButtonService, themeService) {
          _classCallCheck(this, AppComponent);

          this.platform = platform;
          this.router = router;
          this.modalController = modalController;
          this.location = location;
          this.backButtonService = backButtonService;
          this.themeService = themeService;
          this.initializeApp();
        }

        _createClass(AppComponent, [{
          key: "initializeApp",
          value: function initializeApp() {
            var _this = this;

            this.platform.ready().then(function () {
              SplashScreen.hide();

              _this.themeService.updateTheme(); // Hardware Back button action


              document.addEventListener('backbutton', function (e) {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                  var _this2 = this;

                  return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          e.preventDefault();

                          if (!this.backButtonService.isDefine()) {
                            _context.next = 5;
                            break;
                          }

                          this.backButtonService.handler();
                          _context.next = 30;
                          break;

                        case 5:
                          _context.t0 = true;

                          if (!(_context.t0 === this.router.config.find(function (y) {
                            return y.path === _this2.router.url.replace('/', '');
                          }).data.main)) {
                            _context.next = 10;
                            break;
                          }

                          _context.t1 = 24;
                          _context.next = 22;
                          break;

                        case 10:
                          _context.t2 = _context.t0;
                          _context.next = 13;
                          return this.modalController.getTop();

                        case 13:
                          _context.t3 = _context.sent;
                          _context.t4 = undefined;
                          _context.t5 = _context.t3 !== _context.t4;

                          if (!(_context.t2 === _context.t5)) {
                            _context.next = 20;
                            break;
                          }

                          _context.t6 = 26;
                          _context.next = 21;
                          break;

                        case 20:
                          _context.t6 = 28;

                        case 21:
                          _context.t1 = _context.t6;

                        case 22:
                          _context.next = _context.t1;
                          break;

                        case 24:
                          navigator.app.exitApp();
                          return _context.abrupt("break", 30);

                        case 26:
                          this.modalController.dismiss();
                          return _context.abrupt("break", 30);

                        case 28:
                          this.location.back();
                          return _context.abrupt("break", 30);

                        case 30:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee, this);
                }));
              });
            });
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]
        }, {
          type: _core_services_back_button_service__WEBPACK_IMPORTED_MODULE_5__["BackButtonService"]
        }, {
          type: _core_services_theme_service__WEBPACK_IMPORTED_MODULE_6__["ThemeService"]
        }];
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-root',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./app.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./app.component.scss */
        "./src/app/app.component.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"], _core_services_back_button_service__WEBPACK_IMPORTED_MODULE_5__["BackButtonService"], _core_services_theme_service__WEBPACK_IMPORTED_MODULE_6__["ThemeService"]])], AppComponent);
      /***/
    },

    /***/
    "./src/app/app.module.ts":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _core_core_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @core/core.module */
      "./src/app/core/core.module.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./app-routing.module */
      "./src/app/app-routing.module.ts");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./app.component */
      "./src/app/app.component.ts");
      /* harmony import */


      var _angular_fire__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/fire */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire.js");
      /* harmony import */


      var _env_firebase_config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @env/firebase-config */
      "./src/environments/firebase-config.ts");
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/fire/auth */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
      /* harmony import */


      var _angular_fire_database__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/fire/database */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
      /* harmony import */


      var _ionic_native_ibeacon_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @ionic-native/ibeacon/ngx */
      "./node_modules/@ionic-native/ibeacon/__ivy_ngcc__/ngx/index.js"); // TODO: REVISAR
      // import { HTTP } from '@ionic-native/http/ngx';  // TODO: QUITAR
      // ! BEACON


      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_9__["AngularFireModule"].initializeApp(_env_firebase_config__WEBPACK_IMPORTED_MODULE_10__["firebaseConfig"]), _angular_fire_auth__WEBPACK_IMPORTED_MODULE_11__["AngularFireAuthModule"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_12__["AngularFireDatabaseModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_13__["AngularFirestoreModule"]],
        providers: [// HTTP,  // TODO: QUITAR
        _ionic_native_ibeacon_ngx__WEBPACK_IMPORTED_MODULE_15__["IBeacon"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_13__["AngularFirestoreModule"], {
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouteReuseStrategy"],
          useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicRouteStrategy"]
        }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "./src/app/core/core.module.ts":
    /*!*************************************!*\
      !*** ./src/app/core/core.module.ts ***!
      \*************************************/

    /*! exports provided: CoreModule */

    /***/
    function srcAppCoreCoreModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CoreModule", function () {
        return CoreModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _guards_welcome_info_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./guards/welcome-info.guard */
      "./src/app/core/guards/welcome-info.guard.ts");
      /* harmony import */


      var _guards_login_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./guards/login.guard */
      "./src/app/core/guards/login.guard.ts");

      var CoreModule = function CoreModule() {
        _classCallCheck(this, CoreModule);
      };

      CoreModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"]],
        providers: [_guards_login_guard__WEBPACK_IMPORTED_MODULE_5__["LoginGuard"], _guards_welcome_info_guard__WEBPACK_IMPORTED_MODULE_4__["WelcomeInfoGuard"]],
        entryComponents: [],
        exports: []
      })], CoreModule);
      /***/
    },

    /***/
    "./src/app/core/errors/message-firebase.ts":
    /*!*************************************************!*\
      !*** ./src/app/core/errors/message-firebase.ts ***!
      \*************************************************/

    /*! exports provided: getMessageErrorAuth */

    /***/
    function srcAppCoreErrorsMessageFirebaseTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getMessageErrorAuth", function () {
        return getMessageErrorAuth;
      });

      function getMessageErrorAuth(error) {
        switch (error.code) {
          case 'auth/email-already-in-use':
            return 'La dirección de correo electrónico ya ha sido usado en otra cuenta.';

          case 'auth/weak-password':
            return 'La contraseña debe tener al menos 6 caracteres.';

          case 'auth/invalid-email':
            return 'La dirección de correo no es válida';

          case 'auth/argument-error':
            return 'Correo no válido';

          case 'auth/wrong-password':
            return 'La contraseña es incorrecta o el usuario no existe';

          case 'auth/user-not-found':
            return 'No existe este usuario.';

          case 'auth/too-many-requests':
            return 'Hemos bloqueado todas las solicitudes de este dispositivo debido a una actividad inusual. Vuelva a intentarlo más tarde';

          default:
            break;
        }
      }
      /***/

    },

    /***/
    "./src/app/core/guards/login.guard.ts":
    /*!********************************************!*\
      !*** ./src/app/core/guards/login.guard.ts ***!
      \********************************************/

    /*! exports provided: LoginGuard */

    /***/
    function srcAppCoreGuardsLoginGuardTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginGuard", function () {
        return LoginGuard;
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


      var _core_services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @core/services/login.service */
      "./src/app/core/services/login.service.ts"); // import { NativeStorage } from '@ionic-native/native-storage/ngx';
      // import { SplashScreen } from '@ionic-native/splash-screen/ngx';
      // import { NetworkService } from '@core/services/network.service';


      var LoginGuard = /*#__PURE__*/function () {
        function LoginGuard(loginService, router) {
          _classCallCheck(this, LoginGuard);

          this.loginService = loginService;
          this.router = router;
        }
        /**
         * 1) Si es la primera que entras mostrar la página de welcome
         * 2) Cuando está loggeado o no devuelve true
         */


        _createClass(LoginGuard, [{
          key: "canActivateChild",
          value: function canActivateChild() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      if (!(localStorage.getItem('welcome') === '')) {
                        _context2.next = 6;
                        break;
                      }

                      localStorage.setItem('welcome', 'true');
                      this.router.navigateByUrl('/welcome');
                      return _context2.abrupt("return", true);

                    case 6:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }]);

        return LoginGuard;
      }();

      LoginGuard.ctorParameters = function () {
        return [{
          type: _core_services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      };

      LoginGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_core_services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], LoginGuard);
      /***/
    },

    /***/
    "./src/app/core/guards/welcome-info.guard.ts":
    /*!***************************************************!*\
      !*** ./src/app/core/guards/welcome-info.guard.ts ***!
      \***************************************************/

    /*! exports provided: WelcomeInfoGuard */

    /***/
    function srcAppCoreGuardsWelcomeInfoGuardTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WelcomeInfoGuard", function () {
        return WelcomeInfoGuard;
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


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @capacitor/core */
      "./node_modules/@capacitor/core/dist/esm/index.js");

      var Storage = _capacitor_core__WEBPACK_IMPORTED_MODULE_3__["Plugins"].Storage;

      var WelcomeInfoGuard = /*#__PURE__*/function () {
        function WelcomeInfoGuard(router) {
          _classCallCheck(this, WelcomeInfoGuard);

          this.router = router;
        }

        _createClass(WelcomeInfoGuard, [{
          key: "canActivate",
          value: function canActivate() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var res;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return Storage.get({
                        key: 'welcome'
                      });

                    case 2:
                      res = _context3.sent;

                      if (!(JSON.parse(res.value) === null)) {
                        _context3.next = 9;
                        break;
                      }

                      _context3.next = 6;
                      return Storage.set({
                        key: 'welcome',
                        value: 'true'
                      });

                    case 6:
                      return _context3.abrupt("return", true);

                    case 9:
                      this.router.navigateByUrl('/login');
                      return _context3.abrupt("return", false);

                    case 11:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }]);

        return WelcomeInfoGuard;
      }();

      WelcomeInfoGuard.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      };

      WelcomeInfoGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], WelcomeInfoGuard);
      /***/
    },

    /***/
    "./src/app/core/models/GenericModel.ts":
    /*!*********************************************!*\
      !*** ./src/app/core/models/GenericModel.ts ***!
      \*********************************************/

    /*! exports provided: GenericModel */

    /***/
    function srcAppCoreModelsGenericModelTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GenericModel", function () {
        return GenericModel;
      });

      var GenericModel = /*#__PURE__*/function () {
        function GenericModel() {
          _classCallCheck(this, GenericModel);
        }
        /**
         * Se encarga de parsear datos de un objeto plano a los atributos de la clase
         * @param data Parametros con los datos a parsear
         */


        _createClass(GenericModel, [{
          key: "constructorParse",
          value: function constructorParse(data) {
            var _this3 = this;

            if (data !== undefined) {
              Object.getOwnPropertyNames(this).forEach(function (e) {
                var exception;
                var classProperty = e;

                if (_this3.exclusions !== undefined) {
                  classProperty = /^_\w*/.test(e) ? e.replace('_', '') : e;
                  exception = _this3.exclusions.find(function (y) {
                    return y.field === classProperty;
                  });
                }

                if (exception !== undefined) {
                  exception.handler(data[classProperty]);
                } else {
                  switch (true) {
                    case data[classProperty] instanceof Date || /\d{4}-\d{2}-\d{2}/.test(data[classProperty]):
                      _this3[e] = new Date(data[classProperty]);
                      break;

                    case Array.isArray(data[classProperty]):
                      _this3[e] = _toConsumableArray(data[classProperty]);
                      break;

                    case typeof data[classProperty] === 'object':
                      _this3[e] = Object.assign({}, data[classProperty]);
                      break;

                    default:
                      // permite especificar valores por defecto
                      if (_this3[e] === null) {
                        _this3[e] = data[classProperty];
                      }

                      break;
                  }
                }
              });
            }
          }
          /**
           * Convierte la clase en un objeto plano
           * @param reqField Parametros a incluir
           * @returns objeto plano con los datos pedidos
           */

        }, {
          key: "export",
          value: function _export(params) {
            var _this4 = this;

            var toReturn = {};

            if (params === undefined) {
              params = {
                "delete": ['exclusions']
              };
            } else {
              params["delete"] = params["delete"] === undefined ? ['exclusions'] : params["delete"].concat(['exclusions']);
            }

            var selectedProperties = params.required !== undefined ? params.required : Object.getOwnPropertyNames(this);
            selectedProperties.forEach(function (e) {
              switch (true) {
                case Array.isArray(_this4[e]):
                  toReturn[e] = _toConsumableArray(_this4[e]);
                  break;

                case typeof _this4[e] === 'object':
                  toReturn[e] = Object.assign({}, _this4[e]);
                  break;

                default:
                  toReturn[e] = _this4[e];
                  break;
              }
            });

            if (params["delete"] !== undefined) {
              params["delete"].forEach(function (e) {
                delete toReturn[e];
              });
            }

            if (params.rename !== undefined) {
              params.rename.forEach(function (e) {
                toReturn[e.to] = toReturn[e.from];
                delete toReturn[e.from];
              });
            }

            return toReturn;
          }
          /**
           * Verifica que los parametros minimos no están vacios
           * @param fields parametros requeridos
           */

        }, {
          key: "filledRequiredFields",
          value: function filledRequiredFields(fields) {
            var _this5 = this;

            var correct = false;
            fields.forEach(function (e) {
              correct = _this5[e] !== undefined && _this5[e] !== null;
            });
            return correct;
          }
          /**
           * Calcula diferencias entre objetos
           * @param toCompare Objeto con el que comparar
           * @returns objeto con las propiedades diferentes
           */

        }, {
          key: "differences",
          value: function differences(toCompare) {
            var aux = {};
            var thisObject = this["export"]();
            Object.keys(thisObject).forEach(function (e) {
              if (thisObject[e] !== toCompare[e]) {
                aux[e] = toCompare[e];
              } else if (Array.isArray(toCompare[e]) && toCompare[e].length > 0) {
                aux[e] = toCompare[e];
              }
            });
            return Object.keys(aux).length > 0 ? aux : null;
          }
          /**
           * Obtiene la lista de atributos de la clase
           * @return lista de atributos
           */

        }, {
          key: "getPropertyList",
          value: function getPropertyList() {
            return Object.getOwnPropertyNames(this);
          }
          /**
           * Clona un objeto de cualquier clase
           * @param instance objeto que clonar
           * @returns copia perfecta del objeto pasado por parametro
           */

        }, {
          key: "copy",
          value: function copy(instance) {
            var copy = new instance.constructor();
            Object.assign(copy, instance);
            return copy;
          }
        }]);

        return GenericModel;
      }();
      /***/

    },

    /***/
    "./src/app/core/models/theme.ts":
    /*!**************************************!*\
      !*** ./src/app/core/models/theme.ts ***!
      \**************************************/

    /*! exports provided: Theme */

    /***/
    function srcAppCoreModelsThemeTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Theme", function () {
        return Theme;
      });
      /* harmony import */


      var _GenericModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./GenericModel */
      "./src/app/core/models/GenericModel.ts");

      var Theme = /*#__PURE__*/function (_GenericModel__WEBPAC) {
        _inherits(Theme, _GenericModel__WEBPAC);

        var _super = _createSuper(Theme);

        function Theme(data) {
          var _this6;

          _classCallCheck(this, Theme);

          _this6 = _super.call(this);
          _this6.primary = null;
          _this6.secondary = null;
          _this6.tertiary = null;
          _this6.cuaternary = null;
          _this6.details = null;

          _this6.constructorParse(data);

          return _this6;
        }

        _createClass(Theme, [{
          key: "export",
          value: function _export() {
            var toReturn = _get(_getPrototypeOf(Theme.prototype), "export", this).call(this);

            Object.values(toReturn).forEach(function (e) {
              e[''] = e["default"];

              if (e.contrast_rgb) {
                e['contrast-rgb'] = e.contrast_rgb;
              }

              delete e["default"];
              delete e.contrast_rgb;
            });
            console.log(toReturn);
            return toReturn;
          }
        }]);

        return Theme;
      }(_GenericModel__WEBPACK_IMPORTED_MODULE_0__["GenericModel"]);
      /***/

    },

    /***/
    "./src/app/core/services/back-button.service.ts":
    /*!******************************************************!*\
      !*** ./src/app/core/services/back-button.service.ts ***!
      \******************************************************/

    /*! exports provided: BackButtonService */

    /***/
    function srcAppCoreServicesBackButtonServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BackButtonService", function () {
        return BackButtonService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var BackButtonService = /*#__PURE__*/function () {
        function BackButtonService() {
          _classCallCheck(this, BackButtonService);
        }
        /**
         * Add new custom handler
         * @param func handler to add
         */


        _createClass(BackButtonService, [{
          key: "add",
          value: function add(func) {
            this._handler = func;
          }
          /**
           * Remove handler
           */

        }, {
          key: "remove",
          value: function remove() {
            this._handler = undefined;
          }
          /**
           * Determines if custom handler is defined
           */

        }, {
          key: "isDefine",
          value: function isDefine() {
            return this._handler !== undefined;
          }
          /**
           * getter
           */

        }, {
          key: "handler",
          get: function get() {
            return this._handler;
          }
        }]);

        return BackButtonService;
      }();

      BackButtonService.ctorParameters = function () {
        return [];
      };

      BackButtonService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], BackButtonService);
      /***/
    },

    /***/
    "./src/app/core/services/login.service.ts":
    /*!************************************************!*\
      !*** ./src/app/core/services/login.service.ts ***!
      \************************************************/

    /*! exports provided: LoginService */

    /***/
    function srcAppCoreServicesLoginServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginService", function () {
        return LoginService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/fire/auth */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
      /* harmony import */


      var _messages_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./messages.service */
      "./src/app/core/services/messages.service.ts");
      /* harmony import */


      var _core_errors_message_firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @core/errors/message-firebase */
      "./src/app/core/errors/message-firebase.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @capacitor/core */
      "./node_modules/@capacitor/core/dist/esm/index.js");

      var Storage = _capacitor_core__WEBPACK_IMPORTED_MODULE_7__["Plugins"].Storage;

      var LoginService = /*#__PURE__*/function () {
        function LoginService(http, FireAuth, messages, alertController) {
          _classCallCheck(this, LoginService);

          this.http = http;
          this.FireAuth = FireAuth;
          this.messages = messages;
          this.alertController = alertController;
          this._token = null; // TODO: REVISAR

          this.usertoken = null; // TODO: REVISAR

          this.user = null;
        }
        /**
         * Iniciar sesión
         * @param email correo
         * @param password password
         */


        _createClass(LoginService, [{
          key: "logIn",
          value: function logIn(email, password) {
            var _this7 = this;

            return new Promise(function (resolve, reject) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this7, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
                var _this8 = this;

                var messageError;
                return regeneratorRuntime.wrap(function _callee5$(_context5) {
                  while (1) {
                    switch (_context5.prev = _context5.next) {
                      case 0:
                        _context5.prev = 0;
                        _context5.next = 3;
                        return this.FireAuth.signInWithEmailAndPassword(email, password).then(function (res) {
                          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this8, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                            var userInfo, store;
                            return regeneratorRuntime.wrap(function _callee4$(_context4) {
                              while (1) {
                                switch (_context4.prev = _context4.next) {
                                  case 0:
                                    userInfo = {
                                      uid: res.user.uid,
                                      email: res.user.email,
                                      idtoken: res.user.getIdToken(),
                                      refreshtoken: res.user.refreshToken
                                    };
                                    _context4.next = 3;
                                    return Storage.get({
                                      key: 'user'
                                    });

                                  case 3:
                                    store = _context4.sent;

                                    if (!(JSON.parse(store.value) !== null)) {
                                      _context4.next = 8;
                                      break;
                                    }

                                    _context4.next = 7;
                                    return Storage.remove({
                                      key: 'user'
                                    });

                                  case 7:
                                    this.user = null;

                                  case 8:
                                    _context4.next = 10;
                                    return Storage.set({
                                      key: 'user',
                                      value: JSON.stringify(userInfo)
                                    });

                                  case 10:
                                    this.user = userInfo;

                                  case 11:
                                  case "end":
                                    return _context4.stop();
                                }
                              }
                            }, _callee4, this);
                          }));
                        });

                      case 3:
                        resolve(true);
                        _context5.next = 13;
                        break;

                      case 6:
                        _context5.prev = 6;
                        _context5.t0 = _context5["catch"](0);
                        console.error(_context5.t0);
                        messageError = Object(_core_errors_message_firebase__WEBPACK_IMPORTED_MODULE_5__["getMessageErrorAuth"])(_context5.t0);
                        this.messages.showToast(messageError || 'Error desconocido', 'danger');
                        this.user = null;
                        reject(_context5.t0);

                      case 13:
                      case "end":
                        return _context5.stop();
                    }
                  }
                }, _callee5, this, [[0, 6]]);
              }));
            });
          }
          /**
           * Cambiar contraseña
           * @param email correo
           */

        }, {
          key: "forgetPassword",
          value: function forgetPassword(email) {
            var _this9 = this;

            return new Promise(function (resolve, reject) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this9, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
                var messageError;
                return regeneratorRuntime.wrap(function _callee6$(_context6) {
                  while (1) {
                    switch (_context6.prev = _context6.next) {
                      case 0:
                        _context6.prev = 0;
                        _context6.next = 3;
                        return this.FireAuth.sendPasswordResetEmail(email);

                      case 3:
                        resolve(true);
                        _context6.next = 12;
                        break;

                      case 6:
                        _context6.prev = 6;
                        _context6.t0 = _context6["catch"](0);
                        console.error(_context6.t0);
                        messageError = Object(_core_errors_message_firebase__WEBPACK_IMPORTED_MODULE_5__["getMessageErrorAuth"])(_context6.t0);
                        this.messages.showToast(messageError || 'Error desconocido', 'danger');
                        reject(_context6.t0);

                      case 12:
                      case "end":
                        return _context6.stop();
                    }
                  }
                }, _callee6, this, [[0, 6]]);
              }));
            });
          }
          /**
           * Registrarse
           * @param email correo
           * @param password password
           */

        }, {
          key: "signIn",
          value: function signIn(email, password) {
            var _this10 = this;

            return new Promise(function (resolve, reject) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this10, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
                var messageError;
                return regeneratorRuntime.wrap(function _callee7$(_context7) {
                  while (1) {
                    switch (_context7.prev = _context7.next) {
                      case 0:
                        _context7.prev = 0;
                        _context7.next = 3;
                        return this.FireAuth.createUserWithEmailAndPassword(email, password);

                      case 3:
                        resolve(true);
                        _context7.next = 12;
                        break;

                      case 6:
                        _context7.prev = 6;
                        _context7.t0 = _context7["catch"](0);
                        console.error(_context7.t0);
                        messageError = Object(_core_errors_message_firebase__WEBPACK_IMPORTED_MODULE_5__["getMessageErrorAuth"])(_context7.t0);
                        this.messages.showToast(messageError || 'Error desconocido', 'danger');
                        reject(_context7.t0);

                      case 12:
                      case "end":
                        return _context7.stop();
                    }
                  }
                }, _callee7, this, [[0, 6]]);
              }));
            });
          }
          /**
           * Cerra sesión
           */

        }, {
          key: "logout",
          value: function logout() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              var _this11 = this;

              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      return _context9.abrupt("return", new Promise(function (resolve, reject) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this11, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
                          var messageError;
                          return regeneratorRuntime.wrap(function _callee8$(_context8) {
                            while (1) {
                              switch (_context8.prev = _context8.next) {
                                case 0:
                                  _context8.prev = 0;
                                  this._token = null; // TODO: REVISAR

                                  this.user = null;
                                  _context8.next = 5;
                                  return Storage.remove({
                                    key: 'user'
                                  });

                                case 5:
                                  _context8.next = 7;
                                  return this.FireAuth.signOut();

                                case 7:
                                  resolve(true);
                                  _context8.next = 16;
                                  break;

                                case 10:
                                  _context8.prev = 10;
                                  _context8.t0 = _context8["catch"](0);
                                  console.error(_context8.t0);
                                  messageError = Object(_core_errors_message_firebase__WEBPACK_IMPORTED_MODULE_5__["getMessageErrorAuth"])(_context8.t0);
                                  this.messages.showToast(messageError || 'Error desconocido', 'danger');
                                  reject(_context8.t0);

                                case 16:
                                case "end":
                                  return _context8.stop();
                              }
                            }
                          }, _callee8, this, [[0, 10]]);
                        }));
                      }));

                    case 1:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9);
            }));
          }
          /*login(user: BasicUser, remember: boolean = false): Observable<any> {
            return this.http.post(`${environment.baseurl}/Users/Login`, user).pipe(
              tap((userInfo: any) => {
                this.parseLoginResponse(userInfo.result);
                if (remember) {
                  localStorage.setItem('userToken', userInfo.token);
                }
              })
            );
          }*/

          /**
           * TODO: REVISAR
           */

        }, {
          key: "isLogged",
          value: function isLogged() {
            return !!this._token || !!this.user;
          }
        }]);

        return LoginService;
      }();

      LoginService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]
        }, {
          type: _messages_service__WEBPACK_IMPORTED_MODULE_4__["MessagesService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]
        }];
      };

      LoginService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"], _messages_service__WEBPACK_IMPORTED_MODULE_4__["MessagesService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]])], LoginService);
      /***/
    },

    /***/
    "./src/app/core/services/messages.service.ts":
    /*!***************************************************!*\
      !*** ./src/app/core/services/messages.service.ts ***!
      \***************************************************/

    /*! exports provided: MessagesService */

    /***/
    function srcAppCoreServicesMessagesServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MessagesService", function () {
        return MessagesService;
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

      var MessagesService = /*#__PURE__*/function () {
        function MessagesService(toast, loadingController) {
          _classCallCheck(this, MessagesService);

          this.toast = toast;
          this.loadingController = loadingController;
          this.toastGenericOptions = {
            position: 'top',
            // closeButtonText: 'OK',
            duration: 3500
          };
        }
        /**
         * Muestra un mensaje al usuario
         * @param message mensaje para el usuario
         * @param color color del mensaje
         */


        _createClass(MessagesService, [{
          key: "showToast",
          value: function showToast(message) {
            var color = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'success';
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
              var options, toast;
              return regeneratorRuntime.wrap(function _callee10$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                      options = Object.assign({
                        message: message,
                        color: color
                      }, this.toastGenericOptions);
                      _context10.next = 3;
                      return this.toast.create(options);

                    case 3:
                      toast = _context10.sent;
                      toast.present();

                    case 5:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee10, this);
            }));
          }
          /**
           * Muestra un spiner a pantalla completa
           * @param message Mensaje para el spiner
           */

        }, {
          key: "showSpinner",
          value: function showSpinner(message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
              return regeneratorRuntime.wrap(function _callee11$(_context11) {
                while (1) {
                  switch (_context11.prev = _context11.next) {
                    case 0:
                      _context11.next = 2;
                      return this.loadingController.create({
                        message: message,
                        spinner: 'crescent'
                      });

                    case 2:
                      this.spinner = _context11.sent;
                      _context11.next = 5;
                      return this.spinner.present();

                    case 5:
                    case "end":
                      return _context11.stop();
                  }
                }
              }, _callee11, this);
            }));
          }
          /**
           * Oculta el spiner actual
           */

        }, {
          key: "hideSpinner",
          value: function hideSpinner() {
            if (this.spinner !== undefined) {
              this.spinner.dismiss();
              this.spinner = undefined;
            }
          }
        }]);

        return MessagesService;
      }();

      MessagesService.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
        }];
      };

      MessagesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])], MessagesService);
      /***/
    },

    /***/
    "./src/app/core/services/theme.service.ts":
    /*!************************************************!*\
      !*** ./src/app/core/services/theme.service.ts ***!
      \************************************************/

    /*! exports provided: ThemeService */

    /***/
    function srcAppCoreServicesThemeServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ThemeService", function () {
        return ThemeService;
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


      var _core_models_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @core/models/theme */
      "./src/app/core/models/theme.ts");

      var ThemeService = /*#__PURE__*/function () {
        function ThemeService() {
          _classCallCheck(this, ThemeService);

          // FIXME: Eliminar tema predeterminado
          this.actualTheme = new _core_models_theme__WEBPACK_IMPORTED_MODULE_2__["Theme"]({
            primary: {
              // default: '#1a1a1a',
              "default": '#072357',
              contrast: '#ffffff'
            },
            secondary: {
              "default": '#219FD0',
              contrast: '#ffffff'
            },
            tertiary: {
              "default": '#e6e6e6',
              contrast: '#000000'
            },
            cuaternary: {
              "default": '#e6e6e6',
              contrast: '#000000'
            },
            details: {
              "default": '#9a1419',
              contrast: '#ffffff'
            }
          });
        }

        _createClass(ThemeService, [{
          key: "updateTheme",
          value: function updateTheme() {
            var _this12 = this;

            if (!this.root) {
              this.root = document.documentElement;
            }

            Object.entries(this.actualTheme["export"]()).forEach(function (entry) {
              Object.entries(entry[1]).forEach(function (e) {
                var name = "--ion-color-".concat(entry[0]).concat(e[0] ? '-' : '').concat(e[0]);

                _this12.root.style.setProperty(name, e[1]);
                /* this.root.style.setProperty(`--brand-${entry[0]}-${e}`, e[1] as string); */

              });
            });
          }
        }]);

        return ThemeService;
      }();

      ThemeService.ctorParameters = function () {
        return [];
      };

      ThemeService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], ThemeService);
      /***/
    },

    /***/
    "./src/environments/environment.ts":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      });

      var environment = {
        production: false
      };
      /***/
    },

    /***/
    "./src/environments/firebase-config.ts":
    /*!*********************************************!*\
      !*** ./src/environments/firebase-config.ts ***!
      \*********************************************/

    /*! exports provided: firebaseConfig */

    /***/
    function srcEnvironmentsFirebaseConfigTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "firebaseConfig", function () {
        return firebaseConfig;
      }); // Your web app's Firebase configuration


      var firebaseConfig = {
        apiKey: 'AIzaSyCBkBw7vdVWowYnv3_aZtue8wZSRjbdnwc',
        authDomain: 'tfg-app-3521e.firebaseapp.com',
        databaseURL: 'https://tfg-app-3521e.firebaseio.com',
        projectId: 'tfg-app-3521e',
        storageBucket: 'tfg-app-3521e.appspot.com',
        messagingSenderId: '870978048919',
        appId: '1:870978048919:web:f70e6f61ff393fed89aad2',
        measurementId: 'G-016T2R0ZDP'
      };
      /***/
    },

    /***/
    "./src/main.ts":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function srcMainTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "./src/app/app.module.ts");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "./src/environments/environment.ts");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.log(err);
      });
      /***/
    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /Users/pache/Desktop/TFG/TFG_APP/src/main.ts */
      "./src/main.ts");
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map