import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmertxeComponent } from './emertxe.component';

describe('EmertxeComponent', () => {
  let component: EmertxeComponent;
  let fixture: ComponentFixture<EmertxeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmertxeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmertxeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
