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

  it('should contain Beachy in an h3 tag', () => {
    const fixture = TestBed.createComponent(BeachyComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h3').textContent).toContain(`Beachy`);
  }); //added

});
