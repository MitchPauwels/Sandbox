let nestedArr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

for (let i = 0; i < nestedArr.length; i++) {
  console.log(`Row #${i + 1}`);
  const row = nestedArr[i];
  console.log(row);
  for (let j = 0; j < row.length; j++) {
    const rowItem = row[j];
    console.log(rowItem);
  }
}
