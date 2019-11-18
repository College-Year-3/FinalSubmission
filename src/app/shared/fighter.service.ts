import { Injectable } from '@angular/core';
import { IFighter } from '../fighter-list/fighter';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'; // HttpClient onlh available in angular 4
import { Observable, of } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';

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

  constructor(private _http: HttpClient, private _afs: AngularFirestore) {
    // Connect to database
    this.fightersCollection = _afs.collection<IFighter>('fighters');
    console.log('Adding all fighters to firestore...');
    // this.addAllFighters();
  }

  getFighters(): Observable<IFighter[]> {// Type of data it's OBSERVING
    // valueChanges() returns the current state of the collection as an
    // Observable of data as a synchronized array of JSON objects.
    // this.fighters = this.fightersCollection.valueChanges();
    this.fighters = this.fightersCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as IFighter;
        console.log('getFighters:data' + JSON.stringify(data));
        const id = a.payload.doc.id;
        console.log('getFighters:id = ' + id);

        return { id, ...data };
      }))
    );

    // As the data is now available as an Observable we can subscribe to it and
    // Output to the console to have a peek at it
    this.fighters.subscribe(data => console.log('getFightes' + data));

    return this.fighters;
    // return this._http.get<IFighter[]>(this._fightersUrl).pipe (  // IFighter[] specifies the TYPE of response we should get back
    //   tap(data => console.log('All:' + JSON.stringify(data))),
    //   catchError(this.handleError));
  }

  deleteFighter(id: string): void {
       this.fightersCollection.doc(id).delete()
      .catch(error => { console.log('deleteFighter error: ' + error); })
      // tslint:disable-next-line: whitespace
      .then(() => console.log('deleteFighter: id = '+ id ));

  }

  addFighter(fighter: IFighter): void {
    this.fightersCollection.add(fighter);
  }

  // addAllFighters() {
  //   this._http.get<IFighter[]>(this._fighterUrl).subscribe(
  //     fighers => {
  //       this.allFighters = fighters;
  //       console.log("getFighters" + JSON.stringify(fighters));
  //       for (let fighter of this.allFighters) {
  //         console.log("Adding: " + fighter.fighterName);
  //         this.fightersCollection.add(fighter);
  //       }
  //     },
  //     error => (this.errorMessage = <any>error)
  //   );
  // }
  private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return Observable.throw(err.message);

  }

}
