//bai_2
function chuyenDoiNhietDo(nhietDo, loaiNhietDo) {
    if (loaiNhietDo === "C") {
        console.log(nhietDo * 9 / 5 + 32);
    } else if (loaiNhietDo === "F") {
        console.log((nhietDo - 32) * 5 / 9);
    } else {
        console.log("Loại nhiệt độ không hợp lệ.");
    }
}

chuyenDoiNhietDo(90, "F");