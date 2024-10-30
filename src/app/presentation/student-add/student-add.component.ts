import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-student-add',
  standalone: true,
  imports: [ReactiveFormsModule,NgIf],
  templateUrl: './student-add.component.html',
  styleUrl: './student-add.component.scss'
})
  export class StudentAddComponent implements OnInit {
    formStudent!: FormGroup
  
    ngOnInit(): void {
      this.formStudent = new FormGroup({
        birthday: new FormControl('', Validators.required),
        firstName: new FormControl('', [Validators.required, Validators.minLength(10)]),
        lastName: new FormControl('', Validators.required),
        phoneNumber: new FormControl('', Validators.required),
        urlPicture: new FormControl('', Validators.required),
        gender: new FormControl('', Validators.required),
        
        matricule: new FormControl('', Validators.required),
        phoneNumberFather: new FormControl('', Validators.required)
      })
    }
  
    isInvalidInput(field: AbstractControl) {
      return field.invalid && (field.touched || field.dirty)
    }
  
    saveData() {}
  }

