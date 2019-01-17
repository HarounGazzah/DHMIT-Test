import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DHMIT-Test';


persons: any[] = [
  { id: '001', name: 'Mr. Moez' },
  { id: '002', name: 'Mr. Tarek' },
  { id: '003', name: 'Haroun' },
  { id: '004', name: 'Walid' },
  { id: '005', name: 'Ahmed' },
  { id: '006', name: 'Ilyess' },
  { id: '007', name: 'Omar' },
];

}
