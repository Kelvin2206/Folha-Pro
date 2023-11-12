import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgostoPage } from './agosto.page';

describe('AgostoPage', () => {
  let component: AgostoPage;
  let fixture: ComponentFixture<AgostoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AgostoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
