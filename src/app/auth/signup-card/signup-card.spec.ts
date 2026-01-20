import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupCard } from './signup-card';

describe('SignupCard', () => {
  let component: SignupCard;
  let fixture: ComponentFixture<SignupCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignupCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignupCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
