import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OIAcadamyComponent } from './oiacadamy.component';

describe('OIAcadamyComponent', () => {
  let component: OIAcadamyComponent;
  let fixture: ComponentFixture<OIAcadamyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OIAcadamyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OIAcadamyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
