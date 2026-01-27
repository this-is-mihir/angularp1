import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPro } from './list-pro';

describe('ListPro', () => {
  let component: ListPro;
  let fixture: ComponentFixture<ListPro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListPro]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPro);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
