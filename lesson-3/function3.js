//bài_3
function tinhTong(mangSoLe) {
    let tongSoLe = 0;
    for (let i = 0; i < mangSoLe.length; i++) {
        tongSoLe += mangSoLe[i];
    }
    console.log(tongSoLe);
}

mangSoLe = [1, 3, 5, 7, 9, 11, 13];
tinhTong(mangSoLe);