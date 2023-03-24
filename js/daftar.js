
let users = JSON.parse(localStorage.getItem('users')) || [];

function daftar(){
    const username = document.getElementById('nama').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('pass').value;

    var passwordLength = password.length;
    var userExists = users.some(function(user) {
        return user.username === username;
      });
    var emailExists = users.some(function(user) {
        return user.email === email;
      });

    if (userExists) {
        alert('Nama pengguna sudah digunakan.');
    } else if (emailExists){
        alert('alamat email sudah digunakan.');
    } else if (passwordLength <= 6){
        alert('Password harus lebih dari 6 karakter.');
    } else {
    users.push({ username: username, email: email, password: password });
    alert('Pendaftaran berhasil!');
    localStorage.setItem('users', JSON.stringify(users));
    window.location.href = "login.html"
    }
};


document.getElementById('daftarform').addEventListener('submit', function(event) {
    event.preventDefault(); // mencegah pengiriman form
    daftar();
  });