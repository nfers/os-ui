import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Os } from 'src/app/models/Ordem-Servico';
import { OrdemServicoService } from 'src/app/services/ordem-servico.service';

@Component({
  selector: 'app-ordem-servico-read',
  templateUrl: './ordem-servico-read.component.html',
  styleUrls: ['./ordem-servico-read.component.css']
})
export class OrdemServicoReadComponent implements  AfterViewInit {

  lista: Os[] = []

  displayedColumns: string[] = ['id','created_at','closed_on','priority','client','status','technique', 'action'];
  dataSource = new MatTableDataSource<Os>(this.lista);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private service : OrdemServicoService,
    private router : Router
    ) {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.findAll();
  }

  findAll(): void {
    this.service.findAll().subscribe((res) => {
      this.lista = res;
      this.dataSource = new MatTableDataSource<Os>(this.lista);
      this.dataSource.paginator = this.paginator;
    })
  }

  navigateToCreate():void {
    this.router.navigate(['ordem-servico/novo'])
  }
}
