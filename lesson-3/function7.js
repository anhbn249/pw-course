//bai_7
const sanPham = [{
    name: "product 1",
    price: 100
},
{
    name: "product 2",
    price: 0
},
{
    name: "product 4",
    price: 0
},
{
    name: "product 5",
    price: 20
},
{
    name: "product 6",
    price: 0
},
{
    name: "product 7",
    price: 65
}
]

function sanPhamLonHon0(sanPham) {
    for (let i = 0; i < sanPham.length; i++) {
        if (sanPham[i].price > 0) {
            console.log(sanPham[i]);
        }
    }
}
sanPhamLonHon0(sanPham);