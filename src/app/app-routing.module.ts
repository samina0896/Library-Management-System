import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { HomeComponent } from './home/home.component';
import { RestComponent } from './rest/rest.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AdminComponent } from './admin/admin.component';
import { AddBookComponent } from './add-book/add-book.component';
import {  DeleteBookComponent} from './delete-book/delete-book.component';

const routes: Routes = [
  { path: '', component: LoginFormComponent },
  { path: 'home', component: HomeComponent },
  { path: 'rest', component: RestComponent },
  { path: 'contactUs', component: ContactUsComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'addBook', component: AddBookComponent },
  { path: 'deleteBook', component: DeleteBookComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [LoginFormComponent, HomeComponent, RestComponent, ContactUsComponent, AdminComponent, AddBookComponent, DeleteBookComponent]