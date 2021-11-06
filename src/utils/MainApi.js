import { BASE_URL } from './utils';
import { EXT_URL } from './utils';

function _checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(res);
};

export const register = (values) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: values.name,
      password: values.password,
      email: values.email,
    })
  }).then(_checkResponse);
};

export const authorize = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email, password})
  }).then(_checkResponse);
}

export const getContent = () => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }).then(_checkResponse);
}

export const getSavedFilms = () => {
  return fetch(`${BASE_URL}/movies`, {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }).then(_checkResponse);
}

export const deleteCookies = () => {
  return fetch(`${BASE_URL}/logout`, {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(_checkResponse);
}

export const addMovieToFavorite = (movie) => {
  return fetch(`${BASE_URL}/movies`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      country: movie.country,
      director: movie.director,
      duration: movie.duration,
      year: movie.year,
      description: movie.description,
      image: `${EXT_URL}${movie.image.url}`,
      trailer: movie.trailerLink,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN,
      thumbnail: `${EXT_URL}${movie.image.formats.thumbnail.url}`,
      movieId: movie.id
    })
  })
    .then(_checkResponse);
}

export const deleteMovie = (id) => {
  return fetch(`${BASE_URL}/movies/${id}`, {
    method: 'DELETE',
    credentials: 'include',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }).then(_checkResponse);
}

export const updateUser = (data) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'PATCH',
    credentials: 'include',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: data.name,
      email: data.email
    })
  }).then(_checkResponse);
}
