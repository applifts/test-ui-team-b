import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertService, ContactService } from '../_services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'addContact.component.html'
})

export class AddContactComponent {
    model: any = {};
    loading = false;
    returnUrl: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private contactService: ContactService,
        private alertService: AlertService) { }


    ngOnInit() {    
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    register() {
        this.loading = true;
        this.contactService.create(this.model)
            .subscribe(
                data => {
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    //this.alertService.error(error);
                    //this.alertService.error(error._body);
                    this.alertService.error(error.message);
                    this.loading = false;
                });
    }
}
