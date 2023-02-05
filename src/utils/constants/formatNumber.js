export default function formatNumber(num) {
  // Six Zeroes for Millions 
  return Math.abs(Number(num)) >= 1.0e+6
  ? (Math.abs(Number(num)) / 1.0e+6).toFixed(2) + "M"

  // Three Zeroes for Thousands
  : Math.abs(Number(num)) >= 1.0e+3
  ? (Math.abs(Number(num)) / 1.0e+3).toFixed(2) + "K"

  : Math.abs(Number(num));
}