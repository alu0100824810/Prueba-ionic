import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TakePartPage } from './take-part.page';

describe('TakePartPage', () => {
  let component: TakePartPage;
  let fixture: ComponentFixture<TakePartPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TakePartPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TakePartPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
