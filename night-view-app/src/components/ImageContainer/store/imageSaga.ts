import { all, call, put, takeLatest } from 'redux-saga/effects';
import { fetchImages, fetchLikedImages } from '../../../services/imageService';
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
            const { service_version, media_type, ...temp} = item;
            return temp;
        })
        yield put(actions.setAllImagesSuccessAction(data));
    } catch (error) {
        yield put(actions.setAllImagesFailAction(error));
    }
}

export function* imagesSaga() {
    yield all([takeLatest(actions.setLikedImagesAction.type, setLikedImagesSaga),
        takeLatest(actions.setAllImagesAction.type, setAllImagesSaga)]);
}