import { takeLatest, put, select, call } from "redux-saga/effects";
import { GET_IMAGE } from "./actionTypes";
import { getImage as getImageApi } from 'api/getImage';
import { findRejectedItem } from "lib/helpers/findRejectedItem";

import {
  getImageFail,
  getImageSuccess,
  getImage,
} from "./actions";

export const getImages = (state) => state.ImagesReducer

function* onGetImage() {
  try {
    const callApi = yield call(getImageApi);
    const response = callApi.data;
    const images = yield select(getImages);
    const rejectedImages = images?.rejectedImages || [];
    const isRejected = findRejectedItem(rejectedImages, response.id);
    if(isRejected) {
      yield put(getImage());
    }else{
      yield put(getImageSuccess({ id: response.id, url: response?.urls?.small }));
    }
  } catch (error) {
    yield put(getImageFail(error.response));
  }
}

function* CartSaga() {
  yield takeLatest(GET_IMAGE, onGetImage);
}

export default CartSaga;