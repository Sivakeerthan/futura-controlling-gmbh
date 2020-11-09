import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadmComponent } from './loadm.component';

describe('LoadmComponent', () => {
  let component: LoadmComponent;
  let fixture: ComponentFixture<LoadmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
