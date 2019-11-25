import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateGameComponent } from './update-game.component';

describe('UpdateGameComponent', () => {
  let component: UpdateGameComponent;
  let fixture: ComponentFixture<UpdateGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
