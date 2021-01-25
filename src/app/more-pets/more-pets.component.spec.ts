import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MorePetsComponent } from './more-pets.component';

describe('MorePetsComponent', () => {
  let component: MorePetsComponent;
  let fixture: ComponentFixture<MorePetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MorePetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MorePetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
