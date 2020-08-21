import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ViewListFormsComponent } from './components/view-list-forms/view-list-forms.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarMenuComponent } from './components/sidebar-menu/sidebar-menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { FormsModule } from '@angular/forms';

const COMPONENTS = [
  HeaderComponent,
  SidebarMenuComponent,
  FooterComponent,
  ViewListFormsComponent
];

const MODULES = [
  IonicModule,
  CommonModule,
  FormsModule,
  FontAwesomeModule
];


@NgModule({
  declarations: [...COMPONENTS],
  imports: [...MODULES],
  providers: [],
  exports: [...COMPONENTS, ...MODULES],
  entryComponents: [],
})
export class SharedModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas, far);
  }
}
