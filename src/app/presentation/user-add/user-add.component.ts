import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './user-add.component.html',
  styleUrl: './user-add.component.scss'
})
export class AddUserComponent implements OnInit {
  formUser!: FormGroup
  ngOnInit(): void {
    this.formUser = new FormGroup({
      pseudo: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    })
  }
  isInvalidInput(field: AbstractControl) {
    return field.invalid && (field.touched || field.dirty)
  }
}









