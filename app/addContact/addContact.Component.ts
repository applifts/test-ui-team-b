import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';

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
        private _location: Location,
        private contactService: ContactService,
        private alertService: AlertService) { }


    ngOnInit() {    
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    cancel(){
        this._location.back();
    }

    register() {
        this.loading = true;
        //this._location.back();
        
        this.contactService.create(this.model)
            .subscribe(
                data => {
                    //this.router.navigate([this.returnUrl]);
                    this.router.navigate(['/home']);
                    //this._location.back();
                },
                error => {
                    //this.alertService.error(error);
                    //this.alertService.error(error._body);
                    this.alertService.error(error.message);
                    this.loading = false;
                });
                
    }
}
