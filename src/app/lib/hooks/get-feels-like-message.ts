export function getFeelsLikeMessage(feels_like: number, temp: number) {
  if (feels_like < temp) {
    return "It feels colder than the actual temperature, remember your jacket!";
  }
  if (feels_like > temp) {
    return "It feels warmer than the actual temperature, remember to stay hydrated!";
  }
  return "The temperature feels just right, have a great day!";
}
