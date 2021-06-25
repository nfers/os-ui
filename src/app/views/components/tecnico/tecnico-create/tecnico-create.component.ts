import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Tecnico } from 'src/app/models/Tecnico';
import { TecnicoService } from 'src/app/services/tecnico.service';

@Component({
  selector: 'app-tecnico-create',
  templateUrl: './tecnico-create.component.html',
  styleUrls: ['./tecnico-create.component.css']
})

export class TecnicoCreateComponent implements OnInit {

  tecnico: Tecnico = {
    id: '',
    name: 'Mariana',
    cpf: '952.662.440-89',
    phone: '(62) 993489642'
  };

  constructor(
    private router : Router, 
    private service : TecnicoService
  ) { }

  ngOnInit(): void {
  }

  cancel(): void {
    this.router.navigate(['tecnicos'])
  }

  create():void {
    this.service.create(this.tecnico).subscribe((res) => {
      this.router.navigate(['tecnicos'])
      console.log(res)
      this.service.message('Técnico Criado com Sucesso');
    })
  }
}
