import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MaioPage } from './maio.page';

describe('MaioPage', () => {
  let component: MaioPage;
  let fixture: ComponentFixture<MaioPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MaioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
