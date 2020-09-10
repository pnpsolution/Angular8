import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input()
  title = 'Hello Home Work..';

  url = 'http://www.google.com';

  constructor() { }

  ngOnInit(): void {
  }

}
