import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LobukoComponent } from './lobuko.component';

describe('LobukoComponent', () => {
  let component: LobukoComponent;
  let fixture: ComponentFixture<LobukoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LobukoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LobukoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
