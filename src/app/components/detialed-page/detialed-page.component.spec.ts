import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetialedPageComponent } from './detialed-page.component';

describe('DetialedPageComponent', () => {
  let component: DetialedPageComponent;
  let fixture: ComponentFixture<DetialedPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetialedPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetialedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
