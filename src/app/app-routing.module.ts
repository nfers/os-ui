import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteReadComponent } from './views/components/clientes/cliente-read/cliente-read.component';
import { HomeComponent } from './views/components/home/home.component';
import { OsReadComponent } from './views/components/ordensServico/os-read/os-read.component';
import { TecnicoCreateComponent } from './views/components/tecnico/tecnico-create/tecnico-create.component';
import { TecnicoReadComponent } from './views/components/tecnico/tecnico-read/tecnico-read.component';
import { TecnicoUpdateComponent } from './views/components/tecnico/tecnico-update/tecnico-update.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'tecnicos',
    component: TecnicoReadComponent
  },
  {
    path: 'tecnicos/novo',
    component: TecnicoCreateComponent
  },
  {
    path: 'tecnicos/alterar/:id',
    component: TecnicoUpdateComponent
  },
  {
    path: 'clientes',
    component: ClienteReadComponent
  },
  {
    path: 'ordem-servico',
    component: OsReadComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
