import { Component, OnInit } from '@angular/core';
import { SystemService } from 'src/app/service/system.service';
import { Credit } from '../../../model/credit.class';
import { CreditService } from '../../../service/credit.service';

@Component({
  selector: 'app-credit-list',
  templateUrl: './credit-list.component.html',
  styleUrls: ['./credit-list.component.css']
})
export class CreditListComponent implements OnInit {

  title = "Credit List";
  credits: Credit[] = [];
  
  constructor(private creditSvc: CreditService, private sysSvc: SystemService) { }

  ngOnInit(): void {
    //populate list of credits
    console.log('actor-list - loggedInUser?'),this.sysSvc.loggedInUser;
    this.creditSvc.getAll().subscribe(
      resp => {
        this.credits = resp as Credit[];
        console.log('Credits', this.credits);
      },
      err => {
        console.log(err);
      }
    )
  }

}