import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'docs',
    pathMatch: 'full',
  },
  {
    path: 'docs',
    loadChildren: () => import('./features/docs/docs.module').then((m) => m.DocsModule),
  },
  {
    path: 'benchmark',
    loadChildren: () => import('./features/benchmark/benchmark.module').then((m) => m.BenchmarkModule),
  },
  {
    path: '**',
    redirectTo: 'docs',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      scrollPositionRestoration: 'enabled',
      preloadingStrategy: PreloadAllModules,
      relativeLinkResolution: 'legacy',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
