import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevoComponent } from './devo.component';

describe('DevoComponent', () => {
  let component: DevoComponent;
  let fixture: ComponentFixture<DevoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
