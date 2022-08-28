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
        setLikedImagesAction: (_state, { payload }: PayloadAction<{userId: number}>) => {},
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
        }
        // removeLikedImage: (state, { payload }: PayloadAction<number>) => {
        //     state.filter(image => image.id !== payload)
        // },
        // addLikedImage: (state, { payload }: PayloadAction<ImageType[]>) => {
        //     [...state, payload]
        // } 
    },
    extraReducers: {}
})

export const { setLikedImagesAction, setLikedImagesSuccessAction, setLikedImagesFailAction,
    setAllImagesAction, setAllImagesSuccessAction, setAllImagesFailAction } = slice.actions;
export default slice.reducer;