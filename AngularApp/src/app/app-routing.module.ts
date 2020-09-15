import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { EditpageComponent } from './components/editpage/editpage.component';

const routes: Routes = [
  {component:HomeComponent,path:'home'},
  {component:AboutComponent,path:'about'},
  {component: EditpageComponent, path:'edit'},
  {path: 'teacher', loadChildren: './teacher/teacher.module#TeacherModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
