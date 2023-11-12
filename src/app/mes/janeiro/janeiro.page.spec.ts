import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JaneiroPage } from './janeiro.page';

describe('JaneiroPage', () => {
  let component: JaneiroPage;
  let fixture: ComponentFixture<JaneiroPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(JaneiroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
