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

/***/ "./src/app/add-fighter/add-fighter.component.css":
/*!*******************************************************!*\
  !*** ./src/app/add-fighter/add-fighter.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC1maWdodGVyL2FkZC1maWdodGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/add-fighter/add-fighter.component.html":
/*!********************************************************!*\
  !*** ./src/app/add-fighter/add-fighter.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='card'>\n  <div class='card-body'>\n    <form>\n      <!-- Fighter Name  -->\n      <div class=\"form-group\">\n        <label for=\"fighterName\">Fighter Name</label>\n        <input type=\"text\" class=\"form-control\" id=\"fighterName\" name=\"fighterName\" placeholder=\"Enter Fighter Name\"\n          [(ngModel)]=\"fighterName\">\n      </div>\n      <!-- Fighter DOB -->\n      <div class=\"form-group\">\n        <label for=\"fighterDOB\">Fighter Date of Birth</label>\n        <input type=\"datetime\" class=\"form-control\" id=\"fighterDOB\" name=\"fighterDOB\" placeholder=\"Enter Fighter DOB\"\n          [(ngModel)]=\"fighterDOB\">\n      </div>\n      <!-- Nationality -->\n      <div class=\"form-group\">\n        <label for=\"nationality\">Nationality</label>\n        <input type=\"text\" class=\"form-control\" id=\"nationality\" name=\"nationality\" placeholder=\"Enter Nationality\"\n          [(ngModel)]=\"nationality\">\n      </div>\n      <!-- Fighting Style -->\n      <div class=\"form-group\">\n        <label for=\"fightingStyle\">Fighting Style</label>\n        <input type=\"text\" class=\"form-control\" id=\"fightingStyle\" name=\"fightingStyle\"\n          placeholder=\"Enter Fighting Style\" [(ngModel)]=\"fightingStyle\">\n      </div>\n      <!-- Weight Class -->\n      <div class=\"form-group\">\n        <label for=\"weightClass\">Weight Class</label>\n        <input type=\"text\" class=\"form-control\" id=\"weightClass\" name=\"weightClass\" placeholder=\"Enter Weight Class\"\n          [(ngModel)]=\"weightClass\">\n      </div>\n      <!-- Ranking -->\n      <div class=\"form-group\">\n        <label for=\"ranking\">Enter Pount for Pound Ranking</label>\n        <input type=\"number\" class=\"form-control\" id=\"ranking\" name=\"ranking\" placeholder=\"Enter Ranking\"\n          [(ngModel)]=\"ranking\">\n      </div>\n      <!-- User Rating -->\n      <div class=\"form-group\">\n        <label for=\"userRating\">User Rating</label>\n        <input type=\"number\" class=\"form-control\" id=\"userRating\" name=\"userRating\" placeholder=\"Enter User Rating\"\n          [(ngModel)]=\"userRating\">\n      </div>\n\n      <!-- Comment -->\n      <div class=\"form-group\">\n        <label for=\"comment\">Enter Comment</label>\n        <input type=\"text\" class=\"form-control\" id=\"comment\" name=\"comment\" placeholder=\"Enter Comment\"\n          [(ngModel)]=\"comment\">\n      </div>\n      \n      <!-- Add Multiple Comments -->\n      <div class=\"form-group\">\n        <label for=\"commentCollection\">Enter Multiple Comments</label>\n        <input type=\"text\" class=\"form-control\" id=\"commentCollection\" name=\"commentCollection\" placeholder=\"Enter Multiple Comments\"\n          [(ngModel)]=\"commentCollection\">\n      </div>\n      <!-- Search ClipArt API for images -->\n      <div class=\"form-group\" fxLayout=\"row\" fxLayoutGap=\"20px\">\n        <input fxFlex=\"60\" type=\"text\" class=\"form-control\" id=\"imageStr\" name=\"imageStr\"\n          placeholder=\"Enter Image String\" [(ngModel)]='imageStr'>\n        <button fxFlex=\"20\" mat-raised-button color=\"primary\" type=\"submit\" (click)=\"showHideDisplayClipartComponent()\">\n          Find Images </button>\n      </div>\n\n      <!-- if there is Clip art, add its URL to the addImageString.... event -->\n      <div class=\"form-group\">\n        <app-display-clipart (addImageStringEE)=\"addImageStringToFormTextBox($event)\"\n          *ngIf='showDisplayClipartComponent' [imageStr]='imageStr'></app-display-clipart>\n      </div>\n      <!-- Fighter Image -->\n      <div class=\"form-group\">\n        <input type=\"text\" class=\"form-control\" id=\"imageUrl\" name=\"imageUrl\" placeholder=\"Enter Image URL\"\n          [(ngModel)]='imageUrl'>\n      </div>\n      \n\n      <button type=\"submit\" (click)=\"addFighter()\" class=\"btn btn-primary\">Add Fighter</button>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/add-fighter/add-fightercomponent.ts":
/*!*****************************************************!*\
  !*** ./src/app/add-fighter/add-fightercomponent.ts ***!
  \*****************************************************/
/*! exports provided: AddFighterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddFighterComponent", function() { return AddFighterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_fighter_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/fighter.service */ "./src/app/shared/fighter.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddFighterComponent = /** @class */ (function () {
    function AddFighterComponent(_fighterService, router, fb) {
        this._fighterService = _fighterService;
        this.router = router;
        this.fb = fb;
    }
    // router will redirect after the form is submitted
    AddFighterComponent.prototype.showHideDisplayClipartComponent = function () {
        this.showDisplayClipartComponent = !this.showDisplayClipartComponent;
        return false; // this will hide the display until it is needed
    };
    AddFighterComponent.prototype.addImageStringToFormTextBox = function (evt) {
        this.imageUrl = evt;
        return false;
    };
    AddFighterComponent.prototype.ngOnInit = function () {
        // this.form1 = this.formbuilder.group({
        //   fightername: ['', Validators.required],
        //   fighterdob: ['', Validators.required],
        //   NATIONALITY: ['', Validators.required],
        // });
    };
    // get fighterName() { return this.form1.get('fighterName'); }
    // get fighterDOB() { return this.form1.get('fighterDOB'); }
    // get nationality() { return this.form1.get('nationality'); }
    // get fightingStyle() { return this.form1.get('fightingStyle'); }
    // When submit button is clicked, it calls this method
    AddFighterComponent.prototype.addFighter = function () {
        var fighter = {
            id: this.id,
            fighterName: this.fighterName,
            fighterDOB: this.fighterDOB,
            nationality: this.nationality,
            fightingStyle: this.fightingStyle,
            ranking: this.ranking,
            userRating: this.userRating,
            imageUrl: this.imageUrl,
            comment: this.comment,
            commentCollection: this.commentCollection,
            weightClass: this.weightClass
        };
        // Lastly then we call our service method which will add our fighter to the colletion of fighters
        this._fighterService.addFighter(fighter);
        // This will redirect to the 'fighter-list component'
        this.router.navigate(['/fighter-list']);
    };
    AddFighterComponent.prototype.onSubmit = function () {
        // console.log(this.form1.value);
    };
    AddFighterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-fighter',
            template: __webpack_require__(/*! ./add-fighter.component.html */ "./src/app/add-fighter/add-fighter.component.html"),
            styles: [__webpack_require__(/*! ./add-fighter.component.css */ "./src/app/add-fighter/add-fighter.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_fighter_service__WEBPACK_IMPORTED_MODULE_1__["FighterService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], AddFighterComponent);
    return AddFighterComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <app-fighter-list></app-fighter-list> -->\n<app-nav></app-nav>\n<!-- <app-add-fighter></app-add-fighter> -->\n\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_fighter_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/fighter.service */ "./src/app/shared/fighter.service.ts");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// // Initialize Firebase
