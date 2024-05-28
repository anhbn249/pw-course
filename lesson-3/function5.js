//bai_5
const global = [
    { name: 'Anh', email: 'anhbn@vmogroup.com' },
    { name: 'Nhan', email: 'nhannt@vmogroup.com' },
    { name: 'Quang Anh', email: 'anhnq@vmogroup.com' },
    { name: 'Thuy', email: 'thuymtt@vmogroup.com' },
];
function capNhatEmail(name, newEmail) {
    for (let i = 0; i < global.length; i++) {
        if (global[i].name === name) {
            global[i].email = newEmail;
        }
    }
    console.log(global);
}
capNhatEmail('Thuy', 'Thuymtt@gmail.com');