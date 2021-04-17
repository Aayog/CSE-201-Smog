(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-dashboard-dashboard-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/comment/comment.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/comment/comment.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngFor=\"let comment of comments\">\n    <b>{{comment.Username}} </b> : {{comment.Comment}}\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/dashboard/dashboard.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/dashboard/dashboard.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n    <!-- <input class=\"form-control\" type=\"text\" placeholder=\"Search\" aria-label=\"Search\"> -->\n    <!-- {{usertype}} -->\n    <app-game-cards></app-game-cards>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/game-cards/game-cards.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/game-cards/game-cards.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n    <input type=\"text\" [(ngModel)]=\"queryString\" id=\"search\" aria-label=\"Search\" placeholder=\"Search any game\" class=\"form-control\">\n    <div class=\"row\">\n        <div *ngFor=\"let game of games | GameFilterPipe: queryString\" class=\"col-lg-3 d-flex align-items-stretch\">\n            <div class=\"card\" style=\"width: 18rem;\">\n                <a [href]=\"game.Link\">\n                <img [src]=\"game.Img\" class=\"card-img-top\" alt=\"...\">\n            </a>\n                <div class=\"card-body\">\n                    <h5 class=\"card-title\">{{game.Title}}</h5>\n                    <p class=\"card-text\">{{game.Descript}}</p> \n                </div>\n                <div class=\"card-footer\">\n                    <app-comment [title]=\"game.Title\"></app-comment>\n                    <app-user-comment [title]=\"game.Title\" [parent]=\"this\"></app-user-comment>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/user-comment/user-comment.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/user-comment/user-comment.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<strong>{{userName}}</strong> : <input type=\"text\" [(ngModel)]=\"comment\" (keyup.enter)=\"submitComment()\">");

/***/ }),

/***/ "./src/app/models/Comment.ts":
/*!***********************************!*\
  !*** ./src/app/models/Comment.ts ***!
  \***********************************/
/*! exports provided: Comment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Comment", function() { return Comment; });
var Comment = /** @class */ (function () {
    function Comment(Comment, userName, gTitle) {
        this.Comment = Comment;
        this.userName = userName;
        this.gTitle = gTitle;
    }
    return Comment;
}());



/***/ }),

/***/ "./src/app/services/commentservice.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/commentservice.service.ts ***!
  \****************************************************/
/*! exports provided: CommentserviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentserviceService", function() { return CommentserviceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal/operators/map */ "./node_modules/rxjs/internal/operators/map.js");
/* harmony import */ var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_3__);




// Filter games https://stackoverflow.com/questions/40678206/angular-2-filter-search-list
var CommentserviceService = /** @class */ (function () {
    function CommentserviceService(httpsClient) {
        this.httpsClient = httpsClient;
        this.baseUrl = "http://localhost:8080";
    }
    CommentserviceService.prototype.getAllComments = function (title) {
        var _this = this;
        var body = JSON.stringify(title);
        return this.httpsClient.post(this.baseUrl + '/comments.php', body).pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            _this.comments = res['data'];
            return _this.comments;
        }));
    };
    CommentserviceService.prototype.postComment = function (comment) {
        var body = JSON.stringify(comment);
        return this.httpsClient.post(this.baseUrl + '/addcomment.php', body)
            .subscribe();
    };
    CommentserviceService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    CommentserviceService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CommentserviceService);
    return CommentserviceService;
}());



/***/ }),

/***/ "./src/app/services/gameservice.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/gameservice.service.ts ***!
  \*************************************************/
/*! exports provided: GameserviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameserviceService", function() { return GameserviceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal/operators/map */ "./node_modules/rxjs/internal/operators/map.js");
/* harmony import */ var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_3__);




// Filter games https://stackoverflow.com/questions/40678206/angular-2-filter-search-list
var GameserviceService = /** @class */ (function () {
    function GameserviceService(httpsClient) {
        this.httpsClient = httpsClient;
        this.baseUrl = "http://localhost:8080";
    }
    GameserviceService.prototype.getAllGames = function () {
        var _this = this;
        return this.httpsClient.get(this.baseUrl + "/game.php").pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            _this.games = res['data'];
            return _this.games;
        }));
    };
    GameserviceService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    GameserviceService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], GameserviceService);
    return GameserviceService;
}());



/***/ }),

/***/ "./src/app/views/comment/comment.component.css":
/*!*****************************************************!*\
  !*** ./src/app/views/comment/comment.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2NvbW1lbnQvY29tbWVudC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/views/comment/comment.component.ts":
/*!****************************************************!*\
  !*** ./src/app/views/comment/comment.component.ts ***!
  \****************************************************/
