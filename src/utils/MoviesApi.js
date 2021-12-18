import { EXT_URL } from './utils';

function _checkResponse(res) {
  if (!res.ok) {
    return Promise.reject(`Error: ${res.status}`);
  }
  return res.json();
}

export const getFilms = () => {
  return fetch(`${EXT_URL}/beatfilm-movies`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  }).then(_checkResponse);
};
