import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  FormArray,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  get Users() {
    return this.loginForm.get('users') as FormArray;
  }
  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: [
        '',
        [Validators.required, Validators.email, Validators.minLength(5)],
      ],
      password: new FormControl('', { validators: [Validators.required] }),
      // address:new FormControl(''),
      users: this.fb.array([]),
    });
    this.loginForm.valueChanges.subscribe((data) => {
      console.log(data.username);
    });
  }
  addLogin() {
    console.log(this.loginForm.value);
    this.loginForm.reset({
      username: '',
      password: '',
      // address:new FormControl(''),
      users: this.fb.array([]),
    });
  }
  addUsers(e: Event) {
    e.preventDefault();
    this.Users.push(
      this.fb.group({
        name: new FormControl('', { validators: [Validators.required] }),
        age: new FormControl(''),
      })
    );
  }
  removeList(i: number) {
    this.Users.removeAt(i);
  }
}
