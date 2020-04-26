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
    path: 'getting-started',
    loadChildren: () => import('./features/getting-started/getting-started.module').then(m => m.GettingStartedModule)
  },
  {
    path: 'benchmark',
    loadChildren: () => import('./features/benchmark/benchmark.module').then(m => m.BenchmarkModule)
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
