import {Component, EventEmitter, inject, OnInit, Output} from '@angular/core';
import {InputCustomComponent} from "../../../shared/component/input-custom/input-custom.component";
import {ButtonModule} from "primeng/button";
import {RouterLink} from "@angular/router";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {ProductUserCaseService} from "../../../../models/products/application/useCase/product-user-case.service";

@Component({
  selector: 'app-create-product',
  standalone: true,
  imports: [
    InputCustomComponent,
    ButtonModule,
    RouterLink,
    ReactiveFormsModule
  ],
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.css'
})
export class CreateProductComponent implements OnInit{

  @Output() cancel = new EventEmitter<boolean>();

  productForm! : FormGroup

  private _fb = inject(FormBuilder)
  private _productUseCaseService = inject(ProductUserCaseService)

  ngOnInit() {
    this.productForm = this._fb.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      price: ['', [Validators.required]],
      discountPercentage: ['', [Validators.required]],
      rating: ['', [Validators.required]],
      stock: ['', [Validators.required]],
      brand: ['', [Validators.required]],
      category: ['', [Validators.required]],
      thumbnail: ['', [Validators.required]]
    })
  }

  onSubmit() {
    console.log(this.productForm.value)
    this._productUseCaseService.saveProduct(this.productForm.value).subscribe({
      next: (res) => {
        this._productUseCaseService.product(res)
        this.productForm.reset()
      }
    })
  }

  cancelForm(){
    this.cancel.emit(true)
  }
}
