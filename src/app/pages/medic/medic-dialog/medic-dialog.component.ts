import { NgIf } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';
import { switchMap } from 'rxjs';
import { MaterialModule } from 'src/app/material/material.module';
import { Medic } from 'src/app/models/medic';
import { MedicService } from 'src/app/services/medic.service';

@Component({
  selector: 'app-medic-dialog',
  standalone: true,
  templateUrl: './medic-dialog.component.html',
  styleUrls: ['./medic-dialog.component.css'],
  imports: [MaterialModule, FormsModule, NgIf],
})
export class MedicDialogComponent implements OnInit {
  medic: Medic;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: Medic, // recepeción de la data del padre mediante ese token
    private _dialogRef: MatDialogRef<MedicDialogComponent>, // tiene la ref del mat-dialog para manipularlo
    private medicService: MedicService
  ) {}

  ngOnInit(): void {
    this.medic = { ...this.data };
  }

  operate() {
    if (this.medic != null && this.medic.idMedic > 0) {
      // UPDATE
      this.medicService
        .update(this.medic.idMedic, this.medic)
        .pipe(switchMap(() => this.medicService.findAll()))
        .subscribe((data) => {
          this.medicService.setmedicChange(data);
          this.medicService.setMessageChange('UPDATED!');
        });
    } else {
      // INSERT
      this.medicService
        .save(this.medic)
        .pipe(switchMap(() => this.medicService.findAll()))
        .subscribe((data) => {
          this.medicService.setmedicChange(data);
          this.medicService.setMessageChange('CREATED!');
        });
    }

    this.close();
  }

  close() {
    this._dialogRef.close();
  }
}
