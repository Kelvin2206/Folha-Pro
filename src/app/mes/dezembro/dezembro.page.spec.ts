import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DezembroPage } from './dezembro.page';

describe('DezembroPage', () => {
  let component: DezembroPage;
  let fixture: ComponentFixture<DezembroPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DezembroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
