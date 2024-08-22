import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedBoxComponent } from './red-box.component';

describe('RedBoxComponent', () => {
  let component: RedBoxComponent;
  let fixture: ComponentFixture<RedBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RedBoxComponent]
    });
    fixture = TestBed.createComponent(RedBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