var firebaseConfig = {
    // tslint:disable-next-line: quotemark
    apiKey: "AIzaSyC35IIq7yxHqiYM8c9k3Q8F6vKKx362GLo",
    authDomain: 'fighterapp-ab993.firebaseapp.com',
    databaseURL: 'https://fighterapp-ab993.firebaseio.com',
    projectId: 'fighterapp-ab993',
    storageBucket: 'fighterapp-ab993.appspot.com',
    messagingSenderId: '346903218518',
    appId: '1:346903218518:web:0ea551985a466970cc6ef7',
    measurementId: 'G-GKZ47ZDV3N'
};
firebase_app__WEBPACK_IMPORTED_MODULE_2__["initializeApp"](firebaseConfig);
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app works';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            providers: [_shared_fighter_service__WEBPACK_IMPORTED_MODULE_1__["FighterService"]],
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: socialConfigs, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "socialConfigs", function() { return socialConfigs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _fighter_list_fighter_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fighter-list/fighter-list.component */ "./src/app/fighter-list/fighter-list.component.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_convert_to_spaces_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/convert-to-spaces.pipe */ "./src/app/shared/convert-to-spaces.pipe.ts");
/* harmony import */ var _shared_star_rating_star_rating_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/star-rating/star-rating.component */ "./src/app/shared/star-rating/star-rating.component.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _add_fighter_add_fightercomponent__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./add-fighter/add-fightercomponent */ "./src/app/add-fighter/add-fightercomponent.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./notifications/notifications.component */ "./src/app/notifications/notifications.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _service_auth_guard__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./service/auth.guard */ "./src/app/service/auth.guard.ts");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var _service_notification_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./service/notification.service */ "./src/app/service/notification.service.ts");
/* harmony import */ var _display_clipart_display_clipart_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./display-clipart/display-clipart.component */ "./src/app/display-clipart/display-clipart.component.ts");
/* harmony import */ var _fighter_fighter_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./fighter/fighter.component */ "./src/app/fighter/fighter.component.ts");
/* harmony import */ var angular_6_social_login_v2__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! angular-6-social-login-v2 */ "./node_modules/angular-6-social-login-v2/angular-6-social-login-v2.umd.js");
/* harmony import */ var angular_6_social_login_v2__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(angular_6_social_login_v2__WEBPACK_IMPORTED_MODULE_33__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



























// import { FlexLayoutModule } from '@angular/flex-layout';








function socialConfigs() {
    var config = new angular_6_social_login_v2__WEBPACK_IMPORTED_MODULE_33__["AuthServiceConfig"]([
        {
            id: angular_6_social_login_v2__WEBPACK_IMPORTED_MODULE_33__["FacebookLoginProvider"].PROVIDER_ID,
            provider: new angular_6_social_login_v2__WEBPACK_IMPORTED_MODULE_33__["FacebookLoginProvider"]('app -id')
        },
        {
            id: angular_6_social_login_v2__WEBPACK_IMPORTED_MODULE_33__["GoogleLoginProvider"].PROVIDER_ID,
            provider: new angular_6_social_login_v2__WEBPACK_IMPORTED_MODULE_33__["GoogleLoginProvider"]('app-id')
        }
    ]);
    return config;
}
_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_15__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_16__["faStar"]);
var routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full', canActivate: [_service_auth_guard__WEBPACK_IMPORTED_MODULE_28__["AuthGuard"]] },
    { path: 'fighter-list', component: _fighter_list_fighter_list_component__WEBPACK_IMPORTED_MODULE_4__["FighterListComponent"], canActivate: [_service_auth_guard__WEBPACK_IMPORTED_MODULE_28__["AuthGuard"]] },
    { path: 'add-fighter', component: _add_fighter_add_fightercomponent__WEBPACK_IMPORTED_MODULE_18__["AddFighterComponent"], canActivate: [_service_auth_guard__WEBPACK_IMPORTED_MODULE_28__["AuthGuard"]] },
    { path: 'pageNotFound', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_19__["PageNotFoundComponent"], canActivate: [_service_auth_guard__WEBPACK_IMPORTED_MODULE_28__["AuthGuard"]] },
    { path: 'home', component: _fighter_list_fighter_list_component__WEBPACK_IMPORTED_MODULE_4__["FighterListComponent"], canActivate: [_service_auth_guard__WEBPACK_IMPORTED_MODULE_28__["AuthGuard"]] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_22__["LoginComponent"] },
    { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_24__["SignupComponent"] },
    { path: '**', redirectTo: 'login', canActivate: [_service_auth_guard__WEBPACK_IMPORTED_MODULE_28__["AuthGuard"]] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _fighter_list_fighter_list_component__WEBPACK_IMPORTED_MODULE_4__["FighterListComponent"],
                _add_fighter_add_fightercomponent__WEBPACK_IMPORTED_MODULE_18__["AddFighterComponent"],
                _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_19__["PageNotFoundComponent"],
                _shared_convert_to_spaces_pipe__WEBPACK_IMPORTED_MODULE_12__["ConvertToSpaces"],
                _shared_star_rating_star_rating_component__WEBPACK_IMPORTED_MODULE_13__["StarRatingComponent"],
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_20__["NavComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_22__["LoginComponent"],
                _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_23__["NotificationsComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_24__["SignupComponent"],
                _display_clipart_display_clipart_component__WEBPACK_IMPORTED_MODULE_31__["DisplayClipartComponent"],
                _fighter_fighter_component__WEBPACK_IMPORTED_MODULE_32__["FighterComponent"]
            ],
            imports: [
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuthModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_27__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_27__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_27__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_27__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_27__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_27__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_27__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_27__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_27__["MatCardModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__["BrowserAnimationsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_6__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].firebase),
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestoreModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
                // tslint:disable-next-line: deprecation
                _angular_http__WEBPACK_IMPORTED_MODULE_10__["HttpModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_14__["FontAwesomeModule"],
            ],
            providers: [{ provide: _angular_common__WEBPACK_IMPORTED_MODULE_17__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_17__["HashLocationStrategy"] }, _service_auth_service__WEBPACK_IMPORTED_MODULE_29__["AuthService"], _service_auth_guard__WEBPACK_IMPORTED_MODULE_28__["AuthGuard"], _service_notification_service__WEBPACK_IMPORTED_MODULE_30__["NotificationService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/display-clipart/display-clipart.component.css":
/*!***************************************************************!*\
  !*** ./src/app/display-clipart/display-clipart.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rpc3BsYXktY2xpcGFydC9kaXNwbGF5LWNsaXBhcnQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/display-clipart/display-clipart.component.html":
/*!****************************************************************!*\
  !*** ./src/app/display-clipart/display-clipart.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" class=\"layout\" fxLayoutAlign=\"space-evenly stretch\" fxLayoutGap=\"20px\" *ngIf='clipArtData'>\n  <mat-card fxFlex=\"0 1 calc(20% - 20px)\" *ngFor=\"let image of clipArtData.payload\">\n    <mat-card-header>\n      <mat-card-title> {{image.title}} </mat-card-title>\n    </mat-card-header>\n    <img class=\"image\" mat-card-md-image [src]='image.svg.url' [title]='image.title'>\n\n    <mat-card-actions fxLayoutAlign=\"center end\">\n      <button mat-raised-button color=\"primary\" (click)=\"selectImage(image.svg.url)\">Use Image </button>\n    </mat-card-actions>\n  </mat-card>\n</div>"

/***/ }),

/***/ "./src/app/display-clipart/display-clipart.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/display-clipart/display-clipart.component.ts ***!
  \**************************************************************/
/*! exports provided: DisplayClipartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayClipartComponent", function() { return DisplayClipartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_clipart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/clipart.service */ "./src/app/shared/clipart.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DisplayClipartComponent = /** @class */ (function () {
    function DisplayClipartComponent(_clipArt) {
        this._clipArt = _clipArt;
        // Passsing back up the URL of the selected image
        this.addImageStringEE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    DisplayClipartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._clipArt.getImageList(this.imageStr).subscribe(function (data) {
            _this.clipArtData = data;
        });
    };
    // Event to pass up the URL of the image
    DisplayClipartComponent.prototype.selectImage = function (imageStr) {
        this.addImageStringEE.emit(imageStr);
        return false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], DisplayClipartComponent.prototype, "imageStr", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], DisplayClipartComponent.prototype, "addImageStringEE", void 0);
    DisplayClipartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-display-clipart',
            template: __webpack_require__(/*! ./display-clipart.component.html */ "./src/app/display-clipart/display-clipart.component.html"),
            styles: [__webpack_require__(/*! ./display-clipart.component.css */ "./src/app/display-clipart/display-clipart.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_clipart_service__WEBPACK_IMPORTED_MODULE_1__["ClipartService"]])
    ], DisplayClipartComponent);
    return DisplayClipartComponent;
}());



