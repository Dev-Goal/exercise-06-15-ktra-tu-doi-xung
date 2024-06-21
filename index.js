function isPalindrome(str) {
  let i = 0,
      j = str.length - 1;
  let flag = true;
  while (i <= j) {
      if (str[i] !== str[j]) {
          flag = false;
      }
      i++;
      j--;
  }
  return flag;
}
const s = prompt("Nhap vao mot chuoi");
if (isPalindrome(s)) {
  alert("Doi xung");
} else {
  alert("Khong doi xung");
}