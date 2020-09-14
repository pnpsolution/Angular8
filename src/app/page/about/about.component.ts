import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { IncreaseAction } from 'src/app/store/state/counter.actions';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  onIncreaseClick(): void {
    this.store.dispatch(
      new IncreaseAction(10)
    );
  }

}
