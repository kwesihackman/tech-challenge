export interface IUser {
    id: number,
    name: string,
    email: string,
    website: string,

    albums?:IAlbum[]
}

export interface IAlbum{
    userId: number,
    id: number,
    title: string,
    photos?:IPhoto[]
}

export interface IPhoto{
    albumId: number,
    id: number,
    title:string,
    url: string,
    thumbnailUrl: string
}

export interface AppState{
    users: IUser[]
}

export interface IReactSelectOption {
    label: string ;
    value: number;
  }