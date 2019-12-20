export interface User {
    id: number,
    name: string,
    email: string,
    website: string,

    albums?:Album[]
}

export interface Album{
    userId: number,
    id: number,
    title: string,
    photos?:Photo[]
}

export interface Photo{
    albumId: number,
    id: number,
    title:string,
    url: string,
    thumbnailUrl: string
}

export interface AppState{
    users: User[]
}

export interface IReactSelectOption {
    label: string ;
    value: number;
  }