/***/ }),

/***/ "./src/app/fighter-list/fighter-list.component.css":
/*!*********************************************************!*\
  !*** ./src/app/fighter-list/fighter-list.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "thead{\n    color: black\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmlnaHRlci1saXN0L2ZpZ2h0ZXItbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0k7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2ZpZ2h0ZXItbGlzdC9maWdodGVyLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRoZWFke1xuICAgIGNvbG9yOiBibGFja1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/fighter-list/fighter-list.component.html":
/*!**********************************************************!*\
  !*** ./src/app/fighter-list/fighter-list.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='card'>\n  <div class='card-body'>\n    <!-- Filter by Fighter Name -->\n    <div class=\"input-group mb-3\" ng-repeat=\"fighter in fighters  | filter:query\">\n      <input type=\"text\"  [(ngModel)]='listFilter' class=\"form-control\" placeholder=\"Filter by Fighter Name:\" aria-label=\"Filter by:\"\n        aria-describedby=\"basic-addon1\">\n    </div>\n    <!-- Checkbox Filter -->\n    <div class=\"input-group mb-3\">\n      <input type=\"checkbox\" id=\"flyW\" [(ngModel)]=\"checkboxFilter.Flyweight\" (ngModelChange)=\"filterChange()\" style=\"margin-left: 20px;\">\n      <label for=\"flyW\">Flyweight</label>\n      <input type=\"checkbox\" id=\"banW\" [(ngModel)]=\"checkboxFilter.Bantamweight\" (ngModelChange)=\"filterChange()\" style=\"margin-left: 20px;\">\n      <label for=\"banW\">Bantamweight</label>\n      <input type=\"checkbox\" id=\"featW\" [(ngModel)]=\"checkboxFilter.Featherweight\" (ngModelChange)=\"filterChange()\" style=\"margin-left: 20px;\">\n      <label for=\"featW\">Featherweight</label>\n      <input type=\"checkbox\" id=\"lightW\" [(ngModel)]=\"checkboxFilter.Lightweight\" (ngModelChange)=\"filterChange()\" style=\"margin-left: 20px;\">\n      <label for=\"lightW\">Lightweight</label>\n      <input type=\"checkbox\" id=\"weltW\" [(ngModel)]=\"checkboxFilter.Welterweight\" (ngModelChange)=\"filterChange()\" style=\"margin-left: 20px;\"> \n      <label for=\"weltW\">Welterweight</label>\n      <input type=\"checkbox\" id=\"middW\" [(ngModel)]=\"checkboxFilter.Middleweight\" (ngModelChange)=\"filterChange()\" style=\"margin-left: 20px;\">\n      <label for=\"middW\">Middleweight</label>\n      <input type=\"checkbox\" id=\"lightHW\" [(ngModel)]=\"checkboxFilter.Lightheavyweight\" (ngModelChange)=\"filterChange()\" style=\"margin-left: 20px;\">\n      <label for=\"lightHW\">Lightheavyweight</label>\n      <input type=\"checkbox\" id=\"heavW\" [(ngModel)]=\"checkboxFilter.Heavyweight\" (ngModelChange)=\"filterChange()\" style=\"margin-left: 20px;\">\n      <label for=\"heavW\">Heavyweight</label>\n      <input type=\"checkbox\" id=\"all\" [(ngModel)]=\"checkboxFilter.All\" (ngModelChange)=\"displayAll()\" style=\"margin-left: 20px;\">\n      <label for=\"all\">All</label>\n    </div>\n\n    <h5 class=\"card-text\">{{listFilter}}</h5>\n    <div class='table-responsive'>\n      <table class='table' *ngIf='fighters && fighters.length'>\n        <thead>\n          <tr>\n            <th>\n              <button class='btn btn-primary' (click)='toggleImage()'>\n                {{showImage ? 'Hide':'Show'}} Image\n              </button>\n            </th>\n            <th>Fighter</th>\n            <th>D.O.B.</th>\n            <th>Nationality</th>\n            <th>Fighting Style</th>\n            <!-- <th>User Rating</th> -->\n            <th>P4P Ranking</th>\n            <th>Weight Class</th>\n            <th>Comments</th>\n            <th>User Rating</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let fighter of filteredFighters\">\n            <td>\n              <img *ngIf='showImage' [src]='fighter.imageUrl' [title]='fighter.fighterName' [style.width.px]='imageWidth'\n                [style.margin.px]='imageMargin'>\n            </td>\n            <td>{{fighter.fighterName}}</td>\n            <td>{{fighter.fighterDOB | convertToSpaces:'-'}}</td>\n            <td>{{fighter.nationality}}</td>\n            <td>{{fighter.fightingStyle}}</td>\n            <td>{{fighter.ranking}}</td>\n            <!-- <td>{{fighter.userRating}}</td> -->\n            <td>{{fighter.weightClass}}</td>\n            <!-- <td>{{fighter.comments}}</td> -->\n            <td>{{fighter.commentCollection}}</td>\n            <td>\n              <app-star-rating [rating]='fighter.starRating' (notify)='onNotify($event)'></app-star-rating>\n            </td>\n            <td>\n              <button id=\"delete\" class=\"fa fa-trash\" (click)=\"deleteFighter(fighter.id)\" (click)=\"clearState()\">Delete</button>\n            </td>\n             <td>\n               <button id=\"update\" (click)=\"editFighter($event, fighter)\" class=\"fa fa-pencil\" >Update</button>\n            </td>\n<td>\n            <button *ngIf=\"editState && fighterToEdit.id == fighter.id\" id=\"compress\" (click)=\"clearState()\" class=\"fa fa-compress\">Collapse</button>\n</td>\n            <!-- Checking if the fighter has clicked the update button and getting the item to edit-->\n            <div *ngIf=\"editState && fighterToEdit.id == fighter.id\"> \n              \n                <div class='card' style=\"float: left;\">\n                    <div class='card-body'>\n                <form (ngSubmit)=\"updateFighter(fighter)\" >\n                    <!-- Fighter Name  -->\n                    <div class=\"form-group\">\n                      <input type=\"text\" class=\"form-control\" id=\"fighterName\" name=\"fighterName\" placeholder=\"Enter Fighter Name\"\n                        [(ngModel)]=\"fighter.fighterName\">\n                    </div>\n                    <!-- Fighter DOB -->\n                    <div class=\"form-group\">\n                      <input type=\"datetime\" class=\"form-control\" id=\"fighterDOB\" name=\"fighterDOB\" placeholder=\"Enter Fighter DOB\"\n                        [(ngModel)]=\"fighter.fighterDOB\">\n                    </div>\n                    <!-- Nationality -->\n                    <div class=\"form-group\">\n                      <input type=\"text\" class=\"form-control\" id=\"nationality\" name=\"nationality\" placeholder=\"Enter Nationality\"\n                        [(ngModel)]=\"fighter.nationality\">\n                    </div>\n                    <!-- Fighting Style -->\n                    <div class=\"form-group\">\n                      <input type=\"text\" class=\"form-control\" id=\"fightingStyle\" name=\"fightingStyle\"\n                        placeholder=\"Enter Fighting Style\" [(ngModel)]=\"fighter.fightingStyle\">\n                    </div>\n                    <!-- Weight Class -->\n                    <div class=\"form-group\">\n                      <input type=\"text\" class=\"form-control\" id=\"weightClass\" name=\"weightClass\" placeholder=\"Enter Weight Class\"\n                        [(ngModel)]=\"fighter.weightClass\">\n                    </div>\n                    <!-- Ranking -->\n                    <div class=\"form-group\">\n                      <input type=\"number\" class=\"form-control\" id=\"ranking\" name=\"ranking\" placeholder=\"Enter Ranking\"\n                        [(ngModel)]=\"fighter.ranking\">\n                    </div>\n                    <!-- User Rating -->\n                    <div class=\"form-group\">\n                      <input type=\"number\" class=\"form-control\" id=\"userRating\" name=\"userRating\" placeholder=\"Enter User Rating\"\n                        [(ngModel)]=\"fighter.userRating\">\n                    </div>\n              \n                    <!-- Comment -->\n                    <div class=\"form-group\">\n                      <input type=\"text\" class=\"form-control\" id=\"comment\" name=\"comment\" placeholder=\"Enter Comment\"\n                        [(ngModel)]=\"fighter.comment\">\n                    </div>\n                    \n                    <!-- Add Multiple Comments -->\n                    <div class=\"form-group\">\n                      <input type=\"text\" class=\"form-control\" id=\"commentCollection\" name=\"commentCollection\" placeholder=\"Enter Multiple Comments\"\n                        [(ngModel)]=\"fighter.commentCollection\">\n                    </div>\n                    <!-- Search ClipArt API for images -->\n                    <div class=\"form-group\" fxLayout=\"row\" fxLayoutGap=\"20px\">\n                      <input fxFlex=\"60\" type=\"text\" class=\"form-control\" id=\"imageStr\" name=\"imageStr\"\n                        placeholder=\"Enter Image String\" [(ngModel)]='imageStr'>\n                      <button fxFlex=\"20\" mat-raised-button color=\"primary\" type=\"submit\" (click)=\"showHideDisplayClipartComponent()\">\n                        Find Images </button>\n                    </div>\n              \n                    <!-- if there is Clip art, add its URL to the addImageString.... event -->\n                    <div class=\"form-group\">\n                      <app-display-clipart (addImageStringEE)=\"addImageStringToFormTextBox($event)\"\n                        *ngIf='showDisplayClipartComponent' [imageStr]='imageStr'></app-display-clipart>\n                    </div>\n                    <!-- Fighter Image -->\n                    <div class=\"form-group\">\n                      <input type=\"text\" class=\"form-control\" id=\"imageUrl\" name=\"imageUrl\" placeholder=\"Enter Image URL\"\n                        [(ngModel)]='imageUrl'>\n                    </div>\n                    <button type=\"submit\"class=\"btn btn-primary\">Update Fighter</button>\n                  </form>\n                  </div>\n                  </div>\n              </div>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/fighter-list/fighter-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/fighter-list/fighter-list.component.ts ***!
  \********************************************************/
