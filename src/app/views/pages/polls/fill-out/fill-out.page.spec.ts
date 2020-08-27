import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FillOutPage } from './fill-out.page';

describe('FillOutPage', () => {
  let component: FillOutPage;
  let fixture: ComponentFixture<FillOutPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FillOutPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FillOutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
