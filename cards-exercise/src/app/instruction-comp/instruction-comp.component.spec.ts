import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructionCompComponent } from './instruction-comp.component';

describe('InstructionCompComponent', () => {
  let component: InstructionCompComponent;
  let fixture: ComponentFixture<InstructionCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstructionCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructionCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
