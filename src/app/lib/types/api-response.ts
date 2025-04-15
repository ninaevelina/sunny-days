export type ApiResponse = {
  city: {
    name: string;
  };
  list: {
    dt: number;
    dt_txt: string;
    main: {
      temp: number;
      feels_like: number;
      temp_min: number;
      temp_max: number;
      humidity: number;
    };
    wind: {
      speed: number;
    };
    weather: {
      description: string;
    }[];
  }[];
};
