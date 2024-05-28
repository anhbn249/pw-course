
function kiemTraGio(gio) {
    if (gio < 0 || gio > 24) {
        console.log("giờ không hợp lệ");
    }
    else if (gio >= 9 && gio <= 21) {
        console.log("giờ mở cửa");
    }
    else {
        console.log("giờ đóng cửa");
    }
}
kiemTraGio(11)