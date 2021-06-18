import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    Test ngFor <br />
    <div *ngFor="let id of ids">  
      <span>{{id}}</span>  
    </div>   
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-ngfor';
  ids = [1,2,3,4,5];
}
