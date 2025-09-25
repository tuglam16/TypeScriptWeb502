// 1. Định nghĩa Vehicle
interface Vehicle {
  name: string;
  type: string;  // Xe máy, Ô tô, Xe đạp
  speed: number; // km/h
}

// 2. Định nghĩa MotorizedVehicle mở rộng Vehicle
enum FuelType {
  XANG = "Xăng",
  DIEN = "Điện",
}

interface MotorizedVehicle extends Vehicle {
  fuelType: FuelType;
}

// 3. Hàm tính thời gian di chuyển
function calculateTravelTime(vehicle: Vehicle, distance: number): number {
  if (vehicle.speed <= 0) throw new Error("Vận tốc phải lớn hơn 0");
  return distance / vehicle.speed;
}

// 4. Danh sách phương tiện MotorizedVehicle
const vehicles: MotorizedVehicle[] = [
  { name: "Honda Wave", type: "Xe máy", speed: 60, fuelType: FuelType.XANG },
  { name: "VinFast VF e34", type: "Ô tô", speed: 80, fuelType: FuelType.DIEN },
  { name: "Toyota Camry", type: "Ô tô", speed: 100, fuelType: FuelType.XANG },
];

// Demo: tính thời gian cho quãng đường 100 km
const distance = 100;
vehicles.forEach((v) => {
  const time = calculateTravelTime(v, distance);
  console.log(`${v.name} (${v.fuelType}) đi ${distance} km mất khoảng ${time.toFixed(2)} giờ`);
});
