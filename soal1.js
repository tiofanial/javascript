const prompt = require('prompt-sync')({sigint:true});

const input = prompt('Masukkan bilangan genap: ');
const x = parseFloat(input);

// Pengecekan kondisi
  if (isNaN(x)) {
    console.log('Error: Input bukan bilangan');
  } else if (x < 0) {
    console.log('Error: Tidak bisa input bilangan negatif');
  } else if (x % 2 !== 0) {
    console.log('Error: Tidak bisa input bilangan ganjil');
  } else {
    // Menghitung akar pangkat 2
    const akarPangkat2 = Math.sqrt(x);
    console.log(`Akar pangkat 2 dari ${x} adalah: ${akarPangkat2}`);
  }