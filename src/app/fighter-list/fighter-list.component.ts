// tslint:disable-next-line: import-spacing
import { Component, OnInit } from  '@angular/core';
import { IFighter } from './fighter';
import { FighterService } from '../shared/fighter.service';

@Component({
  selector: 'app-fighter-list',
  templateUrl: './fighter-list.component.html',
  styleUrls: ['./fighter-list.component.css']
})

export class FighterListComponent implements OnInit {

  // tslint:disable-next-line: no-inferrable-types
  pageTitle: string = 'Fighter Application';
  imageWidth = 50;
  imageMargin = 2;
  showImage = false;
  errorMessage = 'Observable failed!';
  filteredFighters: IFighter[];
  fighters: IFighter[];
  checkboxFilter = { Flyweight: false, Bantamweight: false, Featherweight: false, Lightweight: false, Welterweight: false,
     Middleweight: false, Lightheavyweight: false, Heavyweight: false, All: false };

     editState: boolean = false;
     fighterToEdit: IFighter;

  _listFilter: string;
  get listFilter(): string { // gets values from filter box
    return this._listFilter;
  }
  set listFilter(value: string) { // sets value from filter box to our '_listFilter' variable
    // if listFilter value is empty, return full list of fighters.
    // if listFilter has something in it, execute function to pull out fighters from list and sort them into filteredFighters
    this._listFilter = value;
     // JavaScript conditonal operator, If list filter is empty
    this.filteredFighters = this.listFilter ? this.performFilter(this.listFilter) : this.fighters;
  }

  

  constructor(private _fighterService: FighterService) {
  }

  performFilter(filterBy: string): IFighter[] {
    filterBy = filterBy.toLocaleLowerCase();
    // tslint:disable-next-line: triple-equals
    return this.fighters.filter((fighter: IFighter) => fighter.fighterName.toLocaleLowerCase().indexOf(filterBy) != -1);
    // return filtered list of Fighter using JavaScript bult-in 'filter' function
    // extract each fighter in fighter array, convert fighterName to lower case
    // check for index of what is passed in, if index is (-1) indicates it found nothing
  }

  onNotify(message: string): void {
    console.log(message);
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  public ngOnInit(): void {
    this._fighterService.getFighters().subscribe(fighters => {
      this.fighters = fighters;
      this.filteredFighters = this.fighters;
    },
      error => this.errorMessage = <any>error);
  }

  deleteFighter(id: string): void {
      console.log('Fighters Are:' + this.fighters);
      this._fighterService.deleteFighter(id);
      this.clearState();
    }

    filterChange(){
      this.filteredFighters = this.fighters.filter(x =>
        (x.weightClass === 'Flyweight' && this.checkboxFilter.Flyweight) ||
        (x.weightClass === 'Bantamweight' && this.checkboxFilter.Bantamweight) ||
        (x.weightClass === 'Featherweight' && this.checkboxFilter.Featherweight) ||
        (x.weightClass === 'Lightweight' && this.checkboxFilter.Lightweight) ||
        (x.weightClass === 'Welterweight' && this.checkboxFilter.Welterweight) ||
        (x.weightClass === 'Bantamweight' && this.checkboxFilter.Bantamweight) ||
        (x.weightClass === 'Middleweight' && this.checkboxFilter.Middleweight) ||
        (x.weightClass === 'Lightheavyweight' && this.checkboxFilter.Lightheavyweight) ||
        (x.weightClass === 'Heavyweight' && this.checkboxFilter.Heavyweight) 
        );
    }

    displayAll(){
      this.filteredFighters = this.fighters;
  }

  editFighter(event, fighter: IFighter) {
    this.editState = true;
    this.fighterToEdit = fighter;
  }

  updateFighter(fighter: IFighter){
    this._fighterService.updateFighter(fighter);
    this.clearState();
  }

  clearState(){
    console.log("clear state called");
    this.editState = false;
    this.fighterToEdit = null;

  }
}
