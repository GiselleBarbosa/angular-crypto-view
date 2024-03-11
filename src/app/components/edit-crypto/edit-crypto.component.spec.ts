import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCryptoComponent } from './edit-crypto.component';

describe('EditCryptoComponent', () => {
  let component: EditCryptoComponent;
  let fixture: ComponentFixture<EditCryptoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [EditCryptoComponent],
    });
    fixture = TestBed.createComponent(EditCryptoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
