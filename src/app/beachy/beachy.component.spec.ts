import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeachyComponent } from './beachy.component';

describe('BeachyComponent', () => {
  let component: BeachyComponent;
  let fixture: ComponentFixture<BeachyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeachyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeachyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
