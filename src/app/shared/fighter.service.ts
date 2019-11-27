import { Injectable } from '@angular/core';
import { IFighter } from '../fighter-list/fighter';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'; // HttpClient onlh available in angular 4
import { Observable, of } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { jsonpCallbackContext } from '@angular/common/http/src/module';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import * as firebase from 'firebase';
import { IfObservable } from 'rxjs/observable/IfObservable';

@Injectable()
export class FighterService {
  // specify URL to fighters on our web service for fake JSON server
  private _fighterUrl = 'http://localhost:3000/fighters';

  // Service wrapper around the native Firestore SDK's
  // CollectionReference and Query types.
  fightersCollection: AngularFirestoreCollection<IFighter>;

  // A representation of any set of Fighters over any amount of time
  fighters: Observable<IFighter[]>;

  // Array to hold all fighters
  allFighters: IFighter[];
  errorMessage: string;
  itemDoc;

  constructor(private _http: HttpClient, private _afs: AngularFirestore) {
    // Connect to database
    this.fightersCollection = _afs.collection<IFighter>('fighters');
    console.log('Adding all fighters to firestore...');
    // tslint:disable-next-line: comment-format
   // this.addAllFighters();
  }

  getFighters(): Observable<IFighter[]> {
    // return this._http.get<IFighter[]>(this._fighterUrl)
    // .do(data => console.log('All: ' + JSON.stringify(data)))
    // .catch(this.handleError);
    // Type of data it's OBSERVING
    // valueChanges() returns the current state of the collection as an
    // Observable of data as a synchronized array of JSON objects.

    // this.fighters = this.fightersCollection.valueChanges();
    // this.fighters.subscribe(data =>  console.log('Getting Fighters' + data));
    // return this.fighters;
    // tslint:disable-next-line: no-trailing-whitespace
    this.fighters = this.fightersCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as IFighter;
        console.log('getFighters:data' + JSON.stringify(data));
        const id = a.payload.doc.id;
        console.log('getFighters:id = ' + id);
        return {id, ...data};
      }))
    );
    return this.fighters;
  }
  deleteFighter(id: string, fighter: IFighter): void {
       this.fightersCollection.doc(id).delete()
      .catch(error => { console.log('deleteFighter error: ' + error); })
      // tslint:disable-next-line: whitespace
      .then(() => console.log('deleteFighter: id = '+ id ));

      this.itemDoc = this._afs.doc(`fighters/${fighter.id}`);
      this.itemDoc.delete();
  }

  addFighter(fighter: IFighter) {
    this.fightersCollection.add(fighter);
  }


  updateFighter(fighter: IFighter): void{
   this.itemDoc = this._afs.doc(`fighters/${fighter.id}`);
   this.itemDoc.set(fighter);
  };


  addAllFighters() {
    this._http.get<IFighter[]>(this._fighterUrl).subscribe(
        fighters => {
          this.allFighters = fighters;
          console.log('Getting Fighters' + JSON.stringify(fighters));
          // tslint:disable-next-line: prefer-const
          for (let fighter of this.allFighters) {
            console.log('Adding: ' + fighter.fighterName);
            this.fightersCollection.add(fighter);
          }
        },
        error => (this.errorMessage = <any> error)
    );
      }
  private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return Observable.throw(err.message);
  }
}
