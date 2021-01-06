import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MockUsersComponent } from './mock-users.component';

describe('MockUsersComponent', () => {
  let component: MockUsersComponent;
  let fixture: ComponentFixture<MockUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MockUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MockUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
