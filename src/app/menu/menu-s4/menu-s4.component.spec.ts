import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuS4Component } from './menu-s4.component';

describe('MenuS4Component', () => {
  let component: MenuS4Component;
  let fixture: ComponentFixture<MenuS4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuS4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuS4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
