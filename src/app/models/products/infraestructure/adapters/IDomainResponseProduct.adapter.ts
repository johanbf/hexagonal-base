import {IApiResponseProduct} from "../models/products-api.model";
import {IDomainResponseProduct} from "../../domain/product.model";

export const IDomainResponseProductAdapter = (data : IApiResponseProduct) : IDomainResponseProduct => {
  return {
    id: data.id,
    title: data.title,
    description: data.description,
    category: data.category,
    brand: data.brand,
    images: data.images,
    price: data.price,
    discountPercentage: data.discountPercentage,
    rating: data.rating,
    stock: data.stock,
    thumbnail: data.thumbnail
  }
}
