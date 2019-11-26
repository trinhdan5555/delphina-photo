import * as types from './actionTypes';
import { homePagePhotoResponse } from '../data/homePagePhoto';
import { servicesPagePhotoResponse } from '../data/servicesPagePhoto';

const url = () => 'https://api.cloudinary.com/v1_1/trinhdan555/resources/image?resource_type=testtest';

const getHeaders = () => {
  const headers =  new Headers();
  headers.set('Content-type', 'application/json');
  headers.set('Access-Control-Allow-Origin', '*');
  return headers;
};

export function receiveHomePagePhotos(json) {
  json.resources.map(photo => {
    if (photo.url) photo.src = photo.url;
  });
  return {type: types.GET_HOME_PAGE_PHOTO_SUCCESS, photo: json.resources};
}

export function receiveServicesPagePhotos(json) {
  json.resources.map(photo => {
    if (photo.url) photo.src = photo.url;
  });
  return {type: types.GET_SERVICES_PAGE_PHOTO_SUCCESS, photo: json.resources};
}

export function getHomePagePhotos() {
  return dispatch => {
    return fetch(url(), {
      method: 'GET',
      mode: 'no-cors',
      credentials: 'include',
      // headers: getHeaders()
    })
      .then(response => response.text())
      .then(json1 => dispatch(receiveHomePagePhotos(homePagePhotoResponse)));
  };
}

export function getServicesPagePhotos() {
  return dispatch => {
    return fetch(url(), {
      method: 'GET',
      mode: 'no-cors',
      credentials: 'include',
      headers: getHeaders()
    })
      .then(response => response.text())
      .then(json1 => dispatch(receiveServicesPagePhotos(servicesPagePhotoResponse)));
  };
}