import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDreamTeamComponent } from './my-dream-team.component';

describe('MyDreamTeamComponent', () => {
  let component: MyDreamTeamComponent;
  let fixture: ComponentFixture<MyDreamTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyDreamTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDreamTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
