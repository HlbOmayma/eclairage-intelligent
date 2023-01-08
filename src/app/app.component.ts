import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'eclairage-intelligent';
  items: Observable<any[]>;
  constructor(db: AngularFireDatabase) {
    this.items = db.list('eclairage').valueChanges();
    console.log(this.items);
  }
  ngOnInit(): void{
    this.items
  }
  getColor(temperature: number) {
    if (temperature < 20) {
      return 'blue';
    } else if (temperature >= 20 && temperature < 30) {
      return 'green';
    } else {
      return 'red';
    }
  }
  
  getFontSize(humidity: number) {
    if (humidity < 20) {
      return 12;
    } else if (humidity >= 20 && humidity < 40) {
      return 16;
    } else {
      return 24;
    }
  }
  
}
