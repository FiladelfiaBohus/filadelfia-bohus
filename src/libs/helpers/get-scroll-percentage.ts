export const getScrollPercentage = (
  windowHeight: number,
  scrollPosition: number
) => {
  // Calculate the percentage scrolled
  const scrollPercentage = (scrollPosition / windowHeight) * 10;

  if (scrollPercentage > 0.95) {
    return 0.95;
  }

  return scrollPercentage;
};
