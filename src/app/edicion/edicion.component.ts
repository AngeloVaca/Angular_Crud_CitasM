import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../services/rest-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-edicion',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edicion.component.html',
  styleUrl: './edicion.component.css'
})
export class EdicionComponent implements OnInit {
  id: any;
  citaForm: FormGroup;
  constructor(
    public restApi: RestApiService,
    public actRoute: ActivatedRoute,
    public router: Router,
    public formBuilder: FormBuilder
  ) {
    this.id = this.actRoute.snapshot.params['id'];
    this.citaForm = this.formBuilder.group({
      doctor: [''],
      lugarCita: [''],
      hora: [''],
      fecha: ['']
    });
  }
  ngOnInit(): void {
    this.restApi.getCita(this.id).subscribe((data: any) => {
      this.citaForm.setValue({
        doctor: data.doctor,
        lugarCita: data.lugarCita,
        hora: data.hora,
        fecha: data.fecha
      });
    })
  }
  // Actualiza los datos del cita:
  updateCita() {
    if (window.confirm('Esta seguro que desea actualizar?')) {
      this.restApi.updateCita(this.id, this.citaForm.value).subscribe(data => {
        this.router.navigate(['/consulta'])
      })
    }
  }
}