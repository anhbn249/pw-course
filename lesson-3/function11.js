function tinhDiem (diemSo) {
    if( diemSo < 0 || diemSo > 10 ) {
        console.log ("Điểm số không hợp lệ");
    } else if (diemSo < 5) {
        console.log ("Yếu");
    } else if (diemSo >=5 && diemSo < 6.5) {
        console.log ("Trung Bình");
    } else if (diemSo >= 6.5 && diemSo < 8) {
        console.log ("Khá");
    }else {
        console.log ("Giỏi");
    }
}
tinhDiem (8.6)