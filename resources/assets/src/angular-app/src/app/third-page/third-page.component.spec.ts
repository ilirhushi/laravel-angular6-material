import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdPageComponent } from './third-page.component';

describe('ThirdPageComponent', () => {
  let component: ThirdPageComponent;
  let fixture: ComponentFixture<ThirdPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThirdPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
