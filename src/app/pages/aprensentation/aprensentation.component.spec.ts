import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AprensentationComponent } from './aprensentation.component';

describe('AprensentationComponent', () => {
  let component: AprensentationComponent;
  let fixture: ComponentFixture<AprensentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AprensentationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AprensentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
