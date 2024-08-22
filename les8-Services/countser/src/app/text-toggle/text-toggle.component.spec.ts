import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextToggleComponent } from './text-toggle.component';

describe('TextToggleComponent', () => {
  let component: TextToggleComponent;
  let fixture: ComponentFixture<TextToggleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextToggleComponent]
    });
    fixture = TestBed.createComponent(TextToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
