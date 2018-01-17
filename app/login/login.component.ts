import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertService, AuthenticationService } from '../_services/index';

// A Component marks a class as an Angular component and collects component configuration metadata.
@Component({
    // The module id of the module that contains the component.
    // Needed to be able to resolve relative urls for templates and styles.
    moduleId: module.id,

    // Specifies a template URL for an Angular component.
    templateUrl: 'login.component.html'
})

// The use of the OnInit interfce requires the implementation of OnInit()
export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService) { }

    ngOnInit() {
        // reset login status
        this.authenticationService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    login() {
        this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(
                data => {
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    this.alertService.error('Username or password is incorrect');
                    this.loading = false;
                });
    }
}
