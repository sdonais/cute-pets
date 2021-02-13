import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MykonosComponent } from './mykonos.component';

describe('MykonosComponent', () => {
  let component: MykonosComponent;
  let fixture: ComponentFixture<MykonosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MykonosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MykonosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
