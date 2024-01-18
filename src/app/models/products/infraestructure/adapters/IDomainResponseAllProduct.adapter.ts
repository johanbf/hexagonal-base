import {IDomainResponseAllProduct} from "../../domain/product.model";
import {IApiResponseAllProduct} from "../models/products-api.model";

export const IDomainResponseAllProductAdapter = (data: IApiResponseAllProduct) : IDomainResponseAllProduct => {
  return {
    products : data.products,
    limit: data.limit,
    skip: data.skip,
    total: data.total
  }
}
