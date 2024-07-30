import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
//import { PatientComponent } from './pages/patient/patient.component';
import { MedicComponent } from './pages/medic/medic.component';
//import { PatientEditComponent } from './pages/patient/patient-edit/patient-edit.component';
import { MaterialModule } from './material/material.module';
import { HttpClientModule } from '@angular/common/http';
//import { ExamEditComponent } from './pages/exam/exam-edit/exam-edit.component';
//import { ExamComponent } from './pages/exam/exam/exam.component';
//import { MedicDialogComponent } from './pages/medic/medic-dialog/medic-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    //ExamEditComponent,
    //ExamComponent,
    //MedicDialogComponent,
    //PatientComponent,
    //MedicComponent,
    //PatientEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
