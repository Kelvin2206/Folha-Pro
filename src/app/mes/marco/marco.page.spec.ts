import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MarcoPage } from './marco.page';

describe('MarcoPage', () => {
  let component: MarcoPage;
  let fixture: ComponentFixture<MarcoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MarcoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
