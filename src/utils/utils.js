export const BASE_URL = 'https://api.movies-explorer-ist.nomoredomains.monster';
export const EXT_URL = 'https://api.nomoreparties.co';

export function findError(err) {
  if (err.status === 400) {
    return 'Ошибка заполнения полей';
  } else if (err.status === 401) {
    return 'Неверный логин или пароль';
  } else if (err.status === 403) {
    return 'Ошибка авторизации';
  } else if (err.status === 404) {
    return 'Не найдено';
  } else if (err.status === 409) {
    return 'Пользователь с таким email уже существует';
  } else if (err.status === 500) {
    return 'Ошибка сервера';
  } else {
    return 'Ошибка сервера';
  }
}
