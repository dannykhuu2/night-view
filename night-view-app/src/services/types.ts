export interface LikedImage extends ImageType {
    id: number,
}

export interface ImageType {
    title: string
    url: string
    copyright?: string
    explanation: string
    date: string
}

export interface AuthUserDetailed extends AuthUser{
    createdAt: string,
    updatedAt: string
}
export interface AuthUser {
    email: string
    password: string
}

export const API_GATEWAY_URL: string = "http://localhost:3333";