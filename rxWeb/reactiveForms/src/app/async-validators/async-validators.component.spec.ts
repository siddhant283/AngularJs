import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncValidatorsComponent } from './async-validators.component';

describe('AsyncValidatorsComponent', () => {
  let component: AsyncValidatorsComponent;
  let fixture: ComponentFixture<AsyncValidatorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsyncValidatorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsyncValidatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
