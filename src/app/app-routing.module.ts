import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from './pages/admin/add-category/add-category.component';
import { AddQuestionComponent } from './pages/admin/add-question/add-question.component';
import { AddQuizComponent } from './pages/admin/add-quiz/add-quiz.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { UpdateCategoryComponent } from './pages/admin/update-category/update-category.component';
import { UpdateQuestionComponent } from './pages/admin/update-question/update-question.component';
import { UpdateQuizComponent } from './pages/admin/update-quiz/update-quiz.component';
import { ViewCategoriesComponent } from './pages/admin/view-categories/view-categories.component';
import { ViewQuestionsComponent } from './pages/admin/view-questions/view-questions.component';
import { ViewQuizzesComponent } from './pages/admin/view-quizzes/view-quizzes.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SignupComponent } from './pages/signup/signup.component';
import { InstructionsComponent } from './pages/user/instructions/instructions.component';
import { LoadQuizComponent } from './pages/user/load-quiz/load-quiz.component';
import { StartComponent } from './pages/user/start/start.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { AdminGuard } from './service/admin.guard';
import { NormalGuard } from './service/normal.guard';

const routes: Routes = [
  {path: "", component: HomeComponent, pathMatch: "full"},
  {path: "login", component: LoginComponent, pathMatch: "full"},
  {path: "signup", component: SignupComponent, pathMatch: "full"},
  {path: "admin", component: DashboardComponent,children: [{path: "profile", component: ProfileComponent}, {path: '', component:WelcomeComponent}, {path: 'categories', component: ViewCategoriesComponent}, {path: "category/:cid", component: UpdateCategoryComponent}, {path: "add-category", component: AddCategoryComponent}, {path: "quizzes", component: ViewQuizzesComponent}, {path: "add-quiz", component: AddQuizComponent}, {path: "quiz/:qId", component: UpdateQuizComponent}, {path: "questions/:qId/:title", component: ViewQuestionsComponent}, {path: "update-question/:quesId", component: UpdateQuestionComponent}, {path: "add-question/:qId/:title", component: AddQuestionComponent}], canActivate: [AdminGuard]},
  {path: "user", component: UserDashboardComponent, children: [{path: ":cid", component: LoadQuizComponent}, {path: "instructions/:qId", component: InstructionsComponent}], canActivate: [NormalGuard]},
  {path: "start/:qId", component: StartComponent, canActivate: [NormalGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