/*! exports provided: CommentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentComponent", function() { return CommentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_commentservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/commentservice.service */ "./src/app/services/commentservice.service.ts");
/* harmony import */ var _game_cards_game_cards_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../game-cards/game-cards.component */ "./src/app/views/game-cards/game-cards.component.ts");




var CommentComponent = /** @class */ (function () {
    function CommentComponent(commentService, game) {
        this.commentService = commentService;
    }
    CommentComponent.prototype.ngOnInit = function () {
        this.reload();
    };
    CommentComponent.prototype.getComments = function () {
        var _this = this;
        this.commentService.getAllComments(this.title).subscribe(function (res) {
            _this.comments = res;
        }, function (err) {
            _this.error = err;
        });
    };
    CommentComponent.prototype.reload = function () {
        this.getComments();
    };
    CommentComponent.ctorParameters = function () { return [
        { type: _services_commentservice_service__WEBPACK_IMPORTED_MODULE_2__["CommentserviceService"] },
        { type: _game_cards_game_cards_component__WEBPACK_IMPORTED_MODULE_3__["GameCardsComponent"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], CommentComponent.prototype, "title", void 0);
    CommentComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-comment',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./comment.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/comment/comment.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./comment.component.css */ "./src/app/views/comment/comment.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_commentservice_service__WEBPACK_IMPORTED_MODULE_2__["CommentserviceService"], _game_cards_game_cards_component__WEBPACK_IMPORTED_MODULE_3__["GameCardsComponent"]])
    ], CommentComponent);
    return CommentComponent;
}());



/***/ }),

/***/ "./src/app/views/dashboard/dashboard-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/views/dashboard/dashboard-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/views/dashboard/dashboard.component.ts");




/*
Dashboard DashboardRoutingModule
inputs data from the dashboard.component doc.
Names the Dasboard component routes and gathers information needed
exports the DashboardRoutingModule class.
*/
var routes = [
    {
        path: '',
        component: _dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"],
        data: {
            title: 'Dashboard'
        }
    }
];
var DashboardRoutingModule = /** @class */ (function () {
    function DashboardRoutingModule() {
    }
    DashboardRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], DashboardRoutingModule);
    return DashboardRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/dashboard/dashboard.component.ts":
/*!********************************************************!*\
  !*** ./src/app/views/dashboard/dashboard.component.ts ***!
  \********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


/*
Dashboard Components
Inputs the OnInit components,a style sheet, and custom CustomTooltips
uses these to create a visual interface for the user. This dashboard will be underneath all of the other components. This class definition will be used in the dashboard module class.
Exports the class so that it visible in the dashboard module class.
*/
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/dashboard/dashboard.component.html")).default
        })
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/views/dashboard/dashboard.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/views/dashboard/dashboard.module.ts ***!
  \*****************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-charts */ "./node_modules/ng2-charts/fesm2015/ng2-charts.js");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/fesm5/ngx-bootstrap-dropdown.js");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/views/dashboard/dashboard.component.ts");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard-routing.module */ "./src/app/views/dashboard/dashboard-routing.module.ts");
/* harmony import */ var _game_cards_game_cards_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../game-cards/game-cards.component */ "./src/app/views/game-cards/game-cards.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _game_cards_gamefilterpipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../game-cards/gamefilterpipe */ "./src/app/views/game-cards/gamefilterpipe.ts");
/* harmony import */ var _comment_comment_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../comment/comment.component */ "./src/app/views/comment/comment.component.ts");
/* harmony import */ var _user_comment_user_comment_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../user-comment/user-comment.component */ "./src/app/views/user-comment/user-comment.component.ts");












/*
DashboardModule
Imports the angular templates, the angular forms, the chart modules, BsDropdownModule, and a ButtonsModule from elsewhere.
Imports the to other Dashboard classes that we wrote earlier to put them all in one location.  Declares a new module and assigns it.
Exports them all as one DashboardModule class
*/
var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_6__["DashboardRoutingModule"],
                ng2_charts__WEBPACK_IMPORTED_MODULE_3__["ChartsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"],
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_4__["BsDropdownModule"],
            ],
            declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"], _game_cards_game_cards_component__WEBPACK_IMPORTED_MODULE_7__["GameCardsComponent"], _game_cards_gamefilterpipe__WEBPACK_IMPORTED_MODULE_9__["GameFilterPipe"], _comment_comment_component__WEBPACK_IMPORTED_MODULE_10__["CommentComponent"], _user_comment_user_comment_component__WEBPACK_IMPORTED_MODULE_11__["UserCommentComponent"]],
            exports: [_game_cards_gamefilterpipe__WEBPACK_IMPORTED_MODULE_9__["GameFilterPipe"]]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/app/views/game-cards/game-cards.component.css":
