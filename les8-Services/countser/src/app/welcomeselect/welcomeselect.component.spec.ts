import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeselectComponent } from './welcomeselect.component';

describe('WelcomeselectComponent', () => {
  let component: WelcomeselectComponent;
  let fixture: ComponentFixture<WelcomeselectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WelcomeselectComponent]
    });
    fixture = TestBed.createComponent(WelcomeselectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
