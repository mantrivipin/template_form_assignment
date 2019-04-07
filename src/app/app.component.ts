import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('userDetail') userForm: NgForm;
  subscribeValue: string = 'Basic';
  user = {
    email: '',
    password: '',
    subscription: ''
  };
  formSubmitted: boolean = false;
  title = 'template-form-assignment';

  onSubmit() {
    console.log(this.userForm);
    this.formSubmitted = true;
    this.user.email = this.userForm.value.email;
    this.user.subscription = this.userForm.value.subscription;
    this.user.password = this.userForm.value.password;
    this.userForm.reset({
      password: '',
      email: '',
      subscription: 'Basic'
    });
  }
}
