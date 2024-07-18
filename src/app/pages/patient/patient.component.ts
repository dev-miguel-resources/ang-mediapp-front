import { Component, OnInit, ViewChild } from '@angular/core';
import { PatientService } from 'src/app/services/patient.service';
import { MatTableDataSource } from '@angular/material/table';
import { Patient } from 'src/app/models/patient';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MaterialModule } from 'src/app/material/material.module';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-patient',
  standalone: true,
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css'],
  imports: [MaterialModule, RouterLink, RouterOutlet],
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

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private patientService: PatientService) {}

  ngOnInit(): void {
    this.patientService.findAll().subscribe((data) => {
      console.log(data);
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  applyFilter(e: Event) {
    const inputElement = e.target as HTMLInputElement;
    this.dataSource.filter = inputElement.value.trim();
  }
}
