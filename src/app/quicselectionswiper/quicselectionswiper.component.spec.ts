import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuicselectionswiperComponent } from './quicselectionswiper.component';

describe('QuicselectionswiperComponent', () => {
  let component: QuicselectionswiperComponent;
  let fixture: ComponentFixture<QuicselectionswiperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuicselectionswiperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuicselectionswiperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
