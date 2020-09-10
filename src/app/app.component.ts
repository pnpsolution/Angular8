import { Component } from '@angular/core';
import { AdvForm } from './model/adv-form';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular8';

  onFormSubmit(data: AdvForm): void {
    console.log(data);
  }
}
