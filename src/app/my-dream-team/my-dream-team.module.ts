import { NgModule } from '@angular/core';

import { MyDreamTeamComponent } from './my-dream-team.component';

import { My-dream-teamRoutingModule } from './my-dream-team-routing.module';

@NgModule({
  imports: [ My-dream-teamRoutingModule ],
  declarations: [    
    MyDreamTeamComponent
  ]
})
export class MyDreamTeamComponentModule { }
