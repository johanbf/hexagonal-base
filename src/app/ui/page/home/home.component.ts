import { Component } from '@angular/core';
import {ContainerComponent} from "../../shared/component/container/container.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ContainerComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
