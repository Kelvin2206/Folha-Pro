import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SetembroPage } from './setembro.page';

describe('SetembroPage', () => {
  let component: SetembroPage;
  let fixture: ComponentFixture<SetembroPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SetembroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
