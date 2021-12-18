export const BASE_URL = 'https://api.movies-explorer-ist.nomoredomains.xyz';
// export const BASE_URL = 'http://localhost:3000';
export const EXT_URL = 'https://api.nomoreparties.co';

export function findError(err) {
  if (err.status === 400) {
    return '400: Ошибка данных';
  } else if (err.status === 401) {
    return '401: Неверный логин или пароль';
  } else if (err.status === 403) {
    return '403: Ошибка авторизации';
  } else if (err.status === 404) {
    return '404: Не найдено';
  } else if (err.status === 409) {
    return '409: Пользователь с таким email уже существует';
  } else if (err.status === 500) {
    return '500: Ошибка сервера';
  } else {
    return '500: Ошибка сервера';
  }
}
