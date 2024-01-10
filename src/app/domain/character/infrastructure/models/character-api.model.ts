export interface IApiResponseCharacter {
  info: IApiResponseInfo
  results: IApiResponseResult[]
}

export interface IApiResponseInfo {
  count: number
  pages: number
  next: string
  prev: any
}

export interface IApiResponseResult {
  id: number
  name: string
  status: string
  species: string
  type: string
  gender: string
  origin: IApiResponseRuta
  location: IApiResponseRuta
  image: string
  episode: string[]
  url: string
  created: string
}

export interface IApiResponseRuta{
  name: string
  url: string
}
