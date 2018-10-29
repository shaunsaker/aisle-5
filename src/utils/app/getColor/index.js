const getColor = (value) => {
  const hue = ((1 - value) * 120).toString(10);
  return ['hsl(', hue, ',67%,50%)'].join('');
};

export default getColor;
