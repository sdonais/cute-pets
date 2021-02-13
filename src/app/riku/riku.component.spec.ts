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

  it('should contain Riku in an h3 tag', () => {
    const fixture = TestBed.createComponent(RikuComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h3').textContent).toContain(`Riku`);
  }); //added

});