/*! exports provided: FighterListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FighterListComponent", function() { return FighterListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_fighter_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/fighter.service */ "./src/app/shared/fighter.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// tslint:disable-next-line: import-spacing


var FighterListComponent = /** @class */ (function () {
    function FighterListComponent(_fighterService) {
        this._fighterService = _fighterService;
        // tslint:disable-next-line: no-inferrable-types
        this.pageTitle = 'Fighter Application';
        this.imageWidth = 50;
        this.imageMargin = 2;
        this.showImage = false;
        this.errorMessage = 'Observable failed!';
        this.checkboxFilter = {
            Flyweight: false, Bantamweight: false, Featherweight: false, Lightweight: false, Welterweight: false,
            Middleweight: false, Lightheavyweight: false, Heavyweight: false, All: false
        };
        this.editState = false;
    }
    Object.defineProperty(FighterListComponent.prototype, "listFilter", {
        get: function () {
            return this._listFilter;
        },
        set: function (value) {
            // if listFilter value is empty, return full list of fighters.
            // if listFilter has something in it, execute function to pull out fighters from list and sort them into filteredFighters
            this._listFilter = value;
            // JavaScript conditonal operator, If list filter is empty
            this.filteredFighters = this.listFilter ? this.performFilter(this.listFilter) : this.fighters;
        },
        enumerable: true,
        configurable: true
    });
    FighterListComponent.prototype.performFilter = function (filterBy) {
        filterBy = filterBy.toLocaleLowerCase();
        // tslint:disable-next-line: triple-equals
        return this.fighters.filter(function (fighter) { return fighter.fighterName.toLocaleLowerCase().indexOf(filterBy) != -1; });
        // return filtered list of Fighter using JavaScript bult-in 'filter' function
        // extract each fighter in fighter array, convert fighterName to lower case
        // check for index of what is passed in, if index is (-1) indicates it found nothing
    };
    FighterListComponent.prototype.onNotify = function (message) {
        console.log(message);
    };
    FighterListComponent.prototype.toggleImage = function () {
        this.showImage = !this.showImage;
    };
    FighterListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._fighterService.getFighters().subscribe(function (fighters) {
            _this.fighters = fighters;
            _this.filteredFighters = _this.fighters;
        }, function (error) { return _this.errorMessage = error; });
    };
    FighterListComponent.prototype.deleteFighter = function (id) {
        console.log('Fighters Are:' + this.fighters);
        this._fighterService.deleteFighter(id);
        this.clearState();
    };
    FighterListComponent.prototype.filterChange = function () {
        var _this = this;
        this.filteredFighters = this.fighters.filter(function (x) {
            return (x.weightClass === 'Flyweight' && _this.checkboxFilter.Flyweight) ||
                (x.weightClass === 'Bantamweight' && _this.checkboxFilter.Bantamweight) ||
                (x.weightClass === 'Featherweight' && _this.checkboxFilter.Featherweight) ||
                (x.weightClass === 'Lightweight' && _this.checkboxFilter.Lightweight) ||
                (x.weightClass === 'Welterweight' && _this.checkboxFilter.Welterweight) ||
                (x.weightClass === 'Bantamweight' && _this.checkboxFilter.Bantamweight) ||
                (x.weightClass === 'Middleweight' && _this.checkboxFilter.Middleweight) ||
                (x.weightClass === 'Lightheavyweight' && _this.checkboxFilter.Lightheavyweight) ||
                (x.weightClass === 'Heavyweight' && _this.checkboxFilter.Heavyweight);
        });
    };
    FighterListComponent.prototype.displayAll = function () {
        this.filteredFighters = this.fighters;
    };
    FighterListComponent.prototype.editFighter = function (event, fighter) {
        console.log("edit fighter called");
        this.editState = true;
        this.fighterToEdit = fighter;
    };
    FighterListComponent.prototype.updateFighter = function (fighter) {
        console.log("update fighter called");
        this._fighterService.updateFighter(fighter);
        this.clearState();
    };
    FighterListComponent.prototype.clearState = function () {
        console.log("clear state called");
        this.editState = false;
        this.fighterToEdit = null;
    };
    FighterListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-fighter-list',
            template: __webpack_require__(/*! ./fighter-list.component.html */ "./src/app/fighter-list/fighter-list.component.html"),
            styles: [__webpack_require__(/*! ./fighter-list.component.css */ "./src/app/fighter-list/fighter-list.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_fighter_service__WEBPACK_IMPORTED_MODULE_1__["FighterService"]])
    ], FighterListComponent);
    return FighterListComponent;
}());



