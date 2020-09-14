import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngxs/store';
import { DecreaseAction } from 'src/app/store/state/counter.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input()
  title = 'Hello Home Work..';

  url = 'http://www.google.com';

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  onButtonClick(): void {
    this.url = 'http://www.yahoo.com';
  }

  onDecreaseClick(): void {
    this.store.dispatch(
      new DecreaseAction(5)
    );
  }

}
