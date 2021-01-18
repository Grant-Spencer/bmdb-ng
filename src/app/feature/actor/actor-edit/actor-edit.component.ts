import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Actor } from 'src/app/model/actor.class';
import { ActorService } from 'src/app/service/actor.service';

@Component({
  selector: 'app-actor-edit',
  templateUrl: './actor-edit.component.html',
  styleUrls: ['./actor-edit.component.css']
})
export class ActorEditComponent implements OnInit {
  title = "Actor Edit";
  actor: Actor = null;
  actorId: number = 0;
  submitBtnTitle = "Save";

  constructor(private actorSvc: ActorService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    //get the ID from the URL
    this.route.params.subscribe(
      parms => {
        this.actorId = parms['id']
        console.log("ActorID = " + this.actorId);
      }
    );
    //get actor by ID
    this.actorSvc.getById(this.actorId).subscribe(
      resp => {
        this.actor = resp as Actor;
        console.log('Actor', this.actor);
      },
      err => {
        console.log(err);
      }
    );
  }
  save() {
    // save the actor to the database
    this.actorSvc.update(this.actor).subscribe(
      resp => {
        this.actor = resp as Actor;
        console.log('Actor updated', this.actor);
      this.router.navigateByUrl("/actor-list");
      },
      err => {
        console.log(err);
      }
    );
  }

}
