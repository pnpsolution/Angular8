import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { CounterStateModel } from 'src/app/store/state/counter.state';

@Component({
  selector: 'app-pubic-zone',
  templateUrl: './pubic-zone.component.html',
  styleUrls: ['./pubic-zone.component.css']
})
export class PubicZoneComponent implements OnInit {

  // @Select('counter')
  @Select()
  counter$: Observable<CounterStateModel>;


  constructor(private translate: TranslateService) { }

  ngOnInit(): void {
  }

  switchLang(lang: string): void {
    this.translate.use(lang);
  }

}
