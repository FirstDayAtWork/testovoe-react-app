export function isLiked(id: number, array: number[]) {
  return array.find((item) => item === id);
}
