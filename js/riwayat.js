function riwayat(){
    const dataKeluhan = JSON.parse(sessionStorage.getItem('dataKeluhan'));

    document.getElementById('name').textContent = dataKeluhan.nama;
    document.getElementById('hari').textContent = dataKeluhan.hari;
    document.getElementById('isiemail').textContent = dataKeluhan.email;
    document.getElementById('keluhan').textContent = dataKeluhan.keluhan;
    document.getElementById('nomor').textContent = dataKeluhan.nomor;
    document.getElementById('kayu').textContent = dataKeluhan.kayu.join(', ');
    document.getElementById('gender').textContent = dataKeluhan.gender;
};

riwayat();