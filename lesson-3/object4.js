//bai_4
const product = {
    product1: 15000,
    product2: 20000,
    product3: 14500,
    product4: 10500,
    product5: 30500
};

for (const productname in product) {
    console.log(`${productname} ${product[productname]}`);
}