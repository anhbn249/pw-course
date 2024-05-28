//bai_1
function tinhBMI(chieuCao, canNang) {
    const BMI = canNang / (chieuCao * canNang);
    if (BMI < 18.5) {
        console.log("thiếu cân");
    } else if (BMI >= 18.5 && BMI < 25) {
        console.log("Bình thường");
    } else if (BMI >= 25 && BMI < 30) {
        console.log("Thừa cân");
    } else {
        console.log("Béo phì");
    };
}
tinhBMI (1.58, 54)