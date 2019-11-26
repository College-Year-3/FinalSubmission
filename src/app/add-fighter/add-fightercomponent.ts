import { Component, OnInit } from '@angular/core';
import { IFighter } from '../fighter-list/fighter';
import { FighterService } from '../shared/fighter.service';
import { Router } from '@angular/router';
import { retry } from 'rxjs/operators';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';

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
  weightClass: string;


  // form1 = new FormGroup({
  //   fighterName: new FormControl('', [Validators.required, Validators.minLength(6)]),
  //   // tslint:disable-next-line: max-line-length
  //   fighterDOB: new FormControl('', [Validators.required,]),
  //   nationality: new FormControl('', [Validators.required,]),
  //   fightingStyle: new FormControl('', [Validators.required,]),
  // });

  formbuilder: any;
  constructor(private _fighterService: FighterService, private router: Router, private fb: FormBuilder) {
  }
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
      // this.form1 = this.formbuilder.group({
      //   fightername: ['', Validators.required],
      //   fighterdob: ['', Validators.required],
      //   NATIONALITY: ['', Validators.required],

      // });
  }
  // get fighterName() { return this.form1.get('fighterName'); }
  // get fighterDOB() { return this.form1.get('fighterDOB'); }
  // get nationality() { return this.form1.get('nationality'); }
  // get fightingStyle() { return this.form1.get('fightingStyle'); }


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
      commentCollection: this.commentCollection,
      weightClass: this.weightClass
    };
    // Lastly then we call our service method which will add our fighter to the colletion of fighters
    this._fighterService.addFighter(fighter);
    // This will redirect to the 'fighter-list component'
    this.router.navigate(['/fighter-list']);
  }


  onSubmit() {
    // console.log(this.form1.value);
  }
}
