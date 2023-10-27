import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileemployeeComponent } from './profileemployee.component';

describe('ProfileemployeeComponent', () => {
  let component: ProfileemployeeComponent;
  let fixture: ComponentFixture<ProfileemployeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileemployeeComponent]
    });
    fixture = TestBed.createComponent(ProfileemployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
