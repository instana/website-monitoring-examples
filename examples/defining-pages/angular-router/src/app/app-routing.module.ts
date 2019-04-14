import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TopicsComponent } from './components/topics.component';
import { AboutComponent } from './components/about.component';
import { HomeComponent } from './components/home.component';

import { AlwaysFailingResolverService } from './resolvers/alwaysFailing.resolver';
import { AlwaysFailingGuard } from './guards/alwaysFailing.guard';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'topics/:topic', component: TopicsComponent },
  {
    path: 'failingGuard',
    component: AboutComponent,
    canActivate: [AlwaysFailingGuard]
  },
  {
    path: 'failingResolver',
    component: AboutComponent,
    resolve: {
      dummyValue: AlwaysFailingResolverService
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
