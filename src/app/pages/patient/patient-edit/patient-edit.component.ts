import { Component, OnInit } from '@angular/core';
import { MaterialModule } from 'src/app/material/material.module';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-patient-edit',
  standalone: true,
  templateUrl: './patient-edit.component.html',
  styleUrls: ['./patient-edit.component.css'],
  imports: [MaterialModule, ReactiveFormsModule, RouterLink],
})
export class PatientEditComponent {
  form: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      idPatient: new FormControl(0),
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      dni: new FormControl(''),
      address: new FormControl(''),
      phone: new FormControl(''),
      email: new FormControl(''),
    });
  }

  // para enviar los datos del form
  operate() {
    console.log('Form enviado.');
  }
}
