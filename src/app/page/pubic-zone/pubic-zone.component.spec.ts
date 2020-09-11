import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PubicZoneComponent } from './pubic-zone.component';

describe('PubicZoneComponent', () => {
  let component: PubicZoneComponent;
  let fixture: ComponentFixture<PubicZoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PubicZoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PubicZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
