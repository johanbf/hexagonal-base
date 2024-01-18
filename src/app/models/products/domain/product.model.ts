export interface IDomainResponseProduct {
  id : number,
  title: string,
  description: string,
  price: string,
  discountPercentage: string,
  rating: string,
  stock: string,
  brand: string,
  category: string,
  thumbnail: string,
  images: string[]
}

export interface IDomainResponseAllProduct {
  products : IDomainResponseProduct[],
  total: number,
  skip: number,
  limit: number
}
