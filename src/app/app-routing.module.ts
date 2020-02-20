import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {HomeComponent} from "./components/home/home.component";
import {ComputerDetailsComponent} from "./components/computer-details/computer-details.component";
import {AddComputerComponent} from "./components/add-computer/add-computer.component";
import {EditComputerComponent} from "./components/edit-computer/edit-computer.component";


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  {path: 'ajout', component: AddComputerComponent},
  { path: 'edit/:id', component: EditComputerComponent},
  { path: 'computer/:id', component: ComputerDetailsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
