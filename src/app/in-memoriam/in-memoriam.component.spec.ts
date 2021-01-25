import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InMemoriamComponent } from './in-memoriam.component';

describe('InMemoriamComponent', () => {
  let component: InMemoriamComponent;
  let fixture: ComponentFixture<InMemoriamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InMemoriamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InMemoriamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
