import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../services/rest-api.service';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-consulta',
  standalone: true,
  imports: [NgIf, NgFor, RouterLink],
  templateUrl: './consulta.component.html',
  styleUrl: './consulta.component.css'
})
export class ConsultaComponent implements OnInit {
  citas: any = [];
  constructor(
    public restApi: RestApiService
  ) { }
  ngOnInit(): void {
    this.getCitas()
  }
  //Obtener la lista de empleados:
  getCitas() {
    return this.restApi.getCitas().subscribe((data: {}) => {
      this.citas = data;
    })
  }
}
