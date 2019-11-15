import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameConfigureComponent } from './game-configure.component';

describe('GameConfigureComponent', () => {
  let component: GameConfigureComponent;
  let fixture: ComponentFixture<GameConfigureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameConfigureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameConfigureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
