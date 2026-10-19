import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Unstall } from './unstall';

describe('Unstall', () => {
  let component: Unstall;
  let fixture: ComponentFixture<Unstall>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Unstall]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Unstall);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
