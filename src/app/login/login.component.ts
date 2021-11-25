import { Component, ComponentFactoryResolver, OnInit, ViewEncapsulation } from '@angular/core';
import { BackendApiService } from '../services/backend-api.service'
import { FormBuilder, FormGroup, RequiredValidator, Validators, } from '@angular/forms';
import { NgxUiLoaderService } from "ngx-ui-loader";
import { Router } from "@angular/router"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  form: FormGroup | any;
  constructor(readonly fb: FormBuilder, private backendService: BackendApiService, private router: Router) { }

  ngOnInit() {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }

  submit() {
    this.backendService.login(this.form.value).subscribe(data => {
      console.log(data)
      if (data.status) {
        localStorage.setItem('isUserLoggedIn', 'true')
        localStorage.setItem('userLoggedData', JSON.stringify(data.data))
        this.router.navigate(['/dashboard'])
      }
      console.log(data.message)
    })
  }

}
