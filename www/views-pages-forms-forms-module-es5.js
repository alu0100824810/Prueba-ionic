(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-pages-forms-forms-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/forms/forms.page.html":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/forms/forms.page.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppViewsPagesFormsFormsPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-header [showBackButton]=\"false\" name=\"Encuestas\">\n  <ion-buttons start>\n    <ion-back-button defaultHref=\"/home\" text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\n  </ion-buttons>\n</app-header>\n\n<ion-content>\n  <div class=\"ion-padding-top ion-text-center\">\n    <h4>Seleccionar categoria</h4>\n  </div>\n\n  <ion-grid>\n    <ng-container *ngFor=\"let item of data; let i=index;\">\n      <ion-row>\n        <ion-col size=\"6\" *ngFor=\"let item of item.grupo\">\n          <ion-card [routerLink]=\"item.route\" mode=\"md\">\n            <ion-card-header>\n              <fa-icon [icon]=\"item.icon\"></fa-icon>\n              <ion-card-title>{{item.title}}</ion-card-title>\n            </ion-card-header>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n    </ng-container>\n  </ion-grid>\n\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/views/pages/forms/forms.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/views/pages/forms/forms.module.ts ***!
      \***************************************************/

    /*! exports provided: FormsPageModule */

    /***/
    function srcAppViewsPagesFormsFormsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormsPageModule", function () {
        return FormsPageModule;
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


      var _forms_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./forms.page */
      "./src/app/views/pages/forms/forms.page.ts");

      var routes = [{
        path: '',
        component: _forms_page__WEBPACK_IMPORTED_MODULE_5__["FormsPage"]
      }];

      var FormsPageModule = function FormsPageModule() {
        _classCallCheck(this, FormsPageModule);
      };

      FormsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
        declarations: [_forms_page__WEBPACK_IMPORTED_MODULE_5__["FormsPage"]]
      })], FormsPageModule);
      /***/
    },

    /***/
    "./src/app/views/pages/forms/forms.page.scss":
    /*!***************************************************!*\
      !*** ./src/app/views/pages/forms/forms.page.scss ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function srcAppViewsPagesFormsFormsPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "fa-icon {\n  font-size: 3.5em;\n  color: var(--ion-color-primary);\n}\n\nion-card {\n  padding: 15px 5px;\n  text-align: center;\n}\n\nion-card ion-card-title {\n  font-size: 4vw;\n}\n\nion-card ion-card-header {\n  padding: 16px 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZXMvZm9ybXMvZm9ybXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSwrQkFBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUNJO0VBQ0ksY0FBQTtBQUNSOztBQUVJO0VBQ0ksaUJBQUE7QUFBUiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL2Zvcm1zL2Zvcm1zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImZhLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMy41ZW07XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuaW9uLWNhcmQge1xuICAgIHBhZGRpbmc6IDE1cHggNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBcbiAgICBpb24tY2FyZC10aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogNHZ3O1xuICAgIH1cblxuICAgIGlvbi1jYXJkLWhlYWRlcntcbiAgICAgICAgcGFkZGluZzogMTZweCA1cHg7XG4gICAgfVxufVxuIl19 */";
      /***/
    },

    /***/
    "./src/app/views/pages/forms/forms.page.ts":
    /*!*************************************************!*\
      !*** ./src/app/views/pages/forms/forms.page.ts ***!
      \*************************************************/

    /*! exports provided: FormsPage */

    /***/
    function srcAppViewsPagesFormsFormsPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormsPage", function () {
        return FormsPage;
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

      var FormsPage = /*#__PURE__*/function () {
        function FormsPage() {
          _classCallCheck(this, FormsPage);

          this.data = [{
            grupo: [{
              title: 'Partidos',
              icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faCalendarAlt"],
              route: './category/partidos'
            }, {
              title: 'Equipo',
              icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faUsers"],
              route: './category/equipo'
            }]
          }, {
            grupo: [{
              title: 'Servicios',
              icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faTicketAlt"],
              route: './category/servicios'
            }, {
              title: 'Directiva',
              icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faUserTie"],
              route: './category/directiva'
            }]
          }, {
            grupo: [{
              title: 'Estadio',
              icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faFutbol"],
              route: './category/estadio'
            }, {
              title: 'Información',
              icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faInfoCircle"],
              route: './category/información'
            }]
          }];
        }

        _createClass(FormsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return FormsPage;
      }();

      FormsPage.ctorParameters = function () {
        return [];
      };

      FormsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-forms',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./forms.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/forms/forms.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./forms.page.scss */
        "./src/app/views/pages/forms/forms.page.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], FormsPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=views-pages-forms-forms-module-es5.js.map