"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var index_1 = require("../_services/index");
var AddContactComponent = /** @class */ (function () {
    function AddContactComponent(route, router, _location, contactService, alertService) {
        this.route = route;
        this.router = router;
        this._location = _location;
        this.contactService = contactService;
        this.alertService = alertService;
        this.model = {};
        this.loading = false;
    }
    AddContactComponent.prototype.ngOnInit = function () {
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    AddContactComponent.prototype.cancel = function () {
        this._location.back();
    };
    AddContactComponent.prototype.register = function () {
        var _this = this;
        this.loading = true;
        //this._location.back();
        this.contactService.create(this.model)
            .subscribe(function (data) {
            //this.router.navigate([this.returnUrl]);
            //this.router.navigate(['/register']);
            _this._location.back();
        }, function (error) {
            //this.alertService.error(error);
            //this.alertService.error(error._body);
            _this.alertService.error(error.message);
            _this.loading = false;
        });
    };
    AddContactComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'addContact.component.html'
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            router_1.Router,
            common_1.Location,
            index_1.ContactService,
            index_1.AlertService])
    ], AddContactComponent);
    return AddContactComponent;
}());
exports.AddContactComponent = AddContactComponent;
//# sourceMappingURL=addContact.component.js.map