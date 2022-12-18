export function setBackgroundImage(time) {
  const photos = {
    morning: "url('./assets/morning.jpg')",
    afternoon: "url('./assets/afternoon.jpg')",
    night: "url('./assets/night.jpg')",
  };
  return photos[time];
}

export function steClockBoxColor(time) {
  const colors = {
    morning: "#7B9EBED2",
    afternoon: "#cc98c9d2",
    night: "#e68c80d2",
  };
  return colors[time];
}
