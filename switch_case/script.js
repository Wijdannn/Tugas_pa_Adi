let belanja = parseInt(prompt("Masukan Total Belanja : "))
let diskon = 0;

document.write(`Anda belanja sebanyak : ${belanja} `)

switch(true){
  case belanja < 100000:
    document.write("Anda Tidak Dapat Diskon");
    break;

  case belanja >= 100000 && belanja < 200000:
    diskon = belanja * 10/100;
    document.write(`Anda Mendapatkan diskon sebanyak 10% dan total bayar menjadi ${belanja - diskon}`);
    break;

  case belanja >200000:
    diskon = belanja * 25/100;
    document.write(`Anda Mendapatkan diskon sebanyak 25% dan total bayar menjadi ${belanja - diskon}`)
    break;
}
