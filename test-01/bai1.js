//cach_1
const departurePlanet = "Trái Đất";
const mission = "Khám phá Vũ trụ K6";
const crew = ["Yến", "Ánh", "Khang"];

function launchShip(crew) {
  const message = `Chuẩn bị khởi động! Phi hành đoàn gồm: ${crew.join(", ")} sẽ đồng hành cùng bạn trong chuyến phiêu lưu khám phá Vũ trụ K6!`;
  return message;
}

console.log(launchShip(crew));

//cach_2
const departurePlanet1 = "Trái Đất";
const mission1 = "Khám phá Vũ trụ K6";
const crew1 = ["Yến", "Ánh", "Khang"];

function launchShip(crew1) {
  const message = `Chuẩn bị khởi động! Phi hành đoàn gồm: ${crew1.toString()} sẽ đồng hành cùng bạn trong chuyến phiêu lưu khám phá Vũ trụ K6!`;
  return message;
}

console.log(launchShip(crew1));