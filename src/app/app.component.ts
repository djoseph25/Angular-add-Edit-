import { Component } from '@angular/core';
import { ContactService } from './contacts.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { IContact, IAdrType, IAddress } from '../models/app.models';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {



  contacts: IContact[];
  public addForm: FormGroup;
  public someContact: IContact;
  public newAttribute: any = {};
  public fieldArray: Array<any> = []; // Dynamically adding address fields


  public selectedAddr;

  public addresstypes: IAdrType[] = [
    { value: 'Office', viewValue: 'Office' },
    { value: 'Home', viewValue: 'Home' },
    { value: 'Business', viewValue: 'Business' },
    { value: 'Others', viewValue: 'Others' },
  ];
  constructor(private fb: FormBuilder,
    private myService: ContactService) { }

  ngOnInit() {

    this.addForm = this.fb.group({
      addressType: [null],
      city: [null],
      postalCode: [null],
    });


    this.myService.getContacts()
      .subscribe(res => this.contacts = res as any);
  }

  selectAddr(addr) {
    this.newAttribute.addressType = addr.addressType;
    this.newAttribute.postalCode = addr.postalCode;
    this.newAttribute.city = addr.city;

    this.selectedAddr = addr;
  }

  saveAddress(index, form: FormGroup) {
    const mode: 'update' | 'add' = this.selectedAddr ? 'update' : 'add';

    if (mode === 'add') {
      this.contacts[index].addresses.push({ ...this.newAttribute });
    } else if (mode === 'update') {
      Object.assign(this.selectedAddr, this.newAttribute);
    }

    // reset
    this.selectedAddr = undefined;
    form.reset();
  }

}
