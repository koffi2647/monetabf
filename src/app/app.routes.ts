import { Routes } from '@angular/router';
import { LoginComponent } from './presentation/login/login.component';
import { ReportComponent } from './presentation/report/report.component';
import { StudentAddComponent } from './presentation/student-add/student-add.component';
import { StudentComponent } from './presentation/student/student.component';
import { StudentUpdateComponent } from './presentation/student-update/student-update.component';
import { TeacherComponent } from './presentation/teacher/teacher.component';
import { TeacherAddComponent } from './presentation/teacher-add/teacher-add.component';
import { UserComponent } from './presentation/user/user.component';
import { UserUpdateComponent } from './presentation/user-update/user-update.component';
import { DashbordComponent } from './presentation/dashbord/dashbord.component';
import { Component } from '@angular/core';
import { AddUserComponent } from './presentation/user-add/user-add.component';
export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'report', component: ReportComponent},
  { path: 'student', component: StudentComponent},
  { path: 'student_add', component: StudentAddComponent},
  { path: 'student_update', component: StudentUpdateComponent},
  { path: 'teacher', component: TeacherComponent},
  { path: 'teacher_add', component: TeacherAddComponent},
  { path: 'user', component: UserComponent},
  { path: 'user_update', component: UserUpdateComponent},
  { path: 'dashboard', component: DashbordComponent},
  { path:  'add-user', component: AddUserComponent}  
];
