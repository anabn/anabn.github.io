(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about-us/about-us.component.html":
/*!**************************************************!*\
  !*** ./src/app/about-us/about-us.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n<div class=\"wrapper second_page\" id=\"info\">\n  <div class=\"grid-item second_page_about_us\">\n    <h4> about us</h4>\n    <p> Join us, make your dream come true.</p>\n  </div>\n      <!-- /.second_page_about_us -->\n  <div class=\"grid-item second_page_slider\">\n      <img src=\"../../assets/images/plane1.jpg\" alt=\"\">\n      <img src=\"../../assets/images/plane2.jpg\" alt=\"\">\n      <img class=\"active\" src=\"../../assets/images/plane3.jpg\" href=\"\">\n      <img src=\"../../assets/images/plane4.jpg\" alt=\"\">\n  </div>\n  <div class=\"grid-item second_page_about_work\">\n      <h5 class = \"work_about\"> “This is impossible!” Said Reason </h5>\n      <h5>\t\"This is recklessness!\"</h5>\n      <h5>\t\"Or maybe not?\" - She muttered caution</h5>\t\n      <h5>\t\"It is useless!\" - Pride grinned</h5>\t\n      <h5>\t\"Try ...\" - whispered Dream</h5>\n        <p> Many people want, but do not know how to fulfill their dream, jump with a parachute or learn to fly an airplane.</p> \n        <p>\tEveryone wants this, but only a few begin to act and achieve the desired. After all, simple dreams will not work without real action. </p>\n        <p>\tEveryone can fulfill his dream only when he really wants it. To realize your dream, you need not just to think about it and present real images, you need to begin to act. </p>\n        <p>\tIf you like it and you want it then start acting. </p>\n  </div>\n  </div>\n  </div>"

/***/ }),

/***/ "./src/app/about-us/about-us.component.sass":
/*!**************************************************!*\
  !*** ./src/app/about-us/about-us.component.sass ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0LXVzL2Fib3V0LXVzLmNvbXBvbmVudC5zYXNzIn0= */"

/***/ }),

/***/ "./src/app/about-us/about-us.component.ts":
/*!************************************************!*\
  !*** ./src/app/about-us/about-us.component.ts ***!
  \************************************************/
/*! exports provided: AboutUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function() { return AboutUsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutUsComponent = /** @class */ (function () {
    function AboutUsComponent() {
    }
    AboutUsComponent.prototype.ngOnInit = function () {
    };
    AboutUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about-us',
            template: __webpack_require__(/*! ./about-us.component.html */ "./src/app/about-us/about-us.component.html"),
            styles: [__webpack_require__(/*! ./about-us.component.sass */ "./src/app/about-us/about-us.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutUsComponent);
    return AboutUsComponent;
}());



/***/ }),

