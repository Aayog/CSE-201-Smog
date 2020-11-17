(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-chartjs-chartjs-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/chartjs/chartjs.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/chartjs/chartjs.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\r\n  <div class=\"card-columns cols-2\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        Line Chart\r\n        <div class=\"card-header-actions\">\r\n          <a href=\"http://www.chartjs.org\">\r\n            <small class=\"text-muted\">docs</small>\r\n          </a>\r\n        </div>\r\n      </div>\r\n      <div class=\"card-body\">\r\n        <div class=\"chart-wrapper\">\r\n          <canvas baseChart class=\"chart\"\r\n          [datasets]=\"lineChartData\"\r\n          [labels]=\"lineChartLabels\"\r\n          [options]=\"lineChartOptions\"\r\n          [colors]=\"lineChartColours\"\r\n          [legend]=\"lineChartLegend\"\r\n          [chartType]=\"lineChartType\"\r\n          (chartHover)=\"chartHovered($event)\"\r\n          (chartClick)=\"chartClicked($event)\"></canvas>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        Bar Chart\r\n        <div class=\"card-header-actions\">\r\n          <a href=\"http://www.chartjs.org\">\r\n            <small class=\"text-muted\">docs</small>\r\n          </a>\r\n        </div>\r\n      </div>\r\n      <div class=\"card-body\">\r\n        <div class=\"chart-wrapper\">\r\n          <canvas baseChart class=\"chart\"\r\n          [datasets]=\"barChartData\"\r\n          [labels]=\"barChartLabels\"\r\n          [options]=\"barChartOptions\"\r\n          [legend]=\"barChartLegend\"\r\n          [chartType]=\"barChartType\"\r\n          (chartHover)=\"chartHovered($event)\"\r\n          (chartClick)=\"chartClicked($event)\"></canvas>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        Doughnut Chart\r\n        <div class=\"card-header-actions\">\r\n          <a href=\"http://www.chartjs.org\">\r\n            <small class=\"text-muted\">docs</small>\r\n          </a>\r\n        </div>\r\n      </div>\r\n      <div class=\"card-body\">\r\n        <div class=\"chart-wrapper\">\r\n          <canvas baseChart class=\"chart\"\r\n          [data]=\"doughnutChartData\"\r\n          [labels]=\"doughnutChartLabels\"\r\n          [chartType]=\"doughnutChartType\"\r\n          (chartHover)=\"chartHovered($event)\"\r\n          (chartClick)=\"chartClicked($event)\"></canvas>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        Radar Chart\r\n        <div class=\"card-header-actions\">\r\n          <a href=\"http://www.chartjs.org\">\r\n            <small class=\"text-muted\">docs</small>\r\n          </a>\r\n        </div>\r\n      </div>\r\n      <div class=\"card-body\">\r\n        <div class=\"chart-wrapper\">\r\n          <canvas baseChart class=\"chart\"\r\n          [datasets]=\"radarChartData\"\r\n          [labels]=\"radarChartLabels\"\r\n          [chartType]=\"radarChartType\"\r\n          (chartHover)=\"chartHovered($event)\"\r\n          (chartClick)=\"chartClicked($event)\"></canvas>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        Pie Chart\r\n        <div class=\"card-header-actions\">\r\n          <a href=\"http://www.chartjs.org\">\r\n            <small class=\"text-muted\">docs</small>\r\n          </a>\r\n        </div>\r\n      </div>\r\n      <div class=\"card-body\">\r\n        <div class=\"chart-wrapper\">\r\n          <canvas baseChart class=\"chart\"\r\n          [data]=\"pieChartData\"\r\n          [labels]=\"pieChartLabels\"\r\n          [chartType]=\"pieChartType\"\r\n          (chartHover)=\"chartHovered($event)\"\r\n          (chartClick)=\"chartClicked($event)\"></canvas>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        Polar Area Chart\r\n        <div class=\"card-header-actions\">\r\n          <a href=\"http://www.chartjs.org\">\r\n            <small class=\"text-muted\">docs</small>\r\n          </a>\r\n        </div>\r\n      </div>\r\n      <div class=\"card-body\">\r\n        <div class=\"chart-wrapper\">\r\n          <canvas baseChart class=\"chart\"\r\n          [data]=\"polarAreaChartData\"\r\n          [labels]=\"polarAreaChartLabels\"\r\n          [legend]=\"polarAreaLegend\"\r\n          [chartType]=\"polarAreaChartType\"\r\n          (chartHover)=\"chartHovered($event)\"\r\n          (chartClick)=\"chartClicked($event)\"></canvas>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./src/app/views/chartjs/chartjs-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/views/chartjs/chartjs-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ChartJSRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartJSRoutingModule", function() { return ChartJSRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _chartjs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chartjs.component */ "./src/app/views/chartjs/chartjs.component.ts");




var routes = [
    {
        path: '',
        component: _chartjs_component__WEBPACK_IMPORTED_MODULE_3__["ChartJSComponent"],
        data: {
            title: 'Charts'
        }
    }
];
var ChartJSRoutingModule = /** @class */ (function () {
    function ChartJSRoutingModule() {
    }
    ChartJSRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ChartJSRoutingModule);
    return ChartJSRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/chartjs/chartjs.component.ts":
/*!****************************************************!*\
  !*** ./src/app/views/chartjs/chartjs.component.ts ***!
  \****************************************************/
/*! exports provided: ChartJSComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartJSComponent", function() { return ChartJSComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ChartJSComponent = /** @class */ (function () {
    function ChartJSComponent() {
        // lineChart
        this.lineChartData = [
            { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
            { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
            { data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C' }
        ];
        this.lineChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        this.lineChartOptions = {
            animation: false,
            responsive: true
        };
        this.lineChartColours = [
            {
                backgroundColor: 'rgba(148,159,177,0.2)',
                borderColor: 'rgba(148,159,177,1)',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            },
            {
                backgroundColor: 'rgba(77,83,96,0.2)',
                borderColor: 'rgba(77,83,96,1)',
                pointBackgroundColor: 'rgba(77,83,96,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(77,83,96,1)'
            },
            {
                backgroundColor: 'rgba(148,159,177,0.2)',
                borderColor: 'rgba(148,159,177,1)',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            }
        ];
        this.lineChartLegend = true;
        this.lineChartType = 'line';
        // barChart
        this.barChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true
        };
        this.barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.barChartData = [
            { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
            { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
        ];
        // Doughnut
        this.doughnutChartLabels = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
        this.doughnutChartData = [350, 450, 100];
        this.doughnutChartType = 'doughnut';
        // Radar
        this.radarChartLabels = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];
        this.radarChartData = [
            { data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A' },
            { data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B' }
        ];
        this.radarChartType = 'radar';
        // Pie
        this.pieChartLabels = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
        this.pieChartData = [300, 500, 100];
        this.pieChartType = 'pie';
        // PolarArea
        this.polarAreaChartLabels = ['Download Sales', 'In-Store Sales', 'Mail Sales', 'Telesales', 'Corporate Sales'];
        this.polarAreaChartData = [300, 500, 100, 40, 120];
        this.polarAreaLegend = true;
        this.polarAreaChartType = 'polarArea';
    }
    // events
    ChartJSComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    ChartJSComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    ChartJSComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./chartjs.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/chartjs/chartjs.component.html")).default
        })
    ], ChartJSComponent);
    return ChartJSComponent;
}());



/***/ }),

/***/ "./src/app/views/chartjs/chartjs.module.ts":
/*!*************************************************!*\
  !*** ./src/app/views/chartjs/chartjs.module.ts ***!
  \*************************************************/
/*! exports provided: ChartJSModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartJSModule", function() { return ChartJSModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-charts */ "./node_modules/ng2-charts/fesm2015/ng2-charts.js");
/* harmony import */ var _chartjs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chartjs.component */ "./src/app/views/chartjs/chartjs.component.ts");
/* harmony import */ var _chartjs_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chartjs-routing.module */ "./src/app/views/chartjs/chartjs-routing.module.ts");





var ChartJSModule = /** @class */ (function () {
    function ChartJSModule() {
    }
    ChartJSModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _chartjs_routing_module__WEBPACK_IMPORTED_MODULE_4__["ChartJSRoutingModule"],
                ng2_charts__WEBPACK_IMPORTED_MODULE_2__["ChartsModule"]
            ],
            declarations: [_chartjs_component__WEBPACK_IMPORTED_MODULE_3__["ChartJSComponent"]]
        })
    ], ChartJSModule);
    return ChartJSModule;
}());



/***/ })

}]);
//# sourceMappingURL=views-chartjs-chartjs-module.js.map