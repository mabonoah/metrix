import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddObjectTypeComponent } from './add-object-type.component';

describe('AddObjectTypeComponent', () => {
  let component: AddObjectTypeComponent;
  let fixture: ComponentFixture<AddObjectTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddObjectTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddObjectTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
