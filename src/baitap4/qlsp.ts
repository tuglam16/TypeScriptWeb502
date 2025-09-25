// 1. Định nghĩa interface Product
interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
}

// 2. Danh sách sản phẩm (ít nhất 5 phần tử)
const products: Product[] = [
  { id: 1, name: "Laptop", price: 1500, category: "Điện tử" },
  { id: 2, name: "Điện thoại", price: 800, category: "Điện tử" },
  { id: 3, name: "Bánh mì", price: 20, category: "Thực phẩm" },
  { id: 4, name: "Sữa", price: 30, category: "Thực phẩm" },
  { id: 5, name: "Áo thun", price: 100, category: "Thời trang" },
];

// 3. Hàm lọc sản phẩm theo danh mục
function filterByCategory(list: Product[], category: string): Product[] {
  return list.filter((p) => p.category.toLowerCase() === category.toLowerCase());
}

// 4. Hàm tính tổng giá trị sản phẩm
function calculateTotalPrice(list: Product[]): number {
  return list.reduce((sum, p) => sum + p.price, 0);
}

// 5. Hàm tìm sản phẩm có giá trị nhỏ nhất và lớn nhất
function findMinMax(list: Product[]): { min: Product; max: Product } {
  let min = list[0];
  let max = list[0];
  for (let p of list) {
    if (p.price < min.price) min = p;
    if (p.price > max.price) max = p;
  }
  return { min, max };
}

// --- Demo ---
console.log("Sản phẩm Điện tử:", filterByCategory(products, "Điện tử"));
console.log("Tổng giá trị:", calculateTotalPrice(products));
console.log("Sản phẩm rẻ và đắt nhất:", findMinMax(products));
