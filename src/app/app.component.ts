import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AuthService} from "./auth.service";
import {SalesService} from "./sales.service";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {CookieService} from "ngx-cookie-service";
import {log} from "@angular-devkit/build-angular/src/builders/ssr-dev-server";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  registerForm: FormGroup;
  loginForm: FormGroup;
  saleForm: FormGroup;
  constructor(private fb: FormBuilder,private _authService: AuthService, private _salesService: SalesService, private _cookieService: CookieService) {
    this.registerForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.saleForm = this.fb.group({
      brand: ['', Validators.required],
      model: ['', Validators.required],
      price: ['', Validators.required],
      year: ['', Validators.required],
      mileage: ['', Validators.required],
      garage: ['', Validators.required]
    });
  }

  onRegisterSubmit() {
    if (this.registerForm.valid) {
      this._authService.register(this.registerForm.value).subscribe({
        next: (val) => console.log(val)
      });
    }
  }

  onLoginSubmit() {
    if (this.loginForm.valid) {
      this._authService.login(this.loginForm.value).subscribe();
    }
  }

  onSaleSubmit() {
    if (this.saleForm.valid) {
      this._salesService.createSale(this.saleForm.value).subscribe();
    }
  }
}
