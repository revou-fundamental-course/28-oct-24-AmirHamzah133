// Menambahkan fungsi dari calculate
function calculate() {
  // Inisialisasi elemen HTML ke dalam variabel
  const gender = document.querySelector('input[name="radio"]:checked').value;
  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value) / 100; // Convert cm to m

  // Kalkulasi BMI berdasarkan rumus BMI
  const bmi = weight / (height * height);

  // Klasifikasi komen dari hasil kalkulasi
  let comment;
  if (bmi < 18.5) {
    comment = "Berat Badan Kurang";
  } else if (bmi >= 18.5 && bmi < 25) {
    comment = "Berat Badan Normal";
  } else if (bmi >= 25 && bmi < 30) {
    comment = "Berat Badan Berlebih";
  } else {
    comment = "Obesitas";
  }

  // Menunjukkan hasil dengan manipulasi value dari style display
  document.getElementById("result").style.display = "block";
  // Menampilkan hasil bmi
  document.getElementById("resultNumber").textContent = bmi.toFixed(2);
  // Menampilkan komen / kategori kesehatan
  document.getElementById("comment").textContent = comment;
}