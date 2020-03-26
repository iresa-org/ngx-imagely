import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'docs',
    pathMatch: 'full'
  },
  {
    path: 'docs',
    loadChildren: () => import('./features/docs/docs.module').then(m => m.DocsModule)
  },
  {
    path: 'docs',
    loadChildren: () => import('./features/docs/docs.module').then(m => m.DocsModule)
  },
  {
    path: '**',
    redirectTo: 'docs'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      scrollPositionRestoration: 'enabled',
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
