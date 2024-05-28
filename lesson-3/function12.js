function nhietDo(doC) {
    if (doC < 20) {
        console.log(`${doC} : lạnh`);
    } else if (doC < 30 && doC >= 20) {
        console.log(`${doC} : mát`);
    } else {
        console.log(`${doC} : nóng`);
    }
}
nhietDo(30)