/***/ }),

/***/ "./src/app/fighter/fighter.component.css":
/*!***********************************************!*\
  !*** ./src/app/fighter/fighter.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZpZ2h0ZXIvZmlnaHRlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/fighter/fighter.component.html":
/*!************************************************!*\
  !*** ./src/app/fighter/fighter.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  fighter works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/fighter/fighter.component.ts":
/*!**********************************************!*\
  !*** ./src/app/fighter/fighter.component.ts ***!
  \**********************************************/
/*! exports provided: FighterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FighterComponent", function() { return FighterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FighterComponent = /** @class */ (function () {
    function FighterComponent() {
    }
    FighterComponent.prototype.ngOnInit = function () {
    };
    FighterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-fighter',
            template: __webpack_require__(/*! ./fighter.component.html */ "./src/app/fighter/fighter.component.html"),
            styles: [__webpack_require__(/*! ./fighter.component.css */ "./src/app/fighter/fighter.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FighterComponent);
    return FighterComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-card-content>\n    <form class=\"my-form\" [formGroup]=\"form\" (ngSubmit)=\"login()\">\n      <mat-form-field class=\"full-width\">\n        <mat-label>Email</mat-label>\n        <input matInput placeholder=\"Email\" type=\"email\" formControlName=\"email\">\n      </mat-form-field>\n      <mat-form-field class=\"full-width\">\n        <mat-label>Password</mat-label>\n        <input matInput placeholder=\"Password\" type=\"password\" name=\"password\" formControlName=\"password\">\n      </mat-form-field>\n    </form>\n  </mat-card-content>\n \n  <!-- Regular login -->\n  <mat-card-actions>\n    <button mat-raised-button (click)=\"login()\" color=\"primary\">Login</button>\n  </mat-card-actions>\n<mat-card-actions>\n  \n  <!-- Button to log with Facebook -->\n  <button mat-raised-button (click)=\"FacebookLogin()\" color=\"primary\">\n    <i class=\"fa fa-facebook\" aria-hidden=\"true\"></i>\n    Login with Facebook\n  </button>\n  \n  <!-- Button to log in with Google -->\n  <button mat-raised-button (click)=\"GoogleLogin()\" color=\"primary\">\n    <i class=\"fa fa-google\" aria-hidden=\"true\"></i>\n    Login with Google\n  </button>\n</mat-card-actions>\n</mat-card>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/auth.service */ "./src/app/service/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb, myRoute, auth) {
        this.fb = fb;
        this.myRoute = myRoute;
        this.auth = auth;
        this.form = fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    // tslint:disable-next-line: no-trailing-whitespace
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        console.log('login: email = ' + this.form.value.email);
        console.log('login: pwd = ' + this.form.value.password);
        this.auth.doLogin(this.form.value)
            .then(function (res) {
            _this.myRoute.navigate(['fighter-list']);
        }, function (err) {
            console.log(err);
            _this.errorMessage = err.message;
        });
    };
    // Calling Facebook login method in auth service
    LoginComponent.prototype.FacebookLogin = function () {
        var _this = this;
        this.auth.doFacebookLogin()
            .then(function (res) {
            _this.myRoute.navigate(['fighter-list']);
        }, function (err) {
            console.log(err);
            _this.errorMessage = err.message;
            // tslint:disable-next-line: semicolon
        });
    };
    LoginComponent.prototype.GoogleLogin = function () {
        var _this = this;
        this.auth.doGoogleLogin().then(function (res) {
            _this.myRoute.navigate(['fighter-list']);
        }, function (err) {
            console.log(err);
            _this.errorMessage = err.message;
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.css":
/*!***************************************!*\
  !*** ./src/app/nav/nav.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdi9uYXYuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/nav/nav.component.html":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n      <button mat-button  routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\" routerLink=\"/home\">Fighter Application</button>\n      <button mat-button  routerLinkActive=\"active\" *ngIf=\"userLoggedIn()\" routerLink=\"/fighter-list\">Top 10 Pound for Pound Fighters</button>\n      <button mat-button  routerLinkActive=\"active\" *ngIf=\"userLoggedIn()\" routerLink=\"/add-fighter\">Update Rankings</button>\n\n      <span style=\"flex: 1 1 auto\"></span>\n      <button mat-button routerLinkActive=\"active\" *ngIf=\"!isLoggedIn\" routerLink=\"/login\">Login</button>\n      <button mat-button routerLinkActive=\"active\" *ngIf=\"isLoggedIn\" (click)=onLogout()>Logout</button>\n      <button mat-button routerLinkActive=\"active\" routerLink=\"/signup\">Register</button>\n  </mat-toolbar>\n  <router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavComponent = /** @class */ (function () {
    function NavComponent(auth, myRoute) {
        this.auth = auth;
        this.myRoute = myRoute;
        this.title = 'Fighter Application';
    }
    NavComponent.prototype.userLoggedIn = function () {
        this.isLoggedIn = this.auth.isLoggedIn();
        return this.isLoggedIn;
    };
    NavComponent.prototype.onLogout = function () {
        this.auth.doLogout();
        this.isLoggedIn = this.auth.isLoggedIn();
        this.myRoute.navigate(['login']);
    };
    NavComponent.prototype.ngOnInit = function () {
        this.isLoggedIn = this.auth.isLoggedIn();
    };
    NavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.css */ "./src/app/nav/nav.component.css")]
        }),
        __metadata("design:paramtypes", [_service_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/notifications/notifications.component.css":
/*!***********************************************************!*\
  !*** ./src/app/notifications/notifications.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdGlmaWNhdGlvbnMvbm90aWZpY2F0aW9ucy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/notifications/notifications.component.html":
/*!************************************************************!*\
  !*** ./src/app/notifications/notifications.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card *ngIf=\"display\">\n  <mat-card-content>\n    {{ message }}\n  </mat-card-content>\n</mat-card>"

/***/ }),

/***/ "./src/app/notifications/notifications.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/notifications/notifications.component.ts ***!
  \**********************************************************/
/*! exports provided: NotificationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsComponent", function() { return NotificationsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_notification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/notification.service */ "./src/app/service/notification.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotificationsComponent = /** @class */ (function () {
    function NotificationsComponent(notifier) {
        var _this = this;
        this.notifier = notifier;
        this.display = false;
        notifier.emitter.subscribe(function (data) {
            _this.display = data.display;
            _this.message = data.message;
        });
    }
    NotificationsComponent.prototype.removeMessage = function () {
        this.display = false;
        this.message = '';
    };
    NotificationsComponent.prototype.ngOnInit = function () {
    };
    NotificationsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notifications',
            template: __webpack_require__(/*! ./notifications.component.html */ "./src/app/notifications/notifications.component.html"),
            styles: [__webpack_require__(/*! ./notifications.component.css */ "./src/app/notifications/notifications.component.css")]
        }),
        __metadata("design:paramtypes", [_service_notification_service__WEBPACK_IMPORTED_MODULE_1__["NotificationService"]])
    ], NotificationsComponent);
    return NotificationsComponent;
}());



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.css":
/*!*************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.html":
/*!**************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  page-not-found works!\n</p>\n"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/page-not-found/page-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/service/auth.guard.ts":
/*!***************************************!*\
  !*** ./src/app/service/auth.guard.ts ***!
  \***************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/service/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (this.auth.isLoggedIn()) {
            return true;
        }
        console.log('Access  denied !');
        this.router.navigate(['login']);
        return false;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/service/auth.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/auth.service.ts ***!
  \*****************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notification.service */ "./src/app/service/notification.service.ts");