/*!***********************************************************!*\
  !*** ./src/app/views/game-cards/game-cards.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card {\n    overflow-y: auto;\n}\nh1 {\n    font-size: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvZ2FtZS1jYXJkcy9nYW1lLWNhcmRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9nYW1lLWNhcmRzL2dhbWUtY2FyZHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xufVxuaDEge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/views/game-cards/game-cards.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/views/game-cards/game-cards.component.ts ***!
  \**********************************************************/
/*! exports provided: GameCardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameCardsComponent", function() { return GameCardsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_gameservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/gameservice.service */ "./src/app/services/gameservice.service.ts");



var GameCardsComponent = /** @class */ (function () {
    function GameCardsComponent(gameService) {
        this.gameService = gameService;
    }
    GameCardsComponent.prototype.ngOnInit = function () {
        this.getGames();
    };
    GameCardsComponent.prototype.getGames = function () {
        var _this = this;
        this.gameService.getAllGames().subscribe(function (res) {
            _this.games = res;
        }, function (err) {
            _this.error = err;
        });
    };
    GameCardsComponent.ctorParameters = function () { return [
        { type: _services_gameservice_service__WEBPACK_IMPORTED_MODULE_2__["GameserviceService"] }
    ]; };
    GameCardsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-game-cards',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./game-cards.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/game-cards/game-cards.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./game-cards.component.css */ "./src/app/views/game-cards/game-cards.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_gameservice_service__WEBPACK_IMPORTED_MODULE_2__["GameserviceService"]])
    ], GameCardsComponent);
    return GameCardsComponent;
}());



/***/ }),

/***/ "./src/app/views/game-cards/gamefilterpipe.ts":
/*!****************************************************!*\
  !*** ./src/app/views/game-cards/gamefilterpipe.ts ***!
  \****************************************************/
/*! exports provided: GameFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameFilterPipe", function() { return GameFilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


//http://www.angulartutorial.net/2017/03/simple-search-using-pipe-in-angular-2.html
var GameFilterPipe = /** @class */ (function () {
    function GameFilterPipe() {
    }
    GameFilterPipe.prototype.transform = function (value, input) {
        if (input) {
            input = input.toLowerCase();
            return value.filter(function (el) {
            });
        }
        return value;
    };
    GameFilterPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'GameFilterPipe',
        })
    ], GameFilterPipe);
    return GameFilterPipe;
}());



/***/ }),

/***/ "./src/app/views/user-comment/user-comment.component.css":
/*!***************************************************************!*\
  !*** ./src/app/views/user-comment/user-comment.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3VzZXItY29tbWVudC91c2VyLWNvbW1lbnQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/views/user-comment/user-comment.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/views/user-comment/user-comment.component.ts ***!
  \**************************************************************/
/*! exports provided: UserCommentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserCommentComponent", function() { return UserCommentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_dataservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/dataservice.service */ "./src/app/services/dataservice.service.ts");
/* harmony import */ var _services_commentservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/commentservice.service */ "./src/app/services/commentservice.service.ts");
/* harmony import */ var _models_Comment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/Comment */ "./src/app/models/Comment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _game_cards_game_cards_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../game-cards/game-cards.component */ "./src/app/views/game-cards/game-cards.component.ts");







var UserCommentComponent = /** @class */ (function () {
    function UserCommentComponent(dataService, commentService, router) {
        this.dataService = dataService;
        this.commentService = commentService;
        this.router = router;
    }
    UserCommentComponent.prototype.ngOnInit = function () {
        this.userName = this.dataService.getToken();
    };
    UserCommentComponent.prototype.submitComment = function () {
        this.commentService.postComment(new _models_Comment__WEBPACK_IMPORTED_MODULE_4__["Comment"](this.comment, this.userName, this.title));
        this.comment = '';
        this.parent.ngOnInit();
    };
    UserCommentComponent.ctorParameters = function () { return [
        { type: _services_dataservice_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
        { type: _services_commentservice_service__WEBPACK_IMPORTED_MODULE_3__["CommentserviceService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], UserCommentComponent.prototype, "title", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _game_cards_game_cards_component__WEBPACK_IMPORTED_MODULE_6__["GameCardsComponent"])
    ], UserCommentComponent.prototype, "parent", void 0);
    UserCommentComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-comment',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./user-comment.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/user-comment/user-comment.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./user-comment.component.css */ "./src/app/views/user-comment/user-comment.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_dataservice_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _services_commentservice_service__WEBPACK_IMPORTED_MODULE_3__["CommentserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], UserCommentComponent);
    return UserCommentComponent;
}());



/***/ })

}]);
//# sourceMappingURL=views-dashboard-dashboard-module.js.map