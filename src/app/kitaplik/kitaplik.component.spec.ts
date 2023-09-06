import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KitaplikComponent } from './kitaplik.component';

describe('KitaplikComponent', () => {
  let component: KitaplikComponent;
  let fixture: ComponentFixture<KitaplikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KitaplikComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KitaplikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
