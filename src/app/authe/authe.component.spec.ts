import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutheComponent } from './authe.component';

describe('AutheComponent', () => {
  let component: AutheComponent;
  let fixture: ComponentFixture<AutheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutheComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
