import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OffersShopTicketsPage } from './offers-shop-tickets.page';

describe('OffersShopTicketsPage', () => {
  let component: OffersShopTicketsPage;
  let fixture: ComponentFixture<OffersShopTicketsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffersShopTicketsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OffersShopTicketsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
