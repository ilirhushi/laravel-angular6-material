
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDashboardComponent } from './my-dashboard.component';

describe('MyDashboardComponent', () => {
  let component: MyDashboardComponent;
  let fixture: ComponentFixture<MyDashboardComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MyDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
