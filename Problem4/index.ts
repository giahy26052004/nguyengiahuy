// Phương pháp lặp (Iterative approach)
function sum_to_n_a(n: number): number {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

// Độ phức tạp:
// - Thời gian: O(n) - Tuyến tính do phải lặp qua từ 1 đến n.
// - Không gian: O(1) - Chỉ sử dụng một số biến cố định.

// Phương pháp công thức toán học (Mathematical formula approach)
function sum_to_n_b(n: number): number {
  return (n * (n + 1)) / 2;
}

// Độ phức tạp:
// - Thời gian: O(1) - Hằng số do chỉ thực hiện phép tính trực tiếp.
// - Không gian: O(1) - Không sử dụng cấu trúc dữ liệu bổ sung.

// Phương pháp đệ quy (Recursive approach)
function sum_to_n_c(n: number): number {
  if (n <= 0) return 0;
  return n + sum_to_n_c(n - 1);
}

// Độ phức tạp:
// - Thời gian: O(n) - Tuyến tính do thực hiện n lần gọi đệ quy.
// - Không gian: O(n) - Tuyến tính do độ sâu của stack gọi hàm là n.
