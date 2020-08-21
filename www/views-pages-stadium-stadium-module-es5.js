(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-pages-stadium-stadium-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/stadium/stadium.page.html":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/stadium/stadium.page.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppViewsPagesStadiumStadiumPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-header [showBackButton]=\"true\" name=\"Estadio\"></app-header>\n\n<ion-content>\n  <div class=\"stadium\">\n    <img src=\"assets/estadio/estadio-Heliodoro.png\" />\n    <p>Estadio Heliodoro Rodríguez López</p>\n  </div>\n\n  <div class=\"info\">\n    <div>\n      <h5>Inaguración</h5>\n      <p>25 de julio de 1925.</p>\n    </div>\n\n    <div>\n      <h5>Capacidad</h5>\n      <p>22.824 personas</p>\n    </div>\n\n    <div>\n      <h5>Teléfono</h5>\n      <p>922.29.81.00</p>\n    </div>\n\n    <div>\n      <h5>Cómo llegar al estadio</h5>\n      <ion-grid>\n\n        <ion-row>\n          <ion-col size=\"2\" class=\"ion-text-center\">\n            <fa-icon [icon]=\"icons.map\"></fa-icon>\n          </ion-col>\n          <ion-col size=\"4\"> Dirección\n            <p>Calle La Mutine, s/n 38005 Santa Cruz de Tenerife</p>\n          </ion-col>\n          <ion-col size=\"2\" class=\"ion-text-center\">\n            <fa-icon [icon]=\"icons.airport\"></fa-icon>\n          </ion-col>\n          <ion-col size=\"4\">  Aeropuerto\n            <p>\n              - Aeropuerto de los\n              Rodeos Tenerife Norte\n            </p>\n            <p>\n              - Aeropuerto Reina Sofía\n              Tenerife Sur\n            </p>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col size=\"2\" class=\"ion-text-center\">\n            <fa-icon [icon]=\"icons.bus\"></fa-icon>\n          </ion-col>\n          <ion-col size=\"4\">\n            Guagua\n            <p>Líneas 14, 26, 27, 228,\n              238, 901, 902, 903,\n              904, 908, 934, 937,\n              971 y 972 </p>\n          </ion-col>\n          <ion-col size=\"2\" class=\"ion-text-center\">\n            <fa-icon [icon]=\"icons.parking\"></fa-icon>\n          </ion-col>\n          <ion-col size=\"4\">\n            Parking\n            <p>Parking Estadio</p>\n          </ion-col>\n        </ion-row>\n\n      </ion-grid>\n    </div>\n\n    <div>\n      <h5>Mapa del estadio</h5>\n      <img src=\"assets/estadio/mapa.png\" />\n    </div>\n    \n  </div>\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/views/pages/stadium/stadium.module.ts":
    /*!*******************************************************!*\
      !*** ./src/app/views/pages/stadium/stadium.module.ts ***!
      \*******************************************************/

    /*! exports provided: StadiumPageModule */

    /***/
    function srcAppViewsPagesStadiumStadiumModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StadiumPageModule", function () {
        return StadiumPageModule;
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


      var _stadium_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./stadium.page */
      "./src/app/views/pages/stadium/stadium.page.ts");
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
        component: _stadium_page__WEBPACK_IMPORTED_MODULE_3__["StadiumPage"]
      }];

      var StadiumPageModule = function StadiumPageModule() {
        _classCallCheck(this, StadiumPageModule);
      };

      StadiumPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes)],
        declarations: [_stadium_page__WEBPACK_IMPORTED_MODULE_3__["StadiumPage"]]
      })], StadiumPageModule);
      /***/
    },

    /***/
    "./src/app/views/pages/stadium/stadium.page.scss":
    /*!*******************************************************!*\
      !*** ./src/app/views/pages/stadium/stadium.page.scss ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function srcAppViewsPagesStadiumStadiumPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".stadium {\n  display: block;\n  text-align: center;\n  padding: 16px 16px 0px 16px;\n}\n.stadium p {\n  margin-top: 16px;\n}\n.info {\n  padding: 0px 16px;\n}\n.info h5 {\n  font-weight: bold;\n}\n.info div {\n  padding: 5px 0;\n}\nfa-icon {\n  color: var(--ion-color-primary);\n  font-size: 1.5em;\n}\nion-grid p {\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZXMvc3RhZGl1bS9zdGFkaXVtLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0FBQ0o7QUFDSTtFQUNJLGdCQUFBO0FBQ1I7QUFHQTtFQUNJLGlCQUFBO0FBQUo7QUFFSTtFQUNJLGlCQUFBO0FBQVI7QUFHSTtFQUNJLGNBQUE7QUFEUjtBQUtBO0VBQ0ksK0JBQUE7RUFDQSxnQkFBQTtBQUZKO0FBTUk7RUFDSSxlQUFBO0FBSFIiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9wYWdlcy9zdGFkaXVtL3N0YWRpdW0ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0YWRpdW0ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxNnB4IDE2cHggMHB4IDE2cHg7XG5cbiAgICBwIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTZweDtcbiAgICB9XG59XG5cbi5pbmZvIHtcbiAgICBwYWRkaW5nOiAwcHggMTZweDtcblxuICAgIGg1IHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuXG4gICAgZGl2IHtcbiAgICAgICAgcGFkZGluZzogNXB4IDA7XG4gICAgfVxufVxuXG5mYS1pY29uIHtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIGZvbnQtc2l6ZTogMS41ZW07XG59XG5cbmlvbi1ncmlke1xuICAgIHAge1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgfVxufVxuIl19 */";
      /***/
    },

    /***/
    "./src/app/views/pages/stadium/stadium.page.ts":
    /*!*****************************************************!*\
      !*** ./src/app/views/pages/stadium/stadium.page.ts ***!
      \*****************************************************/

    /*! exports provided: StadiumPage */

    /***/
    function srcAppViewsPagesStadiumStadiumPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StadiumPage", function () {
        return StadiumPage;
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


      var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @fortawesome/free-solid-svg-icons */
      "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");

      var StadiumPage = /*#__PURE__*/function () {
        function StadiumPage() {
          _classCallCheck(this, StadiumPage);

          this.icons = {
            map: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faMapMarkedAlt"],
            airport: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faPlaneDeparture"],
            bus: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faBus"],
            parking: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faParking"]
          };
        }

        _createClass(StadiumPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return StadiumPage;
      }();

      StadiumPage.ctorParameters = function () {
        return [];
      };

      StadiumPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-stadium',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./stadium.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/stadium/stadium.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./stadium.page.scss */
        "./src/app/views/pages/stadium/stadium.page.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], StadiumPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=views-pages-stadium-stadium-module-es5.js.map