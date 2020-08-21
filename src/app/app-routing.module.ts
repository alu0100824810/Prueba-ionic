import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginGuard } from '@core/guards/login.guard';
import { WelcomeInfoGuard } from '@core/guards/welcome-info.guard';

const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'welcome', loadChildren: () => import('./views/welcome/welcome.module').then(m => m.WelcomePageModule), canActivate: [WelcomeInfoGuard] },
  { path: 'login', loadChildren: () => import('./views/login/login.module').then(m => m.LoginPageModule) },
  { path: 'forget-password', loadChildren: () => import('./views/forget-password/forget-password.module').then(m => m.ForgetPasswordPageModule) },
  { path: 'register', loadChildren: () => import('./views/register/register.module').then(m => m.RegisterPageModule) },
  { // TODO: DE MOMENTO METER LAS TAB DENTRO DE HOME
    path: 'home',
    children: [
      {
        path: '',
        loadChildren: () => import('./views/home/home.module').then(m => m.HomePageModule)
      }
    ]
  },
  {
    path: 'stadium',
    loadChildren: () => import('./views/pages/stadium/stadium.module').then(m => m.StadiumPageModule)
  },
  {
    path: 'category-forms',
    children: [
      {
        path: '',
        loadChildren: () => import('./views/pages/forms/forms.module').then(m => m.FormsPageModule)
      },
      {
        path: 'category/:category',
        children: [
          {
            path: '',
            loadChildren: () => import('./views/pages/forms/button-start-form/button-start-form.module').then(m => m.ButtonStartFormPageModule)
          },
          {
            path: 'fill-out',
            loadChildren: () => import('./views/pages/forms/fill-out-form/fill-out-form.module').then(m => m.FillOutFormPageModule)
          },
        ]
      }
    ]
  },
  {
    path: 'contest-draw',
    children: [
      {
        path: '',
        loadChildren: () => import('./views/pages/contest-draw/contest-draw.module').then(m => m.ContestDrawPageModule),
      },
      {
        path: 'take-part/:id',
        loadChildren: () => import('./views/pages/contest-draw/take-part/take-part.module').then(m => m.TakePartPageModule)
      }
    ]
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
