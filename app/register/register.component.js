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
var index_1 = require("../_services/index");
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(router, userService, alertService) {
        this.router = router;
        this.userService = userService;
        this.alertService = alertService;
        this.model = {};
        this.loading = false;
    }
    RegisterComponent.prototype.register = function () {
        var _this = this;
        if (this.validateFields()) {
            this.loading = true;
            this.userService.create(this.model)
                .subscribe(function (data) {
                _this.alertService.success('Registration successful', true);
                _this.router.navigate(['/login']);
            }, function (error) {
                //this.alertService.error(error);
                //this.alertService.error(error._body);
                _this.alertService.error(error.message);
                _this.loading = false;
            });
        }
    };
    RegisterComponent.prototype.validateFields = function () {
        var emailRegEx = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/;
        var phoneNumberRegEx = /[0-9]{10}/;
        var passwordRegEx = /[0-9a-zA-Z]{6,}/;
        var usernameRegEx = /[0-9a-zA-Z]{3,}/;
        var firstNameRegEx = /[A-Za-z]{2,}/;
        var lastNameRegEx = /[A-Za-z]{2,}/;
        if (!firstNameRegEx.test(this.model.firstName)) {
            alert("Invalid First Name");
            return false;
        }
        if (!lastNameRegEx.test(this.model.lastName)) {
            alert("Invalid Last Name");
            return false;
        }
        if (!usernameRegEx.test(this.model.username)) {
            alert("Invalid Username");
            return false;
        }
        if (!passwordRegEx.test(this.model.password)) {
            alert("Invalid Password\nPasswords must be at least 6 characters in length and may only include alphanumeric characters");
            return false;
        }
        if (!emailRegEx.test(this.model.email)) {
            alert("Invalid Email");
            return false;
        }
        if (!phoneNumberRegEx.test(this.model.phoneNumber)) {
            alert("Invalid Phone Number\nRequired Format: xxxxxxxxxx");
            return false;
        }
        return true;
    };
    RegisterComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'register.component.html'
        }),
        __metadata("design:paramtypes", [router_1.Router,
            index_1.UserService,
            index_1.AlertService])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map