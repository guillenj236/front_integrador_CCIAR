import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilComponent } from './perfil/perfil.component';
import { CadastroAdminComponent } from './cadastro-admin/cadastro-admin.component';

const routes: Routes = [
  {path: "admin", component: PerfilComponent},
  {path: "admin/cadastro", component: CadastroAdminComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
