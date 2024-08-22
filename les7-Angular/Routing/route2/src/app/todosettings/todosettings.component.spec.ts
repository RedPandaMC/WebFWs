import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosettingsComponent } from './todosettings.component';

describe('TodosettingsComponent', () => {
  let component: TodosettingsComponent;
  let fixture: ComponentFixture<TodosettingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodosettingsComponent]
    });
    fixture = TestBed.createComponent(TodosettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
