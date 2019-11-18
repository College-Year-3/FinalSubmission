import { Component, Provider } from '@angular/core';
import { FighterService } from './shared/fighter.service';
import * as firebase from 'firebase/app';

// // Initialize Firebase
 const firebaseConfig = {
  // tslint:disable-next-line: quotemark
  apiKey: "AIzaSyC35IIq7yxHqiYM8c9k3Q8F6vKKx362GLo",
  authDomain: 'fighterapp-ab993.firebaseapp.com',
  databaseURL: 'https://fighterapp-ab993.firebaseio.com',
  projectId: 'fighterapp-ab993',
  storageBucket: 'fighterapp-ab993.appspot.com',
  messagingSenderId: '346903218518',
  appId: '1:346903218518:web:0ea551985a466970cc6ef7',
  measurementId: 'G-GKZ47ZDV3N'
 };
 firebase.initializeApp(firebaseConfig);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FighterService]
})
export class AppComponent {
  title = 'app works';
}
