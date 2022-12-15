
export const BASE_URL = 'https://auth.nomoreparties.co';

function checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
};


export const register = (email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
        email: email,
        password: password,
    })
  })
  .then(checkResponse);
};