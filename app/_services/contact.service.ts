import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { AppConfig } from '../app.config';
import { Contact } from '../_models/index';

@Injectable()
export class ContactService {
    constructor(private http: HttpClient, private config: AppConfig) { }

    getAll() {
        return this.http.get(this.config.apiUrl + '/contacts');
    }

    getById(id: number) {
        return this.http.get(this.config.apiUrl + '/contacts/' + id);
    }

    create(contact: Contact) {
        return this.http.post(this.config.apiUrl + '/contacts/contacts', contact);
    }

    update(contact: Contact) {
        return this.http.put(this.config.apiUrl + '/contacts' + contact.id, contact);
    }

    delete(id: number) {
        return this.http.delete(this.config.apiUrl + '/contacts/' + id);
    }  
}
