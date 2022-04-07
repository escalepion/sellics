import {
  GET_IMAGE,
  GET_IMAGE_SUCCESS,
  GET_IMAGE_FAIL,
  ADD_SELECTED_IMAGE,
  REJECT_IMAGE,
} from "./actionTypes";

export const getImage = () => {
  return {
    type: GET_IMAGE,
  };
};

export const getImageSuccess = (data) => {
  return {
    type: GET_IMAGE_SUCCESS,
    data
  };
};

export const getImageFail = (error) => {
  return {
    type: GET_IMAGE_FAIL,
    payload: error,
  };
};

export const addSelectedImage = (image) => {
  return {
    type: ADD_SELECTED_IMAGE,
    data: image
  };
}

export const rejectImage = (image) => {
  return {
    type: REJECT_IMAGE,
    data: image
  };
}

