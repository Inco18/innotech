export function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

export function addUniqueItemToLocalStorageArray<T>(
  key: string,
  item: T,
  maxLength: number
) {
  const oldItem = localStorage.getItem(key);
  const oldArr: T[] = oldItem ? JSON.parse(oldItem) : [];
  oldArr.unshift(item);
  const uniqueArr: T[] = Array.from(new Set(oldArr)).slice(0, maxLength - 1);
  localStorage.setItem(key, JSON.stringify(uniqueArr));
}
