import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client/client.component';
import { ClientsFormComponent } from './clients-form/clients-form.component';

const routes: Routes = [
{ path: 'clientes', component: ClientComponent },
{ path: 'nuevo', component: ClientsFormComponent },
{ path: 'editar/:id', component: ClientsFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }
