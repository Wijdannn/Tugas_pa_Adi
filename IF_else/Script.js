var belanja = parseInt(prompt("Masukan Total Belanja : "))

document.writeln(`Anda Belanja = ${belanja}`)
document.writeln("\n")
if(belanja < 100000){
  document.writeln(`Anda Tidak mendapatkan Diskon`)
}
else if(belanja >= 100000 && belanja < 200000){
  let diskon = belanja * 10 / 100
  document.writeln(`Anda mendapat diskon 10% dan total Bayar menjadi ${belanja - diskon}`)
}else if(belanja >= 200000){
  let diskon = belanja * 25 / 100
  document.writeln(`Anda mendapatkan diskon 25% dan total bayar menjadi ${belanja - diskon}`)
}
