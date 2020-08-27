(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-pages-polls-polls-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/polls/polls.page.html":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/polls/polls.page.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppViewsPagesPollsPollsPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-header [showBackButton]=\"true\" name=\"Encuestas\"></app-header>\n\n<ion-content class=\"ion-padding\">\n\n  <ng-container>\n    <div class=\"not-available\">\n      <p>No hay encuestas disponibles.</p>\n    </div>\n  </ng-container>\n\n  \n</ion-content>";
      /***/
    },

    /***/
    "./src/app/views/pages/polls/polls.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/views/pages/polls/polls.module.ts ***!
      \***************************************************/

    /*! exports provided: PollsPageModule */

    /***/
    function srcAppViewsPagesPollsPollsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PollsPageModule", function () {
        return PollsPageModule;
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


      var _polls_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./polls.page */
      "./src/app/views/pages/polls/polls.page.ts");
      /* harmony import */


      var app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! app/shared/shared.module */
      "./src/app/shared/shared.module.ts");

      var routes = [{
        path: '',
        component: _polls_page__WEBPACK_IMPORTED_MODULE_4__["PollsPage"]
      }];

      var PollsPageModule = function PollsPageModule() {
        _classCallCheck(this, PollsPageModule);
      };

      PollsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
        declarations: [_polls_page__WEBPACK_IMPORTED_MODULE_4__["PollsPage"]]
      })], PollsPageModule);
      /***/
    },

    /***/
    "./src/app/views/pages/polls/polls.page.scss":
    /*!***************************************************!*\
      !*** ./src/app/views/pages/polls/polls.page.scss ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function srcAppViewsPagesPollsPollsPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".not-available {\n  display: flex;\n  justify-content: center;\n  height: 100%;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZXMvcG9sbHMvcG9sbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9wYWdlcy9wb2xscy9wb2xscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubm90LWF2YWlsYWJsZXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/views/pages/polls/polls.page.ts":
    /*!*************************************************!*\
      !*** ./src/app/views/pages/polls/polls.page.ts ***!
      \*************************************************/

    /*! exports provided: PollsPage */

    /***/
    function srcAppViewsPagesPollsPollsPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PollsPage", function () {
        return PollsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var PollsPage = /*#__PURE__*/function () {
        function PollsPage() {
          _classCallCheck(this, PollsPage);
        }

        _createClass(PollsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return PollsPage;
      }();

      PollsPage.ctorParameters = function () {
        return [];
      };

      PollsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-polls',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./polls.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/polls/polls.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./polls.page.scss */
        "./src/app/views/pages/polls/polls.page.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], PollsPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=views-pages-polls-polls-module-es5.js.map