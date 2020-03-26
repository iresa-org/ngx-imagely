import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GettingStartedComponent } from './getting-started.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: GettingStartedComponent,
    data: { title: 'anms.menu.about' }
  }
];

@NgModule({
  declarations: [GettingStartedComponent],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class GettingStartedModule {}
