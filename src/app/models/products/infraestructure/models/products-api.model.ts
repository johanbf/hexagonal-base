export interface IApiResponseProduct {
  readonly id : number,
  readonly title: string,
  readonly description: string,
  readonly price: string,
  readonly discountPercentage: string,
  readonly rating: string,
  readonly stock: string,
  readonly brand: string,
  readonly category: string,
  readonly thumbnail: string,
  readonly images: string[]
}

export interface IApiResponseAllProduct {
  products : IApiResponseProduct[],
  readonly total: number,
  readonly skip: number,
  readonly limit: number
}
