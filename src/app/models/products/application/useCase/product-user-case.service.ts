import {Inject, Injectable} from "@angular/core";
import {IProductsApiService} from "../interface/product-api.interface";
import {Observable} from "rxjs";
import {IDomainResponseAllProduct, IDomainResponseProduct} from "../../domain/product.model";
import {IApiResponseProduct} from "../../infraestructure/models/products-api.model";

@Injectable({providedIn: 'root'})
export class ProductUserCaseService {

  constructor(@Inject('IProductApiService') private _productApiService: IProductsApiService) {}
  getAllProduct() : Observable<IDomainResponseAllProduct> {
    return this._productApiService.getAllProducts()
  }

  saveProduct(data: IDomainResponseProduct) : Observable<IDomainResponseProduct> {
    return this._productApiService.saveProducts(data)
  }

  product(value: IDomainResponseProduct) {
    return this._productApiService.product(value)
  }

  product$() : Observable<IDomainResponseProduct>{
    return this._productApiService.product$()
  }

}
