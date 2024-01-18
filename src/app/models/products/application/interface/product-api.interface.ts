import {Observable} from "rxjs";
import {IDomainResponseAllProduct, IDomainResponseProduct} from "../../domain/product.model";
import {IApiResponseProduct} from "../../infraestructure/models/products-api.model";

export interface IProductsApiService {
  getAllProducts() : Observable<IDomainResponseAllProduct>
  saveProducts(product: IDomainResponseProduct): Observable<IDomainResponseProduct>
  product(value: IDomainResponseProduct) : void
  product$() : Observable<IDomainResponseProduct>
}
