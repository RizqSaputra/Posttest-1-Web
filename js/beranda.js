const data_ni = localStorage.getItem('users');
const user_ni = JSON.parse(data_ni);
const email_ni = JSON.parse(data_ni);
const namaTampil = document.getElementById('nama')
const emailTampil = document.getElementById('email')

namaTampil.innerHTML = user_ni[0]["username"];
emailTampil.innerHTML = user_ni[0]["email"];
