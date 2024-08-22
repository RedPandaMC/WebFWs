import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosettingsComponent } from './todosettings.component';

describe('TodosettingsComponent', () => {
  let component: TodosettingsComponent;
  let fixture: ComponentFixture<TodosettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodosettingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodosettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
