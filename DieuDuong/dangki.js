const hienThiThongTin = function () {
  var hoTen = document.getElementById("txtHoTen").value;
  var namSinh = document.getElementById("txtNamSinh").value;
  var trinhDo = document.getElementById("trinhDo").value;
  var xepLoai = document.getElementById("xepLoai").value;

  console.log(hoTen, namSinh, trinhDo, xepLoai);

  var ThanhVien = {
    //thuộc tính
    hoTen: hoTen,
    namSinh: namSinh,
    trinhDo: trinhDo,
    xepLoai: xepLoai,
  };

  console.log(
    ThanhVien.hoTen,
    ThanhVien.namSinh,
    ThanhVien.trinhDo,
    ThanhVien.xepLoai
  );

  document.getElementById("spanHoTen").innerHTML = ThanhVien.hoTen;
  document.getElementById("spanNamSinh").innerHTML = ThanhVien.namSinh;
  document.getElementById("spanTrinhDo").innerHTML = ThanhVien.trinhDo;
  document.getElementById("spanXepLoai").innerHTML = ThanhVien.xepLoai;
};

//gắn sự kiện vào button

document
  .getElementById("hienThiThongTin")
  .addEventListener("click", hienThiThongTin);
