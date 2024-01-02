const daftarBarang = [
  { id: '001', nama: 'A', harga: 10000 },
  { id: '002', nama: 'B', harga: 20000 },
  { id: '003', nama: 'C', harga: 30000 },
];
function showDaftarBarang() {
  const barangTable = document.getElementById('barangTable');
  daftarBarang.forEach((barang, index) => {
    const row = barangTable.insertRow(index + 1);
    const idCell = row.insertCell(0);
    const namaCell = row.insertCell(1);
    const hargaCell = row.insertCell(2);

    idCell.textContent = barang.id;
    namaCell.textContent = barang.nama;
    hargaCell.textContent = barang.harga;
  });
}

function tambahTransaksi(event) {
  event.preventDefault();

  const idInput = document.getElementById('idInput');
  const quantityInput = document.getElementById('quantityInput');

  const pilihBarang = daftarBarang.find((barang) => barang.id === idInput.value);

  if (!pilihBarang) {
    window.alert('ID barang tidak valid atau tidak ada pada daftar barang');
    return;
  }

  const jumlah = parseInt(quantityInput.value);
  const totalHarga = pilihBarang.harga * jumlah;

  const bayar = window.prompt('Total yang harus dibayar: ' + totalHarga + '\n\n' + 'Masukkan jumlah uang yang akan dibayarkan:');

  if (bayar === null || bayar === '') {
    alert('Pembayaran dibatalkan');
    return;
  }
  
}
