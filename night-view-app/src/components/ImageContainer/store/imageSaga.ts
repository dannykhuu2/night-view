import { all, call, put, takeLatest } from 'redux-saga/effects';
import { fetchImages, fetchLikedImages, postUnlikeImageWithId } from '../../../services/imageService';
import * as actions from './imageSlice';

function* setLikedImagesSaga(): any {
    try {
        const res = yield call(fetchLikedImages);
        yield put(actions.setLikedImagesSuccessAction(res));
    } catch (error) {
        yield put(actions.setLikedImagesFailAction(error));
    }
}

function* setAllImagesSaga({ payload }: ReturnType<typeof actions.setAllImagesAction>) : any {
    try {
        const res = yield call(fetchImages, payload.count);
        const data = res.map((item: any) => {
            const { service_version, media_type, hdurl, ...temp} = item;
            return temp;
        })
        yield put(actions.setAllImagesSuccessAction(data));
    } catch (error) {
        yield put(actions.setAllImagesFailAction(error));
    }
}

function* removeLikedImageSaga({ payload }: ReturnType<typeof actions.removeLikedImageAction>) : any {
    try {
        yield call(postUnlikeImageWithId, payload.imageId);
        yield put(actions.removeLikedImageSuccessAction(payload.imageId));
    } catch (error) {
        yield put(actions.removeLikedImageFailAction(error));
    }
}

export function* imagesSaga() {
    yield all([takeLatest(actions.setLikedImagesAction.type, setLikedImagesSaga),
        takeLatest(actions.setAllImagesAction.type, setAllImagesSaga),
        takeLatest(actions.removeLikedImageAction.type, removeLikedImageSaga)]);
}