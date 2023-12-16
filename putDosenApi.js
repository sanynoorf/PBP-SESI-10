const { response } = require("express");

const dosenNim ='2022012';
const updateData = {
    nama: 'Kiboy',
    gender: 'L',
    prodi: 'SI',
    alamat: 'Cibaraja'
};

fetch(`http://localhost:3000/dosen/${dosenNim}`, {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(updateData)
}).then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error', error));