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

  filteredFighters: IFighter[];
  fighters: IFighter[];

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
    }
}
