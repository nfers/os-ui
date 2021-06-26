import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tecnico } from 'src/app/models/Tecnico';
import { TecnicoService } from 'src/app/services/tecnico.service';

@Component({
  selector: 'app-tecnico-delete',
  templateUrl: './tecnico-delete.component.html',
  styleUrls: ['./tecnico-delete.component.css']
})
export class TecnicoDeleteComponent implements OnInit {

  id_tech = '';

  tecnico: Tecnico = {
    id: '',
    name: '',
    cpf: '',
    phone: ''
  };

  constructor(
    private router: Router,
    private service: TecnicoService, 
    private route: ActivatedRoute
  ) { }


  ngOnInit(): void {
    this.id_tech = this.route.snapshot.paramMap.get('id')!
    this.findById();
  }

  findById(): void {
    this.service.findById(this.id_tech).subscribe((res) => {
      this.tecnico = res;
    })
  }

  cancel(): void {
    this.router.navigate(['tecnicos'])
  }

  update(): void {
    this.service.update(this.tecnico).subscribe((res) => {
      this.router.navigate(['tecnicos'])
      this.service.message('Técnico Criado com Sucesso');
    }, err => {
      console.log(err)
      if (err.message !== '') {
        this.service.message(`Falha ao alterar os dados do Técnico: ${this.tecnico.name},
         mensagem: ${err.message}`)
      }
    })
  }
  
}

