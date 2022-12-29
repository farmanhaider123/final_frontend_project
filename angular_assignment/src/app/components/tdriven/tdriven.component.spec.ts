import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TdrivenComponent } from './tdriven.component';

describe('TdrivenComponent', () => {
  let component: TdrivenComponent;
  let fixture: ComponentFixture<TdrivenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TdrivenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TdrivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
