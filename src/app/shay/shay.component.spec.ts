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

  it('should contain Shay in an h3 tag', () => {
    const fixture = TestBed.createComponent(ShayComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h3').textContent).toContain(`Shay`);
  }); //added

});
