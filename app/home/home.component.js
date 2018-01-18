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
var index_2 = require("../_services/index");
var HomeComponent = /** @class */ (function () {
    //loading = false;
    function HomeComponent(router, userService, contactService) {
        this.router = router;
        this.userService = userService;
        this.contactService = contactService;
        this.users = [];
        this.contacts = [];
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.loadAllUsers();
        this.loadAllContacts();
    };
    HomeComponent.prototype.openContactPage = function () {
        //this.loading = true;
        this.router.navigate(['/addContact']);
    };
    HomeComponent.prototype.deleteUser = function (id) {
        var _this = this;
        this.userService.delete(id).subscribe(function () { _this.loadAllUsers(); });
    };
    HomeComponent.prototype.deleteContact = function (id) {
        var _this = this;
        this.contactService.delete(id).subscribe(function () { _this.loadAllContacts(); });
    };
    HomeComponent.prototype.maybeHide = function () {
        if (this.contacts.length != 0) {
            return true;
        }
        else
            return false;
    };
    HomeComponent.prototype.loadAllUsers = function () {
        var _this = this;
        this.userService.getAll().subscribe(function (users) { _this.users = users; });
    };
    HomeComponent.prototype.loadAllContacts = function () {
        var _this = this;
        this.contactService.getAll().subscribe(function (contacts) { _this.contacts = contacts; });
    };
    HomeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'home.component.html'
        }),
        __metadata("design:paramtypes", [router_1.Router, index_1.UserService, index_2.ContactService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map