import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Fortes Flix';
  name : string = ''
  model = {
    left: true,
    middle: false,
    right: false
  };
}

export class NgbdButtonsCheckbox {
  
}