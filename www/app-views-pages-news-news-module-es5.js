(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-views-pages-news-news-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/news/news.page.html":
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/news/news.page.html ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppViewsPagesNewsNewsPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-header [showBackButton]=\"false\" name=\"Noticias\">\n    <ion-buttons start (click)=\"openSideBar()\">\n        <ion-icon name=\"menu-outline\"></ion-icon>\n    </ion-buttons>\n</app-header>\n\n<app-sidebar-menu #menu></app-sidebar-menu>\n\n<ion-content class=\"ion-padding\">\n    <ng-container *ngFor=\"let item of data\">\n        <ion-card>\n            <img [src]=\"item.img\" />\n            <ion-card-header>\n                <!--<ion-card-subtitle>Destination</ion-card-subtitle>-->\n                <!-- fecha-->\n                <ion-card-title>{{item.title}}</ion-card-title>\n            </ion-card-header>\n            <ion-card-content>{{item.subtitle}}</ion-card-content>\n        </ion-card>\n    </ng-container>\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/shared/mock/news.mock.json":
    /*!********************************************!*\
      !*** ./src/app/shared/mock/news.mock.json ***!
      \********************************************/

    /*! exports provided: 0, 1, 2, 3, 4, 5, default */

    /***/
    function srcAppSharedMockNewsMockJson(module) {
      module.exports = JSON.parse("[{\"title\":\"JACOBO GONZÁLEZ Y EMMANUEL APEH YA SE ENCUENTRAN EN TENERIFE\",\"img\":\"https://files.proyectoclubes.com/tenerife/202008/662x372a_10163858jacobo.jpg\",\"subtitle\":\"Los dos primeros fichajes blanquiazules para la próxima temporada 2020/2021 aterrizaron este lunes al mediodía en el Aeropuerto de Tenerife Norte. Ambos jugadores se comprometieron con la entidad tinerfeñista para las tres próximas temporadas.\"},{\"title\":\"SEIS JUGADORES DEL ÁREA DE FÚTBOL BASE INICIARÁN LA PRETEMPORADA CON EL PRIMER EQUIPO\",\"img\":\"https://files.proyectoclubes.com/tenerife/202008/662x372c_10135056canteranos.jpg\",\"subtitle\":\"Este martes, 11 de agosto, dará comienzo la pretemporada para el CD Tenerife 2020/2021 con las pertinentes pruebas COVID-19. Una vez conocidos los resultados, se llevarán a cabo los reconocimientos médicos en Hospiten Rambla y los primeros entrenamientos a finales de semana. Seis futbolistas de la cadena de filiales blanquiazul iniciarán el trabajo junto a la primera plantilla.\"},{\"title\":\"EL CD TENERIFE OBTIENE UN 97, 92 SOBRE 100 EN TRANSPARENCIA\",\"img\":\"https://files.proyectoclubes.com/tenerife/201512/662x372c_16134449escudo.cdt.puntopenalti.jpg\",\"subtitle\":\"La entidad blanquiazul suma el 100% en cuatro de las cinco áreas medidas. En la tercera edición del Índice de Transparencia de los clubes de fútbol profesionales (INFUT 2019) las 42 entidades de LaLiga obtuvieron una media global de 93, 63%.\"},{\"title\":\"COMIENZA LA PRETEMPORADA BLANQUIAZUL 2020/2021\",\"img\":\"https://files.proyectoclubes.com/tenerife/201907/662x372c_1214062730-reconocimiento-12-07-19-6.jpg\",\"subtitle\":\"El CD Tenerife regresará a los entrenamientos la próxima semana de cara a comenzar a preparar el inicio de la temporada 2020/21. Antes, el primer equipo blanquiazul completará las correspondientes pruebas COVID-19 y los reconocimientos médicos en Hospiten Rambla (Rambla de Santa Cruz, 115).\"},{\"title\":\"A DOS AÑOS DEL CENTENARIO\",\"img\":\"https://files.proyectoclubes.com/tenerife/202008/662x372c_07103816junta-directiva-1922.jpg\",\"subtitle\":\"El CD Tenerife está a dos años de conmemorar su primer siglo de vida. El martes 8 de agosto de 1922 tomaba cuerpo la nueva entidad deportiva, que en una fecha tan trascendental contó con el apoyo de “figuras que representaban la historia entera del ‘foot-ball’ –como todavía se denominaba esta práctica–, desde los lejanos tiempos del Nivaria hasta las últimas manifestaciones del Tenerife Sporting Club”. Noventa y ocho años después, la próxima celebración del Centenario blanquiazul se abre camino.\"},{\"title\":\"JACOBO GONZÁLEZ, NUEVO REFUERZO DEL CD TENERIFE\",\"img\":\"https://files.proyectoclubes.com/tenerife/202008/662x372c_06133048jacoboweb.jpg\",\"subtitle\":\"El extremo madrileño se incopora al conjunto blanquiazul, procedente del RC Celta. Jacobo González se compromete con la entidad tinerfeñista para las próximas tres temporadas después de realizar una muy buena campaña con el filial celeste.\"}]");
      /***/
    },

    /***/
    "./src/app/views/pages/news/news.module.ts":
    /*!*************************************************!*\
      !*** ./src/app/views/pages/news/news.module.ts ***!
      \*************************************************/

    /*! exports provided: NewsPageModule */

    /***/
    function srcAppViewsPagesNewsNewsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewsPageModule", function () {
        return NewsPageModule;
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


      var app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! app/shared/shared.module */
      "./src/app/shared/shared.module.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _news_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./news.page */
      "./src/app/views/pages/news/news.page.ts");

      var routes = [{
        path: '',
        component: _news_page__WEBPACK_IMPORTED_MODULE_5__["NewsPage"]
      }];

      var NewsPageModule = function NewsPageModule() {
        _classCallCheck(this, NewsPageModule);
      };

      NewsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
        declarations: [_news_page__WEBPACK_IMPORTED_MODULE_5__["NewsPage"]]
      })], NewsPageModule);
      /***/
    },

    /***/
    "./src/app/views/pages/news/news.page.scss":
    /*!*************************************************!*\
      !*** ./src/app/views/pages/news/news.page.scss ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function srcAppViewsPagesNewsNewsPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-card-title {\n  font-size: 16px;\n  line-height: 150%;\n}\n\nion-card-content {\n  font-size: 14px;\n}\n\nion-icon {\n  padding: 5px;\n  font-size: 1.6em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZXMvbmV3cy9uZXdzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9wYWdlcy9uZXdzL25ld3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmQtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMTUwJTtcbn1cblxuaW9uLWNhcmQtY29udGVudCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuXG5pb24taWNvbntcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgZm9udC1zaXplOiAxLjZlbTtcbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/views/pages/news/news.page.ts":
    /*!***********************************************!*\
      !*** ./src/app/views/pages/news/news.page.ts ***!
      \***********************************************/

    /*! exports provided: NewsPage */

    /***/
    function srcAppViewsPagesNewsNewsPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewsPage", function () {
        return NewsPage;
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


      var app_shared_mock_news_mock_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! app/shared/mock/news.mock.json */
      "./src/app/shared/mock/news.mock.json");

      var app_shared_mock_news_mock_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(
      /*! app/shared/mock/news.mock.json */
      "./src/app/shared/mock/news.mock.json", 1);
      /* harmony import */


      var app_shared_components_sidebar_menu_sidebar_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! app/shared/components/sidebar-menu/sidebar-menu.component */
      "./src/app/shared/components/sidebar-menu/sidebar-menu.component.ts");

      var NewsPage = /*#__PURE__*/function () {
        function NewsPage() {
          _classCallCheck(this, NewsPage);

          this.data = app_shared_mock_news_mock_json__WEBPACK_IMPORTED_MODULE_2__; // TODO: PROVISIONAL
        }

        _createClass(NewsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "openSideBar",
          value: function openSideBar() {
            this.sideBar.openSideBar();
          }
        }]);

        return NewsPage;
      }();

      NewsPage.ctorParameters = function () {
        return [];
      };

      NewsPage.propDecorators = {
        sideBar: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['menu']
        }]
      };
      NewsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-news',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./news.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/news/news.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./news.page.scss */
        "./src/app/views/pages/news/news.page.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], NewsPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=app-views-pages-news-news-module-es5.js.map