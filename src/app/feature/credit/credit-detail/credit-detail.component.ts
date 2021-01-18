import { Component, Injectable, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Credit } from 'src/app/model/credit.class';
import { CreditService } from 'src/app/service/credit.service';

const URL = 'http://localhost:8080/credits';
@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-credit-detail',
  templateUrl: './credit-detail.component.html',
  styleUrls: ['./credit-detail.component.css']
})
export class CreditDetailComponent implements OnInit {
  title = "Credit Detail";
  credit: Credit = null;
  creditId: number = 0;
  http: any;

  constructor(private creditSvc: CreditService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    //get the ID from the URL
    this.route.params.subscribe(
      parms => {
        this.creditId = parms['id']
        console.log("creditId = " + this.creditId);
      }
    );
    //get credit by ID
    this.creditSvc.getById(this.creditId).subscribe(
      resp => {
        this.credit = resp as Credit;
        console.log('Credit :', this.credit);
      },
      err => {
        console.log(err);
      }
    );
  }

  // delete the credit to the database
  delete() {
    this.creditSvc.delete(this.credit.id).subscribe(
      resp => {
        this.credit = resp as Credit;
        console.log('Credit deleted', this.credit);
        this.router.navigateByUrl("/credit-list");
      },
      err => {
        console.log(err);
      }
    );
  }
  create(credit: Credit): Observable<Credit> {
    return this.http.post(URL+ '/', credit) as Observable<Credit>;
}
//update actor
update(credit: Credit): Observable<Credit> {
  return this.http.put(URL + '/', credit) as Observable<Credit>;
}
}
