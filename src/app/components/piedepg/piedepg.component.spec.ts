import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiedepgComponent } from './piedepg.component';

describe('PiedepgComponent', () => {
  let component: PiedepgComponent;
  let fixture: ComponentFixture<PiedepgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PiedepgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PiedepgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
