import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionComponent } from './question/question.component';
import { NameComponent } from './name/name.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path:'', redirectTo:'welcome',pathMatch:"full"},
  {path:"welcome", component:WelcomeComponent},
  {path:"name", component:NameComponent},
  {path:"question", component:QuestionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