/* harmony import */ var firebase___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/ */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase___WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase___WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = /** @class */ (function () {
    function AuthService(_firebaseAuth, router, notifier) {
        this._firebaseAuth = _firebaseAuth;
        this.router = router;
        this.notifier = notifier;
        this.loggedInStatus = false;
        this.user = _firebaseAuth.authState;
    }
    AuthService.prototype.signup = function (email, password, name) {
        var _this = this;
        // clear all messages
        this.notifier.display(false, '');
        this._firebaseAuth
            .auth
            .createUserWithEmailAndPassword(email, password)
            .then(function (res) {
            _this.sendEmailVerification();
            var message = 'A verification email has been sent, please check your email and follow the steps!';
            _this.notifier.display(true, message);
            return firebase___WEBPACK_IMPORTED_MODULE_4__["database"]().ref('users/' + res.user.uid).set({
                email: res.user.email,
                uid: res.user.uid,
                registrationDate: new Date().toString(),
                name: name
            })
                .then(function () {
                firebase___WEBPACK_IMPORTED_MODULE_4__["auth"]().signOut();
                _this.router.navigate(['login']);
            });
        })
            .catch(function (err) {
            console.log(err);
            _this.notifier.display(true, err.message);
        });
    };
    AuthService.prototype.sendEmailVerification = function () {
        this._firebaseAuth.authState.subscribe(function (user) {
            user.sendEmailVerification()
                .then(function () {
                console.log('email sent');
            });
        });
    };
    AuthService.prototype.doRegister = function (value) {
        // tslint:disable-next-line: no-shadowed-variable
        return new Promise(function (resolve, reject) {
            firebase___WEBPACK_IMPORTED_MODULE_4__["auth"]().createUserWithEmailAndPassword(value.email, value.password)
                .then(function (res) {
                resolve(res);
            }, function (err) { return reject(err); });
        });
    };
    AuthService.prototype.doLogin = function (value) {
        var _this = this;
        // tslint:disable-next-line: no-shadowed-variable
        return new Promise(function (resolve, reject) {
            console.log('doLogin: email = ' + value.email);
            console.log('doLogin: pwd = ' + value.password);
            firebase___WEBPACK_IMPORTED_MODULE_4__["auth"]().signInWithEmailAndPassword(value.email, value.password)
                .then(function (res) {
                resolve(res);
                _this.loggedInStatus = true;
            }, function (err) { return reject(err); });
        });
    };
    // Popup-display method to log into Facebook
    // tslint:disable-next-line: one-line
    AuthService.prototype.doFacebookLogin = function () {
        var _this = this;
        // tslint:disable-next-line: no-shadowed-variable
        return new Promise(function (resolve, reject) {
            // tslint:disable-next-line: prefer-const
            var provider = new firebase___WEBPACK_IMPORTED_MODULE_4__["auth"].FacebookAuthProvider();
            _this._firebaseAuth.auth
                .signInWithPopup(provider)
                .then(function (res) {
                resolve(res);
                _this.loggedInStatus = true;
            }, function (err) {
                console.log(err);
                reject(err);
                // tslint:disable-next-line: semicolon
            });
        });
    };
    // tslint:disable-next-line: no-trailing-whitespace
    AuthService.prototype.doGoogleLogin = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var provider = new firebase___WEBPACK_IMPORTED_MODULE_4__["auth"].GoogleAuthProvider();
            provider.addScope('profile');
            provider.addScope('email');
            _this._firebaseAuth.auth
                .signInWithPopup(provider)
                .then(function (res) {
                resolve(res);
                _this.loggedInStatus = true;
            });
        });
    };
    AuthService.prototype.doLogout = function () {
        var _this = this;
        // tslint:disable-next-line: no-shadowed-variable
        return new Promise(function (resolve, reject) {
            if (firebase___WEBPACK_IMPORTED_MODULE_4__["auth"]().currentUser) {
                _this._firebaseAuth.auth.signOut();
                resolve();
            }
            else {
                reject();
            }
            _this.loggedInStatus = false;
        });
    };
    AuthService.prototype.isLoggedIn = function () {
        return this.loggedInStatus;
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/service/notification.service.ts":
/*!*************************************************!*\
  !*** ./src/app/service/notification.service.ts ***!
  \*************************************************/
/*! exports provided: NotificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationService", function() { return NotificationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var NotificationService = /** @class */ (function () {
    function NotificationService() {
        this.sub = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.emitter = this.sub.asObservable();
    }
    NotificationService.prototype.display = function (display, message) {
        this.sub.next({ display: display, message: message });
    };
    NotificationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], NotificationService);
    return NotificationService;
}());



