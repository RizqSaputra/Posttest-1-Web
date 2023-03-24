function submitForm() {
    var nama = document.getElementById('name').value;
    var hari = document.getElementById('hari').value;
    var email = document.getElementById('inputemail').value;
    var nomor = document.getElementById('nomor').value;
    var keluhan = document.getElementById('ikeluhan').value;
    var radios = document.getElementsByName("gender");
    var gender = "";

    for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
        gender = radios[i].value;
        break;
    }
    }

    var kayu = [];
    var checkboxes = document.querySelectorAll('input[type=checkbox]:checked');

    for (var i = 0; i < checkboxes.length; i++) {
    kayu.push(checkboxes[i].value);
    }

    sessionStorage.setItem('dataKeluhan', JSON.stringify({
    nama: nama,
    hari: hari,
    email: email,
    nomor: nomor,
    keluhan: keluhan,
    kayu : kayu,
    gender: gender
    }));

    alert("Keluhan anda berhasil terkirim");
    window.location.href = "riwayat.html"
}

  document.getElementById('keluhanform').addEventListener('submit', function(event) {
    event.preventDefault(); // mencegah pengiriman form
    submitForm();
  });
