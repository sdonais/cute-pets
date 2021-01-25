import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShayComponent } from './shay.component';

describe('ShayComponent', () => {
  let component: ShayComponent;
  let fixture: ComponentFixture<ShayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
