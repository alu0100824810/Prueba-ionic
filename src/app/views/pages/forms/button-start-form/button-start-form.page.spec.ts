import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ButtonStartFormPage } from './button-start-form.page';

describe('ButtonStartFormPage', () => {
  let component: ButtonStartFormPage;
  let fixture: ComponentFixture<ButtonStartFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonStartFormPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonStartFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
