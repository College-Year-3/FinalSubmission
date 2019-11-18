import { Component, OnInit } from '@angular/core';
import { IFighter } from '../fighter-list/fighter';
import { FighterService } from '../shared/fighter.service';
import { Router } from '@angular/router';
import { retry } from 'rxjs/operators';

@Component({
  selector: 'app-add-fighter',
  templateUrl: './add-fighter.component.html',
  styleUrls: ['./add-fighter.component.css']
})
export class AddFighterComponent implements OnInit {

  // Creating variables to store data inputted from user
  fighterName: string;
  fighterDOB: string;
  nationality: string;
  fightingStyle: string;
  ranking: number;
  userRating: number;
  imageUrl: string;
  comment: string;
  commentCollection: string[];
  showDisplayClipartComponent: boolean ;
  listFilter: string;
  imageStr: string; // added this

  constructor(private _fighterService: FighterService, private router: Router) { }
  // router will redirect after the form is submitted

  showHideDisplayClipartComponent(): boolean {
    this.showDisplayClipartComponent = !this.showDisplayClipartComponent;
    return false;   // this will hide the display until it is needed
  }

  addImageStringToFormTextBox(evt): boolean {
    this.imageUrl = evt;
    return false;
  }
  ngOnInit() {
  }

  // When submit button is clicked, it calls this method
  addFighter(): void {
   const fighter: IFighter = {
      fighterName: this.fighterName,
      fighterDOB: this.fighterDOB,
      nationality: this.nationality,
      fightingStyle: this.fightingStyle,
      ranking: this.ranking,
      userRating: this.userRating,
      imageUrl: this.imageUrl,
      comment: this.comment,
      commentCollection: this.commentCollection
    };
    // Lastly then we call our service method which will add our fighter to the colletion of fighters
    this._fighterService.addFighter(fighter);
    // This will redirect to the 'fighter-list component'
    this.router.navigate(['/fighter-list']);
  }
}