/***/ "./src/app/aerodrome/aerodrome.component.html":
/*!****************************************************!*\
  !*** ./src/app/aerodrome/aerodrome.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n<div class=\"wrapper third_page\" id = \"aerodrome\">\n  <div class=\"grid-item third_page_about_us\">\n    <h4> aerodrome</h4>\n    <p> Lorem ipsum dolor sit amet </p>\n  </div>\n        <!-- /.second_page_about_us -->\n  <div class=\"grid-item third_page_foto\">\n      <div class=\"third_page_foto_1\">\n        <h5>sky diving</h5>\n        <div class = \"third_page_foto_active\">\n          <p>Parachuting is a method of transiting from a high point to</p>\n          <p>Earth with the aid of gravity, involving the control of </p>\n          <p>speed during the descent with the use of a parachute or parachutes.</p>\n          <p><a href =\"#\">know more</a></p>\n        </div>\n      </div>\n      <div class=\"third_page_foto_2\">\n        <h5>aerobatics</h5>\n        <div class = \"third_page_foto_active\">\n          <p>Parachuting is a method of transiting from a high point to</p>\n          <p>Earth with the aid of gravity, involving the control of </p>\n          <p>speed during the descent with the use of a parachute or parachutes.</p>\n          <p><a href =\"#\">know more</a></p>\n        </div>\n      </div>\n      <div class=\"third_page_foto_3\">\n        <h5>fly witn ice-cream</h5>\n        <div class = \"third_page_foto_active\">\n          <p>Parachuting is a method of transiting from a high point to</p>\n          <p>Earth with the aid of gravity, involving the control of </p>\n          <p>speed during the descent with the use of a parachute or parachutes.</p>\n          <p><a href =\"#\">know more</a></p>\n        </div>\t\n      </div>\n      <div class=\"third_page_foto_4\">\n        <h5>co-pilot in plane</h5>\n        <div class = \"third_page_foto_active\">\n          <p>Parachuting is a method of transiting from a high point to</p>\n          <p>Earth with the aid of gravity, involving the control of </p>\n          <p>speed during the descent with the use of a parachute or parachutes.</p>\n          <p><a href =\"#\">know more</a></p>\n        </div>\n      </div>\n      <div class=\"third_page_foto_5\">\n        <h5>one ride</h5>\n        <div class = \"third_page_foto_active\">\n          <p>Parachuting is a method of transiting from a high point to</p>\n          <p>Earth with the aid of gravity, involving the control of </p>\n          <p>speed during the descent with the use of a parachute or parachutes.</p>\n          <p><a href =\"#\">know more</a></p>\n        </div>\n      </div>\n      <div class=\"third_page_foto_6\">\n        <h5>big ballon</h5>\n        <div class = \"third_page_foto_active\">\n          <p>Parachuting is a method of transiting from a high point to</p>\n          <p>Earth with the aid of gravity, involving the control of </p>\n          <p>speed during the descent with the use of a parachute or parachutes.</p>\n          <p><a href =\"#\">know more</a></p>\n        </div>\n      </div>\n  </div>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/aerodrome/aerodrome.component.sass":
/*!****************************************************!*\
  !*** ./src/app/aerodrome/aerodrome.component.sass ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Flcm9kcm9tZS9hZXJvZHJvbWUuY29tcG9uZW50LnNhc3MifQ== */"

/***/ }),

/***/ "./src/app/aerodrome/aerodrome.component.ts":
/*!**************************************************!*\
  !*** ./src/app/aerodrome/aerodrome.component.ts ***!
  \**************************************************/
