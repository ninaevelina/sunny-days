export function getWindDescription(speed: number) {
  if (speed < 3.3) {
    return "Calm winds";
  } else if (speed < 8.0) {
    return "Moderate breeze";
  } else if (speed < 13.9) {
    return "Fresh breeze";
  } else if (speed < 24.5) {
    return "Strong breeze";
  } else if (speed < 32.7) {
    return "Stormy winds";
  } else if (speed >= 32.7) {
    return "Hurricane winds, take cover!";
  }
}
