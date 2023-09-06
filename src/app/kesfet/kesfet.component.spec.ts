import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KesfetComponent } from './kesfet.component';

describe('KesfetComponent', () => {
  let component: KesfetComponent;
  let fixture: ComponentFixture<KesfetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KesfetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KesfetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
