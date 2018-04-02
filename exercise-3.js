var nama = 'Patrick';

if (nama == 'Patrick') {
  console.log('Halo Patrick, Pilih peranmu untuk memulai game!');
} else {
  console.log('Nama harus diisi!');
}

var peran = 'ksatria'

if (peran == 'ksatria') {
  console.log('Selamat datang di dunia Proxytia, Patrick');
  console.log('Kamu dapat menyerang dengan senjatamu!');
} else if (peran == 'tabib') {
  console.log('Selamat datang di dunia Proxytia, Patrick');
  console.log('Halo Tabib Patrick, kamu akan membantu temanmu yang terluka');
} else if (peran == 'penyihir') {
  console.log('Selamat datang di dunia Proxytia, Patrick');
  console.log('Halo Penyihir Patrick, ciptakan keajaiban yang membantu kemenanganmu!');
}
