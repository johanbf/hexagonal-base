import {Component, inject, OnInit, signal} from '@angular/core';
import {InputTextModule} from "primeng/inputtext";
import {ContainerComponent} from "../../../shared/component/container/container.component";
import {InputCustomComponent} from "../../../shared/component/input-custom/input-custom.component";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {JsonPipe} from "@angular/common";
import {ButtonModule} from "primeng/button";
import {AuthUseCaseService} from "../../../../models/auth/application/useCase/auth-use-case.service";
import {HttpErrorResponse} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    InputTextModule,
    ContainerComponent,
    InputCustomComponent,
    ReactiveFormsModule,
    JsonPipe,
    ButtonModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  contacForm! : FormGroup
  error = signal('')

  private _fb = inject(FormBuilder);
  private _authUseCaseService = inject(AuthUseCaseService)
  private _router = inject(Router)

  ngOnInit() {
    this.contacForm = this._fb.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  onSubmit(){
    this._authUseCaseService.logIn(this.contacForm.value.userName, this.contacForm.value.password)
      .subscribe({
        next: (response) => {
          localStorage.setItem('token_access', JSON.stringify(response.token))
          this._router.navigateByUrl('home')
          this._authUseCaseService.loggedIn(true)
        },
        error: (err: HttpErrorResponse) => {
          this.error.set(err.error.message)
        }
      })
  }
}