/*! exports provided: AerodromeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AerodromeComponent", function() { return AerodromeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AerodromeComponent = /** @class */ (function () {
    function AerodromeComponent() {
    }
    AerodromeComponent.prototype.ngOnInit = function () {
    };
    AerodromeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-aerodrome',
            template: __webpack_require__(/*! ./aerodrome.component.html */ "./src/app/aerodrome/aerodrome.component.html"),
            styles: [__webpack_require__(/*! ./aerodrome.component.sass */ "./src/app/aerodrome/aerodrome.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AerodromeComponent);
    return AerodromeComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about-us/about-us.component */ "./src/app/about-us/about-us.component.ts");
/* harmony import */ var _aerodrome_aerodrome_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./aerodrome/aerodrome.component */ "./src/app/aerodrome/aerodrome.component.ts");
/* harmony import */ var _ourteam_ourteam_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ourteam/ourteam.component */ "./src/app/ourteam/ourteam.component.ts");






var routes = [
    { path: '', redirectTo: 'info', pathMatch: 'full' },
    { path: 'info', component: _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_3__["AboutUsComponent"] },
    { path: 'aerodrome', component: _aerodrome_aerodrome_component__WEBPACK_IMPORTED_MODULE_4__["AerodromeComponent"] },
    { path: 'forth', component: _ourteam_ourteam_component__WEBPACK_IMPORTED_MODULE_5__["OurteamComponent"] },
    { path: 'footer', component: _ourteam_ourteam_component__WEBPACK_IMPORTED_MODULE_5__["OurteamComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-header></app-header>\n<router-outlet> \n<!-- <app-about-us></app-about-us>\n<app-aerodrome></app-aerodrome>\n<app-ourteam></app-ourteam>\n<app-maps></app-maps> -->\n</router-outlet>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/app.component.sass":
/*!************************************!*\
  !*** ./src/app/app.component.sass ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2FzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'cutaway';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.sass */ "./src/app/app.component.sass")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about-us/about-us.component */ "./src/app/about-us/about-us.component.ts");
/* harmony import */ var _aerodrome_aerodrome_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./aerodrome/aerodrome.component */ "./src/app/aerodrome/aerodrome.component.ts");
/* harmony import */ var _ourteam_ourteam_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ourteam/ourteam.component */ "./src/app/ourteam/ourteam.component.ts");
/* harmony import */ var _maps_maps_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./maps/maps.component */ "./src/app/maps/maps.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_6__["AboutUsComponent"],
                _aerodrome_aerodrome_component__WEBPACK_IMPORTED_MODULE_7__["AerodromeComponent"],
                _ourteam_ourteam_component__WEBPACK_IMPORTED_MODULE_8__["OurteamComponent"],
                _maps_maps_component__WEBPACK_IMPORTED_MODULE_9__["MapsComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class =\"container\">\n    <div class=\"footer\" id = \"footer\">\n        <p class=\"footer_follow\">Join us, follow your dream</p>\n        <div class=\"icon\">\n            <a href=\"#\" class=\"icon-button twitter\"><i class=\"fab fa-telegram-plane\"></i><span></span></a>\n            <a href=\"https://plus.google.com\" class=\"icon-button google-plus\"><i class=\"fab fa-google-plus-g\"></i><span></span></a>\n            <a href=\"https://twitter.com/minimalmonkey\" class=\"icon-button twitter\"><i class=\"fab fa-twitter\"></i><span></span></a>\n          <a href=\"https://facebook.com\" class=\"icon-button facebook\"><i class=\"fab fa-facebook-f\"></i><span></span></a>\n          </div>\n          <p>♥ from DA-61 Anna Fetsun </p>\n      </div>\n  </div>"

/***/ }),

/***/ "./src/app/footer/footer.component.sass":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.sass ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNhc3MifQ== */"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.sass */ "./src/app/footer/footer.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n<div class=\"wrapper first_page\">\n  <div class=\"grid-item header\">\n      <div class=\"logo\">\n      <a href=\"#info\">sh<span>o</span>pno</a>\n    </div>\n    <ul class=\"menu\">\n      <li class=\" \"> <a router-link=\"info\" href=\"info\"  routerLinkActive=\"active\"> About us </a></li>\n      <li class=\" \"> <a router-link=\"aerodrome\" href=\"aerodrome\"  routerLinkActive=\"active\"> Aerodrome </a></li>\n      <li class=\" \"> <a router-link=\"forth\" href=\"forth\"  routerLinkActive=\"active\"> Contact </a></li>\n    </ul> \n    </div>\n    <div class=\"grid-item idea\">\n       <h2 class=\"main_idea\"> Say hello to <span class=\"active\"> {{ shopno }} </span><br/> <span class=\"active\"> agency </span> corporate {{ shopno }} theme </h2>\n    </div>\n    <div class=\"grid-item contact_us\">\n      <div class=\"button\">\n        <a href=\"footer\" router-link=\"footer\"> contact us </a>\n      </div>\n    </div>\n    <div class=\"grid-item main_photo\">\n    </div>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/header/header.component.sass":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.sass ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNhc3MifQ== */"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.shopno = 'shopno!';
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.sass */ "./src/app/header/header.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/maps/maps.component.html":
/*!******************************************!*\
  !*** ./src/app/maps/maps.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  \t<div class=\"wrapper fifth_page\">\n        <div class=\"fifth_page_contact\">\n          <p>Panas Mirnyi, 19</p>\n          <p>Klovsky station</p>\n          <p>26, IASA, KPI</p>\n          <p>Ukraine</p>\n          <p>e-mail: coca-cola@call.me</p>\n          <p>phono: <span>+380931190611</span></p>\n        </div>\n        <div class=\"fifth_page_maps\">\n        </div>\n      </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/maps/maps.component.sass":
/*!******************************************!*\
  !*** ./src/app/maps/maps.component.sass ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hcHMvbWFwcy5jb21wb25lbnQuc2FzcyJ9 */"

