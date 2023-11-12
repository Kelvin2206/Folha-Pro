import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JulhoPage } from './julho.page';

describe('JulhoPage', () => {
  let component: JulhoPage;
  let fixture: ComponentFixture<JulhoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(JulhoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
