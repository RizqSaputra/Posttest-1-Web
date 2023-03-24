function login() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('pass').value;
    
    var usersString = localStorage.getItem('users');
    var users = JSON.parse(usersString);
    
    var isLoggedIn = false;
    
    for (var i = 0; i < users.length; i++) {
      if (users[i].email === email && users[i].password === password) {
        isLoggedIn = true;
        break;
      }
    }
    
    if (isLoggedIn) {
      alert('Login berhasil!');
        window.location.href = "beranda.html"
    } else {
      alert('Login gagal. Mohon periksa kembali email dan password Anda.');
    }
  }

  document.getElementById('loginform').addEventListener('submit', function(event) {
    event.preventDefault(); // mencegah pengiriman form
    login();
  });