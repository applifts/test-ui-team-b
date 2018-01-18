import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../_models/index';
import { UserService } from '../_services/index';
import { Contact } from '../_models/index';
import { ContactService } from '../_services/index';


@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {
    currentUser: User;
    users: User[] = [];
    contacts: Contact[] = [];
    flag: number = 0;;
    //loading = false;

    constructor(private router: Router, private userService: UserService, private contactService: ContactService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
        this.loadAllUsers();
        this.loadAllContacts();
    }

    openContactPage(){
        //this.loading = true;
        this.router.navigate(['/addContact']);
    }

    deleteUser(id: number) {
        if(id == this.currentUser.id)
            this.flag  = 1;

        this.userService.delete(id).subscribe(() => { this.loadAllUsers() });

        if(this.flag == 1)
        {
            this.flag = 0
            this.router.navigate(['/login']);
        }
    }

    deleteContact(id: number){
        this.contactService.delete(id).subscribe(() => { this.loadAllContacts() });
    }

    maybeHide(){
        if(this.contacts.length != 0){
            return true;
        }
        else
            return false;
    }

    private loadAllUsers() {
        this.userService.getAll().subscribe(users => { this.users = <any>users; });
    }

    private loadAllContacts(){
        this.contactService.getAll().subscribe(contacts => { this.contacts = <any>contacts});
    }
}