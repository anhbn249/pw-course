//bai_6
const diemSo = [{
    name: "Alex",
    score: 85
},
{
    name: "Jane",
    score: 60
},
{
    name: "Billy",
    score: 89
},
{
    name: "Jasmine",
    score: 95
},
{
    name: "Belly",
    score: 70
}
]

function diemTrungBinh(diemSo) {
    let avg;
    let tongDiem = 0;
    for (let i = 0; i < diemSo.length; i++) {
        tongDiem += diemSo[i].score
    };
    avg = tongDiem / diemSo.length;
    console.log(avg);
}
diemTrungBinh(diemSo);