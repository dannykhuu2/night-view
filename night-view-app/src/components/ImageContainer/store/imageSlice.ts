import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ImageType, LikedImageType } from "../types";

export interface ImageAppState {
    allImages: {
        images: Array<ImageType>,
        error: any
    },
    likedImages: {
        likes: Array<LikedImageType>,
        error: any
    }
}

const initialState: ImageAppState = { 
    allImages: {
        images: [],
        error: null
    }, 
    likedImages: {
        likes: [],
        error: null
    }
}  

const slice = createSlice({
    name: 'images',
    initialState,
    reducers: {
        setLikedImagesAction: (_state) => {},
        setLikedImagesSuccessAction: (state, { payload }: PayloadAction<Array<LikedImageType>>) => {
            state.likedImages.likes = payload;
        },
        setLikedImagesFailAction: (state, { payload }: PayloadAction<any>) => {
            state.likedImages.error = payload;
        },
        setAllImagesAction: (state, { payload }: PayloadAction<{count: number}>) => {},
        setAllImagesSuccessAction: (state, { payload }: PayloadAction<Array<ImageType>>) => {
            state.allImages.images = payload;
        },
        setAllImagesFailAction: (state, { payload }: PayloadAction<any>) => {
            state.allImages.error = payload;
        },
        removeLikedImageAction: (_state, { payload }: PayloadAction<{imageId: number}>) => {},
        removeLikedImageSuccessAction: (state, { payload }: PayloadAction<number>) => {
            state.likedImages.likes = state.likedImages.likes.filter(image => image.id !== payload)
        },
        removeLikedImageFailAction: (state, { payload }: PayloadAction<any>) => {
            state.likedImages.error = payload;
        },
        // addLikedImage: (state, { payload }: PayloadAction<LikedImageType>) => {
        //     state.likedImages.likes = [...state.likedImages.likes, payload];
        // } 
    },
    extraReducers: {}
})

export const { setLikedImagesAction, setLikedImagesSuccessAction, setLikedImagesFailAction,
    setAllImagesAction, setAllImagesSuccessAction, setAllImagesFailAction, removeLikedImageAction,
    removeLikedImageSuccessAction, removeLikedImageFailAction } = slice.actions;
export default slice.reducer;