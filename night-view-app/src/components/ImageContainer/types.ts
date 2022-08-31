export interface LikedImageType extends ImageType {
    id: number
}

export interface ImageType {
    title: string
    url: string
    copyright?: string
    explanation: string
    date: string
}