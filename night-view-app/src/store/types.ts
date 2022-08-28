import { AuthAppState } from "../components/Auth/store/authSlice"
import { ImageAppState } from "../components/ImageContainer/store/imageSlice"

export interface AppState {
    images: ImageAppState,
    auth: AuthAppState
}