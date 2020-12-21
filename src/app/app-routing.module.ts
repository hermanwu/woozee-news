import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsPageComponent } from './news-page/news-page.component';

const routes: Routes = [
  {
    path: 'news',
    component: NewsPageComponent,
  },
  { path: '**', redirectTo: 'news', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