/***/ }),

/***/ "./src/app/maps/maps.component.ts":
/*!****************************************!*\
  !*** ./src/app/maps/maps.component.ts ***!
  \****************************************/
/*! exports provided: MapsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapsComponent", function() { return MapsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MapsComponent = /** @class */ (function () {
    function MapsComponent() {
    }
    MapsComponent.prototype.ngOnInit = function () {
    };
    MapsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-maps',
            template: __webpack_require__(/*! ./maps.component.html */ "./src/app/maps/maps.component.html"),
            styles: [__webpack_require__(/*! ./maps.component.sass */ "./src/app/maps/maps.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MapsComponent);
    return MapsComponent;
}());



/***/ }),

/***/ "./src/app/ourteam/ourteam.component.html":
/*!************************************************!*\
  !*** ./src/app/ourteam/ourteam.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"wrapper forth_page\" id=\"forth\">\n        <div class=\"grid-item forth_page_about_us\">\n          <h4> our team</h4>\n          <p> Lorem ipsum dolor sit amet .</p>\n        </div>\n        <div class=\"forth_page_foto\">\n          <div class=\"forth_page_foto_1\">\n            <h5>Kate Peterson</h5>\n            <p>dufghudgduc</p>\n            <p> Lorem ipsum dolor sit amet .</p>\n            <p><a href =\"#\">know more</a></p>\n          </div>\n          <div class=\"forth_page_foto_2\">\n            <h5>Nikita Linkerman</h5>\n            <p>dufghudgduc</p>\n            <p>dufghudgduc</p>\n            <p><a href =\"#\">know more</a></p>\n          </div>\n          <div class=\"forth_page_foto_3\">\n            <h5> Zimbabve Cardy</h5>\n            <p>dufghudgduc</p>\n            <p>dufghudgduc</p>\n            <p><a href =\"#\">know more</a></p>\n          </div>\n        <div class=\"forth_page_foto_4\">\n            <h5>Link Heider</h5>\n            <p>dufghudgduc</p>\n            <p>dufghudgduc</p>\n            <p><a href =\"#\">know more</a></p>\n          </div>\n          <div class=\"forth_page_foto_5\">\n              <h5>Loser King</h5>\n              <p>dufghudgduc</p>\n              <p>dufghudgduc</p>\n              <p><a href =\"#\">know more</a></p>\n            </div>\n            <div class=\"forth_page_foto_6\">\n                <h5>Poker Face</h5>\n                <p>dufghudgduc</p>\n                <p>dufghudgduc</p>\n                <p><a href =\"#\">know more</a></p>\n              </div>\n              </div>\n            </div>\n          \n  </div>"

/***/ }),

/***/ "./src/app/ourteam/ourteam.component.sass":
/*!************************************************!*\
  !*** ./src/app/ourteam/ourteam.component.sass ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL291cnRlYW0vb3VydGVhbS5jb21wb25lbnQuc2FzcyJ9 */"

/***/ }),

/***/ "./src/app/ourteam/ourteam.component.ts":
/*!**********************************************!*\
  !*** ./src/app/ourteam/ourteam.component.ts ***!
  \**********************************************/
/*! exports provided: OurteamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OurteamComponent", function() { return OurteamComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OurteamComponent = /** @class */ (function () {
    function OurteamComponent() {
        this.myImage = "../../assets/images/maps.jpg";
    }
    OurteamComponent.prototype.ngOnInit = function () {
    };
    OurteamComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ourteam',
            template: __webpack_require__(/*! ./ourteam.component.html */ "./src/app/ourteam/ourteam.component.html"),
            styles: [__webpack_require__(/*! ./ourteam.component.sass */ "./src/app/ourteam/ourteam.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], OurteamComponent);
    return OurteamComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/popcorn/cutaway/boilerplate/cutaway/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map