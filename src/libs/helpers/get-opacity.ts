export const getOpacity = (scrollDistance: number) => {
  const maxScroll = 130;
  const minScroll = 56;

  // Clamp scroll distance to be within minScroll and maxScroll
  const clampedScroll = Math.max(
    minScroll,
    Math.min(maxScroll, scrollDistance)
  );

  // Interpolate opacity linearly between 0 and 1 based on scroll distance
  const opacity = (clampedScroll - minScroll) / (maxScroll - minScroll);

  if (opacity >= 1) {
    return 1;
  }

  return opacity;
};
