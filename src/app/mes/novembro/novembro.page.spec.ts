import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NovembroPage } from './novembro.page';

describe('NovembroPage', () => {
  let component: NovembroPage;
  let fixture: ComponentFixture<NovembroPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NovembroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
