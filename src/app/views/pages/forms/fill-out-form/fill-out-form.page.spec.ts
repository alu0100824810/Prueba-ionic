import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FillOutFormPage } from './fill-out-form.page';

describe('FillOutFormPage', () => {
  let component: FillOutFormPage;
  let fixture: ComponentFixture<FillOutFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FillOutFormPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FillOutFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
