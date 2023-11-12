import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OutubroPage } from './outubro.page';

describe('OutubroPage', () => {
  let component: OutubroPage;
  let fixture: ComponentFixture<OutubroPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(OutubroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
