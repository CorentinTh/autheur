export function getRandomItemInArray<T extends unknown>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}
