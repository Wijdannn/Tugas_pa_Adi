var poin = 0
alert(`Point Anda sekarang Adalah ${poin}`)
var soal1 = prompt("1. 5 x 12 : ")

if (soal1 == 60) {
  poin += 1;
  alert(`Jawaban Anda Benar Point Anda Sekarang ${poin}`);
  var soal2 = prompt("2. Ibu Kota Malaysia Adalah ");
  if (soal2 == "kuala lumpur" || soal2 == "Kuala Lumpur") {
    poin += 1;
    alert(`Jawaban Anda Benar Point Anda Sekarang ${poin}`);
    var soal3 = prompt("3. Kalau semut kecil, gajah?");
    if (soal3 == "Hewan" || soal3 == "hewan") {
      poin += 1;
      alert(`Jawaban Anda Benar Point Anda Sekarang ${poin}`);
      var soal4 = prompt("4. Pasar tempat orang?");
      if (soal4 == "Ramai" || soal4 == "ramai") {
        poin += 1;
        alert(`Jawaban Anda Benar Point Anda Sekarang ${poin}`);
        var soal5 = prompt("5. Benda apa yang harus diputar dulu baru bisa keluar? ");
        if (soal5 == "lipstick" || soal5 == "lipstik") {
          poin += 1;
          alert(`Jawaban Anda Benar Point Anda Sekarang ${poin}`);
        } else {
          poin += 0;
          alert(`Jawaban Anda Salah Point Anda Sekarang ${poin}`);
        }
      } else {
        poin += 0;
        alert(`Jawaban Anda Salah Point Anda Sekarang ${poin}`);
        var soal5 = prompt("5. Benda apa yang harus diputar dulu baru bisa keluar? ");
        if (soal5 == "lipstick" || soal5 == "lipstik") {
          poin += 1;
          alert(`Jawaban Anda Benar Point Anda Sekarang ${poin}`);

        } {
          poin += 0;
          alert(`Jawaban Anda Salah Point Anda Sekarang ${poin}`);
          var soal4 = prompt("4. Pasar tempat orang?");
          if (soal4 == "Ramai" || soal4 == "ramai") {
            poin += 1;
            alert(`Jawaban Anda Benar Point Anda Sekarang ${poin}`);
          }
        } {
          poin += 0;
          alert(`Jawaban Anda Salah Point Anda Sekarang ${poin}`);
          var soal3 = prompt("3. Kalau semut kecil, gajah?");
          if (soal3 == "Ramai" || soal3 == "ramai") {
            poin += 1;
            alert(`Jawaban Anda Benar Point Anda Sekarang ${poin}`);
          }
        }
      } {
        poin += 0;
        alert(`Jawaban Anda Salah Point Anda Sekarang ${poin}`);
        var soal2 = prompt("2. Ibu Kota Malaysia Adalah ");
        if (soal2 == "kuala lumpur" || soal2 == "Kuala Lumpur") {
          poin += 1;
          alert(`Jawaban Anda Benar Point Anda Sekarang ${poin}`);
        }
      }
    }
  }
}
