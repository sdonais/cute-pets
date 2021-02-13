import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create the header component', () => {
    expect(component).toBeTruthy();
  }); //added

  // it(`should have as title 'The Place for Cute Pets!'`, () => {
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('The Place for Cute Pets!');
  // }); //added
  

});
