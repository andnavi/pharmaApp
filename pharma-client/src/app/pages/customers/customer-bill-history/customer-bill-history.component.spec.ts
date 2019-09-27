import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerBillHistoryComponent } from './customer-bill-history.component';

describe('CustomerBillHistoryComponent', () => {
  let component: CustomerBillHistoryComponent;
  let fixture: ComponentFixture<CustomerBillHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerBillHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerBillHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
