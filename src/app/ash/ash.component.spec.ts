import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AshComponent } from './ash.component';

describe('AshComponent', () => {
  let component: AshComponent;
  let fixture: ComponentFixture<AshComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AshComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain Ash in an h3 tag', () => {
    const fixture = TestBed.createComponent(AshComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h3').textContent).toContain(`Ash`);
  }); //added

});
