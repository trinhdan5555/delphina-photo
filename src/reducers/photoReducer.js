import {
  GET_HOME_PAGE_PHOTO_SUCCESS,
  GET_SERVICES_PAGE_PHOTO_SUCCESS
} from '../actions/actionTypes';

const initialState = {
  homePageImages: [],
  servicesPageImages: [],
};

export default function stuff(state = initialState, action) {
  switch (action.type) {
    case GET_HOME_PAGE_PHOTO_SUCCESS:
      return {
        ...initialState,
        homePageImages: action.photo,
      };
    case GET_SERVICES_PAGE_PHOTO_SUCCESS:
      return {
        ...initialState,
        servicesPageImages: action.photo,
      };
    default:
      return state;
  }
}