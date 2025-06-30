export function getHumidityMessage(humidity: number) {
  if (humidity <= 40) {
    return "The air feels dry";
  } else if (humidity > 40 && humidity <= 60) {
    return "Normal humidity levels, comfortable weather";
  } else {
    return "High humidity, it might feel sticky";
  }
}
