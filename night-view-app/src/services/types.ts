export interface LikedImage {
    title: string
    url: string
    copyright: string
    explanation: string
    hdurl: string
}

export interface AuthUser {
    email: string
    password: string
}

export const API_GATEWAY_URL: string = "http://localhost:3333";