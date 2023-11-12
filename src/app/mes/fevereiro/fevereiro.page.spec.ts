import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FevereiroPage } from './fevereiro.page';

describe('FevereiroPage', () => {
  let component: FevereiroPage;
  let fixture: ComponentFixture<FevereiroPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FevereiroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
