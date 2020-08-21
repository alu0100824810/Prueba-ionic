import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ContestDrawPage } from './contest-draw.page';

describe('ContestDrawPage', () => {
  let component: ContestDrawPage;
  let fixture: ComponentFixture<ContestDrawPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContestDrawPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ContestDrawPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
