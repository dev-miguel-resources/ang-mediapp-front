import { Component, OnInit } from '@angular/core';
import { PatientService } from 'src/app/services/patient.service';
import { MatTableDataSource } from '@angular/material/table';
import { Patient } from 'src/app/models/patient';
import { MaterialModule } from 'src/app/material/material.module';

@Component({
  selector: 'app-patient',
  standalone: true, // por explicar
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css'],
  imports: [MaterialModule], // por explicar
})
export class PatientComponent implements OnInit {
  dataSource: MatTableDataSource<Patient>;
  displayedColumns: string[] = [
    'id',
    'firstName',
    'lastName',
    'dni',
    'actions',
  ];

  constructor(private patientService: PatientService) {}

  ngOnInit(): void {
    this.patientService.findAll().subscribe((data) => {
      console.log(data);
      this.dataSource = new MatTableDataSource(data);
    });
  }
}
