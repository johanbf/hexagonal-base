import {Component, inject, OnInit, signal} from '@angular/core';
import {AuthUseCaseService} from "../../../../models/auth/application/useCase/auth-use-case.service";
import {ContainerComponent} from "../container/container.component";
import {ToolbarModule} from "primeng/toolbar";
import {AvatarModule} from "primeng/avatar";
import {MenuItem, SharedModule} from "primeng/api";
import {IDomainResponseAuth} from "../../../../models/auth/domain/auth.model";
import {Router, RouterLink} from "@angular/router";
import {TieredMenuModule} from "primeng/tieredmenu";
import {ButtonModule} from "primeng/button";
import {AUTHENTICATION, PRODUCT} from "../../constants/routes.constants";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    ContainerComponent,
    ToolbarModule,
    AvatarModule,
    SharedModule,
    RouterLink,
    TieredMenuModule,
    ButtonModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{

  userAuth = signal<IDomainResponseAuth>({
    id: 0,
    firstName: '',
    username: '',
    gender: '',
    lastName: '',
    email: '',
    token: '',
    image: ''
  });

  items = signal<MenuItem[]>([])

  rutas = {
    product: PRODUCT.HOME
  }

  private _authUseCaseService = inject(AuthUseCaseService);
  private route = inject(Router)

  ngOnInit() {

    this.items.set([
      {
        label: 'Cerrar Sesion',
        icon: 'pi pi-search',
        command: () => {
          localStorage.clear()
          this._authUseCaseService.loggedIn(false)
          this.route.navigateByUrl(AUTHENTICATION.LOGIN)
        }
      },
    ])

    this._authUseCaseService.loggedIn$().subscribe({
      next: res => {
       if(res){
         console.log(res)
         this.getUser()
       }
      }
    })

  }

  getUser(){
    this._authUseCaseService.getUser().subscribe({
      next: (res: IDomainResponseAuth) => {
        console.log(res)
        this.userAuth.set(res)
      }
    })
  }

}
