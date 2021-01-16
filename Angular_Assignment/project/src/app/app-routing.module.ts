import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponentComponent } from './Components/home-component/home-component.component';
import { UserComponentComponent } from './Components/user-component/user-component.component';
import { CustomDirectivesComponent } from './Directives/custom-directives/custom-directives.component';

const routes: Routes = [
  
    {

      path: 'Assignment1',
  
      component: UserComponentComponent
  
    },
    {

      path: 'Assignment2',
  
      component: CustomDirectivesComponent
  
    },
    {

      path: '',
  
      component: HomeComponentComponent
  
    },

 
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
