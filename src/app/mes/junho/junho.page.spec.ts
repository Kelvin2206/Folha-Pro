import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JunhoPage } from './junho.page';

describe('JunhoPage', () => {
  let component: JunhoPage;
  let fixture: ComponentFixture<JunhoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(JunhoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