/***/ }),

/***/ "./src/app/shared/clipart.service.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/clipart.service.ts ***!
  \*******************************************/
/*! exports provided: ClipartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClipartService", function() { return ClipartService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ClipartService = /** @class */ (function () {
    function ClipartService(_http) {
        this._http = _http;
        this.url = 'https://openclipart.org/search/json/?query=';
    }
    ClipartService.prototype.getImageList = function (imageStr) {
        return this._http.get(this.url + imageStr);
    };
    ClipartService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ClipartService);
    return ClipartService;
}());



/***/ }),

/***/ "./src/app/shared/convert-to-spaces.pipe.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/convert-to-spaces.pipe.ts ***!
  \**************************************************/
/*! exports provided: ConvertToSpaces */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConvertToSpaces", function() { return ConvertToSpaces; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ConvertToSpaces = /** @class */ (function () {
    function ConvertToSpaces() {
    }
    ConvertToSpaces.prototype.transform = function (value, character) {
        return value ? value.replace(character, ' ') : value;
    };
    ConvertToSpaces = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'convertToSpaces'
        })
    ], ConvertToSpaces);
    return ConvertToSpaces;
}());



/***/ }),

/***/ "./src/app/shared/fighter.service.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/fighter.service.ts ***!
  \*******************************************/
/*! exports provided: FighterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FighterService", function() { return FighterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/observable/throw */ "./node_modules/rxjs-compat/_esm5/add/observable/throw.js");
/* harmony import */ var rxjs_add_operator_do__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/operator/do */ "./node_modules/rxjs-compat/_esm5/add/operator/do.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

 // HttpClient onlh available in angular 4






