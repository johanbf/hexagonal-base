import {Component, inject, OnInit, signal} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from "./shared/component/header/header.component";
import {AuthUseCaseService} from "../models/auth/application/useCase/auth-use-case.service";
import {MenuItem} from "primeng/api";
import {ContainerComponent} from "./shared/component/container/container.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, ContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'hexagonal-base';
  authLogin = signal(false)

  private _authUseCaseService = inject(AuthUseCaseService)

  ngOnInit() {
    const token = JSON.parse(localStorage.getItem('token_access')!)
    if(token){
      this._authUseCaseService.loggedIn(true)
    }

    this._authUseCaseService.loggedIn$().subscribe(res => {
      console.log('res',res)
      this.authLogin.set(res)
    })
  }

}
