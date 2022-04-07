import {
  GET_IMAGE,
  GET_IMAGE_SUCCESS,
  GET_IMAGE_FAIL,
  ADD_SELECTED_IMAGE,
  REJECT_IMAGE
} from "./actionTypes";

const initialState = {
  selectedImages: [],
  rejectedImages: [],
  currentImage: {},
  loadingImage: false,
  error: {
    message: "",
  },
};

let initState = initialState;
if(localStorage.getItem('state')) {
  initState = JSON.parse(localStorage.getItem('state'));
}

const ImagesReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_IMAGE:
      state = { ...state, loadingImage: true };
      break;
    case GET_IMAGE_SUCCESS:
      state = { ...state, loadingImage: false, currentImage: action.data };
      const stringStateImg = JSON.stringify(state);
      localStorage.setItem('state', stringStateImg);
      break;
    case GET_IMAGE_FAIL:
      state = {
        ...state,
        error: {
          message: "Error",
        },
        loadingCategories: false,
      };
      break;
    case ADD_SELECTED_IMAGE:
      const findInAccepted = state.selectedImages.some(i => i.id === action.data.id);
      if(findInAccepted) 
        break;
      state = { ...state, selectedImages: [...state.selectedImages, action.data] };
      const stringState = JSON.stringify(state);
      localStorage.setItem('state', stringState);
      break;
    case REJECT_IMAGE:
      state = { ...state, rejectedImages: [...state.rejectedImages, action.data] };
      const stringStateRjct = JSON.stringify(state);
      localStorage.setItem('state', stringStateRjct);
      break;
    default:
      state = { ...state };
      break;
  }
  return state;
};

export default ImagesReducer;
