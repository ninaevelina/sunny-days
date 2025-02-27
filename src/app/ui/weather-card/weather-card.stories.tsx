import { Meta, StoryObj } from "@storybook/react";
import WeatherCard from "./weather-card";
import { ApiResponse } from "@/app/lib/types/api-response";

const meta: Meta<typeof WeatherCard> = {
  title: "ui/WeatherCard",
  component: WeatherCard,
  parameters: {
    layout: "centered",
  },
  argTypes: {},
} satisfies Meta<typeof WeatherCard>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockData: ApiResponse = {
  name: "Stockholm",
  main: {
    temp: 4,
    feels_like: 3,
  },
  weather: [
    {
      description: "broken clouds",
    },
  ],
};

export const Default: Story = {
  args: {
    weatherData: mockData,
  },
};

export const NoData: Story = {
  args: {
    weatherData: null,
  },
};
