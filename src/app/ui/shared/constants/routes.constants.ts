export enum PATH {
  AUTH = 'auth',
  PRODUCT = 'product'
}

export enum AUTHENTICATION {
  LOGIN = PATH.AUTH + '/login'
}

export enum PRODUCT {
  HOME = PATH.PRODUCT,
  CREATE = PATH.PRODUCT+'/crear'
}
