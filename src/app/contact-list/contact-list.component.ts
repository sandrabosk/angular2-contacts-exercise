import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactServiceService } from '../services/contact-service.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
  providers: [ContactServiceService]
})
export class ContactListComponent implements OnInit {

contacts: Array<any>;

  constructor(
    private router: Router,
    private contactService: ContactServiceService
  ) { }

  ngOnInit() {
    this.contacts = this.contactService.getList();
  }
  viewDetails(id, param){
      this.router.navigate(['contact', id], { queryParams: { foo: param }});
    }
}
