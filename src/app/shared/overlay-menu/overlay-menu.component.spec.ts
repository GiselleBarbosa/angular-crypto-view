import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlayMenuComponent } from './overlay-menu.component';

describe('OverlayMenuComponent', () => {
  let component: OverlayMenuComponent;
  let fixture: ComponentFixture<OverlayMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [OverlayMenuComponent],
    });
    fixture = TestBed.createComponent(OverlayMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
