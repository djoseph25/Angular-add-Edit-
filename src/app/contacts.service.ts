import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ContactService {

  constructor(private httpService: HttpClient) { }

  getWorkers() {
    return this.httpService.get('../../assets/workers.json');
  }

 getContacts() {
    return this.httpService.get('../../assets/contacts.json');
  }
  editWorkers() {
    // return this.httpService.post('../../assets/workers.json');
  }
}