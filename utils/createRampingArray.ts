export const createRampingArray = (
  size: number,
  startingValue: number,
  cap: number
) => {
  const arr: number[] = [];
  for (let i = 0; i < size; i++) {
    const previousValue = arr[i - 1] || 0;
    if (previousValue >= cap) {
      arr.push(cap);
    } else {
      arr.push(previousValue + startingValue);
    }
  }
  return arr;
};
