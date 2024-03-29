import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructionComponent } from './instruction-comp.component';

describe('InstructionCompComponent', () => {
  let component: InstructionComponent;
  let fixture: ComponentFixture<InstructionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InstructionComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
