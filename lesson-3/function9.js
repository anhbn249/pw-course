//bai_9
const gia = ["Miễn phí", "50k", "100k"];

function giaVe(doTuoi) {
    let ketQua;
    if (doTuoi < 5) {
        ketQua = gia[0];
    } else if (doTuoi >= 6 && doTuoi <= 17) {
        ketQua = gia[1];
    } else {
        ketQua = gia[2];
    }
    console.log(`Độ tuổi: ${doTuoi}, Giá vé: ${ketQua}`);
}

giaVe(19);