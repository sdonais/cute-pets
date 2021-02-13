import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AureliaComponent } from './aurelia.component';

describe('AureliaComponent', () => {
  let component: AureliaComponent;
  let fixture: ComponentFixture<AureliaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AureliaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AureliaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
