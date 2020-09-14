import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AdvForm } from './model/adv-form';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular8';

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('en');
  }

  onFormSubmit(data: AdvForm): void {
    console.log(data);
  }
}
