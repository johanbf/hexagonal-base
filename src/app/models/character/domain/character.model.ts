export interface IDomainResponseCharacter {
  info: IDomainResponseInfo
  results: IDomainResponseResult[]
}

export interface IDomainResponseInfo {
  count: number
  pages: number
  next: string
  prev: any
}

export interface IDomainResponseResult {
  id: number
  name: string
  status: string
  species: string
  type: string
  gender: string
  origin: IDomainResponseRuta
  location: IDomainResponseRuta
  image: string
  episode: string[]
  url: string
  created: string
}

export interface IDomainResponseRuta{
  name: string
  url: string
}
