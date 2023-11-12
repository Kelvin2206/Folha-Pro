import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AbrilPage } from './abril.page';

describe('AbrilPage', () => {
  let component: AbrilPage;
  let fixture: ComponentFixture<AbrilPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AbrilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
