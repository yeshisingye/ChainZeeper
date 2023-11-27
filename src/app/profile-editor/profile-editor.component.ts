import { JsonPipe, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css'],
  imports: [NgFor, ReactiveFormsModule, JsonPipe],
})
export class ProfileEditorComponent {
  profileForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['',Validators.required],
    address: this.formBuilder.group({
      Village: ['',Validators.required],
      Gewog: ['',Validators.required],
      Dzongkhag: ['',Validators.required],
    }),
    NickName: this.formBuilder.array([this.formBuilder.control('')]),
  });

  get NickName() {
    return this.profileForm.get('NickName') as FormArray;
  }

  constructor(private formBuilder: FormBuilder) {}

  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'Yeshi',
      address: {
        Village: 'pangna',
      },
    });
  }

  addNickName() {
    this.NickName.push(this.formBuilder.control(''));
  }

  onSubmit() {
    console.warn(this.profileForm.value, alert("Successful"));

  }
}
