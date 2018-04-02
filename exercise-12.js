function konversiMenit(menit) {
  let h = Math.floor(menit / 60);
  let m = menit % 60;
  m = m < 10 ? '0' + m : m;
  return `${h}:${m}`;
}

console.log(konversiMenit(63))
console.log(konversiMenit(124))
console.log(konversiMenit(53))
console.log(konversiMenit(88))
console.log(konversiMenit(120))
