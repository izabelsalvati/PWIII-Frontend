import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaPlanoComponent } from './lista-plano/lista-plano.component';
import { NovoPlanoComponent } from './novo-plano/novo-plano.component';

const routes: Routes = [
  { path: "listagem", component: ListaPlanoComponent},
  { path: 'novo', component: NovoPlanoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
