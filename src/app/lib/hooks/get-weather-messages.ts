export function getFeelsLikeMessage(feels_like: number, temp: number) {
  if (feels_like < temp) {
    return "It feels colder than the actual temperature, remember your jacket!";
  }
  if (feels_like > temp) {
    return "It feels warmer than the actual temperature, remember to stay hydrated!";
  }
  return "The temperature feels just right, have a great day!";
}

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

export function getHumidityMessage(humidity: number) {
  if (humidity <= 40) {
    return "The air feels dry";
  } else if (humidity > 40 && humidity <= 60) {
    return "Normal humidity levels, comfortable weather";
  } else {
    return "High humidity, it might feel sticky";
  }
}
