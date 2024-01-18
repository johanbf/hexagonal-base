import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, map, Observable} from "rxjs";
import {environment} from "../../../../environment/environment";
import {IProductsApiService} from "../application/interface/product-api.interface";
import {IDomainResponseAllProductAdapter} from "./adapters/IDomainResponseAllProduct.adapter";
import {IDomainResponseAllProduct, IDomainResponseProduct} from "../domain/product.model";
import {IApiResponseAllProduct, IApiResponseProduct} from "./models/products-api.model";
import {IDomainResponseProductAdapter} from "./adapters/IDomainResponseProduct.adapter";

@Injectable()
export class ProductApiService implements IProductsApiService{

  initProduct: IDomainResponseProduct = {
    id: 0,
    title: '',
    description: '',
    category: '',
    brand: '',
    images: [],
    price: '',
    discountPercentage: '',
    rating: '',
    stock: '',
    thumbnail: ''
  }
  productItem: IDomainResponseProduct = this.initProduct
  productItem$ = new BehaviorSubject<IDomainResponseProduct>(this.initProduct)

  private _httpClient = inject(HttpClient);

  getAllProducts(): Observable<IDomainResponseAllProduct> {
    return this._httpClient.get<IApiResponseAllProduct>(environment.api+'/products').pipe(
      map((response) => {
        return IDomainResponseAllProductAdapter(response)
      })
    )
  }

  saveProducts(product: IDomainResponseProduct): Observable<IDomainResponseProduct> {
    return this._httpClient.post<IApiResponseProduct>(environment.api+'/products/add', product).pipe(
      map((response) => {
        return IDomainResponseProductAdapter(response)
      })
    )
  }

  product(value: IDomainResponseProduct) {
    this.productItem = value
    this.productItem$.next(this.productItem)
  }

  product$() : Observable<IDomainResponseProduct>{
    return this.productItem$.asObservable()
  }
}
