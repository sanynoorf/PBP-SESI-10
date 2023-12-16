const { response } = require("express");

const postData = {
    nip: '2022012',
    nama: 'Mimin',
    gender: 'P',
    prodi: 'TI',
    alamat: 'Cindadu'
};

fetch('http://localhost:3000/dosen', {  
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(postData)
})
.then(response => response.text())
.then(data => console.log(data))
.catch(error => console.error('Error', error));