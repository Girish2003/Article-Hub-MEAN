import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutComponent } from './layout/layout.component';
import { RouterGuardService } from '../services/router-guard.service';
import { HelpDetailsComponent } from './help-details/help-details.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { ManageCategoryComponent } from './manage-category/manage-category.component';
import { ManageArticleComponent } from './manage-article/manage-article.component';
import { ManagePracticeComponent } from './manage-practice/manage-practice.component';

const routes: Routes = [{
  path:'',
  component:LayoutComponent,
  children:[
    {
      path:'',
      component:DashboardComponent,
      canActivate:[RouterGuardService]
    },
    {
      path:'dashboard',
      component:DashboardComponent,
      canActivate:[RouterGuardService]
    },
    {
      path:'users',
      component:ManageUsersComponent,
      canActivate:[RouterGuardService]
    },
    {
      path:'category',
      component:ManageCategoryComponent,
      canActivate:[RouterGuardService]
    },
    {
      path:'article',
      component:ManageArticleComponent,
      canActivate:[RouterGuardService]
    },
    {
      path:'help',
      component:HelpDetailsComponent,
      canActivate:[RouterGuardService]
    },
    {
      path:'practice',
      component:ManagePracticeComponent,
      canActivate:[RouterGuardService]
    },
    {
      path:'**',
      component:DashboardComponent,
      canActivate:[RouterGuardService]
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