var FighterService = /** @class */ (function () {
    function FighterService(_http, _afs) {
        this._http = _http;
        this._afs = _afs;
        // specify URL to fighters on our web service for fake JSON server
        this._fighterUrl = 'http://localhost:3000/fighters';
        // Connect to database
        this.fightersCollection = _afs.collection('fighters');
        console.log('Adding all fighters to firestore...');
        // tslint:disable-next-line: comment-format
        // this.addAllFighters();
    }
    FighterService.prototype.getFighters = function () {
        // return this._http.get<IFighter[]>(this._fighterUrl)
        // .do(data => console.log('All: ' + JSON.stringify(data)))
        // .catch(this.handleError);
        // Type of data it's OBSERVING
        // valueChanges() returns the current state of the collection as an
        // Observable of data as a synchronized array of JSON objects.
        // this.fighters = this.fightersCollection.valueChanges();
        // this.fighters.subscribe(data =>  console.log('Getting Fighters' + data));
        // return this.fighters;
        // tslint:disable-next-line: no-trailing-whitespace
        this.fighters = this.fightersCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (actions) { return actions.map(function (a) {
            var data = a.payload.doc.data();
            console.log('getFighters:data' + JSON.stringify(data));
            var id = a.payload.doc.id;
            console.log('getFighters:id = ' + id);
            return __assign({ id: id }, data);
        }); }));
        return this.fighters;
    };
    FighterService.prototype.deleteFighter = function (id) {
        this.fightersCollection.doc(id).delete()
            .catch(function (error) { console.log('deleteFighter error: ' + error); })
            // tslint:disable-next-line: whitespace
            .then(function () { return console.log('deleteFighter: id = ' + id); });
    };
    FighterService.prototype.addFighter = function (fighter) {
        this.fightersCollection.add(fighter);
    };
    FighterService.prototype.updateFighter = function (fighter) {
        this.itemDoc = this._afs.doc("fighters/" + fighter.id);
        this.itemDoc.set(fighter);
    };
    ;
    FighterService.prototype.addAllFighters = function () {
        var _this = this;
        this._http.get(this._fighterUrl).subscribe(function (fighters) {
            _this.allFighters = fighters;
            console.log('Getting Fighters' + JSON.stringify(fighters));
            // tslint:disable-next-line: prefer-const
            for (var _i = 0, _a = _this.allFighters; _i < _a.length; _i++) {
                var fighter = _a[_i];
                console.log('Adding: ' + fighter.fighterName);
                _this.fightersCollection.add(fighter);
            }
        }, function (error) { return (_this.errorMessage = error); });
    };
    FighterService.prototype.handleError = function (err) {
        console.log(err.message);
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(err.message);
    };
    FighterService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"]])
    ], FighterService);
    return FighterService;
}());



/***/ }),

/***/ "./src/app/shared/star-rating/star-rating.component.css":
/*!**************************************************************!*\
  !*** ./src/app/shared/star-rating/star-rating.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".crop{\n    overflow: hidden;\n}\ndiv {\n    cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3N0YXItcmF0aW5nL3N0YXItcmF0aW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvc3Rhci1yYXRpbmcvc3Rhci1yYXRpbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jcm9we1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5kaXYge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/shared/star-rating/star-rating.component.html":
/*!***************************************************************!*\
  !*** ./src/app/shared/star-rating/star-rating.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div (click)='onClick()' class=\"crop\" [style.width.px]='starWidth' [title]=\"rating\"> <!-- for partial display of stars-->\n  <div style=\"width:90px\">\n    <span><fa-icon icon=\"star\"></fa-icon></span>\n    <span><fa-icon icon=\"star\"></fa-icon></span>\n    <span><fa-icon icon=\"star\"></fa-icon></span>\n    <span><fa-icon icon=\"star\"></fa-icon></span>\n    <span><fa-icon icon=\"star\"></fa-icon></span>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/shared/star-rating/star-rating.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/star-rating/star-rating.component.ts ***!
  \*************************************************************/
/*! exports provided: StarRatingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarRatingComponent", function() { return StarRatingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StarRatingComponent = /** @class */ (function () {
    function StarRatingComponent() {
        this.clickNumber = 1;
        this.notify = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    StarRatingComponent.prototype.onClick = function () {
        this.notify.emit('clicked! ' + this.clickNumber + ' times');
        this.clickNumber += 1;
    };
    StarRatingComponent.prototype.ngOnChanges = function () {
        this.starWidth = this.rating * 90 / 5;
        console.log(this.starWidth);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], StarRatingComponent.prototype, "rating", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], StarRatingComponent.prototype, "notify", void 0);
    StarRatingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-star-rating',
            template: __webpack_require__(/*! ./star-rating.component.html */ "./src/app/shared/star-rating/star-rating.component.html"),
            styles: [__webpack_require__(/*! ./star-rating.component.css */ "./src/app/shared/star-rating/star-rating.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], StarRatingComponent);
    return StarRatingComponent;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.css":
/*!*********************************************!*\
  !*** ./src/app/signup/signup.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZ251cC9zaWdudXAuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/signup/signup.component.html":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n<mat-card-header>\n  <mat-card-title>\n    <h4>Register New User for Authentication</h4>\n  </mat-card-title>\n</mat-card-header>\n<mat-card-content>\n  <form>\n    <mat-form-field>\n      <input [(ngModel)]=\"email\" name=\"email\" matInput placeholder=\"email\" type=\"email\">\n    </mat-form-field>\n    <br>\n    <mat-form-field>\n      <input [(ngModel)]=\"pwd\" name=\"password\" matInput placeholder=\"password\" type=\"password\">\n    </mat-form-field>\n    <br>  \n    <mat-form-field>\n      <input [(ngModel)]=\"name\" name=\"name\" matInput placeholder=\"name\">\n    </mat-form-field>\n    <br>\n      <mat-form-field style=\"width: 100%\">\n      <textarea [(ngModel)]=\"description\" name=\"description\" matInput placeholder=\"description\"></textarea>\n    </mat-form-field>\n    <br>\n    <button (click)=\"register()\" mat-raised-button color=\"primary\">Register</button>\n  </form>\n</mat-card-content>\n</mat-card>"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/auth.service */ "./src/app/service/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SignupComponent = /** @class */ (function () {
    function SignupComponent(auth) {
        this.auth = auth;
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.register = function () {
        this.auth.signup(this.email, this.pwd, this.name);
        console.log(this.email);
        console.log(this.pwd);
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [_service_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], SignupComponent);
    return SignupComponent;
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
    production: false,
    firebase: {
        apiKey: 'AIzaSyC35IIq7yxHqiYM8c9k3Q8F6vKKx362GLo',
        authDomain: 'fighterapp-ab993.firebaseapp.com',
        databaseURL: 'https://fighterapp-ab993.firebaseio.com',
        projectId: 'fighterapp-ab993',
        storageBucket: 'fighterapp-ab993.appspot.com',
        messagingSenderId: '346903218518',
        appId: '1:346903218518:web:0ea551985a466970cc6ef7',
        measurementId: 'G-GKZ47ZDV3N'
    },
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

module.exports = __webpack_require__(/*! C:\Angular Apps\FighterApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map