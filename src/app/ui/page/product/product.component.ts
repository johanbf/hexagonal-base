import {Component, inject, OnInit, signal} from '@angular/core';
import {ProductUserCaseService} from "../../../models/products/application/useCase/product-user-case.service";
import {IDomainResponseAllProduct} from "../../../models/products/domain/product.model";
import {finalize} from "rxjs";
import {ContainerComponent} from "../../shared/component/container/container.component";
import {TableModule} from "primeng/table";
import {ButtonModule} from "primeng/button";
import {RouterLink} from "@angular/router";
import {PRODUCT} from "../../shared/constants/routes.constants";
import {CreateProductComponent} from "./create-product/create-product.component";

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    ContainerComponent,
    TableModule,
    ButtonModule,
    RouterLink,
    CreateProductComponent
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit{

  private _productUseCaseService = inject(ProductUserCaseService)

  public produts = signal<IDomainResponseAllProduct>({
    products: [],
    total: 0,
    skip: 0,
    limit: 0
  })

  public showeSpiner = signal<boolean>(true)

  public showForm = signal<boolean>(false)

  ruta = {
    create : `/${PRODUCT.CREATE}`
  }

  ngOnInit() {
    this._loadAllProduct()
    this._productUseCaseService.product$().subscribe({
      next: res => {
        console.log(res)
        this.produts.update( value => {
          const products = [...value.products, res]

          return {products, limit: value.limit, skip: value.skip, total: value.total}
        })
        console.log(this.produts())
      }
    })
  }

  private _loadAllProduct(): void {
    this._productUseCaseService.getAllProduct()
      .pipe(finalize(() => (this.showeSpiner.set(false))))
      .subscribe({
        next: (response) => {
          console.log(response)
          localStorage.setItem('productos',JSON.stringify(response.products))
          this.produts.set(response)
        }
      })
  }

  protected readonly PRODUCT = PRODUCT;
}
