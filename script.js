// Ambil elemen input dan tempat tampil ucapan
const inputNama = document.getElementById('nama');
const hasilUcapan = document.getElementById('hasilUcapan');

// Fungsi untuk load data ucapan dari file JSON
async function loadUcapan() {
  const response = await fetch('ucapan.json');
  const data = await response.json();
  return data;
}

inputNama.addEventListener('input', async function() {
  const nama = inputNama.value.trim();
  if (nama.length === 0) {
    hasilUcapan.textContent = '';
    return;
  }

  const ucapanData = await loadUcapan();

  if (ucapanData[nama]) {
    hasilUcapan.textContent = ucapanData[nama];
  } else {
    hasilUcapan.textContent = 'Maaf, ucapan untuk ' + nama + ' belum tersedia.';
  }
});
