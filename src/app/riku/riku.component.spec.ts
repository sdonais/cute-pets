import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RikuComponent } from './riku.component';

describe('RikuComponent', () => {
  let component: RikuComponent;
  let fixture: ComponentFixture<RikuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RikuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RikuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
