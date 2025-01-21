import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../services/rest-api.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-creacion',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './creacion.component.html',
  styleUrl: './creacion.component.css'
})
export class CreacionComponent implements OnInit {
  citaForm: FormGroup;
  constructor(
    public restApi: RestApiService,
    private router: Router,
    public formBuilder: FormBuilder
  ) {
    this.citaForm = this.formBuilder.group({
      doctor: [''],
      lugarCita: [''],
      hora: [''],
      fecha: ['']
    });
  } ngOnInit(): void {
  }
  createCita() {
    this.restApi.createCita(this.citaForm.value).subscribe((data: {}) => {
      this.router.navigate(['/consulta'])
    })
  }
}