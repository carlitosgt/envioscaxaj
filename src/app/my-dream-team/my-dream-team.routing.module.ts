import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyDreamTeamComponent } from './my-dream-team.component';

const routes: Routes = [
  {
    path: './my-dream-team',
    component: MyDreamTeamComponent,
    data: {
      title: 'My Dream Team FInish'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class My-dream-teamRoutingModule {}
