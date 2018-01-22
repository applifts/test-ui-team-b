import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AlertService, UserService } from '../_services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'register.component.html'
})

export class RegisterComponent {
    model: any = {};
    loading = false;
    valid: boolean;

    constructor(
        private router: Router,
        private userService: UserService,
        private alertService: AlertService) { }

    register() {
        if(this.validateFields()) {
            this.loading = true;
            this.userService.create(this.model)
                .subscribe(
                    data => {
                        this.alertService.success('Registration successful', true);
                        this.router.navigate(['/login']);
                    },
                    error => {
                        //this.alertService.error(error);
                        //this.alertService.error(error._body);
                        this.alertService.error(error.message);
                        this.loading = false;
                    });
        }
    }
    validateFields(){

        var emailRegEx = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/;
        var phoneNumberRegEx = /[0-9]{10}/;
        var passwordRegEx = /[0-9a-zA-Z]{6,}/;
        var usernameRegEx = /[0-9a-zA-Z]{3,}/;
        var firstNameRegEx = /[A-Za-z]{2,}/;
        var lastNameRegEx = /[A-Za-z]{2,}/;

        if(!firstNameRegEx.test(this.model.firstName))
        {
            alert("Invalid First Name");
            return false;
        }

        if(!lastNameRegEx.test(this.model.lastName))
        {
            alert("Invalid Last Name");
            return false;
        }

        if(!usernameRegEx.test(this.model.username))
        {
            alert("Invalid Username");
            return false;
        }

        if(!passwordRegEx.test(this.model.password))
        {
            alert("Invalid Password\nPasswords must be at least 6 characters in length and may only include alphanumeric characters");
            return false
        }

        if(!emailRegEx.test(this.model.email))
        {
            alert("Invalid Email");
            return false;
        }

        if(!phoneNumberRegEx.test(this.model.phoneNumber))
        {
            alert("Invalid Phone Number\nRequired Format: xxxxxxxxxx");
            return false;
        }
    
        
        return true;
    }

}
