export const getBlockSize = (scrollDistance: number) => {
  let blockSize = 130;
  const max = 130;
  const min = 56;
  if (scrollDistance <= max) {
    blockSize = max - scrollDistance;
  }
  if (max - scrollDistance <= min) {
    blockSize = min;
  }
  return blockSize;
};
