import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'shopping-reader';

  constructor(db: AngularFirestore) {

  }

  printUser(event) {
    console.log(event);
  }

  printError(event) {
    console.error(event);
  }
}
